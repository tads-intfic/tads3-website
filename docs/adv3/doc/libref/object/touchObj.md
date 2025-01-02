---
---
<span class="title">touchObj</span><span class="type">object</span>

[precond.t](../file/precond.t.html)\[[690](../source/precond.t.html#690)\]

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

Pre-condition: actor must be able to touch the object. This doesn't
require that the actor is actually holding the object, but the actor
must be able to physically touch the object. This ensures that the actor
and object are not, for example, separated by a transparent barrier.

If there is a transparent barrier, we will attempt to remove the barrier
by calling the barrier object's tryImplicitRemoveObstructor method.
Objects that can be opened in an obvious fashion will perform an
implicit recursive "open" command, and other types of objects can
provide customized behavior as appropriate.

**`touchObj`**` :   `[`TouchObjCondition`](../object/TouchObjCondition.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`touchObj`**  
`         `[`TouchObjCondition`](../object/TouchObjCondition.html)  
`                 `[`PreCondition`](../object/PreCondition.html)  
`                         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`sourceObj`](#sourceObj)`  `

Inherited from `TouchObjCondition` :  
` `[`preCondOrder`](../object/TouchObjCondition.html#preCondOrder)`  `

` `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `

Inherited from `TouchObjCondition` :  
` `[`checkPreCondition`](../object/TouchObjCondition.html#checkPreCondition)`  `[`construct`](../object/TouchObjCondition.html#construct)`  `[`verifyPreCondition`](../object/TouchObjCondition.html#verifyPreCondition)`  `

` `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="sourceObj"></span>

`sourceObj`<span class="rem">OVERRIDDEN</span>

[precond.t](../file/precond.t.html)\[[692](../source/precond.t.html#692)\]

<div class="desc">

we want to test reaching from the current actor to the target object

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

*(none)*

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
