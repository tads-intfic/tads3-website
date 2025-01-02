---
layout: docs
---
<span class="title">NearbyAttachable</span><span class="type">class</span>

[extras.t](../file/extras.t.html)\[[3311](../source/extras.t.html#3311)\]

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



A "nearby" attachable is a subclass of Attachable that adds a
requirement that the attached objects be in a given location. By
default, we simply require that they have a common immediate container,
but this can be overridden so that each object's location is negotiated
separately. This is a simple and effective pattern that avoids many of
the potential anomalies with attachment (see the Attachable comments for
examples).

In AttachTo actions, we enforce the nearby requirement with a
precondition requiring the direct object to be in the same immediate
container as the indirect object, and vice versa. In
moveWhileAttached(), we enforce the rule by detaching the objects if one
is being moved away from the other's immediate container.

`class `**`NearbyAttachable`**` :   `[`Attachable`](../object/Attachable.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`NearbyAttachable`**  
[`Attachable`](../object/Attachable.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





Inherited from `Attachable` :  
[`attachedObjects`](../object/Attachable.html#attachedObjects) [`attachmentLister`](../object/Attachable.html#attachmentLister) [`majorAttachmentLister`](../object/Attachable.html#majorAttachmentLister)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`dobjFor(AttachTo)`](#dobjFor(AttachTo)) [`getNearbyAttachmentLocs`](#getNearbyAttachmentLocs) [`iobjFor(AttachTo)`](#iobjFor(AttachTo)) [`moveWhileAttached`](#moveWhileAttached) [`nestedDetachFrom`](#nestedDetachFrom)

Inherited from `Attachable` :  
[`attachTo`](../object/Attachable.html#attachTo) [`beforeTravel`](../object/Attachable.html#beforeTravel) [`canAttachTo`](../object/Attachable.html#canAttachTo) [`canDetachFrom`](../object/Attachable.html#canDetachFrom) [`cannotDetachMsgFor`](../object/Attachable.html#cannotDetachMsgFor) [`detachFrom`](../object/Attachable.html#detachFrom) [`dobjFor(Detach)`](../object/Attachable.html#dobjFor(Detach)) [`dobjFor(DetachFrom)`](../object/Attachable.html#dobjFor(DetachFrom)) [`dobjFor(TakeFrom)`](../object/Attachable.html#dobjFor(TakeFrom)) [`examineStatus`](../object/Attachable.html#examineStatus) [`explainCannotAttachTo`](../object/Attachable.html#explainCannotAttachTo) [`getNonPermanentAttachments`](../object/Attachable.html#getNonPermanentAttachments) [`handleAttach`](../object/Attachable.html#handleAttach) [`handleDetach`](../object/Attachable.html#handleDetach) [`initializeThing`](../object/Attachable.html#initializeThing) [`iobjFor(DetachFrom)`](../object/Attachable.html#iobjFor(DetachFrom)) [`iobjFor(TakeFrom)`](../object/Attachable.html#iobjFor(TakeFrom)) [`isAttachedTo`](../object/Attachable.html#isAttachedTo) [`isListedAsAttachedTo`](../object/Attachable.html#isListedAsAttachedTo) [`isListedAsMajorFor`](../object/Attachable.html#isListedAsMajorFor) [`isMajorItemFor`](../object/Attachable.html#isMajorItemFor) [`isPermanentlyAttachedTo`](../object/Attachable.html#isPermanentlyAttachedTo) [`mainMoveInto`](../object/Attachable.html#mainMoveInto) [`maybeHandleAttach`](../object/Attachable.html#maybeHandleAttach) [`maybeHandleDetach`](../object/Attachable.html#maybeHandleDetach) [`travelWhileAttached`](../object/Attachable.html#travelWhileAttached)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="dobjFor(AttachTo)"></span>

`dobjFor(AttachTo)`<span class="rem">OVERRIDDEN</span>

[extras.t](../file/extras.t.html)\[[3312](../source/extras.t.html#3312)\]



*no description available*



<span id="getNearbyAttachmentLocs"></span>

`getNearbyAttachmentLocs (other)`

[extras.t](../file/extras.t.html)\[[3347](../source/extras.t.html#3347)\]



Get the target locations for attaching to the given other object. The
"target locations" are the locations where the objects are required to
be in order to carry out the ATTACH command to attach this object to the
other object (or vice versa).

This method returns a list with three elements. The first element is the
target location for 'self', and the second is the target location for
'other', the object we're attaching to. The third element is an integer
giving the priority; a higher number means higher priority.

The priority is an arbitrary value that we use to determine which of the
two objects involved in the attach gets to decide on the target
locations. We call this method on both of the two objects being attached
to one another, then we use the target locations returned by the object
that claims the higher priority. If the two priorities are equal, we
pick one arbitrarily.

The default implementation chooses my own immediate container as the
target location for both objects. However, if the other object is
non-portable, we'll choose its immediate location instead, since we
obviously can't move it to our container.



<span id="iobjFor(AttachTo)"></span>

`iobjFor(AttachTo)`<span class="rem">OVERRIDDEN</span>

[extras.t](../file/extras.t.html)\[[3317](../source/extras.t.html#3317)\]



require that the objects be in the negotiated locations



<span id="moveWhileAttached"></span>

`moveWhileAttached (movedObj, newCont)`<span class="rem">OVERRIDDEN</span>

[extras.t](../file/extras.t.html)\[[3373](../source/extras.t.html#3373)\]



when an attached object is being moved, detach the objects



<span id="nestedDetachFrom"></span>

`nestedDetachFrom (obj)`

[extras.t](../file/extras.t.html)\[[3404](../source/extras.t.html#3404)\]



perform a nested DetachFrom action on the given object





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


