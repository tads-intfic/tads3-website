[default4Doer]{.title}[object]{.type}

[doer.t](../file/doer.t.html)\[[1131](../source/doer.t.html#1131)\]

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
Define four DefaultDoers that between them will match any command unless
a more specialized Doer intervenes. This allows most commands to be
executed by the appropriate action.

**`default4Doer`**` :   `[`Doer`](../object/Doer.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`default4Doer`**\
`         `[`Doer`](../object/Doer.html)\
`                 `[`Redirector`](../object/Redirector.html)\
`                         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`cmd`](#cmd)`  `

Inherited from `Doer` :\
` `[`handleAction`](../object/Doer.html#handleAction)`  `[`ignoreError`](../object/Doer.html#ignoreError)`  `[`priority`](../object/Doer.html#priority)`  `[`strict`](../object/Doer.html#strict)`  `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `

Inherited from `Doer` :\
` `[`checkDirection`](../object/Doer.html#checkDirection)`  `[`exec`](../object/Doer.html#exec)`  `[`execAction`](../object/Doer.html#execAction)`  `[`redirect`](../object/Doer.html#redirect)`  `

Inherited from `Redirector` :\
` `[`doInstead`](../object/Redirector.html#doInstead)`  `[`doNested`](../object/Redirector.html#doNested)`  `[`doOtherAction`](../object/Redirector.html#doOtherAction)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#cmd}

`cmd`[OVERRIDDEN]{.rem}

[doer.t](../file/doer.t.html)\[[1132](../source/doer.t.html#1132)\]

::: desc
*no description available*
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
