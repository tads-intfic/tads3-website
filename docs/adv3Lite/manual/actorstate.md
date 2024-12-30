::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Actors](actor.htm){.nav} \> Actor
States\
[[*Prev:* The Actor Object](actorobj.htm){.nav}     [*Next:*
AgendaItems](agenda.htm){.nav}     ]{.navnp}
:::

::: main
# Actor States

[]{#purpose}

## The Purpose of Actor States

If you have an NPC whose behaviour is very basic, such as a guard whose
sole purpose is to block an exit, or a fusty old clerk who never moves
from her desk, you probably won\'t need to use Actor States with it. For
more complex NPCs whose state can change, Actor States can be a very
valuable way of modelling that state change. If the guard can be put to
sleep by giving him too much to drink, then you might want to use one
ActorState to represent the guard while he\'s alert and active, and
another while he\'s somnulent. If the fusty old clerk turns into an
animated conversationalist when you talk to her you might want to use
one ActorState to represent her bent over her desk and another to
represent her in animated conversation. The coding pattern might look
something like this:

::: code
    guard: Actor 'burly guard; strong powerful; man; him' @doorway
        "He looks incredibly strong and powerful. "
    ;

    + guardAlertState: ActorState
       isInitState = true
       specialDesc = "A burly guard blocks your path, eyeing you suspiciously. "
       stateDesc = 'You certainly don\'t want to mess with him. '
       
       beforeTravel(traveler, connector)
       {
          if(traveler == gPlayerChar && connector == forbiddenDoor)
          {
              "The guard blocks your path with a warning snarl. ";
              exit;
          }
       }
    ;

    + guardSleepingState: ActorState
       specialDesc = "The burly guard lies sprawled on the ground, snoring loudly. "
       stateDesc = 'At least he might be strong and powerful when he\'s awake, but right now he\'s dead
         to the world. '
         
       noResponse = "The guard is far too deep in his slumbers to hear you. "
    ;


    clerk: Actor 'fusty old clerk;; woman; her' @procrastinationOffice
       "She doesn't look a day under sixty. "
    ;


    + clerkWorkingState: ActorState
       isInitState = true
       specialDesc = "A fusty old clerk sits bent over her desk, working her way through
         dusty ledgers. "
       stateDesc = 'She seems totally intent on her ledgers. '
    ;
      
    + clerkTalkingState: ActorState
       specialDesc = "The clerk sits looking up at you from behind her desk, eagerly 
         awaiting you to continue the conversation. "
       stateDesc = 'But the rapt expression on her face and the animated sparkle in her bright
         blue eyes as she hangs on your every word somehow make her seem half that age. '
    ;
:::

Note that the stateDesc on the current ActorState is appended to the
desc defined on the Actor when the Actor is examined. (Authors familiar
with the adv3 library might also like to note that adv3Lite defines only
the one ActorState class; defining the

property as in the above example replicates the function of a
HermitActorState, and other adv3 ActorState classes are similarly
implemented in different ways in adv3Lite).

[]{#template}

If you wish, you can make use of the ActorState template to define the
specialDesc property and, optionally, the stateDesc property as well.
For example the guardSleepingState above could have been defined as:

::: code
     + guardSleepingState: ActorState
       "The burly guard lies sprawled on the ground, snoring loudly. "
       'At least he might be strong and powerful when he\'s awake, but right now he\'s dead
         to the world. '
         
       noResponse = "The guard is far too deep in his slumbers to hear you. "
    ; 
     
:::

\
[]{#defining}

## Defining an ActorState: the Common Properties

As you may have gathered from the foregoing examples, one property you
will nearly always want to define on an ActorState is the
**specialDesc**, which provides a separate paragraph in a room
description describing the Actor while it\'s in this state. You may also
often wish to define the **stateDesc**, which is appended to the
Actor\'s desc property when the Actor is examined. Finally, if an Actor
has one or more ActorStates, one of them is presumably the ActorState
the Actor starts out in; you indicate which one this is by defining
**isInitState = true** on the ActorState in question.

As shown in the examples above, ActorStates are always located directly
within the Actor to which they belong. ActorStates can also contain
TopicEntries; any TopicEntries contained within an ActorState will only
be active while the Actor is in that state. This allows you to customize
the Actor\'s reponse to conversation commands (such as ASK and TELL)
depending on what state the Actor is in; responses common to all states
can be placed directly within the Actor.

The following properties and methods have the same meaning as they would
on Thing (or Actor), except that the Actor delegates them to the current
ActorState, so you can write state-specific responses:

-   beforeAction()
-   afterAction()
-   beforeTravel(traveler, connector)
-   afterTravel(traveler, connector)
-   specialDesc
-   remoteSpecialDesc(pov) (only relevant if we\'re using a SenseRegion)
-   stateDesc
-   sayDeparting(conn)
-   sayArriving(fromLoc)

In addition, the following methods/properties defined on
[Actor](actorobj.htm) may also be defined on ActorState; if the Actor
has a current ActorState the version defined on the current ActorState
is the one that will be used:

-   **sayFollowing(*oldLoc*)**: displays a message when this Actor
    follows the player character into a new location from *oldLoc*. By
    default we either call the sayFollowing() method of the current
    ActorState (if there is one) or the **actorSayFollowing(*oldLoc*)**
    method on the Actor if the Actor\'s curState is nil. In either case
    the default message produced by the library is of the form \"George
    follows behind you.\"
-   **arrivingTurn()**: this method is executed on the Actor immediately
    after the sayFollowing() message is displayed to allow the Actor to
    carry out additional handling on following the player character to a
    new location. By default Actor.arrivingTurn() calls arrivingTurn()
    on the current ActorState if there is one or actorArrivingTurn() if
    curState is nil.
-   **attentionSpan**: the number of turns this Actor will wait for the
    player character to speak (once a conversation is underway) before
    becoming bored with waiting and terminating the conversation. If
    this is nil (the default) this Actor never becomes bored.
-   **canEndConversation(*reason*)**: returns true if the Actor can end
    the current conversation for *reason*. By default we return
    canEndConversation(reason) on the current ActorState.

[]{#peculiar}

And finally, there are some methods and properties that are peculiar to
ActorState:

-   **isInitState**: set to true if this is the initial ActorState for
    the Actor.
-   **getActor**: the Actor to whom this ActorState belongs.
-   **activateState(actor, oldState)**: is called on this ActorState
    when we have just switched to this state from *oldState*. This does
    nothing by default but game code can override this to define
    anything that should happen on entering this ActorState.
-   **deactivateState(actor, newState)**: is called on this ActorState
    when we are just about to switch from this state to *newState*. This
    does nothing by default but game code can override this to define
    anything that should happen on leaving this ActorState.
-   **noResponse**: if this defined (normally as a double-quoted string)
    then the string will be displayed in response to any conversational
    command (and no attempt will be made to match an ActorTopicEntry).
    The property can also be defined as a single-quoted string, or as a
    method that displays something. If the method doesn\'t display
    anything (e.g. because some condition is not met), the normal
    handling (looking for a matching ActorTopicEntry) will be used
    instead. This can be useful for defining a state in which the actor
    is unwilling or unable to respond to the player character (because
    s/he\'s preoccupied or unconscious, for example).
-   **pcJustArrived**: flag, this is true if the player character
    arrived in the location of this actor on the current turn and nil
    otherwise. This can be used, for example, to adjust our specialDesc
    to reflect the player character\'s arrival on the scene.

\

If desired, an ActorState can be mixed in with an EventList class to
define a list of \'fidget\' (atmospheric) messages describing what the
actor is doing while in that state, in order to make the actor appear a
little more lifelife, for example:

::: code
    + bobStackingState: ActorState, ShuffledEventList
        specialDesc = "Bob is busily stacking cans. "
        eventList = [
          'Bob picks up a can and studies its label. ',
          'Bob puts another can on the stack. ',
          'Bob pauses to inspect his stack of cans. ',
          'Bob takes a can from one part of the stack and places it on another part. '
        ]
    ;
:::

With this definition, one of the messages from the eventList will be
displayed on each turn that Bob is in bobStackingState and not engaged
in something more urgent, such as responding to conversation or
executing an AgendaItem.

\
[]{#changing}

## Switching ActorState

The whole point of having ActorState objects is to represent different
states your NPCs can get into during the course of your game. It follows
that if you are using ActorStates at all you will almost certainly need
some means of switching from one state to another. The most common means
is by calling **setState(*stat*)** on the Actor, where *stat* is the new
ActorState you want to change to, for example:

::: code
       /* In the code where the guard drinks too much wine */
       guard.setState(guardSleepingState);
       
       /* In the code in which you engage the clerk in conversation */
       clerk.setState(clerkTalkingState);
:::

The second method, which can be useful if you\'re outputting a string
just before changing ActorState is to use the \<.state *newstate*\> tag:

::: code
       /* In the code where the guard drinks too much wine */
       "The wine bottle slips out of the guard's hand as he slips into a deep slumber. <.state guardSleepingState>";
       
       /* In the code in which you engage the clerk in conversation */
       "The clerk looks up at you expectently. <.state clerkTalkingState>";
:::

Note that there may be limitation on where this will work; these will be
discusses further below.

A third method is to use a GreetingTopic (HelloTopic or ByeTopic) and
define its **changeToState** property to change state on beginning or
ending a conversation, for example:

::: code
    clerk: Actor 'fusty old clerk;; woman; her' @procrastinationOffice
       "She doesn't look a day under sixty. "
    ;


    + clerkWorkingState: ActorState
       isInitState = true
       specialDesc = "A fusty old clerk sits bent over her desk, working her way through
         dusty ledgers. "
       stateDesc = 'She seems totally intent on her ledgers. '
    ;

    ++ HelloTopic
       "<q>Hello there!</q> you say.\b
        <q>Why, hello!</q> she replies, looking up at you with a surprisingly bright smile. "
        
        changeToState = clerkTalkingState   
    ;
       
      
    + clerkTalkingState: ActorState
       specialDesc = "The clerk sits looking up at you from behind her desk, eagerly 
         awaiting you to continue the conversation. "
       stateDesc = 'But the rapt expression on her face and the animated sparkle in her bright
         blue eyes as she hangs on your every word somehow make her seem half that age. '
    ;

    ++ ByeTopic
       "Well, goodbye then, you say.
        Goodbye, she replies crisply, turning her attention back to her ledgers. "
        
        changeToState = clerkWorkingState
    ;
:::

This code will cause the clerk to switch to her clerkTalkingState when
she\'s first addressed, and back to her clerkWorkingState when the
conversation ends. The use of HelloTopics and ByeTopics will be
discussed in more detail when we come to look at [Greeting
Protocols](hello.htm) below.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Actors](actor.htm){.nav} \> Actor
States\
[[*Prev:* The Actor Object](actorobj.htm){.nav}     [*Next:*
AgendaItems](agenda.htm){.nav}     ]{.navnp}
:::
