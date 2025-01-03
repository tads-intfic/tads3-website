---
layout: docs
---
<span class="title">LiteralTAction</span><span class="type">class</span>

[action.t](../file/action.t.html)\[[2552](../source/action.t.html#2552)\]

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



A LiteralTAction is an action that involves one physical object and one
string, e.g. TYPE HELLO ON TERMINAL.

`class `**`LiteralTAction`**` :   `[`TAction`](../object/TAction.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`LiteralTAction`**  
[`TAction`](../object/TAction.html)  
[`Action`](../object/Action.html)  
[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
[`Redirector`](../object/Redirector.html)  
`                                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`EnterOn`](../object/EnterOn.html) [`SetTo`](../object/SetTo.html) [`TellTo`](../object/TellTo.html) [`TurnTo`](../object/TurnTo.html) [`TypeOn`](../object/TypeOn.html) [`WriteOn`](../object/WriteOn.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`literal`](#literal) [`num`](#num)

Inherited from `TAction` :  
[`actionList`](../object/TAction.html#actionList) [`announceMultiAction`](../object/TAction.html#announceMultiAction) [`announceMultiCheck`](../object/TAction.html#announceMultiCheck) [`announceMultiVerify`](../object/TAction.html#announceMultiVerify) [`aqinfo`](../object/TAction.html#aqinfo) [`curDobj`](../object/TAction.html#curDobj) [`curObj`](../object/TAction.html#curObj) [`dqinfo`](../object/TAction.html#dqinfo) [`gActor`](../object/TAction.html#gActor) [`haltOnMessageInCheck`](../object/TAction.html#haltOnMessageInCheck) [`iqinfo`](../object/TAction.html#iqinfo) [`lastVerifyMsg`](../object/TAction.html#lastVerifyMsg) [`reportFailureAfterSuccess`](../object/TAction.html#reportFailureAfterSuccess) [`reportList`](../object/TAction.html#reportList) [`signal`](../object/TAction.html#signal) [`verifyTab`](../object/TAction.html#verifyTab)

Inherited from `Action` :  
[`actionFailed`](../object/Action.html#actionFailed) [`advanceOnFailure`](../object/Action.html#advanceOnFailure) [`againRepeatsParse`](../object/Action.html#againRepeatsParse) [`allowAll`](../object/Action.html#allowAll) [`extraMessageParams`](../object/Action.html#extraMessageParams) [`failCheckMsg`](../object/Action.html#failCheckMsg) [`failedActionCountsAsTurn`](../object/Action.html#failedActionCountsAsTurn) [`implicitTimeTaken`](../object/Action.html#implicitTimeTaken) [`includeInUndo`](../object/Action.html#includeInUndo) [`isConversational`](../object/Action.html#isConversational) [`isImplicit`](../object/Action.html#isImplicit) [`isRepeatable`](../object/Action.html#isRepeatable) [`oldRoom`](../object/Action.html#oldRoom) [`parentAction`](../object/Action.html#parentAction) [`parentAllowAll`](../object/Action.html#parentAllowAll) [`preCond`](../object/Action.html#preCond) [`redirectParent`](../object/Action.html#redirectParent) [`reportImplicitActions`](../object/Action.html#reportImplicitActions) [`scopeList`](../object/Action.html#scopeList) [`spellingPriority`](../object/Action.html#spellingPriority) [`synthParamID`](../object/Action.html#synthParamID) [`timeTaken`](../object/Action.html#timeTaken) [`turnsTaken`](../object/Action.html#turnsTaken) [`unhides`](../object/Action.html#unhides) [`verifyObj`](../object/Action.html#verifyObj) [`wasIlluminated`](../object/Action.html#wasIlluminated)
<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`execAction`](#execAction) [`verify`](#verify)

Inherited from `TAction` :  
[`addVerifyResult`](../object/TAction.html#addVerifyResult) [`check`](../object/TAction.html#check) [`checkAction`](../object/TAction.html#checkAction) [`checkPreCond`](../object/TAction.html#checkPreCond) [`doAction`](../object/TAction.html#doAction) [`doActionOnce`](../object/TAction.html#doActionOnce) [`execCycle`](../object/TAction.html#execCycle) [`execResolvedAction`](../object/TAction.html#execResolvedAction) [`getAll`](../object/TAction.html#getAll) [`getMessageParam`](../object/TAction.html#getMessageParam) [`getVerbPhrase`](../object/TAction.html#getVerbPhrase) [`getVerbPhrase1`](../object/TAction.html#getVerbPhrase1) [`makeScopeUniversal`](../object/TAction.html#makeScopeUniversal) [`reportAction`](../object/TAction.html#reportAction) [`reset`](../object/TAction.html#reset) [`resolvedObjectsInScope`](../object/TAction.html#resolvedObjectsInScope) [`setResolvedObjects`](../object/TAction.html#setResolvedObjects)

Inherited from `Action` :  
[`acknowledgeNotifyStatus`](../object/Action.html#acknowledgeNotifyStatus) [`addExtraScopeItems`](../object/Action.html#addExtraScopeItems) [`addImplicitTime`](../object/Action.html#addImplicitTime) [`advanceTime`](../object/Action.html#advanceTime) [`afterAction`](../object/Action.html#afterAction) [`announceObject`](../object/Action.html#announceObject) [`beforeAction`](../object/Action.html#beforeAction) [`buildImplicitActionAnnouncement`](../object/Action.html#buildImplicitActionAnnouncement) [`buildScopeList`](../object/Action.html#buildScopeList) [`checkActionPreconditions`](../object/Action.html#checkActionPreconditions) [`commandNotPresent`](../object/Action.html#commandNotPresent) [`exec`](../object/Action.html#exec) [`execGroup`](../object/Action.html#execGroup) [`getAllUnhidden`](../object/Action.html#getAllUnhidden) [`implicitAnnouncement`](../object/Action.html#implicitAnnouncement) [`scoreObjects`](../object/Action.html#scoreObjects) [`setMessageParam`](../object/Action.html#setMessageParam) [`setMessageParams`](../object/Action.html#setMessageParams) [`spPrefix`](../object/Action.html#spPrefix) [`spSuffix`](../object/Action.html#spSuffix) [`synthMessageParam`](../object/Action.html#synthMessageParam) [`turnSequence`](../object/Action.html#turnSequence) [`verifyObjRole`](../object/Action.html#verifyObjRole) [`wrapObjectsNP`](../object/Action.html#wrapObjectsNP)

Inherited from `ReplaceRedirector` :  
[`redirect`](../object/ReplaceRedirector.html#redirect)

Inherited from `Redirector` :  
[`doInstead`](../object/Redirector.html#doInstead) [`doNested`](../object/Redirector.html#doNested) [`doOtherAction`](../object/Redirector.html#doOtherAction)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="literal"></span>

`literal`

[action.t](../file/action.t.html)\[[2594](../source/action.t.html#2594)\]



The literal value associated with this command



<span id="num"></span>

`num`

[action.t](../file/action.t.html)\[[2597](../source/action.t.html#2597)\]



The numerical value of our literal



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="execAction"></span>

`execAction (cmd)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[2553](../source/action.t.html#2553)\]



*no description available*



<span id="verify"></span>

`verify (obj, role)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[2587](../source/action.t.html#2587)\]



Whichever object slot a verify routine is notionally trying to verify
for given the grammatical form of the command, in practice only the
direct object (the thing involved in the command) can be verified. E.g.
for WRITE FOO ON BALL we treat BALL as the direct object of the command
and FOO as the literal, even if the Parser thinks it needs to verify the
Indirect Object to disambiguate BALL.
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


