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



Event Manager. This is a schedulable object that keeps track of fuses
and daemons, and schedules their execution.

**`eventManager`**` :   `[`BasicEventManager`](../object/BasicEventManager.html) [`Schedulable`](../object/Schedulable.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`eventManager`**  
[`BasicEventManager`](../object/BasicEventManager.html)  
`                 object`  
[`Schedulable`](../object/Schedulable.html)  
`                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`curEvent_`](#curEvent_) [`events_`](#events_) [`scheduleOrder`](#scheduleOrder)



Inherited from `Schedulable` :  
[`allSchedulables`](../object/Schedulable.html#allSchedulables) [`gameClockTime`](../object/Schedulable.html#gameClockTime) [`nextRunTime`](../object/Schedulable.html#nextRunTime)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`executeList`](#executeList) [`executePrompt`](#executePrompt) [`executeTurn`](#executeTurn) [`getNextRunTime`](#getNextRunTime)

Inherited from `BasicEventManager` :  
[`addEvent`](../object/BasicEventManager.html#addEvent) [`removeCurrentEvent`](../object/BasicEventManager.html#removeCurrentEvent) [`removeEvent`](../object/BasicEventManager.html#removeEvent) [`removeMatchingEvents`](../object/BasicEventManager.html#removeMatchingEvents)

Inherited from `Schedulable` :  
[`calcScheduleOrder`](../object/Schedulable.html#calcScheduleOrder) [`construct`](../object/Schedulable.html#construct) [`execute`](../object/Schedulable.html#execute) [`incNextRunTime`](../object/Schedulable.html#incNextRunTime)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="curEvent_"></span>

`curEvent_`

[events.t](../file/events.t.html)\[[563](../source/events.t.html#563)\]



the event currently being executed



<span id="events_"></span>

`events_`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[560](../source/events.t.html#560)\]



our list of fuses and daemons



<span id="scheduleOrder"></span>

`scheduleOrder`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[432](../source/events.t.html#432)\]



Use a scheduling order of 1000 to ensure we go after all actors. By
default, actors use scheduling orders in the range 100 to 400, so our
order of 1000 ensures that fuses and daemons run after all characters on
a given turn.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="executeList"></span>

`executeList (lst)`

[events.t](../file/events.t.html)\[[499](../source/events.t.html#499)\]



internal service routine - execute the fuses and daemons in the given
list, in eventOrder priority order



<span id="executePrompt"></span>

`executePrompt ( )`

[events.t](../file/events.t.html)\[[489](../source/events.t.html#489)\]



Execute a command prompt turn. We'll execute each per-command-prompt
daemon.



<span id="executeTurn"></span>

`executeTurn ( )`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[467](../source/events.t.html#467)\]



Execute a turn. We'll execute each fuse and each daemon that is
currently schedulable.



<span id="getNextRunTime"></span>

`getNextRunTime ( )`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[438](../source/events.t.html#438)\]



Get the next run time. We'll find the lowest run time of our fuses and
daemons and return that.
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


