[i18n-util](../README.md) › [DefinitionLoader](definitionloader.md)

# Class: DefinitionLoader <**T, R**>

## Type parameters

▪ **T**: *[I18nUtil](../README.md#abstract-i18nutil)*

▪ **R**: *any*

## Hierarchy

* [LoaderBase](loaderbase.md)‹T, R, [DefItem](../README.md#defitem), [DefinitionLoader](../README.md#abstract-definitionloader)‹T, R››

  ↳ **DefinitionLoader**

## Implements

* [DefinitionLoader](../README.md#abstract-definitionloader)‹T, R›

## Index

### Constructors

* [constructor](definitionloader.md#constructor)

### Properties

* [callback](definitionloader.md#callback)
* [i18nUtil](definitionloader.md#i18nutil)

### Methods

* [loadFromFiles](definitionloader.md#loadfromfiles)
* [loadFromItems](definitionloader.md#loadfromitems)
* [loadFromObjects](definitionloader.md#loadfromobjects)

## Constructors

###  constructor

\+ **new DefinitionLoader**(`options`: object): *[DefinitionLoader](definitionloader.md)*

*Inherited from [LoaderBase](loaderbase.md).[constructor](loaderbase.md#constructor)*

*Defined in [src/lib/i18n-util/loader.ts:20](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/loader.ts#L20)*

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`callback` | function |
`i18nUtil` | T |

**Returns:** *[DefinitionLoader](definitionloader.md)*

## Properties

###  callback

• **callback**: *function*

*Inherited from [LoaderBase](loaderbase.md).[callback](loaderbase.md#callback)*

*Defined in [src/lib/i18n-util/loader.ts:20](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/loader.ts#L20)*

#### Type declaration:

▸ (`items`: [DefItem](../README.md#defitem)[], `ctx`: [DefinitionLoader](../README.md#abstract-definitionloader)‹T, R›, ...`args`: any[]): *R*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [DefItem](../README.md#defitem)[] |
`ctx` | [DefinitionLoader](../README.md#abstract-definitionloader)‹T, R› |
`...args` | any[] |

___

###  i18nUtil

• **i18nUtil**: *T*

*Inherited from [LoaderBase](loaderbase.md).[i18nUtil](loaderbase.md#i18nutil)*

*Defined in [src/lib/i18n-util/loader.ts:19](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/loader.ts#L19)*

## Methods

###  loadFromFiles

▸ **loadFromFiles**(`paths`: any[], `options`: [DefinitionOptions](../README.md#definitionoptions) & [ResolvePathsOptions](../README.md#resolvepathsoptions)): *Promise‹[UnwrapPromise](../README.md#unwrappromise)‹R››*

*Defined in [src/lib/i18n-util/loader.ts:49](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/loader.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`paths` | any[] | - |
`options` | [DefinitionOptions](../README.md#definitionoptions) & [ResolvePathsOptions](../README.md#resolvepathsoptions) | {} |

**Returns:** *Promise‹[UnwrapPromise](../README.md#unwrappromise)‹R››*

___

###  loadFromItems

▸ **loadFromItems**(`items`: [ItemArrayLike](../README.md#itemarraylike)‹[DefItem](../README.md#defitem)›): *R*

*Inherited from [LoaderBase](loaderbase.md).[loadFromItems](loaderbase.md#loadfromitems)*

*Defined in [src/lib/i18n-util/loader.ts:31](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/loader.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ItemArrayLike](../README.md#itemarraylike)‹[DefItem](../README.md#defitem)› |

**Returns:** *R*

___

###  loadFromObjects

▸ **loadFromObjects**(`objects`: [AnyObj](../README.md#anyobj)[], `options`: [FromObjectOptions](../README.md#fromobjectoptions)‹[DefItem](../README.md#defitem)›): *Promise‹›*

*Overrides [LoaderBase](loaderbase.md).[loadFromObjects](loaderbase.md#loadfromobjects)*

*Defined in [src/lib/i18n-util/loader.ts:59](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/loader.ts#L59)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`objects` | [AnyObj](../README.md#anyobj)[] | - |
`options` | [FromObjectOptions](../README.md#fromobjectoptions)‹[DefItem](../README.md#defitem)› | {} |

**Returns:** *Promise‹›*
