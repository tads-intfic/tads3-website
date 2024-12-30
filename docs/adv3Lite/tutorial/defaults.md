::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [The Art of
Conversation](conversation.htm){.nav} \> Diverse Defaults\
[[*Prev:* Angela Wants Answers](convnode.htm){.nav}     [*Next:*
Summary](convsumm.htm){.nav}     ]{.navnp}
:::

::: main
# Diverse Defaults

The one obvious thing that\'s missing from Angela\'s conversational
repertoire is a stock of default responses to conversational commands we
haven\'t otherwise catered for. Since she\'s a rather more elaborate NPC
than either Cortez or the security guard, she probably deserves a rather
more elaborate set of default responses, and even, perhaps, responses
that vary according to circumstances, as well as responses that at least
vary a little according to the command used.

## Some Standard Cases

We\'ll start with a couple of straightforward ones. In this game Angela
won\'t respond usefully to requests of the form ASK ANGELA FOR X or to
orders of the form ANGELA, DO X, so we\'ll rule both these out with
straightforward refusals implemented as DefaultTopics directly located
in Angela. First the **DefaultAskForTopic** to field, ASK ANGELA FOR
SUCH-AND-SUCH:

::: code
    + DefaultAskForTopic
        "{The subj angela} listens to your request and shakes her head. <q>Sorry, I
        can't help you with that,</q> she says. "
    ;
:::

Commands issued to an NPC can be handled by CommandTopics (for details,
see the section on [Giving Orders to NPCs](../manual/orders.htm) in the
*adv3Lite Library Manual*). For our purposes, though, we only need a
single **DefaultCommandTopic** to handle all attempts by the player to
give orders to Angela. Within a CommandTopic or DefaultCommandTopic we
can use the method [actionPhrase()]{.code} to give at least a reasonable
approximation to the actual words that might be spoken to give the
command. Our DefaultCommandTopic might therefore look like this:

::: code
    + DefaultCommandTopic
        "<q><<if angela.proper>>Angela<<else>>Miss<<end>>, would you
        <<actionPhrase>>, please?</q> you request.\b
        In reply she merely cocks an eyebrow at you and looks at you as if to say,
        <q>Who do you think you're talking to?</q> "
    ;
:::

Note that we also make use of an embedded [\<\<if\>\>]{.code} expression
so that the player character addresses Angela as either \"Angela\" or
\"Miss\" depending on whether or not he\'s learned her name.

It\'s probably also no bad idea to have a **DefaultAnyTopic** to catch
anything that slips through all the other DefaultTopics we\'re about to
go on and define:

::: code
    + DefaultAnyTopic
        "{The subj angela} smiles and shrugs. "  
    ;
:::

We can also write a general-purpose **DefaultGiveShowTopic** to field
attempts to GIVE or SHOW something to Angela:

::: code
    + DefaultGiveShowTopic
        "You offer {the angela} {the dobj}, but she shakes her head and pushes {him
        dobj} away, saying, <q>I'm afraid I can't accept {that dobj} from you,
        sir.</q> "
    ;
:::

Here we take advantage of the fact that the object the player character
is attempting to give or show will always be the direct object of the
command. That means we can use [dobj]{.code} in message parameter
substitutions to get at the name and the correct pronoun for whatever
the player character tried to give. There is one little problem with our
DefaultGiveShowTopic the way we\'ve defined it, however: the response it
gives when the player character tries to show Angela something that\'s
fixed in place, such as the cockpit door, is liable to look more than a
little odd. One solution is to define a **DefaultShowTopic** that\'s
active when what\'s being shown is fixed in place:

::: code
    + DefaultShowTopic
        "You point towards {the dobj}.\b
        <q>Very interesting, I'm sure, sir,</q> {the subj angela} remarks without
        much enthusiasm. "
        
        isActive = gDobj.isFixed
    ;
:::

This works because being slightly more specific than a
DefaultGiveShowTopic, a DefaultShowTopic has a higher matchScore, and so
will be chosen in preference to the DefaultGiveShowTopic when the direct
object of the command is fixed. We don\'t have to worry about an attempt
to GIVE Angela something that\'s fixed in place since the library will
rule that out in any case (something has to be carried to be given, and
you can\'t carry something that\'s fixed).

\

## Ringing the Changes

We\'ve now dealt with several of the common kinds of DefaultTopic, but
there are many others. For a complete list see the section on
[ActorTopicEntry](../manual/actortopicentry.htm#default) in the
*adv3Lite Library Manual*. Fortunately for our purposes (and probably
for those of many other games) we don\'t need to worry about all of
these types, many of which overlap with one another in any case. For our
purposes it should suffice to define (in addition to what we already
have) a **DefaultAskQueryTopic** to field questions, and a
**DefaultSayTellTalkTopic** to field statements. The former will deal
with any command that begins with ASK or with any of the query words
such as WHO, WHAT, WHY, WHEN or HOW while the latter will deal with TELL
ANGELA ABOUT X or TALK ABOUT X or SAY X, i.e. with any attempt to impart
information. For most purposes having a DefaultTopic to field questions
and another to field statements should suffice, without our needing to
worry about sub-types of each.

But is one of each enough? It might give Angela a bit more
characterization if the way she responds to questions and statements
varies according to the state she\'s in. We might be tempted, then, to
put her DefaultAskQueryTopics and her DefaultSayTellTalkTopics in her
various ActorStates; but this could be a mistake. The potential problem
is this: if we place a DefaultTopic in an ActorState it will mask any
TopicEntries of the same kind directly in the Actor (for example, a
[DefaultAskQueryTopic]{.code} in the current ActorState will be used in
preference to any AskTopics or TellTopics in the current Actor, except
when some convKeys are active). Sometimes this may be what we want, for
example, if an NPC becomes so preoccupied that he or she ceases to be
responsive. In other cases it may not be at all what we want, since we
want any more specific TopicEntries defined directly on the Actor to
still be available. With Angela, we have the second kind of situation,
since we probably want the TopicEntries located directly in the angela
actor object to be available all the time.

The way to handle this is to define our state-dependent DefaultTopics
not on the ActorState (as might seem most natural) but located directly
within the Actor, and then to use their isActive property to make them
active only when the actor is in a particular state. If we want to
define more than one DefaultTopic associated with a particular
ActorState, it may be convenient to use a TopicGroup for the purpose so
we only need to define the isActive property once. While we\'re at it,
it would also be a good idea to define a modest scoreBoost on the
TopicGroup to ensure that the DefaultTopics defined under it are used in
preference to any other when it is active; a scoreBoost of 5 should
suffice. This scheme also allows for considerable flexibility; for
example we could define DefaultTopics that are shared by two or more
ActorStates, or which only come into play when other conditions are
satisfied.

Consider the case when Angela is first greeting passengers boarding the
plane. Before the player character shows her his ticket, her most likely
default response will be to ask to see it; once she\'s seen the ticket,
she\'ll be more anxious to get the player character to take a seat so
she can deal with the next passenger or so that the plane can be readied
for takeoff. Thus, when Angela is in angelaGreetingState we actually
want two groups of conversational DefaultTopics, which we could define
like so:

::: code
    + TopicGroup +5
        isActive = angela.curState == angelaGreetingState &&
        !angelaGreetingState.ticketSeen
    ;

    ++ DefaultAskQueryTopic
        "<q>I really need to see your ticket, sir,</q> she insists <<one
          of>>politely<<or>>once more<<stopping>>. "
    ;

    ++ DefaultSayTellTalkTopic
        "{The subj angela} listens <<one of>>politely<<or>>a little impatiently
        <<stopping>> to what you have to say, then replies, <q>May I see your
        ticket, sir?</q> "
    ;

    + TopicGroup +5
        isActive = angela.curState == angelaGreetingState &&
        angelaGreetingState.ticketSeen
    ;

    ++ DefaultAskQueryTopic
        "<q>If you have any further questions perhaps you could ask them once we're
        in flight,</q> she <<one of>>suggests<<or>>repeats<<stopping>>. <q><<one
          of>>It would be best if you moved <<or>>Please move<<stopping>> to the
        rear of the plane and <<one of>>took<<or>>take<<stopping>> your seat now,
        sir.</q> "
    ;

    ++ DefaultSayTellTalkTopic
        "{The subj angela} holds up her hand to stop you in mid-flow. <q>Can I ask
        you to move to the rear of your plane and take your seat now, sir?</q> she
        <<one of>>requests<<or>>repeats<<or>>insists<<stopping>>. "
    ;
:::

Since at this stage the flight attendant is focused almost entirely on
seeing passengers\' tickets and getting them seated, there\'s not much
need to vary her default responses here; we simply use the [\<\<one
of\>\> \... \<\<stopping\>\>]{.code} embedded expression to supply some
minimal variation to avoid Angela appearing totally robotic. Note the
subtle difference between the isActive properties of the two
TopicGroups: the first has a **!** (negation symbol) at the start of the
second line, whereas the second does not.

We can do something similar for the angelaTalkingState, but here we only
need one group of DefaultTopics. At this point Angela is surrounded by
the passengers who have just been thrown off the plane, so she\'ll be a
bit preoccupied with attending to them, and her default responses can
reflect that. Since players tend to ASK more than they TELL, we can
probably get away with one default response for say/tell/talk, but we
should provide some variety of responses to asking unimplemented
questions:

::: code
    + TopicGroup +5
        isActive = angela.curState == angelaTalkingState
    ;

    ++  DefaultAskQueryTopic, ShuffledEventList
        [
            '{The subj angela} mutters something inaudible and looks round, as if
            dropping a heavy hint that she has other people besides you to attend
            to. ',
            
            '<q>Maybe we can discuss that some other time,</q> she suggests, with
            a significant glance at the other passengers anxious to attract her
            attention. ',
            
            '<q>Hm, well,</q> she says, in a tone of voice that rather suggests
            she has more urgent things on her mind. ',
            
            '<q>I think perhaps...</q> she begins, and then trails off as one of the
            other passengers taps her on the arm in an attempt to grab her
            attention. '
        ]
    ;

    ++ DefaultSayTellTalkTopic
        "{The subj angela} listens to what you have to say without comment, but with
        the air of one who has other things on her mind. "
    ;
:::

The DefaultTopics for angelaSeatedState, when Angela and the player
character are both back aboard the plane, with the likes of Pablo Cortez
occupying the passenger seats, can follow much the same pattern, except
that here Angela\'s main concern will be with the type of people who may
overhear the conversation:

::: code
    + TopicGroup +5
        isActive = angela.curState == angelaSeatedState
    ;

    ++ DefaultAskQueryTopic, ShuffledEventList
        [
            '{The subj angela} lowers her voice and swivels her eyes just enough to
            remind you of the other people in earshot. <q>Perhaps we should discuss
            that some other time,</q> she suggests. ',
            
            '<q>I don\'t think I care to answer that right now,</q> she replies,
            with just enough movement of the head to indicate how easily you might
            be overheard by the hoodlums in the other passenger seats. ',
            
            '<q>I think...</q> she begins, and then breaks off. <q>I think this may
            not be the best time to talk about that,</q> she concludes. ',
            
            '<q>Hm,</q> she says, <q>right.</q> It\'s obviously intended as a
            non-answer, perhaps because she\'s worried about who else might hear
            what she says. '       
        ]
    ;

    ++ DefaultSayTellTalkTopic
        "{The subj angela} merely listens, looking faintly disapproving at your
        garrulousness. "
    ;
:::
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [The Art of
Conversation](conversation.htm){.nav} \> Diverse Defaults\
[[*Prev:* Angela Wants Answers](convnode.htm){.nav}     [*Next:*
Summary](convsumm.htm){.nav}     ]{.navnp}
:::
