---
layout: docs
---
<span class="title">SenseFuse</span><span class="type">class</span>

[events.t](../file/events.t.html)\[[375](../source/events.t.html#375)\]

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



A SenseFuse is just like a Fuse except that any text produced during its
execution is only displayed if the player char is able to sense the
relevant object either at the start or at the end of the Fuse's
execution.

`class `**`SenseFuse`**` :   `[`Fuse`](../object/Fuse.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`SenseFuse`**  
[`Fuse`](../object/Fuse.html)  
[`Event`](../object/Event.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  







Inherited from `Event` :  
[`captureText`](../object/Event.html#captureText) [`eventOrder`](../object/Event.html#eventOrder) [`executed`](../object/Event.html#executed) [`interval_`](../object/Event.html#interval_) [`isPromptDaemon`](../object/Event.html#isPromptDaemon) [`nextRunTime`](../object/Event.html#nextRunTime) [`obj_`](../object/Event.html#obj_) [`prop_`](../object/Event.html#prop_) [`senseObj_`](../object/Event.html#senseObj_) [`senseProp_`](../object/Event.html#senseProp_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)

Inherited from `Fuse` :  
[`executeEvent`](../object/Fuse.html#executeEvent)

Inherited from `Event` :  
[`callMethod`](../object/Event.html#callMethod) [`delayEvent`](../object/Event.html#delayEvent) [`eventMatches`](../object/Event.html#eventMatches) [`getNextRunTime`](../object/Event.html#getNextRunTime) [`removeEvent`](../object/Event.html#removeEvent)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (obj, prop, interval, senseProp, =, &, canSee, senseObj, =, obj)`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[384](../source/events.t.html#384)\]



senseObj is the object which must be sensed for this Fuse's text to be
displayed. senseProp is one of &canSee, &canReach, &canHear, &canSmell.
If these parameters are omitted then the senseObj will be the same as
the obj whose prop property is executed by the Fuse, and the senseProp
will be &canSee, probably the most common case.





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


