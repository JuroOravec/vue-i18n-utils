import flattenDeep from 'lodash.flattendeep';
import isObject from 'lodash.isobject';
import merge from 'lodash.merge';
import groupBy from 'lodash.groupby';
import uniqBy from 'lodash.uniqby';

import type { AnyObj, DefaultProps, AsObject } from '../types';
import type {
  PTPB,
  PTP,
  TPB,
  TP,
  I_I18nUtilCtorOptions,
  I_I18nUtil,
  IExtractOptions,
  IWriteOptions,
  IPatchOptions,
  IMasterOptions,
  IMasterResult,
  ISchemaOptions,
  IValidateOptions,
} from './i18n-util-type';
import debug from './debug';
import { FileAdaptorCollection } from './file-adaptor';
import {
  ExtractItem,
  filterByLocale,
  objectFromExtracts,
  extractFromObject,
} from './extract-item';
import { mergeDeepWith, MergeFuncParams, DeepObject } from './walk';
import { SchemaGenerator } from './schema-generator';
import { Validator } from './validator';
import { GlobPathResolver } from './path-resolver';
import { PatchIntermediate } from './patch-intermediate';
import { ValidatorIntermediate } from './validator-intermediate';

export class I18nUtil<
  Params extends PTPB = PTP,
  T extends TPB = Params extends infer X ? DefaultProps<AsObject<X>, TP> : never
> implements I_I18nUtil<T> {
  adaptors: T['adaptors'];
  schemaGenerator: T['schemaGen'];
  validator: T['validator'];
  pathResolver: T['pathResolver'];

  constructor(public options: I_I18nUtilCtorOptions<T> = {}) {
    this.adaptors = options.adaptors ?? new FileAdaptorCollection();
    this.pathResolver = options.pathResolver ?? new GlobPathResolver();
    this.schemaGenerator = options.schemaGenerator ?? new SchemaGenerator();
    this.validator = options.validator ?? new Validator();
  }

  effectiveOptions<O extends AnyObj>(options: O = {} as O) {
    return merge({}, I18nUtil.defaults, this.options, options ?? {});
  }

  effectiveOptionsProp<
    O extends AnyObj | undefined,
    K extends keyof I_I18nUtilCtorOptions<T>
  >(options: O, prop: K) {
    return merge({}, I18nUtil.defaults, this.options[prop!], options ?? {});
  }

  addFileAdaptor(params: Parameters<T['adaptors']['add']>[0]) {
    const parserName = params.name ? `'${params.name}'` : '';
    debug(`Adding parser ${parserName}`);
    this.adaptors.add(params);
  }

  addFileAdaptors(paramsList: Parameters<T['adaptors']['add']>[0][]) {
    paramsList.forEach((params) => this.addFileAdaptor(params));
  }

  removeFileAdaptor(name: Parameters<T['adaptors']['delete']>[0]) {
    debug(`Removing parser '${name}'`);
    this.adaptors.delete(name);
  }

  removeFileAdaptors(names: Parameters<T['adaptors']['delete']>[0][]) {
    names.forEach((name) => this.removeFileAdaptor(name));
  }

  extract(paths: string[], options: IExtractOptions<T> = {}) {
    const pathResOptions = this.effectiveOptionsProp(
      options.pathResolver,
      'pathResolverOptions',
    );

    debug(`Resolving ${paths.length} paths`);
    const filepaths = this.pathResolver.resolve(paths, pathResOptions);
    debug(`Done resolving paths. Resolved to ${filepaths.length} paths`);

    const pathsByAdaptor = groupBy(filepaths, (filepath) => {
      const { name } = this.adaptors.resolve(filepath) || {};
      return name;
    });

    const i18ns = Object.entries(pathsByAdaptor).map(([name, data]) => {
      const {
        methods: { parser },
        options: adaptorOpts,
      } = this.adaptors.get(name) || { methods: {} };
      const parserOpts = merge(
        {},
        adaptorOpts,
        this.options.adaptorsOptions,
        options.adaptor,
      );
      if (!parser) {
        const filesStr = data.join('\n');
        throw Error(
          `Cannot parse ${data.length} files. No adaptor matched ` +
            `following files:\n${filesStr}`,
        );
      }
      debug(`Parsing ${data.length} files with adaptor '${name}'`);
      return parser(data, parserOpts);
    });

    return flattenDeep(i18ns);
  }

  write(
    writeEntries: { path: string; data: any }[],
    options: IWriteOptions<T> = {},
  ) {
    const dataByAdaptor = groupBy(writeEntries, ({ path: filepath }) => {
      const { name } = this.adaptors.resolve(filepath) || {};
      return name;
    });

    for (const [name, writeEntries] of Object.entries(dataByAdaptor)) {
      const {
        methods: { writer },
        options: adaptorOpts,
      } = this.adaptors.get(name) || { methods: {} };
      const writerOpts = merge(
        {},
        adaptorOpts,
        this.options.adaptorsOptions,
        options.adaptor,
      );
      if (!writer) {
        const filesStr = writeEntries.map((e) => e.path).join('\n');
        throw Error(
          `Cannot write ${writeEntries.length} files. No adaptor matched ` +
            `following files:\n${filesStr}`,
        );
      }
      debug(`Writing ${writeEntries.length} entries with adaptor '${name}'`);
      writer(writeEntries, writerOpts);
    }
  }

  patch(extracts: ExtractItem[], options: IPatchOptions<T> = {}) {
    const dataByAdaptor = groupBy(extracts, ({ source }) => {
      const { name } = this.adaptors.resolve(source) || {};
      return name;
    });
    for (const [name, data] of Object.entries(dataByAdaptor)) {
      const {
        methods: { patcher },
        options: adaptorOpts,
      } = this.adaptors.get(name) || { methods: {} };
      const patcherOpts = merge(
        {},
        adaptorOpts,
        this.options.adaptorsOptions,
        options.adaptor,
      );
      if (!patcher) {
        const filesStr = uniqBy(data, 'source').join('\n');
        throw Error(
          `Cannot patch ${data.length} items. No adaptor matched ` +
            `following files:\n${filesStr}`,
        );
      }
      debug(`Patching ${data.length} items with adaptor '${name}'`);
      patcher(data, patcherOpts);
    }
  }

  patchFromFiles(
    paths: string[],
    options: IExtractOptions<T> & IPatchOptions<T> = {},
  ) {
    const extracts = this.extract(paths, options);
    const parsedOptions = this.effectiveOptions(options);
    return new PatchIntermediate<{ i18nUtil: I_I18nUtil<T> }>(
      this as any,
      extracts,
      parsedOptions,
    );
  }

  patchFromExtracts(extracts: ExtractItem[], options: IPatchOptions<T> = {}) {
    const parsedOptions = this.effectiveOptions(options);
    return new PatchIntermediate<{ i18nUtil: I_I18nUtil<T> }>(
      this as any,
      extracts,
      parsedOptions,
    );
  }

  patchFromObjects(
    objects: DeepObject[],
    options: IMasterOptions<T> & IPatchOptions<T> = {},
  ) {
    const master = this.masterFromObjects(objects, {
      ...options,
      simple: true,
    });
    const extracts = Object.entries(master).map(([locale, data]) =>
      extractFromObject(data as object, { locale }),
    );
    const parsedOptions = this.effectiveOptions(options);
    return new PatchIntermediate<{ i18nUtil: I_I18nUtil<T> }>(
      this as any,
      flattenDeep(extracts),
      parsedOptions,
    );
  }

  master<M extends IMasterOptions<T>>(
    paths: string[],
    options: M = {} as M,
  ): IMasterResult<M['simple'], M['merged']> {
    const i18ns = this.extract(paths, options);
    return this.masterFromExtracts(i18ns, options);
  }

  masterFromExtracts<M extends IMasterOptions<T>>(
    extracts: ExtractItem[],
    options: M = {} as M,
  ): IMasterResult<M['simple'], M['merged']> {
    debug(`Building master fragments`);

    const parsedOptions = this.effectiveOptions(options);
    const { includeMissing } = parsedOptions;

    // If includeMissing is true, we want to extract all unique keys taken from
    // all locales, and we use that as the backdrop / default on top of which
    // known locale keys are overlaid.
    const template = includeMissing
      ? objectFromExtracts(filterByLocale(extracts, '*', parsedOptions))
      : {};

    // Build the nested objects based on the items' paths
    const i18nObject = objectFromExtracts(extracts, template);
    return this.masterFromObjects([i18nObject], options);
  }

  masterFromObjects<M extends IMasterOptions<T>>(
    objects: DeepObject[],
    options: M = {} as M,
  ): IMasterResult<M['simple'], M['merged']> {
    const parsedOptions = this.effectiveOptions(options);
    const { simple, merged, missingValue } = parsedOptions;

    function errorOnDuplicates(params: MergeFuncParams) {
      const { oldValue, value, path, index, origin } = params;
      // Do not raise error on null values
      if (oldValue === missingValue) return value;

      throw Error(
        `Repeated keys for path '${path.join(
          '.',
        )}' found in objects at indices ` +
          `${origin} and ${index}. Values:\n'` +
          `${JSON.stringify(oldValue, null, 2)}'\nand\n` +
          `'${JSON.stringify(value, null, 2)}'`,
      );
    }

    debug(`Merging extracted data`);
    // Merge the partial translations into single master object
    const masterUnmerged = mergeDeepWith(
      {
        onMerge: errorOnDuplicates,
        // Treat ExtractItem entries as values
        isBranch: ({ value }) =>
          isObject(value) && !(value instanceof ExtractItem),
        // Keep only the value instead of the whole ExtractItem object
        // if simple == true
        onAssign: ({ value: item }) =>
          simple && item instanceof ExtractItem ? item.value : item,
      },
      {} as any,
      ...objects,
    ).value;

    if (!merged) return masterUnmerged;

    return mergeDeepWith(
      {
        onMerge: (params: MergeFuncParams) => {
          const { oldValue, value, path, index, origin } = params;
        }
        // Treat ExtractItem entries as values
        isBranch: ({ value }) =>
          isObject(value) && !(value instanceof ExtractItem),
        // Keep only the value instead of the whole ExtractItem object
        // if simple == true
        onAssign: ({ value: item }) =>
          simple && item instanceof ExtractItem ? item.value : item,
      },
      {} as any,
      ...objects,
    ).value;
  }

  locale(globs: string[], locale: string, options: IMasterOptions<T>) {
    const i18ns = this.extract(globs, options);
    return this.localeFromExtracts(i18ns, locale, options);
  }

  localeFromExtracts(
    extracts: ExtractItem[],
    locale: string,
    options: IMasterOptions<T>,
  ) {
    const parsedOptions = this.effectiveOptions(options);
    const { includeMissing } = parsedOptions;

    // If includeMissing is true, we want to extract all unique keys taken from
    // all locales, and we use that as the backdrop / default on top of which
    // known locale keys are overlaid.
    const template = includeMissing
      ? objectFromExtracts(filterByLocale(extracts, '*', parsedOptions))
      : {};

    const localeExtracts = filterByLocale(extracts, locale, parsedOptions);

    // Build the nested objects based on the items' paths
    const i18nObject = objectFromExtracts(localeExtracts, template);
    const { [locale]: data } = this.masterFromObjects([i18nObject], options);
    return data as DeepObject<string> | DeepObject<ExtractItem>;
  }

  localeFromObjects(
    objects: DeepObject[],
    locale: string,
    options: IMasterOptions<T>,
  ) {
    const parsedOptions = this.effectiveOptions(options);

    // Since we do not know all the keys initially, we combine all the objects,
    // extract keys from that, and pass it to localeFromExtracts
    const merged = this.masterFromObjects(objects, {
      ...parsedOptions,
      simple: true,
    });

    const extracts = flattenDeep(
      Object.entries(merged).map(([key, localeObj]) =>
        extractFromObject(localeObj as AnyObj, {
          locale: key,
          source: '',
          blockIndex: 0,
        }),
      ),
    );
    return this.localeFromExtracts(extracts, locale, options);
  }

  schema(globs: string[], options: ISchemaOptions<T> = {}) {
    const i18ns = this.extract(globs, options);
    return this.schemaFromExtracts(i18ns, options);
  }

  schemaFromExtracts(extracts: ExtractItem[], options: ISchemaOptions<T> = {}) {
    const parsedOptions = this.effectiveOptions(options);

    const uniqueI18ns = filterByLocale(extracts, '*', {
      ...parsedOptions,
      includeMissing: true,
      missingValue: '',
    });
    const masterOpts = merge({}, parsedOptions, { simple: true });
    const { '*': data } = this.masterFromExtracts(uniqueI18ns, masterOpts);
    const generateOpts = merge({}, this.options.schemaOptions, parsedOptions);
    return this.schemaGenerator.generate(data, generateOpts);
  }

  schemaFromObjects(objects: DeepObject[], options: ISchemaOptions<T> = {}) {
    const parsedOptions = this.effectiveOptions(options);
    const { value: data } = mergeDeepWith(
      {
        // Replace ExtractItem instances with string
        onAssign: ({ value }) => (value instanceof ExtractItem ? '' : value),
        onMerge: ({ value }) => (value instanceof ExtractItem ? '' : value),
        isBranch: ({ value }) =>
          isObject(value) && !(value instanceof ExtractItem),
      },
      ...objects,
    );
    return this.schemaGenerator.generate(data, parsedOptions);
  }

  validate(data: AnyObj[], schema: AnyObj, options: IValidateOptions<T>) {
    const parsedOptions = merge({}, this.options.validatorOptions, options);
    data.forEach((obj) => this.validator.validate(obj, schema, parsedOptions));
  }

  validateFromFiles(paths: string[], options: IValidateOptions<T>) {
    const parsedOptions = this.effectiveOptions(options);
    const { locale } = parsedOptions;
    const data = locale
      ? this.locale(paths, locale, options)
      : this.master(paths, options);
    return new ValidatorIntermediate<{ i18nUtil: I_I18nUtil<T> }>(
      this as any,
      data,
      parsedOptions,
    );
  }

  validateFromExtracts(
    extracts: ExtractItem[],
    options: IValidateOptions<T> = {},
  ) {
    const parsedOpts = this.effectiveOptions(options);
    const { locale } = parsedOpts;
    const data = locale
      ? this.localeFromExtracts(extracts, locale, options)
      : this.masterFromExtracts(extracts, options);
    return new ValidatorIntermediate<{ i18nUtil: I_I18nUtil<T> }>(
      this as any,
      data,
      parsedOpts,
    );
  }

  validateFromObjects(
    objects: DeepObject[],
    options: IValidateOptions<T> = {},
  ) {
    const parsedOpts = this.effectiveOptions(options);
    const { locale } = parsedOpts;
    const data = locale
      ? this.localeFromObjects(objects, locale, options)
      : this.masterFromObjects(objects, options);
    return new ValidatorIntermediate<{ i18nUtil: I_I18nUtil<T> }>(
      this as any,
      data,
      parsedOpts,
    );
  }

  static get defaults() {
    return {
      includeMissing: false,
      missingValue: null,
    };
  }
}
