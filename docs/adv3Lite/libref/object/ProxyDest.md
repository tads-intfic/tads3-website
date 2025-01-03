---
layout: docs
---
<span class="title">ProxyDest</span><span class="type">class</span>

[extras.t](../file/extras.t.html)\[[777](../source/extras.t.html#777)\]

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



ProxyDest is a mix-in class for use with an object that represents the
exterior of a room, such as a hut in a field. Its purpose is to remove
such an object as the possible target of a GO TO command provided
there's another alternative. This prevents a GO TO command from taking
the player character from the appropriate room to an inappropriate
destination.

`class `**`ProxyDest`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ProxyDest`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`ProxyDest`**  
[`Distant`](../object/Distant.html)  
[`Enterable`](../object/Enterable.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`filterResolveList`](#filterResolveList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="filterResolveList"></span>

`filterResolveList (np, cmd, mode)`

[extras.t](../file/extras.t.html)\[[778](../source/extras.t.html#778)\]



*no description available*
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


