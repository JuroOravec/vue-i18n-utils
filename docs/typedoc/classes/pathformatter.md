[i18n-util](../README.md) › [PathFormatter](pathformatter.md)

# Class: PathFormatter

Class that formats and prepares for writing parts of (or whole) ContentGroup

## Hierarchy

* **PathFormatter**

## Implements

* [PathFormatter](../README.md#pathformatter)

## Index

### Constructors

* [constructor](pathformatter.md#constructor)

### Properties

* [localePattern](pathformatter.md#localepattern)

### Methods

* [changeLocale](pathformatter.md#changelocale)
* [changePath](pathformatter.md#changepath)
* [localeFromPath](pathformatter.md#localefrompath)

## Constructors

###  constructor

\+ **new PathFormatter**(`options`: [CtorOptions](../README.md#ctoroptions)): *[PathFormatter](pathformatter.md)*

*Defined in [src/lib/path-formatter.ts:31](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/path-formatter.ts#L31)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [CtorOptions](../README.md#ctoroptions) | {} |

**Returns:** *[PathFormatter](pathformatter.md)*

## Properties

###  localePattern

• **localePattern**: *RegExp*

*Implementation of [PathFormatter](../README.md#pathformatter).[localePattern](../README.md#localepattern)*

*Defined in [src/lib/path-formatter.ts:31](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/path-formatter.ts#L31)*

## Methods

###  changeLocale

▸ **changeLocale**(`p`: string, `newLocale`: string): *string*

*Defined in [src/lib/path-formatter.ts:57](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/path-formatter.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`p` | string |
`newLocale` | string |

**Returns:** *string*

___

###  changePath

▸ **changePath**(`p`: string, `newPath`: string): *string*

*Defined in [src/lib/path-formatter.ts:49](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/path-formatter.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`p` | string |
`newPath` | string |

**Returns:** *string*

___

###  localeFromPath

▸ **localeFromPath**(`path`: string): *string | null*

*Defined in [src/lib/path-formatter.ts:44](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/path-formatter.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *string | null*
