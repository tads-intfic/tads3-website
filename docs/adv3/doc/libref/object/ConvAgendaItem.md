---
layout: docs
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



[`isReady`](#isReady)[`otherActor`](#otherActor)

Inherited from `AgendaItem` :  
[`agendaOrder`](../object/AgendaItem.html#agendaOrder)[`initiallyActive`](../object/AgendaItem.html#initiallyActive)[`isDone`](../object/AgendaItem.html#isDone)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  





Inherited from `AgendaItem` :  
[`execute`](../object/AgendaItem.html#execute)[`getActor`](../object/AgendaItem.html#getActor)[`invokeItem`](../object/AgendaItem.html#invokeItem)[`resetItem`](../object/AgendaItem.html#resetItem)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="isReady"></span>

`isReady`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5609](../source/actor.t.html#5609)\]



*no description available*



<span id="otherActor"></span>

`otherActor`

[actor.t](../file/actor.t.html)\[[5618](../source/actor.t.html#5618)\]



The actor we're planning to address - by default, this is the PC. If the
conversational overture will be directed to another NPC, you can specify
that other actor here.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


