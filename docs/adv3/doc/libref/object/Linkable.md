---
layout: docs
---
<span class="title">Linkable</span><span class="type">class</span>

[objects.t](../file/objects.t.html)\[[3309](../source/objects.t.html#3309)\]

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

A "linkable" object is one that can participate in a master/slave
relationship. This kind of relationship means that the state of both
objects in the pair is controlled by one of the objects, called the
master; the other object defers to the other to get and set all of its
linkable state.

Note that this base class doesn't provide for the management of any of
the actual linked state. Subclasses are responsible for doing this. The
general pattern is to create a getter/setter method pair for each bit of
linked state, and in these methods refer to masterObject.xxx rather than
just self.xxx.

This is useful for objects such as doors that have two separate objects
representing the two sides of the door. The two sides are always linked
for things like open/closed and locked/unlocked state; this can be
handled by linking the two sides, and managing all state of both sides
in one side designated as the master.

`class `**`Linkable`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Linkable`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`Linkable`**  
`         `[`BasicOpenable`](../object/BasicOpenable.html)  
`                 `[`BasicDoor`](../object/BasicDoor.html)  
`                         `[`Door`](../object/Door.html)  
`                                 `[`AutoClosingDoor`](../object/AutoClosingDoor.html)  
`                         `[`SecretDoor`](../object/SecretDoor.html)  
`                                 `[`HiddenDoor`](../object/HiddenDoor.html)  
`                 `[`Openable`](../object/Openable.html)  
`                         `[`Door`](../object/Door.html)  
`                                 `[`AutoClosingDoor`](../object/AutoClosingDoor.html)  
`                         `[`Matchbook`](../object/Matchbook.html)  
`                         `[`OpenableContainer`](../object/OpenableContainer.html)  
`                                 `[`KeyedContainer`](../object/KeyedContainer.html)  
`                                 `[`LockableContainer`](../object/LockableContainer.html)  
`         `[`Lockable`](../object/Lockable.html)  
`                 `[`IndirectLockable`](../object/IndirectLockable.html)  
`                 `[`LockableContainer`](../object/LockableContainer.html)  
`                 `[`LockableWithKey`](../object/LockableWithKey.html)  
`                         `[`KeyedContainer`](../object/KeyedContainer.html)  
`         `[`Passage`](../object/Passage.html)  
`                 `[`Stairway`](../object/Stairway.html)  
`                         `[`StairwayDown`](../object/StairwayDown.html)  
`                         `[`StairwayUp`](../object/StairwayUp.html)  
`                 `[`ThroughPassage`](../object/ThroughPassage.html)  
`                         `[`BasicDoor`](../object/BasicDoor.html)  
`                                 `[`Door`](../object/Door.html)  
`                                         `[`AutoClosingDoor`](../object/AutoClosingDoor.html)  
`                                 `[`SecretDoor`](../object/SecretDoor.html)  
`                                         `[`HiddenDoor`](../object/HiddenDoor.html)  
`                         `[`ExitOnlyPassage`](../object/ExitOnlyPassage.html)  
`                         `[`PathPassage`](../object/PathPassage.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`initializeThing`](#initializeThing)`  `[`masterObject`](#masterObject)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="initializeThing"></span>

`initializeThing ( )`

[objects.t](../file/objects.t.html)\[[3340](../source/objects.t.html#3340)\]

<div class="desc">

We're normally mixed into a Thing; do some extra work in initialization.

</div>

<span id="masterObject"></span>

`masterObject ( )`

[objects.t](../file/objects.t.html)\[[3324](../source/objects.t.html#3324)\]

<div class="desc">

Get the master object, which holds our state. By default, this is simply
'self', but some objects might want to override this. For example, doors
are usually implemented with two separate objects, representing the two
sides of the door, which share common state; in such cases, one of the
pair can be designated as the master, which holds the common state of
the door, and this method can be overridden so that all state operations
on the lock are performed on the master side of the door.

We return self by default so that a linkable object can stand alone if
desired. That is, a linkable object doesn't have to be part of a pair;
it can just as well be a single object.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
