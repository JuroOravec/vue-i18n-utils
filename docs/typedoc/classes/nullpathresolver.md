[i18n-util](../README.md) › [NullPathResolver](nullpathresolver.md)

# Class: NullPathResolver

Path resolver that simply returns paths back.

## Hierarchy

  ↳ [AbstractPathResolver](abstractpathresolver.md)

  ↳ **NullPathResolver**

## Implements

* [Resolver](../README.md#abstract-resolver)
* [Resolver](../README.md#abstract-resolver)
* [Resolver](../README.md#abstract-resolver)

## Index

### Constructors

* [constructor](nullpathresolver.md#constructor)

### Properties

* [logger](nullpathresolver.md#logger)
* [options](nullpathresolver.md#options)

### Accessors

* [defaults](nullpathresolver.md#static-defaults)

### Methods

* [resolve](nullpathresolver.md#resolve)

## Constructors

###  constructor

\+ **new NullPathResolver**(`options`: [CtorOptions](../README.md#ctoroptions)): *[NullPathResolver](nullpathresolver.md)*

*Overrides [Resolver](resolver.md).[constructor](resolver.md#constructor)*

*Defined in [src/lib/resolver/path.ts:28](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/path.ts#L28)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [CtorOptions](../README.md#ctoroptions) | {} |

**Returns:** *[NullPathResolver](nullpathresolver.md)*

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

*Defined in [src/lib/resolver/path.ts:29](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/path.ts#L29)*

## Accessors

### `Static` defaults

• **get defaults**(): *object*

*Overrides [AbstractPathResolver](abstractpathresolver.md).[defaults](abstractpathresolver.md#static-defaults)*

*Defined in [src/lib/resolver/path.ts:39](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/path.ts#L39)*

**Returns:** *object*

* **logger**: *Debugger* = nullPathResolverDebug

## Methods

###  resolve

▸ **resolve**<**T**>(`paths`: T[], `options`: object): *T[]*

*Overrides [Resolver](resolver.md).[resolve](resolver.md#resolve)*

*Defined in [src/lib/resolver/path.ts:33](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/path.ts#L33)*

**Type parameters:**

▪ **T**: *string*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`paths` | T[] | - |
`options` | object | {} |

**Returns:** *T[]*
