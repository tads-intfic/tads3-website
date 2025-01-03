---
layout: docs
---
<span class="title">ObjectPreCondition</span><span class="type">class</span>

[precond.t](../file/precond.t.html)\[[731](../source/precond.t.html#731)\]

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



A pre-condition that applies to a specific, pre-determined object,
rather than the direct/indirect object of the command.

`class `**`ObjectPreCondition`**` :   `[`PreCondition`](../object/PreCondition.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ObjectPreCondition`**  
[`PreCondition`](../object/PreCondition.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`cond_`](#cond_) [`obj_`](#obj_) [`preCondOrder`](#preCondOrder)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`checkPreCondition`](#checkPreCondition) [`construct`](#construct) [`verifyPreCondition`](#verifyPreCondition)



<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="cond_"></span>

`cond_`

[precond.t](../file/precond.t.html)\[[762](../source/precond.t.html#762)\]



the pre-condition we check



<span id="obj_"></span>

`obj_`

[precond.t](../file/precond.t.html)\[[759](../source/precond.t.html#759)\]



the object we check with the condition



<span id="preCondOrder"></span>

`preCondOrder`<span class="rem">OVERRIDDEN</span>

[precond.t](../file/precond.t.html)\[[756](../source/precond.t.html#756)\]



use the same order as our underlying condition



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="checkPreCondition"></span>

`checkPreCondition (obj, allowImplicit)`<span class="rem">OVERRIDDEN</span>

[precond.t](../file/precond.t.html)\[[743](../source/precond.t.html#743)\]



route our check to the pre-condition using our specific object



<span id="construct"></span>

`construct (obj, cond)`

[precond.t](../file/precond.t.html)\[[732](../source/precond.t.html#732)\]



*no description available*



<span id="verifyPreCondition"></span>

`verifyPreCondition (obj)`<span class="rem">OVERRIDDEN</span>

[precond.t](../file/precond.t.html)\[[750](../source/precond.t.html#750)\]



route our verification check to the pre-condition
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


