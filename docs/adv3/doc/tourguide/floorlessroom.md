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
<td style="text-align: left;"><strong>FloorlessRoom : <a
href="floorless.html">Floorless</a>, <a href="room.html">Room</a><br />
</strong></td>
<td style="text-align: right;"><a
href="shipboardroom.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="floorless.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A FloorlessRoom, as its name suggests, is a location that lacks a floor,
such as the top of a vertical shaft, or a tree. The top of a mast, which
is the sort of thing one would expect to find aboard ship, is another
good example. Apart from lacking a floor (something we'll discuss in
more detail when we come to talk about roomParts) a FloorlessRoom has
the property that something dropped there does not remain there but
drops out of sight either into oblivion, or into other specified
location (such as the bottom of the vertical shaft, tree or mast).  
  
Before we can define the top of the mast we need to define its bottom.
We'll assume the mast is located in the centre of main deck, i.e.
between portDeck and starboardDeck. It thus exists in both locations,
which makes it an ideal example of a [MultiLoc](multiloc.html):  
  
mast : MultiLoc, StairwayUp 'tall thick wooden mast' 'tall mast'  
  "The thick wooden mast towers up at least a hundred feet. "  
  locationList = \[portDeck, starboardDeck\]  
;  
  
We also make the mast a [StairwayUp](stairwayup.html), since although it
does not look much like a flight of stairs, it is something we can climb
to reach another location, and so it behaves like a StairwayUp. Note
that the MultiLoc mix-in class must be specified before the
Thing-derived class (in this case StairwayUp) in the list of
superclasses, and that its locationList property contains a list of
locations where the mast can be found.  
  
We can now define the top of the mast as our FloorlessRoom example. The
one thing we need to consider is how we want to specify its bottomRoom
property (the place where objects dropped here will end up). One would
expect something dropped from the top of the mast to fall to the deck
below, but should it land in portDeck or starboardDeck? Likewise, where
should the PC fetch up when he or she descends the mast? This is
precisely the same dilemma we had when deciding how to proceed aft from
foreDeck, so we can use precisely the same solution:  
  
topOfMast : FloorlessRoom 'Top of Mast' 'the top of the mast'  
  "From the top of the mast you can see miles out across the lake to starboard  
   and the shore over to port. The deck below looks a sickeningly long way down. "  
   down = mainDeck  
   bottomRoom = (mainDeck.destination)  
;  
  
The result of this is that something dropped from the top of the mast
has an equal chance of fetching up in portDeck or starboardDeck (in a
simpler situation we could simply have specified a single room as the
value of the bottomRoom property). In a moment or two you can test this
out by picking up the boulder on the way to the ship and dropping it
from the top of the mast. But first we have one more task to complete,
and that is to provide a mast object for the PC to climb down from at
the top of the mast. This should clearly by a
[StairwayDown](stairwaydown.html), but the problem is that its
masterObject will be the MultiLoc mast object, so it won't be able to
handle climbing down properly - indeed, unless we do something about it
we'll get a runtime error before we even try. The solution is to remap
the StairwayDown's TravelVia handling to the mainDeck connector:  
  
+ StairwayDown -\>mast 'mast' 'mast'  
  "Right now you're clinging to it for dear life. "  
  dobjFor(TravelVia) remapTo(TravelVia, mainDeck)  
;  
  
You should now be able to compile and run the game to test that
everything is working correctly. When moving about the deck you can
abbreviate the PORT, STARBOARD, FORE and AFT commands to P, SB, F and A
respectively. Just don't try going down the steps from the quarterdeck
yet.  
