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
<td style="text-align: left;"><strong>limitSuggestions<br />
</strong></td>
<td style="text-align: right;"><a
href="suggestedtopictree.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="conversationnodes-overview.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
One thing the topic inventory cannot know is which SuggestedTopics are
actually reachable at any particular point. For example, suppose you
have:  
  
bob : Person 'bob', 'Bob'  
   isHim = true  
   ...  
;  
  
+ AskTopic, SuggestedAskTopic @mavis  
  "\<q\>How's Mavis these days?\</q\> you ask.\b  
   \<q\>Fine.\</q\> he replies, \<q\>Dead, of course, but otherwise fit and healthy. \</q\> "  
  name = 'Mavis'  
;  
  
++ bobChatting : InConversationState  
    ...  
;  
  
+++ DefaultAnyTopic  
   "\<q\>I'd rather not discuss that right now.\</q\> Bob tells you. "  
;  
  
The problem here is that when Bob enters the bobChatting state, the
AskTopic concerning Mavis is not actually reachable (since ASK BOB ABOUT
MAVIS will be trapped by the DefaultAnyTopic, unless it's picked up by a
more specific TopicEntry under the bobChatting state), but that "You
could ask Bob about Mavis" will still be suggested as a possible topic
of conversation. This is because the topic inventory mechanism has no
means of knowing which TopicEntries are reachable and which are not, and
so suggests everything that *might* be reachable.  
  
The way round this is to use the limitSuggestions property. If
limitSuggestions is set to true on an ActorState, then only the
TopicEntries directly belonging to that ActorState will be suggested. In
the above example we could add the line limitSuggestions = true to the
bobChattingState, and the Mavis topic would not then be suggested when
bob is in that state. Similarly, you can set limitSuggestions to true on
a [ConvNode](convnode.html) to ensure that only the TopicEntries within
that ConvNode are suggested (we'll be coming to ConvNodes next).  
  
The full explanation of limitSuggestions given in the library source
comments is as follows:  
  
*Flag: this database level should limit topic suggestions (for the
TOPICS and TALK TO commands) to its own topics, excluding any topics
inherited from the "broader" context. If this property is set to true,
then we won't include suggestions from any lower level of the database
hierarchy. If this property is nil, we'll also include any topic
suggestions from the broader context.  
  
Topic databases are arranged into a fixed hierarchy for an actor. At the
top level is the current ConvNode object; at the next level is the
ActorState; and at the bottom level is the Actor itself. So, if the
ConvNode's limitSuggestions property is set to true, then the
suggestions for the actor will include ONLY the ConvNode. If the
ConvNode has the property set to nil, but the ActorState has it set to
true, then we'll include the ConvNode and the ActorState suggestions.  
  
By default, we set this to nil. This should usually be set to true for
any ConvNode or ActorState where the NPC won't allow the player to stray
from the subject. For example, if a ConvNode only accepts a YES or NO
response to a question, then this property should probably be set to
true in the ConvNode, since other suggested topics won't be accepted as
conversation topics as long as the ConvNode is active.* *  
*  
  
  
