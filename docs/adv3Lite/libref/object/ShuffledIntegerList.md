---
---
<span class="title">ShuffledIntegerList</span><span class="type">class</span>

[eventList.t](../file/eventList.t.html)\[[678](../source/eventList.t.html#678)\]

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

[eventList.t](../file/eventList.t.html)\[[684](../source/eventList.t.html#684)\]

<div class="desc">

*no description available*

</div>

<span id="rangeMin"></span>

`rangeMin`

[eventList.t](../file/eventList.t.html)\[[683](../source/eventList.t.html#683)\]

<div class="desc">

The minimum and maximum values for our range. Instances should define
these to the range desired.

</div>

<span id="valueList"></span>

`valueList`<span class="rem">OVERRIDDEN</span>

[eventList.t](../file/eventList.t.html)\[[687](../source/eventList.t.html#687)\]

<div class="desc">

initialize the value list on demand

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (rmin, rmax)`<span class="rem">OVERRIDDEN</span>

[eventList.t](../file/eventList.t.html)\[[690](../source/eventList.t.html#690)\]

<div class="desc">

construct with the given range

</div>

<span id="getNextValue"></span>

`getNextValue ( )`<span class="rem">OVERRIDDEN</span>

[eventList.t](../file/eventList.t.html)\[[697](../source/eventList.t.html#697)\]

<div class="desc">

get the next value

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
