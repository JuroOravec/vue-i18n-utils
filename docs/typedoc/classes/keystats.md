[i18n-util](../README.md) › [KeyStats](keystats.md)

# Class: KeyStats

## Hierarchy

* **KeyStats**

## Implements

* [KeyStats](../README.md#abstract-keystats)

## Index

### Constructors

* [constructor](keystats.md#constructor)

### Properties

* [definitions](keystats.md#definitions)
* [keys](keystats.md#keys)
* [locales](keystats.md#locales)
* [usage](keystats.md#usage)

### Accessors

* [definitionsFiles](keystats.md#definitionsfiles)
* [definitionsMissing](keystats.md#definitionsmissing)
* [definitionsUnused](keystats.md#definitionsunused)
* [definitionsUsed](keystats.md#definitionsused)
* [keysIssues](keystats.md#keysissues)
* [keysUndefined](keystats.md#keysundefined)
* [keysUnused](keystats.md#keysunused)
* [usageDefined](keystats.md#usagedefined)
* [usageFiles](keystats.md#usagefiles)
* [usageMissing](keystats.md#usagemissing)
* [usageUndefined](keystats.md#usageundefined)

## Constructors

###  constructor

\+ **new KeyStats**(`options`: [KeyStatsCtorOptions](../README.md#keystatsctoroptions)): *[KeyStats](keystats.md)*

*Defined in [src/lib/i18n-util/item-processor.ts:509](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L509)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [KeyStatsCtorOptions](../README.md#keystatsctoroptions) | {} |

**Returns:** *[KeyStats](keystats.md)*

## Properties

###  definitions

• **definitions**: *[DefItem](../README.md#defitem)[]*

*Defined in [src/lib/i18n-util/item-processor.ts:508](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L508)*

___

###  keys

• **keys**: *[KeyStatsEntry](keystatsentry.md)[]*

*Defined in [src/lib/i18n-util/item-processor.ts:509](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L509)*

___

###  locales

• **locales**: *string[]*

*Defined in [src/lib/i18n-util/item-processor.ts:506](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L506)*

___

###  usage

• **usage**: *[UseItem](../README.md#useitem)[]*

*Defined in [src/lib/i18n-util/item-processor.ts:507](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L507)*

## Accessors

###  definitionsFiles

• **get definitionsFiles**(): *string[]*

*Defined in [src/lib/i18n-util/item-processor.ts:589](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L589)*

**Returns:** *string[]*

___

###  definitionsMissing

• **get definitionsMissing**(): *[Item](../README.md#item)‹›[]*

*Defined in [src/lib/i18n-util/item-processor.ts:585](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L585)*

**Returns:** *[Item](../README.md#item)‹›[]*

___

###  definitionsUnused

• **get definitionsUnused**(): *[Item](../README.md#item)‹›[]*

*Defined in [src/lib/i18n-util/item-processor.ts:581](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L581)*

**Returns:** *[Item](../README.md#item)‹›[]*

___

###  definitionsUsed

• **get definitionsUsed**(): *[Item](../README.md#item)‹›[]*

*Defined in [src/lib/i18n-util/item-processor.ts:577](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L577)*

**Returns:** *[Item](../README.md#item)‹›[]*

___

###  keysIssues

• **get keysIssues**(): *[KeyStatsEntry](keystatsentry.md)‹›[]*

*Defined in [src/lib/i18n-util/item-processor.ts:557](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L557)*

**Returns:** *[KeyStatsEntry](keystatsentry.md)‹›[]*

___

###  keysUndefined

• **get keysUndefined**(): *[KeyStatsEntry](keystatsentry.md)‹›[]*

*Defined in [src/lib/i18n-util/item-processor.ts:553](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L553)*

**Returns:** *[KeyStatsEntry](keystatsentry.md)‹›[]*

___

###  keysUnused

• **get keysUnused**(): *[KeyStatsEntry](keystatsentry.md)‹›[]*

*Defined in [src/lib/i18n-util/item-processor.ts:549](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L549)*

**Returns:** *[KeyStatsEntry](keystatsentry.md)‹›[]*

___

###  usageDefined

• **get usageDefined**(): *[Item](../README.md#item)‹›[]*

*Defined in [src/lib/i18n-util/item-processor.ts:561](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L561)*

**Returns:** *[Item](../README.md#item)‹›[]*

___

###  usageFiles

• **get usageFiles**(): *string[]*

*Defined in [src/lib/i18n-util/item-processor.ts:573](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L573)*

**Returns:** *string[]*

___

###  usageMissing

• **get usageMissing**(): *[Item](../README.md#item)‹›[]*

*Defined in [src/lib/i18n-util/item-processor.ts:569](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L569)*

**Returns:** *[Item](../README.md#item)‹›[]*

___

###  usageUndefined

• **get usageUndefined**(): *[Item](../README.md#item)‹›[]*

*Defined in [src/lib/i18n-util/item-processor.ts:565](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L565)*

**Returns:** *[Item](../README.md#item)‹›[]*
