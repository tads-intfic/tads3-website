<span class="title">FollowAgendaItem</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[6112](../source/actor.t.html#6112)\]

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

An AgendaItem that can be used to trigger actor travel when the actor is
waiting for the player character to follow him/her/it.

`class `**`FollowAgendaItem`**` :   `[`AgendaItem`](../object/AgendaItem.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`FollowAgendaItem`**  
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

` `[`agendaOrder`](#agendaOrder)`  `[`connectorList`](#connectorList)`  `[`nextConnector`](#nextConnector)`  `[`nextConnNum`](#nextConnNum)`  `[`nextDirection`](#nextDirection)`  `[`travelBlockReported`](#travelBlockReported)`  `[`traveledThisTurn`](#traveledThisTurn)`  `

Inherited from `AgendaItem` :  
` `[`calledBy`](../object/AgendaItem.html#calledBy)`  `[`initiallyActive`](../object/AgendaItem.html#initiallyActive)`  `[`invokedByActor`](../object/AgendaItem.html#invokedByActor)`  `[`isDone`](../object/AgendaItem.html#isDone)`  `[`isReady`](../object/AgendaItem.html#isReady)`  `[`name`](../object/AgendaItem.html#name)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`arrivingDesc`](#arrivingDesc)`  `[`beforeTravel`](#beforeTravel)`  `[`cancel`](#cancel)`  `[`execute`](#execute)`  `[`invokeItem`](#invokeItem)`  `[`noteArrival`](#noteArrival)`  `[`registerItem`](#registerItem)`  `[`resetItem`](#resetItem)`  `[`sayDeparting`](#sayDeparting)`  `[`showSpecialDesc`](#showSpecialDesc)`  `[`specialDesc`](#specialDesc)`  `[`travelBlocked`](#travelBlocked)`  `

Inherited from `AgendaItem` :  
` `[`getActor`](../object/AgendaItem.html#getActor)`  `[`invokeItemBase`](../object/AgendaItem.html#invokeItemBase)`  `[`report`](../object/AgendaItem.html#report)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="agendaOrder"></span>

`agendaOrder`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6364](../source/actor.t.html#6364)\]

<div class="desc">

Give this agendaItem a high priority to make sure it is used in response
to a FOLLOW ccmmand in preference to any other AgendaItems that may be
pending.

</div>

<span id="connectorList"></span>

`connectorList`

[actor.t](../file/actor.t.html)\[[6224](../source/actor.t.html#6224)\]

<div class="desc">

A list of TravelConnectors through which we want the player character to
follow our associated actor.

</div>

<span id="nextConnector"></span>

`nextConnector`

[actor.t](../file/actor.t.html)\[[6227](../source/actor.t.html#6227)\]

<div class="desc">

The next connector our NPC wants to lead the PC via

</div>

<span id="nextConnNum"></span>

`nextConnNum`

[actor.t](../file/actor.t.html)\[[6217](../source/actor.t.html#6217)\]

<div class="desc">

A pointer to the next connector to use

</div>

<span id="nextDirection"></span>

`nextDirection`

[actor.t](../file/actor.t.html)\[[6298](../source/actor.t.html#6298)\]

<div class="desc">

Display our default message. We make use there is a nextDirection before
we attempt to use it in our message, otherwise we simply use a bland "X
is here."

</div>

<span id="travelBlockReported"></span>

`travelBlockReported`

[actor.t](../file/actor.t.html)\[[6248](../source/actor.t.html#6248)\]

<div class="desc">

Flag: did the travelBlocked() method output any text? This is handled
internally by the library and shouldn't normally be used by game author
code.

</div>

<span id="traveledThisTurn"></span>

`traveledThisTurn`

[actor.t](../file/actor.t.html)\[[6214](../source/actor.t.html#6214)\]

<div class="desc">

Which turn did this FollowAgendaItem last cause our NPC to travel on?

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="arrivingDesc"></span>

`arrivingDesc ( )`

[actor.t](../file/actor.t.html)\[[6306](../source/actor.t.html#6306)\]

<div class="desc">

The specialDesc to use when our NPC has just traveled as a result of
this TravelAgendaItem. By default we just show our specialDesc, but game
code might want to customize this to something like "Bob crosses the
room and waits for you to follow him through the green door."

</div>

<span id="beforeTravel"></span>

`beforeTravel (traveler, connector)`

[actor.t](../file/actor.t.html)\[[6340](../source/actor.t.html#6340)\]

<div class="desc">

Give this AgendaItem the opportunity to react to travel; in particular
this might be used to allow the NPC to react to or even forbid travel in
a direction other than the one s/he's trying to lead the PC.

</div>

<span id="cancel"></span>

`cancel ( )`

[actor.t](../file/actor.t.html)\[[6343](../source/actor.t.html#6343)\]

<div class="desc">

Cancel this FollowAgendaItem before its normal termination.

</div>

<span id="execute"></span>

`execute ( )`

[actor.t](../file/actor.t.html)\[[6379](../source/actor.t.html#6379)\]

<div class="desc">

An AgendaItem initializer. For each agenda item that's initially active,
we'll add the item to its actor's agenda.

</div>

<span id="invokeItem"></span>

`invokeItem ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6114](../source/actor.t.html#6114)\]

<div class="desc">

*no description available*

</div>

<span id="noteArrival"></span>

`noteArrival ( )`

[actor.t](../file/actor.t.html)\[[6256](../source/actor.t.html#6256)\]

<div class="desc">

This method is invoked when our NPC arrives at his/her destination. By
default we do nothing, but instances can override to provide code to
handle the arrival, e.g. by changing the NPC's ActorState.

</div>

<span id="registerItem"></span>

`registerItem ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6366](../source/actor.t.html#6366)\]

<div class="desc">

*no description available*

</div>

<span id="resetItem"></span>

`resetItem ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6258](../source/actor.t.html#6258)\]

<div class="desc">

*no description available*

</div>

<span id="sayDeparting"></span>

`sayDeparting (conn)`

[actor.t](../file/actor.t.html)\[[6325](../source/actor.t.html#6325)\]

<div class="desc">

Display a message to say that our actor is leaving via conn. This would
normally describe the player character following our actor via conn.

</div>

<span id="showSpecialDesc"></span>

`showSpecialDesc ( )`

[actor.t](../file/actor.t.html)\[[6313](../source/actor.t.html#6313)\]

<div class="desc">

Show a specialDesc for this NPC when this TravelAgendaItem is active. If
we've just moved this turn we display the arrivingDesc(), otherwise we
show the specialDesc.

</div>

<span id="specialDesc"></span>

`specialDesc ( )`

[actor.t](../file/actor.t.html)\[[6274](../source/actor.t.html#6274)\]

<div class="desc">

The specialDesc to display when our actor is waiting for the PC to
follow it. By default we just show a plain vanilla message to the
effect, "The NPC is waiting for you to follow him/her north" or
whatever, but game code may wish to override this to provide a more
customized message.

</div>

<span id="travelBlocked"></span>

`travelBlocked (conn)`

[actor.t](../file/actor.t.html)\[[6239](../source/actor.t.html#6239)\]

<div class="desc">

This method is called when our NPC attempts to travel via conn but the
travel is blocked (by a locked door, for example). By default we do
nothing here but game code can override this method to display an
appropriate message or take any other action that might be needed in
this situation.

If this method displays anything, the default "You wait in vain for the
traveler to go anywhere" message will be suppressed.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
