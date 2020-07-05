import isObject from 'lodash.isobject';
import cloneDeep from 'lodash.clonedeep';
import differenceBy from 'lodash.differenceby';
import unionBy from 'lodash.unionby';
import merge from 'lodash.merge';
import pick from 'lodash.pick';
import flatten from 'lodash.flatten';

import type { I_Item } from './types';
import type { AnyObj, DeepObject } from '../../types';
import { hashStringArray } from '../util/hash';
import { ArrayMap } from '../util/array-map';
import { mapFilterUniq, mapFilter } from '../util/array';
import { deepWalk, mergeDeepWith, createObjectPath } from '../util/walk';

export class Item implements I_Item.Item {
  value: I_Item.Item['value'];
  path: I_Item.Item['path'];
  line?: I_Item.Item['line'];
  column?: I_Item.Item['column'];
  locale?: I_Item.Item['locale'];
  source?: I_Item.Item['source'];
  origin?: I_Item.Item['origin'];
  blockIndex?: I_Item.Item['blockIndex'];

  constructor({
    value,
    path,
    line,
    column,
    locale,
    source,
    origin,
    blockIndex,
  }: I_Item.CtorOptions) {
    this.value = value;
    this.path = path || [];
    this.line = line;
    this.column = column;
    this.locale = locale;
    this.source = source;
    this.origin = origin;
    this.blockIndex = blockIndex;
  }

  get pathHash(): number {
    return hashStringArray(this.path ?? []);
  }

  get localeTokenHash(): number {
    return hashStringArray([this.locale ?? '', this.pathHash.toString()]);
  }

  get sourceHash(): number {
    return hashStringArray([
      this.source ?? '',
      this.origin ?? '',
      this.blockIndex !== undefined ? this.blockIndex.toString() : '',
    ]);
  }

  get positionHash(): number {
    return hashStringArray([
      this.line?.toString() ?? '',
      this.column?.toString() ?? '',
      this.source ?? '',
      this.origin ?? '',
      this.blockIndex !== undefined ? this.blockIndex.toString() : '',
      this.pathHash.toString(),
    ]);
  }

  get idHash(): number {
    return hashStringArray([
      this.line?.toString() ?? '',
      this.column?.toString() ?? '',
      this.source ?? '',
      this.origin ?? '',
      this.blockIndex !== undefined ? this.blockIndex.toString() : '',
      this.pathHash.toString(),
      this.locale ?? '',
    ]);
  }

  copy(newValuesObj: Partial<I_Item.CtorOptions> = {}): I_Item.Item {
    const Klass = this.constructor as new (...args: any[]) => I_Item.Item;
    const copy = new Klass(this);

    for (const [key, val] of Object.entries(newValuesObj)) {
      (copy as any)[key] = val;
    }

    return copy;
  }
}

const getIteratee = <T extends I_Item.Item = I_Item.Item>(
  hashType: I_Item.HashType,
): ((item: T) => number) => {
  const iteratees = {
    path: (item: T) => item.pathHash,
    localeToken: (item: T) => item.localeTokenHash,
    source: (item: T) => item.sourceHash,
    position: (item: T) => item.positionHash,
    id: (item: T) => item.idHash,
  };
  return iteratees[hashType] as (item: T) => number;
};

/**
 * Container class for holding and manipulating a list of items.
 */
export class ItemArray<T extends I_Item.Item = I_Item.Item>
  implements I_Item.ItemArray<T> {
  items: T[] = [];

  constructor(items: T[] | I_Item.ItemArray<T> | IterableIterator<T> = []) {
    this.items = [...items];
  }

  [Symbol.iterator](): IterableIterator<T> {
    return this.items[Symbol.iterator]();
  }

  push(...items: T[]): number {
    return this.items.push(...items);
  }

  get length(): number {
    return this.items.length;
  }

  toJSON(): any {
    return this.items;
  }

  prop<K extends keyof T>(prop: K): T[K][] {
    return this.constructor.prop<T, K>(this.items, prop);
  }

  static prop<T extends I_Item.Item, K extends keyof T>(
    items: T[],
    prop: K,
  ): T[K][] {
    return mapFilter(items, (item) => item[prop]);
  }

  uniqProp<K extends keyof T>(prop: K): NonNullable<T[K]>[] {
    return this.constructor.uniqProp<T, K>(this.items, prop);
  }

  static uniqProp<T extends I_Item.Item, K extends keyof T>(
    items: T[],
    prop: K,
  ): NonNullable<T[K]>[] {
    return mapFilterUniq(items, (item) => item[prop]) as NonNullable<T[K]>[];
  }

  difference(
    other: I_Item.ItemArrayLike,
    options: I_Item.DifferenceOptions = {},
  ) {
    return this.constructor.difference<T>(this.items, other, options);
  }

  /**
   * Find those items from `array` which are not in `other` based on hashes
   */
  static difference<T extends I_Item.Item>(
    array: I_Item.ItemArrayLike<T>,
    other: I_Item.ItemArrayLike,
    options: I_Item.DifferenceOptions = {},
  ) {
    const { hashType = 'id' } = options;
    return new this(
      differenceBy([...array], [...other], getIteratee(hashType)) as T[],
    );
  }

  union(other: I_Item.ItemArrayLike<T>, options: I_Item.UnionOptions = {}) {
    return this.constructor.union<T>(this.items, other, options);
  }

  /**
   * Find those items that are either in `array` or in `other` based on hashes
   */
  static union<T extends I_Item.Item>(
    array: I_Item.ItemArrayLike<T>,
    other: I_Item.ItemArrayLike<T>,
    options: I_Item.UnionOptions = {},
  ) {
    const { hashType = 'id' } = options;
    return new this(unionBy([...array], [...other], getIteratee(hashType)));
  }

  intersection(
    other: I_Item.ItemArrayLike,
    options: I_Item.IntersectionOptions = {},
  ) {
    return this.constructor.intersection<T>(this.items, other, options);
  }

  /**
   * Find those items from `array` which are also in `other` based on hashes.
   *
   * Preserves duplicates.
   */
  static intersection<T extends I_Item.Item>(
    array: I_Item.ItemArrayLike<T>,
    other: I_Item.ItemArrayLike,
    options: I_Item.IntersectionOptions = {},
  ) {
    const { hashType = 'id' } = options;
    const transformer = getIteratee(hashType);
    const alreadyAdded = new Set<number>();
    const intersects = [] as T[];

    // Sort 1st arr by id
    const cacheArr1 = ArrayMap.groupBy([...array], transformer);

    // Add items from 1st arr to result if matched by 2nd arr
    for (const item of other) {
      const id = transformer(item);
      const match = cacheArr1.get(id);
      if (match && !alreadyAdded.has(id)) {
        intersects.push(...match);
        alreadyAdded.add(id);
      }
    }
    return new this(intersects);
  }

  updateBy<T2 extends I_Item.Item>(
    other: I_Item.ItemArrayLike<T2>,
    options: I_Item.UpdateByOptions<T, T2> = {},
  ): I_Item.UpdateReturn<T, T2> {
    return this.constructor.updateBy<T, T2>(this.items, other, options);
  }

  static updateBy<T extends I_Item.Item, T2 extends I_Item.Item>(
    items: I_Item.ItemArrayLike<T>,
    other: I_Item.ItemArrayLike<T2>,
    options: I_Item.UpdateByOptions<T, T2> = {},
  ): I_Item.UpdateReturn<T, T2> {
    const {
      hashType = 'id',
      updater = (updatee, updater) => updatee.copy(updater) as T,
      addUnmatched,
      itemFactory = () => new this.defaults.itemClass({}) as T,
    } = options;
    const transformer = getIteratee(hashType);

    // We need to access these items multiple times, so make a copy in case it
    // is iterator.
    const itemsCopy = [...items];

    const updatees = ArrayMap.groupBy(itemsCopy, transformer);
    const updaters = ArrayMap.groupBy([...other], transformer);
    const updated = new this([] as T[]);
    const unmatched = new Map<number, ItemArray<T2>>();

    for (const [key, updaterItems] of updaters) {
      if (!updatees.has(key) && !addUnmatched) {
        unmatched.set(key, new this(updaterItems));
        continue;
      }

      const itemsToUpdate = updatees.has(key)
        ? updatees.get(key)!
        : // Add new item if nothing matched
          [itemFactory(key, updaterItems)];

      // Ideally we'd get only one item per id in the updater list, but might
      // not be the case, so copy their props sequentially to all matched
      // updatee
      updated.push(
        ...itemsToUpdate.map((updateeItem) =>
          updaterItems.reduce(
            (accumItem: T, updaterItem) =>
              updater(accumItem, updaterItem, key, itemsToUpdate),
            updateeItem.copy() as T,
          ),
        ),
      );
    }

    return {
      items: updated.union(itemsCopy, options),
      updated,
      unmatched,
    };
  }

  updateProp<T2 extends I_Item.Item>(
    other: I_Item.ItemArrayLike<T2>,
    prop: keyof T,
    options: I_Item.UpdatePropOptions<T> = {},
  ): I_Item.UpdateReturn<T, T2> {
    return this.constructor.updateProp<T, T2>(this.items, other, prop, options);
  }

  static updateProp<T extends I_Item.Item, T2 extends I_Item.Item>(
    items: I_Item.ItemArrayLike<T>,
    other: I_Item.ItemArrayLike<T2>,
    prop: keyof T,
    options: I_Item.UpdatePropOptions<T> = {},
  ): I_Item.UpdateReturn<T, T2> {
    return this.updateProps<T, T2>(items, other, [prop], options);
  }

  updateProps<T2 extends I_Item.Item>(
    other: I_Item.ItemArrayLike<T2>,
    props: (keyof T)[],
    options: I_Item.UpdatePropOptions<T> = {},
  ): I_Item.UpdateReturn<T, T2> {
    return this.constructor.updateProps<T, T2>(
      this.items,
      other,
      props,
      options,
    );
  }

  static updateProps<T extends I_Item.Item, T2 extends I_Item.Item>(
    items: I_Item.ItemArrayLike<T>,
    other: I_Item.ItemArrayLike<T2>,
    props: (keyof T)[],
    options: I_Item.UpdatePropOptions<T> = {},
  ): I_Item.UpdateReturn<T, T2> {
    return this.updateBy<T, T2>(items, other, {
      ...options,
      updater: (updatee, updater) => updatee.copy(pick(updater, props)) as T,
    });
  }

  update<T2 extends I_Item.Item>(
    other: I_Item.ItemArrayLike<T2>,
    options: I_Item.UpdateOptions<T, T2> = {},
  ): I_Item.UpdateReturn<T, T2> {
    return this.constructor.update<T, T2>(this.items, other, options);
  }

  static update<T extends I_Item.Item, T2 extends I_Item.Item>(
    items: I_Item.ItemArrayLike<T>,
    other: I_Item.ItemArrayLike<T2>,
    options: I_Item.UpdateOptions<T, T2> = {},
  ): I_Item.UpdateReturn<T, T2> {
    const { updater } = options;
    return typeof updater === 'string'
      ? this.updateProp(items, other, updater, options)
      : Array.isArray(updater)
      ? this.updateProps(items, other, updater, options)
      : this.updateBy(items, other, {
          ...options,
          updater: updater as I_Item.UpdateByOptions<T, T2>['updater'],
        });
  }

  /**
   * Get items that match locales. Optionally generate and include items with
   * paths that are defined in other locales but are missing in target locales.
   */
  itemsByLocales(locales: string[], options: I_Item.ItemsByLocaleOptions = {}) {
    return this.constructor.itemsByLocales<T>(this.items, locales, options);
  }

  /**
   * Get items that match locales. Optionally generate and include items with
   * paths that are defined in other locales but are missing in target locales.
   */
  static itemsByLocales<T extends I_Item.Item>(
    items: I_Item.ItemArrayLike<T>,
    locales: string[],
    options: I_Item.ItemsByLocaleOptions = {},
  ) {
    const { includeMissing, missingValue } = merge({}, this.defaults, options);

    // Parse the items to construct a list of all keys, but with locale's
    // value where possible, or null if not
    const localeItemsMaps: Map<string, Map<T['pathHash'], T>> = new Map();
    for (const locale of locales) {
      localeItemsMaps.set(locale, new Map());
    }

    for (const item of items) {
      const pathId = item.pathHash as T['pathHash'];

      for (const locale of locales) {
        const map = localeItemsMaps.get(locale)!;

        // Capture all items matching the locale
        if (item.locale === locale) {
          map.set(pathId, item);
          continue;
        }

        // In case the locale is missing some entries which are present in other
        // locales, add the item from the other locale, and remove its value to
        // make it clear that the value is missing.
        if (includeMissing && !map.has(pathId)) {
          const itemCopy = item.copy({
            value: missingValue,
            locale,
          });
          map.set(pathId, itemCopy as T);
        }
      }
    }

    const filteredItems = flatten(
      locales.map((locale) => [...localeItemsMaps.get(locale)!.values()]),
    );

    return new this(filteredItems);
  }

  /**
   * Get items that match locale. Optionally generate and include items with
   * paths that are defined in other locales but are missing in target locales.
   */
  itemsByLocale(locale: string, options: I_Item.ItemsByLocaleOptions = {}) {
    return this.constructor.itemsByLocale<T>(this.items, locale, options);
  }

  /**
   * Get items that match locale. Optionally generate and include items with
   * paths that are defined in other locales but are missing in target locales.
   */
  static itemsByLocale<T extends I_Item.Item>(
    items: I_Item.ItemArrayLike<T>,
    locale: string,
    options: I_Item.ItemsByLocaleOptions = {},
  ) {
    return this.itemsByLocales<T>(items, [locale], options);
  }

  filterBy(
    callback: (item: T) => boolean | void,
    options?: I_Item.FilterByOptions,
  ) {
    return this.constructor.filterBy<T>(this.items, callback, options);
  }

  static filterBy<T extends I_Item.Item>(
    items: I_Item.ItemArrayLike<T>,
    callback: (item: T) => boolean | void,
    options?: I_Item.FilterByOptions,
  ) {
    const { mode = 'include' } = options || {};

    return new this(
      Array.from(items).filter((item) => {
        const passed = callback(item);
        return mode === 'include' ? passed : !passed;
      }),
    );
  }

  filterByValue(value: any, options?: I_Item.FilterByValueOptions) {
    return this.constructor.filterByValue<T>(this.items, value, options);
  }

  static filterByValue<T extends I_Item.Item>(
    items: I_Item.ItemArrayLike<T>,
    value: any,
    options?: I_Item.FilterByValueOptions,
  ) {
    return this.filterByValues<T>(items, [value], options);
  }

  filterByValues(values: any[], options?: I_Item.FilterByValueOptions) {
    return this.constructor.filterByValues<T>(this.items, values, options);
  }

  static filterByValues<T extends I_Item.Item>(
    items: I_Item.ItemArrayLike<T>,
    values: any[],
    options?: I_Item.FilterByValueOptions,
  ) {
    return this.filterBy<T>(items, (i) => values.includes(i.value), options);
  }

  filterByLocale(locale: string, options?: I_Item.FilterByLocaleOptions) {
    return this.constructor.filterByLocale<T>(this.items, locale, options);
  }

  static filterByLocale<T extends I_Item.Item>(
    items: I_Item.ItemArrayLike<T>,
    locale: string,
    options?: I_Item.FilterByValueOptions,
  ) {
    return this.filterByLocales<T>(items, [locale], options);
  }

  filterByLocales(locales: string[], options?: I_Item.FilterByLocaleOptions) {
    return this.constructor.filterByLocales<T>(this.items, locales, options);
  }

  static filterByLocales<T extends I_Item.Item>(
    items: I_Item.ItemArrayLike<T>,
    locales: string[],
    options?: I_Item.FilterByValueOptions,
  ) {
    return this.filterBy<T>(items, (i) => locales.includes(i.locale!), options);
  }

  filterMissing(options?: I_Item.FilterMissingOptions) {
    return this.constructor.filterMissing<T>(this.items, options);
  }

  static filterMissing<T extends I_Item.Item>(
    items: I_Item.ItemArrayLike<T>,
    options?: I_Item.FilterMissingOptions,
  ) {
    const { missingValue = this.defaults.missingValue } = options || {};
    return this.filterByValue<T>(items, missingValue, options);
  }

  filterByPath(path: T['path'], options?: I_Item.FilterByPathOptions) {
    return this.constructor.filterByPath<T>(this.items, path, options);
  }

  static filterByPath<T extends I_Item.Item>(
    items: I_Item.ItemArrayLike<T>,
    path: T['path'],
    options?: I_Item.FilterByPathOptions,
  ) {
    return this.filterByPaths<T>(items, [path], options);
  }

  filterByPaths(paths: T['path'][], options?: I_Item.FilterByPathOptions) {
    return this.constructor.filterByPaths<T>(this.items, paths, options);
  }

  static filterByPaths<T extends I_Item.Item>(
    items: I_Item.ItemArrayLike<T>,
    paths: T['path'][],
    options?: I_Item.FilterByPathOptions,
  ) {
    return this.filterBy<T>(
      items,
      (item) =>
        paths.some((path) => path!.every((s, i) => s === item.path![i])),
      options,
    );
  }

  duplicates(
    options: { hashType?: I_Item.HashType } = {},
  ): ArrayMap<number, T> {
    return this.constructor.duplicates<T>(this.items, options);
  }

  static duplicates<T extends I_Item.Item>(
    items: I_Item.ItemArrayLike<T>,
    options: { hashType?: I_Item.HashType } = {},
  ): ArrayMap<number, T> {
    const { hashType = 'localeToken' } = options;
    const transformer = getIteratee(hashType);
    const groups = ArrayMap.groupBy([...items], transformer);
    for (const [id, groupItems] of groups) {
      if (groupItems.length < 2) groups.delete(id);
    }
    return groups;
  }

  toObject<O extends I_Item.ToObjectOptions = I_Item.ToObjectOptions>(
    options: O = {} as O,
  ): I_Item.ToObjectResult<O['simple'], O['merge'], T> {
    return this.constructor.toObject<T, O>(this.items, options);
  }

  static toObject<
    T extends I_Item.Item,
    O extends I_Item.ToObjectOptions = I_Item.ToObjectOptions
  >(
    itemsList: I_Item.ItemArrayLike<T>,
    options: O = {} as O,
  ): I_Item.ToObjectResult<O['simple'], O['merge'], T> {
    const {
      template,
      missingValue,
      includeMissing,
      throwOnDuplicate,
      simple,
      merge: shouldMerge,
    } = merge({}, this.defaults, options);

    const items = new this(itemsList);
    const filteredItems = includeMissing
      ? items
      : items.filterMissing({ missingValue, mode: 'exclude' });

    if (!filteredItems.length) {
      return {} as I_Item.ToObjectResult<O['simple'], O['merge'], T>;
    }

    // Convert items to nested objects so we can pass it to merger
    // function
    const partialObjects = filteredItems.items.map((item) => {
      const root = {};
      const path = item.path ?? [];
      if (!(Array.isArray(path) && path.length)) {
        throw Error(
          'Only items with valid path can be converted to object.\nItem: ' +
            `${JSON.stringify(item, null, 2)}`,
        );
      }
      const [key] = path.slice(-1);
      const parentPath = path.slice(0, -1);
      const scopedParentPath =
        shouldMerge || !item.locale
          ? [...parentPath]
          : [item.locale, ...parentPath];
      const parent = createObjectPath(root, scopedParentPath);
      parent[key] = item;
      return root;
    });

    const leaves = new Set<ItemArray>();

    // Build the nested objects based on the items' paths
    const mergedObj = mergeDeepWith(
      {
        onMerge: (params) => {
          const { oldValue, value, path, index, origin } = params;

          // Check for repeated values. Do not raise error on null values
          if (oldValue !== missingValue && throwOnDuplicate) {
            const duplicate = shouldMerge
              ? // If values are merged into array, search arr for val with same
                // locale + path
                (oldValue as ItemArray).intersection([value], {
                  hashType: 'localeToken',
                }).items[0]
              : // If values are not merged, then just the fact that we've come
                // across a previously-assigned value means we've got a dupe
                oldValue;

            if (duplicate) {
              const dupeIndex = shouldMerge
                ? (oldValue as ItemArray).items.indexOf(duplicate)
                : origin;
              throw Error(
                `Repeated keys for path '${path.join('.')}' found in objects` +
                  ` at indices ${dupeIndex} and ${index}. Values:\n'` +
                  `${JSON.stringify(duplicate, null, 2)}'\nand\n` +
                  `'${JSON.stringify(value, null, 2)}'`,
              );
            }
          }

          const resolvedVal = !shouldMerge
            ? value
            : // Keep all entries in an array
            oldValue instanceof ItemArray
            ? // Adding another entry and return the instance
              oldValue.push(value) && oldValue
            : // Adding first entry
            oldValue === missingValue
            ? // Overwriting null value
              new this([value])
            : // Or join both inital and current values
              new this([oldValue, value]);

          return resolvedVal;
        },
        // Treat Item entries as values
        isBranch: ({ value }) => isObject(value) && !isItem(value),
        // Keep only the value instead of the whole Item object
        // if simple == true
        onAssign: ({ value: item }) => {
          if (shouldMerge) {
            const leaf = item instanceof ItemArray ? item : new this([item]);
            leaves.add(leaf);
            return leaf;
          }
          return simple && item instanceof Item ? item.value : item;
        },
      },
      cloneDeep(template) as DeepObject<I_Item.Item>,
      ...partialObjects,
    ).value;

    if (simple && shouldMerge) {
      leaves.forEach((itemArr) => {
        itemArr.items = itemArr.items.map((item) => item.value);
      });
    }
    return mergedObj as I_Item.ToObjectResult<O['simple'], O['merge'], T>;
  }

  static fromObjects<T extends I_Item.Item, CtorOpts extends object = object>(
    objs: AnyObj[],
    params: I_Item.FromObjectOptions<T> & CtorOpts,
  ): I_Item.ItemArray<T> {
    const {
      itemClass,
      locale,
      throwOnDuplicate,
      includeMissing,
      missingValue,
    } = merge({}, this.defaults, params);

    const items = new this([] as T[]);
    const uniqItemFirstSeen = new Map<
      T['idHash'],
      { index: number; value: T }
    >();

    objs.forEach((obj, index) =>
      deepWalk<AnyObj, object, any | I_Item.ItemArray<T> | T>(
        {
          onLeaf: ({ key, value, path }) => {
            const values = value instanceof ItemArray ? value.items : [value];
            for (const val of values) {
              if (!includeMissing && val === missingValue) continue;
              const item = (val instanceof Item
                ? // Use the instance as is if the item already is an Item
                  val
                : new itemClass({
                    ...params,
                    value: val,
                    locale: locale ? locale : path[0],
                    path: locale ? [...path, key] : [...path.slice(1), key],
                  })) as T;

              if (throwOnDuplicate) {
                const id = item.idHash as T['idHash'];
                const firstSeen = uniqItemFirstSeen.get(id)!;
                if (firstSeen) {
                  const pathStr = item.path?.join('.');
                  const val1Str = JSON.stringify(firstSeen.value, null, 2);
                  const val2Str = JSON.stringify(val, null, 2);
                  throw Error(
                    `Repeated keys for path '${pathStr}' found in ` +
                      `object[${firstSeen.index}] and object[${index}]. ` +
                      `Values:\n'${val1Str}'\nand\n'${val2Str}'`,
                  );
                }
                uniqItemFirstSeen.set(id, { index, value: item });
              }
              items.push(item);
            }
          },
          // Treat Item or ItemArray as values
          isBranch: ({ value }) =>
            isObject(value) &&
            !(value instanceof Item || value instanceof ItemArray),
        },
        obj,
      ),
    );
    return items;
  }

  static fromObject<T extends I_Item.Item, CtorOpts extends object = object>(
    obj: AnyObj,
    params: I_Item.FromObjectOptions<T> & CtorOpts,
  ): I_Item.ItemArray<T> {
    return this.fromObjects<T, CtorOpts>([obj], params);
  }

  static get defaults() {
    return {
      includeMissing: false,
      missingValue: null,
      template: {},
      simple: false,
      merge: false,
      throwOnDuplicate: true,
      itemClass: Item,
    };
  }
}

export interface ItemArray {
  constructor: typeof ItemArray;
}

export function isItem(item: any): boolean {
  return item instanceof Item || item instanceof ItemArray;
}
