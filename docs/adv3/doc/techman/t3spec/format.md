<div class="topbar">

<img src="../topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="../toc.htm" class="nav">Table of Contents</a> \|
<a href="../t3spec.htm" class="nav">T3 VM Technical Documentation</a> \>
Image File Format  
<span class="navnp"><a href="opcode.htm" class="nav"><em>Prev:</em> Byte-Code Instruction
Set</a>    
<a href="bincode.htm" class="nav"><em>Next:</em> Portable Binary
Encoding</a>     </span>

</div>

<div class="main">

![](t3logo.gif)

  
  

## T3 VM Image File Format

An "image" is a file that contains a program that the T3 VM can load and
execute. An image file is so named because the file contains a snapshot
of memory as it looks when the program is executing; the image file
contains additional information as well, which describes the contents of
the file and the image data. Because the image file contains more than
just the memory snapshot, the VM can't simply copy the image file
directly into memory and begin execution, but must perform some
additional work to interpret the data in the file as it loads the file.

The image file format is part of the T3 specification because of the
requirement that T3 programs be portable in their binary representation.
In order to ensure that a compiled T3 program can be copied to any type
of computer and executed using any T3 implementation, we must specify a
common file format that all T3 interpreters understand.

### Contents

- [Format Versioning](#Versioning)
- [File Structure](#Structure)
  - [Signature](#Signature)  
  - [Data Blocks](#DataBlocks)  
  - [Block Header Flags](#BlockFlags)  
  - Data Block Types
    - [EOF (end of file)](#BlockEOF)
    - [ENTP (entrypoint)](#BlockENTP)
    - [OBJS (static objects)](#BlockOBJS)
    - [CPDF (constant pool definition)](#BlockCPDF)
    - [CPPG (constant pool page)](#BlockCPPG)
    - [MRES (multi-media resource)](#BlockMRES)
    - [MREL (multi-media resource links)](#BlockMREL)
    - [MCLD (metaclass dependency list)](#BlockMCLD)
    - [FNSD (function set dependency list)](#BlockFNSD)
    - [SYMD (symbolic names)](#BlockSYMD)
    - [SRCF (source file descriptor)](#BlockSRCF)
    - [GSYM (global symbol table)](#BlockGSYM)
    - [MHLS (method header list)](#BlockMHLS)
    - [MACR (preprocessor macro symbol table)](#BlockMACR)
    - [SINI (static initializer list)](#BlockSINI)
- [Resource-only Image Files](#ResFiles)
- [MIME Type for T3 Image Files](#MIMEtype)

  
  

------------------------------------------------------------------------

<span id="Versioning"></span>

### File Format Versioning

The file header contains the file format version number that the image
file uses. The file format version is separate from the rest of the VM
specification; changes in the VM do not necessarily require changes in
the file format, hence multiple VM versions may use a single format
version. In addition, a particular VM implementation will usually
recognize and accept a range of format versions; because the loader
knows the file's version (from reading the information from the header),
it can interpret the image file data correctly for a set of different
format versions.

The image file format may evolve over time, so it may be necessary for
the loader to know the file format version that the file uses so that
the loader can properly interpret elements that vary in different format
versions. The file format is designed for flexibility, so that additions
and changes to the format can be made in such a way that they preserve
compatibility with other format versions, even without actually knowing
the file's format version; past experience has shown, though, that it is
occasionally necessary to make incompatible changes. By encoding the
format version number in the file, the loader can determine how it
should interpret the file, which allows a newer version of the loader to
handle older format versions, and also allows an older version of the
loader to detect that it cannot properly interpret a newer format
version.

Note that the file format is designed to accomodate many types of
changes without requiring a version change. Most of the information
stored in the file is arranged into self-describing structures, which
automatically adjust for additional fields. Whenever possible, future
changes will be made in such a way as to maintain compatibility with the
current file format. The file format version number needs to be changed
only when it would otherwise be impossible for the loader to properly
interpret new or changed information under the old format rules.  
  

------------------------------------------------------------------------

<span id="Structure"></span>

### File Structure

The image file starts with a signature, which is a short string of bytes
that marks the file as a valid T3 image file and indicates the version
of the image file format that the file uses. This information must be
version-invariant for all future versions, so that any VM version will
be able to determine the format version of any image file.

After the signature, the file consists of a varying number of data
blocks. Each block is marked with a type identifier, which specifies the
nature of the data stored in the block, and a size marker, which
indicates the number of bytes of data stored in the block.

In general, the order of the data blocks is unimportant, so the compiler
or linker can generate blocks in any order that is convenient. In some
cases, one type of block depends upon another having already been
loaded; any such ordering dependencies are described below in the
documentation of the specific block types.

The size of each data block is given by a 32-bit unsigned integer, with
resolution of one byte, which allows each data block to be up to 4
gigabytes in length. Note that, in most cases, compilers should limit
data blocks to smaller sizes. In particular, portions of data blocks
that are meant to be treated as single contiguous units, such as the
bytes of a constant pool page block, should be limited to sizes 64k or
smaller, to accomodate 16-bit machines. These practical limits will be
noted in the descriptions of the individual data block types to which
they apply.

Finally, after all of the data blocks, the file contains an end-of-file
marker. This marker is in the form of a data block header, but no data
block follows.

Within the file, all data are stored without any padding or alignment,
except where otherwise specified. Primitive types are stored using the
[TADS Portable Binary Encoding](bincode.htm) formats.

The file format is entirely self-relative: all file seek locations
stored within the file are given as offsets from another position in the
file (generally from the location of the seek offset value itself). This
means that the entire image file can be stored within a larger file
structure; for example, an image file could be appended to a T3 VM
implementation's application executable, allowing a T3 program to be
packaged as a native executable in a single file, or an image file could
be embedded within a resource file. So, whenever we refer to a seek
offset relative to the start of the file, we are actually referring to
an offset relative to the first byte of the T3 image data, which can be
at an arbitrary offset within the underlying operating system file.

------------------------------------------------------------------------

<span id="Signature"></span>

### Signature

The first bytes in the file (starting at byte offset zero) give the file
signature. The signature should use this same format in all future
versions of the file format, so that any VM can identify the format
version of any image file.

The signature starts with a set of fixed byte values. In hexadecimal:

        54, 33, 2D, 69, 6D, 61, 67, 65, 0D, 0A, 1A

Or, as a C string:

        "T3-image\015\012\032"

When loading a file, the loader checks the first bytes of the file to
ensure that they match this signature; if they do not, the loader can
immediately reject the file. This is meant as a trivial test of validity
for the file; although it would be possible (in fact, simple) to
intentionally construct an invalid file that passes this test, checking
the signature at least immediately detects when a user inadvertantly
attempts to load a non-image file and allows the VM to generate a more
specific and helpful diagnostic message ("this is not a T3 image file"
instead of "corrupted file" or "attempt to read past end of file" or,
even worse, successful loading of garbage data).

The signature also provides a simple means for other applications to
classify the file as a T3 image file, merely by scanning the first few
bytes of the file.

The inclusion of the values 0D, 0A, and 1A at the end of the string is
meant as a convenience to users who attempt to view or process the file
through a text-based file viewer or utility. Text-based utilities on
many systems will interpret the 0D and/or 0A characters as end-of-line
indicators, making the text "T3-image" appear on a line by itself; in
addition, many utilities will interpret the 1A character as an
end-of-file indicator, which will terminate the display. This won't show
the user much information about the file, but will at least give an
indication of the type of the file. This is purely a convenience; it's
impossible to devise a scheme that will give any meaningful information
about the file for every utility on every system, but this encoding
should provide reasonable behavior on a large number of systems.

Following these fixed bytes is the file format version number. The
version number is encoded in two bytes, in portable UINT2 format. The
purpose of the format version number (as described in the [File Format
Versioning](#Versioning) section) is to indicate changes to the
structure of the file that are outside of other capabilities of the
present format to describe, so that future loaders can distinguish
between such incompatible format changes in order to load older files
using older rules, and newer files using newer rules.

**The current file format version is 2 (0x0002).** Any future
incompatible formats will use higher numbers.

**Differences between file format version 1 and 2:** The changes to the
format in version 2 are backward compatible, so a v2 loader can read a
v1 file without any extra work. However, a v1 loader won't be able to
correctly execute a v2 file. The version number change ensures that an
older loader will recognize the incompatibility and immediately exit
with an error, rather than attempting to execute the program and
producing erratic results. The changes that are problematic for v1
loaders are:

- Version 2 has the following new byte-code instructions not present in
  v1: IFCX
- The version 2 method header adds the optional argument count (as the
  second byte of the header).

Loaders written only to the current specification should check the
format version number, and reject files with higher numbers than the
current file format version. Since a file format version number change
indicates an incompatible change, loaders written to the current
specification will not be able to correctly interpret newer file
formats. Note that this doesn't mean that a loader can't be written to
read multiple versions; in fact, allowing support for multiple versions
in the same loader is part of the point of the version number mechanism.
However, a loader written at any given time obviously can't anticipate
future changes, so it can only accept files with the latest (at the time
of its implementation) format version, plus any earlier formats that it
has also been designed to interpret.

Following the version number is a block of 32 reserved bytes. In the
current format specification, the first 28 bytes of this block must all
be set to zero (0x00), and the last 4 bytes are reserved for use by
compilers, linkers, and other tools that produce image files. Such tools
are free to use the four bytes at offsets 41 through 44 in the image
file as they please; the format specification imposes no interpretation
upon these bytes, but merely requires that VM implementations ignore
these bytes. The first 28 bytes should always be set to zero for files
conforming to this version of the format specification, to ensure
compatibility in the event these bytes are assigned specific uses in the
future.

Note that a version 1 loader must not look at the contents of the 32
reserved bytes; in particular, the loader must not consider it an error
if the bytes contain values other than zero. By ignoring these bytes,
the loader will ensure that files created with future versions that use
the reserved area can be properly loaded (with reduction of any new
functionality specified in the reserved area, of course).

Following the 32 reserved bytes is the image file timestamp. This
timestamp consists of 24 bytes, using a format like
"`Sun Aug 01 17:05:20 1999`" (this is the same format returned by the C
standard library function `asctime()`, minus the newline and terminating
null byte). The timestamp indicates the time the image file was created,
so this value should be set by the compiler or linker when creating the
image file.

The timestamp is stored in the image file to provide a simple way of
ensuring that a saved state file, when loaded, was created by the same
version of the image file that is attempting to load it. Since a saved
state file can only be correctly restored by the same version of an
image file that created it, we must have a way of checking this when
loading a saved state file. The timestamp mechanism is not completely
safe, because it would be possible to compile two separate image files
with the same timestamp value, but the timestamp vastly reduces the
likelihood of accidentally confusing one program's saved state files for
another program's.

In schematic form, the signature block looks like this:

Byte Offset (from start of file)

Value

0

0x54 'T'

1

0x33 '3'

2

0x2D '-'

3

0x69 'i'

4

0x6D 'm'

5

0x61 'a'

6

0x67 'g'

7

0x65 'e'

8

0x0D '\015'

9

0x0A '\012'

10

0x1A '\032'

11

*low-order 8 bits of format version number (currently 0x01)*

12

*high-order 8 bits of format version number (currently 0x00)*

13-40

*currently reserved; set all 28 bytes to zero (0x00)*

41-44

*build configuration hash code (reserved for use by compilers, linkers,
and other build tools, and up to these tools to use as they wish; VM
implementations should simply ignore this field)*

45-68

*timestamp in format `Sun Aug 01 17:05:20 1999`*

------------------------------------------------------------------------

<span id="DataBlocks"></span>

### Data Blocks

After the signature, the file contains one or more data blocks. A file
cannot have zero data blocks, because, minimally, an EOF block is
required. In practice, the VM loader requires certain other data blocks
to be present as well, so the loader will always reject a file with only
an EOF block; but an image file could be considered well-formed, in the
sense that the loader would be able to properly interpret the structure
of the file, with only an EOF block.

Each data block starts with a 10-byte header describing the block. The
first four bytes of this header give the type of the block; each block
type has a unique four-byte identifier. The next four bytes of the
header give the size of the block, in bytes, expressed as a portable
UINT4 value; this size value does *not* include the size of the 10-byte
header. The next two bytes provide 16 bits of flags, expressed as a
portable UINT2 value.

Immediately following the header is the data block itself. Following the
data block is the next block's header.

In schematic form, the block header looks like this:

Byte Offset (from start of header)

Value

0

*first byte of block type ID*

1

*second byte of block type ID*

2

*third byte of block type ID*

3

*fourth byte of block type ID*

4

*bits 0-7 of block size in bytes*

5

*bits 8-15 of block size in bytes*

6

*bits 16-23 of block size in bytes*

7

*bits 23-31 of block size in bytes*

8

*bits 0-7 of flags*

9

*bits 8-15 of flags*

<span id="BlockFlags"></span>

### Data Block Header Flags

Each header includes a 16-bit unsigned integer which specifies a set of
flags for the header. These flags are defined independently of the block
type (all type-specific flags and other information are stored within
the data block itself).

#### "Mandatory" Flag

Flag bit 0 (i.e., the least-significant bit in the first byte of the
flags) is the "mandatory" flag. This flag is set to 0 for blocks that
can safely be ignored by the VM, and is set to 1 for blocks that must be
recognized and loaded.

The purpose of the "mandatory" flag is to allow for new block types to
be added in future revisions of the VM specification while retaining
image file compatibility with older VM implementations. A particular VM
implementation will only be able to recognize the block types that are
defined in the version of the specification that it implements; thus,
the implementation would be unable to recognize a new block type added
in a later version of the specification. The "mandatory" field tells the
older implementation whether the block is required to properly interpret
the image file, or is only advisory. In the case that the block is not
required, the implementation can load the newer image file simply by
ignoring the new information that it can't interpret.

Past experience has shown that it is often useful to add new information
to an image file that augments the information in the file, perhaps by
adding new functionality or improving performance, but which can be
omitted without completely losing the meaning of the file. In these
cases, an older implementation will be unable to take advantage of the
new information, and hence won't be able to offer the new functionality
or improved performance the new information enables, but will still be
able to provide otherwise correct behavior. In such cases, where the
omission of a new block would result in graceful degradation of
functionality, the new block could be included with the "mandatory" flag
set to zero.

Any time the image file loader encounters a block type that it doesn't
recognize, the loader checks the "mandatory" flag's value. If the flag
is set to one, the loader throws an error (UNKNOWN_IMAGE_BLOCK). If the
flag is set to zero, the loader simply ignores the block and continues
loading the file at the next block; note that the block header always
contains the size of the block, so the loader can determine where the
next block starts even though it can't interpret the contents of the
unrecognized block.

#### Reserved Flags

Flag bits 1 through 15 are reserved for future use.

The compiler must set all reserved flag bits to zero. This will simplify
the addition of new flags in the future, since all image files created
prior to a given version can be assumed to use a default value of zero
for any new flags defined in the new version.

------------------------------------------------------------------------

<span id="BlockEOF"></span>

### EOF Block

**Identifier: "EOF "**

The EOF (end of file) block is always the last data block in the file.
The EOF block contains no data, so the data block size in the EOF block
header is zero. The EOF type identifier is "EOF " (the fourth byte is an
ASCII space character, byte value 0x20).

The EOF block's "mandatory" flag should always be set to 1.

In schematic format:

Byte Offset (from start of header)

Value

0

0x45 'E'

1

0x4F 'O'

2

0x46 'F'

3

0x20 ' '

4

0x00

5

0x00

6

0x00

7

0x00

8

0x01

9

0x00

Note that it is legal for additional data (part of the same physical
file as the image file, but not part of the image data) to follow the
EOF block header in the file; the loader simply ignores anything that
follows. The T3 image file may thus be embedded into a larger file
structure (a resource file format, for example), or may contain
additional data appended to the end of the file; the loader considers
any data that follow the EOF block to be part of some external structure
and not part of the image file.

------------------------------------------------------------------------

<span id="BlockENTP"></span>

### Entrypoint Block

**Identifier: "ENTP"**

The Entrypoint block specifies the address of the beginning of the
executable code of the image, and the sizes of various data structures
that are global to the file: the method header size, the exception table
entry size, and the debugger line record entry size. After the VM loads
the image, it invokes the byte code at the entrypoint address. When this
code returns to its caller, or throws an exception, the VM terminates
the program contained in the image.

The entrypoint address is given as a code pool offset value.

All method headers in an image file must be the same size. This size is
specified in the ENTP block as a UINT2 value. Similarly, all of the
exception table entries in the image file must be the same size, as must
the debugger source line records (if the image file contains debugging
information at all).

The entrypoint data block is arranged like this:

"ENTP" Header

UINT4 (code pool offset of byte code to execute after loading image)

UINT2 (method header size of all methods in image file)

UINT2 (exception table entry size for all exception tables)

UINT2 (debugger line table entry size for all line tables)

UINT2 (debug table header size for all debug tables)

UINT2 (debug table local symbol record header size for all debug tables)

UINT2 (debug records version number)

UINT2 (debug table frame header size) **(new in version 2)**

An image file is required to have exactly one Entrypoint block. The VM
throws an exception if the image has no Entrypoint block or more than
one such block.

If the method header size specified in the ENTP block is incompatible
with the header size required by the current version of the VM
implementation, the VM throws an error. The purpose of specifying the
size in the image file is to allow version flexibility: if new fields
are added at the end of the method header in the future, the VM can
detect from the information stored in the ENTP block whether or not the
new fields are present in the image file, and can thus run older image
files by providing default values for the missing fields (possibly with
degraded performance or functionality due to the missing information).
Conversely, the VM can run image files with newer fields that it doesn't
recognize by ignoring the new fields; since the VM knows the size of the
header from ENTP information, the VM can know how much data to skip even
though it doesn't know what the data bytes contain.

The exception table entry size, the debugger line table entry size, the
debug table header size, and the debug table local symbol header size
are similarly specified here to allow for future expansion while
maintaining compatibility. The debug table frame header size is similar;
this was added in image file format version 2; the default is 4 bytes if
the field isn't present.

The "debug records version number" allows the debugger, if any, to check
for compatibility. It is possible that new types of debugger information
could be added in the future in such a way that debuggers would have to
be upgraded, but while still retaining compatibility with the VM for
non-debugger use. The current debug information version number is
0x0002. If the image file does not contain any debugging information,
this field can optionally be set to zero; the image loader should not
inspect this field's contents unless it wishes to use debug information,
so if no debug information is present, the loader should ignore this
field.

Note that if the image file contains a block of type [SINI](#BlockSINI),
the VM **must** execute the static initializers **before** invoking the
program's main entrypoint.

**Debug version information:**

- The original debug version number was 0x0001.
- Version 0x0002 introduced a new format for the [frame
  record](debug.htm#frameRecord), adding two UINT2 values to give the
  byte-code range covered by the frame. This version also added a new
  storage format for the [local variable
  record](debug.htm#frameLocalVar), which allows the name of the local
  to be stored in the constant pool as a string value.

------------------------------------------------------------------------

<span id="BlockOBJS"></span>

### Static Object Block

**Identifier: "OBJS"**

**Order dependency:** All OBJS blocks in an image file **must** come
**after** the image file's MCLD block. (This is required because an OBJS
block contains a metaclass index number whose meaning is established in
the MCLD block, and the meaning must be known in order to interpret the
metaclass-dependent part of the per-object data.)

The Static Object block defines one or more root-set object instances,
all of a single metaclass, whose contents are defined by the compiler.
This block type is used to load compiler-initialized static objects.

The load image may have any number of Static Object blocks. Each
individual block defines objects of only one metaclass; the load image
thus must have at least one Static Object block per metaclass that the
program uses for compiler-initialized objects.

A Static Object block's "mandatory" flag should be set to 1.

A Static Object block's contents start with a UINT2 value giving the
number of static objects defined in the block; this is followed by a
UINT2 value giving the metaclass dependency table index of the metaclass
used by the objects defined in the block.

Next come the object definitions. Each object definition starts with a
UINT4 value giving the object ID that the compiler assigned to the
object; the VM will use this object ID for the loaded object (the VM
throws an error if the object ID is already used by another object).
After this is a UINT2 giving the number of bytes in the object's
metaclass-specific data, followed by the bytes of the metaclass-specific
data for the object.

The high-level schematic looks like this:

"OBJS" Header

UINT2 (number of objects in block)

UINT2 (metaclass dependency table index)

UINT2 (flags)

First Object

Second Object

...

The "flags" field is a combination of bit flags. The defined bit flag
values are:

- 0x0001 - large objects. If this flag is set, the per-object size field
  (see below) is a UINT4. If this flag is not set, the per-object size
  field is a UINT2. This flag allows metaclasses that require very large
  object data to be stored with a 32-bit size field per object, while
  allowing smaller metaclasses to conserve space in the image file by
  using a 16-bit size field.
- 0x0002 - transient objects. If this flag is set, all of the objects in
  this OBJS block are transient; otherwise, they're ordinary
  (persistent) objects.

Each object's data has this format:

UINT4 (object ID)

UINT2 or UINT4 (number of bytes in the object's data - see flags)

Metaclass-specific object data

Note that the size field is specified as a UINT2 *or* a UINT4; which
type is used depends upon the "large objects" flag in the "OBJS" block
header.

Schematically, in terms of byte layout (assuming 16-bit per-object size
fields):

Byte Offset (from start of header)

Value

0

0x4F 'O'

1

0x42 'B'

2

0x4A 'J'

3

0x53 'S'

4

*bits 0-7 of block size in bytes*

5

*bits 8-15 of block size in bytes*

6

*bits 16-23 of block size in bytes*

7

*bits 23-31 of block size in bytes*

8

0x01

9

0x00

10

*low-order 8 bits of number of objects in block*

11

*high-order 8 bits of number of objects in block*

12

*low-order 8 bits of metaclass dependency table index*

13

*high-order 8 bits of metaclass dependency table index*

14

*bits 0-7 of first object's ID*

15

*bits 8-15 of first object's ID*

16

*bits 16-23 of first object's ID*

17

*bits 23-31 of first object's ID*

18

*low-order 8 bits of first object's metaclass data size in bytes*

19

*high-order 8 bits of first object's metaclass data size in bytes*

20

*first byte of first object's metaclass-specific initialization data*

...

*20+n-1*

*last byte of first object's metaclass-specific initialization data*

*20+n*

*bits 0-7 of second object's ID*

*... and so on, for each object defined in the block ...*

Note that string and list objects generally do not appear in static
object blocks. Instead, static strings and lists should be defined in
the constant pool. It is legal to define static string and list objects,
but constant pool values consume somewhat less space in the image file
and in memory during program execution, and do not add any work for the
garbage collector.

------------------------------------------------------------------------

<span id="BlockCPDF"></span>

### Constant Pool Definition Block

**Identifier: "CPDF"**

The Constant Pool Definition block specifies the overall structure of a
constant pool. This block contains the number of pages in the pool, and
the size of each page.

An image file must have exactly one Constant Pool Definition block for
each constant pool, and the Constant Pool Definition block must precede
the first Constant Pool Page block for that pool (i.e., the Definition
block must be located at an earlier byte position in the image file than
any Page block for the same pool).

A Constant Pool Definition block's "mandatory" flag should be set to 1
if the pool identifier is 1 or 2. (In other words, all pools currently
defined are mandatory. However, it is possible that new pool types added
in future versions of the VM would not be mandatory, hence we refrain
here from specifying that all constant pool definition blocks are
mandatory.)

The high-level schematic of a Constant Pool Definition block is as
follows:

"CPDF" Header

UINT2 (pool identifier)

UINT4 (number of pages in the pool)

UINT4 (size in bytes of each page in the pool)

The "pool identifier" value indicates the constant pool to which the
information in the Definition block applies. The following pool
identifier values are defined:

Identifier

Meaning

1

Byte-code pool

2

Constant data pool

The data in each constant data pool page should be limited to 64k when
possible, to accomodate 16-bit machines. VM implementations may be
designed to load each constant pool page into a single memory allocation
block, which on 16-bit machines cannot exceed 64k. In practice, it
should be possible for the compiler to generate pages that fit within
this limit transparently to the programmer.

------------------------------------------------------------------------

<span id="BlockCPPG"></span>

### Constant Pool Page Block

**Identifier: "CPPG"**

A Constant Pool Page block provides the data for one page of a constant
pool. The block contains a small header that specifies the pool with
which the page is associated and the page's index within the pool,
followed by the data contained in the page.

The first Constant Pool Page block associated with a particular constant
pool must be preceded by a Constant Pool Definition block for that pool.
(Other blocks may intervene; the requirement is merely that the
Definition block be earlier in the file than the first associated Page
block.) Constant Pool Page blocks for a particular pool need not be in
any particular order in the image file, and need not be contiguous.

A Constant Pool Page block's mandatory flag should be set to the same
value as the mandatory flag for the associated Constant Pool Definition
block.

The load image has one Constant Pool Page block for each page of each
constant pool.

The high-level schematic of a Constant Pool Page block is as follows:

"CPPG" Header

UINT2 (pool identifier)

UINT4 (page index)

UBYTE (xor mask)

Page data bytes

The "pool identifier" value has the same meaning as for a Constant Pool
Definition block.

The "page index" value specifies the index of the page within the pool.
The first page in the pool has index 0, the second page has index 1, and
so on. The starting byte offset of the data in the page is given by
multiplying the pool's page size (specified in the Constant Pool
Definition block for the pool) by the page index.

The "xor mask" is a byte value that must be XOR'ed with each byte of the
page data bytes whenever the page data bytes are loaded. If this is
zero, it has no effect and can be ignored (since *x* **xor** 0 equals
*x* for any value of *x*). Otherwise, whenever the page data bytes are
loaded, each byte must be XOR'ed with this value.

The Page block's data may be smaller than the pool's page size as
defined in the Definition block, because pages may not always be
completely filled. A page's data may never exceed the pool's page size.

**Implementation note:** The purpose of the xor mask is to allow for a
very slight obfuscation of the constant data (especially text strings)
contained in the image file, to prevent casual browsing of the text in
the file. The xor mask obviously does not provide any degree of
encryption security, not because the obfuscation algorithm is simple but
because the "decryption key" is stored directly with the data to be
decrypted. The compiler is free to use any value for the mask; all pages
can use the same mask, or the compiler can choose a different mask for
each page.

------------------------------------------------------------------------

<span id="BlockMRES"></span>

### Multimedia Resource Block

**Identifier: "MRES"**

A Multimedia Resource block contains data for one or more data
resources. In order to allow an image file to store a large number of
resources but still provide fast access to each resource, the Multimedia
Resource block contains a table of contents that provides a compact
index to the resources within the block.

A data resource is a named block of binary data; effectively, a data
resource is equivalent to an operating system file, but is embedded
within the image file so that it is always copied and moved along with
the image file. We refer to the resources as "multimedia" resources
because the primary use we envision for this feature is for storing
graphics, digitized sounds, and other binary multimedia data; however,
it is up to the user code and the host application environment to
interpret and use resource data, and the T3 VM makes no assumptions
about the types of data that can be stored in a resource. This
specification, therefore, does not enumerate a list of resource types
that can be included, nor does it impose any limits on what can be
stored or how resources can be used. In fact, the VM itself does not
make direct use of multimedia resources; it simply provides the storage
format and retrieval mechanism for use by the user code and the host
application environment.

The first part of the Multimedia Resource block is the table of
contents. This table consists of a count of the number of entries in the
table, followed by the size in bytes of the table, and finally the table
entries. Each entry consists of a count of the number of bytes in the
entry name, the offset within the Multimedia Resource block of the first
byte of the entry's resource data, the size in bytes of the resource
data, and the resource name. The resource name is simply a string of
text characters, one byte per character; each character can be any ASCII
character in the range 32 to 126 inclusive. The length of a resource
name can range from 1 to 255 characters.

Following the table of contents are the data resources. Each resource is
stored as a contiguous block of bytes, and is immediately followed by
the next resource.

The high-level schematic of the Multimedia Resource block is as follows:

"MRES" Header

Table of contents

First resource's binary data

Second resource's binary data

Third resource's binary data

  
...  
  

Last resource's binary data

The table of contents is structured like this:

UINT2 (number of entries in table of contents)

First entry

Second entry

  
...  
  

Last entry

Each entry in the table of contents has this structure:

UINT4 (offset from start of MRES data block of first byte of the entry's
binary data)

UINT4 (size in bytes of the entry's binary data)

UBYTE (number of bytes in entry's name)

Entry name, using 7-bit ASCII characters encoded in single bytes, each
XOR'ed with 0xFF

Note that the first field in each table-of-contents entry is the offset
to the start of the entry's binary data. This is expressed as an offset
from the start of the MRES data block, which means from the *beginning*
of the table of contents. Hence, to find an entry, simply add the
entry's offset to the seek position of the first byte of the table of
contents; this yields the seek position of the first byte of the
object's binary data.

A single image file may have multiple MRES data blocks. If more than one
data block is present, the VM treats the set of blocks as though the
resources all occurred in a single block. In other words, there is a
single global namespace for multimedia resources contained in MRES
blocks.

The bytes of the entry names are masked by XOR'ing each byte with 0xFF
(decimal 255). This is simply to obscure the resource names to hide them
from casual browsing. Resource names might sometimes contain information
that the program's author would prefer not to make visible to casual
browsers, so we make this slight effort to obscure them.

------------------------------------------------------------------------

<span id="BlockMREL"></span>

### Multimedia Resource Link Block

**Identifier: "MREL"**

A Multimedia Resource Link block is a special variation on the
[MRES](#BlockMRES) block. Like an MRES block, an MREL block stores
information on multimedia resources. Unlike an MRES block, an MREL
doesn't store the actual binary data of the resources; instead, an MREL
simply stores *links* to the resources.

A link is simply a filename in the local file system, giving the
location of a local copy of the resource data.

A link to a local file is stored using local file naming conventions,
and can contain relative paths (i.e., partial directory paths that can
only be resolved relative to a working directory). This makes MREL
blocks inherently non-portable, and for this reason they're designed
only for Debug builds. MREL blocks should not be used in regular
"release" builds.

The purpose of the MREL block is to make Debug builds faster to compile
and smaller on disk. The reason that a developer creates a Debug build
is to run the build under the debugger, within the development
environment on the developer's own machine. In this environment, all of
the resource files are available as local files (they have to be,
because it's the only way the compiler can copy them into the image file
in a regular Release build). Since the resources are all available
anyway, copying them into the Debug build's image file is essentially
pointless - it just takes time and consumes disk space. However, the
*index* to the resources that's part of the MRES block is still
important, because resources in the MRES block can be renamed from their
local file system names. The MREL block is designed to solve this
problem, by storing the index to the resources without storing copies of
their contents.

The MREL block consists simply of a list of resource mappings. The table
starts with a count of the number of entries. Following the count are
the mappings: a mapping consists of a resource name and the name of the
corresponding local file. Each name is prefixed with a length byte.
Resource names follow the same rules as they do in an MRES block; local
filenames can be any combination of ASCII characters, up to 255
characters in length.

The schematic of the Multimedia Resource Link block is as follows:

"MREL" Header

UINT2 (number of mapping)

First mapping

Second mapping

Third mapping

  
...  
  

Last mapping

Each mapping is structured as follows:

UBYTE (number of bytes in entry's resource name)

Entry resource name, using 7-bit ASCII characters encoded in single
bytes

UBYTE (number of bytes in entry's filename)

Corresponding local filename, using single-byte characters and local
file naming conventions

A single image file may have multiple MREL data blocks. If more than one
data block is present, the VM treats the set of blocks as though the
resources all occurred in a single block. In other words, there is a
single global namespace for multimedia resources contained in MREL
blocks.

Note that the resource names are *not* obscured, as they would be in an
MRES block. There's no point in protecting an MREL block from browsing,
because the original developer is the only one who should ever see a
file with this block type, as it should never be included in a Release
build.

------------------------------------------------------------------------

<span id="BlockMCLD"></span>

### Metaclass Dependency List Block

**Identifier: "MCLD"**

**Order dependency:** The MCLD block **must** come **before** the image
file's first OBJS block.

The Metaclass Dependency List block specifies the metaclasses that the
program contained in the image file depends upon, and provides the
mapping from metaclass index numbers (which the image file uses in
static object instance definitions and in byte code to refer to
metaclasses) to the corresponding metaclass implementations.

The MCLD block consists of a count of the number of entries, followed by
the entries. Each entry contains a count of the number of bytes in the
entry name, followed by the name of entry, given as a string of 7-bit
ASCII characters, encoded one byte per character.

Schematically, the MCLD block looks like this:

"MCLD" header

UINT2 (number of entries in the table)

First entry

Second entry

  
...  
  

Last entry

Each entry is arranged as follows:

UINT2 (offset from this UINT2 to start of the next entry)

UBYTE (number of bytes in entry name)

Entry name, given as 7-bit ASCII characters, one byte per character

UINT2 (number of property ID's)

UINT2 (size in bytes of each property record; currently 2)

UINT2 First property ID

UINT2 Second property ID

  
...  
  

UINT2 Last property ID

The index value for each entry is implicit in the order of the table.
The first entry is at index 0, the second entry is at index 1, and so
on.

An image file must have exactly one MCLD block. The VM should throw an
error if it finds more than one MCLD block in an image file, or if an
image file does not have an MCLD block at all. (While it would be
possible to construct an image file that did not, in fact, have any
metaclass dependencies at all, such a program is unlikely to be useful
in practice, since it could not define any static objects nor create any
objects dynamically.)

Each metaclass entry contains a list of property entries. These are the
properties that the metaclass defines and which the program can call.
The purpose of the property list is to provide a mapping that allows the
image file to specify the ID's of the properties it calls in instances
of the metaclass. Each metaclass provides its property-invoked functions
as a vector of properties; the property ID list in the image file gives
the property ID's that the program will use to invoke the metaclass
vector functions. The first property ID is the property ID that the
program will use to invoke the first metaclass vector function, the
second ID is the property that the program will use to invoke the second
vector function, and so on. In this respect, the vector of metaclass
properties is similar to the vector of functions that a function set
uses. By providing this mapping, the compiler can let the program invoke
metaclass functions using the identical mechanism that the program uses
to invoke object properties.

Refer to the [metaclass identifier list](model.htm#metaclass_id) in the
[Machine Model section](model.htm) for more information on metaclass
dependencies.

------------------------------------------------------------------------

<span id="BlockFNSD"></span>

### Function Set Dependency List Block

**Identifier: "FNSD"**

The Function Set Dependency List block specifies the function sets that
the program contained in the image file depends upon, and provides the
mapping from function set index numbers (which the image file uses in
byte code to invoke intrinsic functions) to the corresponding function
entrypoint vectors in the VM.

The FNSD block consists of a count of the number of entries, followed by
the entries. Each entry contains a count of the number of bytes in the
entry name, followed by the name of entry, given as a string of 7-bit
ASCII characters, encoded one byte per character.

Schematically, the FNSD block looks like this:

"FNSD" header

UINT2 (number of entries in the table)

First entry

Second entry

  
...  
  

Last entry

Each entry is arranged as follows:

UBYTE (number of bytes in entry name)

Entry name, given as 7-bit ASCII characters, one byte per character

The index value for each entry is implicit in the order of the table.
The first entry is at index 0, the second entry is at index 1, and so
on.

An image file must have exactly one FNSD block. The VM should throw an
error if it finds more than one FNSD block in an image file, or if an
image file does not have an FNSD block at all.

Refer to the [intrinsic function documentation](model.htm#intrinsics) in
the [Machine Model section](model.htm) for more information on function
sets and intrinsic functions.

------------------------------------------------------------------------

<span id="BlockSYMD"></span>

### Symbolic Names Block

**Identifier: "SYMD"**

The Symbolic Names block allows the VM to determine the values to use
for user-defined objects, properties, and any other values that must be
used directly by the VM. Refer to [Pre-defined Objects and
Properites](model.htm#predefined) in the [Machine Model
section](model.htm) for information on the purpose of this block.

The Symbolic Names block starts with a count of the number of entries.
Following the count is the list of entries. Each entry contains the
number of characters in the symbol name, the value of the symbol, and
the symbol name, given as a string of 7-bit ASCII characters, encoded
one byte per character.

The structure of the Symbolic Names block is as follows:

"SYMD" header

UINT2 (number of entries in the table)

First entry

Second entry

  
...  
  

Last entry

Each entry in the table is arranged thus:

DATA_HOLDER (value of the symbol)

UBYTE (number of bytes in symbol name)

Symbol name, using 7-bit ASCII characters, one byte per character

Any number of Symbolic Names blocks may appear in a given image file. If
more than one block appears, the loader logically concatenates the
blocks; in other words, the loader acts as though all of the symbols
from all of the blocks had appeared together in a single block. The VM
generates an error if it finds the same symbolic name defined more than
once with different values in a single image file.

------------------------------------------------------------------------

<span id="BlockSRCF"></span>

### Source File Descriptor Block

**Identifier: "SRCF"**

The non-mandatory Source File Descriptor block contains information on
the source files that were compiled to create the image file.
Source-level debuggers use this information to display the source code
corresponding to the byte-code in the compiled image file. This
information is not required for executing the program; normally, a
compiler includes this information only when the program is being
compiled for use with a debugger.

The Source File Descriptor block starts with a count of the number of
entries, and the byte size of each source line record in the block
(currently, this value should be set to 8). Following the count is the
list of entries. Each entry consists of a UINT2 giving the index in the
list of the master source file record for the file; a UINT2 length field
for the filename string; a varying-length string field containing the
filename; a UINT4 giving the number of source-line position records; and
a varying number of source-line position records.

The master record index is a zero-based index in the SRCF list of the
first source file record with the same filename. If there is no previous
instance of the same file, this entry should give its own list index,
because it is its own master record. The purpose of this record is to
allow debuggers to suppress redundant entries when showing a list of the
source files to the user. (A given source file can appear more than once
in this list for a variety of reasons; for example, a header file could
be included in more than one compilation unit.)

The length field gives the number of bytes in the string field. The
string field contains the filename of the source file. The compiler
should, to the extent possible, store information that is portable and
relative (in the sense that any directory path information is given
relative to a working directory, rather than in terms of physical
devices or explicit file system root locations), but is under no
obligation to do so; a programmer using a debugger must therefore
usually compile and debug a program on the same type of computer and
operating system, which is typical practice anyway.

The UINT4 source line record count specifies the number of source line
records. Each source line record associates a source line in this file
with its byte-code address.

"SRCF" header

UINT2 (number of entries in the table)

UINT2 (byte size of each source line record)

First file record entry

Second file record entry

  
...  
  

Last file record entry

Each file record entry is arranged like this:

UINT4 (byte size of this entire file entry)

UINT2 (index of master source file record for this file)

UINT2 (length in bytes of filename)

Varying-length character string (the filename, expressed in local system
format)

UINT4 (number of line records)

First line record

Second line record

  
...  
  

Last line record

The first field (a UINT4 giving the size of the entire entry) should be
set to the byte size of the entire structure above, including the size
field itself. A reader should determine the file offset of the start of
the next file record by adding the size value to the seek position of
the start of the current record.

The line records look like this:

UINT4 (source line number)

UINT4 (byte-code address)

The source line number is the location in the current source file of the
source line; the first line is number 1. The byte-code address is the
absolute address in the code pool of the start of the executable code
that resulted from compiling the given line of source code.

The source records **must** be sorted in ascending order of source line
number; in addition, a given source line number may appear only once in
a given list, so this mechanism can associate a given source line with
only a single executable code address. The purpose of the source line
records is to allow an interactive debugger to find the executable code
for a given line of source code, so these records are ordered by source
line number to make it efficient to find a record for a given source
line.

Note that non-master records should not contain any source line
information. All source line information for a given file should be
consolidated into the master record for the file. Debuggers are free to
ignore any source line information that appears in non-master records.

Other types of debugging records refer to source file records; in
particular, line records (which store the source file location of a
block of byte-code) refer to source records. Other records refer to a
source file record using the zero-based index of the source record;
thus, record 0 is the first record in the list, 1 is the second record,
and so on. The order of the source records is thus significant.

For compatibility with future specification changes, image readers
should use the size information embedded in the records to determine how
large the data structures are in the file. Readers should ignore any
data whose presence is implied by sizes larger than the current
specification would use.

*Implementation note: The source line records included in the SRCF block
are essentially a reverse mapping from the line records that appear in
the per-method debug tables. The line records in the method debug tables
specify the mapping from a given byte code location to its source file
location; the debugger uses those records, for example, to show the user
the current source file location when a breakpoint is encountered, since
the debugger will know the byte-code location and will need to find the
corresponding source location. The SRCF line records, in contrast, are
used to find the byte-code location for a given source location; the
debugger uses these records, for example, to find the byte-code location
at which to set a breakpoint when the user specifies a source file
location for the breakpoint.*

------------------------------------------------------------------------

<span id="BlockGSYM"></span>

### Global Symbol Table Block

**Identifier: "GSYM"**

The optional Global Symbol Table block contains information on the
top-level symbols in the original source code that was compiled to
create the image file. Source-level debuggers use this information to
evaluate symbolic expressions entered interactively by the user during a
debugging session. This information is not required for executing the
program; normally, a compiler includes this information only when the
program is being compiled for use with a debugger.

The Global Symbol Table block begins with a count of the number of
entries. Following the count is the list of entries. Each entry gives
information on a single global symbol. The order of the entries is
undefined; there is no requirement, for example, that symbols be grouped
by type, or appear in any lexical sequence.

Each entry consists of a UINT2 symbol length, giving the number of bytes
in the symbol name; a UINT2 extra data length, giving the number of
bytes of additional type-specific data accompanying the symbol; a UINT2
type code, which specifies the datatype of the symbol; the bytes of the
symbol name, as a UTF8 string; and a varying number of bytes of extra
data, whose meaning and interpretation vary by symbol type.

The table looks like this:

"GSYM" header

UINT4 (number of entries in the table)

First entry

Second entry

  
...  
  

Last entry

Each entry looks like this:

UINT2 (length in bytes of symbol name)

UINT2 (length in bytes of extra data following symbol name)

UINT2 (type code)

Symbol name (as a UTF-8 string)

Varying number of bytes of extra data (the number of bytes is given by
the value of the "extra data length" in the second field in the record,
above)

The type codes, and current interpretation of the extra data fields,
are:

Value

Meaning

Extra Data Fields

1

Function

UINT4 (code offset)  
UINT2 (argc)  
BYTE (non-zero if the function takes a variable number of arguments)  
BYTE (non-zero if the function has a return value)  
UINT2 (opt_argc) (number of additional optional parameters after the
fixed 'argc' list)

2

Object

UINT4 (object ID)  
UINT4 (modifying object ID)  

3

Property

UINT2 (property ID)  
BYTE (flags: 0x01 → this is a "dictionary property" symbol)

6

Intrinsic function

UINT2 (index of function in function set)  
UINT2 (index of function set in image file's function set dependency
list)  
BYTE (non-zero if function has a return value)  
UINT2 (minimum argument count)  
UINT2 (maximum argument count)  
BYTE (non-zero if function takes a varying number of arguments)

7

External function

*Reserved; never implemented, and deprecated as of TADS 3.1*

9

Intrinsic Class

UINT2 (metaclass dependency table index)  
UINT4 (object ID of metaclass's IntrinsicClass instance)

10

Enumerator

UINT4 (internal enumerator ID)  
BYTE (flags: 0x01 → this is an "enum token" symbol)

Note for intrinsic functions: the function index is the zero-based index
of the function in its intrinsic function set. The function set index is
the zero-based index of the function set within the function set
dependency list for the image file, as specified by the data in the FNSD
block. Also, note that the flag indicating whether the function has a
varying number of arguments is true only if the number of arguments is
unlimited; if the minimum and maximum argument counts differ, but the
function accepts no more than the maximum argument count, the variable
arguments flag should be set to zero, despite the fact that the argument
count can vary between the minimum and maximum counts.

Note for objects: the "modifying object ID" is the object that is
modifying this object, if this object is indeed modified via a 'modify'
definition. This field is set to zero if this object is not modified by
another.

No other type codes may currently appear in the global symbol table;
however, to improve compatibility with future versions, VM
implementations (if they parse the global symbol table at all) should
simply ignore any symbols whose type codes they do not recognize.
Similarly, if the extra data block is longer than expected, the
implementation should simply skip the extra data beyond the fields
specified above.

------------------------------------------------------------------------

<span id="BlockMHLS"></span>

### Method Header List

**Identifier: "MHLS"**

The Method Header List is a non-mandatory block that is used to give
interactive debuggers and other tools a list of the method headers in
the program. This list is not required for program execution, but some
tools might require it; normally, compilers will only include this block
in an image file when the user has specified that debugging information
is to be included.

The MHLS block contains a list of method headers. Each entry in the list
is the code pool address of a method header; the list must be in
ascending order of code pool address.

The block is structured like this:

UINT4 (number of entries in list)

First entry

Second entry

  
...  
  

Last entry

Each entry looks like this:

UINT4 (code pool address of method header)

------------------------------------------------------------------------

<span id="BlockMACR"></span>

### Preprocessor Macro Symbol Table

**Identifier: "MACR"**

The Preprocessor Macro Symbol Table is a non-mandatory block that
provides interactive debuggers and other tools with information on
preprocessor symbols ("macros") defined in the program's source code.
This table is not required for program execution, but debuggers and
other tools might find it useful. For example, a debugger could use it
to allow the user to interactively evaluate source-code expressions that
refer to macros defined in the program being debugged.

Compilers will probably want to include this block only under certain
conditions, because it increases the size of the image file and isn't
required for normal execution. For example, it could be included only at
the user's request via a compiler command-line option. The reference
compiler doesn't have a separate option for MACR inclusion, but only
includes the block when compiling in debug mode, since the debugger is
the only tool in the reference tool set that uses the information.

The MACR block contains a list of preprocessor symbols. Each entry in
the list specifies the definition of one symbol. The symbols are entered
in the table in arbitrary order.

The block is structured like this:

UINT4 (number of entries in list)

First entry

Second entry

  
...  
  

Last entry

Each entry looks like this:

UINT2 (length in bytes of symbol name)

Varying-length character string (the symbol name, encoded in UTF-8)

UINT2 (flags; see below)

UINT2 (number of formal parameters)

First formal parameter

Second formal parameter

  
...  
  

Last formal parameter

UINT4 (length of expansion text)

Varying-length character string (the expansion text, encoded in UTF-8,
with certain special character sequences embedded; see below)

The "flags" field is a combination of the following bit values:

0x0001

If this bit is set, the macro is "function-like" (i.e., it takes
arguments).

0x0002

If this bit is set, the macro takes a varying number of arguments. The
last formal parameter in the list given in the macro's definition is
actually a placeholder for zero or more actual parameters.

Each formal parameter entry looks like this:

UINT2 (length of the formal parameter name)

Varying-length character string (the name of the formal parameter,
encoded in UTF-8)

The expansion text is given in UTF-8. The expansion should simply be
stored as the original source text of the macro definition.

**Note:** in version 1 of this spec, the expansion text was stored with
special characters embedded in place of occurrences of formal parameter
names and certain other special tokens. Tools that wish to load MACR
blocks in image files stored in format version 1 will need to be aware
of the following special character embeddings:

\u0001 *formal_id*

Specifies a location where a formal parameter's expansion text is to be
substituted. The \u0001 character is followed immediately by one byte
giving the index of the formal in the argument list; 1 indicates the
first paramter, 2 indicates the second parameter, and so forth.

\u0005

Specifies the "#foreach" flag. This specifies the start of a "#foreach"
sequence: the text following is to be treated as a substitution sequence
to be expanded in place once for each actual parameter associated with
the final variable-count parameter. This is meaningful only in a macro
with a varying number of arguments. The UTF-8 character immediately
following the \u0005 is the delimiter character; the characters
following this character and up to the next instance of the *same*
character give the iterated expansion text, and the characters following
the second instance of the delimiter and up to the third instance of the
delimiter give the between-iteration expansion. This format is exactly
as used for the TADS 3 Compiler's "#foreach" preprocessor construct;
refer to the TADS 3 Compiler documentation for full details.

\u0006

Specifies the "#argcount" flag. The number of actual parameters
associated with the final variable-count parameter is to be substituted
at this point, expressed as a decimal number.

\u0007

Specifies the "#ifempty" flag. The character immediately following the
\u0007 is the delimiter character; the characters between this character
and the next instance of the same delimiter character are the expansion
text that is to be substituted if the final variable-count parameter has
no actual parameters (i.e., it's "empty").

\u0008

Specifies the "#ifnempty" flag, which works exactly like the "#ifempty"
flag but has the opposite sense (in other words "#ifnempty" expands its
argument text if the variable-count parameter has at least one actual
parameter associated with it).

------------------------------------------------------------------------

<span id="BlockSINI"></span>

### Static Initializer List

**Identifier: "SINI"**

This block contains information on "static initializers," which are
property values to be evaluated prior to the start of program execution.
In addition, this block specifies a portion of the code pool that can be
discarded after this initialization is performed, because it contains
code only required during static initialization. Compilers can use this
information to load an image, perform static initialization, then
re-write the image file with the static initializer code omitted, to
save space in the file and in memory at run-time. Note that it is
harmless to leave the static initializer code attached to the image file
permanently, but it is more efficient to remove it if it is possible to
do so.

The SINI block looks like this:

UINT4 (header size)

UINT4 (static code pool offset)

UINT4 (initializer count)

(any future header fields will appear here)

First Initializer

Second Initializer

  
...  
  

Last Initializer

The "header size" field gives the size in bytes of the header. In the
current image file format, this is 12 bytes; future versions might add
new fields, so a loader must use the indicated size to find the offset
in the file of the first initializer.

The "static code pool offset" gives the byte offset of the first byte of
static initializer code. A compiler or linker is required to prepare the
image file in such a way that **all** code blocks with code pool offsets
equal to or higher than this given offset are static initializer code
blocks; no ordinary code blocks may appear above this offset. The
purpose of this information is to allow the VM to perform static
initialization on an image file and then discard all static initializer
code, to reduce the size of the image file.

Each initializer entry looks like this:

UINT4 (object ID)

UINT2 (property ID)

Each entry contains simply an object ID and property ID. During static
initialization, the VM must simply invoke each given object property
once.

If an image file contains static initializers, the VM **must** execute
all of the static initializers **before** executing any other code. In
particular, the static initializers must be executed before the VM
invokes the program's main entrypoint.

Futher, the static initializers must be executed in order from first to
last, as they appear in the image file. This specified ordering lets
compilers reliably handle any ordering dependencies among initializers.

------------------------------------------------------------------------

<span id="ResFiles"></span>

### Resource-only Image Files

It is usually desirable to store multi-media resources (such as image
and sound data) within the image file itself; the [MRES](#BlockMRES)
data block type is provided for this purpose. In some cases, though, it
is better to store some or all of the multimedia data for a program in a
file separate from the image file, but still bundled together into a
single resource file.

A variation of the T3 image format allows for one or more separate
resource files to accompany an image file; this is a **resource-only
image file.** A resource-only image file is identical to a standard
image file, but contains only [MRES](#BlockMRES) and [EOF](#BlockEOF)
blocks.

A resource-only image file cannot be loaded as a regular image file,
because it lacks the required blocks specifying the executable program
data. This type of file can only be used specifically as a resource
file.

------------------------------------------------------------------------

<span id="MIMEtype"></span>

### MIME Type for T3 Image Files

There's no officially registered MIME type for T3 image files, but we
recommend the ad hoc type "application/x-t3vm-image". This identifier
was chosen in consultation with the managers of the IF Archive
([www.ifarchive.org](http://www.if-archive.org)), which has adopted it
as a local standard. The structure of the name has some significance:
the "x-" prefix conforms to the MIME standard for indicating an
unregistered ad hoc type; the "t3vm" portion is descriptive and
relatively unlikely to collide with other ad hoc types; and the "-image"
suffix suggests an obvious namespace structure, which we can extend to
MIME types for other t3vm-related file types. (Note that the MJR-T3
implementation uses the same pattern for its saved-state files.)

<div class="t3spec_version">

Copyright © 2001, 2006 by Michael J. Roberts.  
Revision: September, 2006

</div>

</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 Technical Manual*  
<a href="../toc.htm" class="nav">Table of Contents</a> \|
<a href="../t3spec.htm" class="nav">T3 VM Technical Documentation</a> \>
Image File Format  
<span class="navnp"><a href="opcode.htm" class="nav"><em>Prev:</em> Byte-Code Instruction
Set</a>    
<a href="bincode.htm" class="nav"><em>Next:</em> Portable Binary
Encoding</a>     </span>

</div>
