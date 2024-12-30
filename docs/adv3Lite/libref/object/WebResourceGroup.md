[WebResourceGroup]{.title}[class]{.type}

[webui.t](../file/webui.t.html)\[[1228](../source/webui.t.html#1228)\]

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
A WebResourceGroup is a container for WebResource objects. When a server
receives a request, it looks in its group list to find the resource
object that will handle the request.

`class `**`WebResourceGroup`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`WebResourceGroup`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

*(none)* []{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

` `[`mainWebGroup`](../object/mainWebGroup.html)`  ` []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`all`](#all)`  `[`contents`](#contents)`  `[`priority`](#priority)`  `[`server`](#server)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`isGroupFor`](#isGroupFor)`  `[`processRequest`](#processRequest)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#all}

`all`

[webui.t](../file/webui.t.html)\[[1305](../source/webui.t.html#1305)\]

::: desc
class property: list of all WebResourceGroup objects
:::

[]{#contents}

`contents`

[webui.t](../file/webui.t.html)\[[1267](../source/webui.t.html#1267)\]

::: desc
the WebResource objects in the group
:::

[]{#priority}

`priority`

[webui.t](../file/webui.t.html)\[[1254](../source/webui.t.html#1254)\]

::: desc
The priority of the group, relative to other groups. If the same server
matches multiple groups, this allows you to designate which group has
precedence. A higher value means higher priority.
:::

[]{#server}

`server`

[webui.t](../file/webui.t.html)\[[1264](../source/webui.t.html#1264)\]

::: desc
The HTTPServer object or objects this group is associated with. The
general event processor uses this to route a request to the appropriate
resource group, by finding the group that\'s associated with the server
that received the request.

To associate a group with multiple servers, make this a list.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#isGroupFor}

`isGroupFor (req)`

[webui.t](../file/webui.t.html)\[[1234](../source/webui.t.html#1234)\]

::: desc
Should this group handle the given request? By default, we say yes if
the server that received the request is associated with this group via
the group\'s \'server\' property.
:::

[]{#processRequest}

`processRequest (req)`

[webui.t](../file/webui.t.html)\[[1274](../source/webui.t.html#1274)\]

::: desc
Process a request. This looks for the highest priority matching resource
in the group, then hands the request to that resource for processing.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
