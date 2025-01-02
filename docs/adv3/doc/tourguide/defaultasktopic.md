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
<td style="text-align: left;"><strong>DefaultAskTopic : <a
href="defaulttopics-overview.html">DefaultTopic</a><br />
</strong></td>
<td style="text-align: right;"><a
href="defaulttopics-overview.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="defaulttelltopic.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A DefaultAskTopic responds to any ASK X ABOUT Y command when no specific
response (AskTopic or AskTellTopic) has been provided for Y.  
  
The trick with a DefaultAskTopic is to provide a series of responses
that won't jar too much no matter what's asked. That means it's no good
having NPCs claiming they don't know the answer to the question, since
the player could ask something they plainly do know about (e.g. ASK
SARAH ABOUT HER MOTHER). Instead, one must have the NPC ignore the
question, refuse to answer (graciously, politely, rudely, indignantly or
however else you want the NPC portrayed) or give some completely neutral
and uninformative reply (however wrapped up). Thus, for Sarah, we could
define a DefaultAskTopic (on the sarah object) thus:  
  
+ DefaultAskTopic, ShuffledEventList    
  \[  
    '\<q\>Can we talk about something else?\</q\> she suggests. ',  
    '{The sarah/she} mutters something you don\\t quite catch. ',  
    'In reply she merely cocks one eyebrow and gives an enigmatic smile. ',  
    '\<q\>I\\m sorry,\</q\> she says, \<q\>my mind was elsewhere. Did you say something?\</q\> ',  
    '\<q\>Let\\s discuss that some other time.\</q\> she replies. ',  
    'Just at that moment, {the sarah/she} appears to be overcome by a   
     fit of coughing. ',  
    'She appears not to hear you. ',  
    '\<q\>Well,\</q\> she says, proceeding to give a brief reply. '  
  \]   
;    
  
Ideally, it would be good to extend the list, since the player is likely
to see its members a good number of times, though it becomes difficult
to think of many new ways of not saying anything. In this kind of case,
nevertheless, you almost certainly want to use a ShuffledEventList to
vary the responses.  
