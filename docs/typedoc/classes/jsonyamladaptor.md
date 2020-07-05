[i18n-util](../README.md) › [JsonYamlAdaptor](jsonyamladaptor.md)

# Class: JsonYamlAdaptor

## Hierarchy

* **JsonYamlAdaptor**

  ↳ [I18nAdaptor](i18nadaptor.md)

## Implements

* [ItemMethods](../README.md#itemmethods)

## Index

### Properties

* [constructor](jsonyamladaptor.md#constructor)
* [logger](jsonyamladaptor.md#logger)
* [name](jsonyamladaptor.md#name)
* [options](jsonyamladaptor.md#options)
* [serializers](jsonyamladaptor.md#serializers)

### Accessors

* [defaults](jsonyamladaptor.md#static-defaults)

### Methods

* [_groupBySource](jsonyamladaptor.md#_groupbysource)
* [_serialize](jsonyamladaptor.md#_serialize)
* [_write](jsonyamladaptor.md#_write)
* [parser](jsonyamladaptor.md#parser)
* [remover](jsonyamladaptor.md#remover)
* [usageAnalyzer](jsonyamladaptor.md#usageanalyzer)
* [writer](jsonyamladaptor.md#writer)
* [resolveSerializer](jsonyamladaptor.md#static-resolveserializer)

## Properties

###  constructor

\+ **new JsonYamlAdaptor**(`options`: IAdaptorJY.CollectionCtorOptions): *[JsonYamlAdaptor](jsonyamladaptor.md)*

*Defined in [src/lib/adaptors/json-yaml/index.ts:139](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/index.ts#L139)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | IAdaptorJY.CollectionCtorOptions | {} |

**Returns:** *[JsonYamlAdaptor](jsonyamladaptor.md)*

___

###  logger

• **logger**: *function*

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

*Defined in [src/lib/adaptors/json-yaml/index.ts:137](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/index.ts#L137)*

___

###  options

• **options**: *IAdaptorJY.CollectionCtorOptions*

*Defined in [src/lib/adaptors/json-yaml/index.ts:141](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/index.ts#L141)*

___

###  serializers

• **serializers**: *[Collection](../README.md#abstract-collection)*

*Defined in [src/lib/adaptors/json-yaml/index.ts:138](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/index.ts#L138)*

## Accessors

### `Static` defaults

• **get defaults**(): *object*

*Defined in [src/lib/adaptors/json-yaml/index.ts:444](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/index.ts#L444)*

**Returns:** *object*

* **abortOnError**: *boolean* = true

* **contentBlockClass**: *[ContentBlock](contentblock.md)* = ContentBlock

* **contentFormatter**: *[ContentFormatter](../README.md#contentformatter)* = new ContentFormatter() as IContentFormatter.ContentFormatter

* **contentGroupClass**: *[JsonYamlContentGroup](jsonyamlcontentgroup.md)* = JsonYamlContentGroup

* **fileMatchLocale**: *boolean* = true

* **itemArrayClass**: *[DefinitionArray](definitionarray.md)* = DefinitionArray

* **itemClass**: *[JsonYamlDefinitionItem](jsonyamldefinitionitem.md)* = JsonYamlDefinitionItem

* **json**: *boolean* = true

* **logger**: *Debugger* = debug

* **pathFormatter**: *[PathFormatter](../README.md#pathformatter)* = new PathFormatter() as IPathFormatter.PathFormatter

* **serializers**: *[SerializerCollection](serializercollection.md)‹›* = new SerializerCollection({
        collection: {
          json: {
            patterns: [/json/iu],
            methods: {
              deserializer: (data, opts) => JSON.parse(data, opts.reviver),
              serializer: (data, opts) =>
                JSON.stringify(data, opts.replace, opts.space),
            },
          },
          yaml: {
            patterns: [/ya?ml/iu],
            methods: {
              deserializer: (data, opts) => yaml.safeLoad(data, opts),
              serializer: (data, opts) => yaml.safeDump(data, opts),
            },
          },
        },
      })

* **yaml**: *boolean* = true

## Methods

###  _groupBySource

▸ **_groupBySource**<**T**>(`items`: T[]): *Dictionary‹T[]›*

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

▸ **writer**(`definitions`: [JsonYamlDefinitionItem](jsonyamldefinitionitem.md)[], `options`: IAdaptorJY.WriterOptions): *Promise‹void›*

*Defined in [src/lib/adaptors/json-yaml/index.ts:234](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/index.ts#L234)*

Writes content to files based on the DefinitionItems given.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`definitions` | [JsonYamlDefinitionItem](jsonyamldefinitionitem.md)[] | - |
`options` | IAdaptorJY.WriterOptions | {} |

**Returns:** *Promise‹void›*

___

### `Static` resolveSerializer

▸ **resolveSerializer**(`serializers`: [Collection](../README.md#abstract-collection), `filepath`: string, `options`: [AnyObj](../README.md#anyobj)): *[NamedItem](../README.md#nameditem)‹›*

*Defined in [src/lib/adaptors/json-yaml/index.ts:426](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/index.ts#L426)*

**Parameters:**

Name | Type |
------ | ------ |
`serializers` | [Collection](../README.md#abstract-collection) |
`filepath` | string |
`options` | [AnyObj](../README.md#anyobj) |

**Returns:** *[NamedItem](../README.md#nameditem)‹›*
