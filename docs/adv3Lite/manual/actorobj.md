::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Actors](actor.htm){.nav} \> The
Actor Object\
[[*Prev:* NPC Overview](actoroverview.htm){.nav}     [*Next:* Actor
States](actorstate.htm){.nav}     ]{.navnp}
:::

::: main
# The Actor Object

[]{#thinglike}

## Thing-like Properties

The first and one absolutely essential step in defining an actor (or
Non-Player Character, NPC) is to define an Actor object to represent
that NPC in the game world. If you\'re defining an NPC of any
complexity, one that involves a number of ActorStates, AgendaItems and
TopicEntries, for example, you might wish to place all the code and
objects relating to that NPC in a separate source file, rather than in
the source file containing the game map, say. If you\'re defining a
really simple NPC for which the Actor object alone will suffice, you
probably don\'t need to do this.

The Actor class inherits from Thing, and you can thus
define/override/use all the usual properties and methods of Thing on
Actor, if you so wish/need. If, however, you plan to use ActorStates
(which you don\'t have to) it makes better sense to define the
corresponding properties on the ActorState (from which the Actor object
will then obtain the appropriate value).

The common properties you will normally want to define on all Actors, in
just the same way as you\'d define them on Thing are:

-   **vocab**: defining this effectively defines the name at the same
    time
-   **desc**: the basic (non state-specific) description of the Actor
-   **location**: the starting location of the Actor (if you\'re
    defining the Actor in a separate source file it may be useful to do
    this via the @ part of the template).
-   **isHim**/**isHer**: if the Actor is a human-like person you\'ll
    want to define either isHim = true or isHer = true to define the
    Actor\'s gender (and thus the pronouns that can be used to refer to
    him or her); note that this property can also be set via the
    [vocab](thing.htm#vocab) property.
-   **globalParamName**: this can be particularly useful on Actors whose
    names change during the course of the game (e.g. from \'the tall
    man\' to \'George\'), since the globalParamName can be used in
    message parameter strings like \'{The subj george} {is} here\' to
    produce the right form of the name at any time in the game.
-   **isFixed**: by default this is true for an Actor, on the assumption
    that most actors can\'t be picked up and carried around; if you want
    a portable Actor in your game you would need to override this
    property to nil.

A minimal Actor definition might thus look something like this:

::: code
    george: Actor 'George; tall thin; man; him' @hall
        "He's a tall thin man. "    
       
        globalParamName = 'george'
    ;
:::

[]{#additional}

We might additionally define the following properties of an Actor if
we\'re not going to use any ActorStates with this Actor; otherwise one
would define them appropriately on the ActorState objects:

-   **specialDesc**: this normally does need to be defined either on the
    Actor or on its ActorStates to provide a paragraph about the Actor
    in room description listings (e.g. \"George is standing a short way
    across the room\"). The default behaviour is for Actor.specialDesc
    to use the specialDesc property of the current ActorState, so you\'d
    only override specialDesc on the Actor either if you weren\'t
    planning to use any ActorStates with the Actor or you wanted the
    specialDesc to remain the same regardless of ActorState.
-   **stateDesc**: this is a state-specific description added to what is
    displayed from the desc property when the Actor is examined. The
    default behaviour is for Actor.stateDesc to return the stateDesc of
    the current ActorState, but you can override it on the Actor if
    you\'re not using ActorStates with that particular Actor.
-   **beforeAction()**: by default this defers to the beforeAction
    method of the current ActorState, but it also calls
    **actorBeforeAction()**, which you can use for before notications
    that are state-independent.
-   **afterAction()**: by default this defers to the afterAction method
    of the current ActorState, but it also calls **actorAfterAction()**,
    which you can use for after notications that are state-independent.
-   **beforeTravel(traveler, connector)**: by default this defers to the
    beforeTravel() method of the current ActorState, but it also calls
    **actorBeforeTravel(traveler, connector)**, which you can use for
    before travel notications that are state-independent. Note that the
    beforeTravel() method of Actor also checks whether the travel might
    end a conversation; it\'s probably best not to override it even if
    you aren\'t using ActorStates and to use actorBeforeTravel()
    instead.
-   **afterTravel(traveler, connector)**: by default this defers to the
    afterTravel() method of the current ActorState, but it also calls
    **actorAfterTravel(traveler, connector)**, which you can use for
    after travel notifications that are state-independent.
-   **remoteSpecialDesc(pov)** (only relevant if you\'re using the
    [SenseRegion](senseregion.htm) module). This is used instead of the
    specialDesc if the actor is being viewed from a remote location. If
    the actor has a current ActorState then by default we use the
    ActorState\'s remoteSpecialDesc(), otherwise we use the Actor\'s
    **actorRemoteSpecialDesc()**, which by default simply reports the
    presence of the actor in the remote location.

\
[]{#specific}

## Actor-Specific Properties

In addition to the properties the Actor class more or less shares with
Thing are a number peculiar to Actor. The most commonly useful of these
(from the point of view of the ones game authors might use) are:

-   **curState**: the Actor\'s current ActorState. Note, while it is
    legal for this to be nil (in adv3Lite), it should normally be nil
    only on Actors that don\'t use ActorStates at all.
-   **setCurState(*stat*)**: set this Actor\'s current ActorState to
    *stat*. This method should always be used to change the ActorState;
    don\'t change the value of curState directly.
-   **startFollowing()**: call this method to make this Actor start
    following the player character around.
-   **stopFollowing()**: call this method to make this Actor stop
    following the player character around.
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
-   **allowOtherActorToTake(*obj*)**: returns true if another actor
    (including the player character) is allowed to take obj while obj is
    in this Actor\'s inventory; by default this method simply returns
    nil.
-   **canCatchThrown(obj)**: returns true (the default) if this actor
    can catch *obj* when *obj* is thrown to the actor. If this method
    returns nil, obj falls into the actor\'s location instead.
-   **travelVia(conn, announceArrival = true)**: make this actor travel
    via the connector *conn* and display a message reporting the
    movement if it\'s visible to the player character. If the optional
    second parameter is nil the sayArriving() message will be
    suppressed.
-   **sayDeparting(conn)**: the message to display when the player
    character sees this actor departing (via a call to travelVia(conn)).
    By default we use the current ActorState\'s sayDeparting() method
    or, if there is no current ActorState, our own
    **sayActorDeparting(conn)** method.
-   **sayArriving(fromLoc)**: the message to display when the player
    character sees this actor arriving (via a call to travelVia(conn)).
    By default we use the current ActorState\'s sayArriving() method or,
    if there is no current ActorState, our own
    **sayActorArriving(fromLoc)** method. The fromLoc parameter is the
    location from which the arriving actor has just arrived.
-   **pcArrivalTurn**: The last turn (if any) on which the player
    character arrived in the location of this actor. This is mainly for
    use by [pcJustArrived]{.code}.
-   **pcJustArrived**: flag, this is true if the player character
    arrived in the location of this actor on the current turn and nil
    otherwise. This can be used, for example, to adjust our specialDesc
    to reflect the player character\'s arrival on the scene.

[]{#conversation}

There are also a number of properties and methods specific to actor
conversation:

-   **lastConvTime**: the turn on which the player character last
    conversed with this Actor.
-   **conversedThisTurn**: true if the player character conversed with
    this Actor on this turn, nil otherwise.
-   **conversedLastTurn**: true if the player character last conversed
    with this Actor on the previous turn, nil otherwise.
-   **canEndConversation(*reason*)**: returns true if the Actor can end
    the current conversation for *reason*. By default we return
    canEndConversation(reason) on the current ActorState if there is
    one, or actorCanEndConversation(reason) if curState is nil. reason
    can be one of:
    -   **endConvBye**: the player character says goodbye to the Actor.
    -   **endConvLeave**: the player character departs to a new location
        in the middle of the conversation.
    -   **endConvBoredom**: the Actor becomes bored with waiting for the
        player character to speak.
    -   **endConvActor**: the Actor wishes to terminate the conversation
        for some other reason.
-   **endConversation(*reason*)**: make the Actor terminate the current
    conversation with the player character, provided
    canEndConversation(reason) will permit it. Normally game code would
    only call this with reason = endConvActor; the other reasons come
    about indirectly as the effect of other occurrences.
-   **attentionSpan**: the number of turns this Actor will wait for the
    player character to speak (once a conversation is underway) before
    becoming bored with waiting and terminating the conversation. If
    this is nil (the default) this Actor never becomes bored.
-   **canTalkTo(*other*)**: can this Actor talk to *other*? By default
    this returns true if the Actor can hear *other*.
-   **informedAbout(*tag*)**: has this Actor been informed about the
    information denoted by *tag* (where tag is a single-quoted string
    value like \'fred-burgled\' or \'martha-affair\' or \'find-orb\')?
-   **actorSay(txt)**: have the actor say something (and/or the player
    character say something to the actor), thereby making the actor the
    current interlocutor. Note, this is not the normal way to handle
    conversation, but is provided for use as a short-cut in certain
    kinds of circumstances. See further under [NPC-Initiated
    Conversation](initiate.htm#actorsay_idx).

The purpose of some of the above should become more apparent when we get
deeper into the conversation system. There are also a number of methods
used for manipulated the Actor\'s agenda, whioh will be explained in the
section on [AgendaItems](agenda.htm). Most of the other methods and
properties of Actor are intended for internal use by the library, and
would not normally be directly employed in game code.

[]{#hitkiss}

## Attacking, Touching and Kissing

The way Actor (and to some extent Thing) handles responses to ATTACK,
TOUCH and KISS is slightly unusual. This is because while attacking,
touching or kissing someone is not exactly the same as conversing with
them, it is nevertheless a potentially complex form of interpersonal
behaviour.

All three actions can be ruled out at the verify stage (on Thing or
Actor) by setting **isAttackable**, **isFeelable** or **isKissable**
respectively to nil. By default these are all true, except for
isAttackable on Thing (on the basis that it doesn\'t normally make much
sense to go around attacking inanimate objects).

All three actions can also be ruled out at the check stage (on both
Thing and Actor) by setting **checkAttackMsg**, **checkFeelMsg** or
**checkKissMsg** to some non-nil value (normally a single-quoted string,
although a double-quoted string or a method that displays some text will
also work). This will cause the action to be stopped at the check stage
with a display of the message defined on the relevant property. The
default value of all three properties is nil.

At the action stage, all three commands work differently on Actor from
the way they do on Thing (since attacking, kissing or touching an
inanimate object is rather different from attacking, kissing or touching
a person). On the Thing class the result is to display the
**futileToAttackMsg** (if attacking is allowed at all, by default it
isn\'t since it\'s stopped at the verify stage so we\'d normally see the
[cannotAttackMsg]{.code} instead), the **feelDesc**, or the
**futileToKissMsg** if it is non-nil (by default it\'s nil) or else the
default message generated at the report stage, respectively.

On the Actor class, however, if any of these commands reach the action
stage they are handled quite differently, on the grounds that a person
will react very differently to being attacked, touched or kissed than an
inanimate object. In the first instance, the ATTACK, TOUCH or KISS
command will be handled by a [HitTopic](actortopicentry.htm#types),
[TouchTopic](actortopicentry.htm#types) or
[KissTopic](actortopicentry.htm#types) if one is available; otherwise
the **attackResponseMsg**, **touchResponseMsg** or **kissResponseMsg**
(all of which should be defined as single-quoted strings) is displayed.

At first sight it may seem a bit confusing that some properties refer to
\'feel\' (e.g. [feelDesc]{.code}, [checkFeelMsg]{.code}) while others
refer to \'touch\' (e.g. [touchResponseMsg]{.code}). The pattern is that
properties defined on Thing use \'feel\' while those peculiar to Actor
use \'touch\'; the rationale of this is that the naming of the Thing
properties follows the convention of using the action name, which is
actually Feel, but that it\'s rather more natural to talk in terms of
touching someone than feeling someone (hence [touchResponseMsg]{.code}
and [TouchTopic]{.code}). However, to alleviate any confusion that might
arise the library defines a number of macros that convert the plausible
but wrong form of the property name into the correct one:

-   [checkTouchMsg]{.code} into [checkFeelMsg]{.code}
-   [feelResponseMsg]{.code} into [touchResponseMsg]{.code}
-   [isTouchable]{.code} into [isFeelable]{.code}
-   [cannotTouchMsg]{.code} into [cannotFeelMsg]{.code}
-   [touchDesc]{.code} into [feelDesc]{.code}
-   [checkHitMsg]{.code} into [checkAttackMsg]{.code}
-   [hitResponseMsg]{.code} [attackResponseMsg]{.code}

While these can\'t be relied upon in every single case, and it\'s better
to use the correct names, these macros will probably cover the great
majority of cases where the plausibly wrong property name is used, so
that most of the time it won\'t matter whether, for instance, you use
[feelResponseMsg]{.code} or [touchResponseMsg]{.code} as the property
name, since in most common cases they\'ll end up meaning exactly the
same thing.

\
[]{#proxy}

## ProxyActor

Defining an actor is not just a matter of defining a single Actor
object, but also a number of other objects, such as ActorStates,
TopicEntries, AgendaItems, and ConvNodes that define the actor\'s
behaviour. For a very complex actor we may find that we have so many of
these that we\'d ideally like to split them over more than one file. The
apparent difficulty is that all (or most) of these objects need to be
directly located directly within the Actor whose behaviour they help to
define. We could explicitly set the location property of all such
objects to refer to an Actor object in another file, but this could soon
become quite laborious, and may easily lead to errors if we slip back
into using the + notation we\'re more used to. To address these problems
we can use a [ProxyActor]{.code} object. This can be placed at the head
of any second or subsequent file we\'re using to define the same actor,
and then we can continue to use the + notation to locate ActorStates,
AgendaItems and all the rest in the ProxyActor just as it if were the
original Actor. The only other step we need to take is to set the
ProxyActor\'s location property to the Actor it\'s standing in for,
which we can do via the @ notation in the ProxyActor template, e.g.:

::: code
    ProxyActor @guard    
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

    + guardAgenda: AgendaItem
       ...

    ;
:::
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Actors](actor.htm){.nav} \> The
Actor Object\
[[*Prev:* NPC Overview](actoroverview.htm){.nav}     [*Next:* Actor
States](actorstate.htm){.nav}     ]{.navnp}
:::
