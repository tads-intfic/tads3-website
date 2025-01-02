---
layout: docs
---
<span class="title">ConvNode</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[1479](../source/actor.t.html#1479)\]

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



A conversation node. Conversation nodes are supplemental topic databases
that represent a point in time in a conversation - a particular context
that arises from what came immediately before in the conversation. A
conversation node is used to set up a group of special responses that
make sense only in a momentary context within a conversation.

A ConvNode object must be nested (via the 'location' property) within an
actor or an ActorState. This is how we associate the ConvNode with its
actor. Note that putting a ConvNode inside an ActorState doesn't do
anything different from putting the node directly inside the
ActorState's actor - we allow it only for convenience, to allow greater
flexibility arranging source code.

`class `**`ConvNode`**` :   `[`ActorTopicDatabase`](../object/ActorTopicDatabase.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ConvNode`**  
[`ActorTopicDatabase`](../object/ActorTopicDatabase.html)  
[`TopicDatabase`](../object/TopicDatabase.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`activeSpecialTopic`](#activeSpecialTopic)[`isSticky`](#isSticky)[`name`](#name)[`npcContinueList`](#npcContinueList)[`npcContinueMsg`](#npcContinueMsg)[`npcGreetingList`](#npcGreetingList)[`patDelim`](#patDelim)[`patWhitespace`](#patWhitespace)

Inherited from `ActorTopicDatabase` :  
[`askForTopics`](../object/ActorTopicDatabase.html#askForTopics)[`askTopics`](../object/ActorTopicDatabase.html#askTopics)[`commandTopics`](../object/ActorTopicDatabase.html#commandTopics)[`giveTopics`](../object/ActorTopicDatabase.html#giveTopics)[`initiateTopics`](../object/ActorTopicDatabase.html#initiateTopics)[`miscTopics`](../object/ActorTopicDatabase.html#miscTopics)[`showTopics`](../object/ActorTopicDatabase.html#showTopics)[`specialTopics`](../object/ActorTopicDatabase.html#specialTopics)[`tellTopics`](../object/ActorTopicDatabase.html#tellTopics)

Inherited from `TopicDatabase` :  
[`limitSuggestions`](../object/TopicDatabase.html#limitSuggestions)[`suggestedTopics`](../object/TopicDatabase.html#suggestedTopics)[`topicGroupActive`](../object/TopicDatabase.html#topicGroupActive)[`topicGroupScoreAdjustment`](../object/TopicDatabase.html#topicGroupScoreAdjustment)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`autoShowTopics`](#autoShowTopics)[`canEndConversation`](#canEndConversation)[`endConversation`](#endConversation)[`getActor`](#getActor)[`getTopicOwner`](#getTopicOwner)[`handleConversation`](#handleConversation)[`noteActive`](#noteActive)[`noteActiveReason`](#noteActiveReason)[`noteLeaving`](#noteLeaving)[`npcContinueConversation`](#npcContinueConversation)[`npcGreetingMsg`](#npcGreetingMsg)[`npcInitiateConversation`](#npcInitiateConversation)[`processSpecialCmd`](#processSpecialCmd)[`saySpecialTopic`](#saySpecialTopic)

Inherited from `ActorTopicDatabase` :  
[`initiateTopic`](../object/ActorTopicDatabase.html#initiateTopic)[`showTopicResponse`](../object/ActorTopicDatabase.html#showTopicResponse)

Inherited from `TopicDatabase` :  
[`addSuggestedTopic`](../object/TopicDatabase.html#addSuggestedTopic)[`addTopic`](../object/TopicDatabase.html#addTopic)[`addTopicToList`](../object/TopicDatabase.html#addTopicToList)[`compareVocabMatch`](../object/TopicDatabase.html#compareVocabMatch)[`findTopicResponse`](../object/TopicDatabase.html#findTopicResponse)[`handleTopic`](../object/TopicDatabase.html#handleTopic)[`removeSuggestedTopic`](../object/TopicDatabase.html#removeSuggestedTopic)[`removeTopic`](../object/TopicDatabase.html#removeTopic)[`removeTopicFromList`](../object/TopicDatabase.html#removeTopicFromList)[`showSuggestedTopicList`](../object/TopicDatabase.html#showSuggestedTopicList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="activeSpecialTopic"></span>

`activeSpecialTopic`

[actor.t](../file/actor.t.html)\[[1842](../source/actor.t.html#1842)\]



The active special topic. This is the SpecialTopic object that we
matched during pre-parsing, so it's the one whose response we wish to
show while processing the command we pre-parsed.



<span id="isSticky"></span>

`isSticky`

[actor.t](../file/actor.t.html)\[[1509](../source/actor.t.html#1509)\]



Is this node "sticky"? If so, we'll stick to this node if we show a
response that doesn't set a new node. By default, we're not sticky, so
if we show a response that doesn't set a new node and doesn't use a
\<.convstay\> tag, we'll simply forget the node and set the actor to no
current ConvNode.

Sticky nodes are useful when you want the actor to stay on-subject even
when the player digresses to talk about other things. This is useful
when the actor has a particular thread they want to drive the
conversation along.



<span id="name"></span>

`name`

[actor.t](../file/actor.t.html)\[[1495](../source/actor.t.html#1495)\]



Every ConvNode must have a name property. This is a string identifying
the object. Use this name string instead of a regular object name (so
ConvNode instances can essentially always be anonymous, as far as the
compiler is concerned). This string is used to find the ConvNode in the
master ConvNode database maintained in the conversationManager object.

A ConvNode name should be unique with respect to all other ConvNode
objects - no two ConvNode objects should have the same name string.
Other than this, the name strings are arbitrary. (However, they
shouldn't contain any '\>' characters, because this would prevent them
from being used in \<.convnode\> tags, which is the main place
ConvNode's are usually used.)



<span id="npcContinueList"></span>

`npcContinueList`

[actor.t](../file/actor.t.html)\[[1552](../source/actor.t.html#1552)\]



An optional EventList containing NPC-initiated continuation messages.
You can define an EventList here instead of defining npcContinueMsg, if
you want more than one continuation message.



<span id="npcContinueMsg"></span>

`npcContinueMsg`

[actor.t](../file/actor.t.html)\[[1545](../source/actor.t.html#1545)\]



Our NPC-initiated conversation continuation message. This is invoked on
each turn (during the NPC's takeTurn() daemon processing) that we're in
this conversation node and the player character doesn't do anything
conversational. This allows the NPC to carry on the conversation of its
own volition. Define this as a double-quoted string if you want the NPC
to say something to continue the conversation.



<span id="npcGreetingList"></span>

`npcGreetingList`

[actor.t](../file/actor.t.html)\[[1534](../source/actor.t.html#1534)\]



an optional EventList containing our NPC-initiated greetings



<span id="patDelim"></span>

`patDelim`

[actor.t](../file/actor.t.html)\[[1784](../source/actor.t.html#1784)\]



*no description available*



<span id="patWhitespace"></span>

`patWhitespace`

[actor.t](../file/actor.t.html)\[[1783](../source/actor.t.html#1783)\]



proceed, treating the original input as an ordinary command



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="autoShowTopics"></span>

`autoShowTopics ( )`

[actor.t](../file/actor.t.html)\[[1565](../source/actor.t.html#1565)\]



Flag: automatically show a topic inventory on activating this
conversation node. Some conversation nodes have sufficiently obscure
entries that it's desirable to show a topic inventory automatically when
the node becomes active.

By default, we automatically show a topic inventory if the node contains
an active SpecialTopic entry. Since special topics are inherently
obscure, in that they use non-standard commands, we always want to show
topics when one of these becomes active.



<span id="canEndConversation"></span>

`canEndConversation (actor, reason)`

[actor.t](../file/actor.t.html)\[[1680](../source/actor.t.html#1680)\]



Can we end the conversation? If so, return true; our caller will invoke
our endConversation() to let us know that the conversation is over.

To prevent the conversation from ending, simply return nil.

In most cases, you won't want to force the conversation to keep going
without any comment. Instead, you'll want to display some message to let
the player know what's going on - something like "Hey! We're not through
here!" If you do display a message, then rather than returning nil,
return the special value blockEndConv - this tells the caller that the
actor said something, so the caller will call noteConvAction() to
prevent further generated conversation output on this same turn.

'reason' gives the reason the conversation is ending, as an endConvXxx
enum code.



<span id="endConversation"></span>

`endConversation (actor, reason)`

[actor.t](../file/actor.t.html)\[[1697](../source/actor.t.html#1697)\]



Receive notification that our actor is ending a stateful conversation.
This is called before the normal InConversationState disengagement
operations. 'reason' is one of the endConvXxx enums, indicating why the
conversation is ending.

Instances can override this for special behavior on terminating a
conversation. For example, an actor who just asked a question could say
something to indicate that the other actor is being rude. By default, we
do nothing.

Note that there's no way to block the ending of the conversation here.
If you want to prevent the conversation from ending, use
canEndConversation() instead.



<span id="getActor"></span>

`getActor ( )`

[actor.t](../file/actor.t.html)\[[1634](../source/actor.t.html#1634)\]



our actor is our location, or our location's actor



<span id="getTopicOwner"></span>

`getTopicOwner ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[1645](../source/actor.t.html#1645)\]



our actor is the "owner" of our topics



<span id="handleConversation"></span>

`handleConversation (otherActor, topic, convType, path)`

[actor.t](../file/actor.t.html)\[[1655](../source/actor.t.html#1655)\]



Handle a conversation topic. The actor state object will call this to
give the ConvNode the first crack at handling a conversation command.
We'll return true if we handle the command, nil if not. Our default
handling is to look up the topic in the given database list property,
and handle it through the TopicEntry we find there, if any.



<span id="noteActive"></span>

`noteActive ( )`

[actor.t](../file/actor.t.html)\[[1880](../source/actor.t.html#1880)\]



Note that we're becoming active, with a reason code. Our actor will call
this method when we're becoming active, as long as we weren't already
active.

Note that if you want to adapt the method's behavior according to why
the node was activated, you can override noteActiveReason() instead of
this method.



<span id="noteActiveReason"></span>

`noteActiveReason (reason)`

[actor.t](../file/actor.t.html)\[[1866](../source/actor.t.html#1866)\]



Note that we're becoming active, with a reason code. Our actor will call
this method when we're becoming active, as long as we weren't already
active.

'reason' is a string giving a reason code for why we're being called.
For calls from the library, this will be one of these codes:

'convnode' - processing a \<.convnode\> tag

'convend' - processing a \<.convend\> tag

'initiateConversation' - a call to Actor.initiateConversation()

'endConversation' - a call to Actor.endConversation()

The reason code is provided so that the node can adapt its action for
different trigger conditions, if desired. By default, we ignore the
reason code and just call the basic noteActive() method.



<span id="noteLeaving"></span>

`noteLeaving ( )`

[actor.t](../file/actor.t.html)\[[1892](../source/actor.t.html#1892)\]



Note that we're leaving this conversation node. This doesn't do anything
by default, but individual instances might find the notification useful
for triggering side effects.



<span id="npcContinueConversation"></span>

`npcContinueConversation ( )`

[actor.t](../file/actor.t.html)\[[1597](../source/actor.t.html#1597)\]



Continue the conversation of the NPC's own volition. Returns true if we
displayed anything, nil if not.



<span id="npcGreetingMsg"></span>

`npcGreetingMsg ( )`

[actor.t](../file/actor.t.html)\[[1526](../source/actor.t.html#1526)\]



Show our NPC-initiated greeting. This is invoked when our actor's
initiateConversation() method is called to cause our actor to initiate a
conversation with the player character. This method should show what our
actor says to initiate the conversation. By default, we'll invoke our
npcGreetingList's script, if the property is non-nil.

A greeting should always be defined for any ConvNode that's used in an
initiateConversation() call.

To define a greeting when defining a ConvNode, you can override this
method with a simple double-quoted string message, or you can define an
npcGreetingList property as an EventList of some kind.



<span id="npcInitiateConversation"></span>

`npcInitiateConversation ( )`

[actor.t](../file/actor.t.html)\[[1573](../source/actor.t.html#1573)\]



our NPC is initiating a conversation starting with this node



<span id="processSpecialCmd"></span>

`processSpecialCmd (str, procStr)`

[actor.t](../file/actor.t.html)\[[1717](../source/actor.t.html#1717)\]



Process a special command. Check the given command line string against
all of our topics, and see if we have a match to any topic that takes a
special command syntax. If we find a matching special topic, we'll note
the match, and turn the command into our secret internal pseudo-command
"XSPCLTOPIC". That command will then go through the parser, which will
recognize it and process it using the normal conversational mechanisms,
which will find the SpecialTopic we noted earlier (in this method) and
display its response.

'str' is the original input string, exactly as entered by the player,
and 'procStr' is the "processed" version of the input string. The nature
of the processing varies by language, but generally this involves things
like removing punctuation marks and any "noise words" that don't usually
change the meaning of the input, at least for the purposes of matching a
special topic.



<span id="saySpecialTopic"></span>

`saySpecialTopic (fromActor)`

[actor.t](../file/actor.t.html)\[[1801](../source/actor.t.html#1801)\]



Handle an XSPCLTOPIC command from the given actor. This is part two of
the two-phase processing of SpecialTopic matches. Our pre-parser checks
each SpecialTopic's custom syntax for a match to the player's text
input, and if it finds a match, it sets our activeSpecialTopic property
to the matching SpecialTopic, and changes the user's command to
XSPCLTOPIC for processing by the regular parser. The regular parser sees
the XSPCLTOPIC command, which is a valid verb that calls the issuing
actor's saySpecialTopic() routine, which in turn forwards the request to
the issuing actor's interlocutor's current conversation node - which is
to say, 'self'. We complete the two-step procedure by going back to the
active special topic object that we previously noted and showing its
response.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


