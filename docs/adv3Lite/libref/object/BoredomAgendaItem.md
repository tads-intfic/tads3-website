[BoredomAgendaItem]{.title}[class]{.type}

[actor.t](../file/actor.t.html)\[[6057](../source/actor.t.html#6057)\]

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
A special kind of agenda item for monitoring \"boredom\" during a
conversation. We check to see if our actor is in a conversation, and the
PC has been ignoring the conversation for too long; if so, our actor
initiates the end of the conversation, since the PC apparently isn\'t
paying any attention to us.

`class `**`BoredomAgendaItem`**` :   `[`AgendaItem`](../object/AgendaItem.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`BoredomAgendaItem`**\
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

` `[`agendaOrder`](#agendaOrder)`  `

Inherited from `AgendaItem` :\
` `[`calledBy`](../object/AgendaItem.html#calledBy)`  `[`initiallyActive`](../object/AgendaItem.html#initiallyActive)`  `[`invokedByActor`](../object/AgendaItem.html#invokedByActor)`  `[`isDone`](../object/AgendaItem.html#isDone)`  `[`isReady`](../object/AgendaItem.html#isReady)`  `[`name`](../object/AgendaItem.html#name)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `[`invokeItem`](#invokeItem)`  `[`isReady`](#isReady)`  `

Inherited from `AgendaItem` :\
` `[`getActor`](../object/AgendaItem.html#getActor)`  `[`invokeItemBase`](../object/AgendaItem.html#invokeItemBase)`  `[`registerItem`](../object/AgendaItem.html#registerItem)`  `[`report`](../object/AgendaItem.html#report)`  `[`resetItem`](../object/AgendaItem.html#resetItem)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#agendaOrder}

`agendaOrder`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[6105](../source/actor.t.html#6105)\]

::: desc
by default, handle boredom before other agenda items - we do this
because an ongoing conversation will be the first thing on the NPC\'s
mind
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (actor)`

[actor.t](../file/actor.t.html)\[[6059](../source/actor.t.html#6059)\]

::: desc
we construct these dynamically during actor initialization
:::

[]{#invokeItem}

`invokeItem ( )`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[6083](../source/actor.t.html#6083)\]

::: desc
on invocation, end the conversation
:::

[]{#isReady}

`isReady ( )`

[actor.t](../file/actor.t.html)\[[6069](../source/actor.t.html#6069)\]

::: desc
we\'re ready to run if our actor is in an InConversationState and its
boredom count has reached the limit for the state
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
