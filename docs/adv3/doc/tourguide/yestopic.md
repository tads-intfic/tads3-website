<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>YesTopic : <a
href="misctopic.htm">MiscTopic</a><br />
</strong></td>
<td style="text-align: right;"><a href="convnode.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="notopic.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
A YesTopic simply responds to a YES command typed by the player. It is
most useful when placed in a [ConvNode](convnode.htm). For now we'll
give a single example of a YesTopic we'll use to handle the player's
replying YES to the question Sarah's just asked (about cutting open the
glass display case). We'll also make it a
[SuggestedYesTopic](suggestedyestopic.htm) so that it includes saying
yes among the things suggested to the player at this point (for reasons
that will shortly become apparent). Obviously, this YesTopic should be
placed in the ConvNode we've just defined:  
  
++ YesTopic, SuggestedYesTopic  
  topicResponse  
  {  
    "\<q\>Yes, do you think you can manage it?\</q\> you ask.\b  
     \<q\>Watch me!\</q\> she replies. ";  
     nestedActorAction(sarah, CutWith, bananaCase, diamondRing);  
    "\<q\>There you are!\</q\> she declares, \<q\>Easy!\</q\> ";  
  }  
;  
  
