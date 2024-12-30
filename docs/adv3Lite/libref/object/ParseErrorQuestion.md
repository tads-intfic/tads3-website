[ParseErrorQuestion]{.title}[class]{.type}

[parser.t](../file/parser.t.html)\[[1202](../source/parser.t.html#1202)\]

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
An ErrorQuestion is a subclass of Question for curable parsing errors.

`class `**`ParseErrorQuestion`**` :   `[`Question`](../object/Question.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`ParseErrorQuestion`**\
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

` `[`err`](#err)`  `[`priority`](#priority)`  `

Inherited from `Question` :\
` `[`answerTemplate`](../object/Question.html#answerTemplate)`  `

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

[]{#err}

`err`

[parser.t](../file/parser.t.html)\[[1216](../source/parser.t.html#1216)\]

::: desc
the curable ParseError that posed the question
:::

[]{#priority}

`priority`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[1224](../source/parser.t.html#1224)\]

::: desc
Should we prioritize interpreting player input to a parser query as a
response to that query over interpreting it as a nea command (where the
latter is possible)? By default we do (since this seems more likely to
reflect player intention in this case), although game code can override
if desired.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (err)`

[parser.t](../file/parser.t.html)\[[1203](../source/parser.t.html#1203)\]

::: desc
*no description available*
:::

[]{#parseAnswer}

`parseAnswer (toks, dict)`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[1209](../source/parser.t.html#1209)\]

::: desc
remember the ParseError object
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
