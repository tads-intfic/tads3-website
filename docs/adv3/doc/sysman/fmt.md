---
layout: docs
---


<img src="topbar.jpg" data-border="0" />
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="ui.html" class="nav">The User Interface</a> \> The Output
Formatter  
<span class="navnp"><a href="ui.html" class="nav"><em>Prev:</em> The User Interface</a>
    <a href="dispfn.html" class="nav"><em>Next:</em> The Default Display
Function</a>     </span>
# The Output Formatter

TADS 3 is in many ways a general-purpose programming system, but it is
nonetheless designed above all else as a system for text-based
interactive fiction. It might be tautological to say this, but one of
the most important elements of text IF is the text. Any system for
creating text-based IF had therefore better provide some good text
formatting tools.

## HTML

The display language of TADS 3 is HTML. Nearly, anyway: the HTML used in
TADS is based on the official web standard for HTML 3.2, but a few
features of HTML 3.2 are missing, a few things act differently than they
do in regular HTML, and a number of extensions are available. The
missing and modified features are mostly in areas where HTML features
that were designed for web browsing just don't fit into text IF, or
don't fit as they were designed in HTML. Where TADS adds new features to
HTML, we've tried to follow later versions of the HTML standards
wherever possible, or at least to stay consistent with the style of
similar HTML features. Full details on the special version of HTML that
TADS 3 uses can be found in the HTML TADS documentation, which describes
all of the deviations from standard HTML.

HTML is used in all text output windows, including the main game window
and all text banners. HTML is not used in "text-grid" banners, though.

## Word Wrapping/Line Breaking

All of the interpreters perform automatic "word wrapping" on the output
text, which means that when the text output would overflow the right
margin, the interpreter finds the nearest word boundary and breaks the
line there. This allows the author to largely ignore the details of how
wide the game window is and how the text is laid out on the screen; the
game simply writes out its paragraphs of text, and the system
automatically makes it look right.

In some cases, though, it's desirable for the game to be able to control
exactly how the system decides where to break lines. TADS 3 provides a
sophisticated set of controls that give the game a great deal of
detailed control over line breaking. Because of the substantial
differences among the interpreters, it would be too difficult to force
the game to actually do the line breaking itself-there would be too many
cases to deal with. Instead, TADS 3 lets the game control line breaking
with special advisory sequences that can be placed into the text itself.
The interpreter determines where to break lines by inspecting the text,
taking into account the advisory sequences.

(Note that the GUI text-only interpreters do not currently support the
different wrapping modes, and do not support the override controls.
These interpreters support only the traditional word-wrapping mode, so
games that depend on the custom line-breaking features might not produce
acceptable results on these systems.)

Word wrap and character wrap modes

To start with, TADS 3's output formatter has two basic modes: word
wrapping and character wrapping.

In *word-wrapping* mode, the interpreter will only break a line between
words. This is the default mode, and is the style that almost always
applies to languages like English that use groups of letters to
represent words. The formatter's rules for determining word boundaries
are simple: a word boundary is a space, or a hyphen (but a break can
occur only to the right of a hyphen, and only when the hyphen isn't
followed by another hyphen).

In *character-wrapping* mode, the interpreter can break a line anywhere.
This mode is especially applicable to languages like Chinese in which
each character represents an entire word. In Chinese, convention allows
line breaks to occur almost anywhere; each glyph is a separate word, so
there is no need to keep most pairs of adjacent glyphs together on one
line.

The wrapping mode is selected using the
`\<WRAP\>` tag (which is a TADS extension, not a
standard HTML tag). `\<WRAP WORD\>` sets
word-wrapping mode, and `\<WRAP CHAR\>` sets
character-wrapping mode. The interpreter always starts in word-wrapping
mode. This tag is not a container, but simply an in-line mode switch, so
there is no `\</WRAP\>` tag; to change out of
the current mode, simply use another `\<WRAP\>`
tag with the new mode.

### Overriding the Default Breaking Rules

The default line-breaking rules - in both word-wrap and character-wrap
modes - are very simple, but not adequate for every situation. For
example, a game written in English might have some words that include
hyphens that should always be kept together on one line, or a word that
includes some other embedded punctuation that could serve as line-break
points if needed. As another example, a game written in Chinese wouldn't
really want line breaks to occur just anywhere; the conventions for
line-breaking in Chinese actually require that certain sequences of
characters, such as certain groups of punctuation marks, be kept
together, and don't allow line breaks to occur just before or after
certain types of punctuation.

It would be impossible to anticipate every possible line-breaking rule
for every language and every game, so the interpreter doesn't even try;
instead, the interpreter uses the rather simple set of rules outlined
above by default, but provides a set of special control sequences that
allow the game to override the default behavior whenever it wants. These
special controls are described below.

#### The Zero-Width Non-Breaking Space

The control that prevents a line break is called the "zero-width
non-breaking space." This is a special character, defined in the Unicode
standard, that can be written in TADS as "\uFEFF" (that "\u" is the TADS
way of entering a specific Unicode character code as a hexadecimal
number); it can also be written with an HTML markup,
`&zwnbsp;`. It's a "zero-width" character, which
means that it doesn't show up on the display: it's simply invisible as
far as the user is concerned. The "non-breaking" part is the special
feature: this tells the interpreter that it cannot break the line here,
even if it otherwise could.

To be more specific, the zero-width non-breaking space prevents a line
break from occurring between the two characters adjacent to it.
Essentially, this control is a bit of glue that sticks so strongly to
the characters on both sides that the line breaking rules can't tear
them apart.

Note that the glue only sticks to one side of each adjacent character.
So, if you put a \uFEFF character just before a space, and you're in
word-wrapping mode, the formatter can still break the line after the
space. If you want to prevent the space from being a line break at all,
you have to put a \uFEFF character on both sides of the space-one before
and one after.

#### The Zero-Width Space

The other main control is the "zero-width space," and it does
essentially the opposite of the zero-width non-breaking space: this
character enables a line break where the rules would otherwise not allow
it. This is another standard Unicode character, written in TADS as
"\u200B" or with the HTML markup `&zwsp;`. Like
\uFEFF, this is a zero-width character, so it's invisible on the
display. Otherwise, though, it counts as a space-which means that the
formatter, even in word-wrap mode, is free to break the line between the
two adjacent characters, as though they were separated by an ordinary
space.

You can use a zero-width space to add your own rules about where lines
can be broken. For example, suppose your game has a bunch of words where
you're using an equals sign as though it were a hyphen, and you want the
formatter to be able to break to the right of these equals signs just
like it would for hyphens. To do this, you would simply insert a \u200B
character immediately after each of these equals signs; this would tell
the interpreter that it can break the line just after the hyphen if
necessary.

#### The Non-Breaking Space

In addition to the zero-width non-breaking space, Unicode defines a
regular-width non-breaking space. This is written as "\u00A0", or with
the HTML markup `&nbsp;`. This type of space
looks exactly the same as an ordinary space (the kind you get by
pressing the space bar on the keyboard), but it behaves as though it
were a non-space character: the formatter never breaks a line at a
non-breaking space (thus the name), it never combines a non-breaking
space with adjacent ordinary spaces, and it never trims non-breaking
spaces from the beginning or end of a line. For line-breaking purposes,
the non-breaking space behaves as though it were an alphabetic
character.

Apart from the obvious difference in visual size, the non-breaking space
differs from the zero-width non-breaking space in that the zero-width
version is like glue-it prevents a line break from being inserted
between the adjacent characters. The ordinary non-breaking space,
however, merely acts like a non-space character; if the line-breaking
rules allow it, the formatter can break the line immediately before or
after an ordinary non-breaking space.

#### The Soft Hyphen

Another special control, the "soft hyphen," lets the game tell the
interpreter that it can break a word with hyphenation at a particular
point, but that it doesn't have to. The soft hyphen is another standard
Unicode character, "\u00AD", or equivalently in HTML,
`&shy;`.

Soft hyphens are normally invisible, so you can freely insert them into
words without adding visual clutter. When the formatter decides to take
advantage of a soft hyphen to break a line, though, the soft hyphen is
displayed as a normal hyphen at the end of the line.

## Whitespace Combining

The output formatter automatically combines runs of space characters.
Any time a series of consecutive space characters appear together, the
formatter combines them all into a single space.

This feature is useful because it frees the game of concerns about too
much or too little space when generating text. IF games often generate
text in pieces, stringing together a series of pre-written sentences and
phrases. Sometimes, it's difficult to know in advance how a particular
fragment will be combined with other fragments, which makes it hard to
anticipate exactly how many spaces there will end up being when
everything is put together. The formatter's automatic combination of
consecutive spaces simplifies this process greatly by allowing the
author to throw in excess spaces wherever there's any uncertainty about
the need for extra spaces; since the formatter will automatically get
rid of any extra spaces that aren't actually needed, the text as finally
displayed will look right in any case.

The formatter does not combine any of the typographical spaces with one
another, because the game is asking for a specific amount of spacing
when it uses these characters. However, when an ordinary space (the kind
you get by pressing the space bar on the keyboard)-or a run of ordinary
spaces-is adjacent to a typographical space, the formatter removes the
ordinary space or spaces and keeps only the typographical space. For
example, if the game writes the string " \u2002 \u2003 " (three ordinary
spaces, an en space, two more ordinary spaces, an em space, and three
more ordinary spaces), TADS will display only an en space followed by an
em space: all of the runs of ordinary space are removed, since they're
all adjacent to typographical spaces.

## Newline Combining

Just as the formatter combines each run of ordinary spaces into a single
space, it combines each run of newline ("\n") sequences into one line
break. This feature is similar in purpose to whitespace combining, in
that it allows the game to display "\n" sequences wherever it wants a
line break, without worrying about whether some other piece of code just
displayed another line break or is about to display another one.

Because "\n" sequences are combined, it's not possible to use "\n" to
display an entirely blank line. To display a blank line, use the "\b"
sequence: this ends any current line, just like "\n", but then displays
a blank line. The formatter does not combine "\b" sequences: if you want
two blank lines, just write out "\b\b".

## Whitespace Trimming

Just as the output formatter consolidates each run of ordinary spaces
down to a single ordinary space, the formatter completely eliminates (or
"trims") spaces at the beginning and end of a line of text.

At the start of a line, the formatter trims only ordinary spaces.
Typographical spaces at the start of a line are preserved exactly as
given.

Note that during line breaking, the formatter always breaks at the
rightmost edge of a run of spaces (ordinary or typographical). This
means that line breaking always results in trailing spaces (spaces at
the end of a line), never leading spaces (spaces at the start of the
next line). The only way to put spaces at the start of a line is to put
them after an explicit line break (such as a "\n" or "\b" character, or
a  
markup).

At the end of a line, the formatter trims all trailing spaces, including
typographical spaces. However, the formatter does not trim any trailing
spaces that precede any sort of non-breaking space (zero-width or
ordinary). If you want trailing spaces to appear, simply put a
zero-width non-breaking space after the last space you want to preserve
as a trailing space. (In most cases, it simply doesn't matter whether or
not trailing spaces are trimmed, because spaces at the end of a line are
usually invisible-they're just extra blank pixels, after all. However,
trailing spaces can be visible under certain conditions, such as when
the text is underlined or has a background color different from the
window's prevailing background color.)

## TAB Alignment

The character-mode text-only interpreters and the multimedia
interpreters provide support for the HTML 3.0
`\<TAB\>` tag. This can be used for fairly
complex alignment effects, including centering text or aligning it at
the right edge of the window, and simple data tables. Refer to the HTML
TADS documentation for full details on how to use
`\<TAB\>`.

Since the `\<TAB\>` tag is usable on both
character-mode and multimedia interpreters, it's usually preferable to
use `\<TAB\>` instead of
`\<TABLE\>` for simple alignment.
`\<TABLE\>` is considerably more powerful, since
it provides both horizontal and vertical alignment capabilities, and
does a great deal of complex layout work automatically; but
`\<TABLE\>` is only available on the multimedia
interpreters, so using it can hurt a game's usability on other
interpreters. If you must use `\<TABLE\>` (and
there often is no substitute), you should consider providing an
alternative format for character-mode platforms.

The GUI text-only interpreters do not support either
`\<TAB\>` or
`\<TABLE\>`; it's not possible to create any
sort of text alignment effects on these interpreters. This is due to the
use of proportional type without full HTML support; eventually, these
interpreters should be superseded by full HTML versions, so this should
be a short-term limitation.

## Typographical Spaces

In most computer text applications, there's just one kind of "space"
character: the kind you get when you press the space bar on the
keyboard. This ordinary space character is the one-size-fits-all visual
separator to fill in the spaces between words, sentences, and everything
else.

In traditional typography, printers (the people, not the computer
peripherals) use a whole range of spacing sizes, with spaces of
particular sizes for particular situations. The differences in space
sizes tend to be pretty subtle, so the one-size-fits-all world of simple
computer typography is a good enough approximation for most people and
for most informal material. However, the finer gradations of spaces used
in traditional typography are often indispensable for fine-tuning a
layout or for creating special effects that aren't possible with
ordinary space-bar spaces.

In addition to the ordinary space character (the kind you get when you
press the space bar on your computer's keyboard), the Unicode standard
defines a number of special space characters for these sorts of
typographical effects, and TADS 3 supports many of these.

Naturally, character-mode platforms can't display spaces at arbitrary
sizes; they're stuck with just one kind of space. TADS 3 accommodates
character-mode by approximating the typographical spaces as a number of
ordinary spaces. The wide spaces turn into two or three ordinary spaces,
the thinner spaces turn into one space, and the very thin spaces turn
into zero spaces. The approximation is meant to provide results that
look natural for character-mode renditions; fortunately, this sort of
mapping is long established thanks to typewriters and early computer
printers, so TADS 3 simply tries to use the same conventions that people
have long been using for typewritten text.

The GUI text-only interpreters could in principle provide true
proportional renditions of the typographical spaces, but at the moment
they don't; they simply use the same approximations as the
character-mode interpreters. (If these interpreters come back into
widespread use at some point, then someone might become motivated to
enhance them proper support for typographical spaces; at the moment,
this doesn't seem likely.)

The table below shows the supported typographical space characters and
how they're displayed on the different interpreters.

Name

Unicode

HTML

Multimedia Appearance

Text-Only/Fixed-Pitch Appearance

Comments

en space

\u2002

`&ensp;`

Half an em space

Two spaces

This amount of space is sometimes used after sentence-ending punctuation
(such as a period or question mark).

Em space

\u2003

`&emsp;`

Depends on the font; usually equal to the font's point size in width

Three spaces

Three-per-em space

\u2004

`&tpmsp;`

One-third the width of an em space

Two spaces

Four-per-em space

\u2005

`&fpmsp;`

A quarter of an em space

One space

In most fonts, the ordinary space is about this size.

Six-per-em space

\u2006

`&spmsp;`

One-sixth of an em space

One space

Figure space

\u2007

`&figsp;`

Equal in width to a digit zero ("0")

One space

Punctuation space

\u2008

`&puncsp;`

Equal in width to a period (".")

None (zero spaces)

Thin space

\u2009

`&thinsp;`

One-fifth of an em space

One space

Hair space

\u200A

`&hairsp;`

One-eighth of an em space

None (zero spaces)

This can be used to separate punctuation marks that would otherwise run
together, such as a double quote from a nested single quote.

Quoted space

"\\ "

``

Same as ordinary space

Same as ordinary space

Note that the "text-only" appearance described in the table applies to
both text-only interpreters and fixed-pitch fonts in multimedia
interpreters. The multimedia interpreters use the text-only version of
the spacing for fixed-pitch fonts to preserve the fixed-pitch nature of
the fonts; using true proportional spacing for fixed-pitch type would
throw off the uniform character alignment of these fonts.

## Interpreter Classes

There are three different main types, or "classes," of interpreter. You
can use any interpreter to run any game, so there's no need to compile
your game specially for different interpreters; the different types of
interpreters do have some differences in the way they display output,
though.

The interpreter classes are:

- Multimedia (also known as HTML, although this is misleading because it
  suggests that the other classes of interpreters don't recognize any
  HTML, when in fact they all do understand HTML; but only the
  Multimedia interpreters can handle the full complement of HTML
  features). This class of interpreters includes HTML TADS on Windows
  and HyperTADS on Macintosh. Multimedia interpreters run on graphical
  operating systems, and can display the full range of HTML effects,
  including graphics, sounds, and all text formatting effects.
- Character-mode Text-only. This class includes every interpreter that
  runs on a character-mode system, such as DOS (or within a DOS command
  prompt on Windows); a few GUI systems, such as Amiga, also fit this
  class. The character-mode interpreters can display only one
  fixed-pitch typeface for the entire application; they cannot display
  most text effects (such as italics, underlines, or the like), although
  many can display colored text and some sort of highlighting (using a
  brighter color or a boldface appearance in most cases); they can't
  display graphics or sounds. These interpreters only support the
  text-only subset of HTML, detailed in the HTML TADS documentation;
  however, they accept all valid HTML, and simply ignore markups that
  are outside the text-only subset. Most of these interpreters support
  the banner API, although with some limits on the available window
  styles (they don't provide scrollbars on banner windows, for example).
- GUI Text-only. This class includes only a few interpreters, and in all
  likelihood, the full Multimedia interpreters will eventually supersede
  this class entirely; so, while we mention these interpreters for the
  sake of completeness, we don't think it's worth spending a lot of time
  worrying about ensuring compatibility with these systems. (In fact,
  the main existing GUI Text-only interpreters are MacTADS and MaxTADS
  on the Macintosh, and WinTADS on Windows; since Multimedia
  interpreters are available for both of these platforms, it seems
  unlikely that these GUI text-only interpreters will be widely used or
  vigorously maintained.) The GUI Text-only interpreters are similar in
  capabilities to the Character-mode Text-only interpreters; the main
  difference is that they can display the text-only data using
  proportionally-spaced typefaces. This is a mixed blessing; it makes
  them look prettier and more "native" for their respective operating
  systems, but it also limits their capabilities relative to the
  character-mode interpreters. For example, the proportional text makes
  it impossible to rely on fixed character spacing for alignment
  effects. The GUI text-only interpreters have the following limits
  relative to the character-mode interpreters:
  - The GUI text-only interpreters don't support the markup for text
    alignment.
  - They don't support any of the line-breaking control sequences or
    `\<WRAP CHAR\>` mode.
  - They don't support the typographical spaces.
  - None of these interpreters currently support the banner API (unlike
    the previous items, it's technically possible for these interpreters
    to support the banner API; but with their current minimal
    maintenance attention, it's unlikely that this will ever be
    implemented)

Despite the differences, most games can be written without any special
code to handle the different interpreter types. This is possible because
all of the interpreters understand HTML; the text-only interpreters,
which only handle a subset of HTML, silently ignore any HTML markups
that they can't use. Ignoring HTML markups is often not as bad as it
might at first appear. In many text-based IF games, the more advanced
HTML features, while very useful to create the particular appearance the
author wants, are to some extent window dressing; so when the game is
run on a text-only interpreter, some of the visual appeal of the game
might be lost, but the essence is preserved and the game remains fully
playable. Some people even prefer the purer, most subdued appearance of
the text-only display style.

In some cases, though, a game uses HTML for more than just fancy text
effects, and can't afford to have the HTML ignored. In these cases, the
game can check at run-time to determine the capabilities of the
interpreter, and use an alternative display style when running on a
text-only interpreter. This approach is a little more work than coding a
single set of HTML that produces acceptable results on all interpreters,
but it allows the game to take full advantage of the HTML features when
available, while still providing a working game for text-only platforms.
For example, a game might want to use a set of hyperlinks to implement a
menu when running on an multimedia interpreter, so that players can
click on links to select actions; but because the text-only systems
don't support hyperlinks, the game could check the interpreter class and
provide a numbered list of options when running on a text-only system.
Or, a game might want to use pictures or sound effects to convey some
key information in the story; when running on a text-only system, where
these can't be displayed, the game could instead provide the information
with some added text that doesn't appear when the game is played with a
multimedia interpreter.

To determine the interpreter class, a game can call
`systemInfo(SysInfoInterpClass)`. This returns
`SysInfoIClassText` for a character-mode
text-only system, `SysInfoIClassTextGUI` for a
GUI text-only system, and `SysInfoIClassHTML`
for a full multimedia interpreter. (See the [tads-io](tadsio.html)
function set for details.)

## Caps/no-caps flags

There are two special string sequences that let you control
capitalization of the next character displayed. These are handy in
situations where you want to write "boilerplate" text that plugs in
substitution parameters. If you're writing a message that plugs in a
value at the start of a sentence, for example, you'll want to make sure
the first character of the substituted text is capitalized.

The `\\` sequence is the "caps flag." When you
display this in a text window, it causes the next character displayed to
be converted to upper-case.

The `\v` sequence is the "no-caps flag." When
you display this in a text window, it causes the next character
displayed to be converted to lower-case.

The output formatter tries to handle the "caps" and "no-caps" flags
smoothly when combined with HTML markups. In particular, the output
formatter watches for `\<...\>` and
`&...;` sequences in the output stream, and wait
to apply a caps or no-caps flag until *after* any markups have been
passed. For example, if you display this:

```
    "\^<a href='testing'><i>hello</i></a>\n";
```

then the effect of the caps flag on the output stream will be as
follows:

```
    <a href='testing'><i>Hello</i></a>\n
```

Note how the output formatter waits to apply the caps flag until after
all of the intervening markups. This is desirable, since the caps flag
would have effectively been "lost" if it had applied to the first
alphabetic character after the flag - that would have been the "a" in
the `\<a\>` tag, and there would have been no
point in capitalizing that character, as it's just the name of a tag.

This behavior ensures that caps and nocaps flags won't be lost if the
substituted parameter happens to contain some markup text. The flag will
apply to the actual text displayed, not to HTML codes.

## Notes for TADS 2 users

The display system in TADS 3 is essentially the same system that was
used in TADS 2, but it has been substantially improved in a few areas.
To summarize the differences from TADS 2:

- Unlike in TADS 2, the TADS 3 output system always interprets output as
  HTML; there's no mode switching, and there's no need to worry about
  whether the game will be played on an interpreter with HTML support or
  not. Every TADS 3 interpreter supports HTML, and HTML parsing is
  always in effect. (As in TADS 2, though, there are some differences in
  the capabilities of the different interpreter classes. The text-only
  interpreters generally support only a small subset of HTML, and
  silently ignore what they don't understand.)
- TADS 3 has a new "character-wrapping" mode, suitable for East Asian
  languages and also potentially useful in Western languages for
  situations where custom line-breaking is needed.
- The line-breaking rules have been simplified by the elimination of the
  rule that spaces before hyphens can't serve as break points, and by
  the elimination of automatic double-spacing after sentence-ending
  punctuation.
- A set of control sequences givesthe game complete control over line
  breaking, by allowing the game to specify places where breaks are
  allowed or prohibited even when the default rules say otherwise.
- A set of typographical spaces gives the game fine control over visual
  spacing in the multimedia interpreters, with suitable approximations
  in the text-only interpreters.



------------------------------------------------------------------------



*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="ui.html" class="nav">The User Interface</a> \> The Output
Formatter  
<span class="navnp"><a href="ui.html" class="nav"><em>Prev:</em> The User Interface</a>
    <a href="dispfn.html" class="nav"><em>Next:</em> The Default Display
Function</a>     </span>


