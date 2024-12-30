[TokErrorNoMatch]{.title}[class]{.type}

[tok.t](../file/tok.t.html)\[[35](../source/tok.t.html#35)\]

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
no match for token

`class `**`TokErrorNoMatch`**` :   `[`TokenizerError`](../object/TokenizerError.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`TokErrorNoMatch`**\
`         `[`TokenizerError`](../object/TokenizerError.html)\
`                 `[`Exception`](../object/Exception.html)\
`                         object`\
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

` `[`curChar_`](#curChar_)`  `[`remainingStr_`](#remainingStr_)`  `

` `

Inherited from `Exception` :\
` `[`errmsg_`](../object/Exception.html#errmsg_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `[`displayException`](#displayException)`  `

` `

Inherited from `Exception` :\
` `[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)`  `[`showStackTrace`](../object/Exception.html#showStackTrace)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#curChar_}

`curChar_`

[tok.t](../file/tok.t.html)\[[59](../source/tok.t.html#59)\]

::: desc
current character (first character of remainingStr\_)
:::

[]{#remainingStr_}

`remainingStr_`

[tok.t](../file/tok.t.html)\[[56](../source/tok.t.html#56)\]

::: desc
The remainder of the string. This is the part that couldn\'t be matched;
we were successful in matching up to this point.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (str)`[OVERRIDDEN]{.rem}

[tok.t](../file/tok.t.html)\[[36](../source/tok.t.html#36)\]

::: desc
*no description available*
:::

[]{#displayException}

`displayException ( )`[OVERRIDDEN]{.rem}

[tok.t](../file/tok.t.html)\[[49](../source/tok.t.html#49)\]

::: desc
for convenience, separately remember the single character that we don\'t
recognize - this is simply the first character of the rest of the line
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
