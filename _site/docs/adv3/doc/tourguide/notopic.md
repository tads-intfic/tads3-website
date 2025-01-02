<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>NoTopic : <a
href="misctopic.htm">MiscTopic</a><br />
</strong></td>
<td style="text-align: right;"><a href="yestopic.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="specialtopic.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
A NoTopic responds to a NO command directed toward the currently
conversing NPC. Like a YesTopic it is most useful inside a
[ConvNode](convnode.htm).  
  
As an example, add the following immediately after the
[YesTopic](yestopic.htm) we've just defined:  
  
++ NoTopic, SuggestedNoTopic  
  "\<q\>No, on second thoughts I think we'd better leave it for now.\</q\>  
   you reply.\b  
   \<q\>Very well.\</q\> she sighs. "  
;  
  
