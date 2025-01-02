<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>SuggestedShowTopic : <a
href="suggestedtopic.htm">SuggestedTopic</a><br />
</strong></td>
<td style="text-align: right;"><a
href="suggestedgivetopic.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="suggestedyestopic.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
A SuggestedAskTopic is the particular type of
[SuggestedTopic](suggestedtopic.htm) that prompts the player to SHOW
such-and-such to so-and-so.  
  
For example, if we want to suggest to the player that he might show the
green ticket to the curator, we could add the following to the
appropriate GiveTopic (previously defined):  
  
++ GiveShowTopic, **SuggestedShowTopic ** @museumTicket  
  "\<q\>Thank you, that's fine.\</q\> {the curator/he} nods as he inspects your ticket,  
   \<q\>Enjoy the exhibits!\</q\>\<.reveal ticket-shown\>"  
   **name = 'the green ticket'  
**;  
  
