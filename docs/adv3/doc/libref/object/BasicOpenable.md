---
layout: docs
---
<span class="title">BasicOpenable</span><span class="type">class</span>

[objects.t](../file/objects.t.html)\[[3379](../source/objects.t.html#3379)\]

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

A "basic openable" is an object that keeps open/closed status, and which
can be linked to another object to maintain that status. This basic
class doesn't handle any special commands; it's purely for keeping track
of internal open/closed state.

`class `**`BasicOpenable`**` :   `[`Linkable`](../object/Linkable.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`BasicOpenable`**  
[`Linkable`](../object/Linkable.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`BasicOpenable`**  
[`BasicDoor`](../object/BasicDoor.html)  
[`Door`](../object/Door.html)  
[`AutoClosingDoor`](../object/AutoClosingDoor.html)  
[`SecretDoor`](../object/SecretDoor.html)  
[`HiddenDoor`](../object/HiddenDoor.html)  
[`Openable`](../object/Openable.html)  
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

[`cannotMoveThroughMsg`](#cannotMoveThroughMsg)[`cannotTouchThroughMsg`](#cannotTouchThroughMsg)[`initiallyOpen`](#initiallyOpen)[`isOpen_`](#isOpen_)[`openDesc`](#openDesc)



<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`initializeThing`](#initializeThing)[`isOpen`](#isOpen)[`makeOpen`](#makeOpen)[`tryImplicitRemoveObstructor`](#tryImplicitRemoveObstructor)

Inherited from `Linkable` :  
[`masterObject`](../object/Linkable.html#masterObject)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="cannotMoveThroughMsg"></span>

`cannotMoveThroughMsg`

[objects.t](../file/objects.t.html)\[[3468](../source/objects.t.html#3468)\]

<div class="desc">

*no description available*

</div>

<span id="cannotTouchThroughMsg"></span>

`cannotTouchThroughMsg`

[objects.t](../file/objects.t.html)\[[3467](../source/objects.t.html#3467)\]

<div class="desc">

if we can't reach or move something through the container, it must be
because we're closed

</div>

<span id="initiallyOpen"></span>

`initiallyOpen`

[objects.t](../file/objects.t.html)\[[3387](../source/objects.t.html#3387)\]

<div class="desc">

Initial open/closed setting. Set this to true to make the object open
initially. If this object is linked to another object (as in the two
sides of a door), you only need to set this property in the \*master\*
object - the other side will automatically link up to the master object
during initialization.

</div>

<span id="isOpen_"></span>

`isOpen_`

[objects.t](../file/objects.t.html)\[[3474](../source/objects.t.html#3474)\]

<div class="desc">

Internal open/closed status. Do not use this for initialization - set
initiallyOpen in the master object instead.

</div>

<span id="openDesc"></span>

`openDesc`

[objects.t](../file/objects.t.html)\[[3432](../source/objects.t.html#3432)\]

<div class="desc">

Open status name. This is an adjective describing whether the object is
opened or closed. In English, this will return "open" or "closed."

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="initializeThing"></span>

`initializeThing ( )`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[3436](../source/objects.t.html#3436)\]

<div class="desc">

initialization

</div>

<span id="isOpen"></span>

`isOpen ( )`

[objects.t](../file/objects.t.html)\[[3393](../source/objects.t.html#3393)\]

<div class="desc">

Flag: door is open. Travel is only possible when the door is open.
Return the master's status.

</div>

<span id="makeOpen"></span>

`makeOpen (stat)`

[objects.t](../file/objects.t.html)\[[3412](../source/objects.t.html#3412)\]

<div class="desc">

Make the object open or closed. By default, we'll simply set the isOpen
flag to the new status. Objects can override this to apply side effects
of opening or closing the object.

</div>

<span id="tryImplicitRemoveObstructor"></span>

`tryImplicitRemoveObstructor (sense, obj)`

[objects.t](../file/objects.t.html)\[[3450](../source/objects.t.html#3450)\]

<div class="desc">

If we're obstructing a sense path, it must be because we're closed. Try
implicitly opening.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
