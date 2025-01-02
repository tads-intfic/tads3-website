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
<td style="text-align: left;"><strong>CyclicEventList : <a
href="eventlist.html">EventList</a><br />
</strong></td>
<td style="text-align: right;"><a
href="stopeventlist.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="randomeventlist.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A CyclicEventList is just like an EventList, except that it keeps
looping round the list; once it reaches the last item in the list it
goes back to the first, and carries on round indefinitely.  
  
Although one would normally want to randomize the events that occur (or
strings that are displayed), there may be occasions when you want more
control over the sequence of events. For example, when our intrepid
adventurer finally reaches the side of the volcano, he'll have to wait a
couple of turns until the volcano happens to set fire to a nearby bush
before the bush can be pulled up revealing a small hole into the side of
the volcano. We could control this by means of a CyclicEventList linked
to a StopEventList that sets fire to the bush first time round and
merely displays some text thereafter. The following code shows how we
might go about this, at the same time providing several other examples
of EventLists, an example of a [SenseDaemon](sensedaemon.html), and a
means of disposing of the pesky Golden Banana of Discord:  
  
  
sideOfVolcano : OutdoorRoom 'Side of Volcano' 'the side of the volcano'  
   "Halfway up the side of the volcano the path up from the basalt plain  
    peters out. There's no obvious way to climb any further up from here,  
    and the fact that the volcano is continuously belching fire, smoke,  
    ash, and the occasional rock and dollop of lava probably would   
    probably make any further progress up its side more than a little   
    perilous. "  
   down = volcanoPathDown  
   in = bushHole  
   atmosphereList : CyclicEventList   
   {  
    \[  
      'A loud rumbling comes from deep inside the mountain. ',  
       lexicalParent.rockFallList,  
       nil  
    \]  
   }  
  
   rockFallList : StopEventList  
   {  
    \[  
      'High above your head a shower of flame and sparks issues from the  
        top of the volcano, sending blazing rocks tumbling down the  
        hillside. ',  
      new function   
      {  
        "A blazing rock comes hurtling down the hillside, narrowly  
         missing you but setting the bush ablaze. ";  
         bush.daemonID = new SenseDaemon(bush, &burnDaemon, 1, bush, sight);  
      },  
      'A shower of sparks and rocks spews from the volcano above your head. '       
    \]  
   }  
;  
  
+ bush: CustomImmovable 'desiccated burning bush' 'desiccated bush'  
  "The bush is \<\<daemonID == nil ? 'little more than a collections of  
   dried sticks, with only the occasional apology for a leaf doing duty  
   for foliage' : 'ablaze'\>\>. "   
  inRoomDesc = "The only sign of life on this barren hillside  
    is a desiccated bush. "  
  burnDaemon { eventList.doScript; }  
  daemonID = nil    
  eventList : EventList  
  {  
  \[  
    'The bush is alight. ',  
    'The bush is burning furiously. ',  
    'The bush is starting to burn out. ',  
    &swap  
  \]    
  swap()  
   {  
    "The flames on the bush die out, leaving only charred remains. ";  
    lexicalParent.daemonID.removeEvent();  
    lexicalParent.daemonID = nil;  
    burnedBush.moveInto(lexicalParent.location);  
    lexicalParent.moveInto(nil);  
   }  
  }  
  cannotTakeMsg = 'Tug as {you/he} will, the bush will not quite come  
    free of the ground. '  
;  
  
  
+ volcanoPathDown : StairwayDown 'narrow down path' 'narrow down path'  
;  
   
+ bushHole : HiddenDoor 'small hole' 'small hole'  
  "The small hole exposed by pulling up the burned-out bush looks  
   just large enough to crawl through. "  
  destination = volcanoTunnel   
  isOpen = (burnedBush.isPulled)  
;   
   
burnedBush : Lever, Fixture 'burned bush' 'burned bush'   
  "All that remains are the charred remains of the bush. "  
  makePulled(stat)  
  {  
    if(stat)  
    {  
      "When {you/he} pull{s} at the burned-out bush, it comes clear of the  
       ground, sending a shower of dried earth tumbling down the hillside  
       and revealing a small hole in the hillside. ";       
    }  
    else  
    {  
      "You push the remains of the bush back into the hole. ";  
    }     
    inherited(stat);     
  }  
;   
  
volcanoTunnel : DarkRoom 'Narrow Tunnel' 'the narrow tunnel'  
  "This narrow tunnel is only just about large enough to crawl  
   through. One way it carries on north deep into the volcano, while  
   the other way (south) leads back out. "  
  out asExit(south)  
  in asExit(north)  
  north = volcanoLedge  
  south = sideOfVolcano  
;  
  
volcanoLedge : Room 'Ledge inside Volcano' 'the ledge inside the Volcano'  
  "This narrow ledge, on the inside of the volcanic crater, overlooks a  
   heaving pool of lava below. It's very hot here and probably not a  
   healthy place to be, but the only way out is through a small hole  
   in the side of the crater. "  
   in = volcanoTunnel  
   south asExit(in)  
   atmosphereList : EventList  
   {  
     \[ nil,   
      'A plume of lava shoots up from the pool, throwing rocks out  
       of the crater mouth above. ',  
       nil,  
      'A second plume of lava bubbles up from the pool, narrowly  
       missing the ledge. ',  
      'Yet another jet of steam, lava, rocks and ashes shoots up  
       from the pool, uncomfortably close. ',  
      {: "This time, the hissing lava bubbling up from the lake  
       strikes the ledge, scalding you to death.\b\<\<endGame(ftDeath)\>\>" }  
     \]           
   }  
   enteringRoom(traveler)  
   {  
     atmosphereList.curScriptState = 1;  
   }  
;  
  
+ Enterable -\>volcanoTunnel 'small hole' 'small hole'  
  "The small hole in the crater wall is just about large enough to  
   crawl through and looks like the only way to leave the ledge. "  
;  
  
+ Distant 'lava pool' 'lava pool'  
  "The pool of seething red lava is bubbling away about two hundred yards  
   beneath the ledge, accordingly throwing up flaming rocks and spurts  
   of lava. "  
  iobjFor(ThrowAt) asIobjFor(ThrowTo)  
  iobjFor(ThrowTo)  
  {  
    verify() {}      
  }   
  throwTargetCatch(obj, path)   
  {   
     "\\\<\<obj.theName\>\> drops into the bubbling pool of lava and disappears  
        out of sight, lost forever. ";  
      obj.moveInto(nil);  
  }  
;  
  
  
Note, that at the moment, there's no way to reach the sideOfVolcano room
to try all this out other than using POW DESICCATED BUSH if you've
included ncDebugActions with your code.  
