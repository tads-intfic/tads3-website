[sessionHintStatus]{.title}[object]{.type}

[hintsys.t](../file/hintsys.t.html)\[[706](../source/hintsys.t.html#706)\]

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
We keep several pieces of information about the status of the hint
system. Some of it pertains to the current session, independently of any
saving/restoring/restarting, so we keep this information in a transient
object. Some pertains to the present game, so we keep it in an ordinary
persistent object, so that it\'s saved and restored along with the game.

`transient `**`sessionHintStatus`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`sessionHintStatus`**\
`         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`hintsDisabled`](#hintsDisabled)`  `[`hintWarning`](#hintWarning)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `

*(none)* []{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#hintsDisabled}

`hintsDisabled`

[hintsys.t](../file/hintsys.t.html)\[[711](../source/hintsys.t.html#711)\]

::: desc
flag: we\'ve disabled hints for this session
:::

[]{#hintWarning}

`hintWarning`

[hintsys.t](../file/hintsys.t.html)\[[708](../source/hintsys.t.html#708)\]

::: desc
flag: we\'ve warned about the hint system in this session
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

*(none)*

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
