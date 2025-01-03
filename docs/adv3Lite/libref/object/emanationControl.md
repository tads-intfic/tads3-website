---
layout: docs
---
<span class="title">emanationControl</span><span class="type">object</span>

[sensory.t](../file/sensory.t.html)\[[353](../source/sensory.t.html#353)\]

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



The object which drives emanation messages for Odors and Noises
\[DEFINED IN SENSORY EXTENSION\]

**`emanationControl`**` :   `[`InitObject`](../object/InitObject.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`emanationControl`**  
[`InitObject`](../object/InitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe) [`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe) [`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_) [`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_) [`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`canSense`](#canSense) [`emanate`](#emanate) [`execute`](#execute)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute) [`classExec`](../object/ModuleExecObject.html#classExec)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="canSense"></span>

`canSense (pc, o)`

[sensory.t](../file/sensory.t.html)\[[432](../source/sensory.t.html#432)\]



The pc can sense o if o is currently emanating and its a Noise the pc
can currently hear or an Odor the pc can currently smell. \[DEFINED IN
SENSORY EXTENSION\]



<span id="emanate"></span>

`emanate ( )`

[sensory.t](../file/sensory.t.html)\[[364](../source/sensory.t.html#364)\]



Each turn, execute the emanate() method for every item in our list of
emanations. \[DEFINED IN SENSORY EXTENSION\]



<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[sensory.t](../file/sensory.t.html)\[[355](../source/sensory.t.html#355)\]



Set up our Daemon at the start of play. \[DEFINED IN SENSORY EXTENSION\]
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


