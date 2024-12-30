::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Schemes and
Devices](schemes.htm){.nav} \> Recapitulation\
[[*Prev:* Making a Scene](scene.htm){.nav}     [*Next:* Cockpit
Controls](cockpit.htm){.nav}     ]{.navnp}
:::

::: main
# Recapitulation

Once again, we\'ve covered a lot of new ground in this chapter, much of
it moving into more advanced territory. Before we go on to the next new
topic, let\'s pause for breath and review what we\'ve just done.

The first and most important thing is not to worry if you don\'t feel
you\'ve taken it all in, or it all seems a bit of a jumble, or you\'re
not quite sure why we did things *this* way rather than *that*. There
often is more than one way to tackle a problem in writing IF, and often
one solution is just as good as another, and it all comes down to the
taste and inclinations of the game author. In any case the particular
solutions covered in this chapter aren\'t all that important. They\'re
certainly not things you need to memorize. Quite apart from anything
else, they may not be at all relevant to *your* game. I can\'t promise
to give you solutions that *are* directly relevant to the game or games
you\'re planning, since I have no way of knowing what you have in mind.
In any case, if you\'re planning something in any way original and
innovative, there\'s no way this tutorial *could* possibly show you how
to tackle the specific problems you will encounter in your particular
project.

So if the point of this chapter wasn\'t primarily to show you ready-made
solutions you could use in your own project, what was it? Well, the main
point was to illustrate further aspects of the adv3Lite library which
you may find useful, along with some of the techniques for employing
them to implement parts of a game. It\'s the general principles you need
to learn, not the specific solutions. That said, you will find it easier
to learn and apply the general principles if you become familiar with
the basic tools the adv3Lite library supplies. That doesn\'t necessarily
mean learning every last detail and wrinkle of each and every part of
the library, but it does mean acquiring a general feel for what\'s in
the library together with a command of the most commonly used parts and
a knowledge of where to find more information about the rest.

So, what are the main adv3Lite features we\'ve encountered in this
chapter?

## Action Handling

First and foremost we\'ve gone quite a bit deeper into action handling,
that is customizing what particular actions do on particular objects.
We\'ve by no means covered the whole of it yet, and we\'ll return to the
topic in Chapter 10, but we have gone further than before. In particular
we\'ve seen how you can use a **check()** method to stop an action
proceeding, as well as an **action()** method to define what happens if
the action does go ahead. All a [check()]{.code} method needs to do in
order to prevent an action is to display some text, usually text that
explains why the action can\'t or won\'t go ahead. To define a check
method or an action method you create a block with
[dobjFor(*ActionName*)]{.code} or [iobjFor(*ActionName*)]{.code}
followed by opening and closing braces (usually several lines apart) and
then place your check() and action() code between the braces, like so:

::: code
    dobjFor(Turn)
    {
        check()
        {
           if(hasBeenTurned)
              "You've already turned the valve. ";
        }
        
        action()
        {
            "Straining with all your might you manage to turn the valve all
             the way until the hissing stream of steam and water issuing 
             from the pipe finally stops. ";
             
             hasBeenTurned = true;
        }
    }
:::

Although the adv3Lite library does its best to provide standard handling
for as many actions as possible, this can only take you so far, as most
games involve at least some unusual actions on at least some unusual
objects, like the rather complicated computer we implemented in the
Security Centre. Confidence in writing action handlers is therefore a
skill you will need to acquire sooner or later if you\'re going to make
any real progress in writing Interactive Fiction (in whatever authoring
system you use).

In adv3Lite [check()]{.code} and [action]{.code}() are only two of the
six sections that can be defined in an action handler, the others being
[preCond]{.code}, [remap]{.code}, [verify()]{.code} and
[report()]{.code}. If you want the full story right away you can find it
in the [Action Results](../manual/actres.htm) section of the *adv3Lite
Library Manual*, or if you want the absolute complete full story you can
read the entire [Part IV: Actions](../manual/action.htm) part of the
manual. Alternatively you may prefer to wait until you\'ve been exposed
to a bit more of the mechanics of action handling in Chapter Ten of this
tutorial.

## Nested Objects

Another new feature we encountered (actually a feature of the TADS 3
language rather than that of the adv3Lite library) is **anonymous nested
objects**. This is a form of syntax that allows us to define one object
(the nested anonymous object) directly on the property of another
object, like so:

::: code
    enclosingObject: Thing 'whatsit'
       "This is just a demonstration object. "
       
       bulk = 10
       
       someProperty: Thing 'nested thing'
       {
           desc = "I am nested in <<lexicalParent.theName>>, which
           has a bulk of <<lexicalParent.bulk>>. My own bulk is
           <<bulk>>. "
           
           subProperty = 'foo'
           
           bulk = 4
           
       }
    ;
:::

In this example, the object defined on the [someProperty]{.code}
property of [enclosingObject]{.code} is *anonymous* because it has no
name of its own and *nested* because it is defined within the definition
of another object, here [enclosingObject]{.code}. We can get a
*reference* to this object with the expression
[enclosingObject.someProperty]{.code}, but this is not the name of the
object. Indeed, we could assign some other value to
[enclosingObject.someProperty]{.code} during the course of the game, and
then the reference to the anonymous object would be lost.

If we need to refer to the enclosing object or a property of the
enclosing object from within the nested object, we should use the
pseudo-variable [lexicalParent]{.code} to refer to it. Look carefully at
the desc property of the nested object above. What do you think it will
display? If you think it should display \"I am nestedin the whatsit,
which has a bulk of 10. My own bulk is 4.\" you\'ve got it right. Pay
close attention to the difference between referring to [bulk]{.code} and
[lexicalParent.bulk]{.code} in this context. In writing your own code
forgetting to use [lexicalParent]{.code} to refer to a property of an
enclosing object when that\'s what you mean to do is a very easy mistake
to make.

If you\'re still at all uncertain about the workings of anonymous nested
objects, take a look at the section on \"Object Definitions\" in Part
III of the *TADS 3 System Manual*. It\'s worth getting to grips with
them because they can be very useful in your own code. They are
particularly useful:

1.  For defining abstract TravelConnectors (see below) directly on the
    direction properties of rooms.
2.  For setting up Multiple/Complex Containment by defining SubComponent
    objects directly on the remapXXX properties of Things.

## Multiple Containment

Strictly speaking an adv3Lite object can only implement one type of
containment (In, On, Under or Behind) at a time, but we can get round
that limitation by making it appear to the player that a particular
object has things in, on, under and behind it (or some subset of those
four containment positions). We do so by defining anonymous nested
objects of the **SubComponent** class directly on the **remapIn**,
**remapOn**, **remapUnder** and **remapBehind** properties of the Thing
in question, for example:

::: code
    chest: Heavy 'large chest'
       remapIn: SubComponent
       {
          isOpenable = true
          bulkCapacity = 30
       }
       
       remapOn: SubComponent {}
       remapUnder: SubComponent {}
       remapBehind: SubComponent {}
    ;
:::

Note that if we want the chest to be openable or lockable we need to
define these properties on the remapIn object, not directly on the chest
itself. We don\'t need to define the contType of a SubComponent since
the library can work this out from the property to which it is attached.
We also don\'t ever need to define the vocab, name or desc properties of
a SubComponent, since the player never refers to such objects directly
and when the game needs a name for them it automatically uses the name
of the enclosing object. Also, of course, we don\'t need to define all
four remapXXX properties on any given object; we simply define the ones
we want.

The effect of a definition like the one above is that commands like LOOK
IN CHEST, PUT SOMETHING IN CHEST, OPEN CHEST, CLOSE CHEST, LOCK CHEST,
UNLOCK CHEST, LOCK CHEST WITH SOMETHING and UNLOCK CHEST WITH SOMETHING
are all automatically redirected to the SubComponent defined on the
remapIn property. PUT SOMETHING ON CHEST is redirected to the remapOn
SubComponent, LOOK UNDER CHEST and PUT SOMETHING UNDER CHEST are
redirected to the remapUnder SubComponent, and LOOK BEHIND CHEST and PUT
SOMETHING BEHIND CHEST are redirected to the remapBehind SubComponent.

To define the starting location of an object as being with a
SubComponent (rather than in the master object) we can use the +
notation as usual, but we then also have to use the [subLocation]{.code}
property to provide a pointer to the remapXXX property for the
SubComponent we wish to use. For example, if we wanted the chest to
start off with a book inside it, a plate on top of it, a coin underneath
it, and pen behind it we\'d define these four objects thus:

::: code
    + book: Thing 'book'
      subLocation = &remapIn
    ;
      
    + plate: Surface 'plate'
      subLocation = &remapOn
    ;

    + coin: Thing 'coin'
      subLocation = &remapUnder
    ;

    + pen: Thing 'pen'
      subLocation = &remapBehind
    ;  
:::

If we omitted to define these [subLocation]{.code} properties then we\'d
effectively have made the book, plate, coin and pen parts or components
of the chest.

Sometimes we want the associating containing object to be explicitly
distinct from the main object, such as a desk with a drawer. In which
case we can point the appropriate remapXXX property to the separate
container, for example:

::: code
    desk: Fixture 'desk'
      "It has a single drawer. "
      
      remapIn = drawer
      remapOn: SubComponent { }
    ;

    + drawer: OpenableContainer, Fixture 'drawer'
       bulkCapacity = 8
    ;
:::

With this set-up, LOOK IN DESK, OPEN DESK, CLOSE DESK, PUT SOMETHING IN
DESK, LOCK DESK etc, will behave exaclty like LOOK IN DRAWER, OPEN
DRAWER, CLOSE DRAWER, PUT SOMETHING IN DRAWER, LOCK DRAWER, etc.

Finally, you need to use multiple containment whenever you have an
openable container that also has an external component, such as a lock
or handle, otherwise what was meant to be an external component will end
up shut up inside the container when it\'s closed. You must be careful
NOT to do this:

::: code
    suitcase: OpenableContainer 'suitcase;;case' //DON'T DO THIS!
      "It has a combination lock. "
      lockability = indirectLockable
      isLocked = true
    ;

    + comboLock: Fixture 'combination lock'
     ...
    ;
:::

Instead, you need to do this:

::: code
    suitcase: Thing 'suitcase;;case' 
      "It has a combination lock. "
      
      remapIn: SubComponent
      {
         isOpenable = true
         lockability = indirectLockable
         isLocked = true
      }
    ;

    + comboLock: Fixture 'combination lock'
     ...
    ;
:::

You can read more about [remapXXX properties and Multiple
Containment](../manual/thing.htm#remapxxx) in the *adv3Lite Library
Manual*.

## [Hiding Things]{#hiding}

Often the only reason for giving something a remapUnder or remapBehind
property is because we want the player character to discover something
under or behind the object when s/he looks there. To deal with this
common case more simply, and to ensure that the supposedly hidden
objects remain hidden until the player explicitly looks for them under
or behind something else, instead of creating SubComponents on the
remapUnder and remapBehind properties, you can simply list the items you
want to start out hidden on the **hiddenUnder** and **hiddenBehind**
properties. For example, if what we really wanted was for the coin and
the pen to be hidden under and behind the chest until the player
explicitly looks under and behind it, we should probably have written:

::: code
    chest: Heavy 'large chest'
       remapIn: SubComponent
       {
          isOpenable = true
          bulkCapacity = 30
       }
       
       remapOn: SubComponent {}
       hiddenUnder = [coin]
       hiddenBehind = [pen]
    ;

    + book: Thing 'book'
      subLocation = &remapIn
    ;
      
    + plate: Surface 'plate'
      subLocation = &remapOn
    ;

    coin: Thing 'coin'
    ;

    pen: Thing 'pen'
    ;  
:::

Note that in this case the coin and the pen start out with no location
at all (i.e. a location of nil), since they\'re off stage until the
player discovers them. An object that\'s discovered under or behind
another one in this way is automatically taken by the player character
if it\'s discovered under or behind something non-portable (like the
chest), or otherwise moved into the location of the object being looked
under or behind if the latter is portable (like a rug or blanket, say).

You can also use **hiddenIn** in exactly the same way, for example to
hide a magic glove in a pile of clothes, or perhaps to conceal an object
in a large container that doesn\'t reveal all its contents until it has
been searched (a small coin in a large vase for example). There is no
hiddenOn property, however, since it is hard to imagine how one object
on top of another could ever be concealed by it.

You can override [canPutInMe]{.code}, [canPutUnderMe]{.code} and
[canPutBehindMe]{.code} to true to allow items to be put in, under or
behind objects that lack the appropriate remapXXX SubComponent, in which
case the objects put in, under, or behind will be moved off stage and
added to the hiddenIn, hiddenUnder or hiddenBehind list. You can control
how much is hidden in, under or behind an object by these means by use
of the properties [maxBulkHiddenIn]{.code}, [maxBulkHiddenUnder]{.code}
and [maxBulkHiddenBehind]{.code}. However, if you find yourself making
much use of all these properties you should ask yourself whether you
really ought to have implemented the corresponding remapXXX
SubComponents instead, since the main purpose of [hiddenIn]{.code},
[hiddenUnder]{.code} and [hiddenBehind]{.code} is to provide a quick and
easy means of hiding objects for subsequent discovery, not to provide an
alternative mechanism for multiple containment in general, unless you
really do need the player character to be able to *hide* objects in,
under or behind other objects.

You can read more about [Hiding Things](../manual/thing.htm#hidden)
using the hiddenXXX properties in the *adv3Lite Library Manual*.

## Bulk

It generally isn\'t an objective of Interactive Fiction to provide a
totally realistic simulation of the real world, but it is usually
desirable to avoid stretching player credulity too far, and players\'
credulity is likely to be unduly stretched if it proves possible to put
large objects inside small ones, or a seemingly infinite number of
objects in a finite container. To help game authors avoid such obvious
nonsenses, the adv3Lite library provides every object with a **bulk**
property and a **bulkCapacity** property. Their use is conceptually very
straightforward: one object can not be placed in/on/under/behind another
if doing so would exceed the second object\'s bulkCapacity, i.e. if
moving the first object into the second would cause the total bulk
contained within the second object to become larger than its
bulkCapacity.

There is also **maxSingleBulk** property which by default is the same as
the [bulkCapacity]{.code}. This could be set smaller than the
bulkCapacity to simulate an object with a restricted opening, such as a
bottle with a narrow neck, or any other such limitation that requires
individual objects being placed inside another to be smaller than the
total bulkCapacity of that other object.

The adv3Lite capacity supplies no bulk scale by default. It is up to
game authors to decide what gradations of bulk they need. Bear in mind
that the smallest bulk an object can have (other than zero, meaning no
bulk at all) is 1, so you need to decide whether the largest container
in your game is more like ten, a hundred or a thousand times the bulk of
the smallest object. Absolute precision is not required, but if you\'re
in any doubt it\'s probably better to go for a larger scale than to find
halfway through your game that you haven\'t allowed for enough
gradations so that you\'re forced to go back and change all the bulks
and bulkCapacities you\'ve defined so far.

Note that the value of an object\'s [bulk]{.code} property is usually
only relevant if the object is portable (and so can be placed in, on,
under or behind other objects with a finite bulkCapacity). You don\'t
normally have to worry about the bulk of tables, houses and mountains,
and other such large objects that will never be moved around. Indeed,
the default bulk of all objects is zero. This is convenient when you
come to define Fixture-like objects that are components of other
objects, since you don\'t normally want such components to contribute
separately to their master object\'s bulk or to use up part of its
bulkCapacity.

Actors, including the player character, also have a bulkCapacity which
limits how much bulk they can carry at any one time. We saw an example
of this in *The Adventures of Heidi* in which the player character was
given a bulkCapacity of one so that she could only carry one thing at a
time. Normally, though, it is better to give the player character an
absurdly generous (i.e. very large) bulkCapacity, since players will be
much more forgiving of the resulting lack of realism than they will be
of being obliged to perform complex and probably tedious inventory
management tasks resulting from a limited carrying capacity. Unless you
can make inventory management tasks an interesting ingredient of your
game, or they are truly vital to your plot or puzzle structure, they are
best avoided.

You may wish to read more about [Bulk and
BulkCapacity](../manual/thing.htm#bulk) in the *adv3Lite Library
Manual*.

## Topics and TopicEntries

We encountered Topics and TopicEntries in connection with the computer
in the Security Area, which we implemented as a **Consultable**, so that
the player character could look things up on it. To implement the topics
that could be looked up on the computer we used a number of
**ConsultTopic** objects. A ConsultTopic is a particular kind of
**TopicEntry**; although Consultable objects may not be all that common
in Interactive Fiction, there are other kinds of TopicEntry, notably
those that are used to implement conversations with Non-Player
Characters (other actors in the story), as we shall see in Chapter 11.

The player character can certainly look up, talk about or think about
objects that are defined elsewhere in the game, but s/he may also want
to refer to things that aren\'t implemented in the game world, or more
abstract ideas such as love, life, the rate of inflation or population
statistics. For this kind of topic --- something that may be talked
about, thought about, or looked up, but not manipulated as a physical
object within the game --- we can define Topic objects, for example:

::: code
    tLove: Topic 'love';
    tLife: Topic 'life';
    tInflationRate: Topic 'rate[n] of inflation';
    tPopulationStats: Topic 'population statistics';
:::

Note that starting the object names of these Topics with t is simply a
convention; you don\'t have to adopt it if you don\'t want to, but it\'s
quite useful to adopt something of the sort to distinguish Topic objects
from Things when they appear elsewhere in game code.

Note too that the property we\'re defining on the Topic template in the
above examples is the [vocab]{.code} property, which works in precisely
the same way as it does on a Thing. This means, among other things, that
the above definitions gives each of the Topic objects a name property as
well as the vocabulary words which can be used to refer to it. This may
not seem all that useful here, but it does have a potential use when
Topics are used in conversation, as we shall see in Chapter Eleven.

Earlier in this chapter we also encountered a *literal*, which is
superficially a little like a Topic, in that a command that expects a
literal and a command that expects a Topic will both accept whatever the
player types in the appropriate slot (within reason): you can both LOOK
UP FOOBAR ON COMPUTER and TYPE FOOBAR ON COMPUTER, and the game will
happily accept either command, although in the first case FOOBAR is
treated as a Topic and in the second it\'s treated as a literal.

The difference, which at first may seem quite a subtle one, is that a
literal is simply an arbitrary piece of text, which we can access via
the pseudo-global variable **gLiteral**, while a Topic is an object.
Topics are generally used in contexts where although the player could
type anything, we\'ve actually defined responses for a finite set of
expected responses, some of which could also be for Things implemented
in the game, whereas literals are used in contexts where the player
character is envisaged as free to write or type anything (and where we
may be looking for one particular string of text, such as a password).
So, in WRITE FOO ON SOMETHING, TYPE FOO ON SOMETHING and ENTER FOO ON
SOMETHING, FOO is a literal, whereas in LOOK UP FOO ON SOMETHING, THINK
ABOUT TOO or TALK ABOUT FOO, FOO is a Topic.

To use a Topic (or Thing) in conjunction with a TopicEntry (such as a
Consultable) we assign it to the TopicEntry\'s [matchObj]{.code}
property and the corresponding response to its [topicResponse]{.code}
property, which we can do via a conveniently defined template:

::: code
    + ConsultTopic @tLife
       "According to Dodgypedia life is hard to define, but is generally regarded
        as being preferable to the alternative. "
    ;
:::

The matchObj property can also be defined as a list of Topics (and/or
Things), in which case the TopicEntry will be matched if any of the
items in the matchObj list are requested:

::: code
    + ConsultTopic [tLife, tLove]
       "According to the dictionary of hard-nosed economics, such imponderables
        are not worth factoring into one's calculations. "
    ;
:::

The full story on [Topics](../manual/topic.htm) and
[TopicEntries](../manual/topicentry.htm) can be found in the *adv3Lite
Library Manual*, which you might want to consult at this point, so the
same information need not be reproduced in all its detail here.

## Abstract TravelConnectors

In previous chapters we encountered several examples of concrete
**TravelConnector** objects, such as the StairwayUp used to implement
the climbable tree in *The Adventures of Heidi*, but the current chapter
was the first to make use of abstract ones. The purpose of an abstract
TravelConnector is to add some condition and/or side-effect to travel
from one place to another. In particular you can use the
**canTravelerPass(traveler)** method to define when the traveler is or
is not allowed to pass, the **explainTravelBarrier(traveler)** method to
explain why the traveler is not allowed to pass (if he or she isn\'t),
and the **travelDesc** method to display a message or carry out any
other side-effects of traveling. You also need to define the
**destination** property to define where the TravelConnector leads to.
For the full story, including all the other methods and properties of
TravelConnector, see the section on [Travel Connectors and
Barriers](../manual/travel.htm) in the *adv3Lite Library Manual*.

There\'s usually no need to define an abstract TravelConnector as a
distinct defined object. The most normal way to define one is as an
anonymous nested object on the direction property of a room, e.g.:

::: code
    meadow: Room 'Meadow'
      "An extremely muddy path leads off to the south. "
      
      south: TravelConnector
      {
          destination = muddyPath
          
          canTravelerPass(traveler) { return boots.wornBy == traveler; }
          explainTravelBarrier(traveler)
          {
              "There's no way you're going to set off through that thick, squelchy
              mud without a pair of sturdy waterproof boots. ";
          }

          travelDesc = "The mud squelches noisily underfoot, threatening to steal your
            boots, as you set off down the path. "
       }
    ;   
:::

## Scenes

The last main feature introduced in this chapter was the **Scene**.
While it\'s almost certainly the case that Scenes don\'t allow you to do
anything you couldn\'t manage without them by some other means, they do
provide a convenient mechanism for structuring the story and controlling
turning points in the plot. A Scene is basically an object that becomes
active when its **startsWhen** property becomes true, and remains active
until its **endsWhen** property becomes true. When it starts its
**whenStarting** method is called, and when it ends its **whenEnding**
method is called, thus allowing you to make whatever changes to the
state of the game are appropriate to the starting and ending of the
Scene. Moreover, while a Scene is active its **isHappening** property
will be true, allowing you to make other parts of the game code
dependent on a particular Scene being in progress or not. You can also
test whether a Scene has ever been started (whether it\'s ended or not)
by seeing whether its **startedAt** property is non-nil.

There are a number of other Scene properties and methods, and for the
full story you should read the Section on [Scenes](../manual/scene.htm)
in the *adv3Lite Library Manual*. But we shall in any case be making
further use of Scenes in the next couple of chapters, so you\'ll have
plenty more opportunity to see how they can be used in practice.

## Travel Notifications

Just before travel is about to take place, the **beforeTravel(traveler,
connector)** method is called on every object in scope, where *traveler*
is the object that\'s about to travel and *connector* is the connector
via which the traveler is about to travel (often this will simply be the
room to which the traveler is trying to go). Conversely, just after
travel has taken place the **afterTravel(traveler, connector)** method
is called on every object that\'s now in scope (which will generally be
a different set of objects in the new location). The
**beforeTravel(traveler, connector)** method therefore provides another
means of preventing travel under certain conditions (as an alternative
to using a TravelConnector), and of course a Doer would provide yet
another method. Which you use on any particular occasion is largely a
matter of taste and convenience. In the example in the \'Making a
Scene\' section it was logical and convenient to use a
[beforeTravel()]{.code} method on the criminalPassengers object because
(a) it\'s the presence of these passengers that inhibits the player
character from travelling past them to the rear of the plane and (b)
this inhibition is automatically put in place when the criminal
passengers are moved into the front of the plane.

You can read more about [Reacting to Travel](../manual/react.htm#travel)
in the *adv3Lite Library Manual*.

## Conclusion

This chapter has introduced a number of new tools and features which,
while being a bit more advanced than those covered earlier, are well
worth getting to know so that you can employ them in your own games,
although their particular application in your work is likely to be
different from the examples illustrated in this chapter. If you\'re
still feeling a little uncertain about any of them, now might be a good
idea for following up the reading suggestions given just above before
moving on to the new material to be introduced in the next chapter.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Schemes and
Devices](schemes.htm){.nav} \> Recapitulation\
[[*Prev:* Making a Scene](scene.htm){.nav}     [*Next:* Cockpit
Controls](cockpit.htm){.nav}     ]{.navnp}
:::
