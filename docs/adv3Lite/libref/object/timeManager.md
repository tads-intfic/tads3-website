---
layout: docs
---
<span class="title">timeManager</span><span class="type">object</span>

[objtime.t](../file/objtime.t.html)\[[15](../source/objtime.t.html#15)\]

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



The timeManager object is used to keep track of the notional game time
in the OBJTIME EXTENSION.

**`timeManager`**` :   `[`InitObject`](../object/InitObject.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`timeManager`**  
[`InitObject`](../object/InitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`additionalTime`](#additionalTime)[`currentTime`](#currentTime)[`replacementTime`](#replacementTime)



Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)[`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe)[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`addInterval`](#addInterval)[`advanceTime`](#advanceTime)[`execute`](#execute)[`formatDate`](#formatDate)[`reset`](#reset)[`setTime`](#setTime)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute)[`classExec`](../object/ModuleExecObject.html#classExec)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="additionalTime"></span>

`additionalTime`

[objtime.t](../file/objtime.t.html)\[[56](../source/objtime.t.html#56)\]



The number of seconds to add to the time taken on the current turn in
addition to the standard time for this action.



<span id="currentTime"></span>

`currentTime`

[objtime.t](../file/objtime.t.html)\[[21](../source/objtime.t.html#21)\]



In case the game doesn't specify a starting date we default to midnight
on January 1st 2000.



<span id="replacementTime"></span>

`replacementTime`

[objtime.t](../file/objtime.t.html)\[[63](../source/objtime.t.html#63)\]



If this is not nil, use this as the number of seconds taken by the
current turn instead of the number computed from the action plus
additionalTime.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="addInterval"></span>

`addInterval (interval)`

[objtime.t](../file/objtime.t.html)\[[130](../source/objtime.t.html#130)\]



Adjust the currentDate by interval, where interval is specified as for
the interval argument for the addInterval method of the Date class, i.e.
as a list in the format \[years, months, days, hours, minutes,
seconds\], from which trailing zeroes may be omitted.

interval may also be specified as an integer (in which case it will be
taken as the number of minutes to advance) or as a BigNumber (in which
case it will be taken as the number of hours).



<span id="advanceTime"></span>

`advanceTime (secs)`

[objtime.t](../file/objtime.t.html)\[[69](../source/objtime.t.html#69)\]



Advance the time at the end of a turn (during the afterAction
processing).



<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[objtime.t](../file/objtime.t.html)\[[24](../source/objtime.t.html#24)\]



Initialize the timeManager.



<span id="formatDate"></span>

`formatDate (fmt)`

[objtime.t](../file/objtime.t.html)\[[92](../source/objtime.t.html#92)\]



Return a string containing the current date and time formatted by fmt,
where fmt is one of the strings specified in the SystemManual entry for
Date.



<span id="reset"></span>

`reset ( )`

[objtime.t](../file/objtime.t.html)\[[43](../source/objtime.t.html#43)\]



Reset action-dependent counts to zero for a new turn.



<span id="setTime"></span>

`setTime ([args])`

[objtime.t](../file/objtime.t.html)\[[101](../source/objtime.t.html#101)\]



Set the current date and time. The possible arguments are those
described for the Date constructor in the System Manual.





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


