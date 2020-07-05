[i18n-util](../README.md) › [LoaderBase](loaderbase.md)

# Class: LoaderBase <**T, R, I, CTX**>

## Type parameters

▪ **T**: *[I18nUtil](../README.md#abstract-i18nutil)*

▪ **R**: *any*

▪ **I**: *[Item](../README.md#item)*

▪ **CTX**: *any*

## Hierarchy

* **LoaderBase**

  ↳ [DefinitionLoader](definitionloader.md)

  ↳ [UsageLoader](usageloader.md)

## Index

### Constructors

* [constructor](loaderbase.md#constructor)

### Properties

* [callback](loaderbase.md#callback)
* [i18nUtil](loaderbase.md#i18nutil)

### Methods

* [loadFromItems](loaderbase.md#loadfromitems)
* [loadFromObjects](loaderbase.md#loadfromobjects)

## Constructors

###  constructor

\+ **new LoaderBase**(`options`: object): *[LoaderBase](loaderbase.md)*

*Defined in [src/lib/i18n-util/loader.ts:20](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/loader.ts#L20)*

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`callback` | function |
`i18nUtil` | T |

**Returns:** *[LoaderBase](loaderbase.md)*

## Properties

###  callback

• **callback**: *function*

*Defined in [src/lib/i18n-util/loader.ts:20](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/loader.ts#L20)*

#### Type declaration:

▸ (`items`: I[], `ctx`: CTX, ...`args`: any[]): *R*

**Parameters:**

Name | Type |
------ | ------ |
`items` | I[] |
`ctx` | CTX |
`...args` | any[] |

___

###  i18nUtil

• **i18nUtil**: *T*

*Defined in [src/lib/i18n-util/loader.ts:19](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/loader.ts#L19)*

## Methods

###  loadFromItems

▸ **loadFromItems**(`items`: [ItemArrayLike](../README.md#itemarraylike)‹I›): *R*

*Defined in [src/lib/i18n-util/loader.ts:31](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/loader.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ItemArrayLike](../README.md#itemarraylike)‹I› |

**Returns:** *R*

___

###  loadFromObjects

▸ **loadFromObjects**(`objects`: [AnyObj](../README.md#anyobj)[], `options`: [FromObjectOptions](../README.md#fromobjectoptions)‹I›): *Promise‹[UnwrapPromise](../README.md#unwrappromise)‹R››*

*Defined in [src/lib/i18n-util/loader.ts:35](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/loader.ts#L35)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`objects` | [AnyObj](../README.md#anyobj)[] | - |
`options` | [FromObjectOptions](../README.md#fromobjectoptions)‹I› | {} |

**Returns:** *Promise‹[UnwrapPromise](../README.md#unwrappromise)‹R››*
