[i18n-util](../README.md) › [NullLocaleResolver](nulllocaleresolver.md)

# Class: NullLocaleResolver

Locale resolver that simply returns locales back.

## Hierarchy

  ↳ [AbstractLocaleResolver](abstractlocaleresolver.md)

  ↳ **NullLocaleResolver**

## Implements

* [Resolver](../README.md#abstract-resolver)
* [Resolver](../README.md#abstract-resolver)
* [Resolver](../README.md#abstract-resolver)

## Index

### Constructors

* [constructor](nulllocaleresolver.md#constructor)

### Properties

* [logger](nulllocaleresolver.md#logger)
* [options](nulllocaleresolver.md#options)

### Accessors

* [defaults](nulllocaleresolver.md#static-defaults)

### Methods

* [resolve](nulllocaleresolver.md#resolve)

## Constructors

###  constructor

\+ **new NullLocaleResolver**(`options`: [CtorOptions](../README.md#ctoroptions)): *[NullLocaleResolver](nulllocaleresolver.md)*

*Overrides [Resolver](resolver.md).[constructor](resolver.md#constructor)*

*Defined in [src/lib/resolver/locale.ts:29](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/locale.ts#L29)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [CtorOptions](../README.md#ctoroptions) | {} |

**Returns:** *[NullLocaleResolver](nulllocaleresolver.md)*

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

*Defined in [src/lib/resolver/locale.ts:30](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/locale.ts#L30)*

## Accessors

### `Static` defaults

• **get defaults**(): *object*

*Overrides [AbstractLocaleResolver](abstractlocaleresolver.md).[defaults](abstractlocaleresolver.md#static-defaults)*

*Defined in [src/lib/resolver/locale.ts:39](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/locale.ts#L39)*

**Returns:** *object*

* **logger**: *Debugger* = nullLocaleResolverDebug

## Methods

###  resolve

▸ **resolve**<**T**>(`locales`: T[], `items`: any[], `options`: object): *T[]*

*Overrides [Resolver](resolver.md).[resolve](resolver.md#resolve)*

*Defined in [src/lib/resolver/locale.ts:34](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/locale.ts#L34)*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`locales` | T[] | - |
`items` | any[] | - |
`options` | object | {} |

**Returns:** *T[]*
