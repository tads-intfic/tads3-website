::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [The Art of
Conversation](conversation.htm){.nav} \> Ask, Tell, Give, Show\
[[*Prev:* The Art of Conversation](conversation.htm){.nav}     [*Next:*
Queries and Suggestions](query.htm){.nav}     ]{.navnp}
:::

::: main
# Ask, Tell, Give, Show

## Introduction and Overview

At its simplest, adv3Lite implements a basic ask/tell conversation
system. This is so-called because it allows NPCs to respond to
conversational commands of the form ASK BOB ABOUT LIGHTHOUSE or TELL
MARTHA ABOUT BOB, as well as ASK BOB FOR MONEY or GIVE THE COIN TO BOB
or SHOW THE TICKET TO THE FLIGHT ATTENDANT.

In adv3Lite, the responses to commands of this sort can be defined using
TopicEntries, just like the ConsultTopics we used when constructing the
computer in the [Security Centre](security.htm#consult). There are
various kinds of TopicEntry corresponding to the various kinds of
conversational commands we have just listed:

-   **AskTopic** responds to ASK X ABOUT Y
-   **TellTopic** responds to TELL X ABOUT Y
-   **AskTellTopic** responds to ASK X ABOUT Y or TELL X ABOUT Y
-   **AskForTopic** responds to ASK X FOR Y
-   **GiveTopic** responds to GIVE Y TO X (or equivalently, GIVE X Y,
    e.g. GIVE BOB THE COIN)
-   **ShowTopic** responds to SHOW Y TO X (or equivalently, SHOW X Y,
    e.g. SHOW BOB THE COIN)
-   **GiveShowTopic** responds to GIVE Y TO X or SHOW Y TO X

In all the above, X is the person being addressed. For Give or Show Y
must be a physical game object in scope that is to be given or shown to
X. For all the rest Y is a topic, which may be any game object the
player character knows about or any abstract topic defined in the game,
like the [tFrenchRevolution]{.code} and [tFlightDepartures]{.code}
topics we defined for the security centre
[computer](security.htm#consult).

Note also that once a conversation with a particular NPC is underway,
the player can enter abbreviated forms of all the above commands without
having to name the NPC again, such as ASK ABOUT Y or just A Y, T Y (for
TELL X ABOUT Y), ASK FOR Y, SHOW Y and GIVE Y. These abbreviated
conversational commands still trigger the same kinds of TopicEntry.

To associate a conversational TopicEntry with a particular NPC we can
put it in one of two places: either directly located within the NPC
(generally using the + syntax to indicate its location), or located
within one of the NPC\'s ActorStates. Any TopicEntries placed in an
ActorState will only be triggered while the NPC is in that state; this
enables us to customize an NPC\'s responses according to the state it\'s
in, if we so wish. TopicEntries in an Actor\'s current state take
precedence over any defined directly in the Actor (if they would match
the same topic/object), but TopicEntries placed directly in the Actor
can be used to provide responses that are independent of ActorState (or,
of course, for NPCs that don\'t have different states). This should all
become clearer once we start working through some examples.

Obviously we can\'t anticipate every conversational command a player
might try. There may be reasonable ones we miss, like ASK ATTENDANT
ABOUT REFRESHMENTS or unreasonable ones like ASK ATTENDANT ABOUT HER
MOTHER\'S LAST HOLIDAY, but either way we need our NPCs to be able to
respond in a way that effectively tells the player \"I am not programmed
to respond in this area\" while sounding a bit more believably human.
For this purpose we can define one or more catch-all DefaultTopics, that
will provide a response to something we hadn\'t specifically allowed
for. The principal kinds of DefaultTopic commonly used are:

-   **DefaultAskTopic** responds to ASK X ABOUT Y
-   **DefaultTellTopic** responds to TELL X ABOUT Y
-   **DefaultAskTellTopic** responds to ASK X ABOUT Y or TELL X ABOUT Y
-   **DefaultAskForTopic** responds to ASK X FOR Y
-   **DefaultGiveTopic** responds to GIVE Y TO X (or equivalently, GIVE
    X Y, e.g. GIVE BOB THE COIN)
-   **DefaultShowTopic** responds to SHOW Y TO X (or equivalently, SHOW
    X Y, e.g. SHOW BOB THE COIN)
-   **DefaultGiveShowTopic** responds to GIVE Y TO X or SHOW Y TO X
-   **DefaultAnyTopic** responds to any conversational command for which
    we have not provided a more specific response.

Note that there is an order of precedence among DefaultTopics, the more
specific taking precedence over the less specific. Thus, for example, if
you define a DefaultAnyTopic, a DefaultAskTellTopic, and a
DefaultAskTopic for the same actor, the DefaultAskTopic will respond to
ASK X ABOUT Y, the DefaultAskTellTopic will respond to TELL X ABOUT Y,
and the DefaultAnyTopic to anything else (such as ASK X FOR Y or SHOW Y
TO X).

The above list of TopicEntry and DefaultTopic types is not exhaustive.
For the complete list consult the
[ActorTopicEntry](../manual/actortopicentry.htm#types) section of the
*adv3Lite Library Manual*. But the list shown above is sufficient for
now; we\'ll come to some of the other types in later sections when we
discuss various ways in which adv3Lite can go beyond the basic ask/tell
system. For the remainder of this section we\'ll illustrate some
examples of basic ask/tell by making some of the characters in our
airport a bit more talkative.

\

## Not Talking to Pablo Cortez

We don\'t actually want our protagonist to talk to Pablo Cortez at all,
since the idea is to avoid attracting Cortez\'s attention. In this case
all we need is a single DefaultAnyTopic that explains this:

::: code
    + DefaultAnyTopic
        "You really don't want to attract his attention. If he recognizes you he'll
        kill you. "
        
        isConversational = nil
    ;
:::

This object definition should be placed somewhere after the
[cortez]{.code} object in the npcs.t file so that the + sign locates it
in cortez.

We define [isConversational = nil]{.code} on this DefaultAnyTopic
because no conversation actually takes place (and so we don\'t want
Cortez marked as the player character\'s current interlocutor).

And that\'s really all we have to do to complete our implementation of
Pablo Cortez.

\

## Limited Conversation with the Security Guard

The Security Guard is not a major NPC in our game, but there are one or
two things the player character could reasonably try to talk with him
about. One obvious topic of conversation, since the player character is
anxious to find a plane leaving the airport, would be flight departures,
for which we\'ve already defined a corresponding
[tFlightDepartures]{.code} Topic object. As a first attempt, then, we
might define an AskTopic for our Security Guard thus:

::: code
    + AskTopic @tFlightDepartures
       "<q>When's the next plane out of here?</q> you ask.\b
       <q>Listen for the announcements, Se&ntilde;or,</q> he suggests, <q>or look at
       the departure boards through there.</q> He jerks his thumb vaguely in the
       direction of north. "
    ;
:::

Here we use the @ symbol in the TopicEntry template to denote the fact
that we\'re defining the AskTopic\'s [matchObj]{.code} property, namely
the Topic (or Thing) that we want this AskTopic to match. We have also
used the &ntilde; HTML entity to provide the ñ in Señor.

This AskTopic will do the job well enough, but it will make the security
guard seem a bit robotic, since he\'ll give precisely the same answer
every time the player character asks him about flight departures. We can
alleviate this a little by using a StopEventList on the AskTopic to vary
the response. A StopEventList runs through each item in its list in turn
and then keeps repeating the last one. To use one with a TopicEntry we
simply add StopEventList to the class list and then supply a list of
single-quoted strings in place of the double-quoted string giving the
response:

::: code
    + AskTopic, StopEventList @tFlightDepartures
        [
            '<q>When\'s the next plane out of here?</q> you ask.\b
            <q>Listen for the announcements, Se&ntilde;or,</q> he suggests, <q>or
            look at the departure boards through there.</q> He jerks his thumb
            vaguely in the direction of north. ',
            
            '<q>Is there a flight leaving soon?</q> you enquire.\b
            <q>I already told you, Se&ntilde;or: listen for the announcements or
            watch the board,</q> he replies with a faint air of impatience.'
        ]
    ;
:::

Since this man is presumably meant to have something to do with airport
security, it\'s possible that the player character might try to tell him
about Pablo Cortez\'s takeover of the plane, which we can do in a
similar fashion via a TellTopic:

::: code
    + TellTopic, StopEventList @cortez
        [
            '<q>A criminal called Pablo Cortez has just tried to take over the
            flight to Buenos Aires,</q> you say.\b
            <q>I am sure it will all be taken care of, Se&ntilde;or,</q> the guard
            assures you nonchalantly. ',
            
            '<q>Pablo Cortez...</q> you begin.\b
            The guard cuts you off with a gesture of his hand. <q>All taken care
            of, Se&ntilde;or,</q> he insists. '
        ]
    ;
:::

If you try compiling and running the game at this point, you\'ll find
that this TellTopic won\'t be triggered unless and until the player
character has actually seen Cortez, which in this case is what we want.
But how does this come about? The answer is that a TopicEntry won\'t
match a game object (like cortez) unless the player character knows
about it, and unless we arrange things otherwise, the player character
only comes to know about things when he\'s seen them. This wasn\'t an
issue with the [tFlightDepartures]{.code} topic, precisely because it\'s
a Topic, and the library\'s default assumption is that all Topics start
out known to the player character. If we had wanted the player character
to start out knowing about Cortez, we could have included [familiar =
true]{.code} on the definition of the [cortez]{.code} object, or we
could have called [gSetKnown(cortez)]{.code} at some convenient point in
the game; but here it suits us to treat Cortez as unknown until the
player character sees him.

Something else the player character might obviously try to do in
conversation with the security guard is to ask for the ID card back once
it\'s been confiscated. For that purpose we can use an AskForTopic:

::: code
    + AskForTopic @IDcard
        "<q>Can I have my ID card back, please?</q> you ask.\b
        <q>That was not your ID card, Se&ntilde;or,</q> the guard replies equably.
        <q>I know Antonio Velaquez, and you are not he.</q> "
    ;
:::

The problem is that this AskForTopic can be triggered once the player
has seen the ID card; there\'s no guarantee that it will have been
confiscated. We therefore need to place some kind of condition on when
this AskForTopic is active. We can do that by defining its isActive
property. The next question is what condition to place on it. When the
ID card has been confiscated it\'s returned to its initial position on
the counter, but that\'s not enough by itself, since if we just defined
[isActive = (IDCard.location == counter)]{.code}, the AskForTopic could
be triggered if the player character had simply seen the card and left
it in place. We need to know additionally that the Security Guard has
actually confiscated the card.

We can do this by using a [\<.reveal\>]{.code} tag in the message
announcing the confiscation of the card, and then testing for the output
of that tag with [gRevealed()]{.code}. We can used [\<.reveal
*key*\>]{.code} whenever we want to represent the revelation of some
fact to the player character. Here *key* is just an arbitrary piece of
text we use to represent the fact in question. Here, for example, we
could use [card-confiscated]{.code}.

First, then, we must add a [\<.reveal\>]{.code} tag to the notice of the
card\'s confiscation; this occurs on the definition of the metal
detector:

::: code
    + metalDetector: Passage 'metal detector; crude; frame'
        "The metal detector is little more than a crude metal frame, just large
        enough to step through, with a power cable trailing across the floor. "
        destination = concourse
        
        isOn = (powerSwitch.isOn == true)
        
        canTravelerPass(traveler)
        {
            return !isOn || !IDcard.isIn(traveler);
        }
        
        explainTravelBarrier(traveler)
        {
            "The metal detector buzzes furiously as you pass through it. The
            security guard beckons you back immediately, with a pointed
            tap of his holstered pistol. After a brisk search, he discovers the ID
            card and takes it off you with a disapproving shake of his head,
            before handing it to a colleague who walks off with it. <.reveal
            card-confiscated> ";
            
            IDcard.moveInto(counter);
        }
        
        travelDesc()
        {
            "You pass through the metal detector without incident. ";
            
            if(takeover.startedAt == nil)
                announcementObj.start();
        }
    ;
:::

At the same time as adding the [\<.reveal card-confiscated\>]{.code} tag
we\'ve added a few words about a colleague to explain how the card finds
its way back to the counter.

The next step is to add the appropriate isActive condition to the
AskForTopic:

::: code
    + AskForTopic @IDcard
        "<q>Can I have my ID card back, please?</q> you ask.\b
        <q>That was not your ID card, Se&ntilde;or,</q> the guard replies equably.
        <q>I know Antonio Velaquez, and you are not he.</q> "
        
        isActive = gRevealed('card-confiscated') && IDcard.location == counter
    ;
:::

This is not absolutely bullet-proof, since the player character could
find the ID card on the counter after it has been confiscated and still
leave it there, which would make his request to the guard at least a bit
tongue-in-cheek, but it will probably do well enough.

One more thing the player might try is to show the card to the guard in
the hope that this will somehow facilitate his passage through the metal
detector. In that case the guard will presumably confiscate it, which
means we\'ll need our ShowTopic to do a bit more than just display some
text. We can do that by defining its topicResponse property explicitly
as a method rather than as a double-quoted string via the template:

::: code
    + ShowTopic @IDcard
        topicResponse()
        {
            "You flash the ID card at the security guard, in the hope that it'll
            persuade him to let you straight through without any further questions,
            but instead he snatches it off you, stares at it with a deep frown.\b
            <q>This is not yours, Se&ntilde;or,</q> he remarks.\b
            So saying, he hands the card to a colleague who at once carries it off
            somewhere.<.reveal card-confiscated> ";
            
            IDcard.moveInto(counter);
        }    
    ;
:::

Because of the way the ShowTo action is defined, a ShowTopic can\'t be
triggered unless the object it\'s meant to match is visible, so there\'s
no danger that this one will be matched while the card is still on the
counter, say, but we might prefer it to be matched only if the player
character is actually carrying the card. We could do that with an
isActive condition on the ShowTopic, but a slightly neater solution is
to put an objHeld preCondition on the ShowTo response of the IDcard,
since this will trigger an implicit take if the player character drops
the card before showing it to the guard:

::: code
    ++ IDcard: Key 'an ID Card; identification poor; photo'     
        "According to what's on the front it apparently belongs to one Antonio
        Velaquez. Fortunately the accompanying photo is so poor it could be of
        almost anyone, even you. A magnetic stripe runs down the back. "
        
        actualLockList = [securityDoor]
        plausibleLockList = [securityDoor]
        
        bulk = 1
        
        dobjFor(ShowTo)   {  preCond = [objHeld]   }
    ;
:::

Finally, we should give the security guard some form of default response
to handle all other conversational commands. Since he\'s not really a
major character we can afford to go with something fairly
unsophisticated:

::: code
    + DefaultAnyTopic
        "The guard merely shrugs and mutters something that could be either, <q>Not
        my concern, Se&ntilde;or,</q> or <q>Not your concern, Se&ntilde;or.</q> "
    ;
:::

\

## Showing the Ticket to the Flight Attendant

You\'ll recall that as a temporary expedient we put some code in the
angelaTicketAgenda AgendaItem so that the flight attendant would
automatically see if the player character was carrying a ticket, and
allow him to board if so. Now we know how to allow the player character
to show things to people, we can remove that code:

::: code
    + angelaTicketAgenda: ConvAgendaItem
        initiallyActive = true
        
        invokeItem()
        {
            isDone = true;
            "<q>Welcome aboard, sir,</q> {the subj angela} greets you with a smile.
            <q>May I see your ticket please?</q> ";
                      
    //        /* The code shown commented out below can be deleted */
    //        if(ticket.isDirectlyIn(me))
    //        {
    //            "She glances down at the ticket in your hand, and temporarily takes
    //            it off you to check it. <q>That's fine, sir,</q> she assures you as
    //            she returns it to you. <q>Please move to the rear of the plane to
    //            find a seat.</q> ";
    //            angelaGreetingState.ticketSeen = true;
    //        }        
        }
    ;
:::

Instead, we can put similar code in the topicResponse() method of a
GiveShowTopic, so that the player character can (and must) explicitly
show his ticket to the flight attendant. Since this is only relevant
when the flight attendant is in her [angelaGreetingState]{.code} state,
it\'s probably best to locate our GiveShowTopic there rather than
directly in angela:

::: code
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
:::

We\'ve now completed all the conversation we want to implement with
Pablo Cortez and the Security Guard, but this is just the start of the
conversation we\'ll implement for Angela. In the sections that follow
we\'ll explore what adv3Lite has to offer beyond the basic ask/tell
paradigm we\'ve illustrated here. In the meantime, for more information
about implementing basic ask/tell conversation in adv3Lite, see the
section on [Basic Ask/Tell](../manual/asktell.htm) in the *adv3Lite
Library Manual*, while for more on how knowledge of objects and
[\<.reveal\>]{.code} tags can impact on conversation, see the section on
[Player Character and NPC Knowledge](../manual/knowledge.htm).
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [The Art of
Conversation](conversation.htm){.nav} \> Ask, Tell, Give, Show\
[[*Prev:* The Art of Conversation](conversation.htm){.nav}     [*Next:*
Queries and Suggestions](query.htm){.nav}     ]{.navnp}
:::
