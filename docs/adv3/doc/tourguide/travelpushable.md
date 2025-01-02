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
<td style="text-align: left;"><strong>TravelPushable : <a
href="immovable.html">Immovable</a><br />
</strong></td>
<td style="text-align: right;"><a
href="prerestartobject.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="pushtravelbarrier.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A TravelPushable is an object that can't be picked up but can be pushed
from one location to another (by the player issuing commands such as
PUSH WHEELBARROW NORTH or PUSH BARROW INTO SHIP). As a simple example we
can implement a wheelbarrow that would be useful for moving the gold
tablet around:  
  
wheelBarrow : TravelPushable, Container 'old tin wheel wheelbarrow/barrow'   
  'wheelbarrow' @graveyard  
  "It's an old tin wheelbarrow, a bit battered, but seemingly still   
     in serviceable condition. "  
  initSpecialDesc = "An old tin wheelbarrow lies forgotten in one corner of the graveyard. "    
  specialDesc = "The old tin wheelbarrow rests here. "  
  cannotTakeMsg = 'The wheelbarrow is a bit too heavy and cumbersome to carry around.   
  Pushing it would probably prove more productive. '  
;  
  
Since TravelPushable inherits from Immovable, it's a good idea to give
the wheelbarrow a specialDesc as well as an initSpecialDesc to make sure
that it gets listed in room descriptions. Although the default message
you get when you try to take a TravelPushable is okay, we customize it
here to say the same thing but in a manner slightly more tailored to the
specific object; we do this by overriding **cannotTakeMsg** with a
single-quoted string (it must contain either a single-quoted string or a
property pointer).  
  
This wheelbarrow will work fine as it is, and will certainly help with
carting the gold tablet around. One refinement we could add is to
improve on the "You push the wheelbarrow into the area" that appears
each time the barrow is pushed somewhere. We can take advantage of the
fact that we've defined a destName on every location to override
describeMovePushable with something a bit more specific:  
  
modify TravelPushable  
  describeMovePushable(traveler, connector)  
     {  
         if (gActor.isPlayerChar)  
           "You push \<\<theName\>\> into \<\<location.destName\>\>. ";  
     }  
;  
  
For a more complex example, let's start filling in some of the detail on
the south side of the lake. The tunnel south from the shore will soon
come to a deep uncrossable chasm. However, a stone monolith waits on the
shore; if the player pushes it into the chasm, the monolith then forms a
bridge that can be crossed. The main trick here is to make the chasm a
room in its own right, and, recognizing that a Room is also a
TravelConnector, override its canTravelerPass and explainTravelBarrier
methods to prevent travel unless either the monolith is already in the
chasm or it is in the process of being pushed into the chasm:  
  
southShore : Room 'Rocky shore' 'the rocky shore'  
   "The rocky shore looks so barren here as to be scarcely worth visiting, apart  
    from a narrow tunnel leading off to the south**"  
   finalDesc = ". " // for the custom finalDesc property see our [inRoomDesc modification](specialdesc.html#roomdesc)  
   south = narrowTunnel**     
;  
  
+ monolith : TravelPushable 'large black monolith' 'black monolith'  
  "Deep black in colour, it's a smooth black oblong about six feet by three, and   
   about six inches thick. \<\<isIn(deepChasm) ? 'Currently, it\\s wedged in the  
   chasm, forming a precarious bridge. ' : nil\>\>"  
  initSpecialDesc = ""   
  specialDesc = "\<\<isIn(deepChasm) \|\| travelInProgress ? ''   
        : 'The black monolith stands on the ground. '\>\>"  
  inRoomDesc() { if(!moved) ", and a black monolith projecting out of the rocks"; }  
  cannotTakeMsg = 'There\\s no way anyone\\s going to lift that great block of stone. '  
  dobjFor(PushTravel)  
  {  
    verify()  
      {  
        if(isIn(deepChasm))  
        {  
          illogicalNow ('For one thing you\\re standing on the monolith, and  
           for another it\\s wedged firmly (you hope) in the chasm. ');  
        }  
        else  
          inherited;  
      }    
    action  
     {  
       travelInProgress = true;  
       inherited;  
       travelInProgress = nil;  
     }  
  }  
  travelInProgress = nil  
  describeMovePushable(traveler, connector)  
     {              
         if (location == deepChasm)  
         {  
           "The monolith has toppled into the chasm, forming a precarious bridge of sorts,  
            on which you're now standing. ";  
            setSuperclassList(\[Floor\]);  
            deepChasm.roomParts += self;                         
         }  
         else  
           inherited(traveler, connector);    
     }  
  beforeMovePushable(traveler, connector, dest)   
  {   
     if(connector == deepChasm)  
      "You push the monolith towards the edge of the chasm; as it reaches   
       the edge it begins to topple.\b";  
     else  
       "The monolith is \<i\>very\</i\> heavy, but with a supreme effort   
        than nearly gives you three hernias and four burst blood  
        vessels you manage to start pushing it. ";  
  }  
  dobjFor(SitOn)  
  {  
    preCond = inherited + actorDirectlyInRoom  
    verify()  
    {  
      if(ofKind(Floor) && gActor.isIn(deepChasm))  
        logicalRank(140, 'most likely floor' );  
      else if(ofKind(Floor))  
        nonObvious;    
      else  
        inherited;  
    }  
  }  
  dobjFor(LieOn)  
  {  
    preCond = inherited + actorDirectlyInRoom  
    verify() { if(ofKind(Floor)) verifyDobjSitOn; else inherited; }  
  }  
;  
  
narrowTunnel : DarkRoom 'Narrow Tunnel' 'the narrow tunnel'  
  "This short section of tunnel leads south from the rocky shore, but then  
    comes to an abrupt end at the edge of a deep chasm. Another tunnel continues  
    south from the ledge on the far side of the chasm. "  
  north = southShore  
  south = deepChasm  
;  
  
MultiLoc, Enterable -\>deepChasm 'deep chasm' 'deep chasm'  
  "\<\<deepChasm.desc\>\>"  
  locationList = \[narrowTunnel, chasmLedge\]  
;  
  
deepChasm : DarkRoom 'Deep Chasm' 'the deep chasm'  
  "The chasm is not something you want to look down if you suffer from  
   vertigo; but a long way below, almost too far down to see, runs a narrow, inky river.   
   The chasm is about six feet wide, too far to jump\<\<monolith.isIn(self) ? ',  but a  
   stone monolith forms a bridge of sorts across it' : nil\>\>. "  
  north = narrowTunnel  
  south = chasmLedge  
  canTravelerPass(traveler)   
    {return monolith.isIn(self) \|\| monolith.travelInProgress; }  
  explainTravelBarrier(traveler)  
  {  
    "The chasm is too wide to jump over, and you certainly don't  
     want to fall into it. ";  
  }  
  cannotGoThatWayMsg = 'Stepping off the monolith into the chasm would mean  
   falling to almost certain death. '  
  roomParts = \[defaultCeiling\]    
  lookAroundWithinName(actor, illum)  
  {  
    inherited(actor, illum);  
    if (actor.posture == standing)   
     " (standing on \<\<monolith.theName\>\>)";      
  }  
;  
  
+ inkyRiver : Distant 'narrow inky black river/water' 'river'  
  "The narrow river runs along the bottom of the chasm about a hundred feet or so below;  
   its water looks inky black in the near darkness down there. "  
;  
  
chasmLedge : DarkRoom 'Ledge of Chasm' 'the ledge of the chasm'  
  "A deep, wide chasm splits the ground immediately to the north of this  
   narrow ledge, while a dark tunnel runs south. Another tunnel can be   
   seen leading north from the far side of the chasm. "  
  north = deepChasm  
  
;  
  
One trick here is to override deepChasm.lookAroundWithinName so that it
adds "(standing on the black monolith)" to the name of the room when the
player character is indeed standing (the inherited behaviour will deal
with sitting and lying).  
  
The other trick here is to make the monolith transform itself into a
Floor and add itself to the chasm's roomParts once it arrives in the
chasm, so that we get the right responses if the player SITS or LIES
there. Also, since the defaultFloors of the adjacent rooms will also be
in scope thanks to the [DistanceConnector](distanceconnector.html) we'll
be adding later, we need to make the monolith the most likely item to
sit or lie on when we're directly on top of it, but not when we're in
one of the adjacent locations. Conversely, we add actorDirectlyInRoom to
the preconditions for sitting or lying on the monolith to prevent the
otherwise rather odd behaviour that will occur (once the
DistanceConnector is in place) when the player character attempts to sit
or lie on the monolith while he's in an adjacent location.  
