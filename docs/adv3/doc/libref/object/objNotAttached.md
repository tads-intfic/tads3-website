---
layout: docs
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



An Attachable-specific precondition: the Attachable isn't already
attached to something else. This can be added to the preCond list for an
Attachable (for iobjFor(AttachTo) and dobjFor(AttachTo)) to ensure that
any existing attachment is removed before a new attachment is formed.
This is useful when the Attachable can connect to only one thing at a
time.

**`objNotAttached`**` :   `[`PreCondition`](../object/PreCondition.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`objNotAttached`**  
[`PreCondition`](../object/PreCondition.html)  
`                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





Inherited from `PreCondition` :  
[`preCondOrder`](../object/PreCondition.html#preCondOrder)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`checkPreCondition`](#checkPreCondition)

Inherited from `PreCondition` :  
[`verifyPreCondition`](../object/PreCondition.html#verifyPreCondition)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="checkPreCondition"></span>

`checkPreCondition (obj, allowImplicit)`<span class="rem">OVERRIDDEN</span>

[extras.t](../file/extras.t.html)\[[3262](../source/extras.t.html#3262)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


