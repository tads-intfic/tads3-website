::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [The Art of
Conversation](conversation.htm){.nav} \> Angela Wants Answers\
[[*Prev:* Hello and Goodbye](hello.htm){.nav}     [*Next:* Diverse
Defaults](defaults.htm){.nav}     ]{.navnp}
:::

::: main
# Angela Wants Answers

## A Simple Conversation Node

You may recall that one of the exchanges we\'ve defined for when the
player character asks Angela what she\'s doing tonight is:

::: code
           '<q>What <i>are</i> you doing tonight?</q> you insist.\b
            <q>I don\'t think that\'s any of your business,</q> she replies, with
            rather a bleak smile. <q>Do you?</q> '
:::

Many, if not most players will probably treat the \"Do you?\" at the end
of Angela\'s reply as a purely rhetorical question, but a few may try
responding YES or NO. Such a response would be appropriate only just at
that point in the conversation (there may be other points at which the
player could respond YES or NO, but it wouldn\'t mean the same thing,
since it would constitute an answer to a different question). With
Angela\'s (possibly rhetorical) question \"Do you?\" the conversation
enters a special state, which we might call a *Conversation Node*,
meaning a particular point in the conversation at which particular
responses become potentially appropriate. Once the conversation moves
on, these particular responses (such as a YES or NO in response to
Angela\'s \"Do you?\") cease to be appropriate once more.

We can model such a Conversation Node in adv3Lite by using a
\<.convnode\> tag, of the form [\<.convnode *key*\>]{.code}, where *key*
corresponds to the convKey (or one of the convKeys) of the TopicEntries
we want to be active during that Conversation Node. To ensure that those
TopicEntries are *only* available during that Conversation Node, we also
need to set their [isActive]{.code} property to [nodeActive]{.code}. A
**YesTopic** responds to YES and a **NoTopic** responds to NO, so we
could allow the player to reply YES or NO to Angela\'s possibly
rhetorical question by adding a [\<.convnode\>]{.code} tag to the
question and then the following [YesTopic]{.code} and [NoTopic]{.code}:

::: code
    + QueryTopic, StopEventList 'what' @tDoingTonight
        [
            '<q>What are you doing tonight?</q> you ask.\b
            She cocks one eyebrow at you. <q>I have my plans,</q> she replies
            vaguely. ',
            
            '<q>What <i>are</i> you doing tonight?</q> you insist.\b
            <q>I don\'t think that\'s any of your business,</q> she replies, with
            rather a bleak smile. <q>Do you?</q> <.convnode not-your-business>',
            
            '<q>About tonight...</q> you begin.\b
            She cuts you off by pressing her lips together and raising her eyebrows
            in a mildly disapproving manner, as if to say, <q>That topic is
            closed.</q> '       
        ]
        
        convKeys = 'angela'
    ;

    + YesTopic
        "<q>As a matter of fact I do,</q> you reply boldly.\b
        <q>In that case we shall have to agree to differ,</q> she replies, just a
        little stiffly." 
        
        convKeys = ['not-your-business']
        isActive = nodeActive
    ;

    + NoTopic
        "<q>No, I suppose not,</q> you concede.\b
        <q>No; well, there you are then,</q> she remarks. "
        
        convKeys = ['not-your-business']
        isActive = nodeActive    
    ;
:::

This works, but it may seem a little repetitive to have to repeat the
[convKeys]{.code} and [isActive]{.code} property on each TopicEntry in
the Conversation Node. We have already seen how we can use a
[TopicGroup]{.code} to apply the same [isActive]{.code} and
[convKeys]{.code} conditions to a group of TopicEntries, and we can use
a special kind of TopicGroup, a **ConvNode**, to do that for us here:

::: code
    + ConvNode 'not-your-business';

    ++ YesTopic
        "<q>As a matter of fact I do,</q> you reply boldly.\b
        <q>In that case we shall have to agree to differ,</q> she replies, just a
        little stiffly."     
    ;

    ++ NoTopic
        "<q>No, I suppose not,</q> you concede.\b
        <q>No; well, there you are then,</q> she remarks. "  
    ;
:::

In most cases, this is probably the easier way to do it; it may also
help make it more immediately apparent which TopicEntries relate to a
particular Conversation Node.

## A More Complex Case

A Conversation Node of the kind we\'ve just defined is highly ephemeral.
It lasts only for one conversational turn. If the player chooses to type
YES or NO as the next conversational command following Angela\'s
question, then YesTopic or NoTopic will be triggered, but once the
player types any other conversational command the moment is lost, and
the TopicEntries in the node will no longer be available. In the case
we\'ve just implemented, that\'s just as it should be, since the player
can choose to say YES or NO or else treat the question as rhetorical and
so ignore it altogether, in which case the opportunity for replying YES
or NO is forever lost. But in another case, where Angela has just asked
a question that clearly isn\'t rhetorical, she may wish to insist on an
answer, or at the very least to complain if the player tries to change
the subject.

Suppose, for example, that when the player character is talking to
Angela in the Jetway he\'s given the option of talking to her about
Pablo Cortez, and Angela wants to know why he\'s so interested in the
man. We could start by adding an AskTellTopic under angelaTalkingState
that triggers an appropriate Conversation Node:

::: code
    ++ AskTellTopic, StopEventList @cortez
        [
            '<q>Do you know who that man waving a gun around at the front of the
            plane is?</q> you ask, lowering your voice. <q>It\'s Pablo Cortez, El
            Diablo\'s right-hand man!</q><.inform cortez>\b
            Her smile becomes rather frosty as she replies, <q>What\'s that to
            you?</q> <.convnodet what-to-you>',
            
            '<q>You need to be <i>very</i> careful around Cortez,</q> you warn
            her.\b
            <q>I shall be,</q> she assures you. '
        
        ]
        autoName = true
        convKeys = 'top'
        suggestAs = TellTopic
    ;
:::

There are a few points to note about the way we\'ve defined this
AskTellTopic. First, note that we\'ve given it an autoName of true, so
that it will be suggested as a topic of conversation with the name
\'Pablo Cortez\'. Note too that we needed to add [convKeys =
\'top\']{.code} to make sure that it would be included as a top-level
suggestion in response to a TOPICS command (but we only have to do that
because we defined [suggestionKey = \'top\']{.code} on Angela). Next,
note how we\'ve defined [suggestAs = TellTopic]{.code}. Left to its own
devices the library will suggest an AskTellTopic with \'ask\', i.e.
\"You could ask her about Pablo Cortez\". We can override that with the
[suggestAs]{.code} property to force the library to suggest is as
something else, here as if it were a TellTopic (i.e. \"You could tell
her about Pablo Cortez\"). Then note the use of the [\<.inform
cortez\>]{.code} tag. This works much like a [\<.reveal\>]{.code} tag,
but instead of recording the fact that something has just been revealed
to the player character, it signals that something has been revealed by
the player character to the person he\'s talking to (and, incidentally,
to anyone else within earshot). Finally note that instead of
[\<.convnode what-to-you\>]{.code} we wrote [\<.convnodet
what-to-you\>]{.code}, with an extra t (convnodet rather than just
convnode). The extra **t** tells the game to display a suggested list of
**t**opics on entering the Conversation Node.

The next step is to define the TopicEntries making up the Conversation
Node. We\'ll once again use a ConvNode object to simplify the definition
(so we don\'t have to define the isActive and convKeys properties on
each of the TopicEntries on the node). But we\'ll also do something new:
we\'ll use a type of TopicEntry we haven\'t seen before, the
**SayTopic**. A SayTopic allows the player character to say just about
anything, for example SAY SHE LOOKS NICE or SAY YOU ARE AFRAID or SAY
THAT YOU\'VE BEEN HERE BEFORE (the inclusion or exclusion of the THAT
makes no difference). But a SayTopic will also match even if the command
SAY is missing, provided that a conversation is in progress and that the
player\'s command doesn\'t look like any other valid command (including
any other valid conversational command). The player could thus type just
SHE LOOKS NICE, YOU ARE AFRAID or YOU\'VE BEEN HERE BEFORE or even, if
the SayTopics have been defined carefully, YOU LOOK NICE, I AM AFRAID,
or I\'VE BEEN HERE BEFORE.

Defining a SayTopic is much like defining a QueryTopic, except that we
don\'t need the qtype (who/what/where/why/when) part. We can define a
SayTopic either using a separate Topic object, or by defining the Topic
to be matched in-line on the SayTopic (just as we can for a QueryTopic).
For the full story, see the section on [Special
Topics](../manual/specialtopic.htm) in the *adv3Lite Library Manual*.
Note that a SayTopic is included in topic suggestion lists automatically
(like a QueryTopic), that is, its autoName property is true by default.
If you don\'t want the suggestion to begin with \'say\' you can define
[includeSayInName = nil]{.code} on the SayTopic.

For present purposes we\'ll define our Conversation Node with one
TellTopic and two SayTopics:

::: code
    + ConvNode 'what-to-you';
        
    ++ TellTopic @me    
        "<q>The name's Pond, Sherlock Pond,</q> you tell her. <q>I'm a British
        secret agent on the track of these villains!</q>\b
        <q>Indeed!</q> she replies with ill-disguised scepticism. <.inform agent>" 
        
        name = 'yourself'
    ;

    ++ SayTopic 'Cortez is dangerous'
        "<q>Pablo Cortez is a <i>very</i> dangerous man,</q> you warn her. <q>He's
        killed more men than I've had hot dinners!</q>\b
        <q>Anyone waving a gun around aboard a passenger aircraft might be
        considered dangerous,</q> she points out pragmatically. <.inform cortez-dangerous> "    
    ;

    ++ SayTopic 'she should call security; you'
        "<q>You should call airport security to deal with him!</q> you urge her.\b
        <q>Airport security -- in Narcosia?</q> she asks incredulously. <q>Somehow I
        don't think that will exactly help the situation!</q> "
    ;
:::

What happens if the player responds with something not corresponding to
one of these three TopicEntries? We can trap that by adding a
DefaultAnyTopic to the Conversation Node to trap any other
conversational commands. The first time round Angela will complain and
repeat her question; the second time she\'ll complain but let the matter
drop. To make this happen we add a [\<.convstay\> ]{.code}tag to
Angela\'s first default conversational response to tell the game to keep
the Conversation Node active for another conversational turn:

::: code
    ++ DefaultAnyTopic, StopEventList
        [
            '<q>No, but what is it to you who this man is?</q> she interrupts you.
            <.convstay> ',
        
            'She shakes her head. <q>Very well, don\'t answer my question then,</q>
            she mutters. '
        ]
    ;
:::

The other thing the player could do to throw our Conversation Node off
the rails, besides coming up with a response we hadn\'t planned for, is
to try to end the conversation prematurely in the middle of the node,
either with an explicit BYE command or by simply walking away. To
control whether we want to allow this we can add a **NodeEndCheck**
object to the Conversation Node, on which we then define one method,
**canEndConversation(reason)**, which determines whether or not the
player character is allowed to end the conversation while this node is
active. The *reason* parameter can take a number of values but the two
most common ones, and the ones that concern us here, are
[endConvBye]{.code} (meaning the player is trying to end the
conversation with a BYE command) and [endConvLeave]{.code} (meaning the
player is trying to end the conversation by having the player character
walk away from it). The [canEndConversation(reason)]{.code} can then
return [true]{.code} to allow the conversation to end for that reason,
or either [nil]{.code} or [blockEndConv]{.code} to prevent the
conversation from ending. The difference is that [blockEndConv]{.code}
signals that the actor the player character is speaking with has now
spoken on the current turn; it\'s therefore appropriate to return
[blockEndConv]{.code} if our [canEndConversation()]{.code} method
displays something said by the actor to explain why she won\'t allow the
conversation to end.

We can add a NodeEndCheck object to our current Conversation Node thus:

::: code
    ++ NodeEndCheck
        canEndConversation(reason)
        {
            if(reason == endConvBye)
            {
                "<q><q>Goodbye,</q> isn't an answer,</q> {the subj angela}
                complains. <q>Why are you so bothered about this man Cortez?</q> ";
                                  
                return blockEndConv;
            }
            
            if(reason == endConvLeave)
            {
                "This doesn't seem a good point to break off the conversation. ";
                return nil;
            }
            
            return true;
        }
    ;
:::

\

## Angela Demands an Answer

In the first Conversation Node we implemented above, the player could
reply YES or NO or just let the matter pass, since Angela\'s question
could easily have been purely rhetorical. In the second, Angela makes
some attempt to insist on an answer, but lets the matter go if the
player refuses to give one. A third type of Conversation Node might be
one in which Angela absolutely demands an answer and the game can\'t
proceed until she gets one.

When Angela sees the player character return to the plane wearing the
pilot\'s uniform she might be a little surprised. She may recognize him
as the man who talked to her on the jetway, but she certainly doesn\'t
recognize him as the pilot she\'s expecting, so she\'ll probably demand
to know who he is.

The first step is to create a new AgendaItem for Angela to ask her
question --- a ConvAgendaItem would be appropriate, since that\'s
triggered as soon as conversation becomes possible --- and then make
sure it\'s added to Angela\'s agenda list at some suitable point, such
as the [invokeItem()]{.code} method of angelaReboardingAgenda, which
causes her to reboard the plane once the player is wearing the pilot\'s
uniform (and the takeover scene comes to an end):

::: code
    + angelaReboardingAgenda: AgendaItem
        isReady = (takeover.hasHappened)
        
        invokeItem()
        {
            isDone = true;
            getActor.moveInto(planeFront);
            getActor.setState(angelaSeatedState);
            getActor.addToAgenda(angelaPilotAgenda);
        }
        
    ;

    + angelaPilotAgenda: ConvAgendaItem    
        invokeItem()
        {
            isDone = true;
            "{The subj angela} looks up at you sharply and frowns. <q>Hey! You're
            one of the the passengers, aren't you?</q> she remarks. <q>I remember
            looking at your ticket! You certainly aren't our pilot. What are you
            doing in that uniform?</q><.convnodet uniform> ";
            
        }
    ;
:::

Next we can set up the corresponding Conversation Node and populate it
with some SayTopics. Whichever response the player chooses we\'ll have
Angela ask if the player character really intends to fly the plane and
then switch to another Conversation Node for an answer to that question:

::: code
    + ConvNode 'uniform';

    ++ SayTopic 'all British agents learn to fly'
        "<q>I told you, I'm a British agent, and all British agents learn to fly --
        it's part of our training,</q> you tell her.\b
        <q>You mean you actually intend to fly this aircraft?</q> she demands,
        startled. <.convnodet intend-fly> "
        
        isActive = gInformed('agent')
    ;

    ++ SayTopic 'you have a pilot\'s license; i'
        "<q>It's quite all right, I have a pilot's license,</q> you assure her.\b
        <q>Yes, but...</q> she begins. <q>Do you actually mean to say you intend to
        fly this plane?</q> <.convnodet intend-fly> "
        
        isActive = !gInformed('agent')
    ;

    ++ SayTopic 'you\'re the replacement pilot; you are i am i\'m'
        "<q>You said you were waiting for the pilot, but there's no sign of him, so
        I'm standing in for him,</q> you reply.\b
        <q>You!</q> she exclaims. <q>You mean, <i>you're</i> going to fly this
        plane?</q> <.convnodet intend-fly> "
        
        isActive = gRevealed('pilot-awaited')
    ;

    ++ SayTopic 'you just found the uniform; i'
        "<q>I found the uniform, you need a pilot,</q> you reply with a smile and a
        shrug. <q>Besides, I do know how to fly -- I have a license.</q>\b
        <q>You mean you're intending to fly this plane?</q> she demands
        incredulously. <.convnodet intend-fly> "
    ;
:::

Note the use of the [isActive]{.code} on the first three SayTopics to
determine whether or not they\'re appropriate in the light of what has
or hasn\'t been said before. The [gInformed(key)]{.code} tests whether
or not the actor has previously been informed of *key* by the player
character via an [\<.inform key\>]{.code} tag, so either the first or
the second SayTopic will be active depending on whether or not the
player character has already told Angela who he is. The
[gRevealed(key)]{.code} tests whether *key* has previously been revealed
to the player character via a [\<.reveal key\>]{.code} tag, so the third
SayTopic will be active if Angela has previously mentioned that the
plane is waiting for its pilot. The fourth and final SayTopic will be
available under all circumstances. The player will thus have either two
or three responses to choose from at this point.

Next we can add a catch-all DefaultAnyTopic that won\'t allow the player
to leave the Conversation Node until he\'s chosen one of the above
SayTopics:

::: code
    ++ DefaultAnyTopic, ShuffledEventList
        [
            '<q>No, but answer my question,</q> she interrupts you. <q>What are you
            doing in that uniform?</q> <.convstay> ',
            
            '<q>That\'s not what I asked,</q> she complains. <q>Tell me why you\'re
            wearing that uniform!</q> <.convstay>',
            
            '<q>Why are you wearing that uniform?</q> she insists, brushing aside
            your irrelevant remarks. <.convstay> ',
            
            '<q>That still doesn\'t tell me what you\'re doing with that
            uniform,</q> she complains. <q>Why are you wearing it?</q> <.convstay> '
        ]
    ;
:::

Note how we add a [\<.convstay\>]{.code} tag to each of the default
responses to ensure that we remain in the current Conversation Node. The
next step is to prevent the player from breaking off the conversation
prematurely, which we can once again do with a NodeEndCheck object:

::: code
    ++ NodeEndCheck
        canEndConversation(reason)
        {
            switch(reason)
            {
            case endConvBye:
                "<q>Oh no, you're not avoiding my question like that!</q> she tells
                you. <q>Tell me, why are you wearing that pilot's uniform?</q> ";
                return blockEndConv;
            case endConvLeave:
                "<q>You're not going anywhere until you tell me what you're doing in
                that uniform!</q> {the subj angela} insists. ";
                return blockEndConv;
            default:
                return nil;
            }
        }
    ;
:::

The other thing the player could try to deflect Angela\'s question is to
carry out a whole lot of irrelevant non-conversational commands (even
just a repeated WAIT or I or LOOK). To have Angela express her
impatience at such a tactic we can allow her to insist on an answer on
each turn we remain in the node and there hasn\'t been a conversational
exchange. For that purpose we can define a **NodeContinuationTopic**
(which we also locate in the ConvNode in question):

::: code
    ++ NodeContinuationTopic
        "<q><<one of>>I asked you a question<<or>>I'm still waiting for an
        answer<<cycling>>,</q> {the subj angela} <<one of>> reminds
        you<<or>> insists<<or>> repeats<<cycling>>. <q>Why are you wearing that
        uniform?</q> "
    ;
:::

Note the use of the [\<\<one of\>\>]{.code} embedded expression
constructs to vary what\'s displayed slightly on each occasion. We could
achieve greater variety by mixing in the NodeContinuationTopic with a
ShuffledEventList, say, but what we\'ve done here will suffice for now.

The final step is to define the Conversation Node the player is taken to
next, the \'intend-fly\' node:

::: code
    + ConvNode 'intend-fly'
       commonResponse = "\b<q>Very well, then,</q> she sighs. <q>I suppose we don't
           have too much choice now, do we? Just as long as you know what you're
           doing...</q> "
    ;

    ++ YesTopic
        "<q>Yes, why not?</q> you reply breezily. <q>You can't wait here all day --
        Pablo Cortez and his merry crew won't stand for it, for one thing!</q>
        <<location.commonResponse>>"
    ;

    ++ QueryTopic 'why not'
        "<q>Why not?</q> you ask. <q>You need a pilot and I need to get out of here.
        Besides, I wouldn't want to be in your shoes when this lot run out of
        patience!</q> You nod towards the gangsters and drug barons occupying the
        passenger seats further down the aisle. <<location.commonResponse>>"
    ;

    ++ QueryTopic 'whether|if she has a better idea; you have'
        "<q>Do you have a better idea?</q> you counter. <q>There's no sign of your
        regular pilot, and I wouldn't want to be in your shoes when your current
        passengers run out of patience!</q> <<location.commonResponse>>"
    ;

    ++ DefaultAnyTopic
        "<q>Please answer my question,</q> she insists. <q>Do you really intend to
        fly this plane?</q> <.convstay>"
    ;

    ++ NodeEndCheck
        canEndConversation(reason)
        {
            switch(reason)
            {
            case endConvBye:
                "<q>That's not an answer!</q> she complains. <q>Tell me, are
                you proposing to fly this plane yourself?</q> ";
                return blockEndConv;
            case endConvLeave:
                "<q>Don't walk off until you've told me whether you're proposing to
                fly this plane,</q> {the subj angela} insists. <q>Well, are
                you?</q> ";
                return blockEndConv;
            default:
                return nil;
            }
        }
    ;

    ++ NodeContinuationTopic
        "<q>I'd appreciate it if you answered my question,</q> {the subj angela}
        insists. <q>Are you really proposing to fly this aircraft?</q> "
    ;
:::

We\'ve saved ourselves a bit of typing here by defining a
[commonResponse]{.code} property on the ConvNode object and then calling
it from each of the TopicEntries located in it to provide Angela\'s
response. Otherwise the pattern of this Conversation Node pretty much
follows that of the previous one, although we have shown how
Conversation Nodes can be chained together, a process that could be
continued in principle as long as we liked. We could also make the
conversation branch to different nodes depending on the topic chosen by
the player.

Game authors aren\'t restricted to the Conversation Node coding patterns
illustrated here, although the three shown above are likely to be the
most common ones. The adv3Lite library aims to allow as much flexibility
as possible in how you use Conversation Nodes in your own game. For a
complete account, see the section on [Conversation
Nodes](../manual/convnode.htm) in the *adv3Lite Library Manual*.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [The Art of
Conversation](conversation.htm){.nav} \> Angela Wants Answers\
[[*Prev:* Hello and Goodbye](hello.htm){.nav}     [*Next:* Diverse
Defaults](defaults.htm){.nav}     ]{.navnp}
:::
