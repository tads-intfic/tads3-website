---
---
<div>

[TADS 3](../../../index.html)

<div class="menu-button">

</div>

<a href="../../adv3lite/index.html" class="nav-element">Adv3Lite
Bookshelf</a>
<a href="../index.html" class="nav-element">Adv3 Bookshelf</a>
<a href="#" class="nav-element">Cheat Sheets</a>

<div id="spacer">

</div>

</div>

<div class="main">

# Introduction to HTML TADS

## Table of Contents

- <a href="#" class="toc">Introduction</a>
  - <a href="#docOverview" class="toc">Documentation overview</a>
  - <a href="#contact" class="toc">Contacting the author</a>
  - <a href="#whatIsIt" class="toc">What is HTML TADS?</a>
  - <a href="#whatDoINeed" class="toc">What software do I need?</a>
  - <a href="#compatibility" class="toc">Compatibility between HTML TADS and
    standard TADS</a>
  - <a href="#whither" class="toc">Whither the standard TADS?</a>
  - <a href="#why" class="toc">Why HTML?</a>
  - <a href="#acks" class="toc">Acknowledgments</a>
- <a href="start.html" class="toc">Getting Started with HTML TADS</a>
- <a href="../changes.html" class="toc">Recent changes to HTML TADS</a>
- <a href="deviate.html" class="toc">HTML TADS additions to and deviations
  from standard HTML</a>
- <a href="linebrk.html" class="toc">Word Wrapping and Line Breaking</a>
- <a href="tables.html" class="toc">Table Layout Rules</a>
- <a href="convert.html" class="toc">Converting a regular TADS 2 game to
  HTML TADS</a>
- <a href="res.html" class="toc">Using Resources in HTML TADS</a>
- <a href="sound.html" class="toc">Using Sound in HTML TADS</a>
- <a href="dist.html" class="toc">Distributing your game</a>
- <a href="charmode.html" class="toc">Playing HTML TADS games with the
  standard TADS Interpreter</a>
- <a href="../../license.txt" class="toc">Copyright and License
  information</a>

------------------------------------------------------------------------

<span id="docOverview"></span>

## HTML TADS Documentation Overview

For your browsing convenience, here's a list of the documentation
included with HTML TADS.

If you're interested in porting HTML TADS to a new operating system, you
can refer to the [porting notes](porting.html) (which you need not
consult to write or play games with HTML TADS).

<span id="contact"></span>

## Contacting the author

If you encounter any problems, or would like to offer suggestions for
improvements, please contact the author at <mjr_@hotmail.com>. When
reporting a problem, please provide as complete a description as
possible of the problem and the exact steps needed to reproduce it.

For more general advice and information about interactive fiction, you
may be interested in consulting the usenet newsgroup
[rec.arts.int-fiction](news:rec.arts.int-fiction), which is concerned
with all aspects of interactive fiction, and in particular the technical
and artistic details of designing and developing adventure games.

------------------------------------------------------------------------

<span id="whatIsIt"></span>

## What is HTML TADS?

HTML TADS is an interpreter for games created with TADS, the Text
Adventure Development System. HTML TADS is an extension of the standard
TADS interpreter that allows a game author to use HTML markups to
control the appearance of the game.

HTML TADS is simply a different user interface on the standard TADS
interpreter engine. You create a game for use with HTML TADS in the same
way as with the standard TADS; the only difference is that you can use
HTML markups to format the text of your game.

HTML TADS allows a TADS game to use many features that have not
traditionally been available in text adventure systems:

- Fancy text formatting. HTML TADS allows you to use most of the
  features of HTML to format your text. Whereas plain TADS only has a
  few very limited formatting features, HTML TADS allows you to set
  fonts and font sizes, text colors, background colors, and all sorts of
  text attributes like boldface, italics, and underlining.
- Graphics. HTML TADS lets you to integrate graphics into your game. You
  can use a picture for the window background, and you can insert
  pictures into the text, with various alignment possibilities. Unlike
  some older adventure game systems that divided the screen into panels,
  some of which showed text and others of which showed graphics, HTML
  TADS uses the much more natural approach of intermixing text and
  graphics freely. The Web has demonstrated how effective graphics can
  be when used this way.
- Music and sound effects. With HTML TADS, you can play MIDI music
  files, WAV-format digitized sound effects, MPEG 2.0 Audio files (such
  as MP3's), and Ogg Vorbis (a compressed digital sound format similar
  to MP3, but developed as an open-source project, and said to have
  compression and fidelity characteristics superior to MP3). It's
  extremely easy to play music and sound from within your game, because
  you access these features through HTML tags; HTML TADS automatically
  takes care of all of the queuing and timing issues.
- Hypertext. HTML TADS allows you to set up hyperlinks in your text and
  pictures; these hyperlinks contain commands that are activated when
  the user clicks on them. This lets you set up a game that can be
  played with a lot less typing, since a user can, for example, click on
  the name of an item in a room description to see more information on
  the item.
- More control over the screen layout. HTML TADS lets you define
  "banners," which are subwindows that you can arrange around the edges
  of the main game window. Banners don't scroll with the main window,
  and you can update the contents of a banner at any time, so you can
  use banners to display dynamic information in parallel with the main
  game window. Banners give you the basic functionality of the status
  line in the traditional character-mode version of TADS, but open up
  numerous new possibilities as well. (In TADS 3, banners are controlled
  through a function-call interface rather than with HTML codes.)

<span id="whatDoINeed"></span>

## What software do I need?

If you've installed the TADS Author's Kit for Windows, you already have
everything you need to create and run HTML TADS games. If not, you'll
need the following software:

- The standard TADS compiler, version 2.2.5 or higher. You use exactly
  the same compiler to produce HTML TADS games and normal TADS games.
- The HTML TADS interpreter.

You might also want TADS Workbench, if you're using Windows. This is a
development environment that integrates the interactive TADS Debugger
with the full HTML TADS display environment, facilitating debugging and
testing of games that use HTML formatting. This is included in the TADS
Author's Kit.

If you're using TADS 3, you'll want the User's Manuals. These are
bundled with the "full documentation" version of the TADS 3 Author's
Kit, or can be downloaded separately. You should be able to find these
at the [IF Archive](http://www.ifarchive.org/) or through the
[tads.org](http://www.tads.org/) site.

Once you have the software and manuals you need, refer to [Getting
Started with HTML TADS](start.html) for an introduction to using the HTML
features in HTML TADS.

Since HTML TADS is an extension to the normal TADS, you can use what you
already know about TADS to write a HTML TADS game -- refer to
[Converting a Game to HTML TADS](convert.html) for information about how
to put HTML features in your existing TADS games.

------------------------------------------------------------------------

<span id="compatibility"></span>

## Compatibility between HTML TADS and standard TADS

HTML TADS is an extension of the standard TADS. The core language system
is the same in both versions; the only difference is the way the two
systems interpret and display text. Even though HTML TADS uses a very
different display system than the standard TADS, the two versions are
highly compatible.

**Playing standard TADS games with the HTML interpreter:** HTML TADS is
fully compatible with games written for the standard TADS. Standard
games will naturally not take full advantage of the HTML features, but
HTML TADS interprets all of the standard TADS formatting codes
correctly. With a standard TADS game, HTML TADS simply acts as a Windows
version of the interpreter.

**Playing HTML-enabled games with the standard interpreter:** Recent
versions (2.2.4 or higher) of the standard TADS interpreter also provide
a degree of compatibility with games written for HTML TADS. Refer to
[this document](charmode.html) for details.

<span id="whither"></span>

## Whither the standard TADS?

I don't want to use terms like "old-style" to describe existing,
non-HTML TADS games, because HTML TADS is just one variation of TADS;
the standard TADS will continue to exist, and some authors may choose to
write new games using the standard TADS system. HTML TADS is not yet
implemented on as many operating systems as the standard TADS
interpreter, and probably won't ever be as widely ported as the standard
TADS interpreter due to its additional complexity. As a result, some
authors will want to use the standard system so that their game can be
played by more people.

I plan on continuing to support the standard TADS; fortunately,
supporting both the HTML and standard versions will will involve very
little additional work beyond only the HTML version. HTML TADS uses
exactly the same interpreter engine as the standard TADS; the only
difference is in the user interface code. So, as changes are made to the
TADS language and the interpreter system, they'll more or less
automatically show up at the same time in the standard and HTML versions
of TADS. The only area that will probably receive less attention than it
would have in the absence of HTML TADS is in enhancing the standard TADS
DOS interpreter environment's user interface; however, because of the
widespread deployment of the TADS interpreter, the user interface has
been essentially frozen for several years anyway, so this isn't really
going to change anything.

------------------------------------------------------------------------

<span id="why"></span>

## Why HTML?

One of the main improvements that TADS authors have been requesting for
some time is more control over formatting, ideally including support for
graphics and sound. There are many ways I could have added these
features, but the emergence of HTML as a ubiquitous text formatting
language made it a clear choice.

HTML is a "markup language" that's become widely used, thanks to the
popularity of the World Wide Web. HTML documents are text files that
have embedded "markups," which are special sequences within the text
that specify formatting commands. The language has been refined over
several years based on the experiences and needs of a vast number of
users, and it's proved to be very flexible and useful.

I chose HTML as the new formatting language for TADS because of these
advantages. I didn't want to invent a new markup language; even though
HTML isn't perfect, it would be difficult to do so much better that it
would justify the work of creating a new language and the cost to game
authors of learning a new language.

------------------------------------------------------------------------

<span id="acks"></span>

## Acknowledgments

HTML TADS incorporates several high-quality third-party libraries that
made possible some of its sophisticated graphical features. In
particular, HTML TADS incorporates the work of the Independent JPEG
Group; the PNG Reference Library, developed by Andreas Dilger, Guy Eric
Schalnat, and other Contributing Authors; the ZLIB compression library,
written by Jean-loup Gailly and Mark Adler; and, in the Windows version,
the amp MPEG audio decoder by Tomislav Uzelac; the libvorbis reference
Ogg Vorbis decoder by Xiphophorus; and the reference MNG library,
libmng, by Gerard Juyn. The author would like to express his
appreciation to the developers of these libraries for their fine work
and their generosity in making their work freely available.

The author would like to thank everyone who has offered bug reports,
suggestions, advice, and encouragement during the course of this
project. All of your ideas have made this a much better system than it
ever could have been otherwise.

For their comments and suggestions during the HTML TADS development
process, the author wishes to express his appreciation to David Baggett
and Andrew Plotkin. For their help and patience testing early versions
of the software, I'd also like to thank G. Kevin Wilson and Neil
deMause.

Special thanks go to Chris Nebel, for first suggesting to me the idea of
using HTML as a formatting language for text adventures, and for his
work porting TADS to the Macintosh; and to Iain Merrick and Andrew
Pontious, for bringing HyperTADS to Macintosh. Finally, I'd especially
like to thank Neil K. Guy, author of *The Golden Skull* and of the
acclaimed 1999 Interactive Fiction Competition entry *Six Stories*, and
Stephen Granade, author of the delightful and award-winning 1998 IF
Competition entry *Arrival*, for their pioneering work with this
software, as well as their long-standing generosity in sharing their
TADS expertise with other game authors.

</div>
