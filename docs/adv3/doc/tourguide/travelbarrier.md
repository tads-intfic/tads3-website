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
<td style="text-align: left;"><strong>TravelBarrier : object<br />
</strong></td>
<td style="text-align: right;"><a href="exitportal.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="askconnector.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
In all the examples we have used so far, when we have wanted to prevent
travel via a TravelConnector, we have overridden its canTravelerPass
method to determined whether travel is permitted, and its
explainTravelBarrier method to explain why travel is forbidden (if it is
forbidden). Normally this is the simplest and most convenient way to do
it - but there is another way, and that is to use TravelBarrier
object.  
  
A TravelBarrier is simply an object that defines canTravelerPass and
explainTravelBarrier methods. A single TravelBarrier, or a list of
TravelBarriers, can be attached to a TravelConnector via its
travelBarrier property. This can be useful in a number of cases.  
  
The first case is when a specialized type of TravelBarrier, such as the
[PushTravelBarrier](pushtravelbarrier.html), is required.  
  
The second case is where you want to enforce the same barrier conditions
on a number of different TravelConnectors. Rather that write the same
canTravelerPass and explainTravelBarrier methods on two or more
TravelConnectors, you can define them once on a TravelBarrier object
then attach the object to each of the TravelConnectors to which it
applies. For example, suppose you want to prevent the player traveling
either north or east from a particular location without the lamp, you
could define:  
  
lampBarrier : TravelBarrier  
   canTravelerPass(traveler) {return lamp.isIn(traveler); }  
   explainTravelBarrier(traveler} { "You forgot the lamp! "; }  
;  
  
Then, on the relevant location you could define:  
  
north : OneWayRoomConnector { -\> darkPassage  travelBarrier = lampBarrier }  
  east : OneWayRoomConnector { -\> darkCorridor travelBarrier = lampBarrier }  
 south = lampRoom  
  
The third case is where you want to perform a number of separate checks,
each of which would result in a different failure message. Rather than
write a long switch statement or series of if statements in the
explainTravelBarrier method of the TravelConnector, you could define a
number of TravelBarrier objects that pair the condition with the
message. For example, supposing that at another point in your journey,
you want not only to enforce the condition that the player has the lamp,
as above, but also that he's not wearing the stolen jacket. You might
then define another TravelBarrier object:  
  
jacketBarrier : TravelBarrier  
   canTravelerPass(traveler) {return !jacket.isWornBy(traveler); }  
  explainTravelBarrier(traveler) { "You'll stand out a mile wearing Lord Ponsonby's jacket in there! "; }  
;  
  
Then you can attach both TravelBarriers to the same connector:  
  
  in : OneWayRoomConnector { -\> pompousClubLobby    
                                travelBarrier = \[lampBarrier, jacketBarrier \]  
                           }  
  
What happens is that among the checks carried out in the
checkDobjTravelVia method of a TravelConnector is a call to
checkTravelBarriers; this first checks the canTravelerPass method of the
TravelConnector itself, then works through the list of TravelBarriers
(if any) in the travelBarrier property, calling each of their
canTravelerPass methods in turn. If any of these canTravelerPass methods
returns nil, the travel is aborted and the corresponding
explainTravelBarrier method is called.  
  
  
