import merge from 'lodash.merge';
import uniqBy from 'lodash.uniqby';

import type { AnyObj } from '../../types';
import type { I_I18nUtil } from './types';
import type { IValidator } from '../validator/types';
import type { ISchemator } from '../schemator/types';
import type { IDefinition } from '../definition/types';
import type { IResolver } from '../resolver/types';
import type { I_Item } from '../item/types';
import { AdaptorCollection } from './adaptor';
import { Schemator } from '../schemator';
import { Validator } from '../validator';
import {
  GlobPathResolver,
  GlobLocaleResolver,
  GlobKeyResolver,
  EvalGlobValueResolver,
} from '../resolver';
import { DefinitionArray } from '../definition';
import { debug } from '../util/debug';

export class Base implements I_I18nUtil.Base {
  adaptors: I_I18nUtil.AdaptorCollection.Collection;
  pathResolver: IResolver.PathResolver;
  localeResolver: IResolver.LocaleResolver;
  keyResolver: IResolver.KeyResolver;
  valueResolver: IResolver.ValueResolver;
  schemator: ISchemator.Schemator;
  validator: IValidator.Validator;
  options: AnyObj;

  constructor({
    adaptors,
    pathResolver,
    localeResolver,
    keyResolver,
    valueResolver,
    schemator,
    validator,
    ...rest
  }: I_I18nUtil.CtorOptions & AnyObj = {}) {
    // Create shallow copies of the passed objects
    this.options = { ...rest };
    this.adaptors = adaptors ?? new AdaptorCollection();
    this.pathResolver = pathResolver ?? new GlobPathResolver();
    this.localeResolver = localeResolver ?? new GlobLocaleResolver();
    this.keyResolver = keyResolver ?? new GlobKeyResolver();
    this.valueResolver = valueResolver ?? new EvalGlobValueResolver();
    this.schemator = schemator ?? new Schemator();
    this.validator = validator ?? new Validator();
  }

  addAdaptor(params: Parameters<Base['adaptors']['add']>[0]) {
    const parserName = params.name ? `'${params.name}'` : '';
    debug(`Adding parser ${parserName}`);
    this.adaptors.add(params);
  }

  addAdaptors(paramsList: Parameters<Base['adaptors']['add']>[0][]) {
    paramsList.forEach((params) => this.addAdaptor(params));
  }

  removeAdaptor(name: Parameters<Base['adaptors']['delete']>[0]) {
    debug(`Removing parser '${name}'`);
    this.adaptors.delete(name);
  }

  removeAdaptors(names: Parameters<Base['adaptors']['delete']>[0][]) {
    names.forEach((name) => this.removeAdaptor(name));
  }

  resolvePaths(paths: any[], options: I_I18nUtil.ResolvePathsOptions = {}) {
    const pathResOptions = this.effectiveOptions(options);
    return this._resolveInputs(
      paths,
      (inputs) => this.pathResolver.resolve(inputs, pathResOptions),
      { name: 'paths' },
    );
  }

  resolveLocales(
    items: I_Item.ItemArrayLike,
    locales: any[],
    options: I_I18nUtil.ResolveLocalesOptions = {},
  ) {
    const localeResOptions = this.effectiveOptions(options);
    return this._resolveInputs(
      locales,
      (inputs) =>
        this.localeResolver.resolve(inputs, [...items], localeResOptions),
      { name: 'locales' },
    );
  }

  resolveKeys(
    items: I_Item.ItemArrayLike,
    keys: any[],
    options: I_I18nUtil.ResolveKeysOptions = {},
  ) {
    const keyResOptions = this.effectiveOptions(options);
    return this._resolveInputs(
      keys,
      (inputs) => this.keyResolver.resolve(inputs, [...items], keyResOptions),
      { name: 'keys' },
    );
  }

  resolveValues(
    items: I_Item.ItemArrayLike,
    values: any[],
    options: I_I18nUtil.ResolveValuesOptions = {},
  ) {
    const valueResOptions = this.effectiveOptions(options);
    return this._resolveInputs(
      values,
      (inputs) =>
        this.valueResolver.resolve(inputs, [...items], valueResOptions),
      { name: 'values' },
    );
  }

  /**
   * Common pathway for deduping, logging and resolving array of inputs
   */
  private _resolveInputs<T extends any, R extends any>(
    inputs: T[],
    resolver: (x: T[]) => R[],
    options: object & {
      preUniqFilter?: (x: T) => boolean | void;
      postUniqFilter?: (x: R) => boolean | void;
      name?: string;
    } = {},
  ) {
    const {
      name = 'inputs',
      preUniqFilter = (x) => x,
      postUniqFilter = (x) => x,
    } = options;
    // Filter out dupes from both the items that are passed to resolver
    // and from resolver's output
    const uniqInputs = uniqBy(inputs, preUniqFilter);
    const nInputDupes = inputs.length - uniqInputs.length;
    debug(
      `Resolving ${uniqInputs.length} ${name} (${nInputDupes} duplicates ` +
        `skipped)`,
    );
    const resolvedInputs = resolver(uniqInputs);
    const uniqResInputs = uniqBy(resolvedInputs, postUniqFilter);
    const nResInputsDupes = resolvedInputs.length - uniqResInputs.length;
    debug(
      `Done resolving ${name}. Resolved to ${uniqResInputs.length} ${name} ` +
        `(${nResInputsDupes} duplicates skipped)`,
    );
    return uniqResInputs;
  }

  effectiveOptions<O extends AnyObj>(...options: O[]): O {
    return merge({}, this.options, ...options);
  }
}

export class LoadedBase extends Base implements I_I18nUtil.LoadedBase {
  i18nUtil: I_I18nUtil.Base;
  loaded: IDefinition.ItemArray;

  constructor({ i18nUtil, ...options }: I_I18nUtil.LoadedBaseCtorOptions = {}) {
    super(options);
    this.i18nUtil = i18nUtil ?? new Base(options);
    this.loaded = new DefinitionArray([...(options.definitions ?? [])]);
  }

  resolveLocales(
    locales: any[],
    options: I_I18nUtil.ResolveLocalesOptions = {},
  ) {
    return super.resolveLocales(this.loaded.items, locales, options);
  }

  resolveKeys(keys: any[], options: I_I18nUtil.ResolveKeysOptions = {}) {
    return super.resolveKeys(this.loaded.items, keys, options);
  }
}
