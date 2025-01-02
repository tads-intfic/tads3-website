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
<td style="text-align: left;"><strong>addToScore<br />
</strong></td>
<td style="text-align: right;"><a
href="scoring-overview.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="achievement.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
The simplest (in some respects) way to keep track of the score is to
call the **addToScore** function, which is called with two arguments:
addToScore(points, description), where *points* is the number of points
being awarded and *description* is a single-quoted string describing why
the points are being awarded. For example, to award a single point for
unlocking the door from anotherCave to lakeRoom (by inserting the brass
coin) you can simply call addToScore in the notifyInsert method of the
slot:  
  
++ RestrictedContainer, Component 'small vertical slot' 'slot'  
   "It's about half an inch long; next to it is some faded writing that  
    just about still says\nENTRANCE TO LAKE\nONE GROAT. "  
   validContents = \[silverCoin, brassCoin\]  
   notifyInsert(obj, newCont)  
   {  
     if(obj==brassCoin)  
     {  
       "As the brass coin disappears into the slot you hear a click from the door. ";  
       obj.moveInto(nil);  
       lakeDoor.makeLocked(nil);  
       **addToScore(1, 'unlocking the door to the lakeside ');**  
     }  
     else  
     {  
       "Despite initial appearances \<\<obj.theName\>\> doesn't seem to be quite  
        right for the slot. ";         
     }  
     exit;  
   }  
;  
  
Note that the score will be incremented every time addToScore is called,
so if we want to make sure that points are awarded only once for a
particular achievement, we must make sure that the corresponding
addToScore is called only once. In this particular case we are safe:
since there's only one brass coin in the game and it disappears forever
when it's put in the slot, this addToScore can only ever be executed
once.  
  
Blowing up the boulder is similar situation: since this can only ever
occur once we can quite safely put an addToScore in the dynamite
object's sayBurnedOut() method (insofar as playing with dynamite can
ever be said to be safe!). We might want to award more points for
this:  
  
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
      "The dynamite detonates close by, but you are killed by the blast almost  
       before you hear the bang. ";  
       endGame(ftDeath);  
    }  
    if(isIn(boulder))  
    {  
      boulderFragments.moveInto(boulder.location);  
      boulder.moveInto(nil);     
      **addToScore(2, 'blowing up the boulder');**      
    }  
    callWithSenseContext (nil, nil, {:"You hear a muffled explosion nearby. "});  
    moveInto(nil);  
    fuseID = nil;   
    fuelLevel = 3;           
  }  
;  
  
Indeed, we can even use this technique for awarding five points for
casting the Golden Banana of Discord into Mount Gloom; since this
results in moving the Golden Banana into nil and it's never recoverable
thereafter, we can put the relevant addToScore call in the banana's
moveInto method:  
  
++ goldenBanana : Thing 'golden banana/discord' 'Golden Banana of Discord'  
  "It's about the shape and size of an ordinary banana, but seems to be made  
    of solid gold. "  
  aName = (theName)  
  weight = 6  
  isListedInContents = (!isIn(bananaCase))  
  **moveInto(newCont)  
  {  
    inherited(newCont);  
    if(newCont==nil)  
      addToScore(5, 'destroying the Golden Banana in Mount Gloom');  
  }**  
;  
  
Finally, note that the second parameter in addToScore may be an
[Achievement](achievement.html) object instead of a single-quoted string.
We'll explain this in more detail once we've introduced the Achievement
class.  
