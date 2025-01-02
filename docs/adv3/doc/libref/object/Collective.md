---
layout: docs
---
<span class="title">Collective</span><span class="type">class</span>

[objects.t](../file/objects.t.html)\[[983](../source/objects.t.html#983)\]

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

Collective - this is an object that can be used to refer to a group of
other (usually equivalent) objects collectively. In most cases, this
object will be a separate game object that contains or can contain the
individuals: a bag of marbles can be a collective for the marbles, or a
book of matches can be a collective for the matchsticks.

A collective object is usually given the same plural vocabulary as its
individuals. When we use that plural vocabulary, we will filter for or
against the collective, as determined by the noun phrase production,
when the player uses the collective term.

This is a mix-in class, intended to be used along with other (usually
Thing-derived) superclasses.

`class `**`Collective`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Collective`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`Collective`**  
`         `[`Matchbook`](../object/Matchbook.html)  
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

` `[`filterResolveList`](#filterResolveList)`  `[`isCollectiveFor`](#isCollectiveFor)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="filterResolveList"></span>

`filterResolveList (lst, action, whichObj, np, requiredNum)`

[objects.t](../file/objects.t.html)\[[984](../source/objects.t.html#984)\]

<div class="desc">

*no description available*

</div>

<span id="isCollectiveFor"></span>

`isCollectiveFor (obj)`

[objects.t](../file/objects.t.html)\[[1037](../source/objects.t.html#1037)\]

<div class="desc">

Determine if I'm a collective object for the given object.

In order to be a collective for some objects, an object must have
vocubulary for the plural name, and must return true from this method
for the collected objects.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
