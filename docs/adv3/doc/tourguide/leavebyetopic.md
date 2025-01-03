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
<td style="text-align: left;"><strong>LeaveByeTopic: <a
href="misctopic.html">MiscTopic</a><br />
</strong></td>
<td style="text-align: right;"><a href="impbyetopic.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="boredbyetopic.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A LeaveByeTopic is effectively a more specialised ImpByeTopic. We can
use it in the case where we want to distinguish a conversation ending
through the PC walking away from one ending because his interlocutor
gives up waiting for him to speak. So, for example, we could add the
following, which should also be located in his curatorWatching
ConversationReadyState:  
  
+++ LeaveByeTopic  
  "{The curator/he} watches you leave, and then resumes working. "  
;  
  
And then we'll see a different message depending on whether the
conversation ends as a result of boredom or travel. Note that in this
case the (more specific) LeaveByeTopic will be used when the PC departs,
and the (less specific) ImpByeTopic will be used when the curator
becomes bored, although we could achieve the same effect by using a
[BoredByeTopic](boredbyetopic.html).  
  
  
  
  
  
