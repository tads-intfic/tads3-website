---
layout: docs
---
<span class="title">DelayedAgendaItem</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[6020](../source/actor.t.html#6020)\]

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
[`agendaOrder`](../object/AgendaItem.html#agendaOrder) [`calledBy`](../object/AgendaItem.html#calledBy) [`initiallyActive`](../object/AgendaItem.html#initiallyActive) [`invokedByActor`](../object/AgendaItem.html#invokedByActor) [`isDone`](../object/AgendaItem.html#isDone) [`name`](../object/AgendaItem.html#name)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`setDelay`](#setDelay)

Inherited from `AgendaItem` :  
[`getActor`](../object/AgendaItem.html#getActor) [`invokeItem`](../object/AgendaItem.html#invokeItem) [`invokeItemBase`](../object/AgendaItem.html#invokeItemBase) [`registerItem`](../object/AgendaItem.html#registerItem) [`report`](../object/AgendaItem.html#report) [`resetItem`](../object/AgendaItem.html#resetItem)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="isReady"></span>

`isReady`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6022](../source/actor.t.html#6022)\]



we're ready if the game clock time has reached our ready time



<span id="readyTime"></span>

`readyTime`

[actor.t](../file/actor.t.html)\[[6025](../source/actor.t.html#6025)\]



the turn counter on the game clock when we become ready



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="setDelay"></span>

`setDelay (turns)`

[actor.t](../file/actor.t.html)\[[6036](../source/actor.t.html#6036)\]



Set our ready time based on a delay from the current time. We'll become
ready after the given number of turns elapses. For convenience, we
return 'self', so a delayed agenda item can be initialized and added to
an actor's agenda in one simple operation, like so:

actor.addToAgenda(item.setDelay(1));





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


