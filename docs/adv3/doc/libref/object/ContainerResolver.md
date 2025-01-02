---
---
<span class="title">ContainerResolver</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[3288](../source/parser.t.html#3288)\]

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

Container Resolver. This is a proxy for the main qualifier resolver that
prefers to match objects that are plausible in the sense that they
contain something in the tentative resolution of the main list.

`class `**`ContainerResolver`**` :   `[`BasicContainerResolver`](../object/BasicContainerResolver.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ContainerResolver`**  
`         `[`BasicContainerResolver`](../object/BasicContainerResolver.html)  
`                 `[`ProxyResolver`](../object/ProxyResolver.html)  
`                         object`  
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

` `[`mainList`](#mainList)`  `[`mainListText`](#mainListText)`  `

Inherited from `BasicContainerResolver` :  
` `[`isSubResolver`](../object/BasicContainerResolver.html#isSubResolver)`  `

` `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`filterAmbiguousEquivalents`](#filterAmbiguousEquivalents)`  `

Inherited from `BasicContainerResolver` :  
` `[`filterAmbiguousNounPhrase`](../object/BasicContainerResolver.html#filterAmbiguousNounPhrase)`  `[`getQualifierResolver`](../object/BasicContainerResolver.html#getQualifierResolver)`  `

Inherited from `ProxyResolver` :  
` `[`getPossessiveResolver`](../object/ProxyResolver.html#getPossessiveResolver)`  `[`propNotDefined`](../object/ProxyResolver.html#propNotDefined)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="mainList"></span>

`mainList`

[parser.t](../file/parser.t.html)\[[3330](../source/parser.t.html#3330)\]

<div class="desc">

the tentative match list for the main phrase we're qualifying

</div>

<span id="mainListText"></span>

`mainListText`

[parser.t](../file/parser.t.html)\[[3333](../source/parser.t.html#3333)\]

<div class="desc">

the text of the main phrase we're qualifying

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (mainList, mainText, origResolver)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[3289](../source/parser.t.html#3289)\]

<div class="desc">

*no description available*

</div>

<span id="filterAmbiguousEquivalents"></span>

`filterAmbiguousEquivalents (lst, np)`

[parser.t](../file/parser.t.html)\[[3300](../source/parser.t.html#3300)\]

<div class="desc">

filter ambiguous equivalents

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
