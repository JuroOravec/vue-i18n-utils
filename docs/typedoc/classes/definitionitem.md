[i18n-util](../README.md) › [DefinitionItem](definitionitem.md)

# Class: DefinitionItem

## Hierarchy

* [Item](item.md)

  ↳ **DefinitionItem**

  ↳ [JsonYamlDefinitionItem](jsonyamldefinitionitem.md)

  ↳ [VueDefinitionItem](vuedefinitionitem.md)

## Implements

* [Item](../README.md#item)
* [Item](../README.md#item)

## Index

### Properties

* [blockIndex](definitionitem.md#optional-blockindex)
* [column](definitionitem.md#optional-column)
* [constructor](definitionitem.md#constructor)
* [line](definitionitem.md#optional-line)
* [locale](definitionitem.md#locale)
* [origin](definitionitem.md#origin)
* [path](definitionitem.md#path)
* [source](definitionitem.md#source)
* [sourceScope](definitionitem.md#optional-sourcescope)
* [value](definitionitem.md#value)

### Accessors

* [idHash](definitionitem.md#idhash)
* [localeTokenHash](definitionitem.md#localetokenhash)
* [pathHash](definitionitem.md#pathhash)
* [positionHash](definitionitem.md#positionhash)
* [sourceHash](definitionitem.md#sourcehash)
* [defaults](definitionitem.md#static-defaults)

### Methods

* [copy](definitionitem.md#copy)

## Properties

### `Optional` blockIndex

• **blockIndex**? : *I_Item.Item["blockIndex"]*

*Implementation of [Item](../README.md#item).[blockIndex](../README.md#optional-blockindex)*

*Inherited from [Item](item.md).[blockIndex](item.md#optional-blockindex)*

*Defined in [src/lib/item/index.ts:24](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L24)*

___

### `Optional` column

• **column**? : *I_Item.Item["column"]*

*Implementation of [Item](../README.md#item).[column](../README.md#optional-column)*

*Inherited from [Item](item.md).[column](item.md#optional-column)*

*Defined in [src/lib/item/index.ts:20](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L20)*

___

###  constructor

\+ **new DefinitionItem**(`options`: [CtorOptions](../README.md#ctoroptions)): *[DefinitionItem](definitionitem.md)*

*Overrides [Item](item.md).[constructor](item.md#constructor)*

*Defined in [src/lib/definition/index.ts:15](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/index.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [CtorOptions](../README.md#ctoroptions) |

**Returns:** *[DefinitionItem](definitionitem.md)*

___

### `Optional` line

• **line**? : *I_Item.Item["line"]*

*Implementation of [Item](../README.md#item).[line](../README.md#optional-line)*

*Inherited from [Item](item.md).[line](item.md#optional-line)*

*Defined in [src/lib/item/index.ts:19](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L19)*

___

###  locale

• **locale**: *string*

*Implementation of [Item](../README.md#item).[locale](../README.md#optional-locale)*

*Overrides [Item](item.md).[locale](item.md#optional-locale)*

*Defined in [src/lib/definition/index.ts:12](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/index.ts#L12)*

___

###  origin

• **origin**: *string*

*Implementation of [Item](../README.md#item).[origin](../README.md#optional-origin)*

*Overrides [Item](item.md).[origin](item.md#optional-origin)*

*Defined in [src/lib/definition/index.ts:15](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/index.ts#L15)*

___

###  path

• **path**: *[IPath](../README.md#ipath)*

*Implementation of [Item](../README.md#item).[path](../README.md#path)*

*Overrides [Item](item.md).[path](item.md#path)*

*Defined in [src/lib/definition/index.ts:11](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/index.ts#L11)*

___

###  source

• **source**: *string*

*Implementation of [Item](../README.md#item).[source](../README.md#optional-source)*

*Overrides [Item](item.md).[source](item.md#optional-source)*

*Defined in [src/lib/definition/index.ts:13](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/index.ts#L13)*

___

### `Optional` sourceScope

• **sourceScope**? : *"locale" | "general"*

*Implementation of [Item](../README.md#item).[sourceScope](../README.md#optional-sourcescope)*

*Defined in [src/lib/definition/index.ts:14](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/index.ts#L14)*

___

###  value

• **value**: *I_Item.Item["value"]*

*Implementation of [Item](../README.md#item).[value](../README.md#value)*

*Inherited from [Item](item.md).[value](item.md#value)*

*Defined in [src/lib/item/index.ts:17](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L17)*

## Accessors

###  idHash

• **get idHash**(): *number*

*Inherited from [Item](item.md).[idHash](item.md#idhash)*

*Defined in [src/lib/item/index.ts:73](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L73)*

**Returns:** *number*

___

###  localeTokenHash

• **get localeTokenHash**(): *number*

*Inherited from [Item](item.md).[localeTokenHash](item.md#localetokenhash)*

*Defined in [src/lib/item/index.ts:50](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L50)*

**Returns:** *number*

___

###  pathHash

• **get pathHash**(): *number*

*Inherited from [Item](item.md).[pathHash](item.md#pathhash)*

*Defined in [src/lib/item/index.ts:46](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L46)*

**Returns:** *number*

___

###  positionHash

• **get positionHash**(): *number*

*Inherited from [Item](item.md).[positionHash](item.md#positionhash)*

*Defined in [src/lib/item/index.ts:62](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L62)*

**Returns:** *number*

___

###  sourceHash

• **get sourceHash**(): *number*

*Inherited from [Item](item.md).[sourceHash](item.md#sourcehash)*

*Defined in [src/lib/item/index.ts:54](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L54)*

**Returns:** *number*

___

### `Static` defaults

• **get defaults**(): *object*

*Defined in [src/lib/definition/index.ts:36](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/index.ts#L36)*

**Returns:** *object*

* **origin**: *string* = ""

* **source**: *string* = ""

## Methods

###  copy

▸ **copy**(`newValuesObj`: Partial‹[CtorOptions](../README.md#ctoroptions)›): *[Item](../README.md#item)‹›*

*Overrides [Item](item.md).[copy](item.md#copy)*

*Defined in [src/lib/definition/index.ts:32](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/index.ts#L32)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`newValuesObj` | Partial‹[CtorOptions](../README.md#ctoroptions)› | {} |

**Returns:** *[Item](../README.md#item)‹›*
