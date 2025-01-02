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
<td style="text-align: left;"><strong>Lever (2)<br />
</strong></td>
<td style="text-align: right;"><a href="switch.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="anotherlock.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
In order to collect the mercury that spits from the second switch in the
space station and insert it into the fluid link, the player will need to
use the syringe found in the first-aid kit. To fill and empty the
syringe requires pulling and pushing its plunger, which makes its
plunger a good candidate to be yet another Lever. To do this we need to
make substantial changes to the syringe object and then add the plunger
as a component:  
  
++ syringe: Thing 'syringe/needle' 'syringe'  
  "The syringe is a long plastic tube with a needle at one end and a plunger at the  
  other. It is \<\<fluid==nil ? 'empty' : 'full of '+ fluid.name\>\>. "  
  fill(liquid)  
  {  
    fluid = liquid;  
  }    
  fluid = nil  
;  
  
+++ plunger : Lever, Component 'plunger/knob' 'plunger'  
  "It's a small piece of white plastic with a round knob. "  
  makePulled(pulled)  
  {  
    if(pulled && syringe.isIn(mercury))  
    {  
      syringe.fill(mercury);  
      "The plunger pulls the silvery liquid into the syringe. ";  
      syringe.moveInto(gActor);   
    }    
    if(!pulled && syringe.fluid != nil)  
    {  
      "A jet of \<\<syringe.fluid.name\>\> spurts from the needle";  
        
      if(syringe.isIn(tinyHole) && syringe.fluid == mercury)  
      {  
        ", filling the fluid link";  
        fluidLink.full = true;  
      }  
      ". ";  
      syringe.fill(nil);  
    }    
    inherited(pulled);  
  }  
;  
  
Although the syringe is only meant to be filled with mercury, we allow
for the possibility of handling other fluids by giving it a fluid
property to describe what particular fluid, if any, it contains. Most of
the complicated handling goes in the makePulled method of the plunger
object, which we add as a component of the syringe. Here, we check to
ensure that mercury is indeed what the syringe contains, if indeed it
contains anything, but only really add handling for that case. In
default of adding handling for a FillWith command (which we'll leave as
an exercise for the reader) we make the player first PUT SYRINGE (or
NEEDLE) IN MERCURY and then PULL PLUNGER to fill the syringe, but just
to make things a bit easier for the player we make the handling of PULL
PLUNGER move the syringe back into the player's grasp (since PUT NEEDLE
IN MERCURY will have effectively dropped it from the player's grasp, and
this may not be immediately obvious to the player, who could all too
easily walk off after filling the syringe without realizing that it was
being left behind).  
  
It will be apparent from syringe.makePulled that in order to fill the
fluid link from the syringe we need first to insert the syringe in some
tiny hole. This will be a hole at one end of the fluid link, a hole only
accessible, or visible, when the link is removed from its compartment.
At the same time, we have to ensure that the player cannot replace the
link in its compartment while the syringe is still sticking out of the
hole, so we need to amend both the compartment and the link, as well as
adding a tinyHole object:  
  
  
+ tardisPanelCompartment : PresentLater, RestrictedContainer, Fixture 'shallow compartment'  
   'shallow compartment' "It's about four inches deep. "  
  validContents = \[fluidLink\]     
  plKey = 'tardis'  
  **notifyInsert(obj, newContainer)  
  {  
    if(newContainer == self && syringe.isIn(tinyHole))  
    {  
      "You can't insert \<\<obj.theName\>\> into \<\<theName\>\> while the syringe is  
       sticking out of it. ";  
       exit;  
    }  
  }**  
;  
  
++ fluidLink : Thing 'fluid link' 'fluid link'  
   **"It's a long transparent tube, \<\<full ? 'full of mercury' : 'with just a bit of  
    mercury in it'\>\>. Both ends are capped with some kind of shiny   
    metal\<\<isIn(tardisPanelCompartment) ? nil : ', and at one end is a tiny hole'\>\>. "  
    full = nil  
   iobjFor(PutIn) maybeRemapTo(tinyHole.sightPresence, PutIn, DirectObject, tinyHole)**  
;  
  
+++ 

tinyHole : Component, RestrictedContainer 'tiny hole' 'tiny hole'  
  "The tiny hole in the end cap of the fluid link is protected by some kind of membrane  
   to prevent the contents escaping. "  
   validContents = \[syringe\]  
   sightPresence = (!fluidLink.isIn(tardisPanelCompartment))  
;  
  
The overridden tardisPanelComponent.notifyInsert method does the job of
preventing an attempt to return the fluid link to its compartment with
the syringe still sticking in it. We change the description of the fluid
link so it describes whether it is full or not and mentions the hole at
its end provided the hole is visible, and we change the full property to
be nil to start with. It is possible that the player may try to PUT
SYRINGE IN FLUID LINK instead of PUT SYRINGE IN HOLE, and we allow this
by remapping the former command to the latter provided the hole is
visible. We do this with the maybeRemapTo macro, which carries out the
remapping only if its first argument evaluates to true. Finally, we make
the tinyHole visible or not by overriding its sightPresence property to
be true if and only if the link is out of its compartment. In a case
like this (where we want something descended from NonPortable to appear
and disappear), this is probably the easiest and most efficient way of
achieving the effect.  
  
If you now recompile and test the game, you should not only be able to
refill the fluid link, but you should find that until you do so, setting
the slider on the Tardis control console to different values has no
effect on the Tardis's destination. Since filling the fluid link is a
bit of a rigmarole to go through when testing, you might want to add the
following cheating short cut (for testing purpose) in your debug code
(between \#ifdef \_\_DEBUG and \#endif):  
  
DefineIAction(FillFluidLink)  
  execAction  
  {  
    fluidLink.full = true;  
    "Well, even if the fluid link wasn't full before, it sure is now! ";  
  }  
;  
  
VerbRule(FillFluidLink)  
  ('fill' 'fluid' 'link') \| 'ffl'  
  : FillFluidLinkAction   
  verbPhrase = 'fill/filling the fluid link'  
;  
  
  
