[TopicGroup]{.title}[class]{.type}

[actor.t](../file/actor.t.html)\[[2941](../source/actor.t.html#2941)\]

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
A TopicGroup is an object that can be used to group ActorTopicEntries
that share common features such as convKeys or isActive conditions. A
TopicGroup can be used anywhere an ActorTopicEntry can be used, and any
ActorTopicEntries should behave just as they would if they were in the
TopicGroup\'s container, apart from the modifications imposed by the
TopicGroup.

`class `**`TopicGroup`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`TopicGroup`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`TopicGroup`**\
`         `[`ConvNode`](../object/ConvNode.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`active`](#active)`  `[`convKeys`](#convKeys)`  `[`getActor`](#getActor)`  `[`isActive`](#isActive)`  `[`scoreBoost`](#scoreBoost)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`addTopic`](#addTopic)`  `[`nodeActive`](#nodeActive)`  `[`scoreBooster`](#scoreBooster)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#active}

`active`

[actor.t](../file/actor.t.html)\[[2979](../source/actor.t.html#2979)\]

::: desc
This TopicGroup is active if both its own isActive property is true and
its location is active (this allows us to locate TopicGroups within
other TopicGroups, for instance)
:::

[]{#convKeys}

`convKeys`

[actor.t](../file/actor.t.html)\[[2985](../source/actor.t.html#2985)\]

::: desc
A list of convKeys that should be added to the convKeys of each of our
TopicEntries.
:::

[]{#getActor}

`getActor`

[actor.t](../file/actor.t.html)\[[3019](../source/actor.t.html#3019)\]

::: desc
Our associated actor is our location\'s associated actor.
:::

[]{#isActive}

`isActive`

[actor.t](../file/actor.t.html)\[[2972](../source/actor.t.html#2972)\]

::: desc
A TopicGroup\'s isActive property can be used to make all the
TopicEntries enclosed within in inactive by being set to nil; if it is
true then the enclosed TopicEntries are active if their own isActive
property is true.
:::

[]{#scoreBoost}

`scoreBoost`

[actor.t](../file/actor.t.html)\[[2991](../source/actor.t.html#2991)\]

::: desc
A scoreBoost that should be added to the scoreBoost of each of our
TopicEntries.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#addTopic}

`addTopic (obj)`

[actor.t](../file/actor.t.html)\[[2950](../source/actor.t.html#2950)\]

::: desc
Add a topic entry to our database; since a TopicGroup isn\'t a
TopicDatabase we simply ask our location to add it to its database. We
also modify the convKeys and scoreBoost properties of any items
contained in us according to our own convKeys and scoreBoost properties.
:::

[]{#nodeActive}

`nodeActive ( )`

[actor.t](../file/actor.t.html)\[[3013](../source/actor.t.html#3013)\]

::: desc
If we\'re being used as a conversation node, our node is active when our
own convKeys matches (i.e. overlaps with) that of our actor\'s
activeKeys.
:::

[]{#scoreBooster}

`scoreBooster ( )`

[actor.t](../file/actor.t.html)\[[2997](../source/actor.t.html#2997)\]

::: desc
By how much do we boost the score of any TopicEntries we contain? We
need to add our own score boost to that our own location.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
