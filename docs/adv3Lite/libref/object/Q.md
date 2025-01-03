---
layout: docs
---
<span class="title">Q</span><span class="type">object</span>

[query.t](../file/query.t.html)\[[40](../source/query.t.html#40)\]

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



Q is the general-purpose global Query object. Its various methods are
used to ask questions about the game state.

For any query, there are two sources of answers. First, there's the
standard answer based on the basic "physics" of the adventure world
model. Second, there are any number of custom answers from Special
objects, which define customizations that apply to specific combinations
of actors, locations, objects, times, or just about anything else that
the game can model.

The standard physics-based answer is the default. It provides the answer
if there are no active Special objects that provide custom answers.

If there are active Specials, the only ones that matter for a particular
query are the ones that define that query's method. If there are any
active Special objects that define a query method, calling Q.foo()
actually calls the highest-priority Special's version of the foo()
method. That Special method can in turn call the next lower priority
Special using next(). If there are no active Special objects defining a
query method, the default handler in QDefaults will be used
automatically.

**`Q`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Q`**  
`         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`dynamicSpecials`](#dynamicSpecials)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`canHear`](#canHear) [`canReach`](#canReach) [`canSee`](#canSee) [`canSmell`](#canSmell) [`canTalkTo`](#canTalkTo) [`canThrowTo`](#canThrowTo) [`inLight`](#inLight) [`knownScopeList`](#knownScopeList) [`reachBlocker`](#reachBlocker) [`reachProblem`](#reachProblem) [`reachProblemCheck`](#reachProblemCheck) [`reachProblemVerify`](#reachProblemVerify) [`scentBlocker`](#scentBlocker) [`scopeList`](#scopeList) [`sightBlocker`](#sightBlocker) [`soundBlocker`](#soundBlocker) [`topicScopeList`](#topicScopeList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="dynamicSpecials"></span>

`dynamicSpecials`

[query.t](../file/query.t.html)\[[159](../source/query.t.html#159)\]



Are the active conditions on Specials dynamic (i.e. such as to change
during the course of the game)? By default we'll assume that some of
them may be.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="canHear"></span>

`canHear (a, b)`

[query.t](../file/query.t.html)\[[115](../source/query.t.html#115)\]



Can A hear B?



<span id="canReach"></span>

`canReach (a, b)`

[query.t](../file/query.t.html)\[[84](../source/query.t.html#84)\]



Can we reach from A to B? We return true if there's nothing in the way,
nil otherwise.



<span id="canSee"></span>

`canSee (a, b)`

[query.t](../file/query.t.html)\[[66](../source/query.t.html#66)\]



Can A see B?



<span id="canSmell"></span>

`canSmell (a, b)`

[query.t](../file/query.t.html)\[[131](../source/query.t.html#131)\]



Can A smell B?



<span id="canTalkTo"></span>

`canTalkTo (a, b)`

[query.t](../file/query.t.html)\[[147](../source/query.t.html#147)\]



Determine if A can talk to B.



<span id="canThrowTo"></span>

`canThrowTo (a, b)`

[query.t](../file/query.t.html)\[[151](../source/query.t.html#151)\]



Determine if A can Throw something to B.



<span id="inLight"></span>

`inLight (a)`

[query.t](../file/query.t.html)\[[60](../source/query.t.html#60)\]



Is A in the light? This determines if there's light shining on the
exterior surface of A.



<span id="knownScopeList"></span>

`knownScopeList ( )`

[query.t](../file/query.t.html)\[[50](../source/query.t.html#50)\]



*no description available*



<span id="reachBlocker"></span>

`reachBlocker (a, b)`

[query.t](../file/query.t.html)\[[94](../source/query.t.html#94)\]



Determine if A can reach B, and if not, what stands in the way. Returns
a list of containers along the path between A and B that obstruct the
reach. If the two objects are in separate rooms, the top-level room
containing A is in the list to represent the room separation. If there's
no obstruction, we return an empty list.



<span id="reachProblem"></span>

`reachProblem (a, b)`

[query.t](../file/query.t.html)\[[103](../source/query.t.html#103)\]



Determine if there is a problem with A reaching B, and if so what it is.
If there is a problem return a ReachProblem object describing what the
problem is, otherwise return nil.



<span id="reachProblemCheck"></span>

`reachProblemCheck (a, b)`

[query.t](../file/query.t.html)\[[109](../source/query.t.html#109)\]



*no description available*



<span id="reachProblemVerify"></span>

`reachProblemVerify (a, b)`

[query.t](../file/query.t.html)\[[106](../source/query.t.html#106)\]



*no description available*



<span id="scentBlocker"></span>

`scentBlocker (a, b)`

[query.t](../file/query.t.html)\[[141](../source/query.t.html#141)\]



Determine if A can smell B, and if not, what stands in the way. Returns
a list of obstructions to scent between A and B. If the two objects are
in separate rooms, the outermost room containing A represents the room
separation. If there are no obstructions, returns an empty list.



<span id="scopeList"></span>

`scopeList (actor)`

[query.t](../file/query.t.html)\[[46](../source/query.t.html#46)\]



Get the list of objects that are in scope for the given actor. Returns a
ScopeList object containing the scope. You can convert the ScopeList to
an ordinary list of objects via toList().



<span id="sightBlocker"></span>

`sightBlocker (a, b)`

[query.t](../file/query.t.html)\[[77](../source/query.t.html#77)\]



Determine if there's anything blocking the sight path from A to B.
Returns a list of objects blocking sight; if there's no obstruction,
returns an empty list. If the two objects are in separate rooms, the
outermost room containing 'a' represents the room separation. If there's
no obstruction, returns an empty list.



<span id="soundBlocker"></span>

`soundBlocker (a, b)`

[query.t](../file/query.t.html)\[[125](../source/query.t.html#125)\]



Determine if A can hear B, and if not, what stands in the way. We return
a list of the obstructions to sound between A and B. If the two objects
are in separate rooms, the top level room containing A represents the
room separation. If there are no sound obstructions, returns an empty
list.



<span id="topicScopeList"></span>

`topicScopeList ( )`

[query.t](../file/query.t.html)\[[53](../source/query.t.html#53)\]



*no description available*
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


