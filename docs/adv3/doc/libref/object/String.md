---
layout: docs
---
<span class="title">String</span><span class="type">class</span>

[systype.h](../file/systype.h.html)\[[358](../source/systype.h.html#358)\],
[reflect.t](../file/reflect.t.html)\[[287](../source/reflect.t.html#287)\]

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



The native string type.

*Modified in
[reflect.t](../file/reflect.t.html)\[[287](../source/reflect.t.html#287)\]:*  
Modify the String intrinsic class to provide a to-symbol mapping

`intrinsic class `**`String`**` :   `[`Object`](../object/Object.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`String`**  
[`Object`](../object/Object.html)  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  







*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`compareIgnoreCase`](#compareIgnoreCase)[`compareTo`](#compareTo)[`digestMD5`](#digestMD5)[`endsWith`](#endsWith)[`find`](#find)[`findAll`](#findAll)[`findLast`](#findLast)[`findReplace`](#findReplace)[`htmlify`](#htmlify)[`length`](#length)[`mapToByteArray`](#mapToByteArray)[`match`](#match)[`sha256`](#sha256)[`specialsToHtml`](#specialsToHtml)[`specialsToText`](#specialsToText)[`splice`](#splice)[`split`](#split)[`startsWith`](#startsWith)[`substr`](#substr)[`toFoldedCase`](#toFoldedCase)[`toLower`](#toLower)[`toTitleCase`](#toTitleCase)[`toUnicode`](#toUnicode)[`toUpper`](#toUpper)[`unpackBytes`](#unpackBytes)[`urlDecode`](#urlDecode)[`urlEncode`](#urlEncode)[`valToSymbol`](#valToSymbol)

Inherited from `Object` :  
[`getPropList`](../object/Object.html#getPropList)[`getPropParams`](../object/Object.html#getPropParams)[`getSuperclassList`](../object/Object.html#getSuperclassList)[`isClass`](../object/Object.html#isClass)[`isTransient`](../object/Object.html#isTransient)[`ofKind`](../object/Object.html#ofKind)[`propDefined`](../object/Object.html#propDefined)[`propInherited`](../object/Object.html#propInherited)[`propType`](../object/Object.html#propType)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="compareIgnoreCase"></span>

`compareIgnoreCase (str)`

[systype.h](../file/systype.h.html)\[[799](../source/systype.h.html#799)\]



Compare this string to another string, ignoring case. The two strings
are compared on the basis of the "case folded" versions of their
characters, using the case folding rules from the Unicode standard (the
case folded version of a string is the value returned by
toFoldedCase()). The return alue is an integer less than zero if this
string sorts before the other string, zero if they're identical, or
greater than zero if this string sorts after the other.

As with compareTo(), this only produces alphabetically correct sorting
order when comparing ASCII strings.



<span id="compareTo"></span>

`compareTo (str)`

[systype.h](../file/systype.h.html)\[[784](../source/systype.h.html#784)\]



Compare this string to another string, using Unicode character code
points as the collation order. Returns an integer less than zero if this
string sorts before the other string, zero if they're identical, or
greater than zero if this string sorts after the other. This makes the
result suitable for use in a sort() callback, for example.

Note that if you use the result for sorting text that includes accented
Roman letters, the result order probably won't match the dictionary
order for your language. Different languages (and even different
countries/cultures sharing a language) have different rules for
dictionary ordering, so collation is inherently language- specific. This
routine doesn't take language differences into account; it simply uses
the fixed Unicode code point ordering. The Unicode ordering for accented
characters is somewhat arbitrary, because the accented Roman characters
are arranged into multiple disjoint blocks that are all separate from
the unaccented characters. For example, A-caron sorts after Z-caron,
which sorts after A-breve, which sorts after Y-acute, which sorts after
A-acute, which sorts after plain Z.



<span id="digestMD5"></span>

`digestMD5 ( )`

[systype.h](../file/systype.h.html)\[[681](../source/systype.h.html#681)\]



Get the MD5 digest of the string. This calculates the 128-bit RSA MD5
digest value, returning the digest as a 32-character string of hex
digits. The hash value is computed on the UTF-8 representation of the
string.



<span id="endsWith"></span>

`endsWith (str)`

[systype.h](../file/systype.h.html)\[[410](../source/systype.h.html#410)\]



determine if we end with the given string



<span id="find"></span>

`find (str, index?)`

[systype.h](../file/systype.h.html)\[[395](../source/systype.h.html#395)\]



Find a substring or pattern within the subject string (self), searching
the string from left to right returning the index of the first match
found. If 'str' is a string, this searches for an exact match to the
substring. If 'str' is a RexPattern object, this searches for a match to
the pattern. Returns the character index of the start of the match if
found (the first character is at index 1), or nil if no match is found.

'index' is the optional starting index for the search. the first
character is at index 1; a negative index specifies an offset from the
end of the string, with -1 indicating the last character, -2 the second
to last, and so on. If 'index' is omitted, the search starts at the
first character. Note that the search proceeds from left to right even
if 'index' is negative - a negative starting index is just a convenience
to specify an offset from the end of the string, but the search still
proceeds in the same direction.

(Note: "left to right" in this context simply means from lower to higher
character index in the string. We're using the term loosely, in
particular ignoring anything related to the reading order or display
direction for different languages or scripts.)



<span id="findAll"></span>

`findAll (str, func?)`

[systype.h](../file/systype.h.html)\[[862](../source/systype.h.html#862)\]



Find all occurrences of substring or pattern within a string, returning
a list of the results.

'str' can be a string or RexPattern object. If it's a string, we look
for exact matches to the substring. If it's a RexPattern, we search for
matches to the pattern.

'func' is an optional function used to process the results. If this is
provided, the function is called once for each match found in the
string. The function's return value is then placed into the result list
for the overall findAll() result. The function is called for each match
found as follows: func(match, idx, g1, g2, ...), where 'match' is a
string giving the text of the match, 'idx' is an integer giving the
index in the string (self) of the first character of the match, and the
'gN' arguments are strings giving the text of the correspondingly
numbered capture groups (the parenthesized groups in a regular
expression match). All of the 'func' arguments except 'match' are
optional: the function can omit them, in which case the caller doesn't
pass them. If 'func' specifies more 'gN' capture group parameters than
were actually found in the match, nil is passed for each extra
parameter.

The return value is a list of the results. If no occurrences of 'str'
are found, the result is an empty list. If 'func' is specified, each
element in the return list is the return value from calling 'func' for
the corresponding match; if 'func' is omitted, each element in the
return list is a string with the text of that match.



<span id="findLast"></span>

`findLast (str, index?)`

[systype.h](../file/systype.h.html)\[[830](../source/systype.h.html#830)\]



Find the last instance of a substring or pattern within the string,
searching the subject string (self) from right to left (that is, from
the end of the string towards the beginning). This works like find(),
but searches in the reverse direction. Returns the index of the match,
or nil if no match is found.

'str' can be a string or a RexPattern. If it's a string, we look for an
exact match to the substring. If it's a RexPattern, we search for a
match to the pattern.

The optional 'index' specifies the starting index for the search. This
is the index of the character AFTER the last character that's allowed to
be included in the match. The first character of the string is at index
1; a negative index indicates an offset from the end of the string, so
-1 is the last character. 0 has the special meaning of the end of the
string, just past the last character in the string, so you can use 0
(or, equivalently, self.length()+1) to search the entire string from the
end. For a repeated search, pass the index of the previous match, since
this will find the next earlier matching substring that doesn't overlap
with the previous match.

(Note: "right to left" in this context simply means that the search runs
from higher to lower character index in the string. We're using the term
loosely, in particular ignoring anything related to the reading order or
display direction for different languages or scripts.)



<span id="findReplace"></span>

`findReplace (origStr, newStr, flags?, index?, limit?)`

[systype.h](../file/systype.h.html)\[[510](../source/systype.h.html#510)\]



Replace one occurrence or all occurrences of the given substring with
the given new string.

'self' is the subject string, which we search for instances of the
replacement.

'origStr' is the string to search for within 'self'. This is treated as
a literal text substring to find within 'self'. 'origStr' can
alternatively be a RexPattern object, in which case the regular
expression is matched.

'newStr' is the replacement text, as a string. 'newStr' can
alternatively be a function (regular or anonymous) instead of a string.
In this case, it's invoked as 'newStr(match, index, orig)' for each
match where 'match' is the matching text, 'index' is the index within
the original subject string of the match, and 'orig' is the full
original subject string. This function must return a string value, which
is used as the replacement text. Using a function allows greater
flexibility in specifying the replacement, since it can vary the
replacement according to the actual text matched and its position in the
subject string.

'flags' is a combination of ReplaceXxx flags specifying the search
options. It's optional; if omitted, the default is ReplaceAll.

ReplaceOnce and ReplaceAll are mutually exclusive; they mean,
respectively, that only the first occurrence of the match should be
replaced, or that every occurrence should be replaced. ReplaceOnce and
ReplaceAll are ignored if a 'limit' value is specified (this is true
even if 'limit' is nil, which means that all occurrences are replaced).

'index' is the starting index within 'self' for the search. If this is
given, we'll ignore any matches that start before the starting index. If
'index' is omitted, we start the search at the beginning of the string.
If 'index' is negative, it's an index from the end of the string: -1 is
the last character, -2 the second to last, etc.

'origStr' can be given as a list of search strings, rather than a single
string. In this case, we'll search for each of the strings in the list,
and replace each one with 'newStr'. If 'newStr' is also a list, each
match to an element of the 'origStr' list is replaced with the
corresponding element (at the same index) of the 'newStr' list. If there
are more 'origStr' elements than 'newStr' elements, each match to an
excess 'origStr' element is replaced with an empty string. This allows
you to perform several replacements with a single call.

'limit', if specified, is an integer indicating the maximum number of
matches to replace, or nil to replace all matches. If the limit is
reached before all matches have been replaced, no further replacements
are performed. If this parameter is specified, it overrides any
ReplaceOnce or ReplaceAll flag.

There are two search modes when 'origStr' is a list. The default is
"parallel" mode. In this mode, we search for all of the 'origStr'
elements, and replace the leftmost match. We then search the remainder
of the string, after this first match, again searching for all of the
'origStr' elements. Again we replace the leftmost match. We repeat this
until we run out of matches.

The other option is "serial" mode, which you select by including
ReplaceSerial in the flags argument. In serial mode, we start by
searching only for the first 'origStr' element. We replace each
occurrence throughout the string (unless we're in ReplaceOnce mode, in
which case we stop after the first replacement). If we're in ReplaceOnce
mode and we did a replacement, we're done. Otherwise, we start over with
the updated string, containing the replacements so far, and search it
for the second 'origStr' element, replacing each occurrence (or just the
first, in ReplaceOnce mode). We repeat this for each 'origStr' element.

The key difference between the serial and parallel modes is that the
serial mode re-scans the updated string after replacing each 'origStr'
element, so replacement text could itself be further modified. Parallel
mode, in contrast, never re-scans replacement text.



<span id="htmlify"></span>

`htmlify (flags?)`

[systype.h](../file/systype.h.html)\[[404](../source/systype.h.html#404)\]



htmlify a string



<span id="length"></span>

`length ( )`

[systype.h](../file/systype.h.html)\[[361](../source/systype.h.html#361)\]



get the length of the string



<span id="mapToByteArray"></span>

`mapToByteArray (charset?)`

[systype.h](../file/systype.h.html)\[[429](../source/systype.h.html#429)\]



Map to a byte array, converting to the given character set. If 'charset'
is provided, it must be an object of intrinsic class CharacterSet, or a
string giving the name of a character set. The characters in the string
are mapped from the internal Unicode representation to the appropriate
byte representation in the given character set. Any unmappable
characters are replaced with the usual default/missing character for the
set, as defined by the mapping.

If 'charset' is omitted or nil, the byte array is created simply by
treating the Unicode character code of each character in the string as a
byte value. A byte can only hold values from 0 to 255, so a numeric
overflow error is thrown if any character code in the source string is
outside this range.



<span id="match"></span>

`match (str, idx?)`

[systype.h](../file/systype.h.html)\[[884](../source/systype.h.html#884)\]



Match the given string or RexPattern object to this string value,
starting at the start of the string or at the given index, if specified.
If 'str' is a string, we check for a match to the literal text of the
string; if 'str' is a RexPattern, we try to match the regular
expression. 'idx' is the optional starting position (1 is the first
character; negative values are from the end of the string, with -1 as
the last character, -2 as the second to last, etc). If 'idx' is omitted,
the default is the start of the string.

Returns an integer giving the length of the match found if the string
matches 'str', or nil if there's no match.

The difference between this method and find() is that this method only
checks for a match at the given starting position, without searching any
further in the string, whereas find() searches for a match at each
subsequent character of the string until a match is found or the string
is exhausted.



<span id="sha256"></span>

`sha256 ( )`

[systype.h](../file/systype.h.html)\[[673](../source/systype.h.html#673)\]



Get the SHA-256 hash of the string. This calculates the 256-bit Secure
Hash Algorithm 2 hash value, returning the hash as a 64-character string
of hex digits. The hash value is computed on the UTF-8 representation of
the string.



<span id="specialsToHtml"></span>

`specialsToHtml (stateobj?)`

[systype.h](../file/systype.h.html)\[[603](../source/systype.h.html#603)\]



Convert special characters and TADS markups to standard HTML markups.
Returns a new string with the contents of the 'self' string processed as
described below.

'stateobj' is an object containing the state of the output stream. This
allows an output stream to process its contents a bit at a time, by
maintaining the state of the stream from one call to the next. This
object gives the prior state of the stream on entry, and is updated on
return to contain the new state after processing this string. If this is
omitted or nil, a default initial starting state is used. The function
uses the following properties of the object:

stateobj.flags\_ is an integer with a collection of flag bits giving the
current line state

stateobj.tag\_ is a string containing the text of the tag currently in
progress. If the string ends in the middle of a tag, this will be set on
return to the text of the tag up to the end of the string, so that the
next call can resume processing the tag where the last call left off.

The function makes the following conversions:

\n -\> \<BR\>, or nothing at the start of a line

\b -\> \<BR\> at the start of a line, or \<BR\>\<BR\> within a line

\\ (quoted space) -\> &nbsp; if followed by a space or another quoted
space, or an ordinary space if followed by a non-space character

\t -\> a sequence of &nbsp; characters followed by a space, padding to
the next 8-character tab stop. This can't take into account the font
metrics, since that's determined by the browser, so it should only be
used with a monospaced font.

\\ -\> sets an internal flag to capitalize the next character

\v -\> sets an internal flag to lower-case the next character

\<Q\> ... \</Q\> -\> &ldquo; ... &rdquo; or &lsquo; ... &rsquo;,
depending on the nesting level

\<BR HEIGHT=N\> -\> N \<BR\> tags if at the start of a line, N+1 \<BR\>
tags if within a line

Note that this isn't a general-purpose HTML corrector: it doesn't
correct ill-formed markups or standardize deprecated syntax or
browser-specific syntax. This function is specifically for standardizing
TADS-specific syntax, so that games can use the traditional TADS syntax
with the Web UI.



<span id="specialsToText"></span>

`specialsToText (stateobj?)`

[systype.h](../file/systype.h.html)\[[650](../source/systype.h.html#650)\]



Convert special characters and HTML markups to plain text, as it would
appear if written out through the regular console output writer and
displayed on a plain text terminal. Returns a new string with the
contents of the 'self' string processed as described below. This works
very much like specialsToHtml(), but rather than generating standard
HTML output, we generate plain text output.

'stateobj' has the same meaning asin specialsToHtml().

The function makes the following conversions:

\n -\> \n, or nothing at the start of a line

\b -\> \n at the start of a line, or \n\n within a line

\\ (quoted space) -\> regular space

\\ -\> sets an internal flag to capitalize the next character

\v -\> sets an internal flag to lower-case the next character

\<Q\> ... \</Q\> -\> "..." or '...' depending on the quote nesting level

\<BR HEIGHT=n\> -\> N \n characters at the start of a line, N+1 \n
characters within a line

\<P\> -\> \n at the start of a line, \n\n within a line

\<TAG\> -\> nothing for all other tags

&amp; -\> &

&lt; -\> \<

&gt; -\> \>

&quot; -\> "

&ldquo; and &rdquo; -\> "

&lsquo; and &rsquo; -\> '

&#dddd; -\> Unicode character dddd



<span id="splice"></span>

`splice (idx, del, ins?)`

[systype.h](../file/systype.h.html)\[[517](../source/systype.h.html#517)\]



Splice: delete 'del' characters starting at 'idx', and insert the string
'ins' in their place. 'ins' is optional; if omitted, this simply does
the deletion without inserting anything.



<span id="split"></span>

`split (delim?, limit?)`

[systype.h](../file/systype.h.html)\[[547](../source/systype.h.html#547)\]



Split the string into substrings at the given delimiter, or of a given
fixed length.

'delim' is the delimiter. It can be one of the following:

\- A string or RexPattern, giving the delimiter where we split the
string. We search 'self' for matches to this string or pattern, and
split it at each instance we find, returning a list of the resulting
substrings. For example, 'one,two,three'.split(',') returns the list
\['one', 'two', 'three'\]. The delimiter separates parts, so it's not
part of the returned substrings.

\- An integer, giving a substring length. We split the string into
substrings of this exact length (except that the last element will have
whatever's left over). For example, 'abcdefg'.split(2) returns \['ab',
'cd', 'ef', 'g'\].

If 'delim' is omitted or nil, the default is 1, so we'll split the
string into one-character substrings.

If 'limit' is included, it's an integer giving the maximum number of
elements to return in the result list. If we reach the limit, we'll stop
the search and return the entire rest of the string as the last element
of the result list. If 'limit' is 1, we simply return a list consisting
of the source string, since a limit of one element means that we can't
make any splits at all.



<span id="startsWith"></span>

`startsWith (str)`

[systype.h](../file/systype.h.html)\[[407](../source/systype.h.html#407)\]



determine if we start with the given string



<span id="substr"></span>

`substr (start, len?)`

[systype.h](../file/systype.h.html)\[[364](../source/systype.h.html#364)\]



extract a substring



<span id="toFoldedCase"></span>

`toFoldedCase ( )`

[systype.h](../file/systype.h.html)\[[760](../source/systype.h.html#760)\]



Convert the string to "folded" case. Returns a new string with the
case-folded version of this string.

Folded case is used for eliminating case distinctions in sets of
strings, to allow for case-insensitive comparisons, sorting, etc. This
routine produces the case folding defined in the Unicode character
database; in most cases, the result is the same as converting each
original character to upper case and then converting the result to lower
case. This process not only removes case differences but also normalizes
some variations in the ways certain character sequences are rendered,
such as converting the German ess-zed U+00DF to "ss", and converting
lower-case accented letters that don't have single character upper-case
equivalents to the corresponding series of composition characters (e.g.,
U+01F0, a small 'j' with a caron, turns into U+006A + U+030C, a regular
small 'j' followed by a combining caron character). Without this
normalization, the upper- and lower-case renderings of such characters
wouldn't match.



<span id="toLower"></span>

`toLower ( )`

[systype.h](../file/systype.h.html)\[[370](../source/systype.h.html#370)\]



convert to lower case



<span id="toTitleCase"></span>

`toTitleCase ( )`

[systype.h](../file/systype.h.html)\[[738](../source/systype.h.html#738)\]



Convert each character in the string to title case, according to the
Unicode character database definitions. Returns a new string with the
title-case version of this string.

For most characters, title case is the same as upper case. It differs
from upper case when a single Unicode character represents more than one
printed letter, such as the German sharp S U+00DF, or the various "ff"
and "fi" ligatures. In these cases, the title-case conversion consists
of the upper-case version of the first letter of the ligature followed
by the lower-case versions of the remaining characters. Unicode doesn't
define single-character title-case equivalents of most of the ligatures,
so the result is usually a sequence of the individual characters making
up the ligature. For example, title-casing the 'ffi' ligature character
(U+FB03) produces the three-character sequence 'F', 'f', 'i'.

Note that this routine converts every character in the string to title
case, so it's not by itself a full title formatter - it's simply a
character case converter.



<span id="toUnicode"></span>

`toUnicode (idx?)`

[systype.h](../file/systype.h.html)\[[401](../source/systype.h.html#401)\]



convert to a list of Unicode character codes, or get the Unicode
character code for the single character at the given index



<span id="toUpper"></span>

`toUpper ( )`

[systype.h](../file/systype.h.html)\[[367](../source/systype.h.html#367)\]



convert to upper case



<span id="unpackBytes"></span>

`unpackBytes (format)`

[systype.h](../file/systype.h.html)\[[715](../source/systype.h.html#715)\]



Unpack this string, interpreting the characters in the string as byte
values, and unpacking the bytes according to the format string. Each
character in the string must have a Unicode character number from 0 to
255; if any characters are outside this range, an error is thrown.

This method can be used to unpack a string created with
String.packBytes(). In most cases, using the same format string that was
used to pack the bytes will re-create the original values. This method
can also be convenient for parsing plain text that's arranged into
fixed-width fields.

'format' is the format string describing the packed byte format. Returns
a list consisting of the unpacked values.

See Byte Packing in the System Manual for more details.



<span id="urlDecode"></span>

`urlDecode ( )`

[systype.h](../file/systype.h.html)\[[665](../source/systype.h.html#665)\]



Decode a URL parameter string. This reverses the effect of urlEncode(),
returning a string with the encodings translated back into ordinary
characters. Any sequences that do not form valid UTF-8 characters are
converted to '?'.



<span id="urlEncode"></span>

`urlEncode ( )`

[systype.h](../file/systype.h.html)\[[657](../source/systype.h.html#657)\]



Encode a URL parameter string. Spaces are encoded as "+", and all other
non-alphanumeric characters except - and \_ are encoded as "%xx"
sequences.



<span id="valToSymbol"></span>

`valToSymbol ( )`<span class="rem">OVERRIDDEN</span>

[reflect.t](../file/reflect.t.html)\[[288](../source/reflect.t.html#288)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


