---
---
HTML TADS deviations from standard HTML specifications

# HTML TADS Deviations from Standard HTML Specifications

**Contents**

- [Introduction](#introduction)
- [TADS-Specific Additions](#tadsAdditions)
- [HTML 3.0 Additions](#additions)
- [Deviations from standard HTML 3.2 Tag Behavior](#deviations)
- [Unimplemented HTML 3.2 Tags](#unimplementedTags)

  
<span id="introduction"></span>

### Introduction

This document describes differences between HTML TADS and the standard
versions of HTML.

HTML TADS is based on the HTML 3.2 reference specification, which is a
W3C (World Wide Web Consortium) recommendation document that can be
found at <http://www.w3.org/pub/WWW/TR/>. HTML 3.2 is a widely deployed
"markup" language; it's supported by most of the popular web browsers
currently available.

The primary reason that HTML TADS is based on HTML 3.2 is that HTML 3.2
is widely known and is reasonably powerful. Since copious documentation
on HTML is available, game designers should have no problem learning how
to use HTML TADS. While I've tried to follow the HTML 3.2 standard as
closely as possible, so that game designers can readily apply their HTML
knowledge to writing games, there are probably many existing web pages
that won't work properly with HTML TADS. HTML is a quirky and somewhat
nebulously-defined language, and the behavior varies substantially from
one browser to another, all of which makes it difficult to implement a
browser that will handle every web page. Fortunately, HTML TADS is not a
general-purpose web browser, so it shouldn't ever see most of these
problematic pages.

In addition to HTML 3.2, there is also a proposal for a version called
HTML 3.0. Surprisingly, while HTML 3.2 is a more recent version of the
language, it's not a superset of HTML 3.0; in fact, HTML 3.0 is
considerably more powerful than 3.2. This is somewhat confusing, because
a higher version number on a standard usually implies some degree of
backward compatibility with the older versions. What happened in this
case is that HTML 3.0 never became a "standard," and was never widely
adopted; while work on the proposal for HTML 3.0 was underway, the HTML
3.2 specification was developed based on the older 2.0 standard.

In the meantime, because HTML 3.0 has some very nice and useful
features, I've incorporated a few of its features into HTML TADS. These
additions don't interfere with normal HTML 3.2 behavior, so a game
designer familiar with HTML 3.2 should be able to use HTML TADS without
having to learn about HTML 3.0. See the section on [HTML 3.0
additions](#additions) for details.

In addition, HTML TADS has a few extra features that are specific to the
TADS implementation. These features don't have any equivalent in normal
HTML, so I've added extensions to the language to accomodate. See the
section on [TADS additions](#tadsAdditions) for details.

HTML TADS does not incorporate the extended features of HTML 4.0 or any
of the variants of DHTML.

I have tried not to deviate from HTML standards capriciously or
needlessly, which is why most of the extensions that I've chosen to
implement are based on HTML 3.0 rather than being entirely unique to
HTML TADS. I've tried to keep HTML TADS compatible with the HTML
standards as much as practical to reduce the amount you need to learn
beyond standard HTML to use HTML TADS.  
  

------------------------------------------------------------------------

<span id="tadsAdditions"></span>

### TADS-Specific Additions

Roll-over Images

An extension to the \<IMG\> tag provides a way of implementing simple
roll-over images. A roll-over image is a hyperlinked image that has up
to three different appearances: a normal appearance, a second appearance
when the mouse is hovering over the hyperlink, and a third appearance
when the mouse button is being held down with the mouse over the
hyperlink. Using roll-overs can give a user interface a more lively
feel, since the active elements respond visually as the mouse approaches
them.

In HTML designed for viewing in Web browsers, site designers can use
Javascript to implement roll-over buttons. HTML TADS does not include
Javascript support, so it has to provide its own non-standard mechanism
for roll-overs.

**Important:** The roll-over extensions work **only** with hyperlinked
images (i.e., images nested within \<A HREF\> tags). You cannot create a
roll-over image that is not hyperlinked.

The HTML TADS roll-over extensions consist of a pair of new attributes
of the \<IMG\> tag: HSRC and ASRC. Both of these attributes are
optional, and each takes a URL to an image resource, just like a
standard SRC attribute does. The HSRC attribute, if present, specifies
the image resource to use for the "hovering" appearance of the image:
this is displayed when the mouse is over the hyperlink, but the button
isn't being pressed. The ASRC attribute specifies the image to use for
the "active" appearance: this is displayed when the mouse button is
being held down over the hyperlink. You can use any supported image file
format (including MNG animated images) for the HSRC and ASRC images.

You can specify one or both of ASRC and HSRC. If you specify only HSRC,
the same image is used for both the "hovering" and "active" appearances.
If you specify only ASRC, the image will use its regular SRC image for
the "hovering" appearance.

Here's an example of an IMG tag that specifies separate images for all
three appearances:

       <A HREF='test'><IMG SRC='button_normal.png'
           ASRC='button_active.png' HSRC='button_hover.png'></A>

For proper display, you must ensure that all of the images for the
different appearances used in a single \<IMG\> tag are the same size.

#### \<BANNER\>

BANNER is a tag from HTML 3.0 that allows a document to create a
non-scrolling area on the screen, and display arbitrary HTML markups
within this area. HTML TADS uses BANNER, with a few extensions, to
implement the "status line" that traditional text adventure games
display across the top of the screen to show, for example, the current
location and score.

Refer the to [full description of the BANNER tag](banners.html) for
details on how to use this feature. <span id="Achanges"></span>

#### \<A HREF\>

The \<A\> tag lets you set up a normal web-style hyperlink, *or* a
special form of hyperlink that enters a command, as though the user had
typed some text into the command line.

Internet hyperlinks come in handy for things like referring players to
your game's web site, or providing a clickable link that lets the user
send you email. You can create an internet hyperlink by specifying an
HREF that starts with one of these "scheme" identifiers: ` `

- http:
- https:
- ftp:
- news:
- mailto:
- telnet:

If your HREF text starts with one of the scheme identifiers above, the
interpreter treats it as an internet hyperlink. HTML TADS doesn't
contain a web browser or a newsreader or an FTP client, of course, so
the interpreter handles an internet link simply by launching the
appropriate external application. For example, if the player clicks on a
hyperlink whose HREF starts with "http:", HTML TADS will launch the
local computer's web browser application and tell it to navigate to the
given URL. If there is no appropriate application installed on the
player's computer, or if it's not possible to launch the application,
HTML TADS pops up an error dialog.

Any HREF that *doesn't* start with one of the scheme identifiers listed
above is a *command hyperlink*. When the player clicks on a command
link, HTML TADS simply treats the HREF text as a new command, and enters
it on the command line as though the user had typed that text.

By default, when a command link is clicked, the interpeter first clears
out any old text that was on the command line (that is, any text that
the user was in the process of entering), then puts the HREF text on the
command line instead, then enters the command immediately, as though the
user pressed the Enter key. This is usually what you want, since it
makes a command link fully self-contained: just click on it, and its
command takes effect immediately, even if other text was already on the
command line. However, you can customize this behavior if you want,
using two special attributes (which aren't part of standard HTML, of
course):

- The APPEND attribute (which takes no value) tells the interpreter
  *not* to clear any existing command text before entering the HREF
  text. If this attribute is present, HTML TADS will leave any existing
  text on the command line, and append the HREF text to the end of the
  existing text.
- The NOENTER attribute (which also takes no value) tells HTML TADS not
  to act like the user had pressed Enter, but instead to simply put the
  HREF text on the command line and return to command editing. This lets
  the user continue adding to or editing the HREF text after clicking
  the hyperlink.

The APPEND and NOENTER attributes are especially useful if you want to
create a "command builder" type of user interface. For example, you
could provide a list of verb hyperlinks in one window; any verb that
takes a direct object would have the NOENTER attribute, so that clicking
the verb link would clear out any old command, add the verb text to the
command line, and then wait for an object name to be added. In a
separate window, you could show a list of object hyperlinks, which would
have the APPEND and NOENTER attributes; clicking one of these would add
the object name to the verb that the player had just clicked.

Internet hyperlinks have no effect on the command line, so the APPEND
and NOENTER attributes are ignored for internet links.

Another special non-standard attribute, PLAIN, lets you show a hyperlink
as though it were normal text. This attribute takes no value. When you
include the PLAIN attribute with a \<A\> tag, the interpreter will know
that the enclosed text is a hyperlink, but it'll render the text without
any special hyperlink style - there won't be an underline or a special
color, for example. The hyperlinked text will still act like a link, so
any other (system-dependent) user-interface cues that indicate the text
is a link will still be in effect; for example, the mouse cursor might
still change shape when the mouse is moved over the linked text. The
purpose of the PLAIN style is to let you show a link unobtrusively,
without the normal decorations that accompany links - but note that you
should avoid using it to hide important links from the user. It's best
used for informational links that are provided as a convenience. Be
careful that you're not using it to force the user to play "find the
pixel."

#### \<TAB MULTIPLE\>

As described in the [TAB](#TABadditions) section on [HTML 3.0
Additions](#additions), HTML TADS supports the \<TAB\> feature of HTML
3.0. Note, though, that the \<TAB MULTIPLE\> feature is a TADS-specific
extension of the HTML 3.0 extension.

#### <span id="TABLEadditions">Tables</span>

The \<TABLE\> tag accepts a HEIGHT attribute that lets you set an
explicit height for the table. (This extension is supported by some of
the popular browsers, but is not part of either the HTML 3.2 or 3.0
specifications.) As with the WIDTH attribute, the HEIGHT attribute can
be specified as a pixel size or as a percentage of the total height of
the display window; this is be useful for achieving special vertical
alignment effects.

Note that a percentage value of HEIGHT in an embedded TABLE tag (a table
embedded within another table) still bases the table's height on the
window's height, not on the enclosing table row's height. This is
different than WIDTH with a percentage value, which bases an embedded
table's width on the width of the column containing it.

For details on how the system lays out tables, see [Table Layout
Rules](tables.html).

The CAPTION tag takes both ALIGN and VALIGN attributes. If ALIGN is set
to TOP or BOTTOM, CAPTION behaves as it does in HTML 3.2. However, ALIGN
can also be set to LEFT, CENTER, or RIGHT. If you want to control both
horizontal and vertical alignment explicitly, use ALIGN for horizontal
alignment, and use VALIGN for vertical alignment. The defaults are
ALIGN=CENTER and VALIGN=TOP. If ALIGN is specified as TOP or BOTTOM,
this is equivalent to setting VALIGN to the same value and using
ALIGN=CENTER.

The BGCOLOR attribute can be used to specify the background color of an
entire table (TABLE tag), all of the cells in a row (TR tag), or of an
individual cell (TD or TH tags). The cell BGCOLOR setting overrides any
setting inherited from the row, which in turn overrides the setting
inherited from the table.

If a table has an ALIGN attribute value of LEFT or RIGHT, the renderer
shows the adjoining text flowing around the table - that is, a table
with ALIGN=LEFT is placed in the left margin, with the adjoining text
filling the area to the table's right, and an ALIGN=RIGHT table is
placed in the right margin with text filling the area to its left. This
is standard, although optional, behavior. However, HTML TADS deviates
from the standard by treating a table with ALIGN=LEFT or ALIGN=RIGHT as
an "in-line" item rather than a "block" item, which means that such a
table does *not* cause a paragraph break in the visual display. Instead,
a table with ALIGN=LEFT or ALIGN=RIGHT is treated visually exactly as
though it were an \<IMG\> tag with the same alignment. This behavior,
while non-standard, is actually consistent with the most popular web
browsers, and allows greater flexibility for special text layout
effects. If a paragraph break is desired, the author can simply insert a
\<P\> tag explicitly before and/or after the table. If no flow-around is
desired at all, a \<BR CLEAR=ALL\> tag can be used immediately after the
table's closing \</TABLE\> tag.

#### Sound

HTML TADS provides support for sound and music through the \<SOUND\>
tag, which is an extension to HTML. Refer to [HTML TADS Sounds and
Music](sound.html) for details on how to use this extension.

#### ABOUTBOX

The new \<ABOUTBOX\> tag allows you to define the contents of an "about
box" for your game. On most GUI systems, by system-dependent convention,
applications provide a menu item called "About" that displays a dialog
box showing the name, version, and other relevant details of the
application.

HTML TADS lets you define an about box for your game using this new tag.
To define an about box, display the \<ABOUTBOX\> tag to start the
information you want to include in the dialog, then display any HTML
text, then display the \</ABOUTBOX\> closing tag. You will probably want
to put this display in your `init` function, since you'll only need to
display it once, at the beginning of the game.

Here's an example of using the tag. Note that we put the about box code
in the `commonInit` function, because we want to make sure that this
text is displayed whenever the game is loaded, regardless of whether
it's loaded with a saved game or not. We assume in this example that
your `init` and `initRestore` functions (one of which the system
automatically calls at startup, depending on whether the player starts
your game from the beginning or with a saved game) each call your
`commonInit` function (which the system does *not* automatically call,
but is merely a convention used in std.t).

        commonInit: function
        {
            /* run this game in HTML mode */
            "\H+";

            /* set up the about box for the game */
            "<AboutBox>
            <body bgcolor=silver>
            <H3 align=center>A Sample Game</H3>
            <center>
            This is a sample game that demonstrates
            some exciting new HTML TADS features.
            </center>
            </AboutBox>";
        }

The information within the ABOUTBOX tag doesn't show up in the normal
text window. Instead, TADS captures the information and stores it away,
so that it can be displayed when the user brings up the "About this
game" dialog. (The "About this game" command is on the "Help" menu in
the Windows version of HTML TADS. If the game never defines an about
box, the menu item is disabled.) When the user displays the game's about
box, HTML TADS opens a dialog box showing the ABOUTBOX information.

#### \<WRAP\>

The \<WRAP\> tag is a TADS extension that lets the game switch between
word-wrapping and character-wrapping display modes. This is discussed in
detail in [Word Wrapping and Line Breaking](linebrk.html).

#### Additional Character Markups

HTML TADS has a few character markups that aren't in the normal set, to
provide access to some typographical characters that normal HTML doesn't
provide. Note that these extensions are compatible with HTML 4.0.

- &lsquo; produces a left single quote
- &rsquo; produces a right single quote
- &ldquo; produces a left double quote
- &dsquo; produces a right double quote
- &sbquo; produces a single low-9 quote
- &bdquo; produces a double low-9 quote
- &ndash; produces an en-dash
- &mdash; produces an em-dash
- &trade; produces a superscripted "TM" (trade mark) symbol
- &lsaquo; produces a single left angle quote
- &rsaquo; produces a single right angle quote
- &dagger; produces a dagger
- &Dagger; produces a double-dagger
- &OElig; produces a capital "OE" ligature
- &oelig; produces a small "oe" ligature
- &Yuml; produces a capital "Y" with an umlaut (diaeresis)
- &permil; produces a per-thousand sign
- &scaron; produces a small letter "s" with caron
- &Scaron; produces a capital letter "S" with caron

Many of these characters map to their regular ASCII equivalents for
systems whose character sets do not include the typographical
characters. In particular, &lsquo; and &rsquo; map to an apostrophe,
&ldquo; and &rdquo; map to a double-quote character, and &endash; and
&emdash; map to a hyphen. Other characters listed have no direct ASCII
equivalent, and may render as a blank in character sets without these
character.

In addition to the entities listed above, HTML TADS supports all of the
named entities in HTML 4 in the section "symbols, mathematical symbols,
and Greek letters." In fact, HTML TADS supports nearly all of the HTML 4
named entities; the only entities not currently supported are the
joiners/non-joiners (zwnj, zwj) and the bidirectional markers (lrm,
rlm).

Because the list of HTML 4 named entities is lengthy, it's not included
here; refer to the [HTML 4.0
specification](http://www.w3.org/TR/REC-html40/sgml/entities.html) for
the full list.

HTML TADS also supports the ISO Latin-2 named entities. ISO Latin-2 is a
character set designed for Eastern and Central European languages. The
Latin-2 named entities are not part of the standard HTML specification,
but some provide this set of entities as an extension. Refer to the
[HTML TADS Latin-2](latin2.html) table for the complete list.

#### Typographical Spaces

In most computer text applications, there's just one kind of "space"
character: the kind you get when you press the space bar on the
keyboard. This ordinary space character is the one-size-fits-all visual
separator to fill in the spaces between words, sentences, and everything
else.

In most professional typography, the spacing between charaters can be
varied continuously. Even so, typographers have traditionally found it
convenient to call out certain specific spacing sizes and give them
names. Typographers have a whole range of named spacing sizes; the
differences among the named sizes tend to be pretty subtle, so the
one-size-fits-all world of simple computer typography is a good enough
approximation for most people and for most informal material. However,
the finer gradations of spaces used in traditional typography are often
useful for fine-tuning a layout or for creating special effects that
aren't possible with ordinary "space-bar" spaces.

HTML TADS provides a number of these special spacing sizes. You can
access these using special HTML character-entity markups. Here's the
list:

- &ensp; produces an "en" space (half the width of an em space)
- &emsp; produces an "em" space (equal in width to the font point size)
- &tpmsp; produces a three-per-em space (one-third the width of an em
  space)
- &fpmsp; produces a four-per-em space (one-fourth the width of an em
  space)
- &spmsp; produces a six-per-em space (one-sixth the width of an em
  space)
- &figsp; produces a figure space (equal in width to a digit zero, "0")
- &thinsp; produces a thin space (one-fifth the width of an em space)
- &puncsp; produces a punctuation space (equal in width to a period,
  ".")
- &hairsp; producdes a "hair space" (one-eigth the width of an em space)

Note that &ensp, &emsp, and &thinsp are all standard HTML 4.0 entities.
The others are HTML TADS extensions.

Any ordinary whitespace adjacent to a typographical space is subsumed
into the typographical space (that is, the ordinary space is not shown).
However, adjacent typographical spaces are *not* merged; the renderer
assumes that you want exactly the amount of space you ask for when you
use typographical space markups.

Note that each typographical space is displayed as one or more ordinary
spaces in a fixed-pitch font, in order to maintain the uniform character
spacing of these fonts. In particular, the em space is shown as three
spaces; the en and three-per-em are shown as two spaces each; the hair
and punctuation spaces are invisible; and the rest are shown as one
space apiece. Text-only TADS interpreters use the same approximations.
<span id="param_fonts"></span>

#### Parameterized Fonts

The FONT tag's FACE attribute (which is an HTML 3.0 extension) accepts,
in addition to actual system font names, a set of "parameterized" font
names. These parameterized names let you specify a style of font more
specifically than you can with any of the HTML phrase-level style
markups, while still retaining portability.

When you use a parameterized font, instead of naming a system font
explicitly, you name a special pseudo-font. HTML TADS maps this name to
an actual font at run-time according to the fonts available on the
system. Because the mapping is done at run-time, the parameterized fonts
are portable -- the HTML TADS interpreter chooses an appropriate mapping
for the current system when the game is played. In addition, on some
systems, HTML TADS allows the player to choose the mapping through a
preferences mechanism, so parameterized fonts give both the game author
and the player control over the presentation: the game author specifies
the abstract style desired, and the player chooses the final display
appearance.

Here are the available parameterized font names:

- `TADS-Serif` - a serifed font. This font will usually be
  proportionally spaced.
- `TADS-Sans` - a sans serif font, usually proportionally spaced.
- `TADS-Script` - a script or cursive font, usually proportionally
  spaced.
- `TADS-Typewriter` - a typewriter-style font, usually monospaced.
- `TADS-Input` - a font selected by the player for command input.

You should consider using parameterized fonts whenever possible rather
than explicit system font names. Using explicit system font names
creates portability problems not only to different types of computers,
but even to the same type of computer, because you can't always be sure
of which fonts a player will have installed. Parameterized fonts provide
much better portability, because HTML TADS will determine which actual
system font to use at run-time.

Note that you can also use parameterized font names as a fallback for an
explicit system font for when the font is not installed. A common
strategy that web page designers employ when specifying fonts is to
specify a series of fonts that are common on various platforms as
substitutes for a particular system font; for example, Arial on Windows
is similar to Geneva on Macintosh, so Geneva is often used as a fallback
for Arial. You can take this one step further using a parameterized
font. Since the parameterized font lets you specify the style of font
you want, you can use it to provide a good substitute when the font you
really want isn't present. For example, since Arial is a sans serif
font, you might specify TADS-Sans as a fallback when Arial isn't
installed:

        <font face='Arial,Geneva,TADS-Sans'>

Here's an example of selecting a script-style font using the
parameterized font mechanism.

        "The wedding invitation reads:
        <p>
        <center>
        <font face='TADS-Script'>
        Mr.\ and Mrs.\ Dimwit Flathead III
        <br>request
        <br>The Honour of Your Presence
        (etc.)
        </font>
        </center>";

You'll probably use the `TADS-Input` font a little differently than the
others. This font is meant only for text entered by the player on
command lines; the point is to allow the player to select the font and
style (including color, bold, and italic settings) that should be used
for entering commands. Normally, you should define a `commandPrompt`
function and a `commandAfterRead` function like this:

        commandPrompt: function(code)
        {
            "&gt;<font face='TADS-Input'>";
        }
        commandAfterRead: function(code)
        {
            "</font>"
        }

The `commandPrompt` function displays the usual prompt ("\>", using the
HTML entity name for the greater-than sign, "&gt;"), then establishes
the `TADS-Input` font, which uses the font for text entered by the
player. After the player finishes editing the command and presses Enter,
the `commandAfterRead` function closes the \<FONT\> tag to restore the
previous font.

Note that the standard library file std.t includes a definition of the
`commandPrompt` and `commandAfterRead` functions as shown above, so if
you don't override these functions, you'll get this new behavior by
default. <span id="colors"></span>

#### Parameterized Colors

Several tags have attributes that let you specify a color setting; for
example, you can set the color of a run of text using the FONT tag with
a COLOR attribute:

        <FONT COLOR=RED>This is some red text!</FONT>

For these settings, standard HTML defines a set of color names (BLACK,
SILVER, GRAY, WHITE, MAROON, RED, PURPLE, FUCHSIA, GREEN, LIME, OLIVE,
YELLOW, NAVY, BLUE, TEAL, and AQUA), and also accepts explicit
hexadecimal RGB values (for example, COLOR=#203040 specifies a color
with hex 20 intensity in red, hex 30 intensity in green, and hex 40
intensity in blue, with each intensity on a scale from zero to hex FF).

While the HTML color attributes provide considerable flexibility and
control in defining your game's display characteristics, they also
remove control from the player and from the operating system. On some
displays, particular combinations of colors and fonts may produce
unreadable text, and in many cases players may wish to choose certain
settings for themselves because they prefer a certain color scheme.

HTML TADS provides an extension to the standard HTML color system that
provides for some player customization and still lets the game author
specify most of the display characteristics. These new colors are called
"parameterized" colors, because they do not refer to hard-coded RGB
values the way that other HTML colors do, but instead refer to specific
parameters that are chosen at run-time. On some systems, the player can
set the colors through a preferences mechanism, while on others the
system may choose appropriate colors for the display device.

To use the parameterized colors, simply use the parameterized color
names in place of the ordinary HTML color names. For example, the
default status line code in `adv.t` uses these settings for the status
line:

        <body bgcolor=statusbg text=statustext>

The parameterized color names are listed below.

- `alink`: "active" hyperlink text color (the exact meaning of "active"
  varies by system; on Windows, this is the color of hyperlink text
  while the mouse button is being held down with the mouse pointer over
  the link, so the user is in the process of clicking on the link but
  hasn't yet released the mouse button).
- `bgcolor`: the default background color (note that this is the default
  background color, not necessarily the current color; this is usually
  the color set in the user's preferences)
- `hlink`: the "hovering" hyperlink text color (the exact meaning of
  "hovering" varies by system, but usually means that the mouse cursor
  is positioned over a hyperlink without the mouse button being held
  down).
- `link`: hyperlink text color.
- `statusbg`: status line background color.
- `statustext`: status line text color.
- `text`: the default text color (note that this is the default text
  color, not necessarily the current color; this is usually the color
  set in the user's preferences)
- `input`: the text color for command line input. On some interpreters,
  the user preferences allow this to be set independently of the normal
  text color; some users like to use a separate input color so that
  command input text stands out more readily from the surrounding text.

#### \<Q\>

HTML TADS supports the HTML 4.0 \<Q\> tag. This tag encloses a passage
in quotation marks (by placing an open quote where the \<Q\> tag
appears, and a matching close quote where the \</Q\> ending tag
appears). \<Q\> uses typographical quotation marks if available on the
interpreter platform, and automatically alternates between double and
single quotes when \<Q\> tags are nested.

#### End-tag syntax

HTML TADS lets you use a backslash to indicate an end tag, whereas
normal HTML would only accept a forward slash. So, `<\TABLE>` is
equivalent to `</TABLE>`. (Since backslashes have no special meaning in
HTML normally, this extension shouldn't create any ambiguity.)  
  

------------------------------------------------------------------------

<span id="additions"></span>

### HTML 3.0 Additions

#### Unimplemented HTML 3.0 tags, markups, and attributes

Since HTML TADS is based primarily on HTML 3.2, tags, markups, and
attributes which are not otherwise described as implemented in the
following sections are not implemented. However, in the interest of
completeness, this subsection notes most of the HTML 3.0 features that
are not implemented in HTML TADS; this list is not necessarily complete.

The following tags from HTML 3.0 are not implemented:

      LANG
      AU
      PERSON
      ACRONYM
      ABBREV
      INS
      DEL
      FIG
      FN

None of the math-related tags or markups are implemented.

The ID, STYLE, and CLASS attributes, which apply to nearly every HTML
3.0 tag, are not implemented (except where otherwise noted below).

The rest of this section lists features of HTML 3.2 that *are*
implemented in HTML TADS.

#### BQ

BQ is a synonym for BLOCKQUOTE.

#### CREDIT

The CREDIT tag can be optionally placed at the end of the contents of a
BLOCKQUOTE (or BQ) sequence. CREDIT is a container and requires an end
tag; the contents are the source of the quote.

       <BQ>Gnomon is an island
          <CREDIT>Trinity</CREDIT></BQ>

#### NOBR

(This is actually only mentioned in the HTML 3.0 proposal as an
extension implemented by a few of the popular browsers; it's not clear
if NOBR is actually part of the HTML 3.0 proposal.) This is a container
tag. Text between the \<NOBR\> and corresponding \</NOBR\> will not be
word-wrapped, so the only line breaks within the text will be those that
are made explicitly by \<BR\> tags.

#### \<P NOWRAP\>

The NOWRAP attribute can be used on a paragraph to indicate that text
within the paragraph is not to be word-wrapped. The only line breaks
within the paragraph will be at explicit \<BR\> tags. This is equivalent
to enclosing the text of the paragraph between \<NOBR\> ... \</NOBR\>
tags.

The NOWRAP attribute can be used on most block-level tags, in addition
to \<P\>. NOWRAP works with P, DIV, UL, OL, DL, the heading tags (H1
through H6), ADDRESS, and BLOCKQUOTE.

#### BANNER

The BANNER tag allows non-scrolling areas to be added to the window.
HTML TADS uses BANNER to implement the status line (in the traditional
text adventure game sense of the line at the top of the screen that
shows, for example, the name of the current location and the score).
Although the HTML 3.0 BANNER tag has a somewhat different purpose, its
behavior is essentially the same as is needed to implement adventure
game status lines, so I've used this tag rather than creating a new tag.
However, HTML TADS's BANNER tag has some new attributes; refer to the
[full description](banners.html) for more information.
<span id="TABadditions"></span>

#### TAB

The TAB tag provides simple alignment capabilities without the more
complex TABLE structure. \<TAB ID=abc\> defines a tab named 'abc' at the
current horizontal position in the line; this can occur within ordinary
text to indicate an alignment position that can be used in subsequent
lines. \<TAB TO=abc\> adds horizontal whitespace in the current line up
to the position of the previously defined tab 'abc'.

The ALIGN attribute can be used with \<TAB\> to specify the type of
alignment to use. ALIGN can be used on the defining \<TAB ID=abc\>, or
on each use of \<TAB TO=abc\>; if no ALIGN is used in the TO tag, the
ALIGN from the ID tag is used by default; LEFT is used if neither has an
ALIGN attribute. ALIGN=LEFT aligns the material after the \<TAB TO\>
with its left edge aligned at the tab; ALIGN=RIGHT aligns the material
after the \<TAB TO\> and up to the next \<TAB TO\> or the end of the
line, whichever comes first, flush right at the position of the tab.
ALIGN=CENTER aligns the material up to the next \<TAB TO\> centered on
the tab position. ALIGN=DP aligns at a decimal point (or at any other
character specified with DECIMAL="c", where "c" is the character at
which to align entries).

\<TAB ALIGN=CENTER\> or \<TAB ALIGN=RIGHT\>, without a TO attribute,
align the material with respect to the right margin. This provides a
simple way of aligning material against the right margin (ALIGN=RIGHT),
or centered between the end of the text up to the \<TAB\> and the right
margin.

\<TAB INDENT=*n*\> (where *n* is a number) indents by a given number of
"en" units; it simply adds the given amount of whitespace to the line.
\<TAB MULTIPLE=*n*\> indents to the next multiple of the given number of
ens from the left margin. You can use \<TAB MULTIPLE\> to get the effect
of tabs set at regular intervals across the page, without having to set
up a bunch of named indent points and figuring out which one you're
closest to.

#### FONT attributes

The FONT tag accepts the FACE attribute, which takes a comma-separated
list of typeface names. If the first typeface listed is available on the
system, that font is used; if the first isn't available, the renderer
checks the second font, and so on until it runs out of fonts in the list
or one of the fonts is available.

In addition to accepting explicit system font names, the FACE attribute
also accepts "parameterized" font names, which let you specify a style
of font that will be mapped to an appropriate system font on each
platform. Refer to the [parameterized font documentation](#param_fonts)
for full information.

#### BASEFONT attributes

The BASEFONT tag accepts the FACE and COLOR attributes; these behave the
same as they do with the FONT tag.

#### CLEAR works for most block-level tags

Most block-level tags recognize the CLEAR attribute. CLEAR on a
block-level tag works the same way it does on a BR tag. The additional
tags that accept the CLEAR attribute are DIV, UL, OL, DL, all of the
heading tags (H1 through H6), ADDRESS, and BLOCKQUOTE.

#### UL extensions

The UL and LI tags accept the PLAIN attribute to indicate that the list
item (in the case of LI) or all of the items in the list (in the case of
UL) should be displayed without a bullet. If \<LI PLAIN\> is specified
for an item in an ordered list, the item is displayed without a number.
\<OL PLAIN\> is also accepted, even though it probably isn't very useful
(although it could conceivably be used to specify a numbered list where
most but not all of the items are listed without a number; each of those
to be listed with a number would have to specify a TYPE setting to
override the default plain style).

The UL (unordered list) tag takes the SRC attribute to specify the name
of an image to use as the bullet for the items in the list. This image
is displayed in place of the bullet that would normally be used; if
provided, the TYPE attribute is ignored.

The LI (list item) tag also takes a SRC attribute; this overrides the
SRC attribute of the enclosing list, allowing you to use a special
bullet for an individual item in a list.

#### OL extensions

For the OL tag, the SEQNUM attribute is equivalent to the START
attribute.

The CONTINUE attribute (no value) specifies that the list numbering
should continue where the last list left off. For example, if the last
item of the previous list was 5, the new list will start with item
number 6.

#### List Headers (LH)

HTML TADS supports the HTML 3.0 \<LH\> tag. This tag comes immediately
after a UL or OL tag, and prior to the first LI tag in the list. LH is a
container tag; the material between the open and close tags constitutes
the list header. The list header is set in boldface, on a new line
aligned left at the same indent level as the material immediately
preceding the list.

The LH tag is implicit for any material between a UL or OL tag and the
first LI tag; that is, if you put material inside a list but before the
first list item, it will be treated as a list header. This behavior is
consistent with most browsers.

#### HR SRC

The HR tag accepts a SRC attribute, which specifies the URL of an image
to display in the rule. The image is repeated as needed to fill out the
space. If a SIZE attribute is given, it specifies the height of the
rule; otherwise, the height of the image is used as the height of the
rule. The value that \<HR SRC\> provides beyond \<IMG\> is that \<HR
SRC\> repeats the image to fill a horizontal area, which can scale in
proportion to the window size, whereas \<IMG\> just draws the image
once.  
  

------------------------------------------------------------------------

<span id="deviations"></span>

### Deviations from Standard HTML 3.2 Tag Behavior

I've tried to keep HTML TADS as faithful to the HTML 3.2 standard as
practical. However, since HTML TADS is a somewhat different application
than the designers of HTML had in mind, I've had to take some liberties
to adapt the language to use in adventure games. For the most part, the
tags that directly pertain to formatting follow the standard; most of
the exceptions are related to the structural differences between an
adventure game's displays and standard HTML documents.

#### BODY element

The BODY element can appear multiple times per document, unlike with
standard HTML renderers. Each time \<BODY\> appears, any attributes
(such as the background color or text color) replace the previous
settings for those attributes; these settings affect the entire window.

The HLINK attribute of the BODY tag allows you to specify the color to
use for "hovering" over a hyperlink. This sets the color in which to
display hyperlink text when the mouse cursor is positioned over the
hyperlink, but the mouse button isn't being held down. Note that this
color setting (like the other BODY color settings) is purely advisory,
and won't necessarily be obeyed on all systems; some systems don't use a
special hovering appearance at all for hyperlinks, and even on systems
that do, the color given here might be overridden by user preferences.

The INPUT attribute lets you set the color for command-line input text.
On some interpreters, the text the user enters via the command line can
be shown in a separate color from the main text. When the interpreter
supports a separate command-line text color, this attribute

Note that the BODY tag does not require (nor does it allow) a closing
tag.

#### TITLE element

The TITLE element is optional, and can appear multiple times (HTML 3.2
requires exactly one TITLE element per document). The text given in the
TITLE element is applied at the point the TITLE element is reached for
the first time in the course of actually drawing the page (so titles are
not re-applied upon scrolling a previous title back into view); each new
title simply replaces any previous title.

#### PRE, LISTING, XMP elements

The WIDTH attribute is not supported for these tags, but it is accepted
and ignored by the parser. (This isn't really a deviation, since WIDTH
is only a hint to the renderer, and its behavior is defined by each
renderer.)

#### OL and UL tags

The COMPACT attribute is accepted but has no effect. (Since the COMPACT
attribute's meaning is renderer-defined, this is not actually a
deviation from the standard).

#### \<A\> element

The NAME, REL, and REV attributes are accepted but ignored. The HREF
attribute is interpreted specially, and not necessarily as an internet
path (see the section on [\<A HREF\> changes](#Achanges).)

#### IMG element

The ISMAP attribute is accepted but ignored. (In normal browsers, this
attribute is intended for use with CGI server programs; CGI servers are
not applicable to HTML TADS.)

The USEMAP attribute only works with local image maps; i.e., the image
map name can't be a URL referring to some other document, but must be
part of your game's text output. Note that this means that the attribute
value must start with a pound sign (#):

        <IMG SRC="images/navbar.jpg" USEMAP="#navmap">
        <MAP NAME="navmap">
         ... etc ...

Note that HTML TADS will assume that a pound sign should be present if
you don't include one, hence all URL's will be interpreted as local, but
you should always use a pound sign anyway to ensure compatibility with
future versions.

Two new attributes, ASRC and HSRC, provide simple roll-over highlighting
for hyperlinked images. See [Roll-over Images](#IMGrollover) for
details.

#### MAP element

You can re-use a MAP element's name in multiple maps. At any given time,
the most recent occurrence of a map with a given name simply replaces
any previous occurrences of maps with the same name. This allows you to
generate output containing the map for an image each time you display
the image, without worrying about whether the map was displayed
previously.

#### AREA element

The SHAPE=POLY feature of the AREA tag is accepted, but is currently
ignored. An AREA defined with SHAPE=POLY will effectively be a null
area, and will never be hit. For now, you should use AREA=RECT or
AREA=CIRCLE instead, approximating the polygon with a set of these other
shapes.

The HREF link specified in an AREA tag is treated the same way as in an
[\<A HREF\> tag](#Achanges), so you can use both command links and
internet links with AREA tags. Similarly, you can use the APPEND and
NOENTER attributes just as with \<A HREF\> tag.

#### TABLE element

The TABLE element with ALIGN=LEFT or ALIGN=RIGHT is treated as an
in-line item. See the [TABLE additions](#TABLEadditions) section for
more details.  
  

------------------------------------------------------------------------

<span id="unimplementedTags"></span>

### Unimplemented HTML 3.2 tags

The following tags from standard HTML 3.2 are unimplemented:

      HEAD
      BASE
      ISINDEX
      STYLE
      SCRIPT
      LINK
      META
      NXTID
      FORM
      INPUT
      SELECT
      OPTION
      TEXTAREA

Essentially, everything related to forms is unimplemented; this probably
isn't a big loss, since forms wouldn't be all that useful in most
adventure games. In addition, the hypertext structure tags, such as
HEAD, ISINDEX, and NXTID, are not meaningful with the non-standard page
model that HTML TADS uses. Style sheets aren't supported (in fact,
they're not supported in HTML 3.2 either; the STYLE tag in HTML 3.2 is a
placeholder for future versions.) Finally, scripting and applets
wouldn't be useful, since HTML TADS is an entirely "client-side" system
to start with.

In addition, note that FRAMESET and FRAME are not supported in HTML
TADS. (These are not actually HTML 3.2 tags, but they're worth
mentioning here because some of the browsers that use HTML 3.2 as a
baseline support frames, hence many HTML authors think of frames as an
HTML 3.2 feature.) However, HTML TADS has a separate tag,
[BANNER](banners.html), that provides substantially the same
functionality as frames.
