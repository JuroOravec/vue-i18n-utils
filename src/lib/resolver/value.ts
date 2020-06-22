import merge from 'lodash.merge';
import groupBy from 'lodash.groupby';
import micromatch from 'micromatch';
import isGlob from 'is-glob';

import type { I_Item } from '../item/types';
import type { IResolver } from './types';
import {
  valueResolverDebug,
  nullValueResolverDebug,
  globValueResolverDebug,
} from '../util/debug';
import { Resolver } from './resolver';
import { mapFilterUniq } from '../util/array';

export abstract class AbstractValueResolver extends Resolver
  implements IResolver.Resolver {
  static get defaults() {
    return {
      ...super.defaults,
      logger: valueResolverDebug,
    };
  }
}

/**
 * Value resolver that simply returns values back.
 */
export class NullValueResolver extends AbstractValueResolver
  implements IResolver.Value.Null.Resolver {
  constructor(public options: IResolver.Value.Null.CtorOptions = {}) {
    super(options);
  }

  resolve<T extends any>(values: T[], items: I_Item.Item[], options = {}) {
    this.logger(`Returning values '${values.join("', '")}'.`);
    return values;
  }

  static get defaults() {
    return {
      ...super.defaults,
      logger: nullValueResolverDebug,
    };
  }
}

/**
 * Value resolver that resolves values as globs.
 *
 * Glob options can be passed to constructor or `resolver` options.
 */
export class GlobValueResolver extends AbstractValueResolver
  implements IResolver.Value.Glob.Resolver {
  constructor(public options: IResolver.Value.Glob.CtorOptions = {}) {
    super(options);
  }

  resolve<T extends I_Item.Item>(
    globs: string[],
    items: T[],
    options: IResolver.Value.Glob.ResolveOptions = {},
  ) {
    const globsReadable = globs.join("', '");
    this.logger(`Resolving values for globs '${globsReadable}'.`);
    const values = this._resolve(globs, items, options);
    this.logger(
      `Done resolving values. Globs '${globsReadable}' matched ` +
        `${values.length} values: '${values.map(String).join("', '")}'.`,
    );
    return values;
  }

  _resolve<T extends I_Item.Item>(
    globs: string[],
    items: T[],
    options: IResolver.Value.Glob.ResolveOptions = {},
  ) {
    const opts = merge({}, this.options, options);
    const unmatchedValues = new Set(
      mapFilterUniq(items, (item) => item.value) as string[],
    );
    const matchedValues = [] as string[];

    for (const glob of globs) {
      let matched = false;
      [...unmatchedValues].forEach((key, i) => {
        if (micromatch.isMatch(key, glob, opts)) {
          matchedValues.push(key);
          unmatchedValues.delete(key);
          matched = true;
        }
      });
      if (!matched && !isGlob(glob, { strict: false })) {
        // If there was no match, and it is non-glob, treat it as regular
        // string. Required so that resolver allows to introduce new values
        // which would otherwise not match any existing values
        matchedValues.push(glob);
      }
    }
    return matchedValues;
  }

  static get defaults() {
    return {
      ...super.defaults,
      logger: globValueResolverDebug,
    };
  }
}

/**
 * Value resolver that resolves values either as globs, or evaluates a string
 * as JS if value starts with `'!js:'` (e.g. `'!js:null'` evaluates to `null`)
 *
 * Glob options can be passed to constructor or `resolver` options.
 */
export class EvalGlobValueResolver extends GlobValueResolver
  implements IResolver.Value.Glob.Resolver {
  resolve<T extends I_Item.Item>(
    globs: string[],
    items: T[],
    options: IResolver.Value.Glob.ResolveOptions = {},
  ) {
    const globsReadable = globs.map(String).join("', '");
    this.logger(`Resolving values for inputs '${globsReadable}'.`);
    const { js = [], glob = [] } = groupBy(globs, (s) =>
      s.startsWith('!js:') ? 'js' : 'glob',
    );
    const values = [
      ...js.map((s) => eval(s.slice(4))),
      ...this._resolve(glob, items, options),
    ];
    this.logger(
      `Done resolving values. Inputs '${globsReadable}' matched ` +
        `${values.length} values: '${values.map(String).join("', '")}'.`,
    );
    return values;
  }
}
