<span class="title">SameLocationCondition</span><span class="type">class</span>

[precond.t](../file/precond.t.html)\[[732](../source/precond.t.html#732)\]

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

A precondition ensuring that the target object is in the same immediate
location as a given object.

`class `**`SameLocationCondition`**` :   `[`PreCondition`](../object/PreCondition.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`SameLocationCondition`**  
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

` `[`sameLocationAsDobj`](../object/sameLocationAsDobj.html)`  `[`sameLocationAsIobj`](../object/sameLocationAsIobj.html)`  `
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`sourceObj`](#sourceObj)`  `

Inherited from `PreCondition` :  
` `[`preCondOrder`](../object/PreCondition.html#preCondOrder)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`checkPreCondition`](#checkPreCondition)`  `[`construct`](#construct)`  `

Inherited from `PreCondition` :  
` `[`verifyPreCondition`](../object/PreCondition.html#verifyPreCondition)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="sourceObj"></span>

`sourceObj`

[precond.t](../file/precond.t.html)\[[740](../source/precond.t.html#740)\]

<div class="desc">

the object whose location we must match

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="checkPreCondition"></span>

`checkPreCondition (obj, allowImplicit)`<span class="rem">OVERRIDDEN</span>

[precond.t](../file/precond.t.html)\[[743](../source/precond.t.html#743)\]

<div class="desc">

check the condition

</div>

<span id="construct"></span>

`construct (obj)`

[precond.t](../file/precond.t.html)\[[737](../source/precond.t.html#737)\]

<div class="desc">

construct dynamically, setting the other object whose location we must
match

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
