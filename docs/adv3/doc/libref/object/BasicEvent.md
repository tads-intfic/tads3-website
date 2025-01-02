---
layout: docs
---
<span class="title">BasicEvent</span><span class="type">class</span>

[events.t](../file/events.t.html)\[[581](../source/events.t.html#581)\]

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



A basic event, for game-time and real-time events.

`class `**`BasicEvent`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`BasicEvent`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`BasicEvent`**  
[`Event`](../object/Event.html)  
[`Daemon`](../object/Daemon.html)  
[`SenseDaemon`](../object/SenseDaemon.html)  
[`Fuse`](../object/Fuse.html)  
[`SenseFuse`](../object/SenseFuse.html)  
[`PromptDaemon`](../object/PromptDaemon.html)  
[`OneTimePromptDaemon`](../object/OneTimePromptDaemon.html)  
[`RealTimeEvent`](../object/RealTimeEvent.html)  
[`RealTimeDaemon`](../object/RealTimeDaemon.html)  
[`RealTimeSenseDaemon`](../object/RealTimeSenseDaemon.html)  
[`RealTimeFuse`](../object/RealTimeFuse.html)  
[`RealTimeSenseFuse`](../object/RealTimeSenseFuse.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`obj_`](#obj_)[`prop_`](#prop_)[`sense_`](#sense_)[`source_`](#source_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`callMethod`](#callMethod)[`construct`](#construct)[`eventMatches`](#eventMatches)[`executeEvent`](#executeEvent)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="obj_"></span>

`obj_`

[events.t](../file/events.t.html)\[[617](../source/events.t.html#617)\]



the object and property we invoke



<span id="prop_"></span>

`prop_`

[events.t](../file/events.t.html)\[[618](../source/events.t.html#618)\]



*no description available*



<span id="sense_"></span>

`sense_`

[events.t](../file/events.t.html)\[[631](../source/events.t.html#631)\]



*no description available*



<span id="source_"></span>

`source_`

[events.t](../file/events.t.html)\[[630](../source/events.t.html#630)\]



The sensory context of the event. When the event fires, we'll execute
its method in this sensory context, so that any messages generated will
be displayed only if the player character can sense the source object in
the given sense.

By default, these are nil, which means that the event's messages will be
displayed (or, at least, they won't be suppressed because of the sensory
context).



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="callMethod"></span>

`callMethod ( )`

[events.t](../file/events.t.html)\[[605](../source/events.t.html#605)\]



Call our underlying method. This is an internal routine intended for use
by the executeEvent() implementations.



<span id="construct"></span>

`construct (obj, prop)`

[events.t](../file/events.t.html)\[[583](../source/events.t.html#583)\]



construction



<span id="eventMatches"></span>

`eventMatches (obj, prop)`

[events.t](../file/events.t.html)\[[599](../source/events.t.html#599)\]



does this event match the given object/property combination?



<span id="executeEvent"></span>

`executeEvent ( )`

[events.t](../file/events.t.html)\[[596](../source/events.t.html#596)\]



Execute the event. This must be overridden by the subclass to perform
the appropriate operation when executed. In particular, the subclass
must reschedule or unschedule the event, as appropriate.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


