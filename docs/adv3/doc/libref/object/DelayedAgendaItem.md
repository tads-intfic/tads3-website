---
layout: docs
---
<span class="title">DelayedAgendaItem</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[5625](../source/actor.t.html#5625)\]

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



A delayed agenda item. This type of item becomes ready to execute when
the game clock reaches a given turn counter.

`class `**`DelayedAgendaItem`**` :   `[`AgendaItem`](../object/AgendaItem.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`DelayedAgendaItem`**  
[`AgendaItem`](../object/AgendaItem.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`isReady`](#isReady) [`readyTime`](#readyTime)

Inherited from `AgendaItem` :  
[`agendaOrder`](../object/AgendaItem.html#agendaOrder) [`initiallyActive`](../object/AgendaItem.html#initiallyActive) [`isDone`](../object/AgendaItem.html#isDone)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`setDelay`](#setDelay)

Inherited from `AgendaItem` :  
[`execute`](../object/AgendaItem.html#execute) [`getActor`](../object/AgendaItem.html#getActor) [`invokeItem`](../object/AgendaItem.html#invokeItem) [`resetItem`](../object/AgendaItem.html#resetItem)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="isReady"></span>

`isReady`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5627](../source/actor.t.html#5627)\]



we're ready if the game clock time has reached our ready time



<span id="readyTime"></span>

`readyTime`

[actor.t](../file/actor.t.html)\[[5630](../source/actor.t.html#5630)\]



the turn counter on the game clock when we become ready



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="setDelay"></span>

`setDelay (turns)`

[actor.t](../file/actor.t.html)\[[5641](../source/actor.t.html#5641)\]



Set our ready time based on a delay from the current time. We'll become
ready after the given number of turns elapses. For convenience, we
return 'self', so a delayed agenda item can be initialized and added to
an actor's agenda in one simple operation, like so:

actor.addToAgenda(item.setDelay(1));





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


