import type { AnyObj } from '../types';
import type { IDefinition } from './definition/types';
import type { ISerializerCollection } from './collection/types';
import type { I_Item } from './item/types';
import { ContentGroup } from './content-group';
import { ItemArray } from './item';

export namespace IContentBlock {
  export interface ContentBlock {
    /**
     * Some representation of the content (e.g. deserialized content), used to
     * avoid the need of constant de-/serialization.
     */
    virtualContent: any;
    /**
     * Blocks's content
     */
    content: string;
    /**
     * Blocks's attributes
     */
    attributes: AnyObj<string>;
    /**
     * Path to the file from where the block originates. It is used for
     * resolving linked content with relative path.
     */
    filepath?: string;
    /**
     * Set single attribute.
     */
    setAttribute(key: string, value: string): void;
    /**
     * Remove single attribute.
     */
    removeAttribute(key: string): void;
    /**
     * Get loaded representation of the content stored by the instance, or
     * initialize it if doesn't exist yet.
     */
    getVirtualContent(): any;
    /**
     * Remove the block from a group
     */
    remove(group: ContentGroup): void;
    /**
     * Serializes a list of DefinitionItems into a string based on the the block's
     * attributes.
     */
    serializeItems(
      definitions: IDefinition.Item[],
      opts?: I_Item.ItemsByLocaleOptions,
    ): string;
  }

  export interface CtorOptions {
    /**
     * Block's attributes.
     */
    attributes?: AnyObj;
    /**
     * Block's content.
     */
    content?: string;
    /**
     * Collection instance with serializers to de-/serialize content
     */
    serializers?: ISerializerCollection.Collection;
    /**
     * Path to the file from where the block originates.
     */
    filepath?: string;
  }
}

/**
 * Distinct part of a content of a file
 */
export class ContentBlock implements IContentBlock.ContentBlock {
  attributes: AnyObj<string> = {};
  content = '';
  virtualContent: any;
  /**
   * Collection instance with serializers to de-/serialize Node's html content
   */
  serializers?: ISerializerCollection.Collection;
  /**
   * Path to the file from where the block originates. It is used for
   * resolving linked content with relative path.
   */
  filepath?: string;

  constructor(options: IContentBlock.CtorOptions) {
    const { serializers, attributes, content, filepath } = options;

    if (attributes !== undefined) this.attributes = attributes;
    if (content !== undefined) this.content = content;
    this.filepath = filepath;
    this.serializers = serializers;
  }

  setAttribute(key: string, value: string) {
    this.attributes[key] = value;
  }

  removeAttribute(key: string) {
    const attrs = {} as AnyObj<string>;
    for (const [attrKey, attrVal] of Object.entries(this.attributes)) {
      if (key === attrKey) continue;
      attrs[attrKey] = attrVal;
    }
    this.attributes = attrs;
  }

  /**
   * Get loaded representation of the content stored by the node, or
   * initialize it if doesn't exist yet.
   *
   * Returns undefined if deserializer cannot be found.
   */
  getVirtualContent() {
    if (this.virtualContent !== undefined) return this.virtualContent;
    const { lang } = this.attributes;
    const serializer = this.serializers?.resolve(lang || 'json');
    const { options = {}, methods = {} } = serializer || {};
    if (!methods.deserializer) return;
    const content = this.content || '{}';
    const vContent = methods.deserializer(content, options);
    this.virtualContent = vContent;
    return vContent;
  }

  /**
   * Does any steps neccessary to remove the block.
   */
  remove(contentGroup: ContentGroup) {
    return;
  }

  /**
   * Serializes a list of DefinitionItems based on the the block's
   * language, locale and serializers.
   *
   * Returns a string.
   *
   * @throws {Error} If no serializer is matched
   */
  serializeItems(
    definitions: IDefinition.Item[],
    opts: I_Item.ToObjectOptions = {},
  ) {
    const { simple = true } = opts;
    const newData = ItemArray.toObject(definitions, {
      ...opts,
      simple,
    });

    const { lang = 'json', locale } = this.attributes;

    // Remove locale scope if it's defined in the tag attribute
    const content = locale ? newData[locale] : newData;

    // Serialize
    const serializer = this.serializers?.resolve(lang);
    const { options = {}, methods = {}, name } = serializer || {};
    if (!methods.serializer) {
      throw Error(
        `Cannot serialize content, no serializer method exists on serializer` +
          ` item '${name}' matched by '${lang}'`,
      );
    }
    return methods.serializer(content, options);
  }
}
