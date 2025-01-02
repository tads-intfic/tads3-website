---
layout: docs
---
<span class="title">ModuleID</span><span class="type">class</span>

[modid.t](../file/modid.t.html)\[[37](../source/modid.t.html#37)\]

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



Module ID. Each library add-in can define one of these, so that the
"credits" command and the like can automatically show the version of
each library module included in the finished game, without the game's
author having to compile a list of the module versions manually.

An easy way to implement a CREDITS command is to define a ModuleID
object for the game itself, and override the showCredit() method to
display the text of the game's credits. The module object for the game
itself should usually have a listingOrder of 1, because the author
usually will want the game's information to be displayed first in any
listing that shows each included library module (such as the VERSION
command's output).

`class `**`ModuleID`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ModuleID`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`ModuleID`**  
[`MetadataModuleID`](../object/MetadataModuleID.html)  
[`GameInfoModuleID`](../object/GameInfoModuleID.html)  
[`GameID`](../object/GameID.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`moduleAdv3`](../object/moduleAdv3.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`byline`](#byline)[`htmlByline`](#htmlByline)[`listingOrder`](#listingOrder)[`name`](#name)[`version`](#version)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`getModuleList`](#getModuleList)[`showAbout`](#showAbout)[`showCredit`](#showCredit)[`showVersion`](#showVersion)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="byline"></span>

`byline`

[modid.t](../file/modid.t.html)\[[42](../source/modid.t.html#42)\]



the "byline" for the module, in plain text and HTML versions



<span id="htmlByline"></span>

`htmlByline`

[modid.t](../file/modid.t.html)\[[43](../source/modid.t.html#43)\]



*no description available*



<span id="listingOrder"></span>

`listingOrder`

[modid.t](../file/modid.t.html)\[[143](../source/modid.t.html#143)\]



My listing order. When we compile a list of modules, we'll sort the
modules first by ascending listing order; any modules with the same
listing order will be sorted alphabetically by name with respect to the
other modules with the same listing order.

The value 1 is reserved for the game's own ID object. Note that the TADS
3 library defines a module ID with listing order 50, which is chosen so
that the main library credit will appear after the game credits but
before any extension credits using the default order value 100 that we
define here. Extensions are free, however, to use a number lower than 5
if they wish to appear before the main library credit.



<span id="name"></span>

`name`

[modid.t](../file/modid.t.html)\[[39](../source/modid.t.html#39)\]



my name



<span id="version"></span>

`version`

[modid.t](../file/modid.t.html)\[[46](../source/modid.t.html#46)\]



my version number string



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="getModuleList"></span>

`getModuleList ( )`

[modid.t](../file/modid.t.html)\[[149](../source/modid.t.html#149)\]



get a list of all of the modules that are part of the game, sorted in
listing order



<span id="showAbout"></span>

`showAbout ( )`

[modid.t](../file/modid.t.html)\[[127](../source/modid.t.html#127)\]



Show the "about this game" information. By default, we show nothing
here. Typically, only the game's module ID object will override this; in
the game's module ID object, this method should display any desired
background information about the game that the author wants the player
to see on typing the ABOUT command.

The ABOUT command conventionally displays information about the game and
its author - the kind of thing you'd find in an author's notes section
in a book - along with any special instructions to the player, such as
notes on unusual command syntax. Information that players will find
especially helpful include:

\- A list of any unusual command phrasings that the game uses. Ideally,
you will disclose here every verb that's required to complete the game,
beyond the basic set common to most games (LOOK, INVENTORY, NORTH,
SOUTH, TAKE, DROP, PUT IN, etc). By disclosing every necessary verb and
phrasing, you can be certain to avoid "guess the verb" puzzles. (Note
that it's possible to disclose every \*required\* verb without
disclosing every \*accepted\* verb - some verbs might be so suggestive
of a particular puzzle solution that you wouldn't want to disclose them,
but as long as you disclose less suggestive alternatives that can be
used to solve the same puzzles, you have a valid defense against
accusations of using "guess the verb" puzzles.)

\- A quick overview of the NPC conversation system, if any. Conversation
systems have been slowly evolving as authors experiment with different
styles, and at least three or four different conventions have emerged.
The default that experienced players will expect is the traditional
ASK/TELL system, so it's especially important to mention your system if
you're using something else.

\- An indication of the "cruelty" level of the game. In particular, many
experienced players find it helpful to know from the outset how careful
they have to be about saving positions throughout play, so it's helpful
to point out whether or not it's possible for the player character to be
killed; whether it's possible to get into situations where the game
becomes "unwinnable"; and if the game can become unwinnable, whether or
not this will become immediately clear. The kindest games never kill the
PC and are always winnable, no matter what actions the player takes;
it's never necessary to save these games except to suspend a session for
later resumption. The cruelest games kill the PC without warning
(although if they offer an UNDO command from a "death" prompt, then even
this doesn't constitute true cruelty), and can become unwinnable in ways
that aren't readily and immediately apparent to the player, which means
that the player could proceed for quite some time (and thus invest
substantial effort) after the game is already lost.

\- A description of any special status line displays or other on-screen
information whose meaning might not be immediately apparent.



<span id="showCredit"></span>

`showCredit ( )`

[modid.t](../file/modid.t.html)\[[56](../source/modid.t.html#56)\]



Show my library credit. By default won't show anything. Libraries should
generally not override this, because we want to leave it up to the
author to determine how the credits are displayed. If a library
overrides this, then the author won't be able to control the formatting
of the library credit, which is undesirable.



<span id="showVersion"></span>

`showVersion ( )`

[modid.t](../file/modid.t.html)\[[65](../source/modid.t.html#65)\]



Show version information. By default, we show our name and version
number, then start a new line. The main game's module ID should
generally override this to show an appropriate version message for the
game, and any library add-ins that want to display their version
information can override this to do so.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


