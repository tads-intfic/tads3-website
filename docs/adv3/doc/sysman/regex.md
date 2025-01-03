---
layout: docs
---


<img src="topbar.jpg" data-border="0" />
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> Regular
Expressions  
<span class="navnp"><a href="tadsgen.html" class="nav"><em>Prev:</em> tads-gen Function
Set</a>    
<a href="tadsio.html" class="nav"><em>Next:</em> tads-io Function Set</a>
    </span>
# Regular Expressions

TADS provides a powerful string processing feature known as regular
expressions. A regular expression is a string matching pattern that's a
little bit like a "wildcard" string often used in file system commands,
but much more powerful.

If you've used other languages with regular expressions, you'll probably
find the TADS implementation very similar to what you're used to. Modern
regular expression systems have converged on a *mostly* standard syntax
that grew out of the Unix "grep" language. There's a core of about 80%
of the syntax that's identical in most modern systems, TADS included,
with the rest varying slightly (or sometimes not so slightly) from one
implementation to the next. If you're familiar with Perl or Javascript,
the TADS syntax will be immediately familiar.

The table below is a quick-reference summary of all of the TADS regular
expression syntax elements. If you're already experienced with regular
expressions from other languages, you might want to scan the table to
note where the TADS syntax differs from what you're used to.

After the table, there's a tutorial and detailed reference, covering all
of the TADS regular expression features. It tries to explain the
concepts involved, so that it can serve as a good introduction for
regular expression novices. For more experienced users, you'll also find
details of the TADS implementation and syntax idiosyncrasies.

For more information on the specific functions and objects where regular
expressions are used, refer to [RexPattern](rexpat.html) intrinsic class,
which stores compiled patterns, and the specific [regular expression
functions](tadsgen.html), `rexMatch()`,
`rexSearch()`,
`rexReplace()`, and
`rexGroup()`.

You can define static RexPattern objects using the regular expression
literal syntax:

```
    local r = R'%w+';
```

See [regular expression literals](rexpat.html#rexlit) in the RexPattern
section for details.

## TADS Regular Expression Quick Reference

`\|`

[Alternation](#alternation) operator

`( )`

[Grouping](#grouping) operator

`+`

[Repeat](#closures) preceding expression one or more times

`+?`

[Repeat](#closures) expression one or more times, taking [shortest
match](#shortestMatch) when ambiguous

`\*`

[Repeat](#closures) preceding expression zero or more times

`\*?`

[Repeat](#closures) zero or more times, taking [shortest
match](#shortestMatch) when ambiguous

`?`

[Repeat](#closures) preceding expression zero or one times

`??`

[Repeat](#closures) zero or one times, taking [shorter
match](#shortestMatch) when ambiguous

` {n}`

Match exactly n [repetitions](#repetition) of the preceding expression

` {n,m}`

Match at least n and at most m [repetitions](#repetition) of the
preceding expression

` {n,}`

Match at least n [repetitions](#repetition) of the preceding expression

` { }?`

Match [repetitions](#repetition), taking [shortest
match](#shortestMatch) when ambiguous

`.`

Match [any single character](#wildcards)

`^`

Match only at [beginning of string](#startOfString)

`\$`

Match only at [end of string](#endOfString)

`\[ \]`

[Character range](#wildcards)

`\[^ \]`

Exclusive [character range](#wildcards)

`\<Alpha\>`

Any single alphabetic character ([character class](#classes))

`\<Upper\>`

Any single upper-case alphabetic character ([character class](#classes))

`\<Lower\>`

Any single lower-case alphabetic character ([character class](#classes))

`\<Digit\>`

Any single digit character ([character class](#classes))

`\<AlphaNum\>`

Any single alphabetic or digit character ([character class](#classes))

`\<Space\>`

Any single space character ([character class](#classes))

`\<Punct\>`

Any single punctuation mark character ([character class](#classes))

`\<Newline\>`

Any single newline character: carriage return (u000D), line feed
(u000A), blank line '\b' (u000B), Unicode line separator (u2028),
Unicode paragraph separator (u2029) ([character class](#classes))

`\<x\>`

The literal character "x" ([character class](#classes))

`\<a-z\>`

Any character in the range a-z (equivalent to \[a-z\]) ([character
class](#classes))

`\<x\|y\|z\>`

"x", "y", or "z" (equivalent to \[xyz\]) ([character class](#classes))

`\<a-f\|w-z\>`

Any character in "a" through "f" or "w" through "z" (equivalent to
\[a-fw-z\] ([character class](#classes))

`\<Digit\|Upper\>`

Any character matching `\<Digit\>` or
`\<Upper\>` ([character class](#classes))

`\<Digit\|x\|y\>`

Any digit character, or either "x" or "y" ([character class](#classes))

`\<^Digit\>`

Any character except a digit ([character class](#classes))

`%1`

Match the same text that the first parenthesized group matched
([back-reference](#groups))

`%2`

Match the same text as the second parenthesized group
([back-reference](#groups))

`%9`

Match the same text as the ninth parenthesized group
([back-reference](#groups))

`%\<`

Match only at the [beginning of a word](#startOfWord)

`%\>`

Match only at the [end of a word](#endOfWord)

`%b`

Match at any [word boundary](#wordBoundary)

`%B`

Match only at a non-[word boundary](#wordBoundary)

`%d`

Match any digit character

`%D`

Match any non-digit character

`%s`

Match any whitespace character

`%S`

Match any non-whitespace character

`%v`

Match any vertical whitespace character

`%v`

Match anything *except* a vertical whitespace character

`%w`

Match any single [word character](#wordChar)

`%W`

Match any single non-[word character](#wordChar)

`\<Case\>`

Make the match [case-sensitive](#case) (default)

`\<NoCase\>`

Make the match insensitive to [case](#case)

`\<FirstBegin\>`

Find the match that begins earliest in the search text (default)
([global flags](#globalFlags))

`\<FB\>`

Same as ([global flags](#globalFlags))

`\<FirstEnd\>`

Find the match that ends earliest in the search text ([global
flags](#globalFlags))

`\<FE\>`

Same as ([global flags](#globalFlags))

`\<Max\>`

Find the longest match (default) ([global flags](#globalFlags))

`\<Min\>`

Find the shortest match ([global flags](#globalFlags))

`%`

[Quote](#quotingSpecials) the following special character (except "\<"
and "\>")

`(?: )`

[Non-capturing group](#nonCapGroups)

`(?= )`

Positive look-ahead [assertion](#assertions)

`(?! )`

Negative look-ahead [assertion](#assertions)

`(?\<= )`

Positive look-back [assertion](#assertions)

`(?\<! )`

Negative look-back [assertion](#assertions)

`\<langle\>`

The character "\<" ([named characters](#namedChars))

`\<rangle\>`

The character "\>" ([named characters](#namedChars))

`\<lsquare\>`

The character "\[" ([named characters](#namedChars))

`\<rsquare\>`

The character "\]" ([named characters](#namedChars))

`\<lparen\>`

The character "(" ([named characters](#namedChars))

`\<rparen\>`

The character ")" ([named characters](#namedChars))

`\<lbrace\>`

The character "{" ([named characters](#namedChars))

`\<rbrace\>`

The character "}" ([named characters](#namedChars))

`\<vbar\>`

The character "\|" ([named characters](#namedChars))

`\<caret\>`

The character "^" ([named characters](#namedChars))

`\<period\>`

The character "." ([named characters](#namedChars))

`\<dot\>`

The character "." ([named characters](#namedChars))

`\<squote\>`

The character "'" (a single quote) ([named characters](#namedChars))

`\<dquote\>`

The character '"' (a double quote) ([named characters](#namedChars))

`\<star\>`

The character "\*" ([named characters](#namedChars))

`\<plus\>`

The character "+" ([named characters](#namedChars))

`\<percent\>`

The character "%" ([named characters](#namedChars))

`\<dollar\>`

The character "\$" ([named characters](#namedChars))

`\<backslash\>`

The character "\\ ([named characters](#namedChars))

`\<return\>`

The carriage return (CR) character (code u000D) ([named
characters](#namedChars))

`\<linefeed\>`

The line feed (LF) character (code u000A) ([named
characters](#namedChars))

`\<tab\>`

The tab character (code u0009) ([named characters](#namedChars))

`\<nul\>`

The null character (code u0000) ([named characters](#namedChars))

`\<null\>`

The null character (code u0000) ([named characters](#namedChars))

## Introduction

A regular expression is sometimes called a "pattern," because it doesn't
usually specify a literal string of characters to find, but rather
specifies a sort of "wildcard" pattern that can match many possible
strings. What makes regular expressions powerful is that you can specify
a whole range of possibilities without actually listing all of the
possibilities individually. In fact, you can easily specify a pattern
that matches an infinite number of possibilities (and do so quite
compactly).

The syntax for regular expressions is a bit scary at first, because it's
almost completely based on punctuation marks. The advantage is that it's
a very compact syntax, but at the cost of sometimes being hard to read.
The set of special symbols involved isn't too large, though, so it
doesn't take too long to learn what all of the symbols mean.

The simplest kind of regular expression is simply a string of literal
text. For example, this is a valid regular expression:

```
    abc
```

This simply matches the string "abc", because the pattern consists
entirely of "ordinary characters," and each ordinary character of the
regular expression is matched literally to a character of the string to
be searched.

An "ordinary character" is any character that doesn't have some other
meaning in the regular expression language. All of the alphabetic
characters (including accented characters), all of the digits, and space
characters of all kinds are ordinary characters. The following
punctuation marks have special meanings:

```
    % < > + . * ? [ ^ $ | ( ) {
```

Everything else is an ordinary character.

<span id="quotingSpecials"></span> You can use almost all of the special
characters as though they were ordinary characters by putting a percent
sign (`%`) in front of them. So, to search for
the letters "abc" enclosed in parentheses, we could write this:

```
    %(abc%)
```

By putting the percent signs in front of the parentheses, you remove the
special meaning from the parentheses and turn them into ordinary
characters that literally match the search text.

Note one pair of exceptions to the `%` rule: the
sequences `%\<` and
`%\>` have special meanings of their own, so you
can't use `%\<` to match a less-than sign, and
you can't use `%\>` to match a greater-than
sign. To match these characters, you must use a range expression or a
named character expression; we'll see these in more detail later, but
for now just note that we can match angle brackets like this:

```
    <langle>abc<rangle>
```

`\<langle\>` matches a single left angle bracket
(`\<`), and `\<rangle\>`
matches a single right angle bracket (`\>`).
Thus, the pattern above matches the string "\<abc\>".

The meanings of all of the special characters, and how they combine, are
explained in the sections that follow.

## Concatenation

Even the simple string above uses one of the construction principles
that lets you build complex search patterns. The string above consists
of three ordinary characters that are concatenated together to form a
longer string. When you concatenate a regular expression element to a
regular expression, you get a new regular expression that matches what
the first one matches, plus what the new element matches. This is pretty
obvious for simple cases like "abc", because if we add a new element -
say the letter "d" - we get a new regular expression which matches a
longer literal string:

```
    abcd
```

## <span id="alternation"></span>Alternation

Another construction principle that lets you combine expressions is
alternation. With alternation, you specify that the pattern matches one
regular expression or another regular expression. You specify
alternation with the character `\|` (the
vertical bar).

We know that the expression `abc` matches the
literal string "abc", and the expression `def`
matches the literal string "def". So, we could combine these with
alternation to make a new regular expression that matches either "abc"
or "def":

```
    abc|def
```

## <span id="namedChars"></span>Named characters

Each of the special characters (except angle brackets) can be entered
literally in an expression using a percent sign
(`%`) to quote the character, as shown above. In
addition, these characters, plus a few others, can be entered by name,
by enclosing the character's name in angle brackets
(`\< \>`). To search for an asterisk, for
example, you could write this expression:

```
    <star>
```

The named character notation is equivalent to using
`%` to quote the special characters. The named
notation is provided as an alternative because it often results in
expressions that are easier to read than the `%`
equivalents.

The special character names and the corresponding characters are:

`\<lparen\>`

(

`\<rparen\>`

)

`\<lsquare\>`

\[

`\<rsquare\>`

\]

`\<lbrace\>`

{

`\<rbrace\>`

}

`\<langle\>`

\<

`\<rangle\>`

\>

`\<vbar\>`

\|

`\<caret\>`

^

`\<period\>`

.

`\<dot\>`

.

`\<squote\>`

'

`\<dquote\>`

"

`\<star\>`

\*

`\<plus\>`

\+

`\<percent\>`

%

`\<question\>`

?

`\<dollar\>`

\$

`\<backslash\>`

\\

`\<return\>`

carriage return (Unicode u000D)

`\<linefeed\>`

line feed (Unicode u000A)

`\<tab\>`

tab (Unicode u0009)

`\<nul\>`

null character (Unicode u0000)

`\<null\>`

null character (Unicode u0000)

These names aren't sensitive to case:
`\<LANGLE\>` is the same as
`\<LAngle\>` and
`\<langle\>`.

The named characters are actually a type of "character class," which
we'll get to in a moment. This means that you can combine named
characters with the `\|` symbol, and reverse the
sense of the match with the `^` symbol, just as
with character classes. For example, the following matches a period,
plus sign, or asterisk:

```
    <period|plus|star>
```

and the following matches anything *except* a question mark:

```
    <^question>
```

## <span id="wildcards"></span>Wildcards, ranges, and classes

If you've ever used an operating system like DOS or Unix, you're
probably familiar with "wildcard" characters for file directory
listings. A wildcard is a character that matches any other character.

Regular expressions have a wildcard character, too, but it's not what
you might expect if you're thinking about filename wildcards from DOS or
Unix. The regular expression wildcard character is the period
(`.`). This simply matches any single character.
So, if we wanted to match the word "the" followed by a space followed by
any three characters, we'd write this:

```
    the ...
```

Regular expressions don't stop at simple wildcards, though: they let you
get much more specific. First, you can use "ranges," which let you match
one of a selected group of specific characters. For example, if you want
to match any single character that is a vowel, you could write a range
like this:

```
    [aeiouAEIOU]
```

You might wonder why we wrote each vowel twice. It's because regular
expressions are case-sensitive by default - "a" in an expression matches
"a" in a string, but not "A". When you want an expression to be
indifferent to case distinctions, you can make it case-insensitive with
the [`\<NoCase\>` flag](case).

You can use a range expression in an expression wherever an ordinary
character can go. So, to write a pattern that matches "button", followed
by a space, followed by a digit from 0 to 9, you could write this:

```
    button [0123456789]
```

Ranges can also specify that you want to exclude characters. An
"exclusive" range works just the opposite of a regular range: it matches
anything that's not listed in the range. You specify an exclusive range
by putting a caret (`^`) as the first character
inside the brackets of the range. So, to match any single character that
isn't a vowel, you'd write this:

```
    [^aeiouAEIOU]
```

Note that exclusive ranges match anything that's not in the range, so
the range above will match anything that isn't a vowel, including
digits, spaces, and punctuation characters.

You can also use a range to specify contiguous portions of the Unicode
character set simply by giving the endpoints of the portion. Do this by
listing the ends of the range, separated by a hyphen
(`-`). For example, to match any letter in the
Roman alphabet, not including any accented characters, you'd write this:

```
    [a-zA-Z]
```

This matches any character whose Unicode character code value is between
"a" and "z" inclusive, or between "A" and "Z" inclusive. (The Unicode
character set includes the ASCII character set as a subset, assigning
the same character code values as ASCII does to the ASCII characters -
so if you're familiar with Unix-style regular expression ranges, you'll
find that Unicode ranges end up working exactly the same way.)

You can use exclusion with subset ranges as well:

```
    [^a-zA-Z]
```

This matches any single character that is not in the Roman alphabet.

If you want to include the character `^` in a
range expression, you can do so, as long as it's not the first
character - if the `^` appears as the first
character, it's taken to indicate an exclusive range. So, to specify a
match for either an ampersand or a caret, you'd have to write the range
expression like this:

```
    [&^]
```

Similarly, note that, if you want to include a hyphen character in a
range expression, it must be the first character in the range list. If a
hyphen appears anywhere else, it's taken as a subset specifier. So, to
write a range that matches a pound sign or a hyphen, you'd have to write
this:

```
    [-#]
```

In addition, if you want to include a right square bracket in a search
string, it must be the first character in an inclusive range, or the
first character after `^` in an exclusive range.

Combining all of the rules above, if we wanted to write an inclusive
search for all of the special range characters - hyphen, caret, and
right square bracket - we'd have to write this:

```
    []-^]
```

And to write a search that excludes all of these characters:

```
    [^]-^]
```

The two examples above are the exact orders needed for these special
situations. If you want to write these ranges and include additional
characters, insert them at the end of the range, just before the closing
square bracket. If you don't want to include all of the special
characters, take out the ones you don't want from the example above,
leaving the remaining ones in the same order.

Note that, other than the three special range characters
(`^-`
`\]`), all of the characters that are special
elsewhere in a pattern lose their special meaning within a range. So,
the following range expression matches a period, a star, or a percent
sign:

```
    [.*%]
```

<span id="classes"></span> Ranges are useful for matching a specific
group of characters, but it's harder to write a good range expression
for more complex character sets, such as any alphabetic character or any
digit. Unicode has so many different groups of alphabetic characters,
since it includes support for so many different languages, that it would
take a lot of work to list all of the different alphabetic ranges.
Fortunately, TADS regular expressions provide a shorthand notation for
certain important character sets, called "character classes."

Each character class is written as a name enclosed in angle brackets
(`\<` and `\>`). Each
class matches a single character. The classes are:

- `\<Alpha\>` - matches any single alphabetic
  character. This class matches anything that the Unicode character
  database classifies as alphabetic, so this includes accented
  characters and characters from non-Roman alphabets.
- `\<Upper\>` - matches any single upper-case
  alphabetic character. Like `\<Alpha\>`, this
  class uses Unicode classifications, so it matches accented upper-case
  characters.
- `\<Lower\>` - matches any single lower-case
  alphabetic character.
- `\<Digit\>` - matches any single digit
  character.
- `\<AlphaNum\>` - matches any single
  alphanumeric character.
- `\<Space\>` - matches any horizontal
  whitespace character. These include regular spaces (' ', Unicode
  u0020), tab ('\t', Unicode u0009), ASCII form feed (Unicode u000C),
  ASCII control character IC1 (Unicode u001F), the Unicode non-breaking
  space (u00A0), the various Unicode typographical spaces (u2000 through
  u200B), and the several miscellaneous Unicode control characters that
  the Unicode classifies as whitespace (u0085, u1680, u202f, u205f,
  u3000). This does *not* include vertical spacing characters, such as
  line feed ('\n') or carriage return characters, or the TADS quoted
  space character ('\\ ').
- `\<VSpace\>` - matches any vertical whitespace
  character. These are the line-separator characters: carriage return
  ('\r', Unicode u000D), line feed ('\n', Unicode u000A), the TADS
  "blank line" character ('\b', Unicode u000B), ASCII control characters
  IC2 through IC4 (Unicode u001C through u001E), and the Unicode line
  and paragraph separators (Unicode u2028 and u2029)
- `\<Punct\>` - matches any punctuation mark
  character, as classified by the Unicode standard.
- `\<Newline\>` - matches any single newline
  character: carriage return (u000D), line feed (u000A), the TADS blank
  line character '\b' (u000B), Unicode line separator (u2028), Unicode
  paragraph separator (u2029).

Note that the class names are not case-sensitive (regardless of whether
or not the search itself is), so `\<Alpha\>`,
`\<alpha\>`, and
`\<ALPHA\>` are equivalent.

You can use a character class in place of an ordinary character. So, to
search for a five-letter word starting with an upper-case letter
followed by four lower-case letters, we could write this:

```
    <Upper><lower><lower><lower><lower>
```

Character classes can be combined using `\|` to
separate class names. For example, if you want to write an expression
that matches any upper-case letter or any digit, you could write this:

```
    <Upper|Digit>
```

This is equivalent to writing
`(\<upper\>\|\<digit\>)`, but is a little more
concise.

Character classes can be complemented using `^`
as the first character inside the angle brackets. For example, to match
any character other than an upper-case letter, you could write this:

```
    <^Upper>
```

You can complement combined character classes as well. This matches any
character except a space or punctuation mark:

```
    <^Space|Punct>
```

Note that the `^` applies to the entire class
expression, not just to the first element, so the example above does not
match punctuation marks.

You can combine character classes and literal characters in a single
angle-bracket expression. For example, suppose you want to match the
characters of a C++ identifier. The first character of an identifier in
C++ must be an alphabetic character or an underscore ("\_"), and
subsequent characters can be letters, numbers, or underscores. You could
use this expression:

```
    <Alpha|_><Alpha|Digit|_>*
```

You can also use literal ranges, just like in square bracket
expressions, and combine these with individual literals or classes. For
example, to match any upper-case letter, but only lower-case "a" through
"m", you could write this:

```
    <Upper|a-m>
```

You might have noticed by now that angle bracket expressions using
literals are very similar to square bracket expressions. However,
there's one crucial difference in the syntax: inside angle brackets,
each individual literal character or literal range must be separated
from others by bars (`\|`). For example,
consider this square-bracket range:

```
    [13579a-f]
```

To write the same expression with angle brackets, you must separate each
digit from the next by a bar:

```
    <1|3|5|7|9|a-f>
```

The bars are required because the regular expression compiler would
otherwise not be able to tell for sure what something like this means:

```
    <Alpha>
```

Were it not for the rule about separating literals with vertical bars,
this could either mean any alphabetic character or any of the characters
"A", "l", "p", "h", or "a". Thanks to the rule that literals must be
separated with bars, there is no ambiguity:
`\<Alpha\>` can only mean any alphabetic
character. You might think that you should be allowed to get away
without the bars when the literals don't spell a character class name or
the name of a special character. However, if this were allowed, it could
create problems in the future: what you think is a meaningless string of
literals now could take on a new meaning in a future version. So, to
avoid any confusion or future compatibility problems, the bars are
required for all literals.

All of the named characters (`\<lparan\>`,
`\<period\>`, and so on) are essentially just
very narrow character classes, so you can freely mix them with literals
and character classes in angle-bracketed patterns. For example, to match
any upper-case letter or an open or close parenthesis, you could use
this expression:

```
    <Upper|lparen|rparen>
```

## <span id="closures"></span>Closures and optionality

If you've used filename patterns on DOS or Unix, you're probably
wondering by now how you match a variable-length string, the way the
"\*" character does for filename matches on these systems. Regular
expressions let you do this, but in a different and more powerful way
than filename patterns do.

There are three ways of specifying variable-length regular expression
matches. The first is the "optionality" operator, which specifies that
the immediately preceding expression character is optional -
specifically, that the preceding character can be present zero or one
times in the match string. The optionality operator is the question
mark, `?`, and immediately follows the character
to be made optional. So, to search for either "you" or "your", we could
write this:

```
    your?
```

The second variable-length operator is the one-or-more "closure." This
operator is the plus sign, `+`, and specifies
that the immediately preceding character is to be repeated once or
more - any number of times, as long as it appears at least once. So, to
match a string of any number of copies of the letter "A", we'd write
this:

```
    A+
```

This matches "A", "AA", "AAA", and so on without limit.

The third variable-length operator is almost the same: it's the
zero-or-more closure. This operator is the asterisk,
`\*`. This specifies that the preceding
character is to match any number of times, and furthermore that it need
not be present at all.

```
    abcd*
```

This matches "abc", or "abcd", or "abcdd", or "abcddd", and so on.

You can apply the closure operators to more complex expressions than a
single ordinary character. For example, to search for one or more
digits, you could write this:

```
    <digit>+
```

To search for any word of any length written with an upper-case initial
letter and lower-case letters following, you'd write this:

```
    <upper><lower>*
```

To search for any number of repetitions of an arithmetic operator
character, we could write this amusing sequence of punctuation marks:

```
    [-+*/]*
```

Closures normally match as much text as they possibly can, but you can
change this using the shortest-match modifier, as we'll see a little
later.

(In case you're wondering why `\*` and
`+` are called "closures": this term comes from
the set mathematics from which the concept of regular expressions
descends. A set is said to be "closed" under an operator if, for every
element of the set, applying the operator to the element yields another
element of the set. The operator of interest in this case is
concatenation. Suppose we wished to form a set of strings closed under
the concatenation operator: we could start with a string X, but then
we'd have to include XX (X concatenated with itself) in the set, plus
XXX (X concatenated with this new member XX), XXXX, and so on, forever
forming longer strings. The set wouldn't be closed under concatenation
until we've added a string of X's of every possible length. This set
would obviously be inconvenient to write out in research papers without
some kind of trick, which is where `\*` and
`+` come in: these symbols give us a way to
express a set that's closed under concatenation - hence infinite if
non-trivial - with a finite notation, and thereby provide closure to the
notation. Glad you asked? Happily, this level of formalism is not needed
in the course of using regular expressions.)

## <span id="repetition"></span>Intervals (counted repetitions)

It is often useful to match a certain number of repetitions of a given
character. The obvious way to express a repetition is with ordinary
concatenation; for example, if we wanted to find a string of five A's,
we could write this:

```
    AAAAA
```

This type of thing is less convenient when we want to find something
that takes up more space than a single letter, though; for example, a
pattern matching any five lower-case letters is cumbersome when written
with concatenation:

```
    <lower><lower><lower><lower><lower>
```

The regular expression language has a more convenient way: the interval
operator. This operator immediately follows an expression character, and
specifies that the preceding character is to be repeated a given number
of times. The interval operator is written by placing a number if curly
braces (` { }`). We can use this operator to
re-write our example more concisely:

```
    <lower>{5}
```

The interval operator can also be used to specify a range of
repetitions. You can put two numbers between the braces, separating the
two by a comma. The first number is the minimum repeat count, and the
second is the maximum count. For example, to match a string of three,
four, five, six, or seven digits, we could write this:

```
    <digit>{3,7}
```

Finally, the interval operator can specify an unlimited maximum count.
To do this, include the comma, but omit the upper bound. For example, to
match at least five digits in a row, we would write:

```
    <digit>{5,}
```

## <span id="grouping"></span>Grouping

Each construction rule has a default grouping. For example, the
alternation operator (`\|`) considers everything
to the left of the `\|` to be one complete
regular expression, and everything to the right to be another complete
expression: so the pattern `abc\|def` matches
"abc" or "def". Sometimes, however, you will want to change the default
grouping, to extend or limit the extent to which an operator applies.
You can do this by putting a portion of the expression in parentheses
(`(` and `)`).

For example, suppose we wanted to construct an expression that matches
either "the red ball" or "the blue ball". We might first attempt
something like this:

```
    the red|blue ball
```

However, this wouldn't work the way we want: the
`\|` operator applies to everything to its left
and right, so what this expression actually matches is "the red" or
"blue ball". This is where parentheses come in handy: we can enclose in
parentheses the part of the expression to which we want to apply the
`\|` operator:

```
    the (red|blue) ball
```

You can also use parentheses to achieve the opposite effect with the
closure operators. Using parentheses, you can make the closure operators
apply to more than just the single character preceding the closure. For
example, to match any number of repetitions of the word "the" followed
by a space, you could write this:

```
    (the )+
```

Similarly, you can use parentheses to control the reach of the interval
operator:

```
    (the ){2,3}
```

You can use parentheses within parentheses for more complex grouping.
For example, to search for the word "the" followed by any number of
repetitions of "ball", and then repeating the whole thing any number of
times, we'd write this:

```
    (the (ball )+)+
```

## <span id="groups"></span>Group matches

Parenthesized groups have another use besides controlling operator
grouping. Each time you use parentheses, the regular expression matcher
automatically assigns a "group number" to the expression contained
within the parentheses. The group numbers start at 1, and increase each
time the parser encounters an open parenthesis. (Nesting doesn't matter
for numbering - the order of appearance of the open parentheses
establishes the group numbering.)

The regular expression functions let you look at the exact text that
matched a particular group after a search. For example, suppose you
defined a search like this:

```
    say "(.*)" to (<alphanum>*)
```

This expression has two groups. Group number 1 is the part within the
quote marks. Group number two is the part after "to". Now, suppose we
match this string:

```
    say "hello there" to Mark
```

If we ask the regular expression matcher for group number 1, it will
give us the string "hello there" (no quotes - the group is inside the
quotes, so the quotes won't be part of the group string). Similarly,
group number 2 is the string "Mark".

Groups can also be used within an expression. If you write the sequence
`%1` in an expression, it specifies a match to
the same thing that group number 1 already matched in the same string.
Similarly, `%2` matches the same text as group
number 2, and so on, up to `%9` for group 9.
This allows you to look for repeated sequences that are separated from
one another. For example:

```
    (<alphanum>*) is %1
```

This will match any string of the form "word is word", where the two
words are the same. So, it will match "red is red" and "blue is blue",
but it won't match "blue is red".

## <span id="nonCapGroups"></span>Non-capturing groups

As we've seen above, the grouping syntax (putting a portion of the
regular expression in parentheses) has two uses: first, to control the
reach of an operator such as `\*` or
`\|`; second, to capture part of the matching
text, for use in a group match (such as `%1`) or
for replacement or extraction.

When you're only grouping part of the expression to control the reach of
an operator, the text-capture feature is sometimes undesirable. In
particular, because groups are numbered by position, adding a new group
into an existing expression requires that you adjust the numbering for
any other groups. For example, suppose we defined an expression like
this:

```
    to (.*) %1
```

Now, suppose we wanted to change this slightly by making it recognize
"of" as well as "to". We'd change it to something like this:

```
    (to|of) (.*) %1
```

Unfortunately, we've forgotten something: the group that was originally
number 1 is now number 2, because we've added another group before it.

This example is so simple that renumbering its groups wouldn't pose much
of a challenge, but we might simply forget; and for a complicated
expression, this could become a real maintenance problem.

Fortunately, the regular expression language has a feature that lets you
mark a group as non-capturing. A non-capturing group still has the same
operator grouping effects as a normal group, but it doesn't capture its
matching text, and it doesn't affect the numbering for any other groups.

To make a non-capturing group, add the sequence
`?:` immediately after the group's opening
parenthesis. (This might seem like a strange bit of syntax, because the
question mark character is normally used as a closure operator. However,
the `?` closure operator is always a postfix
operator - it has to follow the sub-expression that it modifies. When a
`?` appears immediately following an open
parenthesis, it's simply not meaningful as a closure operator, because
there's no sub-expression that it can modify in this position. The
regular expression language thus can assign this separate meaning to a
question mark that immediately follows an open parenthesis.)

So, let's re-write our example with a non-capturing group:

```
    (?:to|of) (.*) %1
```

## Special matches

The regular expression matcher provides a number of special match types.

<span id="startOfString"></span> `^` matches the
very beginning of the search string. If specified, this has to be the
first character in the pattern (or the first character within a
parenthesized group at a top-level alternation). The "^" character
doesn't match any characters - it simply matches if the search position
is the very start of the string.

<span id="endOfString"></span> `\$` matches the
very end of the string. This must be the last character in the pattern
or within a parenthesized group at a top-level alternation.

<span id="startOfWord"></span> `%\<` matches the
start of a word, which is defined as a position where the preceding
character is not a word character, and the following character is. A
word character is any alphanumeric character.
`%\<` doesn't actually match any characters - it
just requires that the current position is the start of a word.

<span id="endOfWord"></span> `%\>` matches the
end of a word.

<span id="wordBoundary"></span> `%b` matches any
word boundary, which is either the beginning or ending of a word.

`%B` matches anywhere that is not a word
boundary.

`%d` matches any digit character (this is
equivalent to `\<digit\>`; it's just shorthand
notation for the same thing).

`%D` matches any non-digit character (equivalent
to `\<^digit\>`).

`%s` matches any horizontal whitespace character
(equivalent to `\<space\>`).

`%S` matches any character that isn't a
horizontal whitespace character (this is the same as
`\<^space\>`).

`%v` matches any vertical whitespace character
(this is the same as `\<vspace\>`).

`%V` matches any character that isn't a vertical
whitespace character (the same as `^vspace\>`).

<span id="wordChar"></span> `%w` matches any
word character, which is defined as an alphanumeric character
(equivalent to `\<AlphaNum\>`).

`%W` matches any non-word character.

Several of the special sequences above have character class equivalents,
as noted. For example, `%s` can also be written
as `\<space\>`. The reason for the duplicate
notation is simply that these particular classes tend to be used quite
frequently, so it's convenient to have a shorter way to write them.
(Another reason is it's fairly standard these days for regular
expression languages to define "backslash" equivalents of these - for
example, Javascript defines `\s` the same way we
define `%s`, `\S` the
way we define `%S`, etc. People who regularly
use Javascript, php, Perl, etc would miss these if something close
weren't available in TADS.)

## <span id="case"></span>Case sensitivity

By default, searches are sensitive to case, which means that an
upper-case letter in the search pattern will match only the same
upper-case letter in the string being searched, and a lower-case letter
will only match the same lower-case letter. You can, however, make a
search insensitive to case. To do this, add the
`\<NoCase\>` flag to the search pattern. There's
also a `\<Case\>` flag to make the case
sensitivity explicit, but this is the default, so you won't usually need
to specify it.

The `\<Case\>` and
`\<NoCase\>` flags don't match anything
themselves; they're just flag sequences that control the overall search
mode. You can put these anywhere in the search, but normally you'd just
want to put them at the start of the search string to avoid confusion.
These flags are global, which means that the entire search is
case-sensitive or case-insensitive; you can't make part of your search
string sensitive to case and another part insensitive. If the flags
appear more than once, only the last one that appears is obeyed.

For example, to search for a match to "abc", ignoring case, we'd write
this:

```
    <NoCase>abc
```

When you use `\<NoCase\>`, pattern matcher will
match "A" in a pattern to "a" or "A" in a string, and will likewise
match "a" in the pattern to "a" or "A" in a string. The pattern matcher
does this by using the "case folding" for each character. The case
folding for a character is defined in the Unicode character database; in
most cases, it's the result of converting the character to upper case
and then back to lower case.

Case folding sometimes causes one character to be replaced by two or
more characters. For example, the German sharp S, ß, is replaced by "ss"
when case-folded. The handling for such characters varies according to
where they occur:

- When the **pattern** contains a character that expands when folded,
  that character will match both its original version and its expanded
  version in the string. For example, the pattern '.\*ß' will match
  'weiß', since the ß characters match before any case folding occurs,
  and will also match 'weiss', since the ß in the pattern folds to 'ss'.
- When the **subject string** contains an expanding character, it will
  match the expanded version in the pattern only when the expansion is
  contiguous in the pattern. For example, the string 'ß' matches the
  pattern 'ss', because the ß case-folds to 'ss', which matches
  contiguous literals in the pattern. However, the string 'ß' **won't**
  match the patterns '(s)(s)' or 's+', because because neither pattern
  contains the contiguous literal sequence 'ss'. (Part of the reason for
  this limitation is that it avoids conceptual problems with grouping.
  If '(s)(s)' matched 'ß', it would result in a somewhat bizarre
  situation in which the second capture group started in the middle of a
  character from the subject string.)
- Case folding only applies to a subject string character when it's
  matched against a literal character in the pattern. For example, 'ß'
  won't match the pattern '..', since the case folding isn't considered
  at all when matching '.' (or any other non-literal) in the pattern.

## <span id="assertions"></span>Assertions

An assertion is a test that applies to the characters immediately
following or preceding the current match point, without consuming any
characters. The test is, naturally, written as a regular expression,
embedded within the overall expression.

There are *positive assertions*, which require that the adjacent
characters in the subject string match the sub-expression, and *negative
assertions*, which require that the adjacent characters *don't* match
the sub-expression.

Further, assertions can test the characters in the subject string that
follow the current position, or those that precede it. *Look-ahead
assertions* test the characters following the current position;
*look-behind assertions* test the characters preceding the current
position.

The positive/negative attribute combines with the look-ahead/look-behind
attribute, making four kinds of assertions total. The syntax for the
four types is as follows:

- `(?=`*expression*`)` -
  a positive look-ahead assertion. The *expression* must match the text
  in the subject string immediately following the match position, or the
  whole expression fails.
- `(?!`*expression*`)` -
  a negative look-ahead assertion. The *expression* must *not* match the
  text in the subject string immediately following the match position.
  If the expression *does* match the text, the whole expression fails.
- `(?\<=`*expression*`)` -
  a positive look-back assertion. The *expression* must match the
  subject string text immediately *preceding* the current match
  position.
- `(?\<!`*expression*`)` -
  a negative look-back assertion. The *expression* must *not* match the
  subject string text immediately *preceding* the current match
  position.

The syntax is a little obtuse, but there's a certain logic to it.
Positive assertions use "=", which you can think of as "the text has to
equal this pattern". Negative assertions use "!", which is the C logical
NOT operator: "the text must **not** match this". Look-back assertions
are signaled with "\<", which looks like a backwards-pointing arrow.

### Examples

Assertions are useful for cases where you want to filter a simple
pattern so that it only includes certain specific matches, or excludes
certain matches.

For example, suppose you wanted to find words in a string, but you want
to skip certain small words such as "the" and "of". We start by writing
the basic expression to match a word:

```
    <%%w+%>
```

That matches a series of word characters (%w), making sure that we start
and end at word boundaries. This meets half of our requirement, but now
we have to exclude our list of small words. To do this, we can use an
assertion. A look-ahead assertion will work for this situation: at the
start of the word match, we want to make sure that the word that follows
isn't one of our excluded words. Since we're excluding matches, we use a
negative assertion.

```
    (?!%<(the|of)%>)<%%w+%>
```

This works by asserting at the start of each potential match that the
characters that follow (it's a look-ahead assertion) don't match (it's a
negative assertion) the sub-pattern
`%\<(the\|of)%\>` - that is, the complete word
"the" or "of. If the characters that follow *do* match the sub-pattern,
we don't have a match.

Assertions are also useful for matching only in certain contexts. For
example, suppose we want to find the first word in a sentence: a word
that's either at the beginning of the string, or that follows a period,
exclamation point, or question mark. For this, we can use another
generic word search, and apply a look-back assertion to make sure that
the word is preceded by one of these punctuation marks.

```
    (?<=^|[.!?]<space>+)%<%w+%>
```

This checks before each possible word match that the match is preceded
by either the start of the line (`^`) or by a
sentence-ending punctuation mark followed by one or more spaces.

Note that, unlike some regular expression systems, TADS doesn't require
look-back assertions to have fixed lengths. That means that it's legal
to use open-ended repetition operators (`\*`,
`+`, and ` {n,}`), as we
just did in the example. The reason that some other RE languages don't
allow this is that it can make for a really complicated and lengthy
search, because the matcher has to search backwards for a match to the
assertion. TADS optimizes the search when possible by limiting it to the
maximum length of possible matches for the assertion, when there is a
maximum length. An assertion involving an open-ended repetition like
`\*` doesn't have a maximum length, so the
matcher has to search the whole string (back to the beginning of the
string) in those cases.

## [](globalFlags)First beginning/ending, longest/shortest match

As we saw above in the examples for the shortest-match closure modifier,
there are times when a particular expression can match a string in
several different ways. For example, consider this pattern:

```
    say (.*) to (.*)
```

For many strings, there will be only one way to match this. In some
cases, though, we could type a string that could be interpreted
different ways. For example:

```
    say time to go to Bob
```

This could match in several different ways. We could end up with group 1
as "time to go" and group 2 as "Bob". We could also have group 1 as
"time" and group 2 as "go to Bob". We could also have group 1 as "time"
and group 2 as "go", or even an empty group 2 -
`.\*` can match zero characters, after all.

Normally, the matcher will give us the longest match that begins
earliest in the search string. The matcher will furthermore give the
earliest groups in the string the longest matches. So, of all of the
choices above, the matcher will normally pick the one where group 1 is
longest and group 2 is longest given that group 1 is already longest -
thus, group 1 is "time to go" and group 2 is "Bob".

You can, however, control this behavior.

Two flags control whether the matcher picks the longest or shortest
match for a string. If you put the `\<Max\>`
flag somewhere in your expression (it's a global flag, so it doesn't
matter where it goes), the parser will always choose the longest string
it can for each subexpression, giving precedence to the earliest
expression. This is the default behavior. If you use the
`\<Min\>` flag, though, the matcher will use the
shortest match that it possibly can for the overall match. Thus,
consider this new expression:

```
    <Min>say (.*) to (.*)
```

Now if match this to "say time to go to Bob", we'll get "time" for group
1, and an empty group 2.

Note that the matcher still always tries to give the earliest groups the
longest matches, but this is only after figuring out which is the
shortest overall match. Consider this example:

```
    tell (.*) to (.*)
```

If we type in something like "tell Bob to eat my shorts", there's no
ambiguity. But if we try a string like "tell Bob to go to the store",
the parser matches group 1 as "Bob to go" and group 2 as "the store",
which isn't what we want. How do we solve this?

Unfortunately, `Min` doesn't help us much with a
situation like this, because the second group is free to match nothing
at all. So, if we try this:

```
    <Min>tell (.*) to (.*)
```

and we try "tell Bob to go to the store", we'll have "Bob" for group 1,
as we want, but now we'll have an empty group 2 - the shortest match to
the string is simply "tell bob to ", since the second group can match
nothing. We could change the expression like so:

```
    <Min>tell (.*) to (.*)$
```

This forces the expression to match to the end of the string. But this
still doesn't do what we want, because now the first group will be "Bob
to go" and the second will be "the store" - so we're back where we
started. The reason that `\<Min\>` doesn't help
us here is that `\<Min\>` affects only the
length of the complete match, and doesn't affect the matcher's
preference for putting the longer string in the earlier group in case of
ambiguity.

You can solve this kind of problem in many cases using the
shortest-match modifier. In some cases, though, you might want even more
control. A good approach in these cases is to use two separate regular
expressions applied in sequence. For the first, we eliminate the second
anything-goes wildcard sequence, and end the expression at the "to":

```
    tell (.*) to<space>
```

Now, this reduces the ambiguity of the expression, but it still doesn't
do what we want - when we match "tell Bob to go to the store", we again
find that group 1 is "Bob to go", since the parser by default matches
the longest sequence it can. However, we finally have a situation where
the `\<Min\>` flag solves our problem:

```
    <Min>tell (.*) to<space>
```

This gives us what we want - group 1 is simply "Bob", since the shortest
possible string that matches the complete pattern is now "tell Bob to ".
We can finish by using the match length for the overall expression to
learn what's left in the rest of the string, which gives us what we
formerly tried to get from the second group.

You can also specify whether the matcher finds the matching string that
begins first or ends first. By default, the matcher finds a string that
begins earliest in the search string. However, there are times when you
might want to find the string that ends earliest. To do this, use the
`\<FirstEnd\>` flag, which you can also write as
simply `\<FE\>`. The default flag,
`\<FirstBegin\>` or
`\<FB\>`, finds the string that begins earliest.

## <span id="shortestMatch"></span>Individual shortest-match closures

The `\<Min\>` and
`\<Max\>` flags above control the "greedy"
behavior of closures globally. In many cases, though, it's better to
control the behavior of individual closures.

Going back to our example:

```
    tell%>(.*)%<to%>(.*)
```

As we've seen, this produces the wrong results for "tell him to go to
the store", because the first `(.\*)` group is
"greedy" and wants to vacuum up as many characters as it can, causing it
to match " him to go ", leaving just " the store" for the second group.

You can handle this particular case with the global
`\<Min\>` flag as shown earlier, but it's often
better to be able to control one closure at a time. To do this, we use
the *shortest-match modifier*. The syntax for this is simply to add a
"?" character right after the closure operator:

```
    tell%>(.*?)%<to%>(.*)
```

If we try the string "tell him to go to the store" again with this new
expression, the first group matches as little as it possibly can, in
this case " him ", leaving " to the store" for the second group.

You can use the shortest-match modifier with all of the closures
(`\*`, `?`, and
`+`), as well as with the interval operator
(` { }`).

## Examples

If we were writing a C++ compiler, we'd want to write regular
expressions for the lexical tokens that make up the language. For
example, a symbol is any string of characters starting with a letter or
an underscore, followed by any number of letters, digits, or
underscores; C++ symbols are limited to the ASCII character set, so we
can use range expressions rather than the class and the like:

```
    <nocase>[a-z_][a-z_0-9]*
```

A C-style comment (/\* … \*/) is a little tricky. At first glance, we
might try something simple like this:

```
    /%*.*%*/
```

This won't do quite what we want, though: suppose we tried matching
something like this:

```
    a /* destination */ = 1 /* value */;
```

Our expression match would give us everything from the first slash to
the final slash - the one before the semicolon. This is incorrect,
because we've mistaken the part between the two comments as part of one
big comment. To rectify this, we can use the shortest-match modifier
with the ".\*" part of the expression:

```
    /%*.*?%*/
```

Character strings are even trickier. We can start with a similar sort of
expression:

```
    ".*?"
```

This almost does the trick, but misses one important case: in C++, a
string can contain a quotation mark, if it's preceded by a backslash
character. To handle this case, we can handle backslashes specially:
we'll treat a backslash and the immediately following character as a
group, and then alternatively handle anything that isn't a backslash:

```
    "([^\]|\.)*?"
```

(Note that, if you were coding this expression within a string in your
source code, you'd have to double the backslashes, because the TADS
compiler considers them significant in the same way a C++ compiler
would.)

Moving on to other types of patterns, here's an expression that matches
a North American telephone number, with optional area code:

```
    (%([0-9][0-9][0-9]%))?<space>*[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]
```

Or, more compactly using intervals:

```
    (%([0-9]{3}%))?<space>*[0-9]{3}-[0-9]{4}
```

The next expression matches a C-style floating point number. These
numbers start with an optional sign character, then have either a string
of digits, a decimal point, and a string of zero or more digits; or a
decimal point followed by one or more digits. After this is an optional
exponent, written with the letter "E" (capital or small) followed by an
optional sign followed by one or more digits.

```
    [-+]?([0-9]+%.?|[0-9]*%.[0-9]+)([eE][-+]?[0-9]+)?
```

Note the way we constructed the alternation that gives us the mantissa
(the part before the exponent). We use the alternation to gives us one
of two expressions:

```
    [0-9]+%.?
    [0-9]*%.[0-9]+
```

The first expression matches a string of one or more digits, followed by
an optional decimal point. This matches numbers that have no decimal
point at all, as well as numbers that end in a decimal point. The second
expression matches zero or more digits, a decimal point, and then one or
more digits. One might wonder why we didn't write the expression more
simply like this:

```
    [0-9]*%.?[0-9]*
```

In other words, as zero or more digits, an optional decimal, and zero or
more digits. The reason we didn't write the expression this way is that
everything in this expression is optional - this one would match an
empty string. It would also match a period, without any digits on either
side. Obviously, we don't want to consider either an empty string or
simply a period as a valid floating point number, so this simpler form
of the expression is a little too general. The alternation solves these
problems, because it allows for starting with a decimal, ending with a
decimal, or containing an embedded decimal, but there must always be one
or more digits on one side or the other of the decimal.



------------------------------------------------------------------------



*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> Regular
Expressions  
<span class="navnp"><a href="tadsgen.html" class="nav"><em>Prev:</em> tads-gen Function
Set</a>    
<a href="tadsio.html" class="nav"><em>Next:</em> tads-io Function Set</a>
    </span>


