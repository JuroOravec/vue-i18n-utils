[i18n-util](../README.md) › [Item](item.md)

# Class: Item

## Hierarchy

* **Item**

  ↳ [DefinitionItem](definitionitem.md)

  ↳ [UsageItem](usageitem.md)

## Implements

* [Item](../README.md#item)

## Index

### Constructors

* [constructor](item.md#constructor)

### Properties

* [blockIndex](item.md#optional-blockindex)
* [column](item.md#optional-column)
* [line](item.md#optional-line)
* [locale](item.md#optional-locale)
* [origin](item.md#optional-origin)
* [path](item.md#path)
* [source](item.md#optional-source)
* [value](item.md#value)

### Accessors

* [idHash](item.md#idhash)
* [localeTokenHash](item.md#localetokenhash)
* [pathHash](item.md#pathhash)
* [positionHash](item.md#positionhash)
* [sourceHash](item.md#sourcehash)

### Methods

* [copy](item.md#copy)

## Constructors

###  constructor

\+ **new Item**(`__namedParameters`: object): *[Item](item.md)*

*Defined in [src/lib/item/index.ts:24](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L24)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`blockIndex` | undefined &#124; number |
`column` | undefined &#124; number |
`line` | undefined &#124; number |
`locale` | undefined &#124; string |
`origin` | undefined &#124; string |
`path` | undefined &#124; string[] |
`source` | undefined &#124; string |
`value` | any |

**Returns:** *[Item](item.md)*

## Properties

### `Optional` blockIndex

• **blockIndex**? : *I_Item.Item["blockIndex"]*

*Implementation of [Item](../README.md#item).[blockIndex](../README.md#optional-blockindex)*

*Defined in [src/lib/item/index.ts:24](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L24)*

___

### `Optional` column

• **column**? : *I_Item.Item["column"]*

*Implementation of [Item](../README.md#item).[column](../README.md#optional-column)*

*Defined in [src/lib/item/index.ts:20](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L20)*

___

### `Optional` line

• **line**? : *I_Item.Item["line"]*

*Implementation of [Item](../README.md#item).[line](../README.md#optional-line)*

*Defined in [src/lib/item/index.ts:19](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L19)*

___

### `Optional` locale

• **locale**? : *I_Item.Item["locale"]*

*Implementation of [Item](../README.md#item).[locale](../README.md#optional-locale)*

*Defined in [src/lib/item/index.ts:21](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L21)*

___

### `Optional` origin

• **origin**? : *I_Item.Item["origin"]*

*Implementation of [Item](../README.md#item).[origin](../README.md#optional-origin)*

*Defined in [src/lib/item/index.ts:23](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L23)*

___

###  path

• **path**: *I_Item.Item["path"]*

*Implementation of [Item](../README.md#item).[path](../README.md#path)*

*Defined in [src/lib/item/index.ts:18](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L18)*

___

### `Optional` source

• **source**? : *I_Item.Item["source"]*

*Implementation of [Item](../README.md#item).[source](../README.md#optional-source)*

*Defined in [src/lib/item/index.ts:22](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L22)*

___

###  value

• **value**: *I_Item.Item["value"]*

*Implementation of [Item](../README.md#item).[value](../README.md#value)*

*Defined in [src/lib/item/index.ts:17](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L17)*

## Accessors

###  idHash

• **get idHash**(): *number*

*Defined in [src/lib/item/index.ts:73](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L73)*

**Returns:** *number*

___

###  localeTokenHash

• **get localeTokenHash**(): *number*

*Defined in [src/lib/item/index.ts:50](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L50)*

**Returns:** *number*

___

###  pathHash

• **get pathHash**(): *number*

*Defined in [src/lib/item/index.ts:46](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L46)*

**Returns:** *number*

___

###  positionHash

• **get positionHash**(): *number*

*Defined in [src/lib/item/index.ts:62](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L62)*

**Returns:** *number*

___

###  sourceHash

• **get sourceHash**(): *number*

*Defined in [src/lib/item/index.ts:54](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L54)*

**Returns:** *number*

## Methods

###  copy

▸ **copy**(`newValuesObj`: Partial‹[CtorOptions](../README.md#ctoroptions)›): *[Item](../README.md#item)*

*Defined in [src/lib/item/index.ts:85](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L85)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`newValuesObj` | Partial‹[CtorOptions](../README.md#ctoroptions)› | {} |

**Returns:** *[Item](../README.md#item)*
