---
layout: docs
---
<span class="title">SenseFuse</span><span class="type">class</span>

[events.t](../file/events.t.html)\[[727](../source/events.t.html#727)\]

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

Sensory-context-sensitive fuse - this is a fuse with an explicit sensory
context. We'll run the fuse in its sense context, so any messages
generated will be visible only if the given source object is reachable
by the player character in the given sense.

Conceptually, the source object is considered the source of any messages
that the fuse generates, and the messages pertain to the given sense; so
if the player character cannot sense the source object in the given
sense, the messages should not be displayed. For example, if the fuse
will describe the noise made by an alarm clock when the alarm goes off,
the source object would be the alarm clock and the sense would be sound;
this way, if the player character isn't in hearing range of the alarm
clock when the alarm goes off, we won't display messages about the alarm
noise.

`class `**`SenseFuse`**` :   `[`Fuse`](../object/Fuse.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`SenseFuse`**  
[`Fuse`](../object/Fuse.html)  
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





Inherited from `Event` :  
[`eventOrder`](../object/Event.html#eventOrder)[`isPromptDaemon`](../object/Event.html#isPromptDaemon)[`nextRunTime`](../object/Event.html#nextRunTime)

Inherited from `BasicEvent` :  
[`obj_`](../object/BasicEvent.html#obj_)[`prop_`](../object/BasicEvent.html#prop_)[`sense_`](../object/BasicEvent.html#sense_)[`source_`](../object/BasicEvent.html#source_)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`construct`](#construct)

Inherited from `Fuse` :  
[`executeEvent`](../object/Fuse.html#executeEvent)

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

`construct (obj, prop, turns, source, sense)`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[728](../source/events.t.html#728)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
