<span class="title">ExternalEventList</span><span class="type">class</span>

[eventList.t](../file/eventList.t.html)\[[249](../source/eventList.t.html#249)\]

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

An "external" event list is one whose state is driven externally to the
script. Specifically, the state is \*not\* advanced by invoking the
script; the state is advanced exclusively by some external process (for
example, by a daemon that invokes the event list's advanceState()
method).

`class `**`ExternalEventList`**` :   `[`EventList`](../object/EventList.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ExternalEventList`**  
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

` `

Inherited from `EventList` :  
` `[`curScriptState`](../object/EventList.html#curScriptState)`  `[`eventList`](../object/EventList.html#eventList)`  `[`eventListLen`](../object/EventList.html#eventListLen)`  `[`resetEachCycle`](../object/EventList.html#resetEachCycle)`  `

` `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`scriptDone`](#scriptDone)`  `

Inherited from `EventList` :  
` `[`addItem`](../object/EventList.html#addItem)`  `[`advanceState`](../object/EventList.html#advanceState)`  `[`construct`](../object/EventList.html#construct)`  `[`doScript`](../object/EventList.html#doScript)`  `[`doScriptEvent`](../object/EventList.html#doScriptEvent)`  `[`resetList`](../object/EventList.html#resetList)`  `

Inherited from `Script` :  
` `[`getScriptState`](../object/Script.html#getScriptState)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="scriptDone"></span>

`scriptDone ( )`<span class="rem">OVERRIDDEN</span>

[eventList.t](../file/eventList.t.html)\[[250](../source/eventList.t.html#250)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
