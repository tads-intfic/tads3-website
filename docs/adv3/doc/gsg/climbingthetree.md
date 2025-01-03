---
layout: docs
---


[<img src="topbar.jpg" data-border="0" />](index.html)
[\[Main\]](index.html)  
*[\[Previous\]](basictravel.html)
  [\[Next\]](makinglifemoreproblematic.html)*

## Climbing the Tree - Remapping Behaviour

Since the player will encounter a tree in the clearing, and since
examining the tree will tell the player that the tree looks climbable,
the player will probably try to climb the tree. But at the moment, the
command **climb the tree** will result in the game responding, "That is
not something you can climb." What we need to do is to modify the tree
object so that trying to climb it has the same effect as typing **up**.
The simplest way to achieve this is to add the following to the
definition of tree:
 
dobjFor(Climb) remapTo(Up) 


I.e. replace **climb tree** with an **up** command. Both `dobjFor` and
`remapTo` are macros that expand to more complex code, but that need not
detain us here. What the construction means is "when the current object
(in this case the tree) is the direct object of a **climb** command,
replace this action with what would have happened if the player had
simply typed **up**".

Since we've just introduced some basic but very important concepts here
let's pause to take a closer look at some of them. Whenever you see
`dobj` in TADS 3 it'll be an abbreviation for **d**irect **obj**ect. A
direct object is the object a command principally works on: the direct
object of the command **climb tree** is thus the tree. We define
`dobjFor(Whatever)` on an object whenever we want to tell the game what
to do when that object is the direct object of a Whatever command.
Usually that'll be more complicated than the example we've given here;
this example is about as simple as it gets (don't worry, we'll be coming
to more complex examples soon enough). The first part of this piece of
code `dobjFor(Climb)` means "we're about to define what to do in
response to a climb tree command" (it means this because we're defining
it on the tree); the second part, `remapTo(Up)`, goes on to say what we
want to do in this case, namely execute an **up** command instead. This
is as simple as it gets because the action we're remapping to is the
simplest kind of action: a command with no objects. If we wanted to
remap to another command consisting of a verb followed by a direct
object we could just list the verb and the object. For example we could
have used TravelVia and the name of the connector via which we want the
player character to travel:  

        dobjFor(Climb) remapTo(TravelVia, topOfTree)

  
This illustrates a couple of useful things: first, how to use
`remapTo `in the more general case where the verb takes a direct object,
and second, how to use `TravelVia `with a travel connector to carry out
travel. It also illustrates once again that a room is a kind of travel
connector leading to itself. However, having pointed all this out, we'll
revert to the first version, which is what we actually want here. So if
you changed your code to try out `TravelVia`, before going on change it
back so it reads:  

        dobjFor(Climb) remapTo(Up)

------------------------------------------------------------------------

*Getting Started in TADS 3*  
[\[Main\]](index.html)  
*[\[Previous\]](basictravel.html)
  [\[Next\]](makinglifemoreproblematic.html)*


