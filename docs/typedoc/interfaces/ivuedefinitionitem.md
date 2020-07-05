[i18n-util](../README.md) › [IVueDefinitionItem](ivuedefinitionitem.md)

# Interface: IVueDefinitionItem

## Hierarchy

  ↳ [Item](../README.md#item)

  ↳ **IVueDefinitionItem**

## Implemented by

* [VueDefinitionItem](../classes/vuedefinitionitem.md)

## Index

### Properties

* [copy](ivuedefinitionitem.md#copy)
* [link](ivuedefinitionitem.md#optional-link)
* [sourceScope](ivuedefinitionitem.md#optional-sourcescope)

## Properties

###  copy

• **copy**: *function*

*Inherited from [Item](../README.md#item).[copy](../README.md#copy)*

*Defined in [src/lib/definition/types-abstract.ts:30](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/types-abstract.ts#L30)*

Create a new instance with copied values.

#### Type declaration:

▸ (`newValuesObj?`: Partial‹[CtorOptions](../README.md#ctoroptions)›): *[Item](../README.md#item)*

**Parameters:**

Name | Type |
------ | ------ |
`newValuesObj?` | Partial‹[CtorOptions](../README.md#ctoroptions)› |

___

### `Optional` link

• **link**? : *undefined | string*

*Defined in [src/lib/adaptors/vue/vue-definition.ts:5](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/vue-definition.ts#L5)*

___

### `Optional` sourceScope

• **sourceScope**? : *"general" | "locale"*

*Inherited from [Item](../README.md#item).[sourceScope](../README.md#optional-sourcescope)*

*Defined in [src/lib/definition/types-abstract.ts:26](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/types-abstract.ts#L26)*
