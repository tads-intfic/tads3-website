::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Reviewing the
Basics](reviewing.htm){.nav} \> Object Containment\
[[*Prev:* Object Definitions](object.htm){.nav}     [*Next:* Methods,
Functions and Statements](methods.htm){.nav}     ]{.navnp}
:::

::: main
# Object Containment

## Two Senses of Containment

Talking about object containment in adv3Lite (or indeed in TADS 3 in
general or in many other IF languages) can seem just a bit confusing at
first, since there aren\'t quite enough different English words for the
different concepts involved (much as in the previous section we had to
use \'object\' to mean both a physical object simulated in the game and
a programming construct used to simulate it). Our immediate problem is
that as soon as we start talking about the containment model in adv3Lite
(and many other IF systems), we\'re in danger of using terms like
\'contain\', \'containment\', \'container\', and \'in\' in two closely
related but conceptually distinct (and importantly distinct) ways, which
for convenience we might term *spatial containment* and *programmatic
containment*.

By *spatial containment* I mean the physical, spatial relationships that
we\'re trying to model in our game world. One object can be *inside*
another, or directly *on top of* another, or *behind* another, or
*underneath* another. We might refer to these kinds of spatial
relationships in a kind of shorthand by simply using the prepositions
*in*, *on*, *behind* and *under*. In the physical, spatial sense, only
the first of these is strictly containment, one object inside another
that is its container, but in the programmatic sense all four spatial
relations are modelled as containment relations.

Incidentally, apart from containment relations involving people (and
other animate actors), these tend to be the only kinds of spatial
relationships modelled in Interactive Fiction. They have in common that
they are all treated as hierarchical (in the programming sense, one
object is the container and the other the contained, a clearly
asymmetric relationship), so it is not uncommon to talk of a
*containment hierarchy*. Relations at the same level in the hierarchy
(with the exception of the spatial interconnections between rooms) are
scarcely ever modelled. A room *description* may state that the sofa is
on one side of the room, the plush armchair on the other, and the TV set
is in the corner, but these spatial relationships are not typically
represented anywhere in the underlying world model implemented in game
code or library code. Objects in the same location are generally
regarded as being within reach of the player (and of one another), and
there\'s no further attempt to model \'three feet away from\' or \'two
metres to the right of\' or anything like that. We will eventually meet
a partial exception in which under certain special circumstances objects
may be divided into those that are close at hand and those that are
remote, but that\'s a complication we\'ll ignore for now. As a general
rule, then, the spatial relations that IF models are hierarchical ones
rather than peer-to-peer ones (other than the peer-to-peer relationship
of having the same location).

Given the hierarchical nature of the containment model, it will be
convenient to use the terms \'parent\', \'child\' and \'sibling\' in
their obvious senses to refer to relative positions within the
containment tree. For example, when Heidi first enters the clearing,
Heidi, the tree and the nest are all (direct) children of the clearing,
and the clearing is the parent of all three. If Heidi comes carrying the
bird, then the bird is a child of Heidi, and Heidi is the parent of the
bird. When Heidi puts the bird in the nest, the nest becomes the parent
of the bird. If Heidi then picks up the nest, the nest becomes the child
of Heidi while the bird remains the child of the nest (the containment
hierarchy is thus in general highly mutable, though some objects may of
course be fixed in place).

We may represent these hierarchical relationships diagrammatically (if a
little crudely) thus:


                        Clearing                                  Clearing                                 Clearing                                                                
                           |                                          |                                       |
                           |                                          |                                       |
            ------------------------------     ===>     -------------------------------   ===>  ---------------------------------
            |              |             |              |             |               |         |                               | 
          Tree           Nest          Heidi          Tree           Nest           Heidi      Tree                            Heidi
                                         |                            |                                                         |                                     
                                       Bird                          Bird                                                      Nest 
                                                                                                                                | 
                                                                                                                               Bird

Note that in the above example, while the bird literally ends up in
(i.e. inside) the nest, it does not literally start out in (i.e. inside)
Heidi, neither does the nest end up literally in (i.e. inside) Heidi,
yet from the point of view of the underlying containment model, the nest
ends up as the child of Heidi in almost exactly the same way as the bird
is the child of the nest or Heidi is a child of the clearing.

## The Containment Model

Using the language of \'parent\' and \'child\' one can describe the main
features of the adv3Lite containment model thus:

1.  A parent can have any number of children, but a child can have at
    most one parent (it\'s also possible for a child to be an orphan and
    have no parent at all).
2.  Rooms are at the top of the containment hierarchy; rooms never have
    a parent.
3.  Everything (apart from rooms) that exists within the game world must
    be directly or indirectly in a room (that is it must be the child,
    grandchild or more distant descendent of some room).
4.  An object can be moved into limbo (or nil, to use the TADS 3 way of
    saying it) when it\'s no longer in the game world (this might be
    used to represent the destruction of the object, or it\'s being
    moved to some totally inaccessible location). Conversely a game
    object might start out without a parent and subsequently be moved to
    a room or other parent object when it becomes available.

It\'s probably helpful to spell out some of the implementation details
at this point. Programmatically, containment is modelled through two
properties of each Thing. The [location]{.code} property contains the
identity of an object\'s parent. The [contents]{.code} property contains
a list of the object\'s children. Thus, in the example above, the
contents property of the clearing starts out as [\[tree, nest,
heidi\]]{.code} and ends up as [\[tree, heidi\]]{.code}, while Heidi\'s
contents start out as [\[bird\]]{.code} and end up as [\[nest\]]{.code}.
Meanwhile the bird\'s [location]{.code} property starts out as
[heidi]{.code} and ends up as [nest]{.code}, while the nest\'s
[location]{.code} property starts out as [clearing]{.code} and ends up
as [heidi]{.code}.

It\'s clearly important that the location and contents properties of
every object in the game remain mutually consistent. That is if objectA
has objectB as its location, objectB must list objectA among its
contents, and conversely, if objectA appears in the contents list of
objectB, then objectA\'s location property must point to objectB. To
ensure that this consistency is maintained, you should **never** change
the location property of an object directly in your code (although it\'s
perfectly okay to specify the *initial* location of an object). Nor
should you manipulate the contents property of an object directly in
your code (although of course it\'s perfectly okay for your code to test
or use what it contains). Instead you should always use the
[moveInto(obj)]{.code} or [actionMoveInto(obj)]{.code} methods to move
objects around your game world. For example, if you wanted to move Heidi
to the top of the tree in response to a CLIMB TREE command you would
use:

::: code
      heidi.actionMoveInto(topOfTree);
:::

The difference between [moveInto()]{.code} and [actionMoveInto()]{.code}
needn\'t detain us long here. In brief, [moveInto()]{.code} simply
carries out the basic housekeeping of ensuring that location and
contents properties remain consistent, while [actionMoveInto()]{.code}
also triggers certain notifications. You would typically use
[actionMoveInto()]{.code} to implement the direct response to a player
command (such as climbing a tree) and [moveInto()]{.code} to move stuff
around by authorial fiat.

To move something into limbo, i.e. off the game map altogether, you can
use [obj.moveInto(nil)]{.code}. This sets the location property of
[obj]{.code} to nil (a special value in TADS 3 that means \'nothing at
all\') and removes [obj]{.code} from the contents list of its previous
parent (it\'s not added to the contents list of nil, since nil is
nothing at all, not an object that can have properties).

## Types of Spatial Containment --- the contType Property

We have seen that, on the face of it, the underlying containment model
simply keeps track of parent-child relationships, and apparently takes
no account of whether a child is in, on, under or behind its parent. In
a sense that\'s true, and yet the adv3Lite world model clearly does keep
track of whether something is in, on, under or behind something else,
and if you\'ve been following this tutorial reasonably closely up till
now, you\'ll probably have surmised that it does so by means of the
parent\'s [contType]{.code} property. Whether something is described as
being in, on, under or behind its parent depends entirely on whether its
parent\'s [contType]{.code} is [In]{.code}, [On]{.code}, [Under]{.code}
or [Behind]{.code}. An object\'s [contType]{.code} property also
determines whether the player character can put something in, on, under
or behind that object.

Since an object\'s contType property can only hold a single value, it
follows that any given game object can only model one kind of spatial
containment. If a given parent can have things in it, it can\'t also
have things on it or under it or behind it. It\'s possible to make it
appear to the player that a particular object in the game allows things
in, on, under and behind it, but this requires a piece of trickery
involving multiple programming objects each of which supports only one
type of containment. The adv3Lite library makes this reasonably easy to
set up, as we shall see in a later chapter, but this is only an apparent
exception, not a real exception, to the rule that an adv3Lite Thing can
only support one kind of containment.

A partial exception, again arguably more apparent than real, to the rule
that an parent object can only implement one time of containment at a
time is when that parent object is a person (or an animate actor
functionally equivalent to a person, such as an intelligent alien,
animal or robot). The containment children of a person can be either (a)
something carried by that person or (b) something worn by that person or
(c) part of that person, such as a limb. The way adv3Lite decides which
is which is to assume that anything fixed (with [isFixed = true]{.code})
must be a part of the person (c), anything with [wornBy]{.code} not nil
(but rather pointing to the parent person) is something worn by the
person, and any other portable (i.e. non-fixed) contained child must be
something carried by the person. An object representing a person has the
special [contType]{.code} [Carrier]{.code} (which is meant to indicate
this special case). The Actor class (which we\'ll meet in a later
chapter) defines [contType = Carrier]{.code} by default; if you use an
ordinary Thing to represent a person (such as the player character
object, me) then you should define [contType = Carrier]{.code} on it
yourself, as we\'ve already seen.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Reviewing the
Basics](reviewing.htm){.nav} \> Object Containment\
[[*Prev:* Object Definitions](object.htm){.nav}     [*Next:* Methods,
Functions and Statements](methods.htm){.nav}     ]{.navnp}
:::
