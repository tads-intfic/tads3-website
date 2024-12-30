[VerifyResult]{.title}[class]{.type}

[action.t](../file/action.t.html)\[[3314](../source/action.t.html#3314)\]

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
Verify Results: objects of this class are created by macros like
logicalRank() and illogical() that are used in verify routines and
stored in the verTab table of the current action.

`class `**`VerifyResult`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`VerifyResult`**\
`         object`\
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

` `[`allowAction`](#allowAction)`  `[`allowImplicit`](#allowImplicit)`  `[`errMsg`](#errMsg)`  `[`myObj`](#myObj)`  `[`resultRank`](#resultRank)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#allowAction}

`allowAction`

[action.t](../file/action.t.html)\[[3328](../source/action.t.html#3328)\]

::: desc
Is the action allowed to proceed according to this verify result?
:::

[]{#allowImplicit}

`allowImplicit`

[action.t](../file/action.t.html)\[[3331](../source/action.t.html#3331)\]

::: desc
Can this action be performed as an implicit action?
:::

[]{#errMsg}

`errMsg`

[action.t](../file/action.t.html)\[[3325](../source/action.t.html#3325)\]

::: desc
The error message to display if this verify result prevents an action
from going ahead.
:::

[]{#myObj}

`myObj`

[action.t](../file/action.t.html)\[[3334](../source/action.t.html#3334)\]

::: desc
The object to which this verify result refers
:::

[]{#resultRank}

`resultRank`

[action.t](../file/action.t.html)\[[3319](../source/action.t.html#3319)\]

::: desc
Our resultRank; the lower this number the less likely it is that this
action could succeed, or the more illogical it is.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (score_, errmsg_, allowAction_, myObj_, allowImplicit_, =, true)`

[action.t](../file/action.t.html)\[[3337](../source/action.t.html#3337)\]

::: desc
The constructor for creating a new verify result.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
