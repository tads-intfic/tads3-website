---
layout: docs
---
<span class="title">Material</span><span class="type">class</span>

[sense.t](../file/sense.t.html)\[[21](../source/sense.t.html#21)\]

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



Material: the base class for library objects that specify the way senses
pass through objects.

`class `**`Material`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Material`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`adventium`](../object/adventium.html) [`coarseMesh`](../object/coarseMesh.html) [`fineMesh`](../object/fineMesh.html) [`glass`](../object/glass.html) [`paper`](../object/paper.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`hearThru`](#hearThru) [`seeThru`](#seeThru) [`smellThru`](#smellThru) [`touchThru`](#touchThru)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`senseThru`](#senseThru)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="hearThru"></span>

`hearThru`

[sense.t](../file/sense.t.html)\[[41](../source/sense.t.html#41)\]



*no description available*



<span id="seeThru"></span>

`seeThru`

[sense.t](../file/sense.t.html)\[[40](../source/sense.t.html#40)\]



For each sense, each material must define an appropriate xxxThru
property that returns the transparency level for that sense through the
material. Any xxxThru property not defined in an individual material
defaults to opaque.



<span id="smellThru"></span>

`smellThru`

[sense.t](../file/sense.t.html)\[[42](../source/sense.t.html#42)\]



*no description available*



<span id="touchThru"></span>

`touchThru`

[sense.t](../file/sense.t.html)\[[43](../source/sense.t.html#43)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="senseThru"></span>

`senseThru (sense)`

[sense.t](../file/sense.t.html)\[[28](../source/sense.t.html#28)\]



Determine how a sense passes through the material. We'll return a
transparency level. (Individual materials should not need to override
this method, since it simply dispatches to the various xxxThru methods.)
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


