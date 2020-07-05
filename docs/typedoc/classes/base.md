[i18n-util](../README.md) › [Base](base.md)

# Class: Base

## Hierarchy

* **Base**

  ↳ [LoadedBase](loadedbase.md)

  ↳ [ItemProcessor](itemprocessor.md)

  ↳ [ItemProcessor](itemprocessor.md)

## Implements

* [Base](../README.md#abstract-base)

## Index

### Constructors

* [constructor](base.md#constructor)

### Properties

* [adaptors](base.md#adaptors)
* [keyResolver](base.md#keyresolver)
* [localeResolver](base.md#localeresolver)
* [options](base.md#options)
* [pathResolver](base.md#pathresolver)
* [schemator](base.md#schemator)
* [validator](base.md#validator)
* [valueResolver](base.md#valueresolver)

### Methods

* [_resolveInputs](base.md#private-_resolveinputs)
* [addAdaptor](base.md#addadaptor)
* [addAdaptors](base.md#addadaptors)
* [effectiveOptions](base.md#effectiveoptions)
* [removeAdaptor](base.md#removeadaptor)
* [removeAdaptors](base.md#removeadaptors)
* [resolveKeys](base.md#resolvekeys)
* [resolveLocales](base.md#resolvelocales)
* [resolvePaths](base.md#resolvepaths)
* [resolveValues](base.md#resolvevalues)

## Constructors

###  constructor

\+ **new Base**(`__namedParameters`: object): *[Base](base.md)*

*Defined in [src/lib/i18n-util/base.ts:31](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L31)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`adaptors` | undefined &#124; [Collection](../README.md#abstract-collection)‹› |
`keyResolver` | undefined &#124; [KeyResolver](../README.md#abstract-keyresolver)‹› |
`localeResolver` | undefined &#124; [LocaleResolver](../README.md#abstract-localeresolver)‹› |
`pathResolver` | undefined &#124; [PathResolver](../README.md#abstract-pathresolver)‹› |
`rest` | rest |
`schemator` | undefined &#124; [Schemator](../README.md#abstract-schemator)‹› |
`validator` | undefined &#124; [Validator](../README.md#abstract-validator)‹› |
`valueResolver` | undefined &#124; [ValueResolver](../README.md#abstract-valueresolver)‹› |

**Returns:** *[Base](base.md)*

## Properties

###  adaptors

• **adaptors**: *[Collection](../README.md#collection)*

*Defined in [src/lib/i18n-util/base.ts:24](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L24)*

___

###  keyResolver

• **keyResolver**: *[KeyResolver](../README.md#keyresolver)*

*Defined in [src/lib/i18n-util/base.ts:27](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L27)*

___

###  localeResolver

• **localeResolver**: *[LocaleResolver](../README.md#localeresolver)*

*Defined in [src/lib/i18n-util/base.ts:26](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L26)*

___

###  options

• **options**: *[AnyObj](../README.md#anyobj)*

*Defined in [src/lib/i18n-util/base.ts:31](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L31)*

___

###  pathResolver

• **pathResolver**: *[PathResolver](../README.md#pathresolver)*

*Defined in [src/lib/i18n-util/base.ts:25](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L25)*

___

###  schemator

• **schemator**: *[Schemator](../README.md#abstract-schemator)*

*Defined in [src/lib/i18n-util/base.ts:29](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L29)*

___

###  validator

• **validator**: *[Validator](../README.md#abstract-validator)*

*Defined in [src/lib/i18n-util/base.ts:30](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L30)*

___

###  valueResolver

• **valueResolver**: *[ValueResolver](../README.md#valueresolver)*

*Defined in [src/lib/i18n-util/base.ts:28](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L28)*

## Methods

### `Private` _resolveInputs

▸ **_resolveInputs**<**T**, **R**>(`inputs`: T[], `resolver`: function, `options`: object & object): *Promise‹R[]›*

*Defined in [src/lib/i18n-util/base.ts:126](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L126)*

Common pathway for deduping, logging and resolving array of inputs

**Type parameters:**

▪ **T**: *any*

▪ **R**: *any*

**Parameters:**

▪ **inputs**: *T[]*

▪ **resolver**: *function*

▸ (`x`: T[]): *R[] | Promise‹R[]›*

**Parameters:**

Name | Type |
------ | ------ |
`x` | T[] |

▪`Default value`  **options**: *object & object*= {}

**Returns:** *Promise‹R[]›*

___

###  addAdaptor

▸ **addAdaptor**(`params`: Parameters<Base["adaptors"]["add"]>[0]): *void*

*Defined in [src/lib/i18n-util/base.ts:54](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | Parameters<Base["adaptors"]["add"]>[0] |

**Returns:** *void*

___

###  addAdaptors

▸ **addAdaptors**(`paramsList`: Parameters<Base["adaptors"]["add"]>[0][]): *void*

*Defined in [src/lib/i18n-util/base.ts:60](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`paramsList` | Parameters<Base["adaptors"]["add"]>[0][] |

**Returns:** *void*

___

###  effectiveOptions

▸ **effectiveOptions**<**O**>(...`options`: O[]): *O*

*Defined in [src/lib/i18n-util/base.ts:158](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L158)*

**Type parameters:**

▪ **O**: *[AnyObj](../README.md#anyobj)*

**Parameters:**

Name | Type |
------ | ------ |
`...options` | O[] |

**Returns:** *O*

___

###  removeAdaptor

▸ **removeAdaptor**(`name`: Parameters<Base["adaptors"]["delete"]>[0]): *void*

*Defined in [src/lib/i18n-util/base.ts:64](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | Parameters<Base["adaptors"]["delete"]>[0] |

**Returns:** *void*

___

###  removeAdaptors

▸ **removeAdaptors**(`names`: Parameters<Base["adaptors"]["delete"]>[0][]): *void*

*Defined in [src/lib/i18n-util/base.ts:69](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`names` | Parameters<Base["adaptors"]["delete"]>[0][] |

**Returns:** *void*

___

###  resolveKeys

▸ **resolveKeys**(`items`: [ItemArrayLike](../README.md#itemarraylike), `keys`: any[], `options`: [ResolveKeysOptions](../README.md#resolvekeysoptions)): *Promise‹string[][]›*

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

*Defined in [src/lib/i18n-util/base.ts:109](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L109)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`items` | [ItemArrayLike](../README.md#itemarraylike) | - |
`values` | any[] | - |
`options` | [ResolveValuesOptions](../README.md#resolvevaluesoptions) | {} |

**Returns:** *Promise‹any[]›*
