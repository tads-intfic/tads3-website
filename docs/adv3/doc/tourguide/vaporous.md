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
<td style="text-align: left;"><strong>Vaporous : <a
href="intangible.html">Intangible</a><br />
</strong></td>
<td style="text-align: right;"><a href="occluder.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="simpleodor.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
Vaporous is a good class to use for something you can see, and maybe
smell and hear, but that is not fully tangible, such as a ray of light,
a flame, or smoke. To set up an example, let's start creating some
locations on the east side of the lake:  
  
eastShore : Room 'Stone Jetty' 'the stone jetty'  
  "This bleak stone jetty is little more than a narrow corridor between the lake to  
  the west and the rough cave wall to the east. A broad flight of stone steps leads  
  down to the north, while a much narrower flight leads up to the south. "  
  **north = eastShoreDown  
  down asExit(north)  
  south = eastShoreUp  
  up asExit(south)  
  roomParts = \[defaultGround, defaultEastWall, caveSky\]  
**;  
  
+ eastShoreDown : StairwayDown 'broad stone flight/steps' 'broad stone
steps'  
  "The broad stone steps looks fatally inviting, an easy walk down into the  
   bowels of the earth. "  
  isPlural = true   
;  
  
+ eastShoreUp : StairwayUp 'narrow stone flight/steps' 'narrow stone
steps'  
  "The broad stone steps looks fatally inviting, an easy walk down into the  
   bowels of the earth. "  
  isPlural = true   
;  
  
hellVestibule : Room 'Vestibule of Hell Fire Cavern' 'the vestibule'  
  "The broad stone steps leading up to the south come to an end in this small, hot,  
   rough round cave that seems to form the vestibule to what lies beyond the  
   uninviting entrance to the east, through which comes a dull red glow. A  
   sign next to this entrance declares it to be the entrance to Hell Fire Cavern. "   
  south = hellVestibuleUp  
  up asExit(south)    
;  
  
+ hellVestibuleUp : StairwayUp -\>eastShoreDown 'broad stone steps' 'broad stone steps'  
  "The steps back up to the jetty look long, rough and wearisome. "  
  isPlural = true  
;  
  
+ Readable, Decoration 'sign' 'sign'  
  "The sign declares:\b  
   \<b\>\<FONT COLOR=RED\>HELL FIRE CAVERN\</FONT\>\</b\>\n  
   ADMISSION ABSOLUTELY FREE\n  
   (getting out alive not guaranteed)\n"  
;  
  
The description of hellVestibule refers to a "dull red glow"; this is
not something the player can TAKE, PUSH, OPEN or otherwise interact with
as if it were a physical object, but it is plainly something the player
can see, and so could EXAMINE. This makes it a good candidate for
implementation as a Vaporous:  
  
+ redGlow : Vaporous 'dull red glow' 'dull red glow'  
  "It flickers a dull, hungry shade of red with a diabolical, fiery look to it. "  
;  
  
The only thing you can meaningfully do to a Vaporous is EXAMINE in (or
LISTEN TO it or SMELL it if the author provides a listenDesc and a
smellDesc), otherwise it provides one standard message if the player
tries to LOOK IN, UNDER or BEHIND ("You just see the dull red glow.")
and another if you try to do anything else to it, such as PUSH, TAKE or
EAT it ("You can't do that to a dull red glow."). For most purposes
these messages are probably fine, but you can easily change them if you
want to by overriding the **lookInVaporousMsg** and
**notWithIntangibleMsg** properties, e.g.:  
  
+ redGlow: Vaporous 'dull red glow' 'dull red glow'  
  "It flickers a dull, hungry shade of red with a diabolical, fiery look to it. "  
  lookInVaporousMsg(obj) { return 'It\\s just as red whichever way you look at it. '; }  
  notWithIntangibleMsg(obj) { return 'That\\s not a particularly practical suggestion. '; }  
;  
  
Note that these two message properties have to be overridden as methods
with a single parameter that return a single-quoted string.
Unfortunately, this is not a general rule when overriding a message
property; it other cases you might simply need to override the message
property with a single-quoted string. To find out what you need to do in
any particular case you need to look up the corresponding message
property in the library code to see how it is implemented.  
  
  
