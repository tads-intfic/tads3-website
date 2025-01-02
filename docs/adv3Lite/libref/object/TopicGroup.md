---
layout: docs
---
<span class="title">TopicGroup</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[2941](../source/actor.t.html#2941)\]

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

A TopicGroup is an object that can be used to group ActorTopicEntries
that share common features such as convKeys or isActive conditions. A
TopicGroup can be used anywhere an ActorTopicEntry can be used, and any
ActorTopicEntries should behave just as they would if they were in the
TopicGroup's container, apart from the modifications imposed by the
TopicGroup.

`class `**`TopicGroup`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`TopicGroup`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`TopicGroup`**  
`         `[`ConvNode`](../object/ConvNode.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`active`](#active)`  `[`convKeys`](#convKeys)`  `[`getActor`](#getActor)`  `[`isActive`](#isActive)`  `[`scoreBoost`](#scoreBoost)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`addTopic`](#addTopic)`  `[`nodeActive`](#nodeActive)`  `[`scoreBooster`](#scoreBooster)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="active"></span>

`active`

[actor.t](../file/actor.t.html)\[[2979](../source/actor.t.html#2979)\]

<div class="desc">

This TopicGroup is active if both its own isActive property is true and
its location is active (this allows us to locate TopicGroups within
other TopicGroups, for instance)

</div>

<span id="convKeys"></span>

`convKeys`

[actor.t](../file/actor.t.html)\[[2985](../source/actor.t.html#2985)\]

<div class="desc">

A list of convKeys that should be added to the convKeys of each of our
TopicEntries.

</div>

<span id="getActor"></span>

`getActor`

[actor.t](../file/actor.t.html)\[[3019](../source/actor.t.html#3019)\]

<div class="desc">

Our associated actor is our location's associated actor.

</div>

<span id="isActive"></span>

`isActive`

[actor.t](../file/actor.t.html)\[[2972](../source/actor.t.html#2972)\]

<div class="desc">

A TopicGroup's isActive property can be used to make all the
TopicEntries enclosed within in inactive by being set to nil; if it is
true then the enclosed TopicEntries are active if their own isActive
property is true.

</div>

<span id="scoreBoost"></span>

`scoreBoost`

[actor.t](../file/actor.t.html)\[[2991](../source/actor.t.html#2991)\]

<div class="desc">

A scoreBoost that should be added to the scoreBoost of each of our
TopicEntries.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="addTopic"></span>

`addTopic (obj)`

[actor.t](../file/actor.t.html)\[[2950](../source/actor.t.html#2950)\]

<div class="desc">

Add a topic entry to our database; since a TopicGroup isn't a
TopicDatabase we simply ask our location to add it to its database. We
also modify the convKeys and scoreBoost properties of any items
contained in us according to our own convKeys and scoreBoost properties.

</div>

<span id="nodeActive"></span>

`nodeActive ( )`

[actor.t](../file/actor.t.html)\[[3013](../source/actor.t.html#3013)\]

<div class="desc">

If we're being used as a conversation node, our node is active when our
own convKeys matches (i.e. overlaps with) that of our actor's
activeKeys.

</div>

<span id="scoreBooster"></span>

`scoreBooster ( )`

[actor.t](../file/actor.t.html)\[[2997](../source/actor.t.html#2997)\]

<div class="desc">

By how much do we boost the score of any TopicEntries we contain? We
need to add our own score boost to that our own location.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
