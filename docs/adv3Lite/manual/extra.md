::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Optional
Modules](optional.htm){.nav} \> Extras\
[[*Prev:* Exits](eventlist.htm){.nav}     [*Next:*
Gadgets](gadget.htm){.nav}     ]{.navnp}
:::

::: main
# Extras

The adv3Lite library has been devised to minimize the number of classes
a game author has to remember, so that a huge number of game objects can
simply be defined as belonging to the Thing class. That may suit some
game authors but not all. Authors used to the adv3 library may prefer to
use the classes they are familiar with from there. Also, while using a
greater number of classes means you have to remember more initially, it
may make your code more readable in the long term, since assigning an
object to an appropriate class may make it more immediately obvious what
its function is.

To give game authors the choice of using a larger array of classes if
they so wish, the extras.t module defines a number of classes that work
more or less the same as the similarly named classes in adv3. Note that
the \'shallow\' classes add little or no real functionality to the
adv3Lite library, however, since in most cases they simply define one or
two properties that game authors could equally well define for
themselves on Thing. There are, however, one or two classes in the
extras.t module that do a little more than that (particularly the
TravelConnector-derived classes), and it will usually prove better to
make use of these \'deeper\' classes than attempting to roll your own on
Thing if you want their full functionality.

[]{#shallow}

## Shallow Equivalents to adv3 Classes

We start with the \'shallow\' classes that simply define one or two
properties on Thing (well, actually one or two of them do a bit more
than that, but this will do as a first approximation):

-   **Container**: Subclass of Thing with contType = In and isOpen =
    true.
-   **OpenableContainer**: Subclass of Container with isOpen = nil and
    isOpenable = true.
-   **LockableContainer**: Subclass of OpenableContainer with
    lockability = lockableWithoutKey.
-   **KeyedContainer**: Subclass of OpenableContainer with lockability =
    lockableWithKey.
-   **Surface**: Subclass of Thing with contType = On. Surface also
    defines specialized handling for the Search action, which reports
    what\'s ON a Surface (as well as anything in its hiddenIn list),
    whereas on the Thing class SEARCH simply redirects to LOOK IN.
-   **Platform**: Subclass of Surface with isBoardable = true.
-   **Booth**: Subclass of Container with isEnterable = true.
-   **Underside**: Subclass of Thing with contType = Under.
-   **RearContainer**: Subclass of Thing with contType = Behind.
-   **Wearable**: Subclass of Thing with isWearable = true.
-   **Food**: Subclass of Thing with isEdible = true.
-   **Fixture**: Subclass of Thing with isFixed = true.
-   **Decoration** Subclass of Thing with isDecoration = true. See note
    below on hideFromAll(action)
-   **Distant**: Subclass of Decoration with a notImportantMsg that says
    the object is too far away. The Distant class also has a destination
    property for use with [pathfinding](pathfind.htm#distant).
-   **Component**: Subclass of Fixture with a cannotTakeMsg that says
    the object can\'t be taken as it\'s part of its location.
-   **Heavy**: Subclass of Fixture with a cannotTakeMsg that says the
    object is too heavy.
-   **Switch**: Subclass of Thing with isSwitchable = true.
-   **Enterable**: Subclass of Fixture that can be used to represent the
    outside of a building or the like. The connector property can be
    used to define the connector (typically a Door) that the player
    character should travel through when the Enterable is entered, or
    the destination property can be used to define the room the player
    character is taken to on entering the Enterable.To avoid certain
    problems with the GO TO pathfinding command, Enterable also descends
    from the [ProxyDest](pathfind.htm#proxy) class.

Remember, you can use as many or as few of these classes as you wish. In
practice, using these clases probably makes game code more readable, as
well as providing the ability to write code that iteratees over objects
of a given class or modifies one of these classes to customize it to the
requirements of a particular game.For example, some game authors may
wish to exclude all Decorations from any command applied to ALL (such as
X ALL or FEEL ALL), since in a location with several decorations.
players may find it needlessly distracting, or at least cluttered, to
read several messages along the lines of \'X is not important\' in
response to such commands. So a commonly useful modification to the
Decoration class might be:

::: code
    modify Decoration
        hideFromAll(action) { return true; }
    ;
:::

This particular modification may be less useful in games that in any
case define [gameMain.allVerbsAllowAll = nil]{.code}, but it illustrates
the principle. It might nevertheless have been a good default to define
in the library, but changing it in the library now would compromise
backward compatibility.

[]{#travelconn}

## TravelConnector Classes

The following classes implement one or two TravelConnector objects that
are also present as physical objects in the game world:

-   **StairwayUp**: Can be used for anything the player character might
    climb or climb up, typically a flight of stairs leading up, but
    could be used for a tree, mast, ladder or hillside.
-   **StairwayDown** Can be used for anything the player character might
    climb down.
-   **Passage**: Can be used for anything the player character might
    enter or go through to reach another destination.
-   **PathPassage**: Like a Passage, except that following it also
    traverses it.

These classes work just a little differently from their adv3
equivalents, in that you don\'t have to use them in pairs. To use one of
the above classes, put an instance in the appropriate room, set its
destination property to the room you want it to lead to, and set the
appropriate direction property of the room to point to it. For example,
to implement a flight of stairs leading up from the hall to the landing
you might write:

::: code
    hall: Room 'Hall'
        "A broad flight of stairs leads up to the landing above. "
        up = hallStairs
    ;

    + hallStairs 'flight[n] of stairs; broad; steps staircase'
         destination = landing
    ;
:::

## [Sensory Emanation Classes]{#emanation}

The adv3Lite library defines the classes **Noise** and **Odor** to
represent a sound and a smell respectively. Users familiar with adv3
should note that these classes are much simpler than the adv3 classes
with the same name (and are more like the adv3 SimpleNoise and
SimpleOdor classes). They are simply Decoration objects that can be
either listened to (for a Noise) or smelled (for an Odor), either of
which is treated as the same as examining them. For anything else they
respond with \'You can\'t do that to a noise\|smell. \' Since they
don\'t by default define smellDesc or listenDesc they won\'t normally
respond to an intransitive SMELL or LISTEN command. They can, however,
be used to provide simple implementations of any smells or sounds whose
existence is suggested by smelling or listening to other objects, or by
issuing an intransitive SMELL or LISTEN command. For example:

::: code
    + cooker: Thing 'cooker;blackened;oven stove top'
        "Normally, you keep it in pretty good shape (or your cleaner does) but right
        now it's looking suspiciously blackened, especially round the top. "    
        
        isFixed = true
        isSwitchable = true
        isOn = true
        
        smellDesc = "There's a distinct smell of burning from the cooker. "
    ;


    + Odor 'smell of burning; acrid distinct'
        "It smells quite acrid. "   
    ;
:::

As of Version 1.61, SensoryEmanations are hidden from any actions
applied to ALL that are not relevant to the SensoryEmanation in questio
(i.e. EXAMINE and either SMELL or LISTEN TO).

If your game needs a more sophisticated handling of sounds and smells
than these rather simple classes offer, you may want to consider
including the [Sensory](../../extensions/docs/sensory.htm) extension.

\
[]{#misc}

## Other Miscellaneous Classes

The **Flashlight** is a subclass of Switch that lights up when its
switched on, and goes out when its switched off. It can also be switched
on and off with LIGHT and EXTINGUISH.

An **Immovable** is like a Fixture, except that taking it is blocked in
check() rather than verify(). What this is means is that although it
can\'t be taken, this doesn\'t affect the parser\'s choice of it as the
target of a TAKE command. This could be used for anything that looks
like it might be possible to take, but turns out not to be takeable
(perhaps because it\'s heavier than it looks, or it\'s fastened in place
but not obviously so). []{#unthing}

An **Unthing** is an object that used to represent the *absence* of
something that a player might assume to be present. The purpose of an
Unthing is simply to provide a message explaining why the thing in
question isn\'t there. For example, if the player drops a key down a
drain, you could then add an Unthing to the location to remind the
player why the key is no longer available:

::: code
    unKey: Unthing 'small silver key'
       'Unfortunately, you dropped the silver key down the drain. '
    ;   
:::

Note that the second property we\'re defining with the template here is
not the description but the **notHereMsg**, and that this must be a
single-quoted string. Any attempt to perform any action with an Unthing
will result in the display of its notHereMsg.

When choosing objects the parser will always prefer any other object to
an Unthing. So, in the previous example, if the unKey was in scope at
the same time as a large brass key, say, the parser will always choose
the large brass key in respond to commands that just refer to a \'key\',
e.g. X KEY, TAKE KEY or UNLOCK DOOR WITH KEY.

The Unthing class inherits from Decoration. You can make selected
actions work with an Unthing by overriding is decorationActions
property. E.g. if you\'d defined a RETRIEVE command which you wanted to
work on the UnKey (to make the player character try to fish the real
silver key out of the drain, maybe), you could define your unKey thus:

::: code
    unKey: Unthing 'small silver key'
       'Unfortunately, you dropped the silver key down the drain. '
       
       decorationActions = [Retrieve]
    ;   
:::

A []{#minoritem}**MinorItem** is an unobtrusive and possibly unimportant
portable object that\'s worth implementing in the game but sufficiently
minor as to be not worth mentioning in response to X or FOO ALL unless
it\'s either directly held by the player character or directly in the
enclosing room or directly in the actor\'s location. Its
**includeTakeFromPutAll** (which is true by default) determines whether
it will be included in TAKE ALL FROM X or PUT ALL IN/ON/UNDER/BEHIND X
when it\'s not directly held or directly in the enclosing room or
actor\'s location.

A []{#collective}**CollectiveGroup** can be used to represent a
collection of objects for certain actions. It\'s normally best used as a
Fixture representing other Fixtures (see [below](#mobile) if you need it
to work with mobile objects). To use a CollectiveGroup define an object
of the CollectiveGroup class in a particular location, and then the
objects the CollectiveGroup represents in the same location, defining
the **collectiveGroups** property of each of those other objects to
point to the CollectiveGroup. For example, suppose we have a bank of
switches comprising a red switch, a blue switch and a green switch; in
outline we might do something like this:

::: code
    + switchBank: CollectiveGroup 'switches; of[prep]; row bank; them'
       "The bank comprises a row of three switches: one red, one blue, one green. "
       collectiveActions = [Examine, Take]
    ;

    + redSwitch: Switch 'red switch'
        isFixed = true
        collectiveGroups = [switchBank]
    ;

    + blueSwitch: Switch 'blue switch'
        isFixed = true
        collectiveGroups = [switchBank]
    ;

    + greenSwitch: Switch 'green switch'
        isFixed = true
        collectiveGroups = [switchBank]
    ;
:::

With this in place the command X SWITCHES will give the description of
the bank of switches, rather than of each individual switch, and TAKE
SWITCHES will yield the message \"The switches are fixed in place\"
rather than three messages to that effect, one for each switch. On the
other hand the command FLIP SWITCHES will act on each of the individual
switches in turn, since it\'s not one of the **collectiveActions**
defined for the [switchBank]{.code} [CollectiveGroup]{.code}.

Note the use of the [collectiveActions]{.code} property to define which
actions will be handled by the CollectiveGroup rather than by each of
its members. By default, [collectiveActions]{.code} is simply
[\[Examine\]]{.code}, but, as here, we can override it to contain other
actions instead or as well.

For this to work properly, the name section of the CollectiveGroup
object should simply be the plural of the name common to each of its
members (here \'switches\' corresponding to \'switch\').

If the [desc]{.code} property of a CollectiveGroup is not explicitly
defined, it defaults to a list of those of its members that are in
scope.

For some situations the [Collective]{.code} class (or its
[DispensingCollective]{.code} subclass) defined in the
[Collective](../../extensions/docs/collective.htm) extension, may be a
better bet than CollectiveGroup. The kind of situation where you\'d want
to use a Collective of DispensingCollective is where you have a group
item (e.g. a bunch of grapes or stack of cans) from which you want to
draw one or more individual items (e.g. grapes or cans).

[]{#mobile}

If you need a CollectiveGroup to represent items that are not fixed in
place, but might be moved around (a collection of short portable cables,
for example), you can instead use the [MobileCollectiveGroup]{.code}
class defined in the
[MobileCollectiveGroup](../../extensions/docs/mobilecollectivegroup.htm)
extension.

\

A **[SecretDoor]{#secretdoor}** is a Door that only acts like a Door
when it\'s open. When it\'s closed it\'s either totally invisible, or it
appears to be something else, such as a bookcase or a panel.

To use a SecretDoor, define it just like a [Door](door.htm), but
(assuming it starts out closed) define its [vocab]{.code} property to be
whatever\'s suitable for its closed state, and a separate
**vocabWhenOpen** property to define the name and other vocab to use
when it\'s open. For example:

::: code
    cellar: Room 'Cellar' 'cellar'
        "It's not a pleasant place at the best of times, dark, dank and smelly, with
        piles of old junk strewn all over the place waiting for you to find time to
        sort them out (which you probably never will). A wine rack stands <<unless
          wineRack.isOpen>> empty against the east wall<<else>>open to the east,
        revealing a passage beyond<<end>>. "
        
        isLit = nil
        darkName = 'Cellar (in the dark)'
        darkDesc = "It's too dark to see anything down here, but you could just
            about find your way back up to the kitchen. "
        up = kitchen
        west = wineRack
        
        regions = downstairs
    ;

    + wineRack: SecretDoor 'wine rack; empty'
        "It's empty; you never got round to restocking it. <<if isOpen>>It's also
        open, revealing a dark passage behind.<<end>> "
        
        afterAction()
        {
           if(gActionIs(Jump) && !isOpen)
            {
                "The vibration causes the wine rack to swing open, revealing a dark
                passage beyond. ";
                makeOpen(true);
            }
        
        }
        otherSide = dpDoor
        
        vocabWhenOpen = 'dark passage; empty wine; rack'
    ;
:::

Note that the OPEN command won\'t work on a [SecretDoor]{.code} when
it\'s closed, but the CLOSE command will work on a [SecretDoor]{.code}
when it\'s open (unless you override the isOpenable property to make it
do otherwise). The default assumption is that a [SecretDoor]{.code} has
to be opened by some non-standard and probably non-obvious means.

If (exceptionally) a SecretDoor starts out open you can define its
**vocabWhenClosed** property to specify the name and vocab to use for it
when it\'s closed.

If you want a SecretDoor to be effectively invisible when it\'s closed,
you could give it a vocab property comprising an empty string and make
sure nothing else mentions it when it\'s closed, but it\'s probably
easier just to make it a Door and define [isHidden = !isOpen]{.code},
for example:

::: code
    loft: Room 'Hay Loft' 'hay loft'
        "There's not much up here, apart from a few stray strands of straw
        scattered across the bare boards. A ladder leads back down to the
        main part of the barn below. "
        down = ladderDown
        west = loftDoor
        
    ;

    + Decoration 'straw; stray of; strands'
    ;
        
    + Decoration 'bare boards;;them'
    ;

    + ladderDown: StairwayDown 'ladder'
        destination = barn
        
        dobjFor(Pull)
        {
            action()
            {
                if(loftDoor.isOpen)
                {
                    "Pulling the ladder causes the secret door to close again. ";
                    loftDoor.makeOpen(nil);
                }
                else
                {
                    "Pulling the ladder causes a secret door to open to the west,
                    revealing a small compartment beyond. ";
                    loftDoor.makeOpen(true);                
                }
            }
        }
    ;

    + loftDoor: Door 'small compartment;secret;door''
        "It looks only just big enough to enter. "
        otherSide = compartmentDoor   
        
        specialDesc = "A small compartment has opened up to the west. "
        useSpecialDesc = isOpen
        isHidden = !isOpen
    ;


    smallCompartment: Room 'Small Compartment' 'small compartment'
       "There's only just enough room to stand in here. "
        otherSide = loftDoor
        
        east = compartmentDoor
        out asExit(east)
    ;

    + compartmentDoor: Door 'small door'
        otherSide = loftDoor
    ;
:::

Note that in both these example, the [west]{.code} exit will only be
displayed in the exit lister when the corresponding SecretDoor is open.
When a SecretDoor is closed then, for travel purposes, it behaves as if
there\'s no exit through it, even though it\'s attached to an exit
property like a standard Door.

A []{#containerdoor}**ContainerDoor**, on the other hand, isn\'t really
a door at all, but it can be used to represent the door of an openable
container, such that opening, closing, locking and unlocking the
ContainerDoor has the same effect as opening, closing, locking and
unlocking the container. To use a ContainerDoor we must locate it in
multipy-containing Thing that has an OpenableContainer defined on its
[remapIn]{.code} property; we can\'t define a ContainerDoor directly as
part of an openable container since the door would then be hidden inside
the container when it was closed.

So, for example, to define a cooker/oven we can put things in or on and
which has a door we should do this:

::: code
    cooker: Fixture 'cooker;; oven stove'
       remapIn: SubComponent { isOpenable = true }
       remapOn: SubComponent { }
    ;

    + cookerDoor: ContainerDoor 'cooker door; oven stove'
    ;
:::
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Optional
Modules](optional.htm){.nav} \> Extras\
[[*Prev:* Exits](exit.htm){.nav}     [*Next:*Gadgets](gadget.htm){.nav}
    ]{.navnp}
:::
