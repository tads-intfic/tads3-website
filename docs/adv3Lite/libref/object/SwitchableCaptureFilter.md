[SwitchableCaptureFilter]{.title}[class]{.type}

[output.t](../file/output.t.html)\[[836](../source/output.t.html#836)\]

[Superclass\
Tree](#_SuperClassTree_)

[Subclass\
Tree](#_SubClassTree_)

[Global\
Objects](#_ObjectSummary_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
\"Switchable\" capture filter. This filter can have its blocking enabled
or disabled. When blocking is enabled, we capture everything, leaving
nothing to the underlying stream; when disabled, we pass everything
through to the underyling stream unchanged.

`class `**`SwitchableCaptureFilter`**` :   `[`CaptureFilter`](../object/CaptureFilter.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`SwitchableCaptureFilter`**\
`         `[`CaptureFilter`](../object/CaptureFilter.html)\
`                 `[`OutputFilter`](../object/OutputFilter.html)\
`                         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

*(none)* []{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`isBlocking`](#isBlocking)`  `

` `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`filterText`](#filterText)`  `

` `

` `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#isBlocking}

`isBlocking`

[output.t](../file/output.t.html)\[[852](../source/output.t.html#852)\]

::: desc
Blocking enabled: if this is true, we\'ll capture all text passed
through us, leaving nothing to the underyling stream. Blocking is
enabled by default.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#filterText}

`filterText (ostr, txt)`[OVERRIDDEN]{.rem}

[output.t](../file/output.t.html)\[[838](../source/output.t.html#838)\]

::: desc
filter the text
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
