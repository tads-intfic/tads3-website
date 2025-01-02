---
layout: docs
---
<span class="title">BoredomAgendaItem</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[5180](../source/actor.t.html#5180)\]

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

A special kind of agenda item for monitoring "boredom" during a
conversation. We check to see if our actor is in a conversation, and the
PC has been ignoring the conversation for too long; if so, our actor
initiates the end of the conversation, since the PC apparently isn't
paying any attention to us.

`class `**`BoredomAgendaItem`**` :   `[`AgendaItem`](../object/AgendaItem.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`BoredomAgendaItem`**  
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

` `[`agendaOrder`](#agendaOrder)`  `

Inherited from `AgendaItem` :  
` `[`initiallyActive`](../object/AgendaItem.html#initiallyActive)`  `[`isDone`](../object/AgendaItem.html#isDone)`  `[`isReady`](../object/AgendaItem.html#isReady)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`invokeItem`](#invokeItem)`  `[`isReady`](#isReady)`  `

Inherited from `AgendaItem` :  
` `[`execute`](../object/AgendaItem.html#execute)`  `[`getActor`](../object/AgendaItem.html#getActor)`  `[`resetItem`](../object/AgendaItem.html#resetItem)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="agendaOrder"></span>

`agendaOrder`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5218](../source/actor.t.html#5218)\]

<div class="desc">

by default, handle boredom before other agenda items - we do this
because an ongoing conversation will be the first thing on the NPC's
mind

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (actor)`

[actor.t](../file/actor.t.html)\[[5182](../source/actor.t.html#5182)\]

<div class="desc">

we construct these dynamically during actor initialization

</div>

<span id="invokeItem"></span>

`invokeItem ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5204](../source/actor.t.html#5204)\]

<div class="desc">

on invocation, end the conversation

</div>

<span id="isReady"></span>

`isReady ( )`

[actor.t](../file/actor.t.html)\[[5192](../source/actor.t.html#5192)\]

<div class="desc">

we're ready to run if our actor is in an InConversationState and its
boredom count has reached the limit for the state

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
