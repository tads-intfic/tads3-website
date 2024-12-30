[mainAtExit]{.title}[object]{.type}

[\_main.t](../file/_main.t.html)\[[1220](../source/_main.t.html#1220)\]

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
At-exit handlers. This is a registry for custom handlers that are to be
invoked just before the program terminates.

`transient `**`mainAtExit`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`mainAtExit`**\
`         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`handlers`](#handlers)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`addHandler`](#addHandler)`  `[`callHandlers`](#callHandlers)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#handlers}

`handlers`

[\_main.t](../file/_main.t.html)\[[1250](../source/_main.t.html#1250)\]

::: desc
list of exit handlers
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#addHandler}

`addHandler (func)`

[\_main.t](../file/_main.t.html)\[[1225](../source/_main.t.html#1225)\]

::: desc
Add an at-exit handler. User code can call this to register a handler
that will be invoked just before the program exits.
:::

[]{#callHandlers}

`callHandlers ( )`

[\_main.t](../file/_main.t.html)\[[1231](../source/_main.t.html#1231)\]

::: desc
call our exit handlers
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
