[NounListProduction]{.title}[class]{.type}

[parser.t](../file/parser.t.html)\[[4056](../source/parser.t.html#4056)\]

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
NounListProduction is a special Production subclass for lists including
more than one noun.

Each instance should have two \'-\>\' properties: np1\_ and np2\_. These
should be set to the match sub-tree for the first and second elements of
the noun list (respectively). Note that we assume there are only two
elements in each list grammar item - this isn\'t because we want to
limit noun lists to two elements, but rather because we assume that the
grammars for longer lists will be constructed recursively out of
two-element nodes: A, B, C, D becomes something along the lines of
List(a, List(b, List(c, List(d)))).

`class `**`NounListProduction`**` :   `[`Production`](../object/Production.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`NounListProduction`**\
`         `[`Production`](../object/Production.html)\
`                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`NounListProduction`**\
`         `[`disambigList(list)`](../object/disambigList(list).html)\
`         `[`disambigOrdinalList(head)`](../object/disambigOrdinalList(head).html)\
`         `[`disambigOrdinalList(tail)`](../object/disambigOrdinalList(tail).html)\
`         `[`exceptListBody(list)`](../object/exceptListBody(list).html)\
`         `[`nonTerminalNounMultiList(multi)`](../object/nonTerminalNounMultiList(multi).html)\
`         `[`nonTerminalNounMultiList(pair)`](../object/nonTerminalNounMultiList(pair).html)\
`         `[`nounMultiList(multi)`](../object/nounMultiList(multi).html)\
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

` `[`visitProd`](#visitProd)`  `

Inherited from `Production` :\
` `[`addNounListItem`](../object/Production.html#addNounListItem)`  `[`build`](../object/Production.html#build)`  `[`findAction`](../object/Production.html#findAction)`  `[`findChild`](../object/Production.html#findChild)`  `[`findParent`](../object/Production.html#findParent)`  `[`getNounPhraseRole`](../object/Production.html#getNounPhraseRole)`  `[`getText`](../object/Production.html#getText)`  `[`getTokens`](../object/Production.html#getTokens)`  `[`grammarInfoForBuild`](../object/Production.html#grammarInfoForBuild)`  `[`isChildOf`](../object/Production.html#isChildOf)`  `[`noteEndOfSentence`](../object/Production.html#noteEndOfSentence)`  `[`visitLiteral`](../object/Production.html#visitLiteral)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

*(none)* []{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#visitProd}

`visitProd (cmd, np, prod)`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[4062](../source/parser.t.html#4062)\]

::: desc
Visit a production during the build process. When parsing the second
element, we\'ll add a new NounPhrase to the current slot\'s list.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
