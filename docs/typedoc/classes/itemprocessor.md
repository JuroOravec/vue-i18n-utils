[i18n-util](../README.md) › [ItemProcessor](itemprocessor.md)

# Class: ItemProcessor

I18nUtil class with functionalities for working with definition and usage
items in the context of I18nUtil

## Hierarchy

* [ItemProcessorMixin](itemprocessormixin.md)

* [Base](base.md)

* [Base](base.md)

  ↳ **ItemProcessor**

  ↳ [I18nUtil](i18nutil.md)

## Implements

* [Base](../README.md#abstract-base)
* [Base](../README.md#abstract-base)
* [ItemProcessor](../README.md#abstract-itemprocessor)

## Index

### Properties

* [adaptors](itemprocessor.md#adaptors)
* [constructor](itemprocessor.md#constructor)
* [keyResolver](itemprocessor.md#keyresolver)
* [localeResolver](itemprocessor.md#localeresolver)
* [options](itemprocessor.md#options)
* [pathResolver](itemprocessor.md#pathresolver)
* [schemator](itemprocessor.md#schemator)
* [validator](itemprocessor.md#validator)
* [valueResolver](itemprocessor.md#valueresolver)

### Methods

* [addAdaptor](itemprocessor.md#addadaptor)
* [addAdaptors](itemprocessor.md#addadaptors)
* [effectiveOptions](itemprocessor.md#effectiveoptions)
* [locale](itemprocessor.md#locale)
* [locales](itemprocessor.md#locales)
* [master](itemprocessor.md#master)
* [missingItems](itemprocessor.md#missingitems)
* [missingLocales](itemprocessor.md#missinglocales)
* [removeAdaptor](itemprocessor.md#removeadaptor)
* [removeAdaptors](itemprocessor.md#removeadaptors)
* [resolveKeys](itemprocessor.md#resolvekeys)
* [resolveLocales](itemprocessor.md#resolvelocales)
* [resolvePaths](itemprocessor.md#resolvepaths)
* [resolveValues](itemprocessor.md#resolvevalues)
* [stats](itemprocessor.md#stats)
* [toObject](itemprocessor.md#toobject)
* [usageAnalyze](itemprocessor.md#usageanalyze)
* [usageValidate](itemprocessor.md#usagevalidate)
* [locale](itemprocessor.md#static-locale)
* [locales](itemprocessor.md#static-locales)
* [master](itemprocessor.md#static-master)
* [missingItems](itemprocessor.md#static-missingitems)
* [missingLocales](itemprocessor.md#static-missinglocales)
* [stats](itemprocessor.md#static-stats)
* [toObject](itemprocessor.md#static-toobject)
* [usageAnalyze](itemprocessor.md#static-usageanalyze)
* [usageValidate](itemprocessor.md#static-usagevalidate)

## Properties

###  adaptors

• **adaptors**: *[Collection](../README.md#collection)*

*Inherited from [Base](base.md).[adaptors](base.md#adaptors)*

*Overrides [Base](base.md).[adaptors](base.md#adaptors)*

*Defined in [src/lib/i18n-util/base.ts:24](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L24)*

___

###  constructor

• **constructor**: *typeof ItemProcessorMixin*

*Overrides [Base](base.md).[constructor](base.md#constructor)*

*Defined in [src/lib/i18n-util/item-processor.ts:243](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L243)*

___

###  keyResolver

• **keyResolver**: *[KeyResolver](../README.md#keyresolver)*

*Inherited from [Base](base.md).[keyResolver](base.md#keyresolver)*

*Overrides [Base](base.md).[keyResolver](base.md#keyresolver)*

*Defined in [src/lib/i18n-util/base.ts:27](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L27)*

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

▸ **locale**(`items`: [ItemArrayLike](../README.md#itemarraylike), `locale`: any, `options`: [LocaleOptions](../README.md#localeoptions)): *Promise‹[Item](../README.md#item)‹›[]›*

*Defined in [src/lib/i18n-util/item-processor.ts:255](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L255)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`items` | [ItemArrayLike](../README.md#itemarraylike) | - |
`locale` | any | - |
`options` | [LocaleOptions](../README.md#localeoptions) | {} |

**Returns:** *Promise‹[Item](../README.md#item)‹›[]›*

___

###  locales

▸ **locales**(`items`: [ItemArrayLike](../README.md#itemarraylike), `locales`: any[], `options`: [LocaleOptions](../README.md#localeoptions)): *Promise‹[Item](../README.md#item)‹›[]›*

*Defined in [src/lib/i18n-util/item-processor.ts:263](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L263)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`items` | [ItemArrayLike](../README.md#itemarraylike) | - |
`locales` | any[] | - |
`options` | [LocaleOptions](../README.md#localeoptions) | {} |

**Returns:** *Promise‹[Item](../README.md#item)‹›[]›*

___

###  master

▸ **master**(`items`: [ItemArrayLike](../README.md#itemarraylike), `options`: [MasterOptions](../README.md#masteroptions)): *[Item](../README.md#item)‹›[]*

*Defined in [src/lib/i18n-util/item-processor.ts:250](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L250)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`items` | [ItemArrayLike](../README.md#itemarraylike) | - |
`options` | [MasterOptions](../README.md#masteroptions) | {} |

**Returns:** *[Item](../README.md#item)‹›[]*

___

###  missingItems

▸ **missingItems**(`definitions`: [DefItemArrayLike](../README.md#defitemarraylike), `options`: [MissingItemsOptions](../README.md#missingitemsoptions)): *[Item](../README.md#item)‹›[]*

*Defined in [src/lib/i18n-util/item-processor.ts:284](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L284)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`definitions` | [DefItemArrayLike](../README.md#defitemarraylike) | - |
`options` | [MissingItemsOptions](../README.md#missingitemsoptions) | {} |

**Returns:** *[Item](../README.md#item)‹›[]*

___

###  missingLocales

▸ **missingLocales**(`definitions`: [DefItemArrayLike](../README.md#defitemarraylike), `options`: [MissingLocalesOptions](../README.md#missinglocalesoptions)): *string[]*

*Defined in [src/lib/i18n-util/item-processor.ts:292](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L292)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`definitions` | [DefItemArrayLike](../README.md#defitemarraylike) | - |
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

▸ **resolveKeys**(`items`: [ItemArrayLike](../README.md#itemarraylike), `keys`: any[], `options`: [ResolveKeysOptions](../README.md#resolvekeysoptions)): *Promise‹string[][]›*

*Inherited from [Base](base.md).[resolveKeys](base.md#resolvekeys)*

*Overrides [Base](base.md).[resolveKeys](base.md#resolvekeys)*

*Defined in [src/lib/i18n-util/base.ts:96](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L96)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`items` | [ItemArrayLike](../README.md#itemarraylike) | - |
`keys` | any[] | - |
`options` | [ResolveKeysOptions](../README.md#resolvekeysoptions) | {} |

**Returns:** *Promise‹string[][]›*

___

###  resolveLocales

▸ **resolveLocales**(`items`: [ItemArrayLike](../README.md#itemarraylike), `locales`: any[], `options`: [ResolveLocalesOptions](../README.md#resolvelocalesoptions)): *Promise‹string[]›*

*Inherited from [Base](base.md).[resolveLocales](base.md#resolvelocales)*

*Overrides [Base](base.md).[resolveLocales](base.md#resolvelocales)*

*Defined in [src/lib/i18n-util/base.ts:82](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L82)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`items` | [ItemArrayLike](../README.md#itemarraylike) | - |
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

▸ **resolveValues**(`items`: [ItemArrayLike](../README.md#itemarraylike), `values`: any[], `options`: [ResolveValuesOptions](../README.md#resolvevaluesoptions)): *Promise‹any[]›*

*Inherited from [Base](base.md).[resolveValues](base.md#resolvevalues)*

*Overrides [Base](base.md).[resolveValues](base.md#resolvevalues)*

*Defined in [src/lib/i18n-util/base.ts:109](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L109)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`items` | [ItemArrayLike](../README.md#itemarraylike) | - |
`values` | any[] | - |
`options` | [ResolveValuesOptions](../README.md#resolvevaluesoptions) | {} |

**Returns:** *Promise‹any[]›*

___

###  stats

▸ **stats**(`definitions`: [DefItemArrayLike](../README.md#defitemarraylike), `usage`: [UseItemArrayLike](../README.md#useitemarraylike), `options`: [StatsOptions](../README.md#statsoptions)): *[KeyStats](keystats.md)‹›*

*Defined in [src/lib/i18n-util/item-processor.ts:318](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L318)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`definitions` | [DefItemArrayLike](../README.md#defitemarraylike) | - |
`usage` | [UseItemArrayLike](../README.md#useitemarraylike) | - |
`options` | [StatsOptions](../README.md#statsoptions) | {} |

**Returns:** *[KeyStats](keystats.md)‹›*

___

###  toObject

▸ **toObject**<**O**>(`items`: [ItemArrayLike](../README.md#itemarraylike), `options`: O): *[ToObjectResult](../README.md#toobjectresult)‹O["simple"], O["merge"]›*

*Defined in [src/lib/i18n-util/item-processor.ts:276](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L276)*

**Type parameters:**

▪ **O**: *[ToObjectOptions](../README.md#toobjectoptions)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`items` | [ItemArrayLike](../README.md#itemarraylike) | - |
`options` | O | {} as O |

**Returns:** *[ToObjectResult](../README.md#toobjectresult)‹O["simple"], O["merge"]›*

___

###  usageAnalyze

▸ **usageAnalyze**(`definitions`: [DefItemArrayLike](../README.md#defitemarraylike), `usage`: [UseItemArrayLike](../README.md#useitemarraylike), `options`: [UsageAnalyzeOptions](../README.md#usageanalyzeoptions)): *object*

*Defined in [src/lib/i18n-util/item-processor.ts:300](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L300)*

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

###  usageValidate

▸ **usageValidate**(`definitions`: [DefItemArrayLike](../README.md#defitemarraylike), `usage`: [UseItemArrayLike](../README.md#useitemarraylike), `options`: [UsageValidateOptions](../README.md#usagevalidateoptions)): *void*

*Defined in [src/lib/i18n-util/item-processor.ts:309](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L309)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`definitions` | [DefItemArrayLike](../README.md#defitemarraylike) | - |
`usage` | [UseItemArrayLike](../README.md#useitemarraylike) | - |
`options` | [UsageValidateOptions](../README.md#usagevalidateoptions) | {} |

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
