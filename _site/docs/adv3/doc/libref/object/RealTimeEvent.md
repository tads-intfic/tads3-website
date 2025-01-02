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

<div class="fdesc">

Real-Time Event. This is an event that occurs according to elapsed
wall-clock time in the real world.

`class `**`RealTimeEvent`**` :   `[`BasicEvent`](../object/BasicEvent.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`RealTimeEvent`**  
`         `[`BasicEvent`](../object/BasicEvent.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`RealTimeEvent`**  
`         `[`RealTimeDaemon`](../object/RealTimeDaemon.html)  
`                 `[`RealTimeSenseDaemon`](../object/RealTimeSenseDaemon.html)  
`         `[`RealTimeFuse`](../object/RealTimeFuse.html)  
`                 `[`RealTimeSenseFuse`](../object/RealTimeSenseFuse.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`eventTime`](#eventTime)`  `

Inherited from `BasicEvent` :  
` `[`obj_`](../object/BasicEvent.html#obj_)`  `[`prop_`](../object/BasicEvent.html#prop_)`  `[`sense_`](../object/BasicEvent.html#sense_)`  `[`source_`](../object/BasicEvent.html#source_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`getEventTime`](#getEventTime)`  `[`removeEvent`](#removeEvent)`  `

Inherited from `BasicEvent` :  
` `[`callMethod`](../object/BasicEvent.html#callMethod)`  `[`eventMatches`](../object/BasicEvent.html#eventMatches)`  `[`executeEvent`](../object/BasicEvent.html#executeEvent)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="eventTime"></span>

`eventTime`

[events.t](../file/events.t.html)\[[1161](../source/events.t.html#1161)\]

<div class="desc">

our scheduled event time

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (obj, prop)`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[1148](../source/events.t.html#1148)\]

<div class="desc">

construction

</div>

<span id="getEventTime"></span>

`getEventTime ( )`

[events.t](../file/events.t.html)\[[1141](../source/events.t.html#1141)\]

<div class="desc">

Get the elapsed real time at which this event is triggered. This is a
time value in terms of realTimeManager.getElapsedTime().

</div>

<span id="removeEvent"></span>

`removeEvent ( )`

[events.t](../file/events.t.html)\[[1158](../source/events.t.html#1158)\]

<div class="desc">

remove this event from the real-time event manager

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
