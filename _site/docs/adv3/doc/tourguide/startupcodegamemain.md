<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>Startup Code : gameMain<br />
</strong></td>
<td style="text-align: right;"><a href="templates.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="introduction.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
Before we can start writing the game proper, we need to provide a tiny
amount of startup code. Since TADS 3.0.6n the startup code you have to
supply for a game has been reduced to a minimum. Basically all you have
to do is to define a gameMain object that specifies the player
character, perhaps sets some options, and (optionally) shows the
introductory and concluding messages, something like:  
  
gameMain : GameMainDef  
   initialPlayerChar = me  
   showIntro()  
   {       
     "Finding yourself at a loose end in the Parser Valley,  
      you have wandered up to take a look at the famous  
      Eerhtsdat Caves. You're not entirely sure what they're  
      famous for, or why they should be worth a look, but that's  
      what it said the guidebook you found abandoned on the  
      back seat of the bus, so it must be true. Anyway, you're  
      here now, so you reckon you may as well take a look.\b";  
           
   }  
  
   setAboutBox()  
   {  
     "\<ABOUTBOX\>\<CENTER\>The Quest of the Golden Banana\b  
      v \<\<versionInfo.version\>\>\b  
      (c) 2004 Eric Eve\b  
      \</CENTER\>\</ABOUTBOX\>";  
   }  
     
   showGoodBye()  
   {  
     "\<.p\>Thanks for playing!";  
   }     
;  
  
You can do more than this on gameMain. Later on, for example, we'll be
discussing how you can set up the [maximum score](maxscore.htm) and a
[score rank table](scoreranktable.htm) here. You can also set the
properties **allowYouMeMixing** (true by default), and
**allVerbsAllowAll** (also true by default) In case it isn't obvious
what these do, here's how the comments in the library code describe
them:  
  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>allowYouMeMixing</strong> - Option flag: allow the player to
use "you" and "me" interchangeably in referring to the player character.
We set this true by default, so that the player can refer to the player
character in either the first or second person, as long as the player
character normally uses either or these (in other words, this option is
meaningless in a game when the narration refers to the player character
in the third person). If desired, the game can set this flag to nil to
force the player to use the correct pronoun to refer to the player
character. We set the default to allow using "you" and "me"
interchangeably because this will create no confusion in most games, and
because most experienced IF players will be accustomed to using "me" to
refer to the player character (because the majority of IF refers to the
player character in the second person, and expects the player to
conflate the player character with the player and hence to refer to the
player character in the first person). It is relatively unconventional
for a game to refer to the player character in the first person in the
narration, and thus to expect the player to use the second person to
refer to the PC; as a result, experienced players might tend to use the
first person out of habit in such games, and might find it jarring to
find the usage unacceptable. Furthermore, in games that use a
first-person narration, it seems unlikely that there will also be a
second-person element to the narration; as long as both aren't present,
it will cause no confusion for the game to accept either "you" or "me"
as equivalent in commands. However, the library provides this option in
case such as situation does arise.  <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>allVerbsAllowAll</strong> - if this option flag is set to
nil, ALL (as in TAKE ALL or X ALL) will only be allowed with the basic
inventory management commands TAKE, TAKE FROM, DROP, PUT IN and PUT ON.
By default allVerbsAllowAll is true, which means that ALL can be used
with all verbs that allow multiple direct objects (or multiple indirect
objects if your game defines any such verbs). If you wish, you can also
override the <strong>actionAllowsAll</strong> property on individual
actions to determine which of them will and will not accept ALL as a
noun phrase.  <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>initialPlayerChar</strong> - The initial player character.
Each game's 'gameMain' object MUST define this to refer to the Actor
object that serves as the initial player character.  <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>usePastTense</strong> - Flag: if true, the game will be
narrated in the <a href="pasttense.htm">past tense</a> instead of the
present tense (e.g. "On the table was a banana" instead of "On the table
is a banana"). This flag can also be switched in-game to switch between
past-tense and present-tense narration.  <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>verboseMode</strong> - Prior to version 3.0.9 this was a
logical (true/nil) flag; if it was true, the full room description was
displayed each time the player enters a room, regardless of whether or
not the player has seen the room before; if nil, the full description is
only displayed on the player's first entry to a room, and only the short
description on re-entry. Note that the library provides VERBOSE and
TERSE commands that let the player change this setting dynamically. From
TADS 3.0.9 this property has become a BinarySettingsItem that shouldn't
be overridden by the game author, first because doing so will almost
certainly cause a run-time error, and second because the intention with
the mechanism introduced in version 3.0.9 is that it is up to players
rather than authors to set the default they require. The moral: leave
this property alone unless you're <em>very</em> sure what you're doing
and have a very good reason for doing it. Moreover, if you're upgrading
an existing game from a pre-3.0.9 version to 3.0.9 or later, make sure
your gameMain <em>doesn't</em> override this property.  <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

  
Our gameMain object has defined the player character as an object called
me, so we next need to define this object, which, at a minimum, means
assigning it to an appropriate class and providing it with an initial
location:  
  
me: Actor  
    desc = "You look even better than the last time you looked. "  
    /\* the initial location \*/  
    location = outsideCave       
;  
  
<span id="versioninfo">We'll get round to defining the</span>
[outsideCave](outdoorroom.htm) location shortly. In the meantime there's
one more job we might want to get out of the way at this stage, and that
is to define the versionInfo object, which provides important
information about the game:  
  
versionInfo: GameID  
    IFID = 'cd03d4a8-f39b-ae69-693d-5fddc65f6dd8'  
    name = 'The Quest of the Golden Banana'  
    byline = 'by Eric Eve'  
    htmlByline = 'by \<a href="eric.eve@hmc.ox.ac.uk"\>  
                  Eric Eve\</a\>'  
    version = '1.0'  
    authorEmail = 'Eric Eve \<eric.eve@hmc.ox.ac.uk\>'  
    desc = 'A combination of cave exploration and time-travel with clear  
     allusions both to the Lord of the Rings and Dr Who, this game is  
     primarily an example game to provide a tutorial on the adv3   
     library for aspiring TADS 3 game authors.'  
    htmlDesc = 'A combination of cave exploration and time-travel with clear  
     allusions both to \<i\>The Lord of the Rings\</i\> and \<i\>Dr Who\</i\>, this game is  
     primarily an example game to provide a tutorial on the adv3   
     library for aspiring TADS 3 game authors.'  
  
    showCredit()  
    {  
        /\* show our credits \*/  
        "TADS 3 language and library by Michael J. Roberts ";  
  
        /\*   
         \*   The game credits are displayed first, but the library will  
         \*   display additional credits for library modules.  It's a good  
         \*   idea to show a blank line after the game credits to separate  
         \*   them visually from the (usually one-liner) library credits  
         \*   that follow.    
         \*/  
        "\b";  
    }  
    showAbout()  
    {  
        "Although this game is winnable, and some players may find it  
         tolerably entertaining, it is primarily designed as a  
         sample game and programming exercise to accompany the \<i\>TADS 3  
         Tour Guide\</i\>. The game has thus been designed to give  
         authors a reasonably comprehensive tour of the library, rather  
         than as a satisfactory playing experience by the standards  
         of modern IF. This may result in (a) a certain quirkiness about  
         the whole game, (b) somewhat bizarre and derivative plotting and  
         (c) incomplete implementation of non-essential aspects of the  
         game such as hints, scoring, and decoration objects. This is  
         because the game's primary audience - people trying to learn  
         how to program with the TADS 3 library - only need a limited  
         number of examples of each feature.\b  
         There should, however, be no actual bugs in the game (that is,  
         there are not \<i\>meant\</i\> to be any actual bugs, although   
         there almost certainly \<i\>will\</i\> be some in practice), so should  
         you encounter any, the author would be grateful for a bug  
         report. ";  
    }  
;  
  
The first half of this object definition basically defines the
bibliographical metadata for the game (for a full explanation see the
'Bibliographical Metadata' article in the *Technical Manual*). Note in
particular the first field, **IFID**. This is a unique identifier for
your game (a little like an ISBN number for published books), which must
be unique to your game. It is essentially a set of random hexadecimal
digits (0-9, a-f) in the format xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx. If
you create a project in Workbench this number will automatically be
generated for you. If you are creating your project by some other means,
you will need to ensure that you add such a number to your definition of
versionInfo. To obtain an IFID that is guaranteed to be truly random, as
this needs to be (to ensure the avoidance with IFID numbers assigned to
other games), you can use the TADS IFID generator at
<a href="%20http://www.tads.org/ifidgen/ifidgen"
target="_top">http://www.tads.org/ifidgen/ifidgen</a>. The other
bibliographical data (such as the name of the game and its author)
should be fairly self-explanatory (but see the
'<a href="../techman/gameinfo.htm" target="_top">Bibliographical
Metadata</a>' article for full details). The final two methods contain
the text that should be displayed in response to the **credits** and
**about** command. Of course, you may prefer the latter to launch a menu
rather than just display a text dump.  
  
