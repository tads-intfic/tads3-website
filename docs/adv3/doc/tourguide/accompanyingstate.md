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
<td style="text-align: left;"><strong>AccompanyingState : <a
href="overview-actorstates.html">ActorState</a><br />
</strong></td>
<td style="text-align: right;"><a
href="hermitactorstate.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="accompanyingintravelstate.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
If you want an NPC to follow your player character around, you need to
put that NPC into an AccompanyingState, when by default he or she will
then follow any actor wherever that actor goes. In practice you may want
to limit this over-eager behaviour, which you can do by overriding the
**accompanyTravel(leadActor, conn)** method to return true only for the
combinations of leadActor and connector that you want the NPC to follow;
typically, for an NPC who's following the PC around, you might override
this method to { return leadActor==gPlayerChar; } but you could apply
further qualifications if, for example, there were certain connectors
you didn't want this NPC to follow your PC through. The other method
distinctive to AccompanyState is **getAccompanyingTravelState(leadActor,
conn)**, which returns the associated
[AccompanyingInTravelState](accompanyingintravelstate.html) (which we'll
explain shortly). AccompanyingState also inherits all the
[ActorState](overview-actorstates.html) methods we've already seen, not
least **arrivingTurn()**.  
  
The NPC who's been elected to follow the PC on his travels in this game
is the young woman Sarah. She's lost her diamond ring and won't follow
the PC around until he's given it to her, so we'll put temporary
handling on the sarah object to switch her into her AccompanyingState
when she's given the ring (note that this isn't how we'd normally do it;
here it's a temporary expedient until we come to GiveTopic).  
  
sarah : Person 'attractive young woman/brunette' 'young woman' @lakeRoom  
  "She's an attractive brunette, somewhere in her mid-twenties. "  
  isHer = true  
  properName = 'Sarah'  
  globalParamName = 'sarah'  
    
  /\* The next section of code is NOT how we'd do it for real -   
   \* As we'll see this is MUCH better handled using a GiveTopic,  
   \* but since we haven't got to GiveTopic yet we have to use  
   \* the bad old way.  
   \*/  
  iobjFor(GiveTo)    
  {  
    verify() { }  
    check()   
    {  
      if(gDobj != diamondRing) inherited;  
    }  
    action()  
    {  
     if(gDobj == diamondRing)  
     {  
      "\<q\>Great! I\\ve been looking for that!\</q\> she declares, \<q\>Since  
       you seem to know what you\\re doing, I think I\\ll stick with you  
       from now on.\</q\>\<.p\>";  
       gDobj.moveInto(sarah);  
       setCurState(sarahFollowing);  
     }  
    }   
  }  
;  
  
+ sarahFollowing : AccompanyingState  
  specialDesc = "{The sarah/she} is standing beside you. "  
  stateDesc = "She's standing beside you. "  
  accompanyTravel(leadActor, conn)   
    { return leadActor == gPlayerChar; }  
;  
  
If you try this out you'll find it works - after a fashion. Sarah will
follow you around (in a strangely silent kind of way) so long as you're
moving from room to room, but won't follow you into a nestedRoom. This
may be fine, but does mean that, for example, if you get on the
snowMobile and ride off, Sarah won't follow you. Even, if Sarah *had*
followed the PC onto the snowmobile, she'd still be described as
"standing beside you", whereas at that point we need her to be described
as "sitting behind you." To fix the first set of problems we need a
different ActorState for Sarah when she's on the snowmobile, and an
appropriate test for making Sarah get on and off the snowmobile and
change states. Here's how we might do it with the tools we've seen so
far:  
  
+ sarahFollowing : AccompanyingState  
  specialDesc = "{The sarah/she} is standing beside you. "  
  stateDesc = "She's standing beside you. "  
  accompanyTravel(leadActor, conn)   
    { return leadActor == gPlayerChar; }  
  afterAction()  
    {  
      if(gPlayerChar.isIn(snowMobile))  
      {  
        getActor.setCurState(sarahOnSnowMobile);  
        nestedActorAction(getActor, SitOn, snowMobile);  
        "{The sarah/she} gets on the snowmobile behind you. ";  
      }  
    }  
;  
  
+ sarahOnSnowMobile : HermitActorState  
  specialDesc = "{The sarah/she} is sitting behind you. "    
  afterAction()  
  {  
    if(!gPlayerChar.isIn(snowMobile))  
    {  
      getActor.setCurState(sarahFollowing);  
      nestedActorAction(getActor, GetOutOf, snowMobile);  
      "{The sarah/she} climbs off the snowmobile after you. ";  
    }  
  }  
  noResponse = "\<q\>Let's just get moving, shall we?\</q\> she suggests.\<.p\>"  
;  
  
Strictly speaking this isn't how we'd normally use a HermitActorState,
since the noResponse message actually is a response; in this case it's a
convenient shortcut, and we haven't encountered DefaultAnyTopic yet.  
