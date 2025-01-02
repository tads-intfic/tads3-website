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
<td style="text-align: left;"><strong>HiddenDoor : <a
href="secretdoor.html">SecretDoor</a><br />
Other Examples<br />
</strong></td>
<td style="text-align: right;"><a href="floorless.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="entryportal.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A HiddenDoor is a variation on SecretDoor, the difference being that
while a [SecretDoor](secretdoor.html) is a visible object (like the rock
we used before) that is not apparently a door, a HiddenDoor isn't even
visible until it's been opened. For our example we'll create a section
of the foreward bulkhead of the cabin that slides open at the press of a
button. We'll go about concealing the button in a later section.  
  
First, however, we need to create the cabin:  
  
class Cabin : ShipboardRoom, Room;  
  
greatCabin : Cabin 'Great Cabin' 'the great cabin'  
  "The great cabin occupies the entire width of the ship at the stern. The stern  
   windows aft look out over the water, while there is a solid wooden bulkhead  
   foreward. The main piece of furniture is a sturdy wooden desk, while a flight of  
   steps leads up to the deck above. "  
   up = cabinSteps  
   fore = bulkheadDoor  
;  
  
+ cabinSteps : StairwayUp -\> deckSteps 'flight steps' 'steps'  
  "The steps lead up to the deck above. "  
  isPlural = true  
;  
  
There is nothing new in this, apart from the creation of our custom
Cabin class (which, along with the Deck class, we'll shortly be
customizing a little further). We can now define the HiddenDoor:  
  
+ bulkheadDoor : HiddenDoor 'bulkhead door/doorway/opening' 'bulkhead door'  
  "The central section of the foreward bulkhead has slid open, revealing a   
   doorway through the bulkhead. "  
  destination = crewQuarters   
;  
  
We next need to provide a mechanism for opening it, which we'll make a
button that, for now, is simply a Fixture in the cabin:  
  
+ 

Button, Fixture 'small brown button' 'small brown button'  
  "The small brown button is fixed to the underside of the desk. "  
  dobjFor(Push)  
  {  
    action()  
    {  
      "There's a sharp \<i\>click\</i\>, and a section of the foreward bulkhead slides  
      \<\<bulkheadDoor.isOpen ? 'closed' : 'open'\>\>. ";  
      bulkheadDoor.makeOpen(!bulkheadDoor.isOpen);  
    }  
  }    
;  
  
The description of the button shows where we'll end up putting it, but
that will come later. Finally, we need to define another couple of rooms
where we fetch up when we go through the HiddenDoor:  
  
class DarkCabin : Cabin  
  brightness = 0  
;  
  
  
crewQuarters : DarkCabin 'Crew Quarters' 'the crew quarters'  
  "The crew quarters seem largely deserted. There's an exit back aft and a  
   ladder leading down into the hold. "  
   down = holdLadderDown  
   aft = greatCabin  
;  
  
+ holdLadderDown : StairwayDown 'ladder' 'ladder';  
  
  
hold : DarkCabin 'Hold'  
  "The hold seems vast and cavernous, and is largely empty. A ladder leads  
   up through an open hatchway above. "  
   up = holdLadderUp    
;  
  
+ holdLadderUp : StairwayUp -\>holdLadderDown 'ladder' 'ladder';  
  
  
We could have defined DarkCabin as ShipboardRoom, DarkRoom; but by
making it inherit from Cabin we ensure that it inherits any further
customizations we add to the Cabin class.  
  
  
