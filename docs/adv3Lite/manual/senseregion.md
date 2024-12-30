::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Optional
Modules](optional.htm){.nav} \> SenseRegion\
[[*Prev:* Scoring](score.htm){.nav}     [*Next:* Topic
Entries](topicentry.htm){.nav}     ]{.navnp}
:::

::: main
# SenseRegion

The optional SenseRegion class can be used to define regions with
sensory connections, that is regions where it is possible to see (and
possibly smell and hear) objects in one room from another. If your game
doesn\'t need to do this you can safely exclude the senseRegion.t
module. The complications in using a SenseRegion come not from setting
up the SenseRegion itself but in defining what particular objects can be
[sensed](#sensing) remotely, and if so, how they are to be
[described](#descriptions).

## The SenseRegion class

Setting up a SenseRegion is easy. You define a SenseRegion like any
other kind of Region, and then assign rooms to it by listing the
SenseRegion in their regions property, for example:

::: code
    countryside: Region
    ;

    meadowRegion: SenseRegion
    ;

    sun: MultiLoc, Distant 'sky; blue cloudless bright; sun; it'
        "The sun glares down from the cloudless blue sky above. "
        locationList = [countryside]
    ;
        
    meadow: Room 'Meadow' 'meadow'
        "<<first time>>You've no idea how you got here, nor do you recognize this
        place.<<only>> Tall grass and wild flowers grow in profusion, forming an
        even carpet that slopes down towards a riverbank to what you instinctively
        think of as the east. To the south lies a thick band of trees, a large
        wood or perhaps even a forest. To the north is another field, while a steep
        hill rises up a short way off to the west. "
        
        east = riverbank
        south = forestPath
        west = hillsideFromMeadow
        north = field
        
        regions = [countryside, meadowRegion]
    ;

    riverbank: Room 'Riverbank' 'riverbank;;bank'
        "A broad river runs lazily by just to the west. The way south is blocked by
        a thick belt of trees extending all the way down to the water's edge, but
        there's nothing to stop you carrying along the riverbank to the north, or
        wandering off west towards the meadow. "
        
        west = meadow
        north = marsh
            
        regions = [countryside, meadowRegion]                                                
    ;
:::

By default you can see, hear and smell (but not touch) objects in one
room from any other room in the SenseRegion (subject to further
limitations discussed in the section on [remote sensing](#sensing)
below). You can, however, customize this (and some other behaviour) via
the following properties on the SenseRegion:

[]{#srprops}

-   **canSeeAcross**: if this is true (the default) then it\'s possible
    to see items in one room in this SenseRegion from the other rooms in
    this SenseRegion.
-   **canHearAcross**: if this is true (the default) then it\'s possible
    to hear items in one room in this SenseRegion from the other rooms
    in this SenseRegion.
-   **canSmellAcross**: if this is true (the default) then it\'s
    possible to smell items in one room in this SenseRegion from the
    other rooms in this SenseRegion.
-   **canTalkAcross**: being able to hear from one room to another is a
    necessary but not sufficient condition of being able to conduct a
    conversation across rooms. Normally two actors need to be in the
    same room in order to be able to converse with each other, so this
    property is nil by default. If the SenseRegion represents a
    sufficiently small space, however, such as the two ends of the same
    room, then conversation between rooms can be enabled by setting this
    property to true.
-   **canThrowAcross**: if this is true (not the default), an object can
    be thrown from one room to another in the SenseRegion (i.e. an
    object thrown from one room at a target in another room will hit the
    target and land in the second room). If it is nil (the default) an
    object thrown at a target in another room will fall short and land
    in the room from which it was thrown.
-   **autoGoTo**: if this is true (by default it takes is value from
    [contSpace]{.code}, but this may be readily overridden), then an
    attempt to touch an object in a different room in this SenseRegion
    will trigger an implicit GoTo action attempting to move the actor to
    the location of the object to be touched. This is probably best only
    set to true for SenseRegions representing a small area (such as
    parts of the same room) and relatively straightforward geography;
    while the mechanism should work in most cases it is not absolutely
    guaranteed to work properly if, for example, there is also a complex
    set of nested rooms and/or containers between the actor and the
    target object. Note that travel will not be attempted if the action
    that would have triggered it (e.g. trying to take a Fixture) is
    ruled out at the verify stage. Note that the default behaviour of a
    SenseRegion is to take the value of [fastGoTo](room.htm#regionprops)
    from [autoGoTo]{.code} so that any implicit GoTo action is not
    interrupted by the need to issue [CONTINUE](pathfind.htm) commands.
-   **contSpace**: flag, do we want to treat this SenseRegion as a
    continuous space (such as a relatively small room in a house)? If
    this is true (it\'s nil by default) then moving from one room to
    another within the SenseRegion does not cause a LOOK AROUND to be
    performed (and hence a description of the new room to be displayed).
    This may be useful in situations where a SenseRegion is used to
    model a small continuous space such a room in a house divided into
    subsections which are modelled as the Rooms within the SenseRegion.

Note that it is perfectly legal for SenseRegions to overlap (the same
Room can be in two or more SenseRegions), but that SenseRegions cannot
normally be changed during the course of a game, since they are
initialized by the library at the pre-init stage. If you need a
SenseRegion that changes during the course of play, you can try using
the [DynamicRegion](../../extensions/docs/dynregion.htm) extension.

[]{#inoutprops}

The properties listed above establish the sensory connections between
rooms within SenseRegions for the duration of the game. If we want to
change these sensory connections dynamically during the course of the
game we can use the following set of methods defined on [Room]{.code}.
Note that the six methods listed below take effect only if there would
otherwise be a sensory connection between the rooms concerned thanks to
their being in a common SenseRegion that allows this type of connection
globally:

-   **canSeeInFrom(loc)**: Can we see into this room from *loc*?
-   **canSeeOutTo(loc)**: Can we see out of this room to *loc*?
-   **canHearInFrom(loc)**: Can we hear into this room from *loc* (i.e.
    can an actor in *loc* hear something in this room?
-   **canHearOutTo(loc)**: Can we hear out from this room to *loc* (i.e.
    can an actor in this room hear something in *loc*)?
-   **canSmellInFrom(loc)**: Can we smell into this room from *loc*
    (i.e. can an actor in *loc* smell something in this room?
-   **canSmellOutTo(loc)**: Can we smell out from this room to *loc*
    (i.e. can an actor in this room smell something in *loc*)?

By default all the canXXXOutTo methods simply return true, while all the
canXXXInFrom methods return the value of the corresponding canXXXOutFrom
method. There\'s little need to override any of them unless a sensory
connection can change according to some other factor, such as whether a
door or window is open or closed. If a window between two rooms blocked
sound and smell when it was closed you might define:

::: code
     hall: Room 'Hall'
       "A window looks out to the east. "
       canHearOutTo(loc) { return window.isOpen; }
       canSmellOutTo(loc) { return window.isOpen; }
       
       regions = [windowRegion]
    ;

    + window: Fixture 'window'
       "The window looks out over the lawn. "
       isOpenable = true
    ;

    lawn: Room 'Lawn'
       regions = [windowRegion]
    ;

    windowRegion: SenseRegion
    ;
     
:::

Note that while a SenseRegion\'s [familiar]{.code} property has the same
meaning as it does on an ordinary [Region](room.htm#regionprops), the
SenseRegion class overrides the familiar property to make it work better
with [pathfinding](pathfind.htm#senseregion) once any of the rooms in
the SenseRegion has been visited. Nonetheless, if a SenseRegion starts
out familiar to the Player Character in any case, its [familiar]{.code}
property can simply be overridden to [true]{.code} in the normal way.

\

## Remote [Sensing]{#sensing}

Although the global possibility of seeing, hearing and smelling across
rooms is determined by the canSeeAcross, canHearAcross and
canSmellAcross properties of the SenseRegion, the possibility of seeing,
smelling and hearing individual objects in remote locations is further
determined by their xxxSize and canXXXFrom(pov) properties.

When the senseRegion.t module is included, each Thing defines the
following additional properties:

-   **isVisibleFrom(pov)**: determines whether this object is visible
    from pov, where pov is the actor who is doing the looking. By
    default we return true if the sightSize is not small.
-   **sightSize**: can be small, medium or large. If it is small then
    the object can\'t be seen at all from a remote location. If it is
    medium then it can be see (i.e. it will be shown in room listings
    and can be referred to in commands) but attempting to examining it
    will cause a response to the effect that it\'s too far away to make
    out any detail. If it\'s large then it can be examined as normal
    (normally displaying its desc property). If the object defines a
    remoteDesc(pov) method then this will be used regardless of whether
    the object is medium or large.
-   **isAudibleFrom(pov)**: determines whether this object is audible
    from pov, where pov is the actor who is doing the listening. By
    default we return true if the soundSize is not small.
-   **soundSize**: can be small, medium or large. If it is small then
    the object can\'t be heard at all from a remote location. If it is
    large then listening to the object will evoke either its listenDesc,
    or its remoteListenDesc(pov) if the latter is defined. If it is
    medium then either its remoteListenDesc will be reported, if one is
    defined, or the object will be reported as being too far away to
    hear.
-   **isSmellableFrom(pov)**: determines whether this object is
    smellable from pov, where pov is the actor who is doing the
    smelling. By default we return true if the smellSize is not small.
-   **smellSize**: can be small, medium or large. If it is small then
    the object can\'t be smelled at all from a remote location. If it is
    large then smelling the object will evoke either its smellDesc, or
    its remoteSmellDesc(pov) if the latter is defined. If it is medium
    then either its remoteSmellDesc will be reported, if one is defined,
    or the object will be reported as being too far away to smell.
-   **isReadableFrom(pov)**: just because an object is large it doesn\'t
    necessarily mean that any writing on it is large enough to read from
    a distance. To be able to read an object remotely both this method
    and isVisibleFrom(pov) must return true.

At first sight it may appear that the medium soundSize and smellSize is
virtually redundant, since it doesn\'t achieve anything that couldn\'t
be achieved by making the size either small (to rule out sensing the
object) or large (to report its sound or smell). This is part follows
from the fact that there\'s no auditory or olfactory equivalent of
seeing something without making out any detail. It\'s hard to thing of
situations in which you can hear or smell something without being able
to say at all what kind of sound or smell it is, however faint. If you
did want to model such a situation, however, you could do so by
overriding the tooFarAwayToHearMsg and/or tooFarAwayToSmellMsg
properties on the object in question (or on the Thing class), which
would then be the message the player got in response to trying to listen
to or smell a remote object with a medium soundSize or smellSize. A
further subtle difference is that the attempt to listen to or smell a
remote object with a small soundSize or smellSize is ruled out at the
verify stage, while the too far away message for medium sizes is
produced at the action stage; the parser will therefore choose an object
with a medium size in preference to one with a small size in these
situations. Furthermore, when the remoteListenDesc() or
remoteSmellDesc() method is defined, an object with a medium soundSize
or smellSize behaves just like one with a large size in the appropriate
sense. That means that with the library default (medium) you just have
to define the remoteListenDesc() or remoteSmellDesc() to report a remote
sound or smell without having to worry about adjusting the soundSize or
smellSize.

Note that the sightSize property is quite independent of the bulk
property (unless, of course, you choose to override it to define it in
terms of bulk).

\

## Remote [Descriptions]{#descriptions}

A further complication that\'s introduced when we allow the contents of
one room to be sensed from another is how the items in the remote
location should be listed and described. At the very least, we\'ll
almost certainly want the room description listing to make it clear that
the objects in question are in a remote location, and not to hand in the
same place as the player character.

If an object has a specialDesc or initSpecialDesc, we can additionally
define the **remoteSpecialDesc(pov)** and **remoteInitSpecialDesc(pov)**
methods to show alternative specialDescs when the object is viewed
remotely from pov (the pov object normally being the actor who is doing
the viewing, typically the player character). If these methods are not
overridden the usual specialDesc and/or initSpecialDesc will be used,
but most of the time it will normally be appropriate to provide an
alternative for remote viewing, for example:

::: code
    + Fixture 'scarecrow; poor wretched straw; man sticks'
        "It's a poor wretched thing, little more than a couple of sticks stuffed
        with straw wearing a faded brown coat; a straw man if ever there was one! "
            
        
        specialDesc = "A scarecrow stands guard over the crop at the centre of the
            field, doing his best to ward off the crows. "
            
        remoteSpecialDesc(pov)
        {
            "Off in the distance a scarecrow stands lonely guard over the field. ";
        }    
    ;
:::

Where items don\'t have a specialDesc (or initSpecialDesc) they\'re
generally listed among the miscellaneous items in the room description.
The miscellaneous items in remote rooms are listed after those in the
player character\'s immediate location, usually prefaced with \'in\'
followed by the name of the room, for example, suppose we had defined:

::: code
    meadow: Room 'Meadow' 'meadow'
        "Tall grass and wild flowers grow in profusion, forming an
        even carpet that slopes down towards a riverbank to what you instinctively
        think of as the east. To the south lies a thick band of trees, a large
        wood or perhaps even a forest. To the north is another field, while a steep
        hill rises up a short way off to the west. "
        
        east = riverbank
        south = forestPath
        west = hillsideFromMeadow
        north = field
        
        regions = [countryside, meadowRegion]
    ;


    riverbank: Room 'Riverbank' 'riverbank;;bank'
        "A broad river runs lazily by just to the west. The way south is blocked by
        a thick belt of trees extending all the way down to the water's edge, but
        there's nothing to stop you carrying along the riverbank to the north, or
        wandering off west towards the meadow. "
        
        west = meadow
        north = marsh
       
        regions = [countryside, meadowRegion]                                                
    ;
:::

Now suppose we drop a couple of objects in the riverbank location and
then return to the meadow location to look around. We might see
something like:

::: cmdline
    Meadow
    Tall grass and wild flowers grow in profusion, forming an even carpet that slopes down towards a riverbank to 
    what you instinctively think of as the east. To the south lies a thick band of trees, a large wood or perhaps
    even a forest. To the north is another field, while a steep hill rises up a short way off to the west. 

    In the riverbank you see a blue ball, a red box, and a red ball.
:::

The introductory \"in the riverbank\" at least warns the player that the
objects being listed are in another location, but it\'s not very
elegant. To deal with this we\'d probably override the riverbank\'s
**inRoomName(pov)** method to display the name with which we want the
listing of miscellaneous items to be introduced when they\'re viewed
remotely by the pov object. So, for example, we might define:

::: code
    riverbank: Room 'Riverbank' 'riverbank;;bank'
        "A broad river runs lazily by just to the west. The way south is blocked by
        a thick belt of trees extending all the way down to the water's edge, but
        there's nothing to stop you carrying along the riverbank to the north, or
        wandering off west towards the meadow. "
        
        west = meadow
        north = marsh
       
        regions = [countryside, meadowRegion]         

        inRoomName(pov) { return 'down by the riverbank'; }    
    ;
:::

This would then give us:

::: cmdline
    Meadow
    Tall grass and wild flowers grow in profusion, forming an even carpet that slopes down towards a riverbank to 
    what you instinctively think of as the east. To the south lies a thick band of trees, a large wood or perhaps
    even a forest. To the north is another field, while a steep hill rises up a short way off to the west. 

    Down by the riverbank you see a blue ball, a red box, and a red ball.
:::

You can gain even more control over the way in which miscellaneous
objects are listed in a remote location by using a
[CustomRoomLister](roomdesc.htm#customroomlister). You do this by
attaching a CustomRoomLister to the remoteContentsLister property of the
room to be viewed remotely. For example we could define:

::: code
    riverbank: Room 'Riverbank' 'riverbank;;bank'
        "A broad river runs lazily by just to the west. The way south is blocked by
        a thick belt of trees extending all the way down to the water's edge, but
        there's nothing to stop you carrying along the riverbank to the north, or
        wandering off west towards the meadow. "
        
        west = meadow
        north = marsh
       
        regions = [countryside, meadowRegion]         

        remoteContentsLister = static new CustomRoomLister(nil, prefixMethod: 
            method(lst, pl, irName) 
            { "<.p>Lying close to the riverbank <<if pl>>are<<else>>is<<end>> "; })  
    ;
:::

And this would give us:

::: cmdline
    Meadow
    Tall grass and wild flowers grow in profusion, forming an even carpet that slopes down towards a riverbank to 
    what you instinctively think of as the east. To the south lies a thick band of trees, a large wood or perhaps
    even a forest. To the north is another field, while a steep hill rises up a short way off to the west. 

    Lying close to the riverbank are a blue ball, a red box, and a red ball. 
:::

Or as another variation we might define:

::: code
    riverbank: Room 'Riverbank' 'riverbank;;bank'
        "A broad river runs lazily by just to the west. The way south is blocked by
        a thick belt of trees extending all the way down to the water's edge, but
        there's nothing to stop you carrying along the riverbank to the north, or
        wandering off west towards the meadow. "
        
        west = meadow
        north = marsh
       
        regions = [countryside, meadowRegion]         

        remoteContentsLister = new CustomRoomLister('\^', suffixMethod: method(lst,
            pl, irName) { " <<if pl>>lie<<else>>lies<<end>> abandoned down by the
                riverbank. "; })
    ;
:::

And this would give us:

::: cmdline
    Meadow
    Tall grass and wild flowers grow in profusion, forming an even carpet that slopes down towards a riverbank to 
    what you instinctively think of as the east. To the south lies a thick band of trees, a large wood or perhaps
    even a forest. To the north is another field, while a steep hill rises up a short way off to the west. 

    A blue ball, a red box, and a red ball lie abandoned down by the riverbank. 
:::

This incidentally illustrates that it doesn\'t make any difference to
the output whether or not we use the *static* keyword when defining the
CustomRoomLister; doing so is arguably more efficient since it creates
the CustomRoomLister in question once and for all at the
preinitialization stage.

[]{#remoteprops}

If the red box in this example had anything in it, we might want to
customize how its contents were listed; a listing that began \"In the
red box you see\...\" wouldn\'t make it very clear that the red box was
in a remote location. For this purpose we can use the
**remoteObjInName(pov)** method; by default this just returns
[objInName]{.code} (e.g. \'in the red box\') but it can be customized as
required (e.g. to return \'in the distant red box\').

We may well wish to customize the description of an object that\'s
examined, listened to or smelled remotely. We can do this by defining
the following methods on the object in question:

-   **remoteDesc(pov)**: the description of the object when examined
    remotely by the pov object (normally the player character)
-   **remoteListenDesc(pov)**: the description of the object when
    listened to remotely by the pov object (normally the player
    character)
-   **remoteSmellDesc(pov)**: the description of the object when smelled
    remotely by the pov object (normally the player character)

Note that these properties only take effect if the corresponding
isVisibleFrom(pov), isAudibleFrom(pov) and/or isSmellableFrom(pov)
methods return true, which by default is the case when the sightSize,
soundSize and/or smellSize isn\'t small.

So, for example, we might define:

::: code
    + crows: Decoration 'crows; nasty big black; birds; them'
        "Nasty big black things. You never did like them, even since one scared you
        as a child. "
        
        sightSize = large
        soundSize = large
        
        listenDesc = "The horrid crows are making the most ugly, raucous cawing
            sound. "
        
        remoteListenDesc(pov)
        {
            "You hear the raucous sound of crows cawing up in the field. ";
        }
        
        remoteDesc(pov)
        {
            "The ones you can see are mostly flying around low over the field, as if
            intent on annoying the unfortunate scarecrow. ";
        }
        
        decorationActions = [Examine, ListenTo]
        
        notImportantMsg = 'You make it a point of principle to ignore all crows;
            only that way can you show the full extent of your contempt for the
            horrid things. '
    ;
:::

\
[]{#listorder}

Finally, if you have more than two rooms in a SenseRegion, you may want
to control the order in which each remote room is treated in response to
a LOOK, LISTEN, or SMELL command. For example, if in addition to the
meadow and and riverBank there\'s also a ploughedField room in the
SenseRegion, you may want to control whether the riverBank\'s contents
are listed before or after those of the ploughedField when the player
character is in the meadow. You can do this by using the room\'s
**remoteRoomListOrder(pov)** method, where pov is the room from which
the remote sensing (looking, listing, or smelling) is taken place. By
default this just returns the value of the room\'s **isListed**
property, which in turn defaults to 100. The higher the value returned
by [removeRoomListOrder(pov)]{.code2} on any room, the later that
room\'s contents will be listed/described in response to a LOOK, LISTEN
or SMELL command issued from *pov*.

For example, if we want the ploughed field\'s contents to be listed
after those of the meadow when viewed from the riverBank, we could
define the following on the ploughedField Room:

::: code
        remoteRoomListOrder(pov)
        {
            return pov == riverBank ? 200 : inherited(pov);
        }
:::

\

Alternatively, if we always wanted the contents of the ploughed field to
be listed last, whichever room we\'re looking from, we could simply
define [listOrder = 200]{.code} on the ploughedField.

[]{#specialscope}

## Special Remote Scope Considerations

Suppose that we have two adjacent rooms, a bedroom and a study say,
belonging to the same SenseRegion but with [canSeeAcross = nil]{.code}
(because while you can hear what\'s going on in one location from the
other, you can\'t see from one to the other). Suppose then that the
player character is in the bedroom when the player types the command
EXAMINE DRAWERS (intending to refer to the three drawers in a chest of
drawers); what should happen to the drawer belonging to the desk in the
study?

In this kind of situation the following rules apply:

1.  Items in a remote location that the player character does not know
    about are not put into scope (so if the player character hasn\'t
    visited the study yet, the desk drawer won\'t be added to scope if
    it\'s not visible from the bedroom).
2.  Items in a remote location that announce themselves in response to
    an intransitive SMELL or LISTEN command are marked as known to the
    player character, so the player can then refer to them even if the
    player character has yet to see them. The same applies to objects
    that announce themselves via
    [SensoryEvents](../../extensions/docs/sensory.htm#events).
3.  If the player command includes a vague plural (like \'DRAWERS\' in
    the above example), then if the action requires the
    [objVisible]{.code} PreCondition, objects the player cannot see in
    remote locations will be removed from the list of matches if there
    any matching objects the player can see. Likewise, if the action
    requires the [touchObj]{.code} PreCondition then any objects in
    remote locations will be removed from the list of matches if there
    any matching objects in the player\'s location. This should prevent
    vague plurals like DRAWERS from matching objects the player probably
    didn\'t intend.

\
[]{#remotecomm}

## Remote Communications

One last point to consider is the interaction between the SenseRegion
class and any remote communications set up via the
[commLink](query.htm#commlink) object. You can set up a commLink
independently of any SenseRegion, and without the SenseRegion module
being present, but if it is present it will have some effects on the way
the commLink works. In particular, since the commLink allows
conversation with, hearing and possibly seeing someone in a remote
location, everything said above about [Remote
Descriptions](#descriptions) will apply to the sensory connection via
the commLink. This may mean that when the player character tries to
examine someone on a videophone that are told that \"X is too far away
to make out any detail\", which probably isn\'t what is required.

One solution may be to set [sightSize = large]{.code} on the remote
actor, but this may not be the best solution if under other
circumstances the same actor may be reviewed remotely at the far side of
a big field, say. A more general solution would be to make use of the
[remoteDesc(pov)]{.code} method, which can be used to provide a
customized response, or else to make sightSize a method that returns
medium or large depending on the viewing conditions, e.g.:

::: code
    modify Actor
       sightSize()
       {
           if(commLink.connectionList.indexOf([self, true]))
              return large;
              
          return medium;
       }
    ;
:::

Similar considerations may apply to listening to a remote actor via a
commLink.

In each case, do bear in mind that the mechanism by which the player
character can see or hear a remote actor via a commLink is quite
distinct from that by which something can be seen or heard in a remote
location thanks to sensory connections across a SenseRegion (even though
they may appear to interact in relation to sightSize and remoteDesc). A
commLink represents an electonic communications link between persons not
physically present to each other, while a SenseRegion models physical
presence at a distance.

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Optional
Modules](optional.htm){.nav} \> SenseRegion\
[[*Prev:* Scoring](score.htm){.nav}     [*Next:* Topic
Entries](topicentry.htm){.nav}     ]{.navnp}
:::
:::
