[i18n-util](../README.md) › [ArrayMap](arraymap.md)

# Class: ArrayMap <**K, V**>

## Type parameters

▪ **K**: *any*

▪ **V**: *any*

## Hierarchy

* [Map](arraymap.md#static-map)‹K, V[]›

  ↳ **ArrayMap**

## Index

### Properties

* [[Symbol.toStringTag]](arraymap.md#readonly-[symbol.tostringtag])
* [size](arraymap.md#readonly-size)
* [Map](arraymap.md#static-map)

### Methods

* [[Symbol.iterator]](arraymap.md#[symbol.iterator])
* [clear](arraymap.md#clear)
* [delete](arraymap.md#delete)
* [entries](arraymap.md#entries)
* [forEach](arraymap.md#foreach)
* [get](arraymap.md#get)
* [getOrCreate](arraymap.md#getorcreate)
* [has](arraymap.md#has)
* [keys](arraymap.md#keys)
* [push](arraymap.md#push)
* [set](arraymap.md#set)
* [values](arraymap.md#values)
* [groupBy](arraymap.md#static-groupby)

## Properties

### `Readonly` [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *string*

*Inherited from [ArrayMap](arraymap.md).[[Symbol.toStringTag]](arraymap.md#readonly-[symbol.tostringtag])*

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130

___

### `Readonly` size

• **size**: *number*

*Inherited from [ArrayMap](arraymap.md).[size](arraymap.md#readonly-size)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:28

___

### `Static` Map

▪ **Map**: *MapConstructor*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:36

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹[K, V[]]›*

*Inherited from [ArrayMap](arraymap.md).[[Symbol.iterator]](arraymap.md#[symbol.iterator])*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

Returns an iterable of entries in the map.

**Returns:** *IterableIterator‹[K, V[]]›*

___

###  clear

▸ **clear**(): *void*

*Inherited from [ArrayMap](arraymap.md).[clear](arraymap.md#clear)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:22

**Returns:** *void*

___

###  delete

▸ **delete**(`key`: K): *boolean*

*Inherited from [ArrayMap](arraymap.md).[delete](arraymap.md#delete)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *boolean*

___

###  entries

▸ **entries**(): *IterableIterator‹[K, V[]]›*

*Inherited from [ArrayMap](arraymap.md).[entries](arraymap.md#entries)*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:126

Returns an iterable of key, value pairs for every entry in the map.

**Returns:** *IterableIterator‹[K, V[]]›*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from [ArrayMap](arraymap.md).[forEach](arraymap.md#foreach)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:24

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: V[], `key`: K, `map`: [Map](arraymap.md#static-map)‹K, V[]›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | V[] |
`key` | K |
`map` | [Map](arraymap.md#static-map)‹K, V[]› |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  get

▸ **get**(`key`: K): *V[] | undefined*

*Inherited from [ArrayMap](arraymap.md).[get](arraymap.md#get)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *V[] | undefined*

___

###  getOrCreate

▸ **getOrCreate**(`key`: K): *V[]*

*Defined in [src/lib/util/array-map.ts:5](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/array-map.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *V[]*

___

###  has

▸ **has**(`key`: K): *boolean*

*Inherited from [ArrayMap](arraymap.md).[has](arraymap.md#has)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *boolean*

___

###  keys

▸ **keys**(): *IterableIterator‹K›*

*Inherited from [ArrayMap](arraymap.md).[keys](arraymap.md#keys)*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:131

Returns an iterable of keys in the map

**Returns:** *IterableIterator‹K›*

___

###  push

▸ **push**(`key`: K, `value`: V, ...`values`: V[]): *this*

*Defined in [src/lib/util/array-map.ts:14](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/array-map.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |
`value` | V |
`...values` | V[] |

**Returns:** *this*

___

###  set

▸ **set**(`key`: K, `value`: V[]): *this*

*Inherited from [ArrayMap](arraymap.md).[set](arraymap.md#set)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |
`value` | V[] |

**Returns:** *this*

___

###  values

▸ **values**(): *IterableIterator‹V[]›*

*Inherited from [ArrayMap](arraymap.md).[values](arraymap.md#values)*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:136

Returns an iterable of values in the map

**Returns:** *IterableIterator‹V[]›*

___

### `Static` groupBy

▸ **groupBy**<**K**, **V**>(`list`: V[] | IterableIterator‹V›, `iteratee`: function): *[ArrayMap](arraymap.md)‹K, V›*

*Defined in [src/lib/util/array-map.ts:21](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/array-map.ts#L21)*

**Type parameters:**

▪ **K**: *any*

▪ **V**: *any*

**Parameters:**

▪ **list**: *V[] | IterableIterator‹V›*

▪ **iteratee**: *function*

▸ (`x`: V): *K*

**Parameters:**

Name | Type |
------ | ------ |
`x` | V |

**Returns:** *[ArrayMap](arraymap.md)‹K, V›*
