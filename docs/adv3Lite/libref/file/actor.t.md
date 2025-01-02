---
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

<div class="fdesc">

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
actor.t

This module forms part of the adv3Lite library (c) 2012-13 Eric Eve

</div>

<span id="_ClassSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Classes</span>  

</div>

` `[`Actor`](../object/Actor.html)`  `[`ActorByeTopic`](../object/ActorByeTopic.html)`  `[`ActorHelloTopic`](../object/ActorHelloTopic.html)`  `[`ActorState`](../object/ActorState.html)`  `[`ActorTopicDatabase`](../object/ActorTopicDatabase.html)`  `[`ActorTopicEntry`](../object/ActorTopicEntry.html)`  `[`AgendaItem`](../object/AgendaItem.html)`  `[`AgendaManager`](../object/AgendaManager.html)`  `[`AltTopic`](../object/AltTopic.html)`  `[`AskAboutForTopic`](../object/AskAboutForTopic.html)`  `[`AskForTopic`](../object/AskForTopic.html)`  `[`AskTalkTopic`](../object/AskTalkTopic.html)`  `[`AskTellGiveShowTopic`](../object/AskTellGiveShowTopic.html)`  `[`AskTellShowTopic`](../object/AskTellShowTopic.html)`  `[`AskTellTalkTopic`](../object/AskTellTalkTopic.html)`  `[`AskTellTopic`](../object/AskTellTopic.html)`  `[`AskTopic`](../object/AskTopic.html)`  `[`BoredByeTopic`](../object/BoredByeTopic.html)`  `[`BoredomAgendaItem`](../object/BoredomAgendaItem.html)`  `[`ByeTopic`](../object/ByeTopic.html)`  `[`CommandTopic`](../object/CommandTopic.html)`  `[`CommandTopicHelper`](../object/CommandTopicHelper.html)`  `[`ConvAgendaItem`](../object/ConvAgendaItem.html)`  `[`ConvNode`](../object/ConvNode.html)`  `[`DefaultAgendaTopic`](../object/DefaultAgendaTopic.html)`  `[`DefaultAnyNonSayTopic`](../object/DefaultAnyNonSayTopic.html)`  `[`DefaultAnyTopic`](../object/DefaultAnyTopic.html)`  `[`DefaultAskForTopic`](../object/DefaultAskForTopic.html)`  `[`DefaultAskQueryTopic`](../object/DefaultAskQueryTopic.html)`  `[`DefaultAskTellTopic`](../object/DefaultAskTellTopic.html)`  `[`DefaultAskTopic`](../object/DefaultAskTopic.html)`  `[`DefaultCommandTopic`](../object/DefaultCommandTopic.html)`  `[`DefaultConversationTopic`](../object/DefaultConversationTopic.html)`  `[`DefaultGiveShowTopic`](../object/DefaultGiveShowTopic.html)`  `[`DefaultGiveTopic`](../object/DefaultGiveTopic.html)`  `[`DefaultNonSayTopic`](../object/DefaultNonSayTopic.html)`  `[`DefaultQueryTopic`](../object/DefaultQueryTopic.html)`  `[`DefaultSayQueryTopic`](../object/DefaultSayQueryTopic.html)`  `[`DefaultSayTellTalkTopic`](../object/DefaultSayTellTalkTopic.html)`  `[`DefaultSayTellTopic`](../object/DefaultSayTellTopic.html)`  `[`DefaultSayTopic`](../object/DefaultSayTopic.html)`  `[`DefaultShowTopic`](../object/DefaultShowTopic.html)`  `[`DefaultTalkTopic`](../object/DefaultTalkTopic.html)`  `[`DefaultTellTalkTopic`](../object/DefaultTellTalkTopic.html)`  `[`DefaultTellTopic`](../object/DefaultTellTopic.html)`  `[`DefaultTopic`](../object/DefaultTopic.html)`  `[`DelayedAgendaItem`](../object/DelayedAgendaItem.html)`  `[`FollowAgendaItem`](../object/FollowAgendaItem.html)`  `[`GiveShowTopic`](../object/GiveShowTopic.html)`  `[`GiveTopic`](../object/GiveTopic.html)`  `[`GreetingTopic`](../object/GreetingTopic.html)`  `[`HelloGoodbyeTopic`](../object/HelloGoodbyeTopic.html)`  `[`HelloTopic`](../object/HelloTopic.html)`  `[`HitTopic`](../object/HitTopic.html)`  `[`ImpByeTopic`](../object/ImpByeTopic.html)`  `[`ImpHelloTopic`](../object/ImpHelloTopic.html)`  `[`InitiateTopic`](../object/InitiateTopic.html)`  `[`KissTopic`](../object/KissTopic.html)`  `[`LeaveByeTopic`](../object/LeaveByeTopic.html)`  `[`MiscTopic`](../object/MiscTopic.html)`  `[`NodeContinuationTopic`](../object/NodeContinuationTopic.html)`  `[`NodeEndCheck`](../object/NodeEndCheck.html)`  `[`NoTopic`](../object/NoTopic.html)`  `[`ProxyActor`](../object/ProxyActor.html)`  `[`QueryTopic`](../object/QueryTopic.html)`  `[`SayTopic`](../object/SayTopic.html)`  `[`ShowTopic`](../object/ShowTopic.html)`  `[`SlaveTopic`](../object/SlaveTopic.html)`  `[`SpecialTopic`](../object/SpecialTopic.html)`  `[`TalkTopic`](../object/TalkTopic.html)`  `[`TellTalkShowTopic`](../object/TellTalkShowTopic.html)`  `[`TellTalkTopic`](../object/TellTalkTopic.html)`  `[`TellTopic`](../object/TellTopic.html)`  `[`TopicGroup`](../object/TopicGroup.html)`  `[`TouchTopic`](../object/TouchTopic.html)`  `[`YesNoTopic`](../object/YesNoTopic.html)`  `[`YesTopic`](../object/YesTopic.html)`  `
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Objects</span>  

</div>

` `[`actorHelloTopicObj`](../object/actorHelloTopicObj.html)`  `[`actorPreinit`](../object/actorPreinit.html)`  `[`actorSchedule`](../object/actorSchedule.html)`  `[`conversationManager`](../object/conversationManager.html)`  `[`convNodePreinit`](../object/convNodePreinit.html)`  `[`endConvActor`](../object/endConvActor.html)`  `[`EndConvBlocker`](../object/EndConvBlocker.html)`  `[`endConvBoredom`](../object/endConvBoredom.html)`  `[`endConvBye`](../object/endConvBye.html)`  `[`endConvLeave`](../object/endConvLeave.html)`  `[`helloTopicObj`](../object/helloTopicObj.html)`  `[`hitTopicObj`](../object/hitTopicObj.html)`  `[`impHelloTopicObj`](../object/impHelloTopicObj.html)`  `[`kissTopicObj`](../object/kissTopicObj.html)`  `[`nodeEndCheckObj`](../object/nodeEndCheckObj.html)`  `[`nodeObj`](../object/nodeObj.html)`  `[`objTablePreinit`](../object/objTablePreinit.html)`  `[`suggestedTopicLister`](../object/suggestedTopicLister.html)`  `[`touchTopicObj`](../object/touchTopicObj.html)`  `
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

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
