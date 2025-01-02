---
layout: docs
---
<div class="topbar">

[<img src="topbar.jpg" data-border="0" />](index.html)

</div>

<div class="main">

[\[Main\]](index.html)  
*[\[Previous\]](generalintroduction.html)
  [\[Next\]](programmingprolegomena.html)*

</div>

## Creating your First TADS 3 Project

### a. Installing the compiler

If you're using Windows, there's almost nothing to this - just download
the TADS 3 Author's Kit, which consists of a single .EXE file that
installs everything. Open the installer executable (by double-clicking
on it from wherever you downloaded it to), and step through the install
screens. Everything should be self-explanatory. When the install is
finished, you're all set.

For Macintosh and Unix systems, refer to the README file that comes with
your system's download package for instructions (for Macintosh see also
section b.ii below).

### b. Creating the new project

#### i) Creating a project with Workbench

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

The steps you’d typically follow once the wizard is launched would be:

1.  Click the ‘Browse’ button on the first page of the Wizard.  
      
2.  Use the file dialog that appears to create a new folder (e.g.
    ‘MyNewGame’) under your TADS 3 folder.
3.  Navigate to the new directory you have just created and enter a
    filename for your new game (e.g. ‘MyNewGame’) into the File Name
    field of the dialog, and then click the ‘Save’ button.
4.  Click the ‘Next’ button on the wizard.
5.  Click the ‘Next’ button again. On the next page of the wizard select
    the ‘Advanced’ radio button (for the purposes of this Guide you
    don’t want the ‘Introductory’ option).
6.  Click the ‘Next’ button again. On the next page of the wizard leave
    the ‘Standard’ radio button selected (the WebUI is a topic beyond
    the scope of this Guide).
7.  Fill in the four fields on the next page of the Wizard. Under ‘Story
    Title’ put the full name of your game (‘My New Game’ or whatever you
    want to call it; later on in this Guide it will ‘The Further
    Adventures of Heidi’ for example). Then fill in the next two fields
    with your own name and email address. The final field can be used to
    give a brief description of the game (e.g. ‘This is simply a
    tutorial game I’m using to learn TADS 3 with’ or ‘Heidi has further
    adventures in the forest and makes some new friends’).
8.  Click ‘Next’ and then click ‘Finish’.
9.  Wait until TADS 3 Workbench has finished created and compiling the
    new skeleton game (you should see a message saying ‘Build
    successfully completed' followed by the date and time). In the
    left-hand pane of Workbench (headed ‘Project’) look for the section
    (near the top) that says ‘Source Files’ and double-click on the icon
    representing the file you asked the Wizard to create at Step 3 above
    (e.g. ‘MyNewGame.t’); it should be the third one down. You will then
    see your new game source file open in the Workbench editing window.
10. To compile the project again when you’ve made changes to it, just
    press the F7 key. (You can also select the "Compile for Debugging"
    command on the "Build" menu, or click the equivalent toolbar
    button.)

#### ii) Creating a project manually (for non-Windows Users)

If you're *not* using Workbench (which at this stage should only be
because you're not using Windows), you'll have to create your project
files manually. Fortunately, this isn't very hard - you just need to
create two files and one subdirectory.

Jim Aikin suggests the following steps for setting up TADS 3 and
creating a project on a Macintosh (these should also work for other
non-Windows systems with a little adaptation):

1.  Download FrobTADS, double-click on the .dmg file, and run the
    installer.  
      

2.  Create a directory to hold your projects, and a subdirectory within
    it to hold your first project. For example, in Documents, create
    TADS. In TADS, create a MyGame folder.  
      

3.  In the folder for your first project, create a folder called obj.
    This will hold the object files created by the compiler while it's
    running. You won't need to be concerned about anything in this
    folder; it will take care of itself.  
      

4.  Using a text editor, create a .t3m file. For convenience, give the
    .t3m file the same name as the project, perhaps MyGame.t3m. Copy the
    following text into your new .t3m file and save the file to the
    project folder:

             -D LANGUAGE=en_us     -D MESSAGESTYLE=neu     -Fy obj -Fo obj     -o MyGame.t3     -lib system     -lib adv3/adv3     -source MyGame

    Replace "MyGame" in the code above with the name of your actual
    game, if it's different.  
      

5.  Open a Terminal window. The Terminal program is located in
    Applications \> Utilities. You may want to make an alias for it and
    drag it into your Dock.  
      

6.  Create a starter game file, again as a text file, and save it to the
    MyGame directory. Your starter game should look more or less like
    this:

             #include <adv3.h>     #include <en_us.h>     gameMain: GameMainDef       initialPlayerChar = me     ;     versionInfo: GameID       name = 'My First Game'       byline = 'by Bob Author'       authorEmail = 'Bob Author <bob@myisp.com>'       desc = 'This is an example of how to start a new game project. '       version = '1'       IFID = 'b8563851-6257-77c3-04ee-278ceaeb48ac'     ;     firstRoom: Room 'Starting Room'       "This is the boring starting room."     ;     +me: Actor     ; 

    Fill in those quoted parts under the line reading
    "<span class="code">versionInfo:GameID</span>" with your own
    information. Everything should beself-explanatory, except that last
    line that starts "<span class="code">IFID =</span>". That long,
    random-looking string of letters and numbers is exactly what it
    appears to be - a long, random string of letters and numbers. Well,
    almost: it's actually composed of random "hexadecimal", or base-16,
    digits, i.e. 0 to 9 plus A to F. The purpose of this random number
    is to serve as a unique identifier for your game when you upload it
    to the IF Archive. The *format* is important, but the individual
    digits should simply be chosen randomly. For your convenience,
    tads.org provides an on-line IFID generator at
    <a href="%20http://www.tads.org/ifidgen/ifidgen%20"
    target="_top">http://www.tads.org/ifidgen/ifidgen</a>.  
      

7.  In the Terminal, use the cd (change directory) command to navigate
    to the folder where your game files are stored. For instance, you
    might type 'cd Documents/TADS/MyGame' and then hit Return.  
      

8.  While the Terminal is logged into this directory, you can compile
    your game using this command:

             t3make -d -f MyGame

    If all goes well, you should see a string of messages in the
    Terminal window, and a new file (MyGame.t3) will appear in the
    MyGame directory. This is your compiled game file. If you've
    installed an interpreter program that can run TADS games, you'll be
    able to double-click the .t3 file and launch the game to test your
    work.  
    Alternatively, you can run the game directly in the Terminal by
    typing 'frob MyGame.t3' and hitting Return.  
      

9.  Instead of typing the t3make command every time you want to compile
    your game, you can create a .command file in your project folder and
    then double-click this file. Double-clicking the .command file will
    launch Terminal and pass the text in the .command file to
    Terminal.  
      
    However, when you try this, the Macintosh is quite likely to object
    that you don't have permission to execute the .command file. There
    seems to be no way to fix this using the Info box (which is opened
    using Cmd-I). You'll have to do it from the Terminal. Navigate, as
    before, to the directory where your .command file is located, and
    type this into the Terminal:

             chmod +x MyGame.command

    Again, substitute the name of your actual .command file. The chmod
    instruction with a +x flag will make the .command file executable.
    Now you can double-click it to compile your game, but only if
    Terminal is already logged into the game's directory. If no Terminal
    window is open, that won't be the case. To remedy this problem, add
    the cd line to the beginning of the .command file, so that the
    .command file looks something like this (substituting the name of
    your directory and game file):

             cd Documents/TADS/MyGame     t3make -d -f MyGame

### c. Running your game

If you're running Workbench, once again, this is easy - press the F5 key
(or select the "Go" command on the "Debug" menu, or click the equivalent
toolbar button).

If you're not running Workbench, at your system command prompt, type

       t3run mygame

But you should check the README file that came with your system's
download package - the program name might not be the same everywhere.

If you want more advanced instructions, or you’d like a fuller
explanation of what everything means, please read the article on
<a href="../techman/t3start.html" target="_top">Creating Your First TADS
3 Project</a> in the TADS 3 Technical Manual. When you come to create a
larger project you might want to split it over several source files,
which is explained in the article on
<a href="../techman/t3inc.html" target="_top">separate compilation</a> in
the *Technical Manual*, but this is not something you need worry about
for the purposes of this Guide.

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

  

------------------------------------------------------------------------

*Getting Started in TADS 3*  
[\[Main\]](index.html)  
*[\[Previous\]](generalintroduction.html)
  [\[Next\]](programmingprolegomena.html)*
