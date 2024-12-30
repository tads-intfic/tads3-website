[gameInfoWriter]{.title}[object]{.type}

[gameinfo.t](../file/gameinfo.t.html)\[[71](../source/gameinfo.t.html#71)\]

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
TADS GameInfo writer

**`gameInfoWriter`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`gameInfoWriter`**\
`         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `

*(none)* []{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`getGameInfoToday`](#getGameInfoToday)`  `[`writeGameInfo`](#writeGameInfo)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

*(none)* []{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#getGameInfoToday}

`getGameInfoToday ( )`

[gameinfo.t](../file/gameinfo.t.html)\[[100](../source/gameinfo.t.html#100)\]

::: desc
Get today\'s date as a string in the format YYYY-MM-DD. This can be used
as a simple way of keeping the release date in the game information up
to date with the latest compilation.
:::

[]{#writeGameInfo}

`writeGameInfo (tab, fname)`

[gameinfo.t](../file/gameinfo.t.html)\[[77](../source/gameinfo.t.html#77)\]

::: desc
Write the game information from the given LookupTable to the given file.
Each key/value pair in the LookupTable gives the GameInfo key and the
corresponding value string for that key.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
