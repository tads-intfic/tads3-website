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



Contents distinguisher. This tells objects apart based on their nominal
contents (and only applies to objects with nominal contents at all).
Note that we're interested in the \*names\* of the contents, so even if
two objects have different contents objects, they're still considered
equal if the contents' names match. (E.g., two "buckets of water" are
indistinguishable, even if the contents are two distinct "water"
objects. But "bucket of water" and "bucket of fish" are
distinguishable.)

**`contentsDistinguisher`**` :   `[`Distinguisher`](../object/Distinguisher.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`contentsDistinguisher`**  
[`Distinguisher`](../object/Distinguisher.html)  
`                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`sortOrder`](#sortOrder)

Inherited from `Distinguisher` :  
[`all`](../object/Distinguisher.html#all)[`classInitFirst`](../object/Distinguisher.html#classInitFirst)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`appliesTo`](#appliesTo)[`equal`](#equal)

Inherited from `Distinguisher` :  
[`apply`](../object/Distinguisher.html#apply)[`classInit`](../object/Distinguisher.html#classInit)[`getNames`](../object/Distinguisher.html#getNames)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="sortOrder"></span>

`sortOrder`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1625](../source/parser.t.html#1625)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="appliesTo"></span>

`appliesTo (obj)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1626](../source/parser.t.html#1626)\]



*no description available*



<span id="equal"></span>

`equal (a, b)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1627](../source/parser.t.html#1627)\]



*no description available*





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


