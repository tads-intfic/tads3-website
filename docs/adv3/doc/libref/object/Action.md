---
layout: docs
---
<span class="title">Action</span><span class="type">class</span>

[action.t](../file/action.t.html)\[[157](../source/action.t.html#157)\],
[en_us.t](../file/en_us.t.html)\[[8119](../source/en_us.t.html#8119)\]

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

Basic Action class. An Action is the language-independent definition of
the abstract action of a command.

*Modified in
[en_us.t](../file/en_us.t.html)\[[8119](../source/en_us.t.html#8119)\]:*  
Language-specific Action modifications.

`class `**`Action`**` :   `[`BasicProd`](../object/BasicProd.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Action`**  
`         `[`BasicProd`](../object/BasicProd.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`Action`**  
`         `[`CommandActorAction`](../object/CommandActorAction.html)  
`         `[`EventAction`](../object/EventAction.html)  
`         `[`IAction`](../object/IAction.html)  
`                 `[`AgainAction`](../object/AgainAction.html)  
`                         `[`predicate(Again)`](../object/predicate(Again).html)  
`                 `[`ConvIAction`](../object/ConvIAction.html)  
`                         `[`GoodbyeAction`](../object/GoodbyeAction.html)  
`                                 `[`predicate(Goodbye)`](../object/predicate(Goodbye).html)  
`                         `[`HelloAction`](../object/HelloAction.html)  
`                                 `[`predicate(Hello)`](../object/predicate(Hello).html)  
`                         `[`NoAction`](../object/NoAction.html)  
`                                 `[`predicate(No)`](../object/predicate(No).html)  
`                         `[`YesAction`](../object/YesAction.html)  
`                                 `[`predicate(Yes)`](../object/predicate(Yes).html)  
`                 `[`DebugAction`](../object/DebugAction.html)  
`                 `[`ExitsAction`](../object/ExitsAction.html)  
`                         `[`predicate(Exits)`](../object/predicate(Exits).html)  
`                 `[`GetOutAction`](../object/GetOutAction.html)  
`                         `[`predicate(GetOut)`](../object/predicate(GetOut).html)  
`                 `[`GoBackAction`](../object/GoBackAction.html)  
`                         `[`predicate(GoBack)`](../object/predicate(GoBack).html)  
`                 `[`InventoryAction`](../object/InventoryAction.html)  
`                         `[`predicate(Inventory)`](../object/predicate(Inventory).html)  
`                 `[`InventoryTallAction`](../object/InventoryTallAction.html)  
`                         `[`predicate(InventoryTall)`](../object/predicate(InventoryTall).html)  
`                 `[`InventoryWideAction`](../object/InventoryWideAction.html)  
`                         `[`predicate(InventoryWide)`](../object/predicate(InventoryWide).html)  
`                 `[`JumpAction`](../object/JumpAction.html)  
`                         `[`predicate(Jump)`](../object/predicate(Jump).html)  
`                 `[`JumpOffIAction`](../object/JumpOffIAction.html)  
`                         `[`predicate(JumpOffI)`](../object/predicate(JumpOffI).html)  
`                 `[`LieAction`](../object/LieAction.html)  
`                         `[`predicate(Lie)`](../object/predicate(Lie).html)  
`                 `[`LiteralAction`](../object/LiteralAction.html)  
`                         `[`OopsAction`](../object/OopsAction.html)  
`                                 `[`predicate(Oops)`](../object/predicate(Oops).html)  
`                         `[`SpecialTopicAction`](../object/SpecialTopicAction.html)  
`                                 `[`predicate(SpecialTopic)`](../object/predicate(SpecialTopic).html)  
`                 `[`LookAction`](../object/LookAction.html)  
`                         `[`predicate(Look)`](../object/predicate(Look).html)  
`                 `[`NoteDarknessAction`](../object/NoteDarknessAction.html)  
`                 `[`OopsIAction`](../object/OopsIAction.html)  
`                         `[`predicate(OopsOnly)`](../object/predicate(OopsOnly).html)  
`                 `[`predicate(EmptySpecialTopic)`](../object/predicate(EmptySpecialTopic).html)  
`                 `[`SenseImplicitAction`](../object/SenseImplicitAction.html)  
`                         `[`ListenImplicitAction`](../object/ListenImplicitAction.html)  
`                                 `[`predicate(ListenImplicit)`](../object/predicate(ListenImplicit).html)  
`                         `[`SmellImplicitAction`](../object/SmellImplicitAction.html)  
`                                 `[`predicate(SmellImplicit)`](../object/predicate(SmellImplicit).html)  
`                 `[`SitAction`](../object/SitAction.html)  
`                         `[`predicate(Sit)`](../object/predicate(Sit).html)  
`                 `[`SleepAction`](../object/SleepAction.html)  
`                         `[`predicate(Sleep)`](../object/predicate(Sleep).html)  
`                 `[`StandAction`](../object/StandAction.html)  
`                         `[`predicate(Stand)`](../object/predicate(Stand).html)  
`                 `[`SystemAction`](../object/SystemAction.html)  
`                         `[`AboutAction`](../object/AboutAction.html)  
`                                 `[`predicate(About)`](../object/predicate(About).html)  
`                         `[`CreditsAction`](../object/CreditsAction.html)  
`                                 `[`predicate(Credits)`](../object/predicate(Credits).html)  
`                         `[`ExitsModeAction`](../object/ExitsModeAction.html)  
`                                 `[`predicate(ExitsMode)`](../object/predicate(ExitsMode).html)  
`                         `[`FileOpAction`](../object/FileOpAction.html)  
`                                 `[`RecordAction`](../object/RecordAction.html)  
`                                         `[`predicate(Record)`](../object/predicate(Record).html)  
`                                         `[`RecordEventsAction`](../object/RecordEventsAction.html)  
`                                                 `[`predicate(RecordEvents)`](../object/predicate(RecordEvents).html)  
`                                         `[`RecordStringAction`](../object/RecordStringAction.html)  
`                                                 `[`predicate(RecordString)`](../object/predicate(RecordString).html)  
`                                                 `[`RecordEventsStringAction`](../object/RecordEventsStringAction.html)  
`                                                         `[`predicate(RecordEventsString)`](../object/predicate(RecordEventsString).html)  
`                                 `[`ReplayAction`](../object/ReplayAction.html)  
`                                         `[`ReplayStringAction`](../object/ReplayStringAction.html)  
`                                                 `[`predicate(ReplayQuiet)`](../object/predicate(ReplayQuiet).html)  
`                                                 `[`predicate(ReplayString)`](../object/predicate(ReplayString).html)  
`                                 `[`SaveAction`](../object/SaveAction.html)  
`                                         `[`predicate(Save)`](../object/predicate(Save).html)  
`                                         `[`SaveStringAction`](../object/SaveStringAction.html)  
`                                                 `[`predicate(SaveString)`](../object/predicate(SaveString).html)  
`                                 `[`ScriptAction`](../object/ScriptAction.html)  
`                                         `[`predicate(Script)`](../object/predicate(Script).html)  
`                                         `[`ScriptStringAction`](../object/ScriptStringAction.html)  
`                                                 `[`predicate(ScriptString)`](../object/predicate(ScriptString).html)  
`                         `[`FootnoteAction`](../object/FootnoteAction.html)  
`                                 `[`predicate(Footnote)`](../object/predicate(Footnote).html)  
`                         `[`FootnotesAction`](../object/FootnotesAction.html)  
`                                 `[`FootnotesFullAction`](../object/FootnotesFullAction.html)  
`                                         `[`predicate(FootnotesFull)`](../object/predicate(FootnotesFull).html)  
`                                 `[`FootnotesMediumAction`](../object/FootnotesMediumAction.html)  
`                                         `[`predicate(FootnotesMedium)`](../object/predicate(FootnotesMedium).html)  
`                                 `[`FootnotesOffAction`](../object/FootnotesOffAction.html)  
`                                         `[`predicate(FootnotesOff)`](../object/predicate(FootnotesOff).html)  
`                         `[`FootnotesStatusAction`](../object/FootnotesStatusAction.html)  
`                                 `[`predicate(FootnotesStatus)`](../object/predicate(FootnotesStatus).html)  
`                         `[`FullScoreAction`](../object/FullScoreAction.html)  
`                                 `[`predicate(FullScore)`](../object/predicate(FullScore).html)  
`                         `[`HintAction`](../object/HintAction.html)  
`                                 `[`predicate(Hint)`](../object/predicate(Hint).html)  
`                         `[`HintsOffAction`](../object/HintsOffAction.html)  
`                                 `[`predicate(HintsOff)`](../object/predicate(HintsOff).html)  
`                         `[`InstructionsAction`](../object/InstructionsAction.html)  
`                                 `[`predicate(instructions)`](../object/predicate(instructions).html)  
`                         `[`NotifyAction`](../object/NotifyAction.html)  
`                                 `[`predicate(Notify)`](../object/predicate(Notify).html)  
`                         `[`NotifyOffAction`](../object/NotifyOffAction.html)  
`                                 `[`predicate(NotifyOff)`](../object/predicate(NotifyOff).html)  
`                         `[`NotifyOnAction`](../object/NotifyOnAction.html)  
`                                 `[`predicate(NotifyOn)`](../object/predicate(NotifyOn).html)  
`                         `[`PauseAction`](../object/PauseAction.html)  
`                                 `[`predicate(Pause)`](../object/predicate(Pause).html)  
`                         `[`QuitAction`](../object/QuitAction.html)  
`                                 `[`predicate(Quit)`](../object/predicate(Quit).html)  
`                         `[`RecordOffAction`](../object/RecordOffAction.html)  
`                                 `[`predicate(RecordOff)`](../object/predicate(RecordOff).html)  
`                         `[`RestartAction`](../object/RestartAction.html)  
`                                 `[`predicate(Restart)`](../object/predicate(Restart).html)  
`                         `[`RestoreAction`](../object/RestoreAction.html)  
`                                 `[`predicate(Restore)`](../object/predicate(Restore).html)  
`                                 `[`RestoreStringAction`](../object/RestoreStringAction.html)  
`                                         `[`predicate(RestoreString)`](../object/predicate(RestoreString).html)  
`                         `[`RestoreDefaultsAction`](../object/RestoreDefaultsAction.html)  
`                                 `[`predicate(RestoreDefaults)`](../object/predicate(RestoreDefaults).html)  
`                         `[`SaveDefaultsAction`](../object/SaveDefaultsAction.html)  
`                                 `[`predicate(SaveDefaults)`](../object/predicate(SaveDefaults).html)  
`                         `[`ScoreAction`](../object/ScoreAction.html)  
`                                 `[`predicate(Score)`](../object/predicate(Score).html)  
`                         `[`ScriptOffAction`](../object/ScriptOffAction.html)  
`                                 `[`predicate(ScriptOff)`](../object/predicate(ScriptOff).html)  
`                         `[`TerseAction`](../object/TerseAction.html)  
`                                 `[`predicate(Terse)`](../object/predicate(Terse).html)  
`                         `[`TipModeAction`](../object/TipModeAction.html)  
`                                 `[`predicate(TipsOff)`](../object/predicate(TipsOff).html)  
`                                 `[`predicate(TipsOn)`](../object/predicate(TipsOn).html)  
`                         `[`TopicsAction`](../object/TopicsAction.html)  
`                                 `[`predicate(Topics)`](../object/predicate(Topics).html)  
`                         `[`UndoAction`](../object/UndoAction.html)  
`                                 `[`predicate(Undo)`](../object/predicate(Undo).html)  
`                         `[`VerboseAction`](../object/VerboseAction.html)  
`                                 `[`predicate(Verbose)`](../object/predicate(Verbose).html)  
`                         `[`VersionAction`](../object/VersionAction.html)  
`                                 `[`predicate(Version)`](../object/predicate(Version).html)  
`                 `[`TopicAction`](../object/TopicAction.html)  
`                 `[`TravelAction`](../object/TravelAction.html)  
`                         `[`AftAction`](../object/AftAction.html)  
`                         `[`DownAction`](../object/DownAction.html)  
`                         `[`EastAction`](../object/EastAction.html)  
`                         `[`ForeAction`](../object/ForeAction.html)  
`                         `[`InAction`](../object/InAction.html)  
`                                 `[`predicate(In)`](../object/predicate(In).html)  
`                         `[`NorthAction`](../object/NorthAction.html)  
`                         `[`NortheastAction`](../object/NortheastAction.html)  
`                         `[`NorthwestAction`](../object/NorthwestAction.html)  
`                         `[`OutAction`](../object/OutAction.html)  
`                                 `[`predicate(Out)`](../object/predicate(Out).html)  
`                         `[`PortAction`](../object/PortAction.html)  
`                                 `[`predicate(Port)`](../object/predicate(Port).html)  
`                         `[`predicate(Travel)`](../object/predicate(Travel).html)  
`                         `[`SouthAction`](../object/SouthAction.html)  
`                         `[`SoutheastAction`](../object/SoutheastAction.html)  
`                         `[`SouthwestAction`](../object/SouthwestAction.html)  
`                         `[`StarboardAction`](../object/StarboardAction.html)  
`                                 `[`predicate(Starboard)`](../object/predicate(Starboard).html)  
`                         `[`TravelDirAction`](../object/TravelDirAction.html)  
`                         `[`UpAction`](../object/UpAction.html)  
`                         `[`WestAction`](../object/WestAction.html)  
`                 `[`VagueTravelAction`](../object/VagueTravelAction.html)  
`                         `[`predicate(VagueTravel)`](../object/predicate(VagueTravel).html)  
`                 `[`WaitAction`](../object/WaitAction.html)  
`                         `[`predicate(Wait)`](../object/predicate(Wait).html)  
`                 `[`YellAction`](../object/YellAction.html)  
`                         `[`predicate(Yell)`](../object/predicate(Yell).html)  
`         `[`TAction`](../object/TAction.html)  
`                 `[`AttackAction`](../object/AttackAction.html)  
`                         `[`predicate(Attack)`](../object/predicate(Attack).html)  
`                 `[`BoardAction`](../object/BoardAction.html)  
`                         `[`predicate(Board)`](../object/predicate(Board).html)  
`                 `[`BreakAction`](../object/BreakAction.html)  
`                         `[`predicate(Break)`](../object/predicate(Break).html)  
`                 `[`BurnAction`](../object/BurnAction.html)  
`                         `[`predicate(Burn)`](../object/predicate(Burn).html)  
`                 `[`CleanAction`](../object/CleanAction.html)  
`                         `[`predicate(Clean)`](../object/predicate(Clean).html)  
`                 `[`ClimbAction`](../object/ClimbAction.html)  
`                         `[`predicate(Climb)`](../object/predicate(Climb).html)  
`                 `[`ClimbDownAction`](../object/ClimbDownAction.html)  
`                         `[`predicate(ClimbDown)`](../object/predicate(ClimbDown).html)  
`                         `[`predicate(ClimbDownWhat)`](../object/predicate(ClimbDownWhat).html)  
`                 `[`ClimbUpAction`](../object/ClimbUpAction.html)  
`                         `[`predicate(ClimbUp)`](../object/predicate(ClimbUp).html)  
`                         `[`predicate(ClimbUpWhat)`](../object/predicate(ClimbUpWhat).html)  
`                 `[`CloseAction`](../object/CloseAction.html)  
`                         `[`predicate(Close)`](../object/predicate(Close).html)  
`                 `[`ConsultAction`](../object/ConsultAction.html)  
`                         `[`predicate(Consult)`](../object/predicate(Consult).html)  
`                 `[`CutAction`](../object/CutAction.html)  
`                 `[`DetachAction`](../object/DetachAction.html)  
`                         `[`predicate(Detach)`](../object/predicate(Detach).html)  
`                 `[`DigAction`](../object/DigAction.html)  
`                         `[`predicate(Dig)`](../object/predicate(Dig).html)  
`                 `[`DoffAction`](../object/DoffAction.html)  
`                         `[`predicate(Doff)`](../object/predicate(Doff).html)  
`                 `[`DrinkAction`](../object/DrinkAction.html)  
`                         `[`predicate(Drink)`](../object/predicate(Drink).html)  
`                 `[`DropAction`](../object/DropAction.html)  
`                         `[`predicate(Drop)`](../object/predicate(Drop).html)  
`                 `[`EatAction`](../object/EatAction.html)  
`                         `[`predicate(Eat)`](../object/predicate(Eat).html)  
`                 `[`EnterAction`](../object/EnterAction.html)  
`                         `[`predicate(Enter)`](../object/predicate(Enter).html)  
`                 `[`ExamineAction`](../object/ExamineAction.html)  
`                         `[`predicate(Examine)`](../object/predicate(Examine).html)  
`                 `[`ExtinguishAction`](../object/ExtinguishAction.html)  
`                         `[`predicate(Extinguish)`](../object/predicate(Extinguish).html)  
`                 `[`FastenAction`](../object/FastenAction.html)  
`                         `[`predicate(Fasten)`](../object/predicate(Fasten).html)  
`                 `[`FeelAction`](../object/FeelAction.html)  
`                         `[`predicate(Feel)`](../object/predicate(Feel).html)  
`                 `[`FlipAction`](../object/FlipAction.html)  
`                         `[`predicate(Flip)`](../object/predicate(Flip).html)  
`                 `[`FollowAction`](../object/FollowAction.html)  
`                         `[`predicate(Follow)`](../object/predicate(Follow).html)  
`                 `[`GetOffOfAction`](../object/GetOffOfAction.html)  
`                         `[`predicate(GetOffOf)`](../object/predicate(GetOffOf).html)  
`                 `[`GetOutOfAction`](../object/GetOutOfAction.html)  
`                         `[`predicate(GetOutOf)`](../object/predicate(GetOutOf).html)  
`                 `[`GoThroughAction`](../object/GoThroughAction.html)  
`                         `[`predicate(GoThrough)`](../object/predicate(GoThrough).html)  
`                 `[`JumpOffAction`](../object/JumpOffAction.html)  
`                         `[`predicate(JumpOff)`](../object/predicate(JumpOff).html)  
`                 `[`JumpOverAction`](../object/JumpOverAction.html)  
`                         `[`predicate(JumpOver)`](../object/predicate(JumpOver).html)  
`                 `[`KissAction`](../object/KissAction.html)  
`                         `[`predicate(Kiss)`](../object/predicate(Kiss).html)  
`                 `[`LieOnAction`](../object/LieOnAction.html)  
`                         `[`predicate(LieOn)`](../object/predicate(LieOn).html)  
`                 `[`LightAction`](../object/LightAction.html)  
`                         `[`predicate(Light)`](../object/predicate(Light).html)  
`                 `[`ListenToAction`](../object/ListenToAction.html)  
`                         `[`predicate(ListenTo)`](../object/predicate(ListenTo).html)  
`                 `[`LiteralTAction`](../object/LiteralTAction.html)  
`                         `[`EnterOnAction`](../object/EnterOnAction.html)  
`                                 `[`predicate(EnterOn)`](../object/predicate(EnterOn).html)  
`                                 `[`predicate(EnterOnWhat)`](../object/predicate(EnterOnWhat).html)  
`                         `[`SetToAction`](../object/SetToAction.html)  
`                                 `[`predicate(SetTo)`](../object/predicate(SetTo).html)  
`                         `[`TurnToAction`](../object/TurnToAction.html)  
`                                 `[`predicate(TurnTo)`](../object/predicate(TurnTo).html)  
`                         `[`TypeLiteralOnAction`](../object/TypeLiteralOnAction.html)  
`                                 `[`predicate(TypeLiteralOn)`](../object/predicate(TypeLiteralOn).html)  
`                                 `[`predicate(TypeLiteralOnWhat)`](../object/predicate(TypeLiteralOnWhat).html)  
`                 `[`LockAction`](../object/LockAction.html)  
`                         `[`predicate(Lock)`](../object/predicate(Lock).html)  
`                 `[`LookBehindAction`](../object/LookBehindAction.html)  
`                         `[`predicate(LookBehind)`](../object/predicate(LookBehind).html)  
`                 `[`LookInAction`](../object/LookInAction.html)  
`                         `[`predicate(LookIn)`](../object/predicate(LookIn).html)  
`                 `[`LookThroughAction`](../object/LookThroughAction.html)  
`                         `[`predicate(LookThrough)`](../object/predicate(LookThrough).html)  
`                 `[`LookUnderAction`](../object/LookUnderAction.html)  
`                         `[`predicate(LookUnder)`](../object/predicate(LookUnder).html)  
`                 `[`MoveAction`](../object/MoveAction.html)  
`                         `[`predicate(Move)`](../object/predicate(Move).html)  
`                 `[`OpenAction`](../object/OpenAction.html)  
`                         `[`predicate(Open)`](../object/predicate(Open).html)  
`                 `[`PlugInAction`](../object/PlugInAction.html)  
`                         `[`predicate(PlugIn)`](../object/predicate(PlugIn).html)  
`                 `[`PourAction`](../object/PourAction.html)  
`                         `[`predicate(Pour)`](../object/predicate(Pour).html)  
`                 `[`PullAction`](../object/PullAction.html)  
`                         `[`predicate(Pull)`](../object/predicate(Pull).html)  
`                 `[`PushAction`](../object/PushAction.html)  
`                         `[`predicate(Push)`](../object/predicate(Push).html)  
`                 `[`PushTravelAction`](../object/PushTravelAction.html)  
`                         `[`PushTravelDirAction`](../object/PushTravelDirAction.html)  
`                                 `[`predicate(PushTravelDir)`](../object/predicate(PushTravelDir).html)  
`                                 `[`PushAftAction`](../object/PushAftAction.html)  
`                                 `[`PushDownAction`](../object/PushDownAction.html)  
`                                 `[`PushEastAction`](../object/PushEastAction.html)  
`                                 `[`PushForeAction`](../object/PushForeAction.html)  
`                                 `[`PushInAction`](../object/PushInAction.html)  
`                                 `[`PushNorthAction`](../object/PushNorthAction.html)  
`                                 `[`PushNortheastAction`](../object/PushNortheastAction.html)  
`                                 `[`PushNorthwestAction`](../object/PushNorthwestAction.html)  
`                                 `[`PushOutAction`](../object/PushOutAction.html)  
`                                 `[`PushPortAction`](../object/PushPortAction.html)  
`                                 `[`PushSouthAction`](../object/PushSouthAction.html)  
`                                 `[`PushSoutheastAction`](../object/PushSoutheastAction.html)  
`                                 `[`PushSouthwestAction`](../object/PushSouthwestAction.html)  
`                                 `[`PushStarboardAction`](../object/PushStarboardAction.html)  
`                                 `[`PushUpAction`](../object/PushUpAction.html)  
`                                 `[`PushWestAction`](../object/PushWestAction.html)  
`                         `[`PushTravelViaIobjAction`](../object/PushTravelViaIobjAction.html)  
`                                 `[`PushTravelClimbDownAction`](../object/PushTravelClimbDownAction.html)  
`                                         `[`predicate(PushTravelClimbDown)`](../object/predicate(PushTravelClimbDown).html)  
`                                 `[`PushTravelClimbUpAction`](../object/PushTravelClimbUpAction.html)  
`                                         `[`predicate(PushTravelClimbUp)`](../object/predicate(PushTravelClimbUp).html)  
`                                 `[`PushTravelEnterAction`](../object/PushTravelEnterAction.html)  
`                                         `[`predicate(PushTravelEnter)`](../object/predicate(PushTravelEnter).html)  
`                                 `[`PushTravelGetOutOfAction`](../object/PushTravelGetOutOfAction.html)  
`                                         `[`predicate(PushTravelGetOutOf)`](../object/predicate(PushTravelGetOutOf).html)  
`                                 `[`PushTravelThroughAction`](../object/PushTravelThroughAction.html)  
`                                         `[`predicate(PushTravelThrough)`](../object/predicate(PushTravelThrough).html)  
`                 `[`ReadAction`](../object/ReadAction.html)  
`                         `[`predicate(Read)`](../object/predicate(Read).html)  
`                 `[`RemoveAction`](../object/RemoveAction.html)  
`                         `[`predicate(Remove)`](../object/predicate(Remove).html)  
`                 `[`ScrewAction`](../object/ScrewAction.html)  
`                         `[`predicate(Screw)`](../object/predicate(Screw).html)  
`                 `[`SearchAction`](../object/SearchAction.html)  
`                         `[`predicate(Search)`](../object/predicate(Search).html)  
`                 `[`SetAction`](../object/SetAction.html)  
`                         `[`predicate(Set)`](../object/predicate(Set).html)  
`                 `[`SitOnAction`](../object/SitOnAction.html)  
`                         `[`predicate(SitOn)`](../object/predicate(SitOn).html)  
`                 `[`SmellAction`](../object/SmellAction.html)  
`                         `[`predicate(Smell)`](../object/predicate(Smell).html)  
`                 `[`StandOnAction`](../object/StandOnAction.html)  
`                         `[`predicate(StandOn)`](../object/predicate(StandOn).html)  
`                 `[`StrikeAction`](../object/StrikeAction.html)  
`                         `[`predicate(Strike)`](../object/predicate(Strike).html)  
`                 `[`SwitchAction`](../object/SwitchAction.html)  
`                         `[`predicate(Switch)`](../object/predicate(Switch).html)  
`                 `[`TakeAction`](../object/TakeAction.html)  
`                         `[`predicate(Take)`](../object/predicate(Take).html)  
`                 `[`TalkToAction`](../object/TalkToAction.html)  
`                         `[`predicate(TalkTo)`](../object/predicate(TalkTo).html)  
`                         `[`predicate(TalkToWhat)`](../object/predicate(TalkToWhat).html)  
`                 `[`TasteAction`](../object/TasteAction.html)  
`                         `[`predicate(Taste)`](../object/predicate(Taste).html)  
`                 `[`ThrowAction`](../object/ThrowAction.html)  
`                         `[`predicate(Throw)`](../object/predicate(Throw).html)  
`                 `[`ThrowDirAction`](../object/ThrowDirAction.html)  
`                         `[`predicate(ThrowDir)`](../object/predicate(ThrowDir).html)  
`                         `[`predicate(ThrowDirDown)`](../object/predicate(ThrowDirDown).html)  
`                 `[`TIAction`](../object/TIAction.html)  
`                         `[`AttachToAction`](../object/AttachToAction.html)  
`                                 `[`predicate(AttachTo)`](../object/predicate(AttachTo).html)  
`                                 `[`predicate(AttachToWhat)`](../object/predicate(AttachToWhat).html)  
`                         `[`AttackWithAction`](../object/AttackWithAction.html)  
`                                 `[`predicate(AttackWith)`](../object/predicate(AttackWith).html)  
`                         `[`BurnWithAction`](../object/BurnWithAction.html)  
`                                 `[`predicate(BurnWith)`](../object/predicate(BurnWith).html)  
`                         `[`CleanWithAction`](../object/CleanWithAction.html)  
`                                 `[`predicate(CleanWith)`](../object/predicate(CleanWith).html)  
`                         `[`CutWithAction`](../object/CutWithAction.html)  
`                                 `[`predicate(CutWith)`](../object/predicate(CutWith).html)  
`                                 `[`predicate(CutWithWhat)`](../object/predicate(CutWithWhat).html)  
`                         `[`DetachFromAction`](../object/DetachFromAction.html)  
`                                 `[`predicate(DetachFrom)`](../object/predicate(DetachFrom).html)  
`                         `[`DigWithAction`](../object/DigWithAction.html)  
`                                 `[`predicate(DigWith)`](../object/predicate(DigWith).html)  
`                         `[`FastenToAction`](../object/FastenToAction.html)  
`                                 `[`predicate(FastenTo)`](../object/predicate(FastenTo).html)  
`                         `[`GiveToAction`](../object/GiveToAction.html)  
`                                 `[`predicate(GiveTo)`](../object/predicate(GiveTo).html)  
`                                 `[`predicate(GiveToType2)`](../object/predicate(GiveToType2).html)  
`                                 `[`predicate(GiveToWhom)`](../object/predicate(GiveToWhom).html)  
`                         `[`LockWithAction`](../object/LockWithAction.html)  
`                                 `[`predicate(LockWith)`](../object/predicate(LockWith).html)  
`                         `[`MoveToAction`](../object/MoveToAction.html)  
`                                 `[`predicate(MoveTo)`](../object/predicate(MoveTo).html)  
`                         `[`MoveWithAction`](../object/MoveWithAction.html)  
`                                 `[`predicate(MoveWith)`](../object/predicate(MoveWith).html)  
`                         `[`PlugIntoAction`](../object/PlugIntoAction.html)  
`                                 `[`predicate(PlugInto)`](../object/predicate(PlugInto).html)  
`                                 `[`predicate(PlugIntoWhat)`](../object/predicate(PlugIntoWhat).html)  
`                         `[`PourIntoAction`](../object/PourIntoAction.html)  
`                                 `[`predicate(PourInto)`](../object/predicate(PourInto).html)  
`                         `[`PourOntoAction`](../object/PourOntoAction.html)  
`                                 `[`predicate(PourOnto)`](../object/predicate(PourOnto).html)  
`                         `[`PushTravelViaIobjAction`](../object/PushTravelViaIobjAction.html)  
`                                 `[`PushTravelClimbDownAction`](../object/PushTravelClimbDownAction.html)  
`                                         `[`predicate(PushTravelClimbDown)`](../object/predicate(PushTravelClimbDown).html)  
`                                 `[`PushTravelClimbUpAction`](../object/PushTravelClimbUpAction.html)  
`                                         `[`predicate(PushTravelClimbUp)`](../object/predicate(PushTravelClimbUp).html)  
`                                 `[`PushTravelEnterAction`](../object/PushTravelEnterAction.html)  
`                                         `[`predicate(PushTravelEnter)`](../object/predicate(PushTravelEnter).html)  
`                                 `[`PushTravelGetOutOfAction`](../object/PushTravelGetOutOfAction.html)  
`                                         `[`predicate(PushTravelGetOutOf)`](../object/predicate(PushTravelGetOutOf).html)  
`                                 `[`PushTravelThroughAction`](../object/PushTravelThroughAction.html)  
`                                         `[`predicate(PushTravelThrough)`](../object/predicate(PushTravelThrough).html)  
`                         `[`PutBehindAction`](../object/PutBehindAction.html)  
`                                 `[`predicate(PutBehind)`](../object/predicate(PutBehind).html)  
`                         `[`PutInAction`](../object/PutInAction.html)  
`                                 `[`predicate(PutIn)`](../object/predicate(PutIn).html)  
`                                 `[`predicate(PutInWhat)`](../object/predicate(PutInWhat).html)  
`                         `[`PutOnAction`](../object/PutOnAction.html)  
`                                 `[`predicate(PutOn)`](../object/predicate(PutOn).html)  
`                         `[`PutUnderAction`](../object/PutUnderAction.html)  
`                                 `[`predicate(PutUnder)`](../object/predicate(PutUnder).html)  
`                         `[`ScrewWithAction`](../object/ScrewWithAction.html)  
`                                 `[`predicate(ScrewWith)`](../object/predicate(ScrewWith).html)  
`                         `[`ShowToAction`](../object/ShowToAction.html)  
`                                 `[`predicate(ShowTo)`](../object/predicate(ShowTo).html)  
`                                 `[`predicate(ShowToType2)`](../object/predicate(ShowToType2).html)  
`                                 `[`predicate(ShowToWhom)`](../object/predicate(ShowToWhom).html)  
`                         `[`TakeFromAction`](../object/TakeFromAction.html)  
`                                 `[`predicate(TakeFrom)`](../object/predicate(TakeFrom).html)  
`                         `[`ThrowAtAction`](../object/ThrowAtAction.html)  
`                                 `[`predicate(ThrowAt)`](../object/predicate(ThrowAt).html)  
`                         `[`ThrowToAction`](../object/ThrowToAction.html)  
`                                 `[`predicate(ThrowTo)`](../object/predicate(ThrowTo).html)  
`                                 `[`predicate(ThrowToType2)`](../object/predicate(ThrowToType2).html)  
`                         `[`TurnWithAction`](../object/TurnWithAction.html)  
`                                 `[`predicate(TurnWith)`](../object/predicate(TurnWith).html)  
`                         `[`UnfastenFromAction`](../object/UnfastenFromAction.html)  
`                                 `[`predicate(UnfastenFrom)`](../object/predicate(UnfastenFrom).html)  
`                         `[`UnlockWithAction`](../object/UnlockWithAction.html)  
`                                 `[`predicate(UnlockWith)`](../object/predicate(UnlockWith).html)  
`                         `[`UnplugFromAction`](../object/UnplugFromAction.html)  
`                                 `[`predicate(UnplugFrom)`](../object/predicate(UnplugFrom).html)  
`                         `[`UnscrewWithAction`](../object/UnscrewWithAction.html)  
`                                 `[`predicate(UnscrewWith)`](../object/predicate(UnscrewWith).html)  
`                 `[`TopicTAction`](../object/TopicTAction.html)  
`                         `[`AskVagueAction`](../object/AskVagueAction.html)  
`                                 `[`predicate(AskVague)`](../object/predicate(AskVague).html)  
`                                 `[`predicate(TellVague)`](../object/predicate(TellVague).html)  
`                         `[`ConsultAboutAction`](../object/ConsultAboutAction.html)  
`                                 `[`predicate(ConsultAbout)`](../object/predicate(ConsultAbout).html)  
`                                 `[`predicate(ConsultWhatAbout)`](../object/predicate(ConsultWhatAbout).html)  
`                         `[`ConvTopicTAction`](../object/ConvTopicTAction.html)  
`                                 `[`AskAboutAction`](../object/AskAboutAction.html)  
`                                         `[`predicate(AskAbout)`](../object/predicate(AskAbout).html)  
`                                         `[`predicate(AskAboutImplicit)`](../object/predicate(AskAboutImplicit).html)  
`                                         `[`predicate(AskAboutWhat)`](../object/predicate(AskAboutWhat).html)  
`                                 `[`AskForAction`](../object/AskForAction.html)  
`                                         `[`predicate(AskFor)`](../object/predicate(AskFor).html)  
`                                         `[`predicate(AskWhomFor)`](../object/predicate(AskWhomFor).html)  
`                                 `[`TellAboutAction`](../object/TellAboutAction.html)  
`                                         `[`predicate(TellAbout)`](../object/predicate(TellAbout).html)  
`                                         `[`predicate(TellAboutImplicit)`](../object/predicate(TellAboutImplicit).html)  
`                                         `[`predicate(TellAboutWhat)`](../object/predicate(TellAboutWhat).html)  
`                         `[`TellVagueAction`](../object/TellVagueAction.html)  
`                 `[`TravelViaAction`](../object/TravelViaAction.html)  
`                         `[`EnTravelVia`](../object/EnTravelVia.html)  
`                 `[`TurnAction`](../object/TurnAction.html)  
`                         `[`predicate(Turn)`](../object/predicate(Turn).html)  
`                 `[`TurnOffAction`](../object/TurnOffAction.html)  
`                         `[`predicate(TurnOff)`](../object/predicate(TurnOff).html)  
`                 `[`TurnOnAction`](../object/TurnOnAction.html)  
`                         `[`predicate(TurnOn)`](../object/predicate(TurnOn).html)  
`                 `[`TypeOnAction`](../object/TypeOnAction.html)  
`                         `[`predicate(TypeOn)`](../object/predicate(TypeOn).html)  
`                 `[`UnfastenAction`](../object/UnfastenAction.html)  
`                         `[`predicate(Unfasten)`](../object/predicate(Unfasten).html)  
`                 `[`UnlockAction`](../object/UnlockAction.html)  
`                         `[`predicate(Unlock)`](../object/predicate(Unlock).html)  
`                 `[`UnplugAction`](../object/UnplugAction.html)  
`                         `[`predicate(Unplug)`](../object/predicate(Unplug).html)  
`                 `[`UnscrewAction`](../object/UnscrewAction.html)  
`                         `[`predicate(Unscrew)`](../object/predicate(Unscrew).html)  
`                 `[`WearAction`](../object/WearAction.html)  
`                         `[`predicate(Wear)`](../object/predicate(Wear).html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`actionTime`](#actionTime)`  `[`afterActionMainList`](#afterActionMainList)`  `[`beforeAfterObjs`](#beforeAfterObjs)`  `[`defaultForRecursion`](#defaultForRecursion)`  `[`extraMessageParams`](#extraMessageParams)`  `[`implicitMsg`](#implicitMsg)`  `[`includeInUndo`](#includeInUndo)`  `[`isImplicit`](#isImplicit)`  `[`isRepeatable`](#isRepeatable)`  `[`iterationCanceled`](#iterationCanceled)`  `[`originalAction`](#originalAction)`  `[`parentAction`](#parentAction)`  `[`preCond`](#preCond)`  `[`predicateNounPhrases`](#predicateNounPhrases)`  `[`pronounOverride`](#pronounOverride)`  `[`remappedFrom`](#remappedFrom)`  `[`showDefaultReports`](#showDefaultReports)`  `[`synthParamID`](#synthParamID)`  `[`verbFlags`](#verbFlags)`  `[`verifiedOkay`](#verifiedOkay)`  `

Inherited from `BasicProd` :  
` `[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)`  `[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)`  `[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`actionOfKind`](#actionOfKind)`  `[`addBeforeAfterObj`](#addBeforeAfterObj)`  `[`afterAction`](#afterAction)`  `[`afterActionMain`](#afterActionMain)`  `[`announceActionObject`](#announceActionObject)`  `[`announceAllDefaultObjects`](#announceAllDefaultObjects)`  `[`announceDefaultObject`](#announceDefaultObject)`  `[`beforeAction`](#beforeAction)`  `[`beforeActionMain`](#beforeActionMain)`  `[`cacheMultiObjectAnnouncements`](#cacheMultiObjectAnnouncements)`  `[`callAfterActionMain`](#callAfterActionMain)`  `[`callCatchAllProp`](#callCatchAllProp)`  `[`callPreConditions`](#callPreConditions)`  `[`callVerifyPreCond`](#callVerifyPreCond)`  `[`callVerifyProp`](#callVerifyProp)`  `[`cancelIteration`](#cancelIteration)`  `[`checkAction`](#checkAction)`  `[`checkPreConditions`](#checkPreConditions)`  `[`checkRemapping`](#checkRemapping)`  `[`combineRemappedVerifyResults`](#combineRemappedVerifyResults)`  `[`createActionFrom`](#createActionFrom)`  `[`createActionInstance`](#createActionInstance)`  `[`createTopicQualifierResolver`](#createTopicQualifierResolver)`  `[`doAction`](#doAction)`  `[`doActionOnce`](#doActionOnce)`  `[`execAction`](#execAction)`  `[`filterAmbiguousWithVerify`](#filterAmbiguousWithVerify)`  `[`filterFacets`](#filterFacets)`  `[`filterPluralWithVerify`](#filterPluralWithVerify)`  `[`finishResolveList`](#finishResolveList)`  `[`getAnaphoricBinding`](#getAnaphoricBinding)`  `[`getCurrentObjects`](#getCurrentObjects)`  `[`getDefaultWithVerify`](#getDefaultWithVerify)`  `[`getEnteredVerbPhrase`](#getEnteredVerbPhrase)`  `[`getImplicitPhrase`](#getImplicitPhrase)`  `[`getInfPhrase`](#getInfPhrase)`  `[`getMatchForRole`](#getMatchForRole)`  `[`getMessageParam`](#getMessageParam)`  `[`getNotifyTable`](#getNotifyTable)`  `[`getObjectForRole`](#getObjectForRole)`  `[`getObjPreCondDescList`](#getObjPreCondDescList)`  `[`getObjPreConditions`](#getObjPreConditions)`  `[`getObjResponseProd`](#getObjResponseProd)`  `[`getOriginalAction`](#getOriginalAction)`  `[`getOrigTokenList`](#getOrigTokenList)`  `[`getOtherObjectRole`](#getOtherObjectRole)`  `[`getParticiplePhrase`](#getParticiplePhrase)`  `[`getPreCondDescList`](#getPreCondDescList)`  `[`getPreCondPropForRole`](#getPreCondPropForRole)`  `[`getPredicate`](#getPredicate)`  `[`getPronounOverride`](#getPronounOverride)`  `[`getQuestionInf`](#getQuestionInf)`  `[`getRemappedFrom`](#getRemappedFrom)`  `[`getRemapPropForRole`](#getRemapPropForRole)`  `[`getResolvedObjList`](#getResolvedObjList)`  `[`getResolveInfo`](#getResolveInfo)`  `[`getRoleFromIndex`](#getRoleFromIndex)`  `[`getSimpleSynonymRemap`](#getSimpleSynonymRemap)`  `[`getSortedVerifyResults`](#getSortedVerifyResults)`  `[`getVerbPhrase`](#getVerbPhrase)`  `[`getVerifyPropForRole`](#getVerifyPropForRole)`  `[`initTentative`](#initTentative)`  `[`isConversational`](#isConversational)`  `[`isNestedIn`](#isNestedIn)`  `[`isPartOf`](#isPartOf)`  `[`isRemapped`](#isRemapped)`  `[`makeResolveInfo`](#makeResolveInfo)`  `[`makeResolveInfoList`](#makeResolveInfoList)`  `[`maybeAnnounceDefaultObject`](#maybeAnnounceDefaultObject)`  `[`maybeAnnounceImplicit`](#maybeAnnounceImplicit)`  `[`maybeAnnounceMultiObject`](#maybeAnnounceMultiObject)`  `[`noMatch`](#noMatch)`  `[`notifyBeforeAfter`](#notifyBeforeAfter)`  `[`objListPronoun`](#objListPronoun)`  `[`preAnnounceActionObject`](#preAnnounceActionObject)`  `[`recalcSenseContext`](#recalcSenseContext)`  `[`repeatAction`](#repeatAction)`  `[`resetAction`](#resetAction)`  `[`resolveAction`](#resolveAction)`  `[`resolvedObjectsInScope`](#resolvedObjectsInScope)`  `[`runBeforeNotifiers`](#runBeforeNotifiers)`  `[`saveActionForAgain`](#saveActionForAgain)`  `[`setCurrentObjects`](#setCurrentObjects)`  `[`setImplicit`](#setImplicit)`  `[`setMessageParam`](#setMessageParam)`  `[`setMessageParams`](#setMessageParams)`  `[`setNested`](#setNested)`  `[`setObjectMatches`](#setObjectMatches)`  `[`setOriginalAction`](#setOriginalAction)`  `[`setPronounOverride`](#setPronounOverride)`  `[`setRemapped`](#setRemapped)`  `[`setResolvedObjects`](#setResolvedObjects)`  `[`spPrefix`](#spPrefix)`  `[`spSuffix`](#spSuffix)`  `[`synthMessageParam`](#synthMessageParam)`  `[`verifyAction`](#verifyAction)`  `[`verifyHandlersExist`](#verifyHandlersExist)`  `[`whatObj`](#whatObj)`  `[`whatTranslate`](#whatTranslate)`  `[`withVerifyResults`](#withVerifyResults)`  `[`zeroActionTime`](#zeroActionTime)`  `

Inherited from `BasicProd` :  
` `[`canResolveTo`](../object/BasicProd.html#canResolveTo)`  `[`getOrigText`](../object/BasicProd.html#getOrigText)`  `[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="actionTime"></span>

`actionTime`

[action.t](../file/action.t.html)\[[1298](../source/action.t.html#1298)\]

<div class="desc">

the amount of time on the game clock that the action consumes - by
default, each action consumes one unit, but actions can override this to
consume more or less game time

</div>

<span id="afterActionMainList"></span>

`afterActionMainList`

[action.t](../file/action.t.html)\[[1291](../source/action.t.html#1291)\]

<div class="desc">

list of methods to invoke after we've completed the action

</div>

<span id="beforeAfterObjs"></span>

`beforeAfterObjs`

[action.t](../file/action.t.html)\[[2254](../source/action.t.html#2254)\]

<div class="desc">

vector of objects requiring explicit before/after notification

</div>

<span id="defaultForRecursion"></span>

`defaultForRecursion`

[action.t](../file/action.t.html)\[[504](../source/action.t.html#504)\]

<div class="desc">

the defaultForRecursion flag must be explicitly set in subclasses when
desired - by default we'll use any language-specific subclass of an
Action for recursive commands

</div>

<span id="extraMessageParams"></span>

`extraMessageParams`

[action.t](../file/action.t.html)\[[642](../source/action.t.html#642)\]

<div class="desc">

Extra message parameters. If a message processor wants to add special
message parameters of its own, we'll create a lookup table for the extra
parameters. Message processors might want to add their own special
parameters to allow referring to objects other than the main objects of
the command.

</div>

<span id="implicitMsg"></span>

`implicitMsg`

[action.t](../file/action.t.html)\[[543](../source/action.t.html#543)\]

<div class="desc">

the libMessage property, if any, to announce the implicit command

</div>

<span id="includeInUndo"></span>

`includeInUndo`

[action.t](../file/action.t.html)\[[656](../source/action.t.html#656)\]

<div class="desc">

Flag: this command should be included in the undo records. This is true
for almost every command, but a few special commands (undo, save) are
not subject to undo.

</div>

<span id="isImplicit"></span>

`isImplicit`

[action.t](../file/action.t.html)\[[512](../source/action.t.html#512)\]

<div class="desc">

Flag: the command is implicit. An implicit command is one that is
performed as an implied enabling step of another command - for example,
if an actor wants to throw something, the actor must be holding the
object, so will implicitly try to take the object.

</div>

<span id="isRepeatable"></span>

`isRepeatable`

[action.t](../file/action.t.html)\[[649](../source/action.t.html#649)\]

<div class="desc">

Flag: this command is repeatable with 'again'. Before executing a
command, we'll save it for use by the 'again' command if this flag is
true.

</div>

<span id="iterationCanceled"></span>

`iterationCanceled`

[action.t](../file/action.t.html)\[[204](../source/action.t.html#204)\]

<div class="desc">

internal flag: object iteration has been canceled

</div>

<span id="originalAction"></span>

`originalAction`

[action.t](../file/action.t.html)\[[540](../source/action.t.html#540)\]

<div class="desc">

the original action - we are effectively part of the original action for
reporting purposes

</div>

<span id="parentAction"></span>

`parentAction`

[action.t](../file/action.t.html)\[[527](../source/action.t.html#527)\]

<div class="desc">

The parent action. If the command is performed programmatically in the
course of executing another command, this is set to the enclosing
action.

Note that while all implicit commands are nested, not all nested
commands are implicit. A nested command may simply be a component of
another command, or another command may be handled entirely by running a
different command as a nested command. In any case, a nested but
non-implicit command does not appear to the player as a separate
command; it is simply part of the original command.

</div>

<span id="preCond"></span>

`preCond`

[action.t](../file/action.t.html)\[[2403](../source/action.t.html#2403)\]

<div class="desc">

Our list of action-level pre-condition objects. These are the conditions
that apply to the overall action, not to the individual objects
involved. (Object-level pre-conditions are attached to the objects, not
to the action.)

</div>

<span id="predicateNounPhrases"></span>

`predicateNounPhrases`

[action.t](../file/action.t.html)\[[834](../source/action.t.html#834)\]

<div class="desc">

Get the noun-phrase information for my predicate grammar. This returns a
list of the match-tree properties for the noun-phrase sub-productions in
our predicate grammar. The properties generally include &dobjMatch,
&iobjMatch, &literalMatch, and &topicMatch. The order of the slots isn't
important; they simply tell us which ones we should find in our
predicate grammar match.

The base Action is intransitive, so it doesn't have any noun-phrase
slots, hence this is an empty list.

</div>

<span id="pronounOverride"></span>

`pronounOverride`

[action.t](../file/action.t.html)\[[1021](../source/action.t.html#1021)\]

<div class="desc">

the pronoun override table - this is nil by default, which means that no
overrides have been defined yet; we create a LookupTable upon adding the
first entry to the table

</div>

<span id="remappedFrom"></span>

`remappedFrom`

[action.t](../file/action.t.html)\[[534](../source/action.t.html#534)\]

<div class="desc">

The original action we were remapped from. This is valid when the action
was explicitly remapped during the remap() phase to a different action.

</div>

<span id="showDefaultReports"></span>

`showDefaultReports`

[action.t](../file/action.t.html)\[[550](../source/action.t.html#550)\]

<div class="desc">

Flag: we are to show default reports for this action. In most cases we
will do so, but for some types of commands (such as implicit commands),
we suppress default reports.

</div>

<span id="synthParamID"></span>

`synthParamID`

[action.t](../file/action.t.html)\[[633](../source/action.t.html#633)\]

<div class="desc">

synthesized message object parameter serial number

</div>

<span id="verbFlags"></span>

`verbFlags`

[en_us.t](../file/en_us.t.html)\[[8411](../source/en_us.t.html#8411)\]

<div class="desc">

Verb flags - these are used to control certain aspects of verb
formatting. By default, we have no special flags.

</div>

<span id="verifiedOkay"></span>

`verifiedOkay`

[action.t](../file/action.t.html)\[[2968](../source/action.t.html#2968)\]

<div class="desc">

List of objects that verified okay on a prior pass. This is a
scratch-pad for use by verifier routines, to keep track of work they've
already done. A few verifiers use this as a way to detect when an
implicit action actually finished the entire job, which would in many
cases result in a verify failure if not checked (because a command that
effects conditions that already hold is normally illogical); by tracking
that the verification previously succeeded, the verifier can know that
the action should be allowed to proceed and do nothing.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="actionOfKind"></span>

`actionOfKind (cls)`

[action.t](../file/action.t.html)\[[162](../source/action.t.html#162)\]

<div class="desc">

Are we the given kind of action? By default, this simply returns true if
we're of the given action class.

</div>

<span id="addBeforeAfterObj"></span>

`addBeforeAfterObj (obj)`

[action.t](../file/action.t.html)\[[2243](../source/action.t.html#2243)\]

<div class="desc">

Register an object for explicit inclusion in beforeAction and
afterAction notifications. This can be used to register objects that
might not be connected by containment or otherwise notifiable by normal
means. If this is called after the beforeAction notification loop has
already started, then the object will only be sent an afterAction
notification.

</div>

<span id="afterAction"></span>

`afterAction ( )`

[action.t](../file/action.t.html)\[[1812](../source/action.t.html#1812)\]

<div class="desc">

Run our action-specific post-processing. By default, we do nothing here.

</div>

<span id="afterActionMain"></span>

`afterActionMain ( )`

[action.t](../file/action.t.html)\[[1196](../source/action.t.html#1196)\]

<div class="desc">

Perform processing after running the entire action. This is called just
once per action, even if the action was iterated for a list of objects.

</div>

<span id="announceActionObject"></span>

`announceActionObject (info, numberInList, whichObj)`

[action.t](../file/action.t.html)\[[1600](../source/action.t.html#1600)\]

<div class="desc">

Announce the object of an action. This should be used for each iteration
of a command that takes objects to announce the objects on this
iteration.

We announce an object under several circumstances:

\- If we are iterating through multiple objects, we'll show the current
object to show the player the individual step in the command being
performed.

\- If 'all' was used to specify the object, we'll announce it even if
only one object is involved, to make it clear to the player exactly what
we chose as a match.

\- If we are executing the command on a single object, and the object
was chosen through disambiguation of a set of ambiguous choices, and
some of the discarded possibilities were logical but less so than the
chosen object, we'll show the assumption we made. In such cases, our
assumption is not necessarily correct, so we'll tell the user about our
choice explicitly by way of confirmation - this gives the user a better
chance of noticing quickly if our assumption was incorrect.

\- If we supplied a default for a missing noun phrase in the player's
command, we'll show what we chose. Since the player didn't say what they
meant, we'll make it plain that we're providing an assumption about what
we thought they must have meant.

'info' is the ResolveInfo object describing this resolved object, and
'numberInList' is the total number of objects we're iterating over for
this object function (direct object, indirect object, etc). 'whichObj'
is one of the object function constants (DirectObject, IndirectObject,
etc) describing which object we're mentioning; the language-specific
message generator might use this in conjunction with the action to
include a preposition with the displayed phrase, for example, or choose
an appropriate inflection.

</div>

<span id="announceAllDefaultObjects"></span>

`announceAllDefaultObjects (allResolved)`

[en_us.t](../file/en_us.t.html)\[[8289](../source/en_us.t.html#8289)\]

<div class="desc">

Announce all defaulted objects in the action. By default, we show
nothing.

</div>

<span id="announceDefaultObject"></span>

`announceDefaultObject (obj, whichObj, resolvedAllObjects)`

[en_us.t](../file/en_us.t.html)\[[8276](../source/en_us.t.html#8276)\]

<div class="desc">

Announce a default object used with this action.

'resolvedAllObjects' indicates where we are in the command processing:
this is true if we've already resolved all of the other objects in the
command, nil if not. We use this information to get the phrasing right
according to the situation.

</div>

<span id="beforeAction"></span>

`beforeAction ( )`

[action.t](../file/action.t.html)\[[1776](../source/action.t.html#1776)\]

<div class="desc">

Run our action-specific pre-processing. By default, we do nothing here.

</div>

<span id="beforeActionMain"></span>

`beforeActionMain ( )`

[action.t](../file/action.t.html)\[[1187](../source/action.t.html#1187)\]

<div class="desc">

Perform processing before running the action. This is called just once
per action, even if the action will be iterated for a list of objects.

</div>

<span id="cacheMultiObjectAnnouncements"></span>

`cacheMultiObjectAnnouncements (lst, whichObj)`

[action.t](../file/action.t.html)\[[1674](../source/action.t.html#1674)\]

<div class="desc">

Pre-calculate the multi-object announcement text for each object. This
is important because these announcements might choose a form for the
name that distinguishes it from the other objects in the iteration, and
the basis for distinction might be state-dependent (such as the object's
current owner or location), and the relevant state might change as we
iterate over the objects. From the user's perspective, they're referring
to the objects based on the state at the start of the command, so the
user will expect to see names based on the that state.

</div>

<span id="callAfterActionMain"></span>

`callAfterActionMain (obj)`

[action.t](../file/action.t.html)\[[1279](../source/action.t.html#1279)\]

<div class="desc">

Register an object for afterActionMain invocation. After we've finished
with the entire action - including all iterated objects involved in the
action - we'll invoke each registered object's afterActionMain() method.
This registration is only meaningful for the current action instance,
and can only be set up before the action has been finished (i.e., before
the current gAction invokes its own afterActionMain() method).

Each object is only registered once. If a caller attempts to register
the same object repeatedly, we'll simply ignore the repeated requests.

This is a convenient way to implement a collective follow-up to the
parts of an iterated action. Since repeated registrations are ignored,
each handler for an iterated object (such as a "dobjFor" action()
handler) can register its follow-up handler without worrying about
redundant registration. Then, when the overall action is completed for
each iterated object involved, the follow-up handler will be invoked,
and it can do any final work for the overall action. For example, the
follow-up handler could display a message summarizing the iterated parts
of the action; or, it could even scan the transcript for particular
messages and replace them with a summary.

</div>

<span id="callCatchAllProp"></span>

`callCatchAllProp (obj, actionProp, defProp, allProp)`

[action.t](../file/action.t.html)\[[1946](../source/action.t.html#1946)\]

<div class="desc">

Call a catch-all property on the given object.

actionProp is the custom per-object/per-action property that we normally
invoke to process the action. For example, if we're processing
verification for the direct object of Take, this would be
&verifyDobjTake.

defProp is the default property that corresponds to actionProp. This is
the per-object/default-action property that we invoke when the object
doesn't provide a "more specialized" version of actionProp - that is, if
the object doesn't define or inherit actionProp at a point in its class
hierarchy that is more specialized than the point at which it defines
defProp, we'll call defProp. If there is a more specialized definition
of actionProp for the object, it effectively overrides the default
handler, so we do not invoke the default handler.

allProp is the catch-all property corresponding to actionProp. We invoke
this property in all cases.

Returns true if there is indeed a Default property that overrides the
action, nil if not.

</div>

<span id="callPreConditions"></span>

`callPreConditions (lst, allowImplicit)`

[action.t](../file/action.t.html)\[[2338](../source/action.t.html#2338)\]

<div class="desc">

Call a method on all of the precondition objects in the precondition
list obtained from the given property of the given object.

</div>

<span id="callVerifyPreCond"></span>

`callVerifyPreCond (resultSoFar)`

[action.t](../file/action.t.html)\[[1896](../source/action.t.html#1896)\]

<div class="desc">

Verify the non-object-related pre-conditions. This runs verification on
each of the pre-condition objects defined for the action.

</div>

<span id="callVerifyProp"></span>

`callVerifyProp (obj, verProp, preCondProp, remapProp, resultSoFar, whichObj)`

[action.t](../file/action.t.html)\[[1984](../source/action.t.html#1984)\]

<div class="desc">

Call a verification routine. This creates a results object and makes it
active, then invokes the given verification routine on the given object.

We call verification directly on the object, and we also call
verification on the object's preconditions.

If resultSoFar is non-nil, it is a VerifyResultList that has the results
so far - this can be used for multi-object verifications to gather all
of the verification results for all of the objects into a single result
list. If resultSoFar is nil, we'll create a new result list.

</div>

<span id="cancelIteration"></span>

`cancelIteration ( )`

[action.t](../file/action.t.html)\[[201](../source/action.t.html#201)\]

<div class="desc">

Cancel iteration of the action. This can be called during the 'check' or
'action' phases of executing this action. It tells the action that we
want to stop executing the action when we're finished with the current
object.

Note that this doesn't cause a jump out of the current code, so it's not
like 'exit' or the other termination signals. Instead, this simply tells
the action to proceed normally for the remainder of the processing for
the current object, and then act as though there were no more objects to
iterate over, ending the command normally. If you want to cut off the
remainder of the execution cycle for the current object, you can use
'exit' (for example) immediately after calling this method.

</div>

<span id="checkAction"></span>

`checkAction ( )`

[action.t](../file/action.t.html)\[[1791](../source/action.t.html#1791)\]

<div class="desc">

Check the action. This runs the 'check' phase, and must be overridden
for each subclass.

Intransitive actions don't generally have to do anything in the 'check'
phase, since they can simply do any necessary checks in the 'execute'
phase that runs immediately after 'check'. This phase is separated out
from 'execute' mostly for the benefit of transitive actions, where the
'check' phase gives the involved objects a chance to object to the
action.

</div>

<span id="checkPreConditions"></span>

`checkPreConditions (allowImplicit)`

[action.t](../file/action.t.html)\[[2292](../source/action.t.html#2292)\]

<div class="desc">

Check any pre-conditions for the action.

This should check all of the conditions that must be met for the action
to proceed. If any pre-condition can be met by running an implicit
command first, that implicit command should be executed here. If any
pre-condition cannot be met, this routine should notify the actor and
throw an ExitSignal.

Returns true if any implicit commands are executed, nil if not. Implicit
commands can only be attempted if allowImplicit is true; if this is nil,
a precondition must simply fail (by displaying an appropriate failure
report and using 'exit') without attempting an implicit command if its
assertion does not hold.

</div>

<span id="checkRemapping"></span>

`checkRemapping ( )`

[action.t](../file/action.t.html)\[[1851](../source/action.t.html#1851)\]

<div class="desc">

Check for remapping the action. This should check with each resolved
object involved in the command to see if the object wants to remap the
action to a new action; if it does, the object must replace the current
action (using replaceAction or equivalent). Note that replacing the
action must use 'exit' to terminate the original action, so this will
never return if remapping actually does occur.

</div>

<span id="combineRemappedVerifyResults"></span>

`combineRemappedVerifyResults (lst, role)`

[action.t](../file/action.t.html)\[[2520](../source/action.t.html#2520)\]

<div class="desc">

Combine any remapped verify results in the given verify result list. We
will remove any result that was remapped to a different object if and
only if the target of the remapping appears in the list and has the same
results as the remapped original. When objects are remapped in this
fashion, they become effectively equivalent for the purposes of this
command, so we don't have to distinguish between them for disambiguation
or defaulting purposes.

</div>

<span id="createActionFrom"></span>

`createActionFrom (orig)`

[action.t](../file/action.t.html)\[[275](../source/action.t.html#275)\]

<div class="desc">

Create an instance of this action based on another action. We'll copy
the basic properties of the original action.

</div>

<span id="createActionInstance"></span>

`createActionInstance ( )`

[action.t](../file/action.t.html)\[[235](../source/action.t.html#235)\]

<div class="desc">

Create an instance of this action, for use by a recursive or
programmatically-generated command.

The generic actions defined in the library are always subclassed by
language-specific library modules, because the language modules have to
define the grammar rules for the verbs - we can't define the grammar
rules generically because the verbs wouldn't be reusable for non-English
translations if we did. As a result, library code referring to one of
the library verbs by name, say TakeAction, doesn't get a
language-specific subclass of the verb, but just gets the
language-independent base class.

However, to make full use of an Action object in a recursive command, we
do need a final language-specific subclass - without this, we won't be
able to generate text describing the command, for example. This method
bridges this gap by finding a suitable language-specific subclass of the
given action, then creating an instance of that subclass rather than an
instance of the base class.

By default, we'll take any subclass of this action that is itself a
class. However, if any subclass has the property defaultForRecursion set
to true, we'll use that class specifically - this lets the language
module designate a particular subclass to use as the default for
recursive commands, which might be desirable in cases where the language
module defines more than one subclass of an action.

</div>

<span id="createTopicQualifierResolver"></span>

`createTopicQualifierResolver (issuingActor, targetActor)`

[action.t](../file/action.t.html)\[[2951](../source/action.t.html#2951)\]

<div class="desc">

Create a topic qualifier resolver. This type of resolver is used for
qualifier phrases (e.g., possessives) within topic phrases within
objects of this verb. Topics \*usually\* only apply to TopicActionBase
subclasses, but not exclusively: action remappings can sometimes require
a topic phrase from one action to be resolved in the context of another
action that wouldn't normally involve a topic phrase. That's why this is
needed on the base Action class.

</div>

<span id="doAction"></span>

`doAction (issuingActor, targetActor, targetActorPhrase, countsAsIssuerTurn)`

[action.t](../file/action.t.html)\[[1097](../source/action.t.html#1097)\]

<div class="desc">

Perform this action. Throughout execution of the action, the global
parser variables that specify the current actor and action are valid.

</div>

<span id="doActionOnce"></span>

`doActionOnce ( )`

[action.t](../file/action.t.html)\[[1326](../source/action.t.html#1326)\]

<div class="desc">

Execute the action for a single set of objects. This runs the full
execution sequence for the current set of objects.

Subclasses generally won't override this method, but will instead
override the methods that implement the individual steps in the
execution sequence.

</div>

<span id="execAction"></span>

`execAction ( )`

[action.t](../file/action.t.html)\[[1802](../source/action.t.html#1802)\]

<div class="desc">

Execute the action. This must be overridden by each subclass.

Intransitive actions must do all of their work in this routine. In most
cases, transitive actions will delegate processing to one or more of the
objects involved in the command - for example, most single-object
commands will call a method in the direct object to carry out the
command.

</div>

<span id="filterAmbiguousWithVerify"></span>

`filterAmbiguousWithVerify (lst, requiredNum, verProp, preCondProp, remapProp, whichObj, np)`

[action.t](../file/action.t.html)\[[2574](../source/action.t.html#2574)\]

<div class="desc">

Filter an ambiguous object list using the given verification method. We
call the given verification method on each object, noting the result,
then find the best (most logical) result in the list. We reduce the set
to the objects that all have the same best value - everything else in
the list is less logical, so we discard it. This gives us a set of
objects that are all of equivalent likelihood and all of the best
likelihood of all the objects.

This is the typical way that we disambiguate a list of objects, but this
is merely a service routine, so individual actions can choose to use
this or other mechanisms as appropriate.

</div>

<span id="filterFacets"></span>

`filterFacets (lst)`

[action.t](../file/action.t.html)\[[2776](../source/action.t.html#2776)\]

<div class="desc">

Filter out redundant facets of the same object. The various facets of an
object are equivalent to the parser. An object that has multiple facets
is meant to appear to be one game world object from the perspective of a
character - the multiple facet objects are an internal implementation
detail.

</div>

<span id="filterPluralWithVerify"></span>

`filterPluralWithVerify (lst, verProp, preCondProp, remapProp, whichObj, np)`

[action.t](../file/action.t.html)\[[2738](../source/action.t.html#2738)\]

<div class="desc">

Filter a plural list with a verification method. We'll reduce the list
to the subset of objects that verify as logical, if there are any. If
there are no logical objects in the list, we'll simply return the entire
original list.

</div>

<span id="finishResolveList"></span>

`finishResolveList (lst, whichObj, np, requiredNum)`

[action.t](../file/action.t.html)\[[2411](../source/action.t.html#2411)\]

<div class="desc">

Finish the result list for a resolved noun phrase. This is used just
before disambiguation. We'll give each object in the list a chance to
filter the list with filterResolveList, and we'll note the noun phrase
we matched in each resolved object.

</div>

<span id="getAnaphoricBinding"></span>

`getAnaphoricBinding (typ)`

[action.t](../file/action.t.html)\[[960](../source/action.t.html#960)\]

<div class="desc">

Get the list of bindings for an anaphoric pronoun - this is a pronoun
that refers back to an earlier noun phrase in the same sentence, such as
HIMSELF in ASK BOB ABOUT HIMSELF. These obviously make no sense for
verbs that take one (or zero) objects, since there's no earlier phrase
to refer back to; these should return nil to indicate that an anaphoric
pronoun is simply nonsensical in such a context. Actions of two or more
objects should return a list of objects for the preceding noun phrase.

Actions of two or more objects should set this if possible to the
resolved object list for the previous noun phrase, as a ResolveInfo
list.

The tricky part is that some actions will resolve noun phrases in a
different order than they appear in the actual command grammar;
similarly, it's also possible that some non-English languages use
cataphoric pronouns (i.e., pronouns that refer to noun phrases that
appear later in the sentence). To allow for these cases, return an empty
list here if a binding is grammatically possible but not yet available
because of the resolution order, and note internally that the parser
asked us for an anaphoric binding. Afterwards, the action's resolver
method must go back and perform \*another\* resolve pass on the noun
phrase production that requested the anaphor binding.

'typ' is the PronounType specifier for the corresponding ordinary
pronoun. For 'himself', for example, typ will be PronounHim.

</div>

<span id="getCurrentObjects"></span>

`getCurrentObjects ( )`

[action.t](../file/action.t.html)\[[2266](../source/action.t.html#2266)\]

<div class="desc">

Get the list of all of the objects (direct object, indirect object, and
any additional objects for actions with three or more object roles)
involved in the current execution. This is valid only during a call to
doActionOnce(), since that's the only time a particular set of objects
are selected for the action.

By default, an action has no objects roles at all, so we'll just return
an empty list.

</div>

<span id="getDefaultWithVerify"></span>

`getDefaultWithVerify (resolver, verProp, preCondProp, remapProp, whichObj, np)`

[action.t](../file/action.t.html)\[[2838](../source/action.t.html#2838)\]

<div class="desc">

Get a default object using the given verification method. We'll start
with the 'all' list, then use the verification method to reduce the list
to the most likely candidates. If we find a unique most likely
candidate, we'll return a ResolveInfo list with that result; otherwise,
we'll return nothing, since there is no suitable default.

</div>

<span id="getEnteredVerbPhrase"></span>

`getEnteredVerbPhrase ( )`

[action.t](../file/action.t.html)\[[718](../source/action.t.html#718)\]

<div class="desc">

Get the actual verb phrase the player typed in to generate this Action,
expressed in a canonical format. The canonical format consists of the
lower-case version of all of the actual text the player typed, but with
each noun phrase replaced by a standard placeholder token describing the
slot. The placeholder tokens are '(dobj)' for the direct object,
'(iobj)' for the indirect object, '(literal)' for a literal text phrase,
and '(topic)' for a topic phrase.

For example, if the player typed PUT BOOK AND PENCIL IN BOX, the
canonical phrasing we return would be "put (dobj) in (iobj)".

</div>

<span id="getImplicitPhrase"></span>

`getImplicitPhrase (ctx)`

[en_us.t](../file/en_us.t.html)\[[8303](../source/en_us.t.html#8303)\]

<div class="desc">

Return a phrase describing the action performed implicitly, as a
participle phrase. 'ctx' is an ImplicitAnnouncementContext object
describing the context in which we're generating the phrase.

This comes in two forms: if the context indicates we're only attempting
the action, we'll return an infinitive phrase ("open the box") for use
in a larger participle phrase describing the attempt ("trying to...").
Otherwise, we'll be describing the action as actually having been
performed, so we'll return a present participle phrase ("opening the
box").

</div>

<span id="getInfPhrase"></span>

`getInfPhrase ( )`

[en_us.t](../file/en_us.t.html)\[[8320](../source/en_us.t.html#8320)\]

<div class="desc">

Get the infinitive form of the action. We are NOT to include the
infinitive complementizer (i.e., "to") as part of the result, since the
complementizer isn't used in all contexts in which we might want to use
the infinitive; for example, we don't want a "to" in phrases involving
an auxiliary verb, such as "he can open the box."

</div>

<span id="getMatchForRole"></span>

`getMatchForRole (role)`

[action.t](../file/action.t.html)\[[856](../source/action.t.html#856)\]

<div class="desc">

get the match tree for the noun phrase in the given role

</div>

<span id="getMessageParam"></span>

`getMessageParam (objName)`

[action.t](../file/action.t.html)\[[558](../source/action.t.html#558)\]

<div class="desc">

Get a message parameter object for the action. Each action subclass
defines this to return its objects according to its own classifications.
The default action has no objects, but recognizes 'actor' as the current
command's actor.

</div>

<span id="getNotifyTable"></span>

`getNotifyTable ( )`

[action.t](../file/action.t.html)\[[2175](../source/action.t.html#2175)\]

<div class="desc">

Get the list of objects to notify before or after the action has been
performed.

</div>

<span id="getObjectForRole"></span>

`getObjectForRole (role)`

[action.t](../file/action.t.html)\[[853](../source/action.t.html#853)\]

<div class="desc">

get the resolved object in a given role

</div>

<span id="getObjPreCondDescList"></span>

`getObjPreCondDescList (obj, preCondProp, checkArg, whichObj)`

[action.t](../file/action.t.html)\[[2314](../source/action.t.html#2314)\]

<div class="desc">

Get a precondition descriptor list for the given object. This returns a
list of PreCondDesc objects that wrap the preconditions for the given
object in the given role for this action.

</div>

<span id="getObjPreConditions"></span>

`getObjPreConditions (obj, preCondProp, whichObj)`

[action.t](../file/action.t.html)\[[2060](../source/action.t.html#2060)\]

<div class="desc">

Get the precondition list for an object. whichObj is the object role of
the object whose preconditions we're retrieving; this is nil if we're
looking for action-level preconditions.

</div>

<span id="getObjResponseProd"></span>

`getObjResponseProd (resolver)`

[action.t](../file/action.t.html)\[[2975](../source/action.t.html#2975)\]

<div class="desc">

Get the missing object response production for a given resolver role.
(The base action doesn't have any objects, so there's no such thing as a
missing object query.)

</div>

<span id="getOriginalAction"></span>

`getOriginalAction ( )`

[action.t](../file/action.t.html)\[[391](../source/action.t.html#391)\]

<div class="desc">

Get the "original" action. If I'm a replacement or nested action, this
returns the original main action of which I'm a part, for reporting
pruposes.

It's important to note that an implied action does NOT count as a nested
or replacement action for the purposes of this method. That is, if a
command A triggers an implied action B, which triggers a nested action
C, and then after that command A itself triggers a nested action D, then

A.getOriginalAction -\> A  
B.getOriginalAction -\> B (B is implied, not nested)  
C.getOriginalAction -\> C (C is nested within B)  
D.getOriginalAction -\> A (D is nested within A)

The purpose of the original action is to tell us, mainly for reporting
purposes, what we're really trying to do with the action. This allows
reports to hide the internal details of how the action is carried out,
and instead say what the action was meant to do from the player's
perspective.

</div>

<span id="getOrigTokenList"></span>

`getOrigTokenList ( )`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[2924](../source/action.t.html#2924)\]

<div class="desc">

A synthesized Action (one that's generated by something other than
parsing a command line, such as an event action or nested action) won't
have a parser token list attached to it. If we're asked to get the token
list, we need to check for this possibility. If we don't have a token
list, but we do have a parent action, we'll defer to the parent action.
Otherwise, we'll simply return nil.

</div>

<span id="getOtherObjectRole"></span>

`getOtherObjectRole (role)`

[action.t](../file/action.t.html)\[[850](../source/action.t.html#850)\]

<div class="desc">

Get the "other object" role - this is the complement of the given object
role for a two-object action, and is used to determine the real role of
the special OtherObject placeholder in a remapTo(). This is only
meaningful with actions of exactly two objects.

</div>

<span id="getParticiplePhrase"></span>

`getParticiplePhrase ( )`

[en_us.t](../file/en_us.t.html)\[[8359](../source/en_us.t.html#8359)\]

<div class="desc">

Get a string describing the full action in present participle form,
using the current command objects: "taking the watch", "putting the book
on the shelf"

</div>

<span id="getPreCondDescList"></span>

`getPreCondDescList ( )`

[action.t](../file/action.t.html)\[[2303](../source/action.t.html#2303)\]

<div class="desc">

Get the precondition descriptor list for the action. For the base
intransitive action type, this simply returns the list of conditions for
the action itself.

</div>

<span id="getPreCondPropForRole"></span>

`getPreCondPropForRole (role)`

[action.t](../file/action.t.html)\[[865](../source/action.t.html#865)\]

<div class="desc">

get the 'preCond' property for a given object role

</div>

<span id="getPredicate"></span>

`getPredicate ( )`

[action.t](../file/action.t.html)\[[811](../source/action.t.html#811)\]

<div class="desc">

Get the grammar match tree object for the predicate that was used to
enter this command. By default, if we have an original action, we return
the original action; otherwise we just return 'self'.

Language libraries must override this to return the original match tree
object if Actions are separate from predicate match trees.

(The 'predicate' is simply the grammar match tree object for the entire
verb phrase from the player's actual command entry text that matched
this Action. For example, in "BOB, TAKE BOX", the predicate is the match
tree for the "TAKE BOX" part. In "BOB, TAKE BOX AND GO NORTH", the
predicate for the Take action is still the "TAKE BOX" part. For "BOB,
TAKE BOX AND BOOK AND GO NORTH", the predicate for the Take action is
"TAKE BOX AND BOOK" - the full verb phrase includes any multiple-object
lists in the original command.)

</div>

<span id="getPronounOverride"></span>

`getPronounOverride (typ)`

[action.t](../file/action.t.html)\[[992](../source/action.t.html#992)\]

<div class="desc">

Get any special pronoun override in effect for the action, as set via
setPronounOverride(). This looks in our own override table for a
definition; then, if we have no override of our own, we ask our parent
action if we have one, then our original action.

</div>

<span id="getQuestionInf"></span>

`getQuestionInf (which)`

[en_us.t](../file/en_us.t.html)\[[8345](../source/en_us.t.html#8345)\]

<div class="desc">

Get the root infinitive form of our verb phrase as part of a question in
which one of the verb's objects is the "unknown" of the interrogative.
'which' is one of the role markers (DirectObject, IndirectObject, etc),
indicating which object is the subject of the interrogative.

For example, for the verb UNLOCK \<dobj\> WITH \<iobj\>, if the unknown
is the direct object, the phrase we'd return would be "unlock": this
would plug into contexts such as "what do you want to unlock." If the
indirect object is the unknown for the same verb, the phrase would be
"unlock it with", which would plug in as "what do you want to unlock it
with".

Note that we are NOT to include the infinitive complementizer (i.e.,
"to") as part of the phrase we generate, since the complementizer isn't
used in some contexts where the infinitive conjugation is needed (for
example, "what should I \<infinitive\>").

</div>

<span id="getRemappedFrom"></span>

`getRemappedFrom ( )`

[action.t](../file/action.t.html)\[[430](../source/action.t.html#430)\]

<div class="desc">

*no description available*

</div>

<span id="getRemapPropForRole"></span>

`getRemapPropForRole (role)`

[action.t](../file/action.t.html)\[[871](../source/action.t.html#871)\]

<div class="desc">

get the 'remap' property for a given object role

</div>

<span id="getResolvedObjList"></span>

`getResolvedObjList (which)`

[action.t](../file/action.t.html)\[[1686](../source/action.t.html#1686)\]

<div class="desc">

get the list of resolved objects in the given role

</div>

<span id="getResolveInfo"></span>

`getResolveInfo (obj, oldRole)`

[action.t](../file/action.t.html)\[[883](../source/action.t.html#883)\]

<div class="desc">

Get the ResolveInfo for the given object in the current command. Since
we don't have any objects at all, we'll simply return a new ResolveInfo
wrapping the given object. 'cur' is the object we're looking for, and
'oldRole' is the role the object previously played in the action.

</div>

<span id="getRoleFromIndex"></span>

`getRoleFromIndex (idx)`

[action.t](../file/action.t.html)\[[842](../source/action.t.html#842)\]

<div class="desc">

Get the object "role" identifier for the given index. This returns the
identifier (DirectObject, IndirectObject, etc.) for the object at the
given slot index, as used in setResolvedObjects(). The first object is
at index 1.

</div>

<span id="getSimpleSynonymRemap"></span>

`getSimpleSynonymRemap (obj, role, remapProp)`

[action.t](../file/action.t.html)\[[451](../source/action.t.html#451)\]

<div class="desc">

Get the "simple synonym" remapping for one of our objects, if any. 'obj'
is the resolved object to remap, and 'role' is the object role
identifier (DirectObject, IndirectObject, etc). 'remapProp' is the
remapping property for the role; this is simply the result of our
getRemapPropForRole(role), but we ask the caller to pass this in so that
it can be pre-computed in cases where we'll called in a loop.

A simple synonym remapping is a remapTo that applies the same verb to a
new object in the same role. For example, if we remap OPEN DESK to OPEN
DRAWER, then the drawer is the simple synonym remapping for the desk in
an OPEN command. A remapping is considered a simple synonym remapping
only if we're remapping to the same action, AND the new object is in the
same action role as the original object was.

If there's no simple synonym remapping, we'll return nil.

</div>

<span id="getSortedVerifyResults"></span>

`getSortedVerifyResults (lst, verProp, preCondProp, remapProp, whichObj, np, requiredNum)`

[action.t](../file/action.t.html)\[[2432](../source/action.t.html#2432)\]

<div class="desc">

Get a list of verification results for the given ResolveInfo objects,
sorted from best to worst. Each entry in the returned list will be a
VerifyResultList object whose obj\_ property is set to the ResolveInfo
object for which it was generated.

</div>

<span id="getVerbPhrase"></span>

`getVerbPhrase (inf, ctx)`

[en_us.t](../file/en_us.t.html)\[[8375](../source/en_us.t.html#8375)\]

<div class="desc">

Get the full verb phrase in either infinitive or participle format. This
is a common handler for getInfinitivePhrase() and getParticiplePhrase().

'ctx' is a GetVerbPhraseContext object, which lets us keep track of
antecedents when we're stringing together multiple verb phrases. 'ctx'
can be nil if the verb phrase is being used in isolation.

</div>

<span id="getVerifyPropForRole"></span>

`getVerifyPropForRole (role)`

[action.t](../file/action.t.html)\[[859](../source/action.t.html#859)\]

<div class="desc">

get the 'verify' property for a given object role

</div>

<span id="initTentative"></span>

`initTentative (issuingActor, targetActor, whichObj)`

[action.t](../file/action.t.html)\[[1837](../source/action.t.html#1837)\]

<div class="desc">

Initialize tentative resolutions for other noun phrases besides the one
indicated.

</div>

<span id="isConversational"></span>

`isConversational (issuingActor)`

[action.t](../file/action.t.html)\[[703](../source/action.t.html#703)\]

<div class="desc">

Flag: this is a "conversational" command, as opposed to an order. When
this type of command is addressed to another character, it doesn't ask
the other character to do anything, but rather engages the other
character in conversation. Examples:

  
Bob, hello  
Bob, goodbye  
Bob, tell me about the planet  
Bob, yes  
Bob, no

("Tell me about..." is a little different from the others. We treat it
as conversational because it means the same thing as "ask Bob about...",
which we consider conversational because it would be rendered in real
life as a question. In other words, the action involves the issuing
actor stating the question, which means that issuing actor is the one
doing the physical work of the action. "Tell me about..." could be seen
as an order, but it seems more appropriate to view it as simply an
alternative way of phrasing a question.)

The issuing actor is passed as a parameter because some actions are
conversational only in some cases; "tell me about the planet" is
conversational, but "tell Bill about the planet" isn't, since the latter
doesn't ask Bob a question but orders Bob to talk to Bill.

When the issuing actor and target actor are the same, this is
irrelevant. The purpose of this is to distinguish orders given to
another character from conversational overtures directed to the other
character, so if the command is coming from the player and bound for the
player character, there's obviously no conversation going on.

Note also that, contrary to what one might think at first glance, a
command like ASK ABOUT is NOT conversational; it's a command to ask
someone about something, and isn't itself a conversational overture. The
act of asking is itself a conversational overture, but the asking is the
\*result\* of the command, not the command itself. An action is only
conversational if the action itself is a conversational overture. So,
"BOB, HELLO" is conversational; "BOB, ASK BILL ABOUT COMPUTER" is not,
because it orders Bob to do something.

</div>

<span id="isNestedIn"></span>

`isNestedIn (action)`

[action.t](../file/action.t.html)\[[337](../source/action.t.html#337)\]

<div class="desc">

Determine if I'm nested within the given action. Returns true if the
given action is my parent action, or if my parent action is nested
within the given action.

</div>

<span id="isPartOf"></span>

`isPartOf (action)`

[action.t](../file/action.t.html)\[[407](../source/action.t.html#407)\]

<div class="desc">

Determine if this action is "part of" the given action. I'm part of the
given action if I am the given action, or the given action is my
"original" action, or my original action is part of the given action.

</div>

<span id="isRemapped"></span>

`isRemapped ( )`

[action.t](../file/action.t.html)\[[429](../source/action.t.html#429)\]

<div class="desc">

determine if I'm remapped, and get the original action if so

</div>

<span id="makeResolveInfo"></span>

`makeResolveInfo (val)`

[action.t](../file/action.t.html)\[[1024](../source/action.t.html#1024)\]

<div class="desc">

wrap an object with a ResolveInfo

</div>

<span id="makeResolveInfoList"></span>

`makeResolveInfoList (val)`

[action.t](../file/action.t.html)\[[1039](../source/action.t.html#1039)\]

<div class="desc">

Convert an object or list of objects to a ResolveInfo list

</div>

<span id="maybeAnnounceDefaultObject"></span>

`maybeAnnounceDefaultObject (lst, which, allResolved)`

[action.t](../file/action.t.html)\[[1700](../source/action.t.html#1700)\]

<div class="desc">

Announce a defaulted object list, if appropriate. We'll announce the
object if we have a single object in the given resolution list, it was
defaulted, and it hasn't yet been announced.

</div>

<span id="maybeAnnounceImplicit"></span>

`maybeAnnounceImplicit ( )`

[action.t](../file/action.t.html)\[[1540](../source/action.t.html#1540)\]

<div class="desc">

Maybe announce the action as an implied action.

</div>

<span id="maybeAnnounceMultiObject"></span>

`maybeAnnounceMultiObject (info, numberInList, whichObj)`

[action.t](../file/action.t.html)\[[1643](../source/action.t.html#1643)\]

<div class="desc">

announce a multi-action object, if appropriate

</div>

<span id="noMatch"></span>

`noMatch (msgObj, actor, txt)`

[en_us.t](../file/en_us.t.html)\[[8405](../source/en_us.t.html#8405)\]

<div class="desc">

Show the "noMatch" library message. For most verbs, we use the basic
"you can't see that here". Verbs that are mostly used with intangible
objects, such as LISTEN TO and SMELL, might want to override this to use
a less visually-oriented message.

</div>

<span id="notifyBeforeAfter"></span>

`notifyBeforeAfter (prop)`

[action.t](../file/action.t.html)\[[2160](../source/action.t.html#2160)\]

<div class="desc">

Call the beforeAction or afterAction method for each object in the
notification list.

</div>

<span id="objListPronoun"></span>

`objListPronoun (objList)`

[en_us.t](../file/en_us.t.html)\[[8183](../source/en_us.t.html#8183)\]

<div class="desc">

Return a string with the appropriate pronoun (objective form) for a list
of object matches, with the given resolved cardinality. This list is a
list of ResolveInfo objects.

</div>

<span id="preAnnounceActionObject"></span>

`preAnnounceActionObject (info, mainList, whichObj)`

[action.t](../file/action.t.html)\[[1744](../source/action.t.html#1744)\]

<div class="desc">

"Pre-announce" a common object for a command that might involve
iteration over other objects. For example, in "put all in box", the box
is common to all iterations of the command, so we would want to
preannounce it, if it needs to be announced at all, before the
iterations of the command.

We'll announce the object only if it's marked as defaulted or unclearly
disambiguated, and then only if the other list will be announcing its
objects as multi-action objects. However, we do not pre-announce
anything for a remapped action, because we'll show the full action
description for each individually announced object, so we don't need or
want a separate announcement for the group.

Returns true if we did any pre-announcing, nil otherwise. If we return
true, the caller should not re-announce this object during the
iteration, since our pre-announcement is common to all iterations.

</div>

<span id="recalcSenseContext"></span>

`recalcSenseContext ( )`

[action.t](../file/action.t.html)\[[1531](../source/action.t.html#1531)\]

<div class="desc">

Reset the message generation context for a sense change. This can be
called when something substantial happens in the midst of a command, and
we might need different message generation rules before and after the
change. For example, this is used when a non-player character moves from
one location to another, because the NPC might want to generate leaving
and arriving messages differently in the two locations.

</div>

<span id="repeatAction"></span>

`repeatAction (lastTargetActor, lastTargetActorPhrase, lastIssuingActor, countsAsIssuerTurn)`

[action.t](../file/action.t.html)\[[178](../source/action.t.html#178)\]

<div class="desc">

Repeat the action, for an AGAIN command.

</div>

<span id="resetAction"></span>

`resetAction ( )`

[action.t](../file/action.t.html)\[[169](../source/action.t.html#169)\]

<div class="desc">

Reset the action in preparation for re-execution. This should discard
any scoped context from any past execution of the command, such as
cached scope information.

</div>

<span id="resolveAction"></span>

`resolveAction (issuingActor, targetActor)`

[en_us.t](../file/en_us.t.html)\[[8149](../source/en_us.t.html#8149)\]

<div class="desc">

In the English grammar, all 'predicate' grammar definitions (which are
usually made via the VerbRule macro) are associated with Action match
tree objects; in fact, each 'predicate' grammar match tree is the
specific Action subclass associated with the grammar for the predicate.
This means that the Action associated with a grammar match is simply the
grammar match object itself. Hence, we can resolve the action for a
'predicate' match simply by returning the match itself: it is the Action
as well as the grammar match.

This approach ('grammar predicate' matches are based on Action
subclasses) works well for languages like English that encode the role
of each phrase in the word order of the sentence.

Languages that encode phrase roles using case markers or other devices
tend to be freer with word order. As a result, 'predicate' grammars for
such languages should generally not attempt to capture all possible word
orderings for a given action, but should instead take the complementary
approach of capturing the possible overall sentence structures
independently of verb phrases, and plug in a verb phrase as a component,
just like noun phrases plug into the English grammar. In these cases,
the match objects will NOT be Action subclasses; the Action objects will
instead be buried down deeper in the match tree. Hence, resolveAction()
must be defined on whatever class is used to construct 'predicate'
grammar matches, instead of on Action, since Action will not be a
'predicate' match.

</div>

<span id="resolvedObjectsInScope"></span>

`resolvedObjectsInScope ( )`

[action.t](../file/action.t.html)\[[925](../source/action.t.html#925)\]

<div class="desc">

Check that the resolved objects are all in scope. Returns true if so,
nil if not.

This routine is meant for use only for actions built programmatically
using setResolvedObjects(). In particular, we assume that we have only
one object in each slot. For normal parser-built actions, this check
isn't necessary, because the parser only resolves objects that are in
scope in the first place.

</div>

<span id="runBeforeNotifiers"></span>

`runBeforeNotifiers ( )`

[action.t](../file/action.t.html)\[[1507](../source/action.t.html#1507)\]

<div class="desc">

Run the "before" notifiers: this calls beforeAction on everything in
scope, and calls roomBeforeAction on the actor's containers.

</div>

<span id="saveActionForAgain"></span>

`saveActionForAgain (issuingActor, countsAsIssuerTurn, targetActor, targetActorPhrase)`

[action.t](../file/action.t.html)\[[1065](../source/action.t.html#1065)\]

<div class="desc">

If the command is repeatable, save it for use by 'again'.

</div>

<span id="setCurrentObjects"></span>

`setCurrentObjects (lst)`

[action.t](../file/action.t.html)\[[2275](../source/action.t.html#2275)\]

<div class="desc">

Set the current objects. This takes a list of the same form returned by
getCurrentObjects().

</div>

<span id="setImplicit"></span>

`setImplicit (msgProp)`

[action.t](../file/action.t.html)\[[299](../source/action.t.html#299)\]

<div class="desc">

Mark the command as implicit. 'msgProp' is the property (of
gLibMessages) to use to announce the implicit command.

</div>

<span id="setMessageParam"></span>

`setMessageParam (objName, obj)`

[action.t](../file/action.t.html)\[[590](../source/action.t.html#590)\]

<div class="desc">

Define an extra message-specific parameter. Message processors can use
this to add their own special parameters, so that they can refer to
parameters that aren't involved directly in the command. For example, a
message for "take \<dobj\>" might want to refer to the object containing
the direct object.

</div>

<span id="setMessageParams"></span>

`setMessageParams ([lst])`

[action.t](../file/action.t.html)\[[607](../source/action.t.html#607)\]

<div class="desc">

For convenience, this method allows setting any number of name/value
pairs for message parameters.

</div>

<span id="setNested"></span>

`setNested ( )`

[action.t](../file/action.t.html)\[[326](../source/action.t.html#326)\]

<div class="desc">

Mark the command as nested, noting the parent action (which we take as
the global current action).

</div>

<span id="setObjectMatches"></span>

`setObjectMatches ( )`

[action.t](../file/action.t.html)\[[913](../source/action.t.html#913)\]

<div class="desc">

Explicitly set the object match trees. This sets the pre-resolved
production match trees. The arguments are given in the order of their
roles in the action, using the same order that setResolvedObjects()
uses.

The arguments to this routine can either be match tree objects, which
we'll plug into our grammar tree in the respective roles exactly as
given; or they can be ResolveInfo objects giving the desired
resolutions, in which case we'll build the appropriate kind of
PreResolvedProd for each one. The types can be freely mixed.

</div>

<span id="setOriginalAction"></span>

`setOriginalAction (action)`

[action.t](../file/action.t.html)\[[363](../source/action.t.html#363)\]

<div class="desc">

Set the "original" action. An action with an original action is
effectively part of the original action for the purposes of its reported
results.

An action has an original action if it's a nested or replacement action
for an action.

</div>

<span id="setPronounOverride"></span>

`setPronounOverride (typ, val)`

[action.t](../file/action.t.html)\[[976](../source/action.t.html#976)\]

<div class="desc">

Set a special pronoun override. This creates a temporary pronoun
definition, which lasts as long as this action (and any nested actions).
The temporary definition overrides the normal meaning of the pronoun.

One example of where this is useful is in global action remapping cases
where the target actor changes in the course of the remapping. For
example, if we remap BOB, GIVE ME YOUR BOOK to ASK BOB FOR YOUR BOOK,
the YOUR qualifier should still refer to Bob even though the command is
no longer addressing Bob directly. This routine can be used in this case
to override the meaning of 'you' so that it refers to Bob.

</div>

<span id="setRemapped"></span>

`setRemapped (orig)`

[action.t](../file/action.t.html)\[[426](../source/action.t.html#426)\]

<div class="desc">

Mark the action as "remapped." This indicates that the action was
explicitly remapped to a different action during the remap() phase.

</div>

<span id="setResolvedObjects"></span>

`setResolvedObjects ( )`

[action.t](../file/action.t.html)\[[898](../source/action.t.html#898)\]

<div class="desc">

Explicitly set the resolved objects. This should be overridden in each
subclass for the number of objects specific to the action (a simple
transitive action takes one argument, an action with both a direct and
indirect object takes two arguments, and so on). The base action doesn't
have any objects at all, so this takes no arguments.

This method is used to set up an action to be performed
programmatically, rather than based on parsed input. Since there's no
parsed input in such cases, the objects are specified directly by the
programmatic caller.

</div>

<span id="spPrefix"></span>

`spPrefix (str)`

[en_us.t](../file/en_us.t.html)\[[8414](../source/en_us.t.html#8414)\]

<div class="desc">

add a space prefix/suffix to a string if the string is non-empty

</div>

<span id="spSuffix"></span>

`spSuffix (str)`

[en_us.t](../file/en_us.t.html)\[[8415](../source/en_us.t.html#8415)\]

<div class="desc">

*no description available*

</div>

<span id="synthMessageParam"></span>

`synthMessageParam (obj)`

[action.t](../file/action.t.html)\[[618](../source/action.t.html#618)\]

<div class="desc">

Synthesize a global message parameter name for the given object. We'll
store the association and return the synthesized name.

</div>

<span id="verifyAction"></span>

`verifyAction ( )`

[action.t](../file/action.t.html)\[[1824](../source/action.t.html#1824)\]

<div class="desc">

Verify the action. Action subclasses with one or more objects should
call object verification routines here. Returns a VerifyResultList with
the results, or nil if there are no verification results at all. A nil
return should be taken as success, not failure, because it means that we
found no objection to the command.

</div>

<span id="verifyHandlersExist"></span>

`verifyHandlersExist (objList, propList, result)`

[action.t](../file/action.t.html)\[[2120](../source/action.t.html#2120)\]

<div class="desc">

Verify that some sort of handling for this action is defined on at least
one of the given objects. If we have no handlers at all definfed, we'll
add an "illogical" status to the verification results to indicate that
the action is not defined on this object. This check provides a last
resort for verbs with no handling at all defined on the involved
objects, to ensure that the verb won't go completely unprocessed.

Each entry in objList is an object involved in the action. For each
entry in objList, there must be \*THREE\* entries in propList: a verify
property, a check property, and an action property. If any of these
three properties is defined on the corresponding object, we'll allow the
command to proceed. If we can find none of the given handler properties
on any of our objects, we'll add an "illogical" verify result.

</div>

<span id="whatObj"></span>

`whatObj (which)`

[en_us.t](../file/en_us.t.html)\[[8158](../source/en_us.t.html#8158)\]

<div class="desc">

Return the interrogative pronoun for a missing object in one of our
object roles. In most cases, this is simply "what", but for some
actions, "whom" is more appropriate (for example, the direct object of
"ask" is implicitly a person, so "whom" is most appropriate for this
role).

</div>

<span id="whatTranslate"></span>

`whatTranslate (txt)`

[en_us.t](../file/en_us.t.html)\[[8169](../source/en_us.t.html#8169)\]

<div class="desc">

Translate an interrogative word for whatObj. If the word is 'whom',
translate to the library message for 'whom'; this allows authors to use
'who' rather than 'whom' as the objective form of 'who', which sounds
less stuffy to many people.

</div>

<span id="withVerifyResults"></span>

`withVerifyResults (resultsSoFar, obj, func)`

[action.t](../file/action.t.html)\[[1861](../source/action.t.html#1861)\]

<div class="desc">

Invoke a callback with a verify results list in gVerifyResults, using
the existing results list or creating a new one if there is no existing
one. Returns the results list used.

</div>

<span id="zeroActionTime"></span>

`zeroActionTime ( )`

[action.t](../file/action.t.html)\[[1308](../source/action.t.html#1308)\]

<div class="desc">

Zero the action time in this action and any parent actions. This should
be used when a nested replacement action is to completely take over the
time-keeping responsibility for the entire turn; all containing actions
in this case are to take zero time, since the nested action is the only
part of the turn that will count for timing.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
