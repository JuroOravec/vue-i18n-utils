[i18n-util](../README.md) › [AbstractValidator](abstractvalidator.md)

# Class: AbstractValidator

## Hierarchy

* **AbstractValidator**

  ↳ [Validator](validator.md)

## Implements

* [Validator](../README.md#abstract-validator)

## Index

### Constructors

* [constructor](abstractvalidator.md#constructor)

### Properties

* [logger](abstractvalidator.md#logger)
* [options](abstractvalidator.md#options)

### Accessors

* [defaults](abstractvalidator.md#static-defaults)

### Methods

* [validate](abstractvalidator.md#validate)

## Constructors

###  constructor

\+ **new AbstractValidator**(`options`: [CtorOptions](../README.md#ctoroptions)): *[AbstractValidator](abstractvalidator.md)*

*Defined in [src/lib/validator/index.ts:12](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/validator/index.ts#L12)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [CtorOptions](../README.md#ctoroptions) | {} |

**Returns:** *[AbstractValidator](abstractvalidator.md)*

## Properties

###  logger

• **logger**: *function*

*Defined in [src/lib/validator/index.ts:12](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/validator/index.ts#L12)*

#### Type declaration:

▸ (`msg`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string |

___

###  options

• **options**: *[CtorOptions](../README.md#ctoroptions)*

*Defined in [src/lib/validator/index.ts:14](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/validator/index.ts#L14)*

## Accessors

### `Static` defaults

• **get defaults**(): *[Defaults](../interfaces/defaults.md)*

*Defined in [src/lib/validator/index.ts:26](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/validator/index.ts#L26)*

**Returns:** *[Defaults](../interfaces/defaults.md)*

## Methods

###  validate

▸ **validate**(`schema`: any, `data`: any, `options?`: [ValidateOptions](../README.md#validateoptions)): *any*

*Defined in [src/lib/validator/index.ts:22](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/validator/index.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | any |
`data` | any |
`options?` | [ValidateOptions](../README.md#validateoptions) |

**Returns:** *any*
