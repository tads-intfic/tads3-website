[GrammarAltInfo]{.title}[class]{.type}

[gramprod.t](../file/gramprod.t.html)\[[43](../source/gramprod.t.html#43)\]

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
Rule alternative descriptor. This describes one alternative in a grammar
production. An alternative is one complete list of matchable tokens.

In a \'grammar\' statement, alternatives are delimited by \'\|\' symbols
at the top level. Each group of tokens set off by \'\|\' symbols is one
alternative.

When \'\|\' symbols are grouped with parentheses in a \'grammar\'
statement, the compiler \"flattens\" the grouping by expanding out the
parenthesized groups until it has entirely top-level alternatives. So,
at the level of a GrammarProd object, there\'s no such thing as
parentheses or nested \'\|\' symbols.

`class `**`GrammarAltInfo`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`GrammarAltInfo`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

*(none)* []{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`gramBadness`](#gramBadness)`  `[`gramMatchObj`](#gramMatchObj)`  `[`gramTokens`](#gramTokens)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#gramBadness}

`gramBadness`

[gramprod.t](../file/gramprod.t.html)\[[66](../source/gramprod.t.html#66)\]

::: desc
The \'badness\' value associated with the alternative. A value of zero
means that there\'s no badness.
:::

[]{#gramMatchObj}

`gramMatchObj`

[gramprod.t](../file/gramprod.t.html)\[[73](../source/gramprod.t.html#73)\]

::: desc
the \"match object\" class - this is the class that
GrammarProd.parseTokens() instantiates to represent a match to this
alternative in the match list that the method returns
:::

[]{#gramTokens}

`gramTokens`

[gramprod.t](../file/gramprod.t.html)\[[80](../source/gramprod.t.html#80)\]

::: desc
The token descriptor list. This is a list of zero or more
GrammarAltTokInfo objects describing the tokens making up this rule.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (score, badness, matchObj, toks, ...)`

[gramprod.t](../file/gramprod.t.html)\[[54](../source/gramprod.t.html#54)\]

::: desc
Constructor. GrammarProd.getGrammarInfo() calls this once for each
alternative making up the production, passing in the values that define
the alternative. Note that we have a \'\...\' in our argument list so
that we\'ll be compatible with any future GrammarProd versions that add
additional arguments - we won\'t do anything with the extra arguments,
but we\'ll harmlessly ignore them, so code compiled with this library
version will continue to work correctly.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
