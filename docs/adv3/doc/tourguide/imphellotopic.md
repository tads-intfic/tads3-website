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
<td style="text-align: left;"><strong>ImpHelloTopic : <a
href="misctopic.html">MiscTopic</a><br />
</strong></td>
<td style="text-align: right;"><a href="hellotopic.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="byetopic.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
An ImpHelloTopic (if defined) deals with the [greeting
protocols](greetingprotocols.html) in the case where a conversation is
started without an explicit greeting command (such as SARAH, HELLO or
TALK TO SARAH). The normal place for an ImpHelloTopic is in a
[ConversationReadyState](conversationreadystate.html).  
  
For example, we might provide King Solomon with an ImpHelloTopic that
looks like this:  
  
+++ ImpHelloTopic    
  "Solomon turns and looks up at you as you start to speak.   
  \<\<solomonHelloTopic.advanceState()\>\>"  
;  
  
This should be located in the solomonExamining ConversationReadyState.
The one subtlety here is the call to solomonHelloTopic.advanceState().
The reason for calling this is that once this ImpHelloTopic has been
triggered, we'd want to see the second response, not the first, in the
list of responses on [solomonHelloTopic](hellotopic.html).  
  
