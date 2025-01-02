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
<td style="text-align: left;"><strong>PlugAttachable : object<br />
</strong></td>
<td style="text-align: right;"><a
href="nearbyattachable.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="permanentattachment.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
PlugAttachable is a mix-in class for use with Attachable or
NearbyAttachable to make PLUG X IN Y behave like ATTACH X TO Y and
UNPLUG X FROM Y behave like DETACH X FROM Y.  
  
To demonstrate this, we'll implement a vending machine just down the
corridor that needs to be plugged into the wall with an electrical cable
before it'll dispense entrance tickets. First we'd better create the
location for the machine:  
  
brightCorridor : Room 'Brightly-lit Corridor'  
  "The corridor continues both east and west from here\<\<openDoorway.isOpen ?  
  ', and there is an open doorway to the north' : ''\>\>. A large sign on the  
   wall points west towards the Museum Entrance and east towards the Exit. "  
   north = openDoorway  
   **east = museumExit**  
;  
  
museumExit : Room 'Museum Exit' 'the museum exit'  
  "The brightly lit corridor from the west comes to an end here, by a door  
   that looks firmly closed. Some sort of vending machine stands next to  
   one wall, and there's an electrical outlet near to it at floor level. "  
   west = brightCorridor  
   east = museumExitDoor  
;  
  
+ museumExitDoor : IndirectLockable, Door 'door' 'door'  
  "The door is marked EXIT. "  
;  
  
In this case we've made the museumExitDoor an IndirectLockable because
we intend it never to be unlocked; it forms a boundary to the game
world.  
  
Now we need to add the electrical socket and the vending machine, both
of which will need to be both PlugAttachable and Attachable as well
their appropriate Thing-derived class:  
  
+ socket : PlugAttachable, Attachable, Fixture  
    'electrical outlet/socket' 'socket'  
;  
  
+ vendingMachine : PlugAttachable, Attachable, Heavy  
  'vending machine' 'vending machine'  
  "It's a machine for selling museum tickets. Near the top is a small vertical  
   slot labelled \<\<vendingSlot.label\>\>, and lower down is the hole that  
   presumably dispenses the tickets. "  
  powerOn = (powerCable.isAttachedTo(self) && powerCable.isAttachedTo(socket))   
  afterAction()  
  {  
    if(gActionIs(AttachTo) && powerOn)  
      "The vending machine starts to hum. ";  
  }  
;  
  
++ vendingSlot : RestrictedContainer, Component 'small vertical slot' 'slot'  
  "It's labelled \<\<label\>\>. "  
  label = 'ADMITTANCE THREE FARTHINGS - EXACT CHANGE ONLY'  
  validContents = \[silverCoin, brassCoin\]  
  notifyInsert (obj, newCont)  
  {  
    "\\\<\<obj.theName\>\> drops into the slot and ";  
    if(obj!=silverCoin \|\| !vendingMachine.powerOn)  
    {  
      "immediately falls straight through into the hole. ";  
      obj.moveInto(vendingHole);  
      exit;  
    }  
    "a moment or two later a ticket appears in the hole. ";  
    museumTicket.moveInto(vendingHole);    
    obj.moveInto(nil);  
    exit;  
  }  
;  
  
++ vendingHole : Container, Component 'hole' 'hole'  
   "It's a small square hole at about chest height. "  
   bulkCapacity = 1     
;  
  
There's not much new in the above. We define vendingMachine.powerOn to
determine whether the power cable is attached to both the vending
machine and the power socket, and we use afterAction to start the
machine humming when both ends are first plugged in, just to confirm
that the vending machine is now powered up (if we wanted to be more
sophisticated we could also add a suitable Noise object here, although
we'd also have to add suitable handling to take it away again). Perhaps
the most significant method we define here is vendingSlot.notifyInsert,
which checks both that the right coin has been inserted and that the
power is on before issuing a ticket. If a ticket is issued then we move
the coin into nil to make it no longer available, and then exit to
prevent the normal action handling from moving the coin back into the
slot.  
  
Next we need to define the all-important power cable:  
  
powerCable : PlugAttachable, Attachable, Thing   
   'thick black power cable/cord/lead/plugs' 'black cable' @galleyCupboard  
   "It's a thick black power cable, about four feet long, with  
    plugs both ends. "  
  bulk = 2   
  canAttachTo(obj) {return obj is in (socket, vendingMachine); }  
  travelWhileAttached (movedObj, traveler, connector)  
  {  
    if(movedObj==self)  
    {  
      foreach(local cur in attachedObjects)        
        tryImplicitAction(DetachFrom, self, cur);        
    }  
  }  
;  
  
The straightforward part is the canAttachTo method which simply defines
the socket and the vendingMachine as the objects that the cable can be
attached to. The subtler part is the travelWhileAttached method. This is
needed to cater for the situation where the player character walks off
still holding the cable while it's plugged into either the socket or the
vending machine or both. What we make it do in this case is to detach
the cable from whatever it's attached to; using **tryImplicitAction** to
perform this decoupling makes this detachment an implicit action here,
which creates quite a neat effect.  
  
Finally, of course, we need to define that entrance ticket (which starts
off without a location):  
  
museumTicket : Readable 'small green ticket' 'small green ticket'  
  "It's a ticket for admission into the museum. "  
  readDesc = "Eerhtsdat Caves Museum of Curious Antiquities\n  
    ADMIT UP TO TWO PERSONS\nMULTIPLE TIMES TILL EXPIRY DATE\n  
    Expiry date: TBA "  
  bulk = 0  
  weight = 0  
;  
  
At this point you should be able to compile and run the game and try out
the vending machine. Eventually we'll get to the point where you'll need
the ticket to get into the museum.  
