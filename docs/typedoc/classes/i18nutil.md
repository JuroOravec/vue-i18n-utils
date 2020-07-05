[i18n-util](../README.md) › [I18nUtil](i18nutil.md)

# Class: I18nUtil

## Hierarchy

  ↳ [ItemProcessor](itemprocessor.md)

  ↳ **I18nUtil**

## Implements

* [Base](../README.md#abstract-base)
* [Base](../README.md#abstract-base)
* [ItemProcessor](../README.md#abstract-itemprocessor)
* [I18nUtil](../README.md#abstract-i18nutil)

## Index

### Properties

* [adaptors](i18nutil.md#adaptors)
* [constructor](i18nutil.md#constructor)
* [keyResolver](i18nutil.md#keyresolver)
* [localeResolver](i18nutil.md#localeresolver)
* [options](i18nutil.md#options)
* [pathResolver](i18nutil.md#pathresolver)
* [schemator](i18nutil.md#schemator)
* [validator](i18nutil.md#validator)
* [valueResolver](i18nutil.md#valueresolver)

### Methods

* [_remove](i18nutil.md#private-_remove)
* [_write](i18nutil.md#private-_write)
* [addAdaptor](i18nutil.md#addadaptor)
* [addAdaptors](i18nutil.md#addadaptors)
* [addLocale](i18nutil.md#addlocale)
* [addLocales](i18nutil.md#addlocales)
* [clearLocale](i18nutil.md#clearlocale)
* [clearLocales](i18nutil.md#clearlocales)
* [definitions](i18nutil.md#definitions)
* [drop](i18nutil.md#drop)
* [dropFrom](i18nutil.md#dropfrom)
* [effectiveOptions](i18nutil.md#effectiveoptions)
* [locale](i18nutil.md#locale)
* [locales](i18nutil.md#locales)
* [master](i18nutil.md#master)
* [missingItems](i18nutil.md#missingitems)
* [missingLocales](i18nutil.md#missinglocales)
* [patch](i18nutil.md#patch)
* [patchTo](i18nutil.md#patchto)
* [removeAdaptor](i18nutil.md#removeadaptor)
* [removeAdaptors](i18nutil.md#removeadaptors)
* [removeLocale](i18nutil.md#removelocale)
* [removeLocales](i18nutil.md#removelocales)
* [resolveKeys](i18nutil.md#resolvekeys)
* [resolveLocales](i18nutil.md#resolvelocales)
* [resolvePaths](i18nutil.md#resolvepaths)
* [resolveValues](i18nutil.md#resolvevalues)
* [schema](i18nutil.md#schema)
* [stats](i18nutil.md#stats)
* [statsAgainst](i18nutil.md#statsagainst)
* [toObject](i18nutil.md#toobject)
* [usage](i18nutil.md#usage)
* [usageAnalyze](i18nutil.md#usageanalyze)
* [usageAnalyzeAgainst](i18nutil.md#usageanalyzeagainst)
* [usageValidate](i18nutil.md#usagevalidate)
* [usageValidateAgainst](i18nutil.md#usagevalidateagainst)
* [validate](i18nutil.md#validate)
* [validateAgainst](i18nutil.md#validateagainst)
* [write](i18nutil.md#write)
* [locale](i18nutil.md#static-locale)
* [locales](i18nutil.md#static-locales)
* [master](i18nutil.md#static-master)
* [missingItems](i18nutil.md#static-missingitems)
* [missingLocales](i18nutil.md#static-missinglocales)
* [stats](i18nutil.md#static-stats)
* [toObject](i18nutil.md#static-toobject)
* [usageAnalyze](i18nutil.md#static-usageanalyze)
* [usageValidate](i18nutil.md#static-usagevalidate)

## Properties

###  adaptors

• **adaptors**: *[Collection](../README.md#collection)*

*Inherited from [Base](base.md).[adaptors](base.md#adaptors)*

*Overrides [Base](base.md).[adaptors](base.md#adaptors)*

*Defined in [src/lib/i18n-util/base.ts:24](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L24)*

___

###  constructor

• **constructor**: *typeof ItemProcessorMixin*

*Inherited from [ItemProcessor](itemprocessor.md).[constructor](itemprocessor.md#constructor)*

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

### `Private` _remove

▸ **_remove**(`removeEntries`: object[], `options`: [DropOptions](../README.md#dropoptions)): *Promise‹void[]›*

*Defined in [src/lib/i18n-util/index.ts:140](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L140)*

Common pathway for removing files using a particular adaptor

**Parameters:**

Name | Type |
------ | ------ |
`removeEntries` | object[] |
`options` | [DropOptions](../README.md#dropoptions) |

**Returns:** *Promise‹void[]›*

___

### `Private` _write

▸ **_write**(`writeEntries`: object[], `options`: [WriteOptions](../README.md#writeoptions)): *Promise‹void[]›*

*Defined in [src/lib/i18n-util/index.ts:109](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L109)*

Common pathway for writing DefinitionItems using a particular adaptor

**Parameters:**

Name | Type |
------ | ------ |
`writeEntries` | object[] |
`options` | [WriteOptions](../README.md#writeoptions) |

**Returns:** *Promise‹void[]›*

___

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

▸ **addLocale**(`definitions`: [DefItemArrayLike](../README.md#defitemarraylike), `locale`: any, `options`: [AddLocaleOptions](../README.md#addlocaleoptions)‹[DefItem](../README.md#defitem)›): *Promise‹[Item](../README.md#item)‹›[]›*

*Defined in [src/lib/i18n-util/index.ts:313](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L313)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`definitions` | [DefItemArrayLike](../README.md#defitemarraylike) | - |
`locale` | any | - |
`options` | [AddLocaleOptions](../README.md#addlocaleoptions)‹[DefItem](../README.md#defitem)› | {} |

**Returns:** *Promise‹[Item](../README.md#item)‹›[]›*

___

###  addLocales

▸ **addLocales**(`definitions`: [DefItemArrayLike](../README.md#defitemarraylike), `locales`: any[], `options`: [AddLocaleOptions](../README.md#addlocaleoptions)‹[DefItem](../README.md#defitem)›): *Promise‹[Item](../README.md#item)‹›[]›*

*Defined in [src/lib/i18n-util/index.ts:321](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L321)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`definitions` | [DefItemArrayLike](../README.md#defitemarraylike) | - |
`locales` | any[] | - |
`options` | [AddLocaleOptions](../README.md#addlocaleoptions)‹[DefItem](../README.md#defitem)› | {} |

**Returns:** *Promise‹[Item](../README.md#item)‹›[]›*

___

###  clearLocale

▸ **clearLocale**(`definitions`: [DefItemArrayLike](../README.md#defitemarraylike), `locale`: any, `options`: [ClearLocaleOptions](../README.md#clearlocaleoptions)): *Promise‹[Item](../README.md#item)‹›[]›*

*Defined in [src/lib/i18n-util/index.ts:388](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L388)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`definitions` | [DefItemArrayLike](../README.md#defitemarraylike) | - |
`locale` | any | - |
`options` | [ClearLocaleOptions](../README.md#clearlocaleoptions) | {} |

**Returns:** *Promise‹[Item](../README.md#item)‹›[]›*

___

###  clearLocales

▸ **clearLocales**(`definitions`: [DefItemArrayLike](../README.md#defitemarraylike), `locales`: any[], `options`: [ClearLocaleOptions](../README.md#clearlocaleoptions)): *Promise‹[Item](../README.md#item)‹›[]›*

*Defined in [src/lib/i18n-util/index.ts:396](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L396)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`definitions` | [DefItemArrayLike](../README.md#defitemarraylike) | - |
`locales` | any[] | - |
`options` | [ClearLocaleOptions](../README.md#clearlocaleoptions) | {} |

**Returns:** *Promise‹[Item](../README.md#item)‹›[]›*

___

###  definitions

▸ **definitions**(`paths`: string[], `options`: [DefinitionOptions](../README.md#definitionoptions)): *Promise‹[Item](../README.md#item)‹›[]›*

*Defined in [src/lib/i18n-util/index.ts:26](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L26)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`paths` | string[] | - |
`options` | [DefinitionOptions](../README.md#definitionoptions) | {} |

**Returns:** *Promise‹[Item](../README.md#item)‹›[]›*

___

###  drop

▸ **drop**(`definitions`: [DefItemArrayLike](../README.md#defitemarraylike), `options`: [DropOptions](../README.md#dropoptions)): *Promise‹void[]›*

*Defined in [src/lib/i18n-util/index.ts:234](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L234)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`definitions` | [DefItemArrayLike](../README.md#defitemarraylike) | - |
`options` | [DropOptions](../README.md#dropoptions) | {} |

**Returns:** *Promise‹void[]›*

___

###  dropFrom

▸ **dropFrom**(`definitions`: [DefItemArrayLike](../README.md#defitemarraylike), `options`: [DropOptions](../README.md#dropoptions)): *[DefinitionLoader](definitionloader.md)‹[I18nUtil](../README.md#abstract-i18nutil)‹›, any›*

*Defined in [src/lib/i18n-util/index.ts:291](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L291)*

Remove the keys with same combination of locale/key as in `definitions`
from definitions loaded from elsewhere.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`definitions` | [DefItemArrayLike](../README.md#defitemarraylike) | - |
`options` | [DropOptions](../README.md#dropoptions) | {} |

**Returns:** *[DefinitionLoader](definitionloader.md)‹[I18nUtil](../README.md#abstract-i18nutil)‹›, any›*

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

*Inherited from [ItemProcessor](itemprocessor.md).[locale](itemprocessor.md#locale)*

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

*Inherited from [ItemProcessor](itemprocessor.md).[locales](itemprocessor.md#locales)*

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

*Inherited from [ItemProcessor](itemprocessor.md).[master](itemprocessor.md#master)*

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

*Inherited from [ItemProcessor](itemprocessor.md).[missingItems](itemprocessor.md#missingitems)*

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

*Inherited from [ItemProcessor](itemprocessor.md).[missingLocales](itemprocessor.md#missinglocales)*

*Defined in [src/lib/i18n-util/item-processor.ts:292](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L292)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`definitions` | [DefItemArrayLike](../README.md#defitemarraylike) | - |
`options` | [MissingLocalesOptions](../README.md#missinglocalesoptions) | {} |

**Returns:** *string[]*

___

###  patch

▸ **patch**(`definitions`: [DefItemArrayLike](../README.md#defitemarraylike), `options`: [PatchOptions](../README.md#patchoptions)‹[DefItem](../README.md#defitem)›): *Promise‹void[]›*

*Defined in [src/lib/i18n-util/index.ts:167](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L167)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`definitions` | [DefItemArrayLike](../README.md#defitemarraylike) | - |
`options` | [PatchOptions](../README.md#patchoptions)‹[DefItem](../README.md#defitem)› | {} |

**Returns:** *Promise‹void[]›*

___

###  patchTo

▸ **patchTo**(`definitions`: [DefItemArrayLike](../README.md#defitemarraylike), `options`: [PatchToOptions](../README.md#patchtooptions)‹[DefItem](../README.md#defitem)›): *[DefinitionLoader](definitionloader.md)‹[I18nUtil](../README.md#abstract-i18nutil)‹›, any›*

*Defined in [src/lib/i18n-util/index.ts:205](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L205)*

Update definitions loaded from elsewhere with values from definitions.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`definitions` | [DefItemArrayLike](../README.md#defitemarraylike) | - |
`options` | [PatchToOptions](../README.md#patchtooptions)‹[DefItem](../README.md#defitem)› | {} |

**Returns:** *[DefinitionLoader](definitionloader.md)‹[I18nUtil](../README.md#abstract-i18nutil)‹›, any›*

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

▸ **removeLocale**(`definitions`: [DefItemArrayLike](../README.md#defitemarraylike), `locale`: any, `options`: [RemoveLocaleOptions](../README.md#removelocaleoptions)): *Promise‹[Item](../README.md#item)‹›[]›*

*Defined in [src/lib/i18n-util/index.ts:357](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L357)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`definitions` | [DefItemArrayLike](../README.md#defitemarraylike) | - |
`locale` | any | - |
`options` | [RemoveLocaleOptions](../README.md#removelocaleoptions) | {} |

**Returns:** *Promise‹[Item](../README.md#item)‹›[]›*

___

###  removeLocales

▸ **removeLocales**(`definitions`: [DefItemArrayLike](../README.md#defitemarraylike), `locales`: any[], `options`: [RemoveLocaleOptions](../README.md#removelocaleoptions)): *Promise‹[Item](../README.md#item)‹›[]›*

*Defined in [src/lib/i18n-util/index.ts:365](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L365)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`definitions` | [DefItemArrayLike](../README.md#defitemarraylike) | - |
`locales` | any[] | - |
`options` | [RemoveLocaleOptions](../README.md#removelocaleoptions) | {} |

**Returns:** *Promise‹[Item](../README.md#item)‹›[]›*

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

###  schema

▸ **schema**(`items`: [ItemArrayLike](../README.md#itemarraylike), `options`: [SchemaOptions](../README.md#schemaoptions)): *Promise‹any›*

*Defined in [src/lib/i18n-util/index.ts:422](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L422)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`items` | [ItemArrayLike](../README.md#itemarraylike) | - |
`options` | [SchemaOptions](../README.md#schemaoptions) | {} |

**Returns:** *Promise‹any›*

___

###  stats

▸ **stats**(`definitions`: [DefItemArrayLike](../README.md#defitemarraylike), `usage`: [UseItemArrayLike](../README.md#useitemarraylike), `options`: [StatsOptions](../README.md#statsoptions)): *[KeyStats](keystats.md)‹›*

*Inherited from [ItemProcessor](itemprocessor.md).[stats](itemprocessor.md#stats)*

*Defined in [src/lib/i18n-util/item-processor.ts:318](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L318)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`definitions` | [DefItemArrayLike](../README.md#defitemarraylike) | - |
`usage` | [UseItemArrayLike](../README.md#useitemarraylike) | - |
`options` | [StatsOptions](../README.md#statsoptions) | {} |

**Returns:** *[KeyStats](keystats.md)‹›*

___

###  statsAgainst

▸ **statsAgainst**(`definitions`: [DefItemArrayLike](../README.md#defitemarraylike), `options`: [StatsOptions](../README.md#statsoptions)): *[UsageLoader](usageloader.md)‹[I18nUtil](../README.md#abstract-i18nutil)‹›, [KeyStats](../README.md#abstract-keystats)‹››*

*Defined in [src/lib/i18n-util/index.ts:447](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L447)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`definitions` | [DefItemArrayLike](../README.md#defitemarraylike) | - |
`options` | [StatsOptions](../README.md#statsoptions) | {} |

**Returns:** *[UsageLoader](usageloader.md)‹[I18nUtil](../README.md#abstract-i18nutil)‹›, [KeyStats](../README.md#abstract-keystats)‹››*

___

###  toObject

▸ **toObject**<**O**>(`items`: [ItemArrayLike](../README.md#itemarraylike), `options`: O): *[ToObjectResult](../README.md#toobjectresult)‹O["simple"], O["merge"]›*

*Inherited from [ItemProcessor](itemprocessor.md).[toObject](itemprocessor.md#toobject)*

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

###  usage

▸ **usage**(`paths`: string[], `options`: [UsageOptions](../README.md#usageoptions)): *Promise‹[Item](../README.md#item)‹›[]›*

*Defined in [src/lib/i18n-util/index.ts:58](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L58)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`paths` | string[] | - |
`options` | [UsageOptions](../README.md#usageoptions) | {} |

**Returns:** *Promise‹[Item](../README.md#item)‹›[]›*

___

###  usageAnalyze

▸ **usageAnalyze**(`definitions`: [DefItemArrayLike](../README.md#defitemarraylike), `usage`: [UseItemArrayLike](../README.md#useitemarraylike), `options`: [UsageAnalyzeOptions](../README.md#usageanalyzeoptions)): *object*

*Inherited from [ItemProcessor](itemprocessor.md).[usageAnalyze](itemprocessor.md#usageanalyze)*

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

###  usageAnalyzeAgainst

▸ **usageAnalyzeAgainst**(`definitions`: [DefItemArrayLike](../README.md#defitemarraylike), `options`: [UsageAnalyzeOptions](../README.md#usageanalyzeoptions)): *[UsageLoader](usageloader.md)‹[I18nUtil](../README.md#abstract-i18nutil)‹›, object | Promise‹object››*

*Defined in [src/lib/i18n-util/index.ts:512](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L512)*

Update definitions loaded from elsewhere with values from definitions.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`definitions` | [DefItemArrayLike](../README.md#defitemarraylike) | - |
`options` | [UsageAnalyzeOptions](../README.md#usageanalyzeoptions) | {} |

**Returns:** *[UsageLoader](usageloader.md)‹[I18nUtil](../README.md#abstract-i18nutil)‹›, object | Promise‹object››*

___

###  usageValidate

▸ **usageValidate**(`definitions`: [DefItemArrayLike](../README.md#defitemarraylike), `usage`: [UseItemArrayLike](../README.md#useitemarraylike), `options`: [UsageValidateOptions](../README.md#usagevalidateoptions)): *void*

*Inherited from [ItemProcessor](itemprocessor.md).[usageValidate](itemprocessor.md#usagevalidate)*

*Defined in [src/lib/i18n-util/item-processor.ts:309](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L309)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`definitions` | [DefItemArrayLike](../README.md#defitemarraylike) | - |
`usage` | [UseItemArrayLike](../README.md#useitemarraylike) | - |
`options` | [UsageValidateOptions](../README.md#usagevalidateoptions) | {} |

**Returns:** *void*

___

###  usageValidateAgainst

▸ **usageValidateAgainst**(`definitions`: [DefItemArrayLike](../README.md#defitemarraylike), `options`: [UsageValidateOptions](../README.md#usagevalidateoptions)): *[UsageLoader](usageloader.md)‹[I18nUtil](../README.md#abstract-i18nutil)‹›, void›*

*Defined in [src/lib/i18n-util/index.ts:525](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L525)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`definitions` | [DefItemArrayLike](../README.md#defitemarraylike) | - |
`options` | [UsageValidateOptions](../README.md#usagevalidateoptions) | {} |

**Returns:** *[UsageLoader](usageloader.md)‹[I18nUtil](../README.md#abstract-i18nutil)‹›, void›*

___

###  validate

▸ **validate**(`items`: [ItemArrayLike](../README.md#itemarraylike), `schema`: [AnyObj](../README.md#anyobj), `options`: [ValidateOptions](../README.md#validateoptions)): *Promise‹any›*

*Defined in [src/lib/i18n-util/index.ts:460](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L460)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`items` | [ItemArrayLike](../README.md#itemarraylike) | - |
`schema` | [AnyObj](../README.md#anyobj) | - |
`options` | [ValidateOptions](../README.md#validateoptions) | {} |

**Returns:** *Promise‹any›*

___

###  validateAgainst

▸ **validateAgainst**(`items`: [ItemArrayLike](../README.md#itemarraylike), `options`: [ValidateAgainstOptions](../README.md#validateagainstoptions)): *[DefinitionLoader](definitionloader.md)‹[I18nUtil](../README.md#abstract-i18nutil)‹›, void› | [UsageLoader](usageloader.md)‹[I18nUtil](../README.md#abstract-i18nutil)‹›, void›*

*Defined in [src/lib/i18n-util/index.ts:487](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L487)*

Validate items against schema created from items loaded from
elsewhere

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`items` | [ItemArrayLike](../README.md#itemarraylike) | - |
`options` | [ValidateAgainstOptions](../README.md#validateagainstoptions) | {} |

**Returns:** *[DefinitionLoader](definitionloader.md)‹[I18nUtil](../README.md#abstract-i18nutil)‹›, void› | [UsageLoader](usageloader.md)‹[I18nUtil](../README.md#abstract-i18nutil)‹›, void›*

___

###  write

▸ **write**(`definitions`: [DefItemArrayLike](../README.md#defitemarraylike), `options`: [WriteOptions](../README.md#writeoptions)): *Promise‹void[]›*

*Defined in [src/lib/i18n-util/index.ts:93](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L93)*

Overwrites file to contain only those entries that are given.

This is similar to patch, but patch only updates the specific entry
and keeps the rest. This discards the rest.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`definitions` | [DefItemArrayLike](../README.md#defitemarraylike) | - |
`options` | [WriteOptions](../README.md#writeoptions) | {} |

**Returns:** *Promise‹void[]›*

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
