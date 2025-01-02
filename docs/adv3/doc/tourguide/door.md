<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>Door : <a
href="basicdoor.htm">BasicDoor</a><br />
</strong></td>
<td style="text-align: right;"><a
href="roomautoconnector.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="basicdoor.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
A basic door is easy to implement; here we'll illustrate a simple
double-sided door by placing one between anotherCave and a room to the
south that we'll call lakeShore. We point the south property of
anotherCave to one side of the door (lakeDoor), the north property of
lakeShore to the other side of the door (lakeDoor2) and make sure that
one side of the door (lakeDoor2) points to the other side (lakeDoor) as
its masterObject. Door inherits from Passage and hence from Thing; we
use the [Thing template](thingtemplate.htm) for lakeDoor and the
[Passage template](passagetemplate.htm) for lakeDoor2:  
  
anotherCave: Room 'Another Cave'  
  "There's something artificial about this cave. It's almost as if it's trying  
   to be a room. The floor is suspiciously level, the walls are almost  
   smooth, and there's a smart new door set into the south wall, with a  
   bright electric light mounted above it. The rougher, larger central  
   cave lies to the north. "  
  north = mainCave  
  **south = lakeDoor  
**;  
  
+ lakeDoor : Door 'smart new door' 'smart new door';  
  
lakeRoom: Room 'Lake Shore'  
  "This is the northern shore of a giant underground lake. A door leads north. "  
  north = lakeDoor2  
;  
  
+ lakeDoor2 : Door -\>lakeDoor 'door' 'door';  
  
Later, we'll make this more interesting by adding a special kind of lock
to the door.  
