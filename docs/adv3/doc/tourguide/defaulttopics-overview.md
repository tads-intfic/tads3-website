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
<td style="text-align: left;"><strong>DefaultTopics - Overview<br />
</strong></td>
<td style="text-align: right;"><a href="topicgroup.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="defaultasktopic.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
There is no way in which any game author can provide responses for every
topic players will attempt to raise with NPCs via GIVE, SHOW, TELL and
ASK commands during the course of a game. On the other hand seeing
"Sarah does not respond" (which is what the library will display if the
author does not provide any other response) as the response to a large
variety of GIVE, SHOW, TELL and ASK commands will probably not create a
terribly favourable impression on the player. The various types of
DefaultTopic are provided to deal with this; rather than have "X does
not respond" they allow the author to provide customised default
handling for the various conversational commands when the player
attempts to ASK, TELL, GIVE or SHOW something for which no specific
response has been programmed.  
  
Roughly speaking, there is a DefaultTopic type corresponding to each
type of TopicEntry:  
  
   [DefaultAnyTopic](defaultanytopic.html)  
   [DefaultAskForTopic](defaultaskfortopic.html)  
   [DefaultAskTellTopic](defaultasktelltopic.html)  
   [DefaultAskTopic](defaultasktopic.html)  
   [DefaultConsultTopic](defaultconsulttopic.html)  
   [DefaultGiveShowTopic](defaultgiveshowtopic.html)  
   [DefaultGiveTopic](defaultgivetopic.html)  
   DefaultInitiateTopic  
   [DefaultShowTopic](defaultshowtopic.html)  
   [DefaultTellTopic](defaulttelltopic.html)  
  
Note that there is also a [DefaultAnyTopic](defaultanytopic.html) that
matches any conversational command for which the response is not
specifically defined.  
  
One thing to watch out for is that a DefaultTopic defined on an
ActorState will mask any specific TopicEntries defined on the actor. So,
for example, if we defined a DefaultAskTellTopic in sarahFollowing none
of the AskTopics and TellTopics defined directly on sarah will be
reachable when she's in the sarahFollowing state. This means that if you
define any common TopicEntries on the actor, you'll need to define the
corresponding DefaultTopics there as well. As of TADS 3.0.6p, however,
there are two ways round this. The first, introduced in TADS 3.0.6n uses
the **excludeMatch** property of the DefaultTopic, which we'll
demonstrate with [DefaultGiveTopic](defaultgivetopic.html). The second,
new to TADS 3.0.6p, uses the **deferToEntry(other)** method. Note that
in any case a DefaultTopic in an ActorState will only mask the
corresponding type of TopicEntry in the actor, so that, for example, if
you only use (say) AskTopics and TellTopics directly on the Actor, it
would be safe to put DefaultGiveTopics, DefaultShowTopics and
DefaultAskForTopics in the ActorStates. Thus, if you put any
TopicEntries directly on the Actor, the corresponding type of
DefaultTopic should go on the actor, not the ActorState. The converse
does not necessarily apply: if you wish to handle all the DefaultTopics
on the actor rather than making them state-specific there's absolutely
no reason why you should not do so even if you define no other
TopicEntries directly on the actor.  
  
Apart from that *programming* DefaultTopics isn't particularly
difficult; the difficulty lies in devising ones that work well. One
might suppose, for example, that a suitable DefaultAskTopic could say
something like "\<q\>I don't know anything about that,\</q\> she
confesses, and a reasonable DefaultAskForTopic might be something like,
"\<q\>I haven't got it,\</q\> she points out", but this could lead to a
transcript such as the following:  
  
**\>ask sarah about her home**  
"I don't know anything about that," she confesses.  
  
**\>ask sarah for sex**  
"I haven't got it," she points out.  
  
Such exchanges may be regarded as less than felicitous. The trick is to
devise default responses that make some kind of sense no matter what
they're responses to, and which at the same time help develop the
character. Since the player is likely to be seeing a lot of default
responses, it's also probably a good idea for DefaultTopics to be
combined with a ShuffledText list to provide some variety to them.
Clearly this is more important with a major NPC the player character
will be interacting a lot with than with a minor one.  
  
  
