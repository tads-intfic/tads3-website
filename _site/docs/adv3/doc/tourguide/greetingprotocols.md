<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>Greeting Protocols<br />
</strong></td>
<td style="text-align: right;"><a
href="conversationreadystate.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="topicentry.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
To walk up to an NPC and start a conversation with an ASK ABOUT, and
then, after a few more conversational commands, to terminate the
conversation by simply walking away or ceasing to converse can make the
game transcript seem a bit abrupt and not very life-like. In real life
one normally starts a conversation with "Hello" or "Excuse me" or
something else designed to open the channel of communication, and then
concludes it with a similar winding-up exchange to signal that it's now
over.  
  
In order to handle the beginning and end of conversations, you put a
[HelloTopic](hellotopic.htm) and a [ByeTopic](byetopic.htm) in the
[ConversationReadyState](conversationreadystate.htm), for example:  
  
++ sarahLooking : ConversationReadyState  
  isInitState = true  
  specialDesc = "{A sarah/she} is standing by the shore, apparently  
   looking at something, though she occasionally throws a curious  
   glance your way. "  
  stateDesc = "She seems to be looking for something. "  
;  
  
+++ HelloTopic, ShuffledEventList  
  \[   
     '\<q\>Hello there,\</q\> you say.\b  
      \<q\>Hello.\</q\> she smiles at you, slightly quizzically.'  
  \]  
  \[  
     '\<q\>Hello again.\</q\> you greet her.\b  
      \<q\>Hi!\</q\> she replies. ',  
     '\<q\>It\\s me again.\</q\> you tell her.\b  
      \<q\>So I noticed.\</q\> she answers.',  
     '\<q\>Er...\</q\> you start.\b  
      \<q\>Yes?\</q\> she asks. '    
  \]  
;  
  
+++ ByeTopic  
  "\<q\>Cheerio, then!\</q\> you say.\b  
   \<q\>See you!\</q\> she replies. "  
;  
  
  
+++ ImpByeTopic  
  "{The sarah/she} gives a little shrug and goes back to  
    searching her surroundings. "  
;  
  
The effect of this is that when the player character strikes up a
conversation with Sarah, either explicitly through a GREET SARAH, TALK
TO SARAH or SARAH, HELLO command, or implicitly by addressing a
conversational command to her like ASK SARAH ABOUT HERSELF or TELL SARAH
ABOUT BANANA, the greeting message from the [HelloTopic](hellotopic.htm)
will be displayed, and then Sarah will switch into the associated
InConversationState. Conversely, once the conversation is over, Sarah
will switch back into the ConversationReadyState and either the
[ByeTopic](byetopic.htm) or the [ImpByeTopic](impbyetopic.htm) will be
displayed, depending on whether the player ended the conversation
explicitly with a BYE command, or implicitly by either leaving the
location or failing to address a conversational command to Sarah for the
number of turns needed to exhaust her attention span.  
  
We'll be giving more examples of this later.  
