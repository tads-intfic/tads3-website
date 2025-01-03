---
layout: docs
---
<span class="title">Seek</span><span class="type">object</span>

[newbie.t](../file/newbie.t.html)\[[937](../source/newbie.t.html#937)\]

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



SeekAction is designed to handle of commands FIND X, LOOK FOR Y or
SEARCH FOR Z, when they don't seem to be intended as attempts to look
something up in a Consultable. We make it a TopicAction so that it will
match whatever the player types, and so not give away any premature
spoilery information by the nature of the parser's response.

The appropriate response then depends on the player character's state of
knowledge. In the most general case the player is simply given
instructions on how to go about looking for things. This hardly seems
appropriate, however if the object requested is in plain sight, in which
case we point this out to the player. As a courtesy to the player, we
also remind him or her of where an object was last seen, if it has been
seen.

One or two complications need to be dealt with. If the player finds
something like FIND SMELL or FIND NOISE then we should describe it as
having been smelt or heard elsewhere, not seen. We also want to make
sure that the command never matches an Unthing in preference to a Thing,
and that if an Unthing is matched it is not described as being present.

**`Seek`**` :   `[`TopicAction`](../object/TopicAction.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Seek`**  
[`TopicAction`](../object/TopicAction.html)  
[`IAction`](../object/IAction.html)  
[`Action`](../object/Action.html)  
[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
[`Redirector`](../object/Redirector.html)  
`                                                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
Inherited from `TopicAction` :  
[`curTopic`](../object/TopicAction.html#curTopic)

Inherited from `IAction` :  
[`againRepeatsParse`](../object/IAction.html#againRepeatsParse)

Inherited from `Action` :  
[`actionFailed`](../object/Action.html#actionFailed) [`advanceOnFailure`](../object/Action.html#advanceOnFailure) [`allowAll`](../object/Action.html#allowAll) [`extraMessageParams`](../object/Action.html#extraMessageParams) [`failCheckMsg`](../object/Action.html#failCheckMsg) [`failedActionCountsAsTurn`](../object/Action.html#failedActionCountsAsTurn) [`implicitTimeTaken`](../object/Action.html#implicitTimeTaken) [`includeInUndo`](../object/Action.html#includeInUndo) [`isConversational`](../object/Action.html#isConversational) [`isImplicit`](../object/Action.html#isImplicit) [`isRepeatable`](../object/Action.html#isRepeatable) [`oldRoom`](../object/Action.html#oldRoom) [`parentAction`](../object/Action.html#parentAction) [`parentAllowAll`](../object/Action.html#parentAllowAll) [`preCond`](../object/Action.html#preCond) [`redirectParent`](../object/Action.html#redirectParent) [`reportImplicitActions`](../object/Action.html#reportImplicitActions) [`scopeList`](../object/Action.html#scopeList) [`spellingPriority`](../object/Action.html#spellingPriority) [`synthParamID`](../object/Action.html#synthParamID) [`timeTaken`](../object/Action.html#timeTaken) [`turnsTaken`](../object/Action.html#turnsTaken) [`unhides`](../object/Action.html#unhides) [`verifyObj`](../object/Action.html#verifyObj) [`wasIlluminated`](../object/Action.html#wasIlluminated)
<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`execAction`](#execAction) [`getBestMatch`](#getBestMatch) [`locDesc`](#locDesc) [`senseDesc`](#senseDesc)

Inherited from `TopicAction` :  
[`exec`](../object/TopicAction.html#exec)

Inherited from `IAction` :  
[`execCycle`](../object/IAction.html#execCycle) [`execResolvedAction`](../object/IAction.html#execResolvedAction) [`resolvedObjectsInScope`](../object/IAction.html#resolvedObjectsInScope) [`scoreObjects`](../object/IAction.html#scoreObjects) [`setResolvedObjects`](../object/IAction.html#setResolvedObjects)

Inherited from `Action` :  
[`acknowledgeNotifyStatus`](../object/Action.html#acknowledgeNotifyStatus) [`addExtraScopeItems`](../object/Action.html#addExtraScopeItems) [`addImplicitTime`](../object/Action.html#addImplicitTime) [`advanceTime`](../object/Action.html#advanceTime) [`afterAction`](../object/Action.html#afterAction) [`announceObject`](../object/Action.html#announceObject) [`beforeAction`](../object/Action.html#beforeAction) [`buildImplicitActionAnnouncement`](../object/Action.html#buildImplicitActionAnnouncement) [`buildScopeList`](../object/Action.html#buildScopeList) [`checkAction`](../object/Action.html#checkAction) [`checkActionPreconditions`](../object/Action.html#checkActionPreconditions) [`commandNotPresent`](../object/Action.html#commandNotPresent) [`execGroup`](../object/Action.html#execGroup) [`getAll`](../object/Action.html#getAll) [`getAllUnhidden`](../object/Action.html#getAllUnhidden) [`getMessageParam`](../object/Action.html#getMessageParam) [`implicitAnnouncement`](../object/Action.html#implicitAnnouncement) [`reportAction`](../object/Action.html#reportAction) [`setMessageParam`](../object/Action.html#setMessageParam) [`setMessageParams`](../object/Action.html#setMessageParams) [`spPrefix`](../object/Action.html#spPrefix) [`spSuffix`](../object/Action.html#spSuffix) [`synthMessageParam`](../object/Action.html#synthMessageParam) [`turnSequence`](../object/Action.html#turnSequence) [`verify`](../object/Action.html#verify) [`verifyObjRole`](../object/Action.html#verifyObjRole) [`wrapObjectsNP`](../object/Action.html#wrapObjectsNP)

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

[newbie.t](../file/newbie.t.html)\[[938](../source/newbie.t.html#938)\]



*no description available*



<span id="getBestMatch"></span>

`getBestMatch (cmd)`

[newbie.t](../file/newbie.t.html)\[[999](../source/newbie.t.html#999)\]



gTopic.getBestMatch() may not give the best results for our purposes.
The following code is designed to prefer Things to Unthings, and then to
prioritize what the player char can see over what s/he has seen, and
both over what s/he only knows about. If none of these find a match, we
then revert to gTopic.getBestMatch.



<span id="locDesc"></span>

`locDesc (obj, loc)`

[newbie.t](../file/newbie.t.html)\[[1037](../source/newbie.t.html#1037)\]



Finally, if all else fails, just return the ResolvedTopic's idea of a
best match.



<span id="senseDesc"></span>

`senseDesc (obj)`

[newbie.t](../file/newbie.t.html)\[[1045](../source/newbie.t.html#1045)\]



*no description available*
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


