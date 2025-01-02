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
<td style="text-align: left;"><strong>SyncEventList : <a
href="eventlist.html">EventList</a><br />
</strong></td>
<td style="text-align: right;"><a
href="externaleventlist.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="randomfiringscript.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A synchronized event list is an event list that takes its actions from a
separate event list object. It gets its current state from the other
list, and advancing our state advances the other list's state in lock
step. Set '**masterObject**' to refer to the master list whose state we
synchronize with.  
  
This can be useful, for example, when you have messages that reflect two
different points of view on the same events: the messages for each point
of view can be kept in a separate list, but the one list can be a slave
of the other to ensure that the two lists are based on a common state.  
  
  
