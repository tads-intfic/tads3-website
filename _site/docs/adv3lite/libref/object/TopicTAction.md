<span class="title">TopicTAction</span><span class="type">class</span>

[action.t](../file/action.t.html)\[[2605](../source/action.t.html#2605)\]

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

<div class="fdesc">

A TopicTAction is an action involving one physical object and one topic,
e.g. ASK BOB ABOUT TOWER.

`class `**`TopicTAction`**` :   `[`TAction`](../object/TAction.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`TopicTAction`**  
`         `[`TAction`](../object/TAction.html)  
`                 `[`Action`](../object/Action.html)  
`                         `[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
`                                 `[`Redirector`](../object/Redirector.html)  
`                                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

` `[`AskAbout`](../object/AskAbout.html)`  `[`AskFor`](../object/AskFor.html)`  `[`ConsultAbout`](../object/ConsultAbout.html)`  `[`QueryAbout`](../object/QueryAbout.html)`  `[`SayTo`](../object/SayTo.html)`  `[`TalkAbout`](../object/TalkAbout.html)`  `[`TellAbout`](../object/TellAbout.html)`  `
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`curIobj`](#curIobj)`  `[`curTopic`](#curTopic)`  `[`topicIsGrammaticalIobj`](#topicIsGrammaticalIobj)`  `

Inherited from `TAction` :  
` `[`actionList`](../object/TAction.html#actionList)`  `[`announceMultiAction`](../object/TAction.html#announceMultiAction)`  `[`announceMultiCheck`](../object/TAction.html#announceMultiCheck)`  `[`announceMultiVerify`](../object/TAction.html#announceMultiVerify)`  `[`aqinfo`](../object/TAction.html#aqinfo)`  `[`curDobj`](../object/TAction.html#curDobj)`  `[`curObj`](../object/TAction.html#curObj)`  `[`dqinfo`](../object/TAction.html#dqinfo)`  `[`gActor`](../object/TAction.html#gActor)`  `[`haltOnMessageInCheck`](../object/TAction.html#haltOnMessageInCheck)`  `[`iqinfo`](../object/TAction.html#iqinfo)`  `[`lastVerifyMsg`](../object/TAction.html#lastVerifyMsg)`  `[`reportFailureAfterSuccess`](../object/TAction.html#reportFailureAfterSuccess)`  `[`reportList`](../object/TAction.html#reportList)`  `[`signal`](../object/TAction.html#signal)`  `[`verifyTab`](../object/TAction.html#verifyTab)`  `

Inherited from `Action` :  
` `[`actionFailed`](../object/Action.html#actionFailed)`  `[`advanceOnFailure`](../object/Action.html#advanceOnFailure)`  `[`againRepeatsParse`](../object/Action.html#againRepeatsParse)`  `[`allowAll`](../object/Action.html#allowAll)`  `[`extraMessageParams`](../object/Action.html#extraMessageParams)`  `[`failCheckMsg`](../object/Action.html#failCheckMsg)`  `[`failedActionCountsAsTurn`](../object/Action.html#failedActionCountsAsTurn)`  `[`implicitTimeTaken`](../object/Action.html#implicitTimeTaken)`  `[`includeInUndo`](../object/Action.html#includeInUndo)`  `[`isConversational`](../object/Action.html#isConversational)`  `[`isImplicit`](../object/Action.html#isImplicit)`  `[`isRepeatable`](../object/Action.html#isRepeatable)`  `[`oldRoom`](../object/Action.html#oldRoom)`  `[`parentAction`](../object/Action.html#parentAction)`  `[`parentAllowAll`](../object/Action.html#parentAllowAll)`  `[`preCond`](../object/Action.html#preCond)`  `[`redirectParent`](../object/Action.html#redirectParent)`  `[`reportImplicitActions`](../object/Action.html#reportImplicitActions)`  `[`scopeList`](../object/Action.html#scopeList)`  `[`spellingPriority`](../object/Action.html#spellingPriority)`  `[`synthParamID`](../object/Action.html#synthParamID)`  `[`timeTaken`](../object/Action.html#timeTaken)`  `[`turnsTaken`](../object/Action.html#turnsTaken)`  `[`unhides`](../object/Action.html#unhides)`  `[`verifyObj`](../object/Action.html#verifyObj)`  `[`wasIlluminated`](../object/Action.html#wasIlluminated)`  `

` `

` `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`execAction`](#execAction)`  `[`resolvePronouns`](#resolvePronouns)`  `[`verify`](#verify)`  `

Inherited from `TAction` :  
` `[`addVerifyResult`](../object/TAction.html#addVerifyResult)`  `[`check`](../object/TAction.html#check)`  `[`checkAction`](../object/TAction.html#checkAction)`  `[`checkPreCond`](../object/TAction.html#checkPreCond)`  `[`doAction`](../object/TAction.html#doAction)`  `[`doActionOnce`](../object/TAction.html#doActionOnce)`  `[`execCycle`](../object/TAction.html#execCycle)`  `[`execResolvedAction`](../object/TAction.html#execResolvedAction)`  `[`getAll`](../object/TAction.html#getAll)`  `[`getMessageParam`](../object/TAction.html#getMessageParam)`  `[`getVerbPhrase`](../object/TAction.html#getVerbPhrase)`  `[`getVerbPhrase1`](../object/TAction.html#getVerbPhrase1)`  `[`makeScopeUniversal`](../object/TAction.html#makeScopeUniversal)`  `[`reportAction`](../object/TAction.html#reportAction)`  `[`reset`](../object/TAction.html#reset)`  `[`resolvedObjectsInScope`](../object/TAction.html#resolvedObjectsInScope)`  `[`setResolvedObjects`](../object/TAction.html#setResolvedObjects)`  `

Inherited from `Action` :  
` `[`acknowledgeNotifyStatus`](../object/Action.html#acknowledgeNotifyStatus)`  `[`addExtraScopeItems`](../object/Action.html#addExtraScopeItems)`  `[`addImplicitTime`](../object/Action.html#addImplicitTime)`  `[`advanceTime`](../object/Action.html#advanceTime)`  `[`afterAction`](../object/Action.html#afterAction)`  `[`announceObject`](../object/Action.html#announceObject)`  `[`beforeAction`](../object/Action.html#beforeAction)`  `[`buildImplicitActionAnnouncement`](../object/Action.html#buildImplicitActionAnnouncement)`  `[`buildScopeList`](../object/Action.html#buildScopeList)`  `[`checkActionPreconditions`](../object/Action.html#checkActionPreconditions)`  `[`commandNotPresent`](../object/Action.html#commandNotPresent)`  `[`exec`](../object/Action.html#exec)`  `[`execGroup`](../object/Action.html#execGroup)`  `[`getAllUnhidden`](../object/Action.html#getAllUnhidden)`  `[`implicitAnnouncement`](../object/Action.html#implicitAnnouncement)`  `[`scoreObjects`](../object/Action.html#scoreObjects)`  `[`setMessageParam`](../object/Action.html#setMessageParam)`  `[`setMessageParams`](../object/Action.html#setMessageParams)`  `[`spPrefix`](../object/Action.html#spPrefix)`  `[`spSuffix`](../object/Action.html#spSuffix)`  `[`synthMessageParam`](../object/Action.html#synthMessageParam)`  `[`turnSequence`](../object/Action.html#turnSequence)`  `[`verifyObjRole`](../object/Action.html#verifyObjRole)`  `[`wrapObjectsNP`](../object/Action.html#wrapObjectsNP)`  `

Inherited from `ReplaceRedirector` :  
` `[`redirect`](../object/ReplaceRedirector.html#redirect)`  `

Inherited from `Redirector` :  
` `[`doInstead`](../object/Redirector.html#doInstead)`  `[`doNested`](../object/Redirector.html#doNested)`  `[`doOtherAction`](../object/Redirector.html#doOtherAction)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="curIobj"></span>

`curIobj`

[action.t](../file/action.t.html)\[[2644](../source/action.t.html#2644)\]

<div class="desc">

Although we don't have an indirect object in the conventional sense, we
use the curIobj property to store the ResolvedTopic involved in the
command.

</div>

<span id="curTopic"></span>

`curTopic`

[action.t](../file/action.t.html)\[[2650](../source/action.t.html#2650)\]

<div class="desc">

We also store the current ResolvedTopic in the curTopic property so it
can be found by the gTopic macro.

</div>

<span id="topicIsGrammaticalIobj"></span>

`topicIsGrammaticalIobj`

[action.t](../file/action.t.html)\[[2698](../source/action.t.html#2698)\]

<div class="desc">

Is the topic the grammatical Indirect object of this command? This is
used by Redirector.doOtherAction() to encapsulate the appropriate string
in a ResolvedTopic. The topic is the grammatical iobj if its the second
object involved in the commamd, e.g. ASK BOB ABOUT FIRE, where FIRE is
the topic.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="execAction"></span>

`execAction (cmd)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[2606](../source/action.t.html#2606)\]

<div class="desc">

*no description available*

</div>

<span id="resolvePronouns"></span>

`resolvePronouns ( )`

[action.t](../file/action.t.html)\[[2657](../source/action.t.html#2657)\]

<div class="desc">

This is a bit of a kludge to deal with the fact that the Parser doesn't
seem able to resolve pronouns within ResolvedTopics. We do it here
instead.

</div>

<span id="verify"></span>

`verify (obj, whichObj)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[2686](../source/action.t.html#2686)\]

<div class="desc">

Whichever object slot a verify routine is notionally trying to verify
for given the grammatical form of the command, in practice only the
direct object (the thing involved in the command) can be verified. E.g.
for WRITE FOO ON BALL we treat BALL as the direct object of the command
and FOO as the literal, even if the Parser thinks it needs to verify the
Indirect Object to disambiguate BALL.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
