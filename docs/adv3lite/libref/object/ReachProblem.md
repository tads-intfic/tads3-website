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



An object describing a reach problem; such objects are used by the Query
object to communicate problems with one object touching another to the
touchObj PreCondition (see also precond.t). ReachProblem objects are
normally created dynamicallty as required, although it is usually one of
the subclasses of ReachProblem that it used.

`class `**`ReachProblem`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ReachProblem`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`ReachProblem`**  
[`ReachProblemBlocker`](../object/ReachProblemBlocker.html)  
[`ReachProblemCheckReach`](../object/ReachProblemCheckReach.html)  
[`ReachProblemDistance`](../object/ReachProblemDistance.html)  
[`ReachProblemReachOut`](../object/ReachProblemReachOut.html)  
[`ReachProblemRemote`](../object/ReachProblemRemote.html)  
[`ReachProblemVerifyReach`](../object/ReachProblemVerifyReach.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`target_`](#target_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`check`](#check) [`construct`](#construct) [`verify`](#verify)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="target_"></span>

`target_`

[query.t](../file/query.t.html)\[[1083](../source/query.t.html#1083)\]



The object we're trying to reach



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="check"></span>

`check (allowImplicit)`

[query.t](../file/query.t.html)\[[1075](../source/query.t.html#1075)\]



The check() method of a ReachProblem should check whether the target
object can be reached by the source object. If allowImplicit is true the
check method may attempt an implicit action to bring the target object
within reach.

Return true if the target object is within reach, and nil otherwise.

Note that the check() method of a ReachProblem will normally be called
from the checkPreCondition() method of touchObj.



<span id="construct"></span>

`construct (target)`

[query.t](../file/query.t.html)\[[1077](../source/query.t.html#1077)\]



*no description available*



<span id="verify"></span>

`verify ( )`

[query.t](../file/query.t.html)\[[1062](../source/query.t.html#1062)\]



Problems which reaching an object that occur at the verify stage and
which might affect the choice of object. If the verify() method of a
ReachProblem object wishes to rule out an action it should do so using
illogical(), inaccessible() or other such verification macros.





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


