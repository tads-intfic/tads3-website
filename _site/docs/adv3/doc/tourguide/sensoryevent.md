<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>SensoryEvent : object<br />
</strong></td>
<td style="text-align: right;"><a
href="senseconnector.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="attachables-overview.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
So far we have added a means of passing sound from the bomb to
neighbouring occasions, but we've yet to create a sound to pass. Unlike
the ticking of the bomb, which is continuous (until the bomb detonates),
its explosion is one-off (and dramatic). We can represent it with a
SensoryEvent, or more specifically, a SoundEvent (one of the subclasses
of SensoryEvent along with SightEvent and SmellEvent). The definition of
the SoundEvent could hardly be simpler:  
  
explosionEvent : SoundEvent;  
  
There *are* a couple of properties you can play with on this class if
you really want to: the **sense** property contains the sense in which
the event is observable, but it's fairly obvious that for a SoundEvent
this can only be sound (as the library indeed defines it); to define an
event as a SoundEvent and change its sense property to smell would be
perverse, confusing, and, well, pretty senseless. You might have
occasion to define something different here if you wanted an event
making use of a different kind of sense you had defined yourself, such
as a burst of microwaves to be picked up by a radar receiver. The other
property of interest is **notifyProp**, which contains a pointer to the
property to be notified (i.e. the method to be called) on all objects in
range of the event. For a SoundEvent this is defined as
&notifySoundEvent. Again there is no real need to change it; if you had
a large number of SoundEvents which might affect the same group of
objects you *might* want to give them all a different notifyProp so that
they'd call different methods, but there's no need to do this, since (as
we shall see shortly) the notifySoundEvent method (or the corresponding
methods for SmellEvents and SightEvents) can tell from their parameters
what event has triggered them, so its probably best to leave this
property alone unless you're creating handling for a new kind of
SensoryEvent (such as a custom RadiationEvent).  
  
In order to make a SensoryEvent do anything, we simply need to call its
**triggerEvent(source)** method, where *source* is the object that's
notionally the source of the sound, light or smell that the event
represents. In the case of our bomb, we simply need to put the
appropriate call in the bomb's explode method:  
  
+ bomb : Hidden, Immovable 'unexploded bomb/cylinder' 'bomb'  
  "It's a fat, round-nosed cylinder with tail fins, on a couple of which  
    are painted tiny swastikas. "  
  discover()  
  {  
    inherited;  
    new SenseFuse(self, &explode, 3, self, sight);  
  }  
  explode()  
  {  
    "The bomb explodes, the blast sending chunks of masonry flying in all  
     directions, one piece of strikes you square on the head. ";  
     if(gPlayerChar.isIn(location))  
       endGame(ftDeath);  
     respiratorBox.moveInto(location);   
     respiratorBox.moved = nil;   
     **explosionEvent.triggerEvent(self);**  
     moveInto(nil);  
  }  
  cannotTakeMsg = 'You must be joking! '  
  cannotPushMsg = 'That might set it off. '  
  cannotMoveMsg = 'It\\s probably safest to leave it just where it is. '  
;  
  
This is all very well, but in order for this to have any effect, we need
to have something that responds to the event when it's triggered. Such a
something is called a *SoundObserver* (or SightObserver for a
SightEvent, or SmellObserver for a SmellEvent). This is defined as a
mix-in class, so we could, for example, mix it in with a SecretFixture
in each of the locations where we want the explosion to be reported
(i.e. all those joined to londonStreet by the SenseConnector). When the
triggerEvent method is called, it should in turn call the
**notifySoundEvent(event, source, info)** method of every SoundObserver
object within hearing range. The *event* parameter is the SoundEvent
that's just been triggered, while the *source* is the object that's the
notional source of the sound (i.e. the source specified as the parameter
in the explosionEvent.triggerEvent(source) call).  
  
As a first (but erroneous) attempt, we might try something like this in
streetJunction:  
  
+ SoundObserver : SecretFixture  
  notifySoundEvent (event, source, info)   
  {  
    if(source == bomb)   
    "\nThere is a loud explosion and a cloud of dust from the street to  
      the south as the bomb explodes amongst the rubble. "    
 }  
;  
  
The test for source being *bomb* is not strictly necessary here, since
there's only one SoundEvent that's going to be fired round here, but
it's a good idea to include it, not only to show how one might apply
such a test, but also in case at some later stage you wanted to add more
SoundEvents, and needed to be sure that the right one was going to be
responded to on any occasion.  
  
But there are two things wrong with the definition we have given above
(though you'll only encounter one of them if you try it). The first is
that the message will never be displayed (this is the problem you'll
encounter), and the second is that, if it were displayed, this wouldn't
necessarily be what we wanted, since what we actually want is to see a
message appropriate to the location in which the player character is
located at the time, not every message from every SoundObserver that
defines a response to this SoundEvent no matter where the player
character is located. Fortunately, we can quite readily fix both
problems at once.  
  
The reason no message is displayed may seem quite mysterious, and very
hard to track down if, for example, you try to trace what's happening
through the debugger. It is, in fact, that explosionEvent.triggerEvent
is called by a SenseFuse, and the SenseFuse makes sure that no messages
are displayed unless the object associated with the fuse is in scope for
the player character. The whole chain of events from exploding the bomb
to triggering explosionEvent.triggerEvent to calling notifySoundEvent
takes place in the context of the SenseFuse, and so the message
displayed in notifySoundEvent will not be displayed. The solution is to
have notifySoundEvent use callWithSenseContext to set up the visual
sensory context of the location where we've placed the SoundEvent. This
also ensures that the player sees only the message relevant to the
location of the player character. Since we shall be deploying several of
these receptors it's worth putting this extra bit of complication into a
class which we can reuse as needed:  
  
class BangObserver : SecretFixture  
  notifySoundEvent (event, source, info)   
  {  
    if(source==bomb)               
      callWithSenseContext(self, sight, {: bang});     
  }  
  bang = "Bang! "  
;  
  
Note that BangObserver does *not* inherit from SoundObserver. There's no
reason why it shouldn't, but also no reason why it needs to, since all
SoundObserver does is define an empty notifySoundEvent method (which
we're redefining here anyway).  
  
Now all we need to do is to add a BangObserver in streetJunction:  
  
streetJunction : OutdoorRoom 'Street Junction' 'the junction'  
   "The street from the south meets another running east-west. A short way down  
    to the street to the east a fire crew is fighting a blazing fire. "  
   south = londonStreet  
   east : FakeConnector { "After taking a few steps east you recall that   
     discretion is the better part of valour and decide to keep out of the  
     way of the fire crew. "}  
   **west = road**  
   ...  
;  
  
  
+ BangObserver   
  bang = "\nThere is a loud explosion and a cloud of dust from the street to  
      the south as the bomb explodes amongst the rubble. "    
;  
  
At the same time we add a new connexion to the west, so we need to
define the appropriate location:  
  
road : OutdoorRoom 'Road' 'the road'  
  "The road runs west from the junction passed a row of terraced houses and shops.   
   It seems strangely deserted, perhaps because the air-raid has sent everyone  
   scuttling into shelters. A shop suffering bomb-damage stands open to the north. "  
  east = streetJunction  
  west : FakeConnector { "After a few steps down the street you decide that  
   wandering too far round the city in the middle of an air-raid might be  
   bad for your health. "}  
  north = shop   
  in asExit(north)  
;  
  
+ BangObserver    
  bang = "\nThere is a muffled explosion from the southeast. "    
;  
  
+ Enterable -\>shop 'shop' 'shop'  
  "The damage to the shop, probably a grocer, looks substantial; not only have the  
   windows been blown in but much of the surrounding brickwork with it. From the  
   outside, at least, the shop looks abandoned. "  
;  
  
And then, in turn, the interior of the shop:  
  
shop : Room 'Grocery Shop' 'the grocery shop'  
  "The interior of the shop confirms the impression conveyed by the exterior: the  
   bomb damage here is substantial; broken glass, shattered masonry and dust  
   cover the floor, and the stock has all been removed, leaving nothing but a   
   bare counter. "  
   out = road  
   south asExit(out)  
;  
  
+ BangObserver  
  bang = "There's a sudden explosion from somewhere nearby outside, bringing  
   more dust cascading from the ceiling. "  
;  
  
+ Decoration 'broken shattered glass/masonry/dust/debris' 'debris'  
  "Shards of glass mingle with bits of brickwork all over the floor, and a  
   patina of coarse white dust covers everything. "  
;  
  
The usefulness of the SoundEvent/SoundObserver implementation now
becomes apparent, since one can keep adding suitable BangObserver
objects within each location that might be affected.  
  
The purpose of this trip to London in the Blitz is to collect not one
but two gas masks; two will be needed because our intrepid player
character will eventually be given a travelling companion (Sarah) who'll
also need a gas mask if she is to venture into Hell Fire Cavern with him
(let's assume it's a him from now on, for ease of reference). The two
gas masks will be functionally identical, and there's no reason to
suppose that two gas masks picked up in wartime London will look very
different from each other, so rather than impose any artificial
distinctions, we'll create a GasMask class and make two interchangeable
instances of it:  
  
class GasMask : Wearable, Hidden 'gas mask/respirator/gas-mask/gasmask  
    \*masks\*gasmasks\*respirators'   
   'gas mask'  
  "It's an ungainly-looking thing with round glass circles for seeing through  
    and a kind of cylindrical snout to fit over nose and mouth, all held together  
    by a black rubber face-mask. "    
  isEquivalent = true    
  dobjFor(Wear)  
  {  
   verify()  
   {  
    inherited;  
    if(gActor.isMasked)  
      illogicalNow('{You/he} {is} already wearing a gas mask. ');      
   }  
  }    
;  
  
We set the **isEquivalent** property to true to indicate that all
members of the class are interchangeable (like the [candles](candle.htm)
and [matchsticks](matchstick+matchbook.htm) we implemented earlier), and
override the verifyDobjWear method to allow only one gas mask to be worn
by any one Actor at a time. The definition of the gas mask found in the
respiratorBag then becomes simply:  
  
respiratorBox : OpenableContainer 'small (respirator) khaki bag/box' 'khaki bag'  
  "The square bag is made of coarse khaki fabric and has a pair of carrying straps. "  
  bulkCapacity = 4  
  initSpecialDesc = "A small khaki bag lies in the street, perhaps dislodged from the   
    rubble by the recent explosion. "  
;  
  
**+ gasMask1 : GasMask    
  discovered = true  
;  
**  
Note that we have renamed it gasMask1 to distinguish it from the second
gas mask we'll now add (continuing the definition of the shop):  
  
+ RearContainer, Fixture 'long wooden counter' 'counter'  
  "Like everything else round here, the long wooden counter is bare apart from a  
   thick covering of dust. "  
;    
  
++ gasMask2 : GasMask  
  initSpecialDesc = "A gas mask lies abandoned on the floor behind the counter. "  
;  
  
It may seem strange to derive GasMask from the Hidden class as well as
from the Wearable class when we actually want only one of the gas masks
to be hidden. But this is the only way we can make both gas masks
exactly equivalent, and it only involves us in adding a single line of
code (discovered = true) to the definition of gasMask1.  
  
This now leaves us with another task: changing the definition of
Actor.isMasked (aren't you glad now we defined it so we'd only have to
change it one place) to allow any gas mask to do the job:  
  
modify Actor  
  canSmell(obj)  
  {  
    if(isMasked)  
      return nil;  
    else    
      return inherited(obj);  
  }  
    
  **/\* if the first parameter is nil or not supplied, return the first gas mask  
   \* among the actor's possessions. If the first parameter is true,  
   \* return the gas mask (if any) that is being worn by the actor.  
   \*/   
  maskObj(\[params\])  
  {  
    local worn = nil;  
    if(params.length\>0)   
       worn = params\[1\];  
    foreach(local cur in contents)  
    {   
      if(cur.ofKind(GasMask) && (worn==nil \|\| cur.isWornBy(self)))  
        return cur;  
    }  
    return nil;  
  }  
  isMasked  
  {  
    return maskObj(true) != nil;  
  }  
**;  
  
We could have used a slightly simpler definition such as
isMasked = (gasMask1.isWornBy(self) \|\| gasMask2.isWornBy(self)), but
this approach would soon become tedious if we decided to add any more
gas masks, so we have used a more general approach that checks whether
there's any GasMask object among the actor's possessions that's
currently being worn by the actor. This would allow us to add more gas
masks into the game if we wanted them without having to worry about
doctoring the definition any further. We have defined maskObj() as a
separate method rather than incorporating it directly into isMasked(),
since we'll be needing maskObj() later.  
  
  
