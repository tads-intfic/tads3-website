---
layout: docs
---
<span class="title">ReplaceRedirector</span><span class="type">class</span>

[thing.t](../file/thing.t.html)\[[950](../source/thing.t.html#950)\]

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



A ReplaceRedirector is a Redirector that uses replaceAction (or its
execNestedAction equivalent) to redirect one action to another.

`class `**`ReplaceRedirector`**` :   `[`Redirector`](../object/Redirector.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ReplaceRedirector`**  
[`Redirector`](../object/Redirector.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`ReplaceRedirector`**  
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



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`redirect`](#redirect)

Inherited from `Redirector` :  
[`doInstead`](../object/Redirector.html#doInstead) [`doNested`](../object/Redirector.html#doNested) [`doOtherAction`](../object/Redirector.html#doOtherAction)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="redirect"></span>

`redirect (cmd, altAction, dobj, :?, iobj, :?, aobj, :?, isReplacement, :, =, true)`

[thing.t](../file/thing.t.html)\[[961](../source/thing.t.html#961)\]



User code should normally call this method via doInstead rather than
directly. cmd is the current command object, altAction is the action we
want to perform instead of the current action, dobj and iobj are the
direct and indirect objects of the new action, and isReplacement
determines whether the new action replaces the original one (if true) or
merely takes place during the execution of the original one, which then
resumes when the new action is complete (if isReplacement is nil).
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


