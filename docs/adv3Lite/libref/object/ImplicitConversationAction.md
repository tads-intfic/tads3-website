---
layout: docs
---
<span class="title">ImplicitConversationAction</span><span class="type">class</span>

[actions.t](../file/actions.t.html)\[[2005](../source/actions.t.html#2005)\]

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



*no description available*

`class `**`ImplicitConversationAction`**` :   `[`TopicAction`](../object/TopicAction.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ImplicitConversationAction`**  
[`TopicAction`](../object/TopicAction.html)  
[`IAction`](../object/IAction.html)  
[`Action`](../object/Action.html)  
[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
[`Redirector`](../object/Redirector.html)  
`                                                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



` [`AskAboutImplicit`](../object/AskAboutImplicit.html)  [`AskForImplicit`](../object/AskForImplicit.html)  [`Query`](../object/Query.html)  [`SayAction`](../object/SayAction.html)  [`TalkAboutImplicit`](../object/TalkAboutImplicit.html)  [`TellAboutImplicit`](../object/TellAboutImplicit.html)  `
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



` [`defaultProperty`](#defaultProperty)  [`isConversational`](#isConversational)  [`topicListProperty`](#topicListProperty)  [`topics`](#topics)  `

Inherited from `TopicAction` :  
` [`curTopic`](../object/TopicAction.html#curTopic)  `

Inherited from `IAction` :  
` [`againRepeatsParse`](../object/IAction.html#againRepeatsParse)  `

Inherited from `Action` :  
` [`actionFailed`](../object/Action.html#actionFailed)  [`advanceOnFailure`](../object/Action.html#advanceOnFailure)  [`allowAll`](../object/Action.html#allowAll)  [`extraMessageParams`](../object/Action.html#extraMessageParams)  [`failCheckMsg`](../object/Action.html#failCheckMsg)  [`failedActionCountsAsTurn`](../object/Action.html#failedActionCountsAsTurn)  [`implicitTimeTaken`](../object/Action.html#implicitTimeTaken)  [`includeInUndo`](../object/Action.html#includeInUndo)  [`isImplicit`](../object/Action.html#isImplicit)  [`isRepeatable`](../object/Action.html#isRepeatable)  [`oldRoom`](../object/Action.html#oldRoom)  [`parentAction`](../object/Action.html#parentAction)  [`parentAllowAll`](../object/Action.html#parentAllowAll)  [`preCond`](../object/Action.html#preCond)  [`redirectParent`](../object/Action.html#redirectParent)  [`reportImplicitActions`](../object/Action.html#reportImplicitActions)  [`scopeList`](../object/Action.html#scopeList)  [`spellingPriority`](../object/Action.html#spellingPriority)  [`synthParamID`](../object/Action.html#synthParamID)  [`timeTaken`](../object/Action.html#timeTaken)  [`turnsTaken`](../object/Action.html#turnsTaken)  [`unhides`](../object/Action.html#unhides)  [`verifyObj`](../object/Action.html#verifyObj)  [`wasIlluminated`](../object/Action.html#wasIlluminated)  `
<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



` [`execAction`](#execAction)  [`resolvePronouns`](#resolvePronouns)  `

Inherited from `TopicAction` :  
` [`exec`](../object/TopicAction.html#exec)  `

Inherited from `IAction` :  
` [`execCycle`](../object/IAction.html#execCycle)  [`execResolvedAction`](../object/IAction.html#execResolvedAction)  [`resolvedObjectsInScope`](../object/IAction.html#resolvedObjectsInScope)  [`scoreObjects`](../object/IAction.html#scoreObjects)  [`setResolvedObjects`](../object/IAction.html#setResolvedObjects)  `

Inherited from `Action` :  
` [`acknowledgeNotifyStatus`](../object/Action.html#acknowledgeNotifyStatus)  [`addExtraScopeItems`](../object/Action.html#addExtraScopeItems)  [`addImplicitTime`](../object/Action.html#addImplicitTime)  [`advanceTime`](../object/Action.html#advanceTime)  [`afterAction`](../object/Action.html#afterAction)  [`announceObject`](../object/Action.html#announceObject)  [`beforeAction`](../object/Action.html#beforeAction)  [`buildImplicitActionAnnouncement`](../object/Action.html#buildImplicitActionAnnouncement)  [`buildScopeList`](../object/Action.html#buildScopeList)  [`checkAction`](../object/Action.html#checkAction)  [`checkActionPreconditions`](../object/Action.html#checkActionPreconditions)  [`commandNotPresent`](../object/Action.html#commandNotPresent)  [`execGroup`](../object/Action.html#execGroup)  [`getAll`](../object/Action.html#getAll)  [`getAllUnhidden`](../object/Action.html#getAllUnhidden)  [`getMessageParam`](../object/Action.html#getMessageParam)  [`implicitAnnouncement`](../object/Action.html#implicitAnnouncement)  [`reportAction`](../object/Action.html#reportAction)  [`setMessageParam`](../object/Action.html#setMessageParam)  [`setMessageParams`](../object/Action.html#setMessageParams)  [`spPrefix`](../object/Action.html#spPrefix)  [`spSuffix`](../object/Action.html#spSuffix)  [`synthMessageParam`](../object/Action.html#synthMessageParam)  [`turnSequence`](../object/Action.html#turnSequence)  [`verify`](../object/Action.html#verify)  [`verifyObjRole`](../object/Action.html#verifyObjRole)  [`wrapObjectsNP`](../object/Action.html#wrapObjectsNP)  `

Inherited from `ReplaceRedirector` :  
` [`redirect`](../object/ReplaceRedirector.html#redirect)  `

Inherited from `Redirector` :  
` [`doInstead`](../object/Redirector.html#doInstead)  [`doNested`](../object/Redirector.html#doNested)  [`doOtherAction`](../object/Redirector.html#doOtherAction)  `

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="defaultProperty"></span>

`defaultProperty`

[actions.t](../file/actions.t.html)\[[2041](../source/actions.t.html#2041)\]



The default property to call on the Actor if there's not matching
TopicEntry



<span id="isConversational"></span>

`isConversational`<span class="rem">OVERRIDDEN</span>

[actions.t](../file/actions.t.html)\[[2073](../source/actions.t.html#2073)\]



*no description available*



<span id="topicListProperty"></span>

`topicListProperty`

[actions.t](../file/actions.t.html)\[[2070](../source/actions.t.html#2070)\]



*no description available*



<span id="topics"></span>

`topics`

[actions.t](../file/actions.t.html)\[[2071](../source/actions.t.html#2071)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="execAction"></span>

`execAction (cmd)`<span class="rem">OVERRIDDEN</span>

[actions.t](../file/actions.t.html)\[[2006](../source/actions.t.html#2006)\]



*no description available*



<span id="resolvePronouns"></span>

`resolvePronouns ( )`

[actions.t](../file/actions.t.html)\[[2050](../source/actions.t.html#2050)\]



This is a bit of a kludge to deal with the fact that the Parser doesn't
seem able to resolve pronouns within ResolvedTopics. We do it here
instead.
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


