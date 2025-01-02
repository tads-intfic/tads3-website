---
---
<span class="title">File</span><span class="type">class</span>

[file.h](../file/file.h.html)\[[131](../source/file.h.html#131)\]

[Superclass  
Tree](#_SuperClassTree_)

[Subclass  
Tree](#_SubClassTree_)

[Global  
Objects](#_ObjectSummary_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)

<div class="fdesc">

The File intrinsic class provides access to files in the external file
system. This lets you create, read, and write files. The class supports
text files (with translations to and from local character sets), "data"
files (using the special TADS 2 binary file format), and "raw" files
(this mode lets you manipulate files in arbitrary text or binary formats
by giving you direct access to the raw bytes in the file).

`intrinsic class `**`File`**` :   `[`Object`](../object/Object.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`File`**  
`         `[`Object`](../object/Object.html)  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

` `

*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`closeFile`](#closeFile)`  `[`digestMD5`](#digestMD5)`  `[`getCharacterSet`](#getCharacterSet)`  `[`getFileMode`](#getFileMode)`  `[`getFileSize`](#getFileSize)`  `[`getPos`](#getPos)`  `[`packBytes`](#packBytes)`  `[`readBytes`](#readBytes)`  `[`readFile`](#readFile)`  `[`setCharacterSet`](#setCharacterSet)`  `[`setFileMode`](#setFileMode)`  `[`setPos`](#setPos)`  `[`setPosEnd`](#setPosEnd)`  `[`sha256`](#sha256)`  `[`unpackBytes`](#unpackBytes)`  `[`writeBytes`](#writeBytes)`  `[`writeFile`](#writeFile)`  `

Inherited from `Object` :  
` `[`getPropList`](../object/Object.html#getPropList)`  `[`getPropParams`](../object/Object.html#getPropParams)`  `[`getSuperclassList`](../object/Object.html#getSuperclassList)`  `[`isClass`](../object/Object.html#isClass)`  `[`isTransient`](../object/Object.html#isTransient)`  `[`ofKind`](../object/Object.html#ofKind)`  `[`propDefined`](../object/Object.html#propDefined)`  `[`propInherited`](../object/Object.html#propInherited)`  `[`propType`](../object/Object.html#propType)`  `[`valToSymbol`](../object/Object.html#valToSymbol)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="closeFile"></span>

`closeFile ( )`

[file.h](../file/file.h.html)\[[292](../source/file.h.html#292)\]

<div class="desc">

Close the file. Flushes any buffered information to the underlying
system file and releases any system resources (such as share locks or
system buffers) associated with the file. After this routine is called,
no further operations on the file can be performed (a
FileClosedException will be thrown if any subsequent operations are
attempted).

If the game is running in web server mode, the file might be on a remote
storage server. In this case, if the file was opened with write access,
closing it will send the file to the storage server.

Note that this method can throw an error, so you shouldn't consider
updates to the file to be "safe" until this method returns successfully.
On many systems, writes are buffered in memory, so closing the file can
involve flushing buffers, which can trigger the same sorts of errors
that can happen with ordinary writes (running out of disk space,
physical media defects, etc). In addition, when the file is on a remote
network storage server, closing a file opened with write access
transmits the file to the storage server, which can encounter network
errors.

You should always explicitly close files when done with them. This is
especially important when writing to a file, because many systems buffer
written data in memory and don't write changes to the physical media
until the file is closed. This means that updates can be lost if the
program crashes (or the computer loses power, etc) while the file is
still open. Closing the file as soon as you're done with it reduces the
chances of this kind of data loss. It also helps overall system
performance to release resources back to the operating system as soon as
you're done with them.

If you \*don't\* close a file, though, the system will close it
automatically when the File object becomes unreachable and is deleted by
the garbage collector. It's considered bad form to depend on this for
the reasons above, and it's also problematic because you won't have any
way of finding out if an error should happen on close.

</div>

<span id="digestMD5"></span>

`digestMD5 (length?)`

[file.h](../file/file.h.html)\[[563](../source/file.h.html#563)\]

<div class="desc">

Calculate the MD5 digest of bytes read from the file, starting at the
current seek location and continuing for the given number of bytes. If
the length is omitted, the whole rest of the file is digested. This has
the side effect of reading the given number of bytes from the file, so
it leaves the seek position set to the next byte after the bytes
digested.

Returns a string of 32 hex digits giving the digest result.

This can only be used on files opened in raw mode with read access.

</div>

<span id="getCharacterSet"></span>

`getCharacterSet ( )`

[file.h](../file/file.h.html)\[[241](../source/file.h.html#241)\]

<div class="desc">

get the CharacterSet object the File is currently using; returns nil for
a non-text file

</div>

<span id="getFileMode"></span>

`getFileMode ( )`

[file.h](../file/file.h.html)\[[458](../source/file.h.html#458)\]

<div class="desc">

Get the file mode. This returns one of the FileModeXxx constants,
indicating the mode used to open the file (text, data, raw).

</div>

<span id="getFileSize"></span>

`getFileSize ( )`

[file.h](../file/file.h.html)\[[452](../source/file.h.html#452)\]

<div class="desc">

get the size in bytes of the file

</div>

<span id="getPos"></span>

`getPos ( )`

[file.h](../file/file.h.html)\[[396](../source/file.h.html#396)\]

<div class="desc">

Get the current read/write position in the file. Returns the byte offset
in the file of the next byte to be read or written. Note that this value
is an offset, so 0 is the offset of the first byte in the file.

</div>

<span id="packBytes"></span>

`packBytes (format, ...)`

[file.h](../file/file.h.html)\[[522](../source/file.h.html#522)\]

<div class="desc">

Pack the given data values into bytes according to a format definition
string, and write the packed bytes to the file. This function is
designed to simplify writing files that use structured binary formats
defined by third parties, such as JPEG or PDF. The function translates
native TADS data values into selected binary formats, and writes the
resulting bytes to the file, all in a single operation.

'format' is the format string, and the remaining arguments are the
values to be packed.

Returns the number of bytes written to the file. (More precisely,
returns the final file position as a byte offset from the starting file
pointer. If a positioning code like @ or X is used in the string, it's
possible that more bytes were actually written.)

See Byte Packing in the System Manual for details.

</div>

<span id="readBytes"></span>

`readBytes (byteArr, start?, cnt?)`

[file.h](../file/file.h.html)\[[365](../source/file.h.html#365)\]

<div class="desc">

Read bytes from the file into the given ByteArray object. This can only
be used for a file opened in 'raw' mode. If 'start' and 'cnt' are given,
they give the starting index in the byte array at which the bytes read
are to be stored, and the number of bytes to read, respectively; if
these are omitted, one byte is read from the file for each byte in the
byte array.

Returns the number of bytes actually read into the byte array, which
will be less than or equal to the number requested. If the number read
is less than the number requested, it means that the end of the file was
encountered, and only the returned number of bytes were available.

</div>

<span id="readFile"></span>

`readFile ( )`

[file.h](../file/file.h.html)\[[322](../source/file.h.html#322)\]

<div class="desc">

Read from the file. Returns a data value that depends on the file mode,
as described below, or nil at end of file.

If the file is open in text mode, this reads a line of text from the
file and returns a string with the text of the line read. A line of text
is a sequence of characters terminated with a line-ending sequence,
which is a carriage return, line feed, CR/LF pair, LF/CR pair, or a
Unicode line terminator character (0x2028) if the file is being read
with one of the Unicode encodings. If the line read ends in a
line-ending sequence, the returned text will end in a '\n' character,
regardless of which of the possible line-ending sequences is actually in
the file, so the caller need not worry about the details of the external
file's format. Every line read from the file will end in a '\n' except
possibly the last line - if the file doesn't end with a line-ending
sequence, then the last line read from the file won't end in a '\n'
character. All bytes read from the file will be mapped to characters
through the CharacterSet object currently in effect in the file, so the
returned string will always be a standard Unicode string, regardless of
the byte encoding of the file.

If the file is open in 'data' mode, this reads one data element using
the private tads-specific data format. The result is a value of one of
the types writable with writeFile() in 'data' mode. In order to read a
'data' file, the file must have been previously written in 'data' mode.

</div>

<span id="setCharacterSet"></span>

`setCharacterSet (charset)`

[file.h](../file/file.h.html)\[[251](../source/file.h.html#251)\]

<div class="desc">

Set the CharacterSet object the File is to use from now on. This isn't
meaningful except for text files. 'charset' can be a CharacterSet
object, a string giving the name of a character mapping (in which case a
CharacterSet object is automatically created based on the name), or nil
(in which case the local system's default character set for text files
is used).

</div>

<span id="setFileMode"></span>

`setFileMode (mode, charset?)`

[file.h](../file/file.h.html)\[[501](../source/file.h.html#501)\]

<div class="desc">

Change the file mode. 'mode' is a FileModeXxx value giving the desired
new file mode.

If the mode is FileModeText, 'charset' is the character set mapping to
use for the file; this can be given as a CharacterSet object, or as a
string giving the name of a character set. If the value is nil or the
argument is omitted, the local system's default character for file
contents is used. The 'charset' parameter is ignored for other modes.

</div>

<span id="setPos"></span>

`setPos (pos)`

[file.h](../file/file.h.html)\[[416](../source/file.h.html#416)\]

<div class="desc">

Set the current read/write position in the file. 'pos' is a byte offset
in the file; 0 is the offset of the first byte.

For files in 'text' and 'data' modes, a caller should NEVER set the file
position to any value other than a value previously returned by
getPos(), because other positions might violate the format constraints.
For example, if you move the file position to a byte in the middle of a
line-ending sequence in a text file, subsequent reading from the file
might misinterpret the sequence as something other than a line ending,
or as an extra line ending. If you move the position in a 'data' file to
a byte in the middle of an integer value, reading from the file would
misinterpret as a data type tag a byte that is part of the integer value
instead. So it is never meaningful or safe to set an arbitrary byte
offset in these file formats; only values known to be valid by virtue of
having been returned from getPos() can be used here in these modes.

</div>

<span id="setPosEnd"></span>

`setPosEnd ( )`

[file.h](../file/file.h.html)\[[425](../source/file.h.html#425)\]

<div class="desc">

Set the current read/write position to the end of the file. This can be
used, for example, to open a 'data' mode file for read/write/keep access
(keeping the contents of an existing file) and then adding more data
after all of the existing data in the file.

</div>

<span id="sha256"></span>

`sha256 (length?)`

[file.h](../file/file.h.html)\[[549](../source/file.h.html#549)\]

<div class="desc">

Calculate the 256-bit SHA-2 hash of bytes read from the file, starting
at the current seek location and continuing for the given number of
bytes. If the length is omitted, the whole rest of the file is hashed.
This has the side effect of reading the given number of bytes from the
file, so it leaves the seek position set to the next byte after the
bytes hashed.

Returns a string of 64 hex digits giving the hash result.

This can only be used on files opened in raw mode with read access.

</div>

<span id="unpackBytes"></span>

`unpackBytes (format)`

[file.h](../file/file.h.html)\[[535](../source/file.h.html#535)\]

<div class="desc">

Read bytes and unpack into a data structure, according to the format
description string 'desc'.

'format' is the format string. The function reads bytes from the current
location in the file and translates them into data values according to
the format string, returning a list of the unpacked values.

Refer to Byte Packing in the System Manual for details.

</div>

<span id="writeBytes"></span>

`writeBytes (source, start?, cnt?)`

[file.h](../file/file.h.html)\[[388](../source/file.h.html#388)\]

<div class="desc">

Write bytes from the given source object into the file. This can only be
used for a file opened in 'raw' mode.

The source object must be one of the following object types:

File: the contents of the given source file are copied to 'self'.
'start' is the starting seek position in the source file; if omitted,
the current seek position is the default. 'cnt' is the number of bytes
to copy; if omitted, the file is copied from the given starting position
to the end of the file.

ByteArray: the bytes of the byte array are copied to the file. 'start'
is the starting index in the byte array; if omitted, the default is the
first byte (index 1). 'cnt' is the number of bytes to copy; if omitted,
bytes are copied from the start position to the end of the array.

No return value; if an error occurs writing the data, a FileIOException
is thrown.

</div>

<span id="writeFile"></span>

`writeFile (val)`

[file.h](../file/file.h.html)\[[349](../source/file.h.html#349)\]

<div class="desc">

Write to the file. Writes the given value to the file in a format that
depends on the file mode, as described below. No return value; if an
error occurs writing the data, this throws a FileIOException.

If the file is open in text mode, this writes text to the file,
converting the given value to a string if necessary (and throwing an
error if such a conversion isn't possible), and translating the string
to be written to bytes by mapping the string through the CharacterSet
object currently in effect for the file. Note that no line-ending
characters are automatically added to the output, so if the caller
wishes to write line terminators, it should simply include a '\n'
character at the end of each line.

If the file is open in 'data' mode, this writes the value, which must be
a string, integer, enum, or 'true' value, in a private tads-specific
data format that can later be read using the same format. The values are
converted to the private binary format, which is portable across
platforms: a file written in 'data' mode on one machine can be copied
(byte-for-byte) to another machine, even one that uses different
hardware and a different operating system, and read back in 'data' mode
on the new machine to yield the original values written.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
