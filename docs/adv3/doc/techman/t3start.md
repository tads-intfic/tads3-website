---
layout: docs
---


<img src="topbar.jpg" data-border="0" />





<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="fund.html" class="nav">Fundamentals</a> \> Creating Your First
Project  
<span class="navnp"><a href="fund.html" class="nav"><em>Prev:</em> Fundamentals</a>
   
<a href="t3design.html" class="nav"><em>Next:</em> Tips on Designing your
Game</a>     </span>





# Creating Your First TADS 3 Project

If you're looking at TADS 3 for the first time, and you're trying to
figure out how to create your own game, things might look a little
intimidating - there are all these library files, header files, object
directories, strange binary files, and so on. How do you get started
creating your own game? Do you have to make copies of all of those
library files? Where do you install everything?

This article will help you get started. Fortunately, it's not nearly as
hard as it looks to set up a new game project. It's true that a TADS 3
game project involves a lot more files than a typical TADS 2 game does,
but the compiler is designed to manage most of the extra complexity for
you. Once you've set up the compiler properly, you can practically
forget about everything except your own source files.

## Installing the compiler

If you're using Windows, there's almost nothing to this - just download
the TADS 3 Author's Kit, which consists of a single .EXE file that
installs everything. Open the installer executable (by double-clicking
on it from the Windows desktop), and step through the install screens.
Everything should be self-explanatory. When the install is finished,
you're all set.

If you're using Windows, but you plan to run the command-line compiler
manually from a DOS box rather than using Workbench, there's one more
step: you need to set the PATH environment variable to include the
directory where you installed TADS 3. In the DOS box, you can do this
with a command like so:

      path "%path%;c:\program files\tads 3"

Of course, you should substitute the actual directory location if it's
different. Note that Windows makes you set the PATH variable each time
you open a new DOS box. If you're using Windows XP or later, you can set
the path permanently (so that you don't have to set it each time you
start a new DOS box) in the Advanced tab of the System Properties
dialog.

For Macintosh and Unix systems, refer to the README file that comes with
your system's download package for instructions.

## Creating the new project

### Creating a project with Workbench

If you're using Windows, run TADS 3 Workbench (by selecting it from the
"Start" menu group you selected during the installation process).

- By default, Workbench will show you a "welcome" dialog asking you if
  you want to open an existing game or create a new one. Click on the
  button for creating a new game.
- If you've turned off the "welcome" dialog, then select "New Project"
  from the Workbench "File" menu.

In either case, this will display the New Project Wizard. Just step
through the wizard screens to tell Workbench the name and location for
your new project files. Workbench will automatically create all of the
necessary files for your project, and it'll even compile it for you
right away.

### Creating a project manually

If you're *not* using Workbench (either because you're not using
Windows, or because you prefer working with the DOS command prompt on
Windows), you'll have to create your project files manually.
Fortunately, this isn't very hard - you just need to create two files
and one subdirectory.

First, choose the folder where you'll put your project files. The files
and subfolder you'll create should go in this folder.

Second, create a subfolder called "obj". If you're on Unix, for example,
you'd type `mkdir obj`.

Third, create a file for your game's initial source code. Use whatever
name you'd like for this file, but it should end in ".t" - you could
call it "mygame.t", for example. You can create the file by opening your
favorite text editor, creating a new file with your chosen filename,
then copying the text below into the new file. Save the file when you're
finished.

    #include <adv3.h>
    #include <en_us.h>

    gameMain: GameMainDef
      initialPlayerChar = me
    ;

    versionInfo: GameID
      name = 'My First Game'
      byline = 'by Bob Author'
      authorEmail = 'Bob Author <bob@myisp.com>'
      desc = 'This is an example of how to start a new game project. '
      version = '1'
      IFID = 'b8563851-6257-77c3-04ee-278ceaeb48ac'
    ;

    firstRoom: Room 
      'Starting Room' 
      "This is the boring starting room."
    ;

    + me: Actor
    ;

(Note that the included file \<en_us.h\> is for the US English version
of the library. If you're working with a version of the library for a
different language, you'd include a different header file for that
language.)

Fill in those quoted parts under the line reading
"`versionInfo: GameID`" with your own information. Everything should be
self-explanatory, except that last line that starts "`IFID =`". That
long, random-looking string of letters and numbers is exactly what it
appears to be - a long, random string of letters and numbers. Well,
almost: it's actually composed of random "hexadecimal" digits, or
base-16 digits, which are 0 through 9 and A through F. The purpose of
this random number is to serve as a unique identifier for your game when
you upload it to the IF Archive. The *format* is important, but the
individual digits should simply be chosen randomly. For your
convenience, tads.org provides an [on-line IFID
generator](http://www.tads.org/ifidgen/ifidgen).

Fourth, create your "project file," which contains the build
instructions for the project. You can call this file anything you want,
but the name should end in ".t3m" - call it "mygame.t3m", for example.
Using your text editor, copy the text below into the new project file
and save it.

    -DLANGUAGE=en_us
    -DMESSAGESTYLE=neu
    -Fy obj -Fo obj
    -o mygame.t3
    -lib system
    -lib adv3/adv3
    -source mygame

One thing: if you called your source file something *other* than
"mygame.t", you should change that last line to match. Note that you can
leave off the ".t" suffix - you don't *have* to leave it off, but doing
so will ensure that your project file will work on operating systems
that have unusual file naming rules that don't allow dots in filenames.
You'll probably also want to change the line that reads "-o mygame.t3"
to use your alternative name as well. (Note that the ".t3" suffix on
this line is needed, if you do indeed want to use a .t3 suffix; the
compiler won't add this suffix automatically, because it can't assume
that you want to include a suffix at all. That makes the project file a
little less portable, but it gives you complete control over the name of
your final game file. That extra control is important to a lot of
people, because the final game file is what you'll distribute to people
playing your game.)

That's it - you're done. There's nothing more to copy around, nothing
more to fix up in the file. This is important: you **do not** have to
fix up any directory paths in the file, no matter where you installed
the compiler. You **do not** have to copy of any of the system files
into your project folder (you don't have to copy the library files, or
the system include files, or anything else). Just create the file
exactly as shown above, and it'll work on any system that has a TADS 3
compiler, no matter where you installed the compiler.

If you want to know what all of the gibberish in the .t3m file means,
see [the project file's contents explained](#t3m_details) later in the
article.

## Compiling your project

If you're running Workbench, this is easy - just press the F7 key. (You
can also select the "Compile for Debugging" command on the "Build" menu,
or click the equivalent toolbar button.)

If you're not running Workbench, go to your system's command prompt,
make sure your current working directory is the directory containing
your project files, and type

       t3make -d -f mygame

Substitute the name you actually gave your .t3m file, if you called it
something other than "mygame.t3m".

## Running your game

If you're running Workbench, once again, this is easy - press the F5 key
(or select the "Go" command on the "Debug" menu, or click the equivalent
toolbar button).

If you're not running Workbench, at your system command prompt, type

       t3run mygame

But you should check the README file that came with your system's
download package - the program name might not be the same everywhere.

## Adding multiple source files to the project

You can arrange your game into multiple source files, if you want. Doing
so can help keep things organized, and also keeps the individual files
more manageable by keeping the sizes down.

How you organize your source code across files is up to you. Most people
like to break things up geographically within the game, so that all of
the code related to a particular room is close together; you might give
each room (along with its contents) its own source file, or you might
put several rooms from a single area in one source file. Complex NPC's
might merit their own separate source files, especially if they have
extensive conversation code. These are just examples, though - everyone
has their own organization style, so do what makes sense to you.

Adding source files is easy - but if you're an experienced TADS 2 user,
this is one area where you should unlearn the TADS 2 way of doing
things. In particular, you should **not** put your game together using a
central .t file that \#include's lots of other .t files. Instead, follow
these simple steps to add your extra source files.

First, create your new source file - let's call it "newfile.t".

Second, copy the following text into your new file to get started:

      #include <adv3.h>
      #include <en_us.h>

Note that you should include those lines at the start of *every* source
file in your game. Those ".h" files contain definitions of things like
macros and templates that must be included in every source module that
uses the standard library.

Third, edit your project's .t3m file. Add this line after the existing
"-source mygame.t" line:

      -source newfile

That's all you have to do. When you add code to your new file, be sure
to add it *after* the \#include lines you copied into the file.

For the full details on how this works, see the article on [separate
compilation](t3inc.html).

## What next?

Now the only thing remaining to do is to go take a look at the [TADS 3
Bookshelf](http://www.tads.org/t3doc/doc/index.html), which has the full
set of manuals for the system on-line and lets you search their
contents. If you'd prefer to download off-line copies, visit the [TADS 3
home page](http://www.tads.org/tads3.html) for download links. Note that
if you installed the "Full Documentation" version of TADS Workbench on
Windows, the manuals are all included, and you can search them using
Workbench.

Another valuable resource is the Usenet newsgroup
[rec.arts.int-fiction](news:rec.arts.int-fiction), which has a
contingent of TADS 3 experts who can help out with technical questions,
along with a large group of IF enthusiasts using TADS 3 and other
systems. Discussion ranges from programming to game design to IF history
to almost anything else that's IF-related (and some stuff that isn't -
it is Usenet, after all...).

## <span id="t3m_details">The project file's contents explained</span>

We promised earlier that we'd provide an explanation of the gibberish in
the .t3m file. You should be able to get quite far sticking to the
recipes above, so feel free to skip this section if you don't feel you
need the details right now.

To refresh your memory, here again is the project file we created:

    -DLANGUAGE=en_us 
    -DMESSAGESTYLE=neu
    -Fy obj -Fo obj
    -o mygame.t3
    -lib system
    -lib adv3/adv3
    -source mygame

The contents of the project file are simply build instructions to the
compiler. You could put exactly the same list of options on the
compiler's command line. You almost certainly wouldn't *want* to, since
it's an awful lot to type in, especially since you'd have to type it
every time you compiled your game; but you *could* enter it all on the
command line if you really wanted to. Putting the options in a .t3m file
makes things a lot easier by capturing the options for easy access every
time you compile - just point the compiler to the .t3m file and you're
done. The options file also makes the option syntax a little easier to
read by letting you break up the options over several lines, rather than
typing them all on a single command line.

Because the project file's contents are all simply compiler options, you
can get a list of all of the possible options, along with brief
explanations, by running the compiler without any arguments - just type
`t3make` at your system's command prompt and hit return. You can find
more detailed information in the TADS 3 documentation that accompanies
the Author's Kit; look in the section on compiling and linking.

Let's go through the options from our example file one by one.

`-DLANGUAGE=en_us` - this defines a preprocessor symbol (also known as a
"macro"). The symbol is named LANGUAGE and has the value "en_us". This
is important because it tells the adv3 library which language version
you want to include in the build.

`-DMESSAGESTYLE=neu` - this defines another preprocessor symbol, this
time named MESSAGESTYLE and with the value "neu". This tells the adv3
library which version of the English message file you want to include in
the build. "neu" selects the "neutral narrator" style; this is currently
the only message style included in the standard library, but more might
be added in the future.

`-Fy obj` - this tells the compiler to put all of your "symbol files" in
the "obj" subfolder of the main project folder. A symbol file is an
intermediate binary file that the compiler produces as part of the build
process; a symbol file corresponds to a source file, and its name will
be the same as the name of the source file, but with the ".t" suffix
replaced by ".t3s".

`-Fo obj` - this tells the compiler to put all of your "object files" in
the "obj" subfolder of the main project folder. An object file is
another kind of intermediate file; an object file is named based on the
corresponding source file, with the ".t" suffix replaced by ".t3o".

Note that -Fy and -Fo are separate options. They happen to appear on the
same line in the .t3m file, but that's not important; line breaks in a
.t3m file are treated the same as spaces, so you can put options on
separate lines or together on the same line, separated by spaces, and
the effect will be exactly the same.

`-o mygame.t3` - this tells the compiler to write the final compiled
game file to "mygame.t3" in the main project folder.

If you want to put this in a separate subdirectory, you can do that.
Create the subfolder - let's call it "exe". Then prefix the game file's
name with the folder name and a slash - so, `-o exe/mygame.t3`.
**Always** use a slash, no matter what your local operating system's
conventions; the compiler will automatically convert the slash to your
local conventions. This ensures that the .t3m file is portable to other
operating systems, because every version of the compiler knows to read
the "slash" format and convert it to the correct local format.

`-lib system` - this tells the compiler to include the "system" library
in the build. The system library contains some low-level definitions
that almost every TADS 3 program will want to use, even when not using
the standard adventure library.

`-lib adv/adv3` - this includes the standard adventure game library in
the build. The standard adventure library is called "adv3", and it's in
the "adv3" subfolder of the main system library folder. We just
explained for the "-o" option that you always use a slash as the path
separator in a .t3m file, and the same is true here. Even if you're
running on a Macintosh, use the slash; even if you're running on
Windows, use the slash - **do not** change it to a backslash ("\\).

`-source mygame` - this includes your initial source file. The compiler
will automatically add the ".t" suffix. As we explained earlier, this
makes the .t3m file more portable, because it allows the same file to
work even on systems that don't allow periods in filenames; on such
systems, the compiler would use some other appropriate local convention,
such as using a different suffix separator, or not using a suffix at
all.

One final note: the order of these options is somewhat important. The
"-lib" and "-source" options *must* be grouped at the end of the file,
after all of the other options. The order of the other options isn't
important, as long as they all precede the first "-lib" or "-source"
option.

In addition, the relative order of the "-lib" and "-source" options is
important: you should always put the general system libraries first, and
your own source files last. This matters only because of the "modify"
and "replace" statements in the TADS language: a module that uses
"modify" or "replace" has to come *after* the module that contains the
original definition being modified or replaced. It should be pretty
obvious that the general system library modules, which don't know
anything about your game, aren't going to attempt to modify or replace
any objects in your game files; your source files might want to modify
or replace things in the system libraries, though. So, the order is
pretty natural - general base files first, specializations last. The
adv3 library is more specialized than the base system library, so
"system" comes before "adv3/adv3"; your source files are more
specialized than the adv3 library, so they come after it. If you were
using any third-party library extensions, you'd probably put them after
adv3 but before your own source files.



------------------------------------------------------------------------



*TADS 3 Technical Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="fund.html" class="nav">Fundamentals</a> \> Creating Your First
Project  
<span class="navnp"><a href="fund.html" class="nav"><em>Prev:</em> Fundamentals</a>
   
<a href="t3design.html" class="nav"><em>Next:</em> Tips on Designing your
Game</a>     </span>


