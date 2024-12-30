[SwitchableViewport]{.title}[class]{.type}

[viewport.t](../file/viewport.t.html)\[[137](../source/viewport.t.html#137)\]

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
A SwitchableViewport is one that only brings its remote rooms into view
when it\'s switched on. \[DEFINED ON VIEWPORT EXTENSION\]

`class `**`SwitchableViewport`**` :   `[`Viewport`](../object/Viewport.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`SwitchableViewport`**\
`         `[`Viewport`](../object/Viewport.html)\
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

` `[`isSwitchable`](#isSwitchable)`  `[`isViewing`](#isViewing)`  `[`lookThroughToView`](#lookThroughToView)`  `

Inherited from `Viewport` :\
` `[`examineToView`](../object/Viewport.html#examineToView)`  `[`visibleRooms`](../object/Viewport.html#visibleRooms)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`makeOn`](#makeOn)`  `

Inherited from `Viewport` :\
` `[`describeVisibleRooms`](../object/Viewport.html#describeVisibleRooms)`  `[`dobjFor(LookThrough)`](../object/Viewport.html#dobjFor(LookThrough))`  `[`examineStatus`](../object/Viewport.html#examineStatus)`  `[`setRooms`](../object/Viewport.html#setRooms)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#isSwitchable}

`isSwitchable`

[viewport.t](../file/viewport.t.html)\[[138](../source/viewport.t.html#138)\]

::: desc
*no description available*
:::

[]{#isViewing}

`isViewing`[OVERRIDDEN]{.rem}

[viewport.t](../file/viewport.t.html)\[[139](../source/viewport.t.html#139)\]

::: desc
*no description available*
:::

[]{#lookThroughToView}

`lookThroughToView`[OVERRIDDEN]{.rem}

[viewport.t](../file/viewport.t.html)\[[159](../source/viewport.t.html#159)\]

::: desc
Since a SwitchableViewport will typically be used to implement something
like a CCTV screen, by default it\'s not something we\'d look through in
order to view the remote locations.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#makeOn}

`makeOn (stat)`

[viewport.t](../file/viewport.t.html)\[[141](../source/viewport.t.html#141)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
