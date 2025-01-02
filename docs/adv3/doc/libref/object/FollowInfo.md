---
layout: docs
---
<span class="title">FollowInfo</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[80](../source/actor.t.html#80)\]

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



FollowInfo - this is an object that tracks an actor's knowledge of the
objects that the actor can follow, which are objects that actor has
witnessed leaving the current location. We keep track of each followable
object and the direction we saw it depart.

`class `**`FollowInfo`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`FollowInfo`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`connector`](#connector)[`obj`](#obj)[`sourceLocation`](#sourceLocation)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  





*(none)* <span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="connector"></span>

`connector`

[actor.t](../file/actor.t.html)\[[85](../source/actor.t.html#85)\]



the TravelConnector the object traversed to leave



<span id="obj"></span>

`obj`

[actor.t](../file/actor.t.html)\[[82](../source/actor.t.html#82)\]



the object we can follow



<span id="sourceLocation"></span>

`sourceLocation`

[actor.t](../file/actor.t.html)\[[93](../source/actor.t.html#93)\]



The source location - this is the location we saw the object depart. We
keep track of this because an actor can follow an object only if the
actor is starting from the same location where the actor saw the object
depart.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


