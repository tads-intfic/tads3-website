---
layout: docs
---
<span class="title">BoredomAgendaItem</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[6057](../source/actor.t.html#6057)\]

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



A special kind of agenda item for monitoring "boredom" during a
conversation. We check to see if our actor is in a conversation, and the
PC has been ignoring the conversation for too long; if so, our actor
initiates the end of the conversation, since the PC apparently isn't
paying any attention to us.

`class `**`BoredomAgendaItem`**` :   `[`AgendaItem`](../object/AgendaItem.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`BoredomAgendaItem`**  
[`AgendaItem`](../object/AgendaItem.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`agendaOrder`](#agendaOrder)

Inherited from `AgendaItem` :  
[`calledBy`](../object/AgendaItem.html#calledBy) [`initiallyActive`](../object/AgendaItem.html#initiallyActive) [`invokedByActor`](../object/AgendaItem.html#invokedByActor) [`isDone`](../object/AgendaItem.html#isDone) [`isReady`](../object/AgendaItem.html#isReady) [`name`](../object/AgendaItem.html#name)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct) [`invokeItem`](#invokeItem) [`isReady`](#isReady)

Inherited from `AgendaItem` :  
[`getActor`](../object/AgendaItem.html#getActor) [`invokeItemBase`](../object/AgendaItem.html#invokeItemBase) [`registerItem`](../object/AgendaItem.html#registerItem) [`report`](../object/AgendaItem.html#report) [`resetItem`](../object/AgendaItem.html#resetItem)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="agendaOrder"></span>

`agendaOrder`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6105](../source/actor.t.html#6105)\]



by default, handle boredom before other agenda items - we do this
because an ongoing conversation will be the first thing on the NPC's
mind



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (actor)`

[actor.t](../file/actor.t.html)\[[6059](../source/actor.t.html#6059)\]



we construct these dynamically during actor initialization



<span id="invokeItem"></span>

`invokeItem ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6083](../source/actor.t.html#6083)\]



on invocation, end the conversation



<span id="isReady"></span>

`isReady ( )`

[actor.t](../file/actor.t.html)\[[6069](../source/actor.t.html#6069)\]



we're ready to run if our actor is in an InConversationState and its
boredom count has reached the limit for the state





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


