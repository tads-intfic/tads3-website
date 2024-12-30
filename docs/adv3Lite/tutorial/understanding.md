::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Heidi: our first adv3Lite
game](heidi.htm){.nav} \> Understanding the Source File\
[[*Prev:* Creating the Basic Source File](basicsource.htm){.nav}    
[*Next:* Defining the Game\'s Locations](locations.htm){.nav}    
]{.navnp}
:::

::: main
# Understanding the Source File

## Directives

You may recall that the source file begins with the following three
lines:

::: code
    #charset "us-ascii"

    #include <tads.h>
    #include "advlite.h"
:::

*Every* source file you create for use with an adv3Lite game should
begin in precisely the same way. When you come to create a larger game,
you\'ll probably want to split it over several source files (if you\'re
curious, see the article on \"Understanding Separate Compilation\" in
the *TADS 3 Technical Manual*). If you do so, you must begin each of
your source files with the same three lines as above.

The first line is:

::: code
    #charset "us-ascii"
:::

This tells the compiler which *character set* you are using in your
source file (in this case, us-ascii), so that it knows how to translate
it into Unicode (which is what the TADS 3 compiler uses internally). You
don\'t need to worry about the technicalities of this at the moment (if
you\'re interested, refer to the section on \"Source File Character
Sets\" in Part III of the *TADS 3 System Manual*. What you do need to
know is (1) that the \# character at the beginning of the line signals
that this line is a compiler *directive* and (2) that the #charset
directive should occur once and only once in every source file you
create, right at the start of the file. To make sure you don\'t run into
any problems, put your #charset directive on the very first line of the
file with the \# character in the leftmost column (i.e. right of the
start of the line). Remember, the #charset directive **must** be the
very first thing in each source file; it can\'t be preceded by anything,
not even a comment or whitespace.

The next two lines are also compiler directives. These are:

::: code
    #include <tads.h>
    #include "advlite.h"
:::

The #include directive tells the compiler to copy the contents of
whatever file is specified immediately afterwards into that place in
your source file. Although TADS 3 allows separate compilation of
multiple source files into a single project, certain information (such
as template and macro definitions) needs to be included in each and
every source file. It is thus convenient to package this repeated
information into *header* files (files with a .h extension) and include
them in each source file as we are doing here. The first #include line,
[#include \<tads.h\>]{.code}, includes certain definitions common to
nearly all TADS 3 programs. The second, [#include \"advlite.h\"]{.code},
includes a whole bunch of definitions specific to the adv3Lite library.
Every source file you create for an adv3Lite game needs to include both
these files.

You may be wondering why the file tads.h is surrounded by angle brackets
(\<tads.h\>) while the file advlite.h is placed in inverted commas. The
only difference is the way the compiler searches for the location of the
file to be included. If you\'re interested in the details, consult the
section on \"The Preprocessor\" in Part III of the *TADS 3 System
Manual* (but there\'s really no need to do so right away).

Everything else in the source file so far is either an object definition
or a comment. We\'ll look at the comments next.

## Comments

As in many other (if not most) programming languages, in TADS 3 a
comment is some text that\'s completely ignored by the compiler but
contains information that may be useful to a human reader of the source
file. Comments are thus used both to explain things to other people who
made read your source file, and to remind yourself some time later why
you did things the way you did, and what your code is for. It is a good
idea to make liberal use of comments in your own code to help yourself
understand it when you come back to it after an interval.

There are two ways of marking texts as comments in TADS 3:

1.  Anything after [//]{.code} on a line is a comment.
2.  Anything between [/\*]{.code} and [\*/]{.code} is a comment. This
    allows you to write comments that span multiple lines.

The following are thus examples of comments in the source file we have
just created:

::: code
       // obtain IFID from http://www.tads.org/ifidgen/ifidgen
       
       /* Define the initial player character; this is compulsory */
       
       
    /* 
     *   The player character object. This doesn't have to be called me, but me is a
     *   convenient name. If you change it to something else, rememember to change
     *   gameMain.initialPlayerChar accordingly.
     */
:::

## Object Definitions

Everything else in the file so far is an object definition. This is
usual in writing IF with TADS 3 (whichever library you use): most of
your code will consist of object definitions. Your code may occasionally
consist of other things, such as class definitions, or modifications to
class definitions, or function definitions, or enum definitions (and one
or two other things), but we needn\'t worry about any of those for now.
Most of what you\'ll be doing when writing IF in TADS 3 is defining
objects. Let\'s take a closer look at the first one in our source file:

::: code
    versionInfo: GameID
        IFID = '' // obtain IFID from http://www.tads.org/ifidgen/ifidgen
        name = 'The Adventures of Heidi'
        byline = 'by A.N. Author'
        htmlByline = 'by <a href="mailto:an.author@somemail.com">
                      A.N. Author</a>'
        version = '1'
        authorEmail = 'A.N. Author <an.author@somemail.com>'
        desc = 'A simple game borrowed from the Inform Beginner\'s Guide by Roger
            Firth and Sonja Kesserich.'
        htmlDesc = 'A simple game borrowed from the <i>Inform Beginner\'s Guide</i>
            by Roger Firth and Sonja Kesserich.'    
        
    ;
:::

The object definition begins with the name of the object (here
[versionInfo]{.code}), followed by a colon, followed by the name of the
class to which the object belongs (here [GameID]{.code}). Note the
convention that an object name begins with a lower-case letter while a
class name begins with an upper-case letter (though this is simply a
convention). The object definition ends with a semicolon, which tells
the compiler \"We\'ve finished defining this object\". In between the
class name and the terminating semicolon come a list of properties, each
one defined with a property name followed by an equals sign followed by
the initial value of that property; for example the [version]{.code}
property has an initial value of \'1\'. When you\'re defining your own
objects, be careful *not* to terminate a property definition with a
semicolon (it\'s easily done), because the compiler will think you mean
to end the definition of the whole object, and you\'ll get a whole lot
of compiler errors.

At this point you may be asking: But what is an object? And what is a
class? And what the heck is a property?

At a first approximation, an *object* is a means of grouping related
code and data into a single programming entity. In TADS 3 an object in
the programming sense is often used to represent a physical object in
the game world, such as a chair or a rubber ball or a room, but
programming objects have other uses, as is clearly the case with the
versionInfo object.

A *class* is a kind of mould for objects; for example physical game
objects like balls, chairs and sticks tend to share a lot of common
behaviour by virtue of being physical objects. Rather than defining that
common behaviour each and every time on every single object (which would
soon become highly laborious and highly tedious), we define the common
behaviour on a class (in this case called Thing) and then define each
individual game object to be of the Thing class (or maybe of some class
derived from Thing, but we\'ll come to that in due course). By the way,
when I say *we* define the common behaviour on Thing, in this case (and
in many other) that\'s something the adv3Lite does for us (you might say
it\'s one of the main things a library like adv3Lite is for).

A *property* is simply a piece of data associated with an object. In the
example above, all the properties happen to be single-quoted strings,
but they could be of other types, such as numbers or even other objects.

The purpose of the versionInfo object is clearly to provide some basic
information about the game we\'re about to write, such as its name, who
it\'s by, a brief blurb, and its version number. Most of this should be
reasonably self-explanatory (for a fuller explanation consult the
[adv3Lite Library Manual](../manual/beginning.htm#versioninfo)), but the
IFID may be worth a brief word or two. This is a unique 32-digit
hexadecimal number used to identify your game on certain databases such
as the IFDB. Since you won\'t be submitting the Adventures of Heidi to
any public database, we don\'t need to worry about it here, but if this
were a real game you\'d need to do what the comment suggests, namely
visit <http://www.tads.org/ifidgen/ifidgen> to obtain a unique IFID
which you could then copy and paste into your own code (between the
single quote marks after [IFID = ]{.code}).

The next object in our source file is:

::: code
    gameMain: GameMainDef
        /* Define the initial player character; this is compulsory */
        initialPlayerChar = me
    ;
:::

This is where you can define certain other basic information about your
game, such as certain options and what it does on start-up. For the full
story on gameMain you can once again consult the [adv3Lite
manual](../manual/beginning.htm#gamemain), though once again there\'s no
great need to do so right away. The one thing to note is that this
object must be defined somewhere in your game source files, and it must
define the initialPlayerChar property (meaning the object that will
represent the player character at the start of the game). By convention
the player character object is normally called me, and normally there\'s
no reason to change that, so for now we\'ve left the definition of
gameMain as it is.

The final two objects define the player character\'s starting location
and the object representing the player character. These must be present
for your game to compile correctly:

::: code
    /* The starting location; this can be called anything you like */

    beforeCottage: Room 'In front of a Cottage'
        "You stand outside a cottage. The forest stretches east. "
    ;

    /* 
     *   The player character object. This doesn't have to be called me, but me is a
     *   convenient name. If you change it to something else, rememember to change
     *   gameMain.initialPlayerChar accordingly.
     */

    + me: Thing 'you;;heidi'   
        isFixed = true    
        proper = true
        ownsContents = true
        person = 2   
        contType = Carrier    
    ;
:::

Note the use of the + sign to indicate the me object is located inside
the beforeCottage location. You\'ll probably be using this notation a
lot.

Don\'t worry if you don\'t understand what the rest of it means just
yet; that\'s what we\'ll be going on to talk about next. Also, don\'t
worry if you feel you haven\'t completely grasped all there is to know
about objects, classes and properties. We\'ll be saying a lot more about
them in what follows.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Heidi: our first adv3Lite
game](heidi.htm){.nav} \> Understanding the Source File\
[[*Prev:* Creating the Basic Source File](basicsource.htm){.nav}    
[*Next:* Defining the Game\'s Locations](locations.htm){.nav}    
]{.navnp}
:::
