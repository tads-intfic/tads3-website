---
layout: docs
---
<span class="title">actions.t</span><span class="type">file</span>

[source file](../source/actions.t.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Objects**  
[Summary](#_ObjectSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)

<div class="fdesc">

TADS 3 Library: Actions.

This module defines the set of built-in library actions.

</div>

<span id="_ClassSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Classes</span>  

</div>

[`AboutAction`](../object/AboutAction.html)[`AftAction`](../object/AftAction.html)[`AgainAction`](../object/AgainAction.html)[`AskAboutAction`](../object/AskAboutAction.html)[`AskForAction`](../object/AskForAction.html)[`AskVagueAction`](../object/AskVagueAction.html)[`AttachToAction`](../object/AttachToAction.html)[`AttackAction`](../object/AttackAction.html)[`AttackWithAction`](../object/AttackWithAction.html)[`BoardAction`](../object/BoardAction.html)[`BreakAction`](../object/BreakAction.html)[`BurnAction`](../object/BurnAction.html)[`BurnWithAction`](../object/BurnWithAction.html)[`CleanAction`](../object/CleanAction.html)[`CleanWithAction`](../object/CleanWithAction.html)[`ClimbAction`](../object/ClimbAction.html)[`ClimbDownAction`](../object/ClimbDownAction.html)[`ClimbUpAction`](../object/ClimbUpAction.html)[`CloseAction`](../object/CloseAction.html)[`ConsultAboutAction`](../object/ConsultAboutAction.html)[`ConsultAction`](../object/ConsultAction.html)[`CreditsAction`](../object/CreditsAction.html)[`CutAction`](../object/CutAction.html)[`CutWithAction`](../object/CutWithAction.html)[`DebugAction`](../object/DebugAction.html)[`DetachAction`](../object/DetachAction.html)[`DetachFromAction`](../object/DetachFromAction.html)[`DigAction`](../object/DigAction.html)[`DigWithAction`](../object/DigWithAction.html)[`DoffAction`](../object/DoffAction.html)[`DownAction`](../object/DownAction.html)[`DrinkAction`](../object/DrinkAction.html)[`DropAction`](../object/DropAction.html)[`EastAction`](../object/EastAction.html)[`EatAction`](../object/EatAction.html)[`EnterAction`](../object/EnterAction.html)[`EnterOnAction`](../object/EnterOnAction.html)[`ExamineAction`](../object/ExamineAction.html)[`ExitsAction`](../object/ExitsAction.html)[`ExitsModeAction`](../object/ExitsModeAction.html)[`ExtinguishAction`](../object/ExtinguishAction.html)[`FastenAction`](../object/FastenAction.html)[`FastenToAction`](../object/FastenToAction.html)[`FeelAction`](../object/FeelAction.html)[`FileOpAction`](../object/FileOpAction.html)[`FlipAction`](../object/FlipAction.html)[`FollowAction`](../object/FollowAction.html)[`FootnoteAction`](../object/FootnoteAction.html)[`FootnotesAction`](../object/FootnotesAction.html)[`FootnotesFullAction`](../object/FootnotesFullAction.html)[`FootnotesMediumAction`](../object/FootnotesMediumAction.html)[`FootnotesOffAction`](../object/FootnotesOffAction.html)[`FootnotesStatusAction`](../object/FootnotesStatusAction.html)[`ForeAction`](../object/ForeAction.html)[`FullScoreAction`](../object/FullScoreAction.html)[`GetOffOfAction`](../object/GetOffOfAction.html)[`GetOutAction`](../object/GetOutAction.html)[`GetOutOfAction`](../object/GetOutOfAction.html)[`GiveToAction`](../object/GiveToAction.html)[`GoBackAction`](../object/GoBackAction.html)[`GoodbyeAction`](../object/GoodbyeAction.html)[`GoThroughAction`](../object/GoThroughAction.html)[`HelloAction`](../object/HelloAction.html)[`HintAction`](../object/HintAction.html)[`HintsOffAction`](../object/HintsOffAction.html)[`InAction`](../object/InAction.html)[`InventoryAction`](../object/InventoryAction.html)[`InventoryTallAction`](../object/InventoryTallAction.html)[`InventoryWideAction`](../object/InventoryWideAction.html)[`JumpAction`](../object/JumpAction.html)[`JumpOffAction`](../object/JumpOffAction.html)[`JumpOffIAction`](../object/JumpOffIAction.html)[`JumpOverAction`](../object/JumpOverAction.html)[`KissAction`](../object/KissAction.html)[`LieAction`](../object/LieAction.html)[`LieOnAction`](../object/LieOnAction.html)[`LightAction`](../object/LightAction.html)[`ListenImplicitAction`](../object/ListenImplicitAction.html)[`ListenToAction`](../object/ListenToAction.html)[`LockAction`](../object/LockAction.html)[`LockWithAction`](../object/LockWithAction.html)[`LookAction`](../object/LookAction.html)[`LookBehindAction`](../object/LookBehindAction.html)[`LookInAction`](../object/LookInAction.html)[`LookThroughAction`](../object/LookThroughAction.html)[`LookUnderAction`](../object/LookUnderAction.html)[`MoveAction`](../object/MoveAction.html)[`MoveToAction`](../object/MoveToAction.html)[`MoveWithAction`](../object/MoveWithAction.html)[`NoAction`](../object/NoAction.html)[`NorthAction`](../object/NorthAction.html)[`NortheastAction`](../object/NortheastAction.html)[`NorthwestAction`](../object/NorthwestAction.html)[`NoteDarknessAction`](../object/NoteDarknessAction.html)[`NotifyAction`](../object/NotifyAction.html)[`NotifyOffAction`](../object/NotifyOffAction.html)[`NotifyOnAction`](../object/NotifyOnAction.html)[`OopsAction`](../object/OopsAction.html)[`OopsIAction`](../object/OopsIAction.html)[`OpenAction`](../object/OpenAction.html)[`OutAction`](../object/OutAction.html)[`PauseAction`](../object/PauseAction.html)[`PlugInAction`](../object/PlugInAction.html)[`PlugIntoAction`](../object/PlugIntoAction.html)[`PortAction`](../object/PortAction.html)[`PostRestoreObject`](../object/PostRestoreObject.html)[`PostUndoObject`](../object/PostUndoObject.html)[`PourAction`](../object/PourAction.html)[`PourIntoAction`](../object/PourIntoAction.html)[`PourOntoAction`](../object/PourOntoAction.html)[`predicate(EmptySpecialTopic)`](../object/predicate(EmptySpecialTopic).html)[`predicate(SpecialTopic)`](../object/predicate(SpecialTopic).html)[`PreRestartObject`](../object/PreRestartObject.html)[`PreSaveObject`](../object/PreSaveObject.html)[`PullAction`](../object/PullAction.html)[`PushAction`](../object/PushAction.html)[`PushAftAction`](../object/PushAftAction.html)[`PushDownAction`](../object/PushDownAction.html)[`PushEastAction`](../object/PushEastAction.html)[`PushForeAction`](../object/PushForeAction.html)[`PushInAction`](../object/PushInAction.html)[`PushNorthAction`](../object/PushNorthAction.html)[`PushNortheastAction`](../object/PushNortheastAction.html)[`PushNorthwestAction`](../object/PushNorthwestAction.html)[`PushOutAction`](../object/PushOutAction.html)[`PushPortAction`](../object/PushPortAction.html)[`PushSouthAction`](../object/PushSouthAction.html)[`PushSoutheastAction`](../object/PushSoutheastAction.html)[`PushSouthwestAction`](../object/PushSouthwestAction.html)[`PushStarboardAction`](../object/PushStarboardAction.html)[`PushTravelAction`](../object/PushTravelAction.html)[`PushTravelClimbDownAction`](../object/PushTravelClimbDownAction.html)[`PushTravelClimbUpAction`](../object/PushTravelClimbUpAction.html)[`PushTravelDirAction`](../object/PushTravelDirAction.html)[`PushTravelEnterAction`](../object/PushTravelEnterAction.html)[`PushTravelGetOutOfAction`](../object/PushTravelGetOutOfAction.html)[`PushTravelThroughAction`](../object/PushTravelThroughAction.html)[`PushTravelViaIobjAction`](../object/PushTravelViaIobjAction.html)[`PushUpAction`](../object/PushUpAction.html)[`PushWestAction`](../object/PushWestAction.html)[`PutBehindAction`](../object/PutBehindAction.html)[`PutInAction`](../object/PutInAction.html)[`PutOnAction`](../object/PutOnAction.html)[`PutUnderAction`](../object/PutUnderAction.html)[`QuitAction`](../object/QuitAction.html)[`ReadAction`](../object/ReadAction.html)[`RecordAction`](../object/RecordAction.html)[`RecordEventsAction`](../object/RecordEventsAction.html)[`RecordEventsStringAction`](../object/RecordEventsStringAction.html)[`RecordOffAction`](../object/RecordOffAction.html)[`RecordStringAction`](../object/RecordStringAction.html)[`RemoveAction`](../object/RemoveAction.html)[`ReplayAction`](../object/ReplayAction.html)[`ReplayStringAction`](../object/ReplayStringAction.html)[`RestartAction`](../object/RestartAction.html)[`RestoreAction`](../object/RestoreAction.html)[`RestoreDefaultsAction`](../object/RestoreDefaultsAction.html)[`RestoreStringAction`](../object/RestoreStringAction.html)[`SaveAction`](../object/SaveAction.html)[`SaveDefaultsAction`](../object/SaveDefaultsAction.html)[`SaveStringAction`](../object/SaveStringAction.html)[`ScoreAction`](../object/ScoreAction.html)[`ScrewAction`](../object/ScrewAction.html)[`ScrewWithAction`](../object/ScrewWithAction.html)[`ScriptAction`](../object/ScriptAction.html)[`ScriptOffAction`](../object/ScriptOffAction.html)[`ScriptStringAction`](../object/ScriptStringAction.html)[`SearchAction`](../object/SearchAction.html)[`SenseImplicitAction`](../object/SenseImplicitAction.html)[`SetAction`](../object/SetAction.html)[`SetToAction`](../object/SetToAction.html)[`ShowToAction`](../object/ShowToAction.html)[`SitAction`](../object/SitAction.html)[`SitOnAction`](../object/SitOnAction.html)[`SleepAction`](../object/SleepAction.html)[`SmellAction`](../object/SmellAction.html)[`SmellImplicitAction`](../object/SmellImplicitAction.html)[`SouthAction`](../object/SouthAction.html)[`SoutheastAction`](../object/SoutheastAction.html)[`SouthwestAction`](../object/SouthwestAction.html)[`SpecialTopicAction`](../object/SpecialTopicAction.html)[`StandAction`](../object/StandAction.html)[`StandOnAction`](../object/StandOnAction.html)[`StarboardAction`](../object/StarboardAction.html)[`SwitchAction`](../object/SwitchAction.html)[`TakeAction`](../object/TakeAction.html)[`TakeFromAction`](../object/TakeFromAction.html)[`TalkToAction`](../object/TalkToAction.html)[`TasteAction`](../object/TasteAction.html)[`TellAboutAction`](../object/TellAboutAction.html)[`TellVagueAction`](../object/TellVagueAction.html)[`TerseAction`](../object/TerseAction.html)[`ThrowAction`](../object/ThrowAction.html)[`ThrowAtAction`](../object/ThrowAtAction.html)[`ThrowDirAction`](../object/ThrowDirAction.html)[`ThrowToAction`](../object/ThrowToAction.html)[`TopicsAction`](../object/TopicsAction.html)[`TravelAction`](../object/TravelAction.html)[`TravelDirAction`](../object/TravelDirAction.html)[`TravelViaAction`](../object/TravelViaAction.html)[`TurnAction`](../object/TurnAction.html)[`TurnOffAction`](../object/TurnOffAction.html)[`TurnOnAction`](../object/TurnOnAction.html)[`TurnToAction`](../object/TurnToAction.html)[`TurnWithAction`](../object/TurnWithAction.html)[`TypeLiteralOnAction`](../object/TypeLiteralOnAction.html)[`TypeOnAction`](../object/TypeOnAction.html)[`UndoAction`](../object/UndoAction.html)[`UnfastenAction`](../object/UnfastenAction.html)[`UnfastenFromAction`](../object/UnfastenFromAction.html)[`UnlockAction`](../object/UnlockAction.html)[`UnlockWithAction`](../object/UnlockWithAction.html)[`UnplugAction`](../object/UnplugAction.html)[`UnplugFromAction`](../object/UnplugFromAction.html)[`UnscrewAction`](../object/UnscrewAction.html)[`UnscrewWithAction`](../object/UnscrewWithAction.html)[`UpAction`](../object/UpAction.html)[`VagueTravelAction`](../object/VagueTravelAction.html)[`VerboseAction`](../object/VerboseAction.html)[`VersionAction`](../object/VersionAction.html)[`WaitAction`](../object/WaitAction.html)[`WearAction`](../object/WearAction.html)[`WestAction`](../object/WestAction.html)[`YellAction`](../object/YellAction.html)[`YesAction`](../object/YesAction.html)
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Objects</span>  

</div>

[`giveMeToAskFor`](../object/giveMeToAskFor.html)[`scriptStatus`](../object/scriptStatus.html)
<span id="FunctionSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Functions</span>  

</div>

*(none)* <span id="_Functions_"></span>

<div class="mjhd">

<span class="hdln">Global Functions</span>  

</div>

*(none)*

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
