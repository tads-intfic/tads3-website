---
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

<div class="fdesc">

A "conversational" agenda item. This type of item is ready to execute
only when the actor hasn't engaged in conversation during the same turn.
This type of item is ideal for situations where we want the actor to
pursue a conversational topic, because we won't initiate the action
until we get a turn where the player didn't directly talk to us.

`class `**`ConvAgendaItem`**` :   `[`AgendaItem`](../object/AgendaItem.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ConvAgendaItem`**  
`         `[`AgendaItem`](../object/AgendaItem.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`greetingDisplayed`](#greetingDisplayed)`  `[`isReady`](#isReady)`  `[`otherActor`](#otherActor)`  `[`reasonInvoked`](#reasonInvoked)`  `

Inherited from `AgendaItem` :  
` `[`agendaOrder`](../object/AgendaItem.html#agendaOrder)`  `[`calledBy`](../object/AgendaItem.html#calledBy)`  `[`initiallyActive`](../object/AgendaItem.html#initiallyActive)`  `[`invokedByActor`](../object/AgendaItem.html#invokedByActor)`  `[`isDone`](../object/AgendaItem.html#isDone)`  `[`name`](../object/AgendaItem.html#name)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`invokeItemBase`](#invokeItemBase)`  `

Inherited from `AgendaItem` :  
` `[`getActor`](../object/AgendaItem.html#getActor)`  `[`invokeItem`](../object/AgendaItem.html#invokeItem)`  `[`registerItem`](../object/AgendaItem.html#registerItem)`  `[`report`](../object/AgendaItem.html#report)`  `[`resetItem`](../object/AgendaItem.html#resetItem)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="greetingDisplayed"></span>

`greetingDisplayed`

[actor.t](../file/actor.t.html)\[[6004](../source/actor.t.html#6004)\]

<div class="desc">

Flag; did invoking this item result in the display of a greeting (from
an ActorHelloTopic)?

</div>

<span id="isReady"></span>

`isReady`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5915](../source/actor.t.html#5915)\]

<div class="desc">

*no description available*

</div>

<span id="otherActor"></span>

`otherActor`

[actor.t](../file/actor.t.html)\[[5922](../source/actor.t.html#5922)\]

<div class="desc">

The actor we're planning to address - by default, this is the PC. If the
conversational overture will be directed to another NPC, you can specify
that other actor here.

</div>

<span id="reasonInvoked"></span>

`reasonInvoked`

[actor.t](../file/actor.t.html)\[[6012](../source/actor.t.html#6012)\]

<div class="desc">

Why was this ConvAgenda Item invoked?  
1 = InitiateConversationReason = Actor initiating new conversation  
2 = ConversationLullReason = Actor using lull in conversation  
3 = DefaultTopicReason = Actor responding to DefaultAgendaTopic

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="invokeItemBase"></span>

`invokeItemBase (caller)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5925](../source/actor.t.html#5925)\]

<div class="desc">

There's more work to do on a ConvAgendaItem when it's invoked

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
