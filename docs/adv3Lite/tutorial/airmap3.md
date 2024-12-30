::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Airport](airport.htm){.nav} \>
Aboard the Plane\
[[*Prev:* Extending the Map](airmap2.htm){.nav}     [*Next:* Doors and
Locks](doors.htm){.nav}     ]{.navnp}
:::

::: main
# Aboard the Plane

## Preparations

We\'ll put the map of the plane in another separate source file, so
start by adding a file to your project called plane.t (if you can\'t
remember how to do this, refer to the instructions at the start of the
[previous section](airmap2.htm)). Remember to make sure you new source
file begins with:

::: code
    #charset "us-ascii"

    #include <tads.h>
    #include "advlite.h"
:::

For the moment we\'ll stick to a fairly skeletal layout. There\'ll be
plenty of complications to add later, especially in the cockpit. We will
do a couple of new things, however. First, since all the rooms we\'re
about to define have in common that they\'re aboard an
airplane/aeroplane, we\'ll assign them to a common **Region**, which
we\'ll call planeRegion. We\'ll start out by defining the Region itself:

::: code
    planeRegion: Region
    ;
:::

That\'s all there is to it; it\'s up to rooms to say what regions they
belong to (by listing them in their [regions]{.code} property), not to
regions to say what rooms they contain (actually that\'s not quite true;
internally the game keeps note of what rooms each region contains, but
game authors don\'t have to define it, since it\'s all taken care of
automatically; all we have to define is what regions each room belongs
to). A Region is simply a way of grouping rooms that have something
significant in common. At first sight this may not seem all that useful,
but we\'ll demonstrate a couple of uses for it by the time we reach the
end of this section. If you\'re anxious to know more about them, you can
read about [regions](../manual/room.htm#regions) in the *Adv3Lite
Library Manual*.

Since all the rooms we\'re about to define are aboard a plane, the other
thing we\'ll do a bit differently is use shipboard directions (port,
starboard, fore and aft) to interconnect them, though we\'ll also
provide compass directions as silent synonyms.

## Laying out the map

Here\'s our initial skeletal layout for the plane:

::: code
    cockpit: Room 'Cockpit' 'cockpit'
        
        aft = planeFront
        south asExit(aft)
        out asExit(aft)
        
        regions = [planeRegion]
    ;

    planeFront: Room 'Front of Plane' 'front[n] of the plane;;airplane aeroplane'
        "The main aisle comes to an end at the port exit of the plane, but continues
        aft past the seating. A little further forward is a door that <<unless
          me.hasSeen(cockpit)>>presumably<<end>> leads into the cockpit. "
        
        fore = cockpit
        north asExit(fore)
        port = jetway
        west asExit(port)
        out asExit(port)
        aft = planeRear
        south asExit(aft)
        
        regions = [planeRegion]
    ;


    planeRear: Room 'Rear of Plane' 'rear[n] of the plane;;airplane aeroplane'
        "The main aisle continues forward to the front of the plane and aft to the
        bathroom between rows of red coloured seats. "
        fore = planeFront
        north asExit(fore)
        aft = bathroom
        south asExit(aft)
        
        regions = [planeRegion]    
    ;


    bathroom: Room 'Bathroom' 'bathroom;;loo lavatory toilet wc cubicle'
        "The bathroom is just a tiny cubicle with all the standard fittings you'd
        expect. "
        
        fore = planeRear
        north asExit(fore)
        out asExit(fore)    
        
        regions = [planeRegion] 
    ;

    + Decoration 'fittings; wash; washbasin basin taps faucets bowl; them'
         "At least the washbasin and the bowl look reasonably clean. "
        
        notImportantMsg = 'You have no need to make use of any of these facilities
            right now. '
    ;

    + bucket: Container 'bucket; plain yellow plastic; pail'
        "It's just a plain yellow plastic bucket. "
        initSpecialDesc = "Some cleaner seems to have left all his things here:
            <<list of location.listableContents.subset({x: x.moved == nil})>>. "
        
    ;

    + sponge: Thing 'sponge; turquoise'
        "It's a kind of turquoise colour. "
    ;

    + garbageBag: Container 'garbage bag; large green plastic rubbish; bag'
        "It's basically just a large green plastic bag. "
    ;

    + brassKey: Thing 'small brass key; yale'
        "It's just like all the other yale keys you've ever seen. "    
    ;
:::

There\'s only a couple of things to remark on here. The first is the use
of [\"A little further forward is a door that \<\<unless
me.hasSeen(cockpit)\>\>presumably\<\<end\>\> leads into the
cockpit.\"]{.code} The purpose of this is to get rid of the word
\'presumably\' once the player character has visited the cockpit, since
he then knows for certain where the door leads. One way to test this is
to check whether the player character has seen the cockpit, which we can
do with [me.hasSeen(cockpit)]{.code}. Since we want the word
\'presumably\' to appear only if the player character *hasn\'t* seen the
cockpit we use [\<\<unless *cond*\>\>]{.code} rather than [\<\<if
*cond*\>\>]{.code}, so that what follows is displayed if *cond* is
*false*.

The second point of note is the use of [\<\<list of
location.listableContents.subset({x: x.moved == nil})\>\>]{.code} in the
initSpecialDesc of the bucket object. We\'ve met the [\<\<list
of\>\>]{.code} construct before, as a means of controlling how a list of
items is presented to the player. You may recall that anything listed by
[\<\< list of *lst* \>\>]{.code} is marked as mentioned so it isn\'t
mentioned again in the room description object listing. It\'s the
expression [ location.listableContents.subset({x: x.moved ==
nil})]{.code} that may look a bit strange. What it does is to provide a
list of all the listable items directly in the location that haven\'t
yet been moved. If you like you can think of it as equivalent to a
hypothetical [\<\<list of unMoved(location.listableContents)\>\>]{.code}
where [unMoved()]{.code} would be defined as:

::: code
     unMoved(lst)
     {
         local ret = [];
         for(local item in lst)
         {
            if(!item.moved)
               ret += item;
         }
         
         return ret;
     }
     
:::

The rather odd expression [location.listableContents.subset({x: x.moved
== nil})]{.code} is basically just a shorthand means of doing that; if
it looks a bit daunting, don\'t worry about it too much for now; it does
make use of some of the more advanced features of the TADS 3 language.
If you are curious to know more about it you\'ll need to look at a
couple of the sections of the *TADS 3 System Manual*: \"Anonymous
Functions\" in Part III and \"List\" in Part IV, but you can certainly
afford to leave that for now.

One further point is that we define the bathroom fittings as a single
Decoration object that discourages much interaction. The purpose of the
game isn\'t to build a full simulation of everything mentioned, and we
don\'t need a fully-functional toilet simulation here. Quite apart from
anything else we don\'t want to give the player any opportunity to fill
the bucket with water, which could cause all sorts of unwelcome
complications.

## How to be in several places at once

The plane\'s seating is mentioned both at the front and the rear of the
place, but we\'ve yet to implement it. It\'s not something the player
really needs to interact with in the game, so we can afford to give it a
fairly minimalist definition. Also, there\'s no particular reason why
the seating at the front of the plane should be any different from that
at the rear (we\'re not really interested in distinguishing first class
from economy class in this game, for example). Rather than define
essentially the same object twice and put it in two different locations,
we\'ll therefore take a shortcut and define the seating only once but
put it in both locations. We can do that by means of the **MultiLoc**
class:

::: code
     
    MultiLoc, Decoration 'seats; red airline; seating seat; them'
        "Like all airline seats, these ones look like they were designed for the
        average-sized person of a century and a half ago. "
        
        notImportantMsg = 'All the seats round here seem to be taken, so you\'d best
            leave them alone. '
        
        locationList = [planeFront, planeRear]
    ;
:::

There\'s a few points to note here. First of all, MultiLoc is what is
known as a *mix-in* class. This means it must come first in the list of
classes when you define the object; as a general rule classes that are
not derived from Thing should always precede classes that are.

Second, since the whole point of a MultiLoc is to be in several places
at once, you can\'t define its initial location using the + syntax or
the location property. Instead you define its **locationList** as here
to contain the list of rooms (and/or regions) in which the MultiLoc is
initially located.

Third, you need to be a bit careful what you use a MultiLoc for, since
when you define one you do actually end up with precisely the same
object in more than one location, which could produce quite odd effects
if the player is able to have any significant interactions with it.
Usually, then, it\'s best to restrict the use of MultiLocs to Decoration
or Distant items (as here), unless the MultiLoc you\'re defining really
is meant to represent the same physical object straddling the boundary
of two or more rooms (like the fountain at the centre of a square, say,
when the square itself is represented as four different locations). So,
MultiLocs are best restricted to:

1.  Represent the same object seen from a number of different rooms (for
    example, the sun, moon or sky, or a distant mountain).
2.  Represent a number of identical objects that occur in more than one
    location (trees in a forest, say, or the floor of a house) but which
    are treated purely as decorations (the player can examine them, and
    maybe feel them, smell them, and listen to them, but that should
    usually be it; normally no interaction that might change the game
    state should be permitted with MultiLocs of this sort).
3.  Represent the same object straddling the boundary of two or more
    rooms, for example the fountain at the centre of a square. In this
    case, more elaborate interactions are permissible, for example
    tossing a coin into the fountain from the northeast corner of the
    square and retrieving the same coin from the same fountain in the
    southwest corner.

The full story on [MultiLocs](../manual/multiloc.htm) can be found in
the *adv3Lite Library Manual*.

Armed with these provisos, we can define a second MultiLoc to provide a
minimalist representation of the passengers on the plane. This time
we\'ll name the object since we\'ll later want to remove these
passengers from the plane.

::: code
     
    airlinePassengers: MultiLoc, Decoration 'passengers;;men women; them'
        "You sense an air of impatience about them, as if they're all wondering when
        the aircraft is finally going to leave. "
        
        notImportantMsg = 'Better leave them alone; you don\'t want to draw
            attention to yourself. ' 
        
        locationList = [planeFront, planeRear]
    ;
:::

## Making Use of the Region

Earlier on we promised we\'d show a couple of uses for regions. The time
has come to make good on that promise. One thing we can do with a region
is test whether something is in it by using [isIn()]{.code} just as we
can for rooms and other things. The expression [obj.isIn(*reg*)]{.code}
is true if obj is in any of the rooms in *reg* (where *reg* is a
region). Now let\'s see how we can use that in practice.

You\'ll recall that we set up an object to provide a number of
announcements over the airport\'s public address system. It\'s likely
these announcements wouldn\'t be audible aboard the plane, so we can use
[me.isIn(planeRegion)]{.code} to silence the announcements when the
player character is aboard the plane:

::: code
    announcementObj: ShuffledEventList
        ...
        announce()
        {
            if(!me.isIn(planeRegion))
               doScript();
        }
        
        prefix = 'An announcement comes over the public address system: '
    ;
:::

Secondly, we used shipboard directions (port, starboard, fore and aft)
as directions of travel aboard the plane, but they\'re not very
meaningful anywhere else. In a previous chapter we saw how to use a Doer
to block the use of these directions altogether. Now we can define one
that blocks them *except* aboard the plane (i.e. in the planeRegion):

::: code
    Doer 'go dir'
        exec(c)
        {
            "Shipboard directions don't have much meaning here. ";
            abort;
        }
        
        direction = [portDir, starboardDir, foreDir, aftDir]
        when = (!me.isIn(planeRegion))
    ;
:::

The [when]{.code} property of a Doer can be used to specify any
condition we please, and the Doer only takes effect when it evaluates to
true.

This would be a good point at which to try compiling and running the
game again to ensure that everything works as expected.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Airport](airport.htm){.nav} \>
Aboard the Plane\
[[*Prev:* Extending the Map](airmap2.htm){.nav}     [*Next:* Doors and
Locks](doors.htm){.nav}     ]{.navnp}
:::
