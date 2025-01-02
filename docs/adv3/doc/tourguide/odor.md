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
<td style="text-align: left;"><strong>Odor : SensoryEmanation<br />
</strong></td>
<td style="text-align: right;"><a href="simplenoise.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="noise.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
The Odor class is the big brother of the [SimpleOdor](simpleodor.html)
class we met just a little earlier. It's function is to represent a
smell emanating an object or pervading a location, but in a way that
gives the author more control than does the SimpleOdor. To make an
object the source of an odour (or noise), simply locate the odour (or
noise) within that object.  
  
An Odor (or a [Noise](noise.html) for that matter) provides several
properties for customisation:  
  
**sourceDesc** - The description of the odour (or noise) that's added to
the description of the source of the odour (or noise) when the source is
examined.  
  
**descWithSource** - The description of the odour/noise given when the
source is visible and we EXAMINE or SMELL the odour (or listen to the
noise).  
  
**descWithOutSource** - The description of the odour/noise when the
source is not visible (e.g. because it's in a closed container or hidden
under something else)  
  
**hereWithSource** - The message displayed in the room description to
describe this smell or sound when its source is visible.  
  
**hereWithoutSource** - The message displayed in the room description to
describe this smell or sound when its source is not visible.  
  
**noLongerHere** - The message displayed when the source of the sound or
smell goes out of scope (e.g. because the player character leaves the
location of its source)  
  
**isAmbient** - As with SimpleNoise, this is a true/nil property that
decides whether the smell mentions itself in room descriptions etc. (if
isAmbient is nil) or only in response to an explicit SMELL/EXAMINE
command (if isAmbient is true). The only difference from simpleOdor (or
SimpleNoise) is that on Odor (and Noise) isAmbient is nil by default.  
  
**displaySchedule** - This can contain a list of numbers defining the
frequency with which the smell (or noise) is mentioned spontaneously.
This can be used to emulate the fact that once someone becomes used to a
sound or smell it tends to fade into the background of their awareness,
and to avoid the repetitiveness that might come from displaying the same
message about the smell (or noise) each turn. For example, if
displaySchedule were set to \[1, 2, 4\] a message describing the smell
would be displayed for two successive turns, then again after two turns,
then every four turns thereafter. If the list of numbers end with nil
the spontaneous display of messages about the smell ceases when the end
of the list is reached.  
  
**isEmanating** - This is a boolean flag (true or nil) that can be used
to turn the odor (or sound) on or off. The default value is true (i.e.
the SensoryEmanation is on). For SensoryEmanations belonging to dynamic
objects such as actors, it can be useful to turn the emanation on or
off; e.g. an actor might stop humming or hammering when the player
character converses with him, but resume making humming or hammering
noises once the conversation is over.  
  
So much for the theory, now let's put it into practice. First we'll
create another location:  
  
hellFireCavern : Room 'Hell Fire Cavern' 'Hell Fire Cavern'  
  "This narrow shelf of rock ends at a round hole to the west, and a sheer  
   drop to the east. It overlooks a bleak and  barren plain several hundred   
   feet below, on the far side of which an ugly volcano, the aptly-named Mount Gloom,   
   belches fire and smoke and ash in constant rotation, shedding a hellish red   
   light over the entire infernal scene. A rough staircase of sorts, in places   
   little more than a slippery stone pathway and in others a jumble  
   of rocks, leads northwards down to the lava-strewn plain. "     
   west = cavernExit  
   out asExit(west)  
   north = roughStaircase  
   down asExit(north)  
   south : NoTravelMessage { "That way is solid rock. " }  
   east : NoTravelMessage { "There's a sheer drop of several hundred feet that way. " }  
;  
  
+ cavernExit : ThroughPassage -\>cavernEntrance 'round hole' 'round hole'  
  "The large round hole piercing the cavern wall is easily large enough   
   to walk through."   
;  
  
+ roughStaircase : StairwayDown 'rough stone slippery staircase/pathway' 'rough staircase'  
  "It looks a rough descent, possibly treacherous in places, but probably  
   passable with care. "  
  canTravelerPass(traveler) { return traveler.isMasked; }  
  explainTravelBarrier(traveler)   
       { "The sulphurous fumes become too overpowering and drive you back. "; }  
;  
  
MultiLoc, Distant 'mount volcano/gloom' 'volcano'  
   "The volcano rises up from the basalt plain like an angry sore, belching fumes,  
    smoke and occasional balls of lava, which spit from the summit and ooze  
    pus-like down its rugged slopes. "  
   locationList = \[hellFireCavern\]  
;  
  
+ Vaporous 'hellish red light' 'hellish red light'  
  "It's the sole source of light for the great cavern, enough to see by, but  
   only in a gloomy, bloodshot sort of way. "  
  smellDesc = "You can't exactly smell the light, but you can sure  
   smell the sulphur! "    
;  
  
There's nothing new here, but note the use of another Vaporous object to
represent the hellish red light. We make the volcano a MultiLoc since it
will be visible from more than one location, but we can't add the other
locations to its locationList until we've created them. For now, we'll
concentrate on making it the source of the sulphurous smells by
adding:  
  
+ Odor 'strong smell sulphur/sulfur' 'smell of sulphur'  
  descWithSource = "The sulphurous fumes are almost certainly coming from  
   the volcano. "  
  hereWithSource = "There's a strong smell of sulphur, almost enough to choke you. "  
  displaySchedule = \[2, 3, 3, 5\]  
  noLongerHere = "The smell of sulphur diminishes a little. "  
;  
  
In order to descend the rough staircase the player character needs to be
wearing a gas mask, which we'll provide in the next section. In
anticipation of that, we have to consider what happens to all the odours
when the player character is wearing the gas mask; presumably none of
them should be reported. This is actually a little tricky to achieve.  
  
We can start by preventing any actor from smelling an object if that
actor is wearing the gas mask:  
  
modify Actor  
  canSmell(obj)  
  {  
    if(isMasked)  
      return nil;  
    else    
      return inherited(obj);  
  }  
  
  isMasked = nil // We'll change this in the next section  
;  
  
That deals with the transitive form of the smell command, such as SMELL
SULPHUR, but we also need to deal with the intransitive form, the simple
SMELL command:  
  
modify SmellImplicitAction  
  execAction()  
  {  
    if(gActor.isMasked)  
    {  
      "{You/he} can't smell anything with that gas mask on. ";  
    }    
    inherited;    
  }    
;  
  
Finally, if the player character is wearing the gas mask we also have to
block the messages that will be displayed in the room description or
according to the display schedule, and the message that's displayed when
an Odor goes out of scope:  
  
modify Odor  
  emanationHereDesc  
  {  
    if(gPlayerChar.isMasked)  
      return;  
    inherited;    
  }  
  endEmanation  
  {  
    if(gPlayerChar.isMasked)  
      return;  
    inherited;    
  }  
;  
  
Note that so far we have not referred to any specific gas mask object;
we have simply referred throughout to as yet undefined Actor property
isMasked. This not only lets us compile the code before defining any gas
mask object (isMasked will simply return nil), it means that when we
come to define what counts as wearing a gas mask, we need only do so in
one place (Actor.isMasked); moreover, if we subsequently want to change
what counts as wearing a gas mask, we need only change it in one
place.  
  
  
  
