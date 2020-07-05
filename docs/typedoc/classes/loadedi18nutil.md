[i18n-util](../README.md) › [LoadedI18nUtil](loadedi18nutil.md)

# Class: LoadedI18nUtil

## Hierarchy

  ↳ [LoadedItemProcessor](loadeditemprocessor.md)

  ↳ **LoadedI18nUtil**

## Implements

* [Base](../README.md#abstract-base)
* [LoadedBase](../README.md#abstract-loadedbase)
* [Base](../README.md#abstract-base)
* [LoadedBase](../README.md#abstract-loadedbase)
* [LoadedItemProcessor](../README.md#abstract-loadeditemprocessor)
* [LoadedI18nUtil](../README.md#abstract-loadedi18nutil)

## Index

### Constructors

* [constructor](loadedi18nutil.md#constructor)

### Properties

* [adaptors](loadedi18nutil.md#adaptors)
* [i18nUtil](loadedi18nutil.md#i18nutil)
* [keyResolver](loadedi18nutil.md#keyresolver)
* [loaded](loadedi18nutil.md#loaded)
* [localeResolver](loadedi18nutil.md#localeresolver)
* [options](loadedi18nutil.md#options)
* [pathResolver](loadedi18nutil.md#pathresolver)
* [schemator](loadedi18nutil.md#schemator)
* [validator](loadedi18nutil.md#validator)
* [valueResolver](loadedi18nutil.md#valueresolver)

### Methods

* [addAdaptor](loadedi18nutil.md#addadaptor)
* [addAdaptors](loadedi18nutil.md#addadaptors)
* [addLocale](loadedi18nutil.md#addlocale)
* [addLocales](loadedi18nutil.md#addlocales)
* [clearLocale](loadedi18nutil.md#clearlocale)
* [clearLocales](loadedi18nutil.md#clearlocales)
* [definitions](loadedi18nutil.md#definitions)
* [drop](loadedi18nutil.md#drop)
* [dropFrom](loadedi18nutil.md#dropfrom)
* [effectiveOptions](loadedi18nutil.md#effectiveoptions)
* [locale](loadedi18nutil.md#locale)
* [locales](loadedi18nutil.md#locales)
* [master](loadedi18nutil.md#master)
* [missingItems](loadedi18nutil.md#missingitems)
* [missingLocales](loadedi18nutil.md#missinglocales)
* [patch](loadedi18nutil.md#patch)
* [patchTo](loadedi18nutil.md#patchto)
* [removeAdaptor](loadedi18nutil.md#removeadaptor)
* [removeAdaptors](loadedi18nutil.md#removeadaptors)
* [removeLocale](loadedi18nutil.md#removelocale)
* [removeLocales](loadedi18nutil.md#removelocales)
* [resolveKeys](loadedi18nutil.md#resolvekeys)
* [resolveLocales](loadedi18nutil.md#resolvelocales)
* [resolvePaths](loadedi18nutil.md#resolvepaths)
* [resolveValues](loadedi18nutil.md#resolvevalues)
* [schema](loadedi18nutil.md#schema)
* [stats](loadedi18nutil.md#stats)
* [statsAgainst](loadedi18nutil.md#statsagainst)
* [toObject](loadedi18nutil.md#toobject)
* [usage](loadedi18nutil.md#usage)
* [usageAnalyze](loadedi18nutil.md#usageanalyze)
* [usageAnalyzeAgainst](loadedi18nutil.md#usageanalyzeagainst)
* [usageValidate](loadedi18nutil.md#usagevalidate)
* [usageValidateAgainst](loadedi18nutil.md#usagevalidateagainst)
* [validate](loadedi18nutil.md#validate)
* [validateAgainst](loadedi18nutil.md#validateagainst)
* [write](loadedi18nutil.md#write)
* [fromFiles](loadedi18nutil.md#static-fromfiles)
* [fromObjects](loadedi18nutil.md#static-fromobjects)
* [locale](loadedi18nutil.md#static-locale)
* [locales](loadedi18nutil.md#static-locales)
* [master](loadedi18nutil.md#static-master)
* [missingItems](loadedi18nutil.md#static-missingitems)
* [missingLocales](loadedi18nutil.md#static-missinglocales)
* [stats](loadedi18nutil.md#static-stats)
* [toObject](loadedi18nutil.md#static-toobject)
* [usageAnalyze](loadedi18nutil.md#static-usageanalyze)
* [usageValidate](loadedi18nutil.md#static-usagevalidate)

## Constructors

###  constructor

\+ **new LoadedI18nUtil**(`__namedParameters`: object): *[LoadedI18nUtil](loadedi18nutil.md)*

*Overrides [LoadedItemProcessor](loadeditemprocessor.md).[constructor](loadeditemprocessor.md#constructor)*

*Defined in [src/lib/i18n-util/index.ts:541](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L541)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`i18nUtil` | undefined &#124; [I18nUtil](../README.md#abstract-i18nutil)‹› |
`options` | options |

**Returns:** *[LoadedI18nUtil](loadedi18nutil.md)*

## Properties

###  adaptors

• **adaptors**: *[Collection](../README.md#collection)*

*Inherited from [Base](base.md).[adaptors](base.md#adaptors)*

*Overrides [Base](base.md).[adaptors](base.md#adaptors)*

*Defined in [src/lib/i18n-util/base.ts:24](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L24)*

___

###  i18nUtil

• **i18nUtil**: *[I18nUtil](../README.md#abstract-i18nutil)*

*Overrides [LoadedBase](loadedbase.md).[i18nUtil](loadedbase.md#i18nutil)*

*Defined in [src/lib/i18n-util/index.ts:541](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L541)*

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

###  addLocale

▸ **addLocale**(`locale`: string, `options?`: [AddLocaleOptions](../README.md#addlocaleoptions)‹[DefItem](../README.md#defitem)›): *Promise‹[Item](../README.md#item)‹›[]›*

*Defined in [src/lib/i18n-util/index.ts:582](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L582)*

**Parameters:**

Name | Type |
------ | ------ |
`locale` | string |
`options?` | [AddLocaleOptions](../README.md#addlocaleoptions)‹[DefItem](../README.md#defitem)› |

**Returns:** *Promise‹[Item](../README.md#item)‹›[]›*

___

###  addLocales

▸ **addLocales**(`locales`: string[], `options?`: [AddLocaleOptions](../README.md#addlocaleoptions)‹[DefItem](../README.md#defitem)›): *Promise‹[Item](../README.md#item)‹›[]›*

*Defined in [src/lib/i18n-util/index.ts:586](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L586)*

**Parameters:**

Name | Type |
------ | ------ |
`locales` | string[] |
`options?` | [AddLocaleOptions](../README.md#addlocaleoptions)‹[DefItem](../README.md#defitem)› |

**Returns:** *Promise‹[Item](../README.md#item)‹›[]›*

___

###  clearLocale

▸ **clearLocale**(`locale`: string, `options?`: [ClearLocaleOptions](../README.md#clearlocaleoptions)): *Promise‹[Item](../README.md#item)‹›[]›*

*Defined in [src/lib/i18n-util/index.ts:620](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L620)*

**Parameters:**

Name | Type |
------ | ------ |
`locale` | string |
`options?` | [ClearLocaleOptions](../README.md#clearlocaleoptions) |

**Returns:** *Promise‹[Item](../README.md#item)‹›[]›*

___

###  clearLocales

▸ **clearLocales**(`locales`: string[], `options?`: [ClearLocaleOptions](../README.md#clearlocaleoptions)): *Promise‹[Item](../README.md#item)‹›[]›*

*Defined in [src/lib/i18n-util/index.ts:624](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L624)*

**Parameters:**

Name | Type |
------ | ------ |
`locales` | string[] |
`options?` | [ClearLocaleOptions](../README.md#clearlocaleoptions) |

**Returns:** *Promise‹[Item](../README.md#item)‹›[]›*

___

###  definitions

▸ **definitions**(): *[Item](../README.md#item)‹›[]*

*Defined in [src/lib/i18n-util/index.ts:548](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L548)*

**Returns:** *[Item](../README.md#item)‹›[]*

___

###  drop

▸ **drop**(`options`: [DropOptions](../README.md#dropoptions)): *any*

*Defined in [src/lib/i18n-util/index.ts:560](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L560)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [DropOptions](../README.md#dropoptions) | {} |

**Returns:** *any*

___

###  dropFrom

▸ **dropFrom**(`options`: [DropOptions](../README.md#dropoptions)): *[DefinitionLoader](../README.md#abstract-definitionloader)‹[I18nUtil](../README.md#abstract-i18nutil)‹›, any›*

*Defined in [src/lib/i18n-util/index.ts:567](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L567)*

Remove definitions from definitions loaded from elsewhere.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [DropOptions](../README.md#dropoptions) | {} |

**Returns:** *[DefinitionLoader](../README.md#abstract-definitionloader)‹[I18nUtil](../README.md#abstract-i18nutil)‹›, any›*

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

*Inherited from [LoadedItemProcessor](loadeditemprocessor.md).[locale](loadeditemprocessor.md#locale)*

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

*Inherited from [LoadedItemProcessor](loadeditemprocessor.md).[locales](loadeditemprocessor.md#locales)*

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

*Inherited from [LoadedItemProcessor](loadeditemprocessor.md).[master](loadeditemprocessor.md#master)*

*Defined in [src/lib/i18n-util/item-processor.ts:349](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L349)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [MasterOptions](../README.md#masteroptions) | {} |

**Returns:** *[Item](../README.md#item)‹›[]*

___

###  missingItems

▸ **missingItems**(`options`: [MissingItemsOptions](../README.md#missingitemsoptions)): *[Item](../README.md#item)‹›[]*

*Inherited from [LoadedItemProcessor](loadeditemprocessor.md).[missingItems](loadeditemprocessor.md#missingitems)*

*Defined in [src/lib/i18n-util/item-processor.ts:368](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L368)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [MissingItemsOptions](../README.md#missingitemsoptions) | {} |

**Returns:** *[Item](../README.md#item)‹›[]*

___

###  missingLocales

▸ **missingLocales**(`options`: [MissingLocalesOptions](../README.md#missinglocalesoptions)): *string[]*

*Inherited from [LoadedItemProcessor](loadeditemprocessor.md).[missingLocales](loadeditemprocessor.md#missinglocales)*

*Defined in [src/lib/i18n-util/item-processor.ts:372](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L372)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [MissingLocalesOptions](../README.md#missinglocalesoptions) | {} |

**Returns:** *string[]*

___

###  patch

▸ **patch**(`options`: [PatchOptions](../README.md#patchoptions)‹[DefItem](../README.md#defitem)›): *any*

*Defined in [src/lib/i18n-util/index.ts:571](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L571)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [PatchOptions](../README.md#patchoptions)‹[DefItem](../README.md#defitem)› | {} |

**Returns:** *any*

___

###  patchTo

▸ **patchTo**(`options`: [PatchOptions](../README.md#patchoptions)‹[DefItem](../README.md#defitem)›): *[DefinitionLoader](../README.md#abstract-definitionloader)‹[I18nUtil](../README.md#abstract-i18nutil)‹›, any›*

*Defined in [src/lib/i18n-util/index.ts:578](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L578)*

Update definitions loaded from elsewhere with values from definitions.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [PatchOptions](../README.md#patchoptions)‹[DefItem](../README.md#defitem)› | {} |

**Returns:** *[DefinitionLoader](../README.md#abstract-definitionloader)‹[I18nUtil](../README.md#abstract-i18nutil)‹›, any›*

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

###  removeLocale

▸ **removeLocale**(`locale`: string, `options?`: [RemoveLocaleOptions](../README.md#removelocaleoptions)): *Promise‹[Item](../README.md#item)‹›[]›*

*Defined in [src/lib/i18n-util/index.ts:599](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L599)*

**Parameters:**

Name | Type |
------ | ------ |
`locale` | string |
`options?` | [RemoveLocaleOptions](../README.md#removelocaleoptions) |

**Returns:** *Promise‹[Item](../README.md#item)‹›[]›*

___

###  removeLocales

▸ **removeLocales**(`locales`: string[], `options?`: [RemoveLocaleOptions](../README.md#removelocaleoptions)): *Promise‹[Item](../README.md#item)‹›[]›*

*Defined in [src/lib/i18n-util/index.ts:603](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L603)*

**Parameters:**

Name | Type |
------ | ------ |
`locales` | string[] |
`options?` | [RemoveLocaleOptions](../README.md#removelocaleoptions) |

**Returns:** *Promise‹[Item](../README.md#item)‹›[]›*

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

###  schema

▸ **schema**(`options?`: [SchemaOptions](../README.md#schemaoptions)): *any*

*Defined in [src/lib/i18n-util/index.ts:639](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L639)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [SchemaOptions](../README.md#schemaoptions) |

**Returns:** *any*

___

###  stats

▸ **stats**(`usage`: [UseItemArrayLike](../README.md#useitemarraylike), `options`: [StatsOptions](../README.md#statsoptions)): *[KeyStats](keystats.md)‹›*

*Inherited from [LoadedItemProcessor](loadeditemprocessor.md).[stats](loadeditemprocessor.md#stats)*

*Defined in [src/lib/i18n-util/item-processor.ts:390](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L390)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`usage` | [UseItemArrayLike](../README.md#useitemarraylike) | - |
`options` | [StatsOptions](../README.md#statsoptions) | {} |

**Returns:** *[KeyStats](keystats.md)‹›*

___

###  statsAgainst

▸ **statsAgainst**(`options`: [StatsOptions](../README.md#statsoptions)): *[UsageLoader](../README.md#abstract-usageloader)‹[I18nUtil](../README.md#abstract-i18nutil)‹›, [KeyStats](../README.md#abstract-keystats)‹››*

*Defined in [src/lib/i18n-util/index.ts:643](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L643)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [StatsOptions](../README.md#statsoptions) | {} |

**Returns:** *[UsageLoader](../README.md#abstract-usageloader)‹[I18nUtil](../README.md#abstract-i18nutil)‹›, [KeyStats](../README.md#abstract-keystats)‹››*

___

###  toObject

▸ **toObject**<**O**>(`options`: O)

*Inherited from [LoadedItemProcessor](loadeditemprocessor.md).[toObject](loadeditemprocessor.md#toobject)*

*Defined in [src/lib/i18n-util/item-processor.ts:361](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L361)*

**Type parameters:**

▪ **O**: *[ToObjectOptions](../README.md#toobjectoptions)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | O | {} as O |

___

###  usage

▸ **usage**(`paths`: string[], `options?`: [UsageOptions](../README.md#usageoptions)): *[Item](../README.md#item)‹›[] | Promise‹[Item](../README.md#item)‹›[]›*

*Defined in [src/lib/i18n-util/index.ts:552](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L552)*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | string[] |
`options?` | [UsageOptions](../README.md#usageoptions) |

**Returns:** *[Item](../README.md#item)‹›[] | Promise‹[Item](../README.md#item)‹›[]›*

___

###  usageAnalyze

▸ **usageAnalyze**(`usage`: [UseItemArrayLike](../README.md#useitemarraylike), `options?`: [UsageAnalyzeOptions](../README.md#usageanalyzeoptions)): *object | Promise‹object›*

*Inherited from [LoadedItemProcessor](loadeditemprocessor.md).[usageAnalyze](loadeditemprocessor.md#usageanalyze)*

*Defined in [src/lib/i18n-util/item-processor.ts:376](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L376)*

**Parameters:**

Name | Type |
------ | ------ |
`usage` | [UseItemArrayLike](../README.md#useitemarraylike) |
`options?` | [UsageAnalyzeOptions](../README.md#usageanalyzeoptions) |

**Returns:** *object | Promise‹object›*

___

###  usageAnalyzeAgainst

▸ **usageAnalyzeAgainst**(`options`: [UsageAnalyzeOptions](../README.md#usageanalyzeoptions)): *[UsageLoader](../README.md#abstract-usageloader)‹[I18nUtil](../README.md#abstract-i18nutil)‹›, object | Promise‹object››*

*Defined in [src/lib/i18n-util/index.ts:662](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L662)*

Update definitions loaded from elsewhere with values from definitions.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [UsageAnalyzeOptions](../README.md#usageanalyzeoptions) | {} |

**Returns:** *[UsageLoader](../README.md#abstract-usageloader)‹[I18nUtil](../README.md#abstract-i18nutil)‹›, object | Promise‹object››*

___

###  usageValidate

▸ **usageValidate**(`usage`: [UseItemArrayLike](../README.md#useitemarraylike), `options?`: [UsageValidateOptions](../README.md#usagevalidateoptions)): *void*

*Inherited from [LoadedItemProcessor](loadeditemprocessor.md).[usageValidate](loadeditemprocessor.md#usagevalidate)*

*Defined in [src/lib/i18n-util/item-processor.ts:383](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L383)*

**Parameters:**

Name | Type |
------ | ------ |
`usage` | [UseItemArrayLike](../README.md#useitemarraylike) |
`options?` | [UsageValidateOptions](../README.md#usagevalidateoptions) |

**Returns:** *void*

___

###  usageValidateAgainst

▸ **usageValidateAgainst**(`options`: [UsageValidateOptions](../README.md#usagevalidateoptions)): *[UsageLoader](../README.md#abstract-usageloader)‹[I18nUtil](../README.md#abstract-i18nutil)‹›, void›*

*Defined in [src/lib/i18n-util/index.ts:666](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L666)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [UsageValidateOptions](../README.md#usagevalidateoptions) | {} |

**Returns:** *[UsageLoader](../README.md#abstract-usageloader)‹[I18nUtil](../README.md#abstract-i18nutil)‹›, void›*

___

###  validate

▸ **validate**(`schema`: [AnyObj](../README.md#anyobj), `options?`: [ValidateOptions](../README.md#validateoptions)): *void*

*Defined in [src/lib/i18n-util/index.ts:647](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L647)*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | [AnyObj](../README.md#anyobj) |
`options?` | [ValidateOptions](../README.md#validateoptions) |

**Returns:** *void*

___

###  validateAgainst

▸ **validateAgainst**(`options`: [ValidateAgainstOptions](../README.md#validateagainstoptions)): *[DefinitionLoader](../README.md#abstract-definitionloader)‹[I18nUtil](../README.md#abstract-i18nutil)‹›, void› | [UsageLoader](../README.md#abstract-usageloader)‹[I18nUtil](../README.md#abstract-i18nutil)‹›, void›*

*Defined in [src/lib/i18n-util/index.ts:655](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L655)*

Validate definitions against schema created from definitions loaded from
elsewhere.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [ValidateAgainstOptions](../README.md#validateagainstoptions) | {} |

**Returns:** *[DefinitionLoader](../README.md#abstract-definitionloader)‹[I18nUtil](../README.md#abstract-i18nutil)‹›, void› | [UsageLoader](../README.md#abstract-usageloader)‹[I18nUtil](../README.md#abstract-i18nutil)‹›, void›*

___

###  write

▸ **write**(`options`: [WriteOptions](../README.md#writeoptions)): *any*

*Defined in [src/lib/i18n-util/index.ts:556](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L556)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [WriteOptions](../README.md#writeoptions) | {} |

**Returns:** *any*

___

### `Static` fromFiles

▸ **fromFiles**(`paths`: any[], `options`: [DefinitionOptions](../README.md#definitionoptions) & [ResolvePathsOptions](../README.md#resolvepathsoptions) & [LoadedCtorOptions](../README.md#loadedctoroptions)): *Promise‹[LoadedI18nUtil](loadedi18nutil.md)‹››*

*Defined in [src/lib/i18n-util/index.ts:670](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L670)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`paths` | any[] | - |
`options` | [DefinitionOptions](../README.md#definitionoptions) & [ResolvePathsOptions](../README.md#resolvepathsoptions) & [LoadedCtorOptions](../README.md#loadedctoroptions) | {} |

**Returns:** *Promise‹[LoadedI18nUtil](loadedi18nutil.md)‹››*

___

### `Static` fromObjects

▸ **fromObjects**(`paths`: any[], `options`: [FromObjectOptions](../README.md#fromobjectoptions)‹[DefItem](../README.md#defitem)› & [LoadedCtorOptions](../README.md#loadedctoroptions)): *Promise‹[LoadedI18nUtil](loadedi18nutil.md)‹››*

*Defined in [src/lib/i18n-util/index.ts:685](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L685)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`paths` | any[] | - |
`options` | [FromObjectOptions](../README.md#fromobjectoptions)‹[DefItem](../README.md#defitem)› & [LoadedCtorOptions](../README.md#loadedctoroptions) | {} |

**Returns:** *Promise‹[LoadedI18nUtil](loadedi18nutil.md)‹››*

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
