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
<td style="text-align: left;"><strong>Immovable : <a
href="nonportableintroduction.html">NonPortable</a><br />
</strong></td>
<td style="text-align: right;"><a href="unthing.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="customimmovable.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
An Immovable object is one that can't be moved but isn't obviously fixed
in place. The practical difference between a [Fixture](fixture.html) and
an Immovable is that moving the former is forbidden in the verify
method, while moving the latter is disallowed in the action method.  
  
The messages that are displayed when the player attempts to TAKE, PUT or
otherwise MOVE (e.g. PUSH or PULL) an Immovable can be changed by
overriding cannotTakeMsg, cannotPutMsg and cannotMoveMsg respectively.  
  
A simple Immovable would be something like a piece of furniture that the
player's not allowed to take or move. However, we'll make our example a
bit more interesting than that: we'll put a rug in the roundCave that
starts by covering the hole in the floor. The player cannot take the rug
but he or she can pull it (once only) to reveal the hole beneath. Later
we'll also hide a key under this rug:  
  
  
rug : Immovable 'large rectangular chinese rug/pattern/leaves/dragons' 'Chinese rug'  
   @roundCave  
  "The rectangular rug is patterned in pastel colours, mainly turquoise round the  
   edge and principally golds and browns within. The patterns consists mainly  
   of leaves and dragons. "  
  initSpecialDesc = "A Chinese rug covers the centre of the floor. "  
  specialDesc = "The Chinese rug has been pulled over to one side of the cave. "  
  cannotTakeMsg = 'You probably could roll the carpet up and drag it around,  
    but you don\\t want to be encumbered with it. '  
  dobjFor(Pull)  
  {  
    action()  
    {  
      if(moved)  
        "You can't pull the rug any further, it's already at the edge of the cave. ";  
      else  
      {  
        "Pulling the rug over to the edge of the cave reveals a square hole in the floor. ";  
        moved = true;  
      }  
    }  
  }  
;  
  
There a few things to note here. First, we have used the **moved**
property of the rug to determine whether or not the rug has been pulled
to one side. This isn't its normal function, since normally moved is
used to track whether an object has moved into another location.
However, it's convenient here, both because we don't need rug.moved for
any other purpose and also because setting moved = true when the rug has
been pulled also means that thereafter the specialDesc will be displayed
in place of the initSpecialDesc, which happens to be just what we want
(since it describes the changed state of the carpet). We have overridden
cannotTakeMsg to provide a custom response, and, more importantly, we
have overridden the dobjFor(Pull) handling to allow the rug to be pulled
a single time to reveal the hole.  
  
This does, of course, require some change to the definition of the hole
object so that it appears and can be traversed only when the rug has
been pulled aside. The easiest way to achieve this is to change it from
a ThroughPassage to a HiddenDoor and to set its isOpen property to
rug.moved (since moving this rug effectively opens this previously
hidden passage). We also need to change the room description of
roundCave so that the hole is mentioned only when the rug has been
pulled:  
  
roundCave : DarkRoom 'Round Cave' 'the round cave'  
  "This round, rocky cave has a narrow exit to the east**\<\<rug.moved ?  
   ' and a strange square hole in the floor' : nil\>\>**. "  
  east = mainCave  
  down = squareHole    
;  
  
+ squareHole : TravelWithMessage, **HiddenDoor** 'square hole/chute' 'square Hole'  
  "The hole is just about large enough for one person to fit through. A glint  
   of something metallic can be seen just through the hole. "  
  travelDesc = "You find yourself sliding down a long, slippery metal chute;  
   After a short ride you are ejected into another cave. "   
  **isOpen = (rug.moved)**  
;  
  
