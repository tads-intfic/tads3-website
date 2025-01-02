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
<td style="text-align: left;"><strong>GuidedInTravelState : <a
href="accompanyingintravelstate.html">AccompanyingInTravelState</a><br />
</strong></td>
<td style="text-align: right;"><a
href="guidedtourstate.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="inconversationstate.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
The GuidedInTravelState is the version of AccompanyingInTravelState for
use with the GuidedTourState. According to the comments in the library
code, it is:  
  
*A subclass of the basic accompanying travel state specifically designed
for guided tours. This is almost the same as the basic accompanying
travel state, but provides customized messages to describe the departure
of our associated actor, which is the actor serving as the tour guide.  
*  
This is how we might customize the messages from the last stage of
Sarah's brief guided tour, making use of the GuidedInTravelState:  
  
+ sarahGuide4 : GuidedTourState  
  stateAfterEscort = sarahTalking  
  escortDest = lakeDoor  
  arrivingWithDesc = "{The sarah/she} walks briskly over to the door,  
   then stops to wait for you. "  
  stateDesc = "She's waiting for you by the door. "  
  specialDesc {inherited; stateDesc; }  
  **escortStateClass = sarahGuidedState  
**;   
  
class sarahGuidedState : GuidedInTravelState  
 sayDepartingThroughPassage(conn)  
 {  
    "{The sarah/she} goes out through the door. ";  
 }  
 specialDesc = "{The sarah/she} stops by the lakeside and starts  
   searching the ground once more. "   
;  
  
Note that we have to override sayDepartingThroughPassage(conn) here
because Sarah will be going through the door.  
