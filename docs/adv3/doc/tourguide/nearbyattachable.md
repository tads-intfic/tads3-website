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
<td style="text-align: left;"><strong>NearbyAttachable : <a
href="attachable.html">Attachable</a><br />
</strong></td>
<td style="text-align: right;"><a href="attachable.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="plugattachable.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A NearbyAttachable is an Attachable with some further specialization
added. In particular, a NearbyAttachable enforces the condition that the
attached objects must share the same immediate container. If one of the
attached objects is moved out of their common container, the objects are
automatically detached (this is enforced in
NearbyAttachable.moveWhileAttached, which NearbyAttachable overrides).
Conversely, if an ATTACH command is issued to a NearbyAttachable, one
precondition of the action is that the direct object is in the same
container as the indirect object; this means that when the command
ATTACH X to Y is issued, if X is not already in the same container as Y,
the attempt will be made to move it there as an implicit action. If the
implicit action succeeds, the attachment is carried out, otherwise it
fails.  
  
This is precisely what we want with the wires behind the switch; for the
black wire we need to attach to the red and green wires to be attached
to them, it must be in the same container as those other two wires. Next
we define that container, a tiny hole in the button fitting that's
revealed when the button is detached:  
  
++++ wireHole : RestrictedContainer, Fixture 'tiny square hole\*holes' 'tiny hole'  
   "The tiny hole is just over an inch square. "  
   validContents = \[redWire, greenWire, blackWire\]    
   isListedInContents = true    
;  
  
This definition should, of course, follow directly on from that of the
buttonFitting object, so that the nesting works correctly. Next we
define the red and green wires that go inside:  
  
class ColouredWire : Attachable, Fixture  
  desc = "\\\<\<theName\>\> protrudes from the \<\<LorR\>\> hand side of the tiny hole. It looks like  
   it's been cut. "   
  isListedInContents = true  
   explainCannotAttachTo(obj)  
   {  
     if(obj.ofKind(ColouredWire))  
       tooShortMsg;  
     else   
       inherited(obj);  
   }  
   tooShortMsg = "The red and green wires aren\\t quite long enough   
         to reach each other. "  
;  
  
  
+++++ redWire : ColouredWire 'red wire\*wires' 'red wire'  
  LorR = 'left'     
;  
  
+++++ greenWire : ColouredWire 'green wire\*wires' 'green wire'  
  LorR = 'right'   
;     
  
Because the definition of the two wires is so similar we define a
ColouredWire class for the common handling and then create a couple of
instances of it. Finally, we need the piece of black wire that will join
up the other two:  
  
blackWire : NearbyAttachable, Thing 'short piece black wire\*wires' 'short piece of black wire'  
   @smallHoleInWall  
  "It's about an inch long, covered with black insulation, but with the naked  
   wire showing at each end. "  
  canAttachTo(obj) { return obj is in (redWire, greenWire); }  
;  
  
Because NearbyAttachable (unlike Attachable) already enforces most of
the special conditions we need, the only thing we need to define on the
blackWire is the list of objects that it can be attached to
(alternatively, we could have added
canAttachTo(obj) { return obj == blackWire; } to the definition of the
ColouredWire class). We let the black wire start life in the small hole
in the wall behind the mirror in the cave, so it's not immediately
obvious what it's for. We'll also be sneaky and make it of class Hidden,
since it's quite feasible that the player wouldn't notice it unless he
deliberately looks in the hole (and it also stops the wire announcing
its presence before we're ready for it!).  
  
That's all we need to do to get the button to work, but at the moment
there's nothing on the other side of the door, which won't make it that
rewarding to open. We can rectify that forthwith:  
  
brightCorridor : Room 'Brightly-lit Corridor'  
  "The corridor continues both east and west from here\<\<openDoorway.isOpen ?  
  ', and there is an open doorway to the north' : ''\>\>. A large sign on the  
   wall points west towards the Museum Entrance and east towards the Exit. "  
   north = openDoorway  
;  
  
+ Decoration 'large sign' 'large sign'  
  "MUSEUM ENTRANCE --&gt;\n&lt;-- WAY OUT\n"  
;  
  
+ openDoorway : SecretDoor -\> blankSteelDoor 'open doorway' 'open doorway'  
  "\<\<isOpen ? 'The door has slid open, revealing a dark tunnel beyond'  
   : 'It\\s a featureless sheet of grey steel'\>\>. "  
;  
  
The openDoorway could almost have been made a ThroughPassage, since
there's no way to approach it except from tunnelEnd when its other side
is open, but we'll make it a SecretDoor just in case; there's no way of
opening or closing it from this side, but at least it'll be open and
closed in sync with its other side.  
  
  
  
  
