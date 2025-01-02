---
---
<span class="title">PreinitObject</span><span class="type">class</span>

[\_main.t](../file/_main.t.html)\[[471](../source/_main.t.html#471)\],
[misc.t](../file/misc.t.html)\[[2429](../source/misc.t.html#2429)\]

[Superclass  
Tree](#_SuperClassTree_)

[Subclass  
Tree](#_SubClassTree_)

[Global  
Objects](#_ObjectSummary_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)

<div class="fdesc">

Pre-Initialization object. During pre-initialization, we'll invoke the
execute() method on each instance of this class.

*Modified in
[misc.t](../file/misc.t.html)\[[2429](../source/misc.t.html#2429)\]:*  
Our static object and class initializer should generally run before any
other initializers.

`class `**`PreinitObject`**` :   `[`ModuleExecObject`](../object/ModuleExecObject.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`PreinitObject`**  
`         `[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`PreinitObject`**  
`         `[`EventListItem`](../object/EventListItem.html)  
`                 `[`ELI`](../object/ELI.html)  
`                 `[`ELI1`](../object/ELI1.html)  
`         `[`MetadataModuleID`](../object/MetadataModuleID.html)  
`                 `[`GameInfoModuleID`](../object/GameInfoModuleID.html)  
`                         `[`GameID`](../object/GameID.html)  
`         `[`MobileCollectiveGroup`](../object/MobileCollectiveGroup.html)  
`         `[`OutputStream`](../object/OutputStream.html)  
`                 `[`BannerOutputStream`](../object/BannerOutputStream.html)  
`                 `[`LogConsole`](../object/LogConsole.html)  
`                 `[`WebWinOutputStream`](../object/WebWinOutputStream.html)  
`         `[`Relation`](../object/Relation.html)  
`         `[`RuleBook`](../object/RuleBook.html)  
`         `[`StringPreParser`](../object/StringPreParser.html)  
`         `[`ThoughtManager`](../object/ThoughtManager.html)  
`         `[`TopHintMenu`](../object/TopHintMenu.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

` `[`actionDictionary`](../object/actionDictionary.html)`  `[`actionTab`](../object/actionTab.html)`  `[`actorPreinit`](../object/actorPreinit.html)`  `[`adv3LibPreinit`](../object/adv3LibPreinit.html)`  `[`clockManager`](../object/clockManager.html)`  `[`Compiler`](../object/Compiler.html)`  `[`consultablePreinit`](../object/consultablePreinit.html)`  `[`conversationManager`](../object/conversationManager.html)`  `[`convNodePreinit`](../object/convNodePreinit.html)`  `[`doerPreinit`](../object/doerPreinit.html)`  `[`exitLister`](../object/exitLister.html)`  `[`extraHintManager`](../object/extraHintManager.html)`  `[`footnotePreinit`](../object/footnotePreinit.html)`  `[`hintManager`](../object/hintManager.html)`  `[`libObjectInitializer`](../object/libObjectInitializer.html)`  `[`libScore`](../object/libScore.html)`  `[`multiLocInitiator`](../object/multiLocInitiator.html)`  `[`objTablePreinit`](../object/objTablePreinit.html)`  `[`preinitRulesRunner`](../object/preinitRulesRunner.html)`  `[`pronounPreinit`](../object/pronounPreinit.html)`  `[`reflectionServices`](../object/reflectionServices.html)`  `[`regionPreinit`](../object/regionPreinit.html)`  `[`relationTable`](../object/relationTable.html)`  `[`rulePreinit`](../object/rulePreinit.html)`  `[`styleTagFilter`](../object/styleTagFilter.html)`  `[`symTab`](../object/symTab.html)`  `[`symVocabPreinit`](../object/symVocabPreinit.html)`  `[`thingPreinit`](../object/thingPreinit.html)`  `[`World`](../object/World.html)`  `
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`execBeforeMe`](#execBeforeMe)`  `[`reverseGlobalSymbols`](#reverseGlobalSymbols)`  `

Inherited from `ModuleExecObject` :  
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `

Inherited from `ModuleExecObject` :  
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `[`execute`](../object/ModuleExecObject.html#execute)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="execBeforeMe"></span>

`execBeforeMe`<span class="rem">OVERRIDDEN</span>

[misc.t](../file/misc.t.html)\[[2431](../source/misc.t.html#2431)\]

<div class="desc">

execute the basic library initializer before any other initializers

</div>

<span id="reverseGlobalSymbols"></span>

`reverseGlobalSymbols`

[misc.t](../file/misc.t.html)\[[2438](../source/misc.t.html#2438)\]

<div class="desc">

class property: reverse lookup symbol table (a version of the global
symbol table keyed by value, yielding the name of each global object,
function, etc)

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

*(none)*

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
