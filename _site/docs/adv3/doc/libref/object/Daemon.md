<span class="title">Daemon</span><span class="type">class</span>

[events.t](../file/events.t.html)\[[744](../source/events.t.html#744)\]

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

Daemon. A daemon is an event that fires repeatedly at given intervals.
When a daemon is executed, it is scheduled again for execution after its
interval elapses again.

`class `**`Daemon`**` :   `[`Event`](../object/Event.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Daemon`**  
`         `[`Event`](../object/Event.html)  
`                 `[`BasicEvent`](../object/BasicEvent.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`Daemon`**  
`         `[`SenseDaemon`](../object/SenseDaemon.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`interval_`](#interval_)`  `

Inherited from `Event` :  
` `[`eventOrder`](../object/Event.html#eventOrder)`  `[`isPromptDaemon`](../object/Event.html#isPromptDaemon)`  `[`nextRunTime`](../object/Event.html#nextRunTime)`  `

Inherited from `BasicEvent` :  
` `[`obj_`](../object/BasicEvent.html#obj_)`  `[`prop_`](../object/BasicEvent.html#prop_)`  `[`sense_`](../object/BasicEvent.html#sense_)`  `[`source_`](../object/BasicEvent.html#source_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`executeEvent`](#executeEvent)`  `

Inherited from `Event` :  
` `[`delayEvent`](../object/Event.html#delayEvent)`  `[`getNextRunTime`](../object/Event.html#getNextRunTime)`  `[`removeEvent`](../object/Event.html#removeEvent)`  `

Inherited from `BasicEvent` :  
` `[`callMethod`](../object/BasicEvent.html#callMethod)`  `[`eventMatches`](../object/BasicEvent.html#eventMatches)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="interval_"></span>

`interval_`

[events.t](../file/events.t.html)\[[788](../source/events.t.html#788)\]

<div class="desc">

our execution interval, in turns

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (obj, prop, interval)`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[753](../source/events.t.html#753)\]

<div class="desc">

Creation. 'interval' is the number of turns between invocations of the
daemon; this should be at least 1, which causes the daemon to be invoked
on each turn. The first execution will be (interval-1) turns in the
future - so if interval is 1, the daemon will first be executed on the
current turn, and if interval is 2, the daemon will be executed on the
next turn.

</div>

<span id="executeEvent"></span>

`executeEvent ( )`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[778](../source/events.t.html#778)\]

<div class="desc">

execute the daemon

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
