---
layout: docs
---
<span class="title">contentsDistinguisher</span><span class="type">object</span>

[parser.t](../file/parser.t.html)\[[1624](../source/parser.t.html#1624)\]

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

Contents distinguisher. This tells objects apart based on their nominal
contents (and only applies to objects with nominal contents at all).
Note that we're interested in the \*names\* of the contents, so even if
two objects have different contents objects, they're still considered
equal if the contents' names match. (E.g., two "buckets of water" are
indistinguishable, even if the contents are two distinct "water"
objects. But "bucket of water" and "bucket of fish" are
distinguishable.)

**`contentsDistinguisher`**` :   `[`Distinguisher`](../object/Distinguisher.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`contentsDistinguisher`**  
[`Distinguisher`](../object/Distinguisher.html)  
`                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`sortOrder`](#sortOrder)

Inherited from `Distinguisher` :  
[`all`](../object/Distinguisher.html#all)[`classInitFirst`](../object/Distinguisher.html#classInitFirst)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`appliesTo`](#appliesTo)[`equal`](#equal)

Inherited from `Distinguisher` :  
[`apply`](../object/Distinguisher.html#apply)[`classInit`](../object/Distinguisher.html#classInit)[`getNames`](../object/Distinguisher.html#getNames)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="sortOrder"></span>

`sortOrder`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1625](../source/parser.t.html#1625)\]

<div class="desc">

*no description available*

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="appliesTo"></span>

`appliesTo (obj)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1626](../source/parser.t.html#1626)\]

<div class="desc">

*no description available*

</div>

<span id="equal"></span>

`equal (a, b)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1627](../source/parser.t.html#1627)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
