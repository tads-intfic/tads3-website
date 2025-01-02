<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>RoomAutoConnector : <a
href="roomconnector.htm">RoomConnector</a><br />
</strong></td>
<td style="text-align: right;"><a
href="travelmessage.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="door.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
RoomAutoConnector is not a class that you're ever likely to use
explicitly, but implicitly you'll probably use it a great deal, since it
is one of the classes from which Room inherits. It is RoomAutoConnector
that provides the behaviour that allows a Room to be used as a connector
to itself. This may sound a little arcane, but in practice this is what
allows us to define travel between rooms without explicitly having to
define any explicit TravelConnector objects unless we need them for
their side-effects. Since a Room is also a RoomAutoConnector, we can use
as the value of another Room's direction properties to implement direct
travel between rooms. For example:  
  
anotherCave: Room 'Another Cave'  
  "There's something artificial about this cave. It's almost as if it's trying  
   to be a room. The floor is suspiciously level, the walls are almost  
   smooth, and there's a smart new door set into the south wall, with a  
   bright electric light mounted above it. The rougher, larger central  
   cave lies to the north. "  
   north = mainCave  
;  
  
To make anotherCave reachable from mainCave, we must similarly add  
  
south = anotherCave  
  
to the definition of mainCave, which should now look like:  
  
mainCave: Room 'Large Cave'  
    "The flickering orange light from the blazing torch fixed to the wall   
      accentuates the naturally ruddy hues of this large, irregular cave,  
      which seems to be something of a major hub in the cave system. **A  
      large rock rests against the wall to the north, other caves lie  
      through exits to east and south, while the way west is blocked by  
      a huge boulder.** A sturdy steel ladder leads up **through a hole in the roof**."  
    **north = rock  
    south = anotherCave  
**    up = upLadder  
;  
  
  
