[i18n-util](../README.md) › [LoadedBase](loadedbase.md)

# Class: LoadedBase

## Hierarchy

* [Base](base.md)

  ↳ **LoadedBase**

  ↳ [LoadedItemProcessor](loadeditemprocessor.md)

  ↳ [LoadedItemProcessor](loadeditemprocessor.md)

## Implements

* [Base](../README.md#abstract-base)
* [LoadedBase](../README.md#abstract-loadedbase)

## Index

### Constructors

* [constructor](loadedbase.md#constructor)

### Properties

* [adaptors](loadedbase.md#adaptors)
* [i18nUtil](loadedbase.md#i18nutil)
* [keyResolver](loadedbase.md#keyresolver)
* [loaded](loadedbase.md#loaded)
* [localeResolver](loadedbase.md#localeresolver)
* [options](loadedbase.md#options)
* [pathResolver](loadedbase.md#pathresolver)
* [schemator](loadedbase.md#schemator)
* [validator](loadedbase.md#validator)
* [valueResolver](loadedbase.md#valueresolver)

### Methods

* [addAdaptor](loadedbase.md#addadaptor)
* [addAdaptors](loadedbase.md#addadaptors)
* [effectiveOptions](loadedbase.md#effectiveoptions)
* [removeAdaptor](loadedbase.md#removeadaptor)
* [removeAdaptors](loadedbase.md#removeadaptors)
* [resolveKeys](loadedbase.md#resolvekeys)
* [resolveLocales](loadedbase.md#resolvelocales)
* [resolvePaths](loadedbase.md#resolvepaths)
* [resolveValues](loadedbase.md#resolvevalues)

## Constructors

###  constructor

\+ **new LoadedBase**(`__namedParameters`: object): *[LoadedBase](loadedbase.md)*

*Overrides [Base](base.md).[constructor](base.md#constructor)*

*Defined in [src/lib/i18n-util/base.ts:165](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L165)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`i18nUtil` | undefined &#124; [Base](../README.md#abstract-base)‹› |
`options` | options |

**Returns:** *[LoadedBase](loadedbase.md)*

## Properties

###  adaptors

• **adaptors**: *[Collection](../README.md#collection)*

*Inherited from [Base](base.md).[adaptors](base.md#adaptors)*

*Defined in [src/lib/i18n-util/base.ts:24](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L24)*

___

###  i18nUtil

• **i18nUtil**: *[Base](../README.md#abstract-base)*

*Defined in [src/lib/i18n-util/base.ts:164](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L164)*

___

###  keyResolver

• **keyResolver**: *[KeyResolver](../README.md#keyresolver)*

*Inherited from [Base](base.md).[keyResolver](base.md#keyresolver)*

*Defined in [src/lib/i18n-util/base.ts:27](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L27)*

___

###  loaded

• **loaded**: *[ItemArray](../README.md#itemarray)*

*Defined in [src/lib/i18n-util/base.ts:165](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L165)*

___

###  localeResolver

• **localeResolver**: *[LocaleResolver](../README.md#localeresolver)*

*Inherited from [Base](base.md).[localeResolver](base.md#localeresolver)*

*Defined in [src/lib/i18n-util/base.ts:26](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L26)*

___

###  options

• **options**: *[AnyObj](../README.md#anyobj)*

*Inherited from [Base](base.md).[options](base.md#options)*

*Defined in [src/lib/i18n-util/base.ts:31](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L31)*

___

###  pathResolver

• **pathResolver**: *[PathResolver](../README.md#pathresolver)*

*Inherited from [Base](base.md).[pathResolver](base.md#pathresolver)*

*Defined in [src/lib/i18n-util/base.ts:25](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L25)*

___

###  schemator

• **schemator**: *[Schemator](../README.md#abstract-schemator)*

*Inherited from [Base](base.md).[schemator](base.md#schemator)*

*Defined in [src/lib/i18n-util/base.ts:29](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L29)*

___

###  validator

• **validator**: *[Validator](../README.md#abstract-validator)*

*Inherited from [Base](base.md).[validator](base.md#validator)*

*Defined in [src/lib/i18n-util/base.ts:30](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L30)*

___

###  valueResolver

• **valueResolver**: *[ValueResolver](../README.md#valueresolver)*

*Inherited from [Base](base.md).[valueResolver](base.md#valueresolver)*

*Defined in [src/lib/i18n-util/base.ts:28](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L28)*

## Methods

###  addAdaptor

▸ **addAdaptor**(`params`: Parameters<Base["adaptors"]["add"]>[0]): *void*

*Inherited from [Base](base.md).[addAdaptor](base.md#addadaptor)*

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

*Inherited from [Base](base.md).[removeAdaptor](base.md#removeadaptor)*

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

*Defined in [src/lib/i18n-util/base.ts:69](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`names` | Parameters<Base["adaptors"]["delete"]>[0][] |

**Returns:** *void*

___

###  resolveKeys

▸ **resolveKeys**(`keys`: any[], `options`: [ResolveKeysOptions](../README.md#resolvekeysoptions)): *Promise‹string[][]›*

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

*Overrides [Base](base.md).[resolveValues](base.md#resolvevalues)*

*Defined in [src/lib/i18n-util/base.ts:184](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/base.ts#L184)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`values` | any[] | - |
`options` | [ResolveValuesOptions](../README.md#resolvevaluesoptions) | {} |

**Returns:** *Promise‹any[]›*
