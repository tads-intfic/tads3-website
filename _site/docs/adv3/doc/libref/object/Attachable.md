<span class="title">Attachable</span><span class="type">class</span>

[extras.t](../file/extras.t.html)\[[2533](../source/extras.t.html#2533)\]

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

An Attachable is an object that can be attached to another, using an
ATTACH X TO Y command. This is a mix-in class that is meant to be
combined with a Thing-derived class to create an attachable object.

Attachment is symmetrical: we can only attach to other Attachable
objects. As a result, the verb handling for ATTACH can be performed
symmetrically - ATTACH X TO Y is handled the same way as ATTACH Y TO X.
Sometimes reversing the roles makes the command nonsensical, but when
the reversal makes sense, it seems unlikely that it'll ever change the
meaning of the command. This makes it program the verb handling, because
it means that we can designate one of X or Y as the handler for the
verb, and just write the code once there. Refer to the handleAttach()
method to see how this works.

There's an important detail that we leave to instances, because there's
no good general rule we can implement. Specifically, there's the matter
of imposing appropriate constraints on the relative locations of objects
once they're attached to one another. There are numerous anomalies that
become possible once two objects are attached. Consider the example of a
battery connected to a jumper cable that's in turn connected to a lamp:

\- if we put the battery in a box but leave the lamp outside the box, we
shouldn't be able to close the lid of the box all the way without
breaking the cables

\- if we're carrying the battery but not the lamp, traveling to a new
room should drag the lamp along

\- if we drop the battery down a well, the lamp should be dragged down
with it

Our world model isn't sophisticated enough to properly model an
attachment relationship, so it can't deal with these contingencies by
proper physical simulation. Which is why we have to leave these for the
game to handle.

There are two main strategies you can apply to handle these problems.

First, you can impose limits that prevent these sorts of situations from
coming up in the first place, either by carefully designing the scenario
so they simply don't come up, or by imposing more or less artificial
constraints. For example, you could solve all of the problems above by
eliminating the jumper cable and attaching the lamp directly to the
battery, or by making the jumper cable very short. Anything attached to
the battery would effectively become located "in" the battery, so it
would move everywhere along with the battery automatically. Detaching
the lamp would move the lamp back outside the battery, and conversely,
moving the lamp out of the battery would detach the objects.

Second, you can detect the anomalous cases and handle them explicitly
with special-purpose code. You could use beforeAction and afterAction
methods on one of the attached objects, for example, to detect the
various problematic actions, either blocking them or implementing
appropriate consequences.

Given the number of difficult anomalies possible with rope-like objects,
the second approach is challenging on its own. However, it often helps
to combine it with the first approach, limiting the scenario. In other
words, you'd limit the scenario to some extent, but not totally: rather
than completely excising the difficult behavior, you'd narrow it down to
a manageable subset of the full range of real-world possibilities; then,
you'd deal with the remaining anomalies on a case-by-case basis. For
example, you could make the battery too heavy to carry, which would
guarantee that it would never be put in a box, thrown down a well, or
carried out of the room. That would only leave a few issues: walking
away while carrying the plugged in lamp, which could be handled with an
afterAction that severs the attachment; putting the lamp in a box and
closing the box, which could be handled with a beforeAction by blocking
Close actions whenever the lamp is inside the object being closed.

`class `**`Attachable`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Attachable`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`Attachable`**  
`         `[`NearbyAttachable`](../object/NearbyAttachable.html)  
`         `[`PermanentAttachment`](../object/PermanentAttachment.html)  
`                 `[`PermanentAttachmentChild`](../object/PermanentAttachmentChild.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`attachedObjects`](#attachedObjects)`  `[`attachmentLister`](#attachmentLister)`  `[`majorAttachmentLister`](#majorAttachmentLister)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`attachTo`](#attachTo)`  `[`beforeTravel`](#beforeTravel)`  `[`canAttachTo`](#canAttachTo)`  `[`canDetachFrom`](#canDetachFrom)`  `[`cannotDetachMsgFor`](#cannotDetachMsgFor)`  `[`detachFrom`](#detachFrom)`  `[`dobjFor(AttachTo)`](#dobjFor(AttachTo))`  `[`dobjFor(Detach)`](#dobjFor(Detach))`  `[`dobjFor(DetachFrom)`](#dobjFor(DetachFrom))`  `[`dobjFor(TakeFrom)`](#dobjFor(TakeFrom))`  `[`examineStatus`](#examineStatus)`  `[`explainCannotAttachTo`](#explainCannotAttachTo)`  `[`getNonPermanentAttachments`](#getNonPermanentAttachments)`  `[`handleAttach`](#handleAttach)`  `[`handleDetach`](#handleDetach)`  `[`initializeThing`](#initializeThing)`  `[`iobjFor(AttachTo)`](#iobjFor(AttachTo))`  `[`iobjFor(DetachFrom)`](#iobjFor(DetachFrom))`  `[`iobjFor(TakeFrom)`](#iobjFor(TakeFrom))`  `[`isAttachedTo`](#isAttachedTo)`  `[`isListedAsAttachedTo`](#isListedAsAttachedTo)`  `[`isListedAsMajorFor`](#isListedAsMajorFor)`  `[`isMajorItemFor`](#isMajorItemFor)`  `[`isPermanentlyAttachedTo`](#isPermanentlyAttachedTo)`  `[`mainMoveInto`](#mainMoveInto)`  `[`maybeHandleAttach`](#maybeHandleAttach)`  `[`maybeHandleDetach`](#maybeHandleDetach)`  `[`moveWhileAttached`](#moveWhileAttached)`  `[`travelWhileAttached`](#travelWhileAttached)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="attachedObjects"></span>

`attachedObjects`

[extras.t](../file/extras.t.html)\[[2540](../source/extras.t.html#2540)\]

<div class="desc">

The list of objects I'm currently attached to. Note that each of the
objects in this list must usually be an Attachable, and we must be
included in the attachedObjects list in each of these objects.

</div>

<span id="attachmentLister"></span>

`attachmentLister`

[extras.t](../file/extras.t.html)\[[2849](../source/extras.t.html#2849)\]

<div class="desc">

the Lister we use to show our list of attached objects

</div>

<span id="majorAttachmentLister"></span>

`majorAttachmentLister`

[extras.t](../file/extras.t.html)\[[2856](../source/extras.t.html#2856)\]

<div class="desc">

the Lister we use to list the items attached to us (i.e., the items for
which we're the "major" item in the attachment relationship)

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="attachTo"></span>

`attachTo (obj)`

[extras.t](../file/extras.t.html)\[[2548](../source/extras.t.html#2548)\]

<div class="desc">

Perform programmatic attachment, without any notifications. This simply
updates my attachedObjects list and the other object's list to indicate
that we're attached to the other object (and vice versa).

</div>

<span id="beforeTravel"></span>

`beforeTravel (traveler, connector)`

[extras.t](../file/extras.t.html)\[[2903](../source/extras.t.html#2903)\]

<div class="desc">

Receive notification of travel. If I'm involved in the travel, and I'm
attached to anything, we'll notify ourself and our attachments.

</div>

<span id="canAttachTo"></span>

`canAttachTo (obj)`

[extras.t](../file/extras.t.html)\[[2660](../source/extras.t.html#2660)\]

<div class="desc">

Can I attach to the given object? This returns true if the other object
is allowable as an attachment, nil if not.

By default, we look to see if the other side is an Attachable, and if
so, if it overrides canAttachTo(); if so, we'll call its canAttachTo to
ask whether it thinks it can attach to us. If the other side doesn't
override this, we'll simply return nil. This arrangement is convenient
because it means that only one side of an attachable pair needs to
implement this; the other side will automatically figure it out by
calling the first side and relying on the symmetry of the relationship.

</div>

<span id="canDetachFrom"></span>

`canDetachFrom (obj)`

[extras.t](../file/extras.t.html)\[[2710](../source/extras.t.html#2710)\]

<div class="desc">

Is it possible for me to detach from the given object? This asks whether
a given attachment relationship can be dissolved with DETACH FROM.

By default, we'll use similar logic to canAttachTo: if the other object
overrides canDetachFrom(), we'll let it make the determination.
Otherwise, we'll return nil if one or the other side is a
PermanentAttachment, true if not. This lets you prevent detachment by
overriding canDetachFrom() on just one side of the relationship.

</div>

<span id="cannotDetachMsgFor"></span>

`cannotDetachMsgFor (obj)`

[extras.t](../file/extras.t.html)\[[2748](../source/extras.t.html#2748)\]

<div class="desc">

A message explaining why we can't detach from the given object. Note
that 'obj' can be nil, because we could be attempting a DETACH command
with no indirect object.

</div>

<span id="detachFrom"></span>

`detachFrom (obj)`

[extras.t](../file/extras.t.html)\[[2555](../source/extras.t.html#2555)\]

<div class="desc">

perform programmatic detachment, without any notifications

</div>

<span id="dobjFor(AttachTo)"></span>

`dobjFor(AttachTo)`

[extras.t](../file/extras.t.html)\[[2946](../source/extras.t.html#2946)\]

<div class="desc">

handle attachment on the direct object side

</div>

<span id="dobjFor(Detach)"></span>

`dobjFor(Detach)`

[extras.t](../file/extras.t.html)\[[3062](../source/extras.t.html#3062)\]

<div class="desc">

handle simple, unspecified detachment (DETACH OBJECT)

</div>

<span id="dobjFor(DetachFrom)"></span>

`dobjFor(DetachFrom)`

[extras.t](../file/extras.t.html)\[[3108](../source/extras.t.html#3108)\]

<div class="desc">

handle detaching me from a specific other object

</div>

<span id="dobjFor(TakeFrom)"></span>

`dobjFor(TakeFrom)`

[extras.t](../file/extras.t.html)\[[3200](../source/extras.t.html#3200)\]

<div class="desc">

TAKE X FROM Y is the same as DETACH X FROM Y for things we're attached
to, but use the inherited handling otherwise

</div>

<span id="examineStatus"></span>

`examineStatus ( )`

[extras.t](../file/extras.t.html)\[[2859](../source/extras.t.html#2859)\]

<div class="desc">

add a list of our attachments to the desription

</div>

<span id="explainCannotAttachTo"></span>

`explainCannotAttachTo (obj)`

[extras.t](../file/extras.t.html)\[[2696](../source/extras.t.html#2696)\]

<div class="desc">

Explain why we can't attach to the given object. This should simply
display an appropriate mesage. We use reportFailure to flag it as a
failure report, but that's not actually required, since we call this
from our 'check' routine, which will mark the action as having failed
even if we don't here.

</div>

<span id="getNonPermanentAttachments"></span>

`getNonPermanentAttachments ( )`

[extras.t](../file/extras.t.html)\[[2562](../source/extras.t.html#2562)\]

<div class="desc">

get the subset of my attachments that are non-permanent

</div>

<span id="handleAttach"></span>

`handleAttach (other)`

[extras.t](../file/extras.t.html)\[[2790](../source/extras.t.html#2790)\]

<div class="desc">

Process attachment to a new object. This routine is called on BOTH the
direct and indirect object during the attachment process - that is, it's
called on the direct object with the indirect object as the argument,
and then it's called on the indirect object with the direct object as
the argument.

This symmetrical handling makes it easy to handle the frequent cases
where the player might say ATTACH X TO Y or ATTACH Y TO X and mean the
same thing either way. Because this method is called for both X and Y in
either phrasing, you can simply choose to write the handler code in
either X or Y - you only have to write it once, because the handler will
be called on each of the objects, regardless of the phrasing. So, if you
choose to designate X as the official ATTACH handler, write a
handleAttach() method on X, and leave the one on Y doing nothing: during
execution, the X method will do its work, and the Y method will do
nothing, so regardless of phrasing order, the net result will be the
same.

By default we do nothing. Each instance should override this to display
any extra message and take any extra action needed to process the
attachment status change. Note that the override doesn't need to worry
about managing the attachedObjects list, as the main action handler does
that automatically.

Note that handleAttach() is always called after both objects have
updated their attachedObjects lists. This means that you can turn right
around and detach the objects here, if you don't want to leave them
attached.

</div>

<span id="handleDetach"></span>

`handleDetach (other)`

[extras.t](../file/extras.t.html)\[[2843](../source/extras.t.html#2843)\]

<div class="desc">

Handle detachment. This works like handleAttach(), in that this routine
is invoked symmetrically for both sides of a DETACH X FROM Y commands.

As with handleAttach(), we do nothing by default, so instances should
override as needed. Note that the override doesn't need to worry about
managing the attachedObjects list, as the main action handler does that
automatically. As with handleAttach(), this is called after the
attachedObjects lists for both objects are updated.

</div>

<span id="initializeThing"></span>

`initializeThing ( )`

[extras.t](../file/extras.t.html)\[[2925](../source/extras.t.html#2925)\]

<div class="desc">

during initialization, make sure the attachedObjects list is symmetrical
for both sides of the attachment relationship

</div>

<span id="iobjFor(AttachTo)"></span>

`iobjFor(AttachTo)`

[extras.t](../file/extras.t.html)\[[2990](../source/extras.t.html#2990)\]

<div class="desc">

handle attachment on the indirect object side

</div>

<span id="iobjFor(DetachFrom)"></span>

`iobjFor(DetachFrom)`

[extras.t](../file/extras.t.html)\[[3139](../source/extras.t.html#3139)\]

<div class="desc">

handle detachment on the indirect object side

</div>

<span id="iobjFor(TakeFrom)"></span>

`iobjFor(TakeFrom)`

[extras.t](../file/extras.t.html)\[[3230](../source/extras.t.html#3230)\]

<div class="desc">

if we're attached, change this into a DETACH FROM action; otherwise, use
the inherited TAKE FROM handling

</div>

<span id="isAttachedTo"></span>

`isAttachedTo (obj)`

[extras.t](../file/extras.t.html)\[[2569](../source/extras.t.html#2569)\]

<div class="desc">

am I attached to the given object?

</div>

<span id="isListedAsAttachedTo"></span>

`isListedAsAttachedTo (obj)`

[extras.t](../file/extras.t.html)\[[2611](../source/extras.t.html#2611)\]

<div class="desc">

Am I \*listed\* as attached to the given object? If this is true, then
our examineStatus() will list 'obj' among the things I'm attached to:
"Self is attached to obj." If this is nil, I'm not listed as attached.

By default, we're listed if (1) we're not permanently attached to 'obj',
AND (2) we're not the "major" item in the attachment relationship. The
reason we're not listed if we're permanently attached is that the
attachment information is presumably better handled via the fixed
description of the object rather than in the extra status message; this
is analogous to the way immovable items (such as Fixtures) aren't
normally listed in the description of a room. The reason we're not
listed if we're the "major" item in the relationship is that the "major"
status reverses the relationship: when we're the major item, the other
item is described as attached to \*us\*, rather than vice versa.

</div>

<span id="isListedAsMajorFor"></span>

`isListedAsMajorFor (obj)`

[extras.t](../file/extras.t.html)\[[2638](../source/extras.t.html#2638)\]

<div class="desc">

Is 'obj' listed as attached to me when I'm described? If this is true,
then our examineStatus() will list 'obj' among the things attached to
me: "Attached to self is obj." If this is nil, then 'obj' is not listed
among the things attached to me when I'm described.

This routine is simply the "major" list counterpart of
isListedAsAttachedTo().

By default, we list 'obj' among my attachments if (1) I'm the "major"
item for 'obj', AND (2) 'obj' is listed as attached to me, as indicated
by obj.isListedAsAttachedTo(self). We only list our minor attachments
here, because we list all of our other listable attachments separately,
as the things I'm attached to. We also only list items that are
themselves listable as attachments, for obvious reasons.

</div>

<span id="isMajorItemFor"></span>

`isMajorItemFor (obj)`

[extras.t](../file/extras.t.html)\[[2591](../source/extras.t.html#2591)\]

<div class="desc">

Am I the "major" item in my attachment relationship to the given object?
This affects how our relationship is described in our status message: in
an asymmetrical relationship, where one object is the "major" item, we
will always describe the minor item as being attached to the major item
rather than vice versa. This allows you to ensure that the message is
always "the sign is attached to the wall", and never "the wall is
attached to the sign": the wall is the major item in this relationship,
so it's always the sign that's attached to it.

By default, we always return nil here, which means that attachment
relationships are symmetrical by default. In a symmetrical relationship,
we'll describe the other things as attached to 'self' when describing
self.

</div>

<span id="isPermanentlyAttachedTo"></span>

`isPermanentlyAttachedTo (obj)`

[extras.t](../file/extras.t.html)\[[2733](../source/extras.t.html#2733)\]

<div class="desc">

Am I permanently attached to the other object? This returns true if I'm
a PermanentAttachment or the other object is.

</div>

<span id="mainMoveInto"></span>

`mainMoveInto (newCont)`

[extras.t](../file/extras.t.html)\[[2882](../source/extras.t.html#2882)\]

<div class="desc">

Move into a new container. If I'm attached to anything, we'll notify
ourself and our attachments.

</div>

<span id="maybeHandleAttach"></span>

`maybeHandleAttach (other)`

[extras.t](../file/extras.t.html)\[[3047](../source/extras.t.html#3047)\]

<div class="desc">

Fire the handleAttach event - we'll notify both sides as soon as both
sides are hooked up with each other. This ensures that both lists are
updated before we notify either side, so the ordering doesn't depend on
whether we handle the dobj or iobj first.

</div>

<span id="maybeHandleDetach"></span>

`maybeHandleDetach (other)`

[extras.t](../file/extras.t.html)\[[3182](../source/extras.t.html#3182)\]

<div class="desc">

Fire the handleDetach event - we'll notify both sides as soon as both
sides are un-hooked up. This ensures that both lists are updated before
we notify either side, so the ordering doesn't depend on whether we
handle the dobj or iobj first.

</div>

<span id="moveWhileAttached"></span>

`moveWhileAttached (movedObj, newCont)`

[extras.t](../file/extras.t.html)\[[2809](../source/extras.t.html#2809)\]

<div class="desc">

Receive notification that this object or one of its attachments is being
moved to a new container. When an attached object is moved, we'll call
this on the object being moved AND on every object attached to it.
'movedObj' is the object being moved, and 'newCont' is the new container
it's being moved into.

By default we do nothing. Instances can override this as needed. For
example, if you wish to enforce a rule that this object and all of its
attached objects share a common direct container, you could either block
the move (by displaying an error and using 'exit') or run a nested
DetachFrom action to sever the attachment with the object being moved.

</div>

<span id="travelWhileAttached"></span>

`travelWhileAttached (movedObj, traveler, connector)`

[extras.t](../file/extras.t.html)\[[2826](../source/extras.t.html#2826)\]

<div class="desc">

Receive notification that this object or one of its attachments is being
moved in the course of an actor traveling to a new location. Whenever
anyone travels while carrying an attachable object (directly or
indirectly), we'll call this on the object being moved AND on every
object attached to it. 'movedObj' is the object being carried by the
traveling actor, 'traveler' is the Traveler performing the travel, and
'connector' is the TravelConnector that the traveler is traversing.

By default, we do nothing. Instances can override this as needed.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
