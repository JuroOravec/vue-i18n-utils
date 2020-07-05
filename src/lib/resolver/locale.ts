import merge from 'lodash.merge';
import micromatch from 'micromatch';
import isGlob from 'is-glob';

import type { I_Item } from '../item/types';
import type { IResolver } from './types';
import {
  localeResolverDebug,
  nullLocaleResolverDebug,
  globLocaleResolverDebug,
} from '../util/debug';
import { Resolver } from './resolver';
import { ItemArray } from '../item';

export abstract class AbstractLocaleResolver extends Resolver
  implements IResolver.Resolver {
  static get defaults() {
    return {
      ...super.defaults,
      logger: localeResolverDebug,
    };
  }
}

/**
 * Locale resolver that simply returns locales back.
 */
export class NullLocaleResolver extends AbstractLocaleResolver
  implements IResolver.Locale.Null.Resolver {
  constructor(public options: IResolver.Locale.Null.CtorOptions = {}) {
    super(options);
  }

  resolve<T extends any>(locales: T[], items: any[], options = {}): T[] {
    this.logger(`Returning locales '${locales.map(String).join("', '")}'.`);
    return locales;
  }

  static get defaults() {
    return {
      ...super.defaults,
      logger: nullLocaleResolverDebug,
    };
  }
}

/**
 * Locale resolver that resolves locales as globs.
 *
 * Glob options can be passed to constructor or `resolver` options.
 */
export class GlobLocaleResolver extends AbstractLocaleResolver
  implements IResolver.Locale.Glob.Resolver {
  constructor(public options: IResolver.Locale.Glob.CtorOptions = {}) {
    super(options);
  }

  resolve<T extends I_Item.Item>(
    globs: string[],
    items: T[],
    options: IResolver.Locale.Glob.ResolveOptions = {},
  ): NonNullable<T['locale']>[] {
    const opts = merge({}, this.options, options);

    const globsReadable = globs.map(String).join("', '");

    const unmatchedLocales = new Set(ItemArray.uniqProp(items, 'locale'));
    const matchedLocales = [] as NonNullable<T['locale']>[];

    this.logger(`Resolving locales for globs '${globsReadable}'.`);
    for (const glob of globs) {
      let matched = false;
      [...unmatchedLocales].forEach((locale, i) => {
        if (micromatch.isMatch(locale, glob, opts)) {
          matchedLocales.push(locale);
          unmatchedLocales.delete(locale);
          matched = true;
        }
      });

      if (!matched && !isGlob(glob, { strict: false })) {
        // If there was no match, and it is non-glob, treat it as regular
        // string. Required so that resolver allows to introduce new locales
        // which would otherwise not match any existing locales
        matchedLocales.push(glob as NonNullable<T['locale']>);
      }
    }

    this.logger(
      `Done resolving locales. Globs '${globsReadable}' matched ` +
        `${matchedLocales.length} locales: '${matchedLocales
          .map(String)
          .join("', '")}'.`,
    );

    return matchedLocales;
  }

  static get defaults() {
    return {
      ...super.defaults,
      logger: globLocaleResolverDebug,
    };
  }
}
