[i18n-util](../README.md) › [GlobValueResolver](globvalueresolver.md)

# Class: GlobValueResolver

Value resolver that resolves values as globs.

Glob options can be passed to constructor or `resolver` options.

## Hierarchy

  ↳ [AbstractValueResolver](abstractvalueresolver.md)

  ↳ **GlobValueResolver**

  ↳ [EvalGlobValueResolver](evalglobvalueresolver.md)

## Implements

* [Resolver](../README.md#abstract-resolver)
* [Resolver](../README.md#abstract-resolver)
* [Resolver](../README.md#abstract-resolver)

## Index

### Constructors

* [constructor](globvalueresolver.md#constructor)

### Properties

* [logger](globvalueresolver.md#logger)
* [options](globvalueresolver.md#options)

### Accessors

* [defaults](globvalueresolver.md#static-defaults)

### Methods

* [_resolve](globvalueresolver.md#_resolve)
* [resolve](globvalueresolver.md#resolve)

## Constructors

###  constructor

\+ **new GlobValueResolver**(`options`: [CtorOptions](../README.md#ctoroptions)): *[GlobValueResolver](globvalueresolver.md)*

*Overrides [Resolver](resolver.md).[constructor](resolver.md#constructor)*

*Defined in [src/lib/resolver/value.ts:54](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/value.ts#L54)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [CtorOptions](../README.md#ctoroptions) | {} |

**Returns:** *[GlobValueResolver](globvalueresolver.md)*

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

*Defined in [src/lib/resolver/value.ts:55](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/value.ts#L55)*

## Accessors

### `Static` defaults

• **get defaults**(): *object*

*Overrides [AbstractValueResolver](abstractvalueresolver.md).[defaults](abstractvalueresolver.md#static-defaults)*

*Defined in [src/lib/resolver/value.ts:106](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/value.ts#L106)*

**Returns:** *object*

* **logger**: *Debugger* = globValueResolverDebug

## Methods

###  _resolve

▸ **_resolve**<**T**>(`globs`: string[], `items`: T[], `options`: [ResolveOptions](../README.md#resolveoptions)): *string[]*

*Defined in [src/lib/resolver/value.ts:76](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/value.ts#L76)*

**Type parameters:**

▪ **T**: *[Item](../README.md#item)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`globs` | string[] | - |
`items` | T[] | - |
`options` | [ResolveOptions](../README.md#resolveoptions) | {} |

**Returns:** *string[]*

___

###  resolve

▸ **resolve**<**T**>(`globs`: string[], `items`: T[], `options`: [ResolveOptions](../README.md#resolveoptions)): *string[]*

*Overrides [Resolver](resolver.md).[resolve](resolver.md#resolve)*

*Defined in [src/lib/resolver/value.ts:59](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/value.ts#L59)*

**Type parameters:**

▪ **T**: *[Item](../README.md#item)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`globs` | string[] | - |
`items` | T[] | - |
`options` | [ResolveOptions](../README.md#resolveoptions) | {} |

**Returns:** *string[]*
