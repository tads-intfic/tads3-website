[statusLine]{.title}[object]{.type}

[status.t](../file/status.t.html)\[[173](../source/status.t.html#173)\]

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
Status line - this is an abstract object that controls the status line
display.

We provide two main methods: showStatusHtml, which shows the status line
in HTML format, and showStatusText, which shows the status line in plain
text mode. To display the status line, we invoke one or the other of
these methods, according to the current mode, to display the statusline.
The default implementations of these methods generate the appropriate
formatting codes for a statusline with a left part and a right part,
calling showStatusLeft and showStatusRight, respectively, to display the
text for the parts.

Games can customize the statusline at two levels. At the simpler level,
a game can modify showStatusLeft and/or showStatusRight to change the
text displayed on the left and/or right of the statusline. Since these
two methods are used regardless of the statusline style of the
underlying interpreter, games don\'t have to worry about the different
modes when overriding these.

At the more complex level, a game can modify showStatusHtml and/or
showStatusText. Modifying these routines provides complete control over
the formatting of the entir status line. If a game wants to use
something other than the traditional left/right display, it must modify
these methods.

This object is transient, because the statusline style is a function of
the interpreter we\'re currently running on, and thus isn\'t suitable
for saving persistently.

`transient `**`statusLine`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`statusLine`**\
`         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`statusDispMode`](#statusDispMode)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`beginStatusLine`](#beginStatusLine)`  `[`endStatusLine`](#endStatusLine)`  `[`getEstimatedHeightHtml`](#getEstimatedHeightHtml)`  `[`initBannerWindow`](#initBannerWindow)`  `[`setColorScheme`](#setColorScheme)`  `[`showStatusHtml`](#showStatusHtml)`  `[`showStatusLeft`](#showStatusLeft)`  `[`showStatusLine`](#showStatusLine)`  `[`showStatusLineDaemon`](#showStatusLineDaemon)`  `[`showStatusRight`](#showStatusRight)`  `[`showStatusText`](#showStatusText)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#statusDispMode}

`statusDispMode`

[status.t](../file/status.t.html)\[[564](../source/status.t.html#564)\]

::: desc
The status mode we\'re using. If this is nil, it means we haven\'t
chosen a mode yet.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#beginStatusLine}

`beginStatusLine ( )`

[status.t](../file/status.t.html)\[[392](../source/status.t.html#392)\]

::: desc
Begin status-line mode. This sets up the output manager so that text
written to the default output stream is displayed on the status line.
Returns the original output stream.
:::

[]{#endStatusLine}

`endStatusLine (oldStr)`

[status.t](../file/status.t.html)\[[470](../source/status.t.html#470)\]

::: desc
end statusline display
:::

[]{#getEstimatedHeightHtml}

`getEstimatedHeightHtml ( )`

[status.t](../file/status.t.html)\[[294](../source/status.t.html#294)\]

::: desc
Get the estimated HTML-style banner height, in lines of text. This is
used to set the status line banner size for platforms where sizing to
the exact height of the rendered contents isn\'t supported.

If showStatusHtml() is overridden to display more or fewer lines of text
than the basic implementation here, then this routine must be overridden
as well to reflect the new height.
:::

[]{#initBannerWindow}

`initBannerWindow (win)`

[status.t](../file/status.t.html)\[[513](../source/status.t.html#513)\]

::: desc
Initialize the banner window, given the BannerWindow object representing
the status line banner API window.
:::

[]{#setColorScheme}

`setColorScheme ( )`

[status.t](../file/status.t.html)\[[381](../source/status.t.html#381)\]

::: desc
Set up the status line\'s color scheme. This is called each time we
redraw the status line to set the background and text colors. We call
the statusline banner window to do the work, since the mechanism is
different between the traditional and Web UIs.
:::

[]{#showStatusHtml}

`showStatusHtml ( )`

[status.t](../file/status.t.html)\[[252](../source/status.t.html#252)\]

::: desc
Show the status line in HTML format. Our default implementation shows
the traditional two-part (left/right) status line, using
showStatusLeft() and showStatusRight() to display the parts.
:::

[]{#showStatusLeft}

`showStatusLeft ( )`

[status.t](../file/status.t.html)\[[337](../source/status.t.html#337)\]

::: desc
Show the left part of a standard left/right statusline. By default,
we\'ll show the player character\'s location, by calling statusName() on
the PC\'s immediate container.
:::

[]{#showStatusLine}

`showStatusLine ( )`

[status.t](../file/status.t.html)\[[180](../source/status.t.html#180)\]

::: desc
Show the status line, in HTML or text mode, as appropriate. By default,
the library sets this up as a \"prompt daemon,\" which means that this
will be called automatically just before each command line is read.
:::

[]{#showStatusLineDaemon}

`showStatusLineDaemon ( )`

[status.t](../file/status.t.html)\[[232](../source/status.t.html#232)\]

::: desc
prompt-daemon showing the status line
:::

[]{#showStatusRight}

`showStatusRight ( )`

[status.t](../file/status.t.html)\[[358](../source/status.t.html#358)\]

::: desc
Show the right part of a standard left/right statusline. By default,
we\'ll show the current score, a slash, and the number of turns.
:::

[]{#showStatusText}

`showStatusText ( )`

[status.t](../file/status.t.html)\[[317](../source/status.t.html#317)\]

::: desc
Show the statusline in text mode. Our default implementation shows the
traditional two-part (left/right) status line, using showStatusLeft()
and showStatusRight() to display the parts.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::