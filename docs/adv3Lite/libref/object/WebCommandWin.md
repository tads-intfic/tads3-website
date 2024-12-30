[WebCommandWin]{.title}[class]{.type}

[webui.t](../file/webui.t.html)\[[1936](../source/webui.t.html#1936)\]

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
Command Window. This object keeps track of the state of command window
within the web UI.

`class `**`WebCommandWin`**` :   `[`WebWindow`](../object/WebWindow.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`WebCommandWin`**\
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

` `[`commandWin`](../object/commandWin.html)`  ` []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`isInputOpen`](#isInputOpen)`  `[`lastInput`](#lastInput)`  `[`lastInputClient`](#lastInputClient)`  `[`lastInputReady`](#lastInputReady)`  `[`mode`](#mode)`  `[`moreMode`](#moreMode)`  `[`outbuf`](#outbuf)`  `[`scrollback`](#scrollback)`  `[`scrollbackLimit`](#scrollbackLimit)`  `[`src`](#src)`  `[`textbuf`](#textbuf)`  `[`vpath`](#vpath)`  `

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

` `[`cancelInputLine`](#cancelInputLine)`  `[`clearWindow`](#clearWindow)`  `[`endMoreMode`](#endMoreMode)`  `[`flushWin`](#flushWin)`  `[`getInputLine`](#getInputLine)`  `[`getState`](#getState)`  `[`receiveInput`](#receiveInput)`  `[`showMorePrompt`](#showMorePrompt)`  `[`textbufToScrollback`](#textbufToScrollback)`  `[`write`](#write)`  `

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

[]{#isInputOpen}

`isInputOpen`

[webui.t](../file/webui.t.html)\[[2201](../source/webui.t.html#2201)\]

::: desc
Is an input line open? This is true between sending an \<inputLine\>
event and either getting a reply, or explicitly sending a close or
cancel event.
:::

[]{#lastInput}

`lastInput`

[webui.t](../file/webui.t.html)\[[2188](../source/webui.t.html#2188)\]

::: desc
the text of the last input line we received from the client
:::

[]{#lastInputClient}

`lastInputClient`

[webui.t](../file/webui.t.html)\[[2194](../source/webui.t.html#2194)\]

::: desc
client session who sent the last input line
:::

[]{#lastInputReady}

`lastInputReady`

[webui.t](../file/webui.t.html)\[[2191](../source/webui.t.html#2191)\]

::: desc
is input ready?
:::

[]{#mode}

`mode`

[webui.t](../file/webui.t.html)\[[2212](../source/webui.t.html#2212)\]

::: desc
Current UI mode. This is \'working\' if the program is running and in
the process of computing and/or generating output; \'inputLine\' if
we\'re waiting for the user to enter a line of input; \'morePrompt\' if
we\'re showing a \"More\" prompt.
:::

[]{#moreMode}

`moreMode`

[webui.t](../file/webui.t.html)\[[2204](../source/webui.t.html#2204)\]

::: desc
flag: we\'re in More mode
:::

[]{#outbuf}

`outbuf`

[webui.t](../file/webui.t.html)\[[2185](../source/webui.t.html#2185)\]

::: desc
pending output buffer, since last flush
:::

[]{#scrollback}

`scrollback`

[webui.t](../file/webui.t.html)\[[2174](../source/webui.t.html#2174)\]

::: desc
Scrollback list. After each input, we add the contents of \'textbuf\' to
this list. If this pushes the list past the limit, we drop the oldest
item. This is used to reconstruct a reasonable amount of scrollback
history when a new client connects, or when an existing client refreshes
the page.
:::

[]{#scrollbackLimit}

`scrollbackLimit`

[webui.t](../file/webui.t.html)\[[2182](../source/webui.t.html#2182)\]

::: desc
The scrollback limit, as a number of command inputs. Each input
interaction adds one item to the scrollback list. When the number of
items in the list exceeds the limit set here, we drop the oldest item.
:::

[]{#src}

`src`[OVERRIDDEN]{.rem}

[webui.t](../file/webui.t.html)\[[2216](../source/webui.t.html#2216)\]

::: desc
*no description available*
:::

[]{#textbuf}

`textbuf`

[webui.t](../file/webui.t.html)\[[2165](../source/webui.t.html#2165)\]

::: desc
main window text buffer since last input read
:::

[]{#vpath}

`vpath`[OVERRIDDEN]{.rem}

[webui.t](../file/webui.t.html)\[[2215](../source/webui.t.html#2215)\]

::: desc
my virtual path, and the actual resource file location
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#cancelInputLine}

`cancelInputLine (reset)`

[webui.t](../file/webui.t.html)\[[2026](../source/webui.t.html#2026)\]

::: desc
Cancel an input line that was interrupted by a timeout
:::

[]{#clearWindow}

`clearWindow ( )`[OVERRIDDEN]{.rem}

[webui.t](../file/webui.t.html)\[[2086](../source/webui.t.html#2086)\]

::: desc
Clear the window
:::

[]{#endMoreMode}

`endMoreMode ( )`

[webui.t](../file/webui.t.html)\[[2158](../source/webui.t.html#2158)\]

::: desc
receive notification from the client that the user has responded to the
More prompt, ending the pause
:::

[]{#flushWin}

`flushWin ( )`[OVERRIDDEN]{.rem}

[webui.t](../file/webui.t.html)\[[1949](../source/webui.t.html#1949)\]

::: desc
Flush the buffers
:::

[]{#getInputLine}

`getInputLine (timeout?)`

[webui.t](../file/webui.t.html)\[[1968](../source/webui.t.html#1968)\]

::: desc
Read a line of input in this window. Blocks until the reply is received.
Returns nil on timeout.
:::

[]{#getState}

`getState (client)`[OVERRIDDEN]{.rem}

[webui.t](../file/webui.t.html)\[[2046](../source/webui.t.html#2046)\]

::: desc
Get the state of this command window
:::

[]{#receiveInput}

`receiveInput (req, query)`

[webui.t](../file/webui.t.html)\[[2057](../source/webui.t.html#2057)\]

::: desc
Receive input from the client
:::

[]{#showMorePrompt}

`showMorePrompt ( )`

[webui.t](../file/webui.t.html)\[[2137](../source/webui.t.html#2137)\]

::: desc
Show a \"More\" prompt
:::

[]{#textbufToScrollback}

`textbufToScrollback (cmd)`

[webui.t](../file/webui.t.html)\[[2114](../source/webui.t.html#2114)\]

::: desc
Move the current text buffer contents to the scrollback list. If this
would make the scrollback list exceed the limit, we\'ll drop the oldest
item.

\'cmd\' is the command line text of the last input. We include this in
the srollback list with special tagging so that the UI can display it in
a custom style, if it wants.
:::

[]{#write}

`write (txt)`[OVERRIDDEN]{.rem}

[webui.t](../file/webui.t.html)\[[1940](../source/webui.t.html#1940)\]

::: desc
Write to the window
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
