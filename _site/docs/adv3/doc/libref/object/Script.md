<span class="title">Script</span><span class="type">class</span>

[misc.t](../file/misc.t.html)\[[857](../source/misc.t.html#857)\]

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

Generic script object. This class can be used to implement a simple
state machine.

`class `**`Script`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Script`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`Script`**  
`         `[`EventList`](../object/EventList.html)  
`                 `[`CyclicEventList`](../object/CyclicEventList.html)  
`                 `[`ExternalEventList`](../object/ExternalEventList.html)  
`                 `[`RandomEventList`](../object/RandomEventList.html)  
`                 `[`ShuffledEventList`](../object/ShuffledEventList.html)  
`                 `[`StopEventList`](../object/StopEventList.html)  
`                 `[`SyncEventList`](../object/SyncEventList.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`curScriptState`](#curScriptState)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`doScript`](#doScript)`  `[`getScriptState`](#getScriptState)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="curScriptState"></span>

`curScriptState`

[misc.t](../file/misc.t.html)\[[889](../source/misc.t.html#889)\]

<div class="desc">

Property giving our current state. This should never be used directly;
instead, getScriptState() should always be used, since getScriptState()
can be overridden so that the state depends on something other than this
internal state property. The meaning of the state identifier is specific
to each subclass.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="doScript"></span>

`doScript ( )`

[misc.t](../file/misc.t.html)\[[877](../source/misc.t.html#877)\]

<div class="desc">

Process the next step of the script. This routine must be overridden to
perform the action of the script. This routine's action should call
getScriptState() to get our current state, and should update the
internal state appropriately to take us to the next step after the
current one.

By default, we don't do anything at all.

</div>

<span id="getScriptState"></span>

`getScriptState ( )`

[misc.t](../file/misc.t.html)\[[862](../source/misc.t.html#862)\]

<div class="desc">

Get the current state. This returns a value that gives the current state
of the script, which is usually simply an integer.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
