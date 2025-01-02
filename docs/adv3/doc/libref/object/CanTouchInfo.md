---
layout: docs
---
<span class="title">CanTouchInfo</span><span class="type">class</span>

[thing.t](../file/thing.t.html)\[[94](../source/thing.t.html#94)\]

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



Can-Touch information. This object keeps track of whether or not a given
object is able to reach out and touch another object.

`class `**`CanTouchInfo`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`CanTouchInfo`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`canTouch`](#canTouch)[`touchPath`](#touchPath)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="canTouch"></span>

`// canTouch`<span class="rem">Interface description only</span>

[thing.t](../file/thing.t.html)\[[107](../source/thing.t.html#107)\]



if we have calculated whether or not the source can touch the target,
we'll set the property canTouch to nil or true accordingly; if this
property is left undefined, this information has never been calculated



<span id="touchPath"></span>

`touchPath`

[thing.t](../file/thing.t.html)\[[99](../source/thing.t.html#99)\]



the full reach-and-touch path from the source to the target



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (path)`

[thing.t](../file/thing.t.html)\[[96](../source/thing.t.html#96)\]



construct, given the touch path





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


