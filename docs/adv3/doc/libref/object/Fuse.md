---
layout: docs
---
<span class="title">Fuse</span><span class="type">class</span>

[events.t](../file/events.t.html)\[[682](../source/events.t.html#682)\]

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
[`BasicEvent`](../object/BasicEvent.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`Fuse`**  
[`SenseFuse`](../object/SenseFuse.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





Inherited from `Event` :  
[`eventOrder`](../object/Event.html#eventOrder)[`isPromptDaemon`](../object/Event.html#isPromptDaemon)[`nextRunTime`](../object/Event.html#nextRunTime)

Inherited from `BasicEvent` :  
[`obj_`](../object/BasicEvent.html#obj_)[`prop_`](../object/BasicEvent.html#prop_)[`sense_`](../object/BasicEvent.html#sense_)[`source_`](../object/BasicEvent.html#source_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)[`executeEvent`](#executeEvent)

Inherited from `Event` :  
[`delayEvent`](../object/Event.html#delayEvent)[`getNextRunTime`](../object/Event.html#getNextRunTime)[`removeEvent`](../object/Event.html#removeEvent)

Inherited from `BasicEvent` :  
[`callMethod`](../object/BasicEvent.html#callMethod)[`eventMatches`](../object/BasicEvent.html#eventMatches)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (obj, prop, turns)`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[688](../source/events.t.html#688)\]



Creation. 'turns' is the number of turns in the future at which the fuse
is executed; if turns is 0, the fuse will be executed on the current
turn.



<span id="executeEvent"></span>

`executeEvent ( )`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[701](../source/events.t.html#701)\]



execute the fuse





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


