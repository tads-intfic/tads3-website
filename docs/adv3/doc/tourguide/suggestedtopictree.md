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
<td style="text-align: left;"><strong>SuggestedTopicTree : <a
href="suggestedtopic.html">SuggestedTopic</a><br />
</strong></td>
<td style="text-align: right;"><a
href="suggestednotopic.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="limitsuggestions.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
As we have seen, a [SuggestedTopic](suggestedtopic.html) class is
included in the class list of a single [TopicEntry](topicentry.html) to
add that TopicEntry to the topic inventory, that is the list of topics
that can be suggested to players. One limitation of a SuggestedTopic is
that is applies only to the TopicEntry on which it is defined. This may
sounds like it's obviously the right behaviour, until one stops to
consider what happens with [AltTopics](alttopic.html). By default, if a
TopicEntry which is also a SuggestedTopic has an active AltTopic, the
suggestion will not be offered. This is because it is the AltTopic that
it is now active. You can, of course, define the AltTopic to be a
SuggestedTopic, and it will then be suggested. This is fine if you want
the AltTopic and its parent TopicEntry to be treated as effectively
separate topics for which curiosity is exhausted independently. For
example, if you defined the following:  
  
++ AskTopic, SuggestedAskTopic @bob  
   "\<q\>What can you tell me about bob?\</q\> you ask.\b  
    \<q\>Capital fellow!\</q\> he replies."  
    name = 'Bob'      
;  
  
+++ AltTopic, SuggestedAskTopic  
   \<q\>Have you heard about Bob?\</q\> you enquire.\b  
   \<q\>Alas poor Bob, I knew him well!\</q\> he answers with a sad shake of the head."  
   name = 'Bob'  
   isActive = (bob.hasDied)  
;  
  
Then 'ask about Bob' will be offered once while Bob is still alive, and
once more again when Bob passes away (assuming this causes bob.hasDied
to become true). If this is what you want, then this is the way to do
it. But you may instead want the TopicEntry and its AltTopics to be
treated as a group that is to be suggested en bloc and exhausted en
bloc. This would be the situation, for example, when the player needs
only ask about the topic once, but the answer received will depend on
the game state.  
  
For example, consider the GiveShowTopics we defined for giving or
showing Sarah the ring and the diamond while they are still separated,
together with the [AltTopics](alttopic.html) that make Sarah's response
appropriate whichever order she's shown these objects in. In this case,
if we wanted to make them SuggestedTopics, we'd also want to use
SuggestedTopicTree:  
  
++ GiveShowTopic, **SuggestedTopicTree, SuggestedShowTopic** @diamond  
  "{The sarah/she} studies the gem carefully, \<q\>That certainly looks like it could  
   be the diamond from my ring,\</q\> she decides, \<q\>But where's the ring?\</q\>  
   \<.reveal diamond-shown\>"  
   **name = 'the diamond'**  
;  
  
+++ AltTopic  
  "\<q\>Yes, I think that's the diamond.\</q\> she nods eagerly, \<q\>Have you tried  
   whether it fits the ring?\</q\>"  
   isActive = gRevealed('ring-shown')  
;   
  
++ GiveShowTopic**, SuggestedTopicTree, SuggestedShowTopic** @ring  
  "{The sarah/she} nods eagerly, \<q\>Yes, that's my ring!\</q\> she declares, but then  
   her hand flies to her mouth, \<q\>But - oh my goodness - the diamond is missing!\</q\>  
   \<.reveal ring-shown\>"  
   **name = 'the ring'**  
;  
   
+++ AltTopic   
  "\<q\>That's my ring, all right!\</q\> {the sarah/she} declares, \<q\>But you haven't  
   fitted the diamond!\</q\>"  
   isActive = gRevealed('diamond-shown')  
;  
  
  
Since this is a bit complicated, we'll add the explanation given as a
comment in the library code:  
  
*A \[SuggestedTopicTree is a\] suggested topic that applies to an entire
AltTopic group.  
  
Normally, a suggestion is tied to an individual TopicEntry. This means
that when a topic has several AltTopic alternatives, each AltTopic can
be its own separate, independent suggestion. A particular alternative
can be a suggestion or not, independently of the other alternatives for
the same TopicEntry. Since each AltTopic is a separate suggestion,
asking about one of the alternatives won't have any effect on the
"curiosity" about the other alternatives - in other words, the other
alternatives will be separately suggested when they become active.  
  
In many cases, it's better for an entire set of alternatives to be
treated as a single suggested topic. That is, we want to suggest the
topic when ANY of the alternatives is active, and asking about any one
of the alternatives will satisfy the PC's curiosity for ALL of the
alternatives. This sort of arrangement is usually better for cases where
the conditions that trigger the different alternatives aren't things
that ought to make the PC think to ask the same question again.  
  
Use this class by associating it with the root TopicEntry of the group
of alternatives. You can do this most simply by mixing this class into
the superclass list of the root TopicEntry:  
  
+ AskTellTopic, SuggestedTopicTree, SuggestedAskTopic   
 // ... \*. ;  
++ AltTopic ... ;  
++ AltTopic ... ;   
  
This makes the entire group of AltTopics part of the same suggestion.
Note that you must also include SuggestedAsk, SuggestedTellTopic, or one
of the other specialized types among the superclass, to indicate which
kind of suggestion this is.*  
  
  
  
