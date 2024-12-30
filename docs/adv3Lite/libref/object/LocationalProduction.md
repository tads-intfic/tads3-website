[LocationalProduction]{.title}[class]{.type}

[parser.t](../file/parser.t.html)\[[4312](../source/parser.t.html#4312)\]

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
LocationalProduction is a subclass of Production for phrases that
involve locational qualifiers, as in \"the book on the table\".

Each grammar rule of this type needs to define two special \'-\>\'
associations in its template:

cont\_ is the locational qualifier. This is also just an ordinary noun
phrase. This is the \"the table\" part in \"the book on the table\".

prep\_ is the preposition production. This should be \*or\* contain a
LocationTypeProduction match, which tells us the type of containment
relationship specified by the grammar. \*Alternatively\*, you can define
locType directly on this production. This specifies a LocType object
giving the containment relationship.

`class `**`LocationalProduction`**` :   `[`Production`](../object/Production.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`LocationalProduction`**\
`         `[`Production`](../object/Production.html)\
`                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`LocationalProduction`**\
`         `[`disambigPhrase(locational)`](../object/disambigPhrase(locational).html)\
`         `[`indetPluralNounPhrase(locational)`](../object/indetPluralNounPhrase(locational).html)\
`         `[`indetPluralOnlyNounPhrase(locational)`](../object/indetPluralOnlyNounPhrase(locational).html)\
`         `[`indetSingularNounPhrase(locational)`](../object/indetSingularNounPhrase(locational).html)\
`         `[`qualifiedPluralNounPhrase(theOnesIn)`](../object/qualifiedPluralNounPhrase(theOnesIn).html)\
`         `[`qualifiedSingularNounPhrase(anyOneIn)`](../object/qualifiedSingularNounPhrase(anyOneIn).html)\
`         `[`qualifiedSingularNounPhrase(theOneIn)`](../object/qualifiedSingularNounPhrase(theOneIn).html)\
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

` `[`visitProd`](#visitProd)`  `

Inherited from `Production` :\
` `[`addNounListItem`](../object/Production.html#addNounListItem)`  `[`build`](../object/Production.html#build)`  `[`findAction`](../object/Production.html#findAction)`  `[`findChild`](../object/Production.html#findChild)`  `[`findParent`](../object/Production.html#findParent)`  `[`getNounPhraseRole`](../object/Production.html#getNounPhraseRole)`  `[`getText`](../object/Production.html#getText)`  `[`getTokens`](../object/Production.html#getTokens)`  `[`grammarInfoForBuild`](../object/Production.html#grammarInfoForBuild)`  `[`isChildOf`](../object/Production.html#isChildOf)`  `[`noteEndOfSentence`](../object/Production.html#noteEndOfSentence)`  `[`visitLiteral`](../object/Production.html#visitLiteral)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#locType}

`locType`

[parser.t](../file/parser.t.html)\[[4359](../source/parser.t.html#4359)\]

::: desc
Our location type. This is a LocType object giving the location
relationship specified by this locational phrase. For languages that
special locational phrases prepositionally, this will be set by the
LocationPrepProduction in our sub-tree. For languages that use case
inflection to specify the type of relationship, this must be set by the
noun phrase sub-tree instead.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#visitProd}

`visitProd (cmd, np, prod)`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[4319](../source/parser.t.html#4319)\]

::: desc
Visit a production. When we process the locational qualifier phrase,
we\'ll build out the sub-tree in the context of a new NounPhrase, which
we attach as a locational qualifier to the encompassing noun phrase
under construction.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
