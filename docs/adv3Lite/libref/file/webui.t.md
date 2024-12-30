[webui.t]{.title}[file]{.type}

[source file](../source/webui.t.html)

**Classes**\
[Summary](#_ClassSummary_)\
 

**Objects**\
[Summary](#_ObjectSummary_)\
 

**Functions**\
[Summary](#_FunctionSummary_)\
[Details](#_Functions_)

::: fdesc
This module defines some useful helper functions for implementing a TADS
game with a Web-based user interface.
:::

[]{#_ClassSummary_}

::: mjhd
[Summary of Classes]{.hdln}  
:::

` `[`ClientEventRequest`](../object/ClientEventRequest.html)`  `[`ClientSession`](../object/ClientSession.html)`  `[`DownloadTempFile`](../object/DownloadTempFile.html)`  `[`WebCommandWin`](../object/WebCommandWin.html)`  `[`WebLayoutWindow`](../object/WebLayoutWindow.html)`  `[`WebResource`](../object/WebResource.html)`  `[`WebResourceGroup`](../object/WebResourceGroup.html)`  `[`WebResourceInit`](../object/WebResourceInit.html)`  `[`WebResourceResFile`](../object/WebResourceResFile.html)`  `[`WebStatusWin`](../object/WebStatusWin.html)`  `[`WebUIPrefs`](../object/WebUIPrefs.html)`  `[`WebUIProfile`](../object/WebUIProfile.html)`  `[`WebWindow`](../object/WebWindow.html)`  `
[]{#_ObjectSummary_}

::: mjhd
[Summary of Global Objects]{.hdln}  
:::

` `[`coverArtResource`](../object/coverArtResource.html)`  `[`eventPage`](../object/eventPage.html)`  `[`flushEventsPage`](../object/flushEventsPage.html)`  `[`guestConnectPage`](../object/guestConnectPage.html)`  `[`inputDialogPage`](../object/inputDialogPage.html)`  `[`inputEventPage`](../object/inputEventPage.html)`  `[`inputFileCancel`](../object/inputFileCancel.html)`  `[`inputFilePage`](../object/inputFilePage.html)`  `[`inputLinePage`](../object/inputLinePage.html)`  `[`mainWebGroup`](../object/mainWebGroup.html)`  `[`morePromptDonePage`](../object/morePromptDonePage.html)`  `[`setPrefsPage`](../object/setPrefsPage.html)`  `[`setScreenNamePage`](../object/setScreenNamePage.html)`  `[`tempFileDownloadPage`](../object/tempFileDownloadPage.html)`  `[`uiStatePage`](../object/uiStatePage.html)`  `[`uploadFilePage`](../object/uploadFilePage.html)`  `[`webMainWin`](../object/webMainWin.html)`  `[`webSession`](../object/webSession.html)`  `[`webuiResources`](../object/webuiResources.html)`  `
[]{#FunctionSummary_}

::: mjhd
[Summary of Global Functions]{.hdln}  
:::

` `[`generateRandomKey`](#generateRandomKey)`  `[`processNetRequests`](#processNetRequests)`  `

[]{#_Functions_}

::: mjhd
[Global Functions]{.hdln}  
:::

[]{#generateRandomKey}

`generateRandomKey ( )`

[webui.t](../file/webui.t.html)\[[360](../source/webui.t.html#360)\]

::: desc
Generate a random key. This returns a 128-bit random number as a hex
string. This is designed for ephemeral identifiers, such as session
keys.
:::

[]{#processNetRequests}

`processNetRequests (doneFunc, timeout?)`

[webui.t](../file/webui.t.html)\[[1493](../source/webui.t.html#1493)\]

::: desc
Process network requests. Continues until doneFunc() returns true, or a
timeout or error occurs. If we return because doneFunc() returned true,
we\'ll return nil. Otherwise, we\'ll return the NetEvent that terminated
the wait.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
