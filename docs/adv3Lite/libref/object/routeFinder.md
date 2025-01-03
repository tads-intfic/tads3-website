---
layout: docs
---
<span class="title">routeFinder</span><span class="type">object</span>

[pathfind.t](../file/pathfind.t.html)\[[136](../source/pathfind.t.html#136)\]

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



A Pathfinder specialized for finding a route through the game map. Note
that this can only find a route through TravelConnector objects (which
includes direction properties attached to Rooms, Doors and other
TravelConnectors).

**`routeFinder`**` :   `[`Pathfinder`](../object/Pathfinder.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`routeFinder`**  
[`Pathfinder`](../object/Pathfinder.html)  
`                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`excludeLockedDoors`](#excludeLockedDoors)

Inherited from `Pathfinder` :  
[`cachedRoute`](../object/Pathfinder.html#cachedRoute) [`currentDestination`](../object/Pathfinder.html#currentDestination) [`nodesVisited`](../object/Pathfinder.html#nodesVisited) [`pathsFound`](../object/Pathfinder.html#pathsFound) [`steps`](../object/Pathfinder.html#steps)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`findDestinations`](#findDestinations)

Inherited from `Pathfinder` :  
[`findPath`](../object/Pathfinder.html#findPath) [`takeOneStep`](../object/Pathfinder.html#takeOneStep)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="excludeLockedDoors"></span>

`excludeLockedDoors`

[pathfind.t](../file/pathfind.t.html)\[[215](../source/pathfind.t.html#215)\]



the destination is only of interest if it's not nowhere, the default
unknown destination, or the location we're trying to leave.

if it's none of these, add it to the list of possible paths



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="findDestinations"></span>

`findDestinations (cur)`<span class="rem">OVERRIDDEN</span>

[pathfind.t](../file/pathfind.t.html)\[[138](../source/pathfind.t.html#138)\]



*no description available*
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


