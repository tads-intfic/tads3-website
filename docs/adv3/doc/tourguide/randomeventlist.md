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
<td style="text-align: left;"><strong>RandomEventList : <a
href="randomfiringscript.html">RandomFiringScript</a>, <a
href="eventlist.html">EventList</a><br />
</strong></td>
<td style="text-align: right;"><a
href="cycliceventlist.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="shuffledeventlist.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A RandomEventList is an EventList that randomly selects one of its items
each turn its doScript method is run. In practice, the
[ShuffledEventList](shuffledeventlist.html), which inherits from
RandomEventList, may be more useful, since it ensures that the same
event will not be chosen twice in succession. The typical use of a
RandomEventList might be in the atmosphereList of a [Room](room.html) or
combined with a [TopicEntry](topicentry.html) to provide a series of
random conversational responses.  
  
RandomEventList defines, (and hence ShufffledEventList inherits) three
useful properties to control the frequency with which random messages
are displayed (or random events occur). This is principally designed for
use in a Room's atmosphereList (or perhaps an Actor's 'fidget list'),
where once players have seen all the messages once or twice, they've got
the general idea and may start to find them unduly repetitious.  
  
You can set the **eventPercent** property (an integer between 0 and 100)
to define the proportion of turns in which you want one of the events
(normally just displaying a string) to occur (for example, setting
eventPercent = 75 would cause a random event to be selected on average
in three turns out of every four). By default, eventPercent is 100.
Additionally, if you wish, you can have this percentage fall (or even
rise!) to a new value, **eventReduceTo** after **eventReduceAfter**
turns. If **eventReduceAfter** is nil (as it is by default) then the
eventPercent never changes. This behaviour is in fact provided by
[RandomFiringScript](randomfiringscript.html).  
  
