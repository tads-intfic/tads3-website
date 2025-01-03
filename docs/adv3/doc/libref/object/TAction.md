---
layout: docs
---
<span class="title">TAction</span><span class="type">class</span>

[action.t](../file/action.t.html)\[[3066](../source/action.t.html#3066)\],
[en_us.t](../file/en_us.t.html)\[[8421](../source/en_us.t.html#8421)\]

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



Transitive Action class - this is an action that takes a direct object.

For simplicity, this object is its own object resolver - we really don't
need a separate resolver object because we have only one object list for
this verb. (In contrast, an action with both a direct and indirect
object might need separate resolution rules for the two objects, and
hence would need separate resolver objects for the two.)

The advantage of implementing the Resolver behavior in this object,
rather than using a separate object, is that it's less trouble to
override object resolution rules - simply override the resolver methods
in the subclass where you define the grammar rule for the action.

*Modified in
[en_us.t](../file/en_us.t.html)\[[8421](../source/en_us.t.html#8421)\]:*  
English-specific additions for single-object verbs.

`class `**`TAction`**` :   `[`Action`](../object/Action.html) [`Resolver`](../object/Resolver.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`TAction`**  
[`Action`](../object/Action.html)  
[`BasicProd`](../object/BasicProd.html)  
`                         object`  
[`Resolver`](../object/Resolver.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`TAction`**  
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
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`actionAllowsAll`](#actionAllowsAll) [`actionDobjProp`](#actionDobjProp) [`actor_`](#actor_) [`askDobjResponseProd`](#askDobjResponseProd) [`checkDobjProp`](#checkDobjProp) [`dobjCur_`](#dobjCur_) [`dobjInfoCur_`](#dobjInfoCur_) [`dobjList_`](#dobjList_) [`dobjMatch`](#dobjMatch) [`dobjResolver_`](#dobjResolver_) [`issuer_`](#issuer_) [`preCondDobjProp`](#preCondDobjProp) [`predicateNounPhrases`](#predicateNounPhrases) [`remapDobjProp`](#remapDobjProp) [`verDobjProp`](#verDobjProp) [`whichMessageObject`](#whichMessageObject)

Inherited from `Action` :  
[`actionTime`](../object/Action.html#actionTime) [`afterActionMainList`](../object/Action.html#afterActionMainList) [`beforeAfterObjs`](../object/Action.html#beforeAfterObjs) [`defaultForRecursion`](../object/Action.html#defaultForRecursion) [`extraMessageParams`](../object/Action.html#extraMessageParams) [`implicitMsg`](../object/Action.html#implicitMsg) [`includeInUndo`](../object/Action.html#includeInUndo) [`isImplicit`](../object/Action.html#isImplicit) [`isRepeatable`](../object/Action.html#isRepeatable) [`iterationCanceled`](../object/Action.html#iterationCanceled) [`originalAction`](../object/Action.html#originalAction) [`parentAction`](../object/Action.html#parentAction) [`preCond`](../object/Action.html#preCond) [`pronounOverride`](../object/Action.html#pronounOverride) [`remappedFrom`](../object/Action.html#remappedFrom) [`showDefaultReports`](../object/Action.html#showDefaultReports) [`synthParamID`](../object/Action.html#synthParamID) [`verbFlags`](../object/Action.html#verbFlags) [`verifiedOkay`](../object/Action.html#verifiedOkay)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex) [`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch) [`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

Inherited from `Resolver` :  
[`action_`](../object/Resolver.html#action_) [`equivs_`](../object/Resolver.html#equivs_) [`isGlobalScope`](../object/Resolver.html#isGlobalScope) [`isSubResolver`](../object/Resolver.html#isSubResolver) [`scope_`](../object/Resolver.html#scope_) [`whichObject`](../object/Resolver.html#whichObject)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`adjustDefaultObjectPrep`](#adjustDefaultObjectPrep) [`announceAllDefaultObjects`](#announceAllDefaultObjects) [`announceDefaultObject`](#announceDefaultObject) [`canDobjResolveTo`](#canDobjResolveTo) [`checkAction`](#checkAction) [`checkRemapping`](#checkRemapping) [`construct`](#construct) [`createDobjResolver`](#createDobjResolver) [`createForMissingDobj`](#createForMissingDobj) [`createForRetry`](#createForRetry) [`doActionMain`](#doActionMain) [`execAction`](#execAction) [`filterAmbiguousDobj`](#filterAmbiguousDobj) [`filterPluralDobj`](#filterPluralDobj) [`getAllDobj`](#getAllDobj) [`getCurrentObjects`](#getCurrentObjects) [`getDefaultDobj`](#getDefaultDobj) [`getDobj`](#getDobj) [`getDobjCount`](#getDobjCount) [`getDobjFlags`](#getDobjFlags) [`getDobjInfo`](#getDobjInfo) [`getDobjResolver`](#getDobjResolver) [`getDobjTokens`](#getDobjTokens) [`getDobjWords`](#getDobjWords) [`getMatchForRole`](#getMatchForRole) [`getMessageParam`](#getMessageParam) [`getObjectForRole`](#getObjectForRole) [`getObjResponseProd`](#getObjResponseProd) [`getPreCondDescList`](#getPreCondDescList) [`getPreCondPropForRole`](#getPreCondPropForRole) [`getQuestionInf`](#getQuestionInf) [`getRemapPropForRole`](#getRemapPropForRole) [`getResolvedDobjList`](#getResolvedDobjList) [`getResolvedObjList`](#getResolvedObjList) [`getResolveInfo`](#getResolveInfo) [`getRoleFromIndex`](#getRoleFromIndex) [`getVerbPhrase`](#getVerbPhrase) [`getVerbPhrase1`](#getVerbPhrase1) [`getVerifyPropForRole`](#getVerifyPropForRole) [`initForMissingDobj`](#initForMissingDobj) [`initResolver`](#initResolver) [`initTentative`](#initTentative) [`resetAction`](#resetAction) [`resolvedObjectsInScope`](#resolvedObjectsInScope) [`resolveNouns`](#resolveNouns) [`retryWithAmbiguousDobj`](#retryWithAmbiguousDobj) [`retryWithMissingDobj`](#retryWithMissingDobj) [`setCurrentObjects`](#setCurrentObjects) [`setObjectMatches`](#setObjectMatches) [`setResolvedDobj`](#setResolvedDobj) [`setResolvedObjects`](#setResolvedObjects) [`testRetryDefaultDobj`](#testRetryDefaultDobj) [`verifyAction`](#verifyAction) [`whatObj`](#whatObj)

Inherited from `Action` :  
[`actionOfKind`](../object/Action.html#actionOfKind) [`addBeforeAfterObj`](../object/Action.html#addBeforeAfterObj) [`afterAction`](../object/Action.html#afterAction) [`afterActionMain`](../object/Action.html#afterActionMain) [`announceActionObject`](../object/Action.html#announceActionObject) [`beforeAction`](../object/Action.html#beforeAction) [`beforeActionMain`](../object/Action.html#beforeActionMain) [`cacheMultiObjectAnnouncements`](../object/Action.html#cacheMultiObjectAnnouncements) [`callAfterActionMain`](../object/Action.html#callAfterActionMain) [`callCatchAllProp`](../object/Action.html#callCatchAllProp) [`callPreConditions`](../object/Action.html#callPreConditions) [`callVerifyPreCond`](../object/Action.html#callVerifyPreCond) [`callVerifyProp`](../object/Action.html#callVerifyProp) [`cancelIteration`](../object/Action.html#cancelIteration) [`checkPreConditions`](../object/Action.html#checkPreConditions) [`combineRemappedVerifyResults`](../object/Action.html#combineRemappedVerifyResults) [`createActionFrom`](../object/Action.html#createActionFrom) [`createActionInstance`](../object/Action.html#createActionInstance) [`createTopicQualifierResolver`](../object/Action.html#createTopicQualifierResolver) [`doAction`](../object/Action.html#doAction) [`doActionOnce`](../object/Action.html#doActionOnce) [`filterAmbiguousWithVerify`](../object/Action.html#filterAmbiguousWithVerify) [`filterFacets`](../object/Action.html#filterFacets) [`filterPluralWithVerify`](../object/Action.html#filterPluralWithVerify) [`finishResolveList`](../object/Action.html#finishResolveList) [`getAnaphoricBinding`](../object/Action.html#getAnaphoricBinding) [`getDefaultWithVerify`](../object/Action.html#getDefaultWithVerify) [`getEnteredVerbPhrase`](../object/Action.html#getEnteredVerbPhrase) [`getImplicitPhrase`](../object/Action.html#getImplicitPhrase) [`getInfPhrase`](../object/Action.html#getInfPhrase) [`getNotifyTable`](../object/Action.html#getNotifyTable) [`getObjPreCondDescList`](../object/Action.html#getObjPreCondDescList) [`getObjPreConditions`](../object/Action.html#getObjPreConditions) [`getOriginalAction`](../object/Action.html#getOriginalAction) [`getOrigTokenList`](../object/Action.html#getOrigTokenList) [`getOtherObjectRole`](../object/Action.html#getOtherObjectRole) [`getParticiplePhrase`](../object/Action.html#getParticiplePhrase) [`getPredicate`](../object/Action.html#getPredicate) [`getPronounOverride`](../object/Action.html#getPronounOverride) [`getRemappedFrom`](../object/Action.html#getRemappedFrom) [`getSimpleSynonymRemap`](../object/Action.html#getSimpleSynonymRemap) [`getSortedVerifyResults`](../object/Action.html#getSortedVerifyResults) [`isConversational`](../object/Action.html#isConversational) [`isNestedIn`](../object/Action.html#isNestedIn) [`isPartOf`](../object/Action.html#isPartOf) [`isRemapped`](../object/Action.html#isRemapped) [`makeResolveInfo`](../object/Action.html#makeResolveInfo) [`makeResolveInfoList`](../object/Action.html#makeResolveInfoList) [`maybeAnnounceDefaultObject`](../object/Action.html#maybeAnnounceDefaultObject) [`maybeAnnounceImplicit`](../object/Action.html#maybeAnnounceImplicit) [`maybeAnnounceMultiObject`](../object/Action.html#maybeAnnounceMultiObject) [`noMatch`](../object/Action.html#noMatch) [`notifyBeforeAfter`](../object/Action.html#notifyBeforeAfter) [`objListPronoun`](../object/Action.html#objListPronoun) [`preAnnounceActionObject`](../object/Action.html#preAnnounceActionObject) [`recalcSenseContext`](../object/Action.html#recalcSenseContext) [`repeatAction`](../object/Action.html#repeatAction) [`resolveAction`](../object/Action.html#resolveAction) [`runBeforeNotifiers`](../object/Action.html#runBeforeNotifiers) [`saveActionForAgain`](../object/Action.html#saveActionForAgain) [`setImplicit`](../object/Action.html#setImplicit) [`setMessageParam`](../object/Action.html#setMessageParam) [`setMessageParams`](../object/Action.html#setMessageParams) [`setNested`](../object/Action.html#setNested) [`setOriginalAction`](../object/Action.html#setOriginalAction) [`setPronounOverride`](../object/Action.html#setPronounOverride) [`setRemapped`](../object/Action.html#setRemapped) [`spPrefix`](../object/Action.html#spPrefix) [`spSuffix`](../object/Action.html#spSuffix) [`synthMessageParam`](../object/Action.html#synthMessageParam) [`verifyHandlersExist`](../object/Action.html#verifyHandlersExist) [`whatTranslate`](../object/Action.html#whatTranslate) [`withVerifyResults`](../object/Action.html#withVerifyResults) [`zeroActionTime`](../object/Action.html#zeroActionTime)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo) [`getOrigText`](../object/BasicProd.html#getOrigText) [`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

Inherited from `Resolver` :  
[`allowAll`](../object/Resolver.html#allowAll) [`cacheScopeList`](../object/Resolver.html#cacheScopeList) [`filterAll`](../object/Resolver.html#filterAll) [`filterAmbiguousEquivalents`](../object/Resolver.html#filterAmbiguousEquivalents) [`filterAmbiguousNounPhrase`](../object/Resolver.html#filterAmbiguousNounPhrase) [`filterPluralPhrase`](../object/Resolver.html#filterPluralPhrase) [`filterPossRank`](../object/Resolver.html#filterPossRank) [`getAction`](../object/Resolver.html#getAction) [`getAll`](../object/Resolver.html#getAll) [`getAllDefaults`](../object/Resolver.html#getAllDefaults) [`getDefaultObject`](../object/Resolver.html#getDefaultObject) [`getPossessiveResolver`](../object/Resolver.html#getPossessiveResolver) [`getPronounDefault`](../object/Resolver.html#getPronounDefault) [`getQualifierResolver`](../object/Resolver.html#getQualifierResolver) [`getRawPronounAntecedent`](../object/Resolver.html#getRawPronounAntecedent) [`getReflexiveBinding`](../object/Resolver.html#getReflexiveBinding) [`getScopeList`](../object/Resolver.html#getScopeList) [`getTargetActor`](../object/Resolver.html#getTargetActor) [`matchName`](../object/Resolver.html#matchName) [`objInScope`](../object/Resolver.html#objInScope) [`resetResolver`](../object/Resolver.html#resetResolver) [`resolvePronounAntecedent`](../object/Resolver.html#resolvePronounAntecedent) [`resolveUnknownNounPhrase`](../object/Resolver.html#resolveUnknownNounPhrase) [`selectIndefinite`](../object/Resolver.html#selectIndefinite) [`withGlobals`](../object/Resolver.html#withGlobals)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="actionAllowsAll"></span>

`actionAllowsAll`

[action.t](../file/action.t.html)\[[3669](../source/action.t.html#3669)\]



Does this action allow "all" to be used in noun phrases? By default, we
allow it or not according to a gameMain property.

Note that the inventory management verbs (TAKE, TAKE FROM, DROP, PUT IN,
PUT ON) override this to allow "all" to be used, so disallowing "all"
here (or via gameMain) won't disable "all" for those verbs.



<span id="actionDobjProp"></span>

`actionDobjProp`

[action.t](../file/action.t.html)\[[3620](../source/action.t.html#3620)\]



*no description available*



<span id="actor_"></span>

`actor_`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[3786](../source/action.t.html#3786)\]



target actor



<span id="askDobjResponseProd"></span>

`askDobjResponseProd`

[action.t](../file/action.t.html)\[[3221](../source/action.t.html#3221)\]



The root production to use to parse missing direct object responses. By
default, this is nounList, but individual actions can override this as
appropriate.

Note that language modules might want to override this to allow for
special responses. For example, in English, some verbs might want to
override this with a specialized production that allows the appropriate
preposition in the response.



<span id="checkDobjProp"></span>

`checkDobjProp`

[action.t](../file/action.t.html)\[[3619](../source/action.t.html#3619)\]



*no description available*



<span id="dobjCur_"></span>

`dobjCur_`

[action.t](../file/action.t.html)\[[3745](../source/action.t.html#3745)\]



The resolved direct object on which we're currently executing the
command. To execute the command, we iterate through the direct object
list, calling the execution sequence for each object in the list. We set
this to the current object in each iteration.



<span id="dobjInfoCur_"></span>

`dobjInfoCur_`

[action.t](../file/action.t.html)\[[3748](../source/action.t.html#3748)\]



the full ResolveInfo associated with dobjCur\_



<span id="dobjList_"></span>

`dobjList_`

[action.t](../file/action.t.html)\[[3737](../source/action.t.html#3737)\]



my resolved list of direct objects



<span id="dobjMatch"></span>

`dobjMatch`

[action.t](../file/action.t.html)\[[3734](../source/action.t.html#3734)\]



the predicate must assign the direct object production tree here



<span id="dobjResolver_"></span>

`dobjResolver_`

[action.t](../file/action.t.html)\[[3751](../source/action.t.html#3751)\]



my cached direct object resolver



<span id="issuer_"></span>

`issuer_`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[3783](../source/action.t.html#3783)\]



issuing actor



<span id="preCondDobjProp"></span>

`preCondDobjProp`

[action.t](../file/action.t.html)\[[3617](../source/action.t.html#3617)\]



*no description available*



<span id="predicateNounPhrases"></span>

`predicateNounPhrases`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[3269](../source/action.t.html#3269)\]



a transitive action has one noun phrase: the direct object



<span id="remapDobjProp"></span>

`remapDobjProp`

[action.t](../file/action.t.html)\[[3618](../source/action.t.html#3618)\]



*no description available*



<span id="verDobjProp"></span>

`verDobjProp`

[action.t](../file/action.t.html)\[[3616](../source/action.t.html#3616)\]



The direct object preconditions, verifier, remapper, check, and action
methods for this action. Each concrete action must define these
appropriately. By convention, the methods are named like so:

  
preconditions: preCondDobjAction  
verifier: verDobjAction  
remap: remapDobjAction  
check: checkDobjAction  
action: actionDobjAction

where the 'Action' suffix is replaced by the name of the action. The
DefineTAction macro applies this convention, so in most cases library
and game authors will never have to create all of those property names
manually.



<span id="whichMessageObject"></span>

`whichMessageObject`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[3795](../source/action.t.html#3795)\]



By default, our direct object plays the direct object role in generated
messages. Subclasses can override this if the resolved object is to play
a different role. Note that this only affects generated messages; for
parsing purposes, our object is always in the DirectObject role.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="adjustDefaultObjectPrep"></span>

`adjustDefaultObjectPrep (prep, obj)`

[en_us.t](../file/en_us.t.html)\[[8466](../source/en_us.t.html#8466)\]



Adjust the preposition. In some cases, the verb will want to vary the
preposition according to the object. This method can return a custom
preposition in place of the one in the verbPhrase. By default, we just
use the fixed preposition from the verbPhrase, which is passed in to us
in 'prep'.



<span id="announceAllDefaultObjects"></span>

`announceAllDefaultObjects (allResolved)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[8469](../source/en_us.t.html#8469)\]



announce all defaulted objects



<span id="announceDefaultObject"></span>

`announceDefaultObject (obj, whichObj, resolvedAllObjects)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[8434](../source/en_us.t.html#8434)\]



announce a default object used with this action



<span id="canDobjResolveTo"></span>

`canDobjResolveTo (obj)`

[action.t](../file/action.t.html)\[[3241](../source/action.t.html#3241)\]



Can the direct object potentially resolve to the given simulation
object? This only determines if the object is a \*syntactic\* match,
meaning that it can match at a vocabulary and grammar level. This
doesn't test it for logicalness or check that it's an otherwise valid
resolution.



<span id="checkAction"></span>

`checkAction ( )`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[3555](../source/action.t.html#3555)\]



Check the command.

For a single-object transitive action, this runs the catch-all 'check'
properties (the dobjFor(Default) and dobjFor(All) 'check' methods) on
the direct object, then calls the individual 'check' routine for this
specific action.



<span id="checkRemapping"></span>

`checkRemapping ( )`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[3531](../source/action.t.html#3531)\]



Check for remapping



<span id="construct"></span>

`construct ( )`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[3067](../source/action.t.html#3067)\]



*no description available*



<span id="createDobjResolver"></span>

`createDobjResolver (issuingActor, targetActor)`

[action.t](../file/action.t.html)\[[3651](../source/action.t.html#3651)\]



Create a resolver for the direct object. By default, we are our own
resolver. Some actions might want to override this to create and return
a specialized resolver instance if special resolution rules are needed.



<span id="createForMissingDobj"></span>

`createForMissingDobj (orig, asker)`

[action.t](../file/action.t.html)\[[3182](../source/action.t.html#3182)\]



Create an instance of this action for retrying a given single-object
action with a missing direct object.



<span id="createForRetry"></span>

`createForRetry (orig)`

[action.t](../file/action.t.html)\[[3085](../source/action.t.html#3085)\]



Create an action for retrying an original action with changes.



<span id="doActionMain"></span>

`doActionMain ( )`

[action.t](../file/action.t.html)\[[3431](../source/action.t.html#3431)\]



Execute the action. We'll run through the execution sequence once for
each resolved direct object.



<span id="execAction"></span>

`execAction ( )`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[3584](../source/action.t.html#3584)\]



Execute the command.



<span id="filterAmbiguousDobj"></span>

`filterAmbiguousDobj (lst, requiredNum, np)`

[action.t](../file/action.t.html)\[[3683](../source/action.t.html#3683)\]



filter an ambiguous direct object noun phrase



<span id="filterPluralDobj"></span>

`filterPluralDobj (lst, np)`

[action.t](../file/action.t.html)\[[3692](../source/action.t.html#3692)\]



filter a plural phrase



<span id="getAllDobj"></span>

`getAllDobj (actor, scopeList)`

[action.t](../file/action.t.html)\[[3677](../source/action.t.html#3677)\]



Resolve 'all' for the direct object, given a list of everything in
scope. By default, we'll simply return everything in scope; some actions
might want to override this to return a more specific list of objects
suitable for 'all'.



<span id="getCurrentObjects"></span>

`getCurrentObjects ( )`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[3484](../source/action.t.html#3484)\]



Get the list of active objects. We have only a direct object, so we'll
return a list with the current direct object.



<span id="getDefaultDobj"></span>

`getDefaultDobj (np, resolver)`

[action.t](../file/action.t.html)\[[3700](../source/action.t.html#3700)\]



get the default direct object



<span id="getDobj"></span>

`getDobj ( )`

[action.t](../file/action.t.html)\[[3708](../source/action.t.html#3708)\]



get the current direct object of the command



<span id="getDobjCount"></span>

`getDobjCount ( )`

[action.t](../file/action.t.html)\[[3717](../source/action.t.html#3717)\]



get the number of direct objects



<span id="getDobjFlags"></span>

`getDobjFlags ( )`

[action.t](../file/action.t.html)\[[3714](../source/action.t.html#3714)\]



get the object resolution flags for the direct object



<span id="getDobjInfo"></span>

`getDobjInfo ( )`

[action.t](../file/action.t.html)\[[3711](../source/action.t.html#3711)\]



get the full ResolveInfo associated with the current direct object



<span id="getDobjResolver"></span>

`getDobjResolver (issuingActor, targetActor, reset)`

[action.t](../file/action.t.html)\[[3631](../source/action.t.html#3631)\]



Get my direct object resolver. If I don't already have one, create one
and cache it; if I've already cached one, return it. Note that we cache
the resolver because it can sometimes take a bit of work to set one up
(the scope list can in some cases be complicated to calculate). We use
the resolver only during the object resolution phase; since game state
can't change during this phase, it's safe to keep a cached copy.



<span id="getDobjTokens"></span>

`getDobjTokens ( )`

[action.t](../file/action.t.html)\[[3720](../source/action.t.html#3720)\]



get the original token list of the current direct object phrase



<span id="getDobjWords"></span>

`getDobjWords ( )`

[action.t](../file/action.t.html)\[[3727](../source/action.t.html#3727)\]



get the original words (as a list of strings) of the current dobj



<span id="getMatchForRole"></span>

`getMatchForRole (role)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[3286](../source/action.t.html#3286)\]



get the match tree for the noun phrase in the given role



<span id="getMessageParam"></span>

`getMessageParam (objName)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[3413](../source/action.t.html#3413)\]



Get a message parameter object for the action. We define 'dobj' as the
direct object, in addition to any inherited targets.



<span id="getObjectForRole"></span>

`getObjectForRole (role)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[3279](../source/action.t.html#3279)\]



get the resolved object in a given role



<span id="getObjResponseProd"></span>

`getObjResponseProd (resolver)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[3224](../source/action.t.html#3224)\]



get the missing object response production for a given role



<span id="getPreCondDescList"></span>

`getPreCondDescList ( )`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[3469](../source/action.t.html#3469)\]



get the precondition descriptor list for the action



<span id="getPreCondPropForRole"></span>

`getPreCondPropForRole (role)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[3299](../source/action.t.html#3299)\]



get the 'preCond' property for a given object role



<span id="getQuestionInf"></span>

`getQuestionInf (which)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[8476](../source/en_us.t.html#8476)\]



show the verb's basic infinitive form for an interrogative



<span id="getRemapPropForRole"></span>

`getRemapPropForRole (role)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[3305](../source/action.t.html#3305)\]



get the 'remap' property for a given object role



<span id="getResolvedDobjList"></span>

`getResolvedDobjList ( )`

[action.t](../file/action.t.html)\[[3351](../source/action.t.html#3351)\]



get the list of resolved direct objects



<span id="getResolvedObjList"></span>

`getResolvedObjList (which)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[3344](../source/action.t.html#3344)\]



get the list of resolved objects in the given role



<span id="getResolveInfo"></span>

`getResolveInfo (obj, oldRole)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[3311](../source/action.t.html#3311)\]



get the ResolveInfo for the given object



<span id="getRoleFromIndex"></span>

`getRoleFromIndex (idx)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[3272](../source/action.t.html#3272)\]



get the role of an object



<span id="getVerbPhrase"></span>

`getVerbPhrase (inf, ctx)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[8492](../source/en_us.t.html#8492)\]



get the verb phrase in infinitive or participle form



<span id="getVerbPhrase1"></span>

`getVerbPhrase1 (inf, vp, dobjText, dobjIsPronoun)`

[en_us.t](../file/en_us.t.html)\[[8534](../source/en_us.t.html#8534)\]



Given the text of the direct object phrase, build the verb phrase for a
one-object verb. This is a class method that can be used by other kinds
of verbs (i.e., non-TActions) that use phrasing like a single object.

'inf' is a flag indicating whether to use the infinitive form (true) or
the present participle form (nil); 'vp' is the verbPhrase string;
'dobjText' is the direct object phrase's text; and 'dobjIsPronoun' is
true if the dobj text is rendered as a pronoun.



<span id="getVerifyPropForRole"></span>

`getVerifyPropForRole (role)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[3293](../source/action.t.html#3293)\]



get the 'verify' property for a given object role



<span id="initForMissingDobj"></span>

`initForMissingDobj (orig)`

[action.t](../file/action.t.html)\[[3209](../source/action.t.html#3209)\]



Initialize this action in preparation for retrying with a missing direct
object. This routine must copy any phrases from the original action that
have already been resolved. This base TAction implementation obviously
can't have anything pre-resolved in the original, since the original
must simply be an IAction. Subclasses must override as appropriate for
the kinds of base actions from which they can be retried.



<span id="initResolver"></span>

`initResolver (issuingActor, targetActor)`

[action.t](../file/action.t.html)\[[3769](../source/action.t.html#3769)\]



Initialize me as a resolver.



<span id="initTentative"></span>

`initTentative (issuingActor, targetActor, whichObj)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[3520](../source/action.t.html#3520)\]



initialize tentative resolutions for other noun phrases



<span id="resetAction"></span>

`resetAction ( )`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[3073](../source/action.t.html#3073)\]



inherit only the Action constructor



<span id="resolvedObjectsInScope"></span>

`resolvedObjectsInScope ( )`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[3402](../source/action.t.html#3402)\]



check that the resolved objects are in scope



<span id="resolveNouns"></span>

`resolveNouns (issuingActor, targetActor, results)`

[action.t](../file/action.t.html)\[[3253](../source/action.t.html#3253)\]



Resolve objects. This is called at the start of command execution to
resolve noun phrases in the command to specific objects.



<span id="retryWithAmbiguousDobj"></span>

`retryWithAmbiguousDobj (orig, objs, asker, objPhrase)`

[action.t](../file/action.t.html)\[[3138](../source/action.t.html#3138)\]



Retry an action as a single-object action with an ambiguous direct
object. We'll ask which of the given possible objects is intended.



<span id="retryWithMissingDobj"></span>

`retryWithMissingDobj (orig, asker)`

[action.t](../file/action.t.html)\[[3127](../source/action.t.html#3127)\]



Retry an intransitive action as a single-object action. We'll obtain a
indirect object using the normal means (first looking for a default,
then prompting the player if we can't find a suitable default). 'orig'
is the original zero-object action.

This routine terminates with 'exit' if it doesn't throw some other
error.



<span id="setCurrentObjects"></span>

`setCurrentObjects (lst)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[3490](../source/action.t.html#3490)\]



set the current objects



<span id="setObjectMatches"></span>

`setObjectMatches (dobj)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[3389](../source/action.t.html#3389)\]



manually set the unresolved object noun phrase match trees



<span id="setResolvedDobj"></span>

`setResolvedDobj (dobj)`

[action.t](../file/action.t.html)\[[3368](../source/action.t.html#3368)\]



set the resolved direct object



<span id="setResolvedObjects"></span>

`setResolvedObjects (dobj)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[3361](../source/action.t.html#3361)\]



manually set the resolved objects - we'll set the direct object



<span id="testRetryDefaultDobj"></span>

`testRetryDefaultDobj (orig)`

[action.t](../file/action.t.html)\[[3164](../source/action.t.html#3164)\]



Test to see if askForDobj() would find a default direct object. Returns
true if there's a default, nil if not. If this returns true, then
askForDobj() will simply take the default and proceed; otherwise, it
will have to actually ask the user for the missing information.



<span id="verifyAction"></span>

`verifyAction ( )`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[3499](../source/action.t.html#3499)\]



Verify the action.



<span id="whatObj"></span>

`whatObj (which)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[8423](../source/en_us.t.html#8423)\]



return an interrogative word for an object of the action
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


