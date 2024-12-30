[inputFileCancel]{.title}[object]{.type}

[webui.t](../file/webui.t.html)\[[3501](../source/webui.t.html#3501)\]

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
Cancel the input dialog. This is called from the UI directly to cancel
the file selection, when the user closes the dialog through the
enclosing main page UI rather than from within the dialog. This is
useful if the dialog page fails to load, for example.

Note: the upload file dialog also uses this. The upload dialog is
basically a variation on the regular input file dialog.

**`inputFileCancel`**` :   `[`WebResource`](../object/WebResource.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`inputFileCancel`**\
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

[webui.t](../file/webui.t.html)\[[3502](../source/webui.t.html#3502)\]

::: desc
*no description available*
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#processRequest}

`processRequest (req, query)`[OVERRIDDEN]{.rem}

[webui.t](../file/webui.t.html)\[[3503](../source/webui.t.html#3503)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
