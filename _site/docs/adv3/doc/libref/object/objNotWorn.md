<span class="title">objNotWorn</span><span class="type">object</span>

[precond.t](../file/precond.t.html)\[[826](../source/precond.t.html#826)\]

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

Pre-condition: the actor must not be wearing the object. If the actor is
currently wearing the object, we'll try asking the actor to doff the
object.

Note that this pre-condition never needs to be combined with objHeld,
because an object being worn is not considered to be held, and Wearable
implicitly doffs an article when it must be held.

**`objNotWorn`**` :   `[`PreCondition`](../object/PreCondition.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`objNotWorn`**  
`         `[`PreCondition`](../object/PreCondition.html)  
`                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

Inherited from `PreCondition` :  
` `[`preCondOrder`](../object/PreCondition.html#preCondOrder)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`checkPreCondition`](#checkPreCondition)`  `[`verifyPreCondition`](#verifyPreCondition)`  `

` `

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

[precond.t](../file/precond.t.html)\[[827](../source/precond.t.html#827)\]

<div class="desc">

*no description available*

</div>

<span id="verifyPreCondition"></span>

`verifyPreCondition (obj)`<span class="rem">OVERRIDDEN</span>

[precond.t](../file/precond.t.html)\[[858](../source/precond.t.html#858)\]

<div class="desc">

lower the likelihood rating for anything being worn

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>