---
layout: docs
---
<span class="title">BannerWindow</span><span class="type">class</span>

[banner.t](../file/banner.t.html)\[[40](../source/banner.t.html#40)\]

[Superclass  
Tree](#_SuperClassTree_)

[Subclass  
Tree](#_SubClassTree_)

[Global  
Objects](#_ObjectSummary_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)



A BannerWindow corresponds to an on-screen banner. For each banner
window a game wants to display, the game must create an object of this
class.

Note that merely creating a BannerWindow object doesn't actually display
a banner window. Once a BannerWindow is created, the game must call the
object's showBanner() method to create the on-screen window for the
banner.

BannerWindow instances are intended to be persistent (not transient).
The banner manager keeps track of each banner window that's actually
being displayed separately via an internal transient object; the game
doesn't need to worry about these tracking objects, since the banner
manager automatically handles them.

`class `**`BannerWindow`**` :   `[`OutputStreamWindow`](../object/OutputStreamWindow.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`BannerWindow`**  
[`OutputStreamWindow`](../object/OutputStreamWindow.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



` [`contentsMenuBanner`](../object/contentsMenuBanner.html)  [`longTopicBanner`](../object/longTopicBanner.html)  [`statuslineBanner`](../object/statuslineBanner1.html)  [`topMenuBanner`](../object/topMenuBanner.html)  `
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



` [`align_`](#align_)  [`handle_`](#handle_)  [`id_`](#id_)  [`inited_`](#inited_)  [`parentID_`](#parentID_)  [`size_`](#size_)  [`sizeUnits_`](#sizeUnits_)  [`styleFlags_`](#styleFlags_)  [`windowType_`](#windowType_)  `

Inherited from `OutputStreamWindow` :  
` [`outputStream_`](../object/OutputStreamWindow.html#outputStream_)  `

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



` [`clearWindow`](#clearWindow)  [`construct`](#construct)  [`createOutputStreamObj`](#createOutputStreamObj)  [`createSystemBanner`](#createSystemBanner)  [`cursorTo`](#cursorTo)  [`flushBanner`](#flushBanner)  [`getBannerID`](#getBannerID)  [`initBannerWindow`](#initBannerWindow)  [`removeBanner`](#removeBanner)  [`setScreenColor`](#setScreenColor)  [`setSize`](#setSize)  [`setTextColor`](#setTextColor)  [`showBanner`](#showBanner)  [`showForRestore`](#showForRestore)  [`sizeToContents`](#sizeToContents)  [`updateForRestore`](#updateForRestore)  [`writeToBanner`](#writeToBanner)  `

Inherited from `OutputStreamWindow` :  
` [`captureOutput`](../object/OutputStreamWindow.html#captureOutput)  [`createOutputStream`](../object/OutputStreamWindow.html#createOutputStream)  [`setOutputStream`](../object/OutputStreamWindow.html#setOutputStream)  `

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="align_"></span>

`align_`

[banner.t](../file/banner.t.html)\[[450](../source/banner.t.html#450)\]



*no description available*



<span id="handle_"></span>

`handle_`

[banner.t](../file/banner.t.html)\[[441](../source/banner.t.html#441)\]



the handle to my system-level banner window



<span id="id_"></span>

`id_`

[banner.t](../file/banner.t.html)\[[438](../source/banner.t.html#438)\]



The creator-assigned ID string to identify the banner persistently. This
is only needed for banners created dynamically; for BannerWindow objects
defined statically at compile time, simply leave this value as nil, and
we'll use the object itself as the identifier.



<span id="inited_"></span>

`inited_`

[banner.t](../file/banner.t.html)\[[429](../source/banner.t.html#429)\]



flag: this banner has been initialized with initBannerWindow()



<span id="parentID_"></span>

`parentID_`

[banner.t](../file/banner.t.html)\[[448](../source/banner.t.html#448)\]



Creation parameters. We store these when we create the banner, and
update them as needed when the banner's display attributes are changed.



<span id="size_"></span>

`size_`

[banner.t](../file/banner.t.html)\[[451](../source/banner.t.html#451)\]



*no description available*



<span id="sizeUnits_"></span>

`sizeUnits_`

[banner.t](../file/banner.t.html)\[[452](../source/banner.t.html#452)\]



*no description available*



<span id="styleFlags_"></span>

`styleFlags_`

[banner.t](../file/banner.t.html)\[[453](../source/banner.t.html#453)\]



*no description available*



<span id="windowType_"></span>

`windowType_`

[banner.t](../file/banner.t.html)\[[449](../source/banner.t.html#449)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="clearWindow"></span>

`clearWindow ( )`

[banner.t](../file/banner.t.html)\[[309](../source/banner.t.html#309)\]



Clear my banner window. This clears out all of the contents of our
on-screen display area.



<span id="construct"></span>

`construct (id)`

[banner.t](../file/banner.t.html)\[[54](../source/banner.t.html#54)\]



Construct the object.

'id' is a globally unique identifying string for the banner. When we
dynamically create a banner object, we have to provide a unique
identifying string, so that we can correlate transient on-screen banners
with the banners in a saved state when restoring the saved state.

Note that no ID string is needed for BannerWindow objects defined
statically at compile-time, because the object itself ('self') is a
suitably unique and stable identifier.



<span id="createOutputStreamObj"></span>

`createOutputStreamObj ( )`<span class="rem">OVERRIDDEN</span>

[banner.t](../file/banner.t.html)\[[375](../source/banner.t.html#375)\]



create our banner output stream



<span id="createSystemBanner"></span>

`createSystemBanner (parent, where, other, windowType, align, size, sizeUnits, styleFlags)`

[banner.t](../file/banner.t.html)\[[361](../source/banner.t.html#361)\]



Create the system-level banner window. This can be customized as needed,
although this default implementation should be suitable for most
instances.

Returns true if we are successful in creating the system window, nil if
we fail.



<span id="cursorTo"></span>

`cursorTo (row, col)`

[banner.t](../file/banner.t.html)\[[326](../source/banner.t.html#326)\]



Move the cursor to the given row/column position. This can only be used
with text-grid banners; for ordinary text banners, this has no effect.



<span id="flushBanner"></span>

`flushBanner ( )`

[banner.t](../file/banner.t.html)\[[267](../source/banner.t.html#267)\]



flush any pending output to the banner



<span id="getBannerID"></span>

`getBannerID ( )`

[banner.t](../file/banner.t.html)\[[334](../source/banner.t.html#334)\]



Get the banner identifier. If our 'id\_' property is set to nil, we'll
assume that we're a statically-defined object, in which case 'self' is a
suitable identifier. Otherwise, we'll return the identifier string.



<span id="initBannerWindow"></span>

`initBannerWindow ( )`

[banner.t](../file/banner.t.html)\[[422](../source/banner.t.html#422)\]



Initialize the banner window. This is called during initialization (when
first starting the game, or when resetting with RESTART). If the banner
is to be displayed from the start of the game, this can set up the
on-screen display.

Note that we might already have an on-screen handle when this is called.
This indicates that we're restarting an ongoing session, and that this
banner already existed in the session before the RESTART operation. If
desired, we can attach ourselves to the existing on-screen banner,
avoiding the redrawing that would occur if we created a new window.

If this window depends upon another window for its layout order
placement (i.e., we'll call showBanner() with another BannerWindow given
as the 'other' parameter), then this routine should call the other
window's initBannerWindow() method before creating its own window, to
ensure that the other window has a system window and thus will be
meaningful to establish the layout order.

Overriding implementations should check the 'inited\_' property. If this
property is true, then it can be assumed that we've already been
initialized and don't require further initialization. This routine can
be called multiple times because dependent windows might call us
directly, before we're called for our regular initialization.



<span id="removeBanner"></span>

`removeBanner ( )`

[banner.t](../file/banner.t.html)\[[237](../source/banner.t.html#237)\]



Remove the banner. This removes the banner's on-screen window. The
BannerWindow object itself remains valid, but after this method returns,
the BannerWindow no longer has an associated display window.

Note that any child banners of ours will become undisplayable after
we're gone. A child banner depends upon its parent to obtain display
space, so once the parent is gone, its children no longer have any way
to obtain any display space. Our children remain valid objects even
after we're closed, but they won't be visible on the display.



<span id="setScreenColor"></span>

`setScreenColor (color)`

[banner.t](../file/banner.t.html)\[[319](../source/banner.t.html#319)\]



set the screen color in the banner window



<span id="setSize"></span>

`setSize (size, sizeUnits, isAdvisory)`

[banner.t](../file/banner.t.html)\[[280](../source/banner.t.html#280)\]



Set the banner window to a specific size. 'size' is the new size, in
units given by 'sizeUnits', which is a BannerSizeXxx constant.

'isAdvisory' is true or nil; if true, it indicates that the size setting
is purely advisory, and that a sizeToContents() call will eventually
follow to set the actual size. When 'isAdvisory is true, the interpreter
is free to ignore the request if sizeToContents()



<span id="setTextColor"></span>

`setTextColor (fg, bg)`

[banner.t](../file/banner.t.html)\[[316](../source/banner.t.html#316)\]



set the text color in the banner



<span id="showBanner"></span>

`showBanner (parent, where, other, windowType, align, size, sizeUnits, styleFlags)`

[banner.t](../file/banner.t.html)\[[104](../source/banner.t.html#104)\]



Show the banner. The game should call this method when it first wants to
display the banner.

'parent' is the parent banner; this is an existing BannerWindow object.
If 'parent' is nil, then the parent is the main game text window. The
new window's display space is obtained by carving space out of the
parent's area, according to the alignment and size values specified.

'where' and 'other' give the position of the banner among the children
of the given parent. 'where' is one of the constants BannerFirst,
BannerLast, BannerBefore, or BannerAfter. If 'where' is BannerBefore or
BannerAfter, 'other' gives the BannerWindow object to be used as the
reference point in the parent's child list; 'other' is ignored in other
cases. Note that 'other' must always be another child of the same
parent; if it's not, then we act as though 'where' were given as
BannerLast.

'windowType' is a BannerTypeXxx constant giving the new window's type.

'align' is a BannerAlignXxx constant giving the alignment of the new
window. 'size' is an integer giving the size of the banner, in units
specified by 'sizeUnits', which is a BannerSizeXxx constant. If 'size'
is nil, it indicates that the caller doesn't care about the size,
usually because the caller will be resizing the banner soon anyway; the
banner will initially have zero size in this case if we create a new
window, or will retain the existing size if there's already a system
window.

'styleFlags' is a combination of BannerStyleXxx constants (combined with
the bitwise OR operator, '\|'), giving the requested display style of
the new banner window.

Note that if we already have a system banner window, and the existing
banner window has the same characteristics as the new creation
parameters, we'll simply re-use the existing window rather than closing
and re-creating it; this reduces unnecessary redrawing in cases where
the window isn't changing. If the caller explicitly wants to create a
new window even if we already have a window, the caller should simply
call removeBanner() before calling this routine.



<span id="showForRestore"></span>

`showForRestore (parent, where, other)`

[banner.t](../file/banner.t.html)\[[343](../source/banner.t.html#343)\]



Restore this banner. This is called after a RESTORE or UNDO operation
that finds that this banner was being displayed at the time the state
was saved but is not currently displayed in the active UI. We'll show
the banner using the characteristics saved persistently.



<span id="sizeToContents"></span>

`sizeToContents ( )`

[banner.t](../file/banner.t.html)\[[299](../source/banner.t.html#299)\]



Size the banner to its current contents. Note that some systems do not
support this operation, so callers should always make an advisory call
to setSize() first to set a size based on the expected content size.



<span id="updateForRestore"></span>

`updateForRestore ( )`

[banner.t](../file/banner.t.html)\[[390](../source/banner.t.html#390)\]



Update my contents after being restored. By default, this does nothing;
instances might want to override this to refresh the contents of the
banner if the banner is normally updated only in response to specific
events. Note that it's not necessary to do anything here if the banner
will soon be updated automatically as part of normal processing; for
example, the status line banner is updated at each new command line via
a prompt-daemon, so there's no need for the status line banner to do
anything here.



<span id="writeToBanner"></span>

`writeToBanner (txt)`

[banner.t](../file/banner.t.html)\[[260](../source/banner.t.html#260)\]



write the given text to the banner





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


