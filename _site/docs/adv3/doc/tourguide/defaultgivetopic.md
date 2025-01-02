<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>DefaultGiveTopic : <a
href="defaulttopics-overview.htm">DefaultTopic</a><br />
</strong></td>
<td style="text-align: right;"><a
href="defaultasktelltopic.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="defaultshowtopic.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
A DefaultGiveTopic responds to any GIVE X TO Y command when no specific
response (GiveTopic or GiveShowTopic) has been provided for X. Note,
however, that this does not mean that a DefaultGiveTopic will respond to
any old GIVE X TO Y, no matter what the X. For the DefaultGiveTopic to
be activated, X must be something that the Player Character *could* give
to Y, i.e. it must be an object that the PC is either holding or able to
pick up, i.e. a portable object in scope. This makes DefaultGiveTopics
(and DefaultShowTopics) rather easier to write than DefaultAskTopics and
the like, since with a DefaultGiveTopic there is a predefined list of
things the player can actually try to give the NPC.  
  
We'll give Sarah two DefaultGiveTopics, the first of which we'll put in
the sarah object directly:  
  
+ DefaultGiveTopic, ShuffledEventList    
  \[  
    '\<q\>No thank you,\</q\> {the sarah/she} declines after a cursory glance. ',     
    '\<q\>I\\d hang on to that if I were you,\</q\> she says, \<q\>it\\s no use to me.\</q\>',  
    '\<q\>How kind!\</q\> she declares, with an ironic twinkle in her eye, \<q\>But I  
     think I\\ll let you keep it!\</q\>'  
  \]  
;  
  
Now we'll add a second one to the sarahFollowing state, that provides a
list of responses more appropriate to when Sarah is following the player
character around:  
  
++ DefaultGiveTopic, ShuffledEventList  
    
  \[  
    '\<q\>I\\ll let you carry that,\</q\> she replies with a pert smile. ',  
    '\<q\>Why don\\t you keep it for now?\</q\> she suggests. ',  
    '\<q\>Keep it - I\\m sure your need is greater than mine.\</q\> she insists. '    
  \]  
 ;  
  
If you compile the game and try it now, you should eventually come up
against a problem: we've now made it impossible to give Sarah a gas-mask
once she's in the sarahFollowing state, since the GiveTopic for gas
masks is directly in the sarah object, and a DefaultTopic in an
ActorState masks any TopicEntries of the same kind located directly in
the actor (so that a DefaultGiveTopic located in sarahFollowing will
make all GiveTopics located directly in sarah unreachable when Sarah's
in her sarahFollowing state). Fortunately, there is a way round this:
you can use the **excludeMatch** property of any DefaultTopic to list
the objects you *don't* want it to match, which allows TopicEntries from
a wider scope to match those objects after all. In this case, we have a
GiveTopic on sarah that matches the two gas masks in the game, so all we
need to do is explicitly exclude them from the list of objects that this
DefaultGiveTopic matches:  
  
  
++ DefaultGiveTopic, ShuffledEventList    
  \[  
    '\<q\>I\\ll let you carry that,\</q\> she replies with a pert smile. ',  
    '\<q\>Why don\\t you keep it for now?\</q\> she suggests. ',  
    '\<q\>Keep it - I\\m sure your need is greater than mine.\</q\> she insists. '    
  \]  
  **excludeMatch = \[gasMask1, gasMask2\]**  
;  
  
If there were many more gas masks in the game, and you wanted might keep
on adding objects of class GasMask, this method of specifying exclusions
might become error prone. One way to automate the process might be to
make the DefaultGiveTopic a PreinitObject that automatically builds the
list of excluded objects from anything that's of class GasMask:  
  
++ DefaultGiveTopic, ShuffledEventList, **PreinitObject**    
  \[  
    '\<q\>I\\ll let you carry that,\</q\> she replies with a pert smile. ',  
    '\<q\>Why don\\t you keep it for now?\</q\> she suggests. ',  
    '\<q\>Keep it - I\\m sure your need is greater than mine.\</q\> she insists. '    
  \]  
  **execute()  
  {  
    local obj = firstObj(GasMask);  
    while(obj != nil)  
    {  
      excludeMatch += obj;  
      obj = nextObj(obj, GasMask);  
    }  
  }**  
;  
  
Though this is probably overkill in the present context. In the present
context, the simplest method would be to override matchScore:  
  
++ DefaultGiveTopic, ShuffledEventList, PreinitObject    
  \[  
    '\<q\>I\\ll let you carry that,\</q\> she replies with a pert smile. ',  
    '\<q\>Why don\\t you keep it for now?\</q\> she suggests. ',  
    '\<q\>Keep it - I\\m sure your need is greater than mine.\</q\> she insists. '    
  \]  
   **matchTopic(fromActor, topic)  
   {  
     return topic.ofKind(GasMask) ? nil : matchScore;  
   }**  
;  
  
But note that this is only safe if we *know* that it's only ever gas
masks that we'll want this DefaultGiveTopic to skip. It might become
error prone if, for example, we later wanted to Sarah also to accept the
silverGizzmo in a GiveTopic on sarah, and just went ahead and put
excludeMatch = \[silverGizzmo\] on the DefaultGiveTopic (whereas the
PreinitObject method would be quite safe in such an instance, since it
would simply add all objects of class GasMask to what was already in the
DefaultGiveTopic list). A safer way of overriding matchTopic to do what
we want would be:  
  
**matchTopic(fromActor, topic)  
   {  
     return topic.ofKind(GasMask) ? nil : inherited(fromActor, topic);  
   }  
**  
Perhaps the most general solution overall is to modify DefaultTopic to
exclude classes as well as individual objects, thus:  
  
modify DefaultTopic  
  excludeClass = \[\]  
  matchTopic(fromActor, topic)  
  {  
    return excludeClass.indexWhich({x: topic.ofKind(x)}) != nil  
       ? nil : inherited(fromActor, topic);  
  }  
;  
  
Then our DefaultGiveTopic becomes simply:  
  
++ DefaultGiveTopic, ShuffledEventList, PreinitObject    
  \[  
    '\<q\>I\\ll let you carry that,\</q\> she replies with a pert smile. ',  
    '\<q\>Why don\\t you keep it for now?\</q\> she suggests. ',  
    '\<q\>Keep it - I\\m sure your need is greater than mine.\</q\> she insists. '    
  \]  
  **excludeClass = \[GasMask\]  
**;  
  
And we can quite safely keep adding to excludeClass and excludeMatch if
we need to. Note, however, that this modification will only work as
expected for DefaultTopics that match Things; if the DefaultTopic
matches a ResolvedTopic, then topic will be ofKind ResolvedTopic, and
the excludeClass list won't do much (although provided we don't specify
excludeClass = \[ResolvedTopic\] this probably won't do too much
harm).  
  
An alternative approach would be to use the **deferToEntry(other)**
method. This allows any TopicEntry to 'defer' to a TopicEntry in a lower
priority TopicDatabase. In matching topics the priority is (1) the
current ConvNode (if any), (2) the current Actor State and (3) the
current Actor. We can therefore use deferToEntry to have a DefaultTopic
on, say, an ActorState defer to a more specific TopicEntry on the actor;
the method must return true if the deferral is to take place and nil
otherwise. Most commonly, we might want a DefaultTopic on an ActorState
to defer to a specific TopicEntry that's matched on the actor but not to
a DefaultTopic that's defined there. This approach will work here, so
instead of the previous definition we could define:  
  
++ DefaultGiveTopic, ShuffledEventList    
  \[  
    '\<q\>I\\ll let you carry that,\</q\> she replies with a pert smile. ',  
    '\<q\>Why don\\t you keep it for now?\</q\> she suggests. ',  
    '\<q\>Keep it - I\\m sure your need is greater than mine.\</q\> she insists. '    
  \]  
 ** deferToEntry(other) { return !other.ofKind(DefaultTopic); }  
**;   
