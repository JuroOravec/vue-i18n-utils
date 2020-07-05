import merge from 'lodash.merge';
import uniq from 'lodash.uniq';
import flatten from 'lodash.flatten';
import micromatch from 'micromatch';
import isGlob from 'is-glob';

import type { I_Item } from '../item/types';
import type { IResolver } from './types';
import {
  keyResolverDebug,
  nullKeyResolverDebug,
  globKeyResolverDebug,
} from '../util/debug';
import { Resolver } from './resolver';
import { uniqFilterMap } from '../util/array';
import { ArrayMap } from '../util/array-map';

export abstract class AbstractKeyResolver extends Resolver
  implements IResolver.Resolver {
  static get defaults() {
    return {
      ...super.defaults,
      logger: keyResolverDebug,
    };
  }
}

/**
 * Key resolver that simply returns keys back.
 */
export class NullKeyResolver extends AbstractKeyResolver
  implements IResolver.Key.Null.Resolver {
  constructor(public options: IResolver.Key.Null.CtorOptions = {}) {
    super(options);
  }

  resolve<T extends string[]>(
    keys: T[],
    items: I_Item.Item[],
    options = {},
  ): T[] {
    this.logger(`Returning keys '${keys.map(String).join("', '")}'.`);
    return keys;
  }

  static get defaults() {
    return {
      ...super.defaults,
      logger: nullKeyResolverDebug,
    };
  }
}

/**
 * Key resolver that resolves keys as globs.
 *
 * Glob options can be passed to constructor or `resolver` options.
 */
export class GlobKeyResolver extends AbstractKeyResolver
  implements IResolver.Key.Glob.Resolver {
  constructor(public options: IResolver.Key.Glob.CtorOptions = {}) {
    super(options);
  }

  resolve<T extends I_Item.Item>(
    globs: string[],
    items: T[],
    options: IResolver.Key.Glob.ResolveOptions = {},
  ): string[][] {
    const globsReadable = globs.map(String).join("', '");

    this.logger(`Resolving keys for globs '${globsReadable}'.`);

    const { keys, paths } = this._resolve(globs, items, options);

    this.logger(
      `Done resolving keys. Globs '${globsReadable}' matched ` +
        `${keys.length} keys: '${keys.map(String).join("', '")}'.`,
    );

    return paths;
  }

  private _resolve<T extends I_Item.Item>(
    globs: string[],
    items: T[],
    options: IResolver.Key.Glob.ResolveOptions = {},
  ) {
    const { separator, ...globOpts } = merge(
      {},
      GlobKeyResolver.defaults,
      this.options,
      options,
    );
    const unmatchedKeyGroups = ArrayMap.groupBy(items, (item) =>
      item.path?.join(separator),
    );
    const matchedKeyGroups = new Map<T['locale'], T[]>();
    const nonGlobs = [];

    for (const glob of globs) {
      let matched = false;
      [...unmatchedKeyGroups].forEach(([key, items], i) => {
        if (micromatch.isMatch(key!, glob, globOpts)) {
          matchedKeyGroups.set(key, items);
          unmatchedKeyGroups.delete(key);
          matched = true;
        }
      });
      // If there was no match, and it is non-glob, treat it as regular
      // string. Required so that resolver allows to introduce new keys
      // which would otherwise not match any existing keys
      if (!matched && !isGlob(glob, { strict: false })) {
        nonGlobs.push(glob);
      }
    }
    /**
     * There is ambiguity between the string representation and actual path in
     * cases where the separator character is used within the path itself.
     *
     * E.g. paths ['a.b', 'c'] and ['a', 'b', 'c'] are matched by same string
     * 'a.b.c' if separator is '.'
     *
     * Because of this we make the distinction between matched keys and matched
     * paths.
     */
    const matchedKeys = uniq([...matchedKeyGroups.keys(), ...nonGlobs]);
    const matchedPaths = uniq([
      ...uniqFilterMap(
        flatten([...matchedKeyGroups.values()]),
        (item) => item.pathHash,
        (item) => item.path,
        (item) => item.path!,
      ),
      ...nonGlobs.map((g) => g.split(separator)),
    ]);
    return { keys: matchedKeys, paths: matchedPaths };
  }

  static get defaults() {
    return {
      ...super.defaults,
      separator: '.',
      logger: globKeyResolverDebug,
    };
  }
}
