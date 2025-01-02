---
layout: docs
---
<span class="title">actorPreinit</span><span class="type">object</span>

[actor.t](../file/actor.t.html)\[[4907](../source/actor.t.html#4907)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)



Preinitialize all the Actors in the game and the objects associated with
them.

**`actorPreinit`**` :   `[`PreinitObject`](../object/PreinitObject.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`actorPreinit`**  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`execBeforeMe`](#execBeforeMe)

Inherited from `PreinitObject` :  
[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)

Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe) [`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_) [`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_) [`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`execute`](#execute)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute) [`classExec`](../object/ModuleExecObject.html#classExec)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="execBeforeMe"></span>

`execBeforeMe`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4933](../source/actor.t.html#4933)\]



Make use that various other preinitializations presupposed by our own
have been carried out before ours



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4908](../source/actor.t.html#4908)\]



*no description available*





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


