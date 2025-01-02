---
layout: docs
---
<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>MultiLoc : BaseMultiLoc<br />
</strong></td>
<td style="text-align: right;"><a
href="vehiclebarrier.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="multiinstance.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A MultiLoc is an object that exists (or, at least, can exist) in several
locations at once. We have already used several MultiLocs in the course
of developing the game without much comment, examples including the mast
in the [FloorlessRoom](floorlessroom.html) example, the lake in the
[Decoration](decoration.html#lakedecoration) example, and of course the
specialized subclasses of MultiLoc, the
[DistanceConnector](distanceconnector.html) and the
[SenseConnector](senseconnector.html).  
  
Strictly speaking, a MultiLoc (as opposed to its specialized subclasses)
represents a single object that exists in several locations by virtue of
being situated on their boundary, like a statue at the centre of a
square where the square is divided into several locations. The mast we
defined earlier is a good example of that, since it's an object standing
between the port deck and the starboard deck and is thus equally in
both. Note that it remains physically the same mast whichever side of
the deck we climb it from or whatever we do to it (e.g. chop it down).  
  
A second safe use for MultiLoc is for a Distant object that looks
exactly the same from several locations, e.g. a distant mountain or the
moon.  
  
Although under some circumstances you can get away with using MultiLoc
for other purposes (as we have up to now), for a large object that spans
many locations you should normally use [MultiFaceted](multifaceted.html),
and for a [Decoration](decoration.html) or [Fixture](fixture.html) you
want cloned in many locations you should normally use
[MultiInstance](multiinstance.html). There are two main reasons for this.
The first is sensory - if a MultiLoc is visible in one location it is
visible in all. Suppose, for example, that your player character is
wandering around a forest at night, carrying a torch. If you created a
MultiLoc to represent the trees, then if the player character dropped
the torch and moved to another (dark) location, the trees would still be
visible, although for everything else it would be too dark (which is not
want you want). The second is that a MultiLoc represents something that
remains physically the same object. If you allow the player to cut a
notch in a tree and this is reflected in its description, then once one
MultiLoc tree is notched, every tree in the forest will appear
notched.  
  
Of course there *can* be cases where these situations will never arise.
In practice if you are creating a Decoration, Distant or other type of
NonPortable with which the only possible interaction is EXAMINE and
every location in which it occurs is permanently lit (or else it's an
object like the moon that provides its own illumination) then no
practical problems should arise from using a MultiLoc to represent the
object (or objects) - but you have to be very sure that these conditions
obtain and won't be changed in the course of developing the game,
otherwise you should use MultiInstance or MultiFaceted. And of course,
there are cases, such as the fountain at the centre of the square or the
mast between two halves of the deck where MultiLoc is precisely what you
do want (whatever may befall it), because it represents the same
physical object.  
  
MultiLoc is a mix-in class, and should thus always be used with (and
before) a Thing derived class, e.g. (note that this example shouldn't be
added to the game):  
  
statue : MultiLoc, Fixture 'statue' 'statue'  
  "It's a large stone statue of Jeremiah Foamwheeze. "  
  locationList = \[seSquare, swSquare, neSquare, nwSquare\]  
;  
  
Even if the square is in darkness and you leave your torch in the
southeast corner of the square, it's not unreasonable the torch would
continue to illuminate the statue as seen from the other three corners
of the square, and again, if you stick your hat on top of the statue
while standing in nwSquare there's no reason why you shouldn't be able
to retrieve it again while standing in swSquare.  
  
Note that we don't set the location property of a MultiLoc; instead we
provide a list of locations in its **locationList** property, or else
use one of the other methods to initialize its locations that are
described in connexion with [MultiInstance](multiinstance.html) below.
Again, note that locationList is used only to *initialize* the list of
locations a MultiLoc starts in at the beginning of the game. You cannot
subsequently move a MultiLoc around by directly manipulating this list
(e.g. by writing statements like locationList += forestPath; or
locationList = \[forestPath, lakeside\]; ). Instead you have to use the
methods **moveInto**, **moveIntoAdd**, and **moveOutOf.** These will be
described in more detail under MultiInstance (where the same thing
applies).  
  
