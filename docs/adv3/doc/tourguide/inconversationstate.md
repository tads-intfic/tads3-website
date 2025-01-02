<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>InConversationState : <a
href="overview-actorstates.htm">ActorState</a><br />
</strong></td>
<td style="text-align: right;"><a
href="guidedintravelstate.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="conversationreadystate.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
The InConversationState is, as its name suggests, the state to use when
an NPC is in conversation with the player character. Each
InConversationState is normally associated with a
[ConversationReadyState](conversationreadystate.htm), and the library
automatically handles switching between the two depending on whether a
conversation is in progress or not. Addressing an actor who is in a
ConversationReadyState will automatically cause the actor to switch into
the related InConversationState. When a conversation is terminated, the
actor switches back into the ConversationReadyState (or else some other
state defined in the nextState property). The conversation is normally
terminated for one of four reasons: (1) the PC explicitly says goodbye;
(2) the PC moves to another location; (3) the PC fails to continue the
conversation for a number of turns and the NPC's attention span is
exhausted; (4) the NPC decides to terminate the conversation.  
  
In addition to the methods and properties defined on ActorState, which
InConversationState inherits, the properties and methods you are most
likely to want to work with are:  
  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>attentionSpan</strong> - this is an integer giving the
number of turns the actor should wait before giving up on the
conversation. The default is 4. If the other character doesn't talk to
the NPC for this many turns, the NPC will automatically terminate the
conversation, switching to the next state. If you want the NPC's
attention span to be infinite, set attentionSpan to nil.  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>nextState</strong> - this is an ActorState object, which
should normally be of the ConversationReadyState class, which follows
the conversation's termination. When we terminate the conversation,
we'll switch to this state. You don't have to override this; if you
don't, the game will remember the state that the actor was in just
before the conversation, and switch back to that when the conversation
ends.  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>endConversation (actor, reason)</strong> - Exit the
in-conversation state. 'reason' indicates why we're leaving the
conversation - this is one of the <a
href="endconvxxxcodes.htm">endConvXxx</a> enums defined in adv3.h. This
method is a convenience only; you aren't required to call this method to
end the conversation, since you can simply switch to another actor state
directly if you prefer. This method's main purpose is to display an
appropriate message terminating the conversation while switching to the
new state. If you want to display your own message directly from the
code that's changing the state, there's no reason to call this. This
returns true if you want to allow the conversation to end, nil if not.
 <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

  
Armed with information, we can set about creating InConversationState
objects for various of our NPCs, starting with Sarah (so this should be
nested in the sarah object):  
  
+ sarahTalking : InConversationState  
  specialDesc = "Sarah is looking at you, waiting for you to speak. "  
  stateDesc = "She's waiting for you to speak. "  
  attentionSpan = 5  
;  
  
Similarly we can define for the curator (remembering to make sure it's
nested in the curator object):  
  
+ curatorTalking : InConversationState  
  stateDesc = "He's looking straight at you, head cocked slightly to one side. "  
  specialDesc { inherited; stateDesc; }  
  attentionSpan = 3  
;  
  
And likewise for King Solomon, who, being so famous for his wisdom, and
not being caught up in the frenetic pace of modern living, we'll give a
rather greater attention span to:  
  
+ solomonTalking : InConversationState  
  specialDesc = "{The solomon/he} is looking up at you with a thoughtful expression  
   on his face. "  
  stateDesc = "He's looking up at you. "  
  attentionSpan = 20  
;  
  
Conversely, we'll assume that the demons are peculiarly impatient, and
also not at all keen on letting you progress down to the plain:  
  
+ demonsChattering : InConversationState  
  specialDesc = "The demons are chattering away madly as they block your path. "  
  stateDesc = "They're chattering and blocking your path at the same time. "  
  attentionSpan = 1  
  beforeTravel(traveler, connector)  
  {  
    if(connector == hellPathDown)  
    {  
      "The demons crowd in on you, chattering away and blocking your path  
       all the more insistently. \<q\>You can't come this way! You can't come  
       this way!\</q\> they chorus. \<q\>We'll eat your flesh! We'll eat your flesh!\</q\>  
       some of them add, leering at you hungrily. ";  
       exit;  
    }  
    inherited(traveler, connector);  
  }  
;    
  
Obviously, this code needs to be placed just after the demons object.  
  
Finally, we'll give our ghost an InConversationState:  
  
+ ghostTalking : InConversationState  
  specialDesc = "The ghost is hovering over its tomb, staring at you intently. "  
  stateDesc = "It's hovering over its tomb. "  
;  
  
