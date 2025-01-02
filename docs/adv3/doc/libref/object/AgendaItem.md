---
layout: docs
---
<span class="title">AgendaItem</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[5511](../source/actor.t.html#5511)\]

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

An "agenda item." Each actor can have its own "agenda," which is a list
of these items. Each item represents an action that the actor wants to
perform - this is usually a goal the actor wants to achieve, or a
conversational topic the actor wants to pursue.

On any given turn, an actor can carry out only one agenda item.

Agenda items are a convenient way of controlling complex behavior. Each
agenda item defines its own condition for when the actor can pursue the
item, and each item defines what the actor does when pursuing the item.
Agenda items can improve the code structure for an NPC's behavior, since
they nicely isolate a single background action and group it with the
conditions that trigger it. But the main benefit of agenda items is the
one-per-turn pacing - by executing at most one agenda item per turn, we
ensure that the NPC will carry out its self-initiated actions at a
measured pace, rather than as a jumble of random actions on a single
turn.

Note that NPC-initiated conversation messages override agendas. If an
actor has an active ConvNode, AND the ConvNode displays a "continuation
message" on a given turn, then the actor will not pursue its agenda on
that turn. In this way, ConvNode continuation messages act rather like
high-priority agenda items.

`class `**`AgendaItem`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`AgendaItem`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`AgendaItem`**  
`         `[`BoredomAgendaItem`](../object/BoredomAgendaItem.html)  
`         `[`ConvAgendaItem`](../object/ConvAgendaItem.html)  
`         `[`DelayedAgendaItem`](../object/DelayedAgendaItem.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`agendaOrder`](#agendaOrder)`  `[`initiallyActive`](#initiallyActive)`  `[`isDone`](#isDone)`  `[`isReady`](#isReady)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`execute`](#execute)`  `[`getActor`](#getActor)`  `[`invokeItem`](#invokeItem)`  `[`resetItem`](#resetItem)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="agendaOrder"></span>

`agendaOrder`

[actor.t](../file/actor.t.html)\[[5558](../source/actor.t.html#5558)\]

<div class="desc">

The ordering of the item relative to other agenda items. When we choose
an agenda item to execute, we always choose the lowest numbered item
that's ready to run. You can leave this with the default value if you
don't care about the order.

</div>

<span id="initiallyActive"></span>

`initiallyActive`

[actor.t](../file/actor.t.html)\[[5525](../source/actor.t.html#5525)\]

<div class="desc">

Is this item active at the start of the game? Override this to true to
make the item initially active; we'll add it to the actor's agenda
during the game's initialization.

</div>

<span id="isDone"></span>

`isDone`

[actor.t](../file/actor.t.html)\[[5550](../source/actor.t.html#5550)\]

<div class="desc">

Is this item done? On each turn, we'll remove any items marked as done
from the actor's agenda list. We remove items marked as done before
executing any items, so done-ness overrides readiness; in other words,
if an item is both 'done' and 'ready', it'll simply be removed from the
list and will not be executed.

By default, we simply return nil. Items can override this to provide a
declarative condition of done-ness, or they can simply set the property
to true when they finish their work. For example, an item that only
needs to execute once can simply set isDone to true in its invokeItem()
method; an item that's to be repeated until some success condition
obtains can override isDone to return the success condition.

</div>

<span id="isReady"></span>

`isReady`

[actor.t](../file/actor.t.html)\[[5533](../source/actor.t.html#5533)\]

<div class="desc">

Is this item ready to execute? The actor will only execute an agenda
item when this condition is met. By default, we're ready to execute.
Items can override this to provide a declarative condition of readiness
if desired.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="execute"></span>

`execute ( )`

[actor.t](../file/actor.t.html)\[[5587](../source/actor.t.html#5587)\]

<div class="desc">

An AgendaItem initializer. For each agenda item that's initially active,
we'll add the item to its actor's agenda.

</div>

<span id="getActor"></span>

`getActor ( )`

[actor.t](../file/actor.t.html)\[[5518](../source/actor.t.html#5518)\]

<div class="desc">

My actor - agenda items should be nested within the actor using '+' so
that we can find our actor. Note that this doesn't add the item to the
actor's agenda - that has to be done explicitly with
actor.addToAgenda().

</div>

<span id="invokeItem"></span>

`invokeItem ( )`

[actor.t](../file/actor.t.html)\[[5565](../source/actor.t.html#5565)\]

<div class="desc">

Execute this item. This is invoked during the actor's turn when the item
is the first item that's ready to execute in the actor's agenda list. We
do nothing by default.

</div>

<span id="resetItem"></span>

`resetItem ( )`

[actor.t](../file/actor.t.html)\[[5574](../source/actor.t.html#5574)\]

<div class="desc">

Reset the item. This is invoked whenever the item is added to an actor's
agenda. By default, we'll set isDone to nil as long as isDone isn't a
method; this makes it easier to reuse agenda items, since we don't have
to worry about clearing out the isDone flag when reusing an item.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
