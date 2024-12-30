[DebugCtl]{.title}[object]{.type}

[debug.t](../file/debug.t.html)\[[19](../source/debug.t.html#19)\]

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
We only include any of the code in this module in debug builds

**`DebugCtl`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`DebugCtl`**\
`         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`all`](#all)`  `[`enabled`](#enabled)`  `[`messageIDs`](#messageIDs)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`status`](#status)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#all}

`all`

[debug.t](../file/debug.t.html)\[[32](../source/debug.t.html#32)\]

::: desc
list of all debugging options
:::

[]{#enabled}

`enabled`

[debug.t](../file/debug.t.html)\[[29](../source/debug.t.html#29)\]

::: desc
Debug mode options. Each debug function has an associated ID key, which
is just a string identifying it. This is a lookup table that keeps a
true/nil value for each key, saying whether the function is enabled or
disabled. This lets the developer turn debugging displays on and off
individually, so that you don\'t have to look at piles of debug output
not relevant to the task you\'re currently working on.
:::

[]{#messageIDs}

`messageIDs`

[debug.t](../file/debug.t.html)\[[44](../source/debug.t.html#44)\]

::: desc
LookupTable used to avoid duplicate debug message reports
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#status}

`status ( )`

[debug.t](../file/debug.t.html)\[[35](../source/debug.t.html#35)\]

::: desc
show the current status
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
