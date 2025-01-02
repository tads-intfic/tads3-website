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
<td style="text-align: left;"><strong>Settable : <a
href="thing-introduction.html">Thing</a><br />
</strong></td>
<td style="text-align: right;"><a href="springlever.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="numbereddial.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
Settable is the base class for the various types of Dial, like the
[LabeledDial](labeleddial.html) we constructed a couple of sections back.
It can also be used to construct any other kind of settable control we
care to devise. Here we'll use it to implement a slider on the Tardis
control console; after all, now we've got the ship to sail round the
lake, it's time to see what we get the Tardis to do.  
  
What we want to achieve is quite complicated. Ultimately the Tardis will
be controlled by a combination of a slider that can be set to any letter
from A to Z and a dial that can be turned to any number from 0 to 9. The
Tardis's destination will be decided by a combination of both settings
(making 260 in all), but unless the fluid link is refilled with mercury,
the slider setting will have no effect. Some of the Tardis's
destinations will be predefined (the interesting ones), while we'll
dynamically create (rather boring) ones for when the player goes to an
undefined destination. This makes it very hard for players to find the
useful destinations by trying settings at random - instead they'll have
to find the suitably planted list of useful destinations.  
  
So much for the summary, now let's get on with the implementation. As
promised, we'll first make the slider. Make sure the following code is
positioned in your code so that the slider is a Component of the
tardisConsole object:  
  
+ tardisSlider : Settable, Component 'slider' 'slider'  
   "The slider can be set to any letter of the alphabet.  
   It's currently set to \<\<curSetting\>\>. "  
   curSetting = 'A'  
   makeSetting(val)  
   {   
     curSetting = val.toUpper;     
   }  
   isValidSetting(val)  
  {  
    val = val.toUpper;  
    return (val \>= 'A') && (val \<= 'Z') && (val.length==1);  
  }   
   setToInvalidMsg = 'The slider can be set only to a single letter from A to Z. '   
;  
  
Once again we override **makeSetting** to convert a lower case entry to
an upper case one. The only new factor here is the need to override the
**isValidSetting** method to define what settings we'll accept. In this
case we want to accept any single character setting between A and Z
inclusive, so we test accordingly. Finally, we override the
**setToInvalidMsg** to display a more meaningful message in the event of
the player attempting to set the slider to an inappropriate setting,
such as SET SLIDER TO 9 or SET SLIDER TO OMEGA.  
  
As things stands, the only verb that can be used to set the slider is
SET; players might legitimately try to MOVE, PUSH or PULL the slider to
a new setting. To cater for this we'll expand the vocabulary for the
SetTo action:  
  
modify VerbRule(SetTo)  
  ('move' \| 'push'\| 'pull' \| 'set') singleDobj 'to' singleLiteral  
     :   
;  
  
This might be a bit more liberal than we'd ideally like (e.g. since you
can SET DIAL TO 7 you'll now also be able to PUSH DIAL TO 7, PULL DIAL
TO 7 or MOVE DIAL TO 7 as well), but erring a little on the side of
liberality in allowing player commands is probably no bad thing.  
  
  
  
  
