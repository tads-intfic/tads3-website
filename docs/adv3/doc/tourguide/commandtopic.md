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
<td style="text-align: left;"><strong>CommandTopic : <a
href="topicentry.html">TopicEntry</a><br />
</strong></td>
<td style="text-align: right;"><a
href="overview-commandingnpcs.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="defaultcommandtopic.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A CommandTopic is a kind of TopicEntry that can be used to provide an
actor's response to a command directed to that actor. At its simplest it
merely allows us to customize the message shown when an NPC declines to
handle a command. For example, we could decide that Sarah, being a
basically non-violent person, will refuse all commands to attack
anything or anyone. We can therefore define the following CommandTopic
for her (which we'll locate in the sarah object itself, since Sarah is
never violent whatever state she's in):  
  
+ CommandTopic, ShuffledEventList @AttackAction  
   \[  
     '\<q\>I\\m really not a violent person.\</q\> she protests.\<.p\>'  
   \]  
   \[  
     '\<q\>No, I never resort to violence.\</q\> she refuses.\<.p\>',  
     '\<q\>I told you, I don\\t like violence!\</q\> she reminds you.\<.p\>',  
     '\<q\>I couldn\\t, I just couldn\\t. \</q\> she shakes her head.\<.p\>',  
     '\<q\>No way!\</q\> she replies. '  
   \]     
;  
  
With a bit of effort, we can extend this so that a CommandTopic matches
a specific command directed to a specific object. For example, suppose
we want Sarah to make a particular response to SARAH, FOLLOW ME while
she's in the sarahTalking state. We can make a CommandTopic match this
by overriding its **matchTopic** method:  
  
++ CommandTopic @FollowAction  
   "\<q\>I'm not going anywhere till I've found my ring.\</q\> she  
    tells you. "      
   matchTopic(fromActor, action)  
   {  
     return action.ofKind(matchObj) && action.dobjList\_\[1\].obj\_== fromActor  
      ? matchScore : nil;  
   }  
;  
  
We can be quite sure that this will work, since FOLLOW can only take a
single direct object; if the player tries typing the command SARAH,
FOLLOW THE SHIP AND ME it will simply be rejected.  
  
  
