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



A "basic openable" is an object that keeps open/closed status, and which
can be linked to another object to maintain that status. This basic
class doesn't handle any special commands; it's purely for keeping track
of internal open/closed state.

`class `**`BasicOpenable`**` :   `[`Linkable`](../object/Linkable.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`BasicOpenable`**  
[`Linkable`](../object/Linkable.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



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



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`cannotMoveThroughMsg`](#cannotMoveThroughMsg) [`cannotTouchThroughMsg`](#cannotTouchThroughMsg) [`initiallyOpen`](#initiallyOpen) [`isOpen_`](#isOpen_) [`openDesc`](#openDesc)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`initializeThing`](#initializeThing) [`isOpen`](#isOpen) [`makeOpen`](#makeOpen) [`tryImplicitRemoveObstructor`](#tryImplicitRemoveObstructor)

Inherited from `Linkable` :  
[`masterObject`](../object/Linkable.html#masterObject)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="cannotMoveThroughMsg"></span>

`cannotMoveThroughMsg`

[objects.t](../file/objects.t.html)\[[3468](../source/objects.t.html#3468)\]



*no description available*



<span id="cannotTouchThroughMsg"></span>

`cannotTouchThroughMsg`

[objects.t](../file/objects.t.html)\[[3467](../source/objects.t.html#3467)\]



if we can't reach or move something through the container, it must be
because we're closed



<span id="initiallyOpen"></span>

`initiallyOpen`

[objects.t](../file/objects.t.html)\[[3387](../source/objects.t.html#3387)\]



Initial open/closed setting. Set this to true to make the object open
initially. If this object is linked to another object (as in the two
sides of a door), you only need to set this property in the \*master\*
object - the other side will automatically link up to the master object
during initialization.



<span id="isOpen_"></span>

`isOpen_`

[objects.t](../file/objects.t.html)\[[3474](../source/objects.t.html#3474)\]



Internal open/closed status. Do not use this for initialization - set
initiallyOpen in the master object instead.



<span id="openDesc"></span>

`openDesc`

[objects.t](../file/objects.t.html)\[[3432](../source/objects.t.html#3432)\]



Open status name. This is an adjective describing whether the object is
opened or closed. In English, this will return "open" or "closed."



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="initializeThing"></span>

`initializeThing ( )`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[3436](../source/objects.t.html#3436)\]



initialization



<span id="isOpen"></span>

`isOpen ( )`

[objects.t](../file/objects.t.html)\[[3393](../source/objects.t.html#3393)\]



Flag: door is open. Travel is only possible when the door is open.
Return the master's status.



<span id="makeOpen"></span>

`makeOpen (stat)`

[objects.t](../file/objects.t.html)\[[3412](../source/objects.t.html#3412)\]



Make the object open or closed. By default, we'll simply set the isOpen
flag to the new status. Objects can override this to apply side effects
of opening or closing the object.



<span id="tryImplicitRemoveObstructor"></span>

`tryImplicitRemoveObstructor (sense, obj)`

[objects.t](../file/objects.t.html)\[[3450](../source/objects.t.html#3450)\]



If we're obstructing a sense path, it must be because we're closed. Try
implicitly opening.
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


