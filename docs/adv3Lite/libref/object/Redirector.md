---
layout: docs
---
<span class="title">Redirector</span><span class="type">class</span>

[doer.t](../file/doer.t.html)\[[21](../source/doer.t.html#21)\]

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

A Redirector is an object that can redirect one action to another via a
doInstead wrapper method that provides a common interface. Subclasses
are responsible for implementing the redirect method.

We begin this module by defing the Redirector class since in adv3Lite
(though not in Mercury) Redirector is the base class for Doer.

`class `**`Redirector`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Redirector`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`Redirector`**  
[`Doer`](../object/Doer.html)  
[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
[`Action`](../object/Action.html)  
[`IAction`](../object/IAction.html)  
[`LiteralAction`](../object/LiteralAction.html)  
[`MiscConvAction`](../object/MiscConvAction.html)  
[`NumericAction`](../object/NumericAction.html)  
[`SystemAction`](../object/SystemAction.html)  
[`FileOpAction`](../object/FileOpAction.html)  
[`TopicAction`](../object/TopicAction.html)  
[`ImplicitConversationAction`](../object/ImplicitConversationAction.html)  
[`TAction`](../object/TAction.html)  
[`LiteralTAction`](../object/LiteralTAction.html)  
[`NumericTAction`](../object/NumericTAction.html)  
[`TIAction`](../object/TIAction.html)  
[`TIAAction`](../object/TIAAction.html)  
[`TopicTAction`](../object/TopicTAction.html)  
[`TravelAction`](../object/TravelAction.html)  
[`ActorTopicEntry`](../object/ActorTopicEntry.html)  
[`AltTopic`](../object/AltTopic.html)  
[`AskAboutForTopic`](../object/AskAboutForTopic.html)  
[`AskForTopic`](../object/AskForTopic.html)  
[`AskTellGiveShowTopic`](../object/AskTellGiveShowTopic.html)  
[`AskTellShowTopic`](../object/AskTellShowTopic.html)  
[`AskTellTopic`](../object/AskTellTopic.html)  
[`AskTopic`](../object/AskTopic.html)  
[`CommandTopic`](../object/CommandTopic.html)  
[`DefaultTopic`](../object/DefaultTopic.html)  
[`DefaultAnyTopic`](../object/DefaultAnyTopic.html)  
[`DefaultAgendaTopic`](../object/DefaultAgendaTopic.html)  
[`DefaultAnyNonSayTopic`](../object/DefaultAnyNonSayTopic.html)  
[`DefaultAskForTopic`](../object/DefaultAskForTopic.html)  
[`DefaultAskQueryTopic`](../object/DefaultAskQueryTopic.html)  
[`DefaultAskTellTopic`](../object/DefaultAskTellTopic.html)  
[`DefaultAskTopic`](../object/DefaultAskTopic.html)  
[`DefaultCommandTopic`](../object/DefaultCommandTopic.html)  
[`DefaultConversationTopic`](../object/DefaultConversationTopic.html)  
[`DefaultNonSayTopic`](../object/DefaultNonSayTopic.html)  
[`DefaultGiveShowTopic`](../object/DefaultGiveShowTopic.html)  
[`DefaultGiveTopic`](../object/DefaultGiveTopic.html)  
[`DefaultQueryTopic`](../object/DefaultQueryTopic.html)  
[`DefaultSayQueryTopic`](../object/DefaultSayQueryTopic.html)  
[`DefaultSayTellTalkTopic`](../object/DefaultSayTellTalkTopic.html)  
[`DefaultSayTellTopic`](../object/DefaultSayTellTopic.html)  
[`DefaultSayTopic`](../object/DefaultSayTopic.html)  
[`DefaultShowTopic`](../object/DefaultShowTopic.html)  
[`DefaultTalkTopic`](../object/DefaultTalkTopic.html)  
[`DefaultTellTalkTopic`](../object/DefaultTellTalkTopic.html)  
[`DefaultTellTopic`](../object/DefaultTellTopic.html)  
[`GiveShowTopic`](../object/GiveShowTopic.html)  
[`GiveTopic`](../object/GiveTopic.html)  
[`InitiateTopic`](../object/InitiateTopic.html)  
[`NodeContinuationTopic`](../object/NodeContinuationTopic.html)  
[`NodeEndCheck`](../object/NodeEndCheck.html)  
[`MiscTopic`](../object/MiscTopic.html)  
[`GreetingTopic`](../object/GreetingTopic.html)  
[`ActorByeTopic`](../object/ActorByeTopic.html)  
[`BoredByeTopic`](../object/BoredByeTopic.html)  
[`ByeTopic`](../object/ByeTopic.html)  
[`HelloGoodbyeTopic`](../object/HelloGoodbyeTopic.html)  
[`HelloTopic`](../object/HelloTopic.html)  
[`ActorHelloTopic`](../object/ActorHelloTopic.html)  
[`ImpHelloTopic`](../object/ImpHelloTopic.html)  
[`ImpByeTopic`](../object/ImpByeTopic.html)  
[`LeaveByeTopic`](../object/LeaveByeTopic.html)  
[`HitTopic`](../object/HitTopic.html)  
[`KissTopic`](../object/KissTopic.html)  
[`NoTopic`](../object/NoTopic.html)  
[`TouchTopic`](../object/TouchTopic.html)  
[`YesNoTopic`](../object/YesNoTopic.html)  
[`YesTopic`](../object/YesTopic.html)  
[`SceneTopic`](../object/SceneTopic.html)  
[`SceneEndTopic`](../object/SceneEndTopic.html)  
[`SceneStartTopic`](../object/SceneStartTopic.html)  
[`ShowTopic`](../object/ShowTopic.html)  
[`SlaveTopic`](../object/SlaveTopic.html)  
[`SpecialTopic`](../object/SpecialTopic.html)  
[`QueryTopic`](../object/QueryTopic.html)  
[`SayTopic`](../object/SayTopic.html)  
[`TalkTopic`](../object/TalkTopic.html)  
[`AskTalkTopic`](../object/AskTalkTopic.html)  
[`AskTellTalkTopic`](../object/AskTellTalkTopic.html)  
[`TellTalkTopic`](../object/TellTalkTopic.html)  
[`TellTalkShowTopic`](../object/TellTalkShowTopic.html)  
[`TellTopic`](../object/TellTopic.html)  
[`BeforeRule`](../object/BeforeRule.html)  
[`Thing`](../object/Thing.html)  
[`Actor`](../object/Actor.html)  
[`Button`](../object/Button.html)  
[`Collective`](../object/Collective.html)  
[`DispensingCollective`](../object/DispensingCollective.html)  
[`Consultable`](../object/Consultable.html)  
[`Container`](../object/Container.html)  
[`Booth`](../object/Booth.html)  
[`OpenableContainer`](../object/OpenableContainer.html)  
[`KeyedContainer`](../object/KeyedContainer.html)  
[`LockableContainer`](../object/LockableContainer.html)  
[`Door`](../object/Door.html)  
[`SecretDoor`](../object/SecretDoor.html)  
[`Fixture`](../object/Fixture.html)  
[`CollectiveGroup`](../object/CollectiveGroup.html)  
[`MobileCollectiveGroup`](../object/MobileCollectiveGroup.html)  
[`Component`](../object/Component.html)  
[`ContainerDoor`](../object/ContainerDoor.html)  
[`Decoration`](../object/Decoration.html)  
[`Distant`](../object/Distant.html)  
[`RoomPart`](../object/RoomPart.html)  
[`Ceiling`](../object/Ceiling.html)  
[`DefaultWall`](../object/DefaultWall.html)  
[`SensoryEmanation`](../object/SensoryEmanation.html)  
[`Noise`](../object/Noise.html)  
[`SimpleNoise`](../object/SimpleNoise.html)  
[`Odor`](../object/Odor.html)  
[`SimpleOdor`](../object/SimpleOdor.html)  
[`Unthing`](../object/Unthing.html)  
[`Enterable`](../object/Enterable.html)  
[`Heavy`](../object/Heavy.html)  
[`Floor`](../object/Floor.html)  
[`Food`](../object/Food.html)  
[`Immovable`](../object/Immovable.html)  
[`Key`](../object/Key.html)  
[`Lever`](../object/Lever.html)  
[`MinorItem`](../object/MinorItem.html)  
[`Passage`](../object/Passage.html)  
[`PathPassage`](../object/PathPassage.html)  
[`Player`](../object/Player.html)  
[`RearContainer`](../object/RearContainer.html)  
[`Room`](../object/Room.html)  
[`OutdoorRoom`](../object/OutdoorRoom.html)  
[`Settable`](../object/Settable.html)  
[`Dial`](../object/Dial.html)  
[`NumberedDial`](../object/NumberedDial.html)  
[`SimpleAttachable`](../object/SimpleAttachable.html)  
[`AttachableComponent`](../object/AttachableComponent.html)  
[`NearbyAttachable`](../object/NearbyAttachable.html)  
[`Attachable`](../object/Attachable.html)  
[`StairwayDown`](../object/StairwayDown.html)  
[`StairwayUp`](../object/StairwayUp.html)  
[`SubComponent`](../object/SubComponent.html)  
[`Surface`](../object/Surface.html)  
[`Platform`](../object/Platform.html)  
[`Bed`](../object/Bed.html)  
[`Chair`](../object/Chair.html)  
[`Switch`](../object/Switch.html)  
[`Flashlight`](../object/Flashlight.html)  
[`SymPassage`](../object/SymPassage.html)  
[`SymDoor`](../object/SymDoor.html)  
[`SymPathPassage`](../object/SymPathPassage.html)  
[`SymStairway`](../object/SymStairway.html)  
[`Underside`](../object/Underside.html)  
[`Wearable`](../object/Wearable.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>



*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`doInstead`](#doInstead)[`doNested`](#doNested)[`doOtherAction`](#doOtherAction)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="doInstead"></span>

`doInstead (altAction, [args])`

[doer.t](../file/doer.t.html)\[[28](../source/doer.t.html#28)\]

<div class="desc">

doInstead() turns the current action into altAction with the objects
specified in args, and executes altAction as a replacement for the
current action.

</div>

<span id="doNested"></span>

`doNested (altAction, [args])`

[doer.t](../file/doer.t.html)\[[37](../source/doer.t.html#37)\]

<div class="desc">

doNested() executes altAction with the objects specified in args,
executins altAction as part of the current action.

</div>

<span id="doOtherAction"></span>

`doOtherAction (isReplacement, altAction, [args])`

[doer.t](../file/doer.t.html)\[[47](../source/doer.t.html#47)\]

<div class="desc">

Execute altAction on the objects specified in the args parameter. If
isReplacement is true make altAction a replacement for the current
action.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
