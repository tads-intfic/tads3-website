::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Opening Moves](begin.htm){.nav}
\> Minimal Game Definition\
[[*Prev:* Core and Optional Modules](modules.htm){.nav}     [*Next:* The
Core Library](core.htm){.nav}     ]{.navnp}
:::

::: main
[]{#mingamedef}

# Starting Out --- A Minimal Game Definition

The minimal game in adv3Lite is very similar to that in adv3. At the
basic minimum it must contain a [gameMain](beginning.htm#gamemain)
object defining the initial player character, the object defining the
player character, and the player character\'s starting location. Unlike
in adv3 the player character can be of class Thing, which requires a few
more properties to be defined on it to make it function properly as a
player character. You must also remember to include the library header.
An absolutely minimal adv3Lite game might therefore look like this:

::: code
    #charset "us-ascii"
    #include "advlite.h"

    gameMain: GameMainDef
        initialPlayerChar = me
    ;

    startLoc: Room 'Starting Location'
       "This is the featureless starting location. "
    ;

    + me: Thing         
        isFixed = true            
        person = 2 // or person = 1 for a first-person game    
        contType = Carrier   
    ;
:::

Alternatively, you could achieve the same result a little more concisely
by using the Player class rather than the Thing class to define the
initial player character. In this case you still have to define the
gameMain object, but you need not set is initialPlayerChar property
since the object you define with the Player class takes care of
identifying itself as the initial player character:

::: code
    #charset "us-ascii"
    #include "advlite.h"

    gameMain: GameMainDef    
    ;

    startLoc: Room 'Starting Location'
       "This is the featureless starting location. "
    ;

    + me: Player   
    ;
:::

In practice, any real game would want also to include a
[versionInfo](beginning.htm#versioninfo) object to provide information
about the game, and at the very least a showIntro() method on gameMain
to display an introduction to the game, as well as some description of
the player character and a more fully-implemented starting location. The
actual starting code for a real game might therefore look more like
this:

::: code
    #charset "us-ascii"
    #include "advlite.h"

    versionInfo: GameID
        IFID = '0D9D2F69-90D5-4BDA-A21F-5B64C878D0AB'
        name = 'Fire!'
        byline = 'by Eric Eve'
        htmlByline = 'by <a href="mailto:eric.eve@hmc.ox.ac.uk">
                      Eric Eve</a>'
        version = '1'
        authorEmail = 'Eric Eve <eric.eve@hmc.ox.ac.uk>'
        desc = 'A test game for the advlite library.'
        htmlDesc = ''
        
        showAbout()
        {
            "This is a demonstration/test game for the advlite library. It should
            be possible to reach a winning solution using a basic subset of common
            IF commands.<.p>";
        }
        
        showCredit()
        {
            "adv3Lite libary by Eric Eve with substantial chunks borrowed from the
            Mercury and adv3 libraries by Mike Roberts. ";
        }
    ;


    gameMain: GameMainDef
        initialPlayerChar = me
        
        showIntro()
        {       
            cls();
                   
            "<b><font color='red'>FIRE!</font></b>  You woke up just now, choking
                from the smoke that was already starting to fill your bedroom,
                threw something on and hurried downstairs -- narrowly missing
                tripping over the beach ball so thoughtgfully left on the landing
                by your <i>dear</i> nephew Jason -- you <i>knew</i> having him to
                stay yesterday would be trouble -- perhaps he's even responsible
                for the fire (not that he's around any more to blame -- that's one
                less thing to worry about anyway).\b
                So, here you are, in the hall, all ready to dash out of the house
                before it burns down around you. There's just one problem: in your
                hurry to get downstairs you left your front door key in your
                bedroom.<.p>";
        }
     ;
     
     hall: Room, ShuffledEventList 'Hall' 'hall'   
        "<<one of>>At least the fire hasn't reached the ground floor yet. The hall
        is still blessedly clear of smoke, though you can see the smoke billowing
        around at the top of the stairs you've just come down. The front door
        leading out to the safety of the drive is just a few paces to the west -- if
        only you'd remembered that key! Otherwise all seems normal: \v<<or>>At a
        less troubled time you'd feel quite proud of this hall. A fine oak staircase
        sweeps up to the floor above, matching the solid front door that stands just
        to the west. <<stopping>>The pictures you bought last year look totally
        oblivious of the flames that might engulf them, and since so far the fire
        seems confined to the top floor there's nothing blocking your path north to
        the lounge, east to the kitchen, or south to the study.  "
        
        south = study
        north = lounge
        east = kitchen
        up = landing
        west = frontDoor
        out asExit(west)
           
        roomDaemon  { doScript; }
        
        eventList = 
        [
            'Wisps of smoke drift down the stairs. ',
            
            'You momentarily catch sight of the smoke billowing at the top of the
            staircase. ',
            
            'There\'s an ominous creak upstairs. ',
            
            'You fancy you feel a wave of hot air gush about your face. '
        ]
        
        regions = downstairs
        
        listenDesc = "There's a disturbing crackling of flames somewhere upstairs. "
    ;

    + me: Thing     
        desc = "You look as bedraggled as you feel. "    
        isFixed = true            
        person = 2 
        contType = Carrier   
    ;

    downstairs: Region
        regions = indoors
    ;

    upstairs: Region
        regions = indoors
    ;

    indoors: Region
        /* The pc is presumably familiar with the layout of his own house */
        familiar = true
    ;    
            
:::

Don\'t worry if not all of this code makes sense to you yet. It will all
be explained in due course (not least what to authors used to the adv3
library will look like a rather strange template definition on the me
object). Of course the above code will not compile and work property
until the study, lounge, kitchen and landing rooms have been implemented
along with the front door, but that\'s a separate exercise. If you want
to try to compile and run the above code you will need to first comment
out all the direction property definitions on the hall object, i.e. all
the lines from [south = study]{.code} to [out asExit(west)]{.code}. You
will also need to ensure that the adv3Lite library is properly included
and configured in your project, which is what we shall briefly discuss
next.

## [Including the adv3Lite library]{#including_idx}

To make your adv3Lite game work properly, you obviously need to compile
it with the adv3Lite library.

To do this in Workbench, first make sure you have TADS 3.1.3 or above.
Then ensure that you have installed the adv3 library folder under your
extensions folder (or some other folder that Workbench is set to search
for extensions or libraries). The first time you use adv3Lite, select
Tools -\> Options from the Workbench menu. Scroll down to the System -\>
Library Paths section of the dialog box that should then appear. Add the
full path to the directory where you installed adv3Lite (e.g.
C:\\Users\\Eric\\Documents\\TADS 3\\extensions\\adv3Lite) to the list
(click the Add Folder button and navigate to the folder you want and
then select it). If you have just installed adv3Lite you may need to
close Workbench (if it\'s open) and open it again before creating your
first adv3Lite project. Then use Workbench\'s New Project wizard in the
normal way (Select New Project from the File menu and fill in the
dialogs that follow) and select adv3Lite from the list of project types
that should now be available (it will be listed after the built-in TADS
3 project types).

If you\'re not using Workbench but you\'re instead compiling from the
command line, proceed as you would for an adv3 game (see the section on
Compiling and Linking in the TADS 3 System Manual if you need guidance
on this), but specify the adv3Lite library instead ([ -lib
adv3Lite]{.code}) and include the option [ -D LANGUAGE = english]{.code}
on the command line.

## An Alternative Way to Set Up a New Game

If you don\'t want to go through all the steps listed above to create a
new adv3Lite game outside Workbench (or if you don\'t have TADS 3.1.3 or
above), here is another way:

1.  Under the directory in which you keep your own TADS 3 game source
    files (on a Windows System this might be My Documents\\TADS 3, for
    example) create a new directory (or folder) for your project, giving
    it an appropriate name (related to the name of the game you intend
    to write).
2.  Locate the template folder within the adv3Lite folder (the folder
    containing the adv3Lite library).
3.  Copy (don\'t move) the entire contents of the template folder to the
    new folder you created in step 1.
4.  In the new folder, rename the files adv3Ltemplate.t3m and
    adv3Ltemplate.tdbconfig to something more appropriate to your game,
    such as myGame.t3m and myGame.tdbconfig (use your own game name in
    place of myGame, but make sure you use the same name for both
    files).
5.  You can if you like rename start.t to something more appropriate
    such as myGame.t, but that will create additional complications
    later on, so you might want to skip that step if you\'re not
    confident about dealing with the consequences.
6.  Open the file myGame.t3m in Workbench (if you\'re not using
    Workbench you\'ll have to edit it by hand instead).
7.  In Workbench, open the Build-\>Settings dialogue (from the menu),
    click the Output tab and then change the name of the three compiled
    output files from adv3template.xxx to something more appropriate to
    your game (such as myGame.t3 and myGame.exe). If you aren\'t using
    Workbench you may need to edit myGame.t3m (or whatever you called
    it) by hand to add a -o mygame.t3 option (or whatever you want to
    call your game).
8.  If you renamed start.t to something else at an earlier step
    (mygame.t, for example), then in Workbench you\'ll need to right
    click on start.t in the Source Files pane on the left-hand side of
    the screen and select the \"Remove start.t from Project\" option;
    then you\'ll need to right click on \"Source Files\" in the
    left-hand pane, select \"Add file\...\" and select the renamed file
    (e.g. mygame.t). Then you\'ll need to drag it down to the bottom of
    the list and double-click on it to open it in the editor. If you\'re
    not using Workbench you\'ll need to edit myGame.t3m (or whatever you
    called it) in a text editor and change the final line, - source
    start, to - source mygame (or whatever your filename is).
9.  You should now be good to go, but if you experience any problems it
    may be because Workbench doesn\'t know where to find the library
    files. In that case select Tools -\> Options and navigate to the
    System -\> Library Paths tab and add the location where you\'ve put
    adv3Lite (on my system it\'s C:\\Users\\Eric\\Documents\\TADS
    3\\extensions\\adv3Lite; on yours it will be something different).

\
[]{#sysman}

## The System Manual

From time to time it may prove useful to consult the [TADS 3 System
Manual](../sysman.htm) while working on an adv3Lite game. This contains
a wealth of information about the TADS 3 language and its intrinsic
classes, all of which are important to know about when programming in
TADS 3. The contents page of this manual and the Adv3Lite Tutorial thus
contain links to the System Manual for your convenience.

Since the actual location of the TADS 3 System documentation will vary
from machine to machine (depending on the operating system installed,
for example), the adv3Lite library can\'t know in advance what the
correct location of the System Manual on your machine will be. The
default behaviour is thus to link to the online version at
[www.tads.org](http://www.tads.org). If you have a fast and reliable
internet connection you may be perfectly happy with this, but if you
prefer you can quite easily change the set-up to reference your local
copy of the System Manual simply by editing the file **sysman.htm** in
your adv3Lite/docs directory. When you first open this file you should
find it looks like this:

::: code
    <html>
    <head>
    <title>System Manual</title>
    <meta HTTP-EQUIV="REFRESH" content="0; url=http://www.tads.org/t3doc/doc/sysman/toc.htm">


    <!-- REPLACE THE URL ABOVE WITH THE PATH TO THE TADS 3 System documentation on your system-->

    <!-- For a 64-bit Windows System (e.g. Windows 7) this might be: -->
    <!-- <meta HTTP-EQUIV="REFRESH" content="0; url=file:///c:/Program Files (x86)/TADS 3/doc/sysman/toc.htm"> -->

    <!-- FOR A 32-Bit Windows system (e.g. Windows XP) this might be: -->
    <!--  <meta HTTP-EQUIV="REFRESH" content="0; url=file:///c:/Program Files/TADS 3/doc/sysman/toc.htm"> -->

    <!-- FOR UNIX-like systems it might be something along the lines of -->
    <!--  <meta HTTP-EQUIV="REFRESH" content="0; url=file:///c:/usr/bin /TADS 3/doc/sysman/toc.htm"> -->
    </head>
:::

To make it redirect to your local copy of the System Manual, you\'ll
need to edit the line:

::: code
     
    <meta HTTP-EQUIV="REFRESH" content="0; url=http://www.tads.org/t3doc/doc/sysman/toc.htm">
:::

So that the url it redirects to is the location of the System Manual\'s
toc.htm file on your machine. For example, if you\'re running a 64-bit
version of Windows (such as Windows 7) you\'ll probably need to change
this line to:

::: code
    <meta HTTP-EQUIV="REFRESH" content="0; url=file:///c:/Program Files (x86)/TADS 3/doc/sysman/toc.htm"> 
     
:::

For a 32-bit version of Windows (e.g. Windows XP) you\'d most likely
need:

::: code
    <meta HTTP-EQUIV="REFRESH" content="0; url=file:///c:/Program Files/TADS 3/doc/sysman/toc.htm"> 
     
:::

On a MAC or LINUX system the change will need to be slightly more
extensive, possibly to something like:

::: code
    <meta HTTP-EQUIV="REFRESH" content="0; url=file:///c:/usr/bin/TADS 3/doc/sysman/toc.htm"> 
     
:::

As an alternative, you may be able simply to comment out the existing
[\<meta HTTP-EQUIV=\"REFRESH\"]{.code} line and uncomment one of the
other versions that fits the bill. Obviously, you\'ll need to check that
it conforms to the actual location of the TADS 3 installation on your
system. The good news, though, is that this change only needs to be done
in one place, since all links from the adv3Lite documentation to the
System Manual are routed through sysman.htm.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Opening Moves](begin.htm){.nav}
\> Minimal Game Definition\
[[*Prev:* Core and Optional Modules](modules.htm){.nav}     [*Next:* The
Core Library](core.htm){.nav}     ]{.navnp}
:::
