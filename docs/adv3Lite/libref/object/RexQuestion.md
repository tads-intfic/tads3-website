[RexQuestion]{.title}[class]{.type}

[parser.t](../file/parser.t.html)\[[1157](../source/parser.t.html#1157)\]

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
A RexQuestion is a simple subclass of Question for parsing answers with
regular expressions.

`class `**`RexQuestion`**` :   `[`Question`](../object/Question.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`RexQuestion`**\
`         `[`Question`](../object/Question.html)\
`                 object`\
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

` `[`answerFunc`](#answerFunc)`  `[`answerPat`](#answerPat)`  `

Inherited from `Question` :\
` `[`answerTemplate`](../object/Question.html#answerTemplate)`  `[`priority`](../object/Question.html#priority)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `[`parseAnswer`](#parseAnswer)`  `

` `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#answerFunc}

`answerFunc`

[parser.t](../file/parser.t.html)\[[1196](../source/parser.t.html#1196)\]

::: desc
the callback to invoke on answering
:::

[]{#answerPat}

`answerPat`

[parser.t](../file/parser.t.html)\[[1193](../source/parser.t.html#1193)\]

::: desc
the regular expression pattern to match
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (pat, func)`

[parser.t](../file/parser.t.html)\[[1167](../source/parser.t.html#1167)\]

::: desc
Create - \'pat\' is the regular expression pattern, as either a string
or a RexPattern object. We\'ll parse an answer simply by matching it
against the regular expression; if we match, we\'ll take it as an
answer. \'func\' is a callback function that we\'ll call to carry out
the action of answering the question. We\'ll invoke this with one
argument giving the literal text of the input.
:::

[]{#parseAnswer}

`parseAnswer (toks, dict)`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[1173](../source/parser.t.html#1173)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
