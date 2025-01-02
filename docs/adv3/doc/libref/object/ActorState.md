---
---
<span class="title">ActorState</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[4116](../source/actor.t.html#4116)\]

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

An ActorState represents the current state of an Actor.

The main thing that makes actors special is that they're supposed to be
living, breathing people or creatures. That substantially complicates
the programming of one of these objects, because in order to create the
appearance of animation, many things about an actor have to change over
time.

The ActorState is designed to make it easier to program this variability
that's needed to make an actor seem life-like. The idea is to separate
the parts of an actor that tend to change according to what the actor is
doing, moving all of those out of the Actor object and into an
ActorState object instead. Each ActorState object represents one state
of an actor (i.e., one thing the actor can be doing). The Actor object
becomes easier to program, because we've reduced the Actor object to the
character's constant, unchanging features. The stateful part is also
easier to program, because we don't have to make it conditional on
anything; we simply define all of the stateful parts in an ActorState,
and we define separate ActorState objects for the different states.

For example, suppose we want a shopkeeper actor, whose activities
include waiting behind the counter, sweeping the floor, and stacking
cans. We'd define one ActorState object for each of these activities.
When the shopkeeper switches from standing behind the counter to
sweeping, for example, we simply set the "curState" property in the
shopkeeper object so that it points to the "sweeping" state object. When
it's time to stack cans, we change "curState" to it points to the
"stacking cans" state object.

`class `**`ActorState`**` :   `[`TravelMessageHandler`](../object/TravelMessageHandler.html)`   `[`ActorTopicDatabase`](../object/ActorTopicDatabase.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ActorState`**  
`         `[`TravelMessageHandler`](../object/TravelMessageHandler.html)  
`                 object`  
`         `[`ActorTopicDatabase`](../object/ActorTopicDatabase.html)  
`                 `[`TopicDatabase`](../object/TopicDatabase.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`ActorState`**  
`         `[`AccompanyingInTravelState`](../object/AccompanyingInTravelState.html)  
`                 `[`GuidedInTravelState`](../object/GuidedInTravelState.html)  
`         `[`AccompanyingState`](../object/AccompanyingState.html)  
`                 `[`GuidedTourState`](../object/GuidedTourState.html)  
`         `[`ConversationReadyState`](../object/ConversationReadyState.html)  
`         `[`HermitActorState`](../object/HermitActorState.html)  
`         `[`InConversationState`](../object/InConversationState.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`autoSuggest`](#autoSuggest)`  `[`getImpliedConvState`](#getImpliedConvState)`  `[`isInitState`](#isInitState)`  `[`location`](#location)`  `[`stateDesc`](#stateDesc)`  `[`stateSuggestedTopics`](#stateSuggestedTopics)`  `

` `

Inherited from `ActorTopicDatabase` :  
` `[`askForTopics`](../object/ActorTopicDatabase.html#askForTopics)`  `[`askTopics`](../object/ActorTopicDatabase.html#askTopics)`  `[`commandTopics`](../object/ActorTopicDatabase.html#commandTopics)`  `[`giveTopics`](../object/ActorTopicDatabase.html#giveTopics)`  `[`initiateTopics`](../object/ActorTopicDatabase.html#initiateTopics)`  `[`miscTopics`](../object/ActorTopicDatabase.html#miscTopics)`  `[`showTopics`](../object/ActorTopicDatabase.html#showTopics)`  `[`specialTopics`](../object/ActorTopicDatabase.html#specialTopics)`  `[`tellTopics`](../object/ActorTopicDatabase.html#tellTopics)`  `

Inherited from `TopicDatabase` :  
` `[`limitSuggestions`](../object/TopicDatabase.html#limitSuggestions)`  `[`suggestedTopics`](../object/TopicDatabase.html#suggestedTopics)`  `[`topicGroupActive`](../object/TopicDatabase.html#topicGroupActive)`  `[`topicGroupScoreAdjustment`](../object/TopicDatabase.html#topicGroupScoreAdjustment)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`activateState`](#activateState)`  `[`afterAction`](#afterAction)`  `[`afterTravel`](#afterTravel)`  `[`arrivingTurn`](#arrivingTurn)`  `[`arrivingWithDesc`](#arrivingWithDesc)`  `[`beforeAction`](#beforeAction)`  `[`beforeTravel`](#beforeTravel)`  `[`construct`](#construct)`  `[`deactivateState`](#deactivateState)`  `[`distantSpecialDesc`](#distantSpecialDesc)`  `[`endConversation`](#endConversation)`  `[`getActor`](#getActor)`  `[`getNominalTraveler`](#getNominalTraveler)`  `[`getSuggestedTopicList`](#getSuggestedTopicList)`  `[`getTopicOwner`](#getTopicOwner)`  `[`handleConversation`](#handleConversation)`  `[`initializeActorState`](#initializeActorState)`  `[`justFollowed`](#justFollowed)`  `[`notifyTopicResponse`](#notifyTopicResponse)`  `[`obeyCommand`](#obeyCommand)`  `[`remoteSpecialDesc`](#remoteSpecialDesc)`  `[`showSpecialDescInContents`](#showSpecialDescInContents)`  `[`specialDesc`](#specialDesc)`  `[`specialDescListWith`](#specialDescListWith)`  `[`suggestTopicsFor`](#suggestTopicsFor)`  `[`takeTurn`](#takeTurn)`  `

Inherited from `TravelMessageHandler` :  
` `[`sayArriving`](../object/TravelMessageHandler.html#sayArriving)`  `[`sayArrivingDir`](../object/TravelMessageHandler.html#sayArrivingDir)`  `[`sayArrivingDownStairs`](../object/TravelMessageHandler.html#sayArrivingDownStairs)`  `[`sayArrivingLocally`](../object/TravelMessageHandler.html#sayArrivingLocally)`  `[`sayArrivingThroughPassage`](../object/TravelMessageHandler.html#sayArrivingThroughPassage)`  `[`sayArrivingUpStairs`](../object/TravelMessageHandler.html#sayArrivingUpStairs)`  `[`sayArrivingViaPath`](../object/TravelMessageHandler.html#sayArrivingViaPath)`  `[`sayDeparting`](../object/TravelMessageHandler.html#sayDeparting)`  `[`sayDepartingDir`](../object/TravelMessageHandler.html#sayDepartingDir)`  `[`sayDepartingDownStairs`](../object/TravelMessageHandler.html#sayDepartingDownStairs)`  `[`sayDepartingLocally`](../object/TravelMessageHandler.html#sayDepartingLocally)`  `[`sayDepartingThroughPassage`](../object/TravelMessageHandler.html#sayDepartingThroughPassage)`  `[`sayDepartingUpStairs`](../object/TravelMessageHandler.html#sayDepartingUpStairs)`  `[`sayDepartingViaPath`](../object/TravelMessageHandler.html#sayDepartingViaPath)`  `[`sayTravelingRemotely`](../object/TravelMessageHandler.html#sayTravelingRemotely)`  `

Inherited from `ActorTopicDatabase` :  
` `[`initiateTopic`](../object/ActorTopicDatabase.html#initiateTopic)`  `[`showTopicResponse`](../object/ActorTopicDatabase.html#showTopicResponse)`  `

Inherited from `TopicDatabase` :  
` `[`addSuggestedTopic`](../object/TopicDatabase.html#addSuggestedTopic)`  `[`addTopic`](../object/TopicDatabase.html#addTopic)`  `[`addTopicToList`](../object/TopicDatabase.html#addTopicToList)`  `[`compareVocabMatch`](../object/TopicDatabase.html#compareVocabMatch)`  `[`findTopicResponse`](../object/TopicDatabase.html#findTopicResponse)`  `[`handleTopic`](../object/TopicDatabase.html#handleTopic)`  `[`removeSuggestedTopic`](../object/TopicDatabase.html#removeSuggestedTopic)`  `[`removeTopic`](../object/TopicDatabase.html#removeTopic)`  `[`removeTopicFromList`](../object/TopicDatabase.html#removeTopicFromList)`  `[`showSuggestedTopicList`](../object/TopicDatabase.html#showSuggestedTopicList)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="autoSuggest"></span>

`autoSuggest`

[actor.t](../file/actor.t.html)\[[4156](../source/actor.t.html#4156)\]

<div class="desc">

Should we automatically suggest topics when the player greets our actor?
By default, we show our "topic inventory" (the list of currently active
topics marked as "suggested"). This can be set to nil to suppress this
automatic suggestion list.

Some authors might not like the idea of automatically suggesting topics
every time we greet a character, but nonetheless wish to keep the TOPICS
command as a sort of hint mechanism. This flag can be used for this
purpose. Authors who don't like suggested topics at all can simply skip
defining any SuggestedTopic entries, in which case there will never be
anything to suggest, rendering this flag moot.

</div>

<span id="getImpliedConvState"></span>

`getImpliedConvState`

[actor.t](../file/actor.t.html)\[[4374](../source/actor.t.html#4374)\]

<div class="desc">

Get my implied in-conversation state. This is used when our actor
initiates a conversation without specifying a particular conversation
state to enter (i.e., actor.initiateConversation() is called with
'state' set to nil). By default, we don't have an implied conversation
state, so we just return 'self' to indicate that we want to stay in the
current state. States that are coupled with separate in-conversation
states, such as ConversationReadyState, should return their associated
conversation states here.

</div>

<span id="isInitState"></span>

`isInitState`

[actor.t](../file/actor.t.html)\[[4140](../source/actor.t.html#4140)\]

<div class="desc">

Is this the actor's initial state? If so, we'll automatically set the
actor's curState to point to 'self' during pre-initialization. For
obvious reasons, this should be set to true for only one state for each
actor; if multiple states are all flagged as initial for the same actor,
we'll pick on arbitrarily as the actual initial state.

</div>

<span id="location"></span>

`location`

[actor.t](../file/actor.t.html)\[[4167](../source/actor.t.html#4167)\]

<div class="desc">

The 'location' is the actor that we're associated with.

ActorState objects aren't actual simulation objects, so the 'location'
property isn't used for containment. For convenience, though, use it to
indicate which actor we're associated with; this lets us use the '+'
notation to define the state objects associated with an actor.

</div>

<span id="stateDesc"></span>

`stateDesc`

[actor.t](../file/actor.t.html)\[[4251](../source/actor.t.html#4251)\]

<div class="desc">

Our "state" description. This shows information on what the actor is
\*currently\* doing; we display this after the static part of the
actor's description on EXAMINE \<ACTOR\>. By default, we add nothing
here, but state objects that represent scripted activies should override
this to describe their scripted activities.

</div>

<span id="stateSuggestedTopics"></span>

`stateSuggestedTopics`

[actor.t](../file/actor.t.html)\[[4361](../source/actor.t.html#4361)\]

<div class="desc">

get the topic suggestions for this state - by default, we just return
our own suggestedTopics list

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="activateState"></span>

`activateState (actor, oldState)`

[actor.t](../file/actor.t.html)\[[4123](../source/actor.t.html#4123)\]

<div class="desc">

Activate the state - this is called when we're about to become the
active state for an actor. We do nothing by default.

</div>

<span id="afterAction"></span>

`afterAction ( )`

[actor.t](../file/actor.t.html)\[[4491](../source/actor.t.html#4491)\]

<div class="desc">

handle an after-action notification for our actor

</div>

<span id="afterTravel"></span>

`afterTravel (traveler, connector)`

[actor.t](../file/actor.t.html)\[[4521](../source/actor.t.html#4521)\]

<div class="desc">

handle an after-travel notification

</div>

<span id="arrivingTurn"></span>

`arrivingTurn ( )`

[actor.t](../file/actor.t.html)\[[4706](../source/actor.t.html#4706)\]

<div class="desc">

Perform any special action on a group-travel arrival. When group travel
is performed using the AccompanyingInTravelState class, this is
essentially called in lieu of the regular takeTurn() method on the state
that is coming into effect after the group travel. (Not really, but
effectively: the accompanying travel state will still be in effect, so
its takeTurn() method is what's really called, but that method will call
this method explicitly.) By default, we do nothing. Since this runs on
our turn, it's a good place to put any scripted behavior we perform on
arriving at our new destination after the group travel.

</div>

<span id="arrivingWithDesc"></span>

`arrivingWithDesc ( )`

[actor.t](../file/actor.t.html)\[[4692](../source/actor.t.html#4692)\]

<div class="desc">

Our group-travel arrival description. By default, when we perform an
accompanying travel with another actor as the lead actor, the
accompanying travel state will display this message instead of our
specialDesc when the lead actor first arrives in the new location. We'll
just display our own specialDesc by default, but this should usually be
overridden to say something specific to the group travel arrival. The
actual message is entirely dependent on the nature of the group travel,
which is why we don't provide a special message by default.

For scripted behavior, it's sometimes better to use arrivingTurn()
rather than this method to describe the behavior. arrivingWithDesc() is
called as part of the room description, so it's best for any message
shown here to fit well into the usual room description format. For more
complex transitions into the new room state, arrivingTurn() is sometimes
more appropriate, since it runs like a daemon, after the arrival (and
thus the new room description) is completed.

</div>

<span id="beforeAction"></span>

`beforeAction ( )`

[actor.t](../file/actor.t.html)\[[4485](../source/actor.t.html#4485)\]

<div class="desc">

Handle a before-action notification for our actor. By default, we do
nothing.

</div>

<span id="beforeTravel"></span>

`beforeTravel (traveler, connector)`

[actor.t](../file/actor.t.html)\[[4496](../source/actor.t.html#4496)\]

<div class="desc">

handle a before-travel notification

</div>

<span id="construct"></span>

`construct (actor)`

[actor.t](../file/actor.t.html)\[[4117](../source/actor.t.html#4117)\]

<div class="desc">

*no description available*

</div>

<span id="deactivateState"></span>

`deactivateState (actor, newState)`

[actor.t](../file/actor.t.html)\[[4130](../source/actor.t.html#4130)\]

<div class="desc">

Deactivate the state - this is called when we're the active state for an
actor, and the actor is about to switch to a new state. We do nothing by
default.

</div>

<span id="distantSpecialDesc"></span>

`distantSpecialDesc ( )`

[actor.t](../file/actor.t.html)\[[4210](../source/actor.t.html#4210)\]

<div class="desc">

show the special description for the actor at a distance

</div>

<span id="endConversation"></span>

`endConversation (actor, reason)`

[actor.t](../file/actor.t.html)\[[4534](../source/actor.t.html#4534)\]

<div class="desc">

End the current conversation. 'reason' indicates why we're leaving the
conversation - this is one of the endConvXxx enums defined in adv3.h.
beforeTravel() calls this automatically when the other party is trying
to depart, and they're talking to us.

This returns true if we wish to allow the conversation to end, nil if
not.

</div>

<span id="getActor"></span>

`getActor ( )`

[actor.t](../file/actor.t.html)\[[4174](../source/actor.t.html#4174)\]

<div class="desc">

Get the actor associated with the state - this is simply the 'location'
property. If we're nested inside another ActorState, then our actor is
our enclosing ActorState's actor.

</div>

<span id="getNominalTraveler"></span>

`getNominalTraveler ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4714](../source/actor.t.html#4714)\]

<div class="desc">

For our TravelMessageHandler implementation, the nominal traveler is our
actor. Note that this is all we need to implement for travel message
handling, since we simply inherit the default handling for all of the
arrival/departure messages.

</div>

<span id="getSuggestedTopicList"></span>

`getSuggestedTopicList ( )`

[actor.t](../file/actor.t.html)\[[4315](../source/actor.t.html#4315)\]

<div class="desc">

Get our suggested topic list. The suggested topic list consists of the
union of the current ConvNode's suggestion list, the ActorState list,
and the Actor's suggestion list. In each case, the suggestion list is
the list of all SuggestedTopic objects at each database level.

The suggestions are arranged in a hierarchy, and each hierarchy level
can prevent suggestions from a lower level from being included. The top
level of the hierarchy is the ConvNode; the next level is the
ActorState; and the last level is the Actor. Suggestions are limited at
each level with the 'limitSuggestions' property: if true, suggestions
from lower levels are not included.

</div>

<span id="getTopicOwner"></span>

`getTopicOwner ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4183](../source/actor.t.html#4183)\]

<div class="desc">

the owner of any topic entries within the state is just my actor

</div>

<span id="handleConversation"></span>

`handleConversation (otherActor, topic, convType)`

[actor.t](../file/actor.t.html)\[[4397](../source/actor.t.html#4397)\]

<div class="desc">

General conversation handler. This can be used to process most
conversational commands - ASK, TELL, GIVE, SHOW, etc. The standard
sequence of processing is as follows:

\- If our actor has a non-nil current conversation node (ConvNode)
object, and the ConvNode wants to handle the event, let the ConvNode
handle it.

\- Otherwise, check our own topic database to see if we can find a
TopicEntry that matches the topic; if we can find one, let the
TopicEntry handle it.

\- Otherwise, let the actor handle it.

'otherActor' is the actor who originated the conversation command
(usually the player character). 'topic' is the subject being discussed
(the indirect object of ASK ABOUT, for example). convType' is a ConvType
describing the type of conversational action we're performing.

</div>

<span id="initializeActorState"></span>

`initializeActorState ( )`

[actor.t](../file/actor.t.html)\[[4186](../source/actor.t.html#4186)\]

<div class="desc">

initialize the actor state

</div>

<span id="justFollowed"></span>

`justFollowed (success)`

[actor.t](../file/actor.t.html)\[[4667](../source/actor.t.html#4667)\]

<div class="desc">

Receive notification that we just followed another actor as part of our
programmed following behavior (in other words, due to our
'followingActor' property, not due to an explicit FOLLOW command
directed to us). 'success' is true if we ended up in the actor's
location, nil if not.

This can be used to update the actor's state after a 'follow' operation
occurs; for example, if the actor's state depends on the actor's
location, this can update the state accordingly. We don't do anything by
default.

</div>

<span id="notifyTopicResponse"></span>

`notifyTopicResponse (fromActor, entry)`

[actor.t](../file/actor.t.html)\[[4479](../source/actor.t.html#4479)\]

<div class="desc">

Receive notification that a TopicEntry is being used (via its
handleTopic method) to respond to a command. The TopicEntry will call
this before it shows its message or takes any other action. By default,
we do nothing.

</div>

<span id="obeyCommand"></span>

`obeyCommand (issuingActor, action)`

[actor.t](../file/actor.t.html)\[[4259](../source/actor.t.html#4259)\]

<div class="desc">

Should we obey an action? If so, returns true; if not, displays an
appropriate response and returns nil. This will only be called when the
issuing actor is different from our actor, since a command to oneself is
implicitly always obeyed.

</div>

<span id="remoteSpecialDesc"></span>

`remoteSpecialDesc (actor)`

[actor.t](../file/actor.t.html)\[[4213](../source/actor.t.html#4213)\]

<div class="desc">

show the special description for the actor in a remote location

</div>

<span id="showSpecialDescInContents"></span>

`showSpecialDescInContents (actor, cont)`

[actor.t](../file/actor.t.html)\[[4238](../source/actor.t.html#4238)\]

<div class="desc">

show the special description when we appear in a contents listing

</div>

<span id="specialDesc"></span>

`specialDesc ( )`

[actor.t](../file/actor.t.html)\[[4207](../source/actor.t.html#4207)\]

<div class="desc">

Show the special description for the actor when the actor is associated
with this state. By default, we use the actor's actorHereDesc message,
which usually shows a generic message (something like "Bob is here" or
"Bob is sitting on the chair") to indicate that the actor is present.

States representing scripted activities should override these to
indicate what the actor is doing: "Bob is sweeping the floor," for
example.

</div>

<span id="specialDescListWith"></span>

`specialDescListWith ( )`

[actor.t](../file/actor.t.html)\[[4224](../source/actor.t.html#4224)\]

<div class="desc">

The list group(s) for the special description. By default, if our
specialDesc isn't overridden, we'll keep this in sync with the
specialDesc by returning our actor's actorListWith. And if specialDesc
\*is\* overridden, we'll just return an empty list to indicate that
we're not part of any list group. If you want to provide your own
listing group special to the state, simply override this and speicfy the
custom list group.

</div>

<span id="suggestTopicsFor"></span>

`suggestTopicsFor (actor, explicit)`

[actor.t](../file/actor.t.html)\[[4278](../source/actor.t.html#4278)\]

<div class="desc">

Suggest topics for the given actor to talk to us about. This is called
when the given actor enters a TOPICS command (in which case 'explicit'
will be true) or enters a conversation with us via TALK TO or the like
(in which case 'explicit' will be nil).

</div>

<span id="takeTurn"></span>

`takeTurn ( )`

[actor.t](../file/actor.t.html)\[[4619](../source/actor.t.html#4619)\]

<div class="desc">

Take a turn. This is called when it's the actor's turn and there's not
something else the actor needs to be doing (such as following another
actor, or carrying out a command in the actor's pending command queue).

By default, we perform several steps automatically.

First, we check to see if the actor is in a ConvNode. If so, the
ConvNode takes precedence. If we haven't been addressed already in
conversation on this turn, we'll let the ConvNode perform its
"continuation," which lets the NPC advance the conversation of its own
volition. In any case, if we have a current ConvNode, we're done with
the turn, since we assume the actor will want to proceed with the
conversation before pursuing its agenda or performing a background
action.

Second, assuming there's no active ConvNode, we check for an "agenda"
item that's ready to execute. If we find one, we execute it, and we're
done. The agenda item takes precedence over any other scripting we might
have.

Finally, if we also inherit from Script, and we didn't find an active
ConvNode or an agenda item that was ready to execute, we invoke our
doScript() method. This makes it especially easy to define random
background messages for the actor - just add an EventList class
(ShuffledEventList is usually the right one) to the state's superclass
list, and define a list of background message strings.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
