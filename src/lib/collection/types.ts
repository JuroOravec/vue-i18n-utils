/**
 * Types for Collection classes and functions.
 *
 * These types are more concrete compared to the abstract types.
 *
 * These types should be used by classes / concretions in this or other
 * components.
 */

import {
  AICollection,
  AIMethodCollection,
  AIAdaptorCollection,
  AISerializerCollection,
} from './types-abstract';

export * from './types-abstract';

export namespace ICollection {
  /**
   * Type used as name
   */
  export type Name = AICollection.Name;

  /**
   * Interface of a single entry.
   */
  export type Item = AICollection.Item;

  /**
   * Item format passed to Collection constructor that will be
   * translated to CollectionItem object
   */
  export type Arg = AICollection.Arg;

  /**
   * Mapping of name to Item
   */
  export type ItemMap = AICollection.ItemMap;

  /**
   * Constructor options object
   */
  export type CtorOptions = AICollection.CtorOptions;

  /**
   * Constructor
   */
  export type Ctor = AICollection.Ctor;

  /**
   * Collection class type with contructor
   */
  export type Class = AICollection.Class;

  /**
   * Options passed to Set and Add methods
   */
  export type SetOptions = AICollection.SetOptions;

  /**
   * Extension of Item which also contains name property
   */
  export type NamedItem = AICollection.NamedItem;

  export abstract class Collection extends AICollection.Collection {}
}

/**
 * Subtype of `ICollection` which holds groups of functions.
 *
 * Requires entries to contain `methods` property and optional `options`
 * object with options can be passed to the stored functions.
 */
export namespace IMethodCollection {
  export type ItemMethods = AIMethodCollection.ItemMethods;

  /**
   * Item properties modified in IMethodCollection relative to ICollection
   */
  export type ItemBase = AIMethodCollection.ItemBase;

  /**
   * Single entry containing various methods and an options object which is
   * passed to the methods.
   */
  export type Item = AIMethodCollection.Item;

  /**
   * Item format passed to the constructor that will be
   * translated to Collection entry
   */
  export type Arg = AIMethodCollection.Arg;

  /**
   * Constructor options object
   */
  export type CtorOptions = AIMethodCollection.CtorOptions;

  /**
   * Constructor
   */
  export type Ctor = AIMethodCollection.Ctor;

  /**
   * Type used to force types of IMethodCollection over the
   * ICollection.Collection class
   */
  export type BaseClass = AIMethodCollection.BaseClass;

  /**
   * Collection class type with contructor
   */
  export type Class = AIMethodCollection.Class;

  /**
   * Options passed to Set and Add methods
   */
  export type SetOptions = AIMethodCollection.SetOptions;

  /**
   * Extension of Item which also contains name property
   */
  export type NamedItem = AIMethodCollection.NamedItem;

  /**
   * Mapping of name to Item
   */
  export type ItemMap = AIMethodCollection.ItemMap;

  /**
   * Subtype of `ICollection.Collection` which holds groups of functions.
   *
   * Requires entries to contain `methods` property and optional `options`
   * object with options can be passed to the stored functions.
   */
  export abstract class Collection extends AIMethodCollection.Collection {}
}

/**
 * Subtype of `IMethodCollection` which holds groups of functions used as
 * adaptors for interacting with various files.
 */
export namespace IAdaptorCollection {
  /**
   * Parser function
   */
  export type Parser = AIAdaptorCollection.Parser;

  /**
   * Writer function
   */
  export type Writer = AIAdaptorCollection.Writer;

  /**
   * Remover function
   */
  export type Remover = AIAdaptorCollection.Remover;

  /**
   * Usage analyzer function
   */
  export type UsageAnalyzer = AIAdaptorCollection.UsageAnalyzer;

  export type ItemMethods = AIAdaptorCollection.ItemMethods;

  /**
   * Item properties modified in IAdaptorCollection relative to ICollection
   */
  export type ItemBase = AIAdaptorCollection.ItemBase;

  /**
   * Interface of a single entry containing methods for interacting with
   * specific file type.
   */
  export type Item = AIAdaptorCollection.Item;

  /**
   * Item format passed to AdaptorCollection constructor that will be
   * translated to AdaptorItem object
   */
  export type Arg = AIAdaptorCollection.Arg;

  /**
   * Constructor options object
   */
  export type CtorOptions = AIAdaptorCollection.CtorOptions;

  /**
   * Constructor
   */
  export type Ctor = AIAdaptorCollection.Ctor;

  /**
   * Collection class type with contructor
   */
  export type Class = AIAdaptorCollection.Class;

  /**
   * Options passed to Set and Add methods
   */
  export type SetOptions = AIAdaptorCollection.SetOptions;

  /**
   * Extension of AdaptorItem which also contains name property
   */
  export type NamedItem = AIAdaptorCollection.NamedItem;

  /**
   * Mapping of name to Item
   */
  export type ItemMap = AIAdaptorCollection.ItemMap;

  /**
   * Subtype of `IMethodCollection` which holds groups of functions used as
   * adaptors for interacting with various files.
   */
  export abstract class Collection extends AIAdaptorCollection.Collection {}
}

/**
 * Subtype of `IMethodCollection` which holds groups of functions used as
 * de-/serializers.
 */
export namespace ISerializerCollection {
  /**
   * Serializer function
   */
  export type Serializer = AISerializerCollection.Serializer;

  /**
   * Deserializer function
   */
  export type Deserializer = AISerializerCollection.Deserializer;

  export type ItemMethods = AISerializerCollection.ItemMethods;

  /**
   * Item properties modified in ISerializerCollection relative to ICollection
   */
  export type ItemBase = AISerializerCollection.ItemBase;

  /**
   * Interface of a single entry containing methods for interacting with
   * specific file type.
   */
  export type Item = AISerializerCollection.Item;

  /**
   * Item format passed to AdaptorCollection constructor that will be
   * translated to AdaptorItem object
   */
  export type Arg = AISerializerCollection.Arg;

  /**
   * Constructor options object
   */
  export type CtorOptions = AISerializerCollection.CtorOptions;

  /**
   * Constructor
   */
  export type Ctor = AISerializerCollection.Ctor;

  /**
   * Collection class type with contructor
   */
  export type Class = AISerializerCollection.Class;

  /**
   * Options passed to Set and Add methods
   */
  export type SetOptions = AISerializerCollection.SetOptions;

  /**
   * Extension of AdaptorItem which also contains name property
   */
  export type NamedItem = AISerializerCollection.NamedItem;

  /**
   * Mapping of name to Item
   */
  export type ItemMap = AISerializerCollection.ItemMap;

  /**
   * Subtype of `IMethodCollection` which holds groups of functions used as
   * de-/serializers.
   */
  export abstract class Collection extends AISerializerCollection.Collection {}
}
