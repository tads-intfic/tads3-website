---
---
<span class="title">ConvAgendaItem</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[5608](../source/actor.t.html#5608)\]

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

` `[`isReady`](#isReady)`  `[`otherActor`](#otherActor)`  `

Inherited from `AgendaItem` :  
` `[`agendaOrder`](../object/AgendaItem.html#agendaOrder)`  `[`initiallyActive`](../object/AgendaItem.html#initiallyActive)`  `[`isDone`](../object/AgendaItem.html#isDone)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `

Inherited from `AgendaItem` :  
` `[`execute`](../object/AgendaItem.html#execute)`  `[`getActor`](../object/AgendaItem.html#getActor)`  `[`invokeItem`](../object/AgendaItem.html#invokeItem)`  `[`resetItem`](../object/AgendaItem.html#resetItem)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="isReady"></span>

`isReady`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5609](../source/actor.t.html#5609)\]

<div class="desc">

*no description available*

</div>

<span id="otherActor"></span>

`otherActor`

[actor.t](../file/actor.t.html)\[[5618](../source/actor.t.html#5618)\]

<div class="desc">

The actor we're planning to address - by default, this is the PC. If the
conversational overture will be directed to another NPC, you can specify
that other actor here.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

*(none)*

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
