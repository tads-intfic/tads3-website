---
---
<span class="title">EquivalentStateInfo</span><span class="type">class</span>

[thing.t](../file/thing.t.html)\[[227](../source/thing.t.html#227)\]

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

Equivalent group state information. This keeps track of a state and the
number of items in that state when we're listing a group of equivalent
items in different states.

`class `**`EquivalentStateInfo`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`EquivalentStateInfo`**  
`         object`  
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

` `[`stateNameProp`](#stateNameProp)`  `[`stateObj`](#stateObj)`  `[`stateVec`](#stateVec)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`addEquivObj`](#addEquivObj)`  `[`construct`](#construct)`  `[`getEquivCount`](#getEquivCount)`  `[`getEquivList`](#getEquivList)`  `[`getName`](#getName)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="stateNameProp"></span>

`stateNameProp`

[thing.t](../file/thing.t.html)\[[255](../source/thing.t.html#255)\]

<div class="desc">

the property to evaluate to get the name for listing purposes

</div>

<span id="stateObj"></span>

`stateObj`

[thing.t](../file/thing.t.html)\[[252](../source/thing.t.html#252)\]

<div class="desc">

the ThingState object describing the state

</div>

<span id="stateVec"></span>

`stateVec`

[thing.t](../file/thing.t.html)\[[258](../source/thing.t.html#258)\]

<div class="desc">

list of items in this same state

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="addEquivObj"></span>

`addEquivObj (obj)`

[thing.t](../file/thing.t.html)\[[240](../source/thing.t.html#240)\]

<div class="desc">

add an object to the list of equivalent objects in this state

</div>

<span id="construct"></span>

`construct (st, obj, nameProp)`

[thing.t](../file/thing.t.html)\[[228](../source/thing.t.html#228)\]

<div class="desc">

*no description available*

</div>

<span id="getEquivCount"></span>

`getEquivCount ( )`

[thing.t](../file/thing.t.html)\[[243](../source/thing.t.html#243)\]

<div class="desc">

get the number of equivalent items in the same state

</div>

<span id="getEquivList"></span>

`getEquivList ( )`

[thing.t](../file/thing.t.html)\[[246](../source/thing.t.html#246)\]

<div class="desc">

get the list of equivalent items in the same state

</div>

<span id="getName"></span>

`getName ( )`

[thing.t](../file/thing.t.html)\[[249](../source/thing.t.html#249)\]

<div class="desc">

get the name to use for listing purposes

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
