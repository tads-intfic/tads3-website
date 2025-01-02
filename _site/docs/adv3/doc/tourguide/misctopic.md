<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>MiscTopic : <a
href="topicentry.htm">TopicEntry</a><br />
</strong></td>
<td style="text-align: right;"><a
href="hellogoodbyetopic.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="topicgroup.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
MiscTopic is the parent class of TopicEntry types such as
[ByeTopic](byetopic.htm), [HelloTopic](hellotopic.htm),
[YesTopic](yestopic.htm) and [NoTopic](notopic.htm) that respond to
simple command such as HELLO, BYE, YES and NO without referring to any
further object or topic (you don't HELLO SARAH ABOUT FISH as you might
ASK SARAH ABOUT FISH, for example).  
  
Although you'll never have occasion to use MiscTopic directly in the
sense of creating MiscTopics in your own game, you can use it as the
basis of creating subclasses to extend the conversational commands
available in your game. For example, suppose you want to create a
PraiseTopic class that provides a response to commands like PRAISE SARAH
or PAY SARAH A COMPLIMENT; there are several steps involved in getting
this to work, but it's perfectly feasible to do.  
  
First, simply define PraiseTopic as subclass of MiscTopic:  
  
class PraiseTopic: MiscTopic  
     includeInList = \[&miscTopics\]  
     matchList = \[praiseTopicObj\]  
;  
  
praiseTopicObj : object;  
  
(Here, praiseTopicObj is simply a dummy object that PraiseTopic will
always match, in default of it's having a Thing or Topic to match).  
  
Next define the action and the vocabulary for your new conversation
verb:  
  
DefineTAction(Praise)  
;  
  
VerbRule(Praise)  
  (('praise' \| 'flatter' \| 'compliment') singleDobj)  
  \| (('pay' \| 'offer') singleDobj ('a' \|) 'compliment')  
  : PraiseAction  
  verbPhrase = 'praise/praising (whom)'  
;  
  
Then provide default handling for this verb on inanimate objects:  
  
modify Thing  
  dobjFor(Praise)  
  {  
    verify() { illogical('Praising {a dobj/him} is a waste of breath. '); }  
  }  
;  
  
The slightly more complicated part is defining the handling of the new
verb on the Actor class, but this will always follow the same pattern:  
  
modify Actor  
  dobjFor(Praise)  
  {  
       preCond = \[canTalkToObj\]  
       verify()  
        {  
             /\* it is vain to praise oneself \*/  
             if (gActor == self)  
                 illogical('Vanity! Vanity! ');  
         }  
           
         action()  
         {  
             /\* note that the issuer is targeting us with conversation \*/  
             gActor.noteConversation(self);  
   
             /\* let the state object handle it \*/  
             curState.handleConversation(gActor, praiseTopicObj, praiseConvType);  
         }  
     }  
  
  defaultPraiseResponse(actor)  
  {  
    "\\\<\<theName\>\> appears totally unmoved by your flattery. ";  
  }  
;  
  
The new defaultPraiseResponse method we've just defined here does what
it says it does: it handles any PRAISE commands directed to the actor if
they're not dealt with by a PraiseTopic or DefaultAnyTopic. You may be
wondering, however, how the game *knows* to use this newly-defined
method in such a case. You may be wondering also where the
praiseConvType object referred to in the action handler comes from. We
can now answer both questions together by defining the praiseConvType
object, which is the final piece of the mechanism we need to put in
place:  
  
praiseConvType : ConvType  
  unknownMsgType = 'No-one\\s listening. '  
  topicListProp = &miscTopics  
  defaultResponseProp = &defaultPraiseResponse  
  defaultResponse(db, other, topic)  
    { db.defaultPraiseResponse(other); }  
;  
  
Now we can put our new PraiseTopic to work. We can start by locating the
following in sarah's sarahTalking : InConversationState:  
  
++ PraiseTopic, ShuffledEventList  
  \[  
   '\<q\>Has anyone told you what an attractive woman you are?\</q\> you enquire.\b  
    \<q\>I\\m quite immune to such flattery.\</q\> she informs you. ',  
   '\<q\>You strike me as a brave and resourceful woman.\</q\> you remark.\b  
    \<q\>What \<i\>can\</i\> you be basing that opinion on?\</q\> she complains -  
    though she does not seem entirely displeased. '  
  \]  
  \[  
    '\<q\>I think I could really get to like you.\</q\> you tell her.\b  
     \<q\>I\\m still reserving judgment on you.\</q\> she replies cautiously. ',  
    '\<q\>You\\re a good woman - you know that?\</q\> you ask.\b  
     \<q\>Less talk, more action.\</q\> she retorts, \<q\>It\\s your help  
      I need - not your praise.\</q\> ',  
    '\<q\>You know, I do feel you\\re basically a kind and decent person.\</q\>  
     you tell her.\b  
     \<q\>You\\re too kind.\</q\> she responds dryly. ',  
    '\<q\>It was really very brave of you to dash in here after that thief  
     who stole your ring.\</q\> you remark, \<q\>I\\m really very impressed!\</q\>\b  
     \<q\>Brave? Or just daft?\</q\> she laughs, \<q\>I was so incensed I didn\\t  
      stop to think about being \<i\>brave\</i\>.\</q\>'     
  \]      
  isActive = (getActor.isProperName)  
;  
  
The isActive condition here ensures that the player at least gets to
know Sarah's name (and has thus asked her a couple of questions about
her) before he can start heaping praise on her. We'll enforce the same
condition we put on the PraiseTopic we'll locate in her sarahFollowing
state:  
  
++ PraiseTopic, StopEventList  
  \[  
    '\<q\>It\\s really very good of you to come with me.\</q\> you  
     tell her.\b  
     \<q\>Not at all,\</q\> she replies, \<q\>I\\m just hoping you are  
     going to find the way out of here.\</q\>',  
    '\<q\>I\\m really glad you\\re with me - whatever your reasons.\</q\>  
     you remark, \<q\>Quite frankly, I\\m glad of your company.\</q\>\b   
     \<q\>Me too,\</q\> she admits.',  
    '\<q\>I do like you, you know.\</q\> you tell her.\b  
     \<q\>Now, don\\t go all sentimental on me!\</q\> she complains, though  
     there\\s a warm twinkle in her eye as she says it.',  
    '\<q\>I\\m afraid I can\\t help finding you very attractive.\</q\> you  
     confess.\b  
     \<q\>I daresay neither of us can help that - what you find attractive,  
     I mean.\</q\> she replies matter-of-factly. ',  
    '\<q\>I really do appreciate having you around.\</q\> you tell her.\b  
     \<q\>So you keep saying,\</q\> she observes. '  
  \]  
  isActive = (getActor.isProperName)  
;  
  
This is likely to be more interesting if Sarah's relationship with the
player character advances so that as circumstances change, so do her
responses to his compliments. Perhaps the shared experience of
encountering the ghost might be one such event, so we could add:  
  
+++ AltTopic, StopEventList  
  \[  
    '\<q\>You\\ve been pretty brave about that ghost - after all it  
     was scary!\</q\> you remark.\b  
     \<q\>It was,\</q\> she agrees, \<q\>and you\\ve been pretty brave too!\</q\>',  
       
    '\<q\>You know, I really \<i\>am\</i\> glad you\\re with me.\</q\> you tell her.\b  
     \<q\>Me too!\</q\> she agrees warmly, giving your arm a little squeeze. '   
  \]  
  isActive = (getActor.hasSeen(ghost))  
;  
  
Obviously, this could be taken a lot further, but enough has been said
to demonstrate the principle of creating a new kind of MiscTopic. One
problem remains: how is the player to know that a new kind of
conversational command (PRAISE X) is available? We'll solve this problem
shortly by defining a new kind of [SuggestedTopic](suggestedtopic.htm)
to match.  
  
