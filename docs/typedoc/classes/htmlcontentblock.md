[i18n-util](../README.md) › [HTMLContentBlock](htmlcontentblock.md)

# Class: HTMLContentBlock

Wrapper for HTMLElement for content manipulation relevant for VueAdaptor

## Hierarchy

* [ContentBlock](contentblock.md)

  ↳ **HTMLContentBlock**

## Implements

* [ContentBlock](../README.md#contentblock)
* [IHTMLContentBlock](../interfaces/ihtmlcontentblock.md)

## Index

### Constructors

* [constructor](htmlcontentblock.md#constructor)

### Properties

* [filepath](htmlcontentblock.md#optional-filepath)
* [node](htmlcontentblock.md#node)
* [serializers](htmlcontentblock.md#optional-serializers)
* [virtualContent](htmlcontentblock.md#virtualcontent)

### Accessors

* [attributes](htmlcontentblock.md#attributes)
* [content](htmlcontentblock.md#content)
* [source](htmlcontentblock.md#source)

### Methods

* [getVirtualContent](htmlcontentblock.md#getvirtualcontent)
* [isElement](htmlcontentblock.md#iselement)
* [remove](htmlcontentblock.md#remove)
* [removeAttribute](htmlcontentblock.md#removeattribute)
* [removeSource](htmlcontentblock.md#removesource)
* [serializeItems](htmlcontentblock.md#serializeitems)
* [setAttribute](htmlcontentblock.md#setattribute)
* [srcFromItems](htmlcontentblock.md#srcfromitems)

## Constructors

###  constructor

\+ **new HTMLContentBlock**(`options`: [IHTMLContentBlockCtorOptions](../interfaces/ihtmlcontentblockctoroptions.md)): *[HTMLContentBlock](htmlcontentblock.md)*

*Overrides [ContentBlock](contentblock.md).[constructor](contentblock.md#constructor)*

*Defined in [src/lib/adaptors/vue/content-block-html.ts:63](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-block-html.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [IHTMLContentBlockCtorOptions](../interfaces/ihtmlcontentblockctoroptions.md) |

**Returns:** *[HTMLContentBlock](htmlcontentblock.md)*

## Properties

### `Optional` filepath

• **filepath**? : *undefined | string*

*Implementation of [IHTMLContentBlock](../interfaces/ihtmlcontentblock.md).[filepath](../interfaces/ihtmlcontentblock.md#optional-filepath)*

*Inherited from [ContentBlock](contentblock.md).[filepath](contentblock.md#optional-filepath)*

*Defined in [src/lib/content-block.ts:90](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L90)*

Path to the file from where the block originates. It is used for
resolving linked content with relative path.

___

###  node

• **node**: *Node*

*Implementation of [IHTMLContentBlock](../interfaces/ihtmlcontentblock.md).[node](../interfaces/ihtmlcontentblock.md#node)*

*Defined in [src/lib/adaptors/vue/content-block-html.ts:63](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-block-html.ts#L63)*

___

### `Optional` serializers

• **serializers**? : *[Collection](../README.md#abstract-collection)*

*Inherited from [ContentBlock](contentblock.md).[serializers](contentblock.md#optional-serializers)*

*Defined in [src/lib/content-block.ts:85](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L85)*

Collection instance with serializers to de-/serialize Node's html content

___

###  virtualContent

• **virtualContent**: *any*

*Implementation of [IHTMLContentBlock](../interfaces/ihtmlcontentblock.md).[virtualContent](../interfaces/ihtmlcontentblock.md#virtualcontent)*

*Inherited from [ContentBlock](contentblock.md).[virtualContent](contentblock.md#virtualcontent)*

*Defined in [src/lib/content-block.ts:81](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L81)*

## Accessors

###  attributes

• **get attributes**(): *object*

*Overrides [ContentBlock](contentblock.md).[attributes](contentblock.md#attributes)*

*Defined in [src/lib/adaptors/vue/content-block-html.ts:83](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-block-html.ts#L83)*

**Returns:** *object*

* \[ **key**: *number*\]: V

• **set attributes**(`attrs`: [AnyObj](../README.md#anyobj)‹string›): *void*

*Overrides [ContentBlock](contentblock.md).[attributes](contentblock.md#attributes)*

*Defined in [src/lib/adaptors/vue/content-block-html.ts:94](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-block-html.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`attrs` | [AnyObj](../README.md#anyobj)‹string› |

**Returns:** *void*

___

###  content

• **get content**(): *string*

*Overrides [ContentBlock](contentblock.md).[content](contentblock.md#content)*

*Defined in [src/lib/adaptors/vue/content-block-html.ts:73](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-block-html.ts#L73)*

**Returns:** *string*

• **set content**(`newContent`: string): *void*

*Overrides [ContentBlock](contentblock.md).[content](contentblock.md#content)*

*Defined in [src/lib/adaptors/vue/content-block-html.ts:77](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-block-html.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`newContent` | string |

**Returns:** *void*

___

###  source

• **get source**(): *string*

*Defined in [src/lib/adaptors/vue/content-block-html.ts:105](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-block-html.ts#L105)*

**Returns:** *string*

## Methods

###  getVirtualContent

▸ **getVirtualContent**(): *Promise‹any›*

*Implementation of [IHTMLContentBlock](../interfaces/ihtmlcontentblock.md)*

*Overrides [ContentBlock](contentblock.md).[getVirtualContent](contentblock.md#getvirtualcontent)*

*Defined in [src/lib/adaptors/vue/content-block-html.ts:125](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-block-html.ts#L125)*

Get loaded representation of the content stored by the node, or
initialize it if doesn't exist yet.

Returns undefined if deserializer cannot be found.

**Returns:** *Promise‹any›*

___

###  isElement

▸ **isElement**(`nodeName?`: undefined | string): *boolean*

*Implementation of [IHTMLContentBlock](../interfaces/ihtmlcontentblock.md)*

*Defined in [src/lib/adaptors/vue/content-block-html.ts:146](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-block-html.ts#L146)*

Check whether a node is a HTML Element. Optionally check for specific
tag / node name.

**Parameters:**

Name | Type |
------ | ------ |
`nodeName?` | undefined &#124; string |

**Returns:** *boolean*

___

###  remove

▸ **remove**(`contentGroup`: [ContentGroup](../README.md#contentgroup)): *Promise‹void›*

*Overrides [ContentBlock](contentblock.md).[remove](contentblock.md#remove)*

*Defined in [src/lib/adaptors/vue/content-block-html.ts:158](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-block-html.ts#L158)*

Removes the associated node from the DOM. Also removes a linked file if
there is any.

**Parameters:**

Name | Type |
------ | ------ |
`contentGroup` | [ContentGroup](../README.md#contentgroup) |

**Returns:** *Promise‹void›*

___

###  removeAttribute

▸ **removeAttribute**(`key`: string): *void*

*Implementation of [IHTMLContentBlock](../interfaces/ihtmlcontentblock.md)*

*Overrides [ContentBlock](contentblock.md).[removeAttribute](contentblock.md#removeattribute)*

*Defined in [src/lib/adaptors/vue/content-block-html.ts:115](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-block-html.ts#L115)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *void*

___

###  removeSource

▸ **removeSource**(): *Promise‹void›*

*Implementation of [IHTMLContentBlock](../interfaces/ihtmlcontentblock.md)*

*Defined in [src/lib/adaptors/vue/content-block-html.ts:166](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-block-html.ts#L166)*

Removes a linked file if there is any.

**Returns:** *Promise‹void›*

___

###  serializeItems

▸ **serializeItems**(`definitions`: [Item](../README.md#item)[], `opts`: [ToObjectOptions](../README.md#toobjectoptions)): *string | Promise‹string›*

*Implementation of [IHTMLContentBlock](../interfaces/ihtmlcontentblock.md)*

*Inherited from [ContentBlock](contentblock.md).[serializeItems](contentblock.md#serializeitems)*

*Defined in [src/lib/content-block.ts:147](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L147)*

Serializes a list of DefinitionItems based on the the block's
language, locale and serializers.

Returns a string.

**`throws`** {Error} If no serializer is matched

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`definitions` | [Item](../README.md#item)[] | - |
`opts` | [ToObjectOptions](../README.md#toobjectoptions) | {} |

**Returns:** *string | Promise‹string›*

___

###  setAttribute

▸ **setAttribute**(`key`: string, `value`: string): *void*

*Implementation of [IHTMLContentBlock](../interfaces/ihtmlcontentblock.md)*

*Overrides [ContentBlock](contentblock.md).[setAttribute](contentblock.md#setattribute)*

*Defined in [src/lib/adaptors/vue/content-block-html.ts:111](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-block-html.ts#L111)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | string |

**Returns:** *void*

___

###  srcFromItems

▸ **srcFromItems**(`definitions`: [IVueDefinitionItem](../interfaces/ivuedefinitionitem.md)[]): *undefined | string*

*Implementation of [IHTMLContentBlock](../interfaces/ihtmlcontentblock.md)*

*Defined in [src/lib/adaptors/vue/content-block-html.ts:172](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-block-html.ts#L172)*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [IVueDefinitionItem](../interfaces/ivuedefinitionitem.md)[] |

**Returns:** *undefined | string*
