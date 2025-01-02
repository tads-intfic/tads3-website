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
<td style="text-align: left;"><strong>DefaultTellTopic : <a
href="defaulttopics-overview.html">DefaultTopic</a><br />
</strong></td>
<td style="text-align: right;"><a
href="defaultasktopic.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="defaultasktelltopic.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A DefaultTellTopic responds to any TELL X ABOUT Y command when no
specific response (TellTopic or AskTellTopic) has been provided for Y.  
  
A DefaultTellTopic is relatively easy to devise, since it need comprise
no more than a non-commital response to whatever the player character
chooses to talk about. Here's how we might implement a DefaultTellTopic
for Sarah (which we'll put directly in the sarah object, not one of her
ActorStates).  
  
+ DefaultTellTopic, ShuffledEventList    
  \[  
    '{The sarah/she} listens politely while you rattle on. ',  
    '\<q\>How interesting!\</q\> she declares, \<q\>You must tell me more some time.\</q\>',  
    '\<q\>Really!\</q\> she declares, \<q\>how fascinating!\</q\>',  
    '{The sarah/she} does her best to suppress a yawn but can\\t quite  
      manage it. ',  
    '{The sarah/she} listens attentively, apparently hanging on your every  
     word. ',  
    '\<q\>Yes, I see,\</q\> she nods understandingly. ',      
    '\<q\>Well, well!\</q\> she smiles. '  
  \]  
;   
  
Of course this will not be entirely player-proof, in that the determined
player can generate some fairly bizarre exchanges, such as  
  
**\>tell sarah about the worst experience you've ever had  
**"Well, well!" she smiles.  
  
But it will probably do well enough for most game-related exchanges.  
  
  
  
