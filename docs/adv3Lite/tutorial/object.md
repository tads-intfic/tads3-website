::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Reviewing the
Basics](reviewing.htm){.nav} \> Object Definitions\
[[*Prev:* Reviewing the Basics](reviewing.htm){.nav}     [*Next:* Object
Containment](containment.htm){.nav}     ]{.navnp}
:::

::: main
# Object Definitions

As we\'ve seen a large part of writing a game in adv3Lite (or indeed in
TADS 3) consists of defining objects. You will spend such a large
proportion of your time doing this in your own games that it\'s worth
going over the business of defining objects a little more thoroughly.

## Physical Objects and Programming Objects

First, we need to bear in mind two different senses of the word
*object*. First, there\'s the ordinary, every day sense of *physical
object*, meaning something like a chair or a table or a rock or a ball
or a house or a wall or a tree or\... well, I\'m sure you get the idea.
Second there\'s the special sense of programming object, meaning an
entity in your program that\'s a container or binder for a related
bundle of code (i.e. programming instructions) and data. In this section
we\'re concerned with objects in this second sense, but confusion is
possible since in TADS 3 (as in several other IF languages) objects in
this second, programming, sense are frequently used to represent objects
in the first sense, so for example if you have a red handbag in your
game it might be represented in your adv3Lite code as a programming
object called redHandbag. That said, you should be aware that in TADS 3
programming objects are also used for other purposes than representing
physical objects in your game world.

## Objects and Classes

Every object belongs to one or more classes. In TADS 3 class definitions
and object definitions are actually very similar, but they perform
different functions. An object represents a particular item; a class is
like a mould or template for producing particular items. For example,
your dog Fido and your neighbour\'s dog Rover might be particular
instantiations of the Dog class. Rather like the Platonic ideal of a
Dog, the Dog class exists nowhere in the real world as a physical
entity, but defines the properties and behaviour that are common to all
dogs. Particular instantiations of the Dog class, the fido object and
the rover object, say, can then customize or *override* the definitions
on the Dog class, or add additional methods and properties of their own,
to mark out Fido and Rover as particular dogs with their individual
differences (as well as the common canine behaviour they inherit from
the Dog class).

Just as objects can belong to classes, so can classes. For example the
Labrador class might belong to the Dog class which in turn belongs to
the Mammal class which in turn belongs to the Animal class. Labrador is
then said to be a *subclass* of Dog or, more or less equivalently, to
*inherit* from Dog, while Dog is the *superclass* or *parent class* of
Labrador. The inheritance relationship is transitive, so that Labrador
is also a subclass of Mammal and Animal and inherits (indirectly, via
Dog) from both.

In TADS 3 all objects ultimately inherit from the [object]{.code} class.
All objects that represent physical objects in your game also inherit
from the Thing class (an indirect subclass of object), or else from a
(direct or indirect) subclass of Thing. Every physical location in your
game is represented by an object of the Room class (or a subclass of
Room); the Room class is itself a subclass of Thing.

TADS 3, and hence adv3Lite, supports *multiple inheritance*, which means
that an object (or class) can inherit from more than one superclass.
While you don\'t have to worry about this just yet, you will be
encountering such *multiple inheritance* later on in this tutorial, and
we\'ll saying a bit more about inheritance in general later in this
chapter.

## Defining Objects

A typical object definition may be divided (for immediate purposes) into
a *header* and a *body*. The header consists of the object name (that is
the programmatic name of the object, the name by which it is identified
and referred to in your program code) followed by a colon followed by
the class to which it belongs, or by a list of the classes to which it
belong, for example:

::: code
    redBall: Thing

    stoneAltar: Surface, Fixture
:::

The body of the object definition then consists of zero or more property
definitions plus zero or more method definitions, either terminated by a
semicolon or enclosed in curly braces. For example:

::: code
    redBall: Thing
       vocab = 'red ball;; round'
       desc = "It's just a round red ball. "
       
       bounces = 0
       
       doBounce()
       {
          "The red ball bounces back up when you drop it. ";
          bounces = bounces + 1;
       }
    ;
:::

Or equivalently:

::: code
    redBall: Thing
    {
       vocab = 'red ball;; round'
       desc = "It's just a round red ball. "
       
       bounces = 0
       
       doBounce()
       {
          "The red ball bounces back up when you drop it. ";
          bounces = bounces + 1;
       }
    }
:::

In what follows we shall normally use the first of these forms (with the
terminating semicolon, rather than the enclosing braces), although
we\'ll eventually encounter a few cases where we have to use the second.

In both the examples above, [vocab]{.code}, [desc]{.code} and
[bounces]{.code} are all *properties*, while [doBounce()]{.code} is a
*method*. A *property* is a member of an object that holds a piece of
data (such as a number, some text, or a reference to another object). As
in the examples above it is defined using the property name, followed by
an equals sign, followed by the value of the property (or, at least, the
initial value of the property when the game begins, since the value of
properties can change during the course of the game). A *method* is a
block of code (i.e. a set of instructions) that\'s executed when the
method in question is invoked (or called --- the two mean the same
thing). We\'ll go into more detail about methods in a later section of
this chapter. For now, note that we *don\'t* use an equals sign after a
method name when defining (or overriding) a method on an object.

There is also a short-form method definition that looks like a property
definition:

        property-name = (expression)

For example:

::: code
        isListed = (!isFixed)    
        
        momentum = (mass * velocity)
:::

These definitions are equivalent to:

::: code
     
      isListed()  { return !isFixed; }

      momentum()  { return mass * velocity; }  
:::

Don\'t worry if you don\'t fully understand what these methods mean yet;
that will become clearer when we go into more detail on methods later in
this chapter. The thing to note for now is simply that this is another
(and arguably hybrid) way of defining a property that acts like a
method, or rather a method that looks like a property.

The only parts of an object definition that are obligatory are the class
list and the terminating semi-colon (or braces). The following is a
perfectly legal (though almost certainly pointless and useless) object
definition:

::: code
    Thing;
:::

This creates an anonymous object of class [Thing]{.code} with all the
default methods and properties of the [Thing]{.code} class and nothing
else. Although this particular example would be completely pointless,
there are other occasions on which anonymous objects can be useful.
We\'ll encounter some of them in due course.

## Templates

As we saw in the previous chapter, object definitions can be abbreviated
via use of *templates*. A template is simply a way of allowing you to
define certain properties without explicitly naming which properties you
mean, because the template instructs the compiler to expect certain
kinds of value in a particular order. The two templates you will
probably use most frequently when writing games with adv3Lite are those
for Thing and Room, so these are the two you need to become totally
familiar with. (Later on we\'ll be meeting a whole lot of templates for
use with the conversation system, but we don\'t need to worry about that
for now).

The template for the *Thing* class is basically:

::: code
       'vocab' @location? "desc"?
:::

The question-mark denotes an optional element. This means that when
we\'re defining a Thing and we\'re using its template, the first
property we must define is its vocab property, simply by supplying a
single-quoted string. We can then, if we wish, define the starting
location of the object by using an @ sign directly followed by the
programmatic name of the Room or other object in which the Thing we\'re
defining starts out (but we can leave this part of the template out if
we wish). We can then define the desc property of the Thing by writing
it between double quote-marks (but we can leave this out too if we
wish). Thus, using the Thing template we could define the redBall object
used as an example above in any of the three following (functionally
equivalent) ways:

::: code
    redBall: Thing'red ball;; round'
       "It's just a round red ball. "
       
       bounces = 0
       
       doBounce()
       {
          "The red ball bounces back up when you drop it. ";
          bounces = bounces + 1;
       }
    ;
:::

Or equivalently:

::: code
    redBall: Thing
    {
       'red ball;; round'
       "It's just a round red ball. "
       
       bounces = 0
       
       doBounce()
       {
          "The red ball bounces back up when you drop it. ";
          bounces = bounces + 1;
       }
    }
:::

Or equivalently:

::: code
    redBall: Thing 'red ball;; round'
     "It's just a round red ball. "
     {
       bounces = 0
       
       doBounce()
       {
          "The red ball bounces back up when you drop it. ";
          bounces = bounces + 1;
       }
    }
:::

In other words, if we define an object using the brace notation along
with a template, we can either put the template properties immediately
before the opening brace or immediately after it. In what follows,
however, we shall mainly stick to the first of the three forms above
(with the terminal semicolon in place of braces).

We\'ve already met the Room template in the form:

::: code
    'roomTitle' "desc"?;
:::

So for example, we can define the starting location of The Adventures of
Heidi like this:

::: code
    beforeCottage: Room 'In front of a Cottage'
        "You stand outside a cottage. The forest stretches east. "
        
        east = forest
    ;
:::

Here, \'In front of a Cottage\' is thus the [roomTitle]{.code} property
of beforeCottage, and \"You stand outside a cottage. The forest
stretches east. \" is its desc property. There\'s also a second form of
the Room template which looks like this:

::: code
    'roomTitle' 'vocab' "desc"?;
:::

Which would allow us to define the vocab property of a Room as well, for
example:

::: code
    beforeCottage: Room 'In front of a Cottage' 'front of the cottage'
        "You stand outside a cottage. The forest stretches east. "
        
        east = forest
    ;
:::

This would give the beforeCottage room a display name (note, this is
quite separate from the roomTitle that appears at the head of the room
description) of \'front of the cottage\' and would allow the player to
refer to it as such. If that doesn\'t make too much sense right now,
don\'t worry, because we\'ll be coming back to it in Chapter Seven (and
not until then).

## Referring to Properties and Methods

It\'s possible, and often extremely likely, that the same property or
method name will be used on more than one object. For example if we also
defined a blueBall, a greenBall and a yellowBall, they might all have
vocab, desc and bounces properties, and they might all have their own
version of a method call doBounce(). How then do we make sure the
compiler knows which one we mean when we refer to a desc property or to
the doBounce() method?

The answer is that we qualify the property or method name by using the
dot notation. This means that to refer to the [desc]{.code} property of
[redBall]{.code} we\'d write [redBall.desc]{.code}, while to refer to
the [doBounce()]{.code} method of [yellowBall]{.code} we\'d write
[yellowBall.doBounce()]{.code}.

The one exception to this is when we want to refer to a method or
property of an object from a method or property of the same object. In
that case, there\'s no need to qualify the method or property name,
since the compiler will assume that we\'re talking about the same
object. That\'s why we can write:

::: code
    redBall: Thing 'red ball;; round'
       "It's just a round red ball. "
       
       bounces = 0
       
       doBounce()
       {
          "The red ball bounces back up when you drop it. ";
          bounces = bounces + 1;
       }
    ;
:::

Rather than:

::: code
    redBall: Thing 'red ball;; round'
       "It's just a round red ball. "
       
       bounces = 0
       
       doBounce()
       {
          "The red ball bounces back up when you drop it. ";
          redBall.bounces = redBall.bounces + 1; //There's no need for this!
       }
    ;
:::

Indeed, in this kind of case, the second form is best avoided.

In some cases, an object may need to refer to itself, in which case we
should use the special keyword [self]{.code}, for example, if the nest
needed to test whether the bird was inside it we might write:

::: code
    + nest: Thing 'bird\'s nest; carefully woven; moss twigs'
        "The nest is carefully woven of twigs and moss. "
        
        contType = In   
        bulk = 1
        
        afterAction()
        {
           if(bird.isIn(self))
             /* do something appropriate here */
        }
    ;
:::

## Class Definitions

We noted above that defining a class is much like defining an object.
The main difference is when defining a class, you begin the definition,
surprisingly enough, with the word [class]{.code}. It\'s also
conventional (though not strictly necessary) to begin the name of a
class with a capital letter.

For example, in the Heidi game we developed above, we had a nest you
could put things *in* and a branch you could put things *on*. We
implemented these as Things whose [contType]{.code} properties were
respectively [In]{.code} and [On]{.code}. If we had lots of things in
our game we wanted to put things in and on we could have created custom
classes for the purpose (though in practice most class definitions would
probably be more complex than this):

::: code
    class Surface: Thing
       contType = On
    ;

    class Container: Thing
       contType = In
    ;   
:::

This would make a Surface just like a Thing except that you could put
things on it, and a Container just like a Thing except that you could
put things in it. We could then have defined the nest and the branch
thus:

::: code
     
    + nest: Container 'bird\'s nest; carefully woven; moss twigs'
        "The nest is carefully woven of twigs and moss. "
               
        bulk = 1
    ;

    ...

    + branch: Surface 'wide firm bough; flat; branch'
        "It's flat enough to support a small object. "
            
        isListed = true
        contType = On
        
        afterAction()
        {
            if(nest.isIn(self))
                finishGameMsg(ftVictory, [finishOptionUndo]);
        }
    ;   
:::

In fact, we could have done this anyway, since the adv3Lite already
defines a [Surface]{.code} class and a [Container]{.code} class along
these lines (we won\'t use them in the Heidi game though; instead we\'ll
wait till Chapter 6). To give another example (which isn\'t in the
library), we might have a game with a lot of Surfaces that are also
fixed in place (like the branch), since the kinds of things people put
things on (such as desks and tables and shelves) often aren\'t portable.
We might then feel it useful to define a FixedSurface class which we
could define in a number of ways:

::: code
    class FixedSurface: Thing
       isFixed = true
       contType = On
    ;

    class FixedSurface: Surface
       isFixed = true
    ;

    class Fixture: Thing
       isFixed =  true
    ;

    class FixedSurface: Fixture, Surface
    ;
:::

Of these, the last is probably the best (given that the adv3Lite library
does in fact already define a [Fixture]{.code} class), since it makes
the relationships between the classes more explicit. In particular, if
we want to test whether something is a [Fixture]{.code} or a
[Surface]{.code}, defining [FixedSurface]{.code} by the last method will
ensure that we included FixedSurfaces among the things that count as
such.

## Further Reading

We\'ve covered quite a lot of ground in this section of the chapter,
even if some of the concepts are ones we\'ve met before. If you\'re not
feeling entirely clear on it all, perhaps the first additional thing to
read would be the article \"Object-Oriented Programming Overview\" in
the *TADS 3 Technical Manual*. For the full story on object definitions
you could read the section on \"Object Definitions\" in the [TADS 3
System Manual](../sysman.htm). You might not want to look at it right
away, however, as there\'s rather more information there than you really
need right now, and if you\'re new to this kind of programming there\'s
probably quite enough for you to take in already. But if you do want a
succinct summary of what we\'ve just covered plus some more advanced
information on objects, that\'s the place to go.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Reviewing the
Basics](reviewing.htm){.nav} \> Object Definitions\
[[*Prev:* Reviewing the Basics](reviewing.htm){.nav}     [*Next:* Object
Containment](containment.htm){.nav}     ]{.navnp}
:::
