<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>Bed : BasicBed, <a
href="surface.htm">Surface</a><br />
</strong></td>
<td style="text-align: right;"><a
href="nominalplatform.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="chair.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
A Bed is simply a NestedRoom an actor can lie on (or sit on). The likely
place for a bed is in a bedroom, and as we'll need to pay King Solomon a
visit sometime to collect his legendary purple carbuncle (no you won't
find it mentioned in the Bible, but we can always imagine that it's one
of the precious stones the Queen of Sheba gave him at 1 Kings 10.10) it
may as well be his bedroom.  
  
solomonBedroom : Room 'Bedroom' 'the bedroom'  
  "This large, square bedchamber is panelled in cedar, with a non-glazed window  
   looking out to the north, and a large bed against the east wall. A door leads  
   out to the west. "  
  west = solBedroomDoor  
  out asExit(west)  
;  
  
+ solBedroomDoor : Door 'bedroom cedar door' 'bedroom door'  
  "It's made of cedar. "  
;  
  
+ Bed, Heavy 'large bed' 'large bed'  
  "It has a cedar frame and an unsprung mattress. "  
;  
  
+ Fixture 'window' 'window'  
  "The window is basically an opening in the north wall, comprising  
   two rectangular sections each with curved tops. It is unglazed. "  
  dobjFor(LookThrough)  
  {  
    action()  
    {  
     "The window overlooks a building site where a large team of workers  
      are constructing a small temple. ";  
    }  
  }  
;  
  
  
