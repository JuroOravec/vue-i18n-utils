[i18n-util](../README.md) › [NullValueResolver](nullvalueresolver.md)

# Class: NullValueResolver

Value resolver that simply returns values back.

## Hierarchy

  ↳ [AbstractValueResolver](abstractvalueresolver.md)

  ↳ **NullValueResolver**

## Implements

* [Resolver](../README.md#abstract-resolver)
* [Resolver](../README.md#abstract-resolver)
* [Resolver](../README.md#abstract-resolver)

## Index

### Constructors

* [constructor](nullvalueresolver.md#constructor)

### Properties

* [logger](nullvalueresolver.md#logger)
* [options](nullvalueresolver.md#options)

### Accessors

* [defaults](nullvalueresolver.md#static-defaults)

### Methods

* [resolve](nullvalueresolver.md#resolve)

## Constructors

###  constructor

\+ **new NullValueResolver**(`options`: [CtorOptions](../README.md#ctoroptions)): *[NullValueResolver](nullvalueresolver.md)*

*Overrides [Resolver](resolver.md).[constructor](resolver.md#constructor)*

*Defined in [src/lib/resolver/value.ts:30](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/value.ts#L30)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [CtorOptions](../README.md#ctoroptions) | {} |

**Returns:** *[NullValueResolver](nullvalueresolver.md)*

## Properties

###  logger

• **logger**: *function*

*Inherited from [Resolver](resolver.md).[logger](resolver.md#logger)*

*Defined in [src/lib/resolver/resolver.ts:8](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/resolver.ts#L8)*

#### Type declaration:

▸ (`msg`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string |

___

###  options

• **options**: *[CtorOptions](../README.md#ctoroptions)*

*Overrides [Resolver](resolver.md).[options](resolver.md#options)*

*Defined in [src/lib/resolver/value.ts:31](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/value.ts#L31)*

## Accessors

### `Static` defaults

• **get defaults**(): *object*

*Overrides [AbstractValueResolver](abstractvalueresolver.md).[defaults](abstractvalueresolver.md#static-defaults)*

*Defined in [src/lib/resolver/value.ts:40](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/value.ts#L40)*

**Returns:** *object*

* **logger**: *Debugger* = nullValueResolverDebug

## Methods

###  resolve

▸ **resolve**<**T**>(`values`: T[], `items`: [Item](../README.md#item)[], `options`: object): *T[]*

*Overrides [Resolver](resolver.md).[resolve](resolver.md#resolve)*

*Defined in [src/lib/resolver/value.ts:35](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/value.ts#L35)*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`values` | T[] | - |
`items` | [Item](../README.md#item)[] | - |
`options` | object | {} |

**Returns:** *T[]*
