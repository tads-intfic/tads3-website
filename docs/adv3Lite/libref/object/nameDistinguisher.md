---
---
<span class="title">nameDistinguisher</span><span class="type">object</span>

[parser.t](../file/parser.t.html)\[[1542](../source/parser.t.html#1542)\]

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

The basic name distinguisher distinguishes objects by their base names.
This is the first distinguisher we apply, since the name is always the
easiest way to tell objects apart in parsing. However since one name
could be entirely contained within another (e.g. 'ball' and 'red ball')
we consider the names as equal for this purpose if one of them is part
of the other.

**`nameDistinguisher`**` :   `[`Distinguisher`](../object/Distinguisher.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`nameDistinguisher`**  
`         `[`Distinguisher`](../object/Distinguisher.html)  
`                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`sortOrder`](#sortOrder)`  `

Inherited from `Distinguisher` :  
` `[`all`](../object/Distinguisher.html#all)`  `[`classInitFirst`](../object/Distinguisher.html#classInitFirst)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`equal`](#equal)`  `

Inherited from `Distinguisher` :  
` `[`appliesTo`](../object/Distinguisher.html#appliesTo)`  `[`apply`](../object/Distinguisher.html#apply)`  `[`classInit`](../object/Distinguisher.html#classInit)`  `[`getNames`](../object/Distinguisher.html#getNames)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="sortOrder"></span>

`sortOrder`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1543](../source/parser.t.html#1543)\]

<div class="desc">

*no description available*

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="equal"></span>

`equal (a, b)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1544](../source/parser.t.html#1544)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
