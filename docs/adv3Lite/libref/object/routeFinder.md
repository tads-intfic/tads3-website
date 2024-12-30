[routeFinder]{.title}[object]{.type}

[pathfind.t](../file/pathfind.t.html)\[[136](../source/pathfind.t.html#136)\]

[Superclass\
Tree](#_SuperClassTree_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
A Pathfinder specialized for finding a route through the game map. Note
that this can only find a route through TravelConnector objects (which
includes direction properties attached to Rooms, Doors and other
TravelConnectors).

**`routeFinder`**` :   `[`Pathfinder`](../object/Pathfinder.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`routeFinder`**\
`         `[`Pathfinder`](../object/Pathfinder.html)\
`                 object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`excludeLockedDoors`](#excludeLockedDoors)`  `

Inherited from `Pathfinder` :\
` `[`cachedRoute`](../object/Pathfinder.html#cachedRoute)`  `[`currentDestination`](../object/Pathfinder.html#currentDestination)`  `[`nodesVisited`](../object/Pathfinder.html#nodesVisited)`  `[`pathsFound`](../object/Pathfinder.html#pathsFound)`  `[`steps`](../object/Pathfinder.html#steps)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`findDestinations`](#findDestinations)`  `

Inherited from `Pathfinder` :\
` `[`findPath`](../object/Pathfinder.html#findPath)`  `[`takeOneStep`](../object/Pathfinder.html#takeOneStep)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#excludeLockedDoors}

`excludeLockedDoors`

[pathfind.t](../file/pathfind.t.html)\[[215](../source/pathfind.t.html#215)\]

::: desc
the destination is only of interest if it\'s not nowhere, the default
unknown destination, or the location we\'re trying to leave.

if it\'s none of these, add it to the list of possible paths
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#findDestinations}

`findDestinations (cur)`[OVERRIDDEN]{.rem}

[pathfind.t](../file/pathfind.t.html)\[[138](../source/pathfind.t.html#138)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
