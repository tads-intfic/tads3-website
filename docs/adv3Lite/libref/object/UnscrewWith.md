---
layout: docs
---
<span class="title">UnscrewWith</span><span class="type">object</span>

[actions.t](../file/actions.t.html)\[[1534](../source/actions.t.html#1534)\]

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



*no description available*

**`UnscrewWith`**` :   `[`TIAction`](../object/TIAction.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`UnscrewWith`**  
[`TIAction`](../object/TIAction.html)  
[`TAction`](../object/TAction.html)  
[`Action`](../object/Action.html)  
[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
[`Redirector`](../object/Redirector.html)  
`                                                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`resolveIobjFirst`](#resolveIobjFirst)

Inherited from `TIAction` :  
[`actionIobjProp`](../object/TIAction.html#actionIobjProp) [`checkIobjProp`](../object/TIAction.html#checkIobjProp) [`curIobj`](../object/TIAction.html#curIobj) [`ioActionList`](../object/TIAction.html#ioActionList) [`preCondIobjProp`](../object/TIAction.html#preCondIobjProp) [`verIobjProp`](../object/TIAction.html#verIobjProp)

Inherited from `TAction` :  
[`actionList`](../object/TAction.html#actionList) [`announceMultiAction`](../object/TAction.html#announceMultiAction) [`announceMultiCheck`](../object/TAction.html#announceMultiCheck) [`announceMultiVerify`](../object/TAction.html#announceMultiVerify) [`aqinfo`](../object/TAction.html#aqinfo) [`curDobj`](../object/TAction.html#curDobj) [`curObj`](../object/TAction.html#curObj) [`dqinfo`](../object/TAction.html#dqinfo) [`gActor`](../object/TAction.html#gActor) [`haltOnMessageInCheck`](../object/TAction.html#haltOnMessageInCheck) [`iqinfo`](../object/TAction.html#iqinfo) [`lastVerifyMsg`](../object/TAction.html#lastVerifyMsg) [`reportFailureAfterSuccess`](../object/TAction.html#reportFailureAfterSuccess) [`reportList`](../object/TAction.html#reportList) [`signal`](../object/TAction.html#signal) [`verifyTab`](../object/TAction.html#verifyTab)

Inherited from `Action` :  
[`actionFailed`](../object/Action.html#actionFailed) [`advanceOnFailure`](../object/Action.html#advanceOnFailure) [`againRepeatsParse`](../object/Action.html#againRepeatsParse) [`allowAll`](../object/Action.html#allowAll) [`extraMessageParams`](../object/Action.html#extraMessageParams) [`failCheckMsg`](../object/Action.html#failCheckMsg) [`failedActionCountsAsTurn`](../object/Action.html#failedActionCountsAsTurn) [`implicitTimeTaken`](../object/Action.html#implicitTimeTaken) [`includeInUndo`](../object/Action.html#includeInUndo) [`isConversational`](../object/Action.html#isConversational) [`isImplicit`](../object/Action.html#isImplicit) [`isRepeatable`](../object/Action.html#isRepeatable) [`oldRoom`](../object/Action.html#oldRoom) [`parentAction`](../object/Action.html#parentAction) [`parentAllowAll`](../object/Action.html#parentAllowAll) [`preCond`](../object/Action.html#preCond) [`redirectParent`](../object/Action.html#redirectParent) [`reportImplicitActions`](../object/Action.html#reportImplicitActions) [`scopeList`](../object/Action.html#scopeList) [`spellingPriority`](../object/Action.html#spellingPriority) [`synthParamID`](../object/Action.html#synthParamID) [`timeTaken`](../object/Action.html#timeTaken) [`turnsTaken`](../object/Action.html#turnsTaken) [`unhides`](../object/Action.html#unhides) [`verifyObj`](../object/Action.html#verifyObj) [`wasIlluminated`](../object/Action.html#wasIlluminated)
<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  
Inherited from `TIAction` :  
[`checkAction`](../object/TIAction.html#checkAction) [`doActionOnce`](../object/TIAction.html#doActionOnce) [`execAction`](../object/TIAction.html#execAction) [`execResolvedAction`](../object/TIAction.html#execResolvedAction) [`getMessageParam`](../object/TIAction.html#getMessageParam) [`getVerbPhrase`](../object/TIAction.html#getVerbPhrase) [`getVerbPhrase2`](../object/TIAction.html#getVerbPhrase2) [`reportAction`](../object/TIAction.html#reportAction) [`reset`](../object/TIAction.html#reset) [`resolvedObjectsInScope`](../object/TIAction.html#resolvedObjectsInScope) [`setResolvedObjects`](../object/TIAction.html#setResolvedObjects)

Inherited from `TAction` :  
[`addVerifyResult`](../object/TAction.html#addVerifyResult) [`check`](../object/TAction.html#check) [`checkPreCond`](../object/TAction.html#checkPreCond) [`doAction`](../object/TAction.html#doAction) [`execCycle`](../object/TAction.html#execCycle) [`getAll`](../object/TAction.html#getAll) [`getVerbPhrase1`](../object/TAction.html#getVerbPhrase1) [`makeScopeUniversal`](../object/TAction.html#makeScopeUniversal)

Inherited from `Action` :  
[`acknowledgeNotifyStatus`](../object/Action.html#acknowledgeNotifyStatus) [`addExtraScopeItems`](../object/Action.html#addExtraScopeItems) [`addImplicitTime`](../object/Action.html#addImplicitTime) [`advanceTime`](../object/Action.html#advanceTime) [`afterAction`](../object/Action.html#afterAction) [`announceObject`](../object/Action.html#announceObject) [`beforeAction`](../object/Action.html#beforeAction) [`buildImplicitActionAnnouncement`](../object/Action.html#buildImplicitActionAnnouncement) [`buildScopeList`](../object/Action.html#buildScopeList) [`checkActionPreconditions`](../object/Action.html#checkActionPreconditions) [`commandNotPresent`](../object/Action.html#commandNotPresent) [`exec`](../object/Action.html#exec) [`execGroup`](../object/Action.html#execGroup) [`getAllUnhidden`](../object/Action.html#getAllUnhidden) [`implicitAnnouncement`](../object/Action.html#implicitAnnouncement) [`scoreObjects`](../object/Action.html#scoreObjects) [`setMessageParam`](../object/Action.html#setMessageParam) [`setMessageParams`](../object/Action.html#setMessageParams) [`spPrefix`](../object/Action.html#spPrefix) [`spSuffix`](../object/Action.html#spSuffix) [`synthMessageParam`](../object/Action.html#synthMessageParam) [`turnSequence`](../object/Action.html#turnSequence) [`verify`](../object/Action.html#verify) [`verifyObjRole`](../object/Action.html#verifyObjRole) [`wrapObjectsNP`](../object/Action.html#wrapObjectsNP)

Inherited from `ReplaceRedirector` :  
[`redirect`](../object/ReplaceRedirector.html#redirect)

Inherited from `Redirector` :  
[`doInstead`](../object/Redirector.html#doInstead) [`doNested`](../object/Redirector.html#doNested) [`doOtherAction`](../object/Redirector.html#doOtherAction)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="resolveIobjFirst"></span>

`resolveIobjFirst`<span class="rem">OVERRIDDEN</span>

[actions.t](../file/actions.t.html)\[[1535](../source/actions.t.html#1535)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


