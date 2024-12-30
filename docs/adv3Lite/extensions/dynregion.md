::: topbar
![](../../docs/manual/topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](../../docs/manual/toc.htm){.nav} \|
[Extensions](../../docs/manual/extensions.htm){.nav} \> Dynamic Region\
[[*Prev:* Command Help](cmdhelp.htm){.nav}     [*Next:*
EventListItem](eventlistitem.html){.nav}     ]{.navnp}
:::

::: main
# DynamicRegion

## Overview

The purpose of the [dynamicRegion.t](../dynamicRegion.t) extension is to
enable the definition of [Regions](../../docs/manual/room.htm#regions)
(of the [DynamicRegion]{.code} class) that can be expanded or contracted
during the course of a game (a normal Region is fixed and can\'t be
changed). This ability comes with certain restrictions, however.

\
[]{#classes}

## New Classes, Objects and Properties

In addition to a number of properties intended purely for internal use,
this extension defines the following new class and properties:

-   *New Class*: **DynamicRegion**
-   *Properties/Methods*: [expandRegion()]{.code},
    [contractRegion()]{.code}, [isCurrentlyWithin()]{.code},
    [extraAdjustments()]{.code}.

\
[]{#usage}

## Usage

Include the dynamicRegion.t file after the library files but before your
game source files..

With certain restrictions (to be described further below) you can use a
DynamicRegion in the same way as a normal Region, with the addition of
the following methods:

-   **expandRegion(rm)**: Adds *rm* to the rooms in this DynamicRegion,
    where *rm* may be a single room, a list of room, or a list of rooms
    and/or regions.
-   **contractRegion(rm)**: Removes *rm* from the rooms in this
    DynamicRegion, where *rm* may be a single room, a list of room, or a
    list of rooms and/or regions.
-   **isCurrentlyWithin(region)**: returns true if and only if all our
    rooms are also in *region*; note that this extension also adds this
    method to the base Region class.
-   **extraAdjustments(rm, expanded)**: Carry out any additional
    adjustments that need to be made as side-effects to adding or
    removing rooms. By default we do nothing here but game code can
    override as necessary. The *rm* parameter is the list of rooms
    and/or regions that have just been added to (if *expanded* is true)
    or removed from (if *expanded* is nil) this DynamicRegion.

To create a Dynamic SenseRegion, just define an object as being of both
the [DynamicRegion]{.code} and the [SenseRegion]{.code} class, but note
that the DynamicRegion class must then be listed first in such a
definition, for example:

::: code
     myDynamicSenseRegion: DynamicRegion, SenseRegion
     ;
     
:::

[]{#restrictions}

## Restrictions and Workarounds

Since a DynamicRegion may gain or lose rooms, it cannot be in any
permanent relation with any other Regions. In particular this means:

-   A DynamicRegion cannot be part of (located in) any other Region.
-   No other Region can be part of (located in) a DynamicRegion.

This does not prevent your *defining* a DynamicRegion as part of the
contents of another Region, or another Region as part of the contents of
a DynamicRegion (for example, through its [expandRegion(rm,
expanded)]{.code} method), but these are just shorthand ways of listing
the contents (i.e. list of rooms) of the enclosed Region/DynamicRegion
in the enclosing DynamicRegion/Region as part of the initial contents of
the enclosing Region. It does not set up any relation between the
Regions themselves.

For example, suppose we have a DynamicRegion X that initially starts out
containing rooms A, B and C and we define it to be part of a larger
region Y that also contains Rooms D, E and F. If we later added Room G
to X and took away room C from X, would we also have to change region Y
so that it now contained Rooms A, B, D, E, F, G? But then what if Region
Y also contained Region Z that started out overlapping with Region X so
that Region Z also contained Room C? Shouldn\'t Room C then be retained
in Region Y even when it\'s removed from Region X?

If this sounds a bit complicated and confusing, that\'s because it is;
once changes to one region are allowed to cause changes to other
regions, it\'s both unclear what ought to happen and horribly complex to
keep track of. For that reason it seems better to keep things reasonably
simple and not allow a DynamicRegion to contain or be contained by any
other Region. Of course a DynamicRegion could happen to contain rooms
that are all in some other Region as well, but we don\'t *count* this as
the DynamicRegion being *in* the other Region since there\'s no
guarantee that this relation will continue to hold. We can, however,
test for *temporary* containment with the
[isCurrentlyWithin(region)]{.code} method;
[X.isCurrentlyWithin(Y)]{.code} returns true if all the rooms in X are
also in Y.

But note the distinction. If X is a DynamicRegion that contains rooms A,
B and C, while Y is some other Region that contains rooms A, B, C, D and
E, although [X.isCurrentlyIn(Y)]{.code} will then be true,
[X.isIn(Y)]{.code} will be nil (i.e. false), since there is no
*intrinsic* relation between the Regions X and Y.

Additionally, DynamicRegions don\'t do the following:

-   If the initial location of a MultiLoc is defined as being a
    DynamicRegion, adding or subtracting rooms to or from the
    DynamicRegion does not change the location of the MultiLoc.
-   If a DynamicRegion is defined as being familiar, changing its list
    of rooms doesn\'t make the added rooms familiar if they weren\'t
    before or unfamiliar if they were before.

These limitations are there partly because it would be too complex to
keep track of all such cases, and partly because each game\'s
requirements may be different in every particular case. However, in game
code it may be relatively straightforward to work round these
limitations provided it\'s clear what\'s wanted. To help with this, the
DynamicRegion class defines the [extraAdjustments()]{.code} method which
is executed at the end of any call to [expandRegion()]{.code} or
[contractRegion()]{.code}. By default it does nothing, and is thus
available to be overridden to do whatever might be needed.

For example, suppose we had an overcastArea DynamicRegion that can
expand or shrink, and that a MultiLoc clouds object should be present in
every room of that DynamicRegion at all times. Initially we might
define:

::: code
    clouds: MultiLoc, Distant 'clouds; dark grey;;them'
       "Dark grey clouds cover the sky. "
       
       locationList = [overcastArea]
    ;
     
     
:::

This is fine for defining the initial locations of the clouds object,
but these need to be updated when overcastArea gains or loses rooms. To
achieve this we can use its [extraAdjustments()]{.code} method to
recalculate where the clouds object should be when the overcastArea
grows or shrinks:

::: code
     overcastArea: DynamicRegion
         extraAdjustments(rm, expanded)
         {
             /* Re-initialize clouds' location list */
             clouds.moveInto(nil);
             clouds.moveIntoLocations();
         }
     ;
     
:::

We could use a similar technique for making one DynamicRegion expand or
contract in line with another. Suppose, for example, that we have a
forestRegion and a meadowRegion next to each other, such that one
shrinks if the other grows (as trees are cut down or planted). We could
then make the meadowRegion automatically grow or shrink as the
forestRegion shrinks or grows:

::: code
    meadowRegion: DynamicRegion
    ;

    forestRegion: DynamicRegion
        extraAdjustments(rm, expanded)
        {
            if(expanded)
               meadowRegion.contractRegion(rm);
            else
               meadowRegion.expandRegion(rm);
        }
    ;
     
:::

Alternatively, if the meadowRegion were notionally part of an
outdoorRegion, we might want both to expand or contract together:

::: code
     meadowRegion: DynamicRegion
        extraAdjustments(rm, expanded)
        {
            if(expanded)
               outdoorRegion.expandRegion(rm);
            else
               outdoorRegion.contractRegion(rm);
        }
     ;
     
     outdoorRegion: DynamicRegion
     ;
     
:::

As can be seen from these examples, such things are quite easy to
arrange in game code on a case by case basis, but would be almost
impossible to provide for in library code, since it would become at best
horribly cumbersome for library code to attempt to cater for all the
possibilities that game authors might want.
:::

------------------------------------------------------------------------

::: navb
*Adv3Lite Manual*\
[Table of Contents](../../docs/manual/toc.htm){.nav} \|
[Extensions](../../docs/manual/extensions.htm){.nav} \> Dynamic Region\
[[*Prev:* Command Help](cmdhelp.htm){.nav}     [*Next:*
EventListItem](eventlistitem.html){.nav}     ]{.navnp}
:::
