[VerbRule(WhereHelp)]{.title}[grammar]{.type}

[newbie.t](../file/newbie.t.html)\[[557](../source/newbie.t.html#557)\]

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

`VerbRule(WhereHelp)      `*`// original source text`*\
`grammar `**[`VerbRule`](../object/VerbRule.html)`(WhereHelp)`**` :   `[`VerbProduction`](../object/VerbProduction.html)`      `*`// after macro expansion`*
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`VerbRule(WhereHelp)`**\
`         `[`VerbProduction`](../object/VerbProduction.html)\
`                 `[`Production`](../object/Production.html)\
`                         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`action`](#action)`  `[`isActive`](#isActive)`  `[`priority`](#priority)`  `[`verbPhrase`](#verbPhrase)`  `

` `

Inherited from `Production` :\
` `[`determiner`](../object/Production.html#determiner)`  `[`nounPhraseRole`](../object/Production.html#nounPhraseRole)`  `[`npClass`](../object/Production.html#npClass)`  `[`parent`](../object/Production.html#parent)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `

Inherited from `VerbProduction` :\
` `[`answerMissing`](../object/VerbProduction.html#answerMissing)`  `[`build`](../object/VerbProduction.html#build)`  `[`missingRoleProd`](../object/VerbProduction.html#missingRoleProd)`  `[`visitProd`](../object/VerbProduction.html#visitProd)`  `

Inherited from `Production` :\
` `[`addNounListItem`](../object/Production.html#addNounListItem)`  `[`findAction`](../object/Production.html#findAction)`  `[`findChild`](../object/Production.html#findChild)`  `[`findParent`](../object/Production.html#findParent)`  `[`getNounPhraseRole`](../object/Production.html#getNounPhraseRole)`  `[`getText`](../object/Production.html#getText)`  `[`getTokens`](../object/Production.html#getTokens)`  `[`grammarInfoForBuild`](../object/Production.html#grammarInfoForBuild)`  `[`isChildOf`](../object/Production.html#isChildOf)`  `[`noteEndOfSentence`](../object/Production.html#noteEndOfSentence)`  `[`visitLiteral`](../object/Production.html#visitLiteral)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#action}

`action`

[newbie.t](../file/newbie.t.html)\[[564](../source/newbie.t.html#564)\]

::: desc
*no description available*
:::

[]{#isActive}

`isActive`[OVERRIDDEN]{.rem}

[newbie.t](../file/newbie.t.html)\[[573](../source/newbie.t.html#573)\]

::: desc
Don\'t match this grammar if the player char is in conversation, since
in that case the player may be attempting a valid conversational
command)
:::

[]{#priority}

`priority`[OVERRIDDEN]{.rem}

[newbie.t](../file/newbie.t.html)\[[566](../source/newbie.t.html#566)\]

::: desc
*no description available*
:::

[]{#verbPhrase}

`verbPhrase`

[newbie.t](../file/newbie.t.html)\[[565](../source/newbie.t.html#565)\]

::: desc
*no description available*
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
