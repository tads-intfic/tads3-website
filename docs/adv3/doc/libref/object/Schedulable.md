---
layout: docs
---
<span class="title">Schedulable</span><span class="type">class</span>

[events.t](../file/events.t.html)\[[223](../source/events.t.html#223)\]

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

An item that can be scheduled for time-based notifications. The main
scheduler loop in runScheduler() operates on objects of this class.

Note that we build a list of all Schedulable instances during
pre-initialization. If any Schedulable objects are dynamically created,
they must be added to the list explicitly after creation in order for
the event manager to schedule them for execution. The default
constructor does this automatically, so subclasses can simply inherit
our constructor to be added to the master list.

`class `**`Schedulable`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Schedulable`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`Schedulable`**  
[`Actor`](../object/Actor.html)  
[`UntakeableActor`](../object/UntakeableActor.html)  
[`Person`](../object/Person.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

[`eventManager`](../object/eventManager.html)
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`allSchedulables`](#allSchedulables)[`gameClockTime`](#gameClockTime)[`nextRunTime`](#nextRunTime)[`scheduleOrder`](#scheduleOrder)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`calcScheduleOrder`](#calcScheduleOrder)[`construct`](#construct)[`execute`](#execute)[`executeTurn`](#executeTurn)[`getNextRunTime`](#getNextRunTime)[`incNextRunTime`](#incNextRunTime)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="allSchedulables"></span>

`allSchedulables`

[events.t](../file/events.t.html)\[[308](../source/events.t.html#308)\]

<div class="desc">

A list of all of the Schedulable objects in the game. We set this up
during pre-initialization; if any Schedulable instances are created
dynamically, they must be explicitly added to this list after creation.

</div>

<span id="gameClockTime"></span>

`gameClockTime`

[events.t](../file/events.t.html)\[[300](../source/events.t.html#300)\]

<div class="desc">

A class variable giving the current game clock time. This is a class
variable because there's only one global game clock. The game clock
starts at zero and increments in game time units; a game time unit is
the arbitrary quantum of time for our event scheduling system.

</div>

<span id="nextRunTime"></span>

`nextRunTime`

[events.t](../file/events.t.html)\[[291](../source/events.t.html#291)\]

<div class="desc">

my next running time, in game clock time

</div>

<span id="scheduleOrder"></span>

`scheduleOrder`

[events.t](../file/events.t.html)\[[273](../source/events.t.html#273)\]

<div class="desc">

Scheduling order. This determines which item goes first when multiple
items are schedulable at the same time (i.e., they all have the same
getNextRunTime() values). The item with the lowest number here goes
first.

This should never be evaluated except immediately after a call to
calcScheduleOrder.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="calcScheduleOrder"></span>

`calcScheduleOrder ( )`

[events.t](../file/events.t.html)\[[288](../source/events.t.html#288)\]

<div class="desc">

Calculate the scheduling order, returning the order value and storing it
in our property scheduleOrder. This is used to calculate and cache the
value prior to sorting a list of schedulable items. We use this two-step
approach (first calculate, then sort) so that we avoid repeatedly
evaluating a complex calculation, if indeed there is a complex
calculation to perform.

By default, we assume that the schedule order is static, so we simply
leave our scheduleOrder property unchanged and return its present value.

</div>

<span id="construct"></span>

`construct ( )`

[events.t](../file/events.t.html)\[[225](../source/events.t.html#225)\]

<div class="desc">

construction - add myself to the Schedulable list

</div>

<span id="execute"></span>

`execute ( )`

[events.t](../file/events.t.html)\[[320](../source/events.t.html#320)\]

<div class="desc">

Execute preinitialization. Build a list of all of the schedulable
objects in the game, so that we can scan this list quickly during play.

</div>

<span id="executeTurn"></span>

`executeTurn ( )`

[events.t](../file/events.t.html)\[[262](../source/events.t.html#262)\]

<div class="desc">

Notify this object that its scheduled run time has arrived. This should
perform the scheduled task. If the scheduled task takes any game time,
the object's internal next run time should be updated accordingly.

The scheduler will invoke this method of the same object repeatedly for
as long as its nextRunTime remains unchanged AND this method returns
true. If the object's scheduling priority changes relative to other
schedulable objects, it should return nil here to tell the scheduler to
recalculate scheduling priorities.

</div>

<span id="getNextRunTime"></span>

`getNextRunTime ( )`

[events.t](../file/events.t.html)\[[240](../source/events.t.html#240)\]

<div class="desc">

Get the next time (on the game clock) at which I'm eligible for
execution. We won't receive any scheduling notifications until this
time. If this object doesn't want any scheduling notifications, return
nil.

</div>

<span id="incNextRunTime"></span>

`incNextRunTime (amt)`

[events.t](../file/events.t.html)\[[243](../source/events.t.html#243)\]

<div class="desc">

advance my next run time by the given number of clock units

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
