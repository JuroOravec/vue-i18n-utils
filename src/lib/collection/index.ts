import groupBy from 'lodash.groupby';

import type { ICollection } from './types';
import type { IMethodCollection, ISerializerCollection } from './types';

/**
 * Class for storing groups of values that can be matched either by a name or
 * by matching a regexp pattern.
 */
export class Collection implements ICollection.Collection {
  collection = new Map();

  constructor(options: ICollection.CtorOptions = {}) {
    const { collection = {} } = options;

    const entries =
      collection instanceof Map ? collection : Object.entries(collection);

    for (const [name, data] of entries) {
      this.set({ name, ...data });
    }
  }

  get(name: ICollection.Name) {
    return this.collection.get(name);
  }

  has(name: ICollection.Name) {
    return this.collection.has(name);
  }

  add(params: ICollection.SetOptions) {
    if (this.has(params.name)) {
      throw Error(`Parser '${params.name}' is already registered`);
    }
    return this.set(params);
  }

  set(params: ICollection.SetOptions) {
    const { name, patterns, ...rest } = params;
    this.collection.set(name, {
      patterns: patterns.map((p) => new RegExp(p)),
      ...rest,
    } as ICollection.Item);
  }

  delete(name: ICollection.Name) {
    if (!this.has(name)) {
      throw Error(`No parser registered with name '${name}'`);
    }
    this.unset(name);
  }

  unset(name: ICollection.Name) {
    this.collection.delete(name);
  }

  resolve(query: string) {
    for (const [name, { patterns, ...rest }] of this.collection) {
      for (const pattern of patterns) {
        if (pattern.test(query)) {
          return { name, patterns, ...rest } as ICollection.NamedItem;
        }
      }
    }
  }

  groupByResolve<T extends any>(
    queries: T[],
    iteratee: (arg: T) => string = (x) => (x as any) as string,
  ) {
    const itemCache = new Map<string, ICollection.NamedItem>();
    const grouped = groupBy(queries, (query) => {
      const item = this.resolve(iteratee(query));
      if (!item) return item;
      if (!itemCache.has(item.name)) itemCache.set(item.name, item);
      return item.name;
    });
    return new Map<ICollection.NamedItem | undefined, T[]>(
      Object.entries(grouped).map(([key, val]) => [itemCache.get(key), val]),
    );
  }

  validate(name: ICollection.Name, prop: string) {
    const item = this.collection.get(name) || ({} as ICollection.Item);
    if (!item[prop]) {
      throw Error(`Collection item '${name}' is missing property '${prop}'`);
    }
  }
}

/**
 * Subclass of `Collection` which holds groups of functions.
 *
 * Requires entries to contain `methods` property and optional `options`
 * object with options can be passed to the stored functions.
 */
export class MethodCollection
  extends (Collection as IMethodCollection.BaseClass)
  implements IMethodCollection.Collection {
  options(name: ICollection.Name) {
    const item = this.collection.get(name);
    if (!item) {
      throw Error(`Cannot find item '${name}' in collection.`);
    }
    if (!item.options) item.options = {};
    return item.options;
  }
  getOption(name: ICollection.Name, optionKey: string) {
    const options = this.options(name);
    return options[optionKey];
  }

  setOption(name: ICollection.Name, optionKey: string, optionValue: any) {
    const options = this.options(name);
    options[optionKey] = optionValue;
  }

  validateMethod(
    name: ICollection.Name,
    method: keyof IMethodCollection.ItemMethods,
  ) {
    const item = this.collection.get(name);
    if (!item || !item.methods[method]) {
      throw Error(`Collection item '${name}' is missing method '${method}'`);
    }
  }
}

/**
 * Subclass identical to `MethodCollection`, except the typing uses
 * `ISerializerCollection` instead, which is for holding groups of functions
 * used as de-/serializers.
 */
export class SerializerCollection
  extends (MethodCollection as ISerializerCollection.Class)
  implements ISerializerCollection.Collection {}
