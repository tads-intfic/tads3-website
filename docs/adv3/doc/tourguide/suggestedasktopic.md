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
<td style="text-align: left;"><strong>SuggestedAskTopic : <a
href="suggestedtopic.html">SuggestedTopic</a><br />
</strong></td>
<td style="text-align: right;"><a
href="suggestedtopic.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="suggestedtelltopic.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A SuggestedAskTopic is the particular type of
[SuggestedTopic](suggestedtopic.html) that prompts the player to Ask
About such-and-such a thing.  
  
For example, in addition to making the diamond ring a suggested topic
for Sarah, we could do the same for asking about herself:  
  
++ AskTopic, **SuggestedAskTopic**, StopEventList @sarah  
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
  **name = 'herself'**  
;  
  
(I'm assuming here that we've adopted my suggested modification to
[SuggestedTopic](suggestedtopic.html), so that we don't need to set
timesToSuggest by hand).  
  
When the player character is conversing with Solomon, there's a couple
of interesting objects he'll probably want to ask about anyway, but as
we haven't provided any responses for them as yet, they'll furnish good
examples of further SuggestedAskTopics. In both case they should be
located inside the solomonTalking state. First the carbuncle:  
  
++ AskTellTopic, SuggestedAskTopic, StopEventList @carbuncle  
  \[  
    '\<q\>That\\s a very fine looking carbuncle you have there.\</q\> you remark.\b  
     \<q\>Indeed it is,\</q\> {the solomon/he} concurs, \<q\>I\\m told there\\s not  
     another like it under the sun.\</q\>',  
  
    '\<q\>How did you come by that carbuncle?\</q\> you ask.\b  
     \<q\>It was one of the gifts the Queen of Sheba gave me   
     when she came to be dazzled by my great wisdom.\</q\> he tells you.\b',      
  
    '\<q\>That gem must be worth a fortune.\</q\> you observe.\b  
     \<q\>No doubt.\</q\> the king concurs dryly. '        
  \]  
  name = 'the carbuncle'  
  isActive = (!carbuncle.moved)  
;  
  
Note that we make this a SuggestedAskTopic although it's also an
AskTellTopic; the player could TELL SOLOMON ABOUT CARBUNCLE as well as
ASK SOLOMON ABOUT CARBUNCLE, but we only suggest one or the other (in
this case ASK ABOUT). Note also that we provide an isActive condition
that makes the topic (and hence the corresponding suggestion) active
only until the carbuncle has been moved.  
  
We should also add an entry to deal with the Baaras Root:  
  
++ AskTopic, SuggestedAskTopic, StopEventList @baarasRoot  
  \[  
     '\<q\>What is that curious root you \<\<baarasRoot.moved ? 'had' :  
     'have'\>\> there?\</q\> you inquire.\b  
     \<q\>It grows in a ravine near a place called Baaras, hence we call  
     it the Baaras-root - though the heathen call it Mandragora.\</q\> he  
     tells you, \<q\>It has many interesting properties.\</q\>' ,  
    '\<q\>Tell me more about the properties of this Baaras-root,\</q\> you   
     request.\b  
     \<q\>Well,\</q\> {the solomon/he} explains, \<q\>when growing, it emits  
     a bright light towards evening. At any time of day it proves hard  
     to pick, for it shrinks up to elude the grasp of anyone who approaches  
     with the intention of plucking it from the ground - although it can  
     be made to sit still by pouring on it, er, certain secretions of the  
     human body. Even then it is highly dangerous to obtain.\</q\>',  
    '\<q\>So why is the Baaras root so dangerous to pick?\</q\> you wonder.\b  
     \<q\>Why - because unless you manage to carry off the root, suspending it from  
      your hand, the mere touch proves fatal.\</q\> he tells you, \<q\>That\\s  
      why we normally use a dog - if you tie a dog to the root and walk  
      away, the dog will try to run after you, pulling the root from the  
      ground. It\\s instant death for the dog, of course, but it\\s  
      then perfectly safe to pick up the root and carry it away.\</q\>',  
    '\<q\>So what on earth makes the Baaras root worth all the bother  
      of plucking it up from the ground? Especially since it seems so  
      deadly!\</q\> you wonder.\b  
     \<q\>Ah. Its value is that it is also fatal to demons.\</q\> {the solomon/he}  
     tells you. \<q\>It\\s one of the most effective counters to demons I know.\</q\>',   
    '\<q\>So the Baaras root is good against demons?\</q\> you ask.\b  
     \<q\>Highly effective.\</q\> he assures you, \<q\>Nothing better.\</q\>'   
  \]  
  name = 'the root'  
;  
  
In case you're wondering where I obtained these bizarre details, they
come (more or less) straight from Josephus, *Jewish War*, 7.180-85.
Although Josephus is there talking about first-century CE Palestine, he
elsewhere notes (*Jewish Antiquities* 8.45-49) that God had granted
Solomon particular expertise in the art of expelling demons, and that
he, Josephus, had witnessed a fellow Jew successfully employing the
incantations and the *root* prescribed by Solomon in an exorcism. It's a
fair guess, then, that Josephus envisages Solomon prescribing the Baaras
root for use against demons (which, of course, is not at all the same as
supposing that Solomon actually ever did anything of the sort - but once
again we are depicting the Solomon of legend here).  
