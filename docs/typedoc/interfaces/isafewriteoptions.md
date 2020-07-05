[i18n-util](../README.md) › [ISafeWriteOptions](isafewriteoptions.md)

# Interface: ISafeWriteOptions

Options object passed to `safeWrite`

## Hierarchy

* **ISafeWriteOptions**

  ↳ [WriterOptions](../README.md#writeroptions)

  ↳ [RemoverOptions](../README.md#removeroptions)

## Index

### Properties

* [createDir](isafewriteoptions.md#optional-createdir)
* [mkdirOptions](isafewriteoptions.md#optional-mkdiroptions)
* [removeDirOnError](isafewriteoptions.md#optional-removedironerror)
* [restoreOnError](isafewriteoptions.md#optional-restoreonerror)

## Properties

### `Optional` createDir

• **createDir**? : *undefined | false | true*

*Defined in [src/lib/util/fs.ts:26](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/fs.ts#L26)*

Whether directories should be autocreated when writing to a file in
a directory which doesn't exist yet.

Defaults to `true`

___

### `Optional` mkdirOptions

• **mkdirOptions**? : *Extract‹Parameters<typeof mkdirSync>[1], object›*

*Defined in [src/lib/util/fs.ts:37](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/fs.ts#L37)*

Options object passed to fs.mkdirSync when `createDir` is `true`.

Defaults to `true`

___

### `Optional` removeDirOnError

• **removeDirOnError**? : *undefined | false | true*

*Defined in [src/lib/util/fs.ts:31](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/fs.ts#L31)*

Whether directories created by the `createDir` option should be removed
when the process throws.

___

### `Optional` restoreOnError

• **restoreOnError**? : *undefined | false | true*

*Defined in [src/lib/util/fs.ts:19](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/fs.ts#L19)*

Whether the changes done to files should be undone if the process throws

Defaults to `true`
