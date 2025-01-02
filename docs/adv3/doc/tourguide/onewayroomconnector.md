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
<td style="text-align: left;"><strong>OneWayRoomConnector : <a
href="roomconnector.html">RoomConnector</a><br />
</strong></td>
<td style="text-align: right;"><a
href="autoclosingdoor.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="pathpassage.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
Probably the most common use for a OneWayRoomConnector is to impose some
kind of condition on traveling from one room to a second (but not the
other way, or at least not symmetrically, which would call for a
[RoomConnector](roomconnector.html)). In this situation a
OneWayRoomConnector can be used as a nested anonymous object on one of
the first room's direction properties, its canTravelerPass method
overridden to define the conditions under which travel is possible, and
its explainTravelBarrier method overridden to explain why travel isn't
possible, if canTravelerPass disallows it. Travel via the
OneWayRoomConnector is allowed if canTravelerPass returns true and
prevented if it returns nil. Only in the latter case is canTravelerPass
invoked to display the reason why travel has been blocked.  
  
For example, the description of mainCave refers to a huge boulder
blocking the exit to the west. Later, we'll implement a way of removing
this obstacle by blowing it up with a stick of dynamite - so this isn't
an obstacle that can readily be implemented as a
[SecretDoor](secretdoor.html), like the rock to the north. Instead, we
could add a OneWayRoomConnector to check whether the boulder is present,
and simply disallow travel west if it is:  
  
  
mainCave: Room 'Large Cave'  
    "The flickering orange light from the blazing torch fixed to the wall   
      accentuates the naturally ruddy hues of this large, irregular cave,  
      which seems to be something of a major hub in the cave system. A  
      large rock rests against the wall to the north, other caves lie  
      **through an archway to the east and an opening to the south**, while  
      **\<\<boulder.moved ? 'a passage has been opened up to the west' : 'the   
      way west is blocked by a huge boulder'\>\>**. A sturdy steel ladder leads   
      up through a hole in the roof. "  
    north = rock  
    south = anotherCave  
    **west : OneWayRoomConnector  
        {  
          -\>roundCave  
          canTravelerPass (traveler) { return boulder.moved; }  
          explainTravelBarrier (traveler)   
            { "The huge boulder is in the way. "; }  
  
        }      
    east = squareCave  
**    up = upLadder  
;  
  
+ boulder : Thing 'boulder' 'boulder'   
  initDesc = "The huge boulder is blocking the exit to the west. "  
;  
  
In this case the [OneWayRoomConnector
template](onewayroomconnectortemplate.html) simply defines the -\>
property as the destination property, so -\>roundCave means that
roundCave is where we end up when travel is allowed via this connector.
Since the only way into the roundCave is by going west from mainCave, we
do not need to impose a similar check on travel the other way round;
although the boulder would prevent egress from roundCave to mainCave,
while the boulder is in place the player character cannot get into
roundCave so the situation will never arise.  
  
We have temporarily given a minimal definition of boulder simply as a
Thing so that it can readily be removed to allow access to the
roundCave. We shall change this when we come to implement the means of
blowing it up. Note the use of initDesc to give an appropriate
description of the boulder before it is moved, and the alteration to the
room description so that it changes when the boulder is removed.  
  
  
  
  
