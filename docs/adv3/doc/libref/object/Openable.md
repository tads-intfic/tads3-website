---
layout: docs
---
<span class="title">Openable</span><span class="type">class</span>

[objects.t](../file/objects.t.html)\[[3484](../source/objects.t.html#3484)\]

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

Openable: a mix-in class that can be combined with an object's other
superclasses to make the object respond to the verbs "open" and "close."
We also add some extra features for other related verbs, such as a
must-be-open precondition "look in" and "board".

`class `**`Openable`**` :   `[`BasicOpenable`](../object/BasicOpenable.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Openable`**  
[`BasicOpenable`](../object/BasicOpenable.html)  
[`Linkable`](../object/Linkable.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`Openable`**  
[`Door`](../object/Door.html)  
[`AutoClosingDoor`](../object/AutoClosingDoor.html)  
[`Matchbook`](../object/Matchbook.html)  
[`OpenableContainer`](../object/OpenableContainer.html)  
[`KeyedContainer`](../object/KeyedContainer.html)  
[`LockableContainer`](../object/LockableContainer.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`descContentsLister`](#descContentsLister)[`lockStatusReportable`](#lockStatusReportable)[`openingLister`](#openingLister)

Inherited from `BasicOpenable` :  
[`cannotMoveThroughMsg`](../object/BasicOpenable.html#cannotMoveThroughMsg)[`cannotTouchThroughMsg`](../object/BasicOpenable.html#cannotTouchThroughMsg)[`initiallyOpen`](../object/BasicOpenable.html#initiallyOpen)[`isOpen_`](../object/BasicOpenable.html#isOpen_)[`openDesc`](../object/BasicOpenable.html#openDesc)



<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`addInteriorReachableCond`](#addInteriorReachableCond)[`dobjFor(Board)`](#dobjFor(Board))[`dobjFor(Close)`](#dobjFor(Close))[`dobjFor(GetOutOf)`](#dobjFor(GetOutOf))[`dobjFor(Lock)`](#dobjFor(Lock))[`dobjFor(LockWith)`](#dobjFor(LockWith))[`dobjFor(LookIn)`](#dobjFor(LookIn))[`dobjFor(Open)`](#dobjFor(Open))[`dobjFor(Search)`](#dobjFor(Search))[`iobjFor(PourInto)`](#iobjFor(PourInto))[`iobjFor(PutIn)`](#iobjFor(PutIn))[`openStatus`](#openStatus)

Inherited from `BasicOpenable` :  
[`initializeThing`](../object/BasicOpenable.html#initializeThing)[`isOpen`](../object/BasicOpenable.html#isOpen)[`makeOpen`](../object/BasicOpenable.html#makeOpen)[`tryImplicitRemoveObstructor`](../object/BasicOpenable.html#tryImplicitRemoveObstructor)

Inherited from `Linkable` :  
[`masterObject`](../object/Linkable.html#masterObject)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="descContentsLister"></span>

`descContentsLister`

[objects.t](../file/objects.t.html)\[[3492](../source/objects.t.html#3492)\]

<div class="desc">

Describe our contents using a special version of the contents lister, so
that we add our open/closed status to the listing. The message we add is
given by our openStatus method, so if all you want to change is the
"it's open" status message, you can just override openStatus rather than
providing a whole new lister.

</div>

<span id="lockStatusReportable"></span>

`lockStatusReportable`

[objects.t](../file/objects.t.html)\[[3519](../source/objects.t.html#3519)\]

<div class="desc">

By default, an Openable that's also a Lockable must be closed to be
locked. This means that when it's open, the object is implicitly
unlocked, in which case "It's unlocked" isn't worth mentioning when the
description says "It's open."

</div>

<span id="openingLister"></span>

`openingLister`

[objects.t](../file/objects.t.html)\[[3499](../source/objects.t.html#3499)\]

<div class="desc">

Contents lister to use when we're opening the object. This lister shows
the items that are newly revealed when the object is opened.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="addInteriorReachableCond"></span>

`addInteriorReachableCond (lst)`

[objects.t](../file/objects.t.html)\[[3668](../source/objects.t.html#3668)\]

<div class="desc">

Generate a precondition to make sure gActor can reach the interior of
the container. We consider the inside reachable if either the actor is
located inside the container, or the actor is outside and the container
is open.

</div>

<span id="dobjFor(Board)"></span>

`dobjFor(Board)`

[objects.t](../file/objects.t.html)\[[3716](../source/objects.t.html#3716)\]

<div class="desc">

must be open to get into a nested room

</div>

<span id="dobjFor(Close)"></span>

`dobjFor(Close)`

[objects.t](../file/objects.t.html)\[[3590](../source/objects.t.html#3590)\]

<div class="desc">

show any special contents as well

</div>

<span id="dobjFor(GetOutOf)"></span>

`dobjFor(GetOutOf)`

[objects.t](../file/objects.t.html)\[[3706](../source/objects.t.html#3706)\]

<div class="desc">

must be open to get out of a nested room

</div>

<span id="dobjFor(Lock)"></span>

`dobjFor(Lock)`

[objects.t](../file/objects.t.html)\[[3696](../source/objects.t.html#3696)\]

<div class="desc">

can't lock an openable that isn't closed

</div>

<span id="dobjFor(LockWith)"></span>

`dobjFor(LockWith)`

[objects.t](../file/objects.t.html)\[[3700](../source/objects.t.html#3700)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(LookIn)"></span>

`dobjFor(LookIn)`

[objects.t](../file/objects.t.html)\[[3608](../source/objects.t.html#3608)\]

<div class="desc">

show the default report

</div>

<span id="dobjFor(Open)"></span>

`dobjFor(Open)`

[objects.t](../file/objects.t.html)\[[3524](../source/objects.t.html#3524)\]

<div class="desc">

Action handlers

</div>

<span id="dobjFor(Search)"></span>

`dobjFor(Search)`

[objects.t](../file/objects.t.html)\[[3633](../source/objects.t.html#3633)\]

<div class="desc">

return the result

</div>

<span id="iobjFor(PourInto)"></span>

`iobjFor(PourInto)`

[objects.t](../file/objects.t.html)\[[3689](../source/objects.t.html#3689)\]

<div class="desc">

make sure that our interior is reachable

</div>

<span id="iobjFor(PutIn)"></span>

`iobjFor(PutIn)`

[objects.t](../file/objects.t.html)\[[3683](../source/objects.t.html#3683)\]

<div class="desc">

return the result

</div>

<span id="openStatus"></span>

`openStatus ( )`

[objects.t](../file/objects.t.html)\[[3511](../source/objects.t.html#3511)\]

<div class="desc">

Get our "open status" message - this is a complete sentence saying that
we're open or closed. By default, in English, we just say "it's open"
(adjusted for number and gender, of course).

Note that this message has to be a stand-alone independent clause. In
particular note that we don't put any spacing after it, since we need to
be able to add sentence-ending or clause-ending punctuation immediately
after it.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
