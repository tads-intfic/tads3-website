---
layout: docs
---
<span class="title">ReachProblemBlocker</span><span class="type">class</span>

[query.t](../file/query.t.html)\[[1115](../source/query.t.html#1115)\]

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

A ReachProblem object for when access to the target is blocked by a
closed container along the path from the source to the target.

`class `**`ReachProblemBlocker`**` :   `[`ReachProblem`](../object/ReachProblem.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ReachProblemBlocker`**  
`         `[`ReachProblem`](../object/ReachProblem.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`obstructor_`](#obstructor_)`  `

Inherited from `ReachProblem` :  
` `[`target_`](../object/ReachProblem.html#target_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`reachBlockedMsg`](#reachBlockedMsg)`  `[`verify`](#verify)`  `

Inherited from `ReachProblem` :  
` `[`check`](../object/ReachProblem.html#check)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="obstructor_"></span>

`obstructor_`

[query.t](../file/query.t.html)\[[1134](../source/query.t.html#1134)\]

<div class="desc">

The closed container that is preventing access to the target object the
actor is trying to reach.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (target, obstructor)`<span class="rem">OVERRIDDEN</span>

[query.t](../file/query.t.html)\[[1136](../source/query.t.html#1136)\]

<div class="desc">

*no description available*

</div>

<span id="reachBlockedMsg"></span>

`reachBlockedMsg ( )`

[query.t](../file/query.t.html)\[[1125](../source/query.t.html#1125)\]

<div class="desc">

Delegate defining the message explaining that blocking is reached to the
blocking object.

</div>

<span id="verify"></span>

`verify ( )`<span class="rem">OVERRIDDEN</span>

[query.t](../file/query.t.html)\[[1116](../source/query.t.html#1116)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
