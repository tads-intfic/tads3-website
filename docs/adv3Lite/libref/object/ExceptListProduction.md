[ExceptListProduction]{.title}[class]{.type}

[parser.t](../file/parser.t.html)\[[4105](../source/parser.t.html#4105)\]

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
ExceptListProduction is a Production subclass for EXCEPT lists. This is
a slot in the grammar that holds a list of objects excepted from some
set, as in ALL BUT THE RED BOOK or THE COINS EXCEPT THE PENNIES.

`class `**`ExceptListProduction`**` :   `[`Production`](../object/Production.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`ExceptListProduction`**\
`         `[`Production`](../object/Production.html)\
`                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`ExceptListProduction`**\
`         `[`exceptList(main)`](../object/exceptList(main).html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`qualifiedNP`](#qualifiedNP)`  `

Inherited from `Production` :\
` `[`determiner`](../object/Production.html#determiner)`  `[`nounPhraseRole`](../object/Production.html#nounPhraseRole)`  `[`npClass`](../object/Production.html#npClass)`  `[`parent`](../object/Production.html#parent)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`addNounListItem`](#addNounListItem)`  `[`build`](#build)`  `

Inherited from `Production` :\
` `[`findAction`](../object/Production.html#findAction)`  `[`findChild`](../object/Production.html#findChild)`  `[`findParent`](../object/Production.html#findParent)`  `[`getNounPhraseRole`](../object/Production.html#getNounPhraseRole)`  `[`getText`](../object/Production.html#getText)`  `[`getTokens`](../object/Production.html#getTokens)`  `[`grammarInfoForBuild`](../object/Production.html#grammarInfoForBuild)`  `[`isChildOf`](../object/Production.html#isChildOf)`  `[`noteEndOfSentence`](../object/Production.html#noteEndOfSentence)`  `[`visitLiteral`](../object/Production.html#visitLiteral)`  `[`visitProd`](../object/Production.html#visitProd)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#qualifiedNP}

`qualifiedNP`

[parser.t](../file/parser.t.html)\[[4144](../source/parser.t.html#4144)\]

::: desc
the noun phrase we qualify
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#addNounListItem}

`addNounListItem (cmd, prod)`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[4137](../source/parser.t.html#4137)\]

::: desc
Add a noun list item. List items within our sub-tree go into the
exclusion list for the parent noun phrase that we qualify.
:::

[]{#build}

`build (cmd, np)`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[4114](../source/parser.t.html#4114)\]

::: desc
Build this phrase. Our sub-tree is a noun list that\'s to be excluded
from the current noun phrase under construction, \'np\'; this exclusion
list is a type of qualifier. So, we (a) start an exception qualifier for
\'np\', (b) make that list the current noun phrase within our sub-tree,
then (c) do the normal work to build out our sub-tree, but using the new
context.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
