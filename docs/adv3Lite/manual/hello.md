::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Actors](actor.htm){.nav} \> Hello
and Goodbye\
[[*Prev:* Conversation Nodes](convnode.htm){.nav}     [*Next:* Player
Character and NPC Knowledge](knowledge.htm){.nav}     ]{.navnp}
:::

::: main
# Hello and Goodbye

Most conversations don\'t normally begin abruptly with a question or
statement and then end just as abruptly with a final question or
statement. It\'s more normal for people to follow some kind of greeting
protocols, beginning a conversation with \"Hello\" or \"Excuse me\" or
something of the sort, and ending it with some equivalent of
\"Goodbye\". To model this the adv3Lite library provides various kinds
of HelloTopic and GoodbyeTopic for implementing the beginning and ending
of conversations.

If you\'re used to the adv3 library you should note a couple of
differences in the way adv3Lite handles greeting protocols. First,
adv3Lite has no concept of a ConversationReadyState and/or
InConversationState; it simply uses the ActorState class for everything,
leaving it to game authors to decide what they want to use their
ActorStates for. Second, and partly following on from this, adv3Lite
does not expect to find GreetingTopics (the various kinds of HelloTopic
and GoodbyeTopic) in any equivalent of a ConversationReadyState; instead
it looks for them in whatever the Actor\'s current ActorState happens to
be, or, failing that, in the Actor itself. Third, adv3Lite hellos and
goodbyes do not automatically (by default) trigger a change of
ActorState, although you can easily define them so that they do.

Finally, there is absolutely no need to use any of these greeting
protocols (saying hello and goodbye) in your game if you don\'t wish to.
Adv3Lite provides the tools for you to incorporate greeting protocols in
your game if that\'s want you want, but in no way does it force you to
use them. If you just want your players to leap into a conversation with
the player typing \>ASK FRED ABOUT SECRET TREASURE and have Fred give
his answer without anyone exchanging any greetings, that\'s fine;
there\'s nothing to stop you doing it this way and this will suffice to
tell the game that your player character is now in conversation with
Fred. On the other hand, the game does need to have some way of knowing
when the conversation comes to an end. This does not have to be by the
player explicitly saying goodbye to Fred, but something has to happen,
(which could be the player character walking off or initiating a
conversation with a different NPC, or could be something under game
author control, such as setting Fred\'s **attentionSpan** to a number of
turns (as many or few as you wish) after which the NPC will break off
the conversation if that NPC has not been addressed for that number of
turns, or by calling the **endConversation(reason)** method from your
game code (see further [below](#deciding)).

[]{#sayinghello}

## Saying Hello

To define what happens at the start of a conversation, we can use a
**HelloTopic**. For example:

::: code
    + HelloTopic
        "<q>Hello,</q> you say.\b
        <q>Hi there!</q> Bob replies. <.agenda fireAgenda> "
        
        changeToState = bobTalking
    ;
:::

As we have defined it, this will be triggered when the player uses an
explicit HELLO command, or BOB, HELLO or TALK TO BOB. If we have not
also defined an ImplicitHelloTopic it will also be triggered when the
player enters a conversational command at a point when the player
character is not already in conversation with Bob.

A HelloTopic can be placed either directly in the Actor, or in one or
more ActorStates. The one that will be used is that in the Actor\'s
current ActorState, if it exists or, failing that, the HelloTopic
defined directly on the Actor. We can thus define HelloTopics that the
actor always uses, or make them state-specific.

If we want the start of the conversation to trigger a change of state,
we can define the **changeToState** property of the HelloTopic to
indicate the new ActorState we want to change to when the conversation
starts. We can do this on all types of HelloTopic and Goodbye Topic. In
this example, Bob goes into his bobTalking state when he\'s greeted. We
could have achieved the same effect by putting a \<.state bobTalking\>
tag in the conversational response, but if we had defined a list of
greetings (as in the next example below) we\'d have to do that on each
one.

The example above also illustrates the point that we could use a
HelloTopic to set up the actor\'s conversational agenda at the start of
a conversation. Here we use the \<.agenda\> tag to set up something
about a fire Bob wants to talk about as soon as the player character
lets him get a word in edgeways. A HelloTopic is quite a convenient
place to do this, although in practice we might not do it in quite the
way shown above, since this would result in fireAgenda being added to
Bob\'s agenda at the start of every conversation, whereas we\'d probably
only want it added the first time. In practice, then, we might define
the HelloTopic to give a list of responses that takes care of this:

::: code
    + HelloTopic, StopEventList
        [
            '<q>Hello,</q> you say.\b
            <q>Hi there!</q> Bob replies. <.agenda fireAgenda> ',
            
            '<q>Hello again!</q> you declare.\b
            <q>Hi,</q> says Bob. '
        ]
        changeToState = bobTalking
    ;
:::

[]{#nohello}

If the player issues a command like BOB, HELLO or TALK TO BOB when there
are no HelloTopics available to provide a response, then the library
will fall back on the actor\'s **noHelloResponseMsg** if a new
conversation is being started or the actor\'s **alreadyTalkingMsg** if
there\'s already a conversation in progress with this actor. Both these
properties should be defined as single-quoted strings. A string
containing a quotation mark (\" or \<q\>) is assumed to be a
conversational response (output via the [actorSay()]{.code} method),
otherwise the string is assumed to contain a non-conversational response
(output via [say()]{.code}). To force one of these responses to be
considered conversational, include the sequence [@@]{.code} in it
somewhere; the [@@]{.code} sequence will be stripped out before the
string is displayed.

[]{#implicit}

If you want to distinguish between the greeting that occurs when the
player explicitly enters a greeting command (TALK TO BOB, HELLO or the
like) and the greeting that occurs when the player simply plunges in at
the start of a conversation with an ordinary conversation command (e.g.
ASK BOB ABOUT DARK TOWER) you can define an **ImplicitHelloTopic** to
deal with the latter; the HelloTopic will then only respond to the
explicit greeting.

Finally, there\'s also an **[ActorHelloTopic]{#actorhello}** class which
can be used for an NPC to say hello when the NPC wants to initiate a
conversation. ActorHelloTopic works much like an ordinary HelloTopic,
but instead of being triggered by a player command, it\'s triggered by
calling the **actorSayHello()** method on the Actor object. If the NPC
is already in conversation with the player character, calling
actorSayHello() does nothing, so that, for example, it\'s safe to call
it from a ConvAgendaItem when we don\'t know in advance whether the
ConvAgendaItem will be triggered before or during a conversation between
the player character and the NPC. We\'ll say a bit more about this in
the section on [NPC-initiated conversation](initiate.htm).

\
[]{#sayingbye}

## Saying Goodbye

Saying goodbye, that is defining what happens at the end of a
conversation, is very similar to defining what happens at the start,
except that there are more situations that might trigger an implicit
goodbye, and there\'s the possibility of not allowing a conversation to
end.

At the simplest, we can define a **ByeTopic** in much the same way as we
define a HelloTopic; for example:

::: code
    + ByeTopic
        "<q>Goodbye,</q> you say.\b
        <q>Cheerio,</q> he replies. "

        changeToState = bobWorking
    ;
:::

Note that this needs to be located either directly in the Actor or in
the ActorState the actor\'s in at the time the conversation ends (which
would probably be the bobTalking state if the HelloTopic was defined as
above). Once again we can define the **changeToState** property to
indicate what ActorState the Actor should change to when the
conversation terminates, although we don\'t have to do this if we\'re
happy for the Actor to stay in the same state.

A conversation can also be ended implicitly, either because the player
character goes somewhere else in the middle of it, or because the Actor
becomes bored with the player character failing to contribute to the
conversation (i.e. the player not entering any conversational commands)
after so many turns (as defined on the attentionSpan property). We can
cover both cases by defining an **ImpByeTopic**, or use a
**LeaveByeTopic** to deal with the former and a **BoredByeTopic** to
deal with the latter. If none of these is defined then an implicit
goodbye will be handled by the ByeTopic.

There\'s also an **ActorByeTopic**, which is triggered when the NPC
decides to end the conversation (or, to put it more prosaically, when
**endConversation(endConvActor)** is called on the Actor in question).
If an ActorByeTopic is not defined, the ImpByeTopic will be used
instead, and if no ImpByeTopic is defined then the ByeTopic will be used
instead.

If the player issues a BYE command when there are no ByeTopics available
to provide a response, then the library will fall back on the actor\'s
**noGoodbyeResponseMsg**, which works in the same way as the
[noHelloResponseMsg]{.code} property described [above](#nohello).\
[]{#deciding}

## Deciding Whether a Conversation Can End

When a conversation is about to end, the method
**endConverstion(*reason*)** is called on the Actor. This is turn calls
**canEndConversation(*reason*)**, and the conversation is only allowed
to end if this method returns true. The *reason* parameter can be one
of:

-   **endConvBye** - the player character is trying to end the
    conversation by saying goodbye.
-   **endConvLeave** - the player character is trying to end the
    conversation by moving to a different location.
-   **endConvBoredom** - the NPC is about to end the conversation
    because the player character has failed to converse for
    *attentionSpan* turns.
-   **endConvActor** - the NPC wishes to terminate the conversation for
    reasons of its own.

You wouldn\'t normally want to override canEndConversation() on the
actor directly. Instead you might want to override one of the methods it
calls. Actor.canEndConversation(reason) goes through the following
steps:

1.  Check whether a current NodeEndCheck wants to object to ending the
    conversation; if so, return nil.
2.  If there\'s a current ActorState, see whether the current ActorState
    objects to ending the conversation.
3.  If there\'s no current ActorState, or the ActorState doesn\'t
    object, return whatever the Actor\'s actorCanEndConversation(reason)
    method returns.
4.  If we reach this step, it must be because there is a current
    ActorState and it did object, so return nil.

There are thus three different places where a game author might want to
override a method to prevent (or conditionally prevent) a conversation
being terminated:

1.  On the canEndConversation(reason) method of a
    [NodeEndCheck](convnode.htm#nodecheck) object.
2.  On the canEndConversation(reason) method of an
    [ActorState](actorstate.htm) object.
3.  On the actorCanEndConversation(reason) method of an
    [Actor](actorobj.htm) object.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Actors](actor.htm){.nav} \> Hello
and Goodbye\
[[*Prev:* Conversation Nodes](convnode.htm){.nav}     [*Next:* Player
Character and NPC Knowledge](knowledge.htm){.nav}     ]{.navnp}
:::
