[i18n-util](../README.md) › [AbstractValueResolver](abstractvalueresolver.md)

# Class: AbstractValueResolver

## Hierarchy

* [Resolver](resolver.md)

  ↳ **AbstractValueResolver**

  ↳ [NullValueResolver](nullvalueresolver.md)

  ↳ [GlobValueResolver](globvalueresolver.md)

## Implements

* [Resolver](../README.md#abstract-resolver)
* [Resolver](../README.md#abstract-resolver)

## Index

### Constructors

* [constructor](abstractvalueresolver.md#constructor)

### Properties

* [logger](abstractvalueresolver.md#logger)
* [options](abstractvalueresolver.md#options)

### Accessors

* [defaults](abstractvalueresolver.md#static-defaults)

### Methods

* [resolve](abstractvalueresolver.md#resolve)

## Constructors

###  constructor

\+ **new AbstractValueResolver**(`options`: [ResolveOptions](../README.md#resolveoptions)): *[AbstractValueResolver](abstractvalueresolver.md)*

*Inherited from [Resolver](resolver.md).[constructor](resolver.md#constructor)*

*Overrides void*

*Defined in [src/lib/resolver/resolver.ts:8](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/resolver.ts#L8)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [ResolveOptions](../README.md#resolveoptions) | {} |

**Returns:** *[AbstractValueResolver](abstractvalueresolver.md)*

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

• **options**: *[ResolveOptions](../README.md#resolveoptions)*

*Inherited from [Resolver](resolver.md).[options](resolver.md#options)*

*Defined in [src/lib/resolver/resolver.ts:10](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/resolver.ts#L10)*

## Accessors

### `Static` defaults

• **get defaults**(): *object*

*Overrides [Resolver](resolver.md).[defaults](resolver.md#static-defaults)*

*Defined in [src/lib/resolver/value.ts:18](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/value.ts#L18)*

**Returns:** *object*

* **logger**: *Debugger* = valueResolverDebug

## Methods

###  resolve

▸ **resolve**(`inputs`: any[], ...`args`: any[]): *any[] | Promise‹any[]›*

*Inherited from [Resolver](resolver.md).[resolve](resolver.md#resolve)*

*Defined in [src/lib/resolver/resolver.ts:18](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/resolver.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`inputs` | any[] |
`...args` | any[] |

**Returns:** *any[] | Promise‹any[]›*
