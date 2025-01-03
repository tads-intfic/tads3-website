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
<td style="text-align: left;"><strong>AskTellGiveShowTopic :
TopicOrThingMatchTopic<br />
</strong></td>
<td style="text-align: right;"><a
href="asktellshowtopic.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="yesno+specialtopics.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
An AskTellGiveShow topic is one that combines responses to ASK X ABOUT
Y, TELL TELL ABOUT Y, GIVE Y TO X and SHOW Y TO X. Having something that
responds to such a wide range of commands may not be useful that often,
but as an example we'll give Sarah such a topic to respond to news of
the discovery of the gold tablet:  
  
++ AskTellGiveShowTopic @goldTablet  
  "\<q\>I've found a solid gold tablet!\</q\> you declare, \<q\>What do you think  
   it's worth?\</q\>\b  
   \<q\>Cor! It must be worth a fortune!\</q\> she exclaims. "  
;  
  
This should be put under the sarahFollowing : AccompanyingState.  
  
Again, if you have Sarah with you when you first topple the statue, note
the slightly different behaviours of TELL SARAH ABOUT GOLD TABLET and
GIVE SARAH GOLD TABLET; the latter, but not the former, will trigger an
implied TAKE command (the same variation will be found between ASK and
SHOW). Furthermore, if, having examined the tablet, you leave it where
it is and return to the beach, you'll find you can talk to Sarah about
the tablet with ASK ABOUT and TELL ABOUT, but you can no longer SHOW or
GIVE to her.  
  
Thus, although an AskTellGiveShowTopic responds to all four commands, it
does not mean that all four commands will necessarily be treated the
same under all circumstances; the object still has to be physically
present for GIVE and SHOW to be valid.  
