---
layout: docs
---
<span class="title">GameMainDef</span><span class="type">class</span>

[misc.t](../file/misc.t.html)\[[56](../source/misc.t.html#56)\],
[objtime.t](../file/objtime.t.html)\[[156](../source/objtime.t.html#156)\]

[Superclass  
Tree](#_SuperClassTree_)

[Subclass  
Tree](#_SubClassTree_)

[Global  
Objects](#_ObjectSummary_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)



The library base class for the gameMain object.

Each game MUST define an object called 'gameMain' to define how the game
starts up. You can use GameMainDef as the base class of your 'gameMain'
object, in which case the only thing you're required to specify in your
object is the 'initialPlayerChar' property - you can inherit everything
else from the GameMainDef class if you don't require any further
customizations.

*Modified in
[objtime.t](../file/objtime.t.html)\[[156](../source/objtime.t.html#156)\]:*  
Modification to GameDef to add an additional property for use with the
OBJTIME EXTENSION

`class `**`GameMainDef`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`GameMainDef`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`againRepeatsParse`](#againRepeatsParse) [`allVerbsAllowAll`](#allVerbsAllowAll) [`autoSwitchAgain`](#autoSwitchAgain) [`beforeRunsBeforeCheck`](#beforeRunsBeforeCheck) [`fastGoTo`](#fastGoTo) [`gameStartTime`](#gameStartTime) [`initialPlayerChar`](#initialPlayerChar) [`paraBrksBtwnSubcontents`](#paraBrksBtwnSubcontents) [`scoreRankTable`](#scoreRankTable) [`useParentheticalListing`](#useParentheticalListing) [`usePastTense`](#usePastTense) [`verbose`](#verbose)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`getSaveDesc`](#getSaveDesc) [`maxScore`](#maxScore) [`newGame`](#newGame) [`restoreAndRunGame`](#restoreAndRunGame) [`setAboutBox`](#setAboutBox) [`setGameTitle`](#setGameTitle) [`showGoodbye`](#showGoodbye) [`showIntro`](#showIntro)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="againRepeatsParse"></span>

`againRepeatsParse`

[misc.t](../file/misc.t.html)\[[378](../source/misc.t.html#378)\]



The AGAIN command could be interpreted in two different ways. It could
repeat the resolved action (using precisely the same objects as before),
or it could act as if the player had retyped the command and then parse
it again from scratch (which might result in a different interpretation
of the command, or different objects being selected). The former
interpretation is used if againRepeatsParse is nil; the latter if it's
true.



<span id="allVerbsAllowAll"></span>

`allVerbsAllowAll`

[misc.t](../file/misc.t.html)\[[342](../source/misc.t.html#342)\]



Option flag: allow ALL to be used for every verb. This is true by
default, which means that players will be allowed to use ALL with any
command - OPEN ALL, EXAMINE ALL, etc.

Some authors don't like to allow players to use ALL with so many verbs,
because they think it's a sort of "cheating" when players try things
like OPEN ALL. This option lets you disable ALL for most verbs; if you
set this to nil, only the basic inventory management verbs (TAKE, TAKE
FROM, DROP, PUT IN, PUT ON) will allow ALL, and other verbs will simply
respond with an error ("'All' isn't allowed with that verb").

If you're writing an especially puzzle-oriented game, you might want to
set this to nil. It's a trade-off though, as some people will think your
game is less player-friendly if you disable ALL.



<span id="autoSwitchAgain"></span>

`autoSwitchAgain`

[misc.t](../file/misc.t.html)\[[386](../source/misc.t.html#386)\]



Flag. If this is true the game attempts to switch the againRepeatsParse
flag between true and nil to give the contextually better interpretation
of AGAIN. This should be regarded as somewhat experimental for now.



<span id="beforeRunsBeforeCheck"></span>

`beforeRunsBeforeCheck`

[misc.t](../file/misc.t.html)\[[359](../source/misc.t.html#359)\]



Should the "before" notifications (beforeAction, roomBeforeAction, and
actorAction) run before or after the "check" phase?

In many ways it's more logical and useful to run "check" first. That
way, you can consider the action to be more or less committed by the
time the "before" notifiers are invoked. Of course, a command is never
truly\* committed until it's actually been executed, since a "before"
handler could always cancel it. But this is relatively rare - "before"
handlers usually carry out side effects, so it's very useful to be able
to know that the command has already passed all of its own internal
checks by the time "before" is invoked - that way, you can invoke side
effects without worrying that the command will subsequently fail.



<span id="fastGoTo"></span>

`fastGoTo`

[misc.t](../file/misc.t.html)\[[401](../source/misc.t.html#401)\]



Is this game in fast GO TO mode? By default we make it not, so that the
GO TO command moves the player character only one step of the way at a
time, but if this is set to true the GO TO command will keep moving the
player until either the destination is reached or an obstacle is
encountered.



<span id="gameStartTime"></span>

`gameStartTime`

[objtime.t](../file/objtime.t.html)\[[165](../source/objtime.t.html#165)\]



The date and time at which this game notionally starts. This should be
specified as a list of numbers in the format \[year, month, day, hour,
minute, second, millisecond\]. Trailing zero elements may be omitted. We
default to midnight on 1st January 2000, but game code should generally
override this. \[PART OF OBJTIME EXTENSION\]



<span id="initialPlayerChar"></span>

`initialPlayerChar`

[misc.t](../file/misc.t.html)\[[62](../source/misc.t.html#62)\]



The initial player character. Each game's 'gameMain' object MUST define
this to refer to the Actor object that serves as the initial player
character.



<span id="paraBrksBtwnSubcontents"></span>

`paraBrksBtwnSubcontents`

[misc.t](../file/misc.t.html)\[[322](../source/misc.t.html#322)\]



If this flag is true then room description listings will include a
paragraph break between each set of subcontents listings (i.e. the
listing of the contents of each item in the room that has visible
contents). If it is nil the subcontents listings will all be run into a
single paragraph. Note that the global setting defined here can be
overridden on individual rooms.



<span id="scoreRankTable"></span>

`scoreRankTable`

[misc.t](../file/misc.t.html)\[[303](../source/misc.t.html#303)\]



The score ranking list - this provides a list of names for various score
levels. If the game provides a non-nil list here, the SCORE and FULL
SCORE commands will show the rank along with the score ("This makes you
a Master Adventurer").

This is a list of score entries. Each score entry is itself a list of
two elements: the first element is the minimum score for the rank, and
the second is a string describing the rank. The ranks should be given in
ascending order, since we simply search the list for the first item
whose minimum score is greater than our score, and use the preceding
item. The first entry in the list would normally have a minimum of zero
points, since it should give the initial, lowest rank.

If this is set to nil, which it is by default, we'll simply skip score
ranks entirely.



<span id="useParentheticalListing"></span>

`useParentheticalListing`

[misc.t](../file/misc.t.html)\[[312](../source/misc.t.html#312)\]



If this flag is true then room description listings and examine listings
use a parenthetical style to show subcontents (e.g. "On the table you
see a box (in which is a brass key)") instead of showing each item and
its contents in a separate paragraph.



<span id="usePastTense"></span>

`usePastTense`

[misc.t](../file/misc.t.html)\[[367](../source/misc.t.html#367)\]



Flag, should this game be in the past tense. By default the game is in
the present tense.

For a wider selection of tenses override Narrator.tense instead.



<span id="verbose"></span>

`verbose`

[misc.t](../file/misc.t.html)\[[392](../source/misc.t.html#392)\]



Is this game in verbose mode? By default we make it so, but players can
change this with the BRIEF/TERSE command.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="getSaveDesc"></span>

`getSaveDesc (userDesc)`

[misc.t](../file/misc.t.html)\[[225](../source/misc.t.html#225)\]



Build a saved game metadata table. This returns a LookupTable containing
string key/value pairs that are stored in saved game files, providing
descriptive information that can be displayed to the user when browsing
a collection of save files. This is called each time we execute a SAVE
command, so that we store the current context of the game.

Some interpreters display information from this table when presenting
the user with a list of files for RESTORE. The contents of the table are
intentionally open-ended to allow for future extensions, but at the
moment, the following keys are specifically defined (note that
capitalization must be exact):

UserDesc - descriptive text entered by the user (this should simply be
the contents of the 'userDesc' parameter). This is treated as ordinary
plain text (i.e., no HTML or other markups are interpreted in this
text).

AutoDesc - descriptive text generated by the game to describe the saved
position. This text can contain the simple HTML markups \<b\>..\</b\>,
\<i\>..\</i\>, and \<br\> for formatting.

Return nil if you don't want to save any metadata information.

'userDesc' is an optional string entered by the user via the Save Game
dialog. Some interpreters let the user enter a description for a saved
game via the file selector dialog; the descriptive text is separate from
the filename, and is intended to let the user enter a more free-form
description than would be allowed in a filename. This text, if any, is
passed to use via the 'userDesc' parameter.



<span id="maxScore"></span>

`maxScore ( )`

[misc.t](../file/misc.t.html)\[[270](../source/misc.t.html#270)\]



The maximum number of points possible in the game. If the game includes
the scoring module at all, and this is non-nil, the SCORE and FULL SCORE
commands will display this value to the player as a rough indication of
how much farther there is to go in the game.

By default, we initialize this on demand, by calculating the sum of the
point values of the Achievement objects in the game. The game can
override this if needed to specify a specific maximum possible score,
rather than relying on the automatic calculation.



<span id="newGame"></span>

`newGame ( )`

[misc.t](../file/misc.t.html)\[[98](../source/misc.t.html#98)\]



Begin a new game. This default implementation shows the introductory
message, calls the main command loop, and finally shows the goodbye
message.

You can override this routine if you want to customize the startup
protocol. For example, if you want to create a pre-game options menu,
you could override this routine to show the list of options and process
the user's input. If you need only to customize the introduction and
goodbye messages, you can simply override showIntro() and showGoodbye()
instead.



<span id="restoreAndRunGame"></span>

`restoreAndRunGame (filename)`

[misc.t](../file/misc.t.html)\[[139](../source/misc.t.html#139)\]



Restore a game and start it running. This is invoked when the user
launches the interpreter using a saved game file; for example, on a
Macintosh, this happens when the user double-clicks on a saved game file
on the desktop.

This default implementation bypasses any normal introduction messages:
we simply restore the game file if possible, and immediately start the
game's main command loop. Most games won't need to override this, but
you can if you need some special effect in the restore-at-startup case.



<span id="setAboutBox"></span>

`setAboutBox ( )`

[misc.t](../file/misc.t.html)\[[187](../source/misc.t.html#187)\]



Set up the HTML-mode about-box. By default, this does nothing. Games can
use this routine to show an \<ABOUTBOX\> tag, if desired, to set up the
contents of an about-box for HTML TADS platforms.

Note that an \<ABOUTBOX\> tag must be re-initialized each time the main
game window is cleared, so this routine should be called again after any
call to clearScreen().



<span id="setGameTitle"></span>

`setGameTitle ( )`

[misc.t](../file/misc.t.html)\[[172](../source/misc.t.html#172)\]



Set the interpreter window title, if applicable to the local platform.
This simply displays a \<TITLE\> tag to set the title to the string
found in the versionInfo object.



<span id="showGoodbye"></span>

`showGoodbye ( )`

[misc.t](../file/misc.t.html)\[[84](../source/misc.t.html#84)\]



Show the "goodbye" message. This is called after the main command loop
terminates.

We don't show anything by default. If you want to show a "thanks for
playing" type of message as the game exits, override this routine with
the desired text.



<span id="showIntro"></span>

`showIntro ( )`

[misc.t](../file/misc.t.html)\[[74](../source/misc.t.html#74)\]



Show the game's introduction. This routine is called by the default
newGame() just before entering the main command loop. The command loop
starts off by showing the initial room description, so there's no need
to do that here.

Most games will want to override this, to show a prologue message
setting up the game's initial situation for the player. We don't show
anything by default.
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


