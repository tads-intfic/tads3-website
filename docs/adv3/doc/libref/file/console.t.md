---
layout: docs
---
<span class="title">console.t</span><span class="type">file</span>

[source file](../source/console.t.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Objects**  
[Summary](#_ObjectSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)

<div class="fdesc">

TADS 3 Library - console input/output manager

This module defines the low-level functions for handling input and
output via the traditional interpreter's user interface, using the local
keyboard and console via the "tads-io" function set.

The functions in this module are designed primarily for internal use
within the library itself. Games should use the higher level objects and
functions defined in input.t and output.t instead of directly calling
the functions defined here. The reason for separating these functions is
so that we can substitute the Web UI versions for games that wish to use
the Web UI insetad of the traditional console UI.

</div>

<span id="_ClassSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Classes</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Objects</span>  

</div>

[`statuslineBanner`](../object/statuslineBanner1.html)
<span id="FunctionSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Functions</span>  

</div>

[`aHref`](#aHref)[`aHrefAlt`](#aHrefAlt)[`aioClearScreen`](#aioClearScreen)[`aioInputDialog`](#aioInputDialog)[`aioInputEvent`](#aioInputEvent)[`aioInputFile`](#aioInputFile)[`aioInputLineCancel`](#aioInputLineCancel)[`aioInputLineTimeout`](#aioInputLineTimeout)[`aioMorePrompt`](#aioMorePrompt)[`aioSay`](#aioSay)[`aioSetLogFile`](#aioSetLogFile)[`checkHtmlMode`](#checkHtmlMode)[`initDisplay`](#initDisplay)[`initUI`](#initUI)[`statusHTML`](#statusHTML)[`terminateUI`](#terminateUI)

<span id="_Functions_"></span>

<div class="mjhd">

<span class="hdln">Global Functions</span>  

</div>

<span id="aHref"></span>

`aHref (href, txt?, title?, flags, =, 0)`

[console.t](../file/console.t.html)\[[189](../source/console.t.html#189)\]

<div class="desc">

Generate a string to show hyperlinked text. If we're not in HTML mode,
we'll simply return the text without the hyperlink; otherwise, we'll
return the text with a hyperlink to the given HREF.

If the display text is included, we'll generate the entire link,
including the \<A HREF\> tag, the hyperlinked text contents, and the
\</A\> end tag. If the text is omitted, we'll simply generate the \<A
HREF\> tag itself, leaving it to the caller to display the text and the
\</A\>.

The optional 'flags' is a combination of AHREF_xxx flags indicating any
special properties of the hyperlink.

</div>

<span id="aHrefAlt"></span>

`aHrefAlt (href, linkedText, altText, title?)`

[console.t](../file/console.t.html)\[[224](../source/console.t.html#224)\]

<div class="desc">

Generate a string to show hyperlinked text, with alternate text if we're
not in HTML mode. If we're in HTML mode, we'll return linkedTxt linked
to the given HREF; if we're in plain text mode, we'll return the
alternate text as-is.

</div>

<span id="aioClearScreen"></span>

`aioClearScreen ( )`

[console.t](../file/console.t.html)\[[165](../source/console.t.html#165)\]

<div class="desc">

Clear the screen

</div>

<span id="aioInputDialog"></span>

`aioInputDialog (icon, prompt, buttons, defaultButton, cancelButton)`

[console.t](../file/console.t.html)\[[145](../source/console.t.html#145)\]

<div class="desc">

Show an input dialog

</div>

<span id="aioInputEvent"></span>

`aioInputEvent (timeout)`

[console.t](../file/console.t.html)\[[113](../source/console.t.html#113)\]

<div class="desc">

Read an input event

</div>

<span id="aioInputFile"></span>

`aioInputFile (prompt, dialogType, fileType, flags)`

[console.t](../file/console.t.html)\[[135](../source/console.t.html#135)\]

<div class="desc">

Show a file selector dialog

</div>

<span id="aioInputLineCancel"></span>

`aioInputLineCancel (reset)`

[console.t](../file/console.t.html)\[[102](../source/console.t.html#102)\]

<div class="desc">

Cancel a suspended input line

</div>

<span id="aioInputLineTimeout"></span>

`aioInputLineTimeout (timeout)`

[console.t](../file/console.t.html)\[[93](../source/console.t.html#93)\]

<div class="desc">

Get a line of input from the keyboard, with timeout

</div>

<span id="aioMorePrompt"></span>

`aioMorePrompt ( )`

[console.t](../file/console.t.html)\[[124](../source/console.t.html#124)\]

<div class="desc">

Show a "More" prompt

</div>

<span id="aioSay"></span>

`aioSay (txt)`

[console.t](../file/console.t.html)\[[83](../source/console.t.html#83)\]

<div class="desc">

Write text to the main game window

</div>

<span id="aioSetLogFile"></span>

`aioSetLogFile (fname, logType?)`

[console.t](../file/console.t.html)\[[155](../source/console.t.html#155)\]

<div class="desc">

Set/remove the output logging file

</div>

<span id="checkHtmlMode"></span>

`checkHtmlMode ( )`

[console.t](../file/console.t.html)\[[61](../source/console.t.html#61)\]

<div class="desc">

Check to see if we're in HTML mode

</div>

<span id="initDisplay"></span>

`initDisplay ( )`

[console.t](../file/console.t.html)\[[39](../source/console.t.html#39)\]

<div class="desc">

Initialize the display. The library calls this at the start of the game,
and after each RESTART, to set up the layout of the game window.

</div>

<span id="initUI"></span>

`initUI ( )`

[console.t](../file/console.t.html)\[[31](../source/console.t.html#31)\]

<div class="desc">

Initialize the user interface. The library calls this once at the start
of the interpreter session to set up the UI. For the console
interpreter, we don't need to do anything here; the interpreter takes
care of setting up the display window for us.

</div>

<span id="statusHTML"></span>

`statusHTML (stage)`

[console.t](../file/console.t.html)\[[249](../source/console.t.html#249)\]

<div class="desc">

Generate HTML to wrap the left/right portions of the status line. The
basic status line has three stages: stage 0 precedes the left portion,
stage 1 comes between the left and right portions, and stage 2 follows
the right portion. If we're listing exits, we get two more stages: stage
3 precedes the exit listing, stage 4 follows it.

</div>

<span id="terminateUI"></span>

`terminateUI ( )`

[console.t](../file/console.t.html)\[[52](../source/console.t.html#52)\]

<div class="desc">

Shut down the user interface. The library calls this once just before
the game is about to terminate.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
