::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Actors](actor.htm){.nav} \>
Suggesting Conversational Topics\
[[*Prev:* ActorTopicEntry](actortopicentry.htm){.nav}     [*Next:*
Special Topics](specialtopic.htm){.nav}     ]{.navnp}
:::

::: main
# Suggesting Conversational Topics

Many players hate \'guess the topic\' puzzles almost as much as they
hate \'guess the verb\'. One way to avoid such annoyances is to provide
the player a list of conversational topics s/he can fruitfully pursue,
either in response to a specific request (the TOPICS command) or when
the library or the game code thinks it a good idea. You certainly don\'t
need to provide the player with a list of *every* available topic, since
in a game with quite fully-implemented NPCs the list of every available
topic might be overwhelming. Moreover, in some games the topics to be
pursued may be so obvious that there\'s no need to suggest them at all
(in which case there\'s no need to use the facility to suggest topics).
Often, however, it may be helpful to nudge the player towards the most
fruitful topics of conversation at any one moment, and the best way to
do that may be to provide a list of topics. If we are using any
SayTopics and/or QueryTopics in our game, we must do this in any case,
since the player cannot be expected to guess the wording that would
trigger them.

The [suggestedTopicLister]{.code} has a **hyperlinkSuggestions**
property. If this is set to true then (provided the player is using an
HTML-capable interpreter) the list of topic suggestions will be
hyperlinked, allowing players to select a suggested topic just by
clicking on the link. By default this property is nil unless the
[Command Help](../../extensions/docs/cmdhelp.htm) extension is present.

In the adv3 library you have to mix in your TopicEntry class with a
SuggestedTopic class in order for it to be suggested. In adv3Lite you
simply define the name property of the TopicEntry in question. This can
be done in either one of two ways:

1.  Define the name property explicitly, e.g. [name = \'the
    troubles\']{.code}.
2.  Define the name implicitly by setting the **autoName** property to
    true. This sets the name property of the TopicEntry to the theName
    property of its matchObj (or of the first object in its matchObj
    list if matchObj is defined as a list). If you\'ve explicitly
    defined the name property or there is no matchObj, setting autoName
    to true has no effect.

The following two definitions are therefore equivalent (assuming the
darkTower object has a name of \'dark tower\'):

::: code
    + AskTopic @darkTower
       "<q>Tell me about the dark tower,</q> you insist.\b
        <q>Oh no!</q> says Bob. <q>We don't talk about that -- ever!</q>"
        
        name = 'the dark tower'
    ;

    + AskTopic @darkTower
       "<q>Tell me about the dark tower,</q> you insist.\b
        <q>Oh no!</q> says Bob. <q>We don't talk about that -- ever!</q>"
        
        autoName = true
    ;
:::

[]{#suggestas}

In either of the above examples the dark tower would be presented as
something the player could ask about (\'You could ask Bob about the dark
tower\...\'), because it\'s obvious that an AskTopic has to be asked
about. With compound types of ActorTopicEntry (e.g. AskTellTopic) it\'s
not so obvious whether it should be suggested as something to ask about
or tell about. In cases such as these the library simply makes a default
choice (for example, an AskTellTopic would be suggested as something to
ask about), but if the library\'s default choice isn\'t what you want in
any particular case you can override it by using the TopicEntry\'s
**suggestAs** property to indicate how the topic should be suggested.
For example, to make the game suggest \'You could tell Bob about your
visit\' with an AskTellTopic you could so the following:

::: code
    + AskTellTopic @tVisit
       "<q>I visited the dark tower this morning,</q> you announce.\b
        <q>You shouldn't have done that, you really shouldn't,</q> Bob
        replies with a shudder. "
        
        autoName = true
        suggestAs = TellTopic
    ;

    ....

    tVisit: Topic '()your visit; my;' ;
:::

[]{#listorder}

If you want to control the order in which topics are suggested, you can
do so by using the **listOrder** property of an ActorTopicEntry; the
higher this number, the later the topic will be placed in a list of
suggestions relative to other topics of the same time (e.g. an AskTopic
with a [listOrder]{.code} of 110 will be suggested after an AskTopic of
a [listOrder]{.code} of 100, the default value). Note that this
re-ordering only takes place within each group (e.g. suggested topics to
ask about or suggested topics to tell about). If you wish to change the
order in which the groups (say, query, ask, tell, etc.) are suggested,
you can override the **typeInfo** property of the
**suggestedTopicLister** to change the order of elements.

\
[]{#conditions}

## The Conditions Under Which Topics are Suggested

Defining the name or autoName property on an ActorTopicEntry does not
mean it will necessarily be suggested. For a conversational topic to be
suggested each of the following conditions must also be true:

1.  The **isActive** property must be true.
2.  The **activated** property must be true.
3.  The **curiosityAroused** property must be true (it is true by
    default).
4.  The **curiositySatisfied** method must return nil.
5.  The ActorTopicEntry in question must be reachable.

The **curiosityAroused** property is defined in addition to the isActive
property to allow for topics that you want the player to be able to
refer to, but you don\'t want to suggest them yet (because they\'re not
that important to suggest until something else happens). To make use of
the curiosityAroused property you can either define it declaratively
(e.g. [curiosityAroused = me.hasSeen(darkTower)]{.code}) or set it to
nil initially on one or more TopicEntries and then use the **\<.arouse
key\>** tag to set the curiosityAroused property to true for every
ActorTopicEntry belonging to the current interlocutor whose convKeys
property matches (or contains) *key*. You can achieve the same effect by
calling arouse(key) on the actor (which is what the \<.arouse key\> tag
does).

The **curiositySatisfied** property allows the topic to stop being
suggested once the player character has seen the response enough times.
What counts as enough times is defined on the **timesToSuggest**
property. By default this is 1 unless the TopicEntry is an EventList, in
which case timesToSuggest is the number of items in the eventList
property (eventList.length). You can easily override these defaults if
you wish or else set timesToSuggest to nil if you want the TopicEntry to
carry on being suggested indefinitely. Alternatively, you could override
curiositySatisfied so that it becomes true according to some other
condition.

If, however, an ActorTopicEntry defines a non-nil keyTopics property,
then [curiositySatisfied]{.code} works a little differently. In this
case, the function of the ActorTopicEntry is simply to suggest one or
more further subtopics, so its curiosity is considered satisfied if and
only if it has no subtopics to suggest (usually because they all have
their curiositySatisfied).

An ActorTopicEntry is *[reachable]{#reachable_idx}* if using the
suggestion (e.g. ASK BOB ABOUT DARK TOWER when told \'you could ask Bob
about the dark tower\' would actually trigger this particular
TopicEntry. Reasons why it might not do so include:

-   The isActive property is nil.
-   The activated property is nil.
-   The player character does not know about the matchObj.
-   The ActorTopicEntry is masked by another ActorTopicEntry (possibly a
    DefaultTopic) defined under the current ActorState.
-   The ActorTopicEntry is masked by another ActorTopicEntry with a
    higher matchScore.

The isReachable() method of ActorTopicEntry attempts to test for all
these conditions (ultimately by testing whether the current
ActorTopicEntry is currently the best match for its matchObj, if it
doesn\'t fail other tests first) to try to ensure that the player is not
presented with conversation suggestions that are currently unavailable.

Note that while the five numbered conditions above are jointly
*necessary* for a topic to be suggested, they may not be jointly
*sufficient*, since there are other restrictions that game authors can
place on what topics are suggested at any given moment.

Normally, all the topics that meet the five numbered conditions would be
displayed in response to an explicit TOPICS command (or TALK TO X
command), but game authors can restrict even this by overriding the
actor\'s **suggestionKey** property. If this is set to something other
than nil, then only those TopicEntries whose convKeys property matches
or contains the suggestionKey (and that also meet all the other
conditions) will be listed as suggestions. We shall now go on to discuss
one situation in which this might be useful (although game authors may
of course think of others).

\
[]{#other}

## TopicEntries that Suggest Other Topics

When an ActorTopicEntry matches a player\'s conversational command, it
normally responds by displaying its topicResponse (or by executing its
topicResponse method). An ActorTopicEntry can instead be defined to
display a further list of more specific topics. We saw an example of
this in the previous section:

::: cmdline
    >talk about the dark tower
    You could ask Bob when the tower was built, or why the tower is scary, or tell him
    about your visit, or say you think he's exaggerating.
:::

Setting this up is quite straightfoward. You just define the
**keyTopics** property on the ActorTopicEntry to contain a key or a list
of keys (single-quoted strings) that will be matched by the convKeys
property of the TopicEntries you want to suggest. For example:

::: code
    + AskTellTalkTopic @darkTower
        keyTopics = 'dark-tower'
        autoName = true
    ;

    + TellTopic @tVisit
       "<q>I visited the dark tower earlier..."
     
        convKeys = 'dark-tower'
        autoName = true    
    ;

    ...
:::

One potential problem with this is that both the AskTellTalkTopic and
the topics it suggests would be listed in response to a TOPICS command,
which might seem redundant, or even as presenting the player with too
much information at once. For this reason, if you were defining a whole
lot of TalkTopics (say) that went on to suggest further subtopics you
might prefer it if the TOPICS command only listed the top-level
TalkTopics, leaving the TalkTopics to suggest their sub-topics. The
topic suggestions could then act a little like a two-tier menu.

To implement this scheme you would give all your top-level topics a
common convKey (such as \'top\') and then define that key on the
**suggestionKey** property of the actor. For example:

::: code
    bob: Actor 'Bob; worried; man; him' @store
      ...
      suggestionKey = 'top'
    ;
     
    + AskTellTalkTopic @darkTower
        keyTopics = 'dark-tower'
        convKeys = 'top'
        autoName = true
    ;

    + TellTopic @tVisit
       "<q>I visited the dark tower earlier..."
     
        convKeys = 'dark-tower'
        autoName = true    
    ; 
    ... 
:::

Note that if you do this, bob\'s suggestionKey isn\'t set in stone; it
can be changed at run-time to anything else (including nil, which
removes the restriction on what topics to suggest) simply by executing
the statement [bob.suggestionKey = \'another-key\']{.code} or
[bob.suggestionKey = nil]{.code}, or equivalently using the tag
**\<.sugkey another-key\>** or **\<.sugkey nil\>**.

It should be emphasized once again that there is absolutely no reason to
use this scheme if you don\'t want to; in many games it probably
wouldn\'t be convenient; but it is one of the reasons for introducing a
separate TalkTopic (for use at the top-level of such a scheme in a way
that clearly distinguishes top-level topics and suggestions from the
sub-topics that fall underneath). It should also be emphasized that game
authors are, of course, free to use the tools described here in any way
they wish; they are certainly not restricted to this particular scheme.

One alternative to using a scheme involving top-level topics is to
activate or arouse curiosity concerning a group of topics just prior to
suggesting them via keyTopics. To facilitate this the list of strings
defined on a keyTopics property is allowed to include control tags such
as \<.activate key\> or \<.arouse key\> that can activate or arouse
curiosity concerning a group of topics just before they\'re due to be
suggested. This avoids the need to use a top-level suggestion key, but
also makes the suggested sub-topics permanently available once they have
been suggested (which may be what you want). For example, instead of
defining a top-level suggestionKey on bob, we could make the dark
tower\'s subtopics initially inactive and then have the darkTower
activate them just prior to suggesting them, like this:

::: code
    bob: Actor 'Bob; worried; man; him' @store
      ...
      
    ;
     
    + AskTellTalkTopic @darkTower
        keyTopics = ['<.activate dark-tower>', 'dark-tower']
        
        autoName = true
    ;

    + TellTopic @tVisit
       "<q>I visited the dark tower earlier..."
     
        convKeys = 'dark-tower'
        autoName = true
        activated = nil    
    ; 
    ... 
:::

This would cause all the topic entries with \'dark-tower\' as one of
their convKeys to be activated just prior to their being suggested from
the darkTower topic entry. Unless we took steps to make things work
differently, they would then remain activated and would hence be
suggested in any future topic inventory.

\
[]{#otherways}

## Other Ways of Suggesting Topics

It has already been mentioned in passing that the player can see a list
of suggested topics (assuming there are any) by entering a TOPICS
command. If you want to show the player an equivalent list of topics
even though s/he hasn\'t explicitly asked for them, you can do so by
including a **\<.topics\>** tag in the output of a conversational
response. This schedules the diplay of a topic inventory (a list of
suggested topics) just before the next command prompt. As a variation on
this you can use the **\<.suggest key\>** tag to schedule a list of all
suggested topics whose convKeys match *key*. To list all available
suggested topics, even when the list might otherwise be restricted by
the actor\'s suggestionKey property, use **\<.suggest all\>**.

One further way to display a restricted list of suggested topics is via
the \<.convnode node\> tag, but we\'ll discuss this in more detail when
we come to look at [Conversation Nodes](convnode.htm).
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Actors](actor.htm){.nav} \>
Suggesting Conversational Topics\
[[*Prev:* ActorTopicEntry](actortopicentry.htm){.nav}     [*Next:*
Special Topics](specialtopic.htm){.nav}     ]{.navnp}
:::
