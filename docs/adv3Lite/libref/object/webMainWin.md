[webMainWin]{.title}[object]{.type}

[webui.t](../file/webui.t.html)\[[2714](../source/webui.t.html#2714)\]

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
The standard \"main window\" of our user interface. This is the game
object that represents the default initial HTML page that the player\'s
web browser connects to. We build this out of three base classes:

\- WebResourceInit, because this is the starting page that the browser
initially connects to. This class does the initial handshaking to set up
the session.

\- WebResourceResFile, because we store the HTML for the page in a
resource file. This class does the work of sending the resource file\'s
contents to the browser.

\- WebLayoutWindow, because the default main page is also a layout
window, which is basically a container for IFRAME elements where we plug
in the sub-windows that make up the game\'s user interface.

Games can customize the front page in any way they like. If you want to
customize the HTML of the main page, you can substitute a different HTML
(.htm) file, and change the processName() method to return the name of
that file. If you want to use something other than a layout window as
the front page, you can simply replace this whole class.

`transient `**`webMainWin`**` :   `[`WebResourceInit`](../object/WebResourceInit.html)`   `[`WebLayoutWindow`](../object/WebLayoutWindow.html)`   `[`WebResourceResFile`](../object/WebResourceResFile.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`webMainWin`**\
`         `[`WebResourceInit`](../object/WebResourceInit.html)\
`                 object`\
`         `[`WebLayoutWindow`](../object/WebLayoutWindow.html)\
`                 `[`WebWindow`](../object/WebWindow.html)\
`                         `[`WebResourceResFile`](../object/WebResourceResFile.html)\
`                                 `[`WebResource`](../object/WebResource.html)\
`                                         object`\
`         `[`WebResourceResFile`](../object/WebResourceResFile.html)\
`                 `[`WebResource`](../object/WebResource.html)\
`                         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`curCmdClient`](#curCmdClient)`  `[`fileDialogResult`](#fileDialogResult)`  `[`fileDialogState`](#fileDialogState)`  `[`inputDialogResult`](#inputDialogResult)`  `[`inputDialogState`](#inputDialogState)`  `[`inputEventResult`](#inputEventResult)`  `[`inputEventState`](#inputEventState)`  `[`menuSysState`](#menuSysState)`  `[`name`](#name)`  `[`pathName`](#pathName)`  `[`synthEventQueue`](#synthEventQueue)`  `[`title`](#title)`  `[`vpath`](#vpath)`  `

Inherited from `WebResourceInit` :\
` `[`server`](../object/WebResourceInit.html#server)`  `

Inherited from `WebLayoutWindow` :\
` `[`frames`](../object/WebLayoutWindow.html#frames)`  `[`src`](../object/WebLayoutWindow.html#src)`  `

Inherited from `WebWindow` :\
` `[`sthCtx`](../object/WebWindow.html#sthCtx)`  `

Inherited from `WebResourceResFile` :\
` `[`binaryExts`](../object/WebResourceResFile.html#binaryExts)`  `[`browserExtToMime`](../object/WebResourceResFile.html#browserExtToMime)`  `

Inherited from `WebResource` :\
` `[`group`](../object/WebResource.html#group)`  `[`priority`](../object/WebResource.html#priority)`  `

` `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`getInputDialog`](#getInputDialog)`  `[`getInputEvent`](#getInputEvent)`  `[`getInputFile`](#getInputFile)`  `[`getInputFileFromClient`](#getInputFileFromClient)`  `[`getState`](#getState)`  `[`getSyntheticEvent`](#getSyntheticEvent)`  `[`inputFileDismissed`](#inputFileDismissed)`  `[`offerDownload`](#offerDownload)`  `[`postSyntheticEvent`](#postSyntheticEvent)`  `[`processName`](#processName)`  `[`receiveFileSelection`](#receiveFileSelection)`  `[`receiveFileUpload`](#receiveFileUpload)`  `[`receiveInputDialog`](#receiveInputDialog)`  `[`receiveInputEvent`](#receiveInputEvent)`  `[`setTitle`](#setTitle)`  `[`syntheticEventReady`](#syntheticEventReady)`  `

Inherited from `WebResourceInit` :\
` `[`connectUI`](../object/WebResourceInit.html#connectUI)`  `[`processRequest`](../object/WebResourceInit.html#processRequest)`  `

Inherited from `WebLayoutWindow` :\
` `[`createFrame`](../object/WebLayoutWindow.html#createFrame)`  `[`flushWin`](../object/WebLayoutWindow.html#flushWin)`  `[`winFromPath`](../object/WebLayoutWindow.html#winFromPath)`  `

Inherited from `WebWindow` :\
` `[`clearWindow`](../object/WebWindow.html#clearWindow)`  `[`sendWinEvent`](../object/WebWindow.html#sendWinEvent)`  `[`sendWinEventTo`](../object/WebWindow.html#sendWinEventTo)`  `[`write`](../object/WebWindow.html#write)`  `

Inherited from `WebResourceResFile` :\
` `[`isTextFile`](../object/WebResourceResFile.html#isTextFile)`  `[`matchRequest`](../object/WebResourceResFile.html#matchRequest)`  `

Inherited from `WebResource` :\
` `[`sendAck`](../object/WebResource.html#sendAck)`  `[`sendXML`](../object/WebResource.html#sendXML)`  `

` `

` `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#curCmdClient}

`curCmdClient`

[webui.t](../file/webui.t.html)\[[2744](../source/webui.t.html#2744)\]

::: desc
Client session for current command line input. Certain modal
interactions, such as file dialogs, are directed only to the client that
initiated the current command.
:::

[]{#fileDialogResult}

`fileDialogResult`

[webui.t](../file/webui.t.html)\[[3202](../source/webui.t.html#3202)\]

::: desc
file dialog result - this is a result list using the same format as the
native inputFile() function
:::

[]{#fileDialogState}

`fileDialogState`

[webui.t](../file/webui.t.html)\[[3196](../source/webui.t.html#3196)\]

::: desc
file dialog state - this is the XML describing the currently open file
dialog; if the dialog isn\'t open, this is an empty string
:::

[]{#inputDialogResult}

`inputDialogResult`

[webui.t](../file/webui.t.html)\[[3211](../source/webui.t.html#3211)\]

::: desc
input dialog result - this is the button number the user selected
:::

[]{#inputDialogState}

`inputDialogState`

[webui.t](../file/webui.t.html)\[[3208](../source/webui.t.html#3208)\]

::: desc
input dialog state - this is the XML describing an input dialog while a
dialog is running, or an empty string if not
:::

[]{#inputEventResult}

`inputEventResult`

[webui.t](../file/webui.t.html)\[[3217](../source/webui.t.html#3217)\]

::: desc
input event result
:::

[]{#inputEventState}

`inputEventState`

[webui.t](../file/webui.t.html)\[[3214](../source/webui.t.html#3214)\]

::: desc
input event state
:::

[]{#menuSysState}

`menuSysState`

[webui.t](../file/webui.t.html)\[[3220](../source/webui.t.html#3220)\]

::: desc
menuSys state - menu system state (maintained by the menu module)
:::

[]{#name}

`name`[OVERRIDDEN]{.rem}

[webui.t](../file/webui.t.html)\[[2723](../source/webui.t.html#2723)\]

::: desc
the top window is always called \"main\"
:::

[]{#pathName}

`pathName`[OVERRIDDEN]{.rem}

[webui.t](../file/webui.t.html)\[[2724](../source/webui.t.html#2724)\]

::: desc
*no description available*
:::

[]{#synthEventQueue}

`synthEventQueue`

[webui.t](../file/webui.t.html)\[[3229](../source/webui.t.html#3229)\]

::: desc
Synthetic event queue. This is a vector of synthetic events, set up in
the \[type, params\...\] format that the system inputEvent() function
and related functions use. The \'type\' code for a synthetic evente is a
string instead of the numeric identifier that the system functions use.
:::

[]{#title}

`title`

[webui.t](../file/webui.t.html)\[[2727](../source/webui.t.html#2727)\]

::: desc
the window title
:::

[]{#vpath}

`vpath`[OVERRIDDEN]{.rem}

[webui.t](../file/webui.t.html)\[[2719](../source/webui.t.html#2719)\]

::: desc
match the webuires directory path as the URL path, but map this to
main.htm as the underlying resource name
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#getInputDialog}

`getInputDialog (icon, prompt, buttons, defaultButton, cancelButton)`

[webui.t](../file/webui.t.html)\[[3100](../source/webui.t.html#3100)\]

::: desc
show a generic inputDialog dialog
:::

[]{#getInputEvent}

`getInputEvent (timeout)`

[webui.t](../file/webui.t.html)\[[2779](../source/webui.t.html#2779)\]

::: desc
wait for an input event
:::

[]{#getInputFile}

`getInputFile (prompt, dialogType, fileType, flags)`

[webui.t](../file/webui.t.html)\[[2835](../source/webui.t.html#2835)\]

::: desc
show the file selector dialog
:::

[]{#getInputFileFromClient}

`getInputFileFromClient (prompt, dialogType, fileType, flags)`

[webui.t](../file/webui.t.html)\[[2912](../source/webui.t.html#2912)\]

::: desc
Get an input file from the client PC. We\'ll attempt to upload or
download a file from/to the client PC, using a local temporary file for
the actual file operations. This is a special form of the input file
dialog that we use when we\'re not connected to a storage server.
:::

[]{#getState}

`getState (client)`[OVERRIDDEN]{.rem}

[webui.t](../file/webui.t.html)\[[2747](../source/webui.t.html#2747)\]

::: desc
get the state
:::

[]{#getSyntheticEvent}

`getSyntheticEvent ( )`

[webui.t](../file/webui.t.html)\[[3190](../source/webui.t.html#3190)\]

::: desc
pull the next synthetic event from the queue
:::

[]{#inputFileDismissed}

`inputFileDismissed ( )`

[webui.t](../file/webui.t.html)\[[3033](../source/webui.t.html#3033)\]

::: desc
receive notification that the file dialog has been closed
:::

[]{#offerDownload}

`offerDownload (file)`

[webui.t](../file/webui.t.html)\[[2986](../source/webui.t.html#2986)\]

::: desc
Offer a file for download to the client. \'file\' is a DownloadTempFile
object previously created by a call to inputFile().
:::

[]{#postSyntheticEvent}

`postSyntheticEvent (id, [params])`

[webui.t](../file/webui.t.html)\[[3180](../source/webui.t.html#3180)\]

::: desc
Post a synthetic event. A synthetic event looks like a regular UI or
network event, but is generated internally instead of being delivered
from the underlying browser or network subsystems.

\'id\' is a string giving the event type. The remaining parameters are
up to each event type to define.
:::

[]{#processName}

`processName (n)`[OVERRIDDEN]{.rem}

[webui.t](../file/webui.t.html)\[[2720](../source/webui.t.html#2720)\]

::: desc
*no description available*
:::

[]{#receiveFileSelection}

`receiveFileSelection (req, query)`

[webui.t](../file/webui.t.html)\[[2999](../source/webui.t.html#2999)\]

::: desc
receive a file selection from the file selector dialog
:::

[]{#receiveFileUpload}

`receiveFileUpload (req, query)`

[webui.t](../file/webui.t.html)\[[3040](../source/webui.t.html#3040)\]

::: desc
receive a file upload from the file upload dialog
:::

[]{#receiveInputDialog}

`receiveInputDialog (req, query)`

[webui.t](../file/webui.t.html)\[[3159](../source/webui.t.html#3159)\]

::: desc
receive a selection from the input dialog
:::

[]{#receiveInputEvent}

`receiveInputEvent (req, query)`

[webui.t](../file/webui.t.html)\[[2813](../source/webui.t.html#2813)\]

::: desc
receive an input event
:::

[]{#setTitle}

`setTitle (title)`

[webui.t](../file/webui.t.html)\[[2730](../source/webui.t.html#2730)\]

::: desc
set the window title
:::

[]{#syntheticEventReady}

`syntheticEventReady ( )`

[webui.t](../file/webui.t.html)\[[3187](../source/webui.t.html#3187)\]

::: desc
is a synthetic event ready?
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
