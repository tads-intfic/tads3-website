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
<td style="text-align: left;"><strong>Moving Actors Around<br />
</strong></td>
<td style="text-align: right;"><a
href="actorknowledge.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="overview-actorstates.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
Since Actors are meant to model living beings, there's no reason to
assume they'll always stay in the same place. That means that we need
some means of moving them around the game world.  
  
The basic rule when moving actors around in code is *never* use
moveInto(dest). Use **moveIntoForTravel(dest)** instead, or
travelTo(destination, connector, backConnector) or
scriptedTravelTo(dest); or else nestedActorAction(bob,North) or
nestedActorAction(TravelVia, redDoor).  
  
For a fuller discussion, see Mike Roberts's technical article on
<a href="%20http://www.tads.org/howto/t3npcTravel.html%20"
target="_top">NPC Travel in TADS 3</a>.  
  
It's also possible to have one actor automatically follow another
(normally, but not necessarily, the player character) by putting it in
an [AccompanyingState](accompanyingstate.html). This is one of the
ActorState classes, which is what we'll be looking at next.  
