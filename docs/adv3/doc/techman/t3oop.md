---
layout: docs
---


<img src="topbar.jpg" data-border="0" />





<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="fund.html" class="nav">Fundamentals</a> \> Object-Oriented
Programming Overview  
<span class="navnp"><a href="t3des2.html" class="nav"><em>Prev:</em> IF Design: In Theory</a>
    <a href="t3inout.html" class="nav"><em>Next:</em> Some Common
Input/Output Issues</a>     </span>





# Object-Oriented Programming Overview

When TADS first appeared in the late 1980s, the software industry had
just discovered the words Object Oriented, and were in the process of
turning them into just another meaningless buzzword through saturation
marketing. But even though the marketers spent years applying the term
to anything and everything, the concept has survived the years in
remarkably good shape. In fact, as C++ and Java and Python have taken
over the mainstream of computer languages, Object-Oriented Programming
has become so commonplace that we practically take it for granted now.

This chapter attempts to explain the basic ideas of Object-Oriented
Programming, and why we think it's a good fit for writing IF. If you've
done any programming, especially in a language like C++, Java, or
Python, or even "scripting" languages like Visual Basic or Javascript,
you probably already have a good grounding in the basics of OOP. If TADS
3 is your first programming language, though, you might not have heard
of this idea before, in which case this chapter is for you. This section
isn't "required reading" in learning TADS 3, but it might help you
understand some of the general ideas that influenced the design of the
system.

## A matter of perspective

Object-oriented languages are similar in many ways to "procedural"
languages such as C and Pascal, but approach problem-solving from a
different perspective. Because of the shift in viewpoint,
object-oriented programming is effective in many different kinds of
applications, but it's particularly good for simulations. And of course,
a text adventure is fundamentally a simulation.

What is this "different perspective" of OOP? Basically, it's the view
that you take of data. In a traditional language like C, you write a
series of procedural steps that are applied to a collection of data;
code and data are firmly separated. In object-oriented programming, on
the other hand, you partition a problem into a set of entities, called
*objects*; each object contains both the data and the code that
describes its state and behavior. In a simulation, an object in the
program usually corresponds directly to an object being modelled.

## Bouncing Balls

Consider a simulation of a physics problem involving bouncing balls of
various kinds. In a traditional language, we'd probably create an array
of "structures" (or "records") representing the balls; each record would
store information on a ball's position, mass, velocity, and so on. We'd
identify each ball by its index in the array. We'd write a subroutine
(named `bounce`, say) that would take a ball number as a parameter, and
would apply the appropriate changes to the ball's data.

In contrast, an object-oriented version of the program would model each
ball with an "object." As in the data structure in the traditional
language, each object would contain a ball's properties (position,
velocity, etc). But we wouldn't stop there: unlike the plain data
structure, each object would *also* contain the code needed to describe
its behavior. So, each "ball" object would have its own `bounce`
*method*. "Method" is the object-oriented word for a subroutine that's
associated with a particular object or group of objects. Rather than
calling the `bounce` subroutine with an argument specifying ball 3,
you'd call ball 3's `bounce` method.

At this level - structures vs. objects, subroutines vs. methods - the
difference seems largely syntactic. And to some extent, that really is
the main difference; in fact, you *can* write an object-oriented program
in plain old C, if you're willing to write rather verbose code. But by
making the syntax straightforward and convenient, OO languages make the
OOP style the natural and convenient way to write code, and writing code
this way often (not always, but often) makes for better programs.

## Inheritance and Overriding

Now, our example about the bouncing balls with their `bounce` methods
might sound okay in principle, but there's on troubling bit: if a method
is tied to an object, does this mean that we have to write a separate
`bounce` method for every ball in our simulation? Because that would
obviously be crazy.

Fortunately, object-oriented languages have a feature that avoids this
type of duplication. This feature is *inheritance*. An object can be
defined as belonging to a particular *class*, and it will inherit all of
the code and data defined for the class. Of course, it can still define
code and data itself, which can add to or modify the attributes it
inherits. When an object defines code or data that's already defined by
its class, the definitions the object makes *override* what it inherits
from its class.

The utility of inheritance and overriding is that it becomes very simple
to represent general and special cases. For example, if you had twenty
identical balls, but a twenty-first ball with special behavior when
bouncing (but apart from bouncing is the same as all the other balls),
you'd first define a `ball` class, and define all twenty-one balls as
belonging to this class. The twenty-first ball, though, would override
the `bounce` method with its own special version. In a traditional
language, on the other hand, the `bounce` subroutine would need a
special test to see if the odd ball was bouncing and act accordingly.

This may seem like six of one and half a dozen of the other, but it has
a big advantage: it isolates the special case code with the special case
object. Just as block-structured languages allow code to be modularized,
object-oriented languages allow entire objects - both their state *and*
their behavior - to be modularized. Most people find that this makes
writing a program much easier, because they only need to think about a
special case in one place, rather than tracking down all the subroutines
that need to be modified. It is especially helpful when debugging and
maintaining a program, because everything pertaining to an object is
kept in one place.

Note that since a class can itself be a member of another class, this
type of specialization can be extended indefinitely. For example, you
could define the classes `rubberBall` and `billiardBall`, each
inheriting characteristics from the more general class `ball` and
defining some of their own. Now you could define ten objects of each
class, and these objects could themselves define characteristics
overriding their two parent classes.

## Object-Oriented Adventures

Object-oriented languages are quite useful for writing adventure games.
When a player types a command in a TADS 3 game, the system sends certain
messages to the object or objects involved. In this way, it's easy to
define classes of objects that behave in particular ways in response to
player commands. For example, objects that the player can't pick up
(such as phone booths and anvils) respond with a simple "You can't have
that" to a "take" command, whereas objects that can be carried will move
themselves into the player's inventory list.

The standard TADS 3 adventure library, Adv3, provides a large number of
basic classes for common objects in adventure games. The real power of
TADS 3, though, is the ability to add classes of your own.

## Disadvantages of OOP

Like anything else, OOP isn't all rainbows and lollipops; it also has
its dark side.

The biggest drawback of OOP in terms of general simulation programming
is probably that the real world refuses to divide up into neat classes
and subclasses. At first glance, it's easy to look around and start
dividing things up into classes: furniture is tables and cabinets and
chairs, chairs are sofas and armchairs and folding chairs, sofas come in
loveseat and sleeper varieties, etc. The problem is, those class
divisions aren't intrinsic in the things we're divvying up; they're just
the way we happen to see the world. Worse, they're the way we happen to
see the world *at the moment*. Change the situation, and our whole view
of the class lines changes. If we're looking for fuel for the fireplace,
the interesting class divisions become things like wood vs. metal vs.
plastic. OOP insists that the class structure is intrinsic in the things
being sorted, and forces us to decide on our class structure up front.

In IF programming, there's another drawback of OOP that only becomes
apparent as you get into the details of a project. Now, we know that OOP
is supposed to improve program organization by keeping all of the bits
of code and data associated with a particular object in a neat little
package, and most of the time that's great. The problem in IF
programming is that sometimes several objects will interact in complex
ways - maybe even ways we didn't necessarily anticipate when writing the
program. For example, Bob (an NPC) wants to stop the player from opening
a certain door; what happens when the player tries to knock down the
door with an axe? The problem is that we have at least four objects
interacting here - Bob, the object representing the player character,
the door, and the axe. Situations like this can lead to very difficult
debugging problems, because we could have methods on all of the involved
objects trying to do something special. Getting the right outcome can be
tricky.

Fortunately, in practice these sorts of problems seem to be the
exception rather than the rule. For the most part, OOP principles are a
big help in organizing code in IF. There might be better ways to write
IF, but OOP seems to be a pretty good way.

## TADS 3 and other Object-Oriented Languages

Users of other languages that have object-oriented features, such as C++
or Java, will find that TADS has a slightly different approach to
object-oriented programming. In particular, TADS makes much less of a
distinction between classes and objects than other languages.

In C++ and Java, a class is a sort of template that specifies the data
types stored by members of the class, but only an object actually stores
values for the data. (This is analogous to a "struct" in C or a "record"
in Pascal: the structure or record defines the layout of data, but only
an instance of the structure actually contains any data.) The
inheritance structure in C++ and Java pertains to the classes; an object
is an instance of a particular class, so only methods and "slots" for
data can be inherited - values for data items are not themselves
inherited.

In TADS 3, there's no distinction between classes and instances of
classes, in that a class is also an object. Hence, data values as well
as methods can be inherited from a parent object. In TADS 3, objects and
classes behave mostly alike. The compiler flags class objects in a
special way, though, so you can tell them apart when you want to; for
example, the command parser knows that classes should never be involved
in commands, so it never matches a word in the player's input to a class
object.

This style of language is sometimes called a "prototype" language. There
are a few other languages in this category, such as
[Self](http://research.sun.com/self).

Another difference between TADS programming and traditional OO
programming isn't so much a language difference as a difference in the
type of application. The difference is in *when* objects are created. A
TADS 3 program tends to pre-define lots of "static" object instances -
for the locations making up the map, the things in the locations, the
characters populating the locations, and so on. All of these instances
are defined, with property values filled in, directly in the game
program. In contrast, a C++ or Java program usually defines mostly
classes, and creates most instances at run-time (via
`new`, for example). Because this is such a
basic need of IF programs, the TADS language caters to it with numerous
convenience features that make it less work to set up these pre-defined
objects.



------------------------------------------------------------------------



*TADS 3 Technical Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="fund.html" class="nav">Fundamentals</a> \> Object-Oriented
Programming Overview  
<span class="navnp"><a href="t3des2.html" class="nav"><em>Prev:</em> IF Design: In Theory</a>
    <a href="t3inout.html" class="nav"><em>Next:</em> Some Common
Input/Output Issues</a>     </span>


