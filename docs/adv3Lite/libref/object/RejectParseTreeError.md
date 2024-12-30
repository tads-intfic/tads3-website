[RejectParseTreeError]{.title}[class]{.type}

[parser.t](../file/parser.t.html)\[[5162](../source/parser.t.html#5162)\]

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
Rejected parsing structure. There are certain structures that are hard
to eliminate in the grammar, but which we don\'t want to accept
semantically. This error can be thrown when such a structure is
encountered. This effectively rules out a parse tree. It\'s not a
displayable error; the parser simply rules out these structures.

`class `**`RejectParseTreeError`**` :   `[`CommandError`](../object/CommandError.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`RejectParseTreeError`**\
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

` `

Inherited from `CommandError` :\
` `[`cmd`](../object/CommandError.html#cmd)`  `[`errStage`](../object/CommandError.html#errStage)`  `

Inherited from `ParseError` :\
` `[`allowOnRespell`](../object/ParseError.html#allowOnRespell)`  `[`curable`](../object/ParseError.html#curable)`  `

Inherited from `Exception` :\
` `[`errmsg_`](../object/Exception.html#errmsg_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`display`](#display)`  `

Inherited from `CommandError` :\
` `[`construct`](../object/CommandError.html#construct)`  `

Inherited from `ParseError` :\
` `[`rankCorrection`](../object/ParseError.html#rankCorrection)`  `[`tryCuring`](../object/ParseError.html#tryCuring)`  `

Inherited from `Exception` :\
` `[`displayException`](../object/Exception.html#displayException)`  `[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)`  `[`showStackTrace`](../object/Exception.html#showStackTrace)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

*(none)* []{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#display}

`display ( )`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[5163](../source/parser.t.html#5163)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
