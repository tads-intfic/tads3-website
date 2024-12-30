[NetRequestEvent]{.title}[class]{.type}

[tadsnet.t](../file/tadsnet.t.html)\[[80](../source/tadsnet.t.html#80)\]

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
Network Request Event. This type of event occurs when a server (such as
an HTTPServer object) receives a request from a network client.

The evRequest member contains a request object describing the network
request. The class of this object depends on the type of server that
received the request. For example, for an HTTP server, this will be an
HTTPRequest object. To reply to the request, use the appropriate
method(s) in the request object - for details, see the specific request
classes for the server types you create in your program.

`class `**`NetRequestEvent`**` :   `[`NetEvent`](../object/NetEvent.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`NetRequestEvent`**\
`         `[`NetEvent`](../object/NetEvent.html)\
`                 object`\
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

` `[`evRequest`](#evRequest)`  `[`evType`](#evType)`  `

Inherited from `NetEvent` :\
` `[`evArgs`](../object/NetEvent.html#evArgs)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `

` `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#evRequest}

`evRequest`

[tadsnet.t](../file/tadsnet.t.html)\[[97](../source/tadsnet.t.html#97)\]

::: desc
The request object. When the event type is NetEvRequest, this contains a
request object describing the request. The class of the request object
varies according to the server type; you can use ofKind() to check which
type of request it is. For example, for an HTTP request, this will be an
object of class HTTPRequest.
:::

[]{#evType}

`evType`[OVERRIDDEN]{.rem}

[tadsnet.t](../file/tadsnet.t.html)\[[88](../source/tadsnet.t.html#88)\]

::: desc
*no description available*
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (t, req)`[OVERRIDDEN]{.rem}

[tadsnet.t](../file/tadsnet.t.html)\[[82](../source/tadsnet.t.html#82)\]

::: desc
construction
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
