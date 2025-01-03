---
layout: docs
---
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



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`TopicGroup`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`isActive`](#isActive) [`matchScoreAdjustment`](#matchScoreAdjustment) [`topicGroupScoreAdjustment`](#topicGroupScoreAdjustment)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`addSuggestedTopic`](#addSuggestedTopic) [`addTopic`](#addTopic) [`getTopicOwner`](#getTopicOwner) [`topicGroupActive`](#topicGroupActive)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="isActive"></span>

`isActive`

[actor.t](../file/actor.t.html)\[[2593](../source/actor.t.html#2593)\]



The group "active" condition - each instance should override this to
specify the condition that applies to all of the TopicEntry objects
within the group.



<span id="matchScoreAdjustment"></span>

`matchScoreAdjustment`

[actor.t](../file/actor.t.html)\[[2600](../source/actor.t.html#2600)\]



The \*adjustment\* to the match score for topic entries contained within
this group. This is usually a positive number, so that it boosts the
match strength of the child topics.



<span id="topicGroupScoreAdjustment"></span>

`topicGroupScoreAdjustment`

[actor.t](../file/actor.t.html)\[[2622](../source/actor.t.html#2622)\]



Get my score adjustment. We'll return our own basic score adjustment
plus the cumulative adjustment for our containers.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="addSuggestedTopic"></span>

`addSuggestedTopic (topic)`

[actor.t](../file/actor.t.html)\[[2629](../source/actor.t.html#2629)\]



add a suggested topic - we'll pass this up to our container



<span id="addTopic"></span>

`addTopic (topic)`

[actor.t](../file/actor.t.html)\[[2626](../source/actor.t.html#2626)\]



add a topic - we'll simply add the topic directly to our container



<span id="getTopicOwner"></span>

`getTopicOwner ( )`

[actor.t](../file/actor.t.html)\[[2606](../source/actor.t.html#2606)\]



the topic owner for any topic entries within the group is the topic
owner taken from the group's own location



<span id="topicGroupActive"></span>

`topicGroupActive ( )`

[actor.t](../file/actor.t.html)\[[2609](../source/actor.t.html#2609)\]



are TopicEntry objects within the group active?
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


