<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>GiveShowTopic : <a
href="topicentry.htm">ThingMatchTopic</a><br />
</strong></td>
<td style="text-align: right;"><a href="showtopic.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="alttopic.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
In many, perhaps most situations, we may not really want to distinguish
between GIVE x TO y and SHOW x TO y. In such situations, where we want
both commands to be treated exactly the same, we can use a
GiveShowTopic. For example, if the player tries to return either the
ring or the diamond to Sarah before attaching them together to restore
the diamond ring, we might want Sarah to refuse politely and ask the
player to complete the task:  
  
++ GiveShowTopic @diamond  
  "{The sarah/she} studies the gem carefully, \<q\>That certainly looks like it could  
   be the diamond from my ring,\</q\> she decides, \<q\>But where's the ring?\</q\>"  
;  
  
++ GiveShowTopic @ring  
  "{The sarah/she} nods eagerly, \<q\>Yes, that's my ring!\</q\> she declares, but then  
   her hand flies to her mouth, \<q\>But - oh my goodness - the diamond is missing!\</q\>"  
;  
  
If you try this out, however, it will rapidly become obvious that it
generates something of an unrealistic succession if Sarah is shown both
the ring (sans diamond) and the diamond (sans ring) in either order.
We'll see how to fix that shortly using [AltTopic](alttopic.htm). In the
meantime let's add some more GiveShowTopics.  
  
You'll remember some time ago we installed a vending machine to dispense
museum tickets. Our curator really ought to check whether the player
character has a ticket before allowing him into the museum. It would be
tedious to enforce this check every time the player character enters the
museum, however, so we'll make it a once and for all check (which is
reasonable; the ticket allows multiple entries and the curator can
remember being shown it). Again, players shouldn't guess whether they
have to GIVE the ticket or SHOW the ticket, so it's a good candidate for
a GiveShowTopic. We could make the GiveShowTopic set a custom property
of the curator to signal that the ticket has been shown, but it's
actually much simpler to use the \<.reveal \> tag to set a named key
that does the same job. Our GiveShowTopic (belonging to the curator's
curatorTalking state) then looks like this:  
  
++ GiveShowTopic @museumTicket  
  "\<q\>Thank you, that's fine.\</q\> {the curator/he} nods as he inspects your ticket,  
   \<q\>Enjoy the exhibits!\</q\>\<.reveal ticket-shown\>"  
;  
  
To test that the 'ticket-shown' flag has been set, we use
gRevealed('ticket-shown'). We need to amend the code in curatorWatching
to make this new check, and while we're at it, we'll change it so the
curator will let the player character into the benefactors' room if he
(the curator) has been given the carbuncle (which makes the player
character a benefactor of the museum), except that the curator won't let
anyone into the benefactors' room with any kind of container in which
the golden banana might be smuggled out (apart from the cap, which the
curator fails to recognize as a potential container, or the Matchbook,
which no one would regard as a container, though it does inherit from
the Container class).  
  
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
       **case museum:       
        if(gRevealed('ticket-shown'))  
        {  
          getActor.moveIntoForTravel(byCases);  
          "{The curator/he} follows you into the museum. ";  
        }  
        else  
        {  
          "{The curator/he} stops you, asking, \<q\>May I see your  
           ticket please?\</q\>\<.p\>";  
           exit;  
        }  
         break;**  
       case museumLobby:               
        getActor.moveIntoForTravel(behindTable);  
        "{The curator/he} follows you into the lobby. ";  
         break;  
       case benefactorsRoom:        
        **if(!carbuncle.isIn(getActor))  
        {       
          "\<q\>I'm afraid you can't go in there,\</q\> {the curator/he}  
          intercepts you, \<q\>That's the \<i\>benefactors'\</i\> room; only  
          our benefactors are allowed in there to see the special  
          exhibits.\</q\> ";  
          exit;  
        }   
        foreach(local cur in traveler.contents)  
          if(cur.ofKind(Container) && cur != cap && !cur.ofKind(Matchbook))  
           {  
             "\<q\>Sorry,\</q\> {the curator/he} apologizes as he intercepts  
              you, \<q\>But we can't allow you to take any bags or containers  
              in there. It's policy, I'm afraid - one can't be too careful  
              these days.\</q\> ";  
              exit;  
           }  **     
      }  
    }                       
  }  
;  
  
You may think that this beforeTravel method is beginning to get bloated
with spaghetti - or at least with switch statements and if statements,
and perhaps you feel it's a shame that TADS 3 couldn't find some way to
avoid this sort of thing in this case too. Well, if you are thinking
that, you'll be glad to know that TADS 3 does provide an alternative
here, which we'll look at shortly when we come to discuss
[InitiateTopic](initiatetopic.htm).  
  
King Solomon, meanwhile, is fairly anxious to recover a certain bronze
bowl he's mislaid, so we need to provide for handing it over to him. The
following GiveShowTopic belongs in the solomonTalking state:  
  
++ GiveShowTopic @bronzeBowl  
  topicResponse  
  {  
  "{The solomon/he}'s eyes light up as he spies the bronze bowl. \<q\>Excellent!\</q\>  
   he declares, \<q\>Now I can look old Hiram in the eye when he comes! Well, I believe  
   the traditional reward for a delighted monarch to give for service well done is  
   \<q\>up to half my kingdom\</q\>, but being a wiser monarch than most I can see that's  
   clearly far too extravagant. Still, perhaps some there's some more modest reward  
   that would interest you?\</q\>\b  
   {The solomon/he} examines the bowl and then carefully puts it down on the table.  
   \<.reveal bowl-returned\> ";  
   bronzeBowl.moveInto(solomonTable);  
  }  
;  
  
The player may also try to show or give this bowl to the curator, who,
however, will prove uninterested; this belongs in curatorTalking:  
  
++ GiveShowTopic @bronzeBowl  
   "{The curator/he} takes the bowl, turns it over, and gives it a cursory examination.  
   \<q\>It's obviously very old,\</q\> he announces, \<q\>probably of middle eastern  
   provenance. Possibly a valuable item, but not the sort of thing we're interested  
   in here.\</q\> So saying, he hands it back. "  
;  
  
  
In the course of discovering the bronze bowl the player will find a
number of gold coins which he may also want to show to the curator. This
is more complex since we created three gold coins as anonymous objects
of the GoldCoin class. Here we can use essentially the same method we
employed with the gas masks by overriding matchTopic to test for the
class of object being shown or given:  
  
++ GiveShowTopic, StopEventList     
   \[  
    '{The curator/he} takes a brief look at the coin then hands it back. \<q\>It\\s  
     just an old Roman coin,\</q\> he remarks dismissively, \<q\>We don\\t do coins  
     here.\</q\>',  
    '\<q\>I told you, this museum is not interested in old coins.\</q\> he reminds you.'  
   \]   
   matchTopic(fromActor, obj)  
     { return obj.ofKind(GoldCoin) ? matchScore : nil; }  
;  
  
We could use a similar technique for the tablets, which are sufficiently
noteworthy that the curator might be expected to show some kind of
interest in them. In this case we'll keep a note of which of the tablets
the curator has already seen so that he makes an appropriate response
depending on whether he has seen none of the tablets before, other
tablets but not the one we're showing him, or the same one again:  
  
++ GiveShowTopic  
  handleTopic(fromActor, obj)  
  {  
   /\* note the invocation \*/  
    noteInvocation(fromActor);  
   
   /\* set pronoun antecedents if possible \*/  
    setTopicPronouns(fromActor, obj);  
      
   if(tabletsSeen.indexOf(obj))  
     "\<q\>You've already shown me this \<\<obj.name\>\>.\</q\> he points out. ";  
   else  
   {     
     if(tabletsSeen.length==0)  
     {  
      "{The curator/he} takes {the dobj/him} and examines it carefully. \<q\>Very interesting,\</q\>  
       he remarks as he hands it back to you, \<q\>I don\\t exactly know what it is, but it\\s  
       definitely interesting. Unfortunately, without knowing what it is, I can't give it  
       a place in the museum.\</q\>";  
     }       
    else  
     {       
       "{The curator/he} examines {the dobj/him} with evident curiosity. \<q\>Another one!\</q\>  
        he declares, \<q\>How very curious!\</q\>";  
     }  
     tabletsSeen += obj;   
   }  
  }  
  matchTopic(fromActor, obj)  
     { return obj.ofKind(Tablet) ? matchScore : nil; }  
  tabletsSeen = \[\]     
;   
  
  
