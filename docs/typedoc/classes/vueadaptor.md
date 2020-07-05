[i18n-util](../README.md) › [VueAdaptor](vueadaptor.md)

# Class: VueAdaptor

## Hierarchy

* **VueAdaptor**

## Implements

* [ItemMethods](../README.md#itemmethods)

## Index

### Constructors

* [constructor](vueadaptor.md#constructor)

### Properties

* [name](vueadaptor.md#name)
* [options](vueadaptor.md#options)
* [serializers](vueadaptor.md#serializers)

### Accessors

* [defaults](vueadaptor.md#static-defaults)

### Methods

* [loadBlock](vueadaptor.md#loadblock)
* [parser](vueadaptor.md#parser)
* [readBlocks](vueadaptor.md#readblocks)
* [remover](vueadaptor.md#remover)
* [usageAnalyzer](vueadaptor.md#usageanalyzer)
* [writer](vueadaptor.md#writer)

## Constructors

###  constructor

\+ **new VueAdaptor**(`options`: object): *[VueAdaptor](vueadaptor.md)*

*Defined in [src/lib/adaptors/vue/index.ts:89](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L89)*

**Parameters:**

▪`Default value`  **options**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`serializers?` | ISerializerCollection.CtorOptions["collection"] | Collection instance with serializers to be used instead of the default |

**Returns:** *[VueAdaptor](vueadaptor.md)*

## Properties

###  name

• **name**: *string* = "vue"

*Defined in [src/lib/adaptors/vue/index.ts:88](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L88)*

___

###  options

• **options**: *object*

*Defined in [src/lib/adaptors/vue/index.ts:92](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L92)*

#### Type declaration:

* **serializers**? : *ISerializerCollection.CtorOptions["collection"]*

___

###  serializers

• **serializers**: *[Collection](../README.md#abstract-collection)*

*Defined in [src/lib/adaptors/vue/index.ts:89](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L89)*

## Accessors

### `Static` defaults

• **get defaults**(): *object*

*Defined in [src/lib/adaptors/vue/index.ts:452](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L452)*

**Returns:** *object*

* **abortOnError**: *boolean* = true

* **contentFormatter**: *[ContentFormatter](../README.md#contentformatter)* = new ContentFormatter() as IContentFormatter.ContentFormatter

* **explicitLang**: *boolean* = false

* **fileMatchLocale**: *boolean* = true

* **json**: *boolean* = true

* **lang**: *string* = "json"

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

###  loadBlock

▸ **loadBlock**(`block`: [ContentBlock](../README.md#contentblock), `opts`: [LoadBlockOptions](../README.md#loadblockoptions)): *Promise‹any›*

*Defined in [src/lib/adaptors/vue/index.ts:432](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L432)*

**Parameters:**

Name | Type |
------ | ------ |
`block` | [ContentBlock](../README.md#contentblock) |
`opts` | [LoadBlockOptions](../README.md#loadblockoptions) |

**Returns:** *Promise‹any›*

___

###  parser

▸ **parser**(...`__namedParameters`: [Array, [ItemsByLocaleOptions](../README.md#itemsbylocaleoptions) & [ReadBlocksOptions](../README.md#readblocksoptions)]): *Promise‹[ParserReturn](../README.md#parserreturn)›*

*Defined in [src/lib/adaptors/vue/index.ts:128](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L128)*

Definitions and merges data from i18n tags from Vue files.

**Parameters:**

Name | Type |
------ | ------ |
`...__namedParameters` | [Array, [ItemsByLocaleOptions](../README.md#itemsbylocaleoptions) & [ReadBlocksOptions](../README.md#readblocksoptions)] |

**Returns:** *Promise‹[ParserReturn](../README.md#parserreturn)›*

___

###  readBlocks

▸ **readBlocks**(`filepath`: string, `options`: [ReadBlocksOptions](../README.md#readblocksoptions)): *Promise‹object[]›*

*Defined in [src/lib/adaptors/vue/index.ts:414](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L414)*

Read Vue file and return the content blocks found in it.

The content of the blocks is not evaluated.

Fetches block content if the block has `src` attribute and filepath is
given

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`filepath` | string | - |
`options` | [ReadBlocksOptions](../README.md#readblocksoptions) | {} |

**Returns:** *Promise‹object[]›*

___

###  remover

▸ **remover**(...`__namedParameters`: [Array, undefined | [ISafeWriteOptions](../interfaces/isafewriteoptions.md) & [WriteOptionsBase](../README.md#writeoptionsbase)]): *Promise‹[WriterReturn](../README.md#writerreturn)›*

*Defined in [src/lib/adaptors/vue/index.ts:360](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L360)*

Removes i18n data from Vue files.

**Parameters:**

Name | Type |
------ | ------ |
`...__namedParameters` | [Array, undefined &#124; [ISafeWriteOptions](../interfaces/isafewriteoptions.md) & [WriteOptionsBase](../README.md#writeoptionsbase)] |

**Returns:** *Promise‹[WriterReturn](../README.md#writerreturn)›*

___

###  usageAnalyzer

▸ **usageAnalyzer**(...`__namedParameters`: [Array, object]): *[UsageAnalyzerReturn](../README.md#usageanalyzerreturn)*

*Defined in [src/lib/adaptors/vue/index.ts:109](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L109)*

Definition information on what translation keys are used in Vue files

**Parameters:**

Name | Type |
------ | ------ |
`...__namedParameters` | [Array, object] |

**Returns:** *[UsageAnalyzerReturn](../README.md#usageanalyzerreturn)*

___

###  writer

▸ **writer**(...`__namedParameters`: [Array, undefined | [WriteOptionsBase](../README.md#writeoptionsbase) & [ItemsByLocaleOptions](../README.md#itemsbylocaleoptions) & [ISafeWriteOptions](../interfaces/isafewriteoptions.md) & object & [ResolveItemsOptions](../README.md#resolveitemsoptions) & object]): *Promise‹[WriterReturn](../README.md#writerreturn)›*

*Defined in [src/lib/adaptors/vue/index.ts:170](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L170)*

Writes data from to i18n tags in Vue files.

**Parameters:**

Name | Type |
------ | ------ |
`...__namedParameters` | [Array, undefined &#124; [WriteOptionsBase](../README.md#writeoptionsbase) & [ItemsByLocaleOptions](../README.md#itemsbylocaleoptions) & [ISafeWriteOptions](../interfaces/isafewriteoptions.md) & object & [ResolveItemsOptions](../README.md#resolveitemsoptions) & object] |

**Returns:** *Promise‹[WriterReturn](../README.md#writerreturn)›*
