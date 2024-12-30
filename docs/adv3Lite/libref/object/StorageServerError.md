[StorageServerError]{.title}[class]{.type}

[\_main.t](../file/_main.t.html)\[[889](../source/_main.t.html#889)\]

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
A StorageServerError is thrown when a file operation on a remote storage
server fails. The storage server is used when the game runs on a Web
game server in client/server mode. In Web mode, files are stored on a
separate storage server rather than on the Web server itself, so that
the files can be transparently accessed if the game is continued from
another Web server. This exception is used when a request to the storage
server fails, which could be due to an error on the storage server, a
network error communicating between the game server and the storage
server, or an invalid request (e.g., incorrect user credentials).

`class `**`StorageServerError`**` :   `[`RuntimeError`](../object/RuntimeError.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`StorageServerError`**\
`         `[`RuntimeError`](../object/RuntimeError.html)\
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

` `[`errCode`](#errCode)`  `[`errMsg`](#errMsg)`  `

Inherited from `RuntimeError` :\
` `[`errno_`](../object/RuntimeError.html#errno_)`  `[`exceptionMessage`](../object/RuntimeError.html#exceptionMessage)`  `[`stack_`](../object/RuntimeError.html#stack_)`  `

Inherited from `Exception` :\
` `[`errmsg_`](../object/Exception.html#errmsg_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `[`displayException`](#displayException)`  `

Inherited from `RuntimeError` :\
` `[`isDebuggerSignal`](../object/RuntimeError.html#isDebuggerSignal)`  `[`newRuntimeError`](../object/RuntimeError.html#newRuntimeError)`  `

Inherited from `Exception` :\
` `[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)`  `[`showStackTrace`](../object/Exception.html#showStackTrace)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#errCode}

`errCode`

[\_main.t](../file/_main.t.html)\[[938](../source/_main.t.html#938)\]

::: desc
the storage server error code
:::

[]{#errMsg}

`errMsg`

[\_main.t](../file/_main.t.html)\[[946](../source/_main.t.html#946)\]

::: desc
error message - this is the message text we get back from the storage
server for a request that\'s successful at the HTTP level but fails on
the storage server, OR a message describing the HTTP error or network
error that caused the request to fail
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (errno, msg)`[OVERRIDDEN]{.rem}

[\_main.t](../file/_main.t.html)\[[890](../source/_main.t.html#890)\]

::: desc
*no description available*
:::

[]{#displayException}

`displayException ( )`[OVERRIDDEN]{.rem}

[\_main.t](../file/_main.t.html)\[[949](../source/_main.t.html#949)\]

::: desc
display the exception
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
