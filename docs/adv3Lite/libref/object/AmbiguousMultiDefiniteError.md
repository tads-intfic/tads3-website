[AmbiguousMultiDefiniteError]{.title}[class]{.type}

[parser.t](../file/parser.t.html)\[[5674](../source/parser.t.html#5674)\]

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
*no description available*

`class `**`AmbiguousMultiDefiniteError`**` :   `[`UnmatchedNounError`](../object/UnmatchedNounError.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`AmbiguousMultiDefiniteError`**\
`         `[`UnmatchedNounError`](../object/UnmatchedNounError.html)\
`                 `[`ActorResolutionError`](../object/ActorResolutionError.html)\
`                         `[`ResolutionError`](../object/ResolutionError.html)\
`                                 `[`ParseError`](../object/ParseError.html)\
`                                         `[`Exception`](../object/Exception.html)\
`                                                 object`\
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

` `

Inherited from `ActorResolutionError` :\
` `[`cmd`](../object/ActorResolutionError.html#cmd)`  `

Inherited from `ResolutionError` :\
` `[`np`](../object/ResolutionError.html#np)`  `[`txt`](../object/ResolutionError.html#txt)`  `

Inherited from `ParseError` :\
` `[`allowOnRespell`](../object/ParseError.html#allowOnRespell)`  `[`errStage`](../object/ParseError.html#errStage)`  `

Inherited from `Exception` :\
` `[`errmsg_`](../object/Exception.html#errmsg_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`display`](#display)`  `

` `

Inherited from `ActorResolutionError` :\
` `[`construct`](../object/ActorResolutionError.html#construct)`  `

Inherited from `ResolutionError` :\
` `[`rankCorrection`](../object/ResolutionError.html#rankCorrection)`  `

Inherited from `ParseError` :\
` `[`tryCuring`](../object/ParseError.html#tryCuring)`  `

Inherited from `Exception` :\
` `[`displayException`](../object/Exception.html#displayException)`  `[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)`  `[`showStackTrace`](../object/Exception.html#showStackTrace)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#curable}

`curable`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[5686](../source/parser.t.html#5686)\]

::: desc
this is not really curable, but we need to say it is curable so that our
custom message is displayed. Would like to find a way to do this where
curable=nil
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#display}

`display ( )`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[5675](../source/parser.t.html#5675)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
