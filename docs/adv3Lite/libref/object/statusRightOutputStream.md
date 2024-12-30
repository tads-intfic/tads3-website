[statusRightOutputStream]{.title}[object]{.type}

[status.t](../file/status.t.html)\[[84](../source/status.t.html#84)\]

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
A special OutputStream for the right half of the status line (the
score/turn count area) in text mode. We use a separate stream for this
because we have to write this text with the special statusRight()
intrinsic in text mode.

We only use this stream when we use the old-style text-mode status line
interface, which explicitly separates the status line into a left part
and a right part. When we have the banner API available in the
interpreter, we\'ll use banners instead, since banners give us much more
flexibility.

`transient `**`statusRightOutputStream`**` :   `[`OutputStream`](../object/OutputStream.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`statusRightOutputStream`**\
`         `[`OutputStream`](../object/OutputStream.html)\
`                 `[`PreinitObject`](../object/PreinitObject.html)\
`                         `[`ModuleExecObject`](../object/ModuleExecObject.html)\
`                                 object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`buf_`](#buf_)`  `

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

` `[`flushStream`](#flushStream)`  `[`writeFromStream`](#writeFromStream)`  `

Inherited from `OutputStream` :\
` `[`addOutputFilter`](../object/OutputStream.html#addOutputFilter)`  `[`addOutputFilterBelow`](../object/OutputStream.html#addOutputFilterBelow)`  `[`applyFilters`](../object/OutputStream.html#applyFilters)`  `[`applyTextFilters`](../object/OutputStream.html#applyTextFilters)`  `[`captureOutput`](../object/OutputStream.html#captureOutput)`  `[`captureOutputIgnoreExit`](../object/OutputStream.html#captureOutputIgnoreExit)`  `[`construct`](../object/OutputStream.html#construct)`  `[`execute`](../object/OutputStream.html#execute)`  `[`inputLineEnd`](../object/OutputStream.html#inputLineEnd)`  `[`removeOutputFilter`](../object/OutputStream.html#removeOutputFilter)`  `[`setPrefix`](../object/OutputStream.html#setPrefix)`  `[`watchForOutput`](../object/OutputStream.html#watchForOutput)`  `[`writeToStream`](../object/OutputStream.html#writeToStream)`  `

` `

Inherited from `ModuleExecObject` :\
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#buf_}

`buf_`

[status.t](../file/status.t.html)\[[109](../source/status.t.html#109)\]

::: desc
our buffered text
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#flushStream}

`flushStream ( )`

[status.t](../file/status.t.html)\[[99](../source/status.t.html#99)\]

::: desc
Flush the buffer. This writes whatever we\'ve buffered up to the right
half of the text-mode status line.
:::

[]{#writeFromStream}

`writeFromStream (txt)`[OVERRIDDEN]{.rem}

[status.t](../file/status.t.html)\[[89](../source/status.t.html#89)\]

::: desc
Write from the stream. We simply buffer up text until we\'re asked to
display the final data.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
