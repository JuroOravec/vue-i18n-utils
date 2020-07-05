[i18n-util](../README.md) › [Schemator](schemator.md)

# Class: Schemator

## Hierarchy

* [AbstractSchemator](abstractschemator.md)

  ↳ **Schemator**

## Implements

* [Schemator](../README.md#abstract-schemator)
* [Schemator](../README.md#abstract-schemator)

## Index

### Constructors

* [constructor](schemator.md#constructor)

### Properties

* [logger](schemator.md#logger)
* [options](schemator.md#options)

### Accessors

* [defaults](schemator.md#static-defaults)
* [stringTypes](schemator.md#static-stringtypes)
* [titledTypes](schemator.md#static-titledtypes)

### Methods

* [deserialize](schemator.md#deserialize)
* [generate](schemator.md#generate)
* [serialize](schemator.md#serialize)

## Constructors

###  constructor

\+ **new Schemator**(`options`: [CtorOptions](../README.md#ctoroptions)): *[Schemator](schemator.md)*

*Inherited from [AbstractSchemator](abstractschemator.md).[constructor](abstractschemator.md#constructor)*

*Overrides void*

*Defined in [src/lib/schemator/index.ts:13](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/index.ts#L13)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [CtorOptions](../README.md#ctoroptions) | {} |

**Returns:** *[Schemator](schemator.md)*

## Properties

###  logger

• **logger**: *function*

*Inherited from [AbstractSchemator](abstractschemator.md).[logger](abstractschemator.md#logger)*

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

*Inherited from [AbstractSchemator](abstractschemator.md).[options](abstractschemator.md#options)*

*Defined in [src/lib/schemator/index.ts:15](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/index.ts#L15)*

## Accessors

### `Static` defaults

• **get defaults**(): *Required‹[CtorOptions](../README.md#ctoroptions)›*

*Overrides [AbstractSchemator](abstractschemator.md).[defaults](abstractschemator.md#static-defaults)*

*Defined in [src/lib/schemator/index.ts:172](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/index.ts#L172)*

**Returns:** *Required‹[CtorOptions](../README.md#ctoroptions)›*

___

### `Static` stringTypes

• **get stringTypes**(): *"clickhouse" | "bigquery" | "json" | "generic" | "mongoose" | "mysql"[]*

*Defined in [src/lib/schemator/index.ts:167](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/index.ts#L167)*

**Returns:** *"clickhouse" | "bigquery" | "json" | "generic" | "mongoose" | "mysql"[]*

___

### `Static` titledTypes

• **get titledTypes**(): *"clickhouse" | "bigquery" | "json" | "generic" | "mongoose" | "mysql"[]*

*Defined in [src/lib/schemator/index.ts:162](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/index.ts#L162)*

**Returns:** *"clickhouse" | "bigquery" | "json" | "generic" | "mongoose" | "mysql"[]*

## Methods

###  deserialize

▸ **deserialize**(`serializedSchema`: string, `options`: [SerializeOptions](../README.md#serializeoptions)): *any*

*Overrides [AbstractSchemator](abstractschemator.md).[deserialize](abstractschemator.md#deserialize)*

*Defined in [src/lib/schemator/index.ts:146](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/index.ts#L146)*

The opposite of serialize. Convert schema from string to usable form.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`serializedSchema` | string | - |
`options` | [SerializeOptions](../README.md#serializeoptions) | {} |

**Returns:** *any*

___

###  generate

▸ **generate**(`data`: any, `options`: [GenerateOptions](../README.md#generateoptions)): *any*

*Overrides [AbstractSchemator](abstractschemator.md).[generate](abstractschemator.md#generate)*

*Defined in [src/lib/schemator/index.ts:48](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/index.ts#L48)*

Create a schema that describes the provided data.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`data` | any | - |
`options` | [GenerateOptions](../README.md#generateoptions) | {} |

**Returns:** *any*

___

###  serialize

▸ **serialize**(`schema`: any, `options`: [SerializeOptions](../README.md#serializeoptions)): *string*

*Overrides [AbstractSchemator](abstractschemator.md).[serialize](abstractschemator.md#serialize)*

*Defined in [src/lib/schemator/index.ts:130](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/index.ts#L130)*

Create a schema that describes the provided data, and ensure the result is
serialized.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`schema` | any | - |
`options` | [SerializeOptions](../README.md#serializeoptions) | {} |

**Returns:** *string*
