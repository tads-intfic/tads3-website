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
<td style="text-align: left;"><strong>OneTimePromptDaemon: <a
href="promptdaemon.html">PromptDaemon</a><br />
</strong></td>
<td style="text-align: right;"><a href="promptdaemon.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="moduleexecobject.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A OneTimePromptDaemon is a special kind of PromptDaemon that
automatically deactivates itself after its first invocation, thereby
ensuring that it is executed only once. A one-time-only prompt daemon is
a regular command prompt daemon, except that it fires only once. After
it fires once, the daemon automatically deactivates itself, so that it
won't fire again.  
  
Prompt daemons are occasionally useful for non-recurring processing,
when you want to defer some bit of code until a "safe" time between
turns. In these cases, the regular PromptDaemon is inconvenient to use
because it automatically recurs. This subclass is handy for these cases,
since it lets you schedule some bit of processing for a single deferred
execution.  
  
One special situation where one-time prompt daemons can be handy is in
triggering conversational events - such as initiating a conversation -
at the very beginning of the game. Initiating a conversation can only be
done from within an action context, but no action context is in effect
during the game's initialization. An easy way to deal with this is to
create a one-time prompt daemon during initialization, and then trigger
the event from the daemon's callback method. The prompt daemon will set
up a daemon action environment just before the first command prompt is
displayed, at which point the callback will be able to trigger the event
as though it were in ordinary action handler code. We can't use a
regular Fuse or Daemon for this, since a regular Fuse or Daemon will
only fire at the *end* of the player's turn, and in the case just
described, we need something that fires just *before* the first command
prompt appears.  
  
So, for example, to have an NPC (let's call her Sarah) initiate a
conversation, posing a question to the player character (such as 'What
are you doing here?') just before the very first turn, we might could do
something like this:  
  
OneTimePromptDaemon, InitObject  
  execute() { construct(self, &beforePrompt); }  
  beforePrompt()   
  {  
    sarah.initiateConversation(sarahTalking, 'query-presence');  
  }  
;  
  
Don't worry about how [initiateConversation](initiateconversation.html)
works for now, we'll be going into that later. For now it suffices to
know that this is the statement we need to execute to get Sarah chatting
just before the first turn, so that the player's first command can be a
require to her question. The point of OneTimePromptDaemon is to provide
us somewhere where we can put this statement and have it execute when we
need it.  
  
Note that there's nothing magical about the name beforePrompt() here; we
could have called it anything we liked, although beforePrompt() is at
least descriptive of when the method is invoked, and might be useful if
we wanted to define a custom subclass for this kind of situation:  
  
class FirstTurnPromptDaemon: OneTimePromptDaemon, InitObject  
  execute() { construct(self, &beforePrompt); }  
  beforePrompt() {}  
;  
  
Rather more noteworthy here is the combination of OneTimePromptDaemon
with [InitObject](initobject.html), which we'll discuss next.  
  
  
  
  
  
