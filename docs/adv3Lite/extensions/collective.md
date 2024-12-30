::: topbar
![](../../docs/manual/topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](../../docs/manual/toc.htm){.nav} \|
[Extensions](../../docs/manual/extensions.htm){.nav} \> Collective\
[[*Prev:* Brightness](brightness.htm){.nav}     [*Next:* Command
Help](cmdhelp.htm){.nav}     ]{.navnp}
:::

::: main
# Collective

## Overview

This extension defines the [Collective]{.code} and
[DispensingCollective]{.code} classes, which can help with situations
where you have one object representing a collective (e.g. a bunch of
grapes) and one or more objects representing items drawn from that
collective (e.g. individual grapes). The Collective class helps overcome
disambiguation issues when both the collective and individual items are
in scope (e.g. when \'grapes\' might refer either to the bunch of grapes
or to one or more individual grapes) and the DispensingCollective class
further assists with making the collective issue individual items on
demand (e.g. TAKE GRAPE or TAKE GRAPE FROM BUNCH) can be made to move an
individual grape into the player character\'s inventory even when no
individual grape is yet in scope).

\
[]{#classes}

## New Classes, Objects and Properties

In addition to a number of properties/methods intended purely for
internal use, this extension defines the following new classes and
properties/methods:

-   *New Classes*: [Collective](#collective),
    [DispensingCollective](#dispensing)
-   *Properties/Methods of Collective*: [collectiveToks]{.code},
    [extraToks]{.code}, [collectiveDobjMatch]{.code},
    [collectiveIobjMatch]{.code}, [numberWanted]{.code},
    [isCollectiveFor(obj)]{.code}, [collectiveAction(np, cmd)]{.code}.
-   *Additional properties/methods of DispensingCollective*:
    [dispensedClass]{.code}, [dispensedObjs]{.code},
    [maxToDispense]{.code}, [numLeft]{.code},
    [sayDispensed(obj)]{.code}, [exhaustDispenser()]{.code},
    [cannotTakeFromHereMsg]{.code}, [cannotDispenseMsg]{.code},
    [notEnoughLeftMsg]{.code}.

\
[]{#usage}

## Usage

Include the collective.t file after the library files but before your
game source files. Define an object to be of either the Collective Class
or the DispensingCollective class as discussed further below.

\
[]{#collective}

## Collective Class

The principal purpose of the **Collective** class is to resolve clashes
that might otherwise occur between a collective (such as bunch of
grapes) and individual items making up or taken from that collective.
For example, supposed we defined an object representing a bunch of
grapes together with a class to represent individual grapes thus:

::: code
    bunch: Thing 'bunch of grapes[n]'
      ...
    ;  
     
    class Grape: Food 'grape; round green juicy loose'
      "It's round, green and juicy. "
      disambigName = 'loose grape'  
    ; 
     
:::

If we were then to define a number of grapes (objects of the Grape
class) and any of them were in scope at the same time as the bunch
object, the noun \'grapes\' (by itself) would match either the bunch or
any of the individual grapes (since adv3Lite automatically recognizes
\'grapes\' as the plural of \'grape\'). This can lead to annoying
disambiguation messages or unintended consequences in response to
commands like TAKE GRAPES. Particularly when there is only one loose
grape in scope along with the bunch of grapes, the player is likely to
intend \'grapes\' to refer to the bunch and \'grape\' to the individual
grape. The use of the disambigName alleviates this problem a little, but
does not fully solve it. A better solution is to make the bunch a
[Collective]{.code}:

::: code
    bunch: Collective 'bunch of grapes[n]'
          isCollectiveFor(obj) { return obj.ofKind(Grape); }
    ;
     
:::

[]{#iscollective}

The first thing to note here is the use of the **isCollectiveFor()**
method. In order to decide whether it or some other object should
respond to the player\'s command, a [Collective]{.code} needs to know
what objects it needs to be distinguished from, that is, which objects
it is acting as a collective for. In this case we want the parser to
make the correct selection between the bunch of grapes and individual
(loose) grapes; in other words the bunch is a collective for individual
grapes, which in this case will be objects of the Grape class. We thus
need [isCollectiveFor(obj)]{.code} to return true if and only if *obj*
is a Grape.

But there\'s more going on behind the scenes that immediately meets the
eye here. How does the parser know when what the player types is meant
to refer to the bunch rather than to loose grapes? It\'s clear enough if
the player types BUNCH, but not so clear if the player types GRAPES. The
answer is that the parser looks to see if what the player typed to
described the object in question has any words (or \'tokens\') in common
with those defined on the Collective\'s **collectiveToks** property. In
the example above, however, this property seems not to have been
defined. In fact, if it\'s not defined by the user (game author), the
library defines it automatically from the Collective\'s name property;
so in the example above the [collectiveToks]{.code} property is
automatically set to [\[\'bunch\', \'of\', \'grapes\'\]]{.code}.

Much of the time this will work perfectly well, but what if our
Collective can be described in more than one way? Suppose, for example,
we have a stack of cans object that can also be referred to as a pile of
tins. If we left the library to set the [collectiveToks]{.code} property
the parser would still take CANS to refer to the stack rather than to
one or more individual cans, but could not make the same distinction if
the player typed TINS. One way to deal with this would be to set the
[collectiveToks]{.code} property manually:

::: code
     canStack: Collective 'stack of cans;;pile tins'
        isCollectiveFor(obj) { return obj.ofKind(Can); }
        collectiveToks = ['stack', 'of', 'cans', 'pile', 'tins'] 
     ;
     
:::

This will work since the library will see that we\'ve defined the
[collectiveToks]{.code} property for ourselves, so it won\'t overwrite
it with the tokens from the name property, but it\'s a bit more typing
than we need to do, since we\'ve had to repeat the [\'stack\', \'of\',
\'cans\']{.code} that the library would otherwise have dealt with for
us. A better alternative, then, is to use the **extraToks** property. If
the [extraToks]{.code} property is defined as a list of tokens, these
will be added to the list of tokens the library builds from the
Collective\'s name when it initializes its [collectiveToks]{.code}
property. The above example could then be re-written:

::: code
     canStack: Collective 'stack of cans;;pile tins'
        isCollectiveFor(obj) { return obj.ofKind(Can); }
        extraToks = ['pile', 'tins'] 
     ;   
     
:::

Finally, action-processing code ([dobjFor]{.code} and [iobjFor]{.code}
methods) defined on a Collective can test the value of its
**collectiveDobjMatch** and **collectiveIobjMatch** properties to see
whether the Collective was matched as either the direct or indirect
object of the command using any of the tokens in its
[collectiveToks]{.code} property. This is useful when the Collective
also includes singular words in its vocab (e.g. \'grape\' or \'tin\') so
that the player can refer to an individual grape or tin before any have
come into scope. The reason for this will become clearer when we go on
to discuss the [DispensingCollector]{.code} class.

\
[]{#dispensing}

## DispensingCollective Class

The [Collective]{.code} class provides a helpful framework for helping
the parser to choose between a collective (e.g. a bunch of grapes) and
the individual objects for which it is a collective (e.g. individual
grapes), but is otherwise a bit limited in what it can do. Often, if we
have a collective object such as bunch of grapes, we want the player to
be able to take individual items, such as grapes, from it. For this
purpose we can use the **DispensingCollective** class. This is best
explained by way of an example: here\'s how we might define a bunch of
grapes from which the player will be allowed to take up to five grapes:

::: code
    bunch: DispensingCollective 'bunch of grapes[n]; another more; grape'
        dispensedClass = Grape
        
        maxToDispense = 5       
        
        cannotDispenseMsg = '{I}{\'ve} had quite enough grapes. '
        notEnoughLeftMsg = '{I} {don\'t need} that many grapes. '
    ; 
     
:::

There are a number of points to note here. First, the word \'grape\' is
included as an addition noun in the noun section of the vocab property.
This allows the player to type TAKE GRAPE even when there are no
individual grapes in scope, since the Collective (bunch) object will
match \'grape\'. When it matches, however, its
[collectiveDobjMatch]{.code} property will be set to nil, since it did
not match on any of the tokens on the bunch\'s [collectiveToks]{.code}
property. This tells the bunch object that the player wants to take an
individual grape from the bunch rather than the whole bunch. We don\'t
have to do anything to make this happen; this behaviour is all defined
on the DispensingCollective class, so that the command TAKE GRAPE (or
TAKE GRAOE FROM BUNCH) will result in the bunch object creating a new
object of the Grape class and moving into the player character\'s
inventory.

Once a separate grape object exists, however, (and while it\'s in scope
at the same time as the bunch), the parser will take TAKE GRAPE (or any
other command using the singular GRAPE) to refer to the loose grape
rather than the bunch of grapes. That\'s why it\'s a good idea to add
words like \'another\' and \'more\' as adjectives for the bunch object.
Since the individual, loose grapes don\'t have these words in their
vocab, commands like TAKE ANOTHER GRAPE or TAKE TWO MORE GRAPES must
refer to the bunch object, and not to a Grape object, and so the result
will be that the bunch once again creates and dispenses a new Grape to
the player character (or, two grapes, if the command was TAKE TWO MORE
GRAPES).

[]{#max}

Presumably we don\'t, however, want the player to be able to take an
infinite number of grapes from the bunch, so that\'s where the
**maxToDispense** property comes in. This property defines the maximum
number of grapes the player will be allowed to take from the bunch. If
the player tries to take more then the bunch will complain using either
its **cannotDispenseMsg**, if the player has taken the maximum number of
grapes, or the **notEnoughLeftMsg** if there are still some grapes left
to take but the player wants to take more than that number (e.g. TAKE
THREE GRAPES when only two remain). The library does define default
messages for both these properties, but they are sufficiently bland that
you\'ll normally want to override them with your own (it\'s impossible
to know in general the precise reason why you might want to restrict the
number of items to issue to the specific number you choose).

As you can probably guess, the **dispensedClass** method is used to tell
the Collective what class of object to create when the player wants it
to dispense an individual object. As an alternative you can use the
**dispensedObjs** property to hold a list of the objects that the
Collective will dispense. For example, if you only wanted to allow the
player to take a single grape from the bunch, then instead of defining a
Grape class you could define a single grape object and the bunch thus:

::: code
    bunch: DispensingCollective 'bunch of grapes[n]; another more; grape'
        dispensedObjs = [grape]
           
        
        cannotDispenseMsg = '{I}{\'ve} had quite enough grapes. '
        notEnoughLeftMsg = '{I} {don\'t need} that many grapes. '
    ; 
     
:::

Note that in this instance there\'s no need to define the
[maxToDispense]{.code} property, since the maximum number of objects
that can be dispensed is simply the length of the [dispensedObjs]{.code}
list. Note finally that whether you define [dispensedClass]{.code} or
[dispensedObjs]{.code}, there is no need to define the
[isCollectiveFor(obj)]{.code} method on a [DispensingCollective]{.code},
since it this method is already defined there, and can figure out
whether *obj* is something the DispensingCollective is a collective for
from its [dispensedClass]{.code} or [dispensedObjs]{.code} property.

[]{#exhaust}

The **exhaustDispenser()** provides a further way to customize the
behaviour of a DispensingCollective. It\'s called when the
DispensingCollective dispenses its final item. By default it does
nothing, but it can easily be overridden to carry out some side-effect
of running out of items to dispense, such as changing the description,
for example:

::: code
    bunch: DispensingCollective 'bunch of grapes[n]; another more ;grape'
        dispensedClass = Grape
        
        maxToDispense = 5       
        
        cannotDispenseMsg = '{I}{\'ve} had quite enough grapes. '
        notEnoughLeftMsg = '{I} {don\'t need} that many grapes. '
        
        exhaustDispenser()
        {
            setMethod(&desc, 'The bunch is looking a bit depleted; there aren\'t
                really any grapes left that are worth taking. ');        
        }
    ; 
     
:::

If we had been dealing with a bunch of bananas rather than a bunch of
grapes, the effect of taking the last banana from the bunch (when there
are two bananas left) would be to leave a single banana behind, so we
might do something like this:

::: code
     bananaBunch: DispensingCollective 'bunch of bananas[n]; another more; banana'
        "There are <<spellNumber(numLeft)>> bananas left on the bunch. "
        
        dispensedClass = Banana

        maxToDispense = 5
        
        exhaustDispenser()
        {
            local b = new Banana;
            b.moveInto(location);
            moveInto(nil);
        }
    ;
     
:::

\

This covers most of what you need to know to use this extension. For
additional information see the source code and comments in the
[collective.t](../collective.t) file.
:::

------------------------------------------------------------------------

::: navb
*Adv3Lite Manual*\
[Table of Contents](../../docs/manual/toc.htm){.nav} \|
[Extensions](../../docs/manual/extensions.htm){.nav} \> Collective\
[[*Prev:* Brightness](brightness.htm){.nav}     [*Next:* Command
Help](cmdhelp.htm){.nav}     ]{.navnp}
:::
