<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>NonPortable Introduction<br />
</strong></td>
<td style="text-align: right;"><a href="inroomname.htm">[Previous]</a>
<a href="generalintroduction.htm">[Main]</a> <a
href="fixture.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
Most of the items we have added to the game so far have been
NonPortables - that is objects that cannot be picked up and moved
around - but that is because they have mainly been various types of room
and passage. In this section we shall take a look at the principal kinds
of NonPortable object one might use as part of the contents of a Room,
giving a few examples to start furnishing the rooms we have created so
far.  
  
One common feature of NonPortable objects to be borne in mind is that,
by default, they are not shown in listings of the contents of rooms or
other objects. This is because they are considered to be permanent
features of their location, and should therefore be mentioned in the
description of their room or other container, or else given an
initSpecialDesc or specialDesc (which will be listed). This behaviour
can be changed by overriding the isListed, isListedInContents, and
isListedInInventory properties of a NonPortable object. Note that the
fact that a NonPortable is not listed does not of itself make it
invisible: it can still be EXAMINEd and will respond to other commands
directed towards it.  
  
You are not likely to declare an object to be of class NonPortable in
your game code, since NonPortable serves principally as a common
ancestor class to a number of different classes that are commonly used.
A partial tree of NonPortable classes, some of which we have already
met, is as follows:  
  
**NonPortable**  
<u>   </u>[Fixture](fixture.htm)  
      [Component](component.htm)  
         [ComplexComponent](complexcontainer.htm)  
      [Decoration](decoration.htm)  
         [Unthing](unthing.htm)  
      [Distant](distant.htm)  
      [Enterable](enterable.htm)  
         [EntryPortal](entryportal.htm)  
      [Exitable](shipboardroom.htm)  
         [ExitPortal](exitportal.htm)  
      [NominalPlatform](nominalplatform.htm)  
      [Passage](introduction.htm)  
      [Room](introduction.htm)  
      [RoomPart](roomparts.htm)  
      [SecretFixture](lockablecontainer.htm#secretfixture)  
   [Immovable](immovable.htm)  
      [Heavy](heavy.htm)  
         [TravelPushable](travelpushable.htm)  
  
**A Note on Notation  
**In what follows we shall specify the room location of objects using
the @notation of the Thing template, rather than the + notation, e.g. by
writing  
  
myThing : Thing 'my thing' 'thing' @outsideCave  
"A poor thing, but mine own. "  
;  
  
Rather than  
  
+ myThing : Thing 'my thing' 'thing'  
"A poor thing, but mine own. "  
;  
  
Either method is possible in your own code; the reason for doing it this
way here is to avoid the need for (and possible confusion arising from)
specifying where in existing code these new objects need to be placed.
There is also something to be said for specifying the objects in a
different part of the code - even a different source file - from the
rooms and connectors, since this leaves the basic outline of the map
clearer in the room code. The downside is that it may be less
immediately apparent how objects and rooms relate to each other.  
**  
  
**  
  
  
