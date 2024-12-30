[OutputFilter]{.title}[class]{.type}

[output.t](../file/output.t.html)\[[773](../source/output.t.html#773)\]

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
Output Filter

`class `**`OutputFilter`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`OutputFilter`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`OutputFilter`**\
`         `[`CaptureFilter`](../object/CaptureFilter.html)\
`                 `[`StringCaptureFilter`](../object/StringCaptureFilter.html)\
`                 `[`SwitchableCaptureFilter`](../object/SwitchableCaptureFilter.html)\
`         `[`ImplicitActionFilter`](../object/ImplicitActionFilter.html)\
`         `[`MonitorFilter`](../object/MonitorFilter.html)\
`         `[`ParagraphManager`](../object/ParagraphManager.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

` `[`commandSequencer`](../object/commandSequencer.html)`  `[`conversationManager`](../object/conversationManager.html)`  `[`cquoteOutputFilter`](../object/cquoteOutputFilter.html)`  `[`quoteFilter`](../object/quoteFilter.html)`  `[`styleTagFilter`](../object/styleTagFilter.html)`  `[`typographicalOutputFilter`](../object/typographicalOutputFilter.html)`  `
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `

*(none)* []{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`filterText`](#filterText)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

*(none)* []{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#filterText}

`filterText (ostr, txt)`

[output.t](../file/output.t.html)\[[781](../source/output.t.html#781)\]

::: desc
Apply the filter - this should be overridden in each filter. The return
value is the result of filtering the string.

\'ostr\' is the OutputStream to which the text is being written, and
\'txt\' is the original text to be displayed.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
