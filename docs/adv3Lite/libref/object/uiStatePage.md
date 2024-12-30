[uiStatePage]{.title}[object]{.type}

[webui.t](../file/webui.t.html)\[[1464](../source/webui.t.html#1464)\]

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
getState request. The web page can send this to get a full accounting of
the current state of the UI. It does this automatically when first
loaded, and again when the user manually refreshes the page.

We handle this by asking the main window to generate its state.

**`uiStatePage`**` :   `[`WebResource`](../object/WebResource.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`uiStatePage`**\
`         `[`WebResource`](../object/WebResource.html)\
`                 object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`vpath`](#vpath)`  `

Inherited from `WebResource` :\
` `[`group`](../object/WebResource.html#group)`  `[`priority`](../object/WebResource.html#priority)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`processRequest`](#processRequest)`  `

Inherited from `WebResource` :\
` `[`matchRequest`](../object/WebResource.html#matchRequest)`  `[`sendAck`](../object/WebResource.html#sendAck)`  `[`sendXML`](../object/WebResource.html#sendXML)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#vpath}

`vpath`[OVERRIDDEN]{.rem}

[webui.t](../file/webui.t.html)\[[1465](../source/webui.t.html#1465)\]

::: desc
*no description available*
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#processRequest}

`processRequest (req, query)`[OVERRIDDEN]{.rem}

[webui.t](../file/webui.t.html)\[[1466](../source/webui.t.html#1466)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
