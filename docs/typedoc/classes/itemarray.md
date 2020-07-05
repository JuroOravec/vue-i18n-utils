[i18n-util](../README.md) › [ItemArray](itemarray.md)

# Class: ItemArray <**T**>

Container class for holding and manipulating a list of items.

## Type parameters

▪ **T**: *[Item](../README.md#item)*

## Hierarchy

* **ItemArray**

  ↳ [DefinitionArray](definitionarray.md)

## Implements

* [ItemArray](../README.md#itemarray)‹T›

## Index

### Constructors

* [constructor](itemarray.md#constructor)

### Properties

* [items](itemarray.md#items)

### Accessors

* [length](itemarray.md#length)
* [defaults](itemarray.md#static-defaults)

### Methods

* [[Symbol.iterator]](itemarray.md#[symbol.iterator])
* [difference](itemarray.md#difference)
* [duplicates](itemarray.md#duplicates)
* [filterBy](itemarray.md#filterby)
* [filterByLocale](itemarray.md#filterbylocale)
* [filterByLocales](itemarray.md#filterbylocales)
* [filterByPath](itemarray.md#filterbypath)
* [filterByPaths](itemarray.md#filterbypaths)
* [filterByValue](itemarray.md#filterbyvalue)
* [filterByValues](itemarray.md#filterbyvalues)
* [filterMissing](itemarray.md#filtermissing)
* [intersection](itemarray.md#intersection)
* [itemsByLocale](itemarray.md#itemsbylocale)
* [itemsByLocales](itemarray.md#itemsbylocales)
* [prop](itemarray.md#prop)
* [push](itemarray.md#push)
* [toJSON](itemarray.md#tojson)
* [toObject](itemarray.md#toobject)
* [union](itemarray.md#union)
* [uniqProp](itemarray.md#uniqprop)
* [update](itemarray.md#update)
* [updateBy](itemarray.md#updateby)
* [updateProp](itemarray.md#updateprop)
* [updateProps](itemarray.md#updateprops)
* [difference](itemarray.md#static-difference)
* [duplicates](itemarray.md#static-duplicates)
* [filterBy](itemarray.md#static-filterby)
* [filterByLocale](itemarray.md#static-filterbylocale)
* [filterByLocales](itemarray.md#static-filterbylocales)
* [filterByPath](itemarray.md#static-filterbypath)
* [filterByPaths](itemarray.md#static-filterbypaths)
* [filterByValue](itemarray.md#static-filterbyvalue)
* [filterByValues](itemarray.md#static-filterbyvalues)
* [filterMissing](itemarray.md#static-filtermissing)
* [fromObject](itemarray.md#static-fromobject)
* [fromObjects](itemarray.md#static-fromobjects)
* [intersection](itemarray.md#static-intersection)
* [itemsByLocale](itemarray.md#static-itemsbylocale)
* [itemsByLocales](itemarray.md#static-itemsbylocales)
* [prop](itemarray.md#static-prop)
* [toObject](itemarray.md#static-toobject)
* [union](itemarray.md#static-union)
* [uniqProp](itemarray.md#static-uniqprop)
* [update](itemarray.md#static-update)
* [updateBy](itemarray.md#static-updateby)
* [updateProp](itemarray.md#static-updateprop)
* [updateProps](itemarray.md#static-updateprops)

## Constructors

###  constructor

\+ **new ItemArray**(`items`: T[] | [ItemArray](../README.md#itemarray)‹T› | IterableIterator‹T›): *[ItemArray](itemarray.md)*

*Defined in [src/lib/item/index.ts:115](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L115)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`items` | T[] &#124; [ItemArray](../README.md#itemarray)‹T› &#124; IterableIterator‹T› | [] |

**Returns:** *[ItemArray](itemarray.md)*

## Properties

###  items

• **items**: *T[]* = []

*Implementation of [ItemArray](../README.md#itemarray).[items](../README.md#items)*

*Defined in [src/lib/item/index.ts:115](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L115)*

## Accessors

###  length

• **get length**(): *number*

*Defined in [src/lib/item/index.ts:129](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L129)*

**Returns:** *number*

___

### `Static` defaults

• **get defaults**(): *object*

*Defined in [src/lib/item/index.ts:764](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L764)*

**Returns:** *object*

* **includeMissing**: *boolean* = false

* **itemClass**: *[Item](item.md)* = Item

* **merge**: *boolean* = false

* **missingValue**: *null* = null

* **simple**: *boolean* = false

* **template**(): *object*

* **throwOnDuplicate**: *boolean* = true

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹T›*

*Defined in [src/lib/item/index.ts:121](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L121)*

**Returns:** *IterableIterator‹T›*

___

###  difference

▸ **difference**(`other`: [ItemArrayLike](../README.md#itemarraylike), `options`: [DifferenceOptions](../README.md#differenceoptions)): *[ItemArray](itemarray.md)‹T›*

*Defined in [src/lib/item/index.ts:159](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L159)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`other` | [ItemArrayLike](../README.md#itemarraylike) | - |
`options` | [DifferenceOptions](../README.md#differenceoptions) | {} |

**Returns:** *[ItemArray](itemarray.md)‹T›*

___

###  duplicates

▸ **duplicates**(`options`: object): *[ArrayMap](arraymap.md)‹number, T›*

*Defined in [src/lib/item/index.ts:548](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L548)*

**Parameters:**

▪`Default value`  **options**: *object*= {}

Name | Type |
------ | ------ |
`hashType?` | [HashType](../README.md#hashtype) |

**Returns:** *[ArrayMap](arraymap.md)‹number, T›*

___

###  filterBy

▸ **filterBy**(`callback`: function, `options?`: [FilterByOptions](../README.md#filterbyoptions)): *[ItemArray](itemarray.md)‹T›*

*Defined in [src/lib/item/index.ts:437](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L437)*

**Parameters:**

▪ **callback**: *function*

▸ (`item`: T): *boolean | void*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

▪`Optional`  **options**: *[FilterByOptions](../README.md#filterbyoptions)*

**Returns:** *[ItemArray](itemarray.md)‹T›*

___

###  filterByLocale

▸ **filterByLocale**(`locale`: string, `options?`: [FilterByLocaleOptions](../README.md#filterbylocaleoptions)): *[ItemArray](itemarray.md)‹T›*

*Defined in [src/lib/item/index.ts:483](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L483)*

**Parameters:**

Name | Type |
------ | ------ |
`locale` | string |
`options?` | [FilterByLocaleOptions](../README.md#filterbylocaleoptions) |

**Returns:** *[ItemArray](itemarray.md)‹T›*

___

###  filterByLocales

▸ **filterByLocales**(`locales`: string[], `options?`: [FilterByLocaleOptions](../README.md#filterbylocaleoptions)): *[ItemArray](itemarray.md)‹T›*

*Defined in [src/lib/item/index.ts:495](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L495)*

**Parameters:**

Name | Type |
------ | ------ |
`locales` | string[] |
`options?` | [FilterByLocaleOptions](../README.md#filterbylocaleoptions) |

**Returns:** *[ItemArray](itemarray.md)‹T›*

___

###  filterByPath

▸ **filterByPath**(`path`: T["path"], `options?`: [FilterByPathOptions](../README.md#filterbypathoptions)): *[ItemArray](itemarray.md)‹T›*

*Defined in [src/lib/item/index.ts:519](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L519)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | T["path"] |
`options?` | [FilterByPathOptions](../README.md#filterbypathoptions) |

**Returns:** *[ItemArray](itemarray.md)‹T›*

___

###  filterByPaths

▸ **filterByPaths**(`paths`: T["path"][], `options?`: [FilterByPathOptions](../README.md#filterbypathoptions)): *[ItemArray](itemarray.md)‹T›*

*Defined in [src/lib/item/index.ts:531](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L531)*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | T["path"][] |
`options?` | [FilterByPathOptions](../README.md#filterbypathoptions) |

**Returns:** *[ItemArray](itemarray.md)‹T›*

___

###  filterByValue

▸ **filterByValue**(`value`: any, `options?`: [FilterByValueOptions](../README.md#filterbyvalueoptions)): *[ItemArray](itemarray.md)‹T›*

*Defined in [src/lib/item/index.ts:459](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L459)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`options?` | [FilterByValueOptions](../README.md#filterbyvalueoptions) |

**Returns:** *[ItemArray](itemarray.md)‹T›*

___

###  filterByValues

▸ **filterByValues**(`values`: any[], `options?`: [FilterByValueOptions](../README.md#filterbyvalueoptions)): *[ItemArray](itemarray.md)‹T›*

*Defined in [src/lib/item/index.ts:471](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L471)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | any[] |
`options?` | [FilterByValueOptions](../README.md#filterbyvalueoptions) |

**Returns:** *[ItemArray](itemarray.md)‹T›*

___

###  filterMissing

▸ **filterMissing**(`options?`: [FilterMissingOptions](../README.md#filtermissingoptions)): *[ItemArray](itemarray.md)‹T›*

*Defined in [src/lib/item/index.ts:507](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L507)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [FilterMissingOptions](../README.md#filtermissingoptions) |

**Returns:** *[ItemArray](itemarray.md)‹T›*

___

###  intersection

▸ **intersection**(`other`: [ItemArrayLike](../README.md#itemarraylike), `options`: [IntersectionOptions](../README.md#intersectionoptions)): *[ItemArray](itemarray.md)‹T›*

*Defined in [src/lib/item/index.ts:196](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L196)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`other` | [ItemArrayLike](../README.md#itemarraylike) | - |
`options` | [IntersectionOptions](../README.md#intersectionoptions) | {} |

**Returns:** *[ItemArray](itemarray.md)‹T›*

___

###  itemsByLocale

▸ **itemsByLocale**(`locale`: string, `options`: [ItemsByLocaleOptions](../README.md#itemsbylocaleoptions)): *[ItemArray](itemarray.md)‹T›*

*Defined in [src/lib/item/index.ts:421](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L421)*

Get items that match locale. Optionally generate and include items with
paths that are defined in other locales but are missing in target locales.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`locale` | string | - |
`options` | [ItemsByLocaleOptions](../README.md#itemsbylocaleoptions) | {} |

**Returns:** *[ItemArray](itemarray.md)‹T›*

___

###  itemsByLocales

▸ **itemsByLocales**(`locales`: string[], `options`: [ItemsByLocaleOptions](../README.md#itemsbylocaleoptions)): *[ItemArray](itemarray.md)‹T›*

*Defined in [src/lib/item/index.ts:363](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L363)*

Get items that match locales. Optionally generate and include items with
paths that are defined in other locales but are missing in target locales.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`locales` | string[] | - |
`options` | [ItemsByLocaleOptions](../README.md#itemsbylocaleoptions) | {} |

**Returns:** *[ItemArray](itemarray.md)‹T›*

___

###  prop

▸ **prop**<**K**>(`prop`: K): *T[K][]*

*Defined in [src/lib/item/index.ts:137](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L137)*

**Type parameters:**

▪ **K**: *keyof T*

**Parameters:**

Name | Type |
------ | ------ |
`prop` | K |

**Returns:** *T[K][]*

___

###  push

▸ **push**(...`items`: T[]): *number*

*Defined in [src/lib/item/index.ts:125](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L125)*

**Parameters:**

Name | Type |
------ | ------ |
`...items` | T[] |

**Returns:** *number*

___

###  toJSON

▸ **toJSON**(): *any*

*Defined in [src/lib/item/index.ts:133](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L133)*

**Returns:** *any*

___

###  toObject

▸ **toObject**<**O**>(`options`: O): *[ToObjectResult](../README.md#toobjectresult)‹O["simple"], O["merge"], T›*

*Defined in [src/lib/item/index.ts:567](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L567)*

**Type parameters:**

▪ **O**: *[ToObjectOptions](../README.md#toobjectoptions)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | O | {} as O |

**Returns:** *[ToObjectResult](../README.md#toobjectresult)‹O["simple"], O["merge"], T›*

___

###  union

▸ **union**(`other`: [ItemArrayLike](../README.md#itemarraylike)‹T›, `options`: [UnionOptions](../README.md#unionoptions)): *[ItemArray](itemarray.md)‹T›*

*Defined in [src/lib/item/index.ts:180](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L180)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`other` | [ItemArrayLike](../README.md#itemarraylike)‹T› | - |
`options` | [UnionOptions](../README.md#unionoptions) | {} |

**Returns:** *[ItemArray](itemarray.md)‹T›*

___

###  uniqProp

▸ **uniqProp**<**K**>(`prop`: K): *NonNullable‹T[K]›[]*

*Defined in [src/lib/item/index.ts:148](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L148)*

**Type parameters:**

▪ **K**: *keyof T*

**Parameters:**

Name | Type |
------ | ------ |
`prop` | K |

**Returns:** *NonNullable‹T[K]›[]*

___

###  update

▸ **update**<**T2**>(`other`: [ItemArrayLike](../README.md#itemarraylike)‹T2›, `options`: [UpdateOptions](../README.md#updateoptions)‹T, T2›): *[UpdateReturn](../README.md#updatereturn)‹T, T2›*

*Defined in [src/lib/item/index.ts:336](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L336)*

**Type parameters:**

▪ **T2**: *[Item](../README.md#item)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`other` | [ItemArrayLike](../README.md#itemarraylike)‹T2› | - |
`options` | [UpdateOptions](../README.md#updateoptions)‹T, T2› | {} |

**Returns:** *[UpdateReturn](../README.md#updatereturn)‹T, T2›*

___

###  updateBy

▸ **updateBy**<**T2**>(`other`: [ItemArrayLike](../README.md#itemarraylike)‹T2›, `options`: [UpdateByOptions](../README.md#updatebyoptions)‹T, T2›): *[UpdateReturn](../README.md#updatereturn)‹T, T2›*

*Defined in [src/lib/item/index.ts:233](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L233)*

**Type parameters:**

▪ **T2**: *[Item](../README.md#item)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`other` | [ItemArrayLike](../README.md#itemarraylike)‹T2› | - |
`options` | [UpdateByOptions](../README.md#updatebyoptions)‹T, T2› | {} |

**Returns:** *[UpdateReturn](../README.md#updatereturn)‹T, T2›*

___

###  updateProp

▸ **updateProp**<**T2**>(`other`: [ItemArrayLike](../README.md#itemarraylike)‹T2›, `prop`: keyof T, `options`: [UpdatePropOptions](../README.md#updatepropoptions)‹T›): *[UpdateReturn](../README.md#updatereturn)‹T, T2›*

*Defined in [src/lib/item/index.ts:294](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L294)*

**Type parameters:**

▪ **T2**: *[Item](../README.md#item)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`other` | [ItemArrayLike](../README.md#itemarraylike)‹T2› | - |
`prop` | keyof T | - |
`options` | [UpdatePropOptions](../README.md#updatepropoptions)‹T› | {} |

**Returns:** *[UpdateReturn](../README.md#updatereturn)‹T, T2›*

___

###  updateProps

▸ **updateProps**<**T2**>(`other`: [ItemArrayLike](../README.md#itemarraylike)‹T2›, `props`: keyof T[], `options`: [UpdatePropOptions](../README.md#updatepropoptions)‹T›): *[UpdateReturn](../README.md#updatereturn)‹T, T2›*

*Defined in [src/lib/item/index.ts:311](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L311)*

**Type parameters:**

▪ **T2**: *[Item](../README.md#item)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`other` | [ItemArrayLike](../README.md#itemarraylike)‹T2› | - |
`props` | keyof T[] | - |
`options` | [UpdatePropOptions](../README.md#updatepropoptions)‹T› | {} |

**Returns:** *[UpdateReturn](../README.md#updatereturn)‹T, T2›*

___

### `Static` difference

▸ **difference**<**T**>(`array`: [ItemArrayLike](../README.md#itemarraylike)‹T›, `other`: [ItemArrayLike](../README.md#itemarraylike), `options`: [DifferenceOptions](../README.md#differenceoptions)): *[ItemArray](itemarray.md)‹T›*

*Defined in [src/lib/item/index.ts:169](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L169)*

Find those items from `array` which are not in `other` based on hashes

**Type parameters:**

▪ **T**: *[Item](../README.md#item)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`array` | [ItemArrayLike](../README.md#itemarraylike)‹T› | - |
`other` | [ItemArrayLike](../README.md#itemarraylike) | - |
`options` | [DifferenceOptions](../README.md#differenceoptions) | {} |

**Returns:** *[ItemArray](itemarray.md)‹T›*

___

### `Static` duplicates

▸ **duplicates**<**T**>(`items`: [ItemArrayLike](../README.md#itemarraylike)‹T›, `options`: object): *[ArrayMap](arraymap.md)‹number, T›*

*Defined in [src/lib/item/index.ts:554](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L554)*

**Type parameters:**

▪ **T**: *[Item](../README.md#item)*

**Parameters:**

▪ **items**: *[ItemArrayLike](../README.md#itemarraylike)‹T›*

▪`Default value`  **options**: *object*= {}

Name | Type |
------ | ------ |
`hashType?` | [HashType](../README.md#hashtype) |

**Returns:** *[ArrayMap](arraymap.md)‹number, T›*

___

### `Static` filterBy

▸ **filterBy**<**T**>(`items`: [ItemArrayLike](../README.md#itemarraylike)‹T›, `callback`: function, `options?`: [FilterByOptions](../README.md#filterbyoptions)): *[ItemArray](itemarray.md)‹T›*

*Defined in [src/lib/item/index.ts:444](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L444)*

**Type parameters:**

▪ **T**: *[Item](../README.md#item)*

**Parameters:**

▪ **items**: *[ItemArrayLike](../README.md#itemarraylike)‹T›*

▪ **callback**: *function*

▸ (`item`: T): *boolean | void*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

▪`Optional`  **options**: *[FilterByOptions](../README.md#filterbyoptions)*

**Returns:** *[ItemArray](itemarray.md)‹T›*

___

### `Static` filterByLocale

▸ **filterByLocale**<**T**>(`items`: [ItemArrayLike](../README.md#itemarraylike)‹T›, `locale`: string, `options?`: [FilterByValueOptions](../README.md#filterbyvalueoptions)): *[ItemArray](itemarray.md)‹T›*

*Defined in [src/lib/item/index.ts:487](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L487)*

**Type parameters:**

▪ **T**: *[Item](../README.md#item)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ItemArrayLike](../README.md#itemarraylike)‹T› |
`locale` | string |
`options?` | [FilterByValueOptions](../README.md#filterbyvalueoptions) |

**Returns:** *[ItemArray](itemarray.md)‹T›*

___

### `Static` filterByLocales

▸ **filterByLocales**<**T**>(`items`: [ItemArrayLike](../README.md#itemarraylike)‹T›, `locales`: string[], `options?`: [FilterByValueOptions](../README.md#filterbyvalueoptions)): *[ItemArray](itemarray.md)‹T›*

*Defined in [src/lib/item/index.ts:499](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L499)*

**Type parameters:**

▪ **T**: *[Item](../README.md#item)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ItemArrayLike](../README.md#itemarraylike)‹T› |
`locales` | string[] |
`options?` | [FilterByValueOptions](../README.md#filterbyvalueoptions) |

**Returns:** *[ItemArray](itemarray.md)‹T›*

___

### `Static` filterByPath

▸ **filterByPath**<**T**>(`items`: [ItemArrayLike](../README.md#itemarraylike)‹T›, `path`: T["path"], `options?`: [FilterByPathOptions](../README.md#filterbypathoptions)): *[ItemArray](itemarray.md)‹T›*

*Defined in [src/lib/item/index.ts:523](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L523)*

**Type parameters:**

▪ **T**: *[Item](../README.md#item)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ItemArrayLike](../README.md#itemarraylike)‹T› |
`path` | T["path"] |
`options?` | [FilterByPathOptions](../README.md#filterbypathoptions) |

**Returns:** *[ItemArray](itemarray.md)‹T›*

___

### `Static` filterByPaths

▸ **filterByPaths**<**T**>(`items`: [ItemArrayLike](../README.md#itemarraylike)‹T›, `paths`: T["path"][], `options?`: [FilterByPathOptions](../README.md#filterbypathoptions)): *[ItemArray](itemarray.md)‹T›*

*Defined in [src/lib/item/index.ts:535](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L535)*

**Type parameters:**

▪ **T**: *[Item](../README.md#item)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ItemArrayLike](../README.md#itemarraylike)‹T› |
`paths` | T["path"][] |
`options?` | [FilterByPathOptions](../README.md#filterbypathoptions) |

**Returns:** *[ItemArray](itemarray.md)‹T›*

___

### `Static` filterByValue

▸ **filterByValue**<**T**>(`items`: [ItemArrayLike](../README.md#itemarraylike)‹T›, `value`: any, `options?`: [FilterByValueOptions](../README.md#filterbyvalueoptions)): *[ItemArray](itemarray.md)‹T›*

*Defined in [src/lib/item/index.ts:463](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L463)*

**Type parameters:**

▪ **T**: *[Item](../README.md#item)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ItemArrayLike](../README.md#itemarraylike)‹T› |
`value` | any |
`options?` | [FilterByValueOptions](../README.md#filterbyvalueoptions) |

**Returns:** *[ItemArray](itemarray.md)‹T›*

___

### `Static` filterByValues

▸ **filterByValues**<**T**>(`items`: [ItemArrayLike](../README.md#itemarraylike)‹T›, `values`: any[], `options?`: [FilterByValueOptions](../README.md#filterbyvalueoptions)): *[ItemArray](itemarray.md)‹T›*

*Defined in [src/lib/item/index.ts:475](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L475)*

**Type parameters:**

▪ **T**: *[Item](../README.md#item)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ItemArrayLike](../README.md#itemarraylike)‹T› |
`values` | any[] |
`options?` | [FilterByValueOptions](../README.md#filterbyvalueoptions) |

**Returns:** *[ItemArray](itemarray.md)‹T›*

___

### `Static` filterMissing

▸ **filterMissing**<**T**>(`items`: [ItemArrayLike](../README.md#itemarraylike)‹T›, `options?`: [FilterMissingOptions](../README.md#filtermissingoptions)): *[ItemArray](itemarray.md)‹T›*

*Defined in [src/lib/item/index.ts:511](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L511)*

**Type parameters:**

▪ **T**: *[Item](../README.md#item)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ItemArrayLike](../README.md#itemarraylike)‹T› |
`options?` | [FilterMissingOptions](../README.md#filtermissingoptions) |

**Returns:** *[ItemArray](itemarray.md)‹T›*

___

### `Static` fromObject

▸ **fromObject**<**T**, **CtorOpts**>(`obj`: [AnyObj](../README.md#anyobj), `params`: [FromObjectOptions](../README.md#fromobjectoptions)‹T› & CtorOpts): *[ItemArray](../README.md#itemarray)‹T›*

*Defined in [src/lib/item/index.ts:757](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L757)*

**Type parameters:**

▪ **T**: *[Item](../README.md#item)*

▪ **CtorOpts**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | [AnyObj](../README.md#anyobj) |
`params` | [FromObjectOptions](../README.md#fromobjectoptions)‹T› & CtorOpts |

**Returns:** *[ItemArray](../README.md#itemarray)‹T›*

___

### `Static` fromObjects

▸ **fromObjects**<**T**, **CtorOpts**>(`objs`: [AnyObj](../README.md#anyobj)[], `params`: [FromObjectOptions](../README.md#fromobjectoptions)‹T› & CtorOpts): *[ItemArray](../README.md#itemarray)‹T›*

*Defined in [src/lib/item/index.ts:693](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L693)*

**Type parameters:**

▪ **T**: *[Item](../README.md#item)*

▪ **CtorOpts**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`objs` | [AnyObj](../README.md#anyobj)[] |
`params` | [FromObjectOptions](../README.md#fromobjectoptions)‹T› & CtorOpts |

**Returns:** *[ItemArray](../README.md#itemarray)‹T›*

___

### `Static` intersection

▸ **intersection**<**T**>(`array`: [ItemArrayLike](../README.md#itemarraylike)‹T›, `other`: [ItemArrayLike](../README.md#itemarraylike), `options`: [IntersectionOptions](../README.md#intersectionoptions)): *[ItemArray](itemarray.md)‹T›*

*Defined in [src/lib/item/index.ts:208](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L208)*

Find those items from `array` which are also in `other` based on hashes.

Preserves duplicates.

**Type parameters:**

▪ **T**: *[Item](../README.md#item)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`array` | [ItemArrayLike](../README.md#itemarraylike)‹T› | - |
`other` | [ItemArrayLike](../README.md#itemarraylike) | - |
`options` | [IntersectionOptions](../README.md#intersectionoptions) | {} |

**Returns:** *[ItemArray](itemarray.md)‹T›*

___

### `Static` itemsByLocale

▸ **itemsByLocale**<**T**>(`items`: [ItemArrayLike](../README.md#itemarraylike)‹T›, `locale`: string, `options`: [ItemsByLocaleOptions](../README.md#itemsbylocaleoptions)): *[ItemArray](itemarray.md)‹T›*

*Defined in [src/lib/item/index.ts:429](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L429)*

Get items that match locale. Optionally generate and include items with
paths that are defined in other locales but are missing in target locales.

**Type parameters:**

▪ **T**: *[Item](../README.md#item)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`items` | [ItemArrayLike](../README.md#itemarraylike)‹T› | - |
`locale` | string | - |
`options` | [ItemsByLocaleOptions](../README.md#itemsbylocaleoptions) | {} |

**Returns:** *[ItemArray](itemarray.md)‹T›*

___

### `Static` itemsByLocales

▸ **itemsByLocales**<**T**>(`items`: [ItemArrayLike](../README.md#itemarraylike)‹T›, `locales`: string[], `options`: [ItemsByLocaleOptions](../README.md#itemsbylocaleoptions)): *[ItemArray](itemarray.md)‹T›*

*Defined in [src/lib/item/index.ts:371](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L371)*

Get items that match locales. Optionally generate and include items with
paths that are defined in other locales but are missing in target locales.

**Type parameters:**

▪ **T**: *[Item](../README.md#item)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`items` | [ItemArrayLike](../README.md#itemarraylike)‹T› | - |
`locales` | string[] | - |
`options` | [ItemsByLocaleOptions](../README.md#itemsbylocaleoptions) | {} |

**Returns:** *[ItemArray](itemarray.md)‹T›*

___

### `Static` prop

▸ **prop**<**T**, **K**>(`items`: T[], `prop`: K): *T[K][]*

*Defined in [src/lib/item/index.ts:141](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L141)*

**Type parameters:**

▪ **T**: *[Item](../README.md#item)*

▪ **K**: *keyof T*

**Parameters:**

Name | Type |
------ | ------ |
`items` | T[] |
`prop` | K |

**Returns:** *T[K][]*

___

### `Static` toObject

▸ **toObject**<**T**, **O**>(`itemsList`: [ItemArrayLike](../README.md#itemarraylike)‹T›, `options`: O): *[ToObjectResult](../README.md#toobjectresult)‹O["simple"], O["merge"], T›*

*Defined in [src/lib/item/index.ts:573](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L573)*

**Type parameters:**

▪ **T**: *[Item](../README.md#item)*

▪ **O**: *[ToObjectOptions](../README.md#toobjectoptions)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`itemsList` | [ItemArrayLike](../README.md#itemarraylike)‹T› | - |
`options` | O | {} as O |

**Returns:** *[ToObjectResult](../README.md#toobjectresult)‹O["simple"], O["merge"], T›*

___

### `Static` union

▸ **union**<**T**>(`array`: [ItemArrayLike](../README.md#itemarraylike)‹T›, `other`: [ItemArrayLike](../README.md#itemarraylike)‹T›, `options`: [UnionOptions](../README.md#unionoptions)): *[ItemArray](itemarray.md)‹T›*

*Defined in [src/lib/item/index.ts:187](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L187)*

Find those items that are either in `array` or in `other` based on hashes

**Type parameters:**

▪ **T**: *[Item](../README.md#item)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`array` | [ItemArrayLike](../README.md#itemarraylike)‹T› | - |
`other` | [ItemArrayLike](../README.md#itemarraylike)‹T› | - |
`options` | [UnionOptions](../README.md#unionoptions) | {} |

**Returns:** *[ItemArray](itemarray.md)‹T›*

___

### `Static` uniqProp

▸ **uniqProp**<**T**, **K**>(`items`: T[], `prop`: K): *NonNullable‹T[K]›[]*

*Defined in [src/lib/item/index.ts:152](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L152)*

**Type parameters:**

▪ **T**: *[Item](../README.md#item)*

▪ **K**: *keyof T*

**Parameters:**

Name | Type |
------ | ------ |
`items` | T[] |
`prop` | K |

**Returns:** *NonNullable‹T[K]›[]*

___

### `Static` update

▸ **update**<**T**, **T2**>(`items`: [ItemArrayLike](../README.md#itemarraylike)‹T›, `other`: [ItemArrayLike](../README.md#itemarraylike)‹T2›, `options`: [UpdateOptions](../README.md#updateoptions)‹T, T2›): *[UpdateReturn](../README.md#updatereturn)‹T, T2›*

*Defined in [src/lib/item/index.ts:343](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L343)*

**Type parameters:**

▪ **T**: *[Item](../README.md#item)*

▪ **T2**: *[Item](../README.md#item)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`items` | [ItemArrayLike](../README.md#itemarraylike)‹T› | - |
`other` | [ItemArrayLike](../README.md#itemarraylike)‹T2› | - |
`options` | [UpdateOptions](../README.md#updateoptions)‹T, T2› | {} |

**Returns:** *[UpdateReturn](../README.md#updatereturn)‹T, T2›*

___

### `Static` updateBy

▸ **updateBy**<**T**, **T2**>(`items`: [ItemArrayLike](../README.md#itemarraylike)‹T›, `other`: [ItemArrayLike](../README.md#itemarraylike)‹T2›, `options`: [UpdateByOptions](../README.md#updatebyoptions)‹T, T2›): *[UpdateReturn](../README.md#updatereturn)‹T, T2›*

*Defined in [src/lib/item/index.ts:240](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L240)*

**Type parameters:**

▪ **T**: *[Item](../README.md#item)*

▪ **T2**: *[Item](../README.md#item)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`items` | [ItemArrayLike](../README.md#itemarraylike)‹T› | - |
`other` | [ItemArrayLike](../README.md#itemarraylike)‹T2› | - |
`options` | [UpdateByOptions](../README.md#updatebyoptions)‹T, T2› | {} |

**Returns:** *[UpdateReturn](../README.md#updatereturn)‹T, T2›*

___

### `Static` updateProp

▸ **updateProp**<**T**, **T2**>(`items`: [ItemArrayLike](../README.md#itemarraylike)‹T›, `other`: [ItemArrayLike](../README.md#itemarraylike)‹T2›, `prop`: keyof T, `options`: [UpdatePropOptions](../README.md#updatepropoptions)‹T›): *[UpdateReturn](../README.md#updatereturn)‹T, T2›*

*Defined in [src/lib/item/index.ts:302](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L302)*

**Type parameters:**

▪ **T**: *[Item](../README.md#item)*

▪ **T2**: *[Item](../README.md#item)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`items` | [ItemArrayLike](../README.md#itemarraylike)‹T› | - |
`other` | [ItemArrayLike](../README.md#itemarraylike)‹T2› | - |
`prop` | keyof T | - |
`options` | [UpdatePropOptions](../README.md#updatepropoptions)‹T› | {} |

**Returns:** *[UpdateReturn](../README.md#updatereturn)‹T, T2›*

___

### `Static` updateProps

▸ **updateProps**<**T**, **T2**>(`items`: [ItemArrayLike](../README.md#itemarraylike)‹T›, `other`: [ItemArrayLike](../README.md#itemarraylike)‹T2›, `props`: keyof T[], `options`: [UpdatePropOptions](../README.md#updatepropoptions)‹T›): *[UpdateReturn](../README.md#updatereturn)‹T, T2›*

*Defined in [src/lib/item/index.ts:324](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L324)*

**Type parameters:**

▪ **T**: *[Item](../README.md#item)*

▪ **T2**: *[Item](../README.md#item)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`items` | [ItemArrayLike](../README.md#itemarraylike)‹T› | - |
`other` | [ItemArrayLike](../README.md#itemarraylike)‹T2› | - |
`props` | keyof T[] | - |
`options` | [UpdatePropOptions](../README.md#updatepropoptions)‹T› | {} |

**Returns:** *[UpdateReturn](../README.md#updatereturn)‹T, T2›*
