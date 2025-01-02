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



*no description available*

**`touch`**` :   `[`Sense`](../object/Sense.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`touch`**  
[`Sense`](../object/Sense.html)  
`                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`presenceProp`](#presenceProp) [`sizeProp`](#sizeProp) [`thruProp`](#thruProp)

Inherited from `Sense` :  
[`ambienceProp`](../object/Sense.html#ambienceProp)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`canObjBeSensed`](#canObjBeSensed)



<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="presenceProp"></span>

`presenceProp`<span class="rem">OVERRIDDEN</span>

[sense.t](../file/sense.t.html)\[[274](../source/sense.t.html#274)\]



*no description available*



<span id="sizeProp"></span>

`sizeProp`<span class="rem">OVERRIDDEN</span>

[sense.t](../file/sense.t.html)\[[273](../source/sense.t.html#273)\]



*no description available*



<span id="thruProp"></span>

`thruProp`<span class="rem">OVERRIDDEN</span>

[sense.t](../file/sense.t.html)\[[272](../source/sense.t.html#272)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="canObjBeSensed"></span>

`canObjBeSensed (obj, trans, ambient)`<span class="rem">OVERRIDDEN</span>

[sense.t](../file/sense.t.html)\[[281](../source/sense.t.html#281)\]



Override canObjBeSensed for touch. Unlike other senses, touch requires
physical contact with an object, so it cannot operate at a distance,
regardless of the size of an object.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


