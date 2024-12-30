[tempFileDownloadPage]{.title}[object]{.type}

[webui.t](../file/webui.t.html)\[[3237](../source/webui.t.html#3237)\]

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
Temporary file download page. This page serves temporary files created
via inputFile() as HTTP downloads to the client.

`transient `**`tempFileDownloadPage`**` :   `[`WebResource`](../object/WebResource.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`tempFileDownloadPage`**\
`         `[`WebResource`](../object/WebResource.html)\
`                 object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`nextID`](#nextID)`  `[`vpath`](#vpath)`  `

Inherited from `WebResource` :\
` `[`group`](../object/WebResource.html#group)`  `[`priority`](../object/WebResource.html#priority)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`addFile`](#addFile)`  `[`processRequest`](#processRequest)`  `

Inherited from `WebResource` :\
` `[`matchRequest`](../object/WebResource.html#matchRequest)`  `[`sendAck`](../object/WebResource.html#sendAck)`  `[`sendXML`](../object/WebResource.html#sendXML)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#nextID}

`nextID`

[webui.t](../file/webui.t.html)\[[3359](../source/webui.t.html#3359)\]

::: desc
next available ID
:::

[]{#vpath}

`vpath`[OVERRIDDEN]{.rem}

[webui.t](../file/webui.t.html)\[[3238](../source/webui.t.html#3238)\]

::: desc
*no description available*
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#addFile}

`addFile (fileType, client)`

[webui.t](../file/webui.t.html)\[[3319](../source/webui.t.html#3319)\]

::: desc
add a file to our list of downloadable files
:::

[]{#processRequest}

`processRequest (req, query)`[OVERRIDDEN]{.rem}

[webui.t](../file/webui.t.html)\[[3239](../source/webui.t.html#3239)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
