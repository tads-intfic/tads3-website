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
<td style="text-align: left;"><strong>LabeledDial : <a
href="dial.html">Dial</a><br />
</strong></td>
<td style="text-align: right;"><a href="button.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="springlever.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
The time has come to set sail in our ship. The panel on its quarterdeck
is described as having a hexagonal hole, a wheel, and a lever. In order
to sail the ship the player has to insert the hexagonal crystal in the
hole, set the wheel to a destination, and pull the autopilot handle. The
ship has four possible destinations, namely the north, east, south and
west shores of the lake. It starts by the north shore, so the player
will obviously have to turn the wheel to one of the other destinations
to set sail for the first time.  
  
We have already implemented the hexagonal hole (as a
[RestrictedContainer](restrictedcontainer.html)), so the next task is to
construct the wheel. This in essence will be a thinly disguised dial
that can be turned to N, S, W or E, so we shall use a LabeledDial to
implement it. We list its possible settings in the **validSettings**
property (which should always contain a list of strings). By default
LabeledDial.**isValidSetting(val)** determines whether val is a valid
setting by checking that it appears in the validSettings list, after
converting both to upper case for the purpose of the comparison (thereby
making the check non-case-sensitive). This does not itself convert the
**curSetting** (current setting) property to upper case, which is what
we want here, so we need to override **makeSetting(val)** so that this
conversion takes place. This conversion is desirable both because it
looks better to have the game report "This shows that the wheel is
currently turned to E" than "This shows that the wheel is currently
turned to e" (even if the player types TURN WHEEL TO e), and because it
slightly simplifies the other use we are going to make of the curSetting
property here, namely to determine the direction and destination of
travel that correspond to the current setting of the wheel:  
  
++ wheel : LabeledDial, Component 'wheel/pointer' 'wheel'  
  "It looks much like a traditional wooden spoked ship's wheel, but incorporates a   
   pointer that indicates the four points of the compass. This shows that the wheel  
   is currently turned to \<\<curSetting\>\>. "  
   validSettings = \['N', 'S', 'E', 'W'\]  
   curSetting = 'N'  
   directions = \['north', 'south', 'east', 'west'\]  
   destinations = \[lakeRoom, southShore, eastShore, westShore\]  
   makeSetting(val)  
   {  
     curSetting = val.toUpper();  
   }  
   curDirection = (directions \[ validSettings.indexOf(curSetting) \] )  
   curDestination = (destinations \[ validSettings.indexOf(curSetting) \] )  
;  
  
  
