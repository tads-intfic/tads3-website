Converting a TADS 2 game to HTML TADS

# Converting a TADS 2 game to HTML TADS

This document describes the steps to converting an existing TADS game to
take advantage of HTML TADS. See the [introduction](intro.htm) for more
information on HTML TADS. **Note:** this material only applies to TADS 2
games. Since TADS 3 is **always** in "HTML mode," it's really not
possible to write a "non-HTML" TADS 3 game in the first place, so
conversion simply isn't a factor.

### Learning HTML

You don't actually need to know much HTML to use HTML TADS, since the
normal TADS formatting sequences (\b, \n, \t, and so on) work the same
way in HTML TADS as they do in the standard TADS. In fact, you should
probably continue to use the standard TADS formatting sequences wherever
you can, since this will make it easier to move your game to the
standard TADS system if you decide to do so at some point.

However, you *will* need to learn HTML to the extent that you want to
use HTML features with TADS. An HTML tutorial and reference is, as they
say, beyond the scope of this document. Fortunately, one of the benefits
of HTML's popularity is a copious supply of documentation. You should
have no problem finding a book on HTML for almost any level of expertise
at your local bookstore, and a great deal of introductory and reference
information is available free on the web.

### Learning HTML TADS

For the most part, you should be able to apply your knowledge of
standard HTML to writing games with HTML TADS; most of the tags related
to formatting work the same as they would in any other HTML renderer.
However, there are a number of areas where HTML TADS differs from
standard HTML, particularly with tags that define the document
structure, and you'll eventually want to familiarize yourself with these
differences as you start to use the more advanced features; refer to
[HTML TADS Deviations from Standard HTML Specifications](deviate.htm)
for complete details.

### Playing an existing TADS game with HTML TADS

You can use HTML TADS to play a standard TADS game. Since all of the
standard formatting sequences work in HTML TADS, a standard game will
play the same way it does on the normal interpreter. There's probably no
good reason to play a standard game with HTML TADS, since nice standard
interpreter versions are available for most of the GUI platforms
already, but you can use HTML TADS this way if you want to.

### HTML Debugging

HTML is a computer programming language, so it has a strict syntax that
must be obeyed in order for it to work correctly.

When HTML TADS encounters syntax in your HTML that it can't understand,
the system will normally simply ignore the entire tag sequence. This has
the generally desirable effect of leaving the surrounding text intact,
but the incorrect markup will not do what you wanted it to do.

When you're writing a game, you might find it desirable to see any
errors in your HTML tags. HTML TADS provides a debugging window for this
purpose. To enable the debugging window, you use a system-specific
option; on Windows, add the `-debugwin` switch on the command line when
you start HTML TADS:

        htmltads -debugwin mygame.gam

The debug window will show you HTML errors as they occur, along with the
line of text that contains the error (this is a line of text that your
game displayed).

Note that the debug window is automatically included when you run the
new HTML TADS Debugger for Windows 95/NT, so you won't need to include
the -debugwin option when you run your game with the debugger.

### Steps in converting a game

Since standard games play unchanged on HTML TADS, you can convert a game
to HTML TADS incrementally; that is, you can start off with a very small
set of changes to your game, and add features at your own pace.

#### The `"\H+"` sequence

To start using HTML features, the first thing you must do is tell HTML
TADS that your game is going to use HTML. To enable old games to play
unchanged, HTML TADS starts up in "compatibility" mode, which means that
it passes through all of the text in the game to the display without
HTML interpretation. In order to get HTML TADS to start interpreting
HTML markups, you need to send a special formatting code. At the
beginning of your game, at or around the first line of your `init()`
routine, you should put the following TADS code:

        "\H+";

This doesn't actually display anything on the screen, but it does tell
HTML TADS to enter HTML mode. From this point on, HTML TADS will
interpret HTML markups in your game, allowing you to use the full power
of HTML to format your game's display.

You can also convert a game more incrementally by turning on HTML only
when you want to use it, and then turning it off again. To turn HTML
back off, use the `"\H-";` sequence. If you only want HTML functions in
a few limited places, you can turn HTML on and off selectively, to avoid
any impact on the rest of your game. However, if you're developing a new
game for HTML TADS, you'll probably find it easier to turn on HTML mode
at the beginning of the game and leave it on at all times.

*Note: if you use the* "\H+" *sequence in your* `init()` *function, you
should be careful to also use it in your restore-game code, since it is
possible under certain circumstances for the interpreter to bypass your*
`init()` *function entirely. This happens when the user starts the
interpreter by opening a saved game file directly from the operating
system shell, which is supported on some systems.*

#### Special characters: \< and &

When HTML mode is active, two characters become special, because they
introduce HTML sequences. The first is the less-than sign, \<, which
introduces an HTML tag. The second is the ampersand, &, which introduces
a character specifier sequence.

You probably won't have a lot of either of these characters in your
game's text. Any that are present, though, will have to be converted to
special character sequences that tell HTML that you want to display
these characters.

You need to convert each less-than sign to this sequence of characters:

        &lt;

You need to convert each ampersand to this sequence of characters:

        &amp;

Note that the special embedded expression syntax, which uses "\<\<" and
"\>\>" to delimit an expression contained within a double-quoted string,
does *not* need to be changed, and in fact must not be changed. You
should continue to write embedded expressions just as you always have.
For example:

        sdesc = "The blackboard has an equation scribbled
                 on it: x &lt; << blackboard.xValue >>"

The reason that you don't need to change the "\<\<" sequence for an
embedded expression is that this syntax is used only by the TADS
compiler. The compiler recognizes embedded expressions and removes them
from your strings before the strings are placed in your .GAM file. HTML
tags, on the other hand, are handled by the HTML TADS interpreter. Since
the "\<\<" sequence of an embedded expression is removed at compile
time, the HTML TADS interpreter never sees it, hence it doesn't need to
be changed for HTML.

#### The status line

One of the limitations of the standard TADS is that its status line
format is rather inflexible. While this simplified game development, it
made it impossible to get effects beyond the normal status line display.

HTML TADS removes this limitation. In HTML TADS, the status line is
entirely under your control. HTML TADS provides a "banner" feature,
which lets you designate that a block of text is displayed in a panel at
the top of the window; this panel can be as large or small as you like,
and can contain anything that you can use in the main HTML window --
fancy formatting, graphics, and any other HTML features. In fact, you
can go beyond this by using multiple status lines -- you can have as
many banners as you like (although this is obviously limited by the
available window area). You can also make status lines come and go as
needed throughout the game.

There *is* a small price to pay for all of this new flexibility, though:
you must do all of the status line formatting. Whereas the status line
formatting is done automatically by the user interface in the standard
TADS, in HTML TADS the game author must provide HTML markups to format
the status line.

Fortunately, adv.t has built-in support that will automatically generate
the necessary HTML commands to emulate the standard status line style
when in HTML mode. You can replace this with your own status line
formatting if you want, but for simplicity the default handling is
available. To enable the default status line formatting with HTML
markups, recompile your game (assuming it includes adv.t) with the
preprocessor symbol USE_HTML_STATUS defined:

        tc -D USE_HTML_STATUS mygame.t

(If you're using a Macintosh, use the dialog "define preprocessor
symbols" to define this symbol. Open the dialog and enter
USE_HTML_STATUS on a line in the list of symbols to define.)

Refer to the `room` object's `statusLine` routine (the one defined
within the `#ifdef USE_HTML_STATUS` section) to see how the traditional
status line formatting translates to HTML. If you want to customize the
formatting, simply replace `room.statusLine` with your own
implementation, using the `replace` TADS language feature. If you're not
using adv.t in your game (or you're using your own version of adv.t),
you can copy that snippet of code from adv.t to your own game.
