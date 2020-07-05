/**
 * Abstract types for I18nUtil.
 *
 * These types have limited resolution and do not include any types that could
 * cause circular reference.
 *
 * These types should be used by interfaces of other components to avoid
 * circular imports.
 */

import { applyMixins } from '../util/apply-mixins';
import { UnwrapPromise } from '../../types';

export namespace AI_I18nUtil {
  abstract class BaseCommon {
    adaptors = {} as {
      add: (...args: any[]) => any | void;
      delete: (name: string) => any | void;
    };

    pathResolver = {} as {
      resolve: (paths: any[], ...args: any[]) => any[] | Promise<any[]>;
    };

    localeResolver = {} as {
      resolve: (
        locales: any[],
        items: { locale: any }[],
        ...args: any[]
      ) => any[] | Promise<any[]>;
    };

    keyResolver = {} as {
      resolve: (
        keys: any[],
        items: { path: any }[],
        ...args: any[]
      ) => any[] | Promise<any[]>;
    };

    valueResolver = {} as {
      resolve: (
        values: any[],
        items: { value: any }[],
        ...args: any[]
      ) => any[] | Promise<any[]>;
    };

    schemator = {} as { generate: (...args: any[]) => any | Promise<any> };

    validator = {} as { validate: (...args: any[]) => any | Promise<any> };

    options: any;

    addAdaptor = {} as (params: any) => any | void;

    addAdaptors = {} as (paramsList: any[]) => any | void;

    removeAdaptor = {} as (name: any) => any | void;

    removeAdaptors = {} as (names: any[]) => any | void;

    resolvePaths = {} as (
      paths: any[],
      options?: any,
    ) => any[] | Promise<any[]>;
  }

  /**
   * Base class with base functionalities shared among the I18nUtil classes
   */
  export abstract class Base extends BaseCommon {
    resolveLocales = {} as (
      items: any[],
      locales: any[],
      options?: any,
    ) => any[] | Promise<any[]>;

    resolveKeys = {} as (
      items: any[],
      keys: any[],
      options?: any,
    ) => any[] | Promise<any[]>;

    resolveValues = {} as (
      items: any[],
      keys: any[],
      options?: any,
    ) => any[] | Promise<any[]>;
  }

  export abstract class LoadedBase<T extends Base = Base> extends BaseCommon {
    i18nUtil = {} as T;
    loaded: any;

    resolveLocales = {} as (
      locales: any[],
      options?: any,
    ) => ReturnType<Base['resolveLocales']>;

    resolveKeys = {} as (
      keys: any[],
      options?: any,
    ) => ReturnType<Base['resolveKeys']>;

    resolveValues = {} as (
      keys: any[],
      options?: any,
    ) => ReturnType<Base['resolveValues']>;
  }

  /**
   * Type base for the I18nUtilItemProcessor abstract classes
   */
  interface ItemProcessorBase {
    master: (...args: any[]) => any;
    locale: (...args: any[]) => any;
    locales: (...args: any[]) => any;
    toObject: (...args: any[]) => any;
    missingItems: (...args: any[]) => any[];
    missingLocales: (...args: any[]) => string[];
    usageAnalyze: (
      ...args: any[]
    ) =>
      | {
          usage: { defined: any[]; undefined: any[]; missing: any[] };
          definitions: {
            used: any[];
            unused: any[];
            missing: any[];
            duplicates: Map<string, Map<string, any[]>>;
          };
        }
      | Promise<{
          usage: { defined: any[]; undefined: any[]; missing: any[] };
          definitions: {
            used: any[];
            unused: any[];
            missing: any[];
            duplicates: Map<string, Map<string, any[]>>;
          };
        }>;
    usageValidate: (...args: any[]) => void;
  }

  /**
   * I18nUtil class with functionalities for working with definition and usage
   * items in the context of I18nUtil
   */
  export abstract class ItemProcessor extends Base
    implements ItemProcessorBase {
    master = {} as (definitions: any[], options?: any) => any;

    locale = {} as (
      definitions: any[],
      locale: any,
      options?: any,
    ) => any | Promise<any>;

    locales = {} as (
      definitions: any[],
      locales: any[],
      options?: any,
    ) => any | Promise<any>;

    toObject = {} as (definitions: any[], options?: any) => any;

    missingItems = {} as (definitions: any[], options?: any) => any[];

    missingLocales = {} as (definitions: any[], options?: any) => string[];

    stats = {} as (definitions: any[], usage: any[], options?: any) => KeyStats;

    usageAnalyze = {} as (
      definitions: any[],
      usage: any[],
      options?: any,
    ) => ReturnType<ItemProcessorBase['usageAnalyze']>;

    usageValidate = {} as (
      definitions: any[],
      usage: any[],
      options?: any,
    ) => void;
  }

  /**
   * Variant of I18nUtilItemProcessor that stores the definitions it works
   * with.
   */
  export abstract class LoadedItemProcessor<
    T extends ItemProcessor = ItemProcessor
  > extends LoadedBase<T> implements ItemProcessorBase {
    i18nUtil = {} as T;

    master = {} as (options?: any) => ReturnType<ItemProcessor['master']>;

    locale = {} as (
      locale: any,
      options?: any,
    ) => ReturnType<ItemProcessor['locale']>;

    locales = {} as (
      locales: any[],
      options?: any,
    ) => ReturnType<ItemProcessor['locales']>;

    toObject = {} as (options?: any) => ReturnType<ItemProcessor['toObject']>;

    missingItems = {} as (
      options?: any,
    ) => ReturnType<ItemProcessor['missingItems']>;

    missingLocales = {} as (
      options?: any,
    ) => ReturnType<ItemProcessor['missingLocales']>;

    stats = {} as (
      usage: any[],
      options?: any,
    ) => ReturnType<ItemProcessor['stats']>;

    usageAnalyze = {} as (
      usage: any[],
      options?: any,
    ) => ReturnType<ItemProcessor['usageAnalyze']>;

    usageValidate = {} as (
      usage: any[],
      options?: any,
    ) => ReturnType<ItemProcessor['usageValidate']>;
  }

  // Interface is used for merging mixin types
  export interface I18nUtil extends Base, ItemProcessor {}

  /**
   * Main class for working with definitions and the files where these items
   * are defined.
   */
  export abstract class I18nUtil {
    definitions = {} as (paths: any[], options?: any) => any[] | Promise<any[]>;

    write = {} as (
      definitions: any[],
      options?: any,
    ) => any | void | Promise<any | void>;

    patch = {} as (
      definitions: any[],
      options?: any,
    ) => any | void | Promise<any | void>;

    patchTo = {} as (
      definitions: any[],
      options?: any,
    ) => DefinitionLoader<I18nUtil, ReturnType<I18nUtil['patch']>>;

    drop = {} as (
      definitions: any[],
      options?: any,
    ) => any | void | Promise<any | void>;

    dropFrom = {} as (
      definitions: any[],
      options?: any,
    ) => DefinitionLoader<I18nUtil, ReturnType<I18nUtil['drop']>>;

    addLocale = {} as (
      definitions: any[],
      locale: any,
      options?: any,
    ) => any[] | Promise<any[]>;

    addLocales = {} as (
      definitions: any[],
      locale: any[],
      options?: any,
    ) => any[] | Promise<any[]>;

    removeLocale = {} as (
      definitions: any[],
      locale: any,
      options?: any,
    ) => any[] | Promise<any[]>;

    removeLocales = {} as (
      definitions: any[],
      locale: any[],
      options?: any,
    ) => any[] | Promise<any[]>;

    clearLocale = {} as (
      definitions: any[],
      locale: any,
      options?: any,
    ) => any[] | Promise<any[]>;

    clearLocales = {} as (
      definitions: any[],
      locale: any[],
      options?: any,
    ) => any[] | Promise<any[]>;

    usage = {} as (paths: string[], options?: any) => any[] | Promise<any[]>;

    schema = {} as (items: any[], options?: any) => any | Promise<any>;

    statsAgainst = {} as (
      definitions: any[],
      options?: any,
    ) => UsageLoader<I18nUtil, ReturnType<I18nUtil['stats']>>;

    validate = {} as (
      definitions: any[],
      schema: any,
      options?: any,
    ) => any | void | Promise<any | void>;

    validateAgainst = {} as (
      definitions: any[],
      options?: any,
    ) => DefinitionLoader<I18nUtil, ReturnType<I18nUtil['validate']>>;

    usageAnalyzeAgainst = {} as (
      definitions: any[],
      options?: any,
    ) => UsageLoader<I18nUtil, ReturnType<I18nUtil['usageAnalyze']>>;

    usageValidateAgainst = {} as (
      definitions: any[],
      options?: any,
    ) => UsageLoader<I18nUtil, ReturnType<I18nUtil['usageValidate']>>;
  }

  applyMixins(I18nUtil, [Base, ItemProcessor]);

  // Interface is used for merging mixin types
  export interface LoadedI18nUtil<T extends I18nUtil = I18nUtil>
    extends LoadedBase<T>,
      LoadedItemProcessor<T> {}

  /**
   * Variant of I18nUtil that stores the definitions it works with.
   */
  export abstract class LoadedI18nUtil<
    T extends I18nUtil = I18nUtil
  > extends LoadedBase<T> {
    i18nUtil = {} as T;

    definitions = {} as (options?: any) => ReturnType<I18nUtil['definitions']>;

    usage = {} as (
      paths: string[],
      options?: any,
    ) => ReturnType<I18nUtil['usage']>;

    write = {} as (options?: any) => ReturnType<I18nUtil['write']>;

    patch = {} as (options?: any) => ReturnType<I18nUtil['patch']>;

    patchTo = {} as (options?: any) => ReturnType<I18nUtil['patchTo']>;

    drop = {} as (options?: any) => ReturnType<I18nUtil['drop']>;

    dropFrom = {} as (options?: any) => ReturnType<I18nUtil['dropFrom']>;

    addLocale = {} as (
      locale: any,
      options?: any,
    ) => ReturnType<I18nUtil['addLocale']>;

    addLocales = {} as (
      locale: any[],
      options?: any,
    ) => ReturnType<I18nUtil['addLocale']>;

    removeLocale = {} as (
      locale: any,
      options?: any,
    ) => ReturnType<I18nUtil['removeLocale']>;

    removeLocales = {} as (
      locale: any[],
      options?: any,
    ) => ReturnType<I18nUtil['removeLocales']>;

    clearLocale = {} as (
      locale: any,
      options?: any,
    ) => ReturnType<I18nUtil['clearLocale']>;

    clearLocales = {} as (
      locale: any[],
      options?: any,
    ) => ReturnType<I18nUtil['clearLocales']>;

    statsAgainst = {} as (
      options?: any,
    ) => ReturnType<I18nUtil['statsAgainst']>;

    schema = {} as (options?: any) => ReturnType<I18nUtil['schema']>;

    validate = {} as (
      schema: any,
      options?: any,
    ) => ReturnType<I18nUtil['validate']>;

    validateAgainst = {} as (
      options?: any,
    ) => ReturnType<I18nUtil['validateAgainst']>;

    usageAnalyzeAgainst = {} as (
      options?: any,
    ) => ReturnType<I18nUtil['usageAnalyzeAgainst']>;

    usageValidateAgainst = {} as (
      options?: any,
    ) => ReturnType<I18nUtil['usageValidateAgainst']>;
  }

  applyMixins(LoadedI18nUtil, [LoadedBase, LoadedItemProcessor]);

  export abstract class Loader<T extends Base = Base, R extends any = any> {
    i18nUtil = {} as T;

    callback = {} as (...args: any[]) => R | Promise<UnwrapPromise<R>>;

    loadFromFiles = {} as (
      paths: any[],
      options?: any,
    ) => R | Promise<UnwrapPromise<R>>;

    loadFromItems = {} as (definitions: any[]) => R | Promise<UnwrapPromise<R>>;

    loadFromObjects = {} as (
      objects: any[],
      options?: any,
    ) => R | Promise<UnwrapPromise<R>>;
  }

  export abstract class DefinitionLoader<
    T extends Base = Base,
    R extends any = any
  > extends Loader<T, R> {}

  export abstract class UsageLoader<
    T extends Base = Base,
    R extends any = any
  > extends Loader<T, R> {}

  export abstract class KeyStatsEntry {
    path = [] as string[];
    usage = [] as any[];
    usageDefined = [] as any[];
    usageUndefined = [] as any[];
    usageMissing = [] as any[];
    usageFiles = [] as string[];
    definitions = [] as any[];
    definitionsUsed = [] as any[];
    definitionsUnused = [] as any[];
    definitionsMissing = [] as any[];
    definitionsFiles = [] as string[];
    locales = [] as string[];
    localesMissing = [] as string[];
    hasIssues = {} as boolean;
    isDefined = {} as boolean;
    isMissingDefinitions = {} as boolean;
    hasUnusedDefinitions = {} as boolean;
    isUsed = {} as boolean;
    isMissingUsage = {} as boolean;
    hasUndefinedUsage = {} as boolean;
  }

  export abstract class KeyStats {
    locales = [] as string[];
    usage = [] as any[];
    definitions = [] as any[];
    keys = [] as KeyStatsEntry[];
    keysUnused = [] as KeyStatsEntry[];
    keysUndefined = [] as KeyStatsEntry[];
    keysIssues = [] as KeyStatsEntry[];
    usageDefined = [] as any[];
    usageUndefined = [] as any[];
    usageMissing = [] as any[];
    usageFiles = [] as string[];
    definitionsUsed = [] as any[];
    definitionsUnused = [] as any[];
    definitionsMissing = [] as any[];
    definitionsFiles = [] as string[];
  }
}
