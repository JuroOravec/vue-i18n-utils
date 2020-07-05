[i18n-util](../README.md) › [AbstractKeyResolver](abstractkeyresolver.md)

# Class: AbstractKeyResolver

## Hierarchy

* [Resolver](resolver.md)

  ↳ **AbstractKeyResolver**

  ↳ [NullKeyResolver](nullkeyresolver.md)

  ↳ [GlobKeyResolver](globkeyresolver.md)

## Implements

* [Resolver](../README.md#abstract-resolver)
* [Resolver](../README.md#abstract-resolver)

## Index

### Constructors

* [constructor](abstractkeyresolver.md#constructor)

### Properties

* [logger](abstractkeyresolver.md#logger)
* [options](abstractkeyresolver.md#options)

### Accessors

* [defaults](abstractkeyresolver.md#static-defaults)

### Methods

* [resolve](abstractkeyresolver.md#resolve)

## Constructors

###  constructor

\+ **new AbstractKeyResolver**(`options`: [ResolveOptions](../README.md#resolveoptions)): *[AbstractKeyResolver](abstractkeyresolver.md)*

*Inherited from [Resolver](resolver.md).[constructor](resolver.md#constructor)*

*Overrides void*

*Defined in [src/lib/resolver/resolver.ts:8](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/resolver.ts#L8)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [ResolveOptions](../README.md#resolveoptions) | {} |

**Returns:** *[AbstractKeyResolver](abstractkeyresolver.md)*

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

*Defined in [src/lib/resolver/key.ts:20](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/key.ts#L20)*

**Returns:** *object*

* **logger**: *Debugger* = keyResolverDebug

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
