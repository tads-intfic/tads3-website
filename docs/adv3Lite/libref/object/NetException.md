[NetException]{.title}[class]{.type}

[tadsnet.t](../file/tadsnet.t.html)\[[360](../source/tadsnet.t.html#360)\]

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
A NetException is the base class for network errors.

`class `**`NetException`**` :   `[`Exception`](../object/Exception.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`NetException`**\
`         `[`Exception`](../object/Exception.html)\
`                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`NetException`**\
`         `[`NetSafetyException`](../object/NetSafetyException.html)\
`         `[`SocketDisconnectException`](../object/SocketDisconnectException.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`errMsg`](#errMsg)`  `

Inherited from `Exception` :\
` `[`errmsg_`](../object/Exception.html#errmsg_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `[`displayException`](#displayException)`  `

Inherited from `Exception` :\
` `[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)`  `[`showStackTrace`](../object/Exception.html#showStackTrace)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#errMsg}

`errMsg`

[tadsnet.t](../file/tadsnet.t.html)\[[371](../source/tadsnet.t.html#371)\]

::: desc
a descriptive error message provided by the system
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (msg?, errno?)`[OVERRIDDEN]{.rem}

[tadsnet.t](../file/tadsnet.t.html)\[[361](../source/tadsnet.t.html#361)\]

::: desc
*no description available*
:::

[]{#displayException}

`displayException ( )`[OVERRIDDEN]{.rem}

[tadsnet.t](../file/tadsnet.t.html)\[[368](../source/tadsnet.t.html#368)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
