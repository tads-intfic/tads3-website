---
layout: docs
---
<span class="title">ReachProblemRemote</span><span class="type">class</span>

[senseRegion.t](../file/senseRegion.t.html)\[[1647](../source/senseRegion.t.html#1647)\]

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



The ReachProblemRemote should only be brought into play when an actor in
one room in a SenseRegion tries to touch an object in another room in
the SenseRegion when the SenseRegion defines autoGoTo as true. The
ReachProblemRemote will then be responsible for trying to move the actor
into the room containing the target object.

`class `**`ReachProblemRemote`**` :   `[`ReachProblem`](../object/ReachProblem.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ReachProblemRemote`**  
[`ReachProblem`](../object/ReachProblem.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`destRoom`](#destRoom)[`origRoom`](#origRoom)[`target`](#target)

Inherited from `ReachProblem` :  
[`target_`](../object/ReachProblem.html#target_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`check`](#check)[`construct`](#construct)[`sayGoTo`](#sayGoTo)[`tooFarAwayMsg`](#tooFarAwayMsg)

Inherited from `ReachProblem` :  
[`verify`](../object/ReachProblem.html#verify)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="destRoom"></span>

`destRoom`

[senseRegion.t](../file/senseRegion.t.html)\[[1656](../source/senseRegion.t.html#1656)\]



*no description available*



<span id="origRoom"></span>

`origRoom`

[senseRegion.t](../file/senseRegion.t.html)\[[1655](../source/senseRegion.t.html#1655)\]



*no description available*



<span id="target"></span>

`target`

[senseRegion.t](../file/senseRegion.t.html)\[[1657](../source/senseRegion.t.html#1657)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="check"></span>

`check (allowImplicit)`<span class="rem">OVERRIDDEN</span>

[senseRegion.t](../file/senseRegion.t.html)\[[1664](../source/senseRegion.t.html#1664)\]



This check method may be called by the checkPreCondition method of the
touchObj PreCondition. Its effect is to try to move the actor into the
location of the object the actor is trying to touch.



<span id="construct"></span>

`construct (a, b)`<span class="rem">OVERRIDDEN</span>

[senseRegion.t](../file/senseRegion.t.html)\[[1648](../source/senseRegion.t.html#1648)\]



*no description available*



<span id="sayGoTo"></span>

`sayGoTo (destRoom)`

[senseRegion.t](../file/senseRegion.t.html)\[[1727](../source/senseRegion.t.html#1727)\]



Report that we are trying to head to destRoom via an implicit action. We
do this separately from the normal implicit action report mechanism so
that this report is display before travel begins, not at the end of it
as it otherwise would be.



<span id="tooFarAwayMsg"></span>

`tooFarAwayMsg ( )`

[senseRegion.t](../file/senseRegion.t.html)\[[1715](../source/senseRegion.t.html#1715)\]



The failure message to display if we can't attempt an implicit GoTo
action to move the actor.





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


