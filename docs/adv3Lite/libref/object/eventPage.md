[eventPage]{.title}[object]{.type}

[webui.t](../file/webui.t.html)\[[1397](../source/webui.t.html#1397)\]

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
getEvent request. This is the mechanism we use to \"send\" events to the
client. The client sends a getEvent request to us, and we simply put it
in a queue - we don\'t send back any response immediately. As soon as we
want to send an event to the client, we go through the queue of pending
getEvent requests, and reply to each one with the event we want to send.

**`eventPage`**` :   `[`WebResource`](../object/WebResource.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`eventPage`**\
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

` `[`processRequest`](#processRequest)`  `[`sendEvent`](#sendEvent)`  `[`sendEventTo`](#sendEventTo)`  `

Inherited from `WebResource` :\
` `[`matchRequest`](../object/WebResource.html#matchRequest)`  `[`sendAck`](../object/WebResource.html#sendAck)`  `[`sendXML`](../object/WebResource.html#sendXML)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#vpath}

`vpath`[OVERRIDDEN]{.rem}

[webui.t](../file/webui.t.html)\[[1398](../source/webui.t.html#1398)\]

::: desc
*no description available*
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#processRequest}

`processRequest (req, query)`[OVERRIDDEN]{.rem}

[webui.t](../file/webui.t.html)\[[1399](../source/webui.t.html#1399)\]

::: desc
*no description available*
:::

[]{#sendEvent}

`sendEvent (msg)`

[webui.t](../file/webui.t.html)\[[1412](../source/webui.t.html#1412)\]

::: desc
broadcast an event message to each client
:::

[]{#sendEventTo}

`sendEventTo (msg, client)`

[webui.t](../file/webui.t.html)\[[1422](../source/webui.t.html#1422)\]

::: desc
send an event to a particular client
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
