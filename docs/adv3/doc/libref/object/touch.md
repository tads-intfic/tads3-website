---
layout: docs
---
<span class="title">touch</span><span class="type">object</span>

[sense.t](../file/sense.t.html)\[[271](../source/sense.t.html#271)\]

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

*no description available*

**`touch`**` :   `[`Sense`](../object/Sense.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`touch`**  
[`Sense`](../object/Sense.html)  
`                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`presenceProp`](#presenceProp)[`sizeProp`](#sizeProp)[`thruProp`](#thruProp)

Inherited from `Sense` :  
[`ambienceProp`](../object/Sense.html#ambienceProp)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`canObjBeSensed`](#canObjBeSensed)



<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="presenceProp"></span>

`presenceProp`<span class="rem">OVERRIDDEN</span>

[sense.t](../file/sense.t.html)\[[274](../source/sense.t.html#274)\]

<div class="desc">

*no description available*

</div>

<span id="sizeProp"></span>

`sizeProp`<span class="rem">OVERRIDDEN</span>

[sense.t](../file/sense.t.html)\[[273](../source/sense.t.html#273)\]

<div class="desc">

*no description available*

</div>

<span id="thruProp"></span>

`thruProp`<span class="rem">OVERRIDDEN</span>

[sense.t](../file/sense.t.html)\[[272](../source/sense.t.html#272)\]

<div class="desc">

*no description available*

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="canObjBeSensed"></span>

`canObjBeSensed (obj, trans, ambient)`<span class="rem">OVERRIDDEN</span>

[sense.t](../file/sense.t.html)\[[281](../source/sense.t.html#281)\]

<div class="desc">

Override canObjBeSensed for touch. Unlike other senses, touch requires
physical contact with an object, so it cannot operate at a distance,
regardless of the size of an object.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
