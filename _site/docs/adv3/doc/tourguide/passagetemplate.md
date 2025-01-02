<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>Passage Template<br />
</strong></td>
<td style="text-align: right;"><a
href="onewayroomconnectortemplate.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="roomtemplate.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
For passages, allow special syntax to point to the master side of the
passage.  
  
Passage template -\>masterObject inherited;  
  
Here, 'inherited' refers to the Thing or VocabObject template, so this
equates to:  
  
Passage template -\> masterObject;  
Passage template -\> masterObject 'vocabWords';  
Passage template -\> masterObject 'vocabWords' 'name' @location? "desc"?  
  
  
