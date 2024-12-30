::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Optional
Modules](optional.htm){.nav} \> Instructions\
[[*Prev:* Hints](hint.htm){.nav}     [*Next:* Newbie
Help](newbie.htm){.nav}     ]{.navnp}
:::

::: main
# Instructions

The Instructions module (instruct.t) is located under the English
directory, since it is specific to the English-language version of the
library. Its function is to provide players of your game with a set of
general instructions for playing interactive fiction, which may be read
in response to an INTRUCTIONS command (to which you\'ll probably want to
call your players\' attention in your introductory text or via your
ABOUT text).

If you have the menu modules included in your game (menusys.t and
menucon.t or menuweb.t), you\'ll probably want the instructions to be
shown in menu form rather than as a continuous block of text. To to this
you need to define [INSTRUCTIONS_MENU]{#ins_menu_idx}, either by adding
-D INSTRUCTIONS_MENU as a command line option if you use t3Make from the
command line, or else by adding INSTRUCTIONS_MENU to the list of symbols
to #define in Worbench. To to this in Workbench select Build -\>
Settings from the menu, then select \"Defines\" under the \"Compiler\"
section on the left-hand side of the dialog box, then click Add, type
INSTRUCTIONS_MENU in the \"Macro Name\" box, leave \"Expansion\" blank
and click OK, then click OK again. You\'ll probably then need to do a
full recompile for debugging to force a recompile of instruct.t.

The Instructions module makes some attempt to be context-sensitive about
the instructions it provides; for example it won\'t describe the GO TO
command if the pathfind module isn\'t present, and it won\'t talk about
SpecialTopics if none have been defined in your game. In addition, you
can override a number of properties of the Instructions object to
customize what is shown to the player:

-   **allRequiredVerbsDisclosed**: This property tells us how complete
    the verb list is. By default, we\'ll assume that the instructions
    fail to disclose every required verb in the game, because the
    generic set we use here doesn\'t even try to anticipate the special
    verbs that most games include. If you provide your own list of
    game-specific verbs, and your custom list (taken together with the
    generic list) discloses every verb required to complete the game,
    you should set this property to true; if you set this to true, the
    instructions will assure the player that they will not need to think
    of any verbs besides the ones listed in the instructions. Authors
    are strongly encouraged to disclose a list of verbs that is
    sufficient by itself to complete the game, and to set this property
    to true once they\'ve done so.
-   []{#custverbs}**customVerbs**: A list of custom verbs. Each game
    should set this to a list of single-quoted strings; each string
    gives an example of a verb to display in the list of sample verbs.
    Something like this: customVerbs = \[\'brush my teeth\', \'pick the
    lock\'\]
-   **conversationVerbs**: Verbs relating specifically to character
    interaction. This is in the same format as customVerbs, and has
    essentially the same purpose; however, we call these out separately
    to allow each game not only to supplement the default list we
    provide but to replace our default list. This is desirable for
    conversation-related commands in particular because some games will
    not use the ASK/TELL conversation system at all and will thus want
    to remove any mention of the standard set of verbs.
-   **conversationAbbr**: A double quoted string explaining the
    abbreviations that can be used for conversation verbs, e.g. (as
    defined by default) \"\\n\\tASK ABOUT (topic) can be abbreviated to
    A (topic) \\n\\tTELL ABOUT (topic) can be entered as T (topic)\"
-   **truncationLength**: Truncation length. If the game\'s parser
    allows words to be abbreviated to some minimum number of letters,
    this should indicate the minimum length. The English parser uses a
    truncation length of 8 letters by default. Set this to nil if the
    game doesn\'t allow truncation at all.
-   []{#cruelty}**crueltyLevel**: This property should be set on a
    game-by-game basis to indicate the \"cruelty level\" of the game,
    which is a rough estimation of how likely it is that the player will
    encounter an unwinnable position in the game.
    -   Level 0 is \"kind,\" which means that the player character can
        never be killed, and it\'s impossible to make the game
        unwinnable. When this setting is used, the instructions will
        reassure the player that saving is necessary only to suspend the
        session.
    -   Level 1 is \"standard,\" which means that the player character
        can be killed, and/or that unwinnable positions are possible,
        but that there are no especially bad unwinnable situations. When
        this setting is selected, we\'ll warn the player that they
        should save every so often.
    -   (An \"especially bad\" situation is one in which the game
        becomes unwinnable at some point, but this won\'t become
        apparent to the player until much later. For example, suppose
        the first scene takes place in a location that can never be
        reached again after the first scene, and suppose that there\'s
        some object you can obtain in this scene. This object will be
        required in the very last scene to win the game; if you don\'t
        have the object, you can\'t win. This is an \"especially bad\"
        unwinnable situation: if you leave the first scene without
        getting the necessary object, the game is unwinnable from that
        point forward. In order to win, you have to go back and play
        almost the whole game over again. Saved positions are almost
        useless in a case like this, since most of the saved positions
        will be after the fatal mistake; no matter how often you saved,
        you\'ll still have to go back and do everything over again from
        near the beginning.)
    -   Level 2 is \"cruel,\" which means that the game can become
        unwinnable in especially bad ways, as described above. If this
        level is selected, we\'ll warn the player more sternly to save
        frequently.
    -   We set this to 1 (\"standard\") by default, because even games
        that aren\'t intentionally designed to be cruel often have
        subtle situations where the game becomes unwinnable, because of
        things like the irreversible loss of an object, or an
        unrepeatable event sequence; it almost always takes extra design
        work to ensure that a game is always winnable.

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Optional
Modules](optional.htm){.nav} \> Instructions\
[[*Prev:* Hints](hint.htm){.nav}     [*Next:* Newbie
Help](newbie.htm){.nav}     ]{.navnp}
:::
:::
