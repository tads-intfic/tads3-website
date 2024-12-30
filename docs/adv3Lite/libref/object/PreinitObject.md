[PreinitObject]{.title}[class]{.type}

[\_main.t](../file/_main.t.html)\[[471](../source/_main.t.html#471)\],
[misc.t](../file/misc.t.html)\[[2429](../source/misc.t.html#2429)\]

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
Pre-Initialization object. During pre-initialization, we\'ll invoke the
execute() method on each instance of this class.

*Modified in
[misc.t](../file/misc.t.html)\[[2429](../source/misc.t.html#2429)\]:*\
Our static object and class initializer should generally run before any
other initializers.

`class `**`PreinitObject`**` :   `[`ModuleExecObject`](../object/ModuleExecObject.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`PreinitObject`**\
`         `[`ModuleExecObject`](../object/ModuleExecObject.html)\
`                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`PreinitObject`**\
`         `[`EventListItem`](../object/EventListItem.html)\
`                 `[`ELI`](../object/ELI.html)\
`                 `[`ELI1`](../object/ELI1.html)\
`         `[`MetadataModuleID`](../object/MetadataModuleID.html)\
`                 `[`GameInfoModuleID`](../object/GameInfoModuleID.html)\
`                         `[`GameID`](../object/GameID.html)\
`         `[`MobileCollectiveGroup`](../object/MobileCollectiveGroup.html)\
`         `[`OutputStream`](../object/OutputStream.html)\
`                 `[`BannerOutputStream`](../object/BannerOutputStream.html)\
`                 `[`LogConsole`](../object/LogConsole.html)\
`                 `[`WebWinOutputStream`](../object/WebWinOutputStream.html)\
`         `[`Relation`](../object/Relation.html)\
`         `[`RuleBook`](../object/RuleBook.html)\
`         `[`StringPreParser`](../object/StringPreParser.html)\
`         `[`ThoughtManager`](../object/ThoughtManager.html)\
`         `[`TopHintMenu`](../object/TopHintMenu.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

` `[`actionDictionary`](../object/actionDictionary.html)`  `[`actionTab`](../object/actionTab.html)`  `[`actorPreinit`](../object/actorPreinit.html)`  `[`adv3LibPreinit`](../object/adv3LibPreinit.html)`  `[`clockManager`](../object/clockManager.html)`  `[`Compiler`](../object/Compiler.html)`  `[`consultablePreinit`](../object/consultablePreinit.html)`  `[`conversationManager`](../object/conversationManager.html)`  `[`convNodePreinit`](../object/convNodePreinit.html)`  `[`doerPreinit`](../object/doerPreinit.html)`  `[`exitLister`](../object/exitLister.html)`  `[`extraHintManager`](../object/extraHintManager.html)`  `[`footnotePreinit`](../object/footnotePreinit.html)`  `[`hintManager`](../object/hintManager.html)`  `[`libObjectInitializer`](../object/libObjectInitializer.html)`  `[`libScore`](../object/libScore.html)`  `[`multiLocInitiator`](../object/multiLocInitiator.html)`  `[`objTablePreinit`](../object/objTablePreinit.html)`  `[`preinitRulesRunner`](../object/preinitRulesRunner.html)`  `[`pronounPreinit`](../object/pronounPreinit.html)`  `[`reflectionServices`](../object/reflectionServices.html)`  `[`regionPreinit`](../object/regionPreinit.html)`  `[`relationTable`](../object/relationTable.html)`  `[`rulePreinit`](../object/rulePreinit.html)`  `[`styleTagFilter`](../object/styleTagFilter.html)`  `[`symTab`](../object/symTab.html)`  `[`symVocabPreinit`](../object/symVocabPreinit.html)`  `[`thingPreinit`](../object/thingPreinit.html)`  `[`World`](../object/World.html)`  `
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`execBeforeMe`](#execBeforeMe)`  `[`reverseGlobalSymbols`](#reverseGlobalSymbols)`  `

Inherited from `ModuleExecObject` :\
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `

Inherited from `ModuleExecObject` :\
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `[`execute`](../object/ModuleExecObject.html#execute)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#execBeforeMe}

`execBeforeMe`[OVERRIDDEN]{.rem}

[misc.t](../file/misc.t.html)\[[2431](../source/misc.t.html#2431)\]

::: desc
execute the basic library initializer before any other initializers
:::

[]{#reverseGlobalSymbols}

`reverseGlobalSymbols`

[misc.t](../file/misc.t.html)\[[2438](../source/misc.t.html#2438)\]

::: desc
class property: reverse lookup symbol table (a version of the global
symbol table keyed by value, yielding the name of each global object,
function, etc)
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

*(none)*

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
