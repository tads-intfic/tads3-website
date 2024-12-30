[misc.t]{.title}[file]{.type}

[source file](../source/misc.t.html)

**Classes**\
[Summary](#_ClassSummary_)\
 

**Objects**\
[Summary](#_ObjectSummary_)\
 

**Functions**\
[Summary](#_FunctionSummary_)\
[Details](#_Functions_)

::: fdesc
Adapted for adv3Lite by Eric Eve

adv3Lite Library - miscellaneous definitions

This module contains miscellaneous definitions that don\'t have a
natural grouping with any larger modules, and which aren\'t complex
enough to justify modules of their own.
:::

[]{#_ClassSummary_}

::: mjhd
[Summary of Classes]{.hdln}  
:::

` `[`ArgumentMismatchError`](../object/ArgumentMismatchError.html)`  `[`FinishOption`](../object/FinishOption.html)`  `[`FinishType`](../object/FinishType.html)`  `[`GameMainDef`](../object/GameMainDef.html)`  `[`LCS`](../object/LCS.html)`  `[`LibraryError`](../object/LibraryError.html)`  `[`Script`](../object/Script.html)`  `[`SingletonIterator`](../object/SingletonIterator.html)`  `
[]{#_ObjectSummary_}

::: mjhd
[Summary of Global Objects]{.hdln}  
:::

` `[`adv3LibInit`](../object/adv3LibInit.html)`  `[`adv3LibPreinit`](../object/adv3LibPreinit.html)`  `[`finishOptionAmusing`](../object/finishOptionAmusing.html)`  `[`finishOptionCredits`](../object/finishOptionCredits.html)`  `[`finishOptionFullScore`](../object/finishOptionFullScore.html)`  `[`finishOptionQuit`](../object/finishOptionQuit.html)`  `[`finishOptionRestart`](../object/finishOptionRestart.html)`  `[`finishOptionRestore`](../object/finishOptionRestore.html)`  `[`finishOptionScore`](../object/finishOptionScore.html)`  `[`finishOptionUndo`](../object/finishOptionUndo.html)`  `[`ftDeath`](../object/ftDeath.html)`  `[`ftFailure`](../object/ftFailure.html)`  `[`ftGameOver`](../object/ftGameOver.html)`  `[`ftVictory`](../object/ftVictory.html)`  `[`libGlobal`](../object/libGlobal.html)`  `[`libObjectInitializer`](../object/libObjectInitializer.html)`  `[`restoreOptionRestoreAnother`](../object/restoreOptionRestoreAnother.html)`  `[`restoreOptionStartOver`](../object/restoreOptionStartOver.html)`  `[`unknownDest_`](../object/unknownDest_.html)`  `[`varDest_`](../object/varDest_.html)`  `
[]{#FunctionSummary_}

::: mjhd
[Summary of Global Functions]{.hdln}  
:::

` `[`cls`](#cls)`  `[`failedRestoreOptions`](#failedRestoreOptions)`  `[`findMatchingTopic`](#findMatchingTopic)`  `[`finishGame`](#finishGame)`  `[`finishGameMsg`](#finishGameMsg)`  `[`isEmptyStr`](#isEmptyStr)`  `[`isListSubset`](#isListSubset)`  `[`makeMentioned`](#makeMentioned)`  `[`matchCase`](#matchCase)`  `[`nilToList`](#nilToList)`  `[`objOfKind`](#objOfKind)`  `[`overrides`](#overrides)`  `[`partitionList`](#partitionList)`  `[`processOptions`](#processOptions)`  `[`setPlayer`](#setPlayer)`  `[`tryInt`](#tryInt)`  `[`tryNum`](#tryNum)`  `[`valToList`](#valToList)`  `

[]{#_Functions_}

::: mjhd
[Global Functions]{.hdln}  
:::

[]{#cls}

`cls ( )`

[misc.t](../file/misc.t.html)\[[420](../source/misc.t.html#420)\]

::: desc
Clear the main game window. In most cases, you should call this rather
than calling the low-level clearScreen() function directly, since this
routine takes care of a couple of chores that should usually be done at
the same time.

First, we flush the transcript to ensure that no left-over reports that
were displayed before we cleared the screen will show up on the new
screen. Second, we call the low-level clearScreen() function to actually
clear the display window. Finally, we re-display any \<ABOUTBOX\> tag,
to ensure that the about-box will still be around; this is necessary
because any existing \<ABOUTBOX\> tag is lost after the screen is
cleared.
:::

[]{#failedRestoreOptions}

`failedRestoreOptions ( )`

[misc.t](../file/misc.t.html)\[[981](../source/misc.t.html#981)\]

::: desc
Show failed startup restore options. If a restore operation fails at
startup, we won\'t just proceed with the game, but ask the user what
they want to do; we\'ll offer the options of restoring another game,
quitting, or starting the game from the beginning.
:::

[]{#findMatchingTopic}

`findMatchingTopic (voc, cls, =, Topic)`

[misc.t](../file/misc.t.html)\[[1550](../source/misc.t.html#1550)\]

::: desc
Find an existing Topic whose vocab is voc. If the cls parameter is
supplied it can be used to find a match in some other class, such as
Thing or Mentionable.
:::

[]{#finishGame}

`finishGame (extra)`

[misc.t](../file/misc.t.html)\[[970](../source/misc.t.html#970)\]

::: desc
finish the game, offering the given extra options but no message
:::

[]{#finishGameMsg}

`finishGameMsg (msg, extra)`

[misc.t](../file/misc.t.html)\[[912](../source/misc.t.html#912)\]

::: desc
Finish the game, showing a message explaining why the game has ended.
This can be called when an event occurs that ends the game, such as the
player character\'s death, winning, or any other endpoint in the story.

We\'ll show a message defined by \'msg\', using a standard format. The
format depends on the language, but in English, it\'s usually the
message surrounded by asterisks: \"\*\*\* You have won! \*\*\*\".
\'msg\' can be:

\
- nil, in which case we display nothing\
- a string, which we\'ll display as the message\
- a FinishType object, from which we\'ll get the message

After showing the message (if any), we\'ll prompt the user with options
for how to proceed. We\'ll always show the QUIT, RESTART, and RESTORE
options; other options can be offered by listing one or more
FinishOption objects in the \'extra\' parameter, which is given as a
list of FinishOption objects. The library defines a few non-default
finish options, such as finishOptionUndo and finishOptionCredits; in
addition, the game can subclass FinishOption to create its own custom
options, as desired.
:::

[]{#isEmptyStr}

`isEmptyStr (str)`

[misc.t](../file/misc.t.html)\[[1736](../source/misc.t.html#1736)\]

::: desc
A string is empty if it\'s nil or if when trimmed it\'s \'\'
:::

[]{#isListSubset}

`isListSubset (a, b)`

[misc.t](../file/misc.t.html)\[[1523](../source/misc.t.html#1523)\]

::: desc
Determine if list a is a subset of list b. a is a subset of b if every
element of a is in b.
:::

[]{#makeMentioned}

`makeMentioned (obj)`

[misc.t](../file/misc.t.html)\[[1490](../source/misc.t.html#1490)\]

::: desc
Set the mentioned property of obj to true. If obj is supplied as a list,
set every object\'s mentioned property in the list to true. This can be
used in room and object descriptions to mark an object as mentioned so
it won\'t be included in the listing.
:::

[]{#matchCase}

`matchCase (newTok, oldTok)`

[misc.t](../file/misc.t.html)\[[2215](../source/misc.t.html#2215)\]

::: desc
Change the case (upper/lower) of a given new string to match the case
pattern of the given original string.

We recognize four patterns:

\- If the original string has at least one capital letter and no
minuscules, we convert the new string to all caps. For example,
matchCase(\'ALPHA-1\', \'omicron-7\') yields \'OMICRON-7\'.

\- If the original string has at least one lower-case letter and no
capitals, we convert the new string to all lower case. E.g.,
matchCase(\'alpha-1\', \'OMICRON-7\') yields \'omicron-7\'.

\- If the original string starts with a capital letter, and has at least
one lower-case letter and no other capitals, we capitalize the first
letter of the new string and lower-case everything else. E.g.,
matchCase(\'Alpha-1\', \'OMICRON-7\') yields \'Omicron-7\'.

\- Otherwise, we match the case pattern of the input string letter for
letter: for each upper-case letter in the original, we capitalize the
letter at the corresponding character index in the new string, and
likewise with lower-case letters in the original. We leave other
characters unchanged. E.g., matchCase(\'AlPhA-1\', \'omicron-7\') yields
\'OmIcRon-7\'.
:::

[]{#nilToList}

`nilToList (val)`

[misc.t](../file/misc.t.html)\[[1456](../source/misc.t.html#1456)\]

::: desc
nilToList - convert a \'nil\' value to an empty list. This can be useful
for mix-in classes that will be used in different inheritance contexts,
since the classes might or might not inherit a base class definition for
list-valued methods such as preconditions. This provides a usable
default for list-valued methods that return nothing from superclasses.
:::

[]{#objOfKind}

`objOfKind (obj, cls)`

[misc.t](../file/misc.t.html)\[[2467](../source/misc.t.html#2467)\]

::: desc
Service function to determine whether obj is ofKind cls when obj might
not be an object.
:::

[]{#overrides}

`overrides (obj, base, prop)`

[misc.t](../file/misc.t.html)\[[436](../source/misc.t.html#436)\]

::: desc
Determine if the given object overrides the definition of the given
property inherited from the given base class. Returns true if the object
derives from the given base class, and the object\'s definition of the
property comes from a different place than the base class\'s definition
of the property.
:::

[]{#partitionList}

`partitionList (lst, fn)`

[misc.t](../file/misc.t.html)\[[1511](../source/misc.t.html#1511)\]

::: desc
partitionList - partition a list into a pair of two lists, the first
containing items that match the predicate \'fn\', the second containing
items that don\'t match \'fn\'. \'fn\' is a function pointer (usually an
anonymous function) that takes a single argument - a list element - and
returns true or nil.

The return value is a list with two elements. The first element is a
list giving the elements of the original list for which \'fn\' returns
true, the second element is a list giving the elements for which \'fn\'
returns nil.

(Contributed by Tommy Nordgren.)
:::

[]{#processOptions}

`processOptions (lst)`

[misc.t](../file/misc.t.html)\[[992](../source/misc.t.html#992)\]

::: desc
Process a list of finishing options. We\'ll loop, showing prompts and
reading responses, until we get a response that terminates the loop.
:::

[]{#setPlayer}

`setPlayer (actor, person, =, 2)`

[misc.t](../file/misc.t.html)\[[1566](../source/misc.t.html#1566)\]

::: desc
Set the player character to another actor. If the optional second
parameter is supplied, it sets the person of the player character;
otherwise it defaults to the second person.
:::

[]{#tryInt}

`tryInt (val)`

[misc.t](../file/misc.t.html)\[[1348](../source/misc.t.html#1348)\]

::: desc
Try converting val to an integer. If this results in an integer value,
return it, otherwise return nil.
:::

[]{#tryNum}

`tryNum (val)`

[misc.t](../file/misc.t.html)\[[1401](../source/misc.t.html#1401)\]

::: desc
Try converting val to a number (integer or BigNumber); return the number
if there is one, otherwise return nil.
:::

[]{#valToList}

`valToList (val)`

[misc.t](../file/misc.t.html)\[[1466](../source/misc.t.html#1466)\]

::: desc
val to list - convert any value to a list. If it\'s already a list,
simply return it. If it\'s nil return an empty list. If it\'s a
singleton value, return a one-element list containing it.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
