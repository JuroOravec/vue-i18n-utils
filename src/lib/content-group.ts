import groupBy from 'lodash.groupby';
import get from 'lodash.get';
import merge from 'lodash.merge';

import type { IDefinition } from './definition/types';
import type { ISerializerCollection } from './collection/types';
import { ArrayMap } from './util/array-map';
import { IContentBlock } from './content-block';

export namespace IContentGroup {
  export interface ResolveItemsOptions {
    strategy?: 'add' | 'locale' | 'localeStrict' | 'general';
    matchByIndex?: boolean | 'strict';
    matchByContent?: boolean | 'strict';
    addPosition?: 'prepend' | 'append';
    addType?: 'general' | 'locale' | 'custom';
    query?: (
      block: IContentBlock.ContentBlock,
      index: number,
      arr: IContentBlock.ContentBlock[],
    ) => any;
    /**
     * String used to indicate that the definitions grouped under this string
     * are not limited to a single locale.
     */
    localeGeneral?: string;
  }

  export interface InsertOptions {
    position: 'prepend' | 'append';
  }

  export interface ContentGroup {
    /**
     * List of parts of the content that make up the content group.
     */
    blocks: IContentBlock.ContentBlock[];
    /**
     * Collection instance with serializers to be used instead of the default
     */
    serializers?: ISerializerCollection.Collection;
    /**
     * Path to the file from where the content originates. This string
     * is passed to all blocks.
     */
    filepath?: string;
    content: string;
    length: number;
    insert: (
      block: IContentBlock.ContentBlock,
      options: { position?: 'prepend' | 'append' },
    ) => IContentBlock.ContentBlock;
    remove: (
      block: IContentBlock.ContentBlock,
    ) => IContentBlock.ContentBlock | undefined;
    resolveItems: (
      definitions: IDefinition.Item[],
      options: ResolveItemsOptions,
    ) => {
      matched: Map<IContentBlock.ContentBlock, IDefinition.Item[]>;
      prepend: Map<string, IDefinition.Item[]>;
      append: Map<string, IDefinition.Item[]>;
    };
  }

  export interface CtorOptions {
    /**
     * Collection instance with serializers to be used instead of the default
     */
    serializers?: ISerializerCollection.Collection;
    /**
     * Path to the file from where the content originates. This string
     * is passed to all blocks.
     */
    filepath?: string;
  }
}

/**
 * CRUD interface between the items from I18nUtil and target files.
 **/
export class ContentGroup implements IContentGroup.ContentGroup {
  /**
   * List of parts of the content that make up the content group.
   */
  blocks: IContentBlock.ContentBlock[];
  /**
   * Collection instance with serializers to be used instead of the default
   */
  serializers?: ISerializerCollection.Collection;
  /**
   * Path to the file from where the content originates. This string
   * is passed to all blocks.
   */
  filepath?: string;

  constructor(options: IContentGroup.CtorOptions = {}) {
    const { serializers, filepath } = options;

    this.serializers = serializers;
    this.filepath = filepath;
    this.blocks = [];
  }

  /**
   * Concatenated content of the blocks
   */
  get content() {
    return this.blocks.map((b) => b.content).join('');
  }

  /**
   * Length of the blocks.
   */
  get length() {
    return this.blocks.length;
  }

  insert(
    block: IContentBlock.ContentBlock,
    options: { position?: 'prepend' | 'append' } = {},
  ) {
    const { position = 'append' } = options;

    // Add to the blocks list
    if (position === 'append') {
      this.blocks.push(block);
    } else if (position === 'prepend') {
      this.blocks.splice(0, 0, block);
    } else {
      const expectedPositions = ['prepend', 'append'].join("', '");
      throw Error(
        `Unknown insert position '${position}'. Position must be one of ` +
          +`'${expectedPositions}'`,
      );
    }

    return block;
  }

  remove(block: IContentBlock.ContentBlock) {
    const index = this.blocks.indexOf(block);
    if (index === -1) return;
    this.blocks.splice(index, 1);
    block.remove(this);
    return block;
  }

  /**
   * Given a list of DefinitionItems, resolve where should be each one applied
   * based on locale, paths, and selected merging strategies.
   *
   * `strategy`
   * - `'append'` - append these items after the appended items
   * - `'localeStrict'` - insert only if you come across a i18n tag with same locale, else append
   * - `'locale'` - insert to a i18n tag with same locale, or to general i18n tag, else append
   * - `'general'` - insert to general i18n tag, else append
   *
   * Additionally, the items can be resolved based on the content (locale and translation key).
   *
   * `matchStrategy`
   *  - `false` - if locale / localeString / general, insert data to first tag that came across, else append
   *  - `true` -  if locale / localeString / general, insert data to tag where at least one object matches the key path, else insert data to first tag that came across, else append
   *  - `'strict'` - insert data to tag where at least one object matches the key path, else append
   */
  resolveItems(
    definitions: IDefinition.Item[],
    options: IContentGroup.ResolveItemsOptions = {},
  ) {
    const {
      strategy,
      matchByIndex,
      matchByContent,
      addPosition,
      addType,
      query,
      localeGeneral,
    } = merge({}, ContentGroup.defaults, options) as Required<
      IContentGroup.ResolveItemsOptions
    >;

    const strategyIsLocale = ['localeStrict', 'locale'].includes(strategy);
    const strategyPermitsGeneral = ['locale', 'general'].includes(strategy);

    const blocksByLocale = new ArrayMap() as ArrayMap<
      string,
      IContentBlock.ContentBlock
    >;
    const blocksByPathHash = new ArrayMap() as ArrayMap<
      number,
      IContentBlock.ContentBlock
    >;
    const itemsByBlocks = new ArrayMap() as ArrayMap<
      IContentBlock.ContentBlock,
      IDefinition.Item
    >;

    // Sort content blocks based on whether relevant (i18n) elements and
    // whether are locale-scoped or not
    this.blocks.forEach((block, i, arr) => {
      if (!query(block, i, arr)) return;
      const { locale = localeGeneral } = block.attributes;
      blocksByLocale.push(locale, block);
    });

    const toLocale = [] as { locale: string; item: IDefinition.Item }[];
    const toGeneral = [] as { locale: string; item: IDefinition.Item }[];
    const toAdd = [] as { locale: string; item: IDefinition.Item }[];

    // Sort items based on whether they should be attempted to be inserted into
    // a locale-scoped block, general block, or pre-/appended
    definitions.forEach((item) => {
      const locale = item.locale ?? localeGeneral;

      if (matchByIndex) {
        if (item.blockIndex !== undefined && this.blocks[item.blockIndex]) {
          return itemsByBlocks.push(this.blocks[item.blockIndex], item);
        } else if (matchByIndex === 'strict') {
          return toAdd.push({ locale, item });
        }
      }

      if (strategy === 'add') return toAdd.push({ locale, item });

      const generalBlockExists = blocksByLocale.has(localeGeneral);
      const localeBlockExists =
        blocksByLocale.has(locale) && locale !== localeGeneral;

      // Push the item to correct resolution strategies:
      // - localeStrict -> add
      // - locale -> general -> add
      // - general -> add
      // - add
      const target =
        // If `localeStrict` OR `locale`, we want to try to add the item
        // to a content block with matching locale
        localeBlockExists && strategyIsLocale
          ? // Hence if the block with matching locale exists, push the
            // item to those that should be resolved at "locale" stage
            toLocale
          : // If `localeStrict`, we want to add the item ONLY EITHER to
          // a content block with matching locale, OR pre-/append it as a new
          // block.
          !localeBlockExists && strategy === 'localeStrict'
          ? // Hence if the there's no block with matching locale, push the
            // item to those that should be pre-/appended
            toAdd
          : // If the locale block does not exist, and strategy is EITHER
          // `general` or `locale`, we want to try to add the item to a content
          // block that is not locale-scoped
          strategyPermitsGeneral && generalBlockExists
          ? // Hence if a non-locale-scoped block exists, push the item to
            // those that should be resolved at "general" stage
            toGeneral
          : // Otherwise pass the item to those that should be resolved at
            // "general" stage
            toAdd;
      target.push({ locale, item });
    });

    // We will try to match the items that should be matched to locale or
    // general blocks.
    //
    // If strategy is `locale`, we push the items that unsuccessfully matched
    // against locale blocks to try to match against general blocks. Otherwise
    // the logic for matching locale and general blocks is the same, so we go
    // over these groups one after another.
    for (const itemGroup of [toLocale, toGeneral]) {
      itemGroup.forEach(({ locale, item }) => {
        const blocksLocale = itemGroup === toLocale ? locale : localeGeneral;
        const blocks = blocksByLocale.get(blocksLocale)!;
        let matchedBlock: IContentBlock.ContentBlock | undefined;
        let pathHash: number;

        // If `matchByContent` is `false`-y, do not try to find a block
        // with matching path, just get the first item we came across.
        if (!matchByContent) {
          matchedBlock = blocks
            ? // If we've matched the locale, great!
              blocks[0]
            : // Otherwise check if any general block exists, and get that
            strategyPermitsGeneral && blocksByLocale.has(localeGeneral)
            ? blocksByLocale.get(localeGeneral)![0]
            : // And if neither works, continue with no matched block
              undefined;
        }
        // If `matchByContent` is EITHER `true` or `strict`, we will search
        // the blocks to see if any contains a matching paths
        else {
          // If we previously came across blocks that contain the item's path,
          // we try to find the intersection of blocks that have the path
          // defined and which match the current locale. If there's multiple,
          // the first one is selected.
          pathHash = item.pathHash;
          if (blocksByPathHash.has(pathHash)) {
            matchedBlock = blocksByPathHash
              .get(pathHash)!
              .find((block) => blocks.includes(block));
          }
          // Otherwise we will go block by block of those that match locale,
          // and check each of them on whether it contains the path.
          else {
            // If we're searching through general blocks, we also want to
            // preferentially match a block whose content has the locale we're
            // looking for compared to a block that doesn't, as a fallback to
            // matching locale & path.
            //
            // In other words:
            // Case locale block:
            //   1. try match by path & locale
            //   2. else get first found locale block
            //
            // Case general block
            //   1. try match by path & locale
            //   2. else get first found general block that has the locale
            //   3. else get first found general block
            let generalBlockWithLocale: IContentBlock.ContentBlock | null = null;

            matchedBlock = blocks?.find((block) => {
              const vContent = block.getVirtualContent();
              if (vContent === undefined) return;
              const attrs = block.attributes;
              // If the content of the block is NOT locale-scoped, we want to
              // add the locale to the path
              const path = attrs.locale
                ? item.path
                : [item.locale, ...item.path];
              const hasPath = get(vContent, path) !== undefined;

              if (
                // Didn't match
                !hasPath &&
                // And is general block
                !attrs.locale &&
                // And first general block with matching locale not found yet
                !generalBlockWithLocale &&
                // And the block's content HAS the locale as top-level path
                get(vContent, item.locale) !== undefined
              ) {
                generalBlockWithLocale = block;
              }
              return hasPath;
            });

            if (!matchedBlock && matchByContent !== 'strict') {
              // If we're trying to assign the item to a general block,
              // none matched by path, but at least one contains the locale
              if (itemGroup === toGeneral && generalBlockWithLocale) {
                matchedBlock = generalBlockWithLocale;
              }
              // Otherwise try to get the first block we came across
              else if (blocks) {
                matchedBlock = blocks[0];
              }
            }

            if (matchedBlock) blocksByPathHash.push(pathHash, matchedBlock);
          }
        }

        // If we matched a block, add the item among the items that should be
        // added to that block.
        if (matchedBlock) {
          itemsByBlocks.push(matchedBlock, item);
          return;
        }

        // If there was no match, push the item down to subsequent resolution
        // strategies:
        // - localeStrict -> add
        // - locale -> general -> add
        // - general -> add
        const target =
          // If we're trying to match items against locale-scoped blocks...
          itemGroup === toLocale
            ? strategyPermitsGeneral && matchByContent !== 'strict'
              ? // Move the item to try to match it against general blocks
                // next if `locale`
                toGeneral
              : // Otherwise (`localeStrict`) skip general blocks
                toAdd
            : // If we failed to match a block while iterating general
              // blocks, we resort to adding the items
              toAdd;
        target.push({ locale, item });
        return;
      });
    }

    // At this stage, all items should be either in toAdd, or assigned to
    // a specific block in itemsByBlocks
    //
    // If `addType` === `'locale'`, we want to insert the items by locales,
    //   so we join up items with same locale.
    // If `addType` === `'general'`, we want to insert all items together.
    // If `addType` === `'custom'`, either of the two approaches is used based
    //   the item's `sourceScope` value, defaulting to `'general'`

    const addGroups =
      addType === 'custom'
        ? groupBy(toAdd, ({ item, locale }) =>
            item.sourceScope === 'locale' ? item.locale : localeGeneral,
          )
        : addType === 'locale'
        ? groupBy(toAdd, 'locale')
        : { [localeGeneral]: toAdd };

    const addGroupMap = new Map(
      // Map the items to get rid of the inner `locale` property, since its not
      // needed anymore after the items have been groups by the locales.
      Object.entries(addGroups).reduce((entries, [locale, items]) => {
        if (items.length) {
          entries.push([locale, items.map(({ item }) => item)]);
        }
        return entries;
      }, [] as [string, IDefinition.Item[]][]),
    );

    // Normalize results to similar interface so it's easier to use
    return {
      matched: new Map<IContentBlock.ContentBlock, IDefinition.Item[]>(
        itemsByBlocks,
      ),
      prepend:
        addPosition === 'prepend'
          ? addGroupMap
          : new Map<string, IDefinition.Item[]>(),
      append:
        addPosition === 'append'
          ? addGroupMap
          : new Map<string, IDefinition.Item[]>(),
    };
  }

  static get defaults() {
    return {
      strategy: 'locale',
      matchByIndex: true,
      matchByContent: true,
      position: 'append',
      addPosition: 'append',
      addType: 'custom',
      query: () => true,
      localeGeneral: '*',
    } as IContentGroup.ResolveItemsOptions & IContentGroup.InsertOptions;
  }
}
