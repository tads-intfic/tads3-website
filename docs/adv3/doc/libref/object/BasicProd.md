---
layout: docs
---
<span class="title">BasicProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[500](../source/parser.t.html#500)\]

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



The basic production node base class. We'll use this as the base class
for all of our grammar rule match objects.

`class `**`BasicProd`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`BasicProd`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`BasicProd`**  
[`Action`](../object/Action.html)  
[`CommandActorAction`](../object/CommandActorAction.html)  
[`EventAction`](../object/EventAction.html)  
[`IAction`](../object/IAction.html)  
[`AgainAction`](../object/AgainAction.html)  
[`predicate(Again)`](../object/predicate(Again).html)  
[`ConvIAction`](../object/ConvIAction.html)  
[`GoodbyeAction`](../object/GoodbyeAction.html)  
[`predicate(Goodbye)`](../object/predicate(Goodbye).html)  
[`HelloAction`](../object/HelloAction.html)  
[`predicate(Hello)`](../object/predicate(Hello).html)  
[`NoAction`](../object/NoAction.html)  
[`predicate(No)`](../object/predicate(No).html)  
[`YesAction`](../object/YesAction.html)  
[`predicate(Yes)`](../object/predicate(Yes).html)  
[`DebugAction`](../object/DebugAction.html)  
[`ExitsAction`](../object/ExitsAction.html)  
[`predicate(Exits)`](../object/predicate(Exits).html)  
[`GetOutAction`](../object/GetOutAction.html)  
[`predicate(GetOut)`](../object/predicate(GetOut).html)  
[`GoBackAction`](../object/GoBackAction.html)  
[`predicate(GoBack)`](../object/predicate(GoBack).html)  
[`InventoryAction`](../object/InventoryAction.html)  
[`predicate(Inventory)`](../object/predicate(Inventory).html)  
[`InventoryTallAction`](../object/InventoryTallAction.html)  
[`predicate(InventoryTall)`](../object/predicate(InventoryTall).html)  
[`InventoryWideAction`](../object/InventoryWideAction.html)  
[`predicate(InventoryWide)`](../object/predicate(InventoryWide).html)  
[`JumpAction`](../object/JumpAction.html)  
[`predicate(Jump)`](../object/predicate(Jump).html)  
[`JumpOffIAction`](../object/JumpOffIAction.html)  
[`predicate(JumpOffI)`](../object/predicate(JumpOffI).html)  
[`LieAction`](../object/LieAction.html)  
[`predicate(Lie)`](../object/predicate(Lie).html)  
[`LiteralAction`](../object/LiteralAction.html)  
[`OopsAction`](../object/OopsAction.html)  
[`predicate(Oops)`](../object/predicate(Oops).html)  
[`SpecialTopicAction`](../object/SpecialTopicAction.html)  
[`predicate(SpecialTopic)`](../object/predicate(SpecialTopic).html)  
[`LookAction`](../object/LookAction.html)  
[`predicate(Look)`](../object/predicate(Look).html)  
[`NoteDarknessAction`](../object/NoteDarknessAction.html)  
[`OopsIAction`](../object/OopsIAction.html)  
[`predicate(OopsOnly)`](../object/predicate(OopsOnly).html)  
[`predicate(EmptySpecialTopic)`](../object/predicate(EmptySpecialTopic).html)  
[`SenseImplicitAction`](../object/SenseImplicitAction.html)  
[`ListenImplicitAction`](../object/ListenImplicitAction.html)  
[`predicate(ListenImplicit)`](../object/predicate(ListenImplicit).html)  
[`SmellImplicitAction`](../object/SmellImplicitAction.html)  
[`predicate(SmellImplicit)`](../object/predicate(SmellImplicit).html)  
[`SitAction`](../object/SitAction.html)  
[`predicate(Sit)`](../object/predicate(Sit).html)  
[`SleepAction`](../object/SleepAction.html)  
[`predicate(Sleep)`](../object/predicate(Sleep).html)  
[`StandAction`](../object/StandAction.html)  
[`predicate(Stand)`](../object/predicate(Stand).html)  
[`SystemAction`](../object/SystemAction.html)  
[`AboutAction`](../object/AboutAction.html)  
[`predicate(About)`](../object/predicate(About).html)  
[`CreditsAction`](../object/CreditsAction.html)  
[`predicate(Credits)`](../object/predicate(Credits).html)  
[`ExitsModeAction`](../object/ExitsModeAction.html)  
[`predicate(ExitsMode)`](../object/predicate(ExitsMode).html)  
[`FileOpAction`](../object/FileOpAction.html)  
[`RecordAction`](../object/RecordAction.html)  
[`predicate(Record)`](../object/predicate(Record).html)  
[`RecordEventsAction`](../object/RecordEventsAction.html)  
[`predicate(RecordEvents)`](../object/predicate(RecordEvents).html)  
[`RecordStringAction`](../object/RecordStringAction.html)  
[`predicate(RecordString)`](../object/predicate(RecordString).html)  
[`RecordEventsStringAction`](../object/RecordEventsStringAction.html)  
[`predicate(RecordEventsString)`](../object/predicate(RecordEventsString).html)  
[`ReplayAction`](../object/ReplayAction.html)  
[`ReplayStringAction`](../object/ReplayStringAction.html)  
[`predicate(ReplayQuiet)`](../object/predicate(ReplayQuiet).html)  
[`predicate(ReplayString)`](../object/predicate(ReplayString).html)  
[`SaveAction`](../object/SaveAction.html)  
[`predicate(Save)`](../object/predicate(Save).html)  
[`SaveStringAction`](../object/SaveStringAction.html)  
[`predicate(SaveString)`](../object/predicate(SaveString).html)  
[`ScriptAction`](../object/ScriptAction.html)  
[`predicate(Script)`](../object/predicate(Script).html)  
[`ScriptStringAction`](../object/ScriptStringAction.html)  
[`predicate(ScriptString)`](../object/predicate(ScriptString).html)  
[`FootnoteAction`](../object/FootnoteAction.html)  
[`predicate(Footnote)`](../object/predicate(Footnote).html)  
[`FootnotesAction`](../object/FootnotesAction.html)  
[`FootnotesFullAction`](../object/FootnotesFullAction.html)  
[`predicate(FootnotesFull)`](../object/predicate(FootnotesFull).html)  
[`FootnotesMediumAction`](../object/FootnotesMediumAction.html)  
[`predicate(FootnotesMedium)`](../object/predicate(FootnotesMedium).html)  
[`FootnotesOffAction`](../object/FootnotesOffAction.html)  
[`predicate(FootnotesOff)`](../object/predicate(FootnotesOff).html)  
[`FootnotesStatusAction`](../object/FootnotesStatusAction.html)  
[`predicate(FootnotesStatus)`](../object/predicate(FootnotesStatus).html)  
[`FullScoreAction`](../object/FullScoreAction.html)  
[`predicate(FullScore)`](../object/predicate(FullScore).html)  
[`HintAction`](../object/HintAction.html)  
[`predicate(Hint)`](../object/predicate(Hint).html)  
[`HintsOffAction`](../object/HintsOffAction.html)  
[`predicate(HintsOff)`](../object/predicate(HintsOff).html)  
[`InstructionsAction`](../object/InstructionsAction.html)  
[`predicate(instructions)`](../object/predicate(instructions).html)  
[`NotifyAction`](../object/NotifyAction.html)  
[`predicate(Notify)`](../object/predicate(Notify).html)  
[`NotifyOffAction`](../object/NotifyOffAction.html)  
[`predicate(NotifyOff)`](../object/predicate(NotifyOff).html)  
[`NotifyOnAction`](../object/NotifyOnAction.html)  
[`predicate(NotifyOn)`](../object/predicate(NotifyOn).html)  
[`PauseAction`](../object/PauseAction.html)  
[`predicate(Pause)`](../object/predicate(Pause).html)  
[`QuitAction`](../object/QuitAction.html)  
[`predicate(Quit)`](../object/predicate(Quit).html)  
[`RecordOffAction`](../object/RecordOffAction.html)  
[`predicate(RecordOff)`](../object/predicate(RecordOff).html)  
[`RestartAction`](../object/RestartAction.html)  
[`predicate(Restart)`](../object/predicate(Restart).html)  
[`RestoreAction`](../object/RestoreAction.html)  
[`predicate(Restore)`](../object/predicate(Restore).html)  
[`RestoreStringAction`](../object/RestoreStringAction.html)  
[`predicate(RestoreString)`](../object/predicate(RestoreString).html)  
[`RestoreDefaultsAction`](../object/RestoreDefaultsAction.html)  
[`predicate(RestoreDefaults)`](../object/predicate(RestoreDefaults).html)  
[`SaveDefaultsAction`](../object/SaveDefaultsAction.html)  
[`predicate(SaveDefaults)`](../object/predicate(SaveDefaults).html)  
[`ScoreAction`](../object/ScoreAction.html)  
[`predicate(Score)`](../object/predicate(Score).html)  
[`ScriptOffAction`](../object/ScriptOffAction.html)  
[`predicate(ScriptOff)`](../object/predicate(ScriptOff).html)  
[`TerseAction`](../object/TerseAction.html)  
[`predicate(Terse)`](../object/predicate(Terse).html)  
[`TipModeAction`](../object/TipModeAction.html)  
[`predicate(TipsOff)`](../object/predicate(TipsOff).html)  
[`predicate(TipsOn)`](../object/predicate(TipsOn).html)  
[`TopicsAction`](../object/TopicsAction.html)  
[`predicate(Topics)`](../object/predicate(Topics).html)  
[`UndoAction`](../object/UndoAction.html)  
[`predicate(Undo)`](../object/predicate(Undo).html)  
[`VerboseAction`](../object/VerboseAction.html)  
[`predicate(Verbose)`](../object/predicate(Verbose).html)  
[`VersionAction`](../object/VersionAction.html)  
[`predicate(Version)`](../object/predicate(Version).html)  
[`TopicAction`](../object/TopicAction.html)  
[`TravelAction`](../object/TravelAction.html)  
[`AftAction`](../object/AftAction.html)  
[`DownAction`](../object/DownAction.html)  
[`EastAction`](../object/EastAction.html)  
[`ForeAction`](../object/ForeAction.html)  
[`InAction`](../object/InAction.html)  
[`predicate(In)`](../object/predicate(In).html)  
[`NorthAction`](../object/NorthAction.html)  
[`NortheastAction`](../object/NortheastAction.html)  
[`NorthwestAction`](../object/NorthwestAction.html)  
[`OutAction`](../object/OutAction.html)  
[`predicate(Out)`](../object/predicate(Out).html)  
[`PortAction`](../object/PortAction.html)  
[`predicate(Port)`](../object/predicate(Port).html)  
[`predicate(Travel)`](../object/predicate(Travel).html)  
[`SouthAction`](../object/SouthAction.html)  
[`SoutheastAction`](../object/SoutheastAction.html)  
[`SouthwestAction`](../object/SouthwestAction.html)  
[`StarboardAction`](../object/StarboardAction.html)  
[`predicate(Starboard)`](../object/predicate(Starboard).html)  
[`TravelDirAction`](../object/TravelDirAction.html)  
[`UpAction`](../object/UpAction.html)  
[`WestAction`](../object/WestAction.html)  
[`VagueTravelAction`](../object/VagueTravelAction.html)  
[`predicate(VagueTravel)`](../object/predicate(VagueTravel).html)  
[`WaitAction`](../object/WaitAction.html)  
[`predicate(Wait)`](../object/predicate(Wait).html)  
[`YellAction`](../object/YellAction.html)  
[`predicate(Yell)`](../object/predicate(Yell).html)  
[`TAction`](../object/TAction.html)  
[`AttackAction`](../object/AttackAction.html)  
[`predicate(Attack)`](../object/predicate(Attack).html)  
[`BoardAction`](../object/BoardAction.html)  
[`predicate(Board)`](../object/predicate(Board).html)  
[`BreakAction`](../object/BreakAction.html)  
[`predicate(Break)`](../object/predicate(Break).html)  
[`BurnAction`](../object/BurnAction.html)  
[`predicate(Burn)`](../object/predicate(Burn).html)  
[`CleanAction`](../object/CleanAction.html)  
[`predicate(Clean)`](../object/predicate(Clean).html)  
[`ClimbAction`](../object/ClimbAction.html)  
[`predicate(Climb)`](../object/predicate(Climb).html)  
[`ClimbDownAction`](../object/ClimbDownAction.html)  
[`predicate(ClimbDown)`](../object/predicate(ClimbDown).html)  
[`predicate(ClimbDownWhat)`](../object/predicate(ClimbDownWhat).html)  
[`ClimbUpAction`](../object/ClimbUpAction.html)  
[`predicate(ClimbUp)`](../object/predicate(ClimbUp).html)  
[`predicate(ClimbUpWhat)`](../object/predicate(ClimbUpWhat).html)  
[`CloseAction`](../object/CloseAction.html)  
[`predicate(Close)`](../object/predicate(Close).html)  
[`ConsultAction`](../object/ConsultAction.html)  
[`predicate(Consult)`](../object/predicate(Consult).html)  
[`CutAction`](../object/CutAction.html)  
[`DetachAction`](../object/DetachAction.html)  
[`predicate(Detach)`](../object/predicate(Detach).html)  
[`DigAction`](../object/DigAction.html)  
[`predicate(Dig)`](../object/predicate(Dig).html)  
[`DoffAction`](../object/DoffAction.html)  
[`predicate(Doff)`](../object/predicate(Doff).html)  
[`DrinkAction`](../object/DrinkAction.html)  
[`predicate(Drink)`](../object/predicate(Drink).html)  
[`DropAction`](../object/DropAction.html)  
[`predicate(Drop)`](../object/predicate(Drop).html)  
[`EatAction`](../object/EatAction.html)  
[`predicate(Eat)`](../object/predicate(Eat).html)  
[`EnterAction`](../object/EnterAction.html)  
[`predicate(Enter)`](../object/predicate(Enter).html)  
[`ExamineAction`](../object/ExamineAction.html)  
[`predicate(Examine)`](../object/predicate(Examine).html)  
[`ExtinguishAction`](../object/ExtinguishAction.html)  
[`predicate(Extinguish)`](../object/predicate(Extinguish).html)  
[`FastenAction`](../object/FastenAction.html)  
[`predicate(Fasten)`](../object/predicate(Fasten).html)  
[`FeelAction`](../object/FeelAction.html)  
[`predicate(Feel)`](../object/predicate(Feel).html)  
[`FlipAction`](../object/FlipAction.html)  
[`predicate(Flip)`](../object/predicate(Flip).html)  
[`FollowAction`](../object/FollowAction.html)  
[`predicate(Follow)`](../object/predicate(Follow).html)  
[`GetOffOfAction`](../object/GetOffOfAction.html)  
[`predicate(GetOffOf)`](../object/predicate(GetOffOf).html)  
[`GetOutOfAction`](../object/GetOutOfAction.html)  
[`predicate(GetOutOf)`](../object/predicate(GetOutOf).html)  
[`GoThroughAction`](../object/GoThroughAction.html)  
[`predicate(GoThrough)`](../object/predicate(GoThrough).html)  
[`JumpOffAction`](../object/JumpOffAction.html)  
[`predicate(JumpOff)`](../object/predicate(JumpOff).html)  
[`JumpOverAction`](../object/JumpOverAction.html)  
[`predicate(JumpOver)`](../object/predicate(JumpOver).html)  
[`KissAction`](../object/KissAction.html)  
[`predicate(Kiss)`](../object/predicate(Kiss).html)  
[`LieOnAction`](../object/LieOnAction.html)  
[`predicate(LieOn)`](../object/predicate(LieOn).html)  
[`LightAction`](../object/LightAction.html)  
[`predicate(Light)`](../object/predicate(Light).html)  
[`ListenToAction`](../object/ListenToAction.html)  
[`predicate(ListenTo)`](../object/predicate(ListenTo).html)  
[`LiteralTAction`](../object/LiteralTAction.html)  
[`EnterOnAction`](../object/EnterOnAction.html)  
[`predicate(EnterOn)`](../object/predicate(EnterOn).html)  
[`predicate(EnterOnWhat)`](../object/predicate(EnterOnWhat).html)  
[`SetToAction`](../object/SetToAction.html)  
[`predicate(SetTo)`](../object/predicate(SetTo).html)  
[`TurnToAction`](../object/TurnToAction.html)  
[`predicate(TurnTo)`](../object/predicate(TurnTo).html)  
[`TypeLiteralOnAction`](../object/TypeLiteralOnAction.html)  
[`predicate(TypeLiteralOn)`](../object/predicate(TypeLiteralOn).html)  
[`predicate(TypeLiteralOnWhat)`](../object/predicate(TypeLiteralOnWhat).html)  
[`LockAction`](../object/LockAction.html)  
[`predicate(Lock)`](../object/predicate(Lock).html)  
[`LookBehindAction`](../object/LookBehindAction.html)  
[`predicate(LookBehind)`](../object/predicate(LookBehind).html)  
[`LookInAction`](../object/LookInAction.html)  
[`predicate(LookIn)`](../object/predicate(LookIn).html)  
[`LookThroughAction`](../object/LookThroughAction.html)  
[`predicate(LookThrough)`](../object/predicate(LookThrough).html)  
[`LookUnderAction`](../object/LookUnderAction.html)  
[`predicate(LookUnder)`](../object/predicate(LookUnder).html)  
[`MoveAction`](../object/MoveAction.html)  
[`predicate(Move)`](../object/predicate(Move).html)  
[`OpenAction`](../object/OpenAction.html)  
[`predicate(Open)`](../object/predicate(Open).html)  
[`PlugInAction`](../object/PlugInAction.html)  
[`predicate(PlugIn)`](../object/predicate(PlugIn).html)  
[`PourAction`](../object/PourAction.html)  
[`predicate(Pour)`](../object/predicate(Pour).html)  
[`PullAction`](../object/PullAction.html)  
[`predicate(Pull)`](../object/predicate(Pull).html)  
[`PushAction`](../object/PushAction.html)  
[`predicate(Push)`](../object/predicate(Push).html)  
[`PushTravelAction`](../object/PushTravelAction.html)  
[`PushTravelDirAction`](../object/PushTravelDirAction.html)  
[`predicate(PushTravelDir)`](../object/predicate(PushTravelDir).html)  
[`PushAftAction`](../object/PushAftAction.html)  
[`PushDownAction`](../object/PushDownAction.html)  
[`PushEastAction`](../object/PushEastAction.html)  
[`PushForeAction`](../object/PushForeAction.html)  
[`PushInAction`](../object/PushInAction.html)  
[`PushNorthAction`](../object/PushNorthAction.html)  
[`PushNortheastAction`](../object/PushNortheastAction.html)  
[`PushNorthwestAction`](../object/PushNorthwestAction.html)  
[`PushOutAction`](../object/PushOutAction.html)  
[`PushPortAction`](../object/PushPortAction.html)  
[`PushSouthAction`](../object/PushSouthAction.html)  
[`PushSoutheastAction`](../object/PushSoutheastAction.html)  
[`PushSouthwestAction`](../object/PushSouthwestAction.html)  
[`PushStarboardAction`](../object/PushStarboardAction.html)  
[`PushUpAction`](../object/PushUpAction.html)  
[`PushWestAction`](../object/PushWestAction.html)  
[`PushTravelViaIobjAction`](../object/PushTravelViaIobjAction.html)  
[`PushTravelClimbDownAction`](../object/PushTravelClimbDownAction.html)  
[`predicate(PushTravelClimbDown)`](../object/predicate(PushTravelClimbDown).html)  
[`PushTravelClimbUpAction`](../object/PushTravelClimbUpAction.html)  
[`predicate(PushTravelClimbUp)`](../object/predicate(PushTravelClimbUp).html)  
[`PushTravelEnterAction`](../object/PushTravelEnterAction.html)  
[`predicate(PushTravelEnter)`](../object/predicate(PushTravelEnter).html)  
[`PushTravelGetOutOfAction`](../object/PushTravelGetOutOfAction.html)  
[`predicate(PushTravelGetOutOf)`](../object/predicate(PushTravelGetOutOf).html)  
[`PushTravelThroughAction`](../object/PushTravelThroughAction.html)  
[`predicate(PushTravelThrough)`](../object/predicate(PushTravelThrough).html)  
[`ReadAction`](../object/ReadAction.html)  
[`predicate(Read)`](../object/predicate(Read).html)  
[`RemoveAction`](../object/RemoveAction.html)  
[`predicate(Remove)`](../object/predicate(Remove).html)  
[`ScrewAction`](../object/ScrewAction.html)  
[`predicate(Screw)`](../object/predicate(Screw).html)  
[`SearchAction`](../object/SearchAction.html)  
[`predicate(Search)`](../object/predicate(Search).html)  
[`SetAction`](../object/SetAction.html)  
[`predicate(Set)`](../object/predicate(Set).html)  
[`SitOnAction`](../object/SitOnAction.html)  
[`predicate(SitOn)`](../object/predicate(SitOn).html)  
[`SmellAction`](../object/SmellAction.html)  
[`predicate(Smell)`](../object/predicate(Smell).html)  
[`StandOnAction`](../object/StandOnAction.html)  
[`predicate(StandOn)`](../object/predicate(StandOn).html)  
[`StrikeAction`](../object/StrikeAction.html)  
[`predicate(Strike)`](../object/predicate(Strike).html)  
[`SwitchAction`](../object/SwitchAction.html)  
[`predicate(Switch)`](../object/predicate(Switch).html)  
[`TakeAction`](../object/TakeAction.html)  
[`predicate(Take)`](../object/predicate(Take).html)  
[`TalkToAction`](../object/TalkToAction.html)  
[`predicate(TalkTo)`](../object/predicate(TalkTo).html)  
[`predicate(TalkToWhat)`](../object/predicate(TalkToWhat).html)  
[`TasteAction`](../object/TasteAction.html)  
[`predicate(Taste)`](../object/predicate(Taste).html)  
[`ThrowAction`](../object/ThrowAction.html)  
[`predicate(Throw)`](../object/predicate(Throw).html)  
[`ThrowDirAction`](../object/ThrowDirAction.html)  
[`predicate(ThrowDir)`](../object/predicate(ThrowDir).html)  
[`predicate(ThrowDirDown)`](../object/predicate(ThrowDirDown).html)  
[`TIAction`](../object/TIAction.html)  
[`AttachToAction`](../object/AttachToAction.html)  
[`predicate(AttachTo)`](../object/predicate(AttachTo).html)  
[`predicate(AttachToWhat)`](../object/predicate(AttachToWhat).html)  
[`AttackWithAction`](../object/AttackWithAction.html)  
[`predicate(AttackWith)`](../object/predicate(AttackWith).html)  
[`BurnWithAction`](../object/BurnWithAction.html)  
[`predicate(BurnWith)`](../object/predicate(BurnWith).html)  
[`CleanWithAction`](../object/CleanWithAction.html)  
[`predicate(CleanWith)`](../object/predicate(CleanWith).html)  
[`CutWithAction`](../object/CutWithAction.html)  
[`predicate(CutWith)`](../object/predicate(CutWith).html)  
[`predicate(CutWithWhat)`](../object/predicate(CutWithWhat).html)  
[`DetachFromAction`](../object/DetachFromAction.html)  
[`predicate(DetachFrom)`](../object/predicate(DetachFrom).html)  
[`DigWithAction`](../object/DigWithAction.html)  
[`predicate(DigWith)`](../object/predicate(DigWith).html)  
[`FastenToAction`](../object/FastenToAction.html)  
[`predicate(FastenTo)`](../object/predicate(FastenTo).html)  
[`GiveToAction`](../object/GiveToAction.html)  
[`predicate(GiveTo)`](../object/predicate(GiveTo).html)  
[`predicate(GiveToType2)`](../object/predicate(GiveToType2).html)  
[`predicate(GiveToWhom)`](../object/predicate(GiveToWhom).html)  
[`LockWithAction`](../object/LockWithAction.html)  
[`predicate(LockWith)`](../object/predicate(LockWith).html)  
[`MoveToAction`](../object/MoveToAction.html)  
[`predicate(MoveTo)`](../object/predicate(MoveTo).html)  
[`MoveWithAction`](../object/MoveWithAction.html)  
[`predicate(MoveWith)`](../object/predicate(MoveWith).html)  
[`PlugIntoAction`](../object/PlugIntoAction.html)  
[`predicate(PlugInto)`](../object/predicate(PlugInto).html)  
[`predicate(PlugIntoWhat)`](../object/predicate(PlugIntoWhat).html)  
[`PourIntoAction`](../object/PourIntoAction.html)  
[`predicate(PourInto)`](../object/predicate(PourInto).html)  
[`PourOntoAction`](../object/PourOntoAction.html)  
[`predicate(PourOnto)`](../object/predicate(PourOnto).html)  
[`PushTravelViaIobjAction`](../object/PushTravelViaIobjAction.html)  
[`PushTravelClimbDownAction`](../object/PushTravelClimbDownAction.html)  
[`predicate(PushTravelClimbDown)`](../object/predicate(PushTravelClimbDown).html)  
[`PushTravelClimbUpAction`](../object/PushTravelClimbUpAction.html)  
[`predicate(PushTravelClimbUp)`](../object/predicate(PushTravelClimbUp).html)  
[`PushTravelEnterAction`](../object/PushTravelEnterAction.html)  
[`predicate(PushTravelEnter)`](../object/predicate(PushTravelEnter).html)  
[`PushTravelGetOutOfAction`](../object/PushTravelGetOutOfAction.html)  
[`predicate(PushTravelGetOutOf)`](../object/predicate(PushTravelGetOutOf).html)  
[`PushTravelThroughAction`](../object/PushTravelThroughAction.html)  
[`predicate(PushTravelThrough)`](../object/predicate(PushTravelThrough).html)  
[`PutBehindAction`](../object/PutBehindAction.html)  
[`predicate(PutBehind)`](../object/predicate(PutBehind).html)  
[`PutInAction`](../object/PutInAction.html)  
[`predicate(PutIn)`](../object/predicate(PutIn).html)  
[`predicate(PutInWhat)`](../object/predicate(PutInWhat).html)  
[`PutOnAction`](../object/PutOnAction.html)  
[`predicate(PutOn)`](../object/predicate(PutOn).html)  
[`PutUnderAction`](../object/PutUnderAction.html)  
[`predicate(PutUnder)`](../object/predicate(PutUnder).html)  
[`ScrewWithAction`](../object/ScrewWithAction.html)  
[`predicate(ScrewWith)`](../object/predicate(ScrewWith).html)  
[`ShowToAction`](../object/ShowToAction.html)  
[`predicate(ShowTo)`](../object/predicate(ShowTo).html)  
[`predicate(ShowToType2)`](../object/predicate(ShowToType2).html)  
[`predicate(ShowToWhom)`](../object/predicate(ShowToWhom).html)  
[`TakeFromAction`](../object/TakeFromAction.html)  
[`predicate(TakeFrom)`](../object/predicate(TakeFrom).html)  
[`ThrowAtAction`](../object/ThrowAtAction.html)  
[`predicate(ThrowAt)`](../object/predicate(ThrowAt).html)  
[`ThrowToAction`](../object/ThrowToAction.html)  
[`predicate(ThrowTo)`](../object/predicate(ThrowTo).html)  
[`predicate(ThrowToType2)`](../object/predicate(ThrowToType2).html)  
[`TurnWithAction`](../object/TurnWithAction.html)  
[`predicate(TurnWith)`](../object/predicate(TurnWith).html)  
[`UnfastenFromAction`](../object/UnfastenFromAction.html)  
[`predicate(UnfastenFrom)`](../object/predicate(UnfastenFrom).html)  
[`UnlockWithAction`](../object/UnlockWithAction.html)  
[`predicate(UnlockWith)`](../object/predicate(UnlockWith).html)  
[`UnplugFromAction`](../object/UnplugFromAction.html)  
[`predicate(UnplugFrom)`](../object/predicate(UnplugFrom).html)  
[`UnscrewWithAction`](../object/UnscrewWithAction.html)  
[`predicate(UnscrewWith)`](../object/predicate(UnscrewWith).html)  
[`TopicTAction`](../object/TopicTAction.html)  
[`AskVagueAction`](../object/AskVagueAction.html)  
[`predicate(AskVague)`](../object/predicate(AskVague).html)  
[`predicate(TellVague)`](../object/predicate(TellVague).html)  
[`ConsultAboutAction`](../object/ConsultAboutAction.html)  
[`predicate(ConsultAbout)`](../object/predicate(ConsultAbout).html)  
[`predicate(ConsultWhatAbout)`](../object/predicate(ConsultWhatAbout).html)  
[`ConvTopicTAction`](../object/ConvTopicTAction.html)  
[`AskAboutAction`](../object/AskAboutAction.html)  
[`predicate(AskAbout)`](../object/predicate(AskAbout).html)  
[`predicate(AskAboutImplicit)`](../object/predicate(AskAboutImplicit).html)  
[`predicate(AskAboutWhat)`](../object/predicate(AskAboutWhat).html)  
[`AskForAction`](../object/AskForAction.html)  
[`predicate(AskFor)`](../object/predicate(AskFor).html)  
[`predicate(AskWhomFor)`](../object/predicate(AskWhomFor).html)  
[`TellAboutAction`](../object/TellAboutAction.html)  
[`predicate(TellAbout)`](../object/predicate(TellAbout).html)  
[`predicate(TellAboutImplicit)`](../object/predicate(TellAboutImplicit).html)  
[`predicate(TellAboutWhat)`](../object/predicate(TellAboutWhat).html)  
[`TellVagueAction`](../object/TellVagueAction.html)  
[`TravelViaAction`](../object/TravelViaAction.html)  
[`EnTravelVia`](../object/EnTravelVia.html)  
[`TurnAction`](../object/TurnAction.html)  
[`predicate(Turn)`](../object/predicate(Turn).html)  
[`TurnOffAction`](../object/TurnOffAction.html)  
[`predicate(TurnOff)`](../object/predicate(TurnOff).html)  
[`TurnOnAction`](../object/TurnOnAction.html)  
[`predicate(TurnOn)`](../object/predicate(TurnOn).html)  
[`TypeOnAction`](../object/TypeOnAction.html)  
[`predicate(TypeOn)`](../object/predicate(TypeOn).html)  
[`UnfastenAction`](../object/UnfastenAction.html)  
[`predicate(Unfasten)`](../object/predicate(Unfasten).html)  
[`UnlockAction`](../object/UnlockAction.html)  
[`predicate(Unlock)`](../object/predicate(Unlock).html)  
[`UnplugAction`](../object/UnplugAction.html)  
[`predicate(Unplug)`](../object/predicate(Unplug).html)  
[`UnscrewAction`](../object/UnscrewAction.html)  
[`predicate(Unscrew)`](../object/predicate(Unscrew).html)  
[`WearAction`](../object/WearAction.html)  
[`predicate(Wear)`](../object/predicate(Wear).html)  
[`commandOnlyConjunction(nonSentenceEnding)`](../object/commandOnlyConjunction(nonSentenceEnding).html)  
[`commandOnlyConjunction(sentenceEnding)`](../object/commandOnlyConjunction(sentenceEnding).html)  
[`commandOrNounConjunction(main)`](../object/commandOrNounConjunction(main).html)  
[`CommandProd`](../object/CommandProd.html)  
[`CommandProdWithActor`](../object/CommandProdWithActor.html)  
[`FirstCommandProdWithActor`](../object/FirstCommandProdWithActor.html)  
[`actorBadCommandPhrase(main)`](../object/actorBadCommandPhrase(main).html)  
[`firstCommandPhrase(askTellActorTo)`](../object/firstCommandPhrase(askTellActorTo).html)  
[`firstCommandPhrase(withActor)`](../object/firstCommandPhrase(withActor).html)  
[`CommandProdWithAmbiguousConj`](../object/CommandProdWithAmbiguousConj.html)  
[`commandPhrase(ambiguousConj)`](../object/commandPhrase(ambiguousConj).html)  
[`CommandProdWithDefiniteConj`](../object/CommandProdWithDefiniteConj.html)  
[`commandPhrase(definiteConj)`](../object/commandPhrase(definiteConj).html)  
[`FirstCommandProd`](../object/FirstCommandProd.html)  
[`firstCommandPhrase(commandOnly)`](../object/firstCommandPhrase(commandOnly).html)  
[`FirstCommandProdWithActor`](../object/FirstCommandProdWithActor.html)  
[`actorBadCommandPhrase(main)`](../object/actorBadCommandPhrase(main).html)  
[`firstCommandPhrase(askTellActorTo)`](../object/firstCommandPhrase(askTellActorTo).html)  
[`firstCommandPhrase(withActor)`](../object/firstCommandPhrase(withActor).html)  
[`DirectionProd`](../object/DirectionProd.html)  
[`directionName(aft)`](../object/directionName(aft).html)  
[`directionName(down)`](../object/directionName(down).html)  
[`directionName(east)`](../object/directionName(east).html)  
[`directionName(fore)`](../object/directionName(fore).html)  
[`directionName(in)`](../object/directionName(in).html)  
[`directionName(north)`](../object/directionName(north).html)  
[`directionName(northeast)`](../object/directionName(northeast).html)  
[`directionName(northwest)`](../object/directionName(northwest).html)  
[`directionName(out)`](../object/directionName(out).html)  
[`directionName(port)`](../object/directionName(port).html)  
[`directionName(south)`](../object/directionName(south).html)  
[`directionName(southeast)`](../object/directionName(southeast).html)  
[`directionName(southwest)`](../object/directionName(southwest).html)  
[`directionName(starboard)`](../object/directionName(starboard).html)  
[`directionName(up)`](../object/directionName(up).html)  
[`directionName(west)`](../object/directionName(west).html)  
[`DisambigProd`](../object/DisambigProd.html)  
[`disambigList(list)`](../object/disambigList(list).html)  
[`disambigList(single)`](../object/disambigList(single).html)  
[`DisambigOrdProd`](../object/DisambigOrdProd.html)  
[`disambigListItem(ordinal)`](../object/disambigListItem(ordinal).html)  
[`disambigOrdinalList(head)`](../object/disambigOrdinalList(head).html)  
[`disambigOrdinalList(tail)`](../object/disambigOrdinalList(tail).html)  
[`disambigPhrase(all)`](../object/disambigPhrase(all).html)  
[`disambigPhrase(any)`](../object/disambigPhrase(any).html)  
[`disambigPhrase(both)`](../object/disambigPhrase(both).html)  
[`disambigPhrase(list)`](../object/disambigPhrase(list).html)  
[`disambigPhrase(ordinalList)`](../object/disambigPhrase(ordinalList).html)  
[`DisambigPossessiveProd`](../object/DisambigPossessiveProd.html)  
[`disambigListItem(possessive)`](../object/disambigListItem(possessive).html)  
[`DisambigVocabProd`](../object/DisambigVocabProd.html)  
[`disambigListItem(noun)`](../object/disambigListItem(noun).html)  
[`disambigListItem(plural)`](../object/disambigListItem(plural).html)  
[`EverythingProd`](../object/EverythingProd.html)  
[`completeNounPhraseWithAll(main)`](../object/completeNounPhraseWithAll(main).html)  
[`ExceptListProd`](../object/ExceptListProd.html)  
[`exceptList(list)`](../object/exceptList(list).html)  
[`exceptList(single)`](../object/exceptList(single).html)  
[`exceptNounPhrase(singleComplete)`](../object/exceptNounPhrase(singleComplete).html)  
[`LiteralProd`](../object/LiteralProd.html)  
[`EmptyLiteralPhraseProd`](../object/EmptyLiteralPhraseProd.html)  
[`literalPhrase(empty)`](../object/literalPhrase(empty).html)  
[`literalPhrase(miscList)`](../object/literalPhrase(miscList).html)  
[`literalPhrase(string)`](../object/literalPhrase(string).html)  
[`quotedStringPhrase(main)`](../object/quotedStringPhrase(main).html)  
[`mainDisambigPhrase(main)`](../object/mainDisambigPhrase(main).html)  
[`nounConjunction(main)`](../object/nounConjunction(main).html)  
[`NounListProd`](../object/NounListProd.html)  
[`nonTerminalNounMultiList(multi)`](../object/nonTerminalNounMultiList(multi).html)  
[`nonTerminalNounMultiList(pair)`](../object/nonTerminalNounMultiList(pair).html)  
[`nounList(list)`](../object/nounList(list).html)  
[`nounList(nonTerminal)`](../object/nounList(nonTerminal).html)  
[`nounList(terminal)`](../object/nounList(terminal).html)  
[`nounMultiList(multi)`](../object/nounMultiList(multi).html)  
[`nounMultiList(nonterminal)`](../object/nounMultiList(nonterminal).html)  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`ButProd`](../object/ButProd.html)  
[`EverythingButProd`](../object/EverythingButProd.html)  
[`terminalNounPhrase(allBut)`](../object/terminalNounPhrase(allBut).html)  
[`IndefiniteNounButProd`](../object/IndefiniteNounButProd.html)  
[`terminalNounPhrase(anyBut)`](../object/terminalNounPhrase(anyBut).html)  
[`ListButProd`](../object/ListButProd.html)  
[`terminalNounPhrase(pluralExcept)`](../object/terminalNounPhrase(pluralExcept).html)  
[`completeNounPhrase(miscPrep)`](../object/completeNounPhrase(miscPrep).html)  
[`DefiniteNounProd`](../object/DefiniteNounProd.html)  
[`BasicPossessiveProd`](../object/BasicPossessiveProd.html)  
[`ButPossessiveProd`](../object/ButPossessiveProd.html)  
[`exceptNounPhrase(singlePossessive)`](../object/exceptNounPhrase(singlePossessive).html)  
[`DisambigPossessiveProd`](../object/DisambigPossessiveProd.html)  
[`disambigListItem(possessive)`](../object/disambigListItem(possessive).html)  
[`PossessiveNounProd`](../object/PossessiveNounProd.html)  
[`qualifiedSingularNounPhrase(possessive)`](../object/qualifiedSingularNounPhrase(possessive).html)  
[`PossessivePluralProd`](../object/PossessivePluralProd.html)  
[`explicitDetPluralNounPhrase(possessive)`](../object/explicitDetPluralNounPhrase(possessive).html)  
[`explicitDetPluralOnlyNounPhrase(possessive)`](../object/explicitDetPluralOnlyNounPhrase(possessive).html)  
[`ContainerNounPhraseProd`](../object/ContainerNounPhraseProd.html)  
[`indetPluralNounPhrase(locational)`](../object/indetPluralNounPhrase(locational).html)  
[`indetPluralOnlyNounPhrase(locational)`](../object/indetPluralOnlyNounPhrase(locational).html)  
[`indetSingularNounPhrase(locational)`](../object/indetSingularNounPhrase(locational).html)  
[`PreResolvedAmbigProd`](../object/PreResolvedAmbigProd.html)  
[`qualifiedSingularNounPhrase(definite)`](../object/qualifiedSingularNounPhrase(definite).html)  
[`VagueContainerNounPhraseProd`](../object/VagueContainerNounPhraseProd.html)  
[`AllInContainerNounPhraseProd`](../object/AllInContainerNounPhraseProd.html)  
[`qualifiedPluralNounPhrase(theOnesIn)`](../object/qualifiedPluralNounPhrase(theOnesIn).html)  
[`VagueContainerDefiniteNounPhraseProd`](../object/VagueContainerDefiniteNounPhraseProd.html)  
[`qualifiedSingularNounPhrase(theOneIn)`](../object/qualifiedSingularNounPhrase(theOneIn).html)  
[`VagueContainerIndefiniteNounPhraseProd`](../object/VagueContainerIndefiniteNounPhraseProd.html)  
[`qualifiedSingularNounPhrase(anyOneIn)`](../object/qualifiedSingularNounPhrase(anyOneIn).html)  
[`EmptyNounPhraseProd`](../object/EmptyNounPhraseProd.html)  
[`ImpliedActorNounPhraseProd`](../object/ImpliedActorNounPhraseProd.html)  
[`nounList(empty)`](../object/nounList(empty).html)  
[`singleNoun(empty)`](../object/singleNoun(empty).html)  
[`IndefiniteNounProd`](../object/IndefiniteNounProd.html)  
[`ArbitraryNounProd`](../object/ArbitraryNounProd.html)  
[`qualifiedSingularNounPhrase(anyPlural)`](../object/qualifiedSingularNounPhrase(anyPlural).html)  
[`qualifiedSingularNounPhrase(arbitrary)`](../object/qualifiedSingularNounPhrase(arbitrary).html)  
[`qualifiedSingularNounPhrase(indefinite)`](../object/qualifiedSingularNounPhrase(indefinite).html)  
[`LayeredNounPhraseProd`](../object/LayeredNounPhraseProd.html)  
[`completeNounPhrase(main)`](../object/completeNounPhrase(main).html)  
[`completeNounPhraseWithoutAll(qualified)`](../object/completeNounPhraseWithoutAll(qualified).html)  
[`detPluralNounPhrase(main)`](../object/detPluralNounPhrase(main).html)  
[`detPluralOnlyNounPhrase(main)`](../object/detPluralOnlyNounPhrase(main).html)  
[`indetPluralNounPhrase(basic)`](../object/indetPluralNounPhrase(basic).html)  
[`indetPluralOnlyNounPhrase(basic)`](../object/indetPluralOnlyNounPhrase(basic).html)  
[`indetSingularNounPhrase(basic)`](../object/indetSingularNounPhrase(basic).html)  
[`nounPhrase(main)`](../object/nounPhrase(main).html)  
[`pluralPhrase(main)`](../object/pluralPhrase(main).html)  
[`possessiveAdjPhrase(npApostropheS)`](../object/possessiveAdjPhrase(npApostropheS).html)  
[`possessiveAdjPhrase(ppApostropheS)`](../object/possessiveAdjPhrase(ppApostropheS).html)  
[`possessiveNounPhrase(npApostropheS)`](../object/possessiveNounPhrase(npApostropheS).html)  
[`qualifiedNounPhrase(main)`](../object/qualifiedNounPhrase(main).html)  
[`qualifiedPluralNounPhrase(determiner)`](../object/qualifiedPluralNounPhrase(determiner).html)  
[`singleNoun(normal)`](../object/singleNoun(normal).html)  
[`NounPhraseWithVocab`](../object/NounPhraseWithVocab.html)  
[`adjPhrase(adjAdj)`](../object/adjPhrase(adjAdj).html)  
[`AdjPhraseWithVocab`](../object/AdjPhraseWithVocab.html)  
[`adjPhrase(adj)`](../object/adjPhrase(adj).html)  
[`adjWord(adj)`](../object/adjWord(adj).html)  
[`adjWord(adjAbbr)`](../object/adjWord(adjAbbr).html)  
[`adjWord(adjApostS)`](../object/adjWord(adjApostS).html)  
[`literalAdjPhrase(literalAdj)`](../object/literalAdjPhrase(literalAdj).html)  
[`literalAdjPhrase(number)`](../object/literalAdjPhrase(number).html)  
[`literalAdjPhrase(string)`](../object/literalAdjPhrase(string).html)  
[`compoundNounPhrase(of)`](../object/compoundNounPhrase(of).html)  
[`compoundNounPhrase(simple)`](../object/compoundNounPhrase(simple).html)  
[`compoundPluralPhrase(of)`](../object/compoundPluralPhrase(of).html)  
[`compoundPluralPhrase(simple)`](../object/compoundPluralPhrase(simple).html)  
[`miscWordList(list)`](../object/miscWordList(list).html)  
[`miscWordList(wordOrNumber)`](../object/miscWordList(wordOrNumber).html)  
[`NounWordProd`](../object/NounWordProd.html)  
[`nounWord(noun)`](../object/nounWord(noun).html)  
[`nounWord(nounAbbr)`](../object/nounWord(nounAbbr).html)  
[`simpleNounPhrase(adj)`](../object/simpleNounPhrase(adj).html)  
[`simpleNounPhrase(adjAndOne)`](../object/simpleNounPhrase(adjAndOne).html)  
[`simpleNounPhrase(adjNP)`](../object/simpleNounPhrase(adjNP).html)  
[`simpleNounPhrase(empty)`](../object/simpleNounPhrase(empty).html)  
[`simpleNounPhrase(misc)`](../object/simpleNounPhrase(misc).html)  
[`simpleNounPhrase(noun)`](../object/simpleNounPhrase(noun).html)  
[`simpleNounPhrase(nounAndNumber)`](../object/simpleNounPhrase(nounAndNumber).html)  
[`simpleNounPhrase(number)`](../object/simpleNounPhrase(number).html)  
[`simpleNounPhrase(numberAndNoun)`](../object/simpleNounPhrase(numberAndNoun).html)  
[`simplePluralPhrase(adjAndOnes)`](../object/simplePluralPhrase(adjAndOnes).html)  
[`simplePluralPhrase(empty)`](../object/simplePluralPhrase(empty).html)  
[`simplePluralPhrase(misc)`](../object/simplePluralPhrase(misc).html)  
[`simplePluralPhrase(plural)`](../object/simplePluralPhrase(plural).html)  
[`simplePluralPhrase(poundNum)`](../object/simplePluralPhrase(poundNum).html)  
[`PluralProd`](../object/PluralProd.html)  
[`AllPluralProd`](../object/AllPluralProd.html)  
[`explicitDetPluralOnlyNounPhrase(definite)`](../object/explicitDetPluralOnlyNounPhrase(definite).html)  
[`qualifiedPluralNounPhrase(all)`](../object/qualifiedPluralNounPhrase(all).html)  
[`DefinitePluralProd`](../object/DefinitePluralProd.html)  
[`explicitDetPluralNounPhrase(definite)`](../object/explicitDetPluralNounPhrase(definite).html)  
[`implicitDetPluralOnlyNounPhrase(main)`](../object/implicitDetPluralOnlyNounPhrase(main).html)  
[`QuantifiedPluralProd`](../object/QuantifiedPluralProd.html)  
[`ExactQuantifiedPluralProd`](../object/ExactQuantifiedPluralProd.html)  
[`BothPluralProd`](../object/BothPluralProd.html)  
[`qualifiedPluralNounPhrase(both)`](../object/qualifiedPluralNounPhrase(both).html)  
[`explicitDetPluralNounPhrase(definiteNumber)`](../object/explicitDetPluralNounPhrase(definiteNumber).html)  
[`explicitDetPluralOnlyNounPhrase(definiteNumber)`](../object/explicitDetPluralOnlyNounPhrase(definiteNumber).html)  
[`qualifiedPluralNounPhrase(allNum)`](../object/qualifiedPluralNounPhrase(allNum).html)  
[`qualifiedPluralNounPhrase(anyNum)`](../object/qualifiedPluralNounPhrase(anyNum).html)  
[`PronounProd`](../object/PronounProd.html)  
[`HerProd`](../object/HerProd.html)  
[`completeNounPhraseWithoutAll(her)`](../object/completeNounPhraseWithoutAll(her).html)  
[`HimProd`](../object/HimProd.html)  
[`completeNounPhraseWithoutAll(him)`](../object/completeNounPhraseWithoutAll(him).html)  
[`ItProd`](../object/ItProd.html)  
[`completeNounPhraseWithoutAll(it)`](../object/completeNounPhraseWithoutAll(it).html)  
[`MeProd`](../object/MeProd.html)  
[`completeNounPhraseWithoutAll(me)`](../object/completeNounPhraseWithoutAll(me).html)  
[`PossessivePronounAdjProd`](../object/PossessivePronounAdjProd.html)  
[`HerAdjProd`](../object/HerAdjProd.html)  
[`possessiveAdjPhrase(her)`](../object/possessiveAdjPhrase(her).html)  
[`HisAdjProd`](../object/HisAdjProd.html)  
[`possessiveAdjPhrase(his)`](../object/possessiveAdjPhrase(his).html)  
[`ItsAdjProd`](../object/ItsAdjProd.html)  
[`possessiveAdjPhrase(its)`](../object/possessiveAdjPhrase(its).html)  
[`MyAdjProd`](../object/MyAdjProd.html)  
[`possessiveAdjPhrase(my)`](../object/possessiveAdjPhrase(my).html)  
[`TheirAdjProd`](../object/TheirAdjProd.html)  
[`possessiveAdjPhrase(their)`](../object/possessiveAdjPhrase(their).html)  
[`YourAdjProd`](../object/YourAdjProd.html)  
[`possessiveAdjPhrase(your)`](../object/possessiveAdjPhrase(your).html)  
[`PossessivePronounNounProd`](../object/PossessivePronounNounProd.html)  
[`HersNounProd`](../object/HersNounProd.html)  
[`possessiveNounPhrase(hers)`](../object/possessiveNounPhrase(hers).html)  
[`HisNounProd`](../object/HisNounProd.html)  
[`possessiveNounPhrase(his)`](../object/possessiveNounPhrase(his).html)  
[`ItsNounProd`](../object/ItsNounProd.html)  
[`possessiveNounPhrase(its)`](../object/possessiveNounPhrase(its).html)  
[`MineNounProd`](../object/MineNounProd.html)  
[`possessiveNounPhrase(mine)`](../object/possessiveNounPhrase(mine).html)  
[`TheirsNounProd`](../object/TheirsNounProd.html)  
[`possessiveNounPhrase(theirs)`](../object/possessiveNounPhrase(theirs).html)  
[`YoursNounProd`](../object/YoursNounProd.html)  
[`possessiveNounPhrase(yours)`](../object/possessiveNounPhrase(yours).html)  
[`ReflexivePronounProd`](../object/ReflexivePronounProd.html)  
[`HerselfProd`](../object/HerselfProd.html)  
[`completeNounPhraseWithoutAll(herself)`](../object/completeNounPhraseWithoutAll(herself).html)  
[`HimselfProd`](../object/HimselfProd.html)  
[`completeNounPhraseWithoutAll(himself)`](../object/completeNounPhraseWithoutAll(himself).html)  
[`ItselfProd`](../object/ItselfProd.html)  
[`completeNounPhraseWithoutAll(itself)`](../object/completeNounPhraseWithoutAll(itself).html)  
[`ThemselvesProd`](../object/ThemselvesProd.html)  
[`completeNounPhraseWithoutAll(themselves)`](../object/completeNounPhraseWithoutAll(themselves).html)  
[`ThemProd`](../object/ThemProd.html)  
[`completeNounPhraseWithoutAll(them)`](../object/completeNounPhraseWithoutAll(them).html)  
[`YouProd`](../object/YouProd.html)  
[`completeNounPhraseWithoutAll(yourself)`](../object/completeNounPhraseWithoutAll(yourself).html)  
[`SingleNounProd`](../object/SingleNounProd.html)  
[`PrepSingleNounProd`](../object/PrepSingleNounProd.html)  
[`atSingleNoun(main)`](../object/atSingleNoun(main).html)  
[`forSingleNoun(main)`](../object/forSingleNoun(main).html)  
[`fromSingleNoun(main)`](../object/fromSingleNoun(main).html)  
[`inSingleNoun(main)`](../object/inSingleNoun(main).html)  
[`onSingleNoun(main)`](../object/onSingleNoun(main).html)  
[`outOfSingleNoun(main)`](../object/outOfSingleNoun(main).html)  
[`throughSingleNoun(main)`](../object/throughSingleNoun(main).html)  
[`toSingleNoun(main)`](../object/toSingleNoun(main).html)  
[`withSingleNoun(main)`](../object/withSingleNoun(main).html)  
[`singleNounOnly(main)`](../object/singleNounOnly(main).html)  
[`TopicProd`](../object/TopicProd.html)  
[`EmptyTopicPhraseProd`](../object/EmptyTopicPhraseProd.html)  
[`PrepSingleTopicProd`](../object/PrepSingleTopicProd.html)  
[`aboutTopicPhrase(main)`](../object/aboutTopicPhrase(main).html)  
[`topicPhrase(main)`](../object/topicPhrase(main).html)  
[`topicPhrase(misc)`](../object/topicPhrase(misc).html)  
[`SingleNounWithListProd`](../object/SingleNounWithListProd.html)  
[`singleNoun(multiple)`](../object/singleNoun(multiple).html)  
[`NumberProd`](../object/NumberProd.html)  
[`numberPhrase(digits)`](../object/numberPhrase(digits).html)  
[`numberPhrase(spelled)`](../object/numberPhrase(spelled).html)  
[`poundNumberPhrase(main)`](../object/poundNumberPhrase(main).html)  
[`spelledHundred(aHundred)`](../object/spelledHundred(aHundred).html)  
[`spelledHundred(aHundredPlus)`](../object/spelledHundred(aHundredPlus).html)  
[`spelledHundred(hundreds)`](../object/spelledHundred(hundreds).html)  
[`spelledHundred(hundredsPlus)`](../object/spelledHundred(hundredsPlus).html)  
[`spelledHundred(small)`](../object/spelledHundred(small).html)  
[`spelledMillion(aMillion)`](../object/spelledMillion(aMillion).html)  
[`spelledMillion(aMillionAndSmall)`](../object/spelledMillion(aMillionAndSmall).html)  
[`spelledMillion(millions)`](../object/spelledMillion(millions).html)  
[`spelledMillion(millionsAndSmall)`](../object/spelledMillion(millionsAndSmall).html)  
[`spelledMillion(millionsPlus)`](../object/spelledMillion(millionsPlus).html)  
[`spelledNumber(main)`](../object/spelledNumber(main).html)  
[`spelledSmallNumber(digit)`](../object/spelledSmallNumber(digit).html)  
[`spelledSmallNumber(teen)`](../object/spelledSmallNumber(teen).html)  
[`spelledSmallNumber(tens)`](../object/spelledSmallNumber(tens).html)  
[`spelledSmallNumber(tensAndUnits)`](../object/spelledSmallNumber(tensAndUnits).html)  
[`spelledSmallNumber(zero)`](../object/spelledSmallNumber(zero).html)  
[`spelledThousand(aThousand)`](../object/spelledThousand(aThousand).html)  
[`spelledThousand(aThousandAndSmall)`](../object/spelledThousand(aThousandAndSmall).html)  
[`spelledThousand(thousands)`](../object/spelledThousand(thousands).html)  
[`spelledThousand(thousandsAndSmall)`](../object/spelledThousand(thousandsAndSmall).html)  
[`spelledThousand(thousandsPlus)`](../object/spelledThousand(thousandsPlus).html)  
[`oopsCommand(main)`](../object/oopsCommand(main).html)  
[`oopsPhrase(main)`](../object/oopsPhrase(main).html)  
[`oopsPhrase(missing)`](../object/oopsPhrase(missing).html)  
[`PreResolvedLiteralProd`](../object/PreResolvedLiteralProd.html)  
[`PreResolvedProd`](../object/PreResolvedProd.html)  
[`TokenListProd`](../object/TokenListProd.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`firstTokenIndex`](#firstTokenIndex) [`isSpecialResponseMatch`](#isSpecialResponseMatch) [`lastTokenIndex`](#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`canResolveTo`](#canResolveTo) [`getOrigText`](#getOrigText) [`getOrigTokenList`](#getOrigTokenList) [`setOrigTokenList`](#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="firstTokenIndex"></span>

`firstTokenIndex`

[parser.t](../file/parser.t.html)\[[603](../source/parser.t.html#603)\]



Grammar match objects that come from a GrammarProd.parseTokens() call
will always have a set of properties indicating which tokens from the
input matched the grammar rule. However, we sometimes synthesize match
trees internally rather than getting them from parser input; for
synthesized trees, the parser obviously won't supply those properties
for us, so we need to define suitable defaults that synthesized match
tree nodes can inherit.



<span id="isSpecialResponseMatch"></span>

`isSpecialResponseMatch`

[parser.t](../file/parser.t.html)\[[592](../source/parser.t.html#592)\]



Is this match a match to the special syntax for a custom missing object
query? This returns true if the match has a wording that strongly
distinguishes it from an ordinary new command. In the English parser,
for example, this returns true for the PrepSingleTopicProd matches
(e.g., inSingleNoun) if the phrase starts with the preposition for the
match.

This property is used when we ask a missing object question:

  
\>dig  
What do you want to dig in? \*.  
\>in the dirt

In English, the DIG command sets up to receive a response phrased as "in
\<noun phrase\>" - that's done by setting the response production to
inSingleNoun. In this case, "in the dirt" would return true, since
that's pretty clearly a match to the expected inSingleNoun syntax. In
contrast, "the dirt" would return false, since that's just a noun phrase
without the special wording for this particular verb.



<span id="lastTokenIndex"></span>

`lastTokenIndex`

[parser.t](../file/parser.t.html)\[[604](../source/parser.t.html#604)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="canResolveTo"></span>

`canResolveTo (obj, action, issuingActor, targetActor, which)`

[parser.t](../file/parser.t.html)\[[540](../source/parser.t.html#540)\]



Can this object match tree resolve to the given object? We'll resolve
the phrase as though it were a topic phrase, then look for the object
among the matches.



<span id="getOrigText"></span>

`getOrigText ( )`

[parser.t](../file/parser.t.html)\[[502](../source/parser.t.html#502)\]



get the original text of the command for this match



<span id="getOrigTokenList"></span>

`getOrigTokenList ( )`

[parser.t](../file/parser.t.html)\[[513](../source/parser.t.html#513)\]



get my original token list, in canonical tokenizer format



<span id="setOrigTokenList"></span>

`setOrigTokenList (toks)`

[parser.t](../file/parser.t.html)\[[528](../source/parser.t.html#528)\]



Set my original token list. This replaces the actual token list we
matched from the parser with a new token list provided by the caller.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


