[LocationPrepProduction]{.title}[class]{.type}

[parser.t](../file/parser.t.html)\[[4374](../source/parser.t.html#4374)\]

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
A LocationPrepProduction is a special Production type for phrases that
encode the preposition of a locational phrase. This is only needed in
languages that use prepositional grammar to express location
relationships. For languages that use noun case inflection, the
relationship will have to be inferred from the case grammar of the noun
phrase (such as noun affixes or articles), and the noun phrase
production will have to set the locType in the LocationalProduction.

Set the locType property to the LocType object corresponding to the
location relationship of the preposition.

`class `**`LocationPrepProduction`**` :   `[`Production`](../object/Production.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`LocationPrepProduction`**\
`         `[`Production`](../object/Production.html)\
`                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`LocationPrepProduction`**\
`         `[`locationPrep(from)`](../object/locationPrep(from).html)\
`         `[`locationPrep(in)`](../object/locationPrep(in).html)\
`         `[`locationPrep(on)`](../object/locationPrep(on).html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`locType`](#locType)`  `

Inherited from `Production` :\
` `[`determiner`](../object/Production.html#determiner)`  `[`nounPhraseRole`](../object/Production.html#nounPhraseRole)`  `[`npClass`](../object/Production.html#npClass)`  `[`parent`](../object/Production.html#parent)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`build`](#build)`  `

Inherited from `Production` :\
` `[`addNounListItem`](../object/Production.html#addNounListItem)`  `[`findAction`](../object/Production.html#findAction)`  `[`findChild`](../object/Production.html#findChild)`  `[`findParent`](../object/Production.html#findParent)`  `[`getNounPhraseRole`](../object/Production.html#getNounPhraseRole)`  `[`getText`](../object/Production.html#getText)`  `[`getTokens`](../object/Production.html#getTokens)`  `[`grammarInfoForBuild`](../object/Production.html#grammarInfoForBuild)`  `[`isChildOf`](../object/Production.html#isChildOf)`  `[`noteEndOfSentence`](../object/Production.html#noteEndOfSentence)`  `[`visitLiteral`](../object/Production.html#visitLiteral)`  `[`visitProd`](../object/Production.html#visitProd)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#locType}

`locType`

[parser.t](../file/parser.t.html)\[[4376](../source/parser.t.html#4376)\]

::: desc
our location relationship type, as a LocType object
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#build}

`build (cmd, np)`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[4382](../source/parser.t.html#4382)\]

::: desc
on building the production, set the locType in our LocationalProduction
parent
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
