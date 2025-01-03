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



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Collective`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`Collective`**  
[`Matchbook`](../object/Matchbook.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`filterResolveList`](#filterResolveList) [`isCollectiveFor`](#isCollectiveFor)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="filterResolveList"></span>

`filterResolveList (lst, action, whichObj, np, requiredNum)`

[objects.t](../file/objects.t.html)\[[984](../source/objects.t.html#984)\]



*no description available*



<span id="isCollectiveFor"></span>

`isCollectiveFor (obj)`

[objects.t](../file/objects.t.html)\[[1037](../source/objects.t.html#1037)\]



Determine if I'm a collective object for the given object.

In order to be a collective for some objects, an object must have
vocubulary for the plural name, and must return true from this method
for the collected objects.
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


