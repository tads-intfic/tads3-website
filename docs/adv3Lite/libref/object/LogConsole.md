[LogConsole]{.title}[class]{.type}

[output.t](../file/output.t.html)\[[1700](../source/output.t.html#1700)\]

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
Log Console output stream. This is a simple wrapper for the system log
console, which allows console-style output to be captured to a file,
with full processing (HTML expansion, word wrapping, etc) but without
displaying anything to the game window.

This class should always be instantiated with transient instances, since
the underlying system object doesn\'t participate in save/restore
operations.

`class `**`LogConsole`**` :   `[`OutputStream`](../object/OutputStream.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`LogConsole`**\
`         `[`OutputStream`](../object/OutputStream.html)\
`                 `[`PreinitObject`](../object/PreinitObject.html)\
`                         `[`ModuleExecObject`](../object/ModuleExecObject.html)\
`                                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

*(none)* []{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`handle_`](#handle_)`  `

Inherited from `OutputStream` :\
` `[`filterList_`](../object/OutputStream.html#filterList_)`  `[`justDidPara`](../object/OutputStream.html#justDidPara)`  `[`justDidParaSuppressor`](../object/OutputStream.html#justDidParaSuppressor)`  `[`myInputManager`](../object/OutputStream.html#myInputManager)`  `[`prefix`](../object/OutputStream.html#prefix)`  `

Inherited from `PreinitObject` :\
` `[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)`  `[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)`  `

Inherited from `ModuleExecObject` :\
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`captureToFile`](#captureToFile)`  `[`closeConsole`](#closeConsole)`  `[`construct`](#construct)`  `[`writeFromStream`](#writeFromStream)`  `

Inherited from `OutputStream` :\
` `[`addOutputFilter`](../object/OutputStream.html#addOutputFilter)`  `[`addOutputFilterBelow`](../object/OutputStream.html#addOutputFilterBelow)`  `[`applyFilters`](../object/OutputStream.html#applyFilters)`  `[`applyTextFilters`](../object/OutputStream.html#applyTextFilters)`  `[`captureOutput`](../object/OutputStream.html#captureOutput)`  `[`captureOutputIgnoreExit`](../object/OutputStream.html#captureOutputIgnoreExit)`  `[`execute`](../object/OutputStream.html#execute)`  `[`inputLineEnd`](../object/OutputStream.html#inputLineEnd)`  `[`removeOutputFilter`](../object/OutputStream.html#removeOutputFilter)`  `[`setPrefix`](../object/OutputStream.html#setPrefix)`  `[`watchForOutput`](../object/OutputStream.html#watchForOutput)`  `[`writeToStream`](../object/OutputStream.html#writeToStream)`  `

` `

Inherited from `ModuleExecObject` :\
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#handle_}

`handle_`

[output.t](../file/output.t.html)\[[1760](../source/output.t.html#1760)\]

::: desc
our system log console handle
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#captureToFile}

`captureToFile (filename, charset, width, func)`

[output.t](../file/output.t.html)\[[1708](../source/output.t.html#1708)\]

::: desc
Utility method: create a log file, set up to capture all console output
to the log file, run the given callback function, and then close the log
file and restore the console output. This can be used as a simple means
of creating a file that captures the output of a command.
:::

[]{#closeConsole}

`closeConsole ( )`

[output.t](../file/output.t.html)\[[1743](../source/output.t.html#1743)\]

::: desc
Close the console. This closes the underlying system log console, which
closes the operating system file. No further text can be written to the
console after it\'s closed.
:::

[]{#construct}

`construct (filename, charset, width)`[OVERRIDDEN]{.rem}

[output.t](../file/output.t.html)\[[1723](../source/output.t.html#1723)\]

::: desc
create a log console
:::

[]{#writeFromStream}

`writeFromStream (txt)`[OVERRIDDEN]{.rem}

[output.t](../file/output.t.html)\[[1757](../source/output.t.html#1757)\]

::: desc
low-level stream writer - write to our system log console
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
