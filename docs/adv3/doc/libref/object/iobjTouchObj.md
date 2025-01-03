---
layout: docs
---
<span class="title">iobjTouchObj</span><span class="type">object</span>

[precond.t](../file/precond.t.html)\[[711](../source/precond.t.html#711)\]

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



Pre-condition: the indirect object must be able to touch the target
object. This can be used for actions where the direct object is going to
be manipulated by an "agent" of the action (i.e., the indirect object),
rather than directly by the actor: MOVE X WITH Y, for example.

Note that the target object of this condition should be the direct
object in most cases, so this condition should usually be used like
this:

dobjFor(MoveWith) { preCond = \[iobjTouchObj\] }

In other words, this is a precondition that we apply in most cases to
the \*direct\* object.

**`iobjTouchObj`**` :   `[`TouchObjCondition`](../object/TouchObjCondition.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`iobjTouchObj`**  
[`TouchObjCondition`](../object/TouchObjCondition.html)  
[`PreCondition`](../object/PreCondition.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`sourceObj`](#sourceObj)

Inherited from `TouchObjCondition` :  
[`preCondOrder`](../object/TouchObjCondition.html#preCondOrder)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  
Inherited from `TouchObjCondition` :  
[`checkPreCondition`](../object/TouchObjCondition.html#checkPreCondition) [`construct`](../object/TouchObjCondition.html#construct) [`verifyPreCondition`](../object/TouchObjCondition.html#verifyPreCondition)



<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="sourceObj"></span>

`sourceObj`<span class="rem">OVERRIDDEN</span>

[precond.t](../file/precond.t.html)\[[713](../source/precond.t.html#713)\]



the indirect object has to be able to touch the target object



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


