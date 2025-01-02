---
layout: docs
---
<span class="title">PermanentAttachment</span><span class="type">class</span>

[extras.t](../file/extras.t.html)\[[3574](../source/extras.t.html#3574)\]

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

Permanent attachments. This class is for things that are described in
the story text as attached to one another, but which can never be
separated. This is a mix-in class that can be combined with a Thing
subclass.

Descriptions of attachment tend to invite the player to try detaching
the parts; the purpose of this class is to provide responses that are
better than the defaults. A good custom message for this class should
usually acknowledge the attachment relationship, and explain why the
parts can't be separated.

There are two ways to express the attachment relationship.

First, the more flexible way: in each PermanentAttachment object, define
the 'attachedObjects' property to contain a list of the attached
objects. All of those other attached objects should usually be
PermanentAttachment objects themselves, because the real-world
relationship we're modeling is obviously symmetrical. Because of the
symmetrical relationship, it's only necessary to include the list entry
on one side of a pair of attached objects - each side will automatically
link itself to the other at start-up if it appears in the other's
attachedObjects list.

Second, the really easy way: if one of the attached objects is directly
inside the other (which often happens for permanent attachments, because
one is a component of the other), make the parent a PermanentAttachment,
make the inner one a PermanentAttachmentChild, and you're done. The two
will automatically link up their attachment lists at start-up.

Note that this is a subclass of Attachable. Note also that a
PermanentAttachment can be freely combined with a regular Attachable;
for example, you could create a rope with a hook permanently attached,
but stil allow the rope to be attached to other things as well: you'd
make the rope a regular Attachable, and make the hook a
PermanentAttachment. The hook would be unremovable because of its
permanent status, and this would symmetrical prevent the rope from being
removed from the hook. But the rope could still be attached to and
detached from other objects.

`class `**`PermanentAttachment`**` :   `[`Attachable`](../object/Attachable.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`PermanentAttachment`**  
[`Attachable`](../object/Attachable.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`PermanentAttachment`**  
[`PermanentAttachmentChild`](../object/PermanentAttachmentChild.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`baseCannotDetachMsg`](#baseCannotDetachMsg)

Inherited from `Attachable` :  
[`attachedObjects`](../object/Attachable.html#attachedObjects)[`attachmentLister`](../object/Attachable.html#attachmentLister)[`majorAttachmentLister`](../object/Attachable.html#majorAttachmentLister)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`cannotDetachMsgFor`](#cannotDetachMsgFor)

Inherited from `Attachable` :  
[`attachTo`](../object/Attachable.html#attachTo)[`beforeTravel`](../object/Attachable.html#beforeTravel)[`canAttachTo`](../object/Attachable.html#canAttachTo)[`canDetachFrom`](../object/Attachable.html#canDetachFrom)[`detachFrom`](../object/Attachable.html#detachFrom)[`dobjFor(AttachTo)`](../object/Attachable.html#dobjFor(AttachTo))[`dobjFor(Detach)`](../object/Attachable.html#dobjFor(Detach))[`dobjFor(DetachFrom)`](../object/Attachable.html#dobjFor(DetachFrom))[`dobjFor(TakeFrom)`](../object/Attachable.html#dobjFor(TakeFrom))[`examineStatus`](../object/Attachable.html#examineStatus)[`explainCannotAttachTo`](../object/Attachable.html#explainCannotAttachTo)[`getNonPermanentAttachments`](../object/Attachable.html#getNonPermanentAttachments)[`handleAttach`](../object/Attachable.html#handleAttach)[`handleDetach`](../object/Attachable.html#handleDetach)[`initializeThing`](../object/Attachable.html#initializeThing)[`iobjFor(AttachTo)`](../object/Attachable.html#iobjFor(AttachTo))[`iobjFor(DetachFrom)`](../object/Attachable.html#iobjFor(DetachFrom))[`iobjFor(TakeFrom)`](../object/Attachable.html#iobjFor(TakeFrom))[`isAttachedTo`](../object/Attachable.html#isAttachedTo)[`isListedAsAttachedTo`](../object/Attachable.html#isListedAsAttachedTo)[`isListedAsMajorFor`](../object/Attachable.html#isListedAsMajorFor)[`isMajorItemFor`](../object/Attachable.html#isMajorItemFor)[`isPermanentlyAttachedTo`](../object/Attachable.html#isPermanentlyAttachedTo)[`mainMoveInto`](../object/Attachable.html#mainMoveInto)[`maybeHandleAttach`](../object/Attachable.html#maybeHandleAttach)[`maybeHandleDetach`](../object/Attachable.html#maybeHandleDetach)[`moveWhileAttached`](../object/Attachable.html#moveWhileAttached)[`travelWhileAttached`](../object/Attachable.html#travelWhileAttached)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="baseCannotDetachMsg"></span>

`baseCannotDetachMsg`

[extras.t](../file/extras.t.html)\[[3598](../source/extras.t.html#3598)\]

<div class="desc">

basic message to use when we try to detach something from self

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="cannotDetachMsgFor"></span>

`cannotDetachMsgFor (obj)`<span class="rem">OVERRIDDEN</span>

[extras.t](../file/extras.t.html)\[[3587](../source/extras.t.html#3587)\]

<div class="desc">

Get the message explaining why we can't detach from 'obj'.

By default, if our container is also a PermanentAttachment, and we're
attached to it, we'll simply return its message. This makes it really
easy to define symmetrical permanent attachment relationships using
containment, since all you have to do is make the container and the
child both be PermanentAttachments, and then just define the
cannot-detach message in the container. If the container isn't a
PermanentAttachment, or we're not attached to it, we'll return our
default library message.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
