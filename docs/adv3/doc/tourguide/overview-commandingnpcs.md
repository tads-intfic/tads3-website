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
<td style="text-align: left;"><strong>Overview - Commanding NPCs<br />
</strong></td>
<td style="text-align: right;"><a
href="moreagendaitemexamples.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="commandtopic.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
From time to time the player may try giving orders to an NPC, in the
form SARAH, TAKE THE TORCH or SARAH, CUT THE DISPLAY CASE WITH THE
DIAMOND RING. By default the library has NPCs refuse all such commands,
but it is possible to override this behaviour.  
  
An NPC's response to a command is, in the first instance, defined in the
**obeyCommand(fromActor, action)** method of its current
[ActorState](overview-actorstates.html). If this returns nil, then the
actor will refuse the command; if it returns true then the actor will
obey the command. For example, if you wanted an actor in a particular
ActorState always to obey the commands TAKE, ATTACK and JUMP (but no
other commands), you could override obeyCommand on the appropriate
ActorState thus:  
  
obeyCommand(fromActor, action)  
{  
  if(action.baseActionClass is in (TakeAction, AttackAction, JumpAction))  
      return true;  
  else  
      return inherited(fromActor, action);    
}  
  
With a bit more effort, you could also use this method to have the NPC
obey the commands, TAKE CARBUBNCLE and TAKE BAARAS ROOT but no other
command. The trick is knowing how to get at the objects involved in the
command. At this point the direct object of the command hasn't been
fully allocated to the command, but a list of direct objects is
available in the property:  
  
   action.dobjList\_\[n\].obj\_  
  
Where *n* is the position in the list (alternatively, you can use
action.getResolvedDobjList\[n\]). For a command with a single direct
object (e.g. SOLOMON, TAKE THE CARBUNCLE), n will be 1. So, if we can
assume that the player may type SOLOMON, TAKE THE CARBUNCLE or SOLOMON,
TAKE THE BANANA but never SOLOMON, TAKE THE CARBUNCLE AND THE BANANA, we
could make Solomon accept the commands, and only the commands, TAKE THE
BANANA and TAKE THE CARBUNCLE only by modifying his InConversationState
thus:  
  
+ solomonTalking : InConversationState  
  specialDesc = "{The solomon/he} is looking up at you with a thoughtful expression  
   on his face. "  
  stateDesc = "He's looking up at you. "  
  attentionSpan = 20  
  **obeyCommand(fromActor, action)  
  {  
    if(action.ofKind(TakeAction)  
      && action.dobjList\_\[1\].obj\_ is in (baarasRoot, carbuncle))  
        return true;  
    else  
        return inherited(fromActor, action);  
  }  
**;  
  
Actually, if you want to try this (though we don't want it as a
permanent part of the game), there's one more change you need to make,
otherwise Solomon will stop himself from taking these objects. You'll
need to change the start of solomon.beforeAction thus:  
  
beforeAction()  
  {  
    inherited;  
    if(gActionIs(Take) \|\| gActionIs(TakeFrom))  
    {  
      if(gDobj is in (baarasRoot, carbuncle) && !gDobj.gifted && **gActor != self**)  
   ...  
  
There are, however, a number of problems with this approach. The first
is that for anything much more complicated, the obeyCommand method will
soon start to resemble tangled spaghetti. The second is that there is no
very good way to handle the case where the player issues a command like
SOLOMON, TAKE THE CARBUNCLE AND THE BANANA, which will result in both
objects being taken. The best we could do is something like this:  
  
obeyCommand(fromActor, action)  
  {  
    if(action.ofKind(TakeAction))  
    {        
      foreach(local cur in action.dobjList\_)        
       if (cur.obj\_ not in (baarasRoot, carbuncle))  
         return inherited(fromActor, action);  
      return true;     
    }  
    else  
        return inherited(fromActor, action);  
  }  
  
But it's far from ideal.  
  
By now you're maybe wondering if there's anything like the TopicEntry
mechanism that could come to the rescue here. Well, luckily, there is,
for the library defines a [CommandTopic](commandtopic.html) and a
[DefaultCommandTopic](defaultcommandtopic.html), which, with a bit of
judicious tweaking, can both make it easier to program NPCs' responses
to commands, and provide a far more powerful mechanism for handling
them. But first, we'll start with fairly simple uses of these classes.  
  
  
