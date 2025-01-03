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
<td style="text-align: left;"><strong>Vehicle : <a
href="nestedroom.html">NestedRoom</a>, Traveler<br />
</strong></td>
<td style="text-align: right;"><a href="booth.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="vehiclebarrier.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A Vehicle is a special kind of NestedRoom that can move around with
actors inside. Specifically, if the player character is aboard a vehicle
and the player issues a movement command (such as NORTH, IN, or GO
THROUGH DOOR) it is the vehicle that moves (conveying the player
character and any other passengers with it).  
  
Note that the Vehicle class is not the only way in which to implement a
vehicle, both the ship and the Tardis have shown that vehicles in the
broader sense can often be implemented as one or more rooms whose exits
can be manipulated to produce the desired movement effect. The Vehicle
class is suited for relatively small vehicles, such as bicycles or
horses, that don't provide a complete location in themselves, and that
it seems reasonably natural to control with the standard movement
commands. A character on a horse might reasonably regard riding a horse
as a little like a faster form of walking, allowing him or her to roam
over the countryside as freely as s/he would on foot. A character in a
car is usually restricted to roads, and this perhaps forms a borderline
case; it may be you don't want to implement the mechanics of driving in
your game and you provide a reasonably comprehensive network to drive
round, and in that case the car might appropriately be implemented as a
Vehicle. For larger vehicles, especially those restricted in where they
can travel, such as ships, aircraft and buses, it is probably better to
implement the Vehicle as one or more Rooms.  
  
Another rule of thumb to apply when deciding whether to use the Vehicle
class is how, in the context of the game, it is most natural to think of
the actor's location. On a bicycle or on the back of a horse, you might
think of yourself as primarily on the sloping plain or the cycle path,
and only secondarily on the horse or bicycle. You would expect the room
name to be shown as "Sloping Plain (sitting on the horse)" rather than
"Back of Horse". Conversely, aboard a ship or even a boat you might
expect the room name to be "Aboard the Boat" rather than "Somewhere in
Lake (sitting in the boat)". In the former case, but not the latter,
you'd want to use a vehicle.  
  
To make a Vehicle actually useful and not merely a cosmetic equivalent
to walking, it ought to be able to take the player character where he
would not otherwise be able to go. To show how we might do this, we'll
create a snow-covered world (which you reach with the Tardis), where the
combination of snow and distance make it impossible to get very far
without a snowmobile. To make the snowmobile a bit more realistic, we'll
make it necessary to start up its engine before it'll go anywhere. We'll
start the snowmobile off in a small wooden hut:  
  
insideHut : Room 'Inside the Wooden Hut' 'inside the hut'  
  "This interior of this hut affords scant shelter from the biting cold wind  
   outside. "  
  out = snowCliff  
;  
  
+ snowMobile : Vehicle, Chair, Heavy 'snowmobile' 'snowmobile'  
  "It looks vaguely like a large motorbike on sleds. There are two seats,  
   one behind the other, with handlebars at the front, in the centre of  
   which is mounted the starter button and a small switch. "  
  specialDesc = "The two-seater snowmobile rests on the ground. "  
  initSpecialDesc = "A two-seater snowmobile stands at one end of the hut. "  
  useSpecialDesc = (!gPlayerChar.isIn(self))  
  engineOn = nil  
  travelerPreCond(conn) { return \[snowEngineOn\]; }  
  bulkCapacity = 20    
;  
  
There's a few things to note about the customization here. Firstly, we
include Chair and Heavy in the class list so that the player character
(and a passenger) can sit on the snowmobile, but can't pick it up.
Because we've used Heavy, the snowMobile wouldn't normally be listed in
room descriptions, but because it will be moving around, we need it to
show up; accordingly we give it a specialDesc and an initSpecialDesc. If
the player character is sitting on the snowmobile, however, we don't
need these descriptions, since the presence of the snowmobile will be
stated in the room name (e.g. "Inside the Wooden Hut (sitting on the
snowmobile)", so we override useSpecialDesc only to return true when the
player character is not sitting on the snowmobile. We define a custom
engineOn property that we'll come to in a moment. The main thing it will
do is disallow travel on the snowmobile unless it's true. To enforce
this condition we override the **travelerPreCond(conn)** method to
return a custom precondition we'll define shortly.  
  
But first, we'll define the two essential components of the snowmobile,
the button and the switch that control its engine (we should also define
handlebars and seats since the description of the snowmobile mentions
them, but that will be left as an exercise for the reader), together
with the noise it makes:  
  
++ Button, Component 'starter button' 'starter button'    
   dobjFor(Push)  
   {  
     verify()  
     {  
       if(snowMobile.engineOn)  
         illogicalNow('The snowmobile\\s engine is already running. ');  
     }  
     check()  
     {  
       if(!starterSwitch.isOn)  
         failCheck('Nothing happens. ');  
     }  
     action()  
     {  
       "The snowmobile's engine roars into life. ";  
       snowMobile.engineOn = true;   
       engineNoise.makePresent();        
     }      
   }     
;  
  
++ starterSwitch : Switch, Component 'small black switch/engine' 'small switch'  
   "It's a small black switch mounted at the centre of the handlebars, next  
    to the button. "  
   makeOn(val)  
   {  
     inherited(val);  
     if(val==nil && snowMobile.engineOn)  
     {  
       "The snowmobile engine lapses into silence. ";  
       snowMobile.engineOn = nil;  
       engineNoise.makePresentIf(nil);  
     }  
   }  
   verifyDobjListenTo { logicalRank(50, 'silent'); }  
   soundDesc = "The engine is currently silent. "  
;  
  
++ engineNoise : PresentLater, SimpleNoise 'engine/noise' 'engine'  
   "The snowmobile engine is purring quietly as it ticks over. "  
   isAmbient = nil  
;  
  
This arrangement ensures that to start the engine you have to turn on
the switch and push the button; to stop the engine you merely need to
turn off the switch. We make the engineNoise a PresentLater so that it
can easily be brought in or out of play according to whether the engine
is on or off; we could make it more sophisticated than a SimpleNoise,
but a SimpleNoise will do the job reasonably well. Note that we have
overridden its isAmbient property to be nil, so that when the engine is
running we'll see a description of its noise every turn. This is fair
enough given the fairly limited travel that will actually be performed
on the snowmobile. The other point to note here is how we handle LISTEN
TO ENGINE. Since the player might legitimately try to TURN ON ENGINE or
SWITCH OFF ENGINE, we add engine to the vocabWords of the starterSwitch.
When the engine is off, this is the object to which LISTEN TO ENGINE
will apply, so we give it a soundDesc to report that the engine is
silent. But when the engine is on we'd rather that LISTEN TO ENGINE was
handled by the engineNoise object, so we make
starterSwitch.verifyDobjListenTo return a relatively low logicalRank
(the default would be 100). This means that when the engineNoise is
present, the parser will accept it as the more logical argument to
handle the LISTEN TO ENGINE command, but when it is absent, the
starterSwitch will handle the command and report the silence of the
engine (to be sure EXAMINE ENGINE won't be handled quite so felicitously
as things stands, but again, that can be left as an exercise for the
reader; to do the job properly you might need a separate engine object
that redirects turn on and turn off commands to the switch).  
  
The next job is to define the precondition that stops the snowmobile
from moving when its engine is not running. This is actually a bit
easier than it may at first seem; basically all we need to do is to
define an object of the PreCondition class and write a
**checkPreCondition** method that performs the requisite check:  
  
snowEngineOn : PreCondition  
   checkPreCondition(obj, allowImplicit)   
   {   
     if(!snowMobile.engineOn)  
     {   
       reportFailure('The snowmobile doesn\\t budge. ');  
       exit;  
     }   
     else if(obj.travelBarrier.indexOf(snowmobileBarrier) == nil)  
       "The snowmobile emits a healthy roar from its engine as it   
         sets off. ";  
   }  
;  
  
We are cheating slightly here by using the PreCondition to report the
noise the snowmobile makes if it *does* move off. This isn't the
official use of a precondition, but it happens to be a convenient
place - perhaps about the only convenient place - to display a message
describing this sound each time the snowmobile moves. Without it, the
snowmobile becomes a bit ghostly - we're reported as sitting on the
snowmobile each turn, but it's not made explicit that the snowmobile has
conveyed us. But we don't want this message displayed if the snowmobile
doesn't actually move, and there's another reason it might not move
besides its engine being switched off: the player might try to take it
somewhere we decide a snowmobile shouldn't go. To restrict its movements
we'll be setting up a special kind of TravelBarrier called a
[VehicleBarrier](vehiclebarrier.html), which is what we'll be looking at
next. Here we check for the presence of that VehicleBarrier among the
travel barriers associated with the connector via which the snowmobile
is being asked to travel, which connector is fortunately provided for us
in the obj parameter of the checkPreCondition method.  
  
  
  
  
  
