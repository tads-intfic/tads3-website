---
layout: docs
---
<span class="title">SystemAction</span><span class="type">class</span>

[action.t](../file/action.t.html)\[[1009](../source/action.t.html#1009)\],
[objtime.t](../file/objtime.t.html)\[[221](../source/objtime.t.html#221)\]

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



The SystemAction class is for actions not affecting the game world but
rather acting on the game session, such as SAVE, RESTORE and QUIT.

`class `**`SystemAction`**` :   `[`IAction`](../object/IAction.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`SystemAction`**  
[`IAction`](../object/IAction.html)  
[`Action`](../object/Action.html)  
[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
[`Redirector`](../object/Redirector.html)  
`                                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`SystemAction`**  
[`FileOpAction`](../object/FileOpAction.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`About`](../object/About.html) [`Again`](../object/Again.html) [`Brief`](../object/Brief.html) [`CmdMenu`](../object/CmdMenu.html) [`Credits`](../object/Credits.html) [`Debug`](../object/Debug.html) [`DebugI`](../object/DebugI.html) [`Exits`](../object/Exits.html) [`ExitsColour`](../object/ExitsColour.html) [`ExitsMode`](../object/ExitsMode.html) [`ExtraHints`](../object/ExtraHints.html) [`FootnoteAction`](../object/FootnoteAction.html) [`Footnotes`](../object/Footnotes.html) [`FootnotesStatus`](../object/FootnotesStatus.html) [`FullScore`](../object/FullScore.html) [`Help`](../object/Help.html) [`Hints`](../object/Hints.html) [`HintsOff`](../object/HintsOff.html) [`Instructions`](../object/Instructions.html) [`Intro`](../object/Intro.html) [`InventoryTall`](../object/InventoryTall.html) [`InventoryWide`](../object/InventoryWide.html) [`ListRelations`](../object/ListRelations.html) [`ListTests`](../object/ListTests.html) [`Notify`](../object/Notify.html) [`NotifyOff`](../object/NotifyOff.html) [`NotifyOn`](../object/NotifyOn.html) [`Quit`](../object/Quit.html) [`RecordOff`](../object/RecordOff.html) [`RelationDetails`](../object/RelationDetails.html) [`Restart`](../object/Restart.html) [`Restore`](../object/Restore.html) [`Sample`](../object/Sample.html) [`Score`](../object/Score.html) [`ScriptOff`](../object/ScriptOff.html) [`Topics`](../object/Topics.html) [`Undo`](../object/Undo.html) [`Verbose`](../object/Verbose.html) [`Version`](../object/Version.html) [`WhereHelp`](../object/WhereHelp.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`includeInUndo`](#includeInUndo) [`isRepeatable`](#isRepeatable) [`timeTaken`](#timeTaken) [`turnsTaken`](#turnsTaken)

Inherited from `IAction` :  
[`againRepeatsParse`](../object/IAction.html#againRepeatsParse)

Inherited from `Action` :  
[`actionFailed`](../object/Action.html#actionFailed) [`advanceOnFailure`](../object/Action.html#advanceOnFailure) [`allowAll`](../object/Action.html#allowAll) [`extraMessageParams`](../object/Action.html#extraMessageParams) [`failCheckMsg`](../object/Action.html#failCheckMsg) [`failedActionCountsAsTurn`](../object/Action.html#failedActionCountsAsTurn) [`implicitTimeTaken`](../object/Action.html#implicitTimeTaken) [`isConversational`](../object/Action.html#isConversational) [`isImplicit`](../object/Action.html#isImplicit) [`oldRoom`](../object/Action.html#oldRoom) [`parentAction`](../object/Action.html#parentAction) [`parentAllowAll`](../object/Action.html#parentAllowAll) [`preCond`](../object/Action.html#preCond) [`redirectParent`](../object/Action.html#redirectParent) [`reportImplicitActions`](../object/Action.html#reportImplicitActions) [`scopeList`](../object/Action.html#scopeList) [`spellingPriority`](../object/Action.html#spellingPriority) [`synthParamID`](../object/Action.html#synthParamID) [`unhides`](../object/Action.html#unhides) [`verifyObj`](../object/Action.html#verifyObj) [`wasIlluminated`](../object/Action.html#wasIlluminated)





<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`afterAction`](#afterAction) [`exec`](#exec) [`execCycle`](#execCycle) [`getInputFile`](#getInputFile) [`turnSequence`](#turnSequence)

Inherited from `IAction` :  
[`execResolvedAction`](../object/IAction.html#execResolvedAction) [`resolvedObjectsInScope`](../object/IAction.html#resolvedObjectsInScope) [`scoreObjects`](../object/IAction.html#scoreObjects) [`setResolvedObjects`](../object/IAction.html#setResolvedObjects)

Inherited from `Action` :  
[`acknowledgeNotifyStatus`](../object/Action.html#acknowledgeNotifyStatus) [`addExtraScopeItems`](../object/Action.html#addExtraScopeItems) [`addImplicitTime`](../object/Action.html#addImplicitTime) [`advanceTime`](../object/Action.html#advanceTime) [`announceObject`](../object/Action.html#announceObject) [`beforeAction`](../object/Action.html#beforeAction) [`buildImplicitActionAnnouncement`](../object/Action.html#buildImplicitActionAnnouncement) [`buildScopeList`](../object/Action.html#buildScopeList) [`checkAction`](../object/Action.html#checkAction) [`checkActionPreconditions`](../object/Action.html#checkActionPreconditions) [`commandNotPresent`](../object/Action.html#commandNotPresent) [`execAction`](../object/Action.html#execAction) [`execGroup`](../object/Action.html#execGroup) [`getAll`](../object/Action.html#getAll) [`getAllUnhidden`](../object/Action.html#getAllUnhidden) [`getMessageParam`](../object/Action.html#getMessageParam) [`implicitAnnouncement`](../object/Action.html#implicitAnnouncement) [`reportAction`](../object/Action.html#reportAction) [`setMessageParam`](../object/Action.html#setMessageParam) [`setMessageParams`](../object/Action.html#setMessageParams) [`spPrefix`](../object/Action.html#spPrefix) [`spSuffix`](../object/Action.html#spSuffix) [`synthMessageParam`](../object/Action.html#synthMessageParam) [`verify`](../object/Action.html#verify) [`verifyObjRole`](../object/Action.html#verifyObjRole) [`wrapObjectsNP`](../object/Action.html#wrapObjectsNP)

Inherited from `ReplaceRedirector` :  
[`redirect`](../object/ReplaceRedirector.html#redirect)

Inherited from `Redirector` :  
[`doInstead`](../object/Redirector.html#doInstead) [`doNested`](../object/Redirector.html#doNested) [`doOtherAction`](../object/Redirector.html#doOtherAction)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="includeInUndo"></span>

`includeInUndo`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[1011](../source/action.t.html#1011)\]



A SystemAction is not normally undo-able



<span id="isRepeatable"></span>

`isRepeatable`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[1014](../source/action.t.html#1014)\]



A SystemAction is not normally repeatable



<span id="timeTaken"></span>

`timeTaken`<span class="rem">OVERRIDDEN</span>

[objtime.t](../file/objtime.t.html)\[[226](../source/objtime.t.html#226)\]



For OBJTIME extension; a SystemAction shouldn't normally take any game
clock time.



<span id="turnsTaken"></span>

`turnsTaken`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[1033](../source/action.t.html#1033)\]



A SystemAction doesn't take any turns (this is a bit belt-and-braces
since turnSequence does nothing in any case).



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="afterAction"></span>

`afterAction ( )`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[1020](../source/action.t.html#1020)\]



Since a SystemAction isn't an action in the game world, we don't want it
to trigger any after action notifications.



<span id="exec"></span>

`exec (cmd)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[1039](../source/action.t.html#1039)\]



Since this isn't an action within the game world we bypass all the
normal pre-action handling and just execute a reduced cycle.



<span id="execCycle"></span>

`execCycle (cmd)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[1046](../source/action.t.html#1046)\]



There's no before notifications for a SystemAction so we simply execute
the action and, if we should define it as repeatable, make a note of it
in case the player issues an AGAIN command on the next turn.



<span id="getInputFile"></span>

`getInputFile (prompt, dialogType, fileType, flags)`

[action.t](../file/action.t.html)\[[1080](../source/action.t.html#1080)\]



Ask for an input file. We call the input manager, which displays the
appropriate local file selector dialog. This is used for SystemActions
that need a file to act on, such as SAVE, RESTORE and QUIT.



<span id="turnSequence"></span>

`turnSequence ( )`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[1027](../source/action.t.html#1027)\]



Since a SystemAction isn't an action in the game world, we don't want it
to count as a turn, so we don't run any Daemons or Fuses and we don't
advance the turn count.





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


