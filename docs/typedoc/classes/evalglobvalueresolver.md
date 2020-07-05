[i18n-util](../README.md) › [EvalGlobValueResolver](evalglobvalueresolver.md)

# Class: EvalGlobValueResolver

Value resolver that resolves values either as globs, or evaluates a string
as JS if value starts with `'!js:'` (e.g. `'!js:null'` evaluates to `null`)

Glob options can be passed to constructor or `resolver` options.

## Hierarchy

  ↳ [GlobValueResolver](globvalueresolver.md)

  ↳ **EvalGlobValueResolver**

## Implements

* [Resolver](../README.md#abstract-resolver)
* [Resolver](../README.md#abstract-resolver)
* [Resolver](../README.md#abstract-resolver)
* [Resolver](../README.md#abstract-resolver)

## Index

### Constructors

* [constructor](evalglobvalueresolver.md#constructor)

### Properties

* [logger](evalglobvalueresolver.md#logger)
* [options](evalglobvalueresolver.md#options)

### Accessors

* [defaults](evalglobvalueresolver.md#static-defaults)

### Methods

* [_resolve](evalglobvalueresolver.md#_resolve)
* [resolve](evalglobvalueresolver.md#resolve)

## Constructors

###  constructor

\+ **new EvalGlobValueResolver**(`options`: [CtorOptions](../README.md#ctoroptions)): *[EvalGlobValueResolver](evalglobvalueresolver.md)*

*Inherited from [GlobValueResolver](globvalueresolver.md).[constructor](globvalueresolver.md#constructor)*

*Overrides [Resolver](resolver.md).[constructor](resolver.md#constructor)*

*Defined in [src/lib/resolver/value.ts:54](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/value.ts#L54)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [CtorOptions](../README.md#ctoroptions) | {} |

**Returns:** *[EvalGlobValueResolver](evalglobvalueresolver.md)*

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

*Inherited from [GlobValueResolver](globvalueresolver.md).[options](globvalueresolver.md#options)*

*Overrides [Resolver](resolver.md).[options](resolver.md#options)*

*Defined in [src/lib/resolver/value.ts:55](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/value.ts#L55)*

## Accessors

### `Static` defaults

• **get defaults**(): *object*

*Inherited from [GlobValueResolver](globvalueresolver.md).[defaults](globvalueresolver.md#static-defaults)*

*Overrides [AbstractValueResolver](abstractvalueresolver.md).[defaults](abstractvalueresolver.md#static-defaults)*

*Defined in [src/lib/resolver/value.ts:106](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/value.ts#L106)*

**Returns:** *object*

* **logger**: *Debugger* = globValueResolverDebug

## Methods

###  _resolve

▸ **_resolve**<**T**>(`globs`: string[], `items`: T[], `options`: [ResolveOptions](../README.md#resolveoptions)): *string[]*

*Inherited from [GlobValueResolver](globvalueresolver.md).[_resolve](globvalueresolver.md#_resolve)*

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

▸ **resolve**<**T**>(`globs`: string[], `items`: T[], `options`: [ResolveOptions](../README.md#resolveoptions)): *any[]*

*Overrides [GlobValueResolver](globvalueresolver.md).[resolve](globvalueresolver.md#resolve)*

*Defined in [src/lib/resolver/value.ts:122](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/value.ts#L122)*

**Type parameters:**

▪ **T**: *[Item](../README.md#item)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`globs` | string[] | - |
`items` | T[] | - |
`options` | [ResolveOptions](../README.md#resolveoptions) | {} |

**Returns:** *any[]*
