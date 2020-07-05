[i18n-util](../README.md) › [ContentFormatter](contentformatter.md)

# Class: ContentFormatter

Class that formats and prepares for writing parts of (or whole) ContentGroup

## Hierarchy

* **ContentFormatter**

## Implements

* [ContentFormatter](../README.md#contentformatter)

## Index

### Constructors

* [constructor](contentformatter.md#constructor)

### Properties

* [afterBlock](contentformatter.md#afterblock)
* [afterContent](contentformatter.md#aftercontent)
* [afterGroup](contentformatter.md#aftergroup)
* [beforeBlock](contentformatter.md#beforeblock)
* [beforeContent](contentformatter.md#beforecontent)
* [beforeGroup](contentformatter.md#beforegroup)
* [emptyContent](contentformatter.md#emptycontent)

### Methods

* [formatBlock](contentformatter.md#formatblock)
* [formatContent](contentformatter.md#formatcontent)
* [formatGroup](contentformatter.md#formatgroup)

## Constructors

###  constructor

\+ **new ContentFormatter**(`options`: [CtorOptions](../README.md#ctoroptions)): *[ContentFormatter](contentformatter.md)*

*Defined in [src/lib/content-formatter.ts:49](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-formatter.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [CtorOptions](../README.md#ctoroptions) | {} |

**Returns:** *[ContentFormatter](contentformatter.md)*

## Properties

###  afterBlock

• **afterBlock**: *string* = "
"

*Implementation of [ContentFormatter](../README.md#contentformatter).[afterBlock](../README.md#afterblock)*

*Defined in [src/lib/content-formatter.ts:47](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-formatter.ts#L47)*

___

###  afterContent

• **afterContent**: *string* = "
"

*Implementation of [ContentFormatter](../README.md#contentformatter).[afterContent](../README.md#aftercontent)*

*Defined in [src/lib/content-formatter.ts:44](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-formatter.ts#L44)*

___

###  afterGroup

• **afterGroup**: *string* = "
"

*Implementation of [ContentFormatter](../README.md#contentformatter).[afterGroup](../README.md#aftergroup)*

*Defined in [src/lib/content-formatter.ts:49](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-formatter.ts#L49)*

___

###  beforeBlock

• **beforeBlock**: *string* = "
"

*Implementation of [ContentFormatter](../README.md#contentformatter).[beforeBlock](../README.md#beforeblock)*

*Defined in [src/lib/content-formatter.ts:46](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-formatter.ts#L46)*

___

###  beforeContent

• **beforeContent**: *string* = "
"

*Implementation of [ContentFormatter](../README.md#contentformatter).[beforeContent](../README.md#beforecontent)*

*Defined in [src/lib/content-formatter.ts:43](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-formatter.ts#L43)*

___

###  beforeGroup

• **beforeGroup**: *string* = ""

*Implementation of [ContentFormatter](../README.md#contentformatter).[beforeGroup](../README.md#beforegroup)*

*Defined in [src/lib/content-formatter.ts:48](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-formatter.ts#L48)*

___

###  emptyContent

• **emptyContent**: *string* = "
"

*Implementation of [ContentFormatter](../README.md#contentformatter).[emptyContent](../README.md#emptycontent)*

*Defined in [src/lib/content-formatter.ts:45](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-formatter.ts#L45)*

## Methods

###  formatBlock

▸ **formatBlock**(`block`: string): *string*

*Defined in [src/lib/content-formatter.ts:65](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-formatter.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`block` | string |

**Returns:** *string*

___

###  formatContent

▸ **formatContent**(`block`: string): *string*

*Defined in [src/lib/content-formatter.ts:61](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-formatter.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`block` | string |

**Returns:** *string*

___

###  formatGroup

▸ **formatGroup**(`content`: string): *string*

*Defined in [src/lib/content-formatter.ts:69](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-formatter.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`content` | string |

**Returns:** *string*
