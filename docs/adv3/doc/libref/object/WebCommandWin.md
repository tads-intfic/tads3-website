---
layout: docs
---
<span class="title">WebCommandWin</span><span class="type">class</span>

[webui.t](../file/webui.t.html)\[[1936](../source/webui.t.html#1936)\]

[Superclass  
Tree](#_SuperClassTree_)

[Subclass  
Tree](#_SubClassTree_)

[Global  
Objects](#_ObjectSummary_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)

<div class="fdesc">

Command Window. This object keeps track of the state of command window
within the web UI.

`class `**`WebCommandWin`**` :   `[`WebWindow`](../object/WebWindow.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`WebCommandWin`**  
`         `[`WebWindow`](../object/WebWindow.html)  
`                 `[`WebResourceResFile`](../object/WebResourceResFile.html)  
`                         `[`WebResource`](../object/WebResource.html)  
`                                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

` `[`commandWin`](../object/commandWin.html)`  `
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`isInputOpen`](#isInputOpen)`  `[`lastInput`](#lastInput)`  `[`lastInputClient`](#lastInputClient)`  `[`lastInputReady`](#lastInputReady)`  `[`mode`](#mode)`  `[`moreMode`](#moreMode)`  `[`outbuf`](#outbuf)`  `[`scrollback`](#scrollback)`  `[`scrollbackLimit`](#scrollbackLimit)`  `[`src`](#src)`  `[`textbuf`](#textbuf)`  `[`vpath`](#vpath)`  `

Inherited from `WebWindow` :  
` `[`name`](../object/WebWindow.html#name)`  `[`pathName`](../object/WebWindow.html#pathName)`  `[`sthCtx`](../object/WebWindow.html#sthCtx)`  `

Inherited from `WebResourceResFile` :  
` `[`binaryExts`](../object/WebResourceResFile.html#binaryExts)`  `[`browserExtToMime`](../object/WebResourceResFile.html#browserExtToMime)`  `

Inherited from `WebResource` :  
` `[`group`](../object/WebResource.html#group)`  `[`priority`](../object/WebResource.html#priority)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`cancelInputLine`](#cancelInputLine)`  `[`clearWindow`](#clearWindow)`  `[`endMoreMode`](#endMoreMode)`  `[`flushWin`](#flushWin)`  `[`getInputLine`](#getInputLine)`  `[`getState`](#getState)`  `[`receiveInput`](#receiveInput)`  `[`showMorePrompt`](#showMorePrompt)`  `[`textbufToScrollback`](#textbufToScrollback)`  `[`write`](#write)`  `

Inherited from `WebWindow` :  
` `[`processName`](../object/WebWindow.html#processName)`  `[`sendWinEvent`](../object/WebWindow.html#sendWinEvent)`  `[`sendWinEventTo`](../object/WebWindow.html#sendWinEventTo)`  `[`winFromPath`](../object/WebWindow.html#winFromPath)`  `

Inherited from `WebResourceResFile` :  
` `[`isTextFile`](../object/WebResourceResFile.html#isTextFile)`  `[`matchRequest`](../object/WebResourceResFile.html#matchRequest)`  `[`processRequest`](../object/WebResourceResFile.html#processRequest)`  `

Inherited from `WebResource` :  
` `[`sendAck`](../object/WebResource.html#sendAck)`  `[`sendXML`](../object/WebResource.html#sendXML)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="isInputOpen"></span>

`isInputOpen`

[webui.t](../file/webui.t.html)\[[2201](../source/webui.t.html#2201)\]

<div class="desc">

Is an input line open? This is true between sending an \<inputLine\>
event and either getting a reply, or explicitly sending a close or
cancel event.

</div>

<span id="lastInput"></span>

`lastInput`

[webui.t](../file/webui.t.html)\[[2188](../source/webui.t.html#2188)\]

<div class="desc">

the text of the last input line we received from the client

</div>

<span id="lastInputClient"></span>

`lastInputClient`

[webui.t](../file/webui.t.html)\[[2194](../source/webui.t.html#2194)\]

<div class="desc">

client session who sent the last input line

</div>

<span id="lastInputReady"></span>

`lastInputReady`

[webui.t](../file/webui.t.html)\[[2191](../source/webui.t.html#2191)\]

<div class="desc">

is input ready?

</div>

<span id="mode"></span>

`mode`

[webui.t](../file/webui.t.html)\[[2212](../source/webui.t.html#2212)\]

<div class="desc">

Current UI mode. This is 'working' if the program is running and in the
process of computing and/or generating output; 'inputLine' if we're
waiting for the user to enter a line of input; 'morePrompt' if we're
showing a "More" prompt.

</div>

<span id="moreMode"></span>

`moreMode`

[webui.t](../file/webui.t.html)\[[2204](../source/webui.t.html#2204)\]

<div class="desc">

flag: we're in More mode

</div>

<span id="outbuf"></span>

`outbuf`

[webui.t](../file/webui.t.html)\[[2185](../source/webui.t.html#2185)\]

<div class="desc">

pending output buffer, since last flush

</div>

<span id="scrollback"></span>

`scrollback`

[webui.t](../file/webui.t.html)\[[2174](../source/webui.t.html#2174)\]

<div class="desc">

Scrollback list. After each input, we add the contents of 'textbuf' to
this list. If this pushes the list past the limit, we drop the oldest
item. This is used to reconstruct a reasonable amount of scrollback
history when a new client connects, or when an existing client refreshes
the page.

</div>

<span id="scrollbackLimit"></span>

`scrollbackLimit`

[webui.t](../file/webui.t.html)\[[2182](../source/webui.t.html#2182)\]

<div class="desc">

The scrollback limit, as a number of command inputs. Each input
interaction adds one item to the scrollback list. When the number of
items in the list exceeds the limit set here, we drop the oldest item.

</div>

<span id="src"></span>

`src`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[2216](../source/webui.t.html#2216)\]

<div class="desc">

*no description available*

</div>

<span id="textbuf"></span>

`textbuf`

[webui.t](../file/webui.t.html)\[[2165](../source/webui.t.html#2165)\]

<div class="desc">

main window text buffer since last input read

</div>

<span id="vpath"></span>

`vpath`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[2215](../source/webui.t.html#2215)\]

<div class="desc">

my virtual path, and the actual resource file location

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="cancelInputLine"></span>

`cancelInputLine (reset)`

[webui.t](../file/webui.t.html)\[[2026](../source/webui.t.html#2026)\]

<div class="desc">

Cancel an input line that was interrupted by a timeout

</div>

<span id="clearWindow"></span>

`clearWindow ( )`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[2086](../source/webui.t.html#2086)\]

<div class="desc">

Clear the window

</div>

<span id="endMoreMode"></span>

`endMoreMode ( )`

[webui.t](../file/webui.t.html)\[[2158](../source/webui.t.html#2158)\]

<div class="desc">

receive notification from the client that the user has responded to the
More prompt, ending the pause

</div>

<span id="flushWin"></span>

`flushWin ( )`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[1949](../source/webui.t.html#1949)\]

<div class="desc">

Flush the buffers

</div>

<span id="getInputLine"></span>

`getInputLine (timeout?)`

[webui.t](../file/webui.t.html)\[[1968](../source/webui.t.html#1968)\]

<div class="desc">

Read a line of input in this window. Blocks until the reply is received.
Returns nil on timeout.

</div>

<span id="getState"></span>

`getState (client)`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[2046](../source/webui.t.html#2046)\]

<div class="desc">

Get the state of this command window

</div>

<span id="receiveInput"></span>

`receiveInput (req, query)`

[webui.t](../file/webui.t.html)\[[2057](../source/webui.t.html#2057)\]

<div class="desc">

Receive input from the client

</div>

<span id="showMorePrompt"></span>

`showMorePrompt ( )`

[webui.t](../file/webui.t.html)\[[2137](../source/webui.t.html#2137)\]

<div class="desc">

Show a "More" prompt

</div>

<span id="textbufToScrollback"></span>

`textbufToScrollback (cmd)`

[webui.t](../file/webui.t.html)\[[2114](../source/webui.t.html#2114)\]

<div class="desc">

Move the current text buffer contents to the scrollback list. If this
would make the scrollback list exceed the limit, we'll drop the oldest
item.

'cmd' is the command line text of the last input. We include this in the
srollback list with special tagging so that the UI can display it in a
custom style, if it wants.

</div>

<span id="write"></span>

`write (txt)`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[1940](../source/webui.t.html#1940)\]

<div class="desc">

Write to the window

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
