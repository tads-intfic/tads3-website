::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [The Art of
Conversation](conversation.htm){.nav} \> Queries and Suggestions\
[[*Prev:* Ask, Tell, Give, Show](asktell.htm){.nav}     [*Next:* Hello
and Goodbye](hello.htm){.nav}     ]{.navnp}
:::

::: main
# Queries and Suggestions

We\'ve set things up so that at some point in the game the player
character can learn the flight attendant\'s name. Presumably this comes
about because he asks her --- or at least has the opportunity of asking
her. But this may not be the only thing the player character wants to
ask her about herself.

In the conventional ASK/TELL system we could create a \'name\' topic and
then define a TopicEntry that responds to ASK ATTENDANT ABOUT NAME, but
this doesn\'t seem altogether a natural way to converse. Or we could set
up a TopicEntry that refers to the angela object itself, something like:

::: code
    + AskTopic @angela
        "<q>Tell me about yourself,</q> you say.\b
        <q>I'm called Angela,</q> she tells you. "
    ;
:::

We might locate this directly in the angela object (hence only the
single + sign) on the basis that the player character might ask Angela
about herself at any point in the game. That\'s fair enough, but there
are several other things we could improve. For one thing, it may not
occur to every player to try ASK ATTENDANT ABOUT HERSELF; perhaps we
might want to drop a hint that this might be a good idea. For another,
the syntax ASK ATTENDANT ABOUT HERSELF doesn\'t give the player that
much agency. How do we know that it\'s the attendant\'s name he wants to
ask about, rather than, say, whether she enjoys her work or what she\'s
doing that evening? Let\'s see what we can do about each of these issues
in turn.

## Suggesting Topics of Conversation

The adv3Lite library allows you to suggest topics of conversation to the
player, either in response to an explicit TOPICS command typed by the
player, or when you the game author think it would be appropriate to do
so (e.g. by using a [\<.topics\>]{.code} tag). But for this to work, the
game needs to know which topics to suggest, and what to call them. In
adv3Lite all you have to do is to give a TopicEntry a name property and
the game will know to suggest it by that name. In this case, for
example, we could write this:

::: code
    + AskTopic @angela
        "<q>Tell me about yourself,</q> you say.\b
        <q>I'm called Angela,</q> she tells you. "
        
        name = 'herself'
    ;
:::

Then, once the player character is in conversation with Angela, the
player can type TOPICS and the game will respond with \"You could ask
her about herself.\"

Now let\'s add a second topic of conversation. Suppose the player
character wants to know when the plane is going to leave. We could use
the flight departures Topic we\'ve already defined to create a new
AskTopic for Angela:

::: code
    + AskTopic @tFlightDepartures    
        "<q>When is this plane going to leave?</q> you ask.\b
        <q>Just as soon as the pilot comes aboard,</q> she tells you. <.reveal
        pilot-awaited> "   
        
        name = 'flight departures'
    ;
:::

Note the use of the [\<.reveal pilot-awaited\>]{.code} tag here to note
that our protagonist has just learned the highly significant fact that
there isn\'t yet a pilot aboard. Then consider something else: the way
we previously defined the tFlightDepartures Topic object already gave it
a name of \'flight departures\', which we\'re now repeating in the name
property of the AskTopic. In this sort of situation we can avoid the
repetition by telling the TopicEntry to take its name property from that
of its matchObj (here tFlightDepartures). To do that we can just define
[autoName = true]{.code} on the TopicEntry instead of spelling out the
name explicitly:

::: code
    + AskTopic @tFlightDepartures    
        "<q>When is this plane going to leave?</q> you ask.\b
        <q>Just as soon as the pilot comes aboard,</q> she tells you. <.reveal
        pilot-awaited> "   
        
        autoName = true
    ;
:::

In this case this doesn\'t quite give us what we\'d ideally like, since
the game will now suggest \"You could ask her about the flight
departures\" and we don\'t really want the definite article here. We
could fix that by tweaking the way we defined the vocab property of the
tFlightDepartures Topic object:

::: code
    tFlightDepartures: Topic '() flight departures; plane; times';
:::

Adding the () at the start of the vocab property tells adv3Lite to treat
the name as a qualified name and so omit the article.

The reply to the question about flight departures invites a further
question about the missing pilot, but only when the player character
knows that the pilot is missing:

::: code
    + AskTopic @tPilot
        "<q>What's happened to the pilot?</q> you ask.\b
        <q>I don't know; we're still waiting for him,</q> she replies. <q>But don't
        worry; I'm sure he'll turn up any moment now.</q> "

        autoName = true
        isActive = gRevealed('pilot-awaited')
    ;
:::

This of course requires us to define the tPilot Topic somewhere; the
best place would be wherever we\'ve put our other Topic objects:

::: code
    tPilot: Topic 'pilot';
:::

If you try compiling and running the game now and going to talk to
Angela, you\'ll find that when you first type TOPICS the game will
respond with \"You could ask her about herself or about flight
departures.\" The pilot topic isn\'t suggested, since it isn\'t
available until its isActive property becomes true, so there\'s no point
in suggesting it. Once the player has typed ASK ATTENDANT ABOUT
DEPARTURES and received the response about waiting for the pilot, the
topic does become available and so will be suggested.

One other thing you\'ll find is that once you\'ve asked about a
suggested topic, it\'s no longer suggested. The game won\'t keep
suggesting topics the player has already tried.

For the full story on suggesting topics of conversation to the player,
see the section on [Suggesting Conversational
Topics](../manual/suggest.htm) in the Adv3Lite Library Manual.

\

## Queries

We suggested earlier on that specific questions we might want to ask
about Angela might include what her name is, whether she enjoys her
work, or whether she\'s free for dinner that evening. While the ask/tell
system would allow us to provide responses to ASK WOMAN ABOUT NAME, ASK
ABOUT WORK and ASK ABOUT DINNER, none of these quite supplies the
precise nuance we\'re looking for. Allowing players to pose these more
specific kind of questions is beyond the ability of the basic ask/tell
system. One way in which the adv3Lite conversation system extends beyond
basic ask/tell, however, is in allowing for precisely this kind of
question. It does this through a special kind of TopicEntry called a
**QueryTopic**, which can respond to questions of the form ASK
WHERE\|WHEN\|WHO\|WHAT\|WHY\|WHETHER\|HOW\|IF such-and-such.

The question being put to an NPC via a QueryTopic consists of two parts:
the *type* of query (\'who\', \'what\', \'why\', \'when\', \'what\',
\'whether\', \'if\' or \'how\'), known as the **qtype**, and the topic
representing the such-and-such part. A QueryTopic for asking Angela
about her name might thus look like this:

::: code
    + QueryTopic 'what' @tHerName
        "<q>What's your name?</q> you ask.\b
        <q>Angela,</q> she replies. "
    ;
:::

This would then require us to define a [tHerName]{.code} topic object
that might look something like this:

::: code
    tHerName: Topic 'her name is; your';
:::

We add \'your\' as an additional vocab word in case the player types
WHAT IS YOUR NAME (some players will certainly try this, and we\'ll want
it to work; players can be guaranteed to ignore the wording you actually
give them and then complain that your game is buggy when they try
everything *but* the wording you gave them). A QueryTopic defines
[autoName = true]{.code} by default, so we want to define the name part
of the topic vocab to read well after \"You could ask her what \"; the
game will supply the suggestion automatically, since players can\'t be
expected to guess what QueryTopics you\'ve implemented and the
possibilities are simply too great for random experimentation to be a
fruitful player strategy.

This works, but unless you\'re going to use the \'her name is\' topic on
a number of different QueryTopics, it may seem a bit tedious to have to
define it in addition to the QueryTopic. Adv3Lite therefore allows you
to define it directly on the QueryTopic thus:

::: code
    + QueryTopic 'what' 'her name is; your'
        "<q>What's your name?</q> you ask.\b
        <q>Angela,</q> she replies. "
    ;
:::

This actually does precisely the same thing; it simply makes the library
define the Topic object for you. In this case the library will define a
new Topic object with a vocab property of \'her name is; your\' and make
it the matchObj of your QueryTopic. This is probably easier when you\'d
otherwise have to define a separate Topic you\'d never use anywhere
else.

In this kind of case you can, if you like, run the qtype string and the
topic vocab string into one, like this:

::: code
    + QueryTopic 'what her name is; your'
        "<q>What's your name?</q> you ask.\b
        <q>Angela,</q> she replies. "
    ;
:::

When the library doesn\'t find a separate qtype (i.e. when it finds only
one string defined on the template) it takes the first word of the
string it finds to be the qtype (\'who\', \'what\', \'when\', etc.) and
the remainder of the string to be vocab of the associated Topic. This
actually appears quite transparent, since the single string \'what her
name is\' indeed corresponds to the question ASK WHAT HER NAME IS, but
it\'s well to be aware that things are a little more complicated behind
the scenes.

Although we now have a QueryTopic that responds to ASK WHAT HER NAME IS
(or, indeed, to WHAT IS YOUR NAME), it doesn\'t quite do everything we
want. When Angela tells the player character her name, we want her
displayed name to change from \'the flight attendant\' to \'Angela\'. To
do that we need both to change her name property and to set [proper =
true]{.code} (to indicate that she now has a proper name), so that
she\'s not referred to as \'the Angela\'. It will be convenient to
define a [makeProper()]{.code} method that does this for us and then
returns her name:

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
    ;
:::

We can then call this method in the QueryTopic so that it changes her
name to Angela at the same time as telling the player character that
that\'s what her name is. We don\'t want to do this twice; once the
player character has asked her name once, there\'s no need to do it
again, so at the same time we want to define the QueryTopic so that its
isActive property becomes nil once Angela has a proper name:

::: code
    + QueryTopic 'what' 'her name is; your'
        "<q>What's your name?</q> you ask.\b
        <q><<getActor.makeProper>>,</q> she replies. "
        
        isActive = !getActor.proper
    ;
:::

One further point. We said above that this QueryTopic would respond to
ASK WHAT HER NAME IS or WHAT IS YOUR NAME, but what happens if the
player types WHAT\'S YOUR NAME? It turns out that we don\'t need to
worry about this, since the library will expand the WHAT\'S into WHAT IS
before attempting to match the grammar. It doesn\'t do this for
everything, just for input that looks like it might be trying to match a
QueryTopic, but it does mean that when we\'re defining the vocab for a
QueryTopic we don\'t need to worry about the player using the qtype word
(\'who\', \'what\', \'why\', \'when\', \'where\' or \'how\') with
apostrophe-s; so long as we\'ve included \'is\' among our vocab words
our QueryTopic will cope just fine.

Another question we wanted to be able to ask Angela is whether she
enjoys her work. Given the plot of this story, the answer she gives is
likely to be dependent on what ActorState she\'s in, so we might want to
define different QueryTopics for different ActorStates. Since it will
then be used by several QueryTopics it\'s probably worth defining a
separate Topic object for this:

::: code
    tEnjoyWork: Topic 'she enjoys her work; you enjoy your like likes; job';
:::

Here the name section \'she enjoys her work\' provides the text for a
suggestion like \'ask if she enjoys her work\', while the rest of the
vocab allows for alternative phrasings like DO YOU LIKE YOUR JOB. The
adv3Lite parser recognizes questions beginning DO as equivalent to
commands beginning ASK IF, so we only need to supply the words that
might follow DO.

We can then go ahead and define the QueryTopic that might be located in
the angelaGreetingState:

::: code
    ++ QueryTopic 'if|whether' @tEnjoyWork
       "<q>Do you enjoy your work?</q> you ask.\b
       <q>Of course, sir,</q> she replies with a bland smile. "    
    ;
:::

Note how here we define the qtype part as \'if\|whether\'. This means
that QueryTopic will respond either to ASK IF\... or ASK WHETHER\...,
since the two phrasings could be used with the same meaning.

Here\'s the version of the QueryTopic we might locate in
angelaTalkingState, which is the state Angela will be in if the player
character talks with her on the Jetway while she\'s assisting the
passengers who have just been forced off the plane.

::: code
    ++ QueryTopic 'if|whether' @tEnjoyWork
       "<q>Do you enjoy your work -- at times like these?</q> you ask.\b
       <q>At times like these...</q> she leaves the sentence unfinished with an
       expressive grimace. "    
    ;
:::

And this is the version we might locate under the angelaSeatedState
(when the plane has been taken over by the drug barons):

::: code
    ++ QueryTopic 'if|whether' @tEnjoyWork
        "<q>Are you enjoying your work now?</q> you ask.\b
        <q>I'll be glad when this particular flight is over,</q> she replies
        quietly. "       
    ;
:::

The third personal question we suggested the player character might put
to Angela is what she\'s doing tonight. The answer might vary a bit
according to circumstances: we\'ll suppose she\'ll give a different
answer once the player character boards the plane wearing a pilot\'s
uniform from what she says before. To implement this we can locate one
QueryTopic directly in the angela object to represent her earlier reply,
and another in angelaSeatedState which will take precedence towards the
end of the game. First the more general answer to be located directly in
angela:

::: code
    + QueryTopic, StopEventList 'what' @tDoingTonight
        [
            '<q>What are you doing tonight?</q> you ask.\b
            She cocks one eyebrow at you. <q>I have my plans,</q> she replies
            vaguely. ',
            
            '<q>What <i>are</i> you doing tonight?</q> you insist.\b
            <q>I don\'t think that\'s any of your business,</q> she replies, with
            rather a bleak smile. <q>Do you?</q> ',
            
            '<q>About tonight...</q> you begin.\b
            She cuts you off by pressing her lips together and raising her eyebrows
            in a mildly disapproving manner, as if to say, <q>That topic is
            closed.</q> '       
        ]
    ;
:::

And then the QueryTopic to be located in angelaSeatedState (i.e. once
the drug cartel has replaced the regular passengers and the player
character returns to the plane wearing a pilot\'s uniform).

::: code
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
    ;
:::

For either of these to work, we also have to define the Topic object
they both use:

::: code
    tDoingTonight: Topic 'she\'s doing tonight; she is you are';
:::

There\'s one final QueryTopic we could add at this point. The question
asked about flight departures is \'When is this plane going to leave?\'
which suggests a QueryTopic like this:

::: code
    + QueryTopic 'when' 'this plane is going to leave; depart take off'
        "<q>When is this plane going to leave?</q> you ask.\b
        <q>Just as soon as the pilot comes aboard,</q> she tells you. <.reveal
        pilot-awaited> "
    ;
:::

The problem with this, however, is that it effectively duplicates the
existing AskTopic for tFlightDepartures. What we\'d ideally like is a
single TopicEntry that can respond in the same way to either ASK ABOUT
FLIGHT DEPARTURES or ASK WHEN THE PLANE IS GOING TO LEAVE. We can do
that by deleting the AskTopic, retaining the QueryTopic, and adding
[askMatchObj = tFlightDepartures]{.code} to the definition of the
QueryTopic. This tells the QueryTopic that it should also behave like an
AskTopic that matches tFlightDepartures:

::: code
    + QueryTopic 'when' 'this plane is going to leave; depart take off'
        "<q>When is this plane going to leave?</q> you ask.\b
        <q>Just as soon as the pilot comes aboard,</q> she tells you. <.reveal
        pilot-awaited> "
        
        askMatchObj = tFlightDepartures
    ;
:::

Actually, what it does behind the scenes is a bit more complex than
that, but we don\'t need to worry about the technicalities for now. In
essence, it makes the game *behave* as if the QueryTopic were also an
AskTopic matching tFlightDepartures.

\

## Tying it All Together

We\'ve now achieved part of what we set out to do, but not all of it.
Our original aim was to have ASK WOMAN ABOUT HERSELF to suggest three
further topics, namely \"ask her what her name is\", \"ask if she enjoys
her work\" and \"ask what she\'s doing tonight\", but as we have things
so far the QueryTopics we\'ve defined are quite unrelated to the
AskTopic for ASK HER ABOUT HERSELF. The way to relate them is through
the **convKeys** property. This simply consists of an arbitrary string
(or a list of arbitrary strings) that we can use to group and refer to
TopicEntries and groups of TopicEntries. To make one TopicEntry suggest
a number of other ones we need to define the **keyTopics** property of
the suggesting TopicEntry to be the same as the convKeys property (or at
least one of the strings in the convKeys list) of the TopicEntries to be
suggested.

In this case let\'s call the convKey we want to use \'angela\'. It could
be anything we liked, but this seems a meaningful name for a set of
topics that relate to Angela herself. We then need to define keyTopics =
\'angela\' on the \'ask her about herself\' AskTopic, and convKeys =
\'angela\' on the QueryTopics for ASK WHAT HER NAME IS, ASK IF SHE
ENJOYS HER JOB and ASK WHAT SHE\'S DOING TONIGHT:

::: code
    + AskTopic @angela
        keyTopics = 'angela'
        
        name = 'herself'
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
            rather a bleak smile. <q>Do you?</q> ',
            
            '<q>About tonight...</q> you begin.\b
            She cuts you off by pressing her lips together and raising her eyebrows
            in a mildly disapproving manner, as if to say, <q>That topic is
            closed.</q> '       
        ]
        
        convKeys = 'angela'
    ;
:::

And so on for the other QueryTopics we\'ve defined that relate to what
Angela\'s doing tonight or whether she enjoys her work.

This almost does what we want, but perhaps not quite, for when the
player types TOPICS at the start of the first conversation with Angela,
the three QueryTopics that are meant to be listed as a result of asking
Angela about herself are listed alongside \"You could ask when this
plane is leaving, or ask her about herself\". If we want the topic
suggestions to act like a kind ot two-tier menu, with only the main
topics appearing in response to a TOPICS command, and the subtopics only
appearing in response to a command like ASK ANGELA ABOUT HERSELF, then
we need to carry out a couple of extra steps. First we need to define
the **suggestionKey** property of the actor to hold a convKey used on
the top-level TopicEntries. Again, this can be anything we like, but
let\'s call it \'top\':

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
:::

Now the TOPICS command will only list those TopicEntries whose convKeys
include \'top\'. We thus need to give a convKey of \'top\' to the ASK
ABOUT HERSELF and ASK ABOUT PILOT AskTopic, and the ASK WHEN THIS PLANE
IS LEAVING QueryTopic. We could do this by adding [convKeys =
\'top\']{.code} to each of these in turn, but we can save a bit of
typing (and perhaps make our intentions a bit clearer) by putting these
three TopicEntries together in the same TopicGroup and defining the
convKeys property on the TopicGroup:

::: code
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
:::

If after all this you\'re beginning to lose track of what TopicEntry
should go where, you can take a look at the
[listing](convsumm.htm#listing) at the end of the chapter. If you\'re
starting to feel that what we\'ve just covered seems a bit elaborate and
complicated, don\'t worry: no one could expect you take it all in after
this rather brief introduction, and you don\'t have to use any of these
techniques in your own work if you don\'t want to (although mastering
them may help you create more lifelike NPCs). The main point here has
been to illustrate some of the things you can do with the adv3Lite
conversation system. If you want to learn more about what we\'ve just
covered, or when you need to refresh your own memory to apply similar
techniques in your own work, you can always consult the *adv3Lite
Library Manual*, particularly the sections on [Suggesting Conversational
Topics](../manual/suggest.htm), [Special
Topics](../manual/specialtopic.htm) and [Topic
Groups](../manual/topicgroup.htm). We shall in any case be meeting many
of these concepts again in the remainder of this chapter.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [The Art of
Conversation](conversation.htm){.nav} \> Queries and Suggestions\
[[*Prev:* Ask, Tell, Give, Show](asktell.htm){.nav}     [*Next:* Hello
and Goodbye](hello.htm){.nav}     ]{.navnp}
:::
