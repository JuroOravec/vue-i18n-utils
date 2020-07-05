[i18n-util](../README.md) › [ItemProcessorMixin](itemprocessormixin.md)

# Class: ItemProcessorMixin

Mixin class of the ItemProcessor classes implementing static methods common
to all classes.

## Hierarchy

* **ItemProcessorMixin**

  ↳ [ItemProcessor](itemprocessor.md)

  ↳ [LoadedItemProcessor](loadeditemprocessor.md)

## Index

### Methods

* [locale](itemprocessormixin.md#static-locale)
* [locales](itemprocessormixin.md#static-locales)
* [master](itemprocessormixin.md#static-master)
* [missingItems](itemprocessormixin.md#static-missingitems)
* [missingLocales](itemprocessormixin.md#static-missinglocales)
* [stats](itemprocessormixin.md#static-stats)
* [toObject](itemprocessormixin.md#static-toobject)
* [usageAnalyze](itemprocessormixin.md#static-usageanalyze)
* [usageValidate](itemprocessormixin.md#static-usagevalidate)

## Methods

### `Static` locale

▸ **locale**(`items`: [ItemArrayLike](../README.md#itemarraylike), `locale`: string, `options`: [LocaleOptions](../README.md#localeoptions)): *[Item](../README.md#item)‹›[]*

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

*Defined in [src/lib/i18n-util/item-processor.ts:206](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L206)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`definitions` | [DefItemArrayLike](../README.md#defitemarraylike) | - |
`usage` | [UseItemArrayLike](../README.md#useitemarraylike) | - |
`options` | [UsageValidateOptions](../README.md#usagevalidateoptions) | {} |

**Returns:** *void*
