[PronounError]{.title}[class]{.type}

[parser.t](../file/parser.t.html)\[[5350](../source/parser.t.html#5350)\]

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
Base class for resolution errors involving pronouns

`class `**`PronounError`**` :   `[`ResolutionError`](../object/ResolutionError.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`PronounError`**\
`         `[`ResolutionError`](../object/ResolutionError.html)\
`                 `[`ParseError`](../object/ParseError.html)\
`                         `[`Exception`](../object/Exception.html)\
`                                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`PronounError`**\
`         `[`AntecedentScopeError`](../object/AntecedentScopeError.html)\
`         `[`NoAntecedentError`](../object/NoAntecedentError.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`pronoun`](#pronoun)`  `

Inherited from `ResolutionError` :\
` `[`np`](../object/ResolutionError.html#np)`  `[`txt`](../object/ResolutionError.html#txt)`  `

Inherited from `ParseError` :\
` `[`allowOnRespell`](../object/ParseError.html#allowOnRespell)`  `[`curable`](../object/ParseError.html#curable)`  `[`errStage`](../object/ParseError.html#errStage)`  `

Inherited from `Exception` :\
` `[`errmsg_`](../object/Exception.html#errmsg_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `

Inherited from `ResolutionError` :\
` `[`rankCorrection`](../object/ResolutionError.html#rankCorrection)`  `

Inherited from `ParseError` :\
` `[`display`](../object/ParseError.html#display)`  `[`tryCuring`](../object/ParseError.html#tryCuring)`  `

Inherited from `Exception` :\
` `[`displayException`](../object/Exception.html#displayException)`  `[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)`  `[`showStackTrace`](../object/Exception.html#showStackTrace)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#pronoun}

`pronoun`

[parser.t](../file/parser.t.html)\[[5358](../source/parser.t.html#5358)\]

::: desc
the pronoun that caused the error, as a Pronoun object
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (np, pro)`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[5351](../source/parser.t.html#5351)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
