---
layout: docs
---
<span class="title">libGlobal</span><span class="type">object</span>

[misc.t](../file/misc.t.html)\[[571](../source/misc.t.html#571)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)



Library global variables

**`libGlobal`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`libGlobal`**  
`         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



` [`commandLineArgs`](#commandLineArgs)  [`curAction`](#curAction)  [`curActor`](#curActor)  [`curCommand`](#curCommand)  [`curIssuingActor`](#curIssuingActor)  [`exitListerObj`](#exitListerObj)  [`extraDestInfo`](#extraDestInfo)  [`extraHintManagerObj`](#extraHintManagerObj)  [`footnoteClass`](#footnoteClass)  [`hintManagerObj`](#hintManagerObj)  [`IFID`](#IFID)  [`inventoryTall`](#inventoryTall)  [`lastAction`](#lastAction)  [`lastActorForUndo`](#lastActorForUndo)  [`lastCommand`](#lastCommand)  [`lastCommandForAgain`](#lastCommandForAgain)  [`lastCommandForUndo`](#lastCommandForUndo)  [`lastLoc`](#lastLoc)  [`lastTypedOnObj`](#lastTypedOnObj)  [`lastWrittenOnObj`](#lastWrittenOnObj)  [`libMessageObj`](#libMessageObj)  [`nameTable_`](#nameTable_)  [`objectNameTab`](#objectNameTab)  [`parserDebugMode`](#parserDebugMode)  [`playerChar`](#playerChar)  [`playerCharName`](#playerCharName)  [`revealedNameTab`](#revealedNameTab)  [`scoreObj`](#scoreObj)  [`thoughtManagerObj`](#thoughtManagerObj)  [`totalTurns`](#totalTurns)  `

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



` [`addExtraDestInfo`](#addExtraDestInfo)  [`getCommandSwitch`](#getCommandSwitch)  [`setRevealed`](#setRevealed)  [`setUnrevealed`](#setUnrevealed)  `

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="commandLineArgs"></span>

`commandLineArgs`

[misc.t](../file/misc.t.html)\[[702](../source/misc.t.html#702)\]



Command line arguments. The library sets this to a list of strings
containing the arguments passed to the program on the command line. This
list contains the command line arguments parsed according to the local
conventions for the operating system and C++ library. The standard
parsing procedure used by most systems is to break the line into tokens
delimited by space characters. Many systems also allow space characters
to be embedded in tokens by quoting the tokens. The first argument is
always the name of the .t3 file currently executing.



<span id="curAction"></span>

`curAction`

[misc.t](../file/misc.t.html)\[[663](../source/misc.t.html#663)\]



*no description available*



<span id="curActor"></span>

`curActor`

[misc.t](../file/misc.t.html)\[[661](../source/misc.t.html#661)\]



Current command information. We keep track of the current command's
actor and action here.



<span id="curCommand"></span>

`curCommand`

[misc.t](../file/misc.t.html)\[[666](../source/misc.t.html#666)\]



The current Command object



<span id="curIssuingActor"></span>

`curIssuingActor`

[misc.t](../file/misc.t.html)\[[662](../source/misc.t.html#662)\]



*no description available*



<span id="exitListerObj"></span>

`exitListerObj`

[misc.t](../file/misc.t.html)\[[675](../source/misc.t.html#675)\]



the exitLister object, if included in the build



<span id="extraDestInfo"></span>

`extraDestInfo`

[misc.t](../file/misc.t.html)\[[757](../source/misc.t.html#757)\]



A lookup table to store information about the destinations of direction
properties not connected to objects (i.e. direction properties defined
as strings or methods



<span id="extraHintManagerObj"></span>

`extraHintManagerObj`

[misc.t](../file/misc.t.html)\[[681](../source/misc.t.html#681)\]



the extra hint manager, if included in the build



<span id="footnoteClass"></span>

`footnoteClass`

[misc.t](../file/misc.t.html)\[[618](../source/misc.t.html#618)\]



The global Footnote class object. We use a global for this, rather than
referencing Footnote directly, to allow the footnote module to be left
out entirely if the game doesn't make use of footnotes. The footnote
class should set this during pre-initialization.



<span id="hintManagerObj"></span>

`hintManagerObj`

[misc.t](../file/misc.t.html)\[[678](../source/misc.t.html#678)\]



the hint manager, if included in the build



<span id="IFID"></span>

`IFID`

[misc.t](../file/misc.t.html)\[[689](../source/misc.t.html#689)\]



The game's IFID, as defined in the game's main module ID object. If the
game has multiple IFIDs in the module list, this will store only the
first IFID in the list. NOTE: the library initializes this automatically
during preinit; don't set this manually.



<span id="inventoryTall"></span>

`inventoryTall`

[misc.t](../file/misc.t.html)\[[851](../source/misc.t.html#851)\]



Flag determining whether inventory listing should be in the wide (nil)
or tall (true) format. By default we start out with the wide format
(inventoryTall = nil), although game code could override this.



<span id="lastAction"></span>

`lastAction`

[misc.t](../file/misc.t.html)\[[669](../source/misc.t.html#669)\]



The last action to be performed.



<span id="lastActorForUndo"></span>

`lastActorForUndo`

[misc.t](../file/misc.t.html)\[[652](../source/misc.t.html#652)\]



Most recent target actor phrase; this goes with lastCommandForUndo. This
is nil if the last command did not specify an actor (i.e., was
implicitly for the player character), otherwise is the string the player
typed specifying a target actor.



<span id="lastCommand"></span>

`lastCommand`

[misc.t](../file/misc.t.html)\[[672](../source/misc.t.html#672)\]



The previous Command object



<span id="lastCommandForAgain"></span>

`lastCommandForAgain`

[misc.t](../file/misc.t.html)\[[655](../source/misc.t.html#655)\]



The text of the last command to be repeated by Again



<span id="lastCommandForUndo"></span>

`lastCommandForUndo`

[misc.t](../file/misc.t.html)\[[643](../source/misc.t.html#643)\]



Most recent command, for 'undo' purposes. This is the last command the
player character performed, or the last initial command a player
directed to an NPC.

Note that if the player directed a series of commands to an NPC with a
single command line, only the first command on such a command line is
retained here, because it is only the first such command that counts as
a player's turn in terms of the game clock. Subsequent commands are
executed by the NPC's on the NPC's own time, and do not count against
the PC's game clock time. The first command counts against the PC's
clock because of the time it takes the PC to give the command to the
NPC.



<span id="lastLoc"></span>

`lastLoc`

[misc.t](../file/misc.t.html)\[[749](../source/misc.t.html#749)\]



The last location visited by the player char before a travel action.
Noted to allow travel back.



<span id="lastTypedOnObj"></span>

`lastTypedOnObj`

[misc.t](../file/misc.t.html)\[[838](../source/misc.t.html#838)\]



The object last typed on



<span id="lastWrittenOnObj"></span>

`lastWrittenOnObj`

[misc.t](../file/misc.t.html)\[[835](../source/misc.t.html#835)\]



The object last written on



<span id="libMessageObj"></span>

`libMessageObj`

[misc.t](../file/misc.t.html)\[[593](../source/misc.t.html#593)\]



The current library messages object. This is the source object for
messages that don't logically relate to the actor carrying out the
comamand. It's mostly used for meta-command replies, and for text
fragments that are used to construct descriptions.

This message object isn't generally used for parser messages or action
replies - most of those come from the objects given by the current
actor's getParserMessageObj() or getActionMessageObj(), respectively.

By default, this is set to libMessages. The library never changes this
itself, but a game can change this if it wants to switch to a new set of
messages during a game. (If you don't need to change messages during a
game, but simply want to customize some of the default messages, you
don't need to set this variable - you can simply use 'modify
libMessages' instead. This variable is designed for cases where you want
to \*dynamically\* change the standard messages during the game.)



<span id="nameTable_"></span>

`nameTable_`

[misc.t](../file/misc.t.html)\[[844](../source/misc.t.html#844)\]



our name table for parameter substitutions - a LookupTable that we set
up during preinit



<span id="objectNameTab"></span>

`objectNameTab`

[misc.t](../file/misc.t.html)\[[829](../source/misc.t.html#829)\]



The symbol table for every game object.



<span id="parserDebugMode"></span>

`parserDebugMode`

[misc.t](../file/misc.t.html)\[[627](../source/misc.t.html#627)\]



flag: the parser is in 'debug' mode, in which it displays the parse tree
for each command entered



<span id="playerChar"></span>

`playerChar`

[misc.t](../file/misc.t.html)\[[598](../source/misc.t.html#598)\]



The current player character



<span id="playerCharName"></span>

`playerCharName`

[misc.t](../file/misc.t.html)\[[601](../source/misc.t.html#601)\]



The name of the current player character



<span id="revealedNameTab"></span>

`revealedNameTab`

[misc.t](../file/misc.t.html)\[[824](../source/misc.t.html#824)\]



The global lookup table of all revealed keys. This table is keyed by the
string naming the revelation; the value associated with each key is not
used (we always just set it to true).



<span id="scoreObj"></span>

`scoreObj`

[misc.t](../file/misc.t.html)\[[609](../source/misc.t.html#609)\]



The global score object. We use a global for this, rather than
referencing libScore directly, to allow the score module to be left out
entirely if the game doesn't make use of scoring. The score module
should set this during pre-initialization.



<span id="thoughtManagerObj"></span>

`thoughtManagerObj`

[misc.t](../file/misc.t.html)\[[832](../source/misc.t.html#832)\]



The thought manager object, if it exists.



<span id="totalTurns"></span>

`totalTurns`

[misc.t](../file/misc.t.html)\[[621](../source/misc.t.html#621)\]



the total number of turns so far



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="addExtraDestInfo"></span>

`addExtraDestInfo (source, dirn, dest)`

[misc.t](../file/misc.t.html)\[[766](../source/misc.t.html#766)\]



Add an item to the extraDestInfo table keyed on the source room plus the
direction taken, with the value being the destination arrived at (which
most of the time will probably be the same as the source, since in most
cases where we create one of these records, no travel will have taken
place.



<span id="getCommandSwitch"></span>

`getCommandSwitch (s)`

[misc.t](../file/misc.t.html)\[[722](../source/misc.t.html#722)\]



Retrieve a "switch" from the command line. Switches are options
specifies with the conventional Unix "-xxx" notation. This searches for
a command option that equals the given string or starts with the given
substring. If we find it, we return the part of the option after the
given substring - this is conventionally the value of the switch. For
example, the command line might look like this:

  
t3run mygame.t3 -name=MyGame -user=Bob

Searching for '-name=' would return 'MyGame', and searching for '-user='
would return' Bob'.

If the switch is found but has no value attached, the return value is an
empty string. If the switch isn't found at all, the return value is nil.



<span id="setRevealed"></span>

`setRevealed (tag)`

[misc.t](../file/misc.t.html)\[[800](../source/misc.t.html#800)\]



Mark a tag as revealed. This adds an entry for the tag to the
revealedNameTab table. We simply set the table entry to 'true'; the
presence of the tag in the table constitutes the indication that the tag
has been revealed.

(Games and library extensions can use 'modify' to override this and
store more information in the table entry. For example, you could store
the time when the information was first revealed, or the location where
it was learned. If you do override this, just be sure to set the
revealedNameTab entry for the tag to a non-nil and non-zero value, so
that any code testing the presence of the table entry will see that the
slot is indeed set.)

We put the revealedNameTab table and the setRevealed method here rather
than on conversationManager so that it's available to games that don't
include actor.t.



<span id="setUnrevealed"></span>

`setUnrevealed (tag)`

[misc.t](../file/misc.t.html)\[[813](../source/misc.t.html#813)\]



Mark a tag as unrevealed. This removes the entry for the tag from the
revealedNameTab table.

We put the revealedNameTab table and the setRevealed method here rather
than on conversationManager so that it's available to games that don't
include actor.t.





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


