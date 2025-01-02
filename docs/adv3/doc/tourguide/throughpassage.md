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
<td style="text-align: left;"><strong>ThroughPassage : Passage<br />
</strong></td>
<td style="text-align: right;"><a href="secretdoor.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="darkroom.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
The secretPassage room refers to a tunnel leading north. The tunnel
itself isn't an interesting location, it's simply a route for getting
elsewhere. The player may however try to refer to it, so we can usefully
implement it as a ThroughPassage - something that you can ENTER or GO
THROUGH and that takes you directly to its destination. This time we
shan't implement a corresponding Passage object at the other end, so we
need to set the tunnel's destination property to the room where we'll
end up if we traverse the tunnel, the yet-to-be defined
[smallCave](darkroom.html) room.  
  
Since we envisage this as quite a long tunnel, however, we could display
a message representing the long walk down it when we travel through it;
this could be achieved simply by overriding noteTraversal, but instead
we'll take the opportunity to illustrate a simpler use of
TravelWithMessage. All we need to do is to override travelDesc with the
message we want displayed.  
  
  
+ tunnel : TravelWithMessage, ThroughPassage 'tunnel' 'tunnel'  
  "The dark tunnel looks large enough for a single person to  
   walk through. "  
  travelDesc = "You walk down the tunnel for some way and finally  
   arrive in a small cave. "  
  destination = smallCave   
;  
  
  
Since the tunnel is described as running north from the secretPassage,
the player may simply type N or NORTH to enter it, so we need to add the
following to the definition of secretRoom:  
  
north = tunnel  
  
We could also use a couple of anonymous ThroughPassage objects to
represent the tunnel and the hole that are mentioned in the description
of the entranceCave. At first sight there may seem to be a problem with
this: we don't want GO THROUGH TUNNEL to bypass the RoomConnector we've
set up for returning to the valley, and we'd probably want GO THROUGH
HOLE to be equivalent to CLIMB DOWN LADDER. The easiest answer here is
probably to remap the TravelVia of both ThroughPassages to the
connectors we actually want employed:  
  
+ ThroughPassage 'large hole' 'large hole'  
  "The hole is easily large enough for even a portly giant to pass through.  
   Looking through it you can see a large, rough cave below, lit by the flickering  
   flames of a torch. "  
  dobjFor(LookThrough) asDobjFor(Examine)   
  dobjFor(TravelVia) remapTo(TravelVia, downLadder)  
;  
  
+ ThroughPassage 'narrow tunnel' 'narrow tunnel'  
  "The tunnel evidently tapers from the outside to the inside, since  
   the end of the tunnel visible from here is quite narrow. "  
  dobjFor(TravelVia) remapTo(TravelVia, entranceTunnel);  
;  
  
Obviously, you should make sure that both these objects are located in
entranceCave.  
