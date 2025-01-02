<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.htm" class="nav">Table of Contents</a> \|
<a href="ui.htm" class="nav">The User Interface</a> \> The Banner Window
Display Model  
<span class="navnp"><a href="dispfn.htm" class="nav"><em>Prev:</em> The Default Display
Function</a>    
<a href="web.htm" class="nav"><em>Next:</em> Playing on the Web</a>    
</span>

</div>

<div class="main">

# The Banner Window Display Model

The tads-io function set provides a group of functions that allow the
program to perform sophisticated manipulation of the display layout.
This group of functions, called the Banner Window API, lets the program
divide the screen into separate "window" areas that can show independent
information.

To use the Banner API, it's necessary to understand its underlying
display model. This section explains the display model. The API
functions are part of the [tads-io](tadsio.htm) function set, so refer
to that section for details on the functions.

## Screen layout overview

Banners work by splitting one window into two. In other words, we take
an existing window and draw an imaginary line either across the width of
the window, or down the height of the window; the existing window keeps
the space on one side of the line, and the new banner window gets the
space on the other side of the line. The existing window shrinks in the
process, since some of its space is taken over for the new banner
window.

The original window that we split in two is called the "parent" window.
The parent can be the main game window (the original window that the
interpreter automatically creates at start-up, and which contains the
main input/output transcript of the game), or it can be another banner
window. We sometimes refer to the new banner window as a "child" of the
parent window.

When the program creates a banner window, it specifies an "alignment"
and a size for the new window. The alignment determines how we draw the
line that splits the parent window, and which side of the line contains
the banner window and which contains the shrunken parent window. There
are four types of alignment: Top, Bottom, Left, and Right. For Top and
Bottom alignment, we split the window with a line across the width of
the window; for Top alignment, the new banner window gets the space
above the line, and the for Bottom alignment, the new banner takes the
space below the line. Left and Right alignment split the window with a
vertical line; a Left banner takes the portion to the left of the line,
and a Right banner takes the portion to the right of the line. The size
determines where the dividing line goes: the dividing line is placed
such that the banner's height (for a Top or Bottom banner) or width (for
a Left or Right banner) matches the size parameter.

To determine where each banner goes, the interpreter does the following.
We start with the main window, giving it the entire available space
(this might be the entire screen on a character-mode terminal, or the
entire application window on a graphical system). We then visit each
child of the main window. For each child, we look at the child's
alignment and size to determine where to draw the imaginary dividing
line; then we give the banner window the appropriate portion, and shrink
the main game window to take its portion of the space. Then, we visit
all of the child's children, and do the same thing, dividing and
shrinking the child. We repeat the process on the child's children's
children, and so on until we run out of descendants.

Let's look at an example. Initially, we start out with just the main
game window, which takes the entire available space:

Main

Now, let's add a banner. Text games traditionally display a status line
at the top of the screen, with one or two lines of text; so, let's
create a banner for the status line. For now, we'll make it one "text
unit" high, which is roughly a line of text. So, we're creating a banner
whose parent is the main window, with Top alignment and a size of 1.

Status

Main

Now let's suppose that we want to add a more complex display, with an
area below the status line that displays a picture of the current
location. We want another top-aligned child of the main window, because
we want it to run the width of the main window and be above the main
window. We'll make its size about ten lines for now.

Status

Picture

Main

This raises a question: why is the Picture window below the Status
window? And what if we actually wanted it above the Status window? The
answer is in the ordering of the windows: the Status window comes first
in the main window's child list, so it gets split off first, which means
it gets the top of the entire display area. The Picture window is split
off second, which means that it has to take what's left of the main
window after the Status window has already been carved out. If we wanted
the Picture window to be above the Status window, we'd simply have to
specify that it comes first. Note that this doesn't mean we have to
create it first; when we create a new banner, we can specify where the
new banner goes among the other children of its parent, so if we had
wanted the Picture window to be on top, we could simply have specified
that it goes first in the main window's child list.

Now we want to add another window: we want to add a window alongside the
picture window, showing a compass graphic in the new window. We don't
want to create another "band" across the entire width of the main
window; rather, we want to share some of the space the Picture window
already has. To do this, we can create a child of the Picture window,
and align it to the right.

Status

Picture

C

Main

The Compass ("C") window splits the area that the Picture window had,
taking the right portion because it's a right-aligned banner.

## Borders

A banner can optionally display a "border" to separate it from its
parent. The border essentially makes the imaginary dividing line between
the banner and its parent visible on the screen. Borders are controlled
via the "style" flag when creating a banner.

A banner's border is always exactly one line: it's always the dividing
line between the banner and its parent. In the example above with the
Picture and Status banners, if the Picture banner had a border, it would
appear between the Picture and Main windows, because the Picture window
was split from the Main window. To draw a line between the Status and
Picture windows, you would have to give the Status banner a border.

A banner's children have no effect on the banner's border. If a banner
is drawn with a border, the border will appear exactly the same way
whether the banner has children or not; so, to figure out where a border
would be drawn, consider what the window would look like without any
children of its own. In the example above with the Picture and Compass
windows, if the Picture window had a border, this border would be drawn
across the full width of the window, under both the Picture and Compass
("C") windows. So, there would be a border between the Compass window
and the Main window whether or not the Compass window itself had a
border. (Furthermore, if the Compass window did have a border, it would
be drawn as a vertical line between the Compass and Picture windows,
because the Picture window is the Compass window's parent.)

Some systems do not support borders at all; in fact, most character-mode
platforms do not, because there's usually no good way to draw lines in
character mode, and even if there were, it would take up too much space.
You can tell whether or not the current system supports border drawing
by checking the style flag returned from bannerGetInfo(); on systems
that don't support borders, you might want to use some other means to
visually separate a banner from its parent, such as using different
background ("screen") colors in each window.

## More Details on Layout

TADS interpreters display everything on what we call "the screen". This
term is misleading on modern systems, because most computers today have
graphical user interfaces, and on a GUI, TADS usually only gets a window
on the desktop, not the whole physical display. To clear up any
confusion, here's what "the screen" actually means to TADS in the most
common configurations:

- For a character-mode terminal, or an operating system like MS-DOS that
  has a simple character-mode console, "the screen" really is *the
  screen* - i.e., the entire physical display device.
- When TADS runs as a character-mode process in a terminal window in a
  graphical operating system, such as an "xterm" session running under
  the X window system on Unix, "the screen" is the whole interior of
  that terminal window.
- On a graphical operating system where the TADS interpreter runs as a
  native GUI program (such as HTML TADS on Windows, CocoaTADS on Mac OS,
  QTads on Linux or Mac OS), "the screen" is the interior of the
  interpreter's main window. In these cases, when we talk about banner
  "windows", we're talking about subdividing the space within that main
  application window, not about opening new native windows.

When the TADS interpreter loads a new game program, it initially devotes
the entire "screen" to one window, which we call the "main game window".
This main window acts a lot like a banner window, but it has some
differences, so we use the special designation "main game window" to
refer to this window.

At any time while the game program is running, it can create new "banner
windows". A banner window is a rectangular area of the screen that can
be separately controlled: each banner has its own contents, background
color, text color, and so on.

All of the banner windows that are shown at any given time share space
on the screen with one another and with the main game window. Two
windows can never overlap, every window is rectangular, and all of the
windows taken together must fill the entire screen. In other words, the
windows act as non-overlapping "tiles" that completely fill the
available screen space. These are important constraints that determine
precisely how the screen looks with a given arrangement of windows, and
make it relatively simple to specify the screen layout; the disadvantage
of these constraints is that they don't allow the game program to create
any arbitrary display, but the compensating advantage is that the
constraints are simple to apply across a wide range of platforms, so the
program can count on consistent results without having to include
special-case code for different machines and display types.

Each banner window has three main parameters that control its layout on
the screen. First, each banner has a "parent": this is either the main
game window or another banner window, and provides the base area from
which the new banner's area is taken. Second, each banner has an
alignment type, which can be Top, Bottom, Left, or Right. The alignment
specifies which portion of the parent window's space is taken for the
banner. A top-aligned banner takes the top portion of the parent's
space, and runs the full width of the parent window; a bottom-aligned
banner also runs the entire width of the parent, but takes the bottom
portion of its space. Left and right banners run the entire height of
the parent window, and take the left and right side, respectively, of
the parent's space. Third, each banner has a size, which gives the size
of the "free" dimension, as determined by the alignment: a top or bottom
banner's size specifies its height, and the left or right banner's size
specifies its width.

Each parent window can have one or more children. When a window has more
than one child, the children are arranged into an ordered list: one
banner is the first child, another is the second, and so on. The order
is important because each child is carved out of its parent's remaining
space; we start with the first child, taking its space away from the
parent's space, then move to the second child, taking its space away
from what remains of the parent's space, and so on. When the game
program creates a banner, it can specify the position of the new banner
among the parent's children.

The screen layout is dynamic: each time a new banner window is created,
or a banner window is removed, or a banner is resized, or the screen
size changes (which can happen, for example, when the user resizes the
"xterm" window displaying the interpreter), TADS must recalculate the
screen layout. Every time any of these events occurs, TADS completely
recalculates the screen layout; this means that the layout is always
predictable, because it's always calculated the same way, regardless of
what caused a change.

To calculate the screen layout, the interpreter first gives the main
game window the entire screen area. The interpreter then visits each
child of the main game window, in the order that the program specified
when creating the child windows. For each child window, we do the
following:

1.  We look at the current child window's alignment and size settings,
    and figure out where to draw the imaginary line dividing the parent
    window. If the child's size setting is greater than the available
    space in the parent window, we limit the child's size to that of the
    parent window; in other words, the child gets all of the parent's
    space (but no more), and the parent will get nothing.
2.  We assign the space on one side of the dividing line (according to
    the alignment) to the current child.
3.  We assign the space on the other side of the line to the parent,
    shrinking the parent to its new size.
4.  For each child of the current child window, we recursively apply
    this same procedure to subdivide the current child's space among its
    own children.

There are a couple of interesting features of this layout algorithm
worth pointing out.

First, when a banner is deleted, all of its children become immediately
invisible. This is because a banner gets its space exclusively from its
parent; once a banner is deleted, its children no longer have any way to
obtain any space on the display. It won't even help to resize the
children: without a parent, a child simply has no way to obtain any
display space. The children of a deleted banner remain valid as abstract
objects, so you can still call banner API functions that reference their
banner handles, but they can never again have a display presence.

Second, a banner's final size is not necessarily the same as its size
parameter setting. Suppose we have a top-aligned banner (call it "A"), a
child of the main game window with a size of 50%. Suppose also that this
window has a child of its own (call this "B"): a bottom-aligned banner
which also has a size of 50%. The layout algorithm will start by giving
banner A the top half of the entire screen; but when we lay out its
child B, we take away half of that height to give to B. In the end, A
only gets 25% of the entire screen. (This probably won't come up a lot
in practice, since it would be unusual to create a child with the same
orientation as its parent.)

Third, a child window can never cause its parent to expand. If a child's
size is greater than the available space in its parent, the child simply
gets the entire available space in the parent - but no more - and the
parent is shrunken down to zero size.

Fourth, although a child causes its parent to shrink as the child carves
out space from the parent, this effect never flows "up the tree": a
child can never affect its grandparent or any siblings of its parent.
This is an important but subtle point, because it makes the layout rules
simple and predictable; there is no "negotiation" for space, and no
possibility of irresolvable conflicts, as can sometimes occur with
constraint-based layout systems.

## Banner Types

When the game creates a banner window, it can specify the type of window
to use. The following types are defined:

- **Text:** This is an ordinary window that behaves much as the main
  game window: it has stream-oriented output, so each bit of text
  written to the window is displayed at the end of any existing text in
  the window. Text windows support HTML markups, to the same extent the
  main game window does. On full HTML interpreters, text windows can
  display graphics, typefaces, text sizes, and so on - everything that
  the main game window can display.
- **Text Grid:** This window emulates a character-mode terminal. This
  type of window displays only text, and uses a single fixed-width font
  (determined by the operating system, or, on some systems, chosen by
  the user through preferences mechanism). HTML is not interpreted in
  these windows; it is not possible to display graphics in a text grid,
  even on a full HTML interpreter on a GUI system, and these windows
  can't even display different typefaces or text sizes; the one
  available effect is that the text and background colors can be
  controlled, on interpreters (and display devices) that support text
  colors. In exchange for sacrificing all of the HTML formatting
  controls, text grid windows allow you to control the exact positioning
  of text within the window: you can set the output position to anywhere
  within the window for each bit of text you display in the window, and
  you can even overwrite text previously displayed with new text. Text
  grids can thus be used for text animation and special text formatting
  effects.

Note that text grids are mostly provided for character-mode platforms,
but they're also supported on the full HTML interpreters for
compatibility. In most cases, the kinds of effects for which text grids
are most useful can be presented more elegantly on the full HTML
interpreters by other means; for example, a "menu" window that uses
cursor positioning to move around a selection pointer in response to
keyboard inputs can often be better presented in HTML interpreters using
a list of hyperlinks. Whenever you're about to use a text grid, you
should at least consider whether there might be another alternative
that's a better fit for GUI platforms.

## Sizing Banners

The banner API provides three different ways of setting the size of a
banner. Which sizing method is best for a particular banner depends on
how the banner is used.

Note that when we talk about the "size" of a banner, we're talking about
the free dimension of the banner, because the other dimension is always
bound by the layout rules and thus can't be controlled independently.
For a top-aligned or bottom-aligned banner, the size is the height; for
a left- or right-aligned banner, the size is the width.

**Percentage sizing:** The first method is to size a banner in
proportion to the available parent area, by specifying the size as a
percentage when creating the banner (with
<span class="code">bannerCreate()</span>) or changing its size (with
<span class="code">bannerSetSize()</span>). The size of the banner will
always be the given percentage of the available parent space; see the
screen layout overview above for details of how this is determined. When
you set a percentage size, the banner specifically remembers the
percentage value, not the pixel size that the percentage translates into
at any given time; whenever the layout changes (because the user resizes
the application window, for example, or because another banner is
created), the banner automatically adjusts to the new layout using the
same percentage.

**Absolute sizing:** The second method of sizing a banner is to state
the size in terms of the "natural units" of the banner window. The
natural units depend on the type of banner:

- For a text window, the natural size is character cells. Because a text
  window can use a proportionally-spaced font, where characters are of
  differing sizes, and can even display multiple fonts at once, the unit
  size here is necessarily arbitrary, so this is defined as the size of
  a "0" character in the default font of the window. The default font is
  the initial font for a newly created text window; note that this might
  differ from the original initial font of an existing text window,
  because the user could have changed the default font in the preference
  settings after the window was created.
- For a text grid window, the natural size is character cells. A text
  grid always uses a single, fixed-pitch font, so this is simply the
  size of a character in the window's current font.

**Content-based sizing:** The third method is to size the banner so that
its current contents exactly fit. In many cases, it's desirable for a
banner to be exactly big enough to show some specific contents; this is
the case when a banner is used to display something like a status line
or an interactive menu. Even absolute sizing is inherently imprecise for
regular text windows, because the natural sizing units are character
cells that might not represent the actual mix of characters and fonts
displayed. To accommodate the need for exact content-based sizing, the
banner API provides a function, bannerSizeToContents(), that sets the
size of a banner window so that the actual current contents exactly fit.

By default, the content size of a banner includes only the banner's own
contents. If the banner has any child banners, they're not normally
included in calculating the banner's content size. However, sometimes
it's useful to be able to include some or all of the child banners in
calculating the size of the parent. For this, you can use the
BannerStyleHStrut and BannerStyleVStrut style flags in the child banners
whose sizes you want to include. ("Strut" in the sense of a rigid
support bar: the child window's contents serve to force the parent
window to at least the size of the child.) If you set the
BannerStyleHStrut style on a child window, bannerSizeToContents() takes
the child's width into account when setting the parent's width.
Likewise, if you set BannerStyleVStrut on a child, the child's height
will be figured into the parent's height.

Unfortunately, not all platforms are technically capable of supporting
contents-based sizing, so it's not available on all interpreters. It's
always safe to call bannerSizeToContents(), but on platforms where
contents-based sizing isn't supported, the function will simply do
nothing. Because of this, you should always be careful when using
bannerSizeToContents() to also set an "advisory" size. Platforms that
support true contents-based sizing will ignore the advisory and use the
real content size, and those that don't support contents-based sizing
will simply use the advisory size. To make sure your banners work
properly on different platforms, follow this recipe whenever you use
contents-based sizing:

1.  Calculate an estimate of the required size, in the window's natural
    units. For text windows, this is usually just a matter of
    determining how many lines of text will be displayed. Of course,
    it's not always possible to predict the exact number of lines that
    you'll need, especially if line wrapping comes into play. If you're
    displaying text with lines long enough that they might wrap some of
    the time, you might want to include a couple of lines of padding in
    your estimated size to be safe.
2.  Call bannerSetSize() to set the banner to the size you estimated.
    Pass true for the isAdvisory flag, to indicate that an exact
    contents-based size will be set later. Platforms that support
    contents-based sizing will ignore this call entirely, because of the
    isAdvisory flag, so there will be no unnecessary redrawing from an
    extra resize.
3.  Display the contents.
4.  Call bannerSizeToContents() to set the exact contents-based size, if
    possible. For platforms where this is not implemented, it will have
    no effect, so the estimated size will remain in effect; where
    contents-based sizing is available, the estimated size will be
    discarded and the exact size set instead.

By using this procedure, you'll ensure that your banners will look
reasonably good on all platforms, and that it they'll look exactly right
on platforms that do support size-to-contents (as most platforms do).

**Note:** in practice, you'll probably never encounter a platform where
bannerSizeToContents() doesn't work. The recipe above was designed in
anticipation of Glk-based implementations of HTML TADS and the banner
API. (Glk is a UI portability toolkit for IF-style user interfaces. Glk
doesn't provide a means of calculating exact layout sizes, so
bannerSizeToContents() could not have been implemented in Glk versions.)
As it turned out, no one ever built Glk ports with the banner API.
Instead, full native versions are available on all of the major desktop
platforms, and all of these support the more reliable
bannerSizeToContents() functionality.

## Banner Functions

The banner API is implemented as part of the [tads-io](tadsio.htm)
function set, which provides programmatic control over the TADS user
interface. The banner functions all have names of the form bannerXxx.

## Notes for TADS 2 users

The banner API **replaces** the TADS 2
<span class="code">\<BANNER\></span> tag. The
<span class="code">\<BANNER\></span> tag is not supported at all in TADS
3; interpreters will ignore it.

The Banner API provides the same functionality that was available in
HTML TADS 2 interpreters via the <span class="code">\<BANNER\></span>
tag, but with many improvements. The new API goes beyond the
<span class="code">\<BANNER\></span> tag from TADS 2 in several
important ways:

- The <span class="code">\<BANNER\></span> tag in TADS 2 was available
  only in full HTML interpreters. The TADS 3 banner window API works on
  many different interpreters, including text-only interpreters. (It
  isn't *guaranteed* to work on all interpreters, but the range of
  compatible interpreters is greatly expanded compared with the
  HTML-only <span class="code">\<BANNER\></span> tag. The interpreters
  that omit support for the Banner API are mostly older versions, which,
  hopefully, will eventually be updated to the new API.)
- The <span class="code">\<BANNER\></span> tag was sent to the main
  output stream, so updating a banner had the side effect of updating
  the main output window; this made it impossible to update a banner
  window without canceling command-line editing in progress, such as
  during a real-time event. The banner window API makes each window's
  output stream truly independent, so banners can be freely updated
  during timed events without interfering with operations in progress in
  other windows, including input editing in the main window.
- The <span class="code">\<BANNER\></span> tag was tied to the
  hierarchical structure of HTML, which meant that the entire contents
  of a banner had to be enclosed within the
  <span class="code">\<BANNER\>...\</BANNER\></span> sequence; this made
  it impossible to add new text to a banner later, after the
  <span class="code">\</BANNER\></span> close tag, and in particular
  made it impossible to add to a banner in response to a new command.
  The banner window API treats each window's output stream as
  independent, so the program is free to add to an existing banner at
  any time.
- The banner window API adds several new features to banners that were
  not present in the <span class="code">\<BANNER\></span> tag, including
  optional scrollbars, and optional automatic scrolling into view as new
  text is added.
- Banner windows can be split from the main text window, as the
  <span class="code">\<BANNER\></span> tag did in TADS 2, but they can
  also be split from other banner windows. This provides much more
  powerful layout capabilities.
- The banner window API introduces the new "text grid" window type,
  which simulates a character-mode terminal window and thus gives the
  program character-by-character control over text positioning. Text
  grid windows allow the program to write text at any position within
  the window, and to overwrite text previously displayed.

</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 System Manual*  
<a href="toc.htm" class="nav">Table of Contents</a> \|
<a href="ui.htm" class="nav">The User Interface</a> \> The Banner Window
Display Model  
<span class="navnp"><a href="dispfn.htm" class="nav"><em>Prev:</em> The Default Display
Function</a>    
<a href="web.htm" class="nav"><em>Next:</em> Playing on the Web</a>    
</span>

</div>
