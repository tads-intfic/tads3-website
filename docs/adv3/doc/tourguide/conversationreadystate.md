<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>ConversationReadyState : <a
href="overview-actorstates.htm">ActorState</a><br />
</strong></td>
<td style="text-align: right;"><a
href="inconversationstate.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="greetingprotocols.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
A ConversationReadyState, as its name suggests, is the kind of
ActorState is in when the actor is not actually talking to the PC but is
prepared to do so. When a conversational command (ASK ABOUT, TELL ABOUT,
ASK FOR, SHOW TO, GIVE TO, TALK TO) is addressed to an actor who's in a
ConversationReadyState, the actor automatically switches into the
associated InConversationState. What the associated state is may be
defined either explicitly by setting the **inConvState** property, or
implicitly by nesting the ConversationReadyState inside its associated
[InConversationState](inconversationstate.htm). Here we'll use the
latter method, even though here, as typically, the
ConversationReadyStates we'll be defining are the initial states of the
actors in question.  
  
We'll continue where we left off, with the demons (who must still block
your path in this state too). This code follows immediately after the
demonsChattering state:  
  
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
;  
  
The initial ConversationReady states for Sarah and Solomon are rather
more straightforward (again, each one should be nested within the
corresponding InConversationState):  
  
++ sarahLooking : ConversationReadyState  
  isInitState = true  
  specialDesc = "{A sarah/she} is standing by the shore, apparently  
   looking at something, though she occasionally throws a curious  
   glance your way. "  
  stateDesc = "She seems to be looking for something. "  
;  
  
++ solomonExamining : ConversationReadyState  
  specialDesc {inherited; stateDesc; }  
  stateDesc = "He's staring at the table, deep in thought. "  
  isInitState = true  
;  
  
While that of the curator is a little more complicated:  
  
++ curatorWatching : ConversationReadyState  
  stateDesc = "He's watching you carefully. "  
  specialDesc { inherited; stateDesc; }  
  isInitState = true  
  beforeTravel(traveler, connector)  
  {  
    inherited(traveler, connector);   
    if(traveler == gPlayerChar)  
    {  
      switch(connector)   
      {  
       case museum:  
        getActor.moveIntoForTravel(byCases);  
        "{The curator/he} follows you into the museum. ";  
         break;  
       case museumLobby:               
        getActor.moveIntoForTravel(behindTable);  
        "{The curator/he} follows you into the lobby. ";  
         break;  
       case benefactorsRoom:        
        "\<q\>I'm afraid you can't go in there,\</q\> {the curator/he}  
        intercepts you, \<q\>That's the \<i\>benefactors'\</i\> room; only  
        our benefactors are allowed in there to see the special  
        exhibits.\</q\> ";  
        exit;  
      }  
    }                       
  }  
;  
  
In order to make this travel checking occur on the related
InConversationState without having to repeat all the code we can simply
call this method thus:  
  
+ curatorTalking : InConversationState  
  stateDesc = "He's looking straight at you, head cocked slightly to one side. "  
  specialDesc { inherited; stateDesc; }  
  attentionSpan = 3  
  **beforeTravel(traveler, connector)  
  {  
    curatorWatching.beforeTravel(traveler, connector);  
    inherited(traveler, connector);  
  }**  
;  
  
  
