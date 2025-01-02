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
<td style="text-align: left;"><strong>OutOfReach : object<br />
</strong></td>
<td style="text-align: right;"><a
href="highnestedroom.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="booth.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
The OutOfReach class is a mix-in class that can be used to put its
contents, and optionally itself, out of reach of anyone outside it.
Whether the OutOfReach object is itself out of reach is determined by
its **canObjReachSelf(obj)** property, which returns true if obj
(normally an actor) can reach the OutOfReach object and nil otherwise.
Likewise **canObjReachContents(obj)** returns true if obj (again
normally an actor) can reach the OutOfReach object's contents and nil
otherwise. There are two corresponding methods for reaching things from
inside the OutOfReach object: **canReachFromInside(obj, dest)** returns
true if obj (again normally an actor) can reach dest, and nil otherwise;
and **canReachSelfFromInside(obj)** returns true if the OutOfReach can
be reached by an obj (once again normally an actor) located within the
OutOfReach and nil otherwise. Note that canReachSelfFromInside(obj) is
defined as { return canReachFromInside(obj, self); }, which means that
if you want an actor to be able to reach an OutOfReach from within
itself you can do so either by overriding canReachSelfFromInside(obj) to
return true, or by overriding canReachFromInside(obj, dest) to return
true when dest is self (amongst other things for which you might want it
to return true).  
  
Again this is all very abstract, so let's turn our top bunk into a
concrete example. Because it's already a HighNestedRoom we don't want
the bunk also to be unreachable from the outside by virtue of being an
OutOfReach, so we need its canObjReachSelf method to return true. It
seems reasonable that an actor should be able to reach the contents of
the top bunk when s/he's in a position to get onto it, so we want
canObjReachContents to return true when obj is located in a valid
staging location for the top bunk (if we're actually on the bunk we'll
automatically be able to reach its contents). Finally, while we're on
the bunk we should be able to reach the bunk itself and also anything we
could use as a staging platform to reach the bunk. At the same time
we'll make looking under or taking the pillow worthwhile by revealing a
vital piece of paper:  
  
**OutOfReach,** HighNestedRoom, Bed, Fixture 'top bunk bed\*beds\*bunks' 'top bunk' @crewQuarters  
   "The top bunk is mounted high on the port side, above the bottom bunk. "  
   stagingLocations()  
   {  
     local lst = new Vector(5);  
     foreach(local cur in stagingPlatforms)  
       if((gActor.posture==standing && gActor.isIn(cur))  
  
         \|\| (gActor.isIn(self) && cur.isIn(location)))
         lst.append(cur);  
     return lst.toList;  
   }  
   stagingPlatforms = \[cabinChair\]  
   **canObjReachSelf(obj) { return true; }   
   canObjReachContents(obj) { return stagingLocations.indexOf(obj.location); }    
   canReachFromInside(obj, dest)   
    { return dest==self \|\| stagingPlatforms.indexOf(dest); }  **  
;  
  
+ **Underside** 'plain white pillow' 'pillow'  
  "It's just a plain white pillow. "  
  bulkCapacity = 1  
  allowPutUnder = (!location.ofKind(Actor))  
;  
    
++ leftHalfPaper : Hidden, Readable 'left half torn sheet yellow paper\*sheets\*papers'   
  'torn sheet of yellow paper'    
  "It looks like the left hand half of a sheet of paper that's been torn in two. It  
   contains a list of letters and numbers. "  
  readDesc = "A0\nA2\nC9\nJ8\nM3\nQ7\nT5\n"    
  mainExamine  
  {  
    if(!described) name += ' (left half)';  
    inherited;  
  }  
;  
  
The importance of this sheet of paper is obvious. There is no way the
player character can be expected to find which of the various possible
settings of the slider and dial in the Tardis will actually bring it to
a useful destination, so we provide a list of the settings that do. Note
that we only add ' (left half)' to the display name of this piece of
paper once the player examines it to ascertain that it actually is the
left half. While we're at it we might as well supply the other half -
behind the picture we'll put in that cabinet aboard the Tardis:  
  
OpenableContainer, Fixture 'storage cabinet' 'storage cabinet' @tardisLivingQuarters  
  "The large cabinet is painted a cream colour and looks securely fixed to the wall. "  
;  
  
+ smallPicture : RearSurface 'small picture/photo/photograph' 'small picture'  
  "It's a faded photograph of an eccentrically-dressed man with a  
    long scarf, in company with a smiling young woman with  
    long blonde hair. "  
  allowPutBehind = nil  
;  
  
++ rightHalfPaper : Hidden, Readable 'right half torn sheet yellow paper\*sheets'   
  'torn sheet of yellow paper'    
  "It looks like the right hand half of a sheet of paper that's been torn in two. It  
   contains a list of names. "  
  **readDesc = "Ship Hold\nSpaceStation\nNew Mars\nJerusalem\n  
      Nivalis\nLondon\nOutside Caves\n"    
  mainExamine  
  {  
    if(!described) name += ' (right half)';  
    inherited;  
  }**  
;  
  
Meanwhile, there's one other thing we may want to customize on our
OutOfReach. If (for example) you try to take the pillow without being on
the top bunk or standing on the chair, you'll be told "The pillow is too
far away." You may think that this makes it sound like it's a long way
off, rather than fairly close at hand and just out of reach, so it may
be you'd prefer "The pillow is out of reach. " This seems a better
message altogether for the OutOfReach class, so we'll create a new
library message and then modify OutOfReach to use it:  
  
modify playerActionMessages  
 outOfReachMsg(obj)  
     {  
         gMessageParams(obj);  
         return '{The obj/he} {is} out of reach. ';  
     }  
;   
  
modify OutOfReach  
  cannotReachFromOutsideMsg(dest) { return &outOfReachMsg; }  
  cannotReachFromInsideMsg(dest) { return &outOfReachMsg; }  
;  
  

It's worth pointing out that we can do far more with the OutOfReach
class than the single example here may suggest; for further details see
Section 11.7 “Nested Rooms and OutOfReach” in *Learning TADS 3*.  
