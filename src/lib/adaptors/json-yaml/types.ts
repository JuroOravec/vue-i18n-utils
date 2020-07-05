import type fs from 'fs';
import type yaml from 'js-yaml';

import type { AISerializerCollection } from '../../collection/types-abstract';
import type { AIDefinition } from '../../definition/types-abstract';
import type { AI_Item } from '../../item/types-abstract';
import type { ISafeWriteOptions } from '../../util/fs';
import type { IContentFormatter } from '../../content-formatter';
import type { IPathFormatter } from '../../path-formatter';
import type { IContentGroup } from '../../content-group';

export namespace IAdaptorJsonYaml {
  interface LoggerOption {
    /**
     * Logger / debug instance
     */
    logger?: (msg: string) => void;
  }

  export interface DefinitionItemCtorOptions extends AIDefinition.CtorOptions {
    rootIsArray?: boolean;
  }

  export interface DefinitionItem extends AIDefinition.Item {
    rootIsArray?: boolean;
  }

  export interface ContentGroupCtorOptions
    extends IContentGroup.CtorOptions,
      LoggerOption {}

  export type Deserializer = typeof JSON.parse | typeof yaml.safeLoad;
  export type DeserializerOptions = Parameters<Deserializer>[1];

  export type Serializer = typeof JSON.stringify | typeof yaml.safeDump;
  export type SerializerOptions = Parameters<Serializer>[1];

  export interface OptionsBase extends AI_Item.ItemsByLocaleOptions {
    /**
     * Whether the adaptor should process YAML files
     */
    yaml?: boolean;
    /**
     * Whether the adaptor should process JSON files
     */
    json?: boolean;
    /**
     * Option to scope parsed data as belonging to a particular locale:
     * ```js
     * {
     *   en: { // <-- this
     *     some: "message"
     *   }
     * }
     * ```
     * If `locale` is not provided, locale is inferred as the topmost keys of
     * the parsed data object(s)
     *
     * If `locale` is string, the string is used as the locale name.
     *
     * If `locale` is function, it is given data and options and is expected to
     * return a string (or undefined).
     *
     */
    locale?: string;
  }

  export interface ParserOptions extends OptionsBase {
    pathFormatter?: IPathFormatter.PathFormatter;
  }

  interface WriterOptionsBase {
    /**
     * Whether a process (e.g. writing / updating files) should abort on error
     * or whether the process should continue and update other files despite
     * the error.
     */
    abortOnError?: boolean;
  }

  export interface WriterOptions
    extends OptionsBase,
      WriterOptionsBase,
      ISafeWriteOptions,
      Extract<Parameters<typeof fs.readFileSync>[1], object>,
      IContentGroup.ResolveItemsOptions,
      AI_Item.ToObjectOptions {
    contentFormatter?: IContentFormatter.ContentFormatter;
    pathFormatter?: IPathFormatter.PathFormatter;
    /**
     * Options object passed to serializers
     */
    serializerOptions?: SerializerOptions;
    /**
     * Options object passed to fs.writeFile.
     */
    writeFileOptions?: Extract<Parameters<typeof fs.writeFileSync>[2], object>;
    /**
     * If a definition item is locale-scoped, and the definitions are in
     * a file that is scoped to a different locale, then whether the
     * filename should be updated to match the item's locale.
     *
     * This happens e.g. with `I18nUtil.addLocale`, when the new definitions are
     * associated with new locale, but the `link` attr still points to the file
     * that harbours the translations specific to the locale from which the
     * definitions were copied.
     */
    fileMatchLocale?: boolean;
  }

  export interface RemoverOptions
    extends ISafeWriteOptions,
      WriterOptionsBase {}

  /**
   * Common options object passed to all methods
   */
  export type Options = ParserOptions & WriterOptions & RemoverOptions;

  export interface CollectionCtorOptions
    extends ParserOptions,
      WriterOptions,
      Omit<AISerializerCollection.CtorOptions, 'collection'> {
    /**
     * Collection instance with serializers to be used instead of the default
     */
    serializers?: AISerializerCollection.CtorOptions['collection'];
    /**
     * Logger / debug instance
     */
    logger?: (msg: string) => void;
  }
}
