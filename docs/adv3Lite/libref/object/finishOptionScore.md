[finishOptionScore]{.title}[object]{.type}

[misc.t](../file/misc.t.html)\[[1284](../source/misc.t.html#1284)\]

[Superclass\
Tree](#_SuperClassTree_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
Option to show the score in finishGame. This doesn\'t create a listed
option in the set of offered options, but rather is simply a flag to
finishGame() that the score should be announced along with the
end-of-game announcement message.

**`finishOptionScore`**` :   `[`FinishOption`](../object/FinishOption.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`finishOptionScore`**\
`         `[`FinishOption`](../object/FinishOption.html)\
`                 object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`listed`](#listed)`  `[`listOrder`](#listOrder)`  `[`showScoreInFinish`](#showScoreInFinish)`  `

Inherited from `FinishOption` :\
` `[`desc`](../object/FinishOption.html#desc)`  `[`responseChar`](../object/FinishOption.html#responseChar)`  `[`responseKeyword`](../object/FinishOption.html#responseKeyword)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`doOption`](#doOption)`  `

Inherited from `FinishOption` :\
` `[`responseMatches`](../object/FinishOption.html#responseMatches)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#listed}

`listed`[OVERRIDDEN]{.rem}

[misc.t](../file/misc.t.html)\[[1289](../source/misc.t.html#1289)\]

::: desc
this is not a listed option
:::

[]{#listOrder}

`listOrder`

[misc.t](../file/misc.t.html)\[[1294](../source/misc.t.html#1294)\]

::: desc
*no description available*
:::

[]{#showScoreInFinish}

`showScoreInFinish`[OVERRIDDEN]{.rem}

[misc.t](../file/misc.t.html)\[[1286](../source/misc.t.html#1286)\]

::: desc
show the score in the end-of-game announcement
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#doOption}

`doOption ( )`[OVERRIDDEN]{.rem}

[misc.t](../file/misc.t.html)\[[1292](../source/misc.t.html#1292)\]

::: desc
this option isn\'t selectable, so it has no effect
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
