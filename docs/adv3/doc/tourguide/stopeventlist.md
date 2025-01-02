<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>StopEventList : <a
href="eventlist.htm">EventList</a><br />
</strong></td>
<td style="text-align: right;"><a href="eventlist.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="cycliceventlist.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
A StopEventList is just like an [EventList](eventlist.htm), except that
when the last item in the list is reached, it is then repeated
indefinitely.  
  
This is probably most useful in providing sequential responses in NPC
conversations (which we'll be coming to in due course). For example, if
you repeatedly ASK SARAH ABOUT HERSELF, you'd expect her not to give the
same answer each time. Since, however, you cannot actually provide her
with an infinite number of responses, you could use a StopEventList to
provide, say, two or three different ones which progressively reveal
more information, and a final one (to be then repeated indefinitely),
which indicates that this particular topic has now been exhausted, while
perhaps reminding the player of the essentials of what's been said.  
  
We'll be meeting plenty of examples of this in connection with the
conversation system, for example in conjunction with
[GiveShowTopic](giveshowtopic.htm), [AskTopic](asktopic.htm),
[TellTopic](telltopic.htm), and [AskTellTopic](asktelltopic.htm).  
