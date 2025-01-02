<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>Actor Knowledge<br />
</strong></td>
<td style="text-align: right;"><a
href="actorcustomization.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="movingactorsaround.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
In order to be able to talk about something, an Actor must know about
it, or at least know of its existence. To test whether an actor has seen
something you can use its **hasSeen(obj)** method; likewise, to test
whether an actor knows about something test its **knowsAbout(obj)**
method. If an actor has seen something, the actor is assumed to know
about it, but the converse is not necessarily true (the actor may have
heard about it without actually having seen it). The library keeps track
of what objects the player character has seen automatically, but in
general this can be set for an actor by calling the actor's
**setHasSeen(obj)** method. When an actor learns about something by
other means, you can call its **setKnowsAbout(obj)** method. Since it is
the player character whose knowledge you mostly want to keep track of,
the library defines a macro **gSetKnown(obj)** which is effectively an
abbreviation for gPlayerChar.setKnowsAbout(obj). Thus, when the player
character hears about something for the first time in conversation, or
by reading about it somewhere, or by any other means (other than
actually seeing it), you will probably want to call gSetKnown(obj) to
record the fact. Only when the player character knows about something
can it be the topic of conversation with an NPC (for example there will
be no useful response to ASK SARAH ABOUT RING until the player character
knows of the existence of a ring to be asked about).  
  
By default the library keeps track of what objects have been seen and
which are known about via the seen and isKnown properties on the objects
(and topics) concerned. This effectively means that only the player
character's knowledge is being tracked, since hasSeen(obj) and
knowsAbout(obj) will return the same whatever actor they're called on,
and calling setHasSeen(obj) or setKnowsAbout(obj) on one actor sets
these properties for all actors. The reason for this is that most games
will only be interested in tracking what the player character has seen
and knows about. The library does, however, provide support for tracking
the sight and knowledge of individual NPCs if required. This is done by
specifying **knownProp** and **seenProp** on the actor in question. By
default these are defined as &isKnown and &seen on all actors (i.e. as
pointers to the isKnown and seen properties of objects). They can,
however, be set to point to new properties defined to keep track of a
particular actor's knowledge.  
  
Suppose that in addition to keeping track of what the player character
knows and has seen, we want to do the same for Sarah. We can simply
devise two new properties that we'll call sarahKnows and sarahHasSeen to
do the job for us, and set Sarah's knownProp and seenProp to point to
them. Then we can use sarah.setHasSeen(obj), sarah.hasSeen(obj),
sarah.setKnowsAbout(obj) and sarah.knowsAbout(obj) independently of the
knowledge base of the player character and all other NPCs:  
  
sarah : Person 'attractive young woman/brunette' 'young woman' @lakeRoom  
  "She's an attractive brunette, somewhere in her mid-twenties. "  
  isHer = true  
  properName = 'Sarah'  
  globalParamName = 'sarah'  
  **knownProp = &sarahKnows  
  seenProp = &sarahHasSeen  
**;  
  
Having defined these properties, we could also use them to define
Sarah's initial state of knowledge. If Sarah started the game knowing
about the curator or having seen the golden banana (which she hasn't),
for example, we could define curator.sarahKnows = true and
goldenBanana.sarahHasSeen = true. Likewise, if you wanted the player
character to start off with knowledge of the goldenBanana, you could set
goldenBanana.isKnown = true.  
  
The point of all this will become clearer with a specific example we'll
be implementing when we come to look at TopicEntries. If the player
character enters the graveyard after pushing over the statue in the
Golden Grotto, the ghost will appear. Before that point neither the
player character (PC) nor any NPC has any reason to suppose that the
ghost exists, so there's no reason for it to be a topic of conversation.
The ghost thus only becomes available as a topic of conversation to the
PC once the PC has encountered the ghost. When the ghost appears it will
charge the player character with the task of finding and destroying the
golden banana. Up to that point the PC may not have heard of the golden
banana, and so would not be able to converse about it. After then we'd
want to mark the golden banana as known about but not seen by the PC,
which would allow the PC to raise the golden banana as a topic of
conversation.  
  
Now let's consider what happens when the PC decides to discuss the ghost
with Sarah. Clearly, the PC can't do this until he knows about the
ghost. Also, it makes no sense for the PC to ask Sarah about the ghost
until Sarah has at least heard of the ghost. Sarah can learn of the
ghost by two different methods; either she was with the PC when the
ghost appeared and saw it for herself, or she wasn't but learned about
it from the PC's subsequent account. Sarah is pretty sceptical about
ghosts, and she doesn't take this one seriously unless she sees it
herself, so her responses will be quite different depending whether
she's actually seen the ghost or only been told about it.  
  
The library will take care of ensuring that the ghost cannot be raised
as a topic of conversation until the PC knows about it. It's up to the
author to test for Sarah's state of knowledge of the ghost and have her
respond accordingly. We'll need to test whether Sarah knows about the
ghost at all before allowing the player to ASK SARAH ABOUT GHOST. If she
does know about the ghost we'll want to provide quite different
responses depending on whether she's also seen it. Once the player
character knows about the ghost he can TELL SARAH ABOUT GHOST, but again
we'll want to test for sarah.hasSeen(ghost) to decide how she responds.
Also, if this is the first Sarah has heard of the ghost we'll want to
call sarah.setKnowsAbout(ghost). Finally, we'll want to cater for the
special case where the ghost is actually present while the PC is
discussing it with Sarah.  
