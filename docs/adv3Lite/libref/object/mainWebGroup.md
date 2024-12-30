[mainWebGroup]{.title}[object]{.type}

[webui.t](../file/webui.t.html)\[[1313](../source/webui.t.html#1313)\]

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
The default web resource group. This is the default container for
WebResource objects.

**`mainWebGroup`**` :   `[`WebResourceGroup`](../object/WebResourceGroup.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`mainWebGroup`**\
`         `[`WebResourceGroup`](../object/WebResourceGroup.html)\
`                 object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`priority`](#priority)`  `

Inherited from `WebResourceGroup` :\
` `[`all`](../object/WebResourceGroup.html#all)`  `[`contents`](../object/WebResourceGroup.html#contents)`  `[`server`](../object/WebResourceGroup.html#server)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`execute`](#execute)`  `[`isGroupFor`](#isGroupFor)`  `

Inherited from `WebResourceGroup` :\
` `[`processRequest`](../object/WebResourceGroup.html#processRequest)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#priority}

`priority`[OVERRIDDEN]{.rem}

[webui.t](../file/webui.t.html)\[[1316](../source/webui.t.html#1316)\]

::: desc
*no description available*
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#execute}

`execute ( )`

[webui.t](../file/webui.t.html)\[[1325](../source/webui.t.html#1325)\]

::: desc
At startup, put each WebResource object into the contents list for its
group.
:::

[]{#isGroupFor}

`isGroupFor (req)`[OVERRIDDEN]{.rem}

[webui.t](../file/webui.t.html)\[[1315](../source/webui.t.html#1315)\]

::: desc
the default group matches any server, but with low priority
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
