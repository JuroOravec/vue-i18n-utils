[i18n-util](../README.md) › [GlobLocaleResolver](globlocaleresolver.md)

# Class: GlobLocaleResolver

Locale resolver that resolves locales as globs.

Glob options can be passed to constructor or `resolver` options.

## Hierarchy

  ↳ [AbstractLocaleResolver](abstractlocaleresolver.md)

  ↳ **GlobLocaleResolver**

## Implements

* [Resolver](../README.md#abstract-resolver)
* [Resolver](../README.md#abstract-resolver)
* [Resolver](../README.md#abstract-resolver)

## Index

### Constructors

* [constructor](globlocaleresolver.md#constructor)

### Properties

* [logger](globlocaleresolver.md#logger)
* [options](globlocaleresolver.md#options)

### Accessors

* [defaults](globlocaleresolver.md#static-defaults)

### Methods

* [resolve](globlocaleresolver.md#resolve)

## Constructors

###  constructor

\+ **new GlobLocaleResolver**(`options`: [CtorOptions](../README.md#ctoroptions)): *[GlobLocaleResolver](globlocaleresolver.md)*

*Overrides [Resolver](resolver.md).[constructor](resolver.md#constructor)*

*Defined in [src/lib/resolver/locale.ts:53](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/locale.ts#L53)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [CtorOptions](../README.md#ctoroptions) | {} |

**Returns:** *[GlobLocaleResolver](globlocaleresolver.md)*

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

*Defined in [src/lib/resolver/locale.ts:54](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/locale.ts#L54)*

## Accessors

### `Static` defaults

• **get defaults**(): *object*

*Overrides [AbstractLocaleResolver](abstractlocaleresolver.md).[defaults](abstractlocaleresolver.md#static-defaults)*

*Defined in [src/lib/resolver/locale.ts:99](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/locale.ts#L99)*

**Returns:** *object*

* **logger**: *Debugger* = globLocaleResolverDebug

## Methods

###  resolve

▸ **resolve**<**T**>(`globs`: string[], `items`: T[], `options`: [ResolveOptions](../README.md#resolveoptions)): *NonNullable‹T["locale"]›[]*

*Overrides [Resolver](resolver.md).[resolve](resolver.md#resolve)*

*Defined in [src/lib/resolver/locale.ts:58](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/locale.ts#L58)*

**Type parameters:**

▪ **T**: *[Item](../README.md#item)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`globs` | string[] | - |
`items` | T[] | - |
`options` | [ResolveOptions](../README.md#resolveoptions) | {} |

**Returns:** *NonNullable‹T["locale"]›[]*
