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
<td style="text-align: left;"><strong>Matchstick &amp; Matchbook<br />
</strong></td>
<td style="text-align: right;"><a href="oillamp.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="dynamite.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
Although the oil lamp makes a much more convenient light source than the
stock of candles, it could still be inconvenient if it went out some
distance from a naked flame. We could make things easier for the player
by providing a book of matches. Both the Matchbook (a subclass of
Dispenser) and Matchstick (a subclass of LightSource and FireSource) are
defined in the library, and can be used with very little customization.
All we need to do is to provide a description for the Matchbook and a
name and some vocabulary for our Matchsticks. If we wanted various
different types of Matchstick in our game we might have to define
subclasses of Matchstick to do it on, but in this case we can simply
override the Matchstick class.  
  
matchbook : Matchbook 'book matches' 'book of matches'   
   @(dressingTable.subUnderside)  
  "The matchbook bears a picture of a banana and the words  
   CABAL LIGHTING CO. "  
;  
  
modify Matchstick  
  vocabWords = 'match matchstick\*matches'  
  name = 'match'  
  isEquivalent = true;  
;  
  
+ Matchstick;  
+ Matchstick;  
+ Matchstick;  
+ Matchstick;  
+ Matchstick;  
+ Matchstick;  
+ Matchstick;  
+ Matchstick;  
+ Matchstick;  
+ Matchstick;  
  
  
