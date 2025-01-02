<span class="title">relationPathfinder</span><span class="type">object</span>

[relations.t](../file/relations.t.html)\[[629](../source/relations.t.html#629)\]

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

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`relationPathfinder`**  
`         `[`Pathfinder`](../object/Pathfinder.html)  
`                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`relationList`](#relationList)`  `

Inherited from `Pathfinder` :  
` `[`cachedRoute`](../object/Pathfinder.html#cachedRoute)`  `[`currentDestination`](../object/Pathfinder.html#currentDestination)`  `[`nodesVisited`](../object/Pathfinder.html#nodesVisited)`  `[`pathsFound`](../object/Pathfinder.html#pathsFound)`  `[`steps`](../object/Pathfinder.html#steps)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`findDestinations`](#findDestinations)`  `[`findPath`](#findPath)`  `

Inherited from `Pathfinder` :  
` `[`takeOneStep`](../object/Pathfinder.html#takeOneStep)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="relationList"></span>

`relationList`

[relations.t](../file/relations.t.html)\[[741](../source/relations.t.html#741)\]

<div class="desc">

Property used internally to hold the list of relations we're finding a
route through.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="findDestinations"></span>

`findDestinations (cur)`<span class="rem">OVERRIDDEN</span>

[relations.t](../file/relations.t.html)\[[701](../source/relations.t.html#701)\]

<div class="desc">

If the result was nil, simply return nil to indicate that no path was
found. Otherwise, if the rel parameter was passed as a list, return the
resulting path list unchanged. Otherwise (if rel was passed as a single
relation), return a list consisting of the objects (or other items) on
the path only, since the relation information for each step would be
redundant.

Thus, if rel was passes as a list, the return value might resemble,
\[\[nil, john\], \['child of', mark\], \['sibling', mary\]\], whereas if
it was passed as a single relation the return value might resemble
\[johh, mark, alan\].

</div>

<span id="findPath"></span>

`findPath (start, rel, target)`<span class="rem">OVERRIDDEN</span>

[relations.t](../file/relations.t.html)\[[638](../source/relations.t.html#638)\]

<div class="desc">

Find a path from start to target via the rel relation. The rel parameter
may be supplied as a relation object, a relation string name or
reverseName, or a list of any of these, in which case any of the
relations contained in the list may be used to step from one object to
the next.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
