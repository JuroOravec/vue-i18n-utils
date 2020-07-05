[i18n-util](../README.md) › [AdaptorCollection](adaptorcollection.md)

# Class: AdaptorCollection

Subclass identical to `MethodCollection`, except the typing uses
`IAdaptorCollection` instead, which is for holding groups of functions
used as adaptors for interacting with various files.

## Hierarchy

  ↳ [Collection](../README.md#abstract-collection)

  ↳ **AdaptorCollection**

## Implements

* [Collection](../README.md#abstract-collection)

## Index

### Constructors

* [constructor](adaptorcollection.md#constructor)

### Properties

* [collection](adaptorcollection.md#collection)

### Methods

* [add](adaptorcollection.md#add)
* [delete](adaptorcollection.md#delete)
* [get](adaptorcollection.md#get)
* [getOption](adaptorcollection.md#getoption)
* [groupByResolve](adaptorcollection.md#groupbyresolve)
* [has](adaptorcollection.md#has)
* [options](adaptorcollection.md#options)
* [resolve](adaptorcollection.md#resolve)
* [setOption](adaptorcollection.md#setoption)
* [validate](adaptorcollection.md#validate)
* [validateMethod](adaptorcollection.md#validatemethod)

## Constructors

###  constructor

\+ **new AdaptorCollection**(`options`: [CtorOptions](../README.md#ctoroptions)): *[AdaptorCollection](adaptorcollection.md)*

*Defined in [src/lib/i18n-util/adaptor.ts:15](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/adaptor.ts#L15)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [CtorOptions](../README.md#ctoroptions) | {} |

**Returns:** *[AdaptorCollection](adaptorcollection.md)*

## Properties

###  collection

• **collection**: *[ItemMap](../README.md#itemmap)* = new Map()

*Inherited from [Collection](../README.md#abstract-collection).[collection](../README.md#collection)*

*Overrides [Collection](../README.md#abstract-collection).[collection](../README.md#collection)*

*Defined in [src/lib/collection/types-abstract.ts:350](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L350)*

## Methods

###  add

▸ **add**(`options`: [SetOptions](../README.md#setoptions)): *void*

*Inherited from [Collection](../README.md#abstract-collection).[add](../README.md#add)*

*Overrides [Collection](../README.md#abstract-collection).[add](../README.md#add)*

*Defined in [src/lib/collection/types-abstract.ts:354](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L354)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SetOptions](../README.md#setoptions) |

**Returns:** *void*

___

###  delete

▸ **delete**(`name`: [Name](../README.md#name)): *void*

*Inherited from [Collection](../README.md#abstract-collection).[delete](../README.md#delete)*

*Defined in [src/lib/collection/types-abstract.ts:107](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L107)*

Remove an item from the collection.

Throws if no item with the name exists in the collection.

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](../README.md#name) |

**Returns:** *void*

___

###  get

▸ **get**(`name`: [Name](../README.md#name)): *undefined | [ItemBase](../README.md#itembase)‹› & [ItemBase](../README.md#itembase) & [Item](../README.md#item)*

*Inherited from [Collection](../README.md#abstract-collection).[get](../README.md#get)*

*Overrides [Collection](../README.md#abstract-collection).[get](../README.md#get)*

*Defined in [src/lib/collection/types-abstract.ts:351](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L351)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](../README.md#name) |

**Returns:** *undefined | [ItemBase](../README.md#itembase)‹› & [ItemBase](../README.md#itembase) & [Item](../README.md#item)*

___

###  getOption

▸ **getOption**(`name`: [Name](../README.md#name), `optionKey`: string): *any*

*Inherited from [Collection](../README.md#abstract-collection).[getOption](../README.md#getoption)*

*Defined in [src/lib/collection/types-abstract.ts:240](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L240)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](../README.md#name) |
`optionKey` | string |

**Returns:** *any*

___

###  groupByResolve

▸ **groupByResolve**<**T**>(`queries`: T[], `iteratee?`: undefined | function): *[Map](arraymap.md#static-map)‹undefined | [NamedItem](../README.md#nameditem)‹›, T[]›*

*Inherited from [Collection](../README.md#abstract-collection).[groupByResolve](../README.md#groupbyresolve)*

*Overrides [Collection](../README.md#abstract-collection).[groupByResolve](../README.md#groupbyresolve)*

*Defined in [src/lib/collection/types-abstract.ts:360](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L360)*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

Name | Type |
------ | ------ |
`queries` | T[] |
`iteratee?` | undefined &#124; function |

**Returns:** *[Map](arraymap.md#static-map)‹undefined | [NamedItem](../README.md#nameditem)‹›, T[]›*

___

###  has

▸ **has**(`name`: [Name](../README.md#name)): *boolean*

*Inherited from [Collection](../README.md#abstract-collection).[has](../README.md#has)*

*Defined in [src/lib/collection/types-abstract.ts:91](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L91)*

Check if a collection has an item by it's name.

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](../README.md#name) |

**Returns:** *boolean*

___

###  options

▸ **options**(`name`: [Name](../README.md#name)): *object*

*Inherited from [Collection](../README.md#abstract-collection).[options](../README.md#options)*

*Defined in [src/lib/collection/types-abstract.ts:237](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L237)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](../README.md#name) |

**Returns:** *object*

* \[ **key**: *number*\]: V

___

###  resolve

▸ **resolve**(`query`: string): *undefined | [NamedItem](../README.md#nameditem)‹›*

*Inherited from [Collection](../README.md#abstract-collection).[resolve](../README.md#resolve)*

*Overrides [Collection](../README.md#abstract-collection).[resolve](../README.md#resolve)*

*Defined in [src/lib/collection/types-abstract.ts:357](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L357)*

**Parameters:**

Name | Type |
------ | ------ |
`query` | string |

**Returns:** *undefined | [NamedItem](../README.md#nameditem)‹›*

___

###  setOption

▸ **setOption**(`name`: [Name](../README.md#name), `optionKey`: string, `optionValue`: any): *void*

*Inherited from [Collection](../README.md#abstract-collection).[setOption](../README.md#setoption)*

*Defined in [src/lib/collection/types-abstract.ts:243](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L243)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](../README.md#name) |
`optionKey` | string |
`optionValue` | any |

**Returns:** *void*

___

###  validate

▸ **validate**(`name`: [Name](../README.md#name), `prop`: string): *void*

*Inherited from [Collection](../README.md#abstract-collection).[validate](../README.md#validate)*

*Defined in [src/lib/collection/types-abstract.ts:130](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L130)*

Validate that a particular item in collection has a specific property.

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](../README.md#name) |
`prop` | string |

**Returns:** *void*

___

###  validateMethod

▸ **validateMethod**(`name`: [Name](../README.md#name), `method`: keyof ItemMethods): *void*

*Inherited from [Collection](../README.md#abstract-collection).[validateMethod](../README.md#validatemethod)*

*Overrides [Collection](../README.md#abstract-collection).[validateMethod](../README.md#validatemethod)*

*Defined in [src/lib/collection/types-abstract.ts:363](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L363)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](../README.md#name) |
`method` | keyof ItemMethods |

**Returns:** *void*
