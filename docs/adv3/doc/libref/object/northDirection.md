---
layout: docs
---
<span class="title">northDirection</span><span class="type">object</span>

[travel.t](../file/travel.t.html)\[[166](../source/travel.t.html#166)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)



Individual compass directions.

Our macro defines a direction object with a name based on the
direction's room travel link property and the base class. So,
DefineDirection(north, Compass) defines a direction object called
'northDirection' based on the CompassDirection class, with the link
property 'north' and default travel connector 'noTravel'.

Note that we define a sorting order among the default directions as
follows. First, we define several groups of related directions, which we
put in a relative order: the compass directions, then the vertical
directions, then the "relative" (in/out) directions, and finally the
shipboard directions. Then, we order the directions within these groups.
For the sortingOrder values, we use arbitrary integers with fairly wide
separations, to leave plenty of room for custom game-specific directions
to be added before, between, after, or within these pre-defined groups.

**`northDirection`**` :   `[`CompassDirection`](../object/CompassDirection.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`northDirection`**  
[`CompassDirection`](../object/CompassDirection.html)  
[`Direction`](../object/Direction.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  







Inherited from `Direction` :  
[`allDirections`](../object/Direction.html#allDirections)[`dirProp`](../object/Direction.html#dirProp)[`sortingOrder`](../object/Direction.html#sortingOrder)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  





Inherited from `CompassDirection` :  
[`sayArriving`](../object/CompassDirection.html#sayArriving)[`sayDeparting`](../object/CompassDirection.html#sayDeparting)

Inherited from `Direction` :  
[`defaultConnector`](../object/Direction.html#defaultConnector)[`initializeDirection`](../object/Direction.html#initializeDirection)[`initializeDirectionClass`](../object/Direction.html#initializeDirectionClass)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


