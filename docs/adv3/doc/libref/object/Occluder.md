<span class="title">Occluder</span><span class="type">class</span>

[sense.t](../file/sense.t.html)\[[693](../source/sense.t.html#693)\]

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

Occluder: this is a mix-in class that can be used with multiple
inheritance to combine with other classes (such as SenseConnector, or
Thing subclasses), to create an "occluded view." This lets you exclude
certain objects from view, and you can make the exclusion vary according
to the point of view.

This class is useful for situations where the view from one location to
another is partially obstructed. For example, suppose we have two rooms,
connected by a window between them. The window is the sense connector
that connects the two top-level locations, and it makes objects in one
room visible from the point of view of the other room. Suppose that one
room contains a bookcase, with its back to the window. From the point of
view of the other room, we can't see anything inside the bookcase. This
class allows for such special situations.

Note that occlusion rules are applied "globally" within a room - that
is, anything that an Occluder occludes will be removed from view, even
if it's visible from another, non-occluding connector. Hence, occlusion
always takes precedence over "inclusion" - if an object is occluded just
once, then it won't be in view, no matter how many times it's added back
into view by other connectors. This comes from the order in which the
occlusion rules are considered. Occlusion rules are always run last, and
they can't distinguish the connector that added an object to view. So,
we first run around and collect up everything that can be seen, by
considering all of the different paths to seeing those things. Then, we
go through all of the occlusion rules that apply to the room, and we
remove from view everything that the occluding connectors want to
occlude.

`class `**`Occluder`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Occluder`**  
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

` `

*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`clearSenseInfo`](#clearSenseInfo)`  `[`finishSensePath`](#finishSensePath)`  `[`occludeObj`](#occludeObj)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="clearSenseInfo"></span>

`clearSenseInfo ( )`

[sense.t](../file/sense.t.html)\[[712](../source/sense.t.html#712)\]

<div class="desc">

When we initialize for the sense path calculation, register to receive
notification after we've finished building the sense table. We'll use
the notification to remove any occluded objects from the sense table.

</div>

<span id="finishSensePath"></span>

`finishSensePath (objs, sense)`

[sense.t](../file/sense.t.html)\[[735](../source/sense.t.html#735)\]

<div class="desc">

Receive notification that the sense path calculation is now finished.
'objs' is a LookupTable containing all of the objects involved in the
sense path calculation (the objects are the keys in the table). Each
object in the table now has its tmpXxx\_ properties set to the sense
path data we've calculated for that object - tmpTrans\_ is the
transparency to the object, tmpAmbient\_ is the ambient light level at
the object, and so on.

Since our job is to occlude certain objects from view, we'll run through
the table and test each object using our occlusion rule. If we find that
we do occlude an object, we'll set its transparency to 'opaque' to
indicate that it cannot be seen.

</div>

<span id="occludeObj"></span>

`occludeObj (obj, sense, pov)`

[sense.t](../file/sense.t.html)\[[700](../source/sense.t.html#700)\]

<div class="desc">

Do we occlude the given object, in the given sense and from the given
point of view? This returns true if the object is occluded, nil if not.
By default, we simply ask the object whether it's occluded by this
occluder from the given POV.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
