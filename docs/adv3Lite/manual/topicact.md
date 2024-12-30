::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Actions](action.htm){.nav} \>
Topic Actions\
[[*Prev:* Literal Actions](literalact.htm){.nav}     [*Next:* Querying
the World Model](query.htm){.nav}     ]{.navnp}
:::

::: main
# Topic Actions

At first sight TopicActions (and TopicTActions) look a little like
LiteralActions, in that they involved *grammatical* objects that aren\'t
(or may not be) implemented as physical objects in the simulated world
model. For example, the command THINK ABOUT DEMOCRACY, is a command to
think about the topic of democracy, not a command involving any physical
simulated object called Democracy. Similarly, the command LOOK UP
DEMOCRACY IN DICTIONARY is a command to look up the topic of democracy
in a book; the dictionary is a physical game object, but the topic is
not. The first of these commands is a **TopicAction**, and the second is
a **TopicTAction**.

But there is an important difference between topics and literals.
Whereas the literal target of a LiteralAction or LiteralTAction is never
an object defined in game code, the topic target of a TopicAction or
TopicTAction usually is. The target may be a [Topic](topic.htm) or it
may be a physical game object (i.e. a Thing) referred to as though it
were a Topic (for example there could be an orb of destiny object
defined as a Thing in the game that can be thought about via a THINK
ABOUT ORB OF DESTINY command).

In this section we shall see how to work with and define both types of
action.

[]{#working}

## Working with TopicActions and TopicTActions

If the player issues a TopicAction command (e.g. THINK ABOUT DEMOCRACY)
the topic element of the command ends up in gCommand.dobj. It the player
issues a TopicTAction the topic element may end up in either
gCommand.dobj or gCommand.iobj, depending on the *grammatical* role of
the topic. So, for example, if the command were CONSULT DICTIONARY ABOUT
DEMOCRACY, the topic element would end up in gCommand.iobj. As with
LiteralTActions so with TopicTActions, the library may swap the Command
object\'s iobj and dobj round so that the curDobj of the action is
always the physical object involved and the curIobj holds the topic.

[]{#resolvedtopic}

But what do we mean by \'the topic\' in this case? The curDobj of a
TopicAction, or the curIobj of a TopicTAction, always ends up pointing
to a **ResolvedTopic** object. This is a wrapper for all the Topics and
Things matched by the command, and defines the following properties and
methods:

-   **topicList**: a list of all the Things and Topics known to the
    player character that match the player\'s input
-   **tokens**: a list of the tokens (individual words) the player used
    to refer to the topic
-   **getTopicText**: a reconstruction of the text the player used to
    describe the topic, reconstructed by concatenating the tokens.
-   **theName**: simply returns the value of getTopicText; this can be
    useful in contexts where code expects any Mentionable to define a
    theName property.
-   **getBestMatch**: returns the Topic object that this ResolvedTopic
    considers the best match to what the player typed.

For example, if the player typed the command THINK ABOUT BALL, and the
game included a redBall object, a blueBall object, and a tGalaBall
Topic, the topicList property of the resulting ResolvedTopic would
contain \[redBall, blueBall, tGalaBall\] and the tokens property
\[\'ball\'\]. If, however, the player had typed THINK ABOUT GALA BALL
the topicList property would have held just \[tGalaBall\] and the tokens
property \[\'gala\', \'ball\'\] (assuming the the player character knows
about all three objects at the time the command is issued).

If the player types a command involving a topic that doesn\'t match any
Thing or Topic the player character knows about (either because no such
Thing or Topic exists in the game, or because the player character is
yet to learn of its existence), the parser creates a temporary new Topic
object and places it in the topicList of the ResolvedTopic. Whatever the
player used to describe the topic is assigned to the temporary Topic\'s
vocab property, and hence to its name property. The temporary Topic
object is anonymous and won\'t match any Topic or Thing defined in game
code, but its getTopicText() property could be matched to a regular
expression, for example (the [TopicEntry](topicentry.htm) class caters
for this, for example).

If you\'re handling a TopicAction or TopicTAction that\'s already
defined in the adv3Lite library, you don\'t have to worry about any of
this too much, since all these library-defined TopicActions and
TopicTActions are designed to be handled by TopicEntry objects, so all
you need to do is to define the appropriate TopicDatabase and the
TopicEntries within it (as in the [Consultables](topicentry.htm) and
[Thoughts](thought.htm) above, and in the conversational commands
discussed later on in this manual).

You can get at the current ResolvedTopic (of a TopicAction or
TopicTAction) and its corresponding getTopicText and getBestMatch
properties with the macros **gTopic**, **gTopicText** and
**gTopicMatch** respectively.

\
[]{#defining}

## Defining New TopicActions and TopicTActions

It\'s hard to think of any useful examples of TopicActions and
TopicTActions that aren\'t already defined in the library, but if, say,
you wanted to define a WorryAbout command that did something different
from ThinkAbout you\'d start by defining the VerbRule thus:

::: code
    VerbRule(WorryAbout)
        ('worry' | 'fret') 'about' topicDobj
        : VerbProduction
        action = WorryAbout
        verbPhrase = 'worry/worrying (about what)'
        missingQ = 'what do you want to worry about'
    ;
:::

You\'d probably then handle worries in much the same way as the library
handles Thoughts:

::: code
    DefineTopicAction(WorryAbout)
        execAction(cmd)
        {
           worryManager.handleTopic(cmd.dobj.topicList);
        }
    ;


    worryManager: PreinitObject, TopicDatabase
        execute()
        {        
            forEachInstance(Worry, new function(t) {
                if(t.location == self)
                    addTopic(t);
            });
        }   
        
        handleTopic(top)
        {
            local match = getBestMatch(worryList, top);
            if(match == nil)
                say(noWorryMsg);
            else
                match.topicResponse();
        }
        
        worryList = []
        
        noWorryMsg = 'You\'re really not at all worried about that right now. '
    ;


    /* 
     *   A kind of TopicEntry that responds to a WORRY ABOUT command when located in
     *   the worryManager object. These can be defined just like any other topic
     *   entry objects, and work in just the same way as ConsultTopics.
     */
    class Worry: TopicEntry
        includeInList = [&worryList]
    ;

    class DefaultWorry: Worry
        matchTopic(top)
        {
            return matchScore + scoreBoost;
        }
        
        matchScore = 1
    ;
:::

Define a TopicTAction requires much the same steps as definind a
TopicAction, except that the VerbRule needs two object slots, one of
them being either topicDobj or topicIobj (depening on its grammatical
role; remember that in either case the TopicTAction will treat the
physical object involved as actual direct object). For example, to
define a BotherAbout command we might define:

::: code
    VerbRule(BotherAbout)
        ('bother' | 'worry' | 'vex') singleDobj 'about' topicIobj
        : VerbProduction
        action = BotherAbout
        verbPhrase = 'bother/bothering (whom) (about what)'
        missingQ = 'whom do you want to bother; what do you want to bother it about'
        dobjReply = singleNoun
    ;  
      
    DefineTopicTAction(BotherAbout)
    ;
:::

The next step would be to define default handling for this on Thing, to
the effect that an inanimate object can\'t be bothered:

::: code
    modify Thing
      dobjFor(BotherAbout)
      {
          preCond = [objAudible]
          verify() { illogical(cannotBeBotheredMsg); }
      }
      
      cannotBeBotheredMsg = '{The subj dobj} {can\'t} be bothered. '
    ;
:::

You\'d next need to define some handling on the actor class analogous to
the way it handles conversational topics like AskTopics, but that can be
left as an exercise for the interested reader.

\

## How the Library Matches ResolvedTopics to Topic Entries

You may be wondering how the library uses the topicList property of a
ResolvedTopic (which, you may recall, ends up occupying either the dobj
or the iobj slot of the current Command object) when matching a
topic-involving command (such as LOOK UP SELVAGEE IN DICTIONARY) to a
database of TopicEntries. The answer is that the various handleTopic
routines the library uses try every Topic in the ResolvedTopic\'s
topicList against every available TopicEntry and uses the one that gives
the best match (i.e., the one that returns the highest matchScore). If
there\'s a tie, the library simply chooses one at random (or rather, the
first one it came across that had the highest matchScore, but you\'d be
unwise to rely on this precise behaviour in your own game code). Amongst
other things, this behaviour ensures that the player is never asked to
disambiguate a topic, but it does put the onus on game authors to take a
little bit of care in defining TopicEntries. It\'s fair enough if the
player types ASK AUNT MAUDE ABOUT BALL expecting a reply about the blue
beach ball and instead gets a reply about last month\'s gala ball ---
after all if the player character knows about both topics the player has
to recognize that the command was ambiguous --- but it should be made
absolutely clear to the player precisely what question Aunt Maude is
answering under such circumstances. Also, if it\'s in fact more
important for the player to learn Aunt Maude\'s views on the gala ball
than on the blue beach ball, but she has Topic Entries for both, it\'s
probably a good idea to define the gala ball TopicEntry with a higher
matchScore so that it\'s the one that ends up getting chosen in cases of
ambiguity.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Actions](action.htm){.nav} \>
Topic Actions\
[[*Prev:* Literal Actions](literalact.htm){.nav}     [*Next:* Querying
the World Model](query.htm){.nav}     ]{.navnp}
:::
