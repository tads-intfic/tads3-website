---
layout: docs
---
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



An AgendaItem that can be used to trigger actor travel when the actor is
waiting for the player character to follow him/her/it.

`class `**`FollowAgendaItem`**` :   `[`AgendaItem`](../object/AgendaItem.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`FollowAgendaItem`**  
[`AgendaItem`](../object/AgendaItem.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`agendaOrder`](#agendaOrder) [`connectorList`](#connectorList) [`nextConnector`](#nextConnector) [`nextConnNum`](#nextConnNum) [`nextDirection`](#nextDirection) [`travelBlockReported`](#travelBlockReported) [`traveledThisTurn`](#traveledThisTurn)

Inherited from `AgendaItem` :  
[`calledBy`](../object/AgendaItem.html#calledBy) [`initiallyActive`](../object/AgendaItem.html#initiallyActive) [`invokedByActor`](../object/AgendaItem.html#invokedByActor) [`isDone`](../object/AgendaItem.html#isDone) [`isReady`](../object/AgendaItem.html#isReady) [`name`](../object/AgendaItem.html#name)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`arrivingDesc`](#arrivingDesc) [`beforeTravel`](#beforeTravel) [`cancel`](#cancel) [`execute`](#execute) [`invokeItem`](#invokeItem) [`noteArrival`](#noteArrival) [`registerItem`](#registerItem) [`resetItem`](#resetItem) [`sayDeparting`](#sayDeparting) [`showSpecialDesc`](#showSpecialDesc) [`specialDesc`](#specialDesc) [`travelBlocked`](#travelBlocked)

Inherited from `AgendaItem` :  
[`getActor`](../object/AgendaItem.html#getActor) [`invokeItemBase`](../object/AgendaItem.html#invokeItemBase) [`report`](../object/AgendaItem.html#report)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="agendaOrder"></span>

`agendaOrder`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6364](../source/actor.t.html#6364)\]



Give this agendaItem a high priority to make sure it is used in response
to a FOLLOW ccmmand in preference to any other AgendaItems that may be
pending.



<span id="connectorList"></span>

`connectorList`

[actor.t](../file/actor.t.html)\[[6224](../source/actor.t.html#6224)\]



A list of TravelConnectors through which we want the player character to
follow our associated actor.



<span id="nextConnector"></span>

`nextConnector`

[actor.t](../file/actor.t.html)\[[6227](../source/actor.t.html#6227)\]



The next connector our NPC wants to lead the PC via



<span id="nextConnNum"></span>

`nextConnNum`

[actor.t](../file/actor.t.html)\[[6217](../source/actor.t.html#6217)\]



A pointer to the next connector to use



<span id="nextDirection"></span>

`nextDirection`

[actor.t](../file/actor.t.html)\[[6298](../source/actor.t.html#6298)\]



Display our default message. We make use there is a nextDirection before
we attempt to use it in our message, otherwise we simply use a bland "X
is here."



<span id="travelBlockReported"></span>

`travelBlockReported`

[actor.t](../file/actor.t.html)\[[6248](../source/actor.t.html#6248)\]



Flag: did the travelBlocked() method output any text? This is handled
internally by the library and shouldn't normally be used by game author
code.



<span id="traveledThisTurn"></span>

`traveledThisTurn`

[actor.t](../file/actor.t.html)\[[6214](../source/actor.t.html#6214)\]



Which turn did this FollowAgendaItem last cause our NPC to travel on?



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="arrivingDesc"></span>

`arrivingDesc ( )`

[actor.t](../file/actor.t.html)\[[6306](../source/actor.t.html#6306)\]



The specialDesc to use when our NPC has just traveled as a result of
this TravelAgendaItem. By default we just show our specialDesc, but game
code might want to customize this to something like "Bob crosses the
room and waits for you to follow him through the green door."



<span id="beforeTravel"></span>

`beforeTravel (traveler, connector)`

[actor.t](../file/actor.t.html)\[[6340](../source/actor.t.html#6340)\]



Give this AgendaItem the opportunity to react to travel; in particular
this might be used to allow the NPC to react to or even forbid travel in
a direction other than the one s/he's trying to lead the PC.



<span id="cancel"></span>

`cancel ( )`

[actor.t](../file/actor.t.html)\[[6343](../source/actor.t.html#6343)\]



Cancel this FollowAgendaItem before its normal termination.



<span id="execute"></span>

`execute ( )`

[actor.t](../file/actor.t.html)\[[6379](../source/actor.t.html#6379)\]



An AgendaItem initializer. For each agenda item that's initially active,
we'll add the item to its actor's agenda.



<span id="invokeItem"></span>

`invokeItem ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6114](../source/actor.t.html#6114)\]



*no description available*



<span id="noteArrival"></span>

`noteArrival ( )`

[actor.t](../file/actor.t.html)\[[6256](../source/actor.t.html#6256)\]



This method is invoked when our NPC arrives at his/her destination. By
default we do nothing, but instances can override to provide code to
handle the arrival, e.g. by changing the NPC's ActorState.



<span id="registerItem"></span>

`registerItem ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6366](../source/actor.t.html#6366)\]



*no description available*



<span id="resetItem"></span>

`resetItem ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6258](../source/actor.t.html#6258)\]



*no description available*



<span id="sayDeparting"></span>

`sayDeparting (conn)`

[actor.t](../file/actor.t.html)\[[6325](../source/actor.t.html#6325)\]



Display a message to say that our actor is leaving via conn. This would
normally describe the player character following our actor via conn.



<span id="showSpecialDesc"></span>

`showSpecialDesc ( )`

[actor.t](../file/actor.t.html)\[[6313](../source/actor.t.html#6313)\]



Show a specialDesc for this NPC when this TravelAgendaItem is active. If
we've just moved this turn we display the arrivingDesc(), otherwise we
show the specialDesc.



<span id="specialDesc"></span>

`specialDesc ( )`

[actor.t](../file/actor.t.html)\[[6274](../source/actor.t.html#6274)\]



The specialDesc to display when our actor is waiting for the PC to
follow it. By default we just show a plain vanilla message to the
effect, "The NPC is waiting for you to follow him/her north" or
whatever, but game code may wish to override this to provide a more
customized message.



<span id="travelBlocked"></span>

`travelBlocked (conn)`

[actor.t](../file/actor.t.html)\[[6239](../source/actor.t.html#6239)\]



This method is called when our NPC attempts to travel via conn but the
travel is blocked (by a locked door, for example). By default we do
nothing here but game code can override this method to display an
appropriate message or take any other action that might be needed in
this situation.

If this method displays anything, the default "You wait in vain for the
traveler to go anywhere" message will be suppressed.
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


