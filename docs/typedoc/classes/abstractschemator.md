[i18n-util](../README.md) › [AbstractSchemator](abstractschemator.md)

# Class: AbstractSchemator

## Hierarchy

* **AbstractSchemator**

  ↳ [Schemator](schemator.md)

## Implements

* [Schemator](../README.md#abstract-schemator)

## Index

### Constructors

* [constructor](abstractschemator.md#constructor)

### Properties

* [logger](abstractschemator.md#logger)
* [options](abstractschemator.md#options)

### Accessors

* [defaults](abstractschemator.md#static-defaults)

### Methods

* [deserialize](abstractschemator.md#deserialize)
* [generate](abstractschemator.md#generate)
* [serialize](abstractschemator.md#serialize)

## Constructors

###  constructor

\+ **new AbstractSchemator**(`options`: [CtorOptions](../README.md#ctoroptions)): *[AbstractSchemator](abstractschemator.md)*

*Defined in [src/lib/schemator/index.ts:13](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/index.ts#L13)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [CtorOptions](../README.md#ctoroptions) | {} |

**Returns:** *[AbstractSchemator](abstractschemator.md)*

## Properties

###  logger

• **logger**: *function*

*Defined in [src/lib/schemator/index.ts:13](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/index.ts#L13)*

#### Type declaration:

▸ (`msg`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string |

___

###  options

• **options**: *[CtorOptions](../README.md#ctoroptions)*

*Defined in [src/lib/schemator/index.ts:15](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/index.ts#L15)*

## Accessors

### `Static` defaults

• **get defaults**(): *[Defaults](../interfaces/defaults.md)*

*Defined in [src/lib/schemator/index.ts:36](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/index.ts#L36)*

**Returns:** *[Defaults](../interfaces/defaults.md)*

## Methods

###  deserialize

▸ **deserialize**(`schema`: string, `options?`: [DeserializeOptions](../README.md#deserializeoptions)): *any*

*Defined in [src/lib/schemator/index.ts:32](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/index.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | string |
`options?` | [DeserializeOptions](../README.md#deserializeoptions) |

**Returns:** *any*

___

###  generate

▸ **generate**(`data`: any, `options?`: [GenerateOptions](../README.md#generateoptions)): *any*

*Defined in [src/lib/schemator/index.ts:23](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/index.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |
`options?` | [GenerateOptions](../README.md#generateoptions) |

**Returns:** *any*

___

###  serialize

▸ **serialize**(`schema`: any, `options?`: [SerializeOptions](../README.md#serializeoptions)): *string | Buffer*

*Defined in [src/lib/schemator/index.ts:26](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/index.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | any |
`options?` | [SerializeOptions](../README.md#serializeoptions) |

**Returns:** *string | Buffer*
