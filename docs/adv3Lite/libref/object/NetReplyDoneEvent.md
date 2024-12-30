[NetReplyDoneEvent]{.title}[class]{.type}

[tadsnet.t](../file/tadsnet.t.html)\[[242](../source/tadsnet.t.html#242)\]

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
Network Reply Done event. This type of event occurs when an asynchronous
network reply (such as HTTPRequest.sendReplyAsync()) completes.

`class `**`NetReplyDoneEvent`**` :   `[`NetEvent`](../object/NetEvent.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`NetReplyDoneEvent`**\
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

` `[`errMsg`](#errMsg)`  `[`evType`](#evType)`  `[`requestObj`](#requestObj)`  `[`socketErr`](#socketErr)`  `

Inherited from `NetEvent` :\
` `[`evArgs`](../object/NetEvent.html#evArgs)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `[`isSuccessful`](#isSuccessful)`  `

` `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#errMsg}

`errMsg`

[tadsnet.t](../file/tadsnet.t.html)\[[276](../source/tadsnet.t.html#276)\]

::: desc
Error message, if any. If the reply failed, this contains a string with
a description of the error that occurred. If the reply was sent
successfully, this is nil.
:::

[]{#evType}

`evType`[OVERRIDDEN]{.rem}

[tadsnet.t](../file/tadsnet.t.html)\[[253](../source/tadsnet.t.html#253)\]

::: desc
our default event type is NetEvReplyDone
:::

[]{#requestObj}

`requestObj`

[tadsnet.t](../file/tadsnet.t.html)\[[259](../source/tadsnet.t.html#259)\]

::: desc
The object representing the request we replied to. For HTTP requests,
this is an HTTPRequest object.
:::

[]{#socketErr}

`socketErr`

[tadsnet.t](../file/tadsnet.t.html)\[[269](../source/tadsnet.t.html#269)\]

::: desc
The socket error, if any. If the reply failed due to a network error,
this contains the error number. If no network error occurred, this is
zero.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (t, req, err, msg)`[OVERRIDDEN]{.rem}

[tadsnet.t](../file/tadsnet.t.html)\[[244](../source/tadsnet.t.html#244)\]

::: desc
construction
:::

[]{#isSuccessful}

`isSuccessful ( )`

[tadsnet.t](../file/tadsnet.t.html)\[[262](../source/tadsnet.t.html#262)\]

::: desc
was the reply successfully sent?
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
