---
layout: docs
---
<span class="title">ObjOpenCondition</span><span class="type">class</span>

[precond.t](../file/precond.t.html)\[[870](../source/precond.t.html#870)\]

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

Pre-condition: the object is open.

`class `**`ObjOpenCondition`**` :   `[`PreCondition`](../object/PreCondition.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ObjOpenCondition`**  
[`PreCondition`](../object/PreCondition.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

[`doorOpen`](../object/doorOpen.html)[`objOpen`](../object/objOpen.html)
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

[`checkPreCondition`](#checkPreCondition)[`conditionFailed`](#conditionFailed)[`verifyPreCondition`](#verifyPreCondition)



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

[precond.t](../file/precond.t.html)\[[871](../source/precond.t.html#871)\]

<div class="desc">

*no description available*

</div>

<span id="conditionFailed"></span>

`conditionFailed (obj)`

[precond.t](../file/precond.t.html)\[[901](../source/precond.t.html#901)\]

<div class="desc">

The condition failed - report the failure and give up. We separate this
to allow subclasses to report failure differently for specialized types
of opening.

</div>

<span id="verifyPreCondition"></span>

`verifyPreCondition (obj)`<span class="rem">OVERRIDDEN</span>

[precond.t](../file/precond.t.html)\[[911](../source/precond.t.html#911)\]

<div class="desc">

reduce the likelihood rating for anything that isn't already open

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
