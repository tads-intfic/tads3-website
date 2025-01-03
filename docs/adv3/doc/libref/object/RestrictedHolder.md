---
layout: docs
---
<span class="title">RestrictedHolder</span><span class="type">class</span>

[objects.t](../file/objects.t.html)\[[5018](../source/objects.t.html#5018)\]

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



A "restricted holder" is a generic mix-in class for various container
types (Containers, Surfaces, Undersides, RearContainers, RearSurfaces)
that adds a restriction to what can be contained.

`class `**`RestrictedHolder`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`RestrictedHolder`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`RestrictedHolder`**  
[`RestrictedContainer`](../object/RestrictedContainer.html)  
[`RestrictedRearContainer`](../object/RestrictedRearContainer.html)  
[`RestrictedRearSurface`](../object/RestrictedRearSurface.html)  
[`RestrictedSurface`](../object/RestrictedSurface.html)  
[`RestrictedUnderside`](../object/RestrictedUnderside.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`validContents`](#validContents)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`canPutIn`](#canPutIn) [`checkPutDobj`](#checkPutDobj)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="validContents"></span>

`validContents`

[objects.t](../file/objects.t.html)\[[5025](../source/objects.t.html#5025)\]



A list of acceptable items for the container. This list can be used to
identify the objects that can be put in the container (or on the
surface, under the underside, or behind the rear container or surface).



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="canPutIn"></span>

`canPutIn (obj)`

[objects.t](../file/objects.t.html)\[[5037](../source/objects.t.html#5037)\]



Is the given object allowed to go in this container (or on/under/behind
it, as appropriate for the type)? Returns true if so, nil if not. By
default, we'll return true if the object is found in our validContents
list, nil if not. This can be overridden if a subclass wants to
determine which objects are acceptable with some other kind of
per-object test; for example, a subclass might accept only objects of a
given class as contents, or might accept only contents with some
particular attribute.



<span id="checkPutDobj"></span>

`checkPutDobj (msgProp)`

[objects.t](../file/objects.t.html)\[[5043](../source/objects.t.html#5043)\]



Check a PUT IN/ON/UNDER/BEHIND action to ensure that the direct object
is in our approved-contents list.
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


