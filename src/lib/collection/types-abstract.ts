/**
 * Abstract types for Collection classes and functions.
 *
 * These types have limited resolution and do not include any types that could
 * cause circular reference.
 *
 * These types should be used by interfaces of other components to avoid
 * circular imports.
 */

import type { AnyObj, AnyFunc } from '../../types';

export namespace AICollection {
  /**
   * Type used as name
   */
  export type Name = string;

  /**
   * Interface of a single entry.
   */
  export interface Item {
    patterns: RegExp[];
    [key: string]: any;
  }

  /**
   * Item format passed to Collection constructor that will be
   * translated to CollectionItem object
   */
  export interface Arg {
    patterns: (Item['patterns'][0] | string)[];
    [key: string]: any;
  }

  /**
   * Mapping of name to Item
   */
  export type ItemMap = Map<Name, Item>;

  /**
   * Constructor options object
   */
  export interface CtorOptions {
    /**
     * Collection instance to be used instead of the default
     */
    collection?: { [key in Name]: Arg } | Map<Name, Arg>;
  }

  /**
   * Constructor
   */
  export interface Ctor {
    new (options?: CtorOptions): Collection;
  }

  /**
   * Collection class type with contructor
   */
  export type Class = Ctor & typeof Collection;

  /**
   * Options passed to Set and Add methods
   */
  export interface SetOptions extends Arg {
    name: Name;
  }

  /**
   * Extension of Item which also contains name property
   */
  export interface NamedItem extends Item {
    name: Name;
  }

  export abstract class Collection {
    collection: ItemMap = new Map();

    /**
     * Get a collection item by it's name.
     *
     * Returns undefined if no item matched.
     */
    get(name: Name) {
      return undefined as Item | undefined;
    }
    /**
     * Check if a collection has an item by it's name.
     */
    has(name: Name) {
      return false as boolean;
    }
    /**
     * Add an item to the collection.
     *
     * Throws if an item with the same name is already in the collection.
     */
    add(options: SetOptions) {
      return undefined as void;
    }
    /**
     * Remove an item from the collection.
     *
     * Throws if no item with the name exists in the collection.
     */
    delete(name: Name) {
      return undefined as void;
    }
    /**
     * Find an item in collection whose pattern matches the query.
     *
     * Returns undefined if no item matched.
     */
    resolve(query: string) {
      return undefined as NamedItem | undefined;
    }
    /**
     * Group list of queries by items in collection whose patterns matched the
     * query.
     *
     * Unmatched items are grouped under `undefined` key.
     */
    groupByResolve<T extends any>(queries: T[], iteratee?: (arg: T) => string) {
      return {} as Map<NamedItem | undefined, T[]>;
    }
    /**
     * Validate that a particular item in collection has a specific property.
     */
    validate(name: AICollection.Name, prop: string) {
      return undefined as void;
    }
  }
}

/**
 * Subtype of `ICollection` which holds groups of functions.
 *
 * Requires entries to contain `methods` property and optional `options`
 * object with options can be passed to the stored functions.
 */
export namespace AIMethodCollection {
  type Name = AICollection.Name;

  export interface ItemMethods {
    [key: string]: (arg: any, options: AnyObj) => any | void;
  }

  /**
   * Item properties modified in IMethodCollection relative to ICollection
   */
  export interface ItemBase {
    methods: ItemMethods;
    options?: AnyObj;
  }

  /**
   * Single entry containing various methods and an options object which is
   * passed to the methods.
   */
  export type Item = ItemBase & AICollection.Item;

  /**
   * Item format passed to the constructor that will be
   * translated to Collection entry
   */
  export type Arg = ItemBase & AICollection.Arg;

  /**
   * Constructor options object
   */
  export interface CtorOptions extends AICollection.CtorOptions {
    /**
     * Collection instance to be used instead of the default
     */
    collection?: { [key in Name]: Arg } | Map<Name, Arg>;
  }

  /**
   * Constructor
   */
  export interface Ctor {
    new (options?: CtorOptions): Collection;
  }

  /**
   * Type used to force types of IMethodCollection over the
   * ICollection.Collection class
   */
  export type BaseClass = new (options?: CtorOptions) => Omit<
    Collection,
    'validateMethod' | 'options' | 'getOption' | 'setOption'
  >;

  /**
   * Collection class type with contructor
   */
  export type Class = Ctor & typeof Collection;

  /**
   * Options passed to Set and Add methods
   */
  export type SetOptions = AICollection.SetOptions & ItemBase;

  /**
   * Extension of Item which also contains name property
   */
  export interface NamedItem extends Item {
    name: Name;
  }

  /**
   * Mapping of name to Item
   */
  export type ItemMap = Map<Name, Item>;

  /**
   * Subtype of `ICollection.Collection` which holds groups of functions.
   *
   * Requires entries to contain `methods` property and optional `options`
   * object with options can be passed to the stored functions.
   */
  export abstract class Collection extends AICollection.Collection {
    collection: ItemMap = new Map();
    get(name: Name) {
      return undefined as Item | undefined;
    }
    add(options: SetOptions) {
      return undefined as void;
    }
    resolve(query: string) {
      return undefined as NamedItem | undefined;
    }
    groupByResolve<T extends any>(queries: T[], iteratee?: (arg: T) => string) {
      return {} as Map<NamedItem | undefined, T[]>;
    }
    options(name: AICollection.Name) {
      return (undefined as any) as NonNullable<Item['options']>;
    }
    getOption(name: AICollection.Name, optionKey: string) {
      return undefined as any;
    }
    setOption(name: AICollection.Name, optionKey: string, optionValue: any) {
      return undefined as void;
    }
    validateMethod(name: Name, method: keyof ItemMethods) {
      return undefined as void;
    }
  }
}

/**
 * Subtype of `IMethodCollection` which holds groups of functions used as
 * adaptors for interacting with various files.
 */
export namespace AIAdaptorCollection {
  type Name = AICollection.Name;

  /**
   * Parser function
   */
  export type Parser = AnyFunc;

  /**
   * Writer function
   */
  export type Writer = AnyFunc;

  /**
   * Remover function
   */
  export type Remover = AnyFunc;

  /**
   * Usage analyzer function
   */
  export type UsageAnalyzer = AnyFunc;

  export interface ItemMethods {
    parser?: Parser;
    writer?: Writer;
    remover?: Remover;
    usageAnalyzer?: UsageAnalyzer;
  }

  /**
   * Item properties modified in IAdaptorCollection relative to ICollection
   */
  export interface ItemBase
    extends Omit<AIMethodCollection.ItemBase, 'methods'> {
    methods: ItemMethods;
  }

  /**
   * Interface of a single entry containing methods for interacting with
   * specific file type.
   */
  export type Item = ItemBase & AIMethodCollection.Item;

  /**
   * Item format passed to AdaptorCollection constructor that will be
   * translated to AdaptorItem object
   */
  export type Arg = ItemBase & AICollection.Arg;

  /**
   * Constructor options object
   */
  export interface CtorOptions extends AICollection.CtorOptions {
    /**
     * Collection instance to be used instead of the default
     */
    collection?: { [key in Name]: Arg } | Map<Name, Arg>;
  }

  /**
   * Constructor
   */
  export interface Ctor {
    new (options?: CtorOptions): Collection;
  }

  /**
   * Collection class type with contructor
   */
  export type Class = Ctor & typeof Collection;

  /**
   * Options passed to Set and Add methods
   */
  export type SetOptions = AICollection.SetOptions & ItemBase;

  /**
   * Extension of AdaptorItem which also contains name property
   */
  export interface NamedItem extends Item {
    name: Name;
  }

  /**
   * Mapping of name to Item
   */
  export type ItemMap = Map<Name, Item>;

  /**
   * Subtype of `IMethodCollection` which holds groups of functions used as
   * adaptors for interacting with various files.
   */
  export abstract class Collection extends AIMethodCollection.Collection {
    collection: ItemMap = new Map();
    get(name: Name) {
      return undefined as Item | undefined;
    }
    add(options: SetOptions) {
      return undefined as void;
    }
    resolve(query: string) {
      return undefined as NamedItem | undefined;
    }
    groupByResolve<T extends any>(queries: T[], iteratee?: (arg: T) => string) {
      return {} as Map<NamedItem | undefined, T[]>;
    }
    validateMethod(name: Name, method: keyof ItemMethods) {
      return undefined as void;
    }
  }
}

/**
 * Subtype of `IMethodCollection` which holds groups of functions used as
 * de-/serializers.
 */
export namespace AISerializerCollection {
  type Name = AICollection.Name;

  /**
   * Serializer function
   */
  export type Serializer = AnyFunc<[any, AnyObj], string>;

  /**
   * Deserializer function
   */
  export type Deserializer = AnyFunc<[string, AnyObj], any>;

  export interface ItemMethods {
    serializer?: Serializer;
    deserializer?: Deserializer;
  }

  /**
   * Item properties modified in ISerializerCollection relative to ICollection
   */
  export interface ItemBase
    extends Omit<AIMethodCollection.ItemBase, 'methods'> {
    methods: ItemMethods;
  }

  /**
   * Interface of a single entry containing methods for interacting with
   * specific file type.
   */
  export type Item = ItemBase & AIMethodCollection.Item;

  /**
   * Item format passed to AdaptorCollection constructor that will be
   * translated to AdaptorItem object
   */
  export type Arg = ItemBase & AICollection.Arg;

  /**
   * Constructor options object
   */
  export interface CtorOptions extends AICollection.CtorOptions {
    /**
     * Collection instance to be used instead of the default
     */
    collection?: { [key in Name]: Arg } | Map<Name, Arg>;
  }

  /**
   * Constructor
   */
  export interface Ctor {
    new (options?: CtorOptions): Collection;
  }

  /**
   * Collection class type with contructor
   */
  export type Class = Ctor & typeof Collection;

  /**
   * Options passed to Set and Add methods
   */
  export type SetOptions = AICollection.SetOptions & ItemBase;

  /**
   * Extension of AdaptorItem which also contains name property
   */
  export interface NamedItem extends Item {
    name: Name;
  }

  /**
   * Mapping of name to Item
   */
  export type ItemMap = Map<Name, Item>;

  /**
   * Subtype of `IMethodCollection` which holds groups of functions used as
   * de-/serializers.
   */
  export abstract class Collection extends AIMethodCollection.Collection {
    collection: ItemMap = new Map();
    get(name: Name) {
      return undefined as Item | undefined;
    }
    add(options: SetOptions) {
      return undefined as void;
    }
    resolve(query: string) {
      return undefined as NamedItem | undefined;
    }
    groupByResolve<T extends any>(queries: T[], iteratee?: (arg: T) => string) {
      return {} as Map<NamedItem | undefined, T[]>;
    }
    validateMethod(name: Name, method: keyof ItemMethods) {
      return undefined as void;
    }
  }
}
