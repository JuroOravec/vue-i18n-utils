[i18n-util](../README.md) › [I18nAdaptor](i18nadaptor.md)

# Class: I18nAdaptor

## Hierarchy

* [JsonYamlAdaptor](jsonyamladaptor.md)

  ↳ **I18nAdaptor**

## Implements

* [ItemMethods](../README.md#itemmethods)

## Index

### Properties

* [constructor](i18nadaptor.md#constructor)
* [logger](i18nadaptor.md#logger)
* [name](i18nadaptor.md#name)
* [options](i18nadaptor.md#options)
* [serializers](i18nadaptor.md#serializers)

### Accessors

* [defaults](i18nadaptor.md#static-defaults)

### Methods

* [_groupBySource](i18nadaptor.md#_groupbysource)
* [_serialize](i18nadaptor.md#_serialize)
* [_write](i18nadaptor.md#_write)
* [parser](i18nadaptor.md#parser)
* [remover](i18nadaptor.md#remover)
* [usageAnalyzer](i18nadaptor.md#usageanalyzer)
* [writer](i18nadaptor.md#writer)
* [resolveSerializer](i18nadaptor.md#static-resolveserializer)

## Properties

###  constructor

• **constructor**: *typeof JsonYamlAdaptor*

*Inherited from [JsonYamlAdaptor](jsonyamladaptor.md).[constructor](jsonyamladaptor.md#constructor)*

*Overrides void*

*Defined in [src/lib/adaptors/json-yaml/index.ts:133](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/index.ts#L133)*

___

###  logger

• **logger**: *function*

*Inherited from [JsonYamlAdaptor](jsonyamladaptor.md).[logger](jsonyamladaptor.md#logger)*

*Defined in [src/lib/adaptors/json-yaml/index.ts:139](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/index.ts#L139)*

#### Type declaration:

▸ (`msg`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string |

___

###  name

• **name**: *string* = "json-yaml"

*Inherited from [JsonYamlAdaptor](jsonyamladaptor.md).[name](jsonyamladaptor.md#name)*

*Defined in [src/lib/adaptors/json-yaml/index.ts:137](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/index.ts#L137)*

___

###  options

• **options**: *IAdaptorJY.CollectionCtorOptions*

*Inherited from [JsonYamlAdaptor](jsonyamladaptor.md).[options](jsonyamladaptor.md#options)*

*Defined in [src/lib/adaptors/json-yaml/index.ts:141](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/index.ts#L141)*

___

###  serializers

• **serializers**: *[Collection](../README.md#abstract-collection)*

*Inherited from [JsonYamlAdaptor](jsonyamladaptor.md).[serializers](jsonyamladaptor.md#serializers)*

*Defined in [src/lib/adaptors/json-yaml/index.ts:138](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/index.ts#L138)*

## Accessors

### `Static` defaults

• **get defaults**(): *object*

*Overrides [JsonYamlAdaptor](jsonyamladaptor.md).[defaults](jsonyamladaptor.md#static-defaults)*

*Defined in [src/lib/adaptors/i18n/index.ts:165](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/i18n/index.ts#L165)*

**Returns:** *object*

* **contentGroupClass**: *[I18nContentGroup](i18ncontentgroup.md)* = I18nContentGroup

* **itemArrayClass**: *[I18nItemArray](i18nitemarray.md)* = I18nItemArray

## Methods

###  _groupBySource

▸ **_groupBySource**<**T**>(`items`: T[]): *Dictionary‹T[]›*

*Inherited from [JsonYamlAdaptor](jsonyamladaptor.md).[_groupBySource](jsonyamladaptor.md#_groupbysource)*

*Defined in [src/lib/adaptors/json-yaml/index.ts:377](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/index.ts#L377)*

**Type parameters:**

▪ **T**: *[Item](../README.md#item)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | T[] |

**Returns:** *Dictionary‹T[]›*

___

###  _serialize

▸ **_serialize**(`filepath`: string, `content`: any, `options`: any): *Promise‹string›*

*Inherited from [JsonYamlAdaptor](jsonyamladaptor.md).[_serialize](jsonyamladaptor.md#_serialize)*

*Defined in [src/lib/adaptors/json-yaml/index.ts:391](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/index.ts#L391)*

**Parameters:**

Name | Type |
------ | ------ |
`filepath` | string |
`content` | any |
`options` | any |

**Returns:** *Promise‹string›*

___

###  _write

▸ **_write**(`filepath`: string, `content`: string | Buffer, `options`: object): *Promise‹void›*

*Inherited from [JsonYamlAdaptor](jsonyamladaptor.md).[_write](jsonyamladaptor.md#_write)*

*Defined in [src/lib/adaptors/json-yaml/index.ts:406](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/index.ts#L406)*

**Parameters:**

▪ **filepath**: *string*

▪ **content**: *string | Buffer*

▪`Default value`  **options**: *object*= {}

Name | Type |
------ | ------ |
`abortOnError?` | undefined &#124; false &#124; true |
`fs?` | undefined &#124; object |

**Returns:** *Promise‹void›*

___

###  parser

▸ **parser**(`filepaths`: string[], `options`: IAdaptorJY.ParserOptions): *Promise‹[JsonYamlDefinitionItem](jsonyamldefinitionitem.md)[]›*

*Inherited from [JsonYamlAdaptor](jsonyamladaptor.md).[parser](jsonyamladaptor.md#parser)*

*Defined in [src/lib/adaptors/json-yaml/index.ts:161](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/index.ts#L161)*

Definitions data from i18n tags (<i18n>) from files.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`filepaths` | string[] | - |
`options` | IAdaptorJY.ParserOptions | {} |

**Returns:** *Promise‹[JsonYamlDefinitionItem](jsonyamldefinitionitem.md)[]›*

___

###  remover

▸ **remover**(`filepaths`: string[], `options`: IAdaptorJY.RemoverOptions): *Promise‹void›*

*Inherited from [JsonYamlAdaptor](jsonyamladaptor.md).[remover](jsonyamladaptor.md#remover)*

*Defined in [src/lib/adaptors/json-yaml/index.ts:216](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/index.ts#L216)*

Removes i18n files.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`filepaths` | string[] | - |
`options` | IAdaptorJY.RemoverOptions | {} |

**Returns:** *Promise‹void›*

___

###  usageAnalyzer

▸ **usageAnalyzer**(...`args`: any[]): *never[]*

*Inherited from [JsonYamlAdaptor](jsonyamladaptor.md).[usageAnalyzer](jsonyamladaptor.md#usageanalyzer)*

*Defined in [src/lib/adaptors/json-yaml/index.ts:154](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/index.ts#L154)*

JSON and YAML files are not analyzed for usage, so this method returns
an empty array.

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *never[]*

___

###  writer

▸ **writer**(`items`: [Item](../README.md#item)[], `options`: [WriterOptions](../README.md#writeroptions) & object): *Promise‹void›*

*Overrides [JsonYamlAdaptor](jsonyamladaptor.md).[writer](jsonyamladaptor.md#writer)*

*Defined in [src/lib/adaptors/i18n/index.ts:126](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/i18n/index.ts#L126)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`items` | [Item](../README.md#item)[] | - |
`options` | [WriterOptions](../README.md#writeroptions) & object | {} |

**Returns:** *Promise‹void›*

___

### `Static` resolveSerializer

▸ **resolveSerializer**(`serializers`: [Collection](../README.md#abstract-collection), `filepath`: string, `options`: [AnyObj](../README.md#anyobj)): *[NamedItem](../README.md#nameditem)‹›*

*Inherited from [JsonYamlAdaptor](jsonyamladaptor.md).[resolveSerializer](jsonyamladaptor.md#static-resolveserializer)*

*Defined in [src/lib/adaptors/json-yaml/index.ts:426](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/index.ts#L426)*

**Parameters:**

Name | Type |
------ | ------ |
`serializers` | [Collection](../README.md#abstract-collection) |
`filepath` | string |
`options` | [AnyObj](../README.md#anyobj) |

**Returns:** *[NamedItem](../README.md#nameditem)‹›*
