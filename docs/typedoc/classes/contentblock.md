[i18n-util](../README.md) › [ContentBlock](contentblock.md)

# Class: ContentBlock

Distinct part of a content of a file

## Hierarchy

* **ContentBlock**

  ↳ [HTMLContentBlock](htmlcontentblock.md)

## Implements

* [ContentBlock](../README.md#contentblock)

## Index

### Constructors

* [constructor](contentblock.md#constructor)

### Properties

* [attributes](contentblock.md#attributes)
* [content](contentblock.md#content)
* [filepath](contentblock.md#optional-filepath)
* [serializers](contentblock.md#optional-serializers)
* [virtualContent](contentblock.md#virtualcontent)

### Methods

* [getVirtualContent](contentblock.md#getvirtualcontent)
* [remove](contentblock.md#remove)
* [removeAttribute](contentblock.md#removeattribute)
* [serializeItems](contentblock.md#serializeitems)
* [setAttribute](contentblock.md#setattribute)

## Constructors

###  constructor

\+ **new ContentBlock**(`options`: [CtorOptions](../README.md#ctoroptions)): *[ContentBlock](contentblock.md)*

*Defined in [src/lib/content-block.ts:90](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L90)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [CtorOptions](../README.md#ctoroptions) |

**Returns:** *[ContentBlock](contentblock.md)*

## Properties

###  attributes

• **attributes**: *[AnyObj](../README.md#anyobj)‹string›*

*Implementation of [ContentBlock](../README.md#contentblock).[attributes](../README.md#attributes)*

*Defined in [src/lib/content-block.ts:79](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L79)*

___

###  content

• **content**: *string* = ""

*Implementation of [ContentBlock](../README.md#contentblock).[content](../README.md#content)*

*Defined in [src/lib/content-block.ts:80](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L80)*

___

### `Optional` filepath

• **filepath**? : *undefined | string*

*Implementation of [ContentBlock](../README.md#contentblock).[filepath](../README.md#optional-filepath)*

*Defined in [src/lib/content-block.ts:90](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L90)*

Path to the file from where the block originates. It is used for
resolving linked content with relative path.

___

### `Optional` serializers

• **serializers**? : *[Collection](../README.md#abstract-collection)*

*Defined in [src/lib/content-block.ts:85](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L85)*

Collection instance with serializers to de-/serialize Node's html content

___

###  virtualContent

• **virtualContent**: *any*

*Implementation of [ContentBlock](../README.md#contentblock).[virtualContent](../README.md#virtualcontent)*

*Defined in [src/lib/content-block.ts:81](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L81)*

## Methods

###  getVirtualContent

▸ **getVirtualContent**(): *any*

*Implementation of [ContentBlock](../README.md#contentblock)*

*Defined in [src/lib/content-block.ts:120](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L120)*

Get loaded representation of the content stored by the node, or
initialize it if doesn't exist yet.

Returns undefined if deserializer cannot be found.

**Returns:** *any*

___

###  remove

▸ **remove**(`contentGroup`: [ContentGroup](contentgroup.md)): *void*

*Implementation of [ContentBlock](../README.md#contentblock)*

*Defined in [src/lib/content-block.ts:135](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L135)*

Does any steps neccessary to remove the block.

**Parameters:**

Name | Type |
------ | ------ |
`contentGroup` | [ContentGroup](contentgroup.md) |

**Returns:** *void*

___

###  removeAttribute

▸ **removeAttribute**(`key`: string): *void*

*Implementation of [ContentBlock](../README.md#contentblock)*

*Defined in [src/lib/content-block.ts:105](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *void*

___

###  serializeItems

▸ **serializeItems**(`definitions`: [Item](../README.md#item)[], `opts`: [ToObjectOptions](../README.md#toobjectoptions)): *string | Promise‹string›*

*Implementation of [ContentBlock](../README.md#contentblock)*

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

*Implementation of [ContentBlock](../README.md#contentblock)*

*Defined in [src/lib/content-block.ts:101](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | string |

**Returns:** *void*
