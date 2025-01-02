<div class="topbar">

<img src="../../docs/manual/topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="../../docs/manual/toc.htm" class="nav">Table of Contents</a> \|
<a href="../../docs/manual/extensions.htm" class="nav">Extensions</a> \>
Relations  
<span class="navnp"><a href="postures.htm" class="nav"><em>Prev:</em> Postures</a>
    <a href="roomparts.htm" class="nav"><em>Next:</em> Room Parts</a>
    </span>

</div>

<div class="main">

# Relations

## Overview

The purpose of the [relations.t](../relations.t) extension is to allow
game code to set up and then test relations between objects (or other
entities). This could be used, for example, to model social
relationships between the NPCs in your game. The extension also enables
pathfinding through any relation you define.

  
<span id="classes"></span>

## New Classes, Objects and Properties

In addition to a number of items intended purely for internal use, this
extension defines the following new classes and functions:

- *Classes*: **Relation**, **DerivedRelation**
- *functions*: <span class="code">relate()</span>,
  <span class="code">related()</span>,
  <span class="code">unrelate()</span> and
  <span class="code">relationPath()</span>.

  
<span id="usage"></span>

## Usage

Include the relations.t file after the library files but before your
game source files.

## Defining Relations

You define a relation by defining a Relation object. The properties you
need to define on Relation are **name**, **reverseName**,
**relationType** and **reciprocal**. For example:

<div class="code">

     loving: Relation 
        name = 'loves'
        reverseName = 'loved by'
        relationType = manyToOne 
     ;
     

</div>

This can be abbreviated via the Relation template (defined in advlite.h)
to:

<div class="code">

     loving: Relation 'loves' 'loved by' manyToOne;
     

</div>

The <span class="code">name</span> property can be uses to describe the
relationship as a verb (e.g. John loves Mary). The
<span class="code">reverseName</span> is the name to use when we want to
describe the relationship the other way round (if John loves Mary then
Mary is loved by John); we could have defined the
<span class="code">reverseName</span> as 'is loved by', but that's a bit
more typing. The <span class="code">relationType</span> defines how many
parties can appear on each side of the relationship. Here we've defined
the loving relationship (in the sense of 'is in love with') to be
**manyToOne**, meaning that each person can love at most one other
person, but can be loved by several other people. (Jack and Jim may both
Jill, but they can't simultaneously love anyone else - at least, not as
we have defined the loving relationship). The other possible values of
the relationType property are **oneToOne** (e.g. the marriage
relationship) **oneToMany** (e.g. the father relationship) or
**manyToMany** (e.g. the sibling relationship). Relations that are
oneToOne or manyToMany can also be reciprocal (just define
<span class="code">reciprocal = true</span> on the Relationship object
in question), as indeed the marriage and sibling relationships would be.

  
<span id="making"></span>

## Making, Breaking and Testing Relations

Relationships are normally manipulated through the **relate()**,
**related()** and **unrelate()** functions. To set up a relationship
between a and b you call the function <span class="code">relate(a
*relation* b)</span>. To cancel the relation between a and b you call
<span class="code">unrelate(a *relation* b)</span>. To test whether a
and b are related you use <span class="code">related(a *relation*
b)</span> and to get a list of items related to a via relation you use
<span class="code">related(a *relation*)</span>. For example:

<div class="code">

     relate(jack, loving, jill); // makes Jack love Jill
     relate(jack, 'loves', jill); // another way of doing the same thing.
     relate(jill, 'loved by', jim) // makes Jill loved by Jim (another of making Jim love Jill)
     related(jack, loves', jim) // tests whether Jack loves Jim; in this case the answer would be nil
     related(jill, 'loved by') // returns a list of the people whom Jill is loved by; is this case [Jack, Jim]
     related(jack, 'loves') //returns a list of the people Jack loves; in this case [Jill]
     related(jim, loving) // returns a list of the people Jim loves; in this case [Jill]
     
     

</div>

It will be observed that when you specify the relationship in the
forward direction (x loves y) you can use either the Relation object
name (e.g. <span class="code">loving</span>) or its name property (e.g.
'loves'), but when specifying it in reverse (x loved by y) you have to
use the string defined on the <span class="code">reverseName</span>
property.

Breaking relations can be done in much the same way using the
**unrelate()** function. If Jim no longer loves Jill you just call
<span class="code">unrelate(jim, 'loves', jill)</span>.

To break all relations someone has, you can call
<span class="code">relate()</span> with nil as the third parameter; e.g.

<div class="code">

      relate(jim, 'loves', nil); // now Jim loves no one.
      relate(jill, 'loved by', nil); // now Jill isn't loved by anyone.  
      

</div>

If you have defined a relation as reciprocal (by setting its
<span class="code">reciprocal</span> property to true), there's no need
to define each related pair both ways round. For example if
<span class="code">sibling</span> is a reciprocal relationship then you
don't need to use both <span class="code">relate(jack sibling
jill)</span> and <span class="code">relate(jill sibling jack)</span>,
since the libary knows that the one implies the other. Likewise there's
no need to define the <span class="code">reverseName</span> property for
a reciprocal relationship, since <span class="code">related(jack sibling
jill)</span> and <span class="code">related(jill sibling jack)</span>
mean exactly the same thing. A reciprocal relationship is already its
own reverse.

  
<span id="derived"></span>

## Derived Relations

A good example of a many-to-many reciprocal relation might be a sibling
relationship, which could be defined as:

<div class="code">

      sibling: Relation 'sibling of' @manyToMany +true;
      
      InitObject
        execute()
        {
            relate(john, sibling, mary);
            relate(john, sibling, luke);
            relate(mary, sibling, luke);  
        } 
      

</div>

Here the + property at the end of template defines the **reciprocal**
property, so we're saying that sibling is a reciprocal relationship.
Because of this the Relation class knows that if John is the sibling of
Mary, then Mary must be the sibling of John (so we don't need to define
it both ways round). Also, there's no need to define the inverseName
property on a reciprocal Relation, since the inverse of 'sibling of' is
simply 'sibling of'. But suppose we were also to define a fatherOf
relationship, and that James was the father of John, Mary and Luke. We'd
then end up doing something like this:

<div class="code">

      sibling: Relation 'sibling of' @manyToMany +true;
      fatherOf: Relation 'father of' 'child of' @oneToMany;
      
      InitObject
        execute()
        {        
            relate(john, sibling, mary);
            relate(john, sibling, luke);
            relate(mary, sibling, luke);  
            relate(james, fatherOf, mary);
            relate(james, fatherOf, luke);
            relate(james, fatherOf, john);
        } 
      

</div>

At this point there seems to be some redundancy, since if James is the
father of Mary, Luke and John, then Mary, Luke and John must be siblings
of one another, so it seems a bit of a chore to have to state this
explicitly. The solution is to use a **DerivedRelation**, which is a
special kind of Relation that instead of storing any data of its own,
works out what is related to what according to the custom
**relatedTo()** and **inverselyRelatedTo()** methods you define, both of
which should return a list of objects to which their argument is
related; for example:

<div class="code">

     sibling: DerivedRelation 'sibling of' @manyToMany +true
       relatedTo(a) 
       {
            local parent = related(a, 'child of');
            return parent.length > 0 ? related(parent[1], fatherOf) - a : []; 
       }

       inverselyRelatedTo(a) 
       {
            return relatedTo(a);
       }
    ; 
     

</div>

Here, in the <span class="code">relatedTo(a)</span> method, we first
find the father (or parent) of <span class="code">a</span> by using the
inverse of the fatherOf relationship ('child of') to get the person of
whom *a* is the child. We then return a list of the children of this
parent, less *a*, since *a* is not his or her own sibling. The method
thus returns a list of *a*'s siblings without the sibling Relation
having to store any data of its own and without game code having to
define explicitly who is the sibling of whom.

By default a DerivedRelation will complain if you try to use it to set a
relation directly, e.g. <span class="code">(john, sibling, mary)</span>,
since in general this may make no sense when the relationship in
question depends on another one. In principle you could override the
sibling's **addRelation()** method so that
<span class="code">sibling.addRelation(\[a, b\])</span> tried to give
*a* and <span class="code">b</span> a common father, but in general this
is probably not a good idea. What, if *a* and *b* start out with
different fathers, for example? It would be an even worse idea to
override a DeriveRelation's <span class="code">removeRelation()</span>
method to allow the use of, say, <span class="code">unrelate(mary,
sibling, john)</span>, since if two people have a common father, for
example, what would it mean for them to cease to be siblings? Thus, once
a DerivedRelation has been defined, you should stick to using it through
the <span class="code">related()</span> function or the
<span class="code">relationPath()</span> function discussed immediately
below.

  
<span id="pathfinding"></span>

## Relation Pathfinding

Relation pathfinding allows us to find the shortest path from *a* to *b*
via any given relation (assuming that any such path exists). In general,
the function **relationPath(a, rel, b)** returns a list giving the
shortest path from *a* to *b* via *rel* (if there is one) or
<span class="code">nil</span> if no such path exists. For example,
suppose that in addition to defining James as the father of John, we
defined Andrew as the father of James, and John as the father of Mark.
Then <span class="code">relationPath(andrew, fatherOf, mark)</span>
would return the list <span class="code">\[andrew, james, john,
mark\]</span>, while <span class="code">relationPath(mark, 'child of',
andrew)</span> would return the list <span class="code">\[mark, john,
james, andrew\]</span>. On the other hand
<span class="code">relationPath(mary, fatherOf, mark)</span> would
return <span class="code">nil</span>, since there's no path from Mary to
Mark through the fatherOf relation.

A potentially more interesting variant of this allows you to pass a list
of relations as the second parameter. The function will then try to find
a path from *a* to <span class="code">b</span> via any of the relations
listed, and if it finds a path it then returns a list of two-element
lists showing the steps it took to get from *a* to *b*. For example, if
we also made Simon the father of Aaron, then
<span class="code">relationPath(mark, \[fatherOf, sibling, 'childOf'\],
aaron)</span> would return the list <span class="code">\[\[nil, mark\],
\['child of', john\], \['child of', james\], \['sibling of', simon\],
\['father of', aaron\]\]</span>, which means that Mark is the child of
John who is the child of James who is the sibling of Simon who is the
father of Aaron. By such means you could in principle trace the shortest
relationship path through a family tree of any complexity, or of any
other relationship network you wished to devise.

  

## A Note on Syntax

The Relations extension makes use of a number of functions of the form
<span class="code">relxxx(a, rel, b)</span> or
<span class="code">relxxx(a, b)</span> since in the main this seems the
most intuitive way of setting up, describing and testing relations,
rather than through method calls on the underlying objects. In some
cases, though, you may find it more convenient to use other forms of
syntax.

In particular, if a game starts out with a number of items or people
already related via a relation, you may find it more convenient to
define these starting relations on the **relTab** property of the
relevant Relation object rather than running code to call a whole lot of
<span class="code">relate()</span> functions. For this you purpose you
would probably use the shortcut syntax for setting up the initial values
of a LookupTable (which is what the relTab property should contain) like
this:

<div class="code">

     someRelation: Relation
       relTab = [
           obj1 -> [a, b]
           obj2 -> [c]
       ]
     ;  
     

</div>

So, for example, instead of initializing the values of the fatherOf
relation like so:

<div class="code">

     InitObject
        execute()
        {
            relate(james, fatherOf, mary);
            relate(james, fatherOf, luke);
            relate(james, fatherOf, john);
            relate(andrew, fatherOf, james);        
            relate(andrew, fatherOf, simon);
            relate(john, fatherOf, mark);
        }
    ; 
      

</div>

You could just do this:

<div class="code">

     fatherOf: Relation 'father of' 'child of' @oneToMany
        relTab = [
            james -> [mary, luke, john],
            andrew -> [james, simon],
            john -> [mark]    
        ]
    ;
     

</div>

There are two other abbreviated forms of syntax you can use if you
really want to (although they're probably less clear than their slightly
more verbose equivalents, and the way they read is potentially a little
counter-intuitive):

- **relation\[a\] = b** is equivalent to <span class="code">relate(a,
  relation, b)</span>; e.g. <span class="code">fatherOf\[john\] =
  luke</span> does the same as <span class="code">relate(john, fatherOf,
  luke)</span>
- **relation\[obj\]** is equivalent to <span class="code">related(obj,
  relation)</span>; e.g. <span class="code">fatherOf\[john\]</span> does
  the same as <span class="code">related(john, fatherOf)</span>.

  
<span id="debugging"></span>

## Debugging Commands

When a game is compiled for debugging, the following commands are
available to query and test relations:

The **relations** command lists all the relations defined in the game,
with information about their type, e.g.:

<div class="cmdline">

    >relations
    fatherOf oneToMany: name = 'father of' reverseName = 'child of'
    knows oneToOne: name = 'knows' reverseName = 'known by'
    loving manyToOne: name = 'loves' reverseName = 'loved by'
    overlooking manyToMany: name = 'overlooks' reverseName = 'overlooked by'
    sibling (DerivedRelation) manyToMany: (reciprocal): name = 'sibling of'

</div>

REL, RELATION or RELATIONS followed by the name of a relation lists the
items related via that relation, e.g.:

<div class="cmdline">

    >rel father of
    fatherOf oneToMany: name = 'father of' reverseName = 'child of'
    andrew -> [james, simon]
    james -> [mary, luke, john]
    john -> [mark]
    simon -> [aaron]

</div>

The EVAL command (which can be used with any valid expression) can also
be used to set and test relations, e.g.:

<div class="cmdline">

    >eval related(mark, loving)

    >eval relate(mark, loving, jill)
    nil

    >eval relate(jack, loving, jill)
    nil

    >eval related(mark, loving)
    Jill (Actor)

    >eval related(jill, 'loved by')
    Mark (Actor),Jack (Actor)

    >rel loving
    loving manyToOne: name = 'loves' reverseName = 'loved by'
    jack -> [jill]
    mark -> [jill]

</div>

  

This covers most of what you need to know to use this extension. For
additional information see the source code and comments in the
[relations.t](../relations.t) file.

</div>

------------------------------------------------------------------------

<div class="navb">

*Adv3Lite Manual*  
<a href="../../docs/manual/toc.htm" class="nav">Table of Contents</a> \|
<a href="../../docs/manual/extensions.htm" class="nav">Extensions</a> \>
Postures  
<span class="navnp"><a href="postures.htm" class="nav"><em>Prev:</em> Postures</a>
    <a href="roomparts.htm" class="nav"><em>Next:</em> Room Parts</a>
    </span>

</div>