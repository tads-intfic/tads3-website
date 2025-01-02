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



<span id="_ClassSummary_"></span>



<span class="hdln">Summary of Classes</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Summary of Global Objects</span>  



[`statuslineBanner`](../object/statuslineBanner1.html)
<span id="FunctionSummary_"></span>



<span class="hdln">Summary of Global Functions</span>  



[`aHref`](#aHref) [`aHrefAlt`](#aHrefAlt) [`aioClearScreen`](#aioClearScreen) [`aioInputDialog`](#aioInputDialog) [`aioInputEvent`](#aioInputEvent) [`aioInputFile`](#aioInputFile) [`aioInputLineCancel`](#aioInputLineCancel) [`aioInputLineTimeout`](#aioInputLineTimeout) [`aioMorePrompt`](#aioMorePrompt) [`aioSay`](#aioSay) [`aioSetLogFile`](#aioSetLogFile) [`checkHtmlMode`](#checkHtmlMode) [`initDisplay`](#initDisplay) [`initUI`](#initUI) [`statusHTML`](#statusHTML) [`terminateUI`](#terminateUI)

<span id="_Functions_"></span>



<span class="hdln">Global Functions</span>  



<span id="aHref"></span>

`aHref (href, txt?, title?, flags, =, 0)`

[console.t](../file/console.t.html)\[[189](../source/console.t.html#189)\]



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



<span id="aHrefAlt"></span>

`aHrefAlt (href, linkedText, altText, title?)`

[console.t](../file/console.t.html)\[[224](../source/console.t.html#224)\]



Generate a string to show hyperlinked text, with alternate text if we're
not in HTML mode. If we're in HTML mode, we'll return linkedTxt linked
to the given HREF; if we're in plain text mode, we'll return the
alternate text as-is.



<span id="aioClearScreen"></span>

`aioClearScreen ( )`

[console.t](../file/console.t.html)\[[165](../source/console.t.html#165)\]



Clear the screen



<span id="aioInputDialog"></span>

`aioInputDialog (icon, prompt, buttons, defaultButton, cancelButton)`

[console.t](../file/console.t.html)\[[145](../source/console.t.html#145)\]



Show an input dialog



<span id="aioInputEvent"></span>

`aioInputEvent (timeout)`

[console.t](../file/console.t.html)\[[113](../source/console.t.html#113)\]



Read an input event



<span id="aioInputFile"></span>

`aioInputFile (prompt, dialogType, fileType, flags)`

[console.t](../file/console.t.html)\[[135](../source/console.t.html#135)\]



Show a file selector dialog



<span id="aioInputLineCancel"></span>

`aioInputLineCancel (reset)`

[console.t](../file/console.t.html)\[[102](../source/console.t.html#102)\]



Cancel a suspended input line



<span id="aioInputLineTimeout"></span>

`aioInputLineTimeout (timeout)`

[console.t](../file/console.t.html)\[[93](../source/console.t.html#93)\]



Get a line of input from the keyboard, with timeout



<span id="aioMorePrompt"></span>

`aioMorePrompt ( )`

[console.t](../file/console.t.html)\[[124](../source/console.t.html#124)\]



Show a "More" prompt



<span id="aioSay"></span>

`aioSay (txt)`

[console.t](../file/console.t.html)\[[83](../source/console.t.html#83)\]



Write text to the main game window



<span id="aioSetLogFile"></span>

`aioSetLogFile (fname, logType?)`

[console.t](../file/console.t.html)\[[155](../source/console.t.html#155)\]



Set/remove the output logging file



<span id="checkHtmlMode"></span>

`checkHtmlMode ( )`

[console.t](../file/console.t.html)\[[61](../source/console.t.html#61)\]



Check to see if we're in HTML mode



<span id="initDisplay"></span>

`initDisplay ( )`

[console.t](../file/console.t.html)\[[39](../source/console.t.html#39)\]



Initialize the display. The library calls this at the start of the game,
and after each RESTART, to set up the layout of the game window.



<span id="initUI"></span>

`initUI ( )`

[console.t](../file/console.t.html)\[[31](../source/console.t.html#31)\]



Initialize the user interface. The library calls this once at the start
of the interpreter session to set up the UI. For the console
interpreter, we don't need to do anything here; the interpreter takes
care of setting up the display window for us.



<span id="statusHTML"></span>

`statusHTML (stage)`

[console.t](../file/console.t.html)\[[249](../source/console.t.html#249)\]



Generate HTML to wrap the left/right portions of the status line. The
basic status line has three stages: stage 0 precedes the left portion,
stage 1 comes between the left and right portions, and stage 2 follows
the right portion. If we're listing exits, we get two more stages: stage
3 precedes the exit listing, stage 4 follows it.



<span id="terminateUI"></span>

`terminateUI ( )`

[console.t](../file/console.t.html)\[[52](../source/console.t.html#52)\]



Shut down the user interface. The library calls this once just before
the game is about to terminate.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


