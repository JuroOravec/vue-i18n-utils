[i18n-util](../README.md) › [KeyStatsEntry](keystatsentry.md)

# Class: KeyStatsEntry

## Hierarchy

* **KeyStatsEntry**

## Implements

* [KeyStatsEntry](../README.md#abstract-keystatsentry)

## Index

### Constructors

* [constructor](keystatsentry.md#constructor)

### Properties

* [definitions](keystatsentry.md#definitions)
* [definitionsDuplicates](keystatsentry.md#definitionsduplicates)
* [definitionsFiles](keystatsentry.md#definitionsfiles)
* [definitionsMissing](keystatsentry.md#definitionsmissing)
* [definitionsUnused](keystatsentry.md#definitionsunused)
* [definitionsUsed](keystatsentry.md#definitionsused)
* [locales](keystatsentry.md#locales)
* [localesMissing](keystatsentry.md#localesmissing)
* [localesUsed](keystatsentry.md#localesused)
* [path](keystatsentry.md#path)
* [usage](keystatsentry.md#usage)
* [usageDefined](keystatsentry.md#usagedefined)
* [usageFiles](keystatsentry.md#usagefiles)
* [usageMissing](keystatsentry.md#usagemissing)
* [usageUndefined](keystatsentry.md#usageundefined)

### Accessors

* [hasDuplicateDefinitions](keystatsentry.md#hasduplicatedefinitions)
* [hasIssues](keystatsentry.md#hasissues)
* [hasUndefinedUsage](keystatsentry.md#hasundefinedusage)
* [hasUnusedDefinitions](keystatsentry.md#hasunuseddefinitions)
* [isDefined](keystatsentry.md#isdefined)
* [isMissingDefinitions](keystatsentry.md#ismissingdefinitions)
* [isMissingUsage](keystatsentry.md#ismissingusage)
* [isUsed](keystatsentry.md#isused)

## Constructors

###  constructor

\+ **new KeyStatsEntry**(`options`: object & [UsageAnalyzeOptions](../README.md#usageanalyzeoptions)): *[KeyStatsEntry](keystatsentry.md)*

*Defined in [src/lib/i18n-util/item-processor.ts:412](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L412)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | object & [UsageAnalyzeOptions](../README.md#usageanalyzeoptions) |

**Returns:** *[KeyStatsEntry](keystatsentry.md)*

## Properties

###  definitions

• **definitions**: *[DefItem](../README.md#defitem)[]*

*Defined in [src/lib/i18n-util/item-processor.ts:404](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L404)*

___

###  definitionsDuplicates

• **definitionsDuplicates**: *[Map](arraymap.md#static-map)‹string, [DefItem](../README.md#defitem)[]›*

*Defined in [src/lib/i18n-util/item-processor.ts:408](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L408)*

___

###  definitionsFiles

• **definitionsFiles**: *string[]*

*Defined in [src/lib/i18n-util/item-processor.ts:409](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L409)*

___

###  definitionsMissing

• **definitionsMissing**: *[DefItem](../README.md#defitem)[]*

*Defined in [src/lib/i18n-util/item-processor.ts:407](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L407)*

___

###  definitionsUnused

• **definitionsUnused**: *[DefItem](../README.md#defitem)[]*

*Defined in [src/lib/i18n-util/item-processor.ts:406](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L406)*

___

###  definitionsUsed

• **definitionsUsed**: *[DefItem](../README.md#defitem)[]*

*Defined in [src/lib/i18n-util/item-processor.ts:405](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L405)*

___

###  locales

• **locales**: *string[]*

*Defined in [src/lib/i18n-util/item-processor.ts:410](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L410)*

___

###  localesMissing

• **localesMissing**: *string[]*

*Defined in [src/lib/i18n-util/item-processor.ts:411](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L411)*

___

###  localesUsed

• **localesUsed**: *string[]*

*Defined in [src/lib/i18n-util/item-processor.ts:412](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L412)*

___

###  path

• **path**: *string[]*

*Defined in [src/lib/i18n-util/item-processor.ts:398](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L398)*

___

###  usage

• **usage**: *[UseItem](../README.md#useitem)[]*

*Defined in [src/lib/i18n-util/item-processor.ts:399](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L399)*

___

###  usageDefined

• **usageDefined**: *[UseItem](../README.md#useitem)[]*

*Defined in [src/lib/i18n-util/item-processor.ts:400](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L400)*

___

###  usageFiles

• **usageFiles**: *string[]*

*Defined in [src/lib/i18n-util/item-processor.ts:403](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L403)*

___

###  usageMissing

• **usageMissing**: *[UseItem](../README.md#useitem)[]*

*Defined in [src/lib/i18n-util/item-processor.ts:402](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L402)*

___

###  usageUndefined

• **usageUndefined**: *[UseItem](../README.md#useitem)[]*

*Defined in [src/lib/i18n-util/item-processor.ts:401](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L401)*

## Accessors

###  hasDuplicateDefinitions

• **get hasDuplicateDefinitions**(): *boolean*

*Defined in [src/lib/i18n-util/item-processor.ts:488](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L488)*

**Returns:** *boolean*

___

###  hasIssues

• **get hasIssues**(): *boolean*

*Defined in [src/lib/i18n-util/item-processor.ts:464](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L464)*

**Returns:** *boolean*

___

###  hasUndefinedUsage

• **get hasUndefinedUsage**(): *boolean*

*Defined in [src/lib/i18n-util/item-processor.ts:500](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L500)*

**Returns:** *boolean*

___

###  hasUnusedDefinitions

• **get hasUnusedDefinitions**(): *boolean*

*Defined in [src/lib/i18n-util/item-processor.ts:484](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L484)*

**Returns:** *boolean*

___

###  isDefined

• **get isDefined**(): *boolean*

*Defined in [src/lib/i18n-util/item-processor.ts:476](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L476)*

**Returns:** *boolean*

___

###  isMissingDefinitions

• **get isMissingDefinitions**(): *boolean*

*Defined in [src/lib/i18n-util/item-processor.ts:480](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L480)*

**Returns:** *boolean*

___

###  isMissingUsage

• **get isMissingUsage**(): *boolean*

*Defined in [src/lib/i18n-util/item-processor.ts:496](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L496)*

**Returns:** *boolean*

___

###  isUsed

• **get isUsed**(): *boolean*

*Defined in [src/lib/i18n-util/item-processor.ts:492](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L492)*

**Returns:** *boolean*
