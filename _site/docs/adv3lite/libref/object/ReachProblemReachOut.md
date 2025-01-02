<span class="title">ReachProblemReachOut</span><span class="type">class</span>

[query.t](../file/query.t.html)\[[1188](../source/query.t.html#1188)\]

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

A ReachProblem object for when the actor can't reach the target from the
actor's (non top-level room) container.

`class `**`ReachProblemReachOut`**` :   `[`ReachProblem`](../object/ReachProblem.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ReachProblemReachOut`**  
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

` `

Inherited from `ReachProblem` :  
` `[`target_`](../object/ReachProblem.html#target_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`check`](#check)`  `

Inherited from `ReachProblem` :  
` `[`construct`](../object/ReachProblem.html#construct)`  `[`verify`](../object/ReachProblem.html#verify)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="check"></span>

`check (allowImplicit)`<span class="rem">OVERRIDDEN</span>

[query.t](../file/query.t.html)\[[1194](../source/query.t.html#1194)\]

<div class="desc">

If allowImplicit is true we can try moving the actor out of its
immediate container to see if this solves the problem. If it does,
return true; otherwise return nil.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>