::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Heidi: our first adv3Lite
game](heidi.htm){.nav} \> Creating the Basic Source File\
[[*Prev:* Heidi: our first adv3Lite game](heidi.htm){.nav}     [*Next:*
Understanding the Source File](understanding.htm){.nav}     ]{.navnp}
:::

::: main
# Creating the Basic Source File

If you followed the steps for creating a project in the last chapter,
you should have a basic project already created for starting to write
the Heidi game. If not, go [back](setting.htm) and follow them now.

If you\'re using Windows Workbench, open the heidi.t3m project in the
Heidi folder (using File -\> Open Project from the menu), then select
the start.t file from the list of files in the left hand (file list)
pane and double-click on it to open it in the Workbench editor. If
you\'re not using Workbench, navigate to your Heidi directory and open
start.t in your text editor. You should now see a file that looks like
this:

::: code
    #charset "us-ascii"

    #include <tads.h>
    #include "advlite.h"

    versionInfo: GameID
        IFID = '' // obtain IFID from http://www.tads.org/ifidgen/ifidgen
        name = 'My Game'
        byline = 'by A.N. Author'
        htmlByline = 'by <a href="mailto:an.author@somemail.com">
                      A.N. Author</a>'
        version = '1'
        authorEmail = 'A.N. Author <an.author@somemail.com>'
        desc = 'Your blurb here.'
        htmlDesc = 'Your blurb here.'    
        
    ;

    gameMain: GameMainDef
        /* Define the initial player character; this is compulsory */
        initialPlayerChar = me
    ;


    /* The starting location; this can be called anything you like */

    startroom: Room 'The Starting Location'
        "Add your description here. "
    ;

    /* 
     *   The player character object. This doesn't have to be called me, but me is a
     *   convenient name. If you change it to something else, rememember to change
     *   gameMain.initialPlayerChar accordingly.
     */

    + me: Thing 'you'   
        isFixed = true    
        proper = true
        ownsContents = true
        person = 2   
        contType = Carrier    
    ;
:::

Don\'t worry too much about what all that means for the moment, we\'ll
be explaining it all in due course. A couple of points should be
emphasized right from the outset, however:

1.  Punctuation is important. A single semi-colon missed out or put in
    the wrong place can easily result in a bunch of compilation errors.
    Watch out for this when you write your own code!
2.  Precise spelling and the case of letters are both important. If you
    go on to refer to [startRoom]{.code} or [statroom]{.code}, TADS 3
    won\'t know that you mean the same thing as [startroom]{.code}, so
    be very careful to copy the spelling of everything, including the
    case of letters, when you go on to type in code as instructed below.

With those preliminaries out of the way, we can go on to make our basic
source file a little less generic and a little more relevant to the game
we\'re about to write. Edit your copy of the file so it reads as it does
below (to help you with this the main changes are shown in bold):

::: code
    #charset "us-ascii"

    #include <tads.h>
    #include "advlite.h"

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

    gameMain: GameMainDef
        /* Define the initial player character; this is compulsory */
        initialPlayerChar = me
    ;


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

If you like, you can also change the byline, htmlByline and authorEmail
fields to reflect your own name and email address (though for this
exercise it won\'t matter much if you don\'t).

When you\'ve done all that, try compiling and running the game as you
now have it (in Workbench, just click the \'Go\' button at the left-hand
end of the toolbar; otherwise follow the instructions at the end of the
last chapter). The interpreter should then display something like this:

::: cmdline
    In front of a Cottage
    You stand outside a cottage. The forest stretches east.
:::

If you don\'t get this, check very carefully that your version of the
code in start.t corresponds *exactly* to that given immediately above
(the precise amount of white space doesn\'t matter much, but just about
everything else does) and then try again until you get it working.

Even when you do get it working, it isn\'t much of a game yet. You can
try a couple of commands like X ME and X HEIDI, but even then the
responses aren\'t terribly exciting, and just about everything else will
result in a refusal to act. We\'ll be livening things up a bit soon, but
first we should pause and reflect what we\'ve got in our source file so
far actually means; that\'s what we\'ll do next.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Heidi: our first adv3Lite
game](heidi.htm){.nav} \> Creating the Basic Source File\
[[*Prev:* Heidi: our first adv3Lite game](heidi.htm){.nav}     [*Next:*
Understanding the Source File](understanding.htm){.nav}     ]{.navnp}
:::
