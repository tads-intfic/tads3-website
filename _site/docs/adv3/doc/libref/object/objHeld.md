<span class="title">objHeld</span><span class="type">object</span>

[precond.t](../file/precond.t.html)\[[367](../source/precond.t.html#367)\]

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

Pre-condition: object must be held. This condition requires that an
object of a command must be held by the actor. If it is not, we will
attempt a recursive "take" command on the object.

This condition is useful for commands where the object is to be
manipulated in some way, or used to manipulate some other object. For
example, the key in "unlock door with key" would normally have to be
held.

**`objHeld`**` :   `[`PreCondition`](../object/PreCondition.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`objHeld`**  
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

[precond.t](../file/precond.t.html)\[[368](../source/precond.t.html#368)\]

<div class="desc">

*no description available*

</div>

<span id="verifyPreCondition"></span>

`verifyPreCondition (obj)`<span class="rem">OVERRIDDEN</span>

[precond.t](../file/precond.t.html)\[[401](../source/precond.t.html#401)\]

<div class="desc">

lower the likelihood rating for anything not being held

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
