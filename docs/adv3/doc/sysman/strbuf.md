---
layout: docs
---
<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> StringBuffer  
<span class="navnp"><a href="string.html" class="nav"><em>Prev:</em> String</a>
   
<a href="strcomp.html" class="nav"><em>Next:</em> StringComparator</a>
    </span>

</div>



# StringBuffer

A StringBuffer is a mutable character string. Unlike the regular
[String](string.html) class, a StringBuffer can be edited in place,
meaning that you can change the text contained in the object.

In contrast, a String object is immutable: operators and functions that
*appear* to modify a string, such as the "+=" operator, actually leave
the original string unchanged and create a new String object to
represent the result of the operation.

This difference means that it's often more efficient to use StringBuffer
when you need to assemble a string by concatenating a number of pieces
together. Doing this with regular String objects requires creating a new
intermediate string for each concatenation step, which involves
allocating memory and copying the source strings. Consider this example:

```
    local x = 'one ';
    x += 'two ';
    x += 'three ';
    x += 'four ';
    x += 'five';
```

This creates five separate strings - the original string, plus a new
string for each concatenation result. The text 'one' has to be copied
again on every step, since it appears at the start of every intermediate
result. Now consider the corresponding code using a StringBuffer object:

```
    local x = new StringBuffer();
    x.append('one ');
    x.append('two ');
    x.append('three ');
    x.append('four ');
    x.append('five');
```

This only creates a single StringBuffer object. Each
`append()` call modifies the *contents* of the
StringBuffer - it doesn't create a new object. Appending new text simply
tacks the text onto the end of the current contents of the object, so
the text already stored doesn't have to be copied anywhere.

For simple operations involving a few concatenations, you probably
wouldn't notice any performance difference between the two approaches,
so you might as well stick to the simple String approach. Where
StringBuffer becomes interesting is for complex string constructions
involving a long series of steps - dozens or hundreds of steps.
StringBuffer is ideally suited for tasks like capturing the text
directed to an output stream, or loading the lines of text out of a
file.

## Construction

You create a StringBuffer with the `new`
operator. The simplest format is to create the object with no
constructor arguments:

```
    local s = new StringBuffer();
```

This creates a StringBuffer with default allocation parameters.

StringBuffer objects manage their memory automatically, but the
constructor takes a couple of optional arguments that let you fine-tune
the object's memory usage. If you include one integer value in the
`new` call, it specifies the initial allocation
size of the internal text buffer, in characters:

```
    s = new StringBuffer(1000);
```

This allocates an initial buffer with room for 1000 characters of text.

You can also specify a second integer argument giving the "incremental"
allocation size. This is the amount of additional memory that the object
will allocate each time its contents expand beyond its current capacity.

```
    s = new StringBuffer(1000, 500);
```

That allocates 1000 space for characters initially, and tells the object
to add memory for another 500 characters each time the contents exceed
the current capacity.

If you have some idea when creating the object of how much text you'll
ultimately be storing in it, you can improve performance by specifying
the allocation parameters. Expanding the buffer space is extra work, so
it's best to minimize it by making the buffer large enough up front that
it won't need to be expanded too often. On the other hand, it wastes
memory to specify an initial size that's much larger than you'll ever
need.

## Limits

A StringBuffer's stored text length is limited only by available memory.
This means that a StringBuffer can be much longer than an ordinary
string, which is limited to about 64,000 bytes. (The Unicode UTF-8
format is a variable-length encoding, meaning that each character
requires a different number of bytes of storage. As a result, the 64,000
byte limit translates to anywhere from 21,000 to 64,000 characters,
depending on which particular characters are involved.) When you convert
a StringBuffer to an ordinary string object, such as via
`toString()`, an error will be thrown if the
contents exceed the string size limit.

The `+` and `+=`
operators cannot be used with StringBuffer objects (more on this
shortly).

## Converting to String

You can convert a StringBuffer to a regular String using the
[`toString()`](tadsgen.html#toString) function,
passing the StringBuffer as the argument. This returns an ordinary
String object with the same contents.

The normal way to use StringBuffer is to maintain a StringBuffer object
for the process of assembling a string out of various elements, then to
convert the result to an ordinary String when the build process is done.
StringBuffer isn't as full-featured as String; it's intended to be used
mainly for construction, not manipulation or long-term storage.

## Operators

You can use the comparison operators (`==`,
`!=`, `\>`,
`\<`, `\>=`,
`\<=`) to compare StringBuffer values to other
StringBuffers or to ordinary strings. The comparisons are handled as
though the StringBuffer were an ordinary string containing the text in
the buffer.

```
    local s = new StringBuffer();
    s.append('hello');
    if (s == 'hello')
      "Yes";
```

This will print "Yes", since the contents of the StringBuffer match the
character string.

You can use the indexing operator to retrieve a single character from a
StringBuffer:

```
    local s = new StringBuffer();
    s.append('abcdefg');
    local c = s[3];   // c = 'c'
```

The result is a one-character string containing the character at the
given index. (The first character is at index 1.) It's illegal to index
the string outside of the bounds of the string. However, a negative
value *is* legal: it indicates an offset from the end of the string,
with -1 referring to the last character, -2 the second to last, and so
on.

```
    local g = s[-1];  // g = 'g'
```

You can also assign a value to an indexed element. This replaces the
character at that position with a given character. The replacement can
be specified as a string, in which case only the first character of the
string will be used; or as an integer, which is treated as a Unicode
character code.

```
    s[2] = 'B';
    s[3] = 67;  // unicode character 'C'
    // s now contains 'aBCdefg'
```

As with the regular index operator, you can only assign to index values
within the bounds of the text in the buffer, and you can use a negative
value to index from the end of the string.

```
    s[-1] = 'G';  // s now contains aBCdefG
```

Unlike with Strings, the `+` (addition) and
`+=` (add and assign) operators don't work with
StringBuffers. This isn't an oversight; it's to avoid confusion. The
whole point of StringBuffer is to avoid creating new objects on every
edit, but it would be confusing for `+` *not* to
create new objects when used with StringBuffer:
`+` never alters its operands, and the only way
for `+` to work on a StringBuffer without
altering it would be to create a new StringBuffer to hold the result.
But that would be confusing in its own way, because it's contrary to the
whole spirit of StringBuffer. So it seems best for
`+` to explicitly not work with this object.

## Methods

`append(*str*)`

<div class="fdef">

Appends the string *str* to the end of the StringBuffer's current text.
If *str* isn't already a string value, it'll be converted to a string,
if possible. Integers, BigNumber values, and and
`true` and `nil` values
can all be converted automatically.



`charAt(*idx*)`

<div class="fdef">

Returns an integer giving the Unicode character value of the character
at index *idx*. The index must be within the bounds of the contents of
the buffer. A negative value is an index from the end of the string (-1
refers to the last character).

</div>

`copyChars(*idx*, *str*)`

<div class="fdef">

Copy characters from the string *str* into the buffer starting at index
*idx*, overwriting the current contents. The first character is at
index 1. If *idx* is negative, it's an index from the end of the buffer,
with the last character at index -1.

</div>

`deleteChars(*idx*, *len*?)`

<div class="fdef">

Deletes *len* characters from the string starting at index *idx*. The
first character is at index 1. You can use a negative value for *idx* to
index from the end of the string, with the last character at index -1.
If *len* is omitted, all characters from the starting point to the end
of the string are deleted.

</div>

`insert(*str*, *idx*)`

<div class="fdef">

Inserts the string *str* into the StringBuffer at index *idx*; that is,
just before the character currently at the given index. The first
character is at index 1. You can use a negative value to index from the
end of the string, with the last character at index -1. If you insert at
an index past the end of the string, the result will be the same as
`append()`. As with
`append()`, *str* is automatically converted to
a string representation if it's not already a string (and a conversion
is possible).

</div>

`length()`

<div class="fdef">

Returns the length in characters of the contents of the StringBuffer.

</div>

`splice(*idx*, *len*, *str*)`

<div class="fdef">

Replaces the *len* characters starting at index *idx* with the
replacement text *str*. This is essentially a combined delete and insert
operation: we first delete *len* characters, then insert the new string
at the same position. *idx* be negative to index from the end of the
string. As with `append()`, *str* is
automatically converted to a string representation if it's not already a
string (and a conversion is possible).

</div>

`substr(*idx*, *len*?)`

<div class="fdef">

Returns an ordinary string containing the characters in the buffer
starting at index *idx* and continuing for *len* characters. If you omit
*len*, all characters from *idx* to the end of the buffer are included.
*idx* can be negative to index from the end of the string. For example,
`substr(-10)` returns a string containing the
last 10 characters in the buffer.

</div>

</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> StringBuffer  
<span class="navnp"><a href="string.html" class="nav"><em>Prev:</em> String</a>
   
<a href="strcomp.html" class="nav"><em>Next:</em> StringComparator</a>
    </span>

</div>
