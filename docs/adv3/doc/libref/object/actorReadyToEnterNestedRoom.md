---
layout: docs
---
<span class="title">actorReadyToEnterNestedRoom</span><span class="type">object</span>

[precond.t](../file/precond.t.html)\[[324](../source/precond.t.html#324)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)

<div class="fdesc">

Pre-condition: actor is ready to enter a nested location. This is useful
for commands that cause travel within a location, such as "sit on
chair": this ensures that the actor is either already in the given
nested location, or is in the main location; and that the actor is
standing. We simply call the actor to do the work.

**`actorReadyToEnterNestedRoom`**` :   `[`PreCondition`](../object/PreCondition.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`actorReadyToEnterNestedRoom`**  
[`PreCondition`](../object/PreCondition.html)  
`                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>



Inherited from `PreCondition` :  
[`preCondOrder`](../object/PreCondition.html#preCondOrder)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`checkPreCondition`](#checkPreCondition)

Inherited from `PreCondition` :  
[`verifyPreCondition`](../object/PreCondition.html#verifyPreCondition)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="checkPreCondition"></span>

`checkPreCondition (obj, allowImplicit)`<span class="rem">OVERRIDDEN</span>

[precond.t](../file/precond.t.html)\[[325](../source/precond.t.html#325)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
