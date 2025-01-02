---
layout: docs
---
<span class="title">SenseDaemon</span><span class="type">class</span>

[events.t](../file/events.t.html)\[[795](../source/events.t.html#795)\]

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

Sensory-context-sensitive daemon - this is a daemon with an explicit
sensory context. This is the daemon counterpart of SenseFuse.

`class `**`SenseDaemon`**` :   `[`Daemon`](../object/Daemon.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`SenseDaemon`**  
[`Daemon`](../object/Daemon.html)  
[`Event`](../object/Event.html)  
[`BasicEvent`](../object/BasicEvent.html)  
`                                 object`  
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
[`eventOrder`](../object/Event.html#eventOrder)[`isPromptDaemon`](../object/Event.html#isPromptDaemon)[`nextRunTime`](../object/Event.html#nextRunTime)

Inherited from `BasicEvent` :  
[`obj_`](../object/BasicEvent.html#obj_)[`prop_`](../object/BasicEvent.html#prop_)[`sense_`](../object/BasicEvent.html#sense_)[`source_`](../object/BasicEvent.html#source_)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`construct`](#construct)

Inherited from `Daemon` :  
[`executeEvent`](../object/Daemon.html#executeEvent)

Inherited from `Event` :  
[`delayEvent`](../object/Event.html#delayEvent)[`getNextRunTime`](../object/Event.html#getNextRunTime)[`removeEvent`](../object/Event.html#removeEvent)

Inherited from `BasicEvent` :  
[`callMethod`](../object/BasicEvent.html#callMethod)[`eventMatches`](../object/BasicEvent.html#eventMatches)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (obj, prop, interval, source, sense)`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[796](../source/events.t.html#796)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
