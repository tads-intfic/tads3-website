<div class="topbar">

<img src="../topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="../toc.htm" class="nav">Table of Contents</a> \|
<a href="../t3spec.htm" class="nav">T3 VM Technical Documentation</a> \>
Character Mapping  
<span class="navnp"><a href="bincode.htm" class="nav"><em>Prev:</em> Portable Binary
Encoding</a>    
<a href="debug.htm" class="nav"><em>Next:</em> Debug Records</a>    
</span>

</div>

<div class="main">

![](t3logo.gif)

  
  

## T3 Character Mapping

T3 uses 16-bit Unicode for its internal character set. The Unicode
character set is essentially a superset of all other computer character
sets; it's capable of encoding nearly every character used in every
writing system around the world. Furthermore, Unicode is portable: it
uses the same character codes on every computer. Because of its scope
and its portability, Unicode provides a common character representation
that can be used for any electronic data, in any language, for any type
of computer.

Unicode essentially eliminates the character-set translation problems
that have traditionally plagued portable, multi-lingual software. Since
T3 encodes characters in Unicode, text in a T3 program uses the same
character representation, independently of the computer that was used to
create the program or the computer used to run the program. A T3 program
never needs to be translated or converted to use on a different type of
computer; the same compiled binary file will work everywhere unchanged.

Unfortunately, not all current computers use Unicode as the native
character set; in fact, most do not. Although Unicode may eventually
supplant other character sets, it is far from universal today. This may
seem to contradict the earlier claim that Unicode provides a single
encoding that works everywhere, but it doesn't really -- the point is
that Unicode provides a single reference character set that we can use
as a common encoding for all text, and that Unicode characters will
always be interpreted the same way on every machine. However, it's still
necessary to perform this interpretation on machines that don't use
Unicode directly; this interpretation process is called "mapping,"
because it involves substituting a character in the local character set
for the equivalent ("mapped") character in the Unicode character set,
and vice versa.

T3 performs character-set mapping automatically when required. T3
encodes all text internally in Unicode; whenever it must obtain text
from the operating system (for example, when reading a command from the
keyboard, or reading a text file), or send text to the operating system
(such as when displaying text to the user), T3 converts the text between
Unicode and the local representation. T3 programs never need to be
concerned with this process, since it happens automatically in the
system interfaces; T3 programs see all text, whatever the source, as
Unicode.

In order to perform character-set mapping, T3 needs to know two things:
first, what local character set the computer is using; second, the
correspondence between the local character set and Unicode.

T3 normally obtains the correct local character set directly from the
operating system; in most cases, users will never even be aware that
character-set mapping is taking place. However, there may be times when
the operating system cannot correctly determine the character set. For
example, when you prepare a source file with a text editor, you may be
able to select the character set that the source file uses without
actually changing the default that the operating system uses; when
compiling this source file, the operating system may have no way of
knowing that the file does not use the system's normal character set.
So, most of the T3 tools will provide a mechanism that lets the user
specify explicitly what character set to use; any such specification
provided by the user will override the default character set indicated
by the operating system.

To determine the correspondence between Unicode and the local character
set, T3 uses "mapping files." A mapping file is not specific to a
computer, but rather is specific to a particular character set; some
character sets are used by different types of computers, and others are
proprietary to particular machines. In any case, T3 includes a set of
pre-defined mapping files for the common character sets: the standard MS
Windows and DOS code pages; the standard Macintosh character sets; and
the ISO 8859 series of character sets. For most types of computers,
these included standard character sets will be sufficient, which will
allow T3 to handle character set issues automatically and transparently,
without any user intervention at all. When porting T3 to other types of
computers, however, it may be necessary to provide new character set
mappings. The rest of this document explains the details.

------------------------------------------------------------------------

### Obtaining and Creating Mapping Source Files

A character mapping source file can follow almost the same format used
by the Unicode mapping files. You can therefore prepare a mapping by
downloading a Unicode mapping file from the Unicode web site
([www.unicode.org](http://www.unicode.org)), making one small change (to
define a default character for displaying otherwise unmapped
characters), and compiling the file with the MKCHRTAB tool. None of
these mapping source files are included with T3, because the Unicode
consortium prohibits redistribution of these files among third parties.
However, the Unicode consortium makes the mapping file freely available
for download from its web site, and allows use of the information
contained in these files in applications that support Unicode, such as
T3.

The Unicode web site has mapping files for most character sets in common
use. However, if you're using an obscure terminal or computer with a
proprietary character set, no pre-built mapping file may be available.
In these cases, you'll need to create your own mapping file, following
the source file format described below. Before you can begin, you'll
need to figure out what characters are in your terminal's or computer's
character set, and the correspondence between those characters and
Unicode characters. For each character in your terminal's character set,
you must determine the corresponding Unicode character code; the mapping
file is simply a list of these correlations. Note that, even if a
mapping file isn't available for your terminal or computer, the Unicode
web site will still be helpful, since it has charts showing the Unicode
characters and their assigned character codes.

------------------------------------------------------------------------

### Character Mapping Source File

To define a mapping, create a mapping source file and compile it with
MKCHRTAB (this tool is part of T3). If you're using a mapping file that
you downloaded from the [Unicode web site](http://www.unicode.org), the
only change you'll need to make is to add a [default display
character](#default_display).

#### General File Format

MKCHRTAB treats any line that starts with '#' as a comment, and blank
lines are ignored. Other lines contain mappings or special directives.
Each mapping or directive appears on a separate line.

#### Local-to-Unicode Mappings

A standard local-to-Unicode mapping, which is the format used by the
mapping files available on the Unicode web site and is therefore the
default format that MKCHRTAB uses, consists of a line containing two
numbers, separated by one or more spaces. The first number is the
character code in the local character set, and the second number is the
Unicode character code. For example, to map between ISO Latin-2
character code 0xBC (which in Latin-2 represents a small letter 'z' with
an acute accent) and the equivalent Unicode character, which is at code
point 0x17A, the mapping file would specify this line:

        0xBC    0x17A

Numbers can be specified in decimal, octal, or hex. A number starting
with "0x" is a hex number; a number starting with "0" is an octal
number. Other numbers are taken as decimal values. The mapping files on
the Unicode web site use mostly hex numbers.

Note two variations on the mapping format that are allowed. These
variations occur in some of the mapping files available from the
[Unicode web site](http://www.unicode.org), so the mapping compiler
accepts the variations to facilitate use of these files.

- Three columns of numbers may be specified. Some mapping files (such as
  JIS0208) specify a third character set mapping besides the primary
  local character set and the Unicode character set; in these cases, the
  first column contains the extra mapping, hence the character mapper in
  these cases will ignore the first column to read the local code point
  from the second column and the Unicode code point from the third
  column.
- In some mixed single- and double-byte character set mapping files,
  DBCS lead bytes are specified separately. In these cases, the lead
  bytes appear on a line by themselves, without a Unicode mapping. The
  character mapper will simply ignore any such single-column entry in a
  mapping file.

<span id="default_display"></span>

#### Specifying the Default Display Character

Each mapping file must provide a default display character mapping. This
is the character that will be used to display each Unicode character
that has no other mapping in the local character set. To specify this,
add a line like this to your mapping file:

        default_display 0x3F

This specifies that the default display character should be character
0x3F in the local character set (character 0x3F in ASCII is a question
mark). Any time a Unicode character is displayed that has no other
mapping in the local character set, the system will display the default
display character as a placeholder, so that the user can see that a
character should be displayed there but cannot be rendered in the local
character set.

#### Unicode-to-Local Mappings

An extended syntax is also supported in mapping files. The extended
syntax allows you to map a Unicode character to a sequence of characters
in the local character set. This syntax will probably only be needed for
the default ASCII translation file, which provides a fall-back display
approximation for Unicode characters with no equivalent in the local
character set. The extended syntax is enabled with a special directive,
which appears on a line by itself, and applies to the rest of the file
following the directive:

        from_unicode_to_local

Following this directive, mappings use a reversed format, with the
Unicode character code appearing first, followed by one *or more*
characters in the local character set. The Unicode character may be
specified as a number (decimal, octal, or hex) as usual, but may also be
specified as an SGML entity name by starting the name with an ampersand
("&") character.

Local characters can be specified as a sequence of numbers (decimal,
octal, or hex), and can also be specified character strings enclosed in
single quotes.

The purpose of allowing multiple local characters per Unicode character
is to enable display approximations of characters for which there is no
direct equivalent in the local character set. For example, the copyright
symbol can be approximated in ASCII as "(c)".

Here's an example of mappings that translate the copyright symbol and
the trademark symbol to multi-character ASCII sequences:

        &copy    '(c)'
        &trade   '(tm)'

Mappings specified after the `from_unicode_to_local` directive are *not*
used for mappings from the local character set to Unicode. Only the
mappings specified in the normal manner (before any
`from_unicode_to_local` directive in the file) are bidirectional (i.e.,
they specify the mapping from local to Unicode as well as from Unicode
to the local character set). Whenever a mapping that appears in the
normal bidirectional section is specified for a character, that mapping
is used instead of any mapping in the `from_unicode_to_local` section.

------------------------------------------------------------------------

### Default ASCII Mapping

In most cases, you will never need to make any use of the
`from_unicode_to_local` directive, because the system automatically
applies a default mapping to ASCII sequences when converting Unicode
characters to the local character set and no local equivalent is defined
for a character.

For example, suppose you are using a computer that uses the ISO Latin-1
character set. This character set contains a subset of Unicode with
characters for several Western European languages, but does not include
characters from Eastern or Central European languages. If the program
attempts to display a character that is not part of the ISO Latin-1
character set, the system will find that there is no suitable mapping in
the current local character set, so it will try the default ASCII
mapping. If a mapping is found there, the system will show the default
mapping.

The default ASCII mapping contains approximations for most accented
characters; they're not very good approximations, in that they lose the
accents, but at least they show the correct alphabetic character.

Because the system always falls back on the default ASCII mapping when a
local mapping isn't available, local character set mappings should
almost never need to specify their own `from_unicode_to_local`
approximations. The only time that you might want to do this is when
your local character set contains characters that are better
approximations than those in the default ASCII translation, but are
still not correct translations (because if they were correct
translations, there would be no need to include them as approximations
-- they'd be in the standard mapping to begin with).

The default ASCII mapping is a separate mapping file called `us-ascii`.
You do not need to include this default mapping in other character set
mapping files; it's automatically loaded by the system as a separate
mapping.

------------------------------------------------------------------------

### Compiled Character Mapping File Format

This section describes the binary file format that the MKCHRTAB tool
generates from a mapping source file. This section will only be of
interest to you if you're making changes to the T3 system itself, or
have some other interest in the technical details of the system.

The compiled character mapping file contains two sections. The first
section contains the mapping from the local character set to Unicode,
and the second second contains the mapping from Unicode to the local
character set.

Note that the mapping file is not concerned with the actual Unicode
representation to be used (UTF-8, wide characters, and so on). The
mapping file merely specifies the Unicode character as 16-bit code
points. The mapping software will use the 16-bit character codes to
generate the correct encoding.

All multi-byte datatypes in the file use the standard [T3 portable
binary encoding](bincode.htm).

#### Header

The first item in the file (at offset zero) is a UINT4 giving the byte
offset (relative to the start of the header) of the start of the
Unicode-to-local table.

#### Local-to-Unicode Mapping Section

Immediately following the header is the local-to-Unicode mapping
section.

This section starts with a UINT2 giving the number of mappings in the
section. The mappings immediately follow this count.

Each mapping consists of a UINT2 with the Unicode character code,
followed by a UINT2 with the local character code.

Because each local character code is stored as a UINT2 value, the
mapping file format is compatible with single-byte, double-byte, and
mixed single- and double-byte character sets. The mapping format is not
compatible with local character sets that use more than 16 bits per
character, such as CNS 11643.

For compatibility and consistency with the cross-mapping tables compiled
by the Unicode consortium ([www.unicode.org](http://www.unicode.org)),
double-byte character values are represented in the UINT2 format in
big-Endian format. Hence, a local character code point of 0x812F
indicates a two-byte sequence, 0x81 followed by 0x2F, in a text stream
in the local character set.

Although it is not implicit in the file format, the character-mapping
mechanism does not support first-byte ambiguity in mixed single- and
double-byte character sets. In other words, a leading (high-order) byte
value used in two-byte characters must never be used as a single-byte
character, and vice versa. For example, if the local character set
contains code points 0x8121, 0x8127, and 0x8129, the value 0x81 must not
be defined as a single-byte character. Similarly, if the value 0x25 is
defined as a single-byte character, then there can be no double-byte
characters with 0x25 in the leading (high) byte, such as 0x2521 or
0x257F. The mixed-length character sets in most common use (Shift-JIS;
Windows code pages 932, 936, 949, and 950; the Macintosh Chinese,
Korean, and Japanese code pages) conform to this requirement.

#### Unicode-to-Local Mapping Section

The Unicode-to-local mapping section is located based on the offset in
the header. This section starts with a UINT2 specifying the number of
character mapping entries in the section, followed by a UINT4 specifying
the total number of bytes of mappings (including all of the length bytes
and the mapping bytes, but *not* the Unicode code point UINT2's). For
example, a file with a single mapping entry, which maps from Unicode
code point 0x00A9 to the three-byte string "(c)", would have the
following header:

    UINT2 = 1  
    UINT4 = 4  

The first entry, 1, specifies the total number of mapping entries; since
there's a single mapping entry, this value is 1. The second entry
specifies the total number of bytes of mappings. Since the single
mapping requires four bytes (one byte for the length prefix and three
bytes for the string "(c)"), this value is 4. Note that the length
prefix bytes are counted in the total byte size of the mappings.

This header is followed immediately by the mapping entries.

The first mapping entry is *always* the default character mapping. This
should specify a Unicode value of 0x0000. This is the mapping that is
used to convert any Unicode character that has no other mapping
specified.

Each mapping consists of a UINT2 specifying the Unicode code point being
mapped, followed by a UBYTE giving the number of characters that follow
in the mapping, followed by the characters of the mapping. For example,
a mapping from Unicode character 0xA9 (the copyright symbol) to the
three-byte sequence "(c)" would be stored like this:

    UINT2 = 0x00A9  
    UBYTE = 0x03  
    UBYTE = '('  
    UBYTE = 'c'  
    UBYTE = ')'  

Finally, at the end of the file, the end-of-file sequence: the four
characters "\$EOF". This marker is intended to allow for future
evoluation of the file format; if additional data are to be added to the
format after the end of the existing data, a new marker will replace
"\$EOF" at this point in the file. Future file readers will be able to
tell if they're looking at an old file by the presence of the "\$EOF"
marker, and will thus know they shouldn't read the new data section; a
new file will have the new marker, hence readers will know they can
safely continue reading.

Note: to allow files created in any possible future expanded formats to
be read by existing readers, existing readers should ignore the absence
of the "\$EOF" marker. This marker is intended only for future readers
so that they can tell whether they're looking at an old file or a new
file.

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
Character Mapping  
<span class="navnp"><a href="bincode.htm" class="nav"><em>Prev:</em> Portable Binary
Encoding</a>    
<a href="debug.htm" class="nav"><em>Next:</em> Debug Records</a>    
</span>

</div>
