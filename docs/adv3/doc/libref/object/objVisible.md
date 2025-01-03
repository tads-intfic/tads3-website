---
layout: docs
---
<span class="title">objVisible</span><span class="type">object</span>

[precond.t](../file/precond.t.html)\[[124](../source/precond.t.html#124)\]

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



Pre-condition: object must be visible. This condition doesn't attempt
any implied command to make the object visible, but merely enforces
visibility before allowing the command.

This condition is useful for commands that rely on visibly inspecting
the object, such as "examine" or "look in". It is possible for an object
to be in scope without being visible, since an object can be in scope by
way of a non-visual sense.

We enforce visibility with a verification test, not a precondition
check.

**`objVisible`**` :   `[`PreCondition`](../object/PreCondition.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`objVisible`**  
[`PreCondition`](../object/PreCondition.html)  
`                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
Inherited from `PreCondition` :  
[`preCondOrder`](../object/PreCondition.html#preCondOrder)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`verifyPreCondition`](#verifyPreCondition)

Inherited from `PreCondition` :  
[`checkPreCondition`](../object/PreCondition.html#checkPreCondition)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="verifyPreCondition"></span>

`verifyPreCondition (obj)`<span class="rem">OVERRIDDEN</span>

[precond.t](../file/precond.t.html)\[[125](../source/precond.t.html#125)\]



*no description available*
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


