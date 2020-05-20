import fs from 'fs';
import yaml from 'js-yaml';
import flattenDeep from 'lodash.flattendeep';
import isFunc from 'lodash.isfunction';
import mapValues from 'lodash.mapvalues';
import merge from 'lodash.merge';
import groupBy from 'lodash.groupby';
import unionBy from 'lodash.unionby';
import path from 'path';

import type { AnyObj, AnyFunc, DefaultProps, AsObject } from '../types';
import type {
  INamedFileAdaptorItem,
  IFileAdaptorCollection,
  IFileAdaptorItemMethods,
  IPatcher,
  IParser,
  IWriter,
} from './file-adaptor-type';
import { FileAdaptorCollection } from './file-adaptor';
import theDebug from './debug';
import {
  ExtractItem,
  extractFromObject,
  objectFromExtracts,
  ExtractItemCtorOptions,
} from './extract-item';

const debug = (msg: string) => theDebug(`[file-adaptor-json-yaml] ${msg}`);

export type JsonYamlSerializerParser = typeof JSON.parse | typeof yaml.safeLoad;
export type JsonYamlSerializerWriter =
  | typeof JSON.stringify
  | typeof yaml.safeDump;

/**
 * Base types passed to subclasses / subdependencies.
 *
 * In other words, if there's a subdependency (class or instance of another
 * class injected into constructor) to which types are passed for inferrence,
 * these types describe what those passed types must extend.
 */
interface TypeParamsBase<
  SPrs extends IParser = (s: string, ...args: any[]) => any,
  SWrt extends IWriter = AnyFunc<any, string>,
  SParams extends { writer: IWriter; parser: IParser } = {
    parser: SPrs;
    writer: SWrt;
  },
  S extends IFileAdaptorCollection<SParams> = IFileAdaptorCollection<SParams>,
  APrs extends IParser = IParser,
  AWrt extends IWriter = IWriter,
  APtc extends IPatcher = IPatcher,
  AParams extends { writer: IWriter; parser: IParser; patcher: IPatcher } = {
    parser: APrs;
    writer: AWrt;
    patcher: APtc;
  }
> {
  serializersParser: SPrs;
  serializersWriter: SWrt;
  serializersParams: SParams;
  serializers: S;
  adaptorsParser: APrs;
  adaptorsWriter: AWrt;
  adaptorsPatcher: APtc;
  adaptorsParams: AParams;
}

/**
 * Default specification of the base types passed to subclasses /
 * subdependencies.
 *
 * In other words, if there's a subdependency (class or instance of another
 * class injected into constructor) to which types are passed for inferrence,
 * these are the types that will be passed by default.
 *
 * These types must extends the types defined in ClassTypeParamBase.
 */
interface TypeParams<
  SPrs extends TypeParamsBase['serializersParser'] = JsonYamlSerializerParser,
  SWrt extends TypeParamsBase['serializersWriter'] = JsonYamlSerializerWriter,
  SParams extends TypeParamsBase['serializersParams'] = {
    parser: SPrs;
    writer: SWrt;
  },
  S extends TypeParamsBase['serializers'] = FileAdaptorCollection<SParams>,
  APrs extends TypeParamsBase['adaptorsParser'] = (
    paths: string[],
    options?: AnyObj,
  ) => JsonYamlExtractItem[],
  AWrt extends TypeParamsBase['adaptorsWriter'] = (
    data: { path: string; data: any }[],
    options?: AnyObj,
  ) => void,
  APtc extends TypeParamsBase['adaptorsPatcher'] = (
    extracts: JsonYamlExtractItem[],
    options?: AnyObj,
  ) => void,
  AParams extends { writer: IWriter; parser: IParser; patcher: IPatcher } = {
    parser: APrs;
    writer: AWrt;
    patcher: APtc;
  }
> extends TypeParamsBase {
  serializersParser: SPrs;
  serializersWriter: SWrt;
  serializersParams: SParams;
  serializers: S;
  adaptorsParser: APrs;
  adaptorsWriter: AWrt;
  adaptorsPatcher: APtc;
  adaptorsParams: AParams;
}

/**
 * Shorthand for TypeParamsBase
 */
export type TPB = TypeParamsBase;

/**
 * Shorthand for partial TypeParamsBase
 */
export type PTPB = Partial<TPB>;

/**
 * Shorthand for TypeParams
 */
export type TP = TypeParams;

/**
 * Shorthand for partial TypeParams
 */
export type PTP = Partial<TP>;

type WriteDataOptions = object &
  Parameters<typeof fs.mkdirSync>[1] &
  Parameters<typeof fs.writeFileSync>[2];

export interface Options<
  Params extends PTPB = PTP,
  T extends TPB = Params extends infer X ? DefaultProps<AsObject<X>, TP> : never
> extends WriteDataOptions {
  locale?: string | AnyFunc;
  yaml?: boolean;
  json?: boolean;
  serializers?: T['serializers'];
  writerOptions?: Parameters<T['serializersWriter']>[1];
  parserOptions?: Parameters<T['serializersParser']>[1];
  patcherOptions?: Parameters<T['serializersParser']>[1] &
    Parameters<T['serializersWriter']>[1];
}

export interface JsonYamlExtractItemCtorOptions extends ExtractItemCtorOptions {
  rootIsArray?: boolean;
}

export class JsonYamlExtractItem extends ExtractItem {
  rootIsArray?: boolean;
  constructor(options: JsonYamlExtractItemCtorOptions) {
    super(options);
    this.rootIsArray = options.rootIsArray ?? false;
  }
}

export class JsonYamlFileAdaptor<
  Params extends PTPB = PTP,
  T extends TPB = Params extends infer X ? DefaultProps<AsObject<X>, TP> : never
>
  implements
    Omit<IFileAdaptorItemMethods<T['adaptorsParams']>, 'patterns' | 'options'> {
  serializers: T['serializers'];

  constructor(public options: Options<T> = {}) {
    const parsedOpts = merge({}, JsonYamlFileAdaptor.getDefaults<T>(), options);
    this.serializers = parsedOpts.serializers;
  }

  /**
   * Normalize i18n block from xmlParser.
   *
   * Returns copy of the original block.
   *
   * Fetches block content if the block has `src` attribute and filepath is given
   */
  readBlocks(filepath: string, options: Options<T> = {}) {
    debug(`Reading file '${filepath}'`);
    const content = fs.readFileSync(filepath, 'utf-8');

    const serializer = this.resolveSerializer(filepath, options) || {};
    JsonYamlFileAdaptor.validateSerializerMethod<T>(serializer, 'parser');

    const parserOpts = merge({}, serializer.options, options.parserOptions);
    const i18n = serializer.methods.parser!(content, parserOpts);

    // In case the top-level data is an array, normalize to array.
    // Return empty array if i18n is undefined.
    const rootIsArray = Array.isArray(i18n);
    const i18nArr = Array.isArray(i18n) ? i18n : i18n ? [i18n] : [];

    // Wrap the content with metadata
    return i18nArr.map((block) => ({
      value: block as { [key: string]: any },
      source: filepath,
      rootIsArray,
    }));
  }

  parseBlock<B extends AnyObj & { value: AnyObj }>(
    block: B,
    options: Options<T> = {},
  ) {
    debug(`Parsing file '${block.source}'`);
    const { locale } = options;
    // If locale is a function, the function should transform data such that
    // they are locale-scoped.
    const contentByLocales = isFunc(locale)
      ? locale(block, options)
      : locale
      ? { [locale]: block.value }
      : block.value;
    debug(
      "Locales found: '" + Object.keys(contentByLocales).join("', '") + "'",
    );
    return Object.entries(contentByLocales).map(
      ([locale, content]: [string, any]) => ({
        ...block,
        value: content,
        locale,
      }),
    );
  }

  /**
   * Extracts and merges data from i18n tags (<i18n></i18n>) from files specified
   * by the glob patterns.
   *
   * Returns two objects:
   * - `value` - the object with merged values
   * - `origin` - same object as `value`, but its values are objects describing
   *   which file and i18n tag supplied to given value
   *
   * Throws if multiple objects parsed from globbed files try to define the same
   * property. In other words, each value must have a unique path (e.g.
   * obj.x.y.z).
   */
  parser(filepaths: string[], options: Options<T> = {}): JsonYamlExtractItem[] {
    const parsedOptions = merge({}, JsonYamlFileAdaptor.getDefaults(), options);

    const nestedFragments = filepaths.map((filepath) =>
      this.readBlocks(filepath, parsedOptions)
        // provide way to specify by a function what should be the locale of the block
        // otherwise assume that the files includes multiple locales
        .map((block) => this.parseBlock(block, parsedOptions))
        .map((blocksByLocales, blockIndex) =>
          blocksByLocales.map((block) =>
            extractFromObject(block.value, { ...block, blockIndex }),
          ),
        ),
    );
    return flattenDeep(nestedFragments);
  }

  writer(data: { path: string; data: any }[], options: Options<T> = {}) {
    const parsedOptions = merge({}, JsonYamlFileAdaptor.getDefaults(), options);

    const dataToWrite = data.map(({ path: filepath, data }) => {
      const serializer = this.resolveSerializer(filepath, parsedOptions) || {};
      JsonYamlFileAdaptor.validateSerializerMethod<T>(serializer, 'writer');

      const writerOpts = merge({}, serializer.options, options.writerOptions);
      const serializedData = serializer.methods.writer!(data, writerOpts);

      return { data: serializedData, path: filepath };
    });
    JsonYamlFileAdaptor.writeData(dataToWrite, options);
  }

  patcher(extracts: JsonYamlExtractItem[], options: Options<T>) {
    const parsedOptions = merge({}, JsonYamlFileAdaptor.getDefaults(), options);

    const filepaths = extracts.map((e) => e.source);
    const staleExtracts = this.parser(filepaths, options);
    const updatedExtracts = unionBy(extracts, staleExtracts, (extract) =>
      extract.idHash(),
    );
    const extractBySourceAndIndex = mapValues(
      groupBy(updatedExtracts, 'source'),
      (sourceExtracts) => groupBy(sourceExtracts, 'blockIndex'),
    );

    const dataToWrite = Object.entries(extractBySourceAndIndex).map(
      ([source, extractByIndex]) => {
        const dataBlocks = Object.entries(extractByIndex)
          .map(([index, blockExtracts]) => ({
            index: Number.parseInt(index),
            data: objectFromExtracts(blockExtracts),
          }))
          .sort((a, b) => a.index - b.index)
          .map(({ data }) => data);

        const isRootArray = staleExtracts[0].rootIsArray;
        const data =
          dataBlocks.length > 1
            ? dataBlocks
            : isRootArray
            ? dataBlocks
            : dataBlocks[0];

        const serializer = this.resolveSerializer(source, parsedOptions) || {};
        JsonYamlFileAdaptor.validateSerializerMethod<T>(serializer, 'writer');

        const serializedData = serializer.methods.writer!(data);
        return { data: serializedData, path: source };
      },
    );
    JsonYamlFileAdaptor.writeData(dataToWrite, options);
  }

  resolveSerializer(filepath: string, options: Options<T>) {
    const serializer = this.serializers.resolve(path.basename(filepath))!;

    // Do not write the file if it's not among the allowed formats
    if (!options[serializer.name as 'json' | 'yaml']) {
      throw Error(
        `Cannot proceed. File's format is either not ` +
          `supported or not enabled: ${filepath}`,
      );
    }
    return serializer;
  }

  static writeData(
    writeEntries: {
      path: fs.PathLike;
      data: Parameters<typeof fs.writeFileSync>[1];
    }[],
    options: WriteDataOptions = {},
  ) {
    for (const { path: filepath, data } of writeEntries) {
      debug(`Writing file '${filepath}'`);
      fs.mkdirSync(filepath, { recursive: true, ...options });
      fs.writeFileSync(filepath, data, options);
    }
  }

  static validateSerializerMethod<
    Params extends PTPB = PTP,
    T extends TPB = Params extends infer X
      ? DefaultProps<AsObject<X>, TP>
      : never
  >(
    serializer: INamedFileAdaptorItem<T['serializersParams']>,
    method: keyof IFileAdaptorItemMethods<T['serializersParams']>,
  ) {
    if (!serializer.methods[method]) {
      throw Error(
        `Internal serializer ${serializer.name}' is ` +
          `missing method '${method}'.`,
      );
    }
  }

  static getDefaults<
    Params extends PTPB = PTP,
    T extends TPB = Params extends infer X
      ? DefaultProps<AsObject<X>, TP>
      : never
  >() {
    return {
      yaml: true,
      json: true,
      serializers: new FileAdaptorCollection({
        collection: {
          json: {
            patterns: [/json/iu],
            methods: {
              parser: (data, opts) => JSON.parse(data, opts),
              writer: (data, opts) => JSON.stringify(data, opts),
            },
          },
          yaml: {
            patterns: [/ya?ml/iu],
            methods: {
              parser: (data, opts) => yaml.safeLoad(data, opts),
              writer: (data, opts) => yaml.safeDump(data, opts),
            },
          },
        },
      }) as T['serializers'],
    };
  }
}
