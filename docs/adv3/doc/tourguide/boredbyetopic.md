<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>BoredByeTopic: <a
href="misctopic.htm">MiscTopic</a><br />
</strong></td>
<td style="text-align: right;"><a
href="leavebyetopic.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="actorbyetopic.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
The BoredByeTopic is the second special case of
[ImpByeTopic](impbyetopic.htm), and complements
[LeaveByeTopic](leavebyetopic.htm). It is triggered whenever a
conversation is terminated because an NPC gives up waiting for the PC to
speak.  
  
We could, for example, change the curator's ImpByeTopic to a
BoredByeTopic:  
  
+++ BoredByeTopic  
  "{The curator/he} turns away and goes back to what  
   passes for his work. "  
;  
  
In this case the change won't make any practical difference, since
either way (given that we've defined a separate LeaveByTopic) this will
be the topic that's invoked when the curator tires of waiting for the PC
to talk, although using BoredByeTopic in this case probably makes our
source code a little clearer.  
