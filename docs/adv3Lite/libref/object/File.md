<span class="title">File</span><span class="type">class</span>
[Superclass  
[Subclass  
[Global  
[Property  
[Method  
[Property  
[Method  
<div class="fdesc">

text files (with translations to and from local character sets), "data"
files (using the special TADS 2 binary file format), and "raw" files
(this mode lets you manipulate files in arbitrary text or binary formats
by giving you direct access to the raw bytes in the file).
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
*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">
<span class="hdln">Summary of Methods</span>  

</div>
Inherited from `Object` :  
<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  
</div>
*(none)* <span id="_Methods_"></span>
<div class="mjhd">
<span class="hdln">Methods</span>  

</div>

<span id="closeFile"></span>
<div class="desc">

Note that this method can throw an error, so you shouldn't consider
updates to the file to be "safe" until this method returns successfully.
On many systems, writes are buffered in memory, so closing the file can
involve flushing buffers, which can trigger the same sorts of errors
that can happen with ordinary writes (running out of disk space,
physical media defects, etc). In addition, when the file is on a remote
network storage server, closing a file opened with write access
written data in memory and don't write changes to the physical media
still open. Closing the file as soon as you're done with it reduces the
you're done with them.
If you \*don't\* close a file, though, the system will close it
the garbage collector. It's considered bad form to depend on this for
the reasons above, and it's also problematic because you won't have any
way of finding out if an error should happen on close.

</div>
<span id="digestMD5"></span>
<div class="desc">

</div>

<span id="getCharacterSet"></span>
<div class="desc">

</div>

<span id="getFileMode"></span>
<div class="desc">

</div>

<span id="getFileSize"></span>
<div class="desc">

</div>

<span id="getPos"></span>
<div class="desc">

</div>

<span id="packBytes"></span>
<div class="desc">

'format' is the format string, and the remaining arguments are the
pointer. If a positioning code like @ or X is used in the string, it's
</div>

<span id="readBytes"></span>
<div class="desc">

be used for a file opened in 'raw' mode. If 'start' and 'cnt' are given,
they give the starting index in the byte array at which the bytes read
are to be stored, and the number of bytes to read, respectively; if
</div>

<span id="readFile"></span>
<div class="desc">

line-ending sequence, the returned text will end in a '\n' character,
file's format. Every line read from the file will end in a '\n' except
possibly the last line - if the file doesn't end with a line-ending
sequence, then the last line read from the file won't end in a '\n'
character. All bytes read from the file will be mapped to characters
through the CharacterSet object currently in effect in the file, so the
returned string will always be a standard Unicode string, regardless of
the byte encoding of the file.

If the file is open in 'data' mode, this reads one data element using
the types writable with writeFile() in 'data' mode. In order to read a
'data' file, the file must have been previously written in 'data' mode.

</div>
<span id="setCharacterSet"></span>
<div class="desc">

Set the CharacterSet object the File is to use from now on. This isn't
meaningful except for text files. 'charset' can be a CharacterSet
(in which case the local system's default character set for text files
</div>

<span id="setFileMode"></span>
<div class="desc">

Change the file mode. 'mode' is a FileModeXxx value giving the desired
If the mode is FileModeText, 'charset' is the character set mapping to
argument is omitted, the local system's default character for file
contents is used. The 'charset' parameter is ignored for other modes.
</div>

<span id="setPos"></span>
<div class="desc">

Set the current read/write position in the file. 'pos' is a byte offset
in the file; 0 is the offset of the first byte.
For files in 'text' and 'data' modes, a caller should NEVER set the file
position to any value other than a value previously returned by
or as an extra line ending. If you move the position in a 'data' file to
a byte in the middle of an integer value, reading from the file would
</div>

<span id="setPosEnd"></span>
<div class="desc">

used, for example, to open a 'data' mode file for read/write/keep access
(keeping the contents of an existing file) and then adding more data
after all of the existing data in the file.

</div>
<span id="sha256"></span>
<div class="desc">

</div>

<span id="unpackBytes"></span>
<div class="desc">

description string 'desc'.
'format' is the format string. The function reads bytes from the current
location in the file and translates them into data values according to
the format string, returning a list of the unpacked values.
</div>

<span id="writeBytes"></span>
<div class="desc">

used for a file opened in 'raw' mode.
File: the contents of the given source file are copied to 'self'.
'start' is the starting seek position in the source file; if omitted,
the current seek position is the default. 'cnt' is the number of bytes
ByteArray: the bytes of the byte array are copied to the file. 'start'
first byte (index 1). 'cnt' is the number of bytes to copy; if omitted,
bytes are copied from the start position to the end of the array.
</div>

<span id="writeFile"></span>
<div class="desc">

error if such a conversion isn't possible), and translating the string
wishes to write line terminators, it should simply include a '\n'
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

Adv3Lite Library Reference Manual  

</div>