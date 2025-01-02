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

<div class="fdesc">

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

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Q`**  
`         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`dynamicSpecials`](#dynamicSpecials)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`canHear`](#canHear)`  `[`canReach`](#canReach)`  `[`canSee`](#canSee)`  `[`canSmell`](#canSmell)`  `[`canTalkTo`](#canTalkTo)`  `[`canThrowTo`](#canThrowTo)`  `[`inLight`](#inLight)`  `[`knownScopeList`](#knownScopeList)`  `[`reachBlocker`](#reachBlocker)`  `[`reachProblem`](#reachProblem)`  `[`reachProblemCheck`](#reachProblemCheck)`  `[`reachProblemVerify`](#reachProblemVerify)`  `[`scentBlocker`](#scentBlocker)`  `[`scopeList`](#scopeList)`  `[`sightBlocker`](#sightBlocker)`  `[`soundBlocker`](#soundBlocker)`  `[`topicScopeList`](#topicScopeList)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="dynamicSpecials"></span>

`dynamicSpecials`

[query.t](../file/query.t.html)\[[159](../source/query.t.html#159)\]

<div class="desc">

Are the active conditions on Specials dynamic (i.e. such as to change
during the course of the game)? By default we'll assume that some of
them may be.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="canHear"></span>

`canHear (a, b)`

[query.t](../file/query.t.html)\[[115](../source/query.t.html#115)\]

<div class="desc">

Can A hear B?

</div>

<span id="canReach"></span>

`canReach (a, b)`

[query.t](../file/query.t.html)\[[84](../source/query.t.html#84)\]

<div class="desc">

Can we reach from A to B? We return true if there's nothing in the way,
nil otherwise.

</div>

<span id="canSee"></span>

`canSee (a, b)`

[query.t](../file/query.t.html)\[[66](../source/query.t.html#66)\]

<div class="desc">

Can A see B?

</div>

<span id="canSmell"></span>

`canSmell (a, b)`

[query.t](../file/query.t.html)\[[131](../source/query.t.html#131)\]

<div class="desc">

Can A smell B?

</div>

<span id="canTalkTo"></span>

`canTalkTo (a, b)`

[query.t](../file/query.t.html)\[[147](../source/query.t.html#147)\]

<div class="desc">

Determine if A can talk to B.

</div>

<span id="canThrowTo"></span>

`canThrowTo (a, b)`

[query.t](../file/query.t.html)\[[151](../source/query.t.html#151)\]

<div class="desc">

Determine if A can Throw something to B.

</div>

<span id="inLight"></span>

`inLight (a)`

[query.t](../file/query.t.html)\[[60](../source/query.t.html#60)\]

<div class="desc">

Is A in the light? This determines if there's light shining on the
exterior surface of A.

</div>

<span id="knownScopeList"></span>

`knownScopeList ( )`

[query.t](../file/query.t.html)\[[50](../source/query.t.html#50)\]

<div class="desc">

*no description available*

</div>

<span id="reachBlocker"></span>

`reachBlocker (a, b)`

[query.t](../file/query.t.html)\[[94](../source/query.t.html#94)\]

<div class="desc">

Determine if A can reach B, and if not, what stands in the way. Returns
a list of containers along the path between A and B that obstruct the
reach. If the two objects are in separate rooms, the top-level room
containing A is in the list to represent the room separation. If there's
no obstruction, we return an empty list.

</div>

<span id="reachProblem"></span>

`reachProblem (a, b)`

[query.t](../file/query.t.html)\[[103](../source/query.t.html#103)\]

<div class="desc">

Determine if there is a problem with A reaching B, and if so what it is.
If there is a problem return a ReachProblem object describing what the
problem is, otherwise return nil.

</div>

<span id="reachProblemCheck"></span>

`reachProblemCheck (a, b)`

[query.t](../file/query.t.html)\[[109](../source/query.t.html#109)\]

<div class="desc">

*no description available*

</div>

<span id="reachProblemVerify"></span>

`reachProblemVerify (a, b)`

[query.t](../file/query.t.html)\[[106](../source/query.t.html#106)\]

<div class="desc">

*no description available*

</div>

<span id="scentBlocker"></span>

`scentBlocker (a, b)`

[query.t](../file/query.t.html)\[[141](../source/query.t.html#141)\]

<div class="desc">

Determine if A can smell B, and if not, what stands in the way. Returns
a list of obstructions to scent between A and B. If the two objects are
in separate rooms, the outermost room containing A represents the room
separation. If there are no obstructions, returns an empty list.

</div>

<span id="scopeList"></span>

`scopeList (actor)`

[query.t](../file/query.t.html)\[[46](../source/query.t.html#46)\]

<div class="desc">

Get the list of objects that are in scope for the given actor. Returns a
ScopeList object containing the scope. You can convert the ScopeList to
an ordinary list of objects via toList().

</div>

<span id="sightBlocker"></span>

`sightBlocker (a, b)`

[query.t](../file/query.t.html)\[[77](../source/query.t.html#77)\]

<div class="desc">

Determine if there's anything blocking the sight path from A to B.
Returns a list of objects blocking sight; if there's no obstruction,
returns an empty list. If the two objects are in separate rooms, the
outermost room containing 'a' represents the room separation. If there's
no obstruction, returns an empty list.

</div>

<span id="soundBlocker"></span>

`soundBlocker (a, b)`

[query.t](../file/query.t.html)\[[125](../source/query.t.html#125)\]

<div class="desc">

Determine if A can hear B, and if not, what stands in the way. We return
a list of the obstructions to sound between A and B. If the two objects
are in separate rooms, the top level room containing A represents the
room separation. If there are no sound obstructions, returns an empty
list.

</div>

<span id="topicScopeList"></span>

`topicScopeList ( )`

[query.t](../file/query.t.html)\[[53](../source/query.t.html#53)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
