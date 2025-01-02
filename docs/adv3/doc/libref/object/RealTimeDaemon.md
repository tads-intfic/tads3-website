---
---
<span class="title">RealTimeDaemon</span><span class="type">class</span>

[events.t](../file/events.t.html)\[[1233](../source/events.t.html#1233)\]

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

Real-time daemon. This is an event that occurs repeatedly at given
real-time intervals. When a daemon is executed, it is scheduled again
for execution after its real-time interval elapses again. The daemon's
first execution will occur one interval from the time at which the
daemon is created.

If a daemon is executed late (because other, more pressing tasks had to
be completed first, or because the user was busy editing a command line
and the local platform doesn't support real-time command interruptions),
the interval is applied to the time the daemon actually executed, not to
the originally scheduled execution time. For example, if the daemon is
scheduled to run once every minute, but can't run at all for five
minutes because of command editing on a non-interrupting platform, once
it actually does run, it won't run again for (at least) another minute
after that. This means that the daemon will not run five times all at
once when it's finally allowed to run - there's no making up for lost
time.

`class `**`RealTimeDaemon`**` :   `[`RealTimeEvent`](../object/RealTimeEvent.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`RealTimeDaemon`**  
`         `[`RealTimeEvent`](../object/RealTimeEvent.html)  
`                 `[`BasicEvent`](../object/BasicEvent.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`RealTimeDaemon`**  
`         `[`RealTimeSenseDaemon`](../object/RealTimeSenseDaemon.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`interval_`](#interval_)`  `

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

<span id="interval_"></span>

`interval_`

[events.t](../file/events.t.html)\[[1275](../source/events.t.html#1275)\]

<div class="desc">

my execution interval, in milliseconds

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (obj, prop, interval)`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[1238](../source/events.t.html#1238)\]

<div class="desc">

Creation. 'interval' is the number of milliseconds between invocations.

</div>

<span id="executeEvent"></span>

`executeEvent ( )`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[1254](../source/events.t.html#1254)\]

<div class="desc">

execute the daemon

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
