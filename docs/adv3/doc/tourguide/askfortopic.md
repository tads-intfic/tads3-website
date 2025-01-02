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
<td style="text-align: left;"><strong>AskForTopic : <a
href="asktelltopic.html">AskTellTopic</a><br />
</strong></td>
<td style="text-align: right;"><a href="asktelltopic.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="askaboutfortopic.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
Just as an AskTopic deals with commands like ASK FRED ABOUT BEER so an
AskForTopic handles commands like ASK FRED FOR BEER. The programming
principles are just the same - but the game logic may be somewhat more
complex. For one thing, as well as asking for game objects like the ring
or a coin, the player could try asking NPCs for abstract things like
advice or directions. For another, there are nearly always more
variables to consider. If I ASK SARAH FOR ADVICE what advice she can
relevantly give would very much depend on the state of play at the time,
and might be very difficult to implement decently across the whole game.
If I ASK SARAH FOR RING then how she responds will depend, not only on
her willingness or otherwise to part with the ring, but also on whether
she has the ring, or whether the PC has the ring, and maybe other things
besides. It's up to us, as the game author, to handle all this.  
  
Sarah's ring may be a good example to start with, since it's relatively
straightforward. We know that once Sarah has got her ring she switches
into the sarahFollowing state, and we'll assume that she isn't too keen
to part with it thereafter. Therefore, if we put an AskForTopic
@diamondRing in sarahFollowing, we can safely assume that Sarah does
actually have the ring.  
  
The reason the player character may want to request the ring back from
Sarah is that the diamond is needed to cut open a couple of glass
objects, the glass jar containing the blue crystal and the display case
containing the golden banana. The PC may or may not have cut open the
first of these before he hands the ring over to Sarah. If he then
decides he needs the diamond to cut open the jar, he may try asking
Sarah for the ring back. Sarah won't give it - but there's no reason why
Sarah shouldn't do the cutting herself. So we'll assume that if the
glass jar is accessible and not yet cut open when the PC asks Sarah for
her ring, he'll explain that he needs it to cut open the jar and she
duly obliges by doing it herself:  
  
++ AskForTopic @diamondRing  
   "\<q\>Can I borrow your ring a moment, please?\</q\> you ask.\b  
   \<q\>Whatever for, I've only just got it back!\</q\> {the sarah/she}  
   complains. "  
;  
  
+++ AltTopic   
   topicResponse  
   {  
     "\<q\>Can I borrow your diamond ring a moment, please?\</q\> you ask.  
     \<q\>I need something hard to cut this glass jar open.\</q\>\b  
     \<q\>Here, let me.\</q\> {the sarah/she} replies, taking the jar. ";  
     glassJar.moveInto(getActor);  
     newActorAction(getActor, CutWith, glassJar, diamondRing);  
     "\<q\>Here you are then,\</q\> she declares, handing the now  
     opened glass jar to you. ";  
     glassJar.moveInto(gPlayerChar);  
   }  
   isActive = (getActor.canTouch(glassJar) && !glassJar.isOpen)  
;  
  
We'll handle cutting open the glass display case later, when we come to
look at [ConvNode](convnode.html). For now we'll proceed with a different
example, the root and the carbuncle we need from Solomon. First we need
to make Solomon prevent the PC from taking either the root or the
carbuncle unless he's given permission for them to be taken. We'll add a
gifted property to both the root and the carbuncle (add a line saying
gifted = nil to the definition of both carbuncle and baarasRoot) and
then override Solomon's beforeAction() method (we override it on solomon
rather than one of his ActorStates since he could be in any of his
ActorStates when the PC attempts to take the root or the carbuncle):  
  
solomon : Person 'middle-aged middle aged man' 'middle-aged man' @solomonChair  
  "He's quite good-looking in a middle-eastern sort of way, with long curly  
   black hair that's just starting to go grey, and a neatly kept beard. He's  
   dressed in a purple cloak. "  
  isHim = true      
  posture = sitting  
  properName = 'King Solomon'  
  globalParamName = 'solomon'  
  **beforeAction()  
  {  
    inherited;  
    if(gActionIs(Take) \|\| gActionIs(TakeFrom))  
    {  
      if(gDobj is in (baarasRoot, carbuncle) && !gDobj.gifted)  
      {  
        "As you reach out to take {the dobj/him}, {the solomon/he} calmly  
        but firmly interrupts you.  
        \<q\>You do not take a king's property without his permission.\</q\>  
        he tells you sternly. ";  
        exit;  
      }  
      if(gDobj == bronzeBowl && gRevealed('bowl-returned'))  
      {  
        "Before you can touch the bowl, {the solomon/he} remarks, \<q\>Since  
         I've offered to reward you for returning that bowl, I think you  
         had better leave it alone.\</q\> ";  
         exit;  
      }  
    }  
  }**  
;  
  
For both the root and the carbuncle, we want an AskForTopic that causes
the request to be denied until the PC has given Solomon his bowl back,
and regarded as superfluous once the root or carbuncle has been taken.
Here's how we might do it for the root (nesting the AskForTopic inside
the solomonTalking state):  
  
++ AskForTopic @baarasRoot  
   "\<q\>May I have that strange looking root?\</q\> you ask.\b  
    \<q\>No, I'm studying it.\</q\> he replies. "  
;  
  
+++ AltTopic  
  topicResponse  
  {  
   "\<q\>May I have that root you've got there?\</q\> you ask.\b  
    \<q\>Help yourself.\</q\> he replies. ";  
    baarasRoot.gifted = true;  
  }  
  isActive = gRevealed('bowl-returned')    
;  
  
+++ AltTopic     
   "\<q\>May I take that root?\</q\> you request.\b  
    \<q\>You already have.\</q\> {the solomon/he} points out. "  
  isActive = (baarasRoot.moved)  
;  
  
This is fine, except that we have to repeat almost exactly the same
thing for the carbuncle. This may not be too bad here, but for multiple
objects it could become tedious, so it may be worth exploring an
alternative approach. For this we need to abandon the nice neat
declarative syntax of AltTopics and revert to the bad old ways of if and
else statements:  
  
/\* Approach 2 - messier but more concise for multiple objects: \*/  
  
++ AskForTopic \[baarasRoot, carbuncle\]  
  handleTopic(fromActor, topic)  
  {  
    /\* An AskForTopic matches a ResolvedTopic - to get back to the object  
       match we need to use getBestMatch \*/  
         
     local obj = topic.getBestMatch();  
       
     /\* Set a message parameter for convenience \*/  
     gMessageParams(obj);  
       
     /\* Start with a question common to all situations \*/  
     "\<q\>May I take {the obj/him}?\</q\> you ask.\b";  
       
     /\* Handle Solomon's response according to the state of play \*/  
     if(obj.moved)  
       "\<q\>You already have.\</q\> {the solomon/he} points out. ";  
     else if(gRevealed('bowl-returned'))  
     {  
       "\<q\>Help yourself,\</q\> {the solomon/he} offers with an expansive  
        wave of the hand, \<q\>Is there anything else you'd like?\</q\> ";  
        obj.gifted = true;  
     }  
     else  
       "\<q\>No, I'm studying it.\</q\> he replies. ";       
  }  
;  
  
It is less immediately obvious how this works, but it's not too bad, and
certainly more compact that writing out a second AskForTopic with its
associated pair of AltTopics, and has the merit that it could easily be
extended to a large number of objects simply by adding them to the match
list at the start of the object declaration. One downside, though, is
that the exchange between Solomon and the PC is rigidly stereotyped.  
  
A third possibility is to define a special class that handles requests
for rewards from Solomon, allow some variety and customization within
the class, and then instantiate the class for each item we want it to
handle:  
  
/\* Approach 3 - perhaps the best compromise for several similar cases \*/  
  
class AskForRewardTopic : AskForTopic  
   topicResponse  
   {  
      /\* We can use the matchObj property to get at the object this topic matches,  
         provided we always define it to match one and only one \*/  
           
      /\* First we get the player character to ask for the object \*/  
        requestQuestions.obj = matchObj;  
        requestQuestions.doScript;  
        
      /\* If the matchObj has moved the player character has already taken it \*/  
           
       if(matchObj.moved)  
         "\<q\>You already have.\</q\> {the solomon/he} points out. ";  
         
      /\* Otherwise, if the bowl has been returned, grant the request \*/  
       else if(gRevealed('bowl-returned'))   
       {  
         grantRequest;  
         matchObj.gifted = true;  
       }  
      /\* Otherwise, refuse the request \*/   
       else  
         refuseRequest;  
           
   }  
   requestQuestions : ShuffledEventList  
   {  
    \[  
       '\<q\>May I take \<\<obj.theName \>\>, please?\</q\> you ask.\b' ,  
       '\<q\>Could I have \<\<obj.theName\>\>?\</q\> you request.\b' ,  
       '\<q\>I\\d like to take \<\<obj.theName\>\>, is that okay?\</q\> you ask.\b',  
       '\<q\>That \<\<obj.name\>\> looks interesting, may I take it?\</q\> you ask.\b'         
    \]      
    obj = nil  
   }  
   refuseRequest = "\<q\>No, I'm studying it.\</q\> he replies.\<.p\>"  
   grantRequest = "\<q\>Help yourself,\</q\> {the solomon/he} offers with an expansive  
        wave of the hand, \<q\>Is there anything else you'd like?\</q\>\<.p\>"  
;  
  
/\* Then add an AskForRewardTopic for each of the possible rewards: \*/  
  
++ rootTopic : AskForRewardTopic @baarasRoot      
;  
  
++ AskForRewardTopic @carbuncle     
   refuseRequest = "\<q\>No, it was a personal gift from the Queen of Sheba  
    and I see no reason why you should have it.\</q\> he replies.\<.p\>"  
   grantRequest = "\<q\>Very well, take it,\</q\> {the solomon/he} sighs, \<q\>It\\s  
    only a pretty bauble, after all.\</q\>\<.p\>"   
;  
  
  
