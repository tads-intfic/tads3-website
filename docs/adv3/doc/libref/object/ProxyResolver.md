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



Proxy Resolver - this is used to create resolvers that refer methods not
otherwise overridden back to an underlying resolver

`class `**`ProxyResolver`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ProxyResolver`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`ProxyResolver`**  
[`BasicContainerResolver`](../object/BasicContainerResolver.html)  
[`ContainerResolver`](../object/ContainerResolver.html)  
[`VagueContainerResolver`](../object/VagueContainerResolver.html)  
[`ExceptResolver`](../object/ExceptResolver.html)  
[`InteractiveResolver`](../object/InteractiveResolver.html)  
[`DisambigResolver`](../object/DisambigResolver.html)  
[`PossessiveResolver`](../object/PossessiveResolver.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct) [`getPossessiveResolver`](#getPossessiveResolver) [`propNotDefined`](#propNotDefined)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (origResolver)`

[resolver.t](../file/resolver.t.html)\[[762](../source/resolver.t.html#762)\]



*no description available*



<span id="getPossessiveResolver"></span>

`getPossessiveResolver ( )`

[resolver.t](../file/resolver.t.html)\[[776](../source/resolver.t.html#776)\]



base our possessive resolver on the proxy



<span id="propNotDefined"></span>

`propNotDefined (prop, [args])`

[resolver.t](../file/resolver.t.html)\[[769](../source/resolver.t.html#769)\]



delegate methods we don't override to the underlying resolver





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


