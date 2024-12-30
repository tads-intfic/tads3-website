[CaptureFilter]{.title}[class]{.type}

[output.t](../file/output.t.html)\[[818](../source/output.t.html#818)\]

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
Capture Filter. This is an output filter that simply captures all of the
text sent through the filter, sending nothing out to the underlying
stream.

The default implementation simply discards the incoming text. Subclasses
can keep track of the text in memory, in a file, or wherever desired.

`class `**`CaptureFilter`**` :   `[`OutputFilter`](../object/OutputFilter.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`CaptureFilter`**\
`         `[`OutputFilter`](../object/OutputFilter.html)\
`                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`CaptureFilter`**\
`         `[`StringCaptureFilter`](../object/StringCaptureFilter.html)\
`         `[`SwitchableCaptureFilter`](../object/SwitchableCaptureFilter.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `

` `

*(none)* []{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`filterText`](#filterText)`  `

` `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

*(none)* []{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#filterText}

`filterText (ostr, txt)`[OVERRIDDEN]{.rem}

[output.t](../file/output.t.html)\[[823](../source/output.t.html#823)\]

::: desc
Filter the text. We simply discard the text, passing nothing through to
the underlying stream.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
