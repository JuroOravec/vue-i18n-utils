[i18n-util](../README.md) › [GlobPathResolver](globpathresolver.md)

# Class: GlobPathResolver

Path resolver that resolves paths as globs, relative to current working
directory.

Glob options can be passed to constructor or `resolver` options.

## Hierarchy

  ↳ [AbstractPathResolver](abstractpathresolver.md)

  ↳ **GlobPathResolver**

## Implements

* [Resolver](../README.md#abstract-resolver)
* [Resolver](../README.md#abstract-resolver)
* [Resolver](../README.md#abstract-resolver)

## Index

### Constructors

* [constructor](globpathresolver.md#constructor)

### Properties

* [logger](globpathresolver.md#logger)
* [options](globpathresolver.md#options)

### Accessors

* [defaults](globpathresolver.md#static-defaults)

### Methods

* [resolve](globpathresolver.md#resolve)
* [join](globpathresolver.md#static-join)

## Constructors

###  constructor

\+ **new GlobPathResolver**(`options`: [CtorOptions](../README.md#ctoroptions)): *[GlobPathResolver](globpathresolver.md)*

*Overrides [Resolver](resolver.md).[constructor](resolver.md#constructor)*

*Defined in [src/lib/resolver/path.ts:90](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/path.ts#L90)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [CtorOptions](../README.md#ctoroptions) | {} |

**Returns:** *[GlobPathResolver](globpathresolver.md)*

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

*Defined in [src/lib/resolver/path.ts:91](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/path.ts#L91)*

## Accessors

### `Static` defaults

• **get defaults**(): *object*

*Overrides [AbstractPathResolver](abstractpathresolver.md).[defaults](abstractpathresolver.md#static-defaults)*

*Defined in [src/lib/resolver/path.ts:124](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/path.ts#L124)*

**Returns:** *object*

* **cwd**: *string* = process.cwd()

* **logger**: *Debugger* = globPathResolverDebug

## Methods

###  resolve

▸ **resolve**(`globs`: string[], `options`: [ResolveOptions](../README.md#resolveoptions)): *Promise‹string[]›*

*Overrides [Resolver](resolver.md).[resolve](resolver.md#resolve)*

*Defined in [src/lib/resolver/path.ts:95](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/path.ts#L95)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`globs` | string[] | - |
`options` | [ResolveOptions](../README.md#resolveoptions) | {} |

**Returns:** *Promise‹string[]›*

___

### `Static` join

▸ **join**(`globs`: string[]): *string*

*Defined in [src/lib/resolver/path.ts:120](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/path.ts#L120)*

Join globs into a single pattern

**Parameters:**

Name | Type |
------ | ------ |
`globs` | string[] |

**Returns:** *string*
