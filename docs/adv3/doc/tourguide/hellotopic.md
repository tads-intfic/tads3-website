<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>HelloTopic : <a
href="misctopic.htm">MiscTopic</a><br />
</strong></td>
<td style="text-align: right;"><a
href="yesno+specialtopics.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="imphellotopic.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
A HelloTopic is normally used in connection with [greeting
protocols](greetingprotocols.htm). Its main purpose is to respond to a
HELLO command or equivalent (such as TALK TO X). The normal place to put
a HelloTopic would be in a
[ConversationReadyState](conversationreadystate.htm), where it will
respond to any conversational command addressed to the NPC just before
the NPC is switched into the corresponding
[InConversationState](inconversationstate.htm). If you want to
differentiate between the case in which a conversation starts with an
explicit HELLO, or TALK TO command, and when it starts with some other
conversational command such as ASK ABOUT, you can use an
[ImpHelloTopic](imphellotopic.htm) for the latter.  
  
Since King Solomon initiates the conversation the first time the player
character walks in on him (we'll code that later), there's no need to
provide a HelloTopic for that initial conversation, but you might want
one for subsequent encounters, such as:  
  
+++ HelloTopic  
  "\<q\>I have returned, your majesty.\</q\> you announce.\b  
   \<q\>So I observe.\</q\> the king replies, looking up at you. "  
;  
  
The trouble with the above HelloTopic, however, is that it assumes that
the player character has been away and returned between conversations,
which is not necessarily the case. What we need is a version of the
HelloTopic that displays the above message if the player character has
been away, but a different message otherwise. So instead of the above,
we could define (locating this in solomonExamining):  
  
+++ solomonHelloTopic : HelloTopic, StopEventList   
  \[  
   '\<q\>I have returned, your majesty.\</q\> you announce.\b  
    \<q\>So I observe.\</q\> the king replies. ',  
   '\<q\>Your majesty,\</q\> you begin.\b  
    \<q\>Yes?\</q\> the king replies, turning in his chair and looking  
      up at you. '     
  \]  
  curScriptState = 2  
;  
  
We set curScriptState to 2 initially, to cater for the possibility that
the player strikes up a second conversation with the king before ever
leaving his study. We next need to reset curScriptState to 1 each time
the player character does leave the king's presence. We can do this by
adding the following method to the solomon object itself:  
  
solomon : Person 'middle-aged middle aged man' 'middle-aged man' @solomonChair  
  ...  
  beforeTravel(traveler, connector)  
    {  
      if(connector == solBedroomDoorOutside)  
        solomonHelloTopic.curScriptState = 1;  
      inherited(traveler, connector);    
    }  
;  
  
There's one more thing you should know about HelloTopic (and this
applies to ImpHelloTopic too). As we've already noted, a HelloTopic is
triggered by an explicit greeting *or* by any other conversational
command. Internally this means that if any other kind of TopicEntry is
triggered when an actor is in a ConversationReadyState, a HelloTopic is
triggered. Potentially, this could mean that a HelloTopic tries to
trigger itself, which would then have it try to trigger itself, and so
on *ad infinitum* (or, in practice, till you got a stack overflow
error). The way HelloTopic (and ImpHelloTopic) prevent this is by
defining **impliesGreeting** = nil.  
  
  
