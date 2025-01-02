<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>TopicGroup : object<br />
</strong></td>
<td style="text-align: right;"><a href="misctopic.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="defaulttopics-overview.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
*A TopicGroup is an abstract container for a set of TopicEntry objects.
The purpose of the group object is to apply a common "is active"
condition to all of the topics within the group.  
  
The isActive condition of the TopicGroup is effectively AND'ed with any
other conditions on the nested TopicEntries. In other words, a
TopicEntry within the TopicGroup is active if the TopicEntry would
otherwise be active AND the TopicGroup is active.  
  
TopicEntry objects are associated with the group via the 'location'
property - set the location of the TopicEntry to point to the containing
TopicGroup.  
  
You can put a TopicGroup anywhere a TopicEntry could go - directly
inside an Actor, inside an ActorState, or within another TopicGroup. The
topic entries within a topic group act as though they were directly in
the topic group's container.*  
  
The TopicGroup is potentially a highly versatile way of organizing
TopicEntries when the way you want to organize them doesn't fall neatly
into the categories offered by actors, actor states and conversation
nodes.  
  
For example, suppose you wanted Sarah to give a different set of
responses based on her mood, but all within the same state (the
sarahFollowing state, for example). Note that this goes beyond what
we're actually attempting in this game, but what you might do is first
define some enums for Sarah's moods:  
  
enum mHappy, mSad, mAngry;  
  
Then you'd need to define a mood property, say, on Sarah herself (which
we'll suppose will be updated in response to various game events):  
  
sarah : Person ...  
  
  mood = mHappy  
  ...  
;  
  
Then we could define various TopicGroups within, say, sarahFollowing:  
  
+ sarahFollowing : AccompanyingState  
  ...  
;  
  
++ TopicGroup  
     isActive = (sarah.mood == mHappy)  
;  
  
+++ AskTopic @sarah  
   "\<q\>How are you?\</q\> you enquire.\b  
    \<q\>Oh - absolutely fine!\</q\> she assures you."  
;  
  
+++ AskTopic @goldenBanana  
   ...  
;  
  
++ TopicGroup  
    isActive = (sarahMood == mAngry)  
;  
  
+++ AskTopic @sarah  
   "\<q\>How are you feeling?\</q\> you ask.\b  
    \<q\>Absolutely livid!\</q\> she declares through gritted teeth."  
;  
  
+++ AskTopic @goldenBanana  
  ...  
;  
  
Note that this doesn't stop you *also* locating TopicEntries directly in
the actor state as well, if you want them to be common to all of Sarah's
moods (say). Or you could put a TopicEntry both in an actor and in a
TopicGroup, if, for example you wanted one response when Sarah was
angry, and another when she was in any other mood. To ensure that the
one in the 'angry' TopicGroup took precedence when Sarah was angry you
could then set that TopicGroup's **matchScoreAdjustment** property to
boost the score of all its TopicEntries (e.g., setting
matchScoreAdjustment to 50 would effectively add 50 to the matchScore of
all the TopicEntries located within it).  
  
Another problem you could use TopicGroup to solve is the case where you
want an actor to give the same response to a number of conversational
commands in several but not all of its ActorStates. For example, suppose
that than an actor progresses through actor states to which we'll give
the unimaginative names state1, state2, state3 and state4 over the
course of the game, and that there's a group of topics for which you
want one answer if the actor's in state1 or state2 and another if it's
in state3 or state4. Rather than having to duplicate the TopicEntries
under both states, you could create a couple of TopicGroups directly in
the actor:  
  
bob : Person 'bob' 'Bob'  
  isHim = true  
  ...  
;  
  
+ TopicGroup  
   isActive = (getActor.curState is in (state1, state2))  
;  
  
++ AskTopic @bob  
  ...  
;  
  
++ AskTopic @dora  
 ...  
;  
  
+ TopicGroup  
   isActive = (getActor.curState is in (state3, state4))  
;  
  
++ AskTopic @bob  
  ...  
;  
  
++ AskTopic @dora  
  ...  
;  
  
Note that in this case, if any of these individual actor states have
[DefaultTopics](defaulttopics-overview.htm) that might mask bob and
dora, these actor states would need to define
excludeMatch = \[bob, dora\].  
  
Of course, these are just two suggested uses for TopicGroup; there are
doubtless many more.  
  
  
