[ConvAgendaItem]{.title}[class]{.type}

[actor.t](../file/actor.t.html)\[[5914](../source/actor.t.html#5914)\]

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
A \"conversational\" agenda item. This type of item is ready to execute
only when the actor hasn\'t engaged in conversation during the same
turn. This type of item is ideal for situations where we want the actor
to pursue a conversational topic, because we won\'t initiate the action
until we get a turn where the player didn\'t directly talk to us.

`class `**`ConvAgendaItem`**` :   `[`AgendaItem`](../object/AgendaItem.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`ConvAgendaItem`**\
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

` `[`greetingDisplayed`](#greetingDisplayed)`  `[`isReady`](#isReady)`  `[`otherActor`](#otherActor)`  `[`reasonInvoked`](#reasonInvoked)`  `

Inherited from `AgendaItem` :\
` `[`agendaOrder`](../object/AgendaItem.html#agendaOrder)`  `[`calledBy`](../object/AgendaItem.html#calledBy)`  `[`initiallyActive`](../object/AgendaItem.html#initiallyActive)`  `[`invokedByActor`](../object/AgendaItem.html#invokedByActor)`  `[`isDone`](../object/AgendaItem.html#isDone)`  `[`name`](../object/AgendaItem.html#name)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`invokeItemBase`](#invokeItemBase)`  `

Inherited from `AgendaItem` :\
` `[`getActor`](../object/AgendaItem.html#getActor)`  `[`invokeItem`](../object/AgendaItem.html#invokeItem)`  `[`registerItem`](../object/AgendaItem.html#registerItem)`  `[`report`](../object/AgendaItem.html#report)`  `[`resetItem`](../object/AgendaItem.html#resetItem)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#greetingDisplayed}

`greetingDisplayed`

[actor.t](../file/actor.t.html)\[[6004](../source/actor.t.html#6004)\]

::: desc
Flag; did invoking this item result in the display of a greeting (from
an ActorHelloTopic)?
:::

[]{#isReady}

`isReady`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[5915](../source/actor.t.html#5915)\]

::: desc
*no description available*
:::

[]{#otherActor}

`otherActor`

[actor.t](../file/actor.t.html)\[[5922](../source/actor.t.html#5922)\]

::: desc
The actor we\'re planning to address - by default, this is the PC. If
the conversational overture will be directed to another NPC, you can
specify that other actor here.
:::

[]{#reasonInvoked}

`reasonInvoked`

[actor.t](../file/actor.t.html)\[[6012](../source/actor.t.html#6012)\]

::: desc
Why was this ConvAgenda Item invoked?\
1 = InitiateConversationReason = Actor initiating new conversation\
2 = ConversationLullReason = Actor using lull in conversation\
3 = DefaultTopicReason = Actor responding to DefaultAgendaTopic
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#invokeItemBase}

`invokeItemBase (caller)`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[5925](../source/actor.t.html#5925)\]

::: desc
There\'s more work to do on a ConvAgendaItem when it\'s invoked
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
