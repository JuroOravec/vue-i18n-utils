import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';
import flattenDeep from 'lodash.flattendeep';
import merge from 'lodash.merge';
import groupBy from 'lodash.groupby';

import type { AnyObj } from '../../../types';
import type {
  ISerializerCollection,
  IAdaptorCollection,
} from '../../collection/types';
import type { IAdaptorJsonYaml as IAdaptorJY } from './types';
import type { I_Item } from '../../item/types';
import { SerializerCollection, MethodCollection } from '../../collection';
import { DefinitionItem, DefinitionArray } from '../../definition';
import { safeWrite } from '../../util/fs';
import { ContentGroup, IContentGroup } from '../../content-group';
import { ContentBlock } from '../../content-block';
import { ContentFormatter } from '../../content-formatter';
import { PathFormatter } from '../../path-formatter';
import { jyDebug as debug } from '../../util/debug';

export type FileSystem = typeof fs;

export class JsonYamlDefinitionItem extends DefinitionItem
  implements IAdaptorJY.DefinitionItem {
  rootIsArray?: boolean;
  constructor(options: IAdaptorJY.DefinitionItemCtorOptions) {
    super(options);
    this.rootIsArray = options.rootIsArray ?? false;
  }
}

export interface JsonYamlContentGroup {
  constructor: typeof JsonYamlContentGroup;
}

export class JsonYamlContentGroup extends ContentGroup {
  logger: (msg: string) => void;

  constructor(options: IAdaptorJY.ContentGroupCtorOptions = {}) {
    const parsedOpts = merge({}, JsonYamlAdaptor.defaults, options);
    const { content, logger, ...opts } = parsedOpts;
    super(opts);

    const {
      logger: fallbackLogger,
      contentBlockClass: ContentBlock,
    } = this.constructor.defaults;

    this.blocks = [];
    this.logger = logger || fallbackLogger;

    if (content) {
      const {
        name,
        methods: { deserializer = null, serializer = null } = {},
        options: serOpts = {},
      } =
        JsonYamlAdaptor.resolveSerializer(
          this.serializers!,
          this.filepath ?? 'json',
          parsedOpts,
        ) || {};
      this.serializers?.validateMethod(name!, 'deserializer');
      this.serializers?.validateMethod(name!, 'serializer');
      this.logger(
        `Parsing content of file '${this.filepath}' with serializer '${name}'`,
      );
      const data = deserializer!(content, serOpts);

      // In case the top-level data is (not) an array, normalize to array and
      // remember the state.
      const rootIsArray = Array.isArray(data);
      const dataArr = Array.isArray(data) ? data : data ? [data] : [];

      this.blocks = dataArr.map((dataBlock, index) => {
        const block = new ContentBlock({
          serializers: this.serializers,
          filepath: this.filepath,
          content: serializer!(dataBlock, serOpts),
          attributes: {
            lang: name!,
            rootIsArray,
            blockIndex: index,
          },
        });
        block.virtualContent = dataBlock;
        return block;
      });
    }
  }

  static fromFile(
    filepath: string,
    options: IContentGroup.CtorOptions &
      Extract<Parameters<typeof fs.readFileSync>[1], object> = {},
  ) {
    this.defaults.logger(`Reading file '${filepath}'`);
    const content = fs.existsSync(filepath)
      ? (fs.readFileSync(filepath, {
          encoding: 'utf-8',
          ...options,
        }) as string)
      : '';
    return new this({ ...options, filepath, content });
  }

  static get defaults() {
    return {
      ...super.defaults,
      logger: debug,
      contentBlockClass: ContentBlock,
    };
  }
}

export interface JsonYamlAdaptor {
  constructor: typeof JsonYamlAdaptor;
}

export class JsonYamlAdaptor implements IAdaptorCollection.ItemMethods {
  name = 'json-yaml';
  serializers: ISerializerCollection.Collection;
  logger: (msg: string) => void;

  constructor(public options: IAdaptorJY.CollectionCtorOptions = {}) {
    const parsedOpts = merge({}, this.constructor.defaults, options);
    this.serializers =
      parsedOpts.serializers instanceof MethodCollection
        ? parsedOpts.serializers
        : new SerializerCollection({ collection: parsedOpts.serializers });
    this.logger = options.logger || this.constructor.defaults.logger;
  }

  /**
   * JSON and YAML files are not analyzed for usage, so this method returns
   * an empty array.
   */
  usageAnalyzer(...args: any[]) {
    return [];
  }

  /**
   * Definitions data from i18n tags (<i18n>) from files.
   */
  parser(
    filepaths: string[],
    options: IAdaptorJY.ParserOptions = {},
  ): JsonYamlDefinitionItem[] {
    const {
      contentGroupClass: ContentGroup,
      itemClass: Item,
      itemArrayClass: ItemArray,
    } = this.constructor.defaults;

    const parsedOptions = merge({}, this.constructor.defaults, options);
    const { locale, pathFormatter } = parsedOptions;

    const nestedFragments = filepaths.map((filepath) =>
      ContentGroup.fromFile(filepath, parsedOptions).blocks.map((block) => {
        this.logger(`Parsing file '${block.filepath}'`);
        const currLocale = locale ?? pathFormatter.localeFromPath(filepath);
        this.logger(`File locale: '${currLocale}'`);
        const contentByLocales = currLocale
          ? { [currLocale]: block.virtualContent }
          : block.virtualContent;
        this.logger(
          "Locales found: '" + Object.keys(contentByLocales).join("', '") + "'",
        );
        return Object.entries(contentByLocales).map(
          ([locale, value]: [string, any]) =>
            ItemArray.fromObject<
              JsonYamlDefinitionItem,
              Partial<IAdaptorJY.DefinitionItemCtorOptions>
            >(value, {
              ...options,
              ...block.attributes,
              source: block.filepath,
              sourceScope: currLocale ? 'locale' : 'general',
              locale,
              origin: this.name,
              itemClass: Item as any,
            }).items,
        );
      }),
    );
    return flattenDeep(nestedFragments);
  }

  /**
   * Removes i18n files.
   */
  remover(filepaths: string[], options: IAdaptorJY.RemoverOptions = {}) {
    const { abortOnError } = merge({}, this.constructor.defaults, options);
    safeWrite(options, ({ unlinkSync }) => {
      for (const filepath of filepaths) {
        try {
          this.logger(`Removing file '${filepath}'`);
          unlinkSync(filepath);
        } catch (e) {
          this.logger(`Failed to remove file '${filepath}'. Reason: '${e}'`);
          if (abortOnError) throw e;
        }
      }
    });
  }

  /**
   * Writes content to files based on the DefinitionItems given.
   */
  writer(
    definitions: JsonYamlDefinitionItem[],
    options: IAdaptorJY.WriterOptions = {},
  ) {
    const {
      contentGroupClass: ContentGroup,
      contentBlockClass: ContentBlock,
      itemArrayClass: ItemArray,
    } = this.constructor.defaults;

    const parsedOptions = merge({}, this.constructor.defaults, options);
    const {
      abortOnError,
      locale,
      contentFormatter,
      pathFormatter,
      fileMatchLocale,
      simple = true,
    } = parsedOptions;

    // Fix the mismatch if a definition is scoped to a particular locale, but
    // the file is scoped to a different locale.
    // This happens e.g. with I18nUtil.addLocale, when the new definitions are
    // associated with new locale, but the filepath still points to the file
    // that harbours the translations specific to the locale from which the
    // definitions were copied.
    if (fileMatchLocale) {
      definitions.forEach((item) => {
        if (
          item.sourceScope === 'locale' &&
          item.locale &&
          pathFormatter.localeFromPath(item.source) !== item.locale
        ) {
          item.source = pathFormatter.changeLocale(item.source, item.locale);
        }
      });
    }

    const definitionsByFilepaths = this._groupBySource(definitions);

    safeWrite(options, (fileSys) => {
      for (const [filepath, data] of Object.entries(definitionsByFilepaths)) {
        const lang = path.extname(filepath).slice(1);

        const contentGroup = fs.existsSync(filepath)
          ? ContentGroup.fromFile(filepath, options)
          : new ContentGroup({
              serializers: this.serializers,
              filepath,
            });

        const { matched, prepend, append } = contentGroup.resolveItems(
          data,
          options,
        );

        const rootIsArray =
          contentGroup.length > 1
            ? true
            : contentGroup.length
            ? contentGroup.blocks[0].attributes.rootIsArray
            : data.find((item) => item.rootIsArray !== undefined)?.rootIsArray;

        // Go over the items that matched against existing blocks, and update
        // their contents, or remove them if no item matched.
        contentGroup.blocks.forEach((block) => {
          const itemsToApply = matched.get(block);
          // Skip if we have no items
          if (!itemsToApply || !itemsToApply.length) {
            // If we came across a block but there's no data to be written
            // to it, remove the block.
            contentGroup.remove(block);
            return;
          }
          const serializedContent = block.serializeItems(itemsToApply, options);
          block.content = contentFormatter.formatContent(serializedContent);
          block.virtualContent = undefined;
        });

        // Prepend / append items
        for (const itemMap of [prepend, append]) {
          const position = itemMap === prepend ? 'prepend' : 'append';
          for (const [itemLocale, items] of itemMap) {
            const block = new ContentBlock({
              attributes: {
                lang,
                rootIsArray,
                // '*' as locale means the items are not locale-scoped
                ...(itemLocale !== '*' ? { locale: itemLocale } : {}),
              },
              serializers: contentGroup.serializers,
              filepath,
            });
            contentGroup.insert(block, { position });
            block.virtualContent = ItemArray.toObject(items, {
              ...parsedOptions,
              simple,
            });
          }
        }

        const contentData = contentGroup.blocks.map((block) => {
          const currLocale =
            locale ??
            (block.filepath
              ? pathFormatter.localeFromPath(block.filepath)
              : undefined);
          const vContent = block.getVirtualContent();
          return currLocale ? vContent[currLocale] : vContent;
        });

        const content = rootIsArray ? contentData : contentData[0];
        const serContent = this._serialize(filepath, content, parsedOptions);
        const formattedContent = contentFormatter.formatGroup(serContent || '');
        // Overwrite the files with the updated content
        this._write(filepath, formattedContent, {
          fs: fileSys as FileSystem,
          abortOnError,
        });
      }
    });
  }

  _groupBySource<T extends I_Item.Item>(items: T[]) {
    return groupBy(items, (item) => {
      if (!item.source) {
        const isString = typeof item.source === 'string';
        const itemSource = isString ? `'${item.source}'` : item.source;
        throw Error(
          'Invalid definition item passed to writer. Each item ' +
            `must have 'source', got ${itemSource} instead`,
        );
      }
      return item.source;
    });
  }

  _serialize(filepath: string, content: any, options: any) {
    const serializer = this.constructor.resolveSerializer(
      this.serializers,
      filepath,
      options,
    );
    this.serializers.validateMethod(serializer.name, 'serializer');
    const serializerOpts = merge({}, serializer.options, options);
    const serializedContent = serializer.methods.serializer!(
      content,
      serializerOpts,
    );
    return serializedContent;
  }

  _write(
    filepath: string,
    content: string | Buffer,
    options: {
      fs?: Pick<FileSystem, 'writeFileSync' | 'writeFile'>;
      abortOnError?: boolean;
    } = {},
  ) {
    const { fs: fileSys = fs, abortOnError } = options;
    try {
      this.logger(`Updating file '${filepath}'`);
      fileSys.writeFileSync(filepath, content, { encoding: 'utf-8' });
    } catch (e) {
      this.logger(`Failed to update file '${filepath}'. Reason: '${e}'`);
      if (abortOnError) throw e;
    }
  }

  static resolveSerializer(
    serializers: ISerializerCollection.Collection,
    filepath: string,
    options: AnyObj,
  ) {
    const serializer = serializers.resolve(path.basename(filepath))! || {};
    const parsedOpts = merge({}, this.defaults, options);

    // Do not write the file if it's not among the allowed formats
    if (!parsedOpts[serializer.name as 'json' | 'yaml']) {
      throw Error(
        `Cannot proceed. File's format is either not ` +
          `supported or not enabled: '${filepath}'`,
      );
    }
    return serializer;
  }

  static get defaults() {
    return {
      yaml: true,
      json: true,
      abortOnError: true,
      fileMatchLocale: true,
      contentFormatter: new ContentFormatter(),
      pathFormatter: new PathFormatter(),
      serializers: new SerializerCollection({
        collection: {
          json: {
            patterns: [/json/iu],
            methods: {
              deserializer: (data, opts) => JSON.parse(data, opts.reviver),
              serializer: (data, opts) =>
                JSON.stringify(data, opts.replace, opts.space),
            },
          },
          yaml: {
            patterns: [/ya?ml/iu],
            methods: {
              deserializer: (data, opts) => yaml.safeLoad(data, opts),
              serializer: (data, opts) => yaml.safeDump(data, opts),
            },
          },
        },
      }),
      logger: debug,
      itemArrayClass: DefinitionArray,
      itemClass: JsonYamlDefinitionItem,
      contentGroupClass: JsonYamlContentGroup,
      contentBlockClass: ContentBlock,
    };
  }
}
