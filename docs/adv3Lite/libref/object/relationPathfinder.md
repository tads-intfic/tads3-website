[relationPathfinder]{.title}[object]{.type}

[relations.t](../file/relations.t.html)\[[629](../source/relations.t.html#629)\]

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
The relationPathfinder tries to find a path from start to target via the
rel relation. If it finds one it returns the shortest posssible list of
items starting with start and ending with target, in which each item in
the list is related to the next via the rel relation. E.g. if John is
the father of Jo, and Jo is the father of Jim, and Jim is the father of
Jeremy, relationPathfinder.findPath(John, fatherOf, Jeremy) should
return a list like \[John, Jo, Jim, Jeremy\] (assuming the appropriate
definition of the fatherOf relationship).

PART OF THE RELATIONS EXTENSION

**`relationPathfinder`**` :   `[`Pathfinder`](../object/Pathfinder.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`relationPathfinder`**\
`         `[`Pathfinder`](../object/Pathfinder.html)\
`                 object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`relationList`](#relationList)`  `

Inherited from `Pathfinder` :\
` `[`cachedRoute`](../object/Pathfinder.html#cachedRoute)`  `[`currentDestination`](../object/Pathfinder.html#currentDestination)`  `[`nodesVisited`](../object/Pathfinder.html#nodesVisited)`  `[`pathsFound`](../object/Pathfinder.html#pathsFound)`  `[`steps`](../object/Pathfinder.html#steps)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`findDestinations`](#findDestinations)`  `[`findPath`](#findPath)`  `

Inherited from `Pathfinder` :\
` `[`takeOneStep`](../object/Pathfinder.html#takeOneStep)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#relationList}

`relationList`

[relations.t](../file/relations.t.html)\[[741](../source/relations.t.html#741)\]

::: desc
Property used internally to hold the list of relations we\'re finding a
route through.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#findDestinations}

`findDestinations (cur)`[OVERRIDDEN]{.rem}

[relations.t](../file/relations.t.html)\[[701](../source/relations.t.html#701)\]

::: desc
If the result was nil, simply return nil to indicate that no path was
found. Otherwise, if the rel parameter was passed as a list, return the
resulting path list unchanged. Otherwise (if rel was passed as a single
relation), return a list consisting of the objects (or other items) on
the path only, since the relation information for each step would be
redundant.

Thus, if rel was passes as a list, the return value might resemble,
\[\[nil, john\], \[\'child of\', mark\], \[\'sibling\', mary\]\],
whereas if it was passed as a single relation the return value might
resemble \[johh, mark, alan\].
:::

[]{#findPath}

`findPath (start, rel, target)`[OVERRIDDEN]{.rem}

[relations.t](../file/relations.t.html)\[[638](../source/relations.t.html#638)\]

::: desc
Find a path from start to target via the rel relation. The rel parameter
may be supplied as a relation object, a relation string name or
reverseName, or a list of any of these, in which case any of the
relations contained in the list may be used to step from one object to
the next.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
