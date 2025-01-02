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
<td style="text-align: left;"><strong>SenseConnector : <a
href="multiloc.html">Multiloc</a><br />
</strong></td>
<td style="text-align: right;"><a href="noise.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="sensoryevent.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
Unless the game author takes steps to make things otherwise, each
location behaves like a sealed island; nothing that happens in one
location can be seen, heard, felt, or smelled in another. Usually this
is realistic enough, but there are occasions when it's not quite what we
want; on such occasions we can join two or more locations by a
SenseConnector, which can pass one or more senses between locations with
varying degrees of transparency. The
[DistanceConnector](distanceconnector.html) we have already met is a
specialized kind of SenseConnector that passes all four senses (taste
excluded as not really relevant) as distant.  
  
There are basically two ways you can define what senses a SenseConnector
passes in what way. The first way is to set its **connectorMaterial**
property to one of the materials defined in the library (or one you
define yourself), each of which defines some combination of the senses
as *transparent* (which means that they are passed with no degradation,
as if their source was right under our nose) and the remainder as
*opaque* (which means that they aren't passed at all). Alternatively, if
none of these pre-defined materials give you what you want, and you
don't want to define another (which may be needless labour), you can
override your SenseConnector's **transSensingThru(sense)** method to
return the appropriate level of transparency for each sense, which may
be either *transparent*, *opaque*, *distant* or *obscured*. This is the
method we shall be using shortly.  
  
We have arranged for the bomb to detonate and to kill the player
character if s/he's nearby, but as yet there's nothing to tell the
player when the bomb explodes if the player character goes wandering off
into a neighbouring location. There are several ways this could be
achieved, including the brute force method of (say) a [prompt
daemon](promptdaemon.html) that checks once a turn whether the bomb is
still present and reports the explosion if it is not, giving a different
message according to the location of the actor, and then removing itself
from the list of active events, something like this:  
  
+ bomb : Hidden, Immovable 'unexploded bomb/cylinder' 'bomb'  
  "It's a fat, round-nosed cylinder with tail fins, on a couple of which  
    are painted tiny swastikas. "  
  discover()  
  {  
    inherited;  
    new SenseFuse(self, &explode, 3, self, sight);  
    **daemonID = new PromptDaemon(self, &daemon);**  
  }  
  **daemon()  
  {      
    if(bomb.isIn(nil))  
    {  
      switch(gPlayerChar.location)  
      {  
        case streetJunction: "Loud Bang!"; break;  
        case road : "Distant Bang!"; break;  
        case shop : "Muffled Bang!"; break;  
      }          
    daemonID.removeEvent;  
    daemonID = nil;   
    }  
      
  }  
  daemonID = nil  
**  ...  
;  
  
This approach works, and could also have been used to handle the case
where the player character is in the same location as the bomb when it
goes off. We shall, however, explore a different approach that models
the situation in a less ad-hoc way, and which perhaps is more easily
extensible. We'll be making the explosion of the bomb create a
SoundEvent that can be heard someway off; but to allow the SoundEvent to
be sensed at other locations we need to connect them by a
SenseConnector. For this purpose we'll assume that sound is the only
thing that will be transmitted (we can't actually see, smell or feel
what's going on near the bomb unless we're there), and that as the other
locations are a little way away, any sound should be passed as *distant*
rather than *transparent.* We can then define our SenseConnector thus:  
  
SenseConnector, Intangible  
  transSensingThru(sense)  
  {  
    if(sense==sound)  
      return distant;  
    else  
      return opaque;  
  }   
  locationList = \[londonStreet, streetJunction, road, shop\]  
;  
  
Note that we need to give the SenseConnector some other class as well.
Here we make it an Intangible, since it doesn't represent any tangible
object in the game, but in other situations you might want your
SenseConnector to be a physical object like a door, wall, or window that
actually connects two locations. We use the locationList property to
list the locations we want connected (not all of which we have defined
yet).  
  
If you try to run this as things are, apart from the undefined location,
you'll encounter another problem: when the player character moves north
from londonStreet to streetJunction s/he can now still hear the ticking
from the bomb. This probably isn't very realistic - one might expect to
hear the bomb exploding from some way away, but not ticking.
Fortunately, this is very easy to fix: because we have defined the
SenseConnector as passing sounds through a distance, it won't pass any
whose **soundSize** is set to *small* (as opposed to *medium* - the
default, or *large*). We thus just need to add this refinement to the
definition of our Noise object:  
  
++ Noise 'tick/ticking' 'ticking'  
   sourceDesc = "It's ticking. "  
   descWithSource = "The ticking is coming from the bomb. "  
   descWithoutSource = "The ticking seems to be coming from the pile of rubble. "  
   hereWithSource = "The bomb is ticking. "  
   hereWithoutSource = "A ticking comes from the direction of the rubble. "  
   displaySchedule = \[1\]  
   **soundSize = small**  
;  
  
  
  
  
  
