---
layout: docs
---
<span class="title">RealTimeFuse</span><span class="type">class</span>

[events.t](../file/events.t.html)\[[1168](../source/events.t.html#1168)\]

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

Real-time fuse. This is an event that fires once at a specified elapsed
time into the game.

`class `**`RealTimeFuse`**` :   `[`RealTimeEvent`](../object/RealTimeEvent.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`RealTimeFuse`**  
`         `[`RealTimeEvent`](../object/RealTimeEvent.html)  
`                 `[`BasicEvent`](../object/BasicEvent.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`RealTimeFuse`**  
`         `[`RealTimeSenseFuse`](../object/RealTimeSenseFuse.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

Inherited from `RealTimeEvent` :  
` `[`eventTime`](../object/RealTimeEvent.html#eventTime)`  `

Inherited from `BasicEvent` :  
` `[`obj_`](../object/BasicEvent.html#obj_)`  `[`prop_`](../object/BasicEvent.html#prop_)`  `[`sense_`](../object/BasicEvent.html#sense_)`  `[`source_`](../object/BasicEvent.html#source_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`executeEvent`](#executeEvent)`  `

Inherited from `RealTimeEvent` :  
` `[`getEventTime`](../object/RealTimeEvent.html#getEventTime)`  `[`removeEvent`](../object/RealTimeEvent.html#removeEvent)`  `

Inherited from `BasicEvent` :  
` `[`callMethod`](../object/BasicEvent.html#callMethod)`  `[`eventMatches`](../object/BasicEvent.html#eventMatches)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (obj, prop, delta)`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[1174](../source/events.t.html#1174)\]

<div class="desc">

Creation. 'delta' is the amount of real time (in milliseconds) that
should elapse before the fuse is executed. If 'delta' is zero or
negative, the fuse will be schedulable immediately.

</div>

<span id="executeEvent"></span>

`executeEvent ( )`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[1188](../source/events.t.html#1188)\]

<div class="desc">

execute the fuse

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
