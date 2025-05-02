---
layout: docs
---
<span class="title">Save</span><span class="type">object</span>

[actions.t](../file/actions.t.html)\[[2656](../source/actions.t.html#2656)\]

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



Special "save" action. This command saves the current game state to an
external file for later restoration.

**`Save`**` :   `[`Action`](../object/Action.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Save`**  
[`Action`](../object/Action.html)  
[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
[`Redirector`](../object/Redirector.html)  
`                                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`fileDisposition`](#fileDisposition) [`filePromptMsg`](#filePromptMsg) [`fileTypeID`](#fileTypeID) [`includeInUndo`](#includeInUndo) [`isRepeatable`](#isRepeatable)

Inherited from `Action` :  
[`actionFailed`](../object/Action.html#actionFailed) [`advanceOnFailure`](../object/Action.html#advanceOnFailure) [`againRepeatsParse`](../object/Action.html#againRepeatsParse) [`allowAll`](../object/Action.html#allowAll) [`extraMessageParams`](../object/Action.html#extraMessageParams) [`failCheckMsg`](../object/Action.html#failCheckMsg) [`failedActionCountsAsTurn`](../object/Action.html#failedActionCountsAsTurn) [`implicitTimeTaken`](../object/Action.html#implicitTimeTaken) [`isConversational`](../object/Action.html#isConversational) [`isImplicit`](../object/Action.html#isImplicit) [`oldRoom`](../object/Action.html#oldRoom) [`parentAction`](../object/Action.html#parentAction) [`parentAllowAll`](../object/Action.html#parentAllowAll) [`preCond`](../object/Action.html#preCond) [`redirectParent`](../object/Action.html#redirectParent) [`reportImplicitActions`](../object/Action.html#reportImplicitActions) [`scopeList`](../object/Action.html#scopeList) [`spellingPriority`](../object/Action.html#spellingPriority) [`synthParamID`](../object/Action.html#synthParamID) [`timeTaken`](../object/Action.html#timeTaken) [`turnsTaken`](../object/Action.html#turnsTaken) [`unhides`](../object/Action.html#unhides) [`verifyObj`](../object/Action.html#verifyObj) [`wasIlluminated`](../object/Action.html#wasIlluminated)





<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`performFileOp`](#performFileOp) [`showCancelMsg`](#showCancelMsg)

Inherited from `Action` :  
[`acknowledgeNotifyStatus`](../object/Action.html#acknowledgeNotifyStatus) [`addExtraScopeItems`](../object/Action.html#addExtraScopeItems) [`addImplicitTime`](../object/Action.html#addImplicitTime) [`advanceTime`](../object/Action.html#advanceTime) [`afterAction`](../object/Action.html#afterAction) [`announceObject`](../object/Action.html#announceObject) [`beforeAction`](../object/Action.html#beforeAction) [`buildImplicitActionAnnouncement`](../object/Action.html#buildImplicitActionAnnouncement) [`buildScopeList`](../object/Action.html#buildScopeList) [`checkAction`](../object/Action.html#checkAction) [`checkActionPreconditions`](../object/Action.html#checkActionPreconditions) [`commandNotPresent`](../object/Action.html#commandNotPresent) [`exec`](../object/Action.html#exec) [`execAction`](../object/Action.html#execAction) [`execCycle`](../object/Action.html#execCycle) [`execGroup`](../object/Action.html#execGroup) [`getAll`](../object/Action.html#getAll) [`getAllUnhidden`](../object/Action.html#getAllUnhidden) [`getMessageParam`](../object/Action.html#getMessageParam) [`implicitAnnouncement`](../object/Action.html#implicitAnnouncement) [`reportAction`](../object/Action.html#reportAction) [`scoreObjects`](../object/Action.html#scoreObjects) [`setMessageParam`](../object/Action.html#setMessageParam) [`setMessageParams`](../object/Action.html#setMessageParams) [`spPrefix`](../object/Action.html#spPrefix) [`spSuffix`](../object/Action.html#spSuffix) [`synthMessageParam`](../object/Action.html#synthMessageParam) [`turnSequence`](../object/Action.html#turnSequence) [`verify`](../object/Action.html#verify) [`verifyObjRole`](../object/Action.html#verifyObjRole) [`wrapObjectsNP`](../object/Action.html#wrapObjectsNP)

Inherited from `ReplaceRedirector` :  
[`redirect`](../object/ReplaceRedirector.html#redirect)

Inherited from `Redirector` :  
[`doInstead`](../object/Redirector.html#doInstead) [`doNested`](../object/Redirector.html#doNested) [`doOtherAction`](../object/Redirector.html#doOtherAction)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="fileDisposition"></span>

`fileDisposition`

[actions.t](../file/actions.t.html)\[[2661](../source/actions.t.html#2661)\]



we're asking for a file to save, or type t3-save



<span id="filePromptMsg"></span>

`filePromptMsg`

[actions.t](../file/actions.t.html)\[[2658](../source/actions.t.html#2658)\]



the file dialog prompt



<span id="fileTypeID"></span>

`fileTypeID`

[actions.t](../file/actions.t.html)\[[2662](../source/actions.t.html#2662)\]



*no description available*



<span id="includeInUndo"></span>

`includeInUndo`<span class="rem">OVERRIDDEN</span>

[actions.t](../file/actions.t.html)\[[2715](../source/actions.t.html#2715)\]



Saving has no effect on game state, so it's irrelevant whether or not
it's undoable; but it might be confusing to say we undid a "save"
command, because the player might think we deleted the saved file. To
avoid such confusion, do not include "save" commands in the undo log.



<span id="isRepeatable"></span>

`isRepeatable`<span class="rem">OVERRIDDEN</span>

[actions.t](../file/actions.t.html)\[[2722](../source/actions.t.html#2722)\]



Don't allow this to be repeated with AGAIN. There's no point in
repeating a SAVE immediately, as nothing will have changed in the game
state to warrant saving again.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="performFileOp"></span>

`performFileOp (fname, ack, desc, :?)`

[actions.t](../file/actions.t.html)\[[2668](../source/actions.t.html#2668)\]



perform a save



<span id="showCancelMsg"></span>

`showCancelMsg ( )`

[actions.t](../file/actions.t.html)\[[2665](../source/actions.t.html#2665)\]



cancel message





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


