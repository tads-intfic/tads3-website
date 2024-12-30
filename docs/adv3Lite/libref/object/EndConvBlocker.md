[EndConvBlocker]{.title}[object]{.type}

[actor.t](../file/actor.t.html)\[[4873](../source/actor.t.html#4873)\]

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
EndConvBlocker is a mix-in class whose sole function is to define the
blockEndConv method common to Actor, ActorState and NodeEndCheck

**`EndConvBlocker`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`EndConvBlocker`**\
`         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `

*(none)* []{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`blockEndConv`](#blockEndConv)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

*(none)* []{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#blockEndConv}

`blockEndConv ( )`

[actor.t](../file/actor.t.html)\[[4883](../source/actor.t.html#4883)\]

::: desc
Convenience method that notes that conversation has occurred on this
turn and returns nil. This is to allow us to use: \*. return
blockEndConv;

in the canEndConversation method to suppress the output of any
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
