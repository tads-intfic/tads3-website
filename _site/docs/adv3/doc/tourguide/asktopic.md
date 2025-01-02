<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>AskTopic : <a
href="asktelltopic.htm">AskTellTopic</a><br />
</strong></td>
<td style="text-align: right;"><a
href="initiatetopic.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="telltopic.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
An AskTopic is used to respond to an ASK ABOUT command, e.g. ASK SARAH
ABOUT RING. Rather than overriding actionIobjAskAbout on the sarah
object, we can nest a number of AskTopic objects either in Sarah or in
one of Sarah's ActorStates. To avoid the response becoming repetitive,
it's often a good idea to combine an AskTopic with some kind of
[EventList](eventlist.htm) - often a
[StopEventList](stopeventlist.htm) - which gives several different
responses before finally coming to one that's repeated.  
  
One thing a player will often want to ask about an NPC is the NPC
him/herself. To handle ASK SARAH ABOUT HERSELF we don't need to define
some strange kind of herself object, we just treat it as equivalent to
ASK SARAH ABOUT SARAH. Here is how we might define an appropriate
AskTopic to put in the sarahTalking : InConversationState.  
  
++ AskTopic, StopEventList @sarah  
  \[ {: "\<q\>What brings you here?\</q\> you wonder,\b  
     \<q\>I was just taking a walk in the valley when some madman snatched my ring  
     off me and ran in here, shouting at me to come and find it if I wanted it  
     back.\</q\> she tells you, \<q\>So I followed him in. Now I  
     just want to find my ring and get out of here.\</q\>\<\<gSetKnown(diamondRing)\>\>" },  
    {: "\<q\>And you are...?\</q\> you ask.\b  
       \<q\>\<\<sarah.makeProper\>\>,\</q\> she tells you, \<q\>My name's Sarah. Pleased  
       to meet you - and I'll be even more pleased if you help me find my ring.\</q\>" },  
      '\<q\>So you you\\ve never been in these caves before?\</q\> you ask.\b  
       \<q\>No, never,\</q\> she replies, \<q\>and I wouldn\\t be here now if my ring  
        hadn\\t been stolen. Caves aren\\t really my thing, though these  
        aren\\t at all what I expected!\</q\> she nods towards the lake and the  
        ship, and a pensive expression crosses her face, \<q\>I suppose it might  
        be interesting to explore - but I really should get back.\</q\>',  
      '\<q\>What are you so anxious to get back to?\</q\> you ask.\b  
       \<q\>Fresh air and open sky, for a start!\</q\> she laughs. '                
  \]       
;  
  
Note that Sarah's first response mentions her ring. Up to that point the
player knows nothing about the ring, and so cannot refer to it in
conversation; even if a TopicEntry is defined that matches the ring, it
won't be activated until the player knows about the ring. One way the
player can get to know about the ring is by the player character
actually seeing it, but another is through being told about it as here.
In order to achieve this we use the gSetKnown(diamondRing) macro, which
actually translated into gPlayerChar.setKnowsAbout(obj). Likewise,
Sarah's second response reveals her name, so we use the custom
[makeProper](basicactors.htm) method both to make the appropriate
changes on the Sarah object and to return her proper name. Both methods
can be called using the \<\<\>\> syntax within a double-quoted string,
but we can't use a double-quoted string directly in an EventList. We
can, however, use a function pointer, and that function pointer can be
returned from an anonymous function declaration, and we can use the
shortform syntax to declare it. Thus we can use
{: "Here's a double-quoted string" } as a shorthand way of writing
new Function { "Here's a double-quoted string"; }. Note that in the
short form we *don't* put a semi-colon after the closing double-quote
mark.  
  
Since Sarah's answer clearly invites a question about the ring, this is
the next thing we should cater for:  
  
++ AskTopic, StopEventList @diamondRing  
  \[ '\<q\>What does your ring look like?\</q\> you ask.\b  
     \<q\>It\\s a plain platinum band with a solitaire diamond.\</q\> she tells you. ',  
  
    '\<q\>This ring - it\\s important to you?\</q\> you inquire.\b  
     \<q\>Oh yes!\</q\> {the sarah/she} declares, \<q\>It\\s not it\\s monetary value, so  
     much; it\\s more a sentimental thing - you can\\t replace that with insurance  
     money. Besides, I was so \<i\>incensed\</i\> when this bloke snatched it off me -  
     why should he get away with it?\</q\>',  
  
     new function {  
       "\<q\>Have you any idea where your ring might be?\</q\> you ask.\b  
       \<q\>Perhaps he dropped it back in there,\</q\> she suggests, nodding towards  
        the open door,\<q\>let's go and see.\</q\>\<.p\>";  
        sarah.setCurState(sarahGuide1);  
     },  
  
     '\<q\>And the missing ring...\</q\> you begin.\b  
      \<q\>... is a plain platinum band with a solitaire diamond.\</q\> she reminds you. '  
  \]     
;  
  
Note the new function in the event list; this finally sets Sarah off on
her brief [guided tour](guidedtourstate.htm), from which she'll arrive
back where she started having accomplished nothing.  
  
The player may also ask Sarah about herself when she starts following
the player character around, so we need to put an appropriate AskTopic
under the sarahFollowing state. We also need to cater for the
possibility that the player has not yet discovered Sarah's name:  
  
+ sarahFollowing : AccompanyingState  
 ...  
;  
  
++ AskTopic, StopEventList @sarah  
  \[ '\<q\>So, what you do when you\\re not looking for missing rings?\</q\> you ask.\b  
     \<q\>Oh, nothing important,\</q\> she replies, \<q\>I\\m just a freelance journalist.\</q\>',  
    '\<q\>Have you come up with many interesting scoops?\</q\> you wonder.\b  
     \<q\>Now \<i\>that\</i\> would be telling.\</q\> she replies mysteriously. '  
  \]   
;  
+++ AltTopic  
  "\<q\>What's your name, by the way?\</q\> you wonder.\b  
   \<q\>I'm \<\<getActor.makeProper\>\>,\</q\> she tells you with a warm smile. "  
  isActive = (!sarah.isProperName)  
;  
  
Something else the player may ask about is the ghost. It doesn't make
sense to discuss the ghost unless both Sarah and the player character
have encountered it. The library will take care of putting a ghost topic
out of reach until the player character knows about the ghost, but we
will want to add an isActive condition to make the topic unreachable
unless Sarah has also seen it. Moreover, we'll want to allow for the
fact that the way the ghost is discussed is likely to be rather
different if it's still present at the time, which we'll do by means of
an AltTopic. Again, we nest all this in the sarahFollowing state (since
in order to have seen the ghost, Sarah must be following the player
character).  
  
++ AskTopic, StopEventList @ghost  
 \[  
  '\<q\>What did you make of that ghost?\</q\> you ask.\b  
   \<q\>Scary,\</q\> she announces, \<q\>Definitely scary. But I suppose I might be  
    a bit upset if someone had just pushed my statue over - especially if I was  
    dead.\</q\>',  
   '\<q\>So you think it definitely was a ghost we saw in the churchyard?\</q\> you enquire.\b  
    \<q\>Definitely.\</q\> {the sarah/she} nods vigorously, \<q\>Didn\\t you see the way it  
    just \<i\>appeared\</i\> from that tomb - and then vanished away again?\</q\>\b',  
   '\<q\>What that ghost said - about a sacred task and a golden banana. Is that something  
    we should take seriously, do you think?\</q\> you ask.\b  
    \<q\>Something \<i\>we\</i\> should take seriously?\</q\> {the sarah/she} replies, cocking  
    one eyebrow, \<q\>It was \<i\>you\</i\> he was talking to!\</q\> Then, seeing your look  
    of despair, she gives a little laugh and continues, \<q\>Come on, then, let\\s go and  
    find that banana - we can\\t have you being haunted by a toppled statue for the  
    rest of your life!\</q\>',  
   '\<q\>So you think we\\d better take the ghost seriously.\</q\> you conclude.\b  
    \<q\>Yes,\</q\> she says, \<q\>I do.\</q\> '  
  \]   
  isActive = (getActor.hasSeen(ghost))  
;  
  
+++ AltTopic  
  "\<q\>Is that really what I think it is?\</q\> you whisper.\b  
   \<q\>Yes!\</q\> she whispers back."  
  isActive = (ghost.isIn(getActor.location))  
;  
  
We might also want to cover the case in which a sceptical Sarah has been
told about the ghost but hasn't seen it for herself (how that comes
about will be dealt with in more detail when we come look at examples of
[TellTopic](telltopic.htm)). In this case we can nest the AskTopic
inside the sarah object instead of one of her ActorStates, since we'll
want this group of replies to be used whichever ActorState Sarah happens
to be in. The player character (PC) could sail off in the ship,
encounter the ghost, then return to tell and ask Sarah about it, all
without giving Sarah the ring that makes her follow him, or he could
give Sarah the ring between encountering the ghost and trying to discuss
it with Sarah.  
  
+ AskTopic, ShuffledEventList @ghost  
    
  \[ '\<q\>You don\\t believe it was a ghost I saw, do you?\</q\> you ask.\b  
    \<q\>No - of course not!\</q\> {the sarah/she} chuckles, \<q\>I mean, a  
    ghost! They don\\t exist - every sensible person knows that!\</q\>' \]  
      
  \[ '\<q\>So you think I\\m lying about the ghost?\</q\> you ask.\b  
     \<q\>No,\</q\> she replies carefully, \<q\>But I think you must be mistaken.\</q\> ',  
    '\<q\>So, what do you think I saw?\</q\> you demand.\b  
     \<q\>A trick of the light maybe?\</q\> she suggests, \<q\>Or maybe you ate  
     too much green cheese last night? Or graveyards bring out the over-  
     active imagination in you?\</q\>',  
     '\<q\>If it wasn\\t a ghost I saw, who or what was it told me about  
     the golden banana and the cabal?\</q\> you ask.\b  
     \<q\>A ghost that burbles about bananas and cabals?\</q\> she retorts,  
     \<q\>Oh come on! You\\re just having me on!\</q\>',  
     '\<q\>I\\m sure I did see a ghost, you know.\</q\> you insist, \<q\>Do I  
     strike you as the sort of person who imagines or invents things?\</q\>\b  
      \<q\>Not normally, perhaps.\</q\> {the sarah/she} concedes, \<q\>Perhaps  
     someone was playing a trick on you? A holographic projection? A prankster  
     in a sheet? This whole place seems a bit tricky to me!\</q\>'   
   \]  
   isActive = (getActor.knowsAbout(ghost))  
;  
  
Once again we apply an isActive condition; this discussion can only take
place if Sarah knows about the ghost (because the player character has
told her of his encounter with it). Note that if Sarah has actually seen
the ghost for herself, the responses we defined previously for that
eventuality will automatically override those defined just above if
Sarah has seen the ghost, since a TopicEntry (even if it's only a
DefaultTopic) in the current ActorState always takes precedence over one
in the Actor.  
  
So far our AskTopics have all concerned single game objects, but we can
also create topics which can be asked (or told) about. For example, we
might want to ask the curator about the museum, so we could create a
suitable topic object:  
  
tMuseum : Topic 'museum';  
  
Furthermore, we might want to make asking the curator about the museum
and asking him about himself effectively the same. So instead of
defining an AskTopic with a single object referenced by @ in its
template, we can create it with a list of objects the AskTopic will
match:  
  
++ AskTopic, StopEventList \[curator, tMuseum\]  
   \[ {: "\<q\>Are you in charge here?\</q\> you ask.\b  
        \<q\>That's right, I'm \<\<curator.makeProper\>\>, the curator of this  
        museum.\</q\> he replies with an evident air of self-importance. " },  
     '\<q\>Have you been curator here long?\</q\> you wonder.\b  
      \<q\>Only for the last twenty years.\</q\> he replies. ',  
     '\<q\>Do you get many visitors to this museum?\</q\> you wonder.\b  
      \<q\>One or two.\</q\> he replies, \<q\>After all, it\\s not as if many  
      people live round here.\</q\>',       
     '\<q\>Are you interested in acquiring more exhibits?\</q\> you enquire.\b  
      \<q\>Naturlich - if they are of the right sort.\</q\> he tells you. '  
   \]  
;  
  
Clearly, this AskTopic must be nested inside the curatorTalking state,
not inside the tMuseum topic object, so be careful where you position it
in your code! The same applies to the following:  
  
++ AskTopic, StopEventList @tBenefactor  
  \[  
    '\<q\>Who are the benefactors?\</q\> you ask.\b  
     \<q\>Why, people who have been especially generous to the museum,  
      of course.\</q\> {the curator/he} tells you, in the tone of one  
      explaining the absolutely blindingly obvious. ',  
        
    '\<q\>So how does one become a benefactor?\</q\> you wonder.\b  
     \<q\>Well,\</q\> he says, \<q\>one way would be to procure our most  
      wanted acquisition of the month for us.\</q\>',  
        
    '\<q\>So if I wanted to become a benefactor...\</q\> you begin,\b  
     \<q\>Just bring us the exhibit we are most keen to acquire  
      just now.\</q\> {the curator/he} reminds you, \<q\>We publish  
      the details on our monthly flyer.\</q\>'  
  \]  
  isActive = gRevealed('benefactors')  
;  
  
For which we also need to define:  
  
tBenefactor : Topic 'benefactor/benefactors';  
