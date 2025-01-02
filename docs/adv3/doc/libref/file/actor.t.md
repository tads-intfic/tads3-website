---
layout: docs
---
<span class="title">actor.t</span><span class="type">file</span>

[source file](../source/actor.t.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Objects**  
[Summary](#_ObjectSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)



TADS 3 Library - actors

This module provides definitions related to actors, which represent
characters in the game.



<span id="_ClassSummary_"></span>



<span class="hdln">Summary of Classes</span>  



[`AccompanyingInTravelState`](../object/AccompanyingInTravelState.html) [`AccompanyingState`](../object/AccompanyingState.html) [`Actor`](../object/Actor.html) [`ActorByeTopic`](../object/ActorByeTopic.html) [`ActorHelloTopic`](../object/ActorHelloTopic.html) [`ActorState`](../object/ActorState.html) [`ActorTopicDatabase`](../object/ActorTopicDatabase.html) [`AgendaItem`](../object/AgendaItem.html) [`AltTopic`](../object/AltTopic.html) [`AskAboutForTopic`](../object/AskAboutForTopic.html) [`AskForTopic`](../object/AskForTopic.html) [`AskTellAboutForTopic`](../object/AskTellAboutForTopic.html) [`AskTellGiveShowTopic`](../object/AskTellGiveShowTopic.html) [`AskTellShowTopic`](../object/AskTellShowTopic.html) [`AskTellTopic`](../object/AskTellTopic.html) [`AskTopic`](../object/AskTopic.html) [`BoredByeTopic`](../object/BoredByeTopic.html) [`BoredomAgendaItem`](../object/BoredomAgendaItem.html) [`ByeTopic`](../object/ByeTopic.html) [`CommandTopic`](../object/CommandTopic.html) [`ConvAgendaItem`](../object/ConvAgendaItem.html) [`ConversationReadyState`](../object/ConversationReadyState.html) [`ConvNode`](../object/ConvNode.html) [`ConvType`](../object/ConvType.html) [`DefaultAnyTopic`](../object/DefaultAnyTopic.html) [`DefaultAskForTopic`](../object/DefaultAskForTopic.html) [`DefaultAskTellTopic`](../object/DefaultAskTellTopic.html) [`DefaultAskTopic`](../object/DefaultAskTopic.html) [`DefaultCommandTopic`](../object/DefaultCommandTopic.html) [`DefaultGiveShowTopic`](../object/DefaultGiveShowTopic.html) [`DefaultGiveTopic`](../object/DefaultGiveTopic.html) [`DefaultInitiateTopic`](../object/DefaultInitiateTopic.html) [`DefaultShowTopic`](../object/DefaultShowTopic.html) [`DefaultTellTopic`](../object/DefaultTellTopic.html) [`DefaultTopic`](../object/DefaultTopic.html) [`DelayedAgendaItem`](../object/DelayedAgendaItem.html) [`FollowInfo`](../object/FollowInfo.html) [`GiveShowTopic`](../object/GiveShowTopic.html) [`GiveTopic`](../object/GiveTopic.html) [`HelloGoodbyeTopic`](../object/HelloGoodbyeTopic.html) [`HelloTopic`](../object/HelloTopic.html) [`HermitActorState`](../object/HermitActorState.html) [`ImpByeTopic`](../object/ImpByeTopic.html) [`ImpHelloTopic`](../object/ImpHelloTopic.html) [`InConversationState`](../object/InConversationState.html) [`InitiateTopic`](../object/InitiateTopic.html) [`LeaveByeTopic`](../object/LeaveByeTopic.html) [`MiscTopic`](../object/MiscTopic.html) [`NoTopic`](../object/NoTopic.html) [`PendingCommandAction`](../object/PendingCommandAction.html) [`PendingCommandInfo`](../object/PendingCommandInfo.html) [`PendingCommandMarker`](../object/PendingCommandMarker.html) [`PendingCommandToks`](../object/PendingCommandToks.html) [`PendingConvInfo`](../object/PendingConvInfo.html) [`PendingResponseInfo`](../object/PendingResponseInfo.html) [`Person`](../object/Person.html) [`Posture`](../object/Posture.html) [`ShowTopic`](../object/ShowTopic.html) [`SpecialTopic`](../object/SpecialTopic.html) [`SuggestedAskForTopic`](../object/SuggestedAskForTopic.html) [`SuggestedAskTopic`](../object/SuggestedAskTopic.html) [`SuggestedGiveTopic`](../object/SuggestedGiveTopic.html) [`SuggestedNoTopic`](../object/SuggestedNoTopic.html) [`SuggestedShowTopic`](../object/SuggestedShowTopic.html) [`SuggestedTellTopic`](../object/SuggestedTellTopic.html) [`SuggestedTopic`](../object/SuggestedTopic.html) [`SuggestedTopicTree`](../object/SuggestedTopicTree.html) [`SuggestedYesTopic`](../object/SuggestedYesTopic.html) [`TellTopic`](../object/TellTopic.html) [`ThingMatchTopic`](../object/ThingMatchTopic.html) [`Topic`](../object/Topic.html) [`TopicDatabase`](../object/TopicDatabase.html) [`TopicEntry`](../object/TopicEntry.html) [`TopicGroup`](../object/TopicGroup.html) [`TopicMatchTopic`](../object/TopicMatchTopic.html) [`TopicOrThingMatchTopic`](../object/TopicOrThingMatchTopic.html) [`UntakeableActor`](../object/UntakeableActor.html) [`YesNoTopic`](../object/YesNoTopic.html) [`YesTopic`](../object/YesTopic.html)
<span id="_ObjectSummary_"></span>



<span class="hdln">Summary of Global Objects</span>  



[`actorByeTopicObj`](../object/actorByeTopicObj.html) [`actorHelloTopicObj`](../object/actorHelloTopicObj.html) [`askAboutConvType`](../object/askAboutConvType.html) [`askForConvType`](../object/askForConvType.html) [`boredByeTopicObj`](../object/boredByeTopicObj.html) [`byeConvType`](../object/byeConvType.html) [`byeTopicObj`](../object/byeTopicObj.html) [`commandConvType`](../object/commandConvType.html) [`consultConvType`](../object/consultConvType.html) [`conversationManager`](../object/conversationManager.html) [`giveConvType`](../object/giveConvType.html) [`helloConvType`](../object/helloConvType.html) [`helloTopicObj`](../object/helloTopicObj.html) [`impHelloTopicObj`](../object/impHelloTopicObj.html) [`initiateConvType`](../object/initiateConvType.html) [`leaveByeTopicObj`](../object/leaveByeTopicObj.html) [`lying`](../object/lying.html) [`noConvType`](../object/noConvType.html) [`noTopicObj`](../object/noTopicObj.html) [`showConvType`](../object/showConvType.html) [`sitting`](../object/sitting.html) [`specialTopicHistory`](../object/specialTopicHistory.html) [`specialTopicPreParser`](../object/specialTopicPreParser.html) [`standing`](../object/standing.html) [`tellAboutConvType`](../object/tellAboutConvType.html) [`yesConvType`](../object/yesConvType.html) [`yesTopicObj`](../object/yesTopicObj.html)
<span id="FunctionSummary_"></span>



<span class="hdln">Summary of Global Functions</span>  



[`setPlayer`](#setPlayer)

<span id="_Functions_"></span>



<span class="hdln">Global Functions</span>  



<span id="setPlayer"></span>

`setPlayer (actor)`

[actor.t](../file/actor.t.html)\[[10575](../source/actor.t.html#10575)\]



Set the current player character





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


