[SocketDisconnectException]{.title}[class]{.type}

[tadsnet.t](../file/tadsnet.t.html)\[[393](../source/tadsnet.t.html#393)\]

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
A SocketDisconnectException is thrown when attempting to read or write a
network socket that\'s been closed, either by us or by the peer (the
computer on the other end of the network connection). If we didn\'t
close the socket on this side, this error usually means simply that the
peer program has terminated or otherwise disconnected, so we should
consider the conversation terminated.

`class `**`SocketDisconnectException`**` :   `[`NetException`](../object/NetException.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`SocketDisconnectException`**\
`         `[`NetException`](../object/NetException.html)\
`                 `[`Exception`](../object/Exception.html)\
`                         object`\
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

` `[`errMsg`](#errMsg)`  `

` `

Inherited from `Exception` :\
` `[`errmsg_`](../object/Exception.html#errmsg_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `

Inherited from `NetException` :\
` `[`construct`](../object/NetException.html#construct)`  `[`displayException`](../object/NetException.html#displayException)`  `

Inherited from `Exception` :\
` `[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)`  `[`showStackTrace`](../object/Exception.html#showStackTrace)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#errMsg}

`errMsg`[OVERRIDDEN]{.rem}

[tadsnet.t](../file/tadsnet.t.html)\[[394](../source/tadsnet.t.html#394)\]

::: desc
*no description available*
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

*(none)*

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
