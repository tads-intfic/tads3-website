[scriptStatus]{.title}[object]{.type}

[actions.t](../file/actions.t.html)\[[2172](../source/actions.t.html#2172)\]

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
A state object that keeps track of our logging (scripting) status. This
is transient, because logging is controlled through the output layer in
the interpreter, which does not participate in any of the persistence
mechanisms.

`transient `**`scriptStatus`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`scriptStatus`**\
`         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`noteWithoutScriptWarning`](#noteWithoutScriptWarning)`  `[`recordFile`](#recordFile)`  `[`scriptFile`](#scriptFile)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `

*(none)* []{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#noteWithoutScriptWarning}

`noteWithoutScriptWarning`

[actions.t](../file/actions.t.html)\[[2184](../source/actions.t.html#2184)\]

::: desc
have we warned about using NOTE without logging in effect?
:::

[]{#recordFile}

`recordFile`

[actions.t](../file/actions.t.html)\[[2181](../source/actions.t.html#2181)\]

::: desc
RECORD file name
:::

[]{#scriptFile}

`scriptFile`

[actions.t](../file/actions.t.html)\[[2178](../source/actions.t.html#2178)\]

::: desc
Script file name. This is nil when logging is not in effect, and is set
to the name of the scripting file when a log file is active.
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
