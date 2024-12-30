::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Goldskull](goldskull.htm){.nav}
\> Retrospective\
[[*Prev:* Everything in its place](inplace.htm){.nav}     [*Next:*
Airport](airport.htm){.nav}     ]{.navnp}
:::

::: main
# Retrospective

We\'ve just covered quite a lot of ground, especially for what on the
face of it seems such a simple game, and you may be feeling a bit hazy
about at least some of the details, so let\'s end this chapter by going
over what we\'ve just learned.

The first important lesson is just how much effort we\'ve had to put
into such a seemingly simple game. That\'s what writing IF is like.
Although the final version of Goldskull we\'ve arrived at is far from
perfect and could doubtless be polished quite a bit more, the sort of
things we\'ve done to improve on the original version illustrate the
kinds of thing any IF author needs to do. Admittedly we complicated
things a bit by introducing a couple of portable objects (the pebble and
the knapsack) that weren\'t in the original, but the underlying lesson
remains: taking the trouble to make your game respond sensibly to
attempts by your players to depart from the script you had planned for
them makes all the difference between a well-implemented game your
players will respect and a poorly-implemented game they will deride.

It follows that what during the course of this chapter may have felt
like a whole load of unwelcome complications designed to make life more
difficult for you are actually just the opposite: tools provided by the
library to make your life easier by supplying ready-made solutions to
common problems.

Let\'s now quickly review the specifics of what we\'ve just covered.

First, there was the use of the [notifyRemove()]{.code} method to
respond to one object being removed from being contained by another.

Second, there was the use of [asExit(*dir*)]{.code} to make one exit
synonymous with another, without both showing up in the exit lister. If
you remember, it\'s used like this: [in asExit(north)]{.code} (note,
there\'s no = sign here).

Third, there was the use of various library-defined classes beyond Thing
and Room, sometimes to save us the work of reinventing wheels that the
library already provided (like Enterable, StairwayUp and PathPassage),
and sometimes mainly to make our code a bit clearer (such as Fixture,
Decoration, Surface and Container). We could get the same effect as the
second type of class just by defining the corresponding property on
Thing ([isFixed = true]{.code}, [isDecoration = true]{.code}, [contType
= On]{.code}, [contType = In]{.code}), which is more or less all these
library classes do, but remembering the name of the classes is probably
no harder than remembering the name of the properties we\'d otherwise
have to override, and using the classes probably makes our code that
much easier to read (though ultimately it\'s up to you which way of
doing things you prefer). If you\'re interested, you can find a list of
the most common of these classes in the section on
[extras](../manual/extra.htm) in the *adv3Lite Manual*. At first sight
it may look like there are quite a lot of them, but there are actually
far fewer such classes than there are in adv3, and for the most part
their names make their functions pretty clear. In any case they\'ll tend
to become familiar with use and you\'ll get quite a bit more exposure to
many of them over the course of this tutorial.

Fourth, we showed how to generalize the mechanics of a puzzle, in this
case by adding a weight property to the Thing class and manipulating it
properly. The point is not that you should remember how to implement
weight in adv3Lite (most games probably don\'t need it, which is why
adv3Lite doesn\'t provide it as standard) but that you should start to
get a feel for how you can customize and adapt the library to add
special features that your own game needs.

Fifth, we encountered a second and slightly more detailed example of
action handling in showing how we could make the gold skull respond to
having things thrown at it. This is a skill you\'ll need to acquire,
since, if writing IF in a system like adv3Lite is mainly about defining
objects and their methods and properties, the methods you\'ll probably
find yourself most often defining (or overriding) are those that handle
actions (or special cases of actions, like throwing objects at the gold
skull). Indeed, since a work of IF is largely driven by the player
entering commands, it should hardly be surprising that the main task of
an IF author should be to ensure that his game can respond to those
commands, and a large part of that means defining how objects respond to
actions (inevitably, since player commands generally take the form of
instructing the player character to carry out certain actions on
particular objects).

In one sense, we\'ve only scratched the surface of action-handling so
far; I\'m deliberately trying to deliver it in small chunks so you
don\'t get overwhelmed by a deluge of detail. But in another sense,
we\'ve already covered quite a lot of what you need to know, since the
adv3Lite library has been written in such a way as to allow as much
customization of object behaviour as possible through overriding
properties (often with simple true/nil choices) rather than having to
override a vast array of action-processing methods. So the way we
handled throwing things at the gold skull should be fairly
representative of quite a lot of the action handling you\'ll be doing in
your own game, namely overriding an [action()]{.code} method to handle
special cases and perhaps calling [inherited]{.code} for other cases.

In any case, don\'t worry if you\'re still feeling a bit hazy on how
actions should be handled. There\'s a lot more to be said on the
subject, and you\'ll get a lot more practice at it before this tutorial
is done.

Sixth, we looked at the use of the [specialDesc]{.code} and
[initSpecialDesc]{.code} for displaying separate paragraphs about
particular objects in a room description listing.
[initSpecialDesc]{.code} is typically used to give a customized initial
description of something (e.g. \"A red jumper has been tossed carelessly
on the floor\" rather than the blander \"You see a red jumper here\"),
while [specialDesc]{.code} is typically used to display a paragraph
about something that otherwise wouldn\'t be listed at all, like a
fixture not mentioned in the main body of the room description. We also
illustrated the use of constructs like \<\<mention a pebble\>\> and
\<\<list of listableContents\>\> to further customize the way items are
listed in room descriptions, but don\'t worry if you\'re a bit hazy
about the details. So long as you\'re aware of the kind of thing that
can be done you can always refer back to the section on [Room
Descriptions](../manual/roomdesc.htm) in the manual when you need it.

Seventh, we showed how the definition of the player character object can
be made a little more compact by using the [Player]{.code} class,
although we may still want to define other properties of this object,
such as its description.

Finally, we demonstrated the use of PathPassage as another kind of
[TravelConnector](../manual/travel.htm) object. Hopefully it was
reasonably clear how this worked, but don\'t worry too much if it
wasn\'t, because you\'ll be seeing more examples later on.

If, as recommended, you\'ve been following this tutorial by typing in
the code for yourself and trying it out, that should help you to
remember at least the essentials of what we\'ve covered here, and if you
continue to follow this tutorial in that way, then repetition will soon
start to make the most common features start to seem really quite
familiar. Over the course of the remaining chapters of this tutorial we
shall be developing one last game together, and that will give plenty of
opportunity to rehearse many of the adv3Lite features already covered as
well as to introduce several new ones. In the meantime, we\'ll leave
Goldskull with a complete listing of the game as it ended up.

## Complete Goldskull Listing

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
         * Define the initial player character; this is not strictly necessary if we use the 
         * Player class to define the initial player character as below
         */
        // initialPlayerChar = me
    ;


    /* The starting location; this can be called anything you like */

    startroom: Room 'Outside Cave'
        desc = "You're standing in the bright sunlight just outside of a large,
            dark, foreboding cave, which lies to the north. The path back to your
            camp winds roughly southeast through the dense foliage. " 
        
        north = cave 
        in asExit(north)
       
        southeast = pathBack
        
        ;

    + pathBack: PathPassage 'overgrown path'
        "The heavily overgrown path runs roughly southeast through the trees. "
        
        canTravelerPass(traveler)
        {
            return goldSkull.isIn(traveler);
        }
        
        explainTravelBarrier(traveler)
        {
            "You've no intention of leaving till you've got what you came for. ";
        }
        
        travelDesc()
        {
            "Your mission complete, you head triumphantly back to your camp. ";
            finishGameMsg(ftVictory, [finishOptionUndo]);
        }
        
    ;

    /* 
     *   The player character object. This doesn't have to be called me, but me is a
     *   convenient name. Here we define it using the Player class rather than the
     *   Thing class just to show how it can be done.
     */

    + me: Player 'you'   
        "You can't see yourself, but you suspect you must look quite a sight after
        traipsing miles through tropical jungle to get here. "      
    ;

    ++ knapsack: Wearable, Container 'knapsack; trusty old worn; bag sack'
        "Your trusty old knapsack may be getting a bit worn, but it's accompanied
        you on so many adventures you wouldn't be without it. "
        
        wornBy = me
    ;

    + caveMouth: Enterable 'cave; dark large foreboding uninviting of[prep];
        mouth entrance'
        "The mouth of the cave is easily large enough to allow entrance, but looks
        dark and uninviting. "
        
        destination = cave
    ;
     
    +  Decoration 'foliage; thick dense; jungle trees leaves'
        "The foliage is so thick round here that it blocks every route but the one
        you came by and the entrance to the cave. "    
    ;    

    +  Decoration 'sunlight; bright dazzling; sun light'
        "It's so bright it's almost dazzling. "
        
        notImportantMsg = 'It\'s pointless even attempting that with something as
            insubstantial as sunlight. '
    ;
        

    + smallRock: Thing 'small rock; round solid'
         "It's roughly round and looks pretty solid. "
        
        initSpecialDesc = "A small rock <<if pebble.moved>>lies <<else>> and
            <<mention a pebble>> lie <<end>> on the ground near the mouth of the
            cave, evidence, perhaps, of long-term erosion. "
        
        weight = 10
    ;

    + pebble: Thing 'tiny pebble; smooth round'
        "It's just a tiny, round pebble, almost perfectly smooth. "
    ;




    cave: Room 'Cave'    
        desc = "You're inside a dark and musty cave. Sunlight 
        pours in from a passage to the south. " 

        south = startroom 
        out asExit(south)
    ;

    + pedestal: Fixture, Surface 'stone pedestal; smooth solitary'
        "The smooth stone pedestal is artfully positioned to catch the sunlight at
        just this time of day, picking out the inscription carved into its front. "
            
        specialDesc = "A solitary stone pedestal stands at the centre of the
            cave<<if listableContents.length > 0 >>, with <<list of
              listableContents>> resting on top of it<<end>>. "
        
        notifyRemove(obj)
        {
            gMessageParams(obj);
            
            if(getWeightWithin() - obj.getWeight < goldSkull.weight)
            {
                "As {the subj obj} {leaves} the pedestal, a volley of poisonous
                arrows is shot from the walls! You try to dodge the arrows, but
                they take you by surprise!";  
                
                finishGameMsg(ftDeath, [finishOptionUndo]);  
            }
        }
    ;

    ++ Fixture 'inscription; faded ancient sumerian; lettering script cuneiform'
        "The lettering is quite faded, and the script is in ancient Sumerian
        Cuneiform, but fortunately that's a language you took the trouble to learn,
        and you can just about make it out. "
        
        readDesc = "The inscription reads <q>Whoever dares remove this sacred object
            from its place shall become as that which he desires.</q> "
        
        weight = 0
        
        cannotTakeMsg = 'You can hardly take the inscription; it\'s part of the
            pedestal. '
        
    ;    

    ++ goldSkull: Thing 'gold skull;; head'
        "It's the shape and size of a human skull, but made of solid gold; it must
        be worth a fortune. "
        
        weight = 10
        
        iobjFor(ThrowAt)
        {
            action()
            {
                inherited;
                if(gDobj.getWeight >= weight/2 && location == pedestal)
                    actionMoveInto(cave);
            }
        }
    ;


    modify Thing
        weight = 1
        
        getWeightWithin()
        {
            local totalWeight = 0;
            for (local item in contents)
                totalWeight += (item.weight + item.getWeightWithin());
            
            return totalWeight;
        }
        
        getWeight = weight + getWeightWithin()
    ;
:::
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Goldskull](goldskull.htm){.nav}
\> Retrospective\
[[*Prev:* Everything in its place](inplace.htm){.nav}     [*Next:*
Airport](airport.htm){.nav}     ]{.navnp}
:::
