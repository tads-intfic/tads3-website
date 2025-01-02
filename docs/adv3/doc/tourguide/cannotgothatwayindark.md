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
<td style="text-align: left;"><strong>cannotGoThatWayInDark<br />
</strong></td>
<td style="text-align: right;"><a
href="cannotgothatway.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="roomdarktravel.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
By default, the cannotGoThatWayInDark method of a Room (or
BasicLocation) displays a message to the effect that you can't see where
you're going in the dark. We might want to change that in particular
cases. For example, the description of the crewQuarters suggests that
there's a ladder leading down into the hold. If the player character
goes blundering about the crewQuarters in the dark there's always the
danger that he or she will end up falling down the ladder and kill
themselves. To be fair, though, we may first want to warn the player
character that wandering around in the dark could prove dangerous, so we
might do it this way:  
  
crewQuarters : DarkCabin 'Crew Quarters' 'the crew quarters'  
  "The crew quarters seem largely deserted. There's an exit back aft and a  
   ladder leading down into the hold. "  
   down = holdLadderDown  
   aft = greatCabin  
   **cannotGoThatWayInDark()     
     {  
       darkEvents.doScript();           
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
   }**  
;  
  
Note that the endGame function isn't part of the standard library; it's
used here as a convenient wrapper for the finishGameMsg function., so
the next job is to define this function:  
  
function endGame(msg)  
{  
  finishGameMsg(msg, \[finishOptionUndo, finishOptionFullScore\]);  
}  
  
The purpose is to avoid having to specify the same options
(finishOptionUndo, finishOptionFullScore) each time we want to end the
game. The call to endGame(ftDeath) prints a "YOU HAVE DIED" message and
ends the game with a set of options such as UNDO, RESTART, FULL SCORE or
QUIT; endGame(ftVictory) would do the same but with the message "YOU
HAVE WON". You can also supply your own message by supplying a
single-quoted string as the msg argument, e.g. endGame('YOU HAVE FAILED
DISMALLY').  
  
Note also that there is one situation that the code above does not
handle, namely if the player tries to go DOWN from the crewQuarters.
We'll fix that next by overriding
[roomDarkTravel](roomdarktravel.html).  
  
  
