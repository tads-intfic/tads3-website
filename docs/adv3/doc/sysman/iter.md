---
layout: docs
---
<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> Iterator  
<span class="navnp"><a href="icic.html" class="nav"><em>Prev:</em> IntrinsicClass</a>
    <a href="list.html" class="nav"><em>Next:</em> List</a>     </span>

</div>

<div class="main">

# Iterator

An Iterator is an object that allows you to visit each element of a
Collection using a consistent interface for all types of collections.
You can never instantiate an Iterator directly (in other words, you
can't use the <span class="code">new</span> operator to create an
Iterator); instead, you create an Iterator by calling a Collection
object's <span class="code">createIterator()</span> method, which
creates an iterator customized for that specific type of collection.

When you create an Iterator via a Collection's
<span class="code">createIterator()</span> method, the Iterator refers
to a "snapshot" of the collection, and is initialized so that the first
call to <span class="code">getNext()</span> will return the first
element of the collection. The Iterator uses a snapshot of the
collection to ensure that changes made to the collection after creating
the Iterator do not affect the iteration.

## Iterator methods

<span class="code">getCurKey()</span>

<div class="fdef">

Returns the key for the current item in the iteration. For List and
Vector objects, this returns the index of the current value; for
LookupTable objects, this returns the key. Throws an error ("index out
of range") if the iteration has not been started yet (that is,
<span class="code">getNext()</span> has never been called on this
Iterator) or has moved past the last item.

</div>

<span class="code">getCurVal()</span>

<div class="fdef">

Returns the value of the current item in the iteration (this is the same
value that the most recent call to getNext() returned). Throws an error
("index out of range") if the iteration has not been started yet or has
moved past the last item.

</div>

<span class="code">getNext()</span>

<div class="fdef">

Returns the next element of the collection. The order in which the
iterator returns the collection's elements varies by the collection
type:

- For List objects, the elements of the list are returned in order of
  the index values; the first item returned is the item at index 1, the
  second is the item at index 2, and so forth.
- For LookupTable objects, the elements are returned in an arbitrary
  order that depends on the internal arrangement of the table's
  elements.
- For Vector objects, the elements are returned in order of index
  values.

Each time you call <span class="code">getNext()</span>, the iterator
updates its internal state to refer to the next element of the
collection, so the next call will return the next item. When you first
create an Iterator (by calling a Collection object's
<span class="code">createIterator()</span> method), the Iterator is
initialized so that the first call to
<span class="code">getNext()</span> will return the first element of the
collection.

After all of the collection's elements have been exhausted, calling
<span class="code">getNext()</span> will cause an error ("out of
bounds") to be thrown.

</div>

<span class="code">isNextAvailable()</span>

<div class="fdef">

Returns <span class="code">true</span> if calling
<span class="code">getNext()</span> will yield a valid item,
<span class="code">nil</span> if not. You can call this prior to calling
<span class="code">getNext()</span> to ensure that
<span class="code">getNext()</span> will not throw an error.

</div>

<span class="code">resetIterator()</span>

<div class="fdef">

Resets the iteration to its first element. After calling this method,
the next call to <span class="code">getNext()</span> will yield the
first element of the collection.

</div>

</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> Iterator  
<span class="navnp"><a href="icic.html" class="nav"><em>Prev:</em> IntrinsicClass</a>
    <a href="list.html" class="nav"><em>Next:</em> List</a>     </span>

</div>
