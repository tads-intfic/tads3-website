---
---
<span class="title">objNotAttached</span><span class="type">object</span>

[extras.t](../file/extras.t.html)\[[3261](../source/extras.t.html#3261)\]

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

An Attachable-specific precondition: the Attachable isn't already
attached to something else. This can be added to the preCond list for an
Attachable (for iobjFor(AttachTo) and dobjFor(AttachTo)) to ensure that
any existing attachment is removed before a new attachment is formed.
This is useful when the Attachable can connect to only one thing at a
time.

**`objNotAttached`**` :   `[`PreCondition`](../object/PreCondition.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`objNotAttached`**  
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

` `[`checkPreCondition`](#checkPreCondition)`  `

Inherited from `PreCondition` :  
` `[`verifyPreCondition`](../object/PreCondition.html#verifyPreCondition)`  `

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

[extras.t](../file/extras.t.html)\[[3262](../source/extras.t.html#3262)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
