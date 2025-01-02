---
layout: docs
---
<span class="title">objSmellable</span><span class="type">object</span>

[precond.t](../file/precond.t.html)\[[183](../source/precond.t.html#183)\]

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



Pre-condition: object must be within smelling range of the actor. This
condition doesn't attempt any implied command to make the object
smellable, but merely enforces the condition before allowing the
command.

It is possible for an object to be in scope without being smellable,
since an object can be inside a container that is transparent to light
but blocks all odors.

We enforce this condition with a verification test.

**`objSmellable`**` :   `[`PreCondition`](../object/PreCondition.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`objSmellable`**  
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

[precond.t](../file/precond.t.html)\[[184](../source/precond.t.html#184)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


