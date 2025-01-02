---
layout: docs
---
<span class="title">PermanentAttachmentChild</span><span class="type">class</span>

[extras.t](../file/extras.t.html)\[[3607](../source/extras.t.html#3607)\]

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

A permanent attachment "child" - this is an attachment that's explicitly
attached to its container object. This is a convenient way of setting up
an attachment relationship between container and contents when the
contents object isn't a Component.

`class `**`PermanentAttachmentChild`**` :   `[`PermanentAttachment`](../object/PermanentAttachment.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`PermanentAttachmentChild`**  
[`PermanentAttachment`](../object/PermanentAttachment.html)  
[`Attachable`](../object/Attachable.html)  
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

[`attachedObjects`](#attachedObjects)

Inherited from `PermanentAttachment` :  
[`baseCannotDetachMsg`](../object/PermanentAttachment.html#baseCannotDetachMsg)

Inherited from `Attachable` :  
[`attachmentLister`](../object/Attachable.html#attachmentLister)[`majorAttachmentLister`](../object/Attachable.html#majorAttachmentLister)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>



Inherited from `PermanentAttachment` :  
[`cannotDetachMsgFor`](../object/PermanentAttachment.html#cannotDetachMsgFor)

Inherited from `Attachable` :  
[`attachTo`](../object/Attachable.html#attachTo)[`beforeTravel`](../object/Attachable.html#beforeTravel)[`canAttachTo`](../object/Attachable.html#canAttachTo)[`canDetachFrom`](../object/Attachable.html#canDetachFrom)[`detachFrom`](../object/Attachable.html#detachFrom)[`dobjFor(AttachTo)`](../object/Attachable.html#dobjFor(AttachTo))[`dobjFor(Detach)`](../object/Attachable.html#dobjFor(Detach))[`dobjFor(DetachFrom)`](../object/Attachable.html#dobjFor(DetachFrom))[`dobjFor(TakeFrom)`](../object/Attachable.html#dobjFor(TakeFrom))[`examineStatus`](../object/Attachable.html#examineStatus)[`explainCannotAttachTo`](../object/Attachable.html#explainCannotAttachTo)[`getNonPermanentAttachments`](../object/Attachable.html#getNonPermanentAttachments)[`handleAttach`](../object/Attachable.html#handleAttach)[`handleDetach`](../object/Attachable.html#handleDetach)[`initializeThing`](../object/Attachable.html#initializeThing)[`iobjFor(AttachTo)`](../object/Attachable.html#iobjFor(AttachTo))[`iobjFor(DetachFrom)`](../object/Attachable.html#iobjFor(DetachFrom))[`iobjFor(TakeFrom)`](../object/Attachable.html#iobjFor(TakeFrom))[`isAttachedTo`](../object/Attachable.html#isAttachedTo)[`isListedAsAttachedTo`](../object/Attachable.html#isListedAsAttachedTo)[`isListedAsMajorFor`](../object/Attachable.html#isListedAsMajorFor)[`isMajorItemFor`](../object/Attachable.html#isMajorItemFor)[`isPermanentlyAttachedTo`](../object/Attachable.html#isPermanentlyAttachedTo)[`mainMoveInto`](../object/Attachable.html#mainMoveInto)[`maybeHandleAttach`](../object/Attachable.html#maybeHandleAttach)[`maybeHandleDetach`](../object/Attachable.html#maybeHandleDetach)[`moveWhileAttached`](../object/Attachable.html#moveWhileAttached)[`travelWhileAttached`](../object/Attachable.html#travelWhileAttached)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="attachedObjects"></span>

`attachedObjects`<span class="rem">OVERRIDDEN</span>

[extras.t](../file/extras.t.html)\[[3609](../source/extras.t.html#3609)\]

<div class="desc">

we're attached directly to our container

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

*(none)*

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
