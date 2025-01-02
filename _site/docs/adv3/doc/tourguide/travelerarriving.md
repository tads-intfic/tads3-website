<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>enteringRoom<br />
</strong></td>
<td style="text-align: right;"><a
href="roomdarktravel.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="inroomname.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
It is sometimes useful to have something happen each time an actor
arrives in a room. For example, we may want to reset the state of the
darkEvents StopEventList each time the player character enters the
crewQuarters so that there is always one warning about blundering about
in the dark before the PC falls down the ladder and dies. This can be
achieved by overriding enteringRoom:  
  
crewQuarters : DarkCabin 'Crew Quarters' 'the crew quarters'  
  "The crew quarters seem largely deserted. There's an exit back aft and a  
   ladder leading down into the hold. "  
   down = holdLadderDown  
   aft = greatCabin  
   cannotGoThatWayInDark()     
     {  
       darkEvents.doScript();           
     }  
   roomDarkTravel(actor)  
    {  
       cannotGoThatWayInDark;  
       exit;  
    }     
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
   **enteringRoom (traveler)  
   {       
     darkEvents.curScriptState = 1;  
   }**  
;  
  
The enteringRoom method is a convenience hook that is called from
travelerArriving, which performs some significant processing of its own
and which uses a longer parameter list. By default, the library method
enteringRoom does nothing, so that we do not need to call inherited.
Without the enteringRoom method we should instead have had to write:  
  
  travelerArriving (traveler, origin, connector, backConnector)  
  {  
   darkEvents.curScriptState = 1;    
   inherited (traveler, origin, connector, backConnector);      
  }  
  
There is also a corresponding **leavingRoom(traveler)** method that can
be used to execute custom code when a traveler is about to leave a
room.  
  
