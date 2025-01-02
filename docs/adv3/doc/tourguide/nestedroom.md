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
<td style="text-align: left;"><strong>NestedRoom : BasicLocation<br />
</strong></td>
<td style="text-align: right;"><a
href="nestedroomoverview.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="basicchair.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
You're not likely to use the NestedRoom class directly in your code, but
since we shall be looking at many of its subclasses, it's worth starting
with this base class.  
  
According to the comments in the library code:  
  
*A Nested Room is any object that isn't a room but which can contain an
actor: chairs, beds, platforms, vehicles, and the like.  
  
An important property of nested rooms is that they're not fully-fledged
rooms for the purposes of actor arrivals and departures. Specifically,
an actor moving from a room to a nested room within the room does not
trigger an actor.travelTo invocation, but simply moves the actor from
the containing room to the nested room. Moving from the nested room to
the containing room likewise triggers no actor.travelTo invocation. The
travelTo method is not applicable for intra-room travel because no
TravelConnector objects are traversed in such travel; we simply move in
and out of contained objects. To mitigate this loss of notification, we
instead call actor.travelWithin() when moving among nested locations.  
  
By default, an actor attempting to travel from a nested location via a
directional command will simply attempt the travel as though the actor
were in the enclosing location.*  
  
The point to note here is that a NestedRoom is not a fully-fledged Room;
it is not a TravelConnector, is not usually entered or left via
TravelConnector, and does not normally employ the TravelVia method to
enter or leave it (or at least, not when simply leaving the NestedRoom
for its enclosing room, as in getting off a bed or chair).  
  
To receive notification of entering or leaving a NestedRoom, you can't
use enteringRoom(), leavingRoom, travelerArriving(), and
travelerLeaving, but you can use **actorTravelingWithin(origin, dest)**
(defined on BasicLocation, and hence available to Room as well as
NestedRoom). As the comment in the library code describes it, the
purpose of this method is to:  
  
*Receive notification of travel among nested rooms. When an actor moves
between two locations related directly by containing (such as from a
chair to the room containing the chair, or vice versa), we first call
this routine on the origin of the travel, then we move the actor, then
we call this same routine on the destination of the travel.  
  
This routine is used any time an actor is moved with travelWithin().
This is not used when an actor travels between locations related by a
TravelConnector object rather than by direct containment.  
  
We do nothing by default. Locations can override this if they wish to
perform any special handling during this type of travel.*  
  
Some important, or at least potentially useful, properties of NestedRoom
(inherited by and hence common to its subclasses) include:  
  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>bulkCapacity</strong> - the maximum bulk the nested room can
hold - usually a large number, it can be made smaller, for example to
limit the seating capacity of a chair.  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>exitDestination</strong> - this is where an actor ends up
when s/he gets out of this nested room. By default, this will simply be
the nested room's location.  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>roomName</strong> - the room name that's displayed on the
status line when the player character is in this nested room and can't
see out (e.g. the nested room is a trunk and the trunk is closed). By
default, this is simply the nested room's name.  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>stagingLocations</strong> - The valid "staging locations"
for this nested room. This is a list of the rooms from which an actor
can DIRECTLY reach this nested room; in other words, the actor will be
allowed to enter 'self', with no intervening travel, if the actor is
directly in any of these locations. If the list is empty, there are no
valid staging locations. The point of listing staging locations is to
make certain that the actor has to go through one of these locations in
order to get into this nested room. This ensures that we enforce any
conditions or trigger any side effects of moving through the staging
locations, so that a player can't bypass a puzzle by trying to move
directly from one location to another without going through the required
intermediate steps. Since we always require that an actor go through one
of our staging locations in order to enter this nested room, and since
we carry out the travel to the staging location using implied commands
(which are just ordinary commands, entered and executed automatically by
the parser), we can avoid having to code any checks redundantly in both
the staging locations and any other nearby locations. By default, an
actor can only enter a nested room from the room's direct container. For
example, if a chair is on a stage, an actor must be standing on the
stage before the actor can sit on the chair.  <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

  
  
  
  
