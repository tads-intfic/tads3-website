---
layout: docs
---
<span class="title">IndirectLockable</span><span class="type">class</span>

[objects.t](../file/objects.t.html)\[[3975](../source/objects.t.html#3975)\]

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

A lockable that can't be locked and unlocked by direct action. The LOCK
and UNLOCK commands cannot be used with this kind of lockable.

This is useful for a couple of situations. First, it's useful when we
want to create a locked object that simply can't be unlocked, such as a
locked door that forms a permanent boundary of the map. Second, it's
useful for locked objects that must be unlocked by some other means,
such as manipulating an external mechanism (pulling a lever, say). In
these cases, the trick is to figure out the separate means of unlocking
the door, so we don't want the LOCK and UNLOCK commands to work
directly.

`class `**`IndirectLockable`**` :   `[`Lockable`](../object/Lockable.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`IndirectLockable`**  
[`Lockable`](../object/Lockable.html)  
[`Linkable`](../object/Linkable.html)  
`                         object`  
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

[`cannotLockMsg`](#cannotLockMsg)[`cannotUnlockMsg`](#cannotUnlockMsg)[`lockStatusObvious`](#lockStatusObvious)

Inherited from `Lockable` :  
[`autoUnlockOnOpen`](../object/Lockable.html#autoUnlockOnOpen)[`initiallyLocked`](../object/Lockable.html#initiallyLocked)[`isLocked_`](../object/Lockable.html#isLocked_)[`lockedDesc`](../object/Lockable.html#lockedDesc)[`lockStatusReportable`](../object/Lockable.html#lockStatusReportable)



<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`dobjFor(Lock)`](#dobjFor(Lock))[`dobjFor(LockWith)`](#dobjFor(LockWith))[`dobjFor(Unlock)`](#dobjFor(Unlock))[`dobjFor(UnlockWith)`](#dobjFor(UnlockWith))

Inherited from `Lockable` :  
[`dobjFor(Open)`](../object/Lockable.html#dobjFor(Open))[`examineStatus`](../object/Lockable.html#examineStatus)[`initializeThing`](../object/Lockable.html#initializeThing)[`isLocked`](../object/Lockable.html#isLocked)[`makeLocked`](../object/Lockable.html#makeLocked)

Inherited from `Linkable` :  
[`masterObject`](../object/Linkable.html#masterObject)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="cannotLockMsg"></span>

`cannotLockMsg`

[objects.t](../file/objects.t.html)\[[4005](../source/objects.t.html#4005)\]

<div class="desc">

the message we display in response to LOCK/UNLOCK

</div>

<span id="cannotUnlockMsg"></span>

`cannotUnlockMsg`

[objects.t](../file/objects.t.html)\[[4006](../source/objects.t.html#4006)\]

<div class="desc">

*no description available*

</div>

<span id="lockStatusObvious"></span>

`lockStatusObvious`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[4002](../source/objects.t.html#4002)\]

<div class="desc">

Since we can't be locked and unlocked with simple LOCK and UNLOCK
commands, presume that the lock status isn't obvious. If the alternative
mechanism that locks and unlocks the object makes the current status
readily apparent, this should be overridden and set to true.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="dobjFor(Lock)"></span>

`dobjFor(Lock)`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[3976](../source/objects.t.html#3976)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(LockWith)"></span>

`dobjFor(LockWith)`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[3984](../source/objects.t.html#3984)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(Unlock)"></span>

`dobjFor(Unlock)`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[3985](../source/objects.t.html#3985)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(UnlockWith)"></span>

`dobjFor(UnlockWith)`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[3993](../source/objects.t.html#3993)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
