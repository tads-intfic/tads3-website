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
<td style="text-align: left;"><strong>SecretDoor : BasicDoor<br />
</strong></td>
<td style="text-align: right;"><a
href="travelwithmessage.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="throughpassage.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
The description of [mainCave](stairwayup.html) includes a rock to the
north. We'll make this a secret door that reveals a secret passage
behind when it is pushed to one side (using the [Thing
template](thingstatetemplate.html)):  
  
+ rock: SecretDoor 'large rock' 'rock'  
  "A large rock \<\<isOpen ? 'lies to one side of a passage beyond'   
      : 'leans against the north wall of the cave'\>\> . "  
  dobjFor(Push)  
  {  
    verify() {}  
    action()  
    {  
      makeOpen(!isOpen);  
      "The rock rolls aside. ";  
    }  
  }  
;  
  
  
Note that this needs to be defined just after mainCave, so that it is
included in mainCave's contents. Note also that we need to add the
following to the definition of mainCave:  
  
north = rock  
  
The passage is opened by pushing the rock to one side, so we override
the action() part of dobjFor(Push) to bring about the desired behaviour.
SecretDoor descends from BasicDoor, which defines makeOpen(stat) method;
this method sets the isOpen property to stat, which should be either
true (for open) or nil (for closed). To make pushing the rock open the
passage if it is closed, and close it if it is open, we call
makeOpen(!isOpen). We also test the isOpen property to provide a
description of the rock that depends on its position.  
  
We next need to define the location on the far side of the rock:  
  
secretPassage : Room 'Secret Passage' 'the secret passage'  
  "This hitherto secret passage narrows to a long tunnel running north. To the  
   south \<\<rock2.isOpen ? 'an opening leads out into a large, ruddy-hued cave'  
    : 'a large rock blocks the way out'\>\>. "   
  south = rock2  
  brightness = (rock2.isOpen ? 3 : 0)  
;  
  
/\* This rock is simply the other side of the rock defined in mainCave   
 \* In this definition we use the [Passage template](passagetemplate.html)  
 \*/  
  
+ rock2 : SecretDoor -\> rock 'large rock' 'large rock'  
  "It's a large rock, too heavy to lift. "    
  dobjFor(Push)  
  {  
    verify() {}  
    action()  
    {  
      makeOpen(!isOpen);  
      "The rock rolls aside. ";  
    }  
  }  
;  
  
The second rock (rock2) is simply the first rock seen from the other
side; we link it to the rock with -\> which defines the masterObject
property. Otherwise everything behaves much the same as the rock, except
that for variety we vary the description of rock2 in the room
description.  
A further refinement we can make is to have the illumination of the
secretPassage room depend on the boulder's being pushed aside. If light
enters the passage only through the exit into the startCave, then
pushing the boulder shut while inside the secretPassage will cut off the
light. To accomplish this we override the brightness property of
secretPassage to vary according to whether the boulder is open or not.  
  
  
  
  
