---
layout: docs
---
<span class="title">SightObserver</span><span class="type">class</span>

[objects.t](../file/objects.t.html)\[[845](../source/objects.t.html#845)\]

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



Visual event observer. This is a mix-in that can be added to any other
classes.

`class `**`SightObserver`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`SightObserver`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`notifySightEvent`](#notifySightEvent)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="notifySightEvent"></span>

`notifySightEvent (event, source, info)`

[objects.t](../file/objects.t.html)\[[855](../source/objects.t.html#855)\]



Receive notification of a sight event. This routine is called whenever a
SightEvent occurs within view of this object.

'event' is the SightEvent object; 'source' is the physical simulation
object that is making the visual display; and 'info' is a SenseInfo
object describing the viewing conditions from this object to the source
object.
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


