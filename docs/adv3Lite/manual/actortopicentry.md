::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Actors](actor.htm){.nav} \>
ActorTopicEntry\
[[*Prev:* Basic Ask/Tell](asktell.htm){.nav}     [*Next:* Suggesting
Conversational Topics](suggest.htm){.nav}     ]{.navnp}
:::

::: main
# The ActorTopicEntry Class

The Basic Ask/Tell system described in the previous section is fine up
to a point, and may very well suffice for games in which NPCs do not
play a major role, but it may be that your game requires something a bit
more sophisticated and life-like. One major limitation of the basic
ask/tell system is that it\'s virtually stateless; there\'s no real flow
to the conversation which can proceed in any order, jumping almost
randomly from one topic to the next according to the player\'s fancy
(although sympathetic players may in fact follow any leads suggested by
the NPC\'s responses). Another is that you\'re exceedingly limited in
what the player can say. The player can type ASK BOB ABOUT MARY, for
example, but has no control over whether the player character will ask
about Mary\'s birthplace, her affair with her boss, her fondness for
stamp-collecting, or her taste in clothes.

The adv3Lite library provides a number of features that go at least some
way to meeting both these shortcomings. To enable these, the
**ActorTopicEntry** class, from which AskTopic and TellTopic and a
number of other classes derive, adds several properties and methods to
the basic [TopicEntry](topicentry.htem) class which it inherits. In this
section we shall look at some of these, and in the sections that follow
we shall describe how they can be put to use to provide a richer
conversational similuation than the basic ask/tell system provides.

[]{#methods}

## Methods and Properties of ActorTopicEntry

We may broadly divide the methods and properties of the ActorTopicEntry
class into four groups:

1.  Those it derives from the [TopicEntry](topicentry.htm) class, which
    we have already covered, such as matchScore, matchObj, topicResponse
    and isActive.
2.  Those relating to [suggesting](suggest.htm) topics of conversation
    to the player, which we\'ll discuss in the next section. These
    include name, autoname, timesToSuggest, curiositySatisfied,
    curiosityAroused, suggestAs, timesInvoked, keyTopics,
    showKeyTopics() and listOrder.
3.  The rest, including isConversational, impliesGreeting, getActor(),
    convKeys, nodeActive(), activated and deactivate, which we\'ll deal
    with now.

The **isConversational** property is used to determine whether the
response defined on this ActorTopicEntry should count as conversational
and hence make the current turn the latest turn on which the player
character conversed with the NPC. In most cases the response will be
conversational, but occasionally it may not (for example, if you define
a topicResponse that simply says that the NPC is unresponsive, e.g.
because he\'s asleep, or ignoring the player character). Certain types
of ActorTopicEntry (KissTopic and HitTopic) also don\'t count as
conversational.

The **impliesGreeting** property is used to determine whether the
response should trigger an implicit greeting. This is explained in more
detail in the section below on [Hello and Goodbye](hello.htm).

The **getActor()** method simply returns the Actor to which this
ActorTopicEntry belongs.

The **nodeActive()** method can be used to determine whether this
ActorTopicEntry belongs to the current [Conversation
Node](convnode.htm). This will be explained more fully in the section on
Conversation Nodes.

The remaining three require slightly fuller explanations.

[]{#convkeys}

### convKeys

There are basically two ways of giving a conversation greater shape and
a better sense of flow than is possible with the basic ask/tell system.
One is to nudge the player by suggesting what topics it might be
particularly appropriate to pursue, which can to some extent be done
simply in the text of a topic response, but can also be done by
presenting an explicit list of [suggestions](suggest.htm). The other is
to place some kind of restriction on which topics follow on from a
particular point in the conversation, effectively treating certain
points in the conversation as [nodes](convnode.htm) which constrain or
direct the choice of immediately succeeding topics. Of course one might
want to combine these by presenting a list of topics that are available
at any particular node.

The purpose of the **convKeys** property is to provide a way of
referring to one or more TopicEntries at a point where one wants to
impose a constraint or list some suggestions (given that TopicEntries
are typically defined as anonymous objects). The convKey property of an
ActorTopicEntry thus holds a single-quoted string, or a list of
single-quoted strings, that effectively act as references to that
ActorTopicEntry. One ActorTopicEntry can have several keys defines on
its convKeys property, and the same key can be defined on several
ActorTopicEntries, allowing you to use these keys to group
ActorTopicEntries in any way you like and refer to a group of topics
with a single key. For example if we defined:

::: code
    + AskTopic @darkTower
       "<q>Tell me about the dark tower,</q> you insist.\b
        <q>Oh no!</q> says Bob. <q>We don't talk about that -- ever!</q>"
        
        convKeys = ['tower-node', 'bob-fright']
    ;

    + AskTopic @tFear
       "<q>Why are you so frightened of the dark tower?<q> you demand.
        Bob merely rolls his eyes and shivers. "
        
        convKeys = 'bob-fright'
    ;
:::

In this example, the first AskTopic can be referred to with either the
\'tower-node\' key or the \'bob-fright\' key, but using the
\'bob-fright\' key also refers to the second AskTopic; so you\'d use
\'tower-node\' just to refer to the first one and \'bob-fright\' to
refer to both together. Where and how one uses these references, and for
what purpose, will be discussed below and in the sections that follow.

One final point: the namespace for convKeys is the individual actor.
That is to say, if you have several NPCs, Bob, Bill, Betty and Belinda,
say, then the convKeys you define on Bob have nothing to do with those
you use for Bill, Betty and Belinda, so you are free to use the same
conv key on different actors with different meanings.

### [activated and deactivate()]{#activated}

The **activated** property provides the first of several ways in which
we can restrict the flow of conversation, in this case by making a
TopicEntry or a group of TopicEntries unavailable until we wish them to
become active.

For an ActorTopicEntry to be active, both its [isActive]{.code} and its
[activated]{.code} properties must be true. The [activated]{.code}
property starts out true by default, so if you don\'t want to make use
of it you can simply ignore it, but you can define [activated =
nil]{.code} on selected ActorTopicEntries and then activate them later
using an [\<.activate key\>]{.code} tag. When your game code outputs
\'\<.activate key\>\' the effect is to set the activated property to
true on every ActorTopicEntry belonging to the player character\'s
current interlocutor which has *key* among the keys on its convKeys
property. Exactly the same happens if you call makeActivated(key) on the
Actor object (which is precisely what the \<.activate key\> tag does).

The main purpose of this is to allow you to activate a whole set of
ActorTopicEntries at once, when they share a common convKey. For
example:

::: code
    + AskTopic @darkTower
       "<q>Just why is that dark tower considered so terrible?</q> you ask.\b
       <q>It all started with the troubles,</q> Bob replies darkly, <q>that and the massacre
        at Longacre Farm.</q> <.activate troubles> "
    ;

    + AskTopic @tTroubles
       "<q>Tell me about the troubles... "
       
       convKeys = ['troubles']
       activated = nil
    ;

    + AskTopic @tMassacre
       "<q>Tell me about the massacre..."
     
       convKeys = ['troubles']
       activated = nil
    ;

    + AskTopic @tLongacre
       "<q>What happened at Longacre Farm?..."
       
       convKeys = ['troubles', 'farm']
       activated = nil
    ;
:::

In this example, it doesn\'t make sense for the player character to be
able to ask about the troubles, the massacre or Longacre Farm until Bob
has mentioned them. This code holds back activating them until Bob gives
his response to the question about the dark tower. Note that in this
particular case we could have gone about this a different way by using a
\<.known\> tag or a \<.reveal\> tag, but we\'ll take a look at those
when we come to discuss player and non-player character
[knowledge](knowledge.htm).

A more immediate question might be, why bother with the activated
property at all? Why not simply have the \<.activate\> tag set the
isActive property of all the relevant ActorTopicEntries to true? There
are three reasons for making use of a separate activated property:

1.  The recommended style of coding TopicEntry objects is to make them
    declarative as far as possible. It makes for cleaner and more
    readable code if the conditions that make a TopicEntry active are
    shown declaratively on their isActive property. If isActive
    properties were manipulated by code outside the TopicEntries to
    which they relate it would become that much harder to see what was
    causing a TopicEntry to become active or inactive, making your code
    that much harder to understand and debug. It may seem a little more
    effort to write [activated = nil]{.code}, but you can then see at a
    glance that the TopicEntry in question needs to be activated by an
    \<.activate\> tag somewhere.
2.  The use of a separate activated property allows you to specify
    additional conditions, e.g. [isActive =
    me.hasSeen(darkTower)]{.code}.
3.  The [activated]{.code} property is also useful for a secondary
    purpose: calling the **deactivate()** method from with a
    topicResponse method sets the [activated]{.code} property of its
    ActorTopicEntry method to nil, thereby deactivating that
    ActorTopicEntry. This can be useful in an ActorTopicEntry that you
    want to be available only once (the first time it is viewed), or in
    the last item in the eventList of an ActorTopicEntry that\'s also a
    StopEventList to disable the TopicEntry once all the items in the
    list have been viewed. There\'s also a [\<.deactivate key\>
    ]{.code}tag that does the opposite of the [\<.activate key\>]{.code}
    tag, namely setting [activated]{.code} to nil on every
    ActorTopicEntry whose convKeys property matches *key*.

\

## [The Different Types of ActorTopicEntry]{#types}

We have already seen how AskTopic, TellTopic and AskTellTopic can be
used to respond to commands like ASK BOB ABOUT TOWER or TELL BOB ABOUT
VISIT (which, incidentally, can be abbreviated to A TOWER or T VISIT
once the conversation with Bob is in progress), but the adv3Lite library
defines many more types of ActorTopicEntry classes capable of responding
to a range of conversational (or quasi-conversational) commands. The
full list is given below, although discussion of some of the more
specialized classes will be deferred to the appropriate sections.

-   **AskTopic**: responds to ASK X ABOUT Y or A Y
-   **TellTopic**: responds to TELL X ABOUT Y or T Y
-   **AskTellTopic**: responds to ASK X ABOUT Y or TELL X ABOUT Y (or
    the abbreviated forms thereof)
-   **GiveTopic**: responds to GIVE X TO Y
-   **ShowTopic**: responds to SHOW X TO Y
-   **GiveShowTopic**: responds to GIVE X TO Y or SHOW X TO Y
-   **AskForTopic**: responds to ASK X FOR Y (or ASK FOR Y)
-   **AskAboutForTopic**: responds to ASK X FOR Y or ASK X ABOUT Y (or
    the abbreviated forms thereof)
-   **TalkTopic**: responds to TALK ABOUT Y
-   **TellTalkTopic**: responds to TELL X ABOUT Y or T Y or TALK ABOUT Y
-   **AskTalkTopic**: responds to ASK X ABOUT Y or ASK ABOUT Y or A Y or
    TALK ABOUT Y
-   **AskTellTalkTopic**: responds to ASK ABOUT Y or TELL X ABOUT Y or
    TALK ABOUT Y
-   **TellTalkShowTopic**responds to TELL X ABOUT Y or TALK ABOUT Y or
    SHOW Y
-   **AskTellShowTopic**: responds to ASK ABOUT Y or TELL X ABOUT Y or
    SHOW X TO Y
-   **AskTellGiveShowTopic**: responds to ASK ABOUT Y or TELL X ABOUT Y
    or GIVE X TO Y OR SHOW X TO Y
-   **SayTopic**: a kind of [SpecialTopic](specialtopic.htm) that
    responds to SAY WHATEVER or just WHATEVER (for further details see
    [below](specialtopic.htm#saytopic)).
-   **QueryTopic**: a kind of [SpecialTopic](specialtopic.htm) that
    responds to questions like ASK WHERE\|WHEN\|WHY\|HOW\|WHY\|WHO
    SUCH-AND-SUCH (for further details see
    [below](querytopic.htm#saytopic)).
-   **YesTopic**: responds to YES or SAY YES
-   **NoTopic**: responds to NO or SAY NO
-   **YesNoTopic**: responds to YES or NO
-   **KissTopic**: responds to KISS X, *but only if **isKissable** on
    the actor is true*.
-   **HitTopic**: responds to HIT X, ATTACK X and the like *but only if
    **isAttackable** on the actor is true*.
-   **TouchTopic**: responds to TOUCH X, FEEL X and the like *but only
    if **isFeelable** on the actor is true*.
-   **InitiateTopic**: an actor-initiated TopicEntry (see the section on
    [NPC-Initiated Conversation](initiate.htm) below).
-   **NodeContinuationTopic**: a special kind of InitiateTopic for use
    in [Conversation Nodes](convnode.htm).
-   **NodeEndCheck**: another special kind of InitiateTopic for use in
    [Conversation Nodes](convnode.htm).
-   **CommandTopic**: responds to [commands](orders.htm) given to NPCs
    (e.g. BOB, TAKE BALL).
-   **HelloTopic**: responds to TALK TO X or HELLO or X, HELLO (see the
    section on [Hello and Goodbye](hello.htm) below)
-   **ByeTopic**: responds to BYE or X, BYE (see the section on [Hello
    and Goodbye](hello.htm) below)
-   **HelloGoodbyeTopic**: responds to HELLO or BYE
-   **ImpHelloTopic**, **ActorHelloTopic**, **ImpByeTopic**,
    **BoredByeTopic**, **LeaveByeTopic**, **ActorByeTopic**: used for
    various kinds of implicit or actor-initiated Hellos and Goodbyes
    (see the section on [Hello and Goodbye](hello.htm) below)
-   **AltTopic**: used to provide one or more alternative responses to
    conversational commands (see the section on [AltTopic](#alttopic)
    below)

Note that for certain of these kinds of ActorTopicEntry, such as
YesTopic, NoTopic, YesNoTopic, KissTopic, HitTopic, NodeInitiateTopic,
and the various kinds of HelloTopic and ByeTopic game code should not
normally attempt to define the matchObj property (since none of them
rely on the player specifying a topic they might match).

[]{#hittopic}

**HitTopic**, **TouchTopic** and **KissTopic** are not treated as
conversational (that is they don\'t trigger greeting protocols and are
not counted as initiating a conversation). If, however, an actor gives a
conversational response to one of these actions (such as \"Don\'t touch
me!\"), we can define [isConversational = true]{.code} on the
corresponding [TouchTopic]{.code} (or whatever). These three classes are
provided as potentially convenient means of customizing an NPC\'s
response to the common non-conversational forms of interaction with
NPCs. They allows responses to be made dependent on the current
ActorState or on conditions specified on the isActive property or in any
other way that ActorTopicEntries can be manipulated. For other ways of
handling ATTACK, TOUCH and KISS on Actors see the discussion of
[Attacking, Touching and Kissing](actorobj.htm#hitkiss) in the chapter
on the Actor object.

An ActorState\'s [noResponse]{.code} property is not invoked in response
to an ATTACK, TOUCH, or KISS command. This list of exclusions is
controlled by the Actor\'s **physicalTopicObjs** property, which by
default contains a list of the three topic objects corresponding to
these three non-conversational actions: \[hitTopicObj, kissTopicObj,
touchTopicObj\]. This allows game code to define additional topics of
this type, e.g, a HugTopic corresponding to a HUG action, for which a
user-defined hugTopicObj could be added to this list.

The **TalkTopic** class and its variants may seem an unnecessary
complication. There is indeed to need no use it in your games if you
don\'t want it. One of the uses envisaged for it is to specify a broad
topic of conversation and have the game respond with a list of possible
sub-topics, like this:

::: cmdline
    >talk about the dark tower
    You could ask Bob when the tower was built, or why the tower is scary, or tell him
    about your visit, or say you think he's exaggerating.
:::

Just how you\'d go about that is discussed in the section on
[suggesting](suggest.htm) topics.

In addition to the ActorTopicEntry classes listed above are the various
kinds of [DefaultTopic]{#default_idx} (which match the appropriate
conversational command when no specific response have been defined):

-   **DefaultAnyTopic**: responds to any conversational command (but not
    to HIT or KISS or to an attempt to invoke an InitiateTopic, and not
    to HELLO or GOODBYE unless its **matchGreetings** property is true
    --- the default is nil.)
-   **DefaultConversationTopic**: responds to any conversational command
    except GIVE, SHOW, YES, NO, HELLO and GOODBYE (but not to HIT or
    KISS or to an attempt to invoke an InitiateTopic)
-   **DefaultAgendaTopic**: responds to any conversational command that
    a DefaultAnyTopic would and gives the NPC the opportunity to seize
    the conversational initiative via an AgendaItem. This is explained
    more fully [below](initiate.htm#defaultagenda) in the section on
    [NPC-Initiated Conversation](initiate.htm).
-   **DefaultAskTopic**: provides a default response for ASK X ABOUT Y
-   **DefaultTellTopic**: provides a default response for TELL X ABOUT Y
-   **DefaultAskTellTopic**: provides a default response for ASK X ABOUT
    Y or TELL X ABOUT Y
-   **DefaultAskForTopic**: provides a default response for ASK X FOR Y
-   **DefaultTalkTopic**: provides a default response for TALK ABOUT X
-   **DefaultGiveTopic**: provides a default response for GIVE X TO Y
-   **DefaultShowTopic**: provides a default response for SHOW X TO Y
-   **DefaultGiveShowTopic**: provides a default response for GIVE X TO
    Y or SHOW X TO Y
-   **DefaultSayTopic**: provides a default response for SAY X
-   **DefaultQueryTopic**: provides a default response for questions
    like ASK WHO/WHAT/WHY/WHEN
-   **DefaultSayQueryTopic**: provides a default response for SAY X or
    questions like ASK WHO/WHAT/WHY/WHEN
-   **DefaultSayTellTopic**: provides a default response for SAY X or
    TELL X ABOUT Y (or T X)
-   **DefaultSayTellTalkTopic**: provides a default response for SAY X
    or TELL X ABOUT Y (or T X) or TALK ABOUT X
-   **DefaultTellTalkTopic**: provides a default response for TELL X
    ABOUT Y (or T X) or TALK ABOUT X
-   **DefaultAskQueryTopic**: provides a default response for ASK ABOUT
    X or questions like ASK WHO/WHAT/WHY/WHEN
-   **DefaultCommandTopic**: provides a default response for orders
    given to the NPC.

Note that there is a hierarchy among the various kinds of DefaultTopics,
such that the more specific types are defined with a higher matchScore
than the more general ones. So, for example, if you define a
DefaultAskTopic, a DefaultAskTellTopic, and a DefaultAnyTopic on the
same actor, the DefaultAskTopic will responde to commands of the form
ASK X ABOUT Y, the DefaultAskTellTopic to commands of the form TELL X
ABOUT Y, and the DefaultAnyTopic to anything else (in the absence of
more specific responses). The one apparent exception to this is the
DefaultAgendaTopic, which takes precedence over all other types of
DefaultTopics, but only when there\'s anything in its agendaList; this
is to allow NPC\'s to pursue their own conversational agendas (if and
when they have them) in preference to giving canned default responses.

[]{#exceptions}

There may be occasions where there are topics you don\'t want a
DefaultTopic to match, for example where a DefaultTopic is defined on an
ActorState but there are a handful of TopicEntries you\'ve defined on
the Actor which you still want to be available. You can handle this by
defining the **exceptions** property on the DefaultTopic in question to
contain a list of the topics you don\'t want the DefaultTopic to handle,
so that handling of just those topics can be handled elsewhere; for
example:

::: code
    bob: Actor 'Bob; short; man; him'
       "He's a short man. "
     ;
     
    + AskTopic @tTroubles
        "<q>Troubles? What troubles!</q> he cries. "
    ;
     
    + bobStacking: ActorState
       specialDesc = "Bob is busily stacking cans in the corner. "
       
       isInitState = true  
    ;
     
    ++ DefaultAnyTopic
        "Bob merely grunts in reply and carries on stacking cans. "
         
        exceptions = [tTroubles]
    ;
:::

This would allow Bob to respond with the special response to ASK BOB
ABOUT TROUBLES even when Bob is in the bobStacking state, even though
every other enquiry will be met by the \"Bob merely grunts\...\"
response. This is useful where we don\'t want to put the AskTopic for
tTroubles in the bobStacking state because we want to be common to more
than one ActorState.

If we need something a bit more complex than the [exceptions]{.code}
list can provide, we can instead override the DefaultTopic\'s
**avoidMatching(top)** so that it returns [true]{.code} for any topic
*top* we don\'t want the DefaultTopic to match. The default behaviour of
avoidMatching(top) is to return true if and only if *top* is listed in
the [exceptions]{.code} property.

\
[]{#alttopic}

## AltTopic

Sometimes we may want an NPC to give different responses to
conversational commands depending on context, for example what the
player character already knows. We could do this with a number of
if\...else statements within the topicResponse of a single TopicEntry,
but this can quickly become cumbersome. A better alternative would be to
define a sequence of ActorTopicEntries with increasing matchScores,
which will work perfectly well but is perhaps just a little long-winded.
In adv3Lite (as in adv3), the best solution is to use one or more
[AltTopics]{.code}.

To use an AltTopic, just locate it directly (with the + notation) in
ActorTopicEntry to which it is to provide an alternative response.
Don\'t define a matchObj for it, since it will simply match whatever its
location matches, but do define its [isActive]{.code} property to be
different from that of its location, then, when its isActive property is
true, it will be used instead of its parent ActorTopicEntry.

You can also define a whole series of AltTopics located in an
ActorTopicEntry, in which case the one that will be used will be the
last of those for which isActive is true. For example, we might define:

::: code
    + AskTellTopic @lighthouse 
       "<q>What can you tell me about the lighthouse?</q> you ask.
        <q>I hear it has quite a history.</q>\b
        <q>Nothing you want to know about,</q> Bob mutters darkly.
        
        name = 'the lighthouse'
    ;

    ++ AltTopic
       "<q>I hear the lighthouse was caught up in the troubles,</q> you remark.\b
        <q>So they say -- but you don't want to go poking your nose into them
         -- or the lighthouse,</q> Bob warns you. "
         
        isActive = gRevealed('troubles') 
    ;

    ++ AltTopic
       "<q>I've been to see the lighthouse,</q> you tell him. <q>I don't know what
        all the fuss is about -- I didn't see anything!</q>\b
        Bob looks momentarily relieved. <q>Just because you didn't see it doesn't
        mean it aint there,</q> he replies. "
       
       isActive = gPlayerChar.hasSeen(lighthouse)
    ;
:::

If the player types ASK BOB ABOUT LIGHTHOUSE or TELL BOB ABOUT
LIGHTHOUSE then the response that will be used will depend on whether
the player character has seen the lighthouse or \'troubles\' has been
revealed. If the player character has seen the lighthouse then the
\"I\'ve been to the lighthouse\...\" response will be use. Otherwise, if
\'troubles\' has been revealed the \"I hear the lighthouse was
caught\...\" response will be used. Otherwise the \"What can you tell
me\...\" response will be used.

One further point to note is that the two AltTopics will also copy their
name property from their location, so whichever of them is available at
any one time will be suggested as \"You could ask Bob about the
lighthouse\", provided the curiosity hasn\'t been satsified on them yet.
If you don\'t want an AltTopic to be suggested in the same way as its
parent TopicEntry, you can simply override its name property to be
something different or nil.

Finally, it may help to know that internally AltTopics work by
incrementing their matchScore in relation to their parent topic or a
previous AltTopic. Normally you won\'t need to worry about this, but if
you did have an ActorTopicEntry with a lot of AltTopics, and you also
defined another ActorTopicEntry that might match the same object as the
first, you might need to give it a substantially higher matchScore to be
sure of its being used in preference to any of the AltTopics of the
first TopicEntry.

\
[]{#summarizing}

## Summarizing Give and Show

When a GIVE or SHOW command is issued, it is possible that it could be
given more than one direct object. For example GIVE BELL, BOOK and
CANDLE TO PRIEST. The normal behaviour in such a situation would be for
the appropriate TopicEntries to be triggered in turn for each of the
bell, the book and the candle, resulting in three separate reports, e.g.

::: cmdline
    >give bell, book and candle to priest
    Thank you, says the priest, taking the bell.

    The priest takes the book.

    No, I don't need that, he says, waving the candle away.
:::

In a case where you want a different response to each object, this is
absolutely fine. There may be some cases, however, in which it is less
optimal, especially when the GIVE command relates to handing over money
to someone, for example, suppose you had created a PieceOfSilver class
and given the player character thirty instances of it, and had defined a
GiveTopic like so for the priest:

::: code
     + GiveTopic @PieceOfSilver
       topicResponse()
       {
          gDobj.moveInto(getActor);
          "The priest takes the piece of silver and nods in acknowledgement. ";
       }
    ; 
     
:::

This could lead to an interchange like this:

::: cmdline
    >give thirty pieces of silver to priest
    The priest takes the piece of silver and nods in acknowledgement.
    The priest takes the piece of silver and nods in acknowledgement.
    The priest takes the piece of silver and nods in acknowledgement.
    The priest takes the piece of silver and nods in acknowledgement.
    The priest takes the piece of silver and nods in acknowledgement.
    The priest takes the piece of silver and nods in acknowledgement.
    The priest takes the piece of silver and nods in acknowledgement.
    The priest takes the piece of silver and nods in acknowledgement.
    The priest takes the piece of silver and nods in acknowledgement.
    The priest takes the piece of silver and nods in acknowledgement.
    The priest takes the piece of silver and nods in acknowledgement.
    The priest takes the piece of silver and nods in acknowledgement.
    The priest takes the piece of silver and nods in acknowledgement.
    The priest takes the piece of silver and nods in acknowledgement.
    The priest takes the piece of silver and nods in acknowledgement.
    The priest takes the piece of silver and nods in acknowledgement.
    The priest takes the piece of silver and nods in acknowledgement.
    The priest takes the piece of silver and nods in acknowledgement.
    The priest takes the piece of silver and nods in acknowledgement.
    The priest takes the piece of silver and nods in acknowledgement.
    The priest takes the piece of silver and nods in acknowledgement.
    The priest takes the piece of silver and nods in acknowledgement.
    The priest takes the piece of silver and nods in acknowledgement.
    The priest takes the piece of silver and nods in acknowledgement.
    The priest takes the piece of silver and nods in acknowledgement.
    The priest takes the piece of silver and nods in acknowledgement.
    The priest takes the piece of silver and nods in acknowledgement.
    The priest takes the piece of silver and nods in acknowledgement.
    The priest takes the piece of silver and nods in acknowledgement.
    The priest takes the piece of silver and nods in acknowledgement.
:::

[]{#summaryreport}

In this case it would be *much* better if we could get:

::: cmdline
    >give thirty pieces of silver to priest
    The priest takes thirty pieces of silver and nods in acknowledgement.
:::

We can do this by making use of the current action\'s **summaryReport**
property in our definition of the GiveTopic. Instead of directly
outputting some text, we set the current action\'s
[summaryReport]{.code} property to a single-quoted string to be used to
generate a summary report at the action\'s report stage, like this:

::: code
     + GiveTopic @PieceOfSilver
       topicResponse()
       {
          gDobj.moveInto(getActor);
          gAction.summaryReport = 'The priest takes {1} and nods in acknowledgement. ';
       }
    ; 
     
:::

Once the GIVE command has been executed on all thirty pieces of silver,
this report will be displayed with [{1}]{.code} replaced by a list of
the objects just affected, which will automatically list all identical
objects together into \'thirty pieces of silver\'. It works like this:
when it comes to the report stage, we have:

::: code
            report()
            {
                if(gAction.summaryReport != nil)
                    dmsg(gAction.summaryReport, gActionListStr); 
            }
:::

Since summaryReport is now non-nil this becomes in effect:

::: code
        dmsg(The priest takes {1} and nods in acknowledgement. ', gActionListStr);
     
:::

The macro [gActionListStr]{.code} expands to a list of the objects just
acted on (\'thirty pieces of silver\') and is inserted into the report
text in place of [{1}]{.code}.

[]{#sumprop}

This is certainly an improvement, but we may need a little more. In
particular the priest may react differently according to how many pieces
of silver he\'s been given. If he\'s expecting thirty, he won\'t be
content with twenty-nine. We can therefore make use of the
**summaryProp** property of the current action to define a method on the
priest that should be executed just after the display of our summary
report. We\'d typically do it like this:

::: code
     + GiveTopic @PieceOfSilver
       topicResponse()
       {
          gDobj.moveInto(getActor);
          gAction.summaryReport = 'The priest takes {1} and nods in acknowledgement. ';
          gAction.summaryProp = &silverCount;
       }
    ; 
     
:::

We\'d then need to define a suitable [silverCount()]{.code} method on
the priest, taking advantage of the fact that
[gAction.reportList]{.code} will contain a list of the objects that have
just been reported on:

::: code
     priest: Actor 'priest; tall thin ascetic; man; him'
        "He's a tall, thin ascetic-looking man. "
        
        silverPieces = 0
        
        silverCount()
        {
           local count = gAction.reportList.countWhich({x:
             x.ofKind(PieceOfSilver)});
             
           silverPieces += count;
           
           if(silverPieces >= 30)
             "The priest nods in satisfaction. <q>That will do,</q> he says.
             <q>Very well, I shall carry out my part of the bargain.</q> <.reveal priest-satisfied>. ";
           else
             "<q>We agreed thirty pieces of silver,</q> the priest insists. <q>So far you have only
              given me <<spellNumber(silverPieces)>>.</q> ";
        }
    ;
     
:::

This technique can be used with GiveTopics, ShowTopics or
GiveShowTopics, but it does come with a limitation: the system can only
deal with one summaryReport and one summaryProp on any given turn, so,
for example, you *mustn\'t* do this if there\'s any possibility that the
player character could hand over a mix of gold and silver coins on any
one turn:

::: code
     + GiveTopic @GoldCoin
       topicResponse()
       {
          gDobj.moveInto(getActor);
          gAction.summaryReport = 'You give the priest {1}. ';
          gAction.summaryProp = &goldCount
       }
    ; 

     + GiveTopic @SilverCoin
       topicResponse()
       {
          gDobj.moveInto(getActor);
          gAction.summaryReport = 'You hand over {1} to the priest. ';
          gAction.summaryProp = &silverCount
       }
    ;
     
:::

Since if you do do something like this the value of
[summaryReport]{.code} and [summaryProp]{.code} will be that set by the
last GiveTopic to be triggered, which may not give you the result you
want if the player types GIVE PRIEST THREE SILVER COINS AND FIVE GOLD
COINS. Instead you need to combine both sets of coins into a single set
of properties to ensure a predictable outcome:

::: code
     + GiveTopic [GoldCoin, SilverCoin]
       topicResponse()
       {
          gDobj.moveInto(getActor);
          gAction.summaryReport = 'You give the priest {1}. ';
          gAction.summaryProp = &coinCount
       }
    ; 
     
:::

This will work fine provided you define your coinCount() method to check
[gAction.reportList]{.code} for both gold and silver coins and react
accordingly.

One final point: it\'s possible that the player could include some
extraneous items in a give command, such as GIVE TEN COLD COINS AND OLD
TWIG TO PRIEST. This shouldn\'t present too much of a problem provided
your code can handle the extraneous old twig gracefully. This may be as
simple as defining a suitable DefaultGiveShowTopic that names the item
that triggers it:

::: code
     + DefaultGiveShowTopic 
       "The priest has no interest in {the dobj}. "
    ; 
     
:::
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Actors](actor.htm){.nav} \>
ActorTopicEntry\
[[*Prev:* Basic Ask/Tell](asktell.htm){.nav}     [*Next:* Suggesting
Conversational Topics](suggest.htm){.nav}     ]{.navnp}
:::
