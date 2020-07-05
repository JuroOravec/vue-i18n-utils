import { promises as fsp } from 'fs';
import jsdom from 'jsdom';

import type { IDefinition } from '../../definition/types';
import type { IContentBlock } from '../../content-block';
import { ContentGroup, IContentGroup } from '../../content-group';
import { IHTMLContentBlock, HTMLContentBlock } from './content-block-html';
import { debug as theDebug } from '../../util/debug';

const debug = (msg: string) => theDebug(`[file-adaptor-vue] ${msg}`);

export interface IDOMContentGroup extends IContentGroup.ContentGroup {
  /**
   * The JSDOM instance.
   */
  dom: jsdom.JSDOM;
  /**
   * Nodes from the DOM that are considered content blocks for the purpose of
   * updating the html file.
   */
  blocks: IHTMLContentBlock[];
  insertText: (options: {
    position?: 'prepend' | 'append';
    text?: string;
  }) => IHTMLContentBlock;

  insertElement: (options: {
    position?: 'prepend' | 'append';
    text?: string;
    tag?: string;
    attributes?: { [key: string]: string };
  }) => IHTMLContentBlock;

  resolveItems: (
    definitions: IDefinition.Item[],
    options: IContentGroup.ResolveItemsOptions,
  ) => Promise<{
    matched: Map<IHTMLContentBlock, IDefinition.Item[]>;
    prepend: Map<string, IDefinition.Item[]>;
    append: Map<string, IDefinition.Item[]>;
  }>;
}

// Note:
// Multiple libs were considered as of May 2020, but since Vue's single-file
// components are HTML (not XML) jsdom is the only lib that can reliably
// parse the file (including boolean attributes), preserve the order of
// nodes (including text), can both de-/serialize, and is well-maintained.

/**
 * Wrapper for `jsdom` for managing CRUD interface between the items from
 * I18nUtil and Vue's HTML files.
 **/
export class DOMContentGroup extends ContentGroup implements IDOMContentGroup {
  /**
   * The JSDOM instance.
   */
  dom: jsdom.JSDOM;
  /**
   * Nodes from the DOM that are considered content blocks for the purpose of
   * updating the html file.
   */
  blocks: IHTMLContentBlock[];

  constructor(
    options: jsdom.ConstructorOptions &
      IContentGroup.CtorOptions & {
        /**
         * Content passed to JSDOM
         */
        content?: string;
      } = {},
  ) {
    const { content, ...opts } = options;
    super(opts);

    this.dom = new jsdom.JSDOM('', opts);
    if (content) this.content = content;
    this.blocks = Array.from(
      // We consider only the top-level nodes, since:
      // 1) Neither Vue's single-file components nor vue-i18n support nested tags,
      //    so all `i18n` tags should be at top level.
      // 2) To avoid false positives in case that some matching tags could be
      //    defined e.g. in `template` or `script` tags.
      this.dom.window.document.body.childNodes,
      (node) =>
        new HTMLContentBlock({
          node,
          serializers: this.serializers,
          filepath: this.filepath,
        }),
    );
  }

  /**
   * HTML content of the blocks
   */
  get content() {
    return this.dom.window.document.body.innerHTML;
  }

  set content(groupContent: string) {
    this.dom.window.document.body.innerHTML = groupContent;
  }

  remove(block: IContentBlock.ContentBlock) {
    return super.remove(block);
  }

  insert(
    block: IContentBlock.ContentBlock,
    options: { position?: 'prepend' | 'append' } = {},
  ) {
    const { position = 'append' } = options;
    const insertedBlock = super.insert(block, options) as IHTMLContentBlock;
    // Add to the DOM
    this.dom.window.document.body[position](insertedBlock.node);
    return insertedBlock;
  }

  insertText(
    options: {
      position?: 'prepend' | 'append';
      text?: string;
    } = {},
  ) {
    const { text = '', ...insertOptions } = options;
    const node = this.dom.window.document.createTextNode(text);
    const block = new HTMLContentBlock({
      node,
      filepath: this.filepath,
      serializers: this.serializers,
    });
    return this.insert(block, insertOptions);
  }

  insertElement(
    options: {
      position?: 'prepend' | 'append';
      text?: string;
      tag?: string;
      attributes?: { [key: string]: string };
    } = {},
  ) {
    const {
      tag = 'i18n',
      text = '',
      attributes = {},
      ...insertOptions
    } = options;

    // Create new Node and ContentBlock
    if (!tag) {
      throw Error('Content to be inserted is missing a node tag.');
    }
    const node = this.dom.window.document.createElement(tag);

    const block = new HTMLContentBlock({
      node,
      attributes,
      filepath: this.filepath,
      content: text,
      serializers: this.serializers,
    });

    return this.insert(block, insertOptions);
  }

  async resolveItems(
    definitions: IDefinition.Item[],
    options: IContentGroup.ResolveItemsOptions = {},
  ) {
    const resolved = await super.resolveItems(definitions, {
      query: (b) => (b as IHTMLContentBlock).isElement('i18n'),
      ...options,
    });

    return resolved as {
      matched: Map<IHTMLContentBlock, IDefinition.Item[]>;
      prepend: Map<string, IDefinition.Item[]>;
      append: Map<string, IDefinition.Item[]>;
    };
  }

  static async fromFile(
    url: string,
    options: { invalidPathOk?: boolean } & jsdom.ConstructorOptions &
      IContentGroup.CtorOptions &
      Extract<Parameters<typeof fsp.readFile>[1], object> = {},
  ) {
    debug(`Reading file '${url}'`);
    let content: string | undefined = undefined;
    try {
      content = (await fsp.readFile(url, {
        encoding: 'utf-8',
        ...options,
      })) as string;
    } catch (e) {
      if (!options.invalidPathOk) throw e;
    }
    return new DOMContentGroup({ ...options, content: content as string });
  }
}
