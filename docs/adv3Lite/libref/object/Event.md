---
layout: docs
---
<span class="title">Event</span><span class="type">class</span>

[events.t](../file/events.t.html)\[[213](../source/events.t.html#213)\]

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



An Event is an object such as a Fuse or Daemon that is executed
according to certain conditions. Game code will normally use one of its
subclasses rather than the Event class directly.

`class `**`Event`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Event`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`Event`**  
[`Daemon`](../object/Daemon.html)  
[`SenseDaemon`](../object/SenseDaemon.html)  
[`Fuse`](../object/Fuse.html)  
[`SenseFuse`](../object/SenseFuse.html)  
[`TimeFuse`](../object/TimeFuse.html)  
[`SenseTimeFuse`](../object/SenseTimeFuse.html)  
[`PromptDaemon`](../object/PromptDaemon.html)  
[`OneTimePromptDaemon`](../object/OneTimePromptDaemon.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`actorSchedule`](../object/actorSchedule.html) [`sceneManager`](../object/sceneManager.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`captureText`](#captureText) [`eventOrder`](#eventOrder) [`executed`](#executed) [`interval_`](#interval_) [`isPromptDaemon`](#isPromptDaemon) [`nextRunTime`](#nextRunTime) [`obj_`](#obj_) [`prop_`](#prop_) [`senseObj_`](#senseObj_) [`senseProp_`](#senseProp_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`callMethod`](#callMethod) [`construct`](#construct) [`delayEvent`](#delayEvent) [`eventMatches`](#eventMatches) [`executeEvent`](#executeEvent) [`getNextRunTime`](#getNextRunTime) [`removeEvent`](#removeEvent)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="captureText"></span>

`captureText`

[events.t](../file/events.t.html)\[[330](../source/events.t.html#330)\]



Text captured from callMethod()



<span id="eventOrder"></span>

`eventOrder`

[events.t](../file/events.t.html)\[[268](../source/events.t.html#268)\]



Event order - this establishes the order we run relative to other events
scheduled to run at the same game clock time. Lowest number goes first.
By default, we provide an event order of 100, which should leave plenty
of room for custom events before and after default events.



<span id="executed"></span>

`executed`

[events.t](../file/events.t.html)\[[333](../source/events.t.html#333)\]



Flag - has this event ever been executed



<span id="interval_"></span>

`interval_`

[events.t](../file/events.t.html)\[[236](../source/events.t.html#236)\]



The interval at which this Event is to be executed.



<span id="isPromptDaemon"></span>

`isPromptDaemon`

[events.t](../file/events.t.html)\[[278](../source/events.t.html#278)\]



by default, we're not a per-command-prompt daemon



<span id="nextRunTime"></span>

`nextRunTime`

[events.t](../file/events.t.html)\[[275](../source/events.t.html#275)\]



our next execution time, expressed in game clock time; by default, we'll
set this to nil, which means that we are not scheduled to execute at all



<span id="obj_"></span>

`obj_`

[events.t](../file/events.t.html)\[[230](../source/events.t.html#230)\]



The object we're associated with



<span id="prop_"></span>

`prop_`

[events.t](../file/events.t.html)\[[233](../source/events.t.html#233)\]



A pointer to the property of that object to execute



<span id="senseObj_"></span>

`senseObj_`

[events.t](../file/events.t.html)\[[320](../source/events.t.html#320)\]



If the senseObj\_ property is defined (normally via our constructor),
the player character must be able to sense the senseObj\_ via the sense
defined in senseProp\_ for any textual output from obj\_.(prop\_) to be
displayed when this Event is executed.



<span id="senseProp_"></span>

`senseProp_`

[events.t](../file/events.t.html)\[[327](../source/events.t.html#327)\]



The sense via which we test whether senseObj\_ can be sensed by the
player character. This must be given as an appropriate property of the
Query object, e.g. &canSee or &canHear.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="callMethod"></span>

`callMethod ( )`

[events.t](../file/events.t.html)\[[281](../source/events.t.html#281)\]



Call the method this Event should execute when it's ready to do so



<span id="construct"></span>

`construct (obj, prop)`

[events.t](../file/events.t.html)\[[216](../source/events.t.html#216)\]



Construct a new Event



<span id="delayEvent"></span>

`delayEvent (turns)`

[events.t](../file/events.t.html)\[[248](../source/events.t.html#248)\]



delay our scheduled run time by the given number of turns



<span id="eventMatches"></span>

`eventMatches (obj, prop)`

[events.t](../file/events.t.html)\[[259](../source/events.t.html#259)\]



does this event match the given object/property combination?



<span id="executeEvent"></span>

`executeEvent ( )`

[events.t](../file/events.t.html)\[[256](../source/events.t.html#256)\]



Execute the event. This must be overridden by the subclass to perform
the appropriate operation when executed. In particular, the subclass
must reschedule or unschedule the event, as appropriate.



<span id="getNextRunTime"></span>

`getNextRunTime ( )`

[events.t](../file/events.t.html)\[[242](../source/events.t.html#242)\]



Get the next run time, i.e. the next turn on which this Event should
execute obj\_.(prop\_).



<span id="removeEvent"></span>

`removeEvent ( )`

[events.t](../file/events.t.html)\[[309](../source/events.t.html#309)\]



Remove this event from the eventManager's list of events.
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


