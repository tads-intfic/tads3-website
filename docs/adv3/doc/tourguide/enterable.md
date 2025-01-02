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
<td style="text-align: left;"><strong>Enterable : <a
href="fixture.html">Fixture</a><br />
</strong></td>
<td style="text-align: right;"><a href="asexit.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="room.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
The room definition for [outsideCave](asexit.html) will work fine (once
we have defined the [entranceCave](room.html) Room) if the player types
IN or SOUTH or even ENTER, but since the room description mentions a
cave, the player may try to ENTER CAVE or EXAMINE CAVE. To cover this
possibility we should define a cave object and make it enterable:  
  
+ Enterable -\>entranceTunnel 'eerhtsdat cave/entrance/caves' 'cave'  
  "The entrance to the cave is large and welcoming; two large people could easily walk in  
   side by side without stooping. "  
;  
  
This definition uses the [Enterable template](enterabletemplate.html).  
  
We use the + syntax to locate this Enterable in outsideCave (so make
sure its definition comes after that of outsideCave and before anything
else).  
  
Since there is no need to refer to this object from anywhere else in our
game code we can define it as an anonymous object; there is no need to
give it an object name, we simply use the class name (without a
preceding colon).  
  
**<u>Important Note</u>**.  
  
Enterable, in common with [EntryPortal](entryportal.html),
[Exitable](shipboardroom.html) and [ExitPortal](exitportal.html),
superficially resembles Passage-type objects like
[ThroughPassage](throughpassage.html) in that it represents a game object
which one can go through and end up in a different location. Unlike the
various Passage objects (ThroughPassage, Door) etc., Enterable,
Exitable, EntryPortal and ExitPortal are *not* TravelConnectors and have
none of the TravelConnector methods or properties. Also, unlike Passages
and Doors, they do not descend from Linkable, which means, for example,
that an EntryPortal cannot be the masterObject of an ExitPortal; these
classes cannot be linked together as pairs pointing to each other.  
  
Passages and Doors typically refer to other destinations through their
**otherSide** or **destination** properties.  
  
Enterable, EntryPortal, Exitable and ExitPortal refer to their
destination through their **connector** property, which may simply be
set to the location you want an actor to end up in when entering or
exiting such an object, but may instead be set to a TravelConnector
object.  
