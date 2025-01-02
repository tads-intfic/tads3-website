---
layout: docs
---
<span class="title">CompassDirection</span><span class="type">class</span>

[travel.t](../file/travel.t.html)\[[110](../source/travel.t.html#110)\],
[en_us.t](../file/en_us.t.html)\[[3072](../source/en_us.t.html#3072)\]

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



The base class for compass directions (north, south, etc). We don't add
anything to the basic Direction class, but we use a separate class for
compass directions to allow language-specific customizations for all of
the directions and to allow travel commands to treat these specially
when needed.

*Modified in
[en_us.t](../file/en_us.t.html)\[[3072](../source/en_us.t.html#3072)\]:*  
The English-specific modifications for compass directions.

`class `**`CompassDirection`**` :   `[`Direction`](../object/Direction.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`CompassDirection`**  
[`Direction`](../object/Direction.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`eastDirection`](../object/eastDirection.html) [`northDirection`](../object/northDirection.html) [`northeastDirection`](../object/northeastDirection.html) [`northwestDirection`](../object/northwestDirection.html) [`southDirection`](../object/southDirection.html) [`southeastDirection`](../object/southeastDirection.html) [`southwestDirection`](../object/southwestDirection.html) [`westDirection`](../object/westDirection.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





Inherited from `Direction` :  
[`allDirections`](../object/Direction.html#allDirections) [`dirProp`](../object/Direction.html#dirProp) [`sortingOrder`](../object/Direction.html#sortingOrder)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`sayArriving`](#sayArriving) [`sayDeparting`](#sayDeparting)

Inherited from `Direction` :  
[`defaultConnector`](../object/Direction.html#defaultConnector) [`initializeDirection`](../object/Direction.html#initializeDirection) [`initializeDirectionClass`](../object/Direction.html#initializeDirectionClass)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="sayArriving"></span>

`sayArriving (traveler)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[3074](../source/en_us.t.html#3074)\]



describe a traveler arriving from this direction



<span id="sayDeparting"></span>

`sayDeparting (traveler)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[3081](../source/en_us.t.html#3081)\]



describe a traveler departing in this direction





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


