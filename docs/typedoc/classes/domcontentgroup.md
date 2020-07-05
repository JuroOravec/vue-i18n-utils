[i18n-util](../README.md) › [DOMContentGroup](domcontentgroup.md)

# Class: DOMContentGroup

Wrapper for `jsdom` for managing CRUD interface between the items from
I18nUtil and Vue's HTML files.

## Hierarchy

* [ContentGroup](contentgroup.md)

  ↳ **DOMContentGroup**

## Implements

* [ContentGroup](../README.md#contentgroup)
* [IDOMContentGroup](../interfaces/idomcontentgroup.md)

## Index

### Constructors

* [constructor](domcontentgroup.md#constructor)

### Properties

* [blocks](domcontentgroup.md#blocks)
* [dom](domcontentgroup.md#dom)
* [filepath](domcontentgroup.md#optional-filepath)
* [serializers](domcontentgroup.md#optional-serializers)

### Accessors

* [content](domcontentgroup.md#content)
* [length](domcontentgroup.md#length)
* [defaults](domcontentgroup.md#static-defaults)

### Methods

* [insert](domcontentgroup.md#insert)
* [insertElement](domcontentgroup.md#insertelement)
* [insertText](domcontentgroup.md#inserttext)
* [remove](domcontentgroup.md#remove)
* [resolveItems](domcontentgroup.md#resolveitems)
* [fromFile](domcontentgroup.md#static-fromfile)

## Constructors

###  constructor

\+ **new DOMContentGroup**(`options`: ConstructorOptions & [CtorOptions](../README.md#ctoroptions) & object): *[DOMContentGroup](domcontentgroup.md)*

*Overrides [ContentGroup](contentgroup.md).[constructor](contentgroup.md#constructor)*

*Defined in [src/lib/adaptors/vue/content-group-dom.ts:63](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-group-dom.ts#L63)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | ConstructorOptions & [CtorOptions](../README.md#ctoroptions) & object | {} |

**Returns:** *[DOMContentGroup](domcontentgroup.md)*

## Properties

###  blocks

• **blocks**: *[IHTMLContentBlock](../interfaces/ihtmlcontentblock.md)[]*

*Implementation of [IDOMContentGroup](../interfaces/idomcontentgroup.md).[blocks](../interfaces/idomcontentgroup.md#blocks)*

*Overrides [ContentGroup](contentgroup.md).[blocks](contentgroup.md#blocks)*

*Defined in [src/lib/adaptors/vue/content-group-dom.ts:63](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-group-dom.ts#L63)*

Nodes from the DOM that are considered content blocks for the purpose of
updating the html file.

___

###  dom

• **dom**: *JSDOM*

*Implementation of [IDOMContentGroup](../interfaces/idomcontentgroup.md).[dom](../interfaces/idomcontentgroup.md#dom)*

*Defined in [src/lib/adaptors/vue/content-group-dom.ts:58](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-group-dom.ts#L58)*

The JSDOM instance.

___

### `Optional` filepath

• **filepath**? : *undefined | string*

*Implementation of [IDOMContentGroup](../interfaces/idomcontentgroup.md).[filepath](../interfaces/idomcontentgroup.md#optional-filepath)*

*Inherited from [ContentGroup](contentgroup.md).[filepath](contentgroup.md#optional-filepath)*

*Defined in [src/lib/content-group.ts:105](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L105)*

Path to the file from where the content originates. This string
is passed to all blocks.

___

### `Optional` serializers

• **serializers**? : *[Collection](../README.md#abstract-collection)*

*Implementation of [IDOMContentGroup](../interfaces/idomcontentgroup.md).[serializers](../interfaces/idomcontentgroup.md#optional-serializers)*

*Inherited from [ContentGroup](contentgroup.md).[serializers](contentgroup.md#optional-serializers)*

*Defined in [src/lib/content-group.ts:100](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L100)*

Collection instance with serializers to be used instead of the default

## Accessors

###  content

• **get content**(): *string*

*Overrides [ContentGroup](contentgroup.md).[content](contentgroup.md#content)*

*Defined in [src/lib/adaptors/vue/content-group-dom.ts:98](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-group-dom.ts#L98)*

HTML content of the blocks

**Returns:** *string*

• **set content**(`groupContent`: string): *void*

*Overrides [ContentGroup](contentgroup.md).[content](contentgroup.md#content)*

*Defined in [src/lib/adaptors/vue/content-group-dom.ts:102](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-group-dom.ts#L102)*

HTML content of the blocks

**Parameters:**

Name | Type |
------ | ------ |
`groupContent` | string |

**Returns:** *void*

___

###  length

• **get length**(): *number*

*Inherited from [ContentGroup](contentgroup.md).[length](contentgroup.md#length)*

*Defined in [src/lib/content-group.ts:125](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L125)*

Length of the blocks.

**Returns:** *number*

___

### `Static` defaults

• **get defaults**(): *[ResolveItemsOptions](../README.md#resolveitemsoptions) & [InsertOptions](../README.md#insertoptions)*

*Inherited from [ContentGroup](contentgroup.md).[defaults](contentgroup.md#static-defaults)*

*Defined in [src/lib/content-group.ts:493](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L493)*

**Returns:** *[ResolveItemsOptions](../README.md#resolveitemsoptions) & [InsertOptions](../README.md#insertoptions)*

## Methods

###  insert

▸ **insert**(`block`: [ContentBlock](../README.md#contentblock), `options`: object): *[IHTMLContentBlock](../interfaces/ihtmlcontentblock.md)*

*Overrides [ContentGroup](contentgroup.md).[insert](contentgroup.md#insert)*

*Defined in [src/lib/adaptors/vue/content-group-dom.ts:110](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-group-dom.ts#L110)*

**Parameters:**

▪ **block**: *[ContentBlock](../README.md#contentblock)*

▪`Default value`  **options**: *object*= {}

Name | Type |
------ | ------ |
`position?` | "prepend" &#124; "append" |

**Returns:** *[IHTMLContentBlock](../interfaces/ihtmlcontentblock.md)*

___

###  insertElement

▸ **insertElement**(`options`: object): *[IHTMLContentBlock](../interfaces/ihtmlcontentblock.md)*

*Defined in [src/lib/adaptors/vue/content-group-dom.ts:137](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-group-dom.ts#L137)*

**Parameters:**

▪`Default value`  **options**: *object*= {}

Name | Type |
------ | ------ |
`attributes?` | undefined &#124; object |
`position?` | "prepend" &#124; "append" |
`tag?` | undefined &#124; string |
`text?` | undefined &#124; string |

**Returns:** *[IHTMLContentBlock](../interfaces/ihtmlcontentblock.md)*

___

###  insertText

▸ **insertText**(`options`: object): *[IHTMLContentBlock](../interfaces/ihtmlcontentblock.md)*

*Defined in [src/lib/adaptors/vue/content-group-dom.ts:121](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-group-dom.ts#L121)*

**Parameters:**

▪`Default value`  **options**: *object*= {}

Name | Type |
------ | ------ |
`position?` | "prepend" &#124; "append" |
`text?` | undefined &#124; string |

**Returns:** *[IHTMLContentBlock](../interfaces/ihtmlcontentblock.md)*

___

###  remove

▸ **remove**(`block`: [ContentBlock](../README.md#contentblock)): *Promise‹undefined | [ContentBlock](../README.md#contentblock)›*

*Overrides [ContentGroup](contentgroup.md).[remove](contentgroup.md#remove)*

*Defined in [src/lib/adaptors/vue/content-group-dom.ts:106](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-group-dom.ts#L106)*

**Parameters:**

Name | Type |
------ | ------ |
`block` | [ContentBlock](../README.md#contentblock) |

**Returns:** *Promise‹undefined | [ContentBlock](../README.md#contentblock)›*

___

###  resolveItems

▸ **resolveItems**(`definitions`: [Item](../README.md#item)[], `options`: [ResolveItemsOptions](../README.md#resolveitemsoptions)): *Promise‹object›*

*Overrides [ContentGroup](contentgroup.md).[resolveItems](contentgroup.md#resolveitems)*

*Defined in [src/lib/adaptors/vue/content-group-dom.ts:169](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-group-dom.ts#L169)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`definitions` | [Item](../README.md#item)[] | - |
`options` | [ResolveItemsOptions](../README.md#resolveitemsoptions) | {} |

**Returns:** *Promise‹object›*

___

### `Static` fromFile

▸ **fromFile**(`url`: string, `options`: object & ConstructorOptions & [CtorOptions](../README.md#ctoroptions) & Extract‹Parameters<typeof readFile>[1], object›): *Promise‹[DOMContentGroup](domcontentgroup.md)‹››*

*Defined in [src/lib/adaptors/vue/content-group-dom.ts:185](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-group-dom.ts#L185)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`url` | string | - |
`options` | object & ConstructorOptions & [CtorOptions](../README.md#ctoroptions) & Extract‹Parameters<typeof readFile>[1], object› | {} |

**Returns:** *Promise‹[DOMContentGroup](domcontentgroup.md)‹››*
