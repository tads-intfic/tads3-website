---
layout: docs
---
<span class="title">Evaluate</span><span class="type">object</span>

[debug.t](../file/debug.t.html)\[[205](../source/debug.t.html#205)\]

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



The EVALUATE action allows any expression to be evaluated

**`Evaluate`**` :   `[`LiteralAction`](../object/LiteralAction.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Evaluate`**  
[`LiteralAction`](../object/LiteralAction.html)  
[`IAction`](../object/IAction.html)  
[`Action`](../object/Action.html)  
[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
[`Redirector`](../object/Redirector.html)  
`                                                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



` [`includeInUndo`](#includeInUndo)  `

Inherited from `LiteralAction` :  
` [`literal`](../object/LiteralAction.html#literal)  [`num`](../object/LiteralAction.html#num)  `

Inherited from `IAction` :  
` [`againRepeatsParse`](../object/IAction.html#againRepeatsParse)  `

Inherited from `Action` :  
` [`actionFailed`](../object/Action.html#actionFailed)  [`advanceOnFailure`](../object/Action.html#advanceOnFailure)  [`allowAll`](../object/Action.html#allowAll)  [`extraMessageParams`](../object/Action.html#extraMessageParams)  [`failCheckMsg`](../object/Action.html#failCheckMsg)  [`failedActionCountsAsTurn`](../object/Action.html#failedActionCountsAsTurn)  [`implicitTimeTaken`](../object/Action.html#implicitTimeTaken)  [`isConversational`](../object/Action.html#isConversational)  [`isImplicit`](../object/Action.html#isImplicit)  [`isRepeatable`](../object/Action.html#isRepeatable)  [`oldRoom`](../object/Action.html#oldRoom)  [`parentAction`](../object/Action.html#parentAction)  [`parentAllowAll`](../object/Action.html#parentAllowAll)  [`preCond`](../object/Action.html#preCond)  [`redirectParent`](../object/Action.html#redirectParent)  [`reportImplicitActions`](../object/Action.html#reportImplicitActions)  [`scopeList`](../object/Action.html#scopeList)  [`spellingPriority`](../object/Action.html#spellingPriority)  [`synthParamID`](../object/Action.html#synthParamID)  [`timeTaken`](../object/Action.html#timeTaken)  [`turnsTaken`](../object/Action.html#turnsTaken)  [`unhides`](../object/Action.html#unhides)  [`verifyObj`](../object/Action.html#verifyObj)  [`wasIlluminated`](../object/Action.html#wasIlluminated)  `
<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



` [`afterAction`](#afterAction)  [`beforeAction`](#beforeAction)  [`exec`](#exec)  [`turnSequence`](#turnSequence)  `



Inherited from `IAction` :  
` [`execCycle`](../object/IAction.html#execCycle)  [`execResolvedAction`](../object/IAction.html#execResolvedAction)  [`resolvedObjectsInScope`](../object/IAction.html#resolvedObjectsInScope)  [`scoreObjects`](../object/IAction.html#scoreObjects)  [`setResolvedObjects`](../object/IAction.html#setResolvedObjects)  `

Inherited from `Action` :  
` [`acknowledgeNotifyStatus`](../object/Action.html#acknowledgeNotifyStatus)  [`addExtraScopeItems`](../object/Action.html#addExtraScopeItems)  [`addImplicitTime`](../object/Action.html#addImplicitTime)  [`advanceTime`](../object/Action.html#advanceTime)  [`announceObject`](../object/Action.html#announceObject)  [`buildImplicitActionAnnouncement`](../object/Action.html#buildImplicitActionAnnouncement)  [`buildScopeList`](../object/Action.html#buildScopeList)  [`checkAction`](../object/Action.html#checkAction)  [`checkActionPreconditions`](../object/Action.html#checkActionPreconditions)  [`commandNotPresent`](../object/Action.html#commandNotPresent)  [`execAction`](../object/Action.html#execAction)  [`execGroup`](../object/Action.html#execGroup)  [`getAll`](../object/Action.html#getAll)  [`getAllUnhidden`](../object/Action.html#getAllUnhidden)  [`getMessageParam`](../object/Action.html#getMessageParam)  [`implicitAnnouncement`](../object/Action.html#implicitAnnouncement)  [`reportAction`](../object/Action.html#reportAction)  [`setMessageParam`](../object/Action.html#setMessageParam)  [`setMessageParams`](../object/Action.html#setMessageParams)  [`spPrefix`](../object/Action.html#spPrefix)  [`spSuffix`](../object/Action.html#spSuffix)  [`synthMessageParam`](../object/Action.html#synthMessageParam)  [`verify`](../object/Action.html#verify)  [`verifyObjRole`](../object/Action.html#verifyObjRole)  [`wrapObjectsNP`](../object/Action.html#wrapObjectsNP)  `

Inherited from `ReplaceRedirector` :  
` [`redirect`](../object/ReplaceRedirector.html#redirect)  `

Inherited from `Redirector` :  
` [`doInstead`](../object/Redirector.html#doInstead)  [`doNested`](../object/Redirector.html#doNested)  [`doOtherAction`](../object/Redirector.html#doOtherAction)  `

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="includeInUndo"></span>

`includeInUndo`<span class="rem">OVERRIDDEN</span>

[debug.t](../file/debug.t.html)\[[239](../source/debug.t.html#239)\]



If the attempt to evaluate the expression caused any other kind of
error, display the exception message.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="afterAction"></span>

`afterAction ( )`<span class="rem">OVERRIDDEN</span>

[debug.t](../file/debug.t.html)\[[240](../source/debug.t.html#240)\]



*no description available*



<span id="beforeAction"></span>

`beforeAction ( )`<span class="rem">OVERRIDDEN</span>

[debug.t](../file/debug.t.html)\[[241](../source/debug.t.html#241)\]



*no description available*



<span id="exec"></span>

`exec (cmd)`<span class="rem">OVERRIDDEN</span>

[debug.t](../file/debug.t.html)\[[206](../source/debug.t.html#206)\]



*no description available*



<span id="turnSequence"></span>

`turnSequence ( )`<span class="rem">OVERRIDDEN</span>

[debug.t](../file/debug.t.html)\[[242](../source/debug.t.html#242)\]



*no description available*
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


