---
layout: docs
---
<span class="title">CyclicEventList</span><span class="type">class</span>

[eventList.t](../file/eventList.t.html)\[[257](../source/eventList.t.html#257)\],
[eventListItem.t](../file/eventListItem.t.html)\[[344](../source/eventListItem.t.html#344)\]

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



A cyclical event list - this runs through the event list in order,
returning to the first element when we pass the last element.

*Modified in
[eventListItem.t](../file/eventListItem.t.html)\[[344](../source/eventListItem.t.html#344)\]:*  
Chache our new eventList length.

`class `**`CyclicEventList`**` :   `[`EventList`](../object/EventList.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`CyclicEventList`**  
[`EventList`](../object/EventList.html)  
[`Script`](../object/Script.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
Inherited from `EventList` :  
[`curScriptState`](../object/EventList.html#curScriptState) [`eventList`](../object/EventList.html#eventList) [`eventListLen`](../object/EventList.html#eventListLen) [`resetEachCycle`](../object/EventList.html#resetEachCycle)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`advanceState`](#advanceState)

Inherited from `EventList` :  
[`addItem`](../object/EventList.html#addItem) [`construct`](../object/EventList.html#construct) [`doScript`](../object/EventList.html#doScript) [`doScriptEvent`](../object/EventList.html#doScriptEvent) [`resetList`](../object/EventList.html#resetList) [`scriptDone`](../object/EventList.html#scriptDone)

Inherited from `Script` :  
[`getScriptState`](../object/Script.html#getScriptState)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="advanceState"></span>

`advanceState ( )`<span class="rem">OVERRIDDEN</span>

[eventList.t](../file/eventList.t.html)\[[258](../source/eventList.t.html#258)\],
[eventListItem.t](../file/eventListItem.t.html)\[[345](../source/eventListItem.t.html#345)\]



*no description available*
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


