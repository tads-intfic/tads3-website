[FileOpAction]{.title}[class]{.type}

[actions.t](../file/actions.t.html)\[[2203](../source/actions.t.html#2203)\]

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
A base class for file-oriented actions, such as SCRIPT, RECORD, and
REPLAY. We provide common handling that prompts interactively for a
filename; subclasses must override a few methods and properties to carry
out the specific subclassed operation on the file.

`class `**`FileOpAction`**` :   `[`SystemAction`](../object/SystemAction.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`FileOpAction`**\
`         `[`SystemAction`](../object/SystemAction.html)\
`                 `[`IAction`](../object/IAction.html)\
`                         `[`Action`](../object/Action.html)\
`                                 `[`ReplaceRedirector`](../object/ReplaceRedirector.html)\
`                                         `[`Redirector`](../object/Redirector.html)\
`                                                 object`\
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

` `[`fileDisposition`](#fileDisposition)`  `[`filePromptMsg`](#filePromptMsg)`  `[`fileTypeID`](#fileTypeID)`  `[`includeInUndo`](#includeInUndo)`  `[`isRepeatable`](#isRepeatable)`  `[`showCancelMsg`](#showCancelMsg)`  `

Inherited from `SystemAction` :\
` `[`timeTaken`](../object/SystemAction.html#timeTaken)`  `[`turnsTaken`](../object/SystemAction.html#turnsTaken)`  `

Inherited from `IAction` :\
` `[`againRepeatsParse`](../object/IAction.html#againRepeatsParse)`  `

Inherited from `Action` :\
` `[`actionFailed`](../object/Action.html#actionFailed)`  `[`advanceOnFailure`](../object/Action.html#advanceOnFailure)`  `[`allowAll`](../object/Action.html#allowAll)`  `[`extraMessageParams`](../object/Action.html#extraMessageParams)`  `[`failCheckMsg`](../object/Action.html#failCheckMsg)`  `[`failedActionCountsAsTurn`](../object/Action.html#failedActionCountsAsTurn)`  `[`implicitTimeTaken`](../object/Action.html#implicitTimeTaken)`  `[`isConversational`](../object/Action.html#isConversational)`  `[`isImplicit`](../object/Action.html#isImplicit)`  `[`oldRoom`](../object/Action.html#oldRoom)`  `[`parentAction`](../object/Action.html#parentAction)`  `[`parentAllowAll`](../object/Action.html#parentAllowAll)`  `[`preCond`](../object/Action.html#preCond)`  `[`redirectParent`](../object/Action.html#redirectParent)`  `[`reportImplicitActions`](../object/Action.html#reportImplicitActions)`  `[`scopeList`](../object/Action.html#scopeList)`  `[`spellingPriority`](../object/Action.html#spellingPriority)`  `[`synthParamID`](../object/Action.html#synthParamID)`  `[`unhides`](../object/Action.html#unhides)`  `[`verifyObj`](../object/Action.html#verifyObj)`  `[`wasIlluminated`](../object/Action.html#wasIlluminated)`  `

` `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`execAction`](#execAction)`  `[`performFileOp`](#performFileOp)`  `[`setUpFileOp`](#setUpFileOp)`  `

Inherited from `SystemAction` :\
` `[`afterAction`](../object/SystemAction.html#afterAction)`  `[`exec`](../object/SystemAction.html#exec)`  `[`execCycle`](../object/SystemAction.html#execCycle)`  `[`getInputFile`](../object/SystemAction.html#getInputFile)`  `[`turnSequence`](../object/SystemAction.html#turnSequence)`  `

Inherited from `IAction` :\
` `[`execResolvedAction`](../object/IAction.html#execResolvedAction)`  `[`resolvedObjectsInScope`](../object/IAction.html#resolvedObjectsInScope)`  `[`scoreObjects`](../object/IAction.html#scoreObjects)`  `[`setResolvedObjects`](../object/IAction.html#setResolvedObjects)`  `

Inherited from `Action` :\
` `[`acknowledgeNotifyStatus`](../object/Action.html#acknowledgeNotifyStatus)`  `[`addExtraScopeItems`](../object/Action.html#addExtraScopeItems)`  `[`addImplicitTime`](../object/Action.html#addImplicitTime)`  `[`advanceTime`](../object/Action.html#advanceTime)`  `[`announceObject`](../object/Action.html#announceObject)`  `[`beforeAction`](../object/Action.html#beforeAction)`  `[`buildImplicitActionAnnouncement`](../object/Action.html#buildImplicitActionAnnouncement)`  `[`buildScopeList`](../object/Action.html#buildScopeList)`  `[`checkAction`](../object/Action.html#checkAction)`  `[`checkActionPreconditions`](../object/Action.html#checkActionPreconditions)`  `[`commandNotPresent`](../object/Action.html#commandNotPresent)`  `[`execGroup`](../object/Action.html#execGroup)`  `[`getAll`](../object/Action.html#getAll)`  `[`getAllUnhidden`](../object/Action.html#getAllUnhidden)`  `[`getMessageParam`](../object/Action.html#getMessageParam)`  `[`implicitAnnouncement`](../object/Action.html#implicitAnnouncement)`  `[`reportAction`](../object/Action.html#reportAction)`  `[`setMessageParam`](../object/Action.html#setMessageParam)`  `[`setMessageParams`](../object/Action.html#setMessageParams)`  `[`spPrefix`](../object/Action.html#spPrefix)`  `[`spSuffix`](../object/Action.html#spSuffix)`  `[`synthMessageParam`](../object/Action.html#synthMessageParam)`  `[`verify`](../object/Action.html#verify)`  `[`verifyObjRole`](../object/Action.html#verifyObjRole)`  `[`wrapObjectsNP`](../object/Action.html#wrapObjectsNP)`  `

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

[actions.t](../file/actions.t.html)\[[2208](../source/actions.t.html#2208)\]

::: desc
the file dialog open/save type
:::

[]{#filePromptMsg}

`filePromptMsg`

[actions.t](../file/actions.t.html)\[[2205](../source/actions.t.html#2205)\]

::: desc
our file dialog prompt message
:::

[]{#fileTypeID}

`fileTypeID`

[actions.t](../file/actions.t.html)\[[2211](../source/actions.t.html#2211)\]

::: desc
the file dialog type ID
:::

[]{#includeInUndo}

`includeInUndo`[OVERRIDDEN]{.rem}

[actions.t](../file/actions.t.html)\[[2282](../source/actions.t.html#2282)\]

::: desc
we can\'t include this in undo, as it affects external files
:::

[]{#isRepeatable}

`isRepeatable`[OVERRIDDEN]{.rem}

[actions.t](../file/actions.t.html)\[[2285](../source/actions.t.html#2285)\]

::: desc
don\'t allow repeating with AGAIN
:::

[]{#showCancelMsg}

`showCancelMsg`

[actions.t](../file/actions.t.html)\[[2214](../source/actions.t.html#2214)\]

::: desc
show our cancellation mesage
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#execAction}

`execAction (cmd)`[OVERRIDDEN]{.rem}

[actions.t](../file/actions.t.html)\[[2234](../source/actions.t.html#2234)\]

::: desc
Each concrete action subclass must override this to carry out our
operation. This is called when the user has successfully selected a
filename for the operation.
:::

[]{#performFileOp}

`performFileOp (fname, ack, desc, :?)`

[actions.t](../file/actions.t.html)\[[2225](../source/actions.t.html#2225)\]

::: desc
Carry out our file operation.

\'desc\' is an optional named argument giving a description string
entered by the user via the Save Game dialog. Some versions of the Save
Game dialog let the user enter this additional information, which can be
stored as part of the saved game metadata.
:::

[]{#setUpFileOp}

`setUpFileOp (ack)`

[actions.t](../file/actions.t.html)\[[2245](../source/actions.t.html#2245)\]

::: desc
ask for a file, and carry out our operation is we get one
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
