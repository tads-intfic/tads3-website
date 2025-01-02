---
layout: docs
---
<span class="title">ReachProblem</span><span class="type">class</span>

[query.t](../file/query.t.html)\[[1055](../source/query.t.html#1055)\]

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

An object describing a reach problem; such objects are used by the Query
object to communicate problems with one object touching another to the
touchObj PreCondition (see also precond.t). ReachProblem objects are
normally created dynamicallty as required, although it is usually one of
the subclasses of ReachProblem that it used.

`class `**`ReachProblem`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ReachProblem`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`ReachProblem`**  
`         `[`ReachProblemBlocker`](../object/ReachProblemBlocker.html)  
`         `[`ReachProblemCheckReach`](../object/ReachProblemCheckReach.html)  
`         `[`ReachProblemDistance`](../object/ReachProblemDistance.html)  
`         `[`ReachProblemReachOut`](../object/ReachProblemReachOut.html)  
`         `[`ReachProblemRemote`](../object/ReachProblemRemote.html)  
`         `[`ReachProblemVerifyReach`](../object/ReachProblemVerifyReach.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`target_`](#target_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`check`](#check)`  `[`construct`](#construct)`  `[`verify`](#verify)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="target_"></span>

`target_`

[query.t](../file/query.t.html)\[[1083](../source/query.t.html#1083)\]

<div class="desc">

The object we're trying to reach

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="check"></span>

`check (allowImplicit)`

[query.t](../file/query.t.html)\[[1075](../source/query.t.html#1075)\]

<div class="desc">

The check() method of a ReachProblem should check whether the target
object can be reached by the source object. If allowImplicit is true the
check method may attempt an implicit action to bring the target object
within reach.

Return true if the target object is within reach, and nil otherwise.

Note that the check() method of a ReachProblem will normally be called
from the checkPreCondition() method of touchObj.

</div>

<span id="construct"></span>

`construct (target)`

[query.t](../file/query.t.html)\[[1077](../source/query.t.html#1077)\]

<div class="desc">

*no description available*

</div>

<span id="verify"></span>

`verify ( )`

[query.t](../file/query.t.html)\[[1062](../source/query.t.html#1062)\]

<div class="desc">

Problems which reaching an object that occur at the verify stage and
which might affect the choice of object. If the verify() method of a
ReachProblem object wishes to rule out an action it should do so using
illogical(), inaccessible() or other such verification macros.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
