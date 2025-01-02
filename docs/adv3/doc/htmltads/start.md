Getting Started with HTML in TADS

# Getting Started with HTML in TADS

### Introduction

HTML TADS is an extension to TADS that lets you use formatted text,
graphics, and sound in a TADS game. Writing an HTML TADS game is exactly
like writing a standard TADS game, except that you can use HTML
formatting commands within the text that the game displays.

All of the programming for an HTML TADS game is the same as for a
standard TADS game, so we won't talk about TADS programming here. If
you're new to TADS, you should start with the *TADS Author's Manual* or
a TADS tutorial, then come back here to learn how to extend the standard
TADS features with HTML formatting.

We also won't attempt to provide a detailed manual on HTML itself. The
HTML that TADS uses is based on standard HTML (version 3.2, to be
precise), with a few [deviations from standard HTML](deviate.htm), so
you can learn the HTML that TADS uses from any of the numerous books or
web pages that describe standard HTML 3.2.

### For TADS 3 Users

TADS 3 **always** treats text output as HTML. There's no way to turn
this on or off, and it applies even on a text-only interpreter. You can
ignore everything in the "For TADS 2 Users" section about turning "HTML
mode" on and off - in TADS 3, HTML mode is always on.

Note that this means that the "\H+" and "\H-" sequences are **not** used
in TADS 3. Any time we mention those, we're only talking about TADS 2.

### For TADS 2 Users: Plain Text Mode and HTML Mode

When the HTML TADS Interpreter starts running your game, it assumes that
your game uses only ordinary text. This ensures that games written for
the standard TADS will work correctly with the HTML TADS Interpreter --
if a standard TADS game displays something that looks like an HTML
formatting command, the interpreter will simply ignore the resemblance
and display the command as ordinary text.

In order to use HTML, then, you have to tell the interpreter that you
want HTML formatting commands to be interpreted. To do this, you must
display a special control sequence, which looks like this:

       "\H+";

Usually, you will do this once, when your game starts running; if you're
using the std.t library, the easiest place to do this is in the
`commonInit` function. Here's an example:

       #include <adv.t>
       #include <std.t>

       replace commonInit: function
       {
          /* enter HTML mode */
          "\H+";
       }

After you display the "\H+" sequence, the interpreter will look for HTML
sequences in the text your game displays and use them to control
formatting.

### Some Quick Examples

Sometimes the easiest way to learn something is to see a few examples.
So, before we start droning on about the theory and practice of writing
HTML, we'll show you some practical examples.

First, here's how you'd display some text in a room description using
***bold italics*:**

       myRoom: room
         // ...
         ldesc = "Here's some text in <b><i>bold italics</i></b>!!!"
       ;

Here's how to display some text in *red italic letters* that are
slightly larger than the main text font size (the "+1" means one size
larger than normal):

       warningSign: item
         // ...
         ldesc = "<font color=red size='+1'><i>Warning!!!></i></font> "
       ;

Here's how to center some text:

       trespassSign: item
         // ..
         ldesc = "<center>
                  <b>Warning!</b>\b
                  Trespassers\n
                  will be fed to\n
                  dragon!\b
                  </center> "
       ;

### HTML Markups

HTML formatting commands are called "markups," because they're used to
"mark up" text with additional information. There are two kinds of
markups: *entities*, which let you specify a single character using its
name; and *tags*, which contain formatting, annotation, or structural
information about the text.

#### Entities

An entity is simply a long way of writing a single character. Entities
were invented for two reasons:

- First, you can use an entity to display a character that would be
  "markup-significant," which means that the HTML parser would normally
  think that the character signified an HTML markup and hence wouldn't
  display the character, but would try to interpret the markup instead.
  For example, a less-than sign is used to start a tag; if you want to
  display a less-than sign in your text, you must use the entity for a
  less-than sign (which is "&lt;").
- Second, entities can be used to avoid character set translation
  problems. For example, there's no ASCII character for a capital E with
  an acute accent. Most computers have "extended ASCII" characters for
  accented characters, but any given accented character might have a
  different character code on different computers. If you've ever tried
  to move a file containing accented characters between a Windows
  machine and a Macintosh, you might have found that the accented
  characters were all jumbled around after moving the file. One of
  HTML's purposes is to allow information to be viewed on different
  types of computers, so HTML's designers had to find a solution to this
  problem. Part of their solution is to use entities. So, to embed the E
  with acute accent, you could write its entity name ("&Eacute"). Since
  entity names don't themselves include any accented characters (they're
  all plain ASCII), they're fully portable, neatly side-stepping the
  whole character set issue.

As you might have noticed from the examples above, entity names all
start with an ampersand ("&") and all end with a semicolon (";"). This
means that the ampersand itself is markup-significant -- if you want to
display an ampersand, you must write its entity instead ("&amp;"). When
you put an entity in your text, all of the characters between and
including the opening ampersand to the closing semicolon are removed
from the displayed text, and the single character named by the entity is
displayed instead.

#### Tags

Tags are used to insert information about the text into the text. All
HTML formatting is done with tags.

A tag starts with a less-than sign ("\<") and ends with a greater-than
sign ("\>). After the less-than sign comes the name of the tag. For many
tags, that's all there is. For example, if you want to start a new
paragraph, you can simply write \<P\> where you want the new paragraph
to begin. In other cases, you will also include *attributes*, which
contain additional information for the tag.

An attribute can simply be a name, in which case the mere presence of
the attribute affects the tag, or it can have a value. If it has a
value, the value follows an equals sign ("=") that follows the
attribute's name.

For example, the \<HR\> (horizontal rule) tag takes the NOSHADE
attribute, which has no value but whose presence indicates that the rule
is to be drawn as a simple line without any shading. So, \<HR\> draws a
default, shaded line, and \<HR NOSHADE\> draws a line without any
shading. The tag also takes an ALIGN tag, which takes a value indicating
what type of alignment to use for the rule: LEFT, RIGHT, or CENTER. So,
\<HR ALIGN=CENTER\> draws a horizontally centered rule, and \<HR
ALIGN=RIGHT NOSHADE\> draws a right-aligned rule without shading.

#### Container Tags

Some tags are *container* tags. A container tag marks a run of text, and
always has an ending tag that specifies where the contained text ends.
Everything from the starting tag to the corresponding ending tag is
contained in the tag.

The ending tag always has the same name as the starting tag, but has a
slash before the name. So, the ending tag for \<B\> is \</B\>. Ending
tags never have any attributes.

For example, the boldface tag, \<B\>, is a container tag; all of the
contained text is shown in boldface:

        "Here's some <B>bold</B> text! ";

In this example, the word "bold" is displayed in boldface.

Container tags must use simple nesting. This means that, if one
container is nested within another, the inner container must end before
the outer container. You can never have overlapping containers, so this
is illegal:

       /* DON'T DO THIS - INCORRECT TAG NESTING */
       "Here's some <B>bold, <I>bold italic, and </B>italic</I> text! ";

This is illegal because the \<I\> tag is nested within the \<B\> tag,
but the \<B\> tag ends before the \<I\> tag. To write this properly, you
must make sure the inner tag, \<I\>, ends before the outer tag, \<B\>:

       /* correct nesting */
       "Here's some <B>bold, <I>bold italic, and </I></B><I>italic</I> text! ";

### Using markups in TADS

Using HTML markups in TADS is simple: just insert them into the text you
display.

For example, suppose you want to put a couple of things in boldface in a
room's description. You do this by putting \<B\> tags around the parts
you want in bold, right in the text of the room's description:

       coldCave: room
         sdesc = "Cold Cave"
         ldesc = "This is an extremely <B>cold</B> cave.
                 A chilling wind blows in from the narrow passage to
                 the north.  You don't feel like you can stand to stay
                 here long; you're positively <B>freezing</B>! "
       ;

HTML works only in text you display. Don't use HTML within programming
code; it should only go in quoted strings that your game displays.

TADS *only* interprets HTML in text that you **display**. TADS ignores
HTML everywhere else. In ordinary string manipulations, even if you use
what might look like HTML tags, TADS will ignore them -- until you
display the strings, at which point TADS interprets the HTML for
formatting the output. For example, consider this code:

       ampkeyVerb: deepverb
         verb = 'ampkey'
         action(actor) =
         {
           local x;

           /* THIS IS A BAD EXAMPLE - THIS WON'T WORK!!! */
           x := inputkey();
           if (x = '&amp;')
             "You pressed the <q>&amp;</q> key!\n";
           else if (x = '&lt;')
             "You pressed the <q>&lt;</q> key!\n";
           else
             "You pressed <<x>>!\n";
         }
       ;

This code will *not* work as you might expect. The problem is that the
string comparisons won't work, because TADS doesn't attempt to interpret
any HTML markups for ordinary string manipulation. The correct way to
write the ampersand test is `(x = '&')`, and the correct way to write
the less-than test is `(x = '<')`. Don't get confused into thinking that
you have to worry about HTML everywhere in your program -- you don't.
You only have to think about HTML when you're displaying text to the
screen.

Here's the correct version of this code:

       ampkeyVerb: deepverb
         verb = 'ampkey'
         action(actor) =
         {
           local x;

           x := inputkey();
           if (x = '&')
             "You pressed the <q>&amp;</q> key!\n";
           else if (x = '<')
             "You pressed the <q>&lt;</q> key!\n";
           else
             "You pressed <<x>>!\n";
         }
       ;

> **An exercise for the reader:** Since this documentation is itself
> written in HTML, coding examples that use markup-significant
> characters (such as the examples above) must use entities to represent
> the markups. To show you something like "`&amp;`" in your web browser,
> for example, we must write "`&amp;amp;`" in the source code for this
> page. You might find it amusing as you hone your HTML skills to try
> writing out some of the HTML required to show the examples above or
> other examples on this page. To check your work, simply look at the
> HTML source for this page by opening the page in a plain text editor
> rather than a web browser.

### Some Common Tags

As we mentioned earlier, there are so many sources of HTML documentation
that we won't even try to provide a full tutorial on HTML here. However,
to help get you started, here are a few simple tags that you might find
handy:

**\<I\> ... \</I\>** - italics.

**\<B\> ... \</B\>** - boldface.

**\<U\> ... \</U\>** - underline.

**\<TT\> ... \</TT\>** - typewriter font. This uses a fixed-width font
if one is available, which can be useful when you want columns of text
to line up. (HTML offers much more sophisticated ways to align columns
of text, including the \<TAB\> and \<TABLE\> tags, but for very simple
cases it's sometimes easier to use a fixed-width font.)

**\<CENTER\> ... \</CENTER\>** - center text.

**\<BLOCKQUOTE\> ... \</BLOCKQUOTE\>** - slightly indent both the left
and right margins. This is usually used to display long passages of
quoted material, but can be handy for simple formatting as well.

**\<SUP\> ... \</SUP\>** - display text as a superscript, in a smaller
typeface and elevated slightly from the main text line.

**\<SUB\> ... \</SUB\>** - display text as a subscript, in a smaller
typeface and lowered slightly from the main text line.

**\<FONT SIZE=n COLOR=c FACE=f\> ... \</FONT\>** - display text in a
different size or color. For sizes, you can use 1 through 7; the default
size is 3, and larger numbers indicate larger font sizes. You can't
specify the exact point size because this varies according to user
settings, so SIZE simply selects a relative font size. For COLOR, you
can specify a color name; some common color names are WHITE, BLACK,
SILVER, GRAY, RED, BLUE, GREEN, YELLOW. You can also specify a
hexadecimal RGB (reg-green-blue) value using notation such as '#FF0000'
(for maximum red, minimum green, minimum blue) or '#808080'
(half-intensity red, half-intensity green, half-intensity blue). You can
also specify a typeface by name; for portability, you should try to use
one of the special TADS fonts, such as 'TADS-Serif' for a serifed font
or 'TADS-Sans' for a sans-serif font, since the user can select what to
display for each of these fonts. Note that you don't have to specify all
of these attributes with the \<FONT\> tag -- if you only want to change
the current text color but leave its size and typeface unchanged,
include only the COLOR attribute in the tag.

**\<Q\> ... \</Q\>** - enclose text in quotation marks. Nested \<Q\>
tags alternate between double quotes and single quotes, which is the
normal typographical convention, and the open and close quotes will use
typographical ("curly") quotes on platforms that support them.

**\<BR\>** - break: start a new line.

**\<HR\>** - horizontal rule: show a horizontal line. You can use this
as a visual separator.

**\<IMG SRC='file.jpg'\>** - show an image from the file "file.jpg" (the
".jpg" suffix indicates a JPEG file; you can also use PNG files, which
have the suffix ".png", and MNG animated image files, which have the
suffix ".mng").

**\<SOUND SRC='file.wav'\>** - play a sound. The [sound system
documentation](sound.htm) describes the details of this TADS extension
to standard HTML. HTML TADS can play "WAV" files (an uncompressed
digitized audio format), MIDI files, MP3's, and Ogg Vorbis compressed
digitized audio files.

### Where to Go from Here

There's much more to HTML and to HTML TADS than what's covered above,
but we hope this gives you enough information to get started. If you
haven't already tried writing your own example game to try out some of
the HTML features above, you should try that now.

A good next step is to find a book or web site on standard HTML. You
should look for something that covers version 3.2 of HTML, because this
is the version that HTML TADS uses. (The newer versions of HTML add a
lot of new features, but you won't be missing much of any practical use
in an interactive fiction context. Most of the new features are related
to programming and scripting. TADS has its own language for programming,
and uses a totally different approach to creating the user interface
anyway.)  
  
  
