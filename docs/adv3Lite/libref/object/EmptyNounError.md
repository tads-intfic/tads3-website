[EmptyNounError]{.title}[class]{.type}

[parser.t](../file/parser.t.html)\[[5178](../source/parser.t.html#5178)\],
[newbie.t](../file/newbie.t.html)\[[343](../source/newbie.t.html#343)\]

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
Empty noun slot error. This occurs when there are no noun phrases in a
functional slot in the predicate (e.g., when the player types \"TAKE\"
without a direct object).

`class `**`EmptyNounError`**` :   `[`CommandError`](../object/CommandError.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`EmptyNounError`**\
`         `[`CommandError`](../object/CommandError.html)\
`                 `[`ParseError`](../object/ParseError.html)\
`                         `[`Exception`](../object/Exception.html)\
`                                 object`\
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

` `[`curable`](#curable)`  `

Inherited from `CommandError` :\
` `[`cmd`](../object/CommandError.html#cmd)`  `[`errStage`](../object/CommandError.html#errStage)`  `

Inherited from `ParseError` :\
` `[`allowOnRespell`](../object/ParseError.html#allowOnRespell)`  `

Inherited from `Exception` :\
` `[`errmsg_`](../object/Exception.html#errmsg_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `[`display`](#display)`  `[`tryCuring`](#tryCuring)`  `

` `

Inherited from `ParseError` :\
` `[`rankCorrection`](../object/ParseError.html#rankCorrection)`  `

Inherited from `Exception` :\
` `[`displayException`](../object/Exception.html#displayException)`  `[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)`  `[`showStackTrace`](../object/Exception.html#showStackTrace)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#curable}

`curable`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[5220](../source/parser.t.html#5220)\]

::: desc
we can cure by asking the player for the missing noun phrase
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (cmd, role)`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[5179](../source/parser.t.html#5179)\]

::: desc
*no description available*
:::

[]{#display}

`display ( )`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[5186](../source/parser.t.html#5186)\],
[newbie.t](../file/newbie.t.html)\[[344](../source/newbie.t.html#344)\]

::: desc
our message is a missing noun query (e.g., \"What do want to open?\")
:::

[]{#tryCuring}

`tryCuring (toks, dict)`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[5195](../source/parser.t.html#5195)\]

::: desc
Try curing the error. After a missing noun query, the player can respond
with a simple noun phrase answering the question.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
