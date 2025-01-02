---
layout: docs
---
<span class="title">PossessiveResolver</span><span class="type">class</span>

[resolver.t](../file/resolver.t.html)\[[1068](../source/resolver.t.html#1068)\]

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



A possessive resolver is a proxy to a main resolver that considers an
object in scope if (a) it's in scope in the base resolver, or (b) the
object is known to the actor.

`class `**`PossessiveResolver`**` :   `[`ProxyResolver`](../object/ProxyResolver.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`PossessiveResolver`**  
[`ProxyResolver`](../object/ProxyResolver.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`isSubResolver`](#isSubResolver)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`objInScope`](#objInScope)

Inherited from `ProxyResolver` :  
[`construct`](../object/ProxyResolver.html#construct) [`getPossessiveResolver`](../object/ProxyResolver.html#getPossessiveResolver) [`propNotDefined`](../object/ProxyResolver.html#propNotDefined)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="isSubResolver"></span>

`isSubResolver`

[resolver.t](../file/resolver.t.html)\[[1083](../source/resolver.t.html#1083)\]



this is a sub-resolver



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="objInScope"></span>

`objInScope (obj)`

[resolver.t](../file/resolver.t.html)\[[1069](../source/resolver.t.html#1069)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


