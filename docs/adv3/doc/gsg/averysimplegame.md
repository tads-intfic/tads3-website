---
layout: docs
---


[<img src="topbar.jpg" data-border="0" />](index.html)
[\[Main\]](index.html)  
*[\[Previous\]](chapter2.html)   [\[Next\]](addingitemstothegame.html)*

## A Very Simple Game

We'll start with about the simplest game possible: two rooms, and no
objects. (We could conceivably start with only one room, to make things
even simpler, but then there would be nothing to do while playing the
game; with two rooms, we at least can move between them.)


The basis for the game we shall be developing is the so-called
'advanced' starter game starta3.t, which should be located in the
samples subdirectory of your TADS 3 directory. If you are using the TADS
3 Workbench, select New Project, choose the 'advanced' rather than the
'beginner' option, call the new file you are about to create
'goldskull.t' and locate it in whichever directory you want to work
(it's probably a good idea to create a new directory called Goldskull or
the like for the purpose). Otherwise, if you are not using Workbench,
copy starta3.t to your new Goldskull directory and rename it
goldskull.t. Again, if you are *not* using Workbench you will need to
use your text editor to create a file called goldskull.t3m (in the same
location) containing the following:  


-DLANGUAGE=en_us  
-DMESSAGESTYLE=neu  
-Fy obj -Fo obj  
-o goldskull.t3  
-lib system  
-lib adv3/adv3  
-source goldskull  


Now open goldskull.t in Workbench (if you’re using Workbench) or else in
text editor of your choice; the TADS Compiler will accept an ASCII file
produced with any editor. Then remove (or modify as shown below) the
definition of startroom, i.e. the lines that read:  


startRoom: Room 'Start Room'  
    "This is the starting room. "  
;  


If you started from starta3.t your file should already contain the vital
lines:  


\#charset "us-ascii"  
\#include \<adv3.h\>  
\#include \<en_us.h\>  
  
If not, you will need to add them. You will also need to ensure that
your source file contains:  


gameMain: GameMainDef  
    /\* the initial player character is 'me' \*/  
    initialPlayerChar = me  
;  
  
/\* You could customize this if you wished \*/  
versionInfo: GameID    
 /\* The IFID can be any random set of hexadecimal digits in this format \*/  
IFID = '5b252939-8c87-0a51-dd3f-eafb1c07da05'  
    name = 'Gold Skull'  
    byline = 'by A TADS 3 Tyro'  
    htmlByline = 'by \<a href="mailto:\$EMAIL\$"\>  
                  \$AUTHOR\$\</a\>'  
    version = '1'  
    authorEmail = '\$AUTHOR\$ \<\$EMAIL\$\>'  
    desc = '\$DESC\$'  
    htmlDesc = '\$HTMLDESC\$'  
;  
  
Then you can start adding the new code (or adapting the definition of
startroom that starta3.t already provides):  
  
  
startroom: Room                  /\* we could call this anything we liked \*/  
    roomName = 'Outside cave'    /\* the "name" of the room \*/  
    desc = "You're standing in the bright sunlight just  
    outside of a large, dark, foreboding cave, which  
    lies to the north. "  
    north = cave         /\* the room called "cave" lies to the north \*/  
  ;  
  
+ me: Actor /\* This may already be there if you started from starta3.t \*/  
;  
  
cave: Room  
    roomName = 'Cave'  
    desc = "You're inside a dark and musty cave. Sunlight  
    pours in from a passage to the south. "  
    south = startroom  
;  


To run this example, all you have to do is compile it with t3make, the
TADS 3 Compiler, and run it with t3run, the TADS 3 Run-time system. If
you are using Workbench, this is all handled for you; you can simply
choose the 'Compile and Run' from the 'Build' menu (or click the
appropriate icons on the task bar). If you're not using Workbench, then
on most operating systems you can compile your game by typing this:  




t3make -d -f goldskull and you can run it by typing this:  
  

t3run mygame  If you have difficulty getting this to work, consult the README file
that came with your distribution. It's possible, for example, that you
may need to manually create a subdirectory called obj under you main
game directory (Workbench handles this automatically).  


Now we'll walk through the sample game line by line.  


The \#include command inserts another sourcefile into your program. The
file called adv3.h is a set of basic definitions that allows your game
to work properly with the adv3 library (note that the library files
themselves are *not* included; for a full explanation of this see the
article on 'Separate Compilation' in the *Technical Manual*, but there's
no need to do that right now). The actual adv3 library files are
included in your project by virtue of your goldskull.t3m file (which
Workbench will have created for you automatically, if you are using
Workbench). You should be able to use these definitions, with few
changes, for most adventure games. By incorporating the adv3 library in
your game, you don't need to worry about definitions for basic words
such as "the," a large set of verbs (such as "take," "north," and so
forth), and many object classes (more on these in a bit).  


The line including en_us.h is similar; it contains some additional
standard definitions to interface with the parts of the library that are
specific to the English language. The reason for placing these
definitions in a separate file is that it is then much easier to
customize TADS 3 to work with other languages.  


The line that says startroom: Room tells the compiler that you're going
to define a room named "startroom". Now, a Room is nothing special to
the TADS 3 *language*, but the adv3 *library* that you incorporated
defines what a Room is. A Room is one of those object classes we
mentioned. The next line defines the roomName for this room. A
roomName is a short description; for a room, it is normally displayed
whenever a player enters the room. The desc is the long description; it
is normally displayed the first time a player enters the room, and can
be displayed by the player by typing "look". Finally, the
north definition says that another room, called cave, is reached when
the player types **north** while in startroom.  


A bit of terminology: startroom and cave are *objects*, belonging to the
*class* Room; roomName, desc, north, and the like are *properties* of
their respective objects. In the context of TADS programming, an object
is a named entity which is defined like startroom; each object has a
class, which defines how the object behaves and what kind of data it
contains. Note that our usage is sometimes a little loose, and we will
also use "object" the way a player would, to refer to something in the
game that a player can manipulate. In fact, each item that the player
thinks of as an object is actually represented by a TADS object
(sometimes several, in fact); but your TADS program will contain many
objects that the player doesn't directly manipulate, such as rooms.  


If you're familiar with other programming languages, you may notice that
the program above appears to be entirely definitions of objects; you may
wonder where the program starts running. The answer is that the program
doesn't have an obvious beginning in the code we typed.  


TADS 3 employs a style of programming different from that you may have
encountered before; this new style may take a little getting used to,
but you'll find that it is quite powerful for writing adventure games
and simplifies the task considerably. Most programming languages are
"procedural"; you specify a series of steps that the computer executes
in sequence. TADS, on the other hand, is more "declarative"; you
describe objects to the system. While TADS programs usually have
procedural sections, in which steps are executed in sequence, the
overall program doesn't have a beginning or an end; or rather it does,
but these are buried deep inside the adv3 library and taken care of for
you.  


The reason TADS 3 programs aren't procedural is that the player is
always in control of the game. When the game first starts, the library
calls a bit of procedural code in your program that displays any
introductory text you wish the player to see, then the system waits for
a command from the player. Based on the command, the system will
manipulate the objects you defined according to how you declare these
objects should behave. You don't have to worry about what the player
types; you just have to specify how your objects behave and how they
interact with one another.  
  

------------------------------------------------------------------------

*Getting Started in TADS 3*  
[\[Main\]](index.html)  
*[\[Previous\]](chapter2.html)   [\[Next\]](addingitemstothegame.html)*


