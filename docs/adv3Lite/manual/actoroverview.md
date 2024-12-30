::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Actors](actor.htm){.nav} \>
Overview\
[[*Prev:* Actors](actor.htm){.nav}     [*Next:* The Actor
Object](actorobj.htm){.nav}     ]{.navnp}
:::

::: main
# NPC Overview

Many works of Interactive Fiction can get by with the player character
wandering around a deserted landscape (or perhaps confined to a single
room in which s/he\'s the sole occupant). Implementing convincing NPCs
(non-player characters) is difficult, and if you write a game in which
the player character is restricted to interacting only with inanimate
objects you are arguably playing to the strengths of the medium. But
some games are undoubtedly enriched by the presence of NPCs, and it may
be that the ability to implement NPCs is essential to the story you want
your game to tell, or the type of interaction you have in mind. Nothing
can make implementing a life-like and complex NPC straightforward,
simple and easy, it will always be a lot of work, but the adv3Lite
library endeavours to give you the tools to enable you to do the job.

If you haven\'t already read Mike Roberts\'s trio of articles on
\'Creating Dynamic Characters\' in the *TADS 3 Technical Manual*, you
might like to do so now. Although many of the implementation details are
different in the adv3Lite library, some of them are quite similar, and
the underlying principles are very similar indeed, so the \'Creating
Dynamic Characters\' articles might form a useful background to what
follows. In particular, like the adv3 libary, the adv3Lite library tries
to avoid complex programming in creating dynamic characters by allowing
as much as possible of an NPC\'s behaviour to be defined declaratively
on a number of associated objects.

First of all, the [Actor object](actorobj.htm) is used to define the
basic properties of the NPC (name, description and so forth) as well as
its response to most of the non-conversational actions (e.g. FEEL FRED)
and one or two other things that we\'ll come to in due course. One or
more [ActorState](actorstate.htm) objects are then used to define
various forms of state-specific behaviour. For example at one point in
the game Fred might be involved in polishing the silver, at another he
might be lounging in a chair, and at another he might be deep in
conversation with the player character. Each of these states can be
defined on an ActorState object which can alter the way the Actor object
is described and customize certain aspects of the actor\'s behaviour.
(Note: adv3 defines various subclasses of Actor and ActorState; adv3Lite
defines only the Actor and ActorState classes, though you\'re welcome to
define your own subclasses in game code if you need them).

Things that the NPC may wish to do or talk about can be defined in a
number of [AgendaItem](agenda.htm) objects associated with the actor.
These can define things the actor does or says when certain conditions
are met.

A very complex NPC may require very many ActorState, AgendaItem and
TopicEntry objects, in which case the point may come when you want to
split the definition of the NPC over more than one source file. To
facilitate this you can use a [ProxyActor](actorobj.htm#proxy) object to
stand in for the original Actor object in the second and subsequent
source files relating to the same NPC.

[]{#conversational}

Conversational responses are defined using [TopicEntry](topicentry.htm)
objects a bit like the ConsultTopics used on a Consultable. The
TopicEntries used for conversation are a bit more elaborate than this,
however, and descend from a special
[ActorTopicEntry](actortopicentry.htm) class. Most of the TopicEntry
classes available in the adv3 library are available in adv3Lite, along
with a number of additional ones (such as TalkTopic, SayTopic and
QueryTopic) that will be described more fully when we come to them. In
adv3Lite ActorTopicEntries can be located either directly in their
parent Actor object or in the ActorState object to which they relate, or
in a TopicGroup or ConvNode object (which will be explained in due
course). You can test whether an action is conversational via its
**isConversational** property. This might typically be used in a
construct like [if(gAction.isConversational))]{.code} to test whether
the current action (typically the command just entered by the player) is
a conversational one, for example when testing whether to intercept an
action in a beforeAction() method.

If you want to use the adv3Lite library for a [basic
ask/tell](asktell.htm) conversation system you can, but it\'s capable of
quite a bit more. Just as in the adv3 library, so in adv3Lite you can
suggest topics for the player character to talk about, but in adv3Lite
you don\'t need to use one of the SuggestedTopic subclasses to do so;
instead you simply give a TopicEntry a name property and it will be
suggested to the player under that name (the full story is a bit more
complex than that, but once again, we\'ll come to it in due course). You
can also employ various techniques to create threaded conversations,
that is conversations in which there is some connection or flow from one
topic response to the next, instead of the NPC being treated like a kind
of stateless talking reference manual.

To create some kind of a thread to a conversation the adv3Lite library
uses a combination of various conversation tags together with the
convKeys property of the ActorTopicEntry objects. The convKeys property
copntains a string or a list of strings that can be used to refer to the
ActorTopicEntry in various conversation tags. Since any given
ActorTopicEntry can have any number of keys defined on its convKeys
property and the same key can be defined on any number of
ActorTopicEntries, this mechanism can be used to group ActorTopicEntries
in any way desired (and subsequently act on those groups via various
conversation tags).

[]{#convtags}

Conversation tags are special items like \'\<.reveal foo\>\' that can be
placed in a string (usually one used to output the actor\'s response to
some conversation command), and that instead of displaying anything
carry out some kind of special action. The tags defined in the adv3Lite
library are:

-   **\<.reveal *tag*\>** note that the information referred to by *tag*
    has been revealed to the player character.
-   **\<.inform *tag*\>** note that the information referred to by *tag*
    has been imparted to the non-player character.
-   **\<.topics\>** schedule a list of suggested conversation topics to
    display just before the next command prompt.
-   **\<.convnode *key*\>** set up a Conversation Node based on
    TopicEntries whose convKeys property matches *key*.
-   **\<.convnodet *key*\>** set up a Conversation Node based on
    TopicEntries whose convKeys property matches *key*, and then display
    a suggested list of topics.
-   **\<.convstay\>** remain in the current Conversation Node for the
    next turn.
-   **\<.convstayt\>** remain in the current Conversation Node for the
    next turn and display a suggested list of topics.
-   **\<.activate *key*\>** set the activated property to true on all
    TopicEntries whose convKeys property matches *key*.
-   **\<.deactivate *key*\>** set the activated property to nil on all
    TopicEntries whose convKeys property matches *key*.
-   **\<.arouse *key*\>** set the curiosityAroused property to true on
    all TopicEntries whose convKeys property matches *key*.
-   **\<.suggest *key*\>** schedule a list of suggested conversation
    topics for TopicEntries whose convKeys property matches *key*.
-   **\<.sugkey *key*\>** set the suggestionKey property of the actor to
    *key*.
-   **\<.agenda *item*\>** add the AgendaItem *item* to the actor\'s
    agenda lists.
-   **\<.remove *item*\>** remove the AgendaItem *item* from the
    actor\'s agenda lists.
-   **\<.state *actorstate*\>** change the actor\'s current ActorState
    to *actorstate*.
-   **\<.known *obj*\>** mark *obj* as being known to the player
    character (equivalent to gSetKnown(obj)).

These will all be discussed in more detail in due course, so don\'t
worry at this stage if you\'re not sure what all these tags actually do
or how they\'re intended to be used. In the meantime it may be helpful
to know that in the above list *tag* is an arbitrary single-quoted
string used to denote a piece of information (e.g. \'brian-robbed\'),
*key* is a single-quoted string defined on the convKeys property of an
[ActorTopicEntry](actortopicentry.htm), *item* is the programmatic name
of an AgendaItem and *actorstate* the programmatic name of an ActorState
(where the \'programmatic name\' means the name you give the object in
your source code). When defining conversation tags that make use of
single-string properties like *tag* and *key* you do not include the
quotation-marks in the conversation tag (e.g. you would write [\<.reveal
brian-robbed\>]{.code} not [\<.reveal \'brian robbed\'\>]{.code}). *Note
that there are necessary restrictions on where most of these tags can be
safely used*; these will be explained in the section on [actor-specific
tags](tags.htm) below.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Actors](actor.htm){.nav} \>
Overview\
[[*Prev:* Actors](actor.htm){.nav}     [*Next:* The Actor
Object](actorobj.htm){.nav}     ]{.navnp}
:::
