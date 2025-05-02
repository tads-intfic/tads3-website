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



A PreCondition to check that an object can be touched (which is likely
to be needed for any action that manipulated the object). This
Precondition farms out as much of the detailed checking as possible to
the Query object.

**`touchObj`**` :   `[`PreCondition`](../object/PreCondition.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`touchObj`**  
[`PreCondition`](../object/PreCondition.html)  
`                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`preCondOrder`](#preCondOrder)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`checkPreCondition`](#checkPreCondition) [`verifyPreCondition`](#verifyPreCondition)



<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="preCondOrder"></span>

`preCondOrder`<span class="rem">OVERRIDDEN</span>

[precond.t](../file/precond.t.html)\[[650](../source/precond.t.html#650)\]



If we reach here we've passed all the checks, so return true to indicate
success.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="checkPreCondition"></span>

`checkPreCondition (obj, allowImplicit)`<span class="rem">OVERRIDDEN</span>

[precond.t](../file/precond.t.html)\[[623](../source/precond.t.html#623)\],
[senseRegion.t](../file/senseRegion.t.html)\[[1735](../source/senseRegion.t.html#1735)\]



Run the verify method of any issues we found



<span id="verifyPreCondition"></span>

`verifyPreCondition (obj)`<span class="rem">OVERRIDDEN</span>

[precond.t](../file/precond.t.html)\[[608](../source/precond.t.html#608)\]



*no description available*





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


