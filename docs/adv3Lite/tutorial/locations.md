---
layout: docs
---


<img src="topbar.jpg" data-border="0" />





<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="heidi.html" class="nav">Heidi: our first adv3Lite game</a> \>
Defining the Game's Locations  
<span class="navnp"><a href="understanding.html" class="nav"><em>Prev:</em> Understanding the
Source File</a>    
<a href="bird.html" class="nav"><em>Next:</em> Adding the Bird and the
Nest</a>     </span>





# Defining the Game's Locations

A good place to start in any game is by laying out its locations. In
Interactive Fiction these are called *rooms*, even when they don't
represent an enclosed space within a building. The IF convention is that
a 'room' represents any area which is considered directly accessible to
an actor (typically the player character) located within it. Here
'accessible' means that with certain exceptions, which we'll worry about
later, the player character can see and interact with everything that's
in his or her current room.

The locations or 'rooms' to be used in our little Heidi game are
indicated in the following rough map:

![](heidimap.jpg)

We've already defined one of these rooms, namely the starting location,
'In front of a cottage'. Now let's look at its definition a little more
closely:

```
    beforeCottage: Room 'In front of a Cottage'
        "You stand outside a cottage. The forest stretches east. "
    ;
```

The programming name of this room (the name by which we can refer to it
in our code) is **beforeCottage**. It's defined to be of the **Room**
class (remember the name immediately following the colon is the came of
the class to which the object we're defining belongs). This is the class
you'll always use when defining Rooms (unless you choose to subclass
Room for your own purposes, but we'll leave that possibility aside for
now). Once again we end the object definition with a semicolon. But you
might be puzzled by the fact that we don't obviously define any
properties; we simply write something in single-quotes (a single-quoted
string) followed by something else in double-quotes (a double-quoted
string).

In fact we have defined a couple of properties, but we have done so
using a kind of special shorthand called a *template*. The room
definition above is exactly equivalent to:

```
    beforeCottage: Room 
        roomTitle = 'In front of a Cottage'
        desc = "You stand outside a cottage. The forest stretches east. "
    ;


    Here the roomTitle property is the name of the room that appears both in the status line and (often in bold) as the heading of the room description, while the desc property is the fuller description of the room that occurs in the body of the room description. Because these properties are used so often when defining a room, a template (defined in advLite.h) enables us to define them with this short form:


    someRoom: Room 'roomTitle'
        "desc"
    ;
```

Note, incidentally, how we leave a space between the final full-stop and
the closing double-quote mark in the desc property. This is common
practice in TADS 3 programming in case the game prints another piece of
text directly afterwards.

Armed with all this knowledge we can now go ahead and define the other
three rooms:

```
    forest: Room 'Deep in the forest'
        "Through the dense foliage, you glimpse a building to the west. A track
        heads to the northeast. "
    ;


    clearing: Room 'A forest clearing'
        "A tall sycamore stands in the middle of this clearing. The path winds
        southwest through the trees. "
    ;


    topOfTree: Room 'At the top of the tree'
        "You cling precariously to the trunk. "
    ;
```

But if you compile the game and run it again, you'll find that
apparently nothing much has changed. In particular, despite what the
description of your starting room says, the attempt to go east still
takes you nowhere. The reason is that although we've now defined all the
rooms in the game, we've done nothing to define the connections between
them. To do this we need to define the relevant direction properties on
each room, to say where the player character ends up when going in
particular directions from particular rooms. Amend the rooms so they now
look like this (with the new code shown in bold below):

```
    beforeCottage: Room 'In front of a Cottage'
        "You stand outside a cottage. The forest stretches east. "
        
        east = forest
    ;

    /* 
     *   The player character object. This doesn't have to be called me, but me is a
     *   convenient name. If you change it to something else, rememember to change
     *   gameMain.initialPlayerChar accordingly.
     */

    + me: Thing 'you;;heidi'   
        isFixed = true    
        proper = true
        ownsContents = true
        person = 2   
        contType = Carrier    
    ;


    forest: Room 'Deep in the forest'
        "Through the dense foliage, you glimpse a building to the west. A track
        heads to the northeast. "
        
        west = beforeCottage
        northeast = clearing
    ;


    clearing: Room 'A forest clearing'
        "A tall sycamore stands in the middle of this clearing. The path winds
        southwest through the trees. "
        
        southwest = forest
        up = topOfTree
    ;

    topOfTree: Room 'At the top of the tree'
        "You cling precariously to the trunk. "
        
        down = clearing
    ;
```

If you now compile and run the game (assuming you haven't made any
mistakes), you should now find things are a bit better. It may still not
be the world's most exciting game, but at least you can now travel from
the outside of the cottage to the top of the tree via the forest and
clearing and all the way back again.

Note how we've defined the connections here. On each room we define
properties corresponding to the directions we want to be able to travel
in and set those properties to the destination of that travel, i.e. the
room we want the player character to end up in when travelling in that
direction. Note also that there's no assumption that travel will be
symmetrical. Just because we've defined forest to be east from
beforeCottage, it doesn't mean that going west from forest will
automatically take us back to beforeCottage. If we want it to, we have
to define it explicitly.

The adv3Lite library defines sixteen different directions we can use:
first the eight compass directions (north, south, east, west, northeast,
northwest, southeast, and southwest); then four 'special' directions
(in, out, up and down); and finally the four shipboard directions (port,
starboard, fore and aft). If that's not enough for your game (and it
should be more than enough for most games) then it is possible to define
custom directions of your own, but that goes beyond what we cover in
this tutorial.



------------------------------------------------------------------------



*adv3Lite Library Tutorial*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="heidi.html" class="nav">Heidi: our first adv3Lite game</a> \>
Defining the Game's Locations  
<span class="navnp"><a href="understanding.html" class="nav"><em>Prev:</em> Understanding the
Source File</a>    
<a href="bird.html" class="nav"><em>Next:</em> Adding the Bird and the
Nest</a>     </span>


