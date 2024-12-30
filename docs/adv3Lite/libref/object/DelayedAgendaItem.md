[DelayedAgendaItem]{.title}[class]{.type}

[actor.t](../file/actor.t.html)\[[6020](../source/actor.t.html#6020)\]

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
A delayed agenda item. This type of item becomes ready to execute when
the game clock reaches a given turn counter.

`class `**`DelayedAgendaItem`**` :   `[`AgendaItem`](../object/AgendaItem.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`DelayedAgendaItem`**\
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

` `[`isReady`](#isReady)`  `[`readyTime`](#readyTime)`  `

Inherited from `AgendaItem` :\
` `[`agendaOrder`](../object/AgendaItem.html#agendaOrder)`  `[`calledBy`](../object/AgendaItem.html#calledBy)`  `[`initiallyActive`](../object/AgendaItem.html#initiallyActive)`  `[`invokedByActor`](../object/AgendaItem.html#invokedByActor)`  `[`isDone`](../object/AgendaItem.html#isDone)`  `[`name`](../object/AgendaItem.html#name)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`setDelay`](#setDelay)`  `

Inherited from `AgendaItem` :\
` `[`getActor`](../object/AgendaItem.html#getActor)`  `[`invokeItem`](../object/AgendaItem.html#invokeItem)`  `[`invokeItemBase`](../object/AgendaItem.html#invokeItemBase)`  `[`registerItem`](../object/AgendaItem.html#registerItem)`  `[`report`](../object/AgendaItem.html#report)`  `[`resetItem`](../object/AgendaItem.html#resetItem)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#isReady}

`isReady`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[6022](../source/actor.t.html#6022)\]

::: desc
we\'re ready if the game clock time has reached our ready time
:::

[]{#readyTime}

`readyTime`

[actor.t](../file/actor.t.html)\[[6025](../source/actor.t.html#6025)\]

::: desc
the turn counter on the game clock when we become ready
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#setDelay}

`setDelay (turns)`

[actor.t](../file/actor.t.html)\[[6036](../source/actor.t.html#6036)\]

::: desc
Set our ready time based on a delay from the current time. We\'ll become
ready after the given number of turns elapses. For convenience, we
return \'self\', so a delayed agenda item can be initialized and added
to an actor\'s agenda in one simple operation, like so:

actor.addToAgenda(item.setDelay(1));
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
