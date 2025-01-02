<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.htm" class="nav">Table of Contents</a> \|
<a href="builtins.htm" class="nav">The Intrinsics</a> \> LookupTable  
<span class="navnp"><a href="list.htm" class="nav"><em>Prev:</em> List</a>
    <a href="objic.htm" class="nav"><em>Next:</em> Object</a>    
</span>

</div>

<div class="main">

# LookupTable

A LookupTable is an unordered collection of values; each value indexed
by a "key," which is a value of any type that's used to look up a value
stored in the collection. In effect, this class provides what some
programming languages call an "associative array," because it allows a
value to be associated with an arbitrary key, and then efficiently found
given the same key.

You must <span class="code">\#include \<lookup.h\></span> in your source
code to use the LookupTable class.

## Creating a LookupTable

You create a lookup table with the <span class="code">new</span>
operator:

<div class="code">

    local tab = new LookupTable();

</div>

You can optionally specify two parameters to fine-tune the table's
efficiency: the "bucket count," and the initial capacity. When you
create a LookupTable with no arguments as shown above, the object uses
default values for these parameters; the default values will always
work, but you might be able to improve a table's performance by
overriding the default values, especially if the table will contain an
especially large or small number of entries. Note that it is never
necessary to specify the parameters, since a lookup table will always
work properly with the defaults; the only thing the parameters do is
tune the object's performance.

<div class="code">

    // override the default creation parameters
    // use 256 hash slots and an initial capacity of 1024 entries
    local tab = new LookupTable(256, 1024);

</div>

The first parameter, the bucket count, specifies the size of the hash
table that the object uses to organize the keys. See [below](#details)
for more information about what the bucket count means and how to select
this value.

Note that the bucket count is fixed over the life of the object.

The second parameter, the initial capacity, is purely advisory. This
parameter sets the amount of memory the table initially allocates so
that it can accommodate the given number of stored values. If you
eventually add more values to the table than the initial entry count,
the object will automatically expand to accommodate more entries. For
maximum efficiency, you should choose a value that's about the same as
the number of entries you ultimately expect; this will ensure that you
don't use excessive memory by allocating many more initial slots than
you end up using, while at the same time avoiding repeated expansion of
the table.

### Creating from a key/value list

You can also create a LookupTable that's pre-loaded with an initial set
of values. To do this, pass a list, Vector, or [list-like
object](opoverload.htm#listlike) as the argument to the constructor:

<div class="code">

    local tab = new LookupTable(['red', 0xff0000,
                                 'green', 0x00ff00,
                                 'blue', 0x0000ff]);

</div>

This creates a table and initializes it with the keys and values from
the list. The constructor interprets the list elements as pairs of Key
and Value elements. So for our example above, we'd get the same result
by setting the values explicitly like this:

<div class="code">

    tab['red'] = 0xff0000;
    tab['green'] = 0x00ff00;
    tab['blue'] = 0x0000ff;

</div>

When you create a table from a list, the bucket count and overall size
will both be initialized according to the length of the list. The system
chooses a size that's a little larger than the list; this leaves room
for modest expansion without having to allocate more memory, but not so
much that a lot of extra memory will be tied up if the list doesn't end
up expanding.

You can also specify the default value for the table, which is the value
returned when you index the table with a key that doesn't exist in the
table. To do this, simply add the default value as the last element,
without a corresponding key value. The constructor knows that this
odd-numbered last element is the default value because it's not paired
with another element.

### Shorthand notation

The compiler provides a special short-form syntax that lets you create a
LookupTable and load it with values. It works exactly like
<span class="code">new LookupTable()</span> with a list argument, but
it's less typing. It looks like this:

<div class="code">

    local tab = ['red' -> 0xff0000, 'green' -> 0x00ff00, 'blue' -> 0x0000ff];

</div>

The notation looks a lot like an ordinary list, but for each element of
the list, you provide a key and a value, separated by an arrow symbol,
<span class="code">-\></span> (that's a hyphen followed by a
greater-than sign, without any spaces between the two).

This creates the same LookupTable as the earlier example that called
constructor with a list argument. In fact, it really is equivalent
code - the compiler internally converts the shorthand notation into the
same <span class="code">new LookupTable()</span> call as before.

You can also specify the default value, which is the value returned when
you index the table by a key that doesn't exist in the table. To do
this, include a final item in the list using the notation
<span class="code">\*-\></span>*Value* - an asterisk, followed by an
arrow, followed by the desired default value. (The syntax is meant to
suggest a "wildcard" key, to match any other key that's not defined in
the table. The asterisk isn't literally stored as a key, though; the
default value has no key, since it's specifically for use when a key
isn't present.) The default value **must** be the last item in the list.

<div class="code">

    local tab = ['red' -> 0xff0000, 'green' -> 0x00ff00, 'blue' -> 0x0000ff,
                 * -> 'undefined'];

</div>

Even though the list-style shorthand notation might look like a
"constant" value, it's not. It's just a compact way of writing the
equivalent <span class="code">new LookupTable</span> expression. Each
time you evaluate the expression, it'll create a new object. If the code
is part of a routine that will be executed repeatedly, you might want to
create the table once and save it somewhere (in an object property,
say), to avoid the overhead of creating many copies of the table.

## Storing and retrieving values

You use a lookup table as though it were a list or Vector, except that
you can use any type of value as an "index." For example, we could use a
lookup table to associate objects with strings:

<div class="code">

    symtab['book'] = book;
    symtab['ball'] = ball;
    symtab['table'] = table;

</div>

Now, if we want to look up the object associated with one of these
words, we simply index the lookup table:

<div class="code">

    obj = symtab['ball'];

</div>

If you store a value in the lookup table, and a value was already stored
at the same key, the old value at the key is discarded and replaced by
the new value. If you look up a key that doesn't exist in the table, the
result is the "default value" - initially nil, but you can change this
to another value if desired with the
<span class="code">setDefaultValue()</span> method.

A LookupTable matches key values the same way the
<span class="code">==</span> operator does.

## Iterating over a LookupTable's contents

LookupTable is a subclass of [Collection](collect.htm), so you can use
the <span class="code">createIterator()</span> method to create an
Iterator to iterate over the elements of the lookup table. The Iterator
that a LookupTable creates is called a LookupTableIterator; it visits
the values stored in the table in an arbitrary order.

Because a LookupTable is a Collection, you can also use the
<span class="code">foreach</span> statement to iterate over its values.
When you use <span class="code">foreach</span> with a LookupTable, the
iteration variable is assigned a value from the table (not a key) on
each iteration.

## LookupTable methods

LookupTable is a subclass of [Collection](collect.htm), and thus
includes all Collection methods. In addition, LookupTable defines the
methods listed below.

<span class="code">applyAll(*func*)</span>

<div class="fdef">

For each element in the table, this method invokes the callback function
<span class="code">(*func*)(*key*, *value*)</span>, and then changes the
element's value to the return value of *func*. This allows you to modify
all of the values in the table according to the given function. The keys
are not changed. The entries are visited in arbitrary order. No return
value.

</div>

<span class="code">forEach(*func*)</span>

<div class="fdef">

For each element in the table, invokes the function
<span class="code">(*func*)(*value*)</span>. Any return value from
*func* is ignored; the values and keys stored in the table are not
changed. The entries are visited in arbitrary order. No return value.

</div>

<span class="code">forEachAssoc(*func*)</span>

<div class="fdef">

For each element in the table, invokes the callback function
<span class="code">(*func*)(*key*, *value*)</span>. Any return value
from *func* is ignored; the values and keys stored in the table are not
changed. The entries are visited in arbitrary order. This argument is
the same as <span class="code">forEach()</span>, except that this method
provides the callback with the key in addition to the value for each
element. No return value.

</div>

<span class="code">getBucketCount()</span>

<div class="fdef">

Returns the number of "hash buckets" in the table. Since the number of
buckets is fixed over the life of the object, this simply returns the
bucket count that was specified when the object was created.

</div>

<span class="code">getDefaultValue()</span>

<div class="fdef">

Returns the table's default value. This is the value returned when you
index the table with a key that doesn't exist in the table. The default
value is initially nil, but you can change it with
<span class="code">setDefaultValue()</span>.

</div>

<span class="code">getEntryCount()</span>

<div class="fdef">

Returns the number of key/value entries in the table. This returns the
number of entries actually stored in the table, which is unrelated to
the initial capacity that was specified when the object was created.

</div>

<span class="code">isKeyPresent(*key*)</span>

<div class="fdef">

Checks to see if an entry with the given key is present in the table.
Returns <span class="code">true</span> if the key is present,
<span class="code">nil</span> if not.

</div>

<span class="code">keysToList()</span>

<div class="fdef">

Returns a list consisting of all of the keys in the table. The order of
the keys is arbitrary, so callers must not assume any particular
ordering.

</div>

<span class="code">nthKey(*n*)</span>

<div class="fdef">

Returns the key at the given index in the table. This returns the key
that appears at the given index in the
<span class="code">keysToList()</span> list, but if you just want one
key it's more efficient to use this method, since it doesn't construct a
list. If the index is out of range, an error occurs.

</div>

<span class="code">nthVal(*n*)</span>

<div class="fdef">

Returns the value at the given index in the table. This returns the
value that appears at the given index in the
<span class="code">keysToList()</span> list, but if you just want one
value it's more efficient to use this method, since it doesn't construct
a list. If the index is out of range, an error occurs.

</div>

<span class="code">removeElement(*key*)</span>

<div class="fdef">

Removes the element with the given key, if any. If there is no element
with the given key in the table, this makes no change to the table and
simply returns nil. If an element is found, the element is removed, and
the value associated with the key (before the removal) is returned.

</div>

<span class="code">setDefaultValue(*val*)</span>

<div class="fdef">

Sets the default value for the table. The default value is returned when
you index the table with a key that doesn't exist in the table. The
default value is initially nil, but you can use this method to change it
to any other value.

</div>

<span class="code">valsToList()</span>

<div class="fdef">

Returns a list consisting of all of the values in the table. The order
of the values is arbitrary.

</div>

## <span id="details"></span>Performance considerations

A LookupTable is implemented as a special data structure known as a hash
table. You can find more on the theory of hash tables on the Web (for
example, the [Wikipedia page](http://en.wikipedia.org/wiki/Hash_table)),
so we won't go into that here. You don't really need to know anything
about hash tables to use LookupTable objects, but if you do happen to be
familiar with how they work, you can take advantage of a couple of
parameters to optimize their performance.

When you create a LookupTable, you can specify two sizes that control
how the internal hash table is organized: the number of "buckets," and
the initial capacity. These parameters affect performance in several
ways.

First, the larger the bucket count and initial capacity, the more memory
the hash table consumes. It's best to choose sizes that aren't wildly
greater than the actual needs of the table, to avoid wasting memory.

Second, it's generally faster to look up a value in a table when the
table has more hash buckets. This trend continues up to the point where
the number of buckets is about equal to the number of entries in the
table; beyond that, there's usually no benefit to adding more buckets.
If you have a rough idea of the number of elements the table will
ultimately have, you can use this to pick a bucket count when creating
the table. It's not important to figure the number exactly; if there are
only half as many hash buckets as entries, you'll still get pretty close
to ideal performance. And keep in mind that you need to balance this
against the memory usage of more buckets.

Third, it's be faster to add new values to the table if the table
doesn't have to be reallocated too frequently. The system must allocate
new memory for the table every time you exceed its current capacity. The
table starts with the initial capacity you specify when you create it,
and it automatically expands as needed when you add new values. Each
expansion operation takes a little extra time. If you know roughly the
number of values you'll ultimately be adding to the table, you should
ideally make the initial capacity large enough to hold all of them,
since that will make it unnecessary to add more memory later.

For the most part, you shouldn't spend a lot of time worrying about any
of this. The LookupTable object manages its memory and internal
structure automatically, and it will work fine if you always use the
defaults. The only time you're likely to notice any difference at all by
tweaking the creation parameters is for large tables (with hundreds or
thousands of elements) that you use frequently.

</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 System Manual*  
<a href="toc.htm" class="nav">Table of Contents</a> \|
<a href="builtins.htm" class="nav">The Intrinsics</a> \> LookupTable  
<span class="navnp"><a href="list.htm" class="nav"><em>Prev:</em> List</a>
    <a href="objic.htm" class="nav"><em>Next:</em> Object</a>    
</span>

</div>
