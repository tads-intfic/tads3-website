<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>RearContainer : <a
href="spaceoverlay.htm">SpaceOverlay</a><br />
</strong></td>
<td style="text-align: right;"><a href="underside.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="rearsurface.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
A rear container represents the space behind an object. The principal
additional property it defines is **allowPutBehind**; if this is true,
objects may be placed in the RearContainer with a PUT BEHIND command; if
it is nil, they may not.  
  
For the most part, a RearContainer will be most useful as the
ComplexComponent of a [ComplexContainer](complexcontainer.htm), since it
is hard to think of something that only has a rear. A RearContainer can,
however, quite successfully be used for an object like a painting or a
mirror hanging on a wall, for example:  
  
mirror : RearContainer 'large gilt-framed gilt framed mirror'   
    'mirror' @anotherCave  
  "The mirror is about three foot tall by eighteen inches wide. It is  
   brightly silvered, so that your reflection in it is no more flattering  
   than you would expect. "  
   initSpecialDesc = "A large gilt-framed mirror hangs on the wall opposite  
     the dressing table. "  
   bulk = 8  
   weight = 4    
   allowPutBehind = nil  
;  
  
+ smallHoleInWall : Hidden, Container, Fixture 'small hole' 'small hole'  
   "It's just a couple of inches square, and about as deep. "  
   specialDesc = "There's a small hole in the wall  
    opposite the dressing table. "  
   initSpecialDesc = "Behind the mirror is a small hole in the wall. "  
   bulkCapacity = 2    
;  
  
Once again it has been necessary to anticipate the introduction of the
[Hidden](hidden.htm) class, but it's virtually impossible to illustrate
the use of a RearContainer (or other SpaceOverlay) without it, so it'll
just have to be taken on trust for now. The effect is that the small
hole in the wall will be revealed only when the player looks behind the
mirror or takes it for the first time. Also, when the mirror is moved,
the small hole is moved from the mirror to the mirror's former location,
which paradoxically has the effect of leaving it behind in the same
place. This occurs even though the small hole is a fixture, so that
after the mirror is moved, the hole ends up being a Fixture in the room,
which is what we want.  
  
Note that we have set allowPutBehind to nil to prevent anything being
put behind the mirror; which would normally make sense (since it would
normally not be that easy to put sundry objects behind a mirror hanging
on the wall). In this case, however, we might feel that while the mirror
is still hanging on the wall, putting something behind the mirror is
equivalent to putting it in the hole, but that it should not be possible
to put anything behind the mirror once it's been moved. We can implement
this like so:  
  
mirror : RearContainer 'large gilt-framed gilt framed mirror'   
    'mirror' @anotherCave  
  "The mirror is about three foot tall by eighteen inches wide. It is  
   brightly silvered, so that your reflection in it is no more flattering  
   than you would expect. "  
   initSpecialDesc = "A large gilt-framed mirror hangs on the wall opposite  
     the dressing table. "  
   bulk = 8  
   weight = 4    
   **allowPutBehind = (!moved)  
   iobjFor(PutBehind) maybeRemapTo(!moved, PutIn, DirectObject, smallHoleInWall)  
**;  
  
In due course, we'll hide a small piece of black wire in the small hole,
but we'll wait till we get to the point when this bit of wire is needed
and we've covered the ground we need to implement it properly. In the
meantime, there's one further detail to attend to. As things are at the
moment, when you take the mirror the transcript goes something like
this:  
  
\>**take mirror**  
Behind the mirror is a small hole in the wall. Taken.  
  
In this case it's reasonably obvious that 'Taken' must refer to the
mirror and not the small hole, but it's not as clear as it might be, and
in other circumstances, where what lay behind or beneath something was a
portable object that easily could be taken, the 'Taken' message might be
downright misleading. We can make the message clearer by making the
following modification to SpaceOverlay:  
  
modify SpaceOverlay  
  okayTakeMsg = '{You/he} take{s} {the dobj/him}. '  
;   
  
  
Now, to return to our ship, since the chair in the main cabin is
described as being behind the desk, it may be tempting to try this:  
  
cabinDesk : Heavy, Surface 'large solid oak desk' 'desk' @greatCabin  
  "It's a large, solid oak desk, with a single drawer. "  
  initSpecialDesc = "A large oak desk sits in the middle of the cabin. "  
  specialDescOrder = 50  
  dobjFor(LookUnder) remapTo(LookUnder, underDesk)  
  iobjFor(PutUnder) remapTo(PutUnder, DirectObject, underDesk)  
  **dobjFor(LookBehind) remapTo(LookBehind, deskRear)  
  iobjFor(PutBehind) remapTo(PutBehind, DirectObject, deskRear)  
**;  
  
  
+ deskRear : NameAsOther, RearContainer, Component  
  targetObj = cabinDesk  
;  
  
cabinChair : Chair 'padded chair/cushion' 'chair' @deskRear  
  "It's a fine wooden chair with a round back and a padded cushion. "  
  initSpecialDesc = "A wooden chair sits behind the desk. "  
  bulk = 10  
  weight = 7  
;  
  
This appears to work well enough, in that you can look behind the desk
and be told that the chair is there, or take the chair, subsequently put
it behind the desk and find that it's described as being there once
more, but you'll quickly discover that it all goes horribly wrong if you
try to sit on the chair while it's behind the desk.  
  
It takes quite a bit of work to fix this, which will involve classes and
concepts we haven't met yet (particularly the [Platform](platform.htm)
class) . But to show what we need to do, here it is:  
  
cabinDesk : Heavy, Surface 'large solid oak desk' 'desk' @greatCabin  
  "It's a large, solid oak desk, with a single drawer. "  
  initSpecialDesc = "A large oak desk sits in the middle of the cabin. "  
  specialDescOrder = 50  
  dobjFor(LookUnder) remapTo(LookUnder, underDesk)  
  iobjFor(PutUnder) remapTo(PutUnder, DirectObject, underDesk)  
  dobjFor(LookBehind) remapTo(LookBehind, deskRear)  
  iobjFor(PutBehind) remapTo(PutBehind, DirectObject, deskRear)  
  **dobjFor(GoBehind) remapTo(GoBehind, deskRear)  
**;  
  
deskRear :  RearContainer, Platform, SecretFixture  
   name = 'desk'  
   actorInPrep = 'behind'  
   actorIntoPrep = 'behind'  
   actorOutOfPrep = 'from behind'  
   location = greatCabin  
   dobjFor(GoBehind)  
   {  
     verify() { logicalRank(140, 'rear'); }  
     action()  
     {  
        gActor.moveIntoForTravel(self);  
        defaultReport('{You/he} go{es} behind {the dobj/him} ');  
     }      
   }  
   tryMovingIntoNested()  
   {  
     return tryImplicitAction(GoBehind, self);  
   }  
;  
  
DefineTAction(GoBehind)  
;  
  
VerbRule(GoBehind)  
  ('go' \| 'stand' \| 'walk') 'behind' singleDobj  
  : GoBehindAction  
  verbPhrase = 'go/going (behind what)'  
;  
  
modify Thing  
  dobjFor(GoBehind)  
  {  
    verify() { illogical('{You/he} can\\t go behind {that dobj/him}. '); }  
  }  
;  
  
This seems a quite a lot of work to be able to put a chair behind a desk
(and even then one or two the messages displayed may be less than
ideal); but if you really *want* a chair behind the desk, it may be
worthwhile.  
