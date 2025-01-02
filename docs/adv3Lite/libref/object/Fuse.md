---
layout: docs
---
<span class="title">Fuse</span><span class="type">class</span>

[events.t](../file/events.t.html)\[[341](../source/events.t.html#341)\]

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



Fuse. A fuse is an event that fires once at a given time in the future.
Once a fuse is executed, it is removed from further scheduling.

`class `**`Fuse`**` :   `[`Event`](../object/Event.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Fuse`**  
[`Event`](../object/Event.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`Fuse`**  
[`SenseFuse`](../object/SenseFuse.html)  
[`TimeFuse`](../object/TimeFuse.html)  
[`SenseTimeFuse`](../object/SenseTimeFuse.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





Inherited from `Event` :  
[`captureText`](../object/Event.html#captureText) [`eventOrder`](../object/Event.html#eventOrder) [`executed`](../object/Event.html#executed) [`interval_`](../object/Event.html#interval_) [`isPromptDaemon`](../object/Event.html#isPromptDaemon) [`nextRunTime`](../object/Event.html#nextRunTime) [`obj_`](../object/Event.html#obj_) [`prop_`](../object/Event.html#prop_) [`senseObj_`](../object/Event.html#senseObj_) [`senseProp_`](../object/Event.html#senseProp_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct) [`executeEvent`](#executeEvent)

Inherited from `Event` :  
[`callMethod`](../object/Event.html#callMethod) [`delayEvent`](../object/Event.html#delayEvent) [`eventMatches`](../object/Event.html#eventMatches) [`getNextRunTime`](../object/Event.html#getNextRunTime) [`removeEvent`](../object/Event.html#removeEvent)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (obj, prop, interval)`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[347](../source/events.t.html#347)\]



Creation. 'turns' is the number of turns in the future at which the fuse
is executed; if turns is 0, the fuse will be executed on the current
turn.



<span id="executeEvent"></span>

`executeEvent ( )`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[360](../source/events.t.html#360)\]



execute the fuse





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


