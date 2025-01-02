---
layout: docs
---
<span class="title">ExternalEventList</span><span class="type">class</span>

[misc.t](../file/misc.t.html)\[[1117](../source/misc.t.html#1117)\]

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



An "external" event list is one whose state is driven externally to the
script. Specifically, the state is \*not\* advanced by invoking the
script; the state is advanced exclusively by some external process (for
example, by a daemon that invokes the event list's advanceState()
method).

`class `**`ExternalEventList`**` :   `[`EventList`](../object/EventList.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ExternalEventList`**  
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
[`curScriptState`](../object/EventList.html#curScriptState)[`eventList`](../object/EventList.html#eventList)[`eventListLen`](../object/EventList.html#eventListLen)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`scriptDone`](#scriptDone)

Inherited from `EventList` :  
[`advanceState`](../object/EventList.html#advanceState)[`construct`](../object/EventList.html#construct)[`doScript`](../object/EventList.html#doScript)[`doScriptEvent`](../object/EventList.html#doScriptEvent)

Inherited from `Script` :  
[`getScriptState`](../object/Script.html#getScriptState)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="scriptDone"></span>

`scriptDone ( )`<span class="rem">OVERRIDDEN</span>

[misc.t](../file/misc.t.html)\[[1118](../source/misc.t.html#1118)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


