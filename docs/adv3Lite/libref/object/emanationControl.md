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

<div class="fdesc">

The object which drives emanation messages for Odors and Noises
\[DEFINED IN SENSORY EXTENSION\]

**`emanationControl`**` :   `[`InitObject`](../object/InitObject.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`emanationControl`**  
[`InitObject`](../object/InitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>





Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)[`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe)[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`canSense`](#canSense)[`emanate`](#emanate)[`execute`](#execute)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute)[`classExec`](../object/ModuleExecObject.html#classExec)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="canSense"></span>

`canSense (pc, o)`

[sensory.t](../file/sensory.t.html)\[[432](../source/sensory.t.html#432)\]

<div class="desc">

The pc can sense o if o is currently emanating and its a Noise the pc
can currently hear or an Odor the pc can currently smell. \[DEFINED IN
SENSORY EXTENSION\]

</div>

<span id="emanate"></span>

`emanate ( )`

[sensory.t](../file/sensory.t.html)\[[364](../source/sensory.t.html#364)\]

<div class="desc">

Each turn, execute the emanate() method for every item in our list of
emanations. \[DEFINED IN SENSORY EXTENSION\]

</div>

<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[sensory.t](../file/sensory.t.html)\[[355](../source/sensory.t.html#355)\]

<div class="desc">

Set up our Daemon at the start of play. \[DEFINED IN SENSORY EXTENSION\]

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
