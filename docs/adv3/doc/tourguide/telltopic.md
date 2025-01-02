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
<td style="text-align: left;"><strong>TellTopic : <a
href="asktelltopic.html">AskTellTopic</a><br />
</strong></td>
<td style="text-align: right;"><a href="asktopic.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="asktelltopic.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A TellTopic is just like an AskTopic, except that it handle TELL SOMEONE
ABOUT SOMETHING instead of ASK SOMEONE ABOUT SOMETHING. You'll recall
that when we were defining AskTopics for Sarah, we allowed the
possibility that she might learn of the ghost either by seeing it
herself, or by the player character reporting seeing it. So the obvious
example of a TellTopic would be to allow the player character to report
seeing the ghost to Sarah, who'll be pretty sceptical about it:  
  
+ TellTopic, StopEventList @ghost  
  \[  
    /\* In the first response we call the appropriate method to note that  
       Sarah has now heard about the ghost \*/  
         
    {: "\<q\>Do you know what? I saw a ghost! Over in the graveyard on the west shore  
     of the lake!\</q\> you tell her. \<\<sarah.setKnowsAbout(ghost)\>\>\b  
     \<q\>A ghost!\</q\> she cries derisively, \<q\>Oh, come on!\</q\>" },  
       
    /\* Likewise in the second response we note that Sarah has now heard of the  
       golden banana \*/  
          
    {: "\<q\>I really did see a ghost.\</q\> you insist, \<q\>After I pushed its statue  
     over. It wants me to find a golden banana before the cabal gets hold of  
     it!\</q\> \<\<sarah.setKnowsAbout(goldenBanana)\>\>\b  
     \<q\>What have you been drinking?\</q\> {the sarah/she} enquires, \<q\>Ghost? Golden  
     banana? Cabal?\</q\> she shakes her head and laughs. " },  
       
    '\<q\>I \<i\>did\</i\> see a ghost,\</q\> you repeat.\b  
     \<q\>Yes, yes, and I suppose it was rattling its chains and moaning in  
     a hollow voice.\</q\> she mocks.',  
       
    '\<q\>I\\m absolutely positive I saw a ghost.\</q\> you insist.\b     
     In reply, she merely looks at you and shakes her head in mock despair. '  
  \]  
;  
  
  /\* If Sarah has actually seen the ghost her response will be rather different \*/  
  
++ AltTopic  
  "\<q\>I saw a ghost...\</q\> you begin.\b  
   \<q\>I know, I was there - remember?\</q\> she replies. "  
  isActive = (getActor.hasSeen(ghost))  
;  
     
  /\* Finally, and overridingly, the conversation will go rather different if the  
     ghost is actually present \*/  
       
++ AltTopic  
  "\<q\>That's a ghost, isn\\t it?\</q\> you remark, pointing at the phantom.\b  
   \<q\>A ghost, yes, definitely a ghost.\</q\> {the sarah/she} concurs in a   
   very small voice. "  
   isActive = (ghost.isIn(getActor.location))  
;  
  
Once again we nest this TellTopic directly in Sarah, since it could come
up either before or after the player character has handed over the ring,
and hence before or after Sarah has started following the player
character around. Note that when we get to the AltTopics we list them in
reverse order of precedence, that is the lower down the list the
AltTopic comes the higher will be its precedence if its isActive
property is true.  
  
  
