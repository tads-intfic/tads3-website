[DerivedRelation]{.title}[object]{.type}

[relations.t](../file/relations.t.html)\[[400](../source/relations.t.html#400)\]

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
A DerivedRelation is one that doesn\'t maintain its own table of what it
related to what, but works out what is related to what on the basis of
some other relation(s) (e.g. a sibling relation might work by testing
for common parents).

REQUIRES THE RELATIONS EXTENSION

**`DerivedRelation`**` :   `[`Relation`](../object/Relation.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`DerivedRelation`**\
`         `[`Relation`](../object/Relation.html)\
`                 `[`PreinitObject`](../object/PreinitObject.html)\
`                         `[`ModuleExecObject`](../object/ModuleExecObject.html)\
`                                 object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `

Inherited from `Relation` :\
` `[`name`](../object/Relation.html#name)`  `[`reciprocal`](../object/Relation.html#reciprocal)`  `[`relationType`](../object/Relation.html#relationType)`  `[`relTab`](../object/Relation.html#relTab)`  `[`reverseName`](../object/Relation.html#reverseName)`  `

Inherited from `PreinitObject` :\
` `[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)`  `[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)`  `

Inherited from `ModuleExecObject` :\
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`addRelation`](#addRelation)`  `[`inverselyRelatedTo`](#inverselyRelatedTo)`  `[`relatedTo`](#relatedTo)`  `[`removeRelation`](#removeRelation)`  `

Inherited from `Relation` :\
` `[`isInverselyRelated`](../object/Relation.html#isInverselyRelated)`  `[`isRelated`](../object/Relation.html#isRelated)`  `[`makeUnique`](../object/Relation.html#makeUnique)`  `

` `

Inherited from `ModuleExecObject` :\
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `[`execute`](../object/ModuleExecObject.html#execute)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

*(none)* []{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#addRelation}

`addRelation (objs)`[OVERRIDDEN]{.rem}

[relations.t](../file/relations.t.html)\[[416](../source/relations.t.html#416)\]

::: desc
By default we don\'t permit the direct addition of relationships via
this relation, since this is a relation dependent upon external
conditions.
:::

[]{#inverselyRelatedTo}

`inverselyRelatedTo (a)`[OVERRIDDEN]{.rem}

[relations.t](../file/relations.t.html)\[[409](../source/relations.t.html#409)\]

::: desc
*no description available*
:::

[]{#relatedTo}

`relatedTo (a)`[OVERRIDDEN]{.rem}

[relations.t](../file/relations.t.html)\[[407](../source/relations.t.html#407)\]

::: desc
Instances need to override to provide a method that returns a list of
items related to a via this relationship, on the basis of whatever
criteria are appropriate.
:::

[]{#removeRelation}

`removeRelation (objs)`[OVERRIDDEN]{.rem}

[relations.t](../file/relations.t.html)\[[427](../source/relations.t.html#427)\]

::: desc
By default we don\'t permit the direct removal of relationships via this
relation, since this is a relation dependent upon external conditions.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
