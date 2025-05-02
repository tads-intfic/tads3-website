---
layout: docs
---
<span class="title">FileOpAction</span><span class="type">class</span>

[actions.t](../file/actions.t.html)\[[2203](../source/actions.t.html#2203)\]

[Superclass  
Tree](#_SuperClassTree_)

[Subclass  
Tree](#_SubClassTree_)

[Global  
Objects](#_ObjectSummary_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)



A base class for file-oriented actions, such as SCRIPT, RECORD, and
REPLAY. We provide common handling that prompts interactively for a
filename; subclasses must override a few methods and properties to carry
out the specific subclassed operation on the file.

`class `**`FileOpAction`**` :   `[`SystemAction`](../object/SystemAction.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`FileOpAction`**  
[`SystemAction`](../object/SystemAction.html)  
[`IAction`](../object/IAction.html)  
[`Action`](../object/Action.html)  
[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
[`Redirector`](../object/Redirector.html)  
`                                                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



` [`fileDisposition`](#fileDisposition)  [`filePromptMsg`](#filePromptMsg)  [`fileTypeID`](#fileTypeID)  [`includeInUndo`](#includeInUndo)  [`isRepeatable`](#isRepeatable)  [`showCancelMsg`](#showCancelMsg)  `

Inherited from `SystemAction` :  
` [`timeTaken`](../object/SystemAction.html#timeTaken)  [`turnsTaken`](../object/SystemAction.html#turnsTaken)  `

Inherited from `IAction` :  
` [`againRepeatsParse`](../object/IAction.html#againRepeatsParse)  `

Inherited from `Action` :  
` [`actionFailed`](../object/Action.html#actionFailed)  [`advanceOnFailure`](../object/Action.html#advanceOnFailure)  [`allowAll`](../object/Action.html#allowAll)  [`extraMessageParams`](../object/Action.html#extraMessageParams)  [`failCheckMsg`](../object/Action.html#failCheckMsg)  [`failedActionCountsAsTurn`](../object/Action.html#failedActionCountsAsTurn)  [`implicitTimeTaken`](../object/Action.html#implicitTimeTaken)  [`isConversational`](../object/Action.html#isConversational)  [`isImplicit`](../object/Action.html#isImplicit)  [`oldRoom`](../object/Action.html#oldRoom)  [`parentAction`](../object/Action.html#parentAction)  [`parentAllowAll`](../object/Action.html#parentAllowAll)  [`preCond`](../object/Action.html#preCond)  [`redirectParent`](../object/Action.html#redirectParent)  [`reportImplicitActions`](../object/Action.html#reportImplicitActions)  [`scopeList`](../object/Action.html#scopeList)  [`spellingPriority`](../object/Action.html#spellingPriority)  [`synthParamID`](../object/Action.html#synthParamID)  [`unhides`](../object/Action.html#unhides)  [`verifyObj`](../object/Action.html#verifyObj)  [`wasIlluminated`](../object/Action.html#wasIlluminated)  `





<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



` [`execAction`](#execAction)  [`performFileOp`](#performFileOp)  [`setUpFileOp`](#setUpFileOp)  `

Inherited from `SystemAction` :  
` [`afterAction`](../object/SystemAction.html#afterAction)  [`exec`](../object/SystemAction.html#exec)  [`execCycle`](../object/SystemAction.html#execCycle)  [`getInputFile`](../object/SystemAction.html#getInputFile)  [`turnSequence`](../object/SystemAction.html#turnSequence)  `

Inherited from `IAction` :  
` [`execResolvedAction`](../object/IAction.html#execResolvedAction)  [`resolvedObjectsInScope`](../object/IAction.html#resolvedObjectsInScope)  [`scoreObjects`](../object/IAction.html#scoreObjects)  [`setResolvedObjects`](../object/IAction.html#setResolvedObjects)  `

Inherited from `Action` :  
` [`acknowledgeNotifyStatus`](../object/Action.html#acknowledgeNotifyStatus)  [`addExtraScopeItems`](../object/Action.html#addExtraScopeItems)  [`addImplicitTime`](../object/Action.html#addImplicitTime)  [`advanceTime`](../object/Action.html#advanceTime)  [`announceObject`](../object/Action.html#announceObject)  [`beforeAction`](../object/Action.html#beforeAction)  [`buildImplicitActionAnnouncement`](../object/Action.html#buildImplicitActionAnnouncement)  [`buildScopeList`](../object/Action.html#buildScopeList)  [`checkAction`](../object/Action.html#checkAction)  [`checkActionPreconditions`](../object/Action.html#checkActionPreconditions)  [`commandNotPresent`](../object/Action.html#commandNotPresent)  [`execGroup`](../object/Action.html#execGroup)  [`getAll`](../object/Action.html#getAll)  [`getAllUnhidden`](../object/Action.html#getAllUnhidden)  [`getMessageParam`](../object/Action.html#getMessageParam)  [`implicitAnnouncement`](../object/Action.html#implicitAnnouncement)  [`reportAction`](../object/Action.html#reportAction)  [`setMessageParam`](../object/Action.html#setMessageParam)  [`setMessageParams`](../object/Action.html#setMessageParams)  [`spPrefix`](../object/Action.html#spPrefix)  [`spSuffix`](../object/Action.html#spSuffix)  [`synthMessageParam`](../object/Action.html#synthMessageParam)  [`verify`](../object/Action.html#verify)  [`verifyObjRole`](../object/Action.html#verifyObjRole)  [`wrapObjectsNP`](../object/Action.html#wrapObjectsNP)  `

Inherited from `ReplaceRedirector` :  
` [`redirect`](../object/ReplaceRedirector.html#redirect)  `

Inherited from `Redirector` :  
` [`doInstead`](../object/Redirector.html#doInstead)  [`doNested`](../object/Redirector.html#doNested)  [`doOtherAction`](../object/Redirector.html#doOtherAction)  `

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="fileDisposition"></span>

`fileDisposition`

[actions.t](../file/actions.t.html)\[[2208](../source/actions.t.html#2208)\]



the file dialog open/save type



<span id="filePromptMsg"></span>

`filePromptMsg`

[actions.t](../file/actions.t.html)\[[2205](../source/actions.t.html#2205)\]



our file dialog prompt message



<span id="fileTypeID"></span>

`fileTypeID`

[actions.t](../file/actions.t.html)\[[2211](../source/actions.t.html#2211)\]



the file dialog type ID



<span id="includeInUndo"></span>

`includeInUndo`<span class="rem">OVERRIDDEN</span>

[actions.t](../file/actions.t.html)\[[2282](../source/actions.t.html#2282)\]



we can't include this in undo, as it affects external files



<span id="isRepeatable"></span>

`isRepeatable`<span class="rem">OVERRIDDEN</span>

[actions.t](../file/actions.t.html)\[[2285](../source/actions.t.html#2285)\]



don't allow repeating with AGAIN



<span id="showCancelMsg"></span>

`showCancelMsg`

[actions.t](../file/actions.t.html)\[[2214](../source/actions.t.html#2214)\]



show our cancellation mesage



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="execAction"></span>

`execAction (cmd)`<span class="rem">OVERRIDDEN</span>

[actions.t](../file/actions.t.html)\[[2234](../source/actions.t.html#2234)\]



Each concrete action subclass must override this to carry out our
operation. This is called when the user has successfully selected a
filename for the operation.



<span id="performFileOp"></span>

`performFileOp (fname, ack, desc, :?)`

[actions.t](../file/actions.t.html)\[[2225](../source/actions.t.html#2225)\]



Carry out our file operation.

'desc' is an optional named argument giving a description string entered
by the user via the Save Game dialog. Some versions of the Save Game
dialog let the user enter this additional information, which can be
stored as part of the saved game metadata.



<span id="setUpFileOp"></span>

`setUpFileOp (ack)`

[actions.t](../file/actions.t.html)\[[2245](../source/actions.t.html#2245)\]



ask for a file, and carry out our operation is we get one





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


