<span class="title">Event</span><span class="type">class</span>

[events.t](../file/events.t.html)\[[637](../source/events.t.html#637)\]

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

Base class for fuses and daemons

`class `**`Event`**` :   `[`BasicEvent`](../object/BasicEvent.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Event`**  
`         `[`BasicEvent`](../object/BasicEvent.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`Event`**  
`         `[`Daemon`](../object/Daemon.html)  
`                 `[`SenseDaemon`](../object/SenseDaemon.html)  
`         `[`Fuse`](../object/Fuse.html)  
`                 `[`SenseFuse`](../object/SenseFuse.html)  
`         `[`PromptDaemon`](../object/PromptDaemon.html)  
`                 `[`OneTimePromptDaemon`](../object/OneTimePromptDaemon.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`eventOrder`](#eventOrder)`  `[`isPromptDaemon`](#isPromptDaemon)`  `[`nextRunTime`](#nextRunTime)`  `

Inherited from `BasicEvent` :  
` `[`obj_`](../object/BasicEvent.html#obj_)`  `[`prop_`](../object/BasicEvent.html#prop_)`  `[`sense_`](../object/BasicEvent.html#sense_)`  `[`source_`](../object/BasicEvent.html#source_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`delayEvent`](#delayEvent)`  `[`getNextRunTime`](#getNextRunTime)`  `[`removeEvent`](#removeEvent)`  `

Inherited from `BasicEvent` :  
` `[`callMethod`](../object/BasicEvent.html#callMethod)`  `[`eventMatches`](../object/BasicEvent.html#eventMatches)`  `[`executeEvent`](../object/BasicEvent.html#executeEvent)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="eventOrder"></span>

`eventOrder`

[events.t](../file/events.t.html)\[[654](../source/events.t.html#654)\]

<div class="desc">

Event order - this establishes the order we run relative to other events
scheduled to run at the same game clock time. Lowest number goes first.
By default, we provide an event order of 100, which should leave plenty
of room for custom events before and after default events.

</div>

<span id="isPromptDaemon"></span>

`isPromptDaemon`

[events.t](../file/events.t.html)\[[674](../source/events.t.html#674)\]

<div class="desc">

by default, we're not a per-command-prompt daemon

</div>

<span id="nextRunTime"></span>

`nextRunTime`

[events.t](../file/events.t.html)\[[671](../source/events.t.html#671)\]

<div class="desc">

our next execution time, expressed in game clock time; by default, we'll
set this to nil, which means that we are not scheduled to execute at all

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (obj, prop)`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[657](../source/events.t.html#657)\]

<div class="desc">

creation

</div>

<span id="delayEvent"></span>

`delayEvent (turns)`

[events.t](../file/events.t.html)\[[642](../source/events.t.html#642)\]

<div class="desc">

delay our scheduled run time by the given number of turns

</div>

<span id="getNextRunTime"></span>

`getNextRunTime ( )`

[events.t](../file/events.t.html)\[[639](../source/events.t.html#639)\]

<div class="desc">

our next run time, in game clock time

</div>

<span id="removeEvent"></span>

`removeEvent ( )`

[events.t](../file/events.t.html)\[[645](../source/events.t.html#645)\]

<div class="desc">

remove this event from the event manager

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
