<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>Noise : SensoryEmanation<br />
</strong></td>
<td style="text-align: right;"><a href="odor.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="senseconnector.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
The Noise class works precisely like the [Odor](odor.htm) class, except
that it is used for sounds rather than smells. Precisely the same
properties are available to customise it. We can continue our
illustration by making the volcano the source of a sound as well as a
smell:  
  
+ Noise 'ominous sound/rumble/rumbling' 'rumble'  
  sourceDesc = "Mount Gloom seems to be the source of the ominous rumbling. "  
  descWithSource = "The continuous bass rumble is punctuated by percussive  
    explosions at irregular intervals. "  
  hereWithSource = "An ominous rumble shakes the vast cavern. "  
  displaySchedule = \[1,2,2,4\]  
;  
  
The only thing we have done new here is to add a sourceDesc, which you
should see added to the description of the volcano when you EXAMINE
MOUNT GLOOM.  
  
To illustrate the descWithoutSource and hereWithoutSource properties
we'll go back and add a ticking sound to the [bomb](sensefuse.htm) we
buried under a pile of rubble some time back, at the same time expanding
what the bomb does when it explodes.  
  
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
     **respiratorBox.moveInto(location);   
     respiratorBox.moved = nil;   
**     moveInto(nil);  
  }  
  cannotTakeMsg = 'You must be joking! '  
  cannotPushMsg = 'That might set it off. '  
  cannotMoveMsg = 'It\\s probably safest to leave it just where it is. '  
;  
  
++ Noise 'tick/ticking' 'ticking'  
   sourceDesc = "It's ticking. "  
   descWithSource = "The ticking is coming from the bomb. "  
   descWithoutSource = "The ticking seems to be coming from the pile of rubble. "  
   hereWithSource = "The bomb is ticking. "  
   hereWithoutSource = "A ticking comes from the direction of the rubble. "  
   displaySchedule = \[1\]  
;  
  
respiratorBox : OpenableContainer 'small (respirator) khaki bag/box' 'khaki bag'  
  "The square bag is made of coarse khaki fabric and has a pair of carrying straps. "  
  bulkCapacity = 4  
  initSpecialDesc = "A small khaki bag lies in the street, perhaps dislodged from the   
    rubble by the recent explosion. "  
;  
  
+ gasMask : Wearable 'gas mask/respirator/gas-mask/gasmask' 'gas mask'  
  "It's an ungainly-looking thing with round glass circles for seeing through  
    and a kind of cylindrical snout to fit over nose and mouth, all held together  
    by a black rubber face-mask. "  
;  
  
The descWithoutSource and hereWithoutSource properties contain what is
displayed while the bomb is still hidden in the rubble. Once the player
investigates the source of the tick by looking in or under the rubble,
the bomb is revealed and the descWithSource and hereWithSource messages
are used instead. We set the displaySchedule to \[1\] to display the
hereWith/WithoutSource message each turn, since the ticking can
reasonably be expected to engage the player's attention.  
  
Now that we've defined the gas mask, we can (provisionally) define what
it means for an actor to be masked:  
  
modify Actor  
  canSmell(obj)  
  {  
    if(isMasked)  
      return nil;  
    else    
      return inherited(obj);  
  }  
  **isMasked = (gasMask.isWornBy(self))  
**;  
  
  
