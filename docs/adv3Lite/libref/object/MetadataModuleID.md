[MetadataModuleID]{.title}[class]{.type}

[modid.t](../file/modid.t.html)\[[194](../source/modid.t.html#194)\]

[Superclass\
Tree](#_SuperClassTree_)

[Subclass\
Tree](#_SubClassTree_)

[Global\
Objects](#_ObjectSummary_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
A module ID with metadata. During pre-initialization, we\'ll
automatically write out a file with the metadata for each of these
objects. This is an abstract base class; a subclass must be created for
each specific metadata format.

`class `**`MetadataModuleID`**` :   `[`ModuleID`](../object/ModuleID.html)`   `[`PreinitObject`](../object/PreinitObject.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`MetadataModuleID`**\
`         `[`ModuleID`](../object/ModuleID.html)\
`                 object`\
`         `[`PreinitObject`](../object/PreinitObject.html)\
`                 `[`ModuleExecObject`](../object/ModuleExecObject.html)\
`                         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`MetadataModuleID`**\
`         `[`GameInfoModuleID`](../object/GameInfoModuleID.html)\
`                 `[`GameID`](../object/GameID.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `

Inherited from `ModuleID` :\
` `[`byline`](../object/ModuleID.html#byline)`  `[`htmlByline`](../object/ModuleID.html#htmlByline)`  `[`listingOrder`](../object/ModuleID.html#listingOrder)`  `[`name`](../object/ModuleID.html#name)`  `[`version`](../object/ModuleID.html#version)`  `

Inherited from `PreinitObject` :\
` `[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)`  `[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)`  `

Inherited from `ModuleExecObject` :\
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`execute`](#execute)`  `[`writeMetadataFile`](#writeMetadataFile)`  `

Inherited from `ModuleID` :\
` `[`getModuleList`](../object/ModuleID.html#getModuleList)`  `[`showAbout`](../object/ModuleID.html#showAbout)`  `[`showCredit`](../object/ModuleID.html#showCredit)`  `[`showVersion`](../object/ModuleID.html#showVersion)`  `[`showVersionMsg`](../object/ModuleID.html#showVersionMsg)`  `

` `

Inherited from `ModuleExecObject` :\
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

*(none)* []{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#execute}

`execute ( )`[OVERRIDDEN]{.rem}

[modid.t](../file/modid.t.html)\[[196](../source/modid.t.html#196)\]

::: desc
execute pre-initialization
:::

[]{#writeMetadataFile}

`writeMetadataFile ( )`

[modid.t](../file/modid.t.html)\[[208](../source/modid.t.html#208)\]

::: desc
write our metadata file - this must be overridden by each subclass to
carry out the specific steps needed to create and write the metadata
file in the appropriate format for the subclass
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
