---
layout: docs
---


<img src="topbar.jpg" data-border="0" />





<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="depth.html" class="nav">TADS 3 In Depth</a> \> NPC Travel  
<span class="navnp"><a href="t3conv.html" class="nav"><em>Prev:</em> Programming
Conversations with NPCs</a>    
<a href="t3banner.html" class="nav"><em>Next:</em> Using the Banner
API</a>     </span>





# NPC Travel

Many IF games contain people and creatures for the player to encounter.
These are known as non-player characters, or NPCs. In real life, living
creatures don't tend to stay forever rooted in a single location while
the world carries on around them, so game authors frequently want to
make their NPCs move around within the game world.

If you've ever written any IF before, you know that NPCs are inherently
complicated to program, because you're trying to simulate creatures that
are incredibly complex in real life. Fortunately, the basics of moving
your characters around within a TADS 3 game world aren't too difficult
to master. There are a few library methods that do most of the work for
you; the only trick is to know which ones to call in which situations.
This article covers the main methods of moving NPCs around and describes
when to use each one.

## moveInto

The first thing to know is that you should **not** use moveInto() to
move NPCs around. Many authors naturally assume that moveInto() should
work for actors, since it works for everything else. Unfortunately, it
doesn't usually work very well for NPCs. The problem with moveInto() is
that it's designed primarily for moving objects around within a single
room, so it tries to find a simple containment path between the old and
new locations. This can sometimes cause confusion when moving an object
between separate rooms.

So, **don't use moveInto** for NPC travel.

## moveIntoForTravel

The simplest and most direct way to move actors around is with the
moveIntoForTravel() method. This method works almost exactly like
moveInto() does for ordinary objects; the only difference is that
moveIntoForTravel() doesn't try to find a containment path between the
old and new locations.

moveIntoForTravel() is a method of the actor you want to move, and you
call it with the new location as the parameter:

       bob.moveIntoForTravel(iceCave);

You should use moveIntoForTravel() when you want to move an actor "by
fiat" - that is, you want complete programmatic control over what
happens, and what side effects occur. This routine simply makes the
actor disappear from the old location and magically reappear in the new
location. The library doesn't attempt to simulate the travel when you
use this routine: there's no attempt to open any doors along the way,
for example, and the library doesn't generate any messages mentioning
that the actor is departing or arriving.

## travelTo

The travelTo() method performs more "simulated" travel than
moveIntoForTravel() does, but it doesn't do everything that happens when
the player types in a travel command like "go north." Unlike
moveIntoForTravel(), the travelTo() method *does* carry out all of the
standard notifications involved in the travel: it calls beforeTravel()
on everything nearby in the starting location; it calls actorTravel() on
the actor performing the command; it calls travelerLeaving() on the
starting location, which displays a departure message if the player
character can see the actor departing; it calls noteTraversal() on the
TravelConnector; it calls travelerArriving() on the new location, which
displays an arrival message if the player character can see the NPC
arriving; and it calls afterTravel() on everything nearby in the new
location.

travelTo() is a method of the actor who's traveling, and it takes three
parameters: the destination location, the connector being traversed, the
and "back connector," which is the connector that leads back to the
starting point from the destination location. (The back connector tells
us which connector the actor appears to be emerging from in the new
location, which is useful for displaying an appropriate arrival message.
If you don't actually want to explicitly select a connector back on your
own, which you probably won't often want to do, you can simply call
connectorBack() on the connector the actor is traversing to find the
reverse connector.) Here's an example:

       local conn = bob.location.east;
       bob.travelTo(iceCave, conn,
                    conn.connectorBack(bob.getTraveler(conn), iceCave));

The travelTo() method gives you a lot of control over what happens,
because you can specify just about everything about the travel. As you
can see, though, all that control makes it a bit complicated to use.

Note that travelTo() does **not** carry out any pre-conditions of the
travel. For example, if a closed door is in the way, travelTo() will
make the character magically go right through the door without opening
it. This is a plus and a minus, depending on what you're trying to
accomplish; it's useful when you want to move your characters by fiat,
without regard to the simulation implications, but you have to be
careful that it doesn't create jarring, unrealistic effects for the
player.

## scriptedTravelTo

The most full-featured travel method is also one of the easiest to use.
The scriptedTravelTo() method carries out a "nested command" that moves
your NPC to an adjacent location. For example, if your NPC is in the
Diamond Cave, and the Ice Cave lies to the east, you can make the NPC
carry out a nested "go east" command like so:

       bob.scriptedTravelTo(iceCave);

The scriptedTravelTo() method always carries out a single nested action,
which means that it does *everything* that would normally happen when
the player types in a command like "go east." Because the travel is
performed as a full nested action, all of the pre-conditions that would
normally be required for the player to travel the same way are invoked:
if there's a closed door in the way, the NPC will try to open it, for
example.

It's important to note that scriptedTravelTo() is **not** a "path
finder" method - it doesn't try to compute a path between two locations
that aren't directly adjacent. If the destination isn't connected to the
starting location directly, the routine will do nothing. If you want
your NPC to figure its own way between non-adjacent locations, take a
look at the path-finder example (see the [TADS 3
page](http://www.tads.org/tads3.html) at tads.org).

## Choosing a Method

The three main NPC travel methods - scriptedTravelTo(), travelTo(), and
moveIntoForTravel() - all have their uses. Which one you use depends on
the situation, and you'll probably use more than one in any given game.

You should use moveIntoForTravel() when you want to move an actor "by
fiat," without triggering any simulation side effects. This is the one
to use when you want complete control over what happens, and are willing
to take complete responsibility for things like generating arrival and
departure messages.

Use travelTo() when you want to trigger the notifications normally
associated with travel, but you still want control over the NPC's
actions during the travel. In particular, this method doesn't trigger
any preconditions of the travel, so it's up to you to make sure that any
doors that need to be open are open, for example.

Use scriptedTravelTo() when you know where you want the actor to go, and
you want the library to figure out what command to perform to make that
happen. This method is best when you want the NPC's travel to be fully
simulated, triggering all of the same preconditions and side effects
that the player would trigger with a normal "go east" command or the
like.

And whatever you do, **don't** use moveInto() for NPC travel.



------------------------------------------------------------------------



*TADS 3 Technical Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="depth.html" class="nav">TADS 3 In Depth</a> \> NPC Travel  
<span class="navnp"><a href="t3conv.html" class="nav"><em>Prev:</em> Programming
Conversations with NPCs</a>    
<a href="t3banner.html" class="nav"><em>Next:</em> Using the Banner
API</a>     </span>


