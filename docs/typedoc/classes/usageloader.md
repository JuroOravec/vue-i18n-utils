[i18n-util](../README.md) › [UsageLoader](usageloader.md)

# Class: UsageLoader <**T, R**>

## Type parameters

▪ **T**: *[I18nUtil](../README.md#abstract-i18nutil)*

▪ **R**: *any*

## Hierarchy

* [LoaderBase](loaderbase.md)‹T, R, [UseItem](../README.md#useitem), [UsageLoader](../README.md#abstract-usageloader)‹T, R››

  ↳ **UsageLoader**

## Implements

* [UsageLoader](../README.md#abstract-usageloader)‹T, R›

## Index

### Constructors

* [constructor](usageloader.md#constructor)

### Properties

* [callback](usageloader.md#callback)
* [i18nUtil](usageloader.md#i18nutil)

### Methods

* [loadFromFiles](usageloader.md#loadfromfiles)
* [loadFromItems](usageloader.md#loadfromitems)
* [loadFromObjects](usageloader.md#loadfromobjects)

## Constructors

###  constructor

\+ **new UsageLoader**(`options`: object): *[UsageLoader](usageloader.md)*

*Inherited from [LoaderBase](loaderbase.md).[constructor](loaderbase.md#constructor)*

*Defined in [src/lib/i18n-util/loader.ts:20](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/loader.ts#L20)*

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`callback` | function |
`i18nUtil` | T |

**Returns:** *[UsageLoader](usageloader.md)*

## Properties

###  callback

• **callback**: *function*

*Inherited from [LoaderBase](loaderbase.md).[callback](loaderbase.md#callback)*

*Defined in [src/lib/i18n-util/loader.ts:20](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/loader.ts#L20)*

#### Type declaration:

▸ (`items`: [UseItem](../README.md#useitem)[], `ctx`: [UsageLoader](../README.md#abstract-usageloader)‹T, R›, ...`args`: any[]): *R*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [UseItem](../README.md#useitem)[] |
`ctx` | [UsageLoader](../README.md#abstract-usageloader)‹T, R› |
`...args` | any[] |

___

###  i18nUtil

• **i18nUtil**: *T*

*Inherited from [LoaderBase](loaderbase.md).[i18nUtil](loaderbase.md#i18nutil)*

*Defined in [src/lib/i18n-util/loader.ts:19](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/loader.ts#L19)*

## Methods

###  loadFromFiles

▸ **loadFromFiles**(`paths`: any[], `options`: [UsageOptions](../README.md#usageoptions) & [ResolvePathsOptions](../README.md#resolvepathsoptions)): *Promise‹[UnwrapPromise](../README.md#unwrappromise)‹R››*

*Defined in [src/lib/i18n-util/loader.ts:76](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/loader.ts#L76)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`paths` | any[] | - |
`options` | [UsageOptions](../README.md#usageoptions) & [ResolvePathsOptions](../README.md#resolvepathsoptions) | {} |

**Returns:** *Promise‹[UnwrapPromise](../README.md#unwrappromise)‹R››*

___

###  loadFromItems

▸ **loadFromItems**(`items`: [ItemArrayLike](../README.md#itemarraylike)‹[UseItem](../README.md#useitem)›): *R*

*Inherited from [LoaderBase](loaderbase.md).[loadFromItems](loaderbase.md#loadfromitems)*

*Defined in [src/lib/i18n-util/loader.ts:31](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/loader.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ItemArrayLike](../README.md#itemarraylike)‹[UseItem](../README.md#useitem)› |

**Returns:** *R*

___

###  loadFromObjects

▸ **loadFromObjects**(`objects`: [AnyObj](../README.md#anyobj)[], `options`: [FromObjectOptions](../README.md#fromobjectoptions)‹[UsageItem](usageitem.md)›): *Promise‹›*

*Overrides [LoaderBase](loaderbase.md).[loadFromObjects](loaderbase.md#loadfromobjects)*

*Defined in [src/lib/i18n-util/loader.ts:84](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/loader.ts#L84)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`objects` | [AnyObj](../README.md#anyobj)[] | - |
`options` | [FromObjectOptions](../README.md#fromobjectoptions)‹[UsageItem](usageitem.md)› | {} |

**Returns:** *Promise‹›*
