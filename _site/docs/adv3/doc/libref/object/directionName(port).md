<span class="title">directionName(port)</span><span class="type">grammar</span>

[en_us.t](../file/en_us.t.html)\[[3125](../source/en_us.t.html#3125)\]

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

The English-specific shipboard direction modifications. Certain of the
ship directions have no natural descriptions for arrival and/or
departure; for example, there's no good way to say "arriving from fore."
Others don't fit any regular pattern: "he goes aft" rather than "he
departs to aft." As a result, these are a bit irregular compared to the
compass directions and so are individually defined below.

`grammar `<span class="gramalt">[`directionName`](../object/directionName.html)`(port)`</span>` :   `[`DirectionProd`](../object/DirectionProd.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`directionName(port)`**  
`         `[`DirectionProd`](../object/DirectionProd.html)  
`                 `[`BasicProd`](../object/BasicProd.html)  
`                         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

Inherited from `DirectionProd` :  
` `[`dir`](../object/DirectionProd.html#dir)`  `

Inherited from `BasicProd` :  
` `[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)`  `[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)`  `[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`sayArriving`](#sayArriving)`  `[`sayDeparting`](#sayDeparting)`  `

` `

Inherited from `BasicProd` :  
` `[`canResolveTo`](../object/BasicProd.html#canResolveTo)`  `[`getOrigText`](../object/BasicProd.html#getOrigText)`  `[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)`  `[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="sayArriving"></span>

`sayArriving (trav)`

[en_us.t](../file/en_us.t.html)\[[3126](../source/en_us.t.html#3126)\]

<div class="desc">

*no description available*

</div>

<span id="sayDeparting"></span>

`sayDeparting (trav)`

[en_us.t](../file/en_us.t.html)\[[3128](../source/en_us.t.html#3128)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>