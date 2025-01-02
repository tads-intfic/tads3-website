---
layout: docs
---
<span class="title">scoreNotifier</span><span class="type">object</span>

[score.t](../file/score.t.html)\[[223](../source/score.t.html#223)\]

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



Score notification daemon handler. We'll receive a checkNotification()
call each turn; we'll display a notification message each time the score
has changed since the last time we ran.

**`scoreNotifier`**` :   `[`PreinitObject`](../object/PreinitObject.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`scoreNotifier`**  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`everNotified`](#everNotified) [`lastScore`](#lastScore)



Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe) [`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe) [`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_) [`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_) [`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`checkNotification`](#checkNotification) [`execute`](#execute)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute) [`classExec`](../object/ModuleExecObject.html#classExec)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="everNotified"></span>

`everNotified`

[score.t](../file/score.t.html)\[[228](../source/score.t.html#228)\]



we've never generated a notification about the score before



<span id="lastScore"></span>

`lastScore`

[score.t](../file/score.t.html)\[[225](../source/score.t.html#225)\]



the score as it was the last time we displayed a notification



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="checkNotification"></span>

`checkNotification ( )`

[score.t](../file/score.t.html)\[[231](../source/score.t.html#231)\]



daemon entrypoint



<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[score.t](../file/score.t.html)\[[277](../source/score.t.html#277)\]



execute pre-initialization





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


