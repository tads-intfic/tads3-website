[firstCommandPhrase(askTellActorTo)]{.title}[grammar]{.type}

[grammar.t](../file/grammar.t.html)\[[61](../source/grammar.t.html#61)\]

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
*no description available*

`grammar `**[`firstCommandPhrase`](../object/firstCommandPhrase.html)`(askTellActorTo)`**` :   `[`CommandProduction`](../object/CommandProduction.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`firstCommandPhrase(askTellActorTo)`**\
`         `[`CommandProduction`](../object/CommandProduction.html)\
`                 `[`Production`](../object/Production.html)\
`                         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`actorPerson`](#actorPerson)`  `

Inherited from `CommandProduction` :\
` `[`actor_`](../object/CommandProduction.html#actor_)`  `

Inherited from `Production` :\
` `[`determiner`](../object/Production.html#determiner)`  `[`nounPhraseRole`](../object/Production.html#nounPhraseRole)`  `[`npClass`](../object/Production.html#npClass)`  `[`parent`](../object/Production.html#parent)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `

Inherited from `CommandProduction` :\
` `[`build`](../object/CommandProduction.html#build)`  `[`noteEndOfSentence`](../object/CommandProduction.html#noteEndOfSentence)`  `[`visitProd`](../object/CommandProduction.html#visitProd)`  `

Inherited from `Production` :\
` `[`addNounListItem`](../object/Production.html#addNounListItem)`  `[`findAction`](../object/Production.html#findAction)`  `[`findChild`](../object/Production.html#findChild)`  `[`findParent`](../object/Production.html#findParent)`  `[`getNounPhraseRole`](../object/Production.html#getNounPhraseRole)`  `[`getText`](../object/Production.html#getText)`  `[`getTokens`](../object/Production.html#getTokens)`  `[`grammarInfoForBuild`](../object/Production.html#grammarInfoForBuild)`  `[`isChildOf`](../object/Production.html#isChildOf)`  `[`visitLiteral`](../object/Production.html#visitLiteral)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#actorPerson}

`actorPerson`[OVERRIDDEN]{.rem}

[grammar.t](../file/grammar.t.html)\[[72](../source/grammar.t.html#72)\]

::: desc
We\'re giving orders to the actor in the third person, because we\'re
doing it indirectly. The actual imperative predicate here is the TELL
TO: this addresses the parser/narrator, who passes the command along to
the actor at our request.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

*(none)*

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
