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
<td style="text-align: left;"><strong>Overview - Actor States<br />
</strong></td>
<td style="text-align: right;"><a
href="movingactorsaround.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="hermitactorstate.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
Over the course of a game a sophisticated NPC may be doing many
different things - talking with the player character (or resolutely
ignoring him), leaning against a wall waiting for something to happen,
attacking the PC in a fit of fury, going about his or her daily
business, interfering with the PC's plans or following him around to
lend a helping hand, and any number of other things that authors may
dream up. Where these different activities (or inactivities) are
sufficiently different that we should want to describe the NPC in a
different way and to have the NPC respond or behave in a different way,
we can use a different ActorState. An ActorState is an abstract object
(not a representation of a physical game object) which we nest inside
its associated actor, and which defines the state the actor is in.  
  
Although one can use the ActorState class itself (and in some cases,
particularly with non-human NPCs this may be appropriate), often it is
the more specialized subclasses of ActorState that are employed. The
simplest of these, the [HermitActorState](hermitactorstate.html), it used
when you want the NPC to ignore the PC altogether (because the NPC is
unconscious, preoccupied with something else, or just pointedly ignoring
the PC). An NPC who's ready to engage in conversation with the PC but is
not actually talking with him at the moment would probably be in a
[ConversationReadyState](conversationreadystate.html), which would switch
to an associate [InConversationState](inconversationstate.html) while
conversation is actually in progress. For a sidekick NPC who's following
the PC around of his travels (or a hostile one that's pursuing him)
you'd use an [AccompanyingState](accompanyingstate.html) (together with
an [AccompanyingInTravelState](accompanyingintravelstate.html)), while if
you want the NPC to lead the PC around, you might use
[GuidedTourState](guidedtourstate.html) and
[GuidedInTravelState](guidedintravelstate.html).  
  
Although some of these states have special methods and properties that
apply to them, they all derive a great many properties and methods in
common from ActorState. The subset of these that you will most often
want to override with your own code are:  
  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>stateDesc</strong> - this is a message that's added to the
actor's basic description (the "npcDesc" property in the Actor object).
Most actors will have a permanent description that never changes - a
basic description of their physical appearance - along with some extra
information that describes what they're doing right now. The stateDesc
lets you add this extra state-dependent part.  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>specialDesc</strong> - display's the actor's in-room
description. This is the description displayed in the room description
(for example, when entering a room, or in response to a LOOK command).
By default, we'll invoke the actor's actorHereDesc method. You may or
may not want to call this <em>inherited</em> behaviour when overriding
specialDesc; for example, quite a serviceable specialDesc can often be
set up by defining it as {inherited; stateDesc; }.  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>obeyCommand(issuingActor, action)</strong> - determines if
the NPC should obey the command from the given actor to carry out the
given action. By default this returns nil to refuse all commands.
 <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>takeTurn()</strong> - this is called once per turn. This
allows the actor to carry out scripted behaviour appropriate to the
current state. Note that if you override this method you should
<em>always</em> call <em>inherited</em> in your override (unless you are
absolutely sure you don't want the inherited behaviour), since by
default this method carries out several important steps that you don't
want to disable. One of the things takeTurn does is call doScript if the
ActorState also inherits from Script, which means that (for example) you
can add an EventList class to the class list and takeTurn will
automatically work through the eventList you define for the ActorState.
 <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>afterAction()</strong> - this method can contain code to be
run after the PC performs an action in the NPC's scope.  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>beforeAction()</strong> - this method can contain code to be
run before the PC performs an action in the NPC's scope; the action can
be vetoed with an exit command.  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>afterTravel(traveler, connector)</strong>  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>beforeTravel(traveler, connector)</strong> - these methods
are invoked just before and after a traveler travels via
travelerTravelTo(); beforeTravel is called on each object connected by
containment in its old location, and afterTravel is called on each
object connected by containment to the traveler in the new location.
These notifications are more precise than using beforeAction() and
afterAction() with theTravelVia pseudo-action, because these methods are
called only when travel is actually occurring, whereas TravelVia will
fire notifications even when travel isn't actually possible. A
beforeTravel() method can veto the travel action using "exit". The
notification is invoked before the travel is actually performed, and
even before a description of the departure is produced. Although
ActorAction.beforeTravel(traveler, connector) does nothing by default,
this is not so of many of its subclasses, so it's a good idea to get
into the habit of calling inherited(traveler, connector) when overriding
this method.  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>isInitState</strong> - if set to true, then the library will
automatically set the corresponding actor's curState property to point
to that ActorState during pre-initialization; in other words, set this
to true on the ActorState you want this actor to start off in.  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>arrivingTurn()</strong> - when group travel is performed
using the AccompanyingInTravelState class, this is essentially called in
lieu of the regular takeTurn() method on the state that is coming into
effect after the group travel; in other words, if an NPC is following
the PC around, this method will be called each time they arrive at a new
location.  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>autoSuggest</strong> - set to nil to disable automatic topic
inventory listing on TALK TO commands.  <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>getActor()</strong> - returns the actor object to which this
ActorState belongs; you <em>never</em> want to override this method, but
you may frequently want access to its result.  <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

  
In addition there's a couple of properties of Actor associated with
ActorStates that you need to know about: **curState** contains the
current ActorState for the Actor, while **setCurState(state)** changes
the Actor into the new state ActorState. To change the current
ActorState of an Actor, *always* call setCurState(state), *never* set
curState directly (the reason being that setCurState looks after all the
necessary side-effects of the state change).  
  
To give some idea of how this might look in practice, we could define an
initial ActorState for the ghost like this:  
  
+ ghostHovering : ActorState  
  specialDesc = "The ghost is hovering over its tomb, staring at you intently. "  
  stateDesc = "It's hovering over its tomb. "  
  isInitState = true  
;  
  
This should, of course, immediately follow the definition of the ghost
actor object.  
  
