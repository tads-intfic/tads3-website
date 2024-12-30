::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Schemes and
Devices](schemes.htm){.nav} \> The Maintenance Room\
[[*Prev:* Just the Ticket](ticket.htm){.nav}     [*Next:* The Security
Area](security.htm){.nav}     ]{.navnp}
:::

::: main
# The Maintenance Room

You may recall that the main point of the maintenance room in the
original game description was to provide a switch for the player to turn
off the metal detector (so that the ID card can be carried through it
without triggering an alarm). We\'ll elaborate on this a little, not for
the sake of adding any stunningly original puzzles, but just to
illustrate a few features of the adv3Lite library. In particular we\'ll
furnish the maintenance room with a couple of steel cabinets, one tall
one for keeping the cleaning equipment in and one shorter one containing
the power switches. We\'ll lock the power cabinet with a small silver
key, which we\'ll hide under a potted plant on top of the smaller
cabinet.

The first thing to do is to add a brief description of the maintenance
room that mentions the two cabinets:

::: code
    maintenanceRoom: Room 'Maintenance Room' 'maintenance room'
        "<<one of>>On entering the room you immediately notice<<or>>This is a small
        square room with<<stopping>> a pair of steel cabinets mounted against one
        wall, one much taller than the other. The only way out is through a door to
        the west. "
        
        west = mrDoorOut
        out asExit(west)
    ;
:::

Notice the use of the \<\<one of\>\> \... \<\<or\>\> \...
\<\<stopping\>\> embedded description so that we see one version of the
description the first time we enter the room, and a different one
thereafter.

Next we need the two cabinets. We\'ll start with the tall one that would
normally be used to house the bucket, sponge and garbage bag.

::: code
    + tallCabinet: OpenableContainer, Fixture 'tall metal cabinet; green'
        "It's a good two metres high and painted an institutional green. "
        
        bulkCapacity = 50
    ;
:::

We\'ve made the tall cabinet both an OpenableContainer and a Fixture (so
it can be open and closed, but can\'t be picked up and carried around),
and we\'ve given it a bulkCapacity of 50, so that it can hold a
reasonable number of objects. This is only meaningful if we give some
bulk to the objects that might be stored in the maintenance room, for
example:

::: code
    + bucket: Container 'bucket; plain yellow plastic; pail'
        "It's just a plain yellow plastic bucket. "
        initSpecialDesc = "Some cleaner seems to have left all his things here:
            <<list of location.listableContents.subset({x: x.moved == nil})>>. "
        
        bulk = 6
        bulkCapacity = 6
        
    ;

    + sponge: Thing 'sponge; turquoise'
        "It's a kind of turquoise colour. "
        
        bulk = 3
    ;

    + garbageBag: Container 'garbage bag; large green plastic rubbish; bag'
        "It's basically just a large green plastic bag. "
        
        bulk = (2 + getBulkWithin)    
        bulkCapacity = 10
    ;

    + brassKey: Key 'small brass key; yale'
        "It's just like all the other yale keys you've ever seen. "    
        
        actualLockList = [maintenanceRoomDoor, mrDoorOut]
        plausibleLockList = [maintenanceRoomDoor, mrDoorOut]
        
        bulk = 1
    ;
:::

Note that we\'ve also given a bulkCapacity to the bucket and the garbage
bag, both of which can contain things, and that we\'ve made the bulk of
the garbage bag dependent on the bulk of the items it contains: an empty
garbage bag could presumably be folded away to almost nothing, while a
full one could get quite bulky.

This might be a good point at which to define the bulk of the other
portable items in the game. You should by now know how to do this by
yourself, using the following table:

  ----------- ----------
  **Item**    **bulk**
  IDcard      1
  newspaper   4
  ticket      1
  suitcase    8
  uniform     6
  ----------- ----------

The whole point of this is of course to try to make sure that players
can\'t put larger items inside smaller ones, or put an unrealistic
number of items inside anything. (We\'ll deal with the bulkCapacity of
the suitcase later, for reasons that will become apparent when we get to
it).

## Multiple Containment

We said that the short cabinet would have a pot plant placed on top of
it, but on the face of it that gives us a bit of a problem, since, being
a cabinet, it also needs to have things inside it, and the adv3Lite
containment model doesn\'t allow the same object to provide more than
one kind of containment. The solution is to make it *appear* to the
player that the cabinet can have things both placed on it and in it. To
do that we need to make the cabinet out of three separate objects: one
to represent the cabinet, one to represent its interior (a container),
and one to represent its top (a surface). We then need to redirect
actions appropriate to the container-like object (look in, put in, open,
close, lock and unlock) from the cabinet to its container, and actions
appropriate to the surface-like object (put on) from the cabinet to its
top.

This may sound quite complex and messy, but a couple of features of the
adv3Lite library and TADS 3 actually make it relatively simple. The
first is the use of the **remapXXX** properties: **remapIn**,
**remapOn**, **remapUnder** and **remapBehind**. One or more of these
can be defined on any Thing; they should point to another Thing to which
the appropriate actions will then be redirected. So, for example, if we
had a desk with a drawer we could write:

::: code
    + desk: Fixture, Surface 'desk'
      "It has a single drawer. "
      remapIn = drawer
    ;

    ++ drawer: OpenableContainer 'drawer'
    ;
:::

The set-up above will ensure that the commands LOOK IN DESK, SEARCH
DESK, PUT something IN DESK, OPEN DESK, CLOSE DESK, LOCK DECK amd UNLOCK
DESK are all automatically redirected to the drawer.

It may still seem a bit of an effort to have to define a couple of extra
objects to represent the inside and the top of the short cabinet, but we
can take advantage of a TADS 3 feature to make it easier: anonymous
nested objects. An anonymous nested object is one that\'s defined
directly on the property of another object, like this:

::: code
    + desk: Fixture, Surface 'desk'
      "It has a single drawer. "
      remapIn: OpenableContainer 'drawer' { location = lexicalParent }
    ;
:::

Note that in this case we have to use opening and closing braces to mark
the beginning and end of the nested object definition. Note too this
method of doing things doesn\'t created an object called
[remapIn]{.code}; it instead creates a nameless object that\'s the
current value of the desk\'s [remapIn]{.code} property. Note also the
use of **lexicalParent** to refer to the enclosing object (in this case
the desk) from within the definition of the enclosed object (the
drawer).

That\'s probably not the best way to implement a desk drawer, but it\'s
the ideal way to create the top and interior of an object that has both.
One further step we can take to make things easier in this case is to
use the **SubComponent** class to define the various nested objects we
need; this automatically gives the SubComponent the same name as its
lexicalParent (i.e. its enclosing object), sets the location of the
SubComponent to its lexicalParent, and automatically sets the contType
of the SubComponent to In, On, Under or Behind depend on whether the
SubComponent has been defined on the remapIn, remapOn, remapUnder or
remapBehind property of the enclosing object.

Armed with these tools we can now define the short cabinet thus:

::: code
    + shortCabinet: Fixture 'short metal cabinet; light grey gray'
        "It's about a metre high and painted light grey. "
        
        remapIn: SubComponent 
        {
            isOpenable = true
            lockability = lockableWithKey
            isLocked = true
            bulkCapacity = 5        
        }
        
        remapOn: SubComponent { bulkCapacity = 10 }    
    ;
:::

With this definition, the short metal cabinet (which, of course, should
be defined somewhere in the maintenance room) will behave exactly as if
it was something the player can both put things on and put things in.
Note also that we need to define all its container-like properties
(isOpenable, lockability and isLocked) on the SubComponent attached to
remap in, not on the shortCabinet itself. We give the container
subComponent a bulkCapacity of only 5 since the short cabinet will
mainly be filled up with the switches we\'ve yet to define, so there
won\'t be much room for anything else. We give the other SubComponent a
bulkCapacity of 10 because there\'s a moderate amount of space to put
things on top of the cabinet.

We next need to define the pot plant and the silver key hidden beneath
it. To hide the key under the pot plant we can simply list the key in
the pot plant\'s hiddenUnder property. We\'ll also allow the player to
put the key back under the pot plant, providing the pot plant is resting
on a surface and not being carried, but we\'ll limit what can be put
under the pot plant to one small item:

::: code
    ++ potPlant: Thing 'pot plant; small; cactus'
        "It looks like a small cactus. "
        
        maxBulkHiddenUnder = 1
        hiddenUnder = [silverKey]
        canPutUnderMe = (locType == On || location.ofKind(Room))
        
        subLocation = &remapOn
        
        cannotPutUnderMsg = '{I} {can\'t} put anything under the pot plant unless
            it\'s resting on something. '
    ;

    silverKey: Key 'small silver key'
        
        bulk = 1
        actualLockList = [shortCabinet]
        plausibleLockList = [shortCabinet]
    ;
:::

There are a number of points to note here. First, observe how we define
the starting location of the pot plant. Assuming this piece of code is
placed immediately after the definition of the short cabinet, putting ++
in front of it would normally locate it directly in the shortCabinet
object, making it effectively part of the cabinet, whereas we actually
want it to start out located in shortCabinet\'s associated surface, the
object defined on [shortCabinet.remapOn]{.code}. We achieve this by
adding [subLocation = &remapOn]{.code} to the definition of the
potPlant.

Second, note that when we come to define the silverKey, we listed the
object it actually and plausibly unlocks as [shortCabinet]{.code}, not
[shortCabinet.remapIn]{.code}, as we strictly should have done, since
from the point of view of the program it\'s the object that\'s defined
on [shortCabinet.remapIn]{.code} that\'s actually lockable, not the
shortCabinet itself. It would have worked just as well if we had used
[shortCabinet.remapIn]{.code} in here, but since using shortCabinet
instead would be such an easy mistake to make, the library is smart
enough to work out what we mean and make it all work properly anyway.
Note that this only works in a case where the item to be locked and
unlocked is defined on the remapIn property of its lexicalParent, as
here.

Third, note that we define [potPlant.canPutUnderMe]{.code} as [(locType
== On \|\| location.ofKind(Room))]{.code}. This ensures that the player
character is only allowed to put something under the pot plant when
it\'s resting on a surface ([locType == On]{.code}) or notionally on the
floor of a room ([location.ofKind(Room)]{.code}.)

Fourth, note that we\'ve defined [maxBulkHiddenUnder]{.code} on the pot
plant as 1, so that only one small item can be hidden under it at time.
This allows the player character to put the silver key (or another small
object) back under the pot plant when the pot plant is resting on
something. Anything put back under the pot plant will be added to its
hiddenUnder list and moved off-stage (location = nil) to simulate the
fact that it\'s now hidden.

### Switchgear

The final thing we need in the maintenance room is the switch to turn
off the metal detector. It\'s unlikely that there\'d be just one switch
in the short metal cabinet, so we\'ll define a whole bank of switches as
a Decoration object, and the power switch for the metal detector as a
single switch (for which we can use the Switch class). We need to tell
the player that the bank of switches is inside the cabinet, so we\'ll
give it a specialDesc that causes it to be listed as part of the
cabinet\'s contents, even though it\'s fixed in place. We\'ll then make
the description of the switches Decoration object refer to the one
switch we actually need. The following code should be placed immediately
after the definition of the short cabinet and just before the definition
of the pot plant:

::: code
    ++ powerSwitch: Fixture, Switch 'big red switch{-zz}'
        "It's marked <q>Metal Detector</q> and is currently in the <<if isOn>>ON
        <<else>> OFF<<end>> position. "
        
        isOn = true
        subLocation = &remapIn
    ;

    ++ Decoration 'switches; other of[prep]; bank rows row; them'
        "There are four rows of switches in a variety of colours, but your attention
        is quickly drawn to the big red one marked <q>Metal Detector</q>. "

        notImportantMsg = 'Only the big red switch is of any interest to you; you
            don\'t want to risk drawing attention to yourself by messing with any of
            the others. '
        subLocation = &remapIn
        specialDesc = "A bank of switches is mounted at the rear of the 
            cabinet. "
    ;
:::

We define [subLocation = &remapIn]{.code} on both these objects to make
sure they actually start out inside the short cabinet\'s associated
container object, defined on its remapIn property. We make the
powerSwitch both a [Fixture]{.code} (so it can\'t be taken) and a
[Switch]{.code} (so it can be switched on and off); this gives it an
[isSwitchable]{.code} of true. The [isOn]{.code} property of a Thing
determines whether it\'s currently on or off, and we use this to
indicate the fact in the description of the powerSwitch. The
[notImportantMsg]{.code} of the Decoration object discourages the player
from trying to do anything with the other switches and directs him or
her to focus on the powerSwitch instead.

One particular point of note is the {-zz} we\'ve added at the end of the
vocab property of powerSwitch. This has the effect of defining the
plural vocab for this object as \'switchzz\' (which the player is most
unlikely to type) instead of \'switches\', which the library would
otherwise give it by default. Normally the library default would be
helpful, but here it wouldn\'t be, since we want any command directed to
\'switches\', for example EXAMINE SWITCHES to be targeted at the
Decoration object only. We certainly don\'t want X SWITCHES to describe
both the powerSwitch and the switches Decoration object, which is
precisely what would have happened if we hadn\'t found some way to
change the plural vocab of the powerSwitch.

Another minor point of note is that the specialDesc of the Decoration
object will appear *after* the listing of any miscellaneous items that
the player happens to put inside the short cabinet. The relative
position of specialDescs and miscellaneous listings is controlled by the
[specialDescBeforeContents]{.code} property. By default this is true if
the object on which it\'s defined is directly in a Room and nil
otherwise. This actually gives better results in cases where objects
with specialDescs are inside containers, since in this case the lister
responsible for listing the miscellaneous contents also produces text
like \"Opening the cabinet reveals\...\" or \"In the cabinet you
see\...\", and it reads better if such announcements come before showing
the specialDesc of any item in the container.

There\'s one final task we need to perform before we leave the
maintenance room; we need to make the powerSwitch actually control the
metal detector. We can do that first by making the [isOn]{.code}
property of the metal detector take its value from the [isOn]{.code}
property of the powerSwitch:

::: code
    + metalDetector: Passage 'metal detector; crude; frame'
        "The metal detector is little more than a crude metal frame, just large
        enough to step through, with a power cable trailing across the floor. "
        destination = concourse
        
        isOn = (powerSwitch.isOn)
        
        canTravelerPass(traveler)
        {
            return !isOn || !IDcard.isIn(traveler);
        }
        
        explainTravelBarrier(traveler)
        {
            "The metal detector buzzes furiously as you pass through it. The
            security guard beckons you back immediately, with a pointed
            tap of his holstered pistol. After a brisk search, he discovers the ID
            card and takes it off you with a disapproving shake of his head. ";
            
            IDcard.moveInto(counter);
        }
        
        travelDesc()
        {
            "You pass through the metal detector without incident. ";
            announcementObj.start();
        }
    ;
:::

If you compile and run the program at this point, you should be able to
turn off the power switch and then carry the ID card through the metal
detector without any problem.

For further details of the concepts and features introduced in this
section, refer to the [Containment](../manual/thing.htm#containment)
section of the article on Thing in the *adv3Lite Library Manual*.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Schemes and
Devices](schemes.htm){.nav} \> The Maintenance Room\
[[*Prev:* Just the Ticket](ticket.htm){.nav}     [*Next:* The Security
Area](security.htm){.nav}     ]{.navnp}
:::
