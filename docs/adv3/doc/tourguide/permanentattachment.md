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
<td style="text-align: left;"><strong>PermanentAttachment : <a
href="attachable.html">Attachable</a><br />
</strong></td>
<td style="text-align: right;"><a
href="plugattachable.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="nestedroomoverview.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
The PermanentAttachment class can be used for objects that are
permanently attached to each other, and are described as being mutually
attached. Since they're described as being attached the player may
attempt to detach them, and the permanent attachment relationship
basically provides a means of displaying an appropriate message in
response.  
  
One way of setting up a PermanentAttachment relationship is to make both
the objects PermamentAttachments and add one to the attachedObjects
property of the other, for example:  
  
**PermanentAttachment,** FireSource, Fixture 'flaming torch torch/flame/flames' 'torch' @mainCave  
  "The torch, which is fixed firmly to wall by a steel bracket, is blazing merrily,  
   its flames casting a bright but flickering light over the cave. "  
   cannotTakeMsg = 'It\\s fixed to the wall. '  
   preCondIobjBurnWith = static inherited - objHeld  
   isLit = true  
   disambigName = 'flaming torch'  
   **attachedObjects = \[bracket\]  
   baseCannotDetachMsg = 'It\\s too firmly fixed. '     
**;  
  
bracket : RoomPartItem,
**PermanentAttachment,** Decoration 'steel bracket' 'steel bracket' @mainCave  
  "The steel bracket is fixed securely to the wall; there doesn't appear to be  
   any way it could be detached. "  
   specialNominalRoomPartLocation = defaultNorthWall  
   specialDesc = "A steel bracket containing a flaming torch is fixed to the wall. "  
;  
  
Note that we can override **baseCannotDetachMsg** to provide a
customized response.  
  
The other way of setting up this relationship is where one object is
located inside another, for example because it's a Component of the
first object. If the child object is given the PermanentAttachmentChild
class, then the attachment relationship between the two objects is set
up automatically; for example:  
  
**PermanentAttachment,** Fixture 'wooden (deck) rail' 'deck rail' @quarterDeck  
  "The wooden deck rail runs along the forward edge of the Quarterdeck,  
  separating it from the main deck, although it is possible to get round  
  the rail either to starboard or port to go foreward. A large wooden  
  panel is fixed to the centre of the rail. "  
  **baseCannotDetachMsg = 'You can\\t; it\\s permanently fixed to the rail. '  
**;  
  
+ **PermanentAttachmentChild,** Component 'large wooden panel' 'panel'  
  "The panel seems to have something to do with sailing the ship. A wheel and a lever  
   are mounted on it, and between them is a hexagonal aperture. "      
;     
  
Note that with this setup, the baseCannotDetachMsg must be overridden on
the parent object, not the child, to have any effect.  
  
