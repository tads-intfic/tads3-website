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
<td style="text-align: left;"><strong>DefaultGiveShowTopic : <a
href="defaulttopics-overview.html">DefaultTopic</a><br />
</strong></td>
<td style="text-align: right;"><a
href="defaultshowtopic.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="defaultaskfortopic.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A DefaultGiveShowTopic combines the functionality of a DefaultGiveTopic
and a DefaultShowTopic by responding to any GIVE X TO Y or SHOW X TO Y
command for which a specific GiveTopic, ShowTopic, or GiveShowTopic has
not been provided. The further remarks relating to DefaultGiveTopic and
DefaultShowTopic also apply here; the DefaultGiveShowTopic will be
triggered by SHOW X TO Y provided X is in scope, but GIVE X TO Y only
if, in addition, X is portable and the player character can take it (or
is already holding it).  
  
With these factors in mind, we can define a DefaultGiveShowTopic that
should work reasonably well for the curator (put it under the curator
talking state). Once again we make liberal use of the rand() function to
provide some measure of apparent variety to the curator's response:  
  
++ DefaultGiveShowTopic  
   "\<q\>\<\<rand('I\\m sorry, ', 'I\\m afraid ', '', 'I regret
')\>\>I don't have time   
   to \<\<rand ('be bothered with', 'look at','study', 'inspect')\>\> {that dobj/him}   
   \<\<rand('right now', 'at the moment', 'today')\>\>,\</q\> he tells you."  
;  
  
An alternative way of writing a variant of this employing syntax that
became available in TADS 3.1.0 might be;  

    ++ DefaultGiveShowTopic
       "<q><<one of>>I'm sorry, <<or>>I'm afraid <<or>><<or>>I regret <<at random>>I don't have time 
       to <<one of>>be bothered with<<or>>look at<<or>>study<<or>>inspect<<shuffled>> {that dobj/him} 
       <<one of>>right now<<or>>at the moment<<or>>today<<cycling>>,</q> he tells you."
    ;

  
  
We'll assume that Solomon, an avid collector of wisdom on all topics, is
fascinated by anything he's shown (put this in the solomonTalking
state):  
  
++ DefaultGiveShowTopic, ShuffledEventList     
   \[  
     '\<q\>Fascinating!\</q\> {the solomon/he} declares. ',  
     '\<q\>So that\\s {a dobj/he}, how interesting!\</q\> he remarks. ',  
     '{The solomon/he} examines {the dobj/him} carefully, \<q\>This is  
       how one\\s wisdom grows.\</q\> he tells you, \<q\>By careful  
       observation of all things under the sun.\</q\> ',         
     '\<q\>Thank you,\</q\> he says, looking at {it dobj/him} carefully,  
      \<q\>The more I observe, the wiser I become.\</q\> '  
   \]  
;  
  
