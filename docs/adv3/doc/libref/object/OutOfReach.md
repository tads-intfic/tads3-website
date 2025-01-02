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

<div class="fdesc">

Out Of Reach - this is a special mix-in that can be used to create an
object that places its \*contents\* out of reach under customizable
conditions, and can optionally place itself out of reach as well.

`class `**`OutOfReach`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`OutOfReach`**  
`         object`  
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



*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`cannotReachFromInsideMsg`](#cannotReachFromInsideMsg)[`cannotReachFromOutsideMsg`](#cannotReachFromOutsideMsg)[`canObjReachContents`](#canObjReachContents)[`canObjReachSelf`](#canObjReachSelf)[`canReachFromInside`](#canReachFromInside)[`canReachSelfFromInside`](#canReachSelfFromInside)[`checkTouchViaPath`](#checkTouchViaPath)[`tryImplicitRemoveObstructor`](#tryImplicitRemoveObstructor)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="cannotReachFromInsideMsg"></span>

`cannotReachFromInsideMsg (dest)`

[objects.t](../file/objects.t.html)\[[2328](../source/objects.t.html#2328)\]

<div class="desc">

*no description available*

</div>

<span id="cannotReachFromOutsideMsg"></span>

`cannotReachFromOutsideMsg (dest)`

[objects.t](../file/objects.t.html)\[[2327](../source/objects.t.html#2327)\]

<div class="desc">

The message to use to indicate that we can't reach an object, because
the actor is outside me and the target is inside, or vice versa. Each of
these can return a property ID giving an actor action message property,
or can simply return a string with the message text.

</div>

<span id="canObjReachContents"></span>

`canObjReachContents (obj)`

[objects.t](../file/objects.t.html)\[[2341](../source/objects.t.html#2341)\]

<div class="desc">

Determine if the given object can reach my contents. 'obj' is the object
(usually an actor) attempting to reach my contents from outside of me.

By default, we'll return nil, so that nothing within me can be reached
from anyone outside. This can be overridden to allow my contents to
become reachable from some external locations but not others; for
example, a high shelf could allow an actor standing on a chair to reach
my contents.

</div>

<span id="canObjReachSelf"></span>

`canObjReachSelf (obj)`

[objects.t](../file/objects.t.html)\[[2350](../source/objects.t.html#2350)\]

<div class="desc">

Determine if the given object can reach me. 'obj' is the object (usually
an actor) attempting to reach this object.

By default, make this object subject to the same rules as its contents.

</div>

<span id="canReachFromInside"></span>

`canReachFromInside (obj, dest)`

[objects.t](../file/objects.t.html)\[[2361](../source/objects.t.html#2361)\]

<div class="desc">

Determine if the given object outside of me is reachable from within me.
'obj' (usually an actor) is attempting to reach 'dest'.

By default, we return nil, so nothing outside of me is reachable from
within me. This can be overridden as needed. This should usually behave
symmetrically with canObjReachContents().

</div>

<span id="canReachSelfFromInside"></span>

`canReachSelfFromInside (obj)`

[objects.t](../file/objects.t.html)\[[2371](../source/objects.t.html#2371)\]

<div class="desc">

Determine if we can reach this object itself from within. This is used
when 'obj' tries to touch this object when 'obj' is located within this
object.

By default, we we use the same rules as we use to reach an external
object from within.

</div>

<span id="checkTouchViaPath"></span>

`checkTouchViaPath (obj, dest, op)`

[objects.t](../file/objects.t.html)\[[2272](../source/objects.t.html#2272)\]

<div class="desc">

*no description available*

</div>

<span id="tryImplicitRemoveObstructor"></span>

`tryImplicitRemoveObstructor (sense, obj)`

[objects.t](../file/objects.t.html)\[[2377](../source/objects.t.html#2377)\]

<div class="desc">

We cannot implicitly remove this obstruction, so simply return nil when
asked.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
