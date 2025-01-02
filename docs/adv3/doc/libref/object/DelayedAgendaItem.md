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

<div class="fdesc">

A delayed agenda item. This type of item becomes ready to execute when
the game clock reaches a given turn counter.

`class `**`DelayedAgendaItem`**` :   `[`AgendaItem`](../object/AgendaItem.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`DelayedAgendaItem`**  
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

` `[`isReady`](#isReady)`  `[`readyTime`](#readyTime)`  `

Inherited from `AgendaItem` :  
` `[`agendaOrder`](../object/AgendaItem.html#agendaOrder)`  `[`initiallyActive`](../object/AgendaItem.html#initiallyActive)`  `[`isDone`](../object/AgendaItem.html#isDone)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`setDelay`](#setDelay)`  `

Inherited from `AgendaItem` :  
` `[`execute`](../object/AgendaItem.html#execute)`  `[`getActor`](../object/AgendaItem.html#getActor)`  `[`invokeItem`](../object/AgendaItem.html#invokeItem)`  `[`resetItem`](../object/AgendaItem.html#resetItem)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="isReady"></span>

`isReady`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5627](../source/actor.t.html#5627)\]

<div class="desc">

we're ready if the game clock time has reached our ready time

</div>

<span id="readyTime"></span>

`readyTime`

[actor.t](../file/actor.t.html)\[[5630](../source/actor.t.html#5630)\]

<div class="desc">

the turn counter on the game clock when we become ready

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="setDelay"></span>

`setDelay (turns)`

[actor.t](../file/actor.t.html)\[[5641](../source/actor.t.html#5641)\]

<div class="desc">

Set our ready time based on a delay from the current time. We'll become
ready after the given number of turns elapses. For convenience, we
return 'self', so a delayed agenda item can be initialized and added to
an actor's agenda in one simple operation, like so:

actor.addToAgenda(item.setDelay(1));

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
