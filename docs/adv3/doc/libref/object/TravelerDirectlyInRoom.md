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



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`TravelerDirectlyInRoom`**  
[`PreCondition`](../object/PreCondition.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`actor_`](#actor_) [`conn_`](#conn_) [`loc_`](#loc_)

Inherited from `PreCondition` :  
[`preCondOrder`](../object/PreCondition.html#preCondOrder)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`checkPreCondition`](#checkPreCondition) [`construct`](#construct)

Inherited from `PreCondition` :  
[`verifyPreCondition`](../object/PreCondition.html#verifyPreCondition)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="actor_"></span>

`actor_`

[precond.t](../file/precond.t.html)\[[294](../source/precond.t.html#294)\]



the actor doing the travel



<span id="conn_"></span>

`conn_`

[precond.t](../file/precond.t.html)\[[297](../source/precond.t.html#297)\]



the connector being traversed



<span id="loc_"></span>

`loc_`

[precond.t](../file/precond.t.html)\[[300](../source/precond.t.html#300)\]



the room we need to be directly in



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="checkPreCondition"></span>

`checkPreCondition (obj, allowImplicit)`<span class="rem">OVERRIDDEN</span>

[precond.t](../file/precond.t.html)\[[286](../source/precond.t.html#286)\]



remember the actor, connector, and room



<span id="construct"></span>

`construct (actor, conn, loc)`

[precond.t](../file/precond.t.html)\[[278](../source/precond.t.html#278)\]



*no description available*
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


