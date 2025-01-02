<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>GiveTopic : <a
href="giveshowtopic.htm">GiveShowTopic</a><br />
</strong></td>
<td style="text-align: right;"><a href="topicentry.htm">[Previous]</a>
<a href="generalintroduction.htm">[Main]</a> <a
href="showtopic.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
We use a GiveTopic to handle GIVE TO commands, instead of writing
iobjFor(GiveTo) handlers on the actor. Like other TopicEntries,
GiveTopics can be put in particular ActorStates so that they represent
the handling particular to that state.  
  
We can now rip out all the iobjFor(GiveTo) handling from the sarah
object, and achieve the same result with a GiveTopic instead:  
  
sarah : Person 'attractive young woman/brunette' 'young woman' @lakeRoom  
  "She's an attractive brunette, somewhere in her mid-twenties. "  
  isHer = true  
  properName = 'Sarah'  
  globalParamName = 'sarah'    
;  
 ...  
  
+ sarahTalking : InConversationState  
  specialDesc = "Sarah is looking at you, waiting for you to speak. "  
  stateDesc = "She's waiting for you to speak. "  
  attentionSpan = 5  
;  
  
++ GiveTopic @diamondRing  
  topicResponse  
  {  
    "\<q\>Great! Thanks!\</q\> {the sarah/she} declares, \<q\>I've been looking for it  
    \<i\>every\</i\>where!\</q\> She slips the ring on her finger, then continues,  
    \<q\>Well, I suppose the next thing is to find a way out of here. You seem to  
     know how to find things, so I guess I'd best follow you.\</q\>\<.p\>";  
    gDobj.moveInto(getActor);  
    gDobj.makeWornBy(getActor);  
    getActor.setCurState(sarahFollowing);      
  }  
;  
  
At some point the player will need to give Sarah one of the gas masks if
she's to follow him into Hell Fire Cavern. The problem here is that we
have two identical gas masks and we could equally well give her either
of them. Again, we don't know what ActorState she'll be in when we give
the gas mask (it's likely to be the sarahFollowing state, but the player
character could conceivably hand Sarah a gas mask before giving her the
diamond ring that makes her start following him around). For this reason
it might be safer to put this GiveTopic directly inside the sarah object
(where it'll be accessible from all of her ActorStates). Be careful with
the nesting though - don't put it between an ActorState and something
that belongs inside that ActorState, or things will start to go awry. To
solve the two gas-mask problem we need to write custom matchTopic and
handleTopic methods (note that the kind of method we've used here will
only work on TopicEntries that handle resolved objects rather than
resolved topics, that is GiveTopic, ShowTopic, GiveShowTopic and their
Default equivalents):  
  
+ GiveTopic  
  matchTopic(fromActor, obj)  
   { return obj.ofKind(GasMask) ? matchScore : nil; }  
  handleTopic(fromActor, obj)  
  {  
    obj.moveInto(getActor);  
    "\<q\>Thanks,\</q\> {the sarah/she} remarks dubiously as she accepts it from   
    you, \<q\>I'm sure it'll - er - come in very useful.\</q\> ";  
  }  
;  
  
The curator is anxious to add Solomon's purple carbuncle to his
collection, so we can add an appropriate GiveTopic to the curator's
curatorTalking state:  
  
++ GiveTopic @carbuncle  
  topicResponse  
  {  
   "{The curator/he} takes the carbuncle and examines it carefully, then declares,  
   \<q\>Wunderbar! Ausgezeichnet! This is the famous purple carbuncle of King Solomon,  
   nicht wahr? And you are giving it to the museum? How kind, how very kind!\</q\>   
   Pausing just to wipe the tears of excitement and gratitude out of his eyes, he  
   continues, \<q\>I shall enroll you on our roll of honoured benefactors \<i\>at once\</i\>!  
   Please, please, do feel free to inspect the special treasures in our benefactors'  
   exhibition room any time you please!\</q\>";  
   carbuncle.moveInto(getActor);  
  }  
;  
  
Of course giving the wrong thing to the wrong people could have
disastrous consequences. If the player is foolish enough to hand the
banana over to the demons, he or she richly deserves to lose, so we can
code this in a GiveTopic (which, like all the TopicEntries relating to
the demons, should be placed under the demonsChattering state).  
  
++ GiveTopic @goldenBanana  
  topicResponse  
  {  
    "\<q\>Yes!\</q\> the demons cry as you hand them the Golden Banana of Discord.  
     \<q\>It's back where it belongs - with us, the demonic cabal!\</q\>\b  
     It dawns on you that you may just have made a ghastly mistake - probably  
     the worst you've ever made.\b  
     But at least it'll probably be your last.\b ";  
     endGame('YOU HAVE FAILED DISMALLY');  
  }  
;  
