[i18n-util](../README.md) › [JsonYamlDefinitionItem](jsonyamldefinitionitem.md)

# Class: JsonYamlDefinitionItem

## Hierarchy

  ↳ [DefinitionItem](definitionitem.md)

  ↳ **JsonYamlDefinitionItem**

## Implements

* [Item](../README.md#item)
* [Item](../README.md#item)
* [DefinitionItem](../README.md#definitionitem)

## Index

### Constructors

* [constructor](jsonyamldefinitionitem.md#constructor)

### Properties

* [blockIndex](jsonyamldefinitionitem.md#optional-blockindex)
* [column](jsonyamldefinitionitem.md#optional-column)
* [line](jsonyamldefinitionitem.md#optional-line)
* [locale](jsonyamldefinitionitem.md#locale)
* [origin](jsonyamldefinitionitem.md#origin)
* [path](jsonyamldefinitionitem.md#path)
* [rootIsArray](jsonyamldefinitionitem.md#optional-rootisarray)
* [source](jsonyamldefinitionitem.md#source)
* [sourceScope](jsonyamldefinitionitem.md#optional-sourcescope)
* [value](jsonyamldefinitionitem.md#value)

### Accessors

* [idHash](jsonyamldefinitionitem.md#idhash)
* [localeTokenHash](jsonyamldefinitionitem.md#localetokenhash)
* [pathHash](jsonyamldefinitionitem.md#pathhash)
* [positionHash](jsonyamldefinitionitem.md#positionhash)
* [sourceHash](jsonyamldefinitionitem.md#sourcehash)
* [defaults](jsonyamldefinitionitem.md#static-defaults)

### Methods

* [copy](jsonyamldefinitionitem.md#copy)

## Constructors

###  constructor

\+ **new JsonYamlDefinitionItem**(`options`: IAdaptorJY.DefinitionItemCtorOptions): *[JsonYamlDefinitionItem](jsonyamldefinitionitem.md)*

*Overrides [DefinitionItem](definitionitem.md).[constructor](definitionitem.md#constructor)*

*Defined in [src/lib/adaptors/json-yaml/index.ts:29](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/index.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | IAdaptorJY.DefinitionItemCtorOptions |

**Returns:** *[JsonYamlDefinitionItem](jsonyamldefinitionitem.md)*

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

### `Optional` line

• **line**? : *I_Item.Item["line"]*

*Implementation of [Item](../README.md#item).[line](../README.md#optional-line)*

*Inherited from [Item](item.md).[line](item.md#optional-line)*

*Defined in [src/lib/item/index.ts:19](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L19)*

___

###  locale

• **locale**: *string*

*Implementation of [Item](../README.md#item).[locale](../README.md#optional-locale)*

*Inherited from [DefinitionItem](definitionitem.md).[locale](definitionitem.md#locale)*

*Overrides [Item](item.md).[locale](item.md#optional-locale)*

*Defined in [src/lib/definition/index.ts:12](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/index.ts#L12)*

___

###  origin

• **origin**: *string*

*Implementation of [Item](../README.md#item).[origin](../README.md#optional-origin)*

*Inherited from [DefinitionItem](definitionitem.md).[origin](definitionitem.md#origin)*

*Overrides [Item](item.md).[origin](item.md#optional-origin)*

*Defined in [src/lib/definition/index.ts:15](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/index.ts#L15)*

___

###  path

• **path**: *[IPath](../README.md#ipath)*

*Implementation of [Item](../README.md#item).[path](../README.md#path)*

*Inherited from [DefinitionItem](definitionitem.md).[path](definitionitem.md#path)*

*Overrides [Item](item.md).[path](item.md#path)*

*Defined in [src/lib/definition/index.ts:11](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/index.ts#L11)*

___

### `Optional` rootIsArray

• **rootIsArray**? : *undefined | false | true*

*Implementation of [DefinitionItem](../README.md#definitionitem).[rootIsArray](../README.md#optional-rootisarray)*

*Defined in [src/lib/adaptors/json-yaml/index.ts:29](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/index.ts#L29)*

___

###  source

• **source**: *string*

*Implementation of [Item](../README.md#item).[source](../README.md#optional-source)*

*Inherited from [DefinitionItem](definitionitem.md).[source](definitionitem.md#source)*

*Overrides [Item](item.md).[source](item.md#optional-source)*

*Defined in [src/lib/definition/index.ts:13](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/index.ts#L13)*

___

### `Optional` sourceScope

• **sourceScope**? : *"locale" | "general"*

*Implementation of [DefinitionItem](../README.md#definitionitem).[sourceScope](../README.md#optional-sourcescope)*

*Inherited from [DefinitionItem](definitionitem.md).[sourceScope](definitionitem.md#optional-sourcescope)*

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

*Inherited from [DefinitionItem](definitionitem.md).[defaults](definitionitem.md#static-defaults)*

*Defined in [src/lib/definition/index.ts:36](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/index.ts#L36)*

**Returns:** *object*

* **origin**: *string* = ""

* **source**: *string* = ""

## Methods

###  copy

▸ **copy**(`newValuesObj`: Partial‹[CtorOptions](../README.md#ctoroptions)›): *[Item](../README.md#item)‹›*

*Inherited from [DefinitionItem](definitionitem.md).[copy](definitionitem.md#copy)*

*Overrides [Item](item.md).[copy](item.md#copy)*

*Defined in [src/lib/definition/index.ts:32](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/index.ts#L32)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`newValuesObj` | Partial‹[CtorOptions](../README.md#ctoroptions)› | {} |

**Returns:** *[Item](../README.md#item)‹›*
