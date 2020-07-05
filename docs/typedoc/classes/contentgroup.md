[i18n-util](../README.md) › [ContentGroup](contentgroup.md)

# Class: ContentGroup

CRUD interface between the items from I18nUtil and target files.

## Hierarchy

* **ContentGroup**

  ↳ [JsonYamlContentGroup](jsonyamlcontentgroup.md)

  ↳ [DOMContentGroup](domcontentgroup.md)

## Implements

* [ContentGroup](../README.md#contentgroup)

## Index

### Constructors

* [constructor](contentgroup.md#constructor)

### Properties

* [blocks](contentgroup.md#blocks)
* [filepath](contentgroup.md#optional-filepath)
* [serializers](contentgroup.md#optional-serializers)

### Accessors

* [content](contentgroup.md#content)
* [length](contentgroup.md#length)
* [defaults](contentgroup.md#static-defaults)

### Methods

* [insert](contentgroup.md#insert)
* [remove](contentgroup.md#remove)
* [resolveItems](contentgroup.md#resolveitems)

## Constructors

###  constructor

\+ **new ContentGroup**(`options`: [CtorOptions](../README.md#ctoroptions)): *[ContentGroup](contentgroup.md)*

*Defined in [src/lib/content-group.ts:105](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L105)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [CtorOptions](../README.md#ctoroptions) | {} |

**Returns:** *[ContentGroup](contentgroup.md)*

## Properties

###  blocks

• **blocks**: *[ContentBlock](../README.md#contentblock)[]*

*Implementation of [ContentGroup](../README.md#contentgroup).[blocks](../README.md#blocks)*

*Defined in [src/lib/content-group.ts:96](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L96)*

List of parts of the content that make up the content group.

___

### `Optional` filepath

• **filepath**? : *undefined | string*

*Implementation of [ContentGroup](../README.md#contentgroup).[filepath](../README.md#optional-filepath)*

*Defined in [src/lib/content-group.ts:105](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L105)*

Path to the file from where the content originates. This string
is passed to all blocks.

___

### `Optional` serializers

• **serializers**? : *[Collection](../README.md#abstract-collection)*

*Implementation of [ContentGroup](../README.md#contentgroup).[serializers](../README.md#optional-serializers)*

*Defined in [src/lib/content-group.ts:100](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L100)*

Collection instance with serializers to be used instead of the default

## Accessors

###  content

• **get content**(): *string*

*Defined in [src/lib/content-group.ts:118](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L118)*

Concatenated content of the blocks

**Returns:** *string*

___

###  length

• **get length**(): *number*

*Defined in [src/lib/content-group.ts:125](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L125)*

Length of the blocks.

**Returns:** *number*

___

### `Static` defaults

• **get defaults**(): *[ResolveItemsOptions](../README.md#resolveitemsoptions) & [InsertOptions](../README.md#insertoptions)*

*Defined in [src/lib/content-group.ts:493](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L493)*

**Returns:** *[ResolveItemsOptions](../README.md#resolveitemsoptions) & [InsertOptions](../README.md#insertoptions)*

## Methods

###  insert

▸ **insert**(`block`: [ContentBlock](../README.md#contentblock), `options`: object): *[ContentBlock](../README.md#contentblock)*

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

*Defined in [src/lib/content-group.ts:151](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L151)*

**Parameters:**

Name | Type |
------ | ------ |
`block` | [ContentBlock](../README.md#contentblock) |

**Returns:** *Promise‹undefined | [ContentBlock](../README.md#contentblock)›*

___

###  resolveItems

▸ **resolveItems**(`definitions`: [Item](../README.md#item)[], `options`: [ResolveItemsOptions](../README.md#resolveitemsoptions)): *Promise‹object›*

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
