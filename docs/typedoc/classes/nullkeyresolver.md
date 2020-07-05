[i18n-util](../README.md) › [NullKeyResolver](nullkeyresolver.md)

# Class: NullKeyResolver

Key resolver that simply returns keys back.

## Hierarchy

  ↳ [AbstractKeyResolver](abstractkeyresolver.md)

  ↳ **NullKeyResolver**

## Implements

* [Resolver](../README.md#abstract-resolver)
* [Resolver](../README.md#abstract-resolver)
* [Resolver](../README.md#abstract-resolver)

## Index

### Constructors

* [constructor](nullkeyresolver.md#constructor)

### Properties

* [logger](nullkeyresolver.md#logger)
* [options](nullkeyresolver.md#options)

### Accessors

* [defaults](nullkeyresolver.md#static-defaults)

### Methods

* [resolve](nullkeyresolver.md#resolve)

## Constructors

###  constructor

\+ **new NullKeyResolver**(`options`: [CtorOptions](../README.md#ctoroptions)): *[NullKeyResolver](nullkeyresolver.md)*

*Overrides [Resolver](resolver.md).[constructor](resolver.md#constructor)*

*Defined in [src/lib/resolver/key.ts:32](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/key.ts#L32)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [CtorOptions](../README.md#ctoroptions) | {} |

**Returns:** *[NullKeyResolver](nullkeyresolver.md)*

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

*Defined in [src/lib/resolver/key.ts:33](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/key.ts#L33)*

## Accessors

### `Static` defaults

• **get defaults**(): *object*

*Overrides [AbstractKeyResolver](abstractkeyresolver.md).[defaults](abstractkeyresolver.md#static-defaults)*

*Defined in [src/lib/resolver/key.ts:46](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/key.ts#L46)*

**Returns:** *object*

* **logger**: *Debugger* = nullKeyResolverDebug

## Methods

###  resolve

▸ **resolve**<**T**>(`keys`: T[], `items`: [Item](../README.md#item)[], `options`: object): *T[]*

*Overrides [Resolver](resolver.md).[resolve](resolver.md#resolve)*

*Defined in [src/lib/resolver/key.ts:37](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/key.ts#L37)*

**Type parameters:**

▪ **T**: *string[]*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`keys` | T[] | - |
`items` | [Item](../README.md#item)[] | - |
`options` | object | {} |

**Returns:** *T[]*
