[AmbiguousError]{.title}[class]{.type}

[parser.t](../file/parser.t.html)\[[5600](../source/parser.t.html#5600)\]

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
A noun phrase is ambiguous, so we\'ll have to ask for clarification.

`class `**`AmbiguousError`**` :   `[`ResolutionError`](../object/ResolutionError.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`AmbiguousError`**\
`         `[`ResolutionError`](../object/ResolutionError.html)\
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

` `[`allowOnRespell`](#allowOnRespell)`  `[`cmd`](#cmd)`  `[`curable`](#curable)`  `[`nameList`](#nameList)`  `

Inherited from `ResolutionError` :\
` `[`np`](../object/ResolutionError.html#np)`  `[`txt`](../object/ResolutionError.html#txt)`  `

Inherited from `ParseError` :\
` `[`errStage`](../object/ParseError.html#errStage)`  `

Inherited from `Exception` :\
` `[`errmsg_`](../object/Exception.html#errmsg_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `[`display`](#display)`  `[`tryCuring`](#tryCuring)`  `

Inherited from `ResolutionError` :\
` `[`rankCorrection`](../object/ResolutionError.html#rankCorrection)`  `

` `

Inherited from `Exception` :\
` `[`displayException`](../object/Exception.html#displayException)`  `[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)`  `[`showStackTrace`](../object/Exception.html#showStackTrace)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#allowOnRespell}

`allowOnRespell`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[5622](../source/parser.t.html#5622)\]

::: desc
Accept spelling corrections that trigger an ambiguous noun error. If we
find an ambiguous noun it means that we have valid overall verb syntax
\*and\* we have noun phrases that match in-scope objects - in fact, they
match too many objects. This is pretty good evidence that the respelling
is valid.
:::

[]{#cmd}

`cmd`

[parser.t](../file/parser.t.html)\[[5665](../source/parser.t.html#5665)\]

::: desc
the original Command that we were trying to resolve
:::

[]{#curable}

`curable`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[5629](../source/parser.t.html#5629)\]

::: desc
this is a curable error, since the player can fix the problem by
answering the disambiguation question
:::

[]{#nameList}

`nameList`

[parser.t](../file/parser.t.html)\[[5671](../source/parser.t.html#5671)\]

::: desc
The list of object names, with distinguisher information. This is the
same information returned from Distinguisher.getNames().
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (cmd, np, names)`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[5601](../source/parser.t.html#5601)\]

::: desc
*no description available*
:::

[]{#display}

`display ( )`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[5608](../source/parser.t.html#5608)\]

::: desc
*no description available*
:::

[]{#tryCuring}

`tryCuring (toks, dict)`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[5637](../source/parser.t.html#5637)\]

::: desc
Try curing the error. After an ambiguous noun error, the player can type
a partial noun phrase that clarifies which object was intended: a
distinguishing adjective, a locational phrase, a possessive, etc.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
