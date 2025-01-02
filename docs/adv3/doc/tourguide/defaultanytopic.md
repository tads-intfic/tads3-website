<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>DefaultAnyTopic : <a
href="defaulttopics-overview.htm">DefaultTopic</a><br />
</strong></td>
<td style="text-align: right;"><a
href="defaultaskfortopic.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="suggestedtopic.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
A DefaultAnyTopic will respond to any conversational command at all
(ASK, TELL, GIVE or SHOW) that is not otherwise provided for, subject to
the scope restrictions on Give and Show that apply to DefaultGiveTopic,
DefaultShowTopic, and DefaultGiveShowTopic noted above.  
  
Since there is no way of knowing what the player typed to trigger a
DefaultAnyTopic, this catch-all device must be used with caution. The
situation where it's most useful is where an NPC is so intent on its own
agenda that it's not really responding to what the player character (PC)
has just said or done. This can occur in two rather different
situations: the first is where the NPC is effectively ignoring the PC,
or at least the specifics of what the PC is saying or doing (e.g.
because the NPC is drunk or insane or preoccupied with some other
activity, so its responses can't really be expected to connect with what
the PC has just said); the second is where the NPC is pressing the PC
for an answer and isn't going to be put off by an attempt to change the
subject. The second of these possibilities generally occurs in
Conversation Nodes, and we'll come to it then. The first might be
illustrated by the demons NPC; being demons one might expect them to
give some irrational and mischievous responses:  
  
++ DefaultAnyTopic, ShuffledEventList  
     
   \[  
     '\<q\>Look at him! Look at him!\</q\> a pair of the demons squeal,  
      \<q\>Shall we tear him? Shall we eat him?\</q\>',  
     'The demons burst into hoots of demonic laughter. ',  
     '\<q\>You stupid mortal!\</q\> one of demons screeches at you, \<q\>You  
      understand nothing! Nothing at all!\</q\>',  
     '\<q\>You don\\t thcare uth!\</q\> a lisping demon tells you, \<q\>Thtupid  
      little human!\</q\>',  
     '\<q\>Despair and die! Despair and die!\</q\> one of them cries at you,  
      \<q\>I am Anthrapax, stealer of souls!\</q\>\b  
      \<q\>And I am Princifax, leader of ghouls!\</q\> hisses a second.\b  
      \<q\>And I, most fearsome of all, am Incometax, bleeder of fools!\</q\>   
       declares a third.\b',  
     '\<q\>Have you come here to die?\</q\> one of them asks, poking you in  
      the ribs, \<q\>Death is good for humans; it get rid of that futility  
      you call life. Just say the word and we\\ll relieve you of it. Won\\t  
      we?\</q\>\b  
      \<q\>Yes! yes!\</q\> they all cry (apart from the lisping demon who of course  
       cries \<q\>Yeth! Yeth!\</q\>)',  
     '\<q\>You don\\t like us much, do you?\</q\> sneers the ugliest of the demons,  
      \<q\>Don\\t you know it\\s not politically correct to be prejudiced against  
       demons?\</q\>\b  
      \<q\>Not legal either.\</q\> one of his fellows agrees. \<q\>We demons have  
       rights.\</q\>\b  
      \<q\>So mind your manners or we\\ll sue you!\</q\> warns another, \<q\>Plenty  
       of lawyers in hell, you know!\</q\>'         
   \]  
     
   \[  
     'The demons howl at you derisively. ',  
     'One of the demons gives you a sharp jab in the ribs. ',  
     '\<q\>A human a day keeps the doctor away!\</q\> one of them chants, eyeing  
      you hungrily. ',  
     '\<q\>The only good human is a dead human.\</q\> Anthrapax opines. ',  
     '\<q\>Get lost, foolish mortal!\</q\> another demon snarls. ',  
     '\<q\>You\\re powerless here, pathetic little mortal.\</q\> Princifax tells you. ',  
     '\<q\>He doesn\\t know when he\\s beaten!\</q\> one of the demons giggles from  
      the back of the pack. ',  
     '\<q\>Thtupid little human, thtupid little human!\</q\> says the lisping demon' ,  
     '\<q\>We hate \<i\>all\</i\> humans,\</q\> Incometax informs you, \<q\>But \<i\>especially\</i\>  
      you - you are the most pathetic and degraded specimen of a superfluous and  
      misbegotten species!\</q\> ',  
     '\<q\>Turn back, foolish mortal!\</q\> they chorus, \<q\>We won\\t be patient with  
      you much longer!\</q\> '         
   \]  
     
;  
