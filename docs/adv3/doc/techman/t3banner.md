---
layout: docs
---
<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="depth.html" class="nav">TADS 3 In Depth</a> \> Using the Banner
API  
<span class="navnp"><a href="t3npcTravel.html" class="nav"><em>Prev:</em> NPC Travel</a>
    <a href="advtop.html" class="nav"><em>Next:</em> Advanced Topics</a>
    </span>

</div>

<div class="main">

# Using the Banner API

*by Eric Eve*

*Note: the customBanner.t source file described in this article can be
found in the* lib/extensions *folder in the standard TADS 3 Author's Kit
and library distributions.*

*Important Note: the Banner API cannot be used with games compiled for
the Web UI; if you want to use the Banner API you must compile your game
for use with a traditional HTML-TADS interpreter.*

## Introduction

The Banner API in TADS 3 is the feature that allows the interpreter
screen to be divided into a number of different windows during game
execution. Normally a TADS 3 game uses two windows, the main window in
which commands are entered and the game's responses are displayed, and
the status line banner at the top, which typically shows the current
room, the current turn count and score, and a list of currently
available exits. This is more often than not quite sufficient for most
text adventures/masterly works of Interactive Fiction, but occasionally
an author may want something more elaborate.

Suppose, for example, we were writing a game in which we wanted to
display a picture of every room the player character visits, along with
pictures of some of the objects he or she examines. Rather than having
our pictures incorporated into the text shown in the main window, where
they would soon scroll out of sight, we might want them displayed in a
separate window where they remain in view until replaced by another
picture. With this arrangement we might also want a separate caption
window to display some text describing what the current picture is a
picture of. To implement this scheme, we might want to divide the
available screen space up something like this:

Status

Picture

Caption

Main

The TADS 3 library already takes care of the status line for us, but we
would need to implement the picture banner window and the caption banner
window. Not only would we need to arrange these banners correctly on
screen and update them with the right contents, but we should also need
to ensure that our code took care of issues such as the following:

- Ensuring that the banner window *layout* is still correct after an
  UNDO, RESTART or RESTORE
- Ensuring that the contents of each banner window is shown correctly
  after an UNDO, RESTART or RESTORE
- Catering for the possibility that our game might be run on an
  interpreter which lacks the capability to display graphics

The basic banner window model is described in the *System Manual*
article on [The Banner Window Display Model](../sysman/banners.html). If
you are not already reasonably familiar with this, you might like to
read it now, since the present article assumes some understanding of the
screen layout model it describes. This might also be a good point to
take a look at the the *System Manual*'s description of the low-level
banner API functions in the section on the [tads-io Function
Set](../sysman/tadsio.html). Although these low-level functions are not
the best way to manipulate banners in a TADS 3 game, some understanding
of what they do may nevertheless be helpful for seeing the range of
banner functions available. In particular it is useful to refer to the
bannerCreate() function, and in particular its argument list, since even
if we end up using alternatives to bannerCreate(), our alternatives will
still use much the same list of arguments.

## <span id="tadsio">Using the tadsio Banner API Functions</span>

Although you would probably not want to use the low-level Banner API
functions in a real game, it's worth taking a quick look at how one
might use them to start implementing the banner layout shown above,
since this at least introduces some important principles.

For ease of reference, let's repeat that layout diagram here:

Status

Picture

Caption

Main

The main thing to notice about this layout is that the space between the
status line banner is divided into two windows, one for the picture, and
the other for the caption. To create such a layout we first need to
create a horizontal division within the main window, with the upper area
being used for our two new banners. We then need to divide that new area
vertically into left-hand and right-hand regions. The way the banner
display model works, we do that by creating *one* new child window from
our new window, and assigning it to (say) half the available space.

It doesn't much matter whether we create the picture window or the
caption window first, but there is perhaps some logic in starting with
the picture window (since the caption window is in some sense
subservient to it in function, so that if we decided to remove the
picture window at some point, we wouldn't want to retain the caption
window).

We could create the picture window using the low level function
<span class="code">bannerCreate()</span>:

```
    picWin = bannerCreate(nil, BannerAfter, statuslineBanner.handle_, BannerTypeText, 
                  BannerAlignTop, 10, BannerSizeAbsolute, BannerStyleBorder);
```

The first argument here is the parent window of the new window we're
creating. In this case the parent is the main window so we use the value
<span class="code">nil</span>. The second and third arguments define
where in the parent window we want our new banner created; in this case,
we want it after the status line banner. There's a slight complication
here, in that <span class="code">bannerCreate</span> expects us to
specify not the sibling banner *object* here but the sibling banner's
*handle*, which is simply an integer that the system uses internally to
keep track of which banner is which.

The fifth argument, <span class="code">BannerAlignTop</span>, stipulates
that we want our new banner to appear at the top of the available space
we're carving out of the main window, but after the statusline banner.
The sixth argument is the size (in this case depth) of our new banner
window (at this stage its width is simply the full screen width), the
seventh argument, <span class="code">BannerSizeAbsolute</span>
stipulates that this is an absolute size, the unit being lines of text
in the default font of the window. Finally we give our new banner a
border with the last argument.

At this stage, our window layout will look something this this:

Status

Picture

Main

The next job is to create the Caption banner window. We want this to
occupy the right hand half of the space currently occupied by the
picture banner, so we make it a child of picWin, align it to the right,
and assign it 50% of the space:

```
    captionWin = bannerCreate(picWin, BannerFirst, nil, BannerTypeText, 
                  BannerAlignRight, 50, BannerSizePercent, BannerStyleBorder);
```

This time the second and third arguments are
<span class="code">BannerFirst</span> and <span class="code">nil</span>
respectively, since we want this new banner to be the first (in this
case rightmost) child of its parent, which means in turn that we don't
need to name a sibling for it to come before or after (in any case, it
has no siblings).

At this point we need to stop and ask the question, what kind of values
are <span class="code">pcWin</span> and
<span class="code">captionWin</span>? They are, in fact, banner handles,
which as we've already seen, are simply integers. This being so we need
some place we can store a reference to them so we can refer to them
later; that place will almost certainly need to be a pair of object
properties, which means in turn that we need to create an object in
which to store them. While we're at it, we could make it an
<span class="code">InitObject</span> so that it can automatically create
our banner layout at startup:

```
    banners:InitObject
       picWin = nil
       captionWin = nil
       
       initLayout()
       {
         picWin = bannerCreate(nil, BannerAfter, statuslineBanner.handle_, BannerTypeText, 
                  BannerAlignTop, 10, BannerSizeAbsolute, BannerStyleBorder);

         captionWin = bannerCreate(picWin, BannerFirst, nil , BannerTypeText, 
                  BannerAlignRight, 50, BannerSizePercent, BannerStyleBorder);
       }

       execute() {  initLayout(); }
    ;
```

Now, when we want to display anything in our new banner windows, we can
simply use the <span class="code">bannerSay()</span> method; e.g. to
display a picture of a banner with a caption:

```
    bannerSay(banners.picWin, '<img src="pics/sheldonian.jpg">');
    bannerSay(banners.captionWin, 'A view of Oxford\'s famous Sheldonian Theatre,
       designed by Sir Christopher Wren');
```

So far, this works reasonably well, and it serves to illustrate some of
the main principles of working with banners in TADS 3, but there a great
many issues we have not dealt with. For example, if the player issues an
UNDO command just after we have updated our banner windows with new
content, the new content will remain on screen, and won't automatically
roll back to what was shown on the previous turn. There's also nothing
to handle what should happen when a game is restored, or when it's
played on an interpreter that can't handle graphics. It would no doubt
be possible to add further sophisications to the basic code shown above
to handle all these situations, but this may not be the best method to
proceed, so from now on we'll look at an alternative: controlling banner
windows through the BannerWindow class.

## <span id="BannerWindow">Using the BannerWindow class</span>

The main difference from the previous approach is that instead of
calling low-level tadsio methods, we define objects to represent the
various banner windows we want to create, and then use their methods to
manipulate them. In essence we create:

```
    picWindow: BannerWindow
    ;

    captionWindow: BannerWindow
    ;
```

Of course the above definitions will not actually do anything, since
they don't define where our two new banners are to appear, or do
anything to make them appear. But they do illustrate one point: whereas
before <span class="code">picWindow</span> and
<span class="code">captionWindow</span> were properties of a separate
object we had to create for the purpose, now they are objects in their
own right. The identifiers <span class="code">picWindow</span> and
<span class="code">captionWindow</span> thus refer to *objects* and not
to integers representing handles. The handle values we used before would
now be given by <span class="code">picWindow.handle\_</span> and
<span class="code">captionWindow.handle\_</span>, but in fact we
probably won't need to refer to these handles any more, since we can now
refer to the objects instead. Indeed, if we *did* refer to the
<span class="code">handle\_</span> properties at this point, we'd find
they were both <span class="code">nil</span>, since we've done nothing
to create the actual banner windows in the screen layout.

To make a <span class="code">BannerWindow</span> object actually do
something to the screen layout, we need to do the equivalent of invoking
the <span class="code">bannerCreate()</span> function, which is to evoke
the <span class="code">BannerWindow</span>'s
<span class="code">showBanner()</span> method (which in fact does itself
call <span class="code">bannerCreate()</span>, after carrying out lot of
intermediate background busy-work to help keep track of what's going
on). A good place to call this method if we want our banners to be
included in the screen layout at startup is their
<span class="code">initBannerWindow()</span> method, since this is
called during game initialization. Following the same logic we used
before, as a first attempt we might try:

```
    picWindow: BannerWindow
       initBannerWindow()
       {
          showBanner(nil, BannerAfter, statuslineBanner, BannerTypeText, 
                  BannerAlignTop, 10, BannerSizeAbsolute, BannerStyleBorder);

          /* 
           * inherited() here simply sets inited_ to true, to show that we have
           * now initialized this banner.
           */
        
          inherited();
         
       }
    ;

    captionWindow: BannerWindow
       initBannerWindow()
       {
          showBanner(picWindow, BannerFirst, nil , BannerTypeText, 
                  BannerAlignRight, 50, BannerSizePercent, BannerStyleBorder);  
       
          inherited();
       }
    ;
```

As you may have noticed, the arguments to
<span class="code">showBanner()</span> are almost identical to those of
<span class="code">bannerCreate()</span>, with one important difference:
in <span class="code">showBanner()</span> the first and third arguments
(if present), representing the parent and sibling of this window, are
now <span class="code">BannerWindow</span> *objects*, not integers
representing handles.

If you actually tried to run the above code, however, there's a good
chance you'd encounter a run-time error. The problem is that there's now
nothing in our code to control the *order* in which our banner windows
are created (we can't rely on source text order to determine it), with
the result that the VM may attempt to initialize
<span class="code">captionWindow</span> before
<span class="code">picWindow</span>; this will cause an error because
you must create the parent banner before any of its children; in fact
you must create it before *any* of the other banners listed among the
arguments it uses in <span class="code">showBanner()</span>, whether a
parent banner, or a sibling banner we're to be placed before or after.

The trick is to ensure that <span class="code">initBannerWindow()</span>
calls the <span class="code">initBannerWindow()</span> methods of any
banners that must already exist. So as a second attempt we might try:

```
    picWindow: BannerWindow
       initBannerWindow()
       {
          statusLineBanner.initBannerWindow();

          showBanner(nil, BannerAfter, statuslineBanner, BannerTypeText, 
                  BannerAlignTop, 10, BannerSizeAbsolute, BannerStyleBorder);
        
          inherited();
         
       }
    ;

    captionWindow: BannerWindow
       initBannerWindow()
       {
          picWindow.initBannerWindow();

          showBanner(picWindow, BannerFirst, nil , BannerTypeText, 
                  BannerAlignRight, 50, BannerSizePercent, BannerStyleBorder);  
       
          inherited();
       }
    ;
```

Now if the initialization routine happens upon
<span class="code">captionWindow</span> before
<span class="code">picWindow</span>,
<span class="code">captionWindow.initBannerWindow()</span> will invoke
<span class="code">picWindow.initBannerWindow()</span> before calling
its own <span class="code">showBanner()</span> method, thereby ensuring
that the banner created for <span class="code">picWindow</span> exists
before we try to give it a child. Unfortunately, this at once leads us
to another problem, namely that if
<span class="code">captionWindow.initBannerWindow()</span> runs first,
<span class="code">picWindow.initBannerWindow()</span> will be called a
second time when the initializer reaches
<span class="code">picWindow</span>, with the result that we could end
up with two picture banners displayed on screen.

To avoid that, we make use of the <span class="code">inited\_</span>
property set by the inherited method. If
<span class="code">inited\_</span> is true, we know we have already been
initialized, so we don't need to be initialized again. We can therefore
check the value of <span class="code">inited\_</span> at the start of
the <span class="code">initBannerWindow()</span> method:

```
    picWindow: BannerWindow
       initBannerWindow()
       {
          if(inited_)
             return;

          statuslineBanner.initBannerWindow();

          showBanner(nil, BannerAfter, statuslineBanner, BannerTypeText, 
                  BannerAlignTop, 10, BannerSizeAbsolute, BannerStyleBorder);
        
          inherited();
         
       }
    ;

    captionWindow: BannerWindow
       initBannerWindow()
       {
          if(inited_)
             return; 

          picWindow.initBannerWindow();

          showBanner(picWindow, BannerFirst, nil , BannerTypeText, 
                  BannerAlignRight, 50, BannerSizePercent, BannerStyleBorder);  
       
          inherited();
       }
    ;
```

At this point, you may be getting the impression that it was more
straightforward to use the low level banner API functions, except that
we no longer need to create a special object to hold references to the
banner handles. But in fact the <span class="code">BannerWindow</span>
class, and the classes associated with it in banner.t, are taking care
of a lot of the complexity for us. In particular, although they don't
address the issue of keeping the banner *contents* in sync with any
UNDO, RESTORE or RESTART operations the player may perform, they do look
after the business of ensuring that the banner *layout* (which is all we
have handled so far) is properly maintained through these operations.
This may not seem much of an issue in this example, which envisages a
banner layout that remains constant throughout the game, but would be
more of an issue in a game in which the banner layout changed according
to circumstance.

In order to display actual content in these banner windows, we simply
need to call their <span class="code">writeToBanner()</span> method; for
example:

```
    picWindow.writeToBanner('<img src="pics/sheldonian.jpg">');
    captionWindow.writeToBanner('A view of Oxford\'s famous Sheldonian Theatre,
       designed by Sir Christopher Wren');
```

This method is perfectly workable if either of the following conditions
is true:

- Our game updates the banner contents each turn
- Our game updates the banner contents each time the room description is
  displayed (e.g. because we want to show a picture of the location as
  well as describing it)

Because the library automatically performs a look around after a
RESTORE, RESTART or UNDO command, issuing any of these commands will
accordingly automatically update our banner contents for us if they are
updated with each look around.

However, if neither of the above conditions is met, then we still have
to find some means of updating our banner contents after a RESTORE or
UNDO (though our initialization code will probably take care of
RESTART). One way to do this is to define a
<span class="code">currentContents</span> property on each of our
banners that gets updated with whatever we write to the banners, so that
we can arrange for it to be displayed again after a RESTORE or UNDO.
That's not too hard to do, but we also have to make sure that we do
things in the right order if the layout might change, that if we UNDO or
RESTORE from a point in the game where, say, our picture banner isn't
displayed to one where it is, we must ensure that we redisplay the
picture banner before we try to write to it.

And we still haven't dealt with the issue of the not-HTML interpreter.
To be sure, if the interpreter our game runs on can't display graphics,
say, our attempts to display graphics on it won't do too much harm,
since they'll simply be ignored. The problem is rather that we may have
a banner window taking up space on a text-only display while doing
nothing useful; if we only created the banner in order to display
pictures on it, then there's simply no point in having it created when
our game runs on an interpreter that can't display pictures. On the
other hand, if test for the interpreter type and then don't create our
graphics banner, our code may well run into difficulties when it tries
to write to it.

In fact, dealing with the banner content on RESTORE/UNDO problem and the
reasonable compatibility with different interpreter types problem can
prove more than a little tricky, not least because these two problems
can impact on each other. Consider the case when the player of your
Multimedia Masterpiece starts on his desk-top Windows PC with a full
HTML interpeter. He then saves the game and copies the save file to a
portable device which runs a text-only interpreter, so he can carry on
playing on the train or bus on the way to work. When the game is
restored on the handheld, which can't display graphics, we may decide we
don't want the graphics window to appear, even though it was part of the
layout saved in the save file. Now, when our intrepid adventurer returns
at the end of his long hard day in the office to relax with your Epic
Extravaganza once more, having played on a few dozen turns on his
portable device, he saves the game in his text-only interpreter, copies
the saved file to his desk-top machine, restores the game to his HTML
interpreter, and carries on playing. What the restore on the HTML
interpreter ought to achieve is to show the banner layout and content
appropriate to the stage of the game now reached, even though these
weren't being shown on the text-only interpreter in the interim. This is
possible to arrange, but it is also quite tricky.

In the next section, we'll look at using a class that takes care of most
of these issues for you.

## <span id="CustomBannerWindow">Using the CustomBannerWindow Class</span>

Using <span class="code">CustomBannerWindow</span>, the banners we
defined in the previous section could be defined simply with:

```
    picWindow: CustomBannerWindow
       bannerArgs = [nil, BannerAfter, statuslineBanner, BannerText, 
                  BannerTop, 10, BannerSizeAbsolute, BannerStyleBorder]      
    ;

    captionWindow: CustomBannerWindow
       bannerArgs = [picWindow, BannerFirst, nil , BannerText, 
                    BannerRight, 50, BannerSizePercent, BannerStyleBorder]   
    ;
```

This code in fact does much the same as the code we ended up with using
BannerWindow. In particular,
<span class="code">CustomBannerWindow.initBannerWindow()</span> follows
the coding pattern we used above, but works out from the
<span class="code">bannerArgs</span> property which other BannerWindows
it needs to initialize first. Using
<span class="code">CustomBannerWindow</span> thus saves both quite a bit
of typing and the danger of some errors.

But it can do quite a bit more for us besides.
<span class="code">CustomBannerWindow</span> is a subclass of
<span class="code">BannerWindow</span> and inherits all its methods,
which you can still use, but it also defines a number of methods and
properties of its own. So, for example, while you can still call
<span class="code">writeToBanner()</span> on a
<span class="code">CustomBannerWindow()</span>, to take advantage of
this class it's more useful to update its contents with its
<span class="code">updateContents()</span> method. This does two things:
first it stores the banner's new contents (as defined by the string
argument of <span class="code">updateContents()</span>) in the
<span class="code">currentContents</span> property, and then displays
the contents of the <span class="code">currentContents</span> property
in the banner. By itself this storing of the banner's output in a banner
property may not seem very exciting, but the
<span class="code">CustomBannerWindow</span> also takes care of
displaying its <span class="code">currentContents</span> property on
RESTORE, UNDO or RESTART (and, indeed, on startup). This means that as
long as you consistently use the
<span class="code">updateContents()</span> method to display content in
a <span class="code">CustomBannerWindow</span>, the RESTORE/UNDO/RESTART
issue is automatically taken care of for you. It also means that you can
use the <span class="code">currentContents</span> property to stipulate
what you want a banner to play at the start of the game, for example:

```
    picWindow: CustomBannerWindow
       bannerArgs = [nil, BannerAfter, statuslineBanner, BannerText, 
                  BannerTop, 10, BannerSizeAbsolute, BannerStyleBorder]      

       currentContents = '<img src="welcome.jpg">'
    ;
```

Apart from initialization, however, your game code should not modify
<span class="code">currentContents</span> directly (unless for some very
peculiar purpose), but should allow
<span class="code">updateContents()</span> to keep the
<span class="code">currentContents</span> property in sync with what the
banner actually displays.

We said above that <span class="code">updateContents()</span> method
does two things; actually it normally does three: normally it clears the
banner window before displaying the new content. This is typically what
you'd want for a banner that displays a picture that reflects the
current situation, say. But it may not always be what you want, e.g. for
a scrolling window to which text is added cumulatively. So if you don't
want a particular banner to be cleared before displaying new content in
it via <span class="code">updateContents()</span>, you need to override
its <span class="code">clearBeforeUpdate</span> property to
<span class="code">nil</span>.

CustomBannerWindow can also help us with the varying interpreter type
issue. To recapitulate, the problem is not that trying to display a
picture (say) on a non-HTML interpreter will of itself cause an error,
but that displaying a picture banner on a non-HTML interpreter will take
up screen space for no good purpose, making your game look rather kludgy
on the text-only 'terp. Ideally, it would be best if, in this case, the
picture banner simply wasn't part of the screen layout on the non-HTML
interpreter, but if our game doesn't even initialize the banner on the
non-HTML interpreter, then attempting to display a picture (or anything
else) in it *will* cause a run-time error. What we'd ideally like is a
means of deciding whether we want a particular banner to display on a
particular class of interpreter, and have attempts to write to the
banner simply ignored if the banner isn't displayed.

CustomBannerWindow provides the <span class="code">canDisplay</span>
property for this purpose. If <span class="code">canDisplay</span>
evaluates to <span class="code">nil</span>,
<span class="code">initBannerWindow()</span> will not add the banner to
the screen layout, but we can nevertheleess call any of the
<span class="code">BannerWindow</span> or
<span class="code">CustomBannerWindow</span> methods without causing a
run-time error, since they'll then all be ignored (except that
<span class="code">updateContents()</span> will still update the
<span class="code">currentContents</span> property, even though nothing
will be shown on screen).

The <span class="code">canDisplay</span> property is meant to be used
with in conjunction with the <span class="code">SystemInfo()</span>
function, to determine the kind of interpreter we're running on. So, for
example, to suppress the display of a banner on an interpreter than
can't display JPEGs we'd define:

```
    canDisplay = (systemInfo(SysInfoJpeg))
```

The main thing we need to be careful about here ensuring that we don't
define <span class="code">canDisplay</span> methods that can evaluate to
<span class="code">nil</span> on a parent window and
<span class="code">true</span> on one or more of its child windows at
the same time. So if we are designing a banner layout in which one
window (a text-diplay window, say) is always required, but another (a
graphics window, say) is only required if our game is running on an HTML
interpreter, we must be careful *not* to make the text-display window a
child of the graphics window.

In the example we have been using, our caption banner *is* a child of
our picture banner, but this is okay since we don't want either banner
to display if we can't display graphics: there's no point in showing the
picture caption without the picture. To ensure that both our custom
banners either do or don't display together, it's slightly less work and
slightly less error-prone to override the
<span class="code">CustomBannerWindow</span> class than to override the
<span class="code">canDisplay</span> property separately on each window:

```
    modify CustomBannerWindow
       canDisplay = (systemInfo(SysInfoJpeg))
    ;
```

It's safe to do this since the only CustomBannerWindows that exist in
our game are the ones we create ourselves. The banner windows defined in
the library, such as the statusline banner and various banners used in
displaying menus are of class <span class="code">BannerWindow</span>,
and so won't be affected by any changes we make to
<span class="code">CustomBannerWindow</span>.

The <span class="code">canDisplay</span> property is intended purely for
testing the interpreter type. We can use a different property,
<span class="code">isActive</span>, to add or remove a
<span class="code">CustomBannerWindow</span> from the display during the
course of our game. More accurately, we can define the
<span class="code">isActive</span> property as
<span class="code">nil</span> on a
<span class="code">CustomBannerWindow</span> we don't want displayed at
game start-up, and then use the <span class="code">activate()</span> and
<span class="code">deactivate()</span> methods to add or remove custom
banners to or from the screen. Once again, it's our responsibility to
respect the dependency order of any parent, child or sibling banners
involved.

## An Example

Suppose we want to use the banner layout described above in the
following way:

- Some of the rooms and some of the objects in our game have a picture.
- When an object that has a picture is examined, we display its picture
  together with a caption describing that picture.
- When the player character enters a room that has a picture, we display
  that picture together with its caption.
- When the player character enters a room that doesn't have a picture,
  we remove our custom banners from the screen layout.
- If a room has a picture, we display it in response to an explicit LOOK
  command.
- It follows that when a picture is displayed, it remains on screen
  until a movement, look or examine command changes it.

Whether this scheme is necessarily a good idea is beside the point for
the present exercise (it would be distracting if the banners kept
appearing and disappearing as we moved from room to room, perhaps less
so if this only happened once or twice as we moved between regions). The
point of it here is to serve as a convenient implementation example.

To begin with, we note that a picture and its caption always go
together. That suggests that picture and caption might usefully be
encapsulated together in a class that also contain the method to display
them to our banners. For the sake of argument we assume that our picture
files all have a .jpg extension and that they're all in the /docs folder
under our game folder:

```
    class Picture
      picFile = ''
      caption = ''
      showPic()
      {
        /* 
         *  We can't be sure that the banners will be active when we want to
         *  display in them, so we need to check and, if necessary, activate
         *  them.
         */
        if(!picWindow.isActive)
        {
          /* We must be careful to activate the parent window before its child */ 
          picWindow.activate();
          captionWindow.activate();
        }
      
      
        picWindow.updateContents('<body bgcolor=statusbg>
             <img src="pics/' + picFile + '.jpg" >');
                     
        captionWindow.updateContents('&lt;- ' + caption);  
      }
    ;
```

Note that the <span class="code">&lt;-</span> in the last line is
deliberate here; we want this to appear in the window as \<-, but since
what we send to the window will be interpreted as HTML, we need to use
the <span class="code">&lt;</span> entity to represent the \< character.

Since we may be defining many Picture objects, we can save ourselves a
bit of typing by defining an appropriate template:

```
    Picture template 'picFile' 'caption';
```

Next we need to modify the Room and Thing classes to display their
pictures (and accompanying captions) if they have them:

```
    modify Room
        pic = nil
      
        enteringRoom(traveler) 
        {        
          if(traveler == gPlayerChar)
            showPic();          
        }    
        
        showPic()
        {
           
          /* If we have no pic, remove the banners from screen */
          if(pic == nil)
          {
            /* Note we must be careful to deactivate the child banner before its parent */
            captionWindow.deactivate();
            picWindow.deactivate();
          }     
          else
            pic.showPic();
        }
    ;

    modify Thing
      pic = nil

      mainExamine()
      {
        inherited();
        if(pic)
          pic.showPic();
      }
    ;
```

We next need to make an explicit LOOK command display any relevant
picture and caption for the player character's current location. For the
purposes of this example, we only want an explicit LOOK to do this, not
an implicit lookAround called by the library code. We therefore need to
make a minor override to <span class="code">LookAction</span>:

```
    modify LookAction
      execAction()
      {
        inherited();
        
        local loc = gActor.getOutermostRoom();
        if(loc.pic)
          loc.showPic();
      } 
    ;
```

Our final task is to make the picture and caption of the starting
location appear on the first turn. The easiest way to achieve that may
be to call the room's <span class="code">showPic()</span> method from
<span class="code"> gameMain.showIntro()</span>:

```
    gameMain: GameMainDef  
        initialPlayerChar = me
        
        showIntro() { startRoom.showPic(); }
    ;
```

And this is all we need to do to implement our scheme; the
<span class="code"> CustomBannerWindow</span> class can be left to do
the rest, such as displaying the right picture and caption (or absence
of picture and caption) after RESTORE, RESTART and UNDO. At this point
we can start defining our rooms and objects, e.g.:

```
    startRoom: OutdoorRoom 'Radcliffe Square' 'Radcliffe Square'
        "From the south-east corner of Radcliffe Square you could go north between
         the Radcliffe Camera and All Souls College. "
        
        pic: Picture {
          'rad_square'
          'A view from the south-east quadrant of Radcliffe Square'
        }
        
        north = catteStreet    
    ; 


    + me: Actor    
    ;

    + radcliffeCamera: Fixture 'radcliffe camera' 'Radcliffe Camera'
       "This iconic round building, designed by James Gibbs, is now
        part of the Bodleian Library, holding among other things the
        open-shelf undergraduate collections for English Literature
        and Theology. "
       pic: Picture {
         'camera'
         'A view of the Radcliffe Camera from the south side of
          Radcliffe Square'
       }
       cannotEnterMsg = 'You don\'t have your Bod card with you. '
    ;

    + allSouls: Fixture 'all souls souls\' college' 'All Souls College'
      "Founded in 1438, the All Souls traditionally takes no undergraduates. "
      pic: Picture{
         'all_souls'
         'All Souls College seen from Radcliffe Square'
      }
      cannotEnterMsg = 'It\'s not your college, and you don\'t have time
       to go sightseeing right now. '
      isProper = true
    ;

    catteStreet: OutdoorRoom 'Catte Street' 'Catte Street'
      "Catte Street runs north from Radcliffe Square to the main crossroads.
        Along the way it passes such famous landmarks as the Sheldonian Theatre
        and the Bridge of Sighs. "
      pic: Picture {
        'catte'
        'Looking up Catte Street, with the Bodleian Libary to the left'
      }
      south = startRoom
      north = crossroads
    ;
```

## Working with a More Complicated Layout

As a final exercise, let's suppose that we want a slightly more
complicated banner layout than the one we've been working with so far
(in practice, we probably don't actually *need* one here, but we're just
taking the opportunity to show how it might be done). Suppose, for the
sake of argument, that we don't want our picture window and banner
window to occupy the full screen width, but instead want to frame them
with left, centre, and right banners (that will always remain empty)
thus:

Status

L

Picture

C

Caption

R

Main

In this case we effectively have a horizontal band between the status
line and the main window, which we need to divide into five regions.
It's probably easiest to start by defining the central border as the
parent banner, and then carve the other four windows out of it. The
definition of the central banner is then something like the following:

```
    centreWindow: CustomBannerWindow
      bannerArgs = [nil, BannerAfter, statuslineBanner, BannerTypeText, BannerAlignTop,
        15, BannerSizeAbsolute, BannerStyleBorder]

      currentContents = '<body bgcolor=statusbg>'
    ;
```

Since we need the left and right frames to go on the outside, we need to
define them next. The point to bear in mind here is that we are going to
define the remaining windows with
<span class="code">BannerAlignLeft</span> and
<span class="code">BannerAlignRight</span>, and that the earliest
windows in sequence take the outermost positions, and that windows
defined as coming immediately *after* them will thus appear closer to
the centre. It doesn't much matter, however, whether the outer left
window or the outer right window comes first: here we'll start with the
outer right:

```
    rightWindow: CustomBannerWindow
       bannerArgs = [centreWindow, BannerFirst,nil, BannerTypeText, BannerAlignRight,
        5, BannerSizePercent, BannerStyleBorder]

      currentContents = '<body bgcolor=statusbg>'
    ;

    leftWindow: CustomBannerWindow
       bannerArgs = [centreWindow, BannerAfter, rightWindow, BannerTypeText, 
          BannerAlignLeft,  5, BannerSizePercent, 0]

      currentContents = '<body bgcolor=statusbg>'
    ;
```

Now we can define our picture window and our caption window as before,
this time placing them after the left-hand and right-hand framing
windows respectively:

```
    picWindow: CustomBannerWindow
      bannerArgs = [centreWindow, BannerAfter,  leftWindow,  BannerTypeText, 
         BannerAlignLeft, 35, BannerSizeAbsolute, BannerStyleBorder]
                     
      autoSize = true               
    ;

    captionWindow: CustomBannerWindow
      bannerArgs = [centreWindow, BannerAfter, rightWindow, BannerTypeText, BannerAlignRight,
                      40, BannerSizePercent, BannerStyleBorder ]     
    ;
```

The only other change we need to make is in the methods that remove and
restore the complete set of banner windows to and from the display:

```
    class Picture: object
      picFile = ''
      caption = ''
      showPic()
      {
        if(!picWindow.isActive)
        {
          /*
           * We must be careful to activate the parent window before all
           * its children, and the older sibling windows before the younger
           * siblings that are placed in relation to them.
           *
           * We also call activate with the optional (true) argument on
           * centreWindow, rightWindow and leftWindow to force display of
           * their current contents on activation (their current contents being
           * HTML code to set their background colour to the background colour
           * of the status line)
           */
          centreWindow.activate(true);
          rightWindow.activate(true);
          leftWindow.activate(true);
          picWindow.activate();
          captionWindow.activate(); 

        }
      
      
        picWindow.updateContents('<body bgcolor=statusbg>
             <img src="pics/' + picFile + '.jpg" >');
                     
        captionWindow.updateContents('&lt;- ' + caption);  
      }
    ;


    modify Room
      roomPic = nil
      
      enteringRoom(traveler) 
        {       
          if(traveler == gPlayerChar)
            showPic();          
        }    
        
        showPic()
        {
          if(roomPic == nil)
          {
            /*  
             *  The windows need to be deactivated in reverse order of
             *  activation, so that we deactivate all the child windows
             *  before deactivating the parent.
             */
            captionWindow.deactivate();
            picWindow.deactivate();
            leftWindow.deactivate();
            rightWindow.deactivate();
            centreWindow.deactivate();
          }     
          else
            roomPic.showPic();
        }
    ;
```

## Summary

Hopefully the foregoing examples will give you a reasonable idea how to
implement the banner layout you want in your own game, or at least to
experiment with the banner API a little more productively. In conclusion
it may be helpful to summarize the methods and properties you will most
commonly want to use when working with the
<span class="code">CustomerBannerWindow</span> class.

- <span class="code">**activate(*\[txt\|true\]*)**</span>: call this
  method to add or restore to the screen a previously inactive banner
  (one defined with <span class="code">isActive = nil</span> or removed
  by <span class="code">deactivate()</span>) This method takes one
  optional argument, which may either be the value
  <span class="code">true</span>, in which case the banner displays its
  current contents on activation, or a single-quoted string, in which
  case the banner displays that single-quoted string on activation.
- <span class="code">**autoSize**</span>: set to
  <span class="code">true</span> to have the banner size to contents
  after each update of its contents. The default is
  <span class="code">nil</span>.
- <span class="code">**bannerArgs**</span>: this is the one property
  that every <span class="code">CustomBannerWindow</span> *must* define.
  It should consist of a list containing exactly eight elements in the
  form <span class="code">\[*parent, where, other, windowType, align,
  size, sizeUnits, styleFlags*\]</span>.
- <span class="code">**canDisplay**</span>: if you want your banner to
  be displayed on every interpreter that can display banners, this can
  simply be set to <span class="code">true</span>. Otherwise it should
  normally contain the result of a call to the
  <span class="code">SystemInfo</span> function to determine what class
  of interpreter this banner should be used on, e.g.
  <span class="code">canDisplay = (SystemInfo(SysInfoJpeg))</span>.
- <span class="code">**clearBeforeUpdate**</span>: set to
  <span class="code">true </span> to have the banner window cleared just
  before writing new content to it, or <span class="code">nil</span>
  otherwise. The default is <span class="code">true </span>.
- <span class="code">**clearWindow()**</span>: clear the banner window.
  This is much the same as the <span class="code">clearWindow()</span>
  method on <span class="code"> BannerWindow</span>, except that it
  checks that the banner is active before attempting to do anything, so
  that it's safe to call on an inactive banner.
- <span class="code">**currentContents**</span>: the current contents
  displayed by this banner, if it is on screen. This may be overridden
  when defining a banner instance to give the contents that the banner
  should display when it is first added to the screen layout.
  Thereafter, use the <span class="code">updateBanner()</span> method to
  change what the banner displays.
- <span class="code">**deactivate(*\[txt\|true\]*)**</span>: remove a
  currently active banner from the screen layout. This method optionally
  takes one argument. If the argument is the actual value
  <span class="code">true</span> then the currentContents of the banner
  are reset to a zero-length string. If the argument is a single-quoted
  string then the current contents are set to that string.
- <span class="code">**flushBanner()**</span>: flush any pending output
  to the banner; if we're inactive, do nothing.
- <span class="code">**isActive**</span>: override to
  <span class="code">nil</span> on a banner you want to start out not
  being displayed on screen. Don't manipulate this property directly
  thereafter; use the <span class="code">activate()</span> and
  <span class="code">deactivate()</span> methods instead.
- <span class="code">**setSize(*size, sizeUnits, isAdvisory*)**</span>:
  Set the banner window to a specific size. *size* is the new size, in
  units given by *sizeUnits*, which is a BannerSizeXxx constant.
  *isAdvisory* is true or nil; if true, it indicates that the size
  setting is only an estimate, and that a call to
  <span class="code">sizeToContents()</span> will be made later; in this
  case, the interpreter might simply ignore this estimated size setting
  entirely, to avoid unnecessary redrawing. Platforms that do not
  support contents-based sizing will always set the estimated size, even
  when *isAdvisory* is true. If *isAdvisory* is nil, the platform will
  set the banner size as requested; set *isAdvisory* to nil when you
  will not follow up with a call to
  <span class="code">sizeToContents()</span>. If the banner is inactive,
  calling this method will be ignored.
- <span class="code">**sizeToContents()**</span>: Size the banner to its
  current contents. Note that some systems do not support this
  operation, so callers should always make an advisory call to
  <span class="code">setSize()</span> first to set a size based on the
  expected content size. If this method is called on an inactive
  <span class="code">CustomBannerWindow</span> it is simply ignored.
- <span class="code">**updateContents(*txt, \[clear\]*)**</span>: update
  the contents of the banner with *txt*, i.e. have the banner display
  the string passed in the *txt* argument and store it in the
  <span class="code">currentContents</span> property. This is the method
  you should normally call when you want to display content in a
  <span class="code">CustomBannerWindow</span>. This method optionally
  takes a second argument, which should be
  <span class="code">true</span> or <span class="code">nil</span>; if
  present this argument overrides the
  <span class="code">clearBeforeUpdate</span> setting to force the
  window to be cleared before displaying the new contents (if
  <span class="code">true</span>) or else not to (if
  <span class="code">nil</span>).

Using the methods and properties listed above should provide a
reasonably trouble-free interface to the TADS 3 banner implementation,
provided that you keep the following points in mind:

1.  Always take care over parent/child/sibling dependencies between
    banner windows, especially if your banner layout changes dynamically
    during the course of your game.
2.  Treat establishing the banner *layout* as a separate exercise from
    initializing the banner *content*.
3.  If your game is at all likely to be played on an interpreter for
    which you've disabled all or part of your banner layout, either make
    sure that being able to play the game doesn't depend on what would
    have been displayed in the unseen banners, or else provide an
    alternative means of conveying the same information when the game is
    played on an interpreter that lacks the capabilities your banner
    needs.

There are other methods and properties that
<span class="code">CustomBannerWindow</span> either defines or inherits
from <span class="code">BannerWindow</span>, but for the most part these
are used internally by the library and you won't need to worry about
them (although of course there can always be special cases that may
require you to delve deeper). There are also a number of inherited
methods such as <span class="code">setOutputStream()</span>,
<span class="code">captureOutput(func)</span>, and the methods specific
to text grid windows that you can use, but which
<span class="code">CustomBannerWindow</span> provides only partial
support for, in that a RESTORE or UNDO will not automatically return
what's displayed in a window to the result of the output from these
methods.

</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 Technical Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="depth.html" class="nav">TADS 3 In Depth</a> \> Using the Banner
API  
<span class="navnp"><a href="t3npcTravel.html" class="nav"><em>Prev:</em> NPC Travel</a>
    <a href="advtop.html" class="nav"><em>Next:</em> Advanced Topics</a>
    </span>

</div>
