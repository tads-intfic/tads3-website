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
<td style="text-align: left;"><strong>ByeTopic : <a
href="misctopic.html">MiscTopic</a><br />
</strong></td>
<td style="text-align: right;"><a
href="imphellotopic.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="impbyetopic.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A ByeTopic is usually used in connection with [greeting
protocols](greetingprotocols.html), to handle the end of a conversation.
As such, it is normally located in the
[ConversationReadyState](conversationreadystate.html) to which the actor
returns at the conclusion of the conversation. The ByeTopic handles
explicit termination of a conversation (via a BYE command).  
  
In the case of King Solomon, we shall assume that our player character
would not be so gauche as to walk out on the king without some attempt
at formal leave-taking, so we really want a ByeTopic that handles both
implicit and explicit conversation termination. As with the HelloTopic
and the ImpHelloTopic this should go in the solomonExamining
ConversationReadyState:  
  
  
+++ ByeTopic, ShuffledEventList  
  \[  
    '\<q\>Goodbye, your majesty.\</q\> you say, with a little bow, just to be  
      on the safe side.\b  
     \<q\>Farewell, mysterious messenger,\</q\> the king replies, \<q\>perhaps  
      we shall meet again.\</q\> ',  
     '\<q\>Well, er, cheerio then, sire.\</q\> you say.\b  
      Solomon cocks one eyebrow, \<q\>Cheerio? Is that how angels speak?  
       Fare thee well.\</q\>',  
     '\<q\>Goodbye, sir.\</q\> you bid him farewell.\b  
      \<q\>God be with you too.\</q\> the king replies formally, before returning  
       to his contemplations. '      
  \]   
;  
  
Note the symmetry here between HelloTopic and ByeTopic: while HelloTopic
handles both implicit and explicit conversation initiation, ByeTopic
handles both explicit and implicit conversation termination.  
