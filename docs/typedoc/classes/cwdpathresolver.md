[i18n-util](../README.md) › [CwdPathResolver](cwdpathresolver.md)

# Class: CwdPathResolver

Path resolver that resolves paths to current working directory (CWD).

CWD can be overriden by providing `cwd` property to constructor or
`resolver` options.

## Hierarchy

  ↳ [AbstractPathResolver](abstractpathresolver.md)

  ↳ **CwdPathResolver**

## Implements

* [Resolver](../README.md#abstract-resolver)
* [Resolver](../README.md#abstract-resolver)
* [Resolver](../README.md#abstract-resolver)

## Index

### Constructors

* [constructor](cwdpathresolver.md#constructor)

### Properties

* [logger](cwdpathresolver.md#logger)
* [options](cwdpathresolver.md#options)

### Accessors

* [defaults](cwdpathresolver.md#static-defaults)

### Methods

* [resolve](cwdpathresolver.md#resolve)

## Constructors

###  constructor

\+ **new CwdPathResolver**(`options`: [CtorOptions](../README.md#ctoroptions)): *[CwdPathResolver](cwdpathresolver.md)*

*Overrides [Resolver](resolver.md).[constructor](resolver.md#constructor)*

*Defined in [src/lib/resolver/path.ts:54](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/path.ts#L54)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [CtorOptions](../README.md#ctoroptions) | {} |

**Returns:** *[CwdPathResolver](cwdpathresolver.md)*

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

*Defined in [src/lib/resolver/path.ts:55](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/path.ts#L55)*

## Accessors

### `Static` defaults

• **get defaults**(): *object*

*Overrides [AbstractPathResolver](abstractpathresolver.md).[defaults](abstractpathresolver.md#static-defaults)*

*Defined in [src/lib/resolver/path.ts:74](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/path.ts#L74)*

**Returns:** *object*

* **cwd**: *string* = process.cwd()

* **logger**: *Debugger* = cwdPathResolverDebug

## Methods

###  resolve

▸ **resolve**(`paths`: string[], `options`: [ResolveOptions](../README.md#resolveoptions)): *string[]*

*Overrides [Resolver](resolver.md).[resolve](resolver.md#resolve)*

*Defined in [src/lib/resolver/path.ts:59](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/path.ts#L59)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`paths` | string[] | - |
`options` | [ResolveOptions](../README.md#resolveoptions) | {} |

**Returns:** *string[]*
