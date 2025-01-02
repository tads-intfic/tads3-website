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
<td style="text-align: left;"><strong>SpringLever : <a
href="lever.html">Lever</a><br />
</strong></td>
<td style="text-align: right;"><a href="labeleddial.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="settable.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A SpringLever is a lever that returns to its original position after
being pulled. It is functionally similar to a Button, except that it
responds to PULL instead of PRESS or PUSH. Apart from giving SpringLever
the usual vocabulary, name and description properties, all one need
normally do is to override its actionDobjPull method with whatever one
wants to happen when the lever is pulled. In this case we want nothing
to happen unless the hexagonal crystal is in the hexagonal hole and the
wheel points to a destination other than where the ship already is, so
we first test for these cases. If the conditions for setting sail are
met, we display a suitable message making use of wheel.curDirection
(defined in the [LabeledDial](labeleddial.html) example above) to
describe the direction of travel, and then move the ship into its new
destination as defined by wheel.curDestination:  
  
  
++ SpringLever, Component 'long silver (black) lever/knob/plaque' 'lever'  
    "It's a long silver lever with a black knob on the end. A silver plaque  
     screwed just underneath it is inscribed AUTOPILOT. "  
   dobjFor(Pull)  
   {  
     action()  
     {  
       if(!hexCrystal.isIn(hexHole) \|\| wheel.curDestination == ship.location)  
         "Nothing happens. ";  
       else  
       {  
         "A hum starts up deep in the bowels of the ship. With a reluctant creak,   
          the capstan turns, drawing up the anchor. The ship judders, then starts  
          gliding out into the middle of the lake. From there  
          it continues \<\<wheel.curDirection\>\> until it comes to rest by the  
          \<\<wheel.curDirection\>\>ern shore, where the capstan lowers the anchor,   
          and the ship moors itself up, port side to the shore. ";  
          ship.moveInto(wheel.curDestination);  
       }  
     }  
   }  
;  
  
Before trying this out, it would be well to define the three new
locations that can now be reached by the ship. If you are splitting your
code into separate source files, you might like to start a fresh source
file for each of these rooms, since each will be the start of a new
region of the map:  
  
eastShore : Room 'Stone Jetty' 'the stone jetty'  
  "This bleak stone jetty is little more than a narrow corridor between the lake to  
  the west and the rough cave wall to the east. A broad flight of stone steps leads  
  down to the north, while a much narrower flight leads up to the south. "  
;  
  
westShore : Room 'Sandy Beach' 'the sandy beach'  
   "For an underground lake this section of shore forms a surprisingly large beach. The  
   lake laps the shore to the east, while a pair of paths lead up from the beach to the  
   cave complex beyond, one to the northwest and the other to the southwest. "  
;  
  
southShore : Room 'Rocky shore' 'the rocky shore'  
   "The rocky shore looks so barren here as to be scarcely worth visiting, apart  
    from a narrow tunnel leading off to the south. "  
;  
  
Note: depending on when you last recompiled the game you may need to do
a complete recompile (Build -\> Full Recompile for Debugging) after
adding these locations. Having done so, you can try sailing the ship
round the lake.  
  
  
  
  
  
