---
layout: docs
---


<img src="topbar.jpg" data-border="0" />
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> ByteArray  
<span class="navnp"><a href="bignum.html" class="nav"><em>Prev:</em> BigNumber</a>
    <a href="charset.html" class="nav"><em>Next:</em> CharacterSet</a>
    </span>
# ByteArray

Most TADS programs work with the T3 VM's high-level types - integers,
strings, lists, objects, and so on. In some cases, though, it's
necessary to manipulate the raw bytes that form the basic units of
storage on modern computers. The ByteArray class provides a structured
way of working directly with bytes.

A ByteArray looks superficially similar to a Vector object, in that you
can access the individual byte elements of a ByteArray using the square
bracket indexing operator:

```
    local arr = new ByteArray(100);
    arr[5] = 12;
```

The difference is that the elements of a ByteArray can only store byte
values, which are represented as integers in the range 0 to 255.

## Creating a ByteArray

You create a ByteArray object using the `new`
operator. The constructor argument is the number of bytes to allocate in
the array. This can be any value from 1 to about 2 billion. For example,
to create a byte array with 1,000 elements, you would write this:

```
    local arr = new ByteArray(1000);
```

The size of a ByteArray is fixed at creation; it can't be changed after
the object is created.

A ByteArray can also be constructed from a string value:

```
    arr = new ByteArray('the new contents go here!');
```

That creates a ByteArray just large enough to hold the bytes in the
given string. The characters in the string are converted to bytes simply
by storing each Unicode character value as one byte. This means that
each character must actually fit in one byte, which is only the case for
character codes 0 to 255. For example, the string above would store the
byte values 116 (the Unicode character code for 't'), 104 (for 'h'), 101
(for 'e'), etc. If the string contains any characters outside of the
0-255 range, a "numeric overflow" error is thrown, because larger
character values can't fit into a byte.

Alternatively, you can specify a particular character set, rather than
trying to stuff 16-bit Unicode characters into 8-bit bytes:

```
    arr = new ByteArray('another new string!', 'latin-2');
```

When you supply a character set, the new byte array is created by
mapping the characters to bytes using the character set. The new array
will be just big enough to hold the mapped string bytes. In this case,
characters that don't exist in the target character set are represented
by a "missing character" symbol, as usual for character mappings.

Another way of creating a ByteArray is to create a copy of another byte
array or a portion of another byte array:

```
    arr = new ByteArray(otherArray, startIndex, len);
```

The *startIndex* and *len* parameters are optional; if they're missing,
the new byte array will simply be a complete copy of the existing byte
array. If *startIndex* and *len* are provided, the new array will be a
copy of the region of the other byte array starting at index startIndex
and continuing for len bytes. If *startIndex* is specified but *len* is
missing, the new array will consist of all of the bytes from the
original starting with *startIndex* and continuing to the end of the
original array.

## Converting a ByteArray to a string

You can convert a ByteArray to a string value using the
[`toString()`](tadsgen.html#toString) function.
This simply treats each byte in the string as a Unicode character code,
and creates a string with those characters.

ByteArrays can also be used in contexts where values will be implicitly
converted to strings, such as displaying them with "\<\< \>\>"
expressions. A ByteArray in such a context is converted just as with
`toString()`.

If the bytes in the array represent characters in some non-Unicode
character set, you can map the bytes to Unicode using the
[`mapToString`](#mapToString) method. This lets
you specify the source character set, so that the bytes are correctly
translated to Unicode characters.

## Reference Semantics

Like Vector objects, a ByteArray has reference semantics: when you
change a value in a byte array, any other variables that refer to the
same ByteArray will refer to the modified version of the array.

## Reading and Writing Raw Files

One of the main tasks that ByteArray objects are designed for is working
with files stored in third-party data formats. Using ByteArray objects,
you can work on a file directly at the byte level, allowing you to
process data in arbitrary binary formats.

To read or write a file using ByteArray objects, you have to open the
file in "raw" mode. Once a file is opened in raw mode, use the
`readBytes()` and
`writeBytes()` methods of the File object to
read bytes from the file into a ByteArray, and to write bytes from a
ByteArray into the file. Refer to the [File class](file.html) for
information on the file input/output.

## ByteArray methods

`copyFrom(*sourceArray*, *sourceStartIndex*,
*destStartIndex*, *length*)`



Copies bytes from *sourceArray*, which must be another ByteArray object.
Copies bytes starting with the byte in *sourceArray* indexed by
*sourceStartIndex*, and continuing for *length* bytes; stores the bytes
in this array starting at the byte indexed by *destStartIndex*.

This routine is safe to use even if *sourceArray* is the same as the
target object, and even if the ranges overlap. When copying bytes
between overlapping regions of the same array, this routine is careful
to move the bytes without overwriting any source bytes before they've
been moved.



`digestMD5(*startIndex*?, *length*?)`



Calculates the 128-bit RSA MD5 message digest of the string, returning a
string of 32 hex digits representing the hash value.

*startIndex* gives the starting index for the bytes to hash, and
*length* is the number of bytes to hash from the starting point. If
*length* is omitted, all bytes from *startIndex* to the end of the array
are included in the hash; if *startIndex* is omitted, the entire array
is hashed.

MD5 was originally designed for cryptographic applications, but it has
some known weaknesses and is no longer considered secure. Even so, it's
still considered a good checksum, and it's widely used for message
integrity checking. It's also part of several Internet standards (e.g.,
HTTP digest authentication). In an Interactive Fiction context,
[Babel](http://babel.ifarchive.org/) uses MD5 to generate IFIDs for
older games. If you're looking for a secure hash, consider SHA-2 (see
[`sha256()`](#sha256)) instead of MD5.



`fillValue(*val*, *startIndex*?, *length*?)`



Stores the value *val* in each element of the array, starting at index
*startIndex* and filling the next *length* bytes. If *startIndex* and
*length* are missing, *val* is stored in every element of the array. If
*startIndex* is given but length is missing, *val* is stored in every
element from *startIndex* to the end of the array. The value *val* must
be an integer in the range 0 to 255.



`length()`



Returns the number of bytes in the ByteArray. This is the same as the
size specified when the object was created.



<span id="mapToString"></span>

`mapToString(*charset*?, *startIndex*?,
*length*?)`



Maps the bytes in the array to a string.

If *charset* is specified and isn't `nil`, it
must be either a [CharacterSet](charset.html) object, or a string giving
the name of a character set. The method maps the bytes in the array to a
string using the given character set mapping.

If you specify a string as the *charset* value, the method automatically
creates a CharacterSet object for the given character set name. This is
a little more convenient for one-time conversions, but note that it's
more efficient for you to create and re-use a CharacterSet object if
you're likely to use it more than once.

The character set given by *charset* must be known. If the character set
is not known, an UnknownCharSetException is thrown. You can determine if
the character set is known using the isMappingKnown() method of charset.

If the *charset* argument is omitted or `nil`,
the bytes are converted to characters by treating them as Unicode
character codes. This is effectively the same as mapping the bytes as
Latin-1 characters, since Latin-1 and Unicode have identical character
codes in the 0-255 range, which is the full range of values that can be
stored in bytes.

Returns a string with the result of the character mapping. Only the
bytes starting at index *startIndex* and running for *length* bytes are
included in the mapping. If *startIndex* and *length* are missing, all
of the bytes in the array are mapped. If *startIndex* is given but
*length* is missing, the bytes from *startIndex* to the end of the array
are included in the mapping.



<span id="packBytes"></span>

`packBytes(*startIndex*, *format*, ...)` /
`ByteArray.packBytes(*format*, ...)`



Converts data values into bytes, according to your format
specifications, and stores the bytes in an existing or new byte array.

There are two ways to call this method: the regular method call version,
which you call on an existing ByteArray object; and the static version,
which you call on the ByteArray class itself.

**Regular method call version:** This version packs bytes and writes
them into an existing byte array at the given starting index.
Syntactically, you invoke this version on an existing ByteArray object,
like this:

```
    local arr = new ByteArray(1000);
    arr.packBytes(1, 'l5', 1, 2, 3, 4, 5);
```

*startIndex* is the starting index in the byte array for the packed
bytes. Bytes are packed starting at this position, continuing for as
many bytes as needed to pack all of the values in the argument list.

*format* is the format string, which specifies the binary encoding to
use for each value to be packed. The remaining arguments are the values
to be packed, which correspond to items in the format string.

The return value is the number of bytes written to the array. (More
precisely, it's the difference between the final write position and
*startIndex*. If you use a positioning code like X or @, you can move
the write position backwards, which could make the return value smaller
than the actual number of bytes written.) You can use the returned byte
count to keep track of the write position for each packing list if
you're making a series of packBytes calls:

```
    local arr = new ByteArray(1000);
    local idx = 1;
    idx += arr.packBytes(idx, 'l5', 1, 2, 3, 4, 5);
    idx += arr.packBytes(idx, 's3', 6, 7, 8);
    idx += arr.packBytes(idx, 'a10', 'done!');
```

The byte array must be large enough for all of the values packed. An
exception will be thrown ("error writing file") if the array is too
small.

**Static version:** This version packs bytes into a new ByteArray
object. The new array will be exactly large enough to hold the packed
bytes. Syntactically, you invoke this version directly on the ByteArray
class:

```
    local arr = ByteArray.packBytes('l5', 1, 2, 3, 4, 5);
```

The static version of the method doesn't take a starting index argument,
since it always stores the packed bytes at index 1 in the new array.
This version of the method returns the newly created ByteArray object.

See [Byte Packing](pack.html) for more information.



`readInt(*startIndex*, *format*)`



Note: this routine is still supported, but the newer
[unpackBytes](#unpackBytes) method can accomplish the same task, usually
a lot more conveniently.

Translates bytes from the byte array into an integer value. Reads from
the byte array starting at the byte given by *startIndex*, and reads the
number of bytes implied by the format code given by *format,* which also
indicates how the bytes should be interpreted into an integer value. The
return value is the integer value read and translated from the byte
array.

The format code given by format is a bit-wise combination of three
parts: a size, a byte order, and a signedness:

- The size gives the number of bits in the integer; this can be one of
  the values `FmtSize8`,
  `FmtSize16`, or
  `FmtSize32`, indicating 8-bit, 16-bit, and
  32-bit values, respectively.
- The byte order can be `FmtBigEndian` or
  `FmtLittleEndian`. A big-endian value is
  stored with its most significant byte first, followed by the
  second-most significant byte, and so on. A little-endian value is
  stored in the opposite order, with its least significant byte first.
  The `readInt()` method makes it possible to
  specify the desired byte ordering because the native byte ordering of
  different hardware platforms varies, and as a result, the ordering of
  bytes in data fields in file formats specified by third-party
  applications can vary. Note that the byte order is irrelevant in the
  case of 8-bit values, since an 8-bit value requires only one byte in
  the byte array.
- The signedness indicates whether the integer is to be interpreted as
  signed or unsigned; this can be `FmtSigned` or
  `FmtUnsigned`. Note that the T3 VM doesn't
  have an unsigned 32-bit datatype, so
  `FmtUnsigned` isn't meaningful with
  `FmtSize32`.

So, to specify a signed 16-bit value in big-endian byte order, you'd use
`(FmtSize16 \| FmtSigned \| FmtBigEndian)`.

It's a lot of typing to specify all three parts of a data format, so the
byte array system header file defines all of the useful combinations as
individual macros:

- `FmtInt8` (signed 8-bit integer)
- `FmtUInt8` (unsigned 8-bit integer)
- `FmtInt16LE` (signed 16-bit integer in
  little-endian byte order)
- `FmtUInt16LE` (unsigned 16-bit integer in
  little-endian byte order)
- `FmtInt16BE` (signed 16-bit integer in
  big-endian byte order)
- `FmtUInt16BE` (unsigned 16-bit integer in
  big-endian byte order)
- `FmtInt32LE` (signed 32-bit integer in
  little-endian byte order)
- `FmtInt32BE` (signed 32-bit integer in
  big-endian byte order)

This function simply reads the bytes out of the byte array and
translates them according to the *format* specification. There is no
information in the byte array itself that indicates how the bytes are to
be interpreted into an integer, so it is up to your program to specify
the correct format translation. You'll get strange results if you
attempt to read values in a format different from the format that was
used to write them.



<span id="sha256"></span>

`sha256(*startIndex*?, *length*?)`



Calculates the 256-bit SHA-2 (Secure Hash Algorithm 2) hash of the
string, returning a string of 64 hex digits representing the hash value.
SHA-2 is a standard hash algorithm that's considered (at the time of
this writing) secure for cryptographic purposes.

*startIndex* gives the starting index for the bytes to hash, and
*length* is the number of bytes to hash from the starting point. If
*length* is omitted, all bytes from *startIndex* to the end of the array
are included in the hash; if *startIndex* is omitted, the entire array
is hashed.



`subarray(*startIndex*, *length*?)`



Returns a new ByteArray consisting of the region of this array starting
with the byte indexed by *startingIndex* of the number of bytes given by
*length.* If *length* is not supplied, the new ByteArray consists of all
of the bytes from *startingIndex* to the last byte of this array.



<span id="unpackBytes"></span>

`unpackBytes(*startIndex*, *format*)`



Unpacks bytes from the array, starting at the given index, translating
the bytes into values according to the given format string.

*startIndex* is the starting index in the byte array of the bytes to
unpack (the first byte is at index 1). *format* is a byte packer format
string, specifying the items to be unpacked.

The return value is a list containing the unpacked values.

If you need to make a series of unpackBytes() calls, you'll probably
need a way to keep track of the number of bytes unpacked on each call,
to figure the starting point for the next call. The special format code
`@?` is designed for this: it returns the byte
offset from the start of the current unpack list. Include
`@?` as the last value in your format string;
this will return the byte offset as the last element of the returned
value list. Add this to the previous starting index to get the next
starting index:

```
    local idx = 1; // start at the first byte of the array
    local lst = arr.unpackBytes(idx, 'l5 @?'); // unpack the first batch of values

    idx += lst[lst.length()];  // the last value is the number of bytes read
    lst = arr.unpackBytes(idx, 's3 @?'); // unpack the next batch

    idx += lst[lst.length()];  // advance to the index again
    lst = arry.unpackBytes(idx, 'a10'); // unpack the last batch
```

See [Byte Packing](pack.html) for more information.



`writeInt(*startIndex*, *format*, *val*)`



Note: this routine is still supported, but the newer
[packBytes](#packBytes) method can accomplish the same task, usually a
lot more conveniently.

Translates an integer value into a series of bytes, and writes the bytes
into the array. The bytes are written starting at the index given by
*startIndex*. The number of bytes written is the byte size implied by
the format code given by *format*. The *val* argument gives the integer
value to be written.

The format code in *format* has the same meaning as the format code in
`readInt()`.

Note that this method doesn't perform any range checking on *val*. If
*val* is outside of the limits that can be represented with the
specified format code, this method will simply truncate the value stored
to its low-order portion, discarding any high-order bits that won't fit
the format. For example, if you attempt to store 1000 in an unsigned
8-bit format, the value stored would be 232; we can see this more easily
by noting that 1000 is 0x3E8 in hexadecimal, so when we truncate this to
8 bits, we get E8 in hex, which is 232 in decimal. Note also that if you
later attempted to read this value back as a signed 8-bit value, the
result would be even stranger: it would be -24. This is because E8 is
negative when interpreted as signed, so it would be interpreted as the
integer 0xFFFFFFE8, which is -24. If you need range checking, your
program must provide it. Here are the limits of the different types:

- Signed 8-bit: -128 to +127
- Unsigned 8-bit: 0 to +255
- Signed 16-bit: -32768 to +32767
- Unsigned 16-bit: 0 to +65535
- Signed 32-bit: -2147483648 to +2147483647

The capacity of a type doesn't depend on its byte order. Note that there
should be no need for range checking on a 32-bit value, since the T3
VM's internal integer type itself is a 32-bit signed value and thus
can't exceed this range to begin with.

This method stores only the bytes of the translated integer value. It
doesn't store any information on the format code used to generate the
value; this means that if you later want to read the integer value back
out of the byte array, it will be up to your program to specify the
correct format code.
------------------------------------------------------------------------



*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> ByteArray  
<span class="navnp"><a href="bignum.html" class="nav"><em>Prev:</em> BigNumber</a>
    <a href="charset.html" class="nav"><em>Next:</em> CharacterSet</a>
    </span>


