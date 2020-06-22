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

export namespace AI_I18nUtil {
  /**
   * Base class with base functionalities shared among the I18nUtil classes
   */
  export abstract class Base {
    adaptors = {} as {
      add: (...args: any[]) => any | void;
      delete: (name: string) => any | void;
    };
    pathResolver = {} as { resolve: (paths: any[], ...args: any[]) => any[] };
    localeResolver = {} as {
      resolve: (
        locales: any[],
        items: { locale: any }[],
        ...args: any[]
      ) => any[];
    };
    keyResolver = {} as {
      resolve: (keys: any[], items: { path: any }[], ...args: any[]) => any[];
    };
    valueResolver = {} as {
      resolve: (
        values: any[],
        items: { value: any }[],
        ...args: any[]
      ) => any[];
    };
    schemator = {} as { generate: (...args: any[]) => any };
    validator = {} as { validate: (...args: any[]) => any };
    options: any;

    addAdaptor(params: any) {
      return undefined as any | void;
    }

    addAdaptors(paramsList: any[]) {
      return undefined as any | void;
    }

    removeAdaptor(name: any) {
      return undefined as any | void;
    }

    removeAdaptors(names: any[]) {
      return undefined as any | void;
    }

    resolvePaths(paths: any[], options?: any) {
      return [] as any[];
    }

    resolveLocales(items: { locale: any }[], locales: any[], options?: any) {
      return [] as any[];
    }

    resolveKeys(items: { path: any }[], keys: any[], options?: any) {
      return [] as any[];
    }

    resolveValues(items: { value: any }[], keys: any[], options?: any) {
      return [] as any[];
    }
  }

  export abstract class LoadedBase<T extends Base = Base> extends Base {
    i18nUtil = {} as T;
    loaded: any;

    resolveLocales(locales: any[], options?: any) {
      return [] as ReturnType<Base['resolveLocales']>;
    }

    resolveKeys(keys: any[], options?: any) {
      return [] as ReturnType<Base['resolveKeys']>;
    }

    resolveValues(keys: any[], options?: any) {
      return [] as ReturnType<Base['resolveValues']>;
    }
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
    ) => {
      usage: { defined: any[]; undefined: any[]; missing: any[] };
      definitions: {
        used: any[];
        unused: any[];
        missing: any[];
        duplicates: Map<string, Map<string, any[]>>;
      };
    };
    usageValidate: (...args: any[]) => void;
  }

  /**
   * I18nUtil class with functionalities for working with definition and usage
   * items in the context of I18nUtil
   */
  export abstract class ItemProcessor extends Base
    implements ItemProcessorBase {
    master(definitions: any[], options?: any) {
      return undefined as any;
    }

    locale(definitions: any[], locale: any, options?: any) {
      return undefined as any;
    }

    locales(definitions: any[], locales: any[], options?: any) {
      return undefined as any;
    }

    toObject(definitions: any[], options?: any) {
      return undefined as any;
    }

    missingItems(definitions: any[], options?: any) {
      return [] as any[];
    }

    missingLocales(definitions: any[], options?: any) {
      return [] as string[];
    }

    stats(definitions: any[], usage: any[], options?: any) {
      return {} as KeyStats;
    }

    usageAnalyze(definitions: any[], usage: any[], options?: any) {
      return {} as {
        usage: { defined: any[]; undefined: any[]; missing: any[] };
        definitions: {
          used: any[];
          unused: any[];
          missing: any[];
          duplicates: Map<string, Map<string, any[]>>;
        };
      };
    }

    usageValidate(definitions: any[], usage: any[], options?: any) {
      return undefined as void;
    }
  }

  /**
   * Variant of I18nUtilItemProcessor that stores the definitions it works
   * with.
   */
  export abstract class LoadedItemProcessor<
    T extends ItemProcessor = ItemProcessor
  > extends LoadedBase<T> implements ItemProcessorBase {
    i18nUtil = {} as T;

    master(options?: any) {
      return undefined as ReturnType<ItemProcessor['master']>;
    }

    locale(locale: any, options?: any) {
      return undefined as ReturnType<ItemProcessor['locale']>;
    }

    locales(locales: any[], options?: any) {
      return undefined as ReturnType<ItemProcessor['locales']>;
    }

    toObject(options?: any) {
      return undefined as ReturnType<ItemProcessor['toObject']>;
    }

    missingItems(options?: any) {
      return [] as ReturnType<ItemProcessor['missingItems']>;
    }

    missingLocales(options?: any) {
      return [] as ReturnType<ItemProcessor['missingLocales']>;
    }

    stats(usage: any[], options?: any) {
      return {} as ReturnType<ItemProcessor['stats']>;
    }

    usageAnalyze(usage: any[], options?: any) {
      return {} as ReturnType<ItemProcessor['usageAnalyze']>;
    }

    usageValidate(usage: any[], options?: any) {
      return undefined as ReturnType<ItemProcessor['usageValidate']>;
    }
  }

  // Interface is used for merging mixin types
  export interface I18nUtil extends Base, ItemProcessor {}
  /**
   * Main class for working with definitions and the files where these items
   * are defined.
   */
  export abstract class I18nUtil {
    definitions(paths: any[], options?: any) {
      return [] as any[];
    }

    write(definitions: any[], options?: any) {
      return undefined as any | void;
    }

    patch(definitions: any[], options?: any) {
      return undefined as any | void;
    }

    patchTo(definitions: any[], options?: any) {
      return {} as DefinitionLoader<I18nUtil, ReturnType<I18nUtil['patch']>>;
    }

    drop(definitions: any[], options?: any) {
      return undefined as any | void;
    }

    dropFrom(definitions: any[], options?: any) {
      return {} as DefinitionLoader<I18nUtil, ReturnType<I18nUtil['drop']>>;
    }

    addLocale(definitions: any[], locale: any, options?: any) {
      return [] as any[];
    }

    addLocales(definitions: any[], locale: any[], options?: any) {
      return [] as any[];
    }

    removeLocale(definitions: any[], locale: any, options?: any) {
      return [] as any[];
    }

    removeLocales(definitions: any[], locale: any[], options?: any) {
      return [] as any[];
    }

    clearLocale(definitions: any[], locale: any, options?: any) {
      return [] as any[];
    }

    clearLocales(definitions: any[], locale: any[], options?: any) {
      return [] as any[];
    }

    usage(paths: string[], options?: any) {
      return [] as any[];
    }

    schema(items: any[], options?: any) {
      return undefined as any;
    }

    statsAgainst(definitions: any[], options?: any) {
      return {} as UsageLoader<I18nUtil, ReturnType<I18nUtil['stats']>>;
    }

    validate(definitions: any[], schema: any, options?: any) {
      return undefined as any | void;
    }

    validateAgainst(definitions: any[], options?: any) {
      return {} as DefinitionLoader<I18nUtil, ReturnType<I18nUtil['validate']>>;
    }

    usageAnalyzeAgainst(definitions: any[], options?: any) {
      return {} as UsageLoader<I18nUtil, ReturnType<I18nUtil['usageAnalyze']>>;
    }

    usageValidateAgainst(definitions: any[], options?: any) {
      return {} as UsageLoader<I18nUtil, ReturnType<I18nUtil['usageValidate']>>;
    }
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

    definitions(options?: any) {
      return [] as ReturnType<I18nUtil['definitions']>;
    }

    usage(paths: string[], options?: any) {
      return [] as ReturnType<I18nUtil['usage']>;
    }

    write(options?: any) {
      return undefined as ReturnType<I18nUtil['write']>;
    }

    patch(options?: any) {
      return undefined as ReturnType<I18nUtil['patch']>;
    }

    patchTo(options?: any) {
      return {} as ReturnType<I18nUtil['patchTo']>;
    }

    drop(options?: any) {
      return undefined as ReturnType<I18nUtil['drop']>;
    }

    dropFrom(options?: any) {
      return {} as ReturnType<I18nUtil['dropFrom']>;
    }

    addLocale(locale: any, options?: any) {
      return [] as ReturnType<I18nUtil['addLocale']>;
    }

    addLocales(locale: any[], options?: any) {
      return [] as ReturnType<I18nUtil['addLocale']>;
    }

    removeLocale(locale: any, options?: any) {
      return [] as ReturnType<I18nUtil['removeLocale']>;
    }

    removeLocales(locale: any[], options?: any) {
      return [] as ReturnType<I18nUtil['removeLocales']>;
    }

    clearLocale(locale: any, options?: any) {
      return [] as ReturnType<I18nUtil['clearLocale']>;
    }

    clearLocales(locale: any[], options?: any) {
      return [] as ReturnType<I18nUtil['clearLocales']>;
    }

    statsAgainst(options?: any) {
      return {} as ReturnType<I18nUtil['statsAgainst']>;
    }

    schema(options?: any) {
      return undefined as ReturnType<I18nUtil['schema']>;
    }

    validate(schema: any, options?: any) {
      return undefined as ReturnType<I18nUtil['validate']>;
    }

    validateAgainst(options?: any) {
      return {} as ReturnType<I18nUtil['validateAgainst']>;
    }

    usageAnalyzeAgainst(options?: any) {
      return {} as ReturnType<I18nUtil['usageAnalyzeAgainst']>;
    }

    usageValidateAgainst(options?: any) {
      return {} as ReturnType<I18nUtil['usageValidateAgainst']>;
    }
  }
  applyMixins(LoadedI18nUtil, [LoadedBase, LoadedItemProcessor]);

  export abstract class Loader<T extends Base = Base, R extends any = any> {
    i18nUtil = {} as T;
    callback = {} as (...args: any[]) => R;

    loadFromFiles(paths: any[], options?: any) {
      return {} as R;
    }

    loadFromItems(definitions: any[]) {
      return {} as R;
    }

    loadFromObjects(objects: any[], options?: any) {
      return {} as R;
    }
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
