[ClientEventRequest]{.title}[class]{.type}

[webui.t](../file/webui.t.html)\[[768](../source/webui.t.html#768)\]

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
Client event request. Each client session object keeps a queue of
pending event requests, representing incoming \"GET /webui/getEvent\"
requests that have yet to be answered.

`class `**`ClientEventRequest`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`ClientEventRequest`**\
`         object`\
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

` `[`req`](#req)`  `[`reqTimeout`](#reqTimeout)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#req}

`req`

[webui.t](../file/webui.t.html)\[[776](../source/webui.t.html#776)\]

::: desc
the underlying HTTPRequest object
:::

[]{#reqTimeout}

`reqTimeout`

[webui.t](../file/webui.t.html)\[[784](../source/webui.t.html#784)\]

::: desc
The system time (ms ticks) when the request times out. If we don\'t have
an actual event to send in response by this time, the housekeeper will
generate a no-op reply just to let the client know that we\'re still
here.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (req)`

[webui.t](../file/webui.t.html)\[[769](../source/webui.t.html#769)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
