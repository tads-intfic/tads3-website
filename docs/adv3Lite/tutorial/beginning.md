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
topic a little more formally and in a little more depth.

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
    invoked. Of course, a command is never \*truly\* committed until
    it\'s actually been executed, since a \"before\" handler could
    always cancel it. But this is relatively rare - \"before\" handlers
    usually carry out side effects, so it\'s very useful to be able to
    know that the command has already passed all of its own internal
    checks by the time \"before\" is invoked - that way, you can invoke
    side effects without worrying that the command will subsequently
    fail.
-   **usePastTense**: This can be set to true if you want your game to
    be narrated in the past tense (it has the effect of making all the
    library messages appear in the past tense). If it\'s left at nil,
    the default, the game will be narrated in the present tense. (The
    adv3Lite library, courtesy of the Mercury code it inherits, is
    actually capable of narration in six different tenses, but the
    present and the past are the ones most likely to be use in at least
    99% of games. If you want to use one of the other tenses see notes
    [below](#tenses).
-   **storeWholeObjectTable**: this is a possibly somewhat arcane
    property, but it\'s included here for sake of completeness. Setting
    this value to true only takes effect if actor.t is included in the
    build. It then has the effect of causing symbolic references to all
    relevant objects (Mentionables, ActorStates and AgendaItems) to be
    stored in conversationManager\'s object name table for use in
    various [tags](tags.htm) (\<.agenda \>, \<.remove \>, \<.state \>
    and \<.known \>). This ensures that these tags will always work
    (i.e. that they will be able to reference any relevant game object).
    If this is left at nil the conversation manager preInit instead
    tries to harvest all the objects it finds in these tags in
    TopicEntry topicResponse and AgendaItem invokeItem methods, which
    will result in a (possibly much) smaller table being stored, and is
    therefore more economical, but may be less reliable.

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

### Notes

When defining a **[showAboutBox()]{#aboutbox}** method you\'d typically
make it display a string beginning and ending wiith the \<ABOUTBOX\> and
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
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [The Core Library](core.htm){.nav}
\> Beginnings\
[[*Prev:* Topics](topic.htm){.nav}     [*Next:*
Endings](ending.htm){.nav}     ]{.navnp}
:::
