---
layout: docs
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



Equivalent group state information. This keeps track of a state and the
number of items in that state when we're listing a group of equivalent
items in different states.

`class `**`EquivalentStateInfo`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`EquivalentStateInfo`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`stateNameProp`](#stateNameProp) [`stateObj`](#stateObj) [`stateVec`](#stateVec)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`addEquivObj`](#addEquivObj) [`construct`](#construct) [`getEquivCount`](#getEquivCount) [`getEquivList`](#getEquivList) [`getName`](#getName)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="stateNameProp"></span>

`stateNameProp`

[thing.t](../file/thing.t.html)\[[255](../source/thing.t.html#255)\]



the property to evaluate to get the name for listing purposes



<span id="stateObj"></span>

`stateObj`

[thing.t](../file/thing.t.html)\[[252](../source/thing.t.html#252)\]



the ThingState object describing the state



<span id="stateVec"></span>

`stateVec`

[thing.t](../file/thing.t.html)\[[258](../source/thing.t.html#258)\]



list of items in this same state



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="addEquivObj"></span>

`addEquivObj (obj)`

[thing.t](../file/thing.t.html)\[[240](../source/thing.t.html#240)\]



add an object to the list of equivalent objects in this state



<span id="construct"></span>

`construct (st, obj, nameProp)`

[thing.t](../file/thing.t.html)\[[228](../source/thing.t.html#228)\]



*no description available*



<span id="getEquivCount"></span>

`getEquivCount ( )`

[thing.t](../file/thing.t.html)\[[243](../source/thing.t.html#243)\]



get the number of equivalent items in the same state



<span id="getEquivList"></span>

`getEquivList ( )`

[thing.t](../file/thing.t.html)\[[246](../source/thing.t.html#246)\]



get the list of equivalent items in the same state



<span id="getName"></span>

`getName ( )`

[thing.t](../file/thing.t.html)\[[249](../source/thing.t.html#249)\]



get the name to use for listing purposes
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


