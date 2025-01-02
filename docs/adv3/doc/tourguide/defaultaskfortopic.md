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
<td style="text-align: left;"><strong>DefaultAskForTopic : <a
href="defaulttopics-overview.html">DefaultTopic</a><br />
</strong></td>
<td style="text-align: right;"><a
href="defaultgiveshowtopic.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="defaultanytopic.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A DefaultAskTopic responds to any ASK X FOR Y command when no specific
response (AskForTopic or AskAboutForTopic) has been provided for Y.  
  
A satisfactory DefaultAskForTopic is actually quite tricky to write,
since there are so many possibilities. The player might ask for a game
object, or a topic that's been defined, or for something not defined at
all in the game world, and all would match. A satisfactory response to
asking for a game object depends where the object is - held by the
player character, or held by the NPC, or held by neither but in sight,
or out of sight altogether. Any of these responses would need to be
different from asking for something abstract like ADVICE, HELP or
DIRECTIONS.  
  
One approach might be to modify the DefaultAskForTopic class to handle
the most obvious situations by overriding its handleTopic method. We can
start by determining whether what the player has asked for is a game
object, a topic, or something not defined in the game at all. If it's
either a topic or something not defined we'll leave the
DefaultAskForTopic to handle it in the normal way (either through
topicResponse or an EventList), with the option to provide different
handling if it's a defined topic. If, on the other hand, the player has
asked for an object we'll try to provide default intelligent handling
according to the location of the object, but we'll allow all the
messages to be easily changed on individual DefaultAskForTopics:  
  
modify DefaultAskForTopic  
  handleTopic(fromActor, topic)  
  {  
    /\* note the invocation \*/  
      noteInvocation(fromActor);  
   
    /\* set pronoun antecedents if possible \*/  
       setTopicPronouns(fromActor, topic);  
  
    obj = topic.getBestMatch;      
    if(obj == nil)  
      inherited(fromActor, topic);  
    else if(obj.ofKind(Thing))  
      handleThing(fromActor);  
    else if(obj.ofKind(Topic))  
      topicMsg;          
  }  
  /\* The object (if any) matched by this topic \*/  
  obj = nil  
    
  handleThing(fromActor)  
  {  
    if(obj.isIn(fromActor))  
      alreadyHaveMsg;  
    else if(obj.isIn(getActor))  
      refuseMsg;  
    else if(obj == getActor)  
      askForOtherMsg;  
    else if(obj == fromActor)  
      askForSelfMsg;  
    else if(getActor.canSee(obj))  
      pointOutMsg;  
    else  
      dontHaveMsg;          
  }  
    
  /\* The message to display if the player character asks for something he already has.   
     If the player character is carrying the asked-for object in another container,  
     the NPC points this out. \*/  
  alreadyHaveMsg = "\<q\>You already have \<\<obj.theName\>\>,\</q\> \<\<getActor.theName\>\>  
    points out\<\<obj.isDirectlyIn(gActor) ? '.' : ', \<q\>'+ obj.itIsContraction +   
    ' in that ' + obj.location.name + ' you\\re carrying.\</q\>'\>\> "  
      
  /\* The message to display if the requested actor has the object asks for but declines  
     to hand it over \*/  
         
  refuseMsg = "\<q\>No, I need \<\<obj.itObj\>\> myself.\</q\> \<\<getActor.itNom\>\> replies. "  
    
  /\* The message to display if neither the asker nor the askee has the object but  
     the askee can see where it is \*/  
    
  pointOutMsg = "\<q\>\\\<\<obj.itIsContraction\>\> just over there.\</q\> \<\<getActor.itNom\>\>  
   observes, pointing at \<\<obj.location.ofKind(Room) ? 'the ground' :  
    obj.location.theName\>\>. "  
    
  /\* The message to display if neither the asker nor the askee has the object and the  
     askee can't see it \*/  
  dontHaveMsg = "\<q\>I'm afraid I don't have \<\<obj.itObj\>\>,\</q\> \<\<getActor.itNom\>\>  
    tells you. "  
    
  /\* The message to display if the player asks for the NPC \*/  
  askForOtherMsg = "\<q\>That's me - here I am.\</q\> \<\<getActor.itNom\>\> tells you. "  
    
  /\* The message to display if the player asks for himself/herself \*/  
  askForSelfMsg = "\<q\>You're right there.\</q\> \<\<getActor.itNom\>\> points out. "  
    
    
  /\* By default we use the standard handling for a defined topic, but this  
     can be overridden if desired. \*/  
  topicMsg()  
  {  
    if(ofKind(Script)) doScript;  
    else topicResponse;  
  }   
;  
  
Then, for Sarah, we could define an eventList for dealing with non-Thing
objects, and override dontHaveMsg to provide a list of responses when
she's asked for game objects she doesn't have:  
  

    + DefaultAskForTopic, ShuffledEventList  
      [
        '<q>What do you need <<gTopicText>> for?</q> she wonders. ',
        '{The sarah/she} shakes her head. <q>Sorry, I can\'t help you there,</q>
          she says. ',
        '<q>You must be joking!</q> she laughs. ',
        '<q>No, I think not,</q> she refuses with a firm shake of the head. '  
        
      ]
      dontHaveList : ShuffledEventList
      {
       [ 
         '<q>I haven\'t got <<lobj.aName>>,</q> she protests. ',
         '<q>I\'m afraid I don\'t have <<lobj.itObj>>,</q> she tells you. ',
         '<q>What <<gTopicText>>?</q> she asks. ',
         '<q>What makes you think I\'ve got <<lobj.itObj>>?</q> she demands. '
       ]
       lobj = (lexicalParent.obj)
      }
      dontHaveMsg { dontHaveList.doScript; }
    ;

In the above definition we use gTopicText to get at whatever the player
typed after ASK FOR. We define lobj = (lexicalParent.obj) on
dontHaveList simply as a convenience (to avoid having to type
lexicalParent.obj in all the strings we list).  
  
We can now go ahead and provide DefaultAskForTopics for some of other
NPCs. We'll start with Solomon, putting this one in the solomonTalking
state:  

    ++ DefaultAskForTopic, ShuffledEventList
      [
        '<q>I\'m afraid I can\'t oblige you there,</q> he replies. ',
        '<q>I\'m renowned for my wisdom, not for <<gTopicText>>,</q> he points out. ',    
        '<q>You\'ll have to go elsewhere for that,</q> he tells you. ',
        '<q>That\'s not in my power to give - I suggest you pray to the LORD our
         God, and see if he may graciously grant your request,</q> {the solomon/he}
         tells you. ' 
      ]
      dontHaveMsg = "<q>Do I look as if I have such a thing about my person?</q>
       he demands. "
    ;

Similarly, we can put a DefaultAskForTopic in the curatorTalking
state:  


    ++ DefaultAskForTopic, ShuffledEventList    
       [
         '<q>I never give <<gTopicText>> when I\'m on duty,</q> he informs
          you pompously. ',
         '<q>It isn\'t my job to dispense <<gTopicText>>,</q> he tells you. ',
         '{The curator/he} mutters something inaudible under his breath. ',
         '<q>I should go elsewhere for that,</q> he advises you. '
       ]
       refuseMsg = "<;q>Now that I've got it, I intend to hang on to it,</q> he tells you. "
       dontHaveMsg = "<q>It\'s not mine to give,</q> he tells you flatly. "
    ;

  
  
