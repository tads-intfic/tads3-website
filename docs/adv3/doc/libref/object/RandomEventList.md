---
layout: docs
---
<span class="title">RandomEventList</span><span class="type">class</span>

[misc.t](../file/misc.t.html)\[[1207](../source/misc.t.html#1207)\]

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



Randomized event list. This is similar to a regular event list, but
chooses an event at random each time it's invoked.

`class `**`RandomEventList`**` :   `[`RandomFiringScript`](../object/RandomFiringScript.html) [`EventList`](../object/EventList.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`RandomEventList`**  
[`RandomFiringScript`](../object/RandomFiringScript.html)  
`                 object`  
[`EventList`](../object/EventList.html)  
[`Script`](../object/Script.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
Inherited from `RandomFiringScript` :  
[`eventPercent`](../object/RandomFiringScript.html#eventPercent) [`eventReduceAfter`](../object/RandomFiringScript.html#eventReduceAfter) [`eventReduceTo`](../object/RandomFiringScript.html#eventReduceTo)

Inherited from `EventList` :  
[`curScriptState`](../object/EventList.html#curScriptState) [`eventList`](../object/EventList.html#eventList) [`eventListLen`](../object/EventList.html#eventListLen)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`doScript`](#doScript) [`getNextRandom`](#getNextRandom)

Inherited from `RandomFiringScript` :  
[`checkEventOdds`](../object/RandomFiringScript.html#checkEventOdds)

Inherited from `EventList` :  
[`advanceState`](../object/EventList.html#advanceState) [`construct`](../object/EventList.html#construct) [`doScriptEvent`](../object/EventList.html#doScriptEvent) [`scriptDone`](../object/EventList.html#scriptDone)

Inherited from `Script` :  
[`getScriptState`](../object/Script.html#getScriptState)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="doScript"></span>

`doScript ( )`<span class="rem">OVERRIDDEN</span>

[misc.t](../file/misc.t.html)\[[1209](../source/misc.t.html#1209)\]



process the next step of the script



<span id="getNextRandom"></span>

`getNextRandom ( )`

[misc.t](../file/misc.t.html)\[[1233](../source/misc.t.html#1233)\]



Get the next random state. By default, we simply return a number from 1
to the number of entries in our event list. This is a separate method to
allow subclasses to customize the way the random number is selected.
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


