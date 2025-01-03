---
layout: docs
---


<img src="topbar.jpg" data-border="0" />





<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="local.html" class="nav">Translating and Localizing TADS</a> \>
Creating a Character-Mapping File  
<span class="navnp"><a href="errtrans.html" class="nav"><em>Prev:</em> Translating Error
Messages</a>     </span>





# Creating a Character-Mapping File

Because TADS 3 uses Unicode internally, TADS programs can work on
practically any computer, in any national language, using any character
set. Unicode is a "universal" character set that encodes almost every
character from almost every written language in the world.

Sadly, most computers today do not use Unicode as their native character
sets. In order for TADS to work on non-Unicode computers, TADS must
translate characters between Unicode and native encodings. To accomplish
this without tying itself to any one type of computer, TADS uses
character mapping files. A character mapping file describes the
translation between a computer's native character set and Unicode.

The Unicode consortium, which is the organization that defines the
Unicode standard, publishes files that describe the correspondence
between Unicode and most native character sets that are in use today.
TADS uses these files as a starting point.

To create a new character mapping for use with TADS, follow these steps.

**Identify the character set you're using.** This is a function of the
type of computer you're using and your computer's localization. For
example, Microsoft Windows systems localized for Eastern or Central
Europe use Windows Code Page 1250.

**Obtain a Unicode mapping file.** For most character sets in widespread
use, there's a mapping available from the Unicode web site,
[www.unicode.org](http://www.unicode.org). See below for a list of
common mappings and where to find them on the Unicode site. The
character mapping files as provided on the Unicode ftp site are *almost*
in a format that you can directly feed into the TADS character map
compiler, but you must make one small addition first. At the end of the
file, add a line that looks like this:

```
    default_display 0x81
```

For the "0x81", however, you should substitute the character that you
want to use as the default display character. This defines the character
that TADS will display when a Unicode character has no mapping in your
native character set. Most native character sets include an "invalid"
character for just this purpose; this character looks like an empty
rectangle in many fonts, but each character set varies. You should find
an appropriate character in your native character set, and define it for
the "default_display" character.

**Compile the mapping file.** Use the mkchrtab ("make character table")
utility, included with the TADS distribution, to compile the mapping
file into the format that TADS uses:



    mkchrtab cp1250.txt cp1250.tcm



The first argument is the source file that you downloaded from the
Unicode site. The second argument is the name of the "tcm" file (TADS
Character Map) that TADS will use.

## Download Locations for Common Mappings

ISO 8859 (ISO Latin-n) code pages

<ftp://ftp.unicode.org/Public/MAPPINGS/ISO8859/>

MS-DOS code pages

<ftp://ftp.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/PC/>

Microsoft Windows code pages

<ftp://ftp.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/WINDOWS/>

Apple Macintosh character sets

<ftp://ftp.unicode.org/Public/MAPPINGS/VENDORS/APPLE/>

NeXT character sets

<ftp://ftp.unicode.org/Public/MAPPINGS/VENDORS/NEXT/>

## Approximation Mappings

Since the Unicode character set includes character assignments for
nearly every character used in a written language anywhere in the world,
and most local character sets on existing operating systems and
terminals include character assignments for only a few languages, most
of the characters in the Unicode character set will not be displayable
on most computers.

As described earlier, the default_display setting in the character
mapping file allows you to specify the glyph to display when a character
cannot be mapped to the local character set. So, if you're running a
game that uses kanji characters on a machine localized for the United
States, the kanji characters will be unmappable and so will be displayed
using the default_display setting.

In many cases, however, you might want to provide an "approximate"
mapping for some characters. An approximate mapping lets you specify a
local character that is similar enough to a particular Unicode character
that you'd rather display that local character as an approximation than
display the default_display glyph. For example, if your computer can
display only plain ASCII characters (so it doesn't have any accented
letters in its character set), you might want to use a regular "a" as an
approximation for the various accented "a" characters ("á", "à", "â",
and so on). While displaying a regular "a" for an accented "a" loses
some information, it might give the reader a better chance of
understanding the original text than displaying the default_display
character, which doesn't tell the reader anything other than that the
original character can't be displayed on this system.

In addition, some glyphs can be approximated visually by combining two
or more glyphs from a more limited character set. For example, left and
right arrows can be approximated by `\<-` and
`-\>`.

The TADS 3 character mapping system provides an optional mechanism for
making these types of approximations. If you wish to provide
approximations, you must place them after the local-to-Unicode mappings
described earlier (the local-to-Unicode mappings are usually the ones
you obtain from mapping files found on the Unicode web site). After all
of the local-to-Unicode mappings, add this line to your mapping source
file:

```
    display_mappings
```

After this line, provide your approximation mappings. These mappings can
take two forms, as shown in these examples:

```
    &mdash  '--'
    0x0141      'L'
```

In the first form, you can specify an HTML entity name, written with a
leading ampersand (`&`) as it is in HTML source
code. In the second form, you use a number (the "0x" prefix indicates
that the number is in hexadecimal; you can specify a decimal number by
omitting the "0x" prefix, but the Unicode listings specify everything in
hex so you would probably want to use hex most of the time).

In both forms, the first item on the line specifies the Unicode
character to be mapped to a local approximation, and the rest of the
line specifies a string of Unicode characters to substitute for the
original Unicode character. The simplest way to specify the substitution
string is to enclose a string in single quote marks; this works if all
of the substituted characters are plain ASCII characters (in the Unicode
range 0 to 255). If you want to substitute any Unicode characters
outside of the plain ASCII range, use numbers to specify the Unicode
code points of the substitution:

```
    &mdash  0x2d 0x2d
```

The numeric form eliminates any character set translation issues with
respect to the character mapping source file itself (the last thing we
need to worry about at this point is how mapping files are mapped!).

Important: the substitution string is a set of Unicode characters, not
local characters. These Unicode characters are themselves further
translated into local characters. Note that the Unicode characters in
the substitution string must appear in the local-to-Unicode mapping
section; you cannot substitute a character with no mapping, and you
cannot substitute a character that itself has an approximation mapping.
The character mapper automatically translates the substitution string to
the local character set for display.

The reason that the substitution string is specified with Unicode
characters rather than local characters is that this allows programs to
perform the approximation substitutions entirely in the Unicode domain,
and then know for certain that each Unicode character in the substituted
string will translate to exactly one local character. This is important
because it allows programs using the character mappings to process the
results of any multiple-character substitutions in the Unicode domain;
for example, the TADS Interpreter's output formatter uses this
information to perform word wrapping on the text that results from
substituting the approximation mappings, which must be done in the
Unicode domain.

You might wonder why the character mapping file has two separate
sections - one for mappings from local to Unicode, and the other for
approximation mappings. The reason for this dichotomy is that the
character mapper treats the local-to-Unicode mappings as reversible -
each mapping establishes that the local character will be translated on
input to the given Unicode character, and also that the Unicode
character will be translated to the local character on output; in order
to be reversible, the local-to-Unicode entries must be unique,
one-to-one mappings. The Unicode-to-local section, on the other hand,
does not need to provide a unique mapping for each character, because
the character mapper does not assume that these mappings are
reversible - this is a one-way mapping. This is all designed as a
time-saver for people creating character mappings - if one or the other
of these sections weren't reversible, you'd always have to specify a
full set for both directions, because neither set could be reversed to
infer the other; the logical choice for the reversible mappings is the
local-to-Unicode set, because the local character set will almost always
be a small subset of the Unicode set, and hence it is frequently
desirable to map several Unicode characters to a single local character,
but not vice versa.

For some approximation mapping examples, refer to the default 7-bit
ASCII mapping file "us-ascii.txt" (in the "charmap" subdirectory of the
TADS 3 distribution).



------------------------------------------------------------------------



*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="local.html" class="nav">Translating and Localizing TADS</a> \>
Creating a Character-Mapping File  
<span class="navnp"><a href="errtrans.html" class="nav"><em>Prev:</em> Translating Error
Messages</a>     </span>


