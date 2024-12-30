[outputManager]{.title}[object]{.type}

[output.t](../file/output.t.html)\[[98](../source/output.t.html#98)\]

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
Output Manager. This object contains global code for displaying text on
the console.

The output manager is transient because we don\'t want its state to be
saved and restored; the output manager state is essentially part of the
intepreter user interface, which is not affected by save and restore.

`transient `**`outputManager`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`outputManager`**\
`         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`curOutputStream`](#curOutputStream)`  `[`htmlMode`](#htmlMode)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`setOutputStream`](#setOutputStream)`  `[`withOutputStream`](#withOutputStream)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#curOutputStream}

`curOutputStream`

[output.t](../file/output.t.html)\[[145](../source/output.t.html#145)\]

::: desc
the current output stream - start with the main text stream
:::

[]{#htmlMode}

`htmlMode`

[output.t](../file/output.t.html)\[[162](../source/output.t.html#162)\]

::: desc
Is the UI running in HTML mode? This tells us if we have a full HTML UI
or a text-only UI. Full HTML mode applies if we\'re running on a
Multimedia TADS interpreter, or we\'re using the Web UI, which runs in a
separate browser and is thus inherently HTML-capable.

(The result can\'t change during a session, since it\'s a function of
the game and interpreter capabilities, so we store the result on the
first evaluation to avoid having to recompute it on each query. Since
\'self\' is a static object, we\'ll recompute this each time we run the
program, which is important because we could save the game on one
interpreter and resume the session on a different interpreter with
different capabilities.)
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#setOutputStream}

`setOutputStream (ostr)`

[output.t](../file/output.t.html)\[[105](../source/output.t.html#105)\]

::: desc
Switch to a new active output stream. Returns the previously active
output stream, so that the caller can easily restore the old output
stream if the new output stream is to be established only for a specific
duration.
:::

[]{#withOutputStream}

`withOutputStream (ostr, func)`

[output.t](../file/output.t.html)\[[126](../source/output.t.html#126)\]

::: desc
run the given function, using the given output stream as the active
default output stream
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
