---
---
<span class="title">ObjectPreCondition</span><span class="type">class</span>

[precond.t](../file/precond.t.html)\[[75](../source/precond.t.html#75)\]

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

A pre-condition that applies to a specific, pre-determined object,
rather than the direct/indirect object of the command.

`class `**`ObjectPreCondition`**` :   `[`PreCondition`](../object/PreCondition.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ObjectPreCondition`**  
`         `[`PreCondition`](../object/PreCondition.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`cond_`](#cond_)`  `[`obj_`](#obj_)`  `[`preCondOrder`](#preCondOrder)`  `

` `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`checkPreCondition`](#checkPreCondition)`  `[`construct`](#construct)`  `[`verifyPreCondition`](#verifyPreCondition)`  `

` `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="cond_"></span>

`cond_`

[precond.t](../file/precond.t.html)\[[106](../source/precond.t.html#106)\]

<div class="desc">

the pre-condition we check

</div>

<span id="obj_"></span>

`obj_`

[precond.t](../file/precond.t.html)\[[103](../source/precond.t.html#103)\]

<div class="desc">

the object we check with the condition

</div>

<span id="preCondOrder"></span>

`preCondOrder`<span class="rem">OVERRIDDEN</span>

[precond.t](../file/precond.t.html)\[[100](../source/precond.t.html#100)\]

<div class="desc">

use the same order as our underlying condition

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="checkPreCondition"></span>

`checkPreCondition (obj, allowImplicit)`<span class="rem">OVERRIDDEN</span>

[precond.t](../file/precond.t.html)\[[87](../source/precond.t.html#87)\]

<div class="desc">

route our check to the pre-condition using our specific object

</div>

<span id="construct"></span>

`construct (obj, cond)`

[precond.t](../file/precond.t.html)\[[76](../source/precond.t.html#76)\]

<div class="desc">

*no description available*

</div>

<span id="verifyPreCondition"></span>

`verifyPreCondition (obj)`<span class="rem">OVERRIDDEN</span>

[precond.t](../file/precond.t.html)\[[94](../source/precond.t.html#94)\]

<div class="desc">

route our verification check to the pre-condition

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
