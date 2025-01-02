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
<td style="text-align: left;"><strong>Room : <a
href="fixture.html">Fixture</a>, BasicLocation, <a
href="roomautoconnector.html">RoomAutoConnector</a><br />
</strong></td>
<td style="text-align: right;"><a href="enterable.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="stairwaydown.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
We can now define the second room in the game. Since this will be an
interior room (albeit inside a cave rather than a building) we'll make
it of the Room class:  
  
entranceCave : Room 'Entrance Cave' 'the entrance cave'  
  "Compared with the narrow tunnel leading out to the north, this   
   rough-walled cave seems positively spacious. A red sign fixed to   
   one wall suggests that the narrow tunnel is the only way back out to  
   the valley, while a blue sign next to it welcomes you to the cave.  
   Directly under the signs a narrow ledge has been carved into the  
   wall. There appear to be no other caves at this level, but a sturdy   
   steel ladder leads down through a large round hole in the floor. "  
  
   north = entranceTunnel     
   out asExit(north)  
;  
  
  
Note that the cave's north property points to the previously defined
[RoomConnector](roomconnector.html), and that we use the
[asExit](asexit.html) macro to allow OUT as a synonym for NORTH.  
  
Once again, note the use of the [Room template](roomtemplate.html) to
define the common properties of this Room. The first single-quoted
string, 'Entrance Cave' is the name of the Room. The second 'the
entrance cave' (which is optional - we could just leave it out) is its
destName (the name that will appear in exit listings). The double quoted
string that follows, "Compared with the narrow... ", is the room
description.  
  
Although this is an underground cave, we assume it will be permanently
lit by some means or other. In more complex situations you might want to
override the brightness property to vary according to circumstance (as
is exemplified in the definition of the [secretPassage](secretdoor.html),
which comes later).  
  
At this point it should be possible to compile and test the game once
more.  
