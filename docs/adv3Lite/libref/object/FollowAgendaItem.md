[FollowAgendaItem]{.title}[class]{.type}

[actor.t](../file/actor.t.html)\[[6112](../source/actor.t.html#6112)\]

[Superclass\
Tree](#_SuperClassTree_)

[Subclass\
Tree](#_SubClassTree_)

[Global\
Objects](#_ObjectSummary_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
An AgendaItem that can be used to trigger actor travel when the actor is
waiting for the player character to follow him/her/it.

`class `**`FollowAgendaItem`**` :   `[`AgendaItem`](../object/AgendaItem.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`FollowAgendaItem`**\
`         `[`AgendaItem`](../object/AgendaItem.html)\
`                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

*(none)* []{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`agendaOrder`](#agendaOrder)`  `[`connectorList`](#connectorList)`  `[`nextConnector`](#nextConnector)`  `[`nextConnNum`](#nextConnNum)`  `[`nextDirection`](#nextDirection)`  `[`travelBlockReported`](#travelBlockReported)`  `[`traveledThisTurn`](#traveledThisTurn)`  `

Inherited from `AgendaItem` :\
` `[`calledBy`](../object/AgendaItem.html#calledBy)`  `[`initiallyActive`](../object/AgendaItem.html#initiallyActive)`  `[`invokedByActor`](../object/AgendaItem.html#invokedByActor)`  `[`isDone`](../object/AgendaItem.html#isDone)`  `[`isReady`](../object/AgendaItem.html#isReady)`  `[`name`](../object/AgendaItem.html#name)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`arrivingDesc`](#arrivingDesc)`  `[`beforeTravel`](#beforeTravel)`  `[`cancel`](#cancel)`  `[`execute`](#execute)`  `[`invokeItem`](#invokeItem)`  `[`noteArrival`](#noteArrival)`  `[`registerItem`](#registerItem)`  `[`resetItem`](#resetItem)`  `[`sayDeparting`](#sayDeparting)`  `[`showSpecialDesc`](#showSpecialDesc)`  `[`specialDesc`](#specialDesc)`  `[`travelBlocked`](#travelBlocked)`  `

Inherited from `AgendaItem` :\
` `[`getActor`](../object/AgendaItem.html#getActor)`  `[`invokeItemBase`](../object/AgendaItem.html#invokeItemBase)`  `[`report`](../object/AgendaItem.html#report)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#agendaOrder}

`agendaOrder`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[6364](../source/actor.t.html#6364)\]

::: desc
Give this agendaItem a high priority to make sure it is used in response
to a FOLLOW ccmmand in preference to any other AgendaItems that may be
pending.
:::

[]{#connectorList}

`connectorList`

[actor.t](../file/actor.t.html)\[[6224](../source/actor.t.html#6224)\]

::: desc
A list of TravelConnectors through which we want the player character to
follow our associated actor.
:::

[]{#nextConnector}

`nextConnector`

[actor.t](../file/actor.t.html)\[[6227](../source/actor.t.html#6227)\]

::: desc
The next connector our NPC wants to lead the PC via
:::

[]{#nextConnNum}

`nextConnNum`

[actor.t](../file/actor.t.html)\[[6217](../source/actor.t.html#6217)\]

::: desc
A pointer to the next connector to use
:::

[]{#nextDirection}

`nextDirection`

[actor.t](../file/actor.t.html)\[[6298](../source/actor.t.html#6298)\]

::: desc
Display our default message. We make use there is a nextDirection before
we attempt to use it in our message, otherwise we simply use a bland \"X
is here.\"
:::

[]{#travelBlockReported}

`travelBlockReported`

[actor.t](../file/actor.t.html)\[[6248](../source/actor.t.html#6248)\]

::: desc
Flag: did the travelBlocked() method output any text? This is handled
internally by the library and shouldn\'t normally be used by game author
code.
:::

[]{#traveledThisTurn}

`traveledThisTurn`

[actor.t](../file/actor.t.html)\[[6214](../source/actor.t.html#6214)\]

::: desc
Which turn did this FollowAgendaItem last cause our NPC to travel on?
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#arrivingDesc}

`arrivingDesc ( )`

[actor.t](../file/actor.t.html)\[[6306](../source/actor.t.html#6306)\]

::: desc
The specialDesc to use when our NPC has just traveled as a result of
this TravelAgendaItem. By default we just show our specialDesc, but game
code might want to customize this to something like \"Bob crosses the
room and waits for you to follow him through the green door.\"
:::

[]{#beforeTravel}

`beforeTravel (traveler, connector)`

[actor.t](../file/actor.t.html)\[[6340](../source/actor.t.html#6340)\]

::: desc
Give this AgendaItem the opportunity to react to travel; in particular
this might be used to allow the NPC to react to or even forbid travel in
a direction other than the one s/he\'s trying to lead the PC.
:::

[]{#cancel}

`cancel ( )`

[actor.t](../file/actor.t.html)\[[6343](../source/actor.t.html#6343)\]

::: desc
Cancel this FollowAgendaItem before its normal termination.
:::

[]{#execute}

`execute ( )`

[actor.t](../file/actor.t.html)\[[6379](../source/actor.t.html#6379)\]

::: desc
An AgendaItem initializer. For each agenda item that\'s initially
active, we\'ll add the item to its actor\'s agenda.
:::

[]{#invokeItem}

`invokeItem ( )`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[6114](../source/actor.t.html#6114)\]

::: desc
*no description available*
:::

[]{#noteArrival}

`noteArrival ( )`

[actor.t](../file/actor.t.html)\[[6256](../source/actor.t.html#6256)\]

::: desc
This method is invoked when our NPC arrives at his/her destination. By
default we do nothing, but instances can override to provide code to
handle the arrival, e.g. by changing the NPC\'s ActorState.
:::

[]{#registerItem}

`registerItem ( )`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[6366](../source/actor.t.html#6366)\]

::: desc
*no description available*
:::

[]{#resetItem}

`resetItem ( )`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[6258](../source/actor.t.html#6258)\]

::: desc
*no description available*
:::

[]{#sayDeparting}

`sayDeparting (conn)`

[actor.t](../file/actor.t.html)\[[6325](../source/actor.t.html#6325)\]

::: desc
Display a message to say that our actor is leaving via conn. This would
normally describe the player character following our actor via conn.
:::

[]{#showSpecialDesc}

`showSpecialDesc ( )`

[actor.t](../file/actor.t.html)\[[6313](../source/actor.t.html#6313)\]

::: desc
Show a specialDesc for this NPC when this TravelAgendaItem is active. If
we\'ve just moved this turn we display the arrivingDesc(), otherwise we
show the specialDesc.
:::

[]{#specialDesc}

`specialDesc ( )`

[actor.t](../file/actor.t.html)\[[6274](../source/actor.t.html#6274)\]

::: desc
The specialDesc to display when our actor is waiting for the PC to
follow it. By default we just show a plain vanilla message to the
effect, \"The NPC is waiting for you to follow him/her north\" or
whatever, but game code may wish to override this to provide a more
customized message.
:::

[]{#travelBlocked}

`travelBlocked (conn)`

[actor.t](../file/actor.t.html)\[[6239](../source/actor.t.html#6239)\]

::: desc
This method is called when our NPC attempts to travel via conn but the
travel is blocked (by a locked door, for example). By default we do
nothing here but game code can override this method to display an
appropriate message or take any other action that might be needed in
this situation.

If this method displays anything, the default \"You wait in vain for the
traveler to go anywhere\" message will be suppressed.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
