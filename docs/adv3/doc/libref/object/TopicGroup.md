<span class="title">TopicGroup</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[2587](../source/actor.t.html#2587)\]

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

A TopicGroup is an abstract container for a set of TopicEntry objects.
The purpose of the group object is to apply a common "is active"
condition to all of the topics within the group.

The isActive condition of the TopicGroup is effectively AND'ed with any
other conditions on the nested TopicEntry's. In other words, a
TopicEntry within the TopicGroup is active if the TopicEntry would
otherwise be acive AND the TopicGroup is active.

TopicEntry objects are associated with the group via the 'location'
property - set the location of the TopicEntry to point to the containing
TopicGroup.

You can put a TopicGroup anywhere a TopicEntry could go - directly
inside an Actor, inside an ActorState, or within another TopicGroup. The
topic entries within a topic group act as though they were directly in
the topic group's container.

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

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`isActive`](#isActive)`  `[`matchScoreAdjustment`](#matchScoreAdjustment)`  `[`topicGroupScoreAdjustment`](#topicGroupScoreAdjustment)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`addSuggestedTopic`](#addSuggestedTopic)`  `[`addTopic`](#addTopic)`  `[`getTopicOwner`](#getTopicOwner)`  `[`topicGroupActive`](#topicGroupActive)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="isActive"></span>

`isActive`

[actor.t](../file/actor.t.html)\[[2593](../source/actor.t.html#2593)\]

<div class="desc">

The group "active" condition - each instance should override this to
specify the condition that applies to all of the TopicEntry objects
within the group.

</div>

<span id="matchScoreAdjustment"></span>

`matchScoreAdjustment`

[actor.t](../file/actor.t.html)\[[2600](../source/actor.t.html#2600)\]

<div class="desc">

The \*adjustment\* to the match score for topic entries contained within
this group. This is usually a positive number, so that it boosts the
match strength of the child topics.

</div>

<span id="topicGroupScoreAdjustment"></span>

`topicGroupScoreAdjustment`

[actor.t](../file/actor.t.html)\[[2622](../source/actor.t.html#2622)\]

<div class="desc">

Get my score adjustment. We'll return our own basic score adjustment
plus the cumulative adjustment for our containers.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="addSuggestedTopic"></span>

`addSuggestedTopic (topic)`

[actor.t](../file/actor.t.html)\[[2629](../source/actor.t.html#2629)\]

<div class="desc">

add a suggested topic - we'll pass this up to our container

</div>

<span id="addTopic"></span>

`addTopic (topic)`

[actor.t](../file/actor.t.html)\[[2626](../source/actor.t.html#2626)\]

<div class="desc">

add a topic - we'll simply add the topic directly to our container

</div>

<span id="getTopicOwner"></span>

`getTopicOwner ( )`

[actor.t](../file/actor.t.html)\[[2606](../source/actor.t.html#2606)\]

<div class="desc">

the topic owner for any topic entries within the group is the topic
owner taken from the group's own location

</div>

<span id="topicGroupActive"></span>

`topicGroupActive ( )`

[actor.t](../file/actor.t.html)\[[2609](../source/actor.t.html#2609)\]

<div class="desc">

are TopicEntry objects within the group active?

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
