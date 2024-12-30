[AgendaItem]{.title}[class]{.type}

[actor.t](../file/actor.t.html)\[[5790](../source/actor.t.html#5790)\]

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
An \"agenda item.\" Each actor can have its own \"agenda,\" which is a
list of these items. Each item represents an action that the actor wants
to perform - this is usually a goal the actor wants to achieve, or a
conversational topic the actor wants to pursue.

On any given turn, an actor can carry out only one agenda item.

Agenda items are a convenient way of controlling complex behavior. Each
agenda item defines its own condition for when the actor can pursue the
item, and each item defines what the actor does when pursuing the item.
Agenda items can improve the code structure for an NPC\'s behavior,
since they nicely isolate a single background action and group it with
the conditions that trigger it. But the main benefit of agenda items is
the one-per-turn pacing - by executing at most one agenda item per turn,
we ensure that the NPC will carry out its self-initiated actions at a
measured pace, rather than as a jumble of random actions on a single
turn.

Note that NPC-initiated conversation messages override agendas. If an
actor has an active ConvNode, AND the ConvNode displays a \"continuation
message\" on a given turn, then the actor will not pursue its agenda on
that turn. In this way, ConvNode continuation messages act rather like
high-priority agenda items.

`class `**`AgendaItem`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`AgendaItem`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`AgendaItem`**\
`         `[`BoredomAgendaItem`](../object/BoredomAgendaItem.html)\
`         `[`ConvAgendaItem`](../object/ConvAgendaItem.html)\
`         `[`DelayedAgendaItem`](../object/DelayedAgendaItem.html)\
`         `[`FollowAgendaItem`](../object/FollowAgendaItem.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`agendaOrder`](#agendaOrder)`  `[`calledBy`](#calledBy)`  `[`initiallyActive`](#initiallyActive)`  `[`invokedByActor`](#invokedByActor)`  `[`isDone`](#isDone)`  `[`isReady`](#isReady)`  `[`name`](#name)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`getActor`](#getActor)`  `[`invokeItem`](#invokeItem)`  `[`invokeItemBase`](#invokeItemBase)`  `[`registerItem`](#registerItem)`  `[`report`](#report)`  `[`resetItem`](#resetItem)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#agendaOrder}

`agendaOrder`

[actor.t](../file/actor.t.html)\[[5837](../source/actor.t.html#5837)\]

::: desc
The ordering of the item relative to other agenda items. When we choose
an agenda item to execute, we always choose the lowest numbered item
that\'s ready to run. You can leave this with the default value if you
don\'t care about the order.
:::

[]{#calledBy}

`calledBy`

[actor.t](../file/actor.t.html)\[[5863](../source/actor.t.html#5863)\]

::: desc
The object from whose agendaList this AgendaItem was invoked
:::

[]{#initiallyActive}

`initiallyActive`

[actor.t](../file/actor.t.html)\[[5804](../source/actor.t.html#5804)\]

::: desc
Is this item active at the start of the game? Override this to true to
make the item initially active; we\'ll add it to the actor\'s agenda
during the game\'s initialization.
:::

[]{#invokedByActor}

`invokedByActor`

[actor.t](../file/actor.t.html)\[[5860](../source/actor.t.html#5860)\]

::: desc
invokeItem can test the invokedByActor property to decide whether what
the actor says should be a conversational gambit started on the actor\'s
own initiative or as a (default) response to something the pc has just
:::

[]{#isDone}

`isDone`

[actor.t](../file/actor.t.html)\[[5829](../source/actor.t.html#5829)\]

::: desc
Is this item done? On each turn, we\'ll remove any items marked as done
from the actor\'s agenda list. We remove items marked as done before
executing any items, so done-ness overrides readiness; in other words,
if an item is both \'done\' and \'ready\', it\'ll simply be removed from
the list and will not be executed.

By default, we simply return nil. Items can override this to provide a
declarative condition of done-ness, or they can simply set the property
to true when they finish their work. For example, an item that only
needs to execute once can simply set isDone to true in its invokeItem()
method; an item that\'s to be repeated until some success condition
obtains can override isDone to return the success condition.
:::

[]{#isReady}

`isReady`

[actor.t](../file/actor.t.html)\[[5812](../source/actor.t.html#5812)\]

::: desc
Is this item ready to execute? The actor will only execute an agenda
item when this condition is met. By default, we\'re ready to execute.
Items can override this to provide a declarative condition of readiness
if desired.
:::

[]{#name}

`name`

[actor.t](../file/actor.t.html)\[[5894](../source/actor.t.html#5894)\]

::: desc
An optional tag, specified as a single-quoted string.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#getActor}

`getActor ( )`

[actor.t](../file/actor.t.html)\[[5797](../source/actor.t.html#5797)\]

::: desc
My actor - agenda items should be nested within the actor using \'+\' so
that we can find our actor. Note that this doesn\'t add the item to the
actor\'s agenda - that has to be done explicitly with
actor.addToAgenda().
:::

[]{#invokeItem}

`invokeItem ( )`

[actor.t](../file/actor.t.html)\[[5871](../source/actor.t.html#5871)\]

::: desc
Execute this item. This is invoked during the actor\'s turn when the
item is the first item that\'s ready to execute in the actor\'s agenda
list. We do nothing by default.
:::

[]{#invokeItemBase}

`invokeItemBase (caller)`

[actor.t](../file/actor.t.html)\[[5845](../source/actor.t.html#5845)\]

::: desc
The caller is passed as a parameter so we can tell whether we\'re being
called from an Actor or from a DefaultAgendaTopic, which may affect what
we want to do \-- for example the wording of what the actor says at this
point.
:::

[]{#registerItem}

`registerItem ( )`

[actor.t](../file/actor.t.html)\[[5891](../source/actor.t.html#5891)\]

::: desc
Carry out any additional registration when we\'re added to our actor\'s
agenda. We do nothing here, but this is needed on FollowAgendaItem.
:::

[]{#report}

`report (msg, prop, =, &, canSee)`

[actor.t](../file/actor.t.html)\[[5902](../source/actor.t.html#5902)\]

::: desc
A convenience method that can be used from within our invokeItem to
display some text only if the player character can see us (or, if the
optional second parameter is supplied, sense us through some other
sense, e.g. &canHear or &canSmell).
:::

[]{#resetItem}

`resetItem ( )`

[actor.t](../file/actor.t.html)\[[5880](../source/actor.t.html#5880)\]

::: desc
Reset the item. This is invoked whenever the item is added to an
actor\'s agenda. By default, we\'ll set isDone to nil as long as isDone
isn\'t a method; this makes it easier to reuse agenda items, since we
don\'t have to worry about clearing out the isDone flag when reusing an
item.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
