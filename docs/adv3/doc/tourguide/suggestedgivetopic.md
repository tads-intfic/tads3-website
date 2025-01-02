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
<td style="text-align: left;"><strong>SuggestedGiveTopic : <a
href="suggestedtopic.html">SuggestedTopic</a><br />
</strong></td>
<td style="text-align: right;"><a
href="suggestedtelltopic.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="suggestedshowtopic.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A SuggestedAskTopic is the particular type of
[SuggestedTopic](suggestedtopic.html) that suggests to the player that
s/he could Give such-and-such to so-and-so.  
  
For example, if we want to suggest to the player that he might give the
carbuncle to the curator, we could add the following to the appropriate
GiveTopic (previously defined):  
  
++ GiveTopic, **SuggestedGiveTopic** @carbuncle  
  topicResponse  
  {  
   "{The curator/he} takes the carbuncle and examines it carefully, then declares,  
   \<q\>Wunderbar! Ausgezeichnet! This is the famous purple carbuncle of King Solomon,  
   nicht wahr? And you are giving it to the museum? How kind, how very kind!\</q\>   
   Pausing just to wipe the tears of excitement and gratitude out of his eyes, he  
   continues, \<q\>I shall enroll you on our roll of honoured benefactors \<i\>at once\</i\>!  
   Please, please, do feel free to inspect the special treasures in our benefactors'  
   exhibition room any time you please!\</q\>";  
   carbuncle.moveInto(getActor);  
  }  
  **name = 'the carbuncle'**  
;  
  
