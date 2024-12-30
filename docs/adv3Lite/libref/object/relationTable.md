[relationTable]{.title}[object]{.type}

[relations.t](../file/relations.t.html)\[[439](../source/relations.t.html#439)\]

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
Used internally by the RELATIONS EXTENSION to keep track of which
relations correspond to which (string) names.

**`relationTable`**` :   `[`PreinitObject`](../object/PreinitObject.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`relationTable`**\
`         `[`PreinitObject`](../object/PreinitObject.html)\
`                 `[`ModuleExecObject`](../object/ModuleExecObject.html)\
`                         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`nameTab`](#nameTab)`  `

Inherited from `PreinitObject` :\
` `[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)`  `[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)`  `

Inherited from `ModuleExecObject` :\
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`execute`](#execute)`  `[`getRelation`](#getRelation)`  `[`sayNoSuchRelation`](#sayNoSuchRelation)`  `

` `

Inherited from `ModuleExecObject` :\
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#nameTab}

`nameTab`

[relations.t](../file/relations.t.html)\[[446](../source/relations.t.html#446)\]

::: desc
LookupTable to restore data relating names to relations. Each key is a
string containing a relation name. Each corresponding value is a
two-item list \[rel, type\] where rel is the name of the corresponding
relation object and type is either normalRelation or reverseRelation.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#execute}

`execute ( )`[OVERRIDDEN]{.rem}

[relations.t](../file/relations.t.html)\[[452](../source/relations.t.html#452)\]

::: desc
Go through all the relations in the game and add their names and
reverseNames to our nameTab.
:::

[]{#getRelation}

`getRelation (rel)`

[relations.t](../file/relations.t.html)\[[470](../source/relations.t.html#470)\]

::: desc
Get the relation corresponding to a string version of its name. Return a
two-item list \[rel, type\] where rel is the name of the corresponding
relation object and type is either normalRelation or reverseRelation. \*
:::

[]{#sayNoSuchRelation}

`sayNoSuchRelation (rel)`

[relations.t](../file/relations.t.html)\[[485](../source/relations.t.html#485)\]

::: desc
Message to display when there\'s no relation in our nameTab
corresponding to the name rel.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
