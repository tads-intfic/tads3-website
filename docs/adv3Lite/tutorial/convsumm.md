::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [The Art of
Conversation](conversation.htm){.nav} \> Summary\
[[*Prev:* Diverse Defaults](defaults.htm){.nav}     [*Next:* Finishing
Touches](finish.htm){.nav}     ]{.navnp}
:::

::: main
# Summary

We\'ve now taken the Angela NPC as far as we need to for the purposes of
this tutorial, though she\'s not really complete (try asking her about
flight departures and the pilot after the player character\'s made it
clear he intends to fly the plane, for example; the exchanges are then
rather incongruous). We could certainly add a bit more polish, and we
might want to extend her conversational range, but these can be left as
exercises for the interested reader (they might be quite useful
exercises if you want more practice at using the adv3Lite conversation
system).

As you\'ll see from the [listing below](#listing), the code for Angela
has already become quite complex. This is inevitable if you want to
implement an NPC of any sophistication. Writing even a reasonable
approximation to realistic conversation in IF is a lot of work; an
authoring system can provide you with the tools for the job, but it
can\'t do the work for you. What adv3Lite does do (following principles
borrowed from adv3) is to allow you to program conversations in a
largely declarative style spread over a large number of objects. This
avoids spaghetti coding with lots of if-branches and case statements,
and makes your code easier to write, read and maintain. If you read
through the complete listing below you\'ll see there\'s actually very
little procedural code; it\'s mainly a matter of defining objects and
their properties. This makes it about as easy for you as an IF
conversation system can make it.

That said, there\'s no getting away from the fact that the conversation
system in adv3Lite is quite complex; it is easily the most complex part
of the library. But it is also scalable, which means you don\'t have to
use all the complexity if you don\'t want to; you can just use the bits
you need for your own particular game. We should also add that although
we\'ve covered most of the main features of the adv3Lite conversation
system in this chapter, we haven\'t covered them all. The system is
intended to be highly flexible to allow you to write the kinds of
conversation you want to write. You don\'t have to follow the coding
patterns illustrated in this chapter, although they\'ll often prove
useful.

Probably the next step is for you to read through the entire
[Actors](../manual/actor.htm) part of the *adv3Lite Library Manual* to
refresh your memory and see what else is there, and then perhaps (or in
parallel, perhaps) try increasing Angela\'s conversational range a bit
more. In the meantime, here\'s a brief summary of what we\'ve covered
(and what we\'ve missed) in this chapter, with links to the relevant
sections of the *adv3Lite Library Manual*.

At its simplest, conversation in adv3Lite can be implemented as a [Basic
Ask/Tell system](../manual/asktell.htm) using various kinds of
[TopicEntry](../manual/actortopicentry.htm) objects (such as AskTopic
and TellTopic). If you like, you can [suggest](../manual/suggest.htm)
certain topics of conversation to the player by giving your TopicEntries
a [name]{.code} property. The availability of TopicEntries to respond to
the player\'s conversation commands depends on a number of factors,
including which [ActorState](../manual/actorstate.htm) the NPC is in,
the [isActive]{.code} property of the TopicEntry and the
[convKeys]{.code} property, which can be used for a variety of purposes.
Where several TopicEntries share the same values of these properties it
can be useful to group them under a common
[TopicGroup](../manual/topicgroup.htm).

There are various ways you can make things more elaborate. A
[SayTopic](../manual/specialtopic.htm#saytopic) allows the player
character to say just about anything to an NPC (within reason!), while a
[QueryTopic](../manual/specialtopic.htm#querytopic) allows the player
character to ask a wide range of much more specific questions than is
possible with an AskTopic (users familiar with adv3 might like to know
that there is no restriction on where these two types of TopicEntry may
be used, unlike an adv3 SpecialTopic). A particular point in the
conversation at which particular responses or questions become
momentarily appropriate is called a [Conversation
Node](../manual/convnode.htm) and can be most conveniently implemented
using a combination of a [ConvNode]{.code} object and a
[\<.convnode\>]{.code} tag. In many situations it is also appropriate to
implement [Greeting Protocols](../manual/hello.htm), whereby
conversations are properly begun and ended with some equivalent of
\"hello\" and \"goodbye\" and the NPC can optionally change between
conversational and non-conversational ActorStates.

In order to ensure that a conversational exchange remains sensible and
appropriate, it\'s often necessary to keep track of what both the player
character and the NPC s/he\'s talking to currently know. Player
Character and NPC [Knowledge](../manual/knowledge.htm) can be tracked
using [\<.reveal key\>]{.code} and [\<.inform key\>]{.code} tags, and
tested with [gRevealed(key)]{.code} and [gInformed(key]{.code}),
typically used on the isActive property of a TopicEntry (or perhaps a
TopicGroup).

A couple of topics we only touched on were [Giving Orders to
NPCs](../manual/orders.htm) (e.g. BOB, PUT THE BALL IN THE BOX) and
[NPC-Initiated Conversation](../manual/initiate.htm). Orders given to
NPCs are typically handled by [CommandTopics]{.code} and
[DefaultCommandTopics]{.code}, which are similar in principle to other
TopicEntries but can be a little more complex to specify. One way we\'ve
seen for an NPC to initiate a conversation is via a
[ConvAgendaItem](../manual/initiate.htm#convagendaitem). Another, which
we didn\'t cover, might be through an
[InitiateTopic](../manual/initiate.htm#initiatetopic). A particularly
sophisticated technique (which again we haven\'t covered in this
tutorial) is to combine a [ConvAgendaItem]{.code} with a
[DefaultAgendaTopic](../manual/initiate.htm#defaultagenda), which allows
an NPC to pursue his or her own conversational agenda instead of giving
a canned default response when the player tries a conversational command
that hasn\'t otherwise been specifically catered for; instead of giving
a disguised version of \"I haven\'t been programmed to respond in that
area\", the NPC can take the opportunity to seize the conversational
initiative.

Finally, we have met a number of tags that can be used in conversation,
such as \<.reveal\>, but there are several more that we haven\'t covered
in this tutorial that can be used for a variety of purposes. A full list
is provided in the [NPC Overview](../manual/actoroverview.htm) section
of the manual.

\

## [Complete Angela Listing]{#listing}

Since some readers may have found it a little hard to keep track of
exactly what goes where, here\'s a complete listing of all the code
related to the Angela NPC as far as we have reached:

::: code
    angela: Actor 'flight attendant; statuesque young; woman angela; her'
        @planeFront
        "She's a statuesque and by no means unattractive young woman. "
        
        checkAttackMsg = 'That would be cruel and unnecessary. '
        
        globalParamName = 'angela'
        
        makeProper
        {
            proper = true;
            name = 'Angela';
            return name;
        }
        
        suggestionKey = 'top'
    ;

    + TopicGroup 'top';

    ++ AskTopic @angela
        keyTopics = 'angela'
        
        name = 'herself'
    ;

    ++ QueryTopic 'when' 'this plane is going to leave; depart take off'
        "<q>When is this plane going to leave?</q> you ask.\b
        <q>Just as soon as the pilot comes aboard,</q> she tells you. <.reveal
        pilot-awaited> "
        
        askMatchObj = tFlightDepartures
    ;


    ++ AskTopic @tPilot
        "<q>What's happened to the pilot?</q> you ask.\b
        <q>I don't know; we're still waiting for him,</q> she replies. <q>But don't
        worry; I'm sure he'll turn up any moment now.</q> "

        autoName = true
        isActive = gRevealed('pilot-awaited')
    ;



    + QueryTopic 'what' 'her name is; your'
        "<q>What's your name?</q> you ask.\b
        <q><<getActor.makeProper>>,</q> she replies. "
        
        isActive = !getActor.proper
        
        convKeys = 'angela'
    ;

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

    + QueryTopic 'when' 'this plane is going to leave; depart take off'
        "<q>When is this plane going to leave?</q> you ask.\b
        <q>Just as soon as the pilot comes aboard,</q> she tells you. <.reveal
        pilot-awaited> "
        
        askMatchObj = tFlightDepartures
    ;

    + DefaultAskForTopic
        "{The subj angela} listens to your request and shakes her head. <q>Sorry, I
        can't help you with that,</q> she says. "
    ;
        
    + DefaultCommandTopic
        "<q><<if angela.proper>>Angela<<else>>Miss<<end>>, would you
        <<actionPhrase>>, please?</q> you request.\b
        In reply she merely cocks an eyebrow at you and looks at you as if to say,
        <q>Who do you think you're talking to?</q> "
    ;


    + DefaultAnyTopic
        "{The subj angela} smiles and shrugs. "  
    ;

    + DefaultGiveShowTopic
        "You offer {the angela} {the dobj}, but she shakes her head and pushes {him
        dobj} away, saying, <q>I'm afraid I can't accept {that dobj} from you,
        sir.</q> "
    ;

    + DefaultShowTopic
        "You point towards {the dobj}.\b
        <q>Very interesting, I'm sure, sir,</q> {the subj angela} remarks without
        much enthusiasm. "
        
        isActive = gDobj.isFixed
    ;

    + TopicGroup
        isActive = getActor.curState == angelaSeatedState
    ;

    ++ DefaultAskQueryTopic
        "<q&gt;That question's too difficult for me!&lt;/q&gt; she declares. "
    ;

    + angelaGreetingState: ActorState
        isInitState = true
        specialDesc = "{The subj angela} {is} standing just inside the entrance
            greeting passengers as they board. "
        stateDesc = "Right now, she's wearing a fixed professional smile. "
        
        beforeTravel(traveler, connector)
        {
            if(traveler == me)
            {
                switch(connector)
                {
                case cockpitDoor:
                    "<q>I'm afraid you can't go in there, sir,</q> {the subj angela}
                    stops you. <q>Only flight crew are allowed in the cockpit.</q>.
                    ";
                    
                    exit;
                   
                case planeRear:
                    if(!ticketSeen)
                    {
                        "<q>I'm afraid I can\'t let you board the plane till I\'ve
                        seen your ticket, sir,</q> {the subj angela} insists. ";
                        exit;
                    }
                    break;
                case jetway:
                    if(!ticketSeen)
                        getActor.addToAgenda(angelaTicketAgenda);
                    break;
                default:
                    break;
                }
            }
        }
        
        ticketSeen = nil
    ;

    ++ GiveShowTopic @ticket
        topicResponse()
        {
            "<q>Here you are,</q> you say, holding out the ticket for {the angela}
            to see.\b
            She glances down at the ticket in your hand, and temporarily takes it
            off you to check. <q>That's fine, sir,</q> she assures you as she
            returns it to you. <q>Please move to the rear of the plane to find a
            seat.</q> ";
            angelaGreetingState.ticketSeen = true;
        }
    ;
        
    ++ QueryTopic 'if|whether' @tEnjoyWork
        "<q>Do you enjoy your work?</q> you ask.\b
        <q>Of course, sir,</q> she replies with a bland smile. "    
        
        convKeys = 'angela'
    ;

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



    + angelaAssistingState: ActorState
        specialDesc = "{The subj angela} {is} standing in the middle of the jetway,
            trying to calm the passengers who have just been forced off the plane. "
        
        stateDesc = "Right now, she's looking rather harrassed. "
    ;

    ++ HelloTopic, StopEventList
        [
            '<q>Excuse me, might I have a word?</q> you say.\b
            {The subj angela} turns to you with a fixed smile, no doubt mentally
            preparing herself for another barrage of complaints. <q>Yes; how can I
            help?</q> she replies. ',
            
            '<q>Might I have another word?</q> you ask.\b
            <q>Yes?</q> she replies, turning to you just a little warily. '
        ]
        
        changeToState = angelaTalkingState
    ;


    + angelaTalkingState: ActorState
        specialDesc = "{The subj angela} {is} facing you, waiting for you to speak.
            "    
    ;

    ++ QueryTopic 'if|whether' @tEnjoyWork
       "<q>Do you enjoy your work -- at times like these?</q> you ask.\b
       <q>At times like these...</q> she leaves the sentence unfinished with an
       expressive grimace. "    
        
        convKeys = 'angela'
    ;

    ++ ByeTopic
        "<q>Well, cheerio for now then,</q> you say.\b
        <q>Goodbye,</q> she replies with a brisk nod, before turning to yet another
        importuning displaced passenger anxious for her attention. "
        
        changeToState = angelaAssistingState
    ;

    ++ LeaveByeTopic
        "{The subj angela} looks momentarily taken aback at your somewhat abrupt
        departure, but quickly turns back to the other passengers clamouring for
        her attention. "
        
        changeToState = angelaAssistingState
    ;

    ++ AskTellTopic, StopEventList @cortez
        [
            '<q>Do you know who that man waving a gun around at the front of the
            plane is?</q> you ask, lowering your voice. <q>It\'s Pablo Cortez, El
            Diablo\'s right-hand man!</q>\b
            Her smile becomes rather frosty as she replies, <q>What\'s that to
            you?</q> <.inform cortez> <.convnodet what-to-you>',
            
            '<q>You need to be <i>very</i> careful around Cortez,</q> you warn
            her.\b
            <q>I shall be,</q> she assures you. '
        
        ]
        autoName = true
        convKeys = 'top'
        suggestAs = TellTopic
    ;

    + ConvNode 'what-to-you';
        
    ++ TellTopic @me    
        "<q>The name's Pond, Sherlock Pond,</q> you tell her. <q>I'm a British
        secret agent on the track of these villains!</q>\b
        <q>Indeed!</q> she replies with ill-disguised scepticism. <.inform agent>" 
        
        name = 'yourself'    
    ;

    ++ SayTopic 'Cortez is dangerous'
        "<q>Pablo Cortez is a <i>very</i> dangerous man,</q> you warn her. <q>He's
        killed more men than I've had hot dinners!</q><.inform cortez-dangerous>\b
        <q>Anyone waving a gun around aboard a passenger aircraft might be
        considered dangerous,</q> she points out pragmatically. "        
    ;

    ++ SayTopic 'she should call security; you'
        "<q>You should call airport security to deal with him!</q> you urge her.\b
        <q>Airport security -- in Narcosia?</q> she asks incredulously. <q>Somehow I
        don't think that will exactly help the situation!</q> "    
    ;

    ++ DefaultAnyTopic, StopEventList
        [
            '<q>No, but what is it to you who this man is?</q> she interrupts you.
            <.convstay> ',
        
            'She shakes her head. <q>Very well, don\'t answer my question then,</q>
            she mutters. '
        ]    
    ;

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


    + angelaSeatedState: ActorState
        specialDesc = "{The subj angela} {is} sitting near the front of the plane. "
        stateDesc = "Right now, though, she's looking worried and afraid. "
    ;

    ++ QueryTopic 'if|whether' @tEnjoyWork
       "<q>Are you enjoying your work now?</q> you ask.\b
       <q>I'll be glad when this particular flight is over,</q> she replies
       quietly. "    
        
        convKeys = 'angela'
    ;

    ++ QueryTopic, StopEventList 'what' @tDoingTonight
        [
            '<q>What are your plans for tonight now?</q> you ask.\b
            <q>I\'m not sure,</q> she replies, just a little nervously. <q>I think
            I\'d rather wait until this plane has safely landed at its destination
            and -- well, you know.</q> She indicates the new set of passengers with a
            flick of her eyes. <q>I think I\'d rather wait until this is all over
            before making any further plans.</q> ',
            
            '<q>About later tonight...</q> you begin.\b
            <q>Let\'s discuss it when we\'ve arrived at the other end,</q> she
            insists. '
        ]
        
        convKeys = 'angela'
    ;

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
        
        

    + angelaAssistingAgenda: AgendaItem
        initiallyActive = true
        isReady = (takeover.isHappening)
        
        invokeItem()
        {
            isDone = true;
            getActor.moveInto(jetway);
            getActor.setState(angelaAssistingState);
            getActor.addToAgenda(angelaReboardingAgenda);
        }
    ;

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

    ++ NodeContinuationTopic
        "<q><<one of>>I asked you a question<<or>>I'm still waiting for an
        answer<<cycling>>,</q> {the subj angela} <<one of>> reminds
        you<<or>> insists<<or>> repeats<<cycling>>. <q>Why are you wearing that
        uniform?</q> "
    ;
        

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
        patience!</q> You nod towards the gansgters and drug barons occupying the
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


    + angelaTicketAgenda: ConvAgendaItem
        initiallyActive = true
        
        invokeItem()
        {
            isDone = true;
            "Welcome aboard, sir, {the subj angela} greets you with a smile.
            May I see your ticket please? ";        
        }
    ;
:::
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [The Art of
Conversation](conversation.htm){.nav} \> Summary\
[[*Prev:* Diverse Defaults](defaults.htm){.nav}     [*Next:* Finishing
Touches](finish.htm){.nav}     ]{.navnp}
:::
