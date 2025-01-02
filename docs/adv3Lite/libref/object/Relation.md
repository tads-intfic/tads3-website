---
layout: docs
---
<span class="title">Relation</span><span class="type">class</span>

[relations.t](../file/relations.t.html)\[[19](../source/relations.t.html#19)\]

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



The Relation class is used to define any kind of binary relation you
like between objects, or between items of any other kind, e.g. x love y,
or a is the father of b, or c knows d.

REQUIRES THE RELATIONS EXTENSION.

`class `**`Relation`**` :   `[`PreinitObject`](../object/PreinitObject.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Relation`**  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



` [`DerivedRelation`](../object/DerivedRelation.html)  [`Signal`](../object/Signal.html)  `
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



` [`name`](#name)  [`reciprocal`](#reciprocal)  [`relationType`](#relationType)  [`relTab`](#relTab)  [`reverseName`](#reverseName)  `

Inherited from `PreinitObject` :  
` [`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)  [`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)  `

Inherited from `ModuleExecObject` :  
` [`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)  [`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)  [`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)  [`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)  `

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



` [`addRelation`](#addRelation)  [`inverselyRelatedTo`](#inverselyRelatedTo)  [`isInverselyRelated`](#isInverselyRelated)  [`isRelated`](#isRelated)  [`makeUnique`](#makeUnique)  [`relatedTo`](#relatedTo)  [`removeRelation`](#removeRelation)  `



Inherited from `ModuleExecObject` :  
` [`_execute`](../object/ModuleExecObject.html#_execute)  [`classExec`](../object/ModuleExecObject.html#classExec)  [`execute`](../object/ModuleExecObject.html#execute)  `

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="name"></span>

`name`

[relations.t](../file/relations.t.html)\[[24](../source/relations.t.html#24)\]



A string name that can be used to refer to this relation, e.g. 'loves'
or 'is the parent of' \[RELATIONS EXTENSION\]



<span id="reciprocal"></span>

`reciprocal`

[relations.t](../file/relations.t.html)\[[43](../source/relations.t.html#43)\]



Flag: are we a reciprocal relation (i.e. does x relation b imply b
relation x)? Note that only oneToOne and manyToMany relations can be
reciprocal. \[RELATIONS EXTENSION\]



<span id="relationType"></span>

`relationType`

[relations.t](../file/relations.t.html)\[[36](../source/relations.t.html#36)\]



The type of relation we are; this can be one of oneToOne, oneToMany,
manyToOne or manyToMany. \[RELATIONS EXTENSION\]



<span id="relTab"></span>

`relTab`

[relations.t](../file/relations.t.html)\[[50](../source/relations.t.html#50)\]



A LookupTable to hold data about the items related via this relation.
This is maintained by the library code and shouldn't normally be
directly accessed via game code. \[RELATIONS EXTENSION\]



<span id="reverseName"></span>

`reverseName`

[relations.t](../file/relations.t.html)\[[30](../source/relations.t.html#30)\]



A string name that can be used to refer to this relation in reverse,
e.g. 'loved by' or 'is a child of' \[RELATIONS EXTENSION\]



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="addRelation"></span>

`addRelation (objs)`

[relations.t](../file/relations.t.html)\[[119](../source/relations.t.html#119)\]



Make two objects related via this relation. The objs should be supplied
as a two-element list (e.g. \[a, b\]) such that a will be related to b.
\[RELATIONS EXTENSION\]



<span id="inverselyRelatedTo"></span>

`inverselyRelatedTo (a)`

[relations.t](../file/relations.t.html)\[[69](../source/relations.t.html#69)\]



Return a list of items inverselty related to a via this relation (e.g.
if this is loving relation, return a list of the people a is loved by.
\[RELATIONS EXTENSION\]



<span id="isInverselyRelated"></span>

`isInverselyRelated (a, b)`

[relations.t](../file/relations.t.html)\[[105](../source/relations.t.html#105)\]



Test whether a is inversely related to b via this relation. \[RELATIONS
EXTENSION\]



<span id="isRelated"></span>

`isRelated (a, b)`

[relations.t](../file/relations.t.html)\[[59](../source/relations.t.html#59)\]



Test whether a is related to b via this relation. \[RELATIONS
EXTENSION\]



<span id="makeUnique"></span>

`makeUnique (key, val)`

[relations.t](../file/relations.t.html)\[[298](../source/relations.t.html#298)\]



Ensure that key is the only entry in relTab with a value of \[val\].
\[RELATIONS EXTENSION\]



<span id="relatedTo"></span>

`relatedTo (a)`

[relations.t](../file/relations.t.html)\[[53](../source/relations.t.html#53)\]



Return a list of items related to a via this relation. \[RELATIONS
EXTENSION\]



<span id="removeRelation"></span>

`removeRelation (objs)`

[relations.t](../file/relations.t.html)\[[320](../source/relations.t.html#320)\]



Remove this relation between the items specified in objs, which should
be supplied as a two-element list \[a, b\], where a is the item that is
no longer related to b. \[RELATIONS EXTENSION\]





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


