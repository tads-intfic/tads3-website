[SpellingCorrection]{.title}[class]{.type}

[spelling.t](../file/spelling.t.html)\[[800](../source/spelling.t.html#800)\]

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
SpellingCorrection: Each time we attempt a spelling correction, we\'ll
save information on the attempt in one of these objects.

`class `**`SpellingCorrection`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`SpellingCorrection`**\
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

` `[`candidates`](#candidates)`  `[`corrections`](#corrections)`  `[`curCand`](#curCand)`  `[`oldToks`](#oldToks)`  `[`parseError`](#parseError)`  `[`unknown`](#unknown)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#candidates}

`candidates`

[spelling.t](../file/spelling.t.html)\[[823](../source/spelling.t.html#823)\]

::: desc
the candidate list - this is a list of token lists
:::

[]{#corrections}

`corrections`

[spelling.t](../file/spelling.t.html)\[[820](../source/spelling.t.html#820)\]

::: desc
the indices of the corrections so far, before this one
:::

[]{#curCand}

`curCand`

[spelling.t](../file/spelling.t.html)\[[826](../source/spelling.t.html#826)\]

::: desc
the current candidate index
:::

[]{#oldToks}

`oldToks`

[spelling.t](../file/spelling.t.html)\[[811](../source/spelling.t.html#811)\]

::: desc
the token list before the spelling correction
:::

[]{#parseError}

`parseError`

[spelling.t](../file/spelling.t.html)\[[829](../source/spelling.t.html#829)\]

::: desc
the ParseError that triggered the spelling correction attempt
:::

[]{#unknown}

`unknown`

[spelling.t](../file/spelling.t.html)\[[817](../source/spelling.t.html#817)\]

::: desc
is this a correction for an unknown word (as opposed to a word that\'s
in the dictionary, but still could be a typo)?
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (oldToks, candidates, corrections, unknown, err)`

[spelling.t](../file/spelling.t.html)\[[801](../source/spelling.t.html#801)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
