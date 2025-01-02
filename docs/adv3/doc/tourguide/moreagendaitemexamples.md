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
<td style="text-align: left;"><strong>More AgendaItem Examples<br />
</strong></td>
<td style="text-align: right;"><a
href="delayedagendaitem.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="overview-commandingnpcs.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
Although we've already given several examples of AgendaItems, it may be
worth giving a few more to explore what else can be done with this
mechanism. All the following examples will apply to Sarah, so should be
placed in your code so that they are located directly within the sarah
object.  
  
The first problem we'll solve using AgendaItems (though there are
doubtless other ways of doing it) concerns the gas masks. So far we have
devised a means of giving Sarah a gas mask, but not of making Sarah do
anything with it. In order to follow the player character (PC) down the
path to the basalt plane in Hell Fire Cavern, Sarah needs to don the gas
mask when the PC does. We can use a pair of AgendaItems to make Sarah
don her gas mask when the PC is wearing it and remove it again when the
PC removes it:  
  
+ sarahDonGasMask : AgendaItem    
  isReady = (gPlayerChar.isMasked)  
  invokeItem  
  {  
    nestedActorAction(getActor, Wear, getActor.maskObj);  
    isDone = true;  
    getActor.addToAgenda(sarahDoffGasMask);  
  }  
;    
    
+ sarahDoffGasMask : AgendaItem  
  isReady = (!gPlayerChar.isMasked)  
  invokeItem  
  {   
    nestedActorAction(getActor, Remove, getActor.maskObj);  
    isDone = true;  
    getActor.addToAgenda(sarahDonGasMask);  
  }  
;  
  
Note how each of these AgendaItems adds the other to Sarah's agenda when
it is invoked. This allows the PC to don and remove his mask as many
times as he likes, and Sarah will still follow his lead. At the moment,
however, neither AgendaItem starts off in Sarah's agenda, so neither
will be executed. Since Sarah starts off without a gas mask,
sarahDonMask is clearly the AgendaItem that needs to be added first;
since Sarah can't wear her gas mask before she's got one, the
appropriate place to add this to her agenda is probably when she's first
given a gas mask:  
  
+ GiveTopic  
  matchTopic(fromActor, obj)  
   { return obj.ofKind(GasMask) ? matchScore : nil; }  
  handleTopic(fromActor, obj)  
  {  
    obj.moveInto(getActor);  
    "\<q\>Thanks,\</q\> {the sarah/she} remarks dubiously as she accepts it from   
    you, \<q\>I'm sure it'll - er - come in very useful.\</q\> ";  
    **getActor.addToAgenda(sarahDonGasMask);  
**  }  
;  
  
The next example shows how we can combine an AgendaItem with an
EventList to provide Sarah with a list of responses to the demons
whenever she can see them. It also provides an example of an AgendaItem
with a declarative isDone condition.  
  
  
+ sarahHatesDemons : AgendaItem, ShuffledEventList  
  isReady = (getActor.canSee(demons))  
  initiallyActive = true  
  invokeItem  
  {  
    doScript;  
  }  
  firstEvents =  
  \[  
    '{The sarah/she} backs away from the demons in disgust.  
     \<q\>Ugh! Get away from me, you horrid creatures!\</q\>  
     she shrieks. '  
  \]  
  eventList =  
  \[  
    '{The sarah/she} glances in horror at the demons crowding  
     around you, raising her arms to ward them off. ',  
    'One of the demons clutches at {the sarah\\s/her} arms, and  
     she does her best to shake it off. ',  
    '{The sarah/she} throws you an anxious glance, \<q\>Can\\t  
     we get out of here?\</q\> she pleads. ',  
    '{The sarah/she} clutches your arm in fright as a pair  
     of demons close in on her. '    
  \]   
  isDone = (demons.isIn(nil)) /\* once the demons have been banished they'll never be  
                                 seen again, so there's no point leaving this in  
                                 Sarah's agenda list \*/  
;  
  
  
Finally, we can even have Sarah solve one of the puzzles (pulling the
burned bush up) if it doesn't occur to the player:  
  
+ sarahPullBush : DelayedAgendaItem  
  isReady = (getActor.canSee(burnedBush))  
  invokeItem  
  {  
    "{The sarah/she} walks over to the bush and eyes it speculatively. ";  
    nestedActorAction(getActor, Pull, burnedBush);  
    "\<.p\>{The sarah/she} peers into the hole. \<q\>It looks like there's  
      some sort of tunnel.\</q\> she remarks, a little dubiously, \<q\>I suppose  
      you could crawl in there, but I wouldn't fancy it.\</q\>\<.p\>";  
  }  
  isDone = (burnedBush.isPulled)  
;  
  
Again, this needs to be added to Sarah's agenda at some appropriate
point:  
  
+ bush: CustomImmovable 'desiccated burning bush' 'desiccated bush'  
  "The bush is \<\<daemonID == nil ? 'little more than a collections of  
   dried sticks, with only the occasional apology for a leaf doing duty  
   for foliage' : 'ablaze'\>\>. "   
  inRoomDesc = "The only sign of life on this barren hillside  
    is a desiccated bush. "  
  burnDaemon { eventList.doScript; }  
  daemonID = nil    
  eventList : EventList  
  {  
  \[  
    'The bush is alight. ',  
    'The bush is burning furiously. ',  
    'The bush is starting to burn out. ',  
    &swap  
  \]    
  swap()  
   {  
    "The flames on the bush die out, leaving only charred remains. ";  
    lexicalParent.daemonID.removeEvent();  
    lexicalParent.daemonID = nil;  
    burnedBush.moveInto(lexicalParent.location);  
    lexicalParent.moveInto(nil);      
    **sarah.addToAgenda(sarahPullBush.setDelay(2));  
**   }  
  }  
  cannotTakeMsg = 'Tug as {you/he} will, the bush will not not quite come  
    free of the ground. '  
;  
  
Now, suppose we don't want Sarah to follow the player character into the
tunnel - perhaps she doesn't like narrow, dark tunnels running into the
side of rumbling volcanos (a pretty understandable attitude when you
come to think of it.) The first thing to do is to prevent Sarah
following the actor into the hole, which we can do by making the
following alteration on the sarahFollowing state:  
  
accompanyTravel(leadActor, conn)   
    { return leadActor == gPlayerChar** && conn != bushHole**; }  
  
  
Both to make sure that the player notices that Sarah is no longer
following, but waiting on the side of the volcano, and to make Sarah a
bit more lifelike, we can then add a couple of AgendaItems to display a
"farewell" and "welcome back" message. Note that we need to use
callWithSenseContext for the first one so that the text is actually
displayed:  
  
+ sarahWontFollow : AgendaItem   
  isReady = (gPlayerChar.isIn(volcanoTunnel) && getActor.curState==sarahFollowing)  
  invokeItem  
  {      
    callWithSenseContext(nil, nil, {:  
    "\<q\>Take care, now!\</q\> you hear {the sarah/she} call after you  
     anxiously.\<.p\>" });      
    isDone = true;  
    getActor.addToAgenda(sarahWelcomesBack);  
  }  
;  
    
+ sarahWelcomesBack : AgendaItem  
  isReady = getActor.canSee(gPlayerChar)  
  invokeItem  
  {  
    "\<q\>You're back then!\</q\> {the sarah/she} declares, with  
     evident relief.\<.p\>";  
    isDone = true;  
    getActor.addToAgenda(sarahWontFollow);  
  }  
;  
  
Finally, we need to get the first of these into Sarah's agenda in the
first place. One way we can do this would be to add it, as before, in
the swap message of the bush.eventList:  
  
+ bush: CustomImmovable 'desiccated burning bush' 'desiccated bush'  
  ...  
  eventList : EventList  
  {  
   ...  
   swap()  
   {  
    "The flames on the bush die out, leaving only charred remains. ";  
    lexicalParent.daemonID.removeEvent();  
    lexicalParent.daemonID = nil;  
    burnedBush.moveInto(lexicalParent.location);  
    lexicalParent.moveInto(nil);      
    sarah.addToAgenda(sarahPullBush.setDelay(2));  
    **sarah.addToAgenda(sarahWontFollow);  
**   }  
  }  
  ...  
;  
  
Ideally, one might want to make Sarah's behaviour even more elaborate
here, perhaps to have her ask the player character how he fared,
depending on whether he carried the golden banana into the hole and
whether he emerges with it; but at least this provides a basic
framework.  
