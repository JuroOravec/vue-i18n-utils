[i18n-util](README.md)

# i18n-util

## Index

### Namespaces

* [AIAdaptorCollection](README.md#aiadaptorcollection)
* [AICollection](README.md#aicollection)
* [AIDefinition](README.md#aidefinition)
* [AIMethodCollection](README.md#aimethodcollection)
* [AIResolver](README.md#airesolver)
* [AISchemator](README.md#aischemator)
* [AISerializerCollection](README.md#aiserializercollection)
* [AIUsage](README.md#aiusage)
* [AIValidator](README.md#aivalidator)
* [AI_I18nUtil](README.md#ai_i18nutil)
* [AI_Item](README.md#ai_item)
* [IAdaptorCollection](README.md#iadaptorcollection)
* [IAdaptorJsonYaml](README.md#iadaptorjsonyaml)
* [IAdaptorVue](README.md#iadaptorvue)
* [ICollection](README.md#icollection)
* [IContentBlock](README.md#icontentblock)
* [IContentFormatter](README.md#icontentformatter)
* [IContentGroup](README.md#icontentgroup)
* [IDefinition](README.md#idefinition)
* [IMethodCollection](README.md#imethodcollection)
* [IPathFormatter](README.md#ipathformatter)
* [IResolver](README.md#iresolver)
* [ISchemator](README.md#ischemator)
* [ISerializerCollection](README.md#iserializercollection)
* [IUsage](README.md#iusage)
* [IValidator](README.md#ivalidator)
* [I_I18nUtil](README.md#i_i18nutil)
* [I_Item](README.md#i_item)

### Classes

* [AbstractKeyResolver](classes/abstractkeyresolver.md)
* [AbstractLocaleResolver](classes/abstractlocaleresolver.md)
* [AbstractPathResolver](classes/abstractpathresolver.md)
* [AbstractSchemator](classes/abstractschemator.md)
* [AbstractValidator](classes/abstractvalidator.md)
* [AbstractValueResolver](classes/abstractvalueresolver.md)
* [AdaptorCollection](classes/adaptorcollection.md)
* [ArrayMap](classes/arraymap.md)
* [Base](classes/base.md)
* [Collection](classes/collection.md)
* [ContentBlock](classes/contentblock.md)
* [ContentFormatter](classes/contentformatter.md)
* [ContentGroup](classes/contentgroup.md)
* [CwdPathResolver](classes/cwdpathresolver.md)
* [DOMContentGroup](classes/domcontentgroup.md)
* [DefinitionArray](classes/definitionarray.md)
* [DefinitionItem](classes/definitionitem.md)
* [DefinitionLoader](classes/definitionloader.md)
* [EvalGlobValueResolver](classes/evalglobvalueresolver.md)
* [GlobKeyResolver](classes/globkeyresolver.md)
* [GlobLocaleResolver](classes/globlocaleresolver.md)
* [GlobPathResolver](classes/globpathresolver.md)
* [GlobValueResolver](classes/globvalueresolver.md)
* [HTMLContentBlock](classes/htmlcontentblock.md)
* [I18nAdaptor](classes/i18nadaptor.md)
* [I18nContentGroup](classes/i18ncontentgroup.md)
* [I18nItemArray](classes/i18nitemarray.md)
* [I18nUtil](classes/i18nutil.md)
* [Item](classes/item.md)
* [ItemArray](classes/itemarray.md)
* [ItemProcessor](classes/itemprocessor.md)
* [ItemProcessorMixin](classes/itemprocessormixin.md)
* [JsonYamlAdaptor](classes/jsonyamladaptor.md)
* [JsonYamlContentGroup](classes/jsonyamlcontentgroup.md)
* [JsonYamlDefinitionItem](classes/jsonyamldefinitionitem.md)
* [KeyStats](classes/keystats.md)
* [KeyStatsEntry](classes/keystatsentry.md)
* [LoadedBase](classes/loadedbase.md)
* [LoadedI18nUtil](classes/loadedi18nutil.md)
* [LoadedItemProcessor](classes/loadeditemprocessor.md)
* [LoaderBase](classes/loaderbase.md)
* [MethodCollection](classes/methodcollection.md)
* [NullKeyResolver](classes/nullkeyresolver.md)
* [NullLocaleResolver](classes/nulllocaleresolver.md)
* [NullPathResolver](classes/nullpathresolver.md)
* [NullValueResolver](classes/nullvalueresolver.md)
* [PathFormatter](classes/pathformatter.md)
* [Resolver](classes/resolver.md)
* [Schemator](classes/schemator.md)
* [SerializerCollection](classes/serializercollection.md)
* [UsageItem](classes/usageitem.md)
* [UsageLoader](classes/usageloader.md)
* [Validator](classes/validator.md)
* [VueAdaptor](classes/vueadaptor.md)
* [VueDefinitionArray](classes/vuedefinitionarray.md)
* [VueDefinitionItem](classes/vuedefinitionitem.md)

### Interfaces

* [Config](interfaces/config.md)
* [Defaults](interfaces/defaults.md)
* [IDOMContentGroup](interfaces/idomcontentgroup.md)
* [IDeepWalkHookOptionsBase](interfaces/ideepwalkhookoptionsbase.md)
* [IHTMLContentBlock](interfaces/ihtmlcontentblock.md)
* [IHTMLContentBlockCtorOptions](interfaces/ihtmlcontentblockctoroptions.md)
* [IMergeDeepAssignFuncParams](interfaces/imergedeepassignfuncparams.md)
* [IMergeDeepMergeFuncParams](interfaces/imergedeepmergefuncparams.md)
* [ISafeWriteOptions](interfaces/isafewriteoptions.md)
* [IVueDefinitionItem](interfaces/ivuedefinitionitem.md)

### Type aliases

* [Adaptor](README.md#adaptor)
* [AnyFunc](README.md#anyfunc)
* [AnyObj](README.md#anyobj)
* [Cmd](README.md#cmd)
* [DeepObject](README.md#deepobject)
* [DefItem](README.md#defitem)
* [DefItemArrayLike](README.md#defitemarraylike)
* [ExportItem](README.md#exportitem)
* [FileSystem](README.md#filesystem)
* [IDeepWalkHookOptions](README.md#ideepwalkhookoptions)
* [IMergeDeepAssignFunc](README.md#imergedeepassignfunc)
* [IMergeDeepBranchFunc](README.md#imergedeepbranchfunc)
* [IMergeDeepIsBranchFunc](README.md#imergedeepisbranchfunc)
* [IMergeDeepMergeFunc](README.md#imergedeepmergefunc)
* [IMergeDeepOptions](README.md#imergedeepoptions)
* [IOrigin](README.md#iorigin)
* [IPath](README.md#ipath)
* [IQueueItem](README.md#iqueueitem)
* [ISafeWriters](README.md#isafewriters)
* [I_Index](README.md#i_index)
* [Parser](README.md#parser)
* [Remover](README.md#remover)
* [RequiredProps](README.md#requiredprops)
* [Table](README.md#table)
* [UnwrapPromise](README.md#unwrappromise)
* [UsageAnalyzer](README.md#usageanalyzer)
* [UseItem](README.md#useitem)
* [UseItemArrayLike](README.md#useitemarraylike)
* [Writer](README.md#writer)

### Variables

* [adaptorDebug](README.md#const-adaptordebug)
* [cliDebug](README.md#const-clidebug)
* [commands](README.md#const-commands)
* [cwdPathResolverDebug](README.md#const-cwdpathresolverdebug)
* [globKeyResolverDebug](README.md#const-globkeyresolverdebug)
* [globLocaleResolverDebug](README.md#const-globlocaleresolverdebug)
* [globPathResolverDebug](README.md#const-globpathresolverdebug)
* [globValueResolverDebug](README.md#const-globvalueresolverdebug)
* [i18nUtil](README.md#const-i18nutil)
* [jyDebug](README.md#const-jydebug)
* [keyResolverDebug](README.md#const-keyresolverdebug)
* [localeResolverDebug](README.md#const-localeresolverdebug)
* [name](README.md#name)
* [nullKeyResolverDebug](README.md#const-nullkeyresolverdebug)
* [nullLocaleResolverDebug](README.md#const-nulllocaleresolverdebug)
* [nullPathResolverDebug](README.md#const-nullpathresolverdebug)
* [nullValueResolverDebug](README.md#const-nullvalueresolverdebug)
* [packageJson](README.md#packagejson)
* [pathResolverDebug](README.md#const-pathresolverdebug)
* [program](README.md#const-program)
* [resolverDebug](README.md#const-resolverdebug)
* [schematorDebug](README.md#const-schematordebug)
* [validatorDebug](README.md#const-validatordebug)
* [valueResolverDebug](README.md#const-valueresolverdebug)
* [version](README.md#version)
* [vueDebug](README.md#const-vuedebug)

### Functions

* [applyAuxFilesOptions](README.md#applyauxfilesoptions)
* [applyGeneralOptions](README.md#applygeneraloptions)
* [applyItemOptions](README.md#applyitemoptions)
* [applyMixins](README.md#applymixins)
* [applyOptions](README.md#applyoptions)
* [applyOutputOptions](README.md#applyoutputoptions)
* [applyStaticMixins](README.md#applystaticmixins)
* [borderLen](README.md#borderlen)
* [breakWords](README.md#breakwords)
* [calcColWidths](README.md#calccolwidths)
* [collect](README.md#collect)
* [createDropCmd](README.md#createdropcmd)
* [createExportCmd](README.md#createexportcmd)
* [createListCmd](README.md#createlistcmd)
* [createLocaleCmd](README.md#createlocalecmd)
* [createObjectPath](README.md#createobjectpath)
* [createPatchCmd](README.md#createpatchcmd)
* [createSchemaCmd](README.md#createschemacmd)
* [createValidateCmd](README.md#createvalidatecmd)
* [debug](README.md#const-debug)
* [deepWalk](README.md#deepwalk)
* [file](README.md#file)
* [filterDefinitions](README.md#filterdefinitions)
* [filterMap](README.md#filtermap)
* [findMap](README.md#findmap)
* [getIteratee](README.md#const-getiteratee)
* [hashString](README.md#hashstring)
* [hashStringArray](README.md#hashstringarray)
* [intersectionObject](README.md#intersectionobject)
* [isItem](README.md#isitem)
* [loadFromCli](README.md#loadfromcli)
* [mapFilter](README.md#mapfilter)
* [mapFilterUniq](README.md#mapfilteruniq)
* [mapUniq](README.md#mapuniq)
* [mergeDeepWith](README.md#mergedeepwith)
* [pFind](README.md#pfind)
* [pGlob](README.md#pglob)
* [pMap](README.md#pmap)
* [pRimraf](README.md#primraf)
* [paddingLen](README.md#paddinglen)
* [parseUnknownArgs](README.md#parseunknownargs)
* [parseVariadicArg](README.md#parsevariadicarg)
* [processAuxFilesOptions](README.md#processauxfilesoptions)
* [processDefinitionOptions](README.md#processdefinitionoptions)
* [processGeneralOptions](README.md#const-processgeneraloptions)
* [processItemOptions](README.md#processitemoptions)
* [processKeyOptions](README.md#processkeyoptions)
* [processUsageOptions](README.md#processusageoptions)
* [processVariadicArgs](README.md#processvariadicargs)
* [safeWrite](README.md#safewrite)
* [splitObject](README.md#splitobject)
* [uniqFilterMap](README.md#uniqfiltermap)
* [uniqMap](README.md#uniqmap)

## Namespaces

###  AIAdaptorCollection

• **AIAdaptorCollection**:

*Defined in [src/lib/collection/types-abstract.ts:256](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L256)*

Subtype of `IMethodCollection` which holds groups of functions used as
adaptors for interacting with various files.

### `Abstract` Collection

• **Collection**:

*Defined in [src/lib/collection/types-abstract.ts:349](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L349)*

Subtype of `IMethodCollection` which holds groups of functions used as
adaptors for interacting with various files.

###  collection

• **collection**: *[ItemMap](README.md#itemmap)* = new Map()

*Overrides [Collection](README.md#abstract-collection).[collection](README.md#collection)*

*Defined in [src/lib/collection/types-abstract.ts:350](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L350)*

###  add

▸ **add**(`options`: [SetOptions](README.md#setoptions)): *void*

*Overrides [Collection](README.md#abstract-collection).[add](README.md#add)*

*Defined in [src/lib/collection/types-abstract.ts:354](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L354)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SetOptions](README.md#setoptions) |

**Returns:** *void*

###  delete

▸ **delete**(`name`: [Name](README.md#name)): *void*

*Inherited from [Collection](README.md#abstract-collection).[delete](README.md#delete)*

*Defined in [src/lib/collection/types-abstract.ts:107](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L107)*

Remove an item from the collection.

Throws if no item with the name exists in the collection.

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |

**Returns:** *void*

###  get

▸ **get**(`name`: [Name](README.md#name)): *undefined | [ItemBase](README.md#itembase)‹› & [ItemBase](README.md#itembase) & [Item](README.md#item)*

*Overrides [Collection](README.md#abstract-collection).[get](README.md#get)*

*Defined in [src/lib/collection/types-abstract.ts:351](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L351)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |

**Returns:** *undefined | [ItemBase](README.md#itembase)‹› & [ItemBase](README.md#itembase) & [Item](README.md#item)*

###  getOption

▸ **getOption**(`name`: [Name](README.md#name), `optionKey`: string): *any*

*Inherited from [Collection](README.md#abstract-collection).[getOption](README.md#getoption)*

*Defined in [src/lib/collection/types-abstract.ts:240](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L240)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |
`optionKey` | string |

**Returns:** *any*

###  groupByResolve

▸ **groupByResolve**<**T**>(`queries`: T[], `iteratee?`: undefined | function): *[Map](classes/arraymap.md#static-map)‹undefined | [NamedItem](README.md#nameditem)‹›, T[]›*

*Overrides [Collection](README.md#abstract-collection).[groupByResolve](README.md#groupbyresolve)*

*Defined in [src/lib/collection/types-abstract.ts:360](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L360)*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

Name | Type |
------ | ------ |
`queries` | T[] |
`iteratee?` | undefined &#124; function |

**Returns:** *[Map](classes/arraymap.md#static-map)‹undefined | [NamedItem](README.md#nameditem)‹›, T[]›*

###  has

▸ **has**(`name`: [Name](README.md#name)): *boolean*

*Inherited from [Collection](README.md#abstract-collection).[has](README.md#has)*

*Defined in [src/lib/collection/types-abstract.ts:91](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L91)*

Check if a collection has an item by it's name.

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |

**Returns:** *boolean*

###  options

▸ **options**(`name`: [Name](README.md#name)): *object*

*Inherited from [Collection](README.md#abstract-collection).[options](README.md#options)*

*Defined in [src/lib/collection/types-abstract.ts:237](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L237)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |

**Returns:** *object*

* \[ **key**: *number*\]: V

###  resolve

▸ **resolve**(`query`: string): *undefined | [NamedItem](README.md#nameditem)‹›*

*Overrides [Collection](README.md#abstract-collection).[resolve](README.md#resolve)*

*Defined in [src/lib/collection/types-abstract.ts:357](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L357)*

**Parameters:**

Name | Type |
------ | ------ |
`query` | string |

**Returns:** *undefined | [NamedItem](README.md#nameditem)‹›*

###  setOption

▸ **setOption**(`name`: [Name](README.md#name), `optionKey`: string, `optionValue`: any): *void*

*Inherited from [Collection](README.md#abstract-collection).[setOption](README.md#setoption)*

*Defined in [src/lib/collection/types-abstract.ts:243](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L243)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |
`optionKey` | string |
`optionValue` | any |

**Returns:** *void*

###  validate

▸ **validate**(`name`: [Name](README.md#name), `prop`: string): *void*

*Inherited from [Collection](README.md#abstract-collection).[validate](README.md#validate)*

*Defined in [src/lib/collection/types-abstract.ts:130](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L130)*

Validate that a particular item in collection has a specific property.

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |
`prop` | string |

**Returns:** *void*

###  validateMethod

▸ **validateMethod**(`name`: [Name](README.md#name), `method`: keyof ItemMethods): *void*

*Overrides [Collection](README.md#abstract-collection).[validateMethod](README.md#validatemethod)*

*Defined in [src/lib/collection/types-abstract.ts:363](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L363)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |
`method` | keyof ItemMethods |

**Returns:** *void*

###  Ctor

• **Ctor**:

*Defined in [src/lib/collection/types-abstract.ts:319](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L319)*

Constructor

###  constructor

\+ **new Ctor**(`options?`: [CtorOptions](README.md#ctoroptions)): *[Collection](README.md#abstract-collection)*

*Defined in [src/lib/collection/types-abstract.ts:319](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L319)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [CtorOptions](README.md#ctoroptions) |

**Returns:** *[Collection](README.md#abstract-collection)*

###  CtorOptions

• **CtorOptions**:

*Defined in [src/lib/collection/types-abstract.ts:309](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L309)*

Constructor options object

### `Optional` collection

• **collection**? : *object | [Map](classes/arraymap.md#static-map)‹[Name](README.md#name), [Arg](README.md#arg)›*

*Overrides [CtorOptions](README.md#ctoroptions).[collection](README.md#optional-collection)*

*Defined in [src/lib/collection/types-abstract.ts:313](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L313)*

Collection instance to be used instead of the default

###  ItemBase

• **ItemBase**:

*Defined in [src/lib/collection/types-abstract.ts:289](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L289)*

Item properties modified in IAdaptorCollection relative to ICollection

###  methods

• **methods**: *[ItemMethods](README.md#itemmethods)*

*Defined in [src/lib/collection/types-abstract.ts:291](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L291)*

###  ItemMethods

• **ItemMethods**:

*Defined in [src/lib/collection/types-abstract.ts:279](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L279)*

### `Optional` parser

• **parser**? : *[Parser](README.md#parser)*

*Defined in [src/lib/collection/types-abstract.ts:280](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L280)*

### `Optional` remover

• **remover**? : *[Remover](README.md#remover)*

*Defined in [src/lib/collection/types-abstract.ts:282](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L282)*

### `Optional` usageAnalyzer

• **usageAnalyzer**? : *[UsageAnalyzer](README.md#usageanalyzer)*

*Defined in [src/lib/collection/types-abstract.ts:283](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L283)*

### `Optional` writer

• **writer**? : *[Writer](README.md#writer)*

*Defined in [src/lib/collection/types-abstract.ts:281](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L281)*

###  NamedItem

• **NamedItem**:

*Defined in [src/lib/collection/types-abstract.ts:336](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L336)*

Extension of AdaptorItem which also contains name property

###  methods

• **methods**: *[ItemMethods](README.md#itemmethods)*

*Inherited from [ItemBase](README.md#itembase).[methods](README.md#methods)*

*Overrides [ItemBase](README.md#itembase).[methods](README.md#methods)*

*Defined in [src/lib/collection/types-abstract.ts:291](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L291)*

###  name

• **name**: *[Name](README.md#name)*

*Defined in [src/lib/collection/types-abstract.ts:337](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L337)*

### `Optional` options

• **options**? : *[AnyObj](README.md#anyobj)*

*Inherited from [ItemBase](README.md#itembase).[options](README.md#optional-options)*

*Defined in [src/lib/collection/types-abstract.ts:154](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L154)*

###  patterns

• **patterns**: *RegExp[]*

*Inherited from [Item](README.md#item).[patterns](README.md#patterns)*

*Defined in [src/lib/collection/types-abstract.ts:23](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L23)*

###  Arg

Ƭ **Arg**: *[ItemBase](README.md#itembase) & [Arg](README.md#arg)*

*Defined in [src/lib/collection/types-abstract.ts:304](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L304)*

Item format passed to AdaptorCollection constructor that will be
translated to AdaptorItem object

###  Class

Ƭ **Class**: *[Ctor](README.md#ctor) & typeof Collection*

*Defined in [src/lib/collection/types-abstract.ts:326](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L326)*

Collection class type with contructor

###  Item

Ƭ **Item**: *[ItemBase](README.md#itembase) & [Item](README.md#item)*

*Defined in [src/lib/collection/types-abstract.ts:298](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L298)*

Interface of a single entry containing methods for interacting with
specific file type.

###  ItemMap

Ƭ **ItemMap**: *[Map](classes/arraymap.md#static-map)‹[Name](README.md#name), [Item](README.md#item)›*

*Defined in [src/lib/collection/types-abstract.ts:343](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L343)*

Mapping of name to Item

###  Parser

Ƭ **Parser**: *[AnyFunc](README.md#anyfunc)*

*Defined in [src/lib/collection/types-abstract.ts:262](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L262)*

Parser function

###  Remover

Ƭ **Remover**: *[AnyFunc](README.md#anyfunc)*

*Defined in [src/lib/collection/types-abstract.ts:272](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L272)*

Remover function

###  SetOptions

Ƭ **SetOptions**: *[SetOptions](README.md#setoptions) & [ItemBase](README.md#itembase)*

*Defined in [src/lib/collection/types-abstract.ts:331](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L331)*

Options passed to Set and Add methods

###  UsageAnalyzer

Ƭ **UsageAnalyzer**: *[AnyFunc](README.md#anyfunc)*

*Defined in [src/lib/collection/types-abstract.ts:277](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L277)*

Usage analyzer function

###  Writer

Ƭ **Writer**: *[AnyFunc](README.md#anyfunc)*

*Defined in [src/lib/collection/types-abstract.ts:267](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L267)*

Writer function

___

###  AICollection

• **AICollection**:

*Defined in [src/lib/collection/types-abstract.ts:13](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L13)*

### `Abstract` Collection

• **Collection**:

*Defined in [src/lib/collection/types-abstract.ts:77](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L77)*

###  collection

• **collection**: *[ItemMap](README.md#itemmap)* = new Map()

*Defined in [src/lib/collection/types-abstract.ts:78](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L78)*

###  add

▸ **add**(`options`: [SetOptions](README.md#setoptions)): *void*

*Defined in [src/lib/collection/types-abstract.ts:99](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L99)*

Add an item to the collection.

Throws if an item with the same name is already in the collection.

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SetOptions](README.md#setoptions) |

**Returns:** *void*

###  delete

▸ **delete**(`name`: [Name](README.md#name)): *void*

*Defined in [src/lib/collection/types-abstract.ts:107](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L107)*

Remove an item from the collection.

Throws if no item with the name exists in the collection.

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |

**Returns:** *void*

###  get

▸ **get**(`name`: [Name](README.md#name)): *undefined | [Item](README.md#item)*

*Defined in [src/lib/collection/types-abstract.ts:85](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L85)*

Get a collection item by it's name.

Returns undefined if no item matched.

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |

**Returns:** *undefined | [Item](README.md#item)*

###  groupByResolve

▸ **groupByResolve**<**T**>(`queries`: T[], `iteratee?`: undefined | function): *[Map](classes/arraymap.md#static-map)‹undefined | [NamedItem](README.md#nameditem), T[]›*

*Defined in [src/lib/collection/types-abstract.ts:124](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L124)*

Group list of queries by items in collection whose patterns matched the
query.

Unmatched items are grouped under `undefined` key.

**Type parameters:**

▪ **T**: *any*

**Parameters:**

Name | Type |
------ | ------ |
`queries` | T[] |
`iteratee?` | undefined &#124; function |

**Returns:** *[Map](classes/arraymap.md#static-map)‹undefined | [NamedItem](README.md#nameditem), T[]›*

###  has

▸ **has**(`name`: [Name](README.md#name)): *boolean*

*Defined in [src/lib/collection/types-abstract.ts:91](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L91)*

Check if a collection has an item by it's name.

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |

**Returns:** *boolean*

###  resolve

▸ **resolve**(`query`: string): *undefined | [NamedItem](README.md#nameditem)*

*Defined in [src/lib/collection/types-abstract.ts:115](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L115)*

Find an item in collection whose pattern matches the query.

Returns undefined if no item matched.

**Parameters:**

Name | Type |
------ | ------ |
`query` | string |

**Returns:** *undefined | [NamedItem](README.md#nameditem)*

###  validate

▸ **validate**(`name`: [Name](README.md#name), `prop`: string): *void*

*Defined in [src/lib/collection/types-abstract.ts:130](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L130)*

Validate that a particular item in collection has a specific property.

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |
`prop` | string |

**Returns:** *void*

###  Arg

• **Arg**:

*Defined in [src/lib/collection/types-abstract.ts:31](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L31)*

Item format passed to Collection constructor that will be
translated to CollectionItem object

###  patterns

• **patterns**: *string | RegExp‹›[]*

*Defined in [src/lib/collection/types-abstract.ts:32](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L32)*

###  Ctor

• **Ctor**:

*Defined in [src/lib/collection/types-abstract.ts:54](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L54)*

Constructor

###  constructor

\+ **new Ctor**(`options?`: [CtorOptions](README.md#ctoroptions)): *[Collection](README.md#abstract-collection)*

*Defined in [src/lib/collection/types-abstract.ts:54](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [CtorOptions](README.md#ctoroptions) |

**Returns:** *[Collection](README.md#abstract-collection)*

###  CtorOptions

• **CtorOptions**:

*Defined in [src/lib/collection/types-abstract.ts:44](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L44)*

Constructor options object

### `Optional` collection

• **collection**? : *object | [Map](classes/arraymap.md#static-map)‹[Name](README.md#name), [Arg](README.md#arg)›*

*Defined in [src/lib/collection/types-abstract.ts:48](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L48)*

Collection instance to be used instead of the default

###  Item

• **Item**:

*Defined in [src/lib/collection/types-abstract.ts:22](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L22)*

Interface of a single entry.

###  patterns

• **patterns**: *RegExp[]*

*Defined in [src/lib/collection/types-abstract.ts:23](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L23)*

###  NamedItem

• **NamedItem**:

*Defined in [src/lib/collection/types-abstract.ts:73](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L73)*

Extension of Item which also contains name property

###  name

• **name**: *[Name](README.md#name)*

*Defined in [src/lib/collection/types-abstract.ts:74](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L74)*

###  patterns

• **patterns**: *RegExp[]*

*Inherited from [Item](README.md#item).[patterns](README.md#patterns)*

*Defined in [src/lib/collection/types-abstract.ts:23](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L23)*

###  SetOptions

• **SetOptions**:

*Defined in [src/lib/collection/types-abstract.ts:66](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L66)*

Options passed to Set and Add methods

###  name

• **name**: *[Name](README.md#name)*

*Defined in [src/lib/collection/types-abstract.ts:67](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L67)*

###  patterns

• **patterns**: *string | RegExp‹›[]*

*Inherited from [Arg](README.md#arg).[patterns](README.md#patterns)*

*Defined in [src/lib/collection/types-abstract.ts:32](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L32)*

###  Class

Ƭ **Class**: *[Ctor](README.md#ctor) & typeof Collection*

*Defined in [src/lib/collection/types-abstract.ts:61](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L61)*

Collection class type with contructor

###  ItemMap

Ƭ **ItemMap**: *[Map](classes/arraymap.md#static-map)‹[Name](README.md#name), [Item](README.md#item)›*

*Defined in [src/lib/collection/types-abstract.ts:39](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L39)*

Mapping of name to Item

###  Name

Ƭ **Name**: *string*

*Defined in [src/lib/collection/types-abstract.ts:17](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L17)*

Type used as name

___

###  AIDefinition

• **AIDefinition**:

*Defined in [src/lib/definition/types-abstract.ts:14](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/types-abstract.ts#L14)*

###  CtorOptions

• **CtorOptions**:

*Defined in [src/lib/definition/types-abstract.ts:15](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/types-abstract.ts#L15)*

###  path

• **path**: *string[]*

*Defined in [src/lib/definition/types-abstract.ts:18](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/types-abstract.ts#L18)*

### `Optional` sourceScope

• **sourceScope**? : *"general" | "locale"*

*Defined in [src/lib/definition/types-abstract.ts:17](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/types-abstract.ts#L17)*

###  Item

• **Item**:

*Defined in [src/lib/definition/types-abstract.ts:21](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/types-abstract.ts#L21)*

###  copy

• **copy**: *function*

*Defined in [src/lib/definition/types-abstract.ts:30](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/types-abstract.ts#L30)*

Create a new instance with copied values.

#### Type declaration:

▸ (`newValuesObj?`: Partial‹[CtorOptions](README.md#ctoroptions)›): *[Item](README.md#item)*

**Parameters:**

Name | Type |
------ | ------ |
`newValuesObj?` | Partial‹[CtorOptions](README.md#ctoroptions)› |

### `Optional` sourceScope

• **sourceScope**? : *"general" | "locale"*

*Defined in [src/lib/definition/types-abstract.ts:26](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/types-abstract.ts#L26)*

###  ItemArray

• **ItemArray**:

*Defined in [src/lib/definition/types-abstract.ts:33](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/types-abstract.ts#L33)*

###  [Symbol.iterator]

• **[Symbol.iterator]**: *function*

*Overrides [ItemArray](README.md#itemarray).[[Symbol.iterator]](README.md#[symbol.iterator])*

*Defined in [src/lib/definition/types-abstract.ts:34](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/types-abstract.ts#L34)*

#### Type declaration:

▸ (): *IterableIterator‹[Item](README.md#item)›*

###  difference

• **difference**: *function*

*Inherited from [ItemArray](README.md#itemarray).[difference](README.md#difference)*

*Defined in [src/lib/item/types-abstract.ts:148](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L148)*

#### Type declaration:

▸ (`other`: [ItemArrayLike](README.md#itemarraylike), `options?`: [DifferenceOptions](README.md#differenceoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [ItemArrayLike](README.md#itemarraylike) |
`options?` | [DifferenceOptions](README.md#differenceoptions) |

###  duplicates

• **duplicates**: *function*

*Inherited from [ItemArray](README.md#itemarray).[duplicates](README.md#duplicates)*

*Defined in [src/lib/item/types-abstract.ts:209](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L209)*

#### Type declaration:

▸ (`options?`: [DuplicatesOptions](README.md#duplicatesoptions)): *[Map](classes/arraymap.md#static-map)‹number, [Item](README.md#item)[]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [DuplicatesOptions](README.md#duplicatesoptions) |

###  filterBy

• **filterBy**: *function*

*Inherited from [ItemArray](README.md#itemarray).[filterBy](README.md#filterby)*

*Defined in [src/lib/item/types-abstract.ts:183](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L183)*

#### Type declaration:

▸ (`callback`: function, `options?`: [FilterByOptions](README.md#filterbyoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

▪ **callback**: *function*

▸ (`item`: [Item](README.md#item)): *boolean | void*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [Item](README.md#item) |

▪`Optional`  **options**: *[FilterByOptions](README.md#filterbyoptions)*

###  filterByLocale

• **filterByLocale**: *function*

*Inherited from [ItemArray](README.md#itemarray).[filterByLocale](README.md#filterbylocale)*

*Defined in [src/lib/item/types-abstract.ts:195](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L195)*

#### Type declaration:

▸ (`locale`: NonNullable‹Item["locale"]›, `options?`: [FilterByLocaleOptions](README.md#filterbylocaleoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`locale` | NonNullable‹Item["locale"]› |
`options?` | [FilterByLocaleOptions](README.md#filterbylocaleoptions) |

###  filterByLocales

• **filterByLocales**: *function*

*Inherited from [ItemArray](README.md#itemarray).[filterByLocales](README.md#filterbylocales)*

*Defined in [src/lib/item/types-abstract.ts:199](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L199)*

#### Type declaration:

▸ (`locales`: NonNullable‹Item["locale"]›[], `options?`: [FilterByLocaleOptions](README.md#filterbylocaleoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`locales` | NonNullable‹Item["locale"]›[] |
`options?` | [FilterByLocaleOptions](README.md#filterbylocaleoptions) |

###  filterByPath

• **filterByPath**: *function*

*Inherited from [ItemArray](README.md#itemarray).[filterByPath](README.md#filterbypath)*

*Defined in [src/lib/item/types-abstract.ts:187](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L187)*

#### Type declaration:

▸ (`path`: NonNullable‹Item["path"]›, `options?`: [FilterByPathOptions](README.md#filterbypathoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`path` | NonNullable‹Item["path"]› |
`options?` | [FilterByPathOptions](README.md#filterbypathoptions) |

###  filterByPaths

• **filterByPaths**: *function*

*Inherited from [ItemArray](README.md#itemarray).[filterByPaths](README.md#filterbypaths)*

*Defined in [src/lib/item/types-abstract.ts:191](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L191)*

#### Type declaration:

▸ (`paths`: NonNullable‹Item["path"]›[], `options?`: [FilterByPathOptions](README.md#filterbypathoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | NonNullable‹Item["path"]›[] |
`options?` | [FilterByPathOptions](README.md#filterbypathoptions) |

###  filterByValue

• **filterByValue**: *function*

*Inherited from [ItemArray](README.md#itemarray).[filterByValue](README.md#filterbyvalue)*

*Defined in [src/lib/item/types-abstract.ts:203](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L203)*

#### Type declaration:

▸ (`value`: any, `options?`: [FilterByValueOptions](README.md#filterbyvalueoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`options?` | [FilterByValueOptions](README.md#filterbyvalueoptions) |

###  filterByValues

• **filterByValues**: *function*

*Inherited from [ItemArray](README.md#itemarray).[filterByValues](README.md#filterbyvalues)*

*Defined in [src/lib/item/types-abstract.ts:204](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L204)*

#### Type declaration:

▸ (`value`: any[], `options?`: [FilterByValueOptions](README.md#filterbyvalueoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any[] |
`options?` | [FilterByValueOptions](README.md#filterbyvalueoptions) |

###  filterMissing

• **filterMissing**: *function*

*Inherited from [ItemArray](README.md#itemarray).[filterMissing](README.md#filtermissing)*

*Defined in [src/lib/item/types-abstract.ts:208](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L208)*

#### Type declaration:

▸ (`options?`: [FilterMissingOptions](README.md#filtermissingoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [FilterMissingOptions](README.md#filtermissingoptions) |

###  intersection

• **intersection**: *function*

*Inherited from [ItemArray](README.md#itemarray).[intersection](README.md#intersection)*

*Defined in [src/lib/item/types-abstract.ts:153](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L153)*

#### Type declaration:

▸ (`other`: [ItemArrayLike](README.md#itemarraylike), `options?`: [IntersectionOptions](README.md#intersectionoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [ItemArrayLike](README.md#itemarraylike) |
`options?` | [IntersectionOptions](README.md#intersectionoptions) |

###  items

• **items**: *[Item](README.md#item)[]*

*Inherited from [ItemArray](README.md#itemarray).[items](README.md#items)*

*Defined in [src/lib/item/types-abstract.ts:141](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L141)*

###  itemsByLocale

• **itemsByLocale**: *function*

*Inherited from [ItemArray](README.md#itemarray).[itemsByLocale](README.md#itemsbylocale)*

*Defined in [src/lib/item/types-abstract.ts:179](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L179)*

#### Type declaration:

▸ (`locale`: string, `options?`: [ItemsByLocaleOptions](README.md#itemsbylocaleoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`locale` | string |
`options?` | [ItemsByLocaleOptions](README.md#itemsbylocaleoptions) |

###  itemsByLocales

• **itemsByLocales**: *function*

*Inherited from [ItemArray](README.md#itemarray).[itemsByLocales](README.md#itemsbylocales)*

*Defined in [src/lib/item/types-abstract.ts:175](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L175)*

#### Type declaration:

▸ (`locales`: string[], `options?`: [ItemsByLocaleOptions](README.md#itemsbylocaleoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`locales` | string[] |
`options?` | [ItemsByLocaleOptions](README.md#itemsbylocaleoptions) |

###  length

• **length**: *number*

*Inherited from [ItemArray](README.md#itemarray).[length](README.md#length)*

*Defined in [src/lib/item/types-abstract.ts:145](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L145)*

###  prop

• **prop**: *function*

*Inherited from [ItemArray](README.md#itemarray).[prop](README.md#prop)*

*Defined in [src/lib/item/types-abstract.ts:146](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L146)*

#### Type declaration:

▸ <**K**>(`prop`: K): *Item[K][]*

**Type parameters:**

▪ **K**: *keyof Item*

**Parameters:**

Name | Type |
------ | ------ |
`prop` | K |

###  push

• **push**: *function*

*Inherited from [ItemArray](README.md#itemarray).[push](README.md#push)*

*Defined in [src/lib/item/types-abstract.ts:144](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L144)*

#### Type declaration:

▸ (...`items`: [Item](README.md#item)[]): *ReturnType‹Array<any>["push"]›*

**Parameters:**

Name | Type |
------ | ------ |
`...items` | [Item](README.md#item)[] |

###  toObject

• **toObject**: *function*

*Inherited from [ItemArray](README.md#itemarray).[toObject](README.md#toobject)*

*Defined in [src/lib/item/types-abstract.ts:210](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L210)*

#### Type declaration:

▸ <**O**>(`options`: O): *[ToObjectResult](README.md#toobjectresult)‹O["simple"], O["merge"], [Item](README.md#item)›*

**Type parameters:**

▪ **O**: *[ToObjectOptions](README.md#toobjectoptions)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | O |

###  union

• **union**: *function*

*Inherited from [ItemArray](README.md#itemarray).[union](README.md#union)*

*Defined in [src/lib/item/types-abstract.ts:152](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L152)*

#### Type declaration:

▸ (`other`: [ItemArrayLike](README.md#itemarraylike)‹[Item](README.md#item)›, `options?`: [UnionOptions](README.md#unionoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [ItemArrayLike](README.md#itemarraylike)‹[Item](README.md#item)› |
`options?` | [UnionOptions](README.md#unionoptions) |

###  uniqProp

• **uniqProp**: *function*

*Inherited from [ItemArray](README.md#itemarray).[uniqProp](README.md#uniqprop)*

*Defined in [src/lib/item/types-abstract.ts:147](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L147)*

#### Type declaration:

▸ <**K**>(`prop`: K): *Item[K][]*

**Type parameters:**

▪ **K**: *keyof Item*

**Parameters:**

Name | Type |
------ | ------ |
`prop` | K |

###  update

• **update**: *function*

*Inherited from [ItemArray](README.md#itemarray).[update](README.md#update)*

*Defined in [src/lib/item/types-abstract.ts:171](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L171)*

#### Type declaration:

▸ <**T2**>(`other`: [ItemArrayLike](README.md#itemarraylike)‹T2›, `options?`: [UpdateOptions](README.md#updateoptions)‹[Item](README.md#item), T2›): *[UpdateReturn](README.md#updatereturn)‹[Item](README.md#item), T2›*

**Type parameters:**

▪ **T2**: *[Item](README.md#item)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [ItemArrayLike](README.md#itemarraylike)‹T2› |
`options?` | [UpdateOptions](README.md#updateoptions)‹[Item](README.md#item), T2› |

###  updateBy

• **updateBy**: *function*

*Inherited from [ItemArray](README.md#itemarray).[updateBy](README.md#updateby)*

*Defined in [src/lib/item/types-abstract.ts:157](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L157)*

#### Type declaration:

▸ <**T2**>(`other`: [ItemArrayLike](README.md#itemarraylike)‹T2›, `options?`: [UpdateByOptions](README.md#updatebyoptions)‹[Item](README.md#item), T2›): *[UpdateReturn](README.md#updatereturn)‹[Item](README.md#item), T2›*

**Type parameters:**

▪ **T2**: *[Item](README.md#item)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [ItemArrayLike](README.md#itemarraylike)‹T2› |
`options?` | [UpdateByOptions](README.md#updatebyoptions)‹[Item](README.md#item), T2› |

###  updateProp

• **updateProp**: *function*

*Inherited from [ItemArray](README.md#itemarray).[updateProp](README.md#updateprop)*

*Defined in [src/lib/item/types-abstract.ts:161](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L161)*

#### Type declaration:

▸ <**T2**>(`other`: [ItemArrayLike](README.md#itemarraylike)‹T2›, `prop`: keyof Item, `options?`: [UpdatePropOptions](README.md#updatepropoptions)‹[Item](README.md#item)›): *[UpdateReturn](README.md#updatereturn)‹[Item](README.md#item), T2›*

**Type parameters:**

▪ **T2**: *[Item](README.md#item)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [ItemArrayLike](README.md#itemarraylike)‹T2› |
`prop` | keyof Item |
`options?` | [UpdatePropOptions](README.md#updatepropoptions)‹[Item](README.md#item)› |

###  updateProps

• **updateProps**: *function*

*Inherited from [ItemArray](README.md#itemarray).[updateProps](README.md#updateprops)*

*Defined in [src/lib/item/types-abstract.ts:166](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L166)*

#### Type declaration:

▸ <**T2**>(`other`: [ItemArrayLike](README.md#itemarraylike)‹T2›, `props`: keyof T[], `options?`: [UpdatePropOptions](README.md#updatepropoptions)‹[Item](README.md#item)›): *[UpdateReturn](README.md#updatereturn)‹[Item](README.md#item), T2›*

**Type parameters:**

▪ **T2**: *[Item](README.md#item)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [ItemArrayLike](README.md#itemarraylike)‹T2› |
`props` | keyof T[] |
`options?` | [UpdatePropOptions](README.md#updatepropoptions)‹[Item](README.md#item)› |

###  ItemArrayLike

Ƭ **ItemArrayLike**: *[ItemList](README.md#itemlist) | IterableIterator‹[Item](README.md#item)›*

*Defined in [src/lib/definition/types-abstract.ts:39](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/types-abstract.ts#L39)*

###  ItemList

Ƭ **ItemList**: *[ItemArray](README.md#itemarray) | [Item](README.md#item)[]*

*Defined in [src/lib/definition/types-abstract.ts:37](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/types-abstract.ts#L37)*

___

###  AIMethodCollection

• **AIMethodCollection**:

*Defined in [src/lib/collection/types-abstract.ts:142](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L142)*

Subtype of `ICollection` which holds groups of functions.

Requires entries to contain `methods` property and optional `options`
object with options can be passed to the stored functions.

### `Abstract` Collection

• **Collection**:

*Defined in [src/lib/collection/types-abstract.ts:223](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L223)*

Subtype of `ICollection.Collection` which holds groups of functions.

Requires entries to contain `methods` property and optional `options`
object with options can be passed to the stored functions.

###  collection

• **collection**: *[ItemMap](README.md#itemmap)* = new Map()

*Overrides [Collection](README.md#abstract-collection).[collection](README.md#collection)*

*Defined in [src/lib/collection/types-abstract.ts:224](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L224)*

###  add

▸ **add**(`options`: [SetOptions](README.md#setoptions)): *void*

*Overrides [Collection](README.md#abstract-collection).[add](README.md#add)*

*Defined in [src/lib/collection/types-abstract.ts:228](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L228)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SetOptions](README.md#setoptions) |

**Returns:** *void*

###  delete

▸ **delete**(`name`: [Name](README.md#name)): *void*

*Inherited from [Collection](README.md#abstract-collection).[delete](README.md#delete)*

*Defined in [src/lib/collection/types-abstract.ts:107](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L107)*

Remove an item from the collection.

Throws if no item with the name exists in the collection.

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |

**Returns:** *void*

###  get

▸ **get**(`name`: [Name](README.md#name)): *undefined | [ItemBase](README.md#itembase) & [Item](README.md#item)*

*Overrides [Collection](README.md#abstract-collection).[get](README.md#get)*

*Defined in [src/lib/collection/types-abstract.ts:225](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L225)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |

**Returns:** *undefined | [ItemBase](README.md#itembase) & [Item](README.md#item)*

###  getOption

▸ **getOption**(`name`: [Name](README.md#name), `optionKey`: string): *any*

*Defined in [src/lib/collection/types-abstract.ts:240](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L240)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |
`optionKey` | string |

**Returns:** *any*

###  groupByResolve

▸ **groupByResolve**<**T**>(`queries`: T[], `iteratee?`: undefined | function): *[Map](classes/arraymap.md#static-map)‹undefined | [NamedItem](README.md#nameditem)‹›, T[]›*

*Overrides [Collection](README.md#abstract-collection).[groupByResolve](README.md#groupbyresolve)*

*Defined in [src/lib/collection/types-abstract.ts:234](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L234)*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

Name | Type |
------ | ------ |
`queries` | T[] |
`iteratee?` | undefined &#124; function |

**Returns:** *[Map](classes/arraymap.md#static-map)‹undefined | [NamedItem](README.md#nameditem)‹›, T[]›*

###  has

▸ **has**(`name`: [Name](README.md#name)): *boolean*

*Inherited from [Collection](README.md#abstract-collection).[has](README.md#has)*

*Defined in [src/lib/collection/types-abstract.ts:91](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L91)*

Check if a collection has an item by it's name.

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |

**Returns:** *boolean*

###  options

▸ **options**(`name`: [Name](README.md#name)): *object*

*Defined in [src/lib/collection/types-abstract.ts:237](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L237)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |

**Returns:** *object*

* \[ **key**: *number*\]: V

###  resolve

▸ **resolve**(`query`: string): *undefined | [NamedItem](README.md#nameditem)‹›*

*Overrides [Collection](README.md#abstract-collection).[resolve](README.md#resolve)*

*Defined in [src/lib/collection/types-abstract.ts:231](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L231)*

**Parameters:**

Name | Type |
------ | ------ |
`query` | string |

**Returns:** *undefined | [NamedItem](README.md#nameditem)‹›*

###  setOption

▸ **setOption**(`name`: [Name](README.md#name), `optionKey`: string, `optionValue`: any): *void*

*Defined in [src/lib/collection/types-abstract.ts:243](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L243)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |
`optionKey` | string |
`optionValue` | any |

**Returns:** *void*

###  validate

▸ **validate**(`name`: [Name](README.md#name), `prop`: string): *void*

*Inherited from [Collection](README.md#abstract-collection).[validate](README.md#validate)*

*Defined in [src/lib/collection/types-abstract.ts:130](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L130)*

Validate that a particular item in collection has a specific property.

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |
`prop` | string |

**Returns:** *void*

###  validateMethod

▸ **validateMethod**(`name`: [Name](README.md#name), `method`: keyof ItemMethods): *void*

*Defined in [src/lib/collection/types-abstract.ts:246](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L246)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |
`method` | keyof ItemMethods |

**Returns:** *void*

###  Ctor

• **Ctor**:

*Defined in [src/lib/collection/types-abstract.ts:182](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L182)*

Constructor

###  constructor

\+ **new Ctor**(`options?`: [CtorOptions](README.md#ctoroptions)): *[Collection](README.md#abstract-collection)*

*Defined in [src/lib/collection/types-abstract.ts:182](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L182)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [CtorOptions](README.md#ctoroptions) |

**Returns:** *[Collection](README.md#abstract-collection)*

###  CtorOptions

• **CtorOptions**:

*Defined in [src/lib/collection/types-abstract.ts:172](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L172)*

Constructor options object

### `Optional` collection

• **collection**? : *object | [Map](classes/arraymap.md#static-map)‹[Name](README.md#name), [Arg](README.md#arg)›*

*Overrides [CtorOptions](README.md#ctoroptions).[collection](README.md#optional-collection)*

*Defined in [src/lib/collection/types-abstract.ts:176](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L176)*

Collection instance to be used instead of the default

###  ItemBase

• **ItemBase**:

*Defined in [src/lib/collection/types-abstract.ts:152](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L152)*

Item properties modified in IMethodCollection relative to ICollection

###  methods

• **methods**: *[ItemMethods](README.md#itemmethods)*

*Defined in [src/lib/collection/types-abstract.ts:153](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L153)*

### `Optional` options

• **options**? : *[AnyObj](README.md#anyobj)*

*Defined in [src/lib/collection/types-abstract.ts:154](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L154)*

###  ItemMethods

• **ItemMethods**:

*Defined in [src/lib/collection/types-abstract.ts:145](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L145)*

###  NamedItem

• **NamedItem**:

*Defined in [src/lib/collection/types-abstract.ts:208](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L208)*

Extension of Item which also contains name property

###  methods

• **methods**: *[ItemMethods](README.md#itemmethods)*

*Inherited from [ItemBase](README.md#itembase).[methods](README.md#methods)*

*Defined in [src/lib/collection/types-abstract.ts:153](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L153)*

###  name

• **name**: *[Name](README.md#name)*

*Defined in [src/lib/collection/types-abstract.ts:209](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L209)*

### `Optional` options

• **options**? : *[AnyObj](README.md#anyobj)*

*Inherited from [ItemBase](README.md#itembase).[options](README.md#optional-options)*

*Defined in [src/lib/collection/types-abstract.ts:154](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L154)*

###  patterns

• **patterns**: *RegExp[]*

*Inherited from [Item](README.md#item).[patterns](README.md#patterns)*

*Defined in [src/lib/collection/types-abstract.ts:23](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L23)*

###  Arg

Ƭ **Arg**: *[ItemBase](README.md#itembase) & [Arg](README.md#arg)*

*Defined in [src/lib/collection/types-abstract.ts:167](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L167)*

Item format passed to the constructor that will be
translated to Collection entry

###  BaseClass

Ƭ **BaseClass**: *object*

*Defined in [src/lib/collection/types-abstract.ts:190](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L190)*

Type used to force types of IMethodCollection over the
ICollection.Collection class

#### Type declaration:

###  Class

Ƭ **Class**: *[Ctor](README.md#ctor) & typeof Collection*

*Defined in [src/lib/collection/types-abstract.ts:198](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L198)*

Collection class type with contructor

###  Item

Ƭ **Item**: *[ItemBase](README.md#itembase) & [Item](README.md#item)*

*Defined in [src/lib/collection/types-abstract.ts:161](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L161)*

Single entry containing various methods and an options object which is
passed to the methods.

###  ItemMap

Ƭ **ItemMap**: *[Map](classes/arraymap.md#static-map)‹[Name](README.md#name), [Item](README.md#item)›*

*Defined in [src/lib/collection/types-abstract.ts:215](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L215)*

Mapping of name to Item

###  SetOptions

Ƭ **SetOptions**: *[SetOptions](README.md#setoptions) & [ItemBase](README.md#itembase)*

*Defined in [src/lib/collection/types-abstract.ts:203](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L203)*

Options passed to Set and Add methods

___

###  AIResolver

• **AIResolver**:

*Defined in [src/lib/resolver/types-abstract.ts:13](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types-abstract.ts#L13)*

### `Abstract` KeyResolver

• **KeyResolver**:

*Defined in [src/lib/resolver/types-abstract.ts:46](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types-abstract.ts#L46)*

###  logger

• **logger**: *function* = {} as (msg: string) => void

*Inherited from [Resolver](README.md#abstract-resolver).[logger](README.md#logger)*

*Defined in [src/lib/resolver/types-abstract.ts:20](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types-abstract.ts#L20)*

#### Type declaration:

▸ (`msg`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string |

###  options

• **options**: *object* = {} as object

*Inherited from [Resolver](README.md#abstract-resolver).[options](README.md#options)*

*Defined in [src/lib/resolver/types-abstract.ts:18](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types-abstract.ts#L18)*

###  resolve

• **resolve**: *function* = {} as (
      keys: any[],
      items: (any & { path?: any })[],
      options?: ResolveOptions,
    ) => string[][] | Promise<string[][]>

*Overrides [Resolver](README.md#abstract-resolver).[resolve](README.md#resolve)*

*Defined in [src/lib/resolver/types-abstract.ts:47](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types-abstract.ts#L47)*

#### Type declaration:

▸ (`keys`: any[], `items`: any[], `options?`: [ResolveOptions](README.md#resolveoptions)): *string[][] | Promise‹string[][]›*

**Parameters:**

Name | Type |
------ | ------ |
`keys` | any[] |
`items` | any[] |
`options?` | [ResolveOptions](README.md#resolveoptions) |

### `Abstract` LocaleResolver

• **LocaleResolver**:

*Defined in [src/lib/resolver/types-abstract.ts:38](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types-abstract.ts#L38)*

###  logger

• **logger**: *function* = {} as (msg: string) => void

*Inherited from [Resolver](README.md#abstract-resolver).[logger](README.md#logger)*

*Defined in [src/lib/resolver/types-abstract.ts:20](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types-abstract.ts#L20)*

#### Type declaration:

▸ (`msg`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string |

###  options

• **options**: *object* = {} as object

*Inherited from [Resolver](README.md#abstract-resolver).[options](README.md#options)*

*Defined in [src/lib/resolver/types-abstract.ts:18](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types-abstract.ts#L18)*

###  resolve

• **resolve**: *function* = {} as (
      locales: any[],
      items: (any & { locale?: any })[],
      options?: ResolveOptions,
    ) => string[] | Promise<string[]>

*Overrides [Resolver](README.md#abstract-resolver).[resolve](README.md#resolve)*

*Defined in [src/lib/resolver/types-abstract.ts:39](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types-abstract.ts#L39)*

#### Type declaration:

▸ (`locales`: any[], `items`: any[], `options?`: [ResolveOptions](README.md#resolveoptions)): *string[] | Promise‹string[]›*

**Parameters:**

Name | Type |
------ | ------ |
`locales` | any[] |
`items` | any[] |
`options?` | [ResolveOptions](README.md#resolveoptions) |

### `Abstract` PathResolver

• **PathResolver**:

*Defined in [src/lib/resolver/types-abstract.ts:31](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types-abstract.ts#L31)*

###  logger

• **logger**: *function* = {} as (msg: string) => void

*Inherited from [Resolver](README.md#abstract-resolver).[logger](README.md#logger)*

*Defined in [src/lib/resolver/types-abstract.ts:20](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types-abstract.ts#L20)*

#### Type declaration:

▸ (`msg`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string |

###  options

• **options**: *object* = {} as object

*Inherited from [Resolver](README.md#abstract-resolver).[options](README.md#options)*

*Defined in [src/lib/resolver/types-abstract.ts:18](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types-abstract.ts#L18)*

###  resolve

• **resolve**: *function* = {} as (
      paths: any[],
      options?: ResolveOptions,
    ) => string[] | Promise<string[]>

*Overrides [Resolver](README.md#abstract-resolver).[resolve](README.md#resolve)*

*Defined in [src/lib/resolver/types-abstract.ts:32](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types-abstract.ts#L32)*

#### Type declaration:

▸ (`paths`: any[], `options?`: [ResolveOptions](README.md#resolveoptions)): *string[] | Promise‹string[]›*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | any[] |
`options?` | [ResolveOptions](README.md#resolveoptions) |

### `Abstract` Resolver

• **Resolver**:

*Defined in [src/lib/resolver/types-abstract.ts:17](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types-abstract.ts#L17)*

Resolver interface

###  logger

• **logger**: *function* = {} as (msg: string) => void

*Defined in [src/lib/resolver/types-abstract.ts:20](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types-abstract.ts#L20)*

#### Type declaration:

▸ (`msg`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string |

###  options

• **options**: *object* = {} as object

*Defined in [src/lib/resolver/types-abstract.ts:18](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types-abstract.ts#L18)*

###  resolve

• **resolve**: *function* = {} as (inputs: any[], ...args: any[]) => any[] | Promise<any[]>

*Defined in [src/lib/resolver/types-abstract.ts:22](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types-abstract.ts#L22)*

#### Type declaration:

▸ (`inputs`: any[], ...`args`: any[]): *any[] | Promise‹any[]›*

**Parameters:**

Name | Type |
------ | ------ |
`inputs` | any[] |
`...args` | any[] |

### `Abstract` ValueResolver

• **ValueResolver**:

*Defined in [src/lib/resolver/types-abstract.ts:54](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types-abstract.ts#L54)*

###  logger

• **logger**: *function* = {} as (msg: string) => void

*Inherited from [Resolver](README.md#abstract-resolver).[logger](README.md#logger)*

*Defined in [src/lib/resolver/types-abstract.ts:20](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types-abstract.ts#L20)*

#### Type declaration:

▸ (`msg`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string |

###  options

• **options**: *object* = {} as object

*Inherited from [Resolver](README.md#abstract-resolver).[options](README.md#options)*

*Defined in [src/lib/resolver/types-abstract.ts:18](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types-abstract.ts#L18)*

###  resolve

• **resolve**: *function* = {} as (
      values: any[],
      items: ({ value?: any } & any)[],
      options?: ResolveOptions,
    ) => any[] | Promise<any[]>

*Overrides [Resolver](README.md#abstract-resolver).[resolve](README.md#resolve)*

*Defined in [src/lib/resolver/types-abstract.ts:55](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types-abstract.ts#L55)*

#### Type declaration:

▸ (`values`: any[], `items`: any[], `options?`: [ResolveOptions](README.md#resolveoptions)): *any[] | Promise‹any[]›*

**Parameters:**

Name | Type |
------ | ------ |
`values` | any[] |
`items` | any[] |
`options?` | [ResolveOptions](README.md#resolveoptions) |

###  CtorOptions

• **CtorOptions**:

*Defined in [src/lib/resolver/types-abstract.ts:27](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types-abstract.ts#L27)*

### `Optional` logger

• **logger**? : *undefined | function*

*Defined in [src/lib/resolver/types-abstract.ts:28](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types-abstract.ts#L28)*

###  ResolveOptions

Ƭ **ResolveOptions**: *[AnyObj](README.md#anyobj)*

*Defined in [src/lib/resolver/types-abstract.ts:25](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types-abstract.ts#L25)*

___

###  AISchemator

• **AISchemator**:

*Defined in [src/lib/schemator/types-abstract.ts:13](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/types-abstract.ts#L13)*

### `Abstract` Schemator

• **Schemator**:

*Defined in [src/lib/schemator/types-abstract.ts:28](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/types-abstract.ts#L28)*

###  deserialize

• **deserialize**: *function* = {} as (
      schema: string,
      options?: DeserializeOptions,
    ) => any | Promise<any>

*Defined in [src/lib/schemator/types-abstract.ts:43](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/types-abstract.ts#L43)*

#### Type declaration:

▸ (`schema`: string, `options?`: [DeserializeOptions](README.md#deserializeoptions)): *any | Promise‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | string |
`options?` | [DeserializeOptions](README.md#deserializeoptions) |

###  generate

• **generate**: *function* = {} as (
      data: any,
      options?: GenerateOptions,
    ) => any | Promise<any>

*Defined in [src/lib/schemator/types-abstract.ts:33](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/types-abstract.ts#L33)*

#### Type declaration:

▸ (`data`: any, `options?`: [GenerateOptions](README.md#generateoptions)): *any | Promise‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |
`options?` | [GenerateOptions](README.md#generateoptions) |

###  logger

• **logger**: *function* = {} as (msg: string) => void

*Defined in [src/lib/schemator/types-abstract.ts:31](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/types-abstract.ts#L31)*

#### Type declaration:

▸ (`msg`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string |

###  options

• **options**: *object* = {} as AnyObj

*Defined in [src/lib/schemator/types-abstract.ts:29](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/types-abstract.ts#L29)*

#### Type declaration:

* \[ **key**: *number*\]: V

###  serialize

• **serialize**: *function* = {} as (
      schema: any,
      options?: SerializeOptions,
    ) => string | Buffer | Promise<string | Buffer>

*Defined in [src/lib/schemator/types-abstract.ts:38](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/types-abstract.ts#L38)*

#### Type declaration:

▸ (`schema`: any, `options?`: [SerializeOptions](README.md#serializeoptions)): *string | Buffer | Promise‹string | Buffer›*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | any |
`options?` | [SerializeOptions](README.md#serializeoptions) |

###  CtorOptions

• **CtorOptions**:

*Defined in [src/lib/schemator/types-abstract.ts:21](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/types-abstract.ts#L21)*

### `Optional` logger

• **logger**? : *undefined | function*

*Defined in [src/lib/schemator/types-abstract.ts:25](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/types-abstract.ts#L25)*

### `Optional` scope

• **scope**? : *"locale" | "master"*

*Inherited from [GenerateOptions](README.md#generateoptions).[scope](README.md#optional-scope)*

*Defined in [src/lib/schemator/types-abstract.ts:15](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/types-abstract.ts#L15)*

###  GenerateOptions

• **GenerateOptions**:

*Defined in [src/lib/schemator/types-abstract.ts:14](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/types-abstract.ts#L14)*

### `Optional` scope

• **scope**? : *"locale" | "master"*

*Defined in [src/lib/schemator/types-abstract.ts:15](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/types-abstract.ts#L15)*

###  DeserializeOptions

Ƭ **DeserializeOptions**: *[AnyObj](README.md#anyobj)*

*Defined in [src/lib/schemator/types-abstract.ts:19](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/types-abstract.ts#L19)*

###  SerializeOptions

Ƭ **SerializeOptions**: *[AnyObj](README.md#anyobj)*

*Defined in [src/lib/schemator/types-abstract.ts:18](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/types-abstract.ts#L18)*

___

###  AISerializerCollection

• **AISerializerCollection**:

*Defined in [src/lib/collection/types-abstract.ts:373](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L373)*

Subtype of `IMethodCollection` which holds groups of functions used as
de-/serializers.

### `Abstract` Collection

• **Collection**:

*Defined in [src/lib/collection/types-abstract.ts:454](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L454)*

Subtype of `IMethodCollection` which holds groups of functions used as
de-/serializers.

###  collection

• **collection**: *[ItemMap](README.md#itemmap)* = new Map()

*Overrides [Collection](README.md#abstract-collection).[collection](README.md#collection)*

*Defined in [src/lib/collection/types-abstract.ts:455](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L455)*

###  add

▸ **add**(`options`: [SetOptions](README.md#setoptions)): *void*

*Overrides [Collection](README.md#abstract-collection).[add](README.md#add)*

*Defined in [src/lib/collection/types-abstract.ts:459](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L459)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SetOptions](README.md#setoptions) |

**Returns:** *void*

###  delete

▸ **delete**(`name`: [Name](README.md#name)): *void*

*Inherited from [Collection](README.md#abstract-collection).[delete](README.md#delete)*

*Defined in [src/lib/collection/types-abstract.ts:107](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L107)*

Remove an item from the collection.

Throws if no item with the name exists in the collection.

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |

**Returns:** *void*

###  get

▸ **get**(`name`: [Name](README.md#name)): *undefined | [ItemBase](README.md#itembase)‹› & [ItemBase](README.md#itembase) & [Item](README.md#item)*

*Overrides [Collection](README.md#abstract-collection).[get](README.md#get)*

*Defined in [src/lib/collection/types-abstract.ts:456](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L456)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |

**Returns:** *undefined | [ItemBase](README.md#itembase)‹› & [ItemBase](README.md#itembase) & [Item](README.md#item)*

###  getOption

▸ **getOption**(`name`: [Name](README.md#name), `optionKey`: string): *any*

*Inherited from [Collection](README.md#abstract-collection).[getOption](README.md#getoption)*

*Defined in [src/lib/collection/types-abstract.ts:240](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L240)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |
`optionKey` | string |

**Returns:** *any*

###  groupByResolve

▸ **groupByResolve**<**T**>(`queries`: T[], `iteratee?`: undefined | function): *[Map](classes/arraymap.md#static-map)‹undefined | [NamedItem](README.md#nameditem)‹›, T[]›*

*Overrides [Collection](README.md#abstract-collection).[groupByResolve](README.md#groupbyresolve)*

*Defined in [src/lib/collection/types-abstract.ts:465](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L465)*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

Name | Type |
------ | ------ |
`queries` | T[] |
`iteratee?` | undefined &#124; function |

**Returns:** *[Map](classes/arraymap.md#static-map)‹undefined | [NamedItem](README.md#nameditem)‹›, T[]›*

###  has

▸ **has**(`name`: [Name](README.md#name)): *boolean*

*Inherited from [Collection](README.md#abstract-collection).[has](README.md#has)*

*Defined in [src/lib/collection/types-abstract.ts:91](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L91)*

Check if a collection has an item by it's name.

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |

**Returns:** *boolean*

###  options

▸ **options**(`name`: [Name](README.md#name)): *object*

*Inherited from [Collection](README.md#abstract-collection).[options](README.md#options)*

*Defined in [src/lib/collection/types-abstract.ts:237](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L237)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |

**Returns:** *object*

* \[ **key**: *number*\]: V

###  resolve

▸ **resolve**(`query`: string): *undefined | [NamedItem](README.md#nameditem)‹›*

*Overrides [Collection](README.md#abstract-collection).[resolve](README.md#resolve)*

*Defined in [src/lib/collection/types-abstract.ts:462](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L462)*

**Parameters:**

Name | Type |
------ | ------ |
`query` | string |

**Returns:** *undefined | [NamedItem](README.md#nameditem)‹›*

###  setOption

▸ **setOption**(`name`: [Name](README.md#name), `optionKey`: string, `optionValue`: any): *void*

*Inherited from [Collection](README.md#abstract-collection).[setOption](README.md#setoption)*

*Defined in [src/lib/collection/types-abstract.ts:243](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L243)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |
`optionKey` | string |
`optionValue` | any |

**Returns:** *void*

###  validate

▸ **validate**(`name`: [Name](README.md#name), `prop`: string): *void*

*Inherited from [Collection](README.md#abstract-collection).[validate](README.md#validate)*

*Defined in [src/lib/collection/types-abstract.ts:130](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L130)*

Validate that a particular item in collection has a specific property.

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |
`prop` | string |

**Returns:** *void*

###  validateMethod

▸ **validateMethod**(`name`: [Name](README.md#name), `method`: keyof ItemMethods): *void*

*Overrides [Collection](README.md#abstract-collection).[validateMethod](README.md#validatemethod)*

*Defined in [src/lib/collection/types-abstract.ts:468](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L468)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |
`method` | keyof ItemMethods |

**Returns:** *void*

###  Ctor

• **Ctor**:

*Defined in [src/lib/collection/types-abstract.ts:424](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L424)*

Constructor

###  constructor

\+ **new Ctor**(`options?`: [CtorOptions](README.md#ctoroptions)): *[Collection](README.md#abstract-collection)*

*Defined in [src/lib/collection/types-abstract.ts:424](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L424)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [CtorOptions](README.md#ctoroptions) |

**Returns:** *[Collection](README.md#abstract-collection)*

###  CtorOptions

• **CtorOptions**:

*Defined in [src/lib/collection/types-abstract.ts:414](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L414)*

Constructor options object

### `Optional` collection

• **collection**? : *object | [Map](classes/arraymap.md#static-map)‹[Name](README.md#name), [Arg](README.md#arg)›*

*Overrides [CtorOptions](README.md#ctoroptions).[collection](README.md#optional-collection)*

*Defined in [src/lib/collection/types-abstract.ts:418](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L418)*

Collection instance to be used instead of the default

###  ItemBase

• **ItemBase**:

*Defined in [src/lib/collection/types-abstract.ts:394](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L394)*

Item properties modified in ISerializerCollection relative to ICollection

###  methods

• **methods**: *[ItemMethods](README.md#itemmethods)*

*Defined in [src/lib/collection/types-abstract.ts:396](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L396)*

###  ItemMethods

• **ItemMethods**:

*Defined in [src/lib/collection/types-abstract.ts:386](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L386)*

### `Optional` deserializer

• **deserializer**? : *[Deserializer](README.md#deserializer)*

*Defined in [src/lib/collection/types-abstract.ts:388](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L388)*

### `Optional` serializer

• **serializer**? : *[Serializer](README.md#serializer)*

*Defined in [src/lib/collection/types-abstract.ts:387](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L387)*

###  NamedItem

• **NamedItem**:

*Defined in [src/lib/collection/types-abstract.ts:441](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L441)*

Extension of AdaptorItem which also contains name property

###  methods

• **methods**: *[ItemMethods](README.md#itemmethods)*

*Inherited from [ItemBase](README.md#itembase).[methods](README.md#methods)*

*Overrides [ItemBase](README.md#itembase).[methods](README.md#methods)*

*Defined in [src/lib/collection/types-abstract.ts:396](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L396)*

###  name

• **name**: *[Name](README.md#name)*

*Defined in [src/lib/collection/types-abstract.ts:442](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L442)*

### `Optional` options

• **options**? : *[AnyObj](README.md#anyobj)*

*Inherited from [ItemBase](README.md#itembase).[options](README.md#optional-options)*

*Defined in [src/lib/collection/types-abstract.ts:154](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L154)*

###  patterns

• **patterns**: *RegExp[]*

*Inherited from [Item](README.md#item).[patterns](README.md#patterns)*

*Defined in [src/lib/collection/types-abstract.ts:23](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L23)*

###  Arg

Ƭ **Arg**: *[ItemBase](README.md#itembase) & [Arg](README.md#arg)*

*Defined in [src/lib/collection/types-abstract.ts:409](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L409)*

Item format passed to AdaptorCollection constructor that will be
translated to AdaptorItem object

###  Class

Ƭ **Class**: *[Ctor](README.md#ctor) & typeof Collection*

*Defined in [src/lib/collection/types-abstract.ts:431](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L431)*

Collection class type with contructor

###  Deserializer

Ƭ **Deserializer**: *[AnyFunc](README.md#anyfunc)‹[string, [AnyObj](README.md#anyobj)], any | Promise‹any››*

*Defined in [src/lib/collection/types-abstract.ts:384](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L384)*

Deserializer function

###  Item

Ƭ **Item**: *[ItemBase](README.md#itembase) & [Item](README.md#item)*

*Defined in [src/lib/collection/types-abstract.ts:403](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L403)*

Interface of a single entry containing methods for interacting with
specific file type.

###  ItemMap

Ƭ **ItemMap**: *[Map](classes/arraymap.md#static-map)‹[Name](README.md#name), [Item](README.md#item)›*

*Defined in [src/lib/collection/types-abstract.ts:448](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L448)*

Mapping of name to Item

###  Serializer

Ƭ **Serializer**: *[AnyFunc](README.md#anyfunc)‹[any, [AnyObj](README.md#anyobj)], string | Promise‹string››*

*Defined in [src/lib/collection/types-abstract.ts:379](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L379)*

Serializer function

###  SetOptions

Ƭ **SetOptions**: *[SetOptions](README.md#setoptions) & [ItemBase](README.md#itembase)*

*Defined in [src/lib/collection/types-abstract.ts:436](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L436)*

Options passed to Set and Add methods

___

###  AIUsage

• **AIUsage**:

*Defined in [src/lib/usage/types-abstract.ts:13](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/usage/types-abstract.ts#L13)*

###  CtorOptions

• **CtorOptions**:

*Defined in [src/lib/usage/types-abstract.ts:14](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/usage/types-abstract.ts#L14)*

### `Optional` blockIndex

• **blockIndex**? : *Item["blockIndex"]*

*Inherited from [CtorOptions](README.md#ctoroptions).[blockIndex](README.md#optional-blockindex)*

*Defined in [src/lib/item/types-abstract.ts:136](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L136)*

### `Optional` column

• **column**? : *Item["column"]*

*Inherited from [CtorOptions](README.md#ctoroptions).[column](README.md#optional-column)*

*Defined in [src/lib/item/types-abstract.ts:133](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L133)*

### `Optional` line

• **line**? : *Item["line"]*

*Inherited from [CtorOptions](README.md#ctoroptions).[line](README.md#optional-line)*

*Defined in [src/lib/item/types-abstract.ts:132](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L132)*

### `Optional` locale

• **locale**? : *Item["locale"]*

*Inherited from [CtorOptions](README.md#ctoroptions).[locale](README.md#optional-locale)*

*Defined in [src/lib/item/types-abstract.ts:134](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L134)*

### `Optional` origin

• **origin**? : *Item["origin"]*

*Inherited from [CtorOptions](README.md#ctoroptions).[origin](README.md#optional-origin)*

*Defined in [src/lib/item/types-abstract.ts:137](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L137)*

###  path

• **path**: *string[]*

*Overrides [CtorOptions](README.md#ctoroptions).[path](README.md#optional-path)*

*Defined in [src/lib/usage/types-abstract.ts:15](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/usage/types-abstract.ts#L15)*

### `Optional` source

• **source**? : *Item["source"]*

*Inherited from [CtorOptions](README.md#ctoroptions).[source](README.md#optional-source)*

*Defined in [src/lib/item/types-abstract.ts:135](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L135)*

### `Optional` value

• **value**? : *Item["value"]*

*Inherited from [CtorOptions](README.md#ctoroptions).[value](README.md#optional-value)*

*Defined in [src/lib/item/types-abstract.ts:130](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L130)*

###  Item

• **Item**:

*Defined in [src/lib/usage/types-abstract.ts:18](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/usage/types-abstract.ts#L18)*

###  copy

• **copy**: *function*

*Defined in [src/lib/usage/types-abstract.ts:23](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/usage/types-abstract.ts#L23)*

Create a new instance with copied values.

#### Type declaration:

▸ (`newValuesObj?`: Partial‹[CtorOptions](README.md#ctoroptions)›): *[Item](README.md#item)*

**Parameters:**

Name | Type |
------ | ------ |
`newValuesObj?` | Partial‹[CtorOptions](README.md#ctoroptions)› |

###  ItemArray

• **ItemArray**:

*Defined in [src/lib/usage/types-abstract.ts:26](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/usage/types-abstract.ts#L26)*

###  [Symbol.iterator]

• **[Symbol.iterator]**: *function*

*Overrides [ItemArray](README.md#itemarray).[[Symbol.iterator]](README.md#[symbol.iterator])*

*Defined in [src/lib/usage/types-abstract.ts:27](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/usage/types-abstract.ts#L27)*

#### Type declaration:

▸ (): *IterableIterator‹[Item](README.md#item)›*

###  difference

• **difference**: *function*

*Inherited from [ItemArray](README.md#itemarray).[difference](README.md#difference)*

*Defined in [src/lib/item/types-abstract.ts:148](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L148)*

#### Type declaration:

▸ (`other`: [ItemArrayLike](README.md#itemarraylike), `options?`: [DifferenceOptions](README.md#differenceoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [ItemArrayLike](README.md#itemarraylike) |
`options?` | [DifferenceOptions](README.md#differenceoptions) |

###  duplicates

• **duplicates**: *function*

*Inherited from [ItemArray](README.md#itemarray).[duplicates](README.md#duplicates)*

*Defined in [src/lib/item/types-abstract.ts:209](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L209)*

#### Type declaration:

▸ (`options?`: [DuplicatesOptions](README.md#duplicatesoptions)): *[Map](classes/arraymap.md#static-map)‹number, [Item](README.md#item)[]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [DuplicatesOptions](README.md#duplicatesoptions) |

###  filterBy

• **filterBy**: *function*

*Inherited from [ItemArray](README.md#itemarray).[filterBy](README.md#filterby)*

*Defined in [src/lib/item/types-abstract.ts:183](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L183)*

#### Type declaration:

▸ (`callback`: function, `options?`: [FilterByOptions](README.md#filterbyoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

▪ **callback**: *function*

▸ (`item`: [Item](README.md#item)): *boolean | void*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [Item](README.md#item) |

▪`Optional`  **options**: *[FilterByOptions](README.md#filterbyoptions)*

###  filterByLocale

• **filterByLocale**: *function*

*Inherited from [ItemArray](README.md#itemarray).[filterByLocale](README.md#filterbylocale)*

*Defined in [src/lib/item/types-abstract.ts:195](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L195)*

#### Type declaration:

▸ (`locale`: NonNullable‹Item["locale"]›, `options?`: [FilterByLocaleOptions](README.md#filterbylocaleoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`locale` | NonNullable‹Item["locale"]› |
`options?` | [FilterByLocaleOptions](README.md#filterbylocaleoptions) |

###  filterByLocales

• **filterByLocales**: *function*

*Inherited from [ItemArray](README.md#itemarray).[filterByLocales](README.md#filterbylocales)*

*Defined in [src/lib/item/types-abstract.ts:199](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L199)*

#### Type declaration:

▸ (`locales`: NonNullable‹Item["locale"]›[], `options?`: [FilterByLocaleOptions](README.md#filterbylocaleoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`locales` | NonNullable‹Item["locale"]›[] |
`options?` | [FilterByLocaleOptions](README.md#filterbylocaleoptions) |

###  filterByPath

• **filterByPath**: *function*

*Inherited from [ItemArray](README.md#itemarray).[filterByPath](README.md#filterbypath)*

*Defined in [src/lib/item/types-abstract.ts:187](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L187)*

#### Type declaration:

▸ (`path`: NonNullable‹Item["path"]›, `options?`: [FilterByPathOptions](README.md#filterbypathoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`path` | NonNullable‹Item["path"]› |
`options?` | [FilterByPathOptions](README.md#filterbypathoptions) |

###  filterByPaths

• **filterByPaths**: *function*

*Inherited from [ItemArray](README.md#itemarray).[filterByPaths](README.md#filterbypaths)*

*Defined in [src/lib/item/types-abstract.ts:191](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L191)*

#### Type declaration:

▸ (`paths`: NonNullable‹Item["path"]›[], `options?`: [FilterByPathOptions](README.md#filterbypathoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | NonNullable‹Item["path"]›[] |
`options?` | [FilterByPathOptions](README.md#filterbypathoptions) |

###  filterByValue

• **filterByValue**: *function*

*Inherited from [ItemArray](README.md#itemarray).[filterByValue](README.md#filterbyvalue)*

*Defined in [src/lib/item/types-abstract.ts:203](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L203)*

#### Type declaration:

▸ (`value`: any, `options?`: [FilterByValueOptions](README.md#filterbyvalueoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`options?` | [FilterByValueOptions](README.md#filterbyvalueoptions) |

###  filterByValues

• **filterByValues**: *function*

*Inherited from [ItemArray](README.md#itemarray).[filterByValues](README.md#filterbyvalues)*

*Defined in [src/lib/item/types-abstract.ts:204](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L204)*

#### Type declaration:

▸ (`value`: any[], `options?`: [FilterByValueOptions](README.md#filterbyvalueoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any[] |
`options?` | [FilterByValueOptions](README.md#filterbyvalueoptions) |

###  filterMissing

• **filterMissing**: *function*

*Inherited from [ItemArray](README.md#itemarray).[filterMissing](README.md#filtermissing)*

*Defined in [src/lib/item/types-abstract.ts:208](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L208)*

#### Type declaration:

▸ (`options?`: [FilterMissingOptions](README.md#filtermissingoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [FilterMissingOptions](README.md#filtermissingoptions) |

###  intersection

• **intersection**: *function*

*Inherited from [ItemArray](README.md#itemarray).[intersection](README.md#intersection)*

*Defined in [src/lib/item/types-abstract.ts:153](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L153)*

#### Type declaration:

▸ (`other`: [ItemArrayLike](README.md#itemarraylike), `options?`: [IntersectionOptions](README.md#intersectionoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [ItemArrayLike](README.md#itemarraylike) |
`options?` | [IntersectionOptions](README.md#intersectionoptions) |

###  items

• **items**: *[Item](README.md#item)[]*

*Inherited from [ItemArray](README.md#itemarray).[items](README.md#items)*

*Defined in [src/lib/item/types-abstract.ts:141](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L141)*

###  itemsByLocale

• **itemsByLocale**: *function*

*Inherited from [ItemArray](README.md#itemarray).[itemsByLocale](README.md#itemsbylocale)*

*Defined in [src/lib/item/types-abstract.ts:179](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L179)*

#### Type declaration:

▸ (`locale`: string, `options?`: [ItemsByLocaleOptions](README.md#itemsbylocaleoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`locale` | string |
`options?` | [ItemsByLocaleOptions](README.md#itemsbylocaleoptions) |

###  itemsByLocales

• **itemsByLocales**: *function*

*Inherited from [ItemArray](README.md#itemarray).[itemsByLocales](README.md#itemsbylocales)*

*Defined in [src/lib/item/types-abstract.ts:175](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L175)*

#### Type declaration:

▸ (`locales`: string[], `options?`: [ItemsByLocaleOptions](README.md#itemsbylocaleoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`locales` | string[] |
`options?` | [ItemsByLocaleOptions](README.md#itemsbylocaleoptions) |

###  length

• **length**: *number*

*Inherited from [ItemArray](README.md#itemarray).[length](README.md#length)*

*Defined in [src/lib/item/types-abstract.ts:145](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L145)*

###  prop

• **prop**: *function*

*Inherited from [ItemArray](README.md#itemarray).[prop](README.md#prop)*

*Defined in [src/lib/item/types-abstract.ts:146](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L146)*

#### Type declaration:

▸ <**K**>(`prop`: K): *Item[K][]*

**Type parameters:**

▪ **K**: *keyof Item*

**Parameters:**

Name | Type |
------ | ------ |
`prop` | K |

###  push

• **push**: *function*

*Inherited from [ItemArray](README.md#itemarray).[push](README.md#push)*

*Defined in [src/lib/item/types-abstract.ts:144](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L144)*

#### Type declaration:

▸ (...`items`: [Item](README.md#item)[]): *ReturnType‹Array<any>["push"]›*

**Parameters:**

Name | Type |
------ | ------ |
`...items` | [Item](README.md#item)[] |

###  toObject

• **toObject**: *function*

*Inherited from [ItemArray](README.md#itemarray).[toObject](README.md#toobject)*

*Defined in [src/lib/item/types-abstract.ts:210](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L210)*

#### Type declaration:

▸ <**O**>(`options`: O): *[ToObjectResult](README.md#toobjectresult)‹O["simple"], O["merge"], [Item](README.md#item)›*

**Type parameters:**

▪ **O**: *[ToObjectOptions](README.md#toobjectoptions)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | O |

###  union

• **union**: *function*

*Inherited from [ItemArray](README.md#itemarray).[union](README.md#union)*

*Defined in [src/lib/item/types-abstract.ts:152](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L152)*

#### Type declaration:

▸ (`other`: [ItemArrayLike](README.md#itemarraylike)‹[Item](README.md#item)›, `options?`: [UnionOptions](README.md#unionoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [ItemArrayLike](README.md#itemarraylike)‹[Item](README.md#item)› |
`options?` | [UnionOptions](README.md#unionoptions) |

###  uniqProp

• **uniqProp**: *function*

*Inherited from [ItemArray](README.md#itemarray).[uniqProp](README.md#uniqprop)*

*Defined in [src/lib/item/types-abstract.ts:147](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L147)*

#### Type declaration:

▸ <**K**>(`prop`: K): *Item[K][]*

**Type parameters:**

▪ **K**: *keyof Item*

**Parameters:**

Name | Type |
------ | ------ |
`prop` | K |

###  update

• **update**: *function*

*Inherited from [ItemArray](README.md#itemarray).[update](README.md#update)*

*Defined in [src/lib/item/types-abstract.ts:171](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L171)*

#### Type declaration:

▸ <**T2**>(`other`: [ItemArrayLike](README.md#itemarraylike)‹T2›, `options?`: [UpdateOptions](README.md#updateoptions)‹[Item](README.md#item), T2›): *[UpdateReturn](README.md#updatereturn)‹[Item](README.md#item), T2›*

**Type parameters:**

▪ **T2**: *[Item](README.md#item)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [ItemArrayLike](README.md#itemarraylike)‹T2› |
`options?` | [UpdateOptions](README.md#updateoptions)‹[Item](README.md#item), T2› |

###  updateBy

• **updateBy**: *function*

*Inherited from [ItemArray](README.md#itemarray).[updateBy](README.md#updateby)*

*Defined in [src/lib/item/types-abstract.ts:157](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L157)*

#### Type declaration:

▸ <**T2**>(`other`: [ItemArrayLike](README.md#itemarraylike)‹T2›, `options?`: [UpdateByOptions](README.md#updatebyoptions)‹[Item](README.md#item), T2›): *[UpdateReturn](README.md#updatereturn)‹[Item](README.md#item), T2›*

**Type parameters:**

▪ **T2**: *[Item](README.md#item)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [ItemArrayLike](README.md#itemarraylike)‹T2› |
`options?` | [UpdateByOptions](README.md#updatebyoptions)‹[Item](README.md#item), T2› |

###  updateProp

• **updateProp**: *function*

*Inherited from [ItemArray](README.md#itemarray).[updateProp](README.md#updateprop)*

*Defined in [src/lib/item/types-abstract.ts:161](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L161)*

#### Type declaration:

▸ <**T2**>(`other`: [ItemArrayLike](README.md#itemarraylike)‹T2›, `prop`: keyof Item, `options?`: [UpdatePropOptions](README.md#updatepropoptions)‹[Item](README.md#item)›): *[UpdateReturn](README.md#updatereturn)‹[Item](README.md#item), T2›*

**Type parameters:**

▪ **T2**: *[Item](README.md#item)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [ItemArrayLike](README.md#itemarraylike)‹T2› |
`prop` | keyof Item |
`options?` | [UpdatePropOptions](README.md#updatepropoptions)‹[Item](README.md#item)› |

###  updateProps

• **updateProps**: *function*

*Inherited from [ItemArray](README.md#itemarray).[updateProps](README.md#updateprops)*

*Defined in [src/lib/item/types-abstract.ts:166](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L166)*

#### Type declaration:

▸ <**T2**>(`other`: [ItemArrayLike](README.md#itemarraylike)‹T2›, `props`: keyof T[], `options?`: [UpdatePropOptions](README.md#updatepropoptions)‹[Item](README.md#item)›): *[UpdateReturn](README.md#updatereturn)‹[Item](README.md#item), T2›*

**Type parameters:**

▪ **T2**: *[Item](README.md#item)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [ItemArrayLike](README.md#itemarraylike)‹T2› |
`props` | keyof T[] |
`options?` | [UpdatePropOptions](README.md#updatepropoptions)‹[Item](README.md#item)› |

###  ItemArrayLike

Ƭ **ItemArrayLike**: *[ItemList](README.md#itemlist) | IterableIterator‹[Item](README.md#item)›*

*Defined in [src/lib/usage/types-abstract.ts:32](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/usage/types-abstract.ts#L32)*

###  ItemList

Ƭ **ItemList**: *[ItemArray](README.md#itemarray) | [Item](README.md#item)[]*

*Defined in [src/lib/usage/types-abstract.ts:30](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/usage/types-abstract.ts#L30)*

___

###  AIValidator

• **AIValidator**:

*Defined in [src/lib/validator/types-abstract.ts:13](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/validator/types-abstract.ts#L13)*

### `Abstract` Validator

• **Validator**:

*Defined in [src/lib/validator/types-abstract.ts:20](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/validator/types-abstract.ts#L20)*

###  logger

• **logger**: *function* = {} as (msg: string) => void

*Defined in [src/lib/validator/types-abstract.ts:23](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/validator/types-abstract.ts#L23)*

#### Type declaration:

▸ (`msg`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string |

###  options

• **options**: *object* = {} as AnyObj

*Defined in [src/lib/validator/types-abstract.ts:21](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/validator/types-abstract.ts#L21)*

#### Type declaration:

* \[ **key**: *number*\]: V

###  validate

• **validate**: *function* = {} as (
      schema: any,
      data: any,
      options?: ValidateOptions,
    ) => any | Promise<any>

*Defined in [src/lib/validator/types-abstract.ts:25](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/validator/types-abstract.ts#L25)*

#### Type declaration:

▸ (`schema`: any, `data`: any, `options?`: [ValidateOptions](README.md#validateoptions)): *any | Promise‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | any |
`data` | any |
`options?` | [ValidateOptions](README.md#validateoptions) |

###  CtorOptions

• **CtorOptions**:

*Defined in [src/lib/validator/types-abstract.ts:16](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/validator/types-abstract.ts#L16)*

### `Optional` logger

• **logger**? : *undefined | function*

*Defined in [src/lib/validator/types-abstract.ts:17](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/validator/types-abstract.ts#L17)*

###  ValidateOptions

Ƭ **ValidateOptions**: *[AnyObj](README.md#anyobj)*

*Defined in [src/lib/validator/types-abstract.ts:14](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/validator/types-abstract.ts#L14)*

___

###  AI_I18nUtil

• **AI_I18nUtil**:

*Defined in [src/lib/i18n-util/types-abstract.ts:14](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L14)*

### `Abstract` Base

• **Base**:

*Defined in [src/lib/i18n-util/types-abstract.ts:72](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L72)*

Base class with base functionalities shared among the I18nUtil classes

###  adaptors

• **adaptors**: *object* = {} as {
      add: (...args: any[]) => any | void;
      delete: (name: string) => any | void;
    }

*Inherited from [Base](README.md#abstract-base).[adaptors](README.md#adaptors)*

*Defined in [src/lib/i18n-util/types-abstract.ts:16](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L16)*

#### Type declaration:

* **add**(): *function*

  * (...`args`: any[]): *any | void*

* **delete**(): *function*

  * (`name`: string): *any | void*

###  addAdaptor

• **addAdaptor**: *function* = {} as (params: any) => any | void

*Inherited from [Base](README.md#abstract-base).[addAdaptor](README.md#addadaptor)*

*Defined in [src/lib/i18n-util/types-abstract.ts:55](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L55)*

#### Type declaration:

▸ (`params`: any): *any | void*

**Parameters:**

Name | Type |
------ | ------ |
`params` | any |

###  addAdaptors

• **addAdaptors**: *function* = {} as (paramsList: any[]) => any | void

*Inherited from [Base](README.md#abstract-base).[addAdaptors](README.md#addadaptors)*

*Defined in [src/lib/i18n-util/types-abstract.ts:57](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L57)*

#### Type declaration:

▸ (`paramsList`: any[]): *any | void*

**Parameters:**

Name | Type |
------ | ------ |
`paramsList` | any[] |

###  keyResolver

• **keyResolver**: *object* = {} as {
      resolve: (
        keys: any[],
        items: { path: any }[],
        ...args: any[]
      ) => any[] | Promise<any[]>;
    }

*Inherited from [Base](README.md#abstract-base).[keyResolver](README.md#keyresolver)*

*Defined in [src/lib/i18n-util/types-abstract.ts:33](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L33)*

#### Type declaration:

* **resolve**(): *function*

  * (`keys`: any[], `items`: object[], ...`args`: any[]): *any[] | Promise‹any[]›*

###  localeResolver

• **localeResolver**: *object* = {} as {
      resolve: (
        locales: any[],
        items: { locale: any }[],
        ...args: any[]
      ) => any[] | Promise<any[]>;
    }

*Inherited from [Base](README.md#abstract-base).[localeResolver](README.md#localeresolver)*

*Defined in [src/lib/i18n-util/types-abstract.ts:25](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L25)*

#### Type declaration:

* **resolve**(): *function*

  * (`locales`: any[], `items`: object[], ...`args`: any[]): *any[] | Promise‹any[]›*

###  options

• **options**: *any*

*Inherited from [Base](README.md#abstract-base).[options](README.md#options)*

*Defined in [src/lib/i18n-util/types-abstract.ts:53](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L53)*

###  pathResolver

• **pathResolver**: *object* = {} as {
      resolve: (paths: any[], ...args: any[]) => any[] | Promise<any[]>;
    }

*Inherited from [Base](README.md#abstract-base).[pathResolver](README.md#pathresolver)*

*Defined in [src/lib/i18n-util/types-abstract.ts:21](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L21)*

#### Type declaration:

* **resolve**(): *function*

  * (`paths`: any[], ...`args`: any[]): *any[] | Promise‹any[]›*

###  removeAdaptor

• **removeAdaptor**: *function* = {} as (name: any) => any | void

*Inherited from [Base](README.md#abstract-base).[removeAdaptor](README.md#removeadaptor)*

*Defined in [src/lib/i18n-util/types-abstract.ts:59](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L59)*

#### Type declaration:

▸ (`name`: any): *any | void*

**Parameters:**

Name | Type |
------ | ------ |
`name` | any |

###  removeAdaptors

• **removeAdaptors**: *function* = {} as (names: any[]) => any | void

*Inherited from [Base](README.md#abstract-base).[removeAdaptors](README.md#removeadaptors)*

*Defined in [src/lib/i18n-util/types-abstract.ts:61](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L61)*

#### Type declaration:

▸ (`names`: any[]): *any | void*

**Parameters:**

Name | Type |
------ | ------ |
`names` | any[] |

###  resolveKeys

• **resolveKeys**: *function* = {} as (
      items: any[],
      keys: any[],
      options?: any,
    ) => any[] | Promise<any[]>

*Defined in [src/lib/i18n-util/types-abstract.ts:79](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L79)*

#### Type declaration:

▸ (`items`: any[], `keys`: any[], `options?`: any): *any[] | Promise‹any[]›*

**Parameters:**

Name | Type |
------ | ------ |
`items` | any[] |
`keys` | any[] |
`options?` | any |

###  resolveLocales

• **resolveLocales**: *function* = {} as (
      items: any[],
      locales: any[],
      options?: any,
    ) => any[] | Promise<any[]>

*Defined in [src/lib/i18n-util/types-abstract.ts:73](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L73)*

#### Type declaration:

▸ (`items`: any[], `locales`: any[], `options?`: any): *any[] | Promise‹any[]›*

**Parameters:**

Name | Type |
------ | ------ |
`items` | any[] |
`locales` | any[] |
`options?` | any |

###  resolvePaths

• **resolvePaths**: *function* = {} as (
      paths: any[],
      options?: any,
    ) => any[] | Promise<any[]>

*Inherited from [Base](README.md#abstract-base).[resolvePaths](README.md#resolvepaths)*

*Defined in [src/lib/i18n-util/types-abstract.ts:63](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L63)*

#### Type declaration:

▸ (`paths`: any[], `options?`: any): *any[] | Promise‹any[]›*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | any[] |
`options?` | any |

###  resolveValues

• **resolveValues**: *function* = {} as (
      items: any[],
      keys: any[],
      options?: any,
    ) => any[] | Promise<any[]>

*Defined in [src/lib/i18n-util/types-abstract.ts:85](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L85)*

#### Type declaration:

▸ (`items`: any[], `keys`: any[], `options?`: any): *any[] | Promise‹any[]›*

**Parameters:**

Name | Type |
------ | ------ |
`items` | any[] |
`keys` | any[] |
`options?` | any |

###  schemator

• **schemator**: *object* = {} as { generate: (...args: any[]) => any | Promise<any> }

*Inherited from [Base](README.md#abstract-base).[schemator](README.md#schemator)*

*Defined in [src/lib/i18n-util/types-abstract.ts:49](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L49)*

#### Type declaration:

* **generate**(): *function*

  * (...`args`: any[]): *any | Promise‹any›*

###  validator

• **validator**: *object* = {} as { validate: (...args: any[]) => any | Promise<any> }

*Inherited from [Base](README.md#abstract-base).[validator](README.md#validator)*

*Defined in [src/lib/i18n-util/types-abstract.ts:51](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L51)*

#### Type declaration:

* **validate**(): *function*

  * (...`args`: any[]): *any | Promise‹any›*

###  valueResolver

• **valueResolver**: *object* = {} as {
      resolve: (
        values: any[],
        items: { value: any }[],
        ...args: any[]
      ) => any[] | Promise<any[]>;
    }

*Inherited from [Base](README.md#abstract-base).[valueResolver](README.md#valueresolver)*

*Defined in [src/lib/i18n-util/types-abstract.ts:41](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L41)*

#### Type declaration:

* **resolve**(): *function*

  * (`values`: any[], `items`: object[], ...`args`: any[]): *any[] | Promise‹any[]›*

### `Abstract` DefinitionLoader

• **DefinitionLoader**:

*Defined in [src/lib/i18n-util/types-abstract.ts:442](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L442)*

###  callback

• **callback**: *function* = {} as (...args: any[]) => R | Promise<UnwrapPromise<R>>

*Inherited from [Loader](README.md#abstract-loader).[callback](README.md#callback)*

*Defined in [src/lib/i18n-util/types-abstract.ts:427](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L427)*

#### Type declaration:

▸ (...`args`: any[]): *R | Promise‹[UnwrapPromise](README.md#unwrappromise)‹R››*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

###  i18nUtil

• **i18nUtil**: *T* = {} as T

*Inherited from [Loader](README.md#abstract-loader).[i18nUtil](README.md#i18nutil)*

*Defined in [src/lib/i18n-util/types-abstract.ts:425](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L425)*

###  loadFromFiles

• **loadFromFiles**: *function* = {} as (
      paths: any[],
      options?: any,
    ) => R | Promise<UnwrapPromise<R>>

*Inherited from [Loader](README.md#abstract-loader).[loadFromFiles](README.md#loadfromfiles)*

*Defined in [src/lib/i18n-util/types-abstract.ts:429](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L429)*

#### Type declaration:

▸ (`paths`: any[], `options?`: any): *R | Promise‹[UnwrapPromise](README.md#unwrappromise)‹R››*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | any[] |
`options?` | any |

###  loadFromItems

• **loadFromItems**: *function* = {} as (definitions: any[]) => R | Promise<UnwrapPromise<R>>

*Inherited from [Loader](README.md#abstract-loader).[loadFromItems](README.md#loadfromitems)*

*Defined in [src/lib/i18n-util/types-abstract.ts:434](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L434)*

#### Type declaration:

▸ (`definitions`: any[]): *R | Promise‹[UnwrapPromise](README.md#unwrappromise)‹R››*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |

###  loadFromObjects

• **loadFromObjects**: *function* = {} as (
      objects: any[],
      options?: any,
    ) => R | Promise<UnwrapPromise<R>>

*Inherited from [Loader](README.md#abstract-loader).[loadFromObjects](README.md#loadfromobjects)*

*Defined in [src/lib/i18n-util/types-abstract.ts:436](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L436)*

#### Type declaration:

▸ (`objects`: any[], `options?`: any): *R | Promise‹[UnwrapPromise](README.md#unwrappromise)‹R››*

**Parameters:**

Name | Type |
------ | ------ |
`objects` | any[] |
`options?` | any |

### `Abstract` I18nUtil

• **I18nUtil**:

*Defined in [src/lib/i18n-util/types-abstract.ts:235](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L235)*

*Defined in [src/lib/i18n-util/types-abstract.ts:241](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L241)*

Main class for working with definitions and the files where these items
are defined.

###  adaptors

• **adaptors**: *object* = {} as {
      add: (...args: any[]) => any | void;
      delete: (name: string) => any | void;
    }

*Inherited from [Base](README.md#abstract-base).[adaptors](README.md#adaptors)*

*Overrides [Base](README.md#abstract-base).[adaptors](README.md#adaptors)*

*Defined in [src/lib/i18n-util/types-abstract.ts:16](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L16)*

#### Type declaration:

* **add**(): *function*

  * (...`args`: any[]): *any | void*

* **delete**(): *function*

  * (`name`: string): *any | void*

###  addAdaptor

• **addAdaptor**: *function* = {} as (params: any) => any | void

*Inherited from [Base](README.md#abstract-base).[addAdaptor](README.md#addadaptor)*

*Overrides [Base](README.md#abstract-base).[addAdaptor](README.md#addadaptor)*

*Defined in [src/lib/i18n-util/types-abstract.ts:55](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L55)*

#### Type declaration:

▸ (`params`: any): *any | void*

**Parameters:**

Name | Type |
------ | ------ |
`params` | any |

###  addAdaptors

• **addAdaptors**: *function* = {} as (paramsList: any[]) => any | void

*Inherited from [Base](README.md#abstract-base).[addAdaptors](README.md#addadaptors)*

*Overrides [Base](README.md#abstract-base).[addAdaptors](README.md#addadaptors)*

*Defined in [src/lib/i18n-util/types-abstract.ts:57](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L57)*

#### Type declaration:

▸ (`paramsList`: any[]): *any | void*

**Parameters:**

Name | Type |
------ | ------ |
`paramsList` | any[] |

###  addLocale

• **addLocale**: *function* = {} as (
      definitions: any[],
      locale: any,
      options?: any,
    ) => any[] | Promise<any[]>

*Defined in [src/lib/i18n-util/types-abstract.ts:269](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L269)*

#### Type declaration:

▸ (`definitions`: any[], `locale`: any, `options?`: any): *any[] | Promise‹any[]›*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |
`locale` | any |
`options?` | any |

###  addLocales

• **addLocales**: *function* = {} as (
      definitions: any[],
      locale: any[],
      options?: any,
    ) => any[] | Promise<any[]>

*Defined in [src/lib/i18n-util/types-abstract.ts:275](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L275)*

#### Type declaration:

▸ (`definitions`: any[], `locale`: any[], `options?`: any): *any[] | Promise‹any[]›*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |
`locale` | any[] |
`options?` | any |

###  clearLocale

• **clearLocale**: *function* = {} as (
      definitions: any[],
      locale: any,
      options?: any,
    ) => any[] | Promise<any[]>

*Defined in [src/lib/i18n-util/types-abstract.ts:293](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L293)*

#### Type declaration:

▸ (`definitions`: any[], `locale`: any, `options?`: any): *any[] | Promise‹any[]›*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |
`locale` | any |
`options?` | any |

###  clearLocales

• **clearLocales**: *function* = {} as (
      definitions: any[],
      locale: any[],
      options?: any,
    ) => any[] | Promise<any[]>

*Defined in [src/lib/i18n-util/types-abstract.ts:299](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L299)*

#### Type declaration:

▸ (`definitions`: any[], `locale`: any[], `options?`: any): *any[] | Promise‹any[]›*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |
`locale` | any[] |
`options?` | any |

###  definitions

• **definitions**: *function* = {} as (paths: any[], options?: any) => any[] | Promise<any[]>

*Defined in [src/lib/i18n-util/types-abstract.ts:242](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L242)*

#### Type declaration:

▸ (`paths`: any[], `options?`: any): *any[] | Promise‹any[]›*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | any[] |
`options?` | any |

###  drop

• **drop**: *function* = {} as (
      definitions: any[],
      options?: any,
    ) => any | void | Promise<any | void>

*Defined in [src/lib/i18n-util/types-abstract.ts:259](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L259)*

#### Type declaration:

▸ (`definitions`: any[], `options?`: any): *any | void | Promise‹any | void›*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |
`options?` | any |

###  dropFrom

• **dropFrom**: *function* = {} as (
      definitions: any[],
      options?: any,
    ) => DefinitionLoader<I18nUtil, ReturnType<I18nUtil['drop']>>

*Defined in [src/lib/i18n-util/types-abstract.ts:264](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L264)*

#### Type declaration:

▸ (`definitions`: any[], `options?`: any): *[DefinitionLoader](README.md#abstract-definitionloader)‹[I18nUtil](README.md#abstract-i18nutil), ReturnType‹I18nUtil["drop"]››*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |
`options?` | any |

###  keyResolver

• **keyResolver**: *object* = {} as {
      resolve: (
        keys: any[],
        items: { path: any }[],
        ...args: any[]
      ) => any[] | Promise<any[]>;
    }

*Inherited from [Base](README.md#abstract-base).[keyResolver](README.md#keyresolver)*

*Overrides [Base](README.md#abstract-base).[keyResolver](README.md#keyresolver)*

*Defined in [src/lib/i18n-util/types-abstract.ts:33](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L33)*

#### Type declaration:

* **resolve**(): *function*

  * (`keys`: any[], `items`: object[], ...`args`: any[]): *any[] | Promise‹any[]›*

###  locale

• **locale**: *function* = {} as (
      definitions: any[],
      locale: any,
      options?: any,
    ) => any | Promise<any>

*Inherited from [ItemProcessor](README.md#abstract-itemprocessor).[locale](README.md#locale)*

*Defined in [src/lib/i18n-util/types-abstract.ts:154](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L154)*

#### Type declaration:

▸ (`definitions`: any[], `locale`: any, `options?`: any): *any | Promise‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |
`locale` | any |
`options?` | any |

###  localeResolver

• **localeResolver**: *object* = {} as {
      resolve: (
        locales: any[],
        items: { locale: any }[],
        ...args: any[]
      ) => any[] | Promise<any[]>;
    }

*Inherited from [Base](README.md#abstract-base).[localeResolver](README.md#localeresolver)*

*Overrides [Base](README.md#abstract-base).[localeResolver](README.md#localeresolver)*

*Defined in [src/lib/i18n-util/types-abstract.ts:25](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L25)*

#### Type declaration:

* **resolve**(): *function*

  * (`locales`: any[], `items`: object[], ...`args`: any[]): *any[] | Promise‹any[]›*

###  locales

• **locales**: *function* = {} as (
      definitions: any[],
      locales: any[],
      options?: any,
    ) => any | Promise<any>

*Inherited from [ItemProcessor](README.md#abstract-itemprocessor).[locales](README.md#locales)*

*Defined in [src/lib/i18n-util/types-abstract.ts:160](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L160)*

#### Type declaration:

▸ (`definitions`: any[], `locales`: any[], `options?`: any): *any | Promise‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |
`locales` | any[] |
`options?` | any |

###  master

• **master**: *function* = {} as (definitions: any[], options?: any) => any

*Inherited from [ItemProcessor](README.md#abstract-itemprocessor).[master](README.md#master)*

*Defined in [src/lib/i18n-util/types-abstract.ts:152](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L152)*

#### Type declaration:

▸ (`definitions`: any[], `options?`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |
`options?` | any |

###  missingItems

• **missingItems**: *function* = {} as (definitions: any[], options?: any) => any[]

*Inherited from [ItemProcessor](README.md#abstract-itemprocessor).[missingItems](README.md#missingitems)*

*Defined in [src/lib/i18n-util/types-abstract.ts:168](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L168)*

#### Type declaration:

▸ (`definitions`: any[], `options?`: any): *any[]*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |
`options?` | any |

###  missingLocales

• **missingLocales**: *function* = {} as (definitions: any[], options?: any) => string[]

*Inherited from [ItemProcessor](README.md#abstract-itemprocessor).[missingLocales](README.md#missinglocales)*

*Defined in [src/lib/i18n-util/types-abstract.ts:170](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L170)*

#### Type declaration:

▸ (`definitions`: any[], `options?`: any): *string[]*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |
`options?` | any |

###  options

• **options**: *any*

*Inherited from [Base](README.md#abstract-base).[options](README.md#options)*

*Overrides [Base](README.md#abstract-base).[options](README.md#options)*

*Defined in [src/lib/i18n-util/types-abstract.ts:53](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L53)*

###  patch

• **patch**: *function* = {} as (
      definitions: any[],
      options?: any,
    ) => any | void | Promise<any | void>

*Defined in [src/lib/i18n-util/types-abstract.ts:249](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L249)*

#### Type declaration:

▸ (`definitions`: any[], `options?`: any): *any | void | Promise‹any | void›*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |
`options?` | any |

###  patchTo

• **patchTo**: *function* = {} as (
      definitions: any[],
      options?: any,
    ) => DefinitionLoader<I18nUtil, ReturnType<I18nUtil['patch']>>

*Defined in [src/lib/i18n-util/types-abstract.ts:254](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L254)*

#### Type declaration:

▸ (`definitions`: any[], `options?`: any): *[DefinitionLoader](README.md#abstract-definitionloader)‹[I18nUtil](README.md#abstract-i18nutil), ReturnType‹I18nUtil["patch"]››*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |
`options?` | any |

###  pathResolver

• **pathResolver**: *object* = {} as {
      resolve: (paths: any[], ...args: any[]) => any[] | Promise<any[]>;
    }

*Inherited from [Base](README.md#abstract-base).[pathResolver](README.md#pathresolver)*

*Overrides [Base](README.md#abstract-base).[pathResolver](README.md#pathresolver)*

*Defined in [src/lib/i18n-util/types-abstract.ts:21](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L21)*

#### Type declaration:

* **resolve**(): *function*

  * (`paths`: any[], ...`args`: any[]): *any[] | Promise‹any[]›*

###  removeAdaptor

• **removeAdaptor**: *function* = {} as (name: any) => any | void

*Inherited from [Base](README.md#abstract-base).[removeAdaptor](README.md#removeadaptor)*

*Overrides [Base](README.md#abstract-base).[removeAdaptor](README.md#removeadaptor)*

*Defined in [src/lib/i18n-util/types-abstract.ts:59](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L59)*

#### Type declaration:

▸ (`name`: any): *any | void*

**Parameters:**

Name | Type |
------ | ------ |
`name` | any |

###  removeAdaptors

• **removeAdaptors**: *function* = {} as (names: any[]) => any | void

*Inherited from [Base](README.md#abstract-base).[removeAdaptors](README.md#removeadaptors)*

*Overrides [Base](README.md#abstract-base).[removeAdaptors](README.md#removeadaptors)*

*Defined in [src/lib/i18n-util/types-abstract.ts:61](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L61)*

#### Type declaration:

▸ (`names`: any[]): *any | void*

**Parameters:**

Name | Type |
------ | ------ |
`names` | any[] |

###  removeLocale

• **removeLocale**: *function* = {} as (
      definitions: any[],
      locale: any,
      options?: any,
    ) => any[] | Promise<any[]>

*Defined in [src/lib/i18n-util/types-abstract.ts:281](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L281)*

#### Type declaration:

▸ (`definitions`: any[], `locale`: any, `options?`: any): *any[] | Promise‹any[]›*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |
`locale` | any |
`options?` | any |

###  removeLocales

• **removeLocales**: *function* = {} as (
      definitions: any[],
      locale: any[],
      options?: any,
    ) => any[] | Promise<any[]>

*Defined in [src/lib/i18n-util/types-abstract.ts:287](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L287)*

#### Type declaration:

▸ (`definitions`: any[], `locale`: any[], `options?`: any): *any[] | Promise‹any[]›*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |
`locale` | any[] |
`options?` | any |

###  resolveKeys

• **resolveKeys**: *function* = {} as (
      items: any[],
      keys: any[],
      options?: any,
    ) => any[] | Promise<any[]>

*Inherited from [Base](README.md#abstract-base).[resolveKeys](README.md#resolvekeys)*

*Overrides [Base](README.md#abstract-base).[resolveKeys](README.md#resolvekeys)*

*Defined in [src/lib/i18n-util/types-abstract.ts:79](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L79)*

#### Type declaration:

▸ (`items`: any[], `keys`: any[], `options?`: any): *any[] | Promise‹any[]›*

**Parameters:**

Name | Type |
------ | ------ |
`items` | any[] |
`keys` | any[] |
`options?` | any |

###  resolveLocales

• **resolveLocales**: *function* = {} as (
      items: any[],
      locales: any[],
      options?: any,
    ) => any[] | Promise<any[]>

*Inherited from [Base](README.md#abstract-base).[resolveLocales](README.md#resolvelocales)*

*Overrides [Base](README.md#abstract-base).[resolveLocales](README.md#resolvelocales)*

*Defined in [src/lib/i18n-util/types-abstract.ts:73](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L73)*

#### Type declaration:

▸ (`items`: any[], `locales`: any[], `options?`: any): *any[] | Promise‹any[]›*

**Parameters:**

Name | Type |
------ | ------ |
`items` | any[] |
`locales` | any[] |
`options?` | any |

###  resolvePaths

• **resolvePaths**: *function* = {} as (
      paths: any[],
      options?: any,
    ) => any[] | Promise<any[]>

*Inherited from [Base](README.md#abstract-base).[resolvePaths](README.md#resolvepaths)*

*Overrides [Base](README.md#abstract-base).[resolvePaths](README.md#resolvepaths)*

*Defined in [src/lib/i18n-util/types-abstract.ts:63](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L63)*

#### Type declaration:

▸ (`paths`: any[], `options?`: any): *any[] | Promise‹any[]›*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | any[] |
`options?` | any |

###  resolveValues

• **resolveValues**: *function* = {} as (
      items: any[],
      keys: any[],
      options?: any,
    ) => any[] | Promise<any[]>

*Inherited from [Base](README.md#abstract-base).[resolveValues](README.md#resolvevalues)*

*Overrides [Base](README.md#abstract-base).[resolveValues](README.md#resolvevalues)*

*Defined in [src/lib/i18n-util/types-abstract.ts:85](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L85)*

#### Type declaration:

▸ (`items`: any[], `keys`: any[], `options?`: any): *any[] | Promise‹any[]›*

**Parameters:**

Name | Type |
------ | ------ |
`items` | any[] |
`keys` | any[] |
`options?` | any |

###  schema

• **schema**: *function* = {} as (items: any[], options?: any) => any | Promise<any>

*Defined in [src/lib/i18n-util/types-abstract.ts:307](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L307)*

#### Type declaration:

▸ (`items`: any[], `options?`: any): *any | Promise‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`items` | any[] |
`options?` | any |

###  schemator

• **schemator**: *object* = {} as { generate: (...args: any[]) => any | Promise<any> }

*Inherited from [Base](README.md#abstract-base).[schemator](README.md#schemator)*

*Overrides [Base](README.md#abstract-base).[schemator](README.md#schemator)*

*Defined in [src/lib/i18n-util/types-abstract.ts:49](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L49)*

#### Type declaration:

* **generate**(): *function*

  * (...`args`: any[]): *any | Promise‹any›*

###  stats

• **stats**: *function* = {} as (definitions: any[], usage: any[], options?: any) => KeyStats

*Inherited from [ItemProcessor](README.md#abstract-itemprocessor).[stats](README.md#stats)*

*Defined in [src/lib/i18n-util/types-abstract.ts:172](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L172)*

#### Type declaration:

▸ (`definitions`: any[], `usage`: any[], `options?`: any): *[KeyStats](README.md#abstract-keystats)*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |
`usage` | any[] |
`options?` | any |

###  statsAgainst

• **statsAgainst**: *function* = {} as (
      definitions: any[],
      options?: any,
    ) => UsageLoader<I18nUtil, ReturnType<I18nUtil['stats']>>

*Defined in [src/lib/i18n-util/types-abstract.ts:309](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L309)*

#### Type declaration:

▸ (`definitions`: any[], `options?`: any): *[UsageLoader](README.md#abstract-usageloader)‹[I18nUtil](README.md#abstract-i18nutil), ReturnType‹I18nUtil["stats"]››*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |
`options?` | any |

###  toObject

• **toObject**: *function* = {} as (definitions: any[], options?: any) => any

*Inherited from [ItemProcessor](README.md#abstract-itemprocessor).[toObject](README.md#toobject)*

*Defined in [src/lib/i18n-util/types-abstract.ts:166](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L166)*

#### Type declaration:

▸ (`definitions`: any[], `options?`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |
`options?` | any |

###  usage

• **usage**: *function* = {} as (paths: string[], options?: any) => any[] | Promise<any[]>

*Defined in [src/lib/i18n-util/types-abstract.ts:305](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L305)*

#### Type declaration:

▸ (`paths`: string[], `options?`: any): *any[] | Promise‹any[]›*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | string[] |
`options?` | any |

###  usageAnalyze

• **usageAnalyze**: *function* = {} as (
      definitions: any[],
      usage: any[],
      options?: any,
    ) => ReturnType<ItemProcessorBase['usageAnalyze']>

*Inherited from [ItemProcessor](README.md#abstract-itemprocessor).[usageAnalyze](README.md#usageanalyze)*

*Defined in [src/lib/i18n-util/types-abstract.ts:174](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L174)*

#### Type declaration:

▸ (`definitions`: any[], `usage`: any[], `options?`: any): *ReturnType‹ItemProcessorBase["usageAnalyze"]›*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |
`usage` | any[] |
`options?` | any |

###  usageAnalyzeAgainst

• **usageAnalyzeAgainst**: *function* = {} as (
      definitions: any[],
      options?: any,
    ) => UsageLoader<I18nUtil, ReturnType<I18nUtil['usageAnalyze']>>

*Defined in [src/lib/i18n-util/types-abstract.ts:325](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L325)*

#### Type declaration:

▸ (`definitions`: any[], `options?`: any): *[UsageLoader](README.md#abstract-usageloader)‹[I18nUtil](README.md#abstract-i18nutil), ReturnType‹I18nUtil["usageAnalyze"]››*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |
`options?` | any |

###  usageValidate

• **usageValidate**: *function* = {} as (
      definitions: any[],
      usage: any[],
      options?: any,
    ) => void

*Inherited from [ItemProcessor](README.md#abstract-itemprocessor).[usageValidate](README.md#usagevalidate)*

*Defined in [src/lib/i18n-util/types-abstract.ts:180](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L180)*

#### Type declaration:

▸ (`definitions`: any[], `usage`: any[], `options?`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |
`usage` | any[] |
`options?` | any |

###  usageValidateAgainst

• **usageValidateAgainst**: *function* = {} as (
      definitions: any[],
      options?: any,
    ) => UsageLoader<I18nUtil, ReturnType<I18nUtil['usageValidate']>>

*Defined in [src/lib/i18n-util/types-abstract.ts:330](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L330)*

#### Type declaration:

▸ (`definitions`: any[], `options?`: any): *[UsageLoader](README.md#abstract-usageloader)‹[I18nUtil](README.md#abstract-i18nutil), ReturnType‹I18nUtil["usageValidate"]››*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |
`options?` | any |

###  validate

• **validate**: *function* = {} as (
      definitions: any[],
      schema: any,
      options?: any,
    ) => any | void | Promise<any | void>

*Defined in [src/lib/i18n-util/types-abstract.ts:314](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L314)*

#### Type declaration:

▸ (`definitions`: any[], `schema`: any, `options?`: any): *any | void | Promise‹any | void›*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |
`schema` | any |
`options?` | any |

###  validateAgainst

• **validateAgainst**: *function* = {} as (
      definitions: any[],
      options?: any,
    ) => DefinitionLoader<I18nUtil, ReturnType<I18nUtil['validate']>>

*Defined in [src/lib/i18n-util/types-abstract.ts:320](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L320)*

#### Type declaration:

▸ (`definitions`: any[], `options?`: any): *[DefinitionLoader](README.md#abstract-definitionloader)‹[I18nUtil](README.md#abstract-i18nutil), ReturnType‹I18nUtil["validate"]››*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |
`options?` | any |

###  validator

• **validator**: *object* = {} as { validate: (...args: any[]) => any | Promise<any> }

*Inherited from [Base](README.md#abstract-base).[validator](README.md#validator)*

*Overrides [Base](README.md#abstract-base).[validator](README.md#validator)*

*Defined in [src/lib/i18n-util/types-abstract.ts:51](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L51)*

#### Type declaration:

* **validate**(): *function*

  * (...`args`: any[]): *any | Promise‹any›*

###  valueResolver

• **valueResolver**: *object* = {} as {
      resolve: (
        values: any[],
        items: { value: any }[],
        ...args: any[]
      ) => any[] | Promise<any[]>;
    }

*Inherited from [Base](README.md#abstract-base).[valueResolver](README.md#valueresolver)*

*Overrides [Base](README.md#abstract-base).[valueResolver](README.md#valueresolver)*

*Defined in [src/lib/i18n-util/types-abstract.ts:41](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L41)*

#### Type declaration:

* **resolve**(): *function*

  * (`values`: any[], `items`: object[], ...`args`: any[]): *any[] | Promise‹any[]›*

###  write

• **write**: *function* = {} as (
      definitions: any[],
      options?: any,
    ) => any | void | Promise<any | void>

*Defined in [src/lib/i18n-util/types-abstract.ts:244](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L244)*

#### Type declaration:

▸ (`definitions`: any[], `options?`: any): *any | void | Promise‹any | void›*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |
`options?` | any |

### `Abstract` ItemProcessor

• **ItemProcessor**:

*Defined in [src/lib/i18n-util/types-abstract.ts:150](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L150)*

I18nUtil class with functionalities for working with definition and usage
items in the context of I18nUtil

###  adaptors

• **adaptors**: *object* = {} as {
      add: (...args: any[]) => any | void;
      delete: (name: string) => any | void;
    }

*Inherited from [Base](README.md#abstract-base).[adaptors](README.md#adaptors)*

*Defined in [src/lib/i18n-util/types-abstract.ts:16](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L16)*

#### Type declaration:

* **add**(): *function*

  * (...`args`: any[]): *any | void*

* **delete**(): *function*

  * (`name`: string): *any | void*

###  addAdaptor

• **addAdaptor**: *function* = {} as (params: any) => any | void

*Inherited from [Base](README.md#abstract-base).[addAdaptor](README.md#addadaptor)*

*Defined in [src/lib/i18n-util/types-abstract.ts:55](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L55)*

#### Type declaration:

▸ (`params`: any): *any | void*

**Parameters:**

Name | Type |
------ | ------ |
`params` | any |

###  addAdaptors

• **addAdaptors**: *function* = {} as (paramsList: any[]) => any | void

*Inherited from [Base](README.md#abstract-base).[addAdaptors](README.md#addadaptors)*

*Defined in [src/lib/i18n-util/types-abstract.ts:57](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L57)*

#### Type declaration:

▸ (`paramsList`: any[]): *any | void*

**Parameters:**

Name | Type |
------ | ------ |
`paramsList` | any[] |

###  keyResolver

• **keyResolver**: *object* = {} as {
      resolve: (
        keys: any[],
        items: { path: any }[],
        ...args: any[]
      ) => any[] | Promise<any[]>;
    }

*Inherited from [Base](README.md#abstract-base).[keyResolver](README.md#keyresolver)*

*Defined in [src/lib/i18n-util/types-abstract.ts:33](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L33)*

#### Type declaration:

* **resolve**(): *function*

  * (`keys`: any[], `items`: object[], ...`args`: any[]): *any[] | Promise‹any[]›*

###  locale

• **locale**: *function* = {} as (
      definitions: any[],
      locale: any,
      options?: any,
    ) => any | Promise<any>

*Defined in [src/lib/i18n-util/types-abstract.ts:154](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L154)*

#### Type declaration:

▸ (`definitions`: any[], `locale`: any, `options?`: any): *any | Promise‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |
`locale` | any |
`options?` | any |

###  localeResolver

• **localeResolver**: *object* = {} as {
      resolve: (
        locales: any[],
        items: { locale: any }[],
        ...args: any[]
      ) => any[] | Promise<any[]>;
    }

*Inherited from [Base](README.md#abstract-base).[localeResolver](README.md#localeresolver)*

*Defined in [src/lib/i18n-util/types-abstract.ts:25](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L25)*

#### Type declaration:

* **resolve**(): *function*

  * (`locales`: any[], `items`: object[], ...`args`: any[]): *any[] | Promise‹any[]›*

###  locales

• **locales**: *function* = {} as (
      definitions: any[],
      locales: any[],
      options?: any,
    ) => any | Promise<any>

*Defined in [src/lib/i18n-util/types-abstract.ts:160](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L160)*

#### Type declaration:

▸ (`definitions`: any[], `locales`: any[], `options?`: any): *any | Promise‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |
`locales` | any[] |
`options?` | any |

###  master

• **master**: *function* = {} as (definitions: any[], options?: any) => any

*Defined in [src/lib/i18n-util/types-abstract.ts:152](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L152)*

#### Type declaration:

▸ (`definitions`: any[], `options?`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |
`options?` | any |

###  missingItems

• **missingItems**: *function* = {} as (definitions: any[], options?: any) => any[]

*Defined in [src/lib/i18n-util/types-abstract.ts:168](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L168)*

#### Type declaration:

▸ (`definitions`: any[], `options?`: any): *any[]*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |
`options?` | any |

###  missingLocales

• **missingLocales**: *function* = {} as (definitions: any[], options?: any) => string[]

*Defined in [src/lib/i18n-util/types-abstract.ts:170](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L170)*

#### Type declaration:

▸ (`definitions`: any[], `options?`: any): *string[]*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |
`options?` | any |

###  options

• **options**: *any*

*Inherited from [Base](README.md#abstract-base).[options](README.md#options)*

*Defined in [src/lib/i18n-util/types-abstract.ts:53](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L53)*

###  pathResolver

• **pathResolver**: *object* = {} as {
      resolve: (paths: any[], ...args: any[]) => any[] | Promise<any[]>;
    }

*Inherited from [Base](README.md#abstract-base).[pathResolver](README.md#pathresolver)*

*Defined in [src/lib/i18n-util/types-abstract.ts:21](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L21)*

#### Type declaration:

* **resolve**(): *function*

  * (`paths`: any[], ...`args`: any[]): *any[] | Promise‹any[]›*

###  removeAdaptor

• **removeAdaptor**: *function* = {} as (name: any) => any | void

*Inherited from [Base](README.md#abstract-base).[removeAdaptor](README.md#removeadaptor)*

*Defined in [src/lib/i18n-util/types-abstract.ts:59](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L59)*

#### Type declaration:

▸ (`name`: any): *any | void*

**Parameters:**

Name | Type |
------ | ------ |
`name` | any |

###  removeAdaptors

• **removeAdaptors**: *function* = {} as (names: any[]) => any | void

*Inherited from [Base](README.md#abstract-base).[removeAdaptors](README.md#removeadaptors)*

*Defined in [src/lib/i18n-util/types-abstract.ts:61](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L61)*

#### Type declaration:

▸ (`names`: any[]): *any | void*

**Parameters:**

Name | Type |
------ | ------ |
`names` | any[] |

###  resolveKeys

• **resolveKeys**: *function* = {} as (
      items: any[],
      keys: any[],
      options?: any,
    ) => any[] | Promise<any[]>

*Inherited from [Base](README.md#abstract-base).[resolveKeys](README.md#resolvekeys)*

*Defined in [src/lib/i18n-util/types-abstract.ts:79](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L79)*

#### Type declaration:

▸ (`items`: any[], `keys`: any[], `options?`: any): *any[] | Promise‹any[]›*

**Parameters:**

Name | Type |
------ | ------ |
`items` | any[] |
`keys` | any[] |
`options?` | any |

###  resolveLocales

• **resolveLocales**: *function* = {} as (
      items: any[],
      locales: any[],
      options?: any,
    ) => any[] | Promise<any[]>

*Inherited from [Base](README.md#abstract-base).[resolveLocales](README.md#resolvelocales)*

*Defined in [src/lib/i18n-util/types-abstract.ts:73](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L73)*

#### Type declaration:

▸ (`items`: any[], `locales`: any[], `options?`: any): *any[] | Promise‹any[]›*

**Parameters:**

Name | Type |
------ | ------ |
`items` | any[] |
`locales` | any[] |
`options?` | any |

###  resolvePaths

• **resolvePaths**: *function* = {} as (
      paths: any[],
      options?: any,
    ) => any[] | Promise<any[]>

*Inherited from [Base](README.md#abstract-base).[resolvePaths](README.md#resolvepaths)*

*Defined in [src/lib/i18n-util/types-abstract.ts:63](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L63)*

#### Type declaration:

▸ (`paths`: any[], `options?`: any): *any[] | Promise‹any[]›*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | any[] |
`options?` | any |

###  resolveValues

• **resolveValues**: *function* = {} as (
      items: any[],
      keys: any[],
      options?: any,
    ) => any[] | Promise<any[]>

*Inherited from [Base](README.md#abstract-base).[resolveValues](README.md#resolvevalues)*

*Defined in [src/lib/i18n-util/types-abstract.ts:85](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L85)*

#### Type declaration:

▸ (`items`: any[], `keys`: any[], `options?`: any): *any[] | Promise‹any[]›*

**Parameters:**

Name | Type |
------ | ------ |
`items` | any[] |
`keys` | any[] |
`options?` | any |

###  schemator

• **schemator**: *object* = {} as { generate: (...args: any[]) => any | Promise<any> }

*Inherited from [Base](README.md#abstract-base).[schemator](README.md#schemator)*

*Defined in [src/lib/i18n-util/types-abstract.ts:49](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L49)*

#### Type declaration:

* **generate**(): *function*

  * (...`args`: any[]): *any | Promise‹any›*

###  stats

• **stats**: *function* = {} as (definitions: any[], usage: any[], options?: any) => KeyStats

*Defined in [src/lib/i18n-util/types-abstract.ts:172](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L172)*

#### Type declaration:

▸ (`definitions`: any[], `usage`: any[], `options?`: any): *[KeyStats](README.md#abstract-keystats)*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |
`usage` | any[] |
`options?` | any |

###  toObject

• **toObject**: *function* = {} as (definitions: any[], options?: any) => any

*Defined in [src/lib/i18n-util/types-abstract.ts:166](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L166)*

#### Type declaration:

▸ (`definitions`: any[], `options?`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |
`options?` | any |

###  usageAnalyze

• **usageAnalyze**: *function* = {} as (
      definitions: any[],
      usage: any[],
      options?: any,
    ) => ReturnType<ItemProcessorBase['usageAnalyze']>

*Defined in [src/lib/i18n-util/types-abstract.ts:174](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L174)*

#### Type declaration:

▸ (`definitions`: any[], `usage`: any[], `options?`: any): *ReturnType‹ItemProcessorBase["usageAnalyze"]›*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |
`usage` | any[] |
`options?` | any |

###  usageValidate

• **usageValidate**: *function* = {} as (
      definitions: any[],
      usage: any[],
      options?: any,
    ) => void

*Defined in [src/lib/i18n-util/types-abstract.ts:180](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L180)*

#### Type declaration:

▸ (`definitions`: any[], `usage`: any[], `options?`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |
`usage` | any[] |
`options?` | any |

###  validator

• **validator**: *object* = {} as { validate: (...args: any[]) => any | Promise<any> }

*Inherited from [Base](README.md#abstract-base).[validator](README.md#validator)*

*Defined in [src/lib/i18n-util/types-abstract.ts:51](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L51)*

#### Type declaration:

* **validate**(): *function*

  * (...`args`: any[]): *any | Promise‹any›*

###  valueResolver

• **valueResolver**: *object* = {} as {
      resolve: (
        values: any[],
        items: { value: any }[],
        ...args: any[]
      ) => any[] | Promise<any[]>;
    }

*Inherited from [Base](README.md#abstract-base).[valueResolver](README.md#valueresolver)*

*Defined in [src/lib/i18n-util/types-abstract.ts:41](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L41)*

#### Type declaration:

* **resolve**(): *function*

  * (`values`: any[], `items`: object[], ...`args`: any[]): *any[] | Promise‹any[]›*

### `Abstract` KeyStats

• **KeyStats**:

*Defined in [src/lib/i18n-util/types-abstract.ts:475](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L475)*

###  definitions

• **definitions**: *any[]* = [] as any[]

*Defined in [src/lib/i18n-util/types-abstract.ts:478](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L478)*

###  definitionsFiles

• **definitionsFiles**: *string[]* = [] as string[]

*Defined in [src/lib/i18n-util/types-abstract.ts:490](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L490)*

###  definitionsMissing

• **definitionsMissing**: *any[]* = [] as any[]

*Defined in [src/lib/i18n-util/types-abstract.ts:489](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L489)*

###  definitionsUnused

• **definitionsUnused**: *any[]* = [] as any[]

*Defined in [src/lib/i18n-util/types-abstract.ts:488](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L488)*

###  definitionsUsed

• **definitionsUsed**: *any[]* = [] as any[]

*Defined in [src/lib/i18n-util/types-abstract.ts:487](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L487)*

###  keys

• **keys**: *[KeyStatsEntry](README.md#abstract-keystatsentry)‹›[]* = [] as KeyStatsEntry[]

*Defined in [src/lib/i18n-util/types-abstract.ts:479](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L479)*

###  keysIssues

• **keysIssues**: *[KeyStatsEntry](README.md#abstract-keystatsentry)‹›[]* = [] as KeyStatsEntry[]

*Defined in [src/lib/i18n-util/types-abstract.ts:482](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L482)*

###  keysUndefined

• **keysUndefined**: *[KeyStatsEntry](README.md#abstract-keystatsentry)‹›[]* = [] as KeyStatsEntry[]

*Defined in [src/lib/i18n-util/types-abstract.ts:481](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L481)*

###  keysUnused

• **keysUnused**: *[KeyStatsEntry](README.md#abstract-keystatsentry)‹›[]* = [] as KeyStatsEntry[]

*Defined in [src/lib/i18n-util/types-abstract.ts:480](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L480)*

###  locales

• **locales**: *string[]* = [] as string[]

*Defined in [src/lib/i18n-util/types-abstract.ts:476](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L476)*

###  usage

• **usage**: *any[]* = [] as any[]

*Defined in [src/lib/i18n-util/types-abstract.ts:477](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L477)*

###  usageDefined

• **usageDefined**: *any[]* = [] as any[]

*Defined in [src/lib/i18n-util/types-abstract.ts:483](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L483)*

###  usageFiles

• **usageFiles**: *string[]* = [] as string[]

*Defined in [src/lib/i18n-util/types-abstract.ts:486](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L486)*

###  usageMissing

• **usageMissing**: *any[]* = [] as any[]

*Defined in [src/lib/i18n-util/types-abstract.ts:485](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L485)*

###  usageUndefined

• **usageUndefined**: *any[]* = [] as any[]

*Defined in [src/lib/i18n-util/types-abstract.ts:484](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L484)*

### `Abstract` KeyStatsEntry

• **KeyStatsEntry**:

*Defined in [src/lib/i18n-util/types-abstract.ts:452](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L452)*

###  definitions

• **definitions**: *any[]* = [] as any[]

*Defined in [src/lib/i18n-util/types-abstract.ts:459](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L459)*

###  definitionsFiles

• **definitionsFiles**: *string[]* = [] as string[]

*Defined in [src/lib/i18n-util/types-abstract.ts:463](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L463)*

###  definitionsMissing

• **definitionsMissing**: *any[]* = [] as any[]

*Defined in [src/lib/i18n-util/types-abstract.ts:462](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L462)*

###  definitionsUnused

• **definitionsUnused**: *any[]* = [] as any[]

*Defined in [src/lib/i18n-util/types-abstract.ts:461](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L461)*

###  definitionsUsed

• **definitionsUsed**: *any[]* = [] as any[]

*Defined in [src/lib/i18n-util/types-abstract.ts:460](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L460)*

###  hasIssues

• **hasIssues**: *boolean* = {} as boolean

*Defined in [src/lib/i18n-util/types-abstract.ts:466](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L466)*

###  hasUndefinedUsage

• **hasUndefinedUsage**: *boolean* = {} as boolean

*Defined in [src/lib/i18n-util/types-abstract.ts:472](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L472)*

###  hasUnusedDefinitions

• **hasUnusedDefinitions**: *boolean* = {} as boolean

*Defined in [src/lib/i18n-util/types-abstract.ts:469](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L469)*

###  isDefined

• **isDefined**: *boolean* = {} as boolean

*Defined in [src/lib/i18n-util/types-abstract.ts:467](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L467)*

###  isMissingDefinitions

• **isMissingDefinitions**: *boolean* = {} as boolean

*Defined in [src/lib/i18n-util/types-abstract.ts:468](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L468)*

###  isMissingUsage

• **isMissingUsage**: *boolean* = {} as boolean

*Defined in [src/lib/i18n-util/types-abstract.ts:471](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L471)*

###  isUsed

• **isUsed**: *boolean* = {} as boolean

*Defined in [src/lib/i18n-util/types-abstract.ts:470](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L470)*

###  locales

• **locales**: *string[]* = [] as string[]

*Defined in [src/lib/i18n-util/types-abstract.ts:464](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L464)*

###  localesMissing

• **localesMissing**: *string[]* = [] as string[]

*Defined in [src/lib/i18n-util/types-abstract.ts:465](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L465)*

###  path

• **path**: *string[]* = [] as string[]

*Defined in [src/lib/i18n-util/types-abstract.ts:453](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L453)*

###  usage

• **usage**: *any[]* = [] as any[]

*Defined in [src/lib/i18n-util/types-abstract.ts:454](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L454)*

###  usageDefined

• **usageDefined**: *any[]* = [] as any[]

*Defined in [src/lib/i18n-util/types-abstract.ts:455](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L455)*

###  usageFiles

• **usageFiles**: *string[]* = [] as string[]

*Defined in [src/lib/i18n-util/types-abstract.ts:458](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L458)*

###  usageMissing

• **usageMissing**: *any[]* = [] as any[]

*Defined in [src/lib/i18n-util/types-abstract.ts:457](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L457)*

###  usageUndefined

• **usageUndefined**: *any[]* = [] as any[]

*Defined in [src/lib/i18n-util/types-abstract.ts:456](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L456)*

### `Abstract` LoadedBase

• **LoadedBase**:

*Defined in [src/lib/i18n-util/types-abstract.ts:92](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L92)*

###  adaptors

• **adaptors**: *object* = {} as {
      add: (...args: any[]) => any | void;
      delete: (name: string) => any | void;
    }

*Inherited from [Base](README.md#abstract-base).[adaptors](README.md#adaptors)*

*Defined in [src/lib/i18n-util/types-abstract.ts:16](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L16)*

#### Type declaration:

* **add**(): *function*

  * (...`args`: any[]): *any | void*

* **delete**(): *function*

  * (`name`: string): *any | void*

###  addAdaptor

• **addAdaptor**: *function* = {} as (params: any) => any | void

*Inherited from [Base](README.md#abstract-base).[addAdaptor](README.md#addadaptor)*

*Defined in [src/lib/i18n-util/types-abstract.ts:55](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L55)*

#### Type declaration:

▸ (`params`: any): *any | void*

**Parameters:**

Name | Type |
------ | ------ |
`params` | any |

###  addAdaptors

• **addAdaptors**: *function* = {} as (paramsList: any[]) => any | void

*Inherited from [Base](README.md#abstract-base).[addAdaptors](README.md#addadaptors)*

*Defined in [src/lib/i18n-util/types-abstract.ts:57](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L57)*

#### Type declaration:

▸ (`paramsList`: any[]): *any | void*

**Parameters:**

Name | Type |
------ | ------ |
`paramsList` | any[] |

###  i18nUtil

• **i18nUtil**: *T* = {} as T

*Defined in [src/lib/i18n-util/types-abstract.ts:93](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L93)*

###  keyResolver

• **keyResolver**: *object* = {} as {
      resolve: (
        keys: any[],
        items: { path: any }[],
        ...args: any[]
      ) => any[] | Promise<any[]>;
    }

*Inherited from [Base](README.md#abstract-base).[keyResolver](README.md#keyresolver)*

*Defined in [src/lib/i18n-util/types-abstract.ts:33](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L33)*

#### Type declaration:

* **resolve**(): *function*

  * (`keys`: any[], `items`: object[], ...`args`: any[]): *any[] | Promise‹any[]›*

###  loaded

• **loaded**: *any*

*Defined in [src/lib/i18n-util/types-abstract.ts:94](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L94)*

###  localeResolver

• **localeResolver**: *object* = {} as {
      resolve: (
        locales: any[],
        items: { locale: any }[],
        ...args: any[]
      ) => any[] | Promise<any[]>;
    }

*Inherited from [Base](README.md#abstract-base).[localeResolver](README.md#localeresolver)*

*Defined in [src/lib/i18n-util/types-abstract.ts:25](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L25)*

#### Type declaration:

* **resolve**(): *function*

  * (`locales`: any[], `items`: object[], ...`args`: any[]): *any[] | Promise‹any[]›*

###  options

• **options**: *any*

*Inherited from [Base](README.md#abstract-base).[options](README.md#options)*

*Defined in [src/lib/i18n-util/types-abstract.ts:53](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L53)*

###  pathResolver

• **pathResolver**: *object* = {} as {
      resolve: (paths: any[], ...args: any[]) => any[] | Promise<any[]>;
    }

*Inherited from [Base](README.md#abstract-base).[pathResolver](README.md#pathresolver)*

*Defined in [src/lib/i18n-util/types-abstract.ts:21](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L21)*

#### Type declaration:

* **resolve**(): *function*

  * (`paths`: any[], ...`args`: any[]): *any[] | Promise‹any[]›*

###  removeAdaptor

• **removeAdaptor**: *function* = {} as (name: any) => any | void

*Inherited from [Base](README.md#abstract-base).[removeAdaptor](README.md#removeadaptor)*

*Defined in [src/lib/i18n-util/types-abstract.ts:59](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L59)*

#### Type declaration:

▸ (`name`: any): *any | void*

**Parameters:**

Name | Type |
------ | ------ |
`name` | any |

###  removeAdaptors

• **removeAdaptors**: *function* = {} as (names: any[]) => any | void

*Inherited from [Base](README.md#abstract-base).[removeAdaptors](README.md#removeadaptors)*

*Defined in [src/lib/i18n-util/types-abstract.ts:61](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L61)*

#### Type declaration:

▸ (`names`: any[]): *any | void*

**Parameters:**

Name | Type |
------ | ------ |
`names` | any[] |

###  resolveKeys

• **resolveKeys**: *function* = {} as (
      keys: any[],
      options?: any,
    ) => ReturnType<Base['resolveKeys']>

*Defined in [src/lib/i18n-util/types-abstract.ts:101](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L101)*

#### Type declaration:

▸ (`keys`: any[], `options?`: any): *ReturnType‹Base["resolveKeys"]›*

**Parameters:**

Name | Type |
------ | ------ |
`keys` | any[] |
`options?` | any |

###  resolveLocales

• **resolveLocales**: *function* = {} as (
      locales: any[],
      options?: any,
    ) => ReturnType<Base['resolveLocales']>

*Defined in [src/lib/i18n-util/types-abstract.ts:96](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L96)*

#### Type declaration:

▸ (`locales`: any[], `options?`: any): *ReturnType‹Base["resolveLocales"]›*

**Parameters:**

Name | Type |
------ | ------ |
`locales` | any[] |
`options?` | any |

###  resolvePaths

• **resolvePaths**: *function* = {} as (
      paths: any[],
      options?: any,
    ) => any[] | Promise<any[]>

*Inherited from [Base](README.md#abstract-base).[resolvePaths](README.md#resolvepaths)*

*Defined in [src/lib/i18n-util/types-abstract.ts:63](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L63)*

#### Type declaration:

▸ (`paths`: any[], `options?`: any): *any[] | Promise‹any[]›*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | any[] |
`options?` | any |

###  resolveValues

• **resolveValues**: *function* = {} as (
      keys: any[],
      options?: any,
    ) => ReturnType<Base['resolveValues']>

*Defined in [src/lib/i18n-util/types-abstract.ts:106](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L106)*

#### Type declaration:

▸ (`keys`: any[], `options?`: any): *ReturnType‹Base["resolveValues"]›*

**Parameters:**

Name | Type |
------ | ------ |
`keys` | any[] |
`options?` | any |

###  schemator

• **schemator**: *object* = {} as { generate: (...args: any[]) => any | Promise<any> }

*Inherited from [Base](README.md#abstract-base).[schemator](README.md#schemator)*

*Defined in [src/lib/i18n-util/types-abstract.ts:49](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L49)*

#### Type declaration:

* **generate**(): *function*

  * (...`args`: any[]): *any | Promise‹any›*

###  validator

• **validator**: *object* = {} as { validate: (...args: any[]) => any | Promise<any> }

*Inherited from [Base](README.md#abstract-base).[validator](README.md#validator)*

*Defined in [src/lib/i18n-util/types-abstract.ts:51](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L51)*

#### Type declaration:

* **validate**(): *function*

  * (...`args`: any[]): *any | Promise‹any›*

###  valueResolver

• **valueResolver**: *object* = {} as {
      resolve: (
        values: any[],
        items: { value: any }[],
        ...args: any[]
      ) => any[] | Promise<any[]>;
    }

*Inherited from [Base](README.md#abstract-base).[valueResolver](README.md#valueresolver)*

*Defined in [src/lib/i18n-util/types-abstract.ts:41](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L41)*

#### Type declaration:

* **resolve**(): *function*

  * (`values`: any[], `items`: object[], ...`args`: any[]): *any[] | Promise‹any[]›*

### `Abstract` LoadedI18nUtil

• **LoadedI18nUtil**:

*Defined in [src/lib/i18n-util/types-abstract.ts:339](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L339)*

*Defined in [src/lib/i18n-util/types-abstract.ts:346](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L346)*

Variant of I18nUtil that stores the definitions it works with.

###  adaptors

• **adaptors**: *object* = {} as {
      add: (...args: any[]) => any | void;
      delete: (name: string) => any | void;
    }

*Inherited from [Base](README.md#abstract-base).[adaptors](README.md#adaptors)*

*Overrides [Base](README.md#abstract-base).[adaptors](README.md#adaptors)*

*Defined in [src/lib/i18n-util/types-abstract.ts:16](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L16)*

#### Type declaration:

* **add**(): *function*

  * (...`args`: any[]): *any | void*

* **delete**(): *function*

  * (`name`: string): *any | void*

###  addAdaptor

• **addAdaptor**: *function* = {} as (params: any) => any | void

*Inherited from [Base](README.md#abstract-base).[addAdaptor](README.md#addadaptor)*

*Overrides [Base](README.md#abstract-base).[addAdaptor](README.md#addadaptor)*

*Defined in [src/lib/i18n-util/types-abstract.ts:55](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L55)*

#### Type declaration:

▸ (`params`: any): *any | void*

**Parameters:**

Name | Type |
------ | ------ |
`params` | any |

###  addAdaptors

• **addAdaptors**: *function* = {} as (paramsList: any[]) => any | void

*Inherited from [Base](README.md#abstract-base).[addAdaptors](README.md#addadaptors)*

*Overrides [Base](README.md#abstract-base).[addAdaptors](README.md#addadaptors)*

*Defined in [src/lib/i18n-util/types-abstract.ts:57](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L57)*

#### Type declaration:

▸ (`paramsList`: any[]): *any | void*

**Parameters:**

Name | Type |
------ | ------ |
`paramsList` | any[] |

###  addLocale

• **addLocale**: *function* = {} as (
      locale: any,
      options?: any,
    ) => ReturnType<I18nUtil['addLocale']>

*Defined in [src/lib/i18n-util/types-abstract.ts:368](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L368)*

#### Type declaration:

▸ (`locale`: any, `options?`: any): *ReturnType‹I18nUtil["addLocale"]›*

**Parameters:**

Name | Type |
------ | ------ |
`locale` | any |
`options?` | any |

###  addLocales

• **addLocales**: *function* = {} as (
      locale: any[],
      options?: any,
    ) => ReturnType<I18nUtil['addLocale']>

*Defined in [src/lib/i18n-util/types-abstract.ts:373](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L373)*

#### Type declaration:

▸ (`locale`: any[], `options?`: any): *ReturnType‹I18nUtil["addLocale"]›*

**Parameters:**

Name | Type |
------ | ------ |
`locale` | any[] |
`options?` | any |

###  clearLocale

• **clearLocale**: *function* = {} as (
      locale: any,
      options?: any,
    ) => ReturnType<I18nUtil['clearLocale']>

*Defined in [src/lib/i18n-util/types-abstract.ts:388](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L388)*

#### Type declaration:

▸ (`locale`: any, `options?`: any): *ReturnType‹I18nUtil["clearLocale"]›*

**Parameters:**

Name | Type |
------ | ------ |
`locale` | any |
`options?` | any |

###  clearLocales

• **clearLocales**: *function* = {} as (
      locale: any[],
      options?: any,
    ) => ReturnType<I18nUtil['clearLocales']>

*Defined in [src/lib/i18n-util/types-abstract.ts:393](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L393)*

#### Type declaration:

▸ (`locale`: any[], `options?`: any): *ReturnType‹I18nUtil["clearLocales"]›*

**Parameters:**

Name | Type |
------ | ------ |
`locale` | any[] |
`options?` | any |

###  definitions

• **definitions**: *function* = {} as (options?: any) => ReturnType<I18nUtil['definitions']>

*Defined in [src/lib/i18n-util/types-abstract.ts:351](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L351)*

#### Type declaration:

▸ (`options?`: any): *ReturnType‹I18nUtil["definitions"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

###  drop

• **drop**: *function* = {} as (options?: any) => ReturnType<I18nUtil['drop']>

*Defined in [src/lib/i18n-util/types-abstract.ts:364](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L364)*

#### Type declaration:

▸ (`options?`: any): *ReturnType‹I18nUtil["drop"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

###  dropFrom

• **dropFrom**: *function* = {} as (options?: any) => ReturnType<I18nUtil['dropFrom']>

*Defined in [src/lib/i18n-util/types-abstract.ts:366](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L366)*

#### Type declaration:

▸ (`options?`: any): *ReturnType‹I18nUtil["dropFrom"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

###  i18nUtil

• **i18nUtil**: *T* = {} as T

*Inherited from [LoadedBase](README.md#abstract-loadedbase).[i18nUtil](README.md#i18nutil)*

*Overrides [LoadedItemProcessor](README.md#abstract-loadeditemprocessor).[i18nUtil](README.md#i18nutil)*

*Defined in [src/lib/i18n-util/types-abstract.ts:93](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L93)*

*Defined in [src/lib/i18n-util/types-abstract.ts:349](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L349)*

###  keyResolver

• **keyResolver**: *object* = {} as {
      resolve: (
        keys: any[],
        items: { path: any }[],
        ...args: any[]
      ) => any[] | Promise<any[]>;
    }

*Inherited from [Base](README.md#abstract-base).[keyResolver](README.md#keyresolver)*

*Overrides [Base](README.md#abstract-base).[keyResolver](README.md#keyresolver)*

*Defined in [src/lib/i18n-util/types-abstract.ts:33](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L33)*

#### Type declaration:

* **resolve**(): *function*

  * (`keys`: any[], `items`: object[], ...`args`: any[]): *any[] | Promise‹any[]›*

###  loaded

• **loaded**: *any*

*Inherited from [LoadedBase](README.md#abstract-loadedbase).[loaded](README.md#loaded)*

*Overrides [LoadedBase](README.md#abstract-loadedbase).[loaded](README.md#loaded)*

*Defined in [src/lib/i18n-util/types-abstract.ts:94](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L94)*

###  locale

• **locale**: *function* = {} as (
      locale: any,
      options?: any,
    ) => ReturnType<ItemProcessor['locale']>

*Inherited from [LoadedItemProcessor](README.md#abstract-loadeditemprocessor).[locale](README.md#locale)*

*Defined in [src/lib/i18n-util/types-abstract.ts:198](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L198)*

#### Type declaration:

▸ (`locale`: any, `options?`: any): *ReturnType‹ItemProcessor["locale"]›*

**Parameters:**

Name | Type |
------ | ------ |
`locale` | any |
`options?` | any |

###  localeResolver

• **localeResolver**: *object* = {} as {
      resolve: (
        locales: any[],
        items: { locale: any }[],
        ...args: any[]
      ) => any[] | Promise<any[]>;
    }

*Inherited from [Base](README.md#abstract-base).[localeResolver](README.md#localeresolver)*

*Overrides [Base](README.md#abstract-base).[localeResolver](README.md#localeresolver)*

*Defined in [src/lib/i18n-util/types-abstract.ts:25](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L25)*

#### Type declaration:

* **resolve**(): *function*

  * (`locales`: any[], `items`: object[], ...`args`: any[]): *any[] | Promise‹any[]›*

###  locales

• **locales**: *function* = {} as (
      locales: any[],
      options?: any,
    ) => ReturnType<ItemProcessor['locales']>

*Inherited from [LoadedItemProcessor](README.md#abstract-loadeditemprocessor).[locales](README.md#locales)*

*Defined in [src/lib/i18n-util/types-abstract.ts:203](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L203)*

#### Type declaration:

▸ (`locales`: any[], `options?`: any): *ReturnType‹ItemProcessor["locales"]›*

**Parameters:**

Name | Type |
------ | ------ |
`locales` | any[] |
`options?` | any |

###  master

• **master**: *function* = {} as (options?: any) => ReturnType<ItemProcessor['master']>

*Inherited from [LoadedItemProcessor](README.md#abstract-loadeditemprocessor).[master](README.md#master)*

*Defined in [src/lib/i18n-util/types-abstract.ts:196](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L196)*

#### Type declaration:

▸ (`options?`: any): *ReturnType‹ItemProcessor["master"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

###  missingItems

• **missingItems**: *function* = {} as (
      options?: any,
    ) => ReturnType<ItemProcessor['missingItems']>

*Inherited from [LoadedItemProcessor](README.md#abstract-loadeditemprocessor).[missingItems](README.md#missingitems)*

*Defined in [src/lib/i18n-util/types-abstract.ts:210](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L210)*

#### Type declaration:

▸ (`options?`: any): *ReturnType‹ItemProcessor["missingItems"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

###  missingLocales

• **missingLocales**: *function* = {} as (
      options?: any,
    ) => ReturnType<ItemProcessor['missingLocales']>

*Inherited from [LoadedItemProcessor](README.md#abstract-loadeditemprocessor).[missingLocales](README.md#missinglocales)*

*Defined in [src/lib/i18n-util/types-abstract.ts:214](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L214)*

#### Type declaration:

▸ (`options?`: any): *ReturnType‹ItemProcessor["missingLocales"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

###  options

• **options**: *any*

*Inherited from [Base](README.md#abstract-base).[options](README.md#options)*

*Overrides [Base](README.md#abstract-base).[options](README.md#options)*

*Defined in [src/lib/i18n-util/types-abstract.ts:53](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L53)*

###  patch

• **patch**: *function* = {} as (options?: any) => ReturnType<I18nUtil['patch']>

*Defined in [src/lib/i18n-util/types-abstract.ts:360](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L360)*

#### Type declaration:

▸ (`options?`: any): *ReturnType‹I18nUtil["patch"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

###  patchTo

• **patchTo**: *function* = {} as (options?: any) => ReturnType<I18nUtil['patchTo']>

*Defined in [src/lib/i18n-util/types-abstract.ts:362](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L362)*

#### Type declaration:

▸ (`options?`: any): *ReturnType‹I18nUtil["patchTo"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

###  pathResolver

• **pathResolver**: *object* = {} as {
      resolve: (paths: any[], ...args: any[]) => any[] | Promise<any[]>;
    }

*Inherited from [Base](README.md#abstract-base).[pathResolver](README.md#pathresolver)*

*Overrides [Base](README.md#abstract-base).[pathResolver](README.md#pathresolver)*

*Defined in [src/lib/i18n-util/types-abstract.ts:21](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L21)*

#### Type declaration:

* **resolve**(): *function*

  * (`paths`: any[], ...`args`: any[]): *any[] | Promise‹any[]›*

###  removeAdaptor

• **removeAdaptor**: *function* = {} as (name: any) => any | void

*Inherited from [Base](README.md#abstract-base).[removeAdaptor](README.md#removeadaptor)*

*Overrides [Base](README.md#abstract-base).[removeAdaptor](README.md#removeadaptor)*

*Defined in [src/lib/i18n-util/types-abstract.ts:59](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L59)*

#### Type declaration:

▸ (`name`: any): *any | void*

**Parameters:**

Name | Type |
------ | ------ |
`name` | any |

###  removeAdaptors

• **removeAdaptors**: *function* = {} as (names: any[]) => any | void

*Inherited from [Base](README.md#abstract-base).[removeAdaptors](README.md#removeadaptors)*

*Overrides [Base](README.md#abstract-base).[removeAdaptors](README.md#removeadaptors)*

*Defined in [src/lib/i18n-util/types-abstract.ts:61](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L61)*

#### Type declaration:

▸ (`names`: any[]): *any | void*

**Parameters:**

Name | Type |
------ | ------ |
`names` | any[] |

###  removeLocale

• **removeLocale**: *function* = {} as (
      locale: any,
      options?: any,
    ) => ReturnType<I18nUtil['removeLocale']>

*Defined in [src/lib/i18n-util/types-abstract.ts:378](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L378)*

#### Type declaration:

▸ (`locale`: any, `options?`: any): *ReturnType‹I18nUtil["removeLocale"]›*

**Parameters:**

Name | Type |
------ | ------ |
`locale` | any |
`options?` | any |

###  removeLocales

• **removeLocales**: *function* = {} as (
      locale: any[],
      options?: any,
    ) => ReturnType<I18nUtil['removeLocales']>

*Defined in [src/lib/i18n-util/types-abstract.ts:383](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L383)*

#### Type declaration:

▸ (`locale`: any[], `options?`: any): *ReturnType‹I18nUtil["removeLocales"]›*

**Parameters:**

Name | Type |
------ | ------ |
`locale` | any[] |
`options?` | any |

###  resolveKeys

• **resolveKeys**: *function* = {} as (
      keys: any[],
      options?: any,
    ) => ReturnType<Base['resolveKeys']>

*Inherited from [LoadedBase](README.md#abstract-loadedbase).[resolveKeys](README.md#resolvekeys)*

*Overrides [LoadedBase](README.md#abstract-loadedbase).[resolveKeys](README.md#resolvekeys)*

*Defined in [src/lib/i18n-util/types-abstract.ts:101](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L101)*

#### Type declaration:

▸ (`keys`: any[], `options?`: any): *ReturnType‹Base["resolveKeys"]›*

**Parameters:**

Name | Type |
------ | ------ |
`keys` | any[] |
`options?` | any |

###  resolveLocales

• **resolveLocales**: *function* = {} as (
      locales: any[],
      options?: any,
    ) => ReturnType<Base['resolveLocales']>

*Inherited from [LoadedBase](README.md#abstract-loadedbase).[resolveLocales](README.md#resolvelocales)*

*Overrides [LoadedBase](README.md#abstract-loadedbase).[resolveLocales](README.md#resolvelocales)*

*Defined in [src/lib/i18n-util/types-abstract.ts:96](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L96)*

#### Type declaration:

▸ (`locales`: any[], `options?`: any): *ReturnType‹Base["resolveLocales"]›*

**Parameters:**

Name | Type |
------ | ------ |
`locales` | any[] |
`options?` | any |

###  resolvePaths

• **resolvePaths**: *function* = {} as (
      paths: any[],
      options?: any,
    ) => any[] | Promise<any[]>

*Inherited from [Base](README.md#abstract-base).[resolvePaths](README.md#resolvepaths)*

*Overrides [Base](README.md#abstract-base).[resolvePaths](README.md#resolvepaths)*

*Defined in [src/lib/i18n-util/types-abstract.ts:63](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L63)*

#### Type declaration:

▸ (`paths`: any[], `options?`: any): *any[] | Promise‹any[]›*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | any[] |
`options?` | any |

###  resolveValues

• **resolveValues**: *function* = {} as (
      keys: any[],
      options?: any,
    ) => ReturnType<Base['resolveValues']>

*Inherited from [LoadedBase](README.md#abstract-loadedbase).[resolveValues](README.md#resolvevalues)*

*Overrides [LoadedBase](README.md#abstract-loadedbase).[resolveValues](README.md#resolvevalues)*

*Defined in [src/lib/i18n-util/types-abstract.ts:106](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L106)*

#### Type declaration:

▸ (`keys`: any[], `options?`: any): *ReturnType‹Base["resolveValues"]›*

**Parameters:**

Name | Type |
------ | ------ |
`keys` | any[] |
`options?` | any |

###  schema

• **schema**: *function* = {} as (options?: any) => ReturnType<I18nUtil['schema']>

*Defined in [src/lib/i18n-util/types-abstract.ts:402](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L402)*

#### Type declaration:

▸ (`options?`: any): *ReturnType‹I18nUtil["schema"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

###  schemator

• **schemator**: *object* = {} as { generate: (...args: any[]) => any | Promise<any> }

*Inherited from [Base](README.md#abstract-base).[schemator](README.md#schemator)*

*Overrides [Base](README.md#abstract-base).[schemator](README.md#schemator)*

*Defined in [src/lib/i18n-util/types-abstract.ts:49](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L49)*

#### Type declaration:

* **generate**(): *function*

  * (...`args`: any[]): *any | Promise‹any›*

###  stats

• **stats**: *function* = {} as (
      usage: any[],
      options?: any,
    ) => ReturnType<ItemProcessor['stats']>

*Inherited from [LoadedItemProcessor](README.md#abstract-loadeditemprocessor).[stats](README.md#stats)*

*Defined in [src/lib/i18n-util/types-abstract.ts:218](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L218)*

#### Type declaration:

▸ (`usage`: any[], `options?`: any): *ReturnType‹ItemProcessor["stats"]›*

**Parameters:**

Name | Type |
------ | ------ |
`usage` | any[] |
`options?` | any |

###  statsAgainst

• **statsAgainst**: *function* = {} as (
      options?: any,
    ) => ReturnType<I18nUtil['statsAgainst']>

*Defined in [src/lib/i18n-util/types-abstract.ts:398](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L398)*

#### Type declaration:

▸ (`options?`: any): *ReturnType‹I18nUtil["statsAgainst"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

###  toObject

• **toObject**: *function* = {} as (options?: any) => ReturnType<ItemProcessor['toObject']>

*Inherited from [LoadedItemProcessor](README.md#abstract-loadeditemprocessor).[toObject](README.md#toobject)*

*Defined in [src/lib/i18n-util/types-abstract.ts:208](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L208)*

#### Type declaration:

▸ (`options?`: any): *ReturnType‹ItemProcessor["toObject"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

###  usage

• **usage**: *function* = {} as (
      paths: string[],
      options?: any,
    ) => ReturnType<I18nUtil['usage']>

*Defined in [src/lib/i18n-util/types-abstract.ts:353](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L353)*

#### Type declaration:

▸ (`paths`: string[], `options?`: any): *ReturnType‹I18nUtil["usage"]›*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | string[] |
`options?` | any |

###  usageAnalyze

• **usageAnalyze**: *function* = {} as (
      usage: any[],
      options?: any,
    ) => ReturnType<ItemProcessor['usageAnalyze']>

*Inherited from [LoadedItemProcessor](README.md#abstract-loadeditemprocessor).[usageAnalyze](README.md#usageanalyze)*

*Defined in [src/lib/i18n-util/types-abstract.ts:223](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L223)*

#### Type declaration:

▸ (`usage`: any[], `options?`: any): *ReturnType‹ItemProcessor["usageAnalyze"]›*

**Parameters:**

Name | Type |
------ | ------ |
`usage` | any[] |
`options?` | any |

###  usageAnalyzeAgainst

• **usageAnalyzeAgainst**: *function* = {} as (
      options?: any,
    ) => ReturnType<I18nUtil['usageAnalyzeAgainst']>

*Defined in [src/lib/i18n-util/types-abstract.ts:413](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L413)*

#### Type declaration:

▸ (`options?`: any): *ReturnType‹I18nUtil["usageAnalyzeAgainst"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

###  usageValidate

• **usageValidate**: *function* = {} as (
      usage: any[],
      options?: any,
    ) => ReturnType<ItemProcessor['usageValidate']>

*Inherited from [LoadedItemProcessor](README.md#abstract-loadeditemprocessor).[usageValidate](README.md#usagevalidate)*

*Defined in [src/lib/i18n-util/types-abstract.ts:228](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L228)*

#### Type declaration:

▸ (`usage`: any[], `options?`: any): *ReturnType‹ItemProcessor["usageValidate"]›*

**Parameters:**

Name | Type |
------ | ------ |
`usage` | any[] |
`options?` | any |

###  usageValidateAgainst

• **usageValidateAgainst**: *function* = {} as (
      options?: any,
    ) => ReturnType<I18nUtil['usageValidateAgainst']>

*Defined in [src/lib/i18n-util/types-abstract.ts:417](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L417)*

#### Type declaration:

▸ (`options?`: any): *ReturnType‹I18nUtil["usageValidateAgainst"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

###  validate

• **validate**: *function* = {} as (
      schema: any,
      options?: any,
    ) => ReturnType<I18nUtil['validate']>

*Defined in [src/lib/i18n-util/types-abstract.ts:404](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L404)*

#### Type declaration:

▸ (`schema`: any, `options?`: any): *ReturnType‹I18nUtil["validate"]›*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | any |
`options?` | any |

###  validateAgainst

• **validateAgainst**: *function* = {} as (
      options?: any,
    ) => ReturnType<I18nUtil['validateAgainst']>

*Defined in [src/lib/i18n-util/types-abstract.ts:409](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L409)*

#### Type declaration:

▸ (`options?`: any): *ReturnType‹I18nUtil["validateAgainst"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

###  validator

• **validator**: *object* = {} as { validate: (...args: any[]) => any | Promise<any> }

*Inherited from [Base](README.md#abstract-base).[validator](README.md#validator)*

*Overrides [Base](README.md#abstract-base).[validator](README.md#validator)*

*Defined in [src/lib/i18n-util/types-abstract.ts:51](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L51)*

#### Type declaration:

* **validate**(): *function*

  * (...`args`: any[]): *any | Promise‹any›*

###  valueResolver

• **valueResolver**: *object* = {} as {
      resolve: (
        values: any[],
        items: { value: any }[],
        ...args: any[]
      ) => any[] | Promise<any[]>;
    }

*Inherited from [Base](README.md#abstract-base).[valueResolver](README.md#valueresolver)*

*Overrides [Base](README.md#abstract-base).[valueResolver](README.md#valueresolver)*

*Defined in [src/lib/i18n-util/types-abstract.ts:41](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L41)*

#### Type declaration:

* **resolve**(): *function*

  * (`values`: any[], `items`: object[], ...`args`: any[]): *any[] | Promise‹any[]›*

###  write

• **write**: *function* = {} as (options?: any) => ReturnType<I18nUtil['write']>

*Defined in [src/lib/i18n-util/types-abstract.ts:358](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L358)*

#### Type declaration:

▸ (`options?`: any): *ReturnType‹I18nUtil["write"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

### `Abstract` LoadedItemProcessor

• **LoadedItemProcessor**:

*Defined in [src/lib/i18n-util/types-abstract.ts:191](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L191)*

Variant of I18nUtilItemProcessor that stores the definitions it works
with.

###  adaptors

• **adaptors**: *object* = {} as {
      add: (...args: any[]) => any | void;
      delete: (name: string) => any | void;
    }

*Inherited from [Base](README.md#abstract-base).[adaptors](README.md#adaptors)*

*Defined in [src/lib/i18n-util/types-abstract.ts:16](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L16)*

#### Type declaration:

* **add**(): *function*

  * (...`args`: any[]): *any | void*

* **delete**(): *function*

  * (`name`: string): *any | void*

###  addAdaptor

• **addAdaptor**: *function* = {} as (params: any) => any | void

*Inherited from [Base](README.md#abstract-base).[addAdaptor](README.md#addadaptor)*

*Defined in [src/lib/i18n-util/types-abstract.ts:55](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L55)*

#### Type declaration:

▸ (`params`: any): *any | void*

**Parameters:**

Name | Type |
------ | ------ |
`params` | any |

###  addAdaptors

• **addAdaptors**: *function* = {} as (paramsList: any[]) => any | void

*Inherited from [Base](README.md#abstract-base).[addAdaptors](README.md#addadaptors)*

*Defined in [src/lib/i18n-util/types-abstract.ts:57](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L57)*

#### Type declaration:

▸ (`paramsList`: any[]): *any | void*

**Parameters:**

Name | Type |
------ | ------ |
`paramsList` | any[] |

###  i18nUtil

• **i18nUtil**: *T* = {} as T

*Overrides [LoadedBase](README.md#abstract-loadedbase).[i18nUtil](README.md#i18nutil)*

*Defined in [src/lib/i18n-util/types-abstract.ts:194](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L194)*

###  keyResolver

• **keyResolver**: *object* = {} as {
      resolve: (
        keys: any[],
        items: { path: any }[],
        ...args: any[]
      ) => any[] | Promise<any[]>;
    }

*Inherited from [Base](README.md#abstract-base).[keyResolver](README.md#keyresolver)*

*Defined in [src/lib/i18n-util/types-abstract.ts:33](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L33)*

#### Type declaration:

* **resolve**(): *function*

  * (`keys`: any[], `items`: object[], ...`args`: any[]): *any[] | Promise‹any[]›*

###  loaded

• **loaded**: *any*

*Inherited from [LoadedBase](README.md#abstract-loadedbase).[loaded](README.md#loaded)*

*Defined in [src/lib/i18n-util/types-abstract.ts:94](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L94)*

###  locale

• **locale**: *function* = {} as (
      locale: any,
      options?: any,
    ) => ReturnType<ItemProcessor['locale']>

*Defined in [src/lib/i18n-util/types-abstract.ts:198](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L198)*

#### Type declaration:

▸ (`locale`: any, `options?`: any): *ReturnType‹ItemProcessor["locale"]›*

**Parameters:**

Name | Type |
------ | ------ |
`locale` | any |
`options?` | any |

###  localeResolver

• **localeResolver**: *object* = {} as {
      resolve: (
        locales: any[],
        items: { locale: any }[],
        ...args: any[]
      ) => any[] | Promise<any[]>;
    }

*Inherited from [Base](README.md#abstract-base).[localeResolver](README.md#localeresolver)*

*Defined in [src/lib/i18n-util/types-abstract.ts:25](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L25)*

#### Type declaration:

* **resolve**(): *function*

  * (`locales`: any[], `items`: object[], ...`args`: any[]): *any[] | Promise‹any[]›*

###  locales

• **locales**: *function* = {} as (
      locales: any[],
      options?: any,
    ) => ReturnType<ItemProcessor['locales']>

*Defined in [src/lib/i18n-util/types-abstract.ts:203](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L203)*

#### Type declaration:

▸ (`locales`: any[], `options?`: any): *ReturnType‹ItemProcessor["locales"]›*

**Parameters:**

Name | Type |
------ | ------ |
`locales` | any[] |
`options?` | any |

###  master

• **master**: *function* = {} as (options?: any) => ReturnType<ItemProcessor['master']>

*Defined in [src/lib/i18n-util/types-abstract.ts:196](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L196)*

#### Type declaration:

▸ (`options?`: any): *ReturnType‹ItemProcessor["master"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

###  missingItems

• **missingItems**: *function* = {} as (
      options?: any,
    ) => ReturnType<ItemProcessor['missingItems']>

*Defined in [src/lib/i18n-util/types-abstract.ts:210](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L210)*

#### Type declaration:

▸ (`options?`: any): *ReturnType‹ItemProcessor["missingItems"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

###  missingLocales

• **missingLocales**: *function* = {} as (
      options?: any,
    ) => ReturnType<ItemProcessor['missingLocales']>

*Defined in [src/lib/i18n-util/types-abstract.ts:214](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L214)*

#### Type declaration:

▸ (`options?`: any): *ReturnType‹ItemProcessor["missingLocales"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

###  options

• **options**: *any*

*Inherited from [Base](README.md#abstract-base).[options](README.md#options)*

*Defined in [src/lib/i18n-util/types-abstract.ts:53](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L53)*

###  pathResolver

• **pathResolver**: *object* = {} as {
      resolve: (paths: any[], ...args: any[]) => any[] | Promise<any[]>;
    }

*Inherited from [Base](README.md#abstract-base).[pathResolver](README.md#pathresolver)*

*Defined in [src/lib/i18n-util/types-abstract.ts:21](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L21)*

#### Type declaration:

* **resolve**(): *function*

  * (`paths`: any[], ...`args`: any[]): *any[] | Promise‹any[]›*

###  removeAdaptor

• **removeAdaptor**: *function* = {} as (name: any) => any | void

*Inherited from [Base](README.md#abstract-base).[removeAdaptor](README.md#removeadaptor)*

*Defined in [src/lib/i18n-util/types-abstract.ts:59](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L59)*

#### Type declaration:

▸ (`name`: any): *any | void*

**Parameters:**

Name | Type |
------ | ------ |
`name` | any |

###  removeAdaptors

• **removeAdaptors**: *function* = {} as (names: any[]) => any | void

*Inherited from [Base](README.md#abstract-base).[removeAdaptors](README.md#removeadaptors)*

*Defined in [src/lib/i18n-util/types-abstract.ts:61](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L61)*

#### Type declaration:

▸ (`names`: any[]): *any | void*

**Parameters:**

Name | Type |
------ | ------ |
`names` | any[] |

###  resolveKeys

• **resolveKeys**: *function* = {} as (
      keys: any[],
      options?: any,
    ) => ReturnType<Base['resolveKeys']>

*Inherited from [LoadedBase](README.md#abstract-loadedbase).[resolveKeys](README.md#resolvekeys)*

*Defined in [src/lib/i18n-util/types-abstract.ts:101](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L101)*

#### Type declaration:

▸ (`keys`: any[], `options?`: any): *ReturnType‹Base["resolveKeys"]›*

**Parameters:**

Name | Type |
------ | ------ |
`keys` | any[] |
`options?` | any |

###  resolveLocales

• **resolveLocales**: *function* = {} as (
      locales: any[],
      options?: any,
    ) => ReturnType<Base['resolveLocales']>

*Inherited from [LoadedBase](README.md#abstract-loadedbase).[resolveLocales](README.md#resolvelocales)*

*Defined in [src/lib/i18n-util/types-abstract.ts:96](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L96)*

#### Type declaration:

▸ (`locales`: any[], `options?`: any): *ReturnType‹Base["resolveLocales"]›*

**Parameters:**

Name | Type |
------ | ------ |
`locales` | any[] |
`options?` | any |

###  resolvePaths

• **resolvePaths**: *function* = {} as (
      paths: any[],
      options?: any,
    ) => any[] | Promise<any[]>

*Inherited from [Base](README.md#abstract-base).[resolvePaths](README.md#resolvepaths)*

*Defined in [src/lib/i18n-util/types-abstract.ts:63](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L63)*

#### Type declaration:

▸ (`paths`: any[], `options?`: any): *any[] | Promise‹any[]›*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | any[] |
`options?` | any |

###  resolveValues

• **resolveValues**: *function* = {} as (
      keys: any[],
      options?: any,
    ) => ReturnType<Base['resolveValues']>

*Inherited from [LoadedBase](README.md#abstract-loadedbase).[resolveValues](README.md#resolvevalues)*

*Defined in [src/lib/i18n-util/types-abstract.ts:106](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L106)*

#### Type declaration:

▸ (`keys`: any[], `options?`: any): *ReturnType‹Base["resolveValues"]›*

**Parameters:**

Name | Type |
------ | ------ |
`keys` | any[] |
`options?` | any |

###  schemator

• **schemator**: *object* = {} as { generate: (...args: any[]) => any | Promise<any> }

*Inherited from [Base](README.md#abstract-base).[schemator](README.md#schemator)*

*Defined in [src/lib/i18n-util/types-abstract.ts:49](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L49)*

#### Type declaration:

* **generate**(): *function*

  * (...`args`: any[]): *any | Promise‹any›*

###  stats

• **stats**: *function* = {} as (
      usage: any[],
      options?: any,
    ) => ReturnType<ItemProcessor['stats']>

*Defined in [src/lib/i18n-util/types-abstract.ts:218](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L218)*

#### Type declaration:

▸ (`usage`: any[], `options?`: any): *ReturnType‹ItemProcessor["stats"]›*

**Parameters:**

Name | Type |
------ | ------ |
`usage` | any[] |
`options?` | any |

###  toObject

• **toObject**: *function* = {} as (options?: any) => ReturnType<ItemProcessor['toObject']>

*Defined in [src/lib/i18n-util/types-abstract.ts:208](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L208)*

#### Type declaration:

▸ (`options?`: any): *ReturnType‹ItemProcessor["toObject"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

###  usageAnalyze

• **usageAnalyze**: *function* = {} as (
      usage: any[],
      options?: any,
    ) => ReturnType<ItemProcessor['usageAnalyze']>

*Defined in [src/lib/i18n-util/types-abstract.ts:223](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L223)*

#### Type declaration:

▸ (`usage`: any[], `options?`: any): *ReturnType‹ItemProcessor["usageAnalyze"]›*

**Parameters:**

Name | Type |
------ | ------ |
`usage` | any[] |
`options?` | any |

###  usageValidate

• **usageValidate**: *function* = {} as (
      usage: any[],
      options?: any,
    ) => ReturnType<ItemProcessor['usageValidate']>

*Defined in [src/lib/i18n-util/types-abstract.ts:228](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L228)*

#### Type declaration:

▸ (`usage`: any[], `options?`: any): *ReturnType‹ItemProcessor["usageValidate"]›*

**Parameters:**

Name | Type |
------ | ------ |
`usage` | any[] |
`options?` | any |

###  validator

• **validator**: *object* = {} as { validate: (...args: any[]) => any | Promise<any> }

*Inherited from [Base](README.md#abstract-base).[validator](README.md#validator)*

*Defined in [src/lib/i18n-util/types-abstract.ts:51](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L51)*

#### Type declaration:

* **validate**(): *function*

  * (...`args`: any[]): *any | Promise‹any›*

###  valueResolver

• **valueResolver**: *object* = {} as {
      resolve: (
        values: any[],
        items: { value: any }[],
        ...args: any[]
      ) => any[] | Promise<any[]>;
    }

*Inherited from [Base](README.md#abstract-base).[valueResolver](README.md#valueresolver)*

*Defined in [src/lib/i18n-util/types-abstract.ts:41](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L41)*

#### Type declaration:

* **resolve**(): *function*

  * (`values`: any[], `items`: object[], ...`args`: any[]): *any[] | Promise‹any[]›*

### `Abstract` Loader

• **Loader**:

*Defined in [src/lib/i18n-util/types-abstract.ts:424](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L424)*

###  callback

• **callback**: *function* = {} as (...args: any[]) => R | Promise<UnwrapPromise<R>>

*Defined in [src/lib/i18n-util/types-abstract.ts:427](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L427)*

#### Type declaration:

▸ (...`args`: any[]): *R | Promise‹[UnwrapPromise](README.md#unwrappromise)‹R››*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

###  i18nUtil

• **i18nUtil**: *T* = {} as T

*Defined in [src/lib/i18n-util/types-abstract.ts:425](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L425)*

###  loadFromFiles

• **loadFromFiles**: *function* = {} as (
      paths: any[],
      options?: any,
    ) => R | Promise<UnwrapPromise<R>>

*Defined in [src/lib/i18n-util/types-abstract.ts:429](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L429)*

#### Type declaration:

▸ (`paths`: any[], `options?`: any): *R | Promise‹[UnwrapPromise](README.md#unwrappromise)‹R››*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | any[] |
`options?` | any |

###  loadFromItems

• **loadFromItems**: *function* = {} as (definitions: any[]) => R | Promise<UnwrapPromise<R>>

*Defined in [src/lib/i18n-util/types-abstract.ts:434](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L434)*

#### Type declaration:

▸ (`definitions`: any[]): *R | Promise‹[UnwrapPromise](README.md#unwrappromise)‹R››*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |

###  loadFromObjects

• **loadFromObjects**: *function* = {} as (
      objects: any[],
      options?: any,
    ) => R | Promise<UnwrapPromise<R>>

*Defined in [src/lib/i18n-util/types-abstract.ts:436](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L436)*

#### Type declaration:

▸ (`objects`: any[], `options?`: any): *R | Promise‹[UnwrapPromise](README.md#unwrappromise)‹R››*

**Parameters:**

Name | Type |
------ | ------ |
`objects` | any[] |
`options?` | any |

### `Abstract` UsageLoader

• **UsageLoader**:

*Defined in [src/lib/i18n-util/types-abstract.ts:447](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L447)*

###  callback

• **callback**: *function* = {} as (...args: any[]) => R | Promise<UnwrapPromise<R>>

*Inherited from [Loader](README.md#abstract-loader).[callback](README.md#callback)*

*Defined in [src/lib/i18n-util/types-abstract.ts:427](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L427)*

#### Type declaration:

▸ (...`args`: any[]): *R | Promise‹[UnwrapPromise](README.md#unwrappromise)‹R››*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

###  i18nUtil

• **i18nUtil**: *T* = {} as T

*Inherited from [Loader](README.md#abstract-loader).[i18nUtil](README.md#i18nutil)*

*Defined in [src/lib/i18n-util/types-abstract.ts:425](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L425)*

###  loadFromFiles

• **loadFromFiles**: *function* = {} as (
      paths: any[],
      options?: any,
    ) => R | Promise<UnwrapPromise<R>>

*Inherited from [Loader](README.md#abstract-loader).[loadFromFiles](README.md#loadfromfiles)*

*Defined in [src/lib/i18n-util/types-abstract.ts:429](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L429)*

#### Type declaration:

▸ (`paths`: any[], `options?`: any): *R | Promise‹[UnwrapPromise](README.md#unwrappromise)‹R››*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | any[] |
`options?` | any |

###  loadFromItems

• **loadFromItems**: *function* = {} as (definitions: any[]) => R | Promise<UnwrapPromise<R>>

*Inherited from [Loader](README.md#abstract-loader).[loadFromItems](README.md#loadfromitems)*

*Defined in [src/lib/i18n-util/types-abstract.ts:434](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L434)*

#### Type declaration:

▸ (`definitions`: any[]): *R | Promise‹[UnwrapPromise](README.md#unwrappromise)‹R››*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | any[] |

###  loadFromObjects

• **loadFromObjects**: *function* = {} as (
      objects: any[],
      options?: any,
    ) => R | Promise<UnwrapPromise<R>>

*Inherited from [Loader](README.md#abstract-loader).[loadFromObjects](README.md#loadfromobjects)*

*Defined in [src/lib/i18n-util/types-abstract.ts:436](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types-abstract.ts#L436)*

#### Type declaration:

▸ (`objects`: any[], `options?`: any): *R | Promise‹[UnwrapPromise](README.md#unwrappromise)‹R››*

**Parameters:**

Name | Type |
------ | ------ |
`objects` | any[] |
`options?` | any |

___

###  AI_Item

• **AI_Item**:

*Defined in [src/lib/item/types-abstract.ts:13](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L13)*

###  CtorOptions

• **CtorOptions**:

*Defined in [src/lib/item/types-abstract.ts:129](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L129)*

### `Optional` blockIndex

• **blockIndex**? : *Item["blockIndex"]*

*Defined in [src/lib/item/types-abstract.ts:136](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L136)*

### `Optional` column

• **column**? : *Item["column"]*

*Defined in [src/lib/item/types-abstract.ts:133](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L133)*

### `Optional` line

• **line**? : *Item["line"]*

*Defined in [src/lib/item/types-abstract.ts:132](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L132)*

### `Optional` locale

• **locale**? : *Item["locale"]*

*Defined in [src/lib/item/types-abstract.ts:134](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L134)*

### `Optional` origin

• **origin**? : *Item["origin"]*

*Defined in [src/lib/item/types-abstract.ts:137](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L137)*

### `Optional` path

• **path**? : *Item["path"]*

*Defined in [src/lib/item/types-abstract.ts:131](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L131)*

### `Optional` source

• **source**? : *Item["source"]*

*Defined in [src/lib/item/types-abstract.ts:135](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L135)*

### `Optional` value

• **value**? : *Item["value"]*

*Defined in [src/lib/item/types-abstract.ts:130](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L130)*

###  FilterByOptions

• **FilterByOptions**:

*Defined in [src/lib/item/types-abstract.ts:274](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L274)*

### `Optional` mode

• **mode**? : *"include" | "exclude"*

*Defined in [src/lib/item/types-abstract.ts:279](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L279)*

Whether the items that match the value should be included or excluded
from the result.

###  FromObjectOptions

• **FromObjectOptions**:

*Defined in [src/lib/item/types-abstract.ts:289](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L289)*

### `Optional` includeMissing

• **includeMissing**? : *undefined | false | true*

*Inherited from [ItemsByLocaleOptions](README.md#itemsbylocaleoptions).[includeMissing](README.md#optional-includemissing)*

*Defined in [src/lib/item/types-abstract.ts:265](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L265)*

Whether definition items with value that indicates missing value should
be included.

By default, missing value is `null`.

### `Optional` itemClass

• **itemClass**? : *undefined | object*

*Defined in [src/lib/item/types-abstract.ts:292](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L292)*

### `Optional` missingValue

• **missingValue**? : *any*

*Inherited from [ItemsByLocaleOptions](README.md#itemsbylocaleoptions).[missingValue](README.md#optional-missingvalue)*

*Defined in [src/lib/item/types-abstract.ts:271](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L271)*

The value that indicates a missing value.

By default, missing value is `null`.

### `Optional` throwOnDuplicate

• **throwOnDuplicate**? : *undefined | false | true*

*Defined in [src/lib/item/types-abstract.ts:293](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L293)*

###  Item

• **Item**:

*Defined in [src/lib/item/types-abstract.ts:20](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L20)*

Interface of the common metadata of items that contain some information
obtained from a file read by file adaptor.

### `Optional` blockIndex

• **blockIndex**? : *undefined | number*

*Defined in [src/lib/item/types-abstract.ts:67](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L67)*

If the parsed source file contained multiple content blocks (e.g. think
of XML with multiple tags, or JSON with array as top-level item),
blockIndex is the index of the content block from which the content
originates.

### `Optional` column

• **column**? : *undefined | number*

*Defined in [src/lib/item/types-abstract.ts:40](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L40)*

Column in the line where the usage has been observed

###  copy

• **copy**: *function*

*Defined in [src/lib/item/types-abstract.ts:126](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L126)*

Create a new instance with copied values.

#### Type declaration:

▸ (`newValuesObj?`: Partial‹[CtorOptions](README.md#ctoroptions)›): *[Item](README.md#item)*

**Parameters:**

Name | Type |
------ | ------ |
`newValuesObj?` | Partial‹[CtorOptions](README.md#ctoroptions)› |

###  idHash

• **idHash**: *number*

*Defined in [src/lib/item/types-abstract.ts:121](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L121)*

Hash of the properties that uniquely identify the item. Similar to
positionHash but considers also locale.

The ID should considers following:
- Item source file
- Entity that parsed the source file
- Content block within the source file
- Line within the source file
- Column within the source file
- Path to the value within the parsed object
- Locale of the value

### `Optional` line

• **line**? : *undefined | number*

*Defined in [src/lib/item/types-abstract.ts:35](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L35)*

Line in the file where the usage has been observed

### `Optional` locale

• **locale**? : *undefined | string*

*Defined in [src/lib/item/types-abstract.ts:45](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L45)*

Locale that the value stored by this instance relates to.

###  localeTokenHash

• **localeTokenHash**: *number*

*Defined in [src/lib/item/types-abstract.ts:82](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L82)*

Hash of the properties that uniquely identify the item within the
translations object.

The locale token should considers following:
- Locale
- Message path

### `Optional` origin

• **origin**? : *undefined | string*

*Defined in [src/lib/item/types-abstract.ts:59](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L59)*

Identifier of the entity that created the ExtractItem instance.

Since `blockIndex` may differ based on how the source was parsed,
this serves to distinguish if same `blockIndex` values are indeed
comparable.

###  path

• **path**: *string[]*

*Defined in [src/lib/item/types-abstract.ts:30](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L30)*

Path (list of object keys) of the translation key that the value stored
by the item relates to.

###  pathHash

• **pathHash**: *number*

*Defined in [src/lib/item/types-abstract.ts:72](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L72)*

Hash of the path.

###  positionHash

• **positionHash**: *number*

*Defined in [src/lib/item/types-abstract.ts:106](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L106)*

Hash of the properties that uniquely identify the position of the item
irrespective of the locale.

The position considers following:
- Item source file
- Entity that parsed the source file
- Content block within the source file
- Line within the source file
- Column within the source file
- Path to the value within the parsed object

### `Optional` source

• **source**? : *undefined | string*

*Defined in [src/lib/item/types-abstract.ts:50](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L50)*

Path to the file where the ExtractItem content originates from.

###  sourceHash

• **sourceHash**: *number*

*Defined in [src/lib/item/types-abstract.ts:92](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L92)*

Hash of the properties that uniquely identify the source of the item.

The source considers following:
- `source` - Item source file
- `origin` - The entity that parsed the source file
- `blockIndex` - Content block within the source file

###  value

• **value**: *any*

*Defined in [src/lib/item/types-abstract.ts:24](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L24)*

Value stored by the item.

###  ItemArray

• **ItemArray**:

*Defined in [src/lib/item/types-abstract.ts:140](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L140)*

###  [Symbol.iterator]

• **[Symbol.iterator]**: *function*

*Defined in [src/lib/item/types-abstract.ts:143](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L143)*

#### Type declaration:

▸ (): *IterableIterator‹T›*

###  difference

• **difference**: *function*

*Defined in [src/lib/item/types-abstract.ts:148](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L148)*

#### Type declaration:

▸ (`other`: [ItemArrayLike](README.md#itemarraylike), `options?`: [DifferenceOptions](README.md#differenceoptions)): *[ItemArray](README.md#itemarray)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [ItemArrayLike](README.md#itemarraylike) |
`options?` | [DifferenceOptions](README.md#differenceoptions) |

###  duplicates

• **duplicates**: *function*

*Defined in [src/lib/item/types-abstract.ts:209](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L209)*

#### Type declaration:

▸ (`options?`: [DuplicatesOptions](README.md#duplicatesoptions)): *[Map](classes/arraymap.md#static-map)‹number, T[]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [DuplicatesOptions](README.md#duplicatesoptions) |

###  filterBy

• **filterBy**: *function*

*Defined in [src/lib/item/types-abstract.ts:183](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L183)*

#### Type declaration:

▸ (`callback`: function, `options?`: [FilterByOptions](README.md#filterbyoptions)): *[ItemArray](README.md#itemarray)‹T›*

**Parameters:**

▪ **callback**: *function*

▸ (`item`: T): *boolean | void*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

▪`Optional`  **options**: *[FilterByOptions](README.md#filterbyoptions)*

###  filterByLocale

• **filterByLocale**: *function*

*Defined in [src/lib/item/types-abstract.ts:195](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L195)*

#### Type declaration:

▸ (`locale`: NonNullable‹T["locale"]›, `options?`: [FilterByLocaleOptions](README.md#filterbylocaleoptions)): *[ItemArray](README.md#itemarray)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`locale` | NonNullable‹T["locale"]› |
`options?` | [FilterByLocaleOptions](README.md#filterbylocaleoptions) |

###  filterByLocales

• **filterByLocales**: *function*

*Defined in [src/lib/item/types-abstract.ts:199](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L199)*

#### Type declaration:

▸ (`locales`: NonNullable‹T["locale"]›[], `options?`: [FilterByLocaleOptions](README.md#filterbylocaleoptions)): *[ItemArray](README.md#itemarray)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`locales` | NonNullable‹T["locale"]›[] |
`options?` | [FilterByLocaleOptions](README.md#filterbylocaleoptions) |

###  filterByPath

• **filterByPath**: *function*

*Defined in [src/lib/item/types-abstract.ts:187](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L187)*

#### Type declaration:

▸ (`path`: NonNullable‹T["path"]›, `options?`: [FilterByPathOptions](README.md#filterbypathoptions)): *[ItemArray](README.md#itemarray)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`path` | NonNullable‹T["path"]› |
`options?` | [FilterByPathOptions](README.md#filterbypathoptions) |

###  filterByPaths

• **filterByPaths**: *function*

*Defined in [src/lib/item/types-abstract.ts:191](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L191)*

#### Type declaration:

▸ (`paths`: NonNullable‹T["path"]›[], `options?`: [FilterByPathOptions](README.md#filterbypathoptions)): *[ItemArray](README.md#itemarray)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | NonNullable‹T["path"]›[] |
`options?` | [FilterByPathOptions](README.md#filterbypathoptions) |

###  filterByValue

• **filterByValue**: *function*

*Defined in [src/lib/item/types-abstract.ts:203](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L203)*

#### Type declaration:

▸ (`value`: any, `options?`: [FilterByValueOptions](README.md#filterbyvalueoptions)): *[ItemArray](README.md#itemarray)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`options?` | [FilterByValueOptions](README.md#filterbyvalueoptions) |

###  filterByValues

• **filterByValues**: *function*

*Defined in [src/lib/item/types-abstract.ts:204](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L204)*

#### Type declaration:

▸ (`value`: any[], `options?`: [FilterByValueOptions](README.md#filterbyvalueoptions)): *[ItemArray](README.md#itemarray)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any[] |
`options?` | [FilterByValueOptions](README.md#filterbyvalueoptions) |

###  filterMissing

• **filterMissing**: *function*

*Defined in [src/lib/item/types-abstract.ts:208](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L208)*

#### Type declaration:

▸ (`options?`: [FilterMissingOptions](README.md#filtermissingoptions)): *[ItemArray](README.md#itemarray)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [FilterMissingOptions](README.md#filtermissingoptions) |

###  intersection

• **intersection**: *function*

*Defined in [src/lib/item/types-abstract.ts:153](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L153)*

#### Type declaration:

▸ (`other`: [ItemArrayLike](README.md#itemarraylike), `options?`: [IntersectionOptions](README.md#intersectionoptions)): *[ItemArray](README.md#itemarray)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [ItemArrayLike](README.md#itemarraylike) |
`options?` | [IntersectionOptions](README.md#intersectionoptions) |

###  items

• **items**: *T[]*

*Defined in [src/lib/item/types-abstract.ts:141](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L141)*

###  itemsByLocale

• **itemsByLocale**: *function*

*Defined in [src/lib/item/types-abstract.ts:179](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L179)*

#### Type declaration:

▸ (`locale`: string, `options?`: [ItemsByLocaleOptions](README.md#itemsbylocaleoptions)): *[ItemArray](README.md#itemarray)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`locale` | string |
`options?` | [ItemsByLocaleOptions](README.md#itemsbylocaleoptions) |

###  itemsByLocales

• **itemsByLocales**: *function*

*Defined in [src/lib/item/types-abstract.ts:175](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L175)*

#### Type declaration:

▸ (`locales`: string[], `options?`: [ItemsByLocaleOptions](README.md#itemsbylocaleoptions)): *[ItemArray](README.md#itemarray)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`locales` | string[] |
`options?` | [ItemsByLocaleOptions](README.md#itemsbylocaleoptions) |

###  length

• **length**: *number*

*Defined in [src/lib/item/types-abstract.ts:145](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L145)*

###  prop

• **prop**: *function*

*Defined in [src/lib/item/types-abstract.ts:146](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L146)*

#### Type declaration:

▸ <**K**>(`prop`: K): *T[K][]*

**Type parameters:**

▪ **K**: *keyof T*

**Parameters:**

Name | Type |
------ | ------ |
`prop` | K |

###  push

• **push**: *function*

*Defined in [src/lib/item/types-abstract.ts:144](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L144)*

#### Type declaration:

▸ (...`items`: T[]): *ReturnType‹Array<any>["push"]›*

**Parameters:**

Name | Type |
------ | ------ |
`...items` | T[] |

###  toObject

• **toObject**: *function*

*Defined in [src/lib/item/types-abstract.ts:210](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L210)*

#### Type declaration:

▸ <**O**>(`options`: O): *[ToObjectResult](README.md#toobjectresult)‹O["simple"], O["merge"], T›*

**Type parameters:**

▪ **O**: *[ToObjectOptions](README.md#toobjectoptions)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | O |

###  union

• **union**: *function*

*Defined in [src/lib/item/types-abstract.ts:152](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L152)*

#### Type declaration:

▸ (`other`: [ItemArrayLike](README.md#itemarraylike)‹T›, `options?`: [UnionOptions](README.md#unionoptions)): *[ItemArray](README.md#itemarray)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [ItemArrayLike](README.md#itemarraylike)‹T› |
`options?` | [UnionOptions](README.md#unionoptions) |

###  uniqProp

• **uniqProp**: *function*

*Defined in [src/lib/item/types-abstract.ts:147](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L147)*

#### Type declaration:

▸ <**K**>(`prop`: K): *T[K][]*

**Type parameters:**

▪ **K**: *keyof T*

**Parameters:**

Name | Type |
------ | ------ |
`prop` | K |

###  update

• **update**: *function*

*Defined in [src/lib/item/types-abstract.ts:171](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L171)*

#### Type declaration:

▸ <**T2**>(`other`: [ItemArrayLike](README.md#itemarraylike)‹T2›, `options?`: [UpdateOptions](README.md#updateoptions)‹T, T2›): *[UpdateReturn](README.md#updatereturn)‹T, T2›*

**Type parameters:**

▪ **T2**: *[Item](README.md#item)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [ItemArrayLike](README.md#itemarraylike)‹T2› |
`options?` | [UpdateOptions](README.md#updateoptions)‹T, T2› |

###  updateBy

• **updateBy**: *function*

*Defined in [src/lib/item/types-abstract.ts:157](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L157)*

#### Type declaration:

▸ <**T2**>(`other`: [ItemArrayLike](README.md#itemarraylike)‹T2›, `options?`: [UpdateByOptions](README.md#updatebyoptions)‹T, T2›): *[UpdateReturn](README.md#updatereturn)‹T, T2›*

**Type parameters:**

▪ **T2**: *[Item](README.md#item)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [ItemArrayLike](README.md#itemarraylike)‹T2› |
`options?` | [UpdateByOptions](README.md#updatebyoptions)‹T, T2› |

###  updateProp

• **updateProp**: *function*

*Defined in [src/lib/item/types-abstract.ts:161](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L161)*

#### Type declaration:

▸ <**T2**>(`other`: [ItemArrayLike](README.md#itemarraylike)‹T2›, `prop`: keyof T, `options?`: [UpdatePropOptions](README.md#updatepropoptions)‹T›): *[UpdateReturn](README.md#updatereturn)‹T, T2›*

**Type parameters:**

▪ **T2**: *[Item](README.md#item)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [ItemArrayLike](README.md#itemarraylike)‹T2› |
`prop` | keyof T |
`options?` | [UpdatePropOptions](README.md#updatepropoptions)‹T› |

###  updateProps

• **updateProps**: *function*

*Defined in [src/lib/item/types-abstract.ts:166](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L166)*

#### Type declaration:

▸ <**T2**>(`other`: [ItemArrayLike](README.md#itemarraylike)‹T2›, `props`: keyof T[], `options?`: [UpdatePropOptions](README.md#updatepropoptions)‹T›): *[UpdateReturn](README.md#updatereturn)‹T, T2›*

**Type parameters:**

▪ **T2**: *[Item](README.md#item)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [ItemArrayLike](README.md#itemarraylike)‹T2› |
`props` | keyof T[] |
`options?` | [UpdatePropOptions](README.md#updatepropoptions)‹T› |

###  ItemsByLocaleOptions

• **ItemsByLocaleOptions**:

*Defined in [src/lib/item/types-abstract.ts:258](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L258)*

### `Optional` includeMissing

• **includeMissing**? : *undefined | false | true*

*Defined in [src/lib/item/types-abstract.ts:265](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L265)*

Whether definition items with value that indicates missing value should
be included.

By default, missing value is `null`.

### `Optional` missingValue

• **missingValue**? : *any*

*Defined in [src/lib/item/types-abstract.ts:271](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L271)*

The value that indicates a missing value.

By default, missing value is `null`.

###  ToObjectOptions

• **ToObjectOptions**:

*Defined in [src/lib/item/types-abstract.ts:296](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L296)*

### `Optional` includeMissing

• **includeMissing**? : *undefined | false | true*

*Inherited from [ItemsByLocaleOptions](README.md#itemsbylocaleoptions).[includeMissing](README.md#optional-includemissing)*

*Defined in [src/lib/item/types-abstract.ts:265](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L265)*

Whether definition items with value that indicates missing value should
be included.

By default, missing value is `null`.

### `Optional` merge

• **merge**? : *undefined | false | true*

*Defined in [src/lib/item/types-abstract.ts:299](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L299)*

### `Optional` missingValue

• **missingValue**? : *any*

*Inherited from [ItemsByLocaleOptions](README.md#itemsbylocaleoptions).[missingValue](README.md#optional-missingvalue)*

*Defined in [src/lib/item/types-abstract.ts:271](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L271)*

The value that indicates a missing value.

By default, missing value is `null`.

### `Optional` simple

• **simple**? : *undefined | false | true*

*Defined in [src/lib/item/types-abstract.ts:298](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L298)*

### `Optional` template

• **template**? : *[AnyObj](README.md#anyobj)*

*Defined in [src/lib/item/types-abstract.ts:297](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L297)*

### `Optional` throwOnDuplicate

• **throwOnDuplicate**? : *undefined | false | true*

*Defined in [src/lib/item/types-abstract.ts:300](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L300)*

###  UpdateByOptions

• **UpdateByOptions**:

*Defined in [src/lib/item/types-abstract.ts:242](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L242)*

### `Optional` addUnmatched

• **addUnmatched**? : *undefined | false | true*

*Inherited from [UpdateByOptions](README.md#updatebyoptions).[addUnmatched](README.md#optional-addunmatched)*

*Defined in [src/lib/item/types-abstract.ts:238](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L238)*

### `Optional` hashType

• **hashType**? : *[HashType](README.md#hashtype)*

*Inherited from [UpdateByOptions](README.md#updatebyoptions).[hashType](README.md#optional-hashtype)*

*Defined in [src/lib/item/types-abstract.ts:222](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L222)*

### `Optional` itemFactory

• **itemFactory**? : *undefined | function*

*Inherited from [UpdateByOptions](README.md#updatebyoptions).[itemFactory](README.md#optional-itemfactory)*

*Defined in [src/lib/item/types-abstract.ts:239](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L239)*

### `Optional` updater

• **updater**? : *undefined | function*

*Defined in [src/lib/item/types-abstract.ts:246](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L246)*

###  UpdateOptions

• **UpdateOptions**:

*Defined in [src/lib/item/types-abstract.ts:251](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L251)*

### `Optional` addUnmatched

• **addUnmatched**? : *undefined | false | true*

*Inherited from [UpdateByOptions](README.md#updatebyoptions).[addUnmatched](README.md#optional-addunmatched)*

*Defined in [src/lib/item/types-abstract.ts:238](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L238)*

### `Optional` hashType

• **hashType**? : *[HashType](README.md#hashtype)*

*Inherited from [UpdateByOptions](README.md#updatebyoptions).[hashType](README.md#optional-hashtype)*

*Defined in [src/lib/item/types-abstract.ts:222](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L222)*

### `Optional` itemFactory

• **itemFactory**? : *undefined | function*

*Inherited from [UpdateByOptions](README.md#updatebyoptions).[itemFactory](README.md#optional-itemfactory)*

*Defined in [src/lib/item/types-abstract.ts:239](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L239)*

### `Optional` updater

• **updater**? : *keyof T | keyof T[] | UpdateByOptions<T, T2>["updater"]*

*Defined in [src/lib/item/types-abstract.ts:253](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L253)*

###  UpdateReturn

• **UpdateReturn**:

*Defined in [src/lib/item/types-abstract.ts:231](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L231)*

###  items

• **items**: *[ItemArray](README.md#itemarray)‹T›*

*Defined in [src/lib/item/types-abstract.ts:232](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L232)*

###  unmatched

• **unmatched**: *[Map](classes/arraymap.md#static-map)‹number, [ItemArray](README.md#itemarray)‹T2››*

*Defined in [src/lib/item/types-abstract.ts:234](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L234)*

###  updated

• **updated**: *[ItemArray](README.md#itemarray)‹T›*

*Defined in [src/lib/item/types-abstract.ts:233](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L233)*

###  DifferenceOptions

Ƭ **DifferenceOptions**: *HashTypeOptions*

*Defined in [src/lib/item/types-abstract.ts:225](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L225)*

###  DuplicatesOptions

Ƭ **DuplicatesOptions**: *HashTypeOptions*

*Defined in [src/lib/item/types-abstract.ts:256](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L256)*

###  FilterByLocaleOptions

Ƭ **FilterByLocaleOptions**: *[FilterByOptions](README.md#filterbyoptions)*

*Defined in [src/lib/item/types-abstract.ts:283](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L283)*

###  FilterByPathOptions

Ƭ **FilterByPathOptions**: *[FilterByOptions](README.md#filterbyoptions)*

*Defined in [src/lib/item/types-abstract.ts:284](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L284)*

###  FilterByValueOptions

Ƭ **FilterByValueOptions**: *[FilterByOptions](README.md#filterbyoptions)*

*Defined in [src/lib/item/types-abstract.ts:282](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L282)*

###  FilterMissingOptions

Ƭ **FilterMissingOptions**: *[FilterByValueOptions](README.md#filterbyvalueoptions) & Pick‹[ItemsByLocaleOptions](README.md#itemsbylocaleoptions), "missingValue"›*

*Defined in [src/lib/item/types-abstract.ts:286](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L286)*

###  HashType

Ƭ **HashType**: *"path" | "localeToken" | "source" | "position" | "id"*

*Defined in [src/lib/item/types-abstract.ts:14](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L14)*

###  IntersectionOptions

Ƭ **IntersectionOptions**: *HashTypeOptions*

*Defined in [src/lib/item/types-abstract.ts:229](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L229)*

###  ItemArrayLike

Ƭ **ItemArrayLike**: *[ItemList](README.md#itemlist)‹T› | IterableIterator‹T›*

*Defined in [src/lib/item/types-abstract.ts:217](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L217)*

###  ItemList

Ƭ **ItemList**: *[ItemArray](README.md#itemarray)‹T› | T[]*

*Defined in [src/lib/item/types-abstract.ts:215](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L215)*

###  ToObjectResult

Ƭ **ToObjectResult**: *IsSimple extends true ? IsMerged extends true ? ToObjectResultSimpleMerged : ToObjectResultSimple : IsMerged extends true ? ToObjectResultExpandedMerged<T> : ToObjectResultExpanded<T>*

*Defined in [src/lib/item/types-abstract.ts:324](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L324)*

Result type of the `toObject` function.

Depending on whether option `simple` is `true` or `false`, object with
different properties is returned.

###  ToObjectResultAny

Ƭ **ToObjectResultAny**: *[ToObjectResultSimple](README.md#toobjectresultsimple) | [ToObjectResultSimpleMerged](README.md#toobjectresultsimplemerged) | [ToObjectResultExpanded](README.md#toobjectresultexpanded)‹T› | [ToObjectResultExpandedMerged](README.md#toobjectresultexpandedmerged)‹T›*

*Defined in [src/lib/item/types-abstract.ts:312](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L312)*

Union of simple and expanded IToObject types

###  ToObjectResultExpanded

Ƭ **ToObjectResultExpanded**: *[DeepObject](README.md#deepobject)‹T›*

*Defined in [src/lib/item/types-abstract.ts:304](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L304)*

###  ToObjectResultExpandedMerged

Ƭ **ToObjectResultExpandedMerged**: *[DeepObject](README.md#deepobject)‹[ItemArray](README.md#itemarray)‹T››*

*Defined in [src/lib/item/types-abstract.ts:305](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L305)*

###  ToObjectResultSimple

Ƭ **ToObjectResultSimple**: *[DeepObject](README.md#deepobject)‹string›*

*Defined in [src/lib/item/types-abstract.ts:302](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L302)*

###  ToObjectResultSimpleMerged

Ƭ **ToObjectResultSimpleMerged**: *[DeepObject](README.md#deepobject)‹Array‹string››*

*Defined in [src/lib/item/types-abstract.ts:303](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L303)*

###  UnionOptions

Ƭ **UnionOptions**: *HashTypeOptions*

*Defined in [src/lib/item/types-abstract.ts:227](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L227)*

###  UpdatePropOptions

Ƭ **UpdatePropOptions**: *UpdateOptionsBase‹T›*

*Defined in [src/lib/item/types-abstract.ts:249](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L249)*

___

###  IAdaptorCollection

• **IAdaptorCollection**:

*Defined in [src/lib/collection/types.ts:144](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L144)*

Subtype of `IMethodCollection` which holds groups of functions used as
adaptors for interacting with various files.

### `Abstract` Collection

• **Collection**:

*Defined in [src/lib/collection/types.ts:218](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L218)*

Subtype of `IMethodCollection` which holds groups of functions used as
adaptors for interacting with various files.

###  collection

• **collection**: *[ItemMap](README.md#itemmap)* = new Map()

*Inherited from [Collection](README.md#abstract-collection).[collection](README.md#collection)*

*Overrides [Collection](README.md#abstract-collection).[collection](README.md#collection)*

*Defined in [src/lib/collection/types-abstract.ts:350](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L350)*

###  add

▸ **add**(`options`: [SetOptions](README.md#setoptions)): *void*

*Inherited from [Collection](README.md#abstract-collection).[add](README.md#add)*

*Overrides [Collection](README.md#abstract-collection).[add](README.md#add)*

*Defined in [src/lib/collection/types-abstract.ts:354](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L354)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SetOptions](README.md#setoptions) |

**Returns:** *void*

###  delete

▸ **delete**(`name`: [Name](README.md#name)): *void*

*Inherited from [Collection](README.md#abstract-collection).[delete](README.md#delete)*

*Defined in [src/lib/collection/types-abstract.ts:107](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L107)*

Remove an item from the collection.

Throws if no item with the name exists in the collection.

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |

**Returns:** *void*

###  get

▸ **get**(`name`: [Name](README.md#name)): *undefined | [ItemBase](README.md#itembase)‹› & [ItemBase](README.md#itembase) & [Item](README.md#item)*

*Inherited from [Collection](README.md#abstract-collection).[get](README.md#get)*

*Overrides [Collection](README.md#abstract-collection).[get](README.md#get)*

*Defined in [src/lib/collection/types-abstract.ts:351](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L351)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |

**Returns:** *undefined | [ItemBase](README.md#itembase)‹› & [ItemBase](README.md#itembase) & [Item](README.md#item)*

###  getOption

▸ **getOption**(`name`: [Name](README.md#name), `optionKey`: string): *any*

*Inherited from [Collection](README.md#abstract-collection).[getOption](README.md#getoption)*

*Defined in [src/lib/collection/types-abstract.ts:240](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L240)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |
`optionKey` | string |

**Returns:** *any*

###  groupByResolve

▸ **groupByResolve**<**T**>(`queries`: T[], `iteratee?`: undefined | function): *[Map](classes/arraymap.md#static-map)‹undefined | [NamedItem](README.md#nameditem)‹›, T[]›*

*Inherited from [Collection](README.md#abstract-collection).[groupByResolve](README.md#groupbyresolve)*

*Overrides [Collection](README.md#abstract-collection).[groupByResolve](README.md#groupbyresolve)*

*Defined in [src/lib/collection/types-abstract.ts:360](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L360)*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

Name | Type |
------ | ------ |
`queries` | T[] |
`iteratee?` | undefined &#124; function |

**Returns:** *[Map](classes/arraymap.md#static-map)‹undefined | [NamedItem](README.md#nameditem)‹›, T[]›*

###  has

▸ **has**(`name`: [Name](README.md#name)): *boolean*

*Inherited from [Collection](README.md#abstract-collection).[has](README.md#has)*

*Defined in [src/lib/collection/types-abstract.ts:91](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L91)*

Check if a collection has an item by it's name.

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |

**Returns:** *boolean*

###  options

▸ **options**(`name`: [Name](README.md#name)): *object*

*Inherited from [Collection](README.md#abstract-collection).[options](README.md#options)*

*Defined in [src/lib/collection/types-abstract.ts:237](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L237)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |

**Returns:** *object*

* \[ **key**: *number*\]: V

###  resolve

▸ **resolve**(`query`: string): *undefined | [NamedItem](README.md#nameditem)‹›*

*Inherited from [Collection](README.md#abstract-collection).[resolve](README.md#resolve)*

*Overrides [Collection](README.md#abstract-collection).[resolve](README.md#resolve)*

*Defined in [src/lib/collection/types-abstract.ts:357](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L357)*

**Parameters:**

Name | Type |
------ | ------ |
`query` | string |

**Returns:** *undefined | [NamedItem](README.md#nameditem)‹›*

###  setOption

▸ **setOption**(`name`: [Name](README.md#name), `optionKey`: string, `optionValue`: any): *void*

*Inherited from [Collection](README.md#abstract-collection).[setOption](README.md#setoption)*

*Defined in [src/lib/collection/types-abstract.ts:243](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L243)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |
`optionKey` | string |
`optionValue` | any |

**Returns:** *void*

###  validate

▸ **validate**(`name`: [Name](README.md#name), `prop`: string): *void*

*Inherited from [Collection](README.md#abstract-collection).[validate](README.md#validate)*

*Defined in [src/lib/collection/types-abstract.ts:130](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L130)*

Validate that a particular item in collection has a specific property.

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |
`prop` | string |

**Returns:** *void*

###  validateMethod

▸ **validateMethod**(`name`: [Name](README.md#name), `method`: keyof ItemMethods): *void*

*Inherited from [Collection](README.md#abstract-collection).[validateMethod](README.md#validatemethod)*

*Overrides [Collection](README.md#abstract-collection).[validateMethod](README.md#validatemethod)*

*Defined in [src/lib/collection/types-abstract.ts:363](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L363)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |
`method` | keyof ItemMethods |

**Returns:** *void*

###  Arg

Ƭ **Arg**: *[Arg](README.md#arg)*

*Defined in [src/lib/collection/types.ts:182](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L182)*

Item format passed to AdaptorCollection constructor that will be
translated to AdaptorItem object

###  Class

Ƭ **Class**: *[Class](README.md#class)*

*Defined in [src/lib/collection/types.ts:197](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L197)*

Collection class type with contructor

###  Ctor

Ƭ **Ctor**: *[Ctor](README.md#ctor)*

*Defined in [src/lib/collection/types.ts:192](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L192)*

Constructor

###  CtorOptions

Ƭ **CtorOptions**: *[CtorOptions](README.md#ctoroptions)*

*Defined in [src/lib/collection/types.ts:187](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L187)*

Constructor options object

###  Item

Ƭ **Item**: *[Item](README.md#item)*

*Defined in [src/lib/collection/types.ts:176](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L176)*

Interface of a single entry containing methods for interacting with
specific file type.

###  ItemBase

Ƭ **ItemBase**: *[ItemBase](README.md#itembase)*

*Defined in [src/lib/collection/types.ts:170](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L170)*

Item properties modified in IAdaptorCollection relative to ICollection

###  ItemMap

Ƭ **ItemMap**: *[ItemMap](README.md#itemmap)*

*Defined in [src/lib/collection/types.ts:212](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L212)*

Mapping of name to Item

###  ItemMethods

Ƭ **ItemMethods**: *[ItemMethods](README.md#itemmethods)*

*Defined in [src/lib/collection/types.ts:165](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L165)*

###  NamedItem

Ƭ **NamedItem**: *[NamedItem](README.md#nameditem)*

*Defined in [src/lib/collection/types.ts:207](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L207)*

Extension of AdaptorItem which also contains name property

###  Parser

Ƭ **Parser**: *[Parser](README.md#parser)*

*Defined in [src/lib/collection/types.ts:148](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L148)*

Parser function

###  Remover

Ƭ **Remover**: *[Remover](README.md#remover)*

*Defined in [src/lib/collection/types.ts:158](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L158)*

Remover function

###  SetOptions

Ƭ **SetOptions**: *[SetOptions](README.md#setoptions)*

*Defined in [src/lib/collection/types.ts:202](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L202)*

Options passed to Set and Add methods

###  UsageAnalyzer

Ƭ **UsageAnalyzer**: *[UsageAnalyzer](README.md#usageanalyzer)*

*Defined in [src/lib/collection/types.ts:163](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L163)*

Usage analyzer function

###  Writer

Ƭ **Writer**: *[Writer](README.md#writer)*

*Defined in [src/lib/collection/types.ts:153](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L153)*

Writer function

___

###  IAdaptorJsonYaml

• **IAdaptorJsonYaml**:

*Defined in [src/lib/adaptors/json-yaml/types.ts:12](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L12)*

###  CollectionCtorOptions

• **CollectionCtorOptions**:

*Defined in [src/lib/adaptors/json-yaml/types.ts:120](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L120)*

### `Optional` abortOnError

• **abortOnError**? : *undefined | false | true*

*Inherited from [WriterOptions](README.md#writeroptions).[abortOnError](README.md#optional-abortonerror)*

*Defined in [src/lib/adaptors/json-yaml/types.ts:78](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L78)*

Whether a process (e.g. writing / updating files) should abort on error
or whether the process should continue and update other files despite
the error.

### `Optional` addPosition

• **addPosition**? : *"prepend" | "append"*

*Inherited from [ResolveItemsOptions](README.md#resolveitemsoptions).[addPosition](README.md#optional-addposition)*

*Defined in [src/lib/content-group.ts:16](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L16)*

### `Optional` addType

• **addType**? : *"general" | "locale" | "custom"*

*Inherited from [ResolveItemsOptions](README.md#resolveitemsoptions).[addType](README.md#optional-addtype)*

*Defined in [src/lib/content-group.ts:17](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L17)*

### `Optional` contentFormatter

• **contentFormatter**? : *[ContentFormatter](README.md#contentformatter)*

*Inherited from [WriterOptions](README.md#writeroptions).[contentFormatter](README.md#optional-contentformatter)*

*Defined in [src/lib/adaptors/json-yaml/types.ts:88](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L88)*

### `Optional` createDir

• **createDir**? : *undefined | false | true*

*Inherited from [ISafeWriteOptions](interfaces/isafewriteoptions.md).[createDir](interfaces/isafewriteoptions.md#optional-createdir)*

*Defined in [src/lib/util/fs.ts:26](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/fs.ts#L26)*

Whether directories should be autocreated when writing to a file in
a directory which doesn't exist yet.

Defaults to `true`

### `Optional` encoding

• **encoding**? : *BufferEncoding | null*

*Inherited from [WriterOptions](README.md#writeroptions).[encoding](README.md#optional-encoding)*

Defined in node_modules/@types/node/fs.d.ts:18

### `Optional` fileMatchLocale

• **fileMatchLocale**? : *undefined | false | true*

*Inherited from [WriterOptions](README.md#writeroptions).[fileMatchLocale](README.md#optional-filematchlocale)*

*Defined in [src/lib/adaptors/json-yaml/types.ts:108](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L108)*

If a definition item is locale-scoped, and the definitions are in
a file that is scoped to a different locale, then whether the
filename should be updated to match the item's locale.

This happens e.g. with `I18nUtil.addLocale`, when the new definitions are
associated with new locale, but the `link` attr still points to the file
that harbours the translations specific to the locale from which the
definitions were copied.

### `Optional` flag

• **flag**? : *undefined | string*

*Inherited from __type.flag*

Defined in node_modules/@types/node/fs.d.ts:1549

### `Optional` includeMissing

• **includeMissing**? : *undefined | false | true*

*Inherited from [ItemsByLocaleOptions](README.md#itemsbylocaleoptions).[includeMissing](README.md#optional-includemissing)*

*Overrides [ItemsByLocaleOptions](README.md#itemsbylocaleoptions).[includeMissing](README.md#optional-includemissing)*

*Defined in [src/lib/item/types-abstract.ts:265](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L265)*

Whether definition items with value that indicates missing value should
be included.

By default, missing value is `null`.

### `Optional` json

• **json**? : *undefined | false | true*

*Inherited from [OptionsBase](README.md#optionsbase).[json](README.md#optional-json)*

*Overrides [OptionsBase](README.md#optionsbase).[json](README.md#optional-json)*

*Defined in [src/lib/adaptors/json-yaml/types.ts:46](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L46)*

Whether the adaptor should process JSON files

### `Optional` locale

• **locale**? : *undefined | string*

*Inherited from [OptionsBase](README.md#optionsbase).[locale](README.md#optional-locale)*

*Overrides [OptionsBase](README.md#optionsbase).[locale](README.md#optional-locale)*

*Defined in [src/lib/adaptors/json-yaml/types.ts:65](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L65)*

Option to scope parsed data as belonging to a particular locale:
```js
{
  en: { // <-- this
    some: "message"
  }
}
```
If `locale` is not provided, locale is inferred as the topmost keys of
the parsed data object(s)

If `locale` is string, the string is used as the locale name.

If `locale` is function, it is given data and options and is expected to
return a string (or undefined).

### `Optional` localeGeneral

• **localeGeneral**? : *undefined | string*

*Inherited from [ResolveItemsOptions](README.md#resolveitemsoptions).[localeGeneral](README.md#optional-localegeneral)*

*Defined in [src/lib/content-group.ts:27](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L27)*

String used to indicate that the definitions grouped under this string
are not limited to a single locale.

### `Optional` logger

• **logger**? : *undefined | function*

*Defined in [src/lib/adaptors/json-yaml/types.ts:131](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L131)*

Logger / debug instance

### `Optional` matchByContent

• **matchByContent**? : *boolean | "strict"*

*Inherited from [ResolveItemsOptions](README.md#resolveitemsoptions).[matchByContent](README.md#optional-matchbycontent)*

*Defined in [src/lib/content-group.ts:15](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L15)*

### `Optional` matchByIndex

• **matchByIndex**? : *boolean | "strict"*

*Inherited from [ResolveItemsOptions](README.md#resolveitemsoptions).[matchByIndex](README.md#optional-matchbyindex)*

*Defined in [src/lib/content-group.ts:14](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L14)*

### `Optional` merge

• **merge**? : *undefined | false | true*

*Inherited from [ToObjectOptions](README.md#toobjectoptions).[merge](README.md#optional-merge)*

*Defined in [src/lib/item/types-abstract.ts:299](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L299)*

### `Optional` missingValue

• **missingValue**? : *any*

*Inherited from [ItemsByLocaleOptions](README.md#itemsbylocaleoptions).[missingValue](README.md#optional-missingvalue)*

*Overrides [ItemsByLocaleOptions](README.md#itemsbylocaleoptions).[missingValue](README.md#optional-missingvalue)*

*Defined in [src/lib/item/types-abstract.ts:271](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L271)*

The value that indicates a missing value.

By default, missing value is `null`.

### `Optional` mkdirOptions

• **mkdirOptions**? : *Extract‹Parameters<typeof mkdirSync>[1], object›*

*Inherited from [ISafeWriteOptions](interfaces/isafewriteoptions.md).[mkdirOptions](interfaces/isafewriteoptions.md#optional-mkdiroptions)*

*Defined in [src/lib/util/fs.ts:37](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/fs.ts#L37)*

Options object passed to fs.mkdirSync when `createDir` is `true`.

Defaults to `true`

### `Optional` pathFormatter

• **pathFormatter**? : *[PathFormatter](README.md#pathformatter)*

*Inherited from [ParserOptions](README.md#parseroptions).[pathFormatter](README.md#optional-pathformatter)*

*Overrides [WriterOptions](README.md#writeroptions).[pathFormatter](README.md#optional-pathformatter)*

*Defined in [src/lib/adaptors/json-yaml/types.ts:69](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L69)*

### `Optional` query

• **query**? : *undefined | function*

*Inherited from [ResolveItemsOptions](README.md#resolveitemsoptions).[query](README.md#optional-query)*

*Defined in [src/lib/content-group.ts:18](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L18)*

### `Optional` removeDirOnError

• **removeDirOnError**? : *undefined | false | true*

*Inherited from [ISafeWriteOptions](interfaces/isafewriteoptions.md).[removeDirOnError](interfaces/isafewriteoptions.md#optional-removedironerror)*

*Defined in [src/lib/util/fs.ts:31](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/fs.ts#L31)*

Whether directories created by the `createDir` option should be removed
when the process throws.

### `Optional` restoreOnError

• **restoreOnError**? : *undefined | false | true*

*Inherited from [ISafeWriteOptions](interfaces/isafewriteoptions.md).[restoreOnError](interfaces/isafewriteoptions.md#optional-restoreonerror)*

*Defined in [src/lib/util/fs.ts:19](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/fs.ts#L19)*

Whether the changes done to files should be undone if the process throws

Defaults to `true`

### `Optional` serializerOptions

• **serializerOptions**? : *[SerializerOptions](README.md#serializeroptions)*

*Inherited from [WriterOptions](README.md#writeroptions).[serializerOptions](README.md#optional-serializeroptions)*

*Defined in [src/lib/adaptors/json-yaml/types.ts:93](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L93)*

Options object passed to serializers

### `Optional` serializers

• **serializers**? : *CtorOptions["collection"]*

*Defined in [src/lib/adaptors/json-yaml/types.ts:127](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L127)*

Collection instance with serializers to be used instead of the default

### `Optional` simple

• **simple**? : *undefined | false | true*

*Inherited from [ToObjectOptions](README.md#toobjectoptions).[simple](README.md#optional-simple)*

*Defined in [src/lib/item/types-abstract.ts:298](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L298)*

### `Optional` strategy

• **strategy**? : *"add" | "locale" | "localeStrict" | "general"*

*Inherited from [ResolveItemsOptions](README.md#resolveitemsoptions).[strategy](README.md#optional-strategy)*

*Defined in [src/lib/content-group.ts:13](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L13)*

### `Optional` template

• **template**? : *[AnyObj](README.md#anyobj)*

*Inherited from [ToObjectOptions](README.md#toobjectoptions).[template](README.md#optional-template)*

*Defined in [src/lib/item/types-abstract.ts:297](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L297)*

### `Optional` throwOnDuplicate

• **throwOnDuplicate**? : *undefined | false | true*

*Inherited from [ToObjectOptions](README.md#toobjectoptions).[throwOnDuplicate](README.md#optional-throwonduplicate)*

*Defined in [src/lib/item/types-abstract.ts:300](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L300)*

### `Optional` writeFileOptions

• **writeFileOptions**? : *Extract‹Parameters<typeof writeFileSync>[2], object›*

*Inherited from [WriterOptions](README.md#writeroptions).[writeFileOptions](README.md#optional-writefileoptions)*

*Defined in [src/lib/adaptors/json-yaml/types.ts:97](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L97)*

Options object passed to fs.writeFile.

### `Optional` yaml

• **yaml**? : *undefined | false | true*

*Inherited from [OptionsBase](README.md#optionsbase).[yaml](README.md#optional-yaml)*

*Overrides [OptionsBase](README.md#optionsbase).[yaml](README.md#optional-yaml)*

*Defined in [src/lib/adaptors/json-yaml/types.ts:42](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L42)*

Whether the adaptor should process YAML files

###  ContentGroupCtorOptions

• **ContentGroupCtorOptions**:

*Defined in [src/lib/adaptors/json-yaml/types.ts:28](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L28)*

### `Optional` filepath

• **filepath**? : *undefined | string*

*Inherited from [CtorOptions](README.md#ctoroptions).[filepath](README.md#optional-filepath)*

*Defined in [src/lib/content-group.ts:85](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L85)*

Path to the file from where the content originates. This string
is passed to all blocks.

### `Optional` logger

• **logger**? : *undefined | function*

*Inherited from [ContentGroupCtorOptions](README.md#contentgroupctoroptions).[logger](README.md#optional-logger)*

*Defined in [src/lib/adaptors/json-yaml/types.ts:17](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L17)*

Logger / debug instance

### `Optional` serializers

• **serializers**? : *[Collection](README.md#abstract-collection)*

*Inherited from [CtorOptions](README.md#ctoroptions).[serializers](README.md#optional-serializers)*

*Defined in [src/lib/content-group.ts:80](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L80)*

Collection instance with serializers to be used instead of the default

###  DefinitionItem

• **DefinitionItem**:

*Defined in [src/lib/adaptors/json-yaml/types.ts:24](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L24)*

###  copy

• **copy**: *function*

*Inherited from [Item](README.md#item).[copy](README.md#copy)*

*Defined in [src/lib/definition/types-abstract.ts:30](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/types-abstract.ts#L30)*

Create a new instance with copied values.

#### Type declaration:

▸ (`newValuesObj?`: Partial‹[CtorOptions](README.md#ctoroptions)›): *[Item](README.md#item)*

**Parameters:**

Name | Type |
------ | ------ |
`newValuesObj?` | Partial‹[CtorOptions](README.md#ctoroptions)› |

### `Optional` rootIsArray

• **rootIsArray**? : *undefined | false | true*

*Defined in [src/lib/adaptors/json-yaml/types.ts:25](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L25)*

### `Optional` sourceScope

• **sourceScope**? : *"general" | "locale"*

*Inherited from [Item](README.md#item).[sourceScope](README.md#optional-sourcescope)*

*Defined in [src/lib/definition/types-abstract.ts:26](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/types-abstract.ts#L26)*

###  DefinitionItemCtorOptions

• **DefinitionItemCtorOptions**:

*Defined in [src/lib/adaptors/json-yaml/types.ts:20](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L20)*

###  path

• **path**: *string[]*

*Inherited from [CtorOptions](README.md#ctoroptions).[path](README.md#path)*

*Defined in [src/lib/definition/types-abstract.ts:18](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/types-abstract.ts#L18)*

### `Optional` rootIsArray

• **rootIsArray**? : *undefined | false | true*

*Defined in [src/lib/adaptors/json-yaml/types.ts:21](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L21)*

### `Optional` sourceScope

• **sourceScope**? : *"general" | "locale"*

*Inherited from [CtorOptions](README.md#ctoroptions).[sourceScope](README.md#optional-sourcescope)*

*Defined in [src/lib/definition/types-abstract.ts:17](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/types-abstract.ts#L17)*

###  OptionsBase

• **OptionsBase**:

*Defined in [src/lib/adaptors/json-yaml/types.ts:38](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L38)*

### `Optional` includeMissing

• **includeMissing**? : *undefined | false | true*

*Inherited from [ItemsByLocaleOptions](README.md#itemsbylocaleoptions).[includeMissing](README.md#optional-includemissing)*

*Defined in [src/lib/item/types-abstract.ts:265](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L265)*

Whether definition items with value that indicates missing value should
be included.

By default, missing value is `null`.

### `Optional` json

• **json**? : *undefined | false | true*

*Defined in [src/lib/adaptors/json-yaml/types.ts:46](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L46)*

Whether the adaptor should process JSON files

### `Optional` locale

• **locale**? : *undefined | string*

*Defined in [src/lib/adaptors/json-yaml/types.ts:65](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L65)*

Option to scope parsed data as belonging to a particular locale:
```js
{
  en: { // <-- this
    some: "message"
  }
}
```
If `locale` is not provided, locale is inferred as the topmost keys of
the parsed data object(s)

If `locale` is string, the string is used as the locale name.

If `locale` is function, it is given data and options and is expected to
return a string (or undefined).

### `Optional` missingValue

• **missingValue**? : *any*

*Inherited from [ItemsByLocaleOptions](README.md#itemsbylocaleoptions).[missingValue](README.md#optional-missingvalue)*

*Defined in [src/lib/item/types-abstract.ts:271](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L271)*

The value that indicates a missing value.

By default, missing value is `null`.

### `Optional` yaml

• **yaml**? : *undefined | false | true*

*Defined in [src/lib/adaptors/json-yaml/types.ts:42](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L42)*

Whether the adaptor should process YAML files

###  ParserOptions

• **ParserOptions**:

*Defined in [src/lib/adaptors/json-yaml/types.ts:68](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L68)*

### `Optional` includeMissing

• **includeMissing**? : *undefined | false | true*

*Inherited from [ItemsByLocaleOptions](README.md#itemsbylocaleoptions).[includeMissing](README.md#optional-includemissing)*

*Defined in [src/lib/item/types-abstract.ts:265](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L265)*

Whether definition items with value that indicates missing value should
be included.

By default, missing value is `null`.

### `Optional` json

• **json**? : *undefined | false | true*

*Inherited from [OptionsBase](README.md#optionsbase).[json](README.md#optional-json)*

*Defined in [src/lib/adaptors/json-yaml/types.ts:46](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L46)*

Whether the adaptor should process JSON files

### `Optional` locale

• **locale**? : *undefined | string*

*Inherited from [OptionsBase](README.md#optionsbase).[locale](README.md#optional-locale)*

*Defined in [src/lib/adaptors/json-yaml/types.ts:65](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L65)*

Option to scope parsed data as belonging to a particular locale:
```js
{
  en: { // <-- this
    some: "message"
  }
}
```
If `locale` is not provided, locale is inferred as the topmost keys of
the parsed data object(s)

If `locale` is string, the string is used as the locale name.

If `locale` is function, it is given data and options and is expected to
return a string (or undefined).

### `Optional` missingValue

• **missingValue**? : *any*

*Inherited from [ItemsByLocaleOptions](README.md#itemsbylocaleoptions).[missingValue](README.md#optional-missingvalue)*

*Defined in [src/lib/item/types-abstract.ts:271](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L271)*

The value that indicates a missing value.

By default, missing value is `null`.

### `Optional` pathFormatter

• **pathFormatter**? : *[PathFormatter](README.md#pathformatter)*

*Defined in [src/lib/adaptors/json-yaml/types.ts:69](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L69)*

### `Optional` yaml

• **yaml**? : *undefined | false | true*

*Inherited from [OptionsBase](README.md#optionsbase).[yaml](README.md#optional-yaml)*

*Defined in [src/lib/adaptors/json-yaml/types.ts:42](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L42)*

Whether the adaptor should process YAML files

###  RemoverOptions

• **RemoverOptions**:

*Defined in [src/lib/adaptors/json-yaml/types.ts:111](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L111)*

### `Optional` abortOnError

• **abortOnError**? : *undefined | false | true*

*Inherited from [WriterOptions](README.md#writeroptions).[abortOnError](README.md#optional-abortonerror)*

*Defined in [src/lib/adaptors/json-yaml/types.ts:78](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L78)*

Whether a process (e.g. writing / updating files) should abort on error
or whether the process should continue and update other files despite
the error.

### `Optional` createDir

• **createDir**? : *undefined | false | true*

*Inherited from [ISafeWriteOptions](interfaces/isafewriteoptions.md).[createDir](interfaces/isafewriteoptions.md#optional-createdir)*

*Defined in [src/lib/util/fs.ts:26](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/fs.ts#L26)*

Whether directories should be autocreated when writing to a file in
a directory which doesn't exist yet.

Defaults to `true`

### `Optional` mkdirOptions

• **mkdirOptions**? : *Extract‹Parameters<typeof mkdirSync>[1], object›*

*Inherited from [ISafeWriteOptions](interfaces/isafewriteoptions.md).[mkdirOptions](interfaces/isafewriteoptions.md#optional-mkdiroptions)*

*Defined in [src/lib/util/fs.ts:37](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/fs.ts#L37)*

Options object passed to fs.mkdirSync when `createDir` is `true`.

Defaults to `true`

### `Optional` removeDirOnError

• **removeDirOnError**? : *undefined | false | true*

*Inherited from [ISafeWriteOptions](interfaces/isafewriteoptions.md).[removeDirOnError](interfaces/isafewriteoptions.md#optional-removedironerror)*

*Defined in [src/lib/util/fs.ts:31](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/fs.ts#L31)*

Whether directories created by the `createDir` option should be removed
when the process throws.

### `Optional` restoreOnError

• **restoreOnError**? : *undefined | false | true*

*Inherited from [ISafeWriteOptions](interfaces/isafewriteoptions.md).[restoreOnError](interfaces/isafewriteoptions.md#optional-restoreonerror)*

*Defined in [src/lib/util/fs.ts:19](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/fs.ts#L19)*

Whether the changes done to files should be undone if the process throws

Defaults to `true`

###  WriterOptions

• **WriterOptions**:

*Defined in [src/lib/adaptors/json-yaml/types.ts:81](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L81)*

### `Optional` abortOnError

• **abortOnError**? : *undefined | false | true*

*Inherited from [WriterOptions](README.md#writeroptions).[abortOnError](README.md#optional-abortonerror)*

*Defined in [src/lib/adaptors/json-yaml/types.ts:78](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L78)*

Whether a process (e.g. writing / updating files) should abort on error
or whether the process should continue and update other files despite
the error.

### `Optional` addPosition

• **addPosition**? : *"prepend" | "append"*

*Inherited from [ResolveItemsOptions](README.md#resolveitemsoptions).[addPosition](README.md#optional-addposition)*

*Defined in [src/lib/content-group.ts:16](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L16)*

### `Optional` addType

• **addType**? : *"general" | "locale" | "custom"*

*Inherited from [ResolveItemsOptions](README.md#resolveitemsoptions).[addType](README.md#optional-addtype)*

*Defined in [src/lib/content-group.ts:17](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L17)*

### `Optional` contentFormatter

• **contentFormatter**? : *[ContentFormatter](README.md#contentformatter)*

*Defined in [src/lib/adaptors/json-yaml/types.ts:88](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L88)*

### `Optional` createDir

• **createDir**? : *undefined | false | true*

*Inherited from [ISafeWriteOptions](interfaces/isafewriteoptions.md).[createDir](interfaces/isafewriteoptions.md#optional-createdir)*

*Defined in [src/lib/util/fs.ts:26](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/fs.ts#L26)*

Whether directories should be autocreated when writing to a file in
a directory which doesn't exist yet.

Defaults to `true`

### `Optional` encoding

• **encoding**? : *BufferEncoding | null*

*Inherited from [WriterOptions](README.md#writeroptions).[encoding](README.md#optional-encoding)*

Defined in node_modules/@types/node/fs.d.ts:18

### `Optional` fileMatchLocale

• **fileMatchLocale**? : *undefined | false | true*

*Defined in [src/lib/adaptors/json-yaml/types.ts:108](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L108)*

If a definition item is locale-scoped, and the definitions are in
a file that is scoped to a different locale, then whether the
filename should be updated to match the item's locale.

This happens e.g. with `I18nUtil.addLocale`, when the new definitions are
associated with new locale, but the `link` attr still points to the file
that harbours the translations specific to the locale from which the
definitions were copied.

### `Optional` flag

• **flag**? : *undefined | string*

*Inherited from __type.flag*

Defined in node_modules/@types/node/fs.d.ts:1549

### `Optional` includeMissing

• **includeMissing**? : *undefined | false | true*

*Inherited from [ItemsByLocaleOptions](README.md#itemsbylocaleoptions).[includeMissing](README.md#optional-includemissing)*

*Overrides [ItemsByLocaleOptions](README.md#itemsbylocaleoptions).[includeMissing](README.md#optional-includemissing)*

*Defined in [src/lib/item/types-abstract.ts:265](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L265)*

Whether definition items with value that indicates missing value should
be included.

By default, missing value is `null`.

### `Optional` json

• **json**? : *undefined | false | true*

*Inherited from [OptionsBase](README.md#optionsbase).[json](README.md#optional-json)*

*Defined in [src/lib/adaptors/json-yaml/types.ts:46](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L46)*

Whether the adaptor should process JSON files

### `Optional` locale

• **locale**? : *undefined | string*

*Inherited from [OptionsBase](README.md#optionsbase).[locale](README.md#optional-locale)*

*Defined in [src/lib/adaptors/json-yaml/types.ts:65](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L65)*

Option to scope parsed data as belonging to a particular locale:
```js
{
  en: { // <-- this
    some: "message"
  }
}
```
If `locale` is not provided, locale is inferred as the topmost keys of
the parsed data object(s)

If `locale` is string, the string is used as the locale name.

If `locale` is function, it is given data and options and is expected to
return a string (or undefined).

### `Optional` localeGeneral

• **localeGeneral**? : *undefined | string*

*Inherited from [ResolveItemsOptions](README.md#resolveitemsoptions).[localeGeneral](README.md#optional-localegeneral)*

*Defined in [src/lib/content-group.ts:27](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L27)*

String used to indicate that the definitions grouped under this string
are not limited to a single locale.

### `Optional` matchByContent

• **matchByContent**? : *boolean | "strict"*

*Inherited from [ResolveItemsOptions](README.md#resolveitemsoptions).[matchByContent](README.md#optional-matchbycontent)*

*Defined in [src/lib/content-group.ts:15](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L15)*

### `Optional` matchByIndex

• **matchByIndex**? : *boolean | "strict"*

*Inherited from [ResolveItemsOptions](README.md#resolveitemsoptions).[matchByIndex](README.md#optional-matchbyindex)*

*Defined in [src/lib/content-group.ts:14](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L14)*

### `Optional` merge

• **merge**? : *undefined | false | true*

*Inherited from [ToObjectOptions](README.md#toobjectoptions).[merge](README.md#optional-merge)*

*Defined in [src/lib/item/types-abstract.ts:299](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L299)*

### `Optional` missingValue

• **missingValue**? : *any*

*Inherited from [ItemsByLocaleOptions](README.md#itemsbylocaleoptions).[missingValue](README.md#optional-missingvalue)*

*Overrides [ItemsByLocaleOptions](README.md#itemsbylocaleoptions).[missingValue](README.md#optional-missingvalue)*

*Defined in [src/lib/item/types-abstract.ts:271](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L271)*

The value that indicates a missing value.

By default, missing value is `null`.

### `Optional` mkdirOptions

• **mkdirOptions**? : *Extract‹Parameters<typeof mkdirSync>[1], object›*

*Inherited from [ISafeWriteOptions](interfaces/isafewriteoptions.md).[mkdirOptions](interfaces/isafewriteoptions.md#optional-mkdiroptions)*

*Defined in [src/lib/util/fs.ts:37](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/fs.ts#L37)*

Options object passed to fs.mkdirSync when `createDir` is `true`.

Defaults to `true`

### `Optional` pathFormatter

• **pathFormatter**? : *[PathFormatter](README.md#pathformatter)*

*Defined in [src/lib/adaptors/json-yaml/types.ts:89](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L89)*

### `Optional` query

• **query**? : *undefined | function*

*Inherited from [ResolveItemsOptions](README.md#resolveitemsoptions).[query](README.md#optional-query)*

*Defined in [src/lib/content-group.ts:18](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L18)*

### `Optional` removeDirOnError

• **removeDirOnError**? : *undefined | false | true*

*Inherited from [ISafeWriteOptions](interfaces/isafewriteoptions.md).[removeDirOnError](interfaces/isafewriteoptions.md#optional-removedironerror)*

*Defined in [src/lib/util/fs.ts:31](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/fs.ts#L31)*

Whether directories created by the `createDir` option should be removed
when the process throws.

### `Optional` restoreOnError

• **restoreOnError**? : *undefined | false | true*

*Inherited from [ISafeWriteOptions](interfaces/isafewriteoptions.md).[restoreOnError](interfaces/isafewriteoptions.md#optional-restoreonerror)*

*Defined in [src/lib/util/fs.ts:19](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/fs.ts#L19)*

Whether the changes done to files should be undone if the process throws

Defaults to `true`

### `Optional` serializerOptions

• **serializerOptions**? : *[SerializerOptions](README.md#serializeroptions)*

*Defined in [src/lib/adaptors/json-yaml/types.ts:93](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L93)*

Options object passed to serializers

### `Optional` simple

• **simple**? : *undefined | false | true*

*Inherited from [ToObjectOptions](README.md#toobjectoptions).[simple](README.md#optional-simple)*

*Defined in [src/lib/item/types-abstract.ts:298](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L298)*

### `Optional` strategy

• **strategy**? : *"add" | "locale" | "localeStrict" | "general"*

*Inherited from [ResolveItemsOptions](README.md#resolveitemsoptions).[strategy](README.md#optional-strategy)*

*Defined in [src/lib/content-group.ts:13](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L13)*

### `Optional` template

• **template**? : *[AnyObj](README.md#anyobj)*

*Inherited from [ToObjectOptions](README.md#toobjectoptions).[template](README.md#optional-template)*

*Defined in [src/lib/item/types-abstract.ts:297](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L297)*

### `Optional` throwOnDuplicate

• **throwOnDuplicate**? : *undefined | false | true*

*Inherited from [ToObjectOptions](README.md#toobjectoptions).[throwOnDuplicate](README.md#optional-throwonduplicate)*

*Defined in [src/lib/item/types-abstract.ts:300](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L300)*

### `Optional` writeFileOptions

• **writeFileOptions**? : *Extract‹Parameters<typeof writeFileSync>[2], object›*

*Defined in [src/lib/adaptors/json-yaml/types.ts:97](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L97)*

Options object passed to fs.writeFile.

### `Optional` yaml

• **yaml**? : *undefined | false | true*

*Inherited from [OptionsBase](README.md#optionsbase).[yaml](README.md#optional-yaml)*

*Defined in [src/lib/adaptors/json-yaml/types.ts:42](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L42)*

Whether the adaptor should process YAML files

###  Deserializer

Ƭ **Deserializer**: *typeof parse | typeof safeLoad*

*Defined in [src/lib/adaptors/json-yaml/types.ts:32](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L32)*

###  DeserializerOptions

Ƭ **DeserializerOptions**: *Parameters<Deserializer>[1]*

*Defined in [src/lib/adaptors/json-yaml/types.ts:33](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L33)*

###  Options

Ƭ **Options**: *[ParserOptions](README.md#parseroptions) & [WriterOptions](README.md#writeroptions) & [RemoverOptions](README.md#removeroptions)*

*Defined in [src/lib/adaptors/json-yaml/types.ts:118](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L118)*

Common options object passed to all methods

###  Serializer

Ƭ **Serializer**: *typeof stringify | typeof safeDump*

*Defined in [src/lib/adaptors/json-yaml/types.ts:35](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L35)*

###  SerializerOptions

Ƭ **SerializerOptions**: *Parameters<Serializer>[1]*

*Defined in [src/lib/adaptors/json-yaml/types.ts:36](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/types.ts#L36)*

___

###  IAdaptorVue

• **IAdaptorVue**:

*Defined in [src/lib/adaptors/vue/index.ts:29](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L29)*

###  LoadBlockOptions

• **LoadBlockOptions**:

*Defined in [src/lib/adaptors/vue/index.ts:30](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L30)*

### `Optional` filepath

• **filepath**? : *undefined | string*

*Defined in [src/lib/adaptors/vue/index.ts:31](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L31)*

###  ReadBlocksOptions

• **ReadBlocksOptions**:

*Defined in [src/lib/adaptors/vue/index.ts:34](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L34)*

### `Optional` invalidPathOk

• **invalidPathOk**? : *undefined | false | true*

*Defined in [src/lib/adaptors/vue/index.ts:35](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L35)*

###  WriteOptionsBase

• **WriteOptionsBase**:

*Defined in [src/lib/adaptors/vue/index.ts:38](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L38)*

### `Optional` abortOnError

• **abortOnError**? : *undefined | false | true*

*Defined in [src/lib/adaptors/vue/index.ts:39](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L39)*

### `Optional` contentFormatter

• **contentFormatter**? : *[ContentFormatter](README.md#contentformatter)*

*Defined in [src/lib/adaptors/vue/index.ts:40](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L40)*

###  Parser

Ƭ **Parser**: *[Parser](README.md#parser)‹[ParserOptions](README.md#parseroptions)›*

*Defined in [src/lib/adaptors/vue/index.ts:44](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L44)*

###  ParserOptions

Ƭ **ParserOptions**: *[ItemsByLocaleOptions](README.md#itemsbylocaleoptions) & [ReadBlocksOptions](README.md#readblocksoptions)*

*Defined in [src/lib/adaptors/vue/index.ts:43](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L43)*

###  ParserParams

Ƭ **ParserParams**: *Parameters‹[Parser](README.md#parser)›*

*Defined in [src/lib/adaptors/vue/index.ts:45](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L45)*

###  ParserReturn

Ƭ **ParserReturn**: *ReturnType‹[Parser](README.md#parser)›*

*Defined in [src/lib/adaptors/vue/index.ts:46](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L46)*

###  Remover

Ƭ **Remover**: *[Remover](README.md#remover)‹[RemoverOptions](README.md#removeroptions)›*

*Defined in [src/lib/adaptors/vue/index.ts:82](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L82)*

###  RemoverOptions

Ƭ **RemoverOptions**: *[ISafeWriteOptions](interfaces/isafewriteoptions.md) & [WriteOptionsBase](README.md#writeoptionsbase)*

*Defined in [src/lib/adaptors/vue/index.ts:81](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L81)*

###  RemoverParams

Ƭ **RemoverParams**: *Parameters‹[Remover](README.md#remover)›*

*Defined in [src/lib/adaptors/vue/index.ts:83](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L83)*

###  RemoverReturn

Ƭ **RemoverReturn**: *ReturnType‹[Remover](README.md#remover)›*

*Defined in [src/lib/adaptors/vue/index.ts:84](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L84)*

###  UsageAnalyzer

Ƭ **UsageAnalyzer**: *[UsageAnalyzer](README.md#usageanalyzer)‹[UsageAnalyzerOptions](README.md#usageanalyzeroptions)›*

*Defined in [src/lib/adaptors/vue/index.ts:49](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L49)*

###  UsageAnalyzerOptions

Ƭ **UsageAnalyzerOptions**: *object*

*Defined in [src/lib/adaptors/vue/index.ts:48](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L48)*

#### Type declaration:

###  UsageAnalyzerParams

Ƭ **UsageAnalyzerParams**: *Parameters‹[UsageAnalyzer](README.md#usageanalyzer)›*

*Defined in [src/lib/adaptors/vue/index.ts:50](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L50)*

###  UsageAnalyzerReturn

Ƭ **UsageAnalyzerReturn**: *ReturnType‹[UsageAnalyzer](README.md#usageanalyzer)›*

*Defined in [src/lib/adaptors/vue/index.ts:51](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L51)*

###  WriteOptions

Ƭ **WriteOptions**: *[WriteOptionsBase](README.md#writeoptionsbase) & [ItemsByLocaleOptions](README.md#itemsbylocaleoptions) & [ISafeWriteOptions](interfaces/isafewriteoptions.md) & Pick‹[ResolveItemsOptions](README.md#resolveitemsoptions), "localeGeneral"› & [ResolveItemsOptions](README.md#resolveitemsoptions) & object*

*Defined in [src/lib/adaptors/vue/index.ts:53](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L53)*

###  Writer

Ƭ **Writer**: *[Writer](README.md#writer)‹[WriteOptions](README.md#writeoptions)›*

*Defined in [src/lib/adaptors/vue/index.ts:77](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L77)*

###  WriterParams

Ƭ **WriterParams**: *Parameters‹[Writer](README.md#writer)›*

*Defined in [src/lib/adaptors/vue/index.ts:78](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L78)*

###  WriterReturn

Ƭ **WriterReturn**: *ReturnType‹[Writer](README.md#writer)›*

*Defined in [src/lib/adaptors/vue/index.ts:79](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/index.ts#L79)*

___

###  ICollection

• **ICollection**:

*Defined in [src/lib/collection/types.ts:19](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L19)*

### `Abstract` Collection

• **Collection**:

*Defined in [src/lib/collection/types.ts:66](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L66)*

###  collection

• **collection**: *[ItemMap](README.md#itemmap)* = new Map()

*Inherited from [Collection](README.md#abstract-collection).[collection](README.md#collection)*

*Defined in [src/lib/collection/types-abstract.ts:78](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L78)*

###  add

▸ **add**(`options`: [SetOptions](README.md#setoptions)): *void*

*Inherited from [Collection](README.md#abstract-collection).[add](README.md#add)*

*Defined in [src/lib/collection/types-abstract.ts:99](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L99)*

Add an item to the collection.

Throws if an item with the same name is already in the collection.

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SetOptions](README.md#setoptions) |

**Returns:** *void*

###  delete

▸ **delete**(`name`: [Name](README.md#name)): *void*

*Inherited from [Collection](README.md#abstract-collection).[delete](README.md#delete)*

*Defined in [src/lib/collection/types-abstract.ts:107](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L107)*

Remove an item from the collection.

Throws if no item with the name exists in the collection.

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |

**Returns:** *void*

###  get

▸ **get**(`name`: [Name](README.md#name)): *undefined | [Item](README.md#item)*

*Inherited from [Collection](README.md#abstract-collection).[get](README.md#get)*

*Defined in [src/lib/collection/types-abstract.ts:85](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L85)*

Get a collection item by it's name.

Returns undefined if no item matched.

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |

**Returns:** *undefined | [Item](README.md#item)*

###  groupByResolve

▸ **groupByResolve**<**T**>(`queries`: T[], `iteratee?`: undefined | function): *[Map](classes/arraymap.md#static-map)‹undefined | [NamedItem](README.md#nameditem), T[]›*

*Inherited from [Collection](README.md#abstract-collection).[groupByResolve](README.md#groupbyresolve)*

*Defined in [src/lib/collection/types-abstract.ts:124](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L124)*

Group list of queries by items in collection whose patterns matched the
query.

Unmatched items are grouped under `undefined` key.

**Type parameters:**

▪ **T**: *any*

**Parameters:**

Name | Type |
------ | ------ |
`queries` | T[] |
`iteratee?` | undefined &#124; function |

**Returns:** *[Map](classes/arraymap.md#static-map)‹undefined | [NamedItem](README.md#nameditem), T[]›*

###  has

▸ **has**(`name`: [Name](README.md#name)): *boolean*

*Inherited from [Collection](README.md#abstract-collection).[has](README.md#has)*

*Defined in [src/lib/collection/types-abstract.ts:91](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L91)*

Check if a collection has an item by it's name.

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |

**Returns:** *boolean*

###  resolve

▸ **resolve**(`query`: string): *undefined | [NamedItem](README.md#nameditem)*

*Inherited from [Collection](README.md#abstract-collection).[resolve](README.md#resolve)*

*Defined in [src/lib/collection/types-abstract.ts:115](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L115)*

Find an item in collection whose pattern matches the query.

Returns undefined if no item matched.

**Parameters:**

Name | Type |
------ | ------ |
`query` | string |

**Returns:** *undefined | [NamedItem](README.md#nameditem)*

###  validate

▸ **validate**(`name`: [Name](README.md#name), `prop`: string): *void*

*Inherited from [Collection](README.md#abstract-collection).[validate](README.md#validate)*

*Defined in [src/lib/collection/types-abstract.ts:130](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L130)*

Validate that a particular item in collection has a specific property.

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |
`prop` | string |

**Returns:** *void*

###  Arg

Ƭ **Arg**: *[Arg](README.md#arg)*

*Defined in [src/lib/collection/types.ts:34](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L34)*

Item format passed to Collection constructor that will be
translated to CollectionItem object

###  Class

Ƭ **Class**: *[Class](README.md#class)*

*Defined in [src/lib/collection/types.ts:54](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L54)*

Collection class type with contructor

###  Ctor

Ƭ **Ctor**: *[Ctor](README.md#ctor)*

*Defined in [src/lib/collection/types.ts:49](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L49)*

Constructor

###  CtorOptions

Ƭ **CtorOptions**: *[CtorOptions](README.md#ctoroptions)*

*Defined in [src/lib/collection/types.ts:44](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L44)*

Constructor options object

###  Item

Ƭ **Item**: *[Item](README.md#item)*

*Defined in [src/lib/collection/types.ts:28](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L28)*

Interface of a single entry.

###  ItemMap

Ƭ **ItemMap**: *[ItemMap](README.md#itemmap)*

*Defined in [src/lib/collection/types.ts:39](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L39)*

Mapping of name to Item

###  Name

Ƭ **Name**: *[Name](README.md#name)*

*Defined in [src/lib/collection/types.ts:23](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L23)*

Type used as name

###  NamedItem

Ƭ **NamedItem**: *[NamedItem](README.md#nameditem)*

*Defined in [src/lib/collection/types.ts:64](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L64)*

Extension of Item which also contains name property

###  SetOptions

Ƭ **SetOptions**: *[SetOptions](README.md#setoptions)*

*Defined in [src/lib/collection/types.ts:59](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L59)*

Options passed to Set and Add methods

___

###  IContentBlock

• **IContentBlock**:

*Defined in [src/lib/content-block.ts:8](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L8)*

###  ContentBlock

• **ContentBlock**:

*Defined in [src/lib/content-block.ts:9](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L9)*

###  attributes

• **attributes**: *[AnyObj](README.md#anyobj)‹string›*

*Defined in [src/lib/content-block.ts:22](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L22)*

Blocks's attributes

###  content

• **content**: *string*

*Defined in [src/lib/content-block.ts:18](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L18)*

Blocks's content

### `Optional` filepath

• **filepath**? : *undefined | string*

*Defined in [src/lib/content-block.ts:27](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L27)*

Path to the file from where the block originates. It is used for
resolving linked content with relative path.

###  virtualContent

• **virtualContent**: *any*

*Defined in [src/lib/content-block.ts:14](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L14)*

Some representation of the content (e.g. deserialized content), used to
avoid the need of constant de-/serialization.

###  getVirtualContent

▸ **getVirtualContent**(): *any | Promise‹any›*

*Defined in [src/lib/content-block.ts:40](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L40)*

Get loaded representation of the content stored by the instance, or
initialize it if doesn't exist yet.

**Returns:** *any | Promise‹any›*

###  remove

▸ **remove**(`group`: [ContentGroup](classes/contentgroup.md)): *void | Promise‹void›*

*Defined in [src/lib/content-block.ts:44](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L44)*

Remove the block from a group

**Parameters:**

Name | Type |
------ | ------ |
`group` | [ContentGroup](classes/contentgroup.md) |

**Returns:** *void | Promise‹void›*

###  removeAttribute

▸ **removeAttribute**(`key`: string): *void | Promise‹void›*

*Defined in [src/lib/content-block.ts:35](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L35)*

Remove single attribute.

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *void | Promise‹void›*

###  serializeItems

▸ **serializeItems**(`definitions`: [Item](README.md#item)[], `opts?`: [ItemsByLocaleOptions](README.md#itemsbylocaleoptions)): *string | Promise‹string›*

*Defined in [src/lib/content-block.ts:49](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L49)*

Serializes a list of DefinitionItems into a string based on the the block's
attributes.

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [Item](README.md#item)[] |
`opts?` | [ItemsByLocaleOptions](README.md#itemsbylocaleoptions) |

**Returns:** *string | Promise‹string›*

###  setAttribute

▸ **setAttribute**(`key`: string, `value`: string): *void | Promise‹void›*

*Defined in [src/lib/content-block.ts:31](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L31)*

Set single attribute.

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | string |

**Returns:** *void | Promise‹void›*

###  CtorOptions

• **CtorOptions**:

*Defined in [src/lib/content-block.ts:55](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L55)*

### `Optional` attributes

• **attributes**? : *[AnyObj](README.md#anyobj)*

*Defined in [src/lib/content-block.ts:59](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L59)*

Block's attributes.

### `Optional` content

• **content**? : *undefined | string*

*Defined in [src/lib/content-block.ts:63](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L63)*

Block's content.

### `Optional` filepath

• **filepath**? : *undefined | string*

*Defined in [src/lib/content-block.ts:71](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L71)*

Path to the file from where the block originates.

### `Optional` serializers

• **serializers**? : *[Collection](README.md#abstract-collection)*

*Defined in [src/lib/content-block.ts:67](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-block.ts#L67)*

Collection instance with serializers to de-/serialize content

___

###  IContentFormatter

• **IContentFormatter**:

*Defined in [src/lib/content-formatter.ts:1](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-formatter.ts#L1)*

###  ContentFormatter

• **ContentFormatter**:

*Defined in [src/lib/content-formatter.ts:2](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-formatter.ts#L2)*

###  afterBlock

• **afterBlock**: *string*

*Defined in [src/lib/content-formatter.ts:7](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-formatter.ts#L7)*

###  afterContent

• **afterContent**: *string*

*Defined in [src/lib/content-formatter.ts:4](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-formatter.ts#L4)*

###  afterGroup

• **afterGroup**: *string*

*Defined in [src/lib/content-formatter.ts:9](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-formatter.ts#L9)*

###  beforeBlock

• **beforeBlock**: *string*

*Defined in [src/lib/content-formatter.ts:6](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-formatter.ts#L6)*

###  beforeContent

• **beforeContent**: *string*

*Defined in [src/lib/content-formatter.ts:3](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-formatter.ts#L3)*

###  beforeGroup

• **beforeGroup**: *string*

*Defined in [src/lib/content-formatter.ts:8](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-formatter.ts#L8)*

###  emptyContent

• **emptyContent**: *string*

*Defined in [src/lib/content-formatter.ts:5](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-formatter.ts#L5)*

###  formatBlock

• **formatBlock**: *function*

*Defined in [src/lib/content-formatter.ts:21](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-formatter.ts#L21)*

Formats serialized content of ContentBlock including any additional
formatting applied by ContentGroup.

Used when joining multiple ContentBlocks of ContentGroup.

#### Type declaration:

▸ (`block`: string): *string | Promise‹string›*

**Parameters:**

Name | Type |
------ | ------ |
`block` | string |

###  formatContent

• **formatContent**: *function*

*Defined in [src/lib/content-formatter.ts:13](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-formatter.ts#L13)*

Formats serialized content of ContentBlock.

#### Type declaration:

▸ (`block`: string): *string | Promise‹string›*

**Parameters:**

Name | Type |
------ | ------ |
`block` | string |

###  formatGroup

• **formatGroup**: *function*

*Defined in [src/lib/content-formatter.ts:26](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-formatter.ts#L26)*

Formats serialized content of ContentGroup.

#### Type declaration:

▸ (`content`: string): *string | Promise‹string›*

**Parameters:**

Name | Type |
------ | ------ |
`content` | string |

###  CtorOptions

• **CtorOptions**:

*Defined in [src/lib/content-formatter.ts:29](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-formatter.ts#L29)*

### `Optional` afterBlock

• **afterBlock**? : *undefined | string*

*Defined in [src/lib/content-formatter.ts:34](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-formatter.ts#L34)*

### `Optional` afterContent

• **afterContent**? : *undefined | string*

*Defined in [src/lib/content-formatter.ts:31](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-formatter.ts#L31)*

### `Optional` afterGroup

• **afterGroup**? : *undefined | string*

*Defined in [src/lib/content-formatter.ts:36](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-formatter.ts#L36)*

### `Optional` beforeBlock

• **beforeBlock**? : *undefined | string*

*Defined in [src/lib/content-formatter.ts:33](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-formatter.ts#L33)*

### `Optional` beforeContent

• **beforeContent**? : *undefined | string*

*Defined in [src/lib/content-formatter.ts:30](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-formatter.ts#L30)*

### `Optional` beforeGroup

• **beforeGroup**? : *undefined | string*

*Defined in [src/lib/content-formatter.ts:35](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-formatter.ts#L35)*

### `Optional` emptyContent

• **emptyContent**? : *undefined | string*

*Defined in [src/lib/content-formatter.ts:32](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-formatter.ts#L32)*

___

###  IContentGroup

• **IContentGroup**:

*Defined in [src/lib/content-group.ts:11](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L11)*

###  ContentGroup

• **ContentGroup**:

*Defined in [src/lib/content-group.ts:34](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L34)*

###  blocks

• **blocks**: *[ContentBlock](README.md#contentblock)[]*

*Defined in [src/lib/content-group.ts:38](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L38)*

List of parts of the content that make up the content group.

###  content

• **content**: *string*

*Defined in [src/lib/content-group.ts:48](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L48)*

### `Optional` filepath

• **filepath**? : *undefined | string*

*Defined in [src/lib/content-group.ts:47](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L47)*

Path to the file from where the content originates. This string
is passed to all blocks.

###  insert

• **insert**: *function*

*Defined in [src/lib/content-group.ts:50](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L50)*

#### Type declaration:

▸ (`block`: [ContentBlock](README.md#contentblock), `options`: object): *[ContentBlock](README.md#contentblock) | Promise‹[ContentBlock](README.md#contentblock)›*

**Parameters:**

▪ **block**: *[ContentBlock](README.md#contentblock)*

▪ **options**: *object*

Name | Type |
------ | ------ |
`position?` | "prepend" &#124; "append" |

###  length

• **length**: *number*

*Defined in [src/lib/content-group.ts:49](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L49)*

###  remove

• **remove**: *function*

*Defined in [src/lib/content-group.ts:54](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L54)*

#### Type declaration:

▸ (`block`: [ContentBlock](README.md#contentblock)): *[ContentBlock](README.md#contentblock) | undefined | Promise‹[ContentBlock](README.md#contentblock) | undefined›*

**Parameters:**

Name | Type |
------ | ------ |
`block` | [ContentBlock](README.md#contentblock) |

###  resolveItems

• **resolveItems**: *function*

*Defined in [src/lib/content-group.ts:60](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L60)*

#### Type declaration:

▸ (`definitions`: [Item](README.md#item)[], `options`: [ResolveItemsOptions](README.md#resolveitemsoptions)): *object | Promise‹object›*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [Item](README.md#item)[] |
`options` | [ResolveItemsOptions](README.md#resolveitemsoptions) |

### `Optional` serializers

• **serializers**? : *[Collection](README.md#abstract-collection)*

*Defined in [src/lib/content-group.ts:42](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L42)*

Collection instance with serializers to be used instead of the default

###  CtorOptions

• **CtorOptions**:

*Defined in [src/lib/content-group.ts:76](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L76)*

### `Optional` filepath

• **filepath**? : *undefined | string*

*Defined in [src/lib/content-group.ts:85](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L85)*

Path to the file from where the content originates. This string
is passed to all blocks.

### `Optional` serializers

• **serializers**? : *[Collection](README.md#abstract-collection)*

*Defined in [src/lib/content-group.ts:80](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L80)*

Collection instance with serializers to be used instead of the default

###  InsertOptions

• **InsertOptions**:

*Defined in [src/lib/content-group.ts:30](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L30)*

###  position

• **position**: *"prepend" | "append"*

*Defined in [src/lib/content-group.ts:31](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L31)*

###  ResolveItemsOptions

• **ResolveItemsOptions**:

*Defined in [src/lib/content-group.ts:12](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L12)*

### `Optional` addPosition

• **addPosition**? : *"prepend" | "append"*

*Defined in [src/lib/content-group.ts:16](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L16)*

### `Optional` addType

• **addType**? : *"general" | "locale" | "custom"*

*Defined in [src/lib/content-group.ts:17](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L17)*

### `Optional` localeGeneral

• **localeGeneral**? : *undefined | string*

*Defined in [src/lib/content-group.ts:27](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L27)*

String used to indicate that the definitions grouped under this string
are not limited to a single locale.

### `Optional` matchByContent

• **matchByContent**? : *boolean | "strict"*

*Defined in [src/lib/content-group.ts:15](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L15)*

### `Optional` matchByIndex

• **matchByIndex**? : *boolean | "strict"*

*Defined in [src/lib/content-group.ts:14](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L14)*

### `Optional` query

• **query**? : *undefined | function*

*Defined in [src/lib/content-group.ts:18](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L18)*

### `Optional` strategy

• **strategy**? : *"add" | "locale" | "localeStrict" | "general"*

*Defined in [src/lib/content-group.ts:13](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/content-group.ts#L13)*

___

###  IDefinition

• **IDefinition**:

*Defined in [src/lib/definition/types.ts:17](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/types.ts#L17)*

###  CtorOptions

• **CtorOptions**:

*Defined in [src/lib/definition/types.ts:18](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/types.ts#L18)*

###  path

• **path**: *[IPath](README.md#ipath)*

*Overrides [CtorOptions](README.md#ctoroptions).[path](README.md#path)*

*Defined in [src/lib/definition/types.ts:21](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/types.ts#L21)*

### `Optional` sourceScope

• **sourceScope**? : *"general" | "locale"*

*Inherited from [CtorOptions](README.md#ctoroptions).[sourceScope](README.md#optional-sourcescope)*

*Defined in [src/lib/definition/types-abstract.ts:17](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/types-abstract.ts#L17)*

###  Item

Ƭ **Item**: *[Item](README.md#item)*

*Defined in [src/lib/definition/types.ts:24](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/types.ts#L24)*

###  ItemArray

Ƭ **ItemArray**: *[ItemArray](README.md#itemarray)*

*Defined in [src/lib/definition/types.ts:26](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/types.ts#L26)*

###  ItemArrayLike

Ƭ **ItemArrayLike**: *[ItemArrayLike](README.md#itemarraylike)*

*Defined in [src/lib/definition/types.ts:30](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/types.ts#L30)*

###  ItemList

Ƭ **ItemList**: *[ItemList](README.md#itemlist)*

*Defined in [src/lib/definition/types.ts:28](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/definition/types.ts#L28)*

___

###  IMethodCollection

• **IMethodCollection**:

*Defined in [src/lib/collection/types.ts:75](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L75)*

Subtype of `ICollection` which holds groups of functions.

Requires entries to contain `methods` property and optional `options`
object with options can be passed to the stored functions.

### `Abstract` Collection

• **Collection**:

*Defined in [src/lib/collection/types.ts:137](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L137)*

Subtype of `ICollection.Collection` which holds groups of functions.

Requires entries to contain `methods` property and optional `options`
object with options can be passed to the stored functions.

###  collection

• **collection**: *[ItemMap](README.md#itemmap)* = new Map()

*Inherited from [Collection](README.md#abstract-collection).[collection](README.md#collection)*

*Overrides [Collection](README.md#abstract-collection).[collection](README.md#collection)*

*Defined in [src/lib/collection/types-abstract.ts:224](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L224)*

###  add

▸ **add**(`options`: [SetOptions](README.md#setoptions)): *void*

*Inherited from [Collection](README.md#abstract-collection).[add](README.md#add)*

*Overrides [Collection](README.md#abstract-collection).[add](README.md#add)*

*Defined in [src/lib/collection/types-abstract.ts:228](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L228)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SetOptions](README.md#setoptions) |

**Returns:** *void*

###  delete

▸ **delete**(`name`: [Name](README.md#name)): *void*

*Inherited from [Collection](README.md#abstract-collection).[delete](README.md#delete)*

*Defined in [src/lib/collection/types-abstract.ts:107](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L107)*

Remove an item from the collection.

Throws if no item with the name exists in the collection.

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |

**Returns:** *void*

###  get

▸ **get**(`name`: [Name](README.md#name)): *undefined | [ItemBase](README.md#itembase) & [Item](README.md#item)*

*Inherited from [Collection](README.md#abstract-collection).[get](README.md#get)*

*Overrides [Collection](README.md#abstract-collection).[get](README.md#get)*

*Defined in [src/lib/collection/types-abstract.ts:225](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L225)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |

**Returns:** *undefined | [ItemBase](README.md#itembase) & [Item](README.md#item)*

###  getOption

▸ **getOption**(`name`: [Name](README.md#name), `optionKey`: string): *any*

*Inherited from [Collection](README.md#abstract-collection).[getOption](README.md#getoption)*

*Defined in [src/lib/collection/types-abstract.ts:240](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L240)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |
`optionKey` | string |

**Returns:** *any*

###  groupByResolve

▸ **groupByResolve**<**T**>(`queries`: T[], `iteratee?`: undefined | function): *[Map](classes/arraymap.md#static-map)‹undefined | [NamedItem](README.md#nameditem)‹›, T[]›*

*Inherited from [Collection](README.md#abstract-collection).[groupByResolve](README.md#groupbyresolve)*

*Overrides [Collection](README.md#abstract-collection).[groupByResolve](README.md#groupbyresolve)*

*Defined in [src/lib/collection/types-abstract.ts:234](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L234)*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

Name | Type |
------ | ------ |
`queries` | T[] |
`iteratee?` | undefined &#124; function |

**Returns:** *[Map](classes/arraymap.md#static-map)‹undefined | [NamedItem](README.md#nameditem)‹›, T[]›*

###  has

▸ **has**(`name`: [Name](README.md#name)): *boolean*

*Inherited from [Collection](README.md#abstract-collection).[has](README.md#has)*

*Defined in [src/lib/collection/types-abstract.ts:91](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L91)*

Check if a collection has an item by it's name.

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |

**Returns:** *boolean*

###  options

▸ **options**(`name`: [Name](README.md#name)): *object*

*Inherited from [Collection](README.md#abstract-collection).[options](README.md#options)*

*Defined in [src/lib/collection/types-abstract.ts:237](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L237)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |

**Returns:** *object*

* \[ **key**: *number*\]: V

###  resolve

▸ **resolve**(`query`: string): *undefined | [NamedItem](README.md#nameditem)‹›*

*Inherited from [Collection](README.md#abstract-collection).[resolve](README.md#resolve)*

*Overrides [Collection](README.md#abstract-collection).[resolve](README.md#resolve)*

*Defined in [src/lib/collection/types-abstract.ts:231](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L231)*

**Parameters:**

Name | Type |
------ | ------ |
`query` | string |

**Returns:** *undefined | [NamedItem](README.md#nameditem)‹›*

###  setOption

▸ **setOption**(`name`: [Name](README.md#name), `optionKey`: string, `optionValue`: any): *void*

*Inherited from [Collection](README.md#abstract-collection).[setOption](README.md#setoption)*

*Defined in [src/lib/collection/types-abstract.ts:243](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L243)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |
`optionKey` | string |
`optionValue` | any |

**Returns:** *void*

###  validate

▸ **validate**(`name`: [Name](README.md#name), `prop`: string): *void*

*Inherited from [Collection](README.md#abstract-collection).[validate](README.md#validate)*

*Defined in [src/lib/collection/types-abstract.ts:130](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L130)*

Validate that a particular item in collection has a specific property.

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |
`prop` | string |

**Returns:** *void*

###  validateMethod

▸ **validateMethod**(`name`: [Name](README.md#name), `method`: keyof ItemMethods): *void*

*Inherited from [Collection](README.md#abstract-collection).[validateMethod](README.md#validatemethod)*

*Defined in [src/lib/collection/types-abstract.ts:246](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L246)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |
`method` | keyof ItemMethods |

**Returns:** *void*

###  Arg

Ƭ **Arg**: *[Arg](README.md#arg)*

*Defined in [src/lib/collection/types.ts:93](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L93)*

Item format passed to the constructor that will be
translated to Collection entry

###  BaseClass

Ƭ **BaseClass**: *[BaseClass](README.md#baseclass)*

*Defined in [src/lib/collection/types.ts:109](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L109)*

Type used to force types of IMethodCollection over the
ICollection.Collection class

###  Class

Ƭ **Class**: *[Class](README.md#class)*

*Defined in [src/lib/collection/types.ts:114](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L114)*

Collection class type with contructor

###  Ctor

Ƭ **Ctor**: *[Ctor](README.md#ctor)*

*Defined in [src/lib/collection/types.ts:103](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L103)*

Constructor

###  CtorOptions

Ƭ **CtorOptions**: *[CtorOptions](README.md#ctoroptions)*

*Defined in [src/lib/collection/types.ts:98](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L98)*

Constructor options object

###  Item

Ƭ **Item**: *[Item](README.md#item)*

*Defined in [src/lib/collection/types.ts:87](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L87)*

Single entry containing various methods and an options object which is
passed to the methods.

###  ItemBase

Ƭ **ItemBase**: *[ItemBase](README.md#itembase)*

*Defined in [src/lib/collection/types.ts:81](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L81)*

Item properties modified in IMethodCollection relative to ICollection

###  ItemMap

Ƭ **ItemMap**: *[ItemMap](README.md#itemmap)*

*Defined in [src/lib/collection/types.ts:129](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L129)*

Mapping of name to Item

###  ItemMethods

Ƭ **ItemMethods**: *[ItemMethods](README.md#itemmethods)*

*Defined in [src/lib/collection/types.ts:76](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L76)*

###  NamedItem

Ƭ **NamedItem**: *[NamedItem](README.md#nameditem)*

*Defined in [src/lib/collection/types.ts:124](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L124)*

Extension of Item which also contains name property

###  SetOptions

Ƭ **SetOptions**: *[SetOptions](README.md#setoptions)*

*Defined in [src/lib/collection/types.ts:119](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L119)*

Options passed to Set and Add methods

___

###  IPathFormatter

• **IPathFormatter**:

*Defined in [src/lib/path-formatter.ts:3](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/path-formatter.ts#L3)*

###  CtorOptions

• **CtorOptions**:

*Defined in [src/lib/path-formatter.ts:4](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/path-formatter.ts#L4)*

### `Optional` localePattern

• **localePattern**? : *RegExp*

*Defined in [src/lib/path-formatter.ts:5](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/path-formatter.ts#L5)*

###  PathFormatter

• **PathFormatter**:

*Defined in [src/lib/path-formatter.ts:8](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/path-formatter.ts#L8)*

###  changeLocale

• **changeLocale**: *function*

*Defined in [src/lib/path-formatter.ts:23](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/path-formatter.ts#L23)*

Replace locale while keeping the rest of the path.

#### Type declaration:

▸ (`p`: string, `newLocale`: string): *string | Promise‹string›*

**Parameters:**

Name | Type |
------ | ------ |
`p` | string |
`newLocale` | string |

###  changePath

• **changePath**: *function*

*Defined in [src/lib/path-formatter.ts:18](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/path-formatter.ts#L18)*

Replace path while keeping the locale.

#### Type declaration:

▸ (`p`: string, `newPath`: string): *string | Promise‹string›*

**Parameters:**

Name | Type |
------ | ------ |
`p` | string |
`newPath` | string |

###  localeFromPath

• **localeFromPath**: *function*

*Defined in [src/lib/path-formatter.ts:13](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/path-formatter.ts#L13)*

Detect locale from path

#### Type declaration:

▸ (`path`: string): *string | null | Promise‹string | null›*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

###  localePattern

• **localePattern**: *RegExp*

*Defined in [src/lib/path-formatter.ts:9](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/path-formatter.ts#L9)*

___

###  IResolver

• **IResolver**:

*Defined in [src/lib/resolver/types.ts:18](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L18)*

###  Key

• **Key**:

*Defined in [src/lib/resolver/types.ts:171](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L171)*

###  Glob

• **Glob**:

*Defined in [src/lib/resolver/types.ts:202](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L202)*

Key resolvers that returns keys that match glob patterns.

### `Abstract` Resolver

• **Resolver**:

*Defined in [src/lib/resolver/types.ts:220](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L220)*

Path resolver interface

###  logger

• **logger**: *function* = {} as (msg: string) => void

*Inherited from [ResolverBase](README.md#abstract-resolverbase).[logger](README.md#logger)*

*Defined in [src/lib/resolver/types.ts:29](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L29)*

#### Type declaration:

▸ (`msg`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string |

###  options

• **options**: *object* = {} as object

*Inherited from [ResolverBase](README.md#abstract-resolverbase).[options](README.md#options)*

*Defined in [src/lib/resolver/types.ts:27](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L27)*

###  resolve

• **resolve**: *function* = {} as (
          keys: string[],
          items: (AI_Item.Item & { path: any })[],
          options?: ResolveOptions,
        ) => string[][]

*Overrides [ResolverBase](README.md#abstract-resolverbase).[resolve](README.md#resolve)*

*Defined in [src/lib/resolver/types.ts:222](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L222)*

#### Type declaration:

▸ (`keys`: string[], `items`: [Item](README.md#item) & object[], `options?`: [ResolveOptions](README.md#resolveoptions)): *string[][]*

**Parameters:**

Name | Type |
------ | ------ |
`keys` | string[] |
`items` | [Item](README.md#item) & object[] |
`options?` | [ResolveOptions](README.md#resolveoptions) |

###  ResolveOptions

• **ResolveOptions**:

*Defined in [src/lib/resolver/types.ts:206](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L206)*

Options for `resolve` method

### `Optional` basename

• **basename**? : *undefined | false | true*

*Inherited from [ResolveOptions](README.md#resolveoptions).[basename](README.md#optional-basename)*

Defined in node_modules/@types/micromatch/index.d.ts:32

Allow glob patterns without slashes to match a file path based on its basename. Same behavior as [minimatch](https://github.com/isaacs/minimatch) option `matchBase`.

**`default`** false

**`example`** 
```js
mm(['a/b.js', 'a/c.md'], '*.js');
//=> []

mm(['a/b.js', 'a/c.md'], '*.js', {matchBase: true});
//=> ['a/b.js']
```

### `Optional` bash

• **bash**? : *undefined | false | true*

*Inherited from [ResolveOptions](README.md#resolveoptions).[bash](README.md#optional-bash)*

Defined in node_modules/@types/micromatch/index.d.ts:49

Enabled by default, this option enforces bash-like behavior with stars immediately following a bracket expression.
Bash bracket expressions are similar to regex character classes, but unlike regex, a star following a bracket expression **does not repeat the bracketed characters**.
Instead, the star is treated the same as an other star.

**`default`** true

**`example`** 
```js
var files = ['abc', 'ajz'];
console.log(mm(files, '[a-c]*'));
//=> ['abc', 'ajz']

console.log(mm(files, '[a-c]*', {bash: false}));
```

### `Optional` capture

• **capture**? : *undefined | false | true*

*Inherited from [ResolveOptions](README.md#resolveoptions).[capture](README.md#optional-capture)*

Defined in node_modules/@types/micromatch/index.d.ts:55

Return regex matches in supporting methods.

**`default`** undefined

### `Optional` contains

• **contains**? : *undefined | false | true*

*Inherited from [ResolveOptions](README.md#resolveoptions).[contains](README.md#optional-contains)*

Defined in node_modules/@types/micromatch/index.d.ts:61

Allows glob to match any part of the given string(s).

**`default`** undefined

### `Optional` cwd

• **cwd**? : *undefined | string*

*Inherited from [ResolveOptions](README.md#resolveoptions).[cwd](README.md#optional-cwd)*

Defined in node_modules/@types/micromatch/index.d.ts:67

Current working directory. Used by `picomatch.split()`

**`default`** process.cwd()

### `Optional` debug

• **debug**? : *undefined | false | true*

*Inherited from [ResolveOptions](README.md#resolveoptions).[debug](README.md#optional-debug)*

Defined in node_modules/@types/micromatch/index.d.ts:73

Debug regular expressions when an error is thrown.

**`default`** undefined

### `Optional` dot

• **dot**? : *undefined | false | true*

*Inherited from [ResolveOptions](README.md#resolveoptions).[dot](README.md#optional-dot)*

Defined in node_modules/@types/micromatch/index.d.ts:79

Match dotfiles. Otherwise dotfiles are ignored unless a `.` is explicitly defined in the pattern.

**`default`** false

### `Optional` expandRange

• **expandRange**? : *undefined | function*

*Inherited from [ResolveOptions](README.md#resolveoptions).[expandRange](README.md#optional-expandrange)*

Defined in node_modules/@types/micromatch/index.d.ts:87

Custom function for expanding ranges in brace patterns, such as `{a..z}`.
The function receives the range values as two arguments, and it must return a string to be used in the generated regex.
It's recommended that returned strings be wrapped in parentheses. This option is overridden by the expandBrace option.

**`default`** undefined

### `Optional` failglob

• **failglob**? : *undefined | false | true*

*Inherited from [ResolveOptions](README.md#resolveoptions).[failglob](README.md#optional-failglob)*

Defined in node_modules/@types/micromatch/index.d.ts:93

Similar to the `--failglob` behavior in Bash, throws an error when no matches are found.

**`default`** false

### `Optional` fastpaths

• **fastpaths**? : *undefined | false | true*

*Inherited from [ResolveOptions](README.md#resolveoptions).[fastpaths](README.md#optional-fastpaths)*

Defined in node_modules/@types/micromatch/index.d.ts:99

To speed up processing, full parsing is skipped for a handful common glob patterns. Disable this behavior by setting this option to false.

**`default`** true

### `Optional` flags

• **flags**? : *undefined | false | true*

*Inherited from [ResolveOptions](README.md#resolveoptions).[flags](README.md#optional-flags)*

Defined in node_modules/@types/micromatch/index.d.ts:105

Regex flags to use in the generated regex. If defined, the `nocase` option will be overridden.

**`default`** undefined

### `Optional` format

• **format**? : *undefined | function*

*Inherited from [ResolveOptions](README.md#resolveoptions).[format](README.md#optional-format)*

Defined in node_modules/@types/micromatch/index.d.ts:111

Custom function for formatting the returned string. This is useful for removing leading slashes, converting Windows paths to Posix paths, etc.

**`default`** undefined

### `Optional` ignore

• **ignore**? : *string | ReadonlyArray‹string›*

*Inherited from [ResolveOptions](README.md#resolveoptions).[ignore](README.md#optional-ignore)*

Defined in node_modules/@types/micromatch/index.d.ts:117

One or more glob patterns for excluding strings that should not be matched from the result.

**`default`** undefined

### `Optional` keepQuotes

• **keepQuotes**? : *undefined | false | true*

*Inherited from [ResolveOptions](README.md#resolveoptions).[keepQuotes](README.md#optional-keepquotes)*

Defined in node_modules/@types/micromatch/index.d.ts:123

Retain quotes in the generated regex, since quotes may also be used as an alternative to backslashes.

**`default`** false

### `Optional` literalBrackets

• **literalBrackets**? : *undefined | false | true*

*Inherited from [ResolveOptions](README.md#resolveoptions).[literalBrackets](README.md#optional-literalbrackets)*

Defined in node_modules/@types/micromatch/index.d.ts:129

When `true`, brackets in the glob pattern will be escaped so that only literal brackets will be matched.

**`default`** undefined

### `Optional` lookbehinds

• **lookbehinds**? : *undefined | false | true*

*Inherited from [ResolveOptions](README.md#resolveoptions).[lookbehinds](README.md#optional-lookbehinds)*

Defined in node_modules/@types/micromatch/index.d.ts:135

Support regex positive and negative lookbehinds. Note that you must be using Node 8.1.10 or higher to enable regex lookbehinds.

**`default`** true

### `Optional` matchBase

• **matchBase**? : *undefined | false | true*

*Inherited from [ResolveOptions](README.md#resolveoptions).[matchBase](README.md#optional-matchbase)*

Defined in node_modules/@types/micromatch/index.d.ts:141

Alias for `basename`.

**`default`** false

### `Optional` maxLength

• **maxLength**? : *undefined | number*

*Inherited from [ResolveOptions](README.md#resolveoptions).[maxLength](README.md#optional-maxlength)*

Defined in node_modules/@types/micromatch/index.d.ts:147

Limit the max length of the input string. An error is thrown if the input string is longer than this value.

**`default`** 65536

### `Optional` nobrace

• **nobrace**? : *undefined | false | true*

*Inherited from [ResolveOptions](README.md#resolveoptions).[nobrace](README.md#optional-nobrace)*

Defined in node_modules/@types/micromatch/index.d.ts:153

Disable brace matching, so that `{a,b}` and `{1..3}` would be treated as literal characters.

**`default`** false

### `Optional` nobracket

• **nobracket**? : *undefined | false | true*

*Inherited from [ResolveOptions](README.md#resolveoptions).[nobracket](README.md#optional-nobracket)*

Defined in node_modules/@types/micromatch/index.d.ts:159

Disable matching with regex brackets.

**`default`** undefined

### `Optional` nocase

• **nocase**? : *undefined | false | true*

*Inherited from [ResolveOptions](README.md#resolveoptions).[nocase](README.md#optional-nocase)*

Defined in node_modules/@types/micromatch/index.d.ts:166

Perform case-insensitive matching. Equivalent to the regex `i` flag.
Note that this option is ignored when the `flags` option is defined.

**`default`** false

### `Optional` noext

• **noext**? : *undefined | false | true*

*Inherited from [ResolveOptions](README.md#resolveoptions).[noext](README.md#optional-noext)*

Defined in node_modules/@types/micromatch/index.d.ts:172

Alias for `noextglob`

**`default`** false

### `Optional` noextglob

• **noextglob**? : *undefined | false | true*

*Inherited from [ResolveOptions](README.md#resolveoptions).[noextglob](README.md#optional-noextglob)*

Defined in node_modules/@types/micromatch/index.d.ts:178

Disable support for matching with extglobs (like `+(a|b)`)

**`default`** false

### `Optional` noglobstar

• **noglobstar**? : *undefined | false | true*

*Inherited from [ResolveOptions](README.md#resolveoptions).[noglobstar](README.md#optional-noglobstar)*

Defined in node_modules/@types/micromatch/index.d.ts:184

Disable matching with globstars (`**`).

**`default`** undefined

### `Optional` nonegate

• **nonegate**? : *undefined | false | true*

*Inherited from [ResolveOptions](README.md#resolveoptions).[nonegate](README.md#optional-nonegate)*

Defined in node_modules/@types/micromatch/index.d.ts:190

Disallow negation (`!`) patterns, and treat leading `!` as a literal character to match.

**`default`** undefined

### `Optional` noquantifiers

• **noquantifiers**? : *undefined | false | true*

*Inherited from [ResolveOptions](README.md#resolveoptions).[noquantifiers](README.md#optional-noquantifiers)*

Defined in node_modules/@types/micromatch/index.d.ts:196

Disable support for regex quantifiers (like `a{1,2}`) and treat them as brace patterns to be expanded.

**`default`** false

### `Optional` onIgnore

• **onIgnore**? : *undefined | function*

*Inherited from [ResolveOptions](README.md#resolveoptions).[onIgnore](README.md#optional-onignore)*

Defined in node_modules/@types/micromatch/index.d.ts:202

Function to be called on ignored items.

**`default`** undefined

### `Optional` onMatch

• **onMatch**? : *undefined | function*

*Inherited from [ResolveOptions](README.md#resolveoptions).[onMatch](README.md#optional-onmatch)*

Defined in node_modules/@types/micromatch/index.d.ts:208

Function to be called on matched items.

**`default`** undefined

### `Optional` onResult

• **onResult**? : *undefined | function*

*Inherited from [ResolveOptions](README.md#resolveoptions).[onResult](README.md#optional-onresult)*

Defined in node_modules/@types/micromatch/index.d.ts:214

Function to be called on all items, regardless of whether or not they are matched or ignored.

**`default`** undefined

### `Optional` posix

• **posix**? : *undefined | false | true*

*Inherited from [ResolveOptions](README.md#resolveoptions).[posix](README.md#optional-posix)*

Defined in node_modules/@types/micromatch/index.d.ts:220

Support POSIX character classes ("posix brackets").

**`default`** false

### `Optional` prepend

• **prepend**? : *undefined | false | true*

*Inherited from [ResolveOptions](README.md#resolveoptions).[prepend](README.md#optional-prepend)*

Defined in node_modules/@types/micromatch/index.d.ts:226

String to prepend to the generated regex used for matching.

**`default`** undefined

### `Optional` regex

• **regex**? : *undefined | false | true*

*Inherited from [ResolveOptions](README.md#resolveoptions).[regex](README.md#optional-regex)*

Defined in node_modules/@types/micromatch/index.d.ts:232

Use regular expression rules for `+` (instead of matching literal `+`), and for stars that follow closing parentheses or brackets (as in `)*` and `]*`).

**`default`** false

### `Optional` separator

• **separator**? : *undefined | string*

*Defined in [src/lib/resolver/types.ts:209](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L209)*

### `Optional` strictBrackets

• **strictBrackets**? : *undefined | false | true*

*Inherited from [ResolveOptions](README.md#resolveoptions).[strictBrackets](README.md#optional-strictbrackets)*

Defined in node_modules/@types/micromatch/index.d.ts:238

Throw an error if brackets, braces, or parens are imbalanced.

**`default`** undefined

### `Optional` strictSlashes

• **strictSlashes**? : *undefined | false | true*

*Inherited from [ResolveOptions](README.md#resolveoptions).[strictSlashes](README.md#optional-strictslashes)*

Defined in node_modules/@types/micromatch/index.d.ts:244

When true, picomatch won't match trailing slashes with single stars.

**`default`** undefined

### `Optional` unescape

• **unescape**? : *undefined | false | true*

*Inherited from [ResolveOptions](README.md#resolveoptions).[unescape](README.md#optional-unescape)*

Defined in node_modules/@types/micromatch/index.d.ts:261

Remove backslashes from returned matches.

**`default`** undefined

**`example`** 
In this example we want to match a literal `*`:

```js
mm.match(['abc', 'a\\*c'], 'a\\*c');
//=> ['a\\*c']

mm.match(['abc', 'a\\*c'], 'a\\*c', {unescape: true});
//=> ['a*c']
```

### `Optional` windows

• **windows**? : *undefined | false | true*

*Inherited from [ResolveOptions](README.md#resolveoptions).[windows](README.md#optional-windows)*

Defined in node_modules/@types/micromatch/index.d.ts:267

Convert all slashes in file paths to forward slashes. This does not convert slashes in the glob pattern itself

**`default`** undefined

###  CtorOptions

Ƭ **CtorOptions**: *[CtorOptions](README.md#ctoroptions) & [ResolveOptions](README.md#resolveoptions)*

*Defined in [src/lib/resolver/types.ts:215](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L215)*

Constructor options object

###  Null

• **Null**:

*Defined in [src/lib/resolver/types.ts:175](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L175)*

Key resolvers that returns keys unchanged.

### `Abstract` Resolver

• **Resolver**:

*Defined in [src/lib/resolver/types.ts:189](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L189)*

Path resolver interface

###  logger

• **logger**: *function* = {} as (msg: string) => void

*Inherited from [ResolverBase](README.md#abstract-resolverbase).[logger](README.md#logger)*

*Defined in [src/lib/resolver/types.ts:29](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L29)*

#### Type declaration:

▸ (`msg`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string |

###  options

• **options**: *object* = {} as object

*Inherited from [ResolverBase](README.md#abstract-resolverbase).[options](README.md#options)*

*Defined in [src/lib/resolver/types.ts:27](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L27)*

###  resolve

• **resolve**: *function* = {} as <T extends string[]>(
          keys: T[],
          items: (AI_Item.Item & { path: any })[],
          options?: ResolveOptions,
        ) => T[]

*Overrides [ResolverBase](README.md#abstract-resolverbase).[resolve](README.md#resolve)*

*Defined in [src/lib/resolver/types.ts:191](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L191)*

#### Type declaration:

▸ <**T**>(`keys`: T[], `items`: [Item](README.md#item) & object[], `options?`: [ResolveOptions](README.md#resolveoptions)): *T[]*

**Type parameters:**

▪ **T**: *string[]*

**Parameters:**

Name | Type |
------ | ------ |
`keys` | T[] |
`items` | [Item](README.md#item) & object[] |
`options?` | [ResolveOptions](README.md#resolveoptions) |

###  CtorOptions

Ƭ **CtorOptions**: *[CtorOptions](README.md#ctoroptions) & [ResolveOptions](README.md#resolveoptions)*

*Defined in [src/lib/resolver/types.ts:184](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L184)*

Constructor options object

###  ResolveOptions

Ƭ **ResolveOptions**: *[ResolveOptions](README.md#resolveoptions)*

*Defined in [src/lib/resolver/types.ts:179](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L179)*

Options for `resolve` method

###  Locale

• **Locale**:

*Defined in [src/lib/resolver/types.ts:115](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L115)*

###  Glob

• **Glob**:

*Defined in [src/lib/resolver/types.ts:146](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L146)*

Locale resolvers that returns locales that match glob patterns.

### `Abstract` Resolver

• **Resolver**:

*Defined in [src/lib/resolver/types.ts:160](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L160)*

Path resolver interface

###  logger

• **logger**: *function* = {} as (msg: string) => void

*Inherited from [ResolverBase](README.md#abstract-resolverbase).[logger](README.md#logger)*

*Defined in [src/lib/resolver/types.ts:29](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L29)*

#### Type declaration:

▸ (`msg`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string |

###  options

• **options**: *object* = {} as object

*Inherited from [ResolverBase](README.md#abstract-resolverbase).[options](README.md#options)*

*Defined in [src/lib/resolver/types.ts:27](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L27)*

###  resolve

• **resolve**: *function* = {} as (
          locales: string[],
          items: (any & { locale?: any })[],
          options?: ResolveOptions,
        ) => string[]

*Overrides [ResolverBase](README.md#abstract-resolverbase).[resolve](README.md#resolve)*

*Defined in [src/lib/resolver/types.ts:162](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L162)*

#### Type declaration:

▸ (`locales`: string[], `items`: any[], `options?`: [ResolveOptions](README.md#resolveoptions)): *string[]*

**Parameters:**

Name | Type |
------ | ------ |
`locales` | string[] |
`items` | any[] |
`options?` | [ResolveOptions](README.md#resolveoptions) |

###  CtorOptions

Ƭ **CtorOptions**: *[CtorOptions](README.md#ctoroptions) & [ResolveOptions](README.md#resolveoptions)*

*Defined in [src/lib/resolver/types.ts:155](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L155)*

Constructor options object

###  ResolveOptions

Ƭ **ResolveOptions**: *[ResolveOptions](README.md#resolveoptions) & Options*

*Defined in [src/lib/resolver/types.ts:150](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L150)*

Options for `resolve` method

###  Null

• **Null**:

*Defined in [src/lib/resolver/types.ts:119](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L119)*

Locale resolvers that returns locales unchanged.

### `Abstract` Resolver

• **Resolver**:

*Defined in [src/lib/resolver/types.ts:133](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L133)*

Path resolver interface

###  logger

• **logger**: *function* = {} as (msg: string) => void

*Inherited from [ResolverBase](README.md#abstract-resolverbase).[logger](README.md#logger)*

*Defined in [src/lib/resolver/types.ts:29](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L29)*

#### Type declaration:

▸ (`msg`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string |

###  options

• **options**: *object* = {} as object

*Inherited from [ResolverBase](README.md#abstract-resolverbase).[options](README.md#options)*

*Defined in [src/lib/resolver/types.ts:27](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L27)*

###  resolve

• **resolve**: *function* = {} as <T extends string>(
          locales: T[],
          items: { locale?: any }[],
          options?: ResolveOptions,
        ) => string[]

*Overrides [ResolverBase](README.md#abstract-resolverbase).[resolve](README.md#resolve)*

*Defined in [src/lib/resolver/types.ts:135](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L135)*

#### Type declaration:

▸ <**T**>(`locales`: T[], `items`: object[], `options?`: [ResolveOptions](README.md#resolveoptions)): *string[]*

**Type parameters:**

▪ **T**: *string*

**Parameters:**

Name | Type |
------ | ------ |
`locales` | T[] |
`items` | object[] |
`options?` | [ResolveOptions](README.md#resolveoptions) |

###  CtorOptions

Ƭ **CtorOptions**: *[CtorOptions](README.md#ctoroptions) & [ResolveOptions](README.md#resolveoptions)*

*Defined in [src/lib/resolver/types.ts:128](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L128)*

Constructor options object

###  ResolveOptions

Ƭ **ResolveOptions**: *[ResolveOptions](README.md#resolveoptions)*

*Defined in [src/lib/resolver/types.ts:123](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L123)*

Options for `resolve` method

###  Path

• **Path**:

*Defined in [src/lib/resolver/types.ts:37](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L37)*

Path resolvers

###  Cwd

• **Cwd**:

*Defined in [src/lib/resolver/types.ts:64](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L64)*

Path resolvers resolving path relative to current working directory

### `Abstract` Resolver

• **Resolver**:

*Defined in [src/lib/resolver/types.ts:80](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L80)*

Path resolver interface

###  logger

• **logger**: *function* = {} as (msg: string) => void

*Inherited from [ResolverBase](README.md#abstract-resolverbase).[logger](README.md#logger)*

*Defined in [src/lib/resolver/types.ts:29](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L29)*

#### Type declaration:

▸ (`msg`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string |

###  options

• **options**: *object* = {} as object

*Inherited from [ResolverBase](README.md#abstract-resolverbase).[options](README.md#options)*

*Defined in [src/lib/resolver/types.ts:27](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L27)*

###  resolve

• **resolve**: *function* = {} as (paths: string[], options?: ResolveOptions) => string[]

*Overrides [ResolverBase](README.md#abstract-resolverbase).[resolve](README.md#resolve)*

*Defined in [src/lib/resolver/types.ts:82](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L82)*

#### Type declaration:

▸ (`paths`: string[], `options?`: [ResolveOptions](README.md#resolveoptions)): *string[]*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | string[] |
`options?` | [ResolveOptions](README.md#resolveoptions) |

###  ResolveOptions

• **ResolveOptions**:

*Defined in [src/lib/resolver/types.ts:68](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L68)*

Options for `resolve` method

### `Optional` cwd

• **cwd**? : *undefined | string*

*Defined in [src/lib/resolver/types.ts:69](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L69)*

###  CtorOptions

Ƭ **CtorOptions**: *[CtorOptions](README.md#ctoroptions) & [ResolveOptions](README.md#resolveoptions)*

*Defined in [src/lib/resolver/types.ts:75](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L75)*

Constructor options object

###  Glob

• **Glob**:

*Defined in [src/lib/resolver/types.ts:89](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L89)*

Path resolvers resolving globs relative to current working directory

### `Abstract` Resolver

• **Resolver**:

*Defined in [src/lib/resolver/types.ts:105](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L105)*

Path resolver interface

###  logger

• **logger**: *function* = {} as (msg: string) => void

*Inherited from [ResolverBase](README.md#abstract-resolverbase).[logger](README.md#logger)*

*Defined in [src/lib/resolver/types.ts:29](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L29)*

#### Type declaration:

▸ (`msg`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string |

###  options

• **options**: *object* = {} as object

*Inherited from [ResolverBase](README.md#abstract-resolverbase).[options](README.md#options)*

*Defined in [src/lib/resolver/types.ts:27](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L27)*

###  resolve

• **resolve**: *function* = {} as (
          paths: string[],
          options?: ResolveOptions,
        ) => string[] | Promise<string[]>

*Overrides [ResolverBase](README.md#abstract-resolverbase).[resolve](README.md#resolve)*

*Defined in [src/lib/resolver/types.ts:107](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L107)*

#### Type declaration:

▸ (`paths`: string[], `options?`: [ResolveOptions](README.md#resolveoptions)): *string[] | Promise‹string[]›*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | string[] |
`options?` | [ResolveOptions](README.md#resolveoptions) |

###  CtorOptions

Ƭ **CtorOptions**: *[CtorOptions](README.md#ctoroptions) & [ResolveOptions](README.md#resolveoptions)*

*Defined in [src/lib/resolver/types.ts:100](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L100)*

Constructor options object

###  ResolveOptions

Ƭ **ResolveOptions**: *[ResolveOptions](README.md#resolveoptions) & glob.IOptions & [ResolveOptions](README.md#resolveoptions)*

*Defined in [src/lib/resolver/types.ts:93](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L93)*

Options for `resolve` method

###  Null

• **Null**:

*Defined in [src/lib/resolver/types.ts:41](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L41)*

Path resolvers that returns the paths unchanged.

### `Abstract` Resolver

• **Resolver**:

*Defined in [src/lib/resolver/types.ts:55](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L55)*

Path resolver interface

###  logger

• **logger**: *function* = {} as (msg: string) => void

*Inherited from [ResolverBase](README.md#abstract-resolverbase).[logger](README.md#logger)*

*Defined in [src/lib/resolver/types.ts:29](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L29)*

#### Type declaration:

▸ (`msg`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string |

###  options

• **options**: *object* = {} as object

*Inherited from [ResolverBase](README.md#abstract-resolverbase).[options](README.md#options)*

*Defined in [src/lib/resolver/types.ts:27](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L27)*

###  resolve

• **resolve**: *function* = {} as (paths: any[], options?: ResolveOptions) => string[]

*Overrides [ResolverBase](README.md#abstract-resolverbase).[resolve](README.md#resolve)*

*Defined in [src/lib/resolver/types.ts:57](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L57)*

#### Type declaration:

▸ (`paths`: any[], `options?`: [ResolveOptions](README.md#resolveoptions)): *string[]*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | any[] |
`options?` | [ResolveOptions](README.md#resolveoptions) |

###  CtorOptions

Ƭ **CtorOptions**: *[CtorOptions](README.md#ctoroptions) & [ResolveOptions](README.md#resolveoptions)*

*Defined in [src/lib/resolver/types.ts:50](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L50)*

Constructor options object

###  ResolveOptions

Ƭ **ResolveOptions**: *[ResolveOptions](README.md#resolveoptions)*

*Defined in [src/lib/resolver/types.ts:45](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L45)*

Options for `resolve` method

###  Value

• **Value**:

*Defined in [src/lib/resolver/types.ts:231](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L231)*

###  Glob

• **Glob**:

*Defined in [src/lib/resolver/types.ts:262](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L262)*

Value resolvers that returns values that match glob patterns.

### `Abstract` Resolver

• **Resolver**:

*Defined in [src/lib/resolver/types.ts:276](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L276)*

Path resolver interface

###  logger

• **logger**: *function* = {} as (msg: string) => void

*Inherited from [ResolverBase](README.md#abstract-resolverbase).[logger](README.md#logger)*

*Defined in [src/lib/resolver/types.ts:29](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L29)*

#### Type declaration:

▸ (`msg`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string |

###  options

• **options**: *object* = {} as object

*Inherited from [ResolverBase](README.md#abstract-resolverbase).[options](README.md#options)*

*Defined in [src/lib/resolver/types.ts:27](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L27)*

###  resolve

• **resolve**: *function* = {} as (
          values: string[],
          items: (AI_Item.Item & { value: any })[],
          options?: ResolveOptions,
        ) => string[]

*Overrides [ResolverBase](README.md#abstract-resolverbase).[resolve](README.md#resolve)*

*Defined in [src/lib/resolver/types.ts:278](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L278)*

#### Type declaration:

▸ (`values`: string[], `items`: [Item](README.md#item) & object[], `options?`: [ResolveOptions](README.md#resolveoptions)): *string[]*

**Parameters:**

Name | Type |
------ | ------ |
`values` | string[] |
`items` | [Item](README.md#item) & object[] |
`options?` | [ResolveOptions](README.md#resolveoptions) |

###  CtorOptions

Ƭ **CtorOptions**: *[CtorOptions](README.md#ctoroptions) & [ResolveOptions](README.md#resolveoptions)*

*Defined in [src/lib/resolver/types.ts:271](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L271)*

Constructor options object

###  ResolveOptions

Ƭ **ResolveOptions**: *[ResolveOptions](README.md#resolveoptions) & Options*

*Defined in [src/lib/resolver/types.ts:266](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L266)*

Options for `resolve` method

###  Null

• **Null**:

*Defined in [src/lib/resolver/types.ts:235](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L235)*

Value resolvers that returns values unchanged.

### `Abstract` Resolver

• **Resolver**:

*Defined in [src/lib/resolver/types.ts:249](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L249)*

Path resolver interface

###  logger

• **logger**: *function* = {} as (msg: string) => void

*Inherited from [ResolverBase](README.md#abstract-resolverbase).[logger](README.md#logger)*

*Defined in [src/lib/resolver/types.ts:29](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L29)*

#### Type declaration:

▸ (`msg`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string |

###  options

• **options**: *object* = {} as object

*Inherited from [ResolverBase](README.md#abstract-resolverbase).[options](README.md#options)*

*Defined in [src/lib/resolver/types.ts:27](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L27)*

###  resolve

• **resolve**: *function* = {} as <T extends any>(
          values: T[],
          items: (AI_Item.Item & { value: any })[],
          options?: ResolveOptions,
        ) => T[]

*Overrides [ResolverBase](README.md#abstract-resolverbase).[resolve](README.md#resolve)*

*Defined in [src/lib/resolver/types.ts:251](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L251)*

#### Type declaration:

▸ <**T**>(`values`: T[], `items`: [Item](README.md#item) & object[], `options?`: [ResolveOptions](README.md#resolveoptions)): *T[]*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

Name | Type |
------ | ------ |
`values` | T[] |
`items` | [Item](README.md#item) & object[] |
`options?` | [ResolveOptions](README.md#resolveoptions) |

###  CtorOptions

Ƭ **CtorOptions**: *[CtorOptions](README.md#ctoroptions) & [ResolveOptions](README.md#resolveoptions)*

*Defined in [src/lib/resolver/types.ts:244](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L244)*

Constructor options object

###  ResolveOptions

Ƭ **ResolveOptions**: *[ResolveOptions](README.md#resolveoptions)*

*Defined in [src/lib/resolver/types.ts:239](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L239)*

Options for `resolve` method

### `Abstract` ResolverBase

• **ResolverBase**:

*Defined in [src/lib/resolver/types.ts:26](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L26)*

###  logger

• **logger**: *function* = {} as (msg: string) => void

*Defined in [src/lib/resolver/types.ts:29](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L29)*

#### Type declaration:

▸ (`msg`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string |

###  options

• **options**: *object* = {} as object

*Defined in [src/lib/resolver/types.ts:27](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L27)*

###  resolve

• **resolve**: *function* = {} as (inputs: any[], ...args: any[]) => any[] | Promise<any[]>

*Defined in [src/lib/resolver/types.ts:31](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L31)*

#### Type declaration:

▸ (`inputs`: any[], ...`args`: any[]): *any[] | Promise‹any[]›*

**Parameters:**

Name | Type |
------ | ------ |
`inputs` | any[] |
`...args` | any[] |

###  KeyResolver

Ƭ **KeyResolver**: *[KeyResolver](README.md#abstract-keyresolver)*

*Defined in [src/lib/resolver/types.ts:23](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L23)*

###  LocaleResolver

Ƭ **LocaleResolver**: *[LocaleResolver](README.md#abstract-localeresolver)*

*Defined in [src/lib/resolver/types.ts:22](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L22)*

###  PathResolver

Ƭ **PathResolver**: *[PathResolver](README.md#abstract-pathresolver)*

*Defined in [src/lib/resolver/types.ts:21](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L21)*

###  ResolveOptions

Ƭ **ResolveOptions**: *[ResolveOptions](README.md#resolveoptions)*

*Defined in [src/lib/resolver/types.ts:20](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L20)*

###  Resolver

Ƭ **Resolver**: *[Resolver](README.md#abstract-resolver)*

*Defined in [src/lib/resolver/types.ts:19](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L19)*

###  ValueResolver

Ƭ **ValueResolver**: *[ValueResolver](README.md#abstract-valueresolver)*

*Defined in [src/lib/resolver/types.ts:24](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/resolver/types.ts#L24)*

___

###  ISchemator

• **ISchemator**:

*Defined in [src/lib/schemator/types.ts:15](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/types.ts#L15)*

### `Abstract` Schemator

• **Schemator**:

*Defined in [src/lib/schemator/types.ts:49](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/types.ts#L49)*

###  deserialize

• **deserialize**: *function* = {} as (schema: string, options?: DeserializeOptions) => any

*Defined in [src/lib/schemator/types.ts:61](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/types.ts#L61)*

#### Type declaration:

▸ (`schema`: string, `options?`: [DeserializeOptions](README.md#deserializeoptions)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | string |
`options?` | [DeserializeOptions](README.md#deserializeoptions) |

###  generate

• **generate**: *function* = {} as (data: any, options?: GenerateOptions) => any

*Defined in [src/lib/schemator/types.ts:54](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/types.ts#L54)*

#### Type declaration:

▸ (`data`: any, `options?`: [GenerateOptions](README.md#generateoptions)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |
`options?` | [GenerateOptions](README.md#generateoptions) |

###  logger

• **logger**: *function* = {} as (msg: string) => void

*Defined in [src/lib/schemator/types.ts:52](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/types.ts#L52)*

#### Type declaration:

▸ (`msg`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string |

###  options

• **options**: *object* = {} as AnyObj

*Defined in [src/lib/schemator/types.ts:50](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/types.ts#L50)*

#### Type declaration:

* \[ **key**: *number*\]: V

###  serialize

• **serialize**: *function* = {} as (
      schema: any,
      options?: SerializeOptions,
    ) => string | Buffer

*Defined in [src/lib/schemator/types.ts:56](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/types.ts#L56)*

#### Type declaration:

▸ (`schema`: any, `options?`: [SerializeOptions](README.md#serializeoptions)): *string | Buffer*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | any |
`options?` | [SerializeOptions](README.md#serializeoptions) |

###  GenerateOptions

• **GenerateOptions**:

*Defined in [src/lib/schemator/types.ts:34](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/types.ts#L34)*

### `Optional` additionalProperties

• **additionalProperties**? : *undefined | false | true*

*Defined in [src/lib/schemator/types.ts:38](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/types.ts#L38)*

### `Optional` required

• **required**? : *undefined | false | true*

*Defined in [src/lib/schemator/types.ts:37](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/types.ts#L37)*

### `Optional` scope

• **scope**? : *"locale" | "master"*

*Inherited from [GenerateOptions](README.md#generateoptions).[scope](README.md#optional-scope)*

*Defined in [src/lib/schemator/types-abstract.ts:15](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/types-abstract.ts#L15)*

### `Optional` title

• **title**? : *undefined | string*

*Defined in [src/lib/schemator/types.ts:36](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/types.ts#L36)*

### `Optional` type

• **type**? : *[SchemaType](README.md#schematype)*

*Defined in [src/lib/schemator/types.ts:35](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/types.ts#L35)*

###  SerializeOptions

• **SerializeOptions**:

*Defined in [src/lib/schemator/types.ts:27](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/types.ts#L27)*

### `Optional` type

• **type**? : *[SchemaType](README.md#schematype)*

*Defined in [src/lib/schemator/types.ts:28](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/types.ts#L28)*

###  CtorOptions

Ƭ **CtorOptions**: *[CtorOptions](README.md#ctoroptions) & [SerializeOptions](README.md#serializeoptions) & [DeserializeOptions](README.md#deserializeoptions) & [GenerateOptions](README.md#generateoptions)*

*Defined in [src/lib/schemator/types.ts:44](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/types.ts#L44)*

Constructor options object

###  DeserializeOptions

Ƭ **DeserializeOptions**: *[SerializeOptions](README.md#serializeoptions) & [DeserializeOptions](README.md#deserializeoptions)*

*Defined in [src/lib/schemator/types.ts:31](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/types.ts#L31)*

###  SchemaType

Ƭ **SchemaType**: *"clickhouse" | "bigquery" | "json" | "generic" | "mongoose" | "mysql"*

*Defined in [src/lib/schemator/types.ts:19](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/types.ts#L19)*

Schema types provided by generate-schema

___

###  ISerializerCollection

• **ISerializerCollection**:

*Defined in [src/lib/collection/types.ts:225](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L225)*

Subtype of `IMethodCollection` which holds groups of functions used as
de-/serializers.

### `Abstract` Collection

• **Collection**:

*Defined in [src/lib/collection/types.ts:289](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L289)*

Subtype of `IMethodCollection` which holds groups of functions used as
de-/serializers.

###  collection

• **collection**: *[ItemMap](README.md#itemmap)* = new Map()

*Inherited from [Collection](README.md#abstract-collection).[collection](README.md#collection)*

*Overrides [Collection](README.md#abstract-collection).[collection](README.md#collection)*

*Defined in [src/lib/collection/types-abstract.ts:455](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L455)*

###  add

▸ **add**(`options`: [SetOptions](README.md#setoptions)): *void*

*Inherited from [Collection](README.md#abstract-collection).[add](README.md#add)*

*Overrides [Collection](README.md#abstract-collection).[add](README.md#add)*

*Defined in [src/lib/collection/types-abstract.ts:459](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L459)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SetOptions](README.md#setoptions) |

**Returns:** *void*

###  delete

▸ **delete**(`name`: [Name](README.md#name)): *void*

*Inherited from [Collection](README.md#abstract-collection).[delete](README.md#delete)*

*Defined in [src/lib/collection/types-abstract.ts:107](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L107)*

Remove an item from the collection.

Throws if no item with the name exists in the collection.

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |

**Returns:** *void*

###  get

▸ **get**(`name`: [Name](README.md#name)): *undefined | [ItemBase](README.md#itembase)‹› & [ItemBase](README.md#itembase) & [Item](README.md#item)*

*Inherited from [Collection](README.md#abstract-collection).[get](README.md#get)*

*Overrides [Collection](README.md#abstract-collection).[get](README.md#get)*

*Defined in [src/lib/collection/types-abstract.ts:456](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L456)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |

**Returns:** *undefined | [ItemBase](README.md#itembase)‹› & [ItemBase](README.md#itembase) & [Item](README.md#item)*

###  getOption

▸ **getOption**(`name`: [Name](README.md#name), `optionKey`: string): *any*

*Inherited from [Collection](README.md#abstract-collection).[getOption](README.md#getoption)*

*Defined in [src/lib/collection/types-abstract.ts:240](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L240)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |
`optionKey` | string |

**Returns:** *any*

###  groupByResolve

▸ **groupByResolve**<**T**>(`queries`: T[], `iteratee?`: undefined | function): *[Map](classes/arraymap.md#static-map)‹undefined | [NamedItem](README.md#nameditem)‹›, T[]›*

*Inherited from [Collection](README.md#abstract-collection).[groupByResolve](README.md#groupbyresolve)*

*Overrides [Collection](README.md#abstract-collection).[groupByResolve](README.md#groupbyresolve)*

*Defined in [src/lib/collection/types-abstract.ts:465](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L465)*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

Name | Type |
------ | ------ |
`queries` | T[] |
`iteratee?` | undefined &#124; function |

**Returns:** *[Map](classes/arraymap.md#static-map)‹undefined | [NamedItem](README.md#nameditem)‹›, T[]›*

###  has

▸ **has**(`name`: [Name](README.md#name)): *boolean*

*Inherited from [Collection](README.md#abstract-collection).[has](README.md#has)*

*Defined in [src/lib/collection/types-abstract.ts:91](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L91)*

Check if a collection has an item by it's name.

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |

**Returns:** *boolean*

###  options

▸ **options**(`name`: [Name](README.md#name)): *object*

*Inherited from [Collection](README.md#abstract-collection).[options](README.md#options)*

*Defined in [src/lib/collection/types-abstract.ts:237](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L237)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |

**Returns:** *object*

* \[ **key**: *number*\]: V

###  resolve

▸ **resolve**(`query`: string): *undefined | [NamedItem](README.md#nameditem)‹›*

*Inherited from [Collection](README.md#abstract-collection).[resolve](README.md#resolve)*

*Overrides [Collection](README.md#abstract-collection).[resolve](README.md#resolve)*

*Defined in [src/lib/collection/types-abstract.ts:462](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L462)*

**Parameters:**

Name | Type |
------ | ------ |
`query` | string |

**Returns:** *undefined | [NamedItem](README.md#nameditem)‹›*

###  setOption

▸ **setOption**(`name`: [Name](README.md#name), `optionKey`: string, `optionValue`: any): *void*

*Inherited from [Collection](README.md#abstract-collection).[setOption](README.md#setoption)*

*Defined in [src/lib/collection/types-abstract.ts:243](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L243)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |
`optionKey` | string |
`optionValue` | any |

**Returns:** *void*

###  validate

▸ **validate**(`name`: [Name](README.md#name), `prop`: string): *void*

*Inherited from [Collection](README.md#abstract-collection).[validate](README.md#validate)*

*Defined in [src/lib/collection/types-abstract.ts:130](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L130)*

Validate that a particular item in collection has a specific property.

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |
`prop` | string |

**Returns:** *void*

###  validateMethod

▸ **validateMethod**(`name`: [Name](README.md#name), `method`: keyof ItemMethods): *void*

*Inherited from [Collection](README.md#abstract-collection).[validateMethod](README.md#validatemethod)*

*Overrides [Collection](README.md#abstract-collection).[validateMethod](README.md#validatemethod)*

*Defined in [src/lib/collection/types-abstract.ts:468](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L468)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |
`method` | keyof ItemMethods |

**Returns:** *void*

###  Arg

Ƭ **Arg**: *[Arg](README.md#arg)*

*Defined in [src/lib/collection/types.ts:253](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L253)*

Item format passed to AdaptorCollection constructor that will be
translated to AdaptorItem object

###  Class

Ƭ **Class**: *[Class](README.md#class)*

*Defined in [src/lib/collection/types.ts:268](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L268)*

Collection class type with contructor

###  Ctor

Ƭ **Ctor**: *[Ctor](README.md#ctor)*

*Defined in [src/lib/collection/types.ts:263](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L263)*

Constructor

###  CtorOptions

Ƭ **CtorOptions**: *[CtorOptions](README.md#ctoroptions)*

*Defined in [src/lib/collection/types.ts:258](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L258)*

Constructor options object

###  Deserializer

Ƭ **Deserializer**: *[Deserializer](README.md#deserializer)*

*Defined in [src/lib/collection/types.ts:234](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L234)*

Deserializer function

###  Item

Ƭ **Item**: *[Item](README.md#item)*

*Defined in [src/lib/collection/types.ts:247](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L247)*

Interface of a single entry containing methods for interacting with
specific file type.

###  ItemBase

Ƭ **ItemBase**: *[ItemBase](README.md#itembase)*

*Defined in [src/lib/collection/types.ts:241](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L241)*

Item properties modified in ISerializerCollection relative to ICollection

###  ItemMap

Ƭ **ItemMap**: *[ItemMap](README.md#itemmap)*

*Defined in [src/lib/collection/types.ts:283](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L283)*

Mapping of name to Item

###  ItemMethods

Ƭ **ItemMethods**: *[ItemMethods](README.md#itemmethods)*

*Defined in [src/lib/collection/types.ts:236](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L236)*

###  NamedItem

Ƭ **NamedItem**: *[NamedItem](README.md#nameditem)*

*Defined in [src/lib/collection/types.ts:278](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L278)*

Extension of AdaptorItem which also contains name property

###  Serializer

Ƭ **Serializer**: *[Serializer](README.md#serializer)*

*Defined in [src/lib/collection/types.ts:229](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L229)*

Serializer function

###  SetOptions

Ƭ **SetOptions**: *[SetOptions](README.md#setoptions)*

*Defined in [src/lib/collection/types.ts:273](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types.ts#L273)*

Options passed to Set and Add methods

___

###  IUsage

• **IUsage**:

*Defined in [src/lib/usage/types.ts:15](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/usage/types.ts#L15)*

###  CtorOptions

• **CtorOptions**:

*Defined in [src/lib/usage/types.ts:16](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/usage/types.ts#L16)*

### `Optional` blockIndex

• **blockIndex**? : *Item["blockIndex"]*

*Inherited from [CtorOptions](README.md#ctoroptions).[blockIndex](README.md#optional-blockindex)*

*Defined in [src/lib/item/types-abstract.ts:136](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L136)*

### `Optional` column

• **column**? : *Item["column"]*

*Inherited from [CtorOptions](README.md#ctoroptions).[column](README.md#optional-column)*

*Defined in [src/lib/item/types-abstract.ts:133](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L133)*

### `Optional` line

• **line**? : *Item["line"]*

*Inherited from [CtorOptions](README.md#ctoroptions).[line](README.md#optional-line)*

*Defined in [src/lib/item/types-abstract.ts:132](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L132)*

### `Optional` locale

• **locale**? : *Item["locale"]*

*Inherited from [CtorOptions](README.md#ctoroptions).[locale](README.md#optional-locale)*

*Defined in [src/lib/item/types-abstract.ts:134](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L134)*

### `Optional` origin

• **origin**? : *Item["origin"]*

*Inherited from [CtorOptions](README.md#ctoroptions).[origin](README.md#optional-origin)*

*Defined in [src/lib/item/types-abstract.ts:137](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L137)*

###  path

• **path**: *[IPath](README.md#ipath)*

*Overrides [CtorOptions](README.md#ctoroptions).[path](README.md#path)*

*Defined in [src/lib/usage/types.ts:17](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/usage/types.ts#L17)*

### `Optional` source

• **source**? : *Item["source"]*

*Inherited from [CtorOptions](README.md#ctoroptions).[source](README.md#optional-source)*

*Defined in [src/lib/item/types-abstract.ts:135](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L135)*

### `Optional` value

• **value**? : *Item["value"]*

*Inherited from [CtorOptions](README.md#ctoroptions).[value](README.md#optional-value)*

*Defined in [src/lib/item/types-abstract.ts:130](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L130)*

###  Item

• **Item**:

*Defined in [src/lib/usage/types.ts:20](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/usage/types.ts#L20)*

###  copy

• **copy**: *function*

*Overrides [Item](README.md#item).[copy](README.md#copy)*

*Defined in [src/lib/usage/types.ts:24](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/usage/types.ts#L24)*

Create a new instance with copied values.

#### Type declaration:

▸ (`newValuesObj?`: Partial‹[CtorOptions](README.md#ctoroptions)›): *[Item](README.md#item)*

**Parameters:**

Name | Type |
------ | ------ |
`newValuesObj?` | Partial‹[CtorOptions](README.md#ctoroptions)› |

###  ItemArray

• **ItemArray**:

*Defined in [src/lib/usage/types.ts:27](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/usage/types.ts#L27)*

###  [Symbol.iterator]

• **[Symbol.iterator]**: *function*

*Overrides [ItemArray](README.md#itemarray).[[Symbol.iterator]](README.md#[symbol.iterator])*

*Defined in [src/lib/usage/types.ts:28](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/usage/types.ts#L28)*

#### Type declaration:

▸ (): *IterableIterator‹[Item](README.md#item)›*

###  difference

• **difference**: *function*

*Inherited from [ItemArray](README.md#itemarray).[difference](README.md#difference)*

*Defined in [src/lib/item/types-abstract.ts:148](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L148)*

#### Type declaration:

▸ (`other`: [ItemArrayLike](README.md#itemarraylike), `options?`: [DifferenceOptions](README.md#differenceoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [ItemArrayLike](README.md#itemarraylike) |
`options?` | [DifferenceOptions](README.md#differenceoptions) |

###  duplicates

• **duplicates**: *function*

*Inherited from [ItemArray](README.md#itemarray).[duplicates](README.md#duplicates)*

*Defined in [src/lib/item/types-abstract.ts:209](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L209)*

#### Type declaration:

▸ (`options?`: [DuplicatesOptions](README.md#duplicatesoptions)): *[Map](classes/arraymap.md#static-map)‹number, [Item](README.md#item)[]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [DuplicatesOptions](README.md#duplicatesoptions) |

###  filterBy

• **filterBy**: *function*

*Inherited from [ItemArray](README.md#itemarray).[filterBy](README.md#filterby)*

*Defined in [src/lib/item/types-abstract.ts:183](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L183)*

#### Type declaration:

▸ (`callback`: function, `options?`: [FilterByOptions](README.md#filterbyoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

▪ **callback**: *function*

▸ (`item`: [Item](README.md#item)): *boolean | void*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [Item](README.md#item) |

▪`Optional`  **options**: *[FilterByOptions](README.md#filterbyoptions)*

###  filterByLocale

• **filterByLocale**: *function*

*Inherited from [ItemArray](README.md#itemarray).[filterByLocale](README.md#filterbylocale)*

*Defined in [src/lib/item/types-abstract.ts:195](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L195)*

#### Type declaration:

▸ (`locale`: NonNullable‹Item["locale"]›, `options?`: [FilterByLocaleOptions](README.md#filterbylocaleoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`locale` | NonNullable‹Item["locale"]› |
`options?` | [FilterByLocaleOptions](README.md#filterbylocaleoptions) |

###  filterByLocales

• **filterByLocales**: *function*

*Inherited from [ItemArray](README.md#itemarray).[filterByLocales](README.md#filterbylocales)*

*Defined in [src/lib/item/types-abstract.ts:199](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L199)*

#### Type declaration:

▸ (`locales`: NonNullable‹Item["locale"]›[], `options?`: [FilterByLocaleOptions](README.md#filterbylocaleoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`locales` | NonNullable‹Item["locale"]›[] |
`options?` | [FilterByLocaleOptions](README.md#filterbylocaleoptions) |

###  filterByPath

• **filterByPath**: *function*

*Inherited from [ItemArray](README.md#itemarray).[filterByPath](README.md#filterbypath)*

*Defined in [src/lib/item/types-abstract.ts:187](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L187)*

#### Type declaration:

▸ (`path`: NonNullable‹Item["path"]›, `options?`: [FilterByPathOptions](README.md#filterbypathoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`path` | NonNullable‹Item["path"]› |
`options?` | [FilterByPathOptions](README.md#filterbypathoptions) |

###  filterByPaths

• **filterByPaths**: *function*

*Inherited from [ItemArray](README.md#itemarray).[filterByPaths](README.md#filterbypaths)*

*Defined in [src/lib/item/types-abstract.ts:191](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L191)*

#### Type declaration:

▸ (`paths`: NonNullable‹Item["path"]›[], `options?`: [FilterByPathOptions](README.md#filterbypathoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | NonNullable‹Item["path"]›[] |
`options?` | [FilterByPathOptions](README.md#filterbypathoptions) |

###  filterByValue

• **filterByValue**: *function*

*Inherited from [ItemArray](README.md#itemarray).[filterByValue](README.md#filterbyvalue)*

*Defined in [src/lib/item/types-abstract.ts:203](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L203)*

#### Type declaration:

▸ (`value`: any, `options?`: [FilterByValueOptions](README.md#filterbyvalueoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`options?` | [FilterByValueOptions](README.md#filterbyvalueoptions) |

###  filterByValues

• **filterByValues**: *function*

*Inherited from [ItemArray](README.md#itemarray).[filterByValues](README.md#filterbyvalues)*

*Defined in [src/lib/item/types-abstract.ts:204](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L204)*

#### Type declaration:

▸ (`value`: any[], `options?`: [FilterByValueOptions](README.md#filterbyvalueoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any[] |
`options?` | [FilterByValueOptions](README.md#filterbyvalueoptions) |

###  filterMissing

• **filterMissing**: *function*

*Inherited from [ItemArray](README.md#itemarray).[filterMissing](README.md#filtermissing)*

*Defined in [src/lib/item/types-abstract.ts:208](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L208)*

#### Type declaration:

▸ (`options?`: [FilterMissingOptions](README.md#filtermissingoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [FilterMissingOptions](README.md#filtermissingoptions) |

###  intersection

• **intersection**: *function*

*Inherited from [ItemArray](README.md#itemarray).[intersection](README.md#intersection)*

*Defined in [src/lib/item/types-abstract.ts:153](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L153)*

#### Type declaration:

▸ (`other`: [ItemArrayLike](README.md#itemarraylike), `options?`: [IntersectionOptions](README.md#intersectionoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [ItemArrayLike](README.md#itemarraylike) |
`options?` | [IntersectionOptions](README.md#intersectionoptions) |

###  items

• **items**: *[Item](README.md#item)[]*

*Inherited from [ItemArray](README.md#itemarray).[items](README.md#items)*

*Defined in [src/lib/item/types-abstract.ts:141](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L141)*

###  itemsByLocale

• **itemsByLocale**: *function*

*Inherited from [ItemArray](README.md#itemarray).[itemsByLocale](README.md#itemsbylocale)*

*Defined in [src/lib/item/types-abstract.ts:179](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L179)*

#### Type declaration:

▸ (`locale`: string, `options?`: [ItemsByLocaleOptions](README.md#itemsbylocaleoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`locale` | string |
`options?` | [ItemsByLocaleOptions](README.md#itemsbylocaleoptions) |

###  itemsByLocales

• **itemsByLocales**: *function*

*Inherited from [ItemArray](README.md#itemarray).[itemsByLocales](README.md#itemsbylocales)*

*Defined in [src/lib/item/types-abstract.ts:175](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L175)*

#### Type declaration:

▸ (`locales`: string[], `options?`: [ItemsByLocaleOptions](README.md#itemsbylocaleoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`locales` | string[] |
`options?` | [ItemsByLocaleOptions](README.md#itemsbylocaleoptions) |

###  length

• **length**: *number*

*Inherited from [ItemArray](README.md#itemarray).[length](README.md#length)*

*Defined in [src/lib/item/types-abstract.ts:145](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L145)*

###  prop

• **prop**: *function*

*Inherited from [ItemArray](README.md#itemarray).[prop](README.md#prop)*

*Defined in [src/lib/item/types-abstract.ts:146](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L146)*

#### Type declaration:

▸ <**K**>(`prop`: K): *Item[K][]*

**Type parameters:**

▪ **K**: *keyof Item*

**Parameters:**

Name | Type |
------ | ------ |
`prop` | K |

###  push

• **push**: *function*

*Inherited from [ItemArray](README.md#itemarray).[push](README.md#push)*

*Defined in [src/lib/item/types-abstract.ts:144](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L144)*

#### Type declaration:

▸ (...`items`: [Item](README.md#item)[]): *ReturnType‹Array<any>["push"]›*

**Parameters:**

Name | Type |
------ | ------ |
`...items` | [Item](README.md#item)[] |

###  toObject

• **toObject**: *function*

*Inherited from [ItemArray](README.md#itemarray).[toObject](README.md#toobject)*

*Defined in [src/lib/item/types-abstract.ts:210](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L210)*

#### Type declaration:

▸ <**O**>(`options`: O): *[ToObjectResult](README.md#toobjectresult)‹O["simple"], O["merge"], [Item](README.md#item)›*

**Type parameters:**

▪ **O**: *[ToObjectOptions](README.md#toobjectoptions)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | O |

###  union

• **union**: *function*

*Inherited from [ItemArray](README.md#itemarray).[union](README.md#union)*

*Defined in [src/lib/item/types-abstract.ts:152](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L152)*

#### Type declaration:

▸ (`other`: [ItemArrayLike](README.md#itemarraylike)‹[Item](README.md#item)›, `options?`: [UnionOptions](README.md#unionoptions)): *[ItemArray](README.md#itemarray)‹[Item](README.md#item)›*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [ItemArrayLike](README.md#itemarraylike)‹[Item](README.md#item)› |
`options?` | [UnionOptions](README.md#unionoptions) |

###  uniqProp

• **uniqProp**: *function*

*Inherited from [ItemArray](README.md#itemarray).[uniqProp](README.md#uniqprop)*

*Defined in [src/lib/item/types-abstract.ts:147](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L147)*

#### Type declaration:

▸ <**K**>(`prop`: K): *Item[K][]*

**Type parameters:**

▪ **K**: *keyof Item*

**Parameters:**

Name | Type |
------ | ------ |
`prop` | K |

###  update

• **update**: *function*

*Inherited from [ItemArray](README.md#itemarray).[update](README.md#update)*

*Defined in [src/lib/item/types-abstract.ts:171](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L171)*

#### Type declaration:

▸ <**T2**>(`other`: [ItemArrayLike](README.md#itemarraylike)‹T2›, `options?`: [UpdateOptions](README.md#updateoptions)‹[Item](README.md#item), T2›): *[UpdateReturn](README.md#updatereturn)‹[Item](README.md#item), T2›*

**Type parameters:**

▪ **T2**: *[Item](README.md#item)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [ItemArrayLike](README.md#itemarraylike)‹T2› |
`options?` | [UpdateOptions](README.md#updateoptions)‹[Item](README.md#item), T2› |

###  updateBy

• **updateBy**: *function*

*Inherited from [ItemArray](README.md#itemarray).[updateBy](README.md#updateby)*

*Defined in [src/lib/item/types-abstract.ts:157](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L157)*

#### Type declaration:

▸ <**T2**>(`other`: [ItemArrayLike](README.md#itemarraylike)‹T2›, `options?`: [UpdateByOptions](README.md#updatebyoptions)‹[Item](README.md#item), T2›): *[UpdateReturn](README.md#updatereturn)‹[Item](README.md#item), T2›*

**Type parameters:**

▪ **T2**: *[Item](README.md#item)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [ItemArrayLike](README.md#itemarraylike)‹T2› |
`options?` | [UpdateByOptions](README.md#updatebyoptions)‹[Item](README.md#item), T2› |

###  updateProp

• **updateProp**: *function*

*Inherited from [ItemArray](README.md#itemarray).[updateProp](README.md#updateprop)*

*Defined in [src/lib/item/types-abstract.ts:161](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L161)*

#### Type declaration:

▸ <**T2**>(`other`: [ItemArrayLike](README.md#itemarraylike)‹T2›, `prop`: keyof Item, `options?`: [UpdatePropOptions](README.md#updatepropoptions)‹[Item](README.md#item)›): *[UpdateReturn](README.md#updatereturn)‹[Item](README.md#item), T2›*

**Type parameters:**

▪ **T2**: *[Item](README.md#item)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [ItemArrayLike](README.md#itemarraylike)‹T2› |
`prop` | keyof Item |
`options?` | [UpdatePropOptions](README.md#updatepropoptions)‹[Item](README.md#item)› |

###  updateProps

• **updateProps**: *function*

*Inherited from [ItemArray](README.md#itemarray).[updateProps](README.md#updateprops)*

*Defined in [src/lib/item/types-abstract.ts:166](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L166)*

#### Type declaration:

▸ <**T2**>(`other`: [ItemArrayLike](README.md#itemarraylike)‹T2›, `props`: keyof T[], `options?`: [UpdatePropOptions](README.md#updatepropoptions)‹[Item](README.md#item)›): *[UpdateReturn](README.md#updatereturn)‹[Item](README.md#item), T2›*

**Type parameters:**

▪ **T2**: *[Item](README.md#item)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [ItemArrayLike](README.md#itemarraylike)‹T2› |
`props` | keyof T[] |
`options?` | [UpdatePropOptions](README.md#updatepropoptions)‹[Item](README.md#item)› |

###  ItemArrayLike

Ƭ **ItemArrayLike**: *[ItemList](README.md#itemlist) | IterableIterator‹[Item](README.md#item)›*

*Defined in [src/lib/usage/types.ts:33](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/usage/types.ts#L33)*

###  ItemList

Ƭ **ItemList**: *[ItemArray](README.md#itemarray) | [Item](README.md#item)[]*

*Defined in [src/lib/usage/types.ts:31](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/usage/types.ts#L31)*

___

###  IValidator

• **IValidator**:

*Defined in [src/lib/validator/types.ts:15](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/validator/types.ts#L15)*

### `Abstract` Validator

• **Validator**:

*Defined in [src/lib/validator/types.ts:24](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/validator/types.ts#L24)*

###  logger

• **logger**: *function* = {} as (msg: string) => void

*Defined in [src/lib/validator/types.ts:27](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/validator/types.ts#L27)*

#### Type declaration:

▸ (`msg`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string |

###  options

• **options**: *object & object & [CtorOptions](README.md#ctoroptions)‹›* = {} as CtorOptions

*Defined in [src/lib/validator/types.ts:25](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/validator/types.ts#L25)*

###  validate

• **validate**: *function* = {} as (schema: any, data: any, options?: ValidateOptions) => any

*Defined in [src/lib/validator/types.ts:29](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/validator/types.ts#L29)*

#### Type declaration:

▸ (`schema`: any, `data`: any, `options?`: [ValidateOptions](README.md#validateoptions)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | any |
`data` | any |
`options?` | [ValidateOptions](README.md#validateoptions) |

###  CtorOptions

Ƭ **CtorOptions**: *[ValidateOptions](README.md#validateoptions) & [CtorOptions](README.md#ctoroptions)*

*Defined in [src/lib/validator/types.ts:22](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/validator/types.ts#L22)*

Constructor options object

###  ValidateOptions

Ƭ **ValidateOptions**: *[ValidateOptions](README.md#validateoptions) & NonNullable‹Parameters<typeof validateOptions>[2]›*

*Defined in [src/lib/validator/types.ts:16](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/validator/types.ts#L16)*

___

###  I_I18nUtil

• **I_I18nUtil**:

*Defined in [src/lib/i18n-util/types.ts:28](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L28)*

###  AdaptorCollection

• **AdaptorCollection**:

*Defined in [src/lib/i18n-util/types.ts:784](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L784)*

###  Collection

• **Collection**:

*Defined in [src/lib/i18n-util/types.ts:843](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L843)*

###  add

• **add**: *function*

*Overrides [Collection](README.md#abstract-collection).[add](README.md#add)*

*Defined in [src/lib/i18n-util/types.ts:845](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L845)*

#### Type declaration:

▸ (`options`: [SetOptions](README.md#setoptions)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SetOptions](README.md#setoptions) |

###  collection

• **collection**: *[ItemMap](README.md#itemmap)* = new Map()

*Inherited from [Collection](README.md#abstract-collection).[collection](README.md#collection)*

*Overrides [Collection](README.md#abstract-collection).[collection](README.md#collection)*

*Defined in [src/lib/collection/types-abstract.ts:350](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L350)*

###  get

• **get**: *function*

*Overrides [Collection](README.md#abstract-collection).[get](README.md#get)*

*Defined in [src/lib/i18n-util/types.ts:844](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L844)*

#### Type declaration:

▸ (`name`: [Name](README.md#name)): *[Item](README.md#item) | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |

###  groupByResolve

• **groupByResolve**: *function*

*Overrides [Collection](README.md#abstract-collection).[groupByResolve](README.md#groupbyresolve)*

*Defined in [src/lib/i18n-util/types.ts:847](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L847)*

#### Type declaration:

▸ (`queries`: any[], `iteratee?`: undefined | function): *[Map](classes/arraymap.md#static-map)‹[NamedItem](README.md#nameditem) | undefined, any[]›*

**Parameters:**

Name | Type |
------ | ------ |
`queries` | any[] |
`iteratee?` | undefined &#124; function |

###  resolve

• **resolve**: *function*

*Overrides [Collection](README.md#abstract-collection).[resolve](README.md#resolve)*

*Defined in [src/lib/i18n-util/types.ts:846](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L846)*

#### Type declaration:

▸ (`query`: string): *[NamedItem](README.md#nameditem) | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`query` | string |

###  delete

▸ **delete**(`name`: [Name](README.md#name)): *void*

*Inherited from [Collection](README.md#abstract-collection).[delete](README.md#delete)*

*Defined in [src/lib/collection/types-abstract.ts:107](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L107)*

Remove an item from the collection.

Throws if no item with the name exists in the collection.

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |

**Returns:** *void*

###  getOption

▸ **getOption**(`name`: [Name](README.md#name), `optionKey`: string): *any*

*Inherited from [Collection](README.md#abstract-collection).[getOption](README.md#getoption)*

*Defined in [src/lib/collection/types-abstract.ts:240](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L240)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |
`optionKey` | string |

**Returns:** *any*

###  has

▸ **has**(`name`: [Name](README.md#name)): *boolean*

*Inherited from [Collection](README.md#abstract-collection).[has](README.md#has)*

*Defined in [src/lib/collection/types-abstract.ts:91](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L91)*

Check if a collection has an item by it's name.

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |

**Returns:** *boolean*

###  options

▸ **options**(`name`: [Name](README.md#name)): *object*

*Inherited from [Collection](README.md#abstract-collection).[options](README.md#options)*

*Defined in [src/lib/collection/types-abstract.ts:237](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L237)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |

**Returns:** *object*

* \[ **key**: *number*\]: V

###  setOption

▸ **setOption**(`name`: [Name](README.md#name), `optionKey`: string, `optionValue`: any): *void*

*Inherited from [Collection](README.md#abstract-collection).[setOption](README.md#setoption)*

*Defined in [src/lib/collection/types-abstract.ts:243](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L243)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |
`optionKey` | string |
`optionValue` | any |

**Returns:** *void*

###  validate

▸ **validate**(`name`: [Name](README.md#name), `prop`: string): *void*

*Inherited from [Collection](README.md#abstract-collection).[validate](README.md#validate)*

*Defined in [src/lib/collection/types-abstract.ts:130](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L130)*

Validate that a particular item in collection has a specific property.

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |
`prop` | string |

**Returns:** *void*

###  validateMethod

▸ **validateMethod**(`name`: [Name](README.md#name), `method`: keyof ItemMethods): *void*

*Inherited from [Collection](README.md#abstract-collection).[validateMethod](README.md#validatemethod)*

*Overrides [Collection](README.md#abstract-collection).[validateMethod](README.md#validatemethod)*

*Defined in [src/lib/collection/types-abstract.ts:363](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L363)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [Name](README.md#name) |
`method` | keyof ItemMethods |

**Returns:** *void*

###  CtorOptions

• **CtorOptions**:

*Defined in [src/lib/i18n-util/types.ts:833](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L833)*

Constructor options object

### `Optional` collection

• **collection**? : *object | [Map](classes/arraymap.md#static-map)‹[Name](README.md#name), Arg›*

*Overrides [CtorOptions](README.md#ctoroptions).[collection](README.md#optional-collection)*

*Defined in [src/lib/i18n-util/types.ts:834](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L834)*

###  ItemBase

• **ItemBase**:

*Defined in [src/lib/i18n-util/types.ts:799](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L799)*

Item properties modified in IAdaptorCollection relative to ICollection

###  methods

• **methods**: *[ItemMethods](README.md#itemmethods)*

*Defined in [src/lib/i18n-util/types.ts:801](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L801)*

###  ItemMethods

• **ItemMethods**:

*Defined in [src/lib/i18n-util/types.ts:785](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L785)*

### `Optional` parser

• **parser**? : *[Parser](README.md#parser)*

*Defined in [src/lib/i18n-util/types.ts:790](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L790)*

### `Optional` remover

• **remover**? : *[Remover](README.md#remover)*

*Defined in [src/lib/i18n-util/types.ts:792](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L792)*

### `Optional` usageAnalyzer

• **usageAnalyzer**? : *[UsageAnalyzer](README.md#usageanalyzer)*

*Defined in [src/lib/i18n-util/types.ts:793](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L793)*

### `Optional` writer

• **writer**? : *[Writer](README.md#writer)*

*Defined in [src/lib/i18n-util/types.ts:791](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L791)*

###  NamedItem

• **NamedItem**:

*Defined in [src/lib/i18n-util/types.ts:813](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L813)*

Extension of AdaptorItem which also contains name property

###  methods

• **methods**: *[ItemMethods](README.md#itemmethods)*

*Inherited from [ItemBase](README.md#itembase).[methods](README.md#methods)*

*Overrides [ItemBase](README.md#itembase).[methods](README.md#methods)*

*Defined in [src/lib/i18n-util/types.ts:801](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L801)*

###  name

• **name**: *[Name](README.md#name)*

*Defined in [src/lib/i18n-util/types.ts:814](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L814)*

### `Optional` options

• **options**? : *[AnyObj](README.md#anyobj)*

*Inherited from [ItemBase](README.md#itembase).[options](README.md#optional-options)*

*Defined in [src/lib/collection/types-abstract.ts:154](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L154)*

###  patterns

• **patterns**: *RegExp[]*

*Inherited from [Item](README.md#item).[patterns](README.md#patterns)*

*Defined in [src/lib/collection/types-abstract.ts:23](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L23)*

###  SetOptions

• **SetOptions**:

*Defined in [src/lib/i18n-util/types.ts:839](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L839)*

###  methods

• **methods**: *[ItemMethods](README.md#itemmethods)*

*Overrides [ItemBase](README.md#itembase).[methods](README.md#methods)*

*Defined in [src/lib/i18n-util/types.ts:840](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L840)*

###  name

• **name**: *[Name](README.md#name)*

*Inherited from [SetOptions](README.md#setoptions).[name](README.md#name)*

*Defined in [src/lib/collection/types-abstract.ts:67](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L67)*

###  patterns

• **patterns**: *string | RegExp‹›[]*

*Inherited from [Arg](README.md#arg).[patterns](README.md#patterns)*

*Defined in [src/lib/collection/types-abstract.ts:32](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/collection/types-abstract.ts#L32)*

###  Item

Ƭ **Item**: *[ItemBase](README.md#itembase) & IBaseAdaptorCollection.Item*

*Defined in [src/lib/i18n-util/types.ts:808](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L808)*

Interface of a single entry containing methods for interacting with
specific file type.

###  ItemMap

Ƭ **ItemMap**: *[Map](classes/arraymap.md#static-map)‹[Name](README.md#name), [Item](README.md#item)›*

*Defined in [src/lib/i18n-util/types.ts:820](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L820)*

Mapping of name to IOCollectionItem

### `Abstract` Base

• **Base**:

*Defined in [src/lib/i18n-util/types.ts:325](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L325)*

Base class with base functionalities shared among the I18nUtil classes

###  adaptors

• **adaptors**: *[Collection](README.md#abstract-collection)‹›* = {} as Adaptors

*Inherited from [Base](README.md#abstract-base).[adaptors](README.md#adaptors)*

*Defined in [src/lib/i18n-util/types.ts:291](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L291)*

###  addAdaptor

• **addAdaptor**: *function* = {} as (
      params: Parameters<Adaptors['add']>[0],
    ) => ReturnType<Adaptors['add']>

*Inherited from [Base](README.md#abstract-base).[addAdaptor](README.md#addadaptor)*

*Defined in [src/lib/i18n-util/types.ts:300](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L300)*

#### Type declaration:

▸ (`params`: Parameters<Adaptors["add"]>[0]): *ReturnType‹Adaptors["add"]›*

**Parameters:**

Name | Type |
------ | ------ |
`params` | Parameters<Adaptors["add"]>[0] |

###  addAdaptors

• **addAdaptors**: *function* = {} as (
      paramsList: Parameters<Adaptors['add']>[0][],
    ) => ReturnType<Adaptors['add']>

*Inherited from [Base](README.md#abstract-base).[addAdaptors](README.md#addadaptors)*

*Defined in [src/lib/i18n-util/types.ts:304](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L304)*

#### Type declaration:

▸ (`paramsList`: Parameters<Adaptors["add"]>[0][]): *ReturnType‹Adaptors["add"]›*

**Parameters:**

Name | Type |
------ | ------ |
`paramsList` | Parameters<Adaptors["add"]>[0][] |

###  keyResolver

• **keyResolver**: *[KeyResolver](README.md#abstract-keyresolver)‹›* = {} as KeyResolver

*Inherited from [Base](README.md#abstract-base).[keyResolver](README.md#keyresolver)*

*Defined in [src/lib/i18n-util/types.ts:294](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L294)*

###  localeResolver

• **localeResolver**: *[LocaleResolver](README.md#abstract-localeresolver)‹›* = {} as LocaleResolver

*Inherited from [Base](README.md#abstract-base).[localeResolver](README.md#localeresolver)*

*Defined in [src/lib/i18n-util/types.ts:293](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L293)*

###  options

• **options**: *object* = {} as AnyObj

*Inherited from [Base](README.md#abstract-base).[options](README.md#options)*

*Defined in [src/lib/i18n-util/types.ts:298](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L298)*

#### Type declaration:

* \[ **key**: *number*\]: V

###  pathResolver

• **pathResolver**: *[PathResolver](README.md#abstract-pathresolver)‹›* = {} as PathResolver

*Inherited from [Base](README.md#abstract-base).[pathResolver](README.md#pathresolver)*

*Defined in [src/lib/i18n-util/types.ts:292](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L292)*

###  removeAdaptor

• **removeAdaptor**: *function* = {} as (
      name: Parameters<Adaptors['delete']>[0],
    ) => ReturnType<Adaptors['delete']>

*Inherited from [Base](README.md#abstract-base).[removeAdaptor](README.md#removeadaptor)*

*Defined in [src/lib/i18n-util/types.ts:308](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L308)*

#### Type declaration:

▸ (`name`: Parameters<Adaptors["delete"]>[0]): *ReturnType‹Adaptors["delete"]›*

**Parameters:**

Name | Type |
------ | ------ |
`name` | Parameters<Adaptors["delete"]>[0] |

###  removeAdaptors

• **removeAdaptors**: *function* = {} as (
      names: Parameters<Adaptors['delete']>[0][],
    ) => ReturnType<Adaptors['delete']>

*Inherited from [Base](README.md#abstract-base).[removeAdaptors](README.md#removeadaptors)*

*Defined in [src/lib/i18n-util/types.ts:312](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L312)*

#### Type declaration:

▸ (`names`: Parameters<Adaptors["delete"]>[0][]): *ReturnType‹Adaptors["delete"]›*

**Parameters:**

Name | Type |
------ | ------ |
`names` | Parameters<Adaptors["delete"]>[0][] |

###  resolveKeys

• **resolveKeys**: *function* = {} as (
      items: AI_Item.ItemArrayLike,
      keys: any[],
      options?: ResolveKeysOptions,
    ) => string[][] | Promise<string[][]>

*Defined in [src/lib/i18n-util/types.ts:332](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L332)*

#### Type declaration:

▸ (`items`: [ItemArrayLike](README.md#itemarraylike), `keys`: any[], `options?`: [ResolveKeysOptions](README.md#resolvekeysoptions)): *string[][] | Promise‹string[][]›*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ItemArrayLike](README.md#itemarraylike) |
`keys` | any[] |
`options?` | [ResolveKeysOptions](README.md#resolvekeysoptions) |

###  resolveLocales

• **resolveLocales**: *function* = {} as (
      items: AI_Item.ItemArrayLike,
      locales: any[],
      options?: ResolveLocalesOptions,
    ) => string[] | Promise<string[]>

*Defined in [src/lib/i18n-util/types.ts:326](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L326)*

#### Type declaration:

▸ (`items`: [ItemArrayLike](README.md#itemarraylike), `locales`: any[], `options?`: [ResolveLocalesOptions](README.md#resolvelocalesoptions)): *string[] | Promise‹string[]›*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ItemArrayLike](README.md#itemarraylike) |
`locales` | any[] |
`options?` | [ResolveLocalesOptions](README.md#resolvelocalesoptions) |

###  resolvePaths

• **resolvePaths**: *function* = {} as (
      paths: any[],
      options?: ResolvePathsOptions,
    ) => string[] | Promise<string[]>

*Inherited from [Base](README.md#abstract-base).[resolvePaths](README.md#resolvepaths)*

*Defined in [src/lib/i18n-util/types.ts:316](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L316)*

#### Type declaration:

▸ (`paths`: any[], `options?`: [ResolvePathsOptions](README.md#resolvepathsoptions)): *string[] | Promise‹string[]›*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | any[] |
`options?` | [ResolvePathsOptions](README.md#resolvepathsoptions) |

###  resolveValues

• **resolveValues**: *function* = {} as (
      items: AI_Item.ItemArrayLike,
      values: any[],
      options?: ResolveValuesOptions,
    ) => any[] | Promise<any[]>

*Defined in [src/lib/i18n-util/types.ts:338](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L338)*

#### Type declaration:

▸ (`items`: [ItemArrayLike](README.md#itemarraylike), `values`: any[], `options?`: [ResolveValuesOptions](README.md#resolvevaluesoptions)): *any[] | Promise‹any[]›*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ItemArrayLike](README.md#itemarraylike) |
`values` | any[] |
`options?` | [ResolveValuesOptions](README.md#resolvevaluesoptions) |

###  schemator

• **schemator**: *[Schemator](README.md#abstract-schemator)‹›* = {} as Schemator

*Inherited from [Base](README.md#abstract-base).[schemator](README.md#schemator)*

*Defined in [src/lib/i18n-util/types.ts:296](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L296)*

###  validator

• **validator**: *[Validator](README.md#abstract-validator)‹›* = {} as Validator

*Inherited from [Base](README.md#abstract-base).[validator](README.md#validator)*

*Defined in [src/lib/i18n-util/types.ts:297](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L297)*

###  valueResolver

• **valueResolver**: *[ValueResolver](README.md#abstract-valueresolver)‹›* = {} as ValueResolver

*Inherited from [Base](README.md#abstract-base).[valueResolver](README.md#valueresolver)*

*Defined in [src/lib/i18n-util/types.ts:295](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L295)*

### `Abstract` DefinitionLoader

• **DefinitionLoader**:

*Defined in [src/lib/i18n-util/types.ts:701](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L701)*

###  callback

• **callback**: *function* = {} as (...args: any[]) => R | Promise<UnwrapPromise<R>>

*Inherited from [Loader](README.md#abstract-loader).[callback](README.md#callback)*

*Defined in [src/lib/i18n-util/types.ts:686](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L686)*

#### Type declaration:

▸ (...`args`: any[]): *R | Promise‹[UnwrapPromise](README.md#unwrappromise)‹R››*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

###  i18nUtil

• **i18nUtil**: *T* = {} as T

*Inherited from [Loader](README.md#abstract-loader).[i18nUtil](README.md#i18nutil)*

*Defined in [src/lib/i18n-util/types.ts:684](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L684)*

###  loadFromFiles

• **loadFromFiles**: *function* = {} as (
      paths: any[],
      options?: DefinitionOptions,
    ) => R | Promise<UnwrapPromise<R>>

*Overrides [Loader](README.md#abstract-loader).[loadFromFiles](README.md#loadfromfiles)*

*Defined in [src/lib/i18n-util/types.ts:706](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L706)*

#### Type declaration:

▸ (`paths`: any[], `options?`: [DefinitionOptions](README.md#definitionoptions)): *R | Promise‹[UnwrapPromise](README.md#unwrappromise)‹R››*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | any[] |
`options?` | [DefinitionOptions](README.md#definitionoptions) |

###  loadFromItems

• **loadFromItems**: *function* = {} as (
      definitions: DefItemArrayLike,
    ) => R | Promise<UnwrapPromise<R>>

*Overrides [Loader](README.md#abstract-loader).[loadFromItems](README.md#loadfromitems)*

*Defined in [src/lib/i18n-util/types.ts:711](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L711)*

#### Type declaration:

▸ (`definitions`: [DefItemArrayLike](README.md#defitemarraylike)): *R | Promise‹[UnwrapPromise](README.md#unwrappromise)‹R››*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [DefItemArrayLike](README.md#defitemarraylike) |

###  loadFromObjects

• **loadFromObjects**: *function* = {} as (
      objects: AnyObj[],
      options?: I_Item.FromObjectOptions<DefItem>,
    ) => R | Promise<UnwrapPromise<R>>

*Overrides [Loader](README.md#abstract-loader).[loadFromObjects](README.md#loadfromobjects)*

*Defined in [src/lib/i18n-util/types.ts:715](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L715)*

#### Type declaration:

▸ (`objects`: [AnyObj](README.md#anyobj)[], `options?`: [FromObjectOptions](README.md#fromobjectoptions)‹[DefItem](README.md#defitem)›): *R | Promise‹[UnwrapPromise](README.md#unwrappromise)‹R››*

**Parameters:**

Name | Type |
------ | ------ |
`objects` | [AnyObj](README.md#anyobj)[] |
`options?` | [FromObjectOptions](README.md#fromobjectoptions)‹[DefItem](README.md#defitem)› |

### `Abstract` I18nUtil

• **I18nUtil**:

*Defined in [src/lib/i18n-util/types.ts:475](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L475)*

*Defined in [src/lib/i18n-util/types.ts:481](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L481)*

Main class for working with definitions and the files where these items
are defined.

###  adaptors

• **adaptors**: *[Collection](README.md#abstract-collection)‹›* = {} as Adaptors

*Inherited from [Base](README.md#abstract-base).[adaptors](README.md#adaptors)*

*Overrides [Base](README.md#abstract-base).[adaptors](README.md#adaptors)*

*Defined in [src/lib/i18n-util/types.ts:291](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L291)*

###  addAdaptor

• **addAdaptor**: *function* = {} as (
      params: Parameters<Adaptors['add']>[0],
    ) => ReturnType<Adaptors['add']>

*Inherited from [Base](README.md#abstract-base).[addAdaptor](README.md#addadaptor)*

*Overrides [Base](README.md#abstract-base).[addAdaptor](README.md#addadaptor)*

*Defined in [src/lib/i18n-util/types.ts:300](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L300)*

#### Type declaration:

▸ (`params`: Parameters<Adaptors["add"]>[0]): *ReturnType‹Adaptors["add"]›*

**Parameters:**

Name | Type |
------ | ------ |
`params` | Parameters<Adaptors["add"]>[0] |

###  addAdaptors

• **addAdaptors**: *function* = {} as (
      paramsList: Parameters<Adaptors['add']>[0][],
    ) => ReturnType<Adaptors['add']>

*Inherited from [Base](README.md#abstract-base).[addAdaptors](README.md#addadaptors)*

*Overrides [Base](README.md#abstract-base).[addAdaptors](README.md#addadaptors)*

*Defined in [src/lib/i18n-util/types.ts:304](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L304)*

#### Type declaration:

▸ (`paramsList`: Parameters<Adaptors["add"]>[0][]): *ReturnType‹Adaptors["add"]›*

**Parameters:**

Name | Type |
------ | ------ |
`paramsList` | Parameters<Adaptors["add"]>[0][] |

###  addLocale

• **addLocale**: *function* = {} as (
      definitions: DefItemArrayLike,
      locale: string,
      options?: AddLocaleOptions<DefItem>,
    ) => DefItem[] | Promise<DefItem[]>

*Defined in [src/lib/i18n-util/types.ts:517](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L517)*

#### Type declaration:

▸ (`definitions`: [DefItemArrayLike](README.md#defitemarraylike), `locale`: string, `options?`: [AddLocaleOptions](README.md#addlocaleoptions)‹[DefItem](README.md#defitem)›): *[DefItem](README.md#defitem)[] | Promise‹[DefItem](README.md#defitem)[]›*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [DefItemArrayLike](README.md#defitemarraylike) |
`locale` | string |
`options?` | [AddLocaleOptions](README.md#addlocaleoptions)‹[DefItem](README.md#defitem)› |

###  addLocales

• **addLocales**: *function* = {} as (
      definitions: DefItemArrayLike,
      locale: string[],
      options?: AddLocaleOptions<DefItem>,
    ) => DefItem[] | Promise<DefItem[]>

*Defined in [src/lib/i18n-util/types.ts:523](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L523)*

#### Type declaration:

▸ (`definitions`: [DefItemArrayLike](README.md#defitemarraylike), `locale`: string[], `options?`: [AddLocaleOptions](README.md#addlocaleoptions)‹[DefItem](README.md#defitem)›): *[DefItem](README.md#defitem)[] | Promise‹[DefItem](README.md#defitem)[]›*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [DefItemArrayLike](README.md#defitemarraylike) |
`locale` | string[] |
`options?` | [AddLocaleOptions](README.md#addlocaleoptions)‹[DefItem](README.md#defitem)› |

###  clearLocale

• **clearLocale**: *function* = {} as (
      definitions: DefItemArrayLike,
      locale: string,
      options?: ClearLocaleOptions,
    ) => DefItem[] | Promise<DefItem[]>

*Defined in [src/lib/i18n-util/types.ts:541](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L541)*

#### Type declaration:

▸ (`definitions`: [DefItemArrayLike](README.md#defitemarraylike), `locale`: string, `options?`: [ClearLocaleOptions](README.md#clearlocaleoptions)): *[DefItem](README.md#defitem)[] | Promise‹[DefItem](README.md#defitem)[]›*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [DefItemArrayLike](README.md#defitemarraylike) |
`locale` | string |
`options?` | [ClearLocaleOptions](README.md#clearlocaleoptions) |

###  clearLocales

• **clearLocales**: *function* = {} as (
      definitions: DefItemArrayLike,
      locale: string[],
      options?: ClearLocaleOptions,
    ) => DefItem[] | Promise<DefItem[]>

*Defined in [src/lib/i18n-util/types.ts:547](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L547)*

#### Type declaration:

▸ (`definitions`: [DefItemArrayLike](README.md#defitemarraylike), `locale`: string[], `options?`: [ClearLocaleOptions](README.md#clearlocaleoptions)): *[DefItem](README.md#defitem)[] | Promise‹[DefItem](README.md#defitem)[]›*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [DefItemArrayLike](README.md#defitemarraylike) |
`locale` | string[] |
`options?` | [ClearLocaleOptions](README.md#clearlocaleoptions) |

###  definitions

• **definitions**: *function* = {} as (
      paths: string[],
      options?: DefinitionOptions,
    ) => DefItem[] | Promise<DefItem[]>

*Defined in [src/lib/i18n-util/types.ts:482](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L482)*

#### Type declaration:

▸ (`paths`: string[], `options?`: [DefinitionOptions](README.md#definitionoptions)): *[DefItem](README.md#defitem)[] | Promise‹[DefItem](README.md#defitem)[]›*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | string[] |
`options?` | [DefinitionOptions](README.md#definitionoptions) |

###  drop

• **drop**: *function* = {} as (
      definitions: DefItemArrayLike,
      options?: PatchOptions<DefItem>,
    ) => void | any

*Defined in [src/lib/i18n-util/types.ts:507](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L507)*

#### Type declaration:

▸ (`definitions`: [DefItemArrayLike](README.md#defitemarraylike), `options?`: [PatchOptions](README.md#patchoptions)‹[DefItem](README.md#defitem)›): *void | any*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [DefItemArrayLike](README.md#defitemarraylike) |
`options?` | [PatchOptions](README.md#patchoptions)‹[DefItem](README.md#defitem)› |

###  dropFrom

• **dropFrom**: *function* = {} as (
      definitions: DefItemArrayLike,
      options?: DropOptions,
    ) => DefinitionLoader<I18nUtil, ReturnType<I18nUtil['drop']>>

*Defined in [src/lib/i18n-util/types.ts:512](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L512)*

#### Type declaration:

▸ (`definitions`: [DefItemArrayLike](README.md#defitemarraylike), `options?`: [DropOptions](README.md#dropoptions)): *[DefinitionLoader](README.md#abstract-definitionloader)‹[I18nUtil](README.md#abstract-i18nutil), ReturnType‹I18nUtil["drop"]››*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [DefItemArrayLike](README.md#defitemarraylike) |
`options?` | [DropOptions](README.md#dropoptions) |

###  keyResolver

• **keyResolver**: *[KeyResolver](README.md#abstract-keyresolver)‹›* = {} as KeyResolver

*Inherited from [Base](README.md#abstract-base).[keyResolver](README.md#keyresolver)*

*Overrides [Base](README.md#abstract-base).[keyResolver](README.md#keyresolver)*

*Defined in [src/lib/i18n-util/types.ts:294](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L294)*

###  locale

• **locale**: *function* = {} as (
      items: AI_Item.ItemArrayLike,
      locale: string,
      options?: LocaleOptions,
    ) => DefItem[] | Promise<DefItem[]>

*Inherited from [ItemProcessor](README.md#abstract-itemprocessor).[locale](README.md#locale)*

*Defined in [src/lib/i18n-util/types.ts:378](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L378)*

#### Type declaration:

▸ (`items`: [ItemArrayLike](README.md#itemarraylike), `locale`: string, `options?`: [LocaleOptions](README.md#localeoptions)): *[DefItem](README.md#defitem)[] | Promise‹[DefItem](README.md#defitem)[]›*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ItemArrayLike](README.md#itemarraylike) |
`locale` | string |
`options?` | [LocaleOptions](README.md#localeoptions) |

###  localeResolver

• **localeResolver**: *[LocaleResolver](README.md#abstract-localeresolver)‹›* = {} as LocaleResolver

*Inherited from [Base](README.md#abstract-base).[localeResolver](README.md#localeresolver)*

*Overrides [Base](README.md#abstract-base).[localeResolver](README.md#localeresolver)*

*Defined in [src/lib/i18n-util/types.ts:293](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L293)*

###  locales

• **locales**: *function* = {} as (
      items: I_Item.ItemArrayLike,
      locales: string[],
      options?: LocaleOptions,
    ) => DefItem[] | Promise<DefItem[]>

*Inherited from [ItemProcessor](README.md#abstract-itemprocessor).[locales](README.md#locales)*

*Defined in [src/lib/i18n-util/types.ts:384](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L384)*

#### Type declaration:

▸ (`items`: [ItemArrayLike](README.md#itemarraylike), `locales`: string[], `options?`: [LocaleOptions](README.md#localeoptions)): *[DefItem](README.md#defitem)[] | Promise‹[DefItem](README.md#defitem)[]›*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ItemArrayLike](README.md#itemarraylike) |
`locales` | string[] |
`options?` | [LocaleOptions](README.md#localeoptions) |

###  master

• **master**: *function* = {} as (
      items: AI_Item.ItemArrayLike,
      options?: MasterOptions,
    ) => DefItem[]

*Inherited from [ItemProcessor](README.md#abstract-itemprocessor).[master](README.md#master)*

*Defined in [src/lib/i18n-util/types.ts:373](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L373)*

#### Type declaration:

▸ (`items`: [ItemArrayLike](README.md#itemarraylike), `options?`: [MasterOptions](README.md#masteroptions)): *[DefItem](README.md#defitem)[]*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ItemArrayLike](README.md#itemarraylike) |
`options?` | [MasterOptions](README.md#masteroptions) |

###  missingItems

• **missingItems**: *function* = {} as (
      definitions: DefItemArrayLike,
      options?: MissingItemsOptions,
    ) => DefItem[]

*Inherited from [ItemProcessor](README.md#abstract-itemprocessor).[missingItems](README.md#missingitems)*

*Defined in [src/lib/i18n-util/types.ts:395](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L395)*

#### Type declaration:

▸ (`definitions`: [DefItemArrayLike](README.md#defitemarraylike), `options?`: [MissingItemsOptions](README.md#missingitemsoptions)): *[DefItem](README.md#defitem)[]*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [DefItemArrayLike](README.md#defitemarraylike) |
`options?` | [MissingItemsOptions](README.md#missingitemsoptions) |

###  missingLocales

• **missingLocales**: *function* = {} as (
      definitions: DefItemArrayLike,
      options?: MissingLocalesOptions,
    ) => string[]

*Inherited from [ItemProcessor](README.md#abstract-itemprocessor).[missingLocales](README.md#missinglocales)*

*Defined in [src/lib/i18n-util/types.ts:400](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L400)*

#### Type declaration:

▸ (`definitions`: [DefItemArrayLike](README.md#defitemarraylike), `options?`: [MissingLocalesOptions](README.md#missinglocalesoptions)): *string[]*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [DefItemArrayLike](README.md#defitemarraylike) |
`options?` | [MissingLocalesOptions](README.md#missinglocalesoptions) |

###  options

• **options**: *object* = {} as AnyObj

*Inherited from [Base](README.md#abstract-base).[options](README.md#options)*

*Overrides [Base](README.md#abstract-base).[options](README.md#options)*

*Defined in [src/lib/i18n-util/types.ts:298](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L298)*

#### Type declaration:

* \[ **key**: *number*\]: V

###  patch

• **patch**: *function* = {} as (
      definitions: DefItemArrayLike,
      options?: PatchOptions<DefItem>,
    ) => void | any | Promise<void | any>

*Defined in [src/lib/i18n-util/types.ts:497](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L497)*

#### Type declaration:

▸ (`definitions`: [DefItemArrayLike](README.md#defitemarraylike), `options?`: [PatchOptions](README.md#patchoptions)‹[DefItem](README.md#defitem)›): *void | any | Promise‹void | any›*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [DefItemArrayLike](README.md#defitemarraylike) |
`options?` | [PatchOptions](README.md#patchoptions)‹[DefItem](README.md#defitem)› |

###  patchTo

• **patchTo**: *function* = {} as (
      definitions: DefItemArrayLike,
      options?: PatchOptions<DefItem>,
    ) => DefinitionLoader<I18nUtil, ReturnType<I18nUtil['patch']>>

*Defined in [src/lib/i18n-util/types.ts:502](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L502)*

#### Type declaration:

▸ (`definitions`: [DefItemArrayLike](README.md#defitemarraylike), `options?`: [PatchOptions](README.md#patchoptions)‹[DefItem](README.md#defitem)›): *[DefinitionLoader](README.md#abstract-definitionloader)‹[I18nUtil](README.md#abstract-i18nutil), ReturnType‹I18nUtil["patch"]››*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [DefItemArrayLike](README.md#defitemarraylike) |
`options?` | [PatchOptions](README.md#patchoptions)‹[DefItem](README.md#defitem)› |

###  pathResolver

• **pathResolver**: *[PathResolver](README.md#abstract-pathresolver)‹›* = {} as PathResolver

*Inherited from [Base](README.md#abstract-base).[pathResolver](README.md#pathresolver)*

*Overrides [Base](README.md#abstract-base).[pathResolver](README.md#pathresolver)*

*Defined in [src/lib/i18n-util/types.ts:292](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L292)*

###  removeAdaptor

• **removeAdaptor**: *function* = {} as (
      name: Parameters<Adaptors['delete']>[0],
    ) => ReturnType<Adaptors['delete']>

*Inherited from [Base](README.md#abstract-base).[removeAdaptor](README.md#removeadaptor)*

*Overrides [Base](README.md#abstract-base).[removeAdaptor](README.md#removeadaptor)*

*Defined in [src/lib/i18n-util/types.ts:308](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L308)*

#### Type declaration:

▸ (`name`: Parameters<Adaptors["delete"]>[0]): *ReturnType‹Adaptors["delete"]›*

**Parameters:**

Name | Type |
------ | ------ |
`name` | Parameters<Adaptors["delete"]>[0] |

###  removeAdaptors

• **removeAdaptors**: *function* = {} as (
      names: Parameters<Adaptors['delete']>[0][],
    ) => ReturnType<Adaptors['delete']>

*Inherited from [Base](README.md#abstract-base).[removeAdaptors](README.md#removeadaptors)*

*Overrides [Base](README.md#abstract-base).[removeAdaptors](README.md#removeadaptors)*

*Defined in [src/lib/i18n-util/types.ts:312](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L312)*

#### Type declaration:

▸ (`names`: Parameters<Adaptors["delete"]>[0][]): *ReturnType‹Adaptors["delete"]›*

**Parameters:**

Name | Type |
------ | ------ |
`names` | Parameters<Adaptors["delete"]>[0][] |

###  removeLocale

• **removeLocale**: *function* = {} as (
      definitions: DefItemArrayLike,
      locale: string,
      options?: RemoveLocaleOptions,
    ) => DefItem[] | Promise<DefItem[]>

*Defined in [src/lib/i18n-util/types.ts:529](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L529)*

#### Type declaration:

▸ (`definitions`: [DefItemArrayLike](README.md#defitemarraylike), `locale`: string, `options?`: [RemoveLocaleOptions](README.md#removelocaleoptions)): *[DefItem](README.md#defitem)[] | Promise‹[DefItem](README.md#defitem)[]›*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [DefItemArrayLike](README.md#defitemarraylike) |
`locale` | string |
`options?` | [RemoveLocaleOptions](README.md#removelocaleoptions) |

###  removeLocales

• **removeLocales**: *function* = {} as (
      definitions: DefItemArrayLike,
      locale: string[],
      options?: RemoveLocaleOptions,
    ) => DefItem[] | Promise<DefItem[]>

*Defined in [src/lib/i18n-util/types.ts:535](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L535)*

#### Type declaration:

▸ (`definitions`: [DefItemArrayLike](README.md#defitemarraylike), `locale`: string[], `options?`: [RemoveLocaleOptions](README.md#removelocaleoptions)): *[DefItem](README.md#defitem)[] | Promise‹[DefItem](README.md#defitem)[]›*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [DefItemArrayLike](README.md#defitemarraylike) |
`locale` | string[] |
`options?` | [RemoveLocaleOptions](README.md#removelocaleoptions) |

###  resolveKeys

• **resolveKeys**: *function* = {} as (
      items: AI_Item.ItemArrayLike,
      keys: any[],
      options?: ResolveKeysOptions,
    ) => string[][] | Promise<string[][]>

*Inherited from [Base](README.md#abstract-base).[resolveKeys](README.md#resolvekeys)*

*Overrides [Base](README.md#abstract-base).[resolveKeys](README.md#resolvekeys)*

*Defined in [src/lib/i18n-util/types.ts:332](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L332)*

#### Type declaration:

▸ (`items`: [ItemArrayLike](README.md#itemarraylike), `keys`: any[], `options?`: [ResolveKeysOptions](README.md#resolvekeysoptions)): *string[][] | Promise‹string[][]›*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ItemArrayLike](README.md#itemarraylike) |
`keys` | any[] |
`options?` | [ResolveKeysOptions](README.md#resolvekeysoptions) |

###  resolveLocales

• **resolveLocales**: *function* = {} as (
      items: AI_Item.ItemArrayLike,
      locales: any[],
      options?: ResolveLocalesOptions,
    ) => string[] | Promise<string[]>

*Inherited from [Base](README.md#abstract-base).[resolveLocales](README.md#resolvelocales)*

*Overrides [Base](README.md#abstract-base).[resolveLocales](README.md#resolvelocales)*

*Defined in [src/lib/i18n-util/types.ts:326](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L326)*

#### Type declaration:

▸ (`items`: [ItemArrayLike](README.md#itemarraylike), `locales`: any[], `options?`: [ResolveLocalesOptions](README.md#resolvelocalesoptions)): *string[] | Promise‹string[]›*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ItemArrayLike](README.md#itemarraylike) |
`locales` | any[] |
`options?` | [ResolveLocalesOptions](README.md#resolvelocalesoptions) |

###  resolvePaths

• **resolvePaths**: *function* = {} as (
      paths: any[],
      options?: ResolvePathsOptions,
    ) => string[] | Promise<string[]>

*Inherited from [Base](README.md#abstract-base).[resolvePaths](README.md#resolvepaths)*

*Overrides [Base](README.md#abstract-base).[resolvePaths](README.md#resolvepaths)*

*Defined in [src/lib/i18n-util/types.ts:316](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L316)*

#### Type declaration:

▸ (`paths`: any[], `options?`: [ResolvePathsOptions](README.md#resolvepathsoptions)): *string[] | Promise‹string[]›*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | any[] |
`options?` | [ResolvePathsOptions](README.md#resolvepathsoptions) |

###  resolveValues

• **resolveValues**: *function* = {} as (
      items: AI_Item.ItemArrayLike,
      values: any[],
      options?: ResolveValuesOptions,
    ) => any[] | Promise<any[]>

*Inherited from [Base](README.md#abstract-base).[resolveValues](README.md#resolvevalues)*

*Overrides [Base](README.md#abstract-base).[resolveValues](README.md#resolvevalues)*

*Defined in [src/lib/i18n-util/types.ts:338](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L338)*

#### Type declaration:

▸ (`items`: [ItemArrayLike](README.md#itemarraylike), `values`: any[], `options?`: [ResolveValuesOptions](README.md#resolvevaluesoptions)): *any[] | Promise‹any[]›*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ItemArrayLike](README.md#itemarraylike) |
`values` | any[] |
`options?` | [ResolveValuesOptions](README.md#resolvevaluesoptions) |

###  schema

• **schema**: *function* = {} as (
      items: AI_Item.ItemArrayLike,
      options?: SchemaOptions,
    ) => any

*Defined in [src/lib/i18n-util/types.ts:558](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L558)*

#### Type declaration:

▸ (`items`: [ItemArrayLike](README.md#itemarraylike), `options?`: [SchemaOptions](README.md#schemaoptions)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ItemArrayLike](README.md#itemarraylike) |
`options?` | [SchemaOptions](README.md#schemaoptions) |

###  schemator

• **schemator**: *[Schemator](README.md#abstract-schemator)‹›* = {} as Schemator

*Inherited from [Base](README.md#abstract-base).[schemator](README.md#schemator)*

*Overrides [Base](README.md#abstract-base).[schemator](README.md#schemator)*

*Defined in [src/lib/i18n-util/types.ts:296](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L296)*

###  stats

• **stats**: *function* = {} as (
      definitions: DefItemArrayLike,
      usage: UseItemArrayLike,
      options?: I_I18nUtil.StatsOptions,
    ) => KeyStats

*Inherited from [ItemProcessor](README.md#abstract-itemprocessor).[stats](README.md#stats)*

*Defined in [src/lib/i18n-util/types.ts:405](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L405)*

#### Type declaration:

▸ (`definitions`: [DefItemArrayLike](README.md#defitemarraylike), `usage`: [UseItemArrayLike](README.md#useitemarraylike), `options?`: [StatsOptions](README.md#statsoptions)): *[KeyStats](README.md#abstract-keystats)*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [DefItemArrayLike](README.md#defitemarraylike) |
`usage` | [UseItemArrayLike](README.md#useitemarraylike) |
`options?` | [StatsOptions](README.md#statsoptions) |

###  statsAgainst

• **statsAgainst**: *function* = {} as (
      definitions: DefItemArrayLike,
      options?: StatsOptions,
    ) => UsageLoader<I18nUtil, ReturnType<I18nUtil['stats']>>

*Defined in [src/lib/i18n-util/types.ts:553](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L553)*

#### Type declaration:

▸ (`definitions`: [DefItemArrayLike](README.md#defitemarraylike), `options?`: [StatsOptions](README.md#statsoptions)): *[UsageLoader](README.md#abstract-usageloader)‹[I18nUtil](README.md#abstract-i18nutil), ReturnType‹I18nUtil["stats"]››*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [DefItemArrayLike](README.md#defitemarraylike) |
`options?` | [StatsOptions](README.md#statsoptions) |

###  toObject

• **toObject**: *function* = {} as (
      items: AI_Item.ItemArrayLike,
      options?: ToObjectOptions,
    ) => AI_Item.ToObjectResultAny

*Inherited from [ItemProcessor](README.md#abstract-itemprocessor).[toObject](README.md#toobject)*

*Defined in [src/lib/i18n-util/types.ts:390](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L390)*

#### Type declaration:

▸ (`items`: [ItemArrayLike](README.md#itemarraylike), `options?`: [ToObjectOptions](README.md#toobjectoptions)): *[ToObjectResultAny](README.md#toobjectresultany)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ItemArrayLike](README.md#itemarraylike) |
`options?` | [ToObjectOptions](README.md#toobjectoptions) |

###  usage

• **usage**: *function* = {} as (
      paths: string[],
      options?: UsageOptions,
    ) => UseItem[] | Promise<UseItem[]>

*Defined in [src/lib/i18n-util/types.ts:487](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L487)*

#### Type declaration:

▸ (`paths`: string[], `options?`: [UsageOptions](README.md#usageoptions)): *[UseItem](README.md#useitem)[] | Promise‹[UseItem](README.md#useitem)[]›*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | string[] |
`options?` | [UsageOptions](README.md#usageoptions) |

###  usageAnalyze

• **usageAnalyze**: *function* = {} as (
      definitions: DefItemArrayLike,
      usage: UseItemArrayLike,
      options?: UsageAnalyzeOptions,
    ) => UsageAnalyzeReturn | Promise<UsageAnalyzeReturn>

*Inherited from [ItemProcessor](README.md#abstract-itemprocessor).[usageAnalyze](README.md#usageanalyze)*

*Defined in [src/lib/i18n-util/types.ts:411](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L411)*

#### Type declaration:

▸ (`definitions`: [DefItemArrayLike](README.md#defitemarraylike), `usage`: [UseItemArrayLike](README.md#useitemarraylike), `options?`: [UsageAnalyzeOptions](README.md#usageanalyzeoptions)): *UsageAnalyzeReturn | Promise‹UsageAnalyzeReturn›*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [DefItemArrayLike](README.md#defitemarraylike) |
`usage` | [UseItemArrayLike](README.md#useitemarraylike) |
`options?` | [UsageAnalyzeOptions](README.md#usageanalyzeoptions) |

###  usageAnalyzeAgainst

• **usageAnalyzeAgainst**: *function* = {} as (
      definitions: DefItemArrayLike,
      options?: UsageAnalyzeOptions,
    ) => UsageLoader<I18nUtil, ReturnType<I18nUtil['usageAnalyze']>>

*Defined in [src/lib/i18n-util/types.ts:576](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L576)*

#### Type declaration:

▸ (`definitions`: [DefItemArrayLike](README.md#defitemarraylike), `options?`: [UsageAnalyzeOptions](README.md#usageanalyzeoptions)): *[UsageLoader](README.md#abstract-usageloader)‹[I18nUtil](README.md#abstract-i18nutil), ReturnType‹I18nUtil["usageAnalyze"]››*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [DefItemArrayLike](README.md#defitemarraylike) |
`options?` | [UsageAnalyzeOptions](README.md#usageanalyzeoptions) |

###  usageValidate

• **usageValidate**: *function* = {} as (
      definitions: DefItemArrayLike,
      usage: UseItemArrayLike,
      options?: UsageValidateOptions,
    ) => void

*Inherited from [ItemProcessor](README.md#abstract-itemprocessor).[usageValidate](README.md#usagevalidate)*

*Defined in [src/lib/i18n-util/types.ts:417](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L417)*

#### Type declaration:

▸ (`definitions`: [DefItemArrayLike](README.md#defitemarraylike), `usage`: [UseItemArrayLike](README.md#useitemarraylike), `options?`: [UsageValidateOptions](README.md#usagevalidateoptions)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [DefItemArrayLike](README.md#defitemarraylike) |
`usage` | [UseItemArrayLike](README.md#useitemarraylike) |
`options?` | [UsageValidateOptions](README.md#usagevalidateoptions) |

###  usageValidateAgainst

• **usageValidateAgainst**: *function* = {} as (
      definitions: DefItemArrayLike,
      options?: UsageValidateOptions,
    ) => UsageLoader<I18nUtil, ReturnType<I18nUtil['usageValidate']>>

*Defined in [src/lib/i18n-util/types.ts:581](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L581)*

#### Type declaration:

▸ (`definitions`: [DefItemArrayLike](README.md#defitemarraylike), `options?`: [UsageValidateOptions](README.md#usagevalidateoptions)): *[UsageLoader](README.md#abstract-usageloader)‹[I18nUtil](README.md#abstract-i18nutil), ReturnType‹I18nUtil["usageValidate"]››*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [DefItemArrayLike](README.md#defitemarraylike) |
`options?` | [UsageValidateOptions](README.md#usagevalidateoptions) |

###  validate

• **validate**: *function* = {} as (
      items: AI_Item.ItemArrayLike,
      schema: ValidateOptions,
      options?: AnyObj,
    ) => void

*Defined in [src/lib/i18n-util/types.ts:563](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L563)*

#### Type declaration:

▸ (`items`: [ItemArrayLike](README.md#itemarraylike), `schema`: [ValidateOptions](README.md#validateoptions), `options?`: [AnyObj](README.md#anyobj)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ItemArrayLike](README.md#itemarraylike) |
`schema` | [ValidateOptions](README.md#validateoptions) |
`options?` | [AnyObj](README.md#anyobj) |

###  validateAgainst

• **validateAgainst**: *function* = {} as (
      items: AI_Item.ItemArrayLike,
      options?: ValidateAgainstOptions,
    ) =>
      | DefinitionLoader<I18nUtil, ReturnType<I18nUtil['validate']>>
      | UsageLoader<I18nUtil, ReturnType<I18nUtil['validate']>>

*Defined in [src/lib/i18n-util/types.ts:569](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L569)*

#### Type declaration:

▸ (`items`: [ItemArrayLike](README.md#itemarraylike), `options?`: [ValidateAgainstOptions](README.md#validateagainstoptions)): *[DefinitionLoader](README.md#abstract-definitionloader)‹[I18nUtil](README.md#abstract-i18nutil), ReturnType‹I18nUtil["validate"]›› | [UsageLoader](README.md#abstract-usageloader)‹[I18nUtil](README.md#abstract-i18nutil), ReturnType‹I18nUtil["validate"]››*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ItemArrayLike](README.md#itemarraylike) |
`options?` | [ValidateAgainstOptions](README.md#validateagainstoptions) |

###  validator

• **validator**: *[Validator](README.md#abstract-validator)‹›* = {} as Validator

*Inherited from [Base](README.md#abstract-base).[validator](README.md#validator)*

*Overrides [Base](README.md#abstract-base).[validator](README.md#validator)*

*Defined in [src/lib/i18n-util/types.ts:297](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L297)*

###  valueResolver

• **valueResolver**: *[ValueResolver](README.md#abstract-valueresolver)‹›* = {} as ValueResolver

*Inherited from [Base](README.md#abstract-base).[valueResolver](README.md#valueresolver)*

*Overrides [Base](README.md#abstract-base).[valueResolver](README.md#valueresolver)*

*Defined in [src/lib/i18n-util/types.ts:295](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L295)*

###  write

• **write**: *function* = {} as (
      definitions: DefItemArrayLike,
      options?: WriteOptions,
    ) => void | any | Promise<void | any>

*Defined in [src/lib/i18n-util/types.ts:492](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L492)*

#### Type declaration:

▸ (`definitions`: [DefItemArrayLike](README.md#defitemarraylike), `options?`: [WriteOptions](README.md#writeoptions)): *void | any | Promise‹void | any›*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [DefItemArrayLike](README.md#defitemarraylike) |
`options?` | [WriteOptions](README.md#writeoptions) |

### `Abstract` ItemProcessor

• **ItemProcessor**:

*Defined in [src/lib/i18n-util/types.ts:371](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L371)*

I18nUtil class with functionalities for working with definition and usage
items in the context of I18nUtil

###  adaptors

• **adaptors**: *[Collection](README.md#abstract-collection)‹›* = {} as Adaptors

*Inherited from [Base](README.md#abstract-base).[adaptors](README.md#adaptors)*

*Defined in [src/lib/i18n-util/types.ts:291](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L291)*

###  addAdaptor

• **addAdaptor**: *function* = {} as (
      params: Parameters<Adaptors['add']>[0],
    ) => ReturnType<Adaptors['add']>

*Inherited from [Base](README.md#abstract-base).[addAdaptor](README.md#addadaptor)*

*Defined in [src/lib/i18n-util/types.ts:300](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L300)*

#### Type declaration:

▸ (`params`: Parameters<Adaptors["add"]>[0]): *ReturnType‹Adaptors["add"]›*

**Parameters:**

Name | Type |
------ | ------ |
`params` | Parameters<Adaptors["add"]>[0] |

###  addAdaptors

• **addAdaptors**: *function* = {} as (
      paramsList: Parameters<Adaptors['add']>[0][],
    ) => ReturnType<Adaptors['add']>

*Inherited from [Base](README.md#abstract-base).[addAdaptors](README.md#addadaptors)*

*Defined in [src/lib/i18n-util/types.ts:304](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L304)*

#### Type declaration:

▸ (`paramsList`: Parameters<Adaptors["add"]>[0][]): *ReturnType‹Adaptors["add"]›*

**Parameters:**

Name | Type |
------ | ------ |
`paramsList` | Parameters<Adaptors["add"]>[0][] |

###  keyResolver

• **keyResolver**: *[KeyResolver](README.md#abstract-keyresolver)‹›* = {} as KeyResolver

*Inherited from [Base](README.md#abstract-base).[keyResolver](README.md#keyresolver)*

*Defined in [src/lib/i18n-util/types.ts:294](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L294)*

###  locale

• **locale**: *function* = {} as (
      items: AI_Item.ItemArrayLike,
      locale: string,
      options?: LocaleOptions,
    ) => DefItem[] | Promise<DefItem[]>

*Defined in [src/lib/i18n-util/types.ts:378](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L378)*

#### Type declaration:

▸ (`items`: [ItemArrayLike](README.md#itemarraylike), `locale`: string, `options?`: [LocaleOptions](README.md#localeoptions)): *[DefItem](README.md#defitem)[] | Promise‹[DefItem](README.md#defitem)[]›*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ItemArrayLike](README.md#itemarraylike) |
`locale` | string |
`options?` | [LocaleOptions](README.md#localeoptions) |

###  localeResolver

• **localeResolver**: *[LocaleResolver](README.md#abstract-localeresolver)‹›* = {} as LocaleResolver

*Inherited from [Base](README.md#abstract-base).[localeResolver](README.md#localeresolver)*

*Defined in [src/lib/i18n-util/types.ts:293](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L293)*

###  locales

• **locales**: *function* = {} as (
      items: I_Item.ItemArrayLike,
      locales: string[],
      options?: LocaleOptions,
    ) => DefItem[] | Promise<DefItem[]>

*Defined in [src/lib/i18n-util/types.ts:384](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L384)*

#### Type declaration:

▸ (`items`: [ItemArrayLike](README.md#itemarraylike), `locales`: string[], `options?`: [LocaleOptions](README.md#localeoptions)): *[DefItem](README.md#defitem)[] | Promise‹[DefItem](README.md#defitem)[]›*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ItemArrayLike](README.md#itemarraylike) |
`locales` | string[] |
`options?` | [LocaleOptions](README.md#localeoptions) |

###  master

• **master**: *function* = {} as (
      items: AI_Item.ItemArrayLike,
      options?: MasterOptions,
    ) => DefItem[]

*Defined in [src/lib/i18n-util/types.ts:373](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L373)*

#### Type declaration:

▸ (`items`: [ItemArrayLike](README.md#itemarraylike), `options?`: [MasterOptions](README.md#masteroptions)): *[DefItem](README.md#defitem)[]*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ItemArrayLike](README.md#itemarraylike) |
`options?` | [MasterOptions](README.md#masteroptions) |

###  missingItems

• **missingItems**: *function* = {} as (
      definitions: DefItemArrayLike,
      options?: MissingItemsOptions,
    ) => DefItem[]

*Defined in [src/lib/i18n-util/types.ts:395](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L395)*

#### Type declaration:

▸ (`definitions`: [DefItemArrayLike](README.md#defitemarraylike), `options?`: [MissingItemsOptions](README.md#missingitemsoptions)): *[DefItem](README.md#defitem)[]*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [DefItemArrayLike](README.md#defitemarraylike) |
`options?` | [MissingItemsOptions](README.md#missingitemsoptions) |

###  missingLocales

• **missingLocales**: *function* = {} as (
      definitions: DefItemArrayLike,
      options?: MissingLocalesOptions,
    ) => string[]

*Defined in [src/lib/i18n-util/types.ts:400](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L400)*

#### Type declaration:

▸ (`definitions`: [DefItemArrayLike](README.md#defitemarraylike), `options?`: [MissingLocalesOptions](README.md#missinglocalesoptions)): *string[]*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [DefItemArrayLike](README.md#defitemarraylike) |
`options?` | [MissingLocalesOptions](README.md#missinglocalesoptions) |

###  options

• **options**: *object* = {} as AnyObj

*Inherited from [Base](README.md#abstract-base).[options](README.md#options)*

*Defined in [src/lib/i18n-util/types.ts:298](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L298)*

#### Type declaration:

* \[ **key**: *number*\]: V

###  pathResolver

• **pathResolver**: *[PathResolver](README.md#abstract-pathresolver)‹›* = {} as PathResolver

*Inherited from [Base](README.md#abstract-base).[pathResolver](README.md#pathresolver)*

*Defined in [src/lib/i18n-util/types.ts:292](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L292)*

###  removeAdaptor

• **removeAdaptor**: *function* = {} as (
      name: Parameters<Adaptors['delete']>[0],
    ) => ReturnType<Adaptors['delete']>

*Inherited from [Base](README.md#abstract-base).[removeAdaptor](README.md#removeadaptor)*

*Defined in [src/lib/i18n-util/types.ts:308](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L308)*

#### Type declaration:

▸ (`name`: Parameters<Adaptors["delete"]>[0]): *ReturnType‹Adaptors["delete"]›*

**Parameters:**

Name | Type |
------ | ------ |
`name` | Parameters<Adaptors["delete"]>[0] |

###  removeAdaptors

• **removeAdaptors**: *function* = {} as (
      names: Parameters<Adaptors['delete']>[0][],
    ) => ReturnType<Adaptors['delete']>

*Inherited from [Base](README.md#abstract-base).[removeAdaptors](README.md#removeadaptors)*

*Defined in [src/lib/i18n-util/types.ts:312](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L312)*

#### Type declaration:

▸ (`names`: Parameters<Adaptors["delete"]>[0][]): *ReturnType‹Adaptors["delete"]›*

**Parameters:**

Name | Type |
------ | ------ |
`names` | Parameters<Adaptors["delete"]>[0][] |

###  resolveKeys

• **resolveKeys**: *function* = {} as (
      items: AI_Item.ItemArrayLike,
      keys: any[],
      options?: ResolveKeysOptions,
    ) => string[][] | Promise<string[][]>

*Inherited from [Base](README.md#abstract-base).[resolveKeys](README.md#resolvekeys)*

*Defined in [src/lib/i18n-util/types.ts:332](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L332)*

#### Type declaration:

▸ (`items`: [ItemArrayLike](README.md#itemarraylike), `keys`: any[], `options?`: [ResolveKeysOptions](README.md#resolvekeysoptions)): *string[][] | Promise‹string[][]›*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ItemArrayLike](README.md#itemarraylike) |
`keys` | any[] |
`options?` | [ResolveKeysOptions](README.md#resolvekeysoptions) |

###  resolveLocales

• **resolveLocales**: *function* = {} as (
      items: AI_Item.ItemArrayLike,
      locales: any[],
      options?: ResolveLocalesOptions,
    ) => string[] | Promise<string[]>

*Inherited from [Base](README.md#abstract-base).[resolveLocales](README.md#resolvelocales)*

*Defined in [src/lib/i18n-util/types.ts:326](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L326)*

#### Type declaration:

▸ (`items`: [ItemArrayLike](README.md#itemarraylike), `locales`: any[], `options?`: [ResolveLocalesOptions](README.md#resolvelocalesoptions)): *string[] | Promise‹string[]›*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ItemArrayLike](README.md#itemarraylike) |
`locales` | any[] |
`options?` | [ResolveLocalesOptions](README.md#resolvelocalesoptions) |

###  resolvePaths

• **resolvePaths**: *function* = {} as (
      paths: any[],
      options?: ResolvePathsOptions,
    ) => string[] | Promise<string[]>

*Inherited from [Base](README.md#abstract-base).[resolvePaths](README.md#resolvepaths)*

*Defined in [src/lib/i18n-util/types.ts:316](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L316)*

#### Type declaration:

▸ (`paths`: any[], `options?`: [ResolvePathsOptions](README.md#resolvepathsoptions)): *string[] | Promise‹string[]›*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | any[] |
`options?` | [ResolvePathsOptions](README.md#resolvepathsoptions) |

###  resolveValues

• **resolveValues**: *function* = {} as (
      items: AI_Item.ItemArrayLike,
      values: any[],
      options?: ResolveValuesOptions,
    ) => any[] | Promise<any[]>

*Inherited from [Base](README.md#abstract-base).[resolveValues](README.md#resolvevalues)*

*Defined in [src/lib/i18n-util/types.ts:338](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L338)*

#### Type declaration:

▸ (`items`: [ItemArrayLike](README.md#itemarraylike), `values`: any[], `options?`: [ResolveValuesOptions](README.md#resolvevaluesoptions)): *any[] | Promise‹any[]›*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ItemArrayLike](README.md#itemarraylike) |
`values` | any[] |
`options?` | [ResolveValuesOptions](README.md#resolvevaluesoptions) |

###  schemator

• **schemator**: *[Schemator](README.md#abstract-schemator)‹›* = {} as Schemator

*Inherited from [Base](README.md#abstract-base).[schemator](README.md#schemator)*

*Defined in [src/lib/i18n-util/types.ts:296](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L296)*

###  stats

• **stats**: *function* = {} as (
      definitions: DefItemArrayLike,
      usage: UseItemArrayLike,
      options?: I_I18nUtil.StatsOptions,
    ) => KeyStats

*Defined in [src/lib/i18n-util/types.ts:405](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L405)*

#### Type declaration:

▸ (`definitions`: [DefItemArrayLike](README.md#defitemarraylike), `usage`: [UseItemArrayLike](README.md#useitemarraylike), `options?`: [StatsOptions](README.md#statsoptions)): *[KeyStats](README.md#abstract-keystats)*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [DefItemArrayLike](README.md#defitemarraylike) |
`usage` | [UseItemArrayLike](README.md#useitemarraylike) |
`options?` | [StatsOptions](README.md#statsoptions) |

###  toObject

• **toObject**: *function* = {} as (
      items: AI_Item.ItemArrayLike,
      options?: ToObjectOptions,
    ) => AI_Item.ToObjectResultAny

*Defined in [src/lib/i18n-util/types.ts:390](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L390)*

#### Type declaration:

▸ (`items`: [ItemArrayLike](README.md#itemarraylike), `options?`: [ToObjectOptions](README.md#toobjectoptions)): *[ToObjectResultAny](README.md#toobjectresultany)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ItemArrayLike](README.md#itemarraylike) |
`options?` | [ToObjectOptions](README.md#toobjectoptions) |

###  usageAnalyze

• **usageAnalyze**: *function* = {} as (
      definitions: DefItemArrayLike,
      usage: UseItemArrayLike,
      options?: UsageAnalyzeOptions,
    ) => UsageAnalyzeReturn | Promise<UsageAnalyzeReturn>

*Defined in [src/lib/i18n-util/types.ts:411](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L411)*

#### Type declaration:

▸ (`definitions`: [DefItemArrayLike](README.md#defitemarraylike), `usage`: [UseItemArrayLike](README.md#useitemarraylike), `options?`: [UsageAnalyzeOptions](README.md#usageanalyzeoptions)): *UsageAnalyzeReturn | Promise‹UsageAnalyzeReturn›*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [DefItemArrayLike](README.md#defitemarraylike) |
`usage` | [UseItemArrayLike](README.md#useitemarraylike) |
`options?` | [UsageAnalyzeOptions](README.md#usageanalyzeoptions) |

###  usageValidate

• **usageValidate**: *function* = {} as (
      definitions: DefItemArrayLike,
      usage: UseItemArrayLike,
      options?: UsageValidateOptions,
    ) => void

*Defined in [src/lib/i18n-util/types.ts:417](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L417)*

#### Type declaration:

▸ (`definitions`: [DefItemArrayLike](README.md#defitemarraylike), `usage`: [UseItemArrayLike](README.md#useitemarraylike), `options?`: [UsageValidateOptions](README.md#usagevalidateoptions)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [DefItemArrayLike](README.md#defitemarraylike) |
`usage` | [UseItemArrayLike](README.md#useitemarraylike) |
`options?` | [UsageValidateOptions](README.md#usagevalidateoptions) |

###  validator

• **validator**: *[Validator](README.md#abstract-validator)‹›* = {} as Validator

*Inherited from [Base](README.md#abstract-base).[validator](README.md#validator)*

*Defined in [src/lib/i18n-util/types.ts:297](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L297)*

###  valueResolver

• **valueResolver**: *[ValueResolver](README.md#abstract-valueresolver)‹›* = {} as ValueResolver

*Inherited from [Base](README.md#abstract-base).[valueResolver](README.md#valueresolver)*

*Defined in [src/lib/i18n-util/types.ts:295](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L295)*

### `Abstract` KeyStats

• **KeyStats**:

*Defined in [src/lib/i18n-util/types.ts:766](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L766)*

###  definitions

• **definitions**: *[Item](README.md#item)‹›[]* = [] as DefItem[]

*Defined in [src/lib/i18n-util/types.ts:769](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L769)*

###  definitionsFiles

• **definitionsFiles**: *string[]* = [] as string[]

*Defined in [src/lib/i18n-util/types.ts:781](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L781)*

###  definitionsMissing

• **definitionsMissing**: *[Item](README.md#item)‹›[]* = [] as DefItem[]

*Defined in [src/lib/i18n-util/types.ts:780](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L780)*

###  definitionsUnused

• **definitionsUnused**: *[Item](README.md#item)‹›[]* = [] as DefItem[]

*Defined in [src/lib/i18n-util/types.ts:779](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L779)*

###  definitionsUsed

• **definitionsUsed**: *[Item](README.md#item)‹›[]* = [] as DefItem[]

*Defined in [src/lib/i18n-util/types.ts:778](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L778)*

###  keys

• **keys**: *[KeyStatsEntry](README.md#abstract-keystatsentry)‹›[]* = [] as KeyStatsEntry[]

*Defined in [src/lib/i18n-util/types.ts:770](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L770)*

###  keysIssues

• **keysIssues**: *[KeyStatsEntry](README.md#abstract-keystatsentry)‹›[]* = [] as KeyStatsEntry[]

*Defined in [src/lib/i18n-util/types.ts:773](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L773)*

###  keysUndefined

• **keysUndefined**: *[KeyStatsEntry](README.md#abstract-keystatsentry)‹›[]* = [] as KeyStatsEntry[]

*Defined in [src/lib/i18n-util/types.ts:772](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L772)*

###  keysUnused

• **keysUnused**: *[KeyStatsEntry](README.md#abstract-keystatsentry)‹›[]* = [] as KeyStatsEntry[]

*Defined in [src/lib/i18n-util/types.ts:771](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L771)*

###  locales

• **locales**: *string[]* = [] as string[]

*Defined in [src/lib/i18n-util/types.ts:767](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L767)*

###  usage

• **usage**: *[Item](README.md#item)‹›[]* = [] as UseItem[]

*Defined in [src/lib/i18n-util/types.ts:768](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L768)*

###  usageDefined

• **usageDefined**: *[Item](README.md#item)‹›[]* = [] as UseItem[]

*Defined in [src/lib/i18n-util/types.ts:774](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L774)*

###  usageFiles

• **usageFiles**: *string[]* = [] as string[]

*Defined in [src/lib/i18n-util/types.ts:777](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L777)*

###  usageMissing

• **usageMissing**: *[Item](README.md#item)‹›[]* = [] as UseItem[]

*Defined in [src/lib/i18n-util/types.ts:776](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L776)*

###  usageUndefined

• **usageUndefined**: *[Item](README.md#item)‹›[]* = [] as UseItem[]

*Defined in [src/lib/i18n-util/types.ts:775](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L775)*

### `Abstract` KeyStatsEntry

• **KeyStatsEntry**:

*Defined in [src/lib/i18n-util/types.ts:739](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L739)*

###  definitions

• **definitions**: *[Item](README.md#item)‹›[]* = [] as DefItem[]

*Defined in [src/lib/i18n-util/types.ts:746](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L746)*

###  definitionsDuplicates

• **definitionsDuplicates**: *[Map](classes/arraymap.md#static-map)‹string, [Item](README.md#item)‹›[]›* = {} as Map<string, DefItem[]>

*Defined in [src/lib/i18n-util/types.ts:750](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L750)*

###  definitionsFiles

• **definitionsFiles**: *string[]* = [] as string[]

*Defined in [src/lib/i18n-util/types.ts:752](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L752)*

###  definitionsMissing

• **definitionsMissing**: *[Item](README.md#item)‹›[]* = [] as DefItem[]

*Defined in [src/lib/i18n-util/types.ts:749](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L749)*

###  definitionsUnused

• **definitionsUnused**: *[Item](README.md#item)‹›[]* = [] as DefItem[]

*Defined in [src/lib/i18n-util/types.ts:748](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L748)*

###  definitionsUsed

• **definitionsUsed**: *[Item](README.md#item)‹›[]* = [] as DefItem[]

*Defined in [src/lib/i18n-util/types.ts:747](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L747)*

###  hasDuplicateDefinitions

• **hasDuplicateDefinitions**: *boolean* = {} as boolean

*Defined in [src/lib/i18n-util/types.ts:760](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L760)*

###  hasIssues

• **hasIssues**: *boolean* = {} as boolean

*Defined in [src/lib/i18n-util/types.ts:756](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L756)*

###  hasUndefinedUsage

• **hasUndefinedUsage**: *boolean* = {} as boolean

*Defined in [src/lib/i18n-util/types.ts:763](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L763)*

###  hasUnusedDefinitions

• **hasUnusedDefinitions**: *boolean* = {} as boolean

*Defined in [src/lib/i18n-util/types.ts:759](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L759)*

###  isDefined

• **isDefined**: *boolean* = {} as boolean

*Defined in [src/lib/i18n-util/types.ts:757](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L757)*

###  isMissingDefinitions

• **isMissingDefinitions**: *boolean* = {} as boolean

*Defined in [src/lib/i18n-util/types.ts:758](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L758)*

###  isMissingUsage

• **isMissingUsage**: *boolean* = {} as boolean

*Defined in [src/lib/i18n-util/types.ts:762](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L762)*

###  isUsed

• **isUsed**: *boolean* = {} as boolean

*Defined in [src/lib/i18n-util/types.ts:761](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L761)*

###  locales

• **locales**: *string[]* = [] as string[]

*Defined in [src/lib/i18n-util/types.ts:753](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L753)*

###  localesMissing

• **localesMissing**: *string[]* = [] as string[]

*Defined in [src/lib/i18n-util/types.ts:754](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L754)*

###  localesUsed

• **localesUsed**: *string[]* = [] as string[]

*Defined in [src/lib/i18n-util/types.ts:755](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L755)*

###  path

• **path**: *string[]* = [] as string[]

*Defined in [src/lib/i18n-util/types.ts:740](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L740)*

###  usage

• **usage**: *[Item](README.md#item)‹›[]* = [] as UseItem[]

*Defined in [src/lib/i18n-util/types.ts:741](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L741)*

###  usageDefined

• **usageDefined**: *[Item](README.md#item)‹›[]* = [] as UseItem[]

*Defined in [src/lib/i18n-util/types.ts:742](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L742)*

###  usageFiles

• **usageFiles**: *string[]* = [] as string[]

*Defined in [src/lib/i18n-util/types.ts:745](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L745)*

###  usageMissing

• **usageMissing**: *[Item](README.md#item)‹›[]* = [] as UseItem[]

*Defined in [src/lib/i18n-util/types.ts:744](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L744)*

###  usageUndefined

• **usageUndefined**: *[Item](README.md#item)‹›[]* = [] as UseItem[]

*Defined in [src/lib/i18n-util/types.ts:743](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L743)*

### `Abstract` LoadedBase

• **LoadedBase**:

*Defined in [src/lib/i18n-util/types.ts:345](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L345)*

###  adaptors

• **adaptors**: *[Collection](README.md#abstract-collection)‹›* = {} as Adaptors

*Inherited from [Base](README.md#abstract-base).[adaptors](README.md#adaptors)*

*Defined in [src/lib/i18n-util/types.ts:291](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L291)*

###  addAdaptor

• **addAdaptor**: *function* = {} as (
      params: Parameters<Adaptors['add']>[0],
    ) => ReturnType<Adaptors['add']>

*Inherited from [Base](README.md#abstract-base).[addAdaptor](README.md#addadaptor)*

*Defined in [src/lib/i18n-util/types.ts:300](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L300)*

#### Type declaration:

▸ (`params`: Parameters<Adaptors["add"]>[0]): *ReturnType‹Adaptors["add"]›*

**Parameters:**

Name | Type |
------ | ------ |
`params` | Parameters<Adaptors["add"]>[0] |

###  addAdaptors

• **addAdaptors**: *function* = {} as (
      paramsList: Parameters<Adaptors['add']>[0][],
    ) => ReturnType<Adaptors['add']>

*Inherited from [Base](README.md#abstract-base).[addAdaptors](README.md#addadaptors)*

*Defined in [src/lib/i18n-util/types.ts:304](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L304)*

#### Type declaration:

▸ (`paramsList`: Parameters<Adaptors["add"]>[0][]): *ReturnType‹Adaptors["add"]›*

**Parameters:**

Name | Type |
------ | ------ |
`paramsList` | Parameters<Adaptors["add"]>[0][] |

###  i18nUtil

• **i18nUtil**: *T* = {} as T

*Defined in [src/lib/i18n-util/types.ts:347](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L347)*

###  keyResolver

• **keyResolver**: *[KeyResolver](README.md#abstract-keyresolver)‹›* = {} as KeyResolver

*Inherited from [Base](README.md#abstract-base).[keyResolver](README.md#keyresolver)*

*Defined in [src/lib/i18n-util/types.ts:294](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L294)*

###  loaded

• **loaded**: *[ItemArray](README.md#itemarray)‹›* = {} as DefItemArray

*Defined in [src/lib/i18n-util/types.ts:349](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L349)*

###  localeResolver

• **localeResolver**: *[LocaleResolver](README.md#abstract-localeresolver)‹›* = {} as LocaleResolver

*Inherited from [Base](README.md#abstract-base).[localeResolver](README.md#localeresolver)*

*Defined in [src/lib/i18n-util/types.ts:293](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L293)*

###  options

• **options**: *object* = {} as AnyObj

*Inherited from [Base](README.md#abstract-base).[options](README.md#options)*

*Defined in [src/lib/i18n-util/types.ts:298](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L298)*

#### Type declaration:

* \[ **key**: *number*\]: V

###  pathResolver

• **pathResolver**: *[PathResolver](README.md#abstract-pathresolver)‹›* = {} as PathResolver

*Inherited from [Base](README.md#abstract-base).[pathResolver](README.md#pathresolver)*

*Defined in [src/lib/i18n-util/types.ts:292](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L292)*

###  removeAdaptor

• **removeAdaptor**: *function* = {} as (
      name: Parameters<Adaptors['delete']>[0],
    ) => ReturnType<Adaptors['delete']>

*Inherited from [Base](README.md#abstract-base).[removeAdaptor](README.md#removeadaptor)*

*Defined in [src/lib/i18n-util/types.ts:308](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L308)*

#### Type declaration:

▸ (`name`: Parameters<Adaptors["delete"]>[0]): *ReturnType‹Adaptors["delete"]›*

**Parameters:**

Name | Type |
------ | ------ |
`name` | Parameters<Adaptors["delete"]>[0] |

###  removeAdaptors

• **removeAdaptors**: *function* = {} as (
      names: Parameters<Adaptors['delete']>[0][],
    ) => ReturnType<Adaptors['delete']>

*Inherited from [Base](README.md#abstract-base).[removeAdaptors](README.md#removeadaptors)*

*Defined in [src/lib/i18n-util/types.ts:312](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L312)*

#### Type declaration:

▸ (`names`: Parameters<Adaptors["delete"]>[0][]): *ReturnType‹Adaptors["delete"]›*

**Parameters:**

Name | Type |
------ | ------ |
`names` | Parameters<Adaptors["delete"]>[0][] |

###  resolveKeys

• **resolveKeys**: *function* = {} as (
      keys: any[],
      options?: ResolveKeysOptions,
    ) => ReturnType<Base['resolveKeys']>

*Defined in [src/lib/i18n-util/types.ts:356](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L356)*

#### Type declaration:

▸ (`keys`: any[], `options?`: [ResolveKeysOptions](README.md#resolvekeysoptions)): *ReturnType‹Base["resolveKeys"]›*

**Parameters:**

Name | Type |
------ | ------ |
`keys` | any[] |
`options?` | [ResolveKeysOptions](README.md#resolvekeysoptions) |

###  resolveLocales

• **resolveLocales**: *function* = {} as (
      locales: any[],
      options?: ResolveLocalesOptions,
    ) => ReturnType<Base['resolveLocales']>

*Defined in [src/lib/i18n-util/types.ts:351](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L351)*

#### Type declaration:

▸ (`locales`: any[], `options?`: [ResolveLocalesOptions](README.md#resolvelocalesoptions)): *ReturnType‹Base["resolveLocales"]›*

**Parameters:**

Name | Type |
------ | ------ |
`locales` | any[] |
`options?` | [ResolveLocalesOptions](README.md#resolvelocalesoptions) |

###  resolvePaths

• **resolvePaths**: *function* = {} as (
      paths: any[],
      options?: ResolvePathsOptions,
    ) => string[] | Promise<string[]>

*Inherited from [Base](README.md#abstract-base).[resolvePaths](README.md#resolvepaths)*

*Defined in [src/lib/i18n-util/types.ts:316](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L316)*

#### Type declaration:

▸ (`paths`: any[], `options?`: [ResolvePathsOptions](README.md#resolvepathsoptions)): *string[] | Promise‹string[]›*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | any[] |
`options?` | [ResolvePathsOptions](README.md#resolvepathsoptions) |

###  resolveValues

• **resolveValues**: *function* = {} as (
      values: any[],
      options?: ResolveValuesOptions,
    ) => ReturnType<Base['resolveValues']>

*Defined in [src/lib/i18n-util/types.ts:361](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L361)*

#### Type declaration:

▸ (`values`: any[], `options?`: [ResolveValuesOptions](README.md#resolvevaluesoptions)): *ReturnType‹Base["resolveValues"]›*

**Parameters:**

Name | Type |
------ | ------ |
`values` | any[] |
`options?` | [ResolveValuesOptions](README.md#resolvevaluesoptions) |

###  schemator

• **schemator**: *[Schemator](README.md#abstract-schemator)‹›* = {} as Schemator

*Inherited from [Base](README.md#abstract-base).[schemator](README.md#schemator)*

*Defined in [src/lib/i18n-util/types.ts:296](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L296)*

###  validator

• **validator**: *[Validator](README.md#abstract-validator)‹›* = {} as Validator

*Inherited from [Base](README.md#abstract-base).[validator](README.md#validator)*

*Defined in [src/lib/i18n-util/types.ts:297](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L297)*

###  valueResolver

• **valueResolver**: *[ValueResolver](README.md#abstract-valueresolver)‹›* = {} as ValueResolver

*Inherited from [Base](README.md#abstract-base).[valueResolver](README.md#valueresolver)*

*Defined in [src/lib/i18n-util/types.ts:295](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L295)*

### `Abstract` LoadedI18nUtil

• **LoadedI18nUtil**:

*Defined in [src/lib/i18n-util/types.ts:590](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L590)*

*Defined in [src/lib/i18n-util/types.ts:595](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L595)*

Variant of I18nUtil that stores the definitions it works with.

###  adaptors

• **adaptors**: *[Collection](README.md#abstract-collection)‹›* = {} as Adaptors

*Inherited from [Base](README.md#abstract-base).[adaptors](README.md#adaptors)*

*Overrides [Base](README.md#abstract-base).[adaptors](README.md#adaptors)*

*Defined in [src/lib/i18n-util/types.ts:291](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L291)*

###  addAdaptor

• **addAdaptor**: *function* = {} as (
      params: Parameters<Adaptors['add']>[0],
    ) => ReturnType<Adaptors['add']>

*Inherited from [Base](README.md#abstract-base).[addAdaptor](README.md#addadaptor)*

*Overrides [Base](README.md#abstract-base).[addAdaptor](README.md#addadaptor)*

*Defined in [src/lib/i18n-util/types.ts:300](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L300)*

#### Type declaration:

▸ (`params`: Parameters<Adaptors["add"]>[0]): *ReturnType‹Adaptors["add"]›*

**Parameters:**

Name | Type |
------ | ------ |
`params` | Parameters<Adaptors["add"]>[0] |

###  addAdaptors

• **addAdaptors**: *function* = {} as (
      paramsList: Parameters<Adaptors['add']>[0][],
    ) => ReturnType<Adaptors['add']>

*Inherited from [Base](README.md#abstract-base).[addAdaptors](README.md#addadaptors)*

*Overrides [Base](README.md#abstract-base).[addAdaptors](README.md#addadaptors)*

*Defined in [src/lib/i18n-util/types.ts:304](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L304)*

#### Type declaration:

▸ (`paramsList`: Parameters<Adaptors["add"]>[0][]): *ReturnType‹Adaptors["add"]›*

**Parameters:**

Name | Type |
------ | ------ |
`paramsList` | Parameters<Adaptors["add"]>[0][] |

###  addLocale

• **addLocale**: *function* = {} as (
      locale: string,
      options?: AddLocaleOptions<DefItem>,
    ) => ReturnType<I18nUtil['addLocale']>

*Defined in [src/lib/i18n-util/types.ts:623](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L623)*

#### Type declaration:

▸ (`locale`: string, `options?`: [AddLocaleOptions](README.md#addlocaleoptions)‹[DefItem](README.md#defitem)›): *ReturnType‹I18nUtil["addLocale"]›*

**Parameters:**

Name | Type |
------ | ------ |
`locale` | string |
`options?` | [AddLocaleOptions](README.md#addlocaleoptions)‹[DefItem](README.md#defitem)› |

###  addLocales

• **addLocales**: *function* = {} as (
      locale: string[],
      options?: AddLocaleOptions<DefItem>,
    ) => ReturnType<I18nUtil['addLocales']>

*Defined in [src/lib/i18n-util/types.ts:628](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L628)*

#### Type declaration:

▸ (`locale`: string[], `options?`: [AddLocaleOptions](README.md#addlocaleoptions)‹[DefItem](README.md#defitem)›): *ReturnType‹I18nUtil["addLocales"]›*

**Parameters:**

Name | Type |
------ | ------ |
`locale` | string[] |
`options?` | [AddLocaleOptions](README.md#addlocaleoptions)‹[DefItem](README.md#defitem)› |

###  clearLocale

• **clearLocale**: *function* = {} as (
      locale: string,
      options?: ClearLocaleOptions,
    ) => ReturnType<I18nUtil['clearLocale']>

*Defined in [src/lib/i18n-util/types.ts:643](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L643)*

#### Type declaration:

▸ (`locale`: string, `options?`: [ClearLocaleOptions](README.md#clearlocaleoptions)): *ReturnType‹I18nUtil["clearLocale"]›*

**Parameters:**

Name | Type |
------ | ------ |
`locale` | string |
`options?` | [ClearLocaleOptions](README.md#clearlocaleoptions) |

###  clearLocales

• **clearLocales**: *function* = {} as (
      locale: string[],
      options?: ClearLocaleOptions,
    ) => ReturnType<I18nUtil['clearLocales']>

*Defined in [src/lib/i18n-util/types.ts:648](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L648)*

#### Type declaration:

▸ (`locale`: string[], `options?`: [ClearLocaleOptions](README.md#clearlocaleoptions)): *ReturnType‹I18nUtil["clearLocales"]›*

**Parameters:**

Name | Type |
------ | ------ |
`locale` | string[] |
`options?` | [ClearLocaleOptions](README.md#clearlocaleoptions) |

###  definitions

• **definitions**: *function* = {} as (
      options?: DefinitionOptions,
    ) => ReturnType<I18nUtil['definitions']>

*Defined in [src/lib/i18n-util/types.ts:598](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L598)*

#### Type declaration:

▸ (`options?`: [DefinitionOptions](README.md#definitionoptions)): *ReturnType‹I18nUtil["definitions"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [DefinitionOptions](README.md#definitionoptions) |

###  drop

• **drop**: *function* = {} as (options?: DropOptions) => ReturnType<I18nUtil['drop']>

*Defined in [src/lib/i18n-util/types.ts:617](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L617)*

#### Type declaration:

▸ (`options?`: [DropOptions](README.md#dropoptions)): *ReturnType‹I18nUtil["drop"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [DropOptions](README.md#dropoptions) |

###  dropFrom

• **dropFrom**: *function* = {} as (
      options?: DropOptions,
    ) => ReturnType<I18nUtil['dropFrom']>

*Defined in [src/lib/i18n-util/types.ts:619](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L619)*

#### Type declaration:

▸ (`options?`: [DropOptions](README.md#dropoptions)): *ReturnType‹I18nUtil["dropFrom"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [DropOptions](README.md#dropoptions) |

###  i18nUtil

• **i18nUtil**: *[I18nUtil](README.md#abstract-i18nutil)‹›* = {} as I18nUtil

*Inherited from [LoadedBase](README.md#abstract-loadedbase).[i18nUtil](README.md#i18nutil)*

*Overrides [LoadedItemProcessor](README.md#abstract-loadeditemprocessor).[i18nUtil](README.md#i18nutil)*

*Defined in [src/lib/i18n-util/types.ts:347](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L347)*

*Defined in [src/lib/i18n-util/types.ts:596](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L596)*

###  keyResolver

• **keyResolver**: *[KeyResolver](README.md#abstract-keyresolver)‹›* = {} as KeyResolver

*Inherited from [Base](README.md#abstract-base).[keyResolver](README.md#keyresolver)*

*Overrides [Base](README.md#abstract-base).[keyResolver](README.md#keyresolver)*

*Defined in [src/lib/i18n-util/types.ts:294](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L294)*

###  loaded

• **loaded**: *[ItemArray](README.md#itemarray)‹›* = {} as DefItemArray

*Inherited from [LoadedBase](README.md#abstract-loadedbase).[loaded](README.md#loaded)*

*Overrides [LoadedBase](README.md#abstract-loadedbase).[loaded](README.md#loaded)*

*Defined in [src/lib/i18n-util/types.ts:349](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L349)*

###  locale

• **locale**: *function* = {} as (
      locale: string,
      options?: LocaleOptions,
    ) => ReturnType<ItemProcessor['locale']>

*Inherited from [LoadedItemProcessor](README.md#abstract-loadeditemprocessor).[locale](README.md#locale)*

*Defined in [src/lib/i18n-util/types.ts:436](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L436)*

#### Type declaration:

▸ (`locale`: string, `options?`: [LocaleOptions](README.md#localeoptions)): *ReturnType‹ItemProcessor["locale"]›*

**Parameters:**

Name | Type |
------ | ------ |
`locale` | string |
`options?` | [LocaleOptions](README.md#localeoptions) |

###  localeResolver

• **localeResolver**: *[LocaleResolver](README.md#abstract-localeresolver)‹›* = {} as LocaleResolver

*Inherited from [Base](README.md#abstract-base).[localeResolver](README.md#localeresolver)*

*Overrides [Base](README.md#abstract-base).[localeResolver](README.md#localeresolver)*

*Defined in [src/lib/i18n-util/types.ts:293](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L293)*

###  locales

• **locales**: *function* = {} as (
      locales: string[],
      options?: LocaleOptions,
    ) => ReturnType<ItemProcessor['locales']>

*Inherited from [LoadedItemProcessor](README.md#abstract-loadeditemprocessor).[locales](README.md#locales)*

*Defined in [src/lib/i18n-util/types.ts:441](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L441)*

#### Type declaration:

▸ (`locales`: string[], `options?`: [LocaleOptions](README.md#localeoptions)): *ReturnType‹ItemProcessor["locales"]›*

**Parameters:**

Name | Type |
------ | ------ |
`locales` | string[] |
`options?` | [LocaleOptions](README.md#localeoptions) |

###  master

• **master**: *function* = {} as (
      options?: MasterOptions,
    ) => ReturnType<ItemProcessor['master']>

*Inherited from [LoadedItemProcessor](README.md#abstract-loadeditemprocessor).[master](README.md#master)*

*Defined in [src/lib/i18n-util/types.ts:432](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L432)*

#### Type declaration:

▸ (`options?`: [MasterOptions](README.md#masteroptions)): *ReturnType‹ItemProcessor["master"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [MasterOptions](README.md#masteroptions) |

###  missingItems

• **missingItems**: *function* = {} as (
      options?: MissingItemsOptions,
    ) => ReturnType<ItemProcessor['missingItems']>

*Inherited from [LoadedItemProcessor](README.md#abstract-loadeditemprocessor).[missingItems](README.md#missingitems)*

*Defined in [src/lib/i18n-util/types.ts:450](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L450)*

#### Type declaration:

▸ (`options?`: [MissingItemsOptions](README.md#missingitemsoptions)): *ReturnType‹ItemProcessor["missingItems"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [MissingItemsOptions](README.md#missingitemsoptions) |

###  missingLocales

• **missingLocales**: *function* = {} as (
      options?: MissingLocalesOptions,
    ) => ReturnType<ItemProcessor['missingLocales']>

*Inherited from [LoadedItemProcessor](README.md#abstract-loadeditemprocessor).[missingLocales](README.md#missinglocales)*

*Defined in [src/lib/i18n-util/types.ts:454](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L454)*

#### Type declaration:

▸ (`options?`: [MissingLocalesOptions](README.md#missinglocalesoptions)): *ReturnType‹ItemProcessor["missingLocales"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [MissingLocalesOptions](README.md#missinglocalesoptions) |

###  options

• **options**: *object* = {} as AnyObj

*Inherited from [Base](README.md#abstract-base).[options](README.md#options)*

*Overrides [Base](README.md#abstract-base).[options](README.md#options)*

*Defined in [src/lib/i18n-util/types.ts:298](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L298)*

#### Type declaration:

* \[ **key**: *number*\]: V

###  patch

• **patch**: *function* = {} as (
      options?: PatchOptions<DefItem>,
    ) => ReturnType<I18nUtil['patch']>

*Defined in [src/lib/i18n-util/types.ts:609](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L609)*

#### Type declaration:

▸ (`options?`: [PatchOptions](README.md#patchoptions)‹[DefItem](README.md#defitem)›): *ReturnType‹I18nUtil["patch"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [PatchOptions](README.md#patchoptions)‹[DefItem](README.md#defitem)› |

###  patchTo

• **patchTo**: *function* = {} as (
      options?: PatchOptions<DefItem>,
    ) => ReturnType<I18nUtil['patchTo']>

*Defined in [src/lib/i18n-util/types.ts:613](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L613)*

#### Type declaration:

▸ (`options?`: [PatchOptions](README.md#patchoptions)‹[DefItem](README.md#defitem)›): *ReturnType‹I18nUtil["patchTo"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [PatchOptions](README.md#patchoptions)‹[DefItem](README.md#defitem)› |

###  pathResolver

• **pathResolver**: *[PathResolver](README.md#abstract-pathresolver)‹›* = {} as PathResolver

*Inherited from [Base](README.md#abstract-base).[pathResolver](README.md#pathresolver)*

*Overrides [Base](README.md#abstract-base).[pathResolver](README.md#pathresolver)*

*Defined in [src/lib/i18n-util/types.ts:292](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L292)*

###  removeAdaptor

• **removeAdaptor**: *function* = {} as (
      name: Parameters<Adaptors['delete']>[0],
    ) => ReturnType<Adaptors['delete']>

*Inherited from [Base](README.md#abstract-base).[removeAdaptor](README.md#removeadaptor)*

*Overrides [Base](README.md#abstract-base).[removeAdaptor](README.md#removeadaptor)*

*Defined in [src/lib/i18n-util/types.ts:308](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L308)*

#### Type declaration:

▸ (`name`: Parameters<Adaptors["delete"]>[0]): *ReturnType‹Adaptors["delete"]›*

**Parameters:**

Name | Type |
------ | ------ |
`name` | Parameters<Adaptors["delete"]>[0] |

###  removeAdaptors

• **removeAdaptors**: *function* = {} as (
      names: Parameters<Adaptors['delete']>[0][],
    ) => ReturnType<Adaptors['delete']>

*Inherited from [Base](README.md#abstract-base).[removeAdaptors](README.md#removeadaptors)*

*Overrides [Base](README.md#abstract-base).[removeAdaptors](README.md#removeadaptors)*

*Defined in [src/lib/i18n-util/types.ts:312](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L312)*

#### Type declaration:

▸ (`names`: Parameters<Adaptors["delete"]>[0][]): *ReturnType‹Adaptors["delete"]›*

**Parameters:**

Name | Type |
------ | ------ |
`names` | Parameters<Adaptors["delete"]>[0][] |

###  removeLocale

• **removeLocale**: *function* = {} as (
      locale: string,
      options?: RemoveLocaleOptions,
    ) => ReturnType<I18nUtil['removeLocale']>

*Defined in [src/lib/i18n-util/types.ts:633](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L633)*

#### Type declaration:

▸ (`locale`: string, `options?`: [RemoveLocaleOptions](README.md#removelocaleoptions)): *ReturnType‹I18nUtil["removeLocale"]›*

**Parameters:**

Name | Type |
------ | ------ |
`locale` | string |
`options?` | [RemoveLocaleOptions](README.md#removelocaleoptions) |

###  removeLocales

• **removeLocales**: *function* = {} as (
      locale: string[],
      options?: RemoveLocaleOptions,
    ) => ReturnType<I18nUtil['removeLocales']>

*Defined in [src/lib/i18n-util/types.ts:638](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L638)*

#### Type declaration:

▸ (`locale`: string[], `options?`: [RemoveLocaleOptions](README.md#removelocaleoptions)): *ReturnType‹I18nUtil["removeLocales"]›*

**Parameters:**

Name | Type |
------ | ------ |
`locale` | string[] |
`options?` | [RemoveLocaleOptions](README.md#removelocaleoptions) |

###  resolveKeys

• **resolveKeys**: *function* = {} as (
      keys: any[],
      options?: ResolveKeysOptions,
    ) => ReturnType<Base['resolveKeys']>

*Inherited from [LoadedBase](README.md#abstract-loadedbase).[resolveKeys](README.md#resolvekeys)*

*Overrides [LoadedBase](README.md#abstract-loadedbase).[resolveKeys](README.md#resolvekeys)*

*Defined in [src/lib/i18n-util/types.ts:356](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L356)*

#### Type declaration:

▸ (`keys`: any[], `options?`: [ResolveKeysOptions](README.md#resolvekeysoptions)): *ReturnType‹Base["resolveKeys"]›*

**Parameters:**

Name | Type |
------ | ------ |
`keys` | any[] |
`options?` | [ResolveKeysOptions](README.md#resolvekeysoptions) |

###  resolveLocales

• **resolveLocales**: *function* = {} as (
      locales: any[],
      options?: ResolveLocalesOptions,
    ) => ReturnType<Base['resolveLocales']>

*Inherited from [LoadedBase](README.md#abstract-loadedbase).[resolveLocales](README.md#resolvelocales)*

*Overrides [LoadedBase](README.md#abstract-loadedbase).[resolveLocales](README.md#resolvelocales)*

*Defined in [src/lib/i18n-util/types.ts:351](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L351)*

#### Type declaration:

▸ (`locales`: any[], `options?`: [ResolveLocalesOptions](README.md#resolvelocalesoptions)): *ReturnType‹Base["resolveLocales"]›*

**Parameters:**

Name | Type |
------ | ------ |
`locales` | any[] |
`options?` | [ResolveLocalesOptions](README.md#resolvelocalesoptions) |

###  resolvePaths

• **resolvePaths**: *function* = {} as (
      paths: any[],
      options?: ResolvePathsOptions,
    ) => string[] | Promise<string[]>

*Inherited from [Base](README.md#abstract-base).[resolvePaths](README.md#resolvepaths)*

*Overrides [Base](README.md#abstract-base).[resolvePaths](README.md#resolvepaths)*

*Defined in [src/lib/i18n-util/types.ts:316](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L316)*

#### Type declaration:

▸ (`paths`: any[], `options?`: [ResolvePathsOptions](README.md#resolvepathsoptions)): *string[] | Promise‹string[]›*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | any[] |
`options?` | [ResolvePathsOptions](README.md#resolvepathsoptions) |

###  resolveValues

• **resolveValues**: *function* = {} as (
      values: any[],
      options?: ResolveValuesOptions,
    ) => ReturnType<Base['resolveValues']>

*Inherited from [LoadedBase](README.md#abstract-loadedbase).[resolveValues](README.md#resolvevalues)*

*Overrides [LoadedBase](README.md#abstract-loadedbase).[resolveValues](README.md#resolvevalues)*

*Defined in [src/lib/i18n-util/types.ts:361](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L361)*

#### Type declaration:

▸ (`values`: any[], `options?`: [ResolveValuesOptions](README.md#resolvevaluesoptions)): *ReturnType‹Base["resolveValues"]›*

**Parameters:**

Name | Type |
------ | ------ |
`values` | any[] |
`options?` | [ResolveValuesOptions](README.md#resolvevaluesoptions) |

###  schema

• **schema**: *function* = {} as (options?: SchemaOptions) => any

*Defined in [src/lib/i18n-util/types.ts:653](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L653)*

#### Type declaration:

▸ (`options?`: [SchemaOptions](README.md#schemaoptions)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [SchemaOptions](README.md#schemaoptions) |

###  schemator

• **schemator**: *[Schemator](README.md#abstract-schemator)‹›* = {} as Schemator

*Inherited from [Base](README.md#abstract-base).[schemator](README.md#schemator)*

*Overrides [Base](README.md#abstract-base).[schemator](README.md#schemator)*

*Defined in [src/lib/i18n-util/types.ts:296](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L296)*

###  stats

• **stats**: *function* = {} as (
      usage: UseItemArrayLike,
      options?: I_I18nUtil.StatsOptions,
    ) => ReturnType<ItemProcessor['stats']>

*Inherited from [LoadedItemProcessor](README.md#abstract-loadeditemprocessor).[stats](README.md#stats)*

*Defined in [src/lib/i18n-util/types.ts:458](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L458)*

#### Type declaration:

▸ (`usage`: [UseItemArrayLike](README.md#useitemarraylike), `options?`: [StatsOptions](README.md#statsoptions)): *ReturnType‹ItemProcessor["stats"]›*

**Parameters:**

Name | Type |
------ | ------ |
`usage` | [UseItemArrayLike](README.md#useitemarraylike) |
`options?` | [StatsOptions](README.md#statsoptions) |

###  statsAgainst

• **statsAgainst**: *function* = {} as (
      options?: StatsOptions,
    ) => ReturnType<I18nUtil['statsAgainst']>

*Defined in [src/lib/i18n-util/types.ts:655](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L655)*

#### Type declaration:

▸ (`options?`: [StatsOptions](README.md#statsoptions)): *ReturnType‹I18nUtil["statsAgainst"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [StatsOptions](README.md#statsoptions) |

###  toObject

• **toObject**: *function* = {} as (
      options?: ToObjectOptions,
    ) => ReturnType<ItemProcessor['toObject']>

*Inherited from [LoadedItemProcessor](README.md#abstract-loadeditemprocessor).[toObject](README.md#toobject)*

*Defined in [src/lib/i18n-util/types.ts:446](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L446)*

#### Type declaration:

▸ (`options?`: [ToObjectOptions](README.md#toobjectoptions)): *ReturnType‹ItemProcessor["toObject"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [ToObjectOptions](README.md#toobjectoptions) |

###  usage

• **usage**: *function* = {} as (
      paths: string[],
      options?: UsageOptions,
    ) => ReturnType<I18nUtil['usage']>

*Defined in [src/lib/i18n-util/types.ts:602](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L602)*

#### Type declaration:

▸ (`paths`: string[], `options?`: [UsageOptions](README.md#usageoptions)): *ReturnType‹I18nUtil["usage"]›*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | string[] |
`options?` | [UsageOptions](README.md#usageoptions) |

###  usageAnalyze

• **usageAnalyze**: *function* = {} as (
      usage: UseItemArrayLike,
      options?: UsageAnalyzeOptions,
    ) => ReturnType<ItemProcessor['usageAnalyze']>

*Inherited from [LoadedItemProcessor](README.md#abstract-loadeditemprocessor).[usageAnalyze](README.md#usageanalyze)*

*Defined in [src/lib/i18n-util/types.ts:463](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L463)*

#### Type declaration:

▸ (`usage`: [UseItemArrayLike](README.md#useitemarraylike), `options?`: [UsageAnalyzeOptions](README.md#usageanalyzeoptions)): *ReturnType‹ItemProcessor["usageAnalyze"]›*

**Parameters:**

Name | Type |
------ | ------ |
`usage` | [UseItemArrayLike](README.md#useitemarraylike) |
`options?` | [UsageAnalyzeOptions](README.md#usageanalyzeoptions) |

###  usageAnalyzeAgainst

• **usageAnalyzeAgainst**: *function* = {} as (
      options?: UsageAnalyzeOptions,
    ) => ReturnType<I18nUtil['usageAnalyzeAgainst']>

*Defined in [src/lib/i18n-util/types.ts:668](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L668)*

#### Type declaration:

▸ (`options?`: [UsageAnalyzeOptions](README.md#usageanalyzeoptions)): *ReturnType‹I18nUtil["usageAnalyzeAgainst"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [UsageAnalyzeOptions](README.md#usageanalyzeoptions) |

###  usageValidate

• **usageValidate**: *function* = {} as (
      usage: UseItemArrayLike,
      options?: UsageValidateOptions,
    ) => ReturnType<ItemProcessor['usageValidate']>

*Inherited from [LoadedItemProcessor](README.md#abstract-loadeditemprocessor).[usageValidate](README.md#usagevalidate)*

*Defined in [src/lib/i18n-util/types.ts:468](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L468)*

#### Type declaration:

▸ (`usage`: [UseItemArrayLike](README.md#useitemarraylike), `options?`: [UsageValidateOptions](README.md#usagevalidateoptions)): *ReturnType‹ItemProcessor["usageValidate"]›*

**Parameters:**

Name | Type |
------ | ------ |
`usage` | [UseItemArrayLike](README.md#useitemarraylike) |
`options?` | [UsageValidateOptions](README.md#usagevalidateoptions) |

###  usageValidateAgainst

• **usageValidateAgainst**: *function* = {} as (
      options?: UsageValidateOptions,
    ) => ReturnType<I18nUtil['usageValidateAgainst']>

*Defined in [src/lib/i18n-util/types.ts:672](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L672)*

#### Type declaration:

▸ (`options?`: [UsageValidateOptions](README.md#usagevalidateoptions)): *ReturnType‹I18nUtil["usageValidateAgainst"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [UsageValidateOptions](README.md#usagevalidateoptions) |

###  validate

• **validate**: *function* = {} as (
      schema: AnyObj,
      options?: ValidateOptions,
    ) => ReturnType<I18nUtil['validate']>

*Defined in [src/lib/i18n-util/types.ts:659](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L659)*

#### Type declaration:

▸ (`schema`: [AnyObj](README.md#anyobj), `options?`: [ValidateOptions](README.md#validateoptions)): *ReturnType‹I18nUtil["validate"]›*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | [AnyObj](README.md#anyobj) |
`options?` | [ValidateOptions](README.md#validateoptions) |

###  validateAgainst

• **validateAgainst**: *function* = {} as (
      options?: ValidateAgainstOptions,
    ) => ReturnType<I18nUtil['validateAgainst']>

*Defined in [src/lib/i18n-util/types.ts:664](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L664)*

#### Type declaration:

▸ (`options?`: [ValidateAgainstOptions](README.md#validateagainstoptions)): *ReturnType‹I18nUtil["validateAgainst"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [ValidateAgainstOptions](README.md#validateagainstoptions) |

###  validator

• **validator**: *[Validator](README.md#abstract-validator)‹›* = {} as Validator

*Inherited from [Base](README.md#abstract-base).[validator](README.md#validator)*

*Overrides [Base](README.md#abstract-base).[validator](README.md#validator)*

*Defined in [src/lib/i18n-util/types.ts:297](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L297)*

###  valueResolver

• **valueResolver**: *[ValueResolver](README.md#abstract-valueresolver)‹›* = {} as ValueResolver

*Inherited from [Base](README.md#abstract-base).[valueResolver](README.md#valueresolver)*

*Overrides [Base](README.md#abstract-base).[valueResolver](README.md#valueresolver)*

*Defined in [src/lib/i18n-util/types.ts:295](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L295)*

###  write

• **write**: *function* = {} as (options?: WriteOptions) => ReturnType<I18nUtil['write']>

*Defined in [src/lib/i18n-util/types.ts:607](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L607)*

#### Type declaration:

▸ (`options?`: [WriteOptions](README.md#writeoptions)): *ReturnType‹I18nUtil["write"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [WriteOptions](README.md#writeoptions) |

### `Abstract` LoadedItemProcessor

• **LoadedItemProcessor**:

*Defined in [src/lib/i18n-util/types.ts:428](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L428)*

Variant of I18nUtilItemProcessor that stores the definitions it works
with.

###  adaptors

• **adaptors**: *[Collection](README.md#abstract-collection)‹›* = {} as Adaptors

*Inherited from [Base](README.md#abstract-base).[adaptors](README.md#adaptors)*

*Defined in [src/lib/i18n-util/types.ts:291](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L291)*

###  addAdaptor

• **addAdaptor**: *function* = {} as (
      params: Parameters<Adaptors['add']>[0],
    ) => ReturnType<Adaptors['add']>

*Inherited from [Base](README.md#abstract-base).[addAdaptor](README.md#addadaptor)*

*Defined in [src/lib/i18n-util/types.ts:300](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L300)*

#### Type declaration:

▸ (`params`: Parameters<Adaptors["add"]>[0]): *ReturnType‹Adaptors["add"]›*

**Parameters:**

Name | Type |
------ | ------ |
`params` | Parameters<Adaptors["add"]>[0] |

###  addAdaptors

• **addAdaptors**: *function* = {} as (
      paramsList: Parameters<Adaptors['add']>[0][],
    ) => ReturnType<Adaptors['add']>

*Inherited from [Base](README.md#abstract-base).[addAdaptors](README.md#addadaptors)*

*Defined in [src/lib/i18n-util/types.ts:304](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L304)*

#### Type declaration:

▸ (`paramsList`: Parameters<Adaptors["add"]>[0][]): *ReturnType‹Adaptors["add"]›*

**Parameters:**

Name | Type |
------ | ------ |
`paramsList` | Parameters<Adaptors["add"]>[0][] |

###  i18nUtil

• **i18nUtil**: *[ItemProcessor](README.md#abstract-itemprocessor)‹›* = {} as ItemProcessor

*Overrides [LoadedBase](README.md#abstract-loadedbase).[i18nUtil](README.md#i18nutil)*

*Defined in [src/lib/i18n-util/types.ts:430](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L430)*

###  keyResolver

• **keyResolver**: *[KeyResolver](README.md#abstract-keyresolver)‹›* = {} as KeyResolver

*Inherited from [Base](README.md#abstract-base).[keyResolver](README.md#keyresolver)*

*Defined in [src/lib/i18n-util/types.ts:294](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L294)*

###  loaded

• **loaded**: *[ItemArray](README.md#itemarray)‹›* = {} as DefItemArray

*Inherited from [LoadedBase](README.md#abstract-loadedbase).[loaded](README.md#loaded)*

*Defined in [src/lib/i18n-util/types.ts:349](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L349)*

###  locale

• **locale**: *function* = {} as (
      locale: string,
      options?: LocaleOptions,
    ) => ReturnType<ItemProcessor['locale']>

*Defined in [src/lib/i18n-util/types.ts:436](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L436)*

#### Type declaration:

▸ (`locale`: string, `options?`: [LocaleOptions](README.md#localeoptions)): *ReturnType‹ItemProcessor["locale"]›*

**Parameters:**

Name | Type |
------ | ------ |
`locale` | string |
`options?` | [LocaleOptions](README.md#localeoptions) |

###  localeResolver

• **localeResolver**: *[LocaleResolver](README.md#abstract-localeresolver)‹›* = {} as LocaleResolver

*Inherited from [Base](README.md#abstract-base).[localeResolver](README.md#localeresolver)*

*Defined in [src/lib/i18n-util/types.ts:293](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L293)*

###  locales

• **locales**: *function* = {} as (
      locales: string[],
      options?: LocaleOptions,
    ) => ReturnType<ItemProcessor['locales']>

*Defined in [src/lib/i18n-util/types.ts:441](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L441)*

#### Type declaration:

▸ (`locales`: string[], `options?`: [LocaleOptions](README.md#localeoptions)): *ReturnType‹ItemProcessor["locales"]›*

**Parameters:**

Name | Type |
------ | ------ |
`locales` | string[] |
`options?` | [LocaleOptions](README.md#localeoptions) |

###  master

• **master**: *function* = {} as (
      options?: MasterOptions,
    ) => ReturnType<ItemProcessor['master']>

*Defined in [src/lib/i18n-util/types.ts:432](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L432)*

#### Type declaration:

▸ (`options?`: [MasterOptions](README.md#masteroptions)): *ReturnType‹ItemProcessor["master"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [MasterOptions](README.md#masteroptions) |

###  missingItems

• **missingItems**: *function* = {} as (
      options?: MissingItemsOptions,
    ) => ReturnType<ItemProcessor['missingItems']>

*Defined in [src/lib/i18n-util/types.ts:450](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L450)*

#### Type declaration:

▸ (`options?`: [MissingItemsOptions](README.md#missingitemsoptions)): *ReturnType‹ItemProcessor["missingItems"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [MissingItemsOptions](README.md#missingitemsoptions) |

###  missingLocales

• **missingLocales**: *function* = {} as (
      options?: MissingLocalesOptions,
    ) => ReturnType<ItemProcessor['missingLocales']>

*Defined in [src/lib/i18n-util/types.ts:454](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L454)*

#### Type declaration:

▸ (`options?`: [MissingLocalesOptions](README.md#missinglocalesoptions)): *ReturnType‹ItemProcessor["missingLocales"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [MissingLocalesOptions](README.md#missinglocalesoptions) |

###  options

• **options**: *object* = {} as AnyObj

*Inherited from [Base](README.md#abstract-base).[options](README.md#options)*

*Defined in [src/lib/i18n-util/types.ts:298](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L298)*

#### Type declaration:

* \[ **key**: *number*\]: V

###  pathResolver

• **pathResolver**: *[PathResolver](README.md#abstract-pathresolver)‹›* = {} as PathResolver

*Inherited from [Base](README.md#abstract-base).[pathResolver](README.md#pathresolver)*

*Defined in [src/lib/i18n-util/types.ts:292](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L292)*

###  removeAdaptor

• **removeAdaptor**: *function* = {} as (
      name: Parameters<Adaptors['delete']>[0],
    ) => ReturnType<Adaptors['delete']>

*Inherited from [Base](README.md#abstract-base).[removeAdaptor](README.md#removeadaptor)*

*Defined in [src/lib/i18n-util/types.ts:308](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L308)*

#### Type declaration:

▸ (`name`: Parameters<Adaptors["delete"]>[0]): *ReturnType‹Adaptors["delete"]›*

**Parameters:**

Name | Type |
------ | ------ |
`name` | Parameters<Adaptors["delete"]>[0] |

###  removeAdaptors

• **removeAdaptors**: *function* = {} as (
      names: Parameters<Adaptors['delete']>[0][],
    ) => ReturnType<Adaptors['delete']>

*Inherited from [Base](README.md#abstract-base).[removeAdaptors](README.md#removeadaptors)*

*Defined in [src/lib/i18n-util/types.ts:312](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L312)*

#### Type declaration:

▸ (`names`: Parameters<Adaptors["delete"]>[0][]): *ReturnType‹Adaptors["delete"]›*

**Parameters:**

Name | Type |
------ | ------ |
`names` | Parameters<Adaptors["delete"]>[0][] |

###  resolveKeys

• **resolveKeys**: *function* = {} as (
      keys: any[],
      options?: ResolveKeysOptions,
    ) => ReturnType<Base['resolveKeys']>

*Inherited from [LoadedBase](README.md#abstract-loadedbase).[resolveKeys](README.md#resolvekeys)*

*Defined in [src/lib/i18n-util/types.ts:356](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L356)*

#### Type declaration:

▸ (`keys`: any[], `options?`: [ResolveKeysOptions](README.md#resolvekeysoptions)): *ReturnType‹Base["resolveKeys"]›*

**Parameters:**

Name | Type |
------ | ------ |
`keys` | any[] |
`options?` | [ResolveKeysOptions](README.md#resolvekeysoptions) |

###  resolveLocales

• **resolveLocales**: *function* = {} as (
      locales: any[],
      options?: ResolveLocalesOptions,
    ) => ReturnType<Base['resolveLocales']>

*Inherited from [LoadedBase](README.md#abstract-loadedbase).[resolveLocales](README.md#resolvelocales)*

*Defined in [src/lib/i18n-util/types.ts:351](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L351)*

#### Type declaration:

▸ (`locales`: any[], `options?`: [ResolveLocalesOptions](README.md#resolvelocalesoptions)): *ReturnType‹Base["resolveLocales"]›*

**Parameters:**

Name | Type |
------ | ------ |
`locales` | any[] |
`options?` | [ResolveLocalesOptions](README.md#resolvelocalesoptions) |

###  resolvePaths

• **resolvePaths**: *function* = {} as (
      paths: any[],
      options?: ResolvePathsOptions,
    ) => string[] | Promise<string[]>

*Inherited from [Base](README.md#abstract-base).[resolvePaths](README.md#resolvepaths)*

*Defined in [src/lib/i18n-util/types.ts:316](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L316)*

#### Type declaration:

▸ (`paths`: any[], `options?`: [ResolvePathsOptions](README.md#resolvepathsoptions)): *string[] | Promise‹string[]›*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | any[] |
`options?` | [ResolvePathsOptions](README.md#resolvepathsoptions) |

###  resolveValues

• **resolveValues**: *function* = {} as (
      values: any[],
      options?: ResolveValuesOptions,
    ) => ReturnType<Base['resolveValues']>

*Inherited from [LoadedBase](README.md#abstract-loadedbase).[resolveValues](README.md#resolvevalues)*

*Defined in [src/lib/i18n-util/types.ts:361](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L361)*

#### Type declaration:

▸ (`values`: any[], `options?`: [ResolveValuesOptions](README.md#resolvevaluesoptions)): *ReturnType‹Base["resolveValues"]›*

**Parameters:**

Name | Type |
------ | ------ |
`values` | any[] |
`options?` | [ResolveValuesOptions](README.md#resolvevaluesoptions) |

###  schemator

• **schemator**: *[Schemator](README.md#abstract-schemator)‹›* = {} as Schemator

*Inherited from [Base](README.md#abstract-base).[schemator](README.md#schemator)*

*Defined in [src/lib/i18n-util/types.ts:296](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L296)*

###  stats

• **stats**: *function* = {} as (
      usage: UseItemArrayLike,
      options?: I_I18nUtil.StatsOptions,
    ) => ReturnType<ItemProcessor['stats']>

*Defined in [src/lib/i18n-util/types.ts:458](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L458)*

#### Type declaration:

▸ (`usage`: [UseItemArrayLike](README.md#useitemarraylike), `options?`: [StatsOptions](README.md#statsoptions)): *ReturnType‹ItemProcessor["stats"]›*

**Parameters:**

Name | Type |
------ | ------ |
`usage` | [UseItemArrayLike](README.md#useitemarraylike) |
`options?` | [StatsOptions](README.md#statsoptions) |

###  toObject

• **toObject**: *function* = {} as (
      options?: ToObjectOptions,
    ) => ReturnType<ItemProcessor['toObject']>

*Defined in [src/lib/i18n-util/types.ts:446](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L446)*

#### Type declaration:

▸ (`options?`: [ToObjectOptions](README.md#toobjectoptions)): *ReturnType‹ItemProcessor["toObject"]›*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [ToObjectOptions](README.md#toobjectoptions) |

###  usageAnalyze

• **usageAnalyze**: *function* = {} as (
      usage: UseItemArrayLike,
      options?: UsageAnalyzeOptions,
    ) => ReturnType<ItemProcessor['usageAnalyze']>

*Defined in [src/lib/i18n-util/types.ts:463](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L463)*

#### Type declaration:

▸ (`usage`: [UseItemArrayLike](README.md#useitemarraylike), `options?`: [UsageAnalyzeOptions](README.md#usageanalyzeoptions)): *ReturnType‹ItemProcessor["usageAnalyze"]›*

**Parameters:**

Name | Type |
------ | ------ |
`usage` | [UseItemArrayLike](README.md#useitemarraylike) |
`options?` | [UsageAnalyzeOptions](README.md#usageanalyzeoptions) |

###  usageValidate

• **usageValidate**: *function* = {} as (
      usage: UseItemArrayLike,
      options?: UsageValidateOptions,
    ) => ReturnType<ItemProcessor['usageValidate']>

*Defined in [src/lib/i18n-util/types.ts:468](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L468)*

#### Type declaration:

▸ (`usage`: [UseItemArrayLike](README.md#useitemarraylike), `options?`: [UsageValidateOptions](README.md#usagevalidateoptions)): *ReturnType‹ItemProcessor["usageValidate"]›*

**Parameters:**

Name | Type |
------ | ------ |
`usage` | [UseItemArrayLike](README.md#useitemarraylike) |
`options?` | [UsageValidateOptions](README.md#usagevalidateoptions) |

###  validator

• **validator**: *[Validator](README.md#abstract-validator)‹›* = {} as Validator

*Inherited from [Base](README.md#abstract-base).[validator](README.md#validator)*

*Defined in [src/lib/i18n-util/types.ts:297](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L297)*

###  valueResolver

• **valueResolver**: *[ValueResolver](README.md#abstract-valueresolver)‹›* = {} as ValueResolver

*Inherited from [Base](README.md#abstract-base).[valueResolver](README.md#valueresolver)*

*Defined in [src/lib/i18n-util/types.ts:295](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L295)*

### `Abstract` Loader

• **Loader**:

*Defined in [src/lib/i18n-util/types.ts:679](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L679)*

###  callback

• **callback**: *function* = {} as (...args: any[]) => R | Promise<UnwrapPromise<R>>

*Defined in [src/lib/i18n-util/types.ts:686](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L686)*

#### Type declaration:

▸ (...`args`: any[]): *R | Promise‹[UnwrapPromise](README.md#unwrappromise)‹R››*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

###  i18nUtil

• **i18nUtil**: *T* = {} as T

*Defined in [src/lib/i18n-util/types.ts:684](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L684)*

###  loadFromFiles

• **loadFromFiles**: *function* = {} as (
      paths: any[],
      options?: any,
    ) => R | Promise<UnwrapPromise<R>>

*Defined in [src/lib/i18n-util/types.ts:688](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L688)*

#### Type declaration:

▸ (`paths`: any[], `options?`: any): *R | Promise‹[UnwrapPromise](README.md#unwrappromise)‹R››*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | any[] |
`options?` | any |

###  loadFromItems

• **loadFromItems**: *function* = {} as (items: any[]) => R | Promise<UnwrapPromise<R>>

*Defined in [src/lib/i18n-util/types.ts:693](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L693)*

#### Type declaration:

▸ (`items`: any[]): *R | Promise‹[UnwrapPromise](README.md#unwrappromise)‹R››*

**Parameters:**

Name | Type |
------ | ------ |
`items` | any[] |

###  loadFromObjects

• **loadFromObjects**: *function* = {} as (
      objects: AnyObj[],
      options?: I_Item.FromObjectOptions<I>,
    ) => R | Promise<UnwrapPromise<R>>

*Defined in [src/lib/i18n-util/types.ts:695](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L695)*

#### Type declaration:

▸ (`objects`: [AnyObj](README.md#anyobj)[], `options?`: [FromObjectOptions](README.md#fromobjectoptions)‹I›): *R | Promise‹[UnwrapPromise](README.md#unwrappromise)‹R››*

**Parameters:**

Name | Type |
------ | ------ |
`objects` | [AnyObj](README.md#anyobj)[] |
`options?` | [FromObjectOptions](README.md#fromobjectoptions)‹I› |

### `Abstract` UsageLoader

• **UsageLoader**:

*Defined in [src/lib/i18n-util/types.ts:721](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L721)*

###  callback

• **callback**: *function* = {} as (...args: any[]) => R | Promise<UnwrapPromise<R>>

*Inherited from [Loader](README.md#abstract-loader).[callback](README.md#callback)*

*Defined in [src/lib/i18n-util/types.ts:686](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L686)*

#### Type declaration:

▸ (...`args`: any[]): *R | Promise‹[UnwrapPromise](README.md#unwrappromise)‹R››*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

###  i18nUtil

• **i18nUtil**: *T* = {} as T

*Inherited from [Loader](README.md#abstract-loader).[i18nUtil](README.md#i18nutil)*

*Defined in [src/lib/i18n-util/types.ts:684](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L684)*

###  loadFromFiles

• **loadFromFiles**: *function* = {} as (
      paths: any[],
      options?: UsageOptions,
    ) => R | Promise<UnwrapPromise<R>>

*Overrides [Loader](README.md#abstract-loader).[loadFromFiles](README.md#loadfromfiles)*

*Defined in [src/lib/i18n-util/types.ts:724](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L724)*

#### Type declaration:

▸ (`paths`: any[], `options?`: [UsageOptions](README.md#usageoptions)): *R | Promise‹[UnwrapPromise](README.md#unwrappromise)‹R››*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | any[] |
`options?` | [UsageOptions](README.md#usageoptions) |

###  loadFromItems

• **loadFromItems**: *function* = {} as (
      usage: UseItemArrayLike,
    ) => R | Promise<UnwrapPromise<R>>

*Overrides [Loader](README.md#abstract-loader).[loadFromItems](README.md#loadfromitems)*

*Defined in [src/lib/i18n-util/types.ts:729](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L729)*

#### Type declaration:

▸ (`usage`: [UseItemArrayLike](README.md#useitemarraylike)): *R | Promise‹[UnwrapPromise](README.md#unwrappromise)‹R››*

**Parameters:**

Name | Type |
------ | ------ |
`usage` | [UseItemArrayLike](README.md#useitemarraylike) |

###  loadFromObjects

• **loadFromObjects**: *function* = {} as (
      objects: AnyObj[],
      options?: I_Item.FromObjectOptions<UseItem>,
    ) => R | Promise<UnwrapPromise<R>>

*Overrides [Loader](README.md#abstract-loader).[loadFromObjects](README.md#loadfromobjects)*

*Defined in [src/lib/i18n-util/types.ts:733](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L733)*

#### Type declaration:

▸ (`objects`: [AnyObj](README.md#anyobj)[], `options?`: [FromObjectOptions](README.md#fromobjectoptions)‹[UseItem](README.md#useitem)›): *R | Promise‹[UnwrapPromise](README.md#unwrappromise)‹R››*

**Parameters:**

Name | Type |
------ | ------ |
`objects` | [AnyObj](README.md#anyobj)[] |
`options?` | [FromObjectOptions](README.md#fromobjectoptions)‹[UseItem](README.md#useitem)› |

###  CtorOptions

• **CtorOptions**:

*Defined in [src/lib/i18n-util/types.ts:77](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L77)*

Options object passed to I18nUtil constructor

### `Optional` adaptors

• **adaptors**? : *Adaptors*

*Defined in [src/lib/i18n-util/types.ts:83](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L83)*

### `Optional` keyResolver

• **keyResolver**? : *[KeyResolver](README.md#abstract-keyresolver)*

*Defined in [src/lib/i18n-util/types.ts:81](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L81)*

### `Optional` localeResolver

• **localeResolver**? : *[LocaleResolver](README.md#abstract-localeresolver)*

*Defined in [src/lib/i18n-util/types.ts:80](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L80)*

### `Optional` pathResolver

• **pathResolver**? : *[PathResolver](README.md#abstract-pathresolver)*

*Defined in [src/lib/i18n-util/types.ts:79](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L79)*

### `Optional` schemator

• **schemator**? : *[Schemator](README.md#abstract-schemator)*

*Defined in [src/lib/i18n-util/types.ts:78](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L78)*

### `Optional` validator

• **validator**? : *[Validator](README.md#abstract-validator)*

*Defined in [src/lib/i18n-util/types.ts:84](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L84)*

### `Optional` valueResolver

• **valueResolver**? : *[ValueResolver](README.md#abstract-valueresolver)*

*Defined in [src/lib/i18n-util/types.ts:82](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L82)*

###  KeyStatsCtorOptions

• **KeyStatsCtorOptions**:

*Defined in [src/lib/i18n-util/types.ts:271](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L271)*

Options for method `missingItems` or methods that call it

### `Optional` definitions

• **definitions**? : *[DefItemArrayLike](README.md#defitemarraylike)*

*Defined in [src/lib/i18n-util/types.ts:272](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L272)*

### `Optional` locales

• **locales**? : *string[]*

*Inherited from [MissingItemsOptions](README.md#missingitemsoptions).[locales](README.md#optional-locales)*

*Defined in [src/lib/i18n-util/types.ts:245](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L245)*

### `Optional` usage

• **usage**? : *[UseItemArrayLike](README.md#useitemarraylike)*

*Defined in [src/lib/i18n-util/types.ts:273](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L273)*

###  LoadedBaseCtorOptions

• **LoadedBaseCtorOptions**:

*Defined in [src/lib/i18n-util/types.ts:91](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L91)*

Options object passed to constructor of variant of I18nUtil Base 'loaded'
with definitions.

### `Optional` adaptors

• **adaptors**? : *Adaptors*

*Inherited from [CtorOptions](README.md#ctoroptions).[adaptors](README.md#optional-adaptors)*

*Defined in [src/lib/i18n-util/types.ts:83](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L83)*

### `Optional` definitions

• **definitions**? : *[DefItemArrayLike](README.md#defitemarraylike)*

*Defined in [src/lib/i18n-util/types.ts:93](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L93)*

### `Optional` i18nUtil

• **i18nUtil**? : *T*

*Defined in [src/lib/i18n-util/types.ts:94](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L94)*

### `Optional` keyResolver

• **keyResolver**? : *[KeyResolver](README.md#abstract-keyresolver)*

*Inherited from [CtorOptions](README.md#ctoroptions).[keyResolver](README.md#optional-keyresolver)*

*Defined in [src/lib/i18n-util/types.ts:81](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L81)*

### `Optional` localeResolver

• **localeResolver**? : *[LocaleResolver](README.md#abstract-localeresolver)*

*Inherited from [CtorOptions](README.md#ctoroptions).[localeResolver](README.md#optional-localeresolver)*

*Defined in [src/lib/i18n-util/types.ts:80](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L80)*

### `Optional` pathResolver

• **pathResolver**? : *[PathResolver](README.md#abstract-pathresolver)*

*Inherited from [CtorOptions](README.md#ctoroptions).[pathResolver](README.md#optional-pathresolver)*

*Defined in [src/lib/i18n-util/types.ts:79](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L79)*

### `Optional` schemator

• **schemator**? : *[Schemator](README.md#abstract-schemator)*

*Inherited from [CtorOptions](README.md#ctoroptions).[schemator](README.md#optional-schemator)*

*Defined in [src/lib/i18n-util/types.ts:78](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L78)*

### `Optional` validator

• **validator**? : *[Validator](README.md#abstract-validator)*

*Inherited from [CtorOptions](README.md#ctoroptions).[validator](README.md#optional-validator)*

*Defined in [src/lib/i18n-util/types.ts:84](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L84)*

### `Optional` valueResolver

• **valueResolver**? : *[ValueResolver](README.md#abstract-valueresolver)*

*Inherited from [CtorOptions](README.md#ctoroptions).[valueResolver](README.md#optional-valueresolver)*

*Defined in [src/lib/i18n-util/types.ts:82](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L82)*

###  LoadedCtorOptions

• **LoadedCtorOptions**:

*Defined in [src/lib/i18n-util/types.ts:111](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L111)*

Options object passed to constructor of variant of I18nUtil ItemProcessor
'loaded' with definitions.

### `Optional` adaptors

• **adaptors**? : *Adaptors*

*Inherited from [CtorOptions](README.md#ctoroptions).[adaptors](README.md#optional-adaptors)*

*Defined in [src/lib/i18n-util/types.ts:83](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L83)*

### `Optional` definitions

• **definitions**? : *[DefItemArrayLike](README.md#defitemarraylike)*

*Inherited from [LoadedBaseCtorOptions](README.md#loadedbasectoroptions).[definitions](README.md#optional-definitions)*

*Defined in [src/lib/i18n-util/types.ts:93](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L93)*

### `Optional` i18nUtil

• **i18nUtil**? : *T*

*Overrides [LoadedItemProcessorCtorOptions](README.md#loadeditemprocessorctoroptions).[i18nUtil](README.md#optional-i18nutil)*

*Defined in [src/lib/i18n-util/types.ts:113](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L113)*

### `Optional` keyResolver

• **keyResolver**? : *[KeyResolver](README.md#abstract-keyresolver)*

*Inherited from [CtorOptions](README.md#ctoroptions).[keyResolver](README.md#optional-keyresolver)*

*Defined in [src/lib/i18n-util/types.ts:81](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L81)*

### `Optional` localeResolver

• **localeResolver**? : *[LocaleResolver](README.md#abstract-localeresolver)*

*Inherited from [CtorOptions](README.md#ctoroptions).[localeResolver](README.md#optional-localeresolver)*

*Defined in [src/lib/i18n-util/types.ts:80](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L80)*

### `Optional` pathResolver

• **pathResolver**? : *[PathResolver](README.md#abstract-pathresolver)*

*Inherited from [CtorOptions](README.md#ctoroptions).[pathResolver](README.md#optional-pathresolver)*

*Defined in [src/lib/i18n-util/types.ts:79](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L79)*

### `Optional` schemator

• **schemator**? : *[Schemator](README.md#abstract-schemator)*

*Inherited from [CtorOptions](README.md#ctoroptions).[schemator](README.md#optional-schemator)*

*Defined in [src/lib/i18n-util/types.ts:78](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L78)*

### `Optional` validator

• **validator**? : *[Validator](README.md#abstract-validator)*

*Inherited from [CtorOptions](README.md#ctoroptions).[validator](README.md#optional-validator)*

*Defined in [src/lib/i18n-util/types.ts:84](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L84)*

### `Optional` valueResolver

• **valueResolver**? : *[ValueResolver](README.md#abstract-valueresolver)*

*Inherited from [CtorOptions](README.md#ctoroptions).[valueResolver](README.md#optional-valueresolver)*

*Defined in [src/lib/i18n-util/types.ts:82](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L82)*

###  LoadedItemProcessorCtorOptions

• **LoadedItemProcessorCtorOptions**:

*Defined in [src/lib/i18n-util/types.ts:101](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L101)*

Options object passed to constructor of variant of I18nUtil ItemProcessor
'loaded' with definitions.

### `Optional` adaptors

• **adaptors**? : *Adaptors*

*Inherited from [CtorOptions](README.md#ctoroptions).[adaptors](README.md#optional-adaptors)*

*Defined in [src/lib/i18n-util/types.ts:83](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L83)*

### `Optional` definitions

• **definitions**? : *[DefItemArrayLike](README.md#defitemarraylike)*

*Inherited from [LoadedBaseCtorOptions](README.md#loadedbasectoroptions).[definitions](README.md#optional-definitions)*

*Defined in [src/lib/i18n-util/types.ts:93](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L93)*

### `Optional` i18nUtil

• **i18nUtil**? : *T*

*Overrides [LoadedBaseCtorOptions](README.md#loadedbasectoroptions).[i18nUtil](README.md#optional-i18nutil)*

*Defined in [src/lib/i18n-util/types.ts:104](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L104)*

### `Optional` keyResolver

• **keyResolver**? : *[KeyResolver](README.md#abstract-keyresolver)*

*Inherited from [CtorOptions](README.md#ctoroptions).[keyResolver](README.md#optional-keyresolver)*

*Defined in [src/lib/i18n-util/types.ts:81](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L81)*

### `Optional` localeResolver

• **localeResolver**? : *[LocaleResolver](README.md#abstract-localeresolver)*

*Inherited from [CtorOptions](README.md#ctoroptions).[localeResolver](README.md#optional-localeresolver)*

*Defined in [src/lib/i18n-util/types.ts:80](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L80)*

### `Optional` pathResolver

• **pathResolver**? : *[PathResolver](README.md#abstract-pathresolver)*

*Inherited from [CtorOptions](README.md#ctoroptions).[pathResolver](README.md#optional-pathresolver)*

*Defined in [src/lib/i18n-util/types.ts:79](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L79)*

### `Optional` schemator

• **schemator**? : *[Schemator](README.md#abstract-schemator)*

*Inherited from [CtorOptions](README.md#ctoroptions).[schemator](README.md#optional-schemator)*

*Defined in [src/lib/i18n-util/types.ts:78](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L78)*

### `Optional` validator

• **validator**? : *[Validator](README.md#abstract-validator)*

*Inherited from [CtorOptions](README.md#ctoroptions).[validator](README.md#optional-validator)*

*Defined in [src/lib/i18n-util/types.ts:84](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L84)*

### `Optional` valueResolver

• **valueResolver**? : *[ValueResolver](README.md#abstract-valueresolver)*

*Inherited from [CtorOptions](README.md#ctoroptions).[valueResolver](README.md#optional-valueresolver)*

*Defined in [src/lib/i18n-util/types.ts:82](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L82)*

###  MissingItemsOptions

• **MissingItemsOptions**:

*Defined in [src/lib/i18n-util/types.ts:243](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L243)*

Options for method `missingItems` or methods that call it

### `Optional` locales

• **locales**? : *string[]*

*Defined in [src/lib/i18n-util/types.ts:245](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L245)*

###  PatchToOptions

• **PatchToOptions**:

*Defined in [src/lib/i18n-util/types.ts:180](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L180)*

Options for method `patch` or methods that call it

### `Optional` addUnmatched

• **addUnmatched**? : *undefined | false | true*

*Inherited from [UpdateByOptions](README.md#updatebyoptions).[addUnmatched](README.md#optional-addunmatched)*

*Defined in [src/lib/item/types-abstract.ts:238](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L238)*

### `Optional` hashType

• **hashType**? : *[HashType](README.md#hashtype)*

*Inherited from [UpdateByOptions](README.md#updatebyoptions).[hashType](README.md#optional-hashtype)*

*Defined in [src/lib/item/types-abstract.ts:222](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L222)*

### `Optional` itemFactory

• **itemFactory**? : *undefined | function*

*Inherited from [UpdateByOptions](README.md#updatebyoptions).[itemFactory](README.md#optional-itemfactory)*

*Defined in [src/lib/item/types-abstract.ts:239](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L239)*

### `Optional` sink

• **sink**? : *undefined | string*

*Defined in [src/lib/i18n-util/types.ts:187](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L187)*

Path to file that acts as 'sink' - any definition items passed to
`patch` method will be written to this file if they miss the `source`
property.

### `Optional` updater

• **updater**? : *keyof T | keyof T[] | UpdateByOptions<T, T2>["updater"]*

*Inherited from [UpdateOptions](README.md#updateoptions).[updater](README.md#optional-updater)*

*Defined in [src/lib/item/types-abstract.ts:253](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L253)*

###  ValidateAgainstOptions

• **ValidateAgainstOptions**:

*Defined in [src/lib/i18n-util/types.ts:150](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L150)*

### `Optional` includeMissing

• **includeMissing**? : *undefined | false | true*

*Inherited from [ItemsByLocaleOptions](README.md#itemsbylocaleoptions).[includeMissing](README.md#optional-includemissing)*

*Overrides [ItemsByLocaleOptions](README.md#itemsbylocaleoptions).[includeMissing](README.md#optional-includemissing)*

*Defined in [src/lib/item/types-abstract.ts:265](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L265)*

Whether definition items with value that indicates missing value should
be included.

By default, missing value is `null`.

### `Optional` locales

• **locales**? : *string[]*

*Inherited from [ValidateOptions](README.md#validateoptions).[locales](README.md#optional-locales)*

*Defined in [src/lib/i18n-util/types.ts:147](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L147)*

### `Optional` missingValue

• **missingValue**? : *any*

*Inherited from [ItemsByLocaleOptions](README.md#itemsbylocaleoptions).[missingValue](README.md#optional-missingvalue)*

*Overrides [ItemsByLocaleOptions](README.md#itemsbylocaleoptions).[missingValue](README.md#optional-missingvalue)*

*Defined in [src/lib/item/types-abstract.ts:271](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L271)*

The value that indicates a missing value.

By default, missing value is `null`.

### `Optional` scope

• **scope**? : *"locale" | "master"*

*Inherited from [GenerateOptions](README.md#generateoptions).[scope](README.md#optional-scope)*

*Defined in [src/lib/schemator/types-abstract.ts:15](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/schemator/types-abstract.ts#L15)*

### `Optional` type

• **type**? : *"usage" | "definition"*

*Defined in [src/lib/i18n-util/types.ts:153](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L153)*

###  ValidateOptions

• **ValidateOptions**:

*Defined in [src/lib/i18n-util/types.ts:144](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L144)*

Options for method `validate` or methods that call it

### `Optional` includeMissing

• **includeMissing**? : *undefined | false | true*

*Inherited from [ItemsByLocaleOptions](README.md#itemsbylocaleoptions).[includeMissing](README.md#optional-includemissing)*

*Defined in [src/lib/item/types-abstract.ts:265](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L265)*

Whether definition items with value that indicates missing value should
be included.

By default, missing value is `null`.

### `Optional` locales

• **locales**? : *string[]*

*Defined in [src/lib/i18n-util/types.ts:147](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L147)*

### `Optional` missingValue

• **missingValue**? : *any*

*Inherited from [ItemsByLocaleOptions](README.md#itemsbylocaleoptions).[missingValue](README.md#optional-missingvalue)*

*Defined in [src/lib/item/types-abstract.ts:271](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types-abstract.ts#L271)*

The value that indicates a missing value.

By default, missing value is `null`.

###  AddLocaleOptions

Ƭ **AddLocaleOptions**: *[ItemsByLocaleOptions](README.md#itemsbylocaleoptions) & [PatchOptions](README.md#patchoptions)‹T› & ResolveLocaleOptions*

*Defined in [src/lib/i18n-util/types.ts:220](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L220)*

Options for method `addLocale` or methods that call it

###  ClearLocaleOptions

Ƭ **ClearLocaleOptions**: *Omit‹[AddLocaleOptions](README.md#addlocaleoptions)‹T›, "includeMissing"› & ResolveLocaleOptions*

*Defined in [src/lib/i18n-util/types.ts:234](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L234)*

Options for method `clearLocale` or methods that call it

###  DefinitionOptions

Ƭ **DefinitionOptions**: *[AnyObj](README.md#anyobj) & [ItemsByLocaleOptions](README.md#itemsbylocaleoptions)*

*Defined in [src/lib/i18n-util/types.ts:159](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L159)*

Options for method `definitions` or methods that call it

###  DropOptions

Ƭ **DropOptions**: *[AnyObj](README.md#anyobj) & [DifferenceOptions](README.md#differenceoptions)*

*Defined in [src/lib/i18n-util/types.ts:193](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L193)*

Options for method `patch` or methods that call it

###  LocaleOptions

Ƭ **LocaleOptions**: *[ItemsByLocaleOptions](README.md#itemsbylocaleoptions) & ResolveLocaleOptions*

*Defined in [src/lib/i18n-util/types.ts:209](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L209)*

Options for method `locale` or methods that call it

###  MasterOptions

Ƭ **MasterOptions**: *[ItemsByLocaleOptions](README.md#itemsbylocaleoptions)*

*Defined in [src/lib/i18n-util/types.ts:198](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L198)*

Options for method `master` or methods that call it

###  MissingLocalesOptions

Ƭ **MissingLocalesOptions**: *[MissingItemsOptions](README.md#missingitemsoptions)*

*Defined in [src/lib/i18n-util/types.ts:251](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L251)*

Options for method `missingLocales` or methods that call it

###  Parser

Ƭ **Parser**: *function*

*Defined in [src/lib/i18n-util/types.ts:45](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L45)*

Function used by I18nUtil as parsers in AdaptorCollection

#### Type declaration:

▸ (`filepaths`: string[], `options?`: T): *[DefItem](README.md#defitem)[] | Promise‹[DefItem](README.md#defitem)[]›*

**Parameters:**

Name | Type |
------ | ------ |
`filepaths` | string[] |
`options?` | T |

###  PatchOptions

Ƭ **PatchOptions**: *[AnyObj](README.md#anyobj) & [UpdateOptions](README.md#updateoptions)‹T›*

*Defined in [src/lib/i18n-util/types.ts:174](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L174)*

Options for method `patch` or methods that call it

###  RemoveLocaleOptions

Ƭ **RemoveLocaleOptions**: *[FilterByLocaleOptions](README.md#filterbylocaleoptions) & [WriteOptions](README.md#writeoptions) & ResolveLocaleOptions*

*Defined in [src/lib/i18n-util/types.ts:227](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L227)*

Options for method `removeLocale` or methods that call it

###  Remover

Ƭ **Remover**: *function*

*Defined in [src/lib/i18n-util/types.ts:69](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L69)*

Function used by I18nUtil as remover in AdaptorCollection

#### Type declaration:

▸ (`filepaths`: string[], `options?`: T): *void | Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`filepaths` | string[] |
`options?` | T |

###  ResolveKeysOptions

Ƭ **ResolveKeysOptions**: *[ResolveOptions](README.md#resolveoptions)*

*Defined in [src/lib/i18n-util/types.ts:129](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L129)*

Options passed to KeyResolver or methods that call it

###  ResolveLocalesOptions

Ƭ **ResolveLocalesOptions**: *[ResolveOptions](README.md#resolveoptions)*

*Defined in [src/lib/i18n-util/types.ts:124](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L124)*

Options passed to LocaleResolver or methods that call it

###  ResolvePathsOptions

Ƭ **ResolvePathsOptions**: *[ResolveOptions](README.md#resolveoptions)*

*Defined in [src/lib/i18n-util/types.ts:119](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L119)*

Options passed to PathResolver or methods that call it

###  ResolveValuesOptions

Ƭ **ResolveValuesOptions**: *[ResolveOptions](README.md#resolveoptions)*

*Defined in [src/lib/i18n-util/types.ts:134](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L134)*

Options passed to ValueResolver or methods that call it

###  SchemaOptions

Ƭ **SchemaOptions**: *[MasterOptions](README.md#masteroptions) & [GenerateOptions](README.md#generateoptions)*

*Defined in [src/lib/i18n-util/types.ts:139](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L139)*

Options for method `schema` or methods that call it

###  StatsOptions

Ƭ **StatsOptions**: *[MissingItemsOptions](README.md#missingitemsoptions)*

*Defined in [src/lib/i18n-util/types.ts:266](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L266)*

Options for method `missingItems` or methods that call it

###  ToObjectOptions

Ƭ **ToObjectOptions**: *[ToObjectOptions](README.md#toobjectoptions)*

*Defined in [src/lib/i18n-util/types.ts:215](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L215)*

Options for method `toObject` or methods that call it

###  UsageAnalyzeOptions

Ƭ **UsageAnalyzeOptions**: *[MissingItemsOptions](README.md#missingitemsoptions)*

*Defined in [src/lib/i18n-util/types.ts:256](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L256)*

Options for method `usageAnalyze` or methods that call it

###  UsageAnalyzer

Ƭ **UsageAnalyzer**: *function*

*Defined in [src/lib/i18n-util/types.ts:61](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L61)*

Function used by I18nUtil as usageAnalyzer in AdaptorCollection

#### Type declaration:

▸ (`filepaths`: string[], `options?`: T): *[UseItem](README.md#useitem)[] | Promise‹[UseItem](README.md#useitem)[]›*

**Parameters:**

Name | Type |
------ | ------ |
`filepaths` | string[] |
`options?` | T |

###  UsageOptions

Ƭ **UsageOptions**: *[AnyObj](README.md#anyobj)*

*Defined in [src/lib/i18n-util/types.ts:164](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L164)*

Options for method `usage` or methods that call it

###  UsageValidateOptions

Ƭ **UsageValidateOptions**: *[MissingItemsOptions](README.md#missingitemsoptions)*

*Defined in [src/lib/i18n-util/types.ts:261](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L261)*

Options for method `usageValidate` or methods that call it

###  WriteOptions

Ƭ **WriteOptions**: *[AnyObj](README.md#anyobj)*

*Defined in [src/lib/i18n-util/types.ts:169](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L169)*

Options for method `write` or methods that call it

###  Writer

Ƭ **Writer**: *function*

*Defined in [src/lib/i18n-util/types.ts:53](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/types.ts#L53)*

Function used by I18nUtil as writer in AdaptorCollection

#### Type declaration:

▸ (`definitions`: [DefItem](README.md#defitem)[], `options?`: T): *void | Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [DefItem](README.md#defitem)[] |
`options?` | T |

___

###  I_Item

• **I_Item**:

*Defined in [src/lib/item/types.ts:13](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types.ts#L13)*

###  CtorOptions

Ƭ **CtorOptions**: *[CtorOptions](README.md#ctoroptions)*

*Defined in [src/lib/item/types.ts:18](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types.ts#L18)*

###  DifferenceOptions

Ƭ **DifferenceOptions**: *[DifferenceOptions](README.md#differenceoptions)*

*Defined in [src/lib/item/types.ts:28](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types.ts#L28)*

###  FilterByLocaleOptions

Ƭ **FilterByLocaleOptions**: *[FilterByLocaleOptions](README.md#filterbylocaleoptions)*

*Defined in [src/lib/item/types.ts:57](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types.ts#L57)*

###  FilterByOptions

Ƭ **FilterByOptions**: *[FilterByOptions](README.md#filterbyoptions)*

*Defined in [src/lib/item/types.ts:26](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types.ts#L26)*

###  FilterByPathOptions

Ƭ **FilterByPathOptions**: *[FilterByPathOptions](README.md#filterbypathoptions)*

*Defined in [src/lib/item/types.ts:59](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types.ts#L59)*

###  FilterByValueOptions

Ƭ **FilterByValueOptions**: *[FilterByValueOptions](README.md#filterbyvalueoptions)*

*Defined in [src/lib/item/types.ts:55](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types.ts#L55)*

###  FilterMissingOptions

Ƭ **FilterMissingOptions**: *[FilterMissingOptions](README.md#filtermissingoptions)*

*Defined in [src/lib/item/types.ts:61](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types.ts#L61)*

###  FromObjectOptions

Ƭ **FromObjectOptions**: *[FromObjectOptions](README.md#fromobjectoptions)‹T›*

*Defined in [src/lib/item/types.ts:63](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types.ts#L63)*

###  HashType

Ƭ **HashType**: *[HashType](README.md#hashtype)*

*Defined in [src/lib/item/types.ts:14](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types.ts#L14)*

###  IntersectionOptions

Ƭ **IntersectionOptions**: *[IntersectionOptions](README.md#intersectionoptions)*

*Defined in [src/lib/item/types.ts:32](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types.ts#L32)*

###  Item

Ƭ **Item**: *[Item](README.md#item)*

*Defined in [src/lib/item/types.ts:16](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types.ts#L16)*

###  ItemArray

Ƭ **ItemArray**: *[ItemArray](README.md#itemarray)‹T›*

*Defined in [src/lib/item/types.ts:20](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types.ts#L20)*

###  ItemArrayLike

Ƭ **ItemArrayLike**: *[ItemArrayLike](README.md#itemarraylike)‹T›*

*Defined in [src/lib/item/types.ts:24](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types.ts#L24)*

###  ItemList

Ƭ **ItemList**: *[ItemList](README.md#itemlist)‹T›*

*Defined in [src/lib/item/types.ts:22](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types.ts#L22)*

###  ItemsByLocaleOptions

Ƭ **ItemsByLocaleOptions**: *[ItemsByLocaleOptions](README.md#itemsbylocaleoptions)*

*Defined in [src/lib/item/types.ts:53](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types.ts#L53)*

###  ToObjectOptions

Ƭ **ToObjectOptions**: *[ToObjectOptions](README.md#toobjectoptions)*

*Defined in [src/lib/item/types.ts:67](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types.ts#L67)*

###  ToObjectResult

Ƭ **ToObjectResult**: *[ToObjectResult](README.md#toobjectresult)‹IsSimple, IsMerged, T›*

*Defined in [src/lib/item/types.ts:82](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types.ts#L82)*

###  ToObjectResultAny

Ƭ **ToObjectResultAny**: *[ToObjectResultAny](README.md#toobjectresultany)‹T›*

*Defined in [src/lib/item/types.ts:78](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types.ts#L78)*

###  ToObjectResultExpanded

Ƭ **ToObjectResultExpanded**: *[ToObjectResultExpanded](README.md#toobjectresultexpanded)‹T›*

*Defined in [src/lib/item/types.ts:71](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types.ts#L71)*

###  ToObjectResultExpandedMerged

Ƭ **ToObjectResultExpandedMerged**: *[ToObjectResultExpandedMerged](README.md#toobjectresultexpandedmerged)‹T›*

*Defined in [src/lib/item/types.ts:74](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types.ts#L74)*

###  ToObjectResultSimple

Ƭ **ToObjectResultSimple**: *[ToObjectResultSimple](README.md#toobjectresultsimple)*

*Defined in [src/lib/item/types.ts:69](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types.ts#L69)*

###  ToObjectResultSimpleMerged

Ƭ **ToObjectResultSimpleMerged**: *[ToObjectResultSimpleMerged](README.md#toobjectresultsimplemerged)*

*Defined in [src/lib/item/types.ts:70](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types.ts#L70)*

###  UnionOptions

Ƭ **UnionOptions**: *[UnionOptions](README.md#unionoptions)*

*Defined in [src/lib/item/types.ts:30](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types.ts#L30)*

###  UpdateByOptions

Ƭ **UpdateByOptions**: *[UpdateByOptions](README.md#updatebyoptions)‹T, T2›*

*Defined in [src/lib/item/types.ts:34](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types.ts#L34)*

###  UpdateOptions

Ƭ **UpdateOptions**: *[UpdateOptions](README.md#updateoptions)‹T, T2›*

*Defined in [src/lib/item/types.ts:43](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types.ts#L43)*

###  UpdatePropOptions

Ƭ **UpdatePropOptions**: *[UpdatePropOptions](README.md#updatepropoptions)‹T›*

*Defined in [src/lib/item/types.ts:39](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types.ts#L39)*

###  UpdateReturn

Ƭ **UpdateReturn**: *[UpdateReturn](README.md#updatereturn)‹T, T2›*

*Defined in [src/lib/item/types.ts:48](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/types.ts#L48)*

## Type aliases

###  Adaptor

Ƭ **Adaptor**: *[NamedItem](README.md#nameditem)*

*Defined in [src/lib/i18n-util/index.ts:19](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L19)*

___

###  AnyFunc

Ƭ **AnyFunc**: *function*

*Defined in [src/types/index.ts:6](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/types/index.ts#L6)*

General variant for typed functions.

#### Type declaration:

▸ (...`args`: A extends any[] ? A : A[]): *R*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A extends any[] ? A : A[] |

___

###  AnyObj

Ƭ **AnyObj**: *object*

*Defined in [src/types/index.ts:10](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/types/index.ts#L10)*

#### Type declaration:

* \[ **key**: *number*\]: V

___

###  Cmd

Ƭ **Cmd**: *typeof program*

*Defined in [src/bin/lib/types.ts:6](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/bin/lib/types.ts#L6)*

___

###  DeepObject

Ƭ **DeepObject**: *object*

*Defined in [src/types/index.ts:18](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/types/index.ts#L18)*

#### Type declaration:

* \[ **key**: *string*\]: T extends infer X ? DeepObject<X> | X : never

___

###  DefItem

Ƭ **DefItem**: *[Item](README.md#item)*

*Defined in [src/lib/i18n-util/item-processor.ts:20](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L20)*

*Defined in [src/lib/i18n-util/loader.ts:10](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/loader.ts#L10)*

*Defined in [src/lib/i18n-util/index.ts:17](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L17)*

___

###  DefItemArrayLike

Ƭ **DefItemArrayLike**: *[ItemArrayLike](README.md#itemarraylike)*

*Defined in [src/lib/i18n-util/item-processor.ts:21](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L21)*

*Defined in [src/lib/i18n-util/index.ts:18](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L18)*

___

###  ExportItem

Ƭ **ExportItem**: *T & object*

*Defined in [src/lib/adaptors/i18n/index.ts:20](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/i18n/index.ts#L20)*

___

###  FileSystem

Ƭ **FileSystem**: *typeof fs*

*Defined in [src/lib/adaptors/json-yaml/index.ts:25](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/json-yaml/index.ts#L25)*

___

###  IDeepWalkHookOptions

Ƭ **IDeepWalkHookOptions**: *[IDeepWalkHookOptionsBase](interfaces/ideepwalkhookoptionsbase.md)‹V› & O*

*Defined in [src/lib/util/walk/types.ts:30](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/walk/types.ts#L30)*

___

###  IMergeDeepAssignFunc

Ƭ **IMergeDeepAssignFunc**: *function*

*Defined in [src/lib/util/walk/types.ts:51](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/walk/types.ts#L51)*

#### Type declaration:

▸ (`params`: [IMergeDeepAssignFuncParams](interfaces/imergedeepassignfuncparams.md)): *any | void | never*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [IMergeDeepAssignFuncParams](interfaces/imergedeepassignfuncparams.md) |

___

###  IMergeDeepBranchFunc

Ƭ **IMergeDeepBranchFunc**: *function*

*Defined in [src/lib/util/walk/types.ts:43](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/walk/types.ts#L43)*

#### Type declaration:

▸ (`params`: [IMergeDeepOptions](README.md#imergedeepoptions)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [IMergeDeepOptions](README.md#imergedeepoptions) |

___

###  IMergeDeepIsBranchFunc

Ƭ **IMergeDeepIsBranchFunc**: *function*

*Defined in [src/lib/util/walk/types.ts:45](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/walk/types.ts#L45)*

#### Type declaration:

▸ (`params`: [IMergeDeepOptions](README.md#imergedeepoptions)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [IMergeDeepOptions](README.md#imergedeepoptions) |

___

###  IMergeDeepMergeFunc

Ƭ **IMergeDeepMergeFunc**: *function*

*Defined in [src/lib/util/walk/types.ts:60](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/walk/types.ts#L60)*

#### Type declaration:

▸ (`params`: [IMergeDeepMergeFuncParams](interfaces/imergedeepmergefuncparams.md)): *any | void | never*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [IMergeDeepMergeFuncParams](interfaces/imergedeepmergefuncparams.md) |

___

###  IMergeDeepOptions

Ƭ **IMergeDeepOptions**: *Omit‹[IDeepWalkHookOptions](README.md#ideepwalkhookoptions)‹object›, "key"›*

*Defined in [src/lib/util/walk/types.ts:35](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/walk/types.ts#L35)*

___

###  IOrigin

Ƭ **IOrigin**: *[DeepObject](README.md#deepobject)‹[I_Index](README.md#i_index)›*

*Defined in [src/lib/util/walk/types.ts:22](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/walk/types.ts#L22)*

Nested object storing info on which path has been seen first by entry at
which index

___

###  IPath

Ƭ **IPath**: *string[]*

*Defined in [src/lib/util/walk/types-abstract.ts:10](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/walk/types-abstract.ts#L10)*

Types for functions of walk module.

These types are more concrete compared to the abstract types.

These types should be used by classes / concretions in this or other
components.

___

###  IQueueItem

Ƭ **IQueueItem**: *[Record‹string, any›, [IPath](README.md#ipath)]*

*Defined in [src/lib/util/walk/types.ts:15](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/walk/types.ts#L15)*

___

###  ISafeWriters

Ƭ **ISafeWriters**: *object*

*Defined in [src/lib/util/fs.ts:43](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/fs.ts#L43)*

Object with FileSystem writers passed to the function passed to `safeWrite`.

#### Type declaration:

* **promises**(): *object*

  * **unlink**(): *function*

    * (...`args`: Parameters‹typeof unlink›): *ReturnType‹typeof unlink›*

  * **writeFile**(): *function*

    * (...`args`: Parameters‹typeof writeFile›): *ReturnType‹typeof writeFile›*

___

###  I_Index

Ƭ **I_Index**: *number*

*Defined in [src/lib/util/walk/types.ts:16](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/walk/types.ts#L16)*

___

###  Parser

Ƭ **Parser**: *[Parser](README.md#parser)*

*Defined in [src/lib/i18n-util/index.ts:20](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L20)*

___

###  Remover

Ƭ **Remover**: *[Remover](README.md#remover)*

*Defined in [src/lib/i18n-util/index.ts:22](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L22)*

___

###  RequiredProps

Ƭ **RequiredProps**: *Omit‹T, P› & Required‹Pick‹T, P››*

*Defined in [src/types/index.ts:15](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/types/index.ts#L15)*

___

###  Table

Ƭ **Table**: *string[][] & object*

*Defined in [src/bin/lib/table.ts:5](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/bin/lib/table.ts#L5)*

___

###  UnwrapPromise

Ƭ **UnwrapPromise**: *T extends Promise<infer U1> ? U1 extends Promise<infer U2> ? U2 extends Promise<infer U3> ? U3 : U2 : U1 : T*

*Defined in [src/types/index.ts:25](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/types/index.ts#L25)*

Unpack Promise up to depth of 3 layers

___

###  UsageAnalyzer

Ƭ **UsageAnalyzer**: *[UsageAnalyzer](README.md#usageanalyzer)*

*Defined in [src/lib/i18n-util/index.ts:23](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L23)*

___

###  UseItem

Ƭ **UseItem**: *[Item](README.md#item)*

*Defined in [src/lib/i18n-util/item-processor.ts:22](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L22)*

*Defined in [src/lib/i18n-util/loader.ts:11](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/loader.ts#L11)*

___

###  UseItemArrayLike

Ƭ **UseItemArrayLike**: *[ItemArrayLike](README.md#itemarraylike)*

*Defined in [src/lib/i18n-util/item-processor.ts:23](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/item-processor.ts#L23)*

___

###  Writer

Ƭ **Writer**: *[Writer](README.md#writer)*

*Defined in [src/lib/i18n-util/index.ts:21](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/i18n-util/index.ts#L21)*

## Variables

### `Const` adaptorDebug

• **adaptorDebug**: *Debugger* = debug.extend('adaptor')

*Defined in [src/lib/util/debug.ts:8](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/debug.ts#L8)*

___

### `Const` cliDebug

• **cliDebug**: *Debugger* = debug.extend('cli')

*Defined in [src/lib/util/debug.ts:6](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/debug.ts#L6)*

___

### `Const` commands

• **commands**: *[function, CommandOptions] | [function][]* = [
  [createDropCmd],
  [createPatchCmd],
  [createListCmd, { isDefault: true }],
  [createExportCmd],
  [createLocaleCmd],
  [createSchemaCmd],
  [createValidateCmd],
] as (
  | [(parent: Cmd, options: CommandOptions) => Cmd, CommandOptions]
  | [(parent: Cmd, options: CommandOptions) => Cmd]
)[]

*Defined in [src/bin/index.ts:13](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/bin/index.ts#L13)*

___

### `Const` cwdPathResolverDebug

• **cwdPathResolverDebug**: *Debugger* = pathResolverDebug.extend('cwd')

*Defined in [src/lib/util/debug.ts:19](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/debug.ts#L19)*

___

### `Const` globKeyResolverDebug

• **globKeyResolverDebug**: *Debugger* = keyResolverDebug.extend('glob')

*Defined in [src/lib/util/debug.ts:26](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/debug.ts#L26)*

___

### `Const` globLocaleResolverDebug

• **globLocaleResolverDebug**: *Debugger* = localeResolverDebug.extend('glob')

*Defined in [src/lib/util/debug.ts:23](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/debug.ts#L23)*

___

### `Const` globPathResolverDebug

• **globPathResolverDebug**: *Debugger* = pathResolverDebug.extend('glob')

*Defined in [src/lib/util/debug.ts:20](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/debug.ts#L20)*

___

### `Const` globValueResolverDebug

• **globValueResolverDebug**: *Debugger* = valueResolverDebug.extend('glob')

*Defined in [src/lib/util/debug.ts:29](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/debug.ts#L29)*

___

### `Const` i18nUtil

• **i18nUtil**: *[I18nUtil](classes/i18nutil.md)‹›* = new I18nUtil()

*Defined in [src/index.ts:20](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/index.ts#L20)*

Instance of I18nUtil.

___

### `Const` jyDebug

• **jyDebug**: *Debugger* = adaptorDebug.extend('json-yaml')

*Defined in [src/lib/util/debug.ts:9](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/debug.ts#L9)*

___

### `Const` keyResolverDebug

• **keyResolverDebug**: *Debugger* = resolverDebug.extend('key')

*Defined in [src/lib/util/debug.ts:15](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/debug.ts#L15)*

___

### `Const` localeResolverDebug

• **localeResolverDebug**: *Debugger* = resolverDebug.extend('locale')

*Defined in [src/lib/util/debug.ts:14](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/debug.ts#L14)*

___

###  name

• **name**: *string* = ""

*Defined in [src/lib/util/package-info.ts:3](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/package-info.ts#L3)*

___

### `Const` nullKeyResolverDebug

• **nullKeyResolverDebug**: *Debugger* = keyResolverDebug.extend('null')

*Defined in [src/lib/util/debug.ts:25](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/debug.ts#L25)*

___

### `Const` nullLocaleResolverDebug

• **nullLocaleResolverDebug**: *Debugger* = localeResolverDebug.extend('null')

*Defined in [src/lib/util/debug.ts:22](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/debug.ts#L22)*

___

### `Const` nullPathResolverDebug

• **nullPathResolverDebug**: *Debugger* = pathResolverDebug.extend('null')

*Defined in [src/lib/util/debug.ts:18](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/debug.ts#L18)*

___

### `Const` nullValueResolverDebug

• **nullValueResolverDebug**: *Debugger* = valueResolverDebug.extend('null')

*Defined in [src/lib/util/debug.ts:28](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/debug.ts#L28)*

___

###  packageJson

• **packageJson**: *object*

*Defined in [src/lib/util/package-info.ts:3](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/package-info.ts#L3)*

#### Type declaration:

* **name**: *string* = ""

* **version**: *string* = ""

___

### `Const` pathResolverDebug

• **pathResolverDebug**: *Debugger* = resolverDebug.extend('path')

*Defined in [src/lib/util/debug.ts:13](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/debug.ts#L13)*

___

### `Const` program

• **program**: *Command‹›* = new Command()
  .version(version)
  .name('i18n-util')
  .allowUnknownOption()

*Defined in [src/bin/index.ts:26](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/bin/index.ts#L26)*

___

### `Const` resolverDebug

• **resolverDebug**: *Debugger* = debug.extend('resolver')

*Defined in [src/lib/util/debug.ts:12](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/debug.ts#L12)*

___

### `Const` schematorDebug

• **schematorDebug**: *Debugger* = debug.extend('schemator')

*Defined in [src/lib/util/debug.ts:31](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/debug.ts#L31)*

___

### `Const` validatorDebug

• **validatorDebug**: *Debugger* = debug.extend('validator')

*Defined in [src/lib/util/debug.ts:33](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/debug.ts#L33)*

___

### `Const` valueResolverDebug

• **valueResolverDebug**: *Debugger* = resolverDebug.extend('value')

*Defined in [src/lib/util/debug.ts:16](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/debug.ts#L16)*

___

###  version

• **version**: *string* = ""

*Defined in [src/lib/util/package-info.ts:3](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/package-info.ts#L3)*

___

### `Const` vueDebug

• **vueDebug**: *Debugger* = adaptorDebug.extend('vue')

*Defined in [src/lib/util/debug.ts:10](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/debug.ts#L10)*

## Functions

###  applyAuxFilesOptions

▸ **applyAuxFilesOptions**(`cmd`: [Cmd](README.md#cmd), `options`: object): *void*

*Defined in [src/bin/lib/options-aux-files.ts:36](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/bin/lib/options-aux-files.ts#L36)*

Apply options that allow to provide def and usage files that should be used
for something else than being the target of the command.

**Parameters:**

▪ **cmd**: *[Cmd](README.md#cmd)*

▪`Default value`  **options**: *object*= {}

Name | Type |
------ | ------ |
`desc?` | undefined &#124; string |

**Returns:** *void*

___

###  applyGeneralOptions

▸ **applyGeneralOptions**(`cmd`: [Cmd](README.md#cmd)): *void*

*Defined in [src/bin/lib/options-general.ts:67](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/bin/lib/options-general.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`cmd` | [Cmd](README.md#cmd) |

**Returns:** *void*

___

###  applyItemOptions

▸ **applyItemOptions**(`cmd`: [Cmd](README.md#cmd), `options`: object): *void*

*Defined in [src/bin/lib/options-item.ts:13](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/bin/lib/options-item.ts#L13)*

Apply options that allow to select and filter definition and usage items

**Parameters:**

▪ **cmd**: *[Cmd](README.md#cmd)*

▪`Default value`  **options**: *object*= {}

Name | Type |
------ | ------ |
`desc?` | undefined &#124; string |

**Returns:** *void*

___

###  applyMixins

▸ **applyMixins**(`derivedCtor`: any, `baseCtors`: any[]): *void*

*Defined in [src/lib/util/apply-mixins.ts:1](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/apply-mixins.ts#L1)*

**Parameters:**

Name | Type |
------ | ------ |
`derivedCtor` | any |
`baseCtors` | any[] |

**Returns:** *void*

___

###  applyOptions

▸ **applyOptions**(`cmd`: [Cmd](README.md#cmd), `appliers`: [function] | [function, any][]): *void*

*Defined in [src/bin/lib/options.ts:40](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/bin/lib/options.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`cmd` | [Cmd](README.md#cmd) |
`appliers` | [function] &#124; [function, any][] |

**Returns:** *void*

___

###  applyOutputOptions

▸ **applyOutputOptions**(`cmd`: [Cmd](README.md#cmd), `options`: object): *void*

*Defined in [src/bin/lib/options-output.ts:3](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/bin/lib/options-output.ts#L3)*

**Parameters:**

▪ **cmd**: *[Cmd](README.md#cmd)*

▪`Default value`  **options**: *object*= {}

Name | Type |
------ | ------ |
`desc?` | undefined &#124; string |
`required?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  applyStaticMixins

▸ **applyStaticMixins**(`derivedCtor`: any, `baseCtors`: any[]): *void*

*Defined in [src/lib/util/apply-mixins.ts:13](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/apply-mixins.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`derivedCtor` | any |
`baseCtors` | any[] |

**Returns:** *void*

___

###  borderLen

▸ **borderLen**(`table`: [Table](README.md#table), `side`: "left" | "right" | "top" | "bottom" | "horizontal" | "vertical", `cellCount`: number): *number*

*Defined in [src/bin/lib/table.ts:13](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/bin/lib/table.ts#L13)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`table` | [Table](README.md#table) | - |
`side` | "left" &#124; "right" &#124; "top" &#124; "bottom" &#124; "horizontal" &#124; "vertical" | - |
`cellCount` | number | 0 |

**Returns:** *number*

___

###  breakWords

▸ **breakWords**(`table`: [Table](README.md#table)): *string[][] & object*

*Defined in [src/bin/lib/table.ts:165](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/bin/lib/table.ts#L165)*

**Parameters:**

Name | Type |
------ | ------ |
`table` | [Table](README.md#table) |

**Returns:** *string[][] & object*

___

###  calcColWidths

▸ **calcColWidths**(`table`: [Table](README.md#table), `options`: object): *number[]*

*Defined in [src/bin/lib/table.ts:81](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/bin/lib/table.ts#L81)*

**Parameters:**

▪ **table**: *[Table](README.md#table)*

▪`Default value`  **options**: *object*= {}

Name | Type |
------ | ------ |
`max?` | undefined &#124; null &#124; number[] |
`min?` | undefined &#124; null &#124; number[] |

**Returns:** *number[]*

___

###  collect

▸ **collect**(`value`: any, `previous`: any[]): *any[]*

*Defined in [src/bin/lib/util.ts:6](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/bin/lib/util.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`previous` | any[] |

**Returns:** *any[]*

___

###  createDropCmd

▸ **createDropCmd**(`program?`: [Cmd](README.md#cmd), `options`: CommandOptions): *Command‹›*

*Defined in [src/bin/drop.ts:17](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/bin/drop.ts#L17)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`program?` | [Cmd](README.md#cmd) | - |
`options` | CommandOptions | {} |

**Returns:** *Command‹›*

___

###  createExportCmd

▸ **createExportCmd**(`program?`: [Cmd](README.md#cmd), `options`: CommandOptions): *Command‹›*

*Defined in [src/bin/export.ts:13](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/bin/export.ts#L13)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`program?` | [Cmd](README.md#cmd) | - |
`options` | CommandOptions | {} |

**Returns:** *Command‹›*

___

###  createListCmd

▸ **createListCmd**(`program?`: [Cmd](README.md#cmd), `options`: CommandOptions): *Command‹›*

*Defined in [src/bin/list.ts:12](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/bin/list.ts#L12)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`program?` | [Cmd](README.md#cmd) | - |
`options` | CommandOptions | {} |

**Returns:** *Command‹›*

___

###  createLocaleCmd

▸ **createLocaleCmd**(`program?`: [Cmd](README.md#cmd), `options`: CommandOptions): *Command‹›*

*Defined in [src/bin/locale.ts:12](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/bin/locale.ts#L12)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`program?` | [Cmd](README.md#cmd) | - |
`options` | CommandOptions | {} |

**Returns:** *Command‹›*

___

###  createObjectPath

▸ **createObjectPath**<**T**>(`obj`: T, `path`: [IPath](README.md#ipath), `options`: object): *[DeepObject](README.md#deepobject)*

*Defined in [src/lib/util/walk/index.ts:23](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/walk/index.ts#L23)*

Given an object and a path as a list of strings, creates an object path
(e.g. obj.x.y.z) or retrieves the value if the path already exists.

**Type parameters:**

▪ **T**: *[DeepObject](README.md#deepobject)*

**Parameters:**

▪ **obj**: *T*

▪ **path**: *[IPath](README.md#ipath)*

▪`Default value`  **options**: *object*= {}

Name | Type |
------ | ------ |
`overwrite?` | undefined &#124; false &#124; true |

**Returns:** *[DeepObject](README.md#deepobject)*

___

###  createPatchCmd

▸ **createPatchCmd**(`program?`: [Cmd](README.md#cmd), `options`: CommandOptions): *Command‹›*

*Defined in [src/bin/patch.ts:18](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/bin/patch.ts#L18)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`program?` | [Cmd](README.md#cmd) | - |
`options` | CommandOptions | {} |

**Returns:** *Command‹›*

___

###  createSchemaCmd

▸ **createSchemaCmd**(`program?`: [Cmd](README.md#cmd), `options`: CommandOptions): *Command‹›*

*Defined in [src/bin/schema.ts:12](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/bin/schema.ts#L12)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`program?` | [Cmd](README.md#cmd) | - |
`options` | CommandOptions | {} |

**Returns:** *Command‹›*

___

###  createValidateCmd

▸ **createValidateCmd**(`program?`: [Cmd](README.md#cmd), `options`: CommandOptions): *Command‹›*

*Defined in [src/bin/validate.ts:14](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/bin/validate.ts#L14)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`program?` | [Cmd](README.md#cmd) | - |
`options` | CommandOptions | {} |

**Returns:** *Command‹›*

___

### `Const` debug

▸ **debug**(`msg`: string): *void*

*Defined in [src/lib/adaptors/vue/content-group-dom.ts:10](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/adaptors/vue/content-group-dom.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string |

**Returns:** *void*

___

###  deepWalk

▸ **deepWalk**<**A**, **B**, **L**>(`params`: object, `obj`: object): *void*

*Defined in [src/lib/util/walk/index.ts:62](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/walk/index.ts#L62)*

Walks objects and calls hooks on following events:
- `isBranch` - Checks whether current node is a branch node. Return value
  decides whether the current node is a branch.
- `onBranch` - called on branch node. Return value is walked.
- `onLeaf` - called on leaf node. Return value is ignored.

The functions are called with an object with following properties:
- `key` - key of the current node
- `value` - value of the node
- `path` - path to the parent node (`key` is not part of the `path`)

Additional arguments to be passed to each function can be specified
with an object assigned to the `args` prop.

**Type parameters:**

▪ **A**: *[AnyObj](README.md#anyobj)*

▪ **B**: *any*

▪ **L**: *any*

**Parameters:**

▪ **params**: *object*

Name | Type |
------ | ------ |
`args?` | A |
`isBranch?` | undefined &#124; function |
`onBranch?` | undefined &#124; function |
`onLeaf?` | undefined &#124; function |

▪ **obj**: *object*

**Returns:** *void*

___

###  file

▸ **file**(`options`: FileOptions): *Promise‹FileResult›*

*Defined in [src/lib/util/p-tmp.ts:3](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/p-tmp.ts#L3)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | FileOptions | {} |

**Returns:** *Promise‹FileResult›*

___

###  filterDefinitions

▸ **filterDefinitions**<**T**>(`i18nUtil`: [I18nUtil](README.md#abstract-i18nutil), `items`: [ItemArrayLike](README.md#itemarraylike), `options`: T): *Promise‹object›*

*Defined in [src/bin/lib/options-item.ts:369](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/bin/lib/options-item.ts#L369)*

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`i18nUtil` | [I18nUtil](README.md#abstract-i18nutil) |
`items` | [ItemArrayLike](README.md#itemarraylike) |
`options` | T |

**Returns:** *Promise‹object›*

___

###  filterMap

▸ **filterMap**<**T**, **R**>(`arr`: T[], `filterFn`: function, `mapFn`: function): *R[]*

*Defined in [src/lib/util/array.ts:65](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/array.ts#L65)*

Filter followed by map in single iteration.

**Type parameters:**

▪ **T**: *any*

▪ **R**: *any*

**Parameters:**

▪ **arr**: *T[]*

▪`Default value`  **filterFn**: *function*= (x) => x

▸ (`arg`: T): *any*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | T |

▪`Default value`  **mapFn**: *function*= (x) => x as R

▸ (`arg`: T): *R*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | T |

**Returns:** *R[]*

___

###  findMap

▸ **findMap**<**T**, **R**>(`arr`: T[], `predicate`: function): *R | undefined*

*Defined in [src/lib/util/array.ts:130](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/array.ts#L130)*

Like Array.prototype.find but on match returns value returned by predicate.

**Type parameters:**

▪ **T**: *any*

▪ **R**: *any*

**Parameters:**

▪ **arr**: *T[]*

▪`Default value`  **predicate**: *function*= (x) => x as R

▸ (`arg`: T): *R*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | T |

**Returns:** *R | undefined*

___

### `Const` getIteratee

▸ **getIteratee**<**T**>(`hashType`: [HashType](README.md#hashtype)): *function*

*Defined in [src/lib/item/index.ts:97](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L97)*

**Type parameters:**

▪ **T**: *[Item](README.md#item)*

**Parameters:**

Name | Type |
------ | ------ |
`hashType` | [HashType](README.md#hashtype) |

**Returns:** *function*

▸ (`item`: T): *number*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

___

###  hashString

▸ **hashString**(`str`: string): *number*

*Defined in [src/lib/util/hash.ts:4](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/hash.ts#L4)*

Hash string

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *number*

___

###  hashStringArray

▸ **hashStringArray**(`arr`: string[]): *number*

*Defined in [src/lib/util/hash.ts:21](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/hash.ts#L21)*

Hash an array of strings based on its content.

**Parameters:**

Name | Type |
------ | ------ |
`arr` | string[] |

**Returns:** *number*

___

###  intersectionObject

▸ **intersectionObject**(`baseOpts`: object, ...`opts`: object[]): *object*

*Defined in [src/bin/lib/util.ts:10](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/bin/lib/util.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`baseOpts` | object |
`...opts` | object[] |

**Returns:** *object*

___

###  isItem

▸ **isItem**(`item`: any): *boolean*

*Defined in [src/lib/item/index.ts:781](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/item/index.ts#L781)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | any |

**Returns:** *boolean*

___

###  loadFromCli

▸ **loadFromCli**<**A**, **R**>(`options`: object, `callback`: function): *(Anonymous function)*

*Defined in [src/bin/lib/load-from-cli.ts:17](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/bin/lib/load-from-cli.ts#L17)*

**Type parameters:**

▪ **A**: *string*

▪ **R**: *any*

**Parameters:**

▪`Default value`  **options**: *object*= {}

Name | Type |
------ | ------ |
`args?` | A[] |
`auxFiles?` | undefined &#124; false &#124; true |
`customArg?` | Omit‹Parameters<typeof parseVariadicArg>[3] & object, "cmd" &#124; "option"› |
`program?` | [Cmd](README.md#cmd) |

▪ **callback**: *function*

▸ (`options`: object): *R extends Promise<any> ? Promise<UnwrapPromise<R>> : R*

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`auxDefItems` | [Item](README.md#item)[] |
`auxUseItems` | [Item](README.md#item)[] |
`customArgs` | string[][] |
`defItems` | [Item](README.md#item)[] |
`i18nUtil` | [I18nUtil](README.md#abstract-i18nutil) |
`opts` | object |
`unknownOpts` | object |
`useItems` | [Item](README.md#item)[] |

**Returns:** *(Anonymous function)*

___

###  mapFilter

▸ **mapFilter**<**T**, **R**>(`arr`: T[], `mapFn`: function, `filterFn`: function): *R[]*

*Defined in [src/lib/util/array.ts:49](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/array.ts#L49)*

Map and filter mapped values in single iteration.

**Type parameters:**

▪ **T**: *any*

▪ **R**: *any*

**Parameters:**

▪ **arr**: *T[]*

▪`Default value`  **mapFn**: *function*= (x) => x as R

▸ (`arg`: T): *R*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | T |

▪`Default value`  **filterFn**: *function*= (x) => x

▸ (`arg`: R): *any*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | R |

**Returns:** *R[]*

___

###  mapFilterUniq

▸ **mapFilterUniq**<**T**, **R**>(`arr`: T[], `mapFn`: function, `filterFn`: function, `uniqFn`: function): *R[]*

*Defined in [src/lib/util/array.ts:81](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/array.ts#L81)*

Map, filter mapped values, and keep only unique mapped values in single
iteration.

**Type parameters:**

▪ **T**: *any*

▪ **R**: *any*

**Parameters:**

▪ **arr**: *T[]*

▪`Default value`  **mapFn**: *function*= (x) => x as R

▸ (`arg`: T): *R*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | T |

▪`Default value`  **filterFn**: *function*= (x) => x

▸ (`arg`: R): *any*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | R |

▪`Default value`  **uniqFn**: *function*= (x) => x

▸ (`arg`: R): *any*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | R |

**Returns:** *R[]*

___

###  mapUniq

▸ **mapUniq**<**T**, **R**>(`arr`: T[], `mapFn`: function, `uniqFn`: function): *R[]*

*Defined in [src/lib/util/array.ts:6](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/array.ts#L6)*

Map and keep only unique mapped values in single iteration.

**Type parameters:**

▪ **T**: *any*

▪ **R**: *any*

**Parameters:**

▪ **arr**: *T[]*

▪`Default value`  **mapFn**: *function*= (x) => x as R

▸ (`arg`: T): *R*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | T |

▪`Default value`  **uniqFn**: *function*= (x) => x

▸ (`arg`: R): *any*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | R |

**Returns:** *R[]*

___

###  mergeDeepWith

▸ **mergeDeepWith**<**T**>(`options`: object, ...`objects`: T[]): *object*

*Defined in [src/lib/util/walk/index.ts:148](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/walk/index.ts#L148)*

Walks objects and merges values on the leaf nodes. Returns an object with
two properties:
- `value` - the new object with the merged values.
- `origin` - object with the same structure with the indices of first
  occurence instead of values

The function is inspired by Ramda's mergeDeepWith, with the difference that
this function allows user to tap into hooks that are called on:
- `isBranch` - checking whether current node is a branch node
- `onBranch` - branch node
- `onAssign` - assignment to leaf node (AKA if old value is `undefined`)
- `onMerge` - merge to leaf node (AKA old values is not `undefined`)

`onAssign` is called with object with following properties:
- `value` - value that is being assigned
- `path` - list of strings representing the nested object path
- `index` - 0-based index, the position of the parent object (where the
  function was called) within the list of objects that are to be merged.
- `source` - the parent object where the function was called.
- `origin` - index position where a value for the given path was first
  observed. If this is the first time the value is observed,
  `origin` === `index`.

The return value of `onAssign` will be assigned to a newly created nested
object at the given path.

`onMerge` is called with all the above, plus following properties:
- `oldValue` - value that has been previously assigned to the path.

The return value of `onAssign` will be assigned to a newly created nested
object at the given path.

Hooks `onBranch` and `isBranch` are the same as defined in `deepWalk`

**Type parameters:**

▪ **T**: *[DeepObject](README.md#deepobject)*

**Parameters:**

▪`Default value`  **options**: *object*= {}

Name | Type |
------ | ------ |
`isBranch?` | [IMergeDeepIsBranchFunc](README.md#imergedeepisbranchfunc) |
`onAssign?` | [IMergeDeepAssignFunc](README.md#imergedeepassignfunc) |
`onBranch?` | [IMergeDeepBranchFunc](README.md#imergedeepbranchfunc) |
`onMerge?` | [IMergeDeepMergeFunc](README.md#imergedeepmergefunc) |

▪... **objects**: *T[]*

**Returns:** *object*

* **origin**(): *object*

* **value**: *T* = result

___

###  pFind

▸ **pFind**<**T**>(`arr`: T[], `findFn`: function): *Promise‹T | undefined›*

*Defined in [src/lib/util/array.ts:147](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/array.ts#L147)*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

▪ **arr**: *T[]*

▪`Default value`  **findFn**: *function*= (x) => x

▸ (`arg`: T, `index?`: undefined | number, `arr?`: T[]): *any | Promise‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | T |
`index?` | undefined &#124; number |
`arr?` | T[] |

**Returns:** *Promise‹T | undefined›*

___

###  pGlob

▸ **pGlob**(`pattern`: string, `options`: IOptions): *Promise‹string[]›*

*Defined in [src/lib/util/p-glob.ts:3](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/p-glob.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`pattern` | string |
`options` | IOptions |

**Returns:** *Promise‹string[]›*

___

###  pMap

▸ **pMap**<**T**, **R**>(`arr`: T[], `mapFn`: function): *Promise‹[UnwrapPromise](README.md#unwrappromise)‹R›[]›*

*Defined in [src/lib/util/array.ts:140](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/array.ts#L140)*

**Type parameters:**

▪ **T**: *any*

▪ **R**: *any*

**Parameters:**

▪ **arr**: *T[]*

▪`Default value`  **mapFn**: *function*= (x) => x as R

▸ (`arg`: T, `index?`: undefined | number, `arr?`: T[]): *R*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | T |
`index?` | undefined &#124; number |
`arr?` | T[] |

**Returns:** *Promise‹[UnwrapPromise](README.md#unwrappromise)‹R›[]›*

___

###  pRimraf

▸ **pRimraf**(`path`: string): *Promise‹void›*

*Defined in [src/lib/util/p-rimraf.ts:3](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/p-rimraf.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *Promise‹void›*

___

###  paddingLen

▸ **paddingLen**(`table`: any, `cellCount`: number): *number*

*Defined in [src/bin/lib/table.ts:64](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/bin/lib/table.ts#L64)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`table` | any | - |
`cellCount` | number | 0 |

**Returns:** *number*

___

###  parseUnknownArgs

▸ **parseUnknownArgs**(`args`: string[]): *object*

*Defined in [src/bin/lib/options.ts:3](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/bin/lib/options.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | string[] |

**Returns:** *object*

* **known**: *string[]*

* **unknown**: *[string, any][]*

___

###  parseVariadicArg

▸ **parseVariadicArg**(`program`: [Cmd](README.md#cmd), `args`: string[], `flags`: string[], `options`: object): *object*

*Defined in [src/bin/lib/variadic-args.ts:8](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/bin/lib/variadic-args.ts#L8)*

**Parameters:**

▪ **program**: *[Cmd](README.md#cmd)*

▪ **args**: *string[]*

▪ **flags**: *string[]*

▪`Default value`  **options**: *object*= {}

Name | Type |
------ | ------ |
`cmd?` | [Cmd](README.md#cmd) |
`cmdName?` | undefined &#124; string |
`option?` | Option |
`optionalArgCount?` | undefined &#124; number |
`requiredArgCount?` | undefined &#124; number |

**Returns:** *object*

* **parsedArgs**: *string[][]*

* **remainArgs**: *string[]* = newArgs

___

###  processAuxFilesOptions

▸ **processAuxFilesOptions**<**T**>(`i18nUtil`: [I18nUtil](README.md#abstract-i18nutil), `paths`: string[], `options`: T): *Promise‹object›*

*Defined in [src/bin/lib/options-aux-files.ts:6](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/bin/lib/options-aux-files.ts#L6)*

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`i18nUtil` | [I18nUtil](README.md#abstract-i18nutil) |
`paths` | string[] |
`options` | T |

**Returns:** *Promise‹object›*

___

###  processDefinitionOptions

▸ **processDefinitionOptions**<**T**>(`i18nUtil`: [I18nUtil](README.md#abstract-i18nutil), `paths`: string[], `options`: T): *Promise‹object›*

*Defined in [src/bin/lib/options-item.ts:333](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/bin/lib/options-item.ts#L333)*

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`i18nUtil` | [I18nUtil](README.md#abstract-i18nutil) |
`paths` | string[] |
`options` | T |

**Returns:** *Promise‹object›*

___

### `Const` processGeneralOptions

▸ **processGeneralOptions**<**T**>(`options`: T): *object*

*Defined in [src/bin/lib/options-general.ts:10](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/bin/lib/options-general.ts#L10)*

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`options` | T |

**Returns:** *object*

* **config**(): *object*

  * **keyResolver**: *[GlobKeyResolver](classes/globkeyresolver.md)‹›* = new GlobKeyResolver(userConfig.keyResolverOptions)

  * **valueResolver**: *[EvalGlobValueResolver](classes/evalglobvalueresolver.md)‹›* = new EvalGlobValueResolver(userConfig.valueResolverOptions)

* **unparsed**(): *object*

___

###  processItemOptions

▸ **processItemOptions**<**T**>(`i18nUtil`: [I18nUtil](README.md#abstract-i18nutil), `paths`: string[], `options`: T): *Promise‹object›*

*Defined in [src/bin/lib/options-item.ts:119](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/bin/lib/options-item.ts#L119)*

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`i18nUtil` | [I18nUtil](README.md#abstract-i18nutil) |
`paths` | string[] |
`options` | T |

**Returns:** *Promise‹object›*

___

###  processKeyOptions

▸ **processKeyOptions**<**T**>(`i18nUtil`: [I18nUtil](README.md#abstract-i18nutil), `defItems`: [Item](README.md#item)[], `useItems`: [Item](README.md#item)[], `options`: T): *object*

*Defined in [src/bin/lib/options-item.ts:228](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/bin/lib/options-item.ts#L228)*

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`i18nUtil` | [I18nUtil](README.md#abstract-i18nutil) |
`defItems` | [Item](README.md#item)[] |
`useItems` | [Item](README.md#item)[] |
`options` | T |

**Returns:** *object*

* **defItems**: *[Item](README.md#item)‹›[]* = items.def

* **unparsed**(): *object*

* **useItems**: *[Item](README.md#item)‹›[]* = items.use

___

###  processUsageOptions

▸ **processUsageOptions**<**T**>(`i18nUtil`: [I18nUtil](README.md#abstract-i18nutil), `paths`: string[], `options`: T): *Promise‹object›*

*Defined in [src/bin/lib/options-item.ts:463](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/bin/lib/options-item.ts#L463)*

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`i18nUtil` | [I18nUtil](README.md#abstract-i18nutil) |
`paths` | string[] |
`options` | T |

**Returns:** *Promise‹object›*

___

###  processVariadicArgs

▸ **processVariadicArgs**<**T**>(`items`: [ItemArrayLike](README.md#itemarraylike)‹T›, `argGroups`: string[][], `options`: object): *Promise‹any[][][]›*

*Defined in [src/bin/lib/variadic-args.ts:97](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/bin/lib/variadic-args.ts#L97)*

**Type parameters:**

▪ **T**: *[Item](README.md#item)*

**Parameters:**

▪ **items**: *[ItemArrayLike](README.md#itemarraylike)‹T›*

▪ **argGroups**: *string[][]*

▪ **options**: *object*

Name | Type |
------ | ------ |
`resolvers?` | function[] |

**Returns:** *Promise‹any[][][]›*

___

###  safeWrite

▸ **safeWrite**(`options`: [ISafeWriteOptions](interfaces/isafewriteoptions.md), `fn`: function): *Promise‹void›*

*Defined in [src/lib/util/fs.ts:61](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/fs.ts#L61)*

Accepts a function and passes to it Node's FileSystem writers wrapped with
following features:
- directory autocreation (and auto-removal on error)
- rollback of file write changes on error

**Parameters:**

▪`Default value`  **options**: *[ISafeWriteOptions](interfaces/isafewriteoptions.md)*= {}

▪ **fn**: *function*

▸ (`writers`: [ISafeWriters](README.md#isafewriters)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`writers` | [ISafeWriters](README.md#isafewriters) |

**Returns:** *Promise‹void›*

___

###  splitObject

▸ **splitObject**<**T**, **K**>(`obj`: T, `keys`: K[]): *[object, object]*

*Defined in [src/bin/lib/util.ts:14](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/bin/lib/util.ts#L14)*

**Type parameters:**

▪ **T**: *[AnyObj](README.md#anyobj)*

▪ **K**: *string*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | T |
`keys` | K[] |

**Returns:** *[object, object]*

___

###  uniqFilterMap

▸ **uniqFilterMap**<**T**, **R**>(`arr`: T[], `filterFn`: function, `uniqFn`: function, `mapFn`: function): *R[]*

*Defined in [src/lib/util/array.ts:104](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/array.ts#L104)*

Keep only unique values, filter them, and map what remains in single
iteration.

**Type parameters:**

▪ **T**: *any*

▪ **R**: *any*

**Parameters:**

▪ **arr**: *T[]*

▪`Default value`  **filterFn**: *function*= (x) => x

▸ (`arg`: T): *any*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | T |

▪`Default value`  **uniqFn**: *function*= (x) => x

▸ (`arg`: T): *any*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | T |

▪`Default value`  **mapFn**: *function*= (x) => x as R

▸ (`arg`: T): *R*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | T |

**Returns:** *R[]*

___

###  uniqMap

▸ **uniqMap**<**T**, **R**>(`arr`: T[], `uniqFn`: function, `mapFn`: function): *R[]*

*Defined in [src/lib/util/array.ts:29](https://github.com/JuroOravec/i18n-util/blob/c9cd5a0/src/lib/util/array.ts#L29)*

Keep unique values and map them in single iteration.

**Type parameters:**

▪ **T**: *any*

▪ **R**: *any*

**Parameters:**

▪ **arr**: *T[]*

▪`Default value`  **uniqFn**: *function*= (x) => x

▸ (`arg`: T): *any*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | T |

▪`Default value`  **mapFn**: *function*= (x) => x as R

▸ (`arg`: T): *R*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | T |

**Returns:** *R[]*
