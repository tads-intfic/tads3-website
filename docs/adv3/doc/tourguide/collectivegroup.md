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
<td style="text-align: left;"><strong>CollectiveGroup (static) : <a
href="thing-introduction.html">Thing</a><br />
</strong></td>
<td style="text-align: right;"><a href="multifaceted.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="collectivegroup(mobile).html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A CollectiveGroup is useful when you want some actions, typically
EXAMINE, to work in a summary fashion rather than on every object that
might match. In the abstract this probably doesn't mean a great deal, so
let's create a specific example. A little while back we created a
museum. The natural thing to do is to put some exhibits in it:  
  
museum : Room 'Museum of Curious Antiquities' 'the main museum'  
 "Many display cases line this long chamber, each containing its own curious  
  exhibit. There seems to be another chamber off to the south, marked by  
  a sign saying \<q\>Benefactors' Exhibition\</q\>, while the main exit is to the east. "  
 east = museumLobby  
 **south = benefactorsRoom**  
;  
  
+ Decoration 'sign' 'sign'  
  "\<FONT COLOR=BLUE\>BENEFACTORS' EXHIBITION\</FONT\>\n  
   Special Exhibits reserved for our benefactors\n  
   Sorry! No bags allowed (we have to be careful!)"  
;  
  
+ Decoration 'amber amulet/amazement\*cases exhibits' 'Amber Amulet of Amazement'  
  "The pendant on display in this case is indisputably amber, and quite possibly  
   an amulet. The accompanying plaque explains that its principal source of amazement  
   is that it performed no useful function whatsoever despite having several times   
   changed hands at ever more inflated prices. \<i\>Quam credulus emptor nemo ineptior\</i\>  
   the plaque concludes pompously. "  
  aName = (theName)  
  collectiveGroups = \[exhibitGroup\]  
;  
  
+ Decoration 'green gargoyle/gloom\*cases exhibits' 'Green Gargolye of Gloom'  
  "The Green Gargoyle of Gloom is so ugly it would probably turn the Gorgon Medusa  
   to stone. The small plaque affixed to the display case explains that it was made  
   by the mad demons of Hell Fire Cavern in a fit of psychotic fury, and then cast  
   out into the world of men as being too hideous for mere demonkind to bear. It  
   subsequently caused a public scandal when King Freddie the Fatuous mistook it  
   for a bust of his wife."  
  aName = (theName)  
  collectiveGroups = \[exhibitGroup\]  
;  
  
+ Decoration 'lost king crown/peregrine\*cases exhibits' 'Lost Crown of King Peregrine'  
  "Frankly, this does not seem to be the most impressive exhibit in the room. The  
   Lost Crown of King Peregrine the Pipsqueak looks like it came out of a   
   cheap Christmas cracker and then got itself coated with even cheaper tinsel.   
   The plaque on the display case nevertheless assures all who care to read it  
   that this was indeed genuinely the crown of this most ignominious of  
   insignificant monarchs. "  
  aName = (theName)  
  collectiveGroups = \[exhibitGroup\]  
;  
  
+ Decoration 'invisible naked mantle/emperor\*cases exhibits' 'Invisible Mantle of the Naked Emperor'  
  "The display case housing the Invisible Mantle appears to be empty, but the plaque  
   affixed to it declares that the Naked Emperor's Invisible Mantle is indeed there,  
   woven of the finest invisible cloth - so precious that none but the Naked Emperor  
   dare be seen wearing it in public (and even then not around small boys who might  
   ask awkward questions). "  
  aName = (theName)  
  collectiveGroups = \[exhibitGroup\]  
;  
  
At this stage, if the player types EXAMINE EXHIBITS or X CASES all four
exhibits will be listed, together with their full descriptions. In place
of this information overload, we may prefer to give the player a summary
description of the exhibits on display; we can do this by defining a
CollectiveGroup object with the same *plural* vocabulary that we've
given to each of the exhibits:  
  
+ exhibitGroup : CollectiveGroup, SecretFixture 'display \*cases\*exhibits' 'exhibits'    
  "The exhibits include such rare curiosities as the Amber Amulet of Amazement, the  
   Green Gargoyle of Gloom, the Lost Crown of King Peregrine the Pipsqueak  
    and the Invisible Mantle of the Naked Emperor. "      
;  
  
By default, straight out of the box, the CollectiveGroup only handles
the EXAMINE command, but if we want we can change this by overriding
isCollectiveAction(action, whichObj) and providing suitable handling on
the CollectiveGroup. For example, we might want a collective response to
an attempt to TAKE EXHIBITS:  
  
+ exhibitGroup : CollectiveGroup, SecretFixture 'display \*cases\*exhibits' 'exhibits'    
  "The exhibits include such rare curiosities as the Amber Amulet of Amazement, the  
   Green Gargoyle of Gloom, the Lost Crown of King Peregrine the Pipsqueak  
    and the Invisible Mantle of the Naked Emperor. "      
   isCollectiveAction(action, whichObj)  
     {  
         /\* we handle 'Examine' and 'Take'\*/  
         if (action.ofKind(ExamineAction) \|\| action.ofKind(TakeAction))  
             return true;  
   
         /\* it's not one of ours \*/  
         return nil;  
     }  
   dobjFor(Take)  
   {  
     verify() { illogical('The exhibits are all fixed in place and protected  
       by an alarm system. '); }  
   }  
;  
  
(It may be debatable whether information about a previously unmentioned
alarm system belongs in a call to illogical, but it should be reasonably
obvious to the player that s/he can't just walk off with museum
exhibits, so this seems the best place to put it; besides, there's no
way we could put the 'fixed in place' part of the message in verify()
and the 'alarm system' part in check() and have both displayed).  
  
If you wanted, you could take this a stage further still and have
exhibitGroup.isCollectiveAction simply return true; any attempt to do
anything to the exhibits will then give a perfectly good summary
response. In the meantime, we should add the Benefactors' Room referred
to in the south property of the museum, together with the Golden Banana
of Discord in its specially protected display case:  
  
benefactorsRoom : Room 'Benefactors\\ Exhibition Room' 'the benefactors\\ room'  
 "This room seems brighter and cleaner than the main section of the museum,  
  but is curiously bare, apart from a single glass display case in the middle  
  of the room. "  
 north = museum  
 out asExit(north)  
;  
  
+ bananaCase : Container, Fixture 'glass display case' 'display case'  
  "The case is of much higher quality that the display cases outside; standing on  
   a polished oak plinth the large square case is held together with polished  
   brass strips framing the glass sides and top. A polished brass plaque fastened  
   near the top of the plinth declares the contents of the case to be the Golden  
   Banana of Discord. "    
  isOpen = nil  
  material = glass  
  dobjFor(CutWith)  
  {  
    verify()   
    {   
      if(isOpen) illogicalNow('It\\s already been cut open. ');   
    }  
    check()  
    {  
      if(gIobj != diamondRing)        
        failCheck('{You/he} can\\t cut it with that. ');         
    }  
    action()  
    {  
      "{You/he} cut{s} open the glass display case. ";  
      if(gActor != gPlayerChar)  
        "\<q\>There you are!\</q\> {you/she} declare{s}, \<q\>Easy!\</q\>\\.p\>";  
      isOpen = true;  
      microphone.notifyCut();  
    }   
  }  
;  
  
++ goldenBanana : Thing 'golden banana/discord' 'Golden Banana of Discord'  
  "It's about the shape and size of an ordinary banana, but seems to be made  
    of solid gold. "  
  aName = (theName)  
  weight = 6  
  isListedInContents = (!isIn(bananaCase))  
;  
    
+ Fixture 'polished oak plinth' 'plinth'  
  "The polished oak plinth supporting the glass display case is about a foot square  
   and three feet tall. It's quite plain in design, apart from a decoratively  
   carved slat just beneath the case. "  
;  
  
++ Component 'decoratively carved leaf slat/pattern' 'ridge'  
  "The slat, decoratively carved with a leaf pattern, runs round the top  
   of the plinth, just beneath the glass display case. Close inspection  
   reveals a small round black disc inset into one side of the slat, just above  
   the plaque. "  
;  
  
+++ microphone : Attachable, Component 'small round black disc/disk/microphone'  
   'small round disc'  
   "Closer examination reveals that it could very well be a small  
    microphone. \<\<rename\>\>"  
   rename { name = 'microphone'; }    
   canAttachTo(obj) { return obj==stickingPlaster; }  
   handleAttach(other)  
   { other.moveInto(location.location); }  
     
   moveWhileAttached(movedObj, newCont)  
   {  
     if(movedObj != self && newCont != location.location)  
        tryImplicitAction(DetachFrom, movedObj, self);   
   }  
   isMajorItemFor(obj) { return obj==stickingPlaster; }  
   notifyCut()   
   {   
     if(!isAttachedTo(stickingPlaster))  
     {          
        curator.moveIntoForTravel(benefactorsRoom);  
       "Almost at once an alarm bell starts ringing and a couple   
        of seconds later {the curator/he} comes running into the   
        room to find out what's happened. He stares aghast at the   
        opened case.\<.p\>";          
     }           
   }  
;     
     
++ bananaPlaque : Component 'brass plaque' 'brass plaque'  
   "The plaque attached to the front of the case explains that this   
   indeed \<i\>The\</i\> famous Golden  
   Banana, forged aeons ago in the fires of Mount Gloom, and borne out  
   of Hell Fire Cavern by Benedict the Banana-Bearer at the cost of his  
   sanity and his left big toe-nail. The plaque also warns:\b  
   \<q\>This artefact is the most highly-treasured property of the state:\n  
   Anyone attempting to steal it will be terminated without trial!\</q\> "  
;  
  
As you'll observe, the intention is to allow the player character or
Sarah to cut open the glass case with the diamond ring, but to have the
sound of their doing so picked up by a microphone that triggers an alarm
unless the player has first attached a sticking plaster over the
microphone to prevent it. For this to work we need to make sure that the
sticking plaster, defined long ago as part of the contents of the first
aid box, is also an Attachable:  
  
++ stickingPlaster : **Attachable**, Thing 'sticking adhesive plaster' 'sticking plaster'  
  "It's a small, round flesh-coloured sticking plaster that might just cover  
   a small cut or blister. "  
;  
  
Note: as from TADS 3.0.10 it became possible for an object to be
associated with more than one CollectiveGroup. Previously it was
possible for an object to belong to only one collectiveGroup at a time,
and membership of that group would have been indicated by setting the
old collectiveGroup property to the single collectiveGroup object
thus:  
  
+ Decoration 'amber amulet/amazement\*cases exhibits' 'Amber Amulet of Amazement'  
  "The pendant on display in this case is indisputably amber, and quite possibly  
   an amulet. The accompanying plaque explains that its principal source of amazement  
   is that it performed no useful function whatsoever despite having several times   
   changed hands at ever more inflated prices. \<i\>Quam credulus emptor nemo ineptior\</i\>  
   the plaque concludes pompously. "  
  aName = (theName)  
  collectiveGroup = exhibitGroup  
;  
  
This way of doing things is still legal, and it will still work, but it
is now regarded as 'obsolescent', so that new game code should instead
use the collectiveGroups property (with an s on the end) set to a list
of groups (even if the list contains only a single member) as in the
previous examples. The practical reason for avoiding the now obsolescent
collectiveGroup property in new game code is that support for it may
eventually be withdrawn.  
  
