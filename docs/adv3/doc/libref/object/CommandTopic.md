---
layout: docs
---
<span class="title">CommandTopic</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[3214](../source/actor.t.html#3214)\]

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



A command topic. This is used to respond to orders given to an NPC, as
in "BOB, GO EAST." The match object for this kind of topic entry is an
Action class; for example, to create a response to "BOB, LOOK", we'd
create a CommandTopic that matches LookAction.

If you're designing a CommandTopic for a command can be accepted from a
remote location, such as by telephone, you should be aware that the
command will be running in the NPC's visual sense context. This means
that if the player character can't see the NPC, the topic result message
will be hidden - the NPC's visual sense context hides all messages
generated while it's in effect if the PC can't see the NPC. This is
usually desirable, since most messages relay visual information that
wouldn't be visible to the player character if the PC can't see the
subject of the message. However, if you've specifically designed your
CommandTopic to work remotely, this isn't at all what you want, since
you've already taken the remoteness into account in the message and thus
want the message to be displayed after all. The way to handle this is to
wrap the message in a callWithSenseContext() with a nil sense context.
For example:

topicResponse()  
{ callWithSenseContext(nil, nil, {: "Here's my message!" }); }

`class `**`CommandTopic`**` :   `[`TopicEntry`](../object/TopicEntry.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`CommandTopic`**  
[`TopicEntry`](../object/TopicEntry.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`includeInList`](#includeInList)

Inherited from `TopicEntry` :  
[`altTalkCount`](../object/TopicEntry.html#altTalkCount) [`altTopicList`](../object/TopicEntry.html#altTopicList) [`impliesGreeting`](../object/TopicEntry.html#impliesGreeting) [`isActive`](../object/TopicEntry.html#isActive) [`isConversational`](../object/TopicEntry.html#isConversational) [`matchObj`](../object/TopicEntry.html#matchObj) [`matchScore`](../object/TopicEntry.html#matchScore) [`talkCount`](../object/TopicEntry.html#talkCount) [`topicGroupActive`](../object/TopicEntry.html#topicGroupActive) [`topicGroupScoreAdjustment`](../object/TopicEntry.html#topicGroupScoreAdjustment) [`topicResponse`](../object/TopicEntry.html#topicResponse)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`isMatchPossible`](#isMatchPossible) [`matchTopic`](#matchTopic) [`setTopicPronouns`](#setTopicPronouns)

Inherited from `TopicEntry` :  
[`addAltTopic`](../object/TopicEntry.html#addAltTopic) [`addSuggestedTopic`](../object/TopicEntry.html#addSuggestedTopic) [`addTopic`](../object/TopicEntry.html#addTopic) [`adjustScore`](../object/TopicEntry.html#adjustScore) [`anyAltIsActive`](../object/TopicEntry.html#anyAltIsActive) [`breakTopicTie`](../object/TopicEntry.html#breakTopicTie) [`checkIsActive`](../object/TopicEntry.html#checkIsActive) [`deferToEntry`](../object/TopicEntry.html#deferToEntry) [`getActor`](../object/TopicEntry.html#getActor) [`getTopicOwner`](../object/TopicEntry.html#getTopicOwner) [`handleTopic`](../object/TopicEntry.html#handleTopic) [`initializeTopicEntry`](../object/TopicEntry.html#initializeTopicEntry) [`noteAltInvocation`](../object/TopicEntry.html#noteAltInvocation) [`noteInvocation`](../object/TopicEntry.html#noteInvocation)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="includeInList"></span>

`includeInList`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3216](../source/actor.t.html#3216)\]



we go in the command topics list



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="isMatchPossible"></span>

`isMatchPossible (actor, scopeList)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3247](../source/actor.t.html#3247)\]



we can always match, since the player can always type in any possible
action



<span id="matchTopic"></span>

`matchTopic (fromActor, obj)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3219](../source/actor.t.html#3219)\]



match the topic



<span id="setTopicPronouns"></span>

`setTopicPronouns (fromActor, topic)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3250](../source/actor.t.html#3250)\]



we have no pronouns to set
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


