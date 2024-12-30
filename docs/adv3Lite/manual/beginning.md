::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [The Core Library](core.htm){.nav}
\> Beginnings\
[[*Prev:*Topics](topic.htm){.nav}     [*Next:*
Endings](ending.htm){.nav}     ]{.navnp}
:::

::: main
# Beginnings

A work of Interactive Fiction has to start somewhere, and preferably
with something a little more informative than a blank screen with a
command prompt. In any case, for the game to work properly you need to
define at least a basic set of data about the game and some of its
starting conditions. We saw a brief example of this in the section on
defining a [minimal game](mingame.htm), but now we should cover the
topic a little more formally and in more depth.

## [The versionInfo Object]{#versioninfo}

Your game should normally define a versionInfo object (of the GameID
class) to:

1.  Specify basic information about your game (its name, author, etc.)
2.  Define the response to informational commands like ABOUT and
    CREDITS.

The properties and methods of versionInfo you\'ll typically need to
define are:

-   **IFID**: a random 32-digit hex number to uniquely identify the
    game; you can generate one at <http://www.tads.org/ifidgen/ifidgen>
-   **name**: The name of your game, e.g. \'Amazing Quest\'
-   **byline**: Your name or pseudonym, e.g. \'by I.F. Author\'
-   **htmlByline**: the main author credit as an HTML fragment
-   **authorEmail**: the authors\' names and email addresses (in
    GameInfo format) (e.g. \'I.F.Author \<i.author@whatevermail.com\>\')
-   **desc**: a short blurb describing the game, in plain text format
-   **htmlDesc**: the descriptive blurb as an HTML fragment
-   **version**:the game\'s version number string
-   **showAbout()**: the method to run in response to an ABOUT command.
-   **showCredit()**: the method to run in response to a CREDITS
    command.

So, for example, a typical versionInfo definition might look like this:

::: code
    versionInfo: GameID
        IFID = '0D9D2F69-90D5-4BDA-A21F-5B64C878D0AB'
        name = 'Fire!'
        byline = 'by Eric Eve'
        htmlByline = 'by <a href="mailto:eric.eve@nospam.com">
                      Eric Eve</a>'
        version = '1'
        authorEmail = 'Eric Eve <eric.eve@nospam.com>'
        desc = 'A test game for the adv3lite library.'
        htmlDesc = 'A test game for the adv3lite library.'
        
        showAbout()
        {
            aboutMenu.display();
            
            "This is a demonstration/test game for the adv3Lite library. It should
            be possible to reach a winning solution using a basic subset of common
            IF commands.<.p>";
        }
        
        showCredit()
        {
            "Fire! by Eric Eve\b
            adv3Lite library by Eric Eve with substantial chunks borrowed from the
            Mercury and adv3 libraries by Mike Roberts. ";               
        }
    ;
:::

In addition, you can override the following settings if you don\'t like
the defaults inherited from GameInfoModuleID:

-   releaseDate - the release date string (YYYY-MM-DD)
-   licenseType - freeware, shareware, etc.
-   copyingRules - summary rules on copying
-   presentationProfile - Multimedia, Plain Text

For further details consult the comments on the GameInfoModuleID in the
modid.t file and/or consult the article on \"Bibliographical Metadata\"
in the *TADS 3 Technical Manual* (although this was written for the adv3
library, everything in the Metadata article should apply equally well to
adv3Lite).

\

## [The gameMain Object]{#gamemain}

You game must define a gameMain object, which should be of the
GameMainDef class. At a basic minimum it must define the
**initialPlayerChar** property to identify the object that is to
represent the player character at the start of the game (typically this
is called me, though you can call it anything you like). A minimal
gameMain definition will therefore look like this:

::: code
    gameMain: GameMainDef
       initialPlayerChar = me
    ;
:::

In practice you\'ll normally want to define rather more than this on
your gameMain object. The other properties and methods you may want to
define include:

-   **showIntro()**: Show the game\'s introduction. This routine is
    called by the default newGame() just before entering the main
    command loop. The command loop starts off by showing the initial
    room description,so there\'s no need to do that here. Most games
    will want to override this, to show a prologue message setting up
    the game\'s initial situation for the player.
-   **showGoodbye()**: Show the \"goodbye\" message. This is called
    after the main command loop terminates. It doesn\'t show anything by
    default. If you want to show a \"thanks for playing\" type of
    message as the game exits, override this routine with the desired
    text.
-   **setAboutBox**(): Define how the about box should appear (typically
    in response to selecting Help, About from the menu of an HTML TADS
    interpreter. For more details on how to do this see the notes
    [below](#aboutbox).
-   **maxScore()**: The maximum number of points possible in the game.
    If the game includes the [scoring module](score.htm) at all, and
    this is non-nil, the SCORE and FULL SCORE commands will display this
    value to the player as a rough indication of how much farther there
    is to go in the game. By default, the library initializes this on
    demand, by calculating the sum of the point values of the
    Achievement objects in the game. The game can override this if
    needed to specify a specific maximum possible score, rather than
    relying on the automatic calculation.
-   **beforeRunsBeforeCheck**: Should the \"[before](react.htm)\"
    notifications (beforeAction and roomBeforeAction) run before or
    after the \"check\" phase? The adv3 library traditionally ran the
    \"before\" notifiers first, but the adv3Lite runs the \"before\"
    notifiers after the check phase, so in the adv3Lite library the
    default value is nil. In many ways it\'s more logical and useful to
    run \"check\" first. That way, you can consider the action to be
    more or less committed by the time the \"before\" notifiers are
    invoked. Of course, a command is never *truly* committed until it\'s
    actually been executed, since a \"before\" handler could always
    cancel it. But this is relatively rare - \"before\" handlers usually
    carry out side effects, so it\'s very useful to be able to know that
    the command has already passed all of its own internal checks by the
    time \"before\" is invoked - that way, you can invoke side effects
    without worrying that the command will subsequently fail.
-   **usePastTense**: This can be set to true if you want your game to
    be narrated in the past tense (it has the effect of making all the
    library messages appear in the past tense). If it\'s left at nil,
    the default, the game will be narrated in the present tense. The
    adv3Lite library, courtesy of the Mercury code it inherits, is
    actually capable of narration in six different tenses, but the
    present and the past are the ones most likely to be use in at least
    99% of games. If you want to use one of the other tenses see notes
    [below](#tenses).
-   **allVerbsAllowAll**: This can be set to nil to prevent the player
    using ALL (e.g. EXAMINE ALL) with all but a handful of
    inventory-handling verbs (TAKE, DROP, PUT and DOFF), since some game
    authors may feel that allowing ALL with every verb allows a
    sledge-hammer approach to their games. The default value is true.
-   **useParentheticalListing**: If this flag is true (the default is
    nil) then room description listings and examine listings use a
    parenthetical style to show subcontents (e.g. \"On the table you see
    a box (in which is a brass key)\") instead of showing each item and
    its contents in a separate paragraph.
-   **paraBrksBtwnSubcontents**: If this flag is true (the default) then
    room description listings will include a paragraph break between
    each set of subcontents listings (i.e. the listing of the contents
    of each item in the room that has visible contents). If it is nil
    the subcontents listings will all be run into a single paragraph.
    Note that the global setting defined here can be overridden on
    individual rooms.
-   **againRepeatsParse**: This controls how the AGAIN command is
    interpreted. It is nil (the default, representing the previous
    behaviour of adv3Lite), AGAIN repeats the resolved command, that is,
    the command as it was interpreted on the previous turn, with the
    same objects. If it is true, then the text of the previous command
    is reparsed, which may result in a different interpretation
    involving different objects. For example, suppose there are two
    coins on the floor. If [againRepeatsParse]{.code} is nil then TAKE
    COIN followed by AGAIN will result in one of the coins being taken,
    followed by an attempt to take the *same coin* again (which will
    fail with a message that you\'re already holding the coin). If
    [againRepeatsParse]{.code} is true, however, than TAKE COIN followed
    by AGAIN will result in one coin being taken, and then the other,
    just as if the player had typed TAKE COIN twice. Which is the better
    behaviour depends on context; while in the coin example the second
    interpretation seems better, if a player were to type EXAMINE BOOK
    and be prompted to say which one, the second interpretation would
    result in the disambiguation prompt being repeated, which might seem
    perverse.
-   **autoSwitchAgain**: this tries to give the player the best of both
    worlds by switching [againRepeatsParse]{.code} between true and nil
    depending on whether the command to be repeated is the kind of
    command it would make sense to repeat with the same objects (if it
    isn\'t, the command is reparsed in the hope of finding a more
    sensible match). This is far from absolutely foolproof, and should
    be regarded as experimental. It is true (switched on) by default,
    but game authors may wish to set it to nil if it proves troublesome.
-   **verbose**: flag - is this game in verbose mode (full room
    descriptions are shown every time) or in brief mode (full room
    descriptions are shown only on the first visit or in response to an
    explicit LOOK command). By default [verbose]{.code} is
    [true]{.code}, but players can change it using the commands BRIEF
    and VERBOSE.
-   **fastGoTo**. By default [fastGoTo]{.code} is nil, but if it is set
    to true then the [GO TO](pathfind.htm) command will move the player
    character continuously to his/her destination (unless some obstacle
    stops the journey) without the player needing to use the CONTINUE
    command.

If you look at the definition of GameMainDef in misc.t you\'ll see a
number of other methods and properties. Some of these, such as
newGame(), restoreAndRunGame(filename), setGameTitle() and
getSaveDesc(userDesc) are probably left as the library defines them
unless you really have a need to override them and you know what you\'re
doing. The rest are not guaranteed to work in the current version of the
adv3Lite library and are probably best left alone (they have been left
in from the adv3 version of GameMainDef for possible implementation in a
later version of adv3Lite).

A fairly typical gameMain definition might thus look something like
this:

::: code
    gameMain: GameMainDef
        initialPlayerChar = me
        
        showIntro()
        {       
            cls();
                            
            george.startFollowing;
            
            "<b><font color='red'>FIRE!</font></b>  You woke up just now, choking
                from the smoke that was already starting to fill your bedroom,
                threw something on and hurried downstairs -- narrowly missing
                tripping over the beach ball so thoughtgfully left on the landing
                by your <i>dear</i> nephew Jason -- you <i>knew</i> having him to
                stay yesterday would be trouble -- perhaps he's even responsible
                for the fire (not that he's around any more to blame -- that's one
                less thing to worry about anyway).\b
                So, here you are, in the hall, all ready to dash out of the house
                before it burns down around you. There's just one problem: in your
                hurry to get downstairs you left your front door key in your
                bedroom.<.p>";
        }
       
    ;
:::

\
[]{#notes}

### Notes

When defining a **[showAboutBox()]{#aboutbox}** method you\'d typically
make it display a string beginning and ending with the \<ABOUTBOX\> and
\</ABOUTBOX\> tags. A very basic setAboutBox() method that picks up all
the relevant text from the versionInfo object might look like this:

::: code
      setAboutBox()
        {
            "<ABOUTBOX><CENTER><FONT size=+2 color=red><b><<versionInfo.name>>
            </b></FONT>\b
             <<versionInfo.byline>>\b
            Version <<versionInfo.version>></CENTER></ABOUTBOX>";
        }
:::

For [**tenses**]{#tenses} other than past or present, override
[Narrator.tense]{.code} to be one of Present (\'Bob opens the box\'),
Past (\'Bob opened the box\'), Perfect (\'Bob has opened the box\'),
PastPerfect (\'Bob had opened the box\'), Future (\'Bob will open the
box\'), or FuturePefect (\'Bob will have opened the box\'). By default
the library defines Narrator.tense as [(gameMain.usePastTense ? Past :
Present)]{.code}.

The **showIntro()** method is primarily for showing the game\'s
introduction. It may also be a convenient place to put small amounts of
start-up code used for initializing the game state (such as starting a
Daemon running), but for initialization code you should also consider
using **PreinitObject** and **InitObject**, which are definined in the
System Library, and which you can read about in the \"Program
Initialization\" section of the *TADS 3 System Manual*.

\

## [Defining the Player Character]{#definingpc}

Every TADS 3 game written with the adv3Lite library must define one
object to be the player character (the character from whose viewpoint
the game is played). It is possible to [change the player
character](changepc.htm) in the course of play, although many if not
most games will probably stick to the same player character throughout;
in any case a game must define which object is the player character at
the start of play, in other words, the initial player character. If you
do plan to change the player character during the course of the game, it
is probably best to define every object that is going to represent the
player character at one time or another as an [Actor]{.code}, especially
if the different player characters are going to encounter each other.
Otherwise, the player character can perfectly well be defined as a
[Thing]{.code} or as a **Player** object, although provided the actor.t
module is present in the build, it is always okay to define the player
character as an Actor object. Which Actor, Thing or Player object
represents the initial player character can be defined either by setting
the [initialPlayerChar]{.code} property on the [gameMain]{.code} object,
or by setting [isInitialPlayerChar = true]{.code} on the object in
question. If both are done, the [initialPlayerChar]{.code} object
defined on the [gameMain]{.code} object will take precedence.

To unpack that somewhat terse summary, we may begin by noting that if
you create a new adv3Lite new game using the new Project Wizard in TADS
3 Workbench, the Wizard will create a minimal template game that does
all this work for you thus:

::: code
    #charset "us-ascii"

    #include <tads.h>
    #include "advlite.h"

    versionInfo: GameID
        IFID = '$IFID$'
        name = '$TITLE$'
        byline = 'by $AUTHOR$'
        htmlByline = 'by <a href="mailto:$EMAIL$">$AUTHOR$</a>'
        version = '1'
        authorEmail = '$AUTHOR$ <$EMAIL$>'
        desc = '$DESC$'
        htmlDesc = '$HTMLDESC$'
    ;

    gameMain: GameMainDef
        /* Define the initial player character; this is compulsory */
        initialPlayerChar = me
    ;


    /* The starting location; this can be called anything you like */

    startroom: Room 'The Starting Location'
        "Add your description here. "
    ;

    /* 
     *   The player character object. This doesn't have to be called me, but me is a
     *   convenient name. If you change it to something else, rememember to change
     *   gameMain.initialPlayerChar accordingly.
     */

    + me: Thing 'you'   
        isFixed = true       
        person = 2  // change to 1 for a first-person game
        contType = Carrier    
    ;
:::

Except that the versionInfo object will be filled in with the data you
entered in the wizard. This way of declaring the initial player
character has a couple of advantages: (1) it makes it clear just by
looking at the gameMain object which object is the initial player
character (you don\'t have to go hunting for it further down in the
source code; (2) it makes it clear that the player character object is
simply a Thing with a few extra properties set and in particular (3) it
calls attention to the **person** property which you may want to change
for a first-person or third-person game. If you\'ve created a new game
via the Workbench wizard this has no real downside, since the wizard
will have done virtually all the work for you.

If you are starting a new game without using the wizard (perhaps because
you aren\'t using Workbench) you can save yourself a small amount of
typing by using the Player class instead of the Thing class to define
the player character object:

::: code
    #charset "us-ascii"

    #include <tads.h>
    #include "advlite.h"

    versionInfo: GameID
        IFID = '$IFID$'
        name = 'My Game'
        byline = 'by My name'
        htmlByline = 'by <a href="mailto:$EMAIL$">$AUTHOR$</a>'
        version = '1'
        authorEmail = 'my.name@myemail.org'
        desc = 'My blurb'
        htmlDesc = 'My html blurb'
    ;

    gameMain: GameMainDef
        /* We don't now have to define the initial player character here */    
    ;


    /* The starting location; this can be called anything you like */

    startroom: Room 'The Starting Location'
        "Add your description here. "
    ;

    /* 
     *   The player character object. This doesn't have to be called me, but me is a
     *   convenient name. The Player class registers this object as the player character
     *   so you don't need to set gameMain.initialPlayerChar accordingly.
     */

    + me: Player 'you'       
    ;

This isn\'t a lot less typing, but you may feel it looks a bit neater
and makes it clearer which object is the player character. In terms of
what it does, it\'s effectively identical to the first way of doing
things.

Finally, as an alternative to both these ways of defining the player
character, you can define it as an Actor (provided actor.t is present in
your game build), and either define [isInitialPlayerChar = true]{.code}
on that player character Actor or define
[gameMain.initialPlayerChar]{.code} to point to it. None of these ways
of doing it is intrinsically better to any other (unless you plan to
switch the player character in the course of the game, in which case
using the Actor class may be your best choice), so which way you do it
is simply a matter of personal preference.

Whichever way you choose to define your player character object, you
will probably want to customize it at least to the extent of defining
its [desc]{.code} property so that your players see a customized
response to X ME.

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [The Core Library](core.htm){.nav}
\> Beginnings\
[[*Prev:* Topics](topic.htm){.nav}     [*Next:*
Endings](ending.htm){.nav}     ]{.navnp}
:::
:::
:::
