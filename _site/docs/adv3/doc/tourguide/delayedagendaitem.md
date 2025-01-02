<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>DelayedAgendaItem : <a
href="agendaitem.htm">AgendaItem</a><br />
</strong></td>
<td style="text-align: right;"><a
href="convagendaitem.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="moreagendaitemexamples.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
A DelayedAgendaItem, as its name suggests, is an
[AgendaItem](agendaitem.htm) that becomes active at some point in the
future. As with [ConvAgendaItem](convagendaitem.htm) this relies on an
overridden **isReady** method, so that if you want to add your own
isReady condition this needs to be combined with the inherited
behaviour.  
  
In addition to the properties it inherits from AgendaItem,
DelayedAgendaItem has a **readyTime** property which is used to
determine when it will become active, and a **setDelay(turns)** method
which is used to set readyTime the desired number of turns in the
future; the setDelay method returns self (for reasons that will shortly
become apparent).  
  
For example, suppose we want a pair of demons to make a threatening
advance on the player character (PC) two turns *after* the PC arrives in
their vicinity (assuming that the PC remains in their vicinity). The
usefulness of the delay in this case is that the demons' sudden outburst
is rather less predictable to the player if it doesn't come on the same
turn that the player first encounters the demons. First we can define an
appropriate DelayedAgendaItem, which should be located in the demons
object:  
  
+ demonsHissing : DelayedAgendaItem  
  isReady = (inherited && getActor.canSee(gPlayerChar))  
  invokeItem  
  {  
    "Two of the demons suddenly spring towards you, hissing wildly and  
     pawing at you with their claws. \<q\>Despair, human, despair!\</q\> they  
     shriek, \<q\>Your time is running out!\</q\> ";  
     isDone = true;  
  }  
;  
  
Next we want some means of setting this to run two turns after the PC
encounters the demons. The best way to do this is probably to add
demonsHissing to the demonic agenda in demonsPrancing.afterTravel:  
  
++ demonsPrancing : ConversationReadyState  
  specialDesc = "A gaggle of demons is prancing around on the rocks near the steps down  
   towards the basalt plain, pretending to ignore you, but keeping a careful watch on  
   you just the same. "  
  stateDesc = "They're prancing around near the steps down to the plain. "  
  isInitState = true  
  beforeTravel(traveler, connector)  
  {  
    if(connector == hellPathDown)  
    {  
      "The demons bunch together and shriek at you, driving you back from the steps. ";  
      exit;  
    }  
    inherited(traveler, connector);   
  }  
  **afterTravel(traveler, connector)  
  {  
    getActor.addToAgenda(demonsHissing.setDelay(2));  
  }**  
;  
  
Now we can see the advantage of having setDelay() return self. This
allows us to do in one statement what we should otherwise have to do in
two, since  
  
getActor.addToAgenda(demonsHissing.setDelay(2));**  
**  
is equivalent to  
  
  demonsHissing.setDelay(2);  
  getActor.addToAgenda(demonsHissing);  
  
  
  
