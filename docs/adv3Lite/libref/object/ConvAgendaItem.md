---
layout: docs
---
<span class="title">ConvAgendaItem</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[5914](../source/actor.t.html#5914)\]

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



A "conversational" agenda item. This type of item is ready to execute
only when the actor hasn't engaged in conversation during the same turn.
This type of item is ideal for situations where we want the actor to
pursue a conversational topic, because we won't initiate the action
until we get a turn where the player didn't directly talk to us.

`class `**`ConvAgendaItem`**` :   `[`AgendaItem`](../object/AgendaItem.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ConvAgendaItem`**  
[`AgendaItem`](../object/AgendaItem.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`greetingDisplayed`](#greetingDisplayed)[`isReady`](#isReady)[`otherActor`](#otherActor)[`reasonInvoked`](#reasonInvoked)

Inherited from `AgendaItem` :  
[`agendaOrder`](../object/AgendaItem.html#agendaOrder)[`calledBy`](../object/AgendaItem.html#calledBy)[`initiallyActive`](../object/AgendaItem.html#initiallyActive)[`invokedByActor`](../object/AgendaItem.html#invokedByActor)[`isDone`](../object/AgendaItem.html#isDone)[`name`](../object/AgendaItem.html#name)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`invokeItemBase`](#invokeItemBase)

Inherited from `AgendaItem` :  
[`getActor`](../object/AgendaItem.html#getActor)[`invokeItem`](../object/AgendaItem.html#invokeItem)[`registerItem`](../object/AgendaItem.html#registerItem)[`report`](../object/AgendaItem.html#report)[`resetItem`](../object/AgendaItem.html#resetItem)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="greetingDisplayed"></span>

`greetingDisplayed`

[actor.t](../file/actor.t.html)\[[6004](../source/actor.t.html#6004)\]



Flag; did invoking this item result in the display of a greeting (from
an ActorHelloTopic)?



<span id="isReady"></span>

`isReady`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5915](../source/actor.t.html#5915)\]



*no description available*



<span id="otherActor"></span>

`otherActor`

[actor.t](../file/actor.t.html)\[[5922](../source/actor.t.html#5922)\]



The actor we're planning to address - by default, this is the PC. If the
conversational overture will be directed to another NPC, you can specify
that other actor here.



<span id="reasonInvoked"></span>

`reasonInvoked`

[actor.t](../file/actor.t.html)\[[6012](../source/actor.t.html#6012)\]



Why was this ConvAgenda Item invoked?  
1 = InitiateConversationReason = Actor initiating new conversation  
2 = ConversationLullReason = Actor using lull in conversation  
3 = DefaultTopicReason = Actor responding to DefaultAgendaTopic



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="invokeItemBase"></span>

`invokeItemBase (caller)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5925](../source/actor.t.html#5925)\]



There's more work to do on a ConvAgendaItem when it's invoked





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


