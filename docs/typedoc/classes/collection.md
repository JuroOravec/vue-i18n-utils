[i18n-util](../README.md) › [Collection](collection.md)

# Class: Collection

Class for storing groups of values that can be matched either by a name or
by matching a regexp pattern.

## Hierarchy

* **Collection**

## Implements

* [Collection](../README.md#abstract-collection)

## Index

### Constructors

* [constructor](collection.md#constructor)

### Properties

* [collection](collection.md#collection)

### Methods

* [add](collection.md#add)
* [delete](collection.md#delete)
* [get](collection.md#get)
* [groupByResolve](collection.md#groupbyresolve)
* [has](collection.md#has)
* [resolve](collection.md#resolve)
* [set](collection.md#set)
* [unset](collection.md#unset)
* [validate](collection.md#validate)

## Constructors

###  constructor

\+ **new Collection**(`options`: [CtorOptions](../README.md#ctoroptions)): *[Collection](collection.md)*

*Defined in [src/lib/collection/index.ts:11](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/index.ts#L11)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [CtorOptions](../README.md#ctoroptions) | {} |

**Returns:** *[Collection](collection.md)*

## Properties

###  collection

• **collection**: *[Map](arraymap.md#static-map)‹any, any›* = new Map()

*Defined in [src/lib/collection/index.ts:11](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/index.ts#L11)*

## Methods

###  add

▸ **add**(`params`: [SetOptions](../README.md#setoptions)): *void*

*Defined in [src/lib/collection/index.ts:32](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/index.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [SetOptions](../README.md#setoptions) |

**Returns:** *void*

___

###  delete

▸ **delete**(`name`: [Name](../README.md#name)): *void*

*Defined in [src/lib/collection/index.ts:47](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/index.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](../README.md#name) |

**Returns:** *void*

___

###  get

▸ **get**(`name`: [Name](../README.md#name)): *any*

*Defined in [src/lib/collection/index.ts:24](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/index.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](../README.md#name) |

**Returns:** *any*

___

###  groupByResolve

▸ **groupByResolve**<**T**>(`queries`: T[], `iteratee`: function): *[Map](arraymap.md#static-map)‹undefined | [NamedItem](../README.md#nameditem), T[]›*

*Defined in [src/lib/collection/index.ts:68](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/index.ts#L68)*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

▪ **queries**: *T[]*

▪`Default value`  **iteratee**: *function*= (x) => (x as any) as string

▸ (`arg`: T): *string*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | T |

**Returns:** *[Map](arraymap.md#static-map)‹undefined | [NamedItem](../README.md#nameditem), T[]›*

___

###  has

▸ **has**(`name`: [Name](../README.md#name)): *boolean*

*Defined in [src/lib/collection/index.ts:28](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/index.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](../README.md#name) |

**Returns:** *boolean*

___

###  resolve

▸ **resolve**(`query`: string): *undefined | [NamedItem](../README.md#nameditem)*

*Defined in [src/lib/collection/index.ts:58](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/index.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`query` | string |

**Returns:** *undefined | [NamedItem](../README.md#nameditem)*

___

###  set

▸ **set**(`params`: [SetOptions](../README.md#setoptions)): *void*

*Defined in [src/lib/collection/index.ts:39](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/index.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [SetOptions](../README.md#setoptions) |

**Returns:** *void*

___

###  unset

▸ **unset**(`name`: [Name](../README.md#name)): *void*

*Defined in [src/lib/collection/index.ts:54](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/index.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](../README.md#name) |

**Returns:** *void*

___

###  validate

▸ **validate**(`name`: [Name](../README.md#name), `prop`: string): *void*

*Defined in [src/lib/collection/index.ts:84](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/index.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](../README.md#name) |
`prop` | string |

**Returns:** *void*
