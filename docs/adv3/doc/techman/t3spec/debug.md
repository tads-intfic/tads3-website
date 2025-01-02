---
---
<div class="topbar">

<img src="../topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="../toc.html" class="nav">Table of Contents</a> \|
<a href="../t3spec.html" class="nav">T3 VM Technical Documentation</a> \>
Debug Records  
<span class="navnp"><a href="charmap.html" class="nav"><em>Prev:</em> Character Mapping</a>
   
<a href="fnset_t3.html" class="nav"><em>Next:</em> t3vm Function Set</a>
    </span>

</div>

<div class="main">

![](t3logo.gif)

  
  

## T3 Debug Records

This section describes the debugger information records that a compiler
can optionally store in an image file. Debug records are not needed for
normal execution of a program; they're required only for interactive
source-level debugging.

Normally, a compiler will provide a compile-time option to include or
suppress debug information in an image file. This setting is usually
global to the entire image, but a compiler could include debug
information on a method-by-method basis. The user would use this
compiler setting to include debug information during the development
process, but not include any debug records when compiling the final
image file for release.

### Method Debug Records

Each method can have an associated debug record, which specifies
information local to the method:

- Local variable and parameter names
- Source file locations corresponding to byte-code instructions
- Local variables in scope at particular byte-code instructions

If a method has a debug record, the debugger records field in the
[method header](model.html#methods) must give the non-zero offset of the
record. If the method has no debugger records, this field must be set to
zero.

The format of the debug table is as follows:

Debug table header

UINT2 number of line records

Line record 1

Line record 2

  
    ...  
  

Line record N

UINT2 offset (from here) to first byte after end of frame table

UINT2 number of frames

UINT2 offset (from here) to frame entry 1

UINT2 offset (from here) to frame entry 2

  
    ...  
  

UINT2 offset (from here) to frame entry N

Frame 1

Frame 2

  
    ...  
  

Frame N

UINT4 0 (constant zero value)

Note that the size of the debug table header is given by the "debug
table header size" field from the [ENTP block](format.html#BlockENTP) in
the image file; this information is parameterized in the image file to
allow for changes to be made in future versions without affecting
compatibility.

All of the offsets listed as "from here" are relative to the first byte
of the entry itself. For example, consider the first offset, which gives
the offset to the first byte after the frame table. Suppose that the
frame table has no entries at all, in which case the frame table only
requires two bytes, specifically the UINT2 giving the number of entries,
which in this case would be set to zero. So, the offset to the end of
the frame table would have the value 4: two bytes for the space occupied
by this offset entry itself, and another two bytes for the frame count
field that follows.

The final UINT4 zero value is a placeholder for future expansion; if
additional fields are added in future specifications, this field will
have a non-zero value to indicate the presence of additional
information. Setting this field to zero will ensure that debug tables
produced under this specification will remain compatible with future
interpreters.

The debug table header has the following structure:

*This table is currently empty*

**Line records:** Each line record gives information on a single
executable statement in the source code. Each line entry specifies an
association with a contiguous range of byte-code instructions, a source
file location, and a frame entry within the same debug records table.

(What constitutes an executable statement is up to the compiler to
determine. For debugging purposes, this is a unit of procedural
execution. The debugger can set a breakpoint at a line, and can step one
line at a time through procedural code. For a C-like language, a
debugging line corresponds directly to the C grammar's notion of a
statement: an 'if', 'while', or 'for', an expression statement, etc. For
compound statement like 'if' and 'for', the compiler should create a
line record for the main statement, plus a separate line record for each
statement in the body. For example, for an 'if', the compiler creates a
line record for the 'if' itself, another for each statement in the true
branch, and yet another for each statement in the 'else' branch, if any.
This allows the user to interactively stop at the condition itself and
then single-step through each statement in the selected branch. For a
'for', the compiler might wish to create a separate line record for the
"reinit" part of the loop, to allow single-stepping through that portion
of the loop iteration.)

Line records must appear in the table in ascending order of byte-code
offsets. Each record specifies only its starting offset, but a given
line record implicitly references all of the instructions starting at
its starting offset and continuing to the byte before the starting
offset of the following line record.

Each line record is arranged like this:

UINT2 offset (from method start) of first byte-code instruction
associated with this line of source code

UINT2 source file index, a zero-based index into the global source file
list

UINT4 source file line number

UINT2 frame ID, a one-based index into the method's frame list (a value
of zero indicates that there is no local scope for the line). This is
the innermost scope with which the line is associated; the frame itself
contains links to any enclosing scopes.

<span id="frameRecord"></span>**Frame records:** Each frame table entry
provides a local symbol table. Frames can be nested, with the innermost
frame taking precedence in the case of any name collisions with
enclosing frames.

Frame records are of varying size (which is why the index of frame
record pointers appears in the debug record before the frames
themselves), and are arranged like this:

UINT2 ID of enclosing frame, a one-based index into the method's frame
list (a value of zero indicates that this is the outermost frame)

UINT2 number of entries in the symbol table

UINT2 start of byte-code range covered by frame (as an offset from the
method header) **(new in debug format version 0x0002)**

UINT2 end of byte-code range covered by frame **(new in debug format
version 0x0002)**

Entry 1

Entry 2

  
    ...  
  

Entry N

<span id="frameLocalVar"></span>**Frame local variables:** Each entry in
the frame gives information on a single local variable. These entries
are of varying size, and are arranged like this:

Local Symbol Header

Local Symbol Name

The Local Symbol Name's format depends on the flags in the header. If
flag bit 0x0004 is set, this field is a UINT4 giving the constant pool
address of a UTF-8 string containing the name. Otherwise, the name is
stored inline as a UTF-8 string. In either case, the storage format for
the string is a UINT2 byte-length prefix followed by the name string in
UTF-8 format.

The symbol header is arranged as follows. Note that the record might
contain additional entries in future versions; when parsing these
records, debuggers and other tools should always use the "debug local
symbol header size" from the [entrypoint (ENTP)
record](format.html#BlockENTP) in the image file to determine the
record's actual size.

UINT2 local variable or parameter number, with the same meaning as the
variable number in a GETLCL or GETARG instruction

UINT2 flags

UINT2 context local index. This is used only if (flags & 2) is non-zero
(i.e., the context local flag bit is set).

The "flags" entry is a bitwise "OR" combination of the following values:

- 0x0001: the symbol is a parameter (argument) variable. If this flag is
  not set, the symbol is a local, not a parameter.
- 0x0002: the symbol is a "context local" variable. The "local variable
  number" field in the record is still a stack location, but this stack
  location does not contain the variable's value, but merely the context
  array object which contains the variable's value. The "context array
  index" field gives the index in the context array containing the
  variable's value. If this bit is not set, the symbol is an ordinary
  stack variable. Note that if this flag is set, the parameter flag
  should be ignored.
- 0x0004: **new in debug format version 0x0002**. The symbol's name is
  stored in the constant pool. The Local Symbol Name field of the frame
  record contains a UINT4 giving the address (offset) in the constant
  pool. This location in the constant pool contains a UINT2 byte-length
  prefix followed by the bytes of the string in UTF-8 format. If this
  flag *isn't* set, the symbol name is stored in-line, so the Local
  Symbol Name field directly contains a UINT2 byte-length prefix
  followed by the bytes of the string in UTF-8 format.

**Note:** All bits not specified above are reserved for future
designation, so the flags entry should be taken as a bit mask. To ensure
compatibility with future specifications, compilers should set all bits
not specified here to zero, and interpreters should ignore all bits not
specified here.

A "context local" is a local variable stored not in the stack but in a
separate context array object. The reference to the context object is
reachable through the local variable given in the record, and the
symbol's actual value is stored in the array at the index given by the
context array index in the record. So, to retrieve a context variable,
the equivalent of the following VM instructions can be executed:

        GETLCL local variable number from record
        PUSHINT4 context array index from record
        INDEX

<div class="t3spec_version">

Copyright © 2001, 2006 by Michael J. Roberts.  
Revision: September, 2006

</div>

</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 Technical Manual*  
<a href="../toc.html" class="nav">Table of Contents</a> \|
<a href="../t3spec.html" class="nav">T3 VM Technical Documentation</a> \>
Debug Records  
<span class="navnp"><a href="charmap.html" class="nav"><em>Prev:</em> Character Mapping</a>
   
<a href="fnset_t3.html" class="nav"><em>Next:</em> t3vm Function Set</a>
    </span>

</div>
