[i18n-util](../README.md) › [MethodCollection](methodcollection.md)

# Class: MethodCollection

Subclass of `Collection` which holds groups of functions.

Requires entries to contain `methods` property and optional `options`
object with options can be passed to the stored functions.

## Hierarchy

* object

  ↳ **MethodCollection**

## Implements

* [Collection](../README.md#abstract-collection)

## Index

### Methods

* [getOption](methodcollection.md#getoption)
* [options](methodcollection.md#options)
* [setOption](methodcollection.md#setoption)
* [validateMethod](methodcollection.md#validatemethod)

## Methods

###  getOption

▸ **getOption**(`name`: [Name](../README.md#name), `optionKey`: string): *any*

*Defined in [src/lib/collection/index.ts:109](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/index.ts#L109)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](../README.md#name) |
`optionKey` | string |

**Returns:** *any*

___

###  options

▸ **options**(`name`: [Name](../README.md#name)): *object*

*Defined in [src/lib/collection/index.ts:101](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/index.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](../README.md#name) |

**Returns:** *object*

* \[ **key**: *number*\]: V

___

###  setOption

▸ **setOption**(`name`: [Name](../README.md#name), `optionKey`: string, `optionValue`: any): *void*

*Defined in [src/lib/collection/index.ts:114](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/index.ts#L114)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](../README.md#name) |
`optionKey` | string |
`optionValue` | any |

**Returns:** *void*

___

###  validateMethod

▸ **validateMethod**(`name`: [Name](../README.md#name), `method`: keyof ItemMethods): *void*

*Defined in [src/lib/collection/index.ts:119](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/index.ts#L119)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](../README.md#name) |
`method` | keyof ItemMethods |

**Returns:** *void*
