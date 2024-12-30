[Record]{.title}[object]{.type}

[actions.t](../file/actions.t.html)\[[2444](../source/actions.t.html#2444)\]

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
RECORD - this is similar to SCRIPT, but stores a file containing only
the command input, not the output.

**`Record`**` :   `[`Action`](../object/Action.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`Record`**\
`         `[`Action`](../object/Action.html)\
`                 `[`ReplaceRedirector`](../object/ReplaceRedirector.html)\
`                         `[`Redirector`](../object/Redirector.html)\
`                                 object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`fileDisposition`](#fileDisposition)`  `[`filePromptMsg`](#filePromptMsg)`  `[`fileTypeID`](#fileTypeID)`  `[`logFileType`](#logFileType)`  `

Inherited from `Action` :\
` `[`actionFailed`](../object/Action.html#actionFailed)`  `[`advanceOnFailure`](../object/Action.html#advanceOnFailure)`  `[`againRepeatsParse`](../object/Action.html#againRepeatsParse)`  `[`allowAll`](../object/Action.html#allowAll)`  `[`extraMessageParams`](../object/Action.html#extraMessageParams)`  `[`failCheckMsg`](../object/Action.html#failCheckMsg)`  `[`failedActionCountsAsTurn`](../object/Action.html#failedActionCountsAsTurn)`  `[`implicitTimeTaken`](../object/Action.html#implicitTimeTaken)`  `[`includeInUndo`](../object/Action.html#includeInUndo)`  `[`isConversational`](../object/Action.html#isConversational)`  `[`isImplicit`](../object/Action.html#isImplicit)`  `[`isRepeatable`](../object/Action.html#isRepeatable)`  `[`oldRoom`](../object/Action.html#oldRoom)`  `[`parentAction`](../object/Action.html#parentAction)`  `[`parentAllowAll`](../object/Action.html#parentAllowAll)`  `[`preCond`](../object/Action.html#preCond)`  `[`redirectParent`](../object/Action.html#redirectParent)`  `[`reportImplicitActions`](../object/Action.html#reportImplicitActions)`  `[`scopeList`](../object/Action.html#scopeList)`  `[`spellingPriority`](../object/Action.html#spellingPriority)`  `[`synthParamID`](../object/Action.html#synthParamID)`  `[`timeTaken`](../object/Action.html#timeTaken)`  `[`turnsTaken`](../object/Action.html#turnsTaken)`  `[`unhides`](../object/Action.html#unhides)`  `[`verifyObj`](../object/Action.html#verifyObj)`  `[`wasIlluminated`](../object/Action.html#wasIlluminated)`  `

` `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`performFileOp`](#performFileOp)`  `[`setUpRecording`](#setUpRecording)`  `[`showCancelMsg`](#showCancelMsg)`  `

Inherited from `Action` :\
` `[`acknowledgeNotifyStatus`](../object/Action.html#acknowledgeNotifyStatus)`  `[`addExtraScopeItems`](../object/Action.html#addExtraScopeItems)`  `[`addImplicitTime`](../object/Action.html#addImplicitTime)`  `[`advanceTime`](../object/Action.html#advanceTime)`  `[`afterAction`](../object/Action.html#afterAction)`  `[`announceObject`](../object/Action.html#announceObject)`  `[`beforeAction`](../object/Action.html#beforeAction)`  `[`buildImplicitActionAnnouncement`](../object/Action.html#buildImplicitActionAnnouncement)`  `[`buildScopeList`](../object/Action.html#buildScopeList)`  `[`checkAction`](../object/Action.html#checkAction)`  `[`checkActionPreconditions`](../object/Action.html#checkActionPreconditions)`  `[`commandNotPresent`](../object/Action.html#commandNotPresent)`  `[`exec`](../object/Action.html#exec)`  `[`execAction`](../object/Action.html#execAction)`  `[`execCycle`](../object/Action.html#execCycle)`  `[`execGroup`](../object/Action.html#execGroup)`  `[`getAll`](../object/Action.html#getAll)`  `[`getAllUnhidden`](../object/Action.html#getAllUnhidden)`  `[`getMessageParam`](../object/Action.html#getMessageParam)`  `[`implicitAnnouncement`](../object/Action.html#implicitAnnouncement)`  `[`reportAction`](../object/Action.html#reportAction)`  `[`scoreObjects`](../object/Action.html#scoreObjects)`  `[`setMessageParam`](../object/Action.html#setMessageParam)`  `[`setMessageParams`](../object/Action.html#setMessageParams)`  `[`spPrefix`](../object/Action.html#spPrefix)`  `[`spSuffix`](../object/Action.html#spSuffix)`  `[`synthMessageParam`](../object/Action.html#synthMessageParam)`  `[`turnSequence`](../object/Action.html#turnSequence)`  `[`verify`](../object/Action.html#verify)`  `[`verifyObjRole`](../object/Action.html#verifyObjRole)`  `[`wrapObjectsNP`](../object/Action.html#wrapObjectsNP)`  `

Inherited from `ReplaceRedirector` :\
` `[`redirect`](../object/ReplaceRedirector.html#redirect)`  `

Inherited from `Redirector` :\
` `[`doInstead`](../object/Redirector.html#doInstead)`  `[`doNested`](../object/Redirector.html#doNested)`  `[`doOtherAction`](../object/Redirector.html#doOtherAction)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#fileDisposition}

`fileDisposition`

[actions.t](../file/actions.t.html)\[[2450](../source/actions.t.html#2450)\]

::: desc
*no description available*
:::

[]{#filePromptMsg}

`filePromptMsg`

[actions.t](../file/actions.t.html)\[[2447](../source/actions.t.html#2447)\]

::: desc
our file dialog parameters - ask for a log file to save
:::

[]{#fileTypeID}

`fileTypeID`

[actions.t](../file/actions.t.html)\[[2449](../source/actions.t.html#2449)\]

::: desc
*no description available*
:::

[]{#logFileType}

`logFileType`

[actions.t](../file/actions.t.html)\[[2508](../source/actions.t.html#2508)\]

::: desc
the log file type - by default, we open a regular command log
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#performFileOp}

`performFileOp (fname, ack)`

[actions.t](../file/actions.t.html)\[[2462](../source/actions.t.html#2462)\]

::: desc
turn on recording to the given file
:::

[]{#setUpRecording}

`setUpRecording (ack)`

[actions.t](../file/actions.t.html)\[[2459](../source/actions.t.html#2459)\]

::: desc
set up recording - this can be used to set up scripting
programmatically, in the course of carrying out another action
:::

[]{#showCancelMsg}

`showCancelMsg ( )`

[actions.t](../file/actions.t.html)\[[2453](../source/actions.t.html#2453)\]

::: desc
show our cancellation mesasge
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
