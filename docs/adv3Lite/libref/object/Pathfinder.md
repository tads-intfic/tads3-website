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



*no description available*

`class `**`Pathfinder`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Pathfinder`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`pcRouteFinder`](../object/pcRouteFinder.html) [`relationPathfinder`](../object/relationPathfinder.html) [`routeFinder`](../object/routeFinder.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`cachedRoute`](#cachedRoute) [`currentDestination`](#currentDestination) [`nodesVisited`](#nodesVisited) [`pathsFound`](#pathsFound) [`steps`](#steps)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`findDestinations`](#findDestinations) [`findPath`](#findPath) [`takeOneStep`](#takeOneStep)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="cachedRoute"></span>

`cachedRoute`

[pathfind.t](../file/pathfind.t.html)\[[123](../source/pathfind.t.html#123)\]



The most recently calculated route



<span id="currentDestination"></span>

`currentDestination`

[pathfind.t](../file/pathfind.t.html)\[[126](../source/pathfind.t.html#126)\]



The destination of the most recently calculated route.



<span id="nodesVisited"></span>

`nodesVisited`

[pathfind.t](../file/pathfind.t.html)\[[28](../source/pathfind.t.html#28)\]



A Vector containing all the nodes we have visited so far in our attempt
to find a route. This enables us to cull paths that lead somewhere we've
already been.



<span id="pathsFound"></span>

`pathsFound`

[pathfind.t](../file/pathfind.t.html)\[[14](../source/pathfind.t.html#14)\]



When populated the pathsFound will contain a Vector of path Vectors,
each path Vector comprising a series of two element lists, the first
element describing the route taken and the second the destination
arrived at (e.g. \[northDir, hall\] meaning go north to reach the hall).



<span id="steps"></span>

`steps`

[pathfind.t](../file/pathfind.t.html)\[[20](../source/pathfind.t.html#20)\]



The number of steps we have tried so far. We start with 1, being the
null step to our starting point.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="findDestinations"></span>

`findDestinations (cur)`

[pathfind.t](../file/pathfind.t.html)\[[117](../source/pathfind.t.html#117)\]



Find all the destinations one step away from cur



<span id="findPath"></span>

`findPath (start, target)`

[pathfind.t](../file/pathfind.t.html)\[[31](../source/pathfind.t.html#31)\]



*no description available*



<span id="takeOneStep"></span>

`takeOneStep ( )`

[pathfind.t](../file/pathfind.t.html)\[[96](../source/pathfind.t.html#96)\]



note which nodes have now been visited
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


