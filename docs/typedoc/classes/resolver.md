[i18n-util](../README.md) › [Resolver](resolver.md)

# Class: Resolver

Base Resolver class

## Hierarchy

* **Resolver**

  ↳ [AbstractLocaleResolver](abstractlocaleresolver.md)

  ↳ [AbstractValueResolver](abstractvalueresolver.md)

  ↳ [AbstractKeyResolver](abstractkeyresolver.md)

  ↳ [AbstractPathResolver](abstractpathresolver.md)

## Implements

* [Resolver](../README.md#abstract-resolver)

## Index

### Constructors

* [constructor](resolver.md#constructor)

### Properties

* [logger](resolver.md#logger)
* [options](resolver.md#options)

### Accessors

* [defaults](resolver.md#static-defaults)

### Methods

* [resolve](resolver.md#resolve)

## Constructors

###  constructor

\+ **new Resolver**(`options`: [ResolveOptions](../README.md#resolveoptions)): *[Resolver](resolver.md)*

*Defined in [src/lib/resolver/resolver.ts:8](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/resolver.ts#L8)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [ResolveOptions](../README.md#resolveoptions) | {} |

**Returns:** *[Resolver](resolver.md)*

## Properties

###  logger

• **logger**: *function*

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

*Defined in [src/lib/resolver/resolver.ts:10](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/resolver.ts#L10)*

## Accessors

### `Static` defaults

• **get defaults**(): *object*

*Defined in [src/lib/resolver/resolver.ts:22](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/resolver.ts#L22)*

**Returns:** *object*

* **logger**: *Debugger* = resolverDebug

## Methods

###  resolve

▸ **resolve**(`inputs`: any[], ...`args`: any[]): *any[] | Promise‹any[]›*

*Defined in [src/lib/resolver/resolver.ts:18](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/resolver.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`inputs` | any[] |
`...args` | any[] |

**Returns:** *any[] | Promise‹any[]›*
