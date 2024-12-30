[statuslineBanner]{.title}[object]{.type}

[console.t](../file/console.t.html)\[[273](../source/console.t.html#273)\]

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
The banner window for the status line.

**`statuslineBanner`**` :   `[`BannerWindow`](../object/BannerWindow.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`statuslineBanner`**\
`         `[`BannerWindow`](../object/BannerWindow.html)\
`                 `[`OutputStreamWindow`](../object/OutputStreamWindow.html)\
`                         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `

Inherited from `BannerWindow` :\
` `[`align_`](../object/BannerWindow.html#align_)`  `[`handle_`](../object/BannerWindow.html#handle_)`  `[`id_`](../object/BannerWindow.html#id_)`  `[`inited_`](../object/BannerWindow.html#inited_)`  `[`parentID_`](../object/BannerWindow.html#parentID_)`  `[`size_`](../object/BannerWindow.html#size_)`  `[`sizeUnits_`](../object/BannerWindow.html#sizeUnits_)`  `[`styleFlags_`](../object/BannerWindow.html#styleFlags_)`  `[`windowType_`](../object/BannerWindow.html#windowType_)`  `

Inherited from `OutputStreamWindow` :\
` `[`outputStream_`](../object/OutputStreamWindow.html#outputStream_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`initBannerWindow`](#initBannerWindow)`  `[`removeBanner`](#removeBanner)`  `[`setColorScheme`](#setColorScheme)`  `

Inherited from `BannerWindow` :\
` `[`clearWindow`](../object/BannerWindow.html#clearWindow)`  `[`construct`](../object/BannerWindow.html#construct)`  `[`createOutputStreamObj`](../object/BannerWindow.html#createOutputStreamObj)`  `[`createSystemBanner`](../object/BannerWindow.html#createSystemBanner)`  `[`cursorTo`](../object/BannerWindow.html#cursorTo)`  `[`flushBanner`](../object/BannerWindow.html#flushBanner)`  `[`getBannerID`](../object/BannerWindow.html#getBannerID)`  `[`setScreenColor`](../object/BannerWindow.html#setScreenColor)`  `[`setSize`](../object/BannerWindow.html#setSize)`  `[`setTextColor`](../object/BannerWindow.html#setTextColor)`  `[`showBanner`](../object/BannerWindow.html#showBanner)`  `[`showForRestore`](../object/BannerWindow.html#showForRestore)`  `[`sizeToContents`](../object/BannerWindow.html#sizeToContents)`  `[`updateForRestore`](../object/BannerWindow.html#updateForRestore)`  `[`writeToBanner`](../object/BannerWindow.html#writeToBanner)`  `

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

[]{#initBannerWindow}

`initBannerWindow ( )`[OVERRIDDEN]{.rem}

[console.t](../file/console.t.html)\[[285](../source/console.t.html#285)\]

::: desc
initialize
:::

[]{#removeBanner}

`removeBanner ( )`[OVERRIDDEN]{.rem}

[console.t](../file/console.t.html)\[[275](../source/console.t.html#275)\]

::: desc
close the window
:::

[]{#setColorScheme}

`setColorScheme ( )`

[console.t](../file/console.t.html)\[[306](../source/console.t.html#306)\]

::: desc
Set the color scheme. We simply show a \<BODY\> tag that selects the
parameterized colors STATUSBG and STATUSTEXT. (These are called
\"parameterized\" colors because they don\'t select specific colors, but
rather select whatever colors the interpreter wishes to use for the
status line. In many cases, the interpreter lets the user select these
colors via a Preferences dialog.)
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
