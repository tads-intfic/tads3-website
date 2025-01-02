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
<td style="text-align: left;"><strong>initiateConversation<br />
</strong></td>
<td style="text-align: right;"><a href="specialtopic.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="agendaitem.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
While we can use the \<.convnode\> tag to have an NPC move into a
[Conversation Node](conversationnodes-overview.html) in the middle of a
conversation, and perhaps pose a question to the Player Character (PC)
at that point, you might want a truly proactive NPC actually to start a
conversation. To achieve that, you can call the **NPC's
initiateConversation(ActorState, node)** method, where ActorState is the
ActorState you want the NPC to change to (normally an
[InConversationState](inconversationstate.html)), or nil if you don't
want a change of ActorState, and node is the Conversation Node that you
want to become active. Note that the node parameter can either be the
ConvNode's object name, or the quoted string used at the ConvNode's tag.
We'll illustrate both below:  
  
We'll start with the ghost; we'll handle his entire appearance through
ConvNodes, and we'll get him started with a call to initiateTopic().
First change the definition of graveyard.roomDaemon so it now reads:  
  
roomDaemon  
   {  
     inherited;  
     if(!ghost.moved && !statue.isPulled)  
     {  
       ghost.moveInto(self);  
       ghost.initiateConversation(ghostTalking, ghostNode);  
       ghostAppearingEvent.triggerEvent(ghost);         
     }  
   }  
  
Now we may define the two ConvNodes for the ghost, together with their
associated topics. Note how we have a very simple threaded conversation,
that progresses from the first node to the second once the player
accedes to the ghost's request (not that he has any real choice in the
matter).  
  
+ ghostNode : ConvNode 'ghostQuestion'  
  npcGreetingMsg = "\<.p\>A pale ghost rises slowly from one of the tombs,   
  then turns to you, pointing its ghostly finger straight at you.  
  \b\<q\>You!\</q\> the ghost cries,  
  \<q\>Yes you - the disturber of my statue! You are the one who must  
  carry out the sacred task! You are the one who must retrieve the  
  Golden Banana of Discord and cast it into the fires of Mount Gloom  
  before it falls into the hands of the Cabal! Will you carry out  
  this sacred quest? Will you?\</q\>  \<\<gSetKnown(goldenBanana)\>\>  
       \<\<gPlayerChar.setHasSeen(ghost)\>\>"  
  canEndConversation(actor, reason)  
  {  
    switch(reason)  
    {  
       case endConvTravel:  
         "You are rooted to the spot. ";  
         return nil;  
       case endConvBye:  
         "\<q\>Oh no, you don't get rid of me that easily!\</q\>  
         cries the ghost. ";  
         return nil;  
       default:  
         return nil;      
    }  
  }  
  npcContinueMsg = "The ghost lets out a low moan and whispers  
   \<q\>My answer! My answer! I will have my answer! Do you  
   accept your quest?\</q\> "  
;  
  
++ NoTopic, SuggestedNoTopic  
  "\<q\>Er, no thanks. I'm off sacred quests at the moment...\</q\>  
   you begin feebly.\b  
   \<q\>No is not the right answer!\</q\> the ghost interrupts you,  
   \<q\>By toppling my statue you have shown you are the one!  
   So - will you accept your responsibilities and take up the  
   quest?\</q\>\<.convstay\>"  
;  
  
++ YesTopic, SuggestedYesTopic  
  "\<q\>Well, if you insist...\</q\> you begin.\b  
   \<q\>I \<i\>do\</i\> insist!\</q\> roars the ghost, \<q\>So,  
   you have accepted the quest. Do you have any  
   questions about it?\</q\>\<.convnode quest-questions\> "  
;  
  
++ AskTopic, SuggestedAskTopic @goldenBanana  
   "\<q\>What is this Golden Banana you're on about, anyway?\</q\>  
   you ask.\b  
    \<q\>It is that which you must find and destroy in your  
   quest!\</q\> the ghost answers, \<q\>Now, does this mean that  
   you are accepting your sacred task?\</q\>\<.convstay\>"  
   name = 'the golden banana'  
;  
  
++ DefaultAnyTopic  
  "\<q\>Trying to change the subject will avail you nothing!\</q\>        
  the ghost tells you, \<q\>When you've been dead as long as I have  
  you become \<i\>very\</i\> single minded - almost monomaniac -  
  so I \<i\>will\</i\> have my answer and you \<i\>shall\</i\> not leave  
  this spot until I do. So, I ask again, do you accept the Sacred  
  Quest of the Golden Banana?\</q\>\<.convstay\>"    
;    
  
+ ConvNode 'quest-questions'  
  npcContinueMsg = "\<q\>Do you have any further questions?\</q\> {the ghost/he}  
   asks patiently. "  
  canEndConversation(actor, reason)  
  {  
    if(reason==endConvTravel)  
    {  
      "You are too absorbed with {the ghost/him} to leave right now. ";  
      return nil;  
    }  
    return true;  
  }   
  endConversation(actor, reason)  
  {  
    "\<q\>Well, goodbye then.\</q\> you say.\b  
     \<q\>Farewell, Banana-Quester!\</q\> {the ghost/he} replies,  
     \<q\>if you are sure you have no further questions?\</q\>\b";  
    nestedAction(No);  
  }  
;  
  
++ NoTopic, SuggestedNoTopic  
  topicResponse  
  {  
   "\<q\>No, I don't think so.\</q\> you reply.\b  
   \<q\>Very well, \</q\> he sighs, \<q\>Then I may depart, my job is done.  
    Should you need to know more, consult the Great History in the Old  
    Library. Nunc dimittis servum tuum Domine... \</q\>  
    With a final moan, {the ghost/he} fades out of sight. ";  
   ghost.moveInto(nil);  
  }  
;  
  
++ YesTopic, SuggestedYesTopic  
  "\<q\>Yes, I do.\</q\> you reply.\b  
   \<q\>Would you care to be more specific?\</q\> {the ghost/he} suggests.   
   \<.convstay\>"  
;  
  
++ AskTopic, SuggestedAskTopic, StopEventList @ghost  
  \[  
   {: "\<q\>Yes, who are you?\</q\> you demand.\b  
     \<q\>I am - or was - \<\<ghost.makeProper()\>\> the Banana-Bearer.\</q\> he  
     tells you. \<q\>I it was who countless aeons ago - or last week - ghosts  
     don't have such a good sense of time, you see, time doesn't mean much  
     when you're dead. Ah, where was I? Oh yes, I it was who countless  
     ages ago chanced life and limb and sanity itself to snatch the  
     Golden Banana of Discord from the slopes of Mount Gloom, and smuggle  
     it past the dread demons of Hell-Fire Cavern into the world of men!  
     A great hero men thought me! A great fool I was. Oh woe! Woe! Woe!\</q\>  
     His moaning complete, the ghost enquires, \<q\>Right, any more questions?\</q\>  
     \<.convstay\>" },  
     '\<q\>But who are you?\</q\> you ask.\b  
      \<q\>I told you I am - or was - Benedict the Banana-Bearer.\</q\> he  
      reminds you. \<q\>Anything else?\</q\> \<.convstay\>'  
  \]  
  name = 'himself'  
;  
  
++ AskTopic, SuggestedAskTopic, StopEventList @goldenBanana  
  \[  
    '\<q\>So what exactly is this Golden Banana thingy? And why\\s  
     it so important?\</q\> you enquire.\b  
     \<q\>The Golden Banana of Discord is the most Awesome Artifact in  
      the Universe!\</q\> cries {the ghost/he}, \<q\>When I fetched it from  
      the slopes of Mount Gloom I thought I was conferring immeasurable  
      benefits on my fellow man - health, wealth, happiness, power -  
      everything. Fool that I was! Oh yes, the Golden Banana is powerful  
      all right. Too powerful! And it is a terrible power! It is best  
      you do not know too much about it, lest you be tempted to imitate  
      the folly of others. But know this, should the Golden Banana of  
      Discord fall into the wrong hands, then all is lost, all! It will  
      be the end of life, death and Interactive Fiction as we know it!  
      Horrible! Terrible! So I implore you, find it and destroy it as  
      soon as you can - the only way it can be destroyed, by being cast  
      into the fires of Mount Gloom! So, is there anything else you  
      would know?\</q\> \<.convstay\>',  
     '\<q\>Is there anything else you can tell me about this Golden  
     Banana?\</q\> you enquire.\b  
      \<q\>I have told you all you need to know.\</q\> {the ghost/he}  
      assures you. \<q\>It is a terrible, powerful artifact that must  
      be destroyed. For you to know more is too dangerous. Any other  
      questions?\</q\>\<.convstay\>'        
  \]  
  name = 'the Golden Banana of Discord'  
;  
  
++ AskTopic, SuggestedAskTopic @tCabal  
  "\<q\>Who or what is this cabal you're so worried about?\</q\> you wonder.\b  
   {The ghost/he} looks distinctly shifty as he replies, \<q\>That's the  
   problem, no one knows!\</q\> he tells you, \<q\>That's why they're so  
   terrifying - they could be anyone, anyone at all! But whoever they   
   are, you \<i\>mustn't\</i\> let them get the Golden Banana - or else -  
   or else we're all doomed - doomed!\</q\> He blinks a few more times,  
   then asks, \<q\>Was there anything else you wanted to know?\</q\>\<.convstay\>"  
   name = 'the Cabal'  
;  
  
++ DefaultAnyTopic  
   "\<q\>Such things no longer concern me,\</q\> {the ghost/he} sighs,  
    \<q\>I am dead, after all. Now, was there anything else?\</q\>\<.convstay\> "  
;  
  
tCabal : Topic 'cabal' ;    

When copying this code make sure that the final line (the definition of
the tCabal Topic) doesn't get mixed up with your objecty hierarchy; you
might want it to move it to somewhere safe, such as the end of the file.

Note the use of the endConversation method in the second ConvNode to
call a nested No command in the event of the player typing BYE; this way
the code in the NoTopic is run whether the player leaves the ConvNode by
typing BYE or NO. Note also that in order to make it work properly we
have to give the first ConvNode a name property ('ghostQuestion') even
though we entered it by referring to its object name (ghostNode).  
  
If you try this out you'll find there's a small problem: if Sarah is
accompanying the player character when the two of them encounter the
ghost, an initiateTopic is triggered on Sarah, so *she* becomes the
current interlocutor, with the result that if the player directs a
response to the ghost or tries a TOPICS command, it'll be taken as
directed at Sarah, which isn't what we want. There may be more than one
way round this, but the way we'll use is to modify Sarah's InitiateTopic
so that it deflects conversation back to the ghost, like this:  
  
+ InitiateTopic @ghostAppearingEvent  
  topicResponse  
  {   
    "\b\<q\>Eek!\</q\> cries {the sarah/she}, clutching at your arm.   
    \<\<getActor.setHasSeen(ghost)\>\>\<.p\>";  
    replaceAction(AskAbout, ghost, sarah);  
  }  
;  
  
Now we need to add an appropriate AskTopic in the ghostNode ConvNode to
field this question:  
  
++ AskTopic @sarah  
   "\<q\>Never mind her,\</q\> the ghost insists, \<q\>just answer my  
   question.\</q\>\<.convstay\>\<.topics\>\<.p\>"  
   isActive = (gPlayerChar.canSee(sarah))  
;  
  
This will work fine after Sarah clutching the player character's arm,
but will also be fine as a response to ASK GHOST ABOUT SARAH.  
  
Well, that's quite enough about the ghost. Let's move on to the king.
When the player character suddenly walks in on King Solomon, appearing
as if by magic out of his hitherto empty bedroom, it's likely to give
the monarch a bit of a shock, so you would imagine that Solomon won't
wait to be addressed, but will ask who the intruder is. Again, we can
use initiateConversation to handle this:  
  
++ solomonExamining : ConversationReadyState  
  specialDesc {inherited; stateDesc; }  
  stateDesc = "He's staring at the table, deep in thought. "  
  isInitState = true  
  **afterTravel(traveler, connector)  
  {  
    if(traveler==gPlayerChar && !getActor.isProperName)  
      getActor.initiateConversation(solomonTalking, 'solomon-surprised');  
  }**  
;  
  
Then we then add a couple of ConvNodes (located in solomon) to get the
conversation started:  
  
+ ConvNode 'solomon-surprised'  
  npcGreetingMsg = "{The solomon/he} looks up, startled at your  
   appearance, and then says something that sounds like:  
   \<q\>Shlomo ani, melek yisrael, ha-hakhim ha-gadhol.\</q\>  
   At that point your ears mysteriously tune into the ancient tongue and  
   you realize that what he just said was, \<q\>I am \<\<solomon.makeProper()\>\>,  
   King of Israel, the great sage.\</q\> He continues, \<q\>Who are you,  
   where are you from, how did you get here? I know my bedroom was empty  
   just now, and no one could have got in, so who are you?\</q\> "  
  npcContinueMsg = "\<q\>I'm still waiting for your reply.\</q\> {the solomon/he}  
   reminds you. \<q\>Who are you? Why are you here?\</q\> "   
  canEndConversation(actor, reason)  
  {  
    return dontEndSolomonConversation(reason);  
  }   
  limitSuggestions = true  
;  
  
++ SpecialTopic 'explain that you are from the future'  
   \['explain', 'that', 'you', 'you\\re', 'from', 'the', 'future'\]  
   "\<q\>Actually, I'm a time-traveller, from about three thousand years  
    in your future.\</q\> you tell him.\b  
    \<q\>You travel in time?\</q\> he queries, \<q\>Then you must be some kind  
    of angel, a messenger of the Lord? So what message do you bear?  
    Speak!\</q\>\<.convnode solomon-angel\>"  
;  
  
++ SpecialTopic 'lie' \['lie'\]  
   "\<q\>Well, actually I'm an angel in human form.\</q\> you lie.\b  
    The king nods sagely, \<q\>Well, you certainly look like no man  
    I have ever seen.\</q\> he concurs, \<q\>So perhaps an angel is what you  
    must be. What message do you bring?\</q\>\<.convnode solomon-angel\>"  
;  
  
++ DefaultAnyTopic, StopEventList     
   \[  
    '\<q\>I think we should establish who you are before we attend to  
    anything else.\</q\> the king insists, \<q\>After all, it\\s not every day  
    that strangers suddenly emerge from my bedroom. So, what account do  
    you have to give of yourself?\</q\>\<.convstay\>',  
    '\<q\>First tell me who you are.\</q\> {the solomon/he} insists.\<.convstay\> '  
   \]  
;  
        
+ ConvNode 'solomon-angel'  
  limitSuggestions = true  
  canEndConversation(actor, reason)  
  {  
    return dontEndSolomonConversation(reason);  
  }  
;   
  
++ SpecialTopic 'warn him about his son Rehoboam'   
    \['warn' ,'king', 'solomon', 'him', 'about', 'his', 'son', 'rehoboam'\]  
   "\<q\>I've come to warn you about your son Rehoboam.\</q\> you improvise,  
    \<q\>If you don't keep the lad in check, he'll split your kingdom after  
     you've gone! Er, Thus says the Lord, because Rehoboam will chastise  
     my people with scorpions, I shall tear them out of his hands, but I  
     shall leave two tribes only for the sake of my servant David.\</q\>\b  
    \<q\>You have been sent to warn me about my son?\</q\> Solomon muses,  
    \<q\>Then I must watch him. It is true the company he keeps is not  
    everything I could wish.\</q\>\<\<hiramNode.npcGreetingMsg\>\>\<.convnode hiram\>"  
;   
  
++ SpecialTopic 'condemn his foreign wives'  
   \['condemn', 'his', 'foreign', 'wives' \]  
   "\<q\>Er - Thus says the Lord, because you have not been content with a  
    few wives, but have taken many unto yourself, and because you have allowed  
    yourself to be led after the foreign gods that are no gods that these  
    foreign women worship, I shall turn my face from you, and the kingdom  
    shall be torn in two!\</q\> you improvise.\b  
    \<q\>My wives!\</q\> the King tries to sound indignant, but looks more than  
    a little guilty.\<\<hiramNode.npcGreetingMsg\>\> \<.convnode hiram\>"  
;  
  
++ SpecialTopic 'complain about his labour policy'  
   \['complain', 'about', 'his', 'labour', 'policy'\]  
   "\<q\>You've been using too much forced labour on your building projects.\</q\>  
   you tell him, \<q\>The Lord is not pleased with this social injustice!\</q\>\b  
   \<q\>Social injustice?\</q\> Solomon echoes, \<q\>What kind of language is that?  
   Besides, I am building a Temple to the Lord, and the people are happy to  
   participate in this great work!\</q\>\<\<hiramNode.npcGreetingMsg\>\>  
   \<.convnode hiram\>"  
;  
  
+ hiramNode : ConvNode 'hiram'  
  npcGreetingMsg = "\<.p\>Solomon frowns at you thoughtfully for a moment,  
   then continues slowly, \<q\>Angel or no angel, perhaps you have been sent  
   to me to solve my problem with Hiram.\</q\> "  
  npcContinueMsg = "\<q\>Yes, Hiram,\</q\> Solomon nods, \<q\>you must be here  
   about Hiram.\</q\>"   
  limitSuggestions = true  
  canEndConversation(actor, reason)  
  {  
    return dontEndSolomonConversation(reason);  
  }  
;  
  
++ DefaultAnyTopic  
  "\<q\>Your majesty...\</q\> you begin.\b  
   \<q\>If you can solve my problem, I'll reward you whether  
   you're angel or no.\</q\> Solomon continues, evidently totally intent  
   on this topic. \<q\>My neighbour King Hiram of Tyre has donated  
   a fine bronze vessel for the temple. Unfortunately it has gone missing.  
   This is very unfortunate; Hiram was displeased with the Galilean cities  
   I gave him in payment for his contributions to my work on the Temple,  
   and he is coming to discuss the matter. If he finds that I have mislaid the  
   bronze bowl he specifically sent me to be dedicated on his behalf, he  
   will \<i\>not\</i\> be pleased - and I cannot afford to upset him. So,  
   you must recover this vessel for me.\</q\>\<\<gSetKnown(bronzeBowl)\>\>"  
;  
  
dontEndSolomonConversation(reason)  
{  
  switch(reason)  
  {  
    case endConvTravel:        
    case endConvBye:  
      "Even you realize that you don't just walk out on a king. ";  
      return nil;  
    default:  
      return nil;        
  }        
}  
  
Note how we've defined the dontEndSolomonConversation function to avoid
having to repeat the same code in three ConvNodes. In both the above
examples we've really only offered the player the illusion of choice:
the path through the ConvNodes is the same whichever response the player
chooses. It would, however, be possible to devise a branching
conversation by having the NPC switch to different ConvNodes depending
on the topic chosen. Note also the calls to
\<\<hiramNode.npcGreetingMsg\>\> in the various SpecialTopics in the
previous ConvNode; after some experimentation this proved about the only
method of getting this message displayed in the right place. The point
is to give the player some illusion of freedom in conversing with
Solomon, but to have the preoccupied king discuss Hiram and the missing
bronze bowl no matter what.  
  
Since Solomon introduces these topics into the conversation, it might be
as well to add a couple of AskTopics in Solomon's solomonTalking state
to handle them:  
  
++ AskTopic, SuggestedAskTopic @bronzeBowl  
   "\<q\>What is this bowl you've lost, exactly?\</q\> you ask.\b  
    \<q\>It's a vessel for the temple service - a sacred vessel.\</q\> the  
    king tells you, \<q\>About a cubit in diameter, and decorated with  
    rows of pomegranates.\</q\> "  
    name = 'the bronze bowl'  
;  
  
++ AskTopic, SuggestedAskTopic @tHiram  
  "\<q\>So why's this Hiram fellow so important?\</q\> you want to know.\b  
   \<q\>Tyre is a rich and powerful neighbour.\</q\> Solomon explains, \<q\>I  
    can't afford to offend them. Hiram has been most co-operative in  
    supplying material for the building of the Temple, but if he  
    thinks I've spurned his gift...\</q\>"  
    name = 'Hiram'  
;  
  
tHiram : Topic 'king hiram/tyre';  
  
