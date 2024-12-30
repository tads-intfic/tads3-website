[statusTagOutputStream]{.title}[object]{.type}

[status.t](../file/status.t.html)\[[35](../source/status.t.html#35)\]

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
A special OutputStream for the \<BANNER\> tag contents. This is really
just part of the main output stream, but we use a separate output stream
object so that we have our own separate stream state variables (for
paragraph breaking and so forth).

`transient `**`statusTagOutputStream`**` :   `[`OutputStream`](../object/OutputStream.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`statusTagOutputStream`**\
`         `[`OutputStream`](../object/OutputStream.html)\
`                 `[`PreinitObject`](../object/PreinitObject.html)\
`                         `[`ModuleExecObject`](../object/ModuleExecObject.html)\
`                                 object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`myInputManager`](#myInputManager)`  `

Inherited from `OutputStream` :\
` `[`filterList_`](../object/OutputStream.html#filterList_)`  `[`justDidPara`](../object/OutputStream.html#justDidPara)`  `[`justDidParaSuppressor`](../object/OutputStream.html#justDidParaSuppressor)`  `[`prefix`](../object/OutputStream.html#prefix)`  `

Inherited from `PreinitObject` :\
` `[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)`  `[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)`  `

Inherited from `ModuleExecObject` :\
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`writeFromStream`](#writeFromStream)`  `

Inherited from `OutputStream` :\
` `[`addOutputFilter`](../object/OutputStream.html#addOutputFilter)`  `[`addOutputFilterBelow`](../object/OutputStream.html#addOutputFilterBelow)`  `[`applyFilters`](../object/OutputStream.html#applyFilters)`  `[`applyTextFilters`](../object/OutputStream.html#applyTextFilters)`  `[`captureOutput`](../object/OutputStream.html#captureOutput)`  `[`captureOutputIgnoreExit`](../object/OutputStream.html#captureOutputIgnoreExit)`  `[`construct`](../object/OutputStream.html#construct)`  `[`execute`](../object/OutputStream.html#execute)`  `[`inputLineEnd`](../object/OutputStream.html#inputLineEnd)`  `[`removeOutputFilter`](../object/OutputStream.html#removeOutputFilter)`  `[`setPrefix`](../object/OutputStream.html#setPrefix)`  `[`watchForOutput`](../object/OutputStream.html#watchForOutput)`  `[`writeToStream`](../object/OutputStream.html#writeToStream)`  `

` `

Inherited from `ModuleExecObject` :\
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#myInputManager}

`myInputManager`[OVERRIDDEN]{.rem}

[status.t](../file/status.t.html)\[[41](../source/status.t.html#41)\]

::: desc
We\'re really part of the main window\'s output stream as far as the
underlying interpreter I/O system is concerned, so we have to coordinate
with the main game window\'s input manager.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#writeFromStream}

`writeFromStream (txt)`[OVERRIDDEN]{.rem}

[status.t](../file/status.t.html)\[[44](../source/status.t.html#44)\]

::: desc
we sit atop the system-level main console output stream
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
