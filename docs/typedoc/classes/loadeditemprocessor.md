[i18n-util](../README.md) › [LoadedItemProcessor](loadeditemprocessor.md)

# Class: LoadedItemProcessor

Variant of I18nUtilItemProcessor that stores the definitions it works
with.

## Hierarchy

* [ItemProcessorMixin](itemprocessormixin.md)

  ↳ [LoadedBase](loadedbase.md)

  ↳ [LoadedBase](loadedbase.md)

  ↳ **LoadedItemProcessor**

  ↳ [LoadedI18nUtil](loadedi18nutil.md)

## Implements

* [Base](../README.md#abstract-base)
* [LoadedBase](../README.md#abstract-loadedbase)
* [Base](../README.md#abstract-base)
* [LoadedBase](../README.md#abstract-loadedbase)
* [LoadedItemProcessor](../README.md#abstract-loadeditemprocessor)

## Index

### Properties

* [adaptors](loadeditemprocessor.md#adaptors)
* [constructor](loadeditemprocessor.md#constructor)
* [i18nUtil](loadeditemprocessor.md#i18nutil)
* [keyResolver](loadeditemprocessor.md#keyresolver)
* [loaded](loadeditemprocessor.md#loaded)
* [localeResolver](loadeditemprocessor.md#localeresolver)
* [options](loadeditemprocessor.md#options)
* [pathResolver](loadeditemprocessor.md#pathresolver)
* [schemator](loadeditemprocessor.md#schemator)
* [validator](loadeditemprocessor.md#validator)
* [valueResolver](loadeditemprocessor.md#valueresolver)

### Methods

* [addAdaptor](loadeditemprocessor.md#addadaptor)
* [addAdaptors](loadeditemprocessor.md#addadaptors)
* [effectiveOptions](loadeditemprocessor.md#effectiveoptions)
* [locale](loadeditemprocessor.md#locale)
* [locales](loadeditemprocessor.md#locales)
* [master](loadeditemprocessor.md#master)
* [missingItems](loadeditemprocessor.md#missingitems)
* [missingLocales](loadeditemprocessor.md#missinglocales)
* [removeAdaptor](loadeditemprocessor.md#removeadaptor)
* [removeAdaptors](loadeditemprocessor.md#removeadaptors)
* [resolveKeys](loadeditemprocessor.md#resolvekeys)
* [resolveLocales](loadeditemprocessor.md#resolvelocales)
* [resolvePaths](loadeditemprocessor.md#resolvepaths)
* [resolveValues](loadeditemprocessor.md#resolvevalues)
* [stats](loadeditemprocessor.md#stats)
* [toObject](loadeditemprocessor.md#toobject)
* [usageAnalyze](loadeditemprocessor.md#usageanalyze)
* [usageValidate](loadeditemprocessor.md#usagevalidate)
* [locale](loadeditemprocessor.md#static-locale)
* [locales](loadeditemprocessor.md#static-locales)
* [master](loadeditemprocessor.md#static-master)
* [missingItems](loadeditemprocessor.md#static-missingitems)
* [missingLocales](loadeditemprocessor.md#static-missinglocales)
* [stats](loadeditemprocessor.md#static-stats)
* [toObject](loadeditemprocessor.md#static-toobject)
* [usageAnalyze](loadeditemprocessor.md#static-usageanalyze)
* [usageValidate](loadeditemprocessor.md#static-usagevalidate)

## Properties

###  adaptors

• **adaptors**: *[Collection](../README.md#collection)*

*Inherited from [Base](base.md).[adaptors](base.md#adaptors)*

*Overrides [Base](base.md).[adaptors](base.md#adaptors)*

*Defined in [src/lib/i18n-util/base.ts:24](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L24)*

___

###  constructor

\+ **new LoadedItemProcessor**(`__namedParameters`: object): *[LoadedItemProcessor](loadeditemprocessor.md)*

*Defined in [src/lib/i18n-util/item-processor.ts:339](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L339)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`i18nUtil` | undefined &#124; [ItemProcessor](../README.md#abstract-itemprocessor)‹› |
`options` | options |

**Returns:** *[LoadedItemProcessor](loadeditemprocessor.md)*

___

###  i18nUtil

• **i18nUtil**: *[ItemProcessor](../README.md#abstract-itemprocessor)*

*Inherited from [LoadedBase](loadedbase.md).[i18nUtil](loadedbase.md#i18nutil)*

*Overrides [LoadedBase](loadedbase.md).[i18nUtil](loadedbase.md#i18nutil)*

*Defined in [src/lib/i18n-util/base.ts:164](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L164)*

*Defined in [src/lib/i18n-util/item-processor.ts:339](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L339)*

___

###  keyResolver

• **keyResolver**: *[KeyResolver](../README.md#keyresolver)*

*Inherited from [Base](base.md).[keyResolver](base.md#keyresolver)*

*Overrides [Base](base.md).[keyResolver](base.md#keyresolver)*

*Defined in [src/lib/i18n-util/base.ts:27](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L27)*

___

###  loaded

• **loaded**: *[ItemArray](../README.md#itemarray)*

*Inherited from [LoadedBase](loadedbase.md).[loaded](loadedbase.md#loaded)*

*Overrides [LoadedBase](loadedbase.md).[loaded](loadedbase.md#loaded)*

*Defined in [src/lib/i18n-util/base.ts:165](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L165)*

___

###  localeResolver

• **localeResolver**: *[LocaleResolver](../README.md#localeresolver)*

*Inherited from [Base](base.md).[localeResolver](base.md#localeresolver)*

*Overrides [Base](base.md).[localeResolver](base.md#localeresolver)*

*Defined in [src/lib/i18n-util/base.ts:26](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L26)*

___

###  options

• **options**: *[AnyObj](../README.md#anyobj)*

*Inherited from [Base](base.md).[options](base.md#options)*

*Overrides [Base](base.md).[options](base.md#options)*

*Defined in [src/lib/i18n-util/base.ts:31](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L31)*

___

###  pathResolver

• **pathResolver**: *[PathResolver](../README.md#pathresolver)*

*Inherited from [Base](base.md).[pathResolver](base.md#pathresolver)*

*Overrides [Base](base.md).[pathResolver](base.md#pathresolver)*

*Defined in [src/lib/i18n-util/base.ts:25](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L25)*

___

###  schemator

• **schemator**: *[Schemator](../README.md#abstract-schemator)*

*Inherited from [Base](base.md).[schemator](base.md#schemator)*

*Overrides [Base](base.md).[schemator](base.md#schemator)*

*Defined in [src/lib/i18n-util/base.ts:29](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L29)*

___

###  validator

• **validator**: *[Validator](../README.md#abstract-validator)*

*Inherited from [Base](base.md).[validator](base.md#validator)*

*Overrides [Base](base.md).[validator](base.md#validator)*

*Defined in [src/lib/i18n-util/base.ts:30](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L30)*

___

###  valueResolver

• **valueResolver**: *[ValueResolver](../README.md#valueresolver)*

*Inherited from [Base](base.md).[valueResolver](base.md#valueresolver)*

*Overrides [Base](base.md).[valueResolver](base.md#valueresolver)*

*Defined in [src/lib/i18n-util/base.ts:28](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L28)*

## Methods

###  addAdaptor

▸ **addAdaptor**(`params`: Parameters<Base["adaptors"]["add"]>[0]): *void*

*Inherited from [Base](base.md).[addAdaptor](base.md#addadaptor)*

*Overrides [Base](base.md).[addAdaptor](base.md#addadaptor)*

*Defined in [src/lib/i18n-util/base.ts:54](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | Parameters<Base["adaptors"]["add"]>[0] |

**Returns:** *void*

___

###  addAdaptors

▸ **addAdaptors**(`paramsList`: Parameters<Base["adaptors"]["add"]>[0][]): *void*

*Inherited from [Base](base.md).[addAdaptors](base.md#addadaptors)*

*Overrides [Base](base.md).[addAdaptors](base.md#addadaptors)*

*Defined in [src/lib/i18n-util/base.ts:60](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`paramsList` | Parameters<Base["adaptors"]["add"]>[0][] |

**Returns:** *void*

___

###  effectiveOptions

▸ **effectiveOptions**<**O**>(...`options`: O[]): *O*

*Inherited from [Base](base.md).[effectiveOptions](base.md#effectiveoptions)*

*Overrides [Base](base.md).[effectiveOptions](base.md#effectiveoptions)*

*Defined in [src/lib/i18n-util/base.ts:158](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L158)*

**Type parameters:**

▪ **O**: *[AnyObj](../README.md#anyobj)*

**Parameters:**

Name | Type |
------ | ------ |
`...options` | O[] |

**Returns:** *O*

___

###  locale

▸ **locale**(`locale`: any, `options`: [LocaleOptions](../README.md#localeoptions)): *[Item](../README.md#item)‹›[] | Promise‹[Item](../README.md#item)‹›[]›*

*Defined in [src/lib/i18n-util/item-processor.ts:353](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L353)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`locale` | any | - |
`options` | [LocaleOptions](../README.md#localeoptions) | {} |

**Returns:** *[Item](../README.md#item)‹›[] | Promise‹[Item](../README.md#item)‹›[]›*

___

###  locales

▸ **locales**(`locales`: any[], `options`: [LocaleOptions](../README.md#localeoptions)): *[Item](../README.md#item)‹›[] | Promise‹[Item](../README.md#item)‹›[]›*

*Defined in [src/lib/i18n-util/item-processor.ts:357](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L357)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`locales` | any[] | - |
`options` | [LocaleOptions](../README.md#localeoptions) | {} |

**Returns:** *[Item](../README.md#item)‹›[] | Promise‹[Item](../README.md#item)‹›[]›*

___

###  master

▸ **master**(`options`: [MasterOptions](../README.md#masteroptions)): *[Item](../README.md#item)‹›[]*

*Defined in [src/lib/i18n-util/item-processor.ts:349](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L349)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [MasterOptions](../README.md#masteroptions) | {} |

**Returns:** *[Item](../README.md#item)‹›[]*

___

###  missingItems

▸ **missingItems**(`options`: [MissingItemsOptions](../README.md#missingitemsoptions)): *[Item](../README.md#item)‹›[]*

*Defined in [src/lib/i18n-util/item-processor.ts:368](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L368)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [MissingItemsOptions](../README.md#missingitemsoptions) | {} |

**Returns:** *[Item](../README.md#item)‹›[]*

___

###  missingLocales

▸ **missingLocales**(`options`: [MissingLocalesOptions](../README.md#missinglocalesoptions)): *string[]*

*Defined in [src/lib/i18n-util/item-processor.ts:372](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L372)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [MissingLocalesOptions](../README.md#missinglocalesoptions) | {} |

**Returns:** *string[]*

___

###  removeAdaptor

▸ **removeAdaptor**(`name`: Parameters<Base["adaptors"]["delete"]>[0]): *void*

*Inherited from [Base](base.md).[removeAdaptor](base.md#removeadaptor)*

*Overrides [Base](base.md).[removeAdaptor](base.md#removeadaptor)*

*Defined in [src/lib/i18n-util/base.ts:64](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | Parameters<Base["adaptors"]["delete"]>[0] |

**Returns:** *void*

___

###  removeAdaptors

▸ **removeAdaptors**(`names`: Parameters<Base["adaptors"]["delete"]>[0][]): *void*

*Inherited from [Base](base.md).[removeAdaptors](base.md#removeadaptors)*

*Overrides [Base](base.md).[removeAdaptors](base.md#removeadaptors)*

*Defined in [src/lib/i18n-util/base.ts:69](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`names` | Parameters<Base["adaptors"]["delete"]>[0][] |

**Returns:** *void*

___

###  resolveKeys

▸ **resolveKeys**(`keys`: any[], `options`: [ResolveKeysOptions](../README.md#resolvekeysoptions)): *Promise‹string[][]›*

*Inherited from [LoadedBase](loadedbase.md).[resolveKeys](loadedbase.md#resolvekeys)*

*Overrides [Base](base.md).[resolveKeys](base.md#resolvekeys)*

*Defined in [src/lib/i18n-util/base.ts:180](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L180)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`keys` | any[] | - |
`options` | [ResolveKeysOptions](../README.md#resolvekeysoptions) | {} |

**Returns:** *Promise‹string[][]›*

___

###  resolveLocales

▸ **resolveLocales**(`locales`: any[], `options`: [ResolveLocalesOptions](../README.md#resolvelocalesoptions)): *Promise‹string[]›*

*Inherited from [LoadedBase](loadedbase.md).[resolveLocales](loadedbase.md#resolvelocales)*

*Overrides [Base](base.md).[resolveLocales](base.md#resolvelocales)*

*Defined in [src/lib/i18n-util/base.ts:173](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L173)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`locales` | any[] | - |
`options` | [ResolveLocalesOptions](../README.md#resolvelocalesoptions) | {} |

**Returns:** *Promise‹string[]›*

___

###  resolvePaths

▸ **resolvePaths**(`paths`: any[], `options`: [ResolvePathsOptions](../README.md#resolvepathsoptions)): *Promise‹string[]›*

*Inherited from [Base](base.md).[resolvePaths](base.md#resolvepaths)*

*Overrides [Base](base.md).[resolvePaths](base.md#resolvepaths)*

*Defined in [src/lib/i18n-util/base.ts:73](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L73)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`paths` | any[] | - |
`options` | [ResolvePathsOptions](../README.md#resolvepathsoptions) | {} |

**Returns:** *Promise‹string[]›*

___

###  resolveValues

▸ **resolveValues**(`values`: any[], `options`: [ResolveValuesOptions](../README.md#resolvevaluesoptions)): *Promise‹any[]›*

*Inherited from [LoadedBase](loadedbase.md).[resolveValues](loadedbase.md#resolvevalues)*

*Overrides [Base](base.md).[resolveValues](base.md#resolvevalues)*

*Defined in [src/lib/i18n-util/base.ts:184](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L184)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`values` | any[] | - |
`options` | [ResolveValuesOptions](../README.md#resolvevaluesoptions) | {} |

**Returns:** *Promise‹any[]›*

___

###  stats

▸ **stats**(`usage`: [UseItemArrayLike](../README.md#useitemarraylike), `options`: [StatsOptions](../README.md#statsoptions)): *[KeyStats](keystats.md)‹›*

*Defined in [src/lib/i18n-util/item-processor.ts:390](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L390)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`usage` | [UseItemArrayLike](../README.md#useitemarraylike) | - |
`options` | [StatsOptions](../README.md#statsoptions) | {} |

**Returns:** *[KeyStats](keystats.md)‹›*

___

###  toObject

▸ **toObject**<**O**>(`options`: O)

*Defined in [src/lib/i18n-util/item-processor.ts:361](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L361)*

**Type parameters:**

▪ **O**: *[ToObjectOptions](../README.md#toobjectoptions)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | O | {} as O |

___

###  usageAnalyze

▸ **usageAnalyze**(`usage`: [UseItemArrayLike](../README.md#useitemarraylike), `options?`: [UsageAnalyzeOptions](../README.md#usageanalyzeoptions)): *object | Promise‹object›*

*Defined in [src/lib/i18n-util/item-processor.ts:376](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L376)*

**Parameters:**

Name | Type |
------ | ------ |
`usage` | [UseItemArrayLike](../README.md#useitemarraylike) |
`options?` | [UsageAnalyzeOptions](../README.md#usageanalyzeoptions) |

**Returns:** *object | Promise‹object›*

___

###  usageValidate

▸ **usageValidate**(`usage`: [UseItemArrayLike](../README.md#useitemarraylike), `options?`: [UsageValidateOptions](../README.md#usagevalidateoptions)): *void*

*Defined in [src/lib/i18n-util/item-processor.ts:383](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L383)*

**Parameters:**

Name | Type |
------ | ------ |
`usage` | [UseItemArrayLike](../README.md#useitemarraylike) |
`options?` | [UsageValidateOptions](../README.md#usagevalidateoptions) |

**Returns:** *void*

___

### `Static` locale

▸ **locale**(`items`: [ItemArrayLike](../README.md#itemarraylike), `locale`: string, `options`: [LocaleOptions](../README.md#localeoptions)): *[Item](../README.md#item)‹›[]*

*Inherited from [ItemProcessorMixin](itemprocessormixin.md).[locale](itemprocessormixin.md#static-locale)*

*Defined in [src/lib/i18n-util/item-processor.ts:39](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L39)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`items` | [ItemArrayLike](../README.md#itemarraylike) | - |
`locale` | string | - |
`options` | [LocaleOptions](../README.md#localeoptions) | {} |

**Returns:** *[Item](../README.md#item)‹›[]*

___

### `Static` locales

▸ **locales**(`items`: [ItemArrayLike](../README.md#itemarraylike), `locales`: string[], `options`: [LocaleOptions](../README.md#localeoptions)): *[Item](../README.md#item)‹›[]*

*Inherited from [ItemProcessorMixin](itemprocessormixin.md).[locales](itemprocessormixin.md#static-locales)*

*Defined in [src/lib/i18n-util/item-processor.ts:47](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L47)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`items` | [ItemArrayLike](../README.md#itemarraylike) | - |
`locales` | string[] | - |
`options` | [LocaleOptions](../README.md#localeoptions) | {} |

**Returns:** *[Item](../README.md#item)‹›[]*

___

### `Static` master

▸ **master**(`items`: [ItemArrayLike](../README.md#itemarraylike), `options`: [MasterOptions](../README.md#masteroptions)): *[Item](../README.md#item)‹›[]*

*Inherited from [ItemProcessorMixin](itemprocessormixin.md).[master](itemprocessormixin.md#static-master)*

*Defined in [src/lib/i18n-util/item-processor.ts:30](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L30)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`items` | [ItemArrayLike](../README.md#itemarraylike) | - |
`options` | [MasterOptions](../README.md#masteroptions) | {} |

**Returns:** *[Item](../README.md#item)‹›[]*

___

### `Static` missingItems

▸ **missingItems**(`definitions`: [DefItemArrayLike](../README.md#defitemarraylike), `options`: [MissingItemsOptions](../README.md#missingitemsoptions)): *[Item](../README.md#item)‹›[]*

*Inherited from [ItemProcessorMixin](itemprocessormixin.md).[missingItems](itemprocessormixin.md#static-missingitems)*

*Defined in [src/lib/i18n-util/item-processor.ts:70](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L70)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`definitions` | [DefItemArrayLike](../README.md#defitemarraylike) | - |
`options` | [MissingItemsOptions](../README.md#missingitemsoptions) | {} |

**Returns:** *[Item](../README.md#item)‹›[]*

___

### `Static` missingLocales

▸ **missingLocales**(`definitions`: [DefItemArrayLike](../README.md#defitemarraylike), `options`: [MissingLocalesOptions](../README.md#missinglocalesoptions)): *string[]*

*Inherited from [ItemProcessorMixin](itemprocessormixin.md).[missingLocales](itemprocessormixin.md#static-missinglocales)*

*Defined in [src/lib/i18n-util/item-processor.ts:86](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L86)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`definitions` | [DefItemArrayLike](../README.md#defitemarraylike) | - |
`options` | [MissingLocalesOptions](../README.md#missinglocalesoptions) | {} |

**Returns:** *string[]*

___

### `Static` stats

▸ **stats**(`definitions`: [DefItemArrayLike](../README.md#defitemarraylike), `usage`: [UseItemArrayLike](../README.md#useitemarraylike), `options`: [StatsOptions](../README.md#statsoptions)): *[KeyStats](keystats.md)‹›*

*Inherited from [ItemProcessorMixin](itemprocessormixin.md).[stats](itemprocessormixin.md#static-stats)*

*Defined in [src/lib/i18n-util/item-processor.ts:232](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L232)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`definitions` | [DefItemArrayLike](../README.md#defitemarraylike) | - |
`usage` | [UseItemArrayLike](../README.md#useitemarraylike) | - |
`options` | [StatsOptions](../README.md#statsoptions) | {} |

**Returns:** *[KeyStats](keystats.md)‹›*

___

### `Static` toObject

▸ **toObject**<**O**>(`items`: [ItemArrayLike](../README.md#itemarraylike), `options`: O): *[ToObjectResult](../README.md#toobjectresult)‹O["simple"], O["merge"]›*

*Inherited from [ItemProcessorMixin](itemprocessormixin.md).[toObject](itemprocessormixin.md#static-toobject)*

*Defined in [src/lib/i18n-util/item-processor.ts:60](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L60)*

**Type parameters:**

▪ **O**: *[ToObjectOptions](../README.md#toobjectoptions)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`items` | [ItemArrayLike](../README.md#itemarraylike) | - |
`options` | O | {} as O |

**Returns:** *[ToObjectResult](../README.md#toobjectresult)‹O["simple"], O["merge"]›*

___

### `Static` usageAnalyze

▸ **usageAnalyze**(`definitions`: [DefItemArrayLike](../README.md#defitemarraylike), `usage`: [UseItemArrayLike](../README.md#useitemarraylike), `options`: [UsageAnalyzeOptions](../README.md#usageanalyzeoptions)): *object*

*Inherited from [ItemProcessorMixin](itemprocessormixin.md).[usageAnalyze](itemprocessormixin.md#static-usageanalyze)*

*Defined in [src/lib/i18n-util/item-processor.ts:94](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L94)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`definitions` | [DefItemArrayLike](../README.md#defitemarraylike) | - |
`usage` | [UseItemArrayLike](../README.md#useitemarraylike) | - |
`options` | [UsageAnalyzeOptions](../README.md#usageanalyzeoptions) | {} |

**Returns:** *object*

* ### **definitions**: *object*

  * **duplicates**: *[Map](arraymap.md#static-map)‹string, [Map](arraymap.md#static-map)‹string, [Item](../README.md#item)‹›[]››*

  * **missing**: *[Item](../README.md#item)‹›[]* = missingDefinitions

  * **unused**: *[Item](../README.md#item)‹›[]* = unusedDefinitions

  * **used**: *[Item](../README.md#item)‹›[]* = usedDefinitions

* ### **usage**: *object*

  * **defined**: *[Item](../README.md#item)‹›[]* = definedUsage

  * **missing**: *[UsageItem](usageitem.md)‹›[]* = missingUsage

  * **undefined**: *[Item](../README.md#item)‹›[]* = undefinedUsage

___

### `Static` usageValidate

▸ **usageValidate**(`definitions`: [DefItemArrayLike](../README.md#defitemarraylike), `usage`: [UseItemArrayLike](../README.md#useitemarraylike), `options`: [UsageValidateOptions](../README.md#usagevalidateoptions)): *void*

*Inherited from [ItemProcessorMixin](itemprocessormixin.md).[usageValidate](itemprocessormixin.md#static-usagevalidate)*

*Defined in [src/lib/i18n-util/item-processor.ts:206](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L206)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`definitions` | [DefItemArrayLike](../README.md#defitemarraylike) | - |
`usage` | [UseItemArrayLike](../README.md#useitemarraylike) | - |
`options` | [UsageValidateOptions](../README.md#usagevalidateoptions) | {} |

**Returns:** *void*
