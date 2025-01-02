---
layout: docs
---
<span class="title">touchObj</span><span class="type">object</span>

[precond.t](../file/precond.t.html)\[[607](../source/precond.t.html#607)\]

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

A PreCondition to check that an object can be touched (which is likely
to be needed for any action that manipulated the object). This
Precondition farms out as much of the detailed checking as possible to
the Query object.

**`touchObj`**` :   `[`PreCondition`](../object/PreCondition.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`touchObj`**  
[`PreCondition`](../object/PreCondition.html)  
`                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`preCondOrder`](#preCondOrder)



<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`checkPreCondition`](#checkPreCondition)[`verifyPreCondition`](#verifyPreCondition)



<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="preCondOrder"></span>

`preCondOrder`<span class="rem">OVERRIDDEN</span>

[precond.t](../file/precond.t.html)\[[650](../source/precond.t.html#650)\]

<div class="desc">

If we reach here we've passed all the checks, so return true to indicate
success.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="checkPreCondition"></span>

`checkPreCondition (obj, allowImplicit)`<span class="rem">OVERRIDDEN</span>

[precond.t](../file/precond.t.html)\[[623](../source/precond.t.html#623)\],
[senseRegion.t](../file/senseRegion.t.html)\[[1735](../source/senseRegion.t.html#1735)\]

<div class="desc">

Run the verify method of any issues we found

</div>

<span id="verifyPreCondition"></span>

`verifyPreCondition (obj)`<span class="rem">OVERRIDDEN</span>

[precond.t](../file/precond.t.html)\[[608](../source/precond.t.html#608)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
