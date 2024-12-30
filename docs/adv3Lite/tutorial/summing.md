::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Heidi
Revisited](revisit.htm){.nav} \> Summing Up\
[[*Prev:* Is the bird in the nest?](birdinnest.htm){.nav}     [*Next:*
Goldskull](goldskull.htm){.nav}     ]{.navnp}
:::

::: main
# Summing Up

There\'s doubtless a great deal more that could be done to improve even
this simple little game, but that can be left as an exercise for the
interested reader. We have taken *The Adventures of Heidi* as far as we
need to for the purposes of this tutorial, and in the next chapter
we\'ll move on to pastures new.

In the course of this chapter we\'ve encountered several new features of
the TADS 3 language and the adv3Lite library. In particular:

-   The use of listenDesc, smellDesc, feelDesc and tasteDesc to provide
    responses to LISTEN, SMELL, FEEL and TASTE commands.
-   Attaching a string to the direction property of a Room instead of
    another Room, to display a message to the player instead of moving
    the player character.
-   Pointing a direction property to a TravelConnector object (in this
    case a StairwayUp) instead of another Room (or string).
-   Going beyond implementing everything as either a Room or a Thing to
    take advantage of the behaviour already defined on a special class
    (in this case StairwayUp).
-   The use of message properties such as cannotTakeMsg and
    cannotEnterMsg to customize the responses to actions that are
    disallowed.
-   The use of cannotGoThatWayMsg and of the cannotGoThatWay(dir) method
    to customize the response to an attempt to travel in a direction
    that\'s not allowed.
-   The use of the logical operators [&&]{.code}, [\|\|]{.code} and
    [!]{.code}
-   The use of Doer objects as a means of interrupting the normal course
    of a command and making it do something different.
-   A quick foretaste of the dobjFor() mechanism for customizing action
    responses.
-   The use of the roomBeforeAction() method of Rooms to intercept
    actions performed there.
-   The use of [exit]{.code} and [abort]{.code} to stop an action in its
    tracks.
-   An introduction to the use of message parameter substitutions to
    make textual output more flexible and appropriate to its context.

This certainly isn\'t everything you need to know to become a master of
adv3Lite, but we\'ve come a long way. If you\'ve mastered all the
material we\'ve covered so far, you now have all the basic skills you
need to write Interactive Fiction with adv3Lite, and if you wanted to
make a start on implementing your own masterpiece, you\'d now be in a
position to do so. At the very least you could start laying out your
map, implementing some of the standard objects within it, and coding a
few non-standard responses, although you\'d need to resume this tutorial
before you tried anything *very* advanced. On the other hand, if you\'d
rather just carry straight on with this tutorial, that would be good
too.

It\'s said that a non-Jew once approached Rabbi Shammai and told the
rabbi he would convert to Judaism if the rabbi managed to teach him the
entire torah (the Jewish law) while he (the gentile) stood on one leg.
Apparently Shammai drove him away with a measuring-rod. The gentile then
approached Shammai\'s rival Rabbi Hillel with the same offer. Hillel
replied \"Whatever you would hate people to do to you, don\'t do to
others; the rest is commentary, go and learn.\" A latter-day Rabbi
Hillel asked a similar question about adv3Lite might have said, \"It\'s
all about defining objects, properties and methods; the rest is detail,
go and learn.\" You\'ve now learned the basics of defining objects; in
the chapters that follow we\'ll continue to explore some of the detail.

Finally, here\'s the complete listing of *The Adventures of Heidi* as
we\'ve now left it:

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
        
        east = forest
        in = 'It\'s such a lovely day -- much too nice to go inside. '
    ;

    + cottage: Thing 'tiny cottage;small simple; house home'
        "It's small and simple, but you're very happy here. "
        
        isFixed = true
        
        cannotEnterMsg = location.in
        cannotTakeMsg = 'You\'re not a tortoise; you can\'t carry your home with
            you. '
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
        bulkCapacity = 1
    ;


    forest: Room 'Deep in the forest'
        "Through the dense foliage, you glimpse a building to the west. A track
        heads to the northeast. "
        
        west = beforeCottage
        northeast = clearing
    ;

    + bird: Thing 'baby bird;;nestling'
        "Too young to fly, the nestling tweets helplessly. "
           
        bulk = 1
        
        listenDesc = "The nestling sounds scared and in need of assistance. "
    ;


    clearing: Room 'A forest clearing'
        "A tall sycamore stands in the middle of this clearing. The path winds
        southwest through the trees. "
        
        southwest = forest
        up = tree
    ;

    + nest: Thing 'bird\'s nest; carefully woven; moss twigs'
        "The nest is carefully woven of twigs and moss. "
        
        contType = In   
        bulk = 1
    ;


    + tree: StairwayUp 'tall sycamore tree;;stout proud'     
        "Standing proud in the middle of the clearing, the stout tree looks easy to
        climb."
        
        destination = topOfTree
        
        travelDesc = "You <<one of>> manage to scramble all the way up <<or>> once 
            again climb <<stopping>> to the top of the tree. "
    ;

    topOfTree: Room 'At the top of the tree'
        "You cling precariously to the trunk. "
        
        down = clearing
        
        cannotGoThatWay(dir)
        {
            "The only way from here is down. ";
        }
        
        roomBeforeAction()
        {
            if(gActionIs(Drop))
            {
                gDobj.actionMoveInto(clearing);
                "{The subj dobj} {falls} to the ground below. ";
                exit;
            }
        }
    ;

    + branch: Thing 'wide firm bough; flat; branch'
        "It's flat enough to support a small object. "
        
        iFixed = true
        isListed = true
        contType = On
        
        afterAction()
        {
            if(nest.isIn(self) && bird.isIn(nest))
                finishGameMsg(ftVictory, [finishOptionUndo]);
        }
    ;

    modify Room
        cannotGoThatWayMsg = 'Better stick to the path. '
    ;

    Doer 'go dir'
        execAction(curCmd)
        {
            "You're not aboard a ship. ";
            abort;
        }
        
        direction = [portDir, starboardDir, foreDir, aftDir]
    ;
:::
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Heidi
Revisited](revisit.htm){.nav} \> Summing Up\
[[*Prev:* Is the bird in the nest?](birdinnest.htm){.nav}     [*Next:*
Goldskull](goldskull.htm){.nav}     ]{.navnp}
:::
