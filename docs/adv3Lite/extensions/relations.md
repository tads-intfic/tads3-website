::: topbar
![](../../docs/manual/topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](../../docs/manual/toc.htm){.nav} \|
[Extensions](../../docs/manual/extensions.htm){.nav} \> Relations\
[[*Prev:* Postures](postures.htm){.nav}     [*Next:* Room
Parts](roomparts.htm){.nav}     ]{.navnp}
:::

::: main
# Relations

## Overview

The purpose of the [relations.t](../relations.t) extension is to allow
game code to set up and then test relations between objects (or other
entities). This could be used, for example, to model social
relationships between the NPCs in your game. The extension also enables
pathfinding through any relation you define.

\
[]{#classes}

## New Classes, Objects and Properties

In addition to a number of items intended purely for internal use, this
extension defines the following new classes and functions:

-   *Classes*: **Relation**, **DerivedRelation**
-   *functions*: [relate()]{.code}, [related()]{.code},
    [unrelate()]{.code} and [relationPath()]{.code}.

\
[]{#usage}

## Usage

Include the relations.t file after the library files but before your
game source files.

## Defining Relations

You define a relation by defining a Relation object. The properties you
need to define on Relation are **name**, **reverseName**,
**relationType** and **reciprocal**. For example:

::: code
     loving: Relation 
        name = 'loves'
        reverseName = 'loved by'
        relationType = manyToOne 
     ;
     
:::

This can be abbreviated via the Relation template (defined in advlite.h)
to:

::: code
     loving: Relation 'loves' 'loved by' manyToOne;
     
:::

The [name]{.code} property can be uses to describe the relationship as a
verb (e.g. John loves Mary). The [reverseName]{.code} is the name to use
when we want to describe the relationship the other way round (if John
loves Mary then Mary is loved by John); we could have defined the
[reverseName]{.code} as \'is loved by\', but that\'s a bit more typing.
The [relationType]{.code} defines how many parties can appear on each
side of the relationship. Here we\'ve defined the loving relationship
(in the sense of \'is in love with\') to be **manyToOne**, meaning that
each person can love at most one other person, but can be loved by
several other people. (Jack and Jim may both Jill, but they can\'t
simultaneously love anyone else - at least, not as we have defined the
loving relationship). The other possible values of the relationType
property are **oneToOne** (e.g. the marriage relationship) **oneToMany**
(e.g. the father relationship) or **manyToMany** (e.g. the sibling
relationship). Relations that are oneToOne or manyToMany can also be
reciprocal (just define [reciprocal = true]{.code} on the Relationship
object in question), as indeed the marriage and sibling relationships
would be.

\
[]{#making}

## Making, Breaking and Testing Relations

Relationships are normally manipulated through the **relate()**,
**related()** and **unrelate()** functions. To set up a relationship
between a and b you call the function [relate(a *relation* b)]{.code}.
To cancel the relation between a and b you call [unrelate(a *relation*
b)]{.code}. To test whether a and b are related you use [related(a
*relation* b)]{.code} and to get a list of items related to a via
relation you use [related(a *relation*)]{.code}. For example:

::: code
     relate(jack, loving, jill); // makes Jack love Jill
     relate(jack, 'loves', jill); // another way of doing the same thing.
     relate(jill, 'loved by', jim) // makes Jill loved by Jim (another of making Jim love Jill)
     related(jack, loves', jim) // tests whether Jack loves Jim; in this case the answer would be nil
     related(jill, 'loved by') // returns a list of the people whom Jill is loved by; is this case [Jack, Jim]
     related(jack, 'loves') //returns a list of the people Jack loves; in this case [Jill]
     related(jim, loving) // returns a list of the people Jim loves; in this case [Jill]
     
     
:::

It will be observed that when you specify the relationship in the
forward direction (x loves y) you can use either the Relation object
name (e.g. [loving]{.code}) or its name property (e.g. \'loves\'), but
when specifying it in reverse (x loved by y) you have to use the string
defined on the [reverseName]{.code} property.

Breaking relations can be done in much the same way using the
**unrelate()** function. If Jim no longer loves Jill you just call
[unrelate(jim, \'loves\', jill)]{.code}.

To break all relations someone has, you can call [relate()]{.code} with
nil as the third parameter; e.g.

::: code
      relate(jim, 'loves', nil); // now Jim loves no one.
      relate(jill, 'loved by', nil); // now Jill isn't loved by anyone.  
      
:::

If you have defined a relation as reciprocal (by setting its
[reciprocal]{.code} property to true), there\'s no need to define each
related pair both ways round. For example if [sibling]{.code} is a
reciprocal relationship then you don\'t need to use both [relate(jack
sibling jill)]{.code} and [relate(jill sibling jack)]{.code}, since the
libary knows that the one implies the other. Likewise there\'s no need
to define the [reverseName]{.code} property for a reciprocal
relationship, since [related(jack sibling jill)]{.code} and
[related(jill sibling jack)]{.code} mean exactly the same thing. A
reciprocal relationship is already its own reverse.

\
[]{#derived}

## Derived Relations

A good example of a many-to-many reciprocal relation might be a sibling
relationship, which could be defined as:

::: code
      sibling: Relation 'sibling of' @manyToMany +true;
      
      InitObject
        execute()
        {
            relate(john, sibling, mary);
            relate(john, sibling, luke);
            relate(mary, sibling, luke);  
        } 
      
:::

Here the + property at the end of template defines the **reciprocal**
property, so we\'re saying that sibling is a reciprocal relationship.
Because of this the Relation class knows that if John is the sibling of
Mary, then Mary must be the sibling of John (so we don\'t need to define
it both ways round). Also, there\'s no need to define the inverseName
property on a reciprocal Relation, since the inverse of \'sibling of\'
is simply \'sibling of\'. But suppose we were also to define a fatherOf
relationship, and that James was the father of John, Mary and Luke.
We\'d then end up doing something like this:

::: code
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
      
:::

At this point there seems to be some redundancy, since if James is the
father of Mary, Luke and John, then Mary, Luke and John must be siblings
of one another, so it seems a bit of a chore to have to state this
explicitly. The solution is to use a **DerivedRelation**, which is a
special kind of Relation that instead of storing any data of its own,
works out what is related to what according to the custom
**relatedTo()** and **inverselyRelatedTo()** methods you define, both of
which should return a list of objects to which their argument is
related; for example:

::: code
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
     
:::

Here, in the [relatedTo(a)]{.code} method, we first find the father (or
parent) of [a]{.code} by using the inverse of the fatherOf relationship
(\'child of\') to get the person of whom *a* is the child. We then
return a list of the children of this parent, less *a*, since *a* is not
his or her own sibling. The method thus returns a list of *a*\'s
siblings without the sibling Relation having to store any data of its
own and without game code having to define explicitly who is the sibling
of whom.

By default a DerivedRelation will complain if you try to use it to set a
relation directly, e.g. [(john, sibling, mary)]{.code}, since in general
this may make no sense when the relationship in question depends on
another one. In principle you could override the sibling\'s
**addRelation()** method so that [sibling.addRelation(\[a, b\])]{.code}
tried to give *a* and [b]{.code} a common father, but in general this is
probably not a good idea. What, if *a* and *b* start out with different
fathers, for example? It would be an even worse idea to override a
DeriveRelation\'s [removeRelation()]{.code} method to allow the use of,
say, [unrelate(mary, sibling, john)]{.code}, since if two people have a
common father, for example, what would it mean for them to cease to be
siblings? Thus, once a DerivedRelation has been defined, you should
stick to using it through the [related()]{.code} function or the
[relationPath()]{.code} function discussed immediately below.

\
[]{#pathfinding}

## Relation Pathfinding

Relation pathfinding allows us to find the shortest path from *a* to *b*
via any given relation (assuming that any such path exists). In general,
the function **relationPath(a, rel, b)** returns a list giving the
shortest path from *a* to *b* via *rel* (if there is one) or
[nil]{.code} if no such path exists. For example, suppose that in
addition to defining James as the father of John, we defined Andrew as
the father of James, and John as the father of Mark. Then
[relationPath(andrew, fatherOf, mark)]{.code} would return the list
[\[andrew, james, john, mark\]]{.code}, while [relationPath(mark,
\'child of\', andrew)]{.code} would return the list [\[mark, john,
james, andrew\]]{.code}. On the other hand [relationPath(mary, fatherOf,
mark)]{.code} would return [nil]{.code}, since there\'s no path from
Mary to Mark through the fatherOf relation.

A potentially more interesting variant of this allows you to pass a list
of relations as the second parameter. The function will then try to find
a path from *a* to [b]{.code} via any of the relations listed, and if it
finds a path it then returns a list of two-element lists showing the
steps it took to get from *a* to *b*. For example, if we also made Simon
the father of Aaron, then [relationPath(mark, \[fatherOf, sibling,
\'childOf\'\], aaron)]{.code} would return the list [\[\[nil, mark\],
\[\'child of\', john\], \[\'child of\', james\], \[\'sibling of\',
simon\], \[\'father of\', aaron\]\]]{.code}, which means that Mark is
the child of John who is the child of James who is the sibling of Simon
who is the father of Aaron. By such means you could in principle trace
the shortest relationship path through a family tree of any complexity,
or of any other relationship network you wished to devise.

\

## A Note on Syntax

The Relations extension makes use of a number of functions of the form
[relxxx(a, rel, b)]{.code} or [relxxx(a, b)]{.code} since in the main
this seems the most intuitive way of setting up, describing and testing
relations, rather than through method calls on the underlying objects.
In some cases, though, you may find it more convenient to use other
forms of syntax.

In particular, if a game starts out with a number of items or people
already related via a relation, you may find it more convenient to
define these starting relations on the **relTab** property of the
relevant Relation object rather than running code to call a whole lot of
[relate()]{.code} functions. For this you purpose you would probably use
the shortcut syntax for setting up the initial values of a LookupTable
(which is what the relTab property should contain) like this:

::: code
     someRelation: Relation
       relTab = [
           obj1 -> [a, b]
           obj2 -> [c]
       ]
     ;  
     
:::

So, for example, instead of initializing the values of the fatherOf
relation like so:

::: code
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
      
:::

You could just do this:

::: code
     fatherOf: Relation 'father of' 'child of' @oneToMany
        relTab = [
            james -> [mary, luke, john],
            andrew -> [james, simon],
            john -> [mark]    
        ]
    ;
     
:::

There are two other abbreviated forms of syntax you can use if you
really want to (although they\'re probably less clear than their
slightly more verbose equivalents, and the way they read is potentially
a little counter-intuitive):

-   **relation\[a\] = b** is equivalent to [relate(a, relation,
    b)]{.code}; e.g. [fatherOf\[john\] = luke]{.code} does the same as
    [relate(john, fatherOf, luke)]{.code}
-   **relation\[obj\]** is equivalent to [related(obj,
    relation)]{.code}; e.g. [fatherOf\[john\]]{.code} does the same as
    [related(john, fatherOf)]{.code}.

\
[]{#debugging}

## Debugging Commands

When a game is compiled for debugging, the following commands are
available to query and test relations:

The **relations** command lists all the relations defined in the game,
with information about their type, e.g.:

::: cmdline
    >relations
    fatherOf oneToMany: name = 'father of' reverseName = 'child of'
    knows oneToOne: name = 'knows' reverseName = 'known by'
    loving manyToOne: name = 'loves' reverseName = 'loved by'
    overlooking manyToMany: name = 'overlooks' reverseName = 'overlooked by'
    sibling (DerivedRelation) manyToMany: (reciprocal): name = 'sibling of'
:::

REL, RELATION or RELATIONS followed by the name of a relation lists the
items related via that relation, e.g.:

::: cmdline
    >rel father of
    fatherOf oneToMany: name = 'father of' reverseName = 'child of'
    andrew -> [james, simon]
    james -> [mary, luke, john]
    john -> [mark]
    simon -> [aaron]
:::

The EVAL command (which can be used with any valid expression) can also
be used to set and test relations, e.g.:

::: cmdline
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
:::

\

This covers most of what you need to know to use this extension. For
additional information see the source code and comments in the
[relations.t](../relations.t) file.
:::

------------------------------------------------------------------------

::: navb
*Adv3Lite Manual*\
[Table of Contents](../../docs/manual/toc.htm){.nav} \|
[Extensions](../../docs/manual/extensions.htm){.nav} \> Postures\
[[*Prev:* Postures](postures.htm){.nav}     [*Next:* Room
Parts](roomparts.htm){.nav}     ]{.navnp}
:::
