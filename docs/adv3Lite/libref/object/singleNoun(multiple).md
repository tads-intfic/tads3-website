[singleNoun(multiple)]{.title}[grammar]{.type}

[grammar.t](../file/grammar.t.html)\[[227](../source/grammar.t.html#227)\]

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
A user could attempt to use a noun list with more than one entry (a
\"multi list\") where a single noun is required. This is a semantic
error rather than a grammatical error, so we define a grammar rule for
it (despite the obvious clash with the singleNoun name). However, we use
the BadListProduction for this match object - this ensures that we we
score it lower than a version with out a list, and that if we make it to
the resolution stage, we\'ll display a suitable error message.

`grammar `**[`singleNoun`](../object/singleNoun.html)`(multiple)`**` :   `[`BadListProduction`](../object/BadListProduction.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`singleNoun(multiple)`**\
`         `[`BadListProduction`](../object/BadListProduction.html)\
`                 `[`Production`](../object/Production.html)\
`                         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `

` `

Inherited from `Production` :\
` `[`determiner`](../object/Production.html#determiner)`  `[`nounPhraseRole`](../object/Production.html#nounPhraseRole)`  `[`npClass`](../object/Production.html#npClass)`  `[`parent`](../object/Production.html#parent)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `

Inherited from `BadListProduction` :\
` `[`build`](../object/BadListProduction.html#build)`  `

Inherited from `Production` :\
` `[`addNounListItem`](../object/Production.html#addNounListItem)`  `[`findAction`](../object/Production.html#findAction)`  `[`findChild`](../object/Production.html#findChild)`  `[`findParent`](../object/Production.html#findParent)`  `[`getNounPhraseRole`](../object/Production.html#getNounPhraseRole)`  `[`getText`](../object/Production.html#getText)`  `[`getTokens`](../object/Production.html#getTokens)`  `[`grammarInfoForBuild`](../object/Production.html#grammarInfoForBuild)`  `[`isChildOf`](../object/Production.html#isChildOf)`  `[`noteEndOfSentence`](../object/Production.html#noteEndOfSentence)`  `[`visitLiteral`](../object/Production.html#visitLiteral)`  `[`visitProd`](../object/Production.html#visitProd)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

*(none)* []{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

*(none)*

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::