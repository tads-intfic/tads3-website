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
<td style="text-align: left;"><strong>Dynamite : <a
href="candle.html">Candle</a><br />
</strong></td>
<td style="text-align: right;"><a
href="matchstick+matchbook.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="hiding+fiding-introduction.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
For some time now we've had that pesky boulder blocking the cave to the
west of main cave, and we've had to allow the player to pick it up in
the absence of any way to blow it up. Well, now the time has come to try
for a more explosive solution.  
  
Not only might a stick of dynamite look a little like a candle, in some
ways it behaves a little like one, except that something a bit different
happens when it burns down. We could probably thus make a reasonable
stab at a stick of dynamite by adapting a Candle and overriding
sayBurnedOut() for the explosion. The main complication is handling all
the different situations that could arise when the dynamite explodes. To
keep things manageable, we'll handle just four. If the player character
is still holding the dynamite when it explodes, s/he's killed. If the
player character is close enough to the dynamite to touch it when it
explodes, s/he's still killed, but with a different message. If the
dynamite explodes when it's in a position to destroy the boulder, the
boulder is destroyed and the dynamite removed. That leaves the situation
where the dynamite explodes when the player character is at a safe
distance, but is not in the right place to destroy the boulder. If we
simply removed the stick of dynamite this would leave the player
character alive, but the game unwinnable, so we need instead to allow
the player to retrieve it again (under the guise of another stick of
dynamite). We shall simply ignore the question of what damage the
explosion might do to any other objects in the game, since to implement
it would probably be too complicated.  
  
One thing at a time; first we need to amend the definition of the
boulder:  
  
+ boulder : Container, Heavy 'boulder/crack' 'boulder'   
   "The huge boulder is blocking the exit to the west; there seems to be a  
    small crack in it. "    
  bulkCapacity = 2    
;  
  
We make the boulder a Container as well as Heavy so that we can insert
the dynamite in it, and we describe it as having a crack to give the
player a clear hint that that's what s/he's meant to do.  
  
We'll give the dynamite a short fuse and not much illumination when lit,
and an appropriate description. The complication comes in the
sayBurnedOut() method. We'll first test for the player character holding
the dynamite and kill him or her if s/he is. We'll then do the same but
with a different message if the player character is in a position to
touch the dynamite, which we can test with the dynamite's
**canBeTouchedBy** method. We'll then see if the dynamite is in the
boulder. If it is we'll replace the boulder with boulder fragments.
Penultimately we'll move the Dynamite back into nil and reset its
fuelLevel to 3 in case we need to reuse it.  
  
The really tricky bit is how to let the player know that the dynamite
has exploded. Since the sayBurnedOut() method is called by a
SenseDaemon, it or any method called by it won't display any text unless
the dynamite is in scope for the player character; but if the dynamite
were in scope, the player character would already be dead. But we don't
want to keep the player guessing how long it takes for the dynamite to
explode. Since the fuse is so short we can virtually guarantee that the
player character will still be in earshot when the dynamite explodes, so
we don't want to get involved in complex sense path calculations or the
setting up of lots of SenseConnectors and SensoryEvents. The simplest
way to get round the sensory context set up by the SenseDaemon used on
the Candle class is to use the **callWithSenseContext** function to set
up a temporary, different sense context:  
  
dynamite : Candle 'stick dynamite/fuse' 'stick of dynamite'   
  "It's a white cylinder with a short fuse. \<\<isLit ?  
  'The fuse is lit and burning down fast. ' : nil \>\>"  
  fuelLevel = 3  
  brightnessOn = 1  
  sayBurnedOut()  
  {  
    if(isHeldBy(gPlayerChar))  
    {  
      "The dynamite explodes with a mighty bang and blows your hand off. But  
       since you're killed by the blast you probably won't be needing it  
       any more.\b";  
       endGame(ftDeath);  
    }  
    if(canBeTouchedBy(gPlayerChar))  
    {   
      "The dynamite denotates close by, but you are killed by the blast almost  
       before you hear the bang. ";  
       endGame(ftDeath);  
    }  
    if(isIn(boulder))  
    {  
      boulderFragments.moveInto(boulder.location);  
      boulder.moveInto(nil);         
    }  
    callWithSenseContext (nil, nil, {:"You hear a muffled explosion nearby. "});  
    moveInto(nil);   
    fuelLevel = 3;       
  }  
;  
  
If the first two parameters (source and sense) of callWithSenseContext
are nil then we effectively creating a universal, unrestricted sense
context, allowing whatever happens in the function forming the third
argument to be sensed from anywhere. We use the short form of this
function definition, which means precisely the same as if we had written
new Function { "You hear a muffled explosion nearby. "; }. We could have
avoided all this complication had we used a Fuse on the dynamite,
instead of trying to adapt the Candle. We'll remodel the dynamite using
a [Fuse](fuse.html) in due course.  
  
Finally, we need to define the boulderFragments object that is to
replace the boulder when the dynamite detonates:  
  
boulderFragments : Decoration 'boulder larger fragments/chunks' 'boulder fragments'  
  "Most of the fragments are tiny, though there are a few larger chunks.   
   They are scattered everywhere. "  
   inRoomDesc = "Fragments of a boulder are littered all over the cave. "  
  isPlural = true  
;  
  
Note that this once again makes use of our custom inRoomDesc property
(which adds itself to the room description). A game that hadn't
implemented this device would probably have to use specialDesc
instead.  
  
There is still one task left to achieve, namely to provide the player
with a way of finding the dynamite in the first place. We'll cover that
as the first task in the next chapter. In the meanwhile, if you want to
try it out, you can temporarily set the dynamite's starting location to
somewhere convenient like mainCave - but don't forget to set it back
again (to nil) before starting the next section.  
  
Finally, for the endGame() function, see above on
[cannotGoThatWayInDark](cannotgothatwayindark.html), where we first
defined it.  
  
  
