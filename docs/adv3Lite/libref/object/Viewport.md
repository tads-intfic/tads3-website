[Viewport]{.title}[class]{.type}

[viewport.t](../file/viewport.t.html)\[[36](../source/viewport.t.html#36)\]

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
Viewport is a mix-in class which can be added to an object representing
a window or TV screen or the like to describe the remote location
viewable via the viewport. \[DEFINED ON VIEWPORT EXTENSION\]

`class `**`Viewport`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`Viewport`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`Viewport`**\
`         `[`SwitchableViewport`](../object/SwitchableViewport.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`examineToView`](#examineToView)`  `[`isViewing`](#isViewing)`  `[`lookThroughToView`](#lookThroughToView)`  `[`visibleRooms`](#visibleRooms)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`describeVisibleRooms`](#describeVisibleRooms)`  `[`dobjFor(LookThrough)`](#dobjFor(LookThrough))`  `[`examineStatus`](#examineStatus)`  `[`setRooms`](#setRooms)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#examineToView}

`examineToView`

[viewport.t](../file/viewport.t.html)\[[96](../source/viewport.t.html#96)\]

::: desc
Flag: should examining this object display a description of the visible
rooms and their contents? By default it should. \[VIEWPORT EXTENSION\]
:::

[]{#isViewing}

`isViewing`

[viewport.t](../file/viewport.t.html)\[[103](../source/viewport.t.html#103)\]

::: desc
Is the Viewport currently available for viewing through (it may not be
if windows cover the curtain, or the CCTV screen has been turned off).
\[VIEWPORT EXTENSION\]
:::

[]{#lookThroughToView}

`lookThroughToView`

[viewport.t](../file/viewport.t.html)\[[90](../source/viewport.t.html#90)\]

::: desc
Flag: can I see into the visibleRooms by looking through this object?
This should normally be true for a window-type object but probably nil
for a CCTV monitor. {VIEWPORT EXTENSION\]
:::

[]{#visibleRooms}

`visibleRooms`

[viewport.t](../file/viewport.t.html)\[[60](../source/viewport.t.html#60)\]

::: desc
A list of rooms that are made visible by looking through or at this
viewport. \[VIEWPORT EXTENSION\]
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#describeVisibleRooms}

`describeVisibleRooms ( )`

[viewport.t](../file/viewport.t.html)\[[42](../source/viewport.t.html#42)\]

::: desc
Method to display a description of the rooms and contents visible by
means of me. \[VIEWPORT EXTENSION\]
:::

[]{#dobjFor(LookThrough)}

`dobjFor(LookThrough)`

[viewport.t](../file/viewport.t.html)\[[109](../source/viewport.t.html#109)\]

::: desc
For the VIEWPORT EXTENSION add desribing rooms visible through this
viewport to the inherited behaviour
:::

[]{#examineStatus}

`examineStatus ( )`

[viewport.t](../file/viewport.t.html)\[[124](../source/viewport.t.html#124)\]

::: desc
If examining this Viewport should describe what it shows, add a
description of the rooms it overlooks. \[VIEWPORT EXTENSION\]
:::

[]{#setRooms}

`setRooms (lst)`

[viewport.t](../file/viewport.t.html)\[[64](../source/viewport.t.html#64)\]

::: desc
Set the list of visible rooms to lst \[VIEWPORT EXTENSION\]
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
