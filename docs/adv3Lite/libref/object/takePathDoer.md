[takePathDoer]{.title}[object]{.type}

[english.t](../file/english.t.html)\[[5945](../source/english.t.html#5945)\]

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
In English taking a path means going along it

**`takePathDoer`**` :   `[`Doer`](../object/Doer.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`takePathDoer`**\
`         `[`Doer`](../object/Doer.html)\
`                 `[`Redirector`](../object/Redirector.html)\
`                         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`ignoreError`](#ignoreError)`  `[`strict`](#strict)`  `

Inherited from `Doer` :\
` `[`cmd`](../object/Doer.html#cmd)`  `[`handleAction`](../object/Doer.html#handleAction)`  `[`priority`](../object/Doer.html#priority)`  `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`execAction`](#execAction)`  `

Inherited from `Doer` :\
` `[`checkDirection`](../object/Doer.html#checkDirection)`  `[`exec`](../object/Doer.html#exec)`  `[`redirect`](../object/Doer.html#redirect)`  `

Inherited from `Redirector` :\
` `[`doInstead`](../object/Redirector.html#doInstead)`  `[`doNested`](../object/Redirector.html#doNested)`  `[`doOtherAction`](../object/Redirector.html#doOtherAction)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#ignoreError}

`ignoreError`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[5961](../source/english.t.html#5961)\]

::: desc
Ignore an error report for this Doer in PreInit, since it only means
that extras.t hasn\'t been included.
:::

[]{#strict}

`strict`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[5955](../source/english.t.html#5955)\]

::: desc
But this only applies if the command is actually \'take\' and not a
synonymn like \'get\' or \'pick up\'
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#execAction}

`execAction (c)`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[5946](../source/english.t.html#5946)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
