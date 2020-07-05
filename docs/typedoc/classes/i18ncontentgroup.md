[i18n-util](../README.md) › [I18nContentGroup](i18ncontentgroup.md)

# Class: I18nContentGroup

## Hierarchy

  ↳ [JsonYamlContentGroup](jsonyamlcontentgroup.md)

  ↳ **I18nContentGroup**

## Implements

* [ContentGroup](../README.md#contentgroup)

## Index

### Properties

* [blocks](i18ncontentgroup.md#blocks)
* [constructor](i18ncontentgroup.md#constructor)
* [filepath](i18ncontentgroup.md#optional-filepath)
* [logger](i18ncontentgroup.md#logger)
* [serializers](i18ncontentgroup.md#optional-serializers)

### Accessors

* [content](i18ncontentgroup.md#content)
* [length](i18ncontentgroup.md#length)
* [defaults](i18ncontentgroup.md#static-defaults)

### Methods

* [insert](i18ncontentgroup.md#insert)
* [remove](i18ncontentgroup.md#remove)
* [resolveItems](i18ncontentgroup.md#resolveitems)
* [fromContent](i18ncontentgroup.md#static-fromcontent)
* [fromFile](i18ncontentgroup.md#static-fromfile)

## Properties

###  blocks

• **blocks**: *[ContentBlock](../README.md#contentblock)[]*

*Implementation of [ContentGroup](../README.md#contentgroup).[blocks](../README.md#blocks)*

*Inherited from [ContentGroup](contentgroup.md).[blocks](contentgroup.md#blocks)*

*Defined in [src/lib/content-group.ts:96](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L96)*

List of parts of the content that make up the content group.

___

###  constructor

• **constructor**: *typeof JsonYamlContentGroup*

*Inherited from [JsonYamlContentGroup](jsonyamlcontentgroup.md).[constructor](jsonyamlcontentgroup.md#constructor)*

*Overrides void*

*Defined in [src/lib/adaptors/json-yaml/index.ts:37](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/index.ts#L37)*

___

### `Optional` filepath

• **filepath**? : *undefined | string*

*Implementation of [ContentGroup](../README.md#contentgroup).[filepath](../README.md#optional-filepath)*

*Inherited from [ContentGroup](contentgroup.md).[filepath](contentgroup.md#optional-filepath)*

*Defined in [src/lib/content-group.ts:105](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L105)*

Path to the file from where the content originates. This string
is passed to all blocks.

___

###  logger

• **logger**: *function*

*Inherited from [JsonYamlContentGroup](jsonyamlcontentgroup.md).[logger](jsonyamlcontentgroup.md#logger)*

*Defined in [src/lib/adaptors/json-yaml/index.ts:41](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/index.ts#L41)*

#### Type declaration:

▸ (`msg`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string |

___

### `Optional` serializers

• **serializers**? : *[Collection](../README.md#abstract-collection)*

*Implementation of [ContentGroup](../README.md#contentgroup).[serializers](../README.md#optional-serializers)*

*Inherited from [ContentGroup](contentgroup.md).[serializers](contentgroup.md#optional-serializers)*

*Defined in [src/lib/content-group.ts:100](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L100)*

Collection instance with serializers to be used instead of the default

## Accessors

###  content

• **get content**(): *string*

*Inherited from [ContentGroup](contentgroup.md).[content](contentgroup.md#content)*

*Defined in [src/lib/content-group.ts:118](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L118)*

Concatenated content of the blocks

**Returns:** *string*

___

###  length

• **get length**(): *number*

*Inherited from [ContentGroup](contentgroup.md).[length](contentgroup.md#length)*

*Defined in [src/lib/content-group.ts:125](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L125)*

Length of the blocks.

**Returns:** *number*

___

### `Static` defaults

• **get defaults**(): *object*

*Inherited from [JsonYamlContentGroup](jsonyamlcontentgroup.md).[defaults](jsonyamlcontentgroup.md#static-defaults)*

*Overrides [ContentGroup](contentgroup.md).[defaults](contentgroup.md#static-defaults)*

*Defined in [src/lib/adaptors/json-yaml/index.ts:123](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/index.ts#L123)*

**Returns:** *object*

* **contentBlockClass**: *[ContentBlock](contentblock.md)* = ContentBlock

* **logger**: *Debugger* = debug

## Methods

###  insert

▸ **insert**(`block`: [ContentBlock](../README.md#contentblock), `options`: object): *[ContentBlock](../README.md#contentblock)*

*Inherited from [ContentGroup](contentgroup.md).[insert](contentgroup.md#insert)*

*Defined in [src/lib/content-group.ts:129](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L129)*

**Parameters:**

▪ **block**: *[ContentBlock](../README.md#contentblock)*

▪`Default value`  **options**: *object*= {}

Name | Type |
------ | ------ |
`position?` | "prepend" &#124; "append" |

**Returns:** *[ContentBlock](../README.md#contentblock)*

___

###  remove

▸ **remove**(`block`: [ContentBlock](../README.md#contentblock)): *Promise‹undefined | [ContentBlock](../README.md#contentblock)›*

*Inherited from [ContentGroup](contentgroup.md).[remove](contentgroup.md#remove)*

*Defined in [src/lib/content-group.ts:151](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L151)*

**Parameters:**

Name | Type |
------ | ------ |
`block` | [ContentBlock](../README.md#contentblock) |

**Returns:** *Promise‹undefined | [ContentBlock](../README.md#contentblock)›*

___

###  resolveItems

▸ **resolveItems**(`definitions`: [Item](../README.md#item)[], `options`: [ResolveItemsOptions](../README.md#resolveitemsoptions)): *Promise‹object›*

*Inherited from [ContentGroup](contentgroup.md).[resolveItems](contentgroup.md#resolveitems)*

*Defined in [src/lib/content-group.ts:176](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L176)*

Given a list of DefinitionItems, resolve where should be each one applied
based on locale, paths, and selected merging strategies.

`strategy`
- `'append'` - append these items after the appended items
- `'localeStrict'` - insert only if you come across a i18n tag with same locale, else append
- `'locale'` - insert to a i18n tag with same locale, or to general i18n tag, else append
- `'general'` - insert to general i18n tag, else append

Additionally, the items can be resolved based on the content (locale and translation key).

`matchStrategy`
 - `false` - if locale / localeString / general, insert data to first tag that came across, else append
 - `true` -  if locale / localeString / general, insert data to tag where at least one object matches the key path, else insert data to first tag that came across, else append
 - `'strict'` - insert data to tag where at least one object matches the key path, else append

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`definitions` | [Item](../README.md#item)[] | - |
`options` | [ResolveItemsOptions](../README.md#resolveitemsoptions) | {} |

**Returns:** *Promise‹object›*

___

### `Static` fromContent

▸ **fromContent**(`content`: string, `options`: [CtorOptions](../README.md#ctoroptions)): *Promise‹[JsonYamlContentGroup](jsonyamlcontentgroup.md)‹››*

*Inherited from [JsonYamlContentGroup](jsonyamlcontentgroup.md).[fromContent](jsonyamlcontentgroup.md#static-fromcontent)*

*Defined in [src/lib/adaptors/json-yaml/index.ts:54](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/index.ts#L54)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`content` | string | - |
`options` | [CtorOptions](../README.md#ctoroptions) | {} |

**Returns:** *Promise‹[JsonYamlContentGroup](jsonyamlcontentgroup.md)‹››*

___

### `Static` fromFile

▸ **fromFile**(`filepath`: string, `options`: [CtorOptions](../README.md#ctoroptions)): *Promise‹[I18nContentGroup](i18ncontentgroup.md)‹››*

*Overrides [JsonYamlContentGroup](jsonyamlcontentgroup.md).[fromFile](jsonyamlcontentgroup.md#static-fromfile)*

*Defined in [src/lib/adaptors/i18n/index.ts:117](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/i18n/index.ts#L117)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`filepath` | string | - |
`options` | [CtorOptions](../README.md#ctoroptions) | {} |

**Returns:** *Promise‹[I18nContentGroup](i18ncontentgroup.md)‹››*
