import flattenDeep from 'lodash.flattendeep';
import groupBy from 'lodash.groupby';
import merge from 'lodash.merge';
import { promises as fsp } from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { parseVueFiles } from 'vue-i18n-extract';

import type { I_I18nUtil } from '../../i18n-util/types';
import type { IContentBlock } from '../../content-block';
import type {
  IAdaptorCollection,
  ISerializerCollection,
} from '../../collection/types';
import type { I_Item } from '../../item/types';
import type { IHTMLContentBlock } from './content-block-html';
import { ContentGroup, IContentGroup } from '../../content-group';
import { SerializerCollection, MethodCollection } from '../../collection';
import { GlobPathResolver } from '../../resolver';
import { UsageItem } from '../../usage';
import { DOMContentGroup } from './content-group-dom';
import { IVueDefinitionItem, VueDefinitionArray } from './vue-definition';
import { safeWrite, ISafeWriteOptions } from '../../util/fs';
import { ContentFormatter, IContentFormatter } from '../../content-formatter';
import { PathFormatter, IPathFormatter } from '../../path-formatter';
import { vueDebug as debug } from '../../util/debug';
import { pMap } from '../../util/array';

export namespace IAdaptorVue {
  export interface LoadBlockOptions {
    filepath?: string;
  }

  export interface ReadBlocksOptions {
    invalidPathOk?: boolean;
  }

  export interface WriteOptionsBase {
    abortOnError?: boolean;
    contentFormatter?: IContentFormatter.ContentFormatter;
  }

  export type ParserOptions = I_Item.ItemsByLocaleOptions & ReadBlocksOptions;
  export type Parser = I_I18nUtil.Parser<ParserOptions>;
  export type ParserParams = Parameters<Parser>;
  export type ParserReturn = ReturnType<Parser>;

  export type UsageAnalyzerOptions = {};
  export type UsageAnalyzer = I_I18nUtil.UsageAnalyzer<UsageAnalyzerOptions>;
  export type UsageAnalyzerParams = Parameters<UsageAnalyzer>;
  export type UsageAnalyzerReturn = ReturnType<UsageAnalyzer>;

  export type WriteOptions = WriteOptionsBase &
    I_Item.ItemsByLocaleOptions &
    ISafeWriteOptions &
    Pick<IContentGroup.ResolveItemsOptions, 'localeGeneral'> &
    IContentGroup.ResolveItemsOptions & {
      lang?: 'json' | 'yaml';
      explicitLang?: boolean;
      /**
       * If a definition item is locale-scoped, and the definitions are in
       * a linked file, which is scoped to a different locale, whether the
       * filename should be updated to match the item's locale.
       *
       * This happens e.g. with `I18nUtil.addLocale`, when the new definitions are
       * associated with new locale, but the `link` attr still points to the file
       * that harbours the translations specific to the locale from which the
       * definitions were copied.
       */
      fileMatchLocale?: boolean;
      /**
       * Instance of PathFormatter used for detecting locale in filename of
       * linked files.
       */
      pathFormatter?: IPathFormatter.PathFormatter;
    };
  export type Writer = I_I18nUtil.Writer<WriteOptions>;
  export type WriterParams = Parameters<Writer>;
  export type WriterReturn = ReturnType<Writer>;

  export type RemoverOptions = ISafeWriteOptions & WriteOptionsBase;
  export type Remover = I_I18nUtil.Remover<RemoverOptions>;
  export type RemoverParams = Parameters<Remover>;
  export type RemoverReturn = ReturnType<Remover>;
}

export class VueAdaptor implements IAdaptorCollection.ItemMethods {
  name = 'vue';
  serializers: ISerializerCollection.Collection;

  constructor(
    public options: {
      /**
       * Collection instance with serializers to be used instead of the default
       */
      serializers?: ISerializerCollection.CtorOptions['collection'];
    } = {},
  ) {
    const parsedOpts = merge({}, VueAdaptor.defaults, options);
    this.serializers =
      parsedOpts.serializers instanceof MethodCollection
        ? parsedOpts.serializers
        : new SerializerCollection({ collection: parsedOpts.serializers });
  }

  /**
   * Definition information on what translation keys are used in Vue files
   */
  usageAnalyzer(
    ...[filepaths, options = {}]: IAdaptorVue.UsageAnalyzerParams
  ): IAdaptorVue.UsageAnalyzerReturn {
    const globPattern = GlobPathResolver.join(filepaths);
    return parseVueFiles(globPattern).map(
      ({ file, line, path: msgPath, language }) =>
        new UsageItem({
          source: file ? path.join(process.cwd(), file) : file,
          locale: language,
          line,
          path: msgPath.split('.'),
          origin: this.name,
        }),
    );
  }

  /**
   * Definitions and merges data from i18n tags from Vue files.
   */
  async parser(
    ...[filepaths, options = {}]: IAdaptorVue.ParserParams
  ): Promise<IAdaptorVue.ParserReturn> {
    const { missingValue, includeMissing } = options;
    const nestedFragments = await pMap(filepaths, async (filepath) => {
      const blocks = await this.readBlocks(filepath);

      return pMap(blocks, async ({ block, ...rest }) => {
        debug(`Parsing block from '${filepath}'`);

        const content = await this.loadBlock(block, { ...options, filepath });
        const { locale, src } = block.attributes;
        const contentByLocales = content
          ? locale
            ? { [locale]: content }
            : content
          : {};

        // Convert the blocks to DefinitionItems
        return Object.entries(contentByLocales).map(
          ([locale, value]: [string, any]) =>
            VueDefinitionArray.fromObject(value, {
              ...rest,
              locale,
              source: filepath,
              sourceScope: locale ? 'locale' : 'general',
              origin: this.name,
              link: src ? block.source : undefined,
              missingValue,
              includeMissing,
            }).items,
        );
      });
    });

    debug(`Done parsing files`);
    return flattenDeep(nestedFragments);
  }

  /**
   * Writes data from to i18n tags in Vue files.
   */
  async writer(
    ...[definitions, options]: IAdaptorVue.WriterParams
  ): Promise<IAdaptorVue.WriterReturn> {
    const {
      abortOnError,
      lang,
      explicitLang,
      contentFormatter,
      pathFormatter,
      fileMatchLocale,
      localeGeneral,
    } = merge({}, ContentGroup.defaults, VueAdaptor.defaults, options);
    const langAttr:
      | {}
      | { lang: NonNullable<IAdaptorVue.WriteOptions['lang']> } =
      !explicitLang && lang === VueAdaptor.defaults.lang ? {} : { lang };
    options?.localeGeneral;

    const definitionsByFilepaths = groupBy(definitions, (item) => {
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

    // Fix the mismatch if a definition is scoped to a particular locale, but
    // the file linked to it by `src` attribute is scoped to a different
    // locale.
    // This happens e.g. with I18nUtil.addLocale, when the new definitions are
    // associated with new locale, but the `link` attr still points to the file
    // that harbours the translations specific to the locale from which the
    // definitions were copied.
    if (fileMatchLocale) {
      await pMap(definitions as IVueDefinitionItem[], async (item) => {
        if (
          item.sourceScope === 'locale' &&
          item.locale &&
          item.locale !== localeGeneral &&
          item.link &&
          (await pathFormatter.localeFromPath(item.link)) !== item.locale
        ) {
          item.link = await pathFormatter.changeLocale(item.link, item.locale);
        }
      });
    }

    return safeWrite(options, async ({ promises: { writeFile } }) =>
      pMap(Object.entries(definitionsByFilepaths), async ([filepath, data]) => {
        // Since vue-i18n allows to include i18n tags that load data from
        // another file, we want to capture these so we can update those files
        // later
        const sourcesToUpdate: {
          src: string;
          content?: string;
        }[] = [];

        const domContent = await DOMContentGroup.fromFile(filepath, {
          invalidPathOk: true,
          serializers: this.serializers,
          filepath,
        });
        const { matched, prepend, append } = await domContent.resolveItems(
          data,
          options,
        );

        // Go over the items that matched against existing blocks, and update
        // their contents, or remove them if no item matched.
        await pMap(domContent.blocks, async (block) => {
          const itemsToApply = matched.get(block);
          const isI18nTag = await block.isElement('i18n');

          // Skip if we have no items
          if (!itemsToApply || !itemsToApply.length) {
            // If we came across a i18n tag but there's no data to be written
            // to it, remove the block. This should also remove the file linked
            // to the block via 'src' attribute
            if (isI18nTag) await domContent.remove(block);
            return;
          }

          // Bail if try to modify other than i18n tag
          if (!isI18nTag) {
            throw Error(
              'Tried to overwrite non-i18n parts of a file. If this was not ' +
                "intentional, check that the 'blockIndex' is correct and " +
                'that the file has not been modified since being parsed.\n' +
                `Triggered  by items:\n${JSON.stringify(data, null, 2)}`,
            );
          }

          const serializedContent = await block.serializeItems(
            itemsToApply,
            options,
          );
          const formattedContent = await contentFormatter.formatContent(
            serializedContent,
          );

          const link = await block.srcFromItems(itemsToApply);
          if (link) {
            sourcesToUpdate.push({
              src: block.source!,
              content: formattedContent,
            });
          } else if (block.attributes.src) {
            await block.removeSource();
            await block.removeAttribute('src');
          }
          block.content = link
            ? contentFormatter.emptyContent
            : formattedContent;
        });

        // Prepend and append items
        for (const itemMap of [prepend, append]) {
          const position = itemMap === prepend ? 'prepend' : 'append';
          for (const [locale, items] of itemMap) {
            // If any of the items specifies the definition as being linked to
            // a file, move all items of the current set to that file.

            await domContent.insertText({
              text: contentFormatter.beforeBlock,
              position,
            });
            const block = await domContent.insertElement({
              position,
              attributes: {
                ...langAttr,
                // value of `localeGeneral` as locale means the items are not
                // locale-scoped
                ...(locale !== localeGeneral ? { locale } : {}),
              },
            });
            const link = await block.srcFromItems(items);

            const serializedContent = await block.serializeItems(
              items,
              options,
            );
            const formattedContent = await contentFormatter.formatContent(
              serializedContent,
            );

            block.content = link
              ? contentFormatter.emptyContent
              : formattedContent;

            await domContent.insertText({
              text: contentFormatter.afterBlock,
              position,
            });

            if (link) {
              sourcesToUpdate.push({
                src: block.source!,
                content: await contentFormatter.formatGroup(formattedContent),
              });
            }
          }
        }

        // Add the modified dom to the files to be updated
        sourcesToUpdate.push({
          src: filepath,
          content: await contentFormatter.formatGroup(domContent.content),
        });

        // Overwrite the files with the updated content
        return pMap(sourcesToUpdate, async ({ src, content }) => {
          try {
            debug(`Updating file '${src}'`);
            await writeFile(src, content || '', { encoding: 'utf-8' });
          } catch (e) {
            debug(`Failed to update file '${src}'. Reason: '${e}'`);
            if (abortOnError) throw e;
          }
        });
      }),
    );
  }

  /**
   * Removes i18n data from Vue files.
   */
  remover(
    ...[filepaths, options]: IAdaptorVue.RemoverParams
  ): Promise<IAdaptorVue.WriterReturn> {
    const { abortOnError, contentFormatter } = merge(
      {},
      VueAdaptor.defaults,
      options,
    );

    return safeWrite(options, async ({ promises: { writeFile, unlink } }) =>
      pMap(filepaths, async (filepath) => {
        const domContent = await DOMContentGroup.fromFile(filepath, {
          invalidPathOk: true,
          serializers: this.serializers,
          filepath,
        });

        // Go over content existing blocks, and remove i18n tags.
        await pMap(domContent.blocks, async (block) => {
          const isI18nTag = await block.isElement('i18n');
          if (isI18nTag) await block.remove(domContent);
        });

        const content = domContent.content;

        const action = content.trim() ? 'update' : 'remove';

        try {
          if (action === 'remove') {
            debug(`Removing file '${filepath}'`);
            await unlink(filepath);
          } else {
            debug(`Updating file '${filepath}'`);
            const formattedContent = await contentFormatter.formatGroup(
              domContent.content || '',
            );
            await writeFile(filepath, formattedContent, { encoding: 'utf-8' });
          }
        } catch (e) {
          debug(`Failed to ${action} file '${filepath}'. Reason: '${e}'`);
          if (abortOnError) throw e;
        }
      }),
    );
  }

  /**
   * Read Vue file and return the content blocks found in it.
   *
   * The content of the blocks is not evaluated.
   *
   * Fetches block content if the block has `src` attribute and filepath is
   * given
   */
  async readBlocks(
    filepath: string,
    options: IAdaptorVue.ReadBlocksOptions = {},
  ) {
    const domContent = await DOMContentGroup.fromFile(filepath, {
      ...options,
      filepath,
    });
    const i18n: { block: IHTMLContentBlock; blockIndex: number }[] = [];
    await pMap(domContent.blocks, async (block, index) => {
      // Filter for the i18n tags and preserve info on the element's position
      const isI18nTag = await block.isElement('i18n');
      if (!isI18nTag) return;
      i18n.push({ block, blockIndex: index! });
    });
    return i18n;
  }

  async loadBlock(
    block: IContentBlock.ContentBlock,
    opts: IAdaptorVue.LoadBlockOptions,
  ) {
    const { filepath } = merge({}, VueAdaptor.defaults, opts);
    const { src, lang = 'json' } = block.attributes;
    // Fetch data from another file if `src` attribute is provided
    const text: string =
      src && filepath
        ? await fsp.readFile(path.resolve(filepath, '..', src), 'utf-8')
        : block.content;

    // Parse contents based on lang and whether content is scope to
    // particular locale or not
    const serializer = this.serializers.resolve(lang)!;
    const { options = {}, methods = {} } = serializer || {};
    if (!methods.deserializer) return;
    return methods.deserializer(text, options);
  }

  static get defaults() {
    return {
      lang: 'json',
      yaml: true,
      json: true,
      abortOnError: true,
      explicitLang: false,
      fileMatchLocale: true,
      contentFormatter: new ContentFormatter() as IContentFormatter.ContentFormatter,
      pathFormatter: new PathFormatter() as IPathFormatter.PathFormatter,
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
    };
  }
}
