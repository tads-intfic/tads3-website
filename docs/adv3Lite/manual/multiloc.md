::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [The Core Library](core.htm){.nav}
\> MultiLocs\
[[*Prev:*Keys](key.htm){.nav}     [*Next:* Topics](topic.htm){.nav}    
]{.navnp}
:::

::: main
# MultiLocs

The standard adv3Lite containment model normally assumes that each game
object resides in its own container, meaning that normally an object can
only be in one place at a time. Occasionally, however, we may want to
define an object that\'s present in multiple locations, such as the sky
(present in every outdoor room), or a distant mountain visible from many
different locations, or, perhaps, a floor running through several rooms
in a house. For situations such as these we can use a MultiLoc

## Defining a MultiLoc

To define a simple MultiLoc, add MultiLoc to the class list of the item
you want to define before Thing (or a class derived from Thing) and set
its **locationList** property to the list of locations in which you wish
the MultiLoc object to be present. The locationList property can contain
a list of Rooms, but it can also contain one or more regions, which
makes it particular easy to place a MultiLoc in every room in a given
region. For example, to define a night sky object that appears in every
Room in the outdoors Region you could do something like this:

::: code
    sky: MultiLoc, Thing 'sky; dark tiny crescent; moon stars'
       "The sky is dark tonight, with only a crescent moon showing among the myriad of stars. "
       isDecoration = true
       notImportantMsg = 'The sky is way too far above your head. '
       locationList = [outdoors]
    ;
:::

It is very convenient to be able just to specify the region in the
locationList of a MultiLoc, instead of having to list each room its in
individually (though you can do it that way), but sometimes you may run
into a situation where you want a MultiLoc to be present in every room
in a region apart from one or two exceptions. Suppose, for example, we
want a MultiLoc to represent the ceiling in every room in the house, but
for some reason we have a custom ceiling in the kitchen, so we don\'t
want our MultiLoc ceiling there as well. Instead of having to list all
the other rooms we want the ceiling in by hand, we can specify the
region and then use the **exceptions** property to list the rooms we
*don\'t* want our plain vanilla MultiLoc ceiling to appear in:

::: code
    ceiling: MultiLoc, Thing 'ceiling'
       
       isDecoration = true
       notImportantMsg = 'You can\'t reach the ceiling. '
       locationList = [indoors]
       exceptions = [kitchen]
    ;
:::

It is no coincidence that these two examples both use decoration-type
objects. That is generally the only safe way to use a MultiLoc, since as
soon as we allow the player to interact with it any way beyond examining
(and perhaps smelling, touching and listening to it) we run the risk
that the game will produce illogical results because what the player
does to the MultiLoc in one location will apply to the MultiLoc in every
location. For example, suppose we wanted to add a floor to every room in
the indoors region. Since in real life a floor is something we can stand
on and put things on we might be tempted to do this:

::: code
    floor: MultiLoc, Thing 'floor;;ground'  // DON'T DO THIS!!!
       
       contType = On  
       isEnterable = true
       locationList = [indoors]   
    ;
:::

But this would be catastrophic, for as soon as the player placed an
object on the floor, that object would appear on the floor of every room
in the house (since it\'s actually the same floor), which is almost
certainly not what we want. If you want to define MultiLoc object
safely, make it a decoration, like this:

::: code
    floor: MultiLoc, Thing 'floor;;ground' 
       
       isDecoration = true
       locationList = [indoors]   
    ;
:::

Or at the most, perhaps:

::: code
    floor: MultiLoc, Thing 'floor;;ground' 
       isDecoration = true   
       decorationActions = [Examine, Feel, SmellSomething]  
       feelDesc = "The floor feels reassuringly solid. "
       smellDesc = "There's a faint smell of floor polish. "
       locationList = [indoors] 
    ;
:::

The first of these is probably better, however, since if the floor
responds to *everything* except EXAMINE with \"The floor is not
important\" players will pretty quickly realize it\'s simply a
decoration object they don\'t need to interact with. In fact, though,
you\'ll hardly ever need to define a MultiLoc to represent the floor or
ground in your own code, since adv3Lite already provides a
[Floor](room.htm#roomfloor) class which takes care of it for you. You\'d
only need to define your own if you wanted to replace the library\'s
default implementation with something different.

Under certain circumstances, however, it may be both legitimate and safe
to define a MultiLoc that does provide a bit more action. These
circumstances are:

1.  The MultiLoc genuinely does represent a single object at a single
    spot, and not an extended object (like the ground or the sky) or
    similar objects in multiple location (like floors and ceilings in a
    house).
2.  The reason for defining it as a MultiLoc is that it is right on the
    boundary of two or more rooms and is equally accessible from each of
    them.

An example might be a fountain that stands right at the centre of a
square you\'re implementing as four different locations. The fountain is
accessible from each corner of the square, so if you throw a coin into
it from one corner you could indeed retrieve the coin from another:

::: code
    fountain: MultiLoc, Thing 'fountain;large ;water fish mouth'
       "It's a large fountain in the form of an improbable looking fish with water gushing from its mouth. " 
       isFixed = true
       contType = In
       locationList = [squareNE, squareNW, squareSE, squareSW] 
    ;
:::

If we had defined a square region we could simply have used that in the
locationList, but this seemed a good idea to show what a MultiLoc with
an explicit list of rooms looks like.

[]{#movingmulti}

## Moving MultiLocs

It may sometimes be necessary to move MultiLocs around. For example, if
the game with the night sky defined long enough was meant to go on into
the next day, at some point it might be necessary to remove the night
sky with its moon and stars and replace it with a daytime one with the
sun and some clouds. The following methods are available for moving
MultiLocs around:

-   **moveIntoAdd(loc)**: moves the MultiLoc into loc in addition to its
    existing locations. If loc is a Region then the MultiLoc is moved
    into every room in the Region (in addition to its existing location)
-   **moveOutOf(loc)**: moves the MultiLoc out of loc while leaving it
    present in all its other locations. If loc is a Region then the
    MultiLoc is moved out of every room in the Region.
-   **moveInto(loc)**: moves the MultiLoc out of all its existing
    locations and into loc. If loc is a region then the MultiLoc is
    moved into every room in the Region. One common use for this might
    be to call moveInto(nil) on a MultiLoc to move it off-stage
    altogether.
-   **addToLocations()**: moves the MultiLoc into all the locations in
    its locationList/initialLocationList (and then out of all the
    locations in its exception list). This is called at library
    preinitialization to set up MultiLocs initially, but it could also
    be used during the course of a game to restore a MultiLoc to all its
    original locations after using moveInto(nil) to move it off-stage.
    Note that it should *not* be used for any other purpose in game
    code.

\
[]{#location}

## The location of a MultiLoc

You can test whether a MultiLoc is present in a location by using the
**isIn(loc)** or **isDirectlyIn(loc)** methods, just as you do on a
Thing. MultiLoc also defines its own version of the **location**
property, which you should never override. In one sense the location
property of a MultiLoc ought to be meaningless, since a MultiLoc
generally does not reside in only one location, but for certain purposes
the library needs to use a MultiLoc\'s location property, since certain
calculations it makes assume that every physical object defines one, and
it may occasionally be useful in game code to be able to make the same
assumption when writing code that may apply to any object. The location
property of a MultiLoc is taken to be the location of the current actor
(or of the player character if no actor is defined), provided the
MultiLoc is present there. Otherwise the location property is taken to
be the last place the MultiLoc was seen.

\

## [Initializing a MultiLoc\'s Location]{#initloc}

All the examples above have used the [locationList]{.code} property to
define where we want a MultLoc to start out. As we\'ve seen, this
property can contain a list of Rooms, other Things and/or Regions. We
could also use the [initialLocationList]{.code} property and it would
appear to work in just the same way. If you define a MultiLoc with an
empty [initialLocationList]{.code}, adv3Lite copies the
[locationList]{.code} to the [initialLocationList]{.code}, and then
proceeds to initialize the locationList just as it would have done had
you defined a lis of Rooms and/or Regions directly on the
[initialLocationList]{.code} property.

What happens during this initialization is that any Regions in the
initialLocationList are expanded into their constituent rooms and then
added to the locationList property (with any duplicates being removed,
to ensure that the same Room isn\'t listed twice). For example, suppose
your [outdoors]{.code} region contains the Rooms [courtyard]{.code},
[gravelPath]{.code} and [garden]{.code}, and suppose you define a
MultiLoc [sky]{.code} object with a [locationList]{.code} of
[\[outdoors, riverBank, meadow\]]{.code}. After your sky object is
initialized its [initialLocationList]{.code} will be [\[outdoors,
riverBank, meadow\]]{.code} and its [locationList]{.code} will be
[\[courtyard, gravelPath, garden, riverBank, meadow\]]{.code}.
Thereafter, [initialLocationList]{.code} will remain unchanged (unless,
of course, you deliberately change it in your own code) while
[locationList]{.code} will be updated to reflect any changes caused by
using [moveIntoAdd()]{.code}, [moveOutOf()]{.code} and
[moveInto()]{.code} (so don\'t try to change [locationList]{.code}
directly in your own code, or you\'ll probably upset things).

MultiLoc also defines an **initialLocationClass** property and an
**isInitiallyIn(obj)** method, which are intended to work together. If
[initialLocationClass]{.code} is not nil then every instance of that
class will be added to the MultiLoc\'s [locationList]{.code} provided
[isInitiallyIn(obj)]{.code} returns true for that instance (where *obj*
is the instance in question). One reason for this feature is to
facilitate the implementation of the [Floor](room.htm#roomfloor) class,
but you may find other uses for it in your own code.

Note that any locations added to the location list via
[initialLocationClass]{.code} will be in addition to those defined on
[initialLocationList]{.code}, and that any locations defined in the
exceptions list will be removed from the location list after those
defined in both [initialLocationList]{.code} and
[initialLocationClass]{.code} have been added.

You may be wondering why you\'re allowed to use either the
[locationList]{.code} or the [initialLocationList]{.code} property to
accomplish essentially the same task: defining the initial set of
locations in which a MultiLoc resides. One reason is that
[locationList]{.code} is a bit less of a mouthful to type; another is to
ensure backward compatibility with game code written for earlier
versions of adv3Lite that didn\'t provide the
[initialLocationList]{.code} property. Which of the two you use is
entirely up to you (for instance, you may prefer to define initial
locations on [initialLocationList]{.code} because it seems clearer that
way), just so long as you use one or the other and don\'t try to use
both. If you define both [locationList]{.code} and
[initialLocationList]{.code} on the same MultiLoc, whatever you put in
[locationList]{.code} will simply be ignored.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [The Core Library](core.htm){.nav}
\> MultiLocs\
[[*Prev:* Keys](key.htm){.nav}     [*Next:*Topics](topic.htm){.nav}    
]{.navnp}
:::
