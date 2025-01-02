---
layout: docs
---
<span class="title">TravelerDirectlyInRoom</span><span class="type">class</span>

[precond.t](../file/precond.t.html)\[[277](../source/precond.t.html#277)\]

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

Pre-condition: the traveler is directly in the given room. This will
attempt to remove the traveler from any nested rooms within the given
room, but cannot perform travel between rooms not related by
containment.

Note that the traveler is not necessarily the actor, because the actor
could be in a vehicle.

This is a class, because it has to be instantiated with more parameters
than just a single 'obj' passed by default when evaluating
preconditions. In particular, we need to know the actor performing the
travel, the connector being traversed, and the room we need to be
directly in.

`class `**`TravelerDirectlyInRoom`**` :   `[`PreCondition`](../object/PreCondition.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`TravelerDirectlyInRoom`**  
`         `[`PreCondition`](../object/PreCondition.html)  
`                 object`  
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

` `[`actor_`](#actor_)`  `[`conn_`](#conn_)`  `[`loc_`](#loc_)`  `

Inherited from `PreCondition` :  
` `[`preCondOrder`](../object/PreCondition.html#preCondOrder)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`checkPreCondition`](#checkPreCondition)`  `[`construct`](#construct)`  `

Inherited from `PreCondition` :  
` `[`verifyPreCondition`](../object/PreCondition.html#verifyPreCondition)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="actor_"></span>

`actor_`

[precond.t](../file/precond.t.html)\[[294](../source/precond.t.html#294)\]

<div class="desc">

the actor doing the travel

</div>

<span id="conn_"></span>

`conn_`

[precond.t](../file/precond.t.html)\[[297](../source/precond.t.html#297)\]

<div class="desc">

the connector being traversed

</div>

<span id="loc_"></span>

`loc_`

[precond.t](../file/precond.t.html)\[[300](../source/precond.t.html#300)\]

<div class="desc">

the room we need to be directly in

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="checkPreCondition"></span>

`checkPreCondition (obj, allowImplicit)`<span class="rem">OVERRIDDEN</span>

[precond.t](../file/precond.t.html)\[[286](../source/precond.t.html#286)\]

<div class="desc">

remember the actor, connector, and room

</div>

<span id="construct"></span>

`construct (actor, conn, loc)`

[precond.t](../file/precond.t.html)\[[278](../source/precond.t.html#278)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
