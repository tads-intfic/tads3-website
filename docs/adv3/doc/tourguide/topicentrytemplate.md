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
<td style="text-align: left;"><strong>TopicEntry Template<br />
</strong></td>
<td style="text-align: right;"><a
href="thingstatetemplate.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="topicgrouptemplate.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A TopicEntry can be defined with an optional score, followed by the
match criteria (which can be either a single matching object, a list of
matching objects, or a regular expression pattern string), followed by
the optional response text (which can be given either as a double-quoted
string or as a list of single-quoted strings to use as an EventList).  
  
TopicEntry template   
    +matchScore?   
    @matchObj \| \[matchObj\] \| 'matchPattern'   
    "topicResponse" \| \[eventList\] ?;   
  
A ShuffledEventList version of the above:  
  
TopicEntry template   
    +matchScore?   
    @matchObj \| \[matchObj\] \| 'matchPattern'   
    \[firstEvents\] \[eventList\];   
  
We can also include *both* the match object/list *and* pattern:  
  
TopicEntry template   
   +matchScore?  
    @matchObj \| \[matchObj\]   
    'matchPattern'   
   "topicResponse" \| \[eventList\] ?;   
  
A ShuffledEventList version of the above  
  
TopicEntry template   
    +matchScore?   
    @matchObj \| \[matchObj\] 'matchPattern'   
    \[firstEvents\] \[eventList\];   
  
