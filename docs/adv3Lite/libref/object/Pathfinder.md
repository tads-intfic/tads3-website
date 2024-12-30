[Pathfinder]{.title}[class]{.type}

[pathfind.t](../file/pathfind.t.html)\[[5](../source/pathfind.t.html#5)\]

[Superclass\
Tree](#_SuperClassTree_)

[Subclass\
Tree](#_SubClassTree_)

[Global\
Objects](#_ObjectSummary_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
*no description available*

`class `**`Pathfinder`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`Pathfinder`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

*(none)* []{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

` `[`pcRouteFinder`](../object/pcRouteFinder.html)`  `[`relationPathfinder`](../object/relationPathfinder.html)`  `[`routeFinder`](../object/routeFinder.html)`  `
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`cachedRoute`](#cachedRoute)`  `[`currentDestination`](#currentDestination)`  `[`nodesVisited`](#nodesVisited)`  `[`pathsFound`](#pathsFound)`  `[`steps`](#steps)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`findDestinations`](#findDestinations)`  `[`findPath`](#findPath)`  `[`takeOneStep`](#takeOneStep)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#cachedRoute}

`cachedRoute`

[pathfind.t](../file/pathfind.t.html)\[[123](../source/pathfind.t.html#123)\]

::: desc
The most recently calculated route
:::

[]{#currentDestination}

`currentDestination`

[pathfind.t](../file/pathfind.t.html)\[[126](../source/pathfind.t.html#126)\]

::: desc
The destination of the most recently calculated route.
:::

[]{#nodesVisited}

`nodesVisited`

[pathfind.t](../file/pathfind.t.html)\[[28](../source/pathfind.t.html#28)\]

::: desc
A Vector containing all the nodes we have visited so far in our attempt
to find a route. This enables us to cull paths that lead somewhere
we\'ve already been.
:::

[]{#pathsFound}

`pathsFound`

[pathfind.t](../file/pathfind.t.html)\[[14](../source/pathfind.t.html#14)\]

::: desc
When populated the pathsFound will contain a Vector of path Vectors,
each path Vector comprising a series of two element lists, the first
element describing the route taken and the second the destination
arrived at (e.g. \[northDir, hall\] meaning go north to reach the hall).
:::

[]{#steps}

`steps`

[pathfind.t](../file/pathfind.t.html)\[[20](../source/pathfind.t.html#20)\]

::: desc
The number of steps we have tried so far. We start with 1, being the
null step to our starting point.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#findDestinations}

`findDestinations (cur)`

[pathfind.t](../file/pathfind.t.html)\[[117](../source/pathfind.t.html#117)\]

::: desc
Find all the destinations one step away from cur
:::

[]{#findPath}

`findPath (start, target)`

[pathfind.t](../file/pathfind.t.html)\[[31](../source/pathfind.t.html#31)\]

::: desc
*no description available*
:::

[]{#takeOneStep}

`takeOneStep ( )`

[pathfind.t](../file/pathfind.t.html)\[[96](../source/pathfind.t.html#96)\]

::: desc
note which nodes have now been visited
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
