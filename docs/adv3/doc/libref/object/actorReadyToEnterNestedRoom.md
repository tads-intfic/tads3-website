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



Pre-condition: actor is ready to enter a nested location. This is useful
for commands that cause travel within a location, such as "sit on
chair": this ensures that the actor is either already in the given
nested location, or is in the main location; and that the actor is
standing. We simply call the actor to do the work.

**`actorReadyToEnterNestedRoom`**` :   `[`PreCondition`](../object/PreCondition.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`actorReadyToEnterNestedRoom`**  
[`PreCondition`](../object/PreCondition.html)  
`                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
Inherited from `PreCondition` :  
[`preCondOrder`](../object/PreCondition.html#preCondOrder)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`checkPreCondition`](#checkPreCondition)

Inherited from `PreCondition` :  
[`verifyPreCondition`](../object/PreCondition.html#verifyPreCondition)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="checkPreCondition"></span>

`checkPreCondition (obj, allowImplicit)`<span class="rem">OVERRIDDEN</span>

[precond.t](../file/precond.t.html)\[[325](../source/precond.t.html#325)\]



*no description available*
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


