<span class="title">PlugAttachable</span><span class="type">class</span>

[attachables.t](../file/attachables.t.html)\[[672](../source/attachables.t.html#672)\]

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

<div class="fdesc">

PlugAttachable is a mix-in class for use in conjunction with either
SimpleAttachable or NearbyAttachable, enabling the commands PLUG X INTO
Y, UNPLUG X FROM Y, PLUG X IN and UNPLUG X, treating ATTACH and DETACH
commands as equivalent to these, and describing an object's attachments
as being plugged into it.

`class `**`PlugAttachable`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`PlugAttachable`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`alreadyAttachedMsg`](#alreadyAttachedMsg)`  `[`alreadyPluggedInMsg`](#alreadyPluggedInMsg)`  `[`attachmentLister`](#attachmentLister)`  `[`cannotBeAttachedMsg`](#cannotBeAttachedMsg)`  `[`cannotPlugInAnyMoreMsg`](#cannotPlugInAnyMoreMsg)`  `[`canPlugIntoMe`](#canPlugIntoMe)`  `[`isPlugable`](#isPlugable)`  `[`isPluggedIn`](#isPluggedIn)`  `[`needsExplicitSocket`](#needsExplicitSocket)`  `[`notAttachedMsg`](#notAttachedMsg)`  `[`notAttachedToThatMsg`](#notAttachedToThatMsg)`  `[`okayAttachMsg`](#okayAttachMsg)`  `[`okayDetachFromMsg`](#okayDetachFromMsg)`  `[`okayDetachMsg`](#okayDetachMsg)`  `[`socketCapacity`](#socketCapacity)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`dobjFor(PlugIn)`](#dobjFor(PlugIn))`  `[`dobjFor(PlugInto)`](#dobjFor(PlugInto))`  `[`dobjFor(Unplug)`](#dobjFor(Unplug))`  `[`dobjFor(UnplugFrom)`](#dobjFor(UnplugFrom))`  `[`iobjFor(AttachTo)`](#iobjFor(AttachTo))`  `[`iobjFor(PlugInto)`](#iobjFor(PlugInto))`  `[`makePlugged`](#makePlugged)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="alreadyAttachedMsg"></span>

`alreadyAttachedMsg`

[attachables.t](../file/attachables.t.html)\[[744](../source/attachables.t.html#744)\]

<div class="desc">

*no description available*

</div>

<span id="alreadyPluggedInMsg"></span>

`alreadyPluggedInMsg`

[attachables.t](../file/attachables.t.html)\[[747](../source/attachables.t.html#747)\]

<div class="desc">

*no description available*

</div>

<span id="attachmentLister"></span>

`attachmentLister`

[attachables.t](../file/attachables.t.html)\[[684](../source/attachables.t.html#684)\]

<div class="desc">

Objects attached to this object should be described as plugged into it,
so we need to use the appropriate lister.

</div>

<span id="cannotBeAttachedMsg"></span>

`cannotBeAttachedMsg`

[attachables.t](../file/attachables.t.html)\[[799](../source/attachables.t.html#799)\]

<div class="desc">

Make sure we don't exceed our socketCapacity if the player uses ATTACH
TO rather than PLUG INTO; use the check method for PlugInto.

</div>

<span id="cannotPlugInAnyMoreMsg"></span>

`cannotPlugInAnyMoreMsg`

[attachables.t](../file/attachables.t.html)\[[779](../source/attachables.t.html#779)\]

<div class="desc">

If plugging anything else into us would exceed our socketCapacity, rule
out the action with an appropriate message,

</div>

<span id="canPlugIntoMe"></span>

`canPlugIntoMe`

[attachables.t](../file/attachables.t.html)\[[678](../source/attachables.t.html#678)\]

<div class="desc">

A PlugAttachable can have other things plugged into it.

</div>

<span id="isPlugable"></span>

`isPlugable`

[attachables.t](../file/attachables.t.html)\[[675](../source/attachables.t.html#675)\]

<div class="desc">

A PlugAttachable can be plugged into things.

</div>

<span id="isPluggedIn"></span>

`isPluggedIn`

[attachables.t](../file/attachables.t.html)\[[695](../source/attachables.t.html#695)\]

<div class="desc">

Is this item plugged in to anything?

</div>

<span id="needsExplicitSocket"></span>

`needsExplicitSocket`

[attachables.t](../file/attachables.t.html)\[[692](../source/attachables.t.html#692)\]

<div class="desc">

Plugable objects could either be implemented so that an explicit socket
needs to be specified (e.g. PLUG CABLE INTO SOCKET) or so that the
socket can be left unspecified (e.g. PLUG TV IN). For the former case,
make this property true; for the latter, make it nil.

</div>

<span id="notAttachedMsg"></span>

`notAttachedMsg`

[attachables.t](../file/attachables.t.html)\[[837](../source/attachables.t.html#837)\]

<div class="desc">

*no description available*

</div>

<span id="notAttachedToThatMsg"></span>

`notAttachedToThatMsg`

[attachables.t](../file/attachables.t.html)\[[840](../source/attachables.t.html#840)\]

<div class="desc">

*no description available*

</div>

<span id="okayAttachMsg"></span>

`okayAttachMsg`

[attachables.t](../file/attachables.t.html)\[[741](../source/attachables.t.html#741)\]

<div class="desc">

Note that we're now plugged in.

</div>

<span id="okayDetachFromMsg"></span>

`okayDetachFromMsg`

[attachables.t](../file/attachables.t.html)\[[834](../source/attachables.t.html#834)\]

<div class="desc">

Note that we're no longer plugged in to anything.

</div>

<span id="okayDetachMsg"></span>

`okayDetachMsg`

[attachables.t](../file/attachables.t.html)\[[872](../source/attachables.t.html#872)\]

<div class="desc">

If plugging/unplugging this item requires an explicit socket to plug
into/unplug from, then detach this item from whatever it's currently
attached to.

</div>

<span id="socketCapacity"></span>

`socketCapacity`

[attachables.t](../file/attachables.t.html)\[[704](../source/attachables.t.html#704)\]

<div class="desc">

If this object represents the socket side of a plug-and-socket
relationship, then the socketCapacity defines the total number of items
that can be plugged into it once. By default we'll assume that a socket
can only have one thing plugged into it at a time, but this can readily
be overridded for items that can take more.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="dobjFor(PlugIn)"></span>

`dobjFor(PlugIn)`

[attachables.t](../file/attachables.t.html)\[[874](../source/attachables.t.html#874)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(PlugInto)"></span>

`dobjFor(PlugInto)`

[attachables.t](../file/attachables.t.html)\[[712](../source/attachables.t.html#712)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(Unplug)"></span>

`dobjFor(Unplug)`

[attachables.t](../file/attachables.t.html)\[[843](../source/attachables.t.html#843)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(UnplugFrom)"></span>

`dobjFor(UnplugFrom)`

[attachables.t](../file/attachables.t.html)\[[802](../source/attachables.t.html#802)\]

<div class="desc">

*no description available*

</div>

<span id="iobjFor(AttachTo)"></span>

`iobjFor(AttachTo)`

[attachables.t](../file/attachables.t.html)\[[782](../source/attachables.t.html#782)\]

<div class="desc">

*no description available*

</div>

<span id="iobjFor(PlugInto)"></span>

`iobjFor(PlugInto)`

[attachables.t](../file/attachables.t.html)\[[749](../source/attachables.t.html#749)\]

<div class="desc">

*no description available*

</div>

<span id="makePlugged"></span>

`makePlugged (stat)`

[attachables.t](../file/attachables.t.html)\[[707](../source/attachables.t.html#707)\]

<div class="desc">

Note whether we're plugged our unplugged.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>