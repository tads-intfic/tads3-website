---
layout: docs
---
<span class="title">statusLine</span><span class="type">object</span>

[status.t](../file/status.t.html)\[[173](../source/status.t.html#173)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)

<div class="fdesc">

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
underlying interpreter, games don't have to worry about the different
modes when overriding these.

At the more complex level, a game can modify showStatusHtml and/or
showStatusText. Modifying these routines provides complete control over
the formatting of the entir status line. If a game wants to use
something other than the traditional left/right display, it must modify
these methods.

This object is transient, because the statusline style is a function of
the interpreter we're currently running on, and thus isn't suitable for
saving persistently.

`transient `**`statusLine`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`statusLine`**  
`         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`statusDispMode`](#statusDispMode)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`beginStatusLine`](#beginStatusLine)[`endStatusLine`](#endStatusLine)[`getEstimatedHeightHtml`](#getEstimatedHeightHtml)[`initBannerWindow`](#initBannerWindow)[`setColorScheme`](#setColorScheme)[`showStatusHtml`](#showStatusHtml)[`showStatusLeft`](#showStatusLeft)[`showStatusLine`](#showStatusLine)[`showStatusLineDaemon`](#showStatusLineDaemon)[`showStatusRight`](#showStatusRight)[`showStatusText`](#showStatusText)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="statusDispMode"></span>

`statusDispMode`

[status.t](../file/status.t.html)\[[566](../source/status.t.html#566)\]

<div class="desc">

The status mode we're using. If this is nil, it means we haven't chosen
a mode yet.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="beginStatusLine"></span>

`beginStatusLine ( )`

[status.t](../file/status.t.html)\[[394](../source/status.t.html#394)\]

<div class="desc">

Begin status-line mode. This sets up the output manager so that text
written to the default output stream is displayed on the status line.
Returns the original output stream.

</div>

<span id="endStatusLine"></span>

`endStatusLine (oldStr)`

[status.t](../file/status.t.html)\[[472](../source/status.t.html#472)\]

<div class="desc">

end statusline display

</div>

<span id="getEstimatedHeightHtml"></span>

`getEstimatedHeightHtml ( )`

[status.t](../file/status.t.html)\[[300](../source/status.t.html#300)\]

<div class="desc">

Get the estimated HTML-style banner height, in lines of text. This is
used to set the status line banner size for platforms where sizing to
the exact height of the rendered contents isn't supported.

If showStatusHtml() is overridden to display more or fewer lines of text
than the basic implementation here, then this routine must be overridden
as well to reflect the new height.

</div>

<span id="initBannerWindow"></span>

`initBannerWindow (win)`

[status.t](../file/status.t.html)\[[515](../source/status.t.html#515)\]

<div class="desc">

Initialize the banner window, given the BannerWindow object representing
the status line banner API window.

</div>

<span id="setColorScheme"></span>

`setColorScheme ( )`

[status.t](../file/status.t.html)\[[383](../source/status.t.html#383)\]

<div class="desc">

Set up the status line's color scheme. This is called each time we
redraw the status line to set the background and text colors. We call
the statusline banner window to do the work, since the mechanism is
different between the traditional and Web UIs.

</div>

<span id="showStatusHtml"></span>

`showStatusHtml ( )`

[status.t](../file/status.t.html)\[[259](../source/status.t.html#259)\]

<div class="desc">

Show the status line in HTML format. Our default implementation shows
the traditional two-part (left/right) status line, using
showStatusLeft() and showStatusRight() to display the parts.

</div>

<span id="showStatusLeft"></span>

`showStatusLeft ( )`

[status.t](../file/status.t.html)\[[343](../source/status.t.html#343)\]

<div class="desc">

Show the left part of a standard left/right statusline. By default,
we'll show the player character's location, by calling statusName() on
the PC's immediate container.

</div>

<span id="showStatusLine"></span>

`showStatusLine ( )`

[status.t](../file/status.t.html)\[[180](../source/status.t.html#180)\]

<div class="desc">

Show the status line, in HTML or text mode, as appropriate. By default,
the library sets this up as a "prompt daemon," which means that this
will be called automatically just before each command line is read.

</div>

<span id="showStatusLineDaemon"></span>

`showStatusLineDaemon ( )`

[status.t](../file/status.t.html)\[[239](../source/status.t.html#239)\]

<div class="desc">

prompt-daemon showing the status line

</div>

<span id="showStatusRight"></span>

`showStatusRight ( )`

[status.t](../file/status.t.html)\[[364](../source/status.t.html#364)\]

<div class="desc">

Show the right part of a standard left/right statusline. By default,
we'll show the current score, a slash, and the number of turns.

</div>

<span id="showStatusText"></span>

`showStatusText ( )`

[status.t](../file/status.t.html)\[[323](../source/status.t.html#323)\]

<div class="desc">

Show the statusline in text mode. Our default implementation shows the
traditional two-part (left/right) status line, using showStatusLeft()
and showStatusRight() to display the parts.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
