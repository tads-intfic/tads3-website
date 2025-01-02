---
layout: docs
---
<span class="title">QDefaults</span><span class="type">object</span>

[query.t](../file/query.t.html)\[[170](../source/query.t.html#170)\]

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

Query Defaults. This provides the default handlers for all query
methods. These are the results that you get using the basic adventure
game "physics" model to answer the questions, ignoring any special
exceptions defined by the game.

This is the lowest-ranking Special object, and is always active.

**`QDefaults`**` :   `[`Special`](../object/Special.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`QDefaults`**  
`         `[`Special`](../object/Special.html)  
`                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`active`](#active)`  `[`priority`](#priority)`  `

Inherited from `Special` :  
` `[`all`](../object/Special.html#all)`  `[`allActive_`](../object/Special.html#allActive_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`canHear`](#canHear)`  `[`canReach`](#canReach)`  `[`canSee`](#canSee)`  `[`canSmell`](#canSmell)`  `[`canTalkTo`](#canTalkTo)`  `[`canThrowTo`](#canThrowTo)`  `[`inLight`](#inLight)`  `[`knownScopeList`](#knownScopeList)`  `[`reachBlocker`](#reachBlocker)`  `[`reachProblem`](#reachProblem)`  `[`reachProblemCheck`](#reachProblemCheck)`  `[`reachProblemVerify`](#reachProblemVerify)`  `[`scentBlocker`](#scentBlocker)`  `[`scopeList`](#scopeList)`  `[`sightBlocker`](#sightBlocker)`  `[`soundBlocker`](#soundBlocker)`  `[`topicScopeList`](#topicScopeList)`  `

Inherited from `Special` :  
` `[`allActive`](../object/Special.html#allActive)`  `[`classInit`](../object/Special.html#classInit)`  `[`first`](../object/Special.html#first)`  `[`next`](../object/Special.html#next)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="active"></span>

`active`<span class="rem">OVERRIDDEN</span>

[query.t](../file/query.t.html)\[[175](../source/query.t.html#175)\]

<div class="desc">

this is the defaults object, so it's always active

</div>

<span id="priority"></span>

`priority`<span class="rem">OVERRIDDEN</span>

[query.t](../file/query.t.html)\[[172](../source/query.t.html#172)\]

<div class="desc">

this is the defaults object, so it has the lower priority

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="canHear"></span>

`canHear (a, b)`

[query.t](../file/query.t.html)\[[492](../source/query.t.html#492)\]

<div class="desc">

Can A hear B? We return true if there's a clear sound path from A to B.

</div>

<span id="canReach"></span>

`canReach (a, b)`

[query.t](../file/query.t.html)\[[299](../source/query.t.html#299)\]

<div class="desc">

Can we reach from A to B? We return true if there's a clear reach path
from A to B, which we take to be the case if we can't find any problems
in reaching from A to B.

</div>

<span id="canSee"></span>

`canSee (a, b)`

[query.t](../file/query.t.html)\[[268](../source/query.t.html#268)\]

<div class="desc">

Can A see B? We return true if and only if B is in light and there's a
clear sight path from A to B. Also A can't see B is B is explicitly
hidden.

</div>

<span id="canSmell"></span>

`canSmell (a, b)`

[query.t](../file/query.t.html)\[[516](../source/query.t.html#516)\]

<div class="desc">

Can A smell B? We return true if there's a clear scent path from A to B.

</div>

<span id="canTalkTo"></span>

`canTalkTo (a, b)`

[query.t](../file/query.t.html)\[[541](../source/query.t.html#541)\]

<div class="desc">

Determine if A can talk to B. In the base situation A can talk to B if A
can hear B.

</div>

<span id="canThrowTo"></span>

`canThrowTo (a, b)`

[query.t](../file/query.t.html)\[[551](../source/query.t.html#551)\]

<div class="desc">

Determine if A can throw something to B. In the base situation A can
throw to B if A can reach B.

</div>

<span id="inLight"></span>

`inLight (a)`

[query.t](../file/query.t.html)\[[248](../source/query.t.html#248)\]

<div class="desc">

Is A in the light? This determines if there's light shining on the
exterior surface of A.

</div>

<span id="knownScopeList"></span>

`knownScopeList ( )`

[query.t](../file/query.t.html)\[[224](../source/query.t.html#224)\]

<div class="desc">

Get a list of all objects that are known to the player char

</div>

<span id="reachBlocker"></span>

`reachBlocker (a, b)`

[query.t](../file/query.t.html)\[[483](../source/query.t.html#483)\]

<div class="desc">

Determine if A can reach B, and if not, what stands in the way. Returns
a list of containers along the path between A and B that obstruct the
reach. If the two objects are in separate rooms, the top-level room
containing A is in the list to represent the room separation. If there's
no obstruction, we return an empty list.

</div>

<span id="reachProblem"></span>

`reachProblem (a, b)`

[query.t](../file/query.t.html)\[[319](../source/query.t.html#319)\]

<div class="desc">

Determine if there is anything preventing or hindering A from reaching
B; if so return a ReachProblem object describing the problem in a way
that a check or verify routine can act on (possibly with an implicit
action to remove the problem). If not, return an empty list.

NOTE: if you provide your own version of this method on a Special it
must return either an empty list (to indicate that there are no problems
with reaching from A to B) or a list of one or more ReachProblem objects
describing what is preventing A from reaching B.

Your own Special should normally leave reachProblem() alone and override
reachProblemVerify() and/or reachProblemCheck().

</div>

<span id="reachProblemCheck"></span>

`reachProblemCheck (a, b)`

[query.t](../file/query.t.html)\[[394](../source/query.t.html#394)\]

<div class="desc">

Return our list of issues.

</div>

<span id="reachProblemVerify"></span>

`reachProblemVerify (a, b)`

[query.t](../file/query.t.html)\[[335](../source/query.t.html#335)\]

<div class="desc">

Return a list of reach issues that might occur at the verify stage.

</div>

<span id="scentBlocker"></span>

`scentBlocker (a, b)`

[query.t](../file/query.t.html)\[[531](../source/query.t.html#531)\]

<div class="desc">

Determine if A can smell B, and if not, what stands in the way. Returns
a list of obstructions to scent between A and B. If the two objects are
in separate rooms, the outermost room containing A represents the room
separation. If there are no obstructions, returns an empty list.

</div>

<span id="scopeList"></span>

`scopeList (actor)`

[query.t](../file/query.t.html)\[[182](../source/query.t.html#182)\]

<div class="desc">

Get the list of objects that are in scope for the given actor. Returns a
ScopeList object containing the scope. You can convert the ScopeList to
an ordinary list of objects via toList().

</div>

<span id="sightBlocker"></span>

`sightBlocker (a, b)`

[query.t](../file/query.t.html)\[[288](../source/query.t.html#288)\]

<div class="desc">

Determine if there's anything blocking the sight path from A to B.
Returns a list of objects blocking sight; if there's no obstruction,
returns an empty list. If the two objects are in separate rooms, the
outermost room containing 'a' represents the room separation. If there's
no obstruction, returns an empty list.

</div>

<span id="soundBlocker"></span>

`soundBlocker (a, b)`

[query.t](../file/query.t.html)\[[507](../source/query.t.html#507)\]

<div class="desc">

Determine if A can hear B, and if not, what stands in the way. We return
a list of the obstructions to sound between A and B. If the two objects
are in separate rooms, the top level room containing A represents the
room separation. If there are no sound obstructions, returns an empty
list.

</div>

<span id="topicScopeList"></span>

`topicScopeList ( )`

[query.t](../file/query.t.html)\[[240](../source/query.t.html#240)\]

<div class="desc">

Get a list of all known mentionable objects, which we assume will
include both known Things and known Topics

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
