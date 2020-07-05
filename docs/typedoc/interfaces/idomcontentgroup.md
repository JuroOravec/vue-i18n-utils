[i18n-util](../README.md) › [IDOMContentGroup](idomcontentgroup.md)

# Interface: IDOMContentGroup

## Hierarchy

* [ContentGroup](../README.md#contentgroup)

  ↳ **IDOMContentGroup**

## Implemented by

* [DOMContentGroup](../classes/domcontentgroup.md)

## Index

### Properties

* [blocks](idomcontentgroup.md#blocks)
* [content](idomcontentgroup.md#content)
* [dom](idomcontentgroup.md#dom)
* [filepath](idomcontentgroup.md#optional-filepath)
* [insert](idomcontentgroup.md#insert)
* [insertElement](idomcontentgroup.md#insertelement)
* [insertText](idomcontentgroup.md#inserttext)
* [length](idomcontentgroup.md#length)
* [remove](idomcontentgroup.md#remove)
* [resolveItems](idomcontentgroup.md#resolveitems)
* [serializers](idomcontentgroup.md#optional-serializers)

## Properties

###  blocks

• **blocks**: *[IHTMLContentBlock](ihtmlcontentblock.md)[]*

*Overrides [ContentGroup](../README.md#contentgroup).[blocks](../README.md#blocks)*

*Defined in [src/lib/adaptors/vue/content-group-dom.ts:21](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-group-dom.ts#L21)*

Nodes from the DOM that are considered content blocks for the purpose of
updating the html file.

___

###  content

• **content**: *string*

*Inherited from [ContentGroup](../README.md#contentgroup).[content](../README.md#content)*

*Defined in [src/lib/content-group.ts:48](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L48)*

___

###  dom

• **dom**: *JSDOM*

*Defined in [src/lib/adaptors/vue/content-group-dom.ts:16](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-group-dom.ts#L16)*

The JSDOM instance.

___

### `Optional` filepath

• **filepath**? : *undefined | string*

*Inherited from [ContentGroup](../README.md#contentgroup).[filepath](../README.md#optional-filepath)*

*Defined in [src/lib/content-group.ts:47](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L47)*

Path to the file from where the content originates. This string
is passed to all blocks.

___

###  insert

• **insert**: *function*

*Inherited from [ContentGroup](../README.md#contentgroup).[insert](../README.md#insert)*

*Defined in [src/lib/content-group.ts:50](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L50)*

#### Type declaration:

▸ (`block`: [ContentBlock](../README.md#contentblock), `options`: object): *[ContentBlock](../README.md#contentblock) | Promise‹[ContentBlock](../README.md#contentblock)›*

**Parameters:**

▪ **block**: *[ContentBlock](../README.md#contentblock)*

▪ **options**: *object*

Name | Type |
------ | ------ |
`position?` | "prepend" &#124; "append" |

___

###  insertElement

• **insertElement**: *function*

*Defined in [src/lib/adaptors/vue/content-group-dom.ts:27](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-group-dom.ts#L27)*

#### Type declaration:

▸ (`options`: object): *[IHTMLContentBlock](ihtmlcontentblock.md)*

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`attributes?` | undefined &#124; object |
`position?` | "prepend" &#124; "append" |
`tag?` | undefined &#124; string |
`text?` | undefined &#124; string |

___

###  insertText

• **insertText**: *function*

*Defined in [src/lib/adaptors/vue/content-group-dom.ts:22](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-group-dom.ts#L22)*

#### Type declaration:

▸ (`options`: object): *[IHTMLContentBlock](ihtmlcontentblock.md)*

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`position?` | "prepend" &#124; "append" |
`text?` | undefined &#124; string |

___

###  length

• **length**: *number*

*Inherited from [ContentGroup](../README.md#contentgroup).[length](../README.md#length)*

*Defined in [src/lib/content-group.ts:49](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L49)*

___

###  remove

• **remove**: *function*

*Inherited from [ContentGroup](../README.md#contentgroup).[remove](../README.md#remove)*

*Defined in [src/lib/content-group.ts:54](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L54)*

#### Type declaration:

▸ (`block`: [ContentBlock](../README.md#contentblock)): *[ContentBlock](../README.md#contentblock) | undefined | Promise‹[ContentBlock](../README.md#contentblock) | undefined›*

**Parameters:**

Name | Type |
------ | ------ |
`block` | [ContentBlock](../README.md#contentblock) |

___

###  resolveItems

• **resolveItems**: *function*

*Overrides [ContentGroup](../README.md#contentgroup).[resolveItems](../README.md#resolveitems)*

*Defined in [src/lib/adaptors/vue/content-group-dom.ts:34](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-group-dom.ts#L34)*

#### Type declaration:

▸ (`definitions`: [Item](../README.md#item)[], `options`: [ResolveItemsOptions](../README.md#resolveitemsoptions)): *Promise‹object›*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [Item](../README.md#item)[] |
`options` | [ResolveItemsOptions](../README.md#resolveitemsoptions) |

___

### `Optional` serializers

• **serializers**? : *[Collection](../README.md#abstract-collection)*

*Inherited from [ContentGroup](../README.md#contentgroup).[serializers](../README.md#optional-serializers)*

*Defined in [src/lib/content-group.ts:42](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L42)*

Collection instance with serializers to be used instead of the default
