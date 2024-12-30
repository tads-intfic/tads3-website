::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Actors](actor.htm){.nav} \>
Player Character and NPC Knowledge\
[[*Prev:* Hello and Goodbye](hello.htm){.nav}     [*Next:* Giving Orders
to NPCs](orders.htm){.nav}     ]{.navnp}
:::

::: main
# Player Character and NPC Knowledge

One type of condition that clearly effects what conversation topics
should be available at any point in time is what the player character,
and possibly the NPC s/he\'s conversing with, knows at that point in
time. For example the player character can\'t ask Bob about the dark
tower until the player character knows such a thing exists (even if the
player knows it because s/he\'s played the game before). In this section
we look at how to keep track of what the player character and other
characters know, and how to use that information to affect what
conversation topics are available at any point in time.

[](model)

## The Knowledge Model

The adv3lite knowledge model starts from the premise that the player
character knows of the existence of an object either if s/he has seen
it, or if we declare it to be **familiar**. The [familiar]{.code}
property is a way of telling the game that the player character knows
about (i.e. knows of the existence of) an object even is s/he hasn\'t
seen it (or hasn\'t seen it yet). This allows the player to ask or tell
other characters about this object.

The library attempts to keep track of what the player character has seen
by setting the **seen** property of objects to true once the player
character has seen them. In some cases, however, a game author may have
to do this manually, for example when moving an object into view using
[moveInto()]{.code}. For reasons that will become more apparent below,
rather than setting the value of the seen property manually, it\'s often
best not to do so directly (which a statement like [codebook.seen =
true]{.code}) but either by calling the **setSeen()** method on the
object that has just come into view (e.g. [codebook.setSeen()]{.code})
or calling [setHasSeen(obj)]{.code} on the player character (e.g.
[gPlayerChar.setHasSeen(codebook)]{.code}). The second method can be
abbreviated by using the **gSetSeen()** macro; writing
[gSetSeen(codebook)]{.code} is exactly equivalent to writing
[gPlayerChar.setHasSeen(codebook)]{.code}. To test whether the player
character has seen something we can use the **hasSeen()** method, e.g.
[gPlayerChar.hasSeen(codebook)]{.code} will be true if the player
character has seen the codebook.

In the case of Things (or Topics) the player character learns about
other than by actually seeing them, we use the **familiar** property. If
the player character learns of the existence of a codebook that s/he is
yet to find, we can set [codebook.familiar]{.code} to true to indicate
that the player character now knows of the codebook\'s existence (and so
can refer to it in conversation). Again it\'s often best to do this
using either **setKnown()**, e.g. [codeBook.setKnown()]{.code} or
**setKnowsAbout()**, e.g. gPlayerChar.setKnowsAbout(codebook) which can
be abbreviated to [gSetKnown(codebook)]{.code} using the **gSetKnown()**
macro. Each of these methos will set [codeBook.familiar]{.code} to true.

Remember, the player character knows about the codebook either if s/he
has seen it ([codebook.seen]{.code} is true) or if s/he has learned
about its existence in some other way ([codebook.familiar]{.code} is
true). To test whether the player character knows about the codebook we
use the **knowsAbout()** method, e.g. gPlayerChar.knowsAbout(codebook)
or the known property, e.g. [codebook.known]{.code} (which simply
returns the value of [gPlayerChar.knowsAbout(codebook)]{.code}).

At first sight, this may all seem unnecessarily complex; why not just
set and test the values of [seen]{.code} and [known]{.code} directly,
and why do we need another property called [familiar]{.code}? To answer
the second question first we need to distinguish [familiar]{.code}
(known about but not necessarily seen) from [known]{.code} (either
[seen]{.code} or [familiar]{.code}). Since [obj.known]{.code} is true
either if [obj.seen]{.code} is true or [obj.familiar]{.code} is true, we
need three property names to keep track of the epistemological model.

In games where we\'re only interested in what the player character has
seen and knows about, it would be perfectly okay to set and test the
values of [seen]{.code} and [familiar]{.code} directly. The complication
comes in either when we have more than one player character (because the
player character changes during the course of play) or because we want
to keep separate track of what non-player characters have seen and/or
know about. By themselves the [seen]{.code} and [familiar]{.code}
properties of objects don\'t tell us who has seen them or is familiar
with them. So if we\'re interested in tracking the knowledge of more
than one actor in the game we have to do a bit more work.

To this end we can use the **seenProp** and **knownProp** properties.
These are defined on the actor concerned, and should contained property
pointers defining which properties of Thing (and Topic) to use to keep
track of what this particular actor has seen and is familiar with. By
default [seenProp]{.code} is just [&seen]{.code} for every actor, and
[knownProp]{.code} is [&familiar]{.code} for every actor, meaning that
calling setHasSeen(obj) on *any* actor will set [obj.seen]{.code} to
true, and calling [knowsAbout(obj) ]{.code}on any actor will set
[obj.familiar]{.code} to true. If, however, we wanted to keep separate
track of Bob\'s knowledge we could define new [bobSeen]{.code} and
[bobFamiliar]{.code} properties on Thing (and a new [bobFamiliar]{.code}
property on Topic), and then set [bob.seenProp]{.code} to
[&bobSeen]{.code} and [bob.knownProp]{.code} to [&bobFamiliar]{.code},
like this:

::: code
    modify Thing
        bobSeen = nil
        bobFamiliar = nil
    ;

    modify Topic
       bobFamiliar = true // We tend to assume that most topics start out familiar, but we don't have to. 
    ; 

    bob: Actor 'Bob; squat little;fellow man; him'
       "He's a squat little fellow. "
       seenProp = &bobSeen
       knownProp = &bobFamiliar
    ;
     
:::

With these definitions in place, [bob.setHasSeen(obj]{.code}) will set
[obj.bobSeen]{.code} to true, and [bob.setKnowsAbout(obj)]{.code} will
set [obj.bobFamiliar]{.code} to true. Likewise,
[bob.hasSeen(obj)]{.code} will return the value of [obj.bobSeen]{.code},
and [bob.knowsAbout(obj)]{.code} will return the value of [(obj.bobSeen
\|\| obj.bobFamiliar)]{.code}. Note, however, that doing all this does
*not* cause the library to keep automatic track of what Bob has seen; it
is still up to the game code to call [bob.setHasSeen(whatever)]{.code}
as and when appropriate.

If you are certain that your game will *never* need to keep track of
what anyone other than its player character has seen and knows about
(and your game will only ever have one player character), then it is
safe to set the [familiar]{.code} and [seen]{.code} properties of Things
and to query the [known]{.code} and [seen]{.code} properties of Things
directly. Otherwise its better to use [setSeen()]{.code} and the rest
from the start to avoid hard-to-find bugs later.

[]{#existence}

## Knowledge of Existence in Conversation

We have already seen that the library keeps basic track of the player
character\'s knowledge of the existence of [things](thing.htm) and
[topics](topic.htm). As stated aboved, we can test whether the player
character knows of the existence of some object *obj* by testing the
value of [gPlayerChar.knowsAbout(obj)]{.code} or, equivalently,
[obj.known]{.code}. If obj is a Thing this will be true either if the
player character has seen obj or if the **familiar** property of obj
(i.e. obj.familiar) is true. Since Topics can\'t be seen they\'re simply
known if they\'re familiar. We can make an object become familiar to the
player character during the course of play by calling
**gSetKnown(obj)**. Equivalently, if something becomes known to the
player character during the course of conversation, we can use the
**\<.known obj\>** tag to do the same thing.

The important thing to bear in mind is that the matchObj property of a
TopicEntry won\'t be matched by a conversational command if the object
in question isn\'t known to the player character. Thus, without our
having to do anything else about it, the player character can\'t ask
about the dark tower, for example, until s/he knows of the dark tower\'s
existence. That means we can safely define ActorTopicEntries like this:

::: code
    + AskTellTopic @tTown
       "<q>This seems a nice town,</q> you remark cheerily.\b
        <q>Yes it is -- provided you don't go anywhere the dark
        tower,</q> he agrees cautiously. <.known darkTower> "
    ;

    + AskTopic @darkTower
      "<q>What can you tell me about the dark tower?</q> you ask.\b
      Bob rolls his eyes and looks away for a moment. <q>You don't want
      to know,</q> he mutters. <q>You really don't.</q> "
    ;
:::

Here, the second TopicEntry can\'t be reached until the player character
knows about (i.e. knows of the existence of) the dark tower. This might
be because the player character has already encountered the tower in his
travels, or because he\'s read about it somewhere, or because some other
NPC has mentioned it to him, but if the player character hasn\'t heard
about the dark tower before the start of his conversation with Bob, he
won\'t be able to trigger the second response until Bob has mentioned
the dark tower in the first.

\
[]{#facts}

## Knowledge of Facts

The player character\'s knowledge or ignorance of the existence of
various things and topics may not, however, be sufficient to model all
the epistemic conditions that determine what topics the player character
can talk about. For example, in addition to learning of the dark
tower\'s existence, the player character may come to learn when it was
built, or that it\'s believed to be haunted by the ghost of a pirate, or
that people are said to have mysteriously disappeared there. To
represent such facts (or putative facts) we can use short string tags,
such as \'when-tower-built\' or \'tower-haunted\' or
\'tower-disapperances\'. For reasons that will shortly become apparent,
we should regard such tags as inhabiting a global namespace (in other
words, we should always use the same knowledge tag with the same meaning
throughout our game).

When a piece of information becomes known to the player character, we
can note the fact by using a **\<.reveal\>** tag; e.g. \<.reveal
when-tower-built\> or \<.reveal tower-haunted\> or \<.reveal
tower-disappearances\> (we can also do the same thing using the
**gReveal(tag)** macro, e.g. gReveal(\'when-tower-built\')). To test
whether some item of knowledge has been revealed to the player character
we can use the **gRevealed(tag)** macro, e.g.
gRevealed(\'tower-haunted\'). So, for example, we might go on to define:

::: code
    + AskTellTopic +110 @darkTower
       "<q>I've heard it said that the dark tower is haunted,</q> you remark.
        <q>Do you believe that?</q>\b
        Bob gives a little shudder. <q>I don't <i>believe</i> that tower is
        haunted,</q> he tells you, <q>I <i>know</i> it is!</q> "
        
        isActive = gRevealed('tower-haunted')
    ;
:::

Note that we\'ve given this AskTellTopic a matchScore of 110 (10 higher
than the default) so that if the player character has heard about the
rumours of haunting he asks this more specific question about the tower
in place of the more general one above.

Some game authors may wish to use this mechanism for other purposes
outside strictly conversational contexts as a convenient method to set
and unset flags. For this purpose the library defines an
**\<.unreveal\>** tag, which undoes the effect of \<.reveal\> and a
**gUnreveal(*key*)** macro which undoes the effect of gReveal(*key*)
\[Strictly speaking, [\<.unreveal *key*\>]{.code} does not undo all the
effects of [ \<.reveal key\>]{.code}, it simply removes *key* from, the
LookUpTable of stored keys; it doesn\'t undo the updating of the
informed status of *key* on every NPC in earshot, since it is unclear
that this is what should happen; game code can override
[Actor.setUnrevealed(tag)]{.code} if it wants to handle things
differently\].

At this point we might also note that gReveal(), gUnreveal and
gRevealed() are defined in the core library, so you can use them even if
the actor.t module isn\'t present (e.g. for use with the hints system),
whereas the \<.reveal\> tag, in common with all such converational tags,
only works if actor.t is included in the build.

[]{#informed}

In the adv3Lite library \<.reveal\> tags should be regarded as a
mechanism for keeping track of what has been revealed to the player
character. To keep track of what the player character has told one or
more NPCs we use **\<.inform\>** tags (note, the adv3 library does not
make this distinction, but it seemed a useful distinction to introduce
into adv3Lite), e.g., \<.inform tower-haunted\>. We can test whether an
NPC has been informed about a particular subject by calling the
**informedAbout(key)** method on the actor, or using the
**gInformed(key)** macro on a TopicEntry, ActorState or AgendaItem
belonging to the actor. For example, if at some later point in the game
the player character were to discuss his experiences in Bob\'s town with
a friend, he might want to inform her about the haunting:

::: code
    + TellTopic @darkTower
      "<q>You know, the folks in Doomsville even think their local tower is
       haunted,</q> you remark. <.inform tower-haunted>\b
       Mavis shakes her head tut-tutting away to herself. <q>There's no
       end to superstition and folly,</q> she remarks. <q>Mind you, I heard
       a similar story about Spookhampton.</q> <.reveal spookhampton-haunted> "
       
      isActive = gRevealed('tower-haunted') && !gInformed('tower-haunted')
    ;
:::

Note how we use the gInformed() macro in the isActive property so that
the player character won\'t tell Mavis the same piece of information
twice (we might also use it elsewhere). Note how we also use the
gRevealed() macro to ensure that the player character can\'t tell Mavis
about the haunting until he knows about it himself. Finally, note that
we use the \<.reveal spookhampton-haunted\> tag to note that the player
character has just learned another snippet of information about alleged
hauntings.

There\'s one further feature of the \<.reveal\> and \<.inform\> tags to
bear in mind. The adv3Lite library assumes that if other actors are in
earshot when a conversation is going on between the player character and
an NPC, the other actors will be listening in on the conversation and
hence will learn any piece of information that\'s imparted with a
\<.reveal\> or \<.inform\> tag. This in fact extends to the NPC the
player character is conversing with as well (though not to the player
character, whose knowledge is accessed entirely though what\'s been
revealed). So, for example, if Sally were listening in on the player
character\'s conversation with Bob, then a \<.reveal tower-haunted\> or
a \<.inform tower-haunted\> tag output in the course of that
conversation would add the \'tower-haunted\' key to both Bob\'s and
Sally\'s table of inform keys, so that thereafter both
bob.informedAbout(\'tower-haunted\') and
sally.informedAbout(\'tower-haunted\') would return true. This seems
more realistic than supposing that Sally would remain ignorant of the
tower haunting rumours when Bob was discussing them with the player
character right in front of her. It also ensures that Bob is reckoned as
being informed about anything he has revealed to the player character,
which is again surely more realistic than the opposite assumption. Note,
however, that the \<.reveal\> tag only causes other actors to be
notified of what\'s just been revealed if it\'s used during the course
of conversation; if it\'s used for some other purpose (e.g. to set a
flag when an object is examined), the notifications won\'t take place
(unless a conversation happens to be taking place at the same time). If
you want to ensure that no notifications take place, use gReveal(tag)
instead.

If you don\'t want this \'overhearing\' behaviour, you can also control
it through use of the **informOverheard** and **actorInformOverheard**
properties. The imparting of information to other actors in earshot can
be prevented by setting [informOverheard = nil]{.code} on the current
interlocutor\'s current ActorState, or [actorInformOverheard =
nil]{.code} on the Actor (when the current ActorState is nil). To
prevent the overhearing behaviour globally, set [informOverheard =
nil]{.code} on the actor or on the whole Actor class.

The fact that an information-key revealed to the player character is
always the same information-key that informs one or more NPCs explains
why such keys must be regarded as occupying a global namespace within
any given game (even if that weren\'t a good idea in any case to avoid
confusion).
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Actors](actor.htm){.nav} \>
Player Character and NPC Knowledge\
[[*Prev:* Hello and Goodbye](hello.htm){.nav}     [*Next:* Giving Orders
to NPCs](orders.htm){.nav}     ]{.navnp}
:::
