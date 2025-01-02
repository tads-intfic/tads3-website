---
---
<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>Decoration : <a
href="fixture.html">Fixture</a><br />
</strong></td>
<td style="text-align: right;"><a
href="customfixture.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="distant.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
The normal purpose of a Decoration object is to provide a description of
an object mentioned in a room description or other object description,
when the object is of no real importance to the game but ought to be
implemented for the sake of completeness. For example, consider the
following transcript:  
  
\> LOOK  
**Entrance Cave**  
This large cave forms the main entrance to the whole underground
complex.  
A red sign on one wall points to the north; next to it is a blue sign.  
A sturdy steel ladder leads down through a large round hole in the
floor,  
and a narrow ledge is carved into one wall.  
  
\>X RED SIGN  
You see no red sign here.  
  
Even if the red sign is of no importance to the game, this is
frustrating to the player. A Decoration object gets round this by
providing something that produces a description in response to an
EXAMINE command and a message like 'The red sign is not important.' in
response to any other action attempted upon it. We could thus implement
the two signs mentioned in the entranceCave as follows:  
  
Decoration 'red sign\*signs' 'red sign' @entranceCave  
 "\n\<FONT COLOR=WHITE BGCOLOR=RED FACE='Tads-Typewriter'\>WAY OUT -\>\</FONT\>\n"  
  dobjFor(Read) asDobjFor(Examine)  
;  
  
Decoration 'blue sign\*signs' 'blue sign' @entranceCave  
  "\n\<FONT BGCOLOR=BLUE COLOR=WHITE FACE='TADS-Typewriter'\>  
   WELCOME TO&ensp;THE\nEERHTSDAT CAVES\</FONT\>\n"  
   dobjFor(Read) asDobjFor(Examine)  
;  
  
Note that we have remapped READ to EXAMINE for these signs since a
player might quite reasonably expect to be able to read a sign as well
as examine it. Note also the \*signs syntax in the vocabulary of these
objects. Any word after an asterisk (\*) in an object's vocabulary is
considered a plural (or other collective noun) for that object. In this
instance this allows a player type X SIGNS or READ SIGNS and have both
signs described by the same command.  
  
According to the room description of mainCave, the torch is simply fixed
to the wall. If the player examines the torch however, he or she is told
that the torch is fixed to the wall by means of a steel bracket. Players
are not meant to interact with the bracket in any other way, but since
they may try to, it is a good candidate for a Decoration object.  
  
Decoration 'steel bracket' 'steel bracket' @mainCave  
  "The steel bracket is fixed securely to the wall; there doesn't appear to be  
   any way it could be detached. "  
;  
  
Included in the description of longCave is the notice that "Some words
have been crudely scratched on the south wall." A Decoration object may
well be just the thing to represent these words, but this requires a
little more thought. By default if we try to do anything to these words
but EXAMINE them, the game will report "The words aren't important."
This may not be the message we want to convey here, since what the
writing on the wall says may actually have some significance. To deal
with this need we need to override the Decoration's **notImportantMsg**
property with something more appropriate. Moreover, it would be
reasonable for the player to attempt to READ the words as well as
EXAMINE them; as in the case of the two signs in the Entrance Cave, we
want READ to be treated like EXAMINE rather than displaying whatever we
put into notImportantMsg, so once again we need dobjFor(Read)
asDobjFor(Examine). There is one further complication: the writing is
described as being scratched on the south wall, so it ought to be
described if the player examines the south wall; to achieve this we need
to associate the words with the south wall of the cave:  
  
longCaveWords : Decoration 'words/writing' 'words' @longCave  
  "The writing on the wall declares:\b  
   \<q\>One banana to rule them all\nAnd in the darkness bind them.\</q\>"  
   isPlural = true  
   notImportantMsg = 'That\\s not the sort of thing you can do to them. '     
   dobjFor(Read) asDobjFor(Examine)  
   initNominalRoomPartLocation = defaultSouthWall     
;  
  
The last line of this definition (excluding the final semicolon) tells
the system that the longCaveWords are nominally on the south wall. This
allows the player to EXAMINE WORDS ON SOUTH WALL as well as EXAMINE
WORDS and have the description displayed. It also causes the words to be
mentioned when the player types EXAMINE SOUTH WALL (note that prior to
version 3.0.9 it would also have been necessary to override
isListedInRoomPart to achieve this effect, but this is no longer
necessary in 3.0.9).  
  
A further refinement offered in version 3.0.9 is the new mix-in class
RoomPartItem. This allows us to set up an item that displays its
specialDesc (or initSpecialDesc) only when the room part to which its
nominally attached is examined. This is useful for objects such as doors
and windows that might already be included in the general room
description, or for objects that are not worth listing in their own
right but which are worth a mentioned when the room part to which they
are attached is examined. The advantage of using specialDesc (or
initSpecialDesc) for this purpose is that we can customise the way the
fixture is described, instead of producing something a bit ungainly
like, "On the north wall is a red door. " As an example, we might
further customise the bracket object so that when the north wall of the
cave is examined we see "A steel bracket containing a flaming torch is
attached to the wall. ":  
  
bracket : **RoomPartItem**, Decoration 'steel bracket' 'steel bracket'   
   @mainCave  
  "The steel bracket is fixed securely to the wall; there doesn't appear to be  
   any way it could be detached. "  
   **specialNominalRoomPartLocation = defaultNorthWall  
   specialDesc = "A steel bracket containing a flaming torch is fixed to the wall. "  
**;  
  
Note that in this case, since the bracket will never move, it doesn't
matter whether we use specialNominalRoomPartLocation and specialDesc, or
initNominalRoomPartLocation and initSpecialDesc, as long as we use one
pair or the other and don't try to mix them. If the bracket could be
removed from the wall, we'd probably want to use
initNominalRoomPartLocation and initSpecialDesc.  
  
<span id="lakedecoration">Finally, a simple example of a Decoration
would be the lake as seen from the shore. There seems little reason why
the lake should look any different from lakeRoom and pathEnd; rather
than define the same decoration twice, we can thus take a shortcut by
making it a MultiLoc; strictly speaking, it should perhaps be a
MultiInstance, but in this case no harm will come of using MultiLoc and
it's slightly simpler.  
  
MultiLoc, Decoration 'great (giant) underground lake/water' 'lake'  
  "The lake, which stretches as far south as you can  
     see, looks almost as flat as a millpond, although the occasional  
     ripple runs across its surface. It is also strikingly  
     phosphorescent, casting an eerie green glow over the whole  
     vast cavern. "  
  locationList = \[lakeRoom, pathEnd\]  
;  
  
The point to bear in mind here is that a</span> [MultiLoc](multiloc.html)
represents a single physical object present in more than one location,
and one that is sufficiently small that, for example, if it is lit in
one location it is lit in all and if something is put in it in one
location it can be retrieved from it in another. The lake meets the
first of these conditions, but not the second. Because, however, it's a
Decoration, the only relevant consideration is lighting. If one part of
the lake might be in darkness while another was lit, it would
inappropriate to use a MultiLoc to represent it (since what was meant to
be the dark part of the lake would appear as lit). In this game,
however, all parts of the lake will be permanently lit, so it's safe to
make it a MultiLoc.  
  
The general principle here is that it's safe to make a Decoration a
MultiLoc if and only if the lighting conditions are always the same in
all the locations where the Decoration exists (it's fine if all the
lighting conditions change simultaneously, but they must always be the
same in each location at any one time). If this condition is not met,
use a [MultiInstance](multiinstance.html) instead.  
  
