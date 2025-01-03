---
layout: docs
---
<span class="title">TopicDatabase</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[551](../source/actor.t.html#551)\]

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



A plug-in topic database. The topic database is a set of TopicEntry
objects that specify the responses to queries on particular topics. The
exact nature of the queries that a particular topic database handles is
up to the database subclass to define; we just provide the abstract
mechanism for finding and displaying responses.

This is a "plug-in" database in that it's meant to be added into other
classes using multiple inheritance. This isn't meant to be used as a
stand-alone abstract topic entry container.

`class `**`TopicDatabase`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`TopicDatabase`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`TopicDatabase`**  
[`ActorTopicDatabase`](../object/ActorTopicDatabase.html)  
[`Actor`](../object/Actor.html)  
[`UntakeableActor`](../object/UntakeableActor.html)  
[`Person`](../object/Person.html)  
[`ActorState`](../object/ActorState.html)  
[`AccompanyingInTravelState`](../object/AccompanyingInTravelState.html)  
[`GuidedInTravelState`](../object/GuidedInTravelState.html)  
[`AccompanyingState`](../object/AccompanyingState.html)  
[`GuidedTourState`](../object/GuidedTourState.html)  
[`ConversationReadyState`](../object/ConversationReadyState.html)  
[`HermitActorState`](../object/HermitActorState.html)  
[`InConversationState`](../object/InConversationState.html)  
[`ConvNode`](../object/ConvNode.html)  
[`Consultable`](../object/Consultable.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`limitSuggestions`](#limitSuggestions) [`suggestedTopics`](#suggestedTopics) [`topicGroupActive`](#topicGroupActive) [`topicGroupScoreAdjustment`](#topicGroupScoreAdjustment)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`addSuggestedTopic`](#addSuggestedTopic) [`addTopic`](#addTopic) [`addTopicToList`](#addTopicToList) [`compareVocabMatch`](#compareVocabMatch) [`findTopicResponse`](#findTopicResponse) [`getTopicOwner`](#getTopicOwner) [`handleTopic`](#handleTopic) [`removeSuggestedTopic`](#removeSuggestedTopic) [`removeTopic`](#removeTopic) [`removeTopicFromList`](#removeTopicFromList) [`showSuggestedTopicList`](#showSuggestedTopicList) [`showTopicResponse`](#showTopicResponse)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="limitSuggestions"></span>

`limitSuggestions`

[actor.t](../file/actor.t.html)\[[911](../source/actor.t.html#911)\]



Flag: this database level should limit topic suggestions (for the TOPICS
and TALK TO commands) to its own topics, excluding any topics inherited
from the "broader" context. If this property is set to true, then we
won't include suggestions from any lower level of the database
hierarchy. If this property is nil, we'll also include any topic
suggestions from the broader context.

Topic databases are arranged into a fixed hierarchy for an actor. At the
top level is the current ConvNode object; at the next level is the
ActorState; and at the bottom level is the Actor itself. So, if the
ConvNode's limitSuggestions property is set to true, then the
suggestions for the actor will include ONLY the ConvNode. If the
ConvNode has the property set to nil, but the ActorState has it set to
true, then we'll include the ConvNode and the ActorState suggestions.

By default, we set this to nil. This should usually be set to true for
any ConvNode or ActorState where the NPC won't allow the player to stray
from the subject. For example, if a ConvNode only accepts a YES or NO
response to a question, then this property should probably be set to
true in the ConvNode, since other suggested topics won't be accepted as
conversation topics as long as the ConvNode is active.



<span id="suggestedTopics"></span>

`suggestedTopics`

[actor.t](../file/actor.t.html)\[[975](../source/actor.t.html#975)\]



Our list of suggested topics. These are SuggestedTopic objects that
describe things that another actor wants to ask or tell this actor
about.



<span id="topicGroupActive"></span>

`topicGroupActive`

[actor.t](../file/actor.t.html)\[[557](../source/actor.t.html#557)\]



Is the topic group active? A TopicEntry always checks with its container
to see if the children of the container are active. By default,
everything in the database is active.



<span id="topicGroupScoreAdjustment"></span>

`topicGroupScoreAdjustment`

[actor.t](../file/actor.t.html)\[[564](../source/actor.t.html#564)\]



Get the score adjustment for all topic entries contained within. The
default adjustment is zero; TopicGroup objects can use this to adjust
the score for their nested entries.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="addSuggestedTopic"></span>

`addSuggestedTopic (topic)`

[actor.t](../file/actor.t.html)\[[934](../source/actor.t.html#934)\]



add a suggested topic



<span id="addTopic"></span>

`addTopic (topic)`

[actor.t](../file/actor.t.html)\[[918](../source/actor.t.html#918)\]



Add a topic to our topic database. We'll add it to the appropriate list
or lists as indicated in the topic itself. 'topic' is a TopicEntry
object.



<span id="addTopicToList"></span>

`addTopicToList (topic, listProp)`

[actor.t](../file/actor.t.html)\[[952](../source/actor.t.html#952)\]



Add a topic to the given topic list. The topic list is given as a
property point; for example, we'd specify &askTopics to add the topic to
our ASK list.



<span id="compareVocabMatch"></span>

`compareVocabMatch (a, b)`

[actor.t](../file/actor.t.html)\[[810](../source/actor.t.html#810)\]



Compare the vocabulary match strengths of two ResolveInfo objects, for
the purposes of breaking ties in topic matching. Uses the usual
comparison/sorting return value conventions: -1 means that a is weaker
than b, 0 means they're equivalent, 1 means a is stronger than b.



<span id="findTopicResponse"></span>

`findTopicResponse (fromActor, topic, convType, path)`

[actor.t](../file/actor.t.html)\[[606](../source/actor.t.html#606)\]



find the best response (a TopicEntry object) for the given topic (a
ResolvedTopic object)



<span id="getTopicOwner"></span>

`getTopicOwner ( )`

[actor.t](../file/actor.t.html)\[[985](../source/actor.t.html#985)\]



Get the "owner" of the topics in this database. The meaning of "owner"
varies according to the topic database type; for actor topic databases,
for example, this is the actor. Generally, the owner is the object being
queried about the topic, from the player's perspective. Each type of
database should define this method to return the appropriate object.



<span id="handleTopic"></span>

`handleTopic (fromActor, topic, convType, path)`

[actor.t](../file/actor.t.html)\[[572](../source/actor.t.html#572)\]



Handle a topic. Look up the topic in our topic list for the given
conversational action type. If we find a match, we'll invoke the
matching topic list entry to handle it. We'll return true if we find a
match, nil if not.



<span id="removeSuggestedTopic"></span>

`removeSuggestedTopic (topic)`

[actor.t](../file/actor.t.html)\[[941](../source/actor.t.html#941)\]



remove a suggested topic



<span id="removeTopic"></span>

`removeTopic (topic)`

[actor.t](../file/actor.t.html)\[[926](../source/actor.t.html#926)\]



remove a topic from our topic database



<span id="removeTopicFromList"></span>

`removeTopicFromList (topic, listProp)`

[actor.t](../file/actor.t.html)\[[963](../source/actor.t.html#963)\]



remove a topic from the given topic list



<span id="showSuggestedTopicList"></span>

`showSuggestedTopicList (lst, asker, askee, explicit)`

[actor.t](../file/actor.t.html)\[[846](../source/actor.t.html#846)\]



show our suggested topic list



<span id="showTopicResponse"></span>

`showTopicResponse (fromActor, topic, resp)`

[actor.t](../file/actor.t.html)\[[596](../source/actor.t.html#596)\]



show the response we found for a topic
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


