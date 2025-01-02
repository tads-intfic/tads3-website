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
<td style="text-align: left;"><strong>ConvAgendaItem : <a
href="agendaitem.html">AgendaItem</a><br />
</strong></td>
<td style="text-align: right;"><a href="agendaitem.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="delayedagendaitem.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
The comments in the library code describe the ConvAgendaItem thus:  
  
*A "conversational" agenda item. This type of item is ready to execute
only when the actor hasn't engaged in conversation during the same turn.
This type of item is ideal for situations where we want the actor to
pursue a conversational topic, because we won't initiate the action
until we get a turn where the player didn't directly talk to us.  
*  
The main thing to note about a ConvAgendaItem is that the only way it
differs from a standard AgendaItem is by overriding the isReady
property  
to achieve the desired effect, namely by defining it as:  
  
class ConvAgendaItem: AgendaItem  
    isReady = (!getActor().conversedThisTurn()   
       && getActor().canTalkTo(otherActor)  
       && inherited())   
  
    otherActor = (gPlayerChar)  
;   
  
This means that if you want to use your own isReady condition on a
ConvAgendaItem you must be careful to include the inherited condition as
well:  
  
myChatAgenda: ConvAgendaItem  
   isReady = inherited && myCustomCondition  
    invokeItem()  
   {  
     /\*your code here \*/  
   }  
;  
  
For our first example of a ConvAgendaItem, we'll simply add the
ConvAgendaItem to the actor's agendaList and leave the isReady condition
alone. Suppose we want Sarah to react to the news that the main cave
exit is blocked; we might define a ConvAgendaItem for her thus:  
  
+ sarahWantsOut : ConvAgendaItem  
  invokeItem()  
  {  
    "\<q\>What I want to know,\</q\> {the sarah/she} remarks, \<q\>is how we're  
      going to get out of here now that the main exit's blocked.\</q\> ";  
    isDone = true;  
  }  
;  
  
In order for this to be added to her agenda at the right point in the
game, we need to make a small change to the TellTopic in which she's
told about the rockfall:  
  
+ TellTopic, SuggestedTellTopic, StopEventList @tRockfall  
   \[  
     {: "\<q\>We won't get out the way we came it,\</q\> you warn her, \<q\>I'm  
        afraid there's just been a rockfall, blocking the way back out  
        to the outside world!\</q\> \<\<sarah.setKnowsAbout(tRockfall)\>\>\b  
        \<q\>Oh wonderful!\</q\> {the sarah/she} declares, as if it was your  
        fault. **\<\<sarah.addToAgenda(sarahWantsOut)\>\>**" },  
     '\<q\>The way out back through the caves is blocked by a rockfall.\</q\>  
       you say.\b  
      \<q\>Yes, you already told me.\</q\> she reminds you. '           
   \]       
   timesToSuggest = 1  
   name = 'the rockfall'  
   isActive = entranceTunnel.blocked  
;  
  
For our second example, we'll turn curatorSurprise into a
ConvAgendaItem. While we're at it we'll do the job properly by making it
initiate a Conversation Node. Note also how we change the isReady
condition from what we had before:  
  
+ curatorSurprise : ConvAgendaItem  
  initiallyActive = true  
  isReady = (getActor.canSee(carbuncle) && carbuncle.isIn(gPlayerChar) && inherited)  
  invokeItem  
  {  
     getActor.initiateConversation(curatorTalking, 'curator-carbuncle');  
     isDone = true;  
  }    
  agendaOrder = 150  
;  
  
+ ConvNode 'curator-carbuncle'  
  npcGreetingMsg = "\<q\>What's that you're carrying?\</q\> {the curator/he}  
   inquires, his eyes lighting up in amazed excitement at the sight of the  
   carbuncle, \<q\>May I take a closer look?\</q\> ";  
;  
  
++ YesTopic  
   topicResponse  
   {  
     "\<q\>Yes, sure.\</q\> you agree.\b ";  
     nestedAction(GiveTo, carbuncle, getActor());  
   }  
;  
  
++ NoTopic  
    "\<q\>No - it's not for you.\</q\> you reply sternly.\b  
     \<q\>Oh please, do show it to me!\</q\> he begs. "  
;     
  
One way to try this out if you've included Nikos Chantziaras's
ncDebugActions in your project is to SNARF the carbuncle and the cap,
PUT the carbuncle in the cap, WEAR the cap, then POW to the large sign.
Go WEST from there, engage the curator in conversation, and remove the
cap while talking to him.  
  
  
  
