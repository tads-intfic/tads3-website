---
layout: docs
---
<span class="title">GoNear</span><span class="type">object</span>

[debug.t](../file/debug.t.html)\[[171](../source/debug.t.html#171)\]

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



The GONEAR action allows the game author to move the player character to
anywhere on the map, while testing.

**`GoNear`**` :   `[`TAction`](../object/TAction.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`GoNear`**  
[`TAction`](../object/TAction.html)  
[`Action`](../object/Action.html)  
[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
[`Redirector`](../object/Redirector.html)  
`                                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`againRepeatsParse`](#againRepeatsParse) [`unhides`](#unhides)

Inherited from `TAction` :  
[`actionList`](../object/TAction.html#actionList) [`announceMultiAction`](../object/TAction.html#announceMultiAction) [`announceMultiCheck`](../object/TAction.html#announceMultiCheck) [`announceMultiVerify`](../object/TAction.html#announceMultiVerify) [`aqinfo`](../object/TAction.html#aqinfo) [`curDobj`](../object/TAction.html#curDobj) [`curObj`](../object/TAction.html#curObj) [`dqinfo`](../object/TAction.html#dqinfo) [`gActor`](../object/TAction.html#gActor) [`haltOnMessageInCheck`](../object/TAction.html#haltOnMessageInCheck) [`iqinfo`](../object/TAction.html#iqinfo) [`lastVerifyMsg`](../object/TAction.html#lastVerifyMsg) [`reportFailureAfterSuccess`](../object/TAction.html#reportFailureAfterSuccess) [`reportList`](../object/TAction.html#reportList) [`signal`](../object/TAction.html#signal) [`verifyTab`](../object/TAction.html#verifyTab)

Inherited from `Action` :  
[`actionFailed`](../object/Action.html#actionFailed) [`advanceOnFailure`](../object/Action.html#advanceOnFailure) [`allowAll`](../object/Action.html#allowAll) [`extraMessageParams`](../object/Action.html#extraMessageParams) [`failCheckMsg`](../object/Action.html#failCheckMsg) [`failedActionCountsAsTurn`](../object/Action.html#failedActionCountsAsTurn) [`implicitTimeTaken`](../object/Action.html#implicitTimeTaken) [`includeInUndo`](../object/Action.html#includeInUndo) [`isConversational`](../object/Action.html#isConversational) [`isImplicit`](../object/Action.html#isImplicit) [`isRepeatable`](../object/Action.html#isRepeatable) [`oldRoom`](../object/Action.html#oldRoom) [`parentAction`](../object/Action.html#parentAction) [`parentAllowAll`](../object/Action.html#parentAllowAll) [`preCond`](../object/Action.html#preCond) [`redirectParent`](../object/Action.html#redirectParent) [`reportImplicitActions`](../object/Action.html#reportImplicitActions) [`scopeList`](../object/Action.html#scopeList) [`spellingPriority`](../object/Action.html#spellingPriority) [`synthParamID`](../object/Action.html#synthParamID) [`timeTaken`](../object/Action.html#timeTaken) [`turnsTaken`](../object/Action.html#turnsTaken) [`verifyObj`](../object/Action.html#verifyObj) [`wasIlluminated`](../object/Action.html#wasIlluminated)





<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`addExtraScopeItems`](#addExtraScopeItems) [`afterAction`](#afterAction) [`beforeAction`](#beforeAction) [`turnSequence`](#turnSequence)

Inherited from `TAction` :  
[`addVerifyResult`](../object/TAction.html#addVerifyResult) [`check`](../object/TAction.html#check) [`checkAction`](../object/TAction.html#checkAction) [`checkPreCond`](../object/TAction.html#checkPreCond) [`doAction`](../object/TAction.html#doAction) [`doActionOnce`](../object/TAction.html#doActionOnce) [`execAction`](../object/TAction.html#execAction) [`execCycle`](../object/TAction.html#execCycle) [`execResolvedAction`](../object/TAction.html#execResolvedAction) [`getAll`](../object/TAction.html#getAll) [`getMessageParam`](../object/TAction.html#getMessageParam) [`getVerbPhrase`](../object/TAction.html#getVerbPhrase) [`getVerbPhrase1`](../object/TAction.html#getVerbPhrase1) [`makeScopeUniversal`](../object/TAction.html#makeScopeUniversal) [`reportAction`](../object/TAction.html#reportAction) [`reset`](../object/TAction.html#reset) [`resolvedObjectsInScope`](../object/TAction.html#resolvedObjectsInScope) [`setResolvedObjects`](../object/TAction.html#setResolvedObjects)

Inherited from `Action` :  
[`acknowledgeNotifyStatus`](../object/Action.html#acknowledgeNotifyStatus) [`addImplicitTime`](../object/Action.html#addImplicitTime) [`advanceTime`](../object/Action.html#advanceTime) [`announceObject`](../object/Action.html#announceObject) [`buildImplicitActionAnnouncement`](../object/Action.html#buildImplicitActionAnnouncement) [`buildScopeList`](../object/Action.html#buildScopeList) [`checkActionPreconditions`](../object/Action.html#checkActionPreconditions) [`commandNotPresent`](../object/Action.html#commandNotPresent) [`exec`](../object/Action.html#exec) [`execGroup`](../object/Action.html#execGroup) [`getAllUnhidden`](../object/Action.html#getAllUnhidden) [`implicitAnnouncement`](../object/Action.html#implicitAnnouncement) [`scoreObjects`](../object/Action.html#scoreObjects) [`setMessageParam`](../object/Action.html#setMessageParam) [`setMessageParams`](../object/Action.html#setMessageParams) [`spPrefix`](../object/Action.html#spPrefix) [`spSuffix`](../object/Action.html#spSuffix) [`synthMessageParam`](../object/Action.html#synthMessageParam) [`verify`](../object/Action.html#verify) [`verifyObjRole`](../object/Action.html#verifyObjRole) [`wrapObjectsNP`](../object/Action.html#wrapObjectsNP)

Inherited from `ReplaceRedirector` :  
[`redirect`](../object/ReplaceRedirector.html#redirect)

Inherited from `Redirector` :  
[`doInstead`](../object/Redirector.html#doInstead) [`doNested`](../object/Redirector.html#doNested) [`doOtherAction`](../object/Redirector.html#doOtherAction)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="againRepeatsParse"></span>

`againRepeatsParse`<span class="rem">OVERRIDDEN</span>

[debug.t](../file/debug.t.html)\[[172](../source/debug.t.html#172)\]



*no description available*



<span id="unhides"></span>

`unhides`<span class="rem">OVERRIDDEN</span>

[debug.t](../file/debug.t.html)\[[184](../source/debug.t.html#184)\]



The GoNear action should work even on a hidden item



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="addExtraScopeItems"></span>

`addExtraScopeItems (whichRole?)`<span class="rem">OVERRIDDEN</span>

[debug.t](../file/debug.t.html)\[[175](../source/debug.t.html#175)\]



The GONEAR action requires universal scope



<span id="afterAction"></span>

`afterAction ( )`<span class="rem">OVERRIDDEN</span>

[debug.t](../file/debug.t.html)\[[180](../source/debug.t.html#180)\]



*no description available*



<span id="beforeAction"></span>

`beforeAction ( )`<span class="rem">OVERRIDDEN</span>

[debug.t](../file/debug.t.html)\[[179](../source/debug.t.html#179)\]



*no description available*



<span id="turnSequence"></span>

`turnSequence ( )`<span class="rem">OVERRIDDEN</span>

[debug.t](../file/debug.t.html)\[[181](../source/debug.t.html#181)\]



*no description available*





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


