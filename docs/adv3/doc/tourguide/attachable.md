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
<td style="text-align: left;"><strong>Attachable : object<br />
</strong></td>
<td style="text-align: right;"><a
href="attachables-overview.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="nearbyattachable.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
The Attachable class makes the handling of attaching and detaching
objects to and from each other a bit easier, but it does also leave
quite a bit to the game author to implement. Where the Attachable class
helps is first in making the ATTACH command symmetrical (so that ATTACH
A to B is handled the same as ATTACH B to A) and secondly in providing a
framework for specifying precisely what happens when two objects are
ATTACHEd or DETACHed. To work with Attachables successfully, it is
important to understand both this framework, and also what handling the
Attachable class does and does not itself provide.  
  
Firstly, an Attachable object defines an **attachedObjects** property
which contains a list of the other objects to which it is attached. This
list is automatically maintained on both objects involved in an ATTACH X
TO Y or DETACH X FROM Y command. Moreover the method
**isAttachedTo(obj)** can be used to test whether an Attachable object
is currently attached to obj.  
  
An Attachable object also defines a method **canAttachTo(obj)** which
determines whether the Attachable can be attached to obj. For this to
return true, obj must also be an Attachable, but one that overrides
canAttachTo(obj) to allow it to be attached to the first Attachable. To
make this doubtless confusing explanation a bit clearer, this means that
if you want to be able to ATTACH X TO Y then both X and Y must be of
class Attachable, and *either* X *or* Y must override canAttachTo(obj)
to return true when obj is the other object. So you must either override
X.canAttachObj(obj) to return true when obj==Y, or override
Y.canAttach(obj) to return true when obj==X. If X is the only object
that can be attached to Y, then you could do this with:  
  
X : Attachable, Thing ...  
  ....  
  canAttachTo(obj) { return obj == Y; }  
  ...  
;  
  
Note that Attachable is a mix-in class, so we must also add Thing or
some Thing-derived class to the class list.  
  
The **canDetachFrom(obj)** method is similar, except that it generally
allows X to be detached from Y unless either X.canDetachFrom or
Y.canDetachFrom has been overridden to prevent it, or either X or Y is
of class PermanentAttachment (or **isPermanentlyAttachedTo(obj)** has
been overridden with some other condition).  
  
In the event of either attachment or detachment being disallowed, the
method **explainCannotAttachTo(obj)** or **cannotDetachMsgFor(obj)** is
called; these can be overridden with customised messages if desired.  
  
It is important to realize (a) that this is about as far as the library
takes it and (b) that this is never enough. As things stands, if you
bring X into a location and attach it to Y which you find there, you can
walk all over the map carrying X while X is considered attached to Y and
Y remains where it is (and out of scope until to return to its
location). It is hard to conceive of a situation where this would be
what you actually want.  
  
Because the library can hardly guess what you do want (should Y be
dragged along with X, or detach itself from X, or what?) it is left up
to you to define the rest of the behaviour, but the library does define
four (by default empty) methods to help you do this:
**handleAttach(other)**, **moveWhileAttached(movedObj, newCont),**
**handleDetach(other)** and **travelWhileAttached(movedObj, traveler,
connector)**. The first of these is called on both objects in an ATTACH
command (so need normally be defined on one of them) and the last on
both objects in a DETACH command (so again need only be defined on one
of them); moveWhileAttached(movedObj, newCont) is called on movedObj and
every object attached to it when movedObj is about to be moved into
newCont. The final case arises, for example, when walking into a room,
attaching X to Y, and then walking away with X, since while X remains
held by the player character, it does not change container; although in
the plain English sense X is being moved when you walk away with it, it
is not being moved in the sense that would result in a call to
moveWhileAttached. To deal with this situation we use
**travelWhileAttached**.  
  
Not all attachment relationships are symmetrical. If we attach a red
wire to a green wire it doesn't much matter if the red wire is described
as attached to the green wire or the green to the red, but if we attach
a flag to a battleship, we expect to see the flag described as attached
to the battleship, not the battleship to the flag. To handle this
Attachable provides an **isMajorItemFor(obj)** method, which should
return true on the major item when obj is the minor item; for example
you might define  
  
battleship : Attachable, Enterable  
  ...  
  isMajorItemFor(obj) {return obj==flag; } .  
;  
  
  
But before we get too deep into such complications, we'll start will a
very simple case. You'll recall that back on the north side of the lake
we had a platinum ring and a diamond. We'll suppose that the diamond can
simply be clipped back into the ring to form a diamond ring; in this
case we simply want ATTACH DIAMOND TO RING or ATTACH RING TO DIAMOND to
replace both the diamond and the ring with a single diamond ring object.
We could put the handling on either object; we'll use the ring:  
  
ring : **Attachable**, Thing 'platinum ring/band/recess' 'platinum ring'  
  "It's a plain platinum band, with a small empty recess on one side. "   
   location = dressingTable.subContainer  
   **canAttachTo(obj) { return obj==diamond; }  
   handleAttach(other)  
   {  
     diamondRing.moveInto(gActor);  
     moveInto(nil);  
     other.moveInto(nil);  
     "{You/he} snap{s} the diamond back into its setting on the ring. ";  
   }  
   getFacets() { return \[diamondRing\]; }  
**;  
  
Note that we start by adding Attachable to the start of ring's class
list. When the diamond is attached to the ring we move the diamond ring
into the actor performing the action, since it's reasonable to suppose
that this is where it would end up unless the actor made a point of
putting it down again. Finally, we override getFacets so that if we have
just referred to the ring without the diamond, the pronoun 'it' will
refer to the diamond ring after the transformation. We then need to make
minimal changes to the diamond object:  
  
diamond : **Attachable**, Thing 'sparkle' 'sparkle' @pathEnd  
  "It looks like a genuine diamond - and a valuable one too, exquisitely cut  
   and multifaceted. "  
  iobjFor(CutWith) { verify() { } }  
  initSpecialDesc = ""  
  ...  
  renamed = nil  
  **getFacets() { return \[diamondRing\]; }**  
;  
  
Now we'll try something more complicated. Some way back we left our
intrepid adventurer stranded on the south side of the chasm - or least,
with no further to go once he's got there. We'll now suppose that the
tunnel to the south leads to a steel door that can only be operated by
pressing a button that's concealed behind a loose stone. The only
problem is that the wires have been cut, so before the button will work
it must be detached from its fitting and repairs made to the wires.
We'll implement the button and its container as Attachables, and the
wires as [NearbyAttachables](nearbyattachable.html).  
  
The first step is to provide the passage south from the chasm and the
location by the steel door:  
  
chasmLedge : DarkRoom 'Ledge of Chasm' 'the ledge of the chasm'  
  "A deep, wide chasm splits the ground immediately to the north of this  
   narrow ledge, while a dark tunnel runs south. Another tunnel can be   
   seen leading north from the far side of the chasm. "  
  north = deepChasm  
  inRoomName(pov)   
  {   
    return 'on the ' + (pov.isIn(deepChasm) ? 'south' : 'far') + ' ledge of the chasm';   
  }  
  **south = tunnelFromChasm**  
;  
  
+ tunnelFromChasm : ThroughPassage 'dark tunnel' 'dark tunnel'  
  "The dark tunnel runs south from here. "  
  noteTraversal(traveler) { "You walk a long way down the tunnel. "; }  
;  
  
tunnelEnd : DarkRoom 'End of Tunnel' 'the end of the tunnel'  
  "The tunnel from the north comes to an abrupt end before  
  \<\<blankSteelDoor.isOpen ? 'a large opening into a well-lit  
   corridor to the south' :' a blank steel door'\>\>. There is nothing  
   else here but the rough stone walls. "  
  north = tunnelToChasm  
  south = blankSteelDoor   
  brightness = (blankSteelDoor.isOpen ? 3 : 0)  
  roomParts = \[defaultFloor, defaultCeiling, tunnelEndWestWall, defaultEastWall\]  
;  
  
+ tunnelToChasm : ThroughPassage -\> tunnelFromChasm 'tunnel' 'tunnel'  
  "The long narrow tunnel leads off to the north. "  
;  
  
+ blankSteelDoor : Door 'blank steel door' 'blank steel door'  
  "The door \<\<isOpen ? 'has slid open out of sight' : 'is without handle,   
   keyhole or any other visible mechanism'\>\>"  
   openStatus {  }  
   checkDobjOpen() { "There's nothing on the door to get a purchase on. "; exit; }      
   checkDobjClose() { "The door has slid out of sight. "; exit; }     
   makeOpen(stat)  
   {  
     inherited(stat);  
     "The steel door slides \<\<isOpen ? 'open' : 'shut'\>\>. ";  
   }  
;  
  
tunnelEndWestWall : RestrictedContainer, RoomPart 'west rough stone wall\*walls' 'west wall'  
  desc = "\<\<freeStone.isIn(self) ? 'On closer inspection, one of the stones in   
    the wall looks a bit loose': 'There\\s a small round hole in the wall where a stone  
    has been removed' \>\>. "  
  validContents = \[freeStone\]   
;  
  
We have made a special room part to hold the stone that needs to be
moved to find the button; we make it a RestrictedContainer for that
purpose. We override the blankSteelDoor.openStatus to display nothing,
since 'It's open" or "It's closed" is superfluous given the way we have
described the door. We use the object name freeStone rather than
looseStone since the latter has already been used as a method name:  
  
+ freeStone : Thing 'loose stone' 'loose stone'  
  "It's a rough, round stone, about the size of a grapefruit. "  
  bulk = 2  
  weight = 3  
  moveInto(newDest)  
  {  
    if(location==tunnelEndWestWall)  
      "Removing the stone reveals a small round hole behind. ";  
    inherited(newDest);  
  }  
;  
  
We override freeStone.moveInto so that if it's being moved out of the
wall it announces the presence of the small round hole that's thereby
revealed. The next problem we are going to have to sort out is how to
make things visible and invisible according to what's where. The easiest
way to deal with this is to make a series of nested containers, which
we'll make open or closed according to whether the obscuring object is
present or not. We make the hole in the wall a RestrictedContainer so
that it can handle an attempt to PUT BUTTON IN HOLE or PUT STONE IN
HOLE, but we place it inside another container that represents the
presence or absence of the stone in the wall (so that hole is visible if
and only if the stone is not in the wall):  
  
  
+ Container, SecretFixture  
  isOpen = (!freeStone.isIn(tunnelEndWestWall))  
;  
  
++ holeInWall : RestrictedContainer, Fixture   
   'small round circular hole\*holes' 'small round hole'     
   isListedInContents = (sightPresence)     
   bulkCapacity = 3   
   validContents = \[holeButton, freeStone\]  
   iobjFor(PutIn)  
   {  
     action()  
     {  
       if(gDobj==freeStone)  
         replaceAction(PutIn, gDobj, tunnelEndWestWall);  
       else if(gDobj==holeButton)  
         replaceAction(AttachTo, gDobj, buttonFitting);  
       else  
         inherited;  
     }  
   }     
;  
  
The button is the most complex object we need to define here. It starts
attached to a fitting that also acts as the container for the tiny hole
containing the wires (which we'll come to in a minute), so we define
buttonFitting as being in its list of attachedObjects from the start,
and override canAttachTo to allow the buttonFitting as an attachment.
The button can only be detached if it has first been unscrewed so we
define an unscrewed property to keep track of this and then test for it
in canDetachFrom. The handleAttach and handleDetach methods then define
the specialized handling we need for attaching and detaching the button
from its fitting, in the former case moving the button into the hole and
setting unscrewed to nil, in the latter moving the button into the
actor's inventory (on the assumption that it will come off into his
hand), and in both cases displaying a suitable message. We also need to
define the handling for the UNSCREW command (basically to set unscrewed
to true and make a suitable report). While we're at it we make SCREW
equivalent to ATTACH BUTTON TO FITTING, and TAKE BUTTON equivalent to
DETACH BUTTON FROM FITTING if the button is attached to the fitting:  
  
+++ holeButton : Attachable, Button 'small black button/casing' 'small black button'  
   "It's in a circular casing\<\<isAttachedTo(buttonFitting) ? ''  
     : ', inside which is a screw thread'\>\>. "  
   canAttachTo(obj) { return obj == buttonFitting; }  
   handleAttach(other)  
   {  
     moveInto(holeInWall);  
     unscrewed = nil;  
     "{You/he} screw{s} the button into its fitting. ";       
   }  
   canDetachFrom(obj) { return obj == buttonFitting && unscrewed; }  
   cannotDetachMsgFor(obj)  
     {  
         if(obj==buttonFitting)  
           return 'It seems to be screwed in place. ';  
         else  
           return inherited(obj);  
     }  
   handleDetach(other)  
   {  
     moveInto(gActor);       
     "{You/he} remove{s} the button from its fitting, revealing a tiny hole behind. ";       
   }  
   attachedObjects = \[buttonFitting\]     
   unscrewed = nil  
   dobjFor(Unscrew)  
   {  
     verify() { if(unscrewed) illogicalNow('It\\s already unscrewed. '); }  
     action()   
     {  
       "{You/he} unscrew{s} the button. ";  
       unscrewed = true;  
     }  
   }  
   dobjFor(Screw) remapTo(AttachTo, self, buttonFitting)  
   dobjFor(Take) maybeRemapTo(isAttachedTo(buttonFitting),DetachFrom, self, buttonFitting)  
   dobjFor(Push)  
   {  
     action()  
     {  
       if(isAttachedTo(buttonFitting) && blackWire.isAttachedTo(greenWire)  
         && blackWire.isAttachedTo(redWire))  
           blankSteelDoor.makeOpen(!blankSteelDoor.isOpen);               
       else  
         "Nothing happens. ";  
     }  
   }    
;  
  
At the end of all this we also define what happens when the button is
pushed. Nothing happens at all unless the wires have been repaired (by
attaching the black wire to both the red wire and the green wire to
restore the connection) and the button is attached to its fitting; but
if all these conditions are met we open or close the door (depending on
whether it is currently closed or open).  
  
The next step is to define the fitting to which the button is attached.
Most of the attachment work has been done on the button, but we also
need to make it a container that's opened when the button is removed so
we can see what's inside:  
  
+++ buttonFitting : Attachable, Container, Fixture '(button) fitting' 'fitting'    
   "\<\<isAttachedTo(holeButton) ? '' : 'It\\s circular, with a screw thread running  
    round the outside. '\>\>"   
   isOpen = (!holeButton.isAttachedTo(self))  
   isListedInContents = (isOpen)  
;  
  
We'll go on to implement the wires inside the fitting as
[NearbyAttachables](nearbyattachable.html).  
