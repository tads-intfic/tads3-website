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
<td style="text-align: left;"><strong>ExternalEventList : <a
href="eventlist.html">EventList</a><br />
</strong></td>
<td style="text-align: right;"><a
href="shuffledeventlist.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="synceventlist.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
An "external" event list is one whose state is driven externally to the
script. Specifically, the state is *not* advanced by invoking the
script; the state is advanced exclusively by some external process (for
example, by a daemon that invokes the event list's **advanceState()**
method). In order words, each time you call the doScript() method of an
ExternalEventList, the same event will fire (or the same string
display), until you make an explicit call to advanceState().  
  
A possible use for this would be for a list of strings/events where what
happens/is displayed depends on some external event. Before that event
occurs, you see the message/event relating to the earlier state of
affairs; when the event occurs it can call the ExternalEventList's
advanceState() method thereby causing the next event to be repeatedly
fired, until another call to advanceState moves it on to the next, and
so on.  
  
  
  
