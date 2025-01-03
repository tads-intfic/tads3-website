---
layout: docs
---
<span class="title">TouchObjCondition</span><span class="type">class</span>

[precond.t](../file/precond.t.html)\[[419](../source/precond.t.html#419)\]

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



Pre-condition: a given source object must be able to touch the object.
This requires that the source object (given by our property 'sourceObj')
has a clear 'touch' path to the target object.

This is a base class for arbitrary object-to-object touch conditions. In
most cases, you'll want to use the more specific touchObj, which tests
that the current actor can touch the current object.

`class `**`TouchObjCondition`**` :   `[`PreCondition`](../object/PreCondition.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`TouchObjCondition`**  
[`PreCondition`](../object/PreCondition.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`dobjTouchObj`](../object/dobjTouchObj.html) [`iobjTouchObj`](../object/iobjTouchObj.html) [`touchObj`](../object/touchObj.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`preCondOrder`](#preCondOrder) [`sourceObj`](#sourceObj)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`checkPreCondition`](#checkPreCondition) [`construct`](#construct) [`verifyPreCondition`](#verifyPreCondition)



<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="preCondOrder"></span>

`preCondOrder`<span class="rem">OVERRIDDEN</span>

[precond.t](../file/precond.t.html)\[[673](../source/precond.t.html#673)\]



This condition tends to be fragile, in the sense that other
preconditions for the same action have the potential to undo any
implicit action that we perform to make an object touchable. This is
most likely to happen when we implicitly move the actor (moving in or
out of a nested room, for example) to put the actor within reach of the
target object. To reduce the likelihood that this fragility will be
visible to a player, try to execute this condition after other
conditions. Most other preconditions tend to be "stickier" - less likely
to be undone by subsequent preconditions.



<span id="sourceObj"></span>

`sourceObj`

[precond.t](../file/precond.t.html)\[[427](../source/precond.t.html#427)\]



the source object - this is the object that is attempting to touch the
target object



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="checkPreCondition"></span>

`checkPreCondition (obj, allowImplicit)`<span class="rem">OVERRIDDEN</span>

[precond.t](../file/precond.t.html)\[[430](../source/precond.t.html#430)\]



check the condition



<span id="construct"></span>

`construct (src)`

[precond.t](../file/precond.t.html)\[[421](../source/precond.t.html#421)\]



construct with a given source object



<span id="verifyPreCondition"></span>

`verifyPreCondition (obj)`<span class="rem">OVERRIDDEN</span>

[precond.t](../file/precond.t.html)\[[565](../source/precond.t.html#565)\]



We've tried an implied command to remove this obstructor, but that isn't
guaranteed to make the target touchable, as there could be further
obstrutions, or the implied command could have failed to actually remove
the obstruction. Keep iterating. To avoid looping forever in the event
the implicit command we just tried isn't good enough to remove this
obstruction, make a note of the obstruction we just tried to remove; if
we find it again on a subsequent iteration, we'll know that we've tried
before to remove it and failed, and thus we'll know to give up without
making the same doomed attempt again.
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


