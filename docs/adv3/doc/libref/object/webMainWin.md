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

`transient `**`webMainWin`**` :   `[`WebResourceInit`](../object/WebResourceInit.html) [`WebLayoutWindow`](../object/WebLayoutWindow.html) [`WebResourceResFile`](../object/WebResourceResFile.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



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



<span class="hdln">Summary of Properties</span>  



[`curCmdClient`](#curCmdClient) [`fileDialogResult`](#fileDialogResult) [`fileDialogState`](#fileDialogState) [`inputDialogResult`](#inputDialogResult) [`inputDialogState`](#inputDialogState) [`inputEventResult`](#inputEventResult) [`inputEventState`](#inputEventState) [`menuSysState`](#menuSysState) [`name`](#name) [`pathName`](#pathName) [`synthEventQueue`](#synthEventQueue) [`title`](#title) [`vpath`](#vpath)

Inherited from `WebResourceInit` :  
[`server`](../object/WebResourceInit.html#server)

Inherited from `WebLayoutWindow` :  
[`frames`](../object/WebLayoutWindow.html#frames) [`src`](../object/WebLayoutWindow.html#src)

Inherited from `WebWindow` :  
[`sthCtx`](../object/WebWindow.html#sthCtx)

Inherited from `WebResourceResFile` :  
[`binaryExts`](../object/WebResourceResFile.html#binaryExts) [`browserExtToMime`](../object/WebResourceResFile.html#browserExtToMime)

Inherited from `WebResource` :  
[`group`](../object/WebResource.html#group) [`priority`](../object/WebResource.html#priority)





<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`getInputDialog`](#getInputDialog) [`getInputEvent`](#getInputEvent) [`getInputFile`](#getInputFile) [`getInputFileFromClient`](#getInputFileFromClient) [`getState`](#getState) [`getSyntheticEvent`](#getSyntheticEvent) [`inputFileDismissed`](#inputFileDismissed) [`offerDownload`](#offerDownload) [`postSyntheticEvent`](#postSyntheticEvent) [`processName`](#processName) [`receiveFileSelection`](#receiveFileSelection) [`receiveFileUpload`](#receiveFileUpload) [`receiveInputDialog`](#receiveInputDialog) [`receiveInputEvent`](#receiveInputEvent) [`setTitle`](#setTitle) [`syntheticEventReady`](#syntheticEventReady)

Inherited from `WebResourceInit` :  
[`connectUI`](../object/WebResourceInit.html#connectUI) [`processRequest`](../object/WebResourceInit.html#processRequest)

Inherited from `WebLayoutWindow` :  
[`createFrame`](../object/WebLayoutWindow.html#createFrame) [`flushWin`](../object/WebLayoutWindow.html#flushWin) [`winFromPath`](../object/WebLayoutWindow.html#winFromPath)

Inherited from `WebWindow` :  
[`clearWindow`](../object/WebWindow.html#clearWindow) [`sendWinEvent`](../object/WebWindow.html#sendWinEvent) [`sendWinEventTo`](../object/WebWindow.html#sendWinEventTo) [`write`](../object/WebWindow.html#write)

Inherited from `WebResourceResFile` :  
[`isTextFile`](../object/WebResourceResFile.html#isTextFile) [`matchRequest`](../object/WebResourceResFile.html#matchRequest)

Inherited from `WebResource` :  
[`sendAck`](../object/WebResource.html#sendAck) [`sendXML`](../object/WebResource.html#sendXML)





<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="curCmdClient"></span>

`curCmdClient`

[webui.t](../file/webui.t.html)\[[2744](../source/webui.t.html#2744)\]



Client session for current command line input. Certain modal
interactions, such as file dialogs, are directed only to the client that
initiated the current command.



<span id="fileDialogResult"></span>

`fileDialogResult`

[webui.t](../file/webui.t.html)\[[3202](../source/webui.t.html#3202)\]



file dialog result - this is a result list using the same format as the
native inputFile() function



<span id="fileDialogState"></span>

`fileDialogState`

[webui.t](../file/webui.t.html)\[[3196](../source/webui.t.html#3196)\]



file dialog state - this is the XML describing the currently open file
dialog; if the dialog isn't open, this is an empty string



<span id="inputDialogResult"></span>

`inputDialogResult`

[webui.t](../file/webui.t.html)\[[3211](../source/webui.t.html#3211)\]



input dialog result - this is the button number the user selected



<span id="inputDialogState"></span>

`inputDialogState`

[webui.t](../file/webui.t.html)\[[3208](../source/webui.t.html#3208)\]



input dialog state - this is the XML describing an input dialog while a
dialog is running, or an empty string if not



<span id="inputEventResult"></span>

`inputEventResult`

[webui.t](../file/webui.t.html)\[[3217](../source/webui.t.html#3217)\]



input event result



<span id="inputEventState"></span>

`inputEventState`

[webui.t](../file/webui.t.html)\[[3214](../source/webui.t.html#3214)\]



input event state



<span id="menuSysState"></span>

`menuSysState`

[webui.t](../file/webui.t.html)\[[3220](../source/webui.t.html#3220)\]



menuSys state - menu system state (maintained by the menu module)



<span id="name"></span>

`name`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[2723](../source/webui.t.html#2723)\]



the top window is always called "main"



<span id="pathName"></span>

`pathName`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[2724](../source/webui.t.html#2724)\]



*no description available*



<span id="synthEventQueue"></span>

`synthEventQueue`

[webui.t](../file/webui.t.html)\[[3229](../source/webui.t.html#3229)\]



Synthetic event queue. This is a vector of synthetic events, set up in
the \[type, params...\] format that the system inputEvent() function and
related functions use. The 'type' code for a synthetic evente is a
string instead of the numeric identifier that the system functions use.



<span id="title"></span>

`title`

[webui.t](../file/webui.t.html)\[[2727](../source/webui.t.html#2727)\]



the window title



<span id="vpath"></span>

`vpath`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[2719](../source/webui.t.html#2719)\]



match the webuires directory path as the URL path, but map this to
main.html as the underlying resource name



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="getInputDialog"></span>

`getInputDialog (icon, prompt, buttons, defaultButton, cancelButton)`

[webui.t](../file/webui.t.html)\[[3100](../source/webui.t.html#3100)\]



show a generic inputDialog dialog



<span id="getInputEvent"></span>

`getInputEvent (timeout)`

[webui.t](../file/webui.t.html)\[[2779](../source/webui.t.html#2779)\]



wait for an input event



<span id="getInputFile"></span>

`getInputFile (prompt, dialogType, fileType, flags)`

[webui.t](../file/webui.t.html)\[[2835](../source/webui.t.html#2835)\]



show the file selector dialog



<span id="getInputFileFromClient"></span>

`getInputFileFromClient (prompt, dialogType, fileType, flags)`

[webui.t](../file/webui.t.html)\[[2912](../source/webui.t.html#2912)\]



Get an input file from the client PC. We'll attempt to upload or
download a file from/to the client PC, using a local temporary file for
the actual file operations. This is a special form of the input file
dialog that we use when we're not connected to a storage server.



<span id="getState"></span>

`getState (client)`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[2747](../source/webui.t.html#2747)\]



get the state



<span id="getSyntheticEvent"></span>

`getSyntheticEvent ( )`

[webui.t](../file/webui.t.html)\[[3190](../source/webui.t.html#3190)\]



pull the next synthetic event from the queue



<span id="inputFileDismissed"></span>

`inputFileDismissed ( )`

[webui.t](../file/webui.t.html)\[[3033](../source/webui.t.html#3033)\]



receive notification that the file dialog has been closed



<span id="offerDownload"></span>

`offerDownload (file)`

[webui.t](../file/webui.t.html)\[[2986](../source/webui.t.html#2986)\]



Offer a file for download to the client. 'file' is a DownloadTempFile
object previously created by a call to inputFile().



<span id="postSyntheticEvent"></span>

`postSyntheticEvent (id, [params])`

[webui.t](../file/webui.t.html)\[[3180](../source/webui.t.html#3180)\]



Post a synthetic event. A synthetic event looks like a regular UI or
network event, but is generated internally instead of being delivered
from the underlying browser or network subsystems.

'id' is a string giving the event type. The remaining parameters are up
to each event type to define.



<span id="processName"></span>

`processName (n)`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[2720](../source/webui.t.html#2720)\]



*no description available*



<span id="receiveFileSelection"></span>

`receiveFileSelection (req, query)`

[webui.t](../file/webui.t.html)\[[2999](../source/webui.t.html#2999)\]



receive a file selection from the file selector dialog



<span id="receiveFileUpload"></span>

`receiveFileUpload (req, query)`

[webui.t](../file/webui.t.html)\[[3040](../source/webui.t.html#3040)\]



receive a file upload from the file upload dialog



<span id="receiveInputDialog"></span>

`receiveInputDialog (req, query)`

[webui.t](../file/webui.t.html)\[[3159](../source/webui.t.html#3159)\]



receive a selection from the input dialog



<span id="receiveInputEvent"></span>

`receiveInputEvent (req, query)`

[webui.t](../file/webui.t.html)\[[2813](../source/webui.t.html#2813)\]



receive an input event



<span id="setTitle"></span>

`setTitle (title)`

[webui.t](../file/webui.t.html)\[[2730](../source/webui.t.html#2730)\]



set the window title



<span id="syntheticEventReady"></span>

`syntheticEventReady ( )`

[webui.t](../file/webui.t.html)\[[3187](../source/webui.t.html#3187)\]



is a synthetic event ready?





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


