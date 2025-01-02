---
layout: docs
---
<span class="title">OutOfReach</span><span class="type">class</span>

[objects.t](../file/objects.t.html)\[[2271](../source/objects.t.html#2271)\]

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



Out Of Reach - this is a special mix-in that can be used to create an
object that places its \*contents\* out of reach under customizable
conditions, and can optionally place itself out of reach as well.

`class `**`OutOfReach`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`OutOfReach`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`cannotReachFromInsideMsg`](#cannotReachFromInsideMsg) [`cannotReachFromOutsideMsg`](#cannotReachFromOutsideMsg) [`canObjReachContents`](#canObjReachContents) [`canObjReachSelf`](#canObjReachSelf) [`canReachFromInside`](#canReachFromInside) [`canReachSelfFromInside`](#canReachSelfFromInside) [`checkTouchViaPath`](#checkTouchViaPath) [`tryImplicitRemoveObstructor`](#tryImplicitRemoveObstructor)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="cannotReachFromInsideMsg"></span>

`cannotReachFromInsideMsg (dest)`

[objects.t](../file/objects.t.html)\[[2328](../source/objects.t.html#2328)\]



*no description available*



<span id="cannotReachFromOutsideMsg"></span>

`cannotReachFromOutsideMsg (dest)`

[objects.t](../file/objects.t.html)\[[2327](../source/objects.t.html#2327)\]



The message to use to indicate that we can't reach an object, because
the actor is outside me and the target is inside, or vice versa. Each of
these can return a property ID giving an actor action message property,
or can simply return a string with the message text.



<span id="canObjReachContents"></span>

`canObjReachContents (obj)`

[objects.t](../file/objects.t.html)\[[2341](../source/objects.t.html#2341)\]



Determine if the given object can reach my contents. 'obj' is the object
(usually an actor) attempting to reach my contents from outside of me.

By default, we'll return nil, so that nothing within me can be reached
from anyone outside. This can be overridden to allow my contents to
become reachable from some external locations but not others; for
example, a high shelf could allow an actor standing on a chair to reach
my contents.



<span id="canObjReachSelf"></span>

`canObjReachSelf (obj)`

[objects.t](../file/objects.t.html)\[[2350](../source/objects.t.html#2350)\]



Determine if the given object can reach me. 'obj' is the object (usually
an actor) attempting to reach this object.

By default, make this object subject to the same rules as its contents.



<span id="canReachFromInside"></span>

`canReachFromInside (obj, dest)`

[objects.t](../file/objects.t.html)\[[2361](../source/objects.t.html#2361)\]



Determine if the given object outside of me is reachable from within me.
'obj' (usually an actor) is attempting to reach 'dest'.

By default, we return nil, so nothing outside of me is reachable from
within me. This can be overridden as needed. This should usually behave
symmetrically with canObjReachContents().



<span id="canReachSelfFromInside"></span>

`canReachSelfFromInside (obj)`

[objects.t](../file/objects.t.html)\[[2371](../source/objects.t.html#2371)\]



Determine if we can reach this object itself from within. This is used
when 'obj' tries to touch this object when 'obj' is located within this
object.

By default, we we use the same rules as we use to reach an external
object from within.



<span id="checkTouchViaPath"></span>

`checkTouchViaPath (obj, dest, op)`

[objects.t](../file/objects.t.html)\[[2272](../source/objects.t.html#2272)\]



*no description available*



<span id="tryImplicitRemoveObstructor"></span>

`tryImplicitRemoveObstructor (sense, obj)`

[objects.t](../file/objects.t.html)\[[2377](../source/objects.t.html#2377)\]



We cannot implicitly remove this obstruction, so simply return nil when
asked.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


