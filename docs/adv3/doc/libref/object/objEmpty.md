---
layout: docs
---
<span class="title">objEmpty</span><span class="type">object</span>

[precond.t](../file/precond.t.html)\[[1134](../source/precond.t.html#1134)\]

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



Pre-condition: the object is empty. This ensures that the object does
not contain any other objects.

Note that we unconditionally try to remove all objects. If a container
needs to have some objects that can be removed and others that can't
(such as components within the container), then the container will have
to be implemented as a ComplexContainer - the non-removable components
should be made contents of the enclosing ComplexContainer, and the
secret inner container should be the one subject to this precondition.

**`objEmpty`**` :   `[`PreCondition`](../object/PreCondition.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`objEmpty`**  
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

[precond.t](../file/precond.t.html)\[[1135](../source/precond.t.html#1135)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


