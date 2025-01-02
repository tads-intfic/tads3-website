---
layout: docs
---


<img src="topbar.jpg" data-border="0" />





<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> CharacterSet  
<span class="navnp"><a href="bytearr.html" class="nav"><em>Prev:</em> ByteArray</a>
    <a href="collect.html" class="nav"><em>Next:</em> Collection</a>    
</span>





# CharacterSet

TADS 3 uses the Unicode character set to represent all strings
internally. Unicode is an international standard that was designed to be
capable of representing, in a single character set, characters from
every natural language in use throughout the world. Since most computers
use other character sets for the display, keyboard, and file system,
though, it is often necessary to translate strings between the Unicode
characters that TADS uses internally and the coding systems. In almost
all cases, TADS performs this translation automatically; when you
display a string, for example, TADS translates the string to the display
character set, and when you read a string from the keyboard, TADS
translates the local character encoding to Unicode in the returned
string.

In some cases, though, it's useful to be able to translate characters to
and from Unicode, or from one local character set to another, under
explicit program control. For example, you might want to read or write
an external disk file using a particular character set. For situations
like this, TADS provides the CharacterSet intrinsic class. This class
encapsulates a "character mapping," which defines the correspondences
between local character codes and Unicode character codes.

## Construction

To create a CharacterSet object, you use the
`new` operator, specifying the name of the
character set you want to translate to or from:

```
    local cs = new CharacterSet('us-ascii');
```

The CharacterSet object can then be used to specify the encoding to use
for explicit character translations. You can use a CharacterSet in these
situations:

- You can specify the encoding of a text file you are reading or
  writing, by passing the CharacterSet to
  `File.openTextFile()`.
- You can specify the interpretation of raw bytes in a ByteArray by
  passing the CharacterSet to the
  `mapToString()` method.
- You can specify how to encode a string into raw bytes by passing the
  CharacterSet to the `mapToByteArray()` method
  of a String.

In addition, CharacterSet provides a few methods that let you get
information about the character mapping it describes.

Note: when using the CharacterSet class, you should
`\#include \<charset.h\>`.

## Handling unmappable characters

TADS strings internally are represented in Unicode. Unicode combines
essentially all of the world's alphabets and symbols into one character
set. It can represent many thousands of unique characters.

Most proprietary character sets, on the other hand, are limited to a
relatively small number of unique characters - often 256, which is the
number of different characters you can represent with an 8-bit byte.
These smaller sets are usually designed to represent only the characters
needed for a small group of related languages. For example, Latin-1 only
includes the Roman alphabet, and only has the accented letters that are
commonly used in Western European languages (German, French, Italian,
Spanish, etc).

When you convert a string from Unicode to one of these smaller
proprietary character sets, it's entirely possible that the string will
contain Unicode characters that don't exist in the target set. For
example, Latin-1 doesn't contain any of the Greek alphabet. So what
happens if you convert a TADS string containing Greek letters to
Latin-1?

There are two possibilities when a character in a string you're mapping
doesn't exist in the target character set.

The first is that it's replaced with an "approximation". This means that
the mapper will substitute a similar looking character or group of
characters for the original. For example, the plain ASCII character set
doesn't include the copyright symbol, © (Unicode U+00A9), but it does
have a visual approximation: the string "(c)". The most common
approximation is for accented letters. Most of the mappers will replace
an accented letter with its unaccented equivalent when the accented
version doesn't exist in the target set. For example, if you convert a
string containing "E with caron" (U+011A) to Latin-1, the mapper will
substitute an unaccented E.

The second possibility is that the character will be replaced with a
"missing character" symbol. This approach is used when there's no good
substitute, such as when trying to map a Chinese character to Latin-1.
The missing character symbol is up to the mapper to define; for some
character sets it's a graphical symbol, often an empty rectangle, while
for others it's an ordinary question mark.

The CharacterSet object has two methods that let you determine how a
character is handled. isMappable() tells you whether or not the
character has a mapping - this returns true if it has *any* mapping,
exact or approximate. isRoundTripMappable() tells you whether the
character has a one-to-one mapping, which usually means that there's an
exact equivalent in the target set, since approximations are almost
never one-to-one.

## Built-in and external character mappings

TADS 3 has several pre-defined character mappings built in to the
system:

- 'US-ASCII' - the 7-bit ASCII character set. This "least common
  denominator" character set is available on practically every modern
  computer. Most computers extend this set by adding an additional set
  of accented letters and punctuation, but the extended sets vary by
  operating system and localization.
- 'ISO-8859-1' - the ISO 8859-1 character set, also known as ISO
  Latin-1. This is an 8-bit character set that contains the ASCII
  characters plus a set of punctuation and accented letters for Western
  European languages. This character set is not supported on all
  computers, but it has become widely supported because of its status as
  the default character set for HTTP.
- 'UTF-8' - the Unicode UTF-8 encoding. This encoding represents each
  16-bit Unicode character as one, two, or three bytes; it is designed
  to be especially compact when coding strings that consist mostly of
  the ASCII subset of Unicode.
- 'UTF-16BE' - the 16-bit Unicode character set, in "big endian"
  representation: this means that each 16-bit character is encoded in a
  pair of 8-bit bytes, with the more significant byte first.
- 'UTF-16LE' - the 16-bit Unicode character set, in "little endian"
  representation: this means that each 16-bit character is encoded in a
  pair of 8-bit bytes, with the more significant byte first.

The character sets above are available on every TADS 3 interpreter. In
addition, TADS can load external mapping files, which makes it
extensible to almost any character set. See the section on [character
maps](cmap.html) for details. You can use any character set for which an
external mapping file exists on the local system, simply by using the
mapping name in the CharacterSet constructor. (Don't use the ".tcm" or
other filename suffix - just use the base name of the mapping file.)

The standard TADS 3 distribution includes a full suite of external
character mapping files, including all of the 8-bit Windows, MS-DOS, and
Macintosh code pages, and the ISO Latin-1 through Latin-10 character
sets. Most TADS distributions contain the whole standard set, but
individual platforms may add or delete some of the encodings, so it's
best to check at run-time. Use the isMappingKnown() method to determine
if a character set is available.

Here's a list of the standard character sets included with most of the
official TADS distributions. The names aren't sensitive to case.

The "synonyms" column lists other names you can use to refer to the same
character set. The synonyms aren't there to give you more stuff to
memorize - just the opposite. They're names that other programming
languages might use for the same character sets. TADS accepts the common
synonyms so that if you're already accustomed to using a certain name
from another system, you don't have to remember a different name when
using TADS.

Name(s)



Synonyms

Description

US-ASCII

ASCII, US_ASCII, ASC7DFLT, ISO646-US, ISO-IR-6, CP367, US

7-bit US ASCII. This character set contains only the Roman alphabet
(without any accented letters), the digits, and a few common punctuation
marks.

UTF-8

UTF8

Unicode UTF-8. This is an encoding of Unicode that uses a varying number
of bytes per character. It's designed to be compatible with pre-Unicode
applications. This encoding is common in Internet protocols.

UCS-2LE

UCS2LE, UTF-16LE, UTF16LE, UTF_16LE, UnicodeL, Unicode-L, Unicode-LE

Unicode UCS-2, little-endian byte order. This is an encoding of Unicode
that stores each character in two bytes, with the low-order byte of each
pair stored first. This is a common encoding in Windows applications
that use Unicode.

Technically, TADS uses UCS-2, not UTF-16. The latter is an upwardly
compatible extension that can encode "supplementary" characters outside
of the 16-bit range, by using two 16-bit elements known as surrogates.
TADS accepts the UTF-16 names as synonyms because of the basic format
compatibility, but TADS doesn't actually recognize surrogate pairs
internally; it will incorrectly treat each pair as two ordinary
characters. The compatible design of the encoding means that TADS won't
corrupt data in this format and will largely process it correctly, but
it will display each supplementary character as a pair of
unknown/missing characters, and it will count surrogate pairs as two
characters for the purposes of string lengths and the like.

UCS-2BE

UCS2BE, UTF-16BE, UTF16BE, UTF_16BE, UnicodeB, Unicode-B, Unicode-BE

Unicode UCS-2, big-endian byte order. This is an encoding of Unicode
that stores each character in two bytes, with the high-order byte of
each pair stored first. This is the default UCS-2 byte order for most
programs on non-Windows platforms.

Latin-1

ISO-8859-1, ISO_8859-1, ISO_8859_1, ISO8859-1, ISO8859_1, 8859-1,
8859_1, ISO-IR-100, Latin1, L1, CP819, ISO1

Western Europe. This character set contains all of the ASCII characters,
plus a set of accented Roman characters used in Western European
languages (Danish, Dutch, English, Faeroese, Finnish, French, German,
Icelandic, Irish, Italian, Norwegian, Portugese, Rhaeto-Romanic,
Scottish Gaelic, Spanish, Swedish).

Latin-2

Latin2, ISO-2, ISO2, 8859-2, ISO8859-2, ISO-8859-2, ISO_8859-2,
ISO_8859_2, L2

Central and Eastern Europe. Includes ASCII characters plus accented
characters for Central and Eastern European languages that use the Roman
alphabet (Bosnian, Polish, Croatian, Czech, Slovak, Slovene, Serbian,
Hungarian).

Latin-3

*same variations as Latin-2*

South Europe (Turkish, Maltese, Esperanto).

Latin-4

*same variations as Latin-2*

North Europe (Estonian, Latvian, Lithuanian, Greenlandic, Sami).

Latin-5

*same variations as Latin-2*

Latin/Cyrillic. Includes the ASCII characters plus the Cyrillic
alphabet.

Latin-6

*same variations as Latin-2*

Latin/Arabic. Includes the ASCII characters plus the most common Arabic
language characters.

Latin-7

*same variations as Latin-2*

Latin/Greek. Includes the ASCII characters plus the Greek alphabet.

Latin-8

*same variations as Latin-2*

Latin/Hebrew. Includes the ASCII characters plus the Hebrew alphabet.

Latin-9

*same variations as Latin-2*

Latin/Turkish/Kurdish. Includes most Latin-1 characters, but replaces
some Icelandic letters in Latin-1 with Turkish letters.

Latin-10

*same variations as Latin-2*

Latin/Nordic. A rearrangement of Latin-4 designed for Nordic languages.

KOI8-R

Russian Cyrillic.

CP437

437, DOS437, DOS-437

MS-DOS code page 437 (the original IBM PC code page; contains ASCII plus
a complement of accented Roman letters, line-drawing characters, and
miscellaneous symbols)

CP737

737, DOS737, DOS-737

MS-DOS code page 737 (Greek)

CP775

775, DOS775, DOS-775

MS-DOS code page 775 (Estonian, Lithuanian, Latvian)

CP850

850, DOS850, DOS-850

MS-DOS code page 850 ("Multilingual", mostly Western Europe; retains
many symbols and line drawing characters from CP437, but adds more
accented Roman letters)

CP852

852, DOS852, DOS-852

MS-DOS code page 852 ("Slavic", Central and Eastern Europe)

CP855

855, DOS855, DOS-855

MS-DOS code page 855 (Cyrillic)

CP857

857, DOS857, DOS-857

MS-DOS code page 857 (Turkish)

CP860

860, DOS860, DOS-860

MS-DOS code page 860 (Portugese)

CP861

861, DOS861, DOS-861

MS-DOS code page 861 (Icelandic)

CP862

862, DOS862, DOS-862

MS-DOS code page 862 (Hebrew)

CP863

863, DOS863, DOS-863

MS-DOS code page 863 (French Canadian)

CP864

864, DOS864, DOS-864

MS-DOS code page 864 (Arabic)

CP865

865, DOS865, DOS-865

MS-DOS code page 865 (Nordic)

CP866

866, DOS866, DOS-866

MS-DOS code page 866 (Cyrillic)

CP869

869, DOS869, DOS-869

MS-DOS code page 869 (Greek)

CP874

874, DOS874, DOS-874

MS-DOS code page 874 (Thai)

CP1250

1250, Win1250, Win-1250, Windows1250, Windows-1250

Windows code page 1250 (Central and Eastern Europe; similar to Latin-2,
but not compatible, since some characters are rearranged)

CP1251

1251, Win1251, Win-1251, Windows1251, Windows-1251

Windows code page 1251 (Cyrillic; mostly equivalent to Latin-5)

CP1252

1252, Win1252, Win-1252, Windows1252, Windows-1252

Windows code page 1252 (Western Europe; this is a superset of Latin-1,
with some added punctuation characters)

CP1253

1253, Win1253, Win-1253, Windows1253, Windows-1253

Windows code page 1253 (Greek; mostly equivalent to Latin-7, but not
fully compatible)

CP1254

1254, Win1254, Win-1254, Windows1254, Windows-1254

Windows code page 1254 (Turkish; mostly equivalent to Latin-9)

CP1255

1255, Win1255, Win-1255, Windows1255, Windows-1255

Windows code page 1255 (Hebrew; a mostly compatible superset of Latin-8)

CP1256

1256, Win1256, Win-1256, Windows1256, Windows-1256

Windows code page 1256 (Arabic)

CP1257

1257, Win1257, Win-1257, Windows1257, Windows-1257

Windows code page 1257 (Baltic)

CP1258

1258, Win1258, Win-1258, Windows1258, Windows-1258

Windows code page 1258 (Vietnamese)

Mac

Mac OS Roman

MacCyr

Mac OS Cyrillic

MacIceland

Mac OS Icelandic

MacCE

Mac OS Central Europe

MacGreek

Mac OS Greek

MacTur

Mac OS Turkish

## Unknown character mappings

You can create a CharacterSet object that refers to a character mapping
that doesn't exist on the local system. This is legal and won't cause
any errors at the time you create the object; however, if you try to use
the object to perform any character mapping, an exception -
`UnknownCharSetException` - will be thrown.

You can check to see if a character mapping is known by calling the
`isMappingKnown()` method after creating the
CharacterSet object. If this method returns true, the character set is
known and you can use it to perform character mapping.

It's legal to create a CharacterSet referring to an unknown mapping
because it would otherwise be impossible to save the state of a program
that contains a CharacterSet object and then restore the state on
another computer without the same character mappings.

## CharacterSet methods

`getName()`



Returns a string giving the name of the character set. This is the same
as the name that was used to create the character set object.



`isMappable(*val*)`



Returns `true` if the character or characters
*val*, which can be given as an integer (giving a Unicode character
value) or a string of characters, can be mapped to characters in the
character set, `nil` if not. If *val* is a
string, the method returns `true` only if all of
the characters in the string can be mapped.



<span id="isMappingKnown"></span>

`isMappingKnown()`



Returns `true` if the character set has a known
mapping, `nil` if not. If this returns
`nil`, any attempts to map characters using the
object will throw a
`CharacterSetUnknownException`.



`isRoundTripMappable(*val*)`



Returns `true` if the character or characters
*val*, which can be given as an integer (giving a Unicode character
value) or a string of characters, can be mapped to the local character
set and then back to Unicode again with no loss of information. In other
words, if converting *val* to the local character set and then
converting it back to Unicode yields the original set of characters in
*val*, then *val* has a round-trip mapping. The existence of a
round-trip mapping generally means that the characters in *val* have an
exact representation in the local character set, as opposed to an
approximation. Approximations require either multiple local characters
being used to represent a single local character, or a visually similar
glyph being used as a graphical approximation. In the case of a mapping
to multiple local characters, a round-trip mapping is inherently
impossible because the string of multiple local characters will always
map back to multiple Unicode characters, hence mapping to local and back
will not yield the original string. Graphical approximations are usually
achieved by mapping an accented Unicode character to an unaccented local
character (such as a mapping from an "a" with an acute accent to a
plain, unaccented "a"); these usually don't have round-trip mappings
because the unaccented local character usually maps back to the
unaccented Unicode character.



## Examples

**Example 1: Using a CharacterSet to determine if the local machine is
capable of displaying Cyrillic characters.**

If you're writing a game in Russian, you would probably want to make
sure the player's computer is capable of displaying Cyrillic
characters - if it weren't, the player probably wouldn't be able to read
most of the text in your game. You can do this by creating a
CharacterSet object for the local system's display character set, and
then testing a string of characters for mappability with the
`isMappable()` method.

```
    #include <tads.h>

    #include <charset.h>

    testCyrillic(args)
    {
      /* get the local display character set */
      local cs = new CharacterSet(getLocalCharSet(CharsetDisplay));

      /*
       *  Check a few representative Cyrillic alphabetic characters
       *  (see http://www.unicode.org/charts/)
       */
      if (cs.isMappable('\u0410\u0411\u041a\u042f\0430\0431\u044f'))
        "Warning: This game uses Cyrillic characters.  Your system
        does not appear to be localized for Russian, so the text
        in this game might not display properly.  You might need
        to adjust your system localization settings to display
        Cyrillic characters before you can play this game.  If
        you change your localization settings, please close and
        then re-start the game to ensure the new settings are used.";
    }
```

**Example 2: Translating a file from one character set to another.**

This isn't a very typical situation for most games, but suppose you
wanted to write a program that reads a text file that was saved in one
character set and save it in a different character set - say, translate
the file from the Macintosh Roman character set to ISO Latin-1. To do
this, you would need a Mac Roman mapping definition on your computer,
because this isn't one of the built-in character sets; assuming we had
this mapping file (let's say it's called "MacRoman.tcm"), we could
perform the translation quite easily using the text file functions.

```
    #include <tads.h>

    translate(inFileName, outFileName)
    {
      local inFile, outFile;
      local csMac, csISO;

      /* create the character set objects */
      csMac = new CharacterSet('MacRoman');
      csISO = new CharacterSet('iso-8859-1');

      /* open the files */
      inFile = File.openTextFile(inFileName, FileAccessRead, csMac);
      outFile = File.openTextFile(outFileName, FileAccessWrite, csISO);
      if (inFile == nil || outFile == nil)
      {
        "Error: cannot open files.\n";
        return;
      }

      /* read text and write it back out */
      for (;;)
      {
        local txt;

        /* read a line of input; stop if at end of file */
        txt = inFile.readFile();
        if (txt == nil)
          break;

        /* write it out */
        outFile.writeFile(txt);
      }

      /* close the files */
      inFile.closeFile();
      outFile.closeFile();
    }
```

Note that creating CharacterSet objects isn't strictly necessary in this
example, since we could have more simply passed the name of the
character set directly to File.openTextFile(). However, if we were going
to use the same character set with more than one file, it's more
efficient to use the CharacterSet object, since that we we only have to
load the mapping file once.

------------------------------------------------------------------------



*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> CharacterSet  
<span class="navnp"><a href="bytearr.html" class="nav"><em>Prev:</em> ByteArray</a>
    <a href="collect.html" class="nav"><em>Next:</em> Collection</a>    
</span>


