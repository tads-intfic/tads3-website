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
<td style="text-align: left;"><strong>PromptDaemon : Event<br />
</strong></td>
<td style="text-align: right;"><a href="sensedaemon.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="onetimepromptdaemon.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A PromptDaemon is a special kind of daemon that runs once each turn,
just before the command prompt is displayed. This may be useful, for
example, where you want to check each turn whether some condition has
become true and take appropriate action if so. Since the PromptDaemon
runs every turn, there is no need to specify its frequency, so you can
set one up simply with the command:  
  
 newPromptDaemon(obj, &prop);  
  
Which will call obj.prop each turn, just before the command prompt is
displayed. Again it may be useful to make a note of a reference to the
PromptDaemon so that it can be removed from the list of active events
once its job is done, e.g.  
  
daemonID = newPromptDaemon(obj, &prop);  
  
Then, when you've finished with the promptDaemon you can simply call:  
  
daemonID.removeEvent();  
  
An example of the possible use of a PromptDaemon is given later in
connexion with a [bomb](senseconnector.html).  
  
