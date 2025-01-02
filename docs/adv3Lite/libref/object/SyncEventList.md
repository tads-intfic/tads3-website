---
layout: docs
---
<span class="title">SyncEventList</span><span class="type">class</span>

[eventList.t](../file/eventList.t.html)\[[321](../source/eventList.t.html#321)\]

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

A synchronized event list. This is an event list that takes its actions
from a separate event list object. We get our current state from the
other list, and advancing our state advances the other list's state in
lock step. Set 'masterObject' to refer to the master list whose state we
synchronize with.

This can be useful, for example, when we have messages that reflect two
different points of view on the same events: the messages for each point
of view can be kept in a separate list, but the one list can be a slave
of the other to ensure that the two lists are based on a common state.

`class `**`SyncEventList`**` :   `[`EventList`](../object/EventList.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`SyncEventList`**  
`         `[`EventList`](../object/EventList.html)  
`                 `[`Script`](../object/Script.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`masterObject`](#masterObject)`  `

Inherited from `EventList` :  
` `[`curScriptState`](../object/EventList.html#curScriptState)`  `[`eventList`](../object/EventList.html#eventList)`  `[`eventListLen`](../object/EventList.html#eventListLen)`  `[`resetEachCycle`](../object/EventList.html#resetEachCycle)`  `

` `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`advanceState`](#advanceState)`  `[`getScriptState`](#getScriptState)`  `[`scriptDone`](#scriptDone)`  `

Inherited from `EventList` :  
` `[`addItem`](../object/EventList.html#addItem)`  `[`construct`](../object/EventList.html#construct)`  `[`doScript`](../object/EventList.html#doScript)`  `[`doScriptEvent`](../object/EventList.html#doScriptEvent)`  `[`resetList`](../object/EventList.html#resetList)`  `

` `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="masterObject"></span>

`masterObject`

[eventList.t](../file/eventList.t.html)\[[323](../source/eventList.t.html#323)\]

<div class="desc">

my master event list object

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="advanceState"></span>

`advanceState ( )`<span class="rem">OVERRIDDEN</span>

[eventList.t](../file/eventList.t.html)\[[329](../source/eventList.t.html#329)\]

<div class="desc">

to advance my state, advance the master list's state

</div>

<span id="getScriptState"></span>

`getScriptState ( )`<span class="rem">OVERRIDDEN</span>

[eventList.t](../file/eventList.t.html)\[[326](../source/eventList.t.html#326)\]

<div class="desc">

my state is simply the master list's state

</div>

<span id="scriptDone"></span>

`scriptDone ( )`<span class="rem">OVERRIDDEN</span>

[eventList.t](../file/eventList.t.html)\[[332](../source/eventList.t.html#332)\]

<div class="desc">

let the master list take care of finishing a script step

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
