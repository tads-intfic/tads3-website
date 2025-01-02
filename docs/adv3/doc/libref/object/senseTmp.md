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



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`senseTmp`**  
`         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`notifyList`](#notifyList)[`pointOfView`](#pointOfView)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  





*(none)* <span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="notifyList"></span>

`notifyList`

[thing.t](../file/thing.t.html)\[[168](../source/thing.t.html#168)\]



post-calculation notification list



<span id="pointOfView"></span>

`pointOfView`

[thing.t](../file/thing.t.html)\[[165](../source/thing.t.html#165)\]



The point of view of the sense calculation. This is the starting point
of a sense traversal; it's the object that's viewing the other objects.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


