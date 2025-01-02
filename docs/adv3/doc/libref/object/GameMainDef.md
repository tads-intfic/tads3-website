---
layout: docs
---
<span class="title">GameMainDef</span><span class="type">class</span>

[misc.t](../file/misc.t.html)\[[55](../source/misc.t.html#55)\],
[en_us.t](../file/en_us.t.html)\[[160](../source/en_us.t.html#160)\]

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
[en_us.t](../file/en_us.t.html)\[[160](../source/en_us.t.html#160)\]:*  
Language-specific extension of the default gameMain object
implementation.

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



[`allowYouMeMixing`](#allowYouMeMixing)[`allVerbsAllowAll`](#allVerbsAllowAll)[`ambigAnnounceMode`](#ambigAnnounceMode)[`beforeRunsBeforeCheck`](#beforeRunsBeforeCheck)[`cancelCmdLineOnFailure`](#cancelCmdLineOnFailure)[`filterPluralMatches`](#filterPluralMatches)[`initialPlayerChar`](#initialPlayerChar)[`parserTruncLength`](#parserTruncLength)[`scoreRankTable`](#scoreRankTable)[`useDistinguishersInAnnouncements`](#useDistinguishersInAnnouncements)[`usePastTense`](#usePastTense)[`verboseMode`](#verboseMode)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`getSaveDesc`](#getSaveDesc)[`maxScore`](#maxScore)[`newGame`](#newGame)[`restoreAndRunGame`](#restoreAndRunGame)[`setAboutBox`](#setAboutBox)[`setGameTitle`](#setGameTitle)[`showGoodbye`](#showGoodbye)[`showIntro`](#showIntro)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="allowYouMeMixing"></span>

`allowYouMeMixing`

[misc.t](../file/misc.t.html)\[[350](../source/misc.t.html#350)\]



Option flag: allow the player to use "you" and "me" interchangeably in
referring to the player character. We set this true by default, so that
the player can refer to the player character in either the first or
second person, regardless of how the game refers to the PC.

If desired, the game can set this flag to nil to force the player to use
the correct pronoun to refer to the player character. We define
"correct" in the case of first or second person as the complement of
what the game uses: if the game calls the PC "me", the player must say
"you", and vice versa. In a third-person game, the player must also
refer to the PC in the third person.

We set the default to allow using "you" and "me" interchangeably because
(a) this will create no confusion in most games, and (b) many players
would be annoyed otherwise. For one thing, most experienced IF players
will be rather set in their ways; they'll be accustomed to using either
"me" or "you" (but usually "me") to refer to the PC, and will tend out
of habit to do so even in games that don't use the traditional
second-person narration format. For another thing, different players
have different ideas about whether the PC is "you" or "me" in input,
even in a conventional second-person game. Some players think in terms
of a conversation with the narrator, in which case the narrator's "you"
is the player's "me", and vice versa; other players are rather more
literal-minded, assuming that if the game talks about "you" then so
should the player.

Even in games that use first-person or third-person narration, it seems
unlikely that there will be a separate second-person element to the
narration, and as long as that's true, it should cause no confusion for
the game to accept "you" and "me" as equivalent in commands. However,
the library provides this option in case such as situation does arise.



<span id="allVerbsAllowAll"></span>

`allVerbsAllowAll`

[misc.t](../file/misc.t.html)\[[385](../source/misc.t.html#385)\]



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



<span id="ambigAnnounceMode"></span>

`ambigAnnounceMode`

[misc.t](../file/misc.t.html)\[[499](../source/misc.t.html#499)\]



How should we handle object announcements when an object is
automatically disambiguated? This controls how an action is described
when the parser uses the logicalness rules to narrow down the object for
a noun phrase when the noun phrase could refer to multiple in-scope
objects. There are three options:

AnnounceUnclear - Make a parenthetical announcement only when the choice
is \*not\* clear (as described below). This is the original library
behavior, from before this option was added.

AnnounceClear - Make a parenthetical announcement (for example, "(the
red door)") for all disambiguated objects, whether clear or unclear. We
don't make an announcement when there's only one in-scope object
matching the noun phrase - the announcement is only when multiple
objects match the words.

DescribeClear - For \*unclear\* disambiguation, make a parenthetical
announcement, to emphasize that the parser had to make a choice. For
\*clear\* disambiguation, skip the announcement, but \*do\* use a
verbose version of the library message in place of one of the terse
default replies. For example, for \>TAKE BOX, instead of "Taken", we
would reply "You take the green box." The longer reply in these cases
always mentions the involved object by name, to make it clear exactly
which object we chose to use.

The default setting is DescribeClear.

This only applies when the disambiguation choice is clear - that is,
when there's exactly one in-scope object that passes the logicalness
tests. For example, if the current location contains a red door that's
open and a green door that's closed, CLOSE DOOR clearly refers to the
red door because the other one is already closed - it's not logical.
There are other cases where the disambiguation is a best guess rather
than a clear choice, such as when there are multiple logical objects but
there's one that's more likely than the others due to the logicalRank
results. In those best-guess situations, the parser always announces its
decision, because it's entirely plausible that the player meant one of
the other logical, but less likely, choices.



<span id="beforeRunsBeforeCheck"></span>

`beforeRunsBeforeCheck`

[misc.t](../file/misc.t.html)\[[518](../source/misc.t.html#518)\]



Should the "before" notifications (beforeAction, roomBeforeAction, and
actorAction) run before or after the "check" phase?

The library traditionally ran the "before" notifiers first, so this is
the default. However, in many ways it's more logical and useful to run
"check" first. That way, you can consider the action to be more or less
committed by the time the "before" notifiers are invoked. Of course, a
command is never \*truly\* committed until it's actually been executed,
since a "before" handler could always cancel it. But this is relatively
rare - "before" handlers usually carry out side effects, so it's very
useful to be able to know that the command has already passed all of its
own internal checks by the time "before" is invoked - that way, you can
invoke side effects without worrying that the command will subsequently
fail.



<span id="cancelCmdLineOnFailure"></span>

`cancelCmdLineOnFailure`

[misc.t](../file/misc.t.html)\[[421](../source/misc.t.html#421)\]



When a command fails, should we continue processing any remaining
commands on the same command line, or simply ignore them? The reason we
might want to ignore additional commands is that they might not do what
the player was expecting if an earlier command failed; this can
sometimes create confusing situations, because the player expected one
effect but got something quite different. On the other hand, \*not\*
executing all the commands on the command line could be confusing in its
own way, since the game's assessment of what constitutes "failure" might
not be clear to the player; from the player's perspective, the game
might appear to be inexplicably skipping commands.

There's no perfect solution. As always, the ideal is to understand the
player's intentions and act accordingly. But when a command fails, it's
usually because the player's idea of what's going on is out of sync with
the game's - in other words, if we're in this situation to start with,
it's probably because our best effort to understand the player's
intentions has already failed. This isn't always the case; sometimes we
understand the player's intentions perfectly well, but the command fails
anyway because of some surprising new development. In these cases,
aborting the rest of the command is arguably the right approach, because
the player will need a chance to reconsider the pre-typed commands in
light of the new information. In other cases, though, it's not so clear.
For many players, the prime virtue for the parser is to be predictable,
and the most predictable thing to do is to simply plow through the rest
of the command line in all cases.

Our traditional approach (from the early adv3 versions, and even in tads
2) has been the simple-minded approach - just keep going in all cases.
So, we make this the default. You can abort remaining commands on a
command failure by setting this to true.



<span id="filterPluralMatches"></span>

`filterPluralMatches`

[misc.t](../file/misc.t.html)\[[366](../source/misc.t.html#366)\]



Option flag: filter plural phrase matches exclude the most obvious
illogicalities, such as trying to TAKE an object that's already being
held, or trying to OPEN an object that's already open.

This is set to true by default, which means that we exclude an object
from matching a plural phrase when the object's "verify" routine for the
verb has an "illogical-already" or an "illogical-self" result.

If you would prefer that plural words are simply matched to everything
present that matches the vocabulary, without any filtering at all,
override this and set it to nil.



<span id="initialPlayerChar"></span>

`initialPlayerChar`

[misc.t](../file/misc.t.html)\[[61](../source/misc.t.html#61)\]



The initial player character. Each game's 'gameMain' object MUST define
this to refer to the Actor object that serves as the initial player
character.



<span id="parserTruncLength"></span>

`parserTruncLength`

[en_us.t](../file/en_us.t.html)\[[191](../source/en_us.t.html#191)\]



Option setting: the parser's truncation length for player input. As a
convenience to the player, we can allow the player to truncate long
words, entering only the first, say, 6 characters. For example, rather
than typing "x flashlight", we could allow the player to simply type "x
flashl" - truncating "flashlight" to six letters.

We use a default truncation length of 6, but games can change this by
overriding this property in gameMain. We use a default of 6 mostly
because that's what the old Infocom games did - many long-time IF
players are accustomed to six-letter truncation from those games.
Shorter lengths are superficially more convenient for the player,
obviously, but there's a trade-off, which is that shorter truncation
lengths create more potential for ambiguity. For some games, a longer
length might actually be better for the player, because it would reduce
spurious ambiguity due to the parser matching short input against long
vocabulary words.

If you don't want to allow the player to truncate long words at all, set
this to nil. This will require the player to type every word in its
entirety.

Note that changing this property dynamicaly will have no effect. The
library only looks at it once, during library initialization at the very
start of the game. If you want to change the truncation length
dynamically, you must instead create a new StringComparator object with
the new truncation setting, and call
languageGlobals.setStringComparator() to select the new object.



<span id="scoreRankTable"></span>

`scoreRankTable`

[misc.t](../file/misc.t.html)\[[297](../source/misc.t.html#297)\]



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



<span id="useDistinguishersInAnnouncements"></span>

`useDistinguishersInAnnouncements`

[misc.t](../file/misc.t.html)\[[456](../source/misc.t.html#456)\]



Should we use distinguishers when generating action object announcement
messages? If this is set, announcement messages that list objects by
name will add distinguishing details to indicate specifically which
objects are being referred to. This applies to messages announcing
default objects, vaguely matched objects, and multiple objects.

A distinguisher is a parser object that tells two objects apart by some
feature that's different in the two objects. The key thing is that the
difference has some natural language phrasing associated with it, both
on the input side and the output side. For example, the locational
distinguisher can tell two objects apart if they have different
containers, since it can describe the objects by adding containment
phrases like "in the box" or "on the table".

When this flag is turned on, the parser will try to pick a distinguisher
that can tell apart the specific objects mentioned in the announcement,
from one another or from other objects in scope, depending on the
context. The point is to help make it clearer to the player the exact
objects being referred to.

Even when this flag is set, the parser tries to minimize the use of
additional distinguishing detail. The goal is to be natural in the
usage, adding detail only when a human speaker would, which is when the
phrasing would otherwise be ambiguous.

Setting this flag to nil makes the parser simply use the basic name of
each object in an announcement. You can use this setting if you find
that the distinguisher mode generates too much fussy detail for your
taste.



<span id="usePastTense"></span>

`usePastTense`

[en_us.t](../file/en_us.t.html)\[[206](../source/en_us.t.html#206)\]



Option: are we currently using a past tense narrative? By default, we
aren't.

This property can be reset at any time during the game in order to
switch between the past and present tenses. The macro setPastTense can
be used for this purpose: it just provides a shorthand for setting
gameMain.usePastTense directly.

Authors who want their game to start in the past tense can achieve this
by overriding this property on their gameMain object and giving it a
value of true.



<span id="verboseMode"></span>

`verboseMode`

[misc.t](../file/misc.t.html)\[[312](../source/misc.t.html#312)\]



Verbose mode. If this is on, the full room description is displayed each
time the player enters a room, regardless of whether or not the player
has seen the room before; if this is nil, the full description is only
displayed on the player's first entry to a room, and only the short
description on re-entry. Note that the library provides VERBOSE and
TERSE commands that let the player change this setting dynamically.

We use a BinarySettingsItem to store the current mode, so that this
setting's default will be taken from the user's global cross-game
preferences.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="getSaveDesc"></span>

`getSaveDesc (userDesc)`

[misc.t](../file/misc.t.html)\[[219](../source/misc.t.html#219)\]



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

[misc.t](../file/misc.t.html)\[[264](../source/misc.t.html#264)\]



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

[misc.t](../file/misc.t.html)\[[97](../source/misc.t.html#97)\]



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

[misc.t](../file/misc.t.html)\[[133](../source/misc.t.html#133)\]



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

[misc.t](../file/misc.t.html)\[[181](../source/misc.t.html#181)\]



Set up the HTML-mode about-box. By default, this does nothing. Games can
use this routine to show an \<ABOUTBOX\> tag, if desired, to set up the
contents of an about-box for HTML TADS platforms.

Note that an \<ABOUTBOX\> tag must be re-initialized each time the main
game window is cleared, so this routine should be called again after any
call to clearScreen().



<span id="setGameTitle"></span>

`setGameTitle ( )`

[misc.t](../file/misc.t.html)\[[166](../source/misc.t.html#166)\]



Set the interpreter window title, if applicable to the local platform.
This simply displays a \<TITLE\> tag to set the title to the string
found in the versionInfo object.



<span id="showGoodbye"></span>

`showGoodbye ( )`

[misc.t](../file/misc.t.html)\[[83](../source/misc.t.html#83)\]



Show the "goodbye" message. This is called after the main command loop
terminates.

We don't show anything by default. If you want to show a "thanks for
playing" type of message as the game exits, override this routine with
the desired text.



<span id="showIntro"></span>

`showIntro ( )`

[misc.t](../file/misc.t.html)\[[73](../source/misc.t.html#73)\]



Show the game's introduction. This routine is called by the default
newGame() just before entering the main command loop. The command loop
starts off by showing the initial room description, so there's no need
to do that here.

Most games will want to override this, to show a prologue message
setting up the game's initial situation for the player. We don't show
anything by default.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


