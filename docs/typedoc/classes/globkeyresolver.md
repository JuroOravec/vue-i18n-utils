[i18n-util](../README.md) › [GlobKeyResolver](globkeyresolver.md)

# Class: GlobKeyResolver

Key resolver that resolves keys as globs.

Glob options can be passed to constructor or `resolver` options.

## Hierarchy

  ↳ [AbstractKeyResolver](abstractkeyresolver.md)

  ↳ **GlobKeyResolver**

## Implements

* [Resolver](../README.md#abstract-resolver)
* [Resolver](../README.md#abstract-resolver)
* [Resolver](../README.md#abstract-resolver)

## Index

### Constructors

* [constructor](globkeyresolver.md#constructor)

### Properties

* [logger](globkeyresolver.md#logger)
* [options](globkeyresolver.md#options)

### Accessors

* [defaults](globkeyresolver.md#static-defaults)

### Methods

* [_resolve](globkeyresolver.md#private-_resolve)
* [resolve](globkeyresolver.md#resolve)

## Constructors

###  constructor

\+ **new GlobKeyResolver**(`options`: [CtorOptions](../README.md#ctoroptions)): *[GlobKeyResolver](globkeyresolver.md)*

*Overrides [Resolver](resolver.md).[constructor](resolver.md#constructor)*

*Defined in [src/lib/resolver/key.ts:60](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/key.ts#L60)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [CtorOptions](../README.md#ctoroptions) | {} |

**Returns:** *[GlobKeyResolver](globkeyresolver.md)*

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

*Defined in [src/lib/resolver/key.ts:61](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/key.ts#L61)*

## Accessors

### `Static` defaults

• **get defaults**(): *object*

*Overrides [AbstractKeyResolver](abstractkeyresolver.md).[defaults](abstractkeyresolver.md#static-defaults)*

*Defined in [src/lib/resolver/key.ts:140](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/key.ts#L140)*

**Returns:** *object*

* **logger**: *Debugger* = globKeyResolverDebug

* **separator**: *string* = "."

## Methods

### `Private` _resolve

▸ **_resolve**<**T**>(`globs`: string[], `items`: T[], `options`: [ResolveOptions](../README.md#resolveoptions)): *object*

*Defined in [src/lib/resolver/key.ts:84](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/key.ts#L84)*

**Type parameters:**

▪ **T**: *[Item](../README.md#item)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`globs` | string[] | - |
`items` | T[] | - |
`options` | [ResolveOptions](../README.md#resolveoptions) | {} |

**Returns:** *object*

* **keys**: *T["locale"][]* = matchedKeys

* **paths**: *string[][]* = matchedPaths

___

###  resolve

▸ **resolve**<**T**>(`globs`: string[], `items`: T[], `options`: [ResolveOptions](../README.md#resolveoptions)): *string[][]*

*Overrides [Resolver](resolver.md).[resolve](resolver.md#resolve)*

*Defined in [src/lib/resolver/key.ts:65](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/key.ts#L65)*

**Type parameters:**

▪ **T**: *[Item](../README.md#item)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`globs` | string[] | - |
`items` | T[] | - |
`options` | [ResolveOptions](../README.md#resolveoptions) | {} |

**Returns:** *string[][]*
