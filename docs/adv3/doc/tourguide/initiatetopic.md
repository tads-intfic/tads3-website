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
<td style="text-align: left;"><strong>InitiateTopic : <a
href="topicentry.html">ThingMatchTopic</a><br />
</strong></td>
<td style="text-align: right;"><a href="alttopic.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="asktopic.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
You'll recall a couple of sections back that we ended up with rather a
lengthy beforeTravel method on curatorWatching : ConversationReadyState.
Although it isn't *too* bad, you may feel that its combination of switch
statement and if statements is not only rather cumbersome but out of
tune with the general approach of controlling behaviour by defining
objects. Well, in fact, TADS 3 does provide a mechanism we could use to
implement this case in a radically different way. Here's how the same
curator behaviour can be implemented using InitiateTopics:  
  
++ curatorWatching : ConversationReadyState  
  stateDesc = "He's watching you carefully. "  
  specialDesc { inherited; stateDesc; }  
  isInitState = true  
  beforeTravel(traveler, connector)  
  {  
    inherited(traveler, connector);   
    if(traveler == gPlayerChar)  
    {  
      curator.initiateTopic(connector);  
    }  
  }  
;  
  
++ InitiateTopic @museum  
   topicResponse  
   {  
    "{The curator/he} stops you, asking, \<q\>May I see your  
    ticket please?\</q\>\<.p\>\<\<gSetKnown(museumTicket)\>\>";  
     exit;  
   }  
;  
  
+++ AltTopic  
    topicResponse  
    {  
       getActor.moveIntoForTravel(byCases);  
       "{The curator/he} follows you into the museum. ";  
    }  
    isActive = (gRevealed('ticket-shown'))      
;  
  
++ InitiateTopic @museumLobby  
   topicResponse  
   {  
     getActor.moveIntoForTravel(behindTable);  
     "{The curator/he} follows you into the lobby. ";  
   }  
;  
  
++ InitiateTopic @benefactorsRoom  
   topicResponse  
   {  
     "\<q\>I'm afraid you can't go in there,\</q\> {the curator/he}  
      intercepts you, \<q\>That's the \<i\>benefactors'\</i\> room; only  
      our benefactors are allowed in there to see the special  
      exhibits.\</q\>\<.reveal benefactors\> ";  
      exit;  
   }  
;  
  
+++ AltTopic   
   topicResponse  
   {  
     foreach(local cur in gPlayerChar.contents)  
       if(cur.ofKind(Container) && cur != cap && !cur.ofKind(Matchbook))  
        {  
          "\<q\>Sorry,\</q\> {the curator/he} apologizes as he intercepts  
           you, \<q\>But we can't allow you to take any bags or containers  
           in there. It's policy, I'm afraid - one can't be too careful  
           these days.\</q\> ";  
           exit;  
        }  
   }  
   isActive = (carbuncle.isIn(getActor))  
;  
  
An InitiateTopic is thus a kind of TopicEntry that can be used to make
an actor initiate conversation (or any other kind of action) in response
to something in the environment. Although InitiateTopics are set up in
exactly the same way as GiveTopics and ShowTopics, and, just like them,
match game objects, they are activated not in response to player
conversational commands such as GIVE TO, SHOW TO or ASK ABOUT, but under
program control in response to a call to **initiateTopic(obj)**.  
  
The example we have just given shows that we can generally use an
initiateTopic(obj) statement to replace a switch(obj) statement and
transform the cases within the body of the switch statement into
individual InitiateTopics. At the same time the use of AltTopic and
isActive can be used to replace the IF... THEN... ELSE... logic. The
only limitation is that the InitiateTopics must be keyed on some set of
objects (the obj parameter of the initiateTopic method). These could
even be special objects created for the purpose, but more normally they
will be existing objects that already serve some purpose in the game. In
the most common case, they will often be locations (Rooms).  
  
InitiateTopics keyed by location are probably most useful in connection
with sidekick characters, like Sarah in the present game, who can be
made to offer spontaneous observations on (some of) the various
locations she visits in company with the player character. The best
place to put the call to initiateTopic() is probably in the
arrivingTurn() method of the sarahFollowingState, so that it's called
each time Sarah arrives in a new location (but not every turn she
remains there). Also, the player won't be impressed if Sarah makes the
same remark every time she arrives in a given location, so we'll need to
provide a list of responses for each case we implement. If we want Sarah
to make a remark only on her first visit or two, the easiest way may be
to provide an Event list with only one or two elements:  
  
+ sarahFollowing : AccompanyingState  
  specialDesc = "{The sarah/she} is standing beside you. "  
  stateDesc = "She's standing beside you. "  
  accompanyTravel(leadActor, conn)   
    { return leadActor == gPlayerChar; }  
  afterAction()  
    {  
      if(gPlayerChar.isIn(snowMobile))  
      {  
        getActor.setCurState(sarahOnSnowMobile);  
        nestedActorAction(getActor, SitOn, snowMobile);  
        "{The sarah/she} gets on the snowmobile behind you. ";  
      }  
    }  
  getAccompanyingTravelState(leadActor, conn)  
   { return new SarahInTravelState(location, leadActor, self); }    
  **arrivingTurn() { initiateTopic(getActor.location); }      
**;  
  
++ InitiateTopic, EventList @portDeck  
  \[ '\<q\>What a big ship!\</q\> {the sarah/she} remarks. '\]  
;  
  
++ InitiateTopic, ShuffledEventList @tardisControlRoom    
  \[ '\<q\>Cor! This is impressive!\</q\> {the sarah/she} remarks. ',  
    '\<q\>Well, here we are again!\</q\> says {the sarah/she} brightly. ' \]  
  
  \[ '\<q\>Well, where shall we go next?\</q\> {the sarah/she} wonders. ',  
    '{The sarah/she} wanders over to the console and inspects the setting  
      of the slider and dial. ', nil \]  
  
;  
  
++ InitiateTopic, EventList @snowWorld  
  \[ '\<q\>Brrr. This place is so \<i\>cold\</i\>,\</q\> {the sarah/she} complains. ',  
    '\<q\>Can\\t we just go back to the Tardis?\</q\> {the sarah/she} asks. ' \]   
;  
  
++ InitiateTopic, EventList @insideHut  
  \[ '{The sarah/she} walks over to the snowmobile and lays her hand on one of  
    the seats. Then she turns to you and asks, \<q\>What do you think?\</q\> '\]  
;  
  
++ InitiateTopic, EventList @neForestPath  
  \[ '{The sarah/she} starts scuffling the ground with her feet, \<q\>I think there  
     may be something here.\</q\> she announces. ' \]  
  isActive = (!woodenTablet.discovered)  
;  
  
  
++ InitiateTopic, EventList @redRavine  
  \['\<q\>That\\s \<i\>horrible\</i\>!\</q\> {the sarah/she} declares, eyeing the  
   skeleton with evident disgust. ',  
   '\<q\>What do you think happened to him?\</q\> she asks, nodding towards  
    the skeleton. '  
  \]  
;  
  
++ InitiateTopic, EventList @solomonBedroom  
  \['{The sarah/she} runs her hand over the bed, then walks over to the window and  
    looks out. \<q\>Hey! Come and have a look at this!\</q\> she says. '\]  
;  
  
  
++ InitiateTopic, EventList @museum  
  \[ '{The sarah/she} starts walking round, looking at the exhibits. \<q\>What  
     an odd collection!\</q\> she declares. ' \]  
;  
  
++ InitiateTopic, EventList @graveyard  
  \[ '\<q\>This place gives me the creeps!\</q\> {the sarah/she} declares, with a  
    little shudder. ',  
    '{The sarah/she} walks over to one of the tombstones and examines it  
     thoughtfully, \<q\>Come and have a look at this.\</q\> she beckons you,  
     \<q\>I think it might be important - like it\\s the key to some sort of  
     code or something.\</q\> '  
  \]  
  isActive = (!ghost.isIn(graveyard))  
;  
  
  
++ InitiateTopic @outsideCave  
   "{The sarah/she} looks round at the sky, the valley and the car park, then  
    turns to you with a slightly melancholy look, \<q\>It's good to be back out  
    here,\</q\> she tells you, \<q\>but I have this horrible feeling we still have  
    unfinished business back in \<i\>there\</i\>.\</q\> she nods towards the caves. "  
;  
  
+++ AltTopic  
   topicResponse   
   {  
    "{The sarah/she} turns to you with a broad smile and gives you a great big  
    hug.\b\<q\>We \<i\>did\</i\> it!\</q\> she declares, \<q\>we really did it!\</q\>\b ";  
    endGame(ftVictory);  
   }  
   isActive = (goldenBanana.isIn(nil))  
;  
  
One could probably add more such responses still, but you've probably
seen enough to get the general idea, and we're beginning to bring Sarah
to life a bit more. Note that our final AltTopic actually ends the game
with the player winning - the objective is to get Sarah safely back
outside and to destroy the golden banana, which are precisely the
conditions under which this AltTopic becomes operative.  
  
Since initiateTopic can key on *any* kind of object, we could also use
it to make Sarah respond to SensoryEvents. First, we make her an
observer of SoundEvents and SightEvents, then we can start adding
suitable InitiateTopics:  
  
sarah : Person 'attractive young woman/brunette' 'young woman' @lakeRoom  
  "She's an attractive brunette, somewhere in her mid-twenties. "  
  isHer = true  
  properName = 'Sarah'  
  globalParamName = 'sarah'    
  knownProp = &sarahKnows  
  seenProp = &sarahHasSeen  
  **notifySightEvent(event, source, info) { initiateTopic(event); }  
  notifySoundEvent(event, source, info) { initiateTopic(event); }  
**;  
  
+ InitiateTopic, EventList @bulkheadOpenEvent  
  \['\b\<q\>That\\s clever!\</q\> {the sarah/she} declares. ',  
   '\b\<q\>Why not just leave it open?\</q\> {the sarah/she} wonders. '  
  \]  
;  
  
+ InitiateTopic, EventList @sailEvent  
  \['\b\<q\>So \<i\>that\\s\</i\> how you sail this thing!\</q\> {the sarah/she} declares. ',  
   '\b\<q\>Here we go again!\</q\> {the sarah/she} remarks cheerfully. ',  
   '\b{The sarah/she} starts whistling \<i\>A Life on the Ocean Wave\</i\>. '  
  \]  
;  
  
+ InitiateTopic @explosionEvent  
  topicResponse  
  {  
    callWithSenseContext( getActor, sight,   
   {: "\b\<q\>Crikey, that sounded close!\</q\> cries {the sarah/she}. "} );  
  }  
;  
  
+ InitiateTopic @ghostAppearingEvent  
  "\b\<q\>Eek!\</q\> cries {the sarah/she}, clutching at your arm.   
   \<\<getActor.setHasSeen(ghost)\>\>\<\<getActor.setKnowsAbout(goldenBanana)\>\>"  
;  
  
Note that we have located the last set of InitiateTopics directly in the
actor object; you can also locate InitiateTopics in ActorStates, just
like any other TopicEntry. Unlike other kinds of TopicEntry, however,
you cannot put an InitiateTopic inside a [Conversation
Node](conversationnodes-overview.html)(which would not be useful in any
case).  
  
Note too that in the last of these we call getActor.setHasSeen(ghost) to
record the fact that Sarah has actually seen the ghost. Clearly this
will be rather important if we want to define Sarah's responses to
conversation about the ghost! At the same time we can note the fact that
Sarah has now heard about the golden banana.  
  
For any of these InitiateTopics to work, we obviously have to add some
code to define the relevant events and trigger them, first the opening
of the bulkhead door:  
  
+ bulkheadDoor : HiddenDoor 'bulkhead door/doorway/opening' 'bulkhead door'  
  "The central section of the foreward bulkhead has slid open, revealing a   
   doorway through the bulkhead. "  
  destination = crewQuarters   
  **makeOpen(stat)  
  {  
    inherited(stat);  
    if(stat) bulkheadOpenEvent.triggerEvent(self);  
  }**  
;  
  
bulkheadOpenEvent : SightEvent;  
  
For the sailing of the ship we likewise define sailEvent : SightEvent;
and then add sailEvent.triggerEvent(self); after
ship.moveInto(wheel.curDestination); on the SpringLever object attached
to the panel on the quarterdeck. The explosionEvent has already been
defined (when the bomb detonates on the London street), but note that in
order for Sarah's response to it to be displayed we have to use
callWithSenseContext since the triggering of explosionEvent takes place
within a senseFuse.  
  
Finally, we need to set up the ghostAppearingEvent:  
  
roomDaemon  
   {  
     inherited;  
     if(!ghost.moved && !statue.isPulled)  
     {  
       ghost.moveInto(self);  
       "A pale ghost rises slowly from one of the tombs, then turns to you,  
        pointing its ghostly finger straight at you. \<q\>You!\</q\> it cries,  
        \<q\>Yes you - the disturber of my statue! You are the one who must  
        carry out the sacred task! You are the one who must retrieve the  
        Golden Banana of Discord and cast it into the fires of Mount Gloom  
        before it falls into the hands of the Cabal!\</q\> ";  
        ghostAppearingEvent.triggerEvent(ghost);  
    gSetKnown(goldenBanana);  
    gPlayerChar.setHasSeen(ghost);  
     }  
   }  
  
And of course, you need to define:  
  
ghostAppearingEvent : SightEvent;  
  
Used with sufficient ingenuity, and in combination with SensoryEvents or
keyed on locations etc, InitiateTopics can thus be used to define NPCs'
reactions to just about anything we like.  
  
Finally, although in this example we have used SensoryEvents to trigger
InitiateTopics directly on the actor, if we'd really wanted a different
set of InitiateTopics to handle different responses to these events on
each ActorState, we could have defined:  
  
notifySightEvent(event, source, info) { curState.initiateTopic(event); }  
notifySoundEvent(event, source, info) { curState.initiateTopic(event); }  
