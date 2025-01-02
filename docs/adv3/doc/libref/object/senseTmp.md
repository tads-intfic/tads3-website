---
layout: docs
---
<span class="title">senseTmp</span><span class="type">object</span>

[thing.t](../file/thing.t.html)\[[159](../source/thing.t.html#159)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)

<div class="fdesc">

Sense calculation scratch-pad globals. Many of the sense calculations
involve recursive descents of portions of the containment tree. In the
course of these calculations, it's sometimes useful to have information
about the entire operation in one of the recursive calls. We could pass
the information around as extra parameters, but that adds overhead, and
performance is critical in the sense routines (because they tend to get
invoked a \*lot\*). To reduce the overhead, particularly for information
that's not needed very often, we stuff some information into this global
object rather than passing it around through parameters.

Note that this object is transient because this information is useful
only during the course of a single tree traversal, and so doesn't need
to be saved or undone.

`transient `**`senseTmp`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`senseTmp`**  
`         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`notifyList`](#notifyList)`  `[`pointOfView`](#pointOfView)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `

*(none)* <span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="notifyList"></span>

`notifyList`

[thing.t](../file/thing.t.html)\[[168](../source/thing.t.html#168)\]

<div class="desc">

post-calculation notification list

</div>

<span id="pointOfView"></span>

`pointOfView`

[thing.t](../file/thing.t.html)\[[165](../source/thing.t.html#165)\]

<div class="desc">

The point of view of the sense calculation. This is the starting point
of a sense traversal; it's the object that's viewing the other objects.

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
