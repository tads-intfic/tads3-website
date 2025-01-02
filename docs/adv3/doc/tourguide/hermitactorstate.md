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
<td style="text-align: left;"><strong>HermitActorState : <a
href="overview-actorstates.html">ActorState</a><br />
</strong></td>
<td style="text-align: right;"><a
href="overview-actorstates.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="accompanyingstate.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
The HermitActorState is used for when an actor is too preoccupied, or is
otherwise unable or unwilling to response to conversational approaches
from the PC (such as TALK TO, ASK ABOUT, or SHOW TO). When the PC
addresses any such commands to an Actor in a HermitActorState, the
message defined in the HermitActorState's **noResponse** property is
displayed.  
  
None of the actors we have defined so far have any cause to enter a
HermitActor state in any situation we have provided so far, but to show
the principle we'll add a (somewhat tongue-in-cheek) permanently
unresponsive actor:  
  
skeleton : Actor, Heavy 'bleached skeleton' 'skeleton' @redRavine  
  "The bones have long since been bleached white, but it's undoubtedly  
   a human skeleton, of a person who was once about 5'9\\ tall. "  
;  
  
+ HermitActorState  
  specialDesc = "A bleached skeleton lies on the ground, one arm outstretched  
   towards the south. "  
  noResponse = "The skeleton is a bit too dead to attend to you right now. "  
  isInitState = true  
;  
  
If you wanted something really macabre, you could add more actor states
to the skeleton object so that at some point it comes to life - but one
ghost in a game is probably enough. Instead, we'll give another example
of a temporary HermitActorState in the next section.  
  
