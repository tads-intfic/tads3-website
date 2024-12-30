[WebStatusWin]{.title}[class]{.type}

[webui.t](../file/webui.t.html)\[[2575](../source/webui.t.html#2575)\]

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
Status line window

`class `**`WebStatusWin`**` :   `[`WebWindow`](../object/WebWindow.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`WebStatusWin`**\
`         `[`WebWindow`](../object/WebWindow.html)\
`                 `[`WebResourceResFile`](../object/WebResourceResFile.html)\
`                         `[`WebResource`](../object/WebResource.html)\
`                                 object`\
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

` `[`deltas_`](#deltas_)`  `[`src`](#src)`  `[`txt_`](#txt_)`  `[`vpath`](#vpath)`  `

Inherited from `WebWindow` :\
` `[`name`](../object/WebWindow.html#name)`  `[`pathName`](../object/WebWindow.html#pathName)`  `[`sthCtx`](../object/WebWindow.html#sthCtx)`  `

Inherited from `WebResourceResFile` :\
` `[`binaryExts`](../object/WebResourceResFile.html#binaryExts)`  `[`browserExtToMime`](../object/WebResourceResFile.html#browserExtToMime)`  `

Inherited from `WebResource` :\
` `[`group`](../object/WebResource.html#group)`  `[`priority`](../object/WebResource.html#priority)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`clearWindow`](#clearWindow)`  `[`flushWin`](#flushWin)`  `[`getState`](#getState)`  `[`resize`](#resize)`  `[`setStatus`](#setStatus)`  `[`setStatusText`](#setStatusText)`  `[`write`](#write)`  `

Inherited from `WebWindow` :\
` `[`processName`](../object/WebWindow.html#processName)`  `[`sendWinEvent`](../object/WebWindow.html#sendWinEvent)`  `[`sendWinEventTo`](../object/WebWindow.html#sendWinEventTo)`  `[`winFromPath`](../object/WebWindow.html#winFromPath)`  `

Inherited from `WebResourceResFile` :\
` `[`isTextFile`](../object/WebResourceResFile.html#isTextFile)`  `[`matchRequest`](../object/WebResourceResFile.html#matchRequest)`  `[`processRequest`](../object/WebResourceResFile.html#processRequest)`  `

Inherited from `WebResource` :\
` `[`sendAck`](../object/WebResource.html#sendAck)`  `[`sendXML`](../object/WebResource.html#sendXML)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#deltas_}

`deltas_`

[webui.t](../file/webui.t.html)\[[2684](../source/webui.t.html#2684)\]

::: desc
do we have any deltas since the last flush?
:::

[]{#src}

`src`[OVERRIDDEN]{.rem}

[webui.t](../file/webui.t.html)\[[2578](../source/webui.t.html#2578)\]

::: desc
*no description available*
:::

[]{#txt_}

`txt_`

[webui.t](../file/webui.t.html)\[[2687](../source/webui.t.html#2687)\]

::: desc
the current status message
:::

[]{#vpath}

`vpath`[OVERRIDDEN]{.rem}

[webui.t](../file/webui.t.html)\[[2577](../source/webui.t.html#2577)\]

::: desc
my request path and actual resource path
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#clearWindow}

`clearWindow ( )`[OVERRIDDEN]{.rem}

[webui.t](../file/webui.t.html)\[[2644](../source/webui.t.html#2644)\]

::: desc
clear the window
:::

[]{#flushWin}

`flushWin ( )`[OVERRIDDEN]{.rem}

[webui.t](../file/webui.t.html)\[[2650](../source/webui.t.html#2650)\]

::: desc
flush pending text to the window
:::

[]{#getState}

`getState (client)`[OVERRIDDEN]{.rem}

[webui.t](../file/webui.t.html)\[[2678](../source/webui.t.html#2678)\]

::: desc
get the current state to send to the browser
:::

[]{#resize}

`resize ( )`

[webui.t](../file/webui.t.html)\[[2675](../source/webui.t.html#2675)\]

::: desc
Refigure the window size. The status line is generally set up to be
automatically sized to its contents, which requires that we tell the UI
when it\'s time to recalculate the layout to reflect the current
contents after a change.
:::

[]{#setStatus}

`setStatus (room, score?, turns?)`

[webui.t](../file/webui.t.html)\[[2589](../source/webui.t.html#2589)\]

::: desc
Set the room and score/turns portions of the status line. This sets the
left side of the status line to the \'room\' text (which can contain
HTML markups), and the right side to the the score/turns values, if
present. If the turn counter is omitted but the score value is present,
we\'ll just show the score value; otherwise we\'ll format these as
\"score/turns\". If no score value is present, we\'ll leave the right
side blank.
:::

[]{#setStatusText}

`setStatusText (msg)`

[webui.t](../file/webui.t.html)\[[2620](../source/webui.t.html#2620)\]

::: desc
Set the text of the status line. This sets the entire status window to
the given HTML text, without any additional formatting.
:::

[]{#write}

`write (msg)`[OVERRIDDEN]{.rem}

[webui.t](../file/webui.t.html)\[[2634](../source/webui.t.html#2634)\]

::: desc
add text to the status line
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
