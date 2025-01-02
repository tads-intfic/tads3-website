Using the BANNER Feature in HTML TADS Games

# Using the BANNER Feature in HTML TADS Games

BANNER is a tag from HTML 3.0 that allows a document to create a
non-scrolling area on the screen, and display arbitrary HTML markups
within this area. HTML TADS uses BANNER, with a few extensions, to
implement the "status line" that traditional text adventure games
display across the top of the screen to show, for example, the current
location and score.

The BANNER feature is similar to the "frames" feature that many browsers
provide, but is more suitable for HTML TADS games than frames. (HTML
TADS does not support frames.) The fundamental difference between BANNER
and frames is that the contents of a banner are specified directly
within the main HTML text stream, whereas a frame simply contains a
pointer to a separate URL, which provides the contents of the frame.
Using a separate URL doesn't fit into the HTML TADS model, so frames are
not appropriate. Fortunately, BANNER provides the same type of
functionality, and is a good fit for the way HTML TADS works.

BANNER is a container tag. The markups between the \<BANNER\> and
\</BANNER\> tags are the contents of the banner. A banner can contain
almost anything, but cannot contain a TITLE tag or another BANNER tag
(banners cannot be nested; another \<BANNER\> tag within a banner is
ignored).

### Banner ID

BANNER takes an ID attribute that lets the document assign the banner an
identifier. The identifier value is arbitrary; its purpose is to name
the banner, so that subsequent BANNER tags can refer to the same area on
the screen. When HTML TADS formats a BANNER tag, it first looks to see
if it already has a banner on the screen with the same identifier; if
so, it clears all of the markups out of the area that the banner is
using on the screen, and formats the new contents. If no BANNER with the
given ID is present, HTML TADS creates a new banner area, and displays
the contents of the banner in the new area; the system remembers the ID
of the new banner, so that subsequent tags can replace the contents of
the banner with a new display.

The ID feature is useful for banners that are updated from time to time,
since it allows you to replace the contents of the banner while leaving
it at the same position on the screen. This is how status lines are
implemented in HTML TADS -- the status line is simply a banner at the
top of the screen, and on each turn, the game replaces the status line
contents to show the new game status.

### Banner Positioning

The BANNER tag takes an ALIGN attribute that specifies where the banner
goes on the screen. Four values are possible: TOP, BOTTOM, LEFT, and
RIGHT; the default value is TOP. These values determine where the banner
goes, as follows:

- TOP alignment indicates that the banner is positioned at the top of
  the current input window area. The banner takes up the full width of
  the input window. The input window is shortened vertically to make
  room for the banner.
- BOTTOM alignment places the banner at the bottom of the input window.
- LEFT alignment means that the banner is at the left of the current
  input window. The banner takes up the full height of the input window,
  and the input window is horizontally shrunken to make room for the
  banner.
- RIGHT alignment places the banner at the right of the input window.

Each banner effectively splits the input window in two. Initially,
before there are any banners, the input window takes up the entire area
of the main HTML TADS window. The first banner you display divides the
window into two pieces, according to the banner's alignment. For
example, if the first banner you display is TOP-aligned, the main window
will look like this:

    First Banner Contents    

  
  
  
  
    Input Window      
  
  
  

Each subsequent banner splits the remaining input window further. Note
that this means that every banner is rectangular, and the input window
is always rectangular. Banners can never fragment the window in such a
way as to leave part of the window unused.

For example, if you now display a second banner, this time with LEFT
alignment, the window will change to look like this:

    First (TOP) Banner Contents    

Second  
(LEFT)  
Banner  
Contents

  
  
  
  
    Input Window      
  
  
  

Note that the order of the banners in the example above is important, in
that it determines that the first banner takes up the full width of the
main window, and the second banner is shortened vertically by the size
of the first banner. If you wanted to achieve the opposite effect, you
would simply reverse the order of the banners -- you'd display the LEFT
banner first, and the TOP banner second. This would achieve a window
layout like this:

First  
(LEFT)  
Banner  
Contents

Second (TOP) Banner Contents

  
  
  
  
    Input Window      
  
  
  

Note further that in none of the cases above are any of the windows
overlapping. Banners are always sized to fit the areas that they're
allocated, and the banners tile the available area.

### Coloring the Banner

You can specify the text and background colors of a banner using a BODY
tag within the banner. You can also use BODY to specify the background
image for the banner. A BODY tag within a banner affects only the
banner, so the each banner and the main input window can all have
different color settings.

### <span id="size_attrs">Size Attributes</span>

BANNER takes HEIGHT and WIDTH attributes that let you specify the size
of the banner on the screen. Because banners are always constrained in
one dimension according to their alignment, only one of HEIGHT or WIDTH
will be meaningful for a particular banner.

For a horizontal banner (ALIGN=TOP or BOTTOM), only HEIGHT is
meaningful, because horizontal banners always occupy the full width of
the input window. For a horizontal banner, if no HEIGHT attribute is
present, BANNER sets the size of the banner's screen area to be the same
height as the contents. If a HEIGHT value is provided, it specifies the
height of the banner in pixels. You can also specify the height as a
percentage of the main window height, by placing a percent sign ("%")
after the height value. For example, to create a banner that takes up
the bottom quarter of the main game window, you'd write something like
this:

        <banner id=myBanner align=bottom height=25%>

The HEIGHT attribute can also be set to the value "PREVIOUS", rather
than a pixel or percentage height. This specifies that, if banner is
already being displayed (i.e., the ID matches the ID of a previous
BANNER), the height is left unchanged. If HEIGHT=PREVIOUS is specified
and the banner is not already displayed, the default behavior applies
(i.e., the banner's height is set to the height of the contents). For
banners that are frequently updated, HEIGHT=PREVIOUS is usually
desirable, because this makes the banner's screen area remain stable.
The default status line implementation uses HEIGHT=PREVIOUS to keep the
status line fixed in position throughout the game.

For a vertical banner (ALIGN=LEFT or RIGHT), only WIDTH is meaningful.
As with HEIGHT, WIDTH can specify a width in pixels, a percentage of the
main window's width, or the special value "PREVIOUS". If WIDTH is not
specified for a vertical banner, the system sets the width of the banner
to the *minimum* width in which each "unbreakable" item will fit
(individual words and pictures are unbreakable because they can't be
split across multiple text lines).

If you're having trouble making a banner's spacing and sizing come out
exactly the way you want it, you may want to consider using a table
within the banner. Tables give you the most direct control of spacing
and sizing in HTML. Using a table may be especially helpful with a
vertical (LEFT or RIGHT) banner, since you'll probably want to be
especially conservative with screen space in a banner running down one
side of the main window.

### Borders

The BORDER attribute lets you specify that the banner should be drawn
with a border at its inside edge. For a TOP banner, the inside edge is
at the bottom; for a LEFT banner, it's at the right edge; for a BOTTOM
banner, it's at the top; and for a RIGHT banner, it's at the left edge.

You may want to use a border if the banner is the same color as the
window that appears just inside it (this adjacent window may be another
banner or may be the main game window). BORDER takes no value; if it's
specified, a border is drawn, otherwise the banner is drawn without a
border.

### Removing a Banner

The REMOVE attribute specifies that a banner is simply to be removed.
The banner currently being displayed whose ID matches the ID specified
in the \<BANNER REMOVE\> tag is removed from the screen. When \<BANNER
REMOVE\> is specified, \<BANNER\> is not a container, so no \</BANNER\>
tag is allowed.

The REMOVEALL attribute specifies that *all* banners are to be removed.
When this attribute is used, no ID is needed, since every banner will be
removed. This tag is useful for abrupt global changes, such as
restarting the game, when you want to reset the display to its initial
state.

### Interaction with UNDO, RESTART, RESTORE

If you use banners, you may find certain aspects of banner behavior
confusing. To understand how banners interact with certain operations
that make abrupt changes to the overall state of the game, you must keep
in mind that banners are part of the display, and not part of the game
state.

Certain commands make sweeping changes to the game state directly,
without going through any of the steps that your game would normally go
through. In particular, UNDO, RESTART, and RESTORE all update the
internal state of the game to some previous game state. However, these
commands will *not* affect any banners you have displayed, because
banners are part of the *display* state, not the game state, and these
commands never affect the display state.

Banners are thus not affected by UNDO, RESTART, and RESTORE for the same
reason that text displayed previously on the screen is not affected. If
you type UNDO, the text that was displayed by the command being undone
is not erased from the screen - more text is simply added after it. The
same holds for banners.

Depending on how you use banners in your game, you may find this
behavior undesirable. For example, if you use a banner to display a
picture of the current location, it's a problem if the picture isn't
updated when you restore a game.

If you have banners that you use to display information that changes in
response to changes in game state, the best approach to dealing with
UNDO, RESTART, and RESTORE is to update the banners on each turn from
within a daemon. This will ensure that the banners will always show the
correct state at the start of each turn. (This is effectively how the
status line works, incidentally; the status line is updated whenever a
new command line is about to be read, so it always displays the correct
information even though its contents aren't part of the game state and
thus aren't updated by UNDO, RESTART, or RESTORE.)

Alternative approaches could work just as well, depending on your game.
For example, if you have banners that change infrequently, you could
define a routine to update the banners to the current state, and
explicitly call this routine whenever something happens in the game that
would affect the banners. You could then add a call to this routine to
the `action` methods for the undo, restart, and restore `deepverb`
objects (using the `modify` mechanism to change the adv.t object
definitions).

### Example of a Status Line

The default status line implementation in `adv.t` uses BANNER to provide
a status line similar to the style used in the standard TADS
interpreter.

        statusLine =
        {
            "<banner id=StatusLine height=previous>
            <body bgcolor=statusbg text=statustext><b>";

            self.statusRoot;

            "</b><tab align=right><i>";

            say(global.score); "/";
            say(global.turnsofar); " ";
            
            "</i></banner>";
        }

The first line contains the BANNER tag. This uses the default TOP
alignment to make the status line a horizontal band at the top of the
main window. It also gives the banner the ID "StatusLine", so that the
same banner window can be reused every time the status line is updated.
(The ID "StatusLine" isn't anything special -- it's just a way
identifying the banner so that each update goes to the same window. You
can use any ID you want for each banner, as long as each banner has a
unique name relative to the other banners in your game.)

The second line uses the BODY tag to set the banner's background and
text color. These use the appropriate [parameterized color
settings](deviate.htm#colors) for the status line.

The next line calls the `statusRoot` method to display the room's name
(usually via its `sdesc` property, although some rooms override this to
provide additional information, such as "in the raft").

The next line uses the \<TAB ALIGN=RIGHT\> tag to align the remainder of
the current line against the right edge of the banner window. Whenever
the window is resized, the system will reformat the text so that it's
aligned properly in the available space.

The next two lines display the current score and the number of turns
played so far in the game.

Finally, the last line closes the banner. Since BANNER is a container
tag, the closing \</BANNER\> is required, so that the system can figure
out where the banner's contents end and the rest of the main window's
text resumes.

### Example of a Command Bar

You can use BANNER to provide a list of simple commands that's always
displayed. As an example, here's some code that displays a list of
commands in a vertical banner at the left edge of the window.

        "<banner id=CommandBar align=left width=75>
        <body bgcolor=yellow textcolor=black>
        <br><a href='inventory'>inventory</a>
        <br><a href='score'>score</a>
        <br><a href='look'>look</a>
        <br>
        <br><a href='go north'>go north</a>
        <br><a href='go south'>go south</a>";

        // add other commands as desired

        "</banner>";

Because of the dynamic nature of banners, you can extend the command bar
by always updating it with a set of commands relevant to the current
situation. You can do this by adding to the status line code, for
example, and building a new banner on each turn with the same ID (which
has the effect of replacing the old banner, but keeping the same screen
area), and containing the commands currently available.

### Splitting a Banner Area

You may find yourself in a situation where you want to divide a banner
into two pieces, to achieve a layout something like this:

Banner 1

Banner 2

  
  
  
  
    Input Window      
  
  
  

The BANNER feature doesn't provide a direct way of doing this. However,
you can achieve a similar effect using a single banner that contains a
table. To do this, simply specify a table with one row and two cells:

        "<table width='100%' cellspacing=0 cellpadding=0>
        <tr align=center valign=middle>
        <td bgcolor=yellow>This is the left half
        <td bgcolor=green>This is the right half
        </table>";
