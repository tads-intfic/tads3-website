---
layout: docs
---
<span class="title">RealTimeEvent</span><span class="type">class</span>

[events.t](../file/events.t.html)\[[1136](../source/events.t.html#1136)\]

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



Real-Time Event. This is an event that occurs according to elapsed
wall-clock time in the real world.

`class `**`RealTimeEvent`**` :   `[`BasicEvent`](../object/BasicEvent.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`RealTimeEvent`**  
[`BasicEvent`](../object/BasicEvent.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`RealTimeEvent`**  
[`RealTimeDaemon`](../object/RealTimeDaemon.html)  
[`RealTimeSenseDaemon`](../object/RealTimeSenseDaemon.html)  
[`RealTimeFuse`](../object/RealTimeFuse.html)  
[`RealTimeSenseFuse`](../object/RealTimeSenseFuse.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`eventTime`](#eventTime)

Inherited from `BasicEvent` :  
[`obj_`](../object/BasicEvent.html#obj_) [`prop_`](../object/BasicEvent.html#prop_) [`sense_`](../object/BasicEvent.html#sense_) [`source_`](../object/BasicEvent.html#source_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct) [`getEventTime`](#getEventTime) [`removeEvent`](#removeEvent)

Inherited from `BasicEvent` :  
[`callMethod`](../object/BasicEvent.html#callMethod) [`eventMatches`](../object/BasicEvent.html#eventMatches) [`executeEvent`](../object/BasicEvent.html#executeEvent)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="eventTime"></span>

`eventTime`

[events.t](../file/events.t.html)\[[1161](../source/events.t.html#1161)\]



our scheduled event time



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (obj, prop)`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[1148](../source/events.t.html#1148)\]



construction



<span id="getEventTime"></span>

`getEventTime ( )`

[events.t](../file/events.t.html)\[[1141](../source/events.t.html#1141)\]



Get the elapsed real time at which this event is triggered. This is a
time value in terms of realTimeManager.getElapsedTime().



<span id="removeEvent"></span>

`removeEvent ( )`

[events.t](../file/events.t.html)\[[1158](../source/events.t.html#1158)\]



remove this event from the real-time event manager





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


