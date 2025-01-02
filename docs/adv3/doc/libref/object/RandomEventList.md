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

<div class="fdesc">

Randomized event list. This is similar to a regular event list, but
chooses an event at random each time it's invoked.

`class `**`RandomEventList`**` :   `[`RandomFiringScript`](../object/RandomFiringScript.html)[`EventList`](../object/EventList.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`RandomEventList`**  
[`RandomFiringScript`](../object/RandomFiringScript.html)  
`                 object`  
[`EventList`](../object/EventList.html)  
[`Script`](../object/Script.html)  
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



Inherited from `RandomFiringScript` :  
[`eventPercent`](../object/RandomFiringScript.html#eventPercent)[`eventReduceAfter`](../object/RandomFiringScript.html#eventReduceAfter)[`eventReduceTo`](../object/RandomFiringScript.html#eventReduceTo)

Inherited from `EventList` :  
[`curScriptState`](../object/EventList.html#curScriptState)[`eventList`](../object/EventList.html#eventList)[`eventListLen`](../object/EventList.html#eventListLen)



<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`doScript`](#doScript)[`getNextRandom`](#getNextRandom)

Inherited from `RandomFiringScript` :  
[`checkEventOdds`](../object/RandomFiringScript.html#checkEventOdds)

Inherited from `EventList` :  
[`advanceState`](../object/EventList.html#advanceState)[`construct`](../object/EventList.html#construct)[`doScriptEvent`](../object/EventList.html#doScriptEvent)[`scriptDone`](../object/EventList.html#scriptDone)

Inherited from `Script` :  
[`getScriptState`](../object/Script.html#getScriptState)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="doScript"></span>

`doScript ( )`<span class="rem">OVERRIDDEN</span>

[misc.t](../file/misc.t.html)\[[1209](../source/misc.t.html#1209)\]

<div class="desc">

process the next step of the script

</div>

<span id="getNextRandom"></span>

`getNextRandom ( )`

[misc.t](../file/misc.t.html)\[[1233](../source/misc.t.html#1233)\]

<div class="desc">

Get the next random state. By default, we simply return a number from 1
to the number of entries in our event list. This is a separate method to
allow subclasses to customize the way the random number is selected.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
