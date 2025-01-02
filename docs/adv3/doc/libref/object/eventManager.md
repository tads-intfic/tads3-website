---
layout: docs
---
<span class="title">eventManager</span><span class="type">object</span>

[events.t](../file/events.t.html)\[[425](../source/events.t.html#425)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)

<div class="fdesc">

Event Manager. This is a schedulable object that keeps track of fuses
and daemons, and schedules their execution.

**`eventManager`**` :   `[`BasicEventManager`](../object/BasicEventManager.html)`   `[`Schedulable`](../object/Schedulable.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`eventManager`**  
`         `[`BasicEventManager`](../object/BasicEventManager.html)  
`                 object`  
`         `[`Schedulable`](../object/Schedulable.html)  
`                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`curEvent_`](#curEvent_)`  `[`events_`](#events_)`  `[`scheduleOrder`](#scheduleOrder)`  `

` `

Inherited from `Schedulable` :  
` `[`allSchedulables`](../object/Schedulable.html#allSchedulables)`  `[`gameClockTime`](../object/Schedulable.html#gameClockTime)`  `[`nextRunTime`](../object/Schedulable.html#nextRunTime)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`executeList`](#executeList)`  `[`executePrompt`](#executePrompt)`  `[`executeTurn`](#executeTurn)`  `[`getNextRunTime`](#getNextRunTime)`  `

Inherited from `BasicEventManager` :  
` `[`addEvent`](../object/BasicEventManager.html#addEvent)`  `[`removeCurrentEvent`](../object/BasicEventManager.html#removeCurrentEvent)`  `[`removeEvent`](../object/BasicEventManager.html#removeEvent)`  `[`removeMatchingEvents`](../object/BasicEventManager.html#removeMatchingEvents)`  `

Inherited from `Schedulable` :  
` `[`calcScheduleOrder`](../object/Schedulable.html#calcScheduleOrder)`  `[`construct`](../object/Schedulable.html#construct)`  `[`execute`](../object/Schedulable.html#execute)`  `[`incNextRunTime`](../object/Schedulable.html#incNextRunTime)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="curEvent_"></span>

`curEvent_`

[events.t](../file/events.t.html)\[[563](../source/events.t.html#563)\]

<div class="desc">

the event currently being executed

</div>

<span id="events_"></span>

`events_`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[560](../source/events.t.html#560)\]

<div class="desc">

our list of fuses and daemons

</div>

<span id="scheduleOrder"></span>

`scheduleOrder`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[432](../source/events.t.html#432)\]

<div class="desc">

Use a scheduling order of 1000 to ensure we go after all actors. By
default, actors use scheduling orders in the range 100 to 400, so our
order of 1000 ensures that fuses and daemons run after all characters on
a given turn.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="executeList"></span>

`executeList (lst)`

[events.t](../file/events.t.html)\[[499](../source/events.t.html#499)\]

<div class="desc">

internal service routine - execute the fuses and daemons in the given
list, in eventOrder priority order

</div>

<span id="executePrompt"></span>

`executePrompt ( )`

[events.t](../file/events.t.html)\[[489](../source/events.t.html#489)\]

<div class="desc">

Execute a command prompt turn. We'll execute each per-command-prompt
daemon.

</div>

<span id="executeTurn"></span>

`executeTurn ( )`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[467](../source/events.t.html#467)\]

<div class="desc">

Execute a turn. We'll execute each fuse and each daemon that is
currently schedulable.

</div>

<span id="getNextRunTime"></span>

`getNextRunTime ( )`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[438](../source/events.t.html#438)\]

<div class="desc">

Get the next run time. We'll find the lowest run time of our fuses and
daemons and return that.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
