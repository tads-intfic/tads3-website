---
layout: docs
---
<span class="title">Pathfinder</span><span class="type">class</span>

[pathfind.t](../file/pathfind.t.html)\[[5](../source/pathfind.t.html#5)\]

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

*no description available*

`class `**`Pathfinder`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Pathfinder`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

[`pcRouteFinder`](../object/pcRouteFinder.html)[`relationPathfinder`](../object/relationPathfinder.html)[`routeFinder`](../object/routeFinder.html)
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`cachedRoute`](#cachedRoute)[`currentDestination`](#currentDestination)[`nodesVisited`](#nodesVisited)[`pathsFound`](#pathsFound)[`steps`](#steps)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`findDestinations`](#findDestinations)[`findPath`](#findPath)[`takeOneStep`](#takeOneStep)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="cachedRoute"></span>

`cachedRoute`

[pathfind.t](../file/pathfind.t.html)\[[123](../source/pathfind.t.html#123)\]

<div class="desc">

The most recently calculated route

</div>

<span id="currentDestination"></span>

`currentDestination`

[pathfind.t](../file/pathfind.t.html)\[[126](../source/pathfind.t.html#126)\]

<div class="desc">

The destination of the most recently calculated route.

</div>

<span id="nodesVisited"></span>

`nodesVisited`

[pathfind.t](../file/pathfind.t.html)\[[28](../source/pathfind.t.html#28)\]

<div class="desc">

A Vector containing all the nodes we have visited so far in our attempt
to find a route. This enables us to cull paths that lead somewhere we've
already been.

</div>

<span id="pathsFound"></span>

`pathsFound`

[pathfind.t](../file/pathfind.t.html)\[[14](../source/pathfind.t.html#14)\]

<div class="desc">

When populated the pathsFound will contain a Vector of path Vectors,
each path Vector comprising a series of two element lists, the first
element describing the route taken and the second the destination
arrived at (e.g. \[northDir, hall\] meaning go north to reach the hall).

</div>

<span id="steps"></span>

`steps`

[pathfind.t](../file/pathfind.t.html)\[[20](../source/pathfind.t.html#20)\]

<div class="desc">

The number of steps we have tried so far. We start with 1, being the
null step to our starting point.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="findDestinations"></span>

`findDestinations (cur)`

[pathfind.t](../file/pathfind.t.html)\[[117](../source/pathfind.t.html#117)\]

<div class="desc">

Find all the destinations one step away from cur

</div>

<span id="findPath"></span>

`findPath (start, target)`

[pathfind.t](../file/pathfind.t.html)\[[31](../source/pathfind.t.html#31)\]

<div class="desc">

*no description available*

</div>

<span id="takeOneStep"></span>

`takeOneStep ( )`

[pathfind.t](../file/pathfind.t.html)\[[96](../source/pathfind.t.html#96)\]

<div class="desc">

note which nodes have now been visited

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
