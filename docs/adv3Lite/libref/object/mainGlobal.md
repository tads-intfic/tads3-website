[mainGlobal]{.title}[object]{.type}

[\_main.t](../file/_main.t.html)\[[1182](../source/_main.t.html#1182)\]

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
global data object for this module

**`mainGlobal`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`mainGlobal`**\
`         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`mainRestoreFunc`](#mainRestoreFunc)`  `[`preinited_`](#preinited_)`  `[`reflectionObj`](#reflectionObj)`  `[`restartID`](#restartID)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `

*(none)* []{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#mainRestoreFunc}

`mainRestoreFunc`

[\_main.t](../file/_main.t.html)\[[1212](../source/_main.t.html#1212)\]

::: desc
pointer to mainRestore function, if defined
:::

[]{#preinited_}

`preinited_`

[\_main.t](../file/_main.t.html)\[[1184](../source/_main.t.html#1184)\]

::: desc
flag: we\'ve run pre-initialization
:::

[]{#reflectionObj}

`reflectionObj`

[\_main.t](../file/_main.t.html)\[[1196](../source/_main.t.html#1196)\]

::: desc
The global reflection object - if the program is compiled with the
standard reflection module, that module will set this property to point
to the reflection object.

We use this so that we don\'t require the reflection module to be
included. If the module isn\'t included, this will be nil, so we\'ll
know not to use reflection. If this is not nil, we\'ll know we can use
reflection services.
:::

[]{#restartID}

`restartID`

[\_main.t](../file/_main.t.html)\[[1209](../source/_main.t.html#1209)\]

::: desc
Restart ID. This is an integer that indicates how the main entrypoint
was last reached. This is initially zero; each time we restart the game,
this is incremented.

The restart ID is the only information that survives across a restart
boundary. Other than this, entering via a restart is exactly like
loading the program from scratch; all other information about the
program state before the restart is lost in the restart operation.
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
