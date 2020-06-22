import merge from 'lodash.merge';
import flatten from 'lodash.flatten';
import groupBy from 'lodash.groupby';
import uniq from 'lodash.uniq';

import type { AnyObj } from '../../types';
import type { I_I18nUtil } from './types';
import type { IDefinition } from '../definition/types';
import type { IUsage } from '../usage/types';
import type { I_Item } from '../item/types';
import { DefinitionItem, DefinitionArray } from '../definition';
import { ItemArray } from '../item';
import { UsageItem } from '../usage';
import { applyStaticMixins } from '../util/apply-mixins';
import { debug } from '../util/debug';
import { Base, LoadedBase } from './base';
import { mapUniq, uniqMap } from '../util/array';
import differenceBy from 'lodash.differenceby';

type DefItem = IDefinition.Item;
type DefItemArrayLike = IDefinition.ItemArrayLike;
type UseItem = IUsage.Item;
type UseItemArrayLike = IUsage.ItemArrayLike;

/**
 * Mixin class of the ItemProcessor classes implementing static methods common
 * to all classes.
 */
export class ItemProcessorMixin {
  static master(
    items: I_Item.ItemArrayLike,
    options: I_I18nUtil.MasterOptions = {},
  ) {
    const itemArr = new ItemArray(items);
    const locales = itemArr.uniqProp('locale');
    return this.locales(itemArr, locales, options);
  }

  static locale(
    items: I_Item.ItemArrayLike,
    locale: string,
    options: I_I18nUtil.LocaleOptions = {},
  ) {
    return this.locales(items, [locale], options);
  }

  static locales(
    items: I_Item.ItemArrayLike,
    locales: string[],
    options: I_I18nUtil.LocaleOptions = {},
  ) {
    const defs = DefinitionArray.itemsByLocales(
      items as DefItem[],
      locales,
      options,
    );
    return defs.items;
  }

  static toObject<O extends I_I18nUtil.ToObjectOptions>(
    items: I_Item.ItemArrayLike,
    options: O = {} as O,
  ): I_Item.ToObjectResult<O['simple'], O['merge']> {
    return DefinitionArray.toObject(items, {
      ...options,
      throwOnDuplicate: true,
    });
  }

  static missingItems(
    definitions: DefItemArrayLike,
    options: I_I18nUtil.MissingItemsOptions = {},
  ) {
    const entries = options.locales
      ? this.locales(definitions as I_Item.ItemArrayLike, options.locales, {
          ...options,
          includeMissing: true,
        })
      : this.master(definitions as I_Item.ItemArrayLike, {
          ...options,
          includeMissing: true,
        });
    return DefinitionArray.filterMissing(entries, options).items;
  }

  static missingLocales(
    definitions: DefItemArrayLike,
    options: I_I18nUtil.MissingLocalesOptions = {},
  ) {
    const missingItems = this.missingItems(definitions, options);
    return DefinitionArray.uniqProp(missingItems, 'locale');
  }

  static usageAnalyze(
    definitions: DefItemArrayLike,
    usage: UseItemArrayLike,
    options: I_I18nUtil.UsageAnalyzeOptions = {},
  ) {
    const { includeMissing, missingValue, locales } = merge(
      {},
      DefinitionArray.defaults,
      options,
    );

    const usageItems = new ItemArray(usage);

    const definitionItems = includeMissing
      ? new DefinitionArray(definitions)
      : DefinitionArray.filterMissing(definitions, {
          missingValue,
          mode: 'exclude',
        });

    const allLocales = locales ?? definitionItems.uniqProp('locale');

    /**
     * Usage of translation keys / paths that ARE USED in the code, and
     * ARE DEFINED in the i18n files.
     */
    const definedUsage = usageItems.intersection(definitionItems.items, {
      hashType: 'path',
    }).items;

    /**
     * Usage of translation keys / paths that ARE USED in the code, but
     * ARE NOT DEFINED in the i18n files.
     */
    const undefinedUsage = usageItems.difference(definitionItems.items, {
      hashType: 'path',
    }).items;

    /**
     * Definitions of translation keys / paths that ARE DEFINED in the i18n
     * files, and ARE USED in the code.
     */
    const usedDefinitions = definitionItems.intersection(usageItems.items, {
      hashType: 'path',
    }).items;

    /**
     * Definitions of translation keys / paths that ARE DEFINED in the i18n
     * files, but ARE NOT USED in the code.
     */
    const unusedDefinitions = definitionItems.difference(usageItems.items, {
      hashType: 'path',
    }).items;

    /**
     * Usage of translation keys / paths that ARE NOT USED in the code,
     * but ARE DEFINED in the i18n files.
     */
    const missingUsage = uniqMap(
      unusedDefinitions,
      (item) => item.pathHash,
      (item) => new UsageItem({ path: item.path }),
    );

    /**
     * Definitions of translation keys / paths that ARE USED in the code,
     * but ARE NOT DEFINED in the i18n files.
     */
    const missingDefinitions = flatten([
      // All locale variants of items that are used in code but not defined
      ...allLocales.map((locale) =>
        uniqMap(
          undefinedUsage,
          (item) => item.pathHash,
          (item) =>
            new DefinitionItem({
              path: item.path,
              value: missingValue,
              locale,
            }),
        ),
      ),
      // Plus any missing locale variant among the existing definitions
      ...this.missingItems(definitionItems, { locales: allLocales }),
    ]);

    const duplicates = new Map() as Map<
      string,
      Map<string, IDefinition.Item[]>
    >;
    for (const dupeGroup of definitionItems.duplicates().values()) {
      const key = dupeGroup[0].path.join('.');
      const locale = dupeGroup[0].locale;
      if (!duplicates.has(key)) duplicates.set(key, new Map());
      duplicates.get(key)!.set(locale, dupeGroup);
    }

    return {
      usage: {
        defined: definedUsage,
        undefined: undefinedUsage,
        missing: missingUsage,
      },
      definitions: {
        used: usedDefinitions,
        unused: unusedDefinitions,
        missing: missingDefinitions,
        duplicates,
      },
    };
  }

  static usageValidate(
    definitions: DefItemArrayLike,
    usage: UseItemArrayLike,
    options: I_I18nUtil.UsageValidateOptions = {},
  ) {
    const res = this.usageAnalyze(definitions, usage, options);
    if (res.usage.undefined.length) {
      const itemsStr = res.usage.undefined
        .map((i) => JSON.stringify(i))
        .join('\n');
      throw Error(`Found keys used without definition:\n${itemsStr}`);
    }
    if (res.definitions.unused.length) {
      const itemsStr = res.definitions.unused
        .map((i) => JSON.stringify(i))
        .join('\n');
      throw Error(`Found unused keys:\n${itemsStr}`);
    }
    if (!res.definitions.used.length) {
      debug('No match between definitions and usage.');
    }
  }

  static stats(
    definitions: DefItemArrayLike,
    usage: UseItemArrayLike,
    options: I_I18nUtil.StatsOptions = {},
  ) {
    return new KeyStats({ ...options, definitions, usage });
  }
}

// Interface is used for merging mixin types
export interface ItemProcessor extends ItemProcessorMixin, Base {
  constructor: typeof ItemProcessorMixin;
}
/**
 * I18nUtil class with functionalities for working with definition and usage
 * items in the context of I18nUtil
 */
export class ItemProcessor extends Base implements I_I18nUtil.ItemProcessor {
  master(items: I_Item.ItemArrayLike, options: I_I18nUtil.MasterOptions = {}) {
    const optsWithDefaults = this.effectiveOptions(options);
    return this.constructor.master(items, optsWithDefaults);
  }

  locale(
    items: I_Item.ItemArrayLike,
    locale: any,
    options: I_I18nUtil.LocaleOptions = {},
  ) {
    return this.locales(items, [locale], options);
  }

  locales(
    items: I_Item.ItemArrayLike,
    locales: any[],
    options: I_I18nUtil.LocaleOptions = {},
  ) {
    const optsWithDefaults = this.effectiveOptions(options);
    const { skipResolve } = optsWithDefaults;
    const matchedLocales = skipResolve
      ? locales
      : this.resolveLocales(items, locales, optsWithDefaults);
    return this.constructor.locales(items, matchedLocales, optsWithDefaults);
  }

  toObject<O extends I_I18nUtil.ToObjectOptions>(
    items: I_Item.ItemArrayLike,
    options: O = {} as O,
  ): I_Item.ToObjectResult<O['simple'], O['merge']> {
    const optsWithDefaults = this.effectiveOptions(options);
    return this.constructor.toObject(items, optsWithDefaults);
  }

  missingItems(
    definitions: DefItemArrayLike,
    options: I_I18nUtil.MissingItemsOptions = {},
  ) {
    const optsWithDefaults = this.effectiveOptions(options);
    return this.constructor.missingItems(definitions, optsWithDefaults);
  }

  missingLocales(
    definitions: DefItemArrayLike,
    options: I_I18nUtil.MissingLocalesOptions = {},
  ) {
    const optsWithDefaults = this.effectiveOptions(options);
    return this.constructor.missingLocales(definitions, optsWithDefaults);
  }

  usageAnalyze(
    definitions: DefItemArrayLike,
    usage: UseItemArrayLike,
    options: I_I18nUtil.UsageAnalyzeOptions = {},
  ) {
    const optsWithDefaults = this.effectiveOptions(options);
    return this.constructor.usageAnalyze(definitions, usage, optsWithDefaults);
  }

  usageValidate(
    definitions: DefItemArrayLike,
    usage: UseItemArrayLike,
    options: I_I18nUtil.UsageValidateOptions = {},
  ) {
    const optsWithDefaults = this.effectiveOptions(options);
    this.constructor.usageValidate(definitions, usage, optsWithDefaults);
  }

  stats(
    definitions: DefItemArrayLike,
    usage: UseItemArrayLike,
    options: I_I18nUtil.StatsOptions = {},
  ) {
    const optsWithDefaults = this.effectiveOptions(options);
    return this.constructor.stats(definitions, usage, optsWithDefaults);
  }
}
applyStaticMixins(ItemProcessor, [ItemProcessorMixin]);

// Interface is used for merging mixin types
export interface LoadedItemProcessor extends ItemProcessorMixin, LoadedBase {
  constructor: typeof ItemProcessorMixin;
}
/**
 * Variant of I18nUtilItemProcessor that stores the definitions it works
 * with.
 */
export class LoadedItemProcessor extends LoadedBase
  implements I_I18nUtil.LoadedItemProcessor {
  i18nUtil: I_I18nUtil.ItemProcessor;

  constructor({
    i18nUtil,
    ...options
  }: I_I18nUtil.LoadedItemProcessorCtorOptions = {}) {
    super(options);
    this.i18nUtil = i18nUtil ?? new ItemProcessor(this.options);
  }

  master(options: I_I18nUtil.MasterOptions = {}) {
    return this.i18nUtil.master(this.loaded.items, options);
  }

  locale(locale: any, options: I_I18nUtil.LocaleOptions = {}) {
    return this.i18nUtil.locale(this.loaded.items, locale, options);
  }

  locales(locales: any[], options: I_I18nUtil.LocaleOptions = {}) {
    return this.i18nUtil.locales(this.loaded.items, locales, options);
  }

  toObject<O extends I_I18nUtil.ToObjectOptions>(options: O = {} as O) {
    return this.i18nUtil.toObject(
      this.loaded.items,
      options,
    ) as I_Item.ToObjectResult<O['simple'], O['merge']>;
  }

  missingItems(options: I_I18nUtil.MissingItemsOptions = {}) {
    return this.i18nUtil.missingItems(this.loaded, options);
  }

  missingLocales(options: I_I18nUtil.MissingLocalesOptions = {}) {
    return this.i18nUtil.missingLocales(this.loaded, options);
  }

  usageAnalyze(
    usage: UseItemArrayLike,
    options?: I_I18nUtil.UsageAnalyzeOptions,
  ) {
    return this.i18nUtil.usageAnalyze(this.loaded, usage, options);
  }

  usageValidate(
    usage: UseItemArrayLike,
    options?: I_I18nUtil.UsageValidateOptions,
  ) {
    return this.i18nUtil.usageValidate(this.loaded, usage, options);
  }

  stats(usage: UseItemArrayLike, options: I_I18nUtil.StatsOptions = {}) {
    const optsWithDefaults = this.effectiveOptions(options);
    return this.constructor.stats(this.loaded, usage, optsWithDefaults);
  }
}
applyStaticMixins(LoadedItemProcessor, [ItemProcessorMixin]);

export class KeyStatsEntry implements I_I18nUtil.KeyStatsEntry {
  path: string[];
  usage: UseItem[];
  usageDefined: UseItem[];
  usageUndefined: UseItem[];
  usageMissing: UseItem[];
  usageFiles: string[];
  definitions: DefItem[];
  definitionsUsed: DefItem[];
  definitionsUnused: DefItem[];
  definitionsMissing: DefItem[];
  definitionsDuplicates: Map<string, DefItem[]>;
  definitionsFiles: string[];
  locales: string[];
  localesMissing: string[];
  localesUsed: string[];

  constructor(
    options: {
      path: string[];
      usage?: UseItemArrayLike;
      definitions?: DefItemArrayLike;
    } & I_I18nUtil.UsageAnalyzeOptions,
  ) {
    const {
      path,
      usage = [],
      definitions = [],
      locales,
      ...analyzeOpts
    } = options;

    this.path = [...path];
    this.usage = [...usage];
    this.definitions = [...definitions];
    this.locales = locales
      ? [...locales]
      : ItemArray.uniqProp([...this.definitions, ...this.usage], 'locale');

    this.usageFiles = mapUniq(this.usage, (item) => item.source);
    this.definitionsFiles = mapUniq(this.definitions, (item) => item.source);

    const res = ItemProcessorMixin.usageAnalyze(this.definitions, this.usage, {
      ...analyzeOpts,
      locales: this.locales,
    });

    this.definitionsUsed = res.definitions.used || [];
    this.definitionsUnused = res.definitions.unused || [];
    this.definitionsMissing = res.definitions.missing || [];
    this.definitionsDuplicates =
      new Map(
        flatten(
          [...res.definitions.duplicates.values()].map((m) => [...m.entries()]),
        ),
      ) || new Map();
    this.usageDefined = res.usage.defined || [];
    this.usageUndefined = res.usage.undefined || [];
    this.usageMissing = res.usage.missing || [];

    this.localesMissing = mapUniq(
      this.definitionsMissing,
      (item) => item.locale,
    );
    this.localesUsed = differenceBy(this.locales, this.localesMissing);
  }

  get hasIssues() {
    return (
      !this.isDefined ||
      this.isMissingDefinitions ||
      this.hasUnusedDefinitions ||
      this.hasDuplicateDefinitions ||
      !this.isUsed ||
      this.isMissingUsage ||
      this.hasUndefinedUsage
    );
  }

  get isDefined() {
    return Boolean(this.definitions.length);
  }

  get isMissingDefinitions() {
    return Boolean(this.definitionsMissing.length);
  }

  get hasUnusedDefinitions() {
    return Boolean(this.definitionsUnused.length);
  }

  get hasDuplicateDefinitions() {
    return Boolean(this.definitionsDuplicates.size);
  }

  get isUsed() {
    return Boolean(this.usage.length);
  }

  get isMissingUsage() {
    return Boolean(this.usageMissing.length);
  }

  get hasUndefinedUsage() {
    return Boolean(this.usageUndefined.length);
  }
}

export class KeyStats implements I_I18nUtil.KeyStats {
  locales: string[];
  usage: UseItem[];
  definitions: DefItem[];
  keys: KeyStatsEntry[];

  constructor(options: I_I18nUtil.KeyStatsCtorOptions = {}) {
    const { definitions, usage, locales } = options;

    this.definitions = [...(definitions || [])];
    this.usage = [...(usage || [])];

    const pathIds = new Set<number>();
    const pathIdToPath = new Map<number, string[]>();
    const localesSet: Set<string> = new Set(locales ? locales : []);

    const [defsByKey, usageByKey] = [this.definitions, this.usage].map(
      (items) =>
        groupBy(items as I_Item.Item[], (item) => {
          const id = item.pathHash;
          if (!pathIds.has(id)) {
            pathIds.add(id);
            pathIdToPath.set(id, item.path!);
          }
          if (!locales && item.locale) localesSet.add(item.locale);
          return id;
        }),
    ) as [AnyObj<DefItem[]>, AnyObj<UseItem[]>];

    this.locales = Array.from(localesSet);
    this.keys = [] as KeyStatsEntry[];

    pathIds.forEach((pathId) =>
      this.keys.push(
        new KeyStatsEntry({
          definitions: defsByKey[pathId] ?? [],
          usage: usageByKey[pathId] ?? [],
          path: pathIdToPath.get(pathId)!,
          locales: this.locales,
        }),
      ),
    );
  }

  get keysUnused() {
    return flatten(this.keys.filter((stat) => !stat.isUsed));
  }

  get keysUndefined() {
    return flatten(this.keys.filter((stat) => !stat.isDefined));
  }

  get keysIssues() {
    return flatten(this.keys.filter((stat) => stat.hasIssues));
  }

  get usageDefined() {
    return flatten(this.keys.map((stat) => stat.usageDefined));
  }

  get usageUndefined() {
    return flatten(this.keys.map((stat) => stat.usageUndefined));
  }

  get usageMissing() {
    return flatten(this.keys.map((stat) => stat.usageMissing));
  }

  get usageFiles() {
    return uniq(flatten(this.keys.map((stat) => stat.usageFiles)));
  }

  get definitionsUsed() {
    return flatten(this.keys.map((stat) => stat.definitionsUsed));
  }

  get definitionsUnused() {
    return flatten(this.keys.map((stat) => stat.definitionsUnused));
  }

  get definitionsMissing() {
    return flatten(this.keys.map((stat) => stat.definitionsMissing));
  }

  get definitionsFiles() {
    return uniq(flatten(this.keys.map((stat) => stat.definitionsFiles)));
  }
}
