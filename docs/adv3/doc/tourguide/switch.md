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
<td style="text-align: left;"><strong>Switch : <a
href="onoffcontrol.html">OnOffControl</a><br />
</strong></td>
<td style="text-align: right;"><a href="onoffcontrol.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="lever(2).html">[Next]</a></td>
</tr>
</tbody>
</table>

  
Switch is a simple extension of the generic
[OnOffControl](onoffcontrol.html) that can be used with a SWITCH command
without specifying ON or OFF, and treats FLIP synonymously. SWITCH X or
FLIP X thus turns X on if it was off and vice versa.  
  
We'll use a Switch in the second room of the space station as the
apparent (but only apparent) duplicate of the OnOffControl we used in
the first. When the player confidently tries to turn it off in the
expectation of opening another door, however, s/he'll find it doesn't
quite work as expected:  
  
ssLivingQuarters : Room 'Space Station - Living Quarters'  
  "These living quarters look totally abandoned; it doesn't look as if anyone has  
   been here for years. A table is bolted to the centre of the floor.   
   An open doorway leads through one bulkhead, while a closed sliding door is   
   set in the opposite one. "     
   out = ssDoorway  
;  
  
+ ssDoorway : ThroughPassage -\> ssDoor1 'open doorway' 'open doorway'  
  "The open doorway leads back to the observation deck. "  
;  
  
+ ssTable: Fixture, Surface 'table' 'table'  
  "It's a plain steel table, bolted to the floor. "  
;  
  
+ ssDoor2 : IndirectLockable, Door 'door' 'door'  
  "The door is a solid sheet of steel. It looks like it's meant to slide open.  
   Next to the door is a small green switch. "     
;  
  
+ Switch, Fixture 'small green switch/maglock' 'small green switch'  
   "The switch is labelled MAGLOCK. "  
   makeOn(val)  
   {  
     if(!touched)  
     {  
       mercury.makePresent;  
       touched = true;  
       "The switch spits and fizzles, and then starts oozing a silvery liquid  
       which gathers in a small pool on the floor. ";  
     }  
     inherited(val);  
   }  
   isOn = true  
   touched = nil  
;  
  
+ mercury : PresentLater, RestrictedContainer 'silver silvery liquid/mercury/pool'  
   'silvery liquid'  
  "It's a dense, silver-coloured liquid. "  
  dobjFor(Take)  
  {  
    action()  
    {  
      "{You/he} can't pick it up, it simply runs between {your} fingers. ";  
    }  
  }  
  validContents = \[syringe\]  
  specialDesc = "A small pool of silvery liquid lies on the floor near the door. "  
;  
  
If you recall far enough back, when we first introduced the fluid link
we hinted that it would need refilling with mercury - this is how the
player will come by it. The validContents property of the mercury also
hints how the mercury is to be collected. We'll see to all that next.  
  
As a second example of a switch we'll add a switch to the Tardis control
panel to open and close the door (the description of the control panel
mentions a switch, but we've yet to implement it). The following object
should be located shortly after the definition of tardisConsole so that
it's located in the console:  
  
+ tardisSwitch : Switch, Component '(tardis) bright green switch' 'green switch'  
  "It's bright green. "  
  makeOn(val)  
  {  
    "As {you/he} flip{s} the switch the outer door \<\<val ? 'opens' : 'closes'\>\>. ";  
   tardisDoorInside.makeOpen(val);     
  }  
  dobjFor(Push) asDobjFor(Switch)   
  isOn = (tardisDoorInside.isOpen)   
;  
  
There's a couple of things to note here. First, we define dobjFor(Push)
asDobjFor(Switch) so that PRESS SWITCH or PUSH GREEN SWITCH works the
same as FLIP SWITCH or SWITCH SWITCH, namely turning the switch on if
its off and vice versa. Secondly, instead of having the switch's makeOn
method change the value of its isOn property, we have it call the Tardis
door's makeOpen method to open or close the door (and display a suitable
message). We then define the isOn property to reflect the door's isOpen
property so the two stay in sync automatically.  
  
