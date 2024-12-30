[finishOptionQuit]{.title}[object]{.type}

[misc.t](../file/misc.t.html)\[[1137](../source/misc.t.html#1137)\]

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
QUIT option for finishGame. The language-specific code should modify
this to specify the description and response keywords.

**`finishOptionQuit`**` :   `[`FinishOption`](../object/FinishOption.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`finishOptionQuit`**\
`         `[`FinishOption`](../object/FinishOption.html)\
`                 object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`desc`](#desc)`  `[`listOrder`](#listOrder)`  `[`responseChar`](#responseChar)`  `[`responseKeyword`](#responseKeyword)`  `

Inherited from `FinishOption` :\
` `[`listed`](../object/FinishOption.html#listed)`  `[`showScoreInFinish`](../object/FinishOption.html#showScoreInFinish)`  `

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

[]{#desc}

`desc`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[3691](../source/english.t.html#3691)\]

::: desc
*no description available*
:::

[]{#listOrder}

`listOrder`

[misc.t](../file/misc.t.html)\[[1146](../source/misc.t.html#1146)\]

::: desc
carry out the Quit action - this will signal a QuittingException, so
this call will never return
:::

[]{#responseChar}

`responseChar`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[3693](../source/english.t.html#3693)\]

::: desc
*no description available*
:::

[]{#responseKeyword}

`responseKeyword`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[3692](../source/english.t.html#3692)\]

::: desc
*no description available*
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#doOption}

`doOption ( )`[OVERRIDDEN]{.rem}

[misc.t](../file/misc.t.html)\[[1138](../source/misc.t.html#1138)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
