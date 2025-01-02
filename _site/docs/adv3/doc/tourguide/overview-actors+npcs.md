<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>Overview - Actors &amp; NPCs<br />
</strong></td>
<td style="text-align: right;"><a
href="randomfiringscript.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="basicactors.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
A Non-Player Character (NPC) is, roughly speaking, any other animate
being the player/player character encounters in the game world.
"Animate" may be a slightly fuzzy concept, since it might include not
only other people and various animals, but also, perhaps, robots and
talking computers. Ultimately it is, of course, up to game authors what
they implement as NPCs; the choice will normally depend on which
entities in their games exhibit sufficiently complex behaviour.  
  
Implementing an NPC can be a complex task, but TADS 3 breaks it down
into a series of (in the main) fairly simple tasks by spreading the
implementation of each NPC over (potentially) a wide range of objects.
The basic NPC will be defined in an object of the Actor class, or one of
its subclasses, UntakeableActor or Person. The difference between these
three classes is that an Actor is portable whereas the other two are
not; you would therefore normally use Actor for a small animal such as a
mouse or a cat that you might want the player character to be able to
pick up and carry around. Neither UntakeableActor nor Person can be
picked up (they both derive from [Immovable](immovable.htm) as well as
from Actor), the only difference is the text of the messages displayed
when the attempt to pick them up or otherwise push them around is made:
UntakeableActor displays more generic messages suitable for large
animals, while Person displays messages more suited to the attempt to
cart off a fellow human being. Thus you would normally use
UntakeableActor for larger animals such as tigers and elephants, and
Person for human or human-like characters. In this game all the NPCs we
shall be implementing will use the Person class (which is not to say
that they'll all be strictly human!).  
  
Particularly for a complex NPC such as another human character, the
Actor (or Person) object should generally contain only the very basic,
constant data needed to define that actor (such as name, gender,
vocabWords, basic description, and maybe weight, bulk and one or two
other things). The behaviour of the NPC should be defined using a number
of [ActorState](overview-actorstates.htm), [TopicEntry](topicentry.htm)
and perhaps [AgendaItem](agendaitem.htm), [ConvNode](convnode.htm) and
[TopicGroup](topicgroup.htm) objects nested inside the principal Actor
object. In particular we use TopicEntry objects to define what happens
in conversation with the actor (the responses to ASK ABOUT, TELL ABOUT,
and ASK FOR, and also to GIVE and SHOW commands). One of the aims of
this structure is to eliminate, or at least drastically reduce, the need
for a huge tangle of if, else and switch statement spaghetti to define
complex behaviour, although assuming your NPCs do anything out of the
library-defined ordinary, the time will come when you may need the
occasional if or switch statement.  
  
As always, this may not mean a great deal in the abstract; hopefully it
will all become clearer as we work through the implementation of a
number of NPCs, feature by feature. In the meantime, if you have not
already done so, you may wish to read the extensive article on
<a href="../techman/t3actor.htm" target="_top">Creating Dynamic Actors
in TADS 3</a> in the *Technical Manual*.  
  
