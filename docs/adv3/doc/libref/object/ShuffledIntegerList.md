---
layout: docs
---
<span class="title">ShuffledIntegerList</span><span class="type">class</span>

[misc.t](../file/misc.t.html)\[[1546](../source/misc.t.html#1546)\]

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

A Shuffled Integer List is a special kind of Shuffled List that returns
integers in a given range. Like an ordinary Shuffled List, we'll return
integers in the given range in random order, but we'll only return each
integer once during a given round; when we exhaust the supply, we'll
reshuffle the set of integers and start over.

`class `**`ShuffledIntegerList`**` :   `[`ShuffledList`](../object/ShuffledList.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ShuffledIntegerList`**  
`         `[`ShuffledList`](../object/ShuffledList.html)  
`                 object`  
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

` `[`rangeMax`](#rangeMax)`  `[`rangeMin`](#rangeMin)`  `[`valueList`](#valueList)`  `

Inherited from `ShuffledList` :  
` `[`suppressRepeats`](../object/ShuffledList.html#suppressRepeats)`  `[`valuesAvail`](../object/ShuffledList.html#valuesAvail)`  `[`valuesVec`](../object/ShuffledList.html#valuesVec)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`getNextValue`](#getNextValue)`  `

Inherited from `ShuffledList` :  
` `[`reshuffle`](../object/ShuffledList.html#reshuffle)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="rangeMax"></span>

`rangeMax`

[misc.t](../file/misc.t.html)\[[1552](../source/misc.t.html#1552)\]

<div class="desc">

*no description available*

</div>

<span id="rangeMin"></span>

`rangeMin`

[misc.t](../file/misc.t.html)\[[1551](../source/misc.t.html#1551)\]

<div class="desc">

The minimum and maximum values for our range. Instances should define
these to the range desired.

</div>

<span id="valueList"></span>

`valueList`<span class="rem">OVERRIDDEN</span>

[misc.t](../file/misc.t.html)\[[1555](../source/misc.t.html#1555)\]

<div class="desc">

initialize the value list on demand

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (rmin, rmax)`<span class="rem">OVERRIDDEN</span>

[misc.t](../file/misc.t.html)\[[1558](../source/misc.t.html#1558)\]

<div class="desc">

construct with the given range

</div>

<span id="getNextValue"></span>

`getNextValue ( )`<span class="rem">OVERRIDDEN</span>

[misc.t](../file/misc.t.html)\[[1565](../source/misc.t.html#1565)\]

<div class="desc">

get the next value

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
