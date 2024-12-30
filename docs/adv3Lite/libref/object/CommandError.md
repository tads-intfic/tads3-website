[CommandError]{.title}[class]{.type}

[parser.t](../file/parser.t.html)\[[5137](../source/parser.t.html#5137)\]

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
A CommandError is an error in parsing that occurs within the build
process for a Command object.

`class `**`CommandError`**` :   `[`ParseError`](../object/ParseError.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`CommandError`**\
`         `[`ParseError`](../object/ParseError.html)\
`                 `[`Exception`](../object/Exception.html)\
`                         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`CommandError`**\
`         `[`EmptyNounError`](../object/EmptyNounError.html)\
`         `[`RejectParseTreeError`](../object/RejectParseTreeError.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`cmd`](#cmd)`  `[`errStage`](#errStage)`  `

Inherited from `ParseError` :\
` `[`allowOnRespell`](../object/ParseError.html#allowOnRespell)`  `[`curable`](../object/ParseError.html#curable)`  `

Inherited from `Exception` :\
` `[`errmsg_`](../object/Exception.html#errmsg_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `

Inherited from `ParseError` :\
` `[`display`](../object/ParseError.html#display)`  `[`rankCorrection`](../object/ParseError.html#rankCorrection)`  `[`tryCuring`](../object/ParseError.html#tryCuring)`  `

Inherited from `Exception` :\
` `[`displayException`](../object/Exception.html#displayException)`  `[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)`  `[`showStackTrace`](../object/Exception.html#showStackTrace)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#cmd}

`cmd`

[parser.t](../file/parser.t.html)\[[5145](../source/parser.t.html#5145)\]

::: desc
the Command object where the error occurred
:::

[]{#errStage}

`errStage`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[5152](../source/parser.t.html#5152)\]

::: desc
these errors occur once we have a valid predicate structure, so we\'re
in stage 2 of the parsing when we encounter an error of this type
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (cmd)`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[5138](../source/parser.t.html#5138)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
