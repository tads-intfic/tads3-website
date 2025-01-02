<span class="title">relations.t</span><span class="type">file</span>

[source file](../source/relations.t.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Objects**  
[Summary](#_ObjectSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)

<div class="fdesc">

RELATIONS EXTENSION by Eric Eve July 2014

The relations.t extension allows Inform7-style relations to be defined
in a TADS 3 game.

</div>

<span id="_ClassSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Classes</span>  

</div>

` `[`Relation`](../object/Relation.html)`  `[`VerbRule(ListRelations)`](../object/VerbRule(ListRelations).html)`  `[`VerbRule(RelationDetails)`](../object/VerbRule(RelationDetails).html)`  `
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Objects</span>  

</div>

` `[`DerivedRelation`](../object/DerivedRelation.html)`  `[`ListRelations`](../object/ListRelations.html)`  `[`RelationDetails`](../object/RelationDetails.html)`  `[`relationPathfinder`](../object/relationPathfinder.html)`  `[`relationTable`](../object/relationTable.html)`  `
<span id="FunctionSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Functions</span>  

</div>

` `[`relate`](#relate)`  `[`related`](#related)`  `[`relationPath`](#relationPath)`  `[`unrelate`](#unrelate)`  `

<span id="_Functions_"></span>

<div class="mjhd">

<span class="hdln">Global Functions</span>  

</div>

<span id="relate"></span>

`relate (a, rel, b)`

[relations.t](../file/relations.t.html)\[[503](../source/relations.t.html#503)\]

<div class="desc">

Make a related to b via the rel relation. The rel parameter can be
specified either as an object (in which case its the relevant relation
object) or as a single-quoted string (in which cast it's either the name
or the reverseName of a relation object.

PART OF THE RELATIONS EXTENSION

</div>

<span id="related"></span>

`related (a, rel, b?)`

[relations.t](../file/relations.t.html)\[[578](../source/relations.t.html#578)\]

<div class="desc">

If two arguments are supplied (e.g. related(a, knows)) returns a list of
items related to a via the rel relation. If three arguments are supplied
(e.g. related(a, knows, b)) then return true if a is related to b via
the knows relation and b otherwise.

PART OF THE RELATIONS EXTENSION

</div>

<span id="relationPath"></span>

`relationPath (start, rel, target)`

[relations.t](../file/relations.t.html)\[[753](../source/relations.t.html#753)\]

<div class="desc">

Find a path from start to target via the rel relation, where rel can be
a single relation or a list of relations, and can be specified either
via a relation object name or a string name (or reverseName). We provide
this as a convenient wrapper for the more verbose method call.

PART OF THE RELATIONS EXTENSION.

</div>

<span id="unrelate"></span>

`unrelate (a, rel, b)`

[relations.t](../file/relations.t.html)\[[539](../source/relations.t.html#539)\]

<div class="desc">

Remove the rel relation between a and b

PART OF THE RELATIONS EXTENSION

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>