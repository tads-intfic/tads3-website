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
<td style="text-align: left;"><strong>ImpByeTopic : <a
href="misctopic.html">MiscTopic</a><br />
<br />
</strong></td>
<td style="text-align: right;"><a href="byetopic.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="leavebyetopic.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
An ImpByeTopic is yet another kind of [TopicEntry](topicentry.html) used
in [greeting protocols](greetingprotocols.html). Like
[ByeTopic](byetopic.html), it is used at the end of a conversation, and
would normally be placed in a
[ConversationReadyState](conversationreadystate.html). Unlike ByeTopic,
it handles only implicit conversation endings, which occur either when
the player character simply leaves the area in mid-conversation, or else
fails to address a conversational command to the NPC for enough turns to
exhaust the NPC's attention span.  
  
For example, we might define the following ImpByeTopic for the curator,
which should be located in his curatorWatching ConversationReadyState:  
  
+++ ImpByeTopic  
  "{The curator/he} turns away and goes back to what  
   passes for his work. "  
;  
  
Note that this doesn't distinguish between the cases where the
conversation ends because the PC walks away from the curator and where
it ends because the curator becomes bored waiting for us to speak. If we
want to make that distinction, we can use
[LeaveByeTopic](leavebyetopic.html) and
[BoredByeTopic](boredbyetopic.html).  
  
  
  
