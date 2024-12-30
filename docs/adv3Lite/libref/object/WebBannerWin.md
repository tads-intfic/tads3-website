[WebBannerWin]{.title}[class]{.type}

[browser.t](../file/browser.t.html)\[[737](../source/browser.t.html#737)\]

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
Web Banner Window. This is designed as a \*partial\* drop-in replacement
for the BannerWindow class, using Web UI windows as implemented in the
core TADS javascript client.

This class is designed to be mixed with a WebWindow subclass.

This isn\'t a complete replacement for BannerWindow, because the layout
model for the Web UI is different from the banner window model (the Web
UI model is better and more flexible). This class implements the parts
of the BannerWindow API related to the stream-oriented output to the
window, so you shouldn\'t have to change anything that writes HTML text
to the window. However, you will have to rework code that sets up the
window\'s layout to use the Web UI model.

`class `**`WebBannerWin`**` :   `[`OutputStreamWindow`](../object/OutputStreamWindow.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`WebBannerWin`**\
`         `[`OutputStreamWindow`](../object/OutputStreamWindow.html)\
`                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

*(none)* []{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

` `[`statuslineBanner`](../object/statuslineBanner.html)`  `
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `

Inherited from `OutputStreamWindow` :\
` `[`outputStream_`](../object/OutputStreamWindow.html#outputStream_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`createOutputStreamObj`](#createOutputStreamObj)`  `[`flushBanner`](#flushBanner)`  `[`init`](#init)`  `[`setSize`](#setSize)`  `[`sizeToContents`](#sizeToContents)`  `[`writeToBanner`](#writeToBanner)`  `

Inherited from `OutputStreamWindow` :\
` `[`captureOutput`](../object/OutputStreamWindow.html#captureOutput)`  `[`createOutputStream`](../object/OutputStreamWindow.html#createOutputStream)`  `[`setOutputStream`](../object/OutputStreamWindow.html#setOutputStream)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

*(none)* []{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#createOutputStreamObj}

`createOutputStreamObj ( )`[OVERRIDDEN]{.rem}

[browser.t](../file/browser.t.html)\[[748](../source/browser.t.html#748)\]

::: desc
create our output stream subclass
:::

[]{#flushBanner}

`flushBanner ( )`

[browser.t](../file/browser.t.html)\[[754](../source/browser.t.html#754)\]

::: desc
flush output
:::

[]{#init}

`init ( )`

[browser.t](../file/browser.t.html)\[[741](../source/browser.t.html#741)\]

::: desc
Initialize. Call this when first displaying the window in the UI.
:::

[]{#setSize}

`setSize (siz, units, advisory)`

[browser.t](../file/browser.t.html)\[[770](../source/browser.t.html#770)\]

::: desc
Banner window size settings. We simply ignore these; callers must rework
their layout logic for the Web UI, since the javascript layout system is
so different.
:::

[]{#sizeToContents}

`sizeToContents ( )`

[browser.t](../file/browser.t.html)\[[771](../source/browser.t.html#771)\]

::: desc
*no description available*
:::

[]{#writeToBanner}

`writeToBanner (txt)`

[browser.t](../file/browser.t.html)\[[760](../source/browser.t.html#760)\]

::: desc
write text
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
