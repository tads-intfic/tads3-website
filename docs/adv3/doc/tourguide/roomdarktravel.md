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
<td style="text-align: left;"><strong>roomDarkTravel<br />
</strong></td>
<td style="text-align: right;"><a
href="cannotgothatwayindark.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="travelerarriving.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
BasicLocation.roomDarkTravel() defines what happens if we try to move
from the current location when it's dark to another dark location. By
default, it simply displays the same message as
[cannotGoThatWayInDark](cannotgothatwayindark.html) and then uses exit to
cancel the movement action. In most cases you'll probably want to keep
both methods appearing to do the same thing (unless you want to allow
travel from one dark location to another), so that the player is given
no indication in the dark whether a given direction is valid for travel
or not. In this case we could simply override roomDarkTravel to call
cannotGoThatWayInDark and then exit:  
  
crewQuarters : DarkCabin 'Crew Quarters' 'the crew quarters'  
  "The crew quarters seem largely deserted. There's an exit back aft and a  
   ladder leading down into the hold. "  
   down = holdLadderDown  
   aft = greatCabin  
   cannotGoThatWayInDark()     
     {  
       darkEvents.doScript();           
     }  
   **roomDarkTravel(actor)  
    {  
      cannotGoThatWayInDark;  
      exit;  
    }**     
   darkEvents : StopEventList      
   {  
    \[  
     'Blundering about a ship in the dark could prove dangerous. ',  
     new function  
     {  
       "Blundering around in the dark you fall down a ladder into the hold  
        and break your neck. ";  
        endGame(ftDeath);  
     }       
    \]  
   }  
;  
  
In this case the player only gets one warning; if the PC leaves the
crewQuarters aft to the greatCabin after making one false step in the
dark, the next false step in crewQuarters in the dark will kill the PC
off. This may be what you want, but we'll try changing it next using
[enteringRoom](travelerarriving.html).  
