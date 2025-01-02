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

<div class="fdesc">

Score notification daemon handler. We'll receive a checkNotification()
call each turn; we'll display a notification message each time the score
has changed since the last time we ran.

**`scoreNotifier`**` :   `[`PreinitObject`](../object/PreinitObject.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`scoreNotifier`**  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`everNotified`](#everNotified)[`lastScore`](#lastScore)



Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)[`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe)[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`checkNotification`](#checkNotification)[`execute`](#execute)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute)[`classExec`](../object/ModuleExecObject.html#classExec)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="everNotified"></span>

`everNotified`

[score.t](../file/score.t.html)\[[228](../source/score.t.html#228)\]

<div class="desc">

we've never generated a notification about the score before

</div>

<span id="lastScore"></span>

`lastScore`

[score.t](../file/score.t.html)\[[225](../source/score.t.html#225)\]

<div class="desc">

the score as it was the last time we displayed a notification

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="checkNotification"></span>

`checkNotification ( )`

[score.t](../file/score.t.html)\[[231](../source/score.t.html#231)\]

<div class="desc">

daemon entrypoint

</div>

<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[score.t](../file/score.t.html)\[[277](../source/score.t.html#277)\]

<div class="desc">

execute pre-initialization

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
