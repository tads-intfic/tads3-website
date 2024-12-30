::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Optional
Modules](optional.htm){.nav} \> Extras\
[[*Prev:* Extras](extra.htm){.nav}     [*Next:* Menus](menu.htm){.nav}
    ]{.navnp}
:::

::: main
# Gadgets

Some IF games make use of various gadgets such as buttons, levers and
dials to construct devices for the player character to interact with.
The basis for a few simple such gadgets is provided in the gadget.t
module. If your game doesn\'t make use of any of these gadgets you can
safely exclude gadget.t from the build.

## Buttons and Levers

A [Button]{#button-idx} is simply a Thing that can be pushed. You can
define the effects of pushing it in its **makePushed** method.

A [Lever]{#lever-idx} is only slightly more complicated in that it has
two states and can be pulled or pushed depending on which state it\'s
in. When **isPulled** is nil the lever can be pulled (which makes
isPulled true). When isPulled is true the lever can be pushed back into
its original state again. You can override the **makePulled(stat)**
method to carry out any side-effects of pulling and pushing the lever,
but remember to call the inherited method (i.e. included a call to
[inherited(stat)]{.code}) somewhere in your overridden method).

[]{#settables}

## Settables and Dials

A **Settable** is a Thing that can be set to one of a number of values
with commands such as SET WHATEVER TO VALUE. To create a SETTABLE you
need to define its **validSettings** property as a list of single-quoted
strings defining the values to which it can be set and its
**curSetting** property given as a single-quoted string (to define its
initial setting; curSetting is updated each time the player issues a SET
command). By default the Settable class converts the setting requested
to lower case before checking its validity (e.g. SET SLIDER TO OFF would
be treated as a request to set it to \'off\'), so you would normally
need to define the strings in the validSettings property as lower case.
If you want to use upper case or mixed case settings you can override
the **canonicalizeSetting(val)** to do something different appropriately
(either returning val.toUpper or returning val unchanged, for example).
To carry out any side-effects of setting the slider (or whatever your
SETTABLE represents) you can override **makeSetting(val)**, but
rememember to call the inherited method.

A **Dial** is simply a Settable that responds to TURN WHATEVER TO VALUE
in the same way as SET WHATEVER TO VALUE. For example:

::: code
    + Dial 'dial'
        "It can be set to 'off', 'slow' or 'fast'; it's currently set to
        <<curSetting>>. "
        
        curSetting = 'off'
        
        validSettings = ['off', 'slow', 'fast']
    ;
:::

A **NumberedDial** is a Dial that can be turned to any (integer)
numerical setting between **minSetting** and **maxSetting**. Note that
minSetting and maxSetting must be defined as numerical values, while
curSetting is still a single-quoted string (representing a number). For
example to define a dial that can be set to any number between 1 and 50
and starts out set to 2 you might do this:

::: code
    + NumberedDial 'dial'
        "It can be set to any number between 1 and 50; it's currently set to
        <<curSetting>>. "
        
        curSetting = '2'
        minSetting = 1
        maxSetting = 50    
    ;
:::

By default, a NumberedDial can only be set to integer settings, but if
the **allowDecimal** property is set to true then any number within the
specified range will be accepted as valid, even if it has a decimal
point (so, for example, you could turn the dial to 3.42).

Finally, since most buttons, levers, sliders and dials are generally
part of or attached to some other object rather than free-standing
portable objects in themselves, by default all these classes are defined
with isFixed = true (although you can of course override that on your
individual gadgets if need be). You will in any case probably want to
override **cannotTakeMsg** to something less generic, such as \'The dial
is firmly attached to the safe\' or \'The firing stud is an integral
part of your trusty blaster.\'\
[]{#bag}

## BagOfHolding

Inventory management puzzles, which strictly limit the number of items
the player character can carry and force the player to keep
micromanaging what the PC is carrying, have rather dropped out of favour
in Interactive Fiction (mainly because they tend to create a lot of
busy-work and guesswork for players with no compensating gains). Modern
IF thus often tends to allow player characters to carry around as much
as they like. Some authors (and players), however, feel that it can seem
rather unrealistic to allow the player character to carry around dozens
of items at a time in his/her hands (and still have enough hands free to
manipulate things in the game world!). One compromise that is sometimes
employed is the \"bag of holding\". This is an object that the player
character can carry with him or her into which items of his/her current
inventory are moved when his/her hands become too full to take anything
else. This allows the player character to carry a large amount --- or
even an unlimited amount --- of stuff around while maintaining some
semblance of realism. Often a bag of holding may need to be
unrealistically Tardis-like (i.e. bigger on the inside than the outside)
to carry out its function of allowing the player character to cart more
stuff around than s/he could in his/her bare hands, but few players will
mind that (and the effect can sometimes be mitigated if the bag of
holding is something worn, like a knapsack).

And adv3Lite game can define any number of objects to be bags of
holding. To make an object a bag of holding, we use the
[BagOfHolding]{.code} mix-in class. This means (a) that
[BagOfHolding]{.code} must appear first in the class list and (b) that
it must be followed by an appropriate Thing-derived class like
Container.

One method you may occasionally want to override on a BagOfHolding is
**affinityFor(obj)**. This should return a number. If the number is less
than 1 for any given *obj*, then the library will not move that *obj*
from the player\'s inventory into that BagOfHolding when trying to make
room for the player to take something else. If the player is carrying
more than one BagOfHolding, then the one that will be used to take *obj*
from the player\'s inventory is the one for which
[affinityFor(obj)]{.code} returns the greatest value. By default the
library returns 100 for every obj except the BagOfHolding itself, for
which it returns 0 (to prevent any attempt by the library to move a
BagOfHolding into itself to make room in the player character\'s hands).

When choosing an object to move into a BagOfHolding, the library simply
scans the player character\'s contents list in order, passing over items
that are too big to fit into the BagOfHolding or fixed in place (such as
body parts). This will tend to cause a \"first taken, first moved into
bag\" effect. This may sometimes produce undesirable effects, like
moving a light source into a bag of holding when the player character is
in a dark room. To prevent this we can make the bag of holding\'s
affinity for light sources zero, for example:

::: code
    knapsack: BagOfHolding, Wearable, OpenableContainer 'knapsack; brown canvas large'
        "It's a large, brown knapsack made of canvas. "
        
        affinityFor(obj)
        {
            return obj.isLit ? 0 : inherited(obj);
        }
    ;
:::
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Optional
Modules](optional.htm){.nav} \> Gadgets\
[[*Prev:* Extras](extra.htm){.nav}     [*Next:* Menus](menu.htm){.nav}
    ]{.navnp}
:::
