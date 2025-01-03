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



Pre-condition: the object is open.

`class `**`ObjOpenCondition`**` :   `[`PreCondition`](../object/PreCondition.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ObjOpenCondition`**  
[`PreCondition`](../object/PreCondition.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`doorOpen`](../object/doorOpen.html) [`objOpen`](../object/objOpen.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
Inherited from `PreCondition` :  
[`preCondOrder`](../object/PreCondition.html#preCondOrder)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`checkPreCondition`](#checkPreCondition) [`conditionFailed`](#conditionFailed) [`verifyPreCondition`](#verifyPreCondition)



<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="checkPreCondition"></span>

`checkPreCondition (obj, allowImplicit)`<span class="rem">OVERRIDDEN</span>

[precond.t](../file/precond.t.html)\[[871](../source/precond.t.html#871)\]



*no description available*



<span id="conditionFailed"></span>

`conditionFailed (obj)`

[precond.t](../file/precond.t.html)\[[901](../source/precond.t.html#901)\]



The condition failed - report the failure and give up. We separate this
to allow subclasses to report failure differently for specialized types
of opening.



<span id="verifyPreCondition"></span>

`verifyPreCondition (obj)`<span class="rem">OVERRIDDEN</span>

[precond.t](../file/precond.t.html)\[[911](../source/precond.t.html#911)\]



reduce the likelihood rating for anything that isn't already open
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


