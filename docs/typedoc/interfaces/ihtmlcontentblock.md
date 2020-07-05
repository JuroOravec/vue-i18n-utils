[i18n-util](../README.md) › [IHTMLContentBlock](ihtmlcontentblock.md)

# Interface: IHTMLContentBlock

ContentBlock that is associated with and stores its content in a specific
HTML Element.

## Hierarchy

* [ContentBlock](../README.md#contentblock)

  ↳ **IHTMLContentBlock**

## Implemented by

* [HTMLContentBlock](../classes/htmlcontentblock.md)

## Index

### Properties

* [attributes](ihtmlcontentblock.md#attributes)
* [content](ihtmlcontentblock.md#content)
* [filepath](ihtmlcontentblock.md#optional-filepath)
* [node](ihtmlcontentblock.md#node)
* [source](ihtmlcontentblock.md#source)
* [virtualContent](ihtmlcontentblock.md#virtualcontent)

### Methods

* [getVirtualContent](ihtmlcontentblock.md#getvirtualcontent)
* [isElement](ihtmlcontentblock.md#iselement)
* [remove](ihtmlcontentblock.md#remove)
* [removeAttribute](ihtmlcontentblock.md#removeattribute)
* [removeSource](ihtmlcontentblock.md#removesource)
* [serializeItems](ihtmlcontentblock.md#serializeitems)
* [setAttribute](ihtmlcontentblock.md#setattribute)
* [srcFromItems](ihtmlcontentblock.md#srcfromitems)

## Properties

###  attributes

• **attributes**: *[AnyObj](../README.md#anyobj)‹string›*

*Overrides [ContentBlock](../README.md#contentblock).[attributes](../README.md#attributes)*

*Defined in [src/lib/adaptors/vue/content-block-html.ts:17](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-block-html.ts#L17)*

Block's attributes.

___

###  content

• **content**: *string*

*Inherited from [ContentBlock](../README.md#contentblock).[content](../README.md#content)*

*Defined in [src/lib/content-block.ts:18](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L18)*

Blocks's content

___

### `Optional` filepath

• **filepath**? : *undefined | string*

*Inherited from [ContentBlock](../README.md#contentblock).[filepath](../README.md#optional-filepath)*

*Defined in [src/lib/content-block.ts:27](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L27)*

Path to the file from where the block originates. It is used for
resolving linked content with relative path.

___

###  node

• **node**: *Node*

*Defined in [src/lib/adaptors/vue/content-block-html.ts:21](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-block-html.ts#L21)*

The Node element stored by the instance.

___

###  source

• **source**: *string*

*Defined in [src/lib/adaptors/vue/content-block-html.ts:25](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-block-html.ts#L25)*

Resolved path of the linked content specified by `src` attribute

___

###  virtualContent

• **virtualContent**: *any*

*Inherited from [ContentBlock](../README.md#contentblock).[virtualContent](../README.md#virtualcontent)*

*Defined in [src/lib/content-block.ts:14](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L14)*

Some representation of the content (e.g. deserialized content), used to
avoid the need of constant de-/serialization.

## Methods

###  getVirtualContent

▸ **getVirtualContent**(): *any | Promise‹any›*

*Inherited from [ContentBlock](../README.md#contentblock).[getVirtualContent](../README.md#getvirtualcontent)*

*Defined in [src/lib/content-block.ts:40](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L40)*

Get loaded representation of the content stored by the instance, or
initialize it if doesn't exist yet.

**Returns:** *any | Promise‹any›*

___

###  isElement

▸ **isElement**(`nodeName?`: undefined | string): *boolean*

*Defined in [src/lib/adaptors/vue/content-block-html.ts:30](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-block-html.ts#L30)*

Check whether a node is a HTML Element. Optionally check for specific
tag / node name.

**Parameters:**

Name | Type |
------ | ------ |
`nodeName?` | undefined &#124; string |

**Returns:** *boolean*

___

###  remove

▸ **remove**(`group`: [ContentGroup](../classes/contentgroup.md)): *void | Promise‹void›*

*Inherited from [ContentBlock](../README.md#contentblock).[remove](../README.md#remove)*

*Defined in [src/lib/content-block.ts:44](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L44)*

Remove the block from a group

**Parameters:**

Name | Type |
------ | ------ |
`group` | [ContentGroup](../classes/contentgroup.md) |

**Returns:** *void | Promise‹void›*

___

###  removeAttribute

▸ **removeAttribute**(`key`: string): *void | Promise‹void›*

*Inherited from [ContentBlock](../README.md#contentblock).[removeAttribute](../README.md#removeattribute)*

*Defined in [src/lib/content-block.ts:35](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L35)*

Remove single attribute.

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *void | Promise‹void›*

___

###  removeSource

▸ **removeSource**(): *void*

*Defined in [src/lib/adaptors/vue/content-block-html.ts:34](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-block-html.ts#L34)*

Removes a linked file if there is any.

**Returns:** *void*

___

###  serializeItems

▸ **serializeItems**(`definitions`: [Item](../README.md#item)[], `opts?`: [ItemsByLocaleOptions](../README.md#itemsbylocaleoptions)): *string | Promise‹string›*

*Inherited from [ContentBlock](../README.md#contentblock).[serializeItems](../README.md#serializeitems)*

*Defined in [src/lib/content-block.ts:49](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L49)*

Serializes a list of DefinitionItems into a string based on the the block's
attributes.

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [Item](../README.md#item)[] |
`opts?` | [ItemsByLocaleOptions](../README.md#itemsbylocaleoptions) |

**Returns:** *string | Promise‹string›*

___

###  setAttribute

▸ **setAttribute**(`key`: string, `value`: string): *void | Promise‹void›*

*Inherited from [ContentBlock](../README.md#contentblock).[setAttribute](../README.md#setattribute)*

*Defined in [src/lib/content-block.ts:31](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L31)*

Set single attribute.

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | string |

**Returns:** *void | Promise‹void›*

___

###  srcFromItems

▸ **srcFromItems**(`definitions`: [IVueDefinitionItem](ivuedefinitionitem.md)[]): *string | undefined*

*Defined in [src/lib/adaptors/vue/content-block-html.ts:41](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-block-html.ts#L41)*

Find a path of the linked definitions files from a set of DefinitionItems.
and set it as the `src` node attribute.

Throws if multiple different paths found.

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [IVueDefinitionItem](ivuedefinitionitem.md)[] |

**Returns:** *string | undefined*
