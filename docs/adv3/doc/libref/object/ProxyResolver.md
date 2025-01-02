---
layout: docs
---
<span class="title">ProxyResolver</span><span class="type">class</span>

[resolver.t](../file/resolver.t.html)\[[761](../source/resolver.t.html#761)\]

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

Proxy Resolver - this is used to create resolvers that refer methods not
otherwise overridden back to an underlying resolver

`class `**`ProxyResolver`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ProxyResolver`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`ProxyResolver`**  
`         `[`BasicContainerResolver`](../object/BasicContainerResolver.html)  
`                 `[`ContainerResolver`](../object/ContainerResolver.html)  
`                 `[`VagueContainerResolver`](../object/VagueContainerResolver.html)  
`         `[`ExceptResolver`](../object/ExceptResolver.html)  
`         `[`InteractiveResolver`](../object/InteractiveResolver.html)  
`                 `[`DisambigResolver`](../object/DisambigResolver.html)  
`         `[`PossessiveResolver`](../object/PossessiveResolver.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`getPossessiveResolver`](#getPossessiveResolver)`  `[`propNotDefined`](#propNotDefined)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (origResolver)`

[resolver.t](../file/resolver.t.html)\[[762](../source/resolver.t.html#762)\]

<div class="desc">

*no description available*

</div>

<span id="getPossessiveResolver"></span>

`getPossessiveResolver ( )`

[resolver.t](../file/resolver.t.html)\[[776](../source/resolver.t.html#776)\]

<div class="desc">

base our possessive resolver on the proxy

</div>

<span id="propNotDefined"></span>

`propNotDefined (prop, [args])`

[resolver.t](../file/resolver.t.html)\[[769](../source/resolver.t.html#769)\]

<div class="desc">

delegate methods we don't override to the underlying resolver

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
