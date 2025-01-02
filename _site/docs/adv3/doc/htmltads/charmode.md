Playing HTML TADS Games with the Character-Mode Interpreter

# Playing HTML TADS Games with the Character-Mode Interpreter

Starting with version 2.2.4, the TADS character-mode interpreter
provides a degree of compatibility with games written for HTML TADS.
This allows you to write a game using some of the new HTML features, and
still play the game on character-mode versions of the interpreter. So,
players that use systems where HTML TADS is not yet available can still
play your game to some extent.

Although the standard TADS interpreter doesn't understand most HTML
formatting sequences, it does recognize a few HTML markups, and it
removes any that it doesn't recognize from the text, so that players
won't see HTML source code in the output. This won't let you get the
full effect of games written for HTML TADS, but you can at least run
HTML games and see the plain text that they display. For games that make
moderate use of HTML formatting features, the degradation can be quite
reasonable. Note that HTML interpretation only occurs when the game
displays a "\H+" sequence, which only an HTML-enabled game would do, so
non-HTML games are not affected by this processing in any way.

The character-mode version supports all of the character-code markups
(the sequences that begin with an ampersand, such as "&amp;"). Note that
most character-mode consoles and terminals don't actually support all of
these characters; the character-mode interpreter will try to provide a
suitable system-specific rendering of the markups when possible, and
will replace any unrenderable markups with a system-dependent "missing
character" glyph. The DOS US character set (code page 437), for example,
is capable of displaying about half of the standard ISO Latin-1
character markups correctly, uses approximations for about 30% of these,
and uses blanks for the remaining 20%. DOS code page 437 does not
contain many of the characters beyond the basic ISO Latin-1 character
set, so most of the mathematical symbols and Latin-2 characters can't be
displayed in this character set.

In addition, the character-mode interpreter supports the following tags:

- \<BR\> ends the current line. Each extra \<BR\> after the first will
  add a blank line.
- \<BR HEIGHT=*number*\> will display the given number of blank lines.
  Using HEIGHT=0 will make this tag behave the same way that the
  conventional TADS "\n" sequence does: it ends the current line, but
  does not add any new blank lines, even if repeated.
- \<P\> displays a blank line.
- \</P\> displays a blank line.
- \<B\> and \<EM\> start boldfaced (highlighted) text.
- \</B\> and \</EM\> end boldfaced text.
- \<TAB\> inserts spaces to the next tab stop, using the same spacing as
  the "\t" escape sequence. TADS 2 text-only interpreters ignore all of
  the attributes of this tag, but at least the tag will insert *some*
  spacing.
- \<Q\> and \</Q\> enclose a passage in quotation marks.
- \<HR\> produces a line of underscores the width of the console
- \<IMG ALT=*alt-text*\> displays the *alt-text* string. (Other
  attributes of the IMG tag are allowed but are ignored.)
- \<SOUND ALT=*alt-text*\> displays the *alt-text* string. (Other
  attributes of the SOUND tag are allowed but are ignored.)

The character-mode interpreter also recognizes the \<TITLE\> and
\<ABOUTBOX\> tags. The interpreter simply hides all of the text and
markups between these tags and their corresponding end tags (\</TITLE\>
or \</ABOUTBOX\>). So, although TITLE and ABOUTBOX don't actually
contribute anything to the display formatting in the character-mode
version, they are harmless, so you can use them in your game without
worrying about which type of interpreter is being used.

*Note: version 2.2.3 of the character-mode interpreter recognized HTML
markups when "\H+" was in effect, but simply ignored all markups.
Starting with version 2.2.4, the character-mode interpreter provides the
limited support described above.*

#### TADS 3 Extensions

In addition to the markups mentioned above, TADS 3 supports the
following:

- \<TAB\> can be used with the full set of attributes, including ID, TO,
  and ALIGN. You can use \<TAB\> to define a tab position and then align
  text left, right, or center with respect to the tab position.
- \<FONT COLOR=*color* BGCOLOR=*color*\> sets the text color. Some
  text-only platforms do not support text colors at all, and most
  support only a limited set of colors; where colors are supported, the
  platform will use the closest available color if the requested color
  is not available.
- \<BODY BGCOLOR=*color*\> sets the background color. This sets the
  color of the window, including the blank areas where no text is
  displayed as well as the areas where text is displayed without an
  explicit \<FONT BGCOLOR\> setting. As in the HTML interpreters, this
  tag sets the color of the entire window (in other words, even text
  previously displayed in the window is shown in the new background
  color), and takes effect immediately when displayed.

### Embedded Resources

Note that if you embed HTML resources into your .GAM file,
character-mode interpreters older than version 2.2.3 won't be able to
read your .GAM files. Character-mode interpreters version 2.2.4 and
later will simply ignore embedded HTML resources. See the [resources
documentation](res.htm#compatibility) for details.

### Writing for Maximum Compatibility

When you're designing your game, you may want to consider trying to make
the game as compatible as possible with the standard TADS interpreter,
since this will maximize your game's portability. The HTML TADS
interpreter is not available on as many platforms as the standard
interpreter (in fact, as of this writing, HTML TADS is only available on
Windows 95 and NT).

Of course, some authors won't be concerned about compatibility. If you
want to write a game that takes full advantage of the new features that
HTML TADS offers, you won't want to limit yourself by trying to maintain
compatibility with the standard interpreter. These guidelines are only
for authors who want to offer some amount of compatibility.

There are two strategies that you can employ when writing a game for
compatibility: you can use features that degrade gracefully in the
standard interpreter, or you can use special-case code to support the
two different interpreters.

Regardless of the approach you choose for compatibility between HTML
TADS and the standard TADS interpreter, you should test your game
frequently on both systems as you develop it. This will help you catch
compatibility problems quickly as they arise, which has two benefits:
first, you won't accumulate a huge and daunting pile of extra work at
the end of your game development process; and second, you'll quickly
develop a sense for what sorts of things to do and what to avoid, which
will make it easier to write for maximum compatibility as your game
progresses.

#### Using graceful degradation

Many HTML markups can be used in such a way that they won't be too badly
missed if simply omitted. For example, most of the text style markups
(such as \<i\> for italics and \<font\> for setting typeface
characteristics) can be omitted without losing too much of the meaning
of the text. If you are careful about the formatting markups you choose,
and use them with an awareness of how the text will look if they're
ignored, standard TADS users will be able to run your game without
noticing any big changes, except that the text styling may look less
interesting.

Similarly, SOUND and IMG markups can often be used purely for
atmosphere. If you use your sounds and images to add detail and audio
and visual impact to your game, rather than to provide essential
information, the standard TADS interpreter can omit these and still
leave the game fully playable.

You should be careful of the more complex formatting tags, such as
\<TABLE\> or \<BANNER\>, the omission of which would substantially alter
the layout of your text.

#### Using special-case code

If you need to use markups that cannot be harmlessly omitted, you can
still provide standard TADS interpreter compatibility by including a
separate version of your code for the standard and HTML versions. You
can do this either by using precompiler symbols and `#ifdef` directives,
to produce two different versions of your .GAM file at compile-time, or
you can use the `systemInfo` function to determine if HTML is supported
at run-time. (Note that `systemInfo` always indicates that HTML is not
supported for the standard interpreter, even though the standard version
does support a limited subset of the HTML features.)

For an example of both of these techniques, refer to the status line
code in `adv.t`. First, this code uses conditional compilation to define
either the traditional status line code, or a new version that uses the
\<BANNER\> tag to implement a status line. Second, the HTML version of
the code checks at run-time to see if the full HTML feature set is
supported, and if not, it falls back to the old status line code.
