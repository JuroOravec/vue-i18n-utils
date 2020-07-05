[i18n-util](../README.md) › [JsonYamlContentGroup](jsonyamlcontentgroup.md)

# Class: JsonYamlContentGroup

## Hierarchy

* [ContentGroup](contentgroup.md)

  ↳ **JsonYamlContentGroup**

  ↳ [I18nContentGroup](i18ncontentgroup.md)

## Implements

* [ContentGroup](../README.md#contentgroup)

## Index

### Properties

* [blocks](jsonyamlcontentgroup.md#blocks)
* [constructor](jsonyamlcontentgroup.md#constructor)
* [filepath](jsonyamlcontentgroup.md#optional-filepath)
* [logger](jsonyamlcontentgroup.md#logger)
* [serializers](jsonyamlcontentgroup.md#optional-serializers)

### Accessors

* [content](jsonyamlcontentgroup.md#content)
* [length](jsonyamlcontentgroup.md#length)
* [defaults](jsonyamlcontentgroup.md#static-defaults)

### Methods

* [insert](jsonyamlcontentgroup.md#insert)
* [remove](jsonyamlcontentgroup.md#remove)
* [resolveItems](jsonyamlcontentgroup.md#resolveitems)
* [fromContent](jsonyamlcontentgroup.md#static-fromcontent)
* [fromFile](jsonyamlcontentgroup.md#static-fromfile)

## Properties

###  blocks

• **blocks**: *[ContentBlock](../README.md#contentblock)[]*

*Implementation of [ContentGroup](../README.md#contentgroup).[blocks](../README.md#blocks)*

*Inherited from [ContentGroup](contentgroup.md).[blocks](contentgroup.md#blocks)*

*Defined in [src/lib/content-group.ts:96](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L96)*

List of parts of the content that make up the content group.

___

###  constructor

\+ **new JsonYamlContentGroup**(`options`: IAdaptorJY.ContentGroupCtorOptions): *[JsonYamlContentGroup](jsonyamlcontentgroup.md)*

*Overrides [ContentGroup](contentgroup.md).[constructor](contentgroup.md#constructor)*

*Defined in [src/lib/adaptors/json-yaml/index.ts:41](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/index.ts#L41)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | IAdaptorJY.ContentGroupCtorOptions | {} |

**Returns:** *[JsonYamlContentGroup](jsonyamlcontentgroup.md)*

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

*Defined in [src/lib/adaptors/json-yaml/index.ts:54](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/index.ts#L54)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`content` | string | - |
`options` | [CtorOptions](../README.md#ctoroptions) | {} |

**Returns:** *Promise‹[JsonYamlContentGroup](jsonyamlcontentgroup.md)‹››*

___

### `Static` fromFile

▸ **fromFile**(`filepath`: string, `options`: [CtorOptions](../README.md#ctoroptions) & Extract‹Parameters<typeof readFile>[1], object›): *Promise‹[JsonYamlContentGroup](jsonyamlcontentgroup.md)‹››*

*Defined in [src/lib/adaptors/json-yaml/index.ts:108](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/index.ts#L108)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`filepath` | string | - |
`options` | [CtorOptions](../README.md#ctoroptions) & Extract‹Parameters<typeof readFile>[1], object› | {} |

**Returns:** *Promise‹[JsonYamlContentGroup](jsonyamlcontentgroup.md)‹››*
