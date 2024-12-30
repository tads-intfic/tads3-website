::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Goldskull](goldskull.htm){.nav}
\> Laying out the map\
[[*Prev:* Goldskull](goldskull.htm){.nav}     [*Next:* Making things
happen](making.htm){.nav}     ]{.navnp}
:::

::: main
# Laying out the map

In this chapter we\'ll implement another very simple game, one that\'s
initially even simpler than *The Adventures of Heidi*, though as we
progress we\'ll improve it in ways that introduce several new features
of the adv3Lite library.

The plot of the game could hardly be simpler. An explorer arrives
outside the entrance to a cave. Inside he finds a priceless gold skull
resting on a stone pedestal. If he takes the skull, however, he springs
a trap that kills him instantly. The solution is to place a rock on the
pedestal before removing the skull, so that the weight of the rock
prevents the springing of the trap. The game is won when the player
character heads back to his camp carrying the gold skull.

To start implementing this game you need to carry out the steps listed
for creating a new adv3Lite game back in [Chapter 2](setting.htm),
substituting \'goldskull\' for \'heidi\' throughout. Create a new
directory/folder for the goldskull project, copy the template files into
it, and then rename those with adv3Ltemplate in their name appropriately
(i.e. to goldskull but with the same file extension). Then open the
source file start.t in the goldskull directory, either using the
Workbench editor (in Windows) or some other text editor. Or, if you\'re
using Windows Workbench, simply use the New Project wizard to create a
new adv3Lite project called \"goldskull\".

To lay out the map we simply need to create an additional room to
represent the cave, and three objects: the pedestal, the skull and the
rock. There\'s very little that\'s new here; this is what the code
should look like:

::: code
    #charset "us-ascii"

    #include <tads.h>
    #include "advlite.h"

    versionInfo: GameID
        IFID = '' // obtain IFID from http://www.tads.org/ifidgen/ifidgen
        name = 'Goldskull'
        byline = 'by A.N. Author'
        htmlByline = 'by <a href="mailto:an.author@somemail.com">
                      A.N. Author</a>'
        version = '1'
        authorEmail = 'A.N. Author <an.author@somemail.com>'
        desc = 'Your blurb here.'
        htmlDesc = 'Your blurb here.'    
        
    ;

    gameMain: GameMainDef    
         
        /* 
         * By using the Player class to define the player character object 
         * below, we remove the need to set the initialPlayerChar property here.
         */
    ;


    /* The starting location; this can be called anything you like */

    startroom: Room 'Outside Cave'
         desc = "You're standing in the bright sunlight just outside of a large,
             dark, foreboding cave, which lies to the north. " 
        north = cave 
    ;

    /* 
     *   The player character object. This doesn't have to be called me, but me is a
     *   convenient name. As an alternative to defining the player character object
     *   as a Thing and defining various of its properties, we can simply define it as
     *   a Player object, as here, in which case we don't also need to set gameMain.initialPlayerChar, 
     *   although we must still define the gameMain object. We'll add a description to the Player
     *   object so that it can provide a non-default response to X ME. 
     */

    + me: Player 'you'   
        "You can't see yourself, but you suspect you must look quite a sight after
        traipsing miles through tropical jungle to get here. "      
    ;

    cave: Room 'Cave'    
        desc = "You're inside a dark and musty cave. Sunlight 
        pours in from a passage to the south. " 

        south = startroom 
    ;

    + pedestal: Thing 'stone pedestal; smooth'
        "The smooth stone pedestal is artfully positioned to catch the sunlight at
        just this time of day. "
        
        isFixed = true
        contType = On
    ;

    ++ goldSkull: Thing 'gold skull;; head'
        "It's the shape and size of a human skull, but made of solid gold; it must
        be worth a fortune. "
    ;

    + smallRock: Thing 'small rock; round solid'
         "It's roughly round and looks pretty solid. "
    ;
:::

Changes to the boiler-plate code already provided are marked in bold to
make them easier to see. There\'s just a couple of things to note here.
First, we\'ve added a description to the me object so that there\'s a
meaningful non-default response to EXAMINE ME. Just to show that it can
be done, we\'ve defined the player character using the Player class
instead of the Thing class, though we needn\'t have made this change;
defining the player character as a Thing and setting its essential
properties as in the Heidi example would have had exactly the same
effect. Note in particular the two + signs in front of the
[goldSkull]{.code} object, to indicate that it\'s located on the
pedestal, which is itself located in the cave. Note also that since the
[smallRock]{.code} object has only one plus sign, it\'s in the cave, not
on the pedestal. Finally, recall that defining [contType = On]{.code} on
the pedestal makes it something its contents rest *on* (rather than in,
under or behind).

If you try compiling and running the game now you should be able to move
between the two rooms and move the skull and the rock around, but
that\'s about it. In the next section we\'ll make a few more things
happen, but for now it\'s probably worth trying out what you\'ve got so
far just to make sure it all works.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Goldskull](goldskull.htm){.nav}
\> Laying out the map\
[[*Prev:* Goldskull](goldskull.htm){.nav}     [*Next:* Making things
happen](making.htm){.nav}     ]{.navnp}
:::
