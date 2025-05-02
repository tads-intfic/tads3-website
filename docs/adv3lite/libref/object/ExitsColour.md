---
layout: docs
---
<span class="title">ExitsColour</span><span class="type">object</span>

[actions.t](../file/actions.t.html)\[[163](../source/actions.t.html#163)\]

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

**`ExitsColour`**` :   `[`SystemAction`](../object/SystemAction.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ExitsColour`**  
[`SystemAction`](../object/SystemAction.html)  
[`IAction`](../object/IAction.html)  
[`Action`](../object/Action.html)  
[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
[`Redirector`](../object/Redirector.html)  
`                                                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





Inherited from `SystemAction` :  
[`includeInUndo`](../object/SystemAction.html#includeInUndo) [`isRepeatable`](../object/SystemAction.html#isRepeatable) [`timeTaken`](../object/SystemAction.html#timeTaken) [`turnsTaken`](../object/SystemAction.html#turnsTaken)

Inherited from `IAction` :  
[`againRepeatsParse`](../object/IAction.html#againRepeatsParse)

Inherited from `Action` :  
[`actionFailed`](../object/Action.html#actionFailed) [`advanceOnFailure`](../object/Action.html#advanceOnFailure) [`allowAll`](../object/Action.html#allowAll) [`extraMessageParams`](../object/Action.html#extraMessageParams) [`failCheckMsg`](../object/Action.html#failCheckMsg) [`failedActionCountsAsTurn`](../object/Action.html#failedActionCountsAsTurn) [`implicitTimeTaken`](../object/Action.html#implicitTimeTaken) [`isConversational`](../object/Action.html#isConversational) [`isImplicit`](../object/Action.html#isImplicit) [`oldRoom`](../object/Action.html#oldRoom) [`parentAction`](../object/Action.html#parentAction) [`parentAllowAll`](../object/Action.html#parentAllowAll) [`preCond`](../object/Action.html#preCond) [`redirectParent`](../object/Action.html#redirectParent) [`reportImplicitActions`](../object/Action.html#reportImplicitActions) [`scopeList`](../object/Action.html#scopeList) [`spellingPriority`](../object/Action.html#spellingPriority) [`synthParamID`](../object/Action.html#synthParamID) [`unhides`](../object/Action.html#unhides) [`verifyObj`](../object/Action.html#verifyObj) [`wasIlluminated`](../object/Action.html#wasIlluminated)





<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`execAction`](#execAction)

Inherited from `SystemAction` :  
[`afterAction`](../object/SystemAction.html#afterAction) [`exec`](../object/SystemAction.html#exec) [`execCycle`](../object/SystemAction.html#execCycle) [`getInputFile`](../object/SystemAction.html#getInputFile) [`turnSequence`](../object/SystemAction.html#turnSequence)

Inherited from `IAction` :  
[`execResolvedAction`](../object/IAction.html#execResolvedAction) [`resolvedObjectsInScope`](../object/IAction.html#resolvedObjectsInScope) [`scoreObjects`](../object/IAction.html#scoreObjects) [`setResolvedObjects`](../object/IAction.html#setResolvedObjects)

Inherited from `Action` :  
[`acknowledgeNotifyStatus`](../object/Action.html#acknowledgeNotifyStatus) [`addExtraScopeItems`](../object/Action.html#addExtraScopeItems) [`addImplicitTime`](../object/Action.html#addImplicitTime) [`advanceTime`](../object/Action.html#advanceTime) [`announceObject`](../object/Action.html#announceObject) [`beforeAction`](../object/Action.html#beforeAction) [`buildImplicitActionAnnouncement`](../object/Action.html#buildImplicitActionAnnouncement) [`buildScopeList`](../object/Action.html#buildScopeList) [`checkAction`](../object/Action.html#checkAction) [`checkActionPreconditions`](../object/Action.html#checkActionPreconditions) [`commandNotPresent`](../object/Action.html#commandNotPresent) [`execGroup`](../object/Action.html#execGroup) [`getAll`](../object/Action.html#getAll) [`getAllUnhidden`](../object/Action.html#getAllUnhidden) [`getMessageParam`](../object/Action.html#getMessageParam) [`implicitAnnouncement`](../object/Action.html#implicitAnnouncement) [`reportAction`](../object/Action.html#reportAction) [`setMessageParam`](../object/Action.html#setMessageParam) [`setMessageParams`](../object/Action.html#setMessageParams) [`spPrefix`](../object/Action.html#spPrefix) [`spSuffix`](../object/Action.html#spSuffix) [`synthMessageParam`](../object/Action.html#synthMessageParam) [`verify`](../object/Action.html#verify) [`verifyObjRole`](../object/Action.html#verifyObjRole) [`wrapObjectsNP`](../object/Action.html#wrapObjectsNP)

Inherited from `ReplaceRedirector` :  
[`redirect`](../object/ReplaceRedirector.html#redirect)

Inherited from `Redirector` :  
[`doInstead`](../object/Redirector.html#doInstead) [`doNested`](../object/Redirector.html#doNested) [`doOtherAction`](../object/Redirector.html#doOtherAction)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="execAction"></span>

`execAction (cmd)`<span class="rem">OVERRIDDEN</span>

[actions.t](../file/actions.t.html)\[[164](../source/actions.t.html#164)\]



*no description available*





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


