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

<div class="fdesc">

Can-Touch information. This object keeps track of whether or not a given
object is able to reach out and touch another object.

`class `**`CanTouchInfo`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`CanTouchInfo`**  
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

` `[`canTouch`](#canTouch)`  `[`touchPath`](#touchPath)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="canTouch"></span>

`// canTouch`<span class="rem">Interface description only</span>

[thing.t](../file/thing.t.html)\[[107](../source/thing.t.html#107)\]

<div class="desc">

if we have calculated whether or not the source can touch the target,
we'll set the property canTouch to nil or true accordingly; if this
property is left undefined, this information has never been calculated

</div>

<span id="touchPath"></span>

`touchPath`

[thing.t](../file/thing.t.html)\[[99](../source/thing.t.html#99)\]

<div class="desc">

the full reach-and-touch path from the source to the target

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (path)`

[thing.t](../file/thing.t.html)\[[96](../source/thing.t.html#96)\]

<div class="desc">

construct, given the touch path

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
