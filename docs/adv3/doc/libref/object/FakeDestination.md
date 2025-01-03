---
layout: docs
---
<span class="title">FakeDestination</span><span class="type">class</span>

[travel.t](../file/travel.t.html)\[[2266](../source/travel.t.html#2266)\]

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



A fake apparent destination, for dead-end connectors. The dead-end
connector will create an object of this class to represent its apparent
but actually unreachable destination, if it has an apparent destination
name.

`class `**`FakeDestination`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`FakeDestination`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`connector`](#connector)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct) [`getDestName`](#getDestName)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="connector"></span>

`connector`

[travel.t](../file/travel.t.html)\[[2274](../source/travel.t.html#2274)\]



our underlying connector (usually a DeadEndConnector)



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (conn)`

[travel.t](../file/travel.t.html)\[[2268](../source/travel.t.html#2268)\]



construct - remember our associated connector



<span id="getDestName"></span>

`getDestName (actor, origin)`

[travel.t](../file/travel.t.html)\[[2271](../source/travel.t.html#2271)\]



get our destination name - this is the name from our connector
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


