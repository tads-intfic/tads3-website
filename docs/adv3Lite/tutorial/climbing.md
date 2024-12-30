::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Heidi
Revisited](revisit.htm){.nav} \> Climbing the tree\
[[*Prev:* Entering the Cottage](cottage.htm){.nav}     [*Next:* Dropping
objects from the tree](dropping.htm){.nav}     ]{.navnp}
:::

::: main
# Climbing the tree

Here\'s the next problem the player may encounter:

::: cmdline
    In front of a Cottage
    You stand outside a cottage. The forest stretches east. 

    >e

    Deep in the forest
    Through the dense foliage, you glimpse a building to the west. A track heads to the northeast. 

    You can see a baby bird here.

    >ne

    A forest clearing
    A tall sycamore stands in the middle of this clearing. The path winds southwest through the trees. 

    You can see a birds nest here.

    >x tree
    Standing proud in the middle of the clearing, the stout tree looks easy to climb.

    >climb tree
    The tall sycamore tree is not something you can climb. 
:::

It should hardly need spelling out why this won\'t do. Not only is CLIMB
TREE a perfectly natural thing to try in any case, but the description
of the tree positively invites it, and yet as implemented the game
currently assumes that the player will type UP. The important question
is how to fix it. There\'s more than one way to go about it, so we\'ll
illustrate three of them here, passing over the first two fairly rapidly
as a taste of things to come, and then sticking with the third.

The first way is to make the tree climbable and then define what happens
when it\'s climbed:

::: code
    + tree: Thing 'tall sycamore tree;;stout proud'     
        "Standing proud in the middle of the clearing, the stout tree looks easy to
        climb."
        
        isFixed = true
        isClimbable = true
        
        dobjFor(Climb)
        {
            action()
            {
                "You climb up the tree.<.p>";
                gActor.actionMoveInto(topOfTree);
                topOfTree.lookAroundWithin();
            }
        }
    ;
:::

This is the way you\'ll often respond to actions, but we won\'t go into
it in much detail for now, leaving the full explanation until later. In
brief, we make the tree climbable by defining [isClimbable =
true]{.code}. We then define what happens when someone climbs the tree
in the [action()]{.code} section of [dobjFor(Climb)]{.code} (think of
that as meaning \'direct object for the Climb action\'). First we
display a message telling the player that Heidi is climbing the tree.
Note the use of [\<.p\>]{.code} at the end of this message; this ensures
that there\'s a blank line after it (to separate it from the room
description that\'s to follow). Then we move the actor (who in this case
is the player character, i.e. Heidi, or the [me]{.code} object) to
[topOfTree]{.code}. Finally, we look around at the top of the tree to
provide a new room description by calling
[topOfTree.lookAroundWithin()]{.code}.

Although this works fine, and is typical of how you\'ll often customise
action handling, a shorter and arguably better solution in this case is
to define a Doer that intercepts the climb tree action and makes it do
the same thing as UP instead. The code for that is briefer, and consists
simply of defining the following object:

::: code
    Doer 'climb tree'
        execAction(curCmd)
        {
            doInstead(Go, upDir);
        }    
    ;
:::

We\'ll meet Doers in more detail later. If you\'re itching with
curiorisity about them already you can look up
[Doers](../manual/doer.htm) in the adv3Lite manual. For now we need only
note a handful of points. First, the property that\'s being defined
through the Doer template (\'climb tree\') is its [cmd]{.code} property.
While \'climb tree\' looks like something the player might type, this is
in fact only partly the case; the *verb* (here \'climb\') is specified
as the player would type it, but the *noun* (here [tree]{.code}) must be
the programmatic name (or symbol) representing the object. It can also
be the name of a class, in which case the Doer will match the specified
action applied to any object of that class.

Second, the [execAction(curCmd)]{.code} is where the Doer defines what
the player character should do instead of the action the command (passed
to the method as the [curCmd]{.code} parameter) would normally have made
her carry out.

Third, we call the [doInstead()]{.code} method to specify what the
player character should do instead. It\'s tricky to specify a direction
as the object of a Travel command, so we use the special Go action
instead. When we call doInstead() with Go as the first parameter (the
action), the second parameter we pass to it (the direct object) is the
name of the direction (here \'up\') with \'Dir\' appended to it (hence
[upDir]{.code}); this is in fact the programmatic name of the object
used to represent the direction in the adv3Lite library (whereas plain
[up]{.code} is a property of the Room class, which would make it a
little more awkward to pass as a parameter here).

Fourth, at least in the adv3Lite library, the purpose of a Doer isn\'t
to implement the normal response to a command, but to deal with
exceptions. A Doer intervenes between the parsing of the *command* (the
translation of the player\'s input into a command the program can
understand) and the execution of the corresponding *action*. One good
use of a Doer is to redirect a command to a totally different action (as
here); another might be to rule out certain commands altogether. For
example, you could add the following to your code:

::: code
    Doer 'go dir'
        execAction(curCmd)
        {
            "You're not aboard a ship. ";
            abort;
        }
        
        direction = [portDir, starboardDir, foreDir, aftDir]
    ;
:::

This would cause the message \"You\'re not aboard a ship\" to be
displayed if the player typed PORT, STARBOARD, FORE or AFT, which are
otherwise legal directions in adv3Lite. The [abort;]{.code} statement
then prevents any further processing of the command (so that, for
example, there won\'t be any after action notifications for the action
that didn\'t take place, and the abortive command won\'t count as a
player turn).

In sum a Doer is used to deal with exceptions rather than normal
action-handling. If you\'re familiar with Inform 7 you can think of a
Doer as being a little like an Inform 7 instead rule (even to the extent
of having its equivalent of in, during, and when clauses), although
Doers are probably used less freely in adv3Lite than instead rules
typically are in Inform 7 coding.

Since in the tree-climbing exercise we want to redirect one action
(CLIMB TREE) to another (UP), this is a perfectly legitimate use for a
Doer, and a perfectly good solution to the problem. In this case,
however, I\'d like to suggest that there\'s an even better one. Although
up to this point we\'ve implemented *The Adventures of Heidi* using only
the Room and Thing classes, the adv3Lite library does provide a number
of other classes for special purposes, including one that handles
precisely the situation we have here, when we want CLIMB to take the
player character from one Room to another. The class in question is
called [StairwayUp]{.code}, because it could typically be used for
staircases leading up from one floor to another, but it will work
equally well for the tree:

::: code
    + tree: StairwayUp 'tall sycamore tree;;stout proud'     
        "Standing proud in the middle of the clearing, the stout tree looks easy to
        climb."
        
        destination = topOfTree
    ;
:::

The only property we now need to define on the tree is its
[destination]{.code} property, which tells the game where Heidi should
go when she climbs the tree. We don\'t even need to define [isFixed =
true]{.code} any more since, this being the most common case for things
you can climb, it\'s defined as the default on the StairwayUp class (if
you had a portable stairway like a ladder, you could always override it,
but you\'d then have the challenge of making the [destination]{.code}
property work right!). As a further bonus, using a StairwayUp means that
CLIMB UP TREE will be handled the same as CLIMB TREE, which would not
otherwise have been automatically the case. As a further bonus, we can
add a [travelDesc]{.code} property to describe Heidi climbing the tree:

::: code
    + tree: StairwayUp 'tall sycamore tree;;stout proud'     
        "Standing proud in the middle of the clearing, the stout tree looks easy to
        climb."
        
        destination = topOfTree
        
        travelDesc = "You <<one of>> manage to scramble all the way up <<or>> once 
            again climb <<stopping>> to the top of the tree. "
        
    ;
:::

Note the use of the embedded expression [\<\<one of\>\> \... \<\<or\>\>
\... \<\<stopping\>\>]{.code} syntax to vary the message that\'s shown
when Heidi climbs the tree. The first time the player will see \"You
manage to scramble all the way up to the top of the tree\"; thereafter
you get the more prosaic \"You once again climb to the top of the
tree\", which arguably helps the message from becoming a bit jarring.
One problem with this, however, is that you only get this message at all
if you type CLIMB TREE and not if you climb UP. The solution is simple:
just change the [up]{.code} property of the [clearing]{.code} to point
to the [tree]{.code} object instead of the [topOfTree]{.code} room:

::: code
    clearing: Room 'A forest clearing'
        "A tall sycamore stands in the middle of this clearing. The path winds
        southwest through the trees. "
        
        southwest = forest
        up = tree
    ;
:::

This works because StairwayUp inherits from the TravelConnector class as
well as the Thing class, and a TravelConnector is another kind of object
you can usefully attach to a direction property. It is in fact the
TravelConnector class that defines the [destination]{.code} and
[travelDesc]{.code} properties we\'ve used here. A TravelConnector can
also specify the conditions under which travel is possible at all, but
that\'s a feature for another day (or at least, for a later part of this
tutorial).

Incidentally, you may be wondering where the names of properties like
[cannotClimbMsg]{.code} and [cannotTakeMsg]{.code} came from (as well as
[cannotEnterMsg]{.code} in the previous section); you may even be
wondering about the name [Climb]{.code}, which is the name of an action.
It may seem reasonably intuitive that the action corresponding to CLIMB
SOMETHING should be called [Climb]{.code}, and that the message for not
being able to take something should be called cannotTakeMsg, but it\'s
not always that obvious. For example, the commands GET HOUSE and PICK UP
HOUSE mean the same thing at TAKE HOUSE, but there\'s no
[cannotGetMsg]{.code} or [PickUp]{.code} action; [cannotTakeMsg]{.code}
and the [Take]{.code} action are used in each case. It\'s a little early
in the tutorial to be worrying about this, so you can forget about it
for now, but just in case you *are* worrying about how you\'re meant to
know all this you can be reassured that it\'s all contained in an
[Action Reference](../manual/actionref.htm), which we\'ll meet again in
a later chapter. Now that you have been reassured, you really *can*
forget about it (or at least, stop worrying about it) for now.

Now try compiling and running the game again to check that everything
behaves as you expect.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Heidi
Revisited](revisit.htm){.nav} \> Climbing the tree\
[[*Prev:* Entering the Cottage](cottage.htm){.nav}     [*Next:* Dropping
objects from the tree](dropping.htm){.nav}     ]{.navnp}
:::
