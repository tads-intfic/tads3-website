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
<td style="text-align: left;"><strong>AccompanyingInTravelState : <a
href="overview-actorstates.html">ActorState</a><br />
</strong></td>
<td style="text-align: right;"><a
href="accompanyingstate.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="guidedtourstate.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
You'll have noticed that when Sarah follows you around, you see a
message "The young woman comes with you." This is a decent enough
default message for the purpose, but if you wanted to change it, here's
how.  
  
First, we need to define a custom class derived from
AccompanyingInTravelState, then we need to override its
**sayDeparting(conn)** method to display whatever message we want in
place of "The young woman comes with you. " We can also override the
**specialDesc** property to display whatever we'd like shown in the room
description to describe Sarah's presence on the arriving turn. We could,
for example, take advantage of this to vary randomly the message
displayed each time in an effort to make it look a little less
repetitive and mechanical:  
  
class SarahInTravelState : AccompanyingInTravelState  
  sayDeparting(conn) { departMessages.doScript; }  
  specialDesc { arriveMessages.doScript; }  
  departMessages : ShuffledEventList  
  { \['{The sarah/she} comes with you. ',  
     '{The sarah/she} follows you. ',  
     '{The sarah/she} trails faithfully along behind. ',  
     '{The sarah/she} follows hot on your heels. ',  
     '{The sarah/she} walks along beside you. ',  
     '{The sarah/she} accompanies you.'  
  \] }  
  arriveMessages : ShuffledEventList    
  { \[ '{The sarah/she} is at your side. ',  
      '{The sarah/she} is still with you. ',  
      '{The sarah/she} is standing close by. ',  
      '{The sarah/she} takes a quick look around. ',  
      '{The sarah/she} looks at you expectantly. '       
  \] }  
;  
  
For this to do anything, we need to change the AccompanyingState to make
use of this new AccompanyingInTravel state by overriding its
**getAccompanyingTravelState(leadActor, conn)** method:  
  
+ sarahFollowing : AccompanyingState  
  specialDesc = "{The sarah/she} is standing beside you. "  
  stateDesc = "She's standing beside you. "  
   ...  
  **getAccompanyingTravelState(leadActor, conn)  
   { return new SarahInTravelState(location, leadActor, self); }    
**;  
  
Note that the third parameter (self) in this new SarahInTravelState call
is the ActorState to which the Actor will return on completion of
travel; normally we want this to be the AccompanyingState (hence 'self')
that set the AccompanyingInTravelState up, but we could, if special
circumstances warranted it, insert some other ActorState here if we
wanted the actor to change into some other state at this point (perhaps
after traversing a particular connector).  
  
  
  
  
  
