/**
 * Types for I18nUtil classes.
 *
 * These types are more concrete compared to the abstract types.
 *
 * These types should be used by classes / concretions in this or other
 * components.
 */

import type { AnyObj, UnwrapPromise } from '../../types';
import type {
  AIAdaptorCollection as IBaseAdaptorCollection,
  AICollection,
  AIAdaptorCollection,
} from '../collection/types-abstract';
import type { AI_Item } from '../item/types-abstract';
import type { AIDefinition } from '../definition/types-abstract';
import type { AIValidator } from '../validator/types-abstract';
import type { AIResolver } from '../resolver/types-abstract';
import type { AI_I18nUtil } from './types-abstract';
import type { AISchemator } from '../schemator/types-abstract';
import type { AIUsage } from '../usage/types-abstract';
import type { I_Item } from '../item/types';
import { applyMixins } from '../util/apply-mixins';

export * from './types-abstract';

export namespace I_I18nUtil {
  type Adaptors = AIAdaptorCollection.Collection;
  type Schemator = AISchemator.Schemator;
  type PathResolver = AIResolver.PathResolver;
  type LocaleResolver = AIResolver.LocaleResolver;
  type KeyResolver = AIResolver.KeyResolver;
  type ValueResolver = AIResolver.ValueResolver;
  type Validator = AIValidator.Validator;
  type DefItem = AIDefinition.Item;
  type DefItemArray = AIDefinition.ItemArray;
  type DefItemArrayLike = AIDefinition.ItemArrayLike;
  type UseItem = AIUsage.Item;
  type UseItemArrayLike = AIUsage.ItemArrayLike;

  /**
   * Function used by I18nUtil as parsers in AdaptorCollection
   */
  export type Parser<T extends AnyObj = AnyObj> = (
    filepaths: string[],
    options?: T,
  ) => DefItem[] | Promise<DefItem[]>;

  /**
   * Function used by I18nUtil as writer in AdaptorCollection
   */
  export type Writer<T extends AnyObj = AnyObj> = (
    definitions: DefItem[],
    options?: T,
  ) => void | Promise<void>;

  /**
   * Function used by I18nUtil as usageAnalyzer in AdaptorCollection
   */
  export type UsageAnalyzer<T extends AnyObj = AnyObj> = (
    filepaths: string[],
    options?: T,
  ) => UseItem[] | Promise<UseItem[]>;

  /**
   * Function used by I18nUtil as remover in AdaptorCollection
   */
  export type Remover<T extends AnyObj = AnyObj> = (
    filepaths: string[],
    options?: T,
  ) => void | Promise<void>;

  /**
   * Options object passed to I18nUtil constructor
   */
  export interface CtorOptions {
    schemator?: Schemator;
    pathResolver?: PathResolver;
    localeResolver?: LocaleResolver;
    keyResolver?: KeyResolver;
    valueResolver?: ValueResolver;
    adaptors?: Adaptors;
    validator?: Validator;
  }

  /**
   * Options object passed to constructor of variant of I18nUtil Base 'loaded'
   * with definitions.
   */
  export interface LoadedBaseCtorOptions<T extends Base = Base>
    extends CtorOptions {
    definitions?: DefItemArrayLike;
    i18nUtil?: T;
  }

  /**
   * Options object passed to constructor of variant of I18nUtil ItemProcessor
   * 'loaded' with definitions.
   */
  export interface LoadedItemProcessorCtorOptions<
    T extends ItemProcessor = ItemProcessor
  > extends LoadedBaseCtorOptions<T> {
    i18nUtil?: T;
  }

  /**
   * Options object passed to constructor of variant of I18nUtil ItemProcessor
   * 'loaded' with definitions.
   */
  export interface LoadedCtorOptions<T extends I18nUtil = I18nUtil>
    extends LoadedItemProcessorCtorOptions<T> {
    i18nUtil?: T;
  }

  /**
   * Options passed to PathResolver or methods that call it
   */
  export type ResolvePathsOptions = AIResolver.ResolveOptions;

  /**
   * Options passed to LocaleResolver or methods that call it
   */
  export type ResolveLocalesOptions = AIResolver.ResolveOptions;

  /**
   * Options passed to KeyResolver or methods that call it
   */
  export type ResolveKeysOptions = AIResolver.ResolveOptions;

  /**
   * Options passed to ValueResolver or methods that call it
   */
  export type ResolveValuesOptions = AIResolver.ResolveOptions;

  /**
   * Options for method `schema` or methods that call it
   */
  export type SchemaOptions = MasterOptions & AISchemator.GenerateOptions;

  /**
   * Options for method `validate` or methods that call it
   */
  export interface ValidateOptions
    extends MasterOptions,
      AIValidator.ValidateOptions {
    locales?: string[];
  }

  export interface ValidateAgainstOptions
    extends ValidateOptions,
      SchemaOptions {
    type?: 'usage' | 'definition';
  }

  /**
   * Options for method `definitions` or methods that call it
   */
  export type DefinitionOptions = AnyObj & AI_Item.ItemsByLocaleOptions;

  /**
   * Options for method `usage` or methods that call it
   */
  export type UsageOptions = AnyObj;

  /**
   * Options for method `write` or methods that call it
   */
  export type WriteOptions = AnyObj;

  /**
   * Options for method `patch` or methods that call it
   */
  export type PatchOptions<T extends AI_Item.Item = AI_Item.Item> = AnyObj &
    AI_Item.UpdateOptions<T>;

  /**
   * Options for method `patch` or methods that call it
   */
  export interface PatchToOptions<T extends AI_Item.Item = AI_Item.Item>
    extends PatchOptions<T> {
    /**
     * Path to file that acts as 'sink' - any definition items passed to
     * `patch` method will be written to this file if they miss the `source`
     * property.
     */
    sink?: string;
  }

  /**
   * Options for method `patch` or methods that call it
   */
  export type DropOptions = AnyObj & AI_Item.DifferenceOptions;

  /**
   * Options for method `master` or methods that call it
   */
  export type MasterOptions = AI_Item.ItemsByLocaleOptions;

  /**
   * Options shared by methods that resolve locales.
   */
  interface ResolveLocaleOptions {
    skipResolve?: boolean;
  }
  /**
   * Options for method `locale` or methods that call it
   */
  export type LocaleOptions = AI_Item.ItemsByLocaleOptions &
    ResolveLocaleOptions;

  /**
   * Options for method `toObject` or methods that call it
   */
  export type ToObjectOptions = AI_Item.ToObjectOptions;

  /**
   * Options for method `addLocale` or methods that call it
   */
  export type AddLocaleOptions<
    T extends AI_Item.Item = AI_Item.Item
  > = AI_Item.ItemsByLocaleOptions & PatchOptions<T> & ResolveLocaleOptions;

  /**
   * Options for method `removeLocale` or methods that call it
   */
  export type RemoveLocaleOptions = AI_Item.FilterByLocaleOptions &
    WriteOptions &
    ResolveLocaleOptions;

  /**
   * Options for method `clearLocale` or methods that call it
   */
  export type ClearLocaleOptions<T extends AI_Item.Item = AI_Item.Item> = Omit<
    AddLocaleOptions<T>,
    'includeMissing'
  > &
    ResolveLocaleOptions;

  /**
   * Options for method `missingItems` or methods that call it
   */
  export interface MissingItemsOptions
    extends Omit<AI_Item.ItemsByLocaleOptions, 'includeMissing'> {
    locales?: string[];
  }

  /**
   * Options for method `missingLocales` or methods that call it
   */
  export type MissingLocalesOptions = MissingItemsOptions;

  /**
   * Options for method `usageAnalyze` or methods that call it
   */
  export type UsageAnalyzeOptions = MissingItemsOptions;

  /**
   * Options for method `usageValidate` or methods that call it
   */
  export type UsageValidateOptions = MissingItemsOptions;

  /**
   * Options for method `missingItems` or methods that call it
   */
  export type StatsOptions = MissingItemsOptions;

  /**
   * Options for method `missingItems` or methods that call it
   */
  export interface KeyStatsCtorOptions extends StatsOptions {
    definitions?: DefItemArrayLike;
    usage?: UseItemArrayLike;
  }

  type UsageAnalyzeReturn = {
    usage: {
      defined: UseItem[];
      undefined: UseItem[];
      missing: UseItem[];
    };
    definitions: {
      used: DefItem[];
      unused: DefItem[];
      missing: DefItem[];
      duplicates: Map<string, Map<string, DefItem[]>>;
    };
  };

  abstract class AbstractBase {
    adaptors = {} as Adaptors;
    pathResolver = {} as PathResolver;
    localeResolver = {} as LocaleResolver;
    keyResolver = {} as KeyResolver;
    valueResolver = {} as ValueResolver;
    schemator = {} as Schemator;
    validator = {} as Validator;
    options = {} as AnyObj;

    addAdaptor = {} as (
      params: Parameters<Adaptors['add']>[0],
    ) => ReturnType<Adaptors['add']>;

    addAdaptors = {} as (
      paramsList: Parameters<Adaptors['add']>[0][],
    ) => ReturnType<Adaptors['add']>;

    removeAdaptor = {} as (
      name: Parameters<Adaptors['delete']>[0],
    ) => ReturnType<Adaptors['delete']>;

    removeAdaptors = {} as (
      names: Parameters<Adaptors['delete']>[0][],
    ) => ReturnType<Adaptors['delete']>;

    resolvePaths = {} as (
      paths: any[],
      options?: ResolvePathsOptions,
    ) => string[] | Promise<string[]>;
  }

  /**
   * Base class with base functionalities shared among the I18nUtil classes
   */
  export abstract class Base extends AbstractBase implements AI_I18nUtil.Base {
    resolveLocales = {} as (
      items: AI_Item.ItemArrayLike,
      locales: any[],
      options?: ResolveLocalesOptions,
    ) => string[] | Promise<string[]>;

    resolveKeys = {} as (
      items: AI_Item.ItemArrayLike,
      keys: any[],
      options?: ResolveKeysOptions,
    ) => string[][] | Promise<string[][]>;

    resolveValues = {} as (
      items: AI_Item.ItemArrayLike,
      values: any[],
      options?: ResolveValuesOptions,
    ) => any[] | Promise<any[]>;
  }

  export abstract class LoadedBase<T extends Base = Base> extends AbstractBase
    implements AI_I18nUtil.LoadedBase<T> {
    i18nUtil = {} as T;

    loaded = {} as DefItemArray;

    resolveLocales = {} as (
      locales: any[],
      options?: ResolveLocalesOptions,
    ) => ReturnType<Base['resolveLocales']>;

    resolveKeys = {} as (
      keys: any[],
      options?: ResolveKeysOptions,
    ) => ReturnType<Base['resolveKeys']>;

    resolveValues = {} as (
      values: any[],
      options?: ResolveValuesOptions,
    ) => ReturnType<Base['resolveValues']>;
  }

  /**
   * I18nUtil class with functionalities for working with definition and usage
   * items in the context of I18nUtil
   */
  export abstract class ItemProcessor extends Base
    implements AI_I18nUtil.ItemProcessor {
    master = {} as (
      items: AI_Item.ItemArrayLike,
      options?: MasterOptions,
    ) => DefItem[];

    locale = {} as (
      items: AI_Item.ItemArrayLike,
      locale: string,
      options?: LocaleOptions,
    ) => DefItem[] | Promise<DefItem[]>;

    locales = {} as (
      items: I_Item.ItemArrayLike,
      locales: string[],
      options?: LocaleOptions,
    ) => DefItem[] | Promise<DefItem[]>;

    toObject = {} as (
      items: AI_Item.ItemArrayLike,
      options?: ToObjectOptions,
    ) => AI_Item.ToObjectResultAny;

    missingItems = {} as (
      definitions: DefItemArrayLike,
      options?: MissingItemsOptions,
    ) => DefItem[];

    missingLocales = {} as (
      definitions: DefItemArrayLike,
      options?: MissingLocalesOptions,
    ) => string[];

    stats = {} as (
      definitions: DefItemArrayLike,
      usage: UseItemArrayLike,
      options?: I_I18nUtil.StatsOptions,
    ) => KeyStats;

    usageAnalyze = {} as (
      definitions: DefItemArrayLike,
      usage: UseItemArrayLike,
      options?: UsageAnalyzeOptions,
    ) => UsageAnalyzeReturn | Promise<UsageAnalyzeReturn>;

    usageValidate = {} as (
      definitions: DefItemArrayLike,
      usage: UseItemArrayLike,
      options?: UsageValidateOptions,
    ) => void;
  }

  /**
   * Variant of I18nUtilItemProcessor that stores the definitions it works
   * with.
   */
  export abstract class LoadedItemProcessor extends LoadedBase
    implements AI_I18nUtil.LoadedItemProcessor {
    i18nUtil = {} as ItemProcessor;

    master = {} as (
      options?: MasterOptions,
    ) => ReturnType<ItemProcessor['master']>;

    locale = {} as (
      locale: string,
      options?: LocaleOptions,
    ) => ReturnType<ItemProcessor['locale']>;

    locales = {} as (
      locales: string[],
      options?: LocaleOptions,
    ) => ReturnType<ItemProcessor['locales']>;

    toObject = {} as (
      options?: ToObjectOptions,
    ) => ReturnType<ItemProcessor['toObject']>;

    missingItems = {} as (
      options?: MissingItemsOptions,
    ) => ReturnType<ItemProcessor['missingItems']>;

    missingLocales = {} as (
      options?: MissingLocalesOptions,
    ) => ReturnType<ItemProcessor['missingLocales']>;

    stats = {} as (
      usage: UseItemArrayLike,
      options?: I_I18nUtil.StatsOptions,
    ) => ReturnType<ItemProcessor['stats']>;

    usageAnalyze = {} as (
      usage: UseItemArrayLike,
      options?: UsageAnalyzeOptions,
    ) => ReturnType<ItemProcessor['usageAnalyze']>;

    usageValidate = {} as (
      usage: UseItemArrayLike,
      options?: UsageValidateOptions,
    ) => ReturnType<ItemProcessor['usageValidate']>;
  }

  // Interface is used for merging mixin types
  export interface I18nUtil extends Base, ItemProcessor {}

  /**
   * Main class for working with definitions and the files where these items
   * are defined.
   */
  export abstract class I18nUtil implements AI_I18nUtil.I18nUtil {
    definitions = {} as (
      paths: string[],
      options?: DefinitionOptions,
    ) => DefItem[] | Promise<DefItem[]>;

    usage = {} as (
      paths: string[],
      options?: UsageOptions,
    ) => UseItem[] | Promise<UseItem[]>;

    write = {} as (
      definitions: DefItemArrayLike,
      options?: WriteOptions,
    ) => void | any | Promise<void | any>;

    patch = {} as (
      definitions: DefItemArrayLike,
      options?: PatchOptions<DefItem>,
    ) => void | any | Promise<void | any>;

    patchTo = {} as (
      definitions: DefItemArrayLike,
      options?: PatchOptions<DefItem>,
    ) => DefinitionLoader<I18nUtil, ReturnType<I18nUtil['patch']>>;

    drop = {} as (
      definitions: DefItemArrayLike,
      options?: PatchOptions<DefItem>,
    ) => void | any;

    dropFrom = {} as (
      definitions: DefItemArrayLike,
      options?: DropOptions,
    ) => DefinitionLoader<I18nUtil, ReturnType<I18nUtil['drop']>>;

    addLocale = {} as (
      definitions: DefItemArrayLike,
      locale: string,
      options?: AddLocaleOptions<DefItem>,
    ) => DefItem[] | Promise<DefItem[]>;

    addLocales = {} as (
      definitions: DefItemArrayLike,
      locale: string[],
      options?: AddLocaleOptions<DefItem>,
    ) => DefItem[] | Promise<DefItem[]>;

    removeLocale = {} as (
      definitions: DefItemArrayLike,
      locale: string,
      options?: RemoveLocaleOptions,
    ) => DefItem[] | Promise<DefItem[]>;

    removeLocales = {} as (
      definitions: DefItemArrayLike,
      locale: string[],
      options?: RemoveLocaleOptions,
    ) => DefItem[] | Promise<DefItem[]>;

    clearLocale = {} as (
      definitions: DefItemArrayLike,
      locale: string,
      options?: ClearLocaleOptions,
    ) => DefItem[] | Promise<DefItem[]>;

    clearLocales = {} as (
      definitions: DefItemArrayLike,
      locale: string[],
      options?: ClearLocaleOptions,
    ) => DefItem[] | Promise<DefItem[]>;

    statsAgainst = {} as (
      definitions: DefItemArrayLike,
      options?: StatsOptions,
    ) => UsageLoader<I18nUtil, ReturnType<I18nUtil['stats']>>;

    schema = {} as (
      items: AI_Item.ItemArrayLike,
      options?: SchemaOptions,
    ) => any;

    validate = {} as (
      items: AI_Item.ItemArrayLike,
      schema: ValidateOptions,
      options?: AnyObj,
    ) => void;

    validateAgainst = {} as (
      items: AI_Item.ItemArrayLike,
      options?: ValidateAgainstOptions,
    ) =>
      | DefinitionLoader<I18nUtil, ReturnType<I18nUtil['validate']>>
      | UsageLoader<I18nUtil, ReturnType<I18nUtil['validate']>>;

    usageAnalyzeAgainst = {} as (
      definitions: DefItemArrayLike,
      options?: UsageAnalyzeOptions,
    ) => UsageLoader<I18nUtil, ReturnType<I18nUtil['usageAnalyze']>>;

    usageValidateAgainst = {} as (
      definitions: DefItemArrayLike,
      options?: UsageValidateOptions,
    ) => UsageLoader<I18nUtil, ReturnType<I18nUtil['usageValidate']>>;
  }

  applyMixins(I18nUtil, [Base, ItemProcessor]);

  // Interface is used for merging mixin types
  export interface LoadedI18nUtil extends LoadedBase, LoadedItemProcessor {}

  /**
   * Variant of I18nUtil that stores the definitions it works with.
   */
  export abstract class LoadedI18nUtil implements AI_I18nUtil.LoadedI18nUtil {
    i18nUtil = {} as I18nUtil;

    definitions = {} as (
      options?: DefinitionOptions,
    ) => ReturnType<I18nUtil['definitions']>;

    usage = {} as (
      paths: string[],
      options?: UsageOptions,
    ) => ReturnType<I18nUtil['usage']>;

    write = {} as (options?: WriteOptions) => ReturnType<I18nUtil['write']>;

    patch = {} as (
      options?: PatchOptions<DefItem>,
    ) => ReturnType<I18nUtil['patch']>;

    patchTo = {} as (
      options?: PatchOptions<DefItem>,
    ) => ReturnType<I18nUtil['patchTo']>;

    drop = {} as (options?: DropOptions) => ReturnType<I18nUtil['drop']>;

    dropFrom = {} as (
      options?: DropOptions,
    ) => ReturnType<I18nUtil['dropFrom']>;

    addLocale = {} as (
      locale: string,
      options?: AddLocaleOptions<DefItem>,
    ) => ReturnType<I18nUtil['addLocale']>;

    addLocales = {} as (
      locale: string[],
      options?: AddLocaleOptions<DefItem>,
    ) => ReturnType<I18nUtil['addLocales']>;

    removeLocale = {} as (
      locale: string,
      options?: RemoveLocaleOptions,
    ) => ReturnType<I18nUtil['removeLocale']>;

    removeLocales = {} as (
      locale: string[],
      options?: RemoveLocaleOptions,
    ) => ReturnType<I18nUtil['removeLocales']>;

    clearLocale = {} as (
      locale: string,
      options?: ClearLocaleOptions,
    ) => ReturnType<I18nUtil['clearLocale']>;

    clearLocales = {} as (
      locale: string[],
      options?: ClearLocaleOptions,
    ) => ReturnType<I18nUtil['clearLocales']>;

    schema = {} as (options?: SchemaOptions) => any;

    statsAgainst = {} as (
      options?: StatsOptions,
    ) => ReturnType<I18nUtil['statsAgainst']>;

    validate = {} as (
      schema: AnyObj,
      options?: ValidateOptions,
    ) => ReturnType<I18nUtil['validate']>;

    validateAgainst = {} as (
      options?: ValidateAgainstOptions,
    ) => ReturnType<I18nUtil['validateAgainst']>;

    usageAnalyzeAgainst = {} as (
      options?: UsageAnalyzeOptions,
    ) => ReturnType<I18nUtil['usageAnalyzeAgainst']>;

    usageValidateAgainst = {} as (
      options?: UsageValidateOptions,
    ) => ReturnType<I18nUtil['usageValidateAgainst']>;
  }

  applyMixins(LoadedI18nUtil, [LoadedBase, LoadedItemProcessor]);

  export abstract class Loader<
    T extends Base = Base,
    R extends any = any,
    I extends I_Item.Item = I_Item.Item
  > implements AI_I18nUtil.Loader<T, R> {
    i18nUtil = {} as T;

    callback = {} as (...args: any[]) => R | Promise<UnwrapPromise<R>>;

    loadFromFiles = {} as (
      paths: any[],
      options?: any,
    ) => R | Promise<UnwrapPromise<R>>;

    loadFromItems = {} as (items: any[]) => R | Promise<UnwrapPromise<R>>;

    loadFromObjects = {} as (
      objects: AnyObj[],
      options?: I_Item.FromObjectOptions<I>,
    ) => R | Promise<UnwrapPromise<R>>;
  }

  export abstract class DefinitionLoader<
    T extends Base = Base,
    R extends any = any
  > extends Loader<T, R, DefItem>
    implements AI_I18nUtil.DefinitionLoader<T, R> {
    loadFromFiles = {} as (
      paths: any[],
      options?: DefinitionOptions,
    ) => R | Promise<UnwrapPromise<R>>;

    loadFromItems = {} as (
      definitions: DefItemArrayLike,
    ) => R | Promise<UnwrapPromise<R>>;

    loadFromObjects = {} as (
      objects: AnyObj[],
      options?: I_Item.FromObjectOptions<DefItem>,
    ) => R | Promise<UnwrapPromise<R>>;
  }

  export abstract class UsageLoader<T extends Base = Base, R extends any = any>
    extends Loader<T, R, UseItem>
    implements AI_I18nUtil.UsageLoader<T, R> {
    loadFromFiles = {} as (
      paths: any[],
      options?: UsageOptions,
    ) => R | Promise<UnwrapPromise<R>>;

    loadFromItems = {} as (
      usage: UseItemArrayLike,
    ) => R | Promise<UnwrapPromise<R>>;

    loadFromObjects = {} as (
      objects: AnyObj[],
      options?: I_Item.FromObjectOptions<UseItem>,
    ) => R | Promise<UnwrapPromise<R>>;
  }

  export abstract class KeyStatsEntry implements AI_I18nUtil.KeyStatsEntry {
    path = [] as string[];
    usage = [] as UseItem[];
    usageDefined = [] as UseItem[];
    usageUndefined = [] as UseItem[];
    usageMissing = [] as UseItem[];
    usageFiles = [] as string[];
    definitions = [] as DefItem[];
    definitionsUsed = [] as DefItem[];
    definitionsUnused = [] as DefItem[];
    definitionsMissing = [] as DefItem[];
    definitionsDuplicates = {} as Map<string, DefItem[]>;

    definitionsFiles = [] as string[];
    locales = [] as string[];
    localesMissing = [] as string[];
    localesUsed = [] as string[];
    hasIssues = {} as boolean;
    isDefined = {} as boolean;
    isMissingDefinitions = {} as boolean;
    hasUnusedDefinitions = {} as boolean;
    hasDuplicateDefinitions = {} as boolean;
    isUsed = {} as boolean;
    isMissingUsage = {} as boolean;
    hasUndefinedUsage = {} as boolean;
  }

  export abstract class KeyStats implements AI_I18nUtil.KeyStats {
    locales = [] as string[];
    usage = [] as UseItem[];
    definitions = [] as DefItem[];
    keys = [] as KeyStatsEntry[];
    keysUnused = [] as KeyStatsEntry[];
    keysUndefined = [] as KeyStatsEntry[];
    keysIssues = [] as KeyStatsEntry[];
    usageDefined = [] as UseItem[];
    usageUndefined = [] as UseItem[];
    usageMissing = [] as UseItem[];
    usageFiles = [] as string[];
    definitionsUsed = [] as DefItem[];
    definitionsUnused = [] as DefItem[];
    definitionsMissing = [] as DefItem[];
    definitionsFiles = [] as string[];
  }

  export namespace AdaptorCollection {
    export interface ItemMethods
      extends Omit<
        IBaseAdaptorCollection.ItemMethods,
        'parser' | 'writer' | 'usageAnalyzer' | 'remover'
      > {
      parser?: Parser;
      writer?: Writer;
      remover?: Remover;
      usageAnalyzer?: UsageAnalyzer;
    }

    /**
     * Item properties modified in IAdaptorCollection relative to ICollection
     */
    export interface ItemBase
      extends Omit<IBaseAdaptorCollection.ItemBase, 'methods'> {
      methods: ItemMethods;
    }

    /**
     * Interface of a single entry containing methods for interacting with
     * specific file type.
     */
    export type Item = ItemBase & IBaseAdaptorCollection.Item;

    /**
     * Extension of AdaptorItem which also contains name property
     */
    export interface NamedItem extends Item {
      name: AICollection.Name;
    }

    /**
     * Mapping of name to IOCollectionItem
     */
    export type ItemMap = Map<AICollection.Name, Item>;

    /**
     * Item format passed to AdaptorCollection constructor that will be
     * translated to AdaptorItem object
     */
    interface Arg extends IBaseAdaptorCollection.Arg {
      methods: ItemMethods;
    }

    /**
     * Constructor options object
     */
    export interface CtorOptions extends IBaseAdaptorCollection.CtorOptions {
      collection?:
        | { [key in AICollection.Name]: Arg }
        | Map<AICollection.Name, Arg>;
    }

    export interface SetOptions extends IBaseAdaptorCollection.SetOptions {
      methods: ItemMethods;
    }

    export interface Collection extends IBaseAdaptorCollection.Collection {
      get: (name: AICollection.Name) => Item | undefined;
      add: (options: SetOptions) => void;
      resolve: (query: string) => NamedItem | undefined;
      groupByResolve: (
        queries: any[],
        iteratee?: (arg: any) => string,
      ) => Map<NamedItem | undefined, any[]>;
    }
  }
}
