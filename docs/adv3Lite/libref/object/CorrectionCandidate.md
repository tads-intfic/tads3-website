[CorrectionCandidate]{.title}[class]{.type}

[spelling.t](../file/spelling.t.html)\[[317](../source/spelling.t.html#317)\]

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
Spelling correction candidate. This tracks a modified token list with a
corrected word, to keep track of which word was corrected and how well
it ranks by our selection criteria.

`class `**`CorrectionCandidate`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`CorrectionCandidate`**\
`         object`\
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

` `[`editDist`](#editDist)`  `[`ranking`](#ranking)`  `[`replCnt`](#replCnt)`  `[`tokenList`](#tokenList)`  `[`wordIdx`](#wordIdx)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#editDist}

`editDist`

[spelling.t](../file/spelling.t.html)\[[337](../source/spelling.t.html#337)\]

::: desc
the edit distance between the original and corrected words
:::

[]{#ranking}

`ranking`

[spelling.t](../file/spelling.t.html)\[[334](../source/spelling.t.html#334)\]

::: desc
ranking
:::

[]{#replCnt}

`replCnt`

[spelling.t](../file/spelling.t.html)\[[340](../source/spelling.t.html#340)\]

::: desc
number of character replacements included in the edit distance
:::

[]{#tokenList}

`tokenList`

[spelling.t](../file/spelling.t.html)\[[331](../source/spelling.t.html#331)\]

::: desc
the corrected token list
:::

[]{#wordIdx}

`wordIdx`

[spelling.t](../file/spelling.t.html)\[[343](../source/spelling.t.html#343)\]

::: desc
the index of the corrected word
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (toks, dist, repl, idx, err)`

[spelling.t](../file/spelling.t.html)\[[318](../source/spelling.t.html#318)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
