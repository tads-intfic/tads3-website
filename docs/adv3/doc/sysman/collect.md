---
layout: docs
---
<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> Collection  
<span class="navnp"><a href="charset.html" class="nav"><em>Prev:</em> CharacterSet</a>
    <a href="date.html" class="nav"><em>Next:</em> Date</a>     </span>

</div>

<div class="main">

# Collection

A Collection is an object that contains a set of values. Each value in a
Collection is called an element.

The Collection intrinsic class is an abstract base class from which
certain other intrinsic classes are derived. Because Collection is an
abstract base class, you cannot create a Collection directly; you can
only create its concrete subclasses. The Collection subclasses are:

- [List](list.html)
- [LookupTable](lookup.html)
- [Vector](vector.html)

The Collection base class provides a set of operations that is common to
all of its derived classes, so that all of these classes can be treated
the same way for certain operations. In particular, Collection provides
a mechanism that lets you iterate over all of the elements without
regard to the specific mechanisms that the subclass normally uses to
access the elements.

## Collection methods

`createIterator()`

<div class="fdef">

Creates and returns an Iterator object. The Iterator is initialized so
that it refers to the first element of the collection.

Note that, when you call this method, the Iterator object is initialized
with a "snapshot" of the collection's contents. This means that you can
use the Iterator to visit each element of the collection without having
to worry about whether the collection can change. Even if you make
changes to the contents of the collection after calling
`createIterator()`, the Iterator object will
refer to a consistent, frozen snapshot of the collection as it was when
the Iterator was created.

</div>

`createLiveIterator()`

<div class="fdef">

Creates and returns a "live" Iterator object. A live iterator refers
directly to the original collection, not a snapshot copy of the
collection.

This method is provided mostly as an optimization for times when you
know that the original collection won't be modified in the course of the
iteration, or at the least that it won't be modified in such a way as to
affect the iteration. Because the iterator object refers directly to the
original collection, and not a frozen snapshot of it, changes made to
the collection while traversing the elements using the iterator object
could affect the iteration. If the collection changes while the Iterator
is active, the Iterator is not guaranteed to visit every item in the
collection, nor is it guaranteed to visit each item only once.
Therefore, you should use `createIterator()`
whenever there's any doubt as to whether the collection could be
modified while the Iterator is active, and use
`createLiveIterator()` only when you are certain
the collection will not change.

Note that, for immutable collection objects, there is no difference
between `createIterator()` and
`createLiveIterator()`. For example, because a
List object is immutable, a List returns identical iterators for both of
these methods.

</div>

</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> Collection  
<span class="navnp"><a href="charset.html" class="nav"><em>Prev:</em> CharacterSet</a>
    <a href="date.html" class="nav"><em>Next:</em> Date</a>     </span>

</div>
