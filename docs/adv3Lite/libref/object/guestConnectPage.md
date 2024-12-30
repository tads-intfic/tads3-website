[guestConnectPage]{.title}[object]{.type}

[webui.t](../file/webui.t.html)\[[1379](../source/webui.t.html#1379)\]

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
Guest connection request. This enables \"switchboard\" applications on
remote servers that keep track of multi-user game sessions, to show
users available sessions and connect new users to those sessions.

The first step in setting up a switchboard is for the game server to
register itself with the switchboard by sending a request on startup.
That part is external to us - that\'s not handled within the game
program but rather within the web server script that launches the game.
Here, then, we simply assume that this work is already done.

The second step is that the switchboard needs to check back with the
game server from time to time to see if it\'s still alive - essentially
a \"ping\" operation. We handle that here: if we respond to the request,
we\'re obviously still alive.

The third step is that we need to send the switchboard a URL that lets
secondary users (\"guests\") connect to the game session. We handle that
here as well: our reply body is the client connection URL.

**`guestConnectPage`**` :   `[`WebResource`](../object/WebResource.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`guestConnectPage`**\
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

[webui.t](../file/webui.t.html)\[[1380](../source/webui.t.html#1380)\]

::: desc
*no description available*
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#processRequest}

`processRequest (req, query)`[OVERRIDDEN]{.rem}

[webui.t](../file/webui.t.html)\[[1381](../source/webui.t.html#1381)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::