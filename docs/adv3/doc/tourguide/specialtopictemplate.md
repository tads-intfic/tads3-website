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
<td style="text-align: left;"><strong>SpecialTopic Template<br />
</strong></td>
<td style="text-align: right;"><a
href="shuffledeventlisttemplate.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="styletagtemplate.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A [SpecialTopic](specialtopic.html) takes a keyword list or a regular
expression instead of the regular match criteria. It also takes a
suggestion name string and the normal response text. There's no need for
a score in a special topic, since these are unique.  
  
SpecialTopic template   
   'name'   
   \[keywordList\] \| 'matchPat'   
   "topicResponse" \| \[eventList\] ?;   
  
A ShuffledEventList version of the above:  
  
SpecialTopic template   
   'name'   
   \[keywordList\] \| 'matchPat'   
   \[firstEvents\]   
   \[eventList\];   
  
