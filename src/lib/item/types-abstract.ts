/**
 * Abstract types for Item.
 *
 * These types have limited resolution and do not include any types that could
 * cause circular reference.
 *
 * These types should be used by interfaces of other components to avoid
 * circular imports.
 */

import { DeepObject, AnyObj } from '../../types';

export namespace AI_Item {
  export type HashType = 'path' | 'localeToken' | 'source' | 'position' | 'id';

  /**
   * Interface of the common metadata of items that contain some information
   * obtained from a file read by file adaptor.
   */
  export interface Item {
    /**
     * Value stored by the item.
     */
    value: any;

    /**
     * Path (list of object keys) of the translation key that the value stored
     * by the item relates to.
     */
    path: string[];

    /**
     * Line in the file where the usage has been observed
     */
    line?: number;

    /**
     * Column in the line where the usage has been observed
     */
    column?: number;

    /**
     * Locale that the value stored by this instance relates to.
     */
    locale?: string;

    /**
     * Path to the file where the ExtractItem content originates from.
     */
    source?: string;

    /**
     * Identifier of the entity that created the ExtractItem instance.
     *
     * Since `blockIndex` may differ based on how the source was parsed,
     * this serves to distinguish if same `blockIndex` values are indeed
     * comparable.
     */
    origin?: string;

    /**
     * If the parsed source file contained multiple content blocks (e.g. think
     * of XML with multiple tags, or JSON with array as top-level item),
     * blockIndex is the index of the content block from which the content
     * originates.
     */
    blockIndex?: number;

    /**
     * Hash of the path.
     */
    pathHash: number;

    /**
     * Hash of the properties that uniquely identify the item within the
     * translations object.
     *
     * The locale token should considers following:
     * - Locale
     * - Message path
     */
    localeTokenHash: number;

    /**
     * Hash of the properties that uniquely identify the source of the item.
     *
     * The source considers following:
     * - `source` - Item source file
     * - `origin` - The entity that parsed the source file
     * - `blockIndex` - Content block within the source file
     */
    sourceHash: number;

    /**
     * Hash of the properties that uniquely identify the position of the item
     * irrespective of the locale.
     *
     * The position considers following:
     * - Item source file
     * - Entity that parsed the source file
     * - Content block within the source file
     * - Line within the source file
     * - Column within the source file
     * - Path to the value within the parsed object
     */
    positionHash: number;

    /**
     * Hash of the properties that uniquely identify the item. Similar to
     * positionHash but considers also locale.
     *
     * The ID should considers following:
     * - Item source file
     * - Entity that parsed the source file
     * - Content block within the source file
     * - Line within the source file
     * - Column within the source file
     * - Path to the value within the parsed object
     * - Locale of the value
     */
    idHash: number;

    /**
     * Create a new instance with copied values.
     */
    copy: (newValuesObj?: Partial<CtorOptions>) => Item;
  }

  export interface CtorOptions {
    value?: Item['value'];
    path?: Item['path'];
    line?: Item['line'];
    column?: Item['column'];
    locale?: Item['locale'];
    source?: Item['source'];
    blockIndex?: Item['blockIndex'];
    origin?: Item['origin'];
  }

  export interface ItemArray<T extends Item = Item> {
    items: T[];

    [Symbol.iterator]: () => IterableIterator<T>;
    push: (...items: T[]) => ReturnType<Array<any>['push']>;
    length: number;
    prop: <K extends keyof T>(prop: K) => T[K][];
    uniqProp: <K extends keyof T>(prop: K) => T[K][];
    difference: (
      other: ItemArrayLike,
      options?: DifferenceOptions,
    ) => ItemArray<T>;
    union: (other: ItemArrayLike<T>, options?: UnionOptions) => ItemArray<T>;
    intersection: (
      other: ItemArrayLike,
      options?: IntersectionOptions,
    ) => ItemArray<T>;
    updateBy: <T2 extends Item>(
      other: ItemArrayLike<T2>,
      options?: UpdateByOptions<T, T2>,
    ) => UpdateReturn<T, T2>;
    updateProp: <T2 extends Item>(
      other: ItemArrayLike<T2>,
      prop: keyof T,
      options?: UpdatePropOptions<T>,
    ) => UpdateReturn<T, T2>;
    updateProps: <T2 extends Item>(
      other: ItemArrayLike<T2>,
      props: (keyof T)[],
      options?: UpdatePropOptions<T>,
    ) => UpdateReturn<T, T2>;
    update: <T2 extends Item>(
      other: ItemArrayLike<T2>,
      options?: UpdateOptions<T, T2>,
    ) => UpdateReturn<T, T2>;
    itemsByLocales: (
      locales: string[],
      options?: ItemsByLocaleOptions,
    ) => ItemArray<T>;
    itemsByLocale: (
      locale: string,
      options?: ItemsByLocaleOptions,
    ) => ItemArray<T>;
    filterBy: (
      callback: (item: T) => boolean | void,
      options?: FilterByOptions,
    ) => ItemArray<T>;
    filterByPath: (
      path: NonNullable<T['path']>,
      options?: FilterByPathOptions,
    ) => ItemArray<T>;
    filterByPaths: (
      paths: NonNullable<T['path']>[],
      options?: FilterByPathOptions,
    ) => ItemArray<T>;
    filterByLocale: (
      locale: NonNullable<T['locale']>,
      options?: FilterByLocaleOptions,
    ) => ItemArray<T>;
    filterByLocales: (
      locales: NonNullable<T['locale']>[],
      options?: FilterByLocaleOptions,
    ) => ItemArray<T>;
    filterByValue: (value: any, options?: FilterByValueOptions) => ItemArray<T>;
    filterByValues: (
      value: any[],
      options?: FilterByValueOptions,
    ) => ItemArray<T>;
    filterMissing: (options?: FilterMissingOptions) => ItemArray<T>;
    duplicates: (options?: DuplicatesOptions) => Map<number, T[]>;
    toObject: <O extends ToObjectOptions = ToObjectOptions>(
      options: O,
    ) => ToObjectResult<O['simple'], O['merge'], T>;
  }

  export type ItemList<T extends Item = Item> = ItemArray<T> | T[];

  export type ItemArrayLike<T extends Item = Item> =
    | ItemList<T>
    | IterableIterator<T>;

  interface HashTypeOptions {
    hashType?: HashType;
  }

  export type DifferenceOptions = HashTypeOptions;

  export type UnionOptions = HashTypeOptions;

  export type IntersectionOptions = HashTypeOptions;

  export interface UpdateReturn<T extends Item = Item, T2 extends Item = Item> {
    items: ItemArray<T>;
    updated: ItemArray<T>;
    unmatched: Map<number, ItemArray<T2>>;
  }

  interface UpdateOptionsBase<T extends Item = Item> extends HashTypeOptions {
    addUnmatched?: boolean;
    itemFactory?: (key: number, items: Item[]) => T;
  }

  export interface UpdateByOptions<
    T extends Item = Item,
    T2 extends Item = Item
  > extends UpdateOptionsBase<T> {
    updater?: (updatee: T, updater: T2, hash: number, updateeArr: T[]) => T;
  }

  export type UpdatePropOptions<T extends Item = Item> = UpdateOptionsBase<T>;

  export interface UpdateOptions<T extends Item = Item, T2 extends Item = Item>
    extends UpdateOptionsBase<T> {
    updater?: keyof T | (keyof T)[] | UpdateByOptions<T, T2>['updater'];
  }

  export type DuplicatesOptions = HashTypeOptions;

  export interface ItemsByLocaleOptions {
    /**
     * Whether definition items with value that indicates missing value should
     * be included.
     *
     * By default, missing value is `null`.
     */
    includeMissing?: boolean;
    /**
     * The value that indicates a missing value.
     *
     * By default, missing value is `null`.
     */
    missingValue?: any;
  }

  export interface FilterByOptions {
    /**
     * Whether the items that match the value should be included or excluded
     * from the result.
     */
    mode?: 'include' | 'exclude';
  }

  export type FilterByValueOptions = FilterByOptions;
  export type FilterByLocaleOptions = FilterByOptions;
  export type FilterByPathOptions = FilterByOptions;

  export type FilterMissingOptions = FilterByValueOptions &
    Pick<ItemsByLocaleOptions, 'missingValue'>;

  export interface FromObjectOptions<T extends Item = Item>
    extends ItemsByLocaleOptions,
      Partial<Omit<CtorOptions, 'path' | 'value'>> {
    itemClass?: new (options: CtorOptions) => T;
    throwOnDuplicate?: boolean;
  }

  export interface ToObjectOptions extends AI_Item.ItemsByLocaleOptions {
    template?: AnyObj;
    simple?: boolean;
    merge?: boolean;
    throwOnDuplicate?: boolean;
  }
  export type ToObjectResultSimple = DeepObject<string>;
  export type ToObjectResultSimpleMerged = DeepObject<Array<string>>;
  export type ToObjectResultExpanded<T extends Item = Item> = DeepObject<T>;
  export type ToObjectResultExpandedMerged<T extends Item = Item> = DeepObject<
    ItemArray<T>
  >;

  /**
   * Union of simple and expanded IToObject types
   */
  export type ToObjectResultAny<T extends Item = Item> =
    | ToObjectResultSimple
    | ToObjectResultSimpleMerged
    | ToObjectResultExpanded<T>
    | ToObjectResultExpandedMerged<T>;

  /**
   * Result type of the `toObject` function.
   *
   * Depending on whether option `simple` is `true` or `false`, object with
   * different properties is returned.
   */
  export type ToObjectResult<
    IsSimple extends any = false,
    IsMerged extends any = false,
    T extends Item = Item
  > = IsSimple extends true
    ? IsMerged extends true
      ? ToObjectResultSimpleMerged
      : ToObjectResultSimple
    : IsMerged extends true
    ? ToObjectResultExpandedMerged<T>
    : ToObjectResultExpanded<T>;
}
