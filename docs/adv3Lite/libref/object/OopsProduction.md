[OopsProduction]{.title}[class]{.type}

[parser.t](../file/parser.t.html)\[[4495](../source/parser.t.html#4495)\]

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
An OopsProduction is a subclass for the word list part of an OOPS
command. This must have a -\>toks\_ property that holds the sub-tree for
the literal token list of the correction.

`class `**`OopsProduction`**` :   `[`Production`](../object/Production.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`OopsProduction`**\
`         `[`Production`](../object/Production.html)\
`                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`OopsProduction`**\
`         `[`oopsPhrase(main)`](../object/oopsPhrase(main).html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `

Inherited from `Production` :\
` `[`determiner`](../object/Production.html#determiner)`  `[`nounPhraseRole`](../object/Production.html#nounPhraseRole)`  `[`npClass`](../object/Production.html#npClass)`  `[`parent`](../object/Production.html#parent)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`applyCorrection`](#applyCorrection)`  `[`build`](#build)`  `

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

[]{#applyCorrection}

`applyCorrection (prod, toks, typoIdx)`

[parser.t](../file/parser.t.html)\[[4500](../source/parser.t.html#4500)\]

::: desc
Class method: apply the correction for an OOPS command to an original
token list.
:::

[]{#build}

`build (cmd, np)`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[4514](../source/parser.t.html#4514)\]

::: desc
build the command
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
