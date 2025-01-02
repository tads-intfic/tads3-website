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
<td style="text-align: left;"><strong>Booth : BasicPlatform, <a
href="container.html">Container</a><br />
</strong></td>
<td style="text-align: right;"><a href="outofreach.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="vehicle.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A booth is a nested room that serves as a small enclosure within a
larger room. Booths can serve as regular containers as well as nested
rooms, and can be made openable by addition of the Openable mix-in
class. Note that booths don't have to be fully enclosed, nor do they
actually have to be closable. Examples of booths might include a
cardboard box large enough for an actor to stand in, a closet and a
shallow pit.  
  
For our example of a booth we'll put a large packing case in the temple
cellar; the trick is that it has a secret compartment that only opens
when the case itself is closed. Thus the only way for an actor to
discover the secret compartment is to climb inside the packing case and
close it while inside. We'll also put three gold coins in plain view in
the case as a red herring, although the inscription on the coins (Greek
for Vespasian) provides a (probably pretty cryptic) clue to the
provenance of the ancient packing case.  
  
templeCellar : DarkRoom 'Cellar beneath Temple' 'the cellar beneath the Temple'  
  ...  
;  
  
+ packingCase : Openable, Booth, Heavy 'large packing case/lid' 'large packing case'  
  "The packing case, which looks large enough to get into, looks positively  
   ancient. It's made of some kind of wood that has darkened with age but  
   might possibly be cedar. "  
   initSpecialDesc = "An ancient wooden packing case sits in the corner. "  
   useInitSpecialDesc()  
    {  
        /\* show our initial description only when the actor isn't in me \*/  
        return inherited() && !gActor.isIn(self);  
    }  
   interiorDesc = "Although it looked quite large on the outside, it feels  
    rather cramped on the inside. "  
   roomName = ('Inside ' + theName)  
   defaultPosture = (isOpen ? standing : lying)  
   makeOpen(stat)  
   {  
     if(stat)  
       callWithSenseContext(secretCompartment, sight,  
       {: "Opening the case closes the secret compartment. " } );  
     else  
     {  
       foreach (local cur in allContents())  
            {  
                /\* if this is a standing actor, disallow closure \*/  
                if (cur.isActor && cur.posture == standing)  
                {  
                    /\*   
                     \*   we can't close - issue a failure report and  
                     \*   terminate the command   
                     \*/  
                    reportFailure('{You/he} cannot close the packing case while  
                        someone inside it is standing up. ');  
                    exit;  
                }  
            }  
     }  
     inherited(stat);  
     if(!stat)  
      callWithSenseContext(secretCompartment, sight,  
       {: "Closing the case opens a secret compartment in the bottom of the case. " } );  
   }  
   /\* enforce the low headroom when the box is closed \*/  
    makeStandingUp()  
    {  
        if (isOpen)  
        {  
            /\* we're open, so proceed as normal \*/  
            inherited();  
        }  
        else  
        {  
            /\* the box is closed, so they can't stand up \*/  
            reportFailure('There\\s not enough room to stand up in  
                the packing case while it\\s closed. ');  
        }  
    }  
    basicExamine()  
    {  
      if(gActor.isIn(self) && gActor.canSee(self) && !isOpen)  
        interiorDesc;  
      else  
        inherited;         
    }  
;  
  
++ GoldCoin;  
++ GoldCoin;  
++ GoldCoin;  
  
  
++ secretCompartment : Container, Fixture 'secret compartment' 'secret compartment'  
   "The secret compartment runs the width of the case and about half its  
    length. "  
   isOpen = (!packingCase.isOpen)  
   sightPresence = (isOpen)     
;  
  
+++ bronzeBowl : Container 'bronze bowl' 'bronze bowl'   
  "It's of ancient and somewhat curious design, cast with two rows of  
    pomegranates all the way round the outside. "  
   bulkCapcity = 4  
   bulk = 5  
   weight = 5   
;  
  
class GoldCoin : Thing 'gold coin\*coins' 'gold coin'  
  "It looks ancient. The only writing you can make out on it looks  
   like &Omicron;&Upsilon;&Epsilon;C&Pi;&Alpha;C&Iota;&Alpha;&Nu&Omicron;C. "  
   isEquivalent = true  
;  
  
If you have trouble with the Greek letters, you can just about get there
using "OUECPACIANOC" using a P for a capital Pi (the C represents a
capital Sigma, since this is the way a Sigma was frequently written in
ancient texts). This is simply a transliteration of VESPASIANOS,
Vespasian being the Roman Emperor at the time of the destruction of the
Jerusalem temple (by his son Titus) in 70 CE, the use of Greek
suggesting that the coins came from the eastern (Greek speaking) rather
than western (Latin speaking) part of the empire.  
  
Of more note to most TADS 3 authors will be the use of
callWithSenseContext to ensure that the messages about the revealing of
the secret compartment are only displayed when the player character is
inside the case, and the code (largely borrowed from the TADS 3 sample
game) to prevent closing the case while anyone's standing inside, or
standing inside while the case is closed.  
