---
---
<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \>
WeakRefLookupTable  
<span class="navnp"><a href="vector.html" class="nav"><em>Prev:</em> Vector</a>
    <a href="lib.html" class="nav"><em>Next:</em> The System Library</a>
    </span>

</div>

<div class="main">

# WeakRefLookupTable

WeakRefLookupTable is a subclass of [LookupTable](lookup.html). It
behaves the same as the regular LookupTable class, and has the same
methods; the only difference is that the values in a weak-reference
table are only "weakly" referenced. (The keys are still "strongly"
referenced; only the values are weak references.)

A "weak reference" is a reference that **doesn't** prevent the garbage
collector from removing the referenced object from memory. On each scan
of memory, the garbage collector deletes each object it finds that is
not referenced at all, and each object that is referenced exclusively
through weak references. This means that if an object is referenced only
as a value stored in a WeakRefLookupTable, the garbage collector can
delete the object. Whenever the garbage collector deletes an object that
is stored as a value in a WeakRefLookupTable, the WeakRefLookupTable
automatically deletes that key/value pair.

Weak references have their uses, especially in situations where you want
to create a secondary access path to a set of objects for performance
reasons, such as an index or a cache. These cases are relatively rare,
though, so don't feel that you need to go out of your way to find places
to use this intrinsic class. If you can't think of a reason to use this
class, just ignore it and use the base LookupTable class.

</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \>
WeakRefLookupTable  
<span class="navnp"><a href="vector.html" class="nav"><em>Prev:</em> Vector</a>
    <a href="lib.html" class="nav"><em>Next:</em> The System Library</a>
    </span>

</div>
