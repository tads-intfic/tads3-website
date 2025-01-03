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
<td style="text-align: left;"><strong>RoomConnector : <a
href="travelconnector.html">TravelConnector</a><br />
</strong></td>
<td style="text-align: right;"><a
href="deadendconnector.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="asexit.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
So far we can't actually leave the starting location. We could simply
define the next location and simply point to it from the starting room,
but in this case we want to make the tunnel into the cave subject to a
rockfall that may block it (in either direction). Once the player starts
exploring the cave system, he or she will then have to find another way
out.  
  
An efficient way to perform this task is with a RoomConnector, since we
can conditionally block passage through it. We can define the
appropriate RoomConnector thus:  
  
entranceTunnel : RoomConnector  
  room1 = entranceCave  
  room2 = outsideCave  
  blocked = nil  
  canTravelerPass (traveler) { return !blocked; }  
  explainTravelBarrier (traveler)  
  {      
    "After a few paces down the tunnel it becomes all too clear  
    that it has been blocked by a recent rockfall, so there is  
    nothing for it but to turn round and go back. ";  
  }  
;  
  
The properties room1 and room2 define the two rooms that will be linked
by this connector (note that we haven't defined [entranceCave](room.html)
as yet, so the game won't compile till we do). We define a custom
blocked property to determine whether or not the tunnel has been blocked
by the rockfall. The **canTravelerPass** method (defined on all
TravelConnectors) determines whether a traveler can traverse this
connector. In this case we want to allow travelers to pass if the
connector is not blocked, but not otherwise, so we simply returned
!blocked (i.e. not blocked). If travel is forbidden the
**explainTravelBarrier** method is invoked, so we define it to display
an appropriate message in the event that the tunnel is blocked.  
  
Note that the tunnel is not represented as a physical object in the game
(although it could have been): the RoomConnector is an *abstract* object
linking the two rooms (although in a sense it does duty for a
representation of a tunnel that can be blocked).  
  
Note also that it will be necessary to make the appropriate direction
properties of both [outsideCave](roomconnector.html) and
[entranceCave](room.html) point to this RoomConnector. We'll do that
next.  
