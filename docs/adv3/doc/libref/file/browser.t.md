---
layout: docs
---
<span class="title">browser.t</span><span class="type">file</span>

[source file](../source/browser.t.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Objects**  
[Summary](#_ObjectSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)

<div class="fdesc">

TADS 3 Library - browser (Web UI) input/output manager

This module defines the low-level functions for handling input and
output via the Web UI.

The functions in this module are designed primarily for internal use
within the library itself. Games should use the higher level objects and
functions defined in input.t and output.t instead of directly calling
the functions defined here. The reason for separating these functions is
to make the UI selection pluggable, so that the same game can be
compiled for either the traditional UI or the Web UI simply by plugging
in the correct i/o module.

</div>

<span id="_ClassSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Classes</span>  

</div>

[`WebBannerWin`](../object/WebBannerWin.html)[`WebWinOutputStream`](../object/WebWinOutputStream.html)
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Objects</span>  

</div>

[`browserGlobals`](../object/browserGlobals.html)[`commandWin`](../object/commandWin.html)[`statuslineBanner`](../object/statuslineBanner.html)
<span id="FunctionSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Functions</span>  

</div>

[`aHref`](#aHref)[`aHrefAlt`](#aHrefAlt)[`aioClearScreen`](#aioClearScreen)[`aioInputDialog`](#aioInputDialog)[`aioInputEvent`](#aioInputEvent)[`aioInputFile`](#aioInputFile)[`aioInputLineCancel`](#aioInputLineCancel)[`aioInputLineTimeout`](#aioInputLineTimeout)[`aioLogInputEvent`](#aioLogInputEvent)[`aioMorePrompt`](#aioMorePrompt)[`aioSay`](#aioSay)[`aioSetLogFile`](#aioSetLogFile)[`checkHtmlMode`](#checkHtmlMode)[`evtCharForScript`](#evtCharForScript)[`initDisplay`](#initDisplay)[`initUI`](#initUI)[`readingEventScript`](#readingEventScript)[`readingScript`](#readingScript)[`statusHTML`](#statusHTML)[`terminateUI`](#terminateUI)

<span id="_Functions_"></span>

<div class="mjhd">

<span class="hdln">Global Functions</span>  

</div>

<span id="aHref"></span>

`aHref (href, txt?, title?, flags, =, 0)`

[browser.t](../file/browser.t.html)\[[642](../source/browser.t.html#642)\]

<div class="desc">

Generate a string to show hyperlinked text. The browser UI is always in
HTML mode, so we unconditionally generate the hyperlink.

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

[browser.t](../file/browser.t.html)\[[667](../source/browser.t.html#667)\]

<div class="desc">

Generate a string to show hyperlinked text, with alternate text if we're
not in HTML mode. The browser UI is always in HTML mode, so we
unconditionally generate the hyperlink.

</div>

<span id="aioClearScreen"></span>

`aioClearScreen ( )`

[browser.t](../file/browser.t.html)\[[277](../source/browser.t.html#277)\]

<div class="desc">

Clear the screen

</div>

<span id="aioInputDialog"></span>

`aioInputDialog (icon, prompt, buttons, defaultButton, cancelButton)`

[browser.t](../file/browser.t.html)\[[398](../source/browser.t.html#398)\]

<div class="desc">

Show an input dialog

</div>

<span id="aioInputEvent"></span>

`aioInputEvent (timeout)`

[browser.t](../file/browser.t.html)\[[241](../source/browser.t.html#241)\]

<div class="desc">

Read an input event

</div>

<span id="aioInputFile"></span>

`aioInputFile (prompt, dialogType, fileType, flags)`

[browser.t](../file/browser.t.html)\[[288](../source/browser.t.html#288)\]

<div class="desc">

Show a file selector dialog

</div>

<span id="aioInputLineCancel"></span>

`aioInputLineCancel (reset)`

[browser.t](../file/browser.t.html)\[[230](../source/browser.t.html#230)\]

<div class="desc">

Cancel a suspended input line

</div>

<span id="aioInputLineTimeout"></span>

`aioInputLineTimeout (timeout)`

[browser.t](../file/browser.t.html)\[[195](../source/browser.t.html#195)\]

<div class="desc">

Get a line of input from the keyboard, with timeout

</div>

<span id="aioLogInputEvent"></span>

`aioLogInputEvent (evt)`

[browser.t](../file/browser.t.html)\[[525](../source/browser.t.html#525)\]

<div class="desc">

Log an input event. We call this internally from each of the event input
routines to add the event to any event or command log we're creating.

</div>

<span id="aioMorePrompt"></span>

`aioMorePrompt ( )`

[browser.t](../file/browser.t.html)\[[267](../source/browser.t.html#267)\]

<div class="desc">

Show a "More" prompt

</div>

<span id="aioSay"></span>

`aioSay (txt)`

[browser.t](../file/browser.t.html)\[[163](../source/browser.t.html#163)\]

<div class="desc">

Write text to the main game window

</div>

<span id="aioSetLogFile"></span>

`aioSetLogFile (fname, typ, =, 1)`

[browser.t](../file/browser.t.html)\[[429](../source/browser.t.html#429)\]

<div class="desc">

Set/remove the output logging file

</div>

<span id="checkHtmlMode"></span>

`checkHtmlMode ( )`

[browser.t](../file/browser.t.html)\[[147](../source/browser.t.html#147)\]

<div class="desc">

Check to see if we're in HTML mode

</div>

<span id="evtCharForScript"></span>

`evtCharForScript (c)`

[browser.t](../file/browser.t.html)\[[613](../source/browser.t.html#613)\]

<div class="desc">

Get an InEvtKey event parameter in suitable format for script file
output. This returns the key as it appears in the event, except that
ASCII control characters are translated to '\[ctrl-X\]'.

</div>

<span id="initDisplay"></span>

`initDisplay ( )`

[browser.t](../file/browser.t.html)\[[72](../source/browser.t.html#72)\]

<div class="desc">

Initialize the display. We call this when we first enter the
interpreter, and again at each RESTART, to set up the main game window's
initial layout. We set up the conventional IF screen layout, with the
status line across the top and the transcript/command window filling the
rest of the display.

</div>

<span id="initUI"></span>

`initUI ( )`

[browser.t](../file/browser.t.html)\[[48](../source/browser.t.html#48)\]

<div class="desc">

Initialize the user interface. The library calls this once at the start
of the interpreter session to set up the UI. For the Web UI, we create
the HTTP server and send connection instructions to the client.

</div>

<span id="readingEventScript"></span>

`readingEventScript ( )`

[browser.t](../file/browser.t.html)\[[185](../source/browser.t.html#185)\]

<div class="desc">

Is an event script active?

</div>

<span id="readingScript"></span>

`readingScript ( )`

[browser.t](../file/browser.t.html)\[[177](../source/browser.t.html#177)\]

<div class="desc">

Is a script file active?

</div>

<span id="statusHTML"></span>

`statusHTML (stage)`

[browser.t](../file/browser.t.html)\[[688](../source/browser.t.html#688)\]

<div class="desc">

Generate HTML to wrap the left/right portions of the status line. The
basic status line has three stages: stage 0 precedes the left portion,
stage 1 comes between the left and right portions, and stage 2 follows
the right portion. If we're listing exits, we get two more stages: stage
3 precedes the exit listing, stage 4 follows it.

</div>

<span id="terminateUI"></span>

`terminateUI ( )`

[browser.t](../file/browser.t.html)\[[113](../source/browser.t.html#113)\]

<div class="desc">

Shut down the user interface. The library calls this when the game is
about to terminate.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
