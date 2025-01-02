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
<td style="text-align: left;"><strong>NumberedDial : <a
href="dial.html">Dial</a><br />
</strong></td>
<td style="text-align: right;"><a href="settable.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="dynamiclocations.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A Numbered Dial is simply a dial that can be turned to a number of
numerical (and only numerical) settings. The definition of the numbered
dial on the Tardis control console is pretty straightforward. We need to
use two new properties used on NumberedDial, **minSetting** and
**maxSetting**, which, as their names suggest, contain the minimum and
maximum numerical value to which the dial can be set. Again, the object
must be placed in your code so that it's a Component of tardisConsole:  
  
+ tardisDial : NumberedDial, Component '(tardis) control dial' 'dial'  
  "The numbers round the dial run from 0 to 9; the dial is currently set to \<\<curSetting\>\>. "  
  minSetting = 0  
  maxSetting = 9  
  curSetting = '0'  
  disambigName = 'Tardis control dial'  
;  
  
Note the need for a disambigName and the extra vocabWords corresponding
to it; if the scales are in the control room at some point (as they
probably will be once the player has picked them up) there would
otherwise be no way the player could refer to this dial in preference to
that on the scales.  
  
One thing in particular you need to watch out for on NumberedDials is
that while minSetting and maxSetting are ***numerical*** properties,
curSetting is a ***string*** property. This can easily catch you out if
you expect curSetting to contain a number because it's a property of a
NumberedDial. What curSetting in fact contains here is a string
representation of the number. If for any reason you need its numerical
value (e.g. for calculation or comparison purposes) you will need to
convert it using the toInteger function, e.g. (if we imagine a situation
with two numbered dials):  
  
local overallSetting = 10 \* toInteger(dial1.curSetting) + toInteger(dial2.curSetting);  
  
We shan't be needing to do that in this game; instead we'll take a brief
(or perhaps not-so-brief) diversion from the gadget classes to construct
a custom gadget for moving the Tardis round the universe in time and
space.  
  
