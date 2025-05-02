---
layout: docs
---
<span class="title">actionTab</span><span class="type">object</span>

[debug.t](../file/debug.t.html)\[[118](../source/debug.t.html#118)\]

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



The actionTab object holds a table providing the names (as strings)
corresponding to the various Action objects, for use with the DEBUG
ACTIONS option.

**`actionTab`**` :   `[`PreinitObject`](../object/PreinitObject.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`actionTab`**  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`ctab`](#ctab)

Inherited from `PreinitObject` :  
[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe) [`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)

Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe) [`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_) [`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_) [`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`execute`](#execute) [`symbolToVal`](#symbolToVal)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute) [`classExec`](../object/ModuleExecObject.html#classExec)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="ctab"></span>

`ctab`

[debug.t](../file/debug.t.html)\[[130](../source/debug.t.html#130)\]



A LookupTable of Actions and their corresponding string names



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[debug.t](../file/debug.t.html)\[[132](../source/debug.t.html#132)\]



*no description available*



<span id="symbolToVal"></span>

`symbolToVal (val)`

[debug.t](../file/debug.t.html)\[[124](../source/debug.t.html#124)\]



To return the string val corresponding to the Action val, simply look it
up in out ctab table





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


