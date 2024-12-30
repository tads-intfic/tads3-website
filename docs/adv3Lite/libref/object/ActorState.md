[ActorState]{.title}[class]{.type}

[actor.t](../file/actor.t.html)\[[2512](../source/actor.t.html#2512)\]

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
An ActorState represents a state (possibly one of many) an actor can be
in or get into. This can control how the actor is described and the
actor\'s response to certain conversational commands and other actions.

ActorStates should always be located directly in the Actor to which they
belong.

`class `**`ActorState`**` :   `[`EndConvBlocker`](../object/EndConvBlocker.html)`   `[`ActorTopicDatabase`](../object/ActorTopicDatabase.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`ActorState`**\
`         `[`EndConvBlocker`](../object/EndConvBlocker.html)\
`                 object`\
`         `[`ActorTopicDatabase`](../object/ActorTopicDatabase.html)\
`                 `[`TopicDatabase`](../object/TopicDatabase.html)\
`                         object`\
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

` `[`active`](#active)`  `[`attentionSpan`](#attentionSpan)`  `[`getActor`](#getActor)`  `[`informOverheard`](#informOverheard)`  `[`isInitState`](#isInitState)`  `[`noResponse`](#noResponse)`  `[`pcJustArrived`](#pcJustArrived)`  `[`specialDesc`](#specialDesc)`  `[`stateDesc`](#stateDesc)`  `

` `

Inherited from `ActorTopicDatabase` :\
` `[`askForTopics`](../object/ActorTopicDatabase.html#askForTopics)`  `[`askTopics`](../object/ActorTopicDatabase.html#askTopics)`  `[`commandTopics`](../object/ActorTopicDatabase.html#commandTopics)`  `[`defaultAgendaTopic`](../object/ActorTopicDatabase.html#defaultAgendaTopic)`  `[`giveTopics`](../object/ActorTopicDatabase.html#giveTopics)`  `[`initiateTopics`](../object/ActorTopicDatabase.html#initiateTopics)`  `[`miscTopics`](../object/ActorTopicDatabase.html#miscTopics)`  `[`queryTopics`](../object/ActorTopicDatabase.html#queryTopics)`  `[`sayTopics`](../object/ActorTopicDatabase.html#sayTopics)`  `[`sceneEndTopics`](../object/ActorTopicDatabase.html#sceneEndTopics)`  `[`sceneStartTopics`](../object/ActorTopicDatabase.html#sceneStartTopics)`  `[`showTopics`](../object/ActorTopicDatabase.html#showTopics)`  `[`talkTopics`](../object/ActorTopicDatabase.html#talkTopics)`  `[`tellTopics`](../object/ActorTopicDatabase.html#tellTopics)`  `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`activateState`](#activateState)`  `[`addToActor`](#addToActor)`  `[`afterAction`](#afterAction)`  `[`afterTravel`](#afterTravel)`  `[`arrivingTurn`](#arrivingTurn)`  `[`beforeAction`](#beforeAction)`  `[`beforeTravel`](#beforeTravel)`  `[`canEndConversation`](#canEndConversation)`  `[`deactivateState`](#deactivateState)`  `[`getBestMatch`](#getBestMatch)`  `[`initializeActorState`](#initializeActorState)`  `[`remoteSpecialDesc`](#remoteSpecialDesc)`  `[`sayArriving`](#sayArriving)`  `[`sayDeparting`](#sayDeparting)`  `[`sayFollowing`](#sayFollowing)`  `

Inherited from `EndConvBlocker` :\
` `[`blockEndConv`](../object/EndConvBlocker.html#blockEndConv)`  `

Inherited from `ActorTopicDatabase` :\
` `[`initiateTopic`](../object/ActorTopicDatabase.html#initiateTopic)`  `[`listableTopics`](../object/ActorTopicDatabase.html#listableTopics)`  `

Inherited from `TopicDatabase` :\
` `[`addTopic`](../object/TopicDatabase.html#addTopic)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#active}

`active`

[actor.t](../file/actor.t.html)\[[2701](../source/actor.t.html#2701)\]

::: desc
The active property is used by any TopicGroups and TopicEntries located
directly within us to determine whether they in turn are active.
Normally there is no reason for game code to override this on an
ActorState; the property is simply provided so that TopicGroups and
TopicEntries can call location.active regardless of whether they\'re
located in TopicGroups, ActorStates or Actors.
:::

[]{#attentionSpan}

`attentionSpan`

[actor.t](../file/actor.t.html)\[[2642](../source/actor.t.html#2642)\]

::: desc
Our actor\'s attention span while our actor is in this ActorState. This
is the number of turns the actor will wait for the player character to
say something when a our actor is the player character\'s current
conversation partner, before our actor gives up on the conversation and
terminates it through \'boredom\'. A value of nil (the default) means
our actor is infinitely patient and will never terminate a conversation
for this reason.
:::

[]{#getActor}

`getActor`

[actor.t](../file/actor.t.html)\[[2630](../source/actor.t.html#2630)\]

::: desc
Our associated actor. This is set to our location at preinit by our
initializeActorState method.
:::

[]{#informOverheard}

`informOverheard`

[actor.t](../file/actor.t.html)\[[2832](../source/actor.t.html#2832)\]

::: desc
Should other actors who can notionally hear the PC talking to us
overhear when information is imparted to us and we\'re in this
ActorState? I.e. should their setInform() methods be called too? By
default they should.
:::

[]{#isInitState}

`isInitState`

[actor.t](../file/actor.t.html)\[[2539](../source/actor.t.html#2539)\]

::: desc
Set isInitState to true if you want this ActorState to be the one the
associated Actor starts out in.
:::

[]{#noResponse}

`noResponse`

[actor.t](../file/actor.t.html)\[[2715](../source/actor.t.html#2715)\]

::: desc
If the noResponse method is defined (i.e. non-nil) then this ActorState
will behave like a TADS 3 HermitActorState, i.e. the noResponse message
will be displayed in response to any conversational command

noResponse can be either a single-quoted string, a double-quoted string
or a method. If it\'s a string then it will be displayed instead of any
TopicEntry. It it\'s a method it will be executed; if it then displays
anything no attempt will be made to match a TopicEntry, but it if
doesn\'t display anything the conversational command will go on to be
handled as normal.
:::

[]{#pcJustArrived}

`pcJustArrived`

[actor.t](../file/actor.t.html)\[[2681](../source/actor.t.html#2681)\]

::: desc
Flag \-- has the player character just arrived?
:::

[]{#specialDesc}

`specialDesc`

[actor.t](../file/actor.t.html)\[[2525](../source/actor.t.html#2525)\]

::: desc
The specialDesc from the actor\'s current ActorState is used as the
specialDesc for that actor in a room listing.
:::

[]{#stateDesc}

`stateDesc`

[actor.t](../file/actor.t.html)\[[2519](../source/actor.t.html#2519)\]

::: desc
The stateDesc from the actor\'s current ActorState is appended to the
desc defined on the actor when the actor is described via an EXAMINE
command.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#activateState}

`activateState (actor, oldState)`

[actor.t](../file/actor.t.html)\[[2656](../source/actor.t.html#2656)\]

::: desc
Activate the state - this is called when we\'re about to become the
active state for an actor. We do nothing by default.
:::

[]{#addToActor}

`addToActor ( )`

[actor.t](../file/actor.t.html)\[[2567](../source/actor.t.html#2567)\]

::: desc
Add this ActorState to our actor\'s list of ActorStates
:::

[]{#afterAction}

`afterAction ( )`

[actor.t](../file/actor.t.html)\[[2585](../source/actor.t.html#2585)\]

::: desc
The afterAction() method is called on an actor\'s current ActorState
when the actor is in scope for the action that\'s just taken place. This
allows game code to define state-specific reactions.
:::

[]{#afterTravel}

`afterTravel (traveler, connector)`

[actor.t](../file/actor.t.html)\[[2678](../source/actor.t.html#2678)\]

::: desc
The afterTravel notification triggered when the Actor is in this
ActorState and traveler has just traveled via connector. By default we
do nothing.
:::

[]{#arrivingTurn}

`arrivingTurn ( )`

[actor.t](../file/actor.t.html)\[[2648](../source/actor.t.html#2648)\]

::: desc
the arrivingTurn method is executed when an actor in this state has just
followed the player char to a new location.
:::

[]{#beforeAction}

`beforeAction ( )`

[actor.t](../file/actor.t.html)\[[2593](../source/actor.t.html#2593)\]

::: desc
The beforeAction() method is called on an actor\'s current ActorState
when the actor is in scope for the action that\'s just about to take
place. This allows game code to define state-specific reactions.
:::

[]{#beforeTravel}

`beforeTravel (traveler, connector)`

[actor.t](../file/actor.t.html)\[[2671](../source/actor.t.html#2671)\]

::: desc
The beforeTravel notification triggered when the Actor is in this
ActorState and traveler is just about to travel via connector. By
default we do nothing.
:::

[]{#canEndConversation}

`canEndConversation (reason)`

[actor.t](../file/actor.t.html)\[[2691](../source/actor.t.html#2691)\]

::: desc
Determine whether our actor will allow a current conversation to be
terminated for reason when in this ActorState. Return true to allow the
conversation to be terminated and nil otherwise. By default we simply
return true. If we return nil we should also display a message
explaining why we\'re not allowing the conversation to end.
:::

[]{#deactivateState}

`deactivateState (actor, newState)`

[actor.t](../file/actor.t.html)\[[2663](../source/actor.t.html#2663)\]

::: desc
Deactivate the state - this is called when we\'re the active state for
an actor, and the actor is about to switch to a new state. We do nothing
by default.
:::

[]{#getBestMatch}

`getBestMatch (prop, requestedList)`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[2725](../source/actor.t.html#2725)\]

::: desc
The getBestMatch() method is already defined on TopicDatabase, from
which ActorState inherits via ActorTopicDatabase. ActorState overrides
it to allow certain modifications particular to ActorState, such as the
possibility that the prop parameter might be passed as either a list or
a property pointer to a list property, and the need to take into account
the actor\'s activeKeys list.
:::

[]{#initializeActorState}

`initializeActorState ( )`

[actor.t](../file/actor.t.html)\[[2543](../source/actor.t.html#2543)\]

::: desc
Initialize this ActorState (this is actually called at preinit).
:::

[]{#remoteSpecialDesc}

`remoteSpecialDesc (pov)`

[actor.t](../file/actor.t.html)\[[2532](../source/actor.t.html#2532)\]

::: desc
If our associated actor is viewed from a remote location, use the
ActorState\'s remoteSpecialDesc to describe the actor in a room listing.
By default we just use the specialDesc.
:::

[]{#sayArriving}

`sayArriving (fromLoc)`

[actor.t](../file/actor.t.html)\[[2623](../source/actor.t.html#2623)\]

::: desc
The message to display when the player char sees this actor arriving
after traveling from loc. By default we simply use our actor\'s
sayActorArriving(fromLoc) method.
:::

[]{#sayDeparting}

`sayDeparting (conn)`

[actor.t](../file/actor.t.html)\[[2616](../source/actor.t.html#2616)\]

::: desc
Display a message saying that our associated actor (typically an NPC
whose departure is being viewed by the player character) is departing
via conn. By default we simply use our actor\'s sayActorDeparting(conn)
method.
:::

[]{#sayFollowing}

`sayFollowing (oldLoc, conn)`

[actor.t](../file/actor.t.html)\[[2600](../source/actor.t.html#2600)\]

::: desc
Display a message saying that we\'re following the player character from
oldLoc when our actor is in this ActorState (and the actor is following
the player character)
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::