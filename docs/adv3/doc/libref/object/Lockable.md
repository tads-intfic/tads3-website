---
layout: docs
---
<span class="title">Lockable</span><span class="type">class</span>

[objects.t](../file/objects.t.html)\[[3735](../source/objects.t.html#3735)\]

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



Lockable: a mix-in class that can be combined with an object's other
superclasses to make the object respond to the verbs "lock" and
"unlock." A Lockable requires no key.

Note that Lockable should usually go BEFORE a Thing-derived class in the
superclass list.

`class `**`Lockable`**` :   `[`Linkable`](../object/Linkable.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Lockable`**  
[`Linkable`](../object/Linkable.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`Lockable`**  
[`IndirectLockable`](../object/IndirectLockable.html)  
[`LockableContainer`](../object/LockableContainer.html)  
[`LockableWithKey`](../object/LockableWithKey.html)  
[`KeyedContainer`](../object/KeyedContainer.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`autoUnlockOnOpen`](#autoUnlockOnOpen) [`initiallyLocked`](#initiallyLocked) [`isLocked_`](#isLocked_) [`lockedDesc`](#lockedDesc) [`lockStatusObvious`](#lockStatusObvious) [`lockStatusReportable`](#lockStatusReportable)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`dobjFor(Lock)`](#dobjFor(Lock)) [`dobjFor(LockWith)`](#dobjFor(LockWith)) [`dobjFor(Open)`](#dobjFor(Open)) [`dobjFor(Unlock)`](#dobjFor(Unlock)) [`dobjFor(UnlockWith)`](#dobjFor(UnlockWith)) [`examineStatus`](#examineStatus) [`initializeThing`](#initializeThing) [`isLocked`](#isLocked) [`makeLocked`](#makeLocked)

Inherited from `Linkable` :  
[`masterObject`](../object/Linkable.html#masterObject)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="autoUnlockOnOpen"></span>

`autoUnlockOnOpen`

[objects.t](../file/objects.t.html)\[[3914](../source/objects.t.html#3914)\]



Should we automatically unlock this door on OPEN? By default, we do this
only if the lock status is obvious.



<span id="initiallyLocked"></span>

`initiallyLocked`

[objects.t](../file/objects.t.html)\[[3740](../source/objects.t.html#3740)\]



Our initial locked state (i.e., at the start of the game). By default,
we start out locked.



<span id="isLocked_"></span>

`isLocked_`

[objects.t](../file/objects.t.html)\[[3839](../source/objects.t.html#3839)\]



Internal locked state. Do not use this to set the initial state - set
initiallyLocked in the master object instead.



<span id="lockedDesc"></span>

`lockedDesc`

[objects.t](../file/objects.t.html)\[[3797](../source/objects.t.html#3797)\]



Description of the object's current locked state. In English, this
simply returns one of 'locked' or 'unlocked'. (Note that this is
provided as a convenience to games, for generating messages about the
object that include its state. The library doesn't use this message
itself, so overriding this won't change any library messages - in
particular, it won't change the examineStatus message.)



<span id="lockStatusObvious"></span>

`lockStatusObvious`

[objects.t](../file/objects.t.html)\[[3812](../source/objects.t.html#3812)\]



Is our 'locked' status obvious? This should be set to true for an object
whose locked/unlocked status can be visually observed, nil for an object
whose status is not visuall apparent. For example, you can usually tell
from the inside that a door is locked by looking at the position of the
lock's paddle, but on the outside of a door there's usually no way to
see the status.

By default, since we can be locked and unlocked with simple LOCK and
UNLOCK commands, we assume the status is as obvious as the mechanism
must be to allow such simple commands.



<span id="lockStatusReportable"></span>

`lockStatusReportable`

[objects.t](../file/objects.t.html)\[[3833](../source/objects.t.html#3833)\]



Is our 'locked' status reportable in our current state? This is similar
to lockStatusObvious, but serves a separate purpose: this tells us if we
wish to report the lock status for aesthetic reasons.

This property is primarily of interest to mix-ins. To allow mix-ins to
get a say, regardless of the order of superclasses, we'll by default
defer to any inherited value if there is in fact an inherited value. If
there's no inherited value, we'll simply return true.

We use this in the library for one case in particular: when we're mixed
with Openable, we don't want to report the lock status for an open
object because an Openable must by default be closed to be locked. That
is, when an Openable is open, it's always unlocked, so reporting that
it's unlocked is essentially redundant information.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="dobjFor(Lock)"></span>

`dobjFor(Lock)`

[objects.t](../file/objects.t.html)\[[3857](../source/objects.t.html#3857)\]



"lock"



<span id="dobjFor(LockWith)"></span>

`dobjFor(LockWith)`

[objects.t](../file/objects.t.html)\[[3897](../source/objects.t.html#3897)\]



"lock with"



<span id="dobjFor(Open)"></span>

`dobjFor(Open)`

[objects.t](../file/objects.t.html)\[[3925](../source/objects.t.html#3925)\]



A locked object can't be opened - apply a precondition and a check for
"open" that ensures that we unlock this object before we can open it.

If the lock status isn't obvious, don't try to unlock the object as a
precondition. Instead, test to make sure it's unlocked in the 'check'
routine, and fail.



<span id="dobjFor(Unlock)"></span>

`dobjFor(Unlock)`

[objects.t](../file/objects.t.html)\[[3877](../source/objects.t.html#3877)\]



"unlock"



<span id="dobjFor(UnlockWith)"></span>

`dobjFor(UnlockWith)`

[objects.t](../file/objects.t.html)\[[3904](../source/objects.t.html#3904)\]



"unlock with"



<span id="examineStatus"></span>

`examineStatus ( )`

[objects.t](../file/objects.t.html)\[[3773](../source/objects.t.html#3773)\]



show our status



<span id="initializeThing"></span>

`initializeThing ( )`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[3842](../source/objects.t.html#3842)\]



initialization



<span id="isLocked"></span>

`isLocked ( )`

[objects.t](../file/objects.t.html)\[[3746](../source/objects.t.html#3746)\]



Current locked state. Use our isLocked\_ status if we're the master,
otherwise defer to the master.



<span id="makeLocked"></span>

`makeLocked (stat)`

[objects.t](../file/objects.t.html)\[[3760](../source/objects.t.html#3760)\]



Make the object locked or unlocked. Objects can override this to apply
side effects of locking or unlocking. By default, if we're the master,
we'll simply set our isLocked\_ property to the new status, and
otherwise defer to the master object.
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


