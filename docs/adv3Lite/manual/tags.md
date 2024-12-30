::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Actors](actor.htm){.nav} \>
String Tags and Object Tags\
[[*Prev:* Giving Orders to NPCs](orders.htm){.nav}     [*Next:*
NPC-Initiated Conversation](initiate.htm){.nav}     ]{.navnp}
:::

::: main
# String Tags and Object Tags

You may have noticed that with some of the conversation tags, such as
\<.reveal val\>, \<.inform val\>, \<.convnode val\>, \<.arouse val\>,
\<.suggest val\> and \<.sugkey val\>, *val* represents a string value,
while in others, such as \<.agenda val\>, \<.remove val\>, \<.state
val\> and \<.known val\>, *val* is an object name. If so you may be
wondering how the *val* parameter can be sometimes a string value and
sometimes an object name in such seemingly similar contexts.

The answer is that in reality it\'s always a string value. Where a tag
requires val to be an object name it then has to find some means of
converting the string to an object. It does this via a table defined on
conversationManager.objNameTab which it uses to translates the strings
to objects (by looking up the value of objNameTab\[val\], where *val* is
the string in question).

Earlier versions of adv3Lite offered a choice of two methods for
building this table, but the supposedly \'economical\' option turned out
to be not that economical and not very reliable, and so was withdrawn.
Provided actor.t is included in the build, the library now just stores
an entry in the table for every instance of every class that could be
used in an object tag (i.e. Mentionables, AgendaItems and ActorStates).

## [Actor-Specific and General Tags]{#actor-tag-idx}

In addition to being string-based or object-based, conversation tags can
be either *actor-specific* or *general*.

There are only two general tags: \<.reveal key\> and \<.known obj\>.
These are general insofar as they relate to the player character\'s
knowledge, and not to any specific NPC. It is therefore safe to use
these tags in any string anywhere in your code, since their effect is to
update (in the one case) a specific table and (in the other) a specific
property.

All the remaining conversation tags are *actor-specific*, which means
that at any one time they all relate to a specific NPC, but which NPC
they relate to can vary from time to time. More specifically, they all
relate to the *[current interlocutor]{#curint_idx}*, which means the NPC
the player character in currently in conversation with. If the player
character isn\'t currently talking to anyone, then there\'s no NPC for
these tags to refer to, in which case none of these actor-specific tags
will have any effect. When there is a current interlocutor, then
\<.convnode node\> means change the current interlocutor\'s conversation
node to *node*; \<.state actorstate\> means change the current
interlocutor\'s ActorState to *actorstate*, and so on for all the rest.
This means that all these actor-specific conversation tags can only
safely and meaningfully be used in situations where it\'s quite clear
who the current interlocutor is. In adv3Lite, there are only three such
situations:

1.  The topicResponse() method or eventList property of an
    ActorTopicEntry;
2.  The invokeItem() method of a ConvAgendaItem;
3.  A call to the actorSay(txt) method of an Actor (where a conversation
    tag can be used in the *txt* parameter).

Attempting to use an actor-specific conversation tag in any other
context is likely both not to work as expected and to give rise to
hard-to-find bugs. For example, it might be tempting to write:

::: code
    bob: Actor 'Bob;;man;him' @somewhere
    ;

    + bobWatchingState: ActorState
        isInitState = true
        
        /* DON'T DO THIS! */
        afterAction()
        {
            if(gActionIs(Take) && gDobj == crown)
               "<q>Hey!</q> cries Bob. <q>Only the lawful king can take that crown!
                Are you claiming to be our king?</q> <.convnodet you-king> ";  
        }
    ;
:::

It\'s tempting to do this because it\'s so much shorter and easier than
going through the long-winded process of triggering a ConvAgendaItem or
an InitiateTopic in the afterAction method; *but it won\'t work!*. The
two reasons it won\'t work are:

1.  Using an actor-specific conversation tag in one of the three legal
    contexts ensures that the proper sequence of methods is invoked that
    is needed to make eveything work. Using them anywhere else bypasses
    these mechanisms --- with the result that not everything will work.
2.  Someone who writes code like that above almost certainly intends to
    set *Bob\'s* current conversation node to \'you-king\', but that\'s
    not what the code actually does; assuming it manages to do anything
    at all it will attempt to set *the current interlocutor\'s* current
    conversation node to \'you-king\', and Bob may or may not be the
    current interlocutor when this code is triggered.

It is primarily for this type of situation that the **actorSay()**
method has been introduced into the library. The correct (and safe) way
to write the code fragment above would be:

::: code
    bob: Actor 'Bob;;man;him' @somewhere
    ;

    + bobWatchingState: ActorState
        isInitState = true
        
        afterAction()
        {
            if(gActionIs(Take) && gDobj == crown)
               getActor.actorSay('<q>Hey!</q> cries Bob. <q>Only the lawful king
                can take that crown! Are you claiming to be our king?</q> 
                <.convnodet you-king> ');  
        }
    ;
:::

This is safe because it\'s now clear which actor\'s conversation node
will be updated, since we\'re calling a method on the actor in question
(getActor, i.e. bob), and because [actorSay()]{.code} takes care of all
the necessary housekeeping. It first makes the actor it\'s called on the
current interlocutor and notes that this actor has conversed with the
player character on this turn, then displays the string that was passed
to it as an argument, and finally shuffles the actor\'s convKeys around
in the way needed to set them up for use on the next turn. In fact, this
would be the way to do it even if we weren\'t using any conversation
tags, since we\'d probably want to make Bob the current interlocutor
after such an interjection.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Actors](actor.htm){.nav} \>
String Tags and Object Tags\
[[*Prev:* Giving Orders to NPCs](orders.htm){.nav}     [*Next:*
NPC-Initiated Conversation](initiate.htm){.nav}     ]{.navnp}
:::
