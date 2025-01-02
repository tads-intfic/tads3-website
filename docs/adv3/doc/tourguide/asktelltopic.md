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
<td style="text-align: left;"><strong>AskTellTopic : <a
href="topicentry.html">TopicMatchTopic</a><br />
</strong></td>
<td style="text-align: right;"><a href="telltopic.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="askfortopic.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
An AskTellTopic is effectively a combination AskTopic and TellTopic; in
other words it responds to both ASK X ABOUT Y and TELL X ABOUT Y,
treating the two just the same. It is thus useful when you want players
to be able to talk about a topic, but feel it doesn't make much
difference whether they do so by telling or asking.  
  
Let's suppose that this is how we want to handle conversing with the
demons about the golden banana. We could put the following into the
demonsChattering state:  
  
++ AskTellTopic, StopEventList @goldenBanana  
  \[  
    '\<q\>Say, do you little devils know anything about a Golden Banana?\</q\> you enquire.\b  
     \<q\>The Golden Banana!\</q\> one of them exclaims, \<q\>He knows of the Banana!   
      We wants it! We wants it!\</q\> ',  
    '\<q\>You seem interested in this Banana.\</q\> you remark.\b  
     The chief demon draws himself up to his full height and stares straight  
     at your navel. \<q\>Know that I am Princifax, leader of demons, Lord High  
      Big Stink, and recipient of three Rotten Tomato awards for Ham Actor of   
      the Underworld. Fear me! Fear me!\</q\>\b  
     \<q\>All hail Lord High Big Stink Princifax of the Rotten Tomato!\</q\> chorus  
      the other demons.\b  
     \<q\>Know too, feeble mortal, that the banana of which you speak is OURS!   
      We \<i\>demand\</i\> that if you know anything of it, you bring it to us.  
      Otherwise...\</q\> Princifax shakes his head, as if contemplating a fate worse  
      than death for you. ',  
     '\<q\>Why\\s this banana so important to you?\</q\> you wonder.\b  
      \<q\>It was stolen from us,\</q\> the demons reply indignantly, \<q\>By one of  
      your kind - so that makes \<i\>you\</i\> responsible for bringing it back to  
      us.\</q\>',  
     '\<q\>So you\\d like me to bring you back this banana?\</q\> you surmise.\b  
      \<q\>For a human you\\re almost quick on the uptake.\</q\> one of them  
      replies.'      
  \]  
;  
  
Another reason for using a combination AskTellTopic might be when the
command the player is most likely to use might alternate over the course
of the topic as the situation changes. For example, depending on whether
the player character has yet purchased a museum ticket or shown it to
the curator, he might ask where to purchase a ticket, tell the curator
that he's already purchased one, or ask whether he needs to buy another
if he wants to return. We could handle this with the following group of
TopicEntries, which should go in the curatorTalking
InConversationState:  
  
++ AskTellTopic @museumTicket  
   "\<q\>How do I get a museum ticket?\</q\> you want to know.\b  
    \<q\>There's a vending machine down the hall.\</q\> he tells you,  
    \<q\>You can get one there.\</q\>"  
;  
  
+++ AltTopic  
   "\<q\>I have bought a ticket.\</q\> you assure him.\b  
    \<q\>Let's see it, then.\</q\> {the curator/he} insists."  
    isActive = (museumTicket.moved)  
;  
  
+++ AltTopic  
   "\<q\>Do I need another ticket if I want to come in again?\</q\>  
    you ask.\b  
    \<q\>No,\</q\> he assures you, \<q\>the ticket you showed me is  
     good for multiple entry.\</q\> "  
   isActive = gRevealed('ticket-shown')    
;  
  
