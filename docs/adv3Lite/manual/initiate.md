::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Actors](actor.htm){.nav} \>
NPC-Initiated Conversation\
[[*Prev:* String Tags and Object Tags](tags.htm){.nav}     [*Next:*
Changing the Player Character](changepc.htm){.nav}     ]{.navnp}
:::

::: main
# NPC-Initiated Conversation

All the conversational features of the adv3Lite library we have looked
at so far have been aimed at providing ways for NPCs to respond to the
player\'s conversational commands. But truly life-like NPCs will
sometimes try to seize the conversational initiative. The adv3Lite
library provides two tools to help you achieve this:
[ConvAgendaItems](#convagendaitem) and [InitiateTopics](#initiatetopic).
The former can also be used in conjunction with
[DefaultAgendaTopics](#defaultagenda) to allow NPCs to take the
conversational initiative when the player character tries to talk about
something they don\'t want to talk about. In certain circumstances it
may also prove useful to use the [actorSay](#actorsay_idx) method
(though this should only be used sparingly).

## [InitiateTopic]{#initiatetopic}

An InitiateTopic is defined like any other ActorTopicEntry object, but
instead of representing the actor\'s response to a conversational
command from the player, it can be used to represent something an NPC
chooses to say spontaneously (or in reaction to something in his/her
environment). InitiateTopics are triggered by calling
[initiateTopic(obj)]{.code} on the actor. If there\'s one or more
InitiateTopics defined on the actor (or the actor\'s current ActorState)
that have *obj* as one of the objects on their matchObj property, then
the InitiateTopic that\'s the best match (i.e. the one with the highest
matchScore that has isActive = true) is selected and its topicResponse
is displayed (much as would be the case for any other kind of
ActorTopicEntry).

We thus define an InitiateTopic in much the same way as we\'d define any
other kind of ActorTopicEntry, except that since an InitiateTopic can
never be suggested to the player (it\'s never a direct response to a
conversational command), it would be quite meaningless to define any of
the properties that relate to suggesting topics (such as name, autoName
or suggestAs). On the other hand, there is no limit to what kind of
object *obj* can be. It can be a Topic or a Thing (or a class) as with
the more usual kinds of ActorTopicEntry, but it doesn\'t need to be, and
you\'re free to use or define any kind of objects for use with
InitiateTopics that you find useful (as the library does with
NodeContinuationTopic and NodeEndCheck, both of which are special types
of InitiateTopic).

One example of a possible use for an InitiateTopic might be to have an
NPC who\'s following the player character around make a comment on each
room (or some of the rooms) they arrive in, by keying the InitiateTopic
to the location. This might be done like this:

::: code
    + bobAccompanying: ActorState
        specialDesc = "Bob is by your side. "
        
        arrivingTurn() { getActor.initiateTopic(getActor.getOutermostRoom); }
    ;

    ++ InitiateTopic @lounge
        "<q>H'm,</q> says Bob. <q>This room is rather bare, isn't it?</q>. "
    ;

    ++ InitiateTopic @kitchen
        "<q>Ah!</q> says Bob. <q>Any chance of something to eat?</q> "   
    ;
:::

Note that such a scheme does not commit you to supplying an
InitiateTopic for every room; if initiateTopic(obj) doesn\'t find a
match it simply does nothing, so no harm is done.

\

## [ConvAgendaItem]{#convagendaitem}

A ConvAgendaItem is a special kind of [AgendaItem](agenda.htm), which is
discussed along with the other types of AgendaItem in the section on
AgendaItems above. Unless you override the isReady property of a
ConvAgendaItem to do something else (in which case you should normally
define it as [yourNewCondition && inherited]{.code}), a ConvAgendaItem
will be triggered when no conversation has taken place on that turn and
the NPC is in a position to talk to the player character but isn\'t
currently at a [conversation node](convnode.htm). A ConvAgendaItem can
be used:

1.  To allow its Actor to initiate a conversation with the player
    character (when no conversation is currently taking place).
2.  To allow its Actor to initiate a new topic of conversation during a
    lull in a conversation that\'s already in progress (i.e. when no
    conversation has taken place on that turn).
3.  To allow its Actor to change the subject when the player tries to
    converse about something not specifically covered (in conjunction
    with a [DefaultAgendaTopic](#defaultagenda); see below)

There\'s no way of knowing in advance under which of these three
situations a ConvAgendaItem will be triggered, but there\'s three
properties of ConvAgendaItem its invokeItem() you can check after (or
during) the event.

-   If **greetingDisplayed** is true then the ConvAgendaItem has just
    initiated a conversation and triggered an ActorHelloTopic in the
    process.
-   If **invokedByActor** is nil then the ConvAgendaItem was invoked via
    a [DefaultAgendaTopic](#defaultagenda).
-   You can also look at the value of the **reasonInvoked** property,
    which should be 1, 2 or 3 corresponding to the first, second and
    third situations in the numbered list above.

Note that the library does assume that whatever else the invokeItem()
method of a ConvAgendaItem does, it will output some kind of
conversation from the corresponding actor. This means:

a.  That the triggering of the ConvAgendaItem will count as conversation
    having taken place on that turn.
b.  That the player character will now be regarded as in conversation
    with the NPC, whether or not s/he was before.
c.  That if the player character was not previously in conversation with
    the NPC an actor-initiated greeting will be attempted via any
    [ActorHelloTopic](hello.htm#actorhello) that\'s been defined.

This does mean that a ConvAgendaItem should not be used for
non-conversational purposes, but on the positive side it also means that
the invokeItem() method of a ConvAgendaItem can safely assume that
conversation is in place between the player character and the NPC, and
thus use any of the conversational tags such as \<.convnode\> it might
want to (for example, if the NPC asks a question).

So, for example, we could have an NPC ask a question about the player
characters\'s study once both of them are in the study.

::: code
    + ActorHelloTopic
        "George coughs to get your attention. ";
    ;

    + ConvAgendaItem
        isReady = inherited && getActor.getOutermostRoom == study
        invokeItem()
        {
            "<q>So this is where you work, is it?</q> <<if
              greetingDisplayed>>he<<else>>George<<end>> asks. <.convnode
            study-node>";
            isDone = true;
        }
        initiallyActive = true
    ;

    + YesTopic
        "<q>Yes, this is where I do all my best work,</q> you reply. "
        convKeys = 'study-node'
        isActive = nodeActive
    ;

    + NoTopic
        "<q>No, I only pretend to work here,</q> you reply. "
        convKeys = 'study-node'
        isActive = nodeActive
    ;
:::

Note how we use the value of greetingDisplayed to avoid repeating
\'George\' if the greeting from the ActorHelloTopic has been displayed.
If a conversation was not previously in progress, we\'d see:

         George coughs to get your attention. "So this is where you work, is it?" he asks.

But if a conversation was already in progress then we\'d see:

         "So this is where you work, is it?" George asks.

\

## [DefaultAgendaTopic]{#defaultagenda}

### Overview

When the player types a conversational command concerning a topic for
which we have not defined a specific response, the normal fallback is
for the NPC to respond with a default response defined on some kind of
DefaultTopic. This does nothing to advance the conversation, and is in
effect a thinly-veiled (though often unavoidable) way for the game to
tell the player \"I am not programmed to respond in this area.\" Our
NPCs might seem livelier and more aggressive if instead of replying with
some bland non-answer they seized the opportunity to pursue their own
conversational agenda, so that instead of seeing something like:

::: cmdline
    >ask bob about his mother.
    Bob mutters something inaudible in reply.
:::

We got:

::: cmdline
    >ask bob about his mother.
    "Never mind that," he interrupts you, "tell me about that fire!"
:::

Of course we could in principle define a DefaultTopic that did this, but
the problem is that what Bob wants to ask about is likely to change from
one moment in the game to the next; at the very least he shouldn\'t
carry on asking about the fire once the player character has told him
about it. Again it would be possible to define a whole series of
DefaultTopics and define their isActive properties so that the
appropriate one was used at any particular moment, but the
implementation would then become more than a little cumbersome. In any
case the library already provides a mechanism for keeping track of what
an NPC wants to talk about, namely the ConvAgendaItem. What we ideally
need, then, is some way to combine the function of a DefaultTopic with
the functionality of a ConvAgendaItem. This is was a
**DefaultAgendaTopic** does.

In essence, a DefaultAgendaTopic is a kind of DefaultTopic that keeps a
list of agenda items. If there are any items in its agendaList it
responds by triggering the first agenda item in its list. Also, if there
are any agenda items in its list, the DefaultAgendaTopic takes priority
over all other kinds of DefaultTopic. If there aren\'t (either because
none has been added yet or they\'ve all be used up), the
DefaultAgendaTopic becomes inactive and the other, ordinary
DefaultTopics will be used instead. If there are items in the
DefaultAgendaTopic\'s agendaList but none of them is currently available
to be triggered (they\'re all either done or not yet ready), then the
DefaultAgendaTopic will fall back on the standard handling of simply
displaying its topicResponse.

To make use of a DefaultAgendaTopic requires three steps:

1.  Define the DefaultAgendaTopic itself.
2.  Define one or more ConvAgendaItems for use with the
    DefaultAgendaTopic.
3.  Add the ConvAgendaItems to the appropriate agendaLists.

We shall now look at each of those steps in turn:

\
[]{#definedefault}

### Defining a DefaultAgendaTopic

Defining a DefaultAgendaTopic is much like defining any other kind of
DefaultTopic. Note that it only makes sense to have at most one
DefaultAgendaTopic located directly within each Actor and at most one
located within each ActorState; if you don\'t have any ActorStates with
DefaultTopics of their own that might mask TopicEntries located directly
in the Actor, then there\'s really no need to define a
DefaultAgendaTopic anywhere except in the Actor (unless you really want
to manage different agendaLists for different DefaultAgendaTopics in
different ActorStates).

The other point you do have to bear in mind in defining a
DefaultAgendaTopic is that you do have to define either its
topicResponse or its eventList property (if it\'s mixed in with an
EventList class) in case it has one or more AgendaItems in its
agendaList but none of them is available to be executed. If the
agendaList of a DefaultAgendaTopic is not empty, the DefaultAgendaTopic
will take priority over all other DefaultTopics (on the assumption that
it does have an AgendaItem to execute and that this should take
precedence over a mere default response). If a DefaultAgendaTopic\'s
agendaList is empty, the DefaultAgendaTopic will be inactive and the
normal kinds of DefaultTopic will be left to field the command (all
assuming that there was no specific TopicEntry to deal with it).

A DefaultAgendaTopic might therefore look something like this:

::: code
    + DefaultAgendaTopic
        "<q>Let's talk about something else,</q> he suggests. <.topics>"
    ;
:::

We don\'t have to do it precisely this way, and if we manage the
DefaultAgendaTopic\'s agendaList properly (see below) the player should
hardly ever see its topicResponse in any case. Here our fall-back is to
indicate that the NPC wants to talk about something else and then
display a list of possible topics to the player.

\
[]{#defineconvagenda}

### Defining a ConvAgendaItem to work with a DefaultAgendaTopic

We have already discusses how to define a
[ConvAgendaItem](#convagendaitem) above. When defining one to use in
conjunction with a DefaultAgendaTopic there\'s just a couple of
additional points to bear in mind:

1.  It probably is best to use only ConvAgendaItems and not any other
    kinds of AgendaItem in conjunction with a DefaultAgendaTopic, since
    a DefaultAgendaTopic needs to give a conversational response.
2.  When you write the text of a ConvAgendaItem\'s invokeItem() method,
    you need to bear in mind that (depending on how you set it all up)
    it might have been invoked either by the actor during a turn on
    which no conversation took place or in response to a player\'s
    conversational command via a DefaultAgendaTopic. This is really the
    only complication.

To allow us to vary the text of what\'s said to make it appropriate to
what invoked the ConvAgendaItem we can test the ConvAgendaItem\'s
**invokedByActor** method. If invokedByActor is true then the
ConvAgendaItem was invoked by the actor on a turn during which no
conversation took place (in other words the actor is taking advantage of
a lull in the conversation to get a word in edgeways). On the other
hand, if invokedByActor is nil then the ConvAgendaItem was invoked by a
DefaultAgendaTopic in response to a conversational topic your game
doesn\'t allow for, so your response needs to read as a deliberate
attempt by the NPC to change the subject. Typically, this might look
like this:

::: code
    + fireAgenda: ConvAgendaItem
        invokeItem()
        {
            isDone = true;
            "<<if invokedByActor>><q>What I want to know,</q> says George, 
            <q><<else>><q>Never mind that,</q> George interrupts you, <q>what I want 
            to know<<end>> is what you're going to do about this fire.</q> ";
        }
    ;
:::

In fact, it could get even more complicated, since in principle this
ConvAgendaItem could be invoked in any of the three ways noted above (to
initiate a conversation, to take advantage of a lull in the
conversation, or as a DefaultAgendaTopic response), and we may need to
customize our text to that it works well with all three. Potentially,
this could lead to something like this:

::: code
    + fireAgenda: ConvAgendaItem
        invokeItem()
        {
            isDone = true;
            
            switch(reasonInvoked)
            {
               case 1: /* Actor is initiating a new conversation */
                 if(greetingDisplayed)
                 {
                    "<q>There's something I've been meaning to ask you,</q> he announces. <q>\^";             
                    break;
                 }
                 /* deliberately fall through to the next case if no greeting was displayed */
                case 2: /* Actor is taking advantage of a lull, or initiating a conversation without a greeting */ 
                    "<q>There's something I have to ask you,</q> says George, <q>
                 break;
                 
                case 3: /* Actor is responding via a DefaultAgendaTopic */
                    <q>Never mind that,</q> George interrupts you, <q>";
                break;
            }
            
            "what I want to know is what you're going to do about this fire.</q> ";       
            
        }
    ;
:::

This certainly takes a bit of work (and maybe some ingenuity) to get
right, but it\'s worth it if you want your NPCs to be lifelike; moreover
you may be able to reduce the work by being a bit strategic about when
you add and remove AgendaItems to and from agenda lists, which is what
we\'ll look at next. In the meantime you might like to know that you can
use the macro-constants **InitiateConversationReason** (1),
**ConversationLullReason** (2) and **DefaultTopicReason** (3) in place
of the numbers 1, 2 and 3 in code like the above to make it a bit more
readable, for example:

::: code
    + fireAgenda: ConvAgendaItem
        invokeItem()
        {
            isDone = true;
            
            switch(reasonInvoked)
            {
               case InitiateConversationReason: /* Actor is initiating a new conversation */
                 if(greetingDisplayed)
                 {
                    "<q>There's something I've been meaning to ask you,</q> he announces. <q>\^";             
                    break;
                 }
                 /* deliberately fall through to the next case if no greeting was displayed */
                case ConversationLullReason: /* Actor is taking advantage of a lull, or initiating a conversation without a greeting */ 
                    "<q>There's something I have to ask you,</q> says George, <q>
                 break;
                 
                case DefaultTopicReason: /* Actor is responding via a DefaultAgendaTopic */
                    <q>Never mind that,</q> George interrupts you, <q>";
                break;
            }
            
            "what I want to know is what you're going to do about this fire.</q> ";       
            
        }
    ;
:::

\
[]{#addingagenda}

### Adding AgendaItems to Agenda Lists

The first thing to bear in mind is that the Actor and each
DefaultAgendaTopic maintains its own list of agendaItems. The main
reason for this is that the agendaList of a DefaultAgendaTopic should
ideally only contain short-term conversation goals (ConvAgendaItems)
relating to the current conversation (or possibly an imminent one),
whereas an Actor\'s agendaList might very well contain other types of
AgendaItem related to longer term goals (which wouldn\'t be appropriate
as conversational responses). While, therefore, it might generally be
appropriate that any ConvAgendaItem added to a DefaultAgendaTopic\'s
agendaList should also be added to the Actor\'s agendaList (so the actor
can pursue the topic either by taking advantage of a lull in the
conversation or as a topic-changing default response), the reverse may
very well not be true; in general the agendaList on a DefaultAgendaTopic
is likely to be a subset of the AgendaList on the Actor.

You can add an AgendaItem (usually it should only be a ConvAgendaItem)
to the agendaList of a DefaultAgendaTopic by calling the
DefaultAgendaTopic\'s addToAgenda(item) method. In addition, you can
call any of the following methods on the Actor:

-   **addToAgenda(item)**: adds item to the Actor\'s agenda only.
-   **addToBothAgendas(item)**: adds an agenda item to both the Actor
    and to any DefaultAgendaTopic directly located in the Actor.
-   **addToCurAgendas(item)**: adds an agenda item to the Actor and to
    any DefaultAgendaTopics located either directly in the Actor or in
    its current ActorState.
-   **addToAllAgendas(item)**: adds an agenda item both to the Actor and
    to any DefaultAgendaTopics located either directly in the Actor or
    in any of its Actor States

Note that using the tag **\<.agenda item\>** is equivalent to calling
addToAllAgendas(item).

There is also a corresponding set of methods for removing agenda items
from agendas (for example, when some change of circumstances renders
them no longer appropriate, so you want to forestall their invocation):

-   **removeFromAgenda(item)**: removes item from the Actor\'s agenda
    only.
-   **removeFromBothAgendas(item)**: removes an agenda item from both
    the Actor and from any DefaultAgendaTopic directly located in the
    Actor.
-   **removeFromCurAgendas(item)**: removes an agenda item from the
    Actor and from any DefaultAgendaTopics located either directly in
    the Actor or in its current ActorState.
-   **removeFromAllAgendas(item)**: removes an agenda item both from the
    Actor and from any DefaultAgendaTopics located either directly in
    the Actor or in any of its Actor States

Note that using the tag **\<.remove item\>** is equivalent to calling
removeFromAllAgendas(item).

The \<.agenda\> and \<.remove\> tags can only be used while a
conversation is in progress (i.e. while the player character has a
currentInterlocutor), but this is probably the best time to add
ConvAgendaItems to the agendaLists of DefaultAgendaTopics in any case.
To make this a bit easier you can use the **addToPendingAgenda(item)**
method of the Actor to store a list of ConvAgendaItems the NPC might
want to use once a conversation is under way. and then call the Actor\'s
**activatePendingAgenda()** method every time a conversation begins; a
HelloTopic, ImpHelloTopic or ActorHelloTopic will automatically do the
latter for you. This scheme should ensure that activatePendingAgenda()
will only update the NPC\'s agendaList with items that are currently
relevant. You can use **removeFromPendingAgenda(item)** on the Actor to
remove agenda items that are no longer relevant, but AgendaItems are
automatically removed from the pending agenda once they\'re done (isDone
= true).

\

## [actorSay()]{#actorsay_idx}

In certain circumstances using a ConvAgendaItem or InitiateTopic to make
an NPC initiate a conversation may seem a little cumbersome. A typical
situation where this may be the case is where you want an NPC to say
something in response to a particular player character action, which is
most conveniently triggered from an afterAction method, such as:

::: code
    martha: Actor 'Martha;;woman;her' @lounge
    ;

    + marthaSittingState: ActorState
       isInitState = true
       specialDesc = "Aunt Martha is sitting in her favourite armchair, watching you closely. "
       
       afterAction()
       {
          if(gDobj == vase && !gActionIs(Examine))
             getActor.actorSay('<q>Careful what you are doing with that vase, Bertie!</q>
              your aunt admonishes you sternly. ');
       }
    ;
:::

The advantage of using [actorSay()]{.code} here instead of just using a
double-quoted string to display the text is that this makes Martha the
current interlocutor if she wasn\'t before and notes that she has
conversed with the player character on this turn. For further examples
of and reasons for using [actorSay()]{.code} in this kind of situation
see the discussion of [actor-specific tags](tags.htm#actor-tag-idx).

The actorSay() method should, however, be used sparingly, and not as the
normal way of initiating or carrying on a conversation. For one thing,
it does not trigger any greeting protocols (saying hello and goodbye),
and for another it does not offer the same level of control as using
TopicEntries and/or ConvAgendaItems. There may, however, occasionally be
situations such as the one illustrated here where it is convenient.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Actors](actor.htm){.nav} \>
NPC-Initiated Conversation\
[[*Prev:* String Tags and Object Tags](tags.htm){.nav}     [*Next:*
Changing the Player Character](changepc.htm){.nav}     ]{.navnp}
:::
