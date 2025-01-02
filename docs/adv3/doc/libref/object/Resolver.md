---
layout: docs
---
<span class="title">Resolver</span><span class="type">class</span>

[resolver.t](../file/resolver.t.html)\[[31](../source/resolver.t.html#31)\],
[en_us.t](../file/en_us.t.html)\[[3296](../source/en_us.t.html#3296)\]

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

Basic object resolver. An Action object creates an object resolver to
mediate the process of resolving noun phrases to objects.

A resolver encapsulates a set of object resolution rules. In most cases,
an action that takes only a direct object can be its own resolver,
because it needs only one set of resolution rules; for this reason, this
basic Resolver implementation is designed to work with the direct
object. Actions with multiple objects will need separate resolvers for
each object, since they might want to use different rules for the
different objects.

*Modified in
[en_us.t](../file/en_us.t.html)\[[3296](../source/en_us.t.html#3296)\]:*  
Custom base resolver

`class `**`Resolver`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Resolver`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`Resolver`**  
[`ActorResolver`](../object/ActorResolver.html)  
[`IobjResolver`](../object/IobjResolver.html)  
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
[`TopicQualifierResolver`](../object/TopicQualifierResolver.html)  
[`TopicResolver`](../object/TopicResolver.html)  
[`ConvTopicResolver`](../object/ConvTopicResolver.html)  
[`TActionTopicResolver`](../object/TActionTopicResolver.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`action_`](#action_)[`actor_`](#actor_)[`equivs_`](#equivs_)[`isGlobalScope`](#isGlobalScope)[`isSubResolver`](#isSubResolver)[`issuer_`](#issuer_)[`scope_`](#scope_)[`whichMessageObject`](#whichMessageObject)[`whichObject`](#whichObject)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`allowAll`](#allowAll)[`cacheScopeList`](#cacheScopeList)[`construct`](#construct)[`filterAll`](#filterAll)[`filterAmbiguousEquivalents`](#filterAmbiguousEquivalents)[`filterAmbiguousNounPhrase`](#filterAmbiguousNounPhrase)[`filterPluralPhrase`](#filterPluralPhrase)[`filterPossRank`](#filterPossRank)[`getAction`](#getAction)[`getAll`](#getAll)[`getAllDefaults`](#getAllDefaults)[`getDefaultObject`](#getDefaultObject)[`getPossessiveResolver`](#getPossessiveResolver)[`getPronounDefault`](#getPronounDefault)[`getQualifierResolver`](#getQualifierResolver)[`getRawPronounAntecedent`](#getRawPronounAntecedent)[`getReflexiveBinding`](#getReflexiveBinding)[`getScopeList`](#getScopeList)[`getTargetActor`](#getTargetActor)[`matchName`](#matchName)[`objInScope`](#objInScope)[`resetResolver`](#resetResolver)[`resolvePronounAntecedent`](#resolvePronounAntecedent)[`resolveUnknownNounPhrase`](#resolveUnknownNounPhrase)[`selectIndefinite`](#selectIndefinite)[`withGlobals`](#withGlobals)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="action_"></span>

`action_`

[resolver.t](../file/resolver.t.html)\[[740](../source/resolver.t.html#740)\]

<div class="desc">

my action

</div>

<span id="actor_"></span>

`actor_`

[resolver.t](../file/resolver.t.html)\[[746](../source/resolver.t.html#746)\]

<div class="desc">

the target actor object

</div>

<span id="equivs_"></span>

`equivs_`

[resolver.t](../file/resolver.t.html)\[[753](../source/resolver.t.html#753)\]

<div class="desc">

List of equivalent objects we've resolved so far. We use this to try to
return different equivalent objects when multiple noun phrases refer to
the same set of equivalents.

</div>

<span id="isGlobalScope"></span>

`isGlobalScope`

[resolver.t](../file/resolver.t.html)\[[186](../source/resolver.t.html#186)\]

<div class="desc">

Is this a "global" scope? By default, the scope is local: it's limited
to what the actor can see, hear, etc. In some cases, the scope is
broader, and extends beyond the senses; we call those cases global
scope.

This is an advisory status only. The caller musn't take this to mean
that everything is in scope; objInScope() and getScopeList() must still
be used to make the exact determination of what objects are in scope.
However, some noun phrase productions might wish to know generally
whether we're in a local or global sort of scope, so that they can
adjust their zeal at reducing ambiguity. In cases of global scope, we
generally want to be more inclusive of possible matches than in local
scopes, because we have much less of a basis to guess about what the
player might mean.

</div>

<span id="isSubResolver"></span>

`isSubResolver`

[resolver.t](../file/resolver.t.html)\[[47](../source/resolver.t.html#47)\]

<div class="desc">

Are we a sub-phrase resolver? This should return true if we're being
used to resolve a sub-phrase of the main phrase.

</div>

<span id="issuer_"></span>

`issuer_`

[resolver.t](../file/resolver.t.html)\[[743](../source/resolver.t.html#743)\]

<div class="desc">

the issuing actor

</div>

<span id="scope_"></span>

`scope_`

[resolver.t](../file/resolver.t.html)\[[737](../source/resolver.t.html#737)\]

<div class="desc">

The cached scope list, if we have one. Note that this is an internal
implementation detail of the base class; subclasses can dispense with
the cached scope list if they define their own objInScope() and
getScopeList() overrides.

Note that any subclasses (including Actions) that make changes to this
list MUST ensure that the result only contains unique entries. The
library assumes in several places that there are no duplicate entries in
the list; subtle problems can occur if the list contains any duplicates.

</div>

<span id="whichMessageObject"></span>

`whichMessageObject`

[resolver.t](../file/resolver.t.html)\[[723](../source/resolver.t.html#723)\]

<div class="desc">

Get an indication of which object we're resolving, for message
generation purposes. By default, we'll indicate direct object; this
should be overridden for resolvers of indirect and other types of
objects.

</div>

<span id="whichObject"></span>

`whichObject`

[resolver.t](../file/resolver.t.html)\[[715](../source/resolver.t.html#715)\]

<div class="desc">

the role played by this object, if any

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="allowAll"></span>

`allowAll ( )`

[resolver.t](../file/resolver.t.html)\[[397](../source/resolver.t.html#397)\]

<div class="desc">

Determine if "all" is allowed for the noun phrase we're resolving. By
default, we'll just ask the action.

</div>

<span id="cacheScopeList"></span>

`cacheScopeList ( )`

[resolver.t](../file/resolver.t.html)\[[108](../source/resolver.t.html#108)\]

<div class="desc">

Cache the scope list for this object. By default, we cache the standard
physical scope list for our target actor.

Note that if a subclass uses completely different rules for determining
scope, it need not store a scope\_ list at all. The scope\_ list is
purely an implementation detail of the base Resolver class. A subclass
can use whatever internal implementation it wants, as long as it
overrides objInScope() and getScopeList() to return consistent results.

</div>

<span id="construct"></span>

`construct (action, issuingActor, targetActor)`

[resolver.t](../file/resolver.t.html)\[[32](../source/resolver.t.html#32)\]

<div class="desc">

*no description available*

</div>

<span id="filterAll"></span>

`filterAll (lst, whichObj, np)`

[resolver.t](../file/resolver.t.html)\[[427](../source/resolver.t.html#427)\]

<div class="desc">

Filter an 'all' list to remove things that don't belong. We always
remove the actor executing the command, as well as any objects
explicitly marked as hidden from 'all' lists.

Returns a ResolveInfo list, with each entry marked with the MatchedAll
flag.

</div>

<span id="filterAmbiguousEquivalents"></span>

`filterAmbiguousEquivalents (lst, np)`

[resolver.t](../file/resolver.t.html)\[[545](../source/resolver.t.html#545)\]

<div class="desc">

Filter a list of ambiguous matches ('lst') for a noun phrase, to reduce
each set of equivalent items to a single such item, if desired. If no
equivalent reduction is desired for this type of resolver, this can
simply return the original list.

'np' is the noun phrase production that we're resolving. This is usually
a subclass of NounPhraseProd.

</div>

<span id="filterAmbiguousNounPhrase"></span>

`filterAmbiguousNounPhrase (lst, requiredNum, np)`

[resolver.t](../file/resolver.t.html)\[[505](../source/resolver.t.html#505)\]

<div class="desc">

Filter an ambiguous list of objects ('lst') resolving to a noun phrase.
If the objects in the list vary in the degree of suitability for the
command, returns a list consisting only of the most suitable objects. If
the objects are all equally suitable - or equally unsuitable - the whole
list should be returned unchanged.

'requiredNum' is the number of objects required in the final list by the
caller; if the result list is larger than this, the caller will consider
the results ambiguous.

'np' is the noun phrase production that we're resolving. This is usually
a subclass of NounPhraseProd.

This routine does NOT perform any interactive disambiguation, but is
merely a first attempt at reducing the number of matching objects by
removing the obviously unsuitable ones.

For example, for an "open" command, if the list consists of one object
that's open and one object that's currently closed, the result list
should include only the closed one, since it is obvious that the one
that's already open does not need to be opened again. On the other hand,
if the list consists only of open objects, they should all be returned,
since they're all equally unsuitable.

It is not necessary to reduce the list to a single entry; it is adequate
merely to reduce the ambiguity by removing any items that are clearly
less suitable than the survivors.

</div>

<span id="filterPluralPhrase"></span>

`filterPluralPhrase (lst, np)`

[resolver.t](../file/resolver.t.html)\[[634](../source/resolver.t.html#634)\]

<div class="desc">

Filter a plural phrase to reduce the set to the logical subset, if
possible. If there is no logical subset, simply return the original set.

'np' is the noun phrase we're resolving; this is usually a subclass of
PluralProd.

</div>

<span id="filterPossRank"></span>

`filterPossRank (lst, num)`

[resolver.t](../file/resolver.t.html)\[[517](../source/resolver.t.html#517)\]

<div class="desc">

Filter an ambiguous noun phrase list using the strength of possessive
qualification, if any. If we have subsets at different possessive
strengths, choose the strongest subset that has at least the required
number of objects.

</div>

<span id="getAction"></span>

`getAction ( )`

[resolver.t](../file/resolver.t.html)\[[60](../source/resolver.t.html#60)\]

<div class="desc">

get the action we're resolving

</div>

<span id="getAll"></span>

`getAll (np)`

[resolver.t](../file/resolver.t.html)\[[409](../source/resolver.t.html#409)\]

<div class="desc">

Get the "all" list - this is the list of objects that we should use when
the object of the command is the special word "all". We'll ask the
action to resolve 'all' for the direct object, since we are by default a
direct object resolver.

</div>

<span id="getAllDefaults"></span>

`getAllDefaults ( )`

[resolver.t](../file/resolver.t.html)\[[465](../source/resolver.t.html#465)\]

<div class="desc">

Get the list of potential default objects. This is simply the basic
'all' list, not filtered for exclusion with hideFromAll.

</div>

<span id="getDefaultObject"></span>

`getDefaultObject (np)`

[resolver.t](../file/resolver.t.html)\[[671](../source/resolver.t.html#671)\]

<div class="desc">

Get the default object or objects for this phrase. Returns a list of
ResolveInfo objects if a default is available, or nil if no default is
available. This routine does not interact with the user; it should
merely determine if the command implies a default strongly enough to
assume it without asking the user.

By default, we ask the action for a default direct object. Resolver
subclasses should override this as appropriate for the specific objects
they're used to resolve.

</div>

<span id="getPossessiveResolver"></span>

`getPossessiveResolver ( )`

[resolver.t](../file/resolver.t.html)\[[95](../source/resolver.t.html#95)\]

<div class="desc">

Get the resolver for possessive phrases. By default, we return a
standard possessive resolver. This can be overridden in contexts wher
ethe possesive resolution context is special.

</div>

<span id="getPronounDefault"></span>

`getPronounDefault (typ, np)`

[en_us.t](../file/en_us.t.html)\[[3304](../source/en_us.t.html#3304)\]

<div class="desc">

Get the default in-scope object list for a given pronoun. We'll look for
a unique object in scope that matches the desired pronoun, and return a
ResolveInfo list if we find one. If there aren't any objects in scope
that match the pronoun, or multiple objects are in scope, there's no
default.

</div>

<span id="getQualifierResolver"></span>

`getQualifierResolver ( )`

[resolver.t](../file/resolver.t.html)\[[88](../source/resolver.t.html#88)\]

<div class="desc">

Get the resolver for qualifier phrases. By default, this simply returns
myself, since the resolver for qualifiers is in most contexts the same
as the main resolver.

This can be overridden in contexts where the qualifier resolver is
different from the main resolver. In general, when a sub-resolver
narrows the scope for resolving a phrase, such as an exclusion list or a
disambiguation response, we will want to resolve qualifiers in the
context of the main resolution scope rather than the narrowed scope.

</div>

<span id="getRawPronounAntecedent"></span>

`getRawPronounAntecedent (typ)`

[resolver.t](../file/resolver.t.html)\[[301](../source/resolver.t.html#301)\]

<div class="desc">

Get the "raw" pronoun antecedent list for a given pronoun selector. This
returns a list of objects matching the pronoun. The list is raw in that
it is given as a list of game objects (not ResolveInfo objects), and it
isn't filtered for scope.

</div>

<span id="getReflexiveBinding"></span>

`getReflexiveBinding (typ)`

[resolver.t](../file/resolver.t.html)\[[196](../source/resolver.t.html#196)\]

<div class="desc">

Get the binding for a reflexive third-person pronoun (himself, herself,
itself, themselves). By default, the reflexive binding is the anaphoric
binding from the action - that is, it refers back to the preceding noun
phrase in a verb phrase with multiple noun slots (as in ASK BOB ABOUT
HIMSELF: 'himself' refers back to 'bob', the previous noun phrase).

</div>

<span id="getScopeList"></span>

`getScopeList ( )`

[resolver.t](../file/resolver.t.html)\[[168](../source/resolver.t.html#168)\]

<div class="desc">

Get the full list of objects in scope. By default, this simply returns
our cached scope list.

For every object in the list that getScopeList() returns, objInScope()
must return true. However, getScopeList() need not return \*all\*
objects that are in scope as far as objInScope() is concerned - it can,
but a subset of in-scope objects is sufficient.

The default implementation returns the complete set of in-scope objects
by simply returning the cached scope list. This is the same scope list
that the default objInScope() checks, which ensures that the two methods
produce consistent results.

The reason that it's okay for this method to return a subset of in-scope
objects is that the result is only used to resolve "wildcard" phrases in
input, and such phrases don't have to expand to every possible object.
Examples of wildcard phrases include ALL, missing phrases that need
default objects, and locational phrases ("the vase on the table" - which
isn't superficially a wildcard, but implicitly contains one in the form
of "considering only everything on the table"). It's perfectly
reasonable for the parser to expand a wildcard based on what's actually
in sight, in mind, or whatever's appropriate. So, in cases where you
define an especially expansive objInScope() - for example, a universal
scope like the one TopicResolver uses - it's usually fine to use the
default definition of getScopeList(), which returns only the objects
that are in the smaller physical scope.

</div>

<span id="getTargetActor"></span>

`getTargetActor ( )`

[resolver.t](../file/resolver.t.html)\[[63](../source/resolver.t.html#63)\]

<div class="desc">

get the target actor

</div>

<span id="matchName"></span>

`matchName (obj, origTokens, adjustedTokens)`

[resolver.t](../file/resolver.t.html)\[[71](../source/resolver.t.html#71)\]

<div class="desc">

Match an object's name. By default, we'll call the object's own
matchName method with the given original and adjusted token lists.
Subclasses can override this to call different match methods (such as
matchNameDisambig).

</div>

<span id="objInScope"></span>

`objInScope (obj)`

[resolver.t](../file/resolver.t.html)\[[136](../source/resolver.t.html#136)\]

<div class="desc">

Determine if an object is in scope for the purposes of object
resolution. By default, we'll return true if the object is in our cached
scope list - this ensures that we produce results that are consistent
with getScopeList().

Some subclasses might want to override this method to decide on scope
without reference to a cached scope list, for efficiency reasons. For
example, if a command's scope is the set of all objects, caching the
full list would take a lot of memory; to save the memory, you could
override cacheScopeList() to do nothing at all, and then override
objInScope() to return true - this will report that every object is in
scope without bothering to store a list of every object.

Be aware that if you override objInScope(), you should ensure that
getScopeList() yields consistent results. In particular, objInScope()
should return true for every object in the list returned by
getScopeList() (although getScopeList() doesn't necessarily have to
return every object for which objInScope() is true).

</div>

<span id="resetResolver"></span>

`resetResolver ( )`

[resolver.t](../file/resolver.t.html)\[[53](../source/resolver.t.html#53)\]

<div class="desc">

Reset the resolver - this can be called if we are to re-use the same
resolver to resolve a list of noun phrases again.

</div>

<span id="resolvePronounAntecedent"></span>

`resolvePronounAntecedent (typ, np, results, poss)`

[resolver.t](../file/resolver.t.html)\[[205](../source/resolver.t.html#205)\]

<div class="desc">

Resolve a pronoun antecedent, given a pronoun selector. This returns a
list of ResolveInfo objects, for use in object resolution. 'poss' is
true if this is a possessive pronoun (his, her, its, etc), nil if it's
an ordinary, non-possessive pronoun (him, her, it, etc).

</div>

<span id="resolveUnknownNounPhrase"></span>

`resolveUnknownNounPhrase (tokList)`

[resolver.t](../file/resolver.t.html)\[[696](../source/resolver.t.html#696)\]

<div class="desc">

Resolve a noun phrase involving unknown words, if possible. If it is not
possible to resolve such a phrase, return nil; otherwise, return a list
of resolved objects. This routine does not interact with the user -
"oops" prompting is handled separately.

'tokList' is the token list for the phrase, in the canonical format as
returned from the tokenizer. Each element of 'tokList' is a sublist
representing one token.

Note that this routine allows for specialized unknown word resolution
separately from the more general matchName mechanism. The purpose of
this method is to allow the specific type of resolver to deal with
unknown words specially, rather than using the matchName mechanism. This
routine is called as a last resort, only after the matchName mechanism
fails to find any matches.

</div>

<span id="selectIndefinite"></span>

`selectIndefinite (results, lst, requiredNumber)`

[resolver.t](../file/resolver.t.html)\[[651](../source/resolver.t.html#651)\]

<div class="desc">

Select a resolution for an indefinite noun phrase ("a coin"), given a
list of possible matches. The matches will be given to us sorted from
most likely to least likely, as done by filterAmbiguousNounPhrase().

By default, we simply select the first 'n' items from the list (which
are the most likely matches), because in most contexts, an indefinite
noun phrase means that we should arbitrarily select any matching object.
This can be overridden for contexts in which indefinite noun phrases
must be handled differently.

</div>

<span id="withGlobals"></span>

`withGlobals (func)`

[resolver.t](../file/resolver.t.html)\[[708](../source/resolver.t.html#708)\]

<div class="desc">

Execute a callback function in the global context of our actor and
action - we'll set gActor and gAction to our own stored actor and action
values, then call the callback, then restore the old globals.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
