::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Actors](actor.htm){.nav} \> Basic
Ask/Tell\
[[*Prev:* AgendaItems](agenda.htm){.nav}     [*Next:*
ActorTopicEntry](actortopicentry.htm){.nav}     ]{.navnp}
:::

::: main
# Basic Ask/Tell

The adv3Lite libary is capable of some quite sophisticated
conversational effects, but it is also scalable, so that if all your
game needs is a basic ASK/TELL conversation system it can be implemented
quite simply (and in a manner very similar to that in the adv3 library).
In any case, it probably makes sense to try to understand how to
implement the basic ASK/TELL system before going on to try the more
sophisticated conversational features the adv3Lite library has to offer.

By basic ASK/TELL we mean a conversational system that allows an NPC to
respond to conversational commands of the form ASK BOB ABOUT TOWER or
TELL BOB ABOUT VISIT in a relatively stateless kind of way (stateless in
the sense that the conversation has no particular thread or direction to
it; it\'s simply driven by what the player chooses to talk about at any
particular moment in time).

Implementing a basic ask/tell conversation system in adv3Lite is quite
similar to the way one defines a [Consultable](topicentry.htm), namely
by defining the conversational responses on the apprpropriate kinds of
TopicEntry, either an **AskTopic** (to respond to ASK X ABOUT Y) or a
**TellTopic** (to respond to TELL X ABOUT Y). There\'s also an
**AskTellTopic** that responds to either. To use one of these
conversational TopicEntry types we define the object or Topic it
matches, or the list of objects and/or topics it matches, on its
matchObj property, and the resultant conversational exchange on the
topicResponse property, all of which we can do succinctly via the
TopicEntry templates. The AskTopic, TellTopic or AskTellTopic is then
located either in the appropriate actor, or in one of the actor\'s
ActorStates. TopicEntries located in an ActorState are only reachable
when the actor is in that ActorState, when they take priority over any
TopicEntries located directly in the actor.

To give a simple example:

::: code
    bob: Actor 'Bob; short; man; him'
       "He's a short man, with a permanently worried-looking expression. "
    ;

    + AskTopic @darkTower
       "<q>What do you know about the dark tower?</q> you ask.\b
        <q>You don't want to go there,</q> he tells you with a little shudder,
        <q>you really don't.</q> "
    ;

    + TellTopic [tVisit, darkTower]
       "<q>I visited the dark tower earlier today,</q> you announce.
       Bob shakes his head and looks distinctively uncomfortable.\b
       <q>You shouldn't have done that,</q> he chides you. <q>But at least
        you didn't go at night. You <i>really</i> don't want to go there
        at night!</q> "
    ;

    + AskTellTopic @tWeather
       "<q>Nice weather we're having, don't you think?</q> you ask.\b
       <q>Not bad,</q> he concurs. "
    ;
:::

\
[]{#varying}

## Varying the Response

Although the previous example might do for a game in which Bob is little
more than a device for dishing out information about the dark tower, it
doesn\'t make him very life-like. If he\'s repeatedly asked the same
question he will repeatedly give the same answer, like a robot or a
talking book. One way of making an actor seem just a litte more
life-like is to vary the responses given to the same question, even if
only a little. The easiest way to do that is to mix a TopicEntry class
in with an EventList class, and then use the eventList property to give
a list of different responses, each of which can be used in turn. Once
again the TopicEntry template makes it possible to do this in a succinct
way, for example:

::: code
     + AskTopic, StopEventList @darkTower
       [
          '<q>What do you know about the dark tower?</q> you ask.\b
          <q>You really don\'t want to go there,</q> he tells you with a little shudder,
          <q>you really don't.</q>',
          
          '<q>What\'s so bad about the dark tower?</q> you want to know.\b
           <q>It all goes back to -- no, it\'s best not to talk about it,</q> he breaks
           off. ',
           
          '<q>Why don\'t you want to talk about the dark tower?</q> you ask.\b
           In reply Bob merely shakes his head and mutters something inaudible. '
          
       ]
    ;
     
:::

A TopicEntry can be mixed-in with any EventList class like this, but for
this type of situation a StopEventList is usually the most appropriate.

\
[]{#conditional}

## Conditional Responses

Even with a basic ask/tell system there are probably occasions when you
want to vary the response according to some condition. For example, you
might want the player character to say something quite different about
his visit to the dark tower depending on whether or not he\'s actually
seen it yet. You could do this by writing a topicResponse() method with
lots of if statements in it, but the adv3Lite library offers a better
way: defining multiple TopicEntries that match the same objects but
using a combination of there matchScore and isActive properties to
determine which one is chosen. For example:

::: code
    + TellTopic [tVisit, darkTower]
       "<q>I'm thinking of making a visit to the dark tower later today,</q> you
        announce. <q>I've heard so much about it, I want to see it for myself.</q>\b
        <q>No you don't,</q> he warns you. <q>Curiosity killed the cat, and there
        are some things worse than death -- <i>much</i> worse. If you value your
        immortal soul you won't go anywhere near that evil place!</q>"
    ;


    + TellTopic +110 [tVisit, darkTower]
       "<q>I visited the dark tower earlier today,</q> you announce.
       Bob shakes his head and looks distinctively uncomfortable.\b
       <q>You shouldn't have done that,</q> he chides you. <q>But at least
        you didn't go at night. You <i>really</i> don't want to go there
        at night!</q> "
        
        isActive = (gPlayerChar.hasSeen(darkTower))
    ;
:::

In this above example, if the player types TELL BOB ABOUT VISIT or T
TOWER before the player character has seen the dark tower, the first
response (\"I\'m thinking of visiting\...\") will be displayed, since
the isActive property of the second one will be false. But if the player
types T VISIT or TELL BOB ABOUT TOWER after the player character has
seen the dark tower, then the isActive property of the second response
(\"I visited the dark tower\...\") will be true, and since it has the
higher matchScore, it will be the one chosen. The [+110]{.code} in the
template gives the second TellTopic a matchScore of 110, which is higher
than the default value of 100.

You can of course simply make a TopicEntry unreachable until its
isActive property becomes true, without providing an alternative
TopicEntry that matches the same topic or topics; indeed, this is
probably a common situation. But it then raises the problem of what to
do instead; i.e. how to cope with the situation where the player types
ASK BOB ABOUT X or TELL BOB ABOUT Y and we haven\'t defined a response
(or at least a currently available response) for X or Y. The best way to
cope with that is by the use of DefaultTopics, which is what we shall
look at next.

\
[]{#default}

## Default Responses

However many AskTopics and TellTopics you define for each NPC in your
game, the people playing your game will inevitably try to ask or tell
your NPCs about topics you haven\'t covered. In that case, you need to
make your NPCs respond in a way that doesn\'t too blatantly declare \"I
have not been programmed to respond in this area\", while also making it
clear to the player that the topic enquired about isn\'t worth pursuing.
For this purpose you can define a **DefaultAskTopic** and a
**DefaultTellTopic** to respond to attempts to ask or tell the NPC about
topics you haven\'t specifically allowed for. You can also define a
**DefaultAskTellTopic** to cover both.

How much effort you need to put into this depends on how important your
NPC is to your game. For a minor NPC or a game which in primarily
puzzle-driven as opposed to character-driven (say) it might suffice to
do this:

::: code
    + DefaultAskTellTopic
        "Bob merely shrugs and shakes his head. "
    ;
:::

In a game where the characters are more important, and you want to give
them a bit more personality and make them a bit more lifelike, you\'ll
probably want to define a separate DefaultAskTopic and DefaultTellTopic
for at least each of the major NPCs, and you\'ll probably want to vary
the response they give by mixing in the DefaultTopic class with an
EventList class, ShuffledEventList probably being the best for this
situation. You may also want to use these DefaultTopics to add to the
characterization of your NPCs.

Writing the DefaultTellTopic is probably easier, since here you can have
the NPC apparently react to what the player character supposedly says:

::: code
    + DefaultTellTopic, ShuffledEventList
      [
         '<q>Fascinating!</q> Bob declares. ',
         '<q>Well I never!</q> says Bob. ',
         '<q>How interesting!</q> Bob remarks. ',
         'Bob listens intently to your every word. ',
         '<q>Yes, indeed!</q>, says Bob. '
      ]
    ;
:::

Defining the DefaultAskTopic follows the same principles, but can be a
little trickier, since you have to give the NPC a plausible reason for
refusing to answer, but you can\'t have him plead ignorance, otherwise
you might end up with exchanges like the following:

::: cmdline
    >ask bob about his mother.
    "I wouldn't know about that," he tells you.

    >ask bob about himself
    "I haven't the foggiest notion," Bob confesses.

    >ask bob about the weather
    "I don't know anything about it," he insists.
:::

A DefaultAskTopic might look like this:

::: code
    + DefaultAskTopic
       [
          '<q>Let\'s change the subject,</q> he suggests with a wry smile. ',
          'Halfway through your question Bob erupts into a fit of coughing. ',
          'He responds with an expressive shrug. ',
          '<q>Let me see,</q> he begins, suddenly breaking off with a deep frown 
           as some random train of thought apparently leads him off in another direction. ',
          '<q>Where would you like me to start?</q> he riposts, smiling gently.
          <q>Maybe some other time.</q> '
          
       ]
    ;
:::

You may still get some incongruous responses, that\'s almost impossible
to avoid given that the player is free to type absolutely anything, but
on the whole this type of approach should be acceptable.

One final point to note: if you put a DefaultTopic in an ActorState it
will mask any corresponding TopicEntries located directly in the Actor
(which that ActorState is current). For example, if you put a
DefaultAskTopic in the BobAnimatedState ActorState, then while
BobAnimatedState is the current ActorState, no AskTopics directly
located in Bob will be reachable. This may or may not be what you want.
If it isn\'t, don\'t put any DefaultTopics in the ActorState.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Actors](actor.htm){.nav} \> Basic
Ask/Tell\
[[*Prev:* AgendaItems](agenda.htm){.nav}     [*Next:*
ActorTopicEntry](actortopicentry.htm){.nav}     ]{.navnp}
:::
