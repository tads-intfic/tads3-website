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
<td style="text-align: left;"><strong>EntryPortal : <a
href="enterable.html">Enterable</a><br />
</strong></td>
<td style="text-align: right;"><a href="hiddendoor.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="exitportal.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
An EntryPortal is just like an [Enterable](enterable.html), except that
you can go through it as well as enter it. It can be used, for example,
for an archway that is plainly the entrance to another destination:  
  
mainCave: Room 'Large Cave'  
    "The flickering orange light from the blazing torch fixed to the wall   
      accentuates the naturally ruddy hues of this large, irregular cave,  
      which seems to be something of a major hub in the cave system. A  
      large rock rests against the wall to the north, other caves lie  
      through an archway to the east and an opening to the south, while  
      \<\<boulder.moved ? 'a passage has been opened up to the west' : 'the   
      way west is blocked by a huge boulder'\>\>. A sturdy steel ladder leads   
      up through a hole in the roof. "  
    north = rock  
    south = anotherCave  
    west : OneWayRoomConnector  
        {  
          -\>roundCave  
           canTravelerPass (traveler) { return boulder.moved; }  
           explainTravelBarrier (traveler)   
            { "The huge boulder is in the way. "; }  
  
        }      
    east = squareCave  
    up = upLadder  
;  
  
  
+ EntryPortal -\>squareCave 'arch/archway' 'archway'  
  "It's a large archway, leading to another cave beyond. "  
;  
  
The property pointed to by -\> in the template is actually the connector
traversed, not the destination reached, when the EntryPortal is entered,
although when, as here, the connector is a Room this has the same effect
(see this discussion of the distinction in connection with the
[Enterable](enterable.html) class, from which EntryPortal inherits).
Entry portal inherits from Enterable and hence inherits the [Enterable
template](enterabletemplate.html).  
