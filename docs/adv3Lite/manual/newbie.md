::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Optional
Modules](optional.htm){.nav} \> Newbie Help\
[[*Prev:* Instructions](instruct.htm){.nav}     [*Next:* Path
Finding](pathfind.htm){.nav}     ]{.navnp}
:::

::: main
# Help for New Players

Players familiar with Interactive Fiction generally have a good idea
what sort of thing is worth typing at the command prompt. Players new to
IF may be totally unfamiliar with the conventions. They see a command
prompt with the implied promise that it will understand anything they
type at it, and may quickly become frustrated when the game seems to
understand nothing they type but simply responds with a series of
standard parser error messages along the lines of \"I don\'t understand
you\". This situation can be at least alleviated somewhat by providing
aids to new players.

One such aid is the instructions for playing IF that can be displayed in
response to an [INSTRUCTIONS](instruct.htm) command. Another is the
[ExtraHint](hint.htm#extra) mechanism that can provide hints to players
who seem to be getting stuck. The trouble is that many people aren\'t
all that good at reading instructions (or at least, all that eager to do
so) and many new players may not be aware that such facilities even
exist, let alone how to get at them. If you include the file newbie.t in
your build, it provides four additional kinds of assistance that will be
displayed below. The newbie.t module is included in the English-specific
part of the library as so much of it is language specific.

[]{#helpmsg}

## The helpMessage object

The helpMessage object enables three new commands:

-   **Help**: this executes helpMessage.printMsg(), which in turn
    displays a brief message explaining the use of the INSTRUCTIONS,
    INTRO, SAMPLE and HINT commands (provided these are all available in
    the game).
-   **Intro**: this executes helpMessage.briefIntro(), which displays a
    very brief set of instructions for playing IF, mentioning some of
    the most commonly used commands.
-   **Sample**: this executes helpMessage.showSample(), which shows a
    short sample transcript.

If you don\'t like the text any of these displays, you can modify the
helpMessage object in your own code to override one or more of these
methods. For example, you might want to display a transcript that\'s
more relevant to your own game you might do something like this:

::: code
    modify helpMsg
      showSample()
      {
        "A typical game (not this particular one) might start something like
            this:\b";
            inputManager.pauseForMore();
            "<b>>x me</b>\n
            You're a fearsome dragon, the last of the Galvanax clan.\b
            <b>>i</b>\n
            Dragons carry nothing but their scales and their claws.\b   
            <b>>fly</b>\n
            Which way do you want to fly?\b
            <b>>N</b>\v
            With a great flapping of wings you soar up into the sky...";
            inputManager.pauseForMore();
            "And now back to the game you\'re actually playing....\b";
            gPlayerChar.getOutermostRoom.lookAroundWithin();          
      }
    ;
:::

[]{#trapping}

## Trapping badly-formed commands

New players unfamiliar with the form often try to type commands like
WHERE AM I, WHAT DO I DO NOW, PLEASE GO NORTH, or WHAT\'S THIS GAME
ABOUT? Such commands may look eminently sensible to the person who types
them, but most IF parsers will simply respond with a \"Command not
understood\" message, which can make the parser seem stupid and
inflexible to new players (indeed, it\'s part of what gives the IF
parser a bad name).

Some time ago Emily Short wrote an Inform 6 extension to handle such
badly-formed commands more gracefully. Some time after that I adapted
Emily\'s work for a game called *Mrs Pepper\'s Nasty Secret* I wrote
jointly with Jim Aikin, hiving much of this work off into a separate
extension file. The present newbie.t module is based directly on this
work, and contains a number of VerbRules, action definitions and
StringPreParsers designed to trap such common badly-formed commands,
carry them out if there\'s a reasonably plausible interpretation of what
the player probably meant, and explain what\'s wrong with them and/or
point the player towards the correct form of the command. Hopefully,
this will seem much more user-friendly than a standard \"command not
understood\" message.

The reason that there\'s a mixture of StringPreParsers and new
actions/VerbRules is that (in the main) the StringPreParsers are used to
field commands that are too badly formulated for a plausible
interpretation to be possible (so there\'s nothing to execute), while
the additional commands/VerbRules generally attempt to interpret the
command and execute it before explaining the more conventional way of
phrasing the command. For example WHERE AM I is treated as a LOOK
command, WHO AM I as an X ME command, and KEEP GOING NORTH as a NORTH
command, while commands like I WOULD REALLY LIKE TO THROW THE KNIFE or
YOU ARE A REALLY STUPID GAME are fielded by a StringPreParser that
recommends use of the HELP command.

Both the VerbRules and the StringPreParsers defined in this module have
an isActive property defined as [isActive =
(gPlayerChar.currentInterlocutor == nil)]{.code}. The reason for this is
that commands that might be badly formed in the context of normal play
could conceivably be perfectly legitimate conversational responses, so
we don\'t want any of these special actions or StringPreParsers to be
active while a conversation is in progress.

[]{#bodyparts}

## Body Parts

Many if not most IF games don\'t need the player to refer explicitly to
Body Parts with commands like WEAR SHOES ON FEET or OPEN DOOR WITH RIGHT
HAND. To field commands of this sort the newbie.t provides a
**bodyParts** object that matches the vocab of most common body parts
(e.g. \'your feet\' or \'my right hand\'). This object is a
[MultiLoc](multiloc.htm) that\'s defined to be everywhere by default,
and an [Unthing](extra.htm#unthing) so that if your game actually does
contain any body parts the parser will prefer them to the bodyParts
Unthing. If you find the bodyParts object a nuisance (perhaps because
your game actually uses a lot of body parts) you can banish it
altogether like so:

::: code
    modify bodyParts
      initialLocationClass = nil
    ;
:::

[]{#playerhelper}

## The playerHelper object

The three previous facilities for new players offered in newbie.t can
just be left to get on with their job, without much --- possibly without
any --- intervention from the game author. The fourth, the playerHelper
object, will almost certainly require some customization if it\'s to
work to best advantage in your particular game. The basic function of
the playerHelper object is to track (a) whether the player is making any
progress and (b) whether the player is typing a lot of rejected commands
and offer help if insufficient progress is being made or too many
rejected commands are being entered.

We\'ll start by listing its principal properties and methods:

-   **ceaseCheckingErrorLevel**: the proportion of rejected commands to
    turns, expressed as a percentage, below which we stop checking for
    errors. The default is 5 (in other words if less than 5 per cent of
    the player\'s commands are being rejected, the player presumably
    knows what s/he\'s doing, so we don\'t need to keep checking).
-   **errorCheckInterval**: the number of turns between each check on
    whether the player is entering too many erroneous commands. The
    default value is 20.
-   **errorThreshold**: the proportion of rejected commands to turns
    (i.e. accepted commands) that will trigger an offer of help. We
    express this number as a percentage, the default being 50.
-   **firstCheckAfter**: this is the number of turns that must elapse
    from the start of the game before the playerHelper first tries to
    offer any help if the player appears not to be making any progress.
    The default is 10.
-   **firstCheckCriterion()**: the condition that must be true to count
    as the player having made no progress after the first
    *firstCheckAfter* turns. If this condition is still true (or this
    method returns true) at that point we display the *firstCheckMsg*.
    By default we simply return nil (so that the condition is never
    met), since we don\'t know what\'s appropriate for particular games,
    but many games will want to override this to something more
    suitable.
-   **firstCheckMsg**: the message to display if no progress has been
    made after *firstCheckAfter* turns. The default is a message
    inviting the player to use the HELP command.
-   **offerHelp**: this method is designed to be called at the end of
    gameMain.showAbout: it asks \"Have you played this kind of game
    before?\" and calls helpMessage.printMsg() is the player replies NO,
    thus ensuring that new players (or at least, honest new players) are
    informed up front about the help available to them.
-   **startLocation**: the location in which the player character starts
    out. It can be used to check whether the player character has moved
    at all.

The playerHelper has a number of other properties and methods that are
primarily intended for the library\'s internal use, and which are
accordingly less likely to be worth customizing. Interested readers can
look these up in the [Library Reference Manual](../libref/index.html).
For now let\'s concentrate on the firstCheck mechanism, which is what
game code will most often need to customize via the
[firstCheckCriterion]{.code} and [firstCheckAfter]{.code} properties.
Basically what happens is that at the start of play the playerHelper
object sets up a Fuse to execute the [firstCheck()]{.code} method after
*firstCheckAfter* turns. The [firstCheck]{.code} method then looks to
see if the [firstCheckCriterion]{.code} is true. If it is, then it
displays a message saying that the player doesn\'t seem to be making
much progress and suggesting use of the HELP command (firstCheckMsg). It
also sets a Fuse to start the error Daemon after a decent interval.
Otherwise, if the player does seem to have made reasonable progress
([firstCheckCriterion]{.code} returns nil), [firstCheck]{.code} starts
the error checking Daemon straight away.

What game code is most likely to need to customize here are the
[firstCheckCriterion]{.code} (the condition that must be true if the
player seems not to be making much progress) and, perhaps, the
[firstCheckAfter]{.code} interval (the number of turns into the game at
which it\'s reasonable to make the check). Both these values may need a
bit of trial and error to get right (perhaps with the help of feedback
from beta-testers), but we can at least illustrate the principle here.

In a game in which exploration plays an important role, or where the
starting location is of little intrinsic interest other than as a
threshold to somewhere else, the simplest check might be whether the
player character is still in his/her starting location, for which we can
just write this:

::: code
    modify playerHelper
        firstCheckCriterion() { return gLocation == startLocation; }
    ;
:::

This would, however, be quite inappropriate in a one-room game or a game
where there\'s a lot to interact with in the starting location. In such
a situation a better alternative might be to test whether the player has
started interacting constructively with his/her environment. Suppose,
for example, that the player starts out carrying a document and that
there\'s a chest (an openable container) in the starting location. One
might expect the player to begin by examining himself, the document and
the chest and then opening the chest to see what\'s inside. We might
then decide that the player isn\'t making satisfactory progress at the
start of the game if s/he hasn\'t managed at least two out of those four
obvious actions after ten turns. We might then write the
firstCheckCriterion thus:

::: code
    modify playerHelper
        firstCheckCriterion() 
        { 
            local checkList = [gPlayerChar.examined, document.examined,
                chest.examined, chest.opened ];
                
            return checkList.countWhich({x: x == true}) < 2; 
        }    
    ;
:::

One other thing we can do if the player appears to be getting stuck is
to start the [ExtraHints](hint.htm#extra) mechanism, if we are using it
in our game, by calling extraHintManager.startDaemon(). We could, for
example, override firstCheckMsg to do this rather than displaying a
message telling players that they\'re not making much progress:

::: code
    modify playerHelper
        firstCheckMsg() 
        { 
            extraHintManager.activate();
        }    
    ;
:::

Some game authors may prefer this as a less intrusive (or less
belittling) approach.

Further help for new players can be provided by using the [Command
Help](../../extensions/docs/cmdhelp.htm) extension, which offers a
number of suggestions for a player to try if he or she enters an empty
command.

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Optional
Modules](optional.htm){.nav} \> Newbie Help\
[[*Prev:* Instuctions](instruct.htm){.nav}     [*Next:* Path
Finding](pathfind.htm){.nav}     ]{.navnp}
:::
:::
