<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>DefaultAskTellTopic : <a
href="defaulttopics-overview.htm">DefaultTopic</a><br />
</strong></td>
<td style="text-align: right;"><a
href="defaulttelltopic.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="defaultgivetopic.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
A Default AskTellTopic effectively combines the functionality of a
DefaultAskTopic and a DefaultTellTopic, i.e. it will handle any ASK
ABOUT or TELL ABOUT command for which no specific TopicEntry has been
provided.  
  
It can be convenient to have a single DefaultTopic to handle both sets
of commands, thus avoiding the need for a separate DefaultAskTopic and
DefaultTellTopic, although it may be slightly harder to devise a series
of bland responses that look equally convincing in response to both ASK
ABOUT and TELL ABOUT. The DefaultAskTellTopic is perhaps best used in
situations where the author does not expect it to be so heavily
employed, perhaps on relatively minor NPCs, or in little-used
ActorStates, or as a means of catching irrelevant responses in a
[Conversation Node](conversationnodes-overview.htm) (see below).  
  
By way of illustration, we'll provide DefaultAskTellTopics for the
curator and Solomon, which would be placed in their respective
InConversationStates. We'll start with the curator:  
  
++ DefaultAskTellTopic, ShuffledEventList     
  \[    
    '\<q\>Right,\</q\> {the curator/he} nods. ',  
    '\<q\>Hm.\</q\> he replies. ',  
    '\<q\>I never discuss that sort of thing when on duty.\</q\> he tells you. ',  
    '{The curator/he} breaks into a long, boring and utterly incomprehensible   
     explanation that you rapidly stop listening to. ',  
    '{The curator/he} proceeds to tell you everything he knows about ' +  
     gTopicText + ', until you wish you\\d never raised the subject. '    
  \]   
;  
  
It should be pointed out, of course, that a list of default responses
such as this will in any case seem less jarring if the author has
anticipated the topics players are likely to raise and provided answers
for them. In reality, we should, at the very least, have provided
AskTopics to cover the exhibits in general, the specific exhibits on
display, and the golden banana. The only reason for not doing so is that
such further examples of AskTopics would serve no useful purpose in the
course of this tutorial, so that, once again, they must be left as an
exercise for the reader.  
  
It is, of course, possible to write a DefaultAskTellTopic with a single
response. Since King Solomon allegedly enjoyed an encyclopedic knowledge
of every subject under the sun, one might almost get away with:  
  
++ DefaultAskTellTopic  
  "{The solomon/he} nods sagely and proceeds to treat you to the breadth  
   and depth of his wisdom on the subject of \<\<gTopicText\>\>. "  
;  
  
The player may feel this default response becomes inappropriate if
Solomon is asked about nuclear physics, George W. Bush, or human
cloning, but a player who raises such topics in the course of a
conversation with the ancient Israelite king can hardly expect very
sensible responses. Again, this kind of default response will be a bit
less jarring if we supply suitable AskTopics and TellTopics to cover
things the player could reasonably be expected to try conversing with
Solomon about.  
  
  
