[i18n-util](../README.md) › [Validator](validator.md)

# Class: Validator

## Hierarchy

* [AbstractValidator](abstractvalidator.md)

  ↳ **Validator**

## Implements

* [Validator](../README.md#abstract-validator)
* [Validator](../README.md#abstract-validator)

## Index

### Constructors

* [constructor](validator.md#constructor)

### Properties

* [logger](validator.md#logger)
* [options](validator.md#options)

### Accessors

* [defaults](validator.md#static-defaults)

### Methods

* [validate](validator.md#validate)

## Constructors

###  constructor

\+ **new Validator**(`options`: [CtorOptions](../README.md#ctoroptions)): *[Validator](validator.md)*

*Inherited from [AbstractValidator](abstractvalidator.md).[constructor](abstractvalidator.md#constructor)*

*Overrides void*

*Defined in [src/lib/validator/index.ts:12](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/validator/index.ts#L12)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [CtorOptions](../README.md#ctoroptions) | {} |

**Returns:** *[Validator](validator.md)*

## Properties

###  logger

• **logger**: *function*

*Inherited from [AbstractValidator](abstractvalidator.md).[logger](abstractvalidator.md#logger)*

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

*Inherited from [AbstractValidator](abstractvalidator.md).[options](abstractvalidator.md#options)*

*Defined in [src/lib/validator/index.ts:14](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/validator/index.ts#L14)*

## Accessors

### `Static` defaults

• **get defaults**(): *[Defaults](../interfaces/defaults.md)*

*Inherited from [AbstractValidator](abstractvalidator.md).[defaults](abstractvalidator.md#static-defaults)*

*Defined in [src/lib/validator/index.ts:26](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/validator/index.ts#L26)*

**Returns:** *[Defaults](../interfaces/defaults.md)*

## Methods

###  validate

▸ **validate**(`schema`: any, `data`: any, `options`: [ValidateOptions](../README.md#validateoptions)): *void*

*Overrides [AbstractValidator](abstractvalidator.md).[validate](abstractvalidator.md#validate)*

*Defined in [src/lib/validator/index.ts:39](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/validator/index.ts#L39)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`schema` | any | - |
`data` | any | - |
`options` | [ValidateOptions](../README.md#validateoptions) | {} |

**Returns:** *void*
