[PlugAttachable]{.title}[class]{.type}

[attachables.t](../file/attachables.t.html)\[[672](../source/attachables.t.html#672)\]

[Superclass\
Tree](#_SuperClassTree_)

[Subclass\
Tree](#_SubClassTree_)

[Global\
Objects](#_ObjectSummary_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
PlugAttachable is a mix-in class for use in conjunction with either
SimpleAttachable or NearbyAttachable, enabling the commands PLUG X INTO
Y, UNPLUG X FROM Y, PLUG X IN and UNPLUG X, treating ATTACH and DETACH
commands as equivalent to these, and describing an object\'s attachments
as being plugged into it.

`class `**`PlugAttachable`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`PlugAttachable`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

*(none)* []{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`alreadyAttachedMsg`](#alreadyAttachedMsg)`  `[`alreadyPluggedInMsg`](#alreadyPluggedInMsg)`  `[`attachmentLister`](#attachmentLister)`  `[`cannotBeAttachedMsg`](#cannotBeAttachedMsg)`  `[`cannotPlugInAnyMoreMsg`](#cannotPlugInAnyMoreMsg)`  `[`canPlugIntoMe`](#canPlugIntoMe)`  `[`isPlugable`](#isPlugable)`  `[`isPluggedIn`](#isPluggedIn)`  `[`needsExplicitSocket`](#needsExplicitSocket)`  `[`notAttachedMsg`](#notAttachedMsg)`  `[`notAttachedToThatMsg`](#notAttachedToThatMsg)`  `[`okayAttachMsg`](#okayAttachMsg)`  `[`okayDetachFromMsg`](#okayDetachFromMsg)`  `[`okayDetachMsg`](#okayDetachMsg)`  `[`socketCapacity`](#socketCapacity)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`dobjFor(PlugIn)`](#dobjFor(PlugIn))`  `[`dobjFor(PlugInto)`](#dobjFor(PlugInto))`  `[`dobjFor(Unplug)`](#dobjFor(Unplug))`  `[`dobjFor(UnplugFrom)`](#dobjFor(UnplugFrom))`  `[`iobjFor(AttachTo)`](#iobjFor(AttachTo))`  `[`iobjFor(PlugInto)`](#iobjFor(PlugInto))`  `[`makePlugged`](#makePlugged)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#alreadyAttachedMsg}

`alreadyAttachedMsg`

[attachables.t](../file/attachables.t.html)\[[744](../source/attachables.t.html#744)\]

::: desc
*no description available*
:::

[]{#alreadyPluggedInMsg}

`alreadyPluggedInMsg`

[attachables.t](../file/attachables.t.html)\[[747](../source/attachables.t.html#747)\]

::: desc
*no description available*
:::

[]{#attachmentLister}

`attachmentLister`

[attachables.t](../file/attachables.t.html)\[[684](../source/attachables.t.html#684)\]

::: desc
Objects attached to this object should be described as plugged into it,
so we need to use the appropriate lister.
:::

[]{#cannotBeAttachedMsg}

`cannotBeAttachedMsg`

[attachables.t](../file/attachables.t.html)\[[799](../source/attachables.t.html#799)\]

::: desc
Make sure we don\'t exceed our socketCapacity if the player uses ATTACH
TO rather than PLUG INTO; use the check method for PlugInto.
:::

[]{#cannotPlugInAnyMoreMsg}

`cannotPlugInAnyMoreMsg`

[attachables.t](../file/attachables.t.html)\[[779](../source/attachables.t.html#779)\]

::: desc
If plugging anything else into us would exceed our socketCapacity, rule
out the action with an appropriate message,
:::

[]{#canPlugIntoMe}

`canPlugIntoMe`

[attachables.t](../file/attachables.t.html)\[[678](../source/attachables.t.html#678)\]

::: desc
A PlugAttachable can have other things plugged into it.
:::

[]{#isPlugable}

`isPlugable`

[attachables.t](../file/attachables.t.html)\[[675](../source/attachables.t.html#675)\]

::: desc
A PlugAttachable can be plugged into things.
:::

[]{#isPluggedIn}

`isPluggedIn`

[attachables.t](../file/attachables.t.html)\[[695](../source/attachables.t.html#695)\]

::: desc
Is this item plugged in to anything?
:::

[]{#needsExplicitSocket}

`needsExplicitSocket`

[attachables.t](../file/attachables.t.html)\[[692](../source/attachables.t.html#692)\]

::: desc
Plugable objects could either be implemented so that an explicit socket
needs to be specified (e.g. PLUG CABLE INTO SOCKET) or so that the
socket can be left unspecified (e.g. PLUG TV IN). For the former case,
make this property true; for the latter, make it nil.
:::

[]{#notAttachedMsg}

`notAttachedMsg`

[attachables.t](../file/attachables.t.html)\[[837](../source/attachables.t.html#837)\]

::: desc
*no description available*
:::

[]{#notAttachedToThatMsg}

`notAttachedToThatMsg`

[attachables.t](../file/attachables.t.html)\[[840](../source/attachables.t.html#840)\]

::: desc
*no description available*
:::

[]{#okayAttachMsg}

`okayAttachMsg`

[attachables.t](../file/attachables.t.html)\[[741](../source/attachables.t.html#741)\]

::: desc
Note that we\'re now plugged in.
:::

[]{#okayDetachFromMsg}

`okayDetachFromMsg`

[attachables.t](../file/attachables.t.html)\[[834](../source/attachables.t.html#834)\]

::: desc
Note that we\'re no longer plugged in to anything.
:::

[]{#okayDetachMsg}

`okayDetachMsg`

[attachables.t](../file/attachables.t.html)\[[872](../source/attachables.t.html#872)\]

::: desc
If plugging/unplugging this item requires an explicit socket to plug
into/unplug from, then detach this item from whatever it\'s currently
attached to.
:::

[]{#socketCapacity}

`socketCapacity`

[attachables.t](../file/attachables.t.html)\[[704](../source/attachables.t.html#704)\]

::: desc
If this object represents the socket side of a plug-and-socket
relationship, then the socketCapacity defines the total number of items
that can be plugged into it once. By default we\'ll assume that a socket
can only have one thing plugged into it at a time, but this can readily
be overridded for items that can take more.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#dobjFor(PlugIn)}

`dobjFor(PlugIn)`

[attachables.t](../file/attachables.t.html)\[[874](../source/attachables.t.html#874)\]

::: desc
*no description available*
:::

[]{#dobjFor(PlugInto)}

`dobjFor(PlugInto)`

[attachables.t](../file/attachables.t.html)\[[712](../source/attachables.t.html#712)\]

::: desc
*no description available*
:::

[]{#dobjFor(Unplug)}

`dobjFor(Unplug)`

[attachables.t](../file/attachables.t.html)\[[843](../source/attachables.t.html#843)\]

::: desc
*no description available*
:::

[]{#dobjFor(UnplugFrom)}

`dobjFor(UnplugFrom)`

[attachables.t](../file/attachables.t.html)\[[802](../source/attachables.t.html#802)\]

::: desc
*no description available*
:::

[]{#iobjFor(AttachTo)}

`iobjFor(AttachTo)`

[attachables.t](../file/attachables.t.html)\[[782](../source/attachables.t.html#782)\]

::: desc
*no description available*
:::

[]{#iobjFor(PlugInto)}

`iobjFor(PlugInto)`

[attachables.t](../file/attachables.t.html)\[[749](../source/attachables.t.html#749)\]

::: desc
*no description available*
:::

[]{#makePlugged}

`makePlugged (stat)`

[attachables.t](../file/attachables.t.html)\[[707](../source/attachables.t.html#707)\]

::: desc
Note whether we\'re plugged our unplugged.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
