<span class="title">DerivedRelation</span><span class="type">object</span>

[relations.t](../file/relations.t.html)\[[400](../source/relations.t.html#400)\]

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

A DerivedRelation is one that doesn't maintain its own table of what it
related to what, but works out what is related to what on the basis of
some other relation(s) (e.g. a sibling relation might work by testing
for common parents).

REQUIRES THE RELATIONS EXTENSION

**`DerivedRelation`**` :   `[`Relation`](../object/Relation.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`DerivedRelation`**  
`         `[`Relation`](../object/Relation.html)  
`                 `[`PreinitObject`](../object/PreinitObject.html)  
`                         `[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

Inherited from `Relation` :  
` `[`name`](../object/Relation.html#name)`  `[`reciprocal`](../object/Relation.html#reciprocal)`  `[`relationType`](../object/Relation.html#relationType)`  `[`relTab`](../object/Relation.html#relTab)`  `[`reverseName`](../object/Relation.html#reverseName)`  `

Inherited from `PreinitObject` :  
` `[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)`  `[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)`  `

Inherited from `ModuleExecObject` :  
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`addRelation`](#addRelation)`  `[`inverselyRelatedTo`](#inverselyRelatedTo)`  `[`relatedTo`](#relatedTo)`  `[`removeRelation`](#removeRelation)`  `

Inherited from `Relation` :  
` `[`isInverselyRelated`](../object/Relation.html#isInverselyRelated)`  `[`isRelated`](../object/Relation.html#isRelated)`  `[`makeUnique`](../object/Relation.html#makeUnique)`  `

` `

Inherited from `ModuleExecObject` :  
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `[`execute`](../object/ModuleExecObject.html#execute)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="addRelation"></span>

`addRelation (objs)`<span class="rem">OVERRIDDEN</span>

[relations.t](../file/relations.t.html)\[[416](../source/relations.t.html#416)\]

<div class="desc">

By default we don't permit the direct addition of relationships via this
relation, since this is a relation dependent upon external conditions.

</div>

<span id="inverselyRelatedTo"></span>

`inverselyRelatedTo (a)`<span class="rem">OVERRIDDEN</span>

[relations.t](../file/relations.t.html)\[[409](../source/relations.t.html#409)\]

<div class="desc">

*no description available*

</div>

<span id="relatedTo"></span>

`relatedTo (a)`<span class="rem">OVERRIDDEN</span>

[relations.t](../file/relations.t.html)\[[407](../source/relations.t.html#407)\]

<div class="desc">

Instances need to override to provide a method that returns a list of
items related to a via this relationship, on the basis of whatever
criteria are appropriate.

</div>

<span id="removeRelation"></span>

`removeRelation (objs)`<span class="rem">OVERRIDDEN</span>

[relations.t](../file/relations.t.html)\[[427](../source/relations.t.html#427)\]

<div class="desc">

By default we don't permit the direct removal of relationships via this
relation, since this is a relation dependent upon external conditions.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
