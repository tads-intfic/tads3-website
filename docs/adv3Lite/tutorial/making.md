::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Goldskull](revisit.htm){.nav} \>
Making things happen\
[[*Prev:* Laying out the map](goldmap.htm){.nav}     [*Next:* Improving
the Game](improving.htm){.nav}     ]{.navnp}
:::

::: main
# Making things happen

There are basically two things we need to make happen in this game:

1.  Killing the player character if he springs the trap (while letting
    him take the skull if he solves the puzzle)
2.  Ending the game in victory if the player character succeeds in
    making off with the skull unharmed.

We\'ll now deal with each in turn.

## Springing the Trap

The trap is sprung if the player character removes the gold skull from
the pedestal when the rock isn\'t already on it. The most convenient
place to put the code for this is probably in the
[notifyRemove(obj)]{.code} method of the pedestal object, since this is
called whenever the [actionMoveInto()]{.code} method of an object being
moved is called. This, incidentally, is one of those notifications we
were talking about towards the end of the last chapter, and explains why
it\'s a good idea to use [actionMoveInto() ]{.code}rather than just
plain [moveInto()]{.code} when implementing the direct response to a
player\'s command. By using notifyRemove() we should ensure that the
trap is sprung whatever method the player contrives to remove the skull
from the pedestal, as we shall see.

We\'ll try to make the code as general as possible, since if the player
puts the rock on the pedestal, then removes the skull, but then goes on
to remove the rock, the trap should still be sprung. Since
[notifyRemove(obj)]{.code} is called just *before* obj is moved, we thus
want to check whether there are fewer than two objects on the pedestal
at that point. If there are, then the object being moved must be the
only object on the pedestal, so the trap should be sprung when it\'s
moved. We can get at the number of objects on the pedestal with the
expression [contents.length()]{.code}, i.e. the number of items in the
list that constitutes the [contents]{.code} property of the
[pedestal]{.code} object. Since *obj* is the object being moved, we can
use [obj.theName]{.code} in an embedded expression to print the name of
the right object, whether it\'s the skull or the rock that\'s just been
removed from the pedestal. The resulting code looks like this:

::: code
    + pedestal: Thing 'stone pedestal; smooth'
        "The smooth stone pedestal is artfully positioned to catch the sunlight at
        just this time of day. "
        isFixed = true
        contType = On
        
        notifyRemove(obj)
        {
            if(contents.length < 2)
            {
                "As <<obj.theName>> leaves the pedestal, a volley of poisonous
                arrows is shot from the walls! You try to dodge the arrows, but
                they take you by surprise!";  
                
                finishGameMsg(ftDeath, [finishOptionUndo]);  
            }
        }
    ;
:::

We\'ve already encountered the use of the [finishGameMsg()]{.code}
function to end the game. The only difference here is the use of
[ftDeath]{.code} to make the game end displaying the message \*\*\* YOU
HAVE DIED \*\*\* instead of \*\*\* YOU HAVE WON \*\*\*. We once again
supply the [finishOptionUndo]{.code} option so that the player can UNDO
the fatal move. If only that were possible in real life!

Try compiling and running the game to ensure that everything works as
expected.

## Letting the Player Win

Although the player can take the gold skull safely, there\'s currently
still no way to reach a winning ending. We said that we\'d announce
victory when the player character heads back to camp carrying the gold
skull. We can implement that by defining a *method* on the appropriate
direction property of startroom (yes, you can put methods on direction
properties too!) that disallows travel if the player character isn\'t
carrying the gold skull but announces victory if he is. This involves
making a couple of additions to the startroom object:

::: code
    startroom: Room 'Outside Cave'
        desc = "You're standing in the bright sunlight just outside of a large,
            dark, foreboding cave, which lies to the north. The path back to your
            camp winds roughly southeast through the dense foliage. " 
        
        north = cave 
        
        southeast()
        {
            if(goldSkull.isIn(me))
            {
                "Your mission complete, you head triumphantly back to your camp. ";
                finishGameMsg(ftVictory, [finishOptionUndo]);
            }
            else
                "You've no intention of leaving till you've got what you came for.
                ";
        }
    ;
:::

There really isn\'t anything that\'s new here, beyond the fact that you
can attach a method to a direction property and that the method will be
executed when the player character tries to move in the associated
direction (incidentally you can also do this in TADS 2, but not in
adv3). While we\'re at it, note that since we\'re testing for
goldSkull.isIn(me), which tests for direct or indirect containment, the
test would still pass even if the explorer placed the gold skull in a
knapsack and carried the knapsack (as we shall see).

If you try compiling and running the game now you should notice
something else. The southeast exit now appears in the exit lister, even
though we haven\'t defined it as actually going anywhere. The default
behaviour of the exit lister is to list the directions associated with
Rooms, TravelConnectors (which includes doors and stairways) and
methods, but not those associated with single-quoted or double-quoted
strings. The reasoning is that a method is likely to do something (as
here) whereas a string property is likely to just display a message
explaining why travel isn\'t possible. A method on a direction property
is thus treated as a kind of simulated exit, which is fully appropriate
here.

In the next section we\'ll start adding all sorts of little tweaks and
improvements to this game, and introduce several new features of
adv3Lite in the process.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Goldskull](revisit.htm){.nav} \>
Making things happen\
[[*Prev:* Laying out the map](goldmap.htm){.nav}     [*Next:* Improving
the Game](improving.htm){.nav}     ]{.navnp}
:::
