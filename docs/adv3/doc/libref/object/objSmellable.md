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

<div class="fdesc">

Pre-condition: object must be within smelling range of the actor. This
condition doesn't attempt any implied command to make the object
smellable, but merely enforces the condition before allowing the
command.

It is possible for an object to be in scope without being smellable,
since an object can be inside a container that is transparent to light
but blocks all odors.

We enforce this condition with a verification test.

**`objSmellable`**` :   `[`PreCondition`](../object/PreCondition.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`objSmellable`**  
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

[`verifyPreCondition`](#verifyPreCondition)

Inherited from `PreCondition` :  
[`checkPreCondition`](../object/PreCondition.html#checkPreCondition)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="verifyPreCondition"></span>

`verifyPreCondition (obj)`<span class="rem">OVERRIDDEN</span>

[precond.t](../file/precond.t.html)\[[184](../source/precond.t.html#184)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
