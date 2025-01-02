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

<div class="fdesc">

Visual event observer. This is a mix-in that can be added to any other
classes.

`class `**`SightObserver`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`SightObserver`**  
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

` `[`notifySightEvent`](#notifySightEvent)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="notifySightEvent"></span>

`notifySightEvent (event, source, info)`

[objects.t](../file/objects.t.html)\[[855](../source/objects.t.html#855)\]

<div class="desc">

Receive notification of a sight event. This routine is called whenever a
SightEvent occurs within view of this object.

'event' is the SightEvent object; 'source' is the physical simulation
object that is making the visual display; and 'info' is a SenseInfo
object describing the viewing conditions from this object to the source
object.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
