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
<td style="text-align: left;"><strong>SenseDaemon : <a
href="daemon.html">Daemon</a><br />
</strong></td>
<td style="text-align: right;"><a href="sensefuse.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="promptdaemon.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A SenseDaemon, like a [SenseFuse](sensefuse.html), is for use when you
want players to see its output only when a certain object can be
sensed.  
  
The way to set up a SenseDaemon is very like that of setting up an
ordinary Daemon, or a SenseFuse, namely:  
  
new SenseDaemon(obj, &prop, interval, source, sense);  
  
As with the standard Daemon, this sets up a daemon that will call the
method obj.prop every *interval* turns, where *interval* must be at
least 1 (one). If interval is 1, obj.prop will execute each turn,
starting with the current turn. If interval is 2, obj.prop will execute
every other turn, starting with the next turn. In general, if interval
is *n*, obj.prop will execute every *n* turns, starting in *n-1* turns
time. Note once again that the second argument to the new Daemon call
must be a property (or method) *pointer*, hence the &prop syntax. The
difference is that the player will only see any messages displayed by
obj.prop if, at that point in time, the player character can sense the
*source* object (which in practice may often be the same as the obj
object, but need not be) using the sense *sense* (which could be sight,
sound, smell or touch - most likely one of the first two).  
  
We'll create an example of a SenseDaemon when we come to
[CyclicEventList](cycliceventlist.html).  
  
  
  
