---
layout: docs
---
<span class="title">ScriptOn</span><span class="type">object</span>

[actions.t](../file/actions.t.html)\[[2292](../source/actions.t.html#2292)\]

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



Turn scripting on. This creates a text file that contains a transcript
of all commands and responses from this point forward.

**`ScriptOn`**` :   `[`Action`](../object/Action.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ScriptOn`**  
[`Action`](../object/Action.html)  
[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
[`Redirector`](../object/Redirector.html)  
`                                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`fileDisposition`](#fileDisposition) [`filePromptMsg`](#filePromptMsg) [`fileTypeID`](#fileTypeID) [`scriptingOkay`](#scriptingOkay) [`scriptingOkayWebTemp`](#scriptingOkayWebTemp)

Inherited from `Action` :  
[`actionFailed`](../object/Action.html#actionFailed) [`advanceOnFailure`](../object/Action.html#advanceOnFailure) [`againRepeatsParse`](../object/Action.html#againRepeatsParse) [`allowAll`](../object/Action.html#allowAll) [`extraMessageParams`](../object/Action.html#extraMessageParams) [`failCheckMsg`](../object/Action.html#failCheckMsg) [`failedActionCountsAsTurn`](../object/Action.html#failedActionCountsAsTurn) [`implicitTimeTaken`](../object/Action.html#implicitTimeTaken) [`includeInUndo`](../object/Action.html#includeInUndo) [`isConversational`](../object/Action.html#isConversational) [`isImplicit`](../object/Action.html#isImplicit) [`isRepeatable`](../object/Action.html#isRepeatable) [`oldRoom`](../object/Action.html#oldRoom) [`parentAction`](../object/Action.html#parentAction) [`parentAllowAll`](../object/Action.html#parentAllowAll) [`preCond`](../object/Action.html#preCond) [`redirectParent`](../object/Action.html#redirectParent) [`reportImplicitActions`](../object/Action.html#reportImplicitActions) [`scopeList`](../object/Action.html#scopeList) [`spellingPriority`](../object/Action.html#spellingPriority) [`synthParamID`](../object/Action.html#synthParamID) [`timeTaken`](../object/Action.html#timeTaken) [`turnsTaken`](../object/Action.html#turnsTaken) [`unhides`](../object/Action.html#unhides) [`verifyObj`](../object/Action.html#verifyObj) [`wasIlluminated`](../object/Action.html#wasIlluminated)





<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`performFileOp`](#performFileOp) [`setUpScripting`](#setUpScripting) [`showCancelMsg`](#showCancelMsg)

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

[actions.t](../file/actions.t.html)\[[2298](../source/actions.t.html#2298)\]



*no description available*



<span id="filePromptMsg"></span>

`filePromptMsg`

[actions.t](../file/actions.t.html)\[[2295](../source/actions.t.html#2295)\]



our file dialog parameters - ask for a log file to save



<span id="fileTypeID"></span>

`fileTypeID`

[actions.t](../file/actions.t.html)\[[2297](../source/actions.t.html#2297)\]



*no description available*



<span id="scriptingOkay"></span>

`scriptingOkay`

[actions.t](../file/actions.t.html)\[[2375](../source/actions.t.html#2375)\]



*no description available*



<span id="scriptingOkayWebTemp"></span>

`scriptingOkayWebTemp`

[actions.t](../file/actions.t.html)\[[2369](../source/actions.t.html#2369)\]



show an error, if acknowledgment is desired



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="performFileOp"></span>

`performFileOp (fname, ack)`

[actions.t](../file/actions.t.html)\[[2310](../source/actions.t.html#2310)\]



turn on scripting to the given file



<span id="setUpScripting"></span>

`setUpScripting (ack)`

[actions.t](../file/actions.t.html)\[[2307](../source/actions.t.html#2307)\]



set up scripting - this can be used to set up scripting
programmatically, in the course of carrying out another action



<span id="showCancelMsg"></span>

`showCancelMsg ( )`

[actions.t](../file/actions.t.html)\[[2301](../source/actions.t.html#2301)\]



show our cancellation mesasge





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


