[ActorResolutionError]{.title}[class]{.type}

[parser.t](../file/parser.t.html)\[[5300](../source/parser.t.html#5300)\]

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
ActorResolutionError - this is for resolution errors that are in the
context of what the target actor of the command (the addressee) can see.
These require the Command in addition to the noun phrase, since that
provides the target actor information.

`class `**`ActorResolutionError`**` :   `[`ResolutionError`](../object/ResolutionError.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`ActorResolutionError`**\
`         `[`ResolutionError`](../object/ResolutionError.html)\
`                 `[`ParseError`](../object/ParseError.html)\
`                         `[`Exception`](../object/Exception.html)\
`                                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`ActorResolutionError`**\
`         `[`InsufficientNounsError`](../object/InsufficientNounsError.html)\
`         `[`NoneInLocationError`](../object/NoneInLocationError.html)\
`         `[`NoneInOwnerError`](../object/NoneInOwnerError.html)\
`         `[`NoneWithContentsError`](../object/NoneWithContentsError.html)\
`         `[`UnmatchedNounError`](../object/UnmatchedNounError.html)\
`                 `[`AmbiguousMultiDefiniteError`](../object/AmbiguousMultiDefiniteError.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`cmd`](#cmd)`  `

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

[]{#cmd}

`cmd`

[parser.t](../file/parser.t.html)\[[5308](../source/parser.t.html#5308)\]

::: desc
the command that we were attempting to resolve
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (cmd, np)`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[5301](../source/parser.t.html#5301)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
