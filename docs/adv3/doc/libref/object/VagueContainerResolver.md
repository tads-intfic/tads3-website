---
layout: docs
---
<span class="title">VagueContainerResolver</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[3533](../source/parser.t.html#3533)\]

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

Container Resolver for vaguely-specified containment phrases. We'll
select for objects that have contents, but that's about as much as we
can do, since the main phrase is bounded only by the container in vague
containment phrases (and thus provides no information that would help us
narrow down the container itself).

`class `**`VagueContainerResolver`**` :   `[`BasicContainerResolver`](../object/BasicContainerResolver.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`VagueContainerResolver`**  
[`BasicContainerResolver`](../object/BasicContainerResolver.html)  
[`ProxyResolver`](../object/ProxyResolver.html)  
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



Inherited from `BasicContainerResolver` :  
[`isSubResolver`](../object/BasicContainerResolver.html#isSubResolver)



<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`filterAmbiguousEquivalents`](#filterAmbiguousEquivalents)

Inherited from `BasicContainerResolver` :  
[`filterAmbiguousNounPhrase`](../object/BasicContainerResolver.html#filterAmbiguousNounPhrase)[`getQualifierResolver`](../object/BasicContainerResolver.html#getQualifierResolver)

Inherited from `ProxyResolver` :  
[`construct`](../object/ProxyResolver.html#construct)[`getPossessiveResolver`](../object/ProxyResolver.html#getPossessiveResolver)[`propNotDefined`](../object/ProxyResolver.html#propNotDefined)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="filterAmbiguousEquivalents"></span>

`filterAmbiguousEquivalents (lst, np)`

[parser.t](../file/parser.t.html)\[[3535](../source/parser.t.html#3535)\]

<div class="desc">

filter ambiguous equivalents

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
