::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Actors](actor.htm){.nav} \>
Special Topics\
[[*Prev:* Suggesting Conversational Topics](suggest.htm){.nav}    
[*Next:* Topic Groups](topicgroup.htm){.nav}     ]{.navnp}
:::

::: main
# Special Topics

On the face of it, between them AskTopic, TellTopic, AskForTopic and
TalkTopic (together with YesTopic and NoTopic) offer a reasonable range
of TopicEntry classes for responding to conversational commands, but
they are somewhat limited in expressiveness. If I type TELL BOB ABOUT
MAVIS do I want to tell him about her appearance, her career, about the
conversation I\'ve just had with her or what? If I type ASK BOB ABOUT
THE TOWER do I want to enquire when the tower was built, how long people
have been afraid of it, why it\'s considered so scary, or what? Even
more, if Bob asks the player character \'What do you think of Mavis?\'
the player is rather restricted in his choice of reply if all he can
type is TELL BOB ABOUT MAVIS.

To alleviate this problem, the adv3Lite library defines two types of
SpecialTopic: [SayTopic](#saytopic) and [QueryTopic](#querytopic). A
SayTopic allows the player character to say just about anything (in
principle, at any rate; in practice we\'d be constrained by the need to
keep commands reasonably brief). A QueryTopic increases the range of
questions that can be asked from ASK ABOUT to ASK WHAT, ASK WHO, ASK
WHERE, ASK WHY, ASK WHEN, ASK HOW, ASK WHETHER and ASK IF. But before
going into the specifics of each type of SpecialTopic, it will be
helpful to outline their common features.

First, both types of SpecialTopic have their **autoName** property set
to true by default. This is necessary since players can scarcely be
expected to guess the wording that will trigger a SayTopic or a
QueryTopic, so they always need to be suggested, at least in the
appropriate context. With a SpecialTopic, however, the name used is the
[name]{.code} property of the matchObj, not the [theName]{.code}
property, since in this case the [name]{.code} property is nearly always
more appropriate (note, however, that if you supply your own definition
of the [name]{.code} property of a SayTopic or SpecialTopic, the library
won\'t override it).

Second, both types of SpecialTopic provide a short-cut way of defining
the Topic they match. Instead of having to define a Topic object just to
match a single SayTopic or QueryTopic, you can define the vocabProperty
of the Topic object you would otherwise need to have defined and the
library will create it for you. This will be illustrated when we come to
look at SayTopic and QueryTopic.

Third, both types of SpecialTopic provide a short-cut way of defining an
equivalent AskTopic or TellTopic (e.g. the player might type ASK BOB HOW
OLD HE IS or ASK BOB ABOUT HIS AGE, and you\'d want the same response).
This can be handled by defining the **askMatchObj** and/or
**tellMatchObj** property on the SpecialTopic in question (e.g.
[askMatchObj = tAge]{.code}). Again, we\'ll illustrate this below.

Fourth, whereas in the adv3 library SpecialTopic is a class used
directly to define TopicEntries in game code, in the adv3Lite library
it\'s a base class used to define the common behaviour of SayTopic and
QueryTopic. In your own game code you\'d use the latter two classes, not
SpecialTopic.

Fifth, in adv3 SpecialTopics can only be used in ConvNodes; in adv3Lite
SayTopics and QueryTopics can be used anywhere it\'s legal to use any of
the other kinds of ActorTopicEntry.

## [SayTopic]{#saytopic}

A SayTopic can be used to allow the player character say just about
anything (in practice limited by the need to keep IF commands reasonably
brief). A SayTopic is triggered by a command beginning with the verb
SAY, e.g. SAY YOU\'RE NOT AFRAID, or SAY SALLY IS HORRIBLE, or SAY YOU
LIKE CHOCOLATE. In fact the player can usually leave off the say, and
just type YOU\'RE NOT AFRAID, or SALLY IS HORRIBLE or YOU LIKE
CHOCOLATE, although in the first and third cases the player might be
more likely to type I\'M NOT AFRAID or I LIKE CHOCOLATE, and your
SayTopic will need to be able to deal with this possibility. What
happens here is that, under certain circumstances to be discussed
[below](#implicitsay),while there\'s a conversation in progress between
the player character and another actor the parser tries to interpret any
command it can\'t otherwise understand as the topic object of a SAY
command, which allows a SayTopic to be triggered even if the player
didn\'t explicitly type SAY at the start of the command.

The full, long-hand way to define a SayTopic is thus first to define the
Topic it matches and then use that Topic as the matchObj of your
SayTopic; for example:

::: code
    tNotAfraid: Topic 'you\'re not afraid; you are i\'m i am'
    ;

    ...

    + SayTopic @tNotAfraid
      "<q>I'm not afraid of the dark tower, you know,</q> you boast.\b
       <q>Well, you should be,</q> Bob warns you. "
    ;
:::

Note how we define the tNotAfraid Topic object here. Because of the way
autoname works it will be suggested to the player as \'You could say
you\'re not afraid\'. Faced with that suggestion many players will type
anything but the wording they\'ve just been shown, the obvious variants
being SAY YOU ARE NOT AFRAID, I\'M NOT AFRAID and I AM NOT AFRAID (you
don\'t have to worry about the player including THAT after say since the
VerbRule for the Say action takes care of that automatically). You thus
need to define the vocab property of the tNotAfraid Topic such that its
name (which will end up being used to provide the suggested name for the
SayTopic) comes out as \'you\'\\re not afraid\' while any additional or
alternative words the player might type are also in the vocab.

If this were the only TopicEntry in the game to make use of the
tNotAfraid Topic (as might well be the case), it may seem a slightly
tedious step to have to define the tNotAfraid Topic in some other part
of your code and then make use of it on just the one SayTopic. The
adv3Lite library accordingly provides a short-cut way of doing this,
allowing you to define the Topic directly on the SayTopic, like this:

::: code
    + SayTopic 'you\'re not afraid; you are i\'m i am'
      "<q>I'm not afraid of the dark tower, you know,</q> you boast.\b
       <q>Well, you should be,</q> Bob warns you. "
    ;
:::

Note that this has the same effect behind the scenes. What happens is
that the library preinitialization creates an anonymous Topic object
with the vocab you define and then attaches it to the matchObj property
of the SayTopic.

If you look at the template for TopicEntry you\'ll see that the property
you should be defining here according to the template definition is the
SayTopic\'s matchPattern, which can be used to match a regular
expression. This is in fact the case. What happens is that the preinit
code on SpecialTopic looks at the contents of the matchPattern property
to see if it looks more like a regular expression (containing characters
like \<\>\|\*\$%\^) or more like a vocab property (containing one or
more semicolons), and then deals with it accordingly. In the absence of
any firm evidence to the contrary it\'ll assume it\'s intended as the
vocab property of an implicitly-defined Topic, so if you want to force
it to a matchPattern you need to include one or more of the special
regex characters.

It may happen that you want your SayTopic to be equivalent to an
ordinary TellTopic (e.g. the player might type TELL BOB ABOUT FEAR
instead of SAY I\'M NOT AFRAID). To deal with this you can define an
equivalent matchObj for a TellTopic on the SayTopic\'s tellMatchObj
property, like so:

::: code
    + SayTopic 'you\'re not afraid; you are i\'m i am'
      "<q>I'm not afraid of the dark tower, you know,</q> you boast.\b
       <q>Well, you should be,</q> Bob warns you. "
       
       tellMatchObj = tFear
    ;
:::

This assumes that the tFear Topic is defined somewhere else in your
code. What happens behind the scenes here is that the library creates a
SlaveTopic which matches TELL BOB ABOUT FEAR but executes the
topicResponse of the SayTopic to which its enslaved. You can define an
askMatchObj in just the same way (or you can define both on the same
SayTopic or QueryTopic).

You\'re not restricted to using SayTopics for responses that could start
with SAY. Suppose, for example, you want to include options to lie or to
prevaricate in response to a question Bob asks the player character.
Since the player does not need to begin a command with SAY to have it
match a SayTopic this is perfectly possible. You\'d do it like this:

::: code
    /* Bob has just asked 'Have you been to the dark tower?' */

    + YesTopic
      "<q>Yes, I have,</q> you confess.\b
       <q>You fool!</q> he groans. "
    ;

    + SayTopic @tLie
       "<q>No, of course not,</q> you lie hastily. <q>After all,
        you did warn me.</q>\b
        <q>I did,</q> Bob agrees, just a little warily. "
        
        tellMatchObj = tLie
        includeSayInName = nil
    ;

    + SayTopic 'prevaricate'
        "<q>Well, not exactly,</q> you prevaricate.\b
         <q>What do you mean, <q>not exactly</q>?</q> Bob complains testily.
         <q>Either you have or you haven't!</q> "
         
         includeSayInName = nil
    ;

    tLie: Topic 'lie';
:::

Note the use of the **includeSayInName** property to suppress the
inclusion of \'say\' in the way the topic is suggested when
includeSayInName is set to nil. Note also how we define a SayTopic that
will respond either to LIE or TELL A LIE; we need to do it this way
since if the player types a command beginning with TELL the parser will
try to match it to a TellTopic.

You can use SayTopics wherever you like, but the best use is probably
just after the NPC the player character is in conversation with has just
asked a question to which they might form an appropriate reply, which
means you\'ll typically use SayTopics in [Conversation
Nodes](convnode.htm).

### [Controlling Implicit Say]{#implicitsay}

We said above that under certain circumstances, while there\'s a
conversation in progress between the player character and another actor
the parser tries to interpret any command it can\'t otherwise understand
as the topic object of a SAY command, which allows a SayTopic to be
triggered even if the player didn\'t explicitly type SAY at the start of
the command. We may call this an *implicit* say. It is probably the most
appropriate behaviour when the game expects the player to use a
conversational SAY command, which, experience shows, players don\'t
always do with the wording they\'re given, and which they may well do
without explicitly including the initial SAY in what they type. In other
words, it\'s a good default for a game that makes quite a bit of use of
SayTopics. Not every game does so, however, which can make it quite
inappropriate behaviour in a game that, for example, uses a basic
ASK/TELL conversational interface with no use of SayTopics at all, since
in such a situation the response to what the parser then (probably
mistakenly) interprets as an implioit SAY command risks baffling the
player, or at least looking more than a little clumsy.

To get round this problem, the library uses the method
**allowImplicitSay()**, defined on the Actor class, to determine whether
or not the parser should interpret the player\'s input (when it is not
otherwise a valid command) as an implicit SAY command. The default
behaviour of this method is to return true (and hence allow the parser
to treat the player\'s input as an implicit SAY command) if and only if
there\'s at least one TopicEntry, other than a DefaultTopic, defined on
the current interlocutor (the Actor with whom the player character is
currently in conversation) or on the current interlocutor\'s current
ActorState, that could match a SAY command. This avoids triggering a
mysterious response unless the player explicitly tries to SAY something,
and, amongst other things, means that the parser will never interpret
the player\'s input as an implicit SAY in a game that defines no
non-default SayTopics.

For many or even most games, this may suffice, but game authors may
modify this behaviour if they wish either by overriding the
allowImplicitSay() method with their own code, or by setting one of the
three flags (all properties defined on the Actor class) to tweak its
behaviour:

-   **enableImplicitSay** If this is set to nil then the parser will
    never interpret anything as an implicit SAY command. By default this
    is set to true.
-   **defaultCountsAsSay** If this is set to true then DefaultTopics
    that match SAY commands are counted as SayTopics for the purpose of
    deciding whether the Actor or its current ActorState has any
    SayTopics (so that implicit SAY commands are allowed if such
    DefaultTopics are present). By default this is nil.
-   **autoImplicitSay** If this is set to nil, then allowImplicitSay()
    simply returns the value of enableImplicitSay, regardless of whether
    the Actor or its current ActorState has any SayTopics. By default
    this is set to true.

At first sight, some of these may seem to be redundant, since setting
enableImplicitSay to nil would have the same effect as setting
allowImplicitSay() to nil, and setting autoImplicitSay to nil the same
effect as overriding allowImplicitSay() to always return nil or always
return true. But these three flags are intended to allow fine-grained
control, for example to allow different behaviour on different actors at
different times without needing to override the allowImplicitSay()
method on the Actor class, bearing in mind that each of these methods
and properties can be overridden either on the Actor class (using
modify) or on individual Actor objects. One might, for instance, define
one or more of these flag properties to take its value from a
similarly-named property on the Actor\'s current ActorState (which would
need to be user-defined).

Another potential issue is that neither counting all DefaultTopics as
SayTopics or none of them as SayTopics as DefaultTopics for the purposes
of allowing implicit SAY commands may do quite what the game author
wants, since a game author may well include a DefaultAnyTopic or
DefaultConversationTopic (both of which might field an explicit or
implicit SAY command) without intending thereby to handle SAY commands
in their game at all. One workaround would be to use
**DefaultAnyNonSayTopic** in place of DefaultAnyTopic and
**DefaultNonSayTopic** in place of DefaultConversationTopic, since
neither of these will match a SAY command.

A default response to a SayTopic, especially if it\'s a catch-all
response to any kind of conversational command, may be quite puzzling to
a player, especially if they typed something not intended to be an
implicit SAY command (e.g., because their input included a typo or they
were trying to issue a command the parser considers invalid). Consider
the following exchange as an example:

::: cmdline
    >EXMINE DESK
    Fred does not respond.
:::

Here the player probably meant to type EXAMINE DESK, but if the parser
interprets it as an implicit SAY when the player characater is in
conversation with Fred then it won\'t attempt to correct the typo, and
the player will get this potentially mystifying response. The Actor
class now defines a new **defaultSayResponse** property which displays
when there\'s no match to an (explicit or implicit) SAY command. With
this in place, the above exchange becomes:

::: cmdline
    >EXMINE DESK
    “Exmine desk,” you say.

    Fred does not respond.
:::

While this may not be very elegant, and some players may even find it a
little irritating, it at least makes it clear to the player how their
input has been interpreted, which is probably the most important thing.

We can, of course, customise this response either by overriding the
defaultSayResponse (on the Actor class or an individual Actor object),
or by overriding the **pcDefaultSayQuip** property (again either on the
Actor class or an individual Actor object), this being the property that
supplies the \'"Exmine desk," you say.\' part of the message (while
\'Fred does not respond\' comes from the **noResponseMsg** property,
used in response to all other non-handled conversational commands).

There is still the problem that this mechanism won\'t be invoked because
an (implicit or explicit) SAY command is handled by some kind of
DefaultTopic before the defaultSayResponse is ever invoked. You can
avoid this either by adding a DefaultSayTopic to the Actor or relevant
ActorState(s) without overriding its topicResponse property (in which
case it will use its Actor\'s defaultSayResponse with the same effect as
before, or as suggested above, using **DefaultAnyNonSayTopic** in place
of DefaultAnyTopic and **DefaultNonSayTopic** in place of
DefaultConversationTopic, since neither of these will match a SAY
command.

Finally, if you want to customize Fred\'s non response while keeping
what the player character is deemed to have just said, you could do
something along the lines of:

::: code
    ++ DefaultSayTopic
        "<<getActor.pcDefaultSayQuip>><.p>
        <q>Whatever do you mean?</q> Fred demands. "
    ;
:::

Or, for further customization still:

::: code
    ++ DefaultSayTopic
        "For some reason you come out with, <q><<gTopicText.substr(1,1).toUpper()>><<gTopicText.substr(2).toLower()>>.</q><.p>
        <q>Whatever do you mean?</q> Fred demands. "
    ;
:::

\

## [QueryTopic]{#querytopic}

QueryTopics allow NPCs in your game to respond to questions like ASK BOB
WHEN THE DARK TOWER WAS BUILT or ASK BOB HOW OLD HE IS or ASK BOB WHO
DIED AT THE DARK TOWER or ASK BOB IF HE LIKES CHOCOLATE. QueryTopics are
defined in a manner similar to SayTopics, except that we need to define
one further property, the qtype (\'how\', \'what\', \'who\', \'why\',
\'where\', etc.). We can do this directly in the QueryTopic template,
like this:

::: code
    + QueryTopic 'how' @tHowOld
        "<q>How old are you?</q> you ask.\b
        <q>None of your damned business,</q> he replies. <q>Would you like someone
        asking you about your age?</q> "
        
        /* 
         *   specifying the askMatchObj property allows Bob to respond to ASK
         *   BOB ABOUT HIS AGE in the same way as ASK BOB HOW OLD HE IS.
         */
        askMatchObj = tAge    
    ;
    ...


    tHowOld: Topic 'old he is; are you'
    ;

    tAge: Topic 'his age'
    ;
:::

Note how we here use the askMatchObj property so that the player would
get the same response from ASK BOB ABOUT HIS AGE. Note also how we
define the vocab property of the tHowOld Topic. The parser will
recognize a command beginning with WHO, WHAT, WHY, WHEN or HOW as a form
of ASK WHO/WHAT/WHEN/WHY/HOW, and faced with a prompt suggesting \'You
could ask Bob how old he is\' you can be sure that at least 50% of
players will type HOW OLD ARE YOU rather than the text actually in front
of them. The parser will deal with the initial HOW but we need to ensure
that our Topic will match \'old are you\' as well as \'old he is\'. If
there aren\'t any other NPCs where going to put this question to, it\'s
probably more convenient to define the Topic vocab directly on the
QueryTopic, as before:

::: code
    + QueryTopic 'how' 'old he is; are you'
        "<q>How old are you?</q> you ask.\b
        <q>None of your damned business,</q> he replies. <q>Would you like someone
        asking you about your age?</q> "   

        askMatchObj = tAge     
    ;
:::

This, by the way, is part of the reason we need to define
[qtype]{#qtype-idx} as a separate property, and not simply as part of
the topic vocab. The \'how/what/who/why/when\' is part of the verb
grammar, which both allows the parser to recognize questions of this
sort (and to distinguish them from attempts to ask someone *about*
something) and allows the parser to recognize the short-form questions
lacking the initial ASK. However, when defining a QueryTopic using the
template form above we can, if we wish, run the qtype and the topic
vocab together into a single string like this:

::: code
    + QueryTopic 'how old he is; are you'
        "<q>How old are you?</q> you ask.\b
        <q>None of your damned business,</q> he replies. <q>Would you like someone
        asking you about your age?</q> "   

        askMatchObj = tAge     
    ;
:::

In this case, where the library doesn\'t find the qtype property
seperately defined, it takes the first word of the string to be the
qtype and the remainer of the string to be the topic vocab. For this to
work the first word of the string must be a valid qtype (who, what, why,
where, when, if, whether, how), otherwise the QueryTopic won\'t match
any player input. Other than that it\'s up to you whether you prefer to
define the qtype and topic vocab as two separate strings or together in
the same string. If the library finds two strings defined in the
template, it will take the first to be the qtype and the second to be
the topic vocab (unless it looks like a regular expression match
pattern, in which case it will be interpreted as the matchPattern
property). If the library finds only one string defined in the template,
it will take the first word (i.e. everything up to the first space) to
be the qtype, and the rest to be the topic vocab.

If we want a QueryTopic to match more than one qtype we can; we simply
need to list the different question words in the qtype property and
separate them with a vertical bar. This is most likely to be needed with
ASK IF and ASK WHETHER, which players are likely to treat as synonyms.
So, for example, we might define:

::: code
    + QueryTopic 'if|whether' 'he likes chocolate; you like'
        "<q>Do you like chocolate?</q> you ask.\b
        <q>Of course,</q> he replies. <q>Doesn't everyone?</q>"
    ;
:::

Or, alternatively and equivalently:

::: code
    + QueryTopic 'if|whether he likes chocolate; you like'
        "<q>Do you like chocolate?</q> you ask.\b
        <q>Of course,</q> he replies. <q>Doesn't everyone?</q>"
    ;
:::

Note here the appearance of \'you like\' as additional words in the
vocab property after the \'he likes chocolate\' in the name part. This
is to allow players to type DO YOU LIKE CHOCOLATE and have the command
still work. Faced with a prompt like \'You could ask if he likes
chocolate\' at least 50% of players *will* type DO YOU LIKE CHOCOLATE
and regard it as a bug of guess-the-verb proportions if the game
doesn\'t recognize it, complaining like mad that they couldn\'t possibly
be expected to guess that they need to type ASK IF HE LIKES CHOCOLATE
when the suggestion is \'you could ask if he likes chocolate\' (no,
really, I have encountered this kind of thing!). The (English-language)
parser recognizes commands beginning DO, DOES or DID as equivalent to
commands beginning ASK IF, but your topic vocab needs to cope with the
rest.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Actors](actor.htm){.nav} \>
Special Topics\
[[*Prev:* Suggesting Conversational Topics](suggest.htm){.nav}    
[*Next:* Topic Groups](topicgroup.htm){.nav}     ]{.navnp}
:::
