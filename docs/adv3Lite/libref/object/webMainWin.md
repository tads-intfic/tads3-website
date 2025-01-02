---
layout: docs
---
<span class="title">webMainWin</span><span class="type">object</span>

[webui.t](../file/webui.t.html)\[[2714](../source/webui.t.html#2714)\]

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

The standard "main window" of our user interface. This is the game
object that represents the default initial HTML page that the player's
web browser connects to. We build this out of three base classes:

\- WebResourceInit, because this is the starting page that the browser
initially connects to. This class does the initial handshaking to set up
the session.

\- WebResourceResFile, because we store the HTML for the page in a
resource file. This class does the work of sending the resource file's
contents to the browser.

\- WebLayoutWindow, because the default main page is also a layout
window, which is basically a container for IFRAME elements where we plug
in the sub-windows that make up the game's user interface.

Games can customize the front page in any way they like. If you want to
customize the HTML of the main page, you can substitute a different HTML
(.html) file, and change the processName() method to return the name of
that file. If you want to use something other than a layout window as
the front page, you can simply replace this whole class.

`transient `**`webMainWin`**` :   [`WebResourceInit`](../object/WebResourceInit.html)   [`WebLayoutWindow`](../object/WebLayoutWindow.html)   `[`WebResourceResFile`](../object/WebResourceResFile.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`webMainWin`**  
[`WebResourceInit`](../object/WebResourceInit.html)  
`                 object`  
[`WebLayoutWindow`](../object/WebLayoutWindow.html)  
[`WebWindow`](../object/WebWindow.html)  
[`WebResourceResFile`](../object/WebResourceResFile.html)  
[`WebResource`](../object/WebResource.html)  
`                                         object`  
[`WebResourceResFile`](../object/WebResourceResFile.html)  
[`WebResource`](../object/WebResource.html)  
`                         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` [`curCmdClient`](#curCmdClient)  [`fileDialogResult`](#fileDialogResult)  [`fileDialogState`](#fileDialogState)  [`inputDialogResult`](#inputDialogResult)  [`inputDialogState`](#inputDialogState)  [`inputEventResult`](#inputEventResult)  [`inputEventState`](#inputEventState)  [`menuSysState`](#menuSysState)  [`name`](#name)  [`pathName`](#pathName)  [`synthEventQueue`](#synthEventQueue)  [`title`](#title)  [`vpath`](#vpath)  `

Inherited from `WebResourceInit` :  
` [`server`](../object/WebResourceInit.html#server)  `

Inherited from `WebLayoutWindow` :  
` [`frames`](../object/WebLayoutWindow.html#frames)  [`src`](../object/WebLayoutWindow.html#src)  `

Inherited from `WebWindow` :  
` [`sthCtx`](../object/WebWindow.html#sthCtx)  `

Inherited from `WebResourceResFile` :  
` [`binaryExts`](../object/WebResourceResFile.html#binaryExts)  [`browserExtToMime`](../object/WebResourceResFile.html#browserExtToMime)  `

Inherited from `WebResource` :  
` [`group`](../object/WebResource.html#group)  [`priority`](../object/WebResource.html#priority)  `





<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` [`getInputDialog`](#getInputDialog)  [`getInputEvent`](#getInputEvent)  [`getInputFile`](#getInputFile)  [`getInputFileFromClient`](#getInputFileFromClient)  [`getState`](#getState)  [`getSyntheticEvent`](#getSyntheticEvent)  [`inputFileDismissed`](#inputFileDismissed)  [`offerDownload`](#offerDownload)  [`postSyntheticEvent`](#postSyntheticEvent)  [`processName`](#processName)  [`receiveFileSelection`](#receiveFileSelection)  [`receiveFileUpload`](#receiveFileUpload)  [`receiveInputDialog`](#receiveInputDialog)  [`receiveInputEvent`](#receiveInputEvent)  [`setTitle`](#setTitle)  [`syntheticEventReady`](#syntheticEventReady)  `

Inherited from `WebResourceInit` :  
` [`connectUI`](../object/WebResourceInit.html#connectUI)  [`processRequest`](../object/WebResourceInit.html#processRequest)  `

Inherited from `WebLayoutWindow` :  
` [`createFrame`](../object/WebLayoutWindow.html#createFrame)  [`flushWin`](../object/WebLayoutWindow.html#flushWin)  [`winFromPath`](../object/WebLayoutWindow.html#winFromPath)  `

Inherited from `WebWindow` :  
` [`clearWindow`](../object/WebWindow.html#clearWindow)  [`sendWinEvent`](../object/WebWindow.html#sendWinEvent)  [`sendWinEventTo`](../object/WebWindow.html#sendWinEventTo)  [`write`](../object/WebWindow.html#write)  `

Inherited from `WebResourceResFile` :  
` [`isTextFile`](../object/WebResourceResFile.html#isTextFile)  [`matchRequest`](../object/WebResourceResFile.html#matchRequest)  `

Inherited from `WebResource` :  
` [`sendAck`](../object/WebResource.html#sendAck)  [`sendXML`](../object/WebResource.html#sendXML)  `





<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="curCmdClient"></span>

`curCmdClient`

[webui.t](../file/webui.t.html)\[[2744](../source/webui.t.html#2744)\]

<div class="desc">

Client session for current command line input. Certain modal
interactions, such as file dialogs, are directed only to the client that
initiated the current command.

</div>

<span id="fileDialogResult"></span>

`fileDialogResult`

[webui.t](../file/webui.t.html)\[[3202](../source/webui.t.html#3202)\]

<div class="desc">

file dialog result - this is a result list using the same format as the
native inputFile() function

</div>

<span id="fileDialogState"></span>

`fileDialogState`

[webui.t](../file/webui.t.html)\[[3196](../source/webui.t.html#3196)\]

<div class="desc">

file dialog state - this is the XML describing the currently open file
dialog; if the dialog isn't open, this is an empty string

</div>

<span id="inputDialogResult"></span>

`inputDialogResult`

[webui.t](../file/webui.t.html)\[[3211](../source/webui.t.html#3211)\]

<div class="desc">

input dialog result - this is the button number the user selected

</div>

<span id="inputDialogState"></span>

`inputDialogState`

[webui.t](../file/webui.t.html)\[[3208](../source/webui.t.html#3208)\]

<div class="desc">

input dialog state - this is the XML describing an input dialog while a
dialog is running, or an empty string if not

</div>

<span id="inputEventResult"></span>

`inputEventResult`

[webui.t](../file/webui.t.html)\[[3217](../source/webui.t.html#3217)\]

<div class="desc">

input event result

</div>

<span id="inputEventState"></span>

`inputEventState`

[webui.t](../file/webui.t.html)\[[3214](../source/webui.t.html#3214)\]

<div class="desc">

input event state

</div>

<span id="menuSysState"></span>

`menuSysState`

[webui.t](../file/webui.t.html)\[[3220](../source/webui.t.html#3220)\]

<div class="desc">

menuSys state - menu system state (maintained by the menu module)

</div>

<span id="name"></span>

`name`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[2723](../source/webui.t.html#2723)\]

<div class="desc">

the top window is always called "main"

</div>

<span id="pathName"></span>

`pathName`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[2724](../source/webui.t.html#2724)\]

<div class="desc">

*no description available*

</div>

<span id="synthEventQueue"></span>

`synthEventQueue`

[webui.t](../file/webui.t.html)\[[3229](../source/webui.t.html#3229)\]

<div class="desc">

Synthetic event queue. This is a vector of synthetic events, set up in
the \[type, params...\] format that the system inputEvent() function and
related functions use. The 'type' code for a synthetic evente is a
string instead of the numeric identifier that the system functions use.

</div>

<span id="title"></span>

`title`

[webui.t](../file/webui.t.html)\[[2727](../source/webui.t.html#2727)\]

<div class="desc">

the window title

</div>

<span id="vpath"></span>

`vpath`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[2719](../source/webui.t.html#2719)\]

<div class="desc">

match the webuires directory path as the URL path, but map this to
main.html as the underlying resource name

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="getInputDialog"></span>

`getInputDialog (icon, prompt, buttons, defaultButton, cancelButton)`

[webui.t](../file/webui.t.html)\[[3100](../source/webui.t.html#3100)\]

<div class="desc">

show a generic inputDialog dialog

</div>

<span id="getInputEvent"></span>

`getInputEvent (timeout)`

[webui.t](../file/webui.t.html)\[[2779](../source/webui.t.html#2779)\]

<div class="desc">

wait for an input event

</div>

<span id="getInputFile"></span>

`getInputFile (prompt, dialogType, fileType, flags)`

[webui.t](../file/webui.t.html)\[[2835](../source/webui.t.html#2835)\]

<div class="desc">

show the file selector dialog

</div>

<span id="getInputFileFromClient"></span>

`getInputFileFromClient (prompt, dialogType, fileType, flags)`

[webui.t](../file/webui.t.html)\[[2912](../source/webui.t.html#2912)\]

<div class="desc">

Get an input file from the client PC. We'll attempt to upload or
download a file from/to the client PC, using a local temporary file for
the actual file operations. This is a special form of the input file
dialog that we use when we're not connected to a storage server.

</div>

<span id="getState"></span>

`getState (client)`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[2747](../source/webui.t.html#2747)\]

<div class="desc">

get the state

</div>

<span id="getSyntheticEvent"></span>

`getSyntheticEvent ( )`

[webui.t](../file/webui.t.html)\[[3190](../source/webui.t.html#3190)\]

<div class="desc">

pull the next synthetic event from the queue

</div>

<span id="inputFileDismissed"></span>

`inputFileDismissed ( )`

[webui.t](../file/webui.t.html)\[[3033](../source/webui.t.html#3033)\]

<div class="desc">

receive notification that the file dialog has been closed

</div>

<span id="offerDownload"></span>

`offerDownload (file)`

[webui.t](../file/webui.t.html)\[[2986](../source/webui.t.html#2986)\]

<div class="desc">

Offer a file for download to the client. 'file' is a DownloadTempFile
object previously created by a call to inputFile().

</div>

<span id="postSyntheticEvent"></span>

`postSyntheticEvent (id, [params])`

[webui.t](../file/webui.t.html)\[[3180](../source/webui.t.html#3180)\]

<div class="desc">

Post a synthetic event. A synthetic event looks like a regular UI or
network event, but is generated internally instead of being delivered
from the underlying browser or network subsystems.

'id' is a string giving the event type. The remaining parameters are up
to each event type to define.

</div>

<span id="processName"></span>

`processName (n)`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[2720](../source/webui.t.html#2720)\]

<div class="desc">

*no description available*

</div>

<span id="receiveFileSelection"></span>

`receiveFileSelection (req, query)`

[webui.t](../file/webui.t.html)\[[2999](../source/webui.t.html#2999)\]

<div class="desc">

receive a file selection from the file selector dialog

</div>

<span id="receiveFileUpload"></span>

`receiveFileUpload (req, query)`

[webui.t](../file/webui.t.html)\[[3040](../source/webui.t.html#3040)\]

<div class="desc">

receive a file upload from the file upload dialog

</div>

<span id="receiveInputDialog"></span>

`receiveInputDialog (req, query)`

[webui.t](../file/webui.t.html)\[[3159](../source/webui.t.html#3159)\]

<div class="desc">

receive a selection from the input dialog

</div>

<span id="receiveInputEvent"></span>

`receiveInputEvent (req, query)`

[webui.t](../file/webui.t.html)\[[2813](../source/webui.t.html#2813)\]

<div class="desc">

receive an input event

</div>

<span id="setTitle"></span>

`setTitle (title)`

[webui.t](../file/webui.t.html)\[[2730](../source/webui.t.html#2730)\]

<div class="desc">

set the window title

</div>

<span id="syntheticEventReady"></span>

`syntheticEventReady ( )`

[webui.t](../file/webui.t.html)\[[3187](../source/webui.t.html#3187)\]

<div class="desc">

is a synthetic event ready?

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
