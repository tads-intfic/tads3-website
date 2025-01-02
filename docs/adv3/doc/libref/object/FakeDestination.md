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

<div class="fdesc">

A fake apparent destination, for dead-end connectors. The dead-end
connector will create an object of this class to represent its apparent
but actually unreachable destination, if it has an apparent destination
name.

`class `**`FakeDestination`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`FakeDestination`**  
`         object`  
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

[`connector`](#connector)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`construct`](#construct)[`getDestName`](#getDestName)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="connector"></span>

`connector`

[travel.t](../file/travel.t.html)\[[2274](../source/travel.t.html#2274)\]

<div class="desc">

our underlying connector (usually a DeadEndConnector)

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (conn)`

[travel.t](../file/travel.t.html)\[[2268](../source/travel.t.html#2268)\]

<div class="desc">

construct - remember our associated connector

</div>

<span id="getDestName"></span>

`getDestName (actor, origin)`

[travel.t](../file/travel.t.html)\[[2271](../source/travel.t.html#2271)\]

<div class="desc">

get our destination name - this is the name from our connector

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
