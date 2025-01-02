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
<td style="text-align: left;"><strong>AskTellShowTopic :
TopicOrThingMatchTopic<br />
</strong></td>
<td style="text-align: right;"><a
href="askaboutfortopic.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="asktellgiveshowtopic.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
An AskTellShowTopic, as you might guess, responds to ASK X ABOUT Y, TELL
X ABOUT Y or SHOW Y TO X. As an example we could take the ship floating
by the shore, which the player character might either ask or tell Sarah
about, or else point out to her:  
  
+ AskTellShowTopic, StopEventList @ship  
  \[   
    '\<q\>Do you know anything about that ship?\</q\> you ask.\b  
     \<q\>Not really.\</q\> she admits, \<q\>Only that it floats.\</q\>',  
       
    '\<q\>How long has that ship been there?\</q\> you wonder.\b  
     \<q\>Well, it was there when I came, and it hasn\\t moved since.\</q\>  
      she replies. ',  
        
    '\<q\>Do you think we could use that ship to sail out of here?\</q\>  
     you ask.\b  
     \<q\>I have no idea - why don\\t you go and investigate?\</q\> she suggests.'       
  \]    
;  
  
++ AltTopic  
  "\<q\>What do you make of this ship?\</q\> you ask.\b  
   \<q\>Let's investigate some more.\</q\> she suggests,  
   \<q\>How about looking over there?\</q\> she points vaguely. "    
  isActive = (getActor.location.ofKind(Deck))  
;  
  
++ AltTopic  
  "\<q\>So, what do you think of the ship?\</q\> you ask.\b  
   \<q\>You're the one that's sailed it!\</q\> she points out."  
  isActive = (ship.moved)  
;  
  
Note, however, that when the ship is not explicitly in view (i.e. the
ship object is not visible in the current location) SHOW SHIP will not,
in fact, behave the same as ASK ABOUT SHIP or TELL ABOUT SHIP. You can
verify this by ASKING Sarah ABOUT the ship and SHOWing Sarah the ship
while she's standing on the shore, then getting her to follow you aboard
and trying ASK SARAH ABOUT SHIP and SHOW SARAH SHIP.  
