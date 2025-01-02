<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>DistanceConnector : <a
href="senseconnector.htm">SenseConnector</a>, <a
href="intangible.htm">Intangible</a><br />
</strong></td>
<td style="text-align: right;"><a href="intangible.htm">[Previous]</a>
<a href="generalintroduction.htm">[Main]</a> <a
href="occluder.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
Let's go back to the chasm we created between the narrow tunnel from the
south shore and the opposite ledge. Since the chasm is only six feet
wide, you would have thought that once you had pushed the monolith into
it to form the bridge, you'd be able to see the monolith from either
side of the chasm (as well as the chasm itself). Furthermore, with this
setup, you'd expect that if a torch/flashlight were left on one side of
the chasm you'd still have light enough to cross the chasm by. In fact,
if you try putting this to the test, the transcript you'll see is
something like this:  
  
  
\>**push monolith south**  
**Deep Chasm (standing on the monolith)  
**  
The chasm is not something you want to look down if you suffer from
vertigo; the bottom is far out of sight in the impenetrable blackness
below. It is about six feet wide, too far to jump.  
  
The monolith topples into the chasm, forming a precarious bridge of
sorts, onto which you step.  
  
\>**s**  
**Ledge of Chasm**  
  
A deep, wide chasm splits the ground immediately to the north of this
narrow ledge, while a dark tunnel runs south. Another tunnel can be seen
leading north from the far side of the chasm.  
  
\>**x monolith**  
You see no monolith here.  
  
\>**drop torch**  
Dropped.  
  
\>**n**  
**In the dark**  
  
It's pitch black.  
  
What happens, of course, is that the game treats the two sides of the
chasm and the chasm itself as three entirely separate locations; even if
in our own mind's eye they are closely related in the sense of being in
close physical proximity and visually open to one another, there's no
way the game can read our mind and know this. There is, however, a way
we can tell the game that we want locations to be connected in this way,
and that is to use a DistanceConnector. This is basically a way of
linking separate locations by sight without making them into a single
location, so that we can break up a large location such as a big hall, a
large town square, or (as in this case) a chasm and its two sides into
separate rooms while maintaining visual contact between them.  
  
To use a DistanceConnector is extremely easy. You just need the class
name followed by a list of the locations being connected. In the present
case we just need to define:  
  
DistanceConnector \[narrowTunnel, deepChasm, chasmLedge\] ;  
  
You should now be able to push the monolith into the chasm, carry on to
the other side, EXAMINE the monolith from there, drop the torch there
and walk back across the chasm still by the light of the torch.  
  
Suppose you drop a small item like the ring before crossing the chasm.
When you EXAMINE the ring from the other side, you may be told "It's too
far away to make out any detail". By default sightSize (and smellSize,
soundSize and touchSize) are all medium, which means that the object can
be sensed at a distance but not well enough to make out any detail.
Setting sightSize = small would mean that we could not even see the
object at a distance, while setting it to large means that we can not
only see it but make out the details (i.e. see the normal desc property
in response to an EXAMINE command). So if we want to see full the
description of something from a distance we need to add the following to
its definition:  
  
sightSize = large  
  
We could add this to the definition of the monolith, but we don't
actually need to do so, since it's changed into a RoomPart (specifically
a Floor) when it's pushed into the chasm, and RoomParts have sightSize
large by default.  
  
Once we can see things at a distance we may be faced with another
problem: what can be seen from a distance may not be the same as what
can be seen close-to. Thus the way we want objects to be described from
a distance may be different from their standard (close-up) description.
If we use an initSpecialDesc or specialDesc we can also define the
corresponding properties remoteInitSpecialDesc and remoteSpecialDesc to
use when the object is viewed from another location, for example:  
  
museumLeaflet : Readable 'small crumpled piece yellow leaflet/paper' 'yellow leaflet'  
   @chasmLedge  
  "It seems to be a leaflet advertising the Eerhtstad Caves Museum of  
   Curious Antiquities. "  
  readDesc = "Amongst such oddities as the Amber Amulet of Amazement, the  
    Green Gargoyle of Gloom, the Lost Crown of King Peregrine the Pipsqueak  
    and the Invisible Mantle of the Naked Emperor, your eye is caught by  
    an advertisement for the star exhibit: the Golden Banana of Discord.  
    The reverse of side of the leaflet proclaims, \<q\>Our most wanted  
    acquisition of the month is the legendary Great Purple Carbuncle of  
    King Solomon; if discovered, please bring to the curator who will  
    not only receive it with \<i\>great\</i\> gratitude but ensure that a small  
    brass plaque is inscribed to your everlasting honour!\</q\>\<.p\>"  
  initSpecialDesc = "A small yellow leaflet lies on the ground. "  
  remoteInitSpecialDesc(actor)   
  {  
    "On the \<\<actor.isIn(deepChasm) ? 'southern' : 'far'\>\>   
    ledge of the chasm lies a crumpled piece of yellow paper. ";  
  }  
;  
  
Note that remoteInitSpecialDesc takes a single parameter, actor. This
normally represents the actor from whose point of view the object is to
be described. If this affects the remote description at all, it will
normally depend on the location of the actor; thus we can use it here to
vary the description of the location of the leaflet depending on the
location of the player character when it's described (if we wanted to,
we could also vary the description of the leaflet itself, perhaps making
it slightly more detailed from the closer point of view).  
  
There's a further refinement we can make here: if you push the monolith
into the chasm, walk south to the ledge, take the leaflet and drop it,
then return to the monolith, the room description will now state:  
  
In the ledge of chasm, you see a yellow leaflet.  
  
This shows that the leaflet is still visible, but that it's in the
'ledge of chasm' room, not the current location. However, 'In the ledge
of chasm' is not the most felicitous way to describe the position of the
leaflet, so we may want to customise it. We can do this by overriding
the inRoomName(pov) method of chasmLedge (where pov has the same meaning
as before), for example:  
  
chasmLedge : DarkRoom 'Ledge of Chasm' 'the ledge of the chasm'  
  "A deep, wide chasm splits the ground immediately to the north of this  
   narrow ledge, while a dark tunnel runs south. Another tunnel can be   
   seen leading north from the far side of the chasm. "  
  north = deepChasm   
  **inRoomName(pov)   
  {   
    return 'on the ' + (pov.isIn(deepChasm) ? 'south' : 'far') + ' ledge of the chasm';   
  }**  
;  
  
