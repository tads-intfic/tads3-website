---
layout: docs
---
<span class="title">LockableWithKey</span><span class="type">class</span>

[objects.t](../file/objects.t.html)\[[4021](../source/objects.t.html#4021)\]

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

LockableWithKey: a mix-in class that can be combined with an object's
other superclasses to make the object respond to the verbs "lock" and
"unlock," with a key as an indirect object. A LockableWithKey cannot be
locked or unlocked except with the keys listed in the keyList property.

Note that LockableWithKey should usually go BEFORE a Thing-derived class
in the superclass list.

`class `**`LockableWithKey`**` :   `[`Lockable`](../object/Lockable.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`LockableWithKey`**  
[`Lockable`](../object/Lockable.html)  
[`Linkable`](../object/Linkable.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`LockableWithKey`**  
[`KeyedContainer`](../object/KeyedContainer.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`keyList`](#keyList)[`knownKeyList`](#knownKeyList)[`lockStatusObvious`](#lockStatusObvious)[`rememberKnownKeys`](#rememberKnownKeys)

Inherited from `Lockable` :  
[`autoUnlockOnOpen`](../object/Lockable.html#autoUnlockOnOpen)[`initiallyLocked`](../object/Lockable.html#initiallyLocked)[`isLocked_`](../object/Lockable.html#isLocked_)[`lockedDesc`](../object/Lockable.html#lockedDesc)[`lockStatusReportable`](../object/Lockable.html#lockStatusReportable)



<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`autoUnlockOnOpen`](#autoUnlockOnOpen)[`dobjFor(Lock)`](#dobjFor(Lock))[`dobjFor(LockWith)`](#dobjFor(LockWith))[`dobjFor(Unlock)`](#dobjFor(Unlock))[`dobjFor(UnlockWith)`](#dobjFor(UnlockWith))[`getKnownKeyList`](#getKnownKeyList)[`getKnownKeyOwner`](#getKnownKeyOwner)[`isKeyKnown`](#isKeyKnown)[`keyFitsLock`](#keyFitsLock)[`keyIsPlausible`](#keyIsPlausible)[`lockOrUnlockAction`](#lockOrUnlockAction)

Inherited from `Lockable` :  
[`dobjFor(Open)`](../object/Lockable.html#dobjFor(Open))[`examineStatus`](../object/Lockable.html#examineStatus)[`initializeThing`](../object/Lockable.html#initializeThing)[`isLocked`](../object/Lockable.html#isLocked)[`makeLocked`](../object/Lockable.html#makeLocked)

Inherited from `Linkable` :  
[`masterObject`](../object/Linkable.html#masterObject)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="keyList"></span>

`keyList`

[objects.t](../file/objects.t.html)\[[4070](../source/objects.t.html#4070)\]

<div class="desc">

the list of objects that can serve as keys for this object

</div>

<span id="knownKeyList"></span>

`knownKeyList`

[objects.t](../file/objects.t.html)\[[4077](../source/objects.t.html#4077)\]

<div class="desc">

The list of keys which the player knows will fit this lock. This is used
to make key disambiguation automatic once the player knows the correct
key for a lock.

</div>

<span id="lockStatusObvious"></span>

`lockStatusObvious`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[4138](../source/objects.t.html#4138)\]

<div class="desc">

By default, the locked/unlocked status of a keyed lockable is nil. In
most cases, an object that's locked and unlocked using a key doesn't
have a visible indication of the status; for example, you usually can't
tell just by looking at it from the outside whether or not an exterior
door to a building is locked. Usually, the only way to tell from the
outside that an exterior door is locked is to try opening it and see if
it opens.

</div>

<span id="rememberKnownKeys"></span>

`rememberKnownKeys`

[objects.t](../file/objects.t.html)\[[4120](../source/objects.t.html#4120)\]

<div class="desc">

Flag: remember my keys after they're successfully used. If this is true,
whenever a key is successfully used to lock or unlock this object, we'll
add the key to our known key list; subsequently, whenever we try to use
a key in this lock, we will automatically disambiguate the key based on
the keys known to work previously.

Some authors might prefer not to assume that the player should remember
which keys operate which locks, so this property can be changed to nil
to eliminate this memory feature. By default we set this to true, since
it shouldn't generally give away any secrets or puzzles for the game to
assume that a key that was used successfully once with a given lock is
the one to be used subsequently with the same lock.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="autoUnlockOnOpen"></span>

`autoUnlockOnOpen ( )`

[objects.t](../file/objects.t.html)\[[4148](../source/objects.t.html#4148)\]

<div class="desc">

Should we automatically unlock on OPEN? We will if our inherited
handling says so, OR if the current actor is carrying a key that's known
to work with this object. We automatically unlock when a known key is
present as a convenience: if we have a known key, then there's no
mystery in unlocking this object, and thus for playability we want to
make its operation fully automatic.

</div>

<span id="dobjFor(Lock)"></span>

`dobjFor(Lock)`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[4158](../source/objects.t.html#4158)\]

<div class="desc">

Action handling

</div>

<span id="dobjFor(LockWith)"></span>

`dobjFor(LockWith)`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[4265](../source/objects.t.html#4265)\]

<div class="desc">

"lock with"

</div>

<span id="dobjFor(Unlock)"></span>

`dobjFor(Unlock)`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[4184](../source/objects.t.html#4184)\]

<div class="desc">

"unlock"

</div>

<span id="dobjFor(UnlockWith)"></span>

`dobjFor(UnlockWith)`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[4281](../source/objects.t.html#4281)\]

<div class="desc">

"unlock with"

</div>

<span id="getKnownKeyList"></span>

`getKnownKeyList ( )`

[objects.t](../file/objects.t.html)\[[4083](../source/objects.t.html#4083)\]

<div class="desc">

Get my known key list. This simply returns the known key list from the
known key owner.

</div>

<span id="getKnownKeyOwner"></span>

`getKnownKeyOwner ( )`

[objects.t](../file/objects.t.html)\[[4091](../source/objects.t.html#4091)\]

<div class="desc">

Get the object that own our known key list. If we explicitly have our
own non-empty known key list, we own the key list; otherwise, our master
object owns the list, as long as it has a non-nil key list at all.

</div>

<span id="isKeyKnown"></span>

`isKeyKnown (key)`

[objects.t](../file/objects.t.html)\[[4127](../source/objects.t.html#4127)\]

<div class="desc">

Determine if the player knows that the given key operates this lock.
Returns true if the key is in our known key list, nil if not.

</div>

<span id="keyFitsLock"></span>

`keyFitsLock (key)`

[objects.t](../file/objects.t.html)\[[4027](../source/objects.t.html#4027)\]

<div class="desc">

Determine if the key fits this lock. Returns true if so, nil if not. By
default, we'll return true if the key is in my keyList. This can be
overridden to use other key selection criteria.

</div>

<span id="keyIsPlausible"></span>

`keyIsPlausible (key)`

[objects.t](../file/objects.t.html)\[[4067](../source/objects.t.html#4067)\]

<div class="desc">

Determine if the key is plausibly of the right type for this lock. This
doesn't check to see if the key actually fits the lock - rather, this
checks to see if the key is generally the kind of object that might
plausibly be used with this lock.

The point of this routine is to make this class concerned only with the
abstract notion of objects that serve to lock and unlock other objects,
without requiring that the key objects resemble little notched metal
sticks or that the lock objects resemble cylinders with pins - or, more
specifically, without requiring that all of the kinds of keys in a game
remotely resemble one another.

For example, one kind of "key" in a game might be a plastic card with a
magnetic stripe, and the corresponding lock would be a card slot;
another kind of key might the traditional notched metal stick. Clearly,
no one would ever think to use a plastic card with a conventional door
lock, nor would one try to put a house key into a card slot (not with
the expectation that it would actually work, anyway). This routine is
meant to facilitate this kind of distinction: the card slot can use this
routine to indicate that only plastic card objects are plausible as
keys, and door locks can indicate that only metal keys are plausible.

This routine can be used for disambiguation and other purposes when we
must programmatically select a key that is not specified or is only
vaguely specified. For example, the keyring searcher uses it so that,
when we're searching for a key on a keyring to open this lock, we
implicitly try only the kinds of keys that would be plausibly useful for
this kind of lock.

By default, we'll simply return true. Subclasses specific to a game
(such as the "card reader" base class or the "door lock" base class) can
override this to discriminate among the game-specific key classes.

</div>

<span id="lockOrUnlockAction"></span>

`lockOrUnlockAction (lock)`

[objects.t](../file/objects.t.html)\[[4220](../source/objects.t.html#4220)\]

<div class="desc">

perform the action processing for LockWith or UnlockWith - these are
highly symmetrical, in that the only thing that varies is the new lock
state we establish

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
