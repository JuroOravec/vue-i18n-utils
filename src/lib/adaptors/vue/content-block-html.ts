import fs, { promises as fsp } from 'fs';
import path from 'path';

import type { AnyObj } from '../../../types';
import type { IContentGroup } from '../../content-group';
import type { IVueDefinitionItem } from './vue-definition';
import { IContentBlock, ContentBlock } from '../../content-block';

/**
 * ContentBlock that is associated with and stores its content in a specific
 * HTML Element.
 */
export interface IHTMLContentBlock extends IContentBlock.ContentBlock {
  /**
   * Block's attributes.
   */
  attributes: AnyObj<string>;
  /**
   * The Node element stored by the instance.
   */
  node: Node;
  /**
   * Resolved path of the linked content specified by `src` attribute
   */
  source: string;
  /**
   * Check whether a node is a HTML Element. Optionally check for specific
   * tag / node name.
   */
  isElement(nodeName?: string): boolean;
  /**
   * Removes a linked file if there is any.
   */
  removeSource(): void;
  /**
   * Find a path of the linked definitions files from a set of DefinitionItems.
   * and set it as the `src` node attribute.
   *
   * Throws if multiple different paths found.
   */
  srcFromItems(definitions: IVueDefinitionItem[]): string | undefined;
}

export interface IHTMLContentBlockCtorOptions
  extends IContentBlock.CtorOptions {
  /**
   * Block's attributes.
   */
  attributes?: AnyObj;
  /**
   * The Node element stored by the instance.
   *
   * This option takes priority over the `tag` option.
   */
  node: Node;
}

/**
 * Wrapper for HTMLElement for content manipulation relevant for VueAdaptor
 */
export class HTMLContentBlock extends ContentBlock
  implements IHTMLContentBlock {
  node: Node;

  constructor(options: IHTMLContentBlockCtorOptions) {
    const { node, attributes, content, ...superOpts } = options;
    super(superOpts);
    this.node = node;
    if (attributes !== undefined) this.attributes = attributes;
    if (content !== undefined) this.content = content;
  }

  get content() {
    return (this.node as Element).innerHTML;
  }

  set content(newContent: string) {
    this.virtualContent = undefined;
    if (!this.node) return;
    (this.node as Element).innerHTML = newContent;
  }

  get attributes() {
    const { attributes } = (this.node as Element) || {};
    const copiedAttribs: AnyObj<string> = {};
    if (attributes) {
      for (const { name, value } of attributes) {
        copiedAttribs[name] = value;
      }
    }
    return copiedAttribs;
  }

  set attributes(attrs: AnyObj<string>) {
    // Remove all old attributes
    for (const name of Object.keys(this.attributes)) {
      this.removeAttribute(name);
    }
    // Remove new attributes
    for (const [key, value] of Object.entries(attrs)) {
      this.setAttribute(key, value);
    }
  }

  get source() {
    const { src } = this.attributes;
    const pathToDir = this.filepath ? [this.filepath, '..'] : [];
    return path.resolve(...pathToDir, src);
  }

  setAttribute(key: string, value: string) {
    (this.node as Element).setAttribute(key, value);
  }

  removeAttribute(key: string) {
    (this.node as Element).removeAttribute(key);
  }

  /**
   * Get loaded representation of the content stored by the node, or
   * initialize it if doesn't exist yet.
   *
   * Returns undefined if deserializer cannot be found.
   */
  async getVirtualContent() {
    if (this.virtualContent !== undefined) return this.virtualContent;

    const { lang, src } = this.attributes;
    const serializer = this.serializers?.resolve(lang || 'json');
    const { options = {}, methods = {} } = serializer || {};

    if (!methods.deserializer) return;

    const content =
      (src ? await fsp.readFile(this.source, 'utf-8') : this.content) || '{}';

    const vContent = await methods.deserializer(content, options);
    this.virtualContent = vContent;
    return vContent;
  }

  /**
   * Check whether a node is a HTML Element. Optionally check for specific
   * tag / node name.
   */
  isElement(nodeName?: string) {
    // HTML elements are nodeType === 1
    return (
      this.node.nodeType === 1 &&
      (nodeName ? new RegExp(nodeName, 'iu').test(this.node.nodeName) : true)
    );
  }

  /**
   * Removes the associated node from the DOM. Also removes a linked file if
   * there is any.
   */
  async remove(contentGroup: IContentGroup.ContentGroup) {
    await this.removeSource();
    await (this.node as Element).remove();
  }

  /**
   * Removes a linked file if there is any.
   */
  async removeSource() {
    if (this.attributes.src && fs.existsSync(this.source)) {
      await fsp.unlink(this.source);
    }
  }

  srcFromItems(definitions: IVueDefinitionItem[]) {
    let link = undefined as string | undefined;
    for (const item of definitions) {
      if (!item.link) continue;
      if (link !== undefined && item.link !== link) {
        throw Error(
          'A set of definition items cannot be associated with more than one' +
            ` file. Conflict found for '${link}' and '${item.link}'`,
        );
      }
      link = item.link;
    }
    if (link) this.setAttribute('src', link);
    return link;
  }
}
