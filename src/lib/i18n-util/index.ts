import merge from 'lodash.merge';
import flatten from 'lodash.flatten';
import differenceBy from 'lodash.differenceby';

import type { AnyObj } from '../../types';
import type { I_I18nUtil } from './types';
import type { IDefinition } from '../definition/types';
import type { I_Item } from '../item/types';
import { debug } from '../util/debug';
import { mapUniq } from '../util/array';
import { DefinitionArray } from '../definition';
import { ItemProcessor, LoadedItemProcessor } from './item-processor';
import { DefinitionLoader, UsageLoader } from './loader';

export { DefinitionLoader, UsageLoader } from './loader';

type DefItem = IDefinition.Item;
type DefItemArrayLike = IDefinition.ItemArrayLike;
type Adaptor = I_I18nUtil.AdaptorCollection.NamedItem;
type Parser = I_I18nUtil.Parser;
type Writer = I_I18nUtil.Writer;
type Remover = I_I18nUtil.Remover;
type UsageAnalyzer = I_I18nUtil.UsageAnalyzer;

export class I18nUtil extends ItemProcessor implements I_I18nUtil.I18nUtil {
  definitions(paths: string[], options: I_I18nUtil.DefinitionOptions = {}) {
    const pathsByAdaptor = this.adaptors.groupByResolve(paths);

    // Prepare parsers
    const dataToParse = [...pathsByAdaptor].map(([adaptor, data]) => {
      const { methods = {}, options: adaptorOpts } = adaptor || {};
      const parserOpts = merge({}, adaptorOpts, this.options, options);
      if (!methods.parser) {
        const filesStr = data.join('\n');
        throw Error(
          `Cannot parse ${data.length} files. No adaptor matched ` +
            `following files:\n${filesStr}`,
        );
      }
      return { adaptor: adaptor!, data, options: parserOpts };
    });

    // Parse data
    const i18ns = dataToParse.map(({ adaptor, data, options: opts }) => {
      debug(`Parsing ${data.length} files with adaptor '${adaptor.name}'`);
      return (adaptor.methods.parser as Parser)(data, opts);
    });

    return flatten(i18ns);
  }

  usage(paths: string[], options: I_I18nUtil.UsageOptions = {}) {
    const dataByAdaptor = this.adaptors.groupByResolve(paths);

    // Prepare analyzers
    const dataToAnalyze = [...dataByAdaptor].map(([adaptor, data]) => {
      const { methods = {}, options: adaptorOpts } = adaptor || {};
      const analyzerOpts = merge({}, adaptorOpts, this.options, options);
      if (!methods.usageAnalyzer) {
        const filesStr = data.join('\n');
        throw Error(
          `Cannot parse usage in ${data.length} files. No adaptor matched ` +
            `following files:\n${filesStr}`,
        );
      }
      return { adaptor: adaptor!, data, options: analyzerOpts };
    });

    // Analyze data
    return flatten(
      dataToAnalyze.map(({ adaptor, data, options: opts }) => {
        debug(
          `Parsing usage in ${data.length} files with adaptor ` +
            `'${adaptor.name}'`,
        );
        return (adaptor.methods.usageAnalyzer as UsageAnalyzer)(data, opts);
      }),
    );
  }

  /**
   * Overwrites file to contain only those entries that are given.
   *
   * This is similar to patch, but patch only updates the specific entry
   * and keeps the rest. This discards the rest.
   */
  write(definitions: DefItemArrayLike, options: I_I18nUtil.WriteOptions = {}) {
    const dataByAdaptor = this.adaptors.groupByResolve(
      [...definitions],
      ({ source }) => source,
    );
    const dataToWrite = [...dataByAdaptor].map(([adaptor, data]) => {
      return { adaptor: adaptor!, data };
    });
    this._write(dataToWrite, options);
  }

  /**
   * Common pathway for writing DefinitionItems using a particular adaptor
   */
  private _write(
    writeEntries: { adaptor: Adaptor; data: DefItemArrayLike }[],
    options: I_I18nUtil.WriteOptions,
  ) {
    // Prepare writers
    const dataToWrite = writeEntries.map(({ adaptor, data }) => {
      const { methods = {}, options: adaptorOpts } = adaptor || {};
      const writerOpts = merge({}, adaptorOpts, this.options, options);
      const dataArr = [...data];
      if (!methods.writer) {
        const filesStr = dataArr.map((e) => e.path).join('\n');
        throw Error(
          `Cannot write ${dataArr.length} files. No adaptor matched ` +
            `following files:\n${filesStr}`,
        );
      }
      return { adaptor, data: dataArr, options: writerOpts };
    });

    // Write data
    for (const { adaptor, data, options: opts } of dataToWrite) {
      debug(`Writing ${data.length} entries with adaptor '${adaptor.name}'`);
      (adaptor.methods.writer as Writer)(data, opts);
    }
  }

  /**
   * Common pathway for removing files using a particular adaptor
   */
  private _remove(
    removeEntries: { adaptor: Adaptor; data: string[] }[],
    options: I_I18nUtil.DropOptions,
  ) {
    // Prepare removers
    const dataToRemove = removeEntries.map(({ adaptor, data }) => {
      const { methods = {}, options: adaptorOpts } = adaptor || {};
      const removerOpts = merge({}, adaptorOpts, this.options, options);
      if (!methods.remover) {
        const filesStr = data.join('\n');
        throw Error(
          `Cannot remove ${data.length} files. No adaptor matched ` +
            `following files:\n${filesStr}`,
        );
      }
      return { adaptor, data, options: removerOpts };
    });

    // Remove data
    for (const { adaptor, data, options: opts } of dataToRemove) {
      debug(`Removing ${data.length} files with adaptor '${adaptor.name}'`);
      (adaptor.methods.remover as Remover)(data, opts);
    }
  }

  patch(
    definitions: DefItemArrayLike,
    options: I_I18nUtil.PatchOptions<DefItem> = {},
  ) {
    const { hashType = 'localeToken' } = options;
    const dataByAdaptor = this.adaptors.groupByResolve(
      [...definitions],
      ({ source }) => source,
    );

    // Prepare data
    const dataToPatch = [...dataByAdaptor].map(([adaptor, defsSubset]) => {
      const filepaths = mapUniq(defsSubset, (e) => e.source);
      const staleDefs = this.definitions(filepaths, options);

      const { items: updatedDefs } = DefinitionArray.update(
        staleDefs,
        defsSubset,
        { ...options, hashType },
      );

      debug(
        `Will patch ${defsSubset.length} items (of total ` +
          `${updatedDefs.length} items) with adaptor '${adaptor!.name}'`,
      );

      return { adaptor: adaptor!, data: updatedDefs };
    });

    return this._write(dataToPatch, options);
  }

  /**
   * Update definitions loaded from elsewhere with values from definitions.
   */
  patchTo(
    definitions: DefItemArrayLike,
    options: I_I18nUtil.PatchToOptions<DefItem> = {},
  ) {
    const { hashType = 'localeToken', sink } = options;
    return new DefinitionLoader<
      I_I18nUtil.I18nUtil,
      ReturnType<I_I18nUtil.I18nUtil['patch']>
    >({
      i18nUtil: this as any,
      callback: (newDefs) => {
        const { items: updatedDefs } = DefinitionArray.update(
          definitions,
          newDefs,
          { ...options, hashType },
        );

        return this.patch(
          sink
            ? updatedDefs.items.map((i) =>
                i.source ? i : i.copy({ source: sink }),
              )
            : updatedDefs,
          options,
        );
      },
    });
  }

  drop(definitions: DefItemArrayLike, options: I_I18nUtil.DropOptions = {}) {
    const { hashType = 'localeToken' } = options;
    const dataByAdaptor = this.adaptors.groupByResolve(
      [...definitions],
      ({ source }) => source,
    );

    const filesToRemove = [] as { adaptor: Adaptor; data: string[] }[];
    const dataToWrite = [] as { adaptor: Adaptor; data: DefItem[] }[];

    // Prepare data
    for (const [adaptor, defsSubset] of dataByAdaptor) {
      // Parse files for items, exclude from them those that should be
      // dropped and then rewrite the file.
      const filepaths = mapUniq(defsSubset, (e) => e.source);
      const staleDefs = this.definitions(filepaths, options);
      const updatedDefs = DefinitionArray.difference(staleDefs, defsSubset, {
        hashType,
      }).items;

      // If there are any files which were in `filepaths`, but are
      // not in `updatedDefs` anymore, this means that all definitions
      // were removed from that file. In that case we want to remove those
      // files.
      const removedFiles = differenceBy(
        filepaths,
        mapUniq(updatedDefs, (d) => d.source),
      );
      if (removedFiles.length) {
        filesToRemove.push({ adaptor: adaptor!, data: removedFiles });
      }
      if (updatedDefs.length) {
        dataToWrite.push({ adaptor: adaptor!, data: updatedDefs });
      }

      debug(
        `Will remove ${defsSubset.length} items (of total ` +
          `${staleDefs.length}) and ${removedFiles.length}` +
          ` files (of total ${filepaths.length}) with adaptor '${
            adaptor!.name
          }'`,
      );
    }

    this._remove(filesToRemove, options);
    this._write(dataToWrite, options);
  }

  /**
   * Remove the keys with same combination of locale/key as in `definitions`
   * from definitions loaded from elsewhere.
   */
  dropFrom(
    definitions: DefItemArrayLike,
    options: I_I18nUtil.DropOptions = {},
  ) {
    const { hashType = 'localeToken' } = options;
    return new DefinitionLoader<
      I_I18nUtil.I18nUtil,
      ReturnType<I_I18nUtil.I18nUtil['drop']>
    >({
      i18nUtil: this as any,
      callback: (selectedDefs) => {
        const defsToDrop = DefinitionArray.intersection(
          definitions,
          selectedDefs,
          { hashType },
        );
        return this.drop(defsToDrop, options);
      },
    });
  }

  addLocale(
    definitions: DefItemArrayLike,
    locale: any,
    options: I_I18nUtil.AddLocaleOptions<DefItem> = {},
  ) {
    return this.addLocales(definitions, [locale], options);
  }

  addLocales(
    definitions: DefItemArrayLike,
    locales: any[],
    options: I_I18nUtil.AddLocaleOptions<DefItem> = {},
  ) {
    const optsWithDefaults = this.effectiveOptions(options, {
      includeMissing: true,
    });
    const { skipResolve } = optsWithDefaults;
    const matchedLocales = skipResolve
      ? locales
      : this.resolveLocales([...definitions], locales, optsWithDefaults);
    const newLocaleDefinitions = DefinitionArray.itemsByLocales(
      definitions,
      matchedLocales,
      optsWithDefaults,
    );

    // Remove details that no longer apply to the new items
    for (const def of newLocaleDefinitions) {
      def.blockIndex = undefined;
      def.line = undefined;
      def.column = undefined;
    }

    this.patch(newLocaleDefinitions, {
      ...options,
      includeMissing: true,
      addUnmatched: true,
    });
    return newLocaleDefinitions.items;
  }

  removeLocale(
    definitions: DefItemArrayLike,
    locale: any,
    options: I_I18nUtil.RemoveLocaleOptions = {},
  ) {
    return this.removeLocales(definitions, [locale], options);
  }

  removeLocales(
    definitions: DefItemArrayLike,
    locales: any[],
    options: I_I18nUtil.RemoveLocaleOptions = {},
  ) {
    const optsWithDefaults = this.effectiveOptions(options);
    const { skipResolve } = optsWithDefaults;
    const matchedLocales = skipResolve
      ? locales
      : this.resolveLocales([...definitions], locales, optsWithDefaults);
    const removedDefinitions = DefinitionArray.filterByLocales(
      definitions,
      matchedLocales,
      optsWithDefaults,
    );

    this.drop(removedDefinitions, options);
    return removedDefinitions.items;
  }

  clearLocale(
    definitions: DefItemArrayLike,
    locale: any,
    options: I_I18nUtil.ClearLocaleOptions = {},
  ) {
    return this.clearLocales(definitions, [locale], options);
  }

  clearLocales(
    definitions: DefItemArrayLike,
    locales: any[],
    options: I_I18nUtil.ClearLocaleOptions = {},
  ) {
    const optsWithDefaults = this.effectiveOptions(options);
    const {
      missingValue = DefinitionArray.defaults.missingValue,
      skipResolve,
    } = optsWithDefaults;
    const matchedLocales = skipResolve
      ? locales
      : this.resolveLocales([...definitions], locales, optsWithDefaults);
    // Get all keys but all with null values
    const clearedDefs = DefinitionArray.filterByLocales(
      definitions,
      matchedLocales,
    ).items.map((item) => item.copy({ value: missingValue }));

    this.patch(clearedDefs, { ...options, includeMissing: true });
    return clearedDefs;
  }

  schema(items: I_Item.ItemArrayLike, options: I_I18nUtil.SchemaOptions = {}) {
    const optsWithDefaults = this.effectiveOptions(options);
    const entries = this.locale(items, '*', {
      ...optsWithDefaults,
      includeMissing: true,
      missingValue: '',
      skipResolve: true,
    });
    const { '*': data = {} } = this.toObject(entries, {
      ...optsWithDefaults,
      simple: true,
      merge: false,
    });
    const schemaOpts = merge({}, this.options, optsWithDefaults);
    const schema = this.schemator.generate(data, schemaOpts);
    return schema;
  }

  statsAgainst(
    definitions: DefItemArrayLike,
    options: I_I18nUtil.StatsOptions = {},
  ) {
    return new UsageLoader<
      I_I18nUtil.I18nUtil,
      ReturnType<I_I18nUtil.I18nUtil['stats']>
    >({
      i18nUtil: this as any,
      callback: (usage, loader) => this.stats(definitions, usage, options),
    });
  }

  validate(
    items: I_Item.ItemArrayLike,
    schema: AnyObj,
    options: I_I18nUtil.ValidateOptions = {},
  ) {
    const optsWithDefaults = this.effectiveOptions(options);
    const { locales = [] } = optsWithDefaults;
    const entries = locales?.length
      ? this.locales(items, locales, options)
      : this.master(items, options);
    const data = this.toObject(entries, {
      ...optsWithDefaults,
      simple: true,
      merge: false,
      includeMissing: true,
      locales: null,
    });
    this.validator.validate(schema, data, optsWithDefaults);
  }

  /**
   * Validate items against schema created from items loaded from
   * elsewhere
   */
  validateAgainst(
    items: I_Item.ItemArrayLike,
    options: I_I18nUtil.ValidateAgainstOptions = {},
  ) {
    const { type = 'definition' } = this.effectiveOptions(options);
    const callback = (schemaDefs: I_Item.Item[]) => {
      const schema = this.schema(schemaDefs, options);
      return this.validate(items, schema, options);
    };

    return type === 'definition'
      ? new DefinitionLoader<
          I_I18nUtil.I18nUtil,
          ReturnType<I_I18nUtil.I18nUtil['validate']>
        >({ i18nUtil: this as any, callback })
      : new UsageLoader<
          I_I18nUtil.I18nUtil,
          ReturnType<I_I18nUtil.I18nUtil['validate']>
        >({ i18nUtil: this as any, callback });
  }

  /**
   * Update definitions loaded from elsewhere with values from definitions.
   */
  usageAnalyzeAgainst(
    definitions: DefItemArrayLike,
    options: I_I18nUtil.UsageAnalyzeOptions = {},
  ) {
    return new UsageLoader<
      I_I18nUtil.I18nUtil,
      ReturnType<I_I18nUtil.I18nUtil['usageAnalyze']>
    >({
      i18nUtil: this as any,
      callback: (usage, loader) =>
        this.usageAnalyze(definitions, usage, options),
    });
  }

  usageValidateAgainst(
    definitions: DefItemArrayLike,
    options: I_I18nUtil.UsageValidateOptions = {},
  ) {
    return new UsageLoader<
      I_I18nUtil.I18nUtil,
      ReturnType<I_I18nUtil.I18nUtil['usageValidate']>
    >({
      i18nUtil: this as any,
      callback: (usage, loader) =>
        this.usageValidate(definitions, usage, options),
    });
  }
}

export class LoadedI18nUtil extends LoadedItemProcessor
  implements I_I18nUtil.LoadedI18nUtil {
  i18nUtil: I_I18nUtil.I18nUtil;

  constructor({ i18nUtil, ...options }: I_I18nUtil.LoadedCtorOptions = {}) {
    super(options);
    this.i18nUtil = i18nUtil ?? new I18nUtil(this.options);
  }

  definitions() {
    return this.loaded.items;
  }

  usage(paths: string[], options?: I_I18nUtil.UsageOptions) {
    return this.i18nUtil.usage(paths, options);
  }

  write(options: I_I18nUtil.WriteOptions = {}) {
    return this.i18nUtil.write(this.loaded, options);
  }

  drop(options: I_I18nUtil.DropOptions = {}) {
    return this.i18nUtil.drop(this.loaded, options);
  }

  /**
   * Remove definitions from definitions loaded from elsewhere.
   */
  dropFrom(options: I_I18nUtil.DropOptions = {}) {
    return this.i18nUtil.dropFrom(this.loaded, options);
  }

  patch(options: I_I18nUtil.PatchOptions<DefItem> = {}) {
    return this.i18nUtil.patch(this.loaded, options);
  }

  /**
   * Update definitions loaded from elsewhere with values from definitions.
   */
  patchTo(options: I_I18nUtil.PatchOptions<DefItem> = {}) {
    return this.i18nUtil.patchTo(this.loaded, options);
  }

  addLocale(locale: string, options?: I_I18nUtil.AddLocaleOptions<DefItem>) {
    return this.addLocales([locale], options);
  }

  addLocales(
    locales: string[],
    options?: I_I18nUtil.AddLocaleOptions<DefItem>,
  ) {
    const addedDefinitions = this.i18nUtil.addLocales(
      this.loaded,
      locales,
      options,
    );
    this.loaded.push(...addedDefinitions);
    return addedDefinitions;
  }

  removeLocale(locale: string, options?: I_I18nUtil.RemoveLocaleOptions) {
    return this.removeLocales([locale], options);
  }

  removeLocales(locales: string[], options?: I_I18nUtil.RemoveLocaleOptions) {
    const removedDefinitions = this.i18nUtil.removeLocales(
      this.loaded,
      locales,
      options,
    );
    const remainingDefinitions = DefinitionArray.difference(
      this.loaded,
      removedDefinitions,
    );
    this.loaded.items = remainingDefinitions.items;
    return removedDefinitions;
  }

  clearLocale(locale: string, options?: I_I18nUtil.ClearLocaleOptions) {
    return this.clearLocales([locale], options);
  }

  clearLocales(locales: string[], options?: I_I18nUtil.ClearLocaleOptions) {
    const updatedDefs = this.i18nUtil.clearLocales(
      this.loaded,
      locales,
      options,
    );

    const definitions = DefinitionArray.union(updatedDefs, this.loaded);
    this.loaded.items = definitions.items;
    return updatedDefs;
  }

  schema(options?: I_I18nUtil.SchemaOptions) {
    return this.i18nUtil.schema(this.loaded.items, options);
  }

  statsAgainst(options: I_I18nUtil.StatsOptions = {}) {
    return this.i18nUtil.statsAgainst(this.loaded, options);
  }

  validate(schema: AnyObj, options?: I_I18nUtil.ValidateOptions) {
    return this.i18nUtil.validate(this.loaded.items, schema, options);
  }

  /**
   * Validate definitions against schema created from definitions loaded from
   * elsewhere.
   */
  validateAgainst(options: I_I18nUtil.ValidateAgainstOptions = {}) {
    return this.i18nUtil.validateAgainst(this.loaded.items, options);
  }

  /**
   * Update definitions loaded from elsewhere with values from definitions.
   */
  usageAnalyzeAgainst(options: I_I18nUtil.UsageAnalyzeOptions = {}) {
    return this.i18nUtil.usageAnalyzeAgainst(this.loaded, options);
  }

  usageValidateAgainst(options: I_I18nUtil.UsageValidateOptions = {}) {
    return this.i18nUtil.usageValidateAgainst(this.loaded, options);
  }

  static fromFiles(
    paths: any[],
    options: I_I18nUtil.DefinitionOptions &
      I_I18nUtil.ResolvePathsOptions &
      I_I18nUtil.LoadedCtorOptions = {},
  ) {
    const i18nUtil = new I18nUtil(options);
    return new DefinitionLoader({
      i18nUtil,
      callback: (definitions) => {
        return new LoadedI18nUtil({ ...options, i18nUtil, definitions });
      },
    }).loadFromFiles(paths, options);
  }

  static fromObjects(
    paths: any[],
    options: I_Item.FromObjectOptions<DefItem> &
      I_I18nUtil.LoadedCtorOptions = {},
  ) {
    const i18nUtil = new I18nUtil(options);
    return new DefinitionLoader({
      i18nUtil,
      callback: (definitions) => {
        return new LoadedI18nUtil({ ...options, i18nUtil, definitions });
      },
    }).loadFromObjects(paths, options);
  }
}
