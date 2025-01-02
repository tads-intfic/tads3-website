---
---
<span class="title">DirectionProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[640](../source/parser.t.html#640)\]

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

Base class for "direction" productions. Each direction (the compass
directions, the vertical directions, the shipboard directions, and so
on) must have an associated grammar rule, which must produce one of
these. This should be subclassed with grammar rules like this:

grammar directionName: 'north' \| 'n' : DirectionProd  
dir = northDirection  
;

`class `**`DirectionProd`**` :   `[`BasicProd`](../object/BasicProd.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`DirectionProd`**  
`         `[`BasicProd`](../object/BasicProd.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`DirectionProd`**  
`         `[`directionName(aft)`](../object/directionName(aft).html)  
`         `[`directionName(down)`](../object/directionName(down).html)  
`         `[`directionName(east)`](../object/directionName(east).html)  
`         `[`directionName(fore)`](../object/directionName(fore).html)  
`         `[`directionName(in)`](../object/directionName(in).html)  
`         `[`directionName(north)`](../object/directionName(north).html)  
`         `[`directionName(northeast)`](../object/directionName(northeast).html)  
`         `[`directionName(northwest)`](../object/directionName(northwest).html)  
`         `[`directionName(out)`](../object/directionName(out).html)  
`         `[`directionName(port)`](../object/directionName(port).html)  
`         `[`directionName(south)`](../object/directionName(south).html)  
`         `[`directionName(southeast)`](../object/directionName(southeast).html)  
`         `[`directionName(southwest)`](../object/directionName(southwest).html)  
`         `[`directionName(starboard)`](../object/directionName(starboard).html)  
`         `[`directionName(up)`](../object/directionName(up).html)  
`         `[`directionName(west)`](../object/directionName(west).html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`dir`](#dir)`  `

Inherited from `BasicProd` :  
` `[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)`  `[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)`  `[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `

Inherited from `BasicProd` :  
` `[`canResolveTo`](../object/BasicProd.html#canResolveTo)`  `[`getOrigText`](../object/BasicProd.html#getOrigText)`  `[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)`  `[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="dir"></span>

`dir`

[parser.t](../file/parser.t.html)\[[646](../source/parser.t.html#646)\]

<div class="desc">

Each direction-specific grammar rule subclass must set this property to
the associated direction object (northDirection, etc).

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

*(none)*

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
