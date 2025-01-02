---
---
<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> String  
<span class="navnp"><a href="framedesc.html" class="nav"><em>Prev:</em> StackFrameDesc</a>
    <a href="strbuf.html" class="nav"><em>Next:</em> StringBuffer</a>    
</span>

</div>

<div class="main">

# String

"String" is a native TADS 3 datatype, but it's also an intrinsic class.
Any string value is an instance of the String class, so you can call
methods defined by the class on any string value.

## Value semantics

Strings have "value semantics". This means that a given string value's
text is immutable: once you've created a string, the text within that
string never changes. All of the methods and operators that might appear
to change the value of a string actually create a new string with the
modified value, leaving the original value intact. For example, consider
this code:

<div class="code">

    local x = 'foo';
    local y = x;
    x += 'bar';

</div>

Superficially, it appears that the last line changes the string in
<span class="code">x</span>. In fact, the original string is not
changed - if we display the value of <span class="code">y</span>, we'll
see that <span class="code">y</span> still contains
<span class="code">'foo'</span>. When the the last line above is
executed, it creates a new string to hold the concatenated value, and
assigns the result to <span class="code">x</span>.

Value semantics make it very easy to work with strings, because you
don't have to worry about whether a function might modify a string you
pass to it: this can never happen, because a given string's text is
constant.

## Operators

The addition operator <span class="code">+</span> can be used to
concatenate two strings yielding a string that consists of the contents
of the right-hand string appended to the end of the contents of the
left-hand string.

<div class="code">

    local x = 'foo';
    local y = 'bar';
    local z = x + y;  // z = 'foobar'

</div>

You can use the <span class="code">+=</span> operator to replace the
left-hand variable with the resulting string.

<div class="code">

    local x = 'foo';
    local y = 'bar';
    x += y;  // x = 'foobar'

</div>

## String vs StringBuffer

There's a related class called [StringBuffer](strbuf.html), that's
designed especially for complex string construction tasks. StringBuffer
objects can be edited in place, meaning that you can change the text
contained in a StringBuffer object, rather than creating a new object
for every modification. Refer to the StringBuffer documentation for more
information.

## String methods

<span id="compareTo"></span>

<span class="code">compareTo(*str*)</span>

<div class="fdef">

Compares this string to the second string *str*, returning an integer
less than 0 if this string sorts before *str*, 0 if the two strings are
identical, or greater than 0 if this string sorts after *str*.

The comparison uses the Unicode character numbers as the collation
order. As a result, strings using accented accented characters probably
won't be sorted in the correct linguistic order for a given language.
Different languages use different collation rules, which usually don't
match the Unicode character order.

</div>

<span id="compareIgnoreCase"></span>

<span class="code">compareIgnoreCase(*str*)</span>

<div class="fdef">

Compares this string to the second string *str*, ignoring differences in
upper/lower case. For example, "A" and "a" are treated as equal. Returns
an integer less than 0 if this string sorts before *str*, 0 if the two
strings are identical, or greater than 0 if this string sorts after
*str*.

The method compares the case-folded versions of the strings. See
[toFoldedCase()](#toFoldedCase) for more on case folding. Case folding
is designed to erase case differences by converting both strings to a
canonical lower-case format.

The comparison uses the Unicode character numbers of the case-folded
characters as the collation order. This means that strings using
accented accented characters probably won't be sorted in the correct
linguistic order for a given language. Different languages use different
collation rules, which usually don't match the Unicode character order.

</div>

<span id="digestMD5"></span>

<span class="code">digestMD5()</span>

<div class="fdef">

Calculates the 128-bit RSA MD5 message digest of the string, returning a
string of 32 hex digits representing the digest value.

MD5 was originally designed for cryptographic applications, but it has
some known weaknesses and is no longer considered secure. Even so, it's
still considered a good checksum, and it's widely used for message
integrity checking. It's also part of several Internet standards (e.g.,
HTTP digest authentication). In an Interactive Fiction context,
[Babel](http://babel.ifarchive.org/) uses MD5 to generate IFIDs for
older games. If you're looking for a secure hash, consider SHA-2 (see
[<span class="code">sha256()</span>](#sha256)) instead of MD5.

</div>

<span id="endsWith"></span>

<span class="code">endsWith(*str*)</span>

<div class="fdef">

Returns <span class="code">true</span> if this string ends with *str*,
<span class="code">nil</span> if not. This string ends with *str* if
this string is at least as long as *str*, and the last
<span class="code">str.length()</span> characters of this string are the
same as the characters of *str*.

</div>

<span id="find"></span>

<span class="code">find(*target*, *index*?)</span>

<div class="fdef">

Finds the substring or regular expression *target* within this string.

If the search is successful, the method returns the character index
where the match starts (the first character of the string is at index
1). If the target isn't found, the method returns
<span class="code">nil</span>. If *target* is a regular expression, the
method has the side effect of updating the
[rexGroup()](tadsgen.html#rexGroup) registers to reflect the search
results.

*target* can be a string value or a [RexPattern](rexpat.html) object. If
it's a string, <span class="code">find()</span> simply searches for the
literal text of the string. If *target* is a RexPattern, the method
searches for a match to the regular expression pattern.

For regular expression searches, you can get more detailed information
on the match result using [rexGroup()](tadsgen.html#rexGroup). You can
alternatively use the [rexSearch()](tadsgen.html#rexSearch) function,
which directly returns more information on the match.

If *index* is given, it sets the starting index in the subject string
for the search; an *index* of 1 means that the search starts at the
first character. If the index value is omitted, the default value is 1.
The starting index value can be used to search for another occurrence of
the same target following a previous search, for example. A negative
value for *index* is an index from the end of the string: -1 is the last
character, -2 the second to last, etc. Note that the return value is
still an index from the start of the whole string, regardless of the
starting index value. For regular expression searches, the start of the
string for the purposes of "^" and other special operators is still the
start of the overall string, regardless of the *index* value.

Examples:

<div class="code">

    'abcdef'.find('cd') yields 3
    'abcdef'.find('g') yields nil
    'abcdef'.find('c', 3) yields 3
    'abcdef'.find('c', 4) yields nil
    'abcabcabc'.find('c', 4) yields 6
    'abcabcabc'.find('c', 7) yields 9
    'abcdef123456'.find(R'%d+') yields 7

</div>

</div>

<span id="findAll"></span>

<span class="code">findAll(*target*, *func*?)</span>

<div class="fdef">

Searches the subject string (self) for all occurrences of a given
substring or regular expression pattern, returning a list of matches.

On success, the return value is a list of the matches. If *func* is
omitted, each element is a string with the text of the corresponding
match. If *func* is provided, each element is the return value of *func*
for the corresponding match.

*target* can be a string or a [RexPattern](rexpat.html) object. If it's a
string, the function searches for exact matches to the string. If it's a
pattern, the function searches for matches to the regular expression.

*func* is an optional callback function. If provided, the method calls
*func* for each match, and uses the value returned by *func* as the
match's entry in the return list. *func* is invoked as
<span class="code">func(*match*, *index*, *group1*...)</span>, where
*match* is a string with the text of the match, *index* is the character
index in the subject string of the start of the match, and *group1* is
the text of the first parenthesized group in the regular expression, if
there is one. Arguments are added for any additional parenthesized
groups. All of the arguments are optional; the method calls *func* with
as many arguments as its actually expects, so if you don't need to know
the index or group values, you can simply omit the parameter variable
for them. If *func* requires more group parameters than there are actual
matching groups, the method passes <span class="code">nil</span> values
for the extra group parameters.

Examples:

<div class="code">

    'one two three'.findAll(R'%w+') yields ['one', 'two', 'three']
    'one two three'.findAll(R'%w+', {m: m.toUpper()} yields ['ONE', 'TWO', 'THREE']
    'one two three'.findAll(R'%w+', {m, idx: idx}) yields [1, 5, 9]
    'one two three'.findAll(R'(%w)%w*', {m, i, g1: g1} yields ['o', 'w', 't']
    'one two three'.findAll(R'(%w)%w*', {m, i, g1, g2: g2} yields [nil, nil, nil]

</div>

</div>

<span id="findLast"></span>

<span class="code">findLast(*target*, *index*?)</span>

<div class="fdef">

Searches the subject string (self) for the last (rightmost) match to a
given substring or regular expression pattern. This works like the
[find()](#find) method, but searches backwards, starting at the end of
the string and working towards the beginning.

On success, the return value is an integer giving the character index of
the start of the rightmost match. If no match is found, the result is
<span class="code">nil</span>. If *target* is a regular expression, the
method has the side effect of updating the
[rexGroup()](tadsgen.html#rexGroup) registers to reflect the search
results.

*target* is a string containing the substring to find, or a
[RexPattern](rexpat.html) object with a regular expression to match.

For regular expression searches, you can get more detailed information
on the match result using [rexGroup()](tadsgen.html#rexGroup). You can
alternatively use the [rexSearchLast()](tadsgen.html#rexSearchLast)
function, which directly returns more information on the match.

*index* is the optional starting position for the search. The function
looks for a match before but not including the character at this index.
If *index* is omitted, the default is to search the entire string from
the end. Equivalently, you can set *index* to the length of the string
plus one, to indicate the imaginary character position just after the
end of the string. Specifying 0 for *index* means the same thing. If
*index* is negative, it's an offset from the end of the string: -1 is
the last character, -2 is the second to last, and so on. Note that -1
(or, equivalently, <span class="code">self.length()</span>) means that
you want to search the portion of the string up to but not including the
last character, since the match can't include the starting character.

Examples:

<div class="code">

    'abcdef'.findLast('cd') yields 3
    'abcdef'.findLast('g') yields nil
    'abcabcabc'.find('c') yields 9
    'abcabcabc'.find('c', 0) yields 9
    'abcabcabc'.find('c', 9) yields 6
    'abcabcabc'.find('c', -1) yields 6
    'abc123'.find(R'%d+') yields 4

</div>

For regular expression targets, the
<span class="code">\<FirstBegin\></span> and
<span class="code">\<FirstEnd\></span> modes (see [regular
expressions](regex.html)) work in mirror image compared to ordinary
forward searches. The easiest way to think about this is to picture the
reverse search as a forward search viewed in a mirror. For a reverse
search, <span class="code">\<FirstBegin\></span> means that the match
with its *right* end closest to the starting point is selected as the
winner, while <span class="code">\<FirstEnd\></span> means that the
match with its *left* end closest to the starting point is selected.
Since the search proceeds right to left, closer to the starting point
means further right, at a higher index.

Note that we use the terms right, left, and right-to-left loosely in the
discussion above. In particular, we're ignoring that different languages
and scripts are written on paper in different directions. We're talking
purely about the order of characters in the string, using "left" to mean
towards the beginning of the string and "right" to mean towards the end,
regardless of whether the string contains Roman characters or Arabic
characters or anything else.

</div>

<span id="findReplace"></span>

<span class="code">findReplace(*oldStr*, *newStr*, *flags*?, *index*?,
*limit*?)</span>

<div class="fdef">

Finds one or more instances of the substring *oldStr* within the subject
string (i.e., <span class="code">self</span>), and replaces them with
the new substring *newStr*.

The method returns a new string with the replacements performed. If
*target* is a regular expression, the method also has the side effect of
updating the [rexGroup()](tadsgen.html#rexGroup) registers to reflect the
search results.

*oldStr* is the search string. This can be a string value, in which case
the method searches for the literal text of the string, or a
[RexPattern](rexpat.html) object, in which case the method searches for
matches to the pattern.

*newStr* is the replacement string. Matches to *oldStr* within the
subject string are replaced with this value. *newStr* can be a string
value, in which case the literal text of the string is used as the
replacement text, or it can be a function to invoke to determine the
replacement text ([see below](#findReplaceFuncs)).

If *oldStr* is a RexPattern, <span class="code">%</span> characters in
*newStr* have the same special meaning they have in the replacement text
in the [rexReplace()](tadsgen.html#rexReplace) function:
<span class="code">%1</span> is replaced by the subject string text that
matched the first parenthesized group in the regular expression,
<span class="code">%2</span> by the text matching the second group, and
so on; <span class="code">%\*</span> is replaced by the text matching
the entire regular expression pattern; and <span class="code">%%</span>
is replaced by a single percent sign. When *oldStr* is a string value,
<span class="code">%</span> characters in *newStr* have no special
meaning and are simply used literally as replacement text.

*oldStr* and *newStr* can also be specified as lists; see
[below](#findReplaceLists) for details.

*flags* is optional. If it's missing, the default is
<span class="code">ReplaceAll</span>, to replace all occurrences of the
search string within the subject string. If provided, *flags* is a
bitwise combination (with the <span class="code">\|</span> operator) of
the following flag values:

- <span class="code">ReplaceOnce</span>: replace only the first
  occurrence of the search string. This is ignored if *limit* is
  specified.
- <span class="code">ReplaceAll</span>: replace all occurrences of the
  search string. This is ignored if *limit* is specified.
  <span class="code">ReplaceAll</span> is the default if
  <span class="code">ReplaceOnce</span> isn't specified, and it
  supersedes <span class="code">ReplaceOnce</span> if both are
  specified.
- <span class="code">ReplaceIgnoreCase</span>: ignore case (that is,
  capitalization) when searching for *oldStr*. By default, the search is
  case-sensitive, so capitals can only match capitals and minuscules can
  only match minuscules.
- <span class="code">ReplaceFollowCase</span>: each time a match is
  replaced, change lower-case letters in the replacement text to follow
  the capitalization pattern of the matched text. There are three
  possibilities: if all of the letters in the matched text are capitals,
  all letters in the replacement text are capitalized; if all of the
  letters in the match are lower-case, the replacement text isn't
  changed; if the match has a mix of capitals and lower-case letters,
  the first lower-case letter in the replacement text is capitalized,
  and the rest are left unchanged.
- <span class="code">ReplaceSerial</span>: use the serial replacement
  mode. See [below](#findReplaceLists) for details.

Note that you should never use 0 as the *flags* value. For compatibility
with older versions, 0 has a special meaning equivalent to
<span class="code">ReplaceOnce</span>. If you have no other flags to
specify, always use either <span class="code">ReplaceOnce</span> or
<span class="code">ReplaceAll</span>, or simply omit the *flags*
argument entirely.

If *index* is specified, it gives the starting index in self for the
search. Any matches that start before this starting point will not be
replaced. If *index* is 1, the search starts at the first character;
this is the default if *index* is omitted. A negative value is an index
from the end of the string: -1 is the last character, -2 the second to
last, and so on. Note that a negative index doesn't change the direction
of the search; it still runs left-to-right.

If *limit* is included, it specifies the maximum number of replacements
to perform. This can be <span class="code">nil</span> to indicate that
all matches are to be replaced, or an integer giving the maximum number
of matches to replace. 0 (zero) means that no matches are to be
replaced, in which case the original subject string is returned
unchanged. If a *limit* argument is present, it overrides the
<span class="code">ReplaceAll</span> and
<span class="code">ReplaceOnce</span> flags - those flags are ignored if
*limit* is present. If *limit* is omitted, the limit is taken from the
flags.

**<span id="findReplaceLists"></span>Search lists:** Instead of
searching for just a single search string, you can search for several
strings at once, by using a list as the *oldStr* argument. This will
search for each of the items in the list, and replace each one with the
*newStr* replacement string.

If you supply a list for the search term, you can optionally also supply
a list for the *newStr* replacement value. If you do, each match to an
element of *oldStr* is replaced with the corresponding element of the
*newStr* list - that is, the item at the same list index. If there are
more *oldStr* elements than *newStr* elements, matches to the excess
*oldStr* elements are replaced with empty strings. Excess *newStr*
elements are simply ignored.

If *newStr* isn't a list, it's used as the replacement for all of the
search strings. Note that this is different from passing a one-element
list for *newStr*, because in that case it would only specify a
replacement for *oldStr*\[1\], and the remaining *oldStr* elements would
all be replaced with empty strings.

Here's an example that replaces each of the special HTML characters with
their markup codes, using a single
<span class="code">findReplace()</span> call:

<div class="code">

    str = str.findReplace(['&', '<', '>'], ['&amp;', '&lt;', '&gt;']);

</div>

When you use a list of search terms, there are two modes for iterating
through the list. The default is "parallel" mode. In this mode,
<span class="code">findReplace()</span> starts by searching for all of
the search terms at once. It then replaces the single leftmost match
with its corresponding replacement text. (If two of the search strings
match at the same position, the one at the lower *oldStr* index takes
precedence.) If <span class="code">ReplaceOnce</span> was specified,
we're done. Otherwise, <span class="code">findReplace()</span> next
repeats the search in the *remainder* of the string, after (to the right
of) that first replacement, again searching for all of the terms, and
again replacing the single leftmost match among them. This repeats until
there are no more matches.

The other mode is "serial" mode, which you select by including
<span class="code">ReplaceSerial</span> in the flags. In this mode,
<span class="code">findReplace()</span> starts by searching *only* for
the first *oldStr* element. It replaces every match for the first term,
or just the first match if <span class="code">ReplaceOnce</span> is
specified. If a match was found and
<span class="code">ReplaceOnce</span> was specified, we're done.
Otherwise, we start over with the *updated* string - containing all
replacements for the first term - and search this new string for the
*second* search term. We once again replace all occurrences of this
term. We repeat this process for each additional term in the *oldStr*
list.

The key difference between the parallel and serial modes is that serial
mode rescans each replaced result string for each term. This means that
replacement text from the first search term is subject to further
replacement by the second search term, and that's subject to yet more
replacement by the third term, and so on. In contrast, parallel mode
never rescans replacement text, so once a replacement is made, it won't
be further modified.

<span id="findReplaceFuncs"></span>**Replacement function:** The
replacement value *newStr* is normally given as a literal string to
substitute for each occurrence of the search string. For more
flexibility, though, you can instead provide a function, which
<span class="code">findReplace()</span> calls for each match to
determine the replacement text for that match. This allows you to vary
the replacement text according to the exact text of the match (which can
vary if you're using the <span class="code">ReplaceIgnoreCase</span>
flag or you're using a list of search strings), the position of the
match within the subject string, or whatever other conditions you
choose.

The callback function can be a regular or anonymous function. It's
called like this, once for each match found in the subject string:

<div class="code">

    newStrFunc(match, index, orig);

</div>

*match* is the text actually matched in the subject string. *index* is
the character index within the string of the start of the match (the
first character is at index 1, as usual). *orig* is the entire original
subject string.

You can omit one or more of the parameters when you define the callback
function, because <span class="code">findReplace</span> will only supply
as many arguments as the function actually wants. The arguments are
always in the same order, though - the names don't matter, just the
order. This means that if you provide a callback that only takes one
argument, it gets the match string value; with two arguments, they'll be
assigned the match string and match index, respectively.

The function must return a string value giving the replacement text (it
can alternatively return <span class="code">nil</span>, which is treated
as an empty string).

If you use a list of search strings and a list of corresponding
replacements, each element of the replacement list can be a separate
function. The replacement list can also be a mix of strings and
functions.

</div>

<span id="htmlify"></span>

<span class="code">htmlify(*flags*?)</span>

<div class="fdef">

Converts HTML markup-significant characters in the string to appropriate
HTML sequences, and returns the resulting string. If the flags argument
is not included, the method acts as though flags has the value 0 (zero).
By default, this method scans the string for the characters
<span class="code">&</span> (ampersand) and <span class="code">\<</span>
(less than), and converts these characters to the sequences
<span class="code">&amp;</span> and <span class="code">&lt;</span>
respectively. This conversion ensures that, when the string is rendered
in HTML mode, the display shows ampersands and less-than signs where
they appeared in the original string's text. In addition, you can
specify a combination (using the bitwise OR operator,
<span class="code">\|</span>) of the following flags to perform
additional conversions:

- <span class="code">HtmlifyTranslateSpaces</span>: converts each space
  character after the first space in a run of multiple spaces to the
  sequence <span class="code">&nbsp;</span> (the HTML non-breaking space
  character). This ensure that a run of multiple spaces will be rendered
  visually with the same number of spaces as were in the original
  string. Without this flag, a run of spaces will appear visually as a
  single space when rendered as HTML, because HTML renderers combine
  adjacent spaces in HTML source (each run of multiple spaces is
  displayed as a single space). The method leaves the first space in a
  run of whitespace as an ordinary space character so that the HTML
  renderer can still break the line for word-wrapping purposes at the
  space.
- <span class="code">HtmlifyTranslateTabs</span>: converts each tab
  character (<span class="code">\t</span>) in the string to the sequence
  <span class="code">\<tab\></span>.
- <span class="code">HtmlifyTranslateNewlines</span>: converts each
  newline character (<span class="code">\n</span>) in the string to the
  sequence <span class="code">\<br\></span>.
- <span class="code">HtmlifyTranslateWhitespace</span>: this is simply a
  combination of <span class="code">HtmlifyTranslateSpaces</span>,
  <span class="code">HtmlifyTranslateTabs</span>, and
  <span class="code">HtmlifyTranslateNewlines</span>.

This method is useful if you obtain a string from an external source,
such as from the user (via the <span class="code">inputLine()</span>
function, for example) or from a text file, and you then want to display
the string in HTML mode. Without conversions, any markup-significant
characters in the string might not be displayed properly, since the HTML
parser would attempt to interpret the characters as HTML formatting
codes. You can use this method to ensure that a string obtained
externally is displayed verbatim in HTML mode.

</div>

<span id="length"></span>

<span class="code">length()</span>

<div class="fdef">

Returns the number of characters in the string.

</div>

<span class="code">mapToByteArray(*charset*?)</span>

<div class="fdef">

Creates a [ByteArray](bytearr.h) object based on the contents of the
string. This is equivalent to calling <span class="code">new
ByteArray()</span> with this string and character set as arguments.

If a *charset* value is included and isn't
<span class="code">nil</span>, it must be either a
[CharacterSet](charset.html) object, or a string giving the name of a
character set. The method maps the string to bytes using the given
character set, and creates a new ByteArray object with the mapped bytes
as the contents. The usual default/missing character defined by the
mapping is substituted for any unmappable characters.

If the character set represented by *charset* is unknown (i.e,. there's
no mapping available for the character set in the run-time TADS
installation), an <span class="code">UnknownCharSetException</span> is
thrown. You can determine whether the the character set is known using
the [isMappingKnown()](charset.html#isMappingKnown) method on the
CharacterSet object.

If *charset* is omitted or <span class="code">nil</span>, the method
creates a ByteArray with one byte per character of the string, using the
Unicode character code of each character as the byte value. Since a byte
can only hold values from 0 to 255, a numeric overflow error will be
thrown if the string contains any characters outside of this range.

</div>

<span id="match"></span>

<span class="code">match(*target*, *index*?)</span>

<div class="fdef">

Checks for a match to the given *target* value, at the given starting
position in the subject string (self).

If *target* is a string, this method tries to match the literal text of
the string; if *target* is a [RexPattern](rexpat.html) object, the method
tries to match the regular expression.

If *index* is specified, it's an integer giving the starting position to
check for the match. 1 is the first character in the string; a negative
index is from the end of the string (-1 is the last character, -2 is the
second to last, and so on). If *index* is omitted, the method checks for
a match at the start of the string (as though *index* were 1).

If *target* matches, the return value is an integer giving the length of
the match. When *target* is a string, a successful match simply returns
the length of *target*, since the entire target string must match
exactly. When *target* is a RexPattern, a successful match returns the
number of characters of the subject string that the regular expression
matches. The entire regular expression must match, but it need not match
the entire subject string. (If you want to explicitly match the entire
subject string, you can end the pattern with '\$', since that will allow
the pattern to match only if the '\$' symbol lines up with the end of
the subject string after the match.)

If the string doesn't match *target*, the return value is
<span class="code">nil</span>. Note that it's possible for a successful
match to return 0: if *target* is an empty string, that will match any
subject with a length of zero; and some regular expression patterns can
match zero characters successfully (e.g., 'a\*', which matches zero or
more 'a' characters).

This method is similar to [find()](#find). The difference between the
two is that match() only looks for a match at the specified starting
position, without searching any further in the string, whereas find()
searches for a match at each character of the string from the starting
point onwards, until either finding a match or exhausting the string.

</div>

<span id="packBytes"></span>

<span class="code">packBytes(*format*, ...)</span>

<div class="fdef">

Packs a list of values into bytes, creating a new String object
representing the byte values. This is a static method that you call
directly on the String class. For example:

<div class="code">

    local s = String.packBytes('s*', 1, 2, 3);

</div>

*format* is a format string describing the packed formats for the
values. The remaining arguments are the values to be packed.

The return value is a new String object containing the packed bytes. The
bytes are represented as characters, so each character in the new string
will have a Unicode value from 0 to 255.

There are a couple of uses for packing bytes into strings. One is when
you want to create a packed byte list that will eventually find its way
into a file or other external object, but you need to create a temporary
version in memory first. Packing the bytes into a string can be a
convenient way to accomplish this. Another potential use is for
generating text for a structured text format, such as for spreadsheet
input. The byte packer makes it easy to generate formats with
fixed-width text fields.

Note that the string returned might not be particularly human-readable,
since many format codes generate binary byte values that will look like
random gibberish if displayed.

See [Byte Packing](pack.html) for more information.

</div>

<span id="sha256"></span>

<span class="code">sha256()</span>

<div class="fdef">

Calculates the 256-bit SHA-2 (Secure Hash Algorithm 2) hash of the
string, returning a string of 64 hex digits representing the hash value.
SHA-2 is a one-way hash function designed for cryptographic
applications. It computes a fixed-length hash value that's designed to
be irreversible and effectively unique for any given input.

Secure hashes are useful when you want to store or transmit information
in such a way that another party can prove it knows the original
information, without actually revealing the information. For example,
passwords are often stored in a hashed format, because this prevents a
third party who steals the password file from being able to recover the
original password values, while still allowing password entries to be
verified, by computing the matching hash value on an entered password.

</div>

<span id="specialsToHtml"></span>

<span class="code">specialsToHtml(*stateObject*?)</span>

<div class="fdef">

Returns a new string with any special TADS formatting characters in the
"self" string translated to their standard HTML equivalents. The result
string can then be used as HTML source code in a standard Web browser to
achieve the same display effect as the original string when displayed in
a TADS interpreter.

The main purpose of this function is to make it easier to port games
between the traditional TADS user interface and the Web UI. The TADS
formatting characters, such as '\n' and '\b', are specific to TADS -
they can't be used directly in a standard Web browser. The Web UI uses a
standard browser as the user interface, though, so to write a game for
the Web UI, you must either avoid the TADS formatting codes and use only
standard HTML, or translate strings containing the TADS codes into
standard HTML. The former option would require a lot of work for an
existing game; it's inconvenient even for new work, since most TADS
authors are in the habit of using the TADS codes, and the TADS codes are
more concise than the HTML equivalents. This function makes it easy to
implement the translation approach, allowing you to continue to use TADS
formatting codes even with the Web UI.

Note that game authors won't generally have to call this function
directly, because the Web UI library will do this automatically in most
cases. You should only need this function if you're writing a library
extension or creating a custom Web UI window type.

*stateObject* is an optional object, of class SpecialsToHtml. This keeps
track of the state of the output stream from one call to the next. Many
of the TADS formatting codes are context-sensitive, so when you're
writing a series of strings to the display, it's important keep track of
the global context across strings. You should use a separate object for
each window or output stream.

If you omit the state object or pass <span class="code">nil</span>, the
function will treat each string as the start of a new stream, with no
context from past calls to the function. To reset the stream context
(for example, after clearing the window), call its
<span class="code">resetState()</span> method.

The function performs the following translations:

- <span class="code">\n</span> is translated to
  <span class="code">\<BR\></span> when it occurs within a line of text,
  or nothing if it occurs at the start of a new line (ensuring that it
  ends a line, but doesn't produce any blank lines).
- <span class="code">\b</span> is translated to
  <span class="code">\<BR\></span> if it occurs at the start of a new
  line, or <span class="code">\<BR\>\<BR\></span> if it occurs within a
  line of text (ensuring that it always produces one blank line).
- <span class="code">\\</span> is removed, but causes the next
  non-markup character to be converted to upper-case.
- <span class="code">\v</span> is removed, but causes the next
  non-markup character to be converted to lower-case.
- <span class="code">\\</span>  (quoted space) is converted to
  <span class="code">&nbsp;</span> if it's followed by another quoted
  space, or to a regular space if followed by anything else. This
  reproduces the standard TADS quoted space behavior: a quoted space
  doesn't combine with adjacent quoted spaces, but does allow a line
  break. Any regular space characters adjacent to the quoted space in
  the source string are removed.
- <span class="code">\t</span> is converted to a series of
  <span class="code">&nbsp;</span> characters followed by one regular
  space, sufficient to pad the current line to the next multiple of four
  characters in length. This is a very rough approximation of the way
  <span class="code">\t</span> works in the console UI, but note how the
  algorithm merely counts *characters*, and doesn't take into account
  font metrics.
  (Because this doesn't take into account font metrics, it's mostly only
  useful with monospaced fonts. But if you're using the Web UI, you have
  access to the much greater capabilities of full HTML layout, so you
  shouldn't have much use for tabs anyway.)
- <span class="code">\<Q\></span>...<span class="code">\</Q\></span> tag
  sequences are converted to <span class="code">&ldquo;...&rdquo;</span>
  and <span class="code">&lsquo;...&rsquo;</span> sequences, alternating
  at each nesting level, with double quotes at the outermost level.
- <span class="code">\<BR HEIGHT=N\></span> tags are converted to a
  series of *N* <span class="code">\<BR\></span> tags when used at the
  start of a line, or *N*+1 <span class="code">\<BR\></span> tags when
  used within a line of text.
- <span class="code">\<P\></span>, <span class="code">\<DIV\></span>,
  <span class="code">\<CENTER\></span>,
  <span class="code">\<TABLE\></span>, <span class="code">\<TD\></span>,
  <span class="code">\<TH\></span>, and
  <span class="code">\<CAPTION\></span> tags (both open and close tags)
  are left exactly as given, but are recognized as line breaks for the
  purposes of translating <span class="code">\n</span>,
  <span class="code">\b</span>, and <span class="code">\<BR
  HEIGHT=N\></span>.

The *stateObject* value is for internal use within the function, and you
shouldn't have to access its properties directly. For reference, though,
they are:

- <span class="code">flags\_</span> is an integer containing a number of
  bit fields:
  - 0x0001 - on (non-zero) if the stream is in the midst of a line of
    text, off (zero) at the start of a new line
  - 0x0002 - on if the capitalization flag ('\\') is pending
  - 0x0004 - on if the lower-case flag ('\v') is pending
  - 0x0008 - on if an HTML tag is in progress
  - 0x0010 - on if within a double-quoted attribute value in an HTML tag
  - 0x0020 - on if within a single-quoted attribute value in an HTML tag
  - 0x0040 - on if the last character was an ordinary space
  - 0x0080 - on if the last character was a quoted space ('\\ ')
  - 0x0100 - on if the \<Q\> tag quote nesting level is odd, off if the
    level is even (at even levels, double quotes are used; at odd
    levels, single quotes are used)
  - 0x0200 - on if an HTML entity (& sequence) is in progress (only used
    with specialsToText())
  - 0x3000 - the current tab stop column (shift this value right 12 bits
    to get the integer value: that is, compute
    <span class="code">((obj.flags\_ & 0x3000) \>\> 12)</span>. This is
    the number of characters in the line since the last multiple of 4
    columns.
- <span class="code">tag\_</span> is a string containing the text of the
  tag in progress. When a string ends in mid-tag, this contains the
  fragment of the tag up to the end of the string, so that the next call
  can resume parsing the tag where the last call left off.

</div>

<span id="specialsToText"></span>

<span class="code">specialsToText(*stateObject*?)</span>

<div class="fdef">

Returns a new string with any special TADS formatting characters in the
"self" string translated to their plain text equivalents. This function
is similar to specialsToHtml(), but converts the string to plain text
rather than HTML. The conversion is designed to replicate the effect of
displaying the string through the TADS console output mechanism, as it
would appear on a character-mode terminal.

*stateObject* has the same meaning as in specialsToHtml().

This function performs the following conversions:

- <span class="code">\n</span> is translated to
  <span class="code">\n</span> when it occurs within a line of text, or
  nothing if it occurs at the start of a new line (ensuring that it ends
  a line, but doesn't produce any blank lines).
- <span class="code">\b</span> is translated to
  <span class="code">\n</span> if it occurs at the start of a new line,
  or <span class="code">\n\n</span> if it occurs within a line of text
  (ensuring that it always produces one blank line).
- <span class="code">\\</span> is removed, but causes the next
  non-markup character to be converted to upper-case.
- <span class="code">\v</span> is removed, but causes the next
  non-markup character to be converted to lower-case.
- <span class="code">\\</span>  (quoted space) is converted to a regular
  space.
- <span class="code">\<Q\></span>...<span class="code">\</Q\></span> tag
  sequences are converted to <span class="code">"..."</span> and
  <span class="code">'...'</span> sequences, alternating at each nesting
  level, with double quotes at the outermost level.
- <span class="code">\<BR HEIGHT=N\></span> tags are converted to a
  series of *N* <span class="code">\n</span> characters when used at the
  start of a line, or *N*+1 <span class="code">\n</span> characters when
  used within a line of text.
- <span class="code">\<P\></span> is converted to
  <span class="code">\n</span> if it appears at the start of a line, or
  <span class="code">\n\n</span> within a line.
- <span class="code">\<DIV\></span>,
  <span class="code">\<CENTER\></span>,
  <span class="code">\<TABLE\></span>, <span class="code">\<TD\></span>,
  <span class="code">\<TH\></span>, and
  <span class="code">\<CAPTION\></span> tags (both open and close tags)
  are converted to <span class="code">\n</span>.
- <span class="code">\<Tag\></span> for any tag not mentioned above is
  simply stripped out.
- <span class="code">&nbsp;</span> is converted to a space.
- <span class="code">&gt;</span> is converted to \>.
- <span class="code">&lt;</span> is converted to \<.
- <span class="code">&amp;</span> is converted to &.
- <span class="code">&quot;</span>, <span class="code">&ldquo;</span>,
  and <span class="code">&rdquo;</span> are converted to " (a plain
  double-quote).
- <span class="code">&lsquo;</span> and
  <span class="code">&rsquo;</span> are converted to ' (a plain
  single-quote).
- <span class="code">&dddd;</span> (where the *d*s are digits) is
  converted to the Unicode character with value *dddd*.

</div>

<span id="splice"></span>

<span class="code">splice(*index*, *deleteLength*,
*insertString*?)</span>

<div class="fdef">

Returns a new string consisting of the original text of this string with
the following two edits: first, the *deleteLength* characters starting
at index *index* are deleted; second, the string *insertString* is
inserted in their place. The *insertString* argument is optional; if
omitted, only the deletion is performed. If you only want to insert new
text, simply pass 0 for *deleteLength*.

This function's effect can be achieved by concatenating together
substrings of the original string, but
<span class="code">splice()</span> is more concise and somewhat clearer.
It's also a little more efficient, since it bypasses the need to create
the two intermediate substrings.

</div>

<span id="split"></span>

<span class="code">split(*delim*?, *limit*?)</span>

<div class="fdef">

Splits a string into substrings defined by the given delimiter. Returns
a list of the substrings.

*delim* is the delimiter, which can be one of the following:

- A string. <span class="code">split</span> searches for exact matches
  to this substring within the subject string, and splits the string at
  each instance.
- A [RexPattern](rexpat.html) object. The method searches for matches to
  the regular expression, and splits the string at each match found.
- An integer, which must be at least 1. The method splits the string
  into substrings of exactly this length (except that the last substring
  in the list might be shorter, since it'll have whatever's left over at
  the end).

If *delim* is omitted or <span class="code">nil</span>, the default is 1
(i.e., split the string into one-character substrings).

*limit* is an optional integer giving the maximum number of elements to
return in the result list. When the method reaches this limit, it stops
searching and returns the remainder of the string after the last split
as the final element of the list. If *limit* is 1, no splits are
possible, so the result is simply a single-element list containing the
entire original string. If *limit* is omitted or
<span class="code">nil</span>, the method splits the string at every
instance of the delimiter without a limit.

The delimiter string or pattern **isn't** included in the result list.

Examples:

<span class="code">'one,two,three'.split(',')</span> returns
<span class="code">\['one', 'two', 'three'\]</span>  
<span class="code">'one,two, three, four'.split(R',\<space\>\*')</span>
returns <span class="code">\['one', 'two', 'three', 'four'\]</span>  
<span class="code">'one,two,three'.split(',', 2)</span> returns
<span class="code">\['one', 'two,three'\]</span>  
<span class="code">'abcdefghi'.split(2)</span> returns
<span class="code">\['ab', 'cd', 'ef', 'gh', 'i'\]</span>

</div>

<span class="code">startsWith(*str*)</span>

<div class="fdef">

Returns true if this string starts with *str*,
<span class="code">nil</span> if not. This string starts with *str* if
this string is at least as long as *str*, and the first
<span class="code">str.length()</span> characters match the characters
of *str*.

</div>

<span class="code">substr(*start*, *length*?)</span>

<div class="fdef">

Returns a new string consisting of a substring of this string. The
substring starts at character index *start* (the first character in the
string is at index 1). If *length* is specified, the result string is at
most *length* characters long; if *length* is not specified, the result
runs to the end of the source string.

If *start* is negative, it indicates an offset from the end of the
string: -1 indicates that the substring is to start at the last
character, -2 at the second-to-last, and so on.

If *length* is negative, it indicates the number of characters to
*discard* from the end of the string. With a *length* of -1, the result
is the whole rest of the string starting at *start* minus the last
character; with -2, it's the rest after *start* minus the last 2
characters; and so on.

Examples:

<div class="code">

    'abcdef'.substr(3) yields 'cdef'
    'abcdef'.substr(3, 2) yields 'cd'
    'abcdefghi'.substr(-3) yields 'ghi'
    'abcdefghi'.substr(-3, 2) yields 'gh'
    'abcdefghi'.substr(1, -1) yields 'abcdefgh'
    'abcdefghi'.substr(2, -2) yields 'bcdefg'
    'abcdefghi'.substr(4, -2) yields 'defg'
    'abcdefghi'.substr(4, -4) yields 'de'
    'abcdefghi'.substr(-4, -2) yields 'fg'

</div>

</div>

<span id="toFoldedCase"></span>

<span class="code">toFoldedCase()</span>

<div class="fdef">

Returns a new string consisting of the characters of the original string
converted to "folded" case, as defined in the Unicode character
database. Folded case is designed to erase case differences between
strings, so that two or more strings can be matched or sorted without
regard to case differences.

The case folding of each character is defined by the Unicode character
tables, but the result is usually the same as converting the character
to upper case and then to lower case. For most characters, this is the
same as simply converting to lower case, but it differs for a few cases
where the upper-case mapping of a lower-case character results in more
than one character. For example, the German sharp S, ß, converts to
upper case as 'SS', so its case folding is lower case 'ss'. This allows
the strings 'WEISS' and 'weiß' to match when case-folded, for example.
There are a number of other ligatures and accented characters that
undergo similar expansions when case-folded.

</div>

<span id="toLower"></span>

<span class="code">toLower()</span>

<div class="fdef">

Returns a new string consisting of the characters of the original string
converted to lower-case. Only alphabetic characters are affected; other
characters are copied to the new string unchanged. The conversion uses
the case conversions specified in the Unicode character database, so
accented and non-Roman alphabetic characters are properly converted.

</div>

<span id="toTitleCase"></span>

<span class="code">toTitleCase()</span>

<div class="fdef">

Returns a new string consisting of the characters of the original string
converted to title case. Title case is the same as upper case for most
characters. It differs for characters that represent multiple visual
characters with a single Unicode character unit, such as ligatures. The
title case conversion of a ligature consists of the first character of
the ligature in upper case and the rest in lower case. For example, the
"ffi" ligature, U+FB03, converts to title case as the letters F, f, i
(capital F, small f, small i), and the German sharp S, ß, converts as
Ss.

Note that this routine isn't designed to render a string with the
correct capitalization for a title. This method simply converts each
character individually to title case, without regard to word boundaries.
This is meant to be used as a building block for a full title converter;
you can use this routine to convert the first character of each word to
title case once you identify the word boundaries, identify words that
aren't capitalized, etc.

</div>

<span id="toUnicode"></span>

<span class="code">toUnicode(*idx*?)</span>

<div class="fdef">

Converts one or all of the characters of this string to Unicode
character codes.

If the *idx* argument is provided, it specifies the character index
within the string of the single character to convert (the first
character is at index 1), and the method returns an integer containing
the Unicode code point for the character at that index. A negative value
for *idx* is an index from the end of the string: -1 is the last
character, -2 the second to last, and so on.

If *idx* is omitted, the function returns a list of character codes.
Each element in the list is an integer giving the Unicode code point
value for the corresponding character in the source string. The list has
one element per character in the source string.

This function can be used to decompose a string into its individual
characters, which is sometimes an easier or more efficient way to
manipulate a string. You can convert a list of Unicode code point values
back into a string using the <span class="code">makeString()</span>
function in the [tads-gen](tadsgen.html) function set.

</div>

<span id="toUpper"></span>

<span class="code">toUpper()</span>

<div class="fdef">

Returns a new string consisting of the characters of the original string
converted to upper-case. Only alphabetic characters are affected; other
characters are copied to the new string unchanged. The conversion uses
the case conversions specified in the Unicode character database, so
accented and non-Roman alphabetic characters are properly converted.

</div>

<span class="code">unpackBytes(*format*)</span>

<div class="fdef">

Unpacks the string, treating the string's characters as byte values and
interpreting the bytes according to the format string.

The string must only contain characters with Unicode values from 0 to
255, since the unpacker treats each character as a byte value. If the
unpacker encounters any characters outside this range, it'll throw an
error.

*format* is the format string describing the byte formats of the values
to unpack. The return value is a list containing the unpacked values.

The string to be unpacked can be one that you previously created with
String.packBytes(), but it doesn't have to be. As long as the source
string's characters are all in the 0-255 range, the unpacker will be
able to interpret each character as a byte. For example, you can use
this method to parse plain text strings that use fixed-width fields:

<div class="code">

    local lst = '123456'.unpack('a3 a3');

</div>

This returns the list \['123', '456'\].

See [Byte Packing](pack.html) for more information.

</div>

<span id="urlDecode"></span>

<span class="code">urlDecode()</span>

<div class="fdef">

Translates a URL-encoded string to plaintext, returning a new string
containing the translated text. This reverses the effect of
<span class="code">urlEncode()</span>:

- %xx sequences are converted to the corresponding characters
- \+ is converted to a space character
- everything else is left as-is

In addition, the method converts any multi-byte %xx sequences that form
valid UTF-8 characters into the corresponding characters. For example,
the sequence %C3%A1 represents the character 'á', so
<span class="code">'%C3%A1'.urlDecode()</span> returns
<span class="code">'á'</span>. Any %xx sequence that doesn't form a
valid UTF-8 character is converted to '?'.

</div>

<span id="urlEncode"></span>

<span class="code">urlEncode()</span>

<div class="fdef">

Encodes a string for use in a URL parameter value, returning a new
string containing the encoded text. This function performs the following
substitutions:

- Plain ASCII letters, digits, '-', and '\_' characters are left
  unchanged
- Space characters are converted to '+'
- Other characters are converted to their "%xx" representations

The "%xx" representation encodes a special character using its
hexadecimal ASCII or Unicode byte value. For example, a comma "," is
encoded as "%2C". Characters outside of the plain ASCII range (\u0000 to
\u007F) are encoded using the multi-byte UTF-8 representation. For
example, 'á' is encoded as '%C3%A1'.

Note that this method is appropriate for encoding *components* of URL
strings, not *entire* URL strings. Applying this method to an entire URL
would encode all of the scheme and path characters (such as the ":" and
"//" in the "http://" prefix), which would make the string unusable as a
URL. This method is intended only for encoding the building blocks of
URL strings, such as the value portion of a "?name=value" query
parameter.

</div>

</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> String  
<span class="navnp"><a href="framedesc.html" class="nav"><em>Prev:</em> StackFrameDesc</a>
    <a href="strbuf.html" class="nav"><em>Next:</em> StringBuffer</a>    
</span>

</div>
