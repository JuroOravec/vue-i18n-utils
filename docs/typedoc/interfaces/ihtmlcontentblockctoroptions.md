[i18n-util](../README.md) › [IHTMLContentBlockCtorOptions](ihtmlcontentblockctoroptions.md)

# Interface: IHTMLContentBlockCtorOptions

## Hierarchy

* [CtorOptions](../README.md#ctoroptions)

  ↳ **IHTMLContentBlockCtorOptions**

## Index

### Properties

* [attributes](ihtmlcontentblockctoroptions.md#optional-attributes)
* [content](ihtmlcontentblockctoroptions.md#optional-content)
* [filepath](ihtmlcontentblockctoroptions.md#optional-filepath)
* [node](ihtmlcontentblockctoroptions.md#node)
* [serializers](ihtmlcontentblockctoroptions.md#optional-serializers)

## Properties

### `Optional` attributes

• **attributes**? : *[AnyObj](../README.md#anyobj)*

*Overrides [CtorOptions](../README.md#ctoroptions).[attributes](../README.md#optional-attributes)*

*Defined in [src/lib/adaptors/vue/content-block-html.ts:49](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-block-html.ts#L49)*

Block's attributes.

___

### `Optional` content

• **content**? : *undefined | string*

*Inherited from [CtorOptions](../README.md#ctoroptions).[content](../README.md#optional-content)*

*Defined in [src/lib/content-block.ts:63](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L63)*

Block's content.

___

### `Optional` filepath

• **filepath**? : *undefined | string*

*Inherited from [CtorOptions](../README.md#ctoroptions).[filepath](../README.md#optional-filepath)*

*Defined in [src/lib/content-block.ts:71](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L71)*

Path to the file from where the block originates.

___

###  node

• **node**: *Node*

*Defined in [src/lib/adaptors/vue/content-block-html.ts:55](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-block-html.ts#L55)*

The Node element stored by the instance.

This option takes priority over the `tag` option.

___

### `Optional` serializers

• **serializers**? : *[Collection](../README.md#abstract-collection)*

*Inherited from [CtorOptions](../README.md#ctoroptions).[serializers](../README.md#optional-serializers)*

*Defined in [src/lib/content-block.ts:67](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L67)*

Collection instance with serializers to de-/serialize content
