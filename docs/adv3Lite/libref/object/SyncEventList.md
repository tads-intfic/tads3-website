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



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`SyncEventList`**  
[`EventList`](../object/EventList.html)  
[`Script`](../object/Script.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`masterObject`](#masterObject)

Inherited from `EventList` :  
[`curScriptState`](../object/EventList.html#curScriptState) [`eventList`](../object/EventList.html#eventList) [`eventListLen`](../object/EventList.html#eventListLen) [`resetEachCycle`](../object/EventList.html#resetEachCycle)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`advanceState`](#advanceState) [`getScriptState`](#getScriptState) [`scriptDone`](#scriptDone)

Inherited from `EventList` :  
[`addItem`](../object/EventList.html#addItem) [`construct`](../object/EventList.html#construct) [`doScript`](../object/EventList.html#doScript) [`doScriptEvent`](../object/EventList.html#doScriptEvent) [`resetList`](../object/EventList.html#resetList)



<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="masterObject"></span>

`masterObject`

[eventList.t](../file/eventList.t.html)\[[323](../source/eventList.t.html#323)\]



my master event list object



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="advanceState"></span>

`advanceState ( )`<span class="rem">OVERRIDDEN</span>

[eventList.t](../file/eventList.t.html)\[[329](../source/eventList.t.html#329)\]



to advance my state, advance the master list's state



<span id="getScriptState"></span>

`getScriptState ( )`<span class="rem">OVERRIDDEN</span>

[eventList.t](../file/eventList.t.html)\[[326](../source/eventList.t.html#326)\]



my state is simply the master list's state



<span id="scriptDone"></span>

`scriptDone ( )`<span class="rem">OVERRIDDEN</span>

[eventList.t](../file/eventList.t.html)\[[332](../source/eventList.t.html#332)\]



let the master list take care of finishing a script step





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


