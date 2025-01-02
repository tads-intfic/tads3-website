---
layout: docs
---
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



Basic container resolver. This is a common subclass for the standard
container resolver and the "vague" container resolver.

`class `**`BasicContainerResolver`**` :   `[`ProxyResolver`](../object/ProxyResolver.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`BasicContainerResolver`**  
[`ProxyResolver`](../object/ProxyResolver.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`BasicContainerResolver`**  
[`ContainerResolver`](../object/ContainerResolver.html)  
[`VagueContainerResolver`](../object/VagueContainerResolver.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`isSubResolver`](#isSubResolver)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`filterAmbiguousNounPhrase`](#filterAmbiguousNounPhrase)[`getQualifierResolver`](#getQualifierResolver)

Inherited from `ProxyResolver` :  
[`construct`](../object/ProxyResolver.html#construct)[`getPossessiveResolver`](../object/ProxyResolver.html#getPossessiveResolver)[`propNotDefined`](../object/ProxyResolver.html#propNotDefined)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="isSubResolver"></span>

`isSubResolver`

[parser.t](../file/parser.t.html)\[[3253](../source/parser.t.html#3253)\]



we're a sub-phrase resolver



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="filterAmbiguousNounPhrase"></span>

`filterAmbiguousNounPhrase (lst, requiredNum, np)`

[parser.t](../file/parser.t.html)\[[3259](../source/parser.t.html#3259)\]



filter an ambiguous noun phrase



<span id="getQualifierResolver"></span>

`getQualifierResolver ( )`

[parser.t](../file/parser.t.html)\[[3256](../source/parser.t.html#3256)\]



resolve any qualifiers in the main scope





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


