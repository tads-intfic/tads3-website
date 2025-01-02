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
<td style="text-align: left;"><strong>TCommandTopic : <a
href="commandtopic.html">CommandTopic</a><br />
</strong></td>
<td style="text-align: right;"><a
href="overridingobeycommand.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="amodifieddefaultcommandtopic.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
Having overridden [ActorState.obeyCommand](overridingobeycommand.html) to
make it easier for CommandTopics to handle commands with a direct
object, the next step is to define a CommandTopic subclass that takes
advantage of these changes. We'll call it TCommandTopic, for a topic
that handles a TAction.  
  
What we mainly want TCommandTopic to do is to match a direct object (or
a list of direct objects) as well as a specific action (or list of
direct actions). While we're at it, we'll also make it store a phrase
that can be used building a conversational exchange about the command
between the actor issuing the command (normally the player character)
and the NPC being commanded. Here's what a TCommandTopic might look
like:  
  
TCommandTopic : CommandTopic  
  /\*   
   \* The direct object, or a list of direct objects, that will be matched  
   \* by this topic.  
   \*/  
  matchDobj = nil  
    
  /\*   
   \* The first direct object of the command that this CommandTopic matches.  
   \* We cache it here so that it can easily be picked up in topicResponse.  
   \*/  
  currentDobj = nil  
    
  /\*  
   \* Cache the action that has been matched so that it is readily accessible  
   \* from topicResponse   
   \*/  
  currentAction = nil  
    
  matchTopic(fromActor, action)  
  {  
    /\* First check whether we match the action of the command \*/  
    if(!inherited(fromActor, action))  
      return nil;  
          
    /\* Then cache the first direct object of the command \*/  
       
    currentDobj = action.getDobj();  
          
    /\* If matchDobj is a list, check if the current direct object is in the list \*/  
    if(matchDobj.ofKind(Collection))  
    {  
      if(matchDobj.indexWhich({x: currentDobj.ofKind(x)}) != nil)  
          return matchScore;  
    }  
    else      
    {  
      /\* See if the direct object matches that specified in matchDobj   
       \* if it's a single object.  
       \*/  
      if(currentDobj.ofKind(matchDobj))  
        return matchScore;  
    }     
      
     /\* We can't match the direct object at all, so return nil \*/  
   return nil;   
  }  
    
  handleTopic(fromActor, action)  
  {  
    actionPhrase = action.getInfPhrase;  
    currentAction = action;  
      
    /\*   
     \* if the player types a command like X ME, getInfPhrase will  
     \* return 'examine you'. In such a case we want to replace 'you'  
     \* with 'me'.  
     \*/  
    actionPhrase = actionPhrase.findReplace(' you ', ' me ', ReplaceAll);  
    if(actionPhrase.endsWith(' you'))  
      actionPhrase = actionPhrase.findReplace(' you', ' me', ReplaceOnce,  
        actionPhrase.length-5);  
    inherited(fromActor, action);  
  }    
    
  /\* The action phrase of the command currently directed to this actor;  
   \* for example, if the player types 'X ME' the actionPhrase will be  
   \* 'examine me'. This can be used in topicResponse to construct the  
   \* command given by the player character, e.g.   
   \*  
   \*    "Sarah, please examine me," you ask.  
   \*/  
  actionPhrase = nil  
;  
  
One thing to note here is that we test for currentDobj.ofKind(matchDobj)
instead of matchDobj == currentDobj. This allows us to specify matchDobj
as a *class*, or a list of classes, as well as an individual object or
list of objects, so we could, for example, easily specify a
TCommandTopic that matched when the action was a TakeAction and the
direct object was of the Treasure class.  
  
To show a TCommandTopic in action, we can now provide Sarah with a
suitably coy set of responses to the command, SARAH, KISS ME, which
we'll attach directly to the actor:  
  
+ TCommandTopic, ShuffledEventList @KissAction     
   \[  
     '\<q\>Goodness, no!\</q\> she declares, \<q\>What  
      \<i\>do\</i\> you take me for?\</q\>'  
   \]  
   \[  
     '\<q\>You are joking, of course!\</q\> she laughs. ',  
     '\<q\>Ever the optimist, aren\\t we!\</q\> she chides you. ',  
     '\<q\>Not bloody likely!\</q\> she retorts. ',  
     '\<q\>Now, why on earth do you suppose I\\d want to do  
      that?\</q\> she cries. ',  
     '\<q\>Don\\t be silly.\</q\> she admonishes you. '   
   \]  
   matchDobj = gPlayerChar     
;  
  
This hardly shows the power of what we've created however. To create a
more interesting example, recall that when Sarah and the player
character finally come across the Golden Banana of Discord in its
display case, the player has to ASK SARAH FOR RING to prompt her to cut
the case open. We can now use a TCommandTopic (located in the
sarahFollowingState) to enable Sarah also to respond appropriately to
the command SARAH, CUT CASE:  
  
++ TCommandTopic @CutWithAction  
   matchDobj = bananaCase  
   topicResponse  
   {  
     "\<q\>\\\<\<getActor.name\>\>, would you \<\<actionPhrase\>\>, please?\</q\>  
     you ask her.\b ";    
     if(currentAction.iobjList\_\[1\].obj\_ != diamondRing)  
       "\<q\>I don't think that\\ll work.\</q\> she says dubiously. ";  
     else       
       "\<q\>Do you really think I should?\</q\> she asks. \<.convnode banana-case\>";                
   }  
;  
  
With the aid of which we can, for example, generate the following
transcript:  
  
**\>sarah, cut case with banana  
**"Sarah, would you cut the display case with the Golden Banana of
Discord, please?" you ask her.  
  
"I don't think that'll work." she says dubiously.  
  
**\>sarah, cut case**  
"Sarah, would you cut the display case with the diamond ring, please?"
you ask her.  
  
"Do you really think I should?" she asks.  
  
(You could say yes or no, or ask what she thinks.)  
  
**\>no**  
"No, on second thoughts I think we'd better leave it for now." you
reply.  
  
"Very well." she sighs.  
  
Although this exchange could lead to Sarah cutting open the case, we've
yet to see an example of a TCommandTopic that leads directly to the NPC
performing an action. But it is, in fact, perfectly easy to make any
action occur in response to a command using a TCommandTopic. For
example, we can easily provide a TCommandTopic that translates SARAH,
TAKE THE RING into GIVE RING TO SARAH, which might be relevant while
Sarah's still in the sarahTalkingState (i.e., before she starts
following the player character around):  
  
++ TCommandTopic @TakeAction  
   matchDobj = diamondRing  
   topicResponse  
   {  
     "\<q\>Here, take this,\</q\> you say, offering her the ring.\<.p\>";  
     nestedAction(GiveTo, diamondRing, sarah);  
   }  
;  
  
We can also, of course, simply have the actor perform the precise
command ordered; but note a possible trap here. We might be tempted to
define something like this:  
  
++ TCommandTopic  @TakeAction  
   matchDobj = \[goldenBanana, hexCrystal\]  
   topicResponse  
   {  
     nestedActorAction(sarah, Take, currentDobj);       
       "{The sarah/she} takes \<\<currentDobj.theName\>\> and turns it over in  
          her hands. \<q\>That's interesting!\</q\> she says.\<.p\>";  
   }  
;  
  
This may appear to work - unless the nestedActorAction fails for one of
a number of reasons (such as either the player character or Sarah
holding the golden banana when the command is issued). Then we could end
up with a transcript like this:  
  
**\>sarah, take banana  
**You won't let Sarah have that. Sarah takes the Golden Banana of
Discord and turns it over in her hands. "That's interesting!" she
says.  
  
**\>i**  
You are carrying the Golden Banana of Discord.  
  
**\>drop it  
**Dropped.  
  
**\>woman, take banana  
**Sarah takes the Golden Banana of Discord and turns it over in her
hands. "That's interesting!" she says.  
  
**\>woman, take banana**  
Sarah is already carrying the Golden Banana of Discord. Sarah takes the
Golden Banana of Discord and turns it over in her hands. "That's
interesting!" she says.  
  
There are basically two ways to get round this. One is to have the
special message display in the actionDobjTake handler of the objects
concerned, but that could quickly get tedious to code if there were
several of them. The other, and, probably easier, is to have the
TCommandTopic check that the nestedActorAction has succeeded before
displaying a message that assumes that it has. The trick is to work out
what condition best achieves that. In this case, it's probably most
effective to test that the object has changed locations as a result of
the nested TakeAction; if it has, then the nested action must have
worked. So we should instead code our TCommandTopic thus:  
  
++ TCommandTopic  @TakeAction  
   matchDobj = \[goldenBanana, hexCrystal\]  
   topicResponse  
   {  
     local oldLoc = currentDobj.location;  
     nestedActorAction(sarah, Take, currentDobj);       
     /\* test that the object has actually moved before reporting that it has \*/  
     if(currentDobj.location != oldLoc)  
       "{The sarah/she} takes \<\<currentDobj.theName\>\> and turns it over in  
          her hands. \<q\>That's interesting!\</q\> she says.\<.p\>";  
   }  
;  
  
This will then work correctly. But once you've verified that it does you
should comment it out or remove it altogether, since we don't actually
want it in the game.  
  
You could go on to define an analogous TICommandTopic to cope with
commands with two objects, a direct and an indirect, but it is probably
not worth the bother. To deal with such a command it is probably easier
simply to match the action and the direct object, and then let
topicResponse handle the matching of the indirect object. The reason for
this is that if you're going to have an NPC accept a command involving a
particular action and direct object, but only a certain range of
indirect objects, it's probably more helpful to the player to have the
NPC make some kind of response directly related to the combination of
action, direct object and indirect object specified, rather than a
generic refusal. For example, if the player types:  
  
\>**sarah, put the torch in the volcano  
**  
It's probably more helpful to have a response like:  
  
"I don't think I should put it there," she replies dubiously.  
  
than a more generic one like:  
  
Sarah refuses your request.  
  
The former response clues the player that Sarah might be prepared to put
the torch somewhere, but just not there.  
  
Note that if you think something like TCommandTopic might be useful in
your own game, you can download the (rather more complete) TCommand
library extension that comes in the ../lib/extensions folder of the
standard TADS 3 distribution..  
  
  
