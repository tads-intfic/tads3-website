---
layout: docs
---
<span class="title">SenseDaemon</span><span class="type">class</span>

[events.t](../file/events.t.html)\[[456](../source/events.t.html#456)\]

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

A SenseDaemon is just like a Daemon except that any text produced during
its execution is only displayed if the player char is able to sense the
relevant object either at the start or at the end of the Daemon's
execution.

`class `**`SenseDaemon`**` :   `[`Daemon`](../object/Daemon.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`SenseDaemon`**  
[`Daemon`](../object/Daemon.html)  
[`Event`](../object/Event.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>



Inherited from `Daemon` :  
[`interval_`](../object/Daemon.html#interval_)

Inherited from `Event` :  
[`captureText`](../object/Event.html#captureText)[`eventOrder`](../object/Event.html#eventOrder)[`executed`](../object/Event.html#executed)[`isPromptDaemon`](../object/Event.html#isPromptDaemon)[`nextRunTime`](../object/Event.html#nextRunTime)[`obj_`](../object/Event.html#obj_)[`prop_`](../object/Event.html#prop_)[`senseObj_`](../object/Event.html#senseObj_)[`senseProp_`](../object/Event.html#senseProp_)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`construct`](#construct)

Inherited from `Daemon` :  
[`executeEvent`](../object/Daemon.html#executeEvent)

Inherited from `Event` :  
[`callMethod`](../object/Event.html#callMethod)[`delayEvent`](../object/Event.html#delayEvent)[`eventMatches`](../object/Event.html#eventMatches)[`getNextRunTime`](../object/Event.html#getNextRunTime)[`removeEvent`](../object/Event.html#removeEvent)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (obj, prop, interval, senseProp, =, &, canSee, senseObj, =, obj)`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[466](../source/events.t.html#466)\]

<div class="desc">

Creation: in addition to the parameters passed to Daemon's constructor,
senseObj is the object which must be sensed for this Daemon's text to be
displayed. senseProp is one of &canSee, &canReach, &canHear, &canSmell.
If these parameters are omitted then the senseObj will be the same as
the obj whose prop property is executed by the Daemon, and the senseProp
will be &canSee, probably the most common case.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
