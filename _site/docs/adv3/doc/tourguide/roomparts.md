<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>roomParts<br />
</strong></td>
<td style="text-align: right;"><a
href="roomxxxxaction.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="cannotgothatway.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
For a normal Room the library supplies a defaultFloor, defaultCeiling
and four defaultWalls which provide a default "You see nothing special
about the floor/ceiling/wall" message if examined. An OutdoorRoom simply
has a defaultGround and defaultSky which perform the same function.
These objects are listed in the roomParts property of the respective
classes, so that they are always available to be examined in any Room or
OutdoorRoom. This property can always be overridden, however, if you
want more specific or appropriate roomParts for individual Rooms or
classes of Room. For example, we may define some roomParts more
appropriate to the Deck of our ship on its subterranean lake:  
  
defaultDeck : Floor 'deck/ground/floor' 'deck'  
  "The deck is made of close-fitting wooden planks. "  
   putDestMessage = &putDestFloor  
;  
  
caveSky : RoomPart 'roof/ceiling' 'ceiling'  
  "The dark roof of the cave, a long way up, dimly reflects the   
    rippling green light from the lake. "  
;  
  
class Deck : ShipboardRoom, OutdoorRoom  
 ** roomParts = \[defaultDeck, caveSky\]  
**;  
  
Note that rooms should generally have one and only one roomPart that
represents the floor of the room, which must be of class Floor; the main
exception here is any room that is *meant* to be floorless, such as a
FloorlessRoom or a room defined with the Floorless mix-in class. Since
we have made the top of the mast a Floorless, Deck, changing the room
parts of [Deck](floorlessroom.htm) leaves the top of the mast with
caveSky as its only roomPart, which is, in fact, just what we want. We
could have achieved precisely the same result by defining:  
  
topOfMast : FloorlessRoom 'Top of Mast' 'the top of the mast'  
  "From the top of the mast you can see miles out across the lake to starboard  
   and the shore over to port. The deck below looks a sickeningly long way down. "  
   down = mainDeck  
   bottomRoom = (mainDeck.destination)  
   **roomParts = \[caveSky\]**  
;  
  
The defaultDeck and defaultCeiling will serve well enough for a Cabin,
but it is hardly appropriate for a Cabin to have the north, south, east
and west walls found by default in a Room, so we need to provide a new
set of roomParts:  
  
defaultForeBulkhead : RoomPart 'f fore foreward bulkhead/wall\*walls' 'foreward bulkhead';  
    
defaultAftBulkhead : RoomPart 'a aft bulkhead/wall\*walls' 'aft bulkhead';  
    
defaultPortWall : RoomPart 'p port wall\*walls' 'port wall';  
  
defaultStarboardWall : RoomPart 'sb starboard wall\*walls' 'starboard wall';  
  
  
class Cabin : ShipboardRoom, Room  
  roomBeforeAction()  
  {  
    if(gActionIs(Jump))  
    {  
      "{You/he} had better not try jumping here, {you/he} might hit  
       {your} head on the deck beams. ";  
       exit;  
    }      
  }  
  roomAfterAction  
  {  
    **if(gActionIs(Look))**  
    {  
      "\nThe ship creaks ominously.\n";  
    }  
  }  
  **roomParts = \[defaultDeck, defaultCeiling, defaultForeBulkhead, defaultAftBulkhead,  
     defaultPortWall, defaultStarboardWall\]  
**;  
  
The other change made here is to remove the gActionIs(Examine) from the
roomAfterAction, since otherwise the creaking message will mask the
default "You see nothing special about it" response to an attempt to
examine these default cabin parts.  
  
In the greatCabin, however, even some of these specialised roomParts may
not be entirely appropriate, since the aft bulkhead is taken up with a
window and the foreward one may have a special opening revealed by the
press of a button. We can thus further customise the roomParts for this
particular room:  
  
greatCabinForeBulkhead : defaultForeBulkhead  
  desc = "The foreward bulkhead is made of polished oak planks.  
    \<\<bulkheadDoor.isOpen ? bulkheadDoor.desc : nil\>\> "    
;  
  
greatCabinAftBulkhead : defaultAftBulkhead  
  desc = "The aft wall of the cabin is pierced by a series of windows across  
   most of its width. "  
;  
  
greatCabin : Cabin 'Great Cabin' 'the great cabin'  
  "The great cabin occupies the entire width of the ship at the stern. The stern  
   windows aft look out over the water, while there is a solid wooden bulkhead  
   foreward. The main piece of furniture is a sturdy wooden desk, while a flight of  
   steps leads up to the deck above. "  
   up = cabinSteps  
   fore = bulkheadDoor  
   **roomParts = static inherited - defaultAftBulkhead - defaultForeBulkhead  
      + greatCabinAftBulkhead + greatCabinForeBulkhead  
**;  
  
There's a couple of points to note here: the first is that we can make
our specialised room parts inherit from their corresponding default
*objects*; this avoids the need to specify the vocabulary and name
properties all over again. The second is the use of the static and
inherited keywords to adjust the list of roomParts from that specified
in the Cabin class (rather than having to list the whole lot again). We
use static since the list of roomParts will never be changed during the
game, so the expression that follows the static keyword can be resolved
at compile time rather than being evaluated when the game is run.  
  
There's also a couple of points to note about roomParts in general. The
main one is that the library apparently expects them to remain fixed
throughout the duration of the game, which will normally be the case
(most rooms with four walls, a floor and a ceiling tend to keep them).
There may, however, be odd occasions when you want to change the list of
room parts in a particular location during the course of a game: perhaps
you blow a hole in one of the walls, or the ceiling collapses, or the
floor gives way. The thing to note there is that if you want to remove a
room part from a room during the course of the game you need to remove
it *both* from the locations roomParts list *and* its contents list. For
example, if the main bathroom's ceiling is blown away in a hurricane,
you'd need to write something like:  
  
   mainBathroom.roomParts -= defaultCeiling;  
   mainBathroom.contents -= defaultCeiling;  
  
Similarly, if you want to *add* a room part to a location dynamically
during the course of a game you'll need to add it both to the location's
roomParts list and to its contents list. The reason for this that Room's
initializeThing method appends the location's roomParts list to its
contents list, but the library provides no automatic means of
maintaining this link thereafter.  
  
Where a room has custom room part that you want to add or remove
dynamically, prior to TADS 3.0.9 it might be simpler not to include it
in the roomParts list at all. The alternative would be simply to place
it in its room using the location property in the normal way, for
example:  
  
   bathroomCeiling: RoomPart 'ceiling' 'ceiling' @mainBathroom  
      "It's full of cracks and looks like it wouldn't take much to make it collapse altogether. "  
   ;  
  
Then, when the bathroom ceiling finally does collapse, all you need to
write is:  
  
    bathroomCeiling.moveInto(nil);  
  
Of course, if you do this, you need to remember to exclude
defaultCeiling from the list of roomParts when you define mainBathroom.
A further consideration is that although it's reasonably easy to cope
with custom walls and ceilings this way, custom floors are a different
matter: the library expects the floor (or ground) of a room to be among
its roomParts, and although this behaviour can be overridden on a given
room (e.g. by overriding its roomFloor property), it's probably simplest
to stick to this rule.  
  
The methods moveIntoAdd(room) and moveOutOf(room) provide a possibly
neater alternative. With these methods you can include bathroomCeiling
in the bathroom's roomParts property in the normal way, and when the
ceiling collapses simply call:  
  
      bathroomCeiling.moveOutOf(bathroom);  
  
If the ceiling were subsequently repaired you could reverse this by
calling:  
  
      bathroomCeiling.moveIntoAdd(bathroom);  
  
This leads on to a more general point: where you want to use customised
walls and ceilings (and possibly even floors) in a given location, it's
always possible to by-pass the roomParts mechanism altogether and simply
make your customised room parts ordinary Fixtures located in the room.
If you do this, it's probably better to use the RoomPart class for them
than the Fixture class (since the RoomPart class contains some
specializations that make better sense for things like walls and
ceilings), and you still have to remember to remove the default room
part equivalents from the location's roomParts list when you define the
room, or you could end up with, say, two west walls, the default one and
your custom one.  
  
For this reason, it's probably easier to get into the habit of always
putting room parts - even custom ones - into their location's roomParts
list. This way you're much more likely to remember to remove the
corresponding default room part, and you also make sure you take
advantage of the library's specialized handling of room parts. For
example, if you define a custom ceiling for one location, and then find
it would suit another just as well, it's probably easier to add it to
the roomParts list of both locations than to make into a
[MultiInstance](multiinstance.htm) object.  
  
  
  
  
  
  
  
