<span class="title">BasicContainerResolver</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[3251](../source/parser.t.html#3251)\]

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

Basic container resolver. This is a common subclass for the standard
container resolver and the "vague" container resolver.

`class `**`BasicContainerResolver`**` :   `[`ProxyResolver`](../object/ProxyResolver.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`BasicContainerResolver`**  
`         `[`ProxyResolver`](../object/ProxyResolver.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`BasicContainerResolver`**  
`         `[`ContainerResolver`](../object/ContainerResolver.html)  
`         `[`VagueContainerResolver`](../object/VagueContainerResolver.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`isSubResolver`](#isSubResolver)`  `

` `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`filterAmbiguousNounPhrase`](#filterAmbiguousNounPhrase)`  `[`getQualifierResolver`](#getQualifierResolver)`  `

Inherited from `ProxyResolver` :  
` `[`construct`](../object/ProxyResolver.html#construct)`  `[`getPossessiveResolver`](../object/ProxyResolver.html#getPossessiveResolver)`  `[`propNotDefined`](../object/ProxyResolver.html#propNotDefined)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="isSubResolver"></span>

`isSubResolver`

[parser.t](../file/parser.t.html)\[[3253](../source/parser.t.html#3253)\]

<div class="desc">

we're a sub-phrase resolver

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="filterAmbiguousNounPhrase"></span>

`filterAmbiguousNounPhrase (lst, requiredNum, np)`

[parser.t](../file/parser.t.html)\[[3259](../source/parser.t.html#3259)\]

<div class="desc">

filter an ambiguous noun phrase

</div>

<span id="getQualifierResolver"></span>

`getQualifierResolver ( )`

[parser.t](../file/parser.t.html)\[[3256](../source/parser.t.html#3256)\]

<div class="desc">

resolve any qualifiers in the main scope

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
