::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Heidi: our first adv3Lite
game](heidi.htm){.nav} \> Adding the Tree and the Branch\
[[*Prev:* Adding the Bird and the Nest](bird.htm){.nav}     [*Next:*
Finishing Touches](finishing.htm){.nav}     ]{.navnp}
:::

::: main
# Adding the Tree and the Branch

The description of the clearing mentions a tall sycamore tree standing
at its centre. We\'d better define it next. A first attempt based on
what we\'ve done so far is:

::: code
    + tree: Thing 'tall sycamore tree;;stout proud'     
        "Standing proud in the middle of the clearing, the stout tree looks easy to
        climb."
    ;
:::

Add this to your file just after the definition of the nest (in the
clearing). Because both the nest and the tree have a single + sign, both
will be located in the clearing (tree won\'t be in the nest!). If you
now compile the game and try running it, you\'ll find it works --- but
only after a fashion. When the player character travels to the clearing
the tree is now mentioned twice in the room description. Even worse,
Heidi can pick up the tree and carry it around with her!

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

    You can see a birds nest and a tall sycamore tree here.

    >x tree
    Standing proud in the middle of the clearing, the stout tree looks easy to climb.

    >take tree
    Taken. 

    >i
    You are carrying a tall sycamore tree.
:::

We should fix this at once. We can do so by adding [isFixed =
true]{.code} to the definition of the tree.

::: code
     
    + tree: Thing 'tall sycamore tree;;stout proud'     
        "Standing proud in the middle of the clearing, the stout tree looks easy to
        climb."
        
        isFixed = true
    ;
:::

If you try compiling and running the game again, you should find it now
works rather better: the tree isn\'t listed twice in the clearing and
Heidi can\'t pick it up. The first thing defining [isFixed =
true]{.code} does is to make the tree non-portable so it can\'t be
picked up and carried around. More often than not non-portable items
like the tree have already been mentioned in the main body of the room
description, so we normally don\'t want to see them listed among the
miscellaneous portable items that happen to be in the location like the
nest. For that reason Thing is set up so that when [isFixed]{.code} is
true, [isListed]{.code} is nil (i.e. false) so that fixed items aren\'t
listed separately (though note that if you want to, you can override
[isListed]{.code} separately from [isFixed]{.code}, as we\'ll go on to
illustrate next).

Finally, we\'ll add a branch at the top of the tree. Once again this
needs to be fixed in place, so we\'ll define [isFixed = true]{.code}.
This time, though, just to show that it can be done (and because we
haven\'t mentioned the branch yet in the room description of
[topOfTree]{.code}) we\'ll also define [isListed = true]{.code}, so that
the branch is still listed as a separate object. Finally, we want Heidi
to be able to put things (such as the bird and the nest) *on* the
branch, so we\'ll define [contType = On]{.code} (meaning that things can
now be placed on the branch, and that anything located \'in\' the branch
(via the + syntax or one of its equivalents) is to be considered as
resting on top of it.

The definition of the [branch]{.code} object should come directly after
the definition for [topOfTree]{.code}, and should look like this:

::: code
    + branch: Thing 'wide firm bough; flat; branch'
        "It's flat enough to support a small object. "
        
        isFixed = true
        isListed = true
        contType = On
    ;
:::

Once you\'ve made all the appropriate changes, try compiling and running
the game again and see what you can now do in it.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Heidi: our first adv3Lite
game](heidi.htm){.nav} \> Adding the Tree and the Branch\
[[*Prev:* Adding the Bird and the Nest](bird.htm){.nav}     [*Next:*
Finishing Touches](finishing.htm){.nav}     ]{.navnp}
:::
